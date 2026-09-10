const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const processTabs = document.querySelectorAll("[data-process-tab]");
const processPanels = document.querySelectorAll("[data-process-panel]");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
});

menuToggle?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("is-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

processTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    processTabs.forEach((item) => item.classList.remove("is-active", "btn-navy"));
    processTabs.forEach((item) => item.classList.add("btn-outline"));
    tab.classList.add("is-active", "btn-navy");
    tab.classList.remove("btn-outline");
    processPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.processPanel === tab.dataset.processTab);
    });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
