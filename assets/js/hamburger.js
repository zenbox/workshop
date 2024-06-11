/** Hamburger Menu
  *
  * @desc 
  *
  * @package Webapplication
  * @module Navigation
  * @author Michael <michael.reichart@gfu.net>
  * @version v1.0.0
  * @since 2024-06-11
  * @see i.e. inspired by ... {link to}
  * @license MIT {https://opensource.org/licenses/MIT}
  * @copyright (c) 2024 Michael Reichart, Cologne
  */

document.addEventListener('DOMContentLoaded', function () { 
    // - - - - - - - - - -
    const hamburger = document.querySelector('#hamburger');

    hamburger.addEventListener('click', function (event) {
        event.target.classList.toggle('hamburger--state-opened');
        // event.target.classList.add('hamburger--state-opened');
        // event.target.classList.remove('hamburger--state-closed');
     });
    // - - - - - - - - - -
});