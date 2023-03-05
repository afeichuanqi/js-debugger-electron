/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    module.exports = cc11001100_hook("module.exports", factory(require('jquery')), "assign");
  } else {
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  var Slick = cc11001100_hook("Slick", window.Slick || {}, "var-init");
  Slick = cc11001100_hook("Slick", function () {
    var instanceUid = cc11001100_hook("instanceUid", 0, "var-init");
    function Slick(element, settings) {
      cc11001100_hook("element", element, "function-parameter");
      cc11001100_hook("settings", settings, "function-parameter");
      var _ = cc11001100_hook("_", this, "var-init"),
        dataSettings;
      _.defaults = cc11001100_hook("_.defaults", {
        accessibility: cc11001100_hook("accessibility", true, "object-key-init"),
        adaptiveHeight: cc11001100_hook("adaptiveHeight", false, "object-key-init"),
        appendArrows: cc11001100_hook("appendArrows", $(element), "object-key-init"),
        appendDots: cc11001100_hook("appendDots", $(element), "object-key-init"),
        arrows: cc11001100_hook("arrows", true, "object-key-init"),
        asNavFor: cc11001100_hook("asNavFor", null, "object-key-init"),
        prevArrow: cc11001100_hook("prevArrow", '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', "object-key-init"),
        nextArrow: cc11001100_hook("nextArrow", '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', "object-key-init"),
        autoplay: cc11001100_hook("autoplay", false, "object-key-init"),
        autoplaySpeed: cc11001100_hook("autoplaySpeed", 3000, "object-key-init"),
        centerMode: cc11001100_hook("centerMode", false, "object-key-init"),
        centerPadding: cc11001100_hook("centerPadding", '50px', "object-key-init"),
        cssEase: cc11001100_hook("cssEase", 'ease', "object-key-init"),
        customPaging: function (slider, i) {
          return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
        },
        dots: cc11001100_hook("dots", false, "object-key-init"),
        dotsClass: cc11001100_hook("dotsClass", 'slick-dots', "object-key-init"),
        draggable: cc11001100_hook("draggable", true, "object-key-init"),
        easing: cc11001100_hook("easing", 'linear', "object-key-init"),
        edgeFriction: cc11001100_hook("edgeFriction", 0.35, "object-key-init"),
        fade: cc11001100_hook("fade", false, "object-key-init"),
        focusOnSelect: cc11001100_hook("focusOnSelect", false, "object-key-init"),
        infinite: cc11001100_hook("infinite", true, "object-key-init"),
        initialSlide: cc11001100_hook("initialSlide", 0, "object-key-init"),
        lazyLoad: cc11001100_hook("lazyLoad", 'ondemand', "object-key-init"),
        mobileFirst: cc11001100_hook("mobileFirst", false, "object-key-init"),
        pauseOnHover: cc11001100_hook("pauseOnHover", true, "object-key-init"),
        pauseOnFocus: cc11001100_hook("pauseOnFocus", true, "object-key-init"),
        pauseOnDotsHover: cc11001100_hook("pauseOnDotsHover", false, "object-key-init"),
        respondTo: cc11001100_hook("respondTo", 'window', "object-key-init"),
        responsive: cc11001100_hook("responsive", null, "object-key-init"),
        rows: cc11001100_hook("rows", 1, "object-key-init"),
        rtl: cc11001100_hook("rtl", false, "object-key-init"),
        slide: cc11001100_hook("slide", '', "object-key-init"),
        slidesPerRow: cc11001100_hook("slidesPerRow", 1, "object-key-init"),
        slidesToShow: cc11001100_hook("slidesToShow", 1, "object-key-init"),
        slidesToScroll: cc11001100_hook("slidesToScroll", 1, "object-key-init"),
        speed: cc11001100_hook("speed", 500, "object-key-init"),
        swipe: cc11001100_hook("swipe", true, "object-key-init"),
        swipeToSlide: cc11001100_hook("swipeToSlide", false, "object-key-init"),
        touchMove: cc11001100_hook("touchMove", true, "object-key-init"),
        touchThreshold: cc11001100_hook("touchThreshold", 5, "object-key-init"),
        useCSS: cc11001100_hook("useCSS", true, "object-key-init"),
        useTransform: cc11001100_hook("useTransform", true, "object-key-init"),
        variableWidth: cc11001100_hook("variableWidth", false, "object-key-init"),
        vertical: cc11001100_hook("vertical", false, "object-key-init"),
        verticalSwiping: cc11001100_hook("verticalSwiping", false, "object-key-init"),
        waitForAnimate: cc11001100_hook("waitForAnimate", true, "object-key-init"),
        zIndex: cc11001100_hook("zIndex", 1000, "object-key-init")
      }, "assign");
      _.initials = cc11001100_hook("_.initials", {
        animating: cc11001100_hook("animating", false, "object-key-init"),
        dragging: cc11001100_hook("dragging", false, "object-key-init"),
        autoPlayTimer: cc11001100_hook("autoPlayTimer", null, "object-key-init"),
        currentDirection: cc11001100_hook("currentDirection", 0, "object-key-init"),
        currentLeft: cc11001100_hook("currentLeft", null, "object-key-init"),
        currentSlide: cc11001100_hook("currentSlide", 0, "object-key-init"),
        direction: cc11001100_hook("direction", 1, "object-key-init"),
        $dots: cc11001100_hook("$dots", null, "object-key-init"),
        listWidth: cc11001100_hook("listWidth", null, "object-key-init"),
        listHeight: cc11001100_hook("listHeight", null, "object-key-init"),
        loadIndex: cc11001100_hook("loadIndex", 0, "object-key-init"),
        $nextArrow: cc11001100_hook("$nextArrow", null, "object-key-init"),
        $prevArrow: cc11001100_hook("$prevArrow", null, "object-key-init"),
        slideCount: cc11001100_hook("slideCount", null, "object-key-init"),
        slideWidth: cc11001100_hook("slideWidth", null, "object-key-init"),
        $slideTrack: cc11001100_hook("$slideTrack", null, "object-key-init"),
        $slides: cc11001100_hook("$slides", null, "object-key-init"),
        sliding: cc11001100_hook("sliding", false, "object-key-init"),
        slideOffset: cc11001100_hook("slideOffset", 0, "object-key-init"),
        swipeLeft: cc11001100_hook("swipeLeft", null, "object-key-init"),
        $list: cc11001100_hook("$list", null, "object-key-init"),
        touchObject: {},
        transformsEnabled: cc11001100_hook("transformsEnabled", false, "object-key-init"),
        unslicked: cc11001100_hook("unslicked", false, "object-key-init")
      }, "assign");
      $.extend(_, _.initials);
      _.activeBreakpoint = cc11001100_hook("_.activeBreakpoint", null, "assign");
      _.animType = cc11001100_hook("_.animType", null, "assign");
      _.animProp = cc11001100_hook("_.animProp", null, "assign");
      _.breakpoints = cc11001100_hook("_.breakpoints", [], "assign");
      _.breakpointSettings = cc11001100_hook("_.breakpointSettings", [], "assign");
      _.cssTransitions = cc11001100_hook("_.cssTransitions", false, "assign");
      _.focussed = cc11001100_hook("_.focussed", false, "assign");
      _.interrupted = cc11001100_hook("_.interrupted", false, "assign");
      _.hidden = cc11001100_hook("_.hidden", 'hidden', "assign");
      _.paused = cc11001100_hook("_.paused", true, "assign");
      _.positionProp = cc11001100_hook("_.positionProp", null, "assign");
      _.respondTo = cc11001100_hook("_.respondTo", null, "assign");
      _.rowCount = cc11001100_hook("_.rowCount", 1, "assign");
      _.shouldClick = cc11001100_hook("_.shouldClick", true, "assign");
      _.$slider = cc11001100_hook("_.$slider", $(element), "assign");
      _.$slidesCache = cc11001100_hook("_.$slidesCache", null, "assign");
      _.transformType = cc11001100_hook("_.transformType", null, "assign");
      _.transitionType = cc11001100_hook("_.transitionType", null, "assign");
      _.visibilityChange = cc11001100_hook("_.visibilityChange", 'visibilitychange', "assign");
      _.windowWidth = cc11001100_hook("_.windowWidth", 0, "assign");
      _.windowTimer = cc11001100_hook("_.windowTimer", null, "assign");
      dataSettings = cc11001100_hook("dataSettings", $(element).data('slick') || {}, "assign");
      _.options = cc11001100_hook("_.options", $.extend({}, _.defaults, settings, dataSettings), "assign");
      _.currentSlide = cc11001100_hook("_.currentSlide", _.options.initialSlide, "assign");
      _.originalSettings = cc11001100_hook("_.originalSettings", _.options, "assign");
      if (typeof document.mozHidden !== 'undefined') {
        _.hidden = cc11001100_hook("_.hidden", 'mozHidden', "assign");
        _.visibilityChange = cc11001100_hook("_.visibilityChange", 'mozvisibilitychange', "assign");
      } else if (typeof document.webkitHidden !== 'undefined') {
        _.hidden = cc11001100_hook("_.hidden", 'webkitHidden', "assign");
        _.visibilityChange = cc11001100_hook("_.visibilityChange", 'webkitvisibilitychange', "assign");
      }
      _.autoPlay = cc11001100_hook("_.autoPlay", $.proxy(_.autoPlay, _), "assign");
      _.autoPlayClear = cc11001100_hook("_.autoPlayClear", $.proxy(_.autoPlayClear, _), "assign");
      _.autoPlayIterator = cc11001100_hook("_.autoPlayIterator", $.proxy(_.autoPlayIterator, _), "assign");
      _.changeSlide = cc11001100_hook("_.changeSlide", $.proxy(_.changeSlide, _), "assign");
      _.clickHandler = cc11001100_hook("_.clickHandler", $.proxy(_.clickHandler, _), "assign");
      _.selectHandler = cc11001100_hook("_.selectHandler", $.proxy(_.selectHandler, _), "assign");
      _.setPosition = cc11001100_hook("_.setPosition", $.proxy(_.setPosition, _), "assign");
      _.swipeHandler = cc11001100_hook("_.swipeHandler", $.proxy(_.swipeHandler, _), "assign");
      _.dragHandler = cc11001100_hook("_.dragHandler", $.proxy(_.dragHandler, _), "assign");
      _.keyHandler = cc11001100_hook("_.keyHandler", $.proxy(_.keyHandler, _), "assign");
      _.instanceUid = cc11001100_hook("_.instanceUid", instanceUid++, "assign");

      // A simple way to check for HTML strings
      // Strict HTML recognition (must start with <)
      // Extracted from jQuery v1.11 source
      _.htmlExpr = cc11001100_hook("_.htmlExpr", /^(?:\s*(<[\w\W]+>)[^>]*)$/, "assign");
      _.registerBreakpoints();
      _.init(true);
    }
    return Slick;
  }(), "assign");
  Slick.prototype.activateADA = cc11001100_hook("Slick.prototype.activateADA", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.$slideTrack.find('.slick-active').attr({
      'aria-hidden': cc11001100_hook('aria-hidden', 'false', "object-key-init")
    }).find('a, input, button, select').attr({
      'tabindex': cc11001100_hook('tabindex', '0', "object-key-init")
    });
  }, "assign");
  Slick.prototype.addSlide = cc11001100_hook("Slick.prototype.addSlide", Slick.prototype.slickAdd = cc11001100_hook("Slick.prototype.slickAdd", function (markup, index, addBefore) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (typeof index === 'boolean') {
      addBefore = cc11001100_hook("addBefore", index, "assign");
      index = cc11001100_hook("index", null, "assign");
    } else if (index < 0 || index >= _.slideCount) {
      return false;
    }
    _.unload();
    if (typeof index === 'number') {
      if (index === 0 && _.$slides.length === 0) {
        $(markup).appendTo(_.$slideTrack);
      } else if (addBefore) {
        $(markup).insertBefore(_.$slides.eq(index));
      } else {
        $(markup).insertAfter(_.$slides.eq(index));
      }
    } else {
      if (addBefore === true) {
        $(markup).prependTo(_.$slideTrack);
      } else {
        $(markup).appendTo(_.$slideTrack);
      }
    }
    _.$slides = cc11001100_hook("_.$slides", _.$slideTrack.children(this.options.slide), "assign");
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index);
    });
    _.$slidesCache = cc11001100_hook("_.$slidesCache", _.$slides, "assign");
    _.reinit();
  }, "assign"), "assign");
  Slick.prototype.animateHeight = cc11001100_hook("Slick.prototype.animateHeight", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = cc11001100_hook("targetHeight", _.$slides.eq(_.currentSlide).outerHeight(true), "var-init");
      _.$list.animate({
        height: cc11001100_hook("height", targetHeight, "object-key-init")
      }, _.options.speed);
    }
  }, "assign");
  Slick.prototype.animateSlide = cc11001100_hook("Slick.prototype.animateSlide", function (targetLeft, callback) {
    var animProps = cc11001100_hook("animProps", {}, "var-init"),
      _ = cc11001100_hook("_", this, "var-init");
    _.animateHeight();
    if (_.options.rtl === true && _.options.vertical === false) {
      targetLeft = cc11001100_hook("targetLeft", -targetLeft, "assign");
    }
    if (_.transformsEnabled === false) {
      if (_.options.vertical === false) {
        _.$slideTrack.animate({
          left: cc11001100_hook("left", targetLeft, "object-key-init")
        }, _.options.speed, _.options.easing, callback);
      } else {
        _.$slideTrack.animate({
          top: cc11001100_hook("top", targetLeft, "object-key-init")
        }, _.options.speed, _.options.easing, callback);
      }
    } else {
      if (_.cssTransitions === false) {
        if (_.options.rtl === true) {
          _.currentLeft = cc11001100_hook("_.currentLeft", -_.currentLeft, "assign");
        }
        $({
          animStart: cc11001100_hook("animStart", _.currentLeft, "object-key-init")
        }).animate({
          animStart: cc11001100_hook("animStart", targetLeft, "object-key-init")
        }, {
          duration: cc11001100_hook("duration", _.options.speed, "object-key-init"),
          easing: cc11001100_hook("easing", _.options.easing, "object-key-init"),
          step: function (now) {
            now = cc11001100_hook("now", Math.ceil(now), "assign");
            if (_.options.vertical === false) {
              animProps[_.animType] = cc11001100_hook("animProps[_.animType]", 'translate(' + now + 'px, 0px)', "assign");
              _.$slideTrack.css(animProps);
            } else {
              animProps[_.animType] = cc11001100_hook("animProps[_.animType]", 'translate(0px,' + now + 'px)', "assign");
              _.$slideTrack.css(animProps);
            }
          },
          complete: function () {
            if (callback) {
              callback.call();
            }
          }
        });
      } else {
        _.applyTransition();
        targetLeft = cc11001100_hook("targetLeft", Math.ceil(targetLeft), "assign");
        if (_.options.vertical === false) {
          animProps[_.animType] = cc11001100_hook("animProps[_.animType]", 'translate3d(' + targetLeft + 'px, 0px, 0px)', "assign");
        } else {
          animProps[_.animType] = cc11001100_hook("animProps[_.animType]", 'translate3d(0px,' + targetLeft + 'px, 0px)', "assign");
        }
        _.$slideTrack.css(animProps);
        if (callback) {
          setTimeout(function () {
            _.disableTransition();
            callback.call();
          }, _.options.speed);
        }
      }
    }
  }, "assign");
  Slick.prototype.getNavTarget = cc11001100_hook("Slick.prototype.getNavTarget", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      asNavFor = cc11001100_hook("asNavFor", _.options.asNavFor, "var-init");
    if (asNavFor && asNavFor !== null) {
      asNavFor = cc11001100_hook("asNavFor", $(asNavFor).not(_.$slider), "assign");
    }
    return asNavFor;
  }, "assign");
  Slick.prototype.asNavFor = cc11001100_hook("Slick.prototype.asNavFor", function (index) {
    var _ = cc11001100_hook("_", this, "var-init"),
      asNavFor = cc11001100_hook("asNavFor", _.getNavTarget(), "var-init");
    if (asNavFor !== null && typeof asNavFor === 'object') {
      asNavFor.each(function () {
        var target = cc11001100_hook("target", $(this).slick('getSlick'), "var-init");
        if (!target.unslicked) {
          target.slideHandler(index, true);
        }
      });
    }
  }, "assign");
  Slick.prototype.applyTransition = cc11001100_hook("Slick.prototype.applyTransition", function (slide) {
    var _ = cc11001100_hook("_", this, "var-init"),
      transition = cc11001100_hook("transition", {}, "var-init");
    if (_.options.fade === false) {
      transition[_.transitionType] = cc11001100_hook("transition[_.transitionType]", _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase, "assign");
    } else {
      transition[_.transitionType] = cc11001100_hook("transition[_.transitionType]", 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase, "assign");
    }
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  }, "assign");
  Slick.prototype.autoPlay = cc11001100_hook("Slick.prototype.autoPlay", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.autoPlayClear();
    if (_.slideCount > _.options.slidesToShow) {
      _.autoPlayTimer = cc11001100_hook("_.autoPlayTimer", setInterval(_.autoPlayIterator, _.options.autoplaySpeed), "assign");
    }
  }, "assign");
  Slick.prototype.autoPlayClear = cc11001100_hook("Slick.prototype.autoPlayClear", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.autoPlayTimer) {
      clearInterval(_.autoPlayTimer);
    }
  }, "assign");
  Slick.prototype.autoPlayIterator = cc11001100_hook("Slick.prototype.autoPlayIterator", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      slideTo = cc11001100_hook("slideTo", _.currentSlide + _.options.slidesToScroll, "var-init");
    if (!_.paused && !_.interrupted && !_.focussed) {
      if (_.options.infinite === false) {
        if (_.direction === 1 && _.currentSlide + 1 === _.slideCount - 1) {
          _.direction = cc11001100_hook("_.direction", 0, "assign");
        } else if (_.direction === 0) {
          slideTo = cc11001100_hook("slideTo", _.currentSlide - _.options.slidesToScroll, "assign");
          if (_.currentSlide - 1 === 0) {
            _.direction = cc11001100_hook("_.direction", 1, "assign");
          }
        }
      }
      _.slideHandler(slideTo);
    }
  }, "assign");
  Slick.prototype.buildArrows = cc11001100_hook("Slick.prototype.buildArrows", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.arrows === true) {
      _.$prevArrow = cc11001100_hook("_.$prevArrow", $(_.options.prevArrow).addClass('slick-arrow'), "assign");
      _.$nextArrow = cc11001100_hook("_.$nextArrow", $(_.options.nextArrow).addClass('slick-arrow'), "assign");
      if (_.slideCount > _.options.slidesToShow) {
        _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
        if (_.htmlExpr.test(_.options.prevArrow)) {
          _.$prevArrow.prependTo(_.options.appendArrows);
        }
        if (_.htmlExpr.test(_.options.nextArrow)) {
          _.$nextArrow.appendTo(_.options.appendArrows);
        }
        if (_.options.infinite !== true) {
          _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        }
      } else {
        _.$prevArrow.add(_.$nextArrow).addClass('slick-hidden').attr({
          'aria-disabled': cc11001100_hook('aria-disabled', 'true', "object-key-init"),
          'tabindex': cc11001100_hook('tabindex', '-1', "object-key-init")
        });
      }
    }
  }, "assign");
  Slick.prototype.buildDots = cc11001100_hook("Slick.prototype.buildDots", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      i,
      dot;
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$slider.addClass('slick-dotted');
      dot = cc11001100_hook("dot", $('<ul />').addClass(_.options.dotsClass), "assign");
      for (i = cc11001100_hook("i", 0, "assign"); i <= _.getDotCount(); i += cc11001100_hook("i", 1, "assign")) {
        dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
      }
      _.$dots = cc11001100_hook("_.$dots", dot.appendTo(_.options.appendDots), "assign");
      _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');
    }
  }, "assign");
  Slick.prototype.buildOut = cc11001100_hook("Slick.prototype.buildOut", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.$slides = cc11001100_hook("_.$slides", _.$slider.children(_.options.slide + ':not(.slick-cloned)').addClass('slick-slide'), "assign");
    _.slideCount = cc11001100_hook("_.slideCount", _.$slides.length, "assign");
    _.$slides.each(function (index, element) {
      $(element).attr('data-slick-index', index).data('originalStyling', $(element).attr('style') || '');
    });
    _.$slider.addClass('slick-slider');
    _.$slideTrack = cc11001100_hook("_.$slideTrack", _.slideCount === 0 ? $('<div class="slick-track"/>').appendTo(_.$slider) : _.$slides.wrapAll('<div class="slick-track"/>').parent(), "assign");
    _.$list = cc11001100_hook("_.$list", _.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), "assign");
    _.$slideTrack.css('opacity', 0);
    if (_.options.centerMode === true || _.options.swipeToSlide === true) {
      _.options.slidesToScroll = cc11001100_hook("_.options.slidesToScroll", 1, "assign");
    }
    $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');
    _.setupInfinite();
    _.buildArrows();
    _.buildDots();
    _.updateDots();
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    if (_.options.draggable === true) {
      _.$list.addClass('draggable');
    }
  }, "assign");
  Slick.prototype.buildRows = cc11001100_hook("Slick.prototype.buildRows", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      a,
      b,
      c,
      newSlides,
      numOfSlides,
      originalSlides,
      slidesPerSection;
    newSlides = cc11001100_hook("newSlides", document.createDocumentFragment(), "assign");
    originalSlides = cc11001100_hook("originalSlides", _.$slider.children(), "assign");
    if (_.options.rows > 1) {
      slidesPerSection = cc11001100_hook("slidesPerSection", _.options.slidesPerRow * _.options.rows, "assign");
      numOfSlides = cc11001100_hook("numOfSlides", Math.ceil(originalSlides.length / slidesPerSection), "assign");
      for (a = cc11001100_hook("a", 0, "assign"); a < numOfSlides; a++) {
        var slide = cc11001100_hook("slide", document.createElement('div'), "var-init");
        for (b = cc11001100_hook("b", 0, "assign"); b < _.options.rows; b++) {
          var row = cc11001100_hook("row", document.createElement('div'), "var-init");
          for (c = cc11001100_hook("c", 0, "assign"); c < _.options.slidesPerRow; c++) {
            var target = cc11001100_hook("target", a * slidesPerSection + (b * _.options.slidesPerRow + c), "var-init");
            if (originalSlides.get(target)) {
              row.appendChild(originalSlides.get(target));
            }
          }
          slide.appendChild(row);
        }
        newSlides.appendChild(slide);
      }
      _.$slider.empty().append(newSlides);
      _.$slider.children().children().children().css({
        'width': cc11001100_hook('width', 100 / _.options.slidesPerRow + '%', "object-key-init"),
        'display': cc11001100_hook('display', 'inline-block', "object-key-init")
      });
    }
  }, "assign");
  Slick.prototype.checkResponsive = cc11001100_hook("Slick.prototype.checkResponsive", function (initial, forceUpdate) {
    var _ = cc11001100_hook("_", this, "var-init"),
      breakpoint,
      targetBreakpoint,
      respondToWidth,
      triggerBreakpoint = cc11001100_hook("triggerBreakpoint", false, "var-init");
    var sliderWidth = cc11001100_hook("sliderWidth", _.$slider.width(), "var-init");
    var windowWidth = cc11001100_hook("windowWidth", window.innerWidth || $(window).width(), "var-init");
    if (_.respondTo === 'window') {
      respondToWidth = cc11001100_hook("respondToWidth", windowWidth, "assign");
    } else if (_.respondTo === 'slider') {
      respondToWidth = cc11001100_hook("respondToWidth", sliderWidth, "assign");
    } else if (_.respondTo === 'min') {
      respondToWidth = cc11001100_hook("respondToWidth", Math.min(windowWidth, sliderWidth), "assign");
    }
    if (_.options.responsive && _.options.responsive.length && _.options.responsive !== null) {
      targetBreakpoint = cc11001100_hook("targetBreakpoint", null, "assign");
      for (breakpoint in _.breakpoints) {
        if (_.breakpoints.hasOwnProperty(breakpoint)) {
          if (_.originalSettings.mobileFirst === false) {
            if (respondToWidth < _.breakpoints[breakpoint]) {
              targetBreakpoint = cc11001100_hook("targetBreakpoint", _.breakpoints[breakpoint], "assign");
            }
          } else {
            if (respondToWidth > _.breakpoints[breakpoint]) {
              targetBreakpoint = cc11001100_hook("targetBreakpoint", _.breakpoints[breakpoint], "assign");
            }
          }
        }
      }
      if (targetBreakpoint !== null) {
        if (_.activeBreakpoint !== null) {
          if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
            _.activeBreakpoint = cc11001100_hook("_.activeBreakpoint", targetBreakpoint, "assign");
            if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
              _.unslick(targetBreakpoint);
            } else {
              _.options = cc11001100_hook("_.options", $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]), "assign");
              if (initial === true) {
                _.currentSlide = cc11001100_hook("_.currentSlide", _.options.initialSlide, "assign");
              }
              _.refresh(initial);
            }
            triggerBreakpoint = cc11001100_hook("triggerBreakpoint", targetBreakpoint, "assign");
          }
        } else {
          _.activeBreakpoint = cc11001100_hook("_.activeBreakpoint", targetBreakpoint, "assign");
          if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
            _.unslick(targetBreakpoint);
          } else {
            _.options = cc11001100_hook("_.options", $.extend({}, _.originalSettings, _.breakpointSettings[targetBreakpoint]), "assign");
            if (initial === true) {
              _.currentSlide = cc11001100_hook("_.currentSlide", _.options.initialSlide, "assign");
            }
            _.refresh(initial);
          }
          triggerBreakpoint = cc11001100_hook("triggerBreakpoint", targetBreakpoint, "assign");
        }
      } else {
        if (_.activeBreakpoint !== null) {
          _.activeBreakpoint = cc11001100_hook("_.activeBreakpoint", null, "assign");
          _.options = cc11001100_hook("_.options", _.originalSettings, "assign");
          if (initial === true) {
            _.currentSlide = cc11001100_hook("_.currentSlide", _.options.initialSlide, "assign");
          }
          _.refresh(initial);
          triggerBreakpoint = cc11001100_hook("triggerBreakpoint", targetBreakpoint, "assign");
        }
      }

      // only trigger breakpoints during an actual break. not on initialize.
      if (!initial && triggerBreakpoint !== false) {
        _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
      }
    }
  }, "assign");
  Slick.prototype.changeSlide = cc11001100_hook("Slick.prototype.changeSlide", function (event, dontAnimate) {
    var _ = cc11001100_hook("_", this, "var-init"),
      $target = cc11001100_hook("$target", $(event.currentTarget), "var-init"),
      indexOffset,
      slideOffset,
      unevenOffset;

    // If target is a link, prevent default action.
    if ($target.is('a')) {
      event.preventDefault();
    }

    // If target is not the <li> element (ie: a child), find the <li>.
    if (!$target.is('li')) {
      $target = cc11001100_hook("$target", $target.closest('li'), "assign");
    }
    unevenOffset = cc11001100_hook("unevenOffset", _.slideCount % _.options.slidesToScroll !== 0, "assign");
    indexOffset = cc11001100_hook("indexOffset", unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll, "assign");
    switch (event.data.message) {
      case 'previous':
        slideOffset = cc11001100_hook("slideOffset", indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset, "assign");
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
        }
        break;
      case 'next':
        slideOffset = cc11001100_hook("slideOffset", indexOffset === 0 ? _.options.slidesToScroll : indexOffset, "assign");
        if (_.slideCount > _.options.slidesToShow) {
          _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
        }
        break;
      case 'index':
        var index = cc11001100_hook("index", event.data.index === 0 ? 0 : event.data.index || $target.index() * _.options.slidesToScroll, "var-init");
        _.slideHandler(_.checkNavigable(index), false, dontAnimate);
        $target.children().trigger('focus');
        break;
      default:
        return;
    }
  }, "assign");
  Slick.prototype.checkNavigable = cc11001100_hook("Slick.prototype.checkNavigable", function (index) {
    var _ = cc11001100_hook("_", this, "var-init"),
      navigables,
      prevNavigable;
    navigables = cc11001100_hook("navigables", _.getNavigableIndexes(), "assign");
    prevNavigable = cc11001100_hook("prevNavigable", 0, "assign");
    if (index > navigables[navigables.length - 1]) {
      index = cc11001100_hook("index", navigables[navigables.length - 1], "assign");
    } else {
      for (var n in navigables) {
        if (index < navigables[n]) {
          index = cc11001100_hook("index", prevNavigable, "assign");
          break;
        }
        prevNavigable = cc11001100_hook("prevNavigable", navigables[n], "assign");
      }
    }
    return index;
  }, "assign");
  Slick.prototype.cleanUpEvents = cc11001100_hook("Slick.prototype.cleanUpEvents", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.dots && _.$dots !== null) {
      $('li', _.$dots).off('click.slick', _.changeSlide).off('mouseenter.slick', $.proxy(_.interrupt, _, true)).off('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
    _.$slider.off('focus.slick blur.slick');
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
      _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
    }
    _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
    _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
    _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
    _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);
    _.$list.off('click.slick', _.clickHandler);
    $(document).off(_.visibilityChange, _.visibility);
    _.cleanUpSlideEvents();
    if (_.options.accessibility === true) {
      _.$list.off('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().off('click.slick', _.selectHandler);
    }
    $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);
    $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);
    $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);
    $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
  }, "assign");
  Slick.prototype.cleanUpSlideEvents = cc11001100_hook("Slick.prototype.cleanUpSlideEvents", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
    _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));
  }, "assign");
  Slick.prototype.cleanUpRows = cc11001100_hook("Slick.prototype.cleanUpRows", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      originalSlides;
    if (_.options.rows > 1) {
      originalSlides = cc11001100_hook("originalSlides", _.$slides.children().children(), "assign");
      originalSlides.removeAttr('style');
      _.$slider.empty().append(originalSlides);
    }
  }, "assign");
  Slick.prototype.clickHandler = cc11001100_hook("Slick.prototype.clickHandler", function (event) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.shouldClick === false) {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
    }
  }, "assign");
  Slick.prototype.destroy = cc11001100_hook("Slick.prototype.destroy", function (refresh) {
    var _ = cc11001100_hook("_", this, "var-init");
    _.autoPlayClear();
    _.touchObject = cc11001100_hook("_.touchObject", {}, "assign");
    _.cleanUpEvents();
    $('.slick-cloned', _.$slider).detach();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.$prevArrow.length) {
      _.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
      if (_.htmlExpr.test(_.options.prevArrow)) {
        _.$prevArrow.remove();
      }
    }
    if (_.$nextArrow && _.$nextArrow.length) {
      _.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
      if (_.htmlExpr.test(_.options.nextArrow)) {
        _.$nextArrow.remove();
      }
    }
    if (_.$slides) {
      _.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
        $(this).attr('style', $(this).data('originalStyling'));
      });
      _.$slideTrack.children(this.options.slide).detach();
      _.$slideTrack.detach();
      _.$list.detach();
      _.$slider.append(_.$slides);
    }
    _.cleanUpRows();
    _.$slider.removeClass('slick-slider');
    _.$slider.removeClass('slick-initialized');
    _.$slider.removeClass('slick-dotted');
    _.unslicked = cc11001100_hook("_.unslicked", true, "assign");
    if (!refresh) {
      _.$slider.trigger('destroy', [_]);
    }
  }, "assign");
  Slick.prototype.disableTransition = cc11001100_hook("Slick.prototype.disableTransition", function (slide) {
    var _ = cc11001100_hook("_", this, "var-init"),
      transition = cc11001100_hook("transition", {}, "var-init");
    transition[_.transitionType] = cc11001100_hook("transition[_.transitionType]", '', "assign");
    if (_.options.fade === false) {
      _.$slideTrack.css(transition);
    } else {
      _.$slides.eq(slide).css(transition);
    }
  }, "assign");
  Slick.prototype.fadeSlide = cc11001100_hook("Slick.prototype.fadeSlide", function (slideIndex, callback) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).css({
        zIndex: cc11001100_hook("zIndex", _.options.zIndex, "object-key-init")
      });
      _.$slides.eq(slideIndex).animate({
        opacity: cc11001100_hook("opacity", 1, "object-key-init")
      }, _.options.speed, _.options.easing, callback);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: cc11001100_hook("opacity", 1, "object-key-init"),
        zIndex: cc11001100_hook("zIndex", _.options.zIndex, "object-key-init")
      });
      if (callback) {
        setTimeout(function () {
          _.disableTransition(slideIndex);
          callback.call();
        }, _.options.speed);
      }
    }
  }, "assign");
  Slick.prototype.fadeSlideOut = cc11001100_hook("Slick.prototype.fadeSlideOut", function (slideIndex) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.cssTransitions === false) {
      _.$slides.eq(slideIndex).animate({
        opacity: cc11001100_hook("opacity", 0, "object-key-init"),
        zIndex: cc11001100_hook("zIndex", _.options.zIndex - 2, "object-key-init")
      }, _.options.speed, _.options.easing);
    } else {
      _.applyTransition(slideIndex);
      _.$slides.eq(slideIndex).css({
        opacity: cc11001100_hook("opacity", 0, "object-key-init"),
        zIndex: cc11001100_hook("zIndex", _.options.zIndex - 2, "object-key-init")
      });
    }
  }, "assign");
  Slick.prototype.filterSlides = cc11001100_hook("Slick.prototype.filterSlides", Slick.prototype.slickFilter = cc11001100_hook("Slick.prototype.slickFilter", function (filter) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (filter !== null) {
      _.$slidesCache = cc11001100_hook("_.$slidesCache", _.$slides, "assign");
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.filter(filter).appendTo(_.$slideTrack);
      _.reinit();
    }
  }, "assign"), "assign");
  Slick.prototype.focusHandler = cc11001100_hook("Slick.prototype.focusHandler", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.$slider.off('focus.slick blur.slick').on('focus.slick blur.slick', '*:not(.slick-arrow)', function (event) {
      event.stopImmediatePropagation();
      var $sf = cc11001100_hook("$sf", $(this), "var-init");
      setTimeout(function () {
        if (_.options.pauseOnFocus) {
          _.focussed = cc11001100_hook("_.focussed", $sf.is(':focus'), "assign");
          _.autoPlay();
        }
      }, 0);
    });
  }, "assign");
  Slick.prototype.getCurrent = cc11001100_hook("Slick.prototype.getCurrent", Slick.prototype.slickCurrentSlide = cc11001100_hook("Slick.prototype.slickCurrentSlide", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    return _.currentSlide;
  }, "assign"), "assign");
  Slick.prototype.getDotCount = cc11001100_hook("Slick.prototype.getDotCount", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    var breakPoint = cc11001100_hook("breakPoint", 0, "var-init");
    var counter = cc11001100_hook("counter", 0, "var-init");
    var pagerQty = cc11001100_hook("pagerQty", 0, "var-init");
    if (_.options.infinite === true) {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = cc11001100_hook("breakPoint", counter + _.options.slidesToScroll, "assign");
        counter += cc11001100_hook("counter", _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow, "assign");
      }
    } else if (_.options.centerMode === true) {
      pagerQty = cc11001100_hook("pagerQty", _.slideCount, "assign");
    } else if (!_.options.asNavFor) {
      pagerQty = cc11001100_hook("pagerQty", 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll), "assign");
    } else {
      while (breakPoint < _.slideCount) {
        ++pagerQty;
        breakPoint = cc11001100_hook("breakPoint", counter + _.options.slidesToScroll, "assign");
        counter += cc11001100_hook("counter", _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow, "assign");
      }
    }
    return pagerQty - 1;
  }, "assign");
  Slick.prototype.getLeft = cc11001100_hook("Slick.prototype.getLeft", function (slideIndex) {
    var _ = cc11001100_hook("_", this, "var-init"),
      targetLeft,
      verticalHeight,
      verticalOffset = cc11001100_hook("verticalOffset", 0, "var-init"),
      targetSlide;
    _.slideOffset = cc11001100_hook("_.slideOffset", 0, "assign");
    verticalHeight = cc11001100_hook("verticalHeight", _.$slides.first().outerHeight(true), "assign");
    if (_.options.infinite === true) {
      if (_.slideCount > _.options.slidesToShow) {
        _.slideOffset = cc11001100_hook("_.slideOffset", _.slideWidth * _.options.slidesToShow * -1, "assign");
        verticalOffset = cc11001100_hook("verticalOffset", verticalHeight * _.options.slidesToShow * -1, "assign");
      }
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
          if (slideIndex > _.slideCount) {
            _.slideOffset = cc11001100_hook("_.slideOffset", (_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth * -1, "assign");
            verticalOffset = cc11001100_hook("verticalOffset", (_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight * -1, "assign");
          } else {
            _.slideOffset = cc11001100_hook("_.slideOffset", _.slideCount % _.options.slidesToScroll * _.slideWidth * -1, "assign");
            verticalOffset = cc11001100_hook("verticalOffset", _.slideCount % _.options.slidesToScroll * verticalHeight * -1, "assign");
          }
        }
      }
    } else {
      if (slideIndex + _.options.slidesToShow > _.slideCount) {
        _.slideOffset = cc11001100_hook("_.slideOffset", (slideIndex + _.options.slidesToShow - _.slideCount) * _.slideWidth, "assign");
        verticalOffset = cc11001100_hook("verticalOffset", (slideIndex + _.options.slidesToShow - _.slideCount) * verticalHeight, "assign");
      }
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.slideOffset = cc11001100_hook("_.slideOffset", 0, "assign");
      verticalOffset = cc11001100_hook("verticalOffset", 0, "assign");
    }
    if (_.options.centerMode === true && _.options.infinite === true) {
      _.slideOffset += cc11001100_hook("_.slideOffset", _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth, "assign");
    } else if (_.options.centerMode === true) {
      _.slideOffset = cc11001100_hook("_.slideOffset", 0, "assign");
      _.slideOffset += cc11001100_hook("_.slideOffset", _.slideWidth * Math.floor(_.options.slidesToShow / 2), "assign");
    }
    if (_.options.vertical === false) {
      targetLeft = cc11001100_hook("targetLeft", slideIndex * _.slideWidth * -1 + _.slideOffset, "assign");
    } else {
      targetLeft = cc11001100_hook("targetLeft", slideIndex * verticalHeight * -1 + verticalOffset, "assign");
    }
    if (_.options.variableWidth === true) {
      if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
        targetSlide = cc11001100_hook("targetSlide", _.$slideTrack.children('.slick-slide').eq(slideIndex), "assign");
      } else {
        targetSlide = cc11001100_hook("targetSlide", _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow), "assign");
      }
      if (_.options.rtl === true) {
        if (targetSlide[0]) {
          targetLeft = cc11001100_hook("targetLeft", (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1, "assign");
        } else {
          targetLeft = cc11001100_hook("targetLeft", 0, "assign");
        }
      } else {
        targetLeft = cc11001100_hook("targetLeft", targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0, "assign");
      }
      if (_.options.centerMode === true) {
        if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
          targetSlide = cc11001100_hook("targetSlide", _.$slideTrack.children('.slick-slide').eq(slideIndex), "assign");
        } else {
          targetSlide = cc11001100_hook("targetSlide", _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1), "assign");
        }
        if (_.options.rtl === true) {
          if (targetSlide[0]) {
            targetLeft = cc11001100_hook("targetLeft", (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1, "assign");
          } else {
            targetLeft = cc11001100_hook("targetLeft", 0, "assign");
          }
        } else {
          targetLeft = cc11001100_hook("targetLeft", targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0, "assign");
        }
        targetLeft += cc11001100_hook("targetLeft", (_.$list.width() - targetSlide.outerWidth()) / 2, "assign");
      }
    }
    return targetLeft;
  }, "assign");
  Slick.prototype.getOption = cc11001100_hook("Slick.prototype.getOption", Slick.prototype.slickGetOption = cc11001100_hook("Slick.prototype.slickGetOption", function (option) {
    var _ = cc11001100_hook("_", this, "var-init");
    return _.options[option];
  }, "assign"), "assign");
  Slick.prototype.getNavigableIndexes = cc11001100_hook("Slick.prototype.getNavigableIndexes", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      breakPoint = cc11001100_hook("breakPoint", 0, "var-init"),
      counter = cc11001100_hook("counter", 0, "var-init"),
      indexes = cc11001100_hook("indexes", [], "var-init"),
      max;
    if (_.options.infinite === false) {
      max = cc11001100_hook("max", _.slideCount, "assign");
    } else {
      breakPoint = cc11001100_hook("breakPoint", _.options.slidesToScroll * -1, "assign");
      counter = cc11001100_hook("counter", _.options.slidesToScroll * -1, "assign");
      max = cc11001100_hook("max", _.slideCount * 2, "assign");
    }
    while (breakPoint < max) {
      indexes.push(breakPoint);
      breakPoint = cc11001100_hook("breakPoint", counter + _.options.slidesToScroll, "assign");
      counter += cc11001100_hook("counter", _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow, "assign");
    }
    return indexes;
  }, "assign");
  Slick.prototype.getSlick = cc11001100_hook("Slick.prototype.getSlick", function () {
    return this;
  }, "assign");
  Slick.prototype.getSlideCount = cc11001100_hook("Slick.prototype.getSlideCount", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      slidesTraversed,
      swipedSlide,
      centerOffset;
    centerOffset = cc11001100_hook("centerOffset", _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0, "assign");
    if (_.options.swipeToSlide === true) {
      _.$slideTrack.find('.slick-slide').each(function (index, slide) {
        if (slide.offsetLeft - centerOffset + $(slide).outerWidth() / 2 > _.swipeLeft * -1) {
          swipedSlide = cc11001100_hook("swipedSlide", slide, "assign");
          return false;
        }
      });
      slidesTraversed = cc11001100_hook("slidesTraversed", Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1, "assign");
      return slidesTraversed;
    } else {
      return _.options.slidesToScroll;
    }
  }, "assign");
  Slick.prototype.goTo = cc11001100_hook("Slick.prototype.goTo", Slick.prototype.slickGoTo = cc11001100_hook("Slick.prototype.slickGoTo", function (slide, dontAnimate) {
    var _ = cc11001100_hook("_", this, "var-init");
    _.changeSlide({
      data: {
        message: cc11001100_hook("message", 'index', "object-key-init"),
        index: cc11001100_hook("index", parseInt(slide), "object-key-init")
      }
    }, dontAnimate);
  }, "assign"), "assign");
  Slick.prototype.init = cc11001100_hook("Slick.prototype.init", function (creation) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (!$(_.$slider).hasClass('slick-initialized')) {
      $(_.$slider).addClass('slick-initialized');
      _.buildRows();
      _.buildOut();
      _.setProps();
      _.startLoad();
      _.loadSlider();
      _.initializeEvents();
      _.updateArrows();
      _.updateDots();
      _.checkResponsive(true);
      _.focusHandler();
    }
    if (creation) {
      _.$slider.trigger('init', [_]);
    }
    if (_.options.accessibility === true) {
      _.initADA();
    }
    if (_.options.autoplay) {
      _.paused = cc11001100_hook("_.paused", false, "assign");
      _.autoPlay();
    }
  }, "assign");
  Slick.prototype.initADA = cc11001100_hook("Slick.prototype.initADA", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
      'aria-hidden': cc11001100_hook('aria-hidden', 'true', "object-key-init"),
      'tabindex': cc11001100_hook('tabindex', '-1', "object-key-init")
    }).find('a, input, button, select').attr({
      'tabindex': cc11001100_hook('tabindex', '-1', "object-key-init")
    });
    _.$slideTrack.attr('role', 'listbox');
    _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
      $(this).attr({
        'role': cc11001100_hook('role', 'option', "object-key-init"),
        'aria-describedby': cc11001100_hook('aria-describedby', 'slick-slide' + _.instanceUid + i + '', "object-key-init")
      });
    });
    if (_.$dots !== null) {
      _.$dots.attr('role', 'tablist').find('li').each(function (i) {
        $(this).attr({
          'role': cc11001100_hook('role', 'presentation', "object-key-init"),
          'aria-selected': cc11001100_hook('aria-selected', 'false', "object-key-init"),
          'aria-controls': cc11001100_hook('aria-controls', 'navigation' + _.instanceUid + i + '', "object-key-init"),
          'id': cc11001100_hook('id', 'slick-slide' + _.instanceUid + i + '', "object-key-init")
        });
      }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar');
    }
    _.activateADA();
  }, "assign");
  Slick.prototype.initArrowEvents = cc11001100_hook("Slick.prototype.initArrowEvents", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.off('click.slick').on('click.slick', {
        message: cc11001100_hook("message", 'previous', "object-key-init")
      }, _.changeSlide);
      _.$nextArrow.off('click.slick').on('click.slick', {
        message: cc11001100_hook("message", 'next', "object-key-init")
      }, _.changeSlide);
    }
  }, "assign");
  Slick.prototype.initDotEvents = cc11001100_hook("Slick.prototype.initDotEvents", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      $('li', _.$dots).on('click.slick', {
        message: cc11001100_hook("message", 'index', "object-key-init")
      }, _.changeSlide);
    }
    if (_.options.dots === true && _.options.pauseOnDotsHover === true) {
      $('li', _.$dots).on('mouseenter.slick', $.proxy(_.interrupt, _, true)).on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  }, "assign");
  Slick.prototype.initSlideEvents = cc11001100_hook("Slick.prototype.initSlideEvents", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.pauseOnHover) {
      _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
      _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));
    }
  }, "assign");
  Slick.prototype.initializeEvents = cc11001100_hook("Slick.prototype.initializeEvents", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.initArrowEvents();
    _.initDotEvents();
    _.initSlideEvents();
    _.$list.on('touchstart.slick mousedown.slick', {
      action: cc11001100_hook("action", 'start', "object-key-init")
    }, _.swipeHandler);
    _.$list.on('touchmove.slick mousemove.slick', {
      action: cc11001100_hook("action", 'move', "object-key-init")
    }, _.swipeHandler);
    _.$list.on('touchend.slick mouseup.slick', {
      action: cc11001100_hook("action", 'end', "object-key-init")
    }, _.swipeHandler);
    _.$list.on('touchcancel.slick mouseleave.slick', {
      action: cc11001100_hook("action", 'end', "object-key-init")
    }, _.swipeHandler);
    _.$list.on('click.slick', _.clickHandler);
    $(document).on(_.visibilityChange, $.proxy(_.visibility, _));
    if (_.options.accessibility === true) {
      _.$list.on('keydown.slick', _.keyHandler);
    }
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));
    $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));
    $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);
    $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
    $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);
  }, "assign");
  Slick.prototype.initUI = cc11001100_hook("Slick.prototype.initUI", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.show();
      _.$nextArrow.show();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.show();
    }
  }, "assign");
  Slick.prototype.keyHandler = cc11001100_hook("Slick.prototype.keyHandler", function (event) {
    var _ = cc11001100_hook("_", this, "var-init");
    //Dont slide if the cursor is inside the form fields and arrow keys are pressed
    if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
      if (event.keyCode === 37 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: cc11001100_hook("message", _.options.rtl === true ? 'next' : 'previous', "object-key-init")
          }
        });
      } else if (event.keyCode === 39 && _.options.accessibility === true) {
        _.changeSlide({
          data: {
            message: cc11001100_hook("message", _.options.rtl === true ? 'previous' : 'next', "object-key-init")
          }
        });
      }
    }
  }, "assign");
  Slick.prototype.lazyLoad = cc11001100_hook("Slick.prototype.lazyLoad", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      loadRange,
      cloneRange,
      rangeStart,
      rangeEnd;
    function loadImages(imagesScope) {
      cc11001100_hook("imagesScope", imagesScope, "function-parameter");
      $('img[data-lazy]', imagesScope).each(function () {
        var image = cc11001100_hook("image", $(this), "var-init"),
          imageSource = cc11001100_hook("imageSource", $(this).attr('data-lazy'), "var-init"),
          imageToLoad = cc11001100_hook("imageToLoad", document.createElement('img'), "var-init");
        imageToLoad.onload = cc11001100_hook("imageToLoad.onload", function () {
          image.animate({
            opacity: cc11001100_hook("opacity", 0, "object-key-init")
          }, 100, function () {
            image.attr('src', imageSource).animate({
              opacity: cc11001100_hook("opacity", 1, "object-key-init")
            }, 200, function () {
              image.removeAttr('data-lazy').removeClass('slick-loading');
            });
            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
          });
        }, "assign");
        imageToLoad.onerror = cc11001100_hook("imageToLoad.onerror", function () {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
        }, "assign");
        imageToLoad.src = cc11001100_hook("imageToLoad.src", imageSource, "assign");
      });
    }
    if (_.options.centerMode === true) {
      if (_.options.infinite === true) {
        rangeStart = cc11001100_hook("rangeStart", _.currentSlide + (_.options.slidesToShow / 2 + 1), "assign");
        rangeEnd = cc11001100_hook("rangeEnd", rangeStart + _.options.slidesToShow + 2, "assign");
      } else {
        rangeStart = cc11001100_hook("rangeStart", Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1)), "assign");
        rangeEnd = cc11001100_hook("rangeEnd", 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide, "assign");
      }
    } else {
      rangeStart = cc11001100_hook("rangeStart", _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide, "assign");
      rangeEnd = cc11001100_hook("rangeEnd", Math.ceil(rangeStart + _.options.slidesToShow), "assign");
      if (_.options.fade === true) {
        if (rangeStart > 0) rangeStart--;
        if (rangeEnd <= _.slideCount) rangeEnd++;
      }
    }
    loadRange = cc11001100_hook("loadRange", _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd), "assign");
    loadImages(loadRange);
    if (_.slideCount <= _.options.slidesToShow) {
      cloneRange = cc11001100_hook("cloneRange", _.$slider.find('.slick-slide'), "assign");
      loadImages(cloneRange);
    } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
      cloneRange = cc11001100_hook("cloneRange", _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow), "assign");
      loadImages(cloneRange);
    } else if (_.currentSlide === 0) {
      cloneRange = cc11001100_hook("cloneRange", _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1), "assign");
      loadImages(cloneRange);
    }
  }, "assign");
  Slick.prototype.loadSlider = cc11001100_hook("Slick.prototype.loadSlider", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.setPosition();
    _.$slideTrack.css({
      opacity: cc11001100_hook("opacity", 1, "object-key-init")
    });
    _.$slider.removeClass('slick-loading');
    _.initUI();
    if (_.options.lazyLoad === 'progressive') {
      _.progressiveLazyLoad();
    }
  }, "assign");
  Slick.prototype.next = cc11001100_hook("Slick.prototype.next", Slick.prototype.slickNext = cc11001100_hook("Slick.prototype.slickNext", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.changeSlide({
      data: {
        message: cc11001100_hook("message", 'next', "object-key-init")
      }
    });
  }, "assign"), "assign");
  Slick.prototype.orientationChange = cc11001100_hook("Slick.prototype.orientationChange", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.checkResponsive();
    _.setPosition();
  }, "assign");
  Slick.prototype.pause = cc11001100_hook("Slick.prototype.pause", Slick.prototype.slickPause = cc11001100_hook("Slick.prototype.slickPause", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.autoPlayClear();
    _.paused = cc11001100_hook("_.paused", true, "assign");
  }, "assign"), "assign");
  Slick.prototype.play = cc11001100_hook("Slick.prototype.play", Slick.prototype.slickPlay = cc11001100_hook("Slick.prototype.slickPlay", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.autoPlay();
    _.options.autoplay = cc11001100_hook("_.options.autoplay", true, "assign");
    _.paused = cc11001100_hook("_.paused", false, "assign");
    _.focussed = cc11001100_hook("_.focussed", false, "assign");
    _.interrupted = cc11001100_hook("_.interrupted", false, "assign");
  }, "assign"), "assign");
  Slick.prototype.postSlide = cc11001100_hook("Slick.prototype.postSlide", function (index) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (!_.unslicked) {
      _.$slider.trigger('afterChange', [_, index]);
      _.animating = cc11001100_hook("_.animating", false, "assign");
      _.setPosition();
      _.swipeLeft = cc11001100_hook("_.swipeLeft", null, "assign");
      if (_.options.autoplay) {
        _.autoPlay();
      }
      if (_.options.accessibility === true) {
        _.initADA();
      }
    }
  }, "assign");
  Slick.prototype.prev = cc11001100_hook("Slick.prototype.prev", Slick.prototype.slickPrev = cc11001100_hook("Slick.prototype.slickPrev", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.changeSlide({
      data: {
        message: cc11001100_hook("message", 'previous', "object-key-init")
      }
    });
  }, "assign"), "assign");
  Slick.prototype.preventDefault = cc11001100_hook("Slick.prototype.preventDefault", function (event) {
    event.preventDefault();
  }, "assign");
  Slick.prototype.progressiveLazyLoad = cc11001100_hook("Slick.prototype.progressiveLazyLoad", function (tryCount) {
    tryCount = cc11001100_hook("tryCount", tryCount || 1, "assign");
    var _ = cc11001100_hook("_", this, "var-init"),
      $imgsToLoad = cc11001100_hook("$imgsToLoad", $('img[data-lazy]', _.$slider), "var-init"),
      image,
      imageSource,
      imageToLoad;
    if ($imgsToLoad.length) {
      image = cc11001100_hook("image", $imgsToLoad.first(), "assign");
      imageSource = cc11001100_hook("imageSource", image.attr('data-lazy'), "assign");
      imageToLoad = cc11001100_hook("imageToLoad", document.createElement('img'), "assign");
      imageToLoad.onload = cc11001100_hook("imageToLoad.onload", function () {
        image.attr('src', imageSource).removeAttr('data-lazy').removeClass('slick-loading');
        if (_.options.adaptiveHeight === true) {
          _.setPosition();
        }
        _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
        _.progressiveLazyLoad();
      }, "assign");
      imageToLoad.onerror = cc11001100_hook("imageToLoad.onerror", function () {
        if (tryCount < 3) {
          /**
           * try to load the image 3 times,
           * leave a slight delay so we don't get
           * servers blocking the request.
           */
          setTimeout(function () {
            _.progressiveLazyLoad(tryCount + 1);
          }, 500);
        } else {
          image.removeAttr('data-lazy').removeClass('slick-loading').addClass('slick-lazyload-error');
          _.$slider.trigger('lazyLoadError', [_, image, imageSource]);
          _.progressiveLazyLoad();
        }
      }, "assign");
      imageToLoad.src = cc11001100_hook("imageToLoad.src", imageSource, "assign");
    } else {
      _.$slider.trigger('allImagesLoaded', [_]);
    }
  }, "assign");
  Slick.prototype.refresh = cc11001100_hook("Slick.prototype.refresh", function (initializing) {
    var _ = cc11001100_hook("_", this, "var-init"),
      currentSlide,
      lastVisibleIndex;
    lastVisibleIndex = cc11001100_hook("lastVisibleIndex", _.slideCount - _.options.slidesToShow, "assign");

    // in non-infinite sliders, we don't want to go past the
    // last visible index.
    if (!_.options.infinite && _.currentSlide > lastVisibleIndex) {
      _.currentSlide = cc11001100_hook("_.currentSlide", lastVisibleIndex, "assign");
    }

    // if less slides than to show, go to start.
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = cc11001100_hook("_.currentSlide", 0, "assign");
    }
    currentSlide = cc11001100_hook("currentSlide", _.currentSlide, "assign");
    _.destroy(true);
    $.extend(_, _.initials, {
      currentSlide: cc11001100_hook("currentSlide", currentSlide, "object-key-init")
    });
    _.init();
    if (!initializing) {
      _.changeSlide({
        data: {
          message: cc11001100_hook("message", 'index', "object-key-init"),
          index: cc11001100_hook("index", currentSlide, "object-key-init")
        }
      }, false);
    }
  }, "assign");
  Slick.prototype.registerBreakpoints = cc11001100_hook("Slick.prototype.registerBreakpoints", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      breakpoint,
      currentBreakpoint,
      l,
      responsiveSettings = cc11001100_hook("responsiveSettings", _.options.responsive || null, "var-init");
    if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {
      _.respondTo = cc11001100_hook("_.respondTo", _.options.respondTo || 'window', "assign");
      for (breakpoint in responsiveSettings) {
        l = cc11001100_hook("l", _.breakpoints.length - 1, "assign");
        currentBreakpoint = cc11001100_hook("currentBreakpoint", responsiveSettings[breakpoint].breakpoint, "assign");
        if (responsiveSettings.hasOwnProperty(breakpoint)) {
          // loop through the breakpoints and cut out any existing
          // ones with the same breakpoint number, we don't want dupes.
          while (l >= 0) {
            if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
              _.breakpoints.splice(l, 1);
            }
            l--;
          }
          _.breakpoints.push(currentBreakpoint);
          _.breakpointSettings[currentBreakpoint] = cc11001100_hook("_.breakpointSettings[currentBreakpoint]", responsiveSettings[breakpoint].settings, "assign");
        }
      }
      _.breakpoints.sort(function (a, b) {
        return _.options.mobileFirst ? a - b : b - a;
      });
    }
  }, "assign");
  Slick.prototype.reinit = cc11001100_hook("Slick.prototype.reinit", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.$slides = cc11001100_hook("_.$slides", _.$slideTrack.children(_.options.slide).addClass('slick-slide'), "assign");
    _.slideCount = cc11001100_hook("_.slideCount", _.$slides.length, "assign");
    if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
      _.currentSlide = cc11001100_hook("_.currentSlide", _.currentSlide - _.options.slidesToScroll, "assign");
    }
    if (_.slideCount <= _.options.slidesToShow) {
      _.currentSlide = cc11001100_hook("_.currentSlide", 0, "assign");
    }
    _.registerBreakpoints();
    _.setProps();
    _.setupInfinite();
    _.buildArrows();
    _.updateArrows();
    _.initArrowEvents();
    _.buildDots();
    _.updateDots();
    _.initDotEvents();
    _.cleanUpSlideEvents();
    _.initSlideEvents();
    _.checkResponsive(false, true);
    if (_.options.focusOnSelect === true) {
      $(_.$slideTrack).children().on('click.slick', _.selectHandler);
    }
    _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);
    _.setPosition();
    _.focusHandler();
    _.paused = cc11001100_hook("_.paused", !_.options.autoplay, "assign");
    _.autoPlay();
    _.$slider.trigger('reInit', [_]);
  }, "assign");
  Slick.prototype.resize = cc11001100_hook("Slick.prototype.resize", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if ($(window).width() !== _.windowWidth) {
      clearTimeout(_.windowDelay);
      _.windowDelay = cc11001100_hook("_.windowDelay", window.setTimeout(function () {
        _.windowWidth = cc11001100_hook("_.windowWidth", $(window).width(), "assign");
        _.checkResponsive();
        if (!_.unslicked) {
          _.setPosition();
        }
      }, 50), "assign");
    }
  }, "assign");
  Slick.prototype.removeSlide = cc11001100_hook("Slick.prototype.removeSlide", Slick.prototype.slickRemove = cc11001100_hook("Slick.prototype.slickRemove", function (index, removeBefore, removeAll) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (typeof index === 'boolean') {
      removeBefore = cc11001100_hook("removeBefore", index, "assign");
      index = cc11001100_hook("index", removeBefore === true ? 0 : _.slideCount - 1, "assign");
    } else {
      index = cc11001100_hook("index", removeBefore === true ? --index : index, "assign");
    }
    if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
      return false;
    }
    _.unload();
    if (removeAll === true) {
      _.$slideTrack.children().remove();
    } else {
      _.$slideTrack.children(this.options.slide).eq(index).remove();
    }
    _.$slides = cc11001100_hook("_.$slides", _.$slideTrack.children(this.options.slide), "assign");
    _.$slideTrack.children(this.options.slide).detach();
    _.$slideTrack.append(_.$slides);
    _.$slidesCache = cc11001100_hook("_.$slidesCache", _.$slides, "assign");
    _.reinit();
  }, "assign"), "assign");
  Slick.prototype.setCSS = cc11001100_hook("Slick.prototype.setCSS", function (position) {
    var _ = cc11001100_hook("_", this, "var-init"),
      positionProps = cc11001100_hook("positionProps", {}, "var-init"),
      x,
      y;
    if (_.options.rtl === true) {
      position = cc11001100_hook("position", -position, "assign");
    }
    x = cc11001100_hook("x", _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px', "assign");
    y = cc11001100_hook("y", _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px', "assign");
    positionProps[_.positionProp] = cc11001100_hook("positionProps[_.positionProp]", position, "assign");
    if (_.transformsEnabled === false) {
      _.$slideTrack.css(positionProps);
    } else {
      positionProps = cc11001100_hook("positionProps", {}, "assign");
      if (_.cssTransitions === false) {
        positionProps[_.animType] = cc11001100_hook("positionProps[_.animType]", 'translate(' + x + ', ' + y + ')', "assign");
        _.$slideTrack.css(positionProps);
      } else {
        positionProps[_.animType] = cc11001100_hook("positionProps[_.animType]", 'translate3d(' + x + ', ' + y + ', 0px)', "assign");
        _.$slideTrack.css(positionProps);
      }
    }
  }, "assign");
  Slick.prototype.setDimensions = cc11001100_hook("Slick.prototype.setDimensions", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.vertical === false) {
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: cc11001100_hook("padding", '0px ' + _.options.centerPadding, "object-key-init")
        });
      }
    } else {
      _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
      if (_.options.centerMode === true) {
        _.$list.css({
          padding: cc11001100_hook("padding", _.options.centerPadding + ' 0px', "object-key-init")
        });
      }
    }
    _.listWidth = cc11001100_hook("_.listWidth", _.$list.width(), "assign");
    _.listHeight = cc11001100_hook("_.listHeight", _.$list.height(), "assign");
    if (_.options.vertical === false && _.options.variableWidth === false) {
      _.slideWidth = cc11001100_hook("_.slideWidth", Math.ceil(_.listWidth / _.options.slidesToShow), "assign");
      _.$slideTrack.width(Math.ceil(_.slideWidth * _.$slideTrack.children('.slick-slide').length));
    } else if (_.options.variableWidth === true) {
      _.$slideTrack.width(5000 * _.slideCount);
    } else {
      _.slideWidth = cc11001100_hook("_.slideWidth", Math.ceil(_.listWidth), "assign");
      _.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length));
    }
    var offset = cc11001100_hook("offset", _.$slides.first().outerWidth(true) - _.$slides.first().width(), "var-init");
    if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);
  }, "assign");
  Slick.prototype.setFade = cc11001100_hook("Slick.prototype.setFade", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      targetLeft;
    _.$slides.each(function (index, element) {
      targetLeft = cc11001100_hook("targetLeft", _.slideWidth * index * -1, "assign");
      if (_.options.rtl === true) {
        $(element).css({
          position: cc11001100_hook("position", 'relative', "object-key-init"),
          right: cc11001100_hook("right", targetLeft, "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          zIndex: cc11001100_hook("zIndex", _.options.zIndex - 2, "object-key-init"),
          opacity: cc11001100_hook("opacity", 0, "object-key-init")
        });
      } else {
        $(element).css({
          position: cc11001100_hook("position", 'relative', "object-key-init"),
          left: cc11001100_hook("left", targetLeft, "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          zIndex: cc11001100_hook("zIndex", _.options.zIndex - 2, "object-key-init"),
          opacity: cc11001100_hook("opacity", 0, "object-key-init")
        });
      }
    });
    _.$slides.eq(_.currentSlide).css({
      zIndex: cc11001100_hook("zIndex", _.options.zIndex - 1, "object-key-init"),
      opacity: cc11001100_hook("opacity", 1, "object-key-init")
    });
  }, "assign");
  Slick.prototype.setHeight = cc11001100_hook("Slick.prototype.setHeight", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
      var targetHeight = cc11001100_hook("targetHeight", _.$slides.eq(_.currentSlide).outerHeight(true), "var-init");
      _.$list.css('height', targetHeight);
    }
  }, "assign");
  Slick.prototype.setOption = cc11001100_hook("Slick.prototype.setOption", Slick.prototype.slickSetOption = cc11001100_hook("Slick.prototype.slickSetOption", function () {
    /**
     * accepts arguments in format of:
     *
     *  - for changing a single option's value:
     *     .slick("setOption", option, value, refresh )
     *
     *  - for changing a set of responsive options:
     *     .slick("setOption", 'responsive', [{}, ...], refresh )
     *
     *  - for updating multiple values at once (not responsive)
     *     .slick("setOption", { 'option': value, ... }, refresh )
     */

    var _ = cc11001100_hook("_", this, "var-init"),
      l,
      item,
      option,
      value,
      refresh = cc11001100_hook("refresh", false, "var-init"),
      type;
    if ($.type(arguments[0]) === 'object') {
      option = cc11001100_hook("option", arguments[0], "assign");
      refresh = cc11001100_hook("refresh", arguments[1], "assign");
      type = cc11001100_hook("type", 'multiple', "assign");
    } else if ($.type(arguments[0]) === 'string') {
      option = cc11001100_hook("option", arguments[0], "assign");
      value = cc11001100_hook("value", arguments[1], "assign");
      refresh = cc11001100_hook("refresh", arguments[2], "assign");
      if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {
        type = cc11001100_hook("type", 'responsive', "assign");
      } else if (typeof arguments[1] !== 'undefined') {
        type = cc11001100_hook("type", 'single', "assign");
      }
    }
    if (type === 'single') {
      _.options[option] = cc11001100_hook("_.options[option]", value, "assign");
    } else if (type === 'multiple') {
      $.each(option, function (opt, val) {
        _.options[opt] = cc11001100_hook("_.options[opt]", val, "assign");
      });
    } else if (type === 'responsive') {
      for (item in value) {
        if ($.type(_.options.responsive) !== 'array') {
          _.options.responsive = cc11001100_hook("_.options.responsive", [value[item]], "assign");
        } else {
          l = cc11001100_hook("l", _.options.responsive.length - 1, "assign");

          // loop through the responsive object and splice out duplicates.
          while (l >= 0) {
            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {
              _.options.responsive.splice(l, 1);
            }
            l--;
          }
          _.options.responsive.push(value[item]);
        }
      }
    }
    if (refresh) {
      _.unload();
      _.reinit();
    }
  }, "assign"), "assign");
  Slick.prototype.setPosition = cc11001100_hook("Slick.prototype.setPosition", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    _.setDimensions();
    _.setHeight();
    if (_.options.fade === false) {
      _.setCSS(_.getLeft(_.currentSlide));
    } else {
      _.setFade();
    }
    _.$slider.trigger('setPosition', [_]);
  }, "assign");
  Slick.prototype.setProps = cc11001100_hook("Slick.prototype.setProps", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      bodyStyle = cc11001100_hook("bodyStyle", document.body.style, "var-init");
    _.positionProp = cc11001100_hook("_.positionProp", _.options.vertical === true ? 'top' : 'left', "assign");
    if (_.positionProp === 'top') {
      _.$slider.addClass('slick-vertical');
    } else {
      _.$slider.removeClass('slick-vertical');
    }
    if (bodyStyle.WebkitTransition !== undefined || bodyStyle.MozTransition !== undefined || bodyStyle.msTransition !== undefined) {
      if (_.options.useCSS === true) {
        _.cssTransitions = cc11001100_hook("_.cssTransitions", true, "assign");
      }
    }
    if (_.options.fade) {
      if (typeof _.options.zIndex === 'number') {
        if (_.options.zIndex < 3) {
          _.options.zIndex = cc11001100_hook("_.options.zIndex", 3, "assign");
        }
      } else {
        _.options.zIndex = cc11001100_hook("_.options.zIndex", _.defaults.zIndex, "assign");
      }
    }
    if (bodyStyle.OTransform !== undefined) {
      _.animType = cc11001100_hook("_.animType", 'OTransform', "assign");
      _.transformType = cc11001100_hook("_.transformType", '-o-transform', "assign");
      _.transitionType = cc11001100_hook("_.transitionType", 'OTransition', "assign");
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = cc11001100_hook("_.animType", false, "assign");
    }
    if (bodyStyle.MozTransform !== undefined) {
      _.animType = cc11001100_hook("_.animType", 'MozTransform', "assign");
      _.transformType = cc11001100_hook("_.transformType", '-moz-transform', "assign");
      _.transitionType = cc11001100_hook("_.transitionType", 'MozTransition', "assign");
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = cc11001100_hook("_.animType", false, "assign");
    }
    if (bodyStyle.webkitTransform !== undefined) {
      _.animType = cc11001100_hook("_.animType", 'webkitTransform', "assign");
      _.transformType = cc11001100_hook("_.transformType", '-webkit-transform', "assign");
      _.transitionType = cc11001100_hook("_.transitionType", 'webkitTransition', "assign");
      if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = cc11001100_hook("_.animType", false, "assign");
    }
    if (bodyStyle.msTransform !== undefined) {
      _.animType = cc11001100_hook("_.animType", 'msTransform', "assign");
      _.transformType = cc11001100_hook("_.transformType", '-ms-transform', "assign");
      _.transitionType = cc11001100_hook("_.transitionType", 'msTransition', "assign");
      if (bodyStyle.msTransform === undefined) _.animType = cc11001100_hook("_.animType", false, "assign");
    }
    if (bodyStyle.transform !== undefined && _.animType !== false) {
      _.animType = cc11001100_hook("_.animType", 'transform', "assign");
      _.transformType = cc11001100_hook("_.transformType", 'transform', "assign");
      _.transitionType = cc11001100_hook("_.transitionType", 'transition', "assign");
    }
    _.transformsEnabled = cc11001100_hook("_.transformsEnabled", _.options.useTransform && _.animType !== null && _.animType !== false, "assign");
  }, "assign");
  Slick.prototype.setSlideClasses = cc11001100_hook("Slick.prototype.setSlideClasses", function (index) {
    var _ = cc11001100_hook("_", this, "var-init"),
      centerOffset,
      allSlides,
      indexOffset,
      remainder;
    allSlides = cc11001100_hook("allSlides", _.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true'), "assign");
    _.$slides.eq(index).addClass('slick-current');
    if (_.options.centerMode === true) {
      centerOffset = cc11001100_hook("centerOffset", Math.floor(_.options.slidesToShow / 2), "assign");
      if (_.options.infinite === true) {
        if (index >= centerOffset && index <= _.slideCount - 1 - centerOffset) {
          _.$slides.slice(index - centerOffset, index + centerOffset + 1).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          indexOffset = cc11001100_hook("indexOffset", _.options.slidesToShow + index, "assign");
          allSlides.slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2).addClass('slick-active').attr('aria-hidden', 'false');
        }
        if (index === 0) {
          allSlides.eq(allSlides.length - 1 - _.options.slidesToShow).addClass('slick-center');
        } else if (index === _.slideCount - 1) {
          allSlides.eq(_.options.slidesToShow).addClass('slick-center');
        }
      }
      _.$slides.eq(index).addClass('slick-center');
    } else {
      if (index >= 0 && index <= _.slideCount - _.options.slidesToShow) {
        _.$slides.slice(index, index + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
      } else if (allSlides.length <= _.options.slidesToShow) {
        allSlides.addClass('slick-active').attr('aria-hidden', 'false');
      } else {
        remainder = cc11001100_hook("remainder", _.slideCount % _.options.slidesToShow, "assign");
        indexOffset = cc11001100_hook("indexOffset", _.options.infinite === true ? _.options.slidesToShow + index : index, "assign");
        if (_.options.slidesToShow == _.options.slidesToScroll && _.slideCount - index < _.options.slidesToShow) {
          allSlides.slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder).addClass('slick-active').attr('aria-hidden', 'false');
        } else {
          allSlides.slice(indexOffset, indexOffset + _.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false');
        }
      }
    }
    if (_.options.lazyLoad === 'ondemand') {
      _.lazyLoad();
    }
  }, "assign");
  Slick.prototype.setupInfinite = cc11001100_hook("Slick.prototype.setupInfinite", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      i,
      slideIndex,
      infiniteCount;
    if (_.options.fade === true) {
      _.options.centerMode = cc11001100_hook("_.options.centerMode", false, "assign");
    }
    if (_.options.infinite === true && _.options.fade === false) {
      slideIndex = cc11001100_hook("slideIndex", null, "assign");
      if (_.slideCount > _.options.slidesToShow) {
        if (_.options.centerMode === true) {
          infiniteCount = cc11001100_hook("infiniteCount", _.options.slidesToShow + 1, "assign");
        } else {
          infiniteCount = cc11001100_hook("infiniteCount", _.options.slidesToShow, "assign");
        }
        for (i = cc11001100_hook("i", _.slideCount, "assign"); i > _.slideCount - infiniteCount; i -= cc11001100_hook("i", 1, "assign")) {
          slideIndex = cc11001100_hook("slideIndex", i - 1, "assign");
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex - _.slideCount).prependTo(_.$slideTrack).addClass('slick-cloned');
        }
        for (i = cc11001100_hook("i", 0, "assign"); i < infiniteCount; i += cc11001100_hook("i", 1, "assign")) {
          slideIndex = cc11001100_hook("slideIndex", i, "assign");
          $(_.$slides[slideIndex]).clone(true).attr('id', '').attr('data-slick-index', slideIndex + _.slideCount).appendTo(_.$slideTrack).addClass('slick-cloned');
        }
        _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
          $(this).attr('id', '');
        });
      }
    }
  }, "assign");
  Slick.prototype.interrupt = cc11001100_hook("Slick.prototype.interrupt", function (toggle) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (!toggle) {
      _.autoPlay();
    }
    _.interrupted = cc11001100_hook("_.interrupted", toggle, "assign");
  }, "assign");
  Slick.prototype.selectHandler = cc11001100_hook("Slick.prototype.selectHandler", function (event) {
    var _ = cc11001100_hook("_", this, "var-init");
    var targetElement = cc11001100_hook("targetElement", $(event.target).is('.slick-slide') ? $(event.target) : $(event.target).parents('.slick-slide'), "var-init");
    var index = cc11001100_hook("index", parseInt(targetElement.attr('data-slick-index')), "var-init");
    if (!index) index = cc11001100_hook("index", 0, "assign");
    if (_.slideCount <= _.options.slidesToShow) {
      _.setSlideClasses(index);
      _.asNavFor(index);
      return;
    }
    _.slideHandler(index);
  }, "assign");
  Slick.prototype.slideHandler = cc11001100_hook("Slick.prototype.slideHandler", function (index, sync, dontAnimate) {
    var targetSlide,
      animSlide,
      oldSlide,
      slideLeft,
      targetLeft = cc11001100_hook("targetLeft", null, "var-init"),
      _ = cc11001100_hook("_", this, "var-init"),
      navTarget;
    sync = cc11001100_hook("sync", sync || false, "assign");
    if (_.animating === true && _.options.waitForAnimate === true) {
      return;
    }
    if (_.options.fade === true && _.currentSlide === index) {
      return;
    }
    if (_.slideCount <= _.options.slidesToShow) {
      return;
    }
    if (sync === false) {
      _.asNavFor(index);
    }
    targetSlide = cc11001100_hook("targetSlide", index, "assign");
    targetLeft = cc11001100_hook("targetLeft", _.getLeft(targetSlide), "assign");
    slideLeft = cc11001100_hook("slideLeft", _.getLeft(_.currentSlide), "assign");
    _.currentLeft = cc11001100_hook("_.currentLeft", _.swipeLeft === null ? slideLeft : _.swipeLeft, "assign");
    if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = cc11001100_hook("targetSlide", _.currentSlide, "assign");
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > _.slideCount - _.options.slidesToScroll)) {
      if (_.options.fade === false) {
        targetSlide = cc11001100_hook("targetSlide", _.currentSlide, "assign");
        if (dontAnimate !== true) {
          _.animateSlide(slideLeft, function () {
            _.postSlide(targetSlide);
          });
        } else {
          _.postSlide(targetSlide);
        }
      }
      return;
    }
    if (_.options.autoplay) {
      clearInterval(_.autoPlayTimer);
    }
    if (targetSlide < 0) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = cc11001100_hook("animSlide", _.slideCount - _.slideCount % _.options.slidesToScroll, "assign");
      } else {
        animSlide = cc11001100_hook("animSlide", _.slideCount + targetSlide, "assign");
      }
    } else if (targetSlide >= _.slideCount) {
      if (_.slideCount % _.options.slidesToScroll !== 0) {
        animSlide = cc11001100_hook("animSlide", 0, "assign");
      } else {
        animSlide = cc11001100_hook("animSlide", targetSlide - _.slideCount, "assign");
      }
    } else {
      animSlide = cc11001100_hook("animSlide", targetSlide, "assign");
    }
    _.animating = cc11001100_hook("_.animating", true, "assign");
    _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);
    oldSlide = cc11001100_hook("oldSlide", _.currentSlide, "assign");
    _.currentSlide = cc11001100_hook("_.currentSlide", animSlide, "assign");
    _.setSlideClasses(_.currentSlide);
    if (_.options.asNavFor) {
      navTarget = cc11001100_hook("navTarget", _.getNavTarget(), "assign");
      navTarget = cc11001100_hook("navTarget", navTarget.slick('getSlick'), "assign");
      if (navTarget.slideCount <= navTarget.options.slidesToShow) {
        navTarget.setSlideClasses(_.currentSlide);
      }
    }
    _.updateDots();
    _.updateArrows();
    if (_.options.fade === true) {
      if (dontAnimate !== true) {
        _.fadeSlideOut(oldSlide);
        _.fadeSlide(animSlide, function () {
          _.postSlide(animSlide);
        });
      } else {
        _.postSlide(animSlide);
      }
      _.animateHeight();
      return;
    }
    if (dontAnimate !== true) {
      _.animateSlide(targetLeft, function () {
        _.postSlide(animSlide);
      });
    } else {
      _.postSlide(animSlide);
    }
  }, "assign");
  Slick.prototype.startLoad = cc11001100_hook("Slick.prototype.startLoad", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
      _.$prevArrow.hide();
      _.$nextArrow.hide();
    }
    if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
      _.$dots.hide();
    }
    _.$slider.addClass('slick-loading');
  }, "assign");
  Slick.prototype.swipeDirection = cc11001100_hook("Slick.prototype.swipeDirection", function () {
    var xDist,
      yDist,
      r,
      swipeAngle,
      _ = cc11001100_hook("_", this, "var-init");
    xDist = cc11001100_hook("xDist", _.touchObject.startX - _.touchObject.curX, "assign");
    yDist = cc11001100_hook("yDist", _.touchObject.startY - _.touchObject.curY, "assign");
    r = cc11001100_hook("r", Math.atan2(yDist, xDist), "assign");
    swipeAngle = cc11001100_hook("swipeAngle", Math.round(r * 180 / Math.PI), "assign");
    if (swipeAngle < 0) {
      swipeAngle = cc11001100_hook("swipeAngle", 360 - Math.abs(swipeAngle), "assign");
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return _.options.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return _.options.rtl === false ? 'left' : 'right';
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return _.options.rtl === false ? 'right' : 'left';
    }
    if (_.options.verticalSwiping === true) {
      if (swipeAngle >= 35 && swipeAngle <= 135) {
        return 'down';
      } else {
        return 'up';
      }
    }
    return 'vertical';
  }, "assign");
  Slick.prototype.swipeEnd = cc11001100_hook("Slick.prototype.swipeEnd", function (event) {
    var _ = cc11001100_hook("_", this, "var-init"),
      slideCount,
      direction;
    _.dragging = cc11001100_hook("_.dragging", false, "assign");
    _.interrupted = cc11001100_hook("_.interrupted", false, "assign");
    _.shouldClick = cc11001100_hook("_.shouldClick", _.touchObject.swipeLength > 10 ? false : true, "assign");
    if (_.touchObject.curX === undefined) {
      return false;
    }
    if (_.touchObject.edgeHit === true) {
      _.$slider.trigger('edge', [_, _.swipeDirection()]);
    }
    if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {
      direction = cc11001100_hook("direction", _.swipeDirection(), "assign");
      switch (direction) {
        case 'left':
        case 'down':
          slideCount = cc11001100_hook("slideCount", _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount(), "assign");
          _.currentDirection = cc11001100_hook("_.currentDirection", 0, "assign");
          break;
        case 'right':
        case 'up':
          slideCount = cc11001100_hook("slideCount", _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount(), "assign");
          _.currentDirection = cc11001100_hook("_.currentDirection", 1, "assign");
          break;
        default:
      }
      if (direction != 'vertical') {
        _.slideHandler(slideCount);
        _.touchObject = cc11001100_hook("_.touchObject", {}, "assign");
        _.$slider.trigger('swipe', [_, direction]);
      }
    } else {
      if (_.touchObject.startX !== _.touchObject.curX) {
        _.slideHandler(_.currentSlide);
        _.touchObject = cc11001100_hook("_.touchObject", {}, "assign");
      }
    }
  }, "assign");
  Slick.prototype.swipeHandler = cc11001100_hook("Slick.prototype.swipeHandler", function (event) {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.swipe === false || 'ontouchend' in document && _.options.swipe === false) {
      return;
    } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
      return;
    }
    _.touchObject.fingerCount = cc11001100_hook("_.touchObject.fingerCount", event.originalEvent && event.originalEvent.touches !== undefined ? event.originalEvent.touches.length : 1, "assign");
    _.touchObject.minSwipe = cc11001100_hook("_.touchObject.minSwipe", _.listWidth / _.options.touchThreshold, "assign");
    if (_.options.verticalSwiping === true) {
      _.touchObject.minSwipe = cc11001100_hook("_.touchObject.minSwipe", _.listHeight / _.options.touchThreshold, "assign");
    }
    switch (event.data.action) {
      case 'start':
        _.swipeStart(event);
        break;
      case 'move':
        _.swipeMove(event);
        break;
      case 'end':
        _.swipeEnd(event);
        break;
    }
  }, "assign");
  Slick.prototype.swipeMove = cc11001100_hook("Slick.prototype.swipeMove", function (event) {
    var _ = cc11001100_hook("_", this, "var-init"),
      edgeWasHit = cc11001100_hook("edgeWasHit", false, "var-init"),
      curLeft,
      swipeDirection,
      swipeLength,
      positionOffset,
      touches;
    touches = cc11001100_hook("touches", event.originalEvent !== undefined ? event.originalEvent.touches : null, "assign");
    if (!_.dragging || touches && touches.length !== 1) {
      return false;
    }
    curLeft = cc11001100_hook("curLeft", _.getLeft(_.currentSlide), "assign");
    _.touchObject.curX = cc11001100_hook("_.touchObject.curX", touches !== undefined ? touches[0].pageX : event.clientX, "assign");
    _.touchObject.curY = cc11001100_hook("_.touchObject.curY", touches !== undefined ? touches[0].pageY : event.clientY, "assign");
    _.touchObject.swipeLength = cc11001100_hook("_.touchObject.swipeLength", Math.round(Math.sqrt(Math.pow(_.touchObject.curX - _.touchObject.startX, 2))), "assign");
    if (_.options.verticalSwiping === true) {
      _.touchObject.swipeLength = cc11001100_hook("_.touchObject.swipeLength", Math.round(Math.sqrt(Math.pow(_.touchObject.curY - _.touchObject.startY, 2))), "assign");
    }
    swipeDirection = cc11001100_hook("swipeDirection", _.swipeDirection(), "assign");
    if (swipeDirection === 'vertical') {
      return;
    }
    if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
      event.preventDefault();
    }
    positionOffset = cc11001100_hook("positionOffset", (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1), "assign");
    if (_.options.verticalSwiping === true) {
      positionOffset = cc11001100_hook("positionOffset", _.touchObject.curY > _.touchObject.startY ? 1 : -1, "assign");
    }
    swipeLength = cc11001100_hook("swipeLength", _.touchObject.swipeLength, "assign");
    _.touchObject.edgeHit = cc11001100_hook("_.touchObject.edgeHit", false, "assign");
    if (_.options.infinite === false) {
      if (_.currentSlide === 0 && swipeDirection === 'right' || _.currentSlide >= _.getDotCount() && swipeDirection === 'left') {
        swipeLength = cc11001100_hook("swipeLength", _.touchObject.swipeLength * _.options.edgeFriction, "assign");
        _.touchObject.edgeHit = cc11001100_hook("_.touchObject.edgeHit", true, "assign");
      }
    }
    if (_.options.vertical === false) {
      _.swipeLeft = cc11001100_hook("_.swipeLeft", curLeft + swipeLength * positionOffset, "assign");
    } else {
      _.swipeLeft = cc11001100_hook("_.swipeLeft", curLeft + swipeLength * (_.$list.height() / _.listWidth) * positionOffset, "assign");
    }
    if (_.options.verticalSwiping === true) {
      _.swipeLeft = cc11001100_hook("_.swipeLeft", curLeft + swipeLength * positionOffset, "assign");
    }
    if (_.options.fade === true || _.options.touchMove === false) {
      return false;
    }
    if (_.animating === true) {
      _.swipeLeft = cc11001100_hook("_.swipeLeft", null, "assign");
      return false;
    }
    _.setCSS(_.swipeLeft);
  }, "assign");
  Slick.prototype.swipeStart = cc11001100_hook("Slick.prototype.swipeStart", function (event) {
    var _ = cc11001100_hook("_", this, "var-init"),
      touches;
    _.interrupted = cc11001100_hook("_.interrupted", true, "assign");
    if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
      _.touchObject = cc11001100_hook("_.touchObject", {}, "assign");
      return false;
    }
    if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
      touches = cc11001100_hook("touches", event.originalEvent.touches[0], "assign");
    }
    _.touchObject.startX = cc11001100_hook("_.touchObject.startX", _.touchObject.curX = cc11001100_hook("_.touchObject.curX", touches !== undefined ? touches.pageX : event.clientX, "assign"), "assign");
    _.touchObject.startY = cc11001100_hook("_.touchObject.startY", _.touchObject.curY = cc11001100_hook("_.touchObject.curY", touches !== undefined ? touches.pageY : event.clientY, "assign"), "assign");
    _.dragging = cc11001100_hook("_.dragging", true, "assign");
  }, "assign");
  Slick.prototype.unfilterSlides = cc11001100_hook("Slick.prototype.unfilterSlides", Slick.prototype.slickUnfilter = cc11001100_hook("Slick.prototype.slickUnfilter", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.$slidesCache !== null) {
      _.unload();
      _.$slideTrack.children(this.options.slide).detach();
      _.$slidesCache.appendTo(_.$slideTrack);
      _.reinit();
    }
  }, "assign"), "assign");
  Slick.prototype.unload = cc11001100_hook("Slick.prototype.unload", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    $('.slick-cloned', _.$slider).remove();
    if (_.$dots) {
      _.$dots.remove();
    }
    if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
      _.$prevArrow.remove();
    }
    if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
      _.$nextArrow.remove();
    }
    _.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '');
  }, "assign");
  Slick.prototype.unslick = cc11001100_hook("Slick.prototype.unslick", function (fromBreakpoint) {
    var _ = cc11001100_hook("_", this, "var-init");
    _.$slider.trigger('unslick', [_, fromBreakpoint]);
    _.destroy();
  }, "assign");
  Slick.prototype.updateArrows = cc11001100_hook("Slick.prototype.updateArrows", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      centerOffset;
    centerOffset = cc11001100_hook("centerOffset", Math.floor(_.options.slidesToShow / 2), "assign");
    if (_.options.arrows === true && _.slideCount > _.options.slidesToShow && !_.options.infinite) {
      _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      if (_.currentSlide === 0) {
        _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {
        _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
        _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
      }
    }
  }, "assign");
  Slick.prototype.updateDots = cc11001100_hook("Slick.prototype.updateDots", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.$dots !== null) {
      _.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');
      _.$dots.find('li').eq(Math.floor(_.currentSlide / _.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false');
    }
  }, "assign");
  Slick.prototype.visibility = cc11001100_hook("Slick.prototype.visibility", function () {
    var _ = cc11001100_hook("_", this, "var-init");
    if (_.options.autoplay) {
      if (document[_.hidden]) {
        _.interrupted = cc11001100_hook("_.interrupted", true, "assign");
      } else {
        _.interrupted = cc11001100_hook("_.interrupted", false, "assign");
      }
    }
  }, "assign");
  $.fn.slick = cc11001100_hook("$.fn.slick", function () {
    var _ = cc11001100_hook("_", this, "var-init"),
      opt = cc11001100_hook("opt", arguments[0], "var-init"),
      args = cc11001100_hook("args", Array.prototype.slice.call(arguments, 1), "var-init"),
      l = cc11001100_hook("l", _.length, "var-init"),
      i,
      ret;
    for (i = cc11001100_hook("i", 0, "assign"); i < l; i++) {
      if (typeof opt == 'object' || typeof opt == 'undefined') _[i].slick = cc11001100_hook("_[i].slick", new Slick(_[i], opt), "assign");else ret = cc11001100_hook("ret", _[i].slick[opt].apply(_[i].slick, args), "assign");
      if (typeof ret != 'undefined') return ret;
    }
    return _;
  }, "assign");
});