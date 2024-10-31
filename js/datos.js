// Función para animar los números
function animateCount(element) {
    const target = +element.getAttribute("data-target");
    const increment = target / 100; // Ajusta el valor para controlar la velocidad

    let count = 0;

    function updateCount() {
        count += increment;
        if (count < target) {
            element.innerText = Math.ceil(count);
            requestAnimationFrame(updateCount);
        } else {
            element.innerText = target.toLocaleString();
        }
    }

    updateCount();
}

// Usar Intersection Observer para detectar cuándo los números están en pantalla
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            animateCount(element);
            observer.unobserve(element); // Dejar de observar después de la animación
        }
    });
}, { threshold: 0.5 });

// Seleccionar todos los elementos que contienen el valor del número a animar
document.querySelectorAll(".boldDatos").forEach(element => {
    observer.observe(element);
});