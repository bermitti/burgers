


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
    

    //СЕКЦИИ 6 КОММЕНТАРИИ
	var aboutOn = $('.comments-list__description-btn'),        
        aboutOff = $('.full-review__close'),  //значение кнопки закрытия полноэкранного меню 
        about = $('.full-review__wrapp');   //скрытая секция кнопки подробней

    $(aboutOn).on('click',function(e){
        e.preventDefault();
        $(about).toggleClass('popup-comm');
    });
    $(aboutOff).on('click',function(e){
        e.preventDefault();
        $(about).toggleClass('popup-comm');
    });

//предупреждение о не заполненной форме СЕКЦИЯ 7 ОФОРМЛЕНИЕ ЗАКАЗА 



// function validate_form()
// {
//     var formValues = $('.form__input.value');
//         valid = true;
        
//         if ( document.form.form__input.value == "" )
//         {
//                 alert ( "Пожалуйста заполните поля формы" );
//                 valid = false;
//         }

//         return valid;
// }

$('.form__submit').on('submit',function(e){
    e.preventDefault();

    var input = $('.form__input');

    input.each(function () {
        var $this = $(this);
    
       if ( $this.val() === "" ) {
            alert ( "Пожалуйста заполните поля формы" );
        }
    })
});


//подключение карты
	function init() {
        
            var	myMap = new ymaps.Map("map", {
                    center: [59.942037, 30.326865],
                    zoom: 12,
                    controls: []
                });
        
            myMap.behaviors.disable('drag');
            myMap.behaviors.disable('scrollZoom'); //  Добавляем функцию отключения перетаскивания карты мышью и ставим аргумент
        
            var coords = [
                [59.97181101008434,30.311234174697656], [59.94753632623325,30.384361921279684], 
                [59.90134799958657,30.313637433974986], [59.917383347823495,30.49903172108436]
            ],
                myCollection = new ymaps.GeoObjectCollection({}, {
                draggable: false,
                iconLayout: 'default#image',  //все метки - картинки
                iconImageHref: 'img/map/map-marker.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-26, -52]
            });
        
            for (var i = 0; i < coords.length; i++) {
                myCollection.add(new ymaps.Placemark(coords[i]));
            }
            myMap.geoObjects.add(myCollection);
            }
            ymaps.ready(init);

//one page scroll
    $('.wrapper').on('wheel',function(e){
        console.log(e.originalEvent.deltaY);
    
    });








});

