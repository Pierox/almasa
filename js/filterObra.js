const enlaces = document.querySelectorAll('.botonesFilterServicios a');
const servicios = document.querySelectorAll('.cuadritoServicios');

// Función para filtrar servicios según la categoría activa
function filtrarServiciosPorCategoria(categoria) {
    servicios.forEach(servicio => {
        if (servicio.dataset.category === categoria) {
            servicio.classList.add('active');
        } else {
            servicio.classList.remove('active');
        }
    });
}

// Detectar el enlace activo al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    const enlaceActivo = document.querySelector('.botonesFilterServicios a.active');
    if (enlaceActivo) {
        filtrarServiciosPorCategoria(enlaceActivo.dataset.category);
    }
});

// Añadir evento click a cada enlace del menú
enlaces.forEach(enlace => {
    enlace.addEventListener('click', event => {
        event.preventDefault(); // Evitar recarga de página

        // Quitar la clase 'active' de todos los enlaces
        enlaces.forEach(en => en.classList.remove('active'));

        // Añadir la clase 'active' al enlace actual
        enlace.classList.add('active');

        // Filtrar los servicios según la categoría seleccionada
        filtrarServiciosPorCategoria(enlace.dataset.category);
    });
});
