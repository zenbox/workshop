/* global console, window, document */
/**
 * jQuery Events
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/21
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
jQuery(document)
  .ready(function () {
    'use strict';
    // - - - - - - - - - -
    // DECLARATION
    var
      // DOM elements
      // anchors = jQuery('a[href]'),
      anchors = jQuery('nav'),
      form = jQuery('#form-login'),

      // methods
      onAnchorClick = function () {},
      onSubmit = function () {};


    onSubmit = function (e) {
      // ! get params or set a default value
      var _event = e || undefined;

      // early exit
      if (_event === undefined) return false;

      // do your stuff
      _event.preventDefault();
      console.log('submit');
    }

    // METHODS
    onAnchorClick = function (e) {

      // DECLARATION
      var
        _event = e || undefined,
        target = event.target,
        which = event.which;

      if (_event === undefined) return false;

      _event.preventDefault();
      // - - - - - - - - - -

      // CONTROL


      return true;
    };

    // CONTROL

    // EVENT CONTROL
    // convenient, but somehow stupid
    // anchors.click();

    // switches event listener on
    // anchors.on('click', onAnchorClick);

    // event delegation!!!
    anchors.on('click', 'a[href]', onAnchorClick);
    form.on('submit', onSubmit);
    // switches event listener off
    // anchors.off('click', onAnchorClick);

    // event delegation!
    // anchors.off('click', 'a[href]', onAnchorClick);

    // one timer
    // anchors.one('click', onAnchorClick);

    // event delegation!
    // anchors.one('click', 'a[href]', onAnchorClick);

    // - - - - - - - - - -
  });