import { Router } from "express";
import {
    index,
    show,
    create,
    update,
    duplicate,
    remove,
} from "../controllers/sheepApiController.js";
import { requireAuth, requireCsrf } from "../middleware/auth.js";

const router = Router();

router.use(requireAuth);
router.get("/", index);
router.get("/:id", show);
router.post("/", requireCsrf, create);
router.post("/:id/duplicate", requireCsrf, duplicate);
router.patch("/:id", requireCsrf, update);
router.delete("/:id", requireCsrf, remove);

export default router;
