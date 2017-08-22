


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

        item.toggleClass('activeTeam'); //триггер для .activeTeam
        item.siblings().removeClass('activeTeam');  //у всех соседей
    });
    //вертикальный аккордеон -- СЕКЦИЯ 4 КОМАНДА -- вариант решения JQuery  в чём ошибка?
    //     $('.team-accordeon team-accordeon__title').on('click', f_acc);
    
    // function f_acc(){
    //     //$('#accordeon .ac-body').slideUp(1000);
    //     $('.team-accordeon .team-accordeon__content').not( $(this).next() ).slideUp(1000);
    //     $(this).next().slideToggle(2000);
    // }



    //вертикальный аккордеон -- СЕКЦИЯ 5 МЕНЮ -- 
	$('.food-accordeon__text').on('click', function(e){
		e.preventDefault();
        var item = $(e.target).parent().parent(); //всегда самое нижнее вложение

		item.toggleClass('food-accordeon__item_active');
		item.siblings().removeClass('food-accordeon__item_active');  //у всех соседей
	});
    //вертикальный аккордеон -- СЕКЦИЯ 5 МЕНЮ -- вариант 2
    // $(function(){
    //     $(".food-accordeon__item").on("click", function(e){
    //         e.preventDefault();
    
    //         var item = $(e.currentTarget),  // текущая li-шка
    //             itemSiblings = $(e.currentTarget).siblings(),  // все соседние li-шки
    //             activeClass = "food-accordeon__item_active",
    //             windowWidth = $(window).width(), // ширина окна для текушего момента
    //             popup = item.children(".food-accordeon__popup"),  // ребёнок текущей li-шки с классом .food-accordeon__popup
    //             popupSiblings = itemSiblings.children(".food-accordeon__popup"), // все дети li-шек с классом .food-accordeon__popup
    //             popupWidth = (windowWidth > 768) ? 560 : windowWidth - $(".food-accordeon__type").width()*3;
    //             $(".food-accordeon__popup").width(popupWidth-60);
    //         function closeMenu(){
    //             item.removeClass(activeClass);
    //             popup.width(0);  
    //         }
    //         function openMenu(){
    //             item.addClass(activeClass);
    //             itemSiblings.removeClass(activeClass);
    //             popup.width(popupWidth);
    //             popupSiblings.width(0);  
    //         }
    //         item.hasClass(activeClass) ? closeMenu() : openMenu();
    //     });
    // });
    
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: true,
        pause: 2000
    });
});

