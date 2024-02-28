const burgerIcon = document.getElementById("burgerIcon");
const mobileNav = document.getElementById("mobileNav");
const closeIcon = document.getElementById("closeIcon");

mobileNav.style.display = "none";

burgerIcon.addEventListener("click", function () {
  // Wenn das Burger-Symbol geklickt wird, zeige das mobile Navigationsmenü an
  mobileNav.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  // Wenn das Schließen-Symbol (X) geklickt wird, verstecke das mobile Navigationsmenü
  mobileNav.style.display = "none";
});
