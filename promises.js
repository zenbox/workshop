/**
 * Promises for AJAX
 */

// Scoping with ES6+
{
  'use strict';
  // - - - - - - - - - -
  function ajax(url, methodType) {
    console.log('ajax!');

    // declaration
    let promise;

    // methods
    function onPromise(resolve, rejecter) {
      let request = new XMLHttpRequest();

      request.onreadystatechange = () => {

        console.log(request.readyState);

        if (request.readyState === 4) {

          if (request.status !== 200) return false;

          if (request.status === 200) {
            // fullfill
            resolve(request.responseText);
          } else {
            // catch error
            reject(request.status);
          }
        }
      };
      request.open(methodType, url);
      request.send();
    }

    // control
    // using a promise
    promise = new Promise(onPromise);
    return promise;

  }

  // fullfill:
  function processResponse(data) {
    console.log('process!');
    console.log(data);
  }

  // catch error
  function errorHandler(error) {
    console.log('error!');
    console.log(error);
  }

  // event handler
  function onClick(event) {
    console.log('click');
    // call ajax, using the promisses
    ajax('data/foo.txt', 'get')
      .then(processResponse)
      .catch(errorHandler);
  };

  // event control
  document.querySelector('button#load')
    .addEventListener('click', onClick);
  // - - - - - - - - - -
}