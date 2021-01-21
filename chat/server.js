/** A Chat Application
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-01-21
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// helper
const path = require('path');

// A web service
const express = require('express');
const app = express();
const PORT = 3002 || process.env.PORT;

// A single static route
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT, () => console.log(`service is running on port ${PORT}`));