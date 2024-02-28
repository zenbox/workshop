document.addEventListener("DOMContentLoaded", () => {
    // ----------
    // Delete sheep
    // ----------
    const deleteButtons = document.querySelectorAll("[data-delete]");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const id = e.target.dataset.delete;

            fetch(`/sheeps/${id}`, {
                method: "DELETE",
            }).then((response) => {
                // window.location.reload();
                window.location.href = "/sheeps";
            });
        });
    });

    // ----------
    // Update sheep
    // ----------
    const updateButtons = document.querySelectorAll("[data-update]");
    updateButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const id = e.target.dataset.update;
            const sheep = e.target.parentNode.querySelector("span").innerText;
            fetch(`/sheeps/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ sheep: sheep }),
            }).then((response) => {
                // window.location.reload();
                window.location.href = "/sheeps";
            });
        });
    });
    // ----------
});
