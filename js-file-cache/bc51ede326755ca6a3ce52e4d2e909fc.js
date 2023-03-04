(window.webpackJsonp = cc11001100_hook("window.webpackJsonp", window.webpackJsonp || [], "assign")).push([[43], {
  1278: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return f;
    });
    n(7), n(22);
    var o = cc11001100_hook("o", n(5), "var-init"),
      r = cc11001100_hook("r", n(8), "var-init"),
      c = cc11001100_hook("c", n(103), "var-init"),
      l = cc11001100_hook("l", n(19), "var-init"),
      d = cc11001100_hook("d", n(18), "var-init"),
      h = cc11001100_hook("h", function () {
        var e = cc11001100_hook("e", Object(o.a)(regeneratorRuntime.mark(function e() {
          var t,
            n = cc11001100_hook("n", arguments, "var-init");
          return regeneratorRuntime.wrap(function (e) {
            for (;;) switch (e.prev = cc11001100_hook("e.prev", e.next, "assign")) {
              case 0:
                return t = cc11001100_hook("t", n.length > 0 && void 0 !== n[0] ? n[0] : 1e3, "assign"), e.abrupt("return", setTimeout(function () {
                  return Promise.resolve();
                }, t));
              case 2:
              case "end":
                return e.stop();
            }
          }, e);
        })), "var-init");
        return function () {
          return e.apply(this, arguments);
        };
      }(), "var-init");
    function f(e) {
      cc11001100_hook("e", e, "function-parameter");
      return m.apply(this, arguments);
    }
    function m() {
      return (m = cc11001100_hook("m", Object(o.a)(regeneratorRuntime.mark(function e(t) {
        var n;
        return regeneratorRuntime.wrap(function (e) {
          for (;;) switch (e.prev = cc11001100_hook("e.prev", e.next, "assign")) {
            case 0:
              if (!t || Object(d.f)()) {
                e.next = cc11001100_hook("e.next", 17, "assign");
                break;
              }
              if (localStorage.getItem(l.a.userFirstVisitDispatchCoupon) !== t) {
                e.next = cc11001100_hook("e.next", 4, "assign");
                break;
              }
              return e.abrupt("return");
            case 4:
              return e.prev = cc11001100_hook("e.prev", 4, "assign"), e.next = cc11001100_hook("e.next", 7, "assign"), c.a.UserCouponReceiveDiscountFirstOrder({}, {
                showError: cc11001100_hook("showError", !1, "object-key-init")
              });
            case 7:
              if ((null == (n = cc11001100_hook("n", e.sent, "assign")) ? void 0 : n.err_no) !== r.ERROR_NO.OK) {
                e.next = cc11001100_hook("e.next", 12, "assign");
                break;
              }
              return localStorage.setItem(l.a.userFirstVisitDispatchCoupon, t), e.next = cc11001100_hook("e.next", 12, "assign"), h();
            case 12:
              e.next = cc11001100_hook("e.next", 17, "assign");
              break;
            case 14:
              e.prev = cc11001100_hook("e.prev", 14, "assign"), e.t0 = cc11001100_hook("e.t0", e.catch(4), "assign"), console.error("userFirstVisitDispatchCoupon api request error:", e.t0);
            case 17:
            case "end":
              return e.stop();
          }
        }, e, null, [[4, 14]]);
      })), "assign")).apply(this, arguments);
    }
  },
  2679: function (e, t, n) {},
  2680: function (e, t, n) {},
  2681: function (e, t, n) {},
  2682: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    });
    n(72), n(162);
    var o = cc11001100_hook("o", n(187), "var-init");
    function r(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n,
        r,
        c = cc11001100_hook("c", localStorage.getItem("hideExtension"), "var-init"),
        l = cc11001100_hook("l", void 0 !== (null !== (r = cc11001100_hook("r", (null !== (n = cc11001100_hook("n", null === document || void 0 === document ? void 0 : document.cookie, "assign")) && void 0 !== n ? n : "").split(";"), "assign")) && void 0 !== r ? r : []).find(function (e) {
          return "_jj_ext=1" === e.trim();
        }), "var-init"),
        d = cc11001100_hook("d", (null == t ? void 0 : t.utm_source) === o.i, "var-init");
      return (null == e ? void 0 : e.isDesktop) && !c && !l && !d;
    }
  },
  2683: function (e, t, n) {},
  2684: function (e, t, n) {},
  2685: function (e, t, n) {},
  4003: function (e, t, n) {
    "use strict";

    n(2679);
  },
  4004: function (e, t, n) {
    "use strict";

    n(2680);
  },
  4005: function (e, t, n) {
    e.exports = cc11001100_hook("e.exports", n.p + "img/233.6b9e673.png", "assign");
  },
  4006: function (e, t, n) {
    e.exports = cc11001100_hook("e.exports", n.p + "img/666.5f186ea.png", "assign");
  },
  4007: function (e, t, n) {
    e.exports = cc11001100_hook("e.exports", n.p + "img/thumbs-up.33598de.png", "assign");
  },
  4008: function (e, t, n) {
    "use strict";

    n(2681);
  },
  4009: function (e, t, n) {
    n(16), n(14), n(11), n(7), n(13);
    var o = cc11001100_hook("o", n(42), "var-init"),
      r = cc11001100_hook("r", n(44), "var-init");
    function c(object, e) {
      cc11001100_hook("object", object, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", Object.keys(object), "var-init");
      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(object), "var-init");
        e && (n = cc11001100_hook("n", n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable;
        }), "assign")), t.push.apply(t, n);
      }
      return t;
    }
    e.exports = cc11001100_hook("e.exports", {
      functional: cc11001100_hook("functional", !0, "object-key-init"),
      render: function (e, t) {
        var n = cc11001100_hook("n", t._c, "var-init"),
          data = cc11001100_hook("data", (t._v, t.data), "var-init"),
          l = cc11001100_hook("l", t.children, "var-init"),
          d = cc11001100_hook("d", void 0 === l ? [] : l, "var-init"),
          h = cc11001100_hook("h", data.class, "var-init"),
          f = cc11001100_hook("f", data.staticClass, "var-init"),
          style = cc11001100_hook("style", data.style, "var-init"),
          m = cc11001100_hook("m", data.staticStyle, "var-init"),
          v = cc11001100_hook("v", data.attrs, "var-init"),
          _ = cc11001100_hook("_", void 0 === v ? {} : v, "var-init"),
          w = cc11001100_hook("w", r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]), "var-init");
        return n("svg", function (e) {
          for (var i = cc11001100_hook("i", 1, "var-init"); i < arguments.length; i++) {
            var source = cc11001100_hook("source", null != arguments[i] ? arguments[i] : {}, "var-init");
            i % 2 ? c(Object(source), !0).forEach(function (t) {
              o(e, t, source[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t));
            });
          }
          return e;
        }({
          class: cc11001100_hook("class", [h, f], "object-key-init"),
          style: cc11001100_hook("style", [style, m], "object-key-init"),
          attrs: cc11001100_hook("attrs", Object.assign({
            width: cc11001100_hook("width", "24", "object-key-init"),
            height: cc11001100_hook("height", "24", "object-key-init"),
            viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init"),
            fill: cc11001100_hook("fill", "none", "object-key-init"),
            xmlns: cc11001100_hook("xmlns", "http://www.w3.org/2000/svg", "object-key-init")
          }, _), "object-key-init")
        }, w), d.concat([n("circle", {
          attrs: {
            cx: cc11001100_hook("cx", "12", "object-key-init"),
            cy: cc11001100_hook("cy", "12", "object-key-init"),
            r: cc11001100_hook("r", "11", "object-key-init"),
            fill: cc11001100_hook("fill", "black", "object-key-init"),
            "fill-opacity": cc11001100_hook("fill-opacity", "0.4", "object-key-init")
          }
        }), n("circle", {
          attrs: {
            cx: cc11001100_hook("cx", "12", "object-key-init"),
            cy: cc11001100_hook("cy", "12", "object-key-init"),
            r: cc11001100_hook("r", "11.5", "object-key-init"),
            stroke: cc11001100_hook("stroke", "white", "object-key-init"),
            "stroke-opacity": cc11001100_hook("stroke-opacity", "0.4", "object-key-init")
          }
        }), n("path", {
          attrs: {
            "fill-rule": cc11001100_hook("fill-rule", "evenodd", "object-key-init"),
            "clip-rule": cc11001100_hook("clip-rule", "evenodd", "object-key-init"),
            d: cc11001100_hook("d", "M8.96924 8.24087C8.76787 8.0395 8.4414 8.0395 8.24003 8.24087C8.03867 8.44223 8.03867 8.76871 8.24003 8.97007L11.2919 12.022L8.02407 15.2898C7.82271 15.4912 7.82271 15.8177 8.02407 16.019C8.22543 16.2204 8.55191 16.2204 8.75327 16.019L12.0211 12.7512L15.289 16.019C15.4904 16.2204 15.8168 16.2204 16.0182 16.019C16.2196 15.8177 16.2196 15.4912 16.0182 15.2898L12.7503 12.022L15.8022 8.97007C16.0036 8.76871 16.0036 8.44223 15.8022 8.24087C15.6009 8.0395 15.2744 8.0395 15.073 8.24087L12.0211 11.2928L8.96924 8.24087Z", "object-key-init"),
            fill: cc11001100_hook("fill", "white", "object-key-init"),
            "fill-opacity": cc11001100_hook("fill-opacity", "0.9", "object-key-init")
          }
        })]));
      }
    }, "assign");
  },
  4010: function (e, t, n) {
    "use strict";

    n(2683);
  },
  4011: function (e, t, n) {
    "use strict";

    n(2684);
  },
  4012: function (e, t, n) {
    "use strict";

    n(2685);
  },
  4790: function (e, t, n) {
    "use strict";

    n.r(t);
    n(16), n(14), n(11), n(7), n(13), n(111), n(22);
    var o = cc11001100_hook("o", n(5), "var-init"),
      r = cc11001100_hook("r", (n(88), n(145), n(37), n(43), n(51), n(0)), "var-init"),
      c = cc11001100_hook("c", n(6), "var-init"),
      l = cc11001100_hook("l", n(56), "var-init"),
      d = cc11001100_hook("d", n.n(l), "var-init"),
      h = cc11001100_hook("h", n(89), "var-init"),
      f = cc11001100_hook("f", n(110), "var-init"),
      m = cc11001100_hook("m", n(1278), "var-init"),
      v = cc11001100_hook("v", n(310), "var-init"),
      _ = cc11001100_hook("_", {
        props: cc11001100_hook("props", ["type", "content"], "object-key-init")
      }, "var-init"),
      w = cc11001100_hook("w", (n(4003), n(27)), "var-init"),
      O = cc11001100_hook("O", {
        components: {
          Alert: cc11001100_hook("Alert", Object(w.a)(_, function () {
            var e = cc11001100_hook("e", this.$createElement, "var-init");
            return (this._self._c || e)("div", {
              staticClass: cc11001100_hook("staticClass", "alert", "object-key-init"),
              class: cc11001100_hook("class", [this.type], "object-key-init")
            }, [this._v(this._s(this.content))]);
          }, [], !1, null, "6b99392a", null).exports, "object-key-init")
        },
        props: cc11001100_hook("props", ["timeout"], "object-key-init"),
        data: function () {
          return {
            list: cc11001100_hook("list", [], "object-key-init")
          };
        },
        mounted: function () {
          var e = cc11001100_hook("e", this, "var-init");
          this.$on("push", function (t) {
            e.list.unshift(t), window.setTimeout(function () {
              e.list = cc11001100_hook("e.list", e.list.filter(function (e) {
                return e !== t;
              }), "assign");
            }, e.timeout || 3e3);
          });
        }
      }, "var-init"),
      y = cc11001100_hook("y", (n(4004), Object(w.a)(O, function () {
        var e = cc11001100_hook("e", this.$createElement, "var-init"),
          t = cc11001100_hook("t", this._self._c || e, "var-init");
        return t("div", {
          staticClass: cc11001100_hook("staticClass", "alert-list", "object-key-init")
        }, this._l(this.list, function (e, n) {
          return t("alert", {
            key: cc11001100_hook("key", n, "object-key-init"),
            staticClass: cc11001100_hook("staticClass", "alert", "object-key-init"),
            attrs: {
              content: cc11001100_hook("content", e.content, "object-key-init"),
              type: cc11001100_hook("type", e.type, "object-key-init")
            }
          });
        }), 1);
      }, [], !1, null, "262fe4c6", null).exports), "var-init"),
      C = cc11001100_hook("C", {
        233: cc11001100_hook(233, n(4005), "object-key-init"),
        666: cc11001100_hook(666, n(4006), "object-key-init"),
        up: cc11001100_hook("up", n(4007), "object-key-init")
      }, "var-init");
    function T(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t = cc11001100_hook("t", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < 15; i++) {
        var n = cc11001100_hook("n", parseInt(14 * Math.random() + 16) + "px", "var-init"),
          o = cc11001100_hook("o", E("width", n), "var-init"),
          r = cc11001100_hook("r", E("height", n), "var-init"),
          c = cc11001100_hook("c", E("display", "block"), "var-init"),
          l = cc11001100_hook("l", E("position", "absolute"), "var-init"),
          d = cc11001100_hook("d", E("left", parseInt(100 * Math.random()) + "%"), "var-init"),
          h = cc11001100_hook("h", E("top", parseInt(100 * Math.random()) + "%"), "var-init"),
          f = cc11001100_hook("f", E("background", "url(".concat(C[e], ") no-repeat center center")), "var-init"),
          m = cc11001100_hook("m", E("background-size", "contain"), "var-init"),
          v = cc11001100_hook("v", '\n      <span class="barrage-emoji" style="'.concat(o + r + l + d + h + f + c + m, '">\n       </span>\n    '), "var-init");
        t.push(v);
      }
      return function (e) {
        return '\n        <div\n          class="template"\n          style="\n            position:relative;\n            width:100%;\n            height:100%;\n          "\n        >\n          '.concat(e, "\n        </div>\n      ");
      }(t.join(""));
    }
    function E(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return "".concat(e, ":").concat(t, ";");
    }
    var P = cc11001100_hook("P", {
        data: function () {
          return {
            running: {
              type: cc11001100_hook("type", "233", "object-key-init"),
              show: cc11001100_hook("show", !1, "object-key-init")
            },
            barrageShowDuration: cc11001100_hook("barrageShowDuration", 6100, "object-key-init"),
            barrageTimeout: cc11001100_hook("barrageTimeout", null, "object-key-init"),
            barrageHtml: cc11001100_hook("barrageHtml", [], "object-key-init")
          };
        },
        methods: {
          stop: function () {
            clearTimeout(this.barrageTimeout), this.running.show = cc11001100_hook("this.running.show", !1, "assign");
          },
          renderBarrage: function () {
            this.barrageHtml = cc11001100_hook("this.barrageHtml", function (e) {
              for (var t = cc11001100_hook("t", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < 3; n++) {
                var o = cc11001100_hook("o", T(e), "var-init");
                t.push(o);
              }
              return t;
            }(this.running.type), "assign"), this.$nextTick(function () {
              document.querySelectorAll(".emoji-inner-screen").forEach(function (e) {
                e.classList.add("animate");
              });
            });
          }
        },
        watch: {
          "running.show": function (e) {
            var t = cc11001100_hook("t", this, "var-init");
            clearTimeout(this.barrageTimeout), e && (this.renderBarrage(), this.barrageTimeout = cc11001100_hook("this.barrageTimeout", setTimeout(function () {
              t.running.show = cc11001100_hook("t.running.show", !1, "assign");
            }, this.barrageShowDuration), "assign"));
          }
        },
        mounted: function () {
          var e = cc11001100_hook("e", this, "var-init"),
            t = cc11001100_hook("t", this.$getBean("eventBus"), "var-init");
          t.onVmLife(this, t.eventType.ARTICLE_COMMENT_BARRAGE, function () {
            var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "233", "var-init");
            e.running.type = cc11001100_hook("e.running.type", t, "assign"), e.running.show = cc11001100_hook("e.running.show", !0, "assign");
          });
        }
      }, "var-init"),
      R = cc11001100_hook("R", (n(4008), Object(w.a)(P, function () {
        var e = cc11001100_hook("e", this, "var-init"),
          t = cc11001100_hook("t", e.$createElement, "var-init"),
          n = cc11001100_hook("n", e._self._c || t, "var-init");
        return n("div", {
          staticClass: cc11001100_hook("staticClass", "emoji-barrage", "object-key-init")
        }, [e.running.show ? n("div", {
          staticClass: cc11001100_hook("staticClass", "full-screen", "object-key-init"),
          on: {
            dblclick: cc11001100_hook("dblclick", e.stop, "object-key-init")
          }
        }, e._l(e.barrageHtml, function (t, o) {
          return n("div", {
            staticClass: cc11001100_hook("staticClass", "emoji-inner-screen", "object-key-init"),
            class: cc11001100_hook("class", "emojin-inner-screen__" + o, "object-key-init"),
            domProps: {
              innerHTML: cc11001100_hook("innerHTML", e._s(t), "object-key-init")
            }
          });
        }), 0) : e._e()]);
      }, [], !1, null, "68506677", null).exports), "var-init"),
      L = cc11001100_hook("L", n(2682), "var-init"),
      A = cc11001100_hook("A", n(9), "var-init"),
      M = cc11001100_hook("M", n(4009), "var-init"),
      k = cc11001100_hook("k", n.n(M), "var-init"),
      V = cc11001100_hook("V", n(19), "var-init"),
      x = cc11001100_hook("x", n(3), "var-init"),
      j = cc11001100_hook("j", Object(A.d)({
        components: {
          CloseIcon: cc11001100_hook("CloseIcon", k.a, "object-key-init")
        },
        emits: cc11001100_hook("emits", ["show"], "object-key-init"),
        setup: function (e, t) {
          var n = cc11001100_hook("n", t.root, "var-init"),
            r = cc11001100_hook("r", t.emit, "var-init"),
            l = cc11001100_hook("l", [{
              name: cc11001100_hook("name", "timelineIndex", "object-key-init"),
              alias: cc11001100_hook("alias", "home", "object-key-init"),
              traceShowKey: cc11001100_hook("traceShowKey", "ad_web_pop_show", "object-key-init"),
              traceClickKey: cc11001100_hook("traceClickKey", "ad_web_pop_click", "object-key-init")
            }, {
              name: cc11001100_hook("name", "column", "object-key-init"),
              alias: cc11001100_hook("alias", "post", "object-key-init"),
              traceShowKey: cc11001100_hook("traceShowKey", "ad_web_article_pop_show", "object-key-init"),
              traceClickKey: cc11001100_hook("traceClickKey", "ad_web_article_pop_click", "object-key-init")
            }], "var-init"),
            h = cc11001100_hook("h", Object(c.v)(), "var-init"),
            f = cc11001100_hook("f", Object(A.r)(), "var-init"),
            m = function () {
              var e = cc11001100_hook("e", localStorage.getItem(V.a.showAdTccModal) || "[]", "var-init"),
                t = cc11001100_hook("t", [], "var-init");
              try {
                var n = cc11001100_hook("n", JSON.parse(e), "var-init");
                Array.isArray(n) && (t = cc11001100_hook("t", n, "assign"));
              } catch (e) {
                console.error(e), t = cc11001100_hook("t", [], "assign");
              }
              return t;
            },
            v = function () {
              return l.filter(function (e) {
                return e.name === (h.value.name || "");
              });
            },
            _ = cc11001100_hook("_", function () {
              var e = cc11001100_hook("e", Object(o.a)(regeneratorRuntime.mark(function e() {
                var t, o, c, l, h, _, O;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;) switch (e.prev = cc11001100_hook("e.prev", e.next, "assign")) {
                    case 0:
                      if (n.$device.isDesktop) {
                        e.next = cc11001100_hook("e.next", 2, "assign");
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (!(c = cc11001100_hook("c", v(), "assign")).length) {
                        e.next = cc11001100_hook("e.next", 13, "assign");
                        break;
                      }
                      return e.next = cc11001100_hook("e.next", 6, "assign"), n.$store.dispatch(x.TCC_CONFIG, "juejin_config_web_ad_home_post");
                    case 6:
                      l = cc11001100_hook("l", e.sent, "assign"), h = cc11001100_hook("h", (null === (t = cc11001100_hook("t", l, "assign")) || void 0 === t ? void 0 : t[c[0].alias]) || [], "assign"), _ = cc11001100_hook("_", Date.now() / 1e3, "assign"), (O = cc11001100_hook("O", h.filter(function (e) {
                        return _ > d()(e.startTime).unix() && _ < d()(e.endTime).unix();
                      }), "assign")).length && !m().includes("".concat((null === (o = cc11001100_hook("o", O[0], "assign")) || void 0 === o ? void 0 : o.id) || "")) && (r("show"), f.value = cc11001100_hook("f.value", O[0], "assign"), w(c[0].traceShowKey)), e.next = cc11001100_hook("e.next", 14, "assign");
                      break;
                    case 13:
                      f.value && (f.value = cc11001100_hook("f.value", void 0, "assign"));
                    case 14:
                    case "end":
                      return e.stop();
                  }
                }, e);
              })), "var-init");
              return function () {
                return e.apply(this, arguments);
              };
            }(), "var-init");
          Object(A.x)(function () {
            return h.value.name;
          }, function () {
            _();
          }), Object(A.m)(function () {
            _();
          });
          var w = function (e) {
              var t, o;
              e && n.$TEA(e, {
                id: cc11001100_hook("id", (null === (t = cc11001100_hook("t", f.value, "assign")) || void 0 === t ? void 0 : t.id) || "", "object-key-init"),
                ad_url: cc11001100_hook("ad_url", (null === (o = cc11001100_hook("o", f.value, "assign")) || void 0 === o ? void 0 : o.url) || "", "object-key-init")
              });
            },
            O = function (e) {
              var t, o, r;
              n.$TEA(null === (t = cc11001100_hook("t", v()[0], "assign")) || void 0 === t ? void 0 : t.traceClickKey, {
                id: cc11001100_hook("id", (null === (o = cc11001100_hook("o", f.value, "assign")) || void 0 === o ? void 0 : o.id) || "", "object-key-init"),
                ad_url: cc11001100_hook("ad_url", (null === (r = cc11001100_hook("r", f.value, "assign")) || void 0 === r ? void 0 : r.url) || "", "object-key-init"),
                click_type: cc11001100_hook("click_type", e, "object-key-init")
              });
            };
          return {
            activeAd: cc11001100_hook("activeAd", f, "object-key-init"),
            closeAd: function () {
              var e;
              localStorage.setItem(V.a.showAdTccModal, JSON.stringify(m().concat(["".concat((null === (e = cc11001100_hook("e", f.value, "assign")) || void 0 === e ? void 0 : e.id) || "")]))), O("skip"), f.value = cc11001100_hook("f.value", void 0, "assign");
            },
            handleClick: function () {
              O("enter"), window.open(f.value.url, "_blank");
            }
          };
        }
      }), "var-init"),
      I = cc11001100_hook("I", (n(4010), Object(w.a)(j, function () {
        var e = cc11001100_hook("e", this, "var-init"),
          t = cc11001100_hook("t", e.$createElement, "var-init"),
          n = cc11001100_hook("n", e._self._c || t, "var-init");
        return e.activeAd ? n("div", {
          staticClass: cc11001100_hook("staticClass", "poster-wrap", "object-key-init"),
          on: {
            click: function (t) {
              return t.stopPropagation(), e.handleClick(t);
            }
          }
        }, [n("div", {
          staticClass: cc11001100_hook("staticClass", "poster-close-wrap", "object-key-init"),
          on: {
            click: function (t) {
              return t.stopPropagation(), e.closeAd(t);
            }
          }
        }, [n("CloseIcon", {
          staticClass: cc11001100_hook("staticClass", "poster-close-icon", "object-key-init")
        })], 1), e._v(" "), n("div", {
          staticClass: cc11001100_hook("staticClass", "poster-img-wrap", "object-key-init")
        }, [n("img", {
          staticClass: cc11001100_hook("staticClass", "poster-img", "object-key-init"),
          attrs: {
            src: cc11001100_hook("src", e.activeAd.imgUrl, "object-key-init")
          }
        })]), e._v(" "), n("div", {
          staticClass: cc11001100_hook("staticClass", "poster-title", "object-key-init")
        }, [e._v(e._s(e.activeAd.title))])]) : e._e();
      }, [], !1, null, "ebc1850e", null).exports), "var-init"),
      S = cc11001100_hook("S", n(910), "var-init"),
      D = cc11001100_hook("D", n(957), "var-init"),
      N = cc11001100_hook("N", {
        head: function () {
          return {
            title: cc11001100_hook("title", "错误", "object-key-init")
          };
        }
      }, "var-init"),
      U = cc11001100_hook("U", Object(w.a)(N, function () {
        var e = cc11001100_hook("e", this.$createElement, "var-init"),
          t = cc11001100_hook("t", this._self._c || e, "var-init");
        return t("view-container", [t("div", {
          staticClass: cc11001100_hook("staticClass", "view error-view", "object-key-init")
        }, [t("h1", [this._v("有一个错误已经发生")])])]);
      }, [], !1, null, "3e90d13e", null).exports, "var-init"),
      B = cc11001100_hook("B", n(85), "var-init"),
      $ = cc11001100_hook("$", n(170), "var-init"),
      F = cc11001100_hook("F", n(30), "var-init"),
      G = cc11001100_hook("G", n(49), "var-init"),
      H = cc11001100_hook("H", n(225), "var-init");
    function K(object, e) {
      cc11001100_hook("object", object, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", Object.keys(object), "var-init");
      if (Object.getOwnPropertySymbols) {
        var n = cc11001100_hook("n", Object.getOwnPropertySymbols(object), "var-init");
        e && (n = cc11001100_hook("n", n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(object, e).enumerable;
        }), "assign")), t.push.apply(t, n);
      }
      return t;
    }
    function Y(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var i = cc11001100_hook("i", 1, "var-init"); i < arguments.length; i++) {
        var source = cc11001100_hook("source", null != arguments[i] ? arguments[i] : {}, "var-init");
        i % 2 ? K(Object(source), !0).forEach(function (t) {
          Object(r.a)(e, t, source[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : K(Object(source)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t));
        });
      }
      return e;
    }
    var Q = cc11001100_hook("Q", 0, "var-init"),
      W = cc11001100_hook("W", ["/bind", "/login", "/mobile/lottery", "/mobile/lottery/welfare", "/getting-started", "/app", "/delete/account", "/mobile/bugfix", "/bugfix/rank", "/challenge/1", "/challenge/1/detail"], "var-init"),
      J = cc11001100_hook("J", Object(c.b)({
        components: {
          Barrage: cc11001100_hook("Barrage", R, "object-key-init"),
          AlertList: cc11001100_hook("AlertList", y, "object-key-init"),
          ErrorView: cc11001100_hook("ErrorView", U, "object-key-init"),
          BindPhoneModal: function () {
            return n.e(32).then(n.bind(null, 4734));
          },
          NotFoundView: function () {
            return n.e(37).then(n.bind(null, 2832));
          },
          NewUserLead: function () {
            return n.e(139).then(n.bind(null, 4824));
          },
          PinModal: function () {
            return n.e(74).then(n.bind(null, 4902));
          },
          AuthModal: function () {
            return n.e(16).then(n.bind(null, 4733));
          },
          CaptchaModal: function () {
            return n.e(190).then(n.bind(null, 2841));
          },
          SuspensionPanel: function () {
            return n.e(158).then(n.bind(null, 1643));
          },
          ActivityRecommend: function () {
            return n.e(206).then(n.bind(null, 4903));
          },
          ExtensionRecommend: function () {
            return n.e(197).then(n.bind(null, 4904));
          },
          AccountDeleteModal: function () {
            return n.e(177).then(n.bind(null, 2834));
          },
          VipBorrowModal: function () {
            return n.e(186).then(n.bind(null, 4858));
          },
          UserGrowthLead: function () {
            return n.e(121).then(n.bind(null, 4822));
          },
          UserGrowthPopup: function () {
            return n.e(143).then(n.bind(null, 4905));
          },
          UpgradeBox: function () {
            return n.e(181).then(n.bind(null, 4906));
          },
          Report: function () {
            return Promise.all([n.e(339), n.e(137)]).then(n.bind(null, 4859));
          },
          LoginGuide: function () {
            return n.e(34).then(n.bind(null, 4735));
          },
          HomePostTccAd: cc11001100_hook("HomePostTccAd", I, "object-key-init"),
          RiskModal: function () {
            return n.e(198).then(n.bind(null, 4907));
          },
          FixedResourceTccConfig: function () {
            return n.e(192).then(n.bind(null, 4908));
          }
        },
        setup: function (e, t) {
          var n = cc11001100_hook("n", t.root, "var-init"),
            o = cc11001100_hook("o", Object(c.x)(), "var-init");
          o.dispatch(x.LOAD_THEME);
          var r = cc11001100_hook("r", Object(D.b)(), "var-init"),
            l = cc11001100_hook("l", r.showReportModal, "var-init"),
            d = cc11001100_hook("d", r.reportModalData, "var-init");
          return Object(c.j)(function () {
            var e,
              t,
              r = cc11001100_hook("r", n.$getBean("eventBus"), "var-init");
            r.onVmLife(n, r.eventType.REPORT_CONTENT, l), (null === (t = cc11001100_hook("t", null === (e = cc11001100_hook("e", o.state.auth, "assign")) || void 0 === e ? void 0 : e.user, "assign")) || void 0 === t ? void 0 : t.user_id) && (o.dispatch(x.FETCH_ORE_COUNT), o.dispatch(x.FETCH_AVATAR_MENU_INFO), f.a.CompleteTask());
          }), Y(Y({}, Object(B.c)()), {}, {
            reportModalData: cc11001100_hook("reportModalData", d, "object-key-init")
          });
        },
        data: function () {
          return {
            visibleAuthForm: cc11001100_hook("visibleAuthForm", null, "object-key-init"),
            isSuspensionPanelVisible: cc11001100_hook("isSuspensionPanelVisible", !1, "object-key-init"),
            isAlertListVisible: cc11001100_hook("isAlertListVisible", !1, "object-key-init"),
            newuserTicket: cc11001100_hook("newuserTicket", !1, "object-key-init"),
            isVisiblePinEditor: cc11001100_hook("isVisiblePinEditor", !1, "object-key-init"),
            isBindPhoneNumberModalVisible: cc11001100_hook("isBindPhoneNumberModalVisible", !1, "object-key-init"),
            visibleCaptcha: cc11001100_hook("visibleCaptcha", !1, "object-key-init"),
            captchaType: cc11001100_hook("captchaType", "SLIDE", "object-key-init"),
            verifyCallback: cc11001100_hook("verifyCallback", "", "object-key-init"),
            bindPhoneMsg: cc11001100_hook("bindPhoneMsg", "", "object-key-init"),
            to: cc11001100_hook("to", "", "object-key-init"),
            isLogoutModalVisible: cc11001100_hook("isLogoutModalVisible", !1, "object-key-init"),
            UserLeadPopupShowed: cc11001100_hook("UserLeadPopupShowed", !1, "object-key-init"),
            isFromMainPageSigninClick: cc11001100_hook("isFromMainPageSigninClick", !1, "object-key-init"),
            enter_method: cc11001100_hook("enter_method", "", "object-key-init"),
            newLeadVisibility: cc11001100_hook("newLeadVisibility", !1, "object-key-init"),
            bindPhoneOption: {},
            popupMutex: cc11001100_hook("popupMutex", !1, "object-key-init"),
            isShowVipBorrow: cc11001100_hook("isShowVipBorrow", !1, "object-key-init"),
            vipTeaParams: {},
            bookInfo: {},
            hideRecommendComponent: cc11001100_hook("hideRecommendComponent", !1, "object-key-init"),
            closeRedirectParams: cc11001100_hook("closeRedirectParams", null, "object-key-init"),
            loginGuideFooterVisible: cc11001100_hook("loginGuideFooterVisible", !1, "object-key-init"),
            hasTccAd: cc11001100_hook("hasTccAd", !1, "object-key-init")
          };
        },
        computed: cc11001100_hook("computed", Y(Y({}, Object(h.mapGetters)({
          user: cc11001100_hook("user", x.USER, "object-key-init"),
          activity: cc11001100_hook("activity", x.ACTIVITY, "object-key-init"),
          logined: cc11001100_hook("logined", x.LOGINED, "object-key-init"),
          unreadNotificationCount: cc11001100_hook("unreadNotificationCount", x.UNREAD_NOTIFICATION_COUNT, "object-key-init"),
          errorView: cc11001100_hook("errorView", x.ERROR_VIEW, "object-key-init"),
          needSuspension: cc11001100_hook("needSuspension", x.NEED_SUSPENSION, "object-key-init"),
          needRiskModal: cc11001100_hook("needRiskModal", x.NEED_RISK_MODAL, "object-key-init")
        })), {}, {
          displayedUnreadNotificationAmount: function () {
            return Object(H.c)(this.unreadNotificationCount.total);
          },
          titleTemplate: function () {
            return this.displayedUnreadNotificationAmount ? "(".concat(this.displayedUnreadNotificationAmount, ") %s - 掘金") : "%s - 掘金";
          },
          date: function () {
            return Object(F.a)(new Date(), "MMDD");
          },
          recommendComponent: function () {
            var e, t;
            return this.hideRecommendComponent || ["login", "lognIndex", "bindIndex", "offer", "presalePay", "presaleIndex", "presaleResult", "vipIndex", "vipPayResult", "membership", "membershipHome", "integral", "property", "mall"].includes(this.$route.name) || this.$route.path.startsWith("/creator") ? null : 1 === (null === (e = cc11001100_hook("e", this.activity[2020], "assign")) || void 0 === e ? void 0 : e.is_show) ? "ActivityRecommend" : Object(L.a)(null === (t = cc11001100_hook("t", this.$nuxt, "assign")) || void 0 === t ? void 0 : t.context, this.$route.query) ? "ExtensionRecommend" : null;
          },
          isMobile: function () {
            return this.$device.isMobile;
          },
          isPathExcluded: function () {
            var path = cc11001100_hook("path", this.$router.currentRoute.path, "var-init");
            return W.some(function (e) {
              return e === path;
            });
          }
        }), "object-key-init"),
        watch: {
          visibleAuthForm: function (e) {
            this.visibleMobileExtension(!e);
          },
          user: function (e) {
            var t = cc11001100_hook("t", this.$route.name || "", "var-init");
            ("courseIndex" !== t || this.$route.path.includes("bytetech")) && (["bookInfo", "column"].includes(t) || Object(m.a)((null == e ? void 0 : e.user_id) || ""));
          },
          $route: function () {
            this.checkLogin(), this.handleLeadModal();
          }
        },
        mounted: function () {
          var e = cc11001100_hook("e", this, "var-init");
          Q = cc11001100_hook("Q", new Date(), "assign"), this.initEventListener(), this.mountAlertList(), this.mountSuspensionPanel(), this.fetchUnreadNotificationCount(), this.$store.dispatch(x.ACTIVITY), this.handleLeadModal(), "1" !== window.sessionStorage.getItem("IS_DELETE") || this.popupMutex || this.isPathExcluded || (this.isLogoutModalVisible = cc11001100_hook("this.isLogoutModalVisible", !0, "assign"), this.popupMutex = cc11001100_hook("this.popupMutex", !0, "assign"), window.sessionStorage.removeItem("IS_DELETE")), this.checkLogin(), this.$device.isDesktop && Object(v.a)({
            name: cc11001100_hook("name", "login_guide", "object-key-init"),
            key: cc11001100_hook("key", "login_type", "object-key-init"),
            value: cc11001100_hook("value", ["nav", "all"], "object-key-init"),
            defaultValue: cc11001100_hook("defaultValue", "default", "object-key-init")
          }).then(function (t) {
            if (t) {
              var n = cc11001100_hook("n", e.$getBean("eventBus"), "var-init");
              n.onVmLife(e, n.eventType.HEADER_NAV_VISIBILITY_CHANGE, function (t) {
                var n = cc11001100_hook("n", t.visible, "var-init"),
                  o = cc11001100_hook("o", window.localStorage.getItem(V.a.loginGuideFooterTime), "var-init");
                e.user || n || e.recommendComponent || e.hasTccAd || d()().isSame(o, "day") || (e.loginGuideFooterVisible = cc11001100_hook("e.loginGuideFooterVisible", !0, "assign"), e.$TEA("login_guide_show", {
                  from: cc11001100_hook("from", S.a.footer, "object-key-init"),
                  type: cc11001100_hook("type", S.b.auto, "object-key-init")
                }), window.localStorage.setItem(V.a.loginGuideFooterTime, d()().format("YYYY-MM-DD")));
              });
            }
          });
        },
        beforeDestroy: function () {
          Object(G.q)(this.handleVisibilityChange);
        },
        methods: cc11001100_hook("methods", Y(Y({}, Object(h.mapActions)({
          fetchUnreadNotificationCount: cc11001100_hook("fetchUnreadNotificationCount", x.FETCH_UNREAD_NOTIFICATION_COUNT, "object-key-init"),
          fetchCurrentUser: cc11001100_hook("fetchCurrentUser", x.FETCH_CURRENT_USER, "object-key-init")
        })), {}, {
          visibleMobileExtension: function (e) {
            var t = cc11001100_hook("t", document.getElementById("mobile-newuser-ticket"), "var-init");
            null !== t && (t.style.opacity = cc11001100_hook("t.style.opacity", Number(e), "assign"));
          },
          checkLogin: function () {
            var e = cc11001100_hook("e", this, "var-init");
            return Object(o.a)(regeneratorRuntime.mark(function t() {
              var n, o, r, c;
              return regeneratorRuntime.wrap(function (t) {
                for (;;) switch (t.prev = cc11001100_hook("t.prev", t.next, "assign")) {
                  case 0:
                    if (e.$store.getters.USER) {
                      t.next = cc11001100_hook("t.next", 6, "assign");
                      break;
                    }
                    return t.next = cc11001100_hook("t.next", 3, "assign"), e.$store.dispatch(x.TCC_CONFIG, "juejin_login_config");
                  case 3:
                    r = cc11001100_hook("r", t.sent, "assign"), (null == (c = cc11001100_hook("c", null === (o = cc11001100_hook("o", null === (n = cc11001100_hook("n", r.mustLogin, "assign")) || void 0 === n ? void 0 : n.bookIds, "assign")) || void 0 === o ? void 0 : o.map(function (e) {
                      return {
                        reg: cc11001100_hook("reg", new RegExp("^/((book)|(video))/(m/)?".concat(e, "/section/\\d+$")), "object-key-init"),
                        id: cc11001100_hook("id", e, "object-key-init")
                      };
                    }), "assign")) ? void 0 : c.length) && window.location.pathname && c.forEach(function (t) {
                      var n = cc11001100_hook("n", t.reg, "var-init"),
                        o = cc11001100_hook("o", t.id, "var-init");
                      n.test(window.location.pathname) && e.$requestLogin({
                        closeRedirectParams: {
                          name: cc11001100_hook("name", "bookInfo", "object-key-init"),
                          params: {
                            id: cc11001100_hook("id", o, "object-key-init")
                          }
                        }
                      });
                    });
                  case 6:
                  case "end":
                    return t.stop();
                }
              }, t);
            }))();
          },
          handleLeadModal: function () {
            var e;
            this.$device.isDesktop && (null === (e = cc11001100_hook("e", this.user, "assign")) || void 0 === e ? void 0 : e.need_lead) && "timelineIndex" === this.$route.name && (this.popupMutex || (this.newLeadVisibility = cc11001100_hook("this.newLeadVisibility", !0, "assign"), this.popupMutex = cc11001100_hook("this.popupMutex", !0, "assign")));
          },
          initEventListener: function () {
            var e = cc11001100_hook("e", this, "var-init"),
              t = cc11001100_hook("t", this.$getBean("eventBus"), "var-init"),
              n = cc11001100_hook("n", t.eventType, "var-init");
            t.onVmLife(this, n.VISIBLE_LOGOUT_MODAL, function () {
              e.isLogoutModalVisible = cc11001100_hook("e.isLogoutModalVisible", !0, "assign");
            }), t.onVmLife(this, n.REQUEST_LOGIN, function (t) {
              var n = cc11001100_hook("n", t || {}, "var-init"),
                o = cc11001100_hook("o", n.click, "var-init"),
                r = cc11001100_hook("r", void 0 !== o && o, "var-init"),
                c = cc11001100_hook("c", n.enterMethod, "var-init"),
                l = cc11001100_hook("l", n.closeRedirectParams, "var-init"),
                d = cc11001100_hook("d", n.successRedirectUrl, "var-init");
              e.isFromMainPageSigninClick = cc11001100_hook("e.isFromMainPageSigninClick", r, "assign"), e.enter_method = cc11001100_hook("e.enter_method", c, "assign"), e.visibleAuthForm = cc11001100_hook("e.visibleAuthForm", "login-with-phone", "assign"), e.newuserTicket = cc11001100_hook("e.newuserTicket", null, "assign"), e.closeRedirectParams = cc11001100_hook("e.closeRedirectParams", l || null, "assign"), e.to = cc11001100_hook("e.to", d || "", "assign");
            }), t.onVmLife(this, n.SHOW_VIP_BORROW_MODAL, function (t, n) {
              e.isShowVipBorrow = cc11001100_hook("e.isShowVipBorrow", !0, "assign"), e.bookInfo = cc11001100_hook("e.bookInfo", t, "assign"), e.vipTeaParams = cc11001100_hook("e.vipTeaParams", n, "assign");
            }), t.onVmLife(this, n.REQUEST_LOGIN_REDIRECT, function () {
              var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] && arguments[0], "var-init"),
                n = cc11001100_hook("n", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", "var-init"),
                o = cc11001100_hook("o", arguments.length > 2 ? arguments[2] : void 0, "var-init");
              e.isFromMainPageSigninClick = cc11001100_hook("e.isFromMainPageSigninClick", t, "assign"), e.enter_method = cc11001100_hook("e.enter_method", n, "assign"), e.visibleAuthForm = cc11001100_hook("e.visibleAuthForm", "login-with-phone", "assign"), e.newuserTicket = cc11001100_hook("e.newuserTicket", null, "assign"), e.to = cc11001100_hook("e.to", o, "assign");
            }), t.onVmLife(this, n.REQUEST_REGISTER, function (t) {
              e.visibleAuthForm = cc11001100_hook("e.visibleAuthForm", "register", "assign"), e.newuserTicket = cc11001100_hook("e.newuserTicket", t, "assign");
            }), t.onVmLife(this, n.REQUEST_RESET_PASSWORD, function () {
              e.visibleAuthForm = cc11001100_hook("e.visibleAuthForm", "reset-password", "assign");
            }), t.onVmLife(this, n.AUTHORIZED, function () {
              e.visibleAuthForm = cc11001100_hook("e.visibleAuthForm", null, "assign");
            }), t.onVmLife(this, n.REQUEST_LOGOUT, function () {
              e.$store.dispatch(x.LOGOUT);
            }), t.onVmLife(this, n.ALERT, function (content, t) {
              e.$refs.alertList.$emit("push", {
                content: cc11001100_hook("content", content, "object-key-init"),
                type: cc11001100_hook("type", t, "object-key-init")
              });
            }), t.onVmLife(this, n.CREATE_PIN, function (t) {
              e.isVisiblePinEditor = cc11001100_hook("e.isVisiblePinEditor", "pin", "assign"), e.editorProps = cc11001100_hook("e.editorProps", t, "assign");
            }), t.onVmLife(this, n.BIND_PHONE_NUMBER, function (t, option) {
              e.bindPhoneMsg = cc11001100_hook("e.bindPhoneMsg", t || "", "assign"), e.isBindPhoneNumberModalVisible = cc11001100_hook("e.isBindPhoneNumberModalVisible", !0, "assign"), e.bindPhoneOption = cc11001100_hook("e.bindPhoneOption", option, "assign");
              var n = cc11001100_hook("n", e.$getBean("eventBus"), "var-init");
              n.emit(n.eventType.LOCK_ROOT_CONTAINER_SCROLL);
            }), t.onVmLife(this, n.TOGGLE_CAPTCHA_MODAL, function (t) {
              var n = cc11001100_hook("n", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "SLIDE", "var-init"),
                o = cc11001100_hook("o", arguments.length > 2 ? arguments[2] : void 0, "var-init");
              e.captchaType = cc11001100_hook("e.captchaType", n, "assign"), e.visibleCaptcha = cc11001100_hook("e.visibleCaptcha", t, "assign"), e.verifyCallback = cc11001100_hook("e.verifyCallback", o, "assign");
            }), Object($.d)(), Object(G.o)(this.handleVisibilityChange);
          },
          mountAlertList: function () {
            this.isAlertListVisible = cc11001100_hook("this.isAlertListVisible", !0, "assign");
          },
          mountSuspensionPanel: function () {
            this.isSuspensionPanelVisible = cc11001100_hook("this.isSuspensionPanelVisible", !this.isPathExcluded, "assign");
          },
          onBindPhoneNumberModalClose: function () {
            var e = cc11001100_hook("e", this.$getBean("eventBus"), "var-init");
            this.fetchCurrentUser(), this.isBindPhoneNumberModalVisible = cc11001100_hook("this.isBindPhoneNumberModalVisible", !1, "assign"), e.emit(e.eventType.UNLOCK_ROOT_CONTAINER_SCROLL);
          },
          collectPageStayTime: function () {
            var e = cc11001100_hook("e", 0, "var-init");
            Q && (e = cc11001100_hook("e", new Date() - Q, "assign")), this.$TEA("main_site_stay", {
              user_id: cc11001100_hook("user_id", this.user ? this.user.id : "unknown", "object-key-init"),
              page_link: cc11001100_hook("page_link", window.location.href, "object-key-init"),
              stay_time: cc11001100_hook("stay_time", e, "object-key-init")
            }), Q = cc11001100_hook("Q", 0, "assign");
          },
          handleVisibilityChange: function () {
            var e = cc11001100_hook("e", Object(G.d)(), "var-init");
            document[e] ? this.collectPageStayTime() : Q = cc11001100_hook("Q", new Date(), "assign");
          },
          onVerify: function () {
            this.visibleCaptcha = cc11001100_hook("this.visibleCaptcha", !1, "assign");
            var e = cc11001100_hook("e", this.$getBean("eventBus"), "var-init");
            e.emit(e.eventType.CAPTCHA_VERIFIED, this.verifyCallback);
          },
          closeRecommendComponent: function () {
            this.hideRecommendComponent = cc11001100_hook("this.hideRecommendComponent", !0, "assign");
          },
          closeAuthModal: function (e) {
            this.visibleAuthForm = cc11001100_hook("this.visibleAuthForm", null, "assign"), !0 !== e && this.closeRedirectParams && this.$router.push(this.closeRedirectParams);
          }
        }), "object-key-init")
      }), "var-init"),
      Z = cc11001100_hook("Z", (n(4011), n(4012), Object(w.a)(J, function () {
        var e = cc11001100_hook("e", this, "var-init"),
          t = cc11001100_hook("t", e.$createElement, "var-init"),
          n = cc11001100_hook("n", e._self._c || t, "var-init");
        return n("div", {
          attrs: {
            id: cc11001100_hook("id", "juejin", "object-key-init")
          }
        }, [e.errorView ? n(e.errorView, {
          tag: cc11001100_hook("tag", "component", "object-key-init"),
          staticClass: cc11001100_hook("staticClass", "error-view", "object-key-init")
        }) : e._e(), e._v(" "), e.errorView ? e._e() : n("router-view"), e._v(" "), e.recommendComponent ? n(e.recommendComponent, {
          tag: cc11001100_hook("tag", "component", "object-key-init"),
          attrs: {
            logined: cc11001100_hook("logined", e.logined, "object-key-init")
          },
          on: {
            close: cc11001100_hook("close", e.closeRecommendComponent, "object-key-init")
          }
        }) : e._e(), e._v(" "), n("div", {
          staticClass: cc11001100_hook("staticClass", "global-component-box", "object-key-init")
        }, [e.isAlertListVisible ? n("alert-list", {
          ref: cc11001100_hook("ref", "alertList", "object-key-init"),
          staticClass: cc11001100_hook("staticClass", "alert-list", "object-key-init")
        }) : e._e(), e._v(" "), e.isSuspensionPanelVisible && e.needSuspension ? n("suspension-panel", {
          staticClass: cc11001100_hook("staticClass", "suspension-panel", "object-key-init"),
          attrs: {
            "has-extension-banner": cc11001100_hook("has-extension-banner", Boolean(e.recommendComponent), "object-key-init")
          }
        }) : e._e(), e._v(" "), e.visibleAuthForm ? n("auth-modal", {
          attrs: {
            type: cc11001100_hook("type", e.visibleAuthForm, "object-key-init"),
            "newuser-ticket": cc11001100_hook("newuser-ticket", e.newuserTicket, "object-key-init"),
            to: cc11001100_hook("to", e.to, "object-key-init"),
            "is-from-main-page-signin-click": cc11001100_hook("is-from-main-page-signin-click", e.isFromMainPageSigninClick, "object-key-init"),
            enter_method: cc11001100_hook("enter_method", e.enter_method, "object-key-init")
          },
          on: {
            close: cc11001100_hook("close", e.closeAuthModal, "object-key-init")
          }
        }) : e._e(), e._v(" "), e.isShowVipBorrow ? n("VipBorrowModal", {
          attrs: {
            "book-info": cc11001100_hook("book-info", e.bookInfo, "object-key-init"),
            "tea-params": cc11001100_hook("tea-params", e.vipTeaParams, "object-key-init")
          },
          on: {
            closeVipBorrowModal: function (t) {
              e.isShowVipBorrow = cc11001100_hook("e.isShowVipBorrow", !1, "assign");
            }
          }
        }) : e._e(), e._v(" "), e.isVisiblePinEditor ? n("PinModal", {
          attrs: {
            "editor-props": cc11001100_hook("editor-props", e.editorProps, "object-key-init")
          },
          on: {
            close: function (t) {
              e.isVisiblePinEditor = cc11001100_hook("e.isVisiblePinEditor", !1, "assign");
            }
          }
        }) : e._e(), e._v(" "), e.isBindPhoneNumberModalVisible ? n("BindPhoneModal", {
          attrs: {
            visible: cc11001100_hook("visible", e.isBindPhoneNumberModalVisible, "object-key-init"),
            msg: cc11001100_hook("msg", e.bindPhoneMsg, "object-key-init"),
            to: cc11001100_hook("to", e.bindPhoneOption.toUrl || "", "object-key-init"),
            closable: cc11001100_hook("closable", e.bindPhoneOption.closable, "object-key-init"),
            title: cc11001100_hook("title", e.bindPhoneOption.title, "object-key-init"),
            "trigger-type": cc11001100_hook("trigger-type", e.bindPhoneOption.triggerType, "object-key-init")
          },
          on: {
            close: cc11001100_hook("close", e.onBindPhoneNumberModalClose, "object-key-init")
          }
        }) : e._e(), e._v(" "), e.visibleCaptcha ? n("captcha-modal", {
          ref: cc11001100_hook("ref", "captcha", "object-key-init"),
          attrs: {
            type: cc11001100_hook("type", e.captchaType, "object-key-init")
          },
          on: {
            onSuccess: cc11001100_hook("onSuccess", e.onVerify, "object-key-init")
          }
        }) : e._e()], 1), e._v(" "), n("ClientOnly", [n("NewUserLead", {
          attrs: {
            visible: cc11001100_hook("visible", e.newLeadVisibility, "object-key-init")
          },
          on: {
            close: function (t) {
              e.newLeadVisibility = cc11001100_hook("e.newLeadVisibility", !1, "assign");
            },
            finish: function (t) {
              e.newLeadVisibility = cc11001100_hook("e.newLeadVisibility", !1, "assign");
            }
          }
        }), e._v(" "), e.user_growth_lead ? n("UserGrowthLead", {
          attrs: {
            logined: cc11001100_hook("logined", e.logined, "object-key-init")
          },
          on: {
            confirm: function (t) {
              return e.handleUser_growth_leadDismiss("confirm");
            },
            dismiss: function (t) {
              return e.handleUser_growth_leadDismiss("dismiss");
            }
          }
        }) : e._e(), e._v(" "), e.showUserGrowthPopup || e.showUserGrowthPopup.visible ? n("UserGrowthPopup", {
          attrs: {
            popup: cc11001100_hook("popup", e.showUserGrowthPopup.data, "object-key-init")
          },
          on: {
            dismiss: cc11001100_hook("dismiss", e.handleShowUserGrowthPopupDismiss, "object-key-init")
          }
        }) : e._e(), e._v(" "), n("UpgradeBox", {
          attrs: {
            visible: cc11001100_hook("visible", e.isUpgradeBoxVisible.visible, "object-key-init"),
            user: cc11001100_hook("user", e.user, "object-key-init"),
            "growth-info": cc11001100_hook("growth-info", e.isUpgradeBoxVisible.data, "object-key-init")
          },
          on: {
            close: cc11001100_hook("close", e.handleIsUpgradeBoxVisibleDismiss, "object-key-init")
          }
        })], 1), e._v(" "), e.isLogoutModalVisible ? n("AccountDeleteModal", {
          attrs: {
            "need-qrcode": cc11001100_hook("need-qrcode", !1, "object-key-init")
          },
          on: {
            close: function (t) {
              e.isLogoutModalVisible = cc11001100_hook("e.isLogoutModalVisible", !1, "assign");
            }
          }
        }, [e._v("\n    掘友您好，您当前登录账号正在注销审核期，故无法访问稀土掘金内容。如果需要取消注销申请，请登录稀土掘金App，进行放弃注销操作。如果您有任何建议和反馈，可以发送邮箱到\n    feedback@xitu.io 联系我们。给您带来的不便，我们深感抱歉。\n  ")]) : e._e(), e._v(" "), e.reportModalData.show ? n("Report", {
          attrs: {
            "item-id": cc11001100_hook("item-id", e.reportModalData.itemId, "object-key-init"),
            "item-type": cc11001100_hook("item-type", e.reportModalData.idType, "object-key-init")
          },
          model: {
            value: cc11001100_hook("value", e.reportModalData.visible, "object-key-init"),
            callback: function (t) {
              e.$set(e.reportModalData, "visible", t);
            },
            expression: cc11001100_hook("expression", "reportModalData.visible", "object-key-init")
          }
        }) : e._e(), e._v(" "), n("RiskModal"), e._v(" "), n("ClientOnly", [n("FixedResourceTccConfig", {
          on: {
            show: function (t) {
              e.hasTccAd = cc11001100_hook("e.hasTccAd", !0, "assign");
            }
          }
        }), e._v(" "), n("HomePostTccAd", {
          class: {
            "home-post-tcc-add": cc11001100_hook("home-post-tcc-add", !0, "object-key-init"),
            "tcc-ad-with-recommend": cc11001100_hook("tcc-ad-with-recommend", !!e.recommendComponent, "object-key-init")
          },
          on: {
            show: function (t) {
              e.hasTccAd = cc11001100_hook("e.hasTccAd", !0, "assign");
            }
          }
        }), e._v(" "), e.loginGuideFooterVisible ? n("LoginGuide", {
          staticClass: cc11001100_hook("staticClass", "login-guide-popup", "object-key-init"),
          attrs: {
            position: cc11001100_hook("position", "footer", "object-key-init")
          },
          on: {
            close: function (t) {
              e.loginGuideFooterVisible = cc11001100_hook("e.loginGuideFooterVisible", !1, "assign");
            }
          }
        }) : e._e()], 1)], 1);
      }, [], !1, null, null, null)), "var-init");
    t.default = cc11001100_hook("t.default", Z.exports, "assign");
  },
  910: function (e, t, n) {
    "use strict";

    var o, r;
    n.d(t, "a", function () {
      return o;
    }), n.d(t, "b", function () {
      return r;
    }), function (e) {
      e.header = cc11001100_hook("e.header", "1", "assign"), e.footer = cc11001100_hook("e.footer", "2", "assign"), e.feed = cc11001100_hook("e.feed", "3", "assign"), e.collect = cc11001100_hook("e.collect", "4", "assign"), e.comment = cc11001100_hook("e.comment", "5", "assign"), e.code = cc11001100_hook("e.code", "6", "assign");
    }(o || (o = cc11001100_hook("o", {}, "assign"))), function (e) {
      e.auto = cc11001100_hook("e.auto", "1", "assign"), e.hover = cc11001100_hook("e.hover", "2", "assign");
    }(r || (r = cc11001100_hook("r", {}, "assign")));
  },
  957: function (e, t, n) {
    "use strict";

    n.d(t, "a", function () {
      return r;
    }), n.d(t, "b", function () {
      return c;
    });
    var o = cc11001100_hook("o", n(6), "var-init");
    function r() {
      var e = cc11001100_hook("e", Object(o.c)(), "var-init");
      return {
        openReportModal: function (t, n) {
          if (e) {
            var o = cc11001100_hook("o", e.proxy.$getBean("eventBus"), "var-init");
            o.emit(o.eventType.REPORT_CONTENT, t, n);
          }
        }
      };
    }
    function c() {
      var e = cc11001100_hook("e", Object(o.m)({
        visible: cc11001100_hook("visible", !1, "object-key-init"),
        show: cc11001100_hook("show", !1, "object-key-init")
      }), "var-init");
      return {
        reportModalData: cc11001100_hook("reportModalData", e, "object-key-init"),
        showReportModal: function (t, n) {
          e.show || (e.show = cc11001100_hook("e.show", !0, "assign")), e.visible = cc11001100_hook("e.visible", !0, "assign"), e.itemId = cc11001100_hook("e.itemId", t, "assign"), e.idType = cc11001100_hook("e.idType", n, "assign");
        }
      };
    }
  }
}]);