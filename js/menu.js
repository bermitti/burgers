


$(document).ready(function(){


// полноэкранное меню -- ВСПЛЫВАШКА ДЛЯ ТЕЛЕФОНА --
// класс .active в burger-menu.scss
	var menuOn = $('.intro-menu-link'),         //значение кнопки открытия полноэкранного меню 
		menuOff = $('.humburger-menu__close'),  //значение кнопки закрытия полноэкранного меню 
		menu = $('.humburger-menu');            //div-скрытая секция полноэкранного меню , в десктоп разрешении

        $(menuOn).on('click',function(e){
            e.preventDefault();
            $(menu).toggleClass('active');
        });
        $(menuOff).on('click',function(e){
            e.preventDefault();
            $(menu).toggleClass('active');
        });

    //вертикальный аккордеон -- СЕКЦИЯ 4 КОМАНДА --
    $('.team-accordeon__title').on('click', function(e){
        e.preventDefault();
        var wrap = $(e.target).next(),    //.team-accordeon__content высота по умолчанию 0
            item = $(e.target).parent();  //.team-accordeon__item - li где навешиваем класс activeTeam

        item.toggleClass('activeTeam');
        item.siblings().removeClass('activeTeam');

        if (item.hasClass('activeTeam')) {
            $(wrap).css({ 'height' : auto });
        } else {
            $(wrap).css({ 'height' : 0 });
        } 
    });



    });