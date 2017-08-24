
//one page scroll
    // $('.wrapper').on('wheel',function(e){
    //     var deltaY = e.originalEvent.deltaY,
    //         section = $('.section'),
    //         activeSect = section.filter('.activeSection'),
    //         nextSection = activeSect.next(),
    //         display = $('.main-content');
    //         //булевы переменные называем с is.. 
    //         isScroll = false; //от бешенного скрола-тачпада 

    //     var perfomTransition = function (sectionEq) {
    //         var position = (sectionEq * -100) + '%';
    //         display.css({
    //             'transform' : 'translateY(' + position + ')'
    //         })

    //         section.eq(sectionEq).addClass('activeSection').siblings().removeClass('activeSection');

            
    //     }

    //     if (deltaY < 0) {//scroll buttom
    //         console.log('вниз');
    //         perfomTransition(2);
    //     }

    //     if(deltaY > 0) {//scroll top
    //         console.log('вверх');
    //     }

    //     // console.log(e.originalEvent.deltaY);
    
    // });

    $(function() {  //DOM content ready
        var section = $('.section'),
        display = $('.main-content');

        //функция премещения секции
        var perfomTransition = function (sectionEq) {

            var position = (sectionEq * -100) + '%';
                display.css({
                    'transform' : 'translateY(' + position + ')'
                })
                //нашли секцию по номеру.добавили класс.соедям.удалили класс
                section.eq(sectionEq).addClass('activeSection').siblings().removeClass('activeSection');
        }


        $('.wrapper').on('wheel',function(e){
            // console.log('wheeeel!'); // s1
            // console.log(e); //s2
            // console.log(e.originalEvent.deltaY); // s3
            var deltaY = e.originalEvent.deltaY;
            var activeSect = section.filter('.activeSection');
            var nextSection = activeSect.next();

            if (deltaY < 0) {//scroll wheel
                console.log('страница идёт вниз');
                console.log(deltaY);
            }

            if (deltaY > 0) {//scroll wheel
                console.log('страница идёт вверх');
                console.log(deltaY);
                // perfomTransition(2); //s4
                //вернёт значение индекса секции следующей за активной
                perfomTransition(nextSection.index()); 
            }

        });

    });