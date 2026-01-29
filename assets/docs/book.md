# Kapitel 1

## Einordnung des Seminars: Worum es hier eigentlich geht

Dieses Seminar ist kein klassisches Techniktraining. Es geht nicht darum, HTML-Tags auswendig zu lernen oder CSS-Eigenschaften zu sammeln. Der eigentliche Gegenstand des Seminars ist ein anderer: Es geht um das Verstehen von Struktur, Bedeutung und Gestaltung im Web – und darum, diese drei Ebenen sauber voneinander zu trennen.

Der Anlass ist pragmatisch. Du arbeitest mit Inhalten, mit Anzeigen, mit Texten, Bildern und Botschaften, die auf Webseiten erscheinen. Diese Inhalte müssen gestaltet, aktualisiert, übersetzt, eingebettet und langfristig gepflegt werden. Genau an dieser Stelle entscheidet sich, ob Inhalte als starre Bilder existieren – oder als offene, strukturierte Information.

HTML und CSS sind dafür keine Werkzeuge im engen Sinn, sondern grundlegende Beschreibungssprachen. Sie zwingen dazu, über Inhalte nachzudenken:
Was ist Überschrift?
Was ist zusammengehöriger Text?
Was ist Navigation, was ist Zusatzinformation?
Was ist Inhalt – und was ist Gestaltung?

Anzeigen sind dafür ein besonders geeigneter Einstieg. Sie sind überschaubar, klar begrenzt und zugleich realistisch. Eine Anzeige enthält fast alles, was auch große Webseiten enthalten: Überschriften, Text, Bilder, Verlinkungen, Handlungsaufforderungen, visuelle Gestaltung. Gleichzeitig zwingt sie dazu, über Einbettung nachzudenken: Eine Anzeige steht nie allein. Sie erscheint immer im Kontext einer fremden Seite, eines bestehenden Layouts, eines anderen Systems.

Deshalb ist dieses Seminar bewusst so angelegt, dass du nicht „eine Webseite baust“, sondern ein Modul. Ein HTML-Fragment, das sich korrekt verhält, unabhängig davon, wo es eingesetzt wird. Das ist kein Detail, sondern eine zentrale Denkweise: Du arbeitest nicht im luftleeren Raum, sondern in bestehenden Strukturen.

Ein weiterer wichtiger Aspekt ist Barrierefreiheit – nicht als Zusatzanforderung, sondern als Folge guter Struktur. Wenn Inhalte sauber ausgezeichnet sind, werden sie für Maschinen lesbar: für Screenreader, Suchmaschinen, Übersetzungssysteme und andere automatisierte Auswerter. Das ist kein theoretischer Nebeneffekt, sondern ein handfester Vorteil. Inhalte gewinnen Reichweite, Wartbarkeit und Zukunftsfähigkeit.

Dieses Seminar verfolgt daher ein klares Ziel:
Du sollst lernen, Inhalte so zu strukturieren, dass sie unabhängig von ihrer Darstellung verständlich bleiben. Gestaltung kommt danach – bewusst, kontrolliert und reversibel.

---

# Kapitel 2

## HTML als Sprache für Bedeutung

HTML ist keine Programmiersprache. Dieser Punkt ist zentral, weil viele Missverständnisse genau hier beginnen. HTML führt keine Logik aus, es rechnet nichts, es prüft nichts. HTML beschreibt.

Genauer gesagt: HTML beschreibt die **Bedeutung** von Inhalten. Es sagt nicht, _wie_ etwas aussieht, sondern _was_ etwas ist. Eine Überschrift ist eine Überschrift, weil sie als solche ausgezeichnet ist – nicht, weil sie groß oder fett erscheint. Ein Absatz ist ein Absatz, weil er einen inhaltlich zusammengehörigen Gedanken markiert – nicht, weil darunter ein Zeilenabstand sichtbar ist.

Diese Trennung ist historisch gewollt. HTML ist aus dem wissenschaftlichen Kontext entstanden. Die Grundfrage war nicht Gestaltung, sondern Verständlichkeit und Austauschbarkeit. Wie lassen sich Texte so strukturieren, dass sie unabhängig vom Ausgabegerät gelesen werden können? Die Antwort war eine einfache, begrenzte Auszeichnungssprache, die sich an etablierten Textformen orientiert: Überschriften, Absätze, Listen, Tabellen, Bilder, Verweise.

