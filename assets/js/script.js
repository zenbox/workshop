// IIFE - Immediate Invoked Function Expression
let app = (function () {
    'use strict';
    // - - - - - - - - - -
    // Declarations
    let searchForm = document.querySelector('#form-search');
    let xhr = new XMLHttpRequest();


    // Methods
    function onFormSearchSubmit(event) {
        let searchValue = event.target[0].value;

        // Avoid browser control
        event.preventDefault();

        // Call loading data from server
        loadContentsFromSearch(searchValue);

        // console.dir(event);
        // console.log(document.querySelector('#search').value);
        // console.log(document.querySelectorAll('.my-class').length);
        // console.log(document.getElementById('search').value);
        // console.log(Array.isArray(document.getElementsByClassName('my-class')));
    }

    function loadContentsFromSearch(searchValue = undefined) {
        // AJAX Request
        xhr.addEventListener('readystatechange', onReadyStateChange);

        xhr.open('GET', 'assets/data/data.json');
        xhr.send({
            searchValue: searchValue
        });
    }

    function onReadyStateChange() {
        let data;

        switch (xhr.readyState) {
            case 1:
                console.log("request opened");
                break;
            case 2:
                console.log("request sent");
                break;
            case 3:
                console.log("response open");
                break;
            case 4:
                console.log("response end");
                data = JSON.parse(xhr.response);
                console.log(data);
                break;
        }
    }

    function createList() {
        console.log('yes, a list ...');
        let li = document.createElement('li');
        li.setAttribute('lang', 'de');
        let content = document.createTextNode('irgendwas deutsches als Text');
        li.appendChild(content);
        let context = document.querySelector('main');
        context.appendChild(li);
    }

    function _init() {
        console.log(new Date());
    }

    // $('<li>')
    //     .attr('lang', 'de')
    //     .text('irgendwas deutsches, aber  mit jQuery eingefügt')
    //     .appendTo('main');

    // Control
    // searchForm.addEventListener('submit', onFormSearchSubmit);
    searchForm.onsubmit = onFormSearchSubmit;

    let _app = {
        init: _init
    };

    return _app;
    // - - - - - - - - - -
}());

window.addEventListener('DOMContentLoaded', app.init);