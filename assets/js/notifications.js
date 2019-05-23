/* global console, window, document */
/**
 * notifications
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/23
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

jQuery(document)
  .ready(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    var
      container = jQuery('#notifications'),
      messages = jQuery('.messages'),

      main = function () {},
      removeContainer = function () {},
      buildMessage = function () {};

    // METHODS
    removeContainer = function () {
      container.remove();
    }

    buildMessage = function () {
      container
        .append('<div>')
        .children()
        .last() //                 -> message
        .addClass('message')
        .addClass('warning')
        .text('Sed posuere consectetur est at lobortis.')
        .hide()
        .delay(500)
        .fadeIn(250)
        .delay(2000)
        .fadeOut(250, function () {
          this.remove();
        });


    }

    /**
     * the main call of this app
     * @param  {mixed} args [description]
     * @return {boolean}    [description]
     */
    main = function (args) {
      console.log('hello folks');
      return true;
    }

    // MAIN CONTROL
    jQuery(function () {
      main();
      buildMessage()
      // removeContainer();
    })
    // EVENT CONTROL
    jQuery('h1')
      .on('click', buildMessage);
    // - - - - - - - - - -
  });