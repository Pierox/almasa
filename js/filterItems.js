const enlaces = document.querySelectorAll('.botonesFilter a');
const items = document.querySelectorAll('.itemToFilter');


function filtrarServiciosPorCategoria(categoria) {
    items.forEach(item => {
        const categorias = item.dataset.category.split(',');
        if (categorias.includes(categoria)) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}


window.addEventListener('DOMContentLoaded', () => {
    const enlaceActivo = document.querySelector('.botonesFilter a.active');
    if (enlaceActivo) {
        filtrarServiciosPorCategoria(enlaceActivo.dataset.category);
    }
});

// Añadir evento click a cada enlace del menú
enlaces.forEach(enlace => {
    enlace.addEventListener('click', event => {
        event.preventDefault();
        enlaces.forEach(en => en.classList.remove('active'));
        enlace.classList.add('active');
        filtrarServiciosPorCategoria(enlace.dataset.category);
    });
});
