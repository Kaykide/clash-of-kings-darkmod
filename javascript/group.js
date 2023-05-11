// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (
    !hamburger.contains(e.target) &&
    !navbarNav.contains(e.target) &&
    navbarNav.classList.contains("active")
  ) {
    navbarNav.classList.remove("active");
  }
});
