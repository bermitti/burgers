
    $(function() {  //DOM content ready
        var section = $('.section'),
        display = $('.main-content'),
        isScroll = false; //Флаг от бешенного скрола//is - boolean

        //функция премещения секции
        var perfomTransition = function (sectionEq) {

            if(!isScroll) { //от бешенного скрола 
                isScroll = true; //не будет работать пока выполняется действие ниже

                var position = (sectionEq * -100) + '%';
                
                display.css({
                    'transform' : 'translateY(' + position + ')'
                })

                //нашли секцию по номеру.добавили класс.соедям.удалили класс
                section.eq(sectionEq).addClass('activeSection').siblings().removeClass('activeSection');

                setTimeout(function() {
                    isScroll = false; // присваиваем обратно как выполнится действие
                    $('.aside-nav__item').eq(sectionEq).addClass('aside-nav__item_active').siblings().removeClass('aside-nav__item_active');
                }, 1300);
            }
        }
    


        $('.wrapper').on('wheel',function(e){
            // console.log('wheeeel!'); // s1
            // console.log(e); //s2
            // console.log(e.originalEvent.deltaY); // s3
            var deltaY = e.originalEvent.deltaY;
            var activeSect = section.filter('.activeSection');
            var nextSection = activeSect.next();
            var prevSection = activeSect.prev();

            //если меньше нуля И длинна объекта не False, не равныа 0
            if (deltaY < 0 && prevSection.length) {//scroll wheel
                console.log('страница идёт вниз');
                console.log(deltaY);
                //вернёт значение индекса секции следующей перед активной
                //возвращает -1 если элемент не найден и ГЛЮК
                perfomTransition(prevSection.index()); 
            }

            //если больше нуля И длинна объекта не False, не равныа 0
            if (deltaY > 0 && nextSection.length) {//scroll wheel
                console.log('страница идёт вверх');
                console.log(deltaY);
                // perfomTransition(2); //s4
                //вернёт значение индекса секции следующей за активной
                perfomTransition(nextSection.index()); 
            }

        });

    });