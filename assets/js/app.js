/** An Example Application
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-04-08
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */

(function () {
    'use strict'
    // - - - - - - - - - - -
    // Declaration
    // hoisting!
    let links = [],
        a = 42,
        b = 108
    // getElementById(), getElementsByClassName()

    // Methods / functions

    /** onAnchorClick
     *
     * @version v1.0.0
     * @since 2020-04-08
     * @callback namepath
     * @param {type} desc
     * @returns {void}
     */
    function onAnchorClick(event) {
        let content;

        // no browser processing
        event.preventDefault()

        // avoid bubbling
        // event.stopPropagation();
        // event.stopImmediatePropagation();

        // event.target === this
        if (event.target.tagName === 'A') {
            content = event.target.href;
            loadContent(content);
        }
    }

    function setIndicator(selector) {
        let context = document.querySelector(selector),
            spinner = document.createElement('div');

        spinner.setAttribute('id', 'spinner');
        spinner.classList.add('spinningWheel')

        context.appendChild(spinner);
    }

    function removeIndicator() {
        document.querySelector('#spinner').remove()
    }

    /** loadContent
     *
     * @version v1.0.0 (ES6+)
     * @since 2020-04-08
     * @callback namepath
     * @param {string} c content string
     * @returns {void}
     */
    function loadContent(filename = undefined) {
        try {
            fetch(filename)
                .then((response) => {
                    // - - - - -
                    // main
                    setIndicator('body');

                    // - - - - -
                    return response.text();
                })
                .then((text) => {
                    console.log(text);
                    showContent(text, 'main');

                    setTimeout(function () {
                        removeIndicator();
                    }, 3000)
                })
                .catch((error) => {
                    console.log(error)
                });

        } catch (error) {
            console.log(error);
        }
    }

    /** showContent
     *
     * @version v1.0.0
     * @since 2020-04-08
     * @callback namepath
     * @param {type} desc
     * @returns {void}
     */
    function showContent(text, context) {
        document.querySelector(context).innerHTML = text;
    }

    /** setEventBus
     *
     * @version v1.0.0
     * @since 2020-04-08
     * @callback namepath
     * @param {type} desc
     * @returns {void}
     */
    function setEventBus(arr) {
        try {
            // bei aside ist length === 1
            for (let i = 0, len = arr.length; i < len; i += 1) {
                arr[i].addEventListener('click', onAnchorClick)
            }
        } catch (error) {
            console.log(error);
        }
    }

    /** main
     *
     * @version v1.0.0
     * @since 2020-04-08
     */
    function main() {
        links = document.querySelectorAll('aside')
        setEventBus(links)
    }

    /** init
     *
     * @version v1.0.0
     * @since 2020-04-08
     */
    function init() {
        window.onload = main // reference to main
    }

    // Control (event control)
    // init the program
    init()

    // - - - - - - - - - - -
    // jQuery
    // direct event
    $('a[href]').on('click', function (event) {
        console.log(event.target.tagName)
    });

    // delegated event
    let data = {};
    $('aside').on('click', 'a[href]', data, onAnchorClick);

    // let request = $.ajax(filename);
    // request.when().catch().done()
    // - - - - - - - - - - -
}())