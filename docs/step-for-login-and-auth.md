# Login-Controller und auth-Router

Stand: 28.10.2026. **Herden sind global sichtbar, aber nur nach Anmeldung.**
Alle Angemeldeten sehen Schafe, Aktivitaeten, Chat und Praesenz. Nur der
Besitzer darf eigene Schafe aendern oder loeschen. Die fruehere Idee privater
Herden ist veraltet. Die Codebloecke unten zeigen Ausschnitte; verbindlich
sind die verlinkten vollstaendigen Quelldateien.

## Implementierte Bausteine

- [x] [Datenbankinitialisierung](../src/db/index.js) ergaenzt alte Tabellen datenbewahrend um `email` und `password_hash`,
- [ ] normalisiert E-Mails
- [ ] und legt einen eindeutigen Index an. 
- [x] Der Ablauf ist wiederholbar; vorhandene IDs und
  Schafe bleiben erhalten. 
- [ ] Noch nicht eingerichtete Konten haben NULL in den
  Login-Spalten und koennen sich nicht anmelden.
- [Passwort-Service](../src/services/passwordService.js): asynchrones Scrypt
  mit zufaelligem Salt, konstantes Kostenprofil und sicherer Hashvergleich.
- [UserModel](../src/models/user-model.js),
  [AuthController](../src/controllers/auth-controller.js),
  [Auth-Router](../src/routes/auth.js) und
  [Auth-Middleware](../src/middleware/auth.js): Login, `/auth/me`, CSRF und Logout.
- [Socket-Authentifizierung](../src/middleware/socket-auth.js) nutzt dieselbe
  Session-Middleware und denselben SQLite-Store wie HTTP. Anonyme Verbindungen
  und fremde Origins werden abgewiesen. Vor Socket-Ein-/Ausgaben wird die
  Session geprueft; Logout, erneuter Login und Ablauf trennen offene Sockets.
- [HerdController](../src/controllers/herd.controller.js) verwendet nur die
  Session-Identitaet. Liste und Einzelabruf sind global, Schreiboperationen
  bleiben im SQL besitzergebunden. Nicht erlaubte Schreibzugriffe liefern 404.
- [Browser-Client](../src/views/sheep/index.twig) holt den Token ueber `/auth/me`,
  sendet `X-CSRF-Token` bei Mutationen und verbindet Socket.IO ohne Demo-ID.
  Ein Logout-Button ist vorhanden; eine neue Login-Oberflaeche gehoert nicht
  zu diesem Schritt. Fuer eine Browser-Anmeldung den JSON-Login im selben
  Browser ausfuehren; ein curl-Cookie wird nicht automatisch uebernommen.

## Ziel

Die Anmeldung besteht aus drei Teilen, die nacheinander laufen. Jeder Teil hat eine Aufgabe:

1. **Middleware validateLogin:** prüft nur die Form der Eingabe. Sie kennt keine Benutzer.
2. **Controller login:** prüft das Passwort und legt bei Erfolg die Session an.
3. **Middleware requireAuth:** lässt nur angemeldete Anfragen zu /herd.

Origin- und CSRF-Pruefung sichern zusaetzlich die schreibenden Browser-Anfragen.
Socket.IO besitzt eine eigene Session-Pruefung; der HTTP-Guard allein reicht nicht.

Der Ablauf eines Login-Requests:

POST /auth/login -> express.json() Body lesen -> session() Session laden (noch leer) -> validateLogin Form prüfen (Middleware) -> AuthController.login Passwort prüfen, Session setzen (Controller) -> Antwort mit Cookie

**Voraussetzungen:** `SESSION_SECRET` setzen und Demo-Zugaenge wie unten
einrichten. Schema-Erweiterung, Passwort-Service und Session-Integration sind
implementiert. Ein geaendertes `CREATE TABLE IF NOT EXISTS` allein wuerde eine
bestehende Datenbank nicht migrieren; deshalb gibt es den separaten
transaktionalen Migrationsschritt beim Oeffnen.

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

**Erklärung:** Der Hash bleibt serverintern. Das Model gibt ihn an den
Login-Controller weiter, aber niemals an den Browser. `findById()` liefert
fuer `/auth/me` ausschliesslich oeffentliche Benutzerdaten ohne Hash.

---

## Schritt B: Middleware für die Eingabe

**Zeigen:** Die erste Middleware in der Kette. Sie entscheidet, ob die Anfrage weitergereicht wird.

