/* global console, window, document */
/**
 * A jQuery Plugin To Close Any Element
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/24
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 * @dependencies jQuery-3.4.1
 */

// IIFE - Immediate Invoked Function Expression
(function (jq) {
  'use strict'
  // - - - - - - - - - -
  var
    $ = jq || undefined,
    // use a unique name!
    pluginName = 'closeable';

  // check for jQuery
  if ($ === undefined) return false;
  if (window.jQuery === undefined) return false;

  // check for any existing plugin collision
  if (pluginName in $.fn) return false;

  console.dir($.fn);

  // lets get started!
  $.fn[pluginName] = function () {
    // - - - - - - - - - -
    // DECLARATION
    var
      options = {
        path: 'lib/jq-closeable/',
        icon: 'assets/figures/close.png',
        css: 'assets/css/closeable.css',
        prefix: 'closeable'
      },

      iconSelectorExpression = undefined,
      styleSelectorExpression = undefined,

      // methods declaration
      setCss = function () {},
      removeCss = function () {},
      setIcon = function () {},
      removeIcon = function () {},
      setOptions = function () {},
      close = function () {},
      main = function () {};

    // METHODS
    setCss = function () {
      console.log('set css');
      $('<link>')
        .attr('rel', 'stylesheet')
        .attr('href', options.path + options.css)
        .attr('id', options.prefix + '-id')
        .appendTo('head');
    };
    removeCss = function () {
      console.log('remove css');
    };
    setIcon = function () {
      console.log('set icon');
    };
    removeIcon = function () {
      console.log('remove icon');
    };
    setOptions = function () {
      console.log('set options');

      iconSelectorExpression = '.' + options.prefix + '-icon';
      styleSelectorExpression = '#' + options.prefix + '-id';

    };
    close = function () {
      console.log('close');
    };
    main = function () {
      console.log('main');
      setOptions();
      setCss();
    };
    // - - - - - - - - - -
    // $(function () {
    main();

    // return the modified jQuery collection
    return (this.each(function (index, item) {
      $(item)
        .on('mouseenter', setIcon);
      $(item)
        .on('mouseleave', removeIcon);
    }));
    // });
    // - - - - - - - - - -
  }
  // - - - - - - - - - -
})(jQuery);