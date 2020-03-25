/** User class
 *
 * @package Webapplication
 * @module client application
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-03-25
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */
'use strict';
// - - - - - - - - - -
// Parent class
class User {
    constructor(n, p, e) {
        this._name = n;
        this._prename = p;
        this._email = e;
    }

    move() {
        console.log('1 step');
    }

    set name(n = 'no name') {
        this._name = n;
    }
    set prename(p) {
        this._prename = p;
    }
    set email(e) {
        this._email = e;
    }

    get name() {
        return this._name;
    }
    get prename() {
        return this._prename;
    }
    get email() {
        return this._email;
    }
}

// Child class
export class Male extends User {
    constructor(n, p, e) {
        super(n, p, e);
    }
    drink() {
        console.log('beer');
    }
}

export class Female extends User {
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

// - - - - - - - - - -
export default User;
// - - - - - - - - - -