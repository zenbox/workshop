/**
 * a better console println
 * @return none
 */
function log(v, a) {
  var
    _value = v || undefined,
    _arg = a || undefined;
  if (!DEBUG) return false;

  if (_value === undefined) {
    return false;
  }

  if (_arg === undefined) {
    console.println('- - - - - - - - - -');
    console.println(_value);
    console.println('- - - - - - - - - -');
  }

  switch (_arg) {
  case 'type':
    console.println('- - - - - - - - - -');
    console.println(_value);
    console.println(typeof _value);
    console.println('- - - - - - - - - -');
    break;
  }

}