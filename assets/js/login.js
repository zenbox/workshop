/* global console, window, document */
/**
 * A Login Script With jQuery
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/20
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
      // undefined variables

      // DOM elements
      form = jQuery('#form-login'),
      elements = jQuery('#form-login input'),

      // methods
      main = function () {},
      manipulate = function () {},
      getLoginData = function () {},

      // event handler
      onFocus = function () {},
      onFormLoginSubmit = function () {};

    // METHODS
    // event handlern
    onFocus = function (event) {
      console.log('focus an input field!');
    }

    onFormLoginSubmit = function (e) {
      var
        _event = e || undefined,
        _action = _event.target.action || undefined;

      if (_event === undefined) return false;
      if (_action === undefined) return false;

      _event.preventDefault();

      getLoginData(_action);
    };

    // methods
    // DOM Manipulation
    manipulate = function () {
      // adding elements
      jQuery('<input>')
        // Attributes
        .attr('id', 'keep')
        .attr('type', 'checkbox')
        .attr('name', 'keep-password')
        .removeAttr('name')

        // Classes
        .addClass('default')
        .removeClass('default')
        .toggleClass('default')

        // CSS
        .css({
          'border': '1px solid red',
          'background-color': 'lightgrey',
        })

        .appendTo(form);

      // ! nicht gut
      // jQuery('<input>').attr('id', 'keep');
      // jQuery('#keep').attr('name', 'keep-password');
    }

    /*
        <div id="keep">
        <input type="checkbox" id="cb">
        <label for="cb">keep Password</label>
        </div>
     */
    function checkbox() {

      var
        container = jQuery('<div>')
        .attr('id', 'keep'),

        input = jQuery('<input>')
        .attr('type', 'checkbox')
        .attr('id', 'cb'),

        label = jQuery('<label>')
        .text('keep password')
        .attr('for', 'cb');

      container
        .append(input)
        .append(label);

      jQuery(container)
        .appendTo('#form-login');
    }

    getLoginData = function (a) {
      var
        _action = a || undefined,
        _request = undefined;

      if (_action === undefined) return false;

      console.log('perform an ajax request!');

      _request = jQuery.ajax({
        url: _action,
        method: 'POST',
        dataType: 'json' // html || text || json || jsonp || xml
      });
      _request
        // ajax was successful
        .done(function (r) {
          var _response = r || undefined;

          if (_response === undefined) return false;

          console.log(_response);
          console.log(typeof _response);
        })
        // there is an ajax error
        .fail(function (error) {
          console.log('ajax error!');
        });
    }


    // The Main Programm Control Function
    main = function () {
      manipulate();
      checkbox();
    }

    // CONTROL
    jQuery(function () {
      main();
    });

    // EVENT CONTROL
    elements.on('focus', onFocus);
    form.on('submit', onFormLoginSubmit);
    // - - - - - - - - - -
  });