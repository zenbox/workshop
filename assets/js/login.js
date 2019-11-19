/* global console, window, document */
/**
 * A Login Component
 * @desc generates a login form with email, password for an user account login.
 *       Includes event listener and handler.
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/11/19
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */


!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let componentElementsList = [{
    element: 'form',
    context: 'aside'
  }, {
    element: 'fieldset',
    context: 'form'
  }, {
    element: 'legend',
    context: 'fieldset'
  }, {
    element: 'label',
    context: 'fieldset'
  }];

  // METHODS
  function createElement(element) {
    let _element = document.createElement(element);
    return _element;
  }

  function setContext(context) {
    let _context = document.querySelector(context);
    return _context;
  }

  function appendChild(context) {
    document.querySelector(context)
      .appendChild(context);
  }

  function setAttributes(attributes) {}

  function createComponent() {
    for (let i = 0; i < componentElementsList.length; i += 1) {
      let
        element = createElement(componentElementsList[i].element),
        context = setContext(componentElementsList[i].context);

      if (componentElementsList[i].attributes) {
        setAttributes(element, componentElementsList[i].attributes);
      }
      
      context.appendChild(element);
    }
  };

  function main() {
    createComponent();
  };

  // CONTROL
  // window.onload = function () {}
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());