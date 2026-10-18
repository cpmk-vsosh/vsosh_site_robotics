// ===== Меню =====
const nav    = document.getElementById('siteNav');
const burger = document.getElementById('burger');
const menu   = document.getElementById('menu');
const isMobile = () => window.matchMedia('(max-width: 960px)').matches;

function setExpanded(li, val){
  li?.querySelector('.submenu-toggle')?.setAttribute('aria-expanded', String(val));
}
function closeAllSubmenus(except=null){
  menu?.querySelectorAll('.has-sub').forEach(li => {
    if (li !== except) {
      li.classList.remove('open', 'hover-open');
      setExpanded(li, false);
    }
  });
}
function closeNav(){
  nav?.classList.remove('open');
  burger?.setAttribute('aria-expanded','false');
  closeAllSubmenus();
}

// Бургер
burger?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', String(open));
});

// Единое состояние подменю для клика, клавиатуры и наведения: Escape закрывает всё.
menu?.querySelectorAll('.submenu-toggle').forEach(btn => {
  const li = btn.closest('.has-sub');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nowOpen = !li.classList.contains('open');
    closeAllSubmenus(li);
    li.classList.remove('hover-open');
    li.classList.toggle('open', nowOpen);
    setExpanded(li, nowOpen);
  });
  li.addEventListener('pointerenter', (e) => {
    if (isMobile() || e.pointerType === 'touch') return;
    closeAllSubmenus(li);
    if (!li.classList.contains('open')) li.classList.add('hover-open');
    setExpanded(li, true);
  });
  li.addEventListener('pointerleave', () => {
    if (!li.classList.contains('hover-open')) return;
    li.classList.remove('hover-open');
    // Не скрываем ссылки, если пользователь уже перешёл к ним клавиатурой.
    if (li.contains(document.activeElement)) li.classList.add('open');
    setExpanded(li, li.classList.contains('open'));
  });
});

// ФОКУС: держать открытым только то, где сейчас фокус; вне меню — всё закрыть
document.addEventListener('focusin', (e) => {
  if (!menu) return;
  const target = e.target;
  if (!nav.contains(target)) {             // фокус ушёл из навигации
    closeAllSubmenus();
    return;
  }
  const li = target.closest('.has-sub');
  // На мобиле не схлопываем подменю от фокуса: это сдвигает ссылку под указателем.
  if (!isMobile()) closeAllSubmenus(li);
});

// Клик-вне: закрыть меню/подменю (надёжнее, чем contains, учитывает псевдооверлей)
document.addEventListener('click', (e) => {
  const inside = e.target.closest('#menu, #burger');
  if (!inside) closeNav();
});

// ESC — закрыть
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const mobileNavOpen = isMobile() && nav?.classList.contains('open');
  const li = document.activeElement?.closest('#menu .has-sub') || menu?.querySelector('.open, .hover-open');
  closeNav();
  if (mobileNavOpen) burger?.focus();
  else li?.querySelector('.submenu-toggle')?.focus();
});

// После перехода по ссылке на мобиле — закрыть меню
menu?.addEventListener('click', (e) => {
  const isLink = e.target.closest('a[role="menuitem"]');
  if (isLink && isMobile()) closeNav();
});


// Кнопка Назад
(function(){
  const backBtn = document.getElementById('goBack');
  if (!backBtn) return;
  backBtn.addEventListener('click', (e) => {
    // Сохраняем стандартное открытие ссылки в новой вкладке.
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    if (backBtn.dataset.history === 'false') return;
    if (document.referrer && history.length > 1) {
      try {
        const ref = new URL(document.referrer);
        if (ref.origin === location.origin) {
          e.preventDefault();
          history.back();
        }
      } catch(_) {}
    }
    // Без доступной внутренней истории работает обычный href на главную.
  });
})();

// При смене режима сбрасываем меню и не оставляем фокус на скрытом элементе.
window.matchMedia('(max-width: 960px)').addEventListener('change', () => {
  const focusInMenu = menu?.contains(document.activeElement);
  const focusOnBurger = document.activeElement === burger;
  closeNav();
  if (isMobile() && focusInMenu) burger?.focus();
  else if (!isMobile() && focusOnBurger) nav?.querySelector('.brand')?.focus();
});

