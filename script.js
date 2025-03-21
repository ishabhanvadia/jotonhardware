document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fade-in").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
    });
});
