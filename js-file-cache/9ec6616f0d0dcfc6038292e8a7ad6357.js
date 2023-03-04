/*Superfish*/
(function ($) {
  var methods = cc11001100_hook("methods", function () {
    var c = cc11001100_hook("c", {
        bcClass: cc11001100_hook("bcClass", "sf-breadcrumb", "object-key-init"),
        menuClass: cc11001100_hook("menuClass", "sf-js-enabled", "object-key-init"),
        anchorClass: cc11001100_hook("anchorClass", "sf-with-ul", "object-key-init"),
        menuArrowClass: cc11001100_hook("menuArrowClass", "sf-arrows", "object-key-init")
      }, "var-init"),
      ios = cc11001100_hook("ios", function () {
        var ios = cc11001100_hook("ios", /iPhone|iPad|iPod/i.test(navigator.userAgent), "var-init");
        if (ios) $(window).load(function () {
          $("body").children().on("click", $.noop);
        });
        return ios;
      }(), "var-init"),
      wp7 = cc11001100_hook("wp7", function () {
        var style = cc11001100_hook("style", document.documentElement.style, "var-init");
        return "behavior" in style && "fill" in style && /iemobile/i.test(navigator.userAgent);
      }(), "var-init"),
      toggleMenuClasses = function ($menu, o) {
        var classes = cc11001100_hook("classes", c.menuClass, "var-init");
        if (o.cssArrows) classes += cc11001100_hook("classes", " " + c.menuArrowClass, "assign");
        $menu.toggleClass(classes);
      },
      setPathToCurrent = function ($menu, o) {
        return $menu.find("li." + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + " " + c.bcClass).filter(function () {
          return $(this).children(o.popUpSelector).hide().show().length;
        }).removeClass(o.pathClass);
      },
      toggleAnchorClass = function ($li) {
        $li.children("a").toggleClass(c.anchorClass);
      },
      toggleTouchAction = function ($menu) {
        var touchAction = cc11001100_hook("touchAction", $menu.css("ms-touch-action"), "var-init");
        touchAction = cc11001100_hook("touchAction", touchAction === "pan-y" ? "auto" : "pan-y", "assign");
        $menu.css("ms-touch-action", touchAction);
      },
      applyHandlers = function ($menu, o) {
        var targets = cc11001100_hook("targets", "li:has(" + o.popUpSelector + ")", "var-init");
        if ($.fn.hoverIntent && !o.disableHI) $menu.hoverIntent(over, out, targets);else $menu.on("mouseenter.superfish", targets, over).on("mouseleave.superfish", targets, out);
        var touchevent = cc11001100_hook("touchevent", "MSPointerDown.superfish", "var-init");
        if (!ios) touchevent += cc11001100_hook("touchevent", " touchend.superfish", "assign");
        if (wp7) touchevent += cc11001100_hook("touchevent", " mousedown.superfish", "assign");
        $menu.on("focusin.superfish", "li", over).on("focusout.superfish", "li", out).on(touchevent, "a", o, touchHandler);
      },
      touchHandler = function (e) {
        var $this = cc11001100_hook("$this", $(this), "var-init"),
          $ul = cc11001100_hook("$ul", $this.siblings(e.data.popUpSelector), "var-init");
        if ($ul.length > 0 && $ul.is(":hidden")) {
          $this.one("click.superfish", false);
          if (e.type === "MSPointerDown") $this.trigger("focus");else $.proxy(over, $this.parent("li"))();
        }
      },
      over = function () {
        var $this = cc11001100_hook("$this", $(this), "var-init"),
          o = cc11001100_hook("o", getOptions($this), "var-init");
        clearTimeout(o.sfTimer);
        $this.siblings().superfish("hide").end().superfish("show");
      },
      out = function () {
        var $this = cc11001100_hook("$this", $(this), "var-init"),
          o = cc11001100_hook("o", getOptions($this), "var-init");
        if (ios) $.proxy(close, $this, o)();else {
          clearTimeout(o.sfTimer);
          o.sfTimer = cc11001100_hook("o.sfTimer", setTimeout($.proxy(close, $this, o), o.delay), "assign");
        }
      },
      close = function (o) {
        o.retainPath = cc11001100_hook("o.retainPath", $.inArray(this[0], o.$path) > -1, "assign");
        this.superfish("hide");
        if (!this.parents("." + o.hoverClass).length) {
          o.onIdle.call(getMenu(this));
          if (o.$path.length) $.proxy(over, o.$path)();
        }
      },
      getMenu = function ($el) {
        return $el.closest("." + c.menuClass);
      },
      getOptions = function ($el) {
        return getMenu($el).data("sf-options");
      };
    return {
      hide: function (instant) {
        if (this.length) {
          var $this = cc11001100_hook("$this", this, "var-init"),
            o = cc11001100_hook("o", getOptions($this), "var-init");
          if (!o) return this;
          var not = cc11001100_hook("not", o.retainPath === true ? o.$path : "", "var-init"),
            $ul = cc11001100_hook("$ul", $this.find("li." + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector), "var-init"),
            speed = cc11001100_hook("speed", o.speedOut, "var-init");
          if (instant) {
            $ul.show();
            speed = cc11001100_hook("speed", 0, "assign");
          }
          o.retainPath = cc11001100_hook("o.retainPath", false, "assign");
          o.onBeforeHide.call($ul);
          $ul.stop(true, true).animate(o.animationOut, speed, function () {
            var $this = cc11001100_hook("$this", $(this), "var-init");
            o.onHide.call($this);
          });
        }
        return this;
      },
      show: function () {
        var o = cc11001100_hook("o", getOptions(this), "var-init");
        if (!o) return this;
        var $this = cc11001100_hook("$this", this.addClass(o.hoverClass), "var-init"),
          $ul = cc11001100_hook("$ul", $this.children(o.popUpSelector), "var-init");
        o.onBeforeShow.call($ul);
        $ul.stop(true, true).animate(o.animation, o.speed, function () {
          o.onShow.call($ul);
        });
        return this;
      },
      destroy: function () {
        return this.each(function () {
          var $this = cc11001100_hook("$this", $(this), "var-init"),
            o = cc11001100_hook("o", $this.data("sf-options"), "var-init"),
            $hasPopUp;
          if (!o) return false;
          $hasPopUp = cc11001100_hook("$hasPopUp", $this.find(o.popUpSelector).parent("li"), "assign");
          clearTimeout(o.sfTimer);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          $this.off(".superfish").off(".hoverIntent");
          $hasPopUp.children(o.popUpSelector).attr("style", function (i, style) {
            return style.replace(/display[^;]+;?/g, "");
          });
          o.$path.removeClass(o.hoverClass + " " + c.bcClass).addClass(o.pathClass);
          $this.find("." + o.hoverClass).removeClass(o.hoverClass);
          o.onDestroy.call($this);
          $this.removeData("sf-options");
        });
      },
      init: function (op) {
        return this.each(function () {
          var $this = cc11001100_hook("$this", $(this), "var-init");
          if ($this.data("sf-options")) return false;
          var o = cc11001100_hook("o", $.extend({}, $.fn.superfish.defaults, op), "var-init"),
            $hasPopUp = cc11001100_hook("$hasPopUp", $this.find(o.popUpSelector).parent("li"), "var-init");
          o.$path = cc11001100_hook("o.$path", setPathToCurrent($this, o), "assign");
          $this.data("sf-options", o);
          toggleMenuClasses($this, o);
          toggleAnchorClass($hasPopUp);
          toggleTouchAction($this);
          applyHandlers($this, o);
          $hasPopUp.not("." + c.bcClass).superfish("hide", true);
          o.onInit.call(this);
        });
      }
    };
  }(), "var-init");
  $.fn.superfish = cc11001100_hook("$.fn.superfish", function (method, args) {
    if (methods[method]) return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));else if (typeof method === "object" || !method) return methods.init.apply(this, arguments);else return $.error("Method " + method + " does not exist on jQuery.fn.superfish");
  }, "assign");
  $.fn.superfish.defaults = cc11001100_hook("$.fn.superfish.defaults", {
    popUpSelector: cc11001100_hook("popUpSelector", "ul,.sf-mega", "object-key-init"),
    hoverClass: cc11001100_hook("hoverClass", "sfHover", "object-key-init"),
    pathClass: cc11001100_hook("pathClass", "overrideThisToUse", "object-key-init"),
    pathLevels: cc11001100_hook("pathLevels", 1, "object-key-init"),
    delay: cc11001100_hook("delay", 800, "object-key-init"),
    animation: {
      opacity: cc11001100_hook("opacity", "show", "object-key-init")
    },
    animationOut: {
      opacity: cc11001100_hook("opacity", "hide", "object-key-init")
    },
    speed: cc11001100_hook("speed", "normal", "object-key-init"),
    speedOut: cc11001100_hook("speedOut", "fast", "object-key-init"),
    cssArrows: cc11001100_hook("cssArrows", true, "object-key-init"),
    disableHI: cc11001100_hook("disableHI", false, "object-key-init"),
    onInit: cc11001100_hook("onInit", $.noop, "object-key-init"),
    onBeforeShow: cc11001100_hook("onBeforeShow", $.noop, "object-key-init"),
    onShow: cc11001100_hook("onShow", $.noop, "object-key-init"),
    onBeforeHide: cc11001100_hook("onBeforeHide", $.noop, "object-key-init"),
    onHide: cc11001100_hook("onHide", $.noop, "object-key-init"),
    onIdle: cc11001100_hook("onIdle", $.noop, "object-key-init"),
    onDestroy: cc11001100_hook("onDestroy", $.noop, "object-key-init")
  }, "assign");
  $.fn.extend({
    hideSuperfishUl: cc11001100_hook("hideSuperfishUl", methods.hide, "object-key-init"),
    showSuperfishUl: cc11001100_hook("showSuperfishUl", methods.show, "object-key-init")
  });
})(jQuery);

