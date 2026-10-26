import { Router } from "express";
import {
    currentUser,
    login,
    logout,
    register,
} from "../controllers/authController.js";
import { requireAuth, requireCsrf } from "../middleware/auth.js";

const router = Router();

// Lernkontext 3.1: Authentifizierung bleibt getrennt von den Schaf-Routen.
router.post("/register", register);
router.post("/login", login);
router.get("/me", requireAuth, currentUser);
router.post("/logout", requireAuth, requireCsrf, logout);

export default router;
