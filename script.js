// Smooth scroll enhancement
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Theme toggle (dark/light)
const toggle = document.getElementById("themeToggle");
const body = document.body;

let darkMode = true;

toggle.addEventListener("click", () => {
    darkMode = !darkMode;

    if (darkMode) {
        body.style.background = "#0f172a";
        body.style.color = "#e5e7eb";
    } else {
        body.style.background = "#f8fafc";
        body.style.color = "#0f172a";
    }
});

// Navbar shrink on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.padding = "10px 30px";
    } else {
        nav.style.padding = "15px 30px";
    }
});
