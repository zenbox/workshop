/**
 * a Circle Calculator
 * @version 1.0.0
 * @author Michael
 * @since 2019/01/29
 */

// declaration
let
    _area = undefined, // typeof -> function
    _circumference = undefined; // typeof undefined

// methods
_area = function (radius) {
    return Math.PI * radius * radius;
}

_circumference = function (radius) {
    return Math.PI * 2 * radius;
}


// propagation
exports.area = _area;
exports.circumference = _circumference;