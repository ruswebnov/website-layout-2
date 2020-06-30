$(document).ready(function () {
    

   /* =============Mobile-menu============= */
   $('.mobile-menu').on('click', function() {
    $(this).toggleClass('active');
    if($('nav').css('display') == 'none') {
      $('nav').slideDown();
    } else {
      $('nav').slideToggle();
    }
  });



  /* =============Slider Header ============= */
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });



  /*=============Sliders services-detail=============   */
  $('.services-detail__inner').slick({
    slidesToShow:8,
    slidesToScroll:1,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    asNavFor: '.services-detail__slider',
    useCSS: true,
  });



  $('.services-detail__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.services-detail__inner',
    responsive: [{
      breakpoint: 544,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      }
    }, 
  ]
  });



  /*============= Reviews slider============= */
  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: true,
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          autoplay: true,
           autoplaySpeed: 2000,
        }
      },
    ]
  });



 /* =============Fancybox reviews============= */
 $(".fancybox").fancybox({

  });



  new WOW().init();
});