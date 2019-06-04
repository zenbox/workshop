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
    removeMessage = function () {};

  // - - - - - - - - - -
  // METHODS
  // - - - - - - - - - -
  /**
   *
   * @param  {string}  id    a html id value
   * @param  {string}  class a html classname
   * @return {boolean}       wether the function did the job or not
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

    //! do the job
    debug('remove container');
    $(_id)
      .remove();

    return true;
  };

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
    console.log('notifications running');
    setContainer('notifications', 'notification-container');
    setTimeout(removeContainer, 100000);
  };

  // - - - - - - - - - -
  // CONTROL
  // - - - - - - - - - -
  $(function () {
    init();
  });
  // - - - - - - - - - -
}(jQuery));