var navbar = document.getElementById("main");
var sticky = navbar.offsetTop;
var logo = document.getElementById("logo");

function scrollStick() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
    logo.classList.add("logo-active");
  } else {
    navbar.classList.remove("sticky");
  }
}
