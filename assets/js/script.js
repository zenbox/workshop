// setTimeout(() => {
//     let element = document.getElementById("form-login-email"),
//         desc = document.getElementById("form-login-email-desc");

//     desc.textContent = "Bitte gib deine E-Mail Adresse hier ein ...";
//     desc.classList.remove("sr-only");

//     element.focus();
// }, 3000);

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
};
