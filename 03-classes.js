// - - - - - - - - - -
setTheme(title = 'classes');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    /** 
     *
     * @version v1.0.0
     * @since 2020-06-17
     * @callback namepath
     * @param {string} n Name of person
     * @param {string} p Prename of person
     * @returns {void}
     */
    class Person {

        constructor(n, p) {
            this._name = n;
            this._prename = p;
        }

        move(d = 'west') {
            let direction = d;
            this.location = direction;
        }

        set name(n = 'no name') {
            this._name = n;
        }
        get name() {
            return this._name;
        }

        setPrename(p = 'Jane') {
            this._prename = p;
        }
    }


    class Male extends Person {
        constructor(n = 'Myr', p = 'John') {
            super(n, p);
        }

        drink() {}
    }

    class Female extends Person {
        constructor(n = 'Myr', p = 'Jane') {
            super(n, p);
        }

        cook() {}
        move() {
            super.move('east');
        }
    }
    let john = new Male();
    let jane = new Female();

    john.move();
    jane.move();

    console.log(john)
    console.log(jane)


    // - - - - - - - - - -
}