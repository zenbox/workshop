window.onload = () => {
  /**
   * @desc  Skript, das responsive die Navigation umbaut.
   *
   *        Bei Viewport-Größen ab 600px Breite ist die Seitennavigation
   *        links neben der main-Gruppe sichtbar. Bei Viewport-Größen
   *        unter 600px ist dieser Navigationsbereich ausgeblendet.
   *
   *        Die Links darin werden dann in die header-Navigation umkopiert.
   *        Die header-Navigation wird bei kleinen Viewport-Größen durch
   *        eine "Hamburger"-Schatfläche ersetzt und aufgerufen.
   *
   *        Dieses Skript
   *        1. baut bei viewport-Grenzwechsel von 600px nach 599px
   *           die Links um und
   *        2. setzt die eventlistener und eventhandler für die
   *           "Hamburger"-Schaltfläche.
   *        3. baut bei viewport-Grenzwechsel von 599px auf 600px
   *           auch wieder zurück.
   */

  // Auswahl der "Hamburger"-Gruppe und setzen eines zusätzlichen
  // Status: true  -> das Menu wird angezeigt
  //         false -> das Menu wird nicht angezeigt
  const hamburger = document.querySelector(".hamburger");
  hamburger.status = false;

  // Einsammeln der Navigations-Listenelemente der Seiten-Navigation
  const navigationLists = document.querySelectorAll(".page > nav > .nav li");

  // Einsammeln der Nagigationsliste im header-Bereich
  // Hier werden die Listenelemente aus der Seitennavigation hinkopiert
  const headerContainer = document.querySelector(".hamburger + ul");
  const pageContainer = document.querySelector(".page > nav > .nav");

  // Setzen der Breakpoints für das Ändern der Fenstergröße
  let viewport_small = window.matchMedia("(max-width: 599px)");
  viewport_medium = window.matchMedia("(min-width: 600px)");

  /**
   * @desc
   */
  function setLinks() {
    // Nach und nach für alle Listenelemente
    navigationLists.forEach((list) => {
      // Jedes Listenelement erhält einen Marker
      // mit dessen Hilfe es später wieder
      // zurückgebaut werden kann
      list.dataset.set = "true";

      // Anfügen des eingesammelten Listenelements
      // in die header-Navigations-ul
      headerContainer.appendChild(list);
    });
  }

  function resetLinks() {
    // Einsammeln der umgebaute Listenelemente
    const links = document.querySelectorAll("[data-set]");

    // Umsetzen der Listenelemente in
    // den Original-ul-Container
    links.forEach((listElement) => {
      pageContainer.appendChild(listElement);
      listElement.removeAttribute("data-set");
    });
  }

  function switchHamburgerStatus() {
    // Den "Hamburger"-Status wechseln
    hamburger.status = !hamburger.status;
  }

  // Bei Fenstergrößenwechsel (manuell oder durch Drehen des Geräts)
  viewport_small.onchange = (event) => {
    console.log("small changed ...");
    switch (hamburger.status) {
      case true:
        resetLinks();
        break;
      case false:
        setLinks();
        break;
    }
    switchHamburgerStatus();
  };

  viewport_medium.onchange = (event) => {
    console.log("medium changed ...");
    // do nothing ...
  };

  // Bei click auf die "Hamburger"-Schaltfläche
  hamburger.onclick = (event) => {
    // Testausgabe für die Browserkonsole
    console.log("click ...");

    // Browser an eventuellen weiteren Ausführungen hindern
    event.preventDefault();
    event.stopImmediatePropagation();

    // In Abhängigkeit des "Hamburger"-Status steuern:
    switch (hamburger.status) {
      case true:
        hamburger.classList.remove("active");
        resetLinks();
        break;
      case false:
        hamburger.classList.add("active");
        setLinks();
        break;
    }

    switchHamburgerStatus();
  };
  // - - - - - - - - - -
};
