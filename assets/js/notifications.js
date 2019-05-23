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
      container = undefined,
      main = function () {},
      selectContainer = function () {},
      removeContainer = function () {},
      buildContainer = function () {},
      buildMessage = function () {};

    // METHODS
    selectContainer = function () {
      container = jQuery('#notifications');
    };

    buildContainer = function (fn) {
      var _callback = fn || undefined;

      if (_callback === undefined) return false;

      jQuery('<div>')
        .attr('id', 'notifications')
        .appendTo('body');

      _callback();
    };

    removeContainer = function () {
      if (container === undefined) return false;
      container.remove();
    };

    buildMessage = function (m) {
      var _message = m || undefined;

      if (_message === undefined) return false;
      if (typeof _message !== 'string') return false;

      if (container === undefined) return false;

      container
        .append('<div>')
        .children()
        .last() //                 -> message
        .addClass('message')
        .addClass('warning')
        .text(_message)
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
      buildContainer(selectContainer);
      buildMessage('huddel!!');
      // removeContainer();
    })
    // EVENT CONTROL
    jQuery('h1')
      .on('click', buildMessage);
    // - - - - - - - - - -
  });