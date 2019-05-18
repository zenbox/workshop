/* global console, window, document */
/**
 * A Webapplication
 *
 * @package Webapplication
 * @author Michael [michael@zenbox.de]
 * @since 2019/05/15
 * @version v1.0.0
 * @copyright (c) 2018 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

/*
 * PART 1
 * - - - - - - - - - -
 * 1. main() Method
 * 2. onchange Event, event object,
 * 3. isNotEmpty()/isEmpty() Method (default operator, private notation)
 * 5. securing functions
 * 6. RegExp in JS
 * 7. TASK: write a minimum/maximum function
 * 8. a console routine
 *
 * PART 2
 * - - - - - - - - - -
 * 9. JSON as object description (for in)
 * 10. Chain the stuff
 *
 * PART 3
 * - - - - - - - - - -
 * Acrobat
 */


// declarations
var
  DEBUG = true,
  defaultPattern = '[a-zA-Z0-9 -_.]',
  fields = {
    '1.1.1': {
      id: '1.1.1',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.1 Nulla vitae elit libero, a pharetra augue.'
    },
    '1.1.2': {
      id: '1.1.2',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.2 Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.'
    },
    '1.1.3': {
      id: '1.1.3',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.3 Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    '1.1.4': {
      id: '1.1.4',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.4 Morbi leo risus, porta ac consectetur ac, vestibulum at eros.'
    },
    '1.1.5': {
      id: '1.1.5',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.5 Nullam id dolor id nibh ultricies vehicula ut id elit.'
    },
    '1.1.6': {
      id: '1.1.6',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.6 Donec sed odio dui.'
    },
    '1.1.7': {
      id: '1.1.7',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.7 Donec id elit non mi porta gravida at eget metus.'
    },
    '1.1.8': {
      id: '1.1.8',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.8 Maecenas sed diam eget risus varius blandit sit amet non magna.'
    },
    '1.1.9': {
      id: '1.1.9',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.9 Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
    },
    '1.1.10': {
      id: '1.1.10',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.10 Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
    },
    '1.1.11': {
      id: '1.1.11',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.11 Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
    },
    '1.1.12': {
      id: '1.1.12',
      isMandatory: true,
      minimumLength: false,
      maximumLength: 8,
      pattern: defaultPattern,
      description: '1.1.12 Vestibulum id ligula porta felis euismod semper.'
    }
  };

// functions/methods
/**
 * Checking a value against an regular expression
 * @param  {string}  value  [description]
 * @param  {string}  pattern [description]
 * @return {Boolean}         [description]
 */
function hasPattern(v, p) {
  // get arguments
  // default operator: ensure all arguments or set default to undefined
  var
    _value = v || undefined,
    _pattern = p || undefined,
    _regExp = new RegExp(_pattern);

  // return false, if an argument is missing
  if (_pattern === undefined || _value === undefined) {
    return {
      state: false,
      message: 'pattern undefined',
      value: _pattern
    };
  }

  // work on arguments
  // positive result
  if (_value.match(_regExp)
    .length > 0) {
    return {
      state: true,
      message: 'matches',
      value: _pattern
    };
  }
  // negative result
  return {
    state: false,
    message: 'matches not',
    value: _pattern
  };
}

/**
 * checks, if an value don't exceed a maximum number of signs
 * @param  {string}  v value, entered in a form field
 * @param  {number}  l length of signs
 * @return {Boolean}   the passed result
 */
function hasMaximumLength(v, l) {
  // get arguments
  // default operator: ensure all arguments or set default to undefined
  var
    _value = v || undefined,
    _length = l || undefined;

  // return false, if an argument is missing
  if (_length === undefined || _value === undefined) {
    return {
      state: false,
      message: "hasLength() failed due to an undefined argument.",
      value: _length
    }
  }

  // work on arguments
  // positive result
  if (_value.length <= _length) {
    return {
      state: true,
      message: 'right maximum length',
      value: _length
    };
  }

  // negative result
  return {
    state: false,
    message: 'too short (at least ' + _length + ' signs.)',
    value: _length
  };
}

/**
 * checks, if an value fall below a certain number of signs
 * @param  {string}  v value, entered in a form field
 * @param  {number}  l length of signs
 * @return {Boolean}   the passed result
 */
function hasMinimumLength(v, l) {
  // get arguments
  // default operator: ensure all arguments or set default to undefined
  var
    _value = v || undefined,
    _length = l || undefined;

  if (_length === undefined || _value === undefined) {
    return {
      state: false,
      message: "hasLength() failed due to an undefined argument.",
      value: _length
    }
  }

  // work on arguments
  // positive result
  if (_value.length >= _length) {
    return {
      state: true,
      message: 'right minimum length',
      value: _length
    };
  }

  // negative result
  return {
    state: false,
    message: 'too short (minimum ' + _length + ' signs.)',
    value: _length
  };
}

/**
 * checks, if a value is not empty
 * @param  {[type]}  v [description]
 * @return {Boolean}   the passed result
 */
function isNotEmpty(v) {
  // get arguments
  // default operator: ensure all arguments or set default to undefined
  var _value = v || '';

  if (_value.length === 0) {
    return {
      state: false,
      message: 'is empty, but should not',
      value: _value
    };
  }

  return {
    state: true,
    message: 'Right! Is not empty',
    value: _value
  };
}
/**
 * checks, if a value is empty
 * @param  {string}  v value, entered in a form field
 * @return {Boolean}   the passed result
 */
function isEmpty(v) {
  var _value = v || undefined;

  if (_value.length > 0) {
    return {
      state: true,
      message: 'is empty.',
      value: _value
    };
  }

  return {
    state: false,
    message: 'is not empty, but should be.',
    value: _value
  };
}

function consoleOut(r) {
  var _response = r || undefined;
  if (DEBUG) {
    if (_response !== undefined) {
      console.log('- - - - - - - - - -');
      console.log(_response.state);
      console.log(_response.message);
      console.log(_response.value);
      console.log('- - - - - - - - - -');
    }
  }
}

function onChange(event) {
  var
    _event = event || undefined,
    _value = event.target.value,
    _response = false,
    _result = true,
    isMandatory, minimumLength, maximumLength, pattern, description;

  if (fields[event.target.id].hasOwnProperty('isMandatory')) {
    isMandatory = fields[event.target.id]['isMandatory'];
  } else {
    isMandatory = undefined;
  }

  if (fields[event.target.id].hasOwnProperty('minimumLength')) {
    minimumLength = fields[event.target.id]['minimumLength'];
  } else {
    minimumLength = undefined;
  }

  if (fields[event.target.id].hasOwnProperty('maximumLength')) {
    maximumLength = fields[event.target.id]['maximumLength'];
  } else {
    maximumLength = undefined;
  }

  if (fields[event.target.id].hasOwnProperty('pattern')) {
    pattern = fields[event.target.id]['pattern'];
  } else {
    pattern = undefined;
  }

  if (fields[event.target.id].hasOwnProperty('description')) {
    description = fields[event.target.id]['description'];
  } else {
    description = undefined;
  }

  // check if filled out
  if (isMandatory) {
    _response = isNotEmpty(_value);
    if (_response.state === false) {
      _result = false;
    }
    consoleOut(_response)
  }

  // check, if input exceeds maximum length
  if (maximumLength) {
    _response = hasMaximumLength(_value, maximumLength);
    if (_response.state === false) {
      _result = false;
    }
    consoleOut(_response)
  }

  // check for minimum input length
  if (minimumLength) {
    _response = hasMinimumLength(_value, minimumLength);
    if (_response.state === false) {
      _result = false;
    }
    consoleOut(_response)
  }

  // check for syntax
  if (pattern) {
    _response = hasPattern(_value, pattern);
    if (_response.state === false) {
      _result = false;
    }
    consoleOut(_response)
  }
  event.target.setAttribute('class', _result);

  console.log('- - - - - - - - - -');
  console.log(_result);
  console.log('- - - - - - - - - -');
}

/**
 * the main control, essentially setting event listeners
 * @return {none}
 */
function main() {
  var key, field;

  for (key in fields) {

    // field lookup -> field or null
    field = document.getElementById(fields[key]['id']);

    // check, if the field exists
    if (field !== null) {
      field.addEventListener('change', onChange)
    }
  }
}

// - - - - - - - - - -
// control
// - - - - - - - - - -
main();
// - - - - - - - - - -