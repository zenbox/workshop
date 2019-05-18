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

// declarations
var
  field = document.getElementById('1.1.5');

// functions/methods
function onFocus() {
  // - - - - - - - - - -
  console.log('jemand hat in das Feld geklickt!');
  // - - - - - - - - - -
}

function onBlur() {
  // - - - - - - - - - -
  console.log('Das Feld ist verlassen worden!');
  console.log(field.value);
  // - - - - - - - - - -
  var
    value = field.value,
    allGood = false // boolean: true | false
  ;

  // proof for a value
  console.log(value.length);
  if (value.length > 0) {
    allGood = true;
  }

  if (allGood === true) {
    console.log('Alles ist ganz prima');
  } else {
    console.log('Nichts ist gut');
  }

  // - - - - - - - - - -
}

// control, event control
field.addEventListener('focus', onFocus);
field.addEventListener('blur', onBlur);