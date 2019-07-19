/**
 * A Main Application
 *
 * @desc Cum sociis natoque penatibus et magnis dis parturient montes,
 *       nascetur ridiculus mus. Cum sociis natoque penatibus et magnis dis
 *       parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada
 *       magna mollis euismod. Duis mollis, est non commodo luctus,
 *       nisi erat porttitor ligula, eget lacinia odio sem nec elit.
 *
 * @package ApplicationName
 * @module Main
 * @see /other/modules
 * @author Michael <michael.reichart@gfu.net>
 * @author Stephan <stephan ...>
 * @version 1.0.0
 * @since 1.0.0
 * @since 2019/07/16
 * @license MIT <https://opensource.org/licenses/MIT>
 * @copyright 2019 Michael Reichart
 */

!(function () {
    "use strict";
    // - - - - - - - - - -
    // DECLARATION
    // - - - - -
    let messageIndex = 0,
        formLogin = document.querySelector("#form-login"),
        loginEmail = document.querySelector("#login-email"),
        navigationGroups = document.querySelectorAll('nav');

    // - - - - -
    // METHODS
    // - - - - -
    /** A shorter log function
     * @param {any} m
     */
    function log(m = undefined) {
        let _m = m;

        if (_m === undefined) return false;

        console.log(_m);
        return true;
    }

    /** Setting text nodes into dom elements
     * 
     * @param {string} eln  the new elements name
     * @param {string} ctx  the appending dom context
     * @return {boolean}    works or not
     */
    function setText(txt, ctx) {
        let
            _text = txt || undefined,
            _context = ctx || undefined,
            _textNode = undefined;

        if (_text === undefined || _context === undefined) return false;

        _textNode = document.createTextNode(_text);
        document.querySelector(_context).appendChild(_textNode);

        return true;
    }

    /** setting new dom nodes with attributes
     * 
     * @param {string} eln  the new elements name
     * @param {object} att  the collection of attributes
     * @param {string} ctx  the appending dom context
     * @return {boolean}    works or not
     */
    function setElement(eln, att, ctx) {
        let
            _elementName = eln || undefined,
            _attributes = att || undefined,
            _context = ctx || undefined,
            _node = undefined;

        if (_elementName === undefined || _context === undefined) return false;

        _node = document.createElement(_elementName);

        for (let key in _attributes) {
            _node.setAttribute(key, _attributes[key]);
        }

        document.querySelector(_context).appendChild(_node);

        return true;
    }

    /** build a notification
     * @param {string} m a message string
     * @param {string} t the message type (as default, error, warning or success)
     */
    function setNotification(m, t) {
        let
            _message = m || undefined,
            _type = t || 'message-default';

        if (_message === undefined) return false;
        messageIndex++;

        setElement('p', {
            class: _type,
            id: 'm' + messageIndex
        }, '.message-container');

        setText(_message, '#m' + messageIndex);

        document.querySelectorAll('[class*=message-]').forEach(
            function (item, index) {
                setTimeout(function () {
                    item.remove()
                }, 5000);
            }
        )

        return true;
    }

    /** The magic event object
     * @param {Event} event the event facts collection
     */
    function onFormLoginSubmit(event) {
        // shut up, browser!
        event.preventDefault();
        log("form submitted!");

        // ajax
        let request = new XMLHttpRequest();
        request.addEventListener('readystatechange', function () {
            switch (request.readyState) {
                default:
                    setNotification('no idea, what happens');
                    break;
                case 1:
                    setNotification('request opened');
                    break;
                case 2:
                    setNotification('request sent');
                    break;
                case 3:
                    setNotification('response started');
                    break;
                case 4:
                    setNotification('response ready');
                    break;
            }
        });
        request.open('GET', 'server/server.app.json' + '?email=michael.reichart@gfu.net&password=pommes');
        request.send();

    }

    /** Event handler hor nav groups
     * 
     * @param {Event} event 
     */
    function onAnchorClick(event) {
        event.preventDefault();
        event.stopPropagation();

        switch (event.target.tagName) {
            case 'A':
                break;
            case 'LI':
                break;
            default:
                break
        }
    }

    /** check the email value before sending to the server
     * 
     * @param {Event} event 
     */
    function onFormLoginEmailChange(event) {
        let
            _pattern = /[a-z]/,
            _value = event.target.value;

        console.log(_pattern.test(_value));

        // ...
    }

    /** Main process
     * @param none
     * @return boolean works or not
     */
    function $init() {
        // build a label
        setElement('label', {
            id: 'keep-password'
        }, 'fieldset');

        // build a checkbox
        setElement('input', {
            type: 'checkbox',
            name: 'keep',
            value: 'yes'
        }, '#keep-password');

        // build text
        setText('keep password', '#keep-password');

        return true;
    }

    // - - - - -
    // $INIT-CONTROL
    // - - - - -
    window.addEventListener("load", $init);

    // - - - - -
    // EVENT-CONTROL
    // - - - - -
    formLogin.addEventListener("submit", onFormLoginSubmit);
    loginEmail.addEventListener('change', onFormLoginEmailChange);

    // event delegation,
    // using querySelectorall
    for (let i = 0; i < navigationGroups.length; i += 1) {
        navigationGroups[i].addEventListener('click', onAnchorClick);
    }
    // - - - - - - - - - -
})();