$(function(){
    $('.main-content').fullpage({
      verticalCentered: false
    });
  });
  
  $(function () {
    return;
  
    var sections = $('.section'),
      display = $('.main-content'),
      inScroll = false;
  
    var md = new MobileDetect(window.navigator.userAgent),
      isMobile = md.mobile();
  
    var performTransition = function (sectionEq) {
      if (inScroll) return
  
      inScroll = true;
  
      var position = (sectionEq * -100) + '%';
  
      display.css({
        'transform': 'translateY(' + position + ')',
        '-webkit-transform': 'translateY(' + position + ')'
      })
  
      sections.eq(sectionEq).addClass('activeSection')
        .siblings().removeClass('activeSection');
  
      setTimeout(function () {
        inScroll = false;
        $('.fixed-menu__item').eq(sectionEq).addClass('activeSection')
          .siblings().removeClass('activeSection');
      }, 1300);
    }
  
    var defineSections = function (sections) {
      var activeSection = sections.filter('.activeSection');
      return {
        activeSection: activeSection,
        nextSection: activeSection.next(),
        prevSection: activeSection.prev()
      }
    }
  
    var scrollToSection = function (direction) {
      var section = defineSections(sections);
  
      if (direction == 'up' && section.nextSection.length) { // скроллим вверх
        performTransition(section.nextSection.index());
      }
  
      if (direction == 'down' && section.prevSection.length) { //скроллим вниз
        performTransition(section.prevSection.index());
      }
    }
  
    $('.wrapper').on({
      wheel: function (e) {
        var deltaY = e.originalEvent.deltaY;
        var direction = deltaY > 0
          ? 'up'
          : 'down';
  
        scrollToSection(direction)
      },
      touchmove: function (e) {
        e.preventDefault();
      }
    });
  
    $(document).on('keydown', function (e) {
      var section = defineSections(sections);
  
      switch (e.keyCode) {
        case 40: //вверх
          if (section.nextSection.length) {
            performTransition(section.nextSection.index());
          }
          break;
        case 38: //вниз
          if (section.prevSection.length) {
            performTransition(section.prevSection.index());
          }
          break;
      }
    });
  
    $('[data-scroll-to]').on('click touchstart', function (e) {
      e.preventDefault();
  
      var elem = $(e.target);
      var sectionNum = parseInt(elem.attr('data-scroll-to'));
      performTransition(sectionNum);
    });
  
    if (isMobile) {
      $(window).swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
          scrollToSection(direction);
        }
      });
    }
  
  });