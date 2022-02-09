// Declaration
import express from 'express';

// Work as route
const router = express.Router();

// Request
function onRequest(request, response) {

    // do a lot of nice stuff

    response.render(
        'tabelle', {
            data: 'here are some data ...'
        }
    );
}

// Control
router.get('/', onRequest);

// Export as module
export default router;