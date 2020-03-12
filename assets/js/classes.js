/** Classes
 *
 * @package Webapplication
 * @module App
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-03-12
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */
!(function () {
    'use strict';
    console.clear();
    //- - - - - - - - - -
    class Person {
        constructor(n = undefined) {
            this.name = undefined;
            this.setName(n);
        }

        setName(n = undefined) {
            let name = n;

            if (typeof name === 'undefined') return false;

            this.name = name;
            return true;
        }

        getName() {
            return this.name;
        }
    }

    // Child class
    class Female extends Person {
        constructor(n = undefined) {
            // Use parent class constructor
            super(n);
        }
    }

    let john = new Person('John');
    let mary = new Female('mary');

    console.log('john.name:', john.getName());
    console.log('mary.name:', mary.getName());
    //- - - - - - - - - -
}());