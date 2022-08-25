/** Class Example
 *
 * @package Webapplication
 * @module Controller
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-08-24
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

import express from express;

class Controller {

    constructor(initArg = 'defaultValue') {
        this._property = initArg;
        let localProperty = true;
        this.init();
    }

    init() {}

    set property(value) {
        console.log('setter!');
        this._property = value;
    }

    get property() {
        return this._property;
    }
}

export default Controller;




// let initArg = 'test';
// let instance = new Controller(initArg);
// console.log(instance.property)
// console.log(instance.localProperty) // undefined

// instance.property = 'new value';
// console.log(instance.property);

// instance.init();