Der Browser übernimmt die Aufgabe der Darstellung. Er interpretiert die Struktur und entscheidet, wie sie visuell umgesetzt wird. Deshalb sieht eine HTML-Seite auch ohne eigenes CSS bereits „irgendwie formatiert“ aus. Diese Darstellung ist kein Design, sondern eine Notlösung: Der Browser macht Inhalte sichtbar, ohne ihren Zweck zu kennen.

Wichtig ist dabei: Der Browser weiß nichts über deine Absicht. Er sieht nur Struktur. Wenn du Struktur falsch oder unsauber beschreibst, kann der Browser das nicht korrigieren. HTML besitzt keinen Kompilierer, keine strenge Fehlerprüfung. Viele Fehler werden stillschweigend akzeptiert und visuell kaschiert. Das macht HTML zugänglich – aber auch gefährlich. Fehler bleiben oft unsichtbar, bis sie in einem anderen Kontext problematisch werden: bei Screenreadern, bei Suchmaschinen oder bei der Weiterverarbeitung von Inhalten.

Ein zentrales Denkmodell ist daher die Unterscheidung zwischen **Block-Elementen** und **Inline-Elementen**.
Block-Elemente strukturieren den Dokumentfluss. Sie stehen untereinander, bilden Abschnitte und gliedern Inhalte. Dazu gehören Überschriften, Absätze, Listen oder auch semantische Container wie `section` oder `article`.
Inline-Elemente hingegen bewegen sich innerhalb des Textflusses. Sie verändern Bedeutung oder Funktion einzelner Textteile, ohne den Fluss zu unterbrechen. Dazu gehören Verlinkungen, Hervorhebungen oder Betonungen.

Diese Unterscheidung ist keine technische Spitzfindigkeit. Sie ist grundlegend für alles, was später mit CSS geschieht. Block-Elemente sind Boxen. Inline-Elemente sind Textbestandteile. Wer diese Logik verstanden hat, versteht den größten Teil von HTML – und einen erheblichen Teil von CSS gleich mit.

HTML zwingt dich damit zu einer Entscheidung:
Was ist Struktur?
Was ist Inhalt?
Was ist nur Darstellung?

Diese Entscheidungen sind nicht optional. Du triffst sie immer – bewusst oder unbewusst. Das Ziel dieses Seminars ist, sie bewusst zu treffen.

---

# Kapitel 3

## Textstruktur: Überschriften, Absätze und Listen

Texte bestehen nicht einfach aus Wörtern. Sie besitzen eine innere Ordnung. Diese Ordnung ist für Menschen intuitiv, für Maschinen jedoch nicht. HTML zwingt dich dazu, diese Ordnung explizit zu machen. Genau darin liegt seine Stärke.

### Überschriften als strukturelle Marker

Überschriften dienen nicht der optischen Hervorhebung, sondern der inhaltlichen Gliederung. HTML stellt dafür die Elemente `h1` bis `h6` zur Verfügung. Diese bilden eine Hierarchie. Eine `h1` kennzeichnet die oberste Ebene eines Dokuments, darunter folgen `h2`, `h3` und so weiter.

Wichtig ist dabei nicht die Größe der Schrift, sondern die logische Beziehung der Inhalte zueinander. Eine `h2` ist immer einem übergeordneten Abschnitt zugeordnet. Eine `h3` präzisiert wiederum einen Teil dieses Abschnitts. Diese Hierarchie bildet eine Inhaltsstruktur, die von Screenreadern, Suchmaschinen und anderen Auswertungssystemen gelesen wird.

In der Praxis – insbesondere bei Anzeigen – ist Vorsicht geboten. Anzeigen sind keine vollständigen Dokumente, sondern eingebettete Inhalte. Eine `h1` ist in der Regel dem Hauptdokument vorbehalten. Deshalb ist es oft sinnvoll, innerhalb einer Anzeige mit `h2` oder tieferen Ebenen zu arbeiten. Die Struktur bleibt korrekt, ohne den Kontext der umgebenden Seite zu stören.

### Absätze als Bedeutungseinheiten

Der Absatz ist das zentrale Element für Fließtext. Ein Absatz fasst Gedanken zusammen, die inhaltlich zusammengehören. In HTML wird dies mit dem `p`-Element ausgezeichnet.

Ein häufiger Fehler besteht darin, Absätze rein visuell zu simulieren – etwa durch Zeilenumbrüche oder Einzüge. Diese Mittel verändern jedoch nicht die Struktur. Für HTML bleibt der Text ein zusammenhängender Block. Erst das `p`-Element markiert einen eigenständigen Bedeutungsabschnitt.

