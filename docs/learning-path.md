# Weidebuch: Lernpfad zum Backend

Die Schritte folgen der Agenda in `frontend/agenda.md`. Das vorhandene HTML bleibt die View; die laufende Anwendung ist eine gemeinsame, kumulative Implementierung und kein Satz auseinanderlaufender Kopien.

## Start und Datenbank

Voraussetzung ist Node.js 20 oder neuer. Das Projekt verwendet ES-Module, npm, Express 5, Knex und SQLite. Socket.IO ist die einzige neue Laufzeitfähigkeit; Passwort-Hashing und Sessions verwenden Node.js `crypto` und SQLite.

```sh
cd backend
npm ci
cp .env.example .env   # optional; enthält keine Geheimnisse
npm run db:init
npm start
```

Öffne `http://127.0.0.1:3000`. Zum Entwickeln `npm run dev`, zum Prüfen `npm test`. `npm run db:init` und der Serverstart initialisieren das Schema additiv; vorhandene Zeilen werden nicht gelöscht. `DATABASE_FILE` kann für lokale oder getrennte Datenbanken gesetzt werden.

**SQL-Befund:** Im Workspace ist kein `.sql`-Skript vorhanden. Die vorhandene Datei `backend/data/sheeps.sqlite` enthält `sheeps(id, name)`; ein Skript mit den in der Agenda erwähnten Nutzer-/Schafbeziehungen kann ich daher nicht ausführen. Die Anwendung erhält die vorhandene Tabelle und ergänzt `user_id`, `breed`, `age` und `sex` sowie `users` und `sessions`. Alte Zeilen bleiben erhalten, erhalten aber absichtlich keinen geratenen Eigentümer und erscheinen deshalb in keiner Nutzerherde. Schema prüfen: `sqlite3 data/sheeps.sqlite '.schema'` aus `backend/`.

Das Frontend wird unter `/` und CSS unter `/assets/css/styles.css` vom selben Origin ausgeliefert. Formulare verwenden `/api/auth/*` und `/api/sheep`; Socket.IO nutzt denselben Server. Dadurch ist für die Browser-API kein CORS nötig. Schaf-Icons sind inline-SVGs, aus der ID abgeleitet; es gibt kein `icon_key`-Datenbankfeld. Die Phosphor-Icon-Schrift im HTML bleibt eine externe CDN-Ressource.

## Agenda-Kontexte

### 1.1 Node.js, Projekt und Module

- **Lernziel:** Node.js starten, ES-Module und eingebaute Module wiedererkennen.
- **Dateien:** `backend/package.json`, `backend/src/index.js`, `backend/src/app.js`.
- **Start/Test:** `cd backend && PORT=3001 node ./src/index.js`.
- **Sichtbares Ergebnis:** `GET http://localhost:3001` antwortet mit `Hello World`.
- **Selbstcheck:** `import`/`export` und `node:http` in `src/index.js` finden; `backend/package.json` setzt `"type": "module"`.

### 1.2 Asynchrone Datei-Ein-/Ausgabe

- **Lernziel:** `fs/promises`, `async/await` und Fehlerbehandlung an einer endenden Übung verfolgen.
- **Dateien:** `filesystem-basics.mjs`, `data.csv`, `log.txt`.
- **Start/Test:** `node filesystem-basics.mjs` aus dem Workspace-Root.
- **Sichtbares Ergebnis:** CSV-Daten werden ausgegeben und eine Zeitzeile an `log.txt` angehängt; der Prozess endet.
- **Selbstcheck:** Ein Aufruf hängt genau eine Zeile an. Die Übung ist nicht die Datenbank der Anwendung.

### 1.3 Erster HTTP-Request und Health-Check

- **Lernziel:** Request/Response, Root-URL und Health-Check nachvollziehen.
- **Dateien:** `backend/src/app.js`, `backend/src/index.js`.
- **Start/Test:** `cd backend && npm start`; in einem zweiten Terminal `curl -i http://127.0.0.1:3000/health`.
- **Sichtbares Ergebnis:** `/` liefert `frontend/weidebuch.nodejs.html`; `/health` liefert `{"status":"ok"}`.
- **Selbstcheck:** `curl -i http://127.0.0.1:3000/` zeigt den HTML-Titel. Express läuft auf einem nativen `node:http`-Server.

### 2.1 Express und Request-Verarbeitung

- **Lernziel:** Middleware-Reihenfolge, dünne Routen, Statuscodes und zentrale Fehlerantworten erkennen.
- **Dateien:** `backend/src/app.js`, `backend/src/routes/authRoute.js`, `backend/src/routes/sheepApiRoute.js`, `backend/src/middleware/errors.js`.
- **Start/Test:** `npm --prefix backend start`; `curl -i http://127.0.0.1:3000/api/sheep`.
- **Sichtbares Ergebnis:** Die geschützte API antwortet ohne Session mit HTTP 401 und JSON.
- **Selbstcheck:** In den Route-Dateien steht kein SQL; `/api/sheep` ist der Frontend-Pfad. `/api/sheeps` bleibt als kompatibler Alias geschützt.

### 2.2 Controller, Model und CRUD

- **Lernziel:** HTTP-Eingaben validieren, Controllerantworten und Model-Aufrufe auseinanderhalten.
- **Dateien:** `backend/src/controllers/sheepApiController.js`, `backend/src/models/sheepModel.js`, `backend/src/routes/sheepApiRoute.js`.
- **Start/Test:** `npm --prefix backend test`.
- **Sichtbares Ergebnis:** Listen-, Detail-, Create-, Patch-, Duplicate- und Delete-Abläufe sowie 400/404/401/403 werden geprüft.
- **Selbstcheck:** Ein Create-Request braucht `name`, `breed`, `age`, `sex`; unbekannte Rassen und Alter außerhalb 0–25 werden serverseitig abgelehnt.

