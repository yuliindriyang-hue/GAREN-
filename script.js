
const ADMIN = "6285385772263";

// Buka kategori produk
function showTab(id, button) {
  document.querySelectorAll(".panel").forEach(panel => {
    panel.classList.remove("active");
  });

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");
  button.classList.add("active");
}

// Menu HP
document.getElementById("menuBtn").onclick = function() {
  document.getElementById("nav").classList.toggle("open");
};

// Pesan produk lewat WhatsApp
function order(product) {
  const message = encodeURIComponent(
    "Halo CS GAREN STORE 62, saya ingin memesan " + product
  );

  window.open(
    "https://wa.me/" + ADMIN + "?text=" + message,
    "_blank"
  );
}

// Login dan Register demo
let mode = "login";

function openAuth() {
  document.getElementById("authModal").classList.add("show");
}

function closeAuth() {
  document.getElementById("authModal").classList.remove("show");
}

function setMode(newMode) {
  mode = newMode;

  document.getElementById("authTitle").textContent =
    mode === "login" ? "LOGIN" : "REGISTER";

  document.getElementById("submitAuth").textContent =
    mode === "login" ? "MASUK" : "BUAT AKUN";
}

document.getElementById("authForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const message = document.getElementById("authMessage");

  if (mode === "register") {
    localStorage.setItem("garen_" + username, password);
    message.textContent = "Register demo berhasil. Silakan login.";
  } else {
    const saved = localStorage.getItem("garen_" + username);

    if (saved === password) {
      message.textContent = "Login berhasil. Selamat datang " + username;
      closeAuth();
    } else {
      message.textContent = "Username atau password salah.";
    }
  }
});
