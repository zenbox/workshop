/* global console, window, document */
/**
 * A Service Worker
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/03
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 *
 * @see https://www.youtube.com/watch?v=ksXwaWHCW6k
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  const CACHE_NAME = 'my-site-cache-v3';

  let urlsToCache = [
    '/',
    'index.html',
    'script.js',
    'service-worker.js'
  ];

  // METHODS
  function onServiceWorkerInstall(event) {
    console.log('service worker install');

    event.waitUntil(
      caches.open(CACHE_NAME)
      .then(function (cache) {
        return cache.addAll(urlsToCache);
      })
    )
  }

  function onServiceWorkerActivate(event) {
    console.log('service worker activate');

    // update caches, delete old ones, etc ...
    let cacheWhiteList = [CACHE_NAME, 'my-blog-cache-v3'];

    event.waitUntil(
      caches
      .keys()
      .then(function (cacheNames) {
        // deleting all entries not in white list
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (cacheWhiteList.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        )
      })
    )
  }

  function onFetch(event) {
    console.log('service worker fetch');

    event.respondWith(
      caches
      .match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    )
  }

  // CONTROL
  self.addEventListener('install', onServiceWorkerInstall);
  self.addEventListener('activate', onServiceWorkerActivate);

  self.addEventListener('fetch', onFetch);
  // - - - - - - - - - -
}());