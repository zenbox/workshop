/**
 * An example for AJAX and DOM Manipulation
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/16
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

(function () {
    'use strict';
    // - - - - - - - - - -
    // declaration
    let
        loadButton = document.querySelector('#loadButton');

    // methods
    /**
     * @param {object} event 
     */
    function onLoadButton(event) {
        // declaration
        let
            _type = event.type,
            _target = event.target,
            _file = _target.dataset.file,
            _callback = _target.dataset.function;

        // control
        // do something after clicking
        loadDataFromServer(_file, _callback);
    }

    /**
     * 
     * @param {string} file 
     * @param {string} callback 
     */
    function loadDataFromServer(file, callback) {
        let
            _file = file || undefined,
            _callback = callback || undefined,
            _data = {},
            xhr = new XMLHttpRequest();

        function onReadyStateChange() {
            switch (xhr.readyState) {
                case 0:
                    console.log('there is no request');
                    break;
                case 1:
                    console.log('request opened');
                    break;
                case 2:
                    console.log('request sent');
                    break;
                case 3:
                    console.log('response first part ...');
                    console.log(xhr);
                    if (xhr.status === 200 || xhr.status === 301) {
                        // console.log('the right data (maybe from cache)');
                    }
                    _data.state = 'success';
                    break;
                case 4:
                    console.log('response more parts and finished!');
                    if (xhr.status === 200 || xhr.status === 304) {
                        console.log(xhr.response);
                        _data = JSON.parse(xhr.response);

                        console.log(typeof _callback);

                        // String to function (not everybodies darling)
                        eval(_callback + '(_data)');
                    }
                    break;
                default:
                    console.log('something strange happened!');
                    break;
            }
        }

        /**
         * 
         * @param {object} data 
         */
        function printDataOnPage(data) {
            let _data = data || undefined,
                unorderedList,
                listElements = [],
                textElements = [],
                text, i = 0;

            // build a list
            unorderedList = document.createElement('ul');

            for (let key in data) {
                listElements[i] = document.createElement('li');
                textElements[i] = document.createTextNode(key + ': ' + data[key]);
                console.log(listElements[i]);
                console.log(textElements[i]);
                i++;
            }

            for (let i = 0; i < listElements.length; i += 1) {
                listElements[i].appendChild(textElements[i]);
                unorderedList.appendChild(listElements[i]);
            }

            output.appendChild(unorderedList);
        }
        // control
        xhr.addEventListener('readystatechange', onReadyStateChange);
        xhr.open("GET", _file);
        xhr.send();
    }

    // event control
    loadButton.addEventListener('click', onLoadButton);

    // - - - - - - - - - -
}())