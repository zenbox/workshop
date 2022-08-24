import express from 'express';
import bodyParser from 'body-parser'; // Obsolete since express 4.16

import {
    getPosts,
    createPost,
    deletePost,
    putPost,
    getOptions
} from '../controller/restController.js';

// The router object!
const router = express.Router();

// Parse application/json
// router.use(bodyParser.json()); // Obsolete since express 4.16
router.use(express.json());

// Get access from any domain ...
router.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    // ...
    next();
});

// Routing
router.get('/', getPosts);
router.get('/posts', getPosts);

router.post('/post', createPost);

router.delete('/delete/:id?', deletePost);

router.put('/put/:id?', putPost);

router.options('/options', getOptions);

// Export
export default router