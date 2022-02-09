// Declaration
import express from 'express';

// Get some data
// Since import does not support json files ...
import {
    readFile
} from 'fs/promises';

const userData = JSON.parse(
    await readFile(
        new URL('../data/userData.json',
            import.meta.url)
    )
);

// Work as route
const router = express.Router();

// Request
function onRequest(request, response) {

    // do a lot of nice stuff

    response.render(
        'tabelle', {
            value: 'here are some data ...',
            data: 'A second data ...',
            userData: userData
        }
    );
}

// Control
router.get('/', onRequest);

// Export as module
export default router;