Der Browser versieht Absätze standardmäßig mit Abständen. Diese Abstände sind kein Stilmerkmal, sondern ein Hinweis auf Struktur. Später, mit CSS, kannst du diese Darstellung verändern. Die strukturelle Bedeutung des Absatzes bleibt jedoch bestehen.

### Listen als verdichtete Struktur

Nicht jeder Inhalt eignet sich für Fließtext. Aufzählungen, Merkmale oder Eigenschaften lassen sich oft klarer in Listen darstellen. HTML kennt dafür zwei grundlegende Formen: ungeordnete Listen (`ul`) und geordnete Listen (`ol`). Die einzelnen Einträge werden mit `li` ausgezeichnet.

Listen sind mehr als optische Aufzählungen. Sie signalisieren eine inhaltliche Zusammengehörigkeit gleichwertiger Elemente. Für Screenreader werden Listen als solche angesagt, inklusive der Anzahl der Einträge. Dadurch entsteht Orientierung.

Auch hier gilt: Die Darstellung ist zweitrangig. Ob Aufzählungszeichen sichtbar sind oder nummeriert wird, ist eine Frage der Gestaltung. Die Struktur bleibt dieselbe.

---

# Kapitel 4

## Block- und Inline-Elemente als Denkmodell

Ein zentrales Konzept, das sich durch das gesamte Seminar zieht, ist die Unterscheidung zwischen Block- und Inline-Elementen. Dieses Konzept ist nicht nur für HTML relevant, sondern bildet die Grundlage für das Verständnis von CSS und Layout.

### Block-Elemente: Inhalte als Boxen

Block-Elemente beanspruchen ihren eigenen Raum im Dokument. Sie stehen untereinander, beginnen in der Regel in einer neuen Zeile und bilden inhaltliche Einheiten. Überschriften, Absätze, Listen und viele semantische Container gehören zu dieser Kategorie.

Man kann Block-Elemente als Boxen begreifen. Jede Box besitzt einen Inhalt und kann Abstände nach innen und außen haben. Dieses Box-Denken ist entscheidend für das spätere Arbeiten mit Layout, Abständen und Positionierung.

### Inline-Elemente: Bedeutung im Textfluss

Inline-Elemente hingegen bewegen sich innerhalb eines bestehenden Textflusses. Sie unterbrechen den Absatz nicht, sondern modifizieren Teile davon. Typische Beispiele sind Links (`a`), Hervorhebungen (`strong`) oder Betonungen (`em`).

Inline-Elemente besitzen keine eigene Box im klassischen Sinn. Sie reagieren auf den Textfluss und dessen Zeilenumbruch. Auch das ist keine Einschränkung, sondern eine bewusste Eigenschaft.

### Semantische Hervorhebung statt visueller Effekte

Besonders wichtig ist der semantische Unterschied zwischen `strong` und `em`.
`strong` kennzeichnet inhaltliche Wichtigkeit.
`em` kennzeichnet Betonung.

Beide Elemente sind bedeutungstragend. Dass sie standardmäßig fett oder kursiv dargestellt werden, ist lediglich eine Konvention. Mit CSS kannst du diese Darstellung jederzeit ändern. Die Bedeutung bleibt jedoch erhalten.

Das ist ein entscheidender Punkt: Du markierst nicht, _wie_ etwas aussieht, sondern _warum_ es hervorgehoben ist.

---

# Kapitel 5

## Links als funktionale und semantische Elemente

Verlinkungen sind das Herzstück des Webs. Sie machen Texte zu Hypertexten. In HTML werden Links mit dem `a`-Element erstellt, abgeleitet vom Begriff „Anchor“.

Ein Link besteht immer aus zwei Teilen:
– der Zieladresse (`href`)
– dem sichtbaren Linktext

Beide erfüllen unterschiedliche Aufgaben. Die Adresse ist technisch. Der Linktext ist kommunikativ. Gute Linktexte sind verständlich, auch ohne Kontext. „Zur Webseite“ ist hilfreicher als eine nackte URL oder ein unklarer Verweis wie „hier“.

Aus Sicht der Barrierefreiheit ist der Linktext entscheidend. Screenreader lesen Links oft isoliert vor. Technische Adressen sind für Menschen kaum interpretierbar, sprechende Texte hingegen schon.

Auch hier gilt: Ein Link ist ein Inline-Element. Er gehört in den Textfluss oder in eine strukturelle Umgebung wie eine Liste oder einen Absatz. Ein Link allein erzeugt noch keinen Absatz.

---

# Kapitel 6

