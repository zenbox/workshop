// Sass Files
import "./index.scss";

// Materials Design Behaviour
// - - - - - - - - - -

// Ripples:
// Buttons, icons, card actions
// - - - - - - - - - -
import {
    MDCRipple
} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function (el) {
    return new MDCRipple(el);
});
// - - - - - - - - - -



// Material Design Components
// - - - - - - - - - -

// App Bar
// - - - - - - - - - -

import {
    MDCTopAppBar
} from '@material/top-app-bar';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
// - - - - - - - - - -

// Navigation Drawer
// - - - - - - - - - -
import {
    MDCDrawer
} from "@material/drawer";

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.listen('MDCTopAppBar:nav', () => {
    drawer.open = !drawer.open;
});

const listEl = document.querySelector('.mdc-drawer .mdc-list');
const mainContentEl = document.querySelector('.mdc-drawer-app-content');
const drawerCloser = document.querySelector('.drawer-close-icon')

listEl.addEventListener('click', (event) => {
    drawer.open = false;
});

drawerCloser.addEventListener('click', (event) => {
    drawer.open = false;
});

document.body.addEventListener('MDCDrawer:closed', () => {
    mainContentEl.querySelector('input, button').focus();
});