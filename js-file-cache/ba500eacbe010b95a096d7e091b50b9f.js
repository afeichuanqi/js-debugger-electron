rain.rainshell("channelMgr#v1.0.6", function (define, require, rain, $topDom, currentId) {
  define("rainModule/channelMgr/index_" + currentId, function () {
    function h(h, v) {
      cc11001100_hook("h", h, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      var g = cc11001100_hook("g", this, "var-init");
      g.mine = cc11001100_hook("g.mine", [], "assign"), g.rec = cc11001100_hook("g.rec", [], "assign"), g.viewTpl = cc11001100_hook("g.viewTpl", "", "assign"), g.hasDiff = cc11001100_hook("g.hasDiff", !1, "assign"), g.origId = cc11001100_hook("g.origId", v, "assign"), g.finalId = cc11001100_hook("g.finalId", v, "assign"), g.origTabs = cc11001100_hook("g.origTabs", [], "assign"), g.redDotNum = cc11001100_hook("g.redDotNum", 0, "assign"), h && h.tabs && h.tabs.item && h.tabs.item.length ? (this.init(h), this.bindEvent()) : (this.offlineInit(), this.offlineEvent());
    }
    return h.prototype = cc11001100_hook("h.prototype", {
      constructor: cc11001100_hook("constructor", h, "object-key-init"),
      init: function (h) {
        var v = cc11001100_hook("v", this, "var-init");
        v.mine = cc11001100_hook("v.mine", h.tabs.item, "assign"), h.unadded && (v.rec = cc11001100_hook("v.rec", h.unadded.item, "assign")), v.judgeData(v.mine), v.judgeData(v.rec), v.origTabs = cc11001100_hook("v.origTabs", v.mine.concat(), "assign"), v.initTpl(), v.viewTpl = cc11001100_hook("v.viewTpl", v.wrapper, "assign");
      },
      judgeData: function (h) {
        $.each(h, function (v, g) {
          g.id && g.name || h.splice(v, 1);
        });
      },
      initTpl: function () {
        var h = cc11001100_hook("h", this, "var-init"),
          v = cc11001100_hook("v", 0 === h.rec.length ? "已全部添加" : "点击添加栏目", "var-init");
        h.wrapper = cc11001100_hook("h.wrapper", $('<div id="channel_mgrview" class="rn-channelMgr"></div>'), "assign"), h.head = cc11001100_hook("h.head", $('<div class="channel-head"></div>'), "assign"), h.content = cc11001100_hook("h.content", $('<div class="channel-content"></div>'), "assign"), h.back = cc11001100_hook("h.back", $('<a class="back"></a>'), "assign"), h.head.append(h.back).append("<h1>栏目管理</h1>"), h.mineChannel = cc11001100_hook("h.mineChannel", $('<div class="content mine"><p class="desc">已添加栏目</p></div>'), "assign"), h.recChannel = cc11001100_hook("h.recChannel", $('<div class="content rec"><p class="desc">可添加栏目<span class="hint">' + v + "</span></p></div>"), "assign"), h.mineItems = cc11001100_hook("h.mineItems", h.fillItems(h.mine, "mine"), "assign"), h.recItems = cc11001100_hook("h.recItems", h.fillItems(h.rec, "rec"), "assign"), h.mineChannel.append(h.mineItems), h.recChannel.append(h.recItems), h.content.append(h.mineChannel).append(h.recChannel), h.wrapper.append(h.head).append(h.content);
      },
      fillItems: function (h, v) {
        var g = cc11001100_hook("g", this, "var-init"),
          b = cc11001100_hook("b", $('<ul class="items" data-type="' + v + '"></ul>'), "var-init"),
          w = cc11001100_hook("w", "", "var-init");
        if (h) for (var i = cc11001100_hook("i", 0, "var-init"); i < h.length; i++) w = cc11001100_hook("w", +h[i].newTip ? " red-dot" : "", "assign"), w += cc11001100_hook("w", +h[i].can_be_deleted ? "" : " cannot-del", "assign"), b.append('<li class="channel-item' + w + '" data-id="' + h[i].id + '"><span class="name">' + h[i].name + "</span></li>"), "rec" === v && +h[i].newTip && g.redDotNum++;
        return b;
      },
      bindEvent: function () {
        var h = cc11001100_hook("h", this, "var-init");
        h.back.on("click", function () {
          h.hasDiff = cc11001100_hook("h.hasDiff", h.hasDiff || h.judgeDiff(h.origTabs, h.mine), "assign"), rain.event.fire("rainModule/channelMgr", "back", {
            data: {
              tabs: cc11001100_hook("tabs", h.mine, "object-key-init"),
              unadded: cc11001100_hook("unadded", h.rec, "object-key-init")
            },
            hasDiff: cc11001100_hook("hasDiff", h.hasDiff, "object-key-init"),
            finalId: cc11001100_hook("finalId", h.finalId, "object-key-init"),
            redDotNum: cc11001100_hook("redDotNum", h.redDotNum, "object-key-init")
          });
        }), h.content.on("click", ".channel-item", function () {
          var v = cc11001100_hook("v", this, "var-init"),
            g = cc11001100_hook("g", $(v).data("id"), "var-init"),
            b = cc11001100_hook("b", $(v).find(".name")[0].innerHTML, "var-init"),
            w = cc11001100_hook("w", $(v).parent().data("type"), "var-init"),
            k = cc11001100_hook("k", $(this).index(), "var-init"),
            T = cc11001100_hook("T", {}, "var-init");
          $(v).hasClass("cannot-del") || h.clicking || (h.clicking = cc11001100_hook("h.clicking", !0, "assign"), "mine" === w ? ($(v).hasClass("red-dot") && ($(v).removeClass("red-dot"), h.mine[k].newTip = cc11001100_hook("h.mine[k].newTip", 0, "assign"), h.hasDiff = cc11001100_hook("h.hasDiff", !0, "assign"), rain.event.fire("rainModule/channelMgr", "redClick", {
            id: cc11001100_hook("id", g, "object-key-init"),
            name: cc11001100_hook("name", b, "object-key-init"),
            newTip: cc11001100_hook("newTip", "0", "object-key-init")
          })), h.animate(v, h.mineItems, h.recItems, 0).done(function () {
            h.clicking = cc11001100_hook("h.clicking", !1, "assign"), h.finalId = cc11001100_hook("h.finalId", h.getFinalTabId(h.origTabs, h.mine), "assign");
          }), T = cc11001100_hook("T", h.mine.splice(k, 1), "assign"), h.rec.unshift(T[0])) : ($(v).hasClass("red-dot") && ($(v).removeClass("red-dot"), h.rec[k].newTip = cc11001100_hook("h.rec[k].newTip", 0, "assign"), h.redDotNum--, h.hasDiff = cc11001100_hook("h.hasDiff", !0, "assign"), rain.event.fire("rainModule/channelMgr", "redClick", {
            id: cc11001100_hook("id", g, "object-key-init"),
            name: cc11001100_hook("name", b, "object-key-init"),
            newTip: cc11001100_hook("newTip", "0", "object-key-init")
          })), h.animate(v, h.recItems, h.mineItems, 1).done(function () {
            h.clicking = cc11001100_hook("h.clicking", !1, "assign"), h.finalId = cc11001100_hook("h.finalId", h.getFinalTabId(h.origTabs, h.mine), "assign");
          }), T = cc11001100_hook("T", h.rec.splice(k, 1), "assign"), h.mine.push(T[0])), 0 === h.rec.length ? h.recChannel.find(".hint")[0].innerHTML = cc11001100_hook("h.recChannel.find(\".hint\")[0].innerHTML", "已全部添加", "assign") : 1 === h.rec.length && (h.recChannel.find(".hint")[0].innerHTML = cc11001100_hook("h.recChannel.find(\".hint\")[0].innerHTML", "点击添加栏目", "assign")));
        });
      },
      judgeDiff: function (h, v) {
        var g = cc11001100_hook("g", !1, "var-init"),
          b = cc11001100_hook("b", h.length, "var-init"),
          w = cc11001100_hook("w", v.length, "var-init");
        if (b === w) for (var i = cc11001100_hook("i", 0, "var-init"); w > i; i++) $.inArray(v[i], h) < 0 && (g = cc11001100_hook("g", !0, "assign"));else g = cc11001100_hook("g", !0, "assign");
        return g;
      },
      getFinalTabId: function (h, v) {
        for (var g = cc11001100_hook("g", this, "var-init"), b = cc11001100_hook("b", v.length, "var-init"), w = cc11001100_hook("w", !1, "var-init"), k = cc11001100_hook("k", 1, "var-init"), i = cc11001100_hook("i", 0, "var-init"); b > i; i++) $.inArray(v[i], h) < 0 && (w = cc11001100_hook("w", !0, "assign"));
        if (w) k = cc11001100_hook("k", v[b - 1].id, "assign");else for (var i = cc11001100_hook("i", 0, "var-init"); b > i; i++) +v[i].id === g.origId && (k = cc11001100_hook("k", g.origId, "assign"));
        return k;
      },
      animate: function (h, v, g, b) {
        function w(h, v) {
          cc11001100_hook("h", h, "function-parameter");
          cc11001100_hook("v", v, "function-parameter");
          for (var g = cc11001100_hook("g", v ? 1 : 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < h.length; i++) _ = cc11001100_hook("_", $(h[i]), "assign"), j = cc11001100_hook("j", _.index(), "assign"), (j + 1) % 4 === g ? (L = cc11001100_hook("L", 3 * R.width, "assign"), A = cc11001100_hook("A", -R.height, "assign")) : (L = cc11001100_hook("L", -R.width, "assign"), A = cc11001100_hook("A", 0, "assign")), v || (L = cc11001100_hook("L", -L, "assign"), A = cc11001100_hook("A", -A, "assign")), _.css({
            "-webkit-transition": cc11001100_hook("-webkit-transition", "-webkit-transform .5s ease", "object-key-init"),
            "-webkit-transform": cc11001100_hook("-webkit-transform", "translate3d(" + L + "px, " + A + "px, 0)", "object-key-init")
          }), z = cc11001100_hook("z", z.add(_), "assign");
        }
        function k(h, v) {
          cc11001100_hook("h", h, "function-parameter");
          cc11001100_hook("v", v, "function-parameter");
          h.css({
            "-webkit-transition": cc11001100_hook("-webkit-transition", "-webkit-transform .5s ease", "object-key-init"),
            "-webkit-transform": cc11001100_hook("-webkit-transform", "translate3d(0, " + v * R.height + "px, 0)", "object-key-init")
          }), z = cc11001100_hook("z", z.add(h), "assign"), H -= cc11001100_hook("H", R.height, "assign");
        }
        var T,
          M,
          C,
          _,
          j,
          y,
          E = cc11001100_hook("E", g.find(".channel-item"), "var-init"),
          N = cc11001100_hook("N", v.find(".channel-item"), "var-init"),
          F = cc11001100_hook("F", 0, "var-init"),
          H = cc11001100_hook("H", 0, "var-init"),
          L = cc11001100_hook("L", 0, "var-init"),
          A = cc11001100_hook("A", 0, "var-init"),
          R = cc11001100_hook("R", $(h).offset(), "var-init"),
          z = cc11001100_hook("z", $(h), "var-init"),
          B = cc11001100_hook("B", $.Deferred(), "var-init");
        if (0 != b && 1 != b) return B.resolve(), B;
        if (T = cc11001100_hook("T", E.eq(0 === b ? 0 : -1), "assign"), T.length ? (F = cc11001100_hook("F", $(T).offset().left - R.left, "assign"), H = cc11001100_hook("H", $(T).offset().top - R.top, "assign")) : (F = cc11001100_hook("F", 13 - R.left, "assign"), H = cc11001100_hook("H", $(g).offset().top + 7 - R.top, "assign")), 1 === b) {
          var G = cc11001100_hook("G", $(T).index(), "var-init");
          (G + 1) % 4 === 0 ? (F -= cc11001100_hook("F", 3 * R.width, "assign"), H += cc11001100_hook("H", R.height, "assign")) : F += cc11001100_hook("F", R.width, "assign");
        }
        return y = cc11001100_hook("y", $(h).index(), "assign"), M = cc11001100_hook("M", N.filter(function () {
          return $(this).index() > y;
        }), "assign"), w(M, 1), C = cc11001100_hook("C", 0 === b ? E : [], "assign"), w(C, 0), b && E.length % 4 === 0 ? k(v.parent(), 1) : b || N.length % 4 !== 1 || k(g.parent(), -1), $(h).css({
          "-webkit-transition": cc11001100_hook("-webkit-transition", "-webkit-transform .5s ease", "object-key-init"),
          "-webkit-transform": cc11001100_hook("-webkit-transform", "translate3d(" + F + "px, " + H + "px, 0)", "object-key-init")
        }), $(h).one("webkitTransitionEnd", function () {
          0 === b ? T.length ? T.before(h) : g.prepend(h) : T.after(h), z.css({
            "-webkit-transform": cc11001100_hook("-webkit-transform", null, "object-key-init"),
            "-webkit-transition": cc11001100_hook("-webkit-transition", null, "object-key-init")
          }), B.resolve();
        }), B;
      },
      offlineInit: function () {
        var h = cc11001100_hook("h", this, "var-init"),
          v = cc11001100_hook("v", '<div id="channel_offline" class="rn-channelMgr"><div class="channel-head"><a class="back"></a><h1>栏目管理</h1></div><div class="c-offline-home"><div class ="icons"></div><p>网络不给力，请稍后重试</p><div class="refresh"></div></div></div>', "var-init");
        h.viewTpl = cc11001100_hook("h.viewTpl", $(v), "assign");
      },
      offlineEvent: function () {
        var h = cc11001100_hook("h", this, "var-init");
        h.viewTpl.on("click", ".back", function () {
          rain.event.fire("rainModule/channelMgr", "back");
        }).on("click", ".refresh", function () {
          rain.event.fire("rainModule/channelMgr", "offlineRefresh");
        });
      }
    }, "assign"), h;
  }), require(["rainModule/channelMgr/index_" + currentId], function (h) {
    rain.event.listen("rainModule/channelMgr", "channelMgrTpl", function (v) {
      v.dom.append(new h(v.item, v.id).viewTpl);
    });
  });
});