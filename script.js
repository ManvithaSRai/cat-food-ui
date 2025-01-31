document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    });

    // Watch Video Button
    const watchButton = document.querySelector(".watch-video");
    watchButton.addEventListener("click", () => {
        alert("Watch Video feature coming soon!");
    });
});
