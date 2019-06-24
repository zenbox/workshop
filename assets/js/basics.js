/**
 * Javascript Basics
 *
 * @package Webapplication
 * @author Michael
 * @since 2019/06/24
 * @version 1.1.0
 */
// Function scopes?
// IIFE - Immediate Invoked Function Expression
(function () {
  'use strict';
  // - - - - - - - - - -
  // DECLARATION
  // - - - - - - - - - -
  let
    d = undefined,
    c = 512,
    e = 7809;

  // control scope
  // for (let i = 0; i < 10; ++i) {
  //   console.log(i);
  //   console.log(c);
  // }

  // console.log('- - - - - - - - - -');
  // console.log(i);
  // console.log('- - - - - - - - - -');
  // console.log(a);
  // console.log(b);

  // - - - - - - - - - -
  // Types
  // - - - - - - - - - -
  // primitive values types
  let a = 42;
  let pi = 3.14152;
  console.log(typeof a);
  console.log(typeof pi);

  let s = 'string'
  console.log(typeof s);

  let b = false;
  console.log(typeof b);

  // value types
  let obj = {
    "key": "value"
  };
  console.log(typeof obj);
  console.log(obj.key);
  console.log(obj["key"]);

  let arr = [true, "Zwei", 3];
  console.log(typeof arr);
  console.log(arr[0]);

  let fn = function () {}
  console.log(typeof fn);

  let un = undefined;
  console.log(un);
  console.log(typeof un);

  // if (un === undefined) {}
  // if (typof un === 'undefined') {}

  let nu = null;
  console.log(nu);
  console.log(typeof nu);

  if (!nu) {
    console.log('ist falsch');
  }

  // falsy values:
  // null, undefined, false
  // '', 0
  console.log('' == false);
  console.log('' == 0);
  console.log(false == 0);

  console.log([] == false);
  console.log({} == false);
  console.log({} == []);

  // ! use of value only









  // - - - - - - - - - -
})();



// - - - -