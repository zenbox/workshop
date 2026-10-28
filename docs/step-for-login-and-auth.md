# Login-Controller und auth-Router

## Ziel

Die Anmeldung besteht aus drei Teilen, die nacheinander laufen. Jeder Teil hat eine Aufgabe:

1. **Middleware validateLogin:** prüft nur die Form der Eingabe. Sie kennt keine Benutzer.
2. **Controller login:** prüft das Passwort und legt bei Erfolg die Session an.
3. **Middleware requireAuth:** lässt später nur angemeldete Anfragen zu /herd.

Der Ablauf eines Login-Requests:

POST /auth/login -> express.json() Body lesen -> session() Session laden (noch leer) -> validateLogin Form prüfen (Middleware) -> AuthController.login Passwort prüfen, Session setzen (Controller) -> Antwort mit Cookie

**Voraussetzungen:** Schritte 1 bis 4 sind umgesetzt. Die Tabelle users hat email und password_hash, passwordService.js existiert mit hashPassword() und verifyPassword(), und die Session-Middleware läuft.

---

## Schritt A: Benutzer-Model

**Zeigen:** Das Model unterscheidet zwischen Login-Daten (mit Hash) und öffentlichen Daten (ohne Hash).

```
// src/models/user-model.js

export class UserModel {

    constructor(database) {

        this.db = database.db;

    }

    // Intern: enthält den Hash, nur für den Login

    findByEmail(email) {

        return this.db.get(

            "SELECT id, name, email, password_hash FROM users WHERE email = ?",

            email

        );

    }

}
```

**Erklärung:** Der Hash verlässt das Model nicht. Die Funktion liefert ihn nur an den Login, weil dort die Prüfung stattfindet.

---

## Schritt B: Middleware für die Eingabe

**Zeigen:** Die erste Middleware in der Kette. Sie entscheidet, ob die Anfrage weitergereicht wird.

```
// src/middleware/validate-login.js

export function validateLogin(req, res, next) {

    const { email, password } = req.body ?? {};

    const invalid =

        typeof email !== "string" ||

        typeof password !== "string" ||

        email.trim() === "" ||

        password === "" ||

        email.length > 254 ||

        password.length > 200;

    if (invalid) {

        return res.status(422).json({ error: "E-Mail und Passwort sind erforderlich." });

    }

    // Bereinigte Werte an den nächsten Schritt weitergeben

    req.body = { email: email.trim().toLowerCase(), password };

    next();

}
```

**Erklärung:**

- next() gibt die Anfrage weiter. Ohne next() und ohne Antwort hängt die Anfrage.
- Hier wird nichts gespeichert und nichts geprüft, was eine Datenbank braucht. Die Middleware kennt nur die Form.
- Die bereinigten Werte landen wieder in req.body. So sieht der Controller nur saubere Daten.

---

## Schritt C: Login-Controller

**Zeigen:** Der Teil, der das Passwort prüft und die Session setzt.

```
// src/controllers/auth-controller.js

import crypto from "node:crypto";

import { hashPassword, verifyPassword } from "../services/passwordService.js";

// Vergleichshash für unbekannte E-Mails, damit die Antwortzeit gleich bleibt

const DUMMY_HASH = await hashPassword("kein-konto");

// Hilfsfunktionen, damit die Callback-Aufrufe von express-session lesbar bleiben

const regenerate = (req) =>

    new Promise((resolve, reject) =>

        req.session.regenerate((err) => (err ? reject(err) : resolve()))

    );

const save = (req) =>

    new Promise((resolve, reject) =>

        req.session.save((err) => (err ? reject(err) : resolve()))

    );

export class AuthController {

    constructor({ userModel }) {

        this.userModel = userModel;

    }

    login = async (req, res, next) => {

        try {

            const { email, password } = req.body;

            const user = await this.userModel.findByEmail(email);

            const ok = await verifyPassword(password, user?.password_hash ?? DUMMY_HASH);

            // Dieselbe Meldung für unbekannte E-Mail und falsches Passwort

            if (!user || !ok) {

                return res.status(401).json({ error: "E-Mail oder Passwort ist falsch." });

            }

            // Neue Session-ID, alte ungültig (Schutz gegen Session-Fixierung)

            await regenerate(req);

            req.session.userId = user.id;

            req.session.userName = user.name;

            req.session.csrfToken = crypto.randomBytes(32).toString("hex");

            await save(req);

            res.json({

                data: {

                    id: user.id,

                    name: user.name,

                    email: user.email,

                    csrfToken: req.session.csrfToken,

                },

            });

        } catch (err) {

            next(err);

        }

    };

}
```

**Erklärung:**

