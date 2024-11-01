$(document).ready(function(){
    $('.modal').modal();
  });
$(document).ready(function() {
    // Inicializar slider principal
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        asNavFor: '.slider-nav'
    });

    // Inicializar miniaturas
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true,
        arrows: false,
        centerMode: true,
        variableWidth: true,
    });

    // Resaltar miniatura activa
    $('.slider-for').on('afterChange', function(event, slick, currentSlide) {
        $('.slider-nav .slick-slide').removeClass('slick-current'); // Quitar resalte previo
        $(`.slider-nav .slick-slide[data-slick-index="${currentSlide}"]`).addClass('slick-current'); // Resaltar actual
    });

    // resaltar la primera miniatura al cargar
    const currentSlide = $('.slider-for').slick('slickCurrentSlide');
    $(`.slider-nav .slick-slide[data-slick-index="${currentSlide}"]`).addClass('slick-current');
});


  document.addEventListener('DOMContentLoaded', function () {
    const scrollToBtn = document.querySelector('.arrowDownSection');
    const scrollToEl = document.querySelector('.containerCuadritosItems');
  
    if (scrollToBtn && scrollToEl) { 
      scrollToBtn.addEventListener('click', function (e) {
        e.preventDefault(); 
  
  
        window.scrollTo({
          top: scrollToEl.offsetTop,
          behavior: 'smooth' 
        });
      });
    }
  });