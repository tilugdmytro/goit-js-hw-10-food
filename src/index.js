import menuCardsTpl from "./templates/menu-cards.hbs";
import menu from "./menu.json";

const menuContainer = document.querySelector(".js-menu");
const menuMarkup = createMenuCardsMarkup(menu);

function createMenuCardsMarkup(menu) {
  return menuCardsTpl(menu);
}
menuContainer.insertAdjacentHTML("afterbegin", menuMarkup);
