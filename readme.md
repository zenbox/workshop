# Links zur Barrierefreiheit

## Statistik

[Zahlen, Daten, Fakten](https://www.bgw-online.de/bgw-online-de/service/medien-arbeitshilfen/medien-center/behindertenhilfe-in-deutschland-zahlen-daten-fakten-20896)

## Grundlagen

### WCAG

- [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [WCAG 2.0 in deutsch](https://www.einfach-fuer-alle.de/wcag2.0/uebersetzungen/WCAG20-de/)
- [Wie man die WCAG erfüllt](https://www.einfach-fuer-alle.de/wcag2.0/uebersetzungen/How-to-Meet-WCAG-2.0/#qr-text-equiv-all)

### BITV

- [BITV](https://www.gesetze-im-internet.de/bitv_2_0/BJNR184300011.html)
- [BIK - Barrierefrei informieren und kommunizieren](https://bik-fuer-alle.de/barrierefreiheit-umsetzen.html)
- [BITV Prüfschritte](https://ergebnis.bitvtest.de/pruefverfahren?tx_twbitvtest_procedure%5Baction%5D=show&tx_twbitvtest_procedure%5Bcontroller%5D=Procedure&tx_twbitvtest_procedure%5Bprocedure%5D=11&cHash=4a277975185785af9c687eb03489b3ef)

### Assistenzen

- [Assistenz-Technologien](https://www.weissenstein-bs.de/)

## Farbe und Kontrast

### Tools

- [Farben und Kontraste in Echtzeit prüfen](https://contrast-checker.glitch.me/)
- [Farben und Kontraste mit Farbskalen](https://colorbox.io/)
- [Farben und Kontraste für Texte](https://webaim.org/resources/contrastchecker/)
- [Die nächste barrierefreie Farben finden](https://www.learnui.design/tools/accessible-color-generator.html)
- [Adobe Color Barrierefreiheitstool](https://color.adobe.com/de/create/color-contrast-analyzer)

### Infos

- [Alles über Farbenblindheit](https://www.color-blindness.com/)
- [GEO - Beispiel für Sehstörungen](https://www.geo.de/wissen/gesundheit/22295-rtkl-augenkrankheiten-wie-menschen-mit-sehstoerungen-die-welt-wahrnehmen)
- [GEO - Beispiele für Farbenblindheit](https://www.geo.de/wissen/gesundheit/19493-rtkl-interaktive-bilder-wie-farbenblinde-menschen-die-welt-sehen)

## Leserlichkeit, Lesbarkeit

### Leserlichkeit

- [Leserlichkeit](https://www.leserlich.info/)
- [Lexend - Font für Dyslexie](https://www.lexend.com/)

### Lesbarkeit

- [Lesbarkeit testen](http://leichtlesbar.ch/html/)

### Beipiele

- [Berufsgenossenschaft in Leichter Sprache](https://www.bgw-online.de/bgw-online-de/begriffe-in-leichter-sprache-berufs-genossenschaft-einfach-28780)

## Grafik und Datenvisualisierung

- [Studienarbeit Barrierefreie Charts](https://courses.isds.tugraz.at/ivis/surveys/ss2021/ivis-ss2021-g1-survey-accessible-charts.pdf)
- [Grafik vorlesen](https://semanticresponsiveillustration.com/)

## Forschung

- [Exklusives Design (Forschung)](https://exclusive-design.vasilis.nl/)
- [Inklusives Design](https://inclusivedesignprinciples.org/)

## CSS-Snippets

```css
.sr-only {
  display: none;
}
.invisible {
  display: none !important;
}
.blurred-vision {
  filter: blur(2px);
}
.achromatopsia {
  filter: url('data:image/svg+xml,\
      <svg xmlns="http://www.w3.org/2000/svg">\
        <filter id="achromatopsia">\
          <feColorMatrix values="0.213  0.715  0.072  0.000  0.000\
                                 0.213  0.715  0.072  0.000  0.000\
                                 0.213  0.715  0.072  0.000  0.000\
                                 0.000  0.000  0.000  1.000  0.000" />\
        </filter>\
      </svg>#achromatopsia');
}

.deuteranopia {
  filter: url('data:image/svg+xml,\
      <svg xmlns="http://www.w3.org/2000/svg">\
        <filter id="deuteranopia">\
          <feColorMatrix values="0.367  0.861 -0.228  0.000  0.000\
                                 0.280  0.673  0.047  0.000  0.000\
                                -0.012  0.043  0.969  0.000  0.000\
                                 0.000  0.000  0.000  1.000  0.000" />\
        </filter>\
      </svg>#deuteranopia');
}

.protanopia {
  filter: url('data:image/svg+xml,\
      <svg xmlns="http://www.w3.org/2000/svg">\
        <filter id="protanopia">\
        <feColorMatrix values="0.152  1.053 -0.205  0.000  0.000\
                               0.115  0.786  0.099  0.000  0.000\
                              -0.004 -0.048  1.052  0.000  0.000\
                               0.000  0.000  0.000  1.000  0.000" />\
        </filter>\
      </svg>#protanopia');
}

.tritanopia {
  filter: url('data:image/svg+xml,\
      <svg xmlns="http://www.w3.org/2000/svg">\
        <filter id="tritanopia">\
        <feColorMatrix values="1.256 -0.077 -0.179  0.000  0.000\
                              -0.078  0.931  0.148  0.000  0.000\
                               0.005  0.691  0.304  0.000  0.000\
                               0.000  0.000  0.000  1.000  0.000" />\
        </filter>\
      </svg>#tritanopia');
}
```
