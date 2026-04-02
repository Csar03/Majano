// Script simple para funcionalidades futuras, como validación de formularios.
console.log("Página cargada");

// Ejemplo de validación para el formulario de reserva
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(event) {
            // Aquí puedes agregar validación
            alert("Reserva enviada (simulado)");
            // event.preventDefault(); // Descomenta para prevenir envío real
        });
    }
});