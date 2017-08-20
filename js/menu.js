
// полноэкранное меню -- ВСПЛЫВАШКА ДЛЯ ТЕЛЕФОНА --
// класс .active в burger-menu.scss
$(document).ready(function() {
	var menuOn = $('.intro-menu-link'),  //значение кнопки открытия полноэкранного меню 
		menuOff = $('.humburger-menu__close'),  //значение кнопки закрытия полноэкранного меню 
		menu = $('.humburger-menu');  //div-скрытая секция полноэкранного меню , в десктоп разрешении

$(menuOn).on('click',function(e){
    e.preventDefault();
    $(menu).toggleClass('active');
});
$(menuOff).on('click',function(e){
    e.preventDefault();
    $(menu).toggleClass('active');
});
