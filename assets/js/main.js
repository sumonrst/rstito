
$(document).ready(function(){
    $('.testimonial-slider').slick({
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
        arrows: true,
        slidesToShow: 1,
    });
    $('.testimonial-main').slick({
        prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
        arrows: true,
        slidesToShow: 2,
    });
  });



$(window).on('scroll', function () {
    if($(window).scrollTop() > 100) {
        $('.header-area').addClass('sticky');
    }else{
        $('.header-area').removeClass('sticky');
    }
    if($(window).scrollTop() > 5) {
        $('.header-to').addClass('header-top-bar');
    }else{
        $('.header-to').removeClass('header-top-bar');
    }
});