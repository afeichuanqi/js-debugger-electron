"use strict";

(self.webpackChunkheifetz = cc11001100_hook("self.webpackChunkheifetz", self.webpackChunkheifetz || [], "assign")).push([[430], {
  81009: function (t, e, n) {
    n.r(e), n.d(e, {
      default: function () {
        return K;
      }
    });
    var a = cc11001100_hook("a", n(6885), "var-init"),
      o = cc11001100_hook("o", n.n(a), "var-init"),
      i = cc11001100_hook("i", n(87363), "var-init"),
      r = cc11001100_hook("r", n.n(i), "var-init"),
      s = cc11001100_hook("s", n(11153), "var-init"),
      l = cc11001100_hook("l", n.n(s), "var-init"),
      c = cc11001100_hook("c", n(47112), "var-init"),
      d = cc11001100_hook("d", n.n(c), "var-init"),
      u = cc11001100_hook("u", n(69595), "var-init"),
      m = cc11001100_hook("m", n(86193), "var-init");
    var v = function (t) {
        var e = cc11001100_hook("e", t.width, "var-init"),
          n = cc11001100_hook("n", void 0 === e ? "10" : e, "var-init"),
          a = cc11001100_hook("a", t.height, "var-init"),
          o = cc11001100_hook("o", void 0 === a ? "10" : a, "var-init");
        return (0, m.tZ)("svg", (0, u.Z)({
          width: cc11001100_hook("width", n, "object-key-init"),
          height: cc11001100_hook("height", o, "object-key-init"),
          viewBox: cc11001100_hook("viewBox", "0 0 10 10", "object-key-init"),
          fill: cc11001100_hook("fill", "none", "object-key-init")
        }, t), (0, m.tZ)("path", {
          fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
          clipRule: cc11001100_hook("clipRule", "evenodd", "object-key-init"),
          d: cc11001100_hook("d", "M5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0ZM5 1C2.79086 1 1 2.79086 1 5C1 7.20914 2.79086 9 5 9C7.20914 9 9 7.20914 9 5C9 2.79086 7.20914 1 5 1ZM5 2C5.27614 2 5.5 2.22386 5.5 2.5V4.21902C5.5 4.54533 5.65921 4.85112 5.92654 5.03825L7.37712 6.05365C7.60334 6.21201 7.65836 6.52378 7.5 6.75C7.34164 6.97622 7.02988 7.03124 6.80365 6.87288L4.92654 5.5589C4.65921 5.37178 4.5 5.06599 4.5 4.73967V2.5C4.5 2.22386 4.72386 2 5 2Z", "object-key-init"),
          fill: cc11001100_hook("fill", "white", "object-key-init")
        }));
      },
      f = cc11001100_hook("f", n(4383), "var-init");
    function g(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      if (e && !Array.isArray(e) && "number" == typeof e.length) {
        var a = cc11001100_hook("a", e.length, "var-init");
        return function (t, e) {
          (null == e || e > t.length) && (e = cc11001100_hook("e", t.length, "assign"));
          for (var n = cc11001100_hook("n", 0, "var-init"), a = cc11001100_hook("a", new Array(e), "var-init"); n < e; n++) a[n] = cc11001100_hook("a[n]", t[n], "assign");
          return a;
        }(e, void 0 !== n && n < a ? n : a);
      }
      return t(e, n);
    }
    var p = cc11001100_hook("p", "GoodsItemCardPromo", "var-init"),
      h = function (t) {
        var e = cc11001100_hook("e", t.countdown, "var-init"),
          n = cc11001100_hook("n", (0, i.useState)(e), "var-init"),
          a = cc11001100_hook("a", g(o(), n, 2), "var-init"),
          s = cc11001100_hook("s", a[0], "var-init"),
          l = cc11001100_hook("l", a[1], "var-init"),
          c = cc11001100_hook("c", (0, i.useRef)(), "var-init");
        (0, i.useEffect)(function () {
          return s <= 0 ? (clearInterval(c.current), void l(0)) : (c.current = cc11001100_hook("c.current", setInterval(function () {
            l(s - 1);
          }, 1e3), "assign"), function () {
            return clearInterval(c.current);
          });
        }, [s]);
        var d = cc11001100_hook("d", (0, f.c5)(s), "var-init"),
          u = cc11001100_hook("u", d.d, "var-init"),
          h = cc11001100_hook("h", d.h, "var-init"),
          Z = cc11001100_hook("Z", d.m, "var-init"),
          C = cc11001100_hook("C", d.s, "var-init"),
          y = cc11001100_hook("y", "".concat(u ? u + "天" : "", " ").concat(h, ":").concat(Z, ":").concat(C), "var-init");
        return (0, m.tZ)("div", {
          className: cc11001100_hook("className", p, "object-key-init")
        }, (0, m.tZ)("div", {
          className: cc11001100_hook("className", "".concat(p, "-left"), "object-key-init")
        }, (0, m.tZ)(v, {
          className: cc11001100_hook("className", "".concat(p, "-icon"), "object-key-init")
        }), (0, m.tZ)("span", null, "限时秒杀")), (0, m.tZ)("div", {
          className: cc11001100_hook("className", "".concat(p, "-right"), "object-key-init")
        }, s ? (0, m.tZ)(r().Fragment, null, (0, m.tZ)("span", null, "距结束还剩 "), (0, m.tZ)("span", {
          className: cc11001100_hook("className", "".concat(p, "-rightText"), "object-key-init")
        }, y)) : (0, m.tZ)("span", null, "活动已结束")));
      };
    var Z = cc11001100_hook("Z", n(75926), "var-init"),
      C = cc11001100_hook("C", n.n(Z), "var-init"),
      y = cc11001100_hook("y", n(17222), "var-init"),
      k = cc11001100_hook("k", n(30658), "var-init"),
      b = cc11001100_hook("b", n(88584), "var-init"),
      N = cc11001100_hook("N", n(12856), "var-init"),
      I = function (t) {
        var e = cc11001100_hook("e", t.className, "var-init"),
          n = cc11001100_hook("n", t.style, "var-init"),
          a = cc11001100_hook("a", t.id, "var-init"),
          o = cc11001100_hook("o", t.skuId, "var-init"),
          r = cc11001100_hook("r", t.imgUrl, "var-init"),
          s = cc11001100_hook("s", t.title, "var-init"),
          l = cc11001100_hook("l", t.price, "var-init"),
          c = cc11001100_hook("c", void 0 === l ? 0 : l, "var-init"),
          u = cc11001100_hook("u", t.source, "var-init"),
          v = cc11001100_hook("v", t.productType, "var-init"),
          f = cc11001100_hook("f", t.subtitle, "var-init"),
          g = cc11001100_hook("g", t.tags, "var-init"),
          p = cc11001100_hook("p", void 0 === g ? [] : g, "var-init"),
          Z = cc11001100_hook("Z", t.promoInfo, "var-init"),
          C = cc11001100_hook("C", void 0 === Z ? {} : Z, "var-init"),
          I = cc11001100_hook("I", t.showBottomLine, "var-init"),
          w = cc11001100_hook("w", void 0 !== I && I, "var-init"),
          S = cc11001100_hook("S", t.zaData, "var-init"),
          L = cc11001100_hook("L", void 0 === S ? {} : S, "var-init"),
          G = cc11001100_hook("G", t.promoType, "var-init"),
          T = cc11001100_hook("T", t.onClick, "var-init"),
          _ = cc11001100_hook("_", Number((null == C ? void 0 : C.countdown) || 0) > 0, "var-init"),
          z = cc11001100_hook("z", _ && "tag" === G, "var-init"),
          F = cc11001100_hook("F", _ && "tag" !== G, "var-init");
        (0, i.useEffect)(function () {
          (null == L ? void 0 : L.showId) && y.Z.trackCardShow(null, {
            id: cc11001100_hook("id", null == L ? void 0 : L.showId, "object-key-init"),
            path: cc11001100_hook("path", [{
              module_name: cc11001100_hook("module_name", "".concat(a, "_").concat(o, "_").concat(u, "_").concat(v), "object-key-init")
            }], "object-key-init")
          });
        }, []);
        return (0, m.tZ)("div", {
          className: cc11001100_hook("className", d()("GoodsItemCard", {
            "GoodsItemCard-promo": cc11001100_hook("GoodsItemCard-promo", F, "object-key-init")
          }, e), "object-key-init"),
          style: cc11001100_hook("style", n, "object-key-init"),
          onClick: function () {
            (null == L ? void 0 : L.clickId) && y.Z.trackEvent(null, {
              id: cc11001100_hook("id", null == L ? void 0 : L.clickId, "object-key-init"),
              action: cc11001100_hook("action", "OpenUrl", "object-key-init"),
              path: cc11001100_hook("path", [{
                module_name: cc11001100_hook("module_name", "".concat(a, "_").concat(o, "_").concat(u, "_").concat(v), "object-key-init")
              }], "object-key-init")
            }), "function" == typeof T && T();
          }
        }, F && (0, m.tZ)(h, {
          countdown: cc11001100_hook("countdown", (null == C ? void 0 : C.countdown) || 0, "object-key-init")
        }), (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsItemCard-main", "object-key-init")
        }, (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsItemCard-left", "object-key-init")
        }, (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsItemCard-imgLayer", "object-key-init")
        }), (0, m.tZ)("img", {
          className: cc11001100_hook("className", "GoodsItemCard-imgUrl", "object-key-init"),
          src: cc11001100_hook("src", r, "object-key-init"),
          alt: cc11001100_hook("alt", "", "object-key-init")
        })), (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsItemCard-right", "object-key-init")
        }, (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsItemCard-title", "object-key-init")
        }, s), (0, m.tZ)(b.Z, {
          className: cc11001100_hook("className", "GoodsItemCard-tags", "object-key-init"),
          isPromo: cc11001100_hook("isPromo", _, "object-key-init"),
          promoTagShow: cc11001100_hook("promoTagShow", z, "object-key-init"),
          countdown: cc11001100_hook("countdown", (null == C ? void 0 : C.countdown) || 0, "object-key-init"),
          tags: cc11001100_hook("tags", (0, N.camelizeKeys)(p || []), "object-key-init")
        }), (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsItemCard-footer", "object-key-init")
        }, (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsItemCard-priceBox", "object-key-init")
        }, (0, m.tZ)("span", {
          className: cc11001100_hook("className", "GoodsItemCard-price", "object-key-init")
        }, "¥".concat(function (t) {
          var e = cc11001100_hook("e", (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).trimZero, "var-init"),
            n = cc11001100_hook("n", void 0 !== e && e, "var-init"),
            a = cc11001100_hook("a", String(t).padStart(2, "0").slice(-2), "var-init");
          return n && "00" === a ? "".concat(Math.floor(t / 100)) : "".concat(Math.floor(t / 100), ".").concat(a);
        }(c)))), (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsItemCard-source", "object-key-init")
        }, f, (0, m.tZ)(k.N, {
          size: cc11001100_hook("size", 20, "object-key-init"),
          center: cc11001100_hook("center", !0, "object-key-init")
        })))), (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsItemCard-bottomLine", "object-key-init"),
          style: {
            display: cc11001100_hook("display", w ? "block" : "none", "object-key-init")
          }
        })));
      };
    I.prototype = cc11001100_hook("I.prototype", {
      className: cc11001100_hook("className", C().string, "object-key-init"),
      style: cc11001100_hook("style", C().object, "object-key-init"),
      id: cc11001100_hook("id", C().string, "object-key-init"),
      skuId: cc11001100_hook("skuId", C().string, "object-key-init"),
      promoType: cc11001100_hook("promoType", C().string, "object-key-init"),
      imgUrl: cc11001100_hook("imgUrl", C().string.isRequired, "object-key-init"),
      title: cc11001100_hook("title", C().string.isRequired, "object-key-init"),
      subtitle: cc11001100_hook("subtitle", C().string, "object-key-init"),
      price: cc11001100_hook("price", C().number, "object-key-init"),
      source: cc11001100_hook("source", C().string.isRequired, "object-key-init"),
      showBottomLine: cc11001100_hook("showBottomLine", C().bool, "object-key-init"),
      tags: cc11001100_hook("tags", C().array, "object-key-init"),
      zaData: cc11001100_hook("zaData", C().object, "object-key-init"),
      promoInfo: cc11001100_hook("promoInfo", C().object, "object-key-init"),
      onClick: cc11001100_hook("onClick", C().func, "object-key-init")
    }, "assign");
    var w = cc11001100_hook("w", I, "var-init");
    var S = function () {
        return (0, m.tZ)("svg", {
          width: cc11001100_hook("width", "20", "object-key-init"),
          height: cc11001100_hook("height", "20", "object-key-init"),
          viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init"),
          fill: cc11001100_hook("fill", "none", "object-key-init"),
          xmlns: cc11001100_hook("xmlns", "http://www.w3.org/2000/svg", "object-key-init")
        }, (0, m.tZ)("circle", {
          opacity: cc11001100_hook("opacity", "0.45", "object-key-init"),
          cx: cc11001100_hook("cx", "10.5", "object-key-init"),
          cy: cc11001100_hook("cy", "9.5", "object-key-init"),
          r: cc11001100_hook("r", "9", "object-key-init"),
          stroke: cc11001100_hook("stroke", "#444444", "object-key-init")
        }), (0, m.tZ)("path", {
          fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
          clipRule: cc11001100_hook("clipRule", "evenodd", "object-key-init"),
          d: cc11001100_hook("d", "M10.0902 5.40973L7.19188 8.30802C6.93425 8.56261 6.93422 8.96569 7.20772 9.23616C7.43803 9.46345 7.84338 9.54449 8.13586 9.25201L9.86195 7.52591C9.85274 9.20642 9.86308 12.9266 9.86308 12.9266C9.863 14.0797 11.2306 14.0789 11.2261 12.9257C11.2239 11.9915 11.2234 8.8631 11.2265 7.52354L12.9433 9.24029C13.1948 9.48879 13.6017 9.488 13.8699 9.2228C14.1055 8.99018 14.1056 8.5871 13.8874 8.29617L11.0009 5.40967C10.7494 5.15965 10.3425 5.16044 10.0902 5.40973V5.40973Z", "object-key-init"),
          fill: cc11001100_hook("fill", "#444444", "object-key-init")
        }));
      },
      L = cc11001100_hook("L", n(81903), "var-init"),
      G = cc11001100_hook("G", n(99712), "var-init"),
      T = cc11001100_hook("T", n.n(G), "var-init"),
      _ = function () {
        return (0, m.tZ)(r().Fragment, null);
      },
      z = cc11001100_hook("z", {
        SkeletonH01: function (t) {
          var e = cc11001100_hook("e", t.lineClass, "var-init");
          return (0, m.tZ)(r().Fragment, null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }));
        },
        SkeletonP01: function (t) {
          var e = cc11001100_hook("e", t.lineClass, "var-init"),
            n = cc11001100_hook("n", t.blockClass, "var-init");
          return (0, m.tZ)(r().Fragment, null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", n, "object-key-init")
          }), (0, m.tZ)("div", null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          })));
        },
        SkeletonT01: function (t) {
          var e = cc11001100_hook("e", t.lineClass, "var-init");
          return (0, m.tZ)(r().Fragment, null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }));
        },
        SkeletonT02: function (t) {
          var e = cc11001100_hook("e", t.lineClass, "var-init");
          return (0, m.tZ)(r().Fragment, null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }));
        },
        SkeletonC01: function (t) {
          var e = cc11001100_hook("e", t.lineClass, "var-init"),
            n = cc11001100_hook("n", t.blockClass, "var-init");
          return (0, m.tZ)(r().Fragment, null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", n, "object-key-init")
          }), (0, m.tZ)("div", null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          })));
        },
        SkeletonC02: function (t) {
          var e = cc11001100_hook("e", t.lineClass, "var-init"),
            n = cc11001100_hook("n", t.blockClass, "var-init");
          return (0, m.tZ)(r().Fragment, null, (0, m.tZ)("div", null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          })), (0, m.tZ)("div", {
            className: cc11001100_hook("className", n, "object-key-init")
          }));
        },
        SkeletonC03: function (t) {
          var e = cc11001100_hook("e", t.lineClass, "var-init"),
            n = cc11001100_hook("n", t.blockClass, "var-init");
          return (0, m.tZ)(r().Fragment, null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", n, "object-key-init")
          }), (0, m.tZ)("div", {
            style: {
              width: cc11001100_hook("width", "100%", "object-key-init")
            }
          }, (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          })));
        },
        SkeletonC04: function (t) {
          var e = cc11001100_hook("e", t.lineClass, "var-init"),
            n = cc11001100_hook("n", t.blockClass, "var-init");
          return (0, m.tZ)(r().Fragment, null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", "".concat(n, "-1"), "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", n, "object-key-init")
          }), (0, m.tZ)("div", {
            style: {
              width: cc11001100_hook("width", "100%", "object-key-init"),
              display: cc11001100_hook("display", "flex", "object-key-init"),
              flexDirection: cc11001100_hook("flexDirection", "column", "object-key-init"),
              justifyContent: cc11001100_hook("justifyContent", "center", "object-key-init")
            }
          }, (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }), (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          })));
        },
        SkeletonI01: function (t) {
          var e = cc11001100_hook("e", t.blockClass, "var-init");
          return (0, m.tZ)(r().Fragment, null, (0, m.tZ)("div", {
            className: cc11001100_hook("className", e, "object-key-init")
          }));
        },
        SkeletonSpacing: cc11001100_hook("SkeletonSpacing", _, "object-key-init"),
        SkeletonFill: cc11001100_hook("SkeletonFill", _, "object-key-init")
      }, "var-init"),
      F = cc11001100_hook("F", r().memo(function (t) {
        var e,
          n = cc11001100_hook("n", t.variant, "var-init"),
          a = cc11001100_hook("a", void 0 === n ? "H01" : n, "var-init"),
          o = cc11001100_hook("o", t.height, "var-init"),
          i = cc11001100_hook("i", t.width, "var-init"),
          r = cc11001100_hook("r", void 0 === i ? "auto" : i, "var-init"),
          s = cc11001100_hook("s", t.animation, "var-init"),
          l = cc11001100_hook("l", void 0 === s ? "ease-in" : s, "var-init"),
          c = cc11001100_hook("c", "skeleton__line--".concat(a.toLowerCase()), "var-init"),
          u = cc11001100_hook("u", "skeleton--".concat(a.toLowerCase()), "var-init"),
          v = cc11001100_hook("v", d()(T()({
            skeleton__block: cc11001100_hook("skeleton__block", !0, "object-key-init")
          }, "skeleton__block--".concat(a.toLowerCase()), !0)), "var-init"),
          f = cc11001100_hook("f", d()(T()({
            skeleton__line: cc11001100_hook("skeleton__line", !0, "object-key-init")
          }, c, !0)), "var-init"),
          g = cc11001100_hook("g", d()((e = cc11001100_hook("e", {
            skeleton: cc11001100_hook("skeleton", !0, "object-key-init")
          }, "assign"), T()(e, u, !0), T()(e, "skeleton--ease-in", "ease-in" === l), e)), "var-init"),
          p = cc11001100_hook("p", {
            width: cc11001100_hook("width", r, "object-key-init")
          }, "var-init");
        o && ["Spacing", "Fill"].includes(a) && (p.height = cc11001100_hook("p.height", "number" == typeof o ? "".concat(o, "px") : o, "assign"));
        var h = cc11001100_hook("h", z["Skeleton".concat(a)], "var-init");
        return (0, m.tZ)("section", {
          className: cc11001100_hook("className", g, "object-key-init"),
          style: cc11001100_hook("style", p, "object-key-init")
        }, (0, m.tZ)(h, {
          variant: cc11001100_hook("variant", a, "object-key-init"),
          lineClass: cc11001100_hook("lineClass", f, "object-key-init"),
          blockClass: cc11001100_hook("blockClass", v, "object-key-init")
        }));
      }), "var-init");
    F.propTypes = cc11001100_hook("F.propTypes", {
      variant: cc11001100_hook("variant", C().string, "object-key-init"),
      height: cc11001100_hook("height", C().oneOfType([C().string, C().number]), "object-key-init"),
      width: cc11001100_hook("width", C().oneOfType([C().string, C().number]), "object-key-init"),
      animation: cc11001100_hook("animation", C().oneOfType([C().bool, C().string]), "object-key-init")
    }, "assign");
    var R = cc11001100_hook("R", F, "var-init");
    function D(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      if (e && !Array.isArray(e) && "number" == typeof e.length) {
        var a = cc11001100_hook("a", e.length, "var-init");
        return function (t, e) {
          (null == e || e > t.length) && (e = cc11001100_hook("e", t.length, "assign"));
          for (var n = cc11001100_hook("n", 0, "var-init"), a = cc11001100_hook("a", new Array(e), "var-init"); n < e; n++) a[n] = cc11001100_hook("a[n]", t[n], "assign");
          return a;
        }(e, void 0 !== n && n < a ? n : a);
      }
      return t(e, n);
    }
    var A = cc11001100_hook("A", r().memo(function (t) {
      var e = cc11001100_hook("e", t.content, "var-init"),
        n = cc11001100_hook("n", function (t) {
          return ("string" == typeof t ? t.split(",") : t).map(function (t) {
            var e = cc11001100_hook("e", t.split("-"), "var-init"),
              n = cc11001100_hook("n", D(o(), e, 2), "var-init"),
              a = cc11001100_hook("a", n[0], "var-init"),
              i = cc11001100_hook("i", n[1], "var-init");
            return ["Spacing", "Fill"].includes(a) ? {
              type: cc11001100_hook("type", a, "object-key-init"),
              height: cc11001100_hook("height", +i, "object-key-init")
            } : {
              type: cc11001100_hook("type", a, "object-key-init"),
              count: cc11001100_hook("count", +i || 1, "object-key-init")
            };
          });
        }(void 0 === e ? "T01" : e), "var-init");
      return (0, m.tZ)(r().Fragment, null, n.map(function (t, e) {
        var n = cc11001100_hook("n", t.type, "var-init"),
          a = cc11001100_hook("a", t.count, "var-init"),
          o = cc11001100_hook("o", t.height, "var-init");
        return a ? Array.from({
          length: cc11001100_hook("length", a, "object-key-init")
        }).map(function (t, a) {
          return (0, m.tZ)(R, {
            variant: cc11001100_hook("variant", n, "object-key-init"),
            key: cc11001100_hook("key", "".concat(e, "-").concat(a), "object-key-init")
          });
        }) : (0, m.tZ)(R, {
          variant: cc11001100_hook("variant", n, "object-key-init"),
          height: cc11001100_hook("height", o, "object-key-init"),
          key: cc11001100_hook("key", "".concat(e, "-").concat(o), "object-key-init")
        });
      }));
    }), "var-init");
    A.prototype = cc11001100_hook("A.prototype", {
      content: cc11001100_hook("content", (0, Z.oneOfType)([(0, Z.arrayOf)(Z.string), Z.string]), "object-key-init")
    }, "assign");
    var B = cc11001100_hook("B", A, "var-init"),
      O = cc11001100_hook("O", n(48457), "var-init"),
      M = cc11001100_hook("M", n(87970), "var-init"),
      x = cc11001100_hook("x", n(85519), "var-init");
    function E(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      if (e && !Array.isArray(e) && "number" == typeof e.length) {
        var a = cc11001100_hook("a", e.length, "var-init");
        return function (t, e) {
          (null == e || e > t.length) && (e = cc11001100_hook("e", t.length, "assign"));
          for (var n = cc11001100_hook("n", 0, "var-init"), a = cc11001100_hook("a", new Array(e), "var-init"); n < e; n++) a[n] = cc11001100_hook("a[n]", t[n], "assign");
          return a;
        }(e, void 0 !== n && n < a ? n : a);
      }
      return t(e, n);
    }
    var P = cc11001100_hook("P", {
      tabId: cc11001100_hook("tabId", "", "object-key-init"),
      tabName: cc11001100_hook("tabName", "", "object-key-init"),
      isGetDataDirect: cc11001100_hook("isGetDataDirect", !0, "object-key-init"),
      tabData: cc11001100_hook("tabData", [], "object-key-init")
    }, "var-init");
    var U = function (t) {
      var e = cc11001100_hook("e", t.id, "var-init"),
        n = cc11001100_hook("n", t.url, "var-init"),
        a = cc11001100_hook("a", t.scenes, "var-init"),
        r = cc11001100_hook("r", t.fetcherOptions, "var-init"),
        s = cc11001100_hook("s", (0, i.useState)(0), "var-init"),
        l = cc11001100_hook("l", E(o(), s, 2), "var-init"),
        c = cc11001100_hook("c", l[0], "var-init"),
        d = cc11001100_hook("d", l[1], "var-init"),
        u = cc11001100_hook("u", (0, i.useState)(!1), "var-init"),
        m = cc11001100_hook("m", E(o(), u, 2), "var-init"),
        v = cc11001100_hook("v", m[0], "var-init"),
        f = cc11001100_hook("f", m[1], "var-init"),
        g = cc11001100_hook("g", (0, i.useState)([]), "var-init"),
        p = cc11001100_hook("p", E(o(), g, 2), "var-init"),
        h = cc11001100_hook("h", p[0], "var-init"),
        Z = cc11001100_hook("Z", p[1], "var-init"),
        C = cc11001100_hook("C", (0, i.useState)([]), "var-init"),
        y = cc11001100_hook("y", E(o(), C, 2), "var-init"),
        k = cc11001100_hook("k", y[0], "var-init"),
        b = cc11001100_hook("b", y[1], "var-init"),
        I = cc11001100_hook("I", (0, i.useState)([]), "var-init"),
        w = cc11001100_hook("w", E(o(), I, 2), "var-init"),
        S = cc11001100_hook("S", w[0], "var-init"),
        L = cc11001100_hook("L", w[1], "var-init"),
        G = cc11001100_hook("G", (0, i.useState)(!1), "var-init"),
        T = cc11001100_hook("T", E(o(), G, 2), "var-init"),
        _ = cc11001100_hook("_", T[0], "var-init"),
        z = cc11001100_hook("z", T[1], "var-init"),
        F = cc11001100_hook("F", (0, i.useState)(P), "var-init"),
        R = cc11001100_hook("R", E(o(), F, 2), "var-init"),
        D = cc11001100_hook("D", R[0], "var-init"),
        A = cc11001100_hook("A", R[1], "var-init"),
        B = cc11001100_hook("B", (0, i.useState)(!1), "var-init"),
        O = cc11001100_hook("O", E(o(), B, 2), "var-init"),
        M = cc11001100_hook("M", O[0], "var-init"),
        U = cc11001100_hook("U", O[1], "var-init");
      (0, i.useEffect)(function () {
        f(!0);
        var t = cc11001100_hook("t", n || "/api/v4/mcn/linkcard/".concat(e, "/goods?scenes=").concat(a), "var-init");
        (0, x._)(t, r).then(function (t) {
          var e = cc11001100_hook("e", (0, N.camelizeKeys)((null == t ? void 0 : t.data) || {}), "var-init"),
            n = cc11001100_hook("n", e.goods, "var-init"),
            a = cc11001100_hook("a", e.tabs, "var-init"),
            o = cc11001100_hook("o", e.similarGoods, "var-init"),
            i = cc11001100_hook("i", (null == a ? void 0 : a[0]) || P, "var-init");
          i.tabId && j(i), Z(n || []), b(o || []), L(a || []), z(!1);
        }).catch(function () {
          z(!0);
        }).finally(function () {
          setTimeout(function () {
            f(!1);
          }, 500);
        });
      }, [e, c]);
      var j = function () {
        var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
        A(Object.assign({}, t)), t.isGetDataDirect || (U(!0), (0, x._)(t.tabDataUrl).then(function (e) {
          var n,
            a = cc11001100_hook("a", (0, N.camelizeKeys)((null == e || null === (n = cc11001100_hook("n", e.data, "assign")) || void 0 === n ? void 0 : n.goods) || []), "var-init");
          L(function (e) {
            return e.map(function (e) {
              return e.tabId === t.tabId ? Object.assign({}, e, {
                isGetDataDirect: cc11001100_hook("isGetDataDirect", !0, "object-key-init"),
                tabData: cc11001100_hook("tabData", a || [], "object-key-init")
              }) : e;
            });
          }), A(function (t) {
            return Object.assign({}, t, {
              tabData: cc11001100_hook("tabData", a || [], "object-key-init"),
              isGetDataDirect: cc11001100_hook("isGetDataDirect", !0, "object-key-init")
            });
          }), U(!1);
        }).catch(function () {
          return U(!1);
        }));
      };
      return {
        refresh: cc11001100_hook("refresh", c, "object-key-init"),
        setRefresh: cc11001100_hook("setRefresh", d, "object-key-init"),
        isFailure: cc11001100_hook("isFailure", _, "object-key-init"),
        sameList: cc11001100_hook("sameList", h, "object-key-init"),
        similarList: cc11001100_hook("similarList", k, "object-key-init"),
        activeTabMap: cc11001100_hook("activeTabMap", D, "object-key-init"),
        setActiveTabMap: cc11001100_hook("setActiveTabMap", A, "object-key-init"),
        loading: cc11001100_hook("loading", v, "object-key-init"),
        tabs: cc11001100_hook("tabs", S, "object-key-init"),
        seckillLoading: cc11001100_hook("seckillLoading", M, "object-key-init"),
        setIsFailure: cc11001100_hook("setIsFailure", z, "object-key-init"),
        handleChangeTab: cc11001100_hook("handleChangeTab", j, "object-key-init")
      };
    };
    function j(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      if (e && !Array.isArray(e) && "number" == typeof e.length) {
        var a = cc11001100_hook("a", e.length, "var-init");
        return function (t, e) {
          (null == e || e > t.length) && (e = cc11001100_hook("e", t.length, "assign"));
          for (var n = cc11001100_hook("n", 0, "var-init"), a = cc11001100_hook("a", new Array(e), "var-init"); n < e; n++) a[n] = cc11001100_hook("a[n]", t[n], "assign");
          return a;
        }(e, void 0 !== n && n < a ? n : a);
      }
      return t(e, n);
    }
    var V = function (t) {
      var e = cc11001100_hook("e", t.className, "var-init"),
        n = cc11001100_hook("n", t.style, "var-init"),
        a = cc11001100_hook("a", t.showModal, "var-init"),
        r = cc11001100_hook("r", void 0 === a || a, "var-init"),
        s = cc11001100_hook("s", t.withModal, "var-init"),
        c = cc11001100_hook("c", void 0 === s || s, "var-init"),
        u = cc11001100_hook("u", t.modalTitle, "var-init"),
        v = cc11001100_hook("v", void 0 === u ? "" : u, "var-init"),
        f = cc11001100_hook("f", t.id, "var-init"),
        g = cc11001100_hook("g", t.url, "var-init"),
        p = cc11001100_hook("p", void 0 === g ? "" : g, "var-init"),
        h = cc11001100_hook("h", t.fetcherOptions, "var-init"),
        Z = cc11001100_hook("Z", void 0 === h ? {} : h, "var-init"),
        C = cc11001100_hook("C", t.scenes, "var-init"),
        k = cc11001100_hook("k", void 0 === C ? 0 : C, "var-init"),
        b = cc11001100_hook("b", t.onClose, "var-init"),
        I = cc11001100_hook("I", (0, M._)(), "var-init"),
        G = cc11001100_hook("G", U({
          url: cc11001100_hook("url", p, "object-key-init"),
          id: cc11001100_hook("id", f, "object-key-init"),
          fetcherOptions: cc11001100_hook("fetcherOptions", Z, "object-key-init"),
          scenes: cc11001100_hook("scenes", k, "object-key-init")
        }), "var-init"),
        T = cc11001100_hook("T", G.refresh, "var-init"),
        _ = cc11001100_hook("_", G.setRefresh, "var-init"),
        z = cc11001100_hook("z", G.loading, "var-init"),
        F = cc11001100_hook("F", G.sameList, "var-init"),
        R = cc11001100_hook("R", G.similarList, "var-init"),
        D = cc11001100_hook("D", G.tabs, "var-init"),
        A = cc11001100_hook("A", G.isFailure, "var-init"),
        x = cc11001100_hook("x", G.activeTabMap, "var-init"),
        E = cc11001100_hook("E", G.handleChangeTab, "var-init"),
        P = cc11001100_hook("P", G.seckillLoading, "var-init"),
        V = cc11001100_hook("V", (0, i.useRef)(), "var-init"),
        K = cc11001100_hook("K", (0, i.useRef)(), "var-init"),
        W = cc11001100_hook("W", (0, i.useRef)(0), "var-init"),
        q = cc11001100_hook("q", (0, i.useState)(!0), "var-init"),
        H = cc11001100_hook("H", j(o(), q, 2), "var-init"),
        J = cc11001100_hook("J", H[0], "var-init"),
        Q = cc11001100_hook("Q", H[1], "var-init"),
        X = cc11001100_hook("X", l()(function () {
          var t = cc11001100_hook("t", K.current.getClientRects()[0] || {
            top: cc11001100_hook("top", 0, "object-key-init")
          }, "var-init");
          t.top < W.current ? Q(!0) : Q(!1), setTimeout(function () {
            return W.current = cc11001100_hook("W.current", t.top, "assign");
          });
        }, 16), "var-init");
      (0, i.useEffect)(function () {
        y.Z.trackCardShow(null, {
          id: cc11001100_hook("id", 10331, "object-key-init"),
          path: cc11001100_hook("path", [{
            module_name: cc11001100_hook("module_name", f, "object-key-init")
          }], "object-key-init")
        });
      }, []), (0, i.useEffect)(function () {
        if (V.current = cc11001100_hook("V.current", document.getElementsByClassName("ModalWindow-inner")[0], "assign"), V.current && K.current) return V.current.addEventListener("scroll", X), function () {
          return V.current.removeEventListener("scroll", X);
        };
      }, [X]);
      var Y = function (t, e) {
          return (null == t ? void 0 : t.length) ? (0, m.tZ)("div", {
            className: cc11001100_hook("className", "PopupSelectList-list", "object-key-init")
          }, t.map(function (t) {
            return (null == t ? void 0 : t.length) ? t : [];
          }).map(function (t, n) {
            return t.length ? (0, m.tZ)(i.Fragment, {
              key: cc11001100_hook("key", n, "object-key-init")
            }, t.map(function (t, a) {
              var o = cc11001100_hook("o", t.id, "var-init"),
                r = cc11001100_hook("r", t.goods, "var-init"),
                s = cc11001100_hook("s", t.tags, "var-init"),
                l = cc11001100_hook("l", t.promoInfo, "var-init"),
                c = cc11001100_hook("c", t.attachedInfoBytes, "var-init"),
                u = cc11001100_hook("u", r || {}, "var-init"),
                v = cc11001100_hook("v", u.skuId, "var-init"),
                f = cc11001100_hook("f", u.title, "var-init"),
                g = cc11001100_hook("g", u.subtitle, "var-init"),
                p = cc11001100_hook("p", u.goodsImg, "var-init"),
                h = cc11001100_hook("h", u.goodsUrl, "var-init"),
                Z = cc11001100_hook("Z", u.price, "var-init"),
                C = cc11001100_hook("C", u.source, "var-init"),
                y = cc11001100_hook("y", u.productType, "var-init"),
                b = cc11001100_hook("b", (Z || {}).price, "var-init"),
                S = cc11001100_hook("S", Number((null == l ? void 0 : l.countdown) || 0) > 0 && "tag" !== e, "var-init");
              return (0, m.tZ)(i.Fragment, {
                key: cc11001100_hook("key", "".concat(v, "-").concat(n, "-").concat(a), "object-key-init")
              }, 1 === n && 0 === a && (0, m.tZ)("div", {
                className: cc11001100_hook("className", "PopupSelectList-similarTitle", "object-key-init")
              }, "相似商品"), (0, m.tZ)(O.eV, {
                content: {
                  type: cc11001100_hook("type", "GoodsRecommend", "object-key-init"),
                  id: cc11001100_hook("id", String(v), "object-key-init"),
                  token: cc11001100_hook("token", String(o), "object-key-init")
                },
                extra: {
                  attachedInfoBytes: cc11001100_hook("attachedInfoBytes", c, "object-key-init"),
                  link: {
                    url: cc11001100_hook("url", null == h ? void 0 : h.url, "object-key-init")
                  }
                }
              }, (0, m.tZ)(O.Wi, {
                shouldTrackClick: cc11001100_hook("shouldTrackClick", !0, "object-key-init"),
                zaBlock: cc11001100_hook("zaBlock", "goodsRecommend_polymericPopupCard", "object-key-init"),
                className: cc11001100_hook("className", d()({
                  "GoodsCardList-listItem": cc11001100_hook("GoodsCardList-listItem", S, "object-key-init")
                }), "object-key-init"),
                zaType: cc11001100_hook("zaType", "Card", "object-key-init"),
                zaAction: cc11001100_hook("zaAction", "OpenUrl", "object-key-init"),
                zaEventType: cc11001100_hook("zaEventType", "Click", "object-key-init")
              }, (0, m.tZ)(w, {
                className: cc11001100_hook("className", "GoodsPopupList-cardItem", "object-key-init"),
                id: cc11001100_hook("id", o, "object-key-init"),
                skuId: cc11001100_hook("skuId", v, "object-key-init"),
                title: cc11001100_hook("title", f, "object-key-init"),
                imgUrl: cc11001100_hook("imgUrl", null == p ? void 0 : p.imgUrl, "object-key-init"),
                price: cc11001100_hook("price", b, "object-key-init"),
                source: cc11001100_hook("source", C, "object-key-init"),
                subtitle: cc11001100_hook("subtitle", g, "object-key-init"),
                productType: cc11001100_hook("productType", y, "object-key-init"),
                showBottomLine: cc11001100_hook("showBottomLine", !1, "object-key-init"),
                zaData: {
                  showId: cc11001100_hook("showId", 10371, "object-key-init"),
                  clickId: cc11001100_hook("clickId", 10372, "object-key-init")
                },
                tags: cc11001100_hook("tags", s, "object-key-init"),
                promoInfo: cc11001100_hook("promoInfo", l, "object-key-init"),
                promoType: cc11001100_hook("promoType", e, "object-key-init"),
                onClick: function () {
                  return function (t) {
                    var e = cc11001100_hook("e", (0, N.camelizeKeys)(t), "var-init"),
                      n = cc11001100_hook("n", e.id, "var-init"),
                      a = cc11001100_hook("a", e.goods || {}, "var-init"),
                      o = cc11001100_hook("o", a.goodsUrl, "var-init"),
                      i = cc11001100_hook("i", a.source, "var-init"),
                      r = cc11001100_hook("r", o.url, "var-init"),
                      s = cc11001100_hook("s", o.iosSchema, "var-init"),
                      l = cc11001100_hook("l", o.androidSchema, "var-init");
                    I({
                      id: cc11001100_hook("id", n, "object-key-init"),
                      url: cc11001100_hook("url", r, "object-key-init"),
                      source: cc11001100_hook("source", i, "object-key-init"),
                      scenes: cc11001100_hook("scenes", k, "object-key-init"),
                      appSchemaIos: cc11001100_hook("appSchemaIos", s, "object-key-init"),
                      appSchemaAndroid: cc11001100_hook("appSchemaAndroid", l, "object-key-init")
                    });
                  }(t);
                }
              }))));
            })) : null;
          })) : null;
        },
        $ = cc11001100_hook("$", (0, m.tZ)(O.eV, {
          content: {
            type: cc11001100_hook("type", "GoodsRecommend", "object-key-init"),
            id: cc11001100_hook("id", String(f), "object-key-init"),
            token: cc11001100_hook("token", String(f), "object-key-init")
          }
        }, (0, m.tZ)(O.Wi, {
          zaBlock: cc11001100_hook("zaBlock", "goodsRecommend_polymericPopupPage", "object-key-init"),
          zaType: cc11001100_hook("zaType", "Page", "object-key-init"),
          as: cc11001100_hook("as", "div", "object-key-init"),
          className: cc11001100_hook("className", "GoodsCardList-container", "object-key-init"),
          ref: cc11001100_hook("ref", K, "object-key-init")
        }, (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsCardList-titleContainer", "object-key-init")
        }, (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsCardList-title", "object-key-init")
        }, "当前商品购买渠道")), z && !A ? (0, m.tZ)(B, {
          content: cc11001100_hook("content", "C03,Spacing-26,C03", "object-key-init"),
          height: cc11001100_hook("height", 72, "object-key-init")
        }) : Y([F, R]), Boolean(null == D ? void 0 : D.length) && (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsCardList-tabs", "object-key-init")
        }, D.map(function (t) {
          return (0, m.tZ)(O.Wi, {
            zaBlock: cc11001100_hook("zaBlock", "goodsRecommend_tabButton", "object-key-init"),
            zaType: cc11001100_hook("zaType", "Button", "object-key-init"),
            shouldTrackClick: cc11001100_hook("shouldTrackClick", !0, "object-key-init"),
            zaText: cc11001100_hook("zaText", t.tabName, "object-key-init"),
            onClick: function () {
              return E(t);
            },
            className: cc11001100_hook("className", d()("GoodsCardList-tab", {
              "GoodsCardList-tabAvtive": cc11001100_hook("GoodsCardList-tabAvtive", t.tabId === x.tabId, "object-key-init")
            }), "object-key-init"),
            key: cc11001100_hook("key", t.tabId, "object-key-init"),
            content: {
              type: cc11001100_hook("type", "GoodsRecommend", "object-key-init"),
              id: cc11001100_hook("id", t.tabId, "object-key-init")
            }
          }, t.tabName);
        })), !A && (0, m.tZ)("div", null, P ? (0, m.tZ)("div", {
          style: {
            width: cc11001100_hook("width", "100%", "object-key-init")
          }
        }, (0, m.tZ)(B, {
          content: cc11001100_hook("content", "C03,Spacing-26,C03", "object-key-init"),
          height: cc11001100_hook("height", 72, "object-key-init")
        })) : Y([x.tabData], "tag")), A && (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsCardList-error", "object-key-init")
        }, (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsCardList-errorDesc", "object-key-init")
        }, "Oops~ 出错了"), (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsCardList-errorBtn", "object-key-init"),
          onClick: function () {
            _(T + 1);
          }
        }, "刷新重试")), (0, m.tZ)("div", {
          className: cc11001100_hook("className", d()("GoodsCardList-backContainer", {
            "GoodsCardList-backContainerShow": cc11001100_hook("GoodsCardList-backContainerShow", !J, "object-key-init")
          }), "object-key-init"),
          style: {
            display: cc11001100_hook("display", (null == D ? void 0 : D.length) ? "block" : "none", "object-key-init")
          },
          onClick: function () {
            V.current && V.current.scrollTo({
              top: cc11001100_hook("top", 0, "object-key-init"),
              behavior: cc11001100_hook("behavior", "smooth", "object-key-init")
            });
          }
        }, (0, m.tZ)("div", {
          className: cc11001100_hook("className", "GoodsCardList-backContent", "object-key-init")
        }, (0, m.tZ)(S, null), (0, m.tZ)("span", {
          className: cc11001100_hook("className", "GoodsCardList-backText", "object-key-init")
        }, "返回顶部购买商品"))))), "var-init");
      return c ? (0, m.tZ)(L.Z, {
        className: cc11001100_hook("className", d()("GoodsCardList", e), "object-key-init"),
        style: cc11001100_hook("style", n, "object-key-init"),
        size: cc11001100_hook("size", "large", "object-key-init"),
        title: cc11001100_hook("title", v, "object-key-init"),
        onClose: cc11001100_hook("onClose", b, "object-key-init")
      }, r && $) : $;
    };
    V.prototype = cc11001100_hook("V.prototype", {
      className: cc11001100_hook("className", C().string, "object-key-init"),
      style: cc11001100_hook("style", C().object, "object-key-init"),
      showModal: cc11001100_hook("showModal", C().bool, "object-key-init"),
      withModal: cc11001100_hook("withModal", C().bool, "object-key-init"),
      modalTitle: cc11001100_hook("modalTitle", C().string, "object-key-init"),
      id: cc11001100_hook("id", C().string, "object-key-init"),
      url: cc11001100_hook("url", C().string, "object-key-init"),
      fetcherOptions: cc11001100_hook("fetcherOptions", C().object, "object-key-init"),
      scenes: cc11001100_hook("scenes", C().number, "object-key-init"),
      onClose: cc11001100_hook("onClose", C().func, "object-key-init"),
      onSelectCard: cc11001100_hook("onSelectCard", C().func, "object-key-init")
    }, "assign");
    var K = cc11001100_hook("K", V, "var-init");
  }
}]);
//# sourceMappingURL=GoodsRecommendGoodsCardList.e036406936c95fb08030.js.map