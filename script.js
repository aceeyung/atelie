const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.textContent = isOpen ? "×" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const form = document.getElementById("contactForm");
const success = document.getElementById("formSuccess");

form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const name = form.elements.name.value.trim();
  success.textContent = `Спасибо, ${name}! Заявка заполнена. В демонстрационной версии отправка на сервер не подключена.`;
  form.reset();
});
