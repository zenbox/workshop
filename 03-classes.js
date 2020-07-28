// - - - - - - - - - -
setTheme(title = 'classes');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    /** Person Class
     *
     * @version v1.0.0
     * @since 2020-07-27
     * @callback namepath
     * @param {string} n Name of a person
     * @param {string} p Prename of a person
     * @param {string} e Email of a person
     * @returns {Person}
     */
    class Person {
        constructor(n, p, e) {
            this.name = n; // Use a setter

            this._prename = p;
            this._email = e;

            console.dir(this);
        }

        move(d = 'west') {
            this._direction = d;
            console.log(`go ${this.direction}`);
        }

        // GETTER/SETTER:
        set name(n) {
            if (typeof n === 'string')
                this._name = n;
            else this._name = undefined;
        }

        get name() {
            return this._name;
        }

        set direction(d) {
            this._direction = d;
        }

        get direction() {
            return this._direction;
        }

    }


    let john = new Person('Doe', 'John', 'john@doe.com');
    // john.name=108;
    log(john);

    john.move();
    console.log(john.prename)
    // - - - - - - - - - -

    // Inheritance
    class Male extends Person {
        constructor(n, p, e) {
            super(n, p, e);
        }
        drink(d) {
            console.log(d);
        }
    }
    class Female extends Person {
        constructor(n, p, e) {
            super(n, p, e);
        }

        move(d = 'west') {
            this._direction = d;
            console.log(`female go ${this.direction}`);
        }

        cook(f) {
            this.move('north');
            console.log(f);
        }
    }
    let joe = new Male('Doe', 'Joe', 'joe@doe.com');
    let jane = new Female('Doe', 'Jane', 'jane@doe.com');

    joe.drink('beer');
    jane.cook('burger');

    joe.move('east');
    jane.move('south');
}