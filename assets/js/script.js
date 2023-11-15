document.addEventListener("DOMContentLoaded", () => {
    // - - -

    setBoxes = () => {
        let boxes = document.querySelectorAll("body > *, body > * > *, fieldset > *");
        console.dir(boxes);
        boxes.forEach((box) => {
            box.classList.add("dev-box");
        });
    };

    setBoxes();
    // - - -
});
