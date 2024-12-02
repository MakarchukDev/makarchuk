document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".animate-text");
    textElements.forEach((element) => {
        element.style.opacity = 0;
        element.style.transition = "opacity 2s ease-in-out";
        setTimeout(() => (element.style.opacity = 1), 500);
    });
});
