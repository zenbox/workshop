/** Circle calculations
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

'use strict';

let circumference = function (radius) {
    return radius * 2 * Math.PI;
}

let area = function (radius) {
    return Math.PI * Math.pow(radius, 2);
}


// export to main
exports = {
    circumference: circumference,
    area: area
}