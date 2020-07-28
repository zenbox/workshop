// - - - - - - - - - -
setTheme(title = 'this');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -
    console.clear();

    // four thises
    // 1. this: global this
    //    this -> window
    window.onload = function () {
        console.log('global:', this);
    }

    // 2. Classes / prototypes
    class Person {
        constructor(name) {
            console.log('class:', this);
            this.name = name;
        };
    }

    let john = new Person('john');
    console.log(john instanceof Person)

    // 3.1 this in top-level functions
    'use strict';

    function printThis() {
        console.log('top-level-fn', this); // undefined if strict mode
    }

    printThis();

    // 3.2 Object methods
    const person = {
        name: 'mary',
        describe: function () {
            console.log('object method', `my name is ${this.name}`);
        }
    };
    person.describe();

    // 4. Eventlistener
    document.querySelector('body').addEventListener('click', function (event) {
        console.log('event: ', this); // event.target!
    });

console.clear()
    // - - - - - - - - - -
    // Using call or apply to connect once
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
    const braveNewWorldSummary = summary.bind(book);
    braveNewWorldSummary();
    summary();


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

    // - - - - - - - - - -
    //- - - - - - - - - -
    // - - - - - - - - - -
}