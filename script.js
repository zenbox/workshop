const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-menu");
const backdrop = document.querySelector(".backdrop");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});

backdrop.addEventListener("click", () => {
    menu.classList.remove("open");
});

// ---------

let index = 0;
const slides = document.querySelector(".slides");
const total = slides.children.length;

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % total;
    updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateSlider();
});

function updateSlider() {
    slides.style.transform = `translateX(-${index * 100}%)`;
}

// ----------

function setTheme(mode) {
    document.documentElement.setAttribute("data-theme", mode);
    localStorage.setItem("theme", mode);
    highlightActiveThemeButton(mode);
}

function highlightActiveThemeButton(mode) {
    const buttons = document.querySelectorAll("[data-theme-button]");
    buttons.forEach((btn) => {
        const isActive = btn.getAttribute("data-theme-button") === mode;
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    highlightActiveThemeButton(savedTheme);
});

document.addEventListener("keydown", (e) => {
    if (e.altKey) {
        if (e.key === "1") setTheme("light");
        if (e.key === "2") setTheme("dark");
        if (e.key === "3") setTheme("high-contrast");
    }
});

// ------

document.addEventListener("DOMContentLoaded", () => {
    // Contrast Mode Switcher
    const contrastButtons = document.querySelectorAll(".contrast-btn");
    console.log();
    const doc = document.getElementById("body");

    // Funktion zum Umschalten der Kontrastmodi
    function setContrastMode(mode) {
        // Entferne alle vorherigen Kontrastklassen
        doc.classList.remove(
            "contrast-normal",
            "contrast-dark",
            "contrast-high",
            "contrast-higher"
        );

        // Füge die neue Kontrastklasse hinzu
        if (mode !== "normal") {
            doc.classList.add(`contrast-${mode}`);
        } else {
            doc.classList.add("contrast-normal");
        }

        // Aktualisiere die aktiven Buttons
        contrastButtons.forEach((btn) => {
            if (btn.dataset.mode === mode) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });

        // Speichere die Einstellung im localStorage für die Persistenz
        localStorage.setItem("contrast-mode", mode);
    }

    // Initialisiere den Kontrastmodus basierend auf gespeicherten Einstellungen
    const savedMode = localStorage.getItem("contrast-mode") || "normal";
    setContrastMode(savedMode);

    // Event-Listener für die Kontrastmodus-Buttons
    contrastButtons.forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            const mode = btn.dataset.mode;
            setContrastMode(mode);
        });
    });

    const form = document.getElementById("creditCardForm");
    const cardNumber = document.getElementById("cardNumber");
    const expiryDate = document.getElementById("expiryDate");
    const cvv = document.getElementById("cvv");
    const cardholderName = document.getElementById("cardholderName");
    const submitButton = document.getElementById("submitButton");
    const cardTypeIcon = document.getElementById("cardTypeIcon");
    const validationStatus = document.getElementById("validationStatus");

    // Feedback-Elemente
    const cardNumberFeedback = document.getElementById("cardNumberFeedback");
    const expiryFeedback = document.getElementById("expiryFeedback");
    const cvvFeedback = document.getElementById("cvvFeedback");
    const nameFeedback = document.getElementById("nameFeedback");

    // Kreditkarten-Validierungsregeln
    const cardPatterns = {
        visa: {
            pattern: /^4[0-9]{12}(?:[0-9]{3})?$/,
            icon: "💳", // Placeholder - würde in Produktion ein echtes Bild sein
        },
        mastercard: {
            pattern: /^5[1-5][0-9]{14}$/,
            icon: "💳", // Placeholder
        },
        amex: {
            pattern: /^3[47][0-9]{13}$/,
            icon: "💳", // Placeholder
        },
        discover: {
            pattern: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            icon: "💳", // Placeholder
        },
    };

    // Formatierung der Kreditkartennummer
    cardNumber.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");
        let formattedValue = "";

        // Format in 4er Gruppen
        for (let i = 0; i < value.length; i++) {
            if (i > 0 && i % 4 === 0) {
                formattedValue += " ";
            }
            formattedValue += value[i];
        }

        e.target.value = formattedValue;
        validateCardNumber();
    });

    // Formatierung des Ablaufdatums
    expiryDate.addEventListener("input", (e) => {
        let value = e.target.value.replace(/\D/g, "");

        if (value.length > 2) {
            e.target.value = value.substring(0, 2) + "/" + value.substring(2);
        } else {
            e.target.value = value;
        }

        validateExpiryDate();
    });

    // Validierung der CVV (nur Zahlen)
    cvv.addEventListener("input", (e) => {
        e.target.value = e.target.value.replace(/\D/g, "");
        validateCVV();
    });

    // Validierung des Karteninhabernamens
    cardholderName.addEventListener("input", validateCardholderName);

    // Validierungsfunktionen
    function validateCardNumber() {
        const value = cardNumber.value.replace(/\s/g, "");

        if (value.length < 13) {
            setInvalidState(
                cardNumber,
                cardNumberFeedback,
                "Bitte geben Sie eine vollständige Kreditkartennummer ein."
            );
            cardTypeIcon.textContent = "";
            return false;
        }

        // Luhn-Algorithmus für Kreditkarten-Prüfung
        if (!isValidLuhn(value)) {
            setInvalidState(
                cardNumber,
                cardNumberFeedback,
                "Ungültige Kreditkartennummer. Bitte überprüfen Sie Ihre Eingabe."
            );
            cardTypeIcon.textContent = "";
            return false;
        }

        // Kartentyp identifizieren
        let cardType = null;
        for (const [type, data] of Object.entries(cardPatterns)) {
            if (data.pattern.test(value)) {
                cardType = type;
                cardTypeIcon.textContent = data.icon;
                break;
            }
        }

        if (cardType) {
            setValidState(
                cardNumber,
                cardNumberFeedback,
                `${
                    cardType.charAt(0).toUpperCase() + cardType.slice(1)
                }-Karte erkannt.`
            );
            return true;
        } else {
            setInvalidState(
                cardNumber,
                cardNumberFeedback,
                "Kreditkartentyp nicht erkannt. Unterstützte Karten: Visa, Mastercard, Amex, Discover."
            );
            cardTypeIcon.textContent = "";
            return false;
        }
    }

    function validateExpiryDate() {
        const value = expiryDate.value;

        if (!/^\d{2}\/\d{2}$/.test(value)) {
            setInvalidState(
                expiryDate,
                expiryFeedback,
                "Bitte geben Sie das Ablaufdatum im Format MM/JJ ein."
            );
            return false;
        }

        const [month, year] = value.split("/");
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear() % 100; // Letzten zwei Stellen des Jahres
        const currentMonth = currentDate.getMonth() + 1; // JavaScript-Monate beginnen bei 0

        if (parseInt(month) < 1 || parseInt(month) > 12) {
            setInvalidState(
                expiryDate,
                expiryFeedback,
                "Ungültiger Monat. Bitte geben Sie einen Wert zwischen 01 und 12 ein."
            );
            return false;
        }

        if (
            parseInt(year) < currentYear ||
            (parseInt(year) === currentYear && parseInt(month) < currentMonth)
        ) {
            setInvalidState(
                expiryDate,
                expiryFeedback,
                "Das eingegebene Datum liegt in der Vergangenheit."
            );
            return false;
        }

        setValidState(expiryDate, expiryFeedback, "Gültiges Ablaufdatum.");
        return true;
    }

    function validateCVV() {
        const value = cvv.value;

        if (!/^\d{3,4}$/.test(value)) {
            setInvalidState(
                cvv,
                cvvFeedback,
                "Der Sicherheitscode muss aus 3-4 Ziffern bestehen."
            );
            return false;
        }

        setValidState(cvv, cvvFeedback, "Gültiger Sicherheitscode.");
        return true;
    }

    function validateCardholderName() {
        const value = cardholderName.value.trim();

        if (value.length < 3) {
            setInvalidState(
                cardholderName,
                nameFeedback,
                "Bitte geben Sie den vollständigen Namen ein, wie er auf der Karte steht."
            );
            return false;
        }

        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/.test(value)) {
            setInvalidState(
                cardholderName,
                nameFeedback,
                "Der Name darf nur Buchstaben, Leerzeichen, Bindestriche und Apostrophe enthalten."
            );
            return false;
        }

        setValidState(cardholderName, nameFeedback, "Gültiger Name.");
        return true;
    }

    // Hilfsfunktionen für die Validierung
    function isValidLuhn(number) {
        let sum = 0;
        let shouldDouble = false;

        // Von rechts nach links
        for (let i = number.length - 1; i >= 0; i--) {
            let digit = parseInt(number.charAt(i));

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            shouldDouble = !shouldDouble;
        }

        return sum % 10 === 0;
    }

    function setValidState(element, feedbackElement, message) {
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
        feedbackElement.textContent = message;
        feedbackElement.className = "my-payment-feedback valid";
        updateValidationStatus();
    }

    function setInvalidState(element, feedbackElement, message) {
        element.classList.remove("is-valid");
        element.classList.add("is-invalid");
        feedbackElement.textContent = message;
        feedbackElement.className = "my-payment-feedback invalid";
        updateValidationStatus();
    }

    function setInfoState(element, feedbackElement, message) {
        element.classList.remove("is-valid", "is-invalid");
        feedbackElement.textContent = message;
        feedbackElement.className = "my-payment-feedback info";
    }

    function updateValidationStatus() {
        const isCardNumberValid = cardNumber.classList.contains("is-valid");
        const isExpiryDateValid = expiryDate.classList.contains("is-valid");
        const isCVVValid = cvv.classList.contains("is-valid");
        const isNameValid = cardholderName.classList.contains("is-valid");

        // Submit-Button aktivieren, wenn alle Felder gültig sind
        submitButton.disabled = !(
            isCardNumberValid &&
            isExpiryDateValid &&
            isCVVValid &&
            isNameValid
        );

        // Status für Screenreader aktualisieren
        if (submitButton.disabled) {
            validationStatus.textContent =
                "Bitte füllen Sie alle erforderlichen Felder korrekt aus.";
        } else {
            validationStatus.textContent =
                "Formular vollständig und korrekt ausgefüllt. Sie können jetzt fortfahren.";
        }
    }

    // Formular-Absenden verarbeiten
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Hier würde in einer realen Anwendung die Zahlungsverarbeitung erfolgen
        alert("Zahlung erfolgreich! (Demo-Beispiel)");

        // Formular zurücksetzen
        form.reset();

        // Alle Validierungsanzeigen zurücksetzen
        [cardNumber, expiryDate, cvv, cardholderName].forEach((element) => {
            element.classList.remove("is-valid", "is-invalid");
        });

        setInfoState(
            cardNumber,
            cardNumberFeedback,
            "Geben Sie eine gültige 16-stellige Kreditkartennummer ein."
        );
        setInfoState(expiryDate, expiryFeedback, "Format: MM/JJ (z.B. 12/25)");
        setInfoState(
            cvv,
            cvvFeedback,
            "3-4 stelliger Code auf der Rückseite Ihrer Karte"
        );
        setInfoState(
            cardholderName,
            nameFeedback,
            "Name wie auf der Karte angegeben"
        );

        cardTypeIcon.textContent = "";
        submitButton.disabled = true;
    });
});
