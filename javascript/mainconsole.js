// Mendapatkan referensi elemen pada halaman
const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

// Menangani aksi klik pada tombol submit
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah form dikirim secara default

  // Memeriksa apakah username dan password sudah diisi
  if (username.value.trim() === "" || password.value.trim() === "") {
    alert("Harap isi semua kolom");
    return;
  }

  // Memeriksa apakah username dan password benar
  if (username.value === "public" && password.value === "public") {
    window.location.href = "http://store.clash-of-kings.ml:8/admin/"; // Mengarahkan ke halaman YouTube Home
  } else {
    alert("Username atau password salah");
  }
});

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