### 2.3 SQLite und persistente Daten

- **Lernziel:** Schema-Initialisierung, gebundene SQL-Parameter, Constraints/Beziehungen und Persistenz nachvollziehen.
- **Dateien:** `backend/src/models/db.js`, `backend/src/models/sheepModel.js`, `backend/src/initDb.js`, `backend/data/sheeps.sqlite`.
- **Start/Test:** `cd backend && npm run db:init`, danach `sqlite3 data/sheeps.sqlite '.schema'` und `npm test`.
- **Sichtbares Ergebnis:** Das vorhandene Schema bleibt erhalten und wird um benötigte Felder und Tabellen ergänzt; die Tests prüfen auch eine Neustart-Persistenz.
- **Selbstcheck:** `sheepModel.js` begrenzt jede Abfrage auf `user_id`; Knex bindet Werte. Ein SQL-Skript ist im aktuellen Workspace nicht vorhanden, daher ist `npm run db:init` der tatsächlich ausführbare Einrichtungsschritt.

### 3.1 Passwörter und Sessions

- **Lernziel:** Gesalzene Passwort-Hashes, Session-ID im HttpOnly-Cookie und serverseitige Sessiondaten verstehen.
- **Dateien:** `backend/src/models/authModel.js`, `backend/src/controllers/authController.js`, `backend/src/middleware/session.js`, `backend/src/middleware/auth.js`, `backend/src/routes/authRoute.js`.
- **Start/Test:** `npm --prefix backend test`; anschließend im UI ein Lernkonto mit mindestens 12 Zeichen Passwort erstellen und ab-/anmelden.
- **Sichtbares Ergebnis:** Das Cookie enthält nur die zufällige Session-ID; Login und Logout aktualisieren die geschützte Herde.
- **Selbstcheck:** Cookie-Flags sind `HttpOnly` und `SameSite=Lax`; bei `NODE_ENV=production` kommt `Secure` hinzu. Logout verlangt CSRF-Token und löscht die serverseitige Session.

### 3.2 Authentifizierte Live-Updates

- **Lernziel:** Socket.IO-Verbindung an dieselbe Session binden und Events in einem serverseitigen Nutzerraum senden.
- **Dateien:** `backend/src/app.js`, `backend/src/controllers/sheepApiController.js`, `frontend/weidebuch.nodejs.html`.
- **Start/Test:** `npm --prefix backend test`; für den manuellen Check zwei Browserprofile mit getrennten Lernkonten öffnen.
- **Sichtbares Ergebnis:** Create/Update/Delete aktualisieren verbundene Clients desselben Nutzers; fremde Nutzer erhalten kein Ereignis.
- **Selbstcheck:** Der Browser kann weder eine Nutzer-ID noch einen Raum übergeben; der Server leitet den Raum aus der Session ab. Events werden erst nach erfolgreicher Model-Operation gesendet.

### 3.3 Sicherheit, Tests und Betrieb

- **Lernziel:** CSRF, SQL-Injection, XSS-Ausgabe, Zugriffskontrolle, isolierte Tests und Betriebskonfiguration prüfen.
- **Dateien:** `backend/src/middleware/auth.js`, `backend/src/middleware/errors.js`, `backend/tests/testsuite.js`, `backend/src/models/sheepModel.test.js`, `backend/.env.example`.
- **Start/Test:** `npm --prefix backend test`; produktionsnah `NODE_ENV=production` nur hinter HTTPS/TLS setzen.
- **Sichtbares Ergebnis:** Die automatisierten Tests verwenden temporäre SQLite-Dateien und prüfen zwei Nutzer samt Socket-Räumen, ohne die Workspace-Datenbank anzufassen.
- **Selbstcheck:** Mutation ohne CSRF-Token liefert 403; fremde IDs liefern 404; HTML-Ausgaben escapen dynamische Texte. Für öffentliche Produktion fehlen noch Rate-Limits und eine Einschränkung der offenen Selbstregistrierung.

## HTTP-Vertrag der View

| Aktion                     | Request                                            | Antwort                                                |
| -------------------------- | -------------------------------------------------- | ------------------------------------------------------ |
| Aktuelle Session           | `GET /api/auth/me`                                 | `{ user, csrfToken }` oder 401                         |
| Anmelden / Konto erstellen | `POST /api/auth/login`, `POST /api/auth/register`  | `{ user, csrfToken }` und Session-Cookie               |
| Abmelden                   | `POST /api/auth/logout`                            | 204, CSRF-geschützt                                    |
| Liste / Einzelansicht      | `GET /api/sheep`, `GET /api/sheep/:id`             | Array / Objekt mit `id`, `name`, `breed`, `age`, `sex` |
| Anlegen / Duplizieren      | `POST /api/sheep`, `POST /api/sheep/:id/duplicate` | 201 und gespeichertes Objekt                           |
| Bearbeiten / Löschen       | `PATCH /api/sheep/:id`, `DELETE /api/sheep/:id`    | Objekt / 204                                           |

Alle Schaf-Mutationen verlangen `X-CSRF-Token`; geschützte Endpunkte filtern nach dem angemeldeten Nutzer. Fehlerantworten haben die Form `{ "error": "…" }`.