- **Dummy-Hash:** Ohne ihn würde der Server bei unbekannten E-Mails sofort antworten. Mit Zeitmessung könnte jemand so herausfinden, welche Konten existieren.
- **regenerate:** Die Session-ID wird vor dem Login erneuert. Hätte ein Angreifer vorher eine ID gesetzt, ist sie danach wertlos.
- **save vor der Antwort:** Die Session muss in der Datenbank stehen, bevor der Browser das Cookie bekommt. Sonst kann die nächste Anfrage die Session nicht finden.
- **CSRF-Token:** Es wird im Session-Speicher abgelegt. Der Browser bekommt es einmal in der Antwort. Der Server prüft später, ob der Header dazu passt.

---

## Schritt D: Router und Verdrahtung

**Zeigen:** Die Route verbindet URL, Middleware und Controller.

```
// src/routes/auth.js

import express from "express";

import { validateLogin } from "../middleware/validate-login.js";

export function createAuthRouter(authController) {

    const router = express.Router();

    // Kette: erst Eingabe prüfen, dann den Controller aufrufen

    router.post("/login", validateLogin, authController.login);

    return router;

}
```

```
// src/middleware/auth.js

export function requireAuth(req, res, next) {

    if (!req.session?.userId) {

        return res.status(401).json({ error: "Bitte anmelden." });

    }

    next();

}
```

In server.js:

```
// Imports

import { UserModel } from "./models/user-model.js";

import { AuthController } from "./controllers/auth-controller.js";

import { createAuthRouter } from "./routes/auth.js";

import { requireAuth } from "./middleware/auth.js";

// createApp(): userModel zusätzlich übergeben

export function createApp({ sheepModel, userModel, publish = () => {}, sessionStore }) {

    // ... static, json, session wie bisher ...

    const authController = new AuthController({ userModel });

    app.use("/auth", createAuthRouter(authController));

    // Auth-Guard steht vor dem Herd-Router

    app.use("/herd", requireAuth, createHerdRouter(herdController));

    // ... Fehler-Handler bleibt zuletzt ...

}

// startServer(): Model anlegen und übergeben

const userModel = new UserModel(database);

const app = createApp({ sheepModel, userModel, publish, sessionStore });
```

**Erklärung:** `app.use("/herd", requireAuth, createHerdRouter(...))` ist eine Kette. Express führt die Funktionen der Reihe nach aus. Scheitert requireAuth, erreicht die Anfrage den Herd-Router nie.

---

## Schritt E: Controller der Herde an die Session anpassen

**Zeigen:** Die Benutzer-ID kommt nur noch aus der Session.

```
// src/controllers/herd.controller.js

// ENTFERNEN: DEMO_USER_ID und die alte getUserId-Funktion mit ?user= und X-User-Id

// NEU:

function getUserId(req) {

    return req.session.userId;

}
```

In list die Liste auf den Benutzer begrenzen:

```
list = async (req, res, next) => {

    try {

        const userId = getUserId(req);

        const rows = await this.sheepModel.list(userId);

        res.render("sheep/index", {

            sheep: rows.map((row) =>

                toView({ ...row, owner_name: req.session.userName })

            ),

            currentUser: userId,

        });

    } catch (err) {

        next(err);

    }

};
```

**Erklärung:** `listAll()` zeigte alle Herden. list(userId) zeigt nur die eigene. Die Mandantentrennung entsteht durch die Session, nicht durch einen Parameter aus der URL.

---

## Prüfung mit curl

Demo-Zugangsdaten stammen aus den Umgebungsvariablen aus Schritt 1, Migration 2. Hier stehen Platzhalter.

```
# Server starten

SESSION_SECRET=geheim DEMO_USER_EMAIL=mara@example.org DEMO_USER_PASSWORD=... node app.js
```

Die Tests in dieser Reihenfolge:

```
# 1. Ohne Login: 401

curl -i http://localhost:3000/herd

# 2. Falsches Passwort: 401

curl -i -H "Content-Type: application/json" \

  -d '{"email":"mara@example.org","password":"falsch"}' \

  http://localhost:3000/auth/login

# 3. Leere Eingabe: 422

curl -i -H "Content-Type: application/json" \

  -d '{"email":""}' http://localhost:3000/auth/login

# 4. Richtiger Login: 200, Cookie wird gespeichert

curl -i -c jar.txt -H "Content-Type: application/json" \

  -d '{"email":"mara@example.org","password":"..."}' \

  http://localhost:3000/auth/login

# 5. Mit Cookie: Herde ist sichtbar

curl -b jar.txt http://localhost:3000/herd

# 6. ?user=2 hat keine Wirkung mehr

curl -b jar.txt "http://localhost:3000/herd?user=2"
```

**Erwartung:** Test 1 und 2 liefern 401, Test 3 liefert 422, Test 4 liefert 200 mit Set-Cookie, Test 5 zeigt die Herde von Mara, und Test 6 zeigt dieselbe Herde wie Test 5.

---

## Was am Ende neu dazu gekommen ist

- Middleware prüft und reicht weiter. Der Controller entscheidet über die Fachlogik.
- Die Reihenfolge der Middleware bestimmt, was passiert.
- Die Benutzer-ID stammt aus der Session, nicht aus der Anfrage.
- Ein Login erneuert die Session-ID.
