/* global console, window, document */
/**
 * A Notification Application
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/03
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

jQuery(function ($) {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  // - - - - - - - - - -
  let
    // primitive values (string, number, boolean)
    DEBUG = true,
    a = undefined,

    // list, objects
    container = {},
    collection = [],

    // functions
    init = function () {},
    debug = function () {},
    setContainer = function () {},
    removeContainer = function () {},
    setMessage = function () {},
    removeMessage = function () {},
    fixIdSelector = function () {};

  // - - - - - - - - - -
  // METHODS
  // - - - - - - - - - -
  /**
   *
   * @param  {string}  i a html id value
   * @param  {string}  c a html classname
   * @return {boolean}   wether the function did the job or not
   */
  setContainer = function (i, c) {

    //! setting default values for arguments
    var
      _id = i || undefined,
      _class = c || undefined;

    // ! fast exits
    if (_id === undefined) {
      debug('Error: setting the container failed. There\'s no id.');
      return false;
    }

    if (_class === undefined) {
      debug('Error: setting the container failed. There\'s no class.');
      return false;
    }

    //! do the job
    debug('set container');
    $('<div>')
      .addClass(_class)
      .attr('id', _id)
      .appendTo('body');

    return true;
  };

  /**
   * remove the messages container
   * @param  {string}  i the html id value
   * @return {boolean}   wether the function did the job or not
   */
  removeContainer = function (i) {
    //! setting default values for arguments
    let _id = i || undefined;

    //! fast exit
    if (_id === undefined) {
      debug('Error: removing the container failed. There\'s no id.');
      return false;
    }

    // fix ids
    _id = fixIdSelector(_id);

    //! do the job
    debug('remove container');
    $(_id)
      .remove();

    return true;
  };

  /**
   *
   * @param  {string}  i a html id value
   * @param  {string}  c a html classname
   * @param  {string}  t the message as text
   * @return {boolean}   wether the function did the job or not
   */
  setMessage = function (i, ci, c, t) {
    //! setting default values for arguments
    var
      _id = i || undefined,
      _containerId = ci || undefined,
      _class = c || undefined,
      _text = t || undefined;

    // ! fast exits
    if (_id === undefined) {
      debug('Error: setting the message failed. There\'s no id.');
      return false;
    }

    if (_containerId === undefined) {
      debug('Error: setting the message failed. There\'s no container id.');
      return false;
    }

    if (_class === undefined) {
      debug('Error: setting the message failed. There\'s no class.');
      return false;
    }

    if (_text === undefined) {
      debug('Error: setting the message failed. There\'s no text.');
      return false;
    }

    //! do the job
    debug('set message');
    $('<div>')
      .addClass(_class)
      .attr('id', _id)
      .text(_text)
      .hide()
      .appendTo(_containerId)
      .fadeIn(1000)
      .delay(2000)
      .fadeOut(1000, function () {
        removeMessage(_id);
      });



    return true;
  };

  /**
   * remove the messages container
   * @param  {string}  i the html id value
   * @return {boolean}   wether the function did the job or not
   */
  removeMessage = function (i) {
    //! setting default values for arguments
    let _id = i || undefined;

    //! fast exit
    if (_id === undefined) {
      debug('Error: removing the message failed. There\'s no id.');
      return false;
    }

    _id = fixIdSelector(_id);

    //! do the job
    debug('remove message');
    $(_id)
      .remove();

    return true;
  };

  /**
   * fixes missing # in id selectors
   * @param  {string} i
   * @return {mixed}    either false or the _id
   */
  fixIdSelector = function (i) {
    var _id = i || undefined;

    if (_id === undefined) return false;

    // ! fixes missing #
    if (_id[0] !== '#') _id = '#' + _id;
    return _id;
  }

  /**
   * the debug console
   * @param  {string} m  the console output
   * @return {boolean}
   */
  debug = function (m) {
    var _message = m || undefined;

    if (_message === undefined) return false;

    if (DEBUG) {
      console.log(_message);
    }
    return true;
  }

  init = function () {
    console.clear();
    debug('notifications running');
    // id, class
    setContainer('notifications', 'notification-container');

    setTimeout(removeContainer, 100000);

    setTimeout(function () {

      // id, container id, class, text
      setMessage('_1', '#notifications', 'notification', 'hello world 1');
      setMessage('_2', '#notifications', 'notification', 'hello world 2');
      setMessage('_3', '#notifications', 'notification', 'hello world 3');
      setMessage('_4', '#notifications', 'notification', 'hello world 4');
      setMessage('_5', '#notifications', 'notification', 'hello world 5');
    }, 500);
  };

  // - - - - - - - - - -
  // CONTROL
  // - - - - - - - - - -
  $(function () {
    init();
  });
  // - - - - - - - - - -
}(jQuery));