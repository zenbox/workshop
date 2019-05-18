/**
 * checks for a regexp pattern
 * @param  {string}  v the field value
 * @param  {string}  p a regular expression
 * @return {Boolean}   the check state
 */
function hasPattern(v, p) {
  'use strict';
  var
    _value = v || undefined,
    _pattern = p || undefined,
    _regExp = new RegExp(_pattern);

  // negative
  if (_value === undefined || _pattern === undefined) {
    return false;
  }

  // positive
  if (_value.match(_regExp) && _value.match(_regExp)
    .length > 0) {
    return true;
  }

  // fallback negative
  return false;
}