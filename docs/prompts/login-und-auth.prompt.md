---
name: login-und-auth
description: "Session-Login im Workshop implementieren: Voraussetzungen pruefen, Besitzerrechte durchsetzen und HTTP sowie Socket.IO beruecksichtigen."
agent: agent
---

# Auftrag

Implementiere den naechsten nachvollziehbaren Lernschritt fuer einen
Session-basierten Login in diesem lokalen Node.js-/Express-5-/SQLite-Projekt.
Arbeite auf Deutsch. Grundlage ist die
[Login-Anleitung](../step-for-login-and-auth.md), aber uebernimm ihre Beispiele
nicht blind: Der tatsaechliche Code entscheidet ueber vorhandene Schnittstellen.
Die [Analyse](./login-und-auth.analyse.md) benennt bekannte Luecken und Grenzen.

## Zuerst Voraussetzungen und Fachentscheidung klaeren

1. Lies gezielt Schema und Datenbankinitialisierung, Session-Middleware und
   Session-Store, Herd-Controller/-Model/-Router sowie die Socket.IO-Verdrahtung
   und deren Browser-Client. Pruefe vorhandene Tests und Projektanweisungen.
2. Pruefe die behaupteten Voraussetzungen: `users.email`, `password_hash`,
   `hashPassword()` und `verifyPassword()`. Fehlt etwas, melde die konkreten
   Blocker und schlage den kleinsten vorbereitenden Schritt vor. Frage vor
   einer Erweiterung um Migrationen, Passwort-Service oder Demo-Seeding nach.
   Erfinde keine bereits erledigten Schritte 1 bis 4.
3. Fachentscheidung: Alle angemeldeten Benutzer sehen die globale Herde,
   Schafaktivitaeten, Chat und Praesenz. Nur eigene Schafe duerfen angelegt,
   geaendert oder geloescht werden. Die fruehere Idee privater Herden ist
   veraltet. Globale Lesbarkeit bedeutet keinen anonymen Zugriff.
4. Nenne vor der ersten Aenderung eine konkrete lokale Annahme und den
   kleinsten Test, der sie widerlegen kann. Implementiere danach in kleinen
   Schritten und validiere jeden Schritt unmittelbar.

## Umsetzungsgrenzen

- Behalte ESM, Express, SQLite und `express-session`. Nutze vorhandene
  Abstraktionen und Dateinamenskonventionen, keine JWTs, keinen zweiten
  Session-Store und keine neue Auth-Plattform. Keine Registrierung,
  Passwort-Resets oder Rollenverwaltung in diesem Lernschritt.
- Veraendere keine bestehende Datenbank destruktiv. Falls separat freigegeben:
  bestehende Daten erhalten, Migrationen wiederholbar ausfuehren, E-Mails nach
  derselben Regel normalisieren und deren Eindeutigkeit sicherstellen.
  Konflikte bestehender Daten nicht stillschweigend aufloesen. Ein geaendertes
  `CREATE TABLE IF NOT EXISTS` migriert keine existierende Tabelle.
- Verwende keine echten Zugangsdaten, keine fest eingebauten Secrets und keine
  Ausgaben von Passwoertern, Hashes, Cookies oder Session-/CSRF-Tokens in Logs.
  Vorhandene Cookie-Dateien, `.env` und die Arbeitsdatenbank nicht fuer Tests
  verwenden oder veraendern. Freigegeben sind die datenbewahrende Login-Migration
  und notwendige Demo-Zugangsdaten; als Login dient weiterhin die E-Mail,
  Passwoerter werden ausschliesslich gehasht gespeichert. Bestehende
  Zugangsdaten nicht stillschweigend ueberschreiben. Das lokale Node-Projekt benoetigt keine
  Kompatibilitaet mit alten PHP-Hosting-Versionen.
- Aendere nur die fuer diesen Schritt erforderlichen Dateien. Keine
  pauschalen Refactorings und keine Implementierung der gesamten Auth-Roadmap.
- Freigabe vom 28.10.2026: Fehlende Migration, Passwort-Service und Demo-Seeding
  sowie danach Login, CSRF, `/auth/me` und `/auth/logout` umsetzen.
  Fuer diesen Umfang ist keine erneute Freigabeschleife erforderlich.

