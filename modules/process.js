/** Circle
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

const moduleCircleCalc = require('./module-circle-calc');

let radius = 10;

console.log(moduleCircleCalc.circumference(radius));
console.log(moduleCircleCalc.area(radius));

