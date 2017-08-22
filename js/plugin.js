
jQuery(document).ready(function(){

    var slider = $('.burgers-slider').bxSlider({
        speed : 1000,
        pager : false
    });

    $('.burger-slider__btn_next').on('click', function(e){
        e.preventDefault();
        slider.goToNextSlide();
    })

    $('.burger-slider__btn_prev').on('click', function(e){
        e.preventDefault();
        slider.goToPrevSlide();
    })

    
});
