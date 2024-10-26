// Scroll suave al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
  const scrollToBtn = document.querySelector('.arrowDownSection');
  const scrollToEl = document.getElementById('whySection');

  if (scrollToBtn && scrollToEl) { // Verifica que los elementos existen
    scrollToBtn.addEventListener('click', function (e) {
      e.preventDefault(); // Evita el comportamiento predeterminado del clic

      // Realiza el desplazamiento suave
      window.scrollTo({
        top: scrollToEl.offsetTop,
        behavior: 'smooth' // Desplazamiento suave
      });
    });
  }
});

/************************/
/*********BANNER*********/
/************************/
$(document).ready(function () {
  const tiempoDeCarga = 3000; // Duración del ciclo (banner + barra)

  function barraCargaBanner() {
    const barrita = $(".barraLoad");

    // Reinicia la barra y anima hasta el 100%
    barrita.stop().css("width", "0%").animate(
      { width: '100%' },
      tiempoDeCarga,
      'linear' // Animación suave y uniforme
    );
  }

  // Inicializa Slick Slider
  $('.bannerSlick').slick({
    slidesToShow: 1,
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: tiempoDeCarga,
    pauseOnHover: false,  // Evita que el autoplay se detenga al pasar el mouse
    pauseOnFocus: false,  // Evita que el autoplay se detenga al hacer clic
  });

  // Reinicia la barra después de cada cambio de slide
  $('.bannerSlick').on('afterChange', function () {
    barraCargaBanner(); 
  });

  // Ejecuta la barra al inicio
  barraCargaBanner();

  // Asegura que el autoplay se reinicie después de un clic en el slider
  $('.bannerSlick').on('click', function () {
    $(this).slick('slickPlay'); // Reinicia el autoplay
  });
});
