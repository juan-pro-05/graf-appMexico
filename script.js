const verde = document.getElementById("verde");
const rojo = document.getElementById("rojo");

const franjaVerde = document.getElementById("franjaVerde");
const franjaRojo = document.getElementById("franjaRojo");

const valorVerde = document.getElementById("valorVerde");
const valorRojo = document.getElementById("valorRojo");

verde.addEventListener("input", () => {
  franjaVerde.style.backgroundColor = verde.value;
  valorVerde.textContent = verde.value.toUpperCase();
});

rojo.addEventListener("input", () => {
  franjaRojo.style.backgroundColor = rojo.value;
  valorRojo.textContent = rojo.value.toUpperCase();
});

// Inicializar valores
franjaVerde.style.backgroundColor = verde.value;
franjaRojo.style.backgroundColor = rojo.value;
