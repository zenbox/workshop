/** Some accessability scripts
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2020-04-20
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2020 Michael Reichart, Cologne
 */

{
    let fontSizeSelector = document.querySelector('#font-size');
    fontSizeSelector.addEventListener('click', (event) => {
        event
            .preventDefault();
        document
            .querySelector('html')
            .classList.toggle('bigger-font');
    })
}