// Declaration
let
    worker = new Worker('assets/js/worker-task.js'),
    displayList, searchButton, fromNumber, toNumber;

// Methods
let calculate = function () {
    let
        from = fromNumber.value,
        to = toNumber.value;

    worker.postMessage({
        "from": from,
        "to": to
    });

    // statusDisplay.innerHTML = '<b>working ...</b>';
}

// Control
worker.onmessage = function (event) {
    let
        messageType = event.data.messageType,
        data = event.data.data;

    switch (messageType) {
        default:
            // statusDisplay.innerHTML = '<b>x % done ...</b>';
            break;
        case 'primelist':
            displayList.innerText = data.join(', ');
            break;
    }
}

cancelSearch = function () {
    worker.terminate();
    worker = null;
    // statusDisplay.innerHTML = `Search cancelled`;
}

window.onload = function () {
    displayList = document.querySelector('#display-list');
    searchButton = document.querySelector('#search-button');
    fromNumber = document.querySelector('#from-number');
    toNumber = document.querySelector('#to-number');

    searchButton.addEventListener('click', calculate);
}



// DOM elements and attributes

// New DOM elements
let newDiv = document.createElement('div');
// let newSVGCircle = svg.createElementNS('http://www.w3.org/1999/svg', 'circle');

// Addding attributes
newDiv.setAttribute('id', 'new-element-id');

// Addding Text
let newText = document.createTextNode('lorem ipsum ...');
newDiv.appendChild(newText);

// Adding classes: add(), remove(), toggle(), change()
newDiv.classList.add('new-class');

let context = document.querySelector('body');

// Add to the DOM
// appendChild(), insertBefore()
context.appendChild(newDiv);