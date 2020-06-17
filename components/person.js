    export default class Person {
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