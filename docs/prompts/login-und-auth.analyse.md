# Analyse der Login-Anleitung

Stand: 28.10.2026. Grundlage: [Original](../step-for-login-and-auth.md)
und der vorhandene Projektcode. Die Befunde beschreiben den Ausgangsstand;
der unten beschriebene freigegebene Umfang ist inzwischen implementiert.

## Staerken

- Die Trennung von Eingabevalidierung, Passwortpruefung und Zugriffsschutz
  ist didaktisch klar. Router und Dependency Injection passen zum Projekt.
- Gebundene SQL-Parameter, generische Login-Fehler, Session-Regeneration und
  explizites Speichern sind sinnvolle Sicherheitsbausteine.
- Die Identitaet soll aus der Session statt aus Client-Parametern stammen.
- Die curl-Reihenfolge macht den grundlegenden Cookie-Roundtrip sichtbar.

## Der Elefant im Raum

**Die Anwendung ist bereits eine Echtzeit-Mehrbenutzeranwendung. Ein
HTTP-Login allein authentifiziert ihre Echtzeit-Verbindungen nicht.**

Im Ausgangsstand von [server.js](../../src/server.js) vertraute Socket.IO auf
`handshake.auth.userId`, faellt auf einen Demo-Benutzer zurueck und verteilt
Schafaktivitaeten samt Daten sowie Historien global. Ein Guard vor `/herd`
veraendert diesen Pfad nicht. Die Umsetzung verwendet deshalb dieselben
Sessions fuer HTTP und Socket.IO und entzieht offenen Verbindungen bei
Logout, erneuter Anmeldung und Ablauf den Zugriff.

**Fachentscheidung des Nutzers:** Herden sind global, private Herden sind
veraltet. Angemeldete sehen alle Schafe und gemeinsamen Ereignisse; nur eigene
Schafe duerfen veraendert werden. Globale Broadcasts sind damit gewollt,
anonyme oder gefaelschte Identitaeten dagegen nicht. Sicherer Kurzweg fuer eine Unterrichtsstufe:
Live-Funktionen nach Zustimmung voruebergehend abschalten statt eine halbe
Authentifizierungsgrenze zu bauen.

## Luecken im Ausgangsstand

| Prioritaet | Befund                                                                                                                                                      | Verbesserung                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Hoch       | Die behaupteten Voraussetzungen sind hier noch nicht vorhanden: `users` hat keine Login-Spalten, der Passwort-Service fehlt.                                | Als Voraussetzungen pruefen und fehlende Vorbereitung separat freigeben lassen.                                                    |
| Hoch       | [schema.sql](../../src/db/schema.sql) wird beim Oeffnen ausgefuehrt, es gibt in [db/index.js](../../src/db/index.js) keinen versionierten Migrationsablauf. | Fuer bestehende DBs eine datenbewahrende Migration vorsehen; nur das CREATE-Statement zu aendern reicht nicht.                     |
| Hoch       | [HerdController](../../src/controllers/herd.controller.js) akzeptierte Query/Header/Demo-ID.                                                                | Identitaet nur aus Session; `listAll()` fuer die gewollte globale Herde beibehalten. Schreibrechte testen.                         |
| Hoch       | CSRF-Token wird erzeugt, aber nirgends geprueft. Abruf nach Neuladen und Logout fehlen.                                                                     | Token-Ausgabe, Pruefung und Lebenszyklus gemeinsam umsetzen oder gemeinsam als Folgeschritt ausweisen.                             |
| Hoch       | HTTP-Guard erfasst weder Socket-Handshake noch globale Broadcasts.                                                                                          | Gemeinsame Session-Integration, Berechtigungspruefung und passende Ereignisverteilung; alternativ Live-Kanal vorerst deaktivieren. |
| Mittel     | Der globale Fehler-Handler antwortet immer mit 500.                                                                                                         | Fehlerhaftes JSON und Body-Limit muessen als 400 bzw. 413 erhalten bleiben.                                                        |
| Mittel     | Kein Test gegen einen zweiten Benutzer, fremde Objekt-IDs, Session-Fixierung oder Store-Fehler.                                                             | Kleine automatisierte Integrationssuite mit isolierter SQLite-DB statt nur Happy-Path-curl.                                        |
| Mittel     | E-Mail-Normalisierung und Eindeutigkeit bei der Kontoanlage sind undefiniert.                                                                               | Einheitliche Regel fuer Speicherung und Login, Eindeutigkeit in der DB; bestehende Kollisionen explizit behandeln.                 |

Bereits positiv vorhanden: [SheepModel](../../src/models/sheep-model.js)
bindet einzelne Lese- und Schreiboperationen an `user_id`. Diese SQL-Pruefungen
beibehalten. Das Problem ist nicht ein kompletter Mangel an Besitzerpruefungen,
sondern die frei waehlbare Identitaet und die anonym offenen Kanaele.

## Aussagen praezisieren

- **"Der Hash verlaesst das Model nicht" ist falsch.** `findByEmail()` gibt
  ihn an den Controller weiter. Gemeint ist: Er bleibt serverintern und
  erscheint weder in Antworten noch Logs. Ein oeffentlicher Model-Zugriff
  ohne Hash wird angekuendigt, aber nicht gezeigt; nur bei echtem Bedarf bauen.
- **"Die Antwortzeit bleibt gleich" ist zu stark.** Ein Dummy-Hash reduziert
  offensichtliche Unterschiede bei der Passwortarbeit, garantiert aber weder
  identische Laufzeiten noch vollstaendigen Schutz vor Konto-Erkennung.
- **"Session anlegen" ist verkuerzt.** Eine anonyme Session kann bereits
  existieren. Beim Login wird sie erneuert und authentifiziert. Mit
  `saveUninitialized: false` entsteht nicht fuer jeden anonymen Request ein
  gespeicherter Datensatz; das Cookie traegt die ID, nicht die Benutzerdaten.
