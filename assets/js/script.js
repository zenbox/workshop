const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", (event) => {
    // Wechsele die Klasse im body Element der Site aus:
    // template-2--open / template-2--close

    document.body.classList.toggle("template-2--open");
});
