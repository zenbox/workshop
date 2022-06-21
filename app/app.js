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

// Declaration
const app = express();
const port = 3000;

// Methods


// Control
app.listen(port, () => {console.log(`Server listening on ${port}`)} );