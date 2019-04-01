/**
 * A Geolocation Example
 * @author Michael
 * @since 2019/04/01
 * ...
 */
// IIFE
!(function () {
  'use strict';
  // - - - - - - - - - -

  // declaration
  let
    outputLat = document.querySelector('#latitude'),
    outputLon = document.querySelector('#longitude');

  // methods
  function onWindowLoad() {
    console.dir(navigator.geolocation);

    navigator.geolocation.getCurrentPosition(function (position) {
      console.dir(position);
      outputLat.innerHTML = "Latitude: " + position.coords.latitude;
      outputLon.innerHTML = "Longitude: " + position.coords.longitude;
    });
  }

  // event-control
  window.addEventListener('load', onWindowLoad);
  // - - - - - - - - - -
}());