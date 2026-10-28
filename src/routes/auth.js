import express from "express";
import { requireAuth, requireCsrf, validateLogin } from "../middleware/auth.js";

export function createAuthRouter(controller, originCheck) {
    const router = express.Router();
    router.use((req, res, next) => {
        res.set("Cache-Control", "no-store");
        next();
    });
    router.post("/login", originCheck, validateLogin, controller.login);
    router.get("/me", requireAuth, controller.me);
    router.post(
        "/logout",
        requireAuth,
        originCheck,
        requireCsrf,
        controller.logout
    );
    return router;
}
