// Some scripting ...

let
    hamburger = document.querySelector('.header__hamburger'),
    headerNavigation = document.querySelector('.header nav');

hamburger.onclick = (event) => {
    headerNavigation.classList.toggle('header__nav--closed');
};