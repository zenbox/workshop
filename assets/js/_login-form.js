// >>>>>>>
export function initLoginForm() {
    const form = document.querySelector("#login-form");
    if (!form) return;

    const email = form.querySelector("#login-email");
    const password = form.querySelector("#login-password");
    const summary = form.querySelector("#login-error-summary");
    const list = form.querySelector("#login-error-list");

    if (!email || !password || !summary || !list) return;

    const fields = [
        {
            input: email,
            error: form.querySelector("#login-email-error"),
            hint: "login-email-hint",
            message() {
                if (email.validity.valueMissing) {
                    return "Gib deine E-Mail-Adresse ein.";
                }

                if (email.validity.typeMismatch) {
                    return "Gib eine gültige E-Mail-Adresse ein, zum Beispiel name@beispiel.de.";
                }

                return "";
            },
        },
        {
            input: password,
            error: form.querySelector("#login-password-error"),
            hint: "",
            message() {
                return password.validity.valueMissing
                    ? "Gib dein Passwort ein."
                    : "";
            },
        },
    ];

    if (fields.some((field) => !field.error)) return;

    let attempted = false;

    function validate() {
        const errors = [];

        for (const field of fields) {
            const message = field.message();
            const descriptions = [];

            if (field.hint) descriptions.push(field.hint);

            if (message) {
                field.input.setAttribute("aria-invalid", "true");
                field.error.textContent = message;
                field.error.hidden = false;
                descriptions.push(field.error.id);
                errors.push({ input: field.input, message });
            } else {
                field.input.removeAttribute("aria-invalid");
                field.error.textContent = "";
                field.error.hidden = true;
            }

            if (descriptions.length) {
                field.input.setAttribute(
                    "aria-describedby",
                    descriptions.join(" ")
                );
            } else {
                field.input.removeAttribute("aria-describedby");
            }
        }

        list.replaceChildren();

        for (const error of errors) {
            const item = document.createElement("li");
            const link = document.createElement("a");

            link.href = `#${error.input.id}`;
            link.textContent = error.message;
            item.append(link);
            list.append(item);
        }

        summary.hidden = errors.length === 0;
        return errors.length === 0;
    }

    // Erst nach erfolgreicher Initialisierung die eigene Prüfung aktivieren.
    form.noValidate = true;

    form.addEventListener("submit", (event) => {
        attempted = true;

        if (!validate()) {
            event.preventDefault();
            summary.focus();
        }
    });

    for (const field of fields) {
        field.input.addEventListener("input", () => {
            if (attempted) validate();
        });
    }
}
// <<<<<<<
