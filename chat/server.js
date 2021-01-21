/** A Chat Application
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-01-21
 * @see i.e.inspired by Brad Traversy, Traversy Media {https: //www.youtube.com/watch?v=jD7FnbI76Hg&t=2128s}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

// helper
const path = require('path');
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const connectLivereload = require("connect-livereload");

// A web service
const express = require('express');
const app = express();
const PORT = 3002 || process.env.PORT;

// The live server
liveReloadServer.watch(path.join(__dirname, 'public'));
app.use(connectLivereload());

// A single static route
app.use(express.static(path.join(__dirname, 'public')));




app.listen(PORT, () => console.log(`service is running on port ${PORT}`));