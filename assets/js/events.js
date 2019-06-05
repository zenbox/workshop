/* global console, window, document */
/**
 * Event Handling in jquery
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/04
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

jQuery(function ($) {
      'use strict';
      // - - - - - - - - - -
      // DECLARATION
      // - - - - - - - - - -
      let init = undefined;

      // - - - - - - - - - -
      // METHODS
      // - - - - - - - - - -
      init = function () {};

      // - - - - - - - - - -
      // EVENT HANDLER METHODS
      // - - - - - - - - - -
      function onAnchorClick(e) {
        var _event = e || window.event;

        //! early exit
        if (!_event) return false;

        //! cancel the browsers job
        _event.preventDefault();

        //! do the job
        console.log('click on anchor!');

        console.log(_event.target);
        console.log(_event.type); // click!
        console.log(_event.which); // 1 (left)
      }

      function onContextmenu(e) {
        let _event = e || window.event;

        //! early exit
        if (!_event) return false;

        //! cancel the browsers job
        _event.preventDefault();

        // ! do the job
        console.log(_event.target);
        console.log(_event.type);
        console.log(_event.which);
      }
      /**
       *
       * @param  {object} e  event object
       * @return {boolean}   wether the function did the job or not
       */
      function onFormLoginSubmit(e) {
        let _event = e || window.event;

        //! early exit
        if (!_event) return false;

        //! cancel the browsers job
        _event.preventDefault();

        // ! do the job

      }

      // - - - - - - - - - -
      // CONTROL
      // - - - - - - - - - -
      $(function () {
        init();
        // set an event listener, delegate events!
        $('nav > ul')
          // on: type, [delegation,] [data,] callback
          .on('click', 'a[href]', onAnchorClick);

        $('body')
          .on('contextmenu', onContextmenu);

        $('form#form-login')
          .on('submit', onFormLoginSubmit());

        // // delete event listeners
        // $('nav > ul')
        //   .off(click ');
        //   });
        // - - - - - - - - - -
      }(jQuery));