export function createSocketAccess({
    io,
    sessionMiddleware,
    sessionStore,
    origin,
}) {
    const readSession = (sessionId) =>
        new Promise((resolve, reject) => {
            sessionStore.get(sessionId, (error, session) =>
                error ? reject(error) : resolve(session)
            );
        });
    const authenticated = (session) =>
        Number.isSafeInteger(session?.userId) &&
        session.userId > 0 &&
        typeof session.userName === "string" &&
        new Date(session.cookie?.expires).getTime() > Date.now();

    io.engine.use(sessionMiddleware);
    io.use(async (socket, next) => {
        try {
            const supplied = socket.handshake.headers.origin;
            if (supplied && supplied !== origin)
                return next(new Error("Origin nicht erlaubt."));
            const session = await readSession(socket.request.sessionID);
            if (!authenticated(session))
                return next(new Error("Bitte anmelden."));
            socket.data.sessionID = socket.request.sessionID;
            socket.data.userId = session.userId;
            socket.data.userName = session.userName;
            socket.data.expiresAt = new Date(session.cookie.expires).getTime();
            next();
        } catch {
            next(new Error("Bitte anmelden."));
        }
    });

    const validate = async (socket) => {
        let session;
        try {
            session = await readSession(socket.data.sessionID);
        } catch {
            socket.disconnect(true);
            return false;
        }
        if (
            socket.connected &&
            authenticated(session) &&
            session.userId === socket.data.userId
        ) {
            socket.data.expiresAt = new Date(session.cookie.expires).getTime();
            return true;
        }
        socket.disconnect(true);
        return false;
    };

    io.on("connection", (socket) => {
        let expiryTimer;
        const scheduleExpiry = () => {
            expiryTimer = setTimeout(
                async () => {
                    if (await validate(socket)) scheduleExpiry();
                },
                Math.max(
                    1,
                    Math.min(2147483647, socket.data.expiresAt - Date.now())
                )
            );
            expiryTimer.unref();
        };
        scheduleExpiry();
        socket.on("disconnect", () => clearTimeout(expiryTimer));
        socket.use(async (packet, next) => {
            if (await validate(socket)) next();
        });
    });

    const disconnectSession = (sessionId) => {
        for (const socket of io.sockets.sockets.values()) {
            if (socket.data.sessionID === sessionId) socket.disconnect(true);
        }
    };
    sessionStore.on("session:destroy", disconnectSession);

    const emit = async (event, data) => {
        await Promise.all(
            [...io.sockets.sockets.values()].map(async (socket) => {
                if (await validate(socket)) socket.emit(event, data);
            })
        );
    };
    return { disconnectSession, emit };
}