- **"Mandantentrennung entsteht durch die Session" ist unvollstaendig.**
  Die Session belegt die Identitaet; SQL-Filter und Ereignisverteilung setzen
  deren Berechtigungen durch. Anmeldung ist nicht gleich Autorisierung.
- **CSRF nach dem Login schuetzt nicht den Login.** Fuer den vorgesehenen
  Same-Origin-JSON-Login sind Content-Type-/Origin-Regeln explizit zu machen;
  SameSite allein ist keine allgemeine Sicherheitsgarantie.
- **Grenzen der Demo benennen.** Vor oeffentlichem Betrieb sind unter anderem
  Login-Versuchsbegrenzung und ein korrektes HTTPS-/Proxy-Setup erforderlich.
  Die vorhandenen Cookie-Flags sind ein guter Ausgangspunkt, kein Audit-Siegel.

## Verbesserungen und Abkuerzungen

1. Voraussetzungen als kurze Checkliste voranstellen; keine weiteren
   Codebausteine auf nicht vorhandene Module stapeln. Vorbereitende Migration
   und Passwort-Service nicht unbemerkt in diesen Lernschritt hineinziehen.
2. Den Ablauf auf eine funktionierende vertikale Strecke reduzieren:
   validieren, Passwort pruefen, Session erneuern/speichern, globale Herde lesen.
   Danach Schreibrechte und Echtzeit gezielt pruefen. Zwischenstaende nicht
   als vollstaendig abgesicherte Anwendung bezeichnen.
3. Vorhandene `listAll()`- und besitzergebundene Schreibmethoden wiederverwenden. Keine neue
   ORM-, Service- oder Auth-Plattform einfuehren; Express 5 kann abgewiesene
   Promises aus async-Handlern weiterreichen. `try/catch(next)` ist deshalb
   nicht zwingend, aber einheitlicher vorhandener Stil bleibt legitim.
4. CSRF entweder mit Pruefung und Wiederabruf vollenden oder Token-Code
   bewusst auf einen Folgeschritt verschieben. `/auth/me` und Logout als
   sinnvolle, aber ueber die Vorlage hinausgehende Ergaenzungen kennzeichnen.
5. curl-Codebloecke mit `bash`, JS-Beispiele mit `js` auszeichnen. Die
   Leerzeilen nach `\` in den curl-Beispielen entfernen: Sie unterbrechen
   die Fortsetzung. Temporaere Cookie-Dateien und lokale Testkonten verwenden.
6. Zwei-Benutzer-Negativtests sind aussagekraeftiger als nur `?user=2`
   auf derselben Liste. Auch Header, Body, fremde IDs und Socket-Daten pruefen.

## Umgesetzter Umfang

- [x] Datenbewahrende Login-Migration und eindeutige normalisierte E-Mails;
- [x] Username und Passwort in die Tabelle eingefügt
  bestehende Benutzer und Schafe bleiben erhalten. Nicht eingerichtete
  Altkonten haben weiterhin NULL in den neuen Login-Spalten.
- Scrypt mit zufaelligem Salt, wiederholbares Demo-Seeding aus Umgebungswerten
  ohne stilles Ueberschreiben vorhandener Zugangsdaten.
- Login mit neuer Session-ID, `/auth/me`, CSRF-Pruefung und Logout.
- Globale Liste und globale Einzelabrufe nach Anmeldung, Besitzerbindung fuer
  Aendern und Loeschen. IDs aus Query, Header, Body und Socket-Handshake gelten
  nicht als Identitaetsnachweis.
- Gemeinsame Session-Middleware fuer HTTP und Socket.IO, Origin-Pruefung,
  Session-Pruefung vor Socket-Ein-/Ausgaben und Trennung bei Widerruf/Ablauf.
- Browser-Client holt den Token nach Neuladen und besitzt keinen Demo-Umschalter
  mehr. Keine neue Login-Oberflaeche; Anmeldung per JSON/curl oder Browser-fetch.
- Elf automatisierte Tests mit isolierten Datenbanken decken Passwortservice,
  Migration, HTTP, CSRF, Besitzerrechte und Socket.IO (WebSocket/Polling) ab.

Vor oeffentlichem Betrieb fehlen insbesondere Login-Versuchsbegrenzung und
eine Pruefung der echten HTTPS-/Proxy-Konfiguration. Die lokale Demo ist
kein vollstaendiges Produktions-Sicherheitsaudit.

Die bereits vorhandene statische Startseite verweist weiterhin auf den
nicht vorhandenen Skriptpfad `assets/js/script.js`; nach Logout ist dort ein
404 in der Browser-Konsole moeglich. Das ist unabhaengig vom Herd-/Auth-Client
und wurde nicht als Nebenaufgabe repariert.

## Prompt verwenden

Der [fertige Prompt](./login-und-auth.prompt.md) liegt wie gewuenscht unter
`docs/prompts/`. Dieser Ort gehoert nicht zu den standardmaessig automatisch
gefundenen Workspace-Prompt-Verzeichnissen. Fuer den Slash-Befehl
`/login-und-auth` den Ordner in der VS-Code-Einstellung
`chat.promptFilesLocations` aktivieren, beispielsweise mit dem zusaetzlichen
Eintrag `"docs/prompts": true`; vorhandene Eintraege beibehalten.
Alternativ ist `.github/prompts/` der Standardort. Es wurde keine
Editor-Konfiguration veraendert.

Der Prompt enthaelt die getroffenen Freigaben und die globale Sichtbarkeit.
Er ist kein Auftrag fuer Registrierung, Passwort-Reset oder eine neue Oberflaeche.
