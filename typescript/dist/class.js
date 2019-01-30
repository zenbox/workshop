"use strict";
/**
 * a JS Class
 */
var Person = /** @class */ (function () {
    function Person(name) {
        if (name === void 0) { name = 'John Doe'; }
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.getName;
    };
    return Person;
}());
