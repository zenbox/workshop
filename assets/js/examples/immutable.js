/** Immutable Objects
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-03-12
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */
!(function () {
    // - - - - - - - - - -
    // 1. const
    // const with primitives: immutable
    // undefined, null, boolean, number, string, symbol values
    // - - - - - - - - - -
    const str = 'HELLO'
    str[0] = 'J' // silently ignores mutation attempt
    console.log(str) // "hello", not "jello"

    // - - - - - - - - - -
    // const with objects: just re-assignment, not immutable
    // - - - - - - - - - -
    const obj = {}
    const arr = []
    const fnc = () => {}

    obj.mutated = true
    arr.mutated = true
    fnc.mutated = true

    console.log(obj.mutated, arr.mutated, fnc.mutated) // true x 3

    //- - - - - - - - - -
    // 2. Object freeze
    //- - - - - - - - - -
    const data = {
        port: 5500
    }
    console.log('data.port:', data.port);

    // Mutating:
    data.port++ // mutates obj
    console.log('data.port:', data.port);

    // Freeze - making immuntable
    // - - - - -
    'use strict';
    Object.freeze(data)
    // - - - - -
    console.log('data.port:', data.port);

    // mutate an immutable
    // silently ignored in non-strict mode (error in strict mode)
    // ! data.port++

    console.log('data.port:', data.port)
    // - - - - - - - - - -

    // - - - - - - - - - -
    // 3. Spread Syntax
    // - - - - - - - - - -
    const obj1 = {
        type: 'data'
    }
    const arr1 = ['na', 'na', 'na']

    // Adding a key-value pair
    const obj2 = {
        ...obj1,
        subtype: 'stuff'
    };

    // Adding an eleent
    const arr2 = [...arr1, 'batman'];

    // distinct old and new versions
    console.log(obj1, obj2)
    console.log(arr1, arr2)



    // - - - - - - - - - -
}());