## Bilder, Alt-Texte und Bildgruppen

Bilder sind integraler Bestandteil von Anzeigen. Gleichzeitig sind sie problematisch, wenn sie Inhalte transportieren, die nicht anders zugänglich sind.

### Das `img`-Element und seine Pflichtattribute

Das `img`-Element besitzt zwei zentrale Attribute:
– `src`, das auf die Bildquelle verweist
– `alt`, das den Bildinhalt beschreibt

Der Alt-Text ist kein optionaler Zusatz. Er ist der Ersatz für das Bild, wenn dieses nicht gesehen werden kann. Er beschreibt nicht das Aussehen, sondern die Funktion oder Aussage des Bildes im Kontext.

### Bilder als Inline-Elemente

Ein Bild ist technisch gesehen ein Inline-Element. Es verhält sich ähnlich wie ein Textzeichen mit eigener Höhe und Breite. Dadurch kann es in Text eingebettet werden. Ob das sinnvoll ist, ist eine gestalterische Entscheidung.

### Bildgruppen mit `figure` und `figcaption`

Für Bilder mit erklärendem Kontext stellt HTML das `figure`-Element zur Verfügung. Es bildet eine eigene strukturelle Einheit und kann eine oder mehrere Bilddateien sowie eine Beschriftung (`figcaption`) enthalten.

Diese Struktur ist besonders dann sinnvoll, wenn Bilder inhaltlich kommentiert oder eingeordnet werden müssen. Auch hier profitieren Screenreader und andere Auswertungssysteme von der klaren Struktur.

---

# Kapitel 7

## Semantische Container und Dokumentstruktur

Bisher ging es um einzelne Bausteine: Überschriften, Absätze, Listen, Links und Bilder. Diese Elemente beschreiben Inhalte auf Mikroebene. Damit daraus jedoch ein verständliches Ganzes wird, braucht es übergeordnete Strukturen. Genau hier kommen semantische Container ins Spiel.

Semantische Container sind HTML-Elemente, die Inhalte nicht selbst darstellen, sondern **zusammenfassen und einordnen**. Sie beschreiben, _welche Rolle_ ein Inhaltsbereich innerhalb eines größeren Zusammenhangs spielt.

### Warum Container notwendig sind

Ohne Container besteht ein Dokument aus einer flachen Abfolge von Elementen. Für Menschen mag das noch lesbar sein, für Maschinen wird es schnell unübersichtlich. Container schaffen Gliederungsebenen. Sie machen klar, wo ein Abschnitt beginnt, wozu er gehört und wo er endet.

Im Kontext von Anzeigen ist das besonders wichtig, da Anzeigen fast immer **Teil eines größeren Dokuments** sind. Sie müssen sich einfügen, ohne den Rest der Seite zu stören – weder visuell noch semantisch.

### Zentrale semantische Container

HTML stellt eine Reihe solcher Container zur Verfügung:

- `main` kennzeichnet den Hauptinhalt eines Dokuments. Dieses Element darf pro Seite nur einmal vorkommen. Für Anzeigen ist es in der Regel **nicht geeignet**, da Anzeigen nicht der Hauptinhalt der Seite sind.
- `section` beschreibt einen thematisch zusammenhängenden Abschnitt. Es ist das wichtigste Container-Element für Anzeigen.
- `article` steht für in sich abgeschlossene Inhalte, die auch unabhängig vom Kontext sinnvoll sind.
- `header` und `footer` beschreiben Einleitungs- bzw. Abschlussbereiche eines Abschnitts oder Artikels.
- `nav` kennzeichnet Navigationsbereiche.
- `aside` beschreibt ergänzende oder randständige Inhalte.

Diese Elemente tragen Bedeutung. Sie sind nicht austauschbar. Ein `div` kann technisch alles, aber semantisch nichts.

### Die Rolle von `section` für Anzeigen

Für Anzeigen ist `section` das zentrale Element. Es markiert einen inhaltlich geschlossenen Bereich innerhalb einer fremden Seite. In diesem Bereich kannst du Inhalte strukturieren, gestalten und kapseln, ohne den Rest der Seite zu beeinflussen.

Eine Anzeige sollte deshalb immer als eigene Section gedacht werden. Diese Section erhält später gezielt Layout- und Stilregeln. Alles, was innerhalb dieser Section geschieht, bleibt lokal begrenzt.

---

# Kapitel 8

## Warum Tabellen fast immer die falsche Wahl sind

