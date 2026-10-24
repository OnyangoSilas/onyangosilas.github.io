
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Dark/light mode
function updateThemeIcon() {
  const isLight = body.classList.contains("light-mode");
  themeToggle.innerHTML = isLight
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';

  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode"
  );
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  updateThemeIcon();
});

updateThemeIcon();

// Mobile navigation
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.innerHTML = isOpen
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Close mobile menu after selecting a section
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

// Current year
document.getElementById("currentYear").textContent =
  new Date().getFullYear();

// Highlight the navigation link for the visible section
const sections = document.querySelectorAll("main section[id]");
const links = navLinks.querySelectorAll('a[href^="#"]');

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      links.forEach(link => {
        const active =
          link.getAttribute("href") === `#${entry.target.id}`;

        link.classList.toggle("active", active);
      });
    });
  }, {
    rootMargin: "-25% 0px -60% 0px"
  });

  sections.forEach(section => observer.observe(section));
}
