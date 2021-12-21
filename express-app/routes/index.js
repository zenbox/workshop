/** Index control (semi-middleware)
 *
 * @package Webapplication
 * @module index
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

// Methods
function onGetRequest(request, response) {
    console.log('get request in routes/index.js');

    response.render(
        'index', // Template name: views/index.ejs
        {
            // Variables in index.ejs
            value: 'Lorem ipsum ...'
        }
    );

}

// Control
router.get('/', onGetRequest);

// Module is a pointer to index.js
module.exports = router;