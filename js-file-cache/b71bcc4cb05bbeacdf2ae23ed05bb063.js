!function (i) {
  i.fn.theiaStickySidebar = cc11001100_hook("i.fn.theiaStickySidebar", function (t) {
    function e(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var a = cc11001100_hook("a", o(t, e), "var-init");
      a || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function (t, e) {
        return function (a) {
          var n = cc11001100_hook("n", o(t, e), "var-init");
          n && i(this).unbind(a);
        };
      }(t, e)), i(window).on("resize." + t.namespace, function (t, e) {
        return function (a) {
          var n = cc11001100_hook("n", o(t, e), "var-init");
          n && i(this).unbind(a);
        };
      }(t, e)));
    }
    function o(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      return t.initialized === !0 || !(i("body").width() < t.minWidth) && (a(t, e), !0);
    }
    function a(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      t.initialized = cc11001100_hook("t.initialized", !0, "assign");
      var o = cc11001100_hook("o", i("#theia-sticky-sidebar-stylesheet-" + t.namespace), "var-init");
      0 === o.length && i("head").append(i('<style id="theia-sticky-sidebar-stylesheet-' + t.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')), e.each(function () {
        function e() {
          a.fixedScrollTop = cc11001100_hook("a.fixedScrollTop", 0, "assign"), a.sidebar.css({
            "min-height": cc11001100_hook("min-height", "1px", "object-key-init")
          }), a.stickySidebar.css({
            position: cc11001100_hook("position", "static", "object-key-init"),
            width: cc11001100_hook("width", "", "object-key-init"),
            transform: cc11001100_hook("transform", "none", "object-key-init")
          });
        }
        function o(t) {
          cc11001100_hook("t", t, "function-parameter");
          var e = cc11001100_hook("e", t.height(), "var-init");
          return t.children().each(function () {
            e = cc11001100_hook("e", Math.max(e, i(this).height()), "assign");
          }), e;
        }
        var a = cc11001100_hook("a", {}, "var-init");
        if (a.sidebar = cc11001100_hook("a.sidebar", i(this), "assign"), a.options = cc11001100_hook("a.options", t || {}, "assign"), a.container = cc11001100_hook("a.container", i(a.options.containerSelector), "assign"), 0 == a.container.length && (a.container = cc11001100_hook("a.container", a.sidebar.parent(), "assign")), a.sidebar.parents().css("-webkit-transform", "none"), a.sidebar.css({
          position: cc11001100_hook("position", a.options.defaultPosition, "object-key-init"),
          overflow: cc11001100_hook("overflow", "visible", "object-key-init"),
          "-webkit-box-sizing": cc11001100_hook("-webkit-box-sizing", "border-box", "object-key-init"),
          "-moz-box-sizing": cc11001100_hook("-moz-box-sizing", "border-box", "object-key-init"),
          "box-sizing": cc11001100_hook("box-sizing", "border-box", "object-key-init")
        }), a.stickySidebar = cc11001100_hook("a.stickySidebar", a.sidebar.find(".theiaStickySidebar"), "assign"), 0 == a.stickySidebar.length) {
          var s = cc11001100_hook("s", /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i, "var-init");
          a.sidebar.find("script").filter(function (i, t) {
            return 0 === t.type.length || t.type.match(s);
          }).remove(), a.stickySidebar = cc11001100_hook("a.stickySidebar", i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()), "assign"), a.sidebar.append(a.stickySidebar);
        }
        a.marginBottom = cc11001100_hook("a.marginBottom", parseInt(a.sidebar.css("margin-bottom")), "assign"), a.paddingTop = cc11001100_hook("a.paddingTop", parseInt(a.sidebar.css("padding-top")), "assign"), a.paddingBottom = cc11001100_hook("a.paddingBottom", parseInt(a.sidebar.css("padding-bottom")), "assign");
        var r = cc11001100_hook("r", a.stickySidebar.offset().top, "var-init"),
          d = cc11001100_hook("d", a.stickySidebar.outerHeight(), "var-init");
        a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), r -= cc11001100_hook("r", a.stickySidebar.offset().top, "assign"), d = cc11001100_hook("d", a.stickySidebar.outerHeight() - d - r, "assign"), 0 == r ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = cc11001100_hook("a.stickySidebarPaddingTop", 0, "assign")) : a.stickySidebarPaddingTop = cc11001100_hook("a.stickySidebarPaddingTop", 1, "assign"), 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = cc11001100_hook("a.stickySidebarPaddingBottom", 0, "assign")) : a.stickySidebarPaddingBottom = cc11001100_hook("a.stickySidebarPaddingBottom", 1, "assign"), a.previousScrollTop = cc11001100_hook("a.previousScrollTop", null, "assign"), a.fixedScrollTop = cc11001100_hook("a.fixedScrollTop", 0, "assign"), e(), a.onScroll = cc11001100_hook("a.onScroll", function (a) {
          if (a.stickySidebar.is(":visible")) {
            if (i("body").width() < a.options.minWidth) return void e();
            if (a.options.disableOnResponsiveLayouts) {
              var s = cc11001100_hook("s", a.sidebar.outerWidth("none" == a.sidebar.css("float")), "var-init");
              if (s + 50 > a.container.width()) return void e();
            }
            var r = cc11001100_hook("r", i(document).scrollTop(), "var-init"),
              d = cc11001100_hook("d", "static", "var-init");
            if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
              var c,
                p = cc11001100_hook("p", a.paddingTop + t.additionalMarginTop, "var-init"),
                b = cc11001100_hook("b", a.paddingBottom + a.marginBottom + t.additionalMarginBottom, "var-init"),
                l = cc11001100_hook("l", a.sidebar.offset().top, "var-init"),
                f = cc11001100_hook("f", a.sidebar.offset().top + o(a.container), "var-init"),
                h = cc11001100_hook("h", 0 + t.additionalMarginTop, "var-init"),
                g = cc11001100_hook("g", a.stickySidebar.outerHeight() + p + b < i(window).height(), "var-init");
              c = cc11001100_hook("c", g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom, "assign");
              var u = cc11001100_hook("u", l - r + a.paddingTop, "var-init"),
                S = cc11001100_hook("S", f - r - a.paddingBottom - a.marginBottom, "var-init"),
                y = cc11001100_hook("y", a.stickySidebar.offset().top - r, "var-init"),
                m = cc11001100_hook("m", a.previousScrollTop - r, "var-init");
              "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += cc11001100_hook("y", m, "assign")), "stick-to-top" == a.options.sidebarBehavior && (y = cc11001100_hook("y", t.additionalMarginTop, "assign")), "stick-to-bottom" == a.options.sidebarBehavior && (y = cc11001100_hook("y", c - a.stickySidebar.outerHeight(), "assign")), y = cc11001100_hook("y", m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight()), "assign"), y = cc11001100_hook("y", Math.max(y, u), "assign"), y = cc11001100_hook("y", Math.min(y, S - a.stickySidebar.outerHeight()), "assign");
              var k = cc11001100_hook("k", a.container.height() == a.stickySidebar.outerHeight(), "var-init");
              d = cc11001100_hook("d", (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed", "assign");
            }
            if ("fixed" == d) {
              var v = cc11001100_hook("v", i(document).scrollLeft(), "var-init");
              a.stickySidebar.css({
                position: cc11001100_hook("position", "fixed", "object-key-init"),
                width: cc11001100_hook("width", n(a.stickySidebar) + "px", "object-key-init"),
                transform: cc11001100_hook("transform", "translateY(" + y + "px)", "object-key-init"),
                left: cc11001100_hook("left", a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px", "object-key-init"),
                top: cc11001100_hook("top", "0px", "object-key-init")
              });
            } else if ("absolute" == d) {
              var x = cc11001100_hook("x", {}, "var-init");
              "absolute" != a.stickySidebar.css("position") && (x.position = cc11001100_hook("x.position", "absolute", "assign"), x.transform = cc11001100_hook("x.transform", "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)", "assign"), x.top = cc11001100_hook("x.top", "0px", "assign")), x.width = cc11001100_hook("x.width", n(a.stickySidebar) + "px", "assign"), x.left = cc11001100_hook("x.left", "", "assign"), a.stickySidebar.css(x);
            } else "static" == d && e();
            "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({
              "min-height": cc11001100_hook("min-height", a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom, "object-key-init")
            }), a.previousScrollTop = cc11001100_hook("a.previousScrollTop", r, "assign");
          }
        }, "assign"), a.onScroll(a), i(document).on("scroll." + a.options.namespace, function (i) {
          return function () {
            i.onScroll(i);
          };
        }(a)), i(window).on("resize." + a.options.namespace, function (i) {
          return function () {
            i.stickySidebar.css({
              position: cc11001100_hook("position", "static", "object-key-init")
            }), i.onScroll(i);
          };
        }(a)), "undefined" != typeof ResizeSensor && new ResizeSensor(a.stickySidebar[0], function (i) {
          return function () {
            i.onScroll(i);
          };
        }(a));
      });
    }
    function n(i) {
      cc11001100_hook("i", i, "function-parameter");
      var t;
      try {
        t = cc11001100_hook("t", i[0].getBoundingClientRect().width, "assign");
      } catch (i) {}
      return "undefined" == typeof t && (t = cc11001100_hook("t", i.width(), "assign")), t;
    }
    var s = cc11001100_hook("s", {
      containerSelector: cc11001100_hook("containerSelector", "", "object-key-init"),
      additionalMarginTop: cc11001100_hook("additionalMarginTop", 0, "object-key-init"),
      additionalMarginBottom: cc11001100_hook("additionalMarginBottom", 0, "object-key-init"),
      updateSidebarHeight: cc11001100_hook("updateSidebarHeight", !0, "object-key-init"),
      minWidth: cc11001100_hook("minWidth", 0, "object-key-init"),
      disableOnResponsiveLayouts: cc11001100_hook("disableOnResponsiveLayouts", !0, "object-key-init"),
      sidebarBehavior: cc11001100_hook("sidebarBehavior", "modern", "object-key-init"),
      defaultPosition: cc11001100_hook("defaultPosition", "relative", "object-key-init"),
      namespace: cc11001100_hook("namespace", "TSS", "object-key-init")
    }, "var-init");
    return t = cc11001100_hook("t", i.extend(s, t), "assign"), t.additionalMarginTop = cc11001100_hook("t.additionalMarginTop", parseInt(t.additionalMarginTop) || 0, "assign"), t.additionalMarginBottom = cc11001100_hook("t.additionalMarginBottom", parseInt(t.additionalMarginBottom) || 0, "assign"), e(t, this), this;
  }, "assign");
}(jQuery);
//# sourceMappingURL=maps/theia-sticky-sidebar.min.js.map