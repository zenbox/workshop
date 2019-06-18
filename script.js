/**
 * ES 6 Examples
 */

// IIFE - Immediate Invoked Function Expression
!(function () {
  'use strict';
  // - - - - - - - - - -

  // - - - - - - - - - -
  // constants, variables and scoping
  // - - - - - - - - - -
  const PI = 3.1415;


  // - - - - - - - - - -
  // let is the new var
  // - - - - - - - - - -
  var
    a = 42,
    c = 72;

  let
    b = 108,
    d = 2014;

  // var => hoisting! no control scope!
  // let => hoisting, but control scope
  for (let i = 0; i < 10; i++) {
    let j;
    console.log(i);
    j = 20;
  }
  // console.log(i); // -> false
  // PI = 2;

  // - - - - - - - - - -
  // Template Literals
  // - - - - - - - - - -
  // Concatening of strings
  // - - - - - - - - - -
  let
    text = 'hello ',
    text2 = 'world',
    text3 = 'la la';

  let fn = () => {
    console.log('do something');
  };

  console.log(text + text2);
  console.log(text3);
  console.log(text.concat(text2, text3));

  let o = {
    key: 'value'
  };

  // - - - - - - - - - -
  // Template Literals using the accent grave
  // - - - - - - - - - -
  let text4 = `Das ist ein Text mit ${text}${text2} ${o.key}`;
  console.log(text4);


  // - - - - - - - - - -
  // Functions
  // - - - - - - - - - -
  console.clear();

  function fn1() {
    console.log('fn1');
    console.log(arguments);
  };

  let fn2 = function () {

    let that = this;
    console.log('fn2');
    // that....
  };

  // - - - - - - - - - -
  // Arrow functions:
  // - - - - - - - - - -
  // no this!
  // no arguments!
  // no protyping nor classes
  let fn3 = (a = undefined, b = undefined) => {
    console.log(a);

    console.log('fn3');
    console.log(this);
    console.log(arguments);
  };

  // - - - - - - - - - -
  // just return value
  // - - - - - - - - - -
  let fn4 = (a, b) => a + b;

  fn1(42, 108);
  fn2();
  fn3(120, 123);
  console.log(fn4(120, 123));



  // - - - - - - - - - -
  // default parameter
  // - - - - - - - - - -
  function fn5(x, y, z) {
    // - - - - - - - - - -
    // default value ES5
    // - - - - - - - - - -
    let
      _x = x || undefined,
      _y = y || undefined,
      _z = z || undefined;

    if (typeof _x === 'undefined') return false;
    if (typeof _y === 'undefined') return false;
    if (typeof _z === 'undefined') return false;

    return _x + _y + _z;
  }

  // - - - - - - - - - -
  // default value ES6
  // - - - - - - - - - -
  function fn6(_x = undefined, _y, _z) {
    if (typeof _x === 'undefined') return false;
    if (typeof _y === 'undefined') return false;
    if (typeof _z === 'undefined') return false;

    return _x + _y + _z;
  }

  // - - - - - - - - - -
  // rest parameter
  // - - - - - - - - - -
  console.clear();
  let sum = (a, b, ...theArgs) => {

    let result = a + b;

    return theArgs.reduce((result, current) =>
      result + current);
  };

  console.log(sum(5, 12, 33, 88));



  // - - - - - - - - - -
})();

// - - - - - - - - - -
// Module-Block-Pattern
// - - - - - - - - - -
(function () {
  let
    _public = true,
    _private = true,
    _fn;

  _fn = {
    public: _public
  }
  window.jQuery = window.$ = _fn;
})();



// - - - - - -