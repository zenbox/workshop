/** this, bind, call, apply
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
    // 1. this in the global context
    // - - - - - - - - - -  
    window.onload = function () {
        // - - - - -
        console.log('global this:', this);

        // - - - - - - - - - -
        // 2. this as a method within an object
        // 2.1 Top level function
        // - - - - - - - - - -
        'use strict';

        function printThis() {
            console.log('top-level function this:', this); // undefined, cause of strict mode
        }

        printThis()


        // - - - - - - - - - -
        // 2.2 Object method
        // - - - - - - - - - -
        const person = {
            name: 'John',
            birthday: 2021,

            describe() {
                console.log('object method this:', `${this.name} will be born in ${this.birthday}.`)
            },
        }

        person.describe();
        // this as a constructor on a function or class
        // this as a DOM event handler

        // - - - - - - - - - -
        // 3. Using call or apply to connect once
        // - - - - - - - - - -
        const book = {
            title: 'Brave New World',
            author: 'Aldous Huxley',
        }

        function summary() {
            console.log(`${this.title} was written by ${this.author}.`)
        }

        function longerSummary(genre, year) {
            console.log(
                `${this.title} was written by ${this.author}. It is a ${genre} novel written in ${year}.`
            )
        }

        summary();
        summary.call(book);
        summary.apply(book);

        // call passes additional arguments
        longerSummary.call(book, 'dystopian', 1932)

        // - - - - - - - - - -
        // 4. Using bind to connect always
        // - - - - - - - - - -
        const braveNewWorldSummary = summary.bind(book)
        braveNewWorldSummary()


        // - - - - - - - - - -
        // 5. Arrow functions do not have an own this!
        // - - - - - - - - - -
        const whoAmI = {
            name: 'Donald Duck',
            regularFunction: function () {
                console.log('normal function:', this.name);
            },
            arrowFunction: () => {
                console.log('arrow function:', this.name);
            },
        }

        whoAmI.regularFunction() // "Leslie Knope"
        whoAmI.arrowFunction() // undefined

        // - - - - -
    }
    // - - - - - - - - - -
}());