// Declaration


let
    body = document.querySelector('body'),
    hamburger = document.querySelector('#hamburger'),
    container = document.querySelector('.flex-container');

this === window;

// Methods
let onHamburgerClicked = function (event) {
    console.log(event.target); // this
    if (event.target.id === 'hamburger' || event.target.parentNode.id === 'hamburger') {
        container.classList.toggle('flex-container--opened');
    }
}


// let onHamburgerClicked = event => {
//     console.log(event.target); // this
//     if (event.target.id === 'hamburger' || event.target.parentNode.id === 'hamburger') {
//         container.classList.toggle('flex-container--opened');
//     }
// }

// Control: Event-Control
body.addEventListener('click', onHamburgerClicked);



// document.querySelector('#id') => eine Objektreferenz!
// document.getElementById('id')

// document.querySelectorAll('a[href]') => ein Array mit Objektreferenzen!
// document.getElementsByClassname('classes')

// for (let i = 0; i < array.length; i += 1) { 
//     array[i].addEventListener(...)
// }







console.log(window
    .document
    .querySelector('html')
    .style
)


// function addEventListener(type, callback) { 
//     let event = {};

//     event.type = type;
//     event.timestamp = new Date();

//     callback(event);
// }