```
// src/middleware/auth.js (Ausschnitt)

export function validateLogin(req, res, next) {

    const { email, password } = req.body ?? {};

    const invalid =

        typeof email !== "string" ||

        typeof password !== "string" ||

        email.trim() === "" ||

        password === "" ||

        email.trim().length > 254 ||

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

// Vergleichshash fuer unbekannte E-Mails mit demselben Kostenprofil

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

- **Dummy-Hash:** Reduziert auffaellige Laufzeitunterschiede zwischen unbekannten
  Konten und falschen Passwoertern. Identische Antwortzeiten garantiert er nicht.
- **regenerate:** Die Session-ID wird vor dem Login erneuert. Hätte ein Angreifer vorher eine ID gesetzt, ist sie danach wertlos.
- **save vor der Antwort:** Die Session muss in der Datenbank stehen, bevor der Browser das Cookie bekommt. Sonst kann die nächste Anfrage die Session nicht finden.
- **CSRF-Token:** Liegt in der Session und kommt bei Login sowie `/auth/me`
  zum Browser. Schreibende Herd-Anfragen und Logout muessen ihn als
  `X-CSRF-Token` senden, sonst 403. Der Token schuetzt nicht den Login selbst:
  Dieser akzeptiert JSON und prueft vorhandene Origin-/Fetch-Metadata-Header.
  Nicht-Browser-Clients wie curl duerfen ohne Origin arbeiten.

---

## Schritt D: Router und Verdrahtung

**Zeigen:** Die Route verbindet URL, Middleware und Controller.

```
// src/routes/auth.js

import express from "express";

import { validateLogin, requireAuth, requireCsrf } from "../middleware/auth.js";

