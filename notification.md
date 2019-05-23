# notifications

## Allgemeine Strategie

*Erst mal im HTML/CSS bauen*
- ein allgemeines DIV mit Divs mit box 1, 2, 3
- oberstes DIV mit id (Nachrichten sind greifbar!)

*Dann Javascript bauen.*
- erstmal einen Prototypen bauen, der notifications baut.
- Funktion in der der Text als Parameter übergeben wird
- Später schauen, wo kommen Texte her

## Ergebnisse des ersten Sprint:
- OK! Nachrichten müssen wieder aus dem DOM gelöscht werden
- Container ist abhängig vom DOM , -> auflösen

## Textengine bauen


1. Ausblenden per JS über style

- -

## Fragen:

- es sind beliebig viele Nachrichten
- Wann erscheinen die Nachrichten? zu x beliebigen Ereignissen!
- Die Texte kommen nicht aus einer DB. kein AJAX!

- Auf 5 Boxen begrenzen, die für Nachrichten wiederverwendet werden

- Wo sollen wir sie platzieren (oben, unten, links, rechts?)
- Wie sehen sie aus? (opaque, transparent, Schatten, Rahmen, runde Ecken?)
- Wie ist das Verhalten? (Flug von links, einblenden, ausblenden, *Explosionen*, Bouncing, Drehung)

- Gibt es Abhängigkeiten? zeitliche Abstimmung? Synchronizitäten?

- Sind es 1000 Nachrichten oder nur 5?
- Wo kommen die Texte für die Nachrichten her? (Kunde pflegt die Texte ein)
- Wie lange sind die Nachrichten?