Tabellen haben in HTML einen klar definierten Zweck: Sie stellen **tabellarische Daten** dar. Zeilen, Spalten, Beziehungen zwischen Werten. Genau dafür sind sie semantisch vorgesehen.

Historisch wurden Tabellen jedoch häufig missbraucht, um Layouts zu bauen. Der Grund war einfach: Lange Zeit gab es keine besseren Werkzeuge. Diese Praxis ist heute technisch überholt und semantisch problematisch.

### Semantik und Zugänglichkeit

Screenreader lesen Tabellen als Tabellen. Sie kündigen die Anzahl der Zeilen und Spalten an und ermöglichen eine Navigation innerhalb dieser Struktur. Wird eine Tabelle lediglich zur visuellen Anordnung verwendet, entsteht für Nutzerinnen und Nutzer mit Screenreader ein völlig falsches Bild.

In Anzeigen auf Webseiten gibt es daher kaum einen legitimen Grund, Tabellen für das Layout zu verwenden. Moderne Layoutmechanismen wie Flexbox oder Grid sind dafür deutlich besser geeignet.

### Die Ausnahme: E-Mail

Eine wichtige Ausnahme bildet der E-Mail-Bereich. Viele E-Mail-Clients – insbesondere Outlook – unterstützen moderne CSS-Techniken nur eingeschränkt. Deshalb werden Tabellen dort bis heute zur Layoutsteuerung eingesetzt. Das ist keine gute Praxis, sondern eine technische Notwendigkeit.

Für Webanzeigen gilt diese Ausnahme jedoch nicht.

---

# Kapitel 9

## Anzeigen als eingebettete Module

Ein zentraler Gedanke des Seminars ist die Vorstellung von Anzeigen als **Module**. Eine Anzeige ist kein eigenständiges Dokument, sondern ein Fragment, das in fremde Kontexte eingebettet wird.

Diese Einbettung hat weitreichende Konsequenzen.

### Kapselung und Namensräume

Da du nicht kontrollierst, in welcher Umgebung eine Anzeige erscheint, musst du davon ausgehen, dass bereits CSS-Regeln existieren. Ohne Vorsichtsmaßnahmen können diese Regeln deine Anzeige beeinflussen – oder umgekehrt.

Deshalb ist Kapselung entscheidend. Eine Anzeige sollte:

- eine eindeutige umschließende Section besitzen
- innerhalb dieser Section gezielt gestaltet werden
- Klassen- und IDs mit einem Namensraum versehen

So entsteht ein klar abgegrenzter Gestaltungsraum.

### Anzeigen denken, nicht Seiten

Dieser Perspektivwechsel ist wichtig. Du baust nicht „eine kleine Webseite“, sondern ein Modul mit klaren Grenzen. Diese Denkweise macht Anzeigen robuster, wiederverwendbarer und langfristig wartbar.

---

# Workshop-Dokumentation: HTML/CSS für modulare Anzeigen (anonymisierte Fassung)

Diese Datei ist eine **ausführliche, geordnete Seminarzusammenfassung** für Teilnehmende.
Sie basiert auf den originalen Transkripten und den begleitenden Notizen, ist jedoch bewusst **kein wörtliches Protokoll**.

## Hinweise zu dieser Fassung

- **Anonymisierung:** Personen-, Firmen- und Produktnamen wurden entfernt oder durch neutrale Platzhalter ersetzt.
- **Relevanzfilter:** Reine Unterhaltung, organisatorische Themen und Transkriptartefakte wurden entfernt.
- **Ziel:** Du sollst das Seminar inhaltlich nachvollziehen und die Konzepte anschließend praktisch anwenden können.

---

## Inhaltsübersicht

1. Einordnung und Ziel: Anzeigen als Module
2. Arbeitsweise: in kleinen Schritten bauen
3. HTML-Grundlagen: Bedeutung statt Optik
4. Textstruktur: Überschriften, Absätze, Listen
5. Links und Attribute (inkl. typischer Syntaxfehler)
6. Bilder: `img`, `alt`, `figure`
7. Semantik und Barrierefreiheit im Anzeigen-Kontext
8. CSS-Basics: Kaskade, Vererbung, Struktur
9. Selektoren & Namespacing (kapseln statt „global stylen“)
10. Box-Modell: `margin`, `padding`, `box-sizing`
11. Typografie: `font-size`, `rem`, `line-height`
12. Hintergründe: `background-*`, `contain/cover`, Layer
13. Dateiorganisation & Pfade
14. Flexbox: Layout ohne Pixelrechnerei
15. Debugging & Qualitätssicherung
16. Übungsplan und nächste Schritte

