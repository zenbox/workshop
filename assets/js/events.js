// Event auf den Button abfangen und verarbeiten

// 1. Objekt selektieren
let button = document.querySelector('.button');


// 2. Funktionen
function onButtonMouseEnter(event) {
    button.classList.add('hover');
    console.log('mouse enter!!!');
}

function onButtonMouseLeave(event) {
    button.classList.remove('hover');
    console.log('mouse leave!!!');
}

// 3. Eventlistener setzen
button.addEventListener('mouseenter', onButtonMouseEnter);
button.addEventListener('mouseleave', onButtonMouseLeave);