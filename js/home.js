$(document).ready(function(){
  $('select').formSelect();
});
$(document).ready(function(){
  $('.modal').modal();
});
// Scroll suave al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
  const scrollToBtn = document.querySelector('.arrowDownSection');
  const scrollToEl = document.getElementById('whySection');

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

/************************/
/*********BANNER*********/
/************************/
$(document).ready(function () {
  const tiempoDeCarga = 3000; 

  function barraCargaBanner() {
    const barrita = $(".barraLoad");

    barrita.stop().css("width", "0%").animate(
      { width: '100%' },
      tiempoDeCarga,
      'linear' 
    );
  }

  $('.bannerSlick').slick({
    slidesToShow: 1,
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: tiempoDeCarga,
    pauseOnHover: false, 
    pauseOnFocus: false, 
  });

  $('.bannerSlick').on('afterChange', function () {
    barraCargaBanner(); 
  });

  barraCargaBanner();

  $('.bannerSlick').on('click', function () {
    $(this).slick('slickPlay'); 
  });
});


/************************/
/*******CLIENTES*********/
/************************/


$('.carouselClientes').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 4000,
});

