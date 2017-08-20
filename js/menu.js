
// полноэкранное меню -- ВСПЛЫВАШКА ДЛЯ ТЕЛЕФОНА --
// класс .active в burger-menu.scss

//значение кнопки открытия полноэкранного меню
//значение кнопки закрытия полноэкранного меню 
//div-скрытая секция полноэкранного меню , в десктоп разрешении
$(document).ready(function(){
	var menuOn = $('.intro-menu-link'),   
		menuOff = $('.humburger-menu__close'),  
		menu = $('.humburger-menu');  

        $(menuOn).on('click',function(e){
            e.preventDefault();
            $(menu).toggleClass('active');
        });
        $(menuOff).on('click',function(e){
            e.preventDefault();
            $(menu).toggleClass('active');
        });
    });