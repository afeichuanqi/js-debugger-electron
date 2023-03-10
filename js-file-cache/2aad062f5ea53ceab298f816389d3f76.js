/*! For license information please see lib-330004dc.app.d43e5dcb9f8ddaa160fd.js.LICENSE.txt */
"use strict";

(self.webpackChunkheifetz = cc11001100_hook("self.webpackChunkheifetz", self.webpackChunkheifetz || [], "assign")).push([[3550], {
  54724: function (e, t, n) {
    n.d(t, {
      Iw: function () {
        return j;
      },
      Qr: function () {
        return pt;
      },
      ZP: function () {
        return Vt;
      },
      qy: function () {
        return oe;
      }
    });
    var o = cc11001100_hook("o", n(67541), "var-init"),
      r = cc11001100_hook("r", n.n(o), "var-init"),
      a = cc11001100_hook("a", n(99712), "var-init"),
      i = cc11001100_hook("i", n.n(a), "var-init"),
      l = cc11001100_hook("l", n(6885), "var-init"),
      u = cc11001100_hook("u", n.n(l), "var-init"),
      c = cc11001100_hook("c", n(23061), "var-init"),
      s = cc11001100_hook("s", n.n(c), "var-init"),
      d = cc11001100_hook("d", n(67051), "var-init"),
      f = cc11001100_hook("f", n.n(d), "var-init"),
      m = cc11001100_hook("m", n(53700), "var-init"),
      v = cc11001100_hook("v", n.n(m), "var-init"),
      h = cc11001100_hook("h", n(27822), "var-init"),
      p = cc11001100_hook("p", n.n(h), "var-init"),
      g = cc11001100_hook("g", n(47913), "var-init"),
      y = cc11001100_hook("y", n.n(g), "var-init"),
      E = cc11001100_hook("E", n(69045), "var-init"),
      b = cc11001100_hook("b", n(62557), "var-init"),
      C = cc11001100_hook("C", n(41096), "var-init"),
      L = cc11001100_hook("L", n(82131), "var-init"),
      S = cc11001100_hook("S", n.n(L), "var-init"),
      P = cc11001100_hook("P", n(87363), "var-init"),
      k = cc11001100_hook("k", n.n(P), "var-init"),
      w = cc11001100_hook("w", n(22300), "var-init"),
      x = cc11001100_hook("x", n.n(w), "var-init"),
      R = cc11001100_hook("R", n(11153), "var-init"),
      M = cc11001100_hook("M", n.n(R), "var-init"),
      F = cc11001100_hook("F", n(76745), "var-init"),
      T = cc11001100_hook("T", n.n(F), "var-init"),
      N = cc11001100_hook("N", n(45741), "var-init"),
      D = cc11001100_hook("D", n.n(N), "var-init"),
      A = cc11001100_hook("A", n(58386), "var-init"),
      O = cc11001100_hook("O", n.n(A), "var-init"),
      I = cc11001100_hook("I", n(46378), "var-init");
    function B(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      if (t && !Array.isArray(t) && "number" == typeof t.length) {
        var o = cc11001100_hook("o", t.length, "var-init");
        return function (e, t) {
          (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));
          for (var n = cc11001100_hook("n", 0, "var-init"), o = cc11001100_hook("o", new Array(t), "var-init"); n < t; n++) o[n] = cc11001100_hook("o[n]", e[n], "assign");
          return o;
        }(t, void 0 !== n && n < o ? n : o);
      }
      return e(t, n);
    }
    function _(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }(), "var-init");
      return function () {
        var n,
          o = cc11001100_hook("o", y()(e), "var-init");
        if (t) {
          var r = cc11001100_hook("r", y()(this).constructor, "var-init");
          n = cc11001100_hook("n", Reflect.construct(o, arguments, r), "assign");
        } else n = cc11001100_hook("n", o.apply(this, arguments), "assign");
        return p()(this, n);
      };
    }
    function H(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", {}, "var-init");
      for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = cc11001100_hook("n[o]", e[o], "assign"));
      if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
        var r = cc11001100_hook("r", 0, "var-init");
        for (o = cc11001100_hook("o", Object.getOwnPropertySymbols(e), "assign"); r < o.length; r++) t.indexOf(o[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[r]) && (n[o[r]] = cc11001100_hook("n[o[r]]", e[o[r]], "assign"));
      }
      return n;
    }
    var Q = cc11001100_hook("Q", {
        en: {
          "quality-auto": cc11001100_hook("quality-auto", "Auto", "object-key-init"),
          "quality-ld": cc11001100_hook("quality-ld", "LD", "object-key-init"),
          "quality-sd": cc11001100_hook("quality-sd", "SD", "object-key-init"),
          "quality-hd": cc11001100_hook("quality-hd", "HD", "object-key-init"),
          "quality-fhd": cc11001100_hook("quality-fhd", "FHD", "object-key-init"),
          "action-enter-fullscreen": cc11001100_hook("action-enter-fullscreen", "Fullscreen", "object-key-init"),
          "action-exit-fullscreen": cc11001100_hook("action-exit-fullscreen", "Exit Fullscreen", "object-key-init"),
          "action-enter-page-fullscreen": cc11001100_hook("action-enter-page-fullscreen", "Page Fullscreen", "object-key-init"),
          "action-exit-page-fullscreen": cc11001100_hook("action-exit-page-fullscreen", "Exit Page Fullscreen", "object-key-init"),
          "action-enter-pip": cc11001100_hook("action-enter-pip", "Picture in Picture", "object-key-init"),
          "action-exit-pip": cc11001100_hook("action-exit-pip", "Exit Picture in Picture", "object-key-init"),
          "playback-rate": cc11001100_hook("playback-rate", "Speed", "object-key-init"),
          replay: cc11001100_hook("replay", "Replay", "object-key-init"),
          play: cc11001100_hook("play", "Play", "object-key-init"),
          pause: cc11001100_hook("pause", "Pause", "object-key-init"),
          mute: cc11001100_hook("mute", "Mute", "object-key-init"),
          unmute: cc11001100_hook("unmute", "Unmute", "object-key-init")
        },
        ja: {
          "quality-auto": cc11001100_hook("quality-auto", "自動", "object-key-init"),
          "quality-ld": cc11001100_hook("quality-ld", "低画質", "object-key-init"),
          "quality-sd": cc11001100_hook("quality-sd", "標準画質", "object-key-init"),
          "quality-hd": cc11001100_hook("quality-hd", "高画質", "object-key-init"),
          "quality-fhd": cc11001100_hook("quality-fhd", "超高画質", "object-key-init"),
          "action-enter-fullscreen": cc11001100_hook("action-enter-fullscreen", "全画面", "object-key-init"),
          "action-exit-fullscreen": cc11001100_hook("action-exit-fullscreen", "全画面終了", "object-key-init"),
          "action-enter-page-fullscreen": cc11001100_hook("action-enter-page-fullscreen", "全画面ページ", "object-key-init"),
          "action-exit-page-fullscreen": cc11001100_hook("action-exit-page-fullscreen", "全画面から撤退する", "object-key-init"),
          "action-enter-pip": cc11001100_hook("action-enter-pip", "ピクチャーインピクチャー", "object-key-init"),
          "action-exit-pip": cc11001100_hook("action-exit-pip", "ピクチャーインピクチャー終了", "object-key-init"),
          "playback-rate": cc11001100_hook("playback-rate", "再生速度", "object-key-init"),
          replay: cc11001100_hook("replay", "もう一回見る", "object-key-init"),
          play: cc11001100_hook("play", "再生", "object-key-init"),
          pause: cc11001100_hook("pause", "一時停止", "object-key-init"),
          mute: cc11001100_hook("mute", "ミュート（消音）", "object-key-init"),
          unmute: cc11001100_hook("unmute", "ミュート解除", "object-key-init")
        },
        "zh-Hans": {
          "quality-auto": cc11001100_hook("quality-auto", "自动", "object-key-init"),
          "quality-ld": cc11001100_hook("quality-ld", "低清", "object-key-init"),
          "quality-sd": cc11001100_hook("quality-sd", "标清", "object-key-init"),
          "quality-hd": cc11001100_hook("quality-hd", "高清", "object-key-init"),
          "quality-fhd": cc11001100_hook("quality-fhd", "超清", "object-key-init"),
          "action-enter-fullscreen": cc11001100_hook("action-enter-fullscreen", "全屏", "object-key-init"),
          "action-exit-fullscreen": cc11001100_hook("action-exit-fullscreen", "退出全屏", "object-key-init"),
          "action-enter-page-fullscreen": cc11001100_hook("action-enter-page-fullscreen", "网页全屏", "object-key-init"),
          "action-exit-page-fullscreen": cc11001100_hook("action-exit-page-fullscreen", "退出网页全屏", "object-key-init"),
          "action-enter-pip": cc11001100_hook("action-enter-pip", "画中画", "object-key-init"),
          "action-exit-pip": cc11001100_hook("action-exit-pip", "退出画中画", "object-key-init"),
          "playback-rate": cc11001100_hook("playback-rate", "倍速", "object-key-init"),
          replay: cc11001100_hook("replay", "重新播放", "object-key-init"),
          play: cc11001100_hook("play", "播放", "object-key-init"),
          pause: cc11001100_hook("pause", "暂停", "object-key-init"),
          mute: cc11001100_hook("mute", "静音", "object-key-init"),
          unmute: cc11001100_hook("unmute", "取消静音", "object-key-init")
        },
        "zh-Hant": {
          "quality-auto": cc11001100_hook("quality-auto", "自動", "object-key-init"),
          "quality-ld": cc11001100_hook("quality-ld", "低畫質", "object-key-init"),
          "quality-sd": cc11001100_hook("quality-sd", "標準畫質", "object-key-init"),
          "quality-hd": cc11001100_hook("quality-hd", "高畫質", "object-key-init"),
          "quality-fhd": cc11001100_hook("quality-fhd", "超高畫質", "object-key-init"),
          "action-enter-fullscreen": cc11001100_hook("action-enter-fullscreen", "全螢幕", "object-key-init"),
          "action-exit-fullscreen": cc11001100_hook("action-exit-fullscreen", "結束全螢幕", "object-key-init"),
          "action-enter-page-fullscreen": cc11001100_hook("action-enter-page-fullscreen", "網頁全屏", "object-key-init"),
          "action-exit-page-fullscreen": cc11001100_hook("action-exit-page-fullscreen", "退出網頁全屏", "object-key-init"),
          "action-enter-pip": cc11001100_hook("action-enter-pip", "子母畫面", "object-key-init"),
          "action-exit-pip": cc11001100_hook("action-exit-pip", "關閉子母畫面", "object-key-init"),
          "playback-rate": cc11001100_hook("playback-rate", "倍速", "object-key-init"),
          replay: cc11001100_hook("replay", "重新播放", "object-key-init"),
          play: cc11001100_hook("play", "播放", "object-key-init"),
          pause: cc11001100_hook("pause", "暫停", "object-key-init"),
          mute: cc11001100_hook("mute", "静音", "object-key-init"),
          unmute: cc11001100_hook("unmute", "解除静音", "object-key-init")
        }
      }, "var-init"),
      q = cc11001100_hook("q", k().createContext(Q.en), "var-init");
    q.displayName = cc11001100_hook("q.displayName", "LocaleContext", "assign");
    var U = function (e) {
        var t = cc11001100_hook("t", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text", "var-init"),
          n = cc11001100_hook("n", (0, P.useContext)(q), "var-init");
        if ("object" == typeof n[e]) {
          var o = cc11001100_hook("o", n[e], "var-init");
          return o[t];
        }
        return n[e];
      },
      j = function (e) {
        var t = cc11001100_hook("t", e.locale, "var-init"),
          n = cc11001100_hook("n", e.localeConfig, "var-init"),
          o = cc11001100_hook("o", e.children, "var-init"),
          r = cc11001100_hook("r", (0, P.useMemo)(function () {
            return function (e, t) {
              var n = cc11001100_hook("n", Q[e], "var-init"),
                o = cc11001100_hook("o", null == t ? void 0 : t[e], "var-init");
              return o ? Object.assign({}, n, o) : n;
            }(t, n);
          }, [t, n]), "var-init");
        return k().createElement(q.Provider, {
          value: cc11001100_hook("value", r, "object-key-init")
        }, o);
      },
      W = function (e) {
        var t = cc11001100_hook("t", (0, P.useRef)(e), "var-init");
        return t.current = cc11001100_hook("t.current", e, "assign"), (0, P.useRef)(function () {
          return t.current.apply(t, arguments);
        }).current;
      },
      Z = cc11001100_hook("Z", "event", "var-init"),
      z = cc11001100_hook("z", "action", "var-init"),
      V = cc11001100_hook("V", k().createContext({}), "var-init");
    V.displayName = cc11001100_hook("V.displayName", "InternalMessageContext", "assign");
    var Y = cc11001100_hook("Y", k().createContext(null), "var-init");
    Y.displayName = cc11001100_hook("Y.displayName", "MessageContext", "assign");
    var G = cc11001100_hook("G", function (e) {
      v()(n, e);
      var t = cc11001100_hook("t", _(n), "var-init");
      function n(e) {
        cc11001100_hook("e", e, "function-parameter");
        var o;
        s()(this, n), (o = cc11001100_hook("o", t.call(this, e), "assign")).emitEvent = cc11001100_hook("(o = t.call(this, e)).emitEvent", function (e, t) {
          var n, r;
          o.emitter.emit(e, {
            __type__: cc11001100_hook("__type__", Z, "object-key-init"),
            data: cc11001100_hook("data", t, "object-key-init")
          }), null === (r = cc11001100_hook("r", (n = cc11001100_hook("n", o.props, "assign")).onEvent, "assign")) || void 0 === r || r.call(n, e, t), o.props.enableCrossWindow && o.crossWindowMessager.dispatchMessage(window.parent, e, t);
        }, "assign"), o.subscribeEvent = cc11001100_hook("o.subscribeEvent", function (e, t) {
          var n = function () {
            var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
              n = cc11001100_hook("n", e.__type__, "var-init"),
              o = cc11001100_hook("o", e.data, "var-init");
            n === Z && t(o);
          };
          return o.emitter.on(e, n), {
            unsubscribe: function () {
              return o.emitter.off(e, n);
            }
          };
        }, "assign"), o.dispatchAction = cc11001100_hook("o.dispatchAction", function (e, t) {
          o.emitter.emit(e, {
            __type__: cc11001100_hook("__type__", z, "object-key-init"),
            data: cc11001100_hook("data", t, "object-key-init")
          });
        }, "assign"), o.subscribeAction = cc11001100_hook("o.subscribeAction", function (e, t) {
          var n = function (e) {
            var n = cc11001100_hook("n", e.__type__, "var-init"),
              o = cc11001100_hook("o", e.data, "var-init");
            n === z && t(o);
          };
          return o.emitter.on(e, n), {
            unsubscribe: function () {
              return o.emitter.off(e, n);
            }
          };
        }, "assign"), o.internalContextValue = cc11001100_hook("o.internalContextValue", {
          emitEvent: cc11001100_hook("emitEvent", o.emitEvent, "object-key-init"),
          subscribeAction: cc11001100_hook("subscribeAction", o.subscribeAction, "object-key-init")
        }, "assign"), o.externalContextValue = cc11001100_hook("o.externalContextValue", {
          dispatchAction: cc11001100_hook("dispatchAction", o.dispatchAction, "object-key-init"),
          subscribeEvent: cc11001100_hook("subscribeEvent", o.subscribeEvent, "object-key-init")
        }, "assign"), o.emitter = cc11001100_hook("o.emitter", new (x())(), "assign");
        var r = cc11001100_hook("r", o.props, "var-init"),
          a = cc11001100_hook("a", r.id, "var-init"),
          i = cc11001100_hook("i", r.targetOrigin, "var-init");
        return o.crossWindowMessager = cc11001100_hook("o.crossWindowMessager", (0, E.Wn)(a, i), "assign"), o.props.dispatchRef && (o.props.dispatchRef.current = cc11001100_hook("o.props.dispatchRef.current", o.externalContextValue.dispatchAction, "assign")), o.props.messageContextRef && (o.props.messageContextRef.current = cc11001100_hook("o.props.messageContextRef.current", o.externalContextValue, "assign")), Promise.resolve().then(function () {
          o.emitEvent(E.FP.SUBSCRIPTION_READY);
        }), o;
      }
      return f()(n, [{
        key: cc11001100_hook("key", "componentDidMount", "object-key-init"),
        value: function () {
          var e = cc11001100_hook("e", this, "var-init");
          this.props.enableCrossWindow && this.crossWindowMessager.subscribeMessage(function (t, n) {
            e.dispatchAction(t, n);
          });
        }
      }, {
        key: cc11001100_hook("key", "componentWillUnmount", "object-key-init"),
        value: function () {
          this.props.dispatchRef && (this.props.dispatchRef.current = cc11001100_hook("this.props.dispatchRef.current", void 0, "assign")), this.props.messageContextRef && (this.props.messageContextRef.current = cc11001100_hook("this.props.messageContextRef.current", void 0, "assign")), this.crossWindowMessager.dispose(), this.emitter.removeAllListeners();
        }
      }, {
        key: cc11001100_hook("key", "render", "object-key-init"),
        value: function () {
          return k().createElement(V.Provider, {
            value: cc11001100_hook("value", this.internalContextValue, "object-key-init")
          }, k().createElement(Y.Provider, {
            value: cc11001100_hook("value", this.externalContextValue, "object-key-init")
          }, this.props.children));
        }
      }]), n;
    }(k().PureComponent), "var-init");
    G.defaultProps = cc11001100_hook("G.defaultProps", {
      targetOrigin: cc11001100_hook("targetOrigin", "*", "object-key-init")
    }, "assign");
    var K = cc11001100_hook("K", k().createContext({}), "var-init");
    K.displayName = cc11001100_hook("K.displayName", "ObjectFitContext", "assign");
    var X = function (e) {
      var t = cc11001100_hook("t", e.initialObjectFit, "var-init"),
        n = cc11001100_hook("n", void 0 === t ? "contain" : t, "var-init"),
        o = cc11001100_hook("o", e.children, "var-init"),
        r = cc11001100_hook("r", (0, P.useState)(n), "var-init"),
        a = cc11001100_hook("a", B(u(), r, 2), "var-init"),
        i = cc11001100_hook("i", a[0], "var-init"),
        l = cc11001100_hook("l", a[1], "var-init"),
        c = cc11001100_hook("c", (0, P.useMemo)(function () {
          return {
            objectFit: cc11001100_hook("objectFit", i, "object-key-init"),
            setObjectFit: cc11001100_hook("setObjectFit", l, "object-key-init")
          };
        }, [i, l]), "var-init");
      return (0, P.useEffect)(function () {
        l(n);
      }, [n]), k().createElement(K.Provider, {
        value: cc11001100_hook("value", c, "object-key-init")
      }, o);
    };
    function J(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", (0, P.useRef)(), "var-init");
      return (0, P.useEffect)(function () {
        t.current = cc11001100_hook("t.current", e, "assign");
      }, [e]), t.current;
    }
    var $ = cc11001100_hook("$", "function" == typeof ResizeObserver ? function (e, t) {
        var n = cc11001100_hook("n", new ResizeObserver(function (e) {
          return t(e[0].contentRect);
        }), "var-init");
        return n.observe(e), function () {
          n.disconnect();
        };
      } : function (e, t) {
        var n,
          o = cc11001100_hook("o", window.MutationObserver || window.WebKitMutationObserver, "var-init"),
          r = function () {
            var o = cc11001100_hook("o", e.getBoundingClientRect(), "var-init");
            !(n && ["left", "top", "width", "height"].every(function (e) {
              return n[e] === o[e];
            })) && (n = cc11001100_hook("n", o, "assign"), t(o));
          },
          a = cc11001100_hook("a", new o(M()(r, 100)), "var-init");
        return a.observe(e, {
          attributes: cc11001100_hook("attributes", !0, "object-key-init"),
          characterData: cc11001100_hook("characterData", !0, "object-key-init"),
          childList: cc11001100_hook("childList", !0, "object-key-init"),
          subtree: cc11001100_hook("subtree", !0, "object-key-init")
        }), r(), window.addEventListener("resize", r), function () {
          a.disconnect(), window.removeEventListener("resize", r);
        };
      }, "var-init"),
      ee = cc11001100_hook("ee", k().createContext({
        isFullWidth: cc11001100_hook("isFullWidth", !1, "object-key-init"),
        updateVideoSize: function () {}
      }), "var-init");
    ee.displayName = cc11001100_hook("ee.displayName", "PositionContext", "assign");
    var te = cc11001100_hook("te", b.StyleSheet.create({
        root: {
          position: cc11001100_hook("position", "relative", "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init")
        }
      }), "var-init"),
      ne = function (e) {
        var t = cc11001100_hook("t", e.children, "var-init"),
          n = cc11001100_hook("n", (0, P.useRef)(null), "var-init"),
          o = cc11001100_hook("o", (0, P.useState)(null), "var-init"),
          r = cc11001100_hook("r", B(u(), o, 2), "var-init"),
          a = cc11001100_hook("a", r[0], "var-init"),
          i = cc11001100_hook("i", r[1], "var-init"),
          l = cc11001100_hook("l", (0, P.useState)(!1), "var-init"),
          c = cc11001100_hook("c", B(u(), l, 2), "var-init"),
          s = cc11001100_hook("s", c[0], "var-init"),
          d = cc11001100_hook("d", c[1], "var-init"),
          f = cc11001100_hook("f", (0, P.useState)({
            videoWidth: cc11001100_hook("videoWidth", 0, "object-key-init"),
            videoHeight: cc11001100_hook("videoHeight", 0, "object-key-init")
          }), "var-init"),
          m = cc11001100_hook("m", B(u(), f, 2), "var-init"),
          v = cc11001100_hook("v", m[0], "var-init"),
          h = cc11001100_hook("h", m[1], "var-init"),
          p = cc11001100_hook("p", W(function () {
            var e,
              t = cc11001100_hook("t", v.videoWidth, "var-init"),
              n = cc11001100_hook("n", v.videoHeight, "var-init");
            t && n && i((e = cc11001100_hook("e", n, "assign"), "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='".concat(t, "' height='").concat(e, "'></svg>")));
          }), "var-init"),
          g = cc11001100_hook("g", W(function () {
            var e = cc11001100_hook("e", v.videoWidth, "var-init"),
              t = cc11001100_hook("t", v.videoHeight, "var-init");
            if (e && t && n.current) {
              var o = cc11001100_hook("o", n.current.getBoundingClientRect(), "var-init"),
                r = cc11001100_hook("r", o.width / o.height - e / t <= .01, "var-init");
              r !== s && d(r);
            }
          }), "var-init");
        (0, P.useEffect)(function () {
          if (n.current) return $(n.current, g);
        }, [n, g]), (0, P.useEffect)(function () {
          p();
        }, [p]);
        var y = cc11001100_hook("y", J(v), "var-init");
        (0, P.useEffect)(function () {
          if (y) {
            var e = cc11001100_hook("e", y.videoWidth, "var-init"),
              t = cc11001100_hook("t", y.videoHeight, "var-init"),
              n = cc11001100_hook("n", v.videoWidth, "var-init"),
              o = cc11001100_hook("o", v.videoHeight, "var-init");
            e === n && t === o || (requestAnimationFrame(g), p());
          }
        }, [y, p, g, v]);
        var E = cc11001100_hook("E", (0, P.useMemo)(function () {
          return {
            isFullWidth: cc11001100_hook("isFullWidth", s, "object-key-init"),
            helperImageSrc: cc11001100_hook("helperImageSrc", a, "object-key-init"),
            updateVideoSize: cc11001100_hook("updateVideoSize", h, "object-key-init")
          };
        }, [a, s]), "var-init");
        return k().createElement(ee.Provider, {
          value: cc11001100_hook("value", E, "object-key-init")
        }, k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(te.root), "object-key-init"),
          ref: cc11001100_hook("ref", n, "object-key-init")
        }, t));
      },
      oe = cc11001100_hook("oe", k().createContext({}), "var-init");
    oe.displayName = cc11001100_hook("oe.displayName", "VideoSourceContext", "assign");
    var re = cc11001100_hook("re", ["auto", "ld", "sd", "hd", "fhd"], "var-init"),
      ae = function (e) {
        return e.slice().reverse();
      },
      ie = cc11001100_hook("ie", C.ua.isMobile, "var-init"),
      le = function (e) {
        var t,
          n,
          o = cc11001100_hook("o", e.sources, "var-init"),
          r = cc11001100_hook("r", e.useAutoQuality, "var-init"),
          a = cc11001100_hook("a", e.playbackRates, "var-init"),
          i = cc11001100_hook("i", e.defaultPlaybackRate, "var-init"),
          l = cc11001100_hook("l", e.defaultQuality, "var-init"),
          c = cc11001100_hook("c", e.defaultQualityOrder, "var-init"),
          s = cc11001100_hook("s", e.children, "var-init"),
          d = cc11001100_hook("d", (0, P.useContext)(V).emitEvent, "var-init"),
          f = cc11001100_hook("f", (t = cc11001100_hook("t", o, "assign"), n = cc11001100_hook("n", (0, P.useRef)(t), "assign"), t !== n.current && JSON.stringify(t) !== JSON.stringify(n.current) && (n.current = cc11001100_hook("n.current", t, "assign")), n.current), "var-init"),
          m = cc11001100_hook("m", (0, P.useMemo)(function () {
            if (!f) return {
              qualities: cc11001100_hook("qualities", [], "object-key-init"),
              sources: cc11001100_hook("sources", [], "object-key-init")
            };
            var e = cc11001100_hook("e", Object.values(f)[0].format, "var-init"),
              t = cc11001100_hook("t", "desc" === c, "var-init"),
              n = cc11001100_hook("n", function (e, t, n) {
                var o = cc11001100_hook("o", Object.keys(e).sort(function (e, t) {
                  return n ? re.indexOf(t) - re.indexOf(e) : re.indexOf(e) - re.indexOf(t);
                }), "var-init");
                return o.length > 1 ? t ? o.slice(0, 1) : o.filter(function (e) {
                  return "ld" !== e;
                }) : o;
              }(f, ie, t), "var-init"),
              o = cc11001100_hook("o", function (e, t) {
                return e.map(function (e) {
                  var n = cc11001100_hook("n", t[e], "var-init"),
                    o = cc11001100_hook("o", n.play_url, "var-init"),
                    r = cc11001100_hook("r", H(n, ["play_url"]), "var-init");
                  return Object.assign(Object.assign({}, r), {
                    source: cc11001100_hook("source", o, "object-key-init"),
                    quality: cc11001100_hook("quality", e, "object-key-init")
                  });
                });
              }(n, f), "var-init");
            return !r || ie || "m3u8" !== e || n.includes("auto") || n.unshift("auto"), {
              qualities: cc11001100_hook("qualities", n, "object-key-init"),
              sources: cc11001100_hook("sources", o, "object-key-init"),
              format: cc11001100_hook("format", e, "object-key-init"),
              isDescOrder: cc11001100_hook("isDescOrder", t, "object-key-init")
            };
          }, [r, f, c]), "var-init"),
          v = cc11001100_hook("v", m.qualities, "var-init"),
          h = cc11001100_hook("h", m.sources, "var-init"),
          p = cc11001100_hook("p", m.format, "var-init"),
          g = cc11001100_hook("g", m.isDescOrder, "var-init"),
          y = cc11001100_hook("y", (0, P.useState)(l && v.includes(l) ? l : v[0]), "var-init"),
          b = cc11001100_hook("b", B(u(), y, 2), "var-init"),
          C = cc11001100_hook("C", b[0], "var-init"),
          L = cc11001100_hook("L", b[1], "var-init"),
          S = cc11001100_hook("S", (0, P.useState)(i), "var-init"),
          w = cc11001100_hook("w", B(u(), S, 2), "var-init"),
          x = cc11001100_hook("x", w[0], "var-init"),
          R = cc11001100_hook("R", w[1], "var-init"),
          M = cc11001100_hook("M", W(function (e) {
            C !== e && (L(e), d(E.FP.QUALITY_CHANGE, {
              prevQuality: cc11001100_hook("prevQuality", C, "object-key-init"),
              quality: cc11001100_hook("quality", e, "object-key-init")
            }));
          }), "var-init"),
          F = cc11001100_hook("F", J(v), "var-init");
        (0, P.useEffect)(function () {
          F && F !== v && M(l || v[0]);
        }, [F, v, l, M]);
        var T = cc11001100_hook("T", W(function (e) {
            x !== e && (R(e), d(E.FP.PLAYBACK_RATE_CHANGE, {
              prevRate: cc11001100_hook("prevRate", x, "object-key-init"),
              rate: cc11001100_hook("rate", e, "object-key-init")
            }));
          }), "var-init"),
          N = cc11001100_hook("N", (0, P.useMemo)(function () {
            if (0 !== h.length) return (h.find(function (e) {
              return e.quality === C;
            }) || h[0]).source;
          }, [C, h]), "var-init"),
          D = cc11001100_hook("D", (0, P.useMemo)(function () {
            return {
              qualities: cc11001100_hook("qualities", g ? v : ae(v), "object-key-init"),
              playbackRates: cc11001100_hook("playbackRates", a, "object-key-init"),
              format: cc11001100_hook("format", p, "object-key-init"),
              sources: cc11001100_hook("sources", h, "object-key-init"),
              currentQuality: cc11001100_hook("currentQuality", C, "object-key-init"),
              currentPlaybackRate: cc11001100_hook("currentPlaybackRate", x, "object-key-init"),
              currentSrc: cc11001100_hook("currentSrc", N, "object-key-init"),
              setCurrentQuality: cc11001100_hook("setCurrentQuality", M, "object-key-init"),
              setCurrentPlaybackRate: cc11001100_hook("setCurrentPlaybackRate", T, "object-key-init")
            };
          }, [x, C, N, p, a, v, g, T, M, h]), "var-init");
        return k().createElement(oe.Provider, {
          value: cc11001100_hook("value", D, "object-key-init")
        }, s);
      },
      ue = function () {
        var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] && arguments[0], "var-init"),
          t = cc11001100_hook("t", (0, P.useState)(e), "var-init"),
          n = cc11001100_hook("n", B(u(), t, 2), "var-init"),
          o = cc11001100_hook("o", n[0], "var-init"),
          r = cc11001100_hook("r", n[1], "var-init"),
          a = cc11001100_hook("a", (0, P.useRef)({
            on: cc11001100_hook("on", (0, P.useCallback)(function () {
              return r(!0);
            }, []), "object-key-init"),
            off: cc11001100_hook("off", (0, P.useCallback)(function () {
              return r(!1);
            }, []), "object-key-init"),
            toggle: cc11001100_hook("toggle", (0, P.useCallback)(function () {
              return r(function (e) {
                return !e;
              });
            }, []), "object-key-init")
          }).current, "var-init");
        return [o, a];
      };
    function ce(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", String(e), "var-init");
      return t.length < 2 && (t = cc11001100_hook("t", "0" + t, "assign")), t;
    }
    function se(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (!Number.isFinite(e)) return "";
      var t = cc11001100_hook("t", (e = cc11001100_hook("e", Math.floor(e), "assign")) % 60, "var-init"),
        n = cc11001100_hook("n", Math.floor(e / 60), "var-init");
      return "".concat(ce(n), ":").concat(ce(t));
    }
    var de,
      fe = cc11001100_hook("fe", function () {
        function e() {
          s()(this, e), this.inited = cc11001100_hook("this.inited", !1, "assign");
        }
        return f()(e, [{
          key: cc11001100_hook("key", "init", "object-key-init"),
          value: function (e, t, n) {
            this.inited = cc11001100_hook("this.inited", !0, "assign"), this.element = cc11001100_hook("this.element", e, "assign"), this.onEnter = cc11001100_hook("this.onEnter", t, "assign"), this.onExit = cc11001100_hook("this.onExit", n, "assign"), this.element.addEventListener("enterpictureinpicture", this.handleEnter.bind(this)), this.element.addEventListener("leavepictureinpicture", this.handleExit.bind(this));
          }
        }, {
          key: cc11001100_hook("key", "handleEnter", "object-key-init"),
          value: function (e) {
            this.onEnter && this.onEnter(e);
          }
        }, {
          key: cc11001100_hook("key", "handleExit", "object-key-init"),
          value: function (e) {
            this.onExit && this.onExit(e);
          }
        }, {
          key: cc11001100_hook("key", "supported", "object-key-init"),
          get: function () {
            return !!this.inited && document.pictureInPictureEnabled;
          }
        }, {
          key: cc11001100_hook("key", "pictureInPictureElement", "object-key-init"),
          get: function () {
            return document.pictureInPictureElement;
          }
        }, {
          key: cc11001100_hook("key", "request", "object-key-init"),
          value: function () {
            this.element && this.element.requestPictureInPicture();
          }
        }, {
          key: cc11001100_hook("key", "exit", "object-key-init"),
          value: function () {
            document.exitPictureInPicture();
          }
        }, {
          key: cc11001100_hook("key", "toggle", "object-key-init"),
          value: function () {
            this.pictureInPictureElement ? this.exit() : this.request();
          }
        }]), e;
      }(), "var-init"),
      me = cc11001100_hook("me", {
        store: {},
        setItem: function (e, t) {
          this.store[e] = cc11001100_hook("this.store[e]", t, "assign");
        },
        removeItem: function (e) {
          return delete this.store[e];
        },
        getItem: function (e) {
          return this.store[e];
        }
      }, "var-init"),
      ve = cc11001100_hook("ve", {
        isSupported: cc11001100_hook("isSupported", T()(function () {
          try {
            var e = cc11001100_hook("e", {
                key: cc11001100_hook("key", "__test_support_key__", "object-key-init"),
                value: cc11001100_hook("value", "__test_support_value__", "object-key-init")
              }, "var-init"),
              t = cc11001100_hook("t", Boolean(n.g.localStorage), "var-init");
            return localStorage.setItem(e.key, e.value), localStorage.removeItem(e.key), t;
          } catch (e) {
            return !1;
          }
        }), "object-key-init"),
        getStorage: cc11001100_hook("getStorage", T()(function () {
          return ve.isSupported() ? localStorage : me;
        }), "object-key-init"),
        set: function (e, t) {
          ve.getStorage().setItem(e, JSON.stringify(t));
        },
        get: function (e) {
          try {
            var t = cc11001100_hook("t", ve.getStorage().getItem(e), "var-init");
            return JSON.parse(t);
          } catch (e) {
            return null;
          }
        },
        delete: function (e) {
          ve.getStorage().removeItem(e);
        }
      }, "var-init"),
      he = cc11001100_hook("he", {
        mobile: cc11001100_hook("mobile", "26em", "object-key-init")
      }, "var-init"),
      pe = cc11001100_hook("pe", b.StyleSheet.create({
        root: {
          position: cc11001100_hook("position", "relative", "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
          userSelect: cc11001100_hook("userSelect", "none", "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", 16, "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "#000", "object-key-init"),
          ":focus": {
            outline: cc11001100_hook("outline", "none", "object-key-init")
          }
        },
        fullScreened: {
          fontSize: cc11001100_hook("fontSize", 24, "object-key-init")
        },
        pageFullScreen: {
          position: cc11001100_hook("position", "fixed", "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          zIndex: cc11001100_hook("zIndex", 1e5, "object-key-init")
        },
        actionButton: {
          color: cc11001100_hook("color", "#fff", "object-key-init"),
          width: cc11001100_hook("width", "4.5em", "object-key-init"),
          height: cc11001100_hook("height", "4.5em", "object-key-init")
        },
        actionButtonAnimated: {
          animationName: {
            "0%": {
              opacity: cc11001100_hook("opacity", 0, "object-key-init"),
              transform: cc11001100_hook("transform", "scale(0)", "object-key-init")
            },
            "50%": {
              opacity: cc11001100_hook("opacity", .6, "object-key-init"),
              transform: cc11001100_hook("transform", "scale(0.8)", "object-key-init")
            },
            "100%": {
              opacity: cc11001100_hook("opacity", 0, "object-key-init"),
              transform: cc11001100_hook("transform", "scale(1)", "object-key-init")
            }
          },
          animationDuration: cc11001100_hook("animationDuration", "600ms", "object-key-init"),
          animationFillMode: cc11001100_hook("animationFillMode", "both", "object-key-init")
        },
        actionLabelAnimation: {
          animationName: {
            "90%": {
              opacity: cc11001100_hook("opacity", 1, "object-key-init")
            },
            "100%": {
              opacity: cc11001100_hook("opacity", 0, "object-key-init")
            }
          },
          animationDuration: cc11001100_hook("animationDuration", "600ms", "object-key-init"),
          animationFillMode: cc11001100_hook("animationFillMode", "both", "object-key-init")
        },
        actionIcon: cc11001100_hook("actionIcon", i()({
          width: cc11001100_hook("width", "4.5em", "object-key-init"),
          height: cc11001100_hook("height", "4.5em", "object-key-init")
        }, (de = cc11001100_hook("de", "mobile", "assign"), "@media screen and (max-width: ".concat(he[de], ")")), {
          transform: cc11001100_hook("transform", "scale(0.75)", "object-key-init")
        }), "object-key-init"),
        actionLabel: {
          marginTop: cc11001100_hook("marginTop", ".5em", "object-key-init"),
          padding: cc11001100_hook("padding", ".3em .5em", "object-key-init"),
          textAlign: cc11001100_hook("textAlign", "center", "object-key-init"),
          color: cc11001100_hook("color", "#fff", "object-key-init"),
          background: cc11001100_hook("background", "rgba(0,0,0,0.5)", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", 5, "object-key-init")
        },
        video: {
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init")
        },
        overlay: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          right: cc11001100_hook("right", 0, "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init")
        },
        overlayMask: {
          background: cc11001100_hook("background", "rgba(0, 0, 0, 0.08)", "object-key-init")
        },
        loader: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", "50%", "object-key-init"),
          top: cc11001100_hook("top", "50%", "object-key-init"),
          color: cc11001100_hook("color", "#0f88eb", "object-key-init"),
          transform: cc11001100_hook("transform", "translate(-50%, -50%)", "object-key-init")
        },
        action: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", "50%", "object-key-init"),
          top: cc11001100_hook("top", "50%", "object-key-init"),
          transform: cc11001100_hook("transform", "translate(-50%, -50%)", "object-key-init")
        },
        actionToast: {
          pointerEvents: cc11001100_hook("pointerEvents", "none", "object-key-init")
        },
        backdrop: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          right: cc11001100_hook("right", 0, "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init")
        },
        title: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          right: cc11001100_hook("right", 0, "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
          padding: cc11001100_hook("padding", "0 1em", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", 2.5, "object-key-init"),
          textOverflow: cc11001100_hook("textOverflow", "ellipsis", "object-key-init"),
          whiteSpace: cc11001100_hook("whiteSpace", "nowrap", "object-key-init"),
          color: cc11001100_hook("color", "#fff", "object-key-init"),
          backgroundImage: cc11001100_hook("backgroundImage", "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))", "object-key-init"),
          transform: cc11001100_hook("transform", "translateY(-100%)", "object-key-init"),
          transition: cc11001100_hook("transition", "transform 300ms", "object-key-init")
        },
        titleShown: {
          transform: cc11001100_hook("transform", "translateY(0)", "object-key-init")
        },
        controller: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          right: cc11001100_hook("right", 0, "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init"),
          backgroundImage: cc11001100_hook("backgroundImage", "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3))", "object-key-init")
        },
        volumeButton: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init"),
          right: cc11001100_hook("right", 8, "object-key-init")
        },
        cover: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          right: cc11001100_hook("right", 0, "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "#000", "object-key-init"),
          cursor: cc11001100_hook("cursor", "pointer", "object-key-init"),
          visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
          opacity: cc11001100_hook("opacity", 0, "object-key-init"),
          transition: cc11001100_hook("transition", "visibility 300ms, opacity 300ms", "object-key-init")
        },
        coverShown: {
          visibility: cc11001100_hook("visibility", "visible", "object-key-init"),
          opacity: cc11001100_hook("opacity", 1, "object-key-init")
        },
        coverImage: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init")
        },
        coverTime: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          right: cc11001100_hook("right", "0.5em", "object-key-init"),
          bottom: cc11001100_hook("bottom", "0.5em", "object-key-init"),
          padding: cc11001100_hook("padding", "0.375em", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", "0.875em", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", 1, "object-key-init"),
          color: cc11001100_hook("color", "rgba(255, 255, 255, 0.9)", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "transparent", "object-key-init"),
          textShadow: cc11001100_hook("textShadow", "0 0 6px rgba(0, 0, 0, 0.4)", "object-key-init")
        },
        coverTimeMobile: {
          padding: cc11001100_hook("padding", 0, "object-key-init")
        },
        coverAction: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", "50%", "object-key-init"),
          top: cc11001100_hook("top", "50%", "object-key-init"),
          transform: cc11001100_hook("transform", "translate(-50%, -50%)", "object-key-init")
        },
        coverReplayAction: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", "0", "object-key-init"),
          right: cc11001100_hook("right", "0", "object-key-init"),
          top: cc11001100_hook("top", "0", "object-key-init"),
          bottom: cc11001100_hook("bottom", "0", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "rgba(0, 0, 0, 0.16)", "object-key-init"),
          animationName: {
            "0%": {
              opacity: cc11001100_hook("opacity", 0, "object-key-init")
            },
            "100%": {
              opacity: cc11001100_hook("opacity", 1, "object-key-init")
            }
          },
          animationDuration: cc11001100_hook("animationDuration", "600ms", "object-key-init"),
          animationFillMode: cc11001100_hook("animationFillMode", "both", "object-key-init")
        },
        coverReplayButton: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", "0", "object-key-init"),
          right: cc11001100_hook("right", "0", "object-key-init"),
          top: cc11001100_hook("top", "0", "object-key-init"),
          bottom: cc11001100_hook("bottom", "0", "object-key-init"),
          height: cc11001100_hook("height", "40px", "object-key-init"),
          width: cc11001100_hook("width", "116px", "object-key-init"),
          margin: cc11001100_hook("margin", "auto", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "rgba(0, 0, 0, 0.5)", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", "4px", "object-key-init"),
          color: cc11001100_hook("color", "#fff", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", "16px", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", "24px", "object-key-init"),
          padding: cc11001100_hook("padding", "8px", "object-key-init"),
          boxSizing: cc11001100_hook("boxSizing", "border-box", "object-key-init"),
          textAlign: cc11001100_hook("textAlign", "center", "object-key-init"),
          whiteSpace: cc11001100_hook("whiteSpace", "nowrap", "object-key-init"),
          transition: cc11001100_hook("transition", "transform 200ms, opacity 200ms", "object-key-init"),
          willChange: cc11001100_hook("willChange", "transform", "object-key-init")
        },
        coverReplayButtonHovered: {
          transform: cc11001100_hook("transform", "scale(1.1)", "object-key-init")
        },
        coverReplayButtonPressed: {
          opacity: cc11001100_hook("opacity", .7, "object-key-init")
        },
        replayIcon: {
          verticalAlign: cc11001100_hook("verticalAlign", "top", "object-key-init"),
          marginRight: cc11001100_hook("marginRight", "4px", "object-key-init")
        },
        error: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          right: cc11001100_hook("right", 0, "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
          display: cc11001100_hook("display", "flex", "object-key-init"),
          flexDirection: cc11001100_hook("flexDirection", "column", "object-key-init"),
          justifyContent: cc11001100_hook("justifyContent", "center", "object-key-init"),
          color: cc11001100_hook("color", "#fff", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "#000", "object-key-init")
        },
        errorIcon: {
          width: cc11001100_hook("width", "2.5em", "object-key-init"),
          height: cc11001100_hook("height", "2.5em", "object-key-init"),
          margin: cc11001100_hook("margin", "0 auto", "object-key-init"),
          fill: cc11001100_hook("fill", "currentColor", "object-key-init")
        },
        errorMessage: {
          marginTop: cc11001100_hook("marginTop", "1em", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", "1.25em", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", 1, "object-key-init"),
          textAlign: cc11001100_hook("textAlign", "center", "object-key-init")
        }
      }), "var-init"),
      ge = cc11001100_hook("ge", b.StyleSheet.create({
        base: {
          transition: cc11001100_hook("transition", "opacity .5s ease-in-out, visibility .5s ease-in-out", "object-key-init")
        },
        hidden: {
          opacity: cc11001100_hook("opacity", 0, "object-key-init"),
          visibility: cc11001100_hook("visibility", "hidden", "object-key-init")
        },
        shown: {
          opacity: cc11001100_hook("opacity", 1, "object-key-init"),
          visibility: cc11001100_hook("visibility", "visible", "object-key-init")
        }
      }), "var-init"),
      ye = cc11001100_hook("ye", b.StyleSheet.create({
        root: {
          display: cc11001100_hook("display", "inline-block", "object-key-init"),
          width: cc11001100_hook("width", "1.5em", "object-key-init"),
          height: cc11001100_hook("height", "1.5em", "object-key-init")
        },
        svg: {
          display: cc11001100_hook("display", "block", "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          fill: cc11001100_hook("fill", "currentColor", "object-key-init")
        }
      }), "var-init");
    function Ee(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.icon, "var-init"),
        n = cc11001100_hook("n", e.styles, "var-init"),
        o = cc11001100_hook("o", (0, P.cloneElement)(t, {
          className: cc11001100_hook("className", (0, b.css)(ye.svg), "object-key-init")
        }), "var-init");
      return k().createElement("span", {
        className: cc11001100_hook("className", (0, b.css)(ye.root, n), "object-key-init")
      }, o);
    }
    var be = cc11001100_hook("be", (0, P.createContext)(void 0), "var-init"),
      Ce = cc11001100_hook("Ce", (0, P.createContext)(function () {}), "var-init"),
      Le = function () {
        return (0, P.useContext)(Ce);
      },
      Se = function (e) {
        var t = cc11001100_hook("t", e.children, "var-init"),
          n = cc11001100_hook("n", (0, P.useState)(), "var-init"),
          o = cc11001100_hook("o", B(u(), n, 2), "var-init"),
          r = cc11001100_hook("r", o[0], "var-init"),
          a = cc11001100_hook("a", o[1], "var-init"),
          i = cc11001100_hook("i", (0, P.useRef)(0), "var-init"),
          l = cc11001100_hook("l", (0, P.useCallback)(function (e) {
            i.current += cc11001100_hook("i.current", 1, "assign"), a(Object.assign(Object.assign({}, e), {
              key: cc11001100_hook("key", String(i.current), "object-key-init")
            }));
          }, []), "var-init");
        return k().createElement(be.Provider, {
          value: cc11001100_hook("value", r, "object-key-init")
        }, k().createElement(Ce.Provider, {
          value: cc11001100_hook("value", l, "object-key-init")
        }, t));
      },
      Pe = cc11001100_hook("Pe", k().memo(function () {
        var e = cc11001100_hook("e", (0, P.useContext)(be), "var-init");
        if (!e) return null;
        var t = cc11001100_hook("t", e.key, "var-init"),
          n = cc11001100_hook("n", e.icon, "var-init"),
          o = cc11001100_hook("o", e.label, "var-init");
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.action, pe.actionToast), "object-key-init"),
          key: cc11001100_hook("key", t, "object-key-init")
        }, k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.actionButton, pe.actionButtonAnimated), "object-key-init")
        }, n && k().createElement(Ee, {
          icon: cc11001100_hook("icon", n, "object-key-init"),
          styles: cc11001100_hook("styles", pe.actionIcon, "object-key-init")
        })), o && k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.actionLabel, pe.actionLabelAnimation), "object-key-init")
        }, o));
      }), "var-init"),
      ke = cc11001100_hook("ke", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M19.7180574,15 C20.1638168,15 20.3254599,15.0464128 20.4884229,15.1335664 C20.6513858,15.2207199 20.7792801,15.3486142 20.8664336,15.5115771 C20.9535872,15.6745401 21,15.8361832 21,16.2819426 L21,19.7180574 C21,20.1638168 20.9535872,20.3254599 20.8664336,20.4884229 C20.7792801,20.6513858 20.6513858,20.7792801 20.4884229,20.8664336 C20.3254599,20.9535872 20.1638168,21 19.7180574,21 L16.2819426,21 C15.8361832,21 15.6745401,20.9535872 15.5115771,20.8664336 C15.3486142,20.7792801 15.2207199,20.6513858 15.1335664,20.4884229 C15.0464128,20.3254599 15,20.1638168 15,19.7180574 L15,16.2819426 C15,15.8361832 15.0464128,15.6745401 15.1335664,15.5115771 C15.2207199,15.3486142 15.3486142,15.2207199 15.5115771,15.1335664 C15.6745401,15.0464128 15.8361832,15 16.2819426,15 L19.7180574,15 Z M18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,11.75 C20,11.8880712 19.8880712,12 19.75,12 L18.25,12 C18.1119288,12 18,11.8880712 18,11.75 L18,6.5 C18,6.24358208 17.8069799,6.03224642 17.5583106,6.00336387 L17.5,6 L6.5,6 C6.24358208,6 6.03224642,6.1930201 6.00336387,6.44168944 L6,6.5 L6,17.5 C6,17.7564179 6.1930201,17.9677536 6.44168944,17.9966361 L6.5,18 L11.75,18 C11.8880712,18 12,18.1119288 12,18.25 L12,19.75 C12,19.8880712 11.8880712,20 11.75,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 L18.5,4 Z M12.263324,13.6777091 L9.53508966,10.956021 L9.55615206,13.2225752 C9.55502994,13.3470231 9.46566931,13.4482773 9.34885743,13.4683645 L9.30388492,13.4719793 L7.79658322,13.4583417 C7.67542934,13.4572455 7.57490537,13.3702653 7.5531943,13.2554476 L7.54886064,13.2111995 L7.49923911,7.74790313 C7.50035209,7.62546574 7.5897117,7.52443494 7.70652348,7.50437256 L7.75149597,7.50076089 L13.2230869,7.55026617 C13.3442408,7.55136234 13.4447648,7.6383426 13.4664758,7.75316028 L13.4708095,7.79740841 L13.4844791,9.30570263 C13.4833661,9.42814002 13.3940065,9.52917082 13.2771947,9.5492332 L13.2322222,9.55284487 L10.9362217,9.53206969 L13.6775376,12.2668086 C13.7751687,12.364211 13.7751687,12.5221314 13.6775376,12.6195338 L12.6168774,13.6777091 C12.5192463,13.7751115 12.3609551,13.7751115 12.263324,13.6777091 Z", "object-key-init")
      })), "var-init"),
      we = cc11001100_hook("we", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M20,10 L20,5 C20,4.44771525 19.5490248,4 19.009222,4 L14,4 L14,6 L18,6 L18,10 L20,10 Z M19.7115371,19.7068284 C19.8902571,19.5277733 20,19.2813055 20,19.009222 L20,14 L18,14 L18,18 L14,18 L14,20 L19.009222,20 C19.2776249,20 19.5240668,19.8893106 19.7040291,19.7101145 L19.7115371,19.7068284 Z M6,18 L6,14 L4,14 L4,19.009222 C4,19.2813055 4.10974288,19.5277733 4.28846285,19.7068284 C4.47593315,19.8893106 4.72237506,20 4.99077797,20 L10,20 L10,18 L6,18 Z M4.28846285,4.29317155 C4.10974288,4.47222673 4,4.71869448 4,4.99077797 L4,10 L6,10 L6,6 L10,6 L10,4 L4.99077797,4 C4.72237506,4 4.47593315,4.11068941 4.29597088,4.28988548 L4.28846285,4.29317155 Z", "object-key-init")
      })), "var-init"),
      xe = cc11001100_hook("xe", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M7.38001507,9.5 L5,9.5 L5,12.0119396 L5,14.5238791 L8.33098415,14.5238791 L8.33098415,14.5238791 C8.39017333,14.520451 8.4497727,14.5223174 8.50904598,14.5296109 C8.72475585,14.5524598 8.91816198,14.6424266 9.06920843,14.7779841 L13,17.4293365 L13,15.1199849 L7.38001507,9.5 Z M15,17.1199849 L15,19.251289 C15,19.8045373 14.5522847,20.25 14,20.25 C13.98423,20.25 13.9685502,20.2496405 13.9529683,20.2489292 C13.7472793,20.2584936 13.5372091,20.2041245 13.3535806,20.0802655 L8.08102098,16.5238791 L4.00000001,16.5238791 C3.71994909,16.5238791 3.46994918,16.4119504 3.29196292,16.2310404 C3.11117675,16.0497507 3,15.7991447 3,15.5223056 L3,12.0119396 L3,8.50157356 C3,8.2247344 3.11117675,7.97412842 3.29196292,7.79283868 C3.46994918,7.61192872 3.71994909,7.5 4.00000001,7.5 L5.38001507,7.5 L3.38382011,5.50380504 C2.99233448,5.1123194 2.98883249,4.48109777 3.38207944,4.08785081 C3.77260374,3.69732652 4.3999302,3.691488 4.79803367,4.08959148 L18.936688,18.2282458 C19.3281736,18.6197314 19.3316756,19.250953 18.9384286,19.6442 C18.5479043,20.0347243 17.9205779,20.0405628 17.5224744,19.6424593 L15,17.1199849 Z M10.792179,8.08373676 L9.35149599,6.64305379 L13.3535806,3.94361361 C13.5372091,3.81975463 13.7472793,3.76538554 13.9529683,3.77494994 C13.9685502,3.77423867 13.98423,3.77387913 14,3.77387913 C14.5522847,3.77387913 15,4.21934183 15,4.77259008 L15,12.0119396 L15,12.2915578 L13,10.2915578 L13,6.59454265 L10.792179,8.08373676 Z M18.0173138,15.3088716 C18.8917509,14.408489 19.4301566,13.1799808 19.4301566,11.8257212 C19.4301566,10.2214787 18.6746368,8.79369726 17.5,7.87877967 L17.5067574,7.87009164 C17.2041341,7.69816923 17,7.37292366 17,7 C17,6.44771525 17.4477153,6 18,6 C18.2836948,6 18.5397977,6.11813499 18.721799,6.30789526 L18.7279374,6.30000305 C20.3724289,7.58088767 21.4301566,9.57978168 21.4301566,11.8257212 C21.4301566,13.7322659 20.6679517,15.4607882 19.431636,16.7231938 L18.0173138,15.3088716 Z", "object-key-init")
      })), "var-init"),
      Re = cc11001100_hook("Re", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M9,5 C10,5 10,6 10,6 C10,6 10,17 10,18 C10,19 9,19 9,19 L7,19 C6,19 6,18 6,18 L6,6 C6,5 7,5 7,5 C7,5 8,5 9,5 Z M17,5 C18,5 18,6 18,6 C18,6 18,17 18,18 C18,19 17,19 17,19 L15,19 C14,19 14,18 14,18 L14,6 C14,5 15,5 15,5 C15,5 16,5 17,5 Z", "object-key-init")
      })), "var-init"),
      Me = cc11001100_hook("Me", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M19.7180574,15 C20.1638168,15 20.3254599,15.0464128 20.4884229,15.1335664 C20.6513858,15.2207199 20.7792801,15.3486142 20.8664336,15.5115771 C20.9535872,15.6745401 21,15.8361832 21,16.2819426 L21,19.7180574 C21,20.1638168 20.9535872,20.3254599 20.8664336,20.4884229 C20.7792801,20.6513858 20.6513858,20.7792801 20.4884229,20.8664336 C20.3254599,20.9535872 20.1638168,21 19.7180574,21 L16.2819426,21 C15.8361832,21 15.6745401,20.9535872 15.5115771,20.8664336 C15.3486142,20.7792801 15.2207199,20.6513858 15.1335664,20.4884229 C15.0464128,20.3254599 15,20.1638168 15,19.7180574 L15,16.2819426 C15,15.8361832 15.0464128,15.6745401 15.1335664,15.5115771 C15.2207199,15.3486142 15.3486142,15.2207199 15.5115771,15.1335664 C15.6745401,15.0464128 15.8361832,15 16.2819426,15 L19.7180574,15 Z M18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,11.75 C20,11.8880712 19.8880712,12 19.75,12 L18.25,12 C18.1119288,12 18,11.8880712 18,11.75 L18,6.5 C18,6.24358208 17.8069799,6.03224642 17.5583106,6.00336387 L17.5,6 L6.5,6 C6.24358208,6 6.03224642,6.1930201 6.00336387,6.44168944 L6,6.5 L6,17.5 C6,17.7564179 6.1930201,17.9677536 6.44168944,17.9966361 L6.5,18 L11.75,18 C11.8880712,18 12,18.1119288 12,18.25 L12,19.75 C12,19.8880712 11.8880712,20 11.75,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,5.5 C4,4.67157288 4.67157288,4 5.5,4 L18.5,4 Z M8.98667598,7.57381266 L11.7149103,10.2955008 L11.6938479,8.02894655 C11.6949701,7.90449864 11.7843307,7.80324445 11.9011426,7.78315725 L11.9461151,7.77954248 L13.4534168,7.79318008 C13.5745707,7.79427625 13.6750946,7.88125651 13.6968057,7.99607419 L13.7011394,8.04032232 L13.7507609,13.5036187 C13.7496479,13.626056 13.6602883,13.7270868 13.5434765,13.7471492 L13.498504,13.7507609 L8.0269131,13.7012556 C7.90575922,13.7001594 7.80523525,13.6131792 7.78352418,13.4983615 L7.77919052,13.4541134 L7.76552089,11.9458192 C7.76663388,11.8233818 7.85599349,11.722351 7.97280526,11.7022886 L8.01777775,11.6986769 L10.3137783,11.7194521 L7.57246241,8.98471315 C7.47483134,8.8873108 7.47483134,8.72939038 7.57246241,8.63198803 L8.63312259,7.57381266 C8.73075366,7.4764103 8.8890449,7.4764103 8.98667598,7.57381266 Z", "object-key-init")
      })), "var-init"),
      Fe = cc11001100_hook("Fe", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M8.03610236,19.7012935 C6.93281899,20.3993842 6,19.8347521 6,18.4154722 L6,5.59575582 C6,4.14567779 6.91151094,3.59901121 8.03610236,4.30993442 L18.1645278,10.7185093 C19.2678112,11.4166 19.2891193,12.5817954 18.1645278,13.2927186 L8.03610236,19.7012935 Z", "object-key-init")
      })), "var-init"),
      Te = cc11001100_hook("Te", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M14.2884629,14.2931716 C14.1097429,14.4722267 14,14.7186945 14,14.990778 L14,20 L16,20 L16,16 L20,16 L20,14 L14.990778,14 C14.7223751,14 14.4759332,14.1106894 14.2959709,14.2898855 L14.2884629,14.2931716 Z M16,8 L16,4 L14,4 L14,9.00922203 C14,9.28130552 14.1097429,9.52777327 14.2884629,9.70682845 C14.4759332,9.88931059 14.7223751,10 14.990778,10 L20,10 L20,8 L16,8 Z M8,16 L8,20 L10,20 L10,14.990778 C10,14.7186945 9.89025712,14.4722267 9.71153715,14.2931716 C9.52406685,14.1106894 9.27762494,14 9.00922203,14 L4,14 L4,16 L8,16 L8,16 Z M9.71153715,9.70682845 C9.89025712,9.52777327 10,9.28130552 10,9.00922203 L10,4 L8,4 L8,8 L4,8 L4,10 L9.00922203,10 C9.27762494,10 9.52406685,9.88931059 9.70402912,9.71011452 L9.71153715,9.70682845 Z", "object-key-init")
      })), "var-init"),
      Ne = cc11001100_hook("Ne", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M5,12.0119396 L5,14.5238791 L8.33098415,14.5238791 L8.33098415,14.5238791 C8.39017333,14.520451 8.4497727,14.5223174 8.50904598,14.5296109 C8.72475585,14.5524598 8.91816198,14.6424266 9.06920843,14.7779841 L13,17.4293365 L13,12.0119396 L13,6.59454265 L9.06920843,9.24589504 C8.91816198,9.38145255 8.72475585,9.47141933 8.50904598,9.49426822 C8.4497727,9.50156175 8.39017333,9.5034281 8.33098415,9.5 L8.33098415,9.5 L5,9.5 L5,12.0119396 Z M3,12.0119396 L3,8.50157356 C3,8.2247344 3.11117675,7.97412842 3.29196292,7.79283868 C3.46994918,7.61192872 3.71994909,7.5 4.00000001,7.5 L8.08102098,7.5 L13.3535806,3.94361361 C13.5372091,3.81975463 13.7472793,3.76538554 13.9529683,3.77494994 C13.9685502,3.77423867 13.98423,3.77387913 14,3.77387913 C14.5522847,3.77387913 15,4.21934183 15,4.77259008 L15,12.0119396 L15,19.251289 C15,19.8045373 14.5522847,20.25 14,20.25 C13.98423,20.25 13.9685502,20.2496405 13.9529683,20.2489292 C13.7472793,20.2584936 13.5372091,20.2041245 13.3535806,20.0802655 L8.08102098,16.5238791 L4.00000001,16.5238791 C3.71994909,16.5238791 3.46994918,16.4119504 3.29196292,16.2310404 C3.11117675,16.0497507 3,15.7991447 3,15.5223056 L3,12.0119396 Z M17.5059844,15.7803571 L17.5,15.7726628 C18.6746368,14.8577452 19.4301566,13.4299638 19.4301566,11.8257212 C19.4301566,10.2214787 18.6746368,8.79369726 17.5,7.87877967 L17.5067574,7.87009164 C17.2041341,7.69816923 17,7.37292366 17,7 C17,6.44771525 17.4477153,6 18,6 C18.2836948,6 18.5397977,6.11813499 18.721799,6.30789526 L18.7279374,6.30000305 C20.3724289,7.58088767 21.4301566,9.57978168 21.4301566,11.8257212 C21.4301566,14.0716608 20.3724289,16.0705548 18.7279374,17.3514394 L18.7211832,17.3427554 C18.5392202,17.5321404 18.283375,17.6500092 18,17.6500092 C17.4477153,17.6500092 17,17.2022939 17,16.6500092 C17,16.2774031 17.2037866,15.9523939 17.5059844,15.7803571 L17.5059844,15.7803571 Z", "object-key-init")
      })), "var-init"),
      De = cc11001100_hook("De", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 -4 16 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M15.9964 0.207284C15.9763 0.0904726 15.8753 0.00111298 15.7529 0L10.2896 0.0496215L10.2453 0.0539552C10.1305 0.0756663 10.0435 0.17619 10.0424 0.297344L10.0288 1.80465L10.0324 1.84962C10.0525 1.96643 10.1537 2.05579 10.2782 2.05691L12.5447 2.03585L9.82305 4.76408C9.72565 4.86172 9.72565 5.02001 9.82305 5.11764L10.8812 6.1783C10.9786 6.27593 11.1365 6.27593 11.234 6.1783L13.9687 3.43698L13.9479 5.73298L13.9515 5.77796C13.9716 5.89477 14.0726 5.98413 14.1951 5.98524L15.7034 5.97157L15.7476 5.96724C15.8624 5.94553 15.9494 5.845 15.9505 5.72385L16 0.252257L15.9964 0.207284ZM0.00361156 15.7942C0.0236739 15.911 0.124705 16.0004 0.247142 16.0015L5.71044 15.9519L5.75469 15.9476C5.8695 15.9259 5.95648 15.8253 5.95758 15.7042L5.97122 14.1969L5.9676 14.1519C5.94752 14.0351 5.84626 13.9457 5.72181 13.9446L3.45526 13.9657L6.17695 11.2374C6.27435 11.1398 6.27435 10.9815 6.17695 10.8839L5.11877 9.82322C5.02137 9.72559 4.86345 9.72559 4.76605 9.82322L2.03131 12.5645L2.05208 10.2685L2.04847 10.2236C2.02841 10.1068 1.92738 10.0174 1.80494 10.0163L0.296648 10.03L0.252399 10.0343C0.137582 10.056 0.0506014 10.1565 0.0495052 10.2777L0 15.7493L0.00361156 15.7942Z", "object-key-init")
      })), "var-init"),
      Ae = cc11001100_hook("Ae", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 -4 16 24", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M9.75361 6.04424C9.77367 6.16105 9.87471 6.25041 9.99714 6.25152L15.4604 6.2019L15.5047 6.19757C15.6195 6.17586 15.7065 6.07533 15.7076 5.95418L15.7212 4.44688L15.7176 4.4019C15.6975 4.28509 15.5963 4.19573 15.4718 4.19461L13.2053 4.21567L15.9269 1.48744C16.0244 1.38981 16.0244 1.23151 15.9269 1.13388L14.8688 0.0732233C14.7714 -0.0244078 14.6135 -0.0244078 14.516 0.0732233L11.7813 2.81454L11.8021 0.518539L11.7985 0.473566C11.7784 0.356754 11.6774 0.267395 11.5549 0.266282L10.0466 0.279951L10.0024 0.284285C9.88758 0.305996 9.8006 0.40652 9.79951 0.527674L9.75 5.99926L9.75361 6.04424ZM6.24639 9.95728C6.22633 9.84047 6.1253 9.75111 6.00286 9.75L0.539561 9.79962L0.495313 9.80396C0.380496 9.82567 0.293515 9.92619 0.292419 10.0473L0.278782 11.5546L0.282396 11.5996C0.302484 11.7164 0.403738 11.8058 0.528186 11.8069L2.79474 11.7859L0.0730518 14.5141C-0.0243506 14.6117 -0.0243506 14.77 0.0730518 14.8676L1.13123 15.9283C1.22863 16.0259 1.38655 16.0259 1.48395 15.9283L4.21869 13.187L4.19792 15.483L4.20153 15.528C4.22159 15.6448 4.32262 15.7341 4.44506 15.7352L5.95335 15.7216L5.9976 15.7172C6.11242 15.6955 6.1994 15.595 6.20049 15.4738L6.25 10.0023L6.24639 9.95728Z", "object-key-init")
      })), "var-init"),
      Oe = cc11001100_hook("Oe", b.StyleSheet.create({
        root: {
          padding: cc11001100_hook("padding", "0 0.5em", "object-key-init")
        },
        rootTop: {
          height: cc11001100_hook("height", "2em", "object-key-init")
        },
        rootBottom: {
          height: cc11001100_hook("height", "2.5em", "object-key-init"),
          display: cc11001100_hook("display", "flex", "object-key-init"),
          alignItems: cc11001100_hook("alignItems", "center", "object-key-init"),
          justifyContent: cc11001100_hook("justifyContent", "space-between", "object-key-init")
        },
        rootBottomLeft: {
          display: cc11001100_hook("display", "flex", "object-key-init")
        },
        rootBottomRight: {
          display: cc11001100_hook("display", "flex", "object-key-init")
        },
        button: {
          display: cc11001100_hook("display", "block", "object-key-init"),
          width: cc11001100_hook("width", "2.5em", "object-key-init"),
          height: cc11001100_hook("height", "2.5em", "object-key-init"),
          margin: cc11001100_hook("margin", 0, "object-key-init"),
          padding: cc11001100_hook("padding", "0.5em", "object-key-init"),
          border: cc11001100_hook("border", "none", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", 0, "object-key-init"),
          fontSize: cc11001100_hook("fontSize", "inherit", "object-key-init"),
          color: cc11001100_hook("color", "rgba(255, 255, 255, 0.7)", "object-key-init"),
          background: cc11001100_hook("background", "none", "object-key-init"),
          cursor: cc11001100_hook("cursor", "pointer", "object-key-init"),
          transition: cc11001100_hook("transition", "color 300ms", "object-key-init"),
          ":hover": {
            color: cc11001100_hook("color", "#fff", "object-key-init")
          },
          ":focus": {
            outline: cc11001100_hook("outline", "none", "object-key-init")
          }
        },
        menuContainer: {
          position: cc11001100_hook("position", "relative", "object-key-init")
        },
        menu: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          left: cc11001100_hook("left", "50%", "object-key-init"),
          bottom: cc11001100_hook("bottom", "100%", "object-key-init"),
          visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
          opacity: cc11001100_hook("opacity", 0, "object-key-init"),
          transform: cc11001100_hook("transform", "translateX(-50%)", "object-key-init"),
          transition: cc11001100_hook("transition", "visibility 300ms, opacity 300ms", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "rgba(0, 0, 0, 0.5)", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", "4px", "object-key-init")
        },
        menuShown: {
          visibility: cc11001100_hook("visibility", "visible", "object-key-init"),
          opacity: cc11001100_hook("opacity", 1, "object-key-init")
        },
        timeline: {
          flex: cc11001100_hook("flex", 1, "object-key-init")
        },
        timelineHolder: {
          flex: cc11001100_hook("flex", 1, "object-key-init")
        },
        time: {
          display: cc11001100_hook("display", "flex", "object-key-init"),
          alignItems: cc11001100_hook("alignItems", "center", "object-key-init"),
          justifyContent: cc11001100_hook("justifyContent", "center", "object-key-init"),
          padding: cc11001100_hook("padding", "0 0.5em", "object-key-init"),
          minWidth: cc11001100_hook("minWidth", "100px", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", "0.875em", "object-key-init"),
          color: cc11001100_hook("color", "rgba(255, 255, 255, 0.9)", "object-key-init"),
          boxSizing: cc11001100_hook("boxSizing", "content-box", "object-key-init"),
          fontVariantNumeric: cc11001100_hook("fontVariantNumeric", "tabular-nums", "object-key-init")
        },
        labelButton: {
          width: cc11001100_hook("width", "auto", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", 1.5, "object-key-init")
        },
        labelButtonText: {
          fontSize: cc11001100_hook("fontSize", "0.875em", "object-key-init")
        },
        qualityMenu: {
          padding: cc11001100_hook("padding", "0.25em 0", "object-key-init")
        },
        qualityMenuItem: {
          display: cc11001100_hook("display", "block", "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          boxSizing: cc11001100_hook("boxSizing", "border-box", "object-key-init"),
          height: cc11001100_hook("height", "2em", "object-key-init"),
          margin: cc11001100_hook("margin", 0, "object-key-init"),
          padding: cc11001100_hook("padding", "0 0.75em", "object-key-init"),
          border: cc11001100_hook("border", "none", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", 0, "object-key-init"),
          fontSize: cc11001100_hook("fontSize", "0.875em", "object-key-init"),
          lineHeight: cc11001100_hook("lineHeight", 2, "object-key-init"),
          whiteSpace: cc11001100_hook("whiteSpace", "nowrap", "object-key-init"),
          color: cc11001100_hook("color", "rgba(255, 255, 255, 0.5)", "object-key-init"),
          background: cc11001100_hook("background", "none", "object-key-init"),
          cursor: cc11001100_hook("cursor", "pointer", "object-key-init"),
          transition: cc11001100_hook("transition", "color 300ms, background-color 300ms", "object-key-init"),
          ":hover": {
            backgroundColor: cc11001100_hook("backgroundColor", "rgba(255, 255, 255, 0.2)", "object-key-init")
          },
          ":focus": {
            outline: cc11001100_hook("outline", "none", "object-key-init")
          }
        },
        qualityMenuActiveItem: {
          color: cc11001100_hook("color", "#fff", "object-key-init")
        },
        fullScreenedTime: {
          width: cc11001100_hook("width", "150px", "object-key-init")
        },
        tooltipContent: {
          pointerEvents: cc11001100_hook("pointerEvents", "none", "object-key-init"),
          padding: cc11001100_hook("padding", "0.25em 0.5em", "object-key-init"),
          fontSize: cc11001100_hook("fontSize", "0.875em", "object-key-init"),
          whiteSpace: cc11001100_hook("whiteSpace", "nowrap", "object-key-init"),
          color: cc11001100_hook("color", "#fff", "object-key-init")
        }
      }), "var-init"),
      Ie = function (e) {
        var t = cc11001100_hook("t", e.icon, "var-init"),
          n = cc11001100_hook("n", e.label, "var-init"),
          o = cc11001100_hook("o", H(e, ["icon", "label"]), "var-init");
        return k().createElement("button", Object.assign({}, o, {
          className: cc11001100_hook("className", (0, b.css)(Oe.button, n ? Oe.labelButton : null), "object-key-init"),
          type: cc11001100_hook("type", "button", "object-key-init")
        }), t && k().createElement(Ee, {
          icon: cc11001100_hook("icon", t, "object-key-init")
        }), n && k().createElement("span", {
          className: cc11001100_hook("className", (0, b.css)(Oe.labelButtonText), "object-key-init")
        }, n));
      },
      Be = cc11001100_hook("Be", "undefined" != typeof document && "ontouchstart" in document.documentElement, "var-init"),
      _e = function (e) {
        var t = cc11001100_hook("t", e.localeKey, "var-init"),
          n = cc11001100_hook("n", e.hotkey, "var-init"),
          o = cc11001100_hook("o", e.children, "var-init"),
          r = cc11001100_hook("r", U(t), "var-init"),
          a = cc11001100_hook("a", ue(), "var-init"),
          i = cc11001100_hook("i", B(u(), a, 2), "var-init"),
          l = cc11001100_hook("l", i[0], "var-init"),
          c = cc11001100_hook("c", i[1], "var-init");
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(Oe.menuContainer), "object-key-init"),
          onMouseEnter: cc11001100_hook("onMouseEnter", c.on, "object-key-init"),
          onMouseLeave: cc11001100_hook("onMouseLeave", c.off, "object-key-init")
        }, (0, P.cloneElement)(o, {
          "aria-label": cc11001100_hook("aria-label", r, "object-key-init")
        }), !Be && k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(Oe.menu, l && Oe.menuShown, Oe.tooltipContent), "object-key-init")
        }, r, n && " (".concat(n, ")")));
      },
      He = function (e) {
        var t = cc11001100_hook("t", e.isPlaying, "var-init"),
          n = cc11001100_hook("n", e.onClick, "var-init");
        return k().createElement(_e, {
          localeKey: cc11001100_hook("localeKey", t ? "pause" : "play", "object-key-init"),
          hotkey: cc11001100_hook("hotkey", "k", "object-key-init")
        }, k().createElement(Ie, {
          icon: cc11001100_hook("icon", t ? Re : Fe, "object-key-init"),
          onClick: cc11001100_hook("onClick", n, "object-key-init")
        }));
      };
    function Qe(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return t ? "".concat(100 * D()(e / t, 0, 1), "%") : "0%";
    }
    var qe = cc11001100_hook("qe", b.StyleSheet.create({
        root: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          display: cc11001100_hook("display", "flex", "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init")
        },
        item: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          width: cc11001100_hook("width", 12, "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          transform: cc11001100_hook("transform", "translate(-50%)", "object-key-init"),
          ":hover": {
            height: cc11001100_hook("height", 6, "object-key-init"),
            top: cc11001100_hook("top", -1, "object-key-init")
          }
        },
        innerItem: {
          width: cc11001100_hook("width", 6, "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "#ff9607", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          margin: cc11001100_hook("margin", "0 auto", "object-key-init")
        }
      }), "var-init"),
      Ue = function (e) {
        var t = cc11001100_hook("t", e.startTime, "var-init"),
          n = cc11001100_hook("n", e.total, "var-init"),
          o = cc11001100_hook("o", e.onProgressDotHover, "var-init"),
          r = cc11001100_hook("r", e.onProgressDotLeave, "var-init"),
          a = cc11001100_hook("a", (0, P.useRef)(null), "var-init");
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(qe.item), "object-key-init"),
          style: {
            left: cc11001100_hook("left", Qe(t, n), "object-key-init")
          },
          onMouseEnter: function () {
            if (a.current) {
              var e = cc11001100_hook("e", a.current.getBoundingClientRect(), "var-init"),
                n = cc11001100_hook("n", e.left, "var-init"),
                r = cc11001100_hook("r", e.top, "var-init");
              null == o || o({
                startTime: cc11001100_hook("startTime", t, "object-key-init"),
                left: cc11001100_hook("left", n, "object-key-init"),
                top: cc11001100_hook("top", r, "object-key-init")
              });
            }
          },
          onMouseLeave: cc11001100_hook("onMouseLeave", r, "object-key-init")
        }, k().createElement("div", {
          ref: cc11001100_hook("ref", a, "object-key-init"),
          className: cc11001100_hook("className", (0, b.css)(qe.innerItem), "object-key-init")
        }));
      },
      je = function (e) {
        var t = cc11001100_hook("t", e.progressDots, "var-init"),
          n = cc11001100_hook("n", void 0 === t ? [] : t, "var-init"),
          o = cc11001100_hook("o", e.total, "var-init"),
          r = cc11001100_hook("r", e.onProgressDotHover, "var-init"),
          a = cc11001100_hook("a", e.onProgressDotLeave, "var-init");
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(qe.root), "object-key-init")
        }, n.map(function (e, t) {
          return k().createElement(Ue, {
            key: cc11001100_hook("key", t, "object-key-init"),
            startTime: cc11001100_hook("startTime", e.startTime, "object-key-init"),
            total: cc11001100_hook("total", o, "object-key-init"),
            onProgressDotHover: cc11001100_hook("onProgressDotHover", r, "object-key-init"),
            onProgressDotLeave: cc11001100_hook("onProgressDotLeave", a, "object-key-init")
          });
        }));
      },
      We = cc11001100_hook("We", b.StyleSheet.create({
        root: {
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
          userSelect: cc11001100_hook("userSelect", "none", "object-key-init"),
          cursor: cc11001100_hook("cursor", "pointer", "object-key-init"),
          touchAction: cc11001100_hook("touchAction", "none", "object-key-init"),
          WebkitTapHighlightColor: cc11001100_hook("WebkitTapHighlightColor", "transparent", "object-key-init"),
          ":focus": {
            outline: cc11001100_hook("outline", "none", "object-key-init")
          }
        },
        inner: {
          position: cc11001100_hook("position", "relative", "object-key-init"),
          display: cc11001100_hook("display", "flex", "object-key-init"),
          alignItems: cc11001100_hook("alignItems", "center", "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init")
        },
        track: {
          position: cc11001100_hook("position", "relative", "object-key-init"),
          flex: cc11001100_hook("flex", 1, "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "rgba(255, 255, 255, 0.3)", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", "2px", "object-key-init")
        },
        bar: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "#fff", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", "2px 0 0 2px", "object-key-init")
        },
        thumbWrapper: {
          position: cc11001100_hook("position", "absolute", "object-key-init")
        },
        thumb: {
          width: cc11001100_hook("width", "1em", "object-key-init"),
          height: cc11001100_hook("height", "1em", "object-key-init"),
          margin: cc11001100_hook("margin", "-0.5em", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", "50%", "object-key-init"),
          backgroundColor: cc11001100_hook("backgroundColor", "#fff", "object-key-init")
        }
      }), "var-init"),
      Ze = cc11001100_hook("Ze", b.StyleSheet.create({
        root: {
          height: cc11001100_hook("height", "1em", "object-key-init"),
          padding: cc11001100_hook("padding", "0 0.5em", "object-key-init")
        },
        inner: {
          flexDirection: cc11001100_hook("flexDirection", "row", "object-key-init")
        },
        track: {
          height: cc11001100_hook("height", 4, "object-key-init")
        },
        bar: {
          top: cc11001100_hook("top", 0, "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init")
        },
        thumbWrapper: {
          top: cc11001100_hook("top", "50%", "object-key-init")
        }
      }), "var-init"),
      ze = cc11001100_hook("ze", b.StyleSheet.create({
        root: {
          width: cc11001100_hook("width", "1em", "object-key-init"),
          padding: cc11001100_hook("padding", "0.5em 0", "object-key-init")
        },
        inner: {
          flexDirection: cc11001100_hook("flexDirection", "column", "object-key-init")
        },
        track: {
          width: cc11001100_hook("width", 4, "object-key-init")
        },
        bar: {
          left: cc11001100_hook("left", 0, "object-key-init"),
          right: cc11001100_hook("right", 0, "object-key-init")
        },
        thumbWrapper: {
          left: cc11001100_hook("left", "50%", "object-key-init")
        }
      }), "var-init"),
      Ve = function (e, t) {
        return t ? D()(e / t, 0, 1) : 0;
      };
    function Ye(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.orientation, "var-init"),
        n = cc11001100_hook("n", e.reverse, "var-init"),
        o = cc11001100_hook("o", e.onFocus, "var-init"),
        a = cc11001100_hook("a", e.onBlur, "var-init"),
        l = cc11001100_hook("l", e.onChange, "var-init"),
        c = cc11001100_hook("c", e.onDragStart, "var-init"),
        s = cc11001100_hook("s", e.onDragEnd, "var-init"),
        d = cc11001100_hook("d", e.noInteraction, "var-init"),
        f = cc11001100_hook("f", e.progressDots, "var-init"),
        m = cc11001100_hook("m", e.value, "var-init"),
        v = cc11001100_hook("v", void 0 === m ? 0 : m, "var-init"),
        h = cc11001100_hook("h", e.buffered, "var-init"),
        p = cc11001100_hook("p", void 0 === h ? 0 : h, "var-init"),
        g = cc11001100_hook("g", e.total, "var-init"),
        y = cc11001100_hook("y", void 0 === g ? 0 : g, "var-init"),
        E = cc11001100_hook("E", e.step, "var-init"),
        C = cc11001100_hook("C", void 0 === E ? 1 : E, "var-init"),
        L = cc11001100_hook("L", e.onProgressDotHover, "var-init"),
        S = cc11001100_hook("S", e.onProgressDotLeave, "var-init"),
        w = cc11001100_hook("w", function () {
          var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
            t = cc11001100_hook("t", (0, P.useState)(e), "var-init"),
            n = cc11001100_hook("n", B(u(), t, 2), "var-init"),
            o = cc11001100_hook("o", n[0], "var-init"),
            r = cc11001100_hook("r", n[1], "var-init"),
            a = cc11001100_hook("a", (0, P.useCallback)(function (e) {
              return r(function (t) {
                return Object.assign(Object.assign({}, t), e);
              });
            }, []), "var-init");
          return [o, a];
        }({
          isSlideActive: cc11001100_hook("isSlideActive", !1, "object-key-init"),
          isSliding: cc11001100_hook("isSliding", !1, "object-key-init"),
          slidingValue: cc11001100_hook("slidingValue", null, "object-key-init")
        }), "var-init"),
        x = cc11001100_hook("x", B(u(), w, 2), "var-init"),
        R = cc11001100_hook("R", x[0], "var-init"),
        M = cc11001100_hook("M", R.isSlideActive, "var-init"),
        F = cc11001100_hook("F", R.isSliding, "var-init"),
        T = cc11001100_hook("T", R.slidingValue, "var-init"),
        N = cc11001100_hook("N", x[1], "var-init"),
        A = cc11001100_hook("A", "horizontal" === t, "var-init"),
        O = cc11001100_hook("O", (0, P.useRef)(null), "var-init"),
        I = function (t) {
          var n = cc11001100_hook("n", A ? Ze : ze, "var-init"),
            o = cc11001100_hook("o", e.styles, "var-init");
          return Array.isArray(o) || (o = cc11001100_hook("o", [o], "assign")), o = cc11001100_hook("o", o.filter(Boolean), "assign"), [We[t], n[t]].concat(B(r(), o.map(function (e) {
            return e[t];
          })));
        },
        _ = function () {
          for (var e = cc11001100_hook("e", arguments.length, "var-init"), t = cc11001100_hook("t", new Array(e), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e; n++) t[n] = cc11001100_hook("t[n]", arguments[n], "assign");
          return b.css.apply(void 0, B(r(), t.map(function (e) {
            return I(e);
          })));
        },
        H = cc11001100_hook("H", A ? n ? "right" : "left" : n ? "top" : "bottom", "var-init"),
        Q = cc11001100_hook("Q", A ? "width" : "height", "var-init"),
        q = function (e) {
          var t,
            n = cc11001100_hook("n", A ? "scaleX" : "scaleY", "var-init");
          return t = cc11001100_hook("t", {}, "assign"), i()(t, Q, "100%"), i()(t, "transform", "".concat(n, "(").concat(e, ")")), i()(t, "transformOrigin", H), t;
        },
        U = function (e) {
          var t = cc11001100_hook("t", O.current, "var-init");
          if (!t) return 0;
          var o,
            r = cc11001100_hook("r", t.getBoundingClientRect(), "var-init");
          return o = cc11001100_hook("o", A ? (e.clientX - r.left) / r.width : (r.bottom - e.clientY) / r.height, "assign"), o = cc11001100_hook("o", D()(o, 0, 1), "assign"), n && (o = cc11001100_hook("o", 1 - o, "assign")), o * y;
        },
        j = cc11001100_hook("j", W(function (e) {
          var t = cc11001100_hook("t", U(e), "var-init");
          N({
            slidingValue: cc11001100_hook("slidingValue", t, "object-key-init"),
            isSliding: cc11001100_hook("isSliding", !0, "object-key-init")
          }), z(t);
        }), "var-init"),
        Z = cc11001100_hook("Z", W(function (e) {
          null == s || s(), F && z(U(e)), N({
            isSlideActive: cc11001100_hook("isSlideActive", !1, "object-key-init"),
            slidingValue: cc11001100_hook("slidingValue", null, "object-key-init"),
            isSliding: cc11001100_hook("isSliding", !1, "object-key-init")
          });
        }), "var-init");
      (0, P.useEffect)(function () {
        if (M) return document.addEventListener("mousemove", j), document.addEventListener("mouseup", Z), function () {
          document.removeEventListener("mousemove", j), document.removeEventListener("mouseup", Z);
        };
      }, [Z, j, M]);
      var z = function (e) {
          null == l || l(e);
        },
        V = cc11001100_hook("V", d ? {} : {
          tabIndex: cc11001100_hook("tabIndex", 0, "object-key-init"),
          onFocus: cc11001100_hook("onFocus", o, "object-key-init"),
          onBlur: cc11001100_hook("onBlur", a, "object-key-init"),
          onKeyDown: function (e) {
            var t = cc11001100_hook("t", 0, "var-init"),
              o = cc11001100_hook("o", !1, "var-init");
            if ("ArrowLeft" === e.key || "ArrowDown" === e.key ? (o = cc11001100_hook("o", !0, "assign"), t = cc11001100_hook("t", -1, "assign")) : "ArrowRight" !== e.key && "ArrowUp" !== e.key || (o = cc11001100_hook("o", !0, "assign"), t = cc11001100_hook("t", 1, "assign")), o) {
              e.preventDefault(), n && (t = cc11001100_hook("t", -t, "assign"));
              var r = cc11001100_hook("r", D()(v + C * t, 0, y), "var-init");
              r !== v && z(r);
            }
          },
          onMouseDown: function (e) {
            if (0 === e.button) {
              var t = cc11001100_hook("t", U(e), "var-init");
              N({
                isSlideActive: cc11001100_hook("isSlideActive", !0, "object-key-init"),
                slidingValue: cc11001100_hook("slidingValue", t, "object-key-init")
              }), null == c || c(), z(t);
            }
          }
        }, "var-init"),
        Y = cc11001100_hook("Y", Ve(M ? T : v, y), "var-init"),
        G = cc11001100_hook("G", Ve(p, y), "var-init");
      return k().createElement("div", Object.assign({
        className: cc11001100_hook("className", _("root"), "object-key-init")
      }, V, {
        role: cc11001100_hook("role", "slider", "object-key-init")
      }), k().createElement("div", {
        className: cc11001100_hook("className", _("inner"), "object-key-init")
      }, k().createElement("div", {
        ref: cc11001100_hook("ref", O, "object-key-init"),
        className: cc11001100_hook("className", _("track"), "object-key-init")
      }, Boolean(p) && k().createElement("div", {
        className: cc11001100_hook("className", _("bar", "buffered"), "object-key-init"),
        style: cc11001100_hook("style", q(G), "object-key-init")
      }), k().createElement("div", {
        className: cc11001100_hook("className", _("bar"), "object-key-init"),
        style: cc11001100_hook("style", q(Y), "object-key-init")
      }), Boolean(null == f ? void 0 : f.length) && k().createElement(je, {
        progressDots: cc11001100_hook("progressDots", f, "object-key-init"),
        total: cc11001100_hook("total", y, "object-key-init"),
        onProgressDotHover: cc11001100_hook("onProgressDotHover", L, "object-key-init"),
        onProgressDotLeave: cc11001100_hook("onProgressDotLeave", S, "object-key-init")
      })), !d && k().createElement("div", {
        className: cc11001100_hook("className", _("thumbWrapper"), "object-key-init"),
        style: cc11001100_hook("style", function (e) {
          var t,
            n = cc11001100_hook("n", A ? "translateX" : "translateY", "var-init");
          return t = cc11001100_hook("t", {}, "assign"), i()(t, Q, "100%"), i()(t, "transform", "".concat(n, "(").concat(function (e) {
            return "".concat(100 * e, "%");
          }(A ? e : 1 - e), ")")), i()(t, "transformOrigin", H), t;
        }(Y), "object-key-init")
      }, k().createElement("div", {
        className: cc11001100_hook("className", _("thumb", M && "thumbSliding"), "object-key-init")
      }))));
    }
    Ye.defaultProps = cc11001100_hook("Ye.defaultProps", {
      orientation: cc11001100_hook("orientation", "horizontal", "object-key-init"),
      reverse: cc11001100_hook("reverse", !1, "object-key-init"),
      progressDots: cc11001100_hook("progressDots", [], "object-key-init")
    }, "assign");
    var Ge = cc11001100_hook("Ge", b.StyleSheet.create({
        root: {}
      }), "var-init"),
      Ke = cc11001100_hook("Ke", b.StyleSheet.create({
        root: {},
        track: {
          transition: cc11001100_hook("transition", "transform 300ms", "object-key-init")
        },
        bar: {
          backgroundColor: cc11001100_hook("backgroundColor", "#0f88eb", "object-key-init")
        },
        thumb: {
          transform: cc11001100_hook("transform", "scale(0)", "object-key-init"),
          transition: cc11001100_hook("transition", "transform 300ms", "object-key-init")
        },
        buffered: {
          backgroundColor: cc11001100_hook("backgroundColor", "rgba(255, 255, 255, 0.6)", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", "2px 0 0 2px", "object-key-init")
        }
      }), "var-init"),
      Xe = cc11001100_hook("Xe", b.StyleSheet.create({
        thumb: {
          transform: cc11001100_hook("transform", "scale(1)", "object-key-init")
        }
      }), "var-init"),
      Je = cc11001100_hook("Je", b.StyleSheet.create({
        track: {
          overflow: cc11001100_hook("overflow", "visible", "object-key-init")
        }
      }), "var-init"),
      $e = cc11001100_hook("$e", b.StyleSheet.create({
        root: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          right: cc11001100_hook("right", 0, "object-key-init"),
          padding: cc11001100_hook("padding", 0, "object-key-init"),
          height: cc11001100_hook("height", "3px", "object-key-init")
        },
        track: {
          borderRadius: cc11001100_hook("borderRadius", 0, "object-key-init")
        },
        thumb: {
          display: cc11001100_hook("display", "none", "object-key-init")
        },
        buffered: {
          backgroundColor: cc11001100_hook("backgroundColor", "rgba(255, 255, 255, 0.3)", "object-key-init"),
          borderRadius: cc11001100_hook("borderRadius", "2px 0 0 2px", "object-key-init")
        }
      }), "var-init"),
      et = function () {
        for (var e = cc11001100_hook("e", arguments.length, "var-init"), t = cc11001100_hook("t", new Array(e), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e; n++) t[n] = cc11001100_hook("t[n]", arguments[n], "assign");
        return (0, P.useCallback)(function () {
          for (var e = cc11001100_hook("e", arguments.length, "var-init"), n = cc11001100_hook("n", new Array(e), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e; o++) n[o] = cc11001100_hook("n[o]", arguments[o], "assign");
          return t.forEach(function (e) {
            return e.apply(void 0, n);
          });
        }, []);
      },
      tt = function (e) {
        var t = cc11001100_hook("t", e.value, "var-init"),
          n = cc11001100_hook("n", e.onDragStart, "var-init"),
          o = cc11001100_hook("o", e.onDragEnd, "var-init"),
          r = cc11001100_hook("r", e.onSeek, "var-init"),
          a = cc11001100_hook("a", e.onChange, "var-init"),
          i = cc11001100_hook("i", e.onProgressDotHover, "var-init"),
          l = cc11001100_hook("l", e.onProgressDotLeave, "var-init"),
          c = cc11001100_hook("c", H(e, ["value", "onDragStart", "onDragEnd", "onSeek", "onChange", "onProgressDotHover", "onProgressDotLeave"]), "var-init"),
          s = cc11001100_hook("s", ue(), "var-init"),
          d = cc11001100_hook("d", B(u(), s, 2), "var-init"),
          f = cc11001100_hook("f", d[0], "var-init"),
          m = cc11001100_hook("m", d[1], "var-init"),
          v = cc11001100_hook("v", ue(), "var-init"),
          h = cc11001100_hook("h", B(u(), v, 2), "var-init"),
          p = cc11001100_hook("p", h[0], "var-init"),
          g = cc11001100_hook("g", h[1], "var-init"),
          y = cc11001100_hook("y", ue(), "var-init"),
          E = cc11001100_hook("E", B(u(), y, 2), "var-init"),
          C = cc11001100_hook("C", E[0], "var-init"),
          L = cc11001100_hook("L", E[1], "var-init"),
          S = cc11001100_hook("S", ue(), "var-init"),
          P = cc11001100_hook("P", B(u(), S, 2), "var-init"),
          w = cc11001100_hook("w", P[0], "var-init"),
          x = cc11001100_hook("x", P[1], "var-init"),
          R = cc11001100_hook("R", W(function (e) {
            e !== t && (null == a || a(e)), C || null == r || r(e);
          }), "var-init");
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(Ge.root), "object-key-init"),
          onMouseEnter: cc11001100_hook("onMouseEnter", g.on, "object-key-init"),
          onMouseLeave: cc11001100_hook("onMouseLeave", et(g.off, m.off), "object-key-init")
        }, k().createElement(Ye, Object.assign({}, c, {
          styles: cc11001100_hook("styles", [Ke, (p || f || C) && Xe, w && Je].filter(Boolean), "object-key-init"),
          value: cc11001100_hook("value", t, "object-key-init"),
          onChange: cc11001100_hook("onChange", R, "object-key-init"),
          onFocus: cc11001100_hook("onFocus", m.on, "object-key-init"),
          onBlur: cc11001100_hook("onBlur", m.off, "object-key-init"),
          onDragStart: cc11001100_hook("onDragStart", et(L.on, W(n || O())), "object-key-init"),
          onDragEnd: cc11001100_hook("onDragEnd", et(L.off, W(o || O())), "object-key-init"),
          onProgressDotHover: cc11001100_hook("onProgressDotHover", et(x.on, W(i || O())), "object-key-init"),
          onProgressDotLeave: cc11001100_hook("onProgressDotLeave", et(x.off, W(l || O())), "object-key-init")
        })));
      },
      nt = function (e) {
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(Oe.timeline), "object-key-init")
        }, k().createElement(tt, Object.assign({}, e)));
      },
      ot = function (e) {
        var t = cc11001100_hook("t", e.isFullScreen, "var-init"),
          n = cc11001100_hook("n", e.currentTime, "var-init"),
          o = cc11001100_hook("o", e.duration, "var-init");
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(Oe.time, t && Oe.fullScreenedTime), "object-key-init")
        }, "".concat(se(n), " / ").concat(se(o)));
      },
      rt = function (e) {
        var t = cc11001100_hook("t", e.name, "var-init"),
          n = cc11001100_hook("n", e.style, "var-init"),
          o = cc11001100_hook("o", void 0 === n ? "text" : n, "var-init");
        return k().createElement(k().Fragment, null, U(t, o));
      },
      at = cc11001100_hook("at", {
        auto: cc11001100_hook("auto", "quality-auto", "object-key-init"),
        ld: cc11001100_hook("ld", "quality-ld", "object-key-init"),
        sd: cc11001100_hook("sd", "quality-sd", "object-key-init"),
        hd: cc11001100_hook("hd", "quality-hd", "object-key-init"),
        fhd: cc11001100_hook("fhd", "quality-fhd", "object-key-init")
      }, "var-init"),
      it = cc11001100_hook("it", function (e) {
        v()(n, e);
        var t = cc11001100_hook("t", _(n), "var-init");
        function n() {
          var e;
          return s()(this, n), (e = cc11001100_hook("e", t.apply(this, arguments), "assign")).state = cc11001100_hook("(e = t.apply(this, arguments)).state", {
            isQualityHovered: cc11001100_hook("isQualityHovered", !1, "object-key-init")
          }, "assign"), e.handleQualityPointerEnter = cc11001100_hook("e.handleQualityPointerEnter", function () {
            e.setState({
              isQualityHovered: cc11001100_hook("isQualityHovered", !0, "object-key-init")
            });
          }, "assign"), e.handleQualityPointerLeave = cc11001100_hook("e.handleQualityPointerLeave", function () {
            e.setState({
              isQualityHovered: cc11001100_hook("isQualityHovered", !1, "object-key-init")
            });
          }, "assign"), e;
        }
        return f()(n, [{
          key: cc11001100_hook("key", "render", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this, "var-init"),
              t = cc11001100_hook("t", this.state.isQualityHovered, "var-init");
            return k().createElement(oe.Consumer, null, function (n) {
              var o = cc11001100_hook("o", n.qualities, "var-init"),
                r = cc11001100_hook("r", n.setCurrentQuality, "var-init"),
                a = cc11001100_hook("a", n.currentQuality, "var-init");
              return (null == o ? void 0 : o.length) > 1 && k().createElement("div", {
                className: cc11001100_hook("className", (0, b.css)(Oe.menuContainer), "object-key-init"),
                onMouseEnter: cc11001100_hook("onMouseEnter", e.handleQualityPointerEnter, "object-key-init"),
                onMouseLeave: cc11001100_hook("onMouseLeave", e.handleQualityPointerLeave, "object-key-init")
              }, k().createElement(Ie, {
                label: cc11001100_hook("label", k().createElement(rt, {
                  style: cc11001100_hook("style", "narrow", "object-key-init"),
                  name: cc11001100_hook("name", at[a], "object-key-init")
                }), "object-key-init")
              }), k().createElement("div", {
                className: cc11001100_hook("className", (0, b.css)(Oe.menu, t && Oe.menuShown), "object-key-init")
              }, k().createElement("div", {
                className: cc11001100_hook("className", (0, b.css)(Oe.qualityMenu), "object-key-init")
              }, o.map(function (t) {
                return k().createElement("button", {
                  key: cc11001100_hook("key", t, "object-key-init"),
                  className: cc11001100_hook("className", (0, b.css)(Oe.qualityMenuItem, a === t && Oe.qualityMenuActiveItem), "object-key-init"),
                  onClick: function () {
                    e.handleQualityPointerLeave(), r(t);
                  }
                }, k().createElement(rt, {
                  name: cc11001100_hook("name", at[t], "object-key-init")
                }));
              }))));
            });
          }
        }]), n;
      }(k().PureComponent), "var-init"),
      lt = cc11001100_hook("lt", b.StyleSheet.create({
        root: {
          padding: cc11001100_hook("padding", "0.375em 0", "object-key-init")
        }
      }), "var-init"),
      ut = cc11001100_hook("ut", b.StyleSheet.create({
        root: {
          width: cc11001100_hook("width", "2.5em", "object-key-init"),
          height: cc11001100_hook("height", "4em", "object-key-init")
        },
        track: {
          margin: cc11001100_hook("margin", "-0.4em 0", "object-key-init"),
          transform: cc11001100_hook("transform", "translate3d(0, 0, 0)", "object-key-init")
        },
        thumb: {
          transform: cc11001100_hook("transform", "scale(0.8)", "object-key-init"),
          transition: cc11001100_hook("transition", "transform 300ms", "object-key-init"),
          ":hover": {
            transform: cc11001100_hook("transform", "scale(1)", "object-key-init")
          }
        },
        thumbSliding: {
          transform: cc11001100_hook("transform", "scale(1)", "object-key-init")
        }
      }), "var-init"),
      ct = function (e) {
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(lt.root), "object-key-init")
        }, k().createElement(Ye, Object.assign({}, e, {
          styles: cc11001100_hook("styles", ut, "object-key-init"),
          orientation: cc11001100_hook("orientation", "vertical", "object-key-init"),
          step: cc11001100_hook("step", .1, "object-key-init")
        })));
      },
      st = function (e) {
        var t = cc11001100_hook("t", e.volume, "var-init"),
          n = cc11001100_hook("n", e.menuShown, "var-init"),
          o = cc11001100_hook("o", e.onMouseEnter, "var-init"),
          r = cc11001100_hook("r", e.onMouseLeave, "var-init"),
          a = cc11001100_hook("a", e.onDragStart, "var-init"),
          i = cc11001100_hook("i", e.onDragEnd, "var-init"),
          l = cc11001100_hook("l", e.onChange, "var-init"),
          u = cc11001100_hook("u", e.onToggleMuted, "var-init");
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(Oe.menuContainer), "object-key-init"),
          onMouseEnter: cc11001100_hook("onMouseEnter", o, "object-key-init"),
          onMouseLeave: cc11001100_hook("onMouseLeave", r, "object-key-init")
        }, k().createElement(Ie, {
          "aria-label": cc11001100_hook("aria-label", U(0 === t ? "unmute" : "mute"), "object-key-init"),
          icon: cc11001100_hook("icon", 0 === t ? xe : Ne, "object-key-init"),
          onClick: function () {
            return null == u ? void 0 : u();
          }
        }), k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(Oe.menu, n && Oe.menuShown), "object-key-init")
        }, k().createElement(ct, {
          value: cc11001100_hook("value", t, "object-key-init"),
          total: cc11001100_hook("total", 1, "object-key-init"),
          onDragStart: cc11001100_hook("onDragStart", a, "object-key-init"),
          onDragEnd: cc11001100_hook("onDragEnd", i, "object-key-init"),
          onChange: cc11001100_hook("onChange", l, "object-key-init")
        })));
      },
      dt = function (e) {
        var t = cc11001100_hook("t", e.isFullScreen, "var-init"),
          n = cc11001100_hook("n", e.onClick, "var-init");
        return k().createElement(_e, {
          localeKey: cc11001100_hook("localeKey", t ? "action-exit-fullscreen" : "action-enter-fullscreen", "object-key-init"),
          hotkey: cc11001100_hook("hotkey", "f", "object-key-init")
        }, k().createElement(Ie, {
          icon: cc11001100_hook("icon", t ? Te : we, "object-key-init"),
          onClick: cc11001100_hook("onClick", n, "object-key-init")
        }));
      },
      ft = function (e) {
        var t = cc11001100_hook("t", e.isPip, "var-init"),
          n = cc11001100_hook("n", e.onClick, "var-init");
        return k().createElement(_e, {
          localeKey: cc11001100_hook("localeKey", t ? "action-exit-pip" : "action-enter-pip", "object-key-init"),
          hotkey: cc11001100_hook("hotkey", "p", "object-key-init")
        }, k().createElement(Ie, {
          icon: cc11001100_hook("icon", t ? ke : Me, "object-key-init"),
          onClick: cc11001100_hook("onClick", n, "object-key-init")
        }));
      },
      mt = cc11001100_hook("mt", function (e) {
        v()(n, e);
        var t = cc11001100_hook("t", _(n), "var-init");
        function n() {
          var e;
          return s()(this, n), (e = cc11001100_hook("e", t.apply(this, arguments), "assign")).state = cc11001100_hook("(e = t.apply(this, arguments)).state", {
            isPlaybackRateHovered: cc11001100_hook("isPlaybackRateHovered", !1, "object-key-init")
          }, "assign"), e.handlePlaybackRatePointerEnter = cc11001100_hook("e.handlePlaybackRatePointerEnter", function () {
            e.setState({
              isPlaybackRateHovered: cc11001100_hook("isPlaybackRateHovered", !0, "object-key-init")
            });
          }, "assign"), e.handlePlaybackRatePointerLeave = cc11001100_hook("e.handlePlaybackRatePointerLeave", function () {
            e.setState({
              isPlaybackRateHovered: cc11001100_hook("isPlaybackRateHovered", !1, "object-key-init")
            });
          }, "assign"), e;
        }
        return f()(n, [{
          key: cc11001100_hook("key", "render", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this, "var-init"),
              t = cc11001100_hook("t", this.state.isPlaybackRateHovered, "var-init");
            return k().createElement(oe.Consumer, null, function (n) {
              var o = cc11001100_hook("o", n.playbackRates, "var-init"),
                r = cc11001100_hook("r", n.setCurrentPlaybackRate, "var-init"),
                a = cc11001100_hook("a", n.currentPlaybackRate, "var-init");
              return (null == o ? void 0 : o.length) > 1 && k().createElement("div", {
                className: cc11001100_hook("className", (0, b.css)(Oe.menuContainer), "object-key-init"),
                onMouseEnter: cc11001100_hook("onMouseEnter", e.handlePlaybackRatePointerEnter, "object-key-init"),
                onMouseLeave: cc11001100_hook("onMouseLeave", e.handlePlaybackRatePointerLeave, "object-key-init")
              }, k().createElement(Ie, {
                label: cc11001100_hook("label", 1 === a.value ? k().createElement(rt, {
                  name: cc11001100_hook("name", "playback-rate", "object-key-init")
                }) : "".concat(a.text), "object-key-init")
              }), k().createElement("div", {
                className: cc11001100_hook("className", (0, b.css)(Oe.menu, t && Oe.menuShown), "object-key-init")
              }, k().createElement("div", {
                className: cc11001100_hook("className", (0, b.css)(Oe.qualityMenu), "object-key-init")
              }, ae(o).map(function (t) {
                return k().createElement("button", {
                  key: cc11001100_hook("key", t.value, "object-key-init"),
                  className: cc11001100_hook("className", (0, b.css)(Oe.qualityMenuItem, a.value === t.value && Oe.qualityMenuActiveItem), "object-key-init"),
                  onClick: function () {
                    e.handlePlaybackRatePointerLeave(), r(t);
                  }
                }, t.text);
              }))));
            });
          }
        }]), n;
      }(k().PureComponent), "var-init"),
      vt = function (e) {
        var t = cc11001100_hook("t", e.isFullScreen, "var-init"),
          n = cc11001100_hook("n", e.onClick, "var-init");
        return k().createElement(_e, {
          localeKey: cc11001100_hook("localeKey", t ? "action-exit-page-fullscreen" : "action-enter-page-fullscreen", "object-key-init"),
          hotkey: cc11001100_hook("hotkey", "t", "object-key-init")
        }, k().createElement(Ie, {
          icon: cc11001100_hook("icon", t ? Ae : De, "object-key-init"),
          onClick: cc11001100_hook("onClick", n, "object-key-init")
        }));
      };
    function ht(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.isPlaying, "var-init"),
        n = cc11001100_hook("n", void 0 !== t && t, "var-init"),
        o = cc11001100_hook("o", e.buffered, "var-init"),
        r = cc11001100_hook("r", e.duration, "var-init"),
        a = cc11001100_hook("a", e.currentTime, "var-init"),
        i = cc11001100_hook("i", e.volume, "var-init"),
        l = cc11001100_hook("l", e.isFullScreen, "var-init"),
        c = cc11001100_hook("c", void 0 !== l && l, "var-init"),
        s = cc11001100_hook("s", e.isPageFullScreen, "var-init"),
        d = cc11001100_hook("d", e.isPip, "var-init"),
        f = cc11001100_hook("f", e.onDragStart, "var-init"),
        m = cc11001100_hook("m", e.onDragEnd, "var-init"),
        v = cc11001100_hook("v", e.onToggleFullScreen, "var-init"),
        h = cc11001100_hook("h", e.onTogglePageFullScreen, "var-init"),
        p = cc11001100_hook("p", e.onTogglePip, "var-init"),
        g = cc11001100_hook("g", e.showPip, "var-init"),
        y = cc11001100_hook("y", e.progressDots, "var-init"),
        E = cc11001100_hook("E", e.hiddenPlayButton, "var-init"),
        C = cc11001100_hook("C", e.hiddenTimeline, "var-init"),
        L = cc11001100_hook("L", e.hiddenTime, "var-init"),
        S = cc11001100_hook("S", e.hiddenQualityMenu, "var-init"),
        w = cc11001100_hook("w", e.hiddenVolumeItem, "var-init"),
        x = cc11001100_hook("x", e.hiddenPlaybackRateItem, "var-init"),
        R = cc11001100_hook("R", e.hiddenFullScreenButton, "var-init"),
        M = cc11001100_hook("M", e.shouldShowPageFullScreenButton, "var-init"),
        F = cc11001100_hook("F", e.onProgressDotHover, "var-init"),
        T = cc11001100_hook("T", e.onProgressDotLeave, "var-init"),
        N = cc11001100_hook("N", e.onTogglePlay, "var-init"),
        A = cc11001100_hook("A", e.onSeek, "var-init"),
        O = cc11001100_hook("O", e.onToggleMuted, "var-init"),
        I = cc11001100_hook("I", e.onVolumeChange, "var-init"),
        _ = cc11001100_hook("_", ue(), "var-init"),
        H = cc11001100_hook("H", B(u(), _, 2), "var-init"),
        Q = cc11001100_hook("Q", H[0], "var-init"),
        q = cc11001100_hook("q", H[1], "var-init"),
        U = cc11001100_hook("U", (0, P.useState)(), "var-init"),
        j = cc11001100_hook("j", B(u(), U, 2), "var-init"),
        Z = cc11001100_hook("Z", j[0], "var-init"),
        z = cc11001100_hook("z", j[1], "var-init"),
        V = cc11001100_hook("V", W(function (e) {
          z(D()(e, 0, r));
        }), "var-init"),
        Y = cc11001100_hook("Y", W(function (e) {
          null == A || A(D()(e, 0, r)), z(void 0);
        }), "var-init"),
        G = cc11001100_hook("G", Z || a, "var-init");
      return k().createElement("div", {
        className: cc11001100_hook("className", (0, b.css)(Oe.root), "object-key-init")
      }, !C && k().createElement(nt, {
        value: cc11001100_hook("value", a, "object-key-init"),
        total: cc11001100_hook("total", r, "object-key-init"),
        buffered: cc11001100_hook("buffered", o, "object-key-init"),
        progressDots: cc11001100_hook("progressDots", y, "object-key-init"),
        onDragStart: cc11001100_hook("onDragStart", f, "object-key-init"),
        onDragEnd: cc11001100_hook("onDragEnd", m, "object-key-init"),
        onChange: cc11001100_hook("onChange", V, "object-key-init"),
        onSeek: cc11001100_hook("onSeek", Y, "object-key-init"),
        onProgressDotHover: cc11001100_hook("onProgressDotHover", F, "object-key-init"),
        onProgressDotLeave: cc11001100_hook("onProgressDotLeave", T, "object-key-init")
      }), k().createElement("div", {
        className: cc11001100_hook("className", (0, b.css)(Oe.rootBottom), "object-key-init")
      }, k().createElement("div", {
        className: cc11001100_hook("className", (0, b.css)(Oe.rootBottomLeft), "object-key-init")
      }, !E && k().createElement(He, {
        isPlaying: cc11001100_hook("isPlaying", n, "object-key-init"),
        onClick: function () {
          return null == N ? void 0 : N();
        }
      }), C && k().createElement("div", {
        className: cc11001100_hook("className", (0, b.css)(Oe.timelineHolder), "object-key-init")
      }), !L && k().createElement(ot, {
        isFullScreen: cc11001100_hook("isFullScreen", c, "object-key-init"),
        currentTime: cc11001100_hook("currentTime", G, "object-key-init"),
        duration: cc11001100_hook("duration", r, "object-key-init")
      })), k().createElement("div", {
        className: cc11001100_hook("className", (0, b.css)(Oe.rootBottomRight), "object-key-init")
      }, !x && k().createElement(mt, null), !S && k().createElement(it, null), g && k().createElement(ft, {
        isPip: cc11001100_hook("isPip", d, "object-key-init"),
        onClick: cc11001100_hook("onClick", p, "object-key-init")
      }), M && k().createElement(vt, {
        isFullScreen: cc11001100_hook("isFullScreen", s, "object-key-init"),
        onClick: cc11001100_hook("onClick", h, "object-key-init")
      }), !R && k().createElement(dt, {
        isFullScreen: cc11001100_hook("isFullScreen", c, "object-key-init"),
        onClick: cc11001100_hook("onClick", v, "object-key-init")
      }), !w && k().createElement(st, {
        volume: cc11001100_hook("volume", i, "object-key-init"),
        menuShown: cc11001100_hook("menuShown", Q, "object-key-init"),
        onMouseEnter: cc11001100_hook("onMouseEnter", q.on, "object-key-init"),
        onMouseLeave: cc11001100_hook("onMouseLeave", q.off, "object-key-init"),
        onToggleMuted: cc11001100_hook("onToggleMuted", O, "object-key-init"),
        onChange: cc11001100_hook("onChange", I, "object-key-init")
      }))));
    }
    ht.defaultProps = cc11001100_hook("ht.defaultProps", {
      show: cc11001100_hook("show", !1, "object-key-init"),
      standalone: cc11001100_hook("standalone", !1, "object-key-init"),
      duration: cc11001100_hook("duration", 0, "object-key-init"),
      currentTime: cc11001100_hook("currentTime", 0, "object-key-init"),
      volume: cc11001100_hook("volume", .5, "object-key-init"),
      buffered: cc11001100_hook("buffered", 0, "object-key-init"),
      isPageFullScreen: cc11001100_hook("isPageFullScreen", !1, "object-key-init"),
      showPip: cc11001100_hook("showPip", !1, "object-key-init"),
      hiddenPlayButton: cc11001100_hook("hiddenPlayButton", !1, "object-key-init"),
      hiddenTimeline: cc11001100_hook("hiddenTimeline", !1, "object-key-init"),
      hiddenTime: cc11001100_hook("hiddenTime", !1, "object-key-init"),
      hiddenQualityMenu: cc11001100_hook("hiddenQualityMenu", !1, "object-key-init"),
      hiddenPlaybackRateItem: cc11001100_hook("hiddenPlaybackRateItem", !1, "object-key-init"),
      hiddenVolumeItem: cc11001100_hook("hiddenVolumeItem", !1, "object-key-init"),
      hiddenFullScreenButton: cc11001100_hook("hiddenFullScreenButton", !1, "object-key-init"),
      progressDots: cc11001100_hook("progressDots", [], "object-key-init")
    }, "assign");
    var pt = cc11001100_hook("pt", k().memo(ht), "var-init"),
      gt = cc11001100_hook("gt", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 20 20", "object-key-init")
      }, k().createElement("path", {
        d: cc11001100_hook("d", "M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-.034 2.966c1.95 0 1.485 1.807 1.485 2.21 0 .116-.784 7.79-.784 7.79h-1.4S8.48 5.344 8.48 5.23c0-.417-.462-2.264 1.486-2.264zm1.057 13.522c-.294.287-.647.43-1.056.43-.41 0-.762-.142-1.058-.43-.296-.286-.444-.643-.444-1.07 0-.41.148-.762.443-1.057.294-.294.647-.44 1.057-.44.41 0 .762.142 1.056.43.296.286.443.643.443 1.07 0 .426-.147.782-.443 1.068z", "object-key-init")
      })), "var-init"),
      yt = cc11001100_hook("yt", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 72 72", "object-key-init")
      }, k().createElement("g", {
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init")
      }, k().createElement("circle", {
        cx: cc11001100_hook("cx", "36", "object-key-init"),
        cy: cc11001100_hook("cy", "36", "object-key-init"),
        r: cc11001100_hook("r", "36", "object-key-init"),
        fill: cc11001100_hook("fill", "#FFF", "object-key-init"),
        fillOpacity: cc11001100_hook("fillOpacity", ".95", "object-key-init")
      }), k().createElement("path", {
        fill: cc11001100_hook("fill", "#444", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "nonzero", "object-key-init"),
        d: cc11001100_hook("d", "M41.143 22.5h5.786v27h-5.786zM25.071 22.5h5.786v27h-5.786z", "object-key-init")
      }))), "var-init"),
      Et = cc11001100_hook("Et", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 72 72", "object-key-init")
      }, k().createElement("g", {
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init")
      }, k().createElement("circle", {
        cx: cc11001100_hook("cx", "36", "object-key-init"),
        cy: cc11001100_hook("cy", "36", "object-key-init"),
        r: cc11001100_hook("r", "36", "object-key-init"),
        fill: cc11001100_hook("fill", "#FFF", "object-key-init"),
        fillOpacity: cc11001100_hook("fillOpacity", ".95", "object-key-init")
      }), k().createElement("path", {
        fill: cc11001100_hook("fill", "#444", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "nonzero", "object-key-init"),
        d: cc11001100_hook("d", "M50.8350169,37.0602664 L29.4767217,49.9693832 C28.900608,50.3175908 28.1558807,50.1251285 27.8133266,49.5395068 C27.701749,49.3487566 27.6428571,49.1309436 27.6428571,48.9090213 L27.6428571,23.0907876 C27.6428571,22.4094644 28.1862113,21.8571429 28.8564727,21.8571429 C29.0747919,21.8571429 29.2890685,21.9170066 29.4767217,22.0304257 L50.8350169,34.9395425 C51.4111306,35.28775 51.6004681,36.0447682 51.257914,36.6303899 C51.154433,36.8072984 51.0090531,36.9550776 50.8350169,37.0602664 Z", "object-key-init")
      }))), "var-init"),
      bt = cc11001100_hook("bt", k().createElement("svg", {
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, k().createElement("g", {
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init")
      }, k().createElement("rect", {
        width: cc11001100_hook("width", "24", "object-key-init"),
        height: cc11001100_hook("height", "24", "object-key-init")
      }), k().createElement("path", {
        fill: cc11001100_hook("fill", "#FFF", "object-key-init"),
        d: cc11001100_hook("d", "M12.4049973,3.62840003 C17.1876069,3.84468032 21,7.87252205 21,12.8096305 C21,17.8853314 16.9705627,22 12,22 C7.02943725,22 3,17.8853314 3,12.8096305 C3,12.0229797 3.624497,11.3852732 4.39485308,11.3852732 C5.16520917,11.3852732 5.78970616,12.0229797 5.78970616,12.8096305 C5.78970616,16.3120298 8.57014942,19.1512855 12,19.1512855 C15.4298506,19.1512855 18.2102938,16.3120298 18.2102938,12.8096305 C18.2102938,9.44617464 15.6460805,6.69429107 12.4049973,6.4812447 L12.4049973,8.30324795 C12.4049973,8.71101381 12.0954942,9.04157334 11.7137028,9.04157334 C11.5841406,9.04157334 11.457186,9.00268616 11.3473174,8.92934663 L6.42999892,5.64693477 C6.10624047,5.4308193 6.00781868,4.97530916 6.21016772,4.62952441 C6.26580359,4.53445089 6.34098153,4.45415835 6.42999892,4.3947374 L11.3473174,1.11232554 C11.6710759,0.896210069 12.0975703,1.00132779 12.2999193,1.34711255 C12.3685872,1.46445578 12.4049973,1.60004749 12.4049973,1.73842422 L12.4049973,3.62840003 Z", "object-key-init")
      }))), "var-init"),
      Ct = cc11001100_hook("Ct", b.StyleSheet.create({
        container: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          pointerEvents: cc11001100_hook("pointerEvents", "none", "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init")
        },
        containerFullWidth: {
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "auto", "object-key-init"),
          top: cc11001100_hook("top", "50%", "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          transform: cc11001100_hook("transform", "translate(0, -50%)", "object-key-init")
        },
        containerFullHeight: {
          width: cc11001100_hook("width", "auto", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", "50%", "object-key-init"),
          transform: cc11001100_hook("transform", "translate(-50%)", "object-key-init")
        },
        image: {
          display: cc11001100_hook("display", "block", "object-key-init"),
          visibility: cc11001100_hook("visibility", "hidden", "object-key-init")
        },
        imageFullWidth: {
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "auto", "object-key-init")
        },
        imageFullHeight: {
          width: cc11001100_hook("width", "auto", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init")
        },
        layer: {
          position: cc11001100_hook("position", "absolute", "object-key-init"),
          top: cc11001100_hook("top", 0, "object-key-init"),
          left: cc11001100_hook("left", 0, "object-key-init"),
          right: cc11001100_hook("right", 0, "object-key-init"),
          bottom: cc11001100_hook("bottom", 0, "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
          pointerEvents: cc11001100_hook("pointerEvents", "none", "object-key-init")
        }
      }), "var-init"),
      Lt = function (e) {
        return (0, b.css)(Ct.container, e ? Ct.containerFullWidth : Ct.containerFullHeight);
      },
      St = function (e) {
        return (0, b.css)(Ct.image, e ? Ct.imageFullWidth : Ct.imageFullHeight);
      },
      Pt = function (e) {
        var t = cc11001100_hook("t", e.children, "var-init"),
          n = cc11001100_hook("n", (0, P.useContext)(ee), "var-init"),
          o = cc11001100_hook("o", n.isFullWidth, "var-init"),
          r = cc11001100_hook("r", n.helperImageSrc, "var-init");
        return r ? k().createElement("div", {
          className: cc11001100_hook("className", Lt(o), "object-key-init")
        }, k().createElement("img", {
          src: cc11001100_hook("src", r, "object-key-init"),
          className: cc11001100_hook("className", St(o), "object-key-init")
        }), t) : null;
      },
      kt = function (e) {
        var t = cc11001100_hook("t", e.children, "var-init"),
          n = cc11001100_hook("n", (0, P.useContext)(K).objectFit, "var-init");
        if (t) {
          var o = cc11001100_hook("o", k().createElement("div", {
            className: cc11001100_hook("className", (0, b.css)(Ct.layer), "object-key-init")
          }, t), "var-init");
          return "cover" === n ? o : k().createElement(Pt, null, o);
        }
        return null;
      },
      wt = cc11001100_hook("wt", 2 * Math.PI * 30.5, "var-init"),
      xt = cc11001100_hook("xt", {
        "0%": {
          strokeDashoffset: cc11001100_hook("strokeDashoffset", wt, "object-key-init"),
          transform: cc11001100_hook("transform", "rotate(0deg)", "object-key-init")
        },
        "50%": {
          strokeDashoffset: cc11001100_hook("strokeDashoffset", wt / 4, "object-key-init"),
          transform: cc11001100_hook("transform", "rotate(90deg)", "object-key-init")
        },
        "100%": {
          strokeDashoffset: cc11001100_hook("strokeDashoffset", wt, "object-key-init"),
          transform: cc11001100_hook("transform", "rotate(360deg)", "object-key-init")
        }
      }, "var-init"),
      Rt = cc11001100_hook("Rt", b.StyleSheet.create({
        root: {
          width: cc11001100_hook("width", "4em", "object-key-init"),
          height: cc11001100_hook("height", "4em", "object-key-init")
        },
        svg: {
          display: cc11001100_hook("display", "block", "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init"),
          animationName: {
            "0%": {
              transform: cc11001100_hook("transform", "rotate(0deg)", "object-key-init")
            },
            "100%": {
              transform: cc11001100_hook("transform", "rotate(360deg)", "object-key-init")
            }
          },
          animationDuration: cc11001100_hook("animationDuration", "2s", "object-key-init"),
          animationIterationCount: cc11001100_hook("animationIterationCount", "infinite", "object-key-init"),
          animationTimingFunction: cc11001100_hook("animationTimingFunction", "linear", "object-key-init")
        },
        circle: {
          cx: cc11001100_hook("cx", "50%", "object-key-init"),
          cy: cc11001100_hook("cy", "50%", "object-key-init"),
          r: cc11001100_hook("r", 30.5, "object-key-init"),
          strokeDasharray: cc11001100_hook("strokeDasharray", wt, "object-key-init"),
          stroke: cc11001100_hook("stroke", "currentColor", "object-key-init"),
          strokeWidth: cc11001100_hook("strokeWidth", 3, "object-key-init"),
          strokeLinecap: cc11001100_hook("strokeLinecap", "round", "object-key-init"),
          fill: cc11001100_hook("fill", "none", "object-key-init"),
          transformOrigin: cc11001100_hook("transformOrigin", "center", "object-key-init"),
          animationName: cc11001100_hook("animationName", xt, "object-key-init"),
          animationDuration: cc11001100_hook("animationDuration", "1.5s", "object-key-init"),
          animationIterationCount: cc11001100_hook("animationIterationCount", "infinite", "object-key-init"),
          animationTimingFunction: cc11001100_hook("animationTimingFunction", "ease-in-out", "object-key-init")
        }
      }), "var-init"),
      Mt = function () {
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(Rt.root), "object-key-init")
        }, k().createElement("svg", {
          viewBox: cc11001100_hook("viewBox", "0 0 64 64", "object-key-init"),
          className: cc11001100_hook("className", (0, b.css)(Rt.svg), "object-key-init")
        }, k().createElement("circle", {
          className: cc11001100_hook("className", (0, b.css)(Rt.circle), "object-key-init")
        })));
      },
      Ft = cc11001100_hook("Ft", function (e) {
        v()(n, e);
        var t = cc11001100_hook("t", _(n), "var-init");
        function n() {
          return s()(this, n), t.apply(this, arguments);
        }
        return f()(n, [{
          key: cc11001100_hook("key", "shouldComponentUpdate", "object-key-init"),
          value: function (e) {
            return this.props.show || e.show;
          }
        }, {
          key: cc11001100_hook("key", "render", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this.props, "var-init"),
              t = cc11001100_hook("t", e.duration, "var-init"),
              n = cc11001100_hook("n", e.currentTime, "var-init"),
              o = cc11001100_hook("o", e.buffered, "var-init"),
              r = cc11001100_hook("r", e.progressDots, "var-init");
            return k().createElement(Ye, {
              value: cc11001100_hook("value", n, "object-key-init"),
              total: cc11001100_hook("total", t, "object-key-init"),
              buffered: cc11001100_hook("buffered", o, "object-key-init"),
              progressDots: cc11001100_hook("progressDots", r, "object-key-init"),
              styles: cc11001100_hook("styles", [Ke, $e], "object-key-init"),
              noInteraction: cc11001100_hook("noInteraction", !0, "object-key-init")
            });
          }
        }]), n;
      }(P.Component), "var-init");
    Ft.defaultProps = cc11001100_hook("Ft.defaultProps", {
      show: cc11001100_hook("show", !1, "object-key-init"),
      duration: cc11001100_hook("duration", 0, "object-key-init"),
      currentTime: cc11001100_hook("currentTime", 0, "object-key-init"),
      buffered: cc11001100_hook("buffered", 0, "object-key-init"),
      progressDots: cc11001100_hook("progressDots", [], "object-key-init")
    }, "assign");
    var Tt = function (e) {
        var t = cc11001100_hook("t", e.root, "var-init"),
          n = cc11001100_hook("n", e.prevVolumeRef, "var-init"),
          o = cc11001100_hook("o", e.isPlaying, "var-init"),
          r = cc11001100_hook("r", e.isPageFullScreen, "var-init"),
          a = cc11001100_hook("a", e.volume, "var-init"),
          i = cc11001100_hook("i", e.duration, "var-init"),
          l = cc11001100_hook("l", e.currentTime, "var-init"),
          u = cc11001100_hook("u", e.standalone, "var-init"),
          c = cc11001100_hook("c", e.onVolumeChange, "var-init"),
          s = cc11001100_hook("s", e.onTogglePlay, "var-init"),
          d = cc11001100_hook("d", e.onTogglePip, "var-init"),
          f = cc11001100_hook("f", e.onToggleFullScreen, "var-init"),
          m = cc11001100_hook("m", e.onTogglePageFullScreen, "var-init"),
          v = cc11001100_hook("v", e.onSeek, "var-init"),
          h = cc11001100_hook("h", Le(), "var-init"),
          p = cc11001100_hook("p", (0, P.useContext)(oe), "var-init"),
          g = cc11001100_hook("g", p.playbackRates, "var-init"),
          y = cc11001100_hook("y", p.currentPlaybackRate, "var-init"),
          E = cc11001100_hook("E", p.setCurrentPlaybackRate, "var-init"),
          b = function (e) {
            var t = cc11001100_hook("t", null == g ? void 0 : g.findIndex(function (e) {
              return e.value === y.value;
            }), "var-init");
            if (t >= 0) {
              var n = cc11001100_hook("n", g[t + ("next" === e ? 1 : -1)], "var-init");
              h({
                icon: cc11001100_hook("icon", Et, "object-key-init"),
                label: cc11001100_hook("label", (n || y).text, "object-key-init")
              }), n && E(n);
            }
          },
          C = cc11001100_hook("C", W(function (e) {
            var t = cc11001100_hook("t", arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "var-init");
            e = cc11001100_hook("e", D()(e, 0, 1), "assign"), t && h({
              icon: cc11001100_hook("icon", e ? Ne : xe, "object-key-init"),
              label: cc11001100_hook("label", "".concat((100 * e).toFixed(0), "%"), "object-key-init")
            }), null == c || c(e);
          }), "var-init"),
          L = cc11001100_hook("L", W(function (e) {
            v(D()(e, 0, i));
          }), "var-init"),
          S = cc11001100_hook("S", W(function (e) {
            if (!e.defaultPrevented && !(e.altKey || e.ctrlKey || e.metaKey || e.target && (t = cc11001100_hook("t", e.target, "assign"), /^(input|textarea|select)$/i.test(t.tagName) || t.isContentEditable))) {
              var t,
                u = cc11001100_hook("u", !0, "var-init");
              switch (e.key) {
                case " ":
                case "k":
                case "K":
                  h({
                    icon: cc11001100_hook("icon", o ? yt : Et, "object-key-init")
                  }), s();
                  break;
                case "p":
                case "P":
                  d();
                  break;
                case "t":
                case "T":
                  m();
                  break;
                case "f":
                case "F":
                  f();
                  break;
                case "Escape":
                  r && m();
                  break;
                case "ArrowLeft":
                  L(l - 5);
                  break;
                case "ArrowRight":
                  L(l + 5);
                  break;
                case "ArrowUp":
                  C(a + .05, !0);
                  break;
                case "ArrowDown":
                  C(a - .05, !0);
                  break;
                case "j":
                case "J":
                  L(l - 10);
                  break;
                case "l":
                case "L":
                  L(l + 10);
                  break;
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                  L(i / 10 * Number(e.key));
                  break;
                case "m":
                case "M":
                  C(a ? 0 : n.current, !0);
                  break;
                case "<":
                  b("prev");
                  break;
                case ">":
                  b("next");
                  break;
                default:
                  u = cc11001100_hook("u", !1, "assign");
              }
              u && e.preventDefault();
            }
          }), "var-init");
        (0, P.useEffect)(function () {
          return u ? (document.addEventListener("keydown", S), function () {
            document.removeEventListener("keydown", S);
          }) : t ? (t.addEventListener("keydown", S), function () {
            t.removeEventListener("keydown", S);
          }) : void 0;
        }, [S, t, u]);
      },
      Nt = cc11001100_hook("Nt", [[E.FP.PLAY, "onPlay"], [E.FP.PLAYING, "onPlaying"], [E.FP.PAUSE, "onPause"], [E.FP.ENDED, "onEnded"], [E.FP.TIMEUPDATE, "onTimeUpdate"], [E.FP.ERROR, "onError"], [E.FP.WAITING, "onWaiting"], [E.FP.CANPLAY, "onCanPlay"], [E.FP.LOADEDDATA, "onLoadedData"], [E.FP.PROGRESS, "onProgress"]], "var-init");
    function Dt(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t,
        n = cc11001100_hook("n", e.currentTarget, "var-init"),
        o = cc11001100_hook("o", n.currentTime, "var-init"),
        r = cc11001100_hook("r", n.duration, "var-init"),
        a = cc11001100_hook("a", n.error, "var-init");
      return {
        currentTime: cc11001100_hook("currentTime", o, "object-key-init"),
        duration: cc11001100_hook("duration", r, "object-key-init"),
        error: cc11001100_hook("error", (t = cc11001100_hook("t", a, "assign"), t ? {
          code: cc11001100_hook("code", t.code, "object-key-init"),
          message: cc11001100_hook("message", t.message, "object-key-init"),
          name: cc11001100_hook("name", t.name, "object-key-init")
        } : null), "object-key-init")
      };
    }
    var At = cc11001100_hook("At", k().forwardRef(function (e, t) {
        var n = cc11001100_hook("n", (0, P.useContext)(ee).updateVideoSize, "var-init"),
          o = cc11001100_hook("o", (0, P.useContext)(K).objectFit, "var-init"),
          r = cc11001100_hook("r", (0, P.useContext)(V).emitEvent, "var-init"),
          a = cc11001100_hook("a", (0, P.useRef)(e), "var-init");
        (0, P.useEffect)(function () {
          a.current = cc11001100_hook("a.current", e, "assign");
        }, [e]);
        var i = cc11001100_hook("i", (0, P.useMemo)(function () {
            var e = cc11001100_hook("e", {}, "var-init");
            return Nt.forEach(function (t) {
              var n = cc11001100_hook("n", B(u(), t, 2), "var-init"),
                o = cc11001100_hook("o", n[0], "var-init"),
                i = cc11001100_hook("i", n[1], "var-init");
              e[i] = cc11001100_hook("e[i]", function (e) {
                var t, n;
                r(o, Dt(e));
                var l = cc11001100_hook("l", a.current[i], "var-init");
                null === (n = cc11001100_hook("n", (t = cc11001100_hook("t", a.current, "assign")).onNativeEvent, "assign")) || void 0 === n || n.call(t, e);
                for (var u = cc11001100_hook("u", arguments.length, "var-init"), c = cc11001100_hook("c", new Array(u > 1 ? u - 1 : 0), "var-init"), s = cc11001100_hook("s", 1, "var-init"); s < u; s++) c[s - 1] = cc11001100_hook("c[s - 1]", arguments[s], "assign");
                return null == l ? void 0 : l.apply(void 0, [e].concat(c));
              }, "assign");
            }), e;
          }, [r]), "var-init"),
          l = cc11001100_hook("l", (0, P.useCallback)(function (e) {
            var t,
              o,
              r = cc11001100_hook("r", e.currentTarget, "var-init");
            if (r) {
              var i = cc11001100_hook("i", r.videoWidth, "var-init"),
                l = cc11001100_hook("l", r.videoHeight, "var-init");
              n({
                videoWidth: cc11001100_hook("videoWidth", i, "object-key-init"),
                videoHeight: cc11001100_hook("videoHeight", l, "object-key-init")
              });
            }
            null === (o = cc11001100_hook("o", (t = cc11001100_hook("t", a.current, "assign")).onLoadedMetadata, "assign")) || void 0 === o || o.call(t, e);
          }, [n]), "var-init"),
          c = cc11001100_hook("c", e.Video, "var-init"),
          s = cc11001100_hook("s", (e.onNativeEvent, H(e, ["Video", "onNativeEvent"])), "var-init");
        return k().createElement(c, Object.assign({}, s, i, {
          ref: cc11001100_hook("ref", t, "object-key-init"),
          style: {
            objectFit: cc11001100_hook("objectFit", o, "object-key-init")
          },
          onLoadedMetadata: cc11001100_hook("onLoadedMetadata", l, "object-key-init")
        }));
      }), "var-init"),
      Ot = cc11001100_hook("Ot", {
        pluginName: cc11001100_hook("pluginName", "native", "object-key-init"),
        VideoComponent: function (e) {
          var t = cc11001100_hook("t", e.onRef, "var-init"),
            n = cc11001100_hook("n", (e.paused, e.currentQuality, e.useAutoQuality, e.sources, H(e, ["onRef", "paused", "currentQuality", "useAutoQuality", "sources"])), "var-init");
          return k().createElement("video", Object.assign({}, n, {
            ref: cc11001100_hook("ref", t, "object-key-init")
          }));
        },
        willHandleSrcChange: cc11001100_hook("willHandleSrcChange", !1, "object-key-init")
      }, "var-init");
    var It = cc11001100_hook("It", T()(function (e, t) {
        return "m3u8" === e && (null === I.Z || void 0 === I.Z ? void 0 : I.Z.VideoComponent) && (0, C.l9)() && !(0, C.OR)() || "mp4" === e && (null === I.Z || void 0 === I.Z ? void 0 : I.Z.VideoComponent) && (0, C.l9)() && t ? I.Z : Ot;
      }, function () {
        for (var e = cc11001100_hook("e", arguments.length, "var-init"), t = cc11001100_hook("t", new Array(e), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e; n++) t[n] = cc11001100_hook("t[n]", arguments[n], "assign");
        return String(t);
      }), "var-init"),
      Bt = cc11001100_hook("Bt", b.StyleSheet.create({
        root: {
          display: cc11001100_hook("display", "block", "object-key-init"),
          width: cc11001100_hook("width", "100%", "object-key-init"),
          height: cc11001100_hook("height", "100%", "object-key-init")
        }
      }), "var-init"),
      _t = cc11001100_hook("_t", C.ua.isMobile, "var-init"),
      Ht = function (e) {
        return e && "AbortError" === e.name || e instanceof MediaError && e.code === MediaError.MEDIA_ERR_ABORTED;
      },
      Qt = function (e) {
        return e && "NotAllowedError" === e.name;
      },
      qt = cc11001100_hook("qt", function (e) {
        v()(n, e);
        var t = cc11001100_hook("t", _(n), "var-init");
        function n() {
          var e;
          return s()(this, n), (e = cc11001100_hook("e", t.apply(this, arguments), "assign")).isMetadataLoaded = cc11001100_hook("(e = t.apply(this, arguments)).isMetadataLoaded", !1, "assign"), e.pendingAction = cc11001100_hook("e.pendingAction", null, "assign"), e.loading = cc11001100_hook("e.loading", !1, "assign"), e.isSwitchDefinition = cc11001100_hook("e.isSwitchDefinition", !1, "assign"), e.root = cc11001100_hook("e.root", null, "assign"), e.safeExecute = cc11001100_hook("e.safeExecute", function (t) {
            void 0 !== e.playPromise ? e.playPromise.then(function () {
              t();
            }) : t();
          }, "assign"), e.handleMetadataLoaded = cc11001100_hook("e.handleMetadataLoaded", function () {
            e.isMetadataLoaded = cc11001100_hook("e.isMetadataLoaded", !0, "assign"), e.applyPendingAction(), e.isSwitchDefinition && (e.isSwitchDefinition = cc11001100_hook("e.isSwitchDefinition", !1, "assign"), e.setRate(e.props.currentPlaybackRate), e.props.onEvent(E.FP.CHANGE_QUALITY_SUCCESS, e.props.currentQuality));
          }, "assign"), e.handleDurationChange = cc11001100_hook("e.handleDurationChange", function () {
            var t = cc11001100_hook("t", e.props.onDurationUpdate, "var-init");
            t && t(e.root.duration);
          }, "assign"), e.prevLoadingEvent = cc11001100_hook("e.prevLoadingEvent", void 0, "assign"), e.handleNativeEvent = cc11001100_hook("e.handleNativeEvent", function (t) {
            var n,
              o,
              r,
              a,
              i = cc11001100_hook("i", t.type, "var-init");
            "waiting" !== i && "canplay" !== i && "playing" !== i && "error" !== i || ("waiting" === i ? (e.loading = cc11001100_hook("e.loading", !0, "assign"), null === (o = cc11001100_hook("o", (n = cc11001100_hook("n", e.props, "assign")).onLoadingChange, "assign")) || void 0 === o || o.call(n, e.loading)) : ("canplay" === i && "waiting" === e.prevLoadingEvent || "playing" === i || "error" === i) && (e.loading = cc11001100_hook("e.loading", !1, "assign"), null === (a = cc11001100_hook("a", (r = cc11001100_hook("r", e.props, "assign")).onLoadingChange, "assign")) || void 0 === a || a.call(r, e.loading)), e.prevLoadingEvent = cc11001100_hook("e.prevLoadingEvent", i, "assign"));
          }, "assign"), e.handleTimeUpdate = cc11001100_hook("e.handleTimeUpdate", function () {
            e.notifyTimeUpdate(!1);
          }, "assign"), e.notifyTimeUpdate = cc11001100_hook("e.notifyTimeUpdate", function (t) {
            var n,
              o = cc11001100_hook("o", e.props, "var-init"),
              r = cc11001100_hook("r", o.onCurrentTimeUpdate, "var-init"),
              a = cc11001100_hook("a", o.paused, "var-init");
            if (void 0 !== e._timeUpdateRafId && window.cancelAnimationFrame(e._timeUpdateRafId), !a && !e.loading) {
              var i = cc11001100_hook("i", null === (n = cc11001100_hook("n", e.root, "assign")) || void 0 === n ? void 0 : n.currentTime, "var-init");
              r && i && (r(i, t), _t || (e._timeUpdateRafId = cc11001100_hook("e._timeUpdateRafId", window.requestAnimationFrame(function () {
                return e.notifyTimeUpdate(!0);
              }), "assign")));
            }
          }, "assign"), e.handleProgress = cc11001100_hook("e.handleProgress", function () {
            for (var t = cc11001100_hook("t", e.props.onProgressUpdate, "var-init"), n = cc11001100_hook("n", e.root.buffered, "var-init"), o = cc11001100_hook("o", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) o.push({
              start: cc11001100_hook("start", n.start(r), "object-key-init"),
              end: cc11001100_hook("end", n.end(r), "object-key-init")
            });
            t && t(o);
          }, "assign"), e.handleError = cc11001100_hook("e.handleError", function () {
            var t = cc11001100_hook("t", e.root || {}, "var-init"),
              n = cc11001100_hook("n", t.error, "var-init"),
              o = cc11001100_hook("o", t.currentTime, "var-init");
            if (n) {
              var r = cc11001100_hook("r", n.code, "var-init"),
                a = cc11001100_hook("a", n.message, "var-init");
              C.kg.debug("Error: %o", {
                code: cc11001100_hook("code", r, "object-key-init"),
                message: cc11001100_hook("message", a, "object-key-init"),
                name: cc11001100_hook("name", n.name, "object-key-init")
              }), Qt(n) || Ht(n) || e.props.onEvent(E.FP.PLAY_FAILED, {
                currentTime: cc11001100_hook("currentTime", o, "object-key-init")
              }), e.isSwitchDefinition && (e.isSwitchDefinition = cc11001100_hook("e.isSwitchDefinition", !1, "assign"), e.setRate(e.props.currentPlaybackRate), e.props.onEvent(E.FP.CHANGE_QUALITY_FAIL, e.props.currentQuality)), e.props.onError(n);
            }
          }, "assign"), e;
        }
        return f()(n, [{
          key: cc11001100_hook("key", "componentDidMount", "object-key-init"),
          value: function () {
            this.root.volume = cc11001100_hook("this.root.volume", Math.pow(this.props.volume, 2), "assign");
          }
        }, {
          key: cc11001100_hook("key", "getSnapshotBeforeUpdate", "object-key-init"),
          value: function () {
            return {
              paused: cc11001100_hook("paused", this.root.paused, "object-key-init"),
              currentTime: cc11001100_hook("currentTime", this.root.currentTime, "object-key-init")
            };
          }
        }, {
          key: cc11001100_hook("key", "componentDidUpdate", "object-key-init"),
          value: function (e, t, n) {
            var o = cc11001100_hook("o", this, "var-init"),
              r = cc11001100_hook("r", this.props, "var-init"),
              a = cc11001100_hook("a", r.src, "var-init"),
              i = cc11001100_hook("i", r.paused, "var-init"),
              l = cc11001100_hook("l", r.volume, "var-init"),
              u = cc11001100_hook("u", r.format, "var-init"),
              c = cc11001100_hook("c", r.useMSE, "var-init"),
              s = cc11001100_hook("s", r.currentPlaybackRate, "var-init"),
              d = cc11001100_hook("d", r.currentQuality, "var-init"),
              f = cc11001100_hook("f", r.onEvent, "var-init");
            e.src && a !== e.src && (this.isSwitchDefinition = cc11001100_hook("this.isSwitchDefinition", !0, "assign"), f(E.FP.CHANGE_QUALITY_START, d), It(u, c).willHandleSrcChange || this.safeExecute(function () {
              o.isMetadataLoaded = cc11001100_hook("o.isMetadataLoaded", !1, "assign"), o.seek(n.currentTime), n.paused || o.play();
            }));
            i !== e.paused && this.root && i !== this.root.paused && (i ? this.pause() : this.play()), this.root && this.root.volume !== Math.pow(l, 2) && !_t && (this.root.volume = cc11001100_hook("this.root.volume", Math.pow(l, 2), "assign")), e.currentPlaybackRate.value !== s.value && this.setRate(s);
          }
        }, {
          key: cc11001100_hook("key", "pending", "object-key-init"),
          value: function (e) {
            this.pendingAction = cc11001100_hook("this.pendingAction", Object.assign(Object.assign({}, this.pendingAction), e), "assign");
          }
        }, {
          key: cc11001100_hook("key", "applyPendingAction", "object-key-init"),
          value: function () {
            if (this.pendingAction) {
              var e = cc11001100_hook("e", this.pendingAction, "var-init");
              this.pendingAction = cc11001100_hook("this.pendingAction", null, "assign"), void 0 !== e.currentTime && this.seek(e.currentTime), void 0 !== e.paused && this.root && e.paused !== this.root.paused && (e.paused ? this.pause() : this.play());
            }
          }
        }, {
          key: cc11001100_hook("key", "setRate", "object-key-init"),
          value: function (e) {
            var t = cc11001100_hook("t", this, "var-init");
            _t || this.isMetadataLoaded ? this.safeExecute(function () {
              return t.root.playbackRate = cc11001100_hook("t.root.playbackRate", Number(e.value), "assign");
            }) : this.pending({
              paused: cc11001100_hook("paused", !0, "object-key-init")
            });
          }
        }, {
          key: cc11001100_hook("key", "play", "object-key-init"),
          value: function () {
            var e,
              t = cc11001100_hook("t", this, "var-init");
            if (!_t && !this.isMetadataLoaded) return this.pending({
              paused: cc11001100_hook("paused", !1, "object-key-init")
            }), void ((null === (e = cc11001100_hook("e", this.root, "assign")) || void 0 === e ? void 0 : e.load) && this.safeExecute(function () {
              return t.root.load();
            }));
            this.playPromise = cc11001100_hook("this.playPromise", Promise.resolve(this.root.play()).catch(function (e) {
              var n = cc11001100_hook("n", t.props.onError, "var-init");
              n && n(e);
            }), "assign");
          }
        }, {
          key: cc11001100_hook("key", "pause", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this, "var-init");
            _t || this.isMetadataLoaded ? this.safeExecute(function () {
              return e.root.pause();
            }) : this.pending({
              paused: cc11001100_hook("paused", !0, "object-key-init")
            });
          }
        }, {
          key: cc11001100_hook("key", "seek", "object-key-init"),
          value: function (e) {
            var t;
            Number.isFinite(e) && (this.isMetadataLoaded ? (null === (t = cc11001100_hook("t", this.root, "assign")) || void 0 === t ? void 0 : t.duration) && (this.root.currentTime = cc11001100_hook("this.root.currentTime", e, "assign")) : this.pending({
              currentTime: cc11001100_hook("currentTime", e, "object-key-init")
            }));
          }
        }, {
          key: cc11001100_hook("key", "render", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this, "var-init"),
              t = cc11001100_hook("t", this.props, "var-init"),
              n = cc11001100_hook("n", t.src, "var-init"),
              o = cc11001100_hook("o", t.controls, "var-init"),
              r = cc11001100_hook("r", t.loop, "var-init"),
              a = cc11001100_hook("a", t.paused, "var-init"),
              i = cc11001100_hook("i", t.volume, "var-init"),
              l = cc11001100_hook("l", t.onPlay, "var-init"),
              u = cc11001100_hook("u", t.onPause, "var-init"),
              c = cc11001100_hook("c", t.onEnded, "var-init"),
              s = cc11001100_hook("s", t.onLoadedData, "var-init"),
              d = cc11001100_hook("d", t.onSeeking, "var-init"),
              f = cc11001100_hook("f", t.onSeeked, "var-init"),
              m = cc11001100_hook("m", t.format, "var-init"),
              v = cc11001100_hook("v", t.useMSE, "var-init"),
              h = cc11001100_hook("h", t.sources, "var-init"),
              p = cc11001100_hook("p", t.currentQuality, "var-init"),
              g = cc11001100_hook("g", It(m, v).VideoComponent, "var-init");
            return k().createElement(At, {
              onRef: function (t) {
                e.root = cc11001100_hook("e.root", t, "assign");
              },
              className: cc11001100_hook("className", (0, b.css)(Bt.root), "object-key-init"),
              preload: cc11001100_hook("preload", "metadata", "object-key-init"),
              playsInline: cc11001100_hook("playsInline", !0, "object-key-init"),
              "webkit-playsinline": cc11001100_hook("webkit-playsinline", "", "object-key-init"),
              "x-webkit-airplay": cc11001100_hook("x-webkit-airplay", "deny", "object-key-init"),
              muted: cc11001100_hook("muted", !i, "object-key-init"),
              controls: cc11001100_hook("controls", o, "object-key-init"),
              loop: cc11001100_hook("loop", r, "object-key-init"),
              src: cc11001100_hook("src", n, "object-key-init"),
              onPlay: cc11001100_hook("onPlay", l, "object-key-init"),
              onPause: cc11001100_hook("onPause", u, "object-key-init"),
              onEnded: cc11001100_hook("onEnded", c, "object-key-init"),
              onLoadedData: cc11001100_hook("onLoadedData", s, "object-key-init"),
              onSeeking: cc11001100_hook("onSeeking", d, "object-key-init"),
              onSeeked: cc11001100_hook("onSeeked", f, "object-key-init"),
              onClick: cc11001100_hook("onClick", this.handleClick, "object-key-init"),
              onLoadedMetadata: cc11001100_hook("onLoadedMetadata", this.handleMetadataLoaded, "object-key-init"),
              onError: cc11001100_hook("onError", this.handleError, "object-key-init"),
              onDurationChange: cc11001100_hook("onDurationChange", this.handleDurationChange, "object-key-init"),
              onTimeUpdate: cc11001100_hook("onTimeUpdate", this.handleTimeUpdate, "object-key-init"),
              onProgress: cc11001100_hook("onProgress", this.handleProgress, "object-key-init"),
              onNativeEvent: cc11001100_hook("onNativeEvent", this.handleNativeEvent, "object-key-init"),
              paused: cc11001100_hook("paused", a, "object-key-init"),
              sources: cc11001100_hook("sources", h, "object-key-init"),
              currentQuality: cc11001100_hook("currentQuality", p, "object-key-init"),
              Video: cc11001100_hook("Video", g, "object-key-init")
            });
          }
        }]), n;
      }(P.Component), "var-init");
    qt.defaultProps = cc11001100_hook("qt.defaultProps", {
      paused: cc11001100_hook("paused", !0, "object-key-init"),
      volume: cc11001100_hook("volume", .5, "object-key-init")
    }, "assign");
    var Ut = cc11001100_hook("Ut", k().forwardRef(function (e, t) {
        return k().createElement(oe.Consumer, null, function (n) {
          var o = cc11001100_hook("o", n.currentSrc, "var-init"),
            r = cc11001100_hook("r", n.sources, "var-init"),
            a = cc11001100_hook("a", n.currentQuality, "var-init"),
            i = cc11001100_hook("i", n.format, "var-init"),
            l = cc11001100_hook("l", n.currentPlaybackRate, "var-init");
          return k().createElement(qt, Object.assign({
            ref: cc11001100_hook("ref", t, "object-key-init")
          }, e, {
            src: cc11001100_hook("src", o, "object-key-init"),
            format: cc11001100_hook("format", i, "object-key-init"),
            sources: cc11001100_hook("sources", r, "object-key-init"),
            currentQuality: cc11001100_hook("currentQuality", a, "object-key-init"),
            currentPlaybackRate: cc11001100_hook("currentPlaybackRate", l, "object-key-init")
          }));
        });
      }), "var-init"),
      jt = cc11001100_hook("jt", [], "var-init"),
      Wt = function (e) {
        var t,
          n,
          o,
          r = cc11001100_hook("r", e.autoplay, "var-init"),
          a = cc11001100_hook("a", e.muted, "var-init"),
          i = cc11001100_hook("i", e.error, "var-init"),
          l = cc11001100_hook("l", e.title, "var-init"),
          c = cc11001100_hook("c", e.cover, "var-init"),
          s = cc11001100_hook("s", e.standalone, "var-init"),
          d = cc11001100_hook("d", e.loop, "var-init"),
          f = cc11001100_hook("f", e.duration, "var-init"),
          m = cc11001100_hook("m", void 0 === f ? 0 : f, "var-init"),
          v = cc11001100_hook("v", e.onBeforePlay, "var-init"),
          h = cc11001100_hook("h", e.useMSE, "var-init"),
          p = cc11001100_hook("p", e.useAutoQuality, "var-init"),
          g = cc11001100_hook("g", e.alwaysShowVolumeButton, "var-init"),
          y = cc11001100_hook("y", e.disablePictureInPicture, "var-init"),
          L = cc11001100_hook("L", e.progressDots, "var-init"),
          w = cc11001100_hook("w", void 0 === L ? jt : L, "var-init"),
          x = cc11001100_hook("x", e.hiddenPlayButton, "var-init"),
          R = cc11001100_hook("R", e.hiddenTimeline, "var-init"),
          M = cc11001100_hook("M", e.hiddenTime, "var-init"),
          F = cc11001100_hook("F", e.hiddenQualityMenu, "var-init"),
          T = cc11001100_hook("T", e.hiddenVolume, "var-init"),
          N = cc11001100_hook("N", e.hiddenFullScreenButton, "var-init"),
          D = cc11001100_hook("D", e.shouldShowPageFullScreenButton, "var-init"),
          A = cc11001100_hook("A", e.children, "var-init"),
          O = cc11001100_hook("O", e.hiddenPlaybackRateItem, "var-init"),
          I = cc11001100_hook("I", e.hideMobileControls, "var-init"),
          _ = cc11001100_hook("_", e.hideCover, "var-init"),
          H = cc11001100_hook("H", e.noWriteDocTitle, "var-init"),
          Q = cc11001100_hook("Q", e.layerContent, "var-init"),
          q = cc11001100_hook("q", (0, P.useContext)(V), "var-init"),
          U = cc11001100_hook("U", q.emitEvent, "var-init"),
          j = cc11001100_hook("j", q.subscribeAction, "var-init"),
          Z = cc11001100_hook("Z", (0, P.useContext)(oe), "var-init"),
          z = cc11001100_hook("z", Z.currentSrc, "var-init"),
          Y = cc11001100_hook("Y", Z.sources, "var-init"),
          G = cc11001100_hook("G", (0, P.useState)(null), "var-init"),
          X = cc11001100_hook("X", B(u(), G, 2), "var-init"),
          $ = cc11001100_hook("$", X[0], "var-init"),
          ee = cc11001100_hook("ee", X[1], "var-init"),
          te = cc11001100_hook("te", (0, P.useRef)(), "var-init"),
          ne = cc11001100_hook("ne", Le(), "var-init"),
          re = cc11001100_hook("re", (0, P.useState)([]), "var-init"),
          ae = cc11001100_hook("ae", B(u(), re, 2), "var-init"),
          ie = cc11001100_hook("ie", ae[0], "var-init"),
          le = cc11001100_hook("le", ae[1], "var-init"),
          ce = cc11001100_hook("ce", (0, P.useState)(.5), "var-init"),
          de = cc11001100_hook("de", B(u(), ce, 2), "var-init"),
          me = cc11001100_hook("me", de[0], "var-init"),
          he = cc11001100_hook("he", de[1], "var-init"),
          ye = cc11001100_hook("ye", (0, P.useState)(m), "var-init"),
          be = cc11001100_hook("be", B(u(), ye, 2), "var-init"),
          Ce = cc11001100_hook("Ce", be[0], "var-init"),
          Se = cc11001100_hook("Se", be[1], "var-init"),
          ke = cc11001100_hook("ke", (0, P.useState)(0), "var-init"),
          we = cc11001100_hook("we", B(u(), ke, 2), "var-init"),
          xe = cc11001100_hook("xe", we[0], "var-init"),
          Re = cc11001100_hook("Re", we[1], "var-init"),
          Me = cc11001100_hook("Me", ue(), "var-init"),
          Fe = cc11001100_hook("Fe", B(u(), Me, 2), "var-init"),
          Te = cc11001100_hook("Te", Fe[0], "var-init"),
          Ne = cc11001100_hook("Ne", Fe[1], "var-init"),
          De = cc11001100_hook("De", ue(), "var-init"),
          Ae = cc11001100_hook("Ae", B(u(), De, 2), "var-init"),
          Oe = cc11001100_hook("Oe", Ae[0], "var-init"),
          Ie = cc11001100_hook("Ie", Ae[1], "var-init"),
          Be = cc11001100_hook("Be", ue(), "var-init"),
          _e = cc11001100_hook("_e", B(u(), Be, 2), "var-init"),
          He = cc11001100_hook("He", _e[0], "var-init"),
          Qe = cc11001100_hook("Qe", _e[1], "var-init"),
          qe = cc11001100_hook("qe", ue(!0), "var-init"),
          Ue = cc11001100_hook("Ue", B(u(), qe, 2), "var-init"),
          je = cc11001100_hook("je", Ue[0], "var-init"),
          We = cc11001100_hook("We", Ue[1], "var-init"),
          Ze = cc11001100_hook("Ze", ue(), "var-init"),
          ze = cc11001100_hook("ze", B(u(), Ze, 2), "var-init"),
          Ve = cc11001100_hook("Ve", ze[0], "var-init"),
          Ye = cc11001100_hook("Ye", ze[1], "var-init"),
          Ge = cc11001100_hook("Ge", ue(), "var-init"),
          Ke = cc11001100_hook("Ke", B(u(), Ge, 2), "var-init"),
          Xe = cc11001100_hook("Xe", Ke[0], "var-init"),
          Je = cc11001100_hook("Je", Ke[1], "var-init"),
          $e = cc11001100_hook("$e", ue(), "var-init"),
          et = cc11001100_hook("et", B(u(), $e, 2), "var-init"),
          tt = cc11001100_hook("tt", et[0], "var-init"),
          nt = cc11001100_hook("nt", et[1], "var-init"),
          ot = cc11001100_hook("ot", ue(), "var-init"),
          at = cc11001100_hook("at", B(u(), ot, 2), "var-init"),
          it = cc11001100_hook("it", at[0], "var-init"),
          lt = cc11001100_hook("lt", at[1], "var-init"),
          ut = cc11001100_hook("ut", ue(), "var-init"),
          ct = cc11001100_hook("ct", B(u(), ut, 2), "var-init"),
          dt = cc11001100_hook("dt", ct[0], "var-init"),
          ft = cc11001100_hook("ft", ct[1], "var-init"),
          mt = cc11001100_hook("mt", ue(), "var-init"),
          vt = cc11001100_hook("vt", B(u(), mt, 2), "var-init"),
          ht = cc11001100_hook("ht", vt[0], "var-init"),
          Ct = cc11001100_hook("Ct", vt[1], "var-init"),
          Lt = cc11001100_hook("Lt", ue(), "var-init"),
          St = cc11001100_hook("St", B(u(), Lt, 2), "var-init"),
          Pt = cc11001100_hook("Pt", St[0], "var-init"),
          wt = cc11001100_hook("wt", St[1], "var-init"),
          xt = cc11001100_hook("xt", (0, P.useRef)(), "var-init");
        (0, P.useEffect)(function () {
          m && !Ce && Se(m);
        }, [Ce, m]), o = cc11001100_hook("o", function () {
          var e = cc11001100_hook("e", ve.get("@griffith/history-volume"), "var-init");
          e && he(e);
          var t = cc11001100_hook("t", [j(E.aO.PLAY, Dt), j(E.aO.PAUSE, Nt), j(E.aO.TIME_UPDATE, function (e) {
            var t = cc11001100_hook("t", e.currentTime, "var-init");
            return It(t);
          }), j(E.aO.SHOW_CONTROLLER, Wt), j(E.aO.SET_VOLUME, function (e) {
            var t = cc11001100_hook("t", e.volume, "var-init");
            return Ot(t);
          })], "var-init");
          return te.current.root && (a && Ot(0), r && Dt()), function () {
            t.forEach(function (e) {
              return e.unsubscribe();
            });
          };
        }, "assign"), (0, P.useEffect)(o, []);
        var Rt = cc11001100_hook("Rt", He ? !Oe || Ve || Xe || tt : 0 !== xe, "var-init");
        (0, P.useEffect)(function () {
          U(Rt ? E.FP.SHOW_CONTROLLER : E.FP.HIDE_CONTROLLER);
        }, [U, Rt]), (0, P.useEffect)(function () {
          s && "string" == typeof l && l !== document.title && !H && (document.title = cc11001100_hook("document.title", l, "assign"));
        }, [H, s, l]), (0, P.useEffect)(function () {
          y || !te.current.root || xt.current || (xt.current = cc11001100_hook("xt.current", new fe(), "assign"), xt.current.init(te.current.root, function () {
            return U(E.FP.ENTER_PIP);
          }, function () {
            return U(E.FP.EXIT_PIP);
          }));
        }, [y, U]);
        var Nt = cc11001100_hook("Nt", W(function () {
            var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
              t = cc11001100_hook("t", e.dontApplyOnFullScreen, "var-init");
            Oe && (t && Boolean(S().element) || At());
          }), "var-init"),
          Dt = cc11001100_hook("Dt", W(function () {
            U(E.FP.REQUEST_PLAY), Promise.resolve(null == v ? void 0 : v(z)).then(function () {
              He || (U(E.FP.PLAY_COUNT), Qe.on(), Te || wt.on(), C.ua.isIE && 0 !== xe && It(0)), Ie.on(), We.off();
            }).catch(function () {
              U(E.FP.PLAY_REJECTED);
            });
          }), "var-init"),
          At = cc11001100_hook("At", W(function () {
            U(E.FP.REQUEST_PAUSE), Ie.off();
          }), "var-init"),
          Ot = cc11001100_hook("Ot", W(function (e) {
            e = cc11001100_hook("e", Math.round(100 * e) / 100, "assign"), he(e), ve.set("@griffith/history-volume", e);
          }), "var-init"),
          It = cc11001100_hook("It", W(function (e) {
            var t;
            Re(e), null === (t = cc11001100_hook("t", te.current, "assign")) || void 0 === t || t.seek(e);
          }), "var-init"),
          Bt = cc11001100_hook("Bt", (0, P.useRef)(!1), "var-init"),
          _t = cc11001100_hook("_t", W(function () {
            if (S().enabled) {
              null === S() || void 0 === S() || S().toggle($, function () {
                return U(E.FP.ENTER_FULLSCREEN);
              }, function () {
                return U(E.FP.EXIT_FULLSCREEN);
              });
            }
          }), "var-init"),
          Ht = cc11001100_hook("Ht", W(function () {
            var e;
            Boolean(S().element) && !(null === (e = cc11001100_hook("e", xt.current, "assign")) || void 0 === e ? void 0 : e.pictureInPictureElement) && _t(), ht ? (Ct.off(), U(E.FP.EXIT_PAGE_FULLSCREEN)) : (Ct.on(), U(E.FP.ENTER_PAGE_FULLSCREEN));
          }), "var-init"),
          Qt = cc11001100_hook("Qt", W(function () {
            var e;
            ht && (Ct.off(), U(E.FP.EXIT_PAGE_FULLSCREEN)), null === (e = cc11001100_hook("e", xt.current, "assign")) || void 0 === e || e.toggle();
          }), "var-init"),
          qt = cc11001100_hook("qt", (0, P.useRef)(null), "var-init"),
          Wt = cc11001100_hook("Wt", W(function () {
            Ve || Ye.on(), null !== qt.current && clearTimeout(qt.current), qt.current = cc11001100_hook("qt.current", setTimeout(function () {
              qt.current = cc11001100_hook("qt.current", null, "assign"), Ye.off();
            }, 3e3), "assign");
          }), "var-init"),
          Zt = cc11001100_hook("Zt", W(function () {
            Oe ? At() : Dt();
          }), "var-init"),
          zt = cc11001100_hook("zt", (0, P.useRef)(me), "var-init"),
          Vt = cc11001100_hook("Vt", W(function () {
            me && (zt.current = cc11001100_hook("zt.current", me, "assign")), Ot(me ? 0 : zt.current);
          }), "var-init");
        Tt({
          root: cc11001100_hook("root", $, "object-key-init"),
          prevVolumeRef: cc11001100_hook("prevVolumeRef", zt, "object-key-init"),
          isPlaying: cc11001100_hook("isPlaying", Oe, "object-key-init"),
          volume: cc11001100_hook("volume", me, "object-key-init"),
          currentTime: cc11001100_hook("currentTime", xe, "object-key-init"),
          duration: cc11001100_hook("duration", Ce, "object-key-init"),
          standalone: cc11001100_hook("standalone", s, "object-key-init"),
          isPageFullScreen: cc11001100_hook("isPageFullScreen", ht, "object-key-init"),
          onTogglePlay: cc11001100_hook("onTogglePlay", Zt, "object-key-init"),
          onToggleFullScreen: cc11001100_hook("onToggleFullScreen", _t, "object-key-init"),
          onTogglePageFullScreen: cc11001100_hook("onTogglePageFullScreen", Ht, "object-key-init"),
          onTogglePip: cc11001100_hook("onTogglePip", Qt, "object-key-init"),
          onVolumeChange: cc11001100_hook("onVolumeChange", Ot, "object-key-init"),
          onSeek: cc11001100_hook("onSeek", It, "object-key-init")
        });
        var Yt = cc11001100_hook("Yt", J(Y), "var-init");
        (0, P.useEffect)(function () {
          Yt && Yt !== Y && (It(0), At(), r && Dt());
        }, [r, Dt, It, At, Yt, Y]);
        var Gt = cc11001100_hook("Gt", Boolean(null === (t = cc11001100_hook("t", xt.current, "assign")) || void 0 === t ? void 0 : t.pictureInPictureElement), "var-init"),
          Kt = cc11001100_hook("Kt", Boolean(S().element) && !Gt, "var-init"),
          Xt = cc11001100_hook("Xt", (0, P.useMemo)(function () {
            return function (e, t) {
              var n = cc11001100_hook("n", t.find(function (t) {
                return t.start <= e && e <= t.end;
              }), "var-init");
              return n ? n.end : 0;
            }(xe, ie);
          }, [ie, xe]), "var-init"),
          Jt = cc11001100_hook("Jt", !Pt || 0 !== xe, "var-init"),
          $t = cc11001100_hook("$t", Jt && He, "var-init"),
          en = cc11001100_hook("en", !C.ua.isMobile && k().createElement("div", {
            className: cc11001100_hook("className", (0, b.css)(pe.overlay, je && pe.overlayMask), "object-key-init")
          }, He && Pt && k().createElement("div", {
            className: cc11001100_hook("className", (0, b.css)(pe.loader), "object-key-init")
          }, k().createElement(Mt, null)), k().createElement("div", {
            className: cc11001100_hook("className", (0, b.css)(pe.backdrop), "object-key-init"),
            onTouchStart: function (e) {
              e.preventDefault();
            },
            onClick: function () {
              ne({
                icon: cc11001100_hook("icon", Oe ? yt : Et, "object-key-init")
              }), Zt();
            }
          }), l && Kt && k().createElement("div", {
            className: cc11001100_hook("className", (0, b.css)(pe.title, Rt && pe.titleShown), "object-key-init")
          }, l), !R && Oe && Jt && k().createElement("div", {
            className: cc11001100_hook("className", (0, b.css)(ge.base, Rt ? ge.hidden : ge.shown), "object-key-init")
          }, k().createElement(Ft, {
            progressDots: cc11001100_hook("progressDots", w, "object-key-init"),
            buffered: cc11001100_hook("buffered", Xt, "object-key-init"),
            duration: cc11001100_hook("duration", Ce, "object-key-init"),
            currentTime: cc11001100_hook("currentTime", xe, "object-key-init"),
            show: cc11001100_hook("show", !Rt, "object-key-init")
          })), g && $t && k().createElement("div", {
            className: cc11001100_hook("className", (0, b.css)(pe.volumeButton, ge.base, Rt ? ge.hidden : ge.shown), "object-key-init")
          }, k().createElement(st, {
            volume: cc11001100_hook("volume", me, "object-key-init")
          })), $t && k().createElement("div", {
            className: cc11001100_hook("className", (0, b.css)(pe.controller, ge.base, Rt ? ge.shown : ge.hidden), "object-key-init"),
            onMouseEnter: cc11001100_hook("onMouseEnter", Je.on, "object-key-init"),
            onMouseLeave: cc11001100_hook("onMouseLeave", Je.off, "object-key-init")
          }, k().createElement(pt, {
            standalone: cc11001100_hook("standalone", s, "object-key-init"),
            isPlaying: cc11001100_hook("isPlaying", Oe, "object-key-init"),
            duration: cc11001100_hook("duration", Ce, "object-key-init"),
            currentTime: cc11001100_hook("currentTime", xe, "object-key-init"),
            volume: cc11001100_hook("volume", me, "object-key-init"),
            progressDots: cc11001100_hook("progressDots", w, "object-key-init"),
            buffered: cc11001100_hook("buffered", Xt, "object-key-init"),
            isFullScreen: cc11001100_hook("isFullScreen", Kt, "object-key-init"),
            isPageFullScreen: cc11001100_hook("isPageFullScreen", ht, "object-key-init"),
            isPip: cc11001100_hook("isPip", Gt, "object-key-init"),
            onDragStart: cc11001100_hook("onDragStart", nt.on, "object-key-init"),
            onDragEnd: cc11001100_hook("onDragEnd", nt.off, "object-key-init"),
            onTogglePlay: cc11001100_hook("onTogglePlay", Zt, "object-key-init"),
            onToggleMuted: cc11001100_hook("onToggleMuted", Vt, "object-key-init"),
            onSeek: cc11001100_hook("onSeek", It, "object-key-init"),
            onVolumeChange: cc11001100_hook("onVolumeChange", Ot, "object-key-init"),
            onToggleFullScreen: cc11001100_hook("onToggleFullScreen", _t, "object-key-init"),
            onTogglePageFullScreen: cc11001100_hook("onTogglePageFullScreen", Ht, "object-key-init"),
            onTogglePip: cc11001100_hook("onTogglePip", Qt, "object-key-init"),
            onProgressDotHover: function (e) {
              U(E.FP.HOVER_PROGRESS_DOT, e);
            },
            onProgressDotLeave: function () {
              U(E.FP.LEAVE_PROGRESS_DOT);
            },
            show: cc11001100_hook("show", Rt, "object-key-init"),
            showPip: cc11001100_hook("showPip", !y && (null === (n = cc11001100_hook("n", xt.current, "assign")) || void 0 === n ? void 0 : n.supported), "object-key-init"),
            hiddenPlayButton: cc11001100_hook("hiddenPlayButton", x, "object-key-init"),
            hiddenTimeline: cc11001100_hook("hiddenTimeline", R, "object-key-init"),
            hiddenTime: cc11001100_hook("hiddenTime", M, "object-key-init"),
            hiddenQualityMenu: cc11001100_hook("hiddenQualityMenu", F, "object-key-init"),
            hiddenVolumeItem: cc11001100_hook("hiddenVolumeItem", T, "object-key-init"),
            hiddenPlaybackRateItem: cc11001100_hook("hiddenPlaybackRateItem", O, "object-key-init"),
            hiddenFullScreenButton: cc11001100_hook("hiddenFullScreenButton", N, "object-key-init"),
            shouldShowPageFullScreenButton: cc11001100_hook("shouldShowPageFullScreenButton", D, "object-key-init")
          }))), "var-init");
        return k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.root, Kt && pe.fullScreened, ht && pe.pageFullScreen), "object-key-init"),
          onMouseLeave: function () {
            lt.off(), null !== qt.current && (clearTimeout(qt.current), qt.current = cc11001100_hook("qt.current", null, "assign")), Ye.off();
          },
          onMouseEnter: function () {
            lt.on(), Wt();
          },
          onMouseDown: function () {
            ft.on(), Wt();
          },
          onMouseUp: function () {
            ft.off(), Wt();
          },
          onMouseMove: cc11001100_hook("onMouseMove", Wt, "object-key-init"),
          ref: cc11001100_hook("ref", ee, "object-key-init"),
          tabIndex: cc11001100_hook("tabIndex", -1, "object-key-init"),
          "aria-label": cc11001100_hook("aria-label", l, "object-key-init")
        }, k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.video), "object-key-init")
        }, k().createElement(Ut, {
          ref: cc11001100_hook("ref", te, "object-key-init"),
          controls: cc11001100_hook("controls", C.ua.isMobile && He && !I, "object-key-init"),
          paused: cc11001100_hook("paused", !Oe, "object-key-init"),
          volume: cc11001100_hook("volume", me, "object-key-init"),
          loop: cc11001100_hook("loop", d, "object-key-init"),
          onPlay: function () {
            Oe || Ie.on();
          },
          onPause: function () {
            Oe && Ie.off();
          },
          onEnded: function () {
            Qe.off(), Ie.off(), wt.off();
          },
          onLoadedData: function () {
            Ne.on(), wt.off();
          },
          onError: function () {
            Ie.off();
          },
          onLoadingChange: function (e) {
            e ? wt.on() : wt.off();
          },
          onDurationUpdate: function (e) {
            Se(e);
          },
          onCurrentTimeUpdate: function (e) {
            Pt || Bt.current || Re(e);
          },
          onSeeking: function () {
            Bt.current = cc11001100_hook("Bt.current", !0, "assign");
          },
          onSeeked: function () {
            Bt.current = cc11001100_hook("Bt.current", !1, "assign");
          },
          onProgressUpdate: function (e) {
            le(e);
          },
          onEvent: cc11001100_hook("onEvent", U, "object-key-init"),
          useMSE: cc11001100_hook("useMSE", h, "object-key-init"),
          useAutoQuality: cc11001100_hook("useAutoQuality", p, "object-key-init")
        })), I && He && Pt && k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.loader), "object-key-init")
        }, k().createElement(Mt, null)), !_ && k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.cover, !He && pe.coverShown), "object-key-init"),
          onClick: function () {
            return Dt();
          }
        }, c && k().createElement(K.Consumer, null, function (e) {
          var t = cc11001100_hook("t", e.objectFit, "var-init");
          return k().createElement("img", {
            className: cc11001100_hook("className", (0, b.css)(pe.coverImage), "object-key-init"),
            src: cc11001100_hook("src", c, "object-key-init"),
            style: {
              objectFit: cc11001100_hook("objectFit", t, "object-key-init")
            }
          });
        }), Ce && 0 === xe && k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.coverTime, C.ua.isMobile && pe.coverTimeMobile), "object-key-init")
        }, se(Ce)), je && k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.coverAction), "object-key-init")
        }, k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.actionButton), "object-key-init")
        }, k().createElement(Ee, {
          icon: cc11001100_hook("icon", Et, "object-key-init"),
          styles: cc11001100_hook("styles", pe.actionIcon, "object-key-init")
        }))), !je && 0 !== xe && k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.coverReplayAction), "object-key-init")
        }, k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.coverReplayButton, it && pe.coverReplayButtonHovered, dt && pe.coverReplayButtonPressed), "object-key-init")
        }, k().createElement(Ee, {
          icon: cc11001100_hook("icon", bt, "object-key-init"),
          styles: cc11001100_hook("styles", pe.replayIcon, "object-key-init")
        }), k().createElement(rt, {
          name: cc11001100_hook("name", "replay", "object-key-init")
        })))), en, k().createElement(Pe, null), Q && k().createElement(kt, null, Q), i && k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.error), "object-key-init")
        }, k().createElement(Ee, {
          icon: cc11001100_hook("icon", gt, "object-key-init"),
          styles: cc11001100_hook("styles", pe.errorIcon, "object-key-init")
        }), i.message && k().createElement("div", {
          className: cc11001100_hook("className", (0, b.css)(pe.errorMessage), "object-key-init")
        }, i.message)), A);
      },
      Zt = cc11001100_hook("Zt", {
        value: cc11001100_hook("value", 1, "object-key-init"),
        text: cc11001100_hook("text", "1.0x", "object-key-init")
      }, "var-init"),
      zt = cc11001100_hook("zt", [{
        value: cc11001100_hook("value", .5, "object-key-init"),
        text: cc11001100_hook("text", "0.5x", "object-key-init")
      }, {
        value: cc11001100_hook("value", .75, "object-key-init"),
        text: cc11001100_hook("text", "0.75x", "object-key-init")
      }, {
        value: cc11001100_hook("value", 1, "object-key-init"),
        text: cc11001100_hook("text", "1.0x", "object-key-init")
      }, {
        value: cc11001100_hook("value", 1.25, "object-key-init"),
        text: cc11001100_hook("text", "1.25x", "object-key-init")
      }, {
        value: cc11001100_hook("value", 1.5, "object-key-init"),
        text: cc11001100_hook("text", "1.5x", "object-key-init")
      }, {
        value: cc11001100_hook("value", 2, "object-key-init"),
        text: cc11001100_hook("text", "2.0x", "object-key-init")
      }], "var-init"),
      Vt = cc11001100_hook("Vt", k().memo(function (e) {
        var t = cc11001100_hook("t", e.standalone, "var-init"),
          n = cc11001100_hook("n", e.id, "var-init"),
          o = cc11001100_hook("o", e.sources, "var-init"),
          r = cc11001100_hook("r", e.onEvent, "var-init"),
          a = cc11001100_hook("a", e.dispatchRef, "var-init"),
          i = cc11001100_hook("i", e.enableCrossWindowMessage, "var-init"),
          l = cc11001100_hook("l", e.messageContextRef, "var-init"),
          u = cc11001100_hook("u", e.shouldObserveResize, "var-init"),
          c = cc11001100_hook("c", e.initialObjectFit, "var-init"),
          s = cc11001100_hook("s", e.locale, "var-init"),
          d = cc11001100_hook("d", void 0 === s ? "en" : s, "var-init"),
          f = cc11001100_hook("f", e.localeConfig, "var-init"),
          m = cc11001100_hook("m", e.defaultQuality, "var-init"),
          v = cc11001100_hook("v", e.defaultQualityOrder, "var-init"),
          h = cc11001100_hook("h", void 0 === v ? "asc" : v, "var-init"),
          p = cc11001100_hook("p", e.defaultPlaybackRate, "var-init"),
          g = cc11001100_hook("g", void 0 === p ? Zt : p, "var-init"),
          y = cc11001100_hook("y", e.playbackRates, "var-init"),
          E = cc11001100_hook("E", void 0 === y ? zt : y, "var-init"),
          b = cc11001100_hook("b", e.useAutoQuality, "var-init"),
          C = cc11001100_hook("C", void 0 !== b && b, "var-init"),
          L = cc11001100_hook("L", H(e, ["standalone", "id", "sources", "onEvent", "dispatchRef", "enableCrossWindowMessage", "messageContextRef", "shouldObserveResize", "initialObjectFit", "locale", "localeConfig", "defaultQuality", "defaultQualityOrder", "defaultPlaybackRate", "playbackRates", "useAutoQuality"]), "var-init");
        return k().createElement(X, {
          initialObjectFit: cc11001100_hook("initialObjectFit", c, "object-key-init")
        }, k().createElement(ne, {
          shouldObserveResize: cc11001100_hook("shouldObserveResize", u, "object-key-init")
        }, k().createElement(G, {
          id: cc11001100_hook("id", n, "object-key-init"),
          enableCrossWindow: cc11001100_hook("enableCrossWindow", void 0 !== i ? i : t, "object-key-init"),
          onEvent: cc11001100_hook("onEvent", r, "object-key-init"),
          dispatchRef: cc11001100_hook("dispatchRef", a, "object-key-init"),
          messageContextRef: cc11001100_hook("messageContextRef", l, "object-key-init")
        }, k().createElement(le, {
          sources: cc11001100_hook("sources", o, "object-key-init"),
          defaultQuality: cc11001100_hook("defaultQuality", m, "object-key-init"),
          useAutoQuality: cc11001100_hook("useAutoQuality", C, "object-key-init"),
          defaultPlaybackRate: cc11001100_hook("defaultPlaybackRate", g, "object-key-init"),
          defaultQualityOrder: cc11001100_hook("defaultQualityOrder", h, "object-key-init"),
          playbackRates: cc11001100_hook("playbackRates", E, "object-key-init")
        }, k().createElement(j, {
          locale: cc11001100_hook("locale", d, "object-key-init"),
          localeConfig: cc11001100_hook("localeConfig", f, "object-key-init")
        }, k().createElement(Se, null, k().createElement(Wt, Object.assign({}, L, {
          useAutoQuality: cc11001100_hook("useAutoQuality", C, "object-key-init"),
          standalone: cc11001100_hook("standalone", t, "object-key-init")
        }))))))));
      }), "var-init");
  }
}]);
//# sourceMappingURL=lib-330004dc.app.d43e5dcb9f8ddaa160fd.js.map