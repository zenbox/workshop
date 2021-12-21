/** Search application (middleware)
 **
 * @package Webapplication
 * @module search
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-12-21
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Declaration
const express = require('express');
const router = express.Router();

function onGetRequest(request, response) {

    let pseudoData = {
        "key1": "value",
        "key2": "value"
    };

    response.render(
        'search', // Template for search
        pseudoData
    );

}

// Control
router.get('/', onGetRequest);
module.exports = router;