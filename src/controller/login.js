import express from "express";

const router = express.Router();

// request: /login
router.get("/", (request, response, next) => {
    console.log(request.query);

    // Database access and business logic ...

    response
        .status(200)
        .json({
            "prename": "Michael",
            "lastname": "Reichart",
            "last login": "2023/01/31",
        });
});

const controller = router;
export default controller;
