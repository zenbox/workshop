// - - - - - - - - - -
setTheme(title = 'classes');
// - - - - - - - - - -
if (eval(themes[title])) {
    // - - - - - - - - - -

    // Parent class
    class User {
        constructor(n, p, e) {
            this.setName(n);
            this.setPrename(p);
            this.setEmail(e);
        }

        move() {
            console.log('1 step');
        }

        setName(n = 'no name') {
            this.name = n;
        }
        setPrename(p) {
            this.prename = p;
        }
        setEmail(e) {
            this.email = e;
        }

        getName() {
            return this.name;
        }
        getPrename() {
            return this.prename;
        }
        getEmail() {
            return this.email;
        }
    }

    let john = new User('doe', 'john', 'john@doe.org')

    john.name = 'Mary'

    log(john.getName());
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