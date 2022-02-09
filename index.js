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

// import modules (routes)
import table from './routes/tabelle.js';

// const express = require('express');
const app = express();

// Some express configuration
// Static route
app.use(express.static(path.resolve('public')));

// Use templates
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

// Dynamic routes
app.use('/tabelle.html', table);

app.listen(5500, ()=>{console.log(`Server runs on port 5500`)});