## Verhalten nach erfuellten Voraussetzungen

### Login und Session

- `POST /auth/login` akzeptiert JSON mit `email` und `password`.
  Validiere Typen, leere Werte und Laengen; trimme/normalisiere die E-Mail
  konsistent mit der Speicherung, aber veraendere niemals das Passwort.
  Die vorgegebenen Grenzen sind 254 bzw. 200 Zeichen; pruefe die E-Mail-Laenge
  nach dem Trimmen. Ein erlaubtes Passwort muss auch beim Anlegen erlaubt sein.
- Ungueltige Felder: 422. Fehlerhaftes JSON: 400; zu grosser Body: 413.
  Erhalte das vorhandene Body-Limit von 16 KiB und verhindere, dass der globale
  Fehler-Handler Parserfehler pauschal in 500 umwandelt.
- `UserModel.findByEmail()` verwendet gebundene SQL-Parameter. Der Hash darf
  intern an die Passwortpruefung gelangen, niemals in eine HTTP-Antwort.
- Unbekannte E-Mail und falsches Passwort liefern dieselbe generische
  401-Antwort. Nutze einen einmal vorbereiteten gueltigen Dummy-Hash mit
  demselben Verfahren/Kostenprofil; verspreche dadurch keine identischen
  Antwortzeiten. Kein schneller Rueckweg nur fuer unbekannte Konten.
- Erneuere bei Erfolg die Session-ID mit `regenerate()`, setze `userId` und
  `userName`, speichere vor der Antwort explizit mit `save()`. Bei Fehlern
  darf keine erfolgreiche Anmeldung bestaetigt werden. Nutze vorhandene
  Promise-/Callback-Helfer; fuehre keine Utility-Schicht nur dafuer ein.
- Liefere 200 mit `data: { id, name, email, csrfToken }`, sofern der unten
  beschriebene CSRF-Lebenszyklus in diesem Schritt umgesetzt wird.
  Setze `Cache-Control: no-store` fuer sensible Auth-Antworten.
- Behalte `httpOnly`, `saveUninitialized: false`, `resave: false` und die
  konfigurierte Lebensdauer bei. `secure` erfordert HTTPS; `trust proxy`
  nur passend zur echten Deployment-Topologie konfigurieren.

### Besitzerrechte und Echtzeit

- Schuetze alle `/herd`-Methoden mit `requireAuth`: ohne gueltige Session 401.
  Ermittle die Benutzer-ID ausschliesslich serverseitig aus der Session.
  Entferne Demo-Fallbacks und Identitaetswechsel per Query, Header oder Body.
- Behalte die globale Liste mit `listAll()` bei; auch einzelne Schafe sind
  fuer alle Angemeldeten lesbar. Neue Schafe gehoeren dem Session-Benutzer.
  Fuer Aendern und Loeschen die Besitzerbindung im SQL beibehalten; verbotene
  Schreibzugriffe liefern 404 und veraendern keine Daten.
- Pruefe Twig und Browser-Client auf alte Demo-Umschalter, Header und
  Socket-Identitaeten. Entferne oder passe sie an; keine neue Login-Oberflaeche
  ohne eigenen Auftrag. Dokumentiere den vorgesehenen curl-Workflow.
- Ein Guard vor `/herd` schuetzt Socket.IO nicht. Verwende dort dieselbe
  Session-Middleware/-Konfiguration und denselben Store, lehne anonyme
  Verbindungen ab und ignoriere `handshake.auth.userId` als Identitaetsquelle.
  Pruefe die erlaubte Origin auch beim Socket-Handshake.
- Globale Schafereignisse, Historien, Chat und Praesenz duerfen alle
  angemeldeten Benutzer erreichen. Vor Ein- und Ausgabe die Session-Gueltigkeit
  sicherstellen; abgelaufene oder widerrufene Verbindungen trennen.
