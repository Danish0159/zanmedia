// Modal
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

// Accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
