/** Index js
 *
 * @desc a simple webservice in express
 *
 * @package Webapplication
 * @module Webservice
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-02-09
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */

import path from 'path';
import express from 'express';

// const express = require('express');

const app = express();

// Some express configuration
// Static route
// __ dirname, __filename
app.use( express.static( path.join( path.dirname, 'public' ) ) );




app.get('/', (request, response) => {
    response.send('hello world');
});

app.get('/tabelle-1.html', (request, response) => {
    response.send('<table border="1"><tr><td>example</td></tr></table>');
});

app.listen(5500);