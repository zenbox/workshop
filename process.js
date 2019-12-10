/** Process
 *
 * @package Webapplication
 * @module process
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-10
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

'use strict';
let
    module = require('./module.js'),
    radius = 10;

module.value = true;

console.log('the circumference of radius is ...' + module.circumference(radius));