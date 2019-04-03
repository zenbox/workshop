/* global console, window, document */
/**
 * A Simple Script With A Service Worker Register
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/03
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

// register a service worker
if ('serviceWorker' in navigator) {
  navigator
    .serviceWorker // uses promises for async handling
    .register('service-worker.js')

    .then(function (registration) {
      // register was successful
      console.log('register suceeded:', registration);
    })

    .catch(function (error) {
      // registration failed
      console.log('ServiceWorker registration failed: ', error);
    })
} else {
  // ...
}



// A promise is a ES6 constructor