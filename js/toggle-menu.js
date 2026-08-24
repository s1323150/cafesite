window.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".toggle-menu-button");
  const menu = document.querySelector(".header-site-menu");

  button.addEventListener("click", () => {
    menu.classList.toggle("is-show");
  });
});
