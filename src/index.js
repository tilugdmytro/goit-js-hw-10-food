import menuCardsTpl from './templates/menu-cards.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = createMenuCardsMarkup(menu);

function createMenuCardsMarkup(menu) {
  return menuCardsTpl(menu);
}
menuContainer.insertAdjacentHTML('afterbegin', menuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyEl = document.querySelector('body');
bodyEl.classList.add(Theme.LIGHT);

const switchCheckboxTheme = document.querySelector('#theme-switch-toggle');

switchCheckboxTheme.addEventListener('change', onCheckboxClick);

function onCheckboxClick(evt) {
  if (evt.currentTarget.checked) {
    bodyEl.classList.remove(Theme.LIGHT);
    bodyEl.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    bodyEl.classList.remove(Theme.DARK);
    bodyEl.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const storageTheme = localStorage.getItem('theme');
if (storageTheme === Theme.DARK) {
  switchCheckboxTheme.checked = true;
  bodyEl.classList.remove(Theme.LIGHT);
  bodyEl.classList.add(Theme.DARK);
}
