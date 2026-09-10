const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const processTabs = document.querySelectorAll("[data-process-tab]");
const processPanels = document.querySelectorAll("[data-process-panel]");
const registerTabs = document.querySelectorAll("[data-register-tab]");
const registerPanels = document.querySelectorAll("[data-register-panel]");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 8);
});

menuToggle?.addEventListener("click", () => {
  mobileNav.classList.toggle("is-open");
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => mobileNav.classList.remove("is-open"));
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

registerTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    registerTabs.forEach((item) => {
      item.classList.remove("is-active", "btn-navy");
      item.classList.add("btn-outline");
    });
    tab.classList.add("is-active", "btn-navy");
    tab.classList.remove("btn-outline");
    registerPanels.forEach((panel) => {
      panel.hidden = panel.dataset.registerPanel !== tab.dataset.registerTab;
    });
  });
});

document.querySelectorAll("form[data-success]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const target = document.getElementById(form.dataset.success);
    form.classList.add("is-hidden");
    form.style.display = "none";
    target?.classList.add("is-visible");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
