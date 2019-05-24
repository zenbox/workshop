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
      // variables
      container = undefined,
      messages = undefined,
      // method declarations
      main = function () {},
      selectContainer = function () {},
      removeContainer = function () {},
      buildContainer = function () {},
      buildMessage = function () {},
      getMessage = function () {};

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
    }];

    // METHODS
    /**
     * selects the messages container
     * @return {boolean} if false
     */
    selectContainer = function () {
      // ! container is global
      container = jQuery('#notifications');

      if (container === undefined) return false;
      if (container.length === 0) return false;

      return true;
    };

    /**
     * builds the messages container
     * @param  {Function} fn callback for selectContainer
     * @return {boolean}     if false
     */
    buildContainer = function (fn) {
      var _callback = fn || undefined;

      if (_callback === undefined) return false;

      jQuery('<div>')
        .attr('id', 'notifications')
        .appendTo('body');

      _callback();
    };

    /**
     * removes the messages container
     * @return {boolean} if false
     */
    removeContainer = function () {
      if (container === undefined) return false;
      container.remove();
    };

    /**
     * building notification messages
     * @param  {object} m contains message, time and category values
     * @return {boolean}  if false
     */
    buildMessage = function (m) {
      var
        _m = m || undefined,
        _message = undefined,
        _messageTime = undefined,
        _blendingTime = undefined,
        _category = undefined;

      if (_m === undefined) return false;

      if (typeof _m === 'string') {
        _m = {
          message: _m
        };
      }

      if (typeof _m !== 'object') return false;
      if (container === undefined) return false;

      _message = _m.message || 'no message available';
      _messageTime = _m.messageTime || 2000;
      _blendingTime = _m.blendingTime || 500;
      _category = _m.category || 'default';

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
        .hide('puff', 100, function () {
          //        .fadeOut(_blendingTime, function () {
          this.remove();
        });
    }

    /**
     * grabs a random message
     * @return {object} the message object
     */
    getMessage = function () {
      var _randomNumber = Math.floor(Math.random() * (messages.length)),
        _message = messages[_randomNumber];
      return _message;
    };
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
      buildMessage('hello world');
    })
    // EVENT CONTROL
    jQuery('h1')
      .on('click', function () {
        buildMessage(getMessage());
      });
    // - - - - - - - - - -
  });