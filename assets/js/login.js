/* global console, window, document */
/**
 * a login script
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/04/17
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

!(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  let
    emailInput = document.querySelector('#email'),
    passwordInput = document.querySelector('#password'),
    formLogin = document.querySelector('#formLogin');
  // let emailInput = document.getElementById('email');

  // METHODS
  function validatePassword(password) {
    let
      _password = password || undefined,
      reg = /[a-zA-Z0-9]/;

    console.log(reg.exec(password));
  }

  function setNotification(message) {
    let
      _message = message || undefined,
      container = document.createElement('div'),
      element = document.createElement('p'),
      text = document.createTextNode(_message);

    container.setAttribute('id', 'notification');
    container.classList.add('notification');
    // container.setAttribute('class', 'notification');

    element.appendChild(text);
    container.appendChild(element);
    document.body.appendChild(container);

    // self removing notification
    setTimeout(function () {
      removeNotification();
    }, 20000);
  }

  function removeNotification() {
    let notification = document.querySelector('#notification');
    notification.remove();
  }

  function onFormLoginSubmit(event) {
    // browser event blocking
    event.preventDefault();

    console.log('submit');
    console.log(event);
  }


  function onEmailInputKeyDown(event) {
    console.log('keydown');
    console.log(event);
    console.log(event.which); // ASCII code 
    console.log(event.key) // letter;
  };

  function onEmailInputChange(event) {
    console.log('email change');
  };

  function onEmailInputBlur(event) {
    console.log('blur');
  };

  function onPasswordInputChange(event) {
    console.log('password change');

    console.dir(event.target.value);

    validatePassword(event.target.value);
  };

  // CONTROL
  emailInput.addEventListener('keydown', onEmailInputKeyDown);
  emailInput.addEventListener('change', onEmailInputChange);
  emailInput.addEventListener('blur', onEmailInputBlur);
  formLogin.addEventListener('submit', onFormLoginSubmit);

  passwordInput.addEventListener('change', onPasswordInputChange);

  setNotification('Gut gemacht!');


  // emailInput.onkeydown = function () {
  //   console.log(event.which);
  // }
  // - - - - - - - - - -
}());