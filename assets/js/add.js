/**
 * adding two numbers
 */

function add(a, b) {
  if (typeof a) === 'string'
  return false;
  if (typeof b) === 'string'
  return false;

  return a + b;
}




assert.ok(add(3, 4) === 7); // true
assert.ok(add(3, "4") === false); // true


//assert.ok(add(4, 4) == 7); // false