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
window.onload = function () {
    displayList = document.querySelector('#display-list');
    searchButton = document.querySelector('#search-button');
    fromNumber = document.querySelector('#from-number');
    toNumber = document.querySelector('#to-number');

    searchButton.addEventListener('click', calculate);
}