/** Index Control
 *
 * @package Webapplication
 * @module Index
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-06-15
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Declaration
const express = require('express');
const router = express.Router();

// Methods
function onRequest(request, response) {

    // console.dir(response);

    response.render(
        'templateForIndex', {
            value: 'Lorem ipsum dolor sit amet cons ...'
        }
    );
}

// Control
router.get('/', onRequest);

// Export
module.exports = router;