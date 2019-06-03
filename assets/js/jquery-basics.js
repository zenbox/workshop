/* global console, window, document */
/**
 * Simple jQuery Examples
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/03
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

window.document = undefined;

jq341(document)
  .ready(function () {
    jq341('p')
      .addClass('new');
    console.log('hello world!');
  });

jQuery(document)
  .ready(function () {
    'use strict';
    // - - - - - - - - - -
    var a = 42;
    console.log(a);
    // - - - - - - - - - -
  });

jQuery('#myId')
  .addClass();
jQuery('.myClass')
  .remove();

jQuery(function () {});

// - - - - - - - - - -
// - - - - - - - - - -

jQuery(document)
  .ready(function () {
    'use strict';
    // - - - - - - - - - -
    // console.clear();

    // selections
    jQuery('.my-class')
      .css({
        'border': '4px solid red',
        'padding': '4px'
      })

      .addClass('really-new')
      .removeClass('really-new')
      .toggleClass('really-new')

      .attr('id', 'my-id');


    // transitions
    jQuery('.my-class')
      .fadeOut(10)
      .fadeIn(1000)
      .delay(1000)
      .fadeOut(1000, function () {
        jQuery(this)
          .remove()
      });

    // the same in js ES5
    var collection = document.getElementsByClassName('my-class');

    // // the same in js ES6
    // document.querySelectorAll('.my-class');

    for (let i = 0; i < collection.length; i++) {
      collection[i].setAttribute('style', 'border:4px solid green; padding:5px;');
      // collection[i].setAttribute('class', 'old-fashion-class');
      collection[i].classList.add('old-fashion-class');
    }


    // Event handling
    jQuery('button')
      .on('click', function () {
        console.log('click!');
      })

    // - - - - - - - - - -
  });