---

# 1. Einordnung und Ziel: Anzeigen als Module

Dieses Seminar ist kein „HTML-/CSS-Auswendiglernen“, sondern ein Training in einer Denkweise:

- **Inhalt (HTML) und Gestaltung (CSS) strikt trennen**
- Inhalte **semantisch** schreiben, damit sie für Menschen und Maschinen verständlich sind
- Anzeigen als **Module** bauen, die in fremde Webseiten eingebettet werden können

Warum gerade Anzeigen?

- Sie sind klein genug, um sie vollständig zu überblicken.
- Sie enthalten trotzdem alles Wichtige: Überschrift, Text, Bild, Link/Call-to-Action, Layout.
- Sie zwingen dazu, an **Einbettung** zu denken: Deine Anzeige läuft nicht „auf deiner Seite“, sondern im Kontext einer Host-Webseite.

Eine zentrale Konsequenz daraus:

> Du baust nicht „eine Seite“, sondern ein **abgrenzbares Fragment**.

---

# 2. Arbeitsweise: in kleinen Schritten bauen

Im Seminar war der Workflow ein wiederkehrendes Thema: Nicht 50 Zeilen schreiben und dann hoffen, sondern **kleine Schritte**.

Empfehlung:

1. Ein Element hinzufügen.
2. Sofort im Browser prüfen.
3. Erst wenn es stimmt, den nächsten Schritt.

Warum?

- HTML/CSS haben oft **keine harten Fehlermeldungen** wie eine Programmiersprache.
- Ein kleiner Syntaxfehler (fehlende Klammer, falsches Zeichen) kann dazu führen, dass Regeln nicht greifen.

Praktischer Tipp:

- Wenn es „plötzlich komisch“ aussieht, ist sehr oft nicht die Idee falsch, sondern ein **kleiner Syntaxfehler**.

---

# 3. HTML-Grundlagen: Bedeutung statt Optik

HTML beschreibt **Bedeutung**.
Der Browser stellt dar – aber die Darstellung ist nur eine „Standardansicht“, nicht dein Design.

Wichtiges Denkmodell:

- **Block-Elemente** strukturieren (stehen typischerweise untereinander): z. B. `p`, `h2`, `ul`, `section`.
- **Inline-Elemente** leben im Textfluss: z. B. `a`, `strong`, `em`.

Konsequenz:

> Layout ist nicht „Text rumschieben“, sondern **Boxen** gestalten.

---

# 4. Textstruktur: Überschriften, Absätze, Listen

## Überschriften

Überschriften (`h1`–`h6`) bilden eine **Hierarchie**.
In Anzeigen (als eingebettete Fragmente) ist `h1` oft tabu, weil die Host-Seite bereits eine `h1` hat.

Praxisregel:

- In Anzeigen häufig mit `h2` oder `h3` starten (abhängig vom Einbettungs-Kontext).

## Absätze

Absätze gehören in `p`.
Ein Zeilenumbruch oder optischer Einzug ersetzt keine Struktur.

## Listen

- `ul` für ungeordnete Listen
- `ol` für geordnete Listen
- `li` für Listeneinträge

Listen sind nicht „Punkte malen“, sondern ein Strukturhinweis (auch für Screenreader).

---

# 5. Links und Attribute (inkl. typischer Syntaxfehler)

Ein Link ist ein Inline-Element: `a`.
Der Link besteht aus:

- Ziel (`href="…"`)
- Linktext (für Menschen)

Wichtig für die Praxis:

- **Sprechender Linktext** (nicht „hier klicken“).
- Attribute werden mit **Leerzeichen voneinander getrennt**, aber um `=` stehen **keine** Leerzeichen.

Beispiel:

```html
<a href="https://example.org">Zur Website</a>
```

---

# 6. Bilder: `img`, `alt`, `figure`

## `img` und Pflichtattribute

Ein Bild ist in HTML ein eigenes Element:

```html
<img
    src="assets/img/beispiel.jpg"
    alt="Kurzbeschreibung des Bildinhalts" />
```

`alt` ist Pflicht, weil:

- Bilder nicht immer geladen werden
- Screenreader Inhalte sonst nicht vermitteln können
- „Text im Bild“ grundsätzlich problematisch ist

## `figure` und `figcaption`

Wenn ein Bild eine erklärende Beschriftung braucht:

```html
<figure>
    <img
        src="assets/img/beispiel.jpg"
        alt="…" />
    <figcaption>Kurzbeschreibung / Kontext.</figcaption>
</figure>
```

