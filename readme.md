# Accessibility Workshop für Web-Entwickler

**Herzlich willkommen**

Mein Name ist Michael Reichart, wir erarbeiten in den nächsten zwei Tagen die Grundlagen in der Umsetzung barrierefreier Webinterfaces.

Den jeweiligen Workshop-Code finden Sie unter `https://github.com/zenbox/workshop`.

michael.reichart@gfu.net

## Seminarzeiten

-   9:00 bis 16:00 Uhr
-   Mittagspause von 12:00 Uhr bis 13:00 Uhr
-   kleine Pausen etwa gegen 10:30 Uhr und gegen 14:30 Uhr.

## Inhalte

### Einführung in die Barrierefreiheit

-   Definition und Verständnis
-   Gesetze und Erwartungen
-   WCAG, BITV

### Entwicklungsumgebung

-   Chrome, Lighthouse
-   VS Code, SASS, ggf. Pug

### Semantik

-   Aufbau einer Webseite oder eines Webinterfacs
-   Auswirkungen auf assistive Systeme, z. B. Screenreader
-   Elemente für Menschen mit Beeinträchtigungen

### Tastatur-Steuerung

-   Eine Seite nur über die Tastatur steuern?
-   Tabulator-Steuerung
-   Cursor-Tasten-Seuerung

### WAI-ARIA

-   roles - die Semantik unterstützen
-   aria-attributes - (im Wesentlichen) Screenreader besser unterstützen

### Medieneinbindung und Abbildungen

-   Abbildungen und Text-Alternativen
-   Video, Audio, Untertitel und Transkriptionen

### Skalierbarkeit

-   Adaptives Layout
-   Adaptiver Zoom
-   CSS für barrierefreie Typografie

### Farbe und Kontrast

-   Fehlsichtigeiten
-   Simulation von Fehlsichtigkeit
-   Einrichten und Steuern von Farbe und Kontrast
-   Bewerten

### Animationen

-   Dynamisches Verhalten bei Veränderungen
-   Wiederholbarkeit
-   Abschaltbarkeit

### Barrierefreiheit nach BITV und WCAG testen

-   Chrome Lighthouse (Checklisten)
-   Chrome-Extensions
-   Simulationen
-   Screenreader

## Links zur Barrierefreiheit

### Chrome Extensions zum Testen

-   [Chrome Screenreader](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn/related?hl=de)
-   [Colour Contrast Checker](https://chrome.google.com/webstore/detail/colour-contrast-checker/nmmjeclfkgjdomacpcflgdkgpphpmnfe?hl=de)
-   [headingsmap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=de)
-   [WCAG Color Contrast Checker](https://chrome.google.com/webstore/detail/wcag-color-contrast-check/plnahcmalebffmaghcpcmpaciebdhgdf?hl=de)
-   [SkipTo Landmarks & Headings](https://chrome.google.com/webstore/detail/skipto-landmarks-headings/fjkpbfcodhflpdildjbmdhhmcoplghgf)

### Chrome Extensions zur Simulation

-   [Accessibility View](https://chrome.google.com/webstore/detail/accessibility-view/ekpmnemcmjcimpnmofmiaeoggjkjohjg?hl=de)
-   [Web Disability Simulator](https://chrome.google.com/webstore/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla?hl=de)
-   [EqualWeb Accessibility Checker](https://chrome.google.com/webstore/detail/equalweb-accessibility-ch/imemciokfejbnonkkinhcdfigdilcllg?hl=de)

### Statistik

[Zahlen, Daten, Fakten](https://www.bgw-online.de/bgw-online-de/service/medien-arbeitshilfen/medien-center/behindertenhilfe-in-deutschland-zahlen-daten-fakten-20896)

### Grundlagen

#### WCAG

-   [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
-   [WCAG 2.0 in deutsch](https://www.einfach-fuer-alle.de/wcag2.0/uebersetzungen/WCAG20-de/)
-   [Wie man die WCAG erfüllt](https://www.einfach-fuer-alle.de/wcag2.0/uebersetzungen/How-to-Meet-WCAG-2.0/#qr-text-equiv-all)
-   [WAI Authoring Practise Guide](https://www.w3.org/WAI/ARIA/apg/)

#### BITV

-   [BITV](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html)
-   [BIK - Barrierefrei informieren und kommunizieren](https://bik-fuer-alle.de/barrierefreiheit-umsetzen.html)
-   [BITV Prüfschritte](https://ergebnis.bitvtest.de/pruefverfahren?tx_twbitvtest_procedure%5Baction%5D=show&tx_twbitvtest_procedure%5Bcontroller%5D=Procedure&tx_twbitvtest_procedure%5Bprocedure%5D=11&cHash=4a277975185785af9c687eb03489b3ef)

#### Assistenzen

-   [Assistenz-Technologien](https://www.weissenstein-bs.de/)

### HTML-Aufbau

-   [Gestaltung für Screenreader-Kompatibilität](https://immocado.com/barrierefrei/designing-screen-reader-compatibility/)

### Farbe und Kontrast

#### Tools

-   [Farben und Kontraste in Echtzeit prüfen](https://contrast-checker.glitch.me/)
-   [Farben und Kontraste mit Farbskalen](https://colorbox.io/)
-   [Farben und Kontraste für Texte](https://webaim.org/resources/contrastchecker/)
-   [Die nächste barrierefreie Farben finden](https://www.learnui.design/tools/accessible-color-generator.html)
-   [Adobe Color Barrierefreiheitstool](https://color.adobe.com/de/create/color-contrast-analyzer)

#### Infos

-   [Alles über Farbenblindheit](https://www.color-blindness.com/)
-   [GEO - Beispiel für Sehstörungen](https://www.geo.de/wissen/gesundheit/22295-rtkl-augenkrankheiten-wie-menschen-mit-sehstoerungen-die-welt-wahrnehmen)
-   [GEO - Beispiele für Farbenblindheit](https://www.geo.de/wissen/gesundheit/19493-rtkl-interaktive-bilder-wie-farbenblinde-menschen-die-welt-sehen)

### Leserlichkeit, Lesbarkeit

#### Leserlichkeit

-   [Leserlichkeit](https://www.leserlich.info/)
-   [Lexend - Font für Dyslexie](https://www.lexend.com/)

#### Lesbarkeit

-   [Lesbarkeit testen](http://leichtlesbar.ch/html/)

#### Beipiele

-   [Berufsgenossenschaft in Leichter Sprache](https://www.bgw-online.de/bgw-online-de/begriffe-in-leichter-sprache-berufs-genossenschaft-einfach-28780)

### Grafik und Datenvisualisierung

-   [Studienarbeit Barrierefreie Charts](https://courses.isds.tugraz.at/ivis/surveys/ss2021/ivis-ss2021-g1-survey-accessible-charts.pdf)
-   [Grafik vorlesen](https://semanticresponsiveillustration.com/)

### Forschung

-   [Exklusives Design (Forschung)](https://exclusive-design.vasilis.nl/)
-   [Inklusives Design](https://inclusivedesignprinciples.org/)
