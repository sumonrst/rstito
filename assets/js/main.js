
$(window).on('scroll', function () {
    if($(window).scrollTop() > 100) {
        $('.header-area').addClass('sticky');
    }else{
        $('.header-area').removeClass('sticky');
    }
});