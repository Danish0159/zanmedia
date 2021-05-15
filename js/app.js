const modal = document.querySelector(".portfolio__modal");
const previews = document.querySelectorAll(".portfolio__grid img");
const original = document.querySelector(".portfolio__full-img");
previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        const originalSrc = preview.getAttribute("data-original");
        original.src = `/img/${originalSrc}`
    });
});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio__modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});

