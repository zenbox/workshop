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
      messages = [{
        message: 'Aenean lacinia bibendum nulla sed consectetur.',
        category: 'warning',
        blendingTime: 0,
        messageTime: 1000
      }, {
        message: 'Maecenas sed diam eget risus varius blandit sit amet non magna.',
        category: 'strange',
        blendingTime: 0,
        messageTime: 500
      }, {
        message: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
        category: 'success',
        blendingTime: 0,
        messageTime: 500
      }, {
        message: 'Nullam id dolor id nibh ultricies vehicula ut id elit.',
        category: 'default',
        blendingTime: 0,
        messageTime: 500
      }, {
        message: 'Cras mattis consectetur purus sit amet fermentum.',
        category: 'success',
        blendingTime: 0,
        messageTime: 500
      }, {
        message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        category: 'warning',
        blendingTime: 0,
        messageTime: 500
      }, {
        message: 'Sed posuere consectetur est at lobortis.',
        category: 'success',
        blendingTime: 0,
        messageTime: 500
      }, {
        message: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
        category: 'error',
        blendingTime: 0,
        messageTime: 500
      }, {
        message: 'Sed posuere consectetur est at lobortis.'
      }],
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
      var
        _message = m.message || undefined,
        _messageTime = m._messageTime || 2000,
        _blendingTime = m.blendingTime || 500,
        _category = m.category || 'default';

      if (typeof m !== 'object') return false;
      if (_message === undefined) return false;
      if (typeof _message !== 'string') return false;

      if (container === undefined) return false;

      container
        .append('<div>')
        .children()
        .last() //                 -> message
        .addClass('message')
        .addClass(_category)
        .text(_message)
        .hide()
        .fadeIn(_blendingTime)
        .delay(_messageTime)
        .fadeOut(_blendingTime, function () {
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
      buildMessage({
        message: 'huddel!! huddel!! huddel!! huddel!! huddel!!'
      });
      // removeContainer();
    })
    // EVENT CONTROL
    jQuery('h1')
      .on('click', function () {
        var
          _randomNumber = Math.floor(Math.random() * (messages.length)),
          _message = messages[_randomNumber];

        buildMessage(_message);
      });
    // - - - - - - - - - -
  });