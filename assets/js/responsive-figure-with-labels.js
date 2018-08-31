/* global console, window, document */
/**
 * responsive figure with labels
 *
 * @author Michael <michael.reichart@gfu.net>
 * @since 2018/08/31
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
/**
 * IIFE Pattern
 * Immediate Invoked Function Expression
 */
!(function () {
  'use strict';
  // - - - - - - - - - -
  // GLOBAL DECLARATION
  let
    mediaXtraSmall = window.matchMedia('(max-width:575px)'),
    mediaSmall = window.matchMedia('(min-width:576px)'),
    mediaMedium = window.matchMedia('(min-width:768px)'),
    mediaLarge = window.matchMedia('(min-width:1024px)'),
    mediaXtraLarge = window.matchMedia('(min-width:1280px)'),
    mediaMoreThanXtraLarge = window.matchMedia('(min-width:1600px)'),
    mediaFullHd = window.matchMedia('(min-width:1920px)'),

    labels = {
      "label-4": {
        "x": "70%",
        "y": "40%"
      },
      "label-5": {
        "x": "60%",
        "y": "20%"
      }
    };

  // METHODS
  function onResize(event) {
    // LOCAL DECLARATION
    let
      left = null,
      top = null,
      w = document.querySelector('#image')
      .width,
      h = document.querySelector('#image')
      .height,
      l = document.querySelector('.label-4');

    left = w / 100 * parseInt(labels['label-4'].x);
    top = h / 100 * parseInt(labels['label-4'].y);

    l.setAttribute('style', 'left:' + Math.ceil(left) + 'px; top:' + Math.ceil(top) + 'px;');
  };

  function hideLabels() {
    let labelTextElements = document.querySelectorAll('.label-text');

    for (let i = 0, len = labelTextElements.length; i < len; i += 1) {
      labelTextElements[i].setAttribute('style', 'display:none;')
    }
  };

  function showLabels() {
    let labelTextElements = document.querySelectorAll('.label-text');

    for (let i = 0, len = labelTextElements.length; i < len; i += 1) {
      labelTextElements[i].setAttribute('style', 'display:inline;')
    }
  };

  function onChangeMediaXtraSmall(event) {
    console.log(event.target);

    if (mediaXtraSmall.matches === true) {
      hideLabels();
    } else {
      showLabels();
    }
  };

  function onChangeMediaSmall(event) {
    console.log(event.target);
  };

  function onChangeMediaMedium(event) {
    console.log(event.target);
  };

  function onChangeMediaLarge(event) {
    console.log(event.target);
  };

  function onChangeMediaXtraLarge(event) {
    console.log(event.target);
  };

  function onChangeMediaMoreThanXtraLarge(event) {
    console.log(event.target);
  };

  function onChangeMediaFullHD(event) {
    console.log(event.target);
  };

  // CONTROL
  window.addEventListener('resize', onResize);
  mediaXtraSmall.addEventListener('change', onChangeMediaXtraSmall)
  mediaSmall.addEventListener('change', onChangeMediaSmall)
  mediaMedium.addEventListener('change', onChangeMediaMedium)
  mediaLarge.addEventListener('change', onChangeMediaLarge)
  mediaXtraLarge.addEventListener('change', onChangeMediaXtraLarge)
  mediaMoreThanXtraLarge.addEventListener('change', onChangeMediaMoreThanXtraLarge)
  mediaFullHd.addEventListener('change', onChangeMediaFullHD)


  // - - - - - - - - - -
}());