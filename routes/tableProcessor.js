/** Table processor
 * 
 * @desc This delivers some table data.
 * @module TableProcessor
 * @author Michael Reichart
 * @version 0.0.1
 * @since 0.0.1
 * @copyright 2022 Michael Reichart
 * @see {@link https://nodejs.org/api/http.html}
 * @requires http
 * @license MIT
 */

// Importing the required modules
import express from 'express';
import path from 'path';

// Declaration
const router = express.Router();
// - - - - - - - - -

import {
    readFile
} from 'fs/promises';

// Get some data for table
const userData =
    JSON.parse(
        await readFile(
            new URL('../data/userData.json',
                import.meta.url)
        )
    );

// Request?
function onRequest(request, response) {

    // Response
    response.render('tableView', {
        data: 'Some data ...',
        userData: userData
    });
}

router.get('/', onRequest);



// - - - - - - - - -
// Export as module
export default router;