- Abkuerzung fuer einen kleinen Lernschritt: Wenn die sichere Socket-Anbindung
  noch nicht in den Umfang passt, schlage vor, den Live-Kanal inklusive
  Broadcasts voruebergehend zu deaktivieren. Nur nach Zustimmung umsetzen;
  niemals den anonym offenen Kanal als authentifiziert bezeichnen.

### CSRF und klar begrenzte Ergaenzungen

- Ein erzeugter Token allein ist kein CSRF-Schutz. In diesem Schritt sind
  schreibende Browser-Zugriffe abzusichern: zufaelligen
  Session-Token erzeugen und fuer POST/PUT/PATCH/DELETE gegen einen definierten
  Header pruefen; bei fehlendem/falschem Token 403, bevor Daten geaendert werden.
  Vergleiche Tokens sicher mit Typ-/Laengenpruefung.
- Fuer den Token nach Neuladen ist dann ein authentifizierter
  `GET /auth/me` mit oeffentlichen Benutzerdaten und Token sinnvoll.
  Ein Logout sollte die serverseitige Session zerstoeren, das Cookie mit
  passenden Optionen loeschen und zugehoerige Sockets unbrauchbar machen.
  `/auth/me` und `POST /auth/logout` sind freigegebene Ergaenzungen zur Vorlage.
- Ein nach erfolgreichem Login erzeugter Token schuetzt den Login selbst
  nicht. Fuer den Same-Origin-JSON-Login den erwarteten Content-Type und die
  erlaubte Origin pruefen; keine permissive CORS-Konfiguration einfuehren.
  `SameSite=Lax` ist zusaetzliche Abwehr, kein universeller CSRF-Nachweis.
- Behaupte keine vollstaendige Produktionsabsicherung. Vor oeffentlichem Betrieb
  benoetigt der Login ausserdem eine geeignete Begrenzung von Versuchen.

## Abnahme

Nutze vorhandene Tests, sonst `node:test` und temporaere SQLite-Datenbanken
mit zwei Testbenutzern. Kein neues Testframework allein fuer diese Aufgabe.
Teste ueber die echte Middleware-Kette und den Session-Store:

- Ohne Session: alle Herd-Endpunkte 401, anonymer Socket abgewiesen bzw.
  Live-Kanal nach vereinbarter Abkuerzung nicht erreichbar.
- Login: ungueltige Felder 422, kaputtes JSON 400, grosser Body 413;
  unbekanntes Konto und falsches Passwort beide generisch 401.
- Erfolgreicher Login setzt ein Cookie; eine vorher angelegte anonyme Session
  bekommt eine neue ID. Die alte ID erhaelt keinen authentifizierten Zugriff.
  Ein unmittelbar folgender Request findet die gespeicherte Anmeldung.
- Zwei Benutzer sehen dieselbe globale Liste, Einzelabrufe und Live-Ereignisse.
  Erstellen erfolgt fuer den Session-Benutzer, Aendern und Loeschen bleiben
  besitzergebunden. `?user=`, `X-User-Id`, Body und Socket-Handshake koennen
  keine andere Identitaet waehlen.
- Bei umgesetztem CSRF-Lebenszyklus: fehlender/falscher Token 403 ohne
  Datenmutation, korrekter Token erfolgreich, Token nach Neuladen verfuegbar,
  Logout entzieht HTTP und offenen Sockets den Zugriff.
- DB-/Session-Store-Fehler ergeben keinen Login-Erfolg und keine Secret-Leaks.

Ergaenze kurze, ausfuehrbare curl-Beispiele mit temporaeren Cookie-Jars.
Keine Leerzeile direkt nach einem Shell-Fortsetzungszeichen. Bezeichne
Platzhalter eindeutig; kein hartcodiertes `SESSION_SECRET=geheim` als Empfehlung.

Aktualisiere die betroffene Lernanleitung passend zum vereinbarten Umfang.
Falls ein aktueller Prototyp oder ein Protokoll existiert, halte deren
Architektur- und Datenmodellangaben konsistent; erfinde solche Dateien nicht.
Berichte abschliessend geaenderte Dateien, tatsaechlich ausgefuehrte Tests,
Ergebnisse und verbleibende Grenzen. Nicht ausgefuehrte Tests nicht als
bestanden darstellen.
