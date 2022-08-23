/** Webservice with Express
  *
  *
  * @package Webapplication
  * @module Webservice
  * @author Michael <michael.reichart@gfu.net>
  * @version v1.0.0
  * @since 2022-06-21
  * @see i.e. inspired by ... {link to}
  * @license MIT {https://opensource.org/licenses/MIT}
  * @copyright (c) 2022 Michael Reichart, Cologne
  */

// ES Modules
import path from 'path';
import express from 'express';
import restRoute from './src/routes/rest.js';

// Declaration
const app = express();
const port = 3000;

// Configure express
app.use(express.static(path.resolve('./static')));

app.use('/rest', restRoute);
// app.use('/login', loginRoute);
// ...

// Template engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

// Methods


// Control
app.listen(port, () => {console.log(`Server listening on ${port}`)} );