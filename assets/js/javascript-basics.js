/* global console, window, document */
/**
 * Javascript basics
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/20
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

window.onload = function () {
  'use strict';
  // - - - - - - - - - -
  // declaration
  //
  var a, b, c;


  var a = 42;
  var b = 108;
  var c = 108;

  d = 4;

  // control
  if (typeof a === 'number' && typeof b === 'number') {
    console.log(a + b);
  }
  console.log(typeof a);

  // - - - - - - - - - -
}

// IIFE - Immediate Invoked Function Expression
(function () {
  'use strict';
  // - - - - - - - - - -
  var a = 42;
  // - - - - - - - - - -
})();



window.onload = function () {
  'use strict';
  // - - - - - - - - - -
  console.log('window loaded');
  // - - - - - - - - - -
}


// Javascript
document.addEventListener('readystatechange', function (event) {
      console.log('document state has changed!');

      switch (document.state) {
      case 'loading':
        break;
      case 'interactive':
        break;
      case 'complete':
        break;
      }


      // Classes with Javascript
      // ES 6+, JS 1.8.5
      var domObj = document.querySelector('input#id');

      domObj
        .classList
        .add('new-class')
        .remove('old-class')
        .toggle('new')


      // Creating elements
      var
        container = document.createElement('div'),
        label = document.createElement('label'),
        input = document.createElement('input'),
        text = document.createTextNode('keep password');


      container.setAttribute('id', 'keep');

      label.appendChild(text);

      container.appendChild(input)
      container.appendChild(label)