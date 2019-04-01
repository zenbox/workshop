/* global console, window, document */
/**
 * An Openstreet Map Example
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/01
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let init = undefined;

  // METHODS
  init = function () {
    let
      map = new OpenLayers.Map('basicMap'), // id of map containg element
      mapnik = new OpenLayers.Layer.OSM(), // Open Street Map Layer))
      markers = undefined;

    map.addLayer(mapnik);

    // get current position
    navigator.geolocation.getCurrentPosition(function (position) {
      let
        lonLat = new OpenLayers
        .LonLat(position.coords.longitude, position.coords.latitude)
        .transform(
          new OpenLayers.Projection('EPSG:4326'), // WGS 1984 projection
          map.getProjectionObject() // to mercator
        );

      console.log(position.coords.longitude, position.coords.latitude);

      // set a marker
      markers.addMarker(new OpenLayers.Marker(lonLat));
      map.setCenter(lonLat, 14); // zoom level
    });

    // building a first map
    map
      .setCenter(new OpenLayers.LonLat(9, 48)
        .transform(
          new OpenLayers.Projection('EPSG:4326'), // WGS 1984 projection
          new OpenLayers.Projection('EPSG:900913') // Mercator projection
        ), 15); // zoom level
    markers = new OpenLayers.Layer.Markers('Markers');
    map.addLayer(markers);
  };
  // CONTROL
  window.addEventListener('load', init);

  // - - - - - - - - - -
}());