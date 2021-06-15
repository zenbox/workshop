/** Search Component
 *
 * @package Webapplication
 * @module Search
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-06-15
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// Declaration
const path = require('path');
const express = require('express');
const router = express.Router();

// Methods
function onGetRequest(request, response) {

    let data = {
        search: ''
    };

    response.render('templateForSearch', data)
}

function onSearchRequest(request, response) {
    console.clear();
    console.dir(request.query);


}


// Deliver /search/index.html
router.get('/index.html', onGetRequest);

// Form get request to search.html
router.get('/search.html', onSearchRequest);


// Exports
module.exports = router;