/* Sidr */
(function (e) {
  var t = cc11001100_hook("t", false, "var-init"),
    n = cc11001100_hook("n", false, "var-init");
  var r = cc11001100_hook("r", {
    isUrl: function (e) {
      var t = cc11001100_hook("t", new RegExp("^(https?:\\/\\/)?" + "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + "((\\d{1,3}\\.){3}\\d{1,3}))" + "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + "(\\?[;&a-z\\d%_.~+=-]*)?" + "(\\#[-a-z\\d_]*)?$", "i"), "var-init");
      if (!t.test(e)) {
        return false;
      } else {
        return true;
      }
    },
    loadContent: function (e, t) {
      e.html(t);
    },
    addPrefix: function (e) {
      var t = cc11001100_hook("t", e.attr("id"), "var-init"),
        n = cc11001100_hook("n", e.attr("class"), "var-init");
      if (typeof t === "string" && "" !== t) {
        e.attr("id", t.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1"));
      }
      if (typeof n === "string" && "" !== n && "sidr-inner" !== n) {
        e.attr("class", n.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1"));
      }
      e.removeAttr("style");
    },
    execute: function (r, s, o) {
      if (typeof s === "function") {
        o = cc11001100_hook("o", s, "assign");
        s = cc11001100_hook("s", "sidr", "assign");
      } else if (!s) {
        s = cc11001100_hook("s", "sidr", "assign");
      }
      var u = cc11001100_hook("u", e("#" + s), "var-init"),
        a = cc11001100_hook("a", e(u.data("body")), "var-init"),
        f = cc11001100_hook("f", e("html"), "var-init"),
        l = cc11001100_hook("l", u.outerWidth(true), "var-init"),
        c = cc11001100_hook("c", u.data("speed"), "var-init"),
        h = cc11001100_hook("h", u.data("side"), "var-init"),
        p = cc11001100_hook("p", u.data("displace"), "var-init"),
        d = cc11001100_hook("d", u.data("onOpen"), "var-init"),
        v = cc11001100_hook("v", u.data("onClose"), "var-init"),
        m,
        g,
        y,
        b = cc11001100_hook("b", s === "sidr" ? "sidr-open" : "sidr-open " + s + "-open", "var-init");
      if ("open" === r || "toggle" === r && !u.is(":visible")) {
        if (u.is(":visible") || t) {
          return;
        }
        if (n !== false) {
          i.close(n, function () {
            i.open(s);
          });
          return;
        }
        t = cc11001100_hook("t", true, "assign");
        if (h === "left") {
          m = cc11001100_hook("m", {
            left: cc11001100_hook("left", l + "px", "object-key-init")
          }, "assign");
          g = cc11001100_hook("g", {
            left: cc11001100_hook("left", "0px", "object-key-init")
          }, "assign");
        } else {
          m = cc11001100_hook("m", {
            right: cc11001100_hook("right", l + "px", "object-key-init")
          }, "assign");
          g = cc11001100_hook("g", {
            right: cc11001100_hook("right", "0px", "object-key-init")
          }, "assign");
        }
        if (a.is("body")) {
          y = cc11001100_hook("y", f.scrollTop(), "assign");
          f.css("overflow-x", "hidden").scrollTop(y);
        }
        if (p) {
          a.addClass("sidr-animating").css({
            width: cc11001100_hook("width", a.width(), "object-key-init"),
            position: cc11001100_hook("position", "absolute", "object-key-init")
          }).animate(m, c, function () {
            e(this).addClass(b);
          });
        } else {
          setTimeout(function () {
            e(this).addClass(b);
          }, c);
        }
        u.css("display", "block").animate(g, c, function () {
          t = cc11001100_hook("t", false, "assign");
          n = cc11001100_hook("n", s, "assign");
          if (typeof o === "function") {
            o(s);
          }
          a.removeClass("sidr-animating");
        });
        d();
      } else {
        if (!u.is(":visible") || t) {
          return;
        }
        t = cc11001100_hook("t", true, "assign");
        if (h === "left") {
          m = cc11001100_hook("m", {
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "assign");
          g = cc11001100_hook("g", {
            left: cc11001100_hook("left", "-" + l + "px", "object-key-init")
          }, "assign");
        } else {
          m = cc11001100_hook("m", {
            right: cc11001100_hook("right", 0, "object-key-init")
          }, "assign");
          g = cc11001100_hook("g", {
            right: cc11001100_hook("right", "-" + l + "px", "object-key-init")
          }, "assign");
        }
        if (a.is("body")) {
          y = cc11001100_hook("y", f.scrollTop(), "assign");
          f.removeAttr("style").scrollTop(y);
        }
        a.addClass("sidr-animating").animate(m, c).removeClass(b);
        u.animate(g, c, function () {
          u.removeAttr("style").hide();
          a.removeAttr("style");
          e("html").removeAttr("style");
          t = cc11001100_hook("t", false, "assign");
          n = cc11001100_hook("n", false, "assign");
          if (typeof o === "function") {
            o(s);
          }
          a.removeClass("sidr-animating");
        });
        v();
      }
    }
  }, "var-init");
  var i = cc11001100_hook("i", {
    open: function (e, t) {
      r.execute("open", e, t);
    },
    close: function (e, t) {
      r.execute("close", e, t);
    },
    toggle: function (e, t) {
      r.execute("toggle", e, t);
    },
    toogle: function (e, t) {
      r.execute("toggle", e, t);
    }
  }, "var-init");
  e.sidr = cc11001100_hook("e.sidr", function (t) {
    if (i[t]) {
      return i[t].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof t === "function" || typeof t === "string" || !t) {
      return i.toggle.apply(this, arguments);
    } else {
      e.error("Method " + t + " does not exist on jQuery.sidr");
    }
  }, "assign");
  e.fn.sidr = cc11001100_hook("e.fn.sidr", function (t) {
    var n = cc11001100_hook("n", e.extend({
      name: cc11001100_hook("name", "sidr", "object-key-init"),
      speed: cc11001100_hook("speed", 200, "object-key-init"),
      side: cc11001100_hook("side", "left", "object-key-init"),
      source: cc11001100_hook("source", null, "object-key-init"),
      renaming: cc11001100_hook("renaming", true, "object-key-init"),
      body: cc11001100_hook("body", "body", "object-key-init"),
      displace: cc11001100_hook("displace", true, "object-key-init"),
      onOpen: function () {},
      onClose: function () {}
    }, t), "var-init");
    var s = cc11001100_hook("s", n.name, "var-init"),
      o = cc11001100_hook("o", e("#" + s), "var-init");
    if (o.length === 0) {
      o = cc11001100_hook("o", e("<div />").attr("id", s).appendTo(e("body")), "assign");
    }
    o.addClass("sidr").addClass(n.side).data({
      speed: cc11001100_hook("speed", n.speed, "object-key-init"),
      side: cc11001100_hook("side", n.side, "object-key-init"),
      body: cc11001100_hook("body", n.body, "object-key-init"),
      displace: cc11001100_hook("displace", n.displace, "object-key-init"),
      onOpen: cc11001100_hook("onOpen", n.onOpen, "object-key-init"),
      onClose: cc11001100_hook("onClose", n.onClose, "object-key-init")
    });
    if (typeof n.source === "function") {
      var u = cc11001100_hook("u", n.source(s), "var-init");
      r.loadContent(o, u);
    } else if (typeof n.source === "string" && r.isUrl(n.source)) {
      e.get(n.source, function (e) {
        r.loadContent(o, e);
      });
    } else if (typeof n.source === "string") {
      var a = cc11001100_hook("a", "", "var-init"),
        f = cc11001100_hook("f", n.source.split(","), "var-init");
      e.each(f, function (t, n) {
        a += cc11001100_hook("a", '<div class="sidr-inner">' + e(n).html() + "</div>", "assign");
      });
      if (n.renaming) {
        var l = cc11001100_hook("l", e("<div />").html(a), "var-init");
        l.find("*").each(function (t, n) {
          var i = cc11001100_hook("i", e(n), "var-init");
          r.addPrefix(i);
        });
        a = cc11001100_hook("a", l.html(), "assign");
      }
      r.loadContent(o, a);
    } else if (n.source !== null) {
      e.error("Invalid Sidr Source");
    }
    return this.each(function () {
      var t = cc11001100_hook("t", e(this), "var-init"),
        n = cc11001100_hook("n", t.data("sidr"), "var-init");
      if (!n) {
        t.data("sidr", s);
        if ("ontouchstart" in document.documentElement) {
          t.bind("touchstart", function (e) {
            var t = cc11001100_hook("t", e.originalEvent.touches[0], "var-init");
            this.touched = cc11001100_hook("this.touched", e.timeStamp, "assign");
          });
          t.bind("touchend", function (e) {
            var t = cc11001100_hook("t", Math.abs(e.timeStamp - this.touched), "var-init");
            if (t < 200) {
              e.preventDefault();
              i.toggle(s);
            }
          });
        } else {
          t.click(function (e) {
            e.preventDefault();
            i.toggle(s);
          });
        }
      }
    });
  }, "assign");
})(jQuery);

/* global */
(function ($) {
  "use strict";

  $(document).ready(function () {
    // Main menu superfish
    $('ul.nav-menu').superfish({
      delay: cc11001100_hook("delay", 200, "object-key-init"),
      animation: {
        opacity: cc11001100_hook("opacity", 'show', "object-key-init"),
        height: cc11001100_hook("height", 'show', "object-key-init")
      },
      speed: cc11001100_hook("speed", 'fast', "object-key-init")
    });

    // Mobile Menu
    $('#navigation-toggle').sidr({
      name: cc11001100_hook("name", 'sidr-main', "object-key-init"),
      source: cc11001100_hook("source", '#sidr-close, #site-nav', "object-key-init"),
      side: cc11001100_hook("side", 'left', "object-key-init"),
      displace: cc11001100_hook("displace", false, "object-key-init")
    });
    $(".sidr-class-toggle-sidr-close").click(function () {
      $.sidr('close', 'sidr-main');
      return false;
    });
  }); // End doc ready
})(jQuery);