
const hamburger = document.querySelector(".sidebar__btn");
const nav = document.querySelector(".sidebar__menu");
const links = document.querySelectorAll(".sidebar__menu li");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("active");
  });
});