export function createAuthRouter(authController, originCheck) {

    const router = express.Router();

    // Kette: erst Eingabe prüfen, dann den Controller aufrufen

    router.post("/login", originCheck, validateLogin, authController.login);
    router.get("/me", requireAuth, authController.me);
    router.post("/logout", requireAuth, originCheck, requireCsrf, authController.logout);

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

import { requireAuth, requireCsrf, createOriginCheck } from "./middleware/auth.js";

// createApp(): userModel zusätzlich übergeben

export function createApp({ sheepModel, userModel, publish = () => {}, sessionStore }) {

    // ... static, json, session wie bisher ...

    const authController = new AuthController({ userModel });

    const originCheck = createOriginCheck("http://localhost:3000");
    app.use("/auth", createAuthRouter(authController, originCheck));

    // Auth-Guard steht vor dem Herd-Router

    app.use("/herd", requireAuth, originCheck, requireCsrf, createHerdRouter(herdController));

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

In `list` bleibt die Liste global. Nur die Identitaet fuer Bearbeitungsrechte
kommt aus der Session:

```
list = async (req, res, next) => {

    try {

        const userId = getUserId(req);

        const rows = await this.sheepModel.listAll();

        res.render("sheep/index", {

            sheep: rows.map(toView),

            currentUser: userId,

        });

    } catch (err) {

        next(err);

    }

};
```

**Erklärung:** `listAll()` zeigt gewollt alle Herden. `getPublic(id)` liefert
ein einzelnes Schaf fuer jeden Angemeldeten. `update(userId, id, ...)` und
`delete(userId, id)` pruefen weiterhin `user_id` im SQL. Sichtbare Daten sind
nicht automatisch veraenderbare Daten. URL, Header, Body und Socket-Handshake
duerfen keine Benutzeridentitaet festlegen.

---

## Einrichtung und Pruefung

Vorhandene Zugangsdaten werden nicht ueberschrieben. Demo-Zugaenge werden
optional aus `DEMO_USER_EMAIL` / `DEMO_USER_PASSWORD` fuer ID 1 und
`DEMO_SECOND_USER_EMAIL` / `DEMO_SECOND_USER_PASSWORD` fuer ID 2 eingerichtet.
Jeweils beide Werte setzen oder beide weglassen. Die Passwoerter landen nur
als Scrypt-Hash in der Datenbank. Dieselben Werte beim erneuten Start sind
erlaubt; andere Werte fuer ein eingerichtetes Konto brechen den Start ab.
Bestehende Namen und Schafe werden nicht geaendert. Der Login verwendet die
E-Mail, keinen zusaetzlichen `username`.

Fuer den ersten lokalen Start im Terminal (Werte in derselben Shell behalten):

```bash
export SESSION_SECRET="$(node -e 'process.stdout.write(require("node:crypto").randomBytes(32).toString("hex"))')"
export DEMO_USER_EMAIL='demo@example.test'
export DEMO_USER_PASSWORD="$(node -e 'process.stdout.write(require("node:crypto").randomBytes(24).toString("hex"))')"
export DEMO_SECOND_USER_EMAIL='jonas@example.test'
export DEMO_SECOND_USER_PASSWORD="$(node -e 'process.stdout.write(require("node:crypto").randomBytes(24).toString("hex"))')"
node app.js
```

In derselben Shell nach Stoppen des Servers mit `node app.js` erneut starten;
Passwoerter nicht bei jedem Start neu generieren. In einer zweiten Shell die
identischen lokalen Demo-Umgebungswerte verwenden. Alternativ lokal und nicht
versioniert konfigurieren und mit `npm run env` laden. Keine Secrets ausgeben
oder einchecken. Ohne gesetzte Demo-Werte bleiben eingerichtete Konten nutzbar.

Der Standard-Origin ist `http://localhost:3000`. Bei anderer Browser-Adresse
`APP_ORIGIN` exakt passend setzen, z.B. nicht `localhost` und `127.0.0.1`
vermischen. `NODE_ENV=production` erfordert HTTPS fuer das Secure-Cookie;
Proxy-Vertrauen muss zur echten Infrastruktur passen.

Die folgenden Befehle benoetigen die Demo-Umgebungswerte in ihrer Shell.
`curl --json` setzt einen aktuellen curl-Client voraus. Login-Antwort und
Cookie bleiben in einem temporaeren Ordner, nicht in der vorhandenen `jar.txt`.

```bash
base='http://localhost:3000'
tmpdir="$(mktemp -d)"
trap 'rm -rf "$tmpdir"' EXIT

# 401 ohne Anmeldung, 422 fuer fehlende Eingaben, 401 fuer falsches Passwort
curl -s -o /dev/null -w '%{http_code}\n' "$base/herd"
curl -s -o /dev/null -w '%{http_code}\n' --json '{"email":""}' "$base/auth/login"
curl -s -o /dev/null -w '%{http_code}\n' \
    --json '{"email":"demo@example.test","password":"falsch"}' "$base/auth/login"

# 200 und Cookie; Antwort mit Token nicht ins Terminal schreiben
curl -s -o "$tmpdir/login.json" -w '%{http_code}\n' -c "$tmpdir/cookies" \
    --json "$(node -e 'process.stdout.write(JSON.stringify({email: process.env.DEMO_USER_EMAIL, password: process.env.DEMO_USER_PASSWORD}))')" \
    "$base/auth/login"
csrf_token="$(node -e 'process.stdout.write(JSON.parse(require("node:fs").readFileSync(process.argv[1], "utf8")).data.csrfToken)' "$tmpdir/login.json")"

# Globale Herde bleibt bei fremder Query-/Header-ID dieselbe (jeweils 200)
curl -s -o /dev/null -w '%{http_code}\n' -b "$tmpdir/cookies" "$base/herd"
curl -s -o /dev/null -w '%{http_code}\n' -b "$tmpdir/cookies" \
    -H 'X-User-Id: 2' "$base/herd?user=2"

# Fehlender CSRF-Token: 403, Logout mit Token: 204, danach Herde: 401
curl -s -o /dev/null -w '%{http_code}\n' -b "$tmpdir/cookies" --json '{}' "$base/auth/logout"
curl -s -o /dev/null -w '%{http_code}\n' -b "$tmpdir/cookies" \
    -H "X-CSRF-Token: $csrf_token" --json '{}' "$base/auth/logout"
curl -s -o /dev/null -w '%{http_code}\n' -b "$tmpdir/cookies" "$base/herd"
rm -rf "$tmpdir"
trap - EXIT
unset csrf_token
```

## Automatisierte Abnahme und Grenzen

`npm test` fuehrt [elf Tests](../tests/auth.test.js) mit temporaeren
SQLite-Datenbanken und Testbenutzern aus; Arbeitsdatenbank, `.env` und Cookies
werden nicht benoetigt. Abgedeckt sind Hashes, Migration/Seeding, Login-Fehler,
400/413 bei Parserfehlern, Session-Regeneration, sofortiger Folgezugriff,
globale Sichtbarkeit, Schreibrechte, CSRF, Logout, DB-/Store-Fehler sowie echte
WebSocket-/Polling-Verbindungen mit gefaelschten IDs, Origin-Pruefung und Ablauf.

Kein Produktions-Sicherheitsaudit: Login-Versuchsbegrenzung und die echte
HTTPS-/Proxy-Konfiguration muessen vor oeffentlichem Betrieb ergaenzt bzw.
geprueft werden. SameSite ist zusaetzliche Abwehr, nicht der gesamte CSRF-Schutz.

---

## Was am Ende neu dazu gekommen ist

- Middleware prüft und reicht weiter. Der Controller entscheidet über die Fachlogik.
- Die Reihenfolge der Middleware bestimmt, was passiert.
- Die Benutzer-ID stammt aus der Session, nicht aus der Anfrage.
- Ein Login erneuert die Session-ID.
