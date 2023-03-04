(window.webpackJsonp = cc11001100_hook("window.webpackJsonp", window.webpackJsonp || [], "assign")).push([[197], {
  2815: function (t, e, n) {},
  4709: function (t, e, n) {
    "use strict";

    n(2815);
  },
  4904: function (t, e, n) {
    "use strict";

    n.r(e);
    n(16), n(14), n(11), n(7), n(13), n(37);
    var o = cc11001100_hook("o", n(0), "var-init"),
      r = cc11001100_hook("r", n(6), "var-init"),
      c = cc11001100_hook("c", n(131), "var-init"),
      l = cc11001100_hook("l", n(89), "var-init"),
      v = cc11001100_hook("v", n(187), "var-init"),
      d = cc11001100_hook("d", n(3), "var-init"),
      m = cc11001100_hook("m", n(132), "var-init"),
      f = cc11001100_hook("f", n(39), "var-init"),
      h = cc11001100_hook("h", n(2682), "var-init");
    function j(object, t) {
      cc11001100_hook("object", object, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var e = cc11001100_hook("e", Object.keys(object), "var-init");
      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(object), "var-init");
        t && (n = cc11001100_hook("n", n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(object, t).enumerable;
        }), "assign")), e.push.apply(e, n);
      }
      return e;
    }
    function x(t) {
      cc11001100_hook("t", t, "function-parameter");
      for (var i = cc11001100_hook("i", 1, "var-init"); i < arguments.length; i++) {
        var source = cc11001100_hook("source", null != arguments[i] ? arguments[i] : {}, "var-init");
        i % 2 ? j(Object(source), !0).forEach(function (e) {
          Object(o.a)(t, e, source[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : j(Object(source)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e));
        });
      }
      return t;
    }
    var O = cc11001100_hook("O", "https://juejin.cn/extension/?utm_source=standalone&utm_medium=Pop-ups2&utm_campaign=extension_promotion", "var-init"),
      _ = cc11001100_hook("_", ["gettingStarted", "pin"], "var-init"),
      w = cc11001100_hook("w", {
        timelineIndex: cc11001100_hook("timelineIndex", 1, "object-key-init"),
        column: cc11001100_hook("column", 2, "object-key-init"),
        other: cc11001100_hook("other", 3, "object-key-init")
      }, "var-init"),
      k = cc11001100_hook("k", Object(r.b)({
        components: {
          Icon: cc11001100_hook("Icon", c.Icon, "object-key-init")
        },
        data: function () {
          return {
            linkBgImg: cc11001100_hook("linkBgImg", Object(m.e)("https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a287304e9ca7426381929f3efd41f8c8~tplv-k3u1fbpfcp-watermark.image", {
              resizeHeight: cc11001100_hook("resizeHeight", 360, "object-key-init")
            }, "noMark"), "object-key-init"),
            extLink: cc11001100_hook("extLink", O, "object-key-init"),
            timer: cc11001100_hook("timer", null, "object-key-init"),
            visibleForRoute: cc11001100_hook("visibleForRoute", !0, "object-key-init"),
            visibleExtension: cc11001100_hook("visibleExtension", !1, "object-key-init")
          };
        },
        computed: cc11001100_hook("computed", x(x({}, Object(l.mapGetters)({
          logined: cc11001100_hook("logined", d.LOGINED, "object-key-init")
        })), {}, {
          isFromExtension: function () {
            var t, e;
            return (null === (e = cc11001100_hook("e", null === (t = cc11001100_hook("t", this.$route, "assign")) || void 0 === t ? void 0 : t.query, "assign")) || void 0 === e ? void 0 : e.utm_source) === v.i;
          },
          visible: function () {
            return this.visibleExtension && this.visibleForRoute;
          },
          teaFromValue: function () {
            return w[this.$route.name || ""] || w.other;
          }
        }), "object-key-init"),
        watch: {
          $route: function (t) {
            _.indexOf(t.name) > -1 ? this.visibleForRoute = cc11001100_hook("this.visibleForRoute", !1, "assign") : this.visibleForRoute = cc11001100_hook("this.visibleForRoute", !0, "assign");
          },
          visible: function (t) {
            t && Object(f.d)("jj_ext_bottom_ad_show", {
              from: cc11001100_hook("from", this.teaFromValue, "object-key-init")
            });
          }
        },
        mounted: function () {
          this.visibleExtension = cc11001100_hook("this.visibleExtension", this.checkVisibility(), "assign"), this.visibleExtension && this.loopGetExtensionState();
        },
        beforeDestroy: function () {
          var t;
          clearInterval(null !== (t = cc11001100_hook("t", this.timer, "assign")) && void 0 !== t ? t : -1);
        },
        methods: {
          checkVisibility: function () {
            var t;
            return Object(h.a)(null === (t = cc11001100_hook("t", this.$nuxt, "assign")) || void 0 === t ? void 0 : t.context, this.$route.query);
          },
          linkExtension: function () {
            var t = cc11001100_hook("t", this, "var-init");
            setTimeout(function () {
              t.hideExtension(!1);
            }, 3e3), Object(f.d)("jj_ext_bottom_ad_download_click", {
              from: cc11001100_hook("from", this.teaFromValue, "object-key-init")
            }), window.open(O, "_blank");
          },
          hideExtension: function () {
            var t,
              e = cc11001100_hook("e", !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], "var-init");
            this.$emit("close");
            var n = cc11001100_hook("n", window.localStorage, "var-init");
            n.setItem("hideExtension", "true"), this.visibleExtension = cc11001100_hook("this.visibleExtension", !1, "assign"), window.clearInterval(null !== (t = cc11001100_hook("t", this.timer, "assign")) && void 0 !== t ? t : -1), e && Object(f.d)("jj_ext_bottom_ad_close_click", {
              from: cc11001100_hook("from", this.teaFromValue, "object-key-init")
            });
          },
          loopGetExtensionState: function () {
            var t = cc11001100_hook("t", this, "var-init");
            this.timer = cc11001100_hook("this.timer", window.setInterval(function () {
              var e;
              t.checkVisibility() || (t.visibleExtension = cc11001100_hook("t.visibleExtension", !1, "assign"), clearInterval(null !== (e = cc11001100_hook("e", t.timer, "assign")) && void 0 !== e ? e : -1));
            }, 5e3), "assign");
          }
        }
      }), "var-init"),
      y = cc11001100_hook("y", (n(4709), n(27)), "var-init"),
      component = cc11001100_hook("component", Object(y.a)(k, function () {
        var t = cc11001100_hook("t", this, "var-init"),
          e = cc11001100_hook("e", t.$createElement, "var-init"),
          n = cc11001100_hook("n", t._self._c || e, "var-init");
        return t.visible ? n("div", {
          staticClass: cc11001100_hook("staticClass", "recommend-box", "object-key-init")
        }, [n("div", {
          staticClass: cc11001100_hook("staticClass", "extension", "object-key-init"),
          on: {
            click: cc11001100_hook("click", t.linkExtension, "object-key-init")
          }
        }, [n("div", {
          staticClass: cc11001100_hook("staticClass", "link", "object-key-init"),
          style: {
            backgroundImage: cc11001100_hook("backgroundImage", "url('" + t.linkBgImg + "')", "object-key-init")
          },
          attrs: {
            "data-growing-container": cc11001100_hook("data-growing-container", "true", "object-key-init"),
            "data-growing-title": cc11001100_hook("data-growing-title", "掘金插件", "object-key-init")
          }
        }, [n("div", {
          staticClass: cc11001100_hook("staticClass", "title", "object-key-init")
        }, [t._v("稀土掘金浏览器插件——你的一站式工作台")]), t._v(" "), n("div", {
          staticClass: cc11001100_hook("staticClass", "description", "object-key-init")
        }, [t._v("\n        多内容聚合浏览、多引擎快捷搜索、多工具便捷提效、多模式随心畅享，你想要的，这里都有。\n      ")])]), t._v(" "), n("div", {
          staticClass: cc11001100_hook("staticClass", "ion-close", "object-key-init"),
          on: {
            click: function (e) {
              return e.preventDefault(), e.stopPropagation(), t.hideExtension();
            }
          }
        }, [n("Icon", {
          attrs: {
            type: cc11001100_hook("type", "close", "object-key-init")
          }
        })], 1)])]) : t._e();
      }, [], !1, null, "c0449fe2", null), "var-init");
    e.default = cc11001100_hook("e.default", component.exports, "assign");
  }
}]);