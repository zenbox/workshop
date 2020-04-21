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
    });

    // Own messages
    // setCustomValidity(message)

    const customMessages = {
        valueMissing: 'Gib was ein!', // `required` attr
        emailMismatch: 'Das ist mal keine Email Adresse!', // Invalid email
        patternMismatch: 'Versuch was anderes', // `pattern` attr
    }

    function getCustomMessage(type, validity) {
        if (validity.typeMismatch) {
            return customMessages[`${type}Mismatch`]
        } else {
            for (const invalidKey in customMessages) {
                if (validity[invalidKey]) {
                    return customMessages[invalidKey]
                }
            }
        }
    }

    var inputs = document.querySelectorAll('input, select, textarea')
    inputs.forEach(function (input) {
        // Each time the user types or submits, this will
        // check validity, and set a custom message if invalid.
        function checkValidity() {
            const message = input.validity.valid ?
                null :
                getCustomMessage(input.type, input.validity, customMessages)
            input.setCustomValidity(message || '')
        }
        input.addEventListener('input', checkValidity)
        input.addEventListener('invalid', checkValidity)
    });

}