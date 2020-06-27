$(document).ready(function(){

  $('.slider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    arrows:true,
    dots:true,
  });

  $('.services-detail__slider').slick({
    slidesToShow:1,
    slidesToScroll:1,
    dots:false,
    arrows:true,
  });

  $('.reviews__slider').slick({
    slidesToShow:3,
    slidesToScroll:1,
    dots:false,
    arrows:true,
  })
})
