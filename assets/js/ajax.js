/** An AJAX Request
 *
 *  @desc 
 *
 * @package Webapplication
 * @module loader
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-01-27
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */


// Asynchronous Javascript And Xml

let xhr = XMLHttpRequest();
let data = {};


xhr.addEventListener('readystatechange', function () {
    switch (xhr.status) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            do();
            break;
    }
})

xhr.open('get', 'data.json');
xhr.send(data);