---

# 7. Semantik und Barrierefreiheit im Anzeigen-Kontext

Semantik ist die Basis von Barrierefreiheit.
Wichtige Container-Elemente:

- `section` als thematischer Anzeigenblock (typisch)
- `header` / `footer` innerhalb des Moduls möglich
- `main` nur einmal pro Seite → in Anzeigen fast nie passend
- `nav` nur, wenn wirklich Navigation vorhanden ist

Wichtige Konsequenz für Anzeigen:

> Eine Anzeige muss sich semantisch korrekt **unterordnen** und darf die Host-Seite nicht „übernehmen“.

---

# 8. CSS-Basics: Kaskade, Vererbung, Struktur

CSS ist ein Regelwerk: Selektor → Eigenschaften.

```css
.beispiel {
    color: #222;
}
```

Zwei Grundlagen, die im Seminar ständig implizit mitschwingen:

- **Vererbung:** Typografie-Eigenschaften (z. B. Schrift) werden häufig an Kinder vererbt.
- **Organisation:** CSS so strukturieren, dass du nach zwei Wochen noch weißt, was wo hingehört.

Pragmatische Empfehlung:

- Blöcke im CSS nach Themen sortieren (z. B. „Layout“, „Typografie“, „Hintergrund“, „Komponenten“).

---

# 9. Selektoren & Namespacing (kapseln statt „global stylen“)

Da Anzeigen in fremden Umgebungen laufen, ist Namespacing zentral.
Die Grundidee:

1. **Ein äußerer Wrapper** (ID oder eindeutige Klasse) kapselt die Anzeige.
2. Alles Styling hängt an diesem Wrapper.

Beispiel-HTML:

```html
<section id="ad-module">
    <h2>Überschrift</h2>
    <p>Text…</p>
    <a
        class="ad-cta"
        href="https://example.org"
        >Mehr erfahren</a
    >
</section>
```

Beispiel-CSS:

```css
#ad-module {
    font-family: system-ui, sans-serif;
}

#ad-module .ad-cta {
    font-weight: 600;
}
```

Wichtige Selektor-Beziehungen aus dem Seminar:

- Nachfahre: `A B` (alles innerhalb)
- Kind: `A > B` (nur direkte Kinder)
- Universal: `*` (alle) – sparsam einsetzen

Warum das wichtig ist:

- Du willst **nicht** versehentlich Überschriften/Links der Host-Seite umstylen.
- Du willst **nicht** von Host-CSS überrascht werden.

---

# 10. Box-Modell: `margin`, `padding`, `box-sizing`

Die Box besteht aus:

- Inhalt
- `padding` (innen)
- `border` (Rahmen)
- `margin` (außen)

Eine Kernempfehlung aus dem Seminar:

```css
#ad-module {
    box-sizing: border-box;
}

#ad-module *,
#ad-module *::before,
#ad-module *::after {
    box-sizing: inherit;
}
```

Warum?

- `border-box` macht Größenberechnung deutlich einfacher.

Zusatz: Beim Lernen helfen oft explizite Werte (`margin-top`, `margin-right`, …), bevor du Kurzschreibweisen nutzt.

---

# 11. Typografie: `font-size`, `rem`, `line-height`

Typografie ist ein strukturelles Thema.

## Basiswerte am Container setzen

Damit alles konsistent wird, setzt du Typografie am Wrapper:

```css
#ad-module {
    font-size: 16px;
    line-height: 1.3;
}
```

Im Seminar wurde empfohlen:

- Standard-Basis im Web liegt oft bei 16px.
- Für Anzeigen ist 16–18px häufig ein guter Lesbarkeitsbereich.
- `line-height` besser als **Vielfaches** notieren (z. B. `1.3`), nicht in Pixeln.

## `rem` als skalierbare Einheit

`rem` bezieht sich auf die Basis-Schriftgröße des Dokuments.
Für skalierbare Systeme sind `rem`-Werte oft besser als fixe `px`.
Bei stark fixierten Anzeigenformaten kann `px` pragmatisch sein – wichtig ist dann vor allem **Stabilität im Host-Kontext**.

Wichtige Warnung:

> Host-Webseiten können eigene Regeln für `h2`, `p`, `a` haben. Deshalb sind klare, vollständige Typografie-Entscheidungen in deinem Modul wichtig.

---

# 12. Hintergründe: `background-*`, `contain/cover`, Layer

Die Grundidee:

- **Information** bleibt HTML.
- **Optik** darf in den Hintergrund.

