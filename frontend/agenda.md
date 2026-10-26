# Node.js für die serverseitige Entwicklung von JavaScript-Anwendungen

**Dauer:** 3 Tage  
**Seminarnummer:** S3245

## Seminarbeschreibung

In diesem Seminar entwickeln Sie schrittweise das Backend einer kleinen Web-Anwendung. Ein durchgängiges, fachlich austauschbares Arbeitsbeispiel führt durch alle Lernabschnitte: von den ersten HTTP-Anfragen über ein MVC-orientiertes Design und persistente Daten bis zu Anmeldung und Echtzeitkommunikation.

Sie lernen, wie Node.js asynchrone Ein- und Ausgaben verarbeitet, wie Express den Aufbau einer Web-API unterstützt und wie die Zuständigkeiten zwischen View, Route, Controller und Model klar getrennt werden. Die Daten werden mit SQLite dauerhaft gespeichert. Zum Abschluss ergänzen Sie die Anwendung um passwortgeschützte Sessions und Live-Updates für mehrere angemeldete Personen.

Die Teilnehmenden erhalten das fertige Frontend als HTML/CSS sowie das SQL-Skript zum Anlegen der Datenbank. Sie entwickeln Oberfläche und Datenbankschema nicht selbst, sondern verfolgen anhand dieser Materialien, wie Browseraktionen, Express-Controller, Models und SQLite zusammenwirken. So bleibt die gemeinsame Arbeitszeit auf Backend, Datenfluss und Architektur konzentriert.

## Schulungsziel

Nach dem Seminar können Sie eine überschaubare Node.js-Web-Anwendung strukturiert aufbauen und zentrale Backend-Funktionen selbst umsetzen. Sie verstehen den Weg einer Anfrage durch die Anwendung und können View, Routing, Controller und Model nachvollziehbar voneinander abgrenzen.

Sie können insbesondere:

- einen Node.js-Server einrichten und zentrale Module sinnvoll strukturieren,
- asynchrone Abläufe mit Promises und `async/await` umsetzen und Fehler behandeln,
- mit Express eine REST-orientierte API aufbauen,
- CRUD-Funktionen über Controller und Models umsetzen,
- Daten mit SQLite dauerhaft speichern und validieren,
- Nutzer:innen anmelden und geschützte Sessions mit Cookies verwalten,
- Änderungen mit WebSockets an berechtigte, verbundene Clients melden,
- grundlegende Sicherheits- und Testanforderungen berücksichtigen.

## Architekturprinzip: pragmatisches MVC

Die Anwendung folgt einer einfachen MVC-orientierten Struktur. Sie dient als roter Faden und wird während des Seminars schrittweise aufgebaut. Die Schichten bleiben klein und haben klar erkennbare Aufgaben:

| Bereich | Aufgabe im Arbeitsbeispiel |
|---|---|
| **View** | Semantisches HTML und leichtes JavaScript zeigen Listen, Einzeldatensätze und Formulare an. Die View sendet Anfragen an die API und stellt die Ergebnisse dar. |
| **Route** | Ordnet HTTP-Methode und URL dem passenden Controller zu. Routen bleiben möglichst schlank und enthalten keine Datenbanklogik. |
| **Controller** | Nimmt die Anfrage entgegen, prüft und verarbeitet die Eingaben, ruft das Model auf und entscheidet über Statuscode und Antwort. |
| **Model** | Kapselt die fachlichen Daten und den Zugriff auf SQLite. Es liest, erstellt, ändert und löscht Datensätze. |
| **Middleware** | Übernimmt wiederkehrende Aufgaben wie Authentifizierung, Eingabeprüfung und zentrale Fehlerbehandlung. |

Der typische Datenfluss lautet:

**View → Route → Controller → Model → SQLite → Controller → View**

Die Echtzeitfunktion ergänzt diesen Ablauf: Nach einer erfolgreich gespeicherten Änderung veranlasst der Controller eine Benachrichtigung an die berechtigten, verbundenen Clients. Die Route bleibt dabei weiterhin nur der Einstiegspunkt für die HTTP-Anfrage.

## Durchgängiges Arbeitsbeispiel

