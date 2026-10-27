
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", menu.classList.contains("open"));
    });
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
  }

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const form = document.querySelector("#enquiryForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Website Enquiry — JS FINGINEERING");
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nOrganization: ${data.get("organization") || ""}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || ""}\nService: ${data.get("service")}\n\nMessage:\n${data.get("message")}`
      );
      window.location.href = `mailto:official@jsfingineering.com?subject=${subject}&body=${body}`;
    });
  }
});