Typische Hintergrund-Regeln:

```css
#ad-module {
    background-image: url("assets/img/hintergrund.png");
    background-repeat: no-repeat;
    background-size: contain; /* oder cover */
    background-position: center;
}
```

Wichtige Semantik dahinter:

- `contain`: Bild vollständig sichtbar, ggf. freie Fläche
- `cover`: Fläche komplett gefüllt, ggf. Zuschnitt

Mehrere Ebenen sind möglich (z. B. Verlauf + Bild):

```css
#ad-module {
    background-image:
        linear-gradient(180deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0)),
        url("assets/img/hintergrund.png");
}
```

Barrierefreiheit:

- Hintergrundbilder werden nicht vorgelesen.
- Deshalb dürfen sie **keine** unverzichtbare Information tragen.

---

# 13. Dateiorganisation & Pfade

Empfehlungen aus dem Seminar:

- Ein `assets/`-Ordner für zugehörige Dateien (CSS, Bilder, ggf. JS).
- Bilder in Unterordnern (z. B. `assets/img/` oder `assets/figures/`).
- Beim Entwickeln mit **relativen Pfaden** arbeiten.

Warum relative Pfade?

- Deine Anzeige wird später als Paket weitergegeben (HTML + CSS + Assets).
- Absolute Pfade funktionieren dann meist nicht.

Namenskonventionen:

- Dateinamen klein schreiben
- Bindestriche bevorzugen (`kebab-case`)
- Konsistent bleiben (Sprache, Schema)

Wichtig: Manche Server sind bei Groß-/Kleinschreibung strikt. Was lokal „zufällig geht“, kann später brechen.

---

# 14. Flexbox: Layout ohne Pixelrechnerei

Flexbox war der zentrale Layout-Baustein im Seminar.

## Grundprinzip

- Ein Container wird zur Flexbox: `display: flex`
- Dann lassen sich Kinder entlang einer Achse verteilen.

Beispiel:

```css
#ad-module {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
```

Wichtige Konzepte:

- `flex-direction: row | column` (Hauptachse)
- `justify-content` (Verteilung entlang der Hauptachse)
- `align-items` (Ausrichtung auf der Querachse)

Seminar-typisches Vorgehen:

- Erst grob verteilen (oben/unten, links/rechts).
- Dann Gruppen bilden (z. B. „oberer Block“ und „unterer Block“), statt künstliche Leer-Elemente einzubauen.

---

# 15. Debugging & Qualitätssicherung

Typische Fehlerquellen, die im Seminar explizit angesprochen wurden:

- Fehlende geschweifte Klammer in CSS
- Falsche Anführungszeichen
- Tippfehler in Property-Namen
- Pfadfehler bei Bildern

Pragmatische Debugging-Regeln:

1. **Sofort testen** nach wenigen Zeilen.
2. Bei Überraschungen: zuerst Syntax prüfen.
3. Entwicklerwerkzeuge nutzen (Styles/Computed ansehen).
4. Wenn Änderungen „nicht ankommen“: Cache/Reload-Strategie prüfen.

---

# 16. Übungsplan und nächste Schritte

Eine Kernbotschaft des Seminars:

> Verstehen ≠ Können.

Empfohlene Praxis:

- Täglich ein kurzer Übungsblock (z. B. 30 Minuten).
- Vorlagen nachbauen und danach in eigene Entwürfe übertragen.
- Ergebnisse kurz von jemand anderem gegenprüfen lassen (Peer Review).

Eine sinnvolle Reihenfolge für eigene Übungen:

1. HTML-Struktur (semantisch, sauber).
2. Typografie-Basis am Wrapper.
3. Boxmodell und Abstände.
4. Hintergrundstrategie (Bild vs. HTML-Inhalt).
5. Flexbox-Verteilung.

---

## Anhang: Minimal-Template (Startpunkt)

```html
<section id="ad-module">
    <header>
        <h2>Nutzenversprechen</h2>
        <p>Kurztext, der den Kern erklärt.</p>
    </header>

    <footer>
        <a
            class="ad-cta"
            href="https://example.org"
            >Mehr erfahren</a
        >
    </footer>
</section>
```

```css
#ad-module {
    box-sizing: border-box;
    font-family: system-ui, sans-serif;
    font-size: 16px;
    line-height: 1.3;
    padding: 16px;
}

#ad-module *,
#ad-module *::before,
#ad-module *::after {
    box-sizing: inherit;
}

#ad-module {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#ad-module .ad-cta {
    display: inline-block;
}
```
