/**
 * Checks, if there is a value
 * @return {Boolean} the check state
 */
function isNotEmpty(v) {
  'use strict';
  var
    _value = v || undefined;

  if (_value === undefined) {
    return false;
  }

  return true;
}