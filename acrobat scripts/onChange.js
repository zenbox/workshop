/**
 * the on change method for each form field
 * @param  {object} event the default local event object
 * @return none
 */
function onChange(e) {
  'use strict';

  var
    color = {
      true: ["RGB", 0.5, 1, 0.5],
      false: ["RGB", 1, 0.5, 0.5]
    },
    _event = event || undefined,
    _result = undefined,
    _field = undefined,
    _value = undefined,
    _id = undefined,
    _pattern = undefined,
    _response = undefined;

  if (_event !== undefined) {

    _field = event.target;
    _value = event.target.value;
    _id = event.target.name;

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
      log('alle Prüfungen bestanden.');
    }

    event.target.fillColor = color[_result];

  }
}