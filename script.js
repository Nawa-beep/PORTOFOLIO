
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

// Membuka dan menutup menu pada layar HP
menuToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Menutup menu setelah salah satu tautan diklik
navMenu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Menampilkan tahun saat ini
document.getElementById("year").textContent =
  new Date().getFullYear();
