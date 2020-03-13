/** Classes
 *
 * @package Webapplication
 * @module App
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-03-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */
!(function () {
    'use strict';
    // - - - - - - - - - -
    // ES6+
    class Person {
        constructor(n) {
            this.name = n;
        }
        setName(n) {
            this.name = n;
        }
    }

    class Male extends Person {
        constructor(n) {
            super(n);
        }
        drinks() {
            console.log(`${this.name} is drinking!`);
        }
    }
    class Female extends Person {
        constructor(n) {
            super(n);
        }
        dances() {
            console.log(`${this.name} is dancing!`);
        }
    }

    let john = new Person('John');
    let mary = new Female('Mary');
    let tom = new Male('Tom');

    mary.setName('Eve');

    mary.dances();
    tom.drinks();

    console.log(john.name);
    console.log(mary.name);
    console.log(tom.name);
    // - - - - - - - - - -
}())