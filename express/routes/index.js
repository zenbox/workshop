/* global console, require */
/**
 * an index application, using express
 *
 * @package responsive webdesign
 * @author Michael [michael@zenbox.de]
 * @since 2019/01/28 
 * @version v1.0.0
 * @copyright (c) 2019 Michael Reichart, Cologne
 * @license MIT License [https://opensource.org/licenses/MIT]
 */

'use strict';
// - - - - - - - - - -
const express = require('express');
const router = express.Router();

// catch a request
router.get('/', function (request, response) {
    // call index.ejs as view template
    // some data as object to be used in a template
    response.render('index', {
        value: 'lorem ipsum dolor sit amet ...'
    });
})

module.exports = router;