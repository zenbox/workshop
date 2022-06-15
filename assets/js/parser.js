/** A Parser Example
 *
 * @package Webapplication
 * @module Parser
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-06-15
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

class Parser {
    constructor(value = 'default') {
        this._property = value;
    }

    getProperty() {}
    setProperty() {}
}

let myParser = new Parser('fortytwo');

(function () {
    'use strict';
    // - - - - - - - - - -
    // The old way
    // Declaration
    let
        paragraph = document.createElement('p'),
        bold = document.createElement('b'),
        text = document.createTextNode('lorem ipsum dolor sit amet consectetur ad piscit ...'),
        context = document.querySelector('body');

    bold.appendChild(text);
    paragraph.appendChild(bold);
    paragraph.setAttribute('id', 'my-paragraph');
    paragraph.classList.add('generated');
    paragraph.style.backgroundColor = 'hsla(0, 0%, 0%, 0.125)';
    context.appendChild(paragraph);

    let p = document.querySelector('p');

    console.log(p);
    console.log('id: ', p.id);
    console.log('classes: ', p.classList);
    console.log('text: ', p.innerText);
    console.log('html: ', p.innerHTML);

    // Read files
    let
        url = 'https://localhost:5502/data.html',
        options = {
            method: 'GET',
            headers: {
                'Content-Type': 'text/html',
                // 'OPTIONS': 'https://google.de',
                // 'Host': 'google.de',
                'Origin': 'http://localhost',
                'Access-Control-Request-Method': 'GET',
                'Access-Control-Request-Headers': 'Content-Type',

            }
        };

    // Methods
    // function onFetchUrl(response) {
    //     console.dir(response);
    //     console.dir(response.body);
    //     console.log(typeof response.body)
    // }

    // // Control
    // fetch(url, options)
    //     .then(response => response.body)
    //     .then(body => {
    //         const reader = body.getReader()
    //     })
    //     .catch(error => console.log(error))


    // Old style AJAX
    let xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        switch (xhr.readyState) {
            case 4:
                if (xhr.status === 200) {
                    console.dir(xhr);
                    console.log(xhr.responseText);
                }
                break;
        }
    })
    xhr.open('GET', url);
    xhr.send();


    // - - - - - - - - - -
}());