Während des gesamten Seminars entsteht eine kleine Verwaltungsanwendung mit einem austauschbaren fachlichen Gegenstand. Teilnehmende können Datensätze anlegen, in einer Liste oder Einzelansicht aufrufen, bearbeiten, duplizieren und löschen. Später erhält jeder Datensatz eine Nutzerzuordnung. So lassen sich Anmeldung, Berechtigungen und Mehrbenutzerbetrieb direkt in derselben Anwendung ergänzen.

Das Beispiel bleibt bewusst unabhängig von einer bestimmten Branche oder einem bestimmten Fachthema. Im Mittelpunkt stehen Datenfluss, Verantwortlichkeiten und Architektur – nicht die Domäne selbst.

## Seminarinhalte

### Tag 1: Node.js, asynchrone Abläufe und Anwendungsstruktur

#### Einstieg und gemeinsames Ziel

- Erwartungen und individuelle Lernziele klären
- Arbeitsbeispiel und gewünschte Funktionen festlegen
- Den Request-Response-Ablauf und die MVC-Bausteine als Zielbild kennenlernen

#### Node.js-Grundlagen

- Node.js einrichten und ein Projekt mit npm initialisieren
- JavaScript-Grundlagen für die serverseitige Entwicklung auffrischen
- Module mit ES-Modulen (`import` und `export`) organisieren; CommonJS bei Bedarf einordnen
- Eingebaute Module nutzen, zum Beispiel `node:http`, `node:path` und `node:fs/promises`
- Anwendungsstart und erste Projektstruktur anlegen

#### Asynchrone Programmierung

- Event Loop und asynchrone Ein- und Ausgabe verstehen
- Callbacks, Promises und `async/await` vergleichen
- Asynchrone Fehler erkennen und sinnvoll behandeln
- Eine kurze Dateiübung mit `fs/promises` umsetzen: Inhalte lesen und schreiben

Die Dateiübung dient dazu, asynchrone Abläufe praktisch zu verstehen. Für die dauerhafte Speicherung der Anwendungsdaten wird später SQLite eingesetzt.

#### Erster HTTP-Server

- Einen einfachen HTTP-Server starten
- Anfragen und Antworten nachvollziehen
- Einen ersten Health-Check-Endpunkt bereitstellen
- Den Weg vom Browser bis zur Serverantwort anhand der Anwendung verfolgen

**Ergebnis des Tages:** Ein startfähiges Node.js-Projekt, ein einfacher Server und ein gemeinsames Verständnis der späteren Anwendungsschichten.

### Tag 2: MVC mit Express, CRUD und SQLite

#### Express und Request-Verarbeitung

- Express in das bestehende Projekt integrieren
- Middleware, Routing und zentrale Fehlerbehandlung einsetzen
- HTTP-Methoden, Statuscodes und JSON-Antworten passend verwenden
- Routen als schlanke Zuordnung zu Controllern gestalten

#### Controller und Models entwickeln

- Controller für Listenansicht, Einzelansicht und Änderungen aufbauen
- Eingaben prüfen und verständliche Fehlerantworten zurückgeben
- Fachliche Daten und Datenbankzugriff im Model bündeln
- Controller, Model und Route getrennt testen und nachvollziehbar verbinden

#### CRUD über eine API

- Datensätze auflisten und einzeln abrufen
- Datensätze erstellen und bearbeiten
- Datensätze duplizieren und löschen
- Pflichtfelder, erlaubte Werte und Eingabegrenzen serverseitig validieren
- Eine einfache View über `fetch` mit der API verbinden

#### SQLite als dauerhafte Datenspeicherung

- Das mitgelieferte SQL-Skript ausführen und Tabellen sowie Beziehungen für Nutzer:innen und Datensätze nachvollziehen
- Primär- und Fremdschlüssel sowie Constraints anhand des vorgegebenen Schemas verstehen
- Datenbankzugriffe im Model kapseln
- SQL-Abfragen mit Parametern ausführen
- Asynchrone Datenbankoperationen mit `async/await` verarbeiten
- Prüfen, dass gespeicherte Daten einen Neustart des Servers überstehen

