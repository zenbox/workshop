// - - - - - - - - - -
setTheme(title = 'classes');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // Parent class
    class User {
        constructor(n, p, e) {
            this._name = n;
            this._prename = p;
            this._email= e;
        }

        move() {
            console.log('1 step');
        }

        set name(n = 'no name') {
            this._name = n;
        }

        get name() {
            return this._name;
        }

        setPrename(p) {
            this.prename = p;
        }
        setEmail(e) {
            this.email = e;
        }


        getPrename() {
            return this.prename;
        }
        getEmail() {
            return this.email;
        }
    }

    let john = new User('doe', 'john', 'john@doe.org')

    // john.name = 'Mary'

    log(john.name);
    log(john.getEmail());

    john.move();


    // Child class
    class Male extends User {
        constructor(n, p, e) {
            super(n, p, e);
        }
        drink() {
            console.log('beer');
        }
    }

    class Female extends User {
        constructor(n, p, e) {
            super(n, p, e);
        }
        dance() {
            console.log('jive');
        }
        move() {
            console.log('2 steps');
        }
    }

    let tom = new Male('Myr', 'Tom');
    tom.drink();

    let ann = new Female('Myr', 'Ann');
    ann.dance();
    ann.move();
    // - - - - - - - - - -
}