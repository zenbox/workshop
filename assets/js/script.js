setTimeout(() => {
    let element = document.getElementById("form-login-email"),
        desc = document.getElementById("form-login-email-desc");

    desc.textContent = "Bitte gib deine E-Mail Adresse hier ein ...";
    desc.classList.remove("sr-only");

    element.focus();

    // // Das aktuell fokussierte Element abrufen
    // const focusedElement =
    //     document.accessibilityObjectModel.getFocusedElement();

    // // Überprüfen, ob das fokussierte Element ein Formularelement ist
    // if (
    //     focusedElement.tagName === "INPUT" ||
    //     focusedElement.tagName === "SELECT" ||
    //     focusedElement.tagName === "TEXTAREA"
    // ) {
    //     // Wenn ja, den Typ des Formularelements abrufen und ausgeben
    //     const inputType = focusedElement.type;
    //     console.log(
    //         `Das fokussierte Formularelement ist vom Typ "${inputType}".`
    //     );
    // } else {
    //     console.log("Das fokussierte Element ist kein Formularelement.");
    // }
}, 3000);

window.onload = () => {
    // - - - - - - - - - -
    let form = document.getElementById("login-form"),
        checkbox = document.getElementById("form-login-checkbox-terms");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        form.submit();
    });

    // Add a default enter bahaviour to checkboxes
    checkbox.addEventListener("keyup", (e) => {
        console.log(e.key);

        switch (e.key) {
            case "Enter":
                e.target.checked = true;
                break;
        }
    });
    // - - - - - - - - - -
    // - - - - - - - - - -
    // Versuche, VoiceOver zu erkennen
    // Geht derzeit nicht!

    const voiceOverStatus = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;
    // - - - - - - - - - -
};