Serverseitig gerenderte Templates wie EJS oder Pug können bei Bedarf als Alternative eingeordnet werden. Im Arbeitsbeispiel bleibt die View eine einfache HTML-Oberfläche, die mit einer JSON-API kommuniziert.

**Ergebnis des Tages:** Eine MVC-orientierte Anwendung, deren Oberfläche CRUD-Funktionen über Express nutzt und deren Daten in SQLite erhalten bleiben.

### Tag 3: Anmeldung, Sessions, Echtzeit und Betrieb

#### Nutzer:innen und geschützte Bereiche

- Nutzerkonten und Passwort-Hashing einordnen
- Passwörter nicht im Klartext speichern
- Login, aktuelle Session und Logout als eigene Anwendungsfälle umsetzen
- Geschützte Routen mit Authentifizierungs-Middleware absichern
- Datensätze serverseitig der angemeldeten Person zuordnen

#### Sessions und Cookies

- Unterschied zwischen Cookie, Session-ID und serverseitigem Session-Speicher verstehen
- Im Cookie nur eine Session-ID ablegen
- Cookie-Optionen wie `HttpOnly`, `SameSite` und `Secure` passend konfigurieren
- Sessions serverseitig speichern, erneuern und beim Logout beenden
- CSRF-Schutz und sichere Konfiguration berücksichtigen

#### Echtzeitkommunikation mit Socket.IO

- WebSockets und ihren Unterschied zu normalen HTTP-Anfragen kennenlernen
- Socket.IO in den bestehenden HTTP-Server integrieren
- Verbindungen an die bestehende Anmeldung und Session binden
- Nach erfolgreichen Änderungen passende Ereignisse auslösen
- Updates nur an berechtigte Clients senden
- Listen- und Detailansicht auf Live-Änderungen reagieren lassen

#### Sicherheit, Tests und Deployment

- SQL-Injection durch parametrisierte Abfragen verhindern
- Eingaben validieren und Ausgaben gegen XSS absichern
- Zugriffsrechte bei jeder Datenabfrage prüfen
- Zentrale Abläufe mit einer Testdatenbank testen
- Zwei angemeldete Clients und getrennte Nutzerrechte praktisch überprüfen
- Anwendung für den Betrieb vorbereiten: Umgebungsvariablen, HTTPS, Protokollierung und Health-Check
- Skalierung und Load Balancing als Ausblick einordnen

**Ergebnis des Tages:** Ein durchgängiger Anwendungsablauf vom Login über geschützte CRUD-Funktionen bis zu autorisierten Live-Updates.

## Zielgruppe

Das Seminar richtet sich an JavaScript- und Webentwickler:innen sowie technische Mitarbeitende, die serverseitige Anwendungen mit Node.js entwickeln oder besser verstehen möchten. Es eignet sich außerdem für technische Projektleitungen, IT-Verantwortliche, Studierende und Gründer:innen, die an der technischen Umsetzung beteiligt sind.

## Vorkenntnisse

Grundkenntnisse in JavaScript werden vorausgesetzt. Teilnehmende sollten Variablen, Funktionen, Kontrollstrukturen sowie grundlegende Objekte und Arrays kennen. Erfahrung mit Node.js, Express, Datenbanken oder WebSockets ist nicht erforderlich.

## Hinweise zur Überarbeitung

- Die ursprüngliche Liste allgemeiner Technologie-Vorteile wurde durch konkrete Lernziele und einen klaren Praxisbezug ersetzt.
- Die Architektur ist nun ausdrücklich MVC-orientiert: Die View und die Controller erhalten neben Routen und Models eine sichtbare, eigene Rolle. Routen bleiben bewusst schlank.
- Das Arbeitsbeispiel zieht sich vom ersten HTTP-Request bis zu SQLite, Login und Echtzeitkommunikation durch alle drei Tage; sein Fachthema bleibt austauschbar.
- SQLite ersetzt das zuvor nur beispielhaft genannte MongoDB. Die Dateiübung bleibt erhalten, wird aber als Übung zu asynchroner Ein- und Ausgabe von der eigentlichen Datenspeicherung abgegrenzt.
- EJS und Pug sind keine Pflichtbestandteile, da die Anwendung im Beispiel eine einfache HTML-View mit JSON-API verwendet.
