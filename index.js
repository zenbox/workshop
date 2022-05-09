/** Index.js
 * 
 * @desc This is the main file for the application.
 * @module Webservice
 * @author Michael Reichart
 * @version 0.0.1
 * @since 0.0.1
 * @copyright 2022 Michael Reichart
 * @see {@link https://nodejs.org/api/http.html}
 * @requires http
 * @license MIT
 */

// Importing the required modules
import path from 'path'; // const path = require('path');
import express from 'express'; // const express = require('express');

import tableProcessor from './routes/tableProcessor.js';

// Declaration
const app = express();

let
    port = 3000,
    host = 'localhost';

// Methods, build
app.use(express.static(path.resolve('public')));

// Some express configuration
// views (templates), routes (middleware)
//
// ejs - Embedded Javascript
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));


// Dynamic routes
app.use('/table.html', tableProcessor);

// Control
app.listen(port, () => console.log(`Server running at http://${host}:${port}`));