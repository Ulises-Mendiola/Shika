// Función para mostrar/ocultar el menú
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Asignar evento clic al botón de menú
document.getElementById("menu-btn").addEventListener("click", toggleMenu);
