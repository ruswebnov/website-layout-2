$(document).ready(function () {

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  });

  $('.services-detail__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    responsive: [{
      breakpoint: 544,
      settings: {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      }
    }, ]
  });


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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        }
      },
    ]
  });



});