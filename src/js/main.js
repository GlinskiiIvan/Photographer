$(document).ready(function(){
    $('.gallery__slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        speed: 1000,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 2000,
        waitForAnimate: false,
        // centerMode: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                arrows: false,
              }
            },
            {
                breakpoint: 425,
                settings: {
                  slidesToShow: 1,
                  arrows: false,  
                }
              },
          ]
    });
});