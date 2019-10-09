/** APPLICATION
 *
 *  @desc lorem ipsum dolor ...
 *
 * @package Webapplication
 * @module header, navbar
 * @author Michael <michael@zenbox.de>
 * @version v1.0.0
 * @since 2019-10-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */
(! function () {
    'use strict';
    // - - - - - - - - - -


    // EVENT LISTENER (CONTROL)
    document.querySelector('a[href]').addEventListener('click', function (event) {
        // stop the browser action
        event.preventDefault();

        console.dir(event);

    });
    // - - - - - - - - - -
}())