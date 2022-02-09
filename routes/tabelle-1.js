
// Declaration
import express from 'express';

// Work as route
const router = express.Router();

// Request
function onRequest() { }

// Control
router.get('/', onRequest);

// Export as module
module.exports = router;