$(document).ready(function(){
    $('.sidenav').sidenav();
    });
$(document).ready(function(){
    $('.collapsible').collapsible();

    // Alternar icono y color de fondo al expandir/colapsar
    $('.collapsible-header').click(function() {
        const header = $(this);
        const icon = header.find('.toggle-icon');
        
        if (header.hasClass('active')) {
            header.removeClass('active'); // Remueve la clase 'active' si ya está activa
            icon.text('+'); // Cambia el ícono a '+'
            header.next('.collapsible-body').slideUp(); // Colapsa el cuerpo de la sección
        } else {
            $('.collapsible-header').removeClass('active'); // Quita 'active' de los demás encabezados
            $('.collapsible-header').find('.toggle-icon').text('+'); // Cambia todos los íconos a '+'
            $('.collapsible-body').slideUp(); // Colapsa todas las secciones abiertas
            
            header.addClass('active'); // Añade 'active' al encabezado actual
            icon.text('-'); // Cambia el ícono a '-'
            header.next('.collapsible-body').slideDown(); // Despliega el cuerpo de la sección actual
        }
    });
});
function redirectTo(url) {
    window.location.href = url;
}