/*!
 * Viewer v0.5.0
 * https://github.com/fengyuanchen/viewer
 *
 * Copyright (c) 2015-2016 Fengyuan Chen
 * Released under the MIT license
 *
 * Date: 2016-01-21T09:59:52.834Z
 */
!function (i) {
  "function" == typeof define && define.amd ? define("viewer", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : jQuery);
}(function (i) {
  "use strict";

  function t(i) {
    cc11001100_hook("i", i, "function-parameter");
    return "string" == typeof i;
  }
  function e(i) {
    cc11001100_hook("i", i, "function-parameter");
    return "number" == typeof i && !isNaN(i);
  }
  function s(i) {
    cc11001100_hook("i", i, "function-parameter");
    return "undefined" == typeof i;
  }
  function n(i, t) {
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var s = cc11001100_hook("s", [], "var-init");
    return e(t) && s.push(t), s.slice.apply(i, s);
  }
  function o(i, t) {
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", n(arguments, 2), "var-init");
    return function () {
      return i.apply(t, e.concat(n(arguments)));
    };
  }
  function a(i) {
    cc11001100_hook("i", i, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init"),
      s = cc11001100_hook("s", i.rotate, "var-init"),
      n = cc11001100_hook("n", i.scaleX, "var-init"),
      o = cc11001100_hook("o", i.scaleY, "var-init");
    return e(s) && t.push("rotate(" + s + "deg)"), e(n) && e(o) && t.push("scale(" + n + "," + o + ")"), t.length ? t.join(" ") : "none";
  }
  function h(i) {
    cc11001100_hook("i", i, "function-parameter");
    return i.offsetWidth;
  }
  function r(i) {
    cc11001100_hook("i", i, "function-parameter");
    return t(i) ? i.replace(/^.*\//, "").replace(/[\?&#].*$/, "") : "";
  }
  function l(i, t) {
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var e;
    return i.naturalWidth ? t(i.naturalWidth, i.naturalHeight) : (e = cc11001100_hook("e", document.createElement("img"), "assign"), e.onload = cc11001100_hook("e.onload", function () {
      t(this.width, this.height);
    }, "assign"), void (e.src = cc11001100_hook("e.src", i.src, "assign")));
  }
  function d(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", t.length, "var-init"),
      s = cc11001100_hook("s", 0, "var-init"),
      n = cc11001100_hook("n", 0, "var-init");
    return e && (i.each(t, function (i, t) {
      s += cc11001100_hook("s", t.pageX, "assign"), n += cc11001100_hook("n", t.pageY, "assign");
    }), s /= cc11001100_hook("s", e, "assign"), n /= cc11001100_hook("n", e, "assign")), {
      pageX: cc11001100_hook("pageX", s, "object-key-init"),
      pageY: cc11001100_hook("pageY", n, "object-key-init")
    };
  }
  function c(i) {
    cc11001100_hook("i", i, "function-parameter");
    switch (i) {
      case 2:
        return x;
      case 3:
        return $;
      case 4:
        return C;
    }
  }
  function u(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.$element = cc11001100_hook("this.$element", i(t), "assign"), this.options = cc11001100_hook("this.options", i.extend({}, u.DEFAULTS, i.isPlainObject(e) && e), "assign"), this.isImg = cc11001100_hook("this.isImg", !1, "assign"), this.isBuilt = cc11001100_hook("this.isBuilt", !1, "assign"), this.isShown = cc11001100_hook("this.isShown", !1, "assign"), this.isViewed = cc11001100_hook("this.isViewed", !1, "assign"), this.isFulled = cc11001100_hook("this.isFulled", !1, "assign"), this.isPlayed = cc11001100_hook("this.isPlayed", !1, "assign"), this.wheeling = cc11001100_hook("this.wheeling", !1, "assign"), this.playing = cc11001100_hook("this.playing", !1, "assign"), this.fading = cc11001100_hook("this.fading", !1, "assign"), this.tooltiping = cc11001100_hook("this.tooltiping", !1, "assign"), this.transitioning = cc11001100_hook("this.transitioning", !1, "assign"), this.action = cc11001100_hook("this.action", !1, "assign"), this.target = cc11001100_hook("this.target", !1, "assign"), this.timeout = cc11001100_hook("this.timeout", !1, "assign"), this.index = cc11001100_hook("this.index", 0, "assign"), this.length = cc11001100_hook("this.length", 0, "assign"), this.init();
  }
  var m = cc11001100_hook("m", i(window), "var-init"),
    v = cc11001100_hook("v", i(document), "var-init"),
    f = cc11001100_hook("f", "viewer", "var-init"),
    g = cc11001100_hook("g", document.createElement(f), "var-init"),
    w = cc11001100_hook("w", "viewer-fixed", "var-init"),
    p = cc11001100_hook("p", "viewer-open", "var-init"),
    b = cc11001100_hook("b", "viewer-show", "var-init"),
    y = cc11001100_hook("y", "viewer-hide", "var-init"),
    x = cc11001100_hook("x", "viewer-hide-xs-down", "var-init"),
    $ = cc11001100_hook("$", "viewer-hide-sm-down", "var-init"),
    C = cc11001100_hook("C", "viewer-hide-md-down", "var-init"),
    z = cc11001100_hook("z", "viewer-fade", "var-init"),
    F = cc11001100_hook("F", "viewer-in", "var-init"),
    Y = cc11001100_hook("Y", "viewer-move", "var-init"),
    k = cc11001100_hook("k", "viewer-active", "var-init"),
    I = cc11001100_hook("I", "viewer-invisible", "var-init"),
    X = cc11001100_hook("X", "viewer-transition", "var-init"),
    P = cc11001100_hook("P", "viewer-fullscreen", "var-init"),
    T = cc11001100_hook("T", "viewer-fullscreen-exit", "var-init"),
    V = cc11001100_hook("V", "viewer-close", "var-init"),
    E = cc11001100_hook("E", "img", "var-init"),
    S = cc11001100_hook("S", "mousedown touchstart pointerdown MSPointerDown", "var-init"),
    D = cc11001100_hook("D", "mousemove touchmove pointermove MSPointerMove", "var-init"),
    L = cc11001100_hook("L", "mouseup touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel", "var-init"),
    q = cc11001100_hook("q", "wheel mousewheel DOMMouseScroll", "var-init"),
    R = cc11001100_hook("R", "transitionend", "var-init"),
    M = cc11001100_hook("M", "load." + f, "var-init"),
    W = cc11001100_hook("W", "keydown." + f, "var-init"),
    _ = cc11001100_hook("_", "click." + f, "var-init"),
    j = cc11001100_hook("j", "resize." + f, "var-init"),
    A = cc11001100_hook("A", "build." + f, "var-init"),
    B = cc11001100_hook("B", "built." + f, "var-init"),
    H = cc11001100_hook("H", "show." + f, "var-init"),
    U = cc11001100_hook("U", "shown." + f, "var-init"),
    N = cc11001100_hook("N", "hide." + f, "var-init"),
    O = cc11001100_hook("O", "hidden." + f, "var-init"),
    Z = cc11001100_hook("Z", "view." + f, "var-init"),
    K = cc11001100_hook("K", "viewed." + f, "var-init"),
    Q = cc11001100_hook("Q", "undefined" != typeof g.style.transition, "var-init"),
    G = cc11001100_hook("G", Math.round, "var-init"),
    J = cc11001100_hook("J", Math.sqrt, "var-init"),
    ii = cc11001100_hook("ii", Math.abs, "var-init"),
    ti = cc11001100_hook("ti", Math.min, "var-init"),
    ei = cc11001100_hook("ei", Math.max, "var-init"),
    si = cc11001100_hook("si", Number, "var-init");
  u.prototype = cc11001100_hook("u.prototype", {
    constructor: cc11001100_hook("constructor", u, "object-key-init"),
    init: function () {
      var t = cc11001100_hook("t", this.options, "var-init"),
        e = cc11001100_hook("e", this.$element, "var-init"),
        s = cc11001100_hook("s", e.is(E), "var-init"),
        n = cc11001100_hook("n", s ? e : e.find(E), "var-init"),
        o = cc11001100_hook("o", n.length, "var-init"),
        a = cc11001100_hook("a", i.proxy(this.ready, this), "var-init");
      o && (i.isFunction(t.build) && e.one(A, t.build), this.trigger(A).isDefaultPrevented() || (Q || (t.transition = cc11001100_hook("t.transition", !1, "assign")), this.isImg = cc11001100_hook("this.isImg", s, "assign"), this.length = cc11001100_hook("this.length", o, "assign"), this.count = cc11001100_hook("this.count", 0, "assign"), this.$images = cc11001100_hook("this.$images", n, "assign"), this.$body = cc11001100_hook("this.$body", i("body"), "assign"), t.inline ? (e.one(B, i.proxy(function () {
        this.view();
      }, this)), n.each(function () {
        this.complete ? a() : i(this).one(M, a);
      })) : e.on(_, i.proxy(this.start, this))));
    },
    ready: function () {
      this.count++, this.count === this.length && this.build();
    },
    build: function () {
      var t,
        e,
        s,
        n,
        o,
        a,
        h = cc11001100_hook("h", this.options, "var-init"),
        r = cc11001100_hook("r", this.$element, "var-init");
      this.isBuilt || (this.$parent = cc11001100_hook("this.$parent", t = cc11001100_hook("t", r.parent(), "assign"), "assign"), this.$viewer = cc11001100_hook("this.$viewer", e = cc11001100_hook("e", i(u.TEMPLATE), "assign"), "assign"), this.$canvas = cc11001100_hook("this.$canvas", e.find(".viewer-canvas"), "assign"), this.$footer = cc11001100_hook("this.$footer", e.find(".viewer-footer"), "assign"), this.$title = cc11001100_hook("this.$title", s = cc11001100_hook("s", e.find(".viewer-title"), "assign"), "assign"), this.$toolbar = cc11001100_hook("this.$toolbar", n = cc11001100_hook("n", e.find(".viewer-toolbar"), "assign"), "assign"), this.$navbar = cc11001100_hook("this.$navbar", o = cc11001100_hook("o", e.find(".viewer-navbar"), "assign"), "assign"), this.$button = cc11001100_hook("this.$button", a = cc11001100_hook("a", e.find(".viewer-button"), "assign"), "assign"), this.$tooltip = cc11001100_hook("this.$tooltip", e.find(".viewer-tooltip"), "assign"), this.$player = cc11001100_hook("this.$player", e.find(".viewer-player"), "assign"), this.$list = cc11001100_hook("this.$list", e.find(".viewer-list"), "assign"), s.addClass(h.title ? c(h.title) : y), n.addClass(h.toolbar ? c(h.toolbar) : y), n.find("li[class*=zoom]").toggleClass(I, !h.zoomable), n.find("li[class*=flip]").toggleClass(I, !h.scalable), h.rotatable || n.find("li[class*=rotate]").addClass(I).appendTo(n), o.addClass(h.navbar ? c(h.navbar) : y), h.inline ? (a.addClass(P), e.css("z-index", h.zIndexInline), "static" === t.css("position") && t.css("position", "relative")) : (a.addClass(V), e.css("z-index", h.zIndex).addClass([w, z, y].join(" "))), r.after(e), h.inline && (this.render(), this.bind(), this.isShown = cc11001100_hook("this.isShown", !0, "assign")), this.isBuilt = cc11001100_hook("this.isBuilt", !0, "assign"), i.isFunction(h.built) && r.one(B, h.built), this.trigger(B));
    },
    unbuild: function () {
      var i = cc11001100_hook("i", this.options, "var-init"),
        t = cc11001100_hook("t", this.$element, "var-init");
      this.isBuilt && (i.inline && t.removeClass(y), this.$viewer.remove());
    },
    bind: function () {
      var t = cc11001100_hook("t", this.options, "var-init"),
        e = cc11001100_hook("e", this.$element, "var-init");
      i.isFunction(t.view) && e.on(Z, t.view), i.isFunction(t.viewed) && e.on(K, t.viewed), this.$viewer.on(_, i.proxy(this.click, this)).on(q, i.proxy(this.wheel, this)), this.$canvas.on(S, i.proxy(this.mousedown, this)), v.on(D, this._mousemove = cc11001100_hook("this._mousemove", o(this.mousemove, this), "assign")).on(L, this._mouseup = cc11001100_hook("this._mouseup", o(this.mouseup, this), "assign")).on(W, this._keydown = cc11001100_hook("this._keydown", o(this.keydown, this), "assign")), m.on(j, this._resize = cc11001100_hook("this._resize", o(this.resize, this), "assign"));
    },
    unbind: function () {
      var t = cc11001100_hook("t", this.options, "var-init"),
        e = cc11001100_hook("e", this.$element, "var-init");
      i.isFunction(t.view) && e.off(Z, t.view), i.isFunction(t.viewed) && e.off(K, t.viewed), this.$viewer.off(_, this.click).off(q, this.wheel), this.$canvas.off(S, this.mousedown), v.off(D, this._mousemove).off(L, this._mouseup).off(W, this._keydown), m.off(j, this._resize);
    },
    render: function () {
      this.initContainer(), this.initViewer(), this.initList(), this.renderViewer();
    },
    initContainer: function () {
      this.container = cc11001100_hook("this.container", {
        width: cc11001100_hook("width", m.innerWidth(), "object-key-init"),
        height: cc11001100_hook("height", m.innerHeight(), "object-key-init")
      }, "assign");
    },
    initViewer: function () {
      var t,
        e = cc11001100_hook("e", this.options, "var-init"),
        s = cc11001100_hook("s", this.$parent, "var-init");
      e.inline && (this.parent = cc11001100_hook("this.parent", t = cc11001100_hook("t", {
        width: cc11001100_hook("width", ei(s.width(), e.minWidth), "object-key-init"),
        height: cc11001100_hook("height", ei(s.height(), e.minHeight), "object-key-init")
      }, "assign"), "assign")), (this.isFulled || !t) && (t = cc11001100_hook("t", this.container, "assign")), this.viewer = cc11001100_hook("this.viewer", i.extend({}, t), "assign");
    },
    renderViewer: function () {
      this.options.inline && !this.isFulled && this.$viewer.css(this.viewer);
    },
    initList: function () {
      var e = cc11001100_hook("e", this.options, "var-init"),
        s = cc11001100_hook("s", this.$element, "var-init"),
        n = cc11001100_hook("n", this.$list, "var-init"),
        o = cc11001100_hook("o", [], "var-init");
      this.$images.each(function (s) {
        var n = cc11001100_hook("n", this.src, "var-init"),
          a = cc11001100_hook("a", this.alt || r(n), "var-init"),
          h = cc11001100_hook("h", e.url, "var-init");
        n && (t(h) ? h = cc11001100_hook("h", this.getAttribute(h), "assign") : i.isFunction(h) && (h = cc11001100_hook("h", h.call(this, this), "assign")), o.push('<li><img src="' + n + '" data-action="view" data-index="' + s + '" data-original-url="' + (h || n) + '" alt="' + a + '"></li>'));
      }), n.html(o.join("")).find(E).one(M, {
        filled: cc11001100_hook("filled", !0, "object-key-init")
      }, i.proxy(this.loadImage, this)), this.$items = cc11001100_hook("this.$items", n.children(), "assign"), e.transition && s.one(K, function () {
        n.addClass(X);
      });
    },
    renderList: function (i) {
      var t = cc11001100_hook("t", i || this.index, "var-init"),
        e = cc11001100_hook("e", this.$items.eq(t).width(), "var-init"),
        s = cc11001100_hook("s", e + 1, "var-init");
      this.$list.css({
        width: cc11001100_hook("width", s * this.length, "object-key-init"),
        marginLeft: cc11001100_hook("marginLeft", (this.viewer.width - e) / 2 - s * t, "object-key-init")
      });
    },
    resetList: function () {
      this.$list.empty().removeClass(X).css("margin-left", 0);
    },
    initImage: function (t) {
      var e = cc11001100_hook("e", this.options, "var-init"),
        s = cc11001100_hook("s", this.$image, "var-init"),
        n = cc11001100_hook("n", this.viewer, "var-init"),
        o = cc11001100_hook("o", this.$footer.height(), "var-init"),
        a = cc11001100_hook("a", n.width, "var-init"),
        h = cc11001100_hook("h", ei(n.height - o, o), "var-init"),
        r = cc11001100_hook("r", this.image || {}, "var-init");
      l(s[0], i.proxy(function (s, n) {
        var o,
          l,
          d = cc11001100_hook("d", s / n, "var-init"),
          c = cc11001100_hook("c", a, "var-init"),
          u = cc11001100_hook("u", h, "var-init");
        h * d > a ? u = cc11001100_hook("u", a / d, "assign") : c = cc11001100_hook("c", h * d, "assign"), c = cc11001100_hook("c", ti(.9 * c, s), "assign"), u = cc11001100_hook("u", ti(.9 * u, n), "assign"), l = cc11001100_hook("l", {
          naturalWidth: cc11001100_hook("naturalWidth", s, "object-key-init"),
          naturalHeight: cc11001100_hook("naturalHeight", n, "object-key-init"),
          aspectRatio: cc11001100_hook("aspectRatio", d, "object-key-init"),
          ratio: cc11001100_hook("ratio", c / s, "object-key-init"),
          width: cc11001100_hook("width", c, "object-key-init"),
          height: cc11001100_hook("height", u, "object-key-init"),
          left: cc11001100_hook("left", (a - c) / 2, "object-key-init"),
          top: cc11001100_hook("top", (h - u) / 2, "object-key-init")
        }, "assign"), o = cc11001100_hook("o", i.extend({}, l), "assign"), e.rotatable && (l.rotate = cc11001100_hook("l.rotate", r.rotate || 0, "assign"), o.rotate = cc11001100_hook("o.rotate", 0, "assign")), e.scalable && (l.scaleX = cc11001100_hook("l.scaleX", r.scaleX || 1, "assign"), l.scaleY = cc11001100_hook("l.scaleY", r.scaleY || 1, "assign"), o.scaleX = cc11001100_hook("o.scaleX", 1, "assign"), o.scaleY = cc11001100_hook("o.scaleY", 1, "assign")), this.image = cc11001100_hook("this.image", l, "assign"), this.initialImage = cc11001100_hook("this.initialImage", o, "assign"), i.isFunction(t) && t();
      }, this));
    },
    renderImage: function (t) {
      var e = cc11001100_hook("e", this.image, "var-init"),
        s = cc11001100_hook("s", this.$image, "var-init");
      s.css({
        width: cc11001100_hook("width", e.width, "object-key-init"),
        height: cc11001100_hook("height", e.height, "object-key-init"),
        marginLeft: cc11001100_hook("marginLeft", e.left, "object-key-init"),
        marginTop: cc11001100_hook("marginTop", e.top, "object-key-init"),
        transform: cc11001100_hook("transform", a(e), "object-key-init")
      }), i.isFunction(t) && (this.transitioning ? s.one(R, t) : t());
    },
    resetImage: function () {
      this.$image.remove(), this.$image = cc11001100_hook("this.$image", null, "assign");
    },
    start: function (t) {
      var e = cc11001100_hook("e", t.target, "var-init");
      i(e).is("img") && (this.target = cc11001100_hook("this.target", e, "assign"), this.show());
    },
    click: function (t) {
      var e = cc11001100_hook("e", i(t.target), "var-init"),
        s = cc11001100_hook("s", e.data("action"), "var-init"),
        n = cc11001100_hook("n", this.image, "var-init");
      switch (s) {
        case "mix":
          this.isPlayed ? this.stop() : this.options.inline ? this.isFulled ? this.exit() : this.full() : this.hide();
          break;
        case "view":
          this.view(e.data("index"));
          break;
        case "zoom-in":
          this.zoom(.1, !0);
          break;
        case "zoom-out":
          this.zoom(-.1, !0);
          break;
        case "one-to-one":
          this.toggle();
          break;
        case "reset":
          this.reset();
          break;
        case "prev":
          this.prev();
          break;
        case "play":
          this.play();
          break;
        case "next":
          this.next();
          break;
        case "rotate-left":
          this.rotate(-90);
          break;
        case "rotate-right":
          this.rotate(90);
          break;
        case "flip-horizontal":
          this.scaleX(-n.scaleX || -1);
          break;
        case "flip-vertical":
          this.scaleY(-n.scaleY || -1);
          break;
        default:
          this.isPlayed && this.stop();
      }
    },
    load: function () {
      var t = cc11001100_hook("t", this.options, "var-init"),
        e = cc11001100_hook("e", this.viewer, "var-init"),
        s = cc11001100_hook("s", this.$image, "var-init");
      this.timeout && (clearTimeout(this.timeout), this.timeout = cc11001100_hook("this.timeout", !1, "assign")), s.removeClass(I).css("cssText", "width:0;height:0;margin-left:" + e.width / 2 + "px;margin-top:" + e.height / 2 + "px;max-width:none!important;visibility:visible;"), this.initImage(i.proxy(function () {
        s.toggleClass(X, t.transition).toggleClass(Y, t.movable), this.renderImage(i.proxy(function () {
          this.isViewed = cc11001100_hook("this.isViewed", !0, "assign"), this.trigger(K);
        }, this));
      }, this));
    },
    loadImage: function (t) {
      var e = cc11001100_hook("e", t.target, "var-init"),
        s = cc11001100_hook("s", i(e), "var-init"),
        n = cc11001100_hook("n", s.parent(), "var-init"),
        o = cc11001100_hook("o", n.width(), "var-init"),
        a = cc11001100_hook("a", n.height(), "var-init"),
        h = cc11001100_hook("h", t.data && t.data.filled, "var-init");
      l(e, function (i, t) {
        var e = cc11001100_hook("e", i / t, "var-init"),
          n = cc11001100_hook("n", o, "var-init"),
          r = cc11001100_hook("r", a, "var-init");
        a * e > o ? h ? n = cc11001100_hook("n", a * e, "assign") : r = cc11001100_hook("r", o / e, "assign") : h ? r = cc11001100_hook("r", o / e, "assign") : n = cc11001100_hook("n", a * e, "assign"), s.css({
          width: cc11001100_hook("width", n, "object-key-init"),
          height: cc11001100_hook("height", r, "object-key-init"),
          marginLeft: cc11001100_hook("marginLeft", (o - n) / 2, "object-key-init"),
          marginTop: cc11001100_hook("marginTop", (a - r) / 2, "object-key-init")
        });
      });
    },
    resize: function () {
      this.initContainer(), this.initViewer(), this.renderViewer(), this.renderList(), this.initImage(i.proxy(function () {
        this.renderImage();
      }, this)), this.isPlayed && this.$player.find(E).one(M, i.proxy(this.loadImage, this)).trigger(M);
    },
    wheel: function (t) {
      var e = cc11001100_hook("e", t.originalEvent || t, "var-init"),
        s = cc11001100_hook("s", si(this.options.zoomRatio) || .1, "var-init"),
        n = cc11001100_hook("n", 1, "var-init");
      this.isViewed && (t.preventDefault(), this.wheeling || (this.wheeling = cc11001100_hook("this.wheeling", !0, "assign"), setTimeout(i.proxy(function () {
        this.wheeling = cc11001100_hook("this.wheeling", !1, "assign");
      }, this), 50), e.deltaY ? n = cc11001100_hook("n", e.deltaY > 0 ? 1 : -1, "assign") : e.wheelDelta ? n = cc11001100_hook("n", -e.wheelDelta / 120, "assign") : e.detail && (n = cc11001100_hook("n", e.detail > 0 ? 1 : -1, "assign")), this.zoom(-n * s, !0, t)));
    },
    keydown: function (i) {
      var t = cc11001100_hook("t", this.options, "var-init"),
        e = cc11001100_hook("e", i.which, "var-init");
      if (this.isFulled && t.keyboard) switch (e) {
        case 27:
          this.isPlayed ? this.stop() : t.inline ? this.isFulled && this.exit() : this.hide();
          break;
        case 32:
          this.isPlayed && this.stop();
          break;
        case 37:
          this.prev();
          break;
        case 38:
          i.preventDefault(), this.zoom(t.zoomRatio, !0);
          break;
        case 39:
          this.next();
          break;
        case 40:
          i.preventDefault(), this.zoom(-t.zoomRatio, !0);
          break;
        case 48:
        case 49:
          (i.ctrlKey || i.shiftKey) && (i.preventDefault(), this.toggle());
      }
    },
    mousedown: function (i) {
      var t,
        e = cc11001100_hook("e", this.options, "var-init"),
        s = cc11001100_hook("s", i.originalEvent, "var-init"),
        n = cc11001100_hook("n", s && s.touches, "var-init"),
        o = cc11001100_hook("o", i, "var-init"),
        a = cc11001100_hook("a", e.movable ? "move" : !1, "var-init");
      if (this.isViewed) {
        if (n) {
          if (t = cc11001100_hook("t", n.length, "assign"), t > 1) {
            if (!e.zoomable || 2 !== t) return;
            o = cc11001100_hook("o", n[1], "assign"), this.startX2 = cc11001100_hook("this.startX2", o.pageX, "assign"), this.startY2 = cc11001100_hook("this.startY2", o.pageY, "assign"), a = cc11001100_hook("a", "zoom", "assign");
          } else this.isSwitchable() && (a = cc11001100_hook("a", "switch", "assign"));
          o = cc11001100_hook("o", n[0], "assign");
        }
        a && (i.preventDefault(), this.action = cc11001100_hook("this.action", a, "assign"), this.startX = cc11001100_hook("this.startX", o.pageX || s && s.pageX, "assign"), this.startY = cc11001100_hook("this.startY", o.pageY || s && s.pageY, "assign"));
      }
    },
    mousemove: function (i) {
      var t,
        e = cc11001100_hook("e", this.options, "var-init"),
        s = cc11001100_hook("s", this.action, "var-init"),
        n = cc11001100_hook("n", this.$image, "var-init"),
        o = cc11001100_hook("o", i.originalEvent, "var-init"),
        a = cc11001100_hook("a", o && o.touches, "var-init"),
        h = cc11001100_hook("h", i, "var-init");
      if (this.isViewed) {
        if (a) {
          if (t = cc11001100_hook("t", a.length, "assign"), t > 1) {
            if (!e.zoomable || 2 !== t) return;
            h = cc11001100_hook("h", a[1], "assign"), this.endX2 = cc11001100_hook("this.endX2", h.pageX, "assign"), this.endY2 = cc11001100_hook("this.endY2", h.pageY, "assign");
          }
          h = cc11001100_hook("h", a[0], "assign");
        }
        s && (i.preventDefault(), "move" === s && e.transition && n.hasClass(X) && n.removeClass(X), this.endX = cc11001100_hook("this.endX", h.pageX || o && o.pageX, "assign"), this.endY = cc11001100_hook("this.endY", h.pageY || o && o.pageY, "assign"), this.change(i));
      }
    },
    mouseup: function (i) {
      var t = cc11001100_hook("t", this.action, "var-init");
      t && (i.preventDefault(), "move" === t && this.options.transition && this.$image.addClass(X), this.action = cc11001100_hook("this.action", !1, "assign"));
    },
    show: function () {
      var t,
        e = cc11001100_hook("e", this.options, "var-init");
      e.inline || this.transitioning || (this.isBuilt || this.build(), i.isFunction(e.show) && this.$element.one(H, e.show), this.trigger(H).isDefaultPrevented() || (this.$body.addClass(p), t = cc11001100_hook("t", this.$viewer.removeClass(y), "assign"), this.$element.one(U, i.proxy(function () {
        this.view(this.target ? this.$images.index(this.target) : this.index), this.target = cc11001100_hook("this.target", !1, "assign");
      }, this)), e.transition ? (this.transitioning = cc11001100_hook("this.transitioning", !0, "assign"), t.addClass(X), h(t[0]), t.one(R, i.proxy(this.shown, this)).addClass(F)) : (t.addClass(F), this.shown())));
    },
    hide: function () {
      var t = cc11001100_hook("t", this.options, "var-init"),
        e = cc11001100_hook("e", this.$viewer, "var-init");
      t.inline || this.transitioning || !this.isShown || (i.isFunction(t.hide) && this.$element.one(N, t.hide), this.trigger(N).isDefaultPrevented() || (this.isViewed && t.transition ? (this.transitioning = cc11001100_hook("this.transitioning", !0, "assign"), this.$image.one(R, i.proxy(function () {
        e.one(R, i.proxy(this.hidden, this)).removeClass(F);
      }, this)), this.zoomTo(0, !1, !1, !0)) : (e.removeClass(F), this.hidden())));
    },
    view: function (t) {
      var e,
        s,
        n,
        o,
        a,
        h = cc11001100_hook("h", this.$title, "var-init");
      t = cc11001100_hook("t", Number(t) || 0, "assign"), !this.isShown || this.isPlayed || 0 > t || t >= this.length || this.isViewed && t === this.index || this.trigger(Z).isDefaultPrevented() || (s = cc11001100_hook("s", this.$items.eq(t), "assign"), n = cc11001100_hook("n", s.find(E), "assign"), o = cc11001100_hook("o", n.data("originalUrl"), "assign"), a = cc11001100_hook("a", n.attr("alt"), "assign"), this.$image = cc11001100_hook("this.$image", e = cc11001100_hook("e", i('<img src="' + o + '" alt="' + a + '">'), "assign"), "assign"), this.isViewed && this.$items.eq(this.index).removeClass(k), s.addClass(k), this.isViewed = cc11001100_hook("this.isViewed", !1, "assign"), this.index = cc11001100_hook("this.index", t, "assign"), this.image = cc11001100_hook("this.image", null, "assign"), this.$canvas.html(e.addClass(I)), this.renderList(), h.empty(), this.$element.one(K, i.proxy(function () {
        var i = cc11001100_hook("i", this.image, "var-init"),
          t = cc11001100_hook("t", i.naturalWidth, "var-init"),
          e = cc11001100_hook("e", i.naturalHeight, "var-init");
        h.html(a + " (" + t + " &times; " + e + ")");
      }, this)), e[0].complete ? this.load() : (e.one(M, i.proxy(this.load, this)), this.timeout && clearTimeout(this.timeout), this.timeout = cc11001100_hook("this.timeout", setTimeout(i.proxy(function () {
        e.removeClass(I), this.timeout = cc11001100_hook("this.timeout", !1, "assign");
      }, this), 1e3), "assign")));
    },
    prev: function () {
      this.view(ei(this.index - 1, 0));
    },
    next: function () {
      this.view(ti(this.index + 1, this.length - 1));
    },
    move: function (i, t) {
      var e = cc11001100_hook("e", this.image, "var-init");
      this.moveTo(s(i) ? i : e.left + si(i), s(t) ? t : e.top + si(t));
    },
    moveTo: function (i, t) {
      var n = cc11001100_hook("n", this.image, "var-init"),
        o = cc11001100_hook("o", !1, "var-init");
      s(t) && (t = cc11001100_hook("t", i, "assign")), i = cc11001100_hook("i", si(i), "assign"), t = cc11001100_hook("t", si(t), "assign"), this.isViewed && !this.isPlayed && this.options.movable && (e(i) && (n.left = cc11001100_hook("n.left", i, "assign"), o = cc11001100_hook("o", !0, "assign")), e(t) && (n.top = cc11001100_hook("n.top", t, "assign"), o = cc11001100_hook("o", !0, "assign")), o && this.renderImage());
    },
    zoom: function (i, t, e) {
      var s = cc11001100_hook("s", this.image, "var-init");
      i = cc11001100_hook("i", si(i), "assign"), i = cc11001100_hook("i", 0 > i ? 1 / (1 - i) : 1 + i, "assign"), this.zoomTo(s.width * i / s.naturalWidth, t, e);
    },
    zoomTo: function (i, t, s, n) {
      var o,
        a,
        h,
        r,
        l,
        c = cc11001100_hook("c", this.options, "var-init"),
        u = cc11001100_hook("u", .01, "var-init"),
        m = cc11001100_hook("m", 100, "var-init"),
        v = cc11001100_hook("v", this.image, "var-init"),
        f = cc11001100_hook("f", v.width, "var-init"),
        g = cc11001100_hook("g", v.height, "var-init");
      i = cc11001100_hook("i", ei(0, i), "assign"), e(i) && this.isViewed && !this.isPlayed && (n || c.zoomable) && (n || (u = cc11001100_hook("u", ei(u, c.minZoomRatio), "assign"), m = cc11001100_hook("m", ti(m, c.maxZoomRatio), "assign"), i = cc11001100_hook("i", ti(ei(i, u), m), "assign")), i > .95 && 1.05 > i && (i = cc11001100_hook("i", 1, "assign")), a = cc11001100_hook("a", v.naturalWidth * i, "assign"), h = cc11001100_hook("h", v.naturalHeight * i, "assign"), s && (o = cc11001100_hook("o", s.originalEvent, "assign")) ? (r = cc11001100_hook("r", this.$viewer.offset(), "assign"), l = cc11001100_hook("l", o.touches ? d(o.touches) : {
        pageX: cc11001100_hook("pageX", s.pageX || o.pageX || 0, "object-key-init"),
        pageY: cc11001100_hook("pageY", s.pageY || o.pageY || 0, "object-key-init")
      }, "assign"), v.left -= cc11001100_hook("v.left", (a - f) * ((l.pageX - r.left - v.left) / f), "assign"), v.top -= cc11001100_hook("v.top", (h - g) * ((l.pageY - r.top - v.top) / g), "assign")) : (v.left -= cc11001100_hook("v.left", (a - f) / 2, "assign"), v.top -= cc11001100_hook("v.top", (h - g) / 2, "assign")), v.width = cc11001100_hook("v.width", a, "assign"), v.height = cc11001100_hook("v.height", h, "assign"), v.ratio = cc11001100_hook("v.ratio", i, "assign"), this.renderImage(), t && this.tooltip());
    },
    rotate: function (i) {
      this.rotateTo((this.image.rotate || 0) + si(i));
    },
    rotateTo: function (i) {
      var t = cc11001100_hook("t", this.image, "var-init");
      i = cc11001100_hook("i", si(i), "assign"), e(i) && this.isViewed && !this.isPlayed && this.options.rotatable && (t.rotate = cc11001100_hook("t.rotate", i, "assign"), this.renderImage());
    },
    scale: function (i, t) {
      var n = cc11001100_hook("n", this.image, "var-init"),
        o = cc11001100_hook("o", !1, "var-init");
      s(t) && (t = cc11001100_hook("t", i, "assign")), i = cc11001100_hook("i", si(i), "assign"), t = cc11001100_hook("t", si(t), "assign"), this.isViewed && !this.isPlayed && this.options.scalable && (e(i) && (n.scaleX = cc11001100_hook("n.scaleX", i, "assign"), o = cc11001100_hook("o", !0, "assign")), e(t) && (n.scaleY = cc11001100_hook("n.scaleY", t, "assign"), o = cc11001100_hook("o", !0, "assign")), o && this.renderImage());
    },
    scaleX: function (i) {
      this.scale(i, this.image.scaleY);
    },
    scaleY: function (i) {
      this.scale(this.image.scaleX, i);
    },
    play: function () {
      var t,
        s = cc11001100_hook("s", this.options, "var-init"),
        n = cc11001100_hook("n", this.$player, "var-init"),
        o = cc11001100_hook("o", i.proxy(this.loadImage, this), "var-init"),
        a = cc11001100_hook("a", [], "var-init"),
        h = cc11001100_hook("h", 0, "var-init"),
        r = cc11001100_hook("r", 0, "var-init");
      this.isShown && !this.isPlayed && (s.fullscreen && this.requestFullscreen(), this.isPlayed = cc11001100_hook("this.isPlayed", !0, "assign"), n.addClass(b), this.$items.each(function (t) {
        var e = cc11001100_hook("e", i(this), "var-init"),
          l = cc11001100_hook("l", e.find(E), "var-init"),
          d = cc11001100_hook("d", i('<img src="' + l.data("originalUrl") + '" alt="' + l.attr("alt") + '">'), "var-init");
        h++, d.addClass(z).toggleClass(X, s.transition), e.hasClass(k) && (d.addClass(F), r = cc11001100_hook("r", t, "assign")), a.push(d), d.one(M, {
          filled: cc11001100_hook("filled", !1, "object-key-init")
        }, o), n.append(d);
      }), e(s.interval) && s.interval > 0 && (t = cc11001100_hook("t", i.proxy(function () {
        this.playing = cc11001100_hook("this.playing", setTimeout(function () {
          a[r].removeClass(F), r++, r = cc11001100_hook("r", h > r ? r : 0, "assign"), a[r].addClass(F), t();
        }, s.interval), "assign");
      }, this), "assign"), h > 1 && t()));
    },
    stop: function () {
      this.isPlayed && (this.options.fullscreen && this.exitFullscreen(), this.isPlayed = cc11001100_hook("this.isPlayed", !1, "assign"), clearTimeout(this.playing), this.$player.removeClass(b).empty());
    },
    full: function () {
      var t = cc11001100_hook("t", this.options, "var-init"),
        e = cc11001100_hook("e", this.$image, "var-init"),
        s = cc11001100_hook("s", this.$list, "var-init");
      this.isShown && !this.isPlayed && !this.isFulled && t.inline && (this.isFulled = cc11001100_hook("this.isFulled", !0, "assign"), this.$body.addClass(p), this.$button.addClass(T), t.transition && (e.removeClass(X), s.removeClass(X)), this.$viewer.addClass(w).removeAttr("style").css("z-index", t.zIndex), this.initContainer(), this.viewer = cc11001100_hook("this.viewer", i.extend({}, this.container), "assign"), this.renderList(), this.initImage(i.proxy(function () {
        this.renderImage(function () {
          t.transition && setTimeout(function () {
            e.addClass(X), s.addClass(X);
          }, 0);
        });
      }, this)));
    },
    exit: function () {
      var t = cc11001100_hook("t", this.options, "var-init"),
        e = cc11001100_hook("e", this.$image, "var-init"),
        s = cc11001100_hook("s", this.$list, "var-init");
      this.isFulled && (this.isFulled = cc11001100_hook("this.isFulled", !1, "assign"), this.$body.removeClass(p), this.$button.removeClass(T), t.transition && (e.removeClass(X), s.removeClass(X)), this.$viewer.removeClass(w).css("z-index", t.zIndexInline), this.viewer = cc11001100_hook("this.viewer", i.extend({}, this.parent), "assign"), this.renderViewer(), this.renderList(), this.initImage(i.proxy(function () {
        this.renderImage(function () {
          t.transition && setTimeout(function () {
            e.addClass(X), s.addClass(X);
          }, 0);
        });
      }, this)));
    },
    tooltip: function () {
      var t = cc11001100_hook("t", this.options, "var-init"),
        e = cc11001100_hook("e", this.$tooltip, "var-init"),
        s = cc11001100_hook("s", this.image, "var-init"),
        n = cc11001100_hook("n", [b, z, X].join(" "), "var-init");
      this.isViewed && !this.isPlayed && t.tooltip && (e.text(G(100 * s.ratio) + "%"), this.tooltiping ? clearTimeout(this.tooltiping) : t.transition ? (this.fading && e.trigger(R), e.addClass(n), h(e[0]), e.addClass(F)) : e.addClass(b), this.tooltiping = cc11001100_hook("this.tooltiping", setTimeout(i.proxy(function () {
        t.transition ? (e.one(R, i.proxy(function () {
          e.removeClass(n), this.fading = cc11001100_hook("this.fading", !1, "assign");
        }, this)).removeClass(F), this.fading = cc11001100_hook("this.fading", !0, "assign")) : e.removeClass(b), this.tooltiping = cc11001100_hook("this.tooltiping", !1, "assign");
      }, this), 1e3), "assign"));
    },
    toggle: function () {
      1 === this.image.ratio ? this.zoomTo(this.initialImage.ratio, !0) : this.zoomTo(1, !0);
    },
    reset: function () {
      this.isViewed && !this.isPlayed && (this.image = cc11001100_hook("this.image", i.extend({}, this.initialImage), "assign"), this.renderImage());
    },
    update: function () {
      var t,
        e = cc11001100_hook("e", this.$element, "var-init"),
        s = cc11001100_hook("s", this.$images, "var-init"),
        n = cc11001100_hook("n", [], "var-init");
      if (this.isImg) {
        if (!e.parent().length) return this.destroy();
      } else this.$images = cc11001100_hook("this.$images", s = cc11001100_hook("s", e.find(E), "assign"), "assign"), this.length = cc11001100_hook("this.length", s.length, "assign");
      this.isBuilt && (i.each(this.$items, function (t) {
        var e = cc11001100_hook("e", i(this).find("img")[0], "var-init"),
          o = cc11001100_hook("o", s[t], "var-init");
        o ? o.src !== e.src && n.push(t) : n.push(t);
      }), this.$list.width("auto"), this.initList(), this.isShown && (this.length ? this.isViewed && (t = cc11001100_hook("t", i.inArray(this.index, n), "assign"), t >= 0 ? (this.isViewed = cc11001100_hook("this.isViewed", !1, "assign"), this.view(ei(this.index - (t + 1), 0))) : this.$items.eq(this.index).addClass(k)) : (this.$image = cc11001100_hook("this.$image", null, "assign"), this.isViewed = cc11001100_hook("this.isViewed", !1, "assign"), this.index = cc11001100_hook("this.index", 0, "assign"), this.image = cc11001100_hook("this.image", null, "assign"), this.$canvas.empty(), this.$title.empty())));
    },
    destroy: function () {
      var i = cc11001100_hook("i", this.$element, "var-init");
      this.options.inline ? this.unbind() : (this.isShown && this.unbind(), i.off(_, this.start)), this.unbuild(), i.removeData(f);
    },
    trigger: function (t, e) {
      var s = cc11001100_hook("s", i.Event(t, e), "var-init");
      return this.$element.trigger(s), s;
    },
    shown: function () {
      var t = cc11001100_hook("t", this.options, "var-init");
      this.transitioning = cc11001100_hook("this.transitioning", !1, "assign"), this.isFulled = cc11001100_hook("this.isFulled", !0, "assign"), this.isShown = cc11001100_hook("this.isShown", !0, "assign"), this.isVisible = cc11001100_hook("this.isVisible", !0, "assign"), this.render(), this.bind(), i.isFunction(t.shown) && this.$element.one(U, t.shown), this.trigger(U);
    },
    hidden: function () {
      var t = cc11001100_hook("t", this.options, "var-init");
      this.transitioning = cc11001100_hook("this.transitioning", !1, "assign"), this.isViewed = cc11001100_hook("this.isViewed", !1, "assign"), this.isFulled = cc11001100_hook("this.isFulled", !1, "assign"), this.isShown = cc11001100_hook("this.isShown", !1, "assign"), this.isVisible = cc11001100_hook("this.isVisible", !1, "assign"), this.unbind(), this.$body.removeClass(p), this.$viewer.addClass(y), this.resetList(), this.resetImage(), i.isFunction(t.hidden) && this.$element.one(O, t.hidden), this.trigger(O);
    },
    requestFullscreen: function () {
      var i = cc11001100_hook("i", document.documentElement, "var-init");
      !this.isFulled || document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || (i.requestFullscreen ? i.requestFullscreen() : i.msRequestFullscreen ? i.msRequestFullscreen() : i.mozRequestFullScreen ? i.mozRequestFullScreen() : i.webkitRequestFullscreen && i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT));
    },
    exitFullscreen: function () {
      this.isFulled && (document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen());
    },
    change: function (i) {
      var t = cc11001100_hook("t", this.endX - this.startX, "var-init"),
        e = cc11001100_hook("e", this.endY - this.startY, "var-init");
      switch (this.action) {
        case "move":
          this.move(t, e);
          break;
        case "zoom":
          this.zoom(function (i, t, e, s) {
            var n = cc11001100_hook("n", J(i * i + t * t), "var-init"),
              o = cc11001100_hook("o", J(e * e + s * s), "var-init");
            return (o - n) / n;
          }(ii(this.startX - this.startX2), ii(this.startY - this.startY2), ii(this.endX - this.endX2), ii(this.endY - this.endY2)), !1, i), this.startX2 = cc11001100_hook("this.startX2", this.endX2, "assign"), this.startY2 = cc11001100_hook("this.startY2", this.endY2, "assign");
          break;
        case "switch":
          this.action = cc11001100_hook("this.action", "switched", "assign"), ii(t) > ii(e) && (t > 1 ? this.prev() : -1 > t && this.next());
      }
      this.startX = cc11001100_hook("this.startX", this.endX, "assign"), this.startY = cc11001100_hook("this.startY", this.endY, "assign");
    },
    isSwitchable: function () {
      var i = cc11001100_hook("i", this.image, "var-init"),
        t = cc11001100_hook("t", this.viewer, "var-init");
      return i.left >= 0 && i.top >= 0 && i.width <= t.width && i.height <= t.height;
    }
  }, "assign"), u.DEFAULTS = cc11001100_hook("u.DEFAULTS", {
    inline: cc11001100_hook("inline", !1, "object-key-init"),
    button: cc11001100_hook("button", !0, "object-key-init"),
    navbar: cc11001100_hook("navbar", !0, "object-key-init"),
    title: cc11001100_hook("title", !0, "object-key-init"),
    toolbar: cc11001100_hook("toolbar", !0, "object-key-init"),
    tooltip: cc11001100_hook("tooltip", !0, "object-key-init"),
    movable: cc11001100_hook("movable", !0, "object-key-init"),
    zoomable: cc11001100_hook("zoomable", !0, "object-key-init"),
    rotatable: cc11001100_hook("rotatable", !0, "object-key-init"),
    scalable: cc11001100_hook("scalable", !0, "object-key-init"),
    transition: cc11001100_hook("transition", !0, "object-key-init"),
    fullscreen: cc11001100_hook("fullscreen", !0, "object-key-init"),
    keyboard: cc11001100_hook("keyboard", !0, "object-key-init"),
    interval: cc11001100_hook("interval", 5e3, "object-key-init"),
    minWidth: cc11001100_hook("minWidth", 200, "object-key-init"),
    minHeight: cc11001100_hook("minHeight", 100, "object-key-init"),
    zoomRatio: cc11001100_hook("zoomRatio", .1, "object-key-init"),
    minZoomRatio: cc11001100_hook("minZoomRatio", .01, "object-key-init"),
    maxZoomRatio: cc11001100_hook("maxZoomRatio", 100, "object-key-init"),
    zIndex: cc11001100_hook("zIndex", 2015, "object-key-init"),
    zIndexInline: cc11001100_hook("zIndexInline", 0, "object-key-init"),
    url: cc11001100_hook("url", "src", "object-key-init"),
    build: cc11001100_hook("build", null, "object-key-init"),
    built: cc11001100_hook("built", null, "object-key-init"),
    show: cc11001100_hook("show", null, "object-key-init"),
    shown: cc11001100_hook("shown", null, "object-key-init"),
    hide: cc11001100_hook("hide", null, "object-key-init"),
    hidden: cc11001100_hook("hidden", null, "object-key-init"),
    view: cc11001100_hook("view", null, "object-key-init"),
    viewed: cc11001100_hook("viewed", null, "object-key-init")
  }, "assign"), u.TEMPLATE = cc11001100_hook("u.TEMPLATE", '<div class="viewer-container"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><ul class="viewer-toolbar"><li class="viewer-zoom-in" data-action="zoom-in"></li><li class="viewer-zoom-out" data-action="zoom-out"></li><li class="viewer-one-to-one" data-action="one-to-one"></li><li class="viewer-reset" data-action="reset"></li><li class="viewer-prev" data-action="prev"></li><li class="viewer-play" data-action="play"></li><li class="viewer-next" data-action="next"></li><li class="viewer-rotate-left" data-action="rotate-left"></li><li class="viewer-rotate-right" data-action="rotate-right"></li><li class="viewer-flip-horizontal" data-action="flip-horizontal"></li><li class="viewer-flip-vertical" data-action="flip-vertical"></li></ul><div class="viewer-navbar"><ul class="viewer-list"></ul></div></div><div class="viewer-tooltip"></div><div class="viewer-button" data-action="mix"></div><div class="viewer-player"></div></div>', "assign"), u.other = cc11001100_hook("u.other", i.fn.viewer, "assign"), i.fn.viewer = cc11001100_hook("i.fn.viewer", function (e) {
    var o,
      a = cc11001100_hook("a", n(arguments, 1), "var-init");
    return this.each(function () {
      var s,
        n = cc11001100_hook("n", i(this), "var-init"),
        h = cc11001100_hook("h", n.data(f), "var-init");
      if (!h) {
        if (/destroy|hide|exit|stop|reset/.test(e)) return;
        n.data(f, h = cc11001100_hook("h", new u(this, e), "assign"));
      }
      t(e) && i.isFunction(s = cc11001100_hook("s", h[e], "assign")) && (o = cc11001100_hook("o", s.apply(h, a), "assign"));
    }), s(o) ? this : o;
  }, "assign"), i.fn.viewer.Constructor = cc11001100_hook("i.fn.viewer.Constructor", u, "assign"), i.fn.viewer.setDefaults = cc11001100_hook("i.fn.viewer.setDefaults", u.setDefaults, "assign"), i.fn.viewer.noConflict = cc11001100_hook("i.fn.viewer.noConflict", function () {
    return i.fn.viewer = cc11001100_hook("i.fn.viewer", u.other, "assign"), this;
  }, "assign");
});