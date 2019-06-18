// more ES6+ stuff

{
  'use strict';
  // - - - - - - - - - -
  // - - - - - - - - - -
  // Symbols, generator, for-of iteration
  // - - - - - - - - - -
  let fibonacci = {
    // - - - -

    [Symbol.iterator]() {
      let
        previous = 0,
        current = 1;

      return {
        // - - - -
        next() {
          // destructuring arrays
          [previous, current] = [current, previous + current];

          return {
            done: false,
            value: current
          }
        }
        // - - - -
      }

      // - - - -
    }
  }

  // - - - - - - - - - -
  // using fibonacci

  for (let n of fibonacci) {
    if (n > 1000) break;
    console.log(n);
  }


  // - - - - - - - - - -
  // using a proxy
  // - - - - - - - - - -
  let
    target = {
      foo: "Welcome, foo"
    },
    foo = () => 'FOO!';

  let proxy = new Proxy(target, {

    // grab the target
    get(receiver, name) {
      let value;

      // proxying
      if (name in receiver) {
        value = receiver[name];

        // use as a generic function call
        eval(name + '()');

      } else {
        value = 'not implemented yet!';
      }

      return value;
    }


  });

  // use
  console.log(proxy.foo);
  console.log(proxy.world);

  // - - - - - - - - - -
  // - - - - - - - - - -
}









// - - -