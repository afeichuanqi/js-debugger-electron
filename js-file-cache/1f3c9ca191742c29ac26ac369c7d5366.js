define("superman-san/app/hot-news/result_bd1c025", ["san", "tslib", "@searchfe/inject-js"], function (n, o, r) {
  return s = cc11001100_hook("s", {
    0: function (t, e) {
      t.exports = cc11001100_hook("t.exports", n, "assign");
    },
    1: function (t, e) {
      t.exports = cc11001100_hook("t.exports", o, "assign");
    },
    107: function (t, e) {
      t.exports = cc11001100_hook("t.exports", ' <div class="hot-news-wrapper"> <div class="s-rank-title s-opacity-border1-bottom"> <a href="https://top.baidu.com/board?platform=pc&sa=pcindex_entry" target="_blank" class="hot-title"> <div class="c-font-medium c-color-t title-text" aria-label="百度热搜"> <i class="c-icon hotsearch-title">&#xe687;</i> <i class="c-icon arrow">&#xe613;</i> </div> </a> <a s-if="isShowRefreshBtn" class="c-font-normal c-color-gray2 hot-refresh" on-click="refresh"> <i class="c-icon refresh-icon{{isRotate ? \' rotate\' : \'\'}}">&#xe619;</i> <span class="hot-refresh-text">换一换</span> </a> </div> <ul class="s-news-rank-content"> <li s-for="item in currList" class="news-meta-item clearfix"> <a id="title-content" class="title-content c-link c-font-medium" href="{{ item.linkurl }}" target="_blank"> <div s-if="item.isAd" class="title-content-noindex"></div> <i s-else-if="item.isTop" class="c-icon title-content-top-icon c-color-red c-gap-right-small">&#xe62e;</i> <span s-else class="title-content-index c-index-single c-index-single-hot{{item.index}}"> {{ item.index }} </span> <img s-if="item.pre_tag" class="title-content-icon" src="{{item.pre_tag}}"> <span class="title-content-title"> {{ item.card_title }} </span> <span class="title-content-mark c-text {{ hotTagsClassMap[item.ext.hotTags] }}"> {{ hotTagsTextMap[item.ext.hotTags] }} </span> </a> </li> </ul> </div> ', "assign");
    },
    108: function (t, e, n) {
      "use strict";

      Object.defineProperty(e, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var o,
        r = cc11001100_hook("r", n(1), "var-init"),
        i = cc11001100_hook("i", n(0), "var-init"),
        n = cc11001100_hook("n", n(5), "var-init"),
        n = cc11001100_hook("n", (o = cc11001100_hook("o", i.Component, "assign"), (0, r.__extends)(s, o), s.prototype.initData = cc11001100_hook("s.prototype.initData", function () {
          return {
            list: cc11001100_hook("list", [], "object-key-init"),
            isRotate: cc11001100_hook("isRotate", !1, "object-key-init"),
            isShowRefreshBtn: cc11001100_hook("isShowRefreshBtn", !1, "object-key-init"),
            currPage: cc11001100_hook("currPage", 0, "object-key-init"),
            hotTagsTextMap: cc11001100_hook("hotTagsTextMap", ["", "新", "商", "热", "沸", "爆", "荐"], "object-key-init"),
            hotTagsClassMap: cc11001100_hook("hotTagsClassMap", ["", "c-text-new", "c-text-business", "c-text-hot", "c-text-fei", "c-text-bao", "c-text-rec"], "object-key-init")
          };
        }, "assign"), s.prototype.refresh = cc11001100_hook("s.prototype.refresh", function () {
          var t = cc11001100_hook("t", this, "var-init");
          this.data.set("currPage", this.data.get("currPage") + 1), this.data.set("isRotate", !0);
          var e = cc11001100_hook("e", setTimeout(function () {
            t.data.set("isRotate", !1), clearTimeout(e);
          }, 200), "var-init");
        }, "assign"), s.computed = cc11001100_hook("s.computed", {
          currList: function () {
            var t = cc11001100_hook("t", this.data.get("list"), "var-init"),
              e = cc11001100_hook("e", Number(this.data.get("currPage") || 0) % 3, "var-init");
            return t.slice(10 * e, 10 * e + 10);
          }
        }, "assign"), (0, r.__decorate)([n.injectable], s)), "var-init");
      function s(t) {
        cc11001100_hook("t", t, "function-parameter");
        t = cc11001100_hook("t", o.call(this, t) || this, "assign");
        return t.trimWhitespace = cc11001100_hook("t.trimWhitespace", "all", "assign"), t;
      }
      e["default"] = cc11001100_hook("e[\"default\"]", n, "assign");
    },
    2: function (t, e, n) {
      e = cc11001100_hook("e", function () {
        "use strict";

        function i(t) {
          cc11001100_hook("t", t, "function-parameter");
          return (i = cc11001100_hook("i", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function i(t) {
            return typeof t;
          } : function i(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, "assign"))(t);
        }
        var s = cc11001100_hook("s", n(0).defineComponent, "var-init");
        function a(t) {
          cc11001100_hook("t", t, "function-parameter");
          if (null === t || t === undefined) throw new TypeError("Cannot convert undefined or null to object");
          for (var e = cc11001100_hook("e", Object(t), "var-init"), n = cc11001100_hook("n", 1, "var-init"); n < arguments.length; n++) {
            var o = cc11001100_hook("o", arguments[n], "var-init");
            if (null !== o && o !== undefined) for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (e[r] = cc11001100_hook("e[r]", o[r], "assign"));
          }
          return e;
        }
        t.exports = cc11001100_hook("t.exports", function (t, e, n) {
          for (var o = cc11001100_hook("o", function (t) {
              var e = cc11001100_hook("e", [t], "var-init");
              "function" == typeof t && (e.push(t.prototype), t.prototype.constructor && e.push(t.prototype.constructor.prototype));
              return e;
            }(t), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < o.length; r++) e && ("string" == typeof e ? o[r].template = cc11001100_hook("o[r].template", e, "assign") : e instanceof Array ? o[r].aPack = cc11001100_hook("o[r].aPack", e, "assign") : o[r].aNode = cc11001100_hook("o[r].aNode", e, "assign")), n.length && function (t, e) {
            for (var n = cc11001100_hook("n", {}, "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e.length; o++) a(n, e[o]);
            var r = cc11001100_hook("r", t.initData, "var-init");
            t.initData = cc11001100_hook("t.initData", r ? function () {
              return a({}, r.call(this), {
                $style: cc11001100_hook("$style", n, "object-key-init")
              });
            } : function () {
              return {
                $style: cc11001100_hook("$style", n, "object-key-init")
              };
            }, "assign");
          }(o[r], n);
          return "object" === i(t) ? s(t) : t;
        }, "assign");
      }.apply(e, []), "assign");
      e === undefined || (t.exports = cc11001100_hook("t.exports", e, "assign"));
    },
    241: function (t, e, n) {
      t.exports = cc11001100_hook("t.exports", n(242), "assign");
    },
    242: function (t, e, n) {
      var o = cc11001100_hook("o", n(2), "var-init");
      n(243);
      var r = cc11001100_hook("r", n(107), "var-init"),
        i = cc11001100_hook("i", n(108)["default"], "var-init");
      t.exports = cc11001100_hook("t.exports", n(108), "assign"), t.exports["default"] = cc11001100_hook("t.exports[\"default\"]", o(i, r, []), "assign");
    },
    243: function (t, e, n) {
      "use strict";

      n.r(e);
    },
    5: function (t, e) {
      t.exports = cc11001100_hook("t.exports", r, "assign");
    }
  }, "assign"), a = cc11001100_hook("a", {}, "assign"), i.m = cc11001100_hook("i.m", s, "assign"), i.c = cc11001100_hook("i.c", a, "assign"), i.d = cc11001100_hook("i.d", function (t, e, n) {
    i.o(t, e) || Object.defineProperty(t, e, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: cc11001100_hook("get", n, "object-key-init")
    });
  }, "assign"), i.r = cc11001100_hook("i.r", function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: cc11001100_hook("value", "Module", "object-key-init")
    }), Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }, "assign"), i.t = cc11001100_hook("i.t", function (e, t) {
    if (1 & t && (e = cc11001100_hook("e", i(e), "assign")), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = cc11001100_hook("n", Object.create(null), "var-init");
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      value: cc11001100_hook("value", e, "object-key-init")
    }), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function (t) {
      return e[t];
    }.bind(null, o));
    return n;
  }, "assign"), i.n = cc11001100_hook("i.n", function (t) {
    var e = cc11001100_hook("e", t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    }, "var-init");
    return i.d(e, "a", e), e;
  }, "assign"), i.o = cc11001100_hook("i.o", function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, "assign"), i.p = cc11001100_hook("i.p", "https://mss0.bdstatic.com/se/cache", "assign"), i(i.s = cc11001100_hook("i.s", 241, "assign"));
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (a[t]) return a[t].exports;
    var e = cc11001100_hook("e", a[t] = cc11001100_hook("a[t]", {
      i: cc11001100_hook("i", t, "object-key-init"),
      l: cc11001100_hook("l", !1, "object-key-init"),
      exports: {}
    }, "assign"), "var-init");
    return s[t].call(e.exports, e, e.exports, i), e.l = cc11001100_hook("e.l", !0, "assign"), e.exports;
  }
  var s, a;
});