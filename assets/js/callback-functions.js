/* global console, window, document */
/**
 * A Simple Callback Function
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/20
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */
var add, multiply;

// any function
function calculate(arg1, arg2, fn) {
  var
    _arg1 = arg1 || undefined,
    _arg2 = arg2 || undefined,
    // - - - - - - - - - -
    // THIS is a function pointer!
    // - - - - - - - - - -
    _fn = fn || undefined,
    // - - - - - - - - - -
    _result = undefined;

  if (_arg1 === undefined) return false;
  if (_arg2 === undefined) return false;
  if (_fn === undefined) return false;

  // - - - - - - - - - -
  // THIS is the callback of a function!
  // - - - - - - - - - -
  _result = _fn(_arg1, _arg2);
  // - - - - - - - - - -
  console.log(_result);
}

// Addition of two numbers
add = function (a, b) {
  if (
    typeof a === 'number' &&
    typeof b === 'number') {
    return a + b;
  }
}

// Multiplying of two numbers
multiply = function (a, b) {
  if (
    typeof a === 'number' &&
    typeof b === 'number') {
    return a * b;
  }
}

calculate(42, 108, add);
calculate(42, 108, multiply);



// What is a callback function
// domObject.addEventListener('click', function (event) {
//   console.log(event.target);
// });
//
// function addEventListener(type, fn) {
//   var event = {};
//
//   event.type = type || undefined;
//   event.fn = fn || undefined;
//   event.timestamp = new Date();
//   event.target = this;
//   ...
//
//   // callback
//   fn();
// }