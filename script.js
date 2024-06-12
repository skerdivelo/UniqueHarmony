function scrollToArticles() {
    document.getElementById("articles").scrollIntoView({ behavior: "smooth" });
}

function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

document
    .getElementById("search-form")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const query = document
            .getElementById("search-input")
            .value.toLowerCase();
        if (!query) return;

        const items = document.querySelectorAll(".design-item .design-title a");
        let found = false;
        let firstMatchedItem = null;

        document.querySelectorAll(".design-item").forEach((el) => {
            el.style.backgroundColor = "";
        });

        items.forEach((item) => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                found = true;
                const parent = item.closest(".design-item");
                parent.style.backgroundColor = "pink";

                if (!firstMatchedItem) {
                    firstMatchedItem = parent;
                }
            }
        });

        if (found && firstMatchedItem) {
            firstMatchedItem.scrollIntoView({ behavior: "smooth" });
        } else {
            alert("Servizio non trovato");
        }
    });
