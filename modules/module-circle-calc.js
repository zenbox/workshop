/** Circle Module
 *
 * @package Webapplication
 * @module Moudules
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-06-16
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

function _circumference(radius) {
    return radius * 2 * Math.PI;
}

function _area(radius) {
    return Math.PI * _square(radius);
}

function _square(radius) {
    return radius ** 2;
}

class ClassName {

    constructor() {
        this.area;
        this.circumference;
    }

    calcArea(radius) {
        return 20;
    }
}

// module is a pointer to the global unnamed function
module.exports = {
    circumference: _circumference,
    area: _area,
    instance: new ClassName()
}