/* global console, window, document */
/**
 * AJAX Requests
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/06/25
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let
    main = undefined,
    load = undefined,
    showArticle = undefined;

  /**
   *
   * @param  {String} t
   * @return {none}
   */
  showArticle = function (t) {
    let
      _text = t || undefined,
      mainNode = document.querySelector('main'),
      articleNode = undefined,
      paragraphNode = undefined,
      textNode = undefined;

    if (_text === undefined) return false;

    articleNode = document.createElement('article');
    paragraphNode = document.createElement('p');
    textNode = document.createTextNode(_text);

    mainNode
      .appendChild(articleNode) //   returns the article
      .appendChild(paragraphNode) // returns the paragraph
      .appendChild(textNode);
  };

  /**
   *
   * @param  {Function} fn
   * @param  {Function} cb
   * @return {none}
   */
  load = function (fn, cb) {
    let
      _filename = fn || undefined,
      _callback = cb || undefined,
      request = new XMLHttpRequest(),
      method = 'get';

    if (_filename === undefined) {
      return false;
    }
    if (_callback === undefined) {
      return false;
    }

    request.addEventListener('readystatechange', function () {
      if (request.readyState !== 4) {
        return false;
      }
      if (request.status >= 200 && request.status < 500) {
        _callback(request.responseText);
      }
    });
    request.open(method, _filename);
    request.send();
  };

  // METHODS
  main = function () {
    load('assets/data/data.txt', showArticle);
  };

  // CONTROL
  window.addEventListener('load', main);
  // - - - - - - - - - -
}());