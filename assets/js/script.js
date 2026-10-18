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


// Фильтр списков материалов. Статьи и новости не скрываем и не перенаправляем.
(function(){
  const form = document.getElementById('seasonFilter');
  if (!form) return;
  const select = document.getElementById('seasonSelect');
  const general = document.getElementById('seasonGeneral');
  const empty = document.getElementById('seasonFilterEmpty');
  const status = document.getElementById('seasonFilterStatus');
  const items = [...document.querySelectorAll('.links-list > .link-item')];
  const allowed = new Set([...select.options].map(option => option.value));

  function readSelection(){
    const params = new URL(location.href).searchParams;
    const requested = params.get('season') || form.dataset.currentSeason;
    select.value = allowed.has(requested) ? requested : form.dataset.currentSeason;
    general.checked = params.get('general') !== '0';
  }
  function apply(){
    let visible = 0;
    items.forEach(item => {
      const seasons = (item.dataset.seasons || '').split(' ').filter(Boolean);
      const common = item.dataset.general === 'true';
      const seasonMatches = seasons.length > 0 && (select.value === 'all' || seasons.includes(select.value));
      // Неразмеченный материал не объявляем общим и не теряем из списка.
      const unclassified = seasons.length === 0 && !common;
      item.hidden = !(seasonMatches || (general.checked && common) || unclassified);
      if (!item.hidden) visible++;
      const sectionLink = item.querySelector('.link');
      if (sectionLink && item.classList.contains('section-link')) {
        const url = new URL(sectionLink.href);
        url.searchParams.set('season', select.value);
        url.searchParams.set('general', general.checked ? '1' : '0');
        sectionLink.href = url.href;
      }
    });
    empty.hidden = visible > 0 || items.length === 0;
    status.textContent = `Показано: ${visible} из ${items.length}.`;
  }
  form.addEventListener('submit', e => e.preventDefault());
  form.addEventListener('change', () => {
    const url = new URL(location.href);
    url.searchParams.set('season', select.value);
    url.searchParams.set('general', general.checked ? '1' : '0');
    history.pushState(null, '', url);
    apply();
  });
  window.addEventListener('popstate', () => { readSelection(); apply(); });
  readSelection();
  apply();
  form.hidden = false;
})();

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

