/* global console, window, document */
/**
 * A Webapplication
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/16
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

// - - - - - - - - - - -
// Acrobat renaming pointer
// - - - - - - - - - - -
// var
//   _app = window,
//   _this = {
//     document: window.document
//   };
//
// _app.doc = window.document;
// _this.getField = document.getElementById;

// - - - - - - - - - - -
// declaration
// - - - - - - - - - - -
var
  DEBUG = true,
  fields = {
    '1.1.4': {
      id: '1.1.4',
      isMandatory: true,
      minimumLength: 4,
      maximumLength: 8,
      pattern: '[a-zA-Z0-9]',
      description: '1.1.4 Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
    },

    '1.1.5': {
      id: '1.1.5',
      isMandatory: true,
      minimumLength: 4,
      maximumLength: 8,
      pattern: '[a-zA-Z0-9]',
      description: '1.1.5 Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
    }
  };

// - - - - - - - - - - -
// functions / methods
// - - - - - - - - - - -
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

/**
 * the on change method for each form field
 * @param  {object} event the default local event object
 * @return none
 */
function onChange(e) {
  'use strict';

  var
    _event = e || undefined,
    _result = undefined,
    _field = undefined,
    _value = undefined,
    _id = undefined,
    _pattern = undefined,
    _response = undefined;

  if (_event !== undefined) {

    _field = event.target;
    _value = event.target.value;
    _id = event.target.id;

    _result = true;

    if (fields[_id].hasOwnProperty('isMandatory') && fields[_id].isMandatory === true) {
      _response = isNotEmpty(_value); // "", undefined
      if (_response === false) {
        _result = false;
      }
    }

    if (fields[_id].hasOwnProperty('pattern')) {
      _pattern = fields[_id].pattern;
      _response = hasPattern(_value, _pattern);
      if (_response === false) {
        _result = false;
      }
    }

    if (_result === true) {
      console.log('alle Prüfungen bestanden.');
    }

    event.target.setAttribute('class', _result);

  }
}

/**
 * the main routine
 * @return none
 */
function main() {
  'use strict';

  var
    key = undefined,
    field = undefined;

  for (key in fields) {

    field = document.getElementById(fields[key]['id'])
    // field = this.getField(fields[key]['id'])

    if (field != null) {
      field.addEventListener('change', onChange);
    }

  }
}
// - - - - - - - - - -
// control
// - - - - - - - - - -
main();