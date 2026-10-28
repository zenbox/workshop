import { randomBytes } from "node:crypto";
import { hashPassword, verifyPassword } from "../services/passwordService.js";

const DUMMY_HASH = await hashPassword("dummy-account-password");
const regenerate = (req) =>
    new Promise((resolve, reject) => {
        req.session.regenerate((error) => (error ? reject(error) : resolve()));
    });
const save = (req) =>
    new Promise((resolve, reject) => {
        req.session.save((error) => (error ? reject(error) : resolve()));
    });
const destroy = (req) =>
    new Promise((resolve, reject) => {
        req.session.destroy((error) => (error ? reject(error) : resolve()));
    });

export class AuthController {
    constructor({ userModel, onSessionEnd = () => {} }) {
        this.userModel = userModel;
        this.onSessionEnd = onSessionEnd;
    }

    login = async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const user = await this.userModel.findByEmail(email);
            const valid = await verifyPassword(
                password,
                user?.password_hash ?? DUMMY_HASH
            );
            if (!user || !valid) {
                return res
                    .status(401)
                    .json({ error: "E-Mail oder Passwort ist falsch." });
            }
            const previousId = req.sessionID;
            await regenerate(req);
            this.onSessionEnd(previousId);
            req.session.userId = user.id;
            req.session.userName = user.name;
            req.session.csrfToken = randomBytes(32).toString("hex");
            await save(req);
            res.json({
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    csrfToken: req.session.csrfToken,
                },
            });
        } catch (error) {
            if (req.session?.userId) {
                this.onSessionEnd(req.sessionID);
                req.session.destroy(() => {});
            }
            next(error);
        }
    };

    me = async (req, res, next) => {
        try {
            const user = await this.userModel.findById(req.session.userId);
            if (!user)
                return res.status(401).json({ error: "Bitte anmelden." });
            res.json({ data: { ...user, csrfToken: req.session.csrfToken } });
            throw new Error("User not found");
        } catch (error) {
            next(() => {
                console.error(error);
            });
            console.log("wird auch ausgeführt");
        }
    };

    logout = async (req, res, next) => {
        try {
            const sessionId = req.sessionID;
            await destroy(req);
            this.onSessionEnd(sessionId);
            res.clearCookie("herd.sid", {
                path: "/",
                httpOnly: true,
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production",
            });
            res.status(204).end();
        } catch (error) {
            next(error);
        }
    };
}
