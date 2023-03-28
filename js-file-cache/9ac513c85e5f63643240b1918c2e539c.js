(function (r, G, f, v) {
  var J = cc11001100_hook("J", f("html"), "var-init"),
    n = cc11001100_hook("n", f(r), "var-init"),
    p = cc11001100_hook("p", f(G), "var-init"),
    b = cc11001100_hook("b", f.fancybox = cc11001100_hook("f.fancybox", function () {
      b.open.apply(this, arguments);
    }, "assign"), "var-init"),
    I = cc11001100_hook("I", navigator.userAgent.match(/msie/i), "var-init"),
    B = cc11001100_hook("B", null, "var-init"),
    s = cc11001100_hook("s", G.createTouch !== v, "var-init"),
    t = function (a) {
      return a && a.hasOwnProperty && a instanceof f;
    },
    q = function (a) {
      return a && "string" === f.type(a);
    },
    E = function (a) {
      return q(a) && 0 < a.indexOf("%");
    },
    l = function (a, d) {
      var e = cc11001100_hook("e", parseInt(a, 10) || 0, "var-init");
      d && E(a) && (e *= cc11001100_hook("e", b.getViewport()[d] / 100, "assign"));
      return Math.ceil(e);
    },
    w = function (a, b) {
      return l(a, b) + "px";
    };
  f.extend(b, {
    version: cc11001100_hook("version", "2.1.5", "object-key-init"),
    defaults: {
      padding: cc11001100_hook("padding", 15, "object-key-init"),
      margin: cc11001100_hook("margin", 20, "object-key-init"),
      width: cc11001100_hook("width", 800, "object-key-init"),
      height: cc11001100_hook("height", 600, "object-key-init"),
      minWidth: cc11001100_hook("minWidth", 100, "object-key-init"),
      minHeight: cc11001100_hook("minHeight", 100, "object-key-init"),
      maxWidth: cc11001100_hook("maxWidth", 9999, "object-key-init"),
      maxHeight: cc11001100_hook("maxHeight", 9999, "object-key-init"),
      pixelRatio: cc11001100_hook("pixelRatio", 1, "object-key-init"),
      autoSize: cc11001100_hook("autoSize", !0, "object-key-init"),
      autoHeight: cc11001100_hook("autoHeight", !1, "object-key-init"),
      autoWidth: cc11001100_hook("autoWidth", !1, "object-key-init"),
      autoResize: cc11001100_hook("autoResize", !0, "object-key-init"),
      autoCenter: cc11001100_hook("autoCenter", !s, "object-key-init"),
      fitToView: cc11001100_hook("fitToView", !0, "object-key-init"),
      aspectRatio: cc11001100_hook("aspectRatio", !1, "object-key-init"),
      topRatio: cc11001100_hook("topRatio", 0.5, "object-key-init"),
      leftRatio: cc11001100_hook("leftRatio", 0.5, "object-key-init"),
      scrolling: cc11001100_hook("scrolling", "auto", "object-key-init"),
      wrapCSS: cc11001100_hook("wrapCSS", "", "object-key-init"),
      arrows: cc11001100_hook("arrows", !0, "object-key-init"),
      closeBtn: cc11001100_hook("closeBtn", !0, "object-key-init"),
      closeClick: cc11001100_hook("closeClick", !1, "object-key-init"),
      nextClick: cc11001100_hook("nextClick", !1, "object-key-init"),
      mouseWheel: cc11001100_hook("mouseWheel", !0, "object-key-init"),
      autoPlay: cc11001100_hook("autoPlay", !1, "object-key-init"),
      playSpeed: cc11001100_hook("playSpeed", 3E3, "object-key-init"),
      preload: cc11001100_hook("preload", 3, "object-key-init"),
      modal: cc11001100_hook("modal", !1, "object-key-init"),
      loop: cc11001100_hook("loop", !0, "object-key-init"),
      ajax: {
        dataType: cc11001100_hook("dataType", "html", "object-key-init"),
        headers: {
          "X-fancyBox": cc11001100_hook("X-fancyBox", !0, "object-key-init")
        }
      },
      iframe: {
        scrolling: cc11001100_hook("scrolling", "auto", "object-key-init"),
        preload: cc11001100_hook("preload", !0, "object-key-init")
      },
      swf: {
        wmode: cc11001100_hook("wmode", "transparent", "object-key-init"),
        allowfullscreen: cc11001100_hook("allowfullscreen", "true", "object-key-init"),
        allowscriptaccess: cc11001100_hook("allowscriptaccess", "always", "object-key-init")
      },
      keys: {
        next: {
          13: cc11001100_hook(13, "left", "object-key-init"),
          34: cc11001100_hook(34, "up", "object-key-init"),
          39: cc11001100_hook(39, "left", "object-key-init"),
          40: cc11001100_hook(40, "up", "object-key-init")
        },
        prev: {
          8: cc11001100_hook(8, "right", "object-key-init"),
          33: cc11001100_hook(33, "down", "object-key-init"),
          37: cc11001100_hook(37, "right", "object-key-init"),
          38: cc11001100_hook(38, "down", "object-key-init")
        },
        close: cc11001100_hook("close", [27], "object-key-init"),
        play: cc11001100_hook("play", [32], "object-key-init"),
        toggle: cc11001100_hook("toggle", [70], "object-key-init")
      },
      direction: {
        next: cc11001100_hook("next", "left", "object-key-init"),
        prev: cc11001100_hook("prev", "right", "object-key-init")
      },
      scrollOutside: cc11001100_hook("scrollOutside", !0, "object-key-init"),
      index: cc11001100_hook("index", 0, "object-key-init"),
      type: cc11001100_hook("type", null, "object-key-init"),
      href: cc11001100_hook("href", null, "object-key-init"),
      content: cc11001100_hook("content", null, "object-key-init"),
      title: cc11001100_hook("title", null, "object-key-init"),
      tpl: {
        wrap: cc11001100_hook("wrap", '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>', "object-key-init"),
        image: cc11001100_hook("image", '<img class="fancybox-image" src="{href}" alt="" />', "object-key-init"),
        iframe: cc11001100_hook("iframe", '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>", "object-key-init"),
        error: cc11001100_hook("error", '<p class="fancybox-error">加载失败，稍后再试 ...</p>', "object-key-init"),
        closeBtn: cc11001100_hook("closeBtn", '<a title="关闭" class="fancybox-item fancybox-close" href="javascript:;"><i class="fa fa-times"></i></a>', "object-key-init"),
        next: cc11001100_hook("next", '<a title="下一张" class="fancybox-nav fancybox-next" href="javascript:;"><span><i class="fa fa-arrow-circle-o-right"></i></span></span></a>', "object-key-init"),
        prev: cc11001100_hook("prev", '<a title="上一张" class="fancybox-nav fancybox-prev" href="javascript:;"><span><i class="fa fa-arrow-circle-o-left"></i></span></a>', "object-key-init")
      },
      openEffect: cc11001100_hook("openEffect", "fade", "object-key-init"),
      openSpeed: cc11001100_hook("openSpeed", 250, "object-key-init"),
      openEasing: cc11001100_hook("openEasing", "swing", "object-key-init"),
      openOpacity: cc11001100_hook("openOpacity", !0, "object-key-init"),
      openMethod: cc11001100_hook("openMethod", "zoomIn", "object-key-init"),
      closeEffect: cc11001100_hook("closeEffect", "fade", "object-key-init"),
      closeSpeed: cc11001100_hook("closeSpeed", 250, "object-key-init"),
      closeEasing: cc11001100_hook("closeEasing", "swing", "object-key-init"),
      closeOpacity: cc11001100_hook("closeOpacity", !0, "object-key-init"),
      closeMethod: cc11001100_hook("closeMethod", "zoomOut", "object-key-init"),
      nextEffect: cc11001100_hook("nextEffect", "elastic", "object-key-init"),
      nextSpeed: cc11001100_hook("nextSpeed", 250, "object-key-init"),
      nextEasing: cc11001100_hook("nextEasing", "swing", "object-key-init"),
      nextMethod: cc11001100_hook("nextMethod", "changeIn", "object-key-init"),
      prevEffect: cc11001100_hook("prevEffect", "elastic", "object-key-init"),
      prevSpeed: cc11001100_hook("prevSpeed", 250, "object-key-init"),
      prevEasing: cc11001100_hook("prevEasing", "swing", "object-key-init"),
      prevMethod: cc11001100_hook("prevMethod", "changeOut", "object-key-init"),
      helpers: {
        overlay: cc11001100_hook("overlay", !0, "object-key-init"),
        title: cc11001100_hook("title", !0, "object-key-init")
      },
      onCancel: cc11001100_hook("onCancel", f.noop, "object-key-init"),
      beforeLoad: cc11001100_hook("beforeLoad", f.noop, "object-key-init"),
      afterLoad: cc11001100_hook("afterLoad", f.noop, "object-key-init"),
      beforeShow: cc11001100_hook("beforeShow", f.noop, "object-key-init"),
      afterShow: cc11001100_hook("afterShow", f.noop, "object-key-init"),
      beforeChange: cc11001100_hook("beforeChange", f.noop, "object-key-init"),
      beforeClose: cc11001100_hook("beforeClose", f.noop, "object-key-init"),
      afterClose: cc11001100_hook("afterClose", f.noop, "object-key-init")
    },
    group: {},
    opts: {},
    previous: cc11001100_hook("previous", null, "object-key-init"),
    coming: cc11001100_hook("coming", null, "object-key-init"),
    current: cc11001100_hook("current", null, "object-key-init"),
    isActive: cc11001100_hook("isActive", !1, "object-key-init"),
    isOpen: cc11001100_hook("isOpen", !1, "object-key-init"),
    isOpened: cc11001100_hook("isOpened", !1, "object-key-init"),
    wrap: cc11001100_hook("wrap", null, "object-key-init"),
    skin: cc11001100_hook("skin", null, "object-key-init"),
    outer: cc11001100_hook("outer", null, "object-key-init"),
    inner: cc11001100_hook("inner", null, "object-key-init"),
    player: {
      timer: cc11001100_hook("timer", null, "object-key-init"),
      isActive: cc11001100_hook("isActive", !1, "object-key-init")
    },
    ajaxLoad: cc11001100_hook("ajaxLoad", null, "object-key-init"),
    imgPreload: cc11001100_hook("imgPreload", null, "object-key-init"),
    transitions: {},
    helpers: {},
    open: function (a, d) {
      if (a && (f.isPlainObject(d) || (d = cc11001100_hook("d", {}, "assign")), !1 !== b.close(!0))) return f.isArray(a) || (a = cc11001100_hook("a", t(a) ? f(a).get() : [a], "assign")), f.each(a, function (e, c) {
        var k = cc11001100_hook("k", {}, "var-init"),
          g,
          h,
          j,
          m,
          l;
        "object" === f.type(c) && (c.nodeType && (c = cc11001100_hook("c", f(c), "assign")), t(c) ? (k = cc11001100_hook("k", {
          href: cc11001100_hook("href", c.data("fancybox-href") || c.attr("href"), "object-key-init"),
          title: cc11001100_hook("title", c.data("fancybox-title") || c.attr("title"), "object-key-init"),
          isDom: cc11001100_hook("isDom", !0, "object-key-init"),
          element: cc11001100_hook("element", c, "object-key-init")
        }, "assign"), f.metadata && f.extend(!0, k, c.metadata())) : k = cc11001100_hook("k", c, "assign"));
        g = cc11001100_hook("g", d.href || k.href || (q(c) ? c : null), "assign");
        h = cc11001100_hook("h", d.title !== v ? d.title : k.title || "", "assign");
        m = cc11001100_hook("m", (j = cc11001100_hook("j", d.content || k.content, "assign")) ? "html" : d.type || k.type, "assign");
        !m && k.isDom && (m = cc11001100_hook("m", c.data("fancybox-type"), "assign"), m || (m = cc11001100_hook("m", (m = cc11001100_hook("m", c.prop("class").match(/fancybox\.(\w+)/), "assign")) ? m[1] : null, "assign")));
        q(g) && (m || (b.isImage(g) ? m = cc11001100_hook("m", "image", "assign") : b.isSWF(g) ? m = cc11001100_hook("m", "swf", "assign") : "#" === g.charAt(0) ? m = cc11001100_hook("m", "inline", "assign") : q(c) && (m = cc11001100_hook("m", "html", "assign"), j = cc11001100_hook("j", c, "assign"))), "ajax" === m && (l = cc11001100_hook("l", g.split(/\s+/, 2), "assign"), g = cc11001100_hook("g", l.shift(), "assign"), l = cc11001100_hook("l", l.shift(), "assign")));
        j || ("inline" === m ? g ? j = cc11001100_hook("j", f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g), "assign") : k.isDom && (j = cc11001100_hook("j", c, "assign")) : "html" === m ? j = cc11001100_hook("j", g, "assign") : !m && !g && k.isDom && (m = cc11001100_hook("m", "inline", "assign"), j = cc11001100_hook("j", c, "assign")));
        f.extend(k, {
          href: cc11001100_hook("href", g, "object-key-init"),
          type: cc11001100_hook("type", m, "object-key-init"),
          content: cc11001100_hook("content", j, "object-key-init"),
          title: cc11001100_hook("title", h, "object-key-init"),
          selector: cc11001100_hook("selector", l, "object-key-init")
        });
        a[e] = cc11001100_hook("a[e]", k, "assign");
      }), b.opts = cc11001100_hook("b.opts", f.extend(!0, {}, b.defaults, d), "assign"), d.keys !== v && (b.opts.keys = cc11001100_hook("b.opts.keys", d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1, "assign")), b.group = cc11001100_hook("b.group", a, "assign"), b._start(b.opts.index);
    },
    cancel: function () {
      var a = cc11001100_hook("a", b.coming, "var-init");
      a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = cc11001100_hook("b.ajaxLoad", null, "assign"), b.imgPreload && (b.imgPreload.onload = cc11001100_hook("b.imgPreload.onload", b.imgPreload.onerror = cc11001100_hook("b.imgPreload.onerror", null, "assign"), "assign")), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = cc11001100_hook("b.coming", null, "assign"), b.current || b._afterZoomOut(a));
    },
    close: function (a) {
      b.cancel();
      !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = cc11001100_hook("b.isOpen", b.isOpened = cc11001100_hook("b.isOpened", !1, "assign"), "assign"), b.isClosing = cc11001100_hook("b.isClosing", !0, "assign"), f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())));
    },
    play: function (a) {
      var d = function () {
          clearTimeout(b.player.timer);
        },
        e = function () {
          d();
          b.current && b.player.isActive && (b.player.timer = cc11001100_hook("b.player.timer", setTimeout(b.next, b.current.playSpeed), "assign"));
        },
        c = function () {
          d();
          p.unbind(".player");
          b.player.isActive = cc11001100_hook("b.player.isActive", !1, "assign");
          b.trigger("onPlayEnd");
        };
      if (!0 === a || !b.player.isActive && !1 !== a) {
        if (b.current && (b.current.loop || b.current.index < b.group.length - 1)) b.player.isActive = cc11001100_hook("b.player.isActive", !0, "assign"), p.bind({
          "onCancel.player beforeClose.player": cc11001100_hook("onCancel.player beforeClose.player", c, "object-key-init"),
          "onUpdate.player": cc11001100_hook("onUpdate.player", e, "object-key-init"),
          "beforeLoad.player": cc11001100_hook("beforeLoad.player", d, "object-key-init")
        }), e(), b.trigger("onPlayStart");
      } else c();
    },
    next: function (a) {
      var d = cc11001100_hook("d", b.current, "var-init");
      d && (q(a) || (a = cc11001100_hook("a", d.direction.next, "assign")), b.jumpto(d.index + 1, a, "next"));
    },
    prev: function (a) {
      var d = cc11001100_hook("d", b.current, "var-init");
      d && (q(a) || (a = cc11001100_hook("a", d.direction.prev, "assign")), b.jumpto(d.index - 1, a, "prev"));
    },
    jumpto: function (a, d, e) {
      var c = cc11001100_hook("c", b.current, "var-init");
      c && (a = cc11001100_hook("a", l(a), "assign"), b.direction = cc11001100_hook("b.direction", d || c.direction[a >= c.index ? "next" : "prev"], "assign"), b.router = cc11001100_hook("b.router", e || "jumpto", "assign"), c.loop && (0 > a && (a = cc11001100_hook("a", c.group.length + a % c.group.length, "assign")), a %= cc11001100_hook("a", c.group.length, "assign")), c.group[a] !== v && (b.cancel(), b._start(a)));
    },
    reposition: function (a, d) {
      var e = cc11001100_hook("e", b.current, "var-init"),
        c = cc11001100_hook("c", e ? e.wrap : null, "var-init"),
        k;
      c && (k = cc11001100_hook("k", b._getPosition(d), "assign"), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = cc11001100_hook("e.pos", f.extend({}, e.dim, k), "assign")));
    },
    update: function (a) {
      var d = cc11001100_hook("d", a && a.type, "var-init"),
        e = cc11001100_hook("e", !d || "orientationchange" === d, "var-init");
      e && (clearTimeout(B), B = cc11001100_hook("B", null, "assign"));
      b.isOpen && !B && (B = cc11001100_hook("B", setTimeout(function () {
        var c = cc11001100_hook("c", b.current, "var-init");
        c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = cc11001100_hook("B", null, "assign"));
      }, e && !s ? 0 : 300), "assign"));
    },
    toggle: function (a) {
      b.isOpen && (b.current.fitToView = cc11001100_hook("b.current.fitToView", "boolean" === f.type(a) ? a : !b.current.fitToView, "assign"), s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update());
    },
    hideLoading: function () {
      p.unbind(".loading");
      f("#fancybox-loading").remove();
    },
    showLoading: function () {
      var a, d;
      b.hideLoading();
      a = cc11001100_hook("a", f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body"), "assign");
      p.bind("keydown.loading", function (a) {
        if (27 === (a.which || a.keyCode)) a.preventDefault(), b.cancel();
      });
      b.defaults.fixed || (d = cc11001100_hook("d", b.getViewport(), "assign"), a.css({
        position: cc11001100_hook("position", "absolute", "object-key-init"),
        top: cc11001100_hook("top", 0.5 * d.h + d.y, "object-key-init"),
        left: cc11001100_hook("left", 0.5 * d.w + d.x, "object-key-init")
      }));
    },
    getViewport: function () {
      var a = cc11001100_hook("a", b.current && b.current.locked || !1, "var-init"),
        d = cc11001100_hook("d", {
          x: cc11001100_hook("x", n.scrollLeft(), "object-key-init"),
          y: cc11001100_hook("y", n.scrollTop(), "object-key-init")
        }, "var-init");
      a ? (d.w = cc11001100_hook("d.w", a[0].clientWidth, "assign"), d.h = cc11001100_hook("d.h", a[0].clientHeight, "assign")) : (d.w = cc11001100_hook("d.w", s && r.innerWidth ? r.innerWidth : n.width(), "assign"), d.h = cc11001100_hook("d.h", s && r.innerHeight ? r.innerHeight : n.height(), "assign"));
      return d;
    },
    unbindEvents: function () {
      b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
      p.unbind(".fb");
      n.unbind(".fb");
    },
    bindEvents: function () {
      var a = cc11001100_hook("a", b.current, "var-init"),
        d;
      a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = cc11001100_hook("d", a.keys, "assign")) && p.bind("keydown.fb", function (e) {
        var c = cc11001100_hook("c", e.which || e.keyCode, "var-init"),
          k = cc11001100_hook("k", e.target || e.srcElement, "var-init");
        if (27 === c && b.coming) return !1;
        !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]")) && f.each(d, function (d, k) {
          if (1 < a.group.length && k[c] !== v) return b[d](k[c]), e.preventDefault(), !1;
          if (-1 < f.inArray(c, k)) return b[d](), e.preventDefault(), !1;
        });
      }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
        for (var h = cc11001100_hook("h", f(d.target || null), "var-init"), j = cc11001100_hook("j", !1, "var-init"); h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");) j = cc11001100_hook("j", h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), "assign"), h = cc11001100_hook("h", f(h).parent(), "assign");
        if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
          if (0 < g || 0 < k) b.prev(0 < g ? "down" : "left");else if (0 > g || 0 > k) b.next(0 > g ? "up" : "right");
          d.preventDefault();
        }
      }));
    },
    trigger: function (a, d) {
      var e,
        c = cc11001100_hook("c", d || b.coming || b.current, "var-init");
      if (c) {
        f.isFunction(c[a]) && (e = cc11001100_hook("e", c[a].apply(c, Array.prototype.slice.call(arguments, 1)), "assign"));
        if (!1 === e) return !1;
        c.helpers && f.each(c.helpers, function (d, e) {
          if (e && b.helpers[d] && f.isFunction(b.helpers[d][a])) b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c);
        });
        p.trigger(a);
      }
    },
    isImage: function (a) {
      return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
    },
    isSWF: function (a) {
      return q(a) && a.match(/\.(swf)((\?|#).*)?$/i);
    },
    _start: function (a) {
      var d = cc11001100_hook("d", {}, "var-init"),
        e,
        c;
      a = cc11001100_hook("a", l(a), "assign");
      e = cc11001100_hook("e", b.group[a] || null, "assign");
      if (!e) return !1;
      d = cc11001100_hook("d", f.extend(!0, {}, b.opts, e), "assign");
      e = cc11001100_hook("e", d.margin, "assign");
      c = cc11001100_hook("c", d.padding, "assign");
      "number" === f.type(e) && (d.margin = cc11001100_hook("d.margin", [e, e, e, e], "assign"));
      "number" === f.type(c) && (d.padding = cc11001100_hook("d.padding", [c, c, c, c], "assign"));
      d.modal && f.extend(!0, d, {
        closeBtn: cc11001100_hook("closeBtn", !1, "object-key-init"),
        closeClick: cc11001100_hook("closeClick", !1, "object-key-init"),
        nextClick: cc11001100_hook("nextClick", !1, "object-key-init"),
        arrows: cc11001100_hook("arrows", !1, "object-key-init"),
        mouseWheel: cc11001100_hook("mouseWheel", !1, "object-key-init"),
        keys: cc11001100_hook("keys", null, "object-key-init"),
        helpers: {
          overlay: {
            closeClick: cc11001100_hook("closeClick", !1, "object-key-init")
          }
        }
      });
      d.autoSize && (d.autoWidth = cc11001100_hook("d.autoWidth", d.autoHeight = cc11001100_hook("d.autoHeight", !0, "assign"), "assign"));
      "auto" === d.width && (d.autoWidth = cc11001100_hook("d.autoWidth", !0, "assign"));
      "auto" === d.height && (d.autoHeight = cc11001100_hook("d.autoHeight", !0, "assign"));
      d.group = cc11001100_hook("d.group", b.group, "assign");
      d.index = cc11001100_hook("d.index", a, "assign");
      b.coming = cc11001100_hook("b.coming", d, "assign");
      if (!1 === b.trigger("beforeLoad")) b.coming = cc11001100_hook("b.coming", null, "assign");else {
        c = cc11001100_hook("c", d.type, "assign");
        e = cc11001100_hook("e", d.href, "assign");
        if (!c) return b.coming = cc11001100_hook("b.coming", null, "assign"), b.current && b.router && "jumpto" !== b.router ? (b.current.index = cc11001100_hook("b.current.index", a, "assign"), b[b.router](b.direction)) : !1;
        b.isActive = cc11001100_hook("b.isActive", !0, "assign");
        if ("image" === c || "swf" === c) d.autoHeight = cc11001100_hook("d.autoHeight", d.autoWidth = cc11001100_hook("d.autoWidth", !1, "assign"), "assign"), d.scrolling = cc11001100_hook("d.scrolling", "visible", "assign");
        "image" === c && (d.aspectRatio = cc11001100_hook("d.aspectRatio", !0, "assign"));
        "iframe" === c && s && (d.scrolling = cc11001100_hook("d.scrolling", "scroll", "assign"));
        d.wrap = cc11001100_hook("d.wrap", f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body"), "assign");
        f.extend(d, {
          skin: cc11001100_hook("skin", f(".fancybox-skin", d.wrap), "object-key-init"),
          outer: cc11001100_hook("outer", f(".fancybox-outer", d.wrap), "object-key-init"),
          inner: cc11001100_hook("inner", f(".fancybox-inner", d.wrap), "object-key-init")
        });
        f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
          d.skin.css("padding" + b, w(d.padding[a]));
        });
        b.trigger("onReady");
        if ("inline" === c || "html" === c) {
          if (!d.content || !d.content.length) return b._error("content");
        } else if (!e) return b._error("href");
        "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad();
      }
    },
    _error: function (a) {
      f.extend(b.coming, {
        type: cc11001100_hook("type", "html", "object-key-init"),
        autoWidth: cc11001100_hook("autoWidth", !0, "object-key-init"),
        autoHeight: cc11001100_hook("autoHeight", !0, "object-key-init"),
        minWidth: cc11001100_hook("minWidth", 0, "object-key-init"),
        minHeight: cc11001100_hook("minHeight", 0, "object-key-init"),
        scrolling: cc11001100_hook("scrolling", "no", "object-key-init"),
        hasError: cc11001100_hook("hasError", a, "object-key-init"),
        content: cc11001100_hook("content", b.coming.tpl.error, "object-key-init")
      });
      b._afterLoad();
    },
    _loadImage: function () {
      var a = cc11001100_hook("a", b.imgPreload = cc11001100_hook("b.imgPreload", new Image(), "assign"), "var-init");
      a.onload = cc11001100_hook("a.onload", function () {
        this.onload = cc11001100_hook("this.onload", this.onerror = cc11001100_hook("this.onerror", null, "assign"), "assign");
        b.coming.width = cc11001100_hook("b.coming.width", this.width / b.opts.pixelRatio, "assign");
        b.coming.height = cc11001100_hook("b.coming.height", this.height / b.opts.pixelRatio, "assign");
        b._afterLoad();
      }, "assign");
      a.onerror = cc11001100_hook("a.onerror", function () {
        this.onload = cc11001100_hook("this.onload", this.onerror = cc11001100_hook("this.onerror", null, "assign"), "assign");
        b._error("image");
      }, "assign");
      a.src = cc11001100_hook("a.src", b.coming.href, "assign");
      !0 !== a.complete && b.showLoading();
    },
    _loadAjax: function () {
      var a = cc11001100_hook("a", b.coming, "var-init");
      b.showLoading();
      b.ajaxLoad = cc11001100_hook("b.ajaxLoad", f.ajax(f.extend({}, a.ajax, {
        url: cc11001100_hook("url", a.href, "object-key-init"),
        error: function (a, e) {
          b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading();
        },
        success: function (d, e) {
          "success" === e && (a.content = cc11001100_hook("a.content", d, "assign"), b._afterLoad());
        }
      })), "assign");
    },
    _loadIframe: function () {
      var a = cc11001100_hook("a", b.coming, "var-init"),
        d = cc11001100_hook("d", f(a.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href), "var-init");
      f(a.wrap).bind("onReset", function () {
        try {
          f(this).find("iframe").hide().attr("src", "//about:blank").end().empty();
        } catch (a) {}
      });
      a.iframe.preload && (b.showLoading(), d.one("load", function () {
        f(this).data("ready", 1);
        s || f(this).bind("load.fb", b.update);
        f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
        b._afterLoad();
      }));
      a.content = cc11001100_hook("a.content", d.appendTo(a.inner), "assign");
      a.iframe.preload || b._afterLoad();
    },
    _preloadImages: function () {
      var a = cc11001100_hook("a", b.group, "var-init"),
        d = cc11001100_hook("d", b.current, "var-init"),
        e = cc11001100_hook("e", a.length, "var-init"),
        c = cc11001100_hook("c", d.preload ? Math.min(d.preload, e - 1) : 0, "var-init"),
        f,
        g;
      for (g = cc11001100_hook("g", 1, "assign"); g <= c; g += cc11001100_hook("g", 1, "assign")) f = cc11001100_hook("f", a[(d.index + g) % e], "assign"), "image" === f.type && f.href && (new Image().src = cc11001100_hook("new Image().src", f.href, "assign"));
    },
    _afterLoad: function () {
      var a = cc11001100_hook("a", b.coming, "var-init"),
        d = cc11001100_hook("d", b.current, "var-init"),
        e,
        c,
        k,
        g,
        h;
      b.hideLoading();
      if (a && !1 !== b.isActive) if (!1 === b.trigger("afterLoad", a, d)) a.wrap.stop(!0).trigger("onReset").remove(), b.coming = cc11001100_hook("b.coming", null, "assign");else {
        d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
        b.unbindEvents();
        e = cc11001100_hook("e", a.content, "assign");
        c = cc11001100_hook("c", a.type, "assign");
        k = cc11001100_hook("k", a.scrolling, "assign");
        f.extend(b, {
          wrap: cc11001100_hook("wrap", a.wrap, "object-key-init"),
          skin: cc11001100_hook("skin", a.skin, "object-key-init"),
          outer: cc11001100_hook("outer", a.outer, "object-key-init"),
          inner: cc11001100_hook("inner", a.inner, "object-key-init"),
          current: cc11001100_hook("current", a, "object-key-init"),
          previous: cc11001100_hook("previous", d, "object-key-init")
        });
        g = cc11001100_hook("g", a.href, "assign");
        switch (c) {
          case "inline":
          case "ajax":
          case "html":
            a.selector ? e = cc11001100_hook("e", f("<div>").html(e).find(a.selector), "assign") : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = cc11001100_hook("e", e.show().detach(), "assign"), a.wrap.bind("onReset", function () {
              f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1);
            }));
            break;
          case "image":
            e = cc11001100_hook("e", a.tpl.image.replace("{href}", g), "assign");
            break;
          case "swf":
            e = cc11001100_hook("e", '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', "assign"), h = cc11001100_hook("h", "", "assign"), f.each(a.swf, function (a, b) {
              e += cc11001100_hook("e", '<param name="' + a + '" value="' + b + '"></param>', "assign");
              h += cc11001100_hook("h", " " + a + '="' + b + '"', "assign");
            }), e += cc11001100_hook("e", '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>", "assign");
        }
        (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
        b.trigger("beforeShow");
        a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
        b._setDimension();
        b.reposition();
        b.isOpen = cc11001100_hook("b.isOpen", !1, "assign");
        b.coming = cc11001100_hook("b.coming", null, "assign");
        b.bindEvents();
        if (b.isOpened) {
          if (d.prevMethod) b.transitions[d.prevMethod]();
        } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
        b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
        b._preloadImages();
      }
    },
    _setDimension: function () {
      var a = cc11001100_hook("a", b.getViewport(), "var-init"),
        d = cc11001100_hook("d", 0, "var-init"),
        e = cc11001100_hook("e", !1, "var-init"),
        c = cc11001100_hook("c", !1, "var-init"),
        e = cc11001100_hook("e", b.wrap, "var-init"),
        k = cc11001100_hook("k", b.skin, "var-init"),
        g = cc11001100_hook("g", b.inner, "var-init"),
        h = cc11001100_hook("h", b.current, "var-init"),
        c = cc11001100_hook("c", h.width, "var-init"),
        j = cc11001100_hook("j", h.height, "var-init"),
        m = cc11001100_hook("m", h.minWidth, "var-init"),
        u = cc11001100_hook("u", h.minHeight, "var-init"),
        n = cc11001100_hook("n", h.maxWidth, "var-init"),
        p = cc11001100_hook("p", h.maxHeight, "var-init"),
        s = cc11001100_hook("s", h.scrolling, "var-init"),
        q = cc11001100_hook("q", h.scrollOutside ? h.scrollbarWidth : 0, "var-init"),
        x = cc11001100_hook("x", h.margin, "var-init"),
        y = cc11001100_hook("y", l(x[1] + x[3]), "var-init"),
        r = cc11001100_hook("r", l(x[0] + x[2]), "var-init"),
        v,
        z,
        t,
        C,
        A,
        F,
        B,
        D,
        H;
      e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
      x = cc11001100_hook("x", l(k.outerWidth(!0) - k.width()), "assign");
      v = cc11001100_hook("v", l(k.outerHeight(!0) - k.height()), "assign");
      z = cc11001100_hook("z", y + x, "assign");
      t = cc11001100_hook("t", r + v, "assign");
      C = cc11001100_hook("C", E(c) ? (a.w - z) * l(c) / 100 : c, "assign");
      A = cc11001100_hook("A", E(j) ? (a.h - t) * l(j) / 100 : j, "assign");
      if ("iframe" === h.type) {
        if (H = cc11001100_hook("H", h.content, "assign"), h.autoHeight && 1 === H.data("ready")) try {
          H[0].contentWindow.document.location && (g.width(C).height(9999), F = cc11001100_hook("F", H.contents().find("body"), "assign"), q && F.css("overflow-x", "hidden"), A = cc11001100_hook("A", F.outerHeight(!0), "assign"));
        } catch (G) {}
      } else if (h.autoWidth || h.autoHeight) g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = cc11001100_hook("C", g.width(), "assign")), h.autoHeight && (A = cc11001100_hook("A", g.height(), "assign")), g.removeClass("fancybox-tmp");
      c = cc11001100_hook("c", l(C), "assign");
      j = cc11001100_hook("j", l(A), "assign");
      D = cc11001100_hook("D", C / A, "assign");
      m = cc11001100_hook("m", l(E(m) ? l(m, "w") - z : m), "assign");
      n = cc11001100_hook("n", l(E(n) ? l(n, "w") - z : n), "assign");
      u = cc11001100_hook("u", l(E(u) ? l(u, "h") - t : u), "assign");
      p = cc11001100_hook("p", l(E(p) ? l(p, "h") - t : p), "assign");
      F = cc11001100_hook("F", n, "assign");
      B = cc11001100_hook("B", p, "assign");
      h.fitToView && (n = cc11001100_hook("n", Math.min(a.w - z, n), "assign"), p = cc11001100_hook("p", Math.min(a.h - t, p), "assign"));
      z = cc11001100_hook("z", a.w - y, "assign");
      r = cc11001100_hook("r", a.h - r, "assign");
      h.aspectRatio ? (c > n && (c = cc11001100_hook("c", n, "assign"), j = cc11001100_hook("j", l(c / D), "assign")), j > p && (j = cc11001100_hook("j", p, "assign"), c = cc11001100_hook("c", l(j * D), "assign")), c < m && (c = cc11001100_hook("c", m, "assign"), j = cc11001100_hook("j", l(c / D), "assign")), j < u && (j = cc11001100_hook("j", u, "assign"), c = cc11001100_hook("c", l(j * D), "assign"))) : (c = cc11001100_hook("c", Math.max(m, Math.min(c, n)), "assign"), h.autoHeight && "iframe" !== h.type && (g.width(c), j = cc11001100_hook("j", g.height(), "assign")), j = cc11001100_hook("j", Math.max(u, Math.min(j, p)), "assign"));
      if (h.fitToView) if (g.width(c).height(j), e.width(c + x), a = cc11001100_hook("a", e.width(), "assign"), y = cc11001100_hook("y", e.height(), "assign"), h.aspectRatio) for (; (a > z || y > r) && c > m && j > u && !(19 < d++);) j = cc11001100_hook("j", Math.max(u, Math.min(p, j - 10)), "assign"), c = cc11001100_hook("c", l(j * D), "assign"), c < m && (c = cc11001100_hook("c", m, "assign"), j = cc11001100_hook("j", l(c / D), "assign")), c > n && (c = cc11001100_hook("c", n, "assign"), j = cc11001100_hook("j", l(c / D), "assign")), g.width(c).height(j), e.width(c + x), a = cc11001100_hook("a", e.width(), "assign"), y = cc11001100_hook("y", e.height(), "assign");else c = cc11001100_hook("c", Math.max(m, Math.min(c, c - (a - z))), "assign"), j = cc11001100_hook("j", Math.max(u, Math.min(j, j - (y - r))), "assign");
      q && "auto" === s && j < A && c + x + q < z && (c += cc11001100_hook("c", q, "assign"));
      g.width(c).height(j);
      e.width(c + x);
      a = cc11001100_hook("a", e.width(), "assign");
      y = cc11001100_hook("y", e.height(), "assign");
      e = cc11001100_hook("e", (a > z || y > r) && c > m && j > u, "assign");
      c = cc11001100_hook("c", h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A), "assign");
      f.extend(h, {
        dim: {
          width: cc11001100_hook("width", w(a), "object-key-init"),
          height: cc11001100_hook("height", w(y), "object-key-init")
        },
        origWidth: cc11001100_hook("origWidth", C, "object-key-init"),
        origHeight: cc11001100_hook("origHeight", A, "object-key-init"),
        canShrink: cc11001100_hook("canShrink", e, "object-key-init"),
        canExpand: cc11001100_hook("canExpand", c, "object-key-init"),
        wPadding: cc11001100_hook("wPadding", x, "object-key-init"),
        hPadding: cc11001100_hook("hPadding", v, "object-key-init"),
        wrapSpace: cc11001100_hook("wrapSpace", y - k.outerHeight(!0), "object-key-init"),
        skinSpace: cc11001100_hook("skinSpace", k.height() - j, "object-key-init")
      });
      !H && h.autoHeight && j > u && j < p && !c && g.height("auto");
    },
    _getPosition: function (a) {
      var d = cc11001100_hook("d", b.current, "var-init"),
        e = cc11001100_hook("e", b.getViewport(), "var-init"),
        c = cc11001100_hook("c", d.margin, "var-init"),
        f = cc11001100_hook("f", b.wrap.width() + c[1] + c[3], "var-init"),
        g = cc11001100_hook("g", b.wrap.height() + c[0] + c[2], "var-init"),
        c = cc11001100_hook("c", {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          top: cc11001100_hook("top", c[0], "object-key-init"),
          left: cc11001100_hook("left", c[3], "object-key-init")
        }, "var-init");
      d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = cc11001100_hook("c.position", "fixed", "assign") : d.locked || (c.top += cc11001100_hook("c.top", e.y, "assign"), c.left += cc11001100_hook("c.left", e.x, "assign"));
      c.top = cc11001100_hook("c.top", w(Math.max(c.top, c.top + (e.h - g) * d.topRatio)), "assign");
      c.left = cc11001100_hook("c.left", w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio)), "assign");
      return c;
    },
    _afterZoomIn: function () {
      var a = cc11001100_hook("a", b.current, "var-init");
      a && (b.isOpen = cc11001100_hook("b.isOpen", b.isOpened = cc11001100_hook("b.isOpened", !0, "assign"), "assign"), b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
        !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]());
      }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
        a.preventDefault();
        b.close();
      }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = cc11001100_hook("b.opts.autoPlay", !1, "assign"), b.play()));
    },
    _afterZoomOut: function (a) {
      a = cc11001100_hook("a", a || b.current, "assign");
      f(".fancybox-wrap").trigger("onReset").remove();
      f.extend(b, {
        group: {},
        opts: {},
        router: cc11001100_hook("router", !1, "object-key-init"),
        current: cc11001100_hook("current", null, "object-key-init"),
        isActive: cc11001100_hook("isActive", !1, "object-key-init"),
        isOpened: cc11001100_hook("isOpened", !1, "object-key-init"),
        isOpen: cc11001100_hook("isOpen", !1, "object-key-init"),
        isClosing: cc11001100_hook("isClosing", !1, "object-key-init"),
        wrap: cc11001100_hook("wrap", null, "object-key-init"),
        skin: cc11001100_hook("skin", null, "object-key-init"),
        outer: cc11001100_hook("outer", null, "object-key-init"),
        inner: cc11001100_hook("inner", null, "object-key-init")
      });
      b.trigger("afterClose", a);
    }
  });
  b.transitions = cc11001100_hook("b.transitions", {
    getOrigPosition: function () {
      var a = cc11001100_hook("a", b.current, "var-init"),
        d = cc11001100_hook("d", a.element, "var-init"),
        e = cc11001100_hook("e", a.orig, "var-init"),
        c = cc11001100_hook("c", {}, "var-init"),
        f = cc11001100_hook("f", 50, "var-init"),
        g = cc11001100_hook("g", 50, "var-init"),
        h = cc11001100_hook("h", a.hPadding, "var-init"),
        j = cc11001100_hook("j", a.wPadding, "var-init"),
        m = cc11001100_hook("m", b.getViewport(), "var-init");
      !e && a.isDom && d.is(":visible") && (e = cc11001100_hook("e", d.find("img:first"), "assign"), e.length || (e = cc11001100_hook("e", d, "assign")));
      t(e) ? (c = cc11001100_hook("c", e.offset(), "assign"), e.is("img") && (f = cc11001100_hook("f", e.outerWidth(), "assign"), g = cc11001100_hook("g", e.outerHeight(), "assign"))) : (c.top = cc11001100_hook("c.top", m.y + (m.h - g) * a.topRatio, "assign"), c.left = cc11001100_hook("c.left", m.x + (m.w - f) * a.leftRatio, "assign"));
      if ("fixed" === b.wrap.css("position") || a.locked) c.top -= cc11001100_hook("c.top", m.y, "assign"), c.left -= cc11001100_hook("c.left", m.x, "assign");
      return c = cc11001100_hook("c", {
        top: cc11001100_hook("top", w(c.top - h * a.topRatio), "object-key-init"),
        left: cc11001100_hook("left", w(c.left - j * a.leftRatio), "object-key-init"),
        width: cc11001100_hook("width", w(f + j), "object-key-init"),
        height: cc11001100_hook("height", w(g + h), "object-key-init")
      }, "assign");
    },
    step: function (a, d) {
      var e,
        c,
        f = cc11001100_hook("f", d.prop, "var-init");
      c = cc11001100_hook("c", b.current, "assign");
      var g = cc11001100_hook("g", c.wrapSpace, "var-init"),
        h = cc11001100_hook("h", c.skinSpace, "var-init");
      if ("width" === f || "height" === f) e = cc11001100_hook("e", d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), "assign"), b.isClosing && (e = cc11001100_hook("e", 1 - e, "assign")), c = cc11001100_hook("c", "width" === f ? c.wPadding : c.hPadding, "assign"), c = cc11001100_hook("c", a - c, "assign"), b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e));
    },
    zoomIn: function () {
      var a = cc11001100_hook("a", b.current, "var-init"),
        d = cc11001100_hook("d", a.pos, "var-init"),
        e = cc11001100_hook("e", a.openEffect, "var-init"),
        c = cc11001100_hook("c", "elastic" === e, "var-init"),
        k = cc11001100_hook("k", f.extend({
          opacity: cc11001100_hook("opacity", 1, "object-key-init")
        }, d), "var-init");
      delete k.position;
      c ? (d = cc11001100_hook("d", this.getOrigPosition(), "assign"), a.openOpacity && (d.opacity = cc11001100_hook("d.opacity", 0.1, "assign"))) : "fade" === e && (d.opacity = cc11001100_hook("d.opacity", 0.1, "assign"));
      b.wrap.css(d).animate(k, {
        duration: cc11001100_hook("duration", "none" === e ? 0 : a.openSpeed, "object-key-init"),
        easing: cc11001100_hook("easing", a.openEasing, "object-key-init"),
        step: cc11001100_hook("step", c ? this.step : null, "object-key-init"),
        complete: cc11001100_hook("complete", b._afterZoomIn, "object-key-init")
      });
    },
    zoomOut: function () {
      var a = cc11001100_hook("a", b.current, "var-init"),
        d = cc11001100_hook("d", a.closeEffect, "var-init"),
        e = cc11001100_hook("e", "elastic" === d, "var-init"),
        c = cc11001100_hook("c", {
          opacity: cc11001100_hook("opacity", 0.1, "object-key-init")
        }, "var-init");
      e && (c = cc11001100_hook("c", this.getOrigPosition(), "assign"), a.closeOpacity && (c.opacity = cc11001100_hook("c.opacity", 0.1, "assign")));
      b.wrap.animate(c, {
        duration: cc11001100_hook("duration", "none" === d ? 0 : a.closeSpeed, "object-key-init"),
        easing: cc11001100_hook("easing", a.closeEasing, "object-key-init"),
        step: cc11001100_hook("step", e ? this.step : null, "object-key-init"),
        complete: cc11001100_hook("complete", b._afterZoomOut, "object-key-init")
      });
    },
    changeIn: function () {
      var a = cc11001100_hook("a", b.current, "var-init"),
        d = cc11001100_hook("d", a.nextEffect, "var-init"),
        e = cc11001100_hook("e", a.pos, "var-init"),
        c = cc11001100_hook("c", {
          opacity: cc11001100_hook("opacity", 1, "object-key-init")
        }, "var-init"),
        f = cc11001100_hook("f", b.direction, "var-init"),
        g;
      e.opacity = cc11001100_hook("e.opacity", 0.1, "assign");
      "elastic" === d && (g = cc11001100_hook("g", "down" === f || "up" === f ? "top" : "left", "assign"), "down" === f || "right" === f ? (e[g] = cc11001100_hook("e[g]", w(l(e[g]) - 200), "assign"), c[g] = cc11001100_hook("c[g]", "+=200px", "assign")) : (e[g] = cc11001100_hook("e[g]", w(l(e[g]) + 200), "assign"), c[g] = cc11001100_hook("c[g]", "-=200px", "assign")));
      "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
        duration: cc11001100_hook("duration", a.nextSpeed, "object-key-init"),
        easing: cc11001100_hook("easing", a.nextEasing, "object-key-init"),
        complete: cc11001100_hook("complete", b._afterZoomIn, "object-key-init")
      });
    },
    changeOut: function () {
      var a = cc11001100_hook("a", b.previous, "var-init"),
        d = cc11001100_hook("d", a.prevEffect, "var-init"),
        e = cc11001100_hook("e", {
          opacity: cc11001100_hook("opacity", 0.1, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", b.direction, "var-init");
      "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = cc11001100_hook("e[\"down\" === c || \"up\" === c ? \"top\" : \"left\"]", ("up" === c || "left" === c ? "-" : "+") + "=200px", "assign"));
      a.wrap.animate(e, {
        duration: cc11001100_hook("duration", "none" === d ? 0 : a.prevSpeed, "object-key-init"),
        easing: cc11001100_hook("easing", a.prevEasing, "object-key-init"),
        complete: function () {
          f(this).trigger("onReset").remove();
        }
      });
    }
  }, "assign");
  b.helpers.overlay = cc11001100_hook("b.helpers.overlay", {
    defaults: {
      closeClick: cc11001100_hook("closeClick", !0, "object-key-init"),
      speedOut: cc11001100_hook("speedOut", 200, "object-key-init"),
      showEarly: cc11001100_hook("showEarly", !0, "object-key-init"),
      css: {},
      locked: cc11001100_hook("locked", !s, "object-key-init"),
      fixed: cc11001100_hook("fixed", !0, "object-key-init")
    },
    overlay: cc11001100_hook("overlay", null, "object-key-init"),
    fixed: cc11001100_hook("fixed", !1, "object-key-init"),
    el: cc11001100_hook("el", f("html"), "object-key-init"),
    create: function (a) {
      a = cc11001100_hook("a", f.extend({}, this.defaults, a), "assign");
      this.overlay && this.close();
      this.overlay = cc11001100_hook("this.overlay", f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent), "assign");
      this.fixed = cc11001100_hook("this.fixed", !1, "assign");
      a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = cc11001100_hook("this.fixed", !0, "assign"));
    },
    open: function (a) {
      var d = cc11001100_hook("d", this, "var-init");
      a = cc11001100_hook("a", f.extend({}, this.defaults, a), "assign");
      this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
      this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
      a.closeClick && this.overlay.bind("click.overlay", function (a) {
        if (f(a.target).hasClass("fancybox-overlay")) return b.isActive ? b.close() : d.close(), !1;
      });
      this.overlay.css(a.css).show();
    },
    close: function () {
      var a, b;
      n.unbind("resize.overlay");
      this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = cc11001100_hook("a", n.scrollTop(), "assign"), b = cc11001100_hook("b", n.scrollLeft(), "assign"), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
      f(".fancybox-overlay").remove().hide();
      f.extend(this, {
        overlay: cc11001100_hook("overlay", null, "object-key-init"),
        fixed: cc11001100_hook("fixed", !1, "object-key-init")
      });
    },
    update: function () {
      var a = cc11001100_hook("a", "100%", "var-init"),
        b;
      this.overlay.width(a).height("100%");
      I ? (b = cc11001100_hook("b", Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), "assign"), p.width() > b && (a = cc11001100_hook("a", p.width(), "assign"))) : p.width() > n.width() && (a = cc11001100_hook("a", p.width(), "assign"));
      this.overlay.width(a).height(p.height());
    },
    onReady: function (a, b) {
      var e = cc11001100_hook("e", this.overlay, "var-init");
      f(".fancybox-overlay").stop(!0, !0);
      e || this.create(a);
      a.locked && this.fixed && b.fixed && (e || (this.margin = cc11001100_hook("this.margin", p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1, "assign")), b.locked = cc11001100_hook("b.locked", this.overlay.append(b.wrap), "assign"), b.fixed = cc11001100_hook("b.fixed", !1, "assign"));
      !0 === a.showEarly && this.beforeShow.apply(this, arguments);
    },
    beforeShow: function (a, b) {
      var e, c;
      b.locked && (!1 !== this.margin && (f("*").filter(function () {
        return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap");
      }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = cc11001100_hook("e", n.scrollTop(), "assign"), c = cc11001100_hook("c", n.scrollLeft(), "assign"), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
      this.open(a);
    },
    onUpdate: function () {
      this.fixed || this.update();
    },
    afterClose: function (a) {
      this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this));
    }
  }, "assign");
  b.helpers.title = cc11001100_hook("b.helpers.title", {
    defaults: {
      type: cc11001100_hook("type", "float", "object-key-init"),
      position: cc11001100_hook("position", "bottom", "object-key-init")
    },
    beforeShow: function (a) {
      var d = cc11001100_hook("d", b.current, "var-init"),
        e = cc11001100_hook("e", d.title, "var-init"),
        c = cc11001100_hook("c", a.type, "var-init");
      f.isFunction(e) && (e = cc11001100_hook("e", e.call(d.element, d), "assign"));
      if (q(e) && "" !== f.trim(e)) {
        d = cc11001100_hook("d", f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>"), "assign");
        switch (c) {
          case "inside":
            c = cc11001100_hook("c", b.skin, "assign");
            break;
          case "outside":
            c = cc11001100_hook("c", b.wrap, "assign");
            break;
          case "over":
            c = cc11001100_hook("c", b.inner, "assign");
            break;
          default:
            c = cc11001100_hook("c", b.skin, "assign"), d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += cc11001100_hook("b.current.margin[2]", Math.abs(l(d.css("margin-bottom"))), "assign");
        }
        d["top" === a.position ? "prependTo" : "appendTo"](c);
      }
    }
  }, "assign");
  f.fn.fancybox = cc11001100_hook("f.fn.fancybox", function (a) {
    var d,
      e = cc11001100_hook("e", f(this), "var-init"),
      c = cc11001100_hook("c", this.selector || "", "var-init"),
      k = function (g) {
        var h = cc11001100_hook("h", f(this).blur(), "var-init"),
          j = cc11001100_hook("j", d, "var-init"),
          k,
          l;
        !g.ctrlKey && !g.altKey && !g.shiftKey && !g.metaKey && !h.is(".fancybox-wrap") && (k = cc11001100_hook("k", a.groupAttr || "data-fancybox-group", "assign"), l = cc11001100_hook("l", h.attr(k), "assign"), l || (k = cc11001100_hook("k", "rel", "assign"), l = cc11001100_hook("l", h.get(0)[k], "assign")), l && "" !== l && "nofollow" !== l && (h = cc11001100_hook("h", c.length ? f(c) : e, "assign"), h = cc11001100_hook("h", h.filter("[" + k + '="' + l + '"]'), "assign"), j = cc11001100_hook("j", h.index(this), "assign")), a.index = cc11001100_hook("a.index", j, "assign"), !1 !== b.open(h, a) && g.preventDefault());
      };
    a = cc11001100_hook("a", a || {}, "assign");
    d = cc11001100_hook("d", a.index || 0, "assign");
    !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
    this.filter("[data-fancybox-start=1]").trigger("click");
    return this;
  }, "assign");
  p.ready(function () {
    var a, d;
    f.scrollbarWidth === v && (f.scrollbarWidth = cc11001100_hook("f.scrollbarWidth", function () {
      var a = cc11001100_hook("a", f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), "var-init"),
        b = cc11001100_hook("b", a.children(), "var-init"),
        b = cc11001100_hook("b", b.innerWidth() - b.height(99).innerWidth(), "var-init");
      a.remove();
      return b;
    }, "assign"));
    if (f.support.fixedPosition === v) {
      a = cc11001100_hook("a", f.support, "assign");
      d = cc11001100_hook("d", f('<div style="position:fixed;top:20px;"></div>').appendTo("body"), "assign");
      var e = cc11001100_hook("e", 20 === d[0].offsetTop || 15 === d[0].offsetTop, "var-init");
      d.remove();
      a.fixedPosition = cc11001100_hook("a.fixedPosition", e, "assign");
    }
    f.extend(b.defaults, {
      scrollbarWidth: cc11001100_hook("scrollbarWidth", f.scrollbarWidth(), "object-key-init"),
      fixed: cc11001100_hook("fixed", f.support.fixedPosition, "object-key-init"),
      parent: cc11001100_hook("parent", f("body"), "object-key-init")
    });
    a = cc11001100_hook("a", f(r).width(), "assign");
    J.addClass("fancybox-lock-test");
    d = cc11001100_hook("d", f(r).width(), "assign");
    J.removeClass("fancybox-lock-test");
    f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head");
  });
})(window, document, jQuery);
(function (d) {
  function e(a) {
    cc11001100_hook("a", a, "function-parameter");
    var b = cc11001100_hook("b", a || window.event, "var-init"),
      c = cc11001100_hook("c", [].slice.call(arguments, 1), "var-init"),
      f = cc11001100_hook("f", 0, "var-init"),
      e = cc11001100_hook("e", 0, "var-init"),
      g = cc11001100_hook("g", 0, "var-init"),
      a = cc11001100_hook("a", d.event.fix(b), "var-init");
    a.type = cc11001100_hook("a.type", "mousewheel", "assign");
    b.wheelDelta && (f = cc11001100_hook("f", b.wheelDelta / 120, "assign"));
    b.detail && (f = cc11001100_hook("f", -b.detail / 3, "assign"));
    g = cc11001100_hook("g", f, "assign");
    b.axis !== void 0 && b.axis === b.HORIZONTAL_AXIS && (g = cc11001100_hook("g", 0, "assign"), e = cc11001100_hook("e", -1 * f, "assign"));
    b.wheelDeltaY !== void 0 && (g = cc11001100_hook("g", b.wheelDeltaY / 120, "assign"));
    b.wheelDeltaX !== void 0 && (e = cc11001100_hook("e", -1 * b.wheelDeltaX / 120, "assign"));
    c.unshift(a, f, e, g);
    return (d.event.dispatch || d.event.handle).apply(this, c);
  }
  var c = cc11001100_hook("c", ["DOMMouseScroll", "mousewheel"], "var-init");
  if (d.event.fixHooks) for (var h = cc11001100_hook("h", c.length, "var-init"); h;) d.event.fixHooks[c[--h]] = cc11001100_hook("d.event.fixHooks[c[--h]]", d.event.mouseHooks, "assign");
  d.event.special.mousewheel = cc11001100_hook("d.event.special.mousewheel", {
    setup: function () {
      if (this.addEventListener) for (var a = cc11001100_hook("a", c.length, "var-init"); a;) this.addEventListener(c[--a], e, false);else this.onmousewheel = cc11001100_hook("this.onmousewheel", e, "assign");
    },
    teardown: function () {
      if (this.removeEventListener) for (var a = cc11001100_hook("a", c.length, "var-init"); a;) this.removeEventListener(c[--a], e, false);else this.onmousewheel = cc11001100_hook("this.onmousewheel", null, "assign");
    }
  }, "assign");
  d.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
    },
    unmousewheel: function (a) {
      return this.unbind("mousewheel", a);
    }
  });
})(jQuery);
(function ($) {
  var F = cc11001100_hook("F", $.fancybox, "var-init");
  F.helpers.buttons = cc11001100_hook("F.helpers.buttons", {
    defaults: {
      skipSingle: cc11001100_hook("skipSingle", false, "object-key-init"),
      position: cc11001100_hook("position", 'top', "object-key-init"),
      tpl: cc11001100_hook("tpl", '<div id="fancybox-buttons"><ul><li><a class="fa fa-angle-left" title="上一张（快捷键 ←）" href="javascript:;"></a></li><li><a class="fa fa-caret-right" title="播放幻灯（快捷键 空格）" href="javascript:;"></a></li><li><a class="fa fa-angle-right" title="下一张（快捷键 →）" href="javascript:;"></a></li><li><a class="fa fa-expand" title="实际大小（快捷键 F）" href="javascript:;"></a></li><li><a class="fa fa-times" title="关闭（快捷键 Esc）" href="javascript:;"></a></li></ul></div>', "object-key-init")
    },
    list: cc11001100_hook("list", null, "object-key-init"),
    buttons: cc11001100_hook("buttons", null, "object-key-init"),
    beforeLoad: function (opts, obj) {
      if (opts.skipSingle && obj.group.length < 2) {
        obj.helpers.buttons = cc11001100_hook("obj.helpers.buttons", false, "assign");
        obj.closeBtn = cc11001100_hook("obj.closeBtn", true, "assign");
        return;
      }
      obj.margin[opts.position === 'bottom' ? 2 : 0] += cc11001100_hook("obj.margin[opts.position === 'bottom' ? 2 : 0]", 30, "assign");
    },
    onPlayStart: function () {
      if (this.buttons) {
        this.buttons.play.attr('title', '暂停幻灯').addClass('fa-angle-double-right');
      }
    },
    onPlayEnd: function () {
      if (this.buttons) {
        this.buttons.play.attr('title', '播放幻灯').removeClass('fa-angle-double-right');
      }
    },
    afterShow: function (opts, obj) {
      var buttons = cc11001100_hook("buttons", this.buttons, "var-init");
      if (!buttons) {
        this.list = cc11001100_hook("this.list", $(opts.tpl).addClass(opts.position).appendTo('body'), "assign");
        buttons = cc11001100_hook("buttons", {
          prev: cc11001100_hook("prev", this.list.find('.fa-angle-left').click(F.prev), "object-key-init"),
          next: cc11001100_hook("next", this.list.find('.fa-angle-right').click(F.next), "object-key-init"),
          play: cc11001100_hook("play", this.list.find('.fa-caret-right').click(F.play), "object-key-init"),
          toggle: cc11001100_hook("toggle", this.list.find('.fa-expand').click(F.toggle), "object-key-init"),
          close: cc11001100_hook("close", this.list.find('.fa-times').click(F.close), "object-key-init")
        }, "assign");
      }
      if (obj.index > 0 || obj.loop) {
        buttons.prev.removeClass('btnDisabled');
      } else {
        buttons.prev.addClass('btnDisabled');
      }
      if (obj.loop || obj.index < obj.group.length - 1) {
        buttons.next.removeClass('btnDisabled');
        buttons.play.removeClass('btnDisabled');
      } else {
        buttons.next.addClass('btnDisabled');
        buttons.play.addClass('btnDisabled');
      }
      this.buttons = cc11001100_hook("this.buttons", buttons, "assign");
      this.onUpdate(opts, obj);
    },
    onUpdate: function (opts, obj) {
      var toggle;
      if (!this.buttons) {
        return;
      }
      toggle = cc11001100_hook("toggle", this.buttons.toggle.removeClass('btnDisabled fa-compress'), "assign");
      if (obj.canShrink) {
        toggle.addClass('fa fa-compress');
      } else if (!obj.canExpand) {
        toggle.addClass('btnDisabled');
      }
    },
    beforeClose: function () {
      if (this.list) {
        this.list.remove();
      }
      this.list = cc11001100_hook("this.list", null, "assign");
      this.buttons = cc11001100_hook("this.buttons", null, "assign");
    }
  }, "assign");
})(jQuery);
$(document).ready(function () {
  $("a[rel=example_group]").fancybox({
    openEffect: cc11001100_hook("openEffect", 'fadeIn', "object-key-init"),
    closeEffect: cc11001100_hook("closeEffect", 'fadeIn', "object-key-init"),
    prevEffect: cc11001100_hook("prevEffect", 'fadeIn', "object-key-init"),
    nextEffect: cc11001100_hook("nextEffect", 'fadeIn', "object-key-init"),
    closeBtn: cc11001100_hook("closeBtn", false, "object-key-init"),
    helpers: {
      title: {
        type: cc11001100_hook("type", 'inside', "object-key-init")
      },
      buttons: {}
    },
    afterLoad: function () {
      this.title = cc11001100_hook("this.title", '当前第 ' + (this.index + 1) + ' 张，共 ' + this.group.length + (this.title ? ' - ' + this.title : ' 张图片'), "assign");
    }
  });
  $("#load").fancybox({
    helpers: {
      title: {
        type: cc11001100_hook("type", 'outside', "object-key-init")
      },
      overlay: {
        speedOut: cc11001100_hook("speedOut", 0, "object-key-init")
      }
    }
  });
  $(".videos").fancybox({
    'width': cc11001100_hook('width', '75%', "object-key-init"),
    'height': cc11001100_hook('height', '95%', "object-key-init"),
    'type': cc11001100_hook('type', 'iframe', "object-key-init")
  });
});