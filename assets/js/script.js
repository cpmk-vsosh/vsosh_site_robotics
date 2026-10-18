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
      li.classList.remove('open');
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

// Подменю: клик, Enter и Пробел работают на любом экране; наведение — через CSS.
menu?.querySelectorAll('.submenu-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const li = btn.closest('.has-sub');
    const nowOpen = !li.classList.contains('open');
    closeAllSubmenus(li);                  // держим открытым только текущее
    li.classList.toggle('open', nowOpen);
    setExpanded(li, nowOpen);
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
  closeAllSubmenus(li);                   // сам фокус не раскрывает подменю
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
  const li = document.activeElement?.closest('#menu .has-sub');
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

// При переходе с мобилы на десктоп — очистить мобильное состояние
window.addEventListener('resize', () => {
  if (!isMobile()) closeNav();
});

