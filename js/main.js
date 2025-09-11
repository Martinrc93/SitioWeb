document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-button');
    const nav = document.getElementById('main-nav');

    // Función para alternar la visibilidad del menú
    function toggleMenu() {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        nav.classList.toggle('show-nav'); // Usar una clase para mostrar/ocultar

        // Opcional: Cambiar el ícono si usas dos imágenes diferentes
        const iconOpen = hamburger.querySelector('.icon-open');
        const iconClose = hamburger.querySelector('.icon-close');
        if (iconOpen && iconClose) {
            iconOpen.style.display = isExpanded ? 'block' : 'none';
            iconClose.style.display = isExpanded ? 'none' : 'block';
        }
    }

    // Evento de clic en el botón de hamburguesa
    if (hamburger && nav) {
        hamburger.addEventListener('click', toggleMenu);
    } else {
        console.error('No se encontró el botón de hamburguesa o el menú de navegación.');
    }

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (nav.classList.contains('show-nav') && !nav.contains(event.target) && !hamburger.contains(event.target)) {
            toggleMenu();
        }
    });

    // Inicializar el estado del menú y los íconos
    if (hamburger) {
        hamburger.setAttribute('aria-expanded', 'false');
        const iconOpen = hamburger.querySelector('.icon-open');
        const iconClose = hamburger.querySelector('.icon-close');
        if (iconOpen) iconOpen.style.display = 'block';
        if (iconClose) iconClose.style.display = 'none';
    }
});
