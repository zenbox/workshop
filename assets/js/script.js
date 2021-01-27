// Declaration
let
    hamburger = document.querySelector('.hamburger'),
    container = document.querySelector('.flex-container');

    // Methods
function onHamburgerClicked() {
    container.classList.toggle('flex-container--opened');
}

// Control: Event-Control
hamburger.addEventListener('click', onHamburgerClicked);