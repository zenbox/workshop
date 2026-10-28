import session from "express-session";

const { Store } = session;

export class SqliteSessionStore extends Store {
    constructor(db) {
        super();
        this.db = db;
    }

    get(sid, callback) {
        this.db
            .get("SELECT data, expires_at FROM sessions WHERE sid = ?", sid)
            .then((row) => {
                if (!row || row.expires_at <= Date.now())
                    return callback(null, null);
                callback(null, JSON.parse(row.data));
            })
            .catch(callback);
    }

    set(sid, data, callback) {
        const expiresAt = data.cookie?.expires
            ? new Date(data.cookie.expires).getTime()
            : Date.now() + 8 * 60 * 60 * 1000;
        this.db
            .run(
                `INSERT INTO sessions (sid, data, expires_at) VALUES (?, ?, ?)
                 ON CONFLICT(sid) DO UPDATE SET data = excluded.data, expires_at = excluded.expires_at`,
                sid,
                JSON.stringify(data),
                expiresAt
            )
            .then(() => callback?.(null))
            .catch(callback);
    }

    destroy(sid, callback) {
        this.db
            .run("DELETE FROM sessions WHERE sid = ?", sid)
            .then(() => {
                this.emit("session:destroy", sid);
                callback?.(null);
            })
            .catch(callback);
    }

    cleanup() {
        return this.db.run(
            "DELETE FROM sessions WHERE expires_at <= ?",
            Date.now()
        );
    }
}
