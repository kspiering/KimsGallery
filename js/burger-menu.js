document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burgerIcon");
  const menu = document.querySelector(".mobileNav");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.getElementById("exit");

  burgerIcon.addEventListener("click", function () {
    menu.classList.toggle("mobileNav-visible");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    menu.classList.remove("mobileNav-visible");
    overlay.classList.remove("active");
  });

  closeBtn.addEventListener("click", function () {
    menu.classList.remove("mobileNav-visible");
    overlay.classList.remove("active");
  });
});
