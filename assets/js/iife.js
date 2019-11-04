/** Immediate Invoked Function Expression
 *
 *  @desc Scoped programming
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael@zenbox.de>
 * @version v1.0.0
 * @since 2019/11/04   
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */

!(function () {
    'use strict';
    // - - - - - - - - - -
    var m = 42; // non declared variables to upper scope!
    // - - - - - - - - - -
}());

console.log(window.m);