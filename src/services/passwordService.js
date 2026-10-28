import {
    randomBytes,
    scrypt as scryptCallback,
    timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCallback);
const OPTIONS = { N: 16384, r: 8, p: 1, maxmem: 64 * 1024 * 1024 };

export async function hashPassword(password) {
    const salt = randomBytes(16).toString("hex");
    const hash = await scrypt(password, salt, 64, OPTIONS);
    return `scrypt$16384$8$1$${salt}$${hash.toString("hex")}`;
}

export async function verifyPassword(password, encoded) {
    if (typeof encoded !== "string") return false;
    const parts = encoded.split("$");
    if (
        parts.length !== 6 ||
        parts.slice(0, 4).join("$") !== "scrypt$16384$8$1" ||
        !/^[a-f0-9]{32}$/.test(parts[4]) ||
        !/^[a-f0-9]{128}$/.test(parts[5])
    )
        return false;
    const hash = await scrypt(password, parts[4], 64, OPTIONS);
    return timingSafeEqual(hash, Buffer.from(parts[5], "hex"));
}
