// Dyslexie-Effekt
document
    .getElementById("toggle-dyslexie")
    .addEventListener("click", function () {
        chrome.scripting.executeScript({
            target: { tabId: chrome.devtools.inspectedWindow.tabId },
            function: toggleDyslexie,
        });
    });

// ADS-Effekt
document.getElementById("toggle-ads").addEventListener("click", function () {
    chrome.scripting.executeScript({
        target: { tabId: chrome.devtools.inspectedWindow.tabId },
        function: toggleADS,
    });
});

// Farbenblindheit: Protanopie
document
    .getElementById("toggle-protanopia")
    .addEventListener("click", function () {
        chrome.scripting.executeScript({
            target: { tabId: chrome.devtools.inspectedWindow.tabId },
            function: toggleProtanopia,
        });
    });

// Farbenblindheit: Deuteranopie
document
    .getElementById("toggle-deuteranopia")
    .addEventListener("click", function () {
        chrome.scripting.executeScript({
            target: { tabId: chrome.devtools.inspectedWindow.tabId },
            function: toggleDeuteranopia,
        });
    });

// Farbenblindheit: Tritanopie
document
    .getElementById("toggle-tritanopia")
    .addEventListener("click", function () {
        chrome.scripting.executeScript({
            target: { tabId: chrome.devtools.inspectedWindow.tabId },
            function: toggleTritanopia,
        });
    });

// Visus 0.7
document
    .getElementById("toggle-visus07")
    .addEventListener("click", function () {
        chrome.scripting.executeScript({
            target: { tabId: chrome.devtools.inspectedWindow.tabId },
            function: toggleVisus07,
        });
    });

// Visus 0.5
document
    .getElementById("toggle-visus05")
    .addEventListener("click", function () {
        chrome.scripting.executeScript({
            target: { tabId: chrome.devtools.inspectedWindow.tabId },
            function: toggleVisus05,
        });
    });

// Visus 0.4
document
    .getElementById("toggle-visus04")
    .addEventListener("click", function () {
        chrome.scripting.executeScript({
            target: { tabId: chrome.devtools.inspectedWindow.tabId },
            function: toggleVisus04,
        });
    });

// Funktionen zur Simulation

// Dyslexie-Effekt
function toggleDyslexie() {
    document.body.classList.toggle("dyslexie");
    if (!document.styleSheets[0].cssRules.namedItem("dyslexie")) {
        let style = document.createElement("style");
        style.innerHTML = `
      @keyframes dyslexieEffect {
        0%, 100% { top: 0; transform: rotate(0deg); }
        33% { top: -2px; transform: rotate(-1deg); }
        66% { top: 2px; transform: rotate(1deg); }
      }
      .dyslexie span {
        display: inline-block;
        position: relative;
        top: 0;
        transform: rotate(0deg);
        animation: dyslexieEffect 2s infinite;
      }
    `;
        document.head.appendChild(style);
    }
}

// ADS-Effekt
function toggleADS() {
    document.body.classList.toggle("ads");
    if (!document.styleSheets[0].cssRules.namedItem("ads")) {
        let style = document.createElement("style");
        style.innerHTML = `
      @keyframes adsEffect {
        0% { color: transparent; }
        50% { color: red; }
        100% { color: transparent; }
      }
      .ads .distraction {
        display: inline-block;
        animation: adsEffect 1s infinite;
      }
    `;
        document.head.appendChild(style);
    }
}

// Protanopie (Rotblindheit) Simulation
function toggleProtanopia() {
    toggleColorblindnessFilter(
        "protanopia-filter",
        "protanopia",
        "0.567, 0.433, 0, 0, 0, 0.558, 0.442, 0, 0, 0, 0, 0.242, 0.758, 0, 0, 0, 0, 0, 1, 0"
    );
}

// Deuteranopie (Grünblindheit) Simulation
function toggleDeuteranopia() {
    toggleColorblindnessFilter(
        "deuteranopia-filter",
        "deuteranopia",
        "0.625, 0.375, 0, 0, 0, 0.7, 0.3, 0, 0, 0, 0, 0.3, 0.7, 0, 0, 0, 0, 0, 1, 0"
    );
}

// Tritanopie (Blaublindheit) Simulation
function toggleTritanopia() {
    toggleColorblindnessFilter(
        "tritanopia-filter",
        "tritanopia",
        "0.95, 0.05, 0, 0, 0, 0, 0.433, 0.567, 0, 0, 0, 0.475, 0.525, 0, 0, 0, 0, 0, 1, 0"
    );
}

// Visus 0.7 Simulation
function toggleVisus07() {
    toggleVisusFilter("visus07-filter", 1.5);
}

// Visus 0.5 Simulation
function toggleVisus05() {
    toggleVisusFilter("visus05-filter", 3);
}

// Visus 0.4 Simulation
function toggleVisus04() {
    toggleVisusFilter("visus04-filter", 4.5);
}

// Hilfsfunktionen für Farbenblindheit
function toggleColorblindnessFilter(filterId, className, matrixValues) {
    document.body.classList.toggle(className);
    if (!document.getElementById(filterId)) {
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("style", "position: absolute; width: 0; height: 0;");
        svg.innerHTML = `
      <filter id="${filterId}">
        <feColorMatrix type="matrix" values="${matrixValues}"></feColorMatrix>
      </filter>`;
        document.body.appendChild(svg);
        document.body.style.filter = `url(#${filterId})`;
    } else {
        document.body.style.filter = document.body.classList.contains(className)
            ? `url(#${filterId})`
            : "none";
    }
}

// Hilfsfunktionen für Visus
function toggleVisusFilter(filterId, blurAmount) {
    document.body.classList.toggle(filterId);
    if (!document.getElementById(filterId)) {
        let style = document.createElement("style");
        style.innerHTML = `
      .${filterId} {
        filter: blur(${blurAmount}px);
      }`;
        document.head.appendChild(style);
    }
}
