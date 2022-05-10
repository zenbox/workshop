/** module.js
 * 
 * @desc This is the main file for the application.
 * 
 * @module Circle calculations
 * @since 1.0.1
 * 
 * @submodule module
 * @version 1.0.0
 * 
 * @author Michael Reichart
 * @copyright 2022 Michael Reichart
 * @see {@link https://nodejs.org/api/http.html}
 * @license MIT
 */

// Module: functional/(prototype-)object-based way

function anInternalFunctionOnly() {}

function _circumference(radius) {
    return 2 * Math.PI * radius;
}

function _area(radius) {
    return Math.PI * radius * radius;
}

// Module: class-based, object-oriented way with classes
class Circle {
    // public properties definition
    // get instance parameters
    constructor(radius) {
        this._radius = radius;
        this._circumference;
        this._area;
    }

    circumference() {
        return 2 * Math.PI * this._radius;
    }

    area() {
        return Math.PI * this._radius * this._radius;
    }

    // Convinient getter and setter for _properties
    getRadius() {}
    setRadius(r) {
        if (!r) return;

        return r;
    }

    getCircumference() {}
    setCircumference() {}
}




// exports.circumference = _circumference;
// exports.area = _area;

export default {
    circumference: _circumference,
    area: _area,
    Circle: Circle
};