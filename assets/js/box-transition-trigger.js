!(function () {
    'use strict';

    let box = document.querySelector('#box');
    box.addEventListener('click', function (event) {
        event.target.classList.toggle('left')
        event.target.classList.toggle('right')
    })
})();