"use strict";

(self.webpackChunkheifetz = cc11001100_hook("self.webpackChunkheifetz", self.webpackChunkheifetz || [], "assign")).push([[2523], {
  61421: function (e, t, n) {
    n.r(t), n.d(t, {
      ECOMMERCE_SOURCE_FROM: function () {
        return V;
      },
      PLUGIN_CARD_STYLE: function () {
        return Ge;
      },
      PLUGIN_CARD_TYPE: function () {
        return U;
      },
      PLUGIN_DISPLAY_MODE: function () {
        return Je;
      },
      default: function () {
        return et;
      }
    });
    var a = cc11001100_hook("a", n(69595), "var-init"),
      r = cc11001100_hook("r", n(24933), "var-init"),
      c = cc11001100_hook("c", n(58780), "var-init"),
      o = cc11001100_hook("o", n(56523), "var-init"),
      i = cc11001100_hook("i", n(35216), "var-init"),
      s = cc11001100_hook("s", n(40304), "var-init"),
      l = cc11001100_hook("l", n(702), "var-init"),
      d = cc11001100_hook("d", n(87363), "var-init"),
      u = cc11001100_hook("u", n.n(d), "var-init"),
      m = cc11001100_hook("m", n(59962), "var-init"),
      p = cc11001100_hook("p", n(97556), "var-init"),
      v = function (e) {
        if (!e) return null;
        var t = cc11001100_hook("t", ((0, p.Am)(e) || {}).parameters, "var-init"),
          n = cc11001100_hook("n", void 0 === t ? "" : t, "var-init"),
          a = cc11001100_hook("a", (0, p.Om)(n).plugcb, "var-init"),
          r = cc11001100_hook("r", void 0 === a ? "" : a, "var-init");
        return r && r.length ? (0, p.Om)(r) : null;
      },
      h = cc11001100_hook("h", n(5241), "var-init"),
      f = cc11001100_hook("f", n.n(h), "var-init"),
      C = cc11001100_hook("C", n(64146), "var-init"),
      g = cc11001100_hook("g", n(73408), "var-init");
    function E(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.url, "var-init"),
        n = cc11001100_hook("n", e.downloadUrl, "var-init"),
        a = cc11001100_hook("a", e.cardType, "var-init"),
        r = cc11001100_hook("r", e.os, "var-init"),
        c = cc11001100_hook("c", e.parentType, "var-init"),
        o = cc11001100_hook("o", e.urlToken, "var-init"),
        i = cc11001100_hook("i", e.zhiContentInfo, "var-init"),
        s = cc11001100_hook("s", (i = cc11001100_hook("i", void 0 === i ? {} : i, "assign")).cid, "var-init"),
        l = cc11001100_hook("l", t.replace("__CREATIVEID__", (0, p.bS)() || s), "var-init");
      return "download" === a && "ios" === r && n ? n : "message" === a ? (0, p.a3)(l, {
        source_type: cc11001100_hook("source_type", c, "object-key-init"),
        source_id: cc11001100_hook("source_id", o, "object-key-init")
      }) : l;
    }
    function k(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (e) {
        var n = cc11001100_hook("n", t ? e : (0, g.removeBIZParameter)(e), "var-init"),
          a = cc11001100_hook("a", document.createElement("a"), "var-init");
        a.href = cc11001100_hook("a.href", n, "assign"), "ios" === (0, p.dU)().os && t || (a.target = cc11001100_hook("a.target", "_blank", "assign")), a.rel = cc11001100_hook("a.rel", "noopener noreferrer", "assign"), a.click();
      }
    }
    function y(e) {
      cc11001100_hook("e", e, "function-parameter");
      return N.apply(this, arguments);
    }
    function N() {
      return (N = cc11001100_hook("N", (0, C.Z)(f().mark(function e(t) {
        return f().wrap(function (e) {
          for (;;) switch (e.prev = cc11001100_hook("e.prev", e.next, "assign")) {
            case 0:
              return e.abrupt("return", new Promise(function (e) {
                if (t) {
                  var n = cc11001100_hook("n", null, "var-init"),
                    a = cc11001100_hook("a", document.createElement("iframe"), "var-init");
                  a.src = cc11001100_hook("a.src", t, "assign"), a.style.display = cc11001100_hook("a.style.display", "none", "assign"), document.body.appendChild(a), n = cc11001100_hook("n", setTimeout(function () {
                    clearTimeout(n), e({
                      status: cc11001100_hook("status", !1, "object-key-init")
                    });
                  }, 2e3), "assign"), document.addEventListener("visibilitychange", function () {
                    (document.hidden || document.webkitHidden) && (clearTimeout(n), e({
                      status: cc11001100_hook("status", !0, "object-key-init")
                    }));
                  });
                }
              }));
            case 1:
            case "end":
              return e.stop();
          }
        }, e);
      })), "assign")).apply(this, arguments);
    }
    var w = function (e) {
        return fetch("https://www.zhihu.com/api/v4/commercial/wechat/miniapp/scheme?url=".concat(e), {
          method: cc11001100_hook("method", "GET", "object-key-init")
        }).then(function (e) {
          return e.status >= 400 ? null : e.json();
        }).catch(function (e) {
          console.error(e);
        });
      },
      b = cc11001100_hook("b", n(85863), "var-init"),
      T = cc11001100_hook("T", n(61533), "var-init"),
      Z = cc11001100_hook("Z", n.n(T), "var-init");
    function _(e) {
      cc11001100_hook("e", e, "function-parameter");
      return u().createElement("svg", (0, a.Z)({
        xmlns: cc11001100_hook("xmlns", "http://www.w3.org/2000/svg", "object-key-init"),
        width: cc11001100_hook("width", "83", "object-key-init"),
        height: cc11001100_hook("height", "83", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 83 83", "object-key-init")
      }, e), u().createElement("g", {
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init")
      }, u().createElement("circle", {
        cx: cc11001100_hook("cx", "41.5", "object-key-init"),
        cy: cc11001100_hook("cy", "41.5", "object-key-init"),
        r: cc11001100_hook("r", "41.5", "object-key-init"),
        fill: cc11001100_hook("fill", "#0084FF", "object-key-init")
      }), u().createElement("path", {
        fill: cc11001100_hook("fill", "#FFF", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "nonzero", "object-key-init"),
        d: cc11001100_hook("d", "M22.4748737,38.5176187 C21.1080387,37.1507837 18.8919613,37.1507837 17.5251263,38.5176187 C16.1582912,39.8844537 16.1582912,42.1005311 17.5251263,43.4673662 L32.5251263,58.4673662 C33.8919613,59.8342012 36.1080387,59.8342012 37.4748737,58.4673662 L65.4673662,30.4748737 C66.8342012,29.1080387 66.8342012,26.8919613 65.4673662,25.5251263 C64.1005311,24.1582912 61.8844537,24.1582912 60.5176187,25.5251263 L35,51.042745 L22.4748737,38.5176187 Z", "object-key-init")
      })));
    }
    function S() {
      var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
        t = cc11001100_hook("t", e.onCancel, "var-init"),
        n = cc11001100_hook("n", e.data, "var-init"),
        a = cc11001100_hook("a", void 0 === n ? {} : n, "var-init"),
        r = cc11001100_hook("r", (0, d.useState)("open"), "var-init"),
        c = cc11001100_hook("c", (0, b.Z)(r, 2), "var-init"),
        o = cc11001100_hook("o", c[0], "var-init"),
        i = cc11001100_hook("i", c[1], "var-init");
      function s() {
        var e = cc11001100_hook("e", a.wechat, "var-init"),
          n = cc11001100_hook("n", a.shareUrl, "var-init"),
          r = cc11001100_hook("r", e, "var-init");
        "wechat_share" !== a.cardType || e || (r = cc11001100_hook("r", n, "assign")), (0, p.JG)(r);
        try {
          var c,
            o = cc11001100_hook("o", document.createElement("iframe"), "var-init");
          o.src = cc11001100_hook("o.src", "weixin://", "assign"), o.style.display = cc11001100_hook("o.style.display", "none", "assign"), document.body.appendChild(o), c = cc11001100_hook("c", setTimeout(function () {
            i("copy");
          }, 2e3), "assign"), document.addEventListener("visibilitychange", function () {
            (document.hidden || document.webkitHidden) && (clearTimeout(c), t());
          });
        } catch (e) {
          console.log(e);
        }
      }
      var l = function () {
          var e = cc11001100_hook("e", a.cardType, "var-init"),
            n = cc11001100_hook("n", void 0 === e ? "" : e, "var-init"),
            r = cc11001100_hook("r", a.wechat, "var-init"),
            c = cc11001100_hook("c", !0, "var-init"),
            i = cc11001100_hook("i", "微信号已复制", "var-init");
          return "wechat_share" === n && ((void 0 === r ? "" : r) ? i = cc11001100_hook("i", "公众号已复制", "assign") : (c = cc11001100_hook("c", !1, "assign"), i = cc11001100_hook("i", "公众号链接已复制", "assign"))), "open" === o ? u().createElement(u().Fragment, null, u().createElement(_, {
            style: {
              height: cc11001100_hook("height", "40px", "object-key-init")
            }
          }), u().createElement("div", {
            className: cc11001100_hook("className", "WechatModal-copy", "object-key-init")
          }, i), u().createElement("div", {
            className: cc11001100_hook("className", "WechatModal-des", "object-key-init")
          }, "立即打开微信分享好友关注"), u().createElement("div", {
            className: cc11001100_hook("className", "WechatModal-buttons", "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "WechatModal-button", "object-key-init"),
            onClick: cc11001100_hook("onClick", t, "object-key-init")
          }, "取消"), u().createElement("div", {
            className: cc11001100_hook("className", "WechatModal-button active", "object-key-init"),
            onClick: cc11001100_hook("onClick", s, "object-key-init")
          }, "打开"))) : u().createElement(u().Fragment, null, u().createElement("div", {
            className: cc11001100_hook("className", "WechatModal-copy", "object-key-init")
          }, i), u().createElement("div", null, "也可按照以下步骤完成关注"), u().createElement("div", {
            className: cc11001100_hook("className", "WechatModal-ol", "object-key-init")
          }, u().createElement("div", null, "1、打开微信", c ? "" : ",在任意会话窗口复制链接"), u().createElement("div", null, "2、添加关注")), u().createElement("div", {
            className: cc11001100_hook("className", "WechatModal-button close", "object-key-init"),
            onClick: cc11001100_hook("onClick", t, "object-key-init")
          }, "关闭"));
        },
        m = function () {
          var e = cc11001100_hook("e", a.qrCode, "var-init");
          return u().createElement("div", {
            onClick: cc11001100_hook("onClick", t, "object-key-init"),
            className: cc11001100_hook("className", "WechatModal-imgContent", "object-key-init")
          }, u().createElement("img", {
            src: cc11001100_hook("src", e, "object-key-init"),
            className: cc11001100_hook("className", "", "object-key-init")
          }), u().createElement("span", null, "请长按识别或微信扫一扫预览"));
        };
      function v() {
        var e = cc11001100_hook("e", a.cardType, "var-init");
        switch (void 0 === e ? "" : e) {
          case "wechat":
          case "wechat_share":
            return l();
          case "wechat_service":
            return m();
          default:
            return null;
        }
      }
      return u().createElement("div", {
        className: cc11001100_hook("className", "WechatModal", "object-key-init")
      }, u().createElement("div", {
        className: cc11001100_hook("className", "WechatModal-mask", "object-key-init")
      }), u().createElement("div", {
        className: cc11001100_hook("className", "WechatModal-content", "object-key-init")
      }, u().createElement("div", {
        className: cc11001100_hook("className", "WechatModal-text", "object-key-init")
      }, v())));
    }
    S.show = cc11001100_hook("S.show", function (e) {
      var t = cc11001100_hook("t", document.createElement("div"), "var-init");
      document.body.appendChild(t);
      Z().render(u().createElement(S, {
        onCancel: function () {
          setTimeout(function () {
            Z().unmountComponentAtNode(t), document.body.removeChild(t);
          });
        },
        data: cc11001100_hook("data", e, "object-key-init")
      }), t);
    }, "assign");
    var x = cc11001100_hook("x", {
        wechat: function (e) {
          var t = cc11001100_hook("t", e.packageName, "var-init"),
            n = cc11001100_hook("n", e.isZmHandle, "var-init"),
            a = cc11001100_hook("a", e.wechat, "var-init"),
            r = cc11001100_hook("r", e.conversion, "var-init");
          if (n) return S.show(e), Promise.resolve({
            status: cc11001100_hook("status", !0, "object-key-init")
          });
          return I({
            type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.adOpenWechat, "object-key-init"),
            payload: {
              deeplink: cc11001100_hook("deeplink", "weixin://", "object-key-init"),
              packageName: cc11001100_hook("packageName", t, "object-key-init"),
              wechatId: cc11001100_hook("wechatId", a, "object-key-init"),
              conversion: cc11001100_hook("conversion", r, "object-key-init")
            }
          });
        },
        wechat_share: function (e) {
          return L.apply(this, arguments);
        },
        wechat_minipro: cc11001100_hook("wechat_minipro", A, "object-key-init"),
        wechat_service: function (e) {
          var t = cc11001100_hook("t", e.appid, "var-init"),
            n = cc11001100_hook("n", void 0 === t ? "wx1abcffe23814c5ea" : t, "var-init"),
            a = cc11001100_hook("a", e.scene, "var-init"),
            r = cc11001100_hook("r", void 0 === a ? "0" : a, "var-init"),
            c = cc11001100_hook("c", e.templateId, "var-init"),
            o = cc11001100_hook("o", void 0 === c ? "lpmljOmEI0FyLCcDosc5cxArV1LHDYKIqX6Mk4RbAmI" : c, "var-init"),
            i = cc11001100_hook("i", e.id, "var-init"),
            s = cc11001100_hook("s", e.si, "var-init"),
            l = cc11001100_hook("l", e.url, "var-init"),
            d = cc11001100_hook("d", e.conversion, "var-init");
          if (e.isZmHandle) return S.show(e), Promise.resolve({
            status: cc11001100_hook("status", !0, "object-key-init")
          });
          return I({
            type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.adWxPushOnceMsgAuth, "object-key-init"),
            payload: {
              appid: cc11001100_hook("appid", n, "object-key-init"),
              scene: cc11001100_hook("scene", r, "object-key-init"),
              template_id: cc11001100_hook("template_id", o, "object-key-init"),
              pluginId: cc11001100_hook("pluginId", i, "object-key-init"),
              conversion: cc11001100_hook("conversion", d, "object-key-init"),
              si: cc11001100_hook("si", s, "object-key-init"),
              url: cc11001100_hook("url", l, "object-key-init")
            }
          });
        },
        message: function (e) {
          var t = cc11001100_hook("t", e.parentType, "var-init"),
            n = cc11001100_hook("n", e.urlToken, "var-init"),
            a = cc11001100_hook("a", e.hashId, "var-init");
          return I({
            type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.baseOpenInbox, "object-key-init"),
            payload: {
              inbox_id: cc11001100_hook("inbox_id", a, "object-key-init"),
              initial_message: cc11001100_hook("initial_message", "", "object-key-init"),
              auto_focus: cc11001100_hook("auto_focus", !0, "object-key-init"),
              title: cc11001100_hook("title", "", "object-key-init"),
              source_type: cc11001100_hook("source_type", t, "object-key-init"),
              source_id: cc11001100_hook("source_id", n, "object-key-init")
            }
          });
        },
        download: function (e) {
          return A(e).then(function (t) {
            return t.status ? t : function (e) {
              var t = cc11001100_hook("t", e.downloadUrl, "var-init"),
                n = cc11001100_hook("n", e.downloadConversion, "var-init"),
                a = cc11001100_hook("a", void 0 === n ? [] : n, "var-init"),
                r = cc11001100_hook("r", e.productName, "var-init"),
                c = cc11001100_hook("c", e.picUrl, "var-init"),
                o = cc11001100_hook("o", e.isZmHandle, "var-init");
              if (!t) return Promise.resolve({
                status: cc11001100_hook("status", !1, "object-key-init")
              });
              if (o && "android" === (0, p.dU)().os) return k(t), Promise.resolve({
                status: cc11001100_hook("status", !0, "object-key-init")
              });
              if ("ios" === (0, p.dU)().os) return D({
                url: cc11001100_hook("url", E(e), "object-key-init")
              });
              return I({
                type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.adDownloadApk, "object-key-init"),
                payload: {
                  adjson: cc11001100_hook("adjson", JSON.stringify({
                    ads: cc11001100_hook("ads", [{
                      conversion_tracks: cc11001100_hook("conversion_tracks", a, "object-key-init"),
                      creatives: cc11001100_hook("creatives", [{
                        asset: {
                          brand_name: cc11001100_hook("brand_name", r, "object-key-init"),
                          app_promotion_url: cc11001100_hook("app_promotion_url", t, "object-key-init"),
                          brand_logo: cc11001100_hook("brand_logo", c, "object-key-init")
                        }
                      }], "object-key-init")
                    }], "object-key-init")
                  }), "object-key-init")
                }
              });
            }(e);
          });
        },
        normal: cc11001100_hook("normal", A, "object-key-init"),
        conversion: function (e) {
          return I({
            type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.adOpenForm, "object-key-init"),
            payload: cc11001100_hook("payload", e, "object-key-init")
          });
        },
        telephone: function (e) {
          var t = cc11001100_hook("t", e.phoneNumber, "var-init");
          return new Promise(function (e) {
            try {
              window.location.href = cc11001100_hook("window.location.href", "tel://".concat(t), "assign"), e({
                status: cc11001100_hook("status", !0, "object-key-init")
              });
            } catch (t) {
              e({
                status: cc11001100_hook("status", !0, "object-key-init")
              });
            }
          });
        },
        baseUrl: function (e) {
          var t = cc11001100_hook("t", e.url, "var-init");
          return I({
            type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.baseOpenURL, "object-key-init"),
            payload: {
              url: cc11001100_hook("url", t, "object-key-init")
            }
          });
        }
      }, "var-init"),
      U = cc11001100_hook("U", Object.keys(x).reduce(function (e, t) {
        return e[t] = cc11001100_hook("e[t]", t, "assign"), e;
      }, {}), "var-init");
    function I() {
      return g.dispatch.apply(g, arguments).then(function () {
        var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
        return (0, r.Z)({
          status: cc11001100_hook("status", !0, "object-key-init")
        }, e);
      }).catch(function () {
        var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
        return (0, r.Z)({
          status: cc11001100_hook("status", !1, "object-key-init")
        }, e);
      });
    }
    function L() {
      return (L = cc11001100_hook("L", (0, C.Z)(f().mark(function e(t) {
        var n, a, r, c;
        return f().wrap(function (e) {
          for (;;) switch (e.prev = cc11001100_hook("e.prev", e.next, "assign")) {
            case 0:
              if (n = cc11001100_hook("n", t.shareUrl, "assign"), a = cc11001100_hook("a", t.shareDesc, "assign"), r = cc11001100_hook("r", t.picUrl, "assign"), c = cc11001100_hook("c", t.conversion, "assign"), !t.isZmHandle) {
                e.next = cc11001100_hook("e.next", 4, "assign");
                break;
              }
              return S.show(t), e.abrupt("return", Promise.resolve({
                status: cc11001100_hook("status", !0, "object-key-init")
              }));
            case 4:
              return e.abrupt("return", I({
                type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.openWechatShare, "object-key-init"),
                payload: {
                  deeplink: cc11001100_hook("deeplink", "weixin://", "object-key-init"),
                  conversion: cc11001100_hook("conversion", c, "object-key-init"),
                  shareUrl: cc11001100_hook("shareUrl", n, "object-key-init"),
                  shareDesc: cc11001100_hook("shareDesc", a, "object-key-init"),
                  picUrl: cc11001100_hook("picUrl", r, "object-key-init")
                }
              }));
            case 5:
            case "end":
              return e.stop();
          }
        }, e);
      })), "assign")).apply(this, arguments);
    }
    function A(e) {
      cc11001100_hook("e", e, "function-parameter");
      return O.apply(this, arguments);
    }
    function O() {
      return (O = cc11001100_hook("O", (0, C.Z)(f().mark(function e(t) {
        var n, a, c, o, i, s, l, d, u, m, v, h;
        return f().wrap(function (e) {
          for (;;) switch (e.prev = cc11001100_hook("e.prev", e.next, "assign")) {
            case 0:
              if (n = cc11001100_hook("n", t.deeplinkUrl, "assign"), a = cc11001100_hook("a", t.zhiContentInfo, "assign"), c = cc11001100_hook("c", void 0 === a ? {} : a, "assign"), o = cc11001100_hook("o", t.isZmHandle, "assign"), n) {
                e.next = cc11001100_hook("e.next", 3, "assign");
                break;
              }
              return e.abrupt("return", Promise.resolve({
                status: cc11001100_hook("status", !1, "object-key-init")
              }));
            case 3:
              if (!o) {
                e.next = cc11001100_hook("e.next", 33, "assign");
                break;
              }
              if (!(n.indexOf("zhihu2wechat://gotowechat?id=gh_bc33767b4df6") > -1)) {
                e.next = cc11001100_hook("e.next", 29, "assign");
                break;
              }
              if (!((i = cc11001100_hook("i", decodeURIComponent(n).split("url="), "assign"))[1].indexOf("https://mp.weixin.qq.com/") > -1)) {
                e.next = cc11001100_hook("e.next", 23, "assign");
                break;
              }
              if (!(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))) {
                e.next = cc11001100_hook("e.next", 10, "assign");
                break;
              }
              return e.abrupt("return", Promise.resolve({
                status: cc11001100_hook("status", !1, "object-key-init")
              }));
            case 10:
              return e.next = cc11001100_hook("e.next", 12, "assign"), w(i[1]);
            case 12:
              if (!(s = cc11001100_hook("s", e.sent, "assign")) || !s.scheme) {
                e.next = cc11001100_hook("e.next", 20, "assign");
                break;
              }
              return e.next = cc11001100_hook("e.next", 16, "assign"), y(s.scheme);
            case 16:
              return l = cc11001100_hook("l", e.sent, "assign"), e.abrupt("return", l);
            case 20:
              return e.abrupt("return", Promise.resolve({
                status: cc11001100_hook("status", !1, "object-key-init")
              }));
            case 21:
              e.next = cc11001100_hook("e.next", 27, "assign");
              break;
            case 23:
              return e.next = cc11001100_hook("e.next", 25, "assign"), y(n);
            case 25:
              return d = cc11001100_hook("d", e.sent, "assign"), e.abrupt("return", d);
            case 27:
              e.next = cc11001100_hook("e.next", 33, "assign");
              break;
            case 29:
              return e.next = cc11001100_hook("e.next", 31, "assign"), y(n);
            case 31:
              return u = cc11001100_hook("u", e.sent, "assign"), e.abrupt("return", Promise.resolve({
                status: cc11001100_hook("status", u.status, "object-key-init")
              }));
            case 33:
              return m = cc11001100_hook("m", (0, p.dU)(), "assign"), v = cc11001100_hook("v", m.platform, "assign"), h = cc11001100_hook("h", (0, p.b8)(n, (0, r.Z)({}, c, {
                os: cc11001100_hook("os", v, "object-key-init"),
                ts: cc11001100_hook("ts", parseInt(Date.now() / 1e3), "object-key-init")
              })), "assign"), e.abrupt("return", I({
                type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.adECommerceOpen, "object-key-init"),
                payload: cc11001100_hook("payload", (0, r.Z)({}, t, {
                  deeplinkUrl: cc11001100_hook("deeplinkUrl", h, "object-key-init")
                }), "object-key-init")
              }));
            case 36:
            case "end":
              return e.stop();
          }
        }, e);
      })), "assign")).apply(this, arguments);
    }
    function D(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.url, "var-init"),
        n = cc11001100_hook("n", e.adjson, "var-init");
      if (e.isZmHandle) return Promise.resolve({
        status: cc11001100_hook("status", !1, "object-key-init")
      });
      var a = cc11001100_hook("a", {
        adjson: cc11001100_hook("adjson", JSON.stringify({
          ads: cc11001100_hook("ads", [{
            creatives: cc11001100_hook("creatives", [{
              asset: {
                landing_url: cc11001100_hook("landing_url", t, "object-key-init")
              }
            }], "object-key-init")
          }], "object-key-init")
        }), "object-key-init")
      }, "var-init");
      return I({
        type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.commonAd, "object-key-init"),
        payload: cc11001100_hook("payload", n ? e : a, "object-key-init")
      });
    }
    function R() {
      return Promise.resolve({
        status: cc11001100_hook("status", !1, "object-key-init")
      });
    }
    var P = function e() {
      (0, c.Z)(this, e);
    };
    P.execute = cc11001100_hook("P.execute", function () {
      var e = cc11001100_hook("e", (0, C.Z)(f().mark(function e(t) {
        var n, a, c, o, i, s, l, d, u, m, v, h, C, g, y, N, w, b, T, Z, _, S;
        return f().wrap(function (e) {
          for (;;) switch (e.prev = cc11001100_hook("e.prev", e.next, "assign")) {
            case 0:
              if (n = cc11001100_hook("n", t.isCanvas, "assign"), a = cc11001100_hook("a", t.cardType, "assign"), c = cc11001100_hook("c", t.isZmHandle, "assign"), o = cc11001100_hook("o", void 0 !== c && c, "assign"), i = cc11001100_hook("i", t.zhiContentInfo, "assign"), s = cc11001100_hook("s", t.url, "assign"), l = cc11001100_hook("l", t.adjson, "assign"), d = cc11001100_hook("d", (0, p.dU)(), "assign"), u = cc11001100_hook("u", d.os, "assign"), m = cc11001100_hook("m", d.platform, "assign"), v = cc11001100_hook("v", parseInt(Date.now() / 1e3), "assign"), h = cc11001100_hook("h", (0, r.Z)({}, t, {
                url: cc11001100_hook("url", (0, p.b8)(s, (0, r.Z)({}, i, {
                  os: cc11001100_hook("os", m, "object-key-init"),
                  ts: cc11001100_hook("ts", v, "object-key-init")
                })), "object-key-init")
              }), "assign"), l) {
                C = cc11001100_hook("C", "", "assign");
                try {
                  C = cc11001100_hook("C", JSON.parse(l), "assign"), (g = cc11001100_hook("g", C.ads, "assign")) && g.length && (C.ads = cc11001100_hook("C.ads", g.map(function (e) {
                    var t = cc11001100_hook("t", e.creatives, "var-init");
                    return t && t.length > 0 && (t = cc11001100_hook("t", t.map(function (e) {
                      var t = cc11001100_hook("t", e.asset, "var-init");
                      if (null == t ? void 0 : t.landing_url) {
                        var n = cc11001100_hook("n", t.landing_url, "var-init");
                        return (0, r.Z)({}, e, {
                          asset: cc11001100_hook("asset", (0, r.Z)({}, t, {
                            landing_url: cc11001100_hook("landing_url", (0, p.b8)(n, (0, r.Z)({}, i, {
                              os: cc11001100_hook("os", m, "object-key-init"),
                              ts: cc11001100_hook("ts", v, "object-key-init")
                            })), "object-key-init")
                          }), "object-key-init")
                        });
                      }
                      return e;
                    }), "assign")), (0, r.Z)({}, e, {
                      creatives: cc11001100_hook("creatives", t, "object-key-init")
                    });
                  }), "assign")), h.adjson = cc11001100_hook("h.adjson", JSON.stringify(C), "assign");
                } catch (e) {
                  console.error("adjsonReplaceError", e);
                }
              }
              if (y = cc11001100_hook("y", E(h), "assign"), "pc" !== u) {
                e.next = cc11001100_hook("e.next", 9, "assign");
                break;
              }
              return k(y), e.abrupt("return");
            case 9:
              N = cc11001100_hook("N", 0, "assign"), w = cc11001100_hook("w", [{
                func: cc11001100_hook("func", x[n ? "conversion" : a], "object-key-init")
              }, {
                func: cc11001100_hook("func", D, "object-key-init")
              }], "assign");
            case 11:
              if (!(N < w.length)) {
                e.next = cc11001100_hook("e.next", 22, "assign");
                break;
              }
              return b = cc11001100_hook("b", w[N], "assign"), T = cc11001100_hook("T", b.func, "assign"), Z = cc11001100_hook("Z", void 0 === T ? R : T, "assign"), _ = cc11001100_hook("_", b.payload, "assign"), S = cc11001100_hook("S", void 0 === _ ? h : _, "assign"), e.next = cc11001100_hook("e.next", 16, "assign"), Z(S);
            case 16:
              if (!e.sent.status) {
                e.next = cc11001100_hook("e.next", 19, "assign");
                break;
              }
              return e.abrupt("return");
            case 19:
              N++, e.next = cc11001100_hook("e.next", 11, "assign");
              break;
            case 22:
              k(y, o);
            case 23:
            case "end":
              return e.stop();
          }
        }, e);
      })), "var-init");
      return function (t) {
        return e.apply(this, arguments);
      };
    }(), "assign");
    var M = cc11001100_hook("M", n(2429), "var-init"),
      z = cc11001100_hook("z", (0, m.Z)({}, "download", "download"), "var-init"),
      V = cc11001100_hook("V", {
        CONTENT: cc11001100_hook("CONTENT", "CONTENT", "object-key-init"),
        CANVAS: cc11001100_hook("CANVAS", "CANVAS", "object-key-init")
      }, "var-init"),
      F = cc11001100_hook("F", function () {
        function e(t) {
          cc11001100_hook("t", t, "function-parameter");
          var n = cc11001100_hook("n", this, "var-init");
          (0, c.Z)(this, e), this._getMacroOptions = cc11001100_hook("this._getMacroOptions", function () {
            var e = cc11001100_hook("e", n.getRenderData(), "var-init"),
              t = cc11001100_hook("t", e.xSuger, "var-init"),
              a = cc11001100_hook("a", e.cardType, "var-init"),
              r = cc11001100_hook("r", e.urlToken, "var-init"),
              c = cc11001100_hook("c", void 0 === r ? "" : r, "var-init"),
              o = cc11001100_hook("o", e.aPageId, "var-init"),
              i = cc11001100_hook("i", void 0 === o ? "" : o, "var-init"),
              s = cc11001100_hook("s", e.psi, "var-init"),
              l = cc11001100_hook("l", void 0 === s ? "" : s, "var-init"),
              d = cc11001100_hook("d", e.parseUA, "var-init"),
              u = cc11001100_hook("u", (0, p.dU)(d).os, "var-init");
            return {
              xSuger: cc11001100_hook("xSuger", t, "object-key-init"),
              cardType: cc11001100_hook("cardType", a, "object-key-init"),
              aToken: cc11001100_hook("aToken", c, "object-key-init"),
              aPageId: cc11001100_hook("aPageId", i, "object-key-init"),
              psi: cc11001100_hook("psi", l, "object-key-init"),
              et: cc11001100_hook("et", "".concat(u, "_").concat(z[a] || "commodity"), "object-key-init")
            };
          }, "assign"), this._mergeZhiContentInfo = cc11001100_hook("this._mergeZhiContentInfo", function (e) {
            e && n._mergeRenderData({
              zhiContentInfo: cc11001100_hook("zhiContentInfo", e, "object-key-init")
            });
          }, "assign"), this.setZhicontentInfo = cc11001100_hook("this.setZhicontentInfo", function (e) {
            var t = cc11001100_hook("t", v(e), "var-init");
            n._mergeZhiContentInfo(t);
          }, "assign"), this.getContentSign = cc11001100_hook("this.getContentSign", function () {
            g.dispatch({
              type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.adGetContentSign, "object-key-init")
            }).then(function () {
              var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
                t = cc11001100_hook("t", e.data, "var-init"),
                a = cc11001100_hook("a", (t = cc11001100_hook("t", void 0 === t ? {} : t, "assign")).plugcb, "var-init");
              if (a && a.length) {
                var r = cc11001100_hook("r", (0, p.Om)(a), "var-init"),
                  c = cc11001100_hook("c", r.cid, "var-init"),
                  o = cc11001100_hook("o", r.adid, "var-init"),
                  i = cc11001100_hook("i", r.zoneid, "var-init"),
                  s = cc11001100_hook("s", r.sid, "var-init"),
                  l = cc11001100_hook("l", r.campaignid, "var-init"),
                  d = cc11001100_hook("d", r.cbed, "var-init");
                n._mergeRenderData({
                  zhiContentInfo: {
                    cid: cc11001100_hook("cid", c, "object-key-init"),
                    adid: cc11001100_hook("adid", o, "object-key-init"),
                    zoneid: cc11001100_hook("zoneid", i, "object-key-init"),
                    sid: cc11001100_hook("sid", s, "object-key-init"),
                    campaignid: cc11001100_hook("campaignid", l, "object-key-init"),
                    cbed: cc11001100_hook("cbed", d, "object-key-init")
                  }
                });
              }
            });
          }, "assign"), this._mergeRenderData = cc11001100_hook("this._mergeRenderData", function (e) {
            n.renderData = cc11001100_hook("n.renderData", (0, r.Z)({}, n.renderData, e), "assign");
          }, "assign"), this.setPosition = cc11001100_hook("this.setPosition", function (e) {
            n.renderData = cc11001100_hook("n.renderData", (0, r.Z)({}, n.renderData, {
              position: cc11001100_hook("position", e, "object-key-init")
            }), "assign");
          }, "assign"), this.renderData = cc11001100_hook("this.renderData", {}, "assign"), this._calculateRenderData(t);
        }
        return (0, o.Z)(e, [{
          key: cc11001100_hook("key", "setPropsData", "object-key-init"),
          value: function (e) {
            this._calculateRenderData(e);
          }
        }, {
          key: cc11001100_hook("key", "preload", "object-key-init"),
          value: function () {
            if (!this._stopTracking()) {
              var e = cc11001100_hook("e", this.renderData, "var-init"),
                t = cc11001100_hook("t", e.isCanvas, "var-init"),
                n = cc11001100_hook("n", e.adjson, "var-init");
              t && g.dispatch({
                type: cc11001100_hook("type", g.HYBRID_ACTION_EVENT.preloadAd, "object-key-init"),
                payload: {
                  adjson: cc11001100_hook("adjson", n, "object-key-init")
                }
              });
            }
          }
        }, {
          key: cc11001100_hook("key", "getConversionEv", "object-key-init"),
          value: function (e) {
            var t = cc11001100_hook("t", e.cardType, "var-init"),
              n = cc11001100_hook("n", e.deeplinkUrl, "var-init");
            return ["normal", "download"].includes(t) && n || ["wechat_minipro", "wechat_service"].includes(t) ? t : "";
          }
        }, {
          key: cc11001100_hook("key", "handleClick", "object-key-init"),
          value: function () {
            var e,
              t,
              n,
              a,
              c = cc11001100_hook("c", this.renderData, "var-init"),
              o = cc11001100_hook("o", c.data, "var-init"),
              i = cc11001100_hook("i", c.parentType, "var-init"),
              s = cc11001100_hook("s", c.urlToken, "var-init"),
              l = cc11001100_hook("l", c.os, "var-init"),
              d = cc11001100_hook("d", c.downloadUrl, "var-init"),
              u = cc11001100_hook("u", c.landingUrl, "var-init"),
              m = cc11001100_hook("m", c.productName, "var-init"),
              v = cc11001100_hook("v", c.deeplinkUrl, "var-init"),
              h = cc11001100_hook("h", c.cardType, "var-init"),
              f = cc11001100_hook("f", c.isZmHandle, "var-init"),
              C = cc11001100_hook("C", c.zhiContentInfo, "var-init"),
              E = cc11001100_hook("E", c.position, "var-init");
            if (!this._stopTracking()) {
              var k = cc11001100_hook("k", (0, r.Z)({}, g.getTrackMacroOptions(), this._getMacroOptions()), "var-init"),
                y = cc11001100_hook("y", (0, p.Vg)({
                  conversion: cc11001100_hook("conversion", null !== (e = cc11001100_hook("e", null === (t = cc11001100_hook("t", this.renderData, "assign")) || void 0 === t ? void 0 : t.conversion, "assign")) && void 0 !== e ? e : [], "object-key-init")
                }, (0, r.Z)({}, k, {
                  cardType: cc11001100_hook("cardType", this.getConversionEv({
                    cardType: cc11001100_hook("cardType", h, "object-key-init"),
                    deeplinkUrl: cc11001100_hook("deeplinkUrl", v, "object-key-init")
                  }), "object-key-init"),
                  position: cc11001100_hook("position", E, "object-key-init")
                })).conversion, "var-init"),
                N = cc11001100_hook("N", (0, p.Vg)({
                  downloadConversion: cc11001100_hook("downloadConversion", null !== (n = cc11001100_hook("n", null === (a = cc11001100_hook("a", this.renderData, "assign")) || void 0 === a ? void 0 : a.conversion, "assign")) && void 0 !== n ? n : [], "object-key-init")
                }, (0, r.Z)({}, k, {
                  cardType: cc11001100_hook("cardType", "", "object-key-init")
                })).downloadConversion, "var-init");
              try {
                P.execute((0, r.Z)({}, o, {
                  token: cc11001100_hook("token", s, "object-key-init"),
                  pagetype: cc11001100_hook("pagetype", i, "object-key-init"),
                  urlToken: cc11001100_hook("urlToken", s, "object-key-init"),
                  parentType: cc11001100_hook("parentType", i, "object-key-init"),
                  os: cc11001100_hook("os", l, "object-key-init"),
                  downloadUrl: cc11001100_hook("downloadUrl", d, "object-key-init"),
                  landingUrl: cc11001100_hook("landingUrl", u, "object-key-init"),
                  productName: cc11001100_hook("productName", m, "object-key-init"),
                  conversion: cc11001100_hook("conversion", y, "object-key-init"),
                  downloadConversion: cc11001100_hook("downloadConversion", N, "object-key-init"),
                  isZmHandle: cc11001100_hook("isZmHandle", f, "object-key-init"),
                  zhiContentInfo: cc11001100_hook("zhiContentInfo", C, "object-key-init")
                }));
              } catch (e) {
                console.error(e.message);
              }
            }
          }
        }, {
          key: cc11001100_hook("key", "getRenderData", "object-key-init"),
          value: function () {
            return this.renderData;
          }
        }, {
          key: cc11001100_hook("key", "getTrackInfo", "object-key-init"),
          value: function (e) {
            if (this._stopTracking()) return {};
            var t,
              n,
              a,
              c = cc11001100_hook("c", this.getRenderData(), "var-init"),
              o = cc11001100_hook("o", c.ssid, "var-init"),
              i = cc11001100_hook("i", c.id, "var-init"),
              s = cc11001100_hook("s", this.getRenderData().trackUrl, "var-init");
            if (e) {
              var l = cc11001100_hook("l", v(e), "var-init");
              l && (t = cc11001100_hook("t", s, "assign"), n = cc11001100_hook("n", l, "assign"), a = cc11001100_hook("a", (0, r.Z)({}, t), "assign"), Object.keys(t).forEach(function (e) {
                var r = cc11001100_hook("r", t[e], "var-init");
                r && Array.isArray(r) && (a[e] = cc11001100_hook("a[e]", (r || []).map(function (e) {
                  return (0, p.b8)(e, n);
                }), "assign"));
              }), s = cc11001100_hook("s", a, "assign"));
            }
            var d = cc11001100_hook("d", o ? "ssid=".concat(o) : "", "var-init");
            function u(e) {
              cc11001100_hook("e", e, "function-parameter");
              var t = cc11001100_hook("t", e.includes("?") ? "&" : "?", "var-init");
              return "".concat(e).concat(t).concat(d);
            }
            return {
              zaClick: {
                id: cc11001100_hook("id", 5641, "object-key-init")
              },
              zaView: {
                id: cc11001100_hook("id", 5642, "object-key-init")
              },
              zaEnvBlock: cc11001100_hook("zaEnvBlock", "advertPluginCard", "object-key-init"),
              views: cc11001100_hook("views", (0, p.U2)(s, "view", []).map(u), "object-key-init"),
              clicks: cc11001100_hook("clicks", (0, p.U2)(s, "click", []).map(u), "object-key-init"),
              getMacroOptions: cc11001100_hook("getMacroOptions", this._getMacroOptions, "object-key-init"),
              isReplacePosition: cc11001100_hook("isReplacePosition", !0, "object-key-init"),
              setPosition: cc11001100_hook("setPosition", this.setPosition, "object-key-init"),
              id: cc11001100_hook("id", i, "object-key-init")
            };
          }
        }, {
          key: cc11001100_hook("key", "_stopTracking", "object-key-init"),
          value: function () {
            return this.renderData.cmpStatus === M.nn.ONLY_SHOW;
          }
        }, {
          key: cc11001100_hook("key", "_calculateRenderData", "object-key-init"),
          value: function (e) {
            var t = cc11001100_hook("t", e.data, "var-init"),
              n = cc11001100_hook("n", e.suger, "var-init"),
              a = cc11001100_hook("a", e.urlToken, "var-init"),
              r = cc11001100_hook("r", e.aPageId, "var-init"),
              c = cc11001100_hook("c", void 0 === r ? "" : r, "var-init"),
              o = cc11001100_hook("o", e.parentType, "var-init"),
              i = cc11001100_hook("i", e.cmpStatus, "var-init"),
              s = cc11001100_hook("s", e.className, "var-init"),
              l = cc11001100_hook("l", e.isZmHandle, "var-init"),
              d = cc11001100_hook("d", e.pluginSourceFrom, "var-init"),
              u = cc11001100_hook("u", void 0 === d ? V.CONTENT : d, "var-init"),
              m = cc11001100_hook("m", e.ssid, "var-init"),
              v = cc11001100_hook("v", e.psi, "var-init"),
              h = cc11001100_hook("h", e.parseUA, "var-init"),
              f = cc11001100_hook("f", e.cardIndex, "var-init"),
              C = cc11001100_hook("C", t.url, "var-init"),
              E = cc11001100_hook("E", t.price, "var-init"),
              k = cc11001100_hook("k", t.picUrl, "var-init"),
              y = cc11001100_hook("y", t.cardType, "var-init"),
              N = cc11001100_hook("N", t.description, "var-init"),
              w = cc11001100_hook("w", t.interactionLaunch, "var-init"),
              b = cc11001100_hook("b", t.logo, "var-init"),
              T = cc11001100_hook("T", t.trackUrl, "var-init"),
              Z = cc11001100_hook("Z", t.productName, "var-init"),
              _ = cc11001100_hook("_", t.isCanvas, "var-init"),
              S = cc11001100_hook("S", t.adjson, "var-init"),
              x = cc11001100_hook("x", t.androidUrl, "var-init"),
              U = cc11001100_hook("U", t.iosAppStoreUrl, "var-init"),
              I = cc11001100_hook("I", t.validStatus, "var-init"),
              L = cc11001100_hook("L", t.webExperiment, "var-init"),
              A = cc11001100_hook("A", t.labelName, "var-init"),
              O = cc11001100_hook("O", t.phoneNumber, "var-init"),
              D = cc11001100_hook("D", t.pluginStyle, "var-init"),
              R = cc11001100_hook("R", t.conversion, "var-init"),
              P = cc11001100_hook("P", t.deeplinkUrl, "var-init"),
              M = cc11001100_hook("M", t.appInfo, "var-init"),
              z = cc11001100_hook("z", t.channelSource, "var-init"),
              F = cc11001100_hook("F", t.id, "var-init"),
              B = cc11001100_hook("B", (0, p.dU)(h).os, "var-init"),
              H = cc11001100_hook("H", {
                ios: cc11001100_hook("ios", U, "object-key-init"),
                android: cc11001100_hook("android", x, "object-key-init")
              }[B] || "", "var-init");
            this._mergeRenderData({
              deeplinkUrl: cc11001100_hook("deeplinkUrl", P, "object-key-init"),
              conversion: cc11001100_hook("conversion", R, "object-key-init"),
              showCartIcon: cc11001100_hook("showCartIcon", "去购买" === w, "object-key-init"),
              isHidden: cc11001100_hook("isHidden", _ && !S || -1 === I, "object-key-init"),
              originData: cc11001100_hook("originData", e, "object-key-init"),
              showPrice: cc11001100_hook("showPrice", !!E, "object-key-init"),
              price: cc11001100_hook("price", +parseFloat((E / 100).toPrecision(12)), "object-key-init"),
              price2Decimal: cc11001100_hook("price2Decimal", g.formatPrice(E), "object-key-init"),
              picUrl: cc11001100_hook("picUrl", k, "object-key-init"),
              phoneNumber: cc11001100_hook("phoneNumber", O, "object-key-init"),
              cardType: cc11001100_hook("cardType", y, "object-key-init"),
              description: cc11001100_hook("description", N, "object-key-init"),
              interactionLaunch: cc11001100_hook("interactionLaunch", w || "去购买", "object-key-init"),
              logo: cc11001100_hook("logo", b, "object-key-init"),
              trackUrl: cc11001100_hook("trackUrl", T, "object-key-init"),
              productName: cc11001100_hook("productName", "".concat(Z, " 的推荐"), "object-key-init"),
              productNameNew: cc11001100_hook("productNameNew", Z, "object-key-init"),
              xSuger: cc11001100_hook("xSuger", n, "object-key-init"),
              aPageId: cc11001100_hook("aPageId", c, "object-key-init"),
              data: cc11001100_hook("data", t, "object-key-init"),
              urlToken: cc11001100_hook("urlToken", a, "object-key-init"),
              parentType: cc11001100_hook("parentType", o, "object-key-init"),
              isCanvas: cc11001100_hook("isCanvas", _, "object-key-init"),
              adjson: cc11001100_hook("adjson", S, "object-key-init"),
              downloadUrl: cc11001100_hook("downloadUrl", H, "object-key-init"),
              landingUrl: cc11001100_hook("landingUrl", C, "object-key-init"),
              os: cc11001100_hook("os", B, "object-key-init"),
              cmpStatus: cc11001100_hook("cmpStatus", i, "object-key-init"),
              pluginStyle: cc11001100_hook("pluginStyle", D, "object-key-init"),
              webExperiment: cc11001100_hook("webExperiment", L, "object-key-init"),
              className: cc11001100_hook("className", s || "", "object-key-init"),
              labelName: cc11001100_hook("labelName", A, "object-key-init"),
              isZmHandle: cc11001100_hook("isZmHandle", l, "object-key-init"),
              pluginSourceFrom: cc11001100_hook("pluginSourceFrom", u, "object-key-init"),
              appInfo: cc11001100_hook("appInfo", M, "object-key-init"),
              channelSource: cc11001100_hook("channelSource", z, "object-key-init"),
              ssid: cc11001100_hook("ssid", m, "object-key-init"),
              id: cc11001100_hook("id", F, "object-key-init"),
              psi: cc11001100_hook("psi", v, "object-key-init"),
              parseUA: cc11001100_hook("parseUA", h, "object-key-init"),
              cardIndex: cc11001100_hook("cardIndex", f, "object-key-init")
            });
          }
        }]), e;
      }(), "var-init"),
      B = cc11001100_hook("B", n(47112), "var-init"),
      H = cc11001100_hook("H", n.n(B), "var-init");
    function Y(e) {
      cc11001100_hook("e", e, "function-parameter");
      return u().createElement("svg", (0, a.Z)({
        xmlns: cc11001100_hook("xmlns", "http://www.w3.org/2000/svg", "object-key-init"),
        width: cc11001100_hook("width", "27", "object-key-init"),
        height: cc11001100_hook("height", "24", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 27 24", "object-key-init")
      }, e), u().createElement("path", {
        fill: cc11001100_hook("fill", "#0084FF", "object-key-init"),
        d: cc11001100_hook("d", "M25.0589726,39.0133333 C25.4056402,39.0133333 25.7340622,39.0755556 26.0442385,39.2 C26.3544148,39.3244444 26.6280998,39.4977778 26.8652934,39.72 C27.1024871,39.9422222 27.2849437,40.2044444 27.4126634,40.5066667 C27.540383,40.8088889 27.6042428,41.1288889 27.6042428,41.4666667 C27.6042428,41.8044444 27.540383,42.1244444 27.4126634,42.4266667 C27.2849437,42.7288889 27.1024871,42.9911111 26.8652934,43.2133333 C26.6280998,43.4355556 26.3544148,43.6133333 26.0442385,43.7466667 C25.7340622,43.88 25.4056402,43.9466667 25.0589726,43.9466667 C24.6940593,43.9466667 24.3610759,43.88 24.0600224,43.7466667 C23.758969,43.6133333 23.4898454,43.4355556 23.2526518,43.2133333 C23.0154581,42.9911111 22.8330015,42.7288889 22.7052818,42.4266667 C22.5775622,42.1244444 22.5137023,41.8044444 22.5137023,41.4666667 C22.5137023,41.1288889 22.5775622,40.8088889 22.7052818,40.5066667 C22.8330015,40.2044444 23.0154581,39.9422222 23.2526518,39.72 C23.4898454,39.4977778 23.758969,39.3244444 24.0600224,39.2 C24.3610759,39.0755556 24.6940593,39.0133333 25.0589726,39.0133333 Z M36.4442675,39.0666667 C36.7909351,39.0666667 37.1239185,39.1288889 37.4432176,39.2533333 C37.7625167,39.3777778 38.0362017,39.5511111 38.2642725,39.7733333 C38.4923433,39.9955556 38.6748,40.2577778 38.8116425,40.56 C38.948485,40.8622222 39.0169062,41.1822222 39.0169062,41.52 C39.0169062,41.8577778 38.948485,42.1777778 38.8116425,42.48 C38.6748,42.7822222 38.4923433,43.0444444 38.2642725,43.2666667 C38.0362017,43.4888889 37.7625167,43.6666667 37.4432176,43.8 C37.1239185,43.9333333 36.7909351,44 36.4442675,44 C36.0975998,44 35.7691779,43.9333333 35.4590016,43.8 C35.1488253,43.6666667 34.8797017,43.4888889 34.6516309,43.2666667 C34.4235601,43.0444444 34.2411034,42.7822222 34.1042609,42.48 C33.9674185,42.1777778 33.8989972,41.8577778 33.8989972,41.52 C33.8989972,41.1822222 33.9674185,40.8622222 34.1042609,40.56 C34.2411034,40.2577778 34.4235601,39.9955556 34.6516309,39.7733333 C34.8797017,39.5511111 35.1488253,39.3777778 35.4590016,39.2533333 C35.7691779,39.1288889 36.0975998,39.0666667 36.4442675,39.0666667 Z M41.042175,23.92 C41.5530536,23.92 41.9498968,23.9866667 42.2327046,24.12 C42.5155124,24.2533333 42.7162147,24.4177778 42.8348116,24.6133333 C42.9534084,24.8088889 43.0081454,25.0177778 42.9990226,25.24 C42.9898997,25.4622222 42.9579698,25.6533333 42.9032328,25.8133333 C42.8484958,25.9733333 42.7344604,26.3022222 42.5611266,26.8 C42.3877928,27.2977778 42.1916519,27.8444444 41.9727039,28.44 C41.7537559,29.0355556 41.5393694,29.6266667 41.3295442,30.2133333 C41.1197191,30.8 40.9600695,31.2622222 40.8505955,31.6 C40.6134019,32.3111111 40.3123484,32.8044444 39.9474351,33.08 C39.5825218,33.3555556 39.135503,33.4933333 38.6063787,33.4933333 L37.6758498,33.4933333 L35.8968975,33.4933333 L33.5705752,33.4933333 L31.025305,33.4933333 L24.2379177,33.4933333 L24.6484451,35.8933333 L38.4421678,35.8933333 C39.3179597,35.8933333 39.7558556,36.2577778 39.7558556,36.9866667 C39.7558556,37.3422222 39.6691887,37.6488889 39.4958549,37.9066667 C39.3225211,38.1644444 38.9804149,38.2933333 38.4695363,38.2933333 L37.1558484,38.2933333 L34.6105781,38.2933333 L31.463201,38.2933333 L28.2610868,38.2933333 L25.633711,38.2933333 L24.1284437,38.2933333 C23.7635304,38.2933333 23.4579155,38.2133333 23.211599,38.0533333 C22.9652826,37.8933333 22.7600188,37.6844444 22.5958078,37.4266667 C22.4315969,37.1688889 22.2993158,36.8888889 22.1989646,36.5866667 C22.0986135,36.2844444 22.0210694,36 21.9663324,35.7333333 C21.9480867,35.6266667 21.8979112,35.3688889 21.8158057,34.96 C21.7337002,34.5511111 21.633349,34.04 21.5147522,33.4266667 C21.3961554,32.8133333 21.2638743,32.1288889 21.117909,31.3733333 C20.9719437,30.6177778 20.8259784,29.8577778 20.680013,29.0933333 C20.3333454,27.2977778 19.9410636,25.2977778 19.5031677,23.0933333 L17.4505304,23.0933333 C17.1768454,23.0933333 16.9487746,23.0266667 16.7663179,22.8933333 C16.5838613,22.76 16.4333345,22.6 16.3147377,22.4133333 C16.1961409,22.2266667 16.1140354,22.0266667 16.0684212,21.8133333 C16.0228071,21.6 16,21.4044444 16,21.2266667 C16,20.8711111 16.1231582,20.5777778 16.3694747,20.3466667 C16.6157912,20.1155556 16.9487746,20 17.3684249,20 L17.9705318,20 L18.5179017,20 L19.2021142,20 L20.1326431,20 C20.4975564,20 20.789487,20.0533333 21.008435,20.16 C21.227383,20.2666667 21.4007168,20.4 21.5284364,20.56 C21.6561561,20.72 21.7473844,20.8888889 21.8021214,21.0666667 C21.8568584,21.2444444 21.9024726,21.3955556 21.9389639,21.52 C21.9754552,21.6622222 22.0119466,21.8622222 22.0484379,22.12 C22.0849292,22.3777778 22.1214206,22.64 22.1579119,22.9066667 C22.2126489,23.2266667 22.2673859,23.5644444 22.3221229,23.92 L41.042175,23.92 Z", "object-key-init"),
        transform: cc11001100_hook("transform", "translate(-16 -20)", "object-key-init")
      }));
    }
    var W = cc11001100_hook("W", n(62630), "var-init");
    var j = cc11001100_hook("j", {
        invalid: function (e) {
          var t = cc11001100_hook("t", e.text, "var-init");
          return u().createElement(u().Fragment, null, u().createElement("span", {
            className: cc11001100_hook("className", "zh-advert-pligin-invalid-replace-sign", "object-key-init")
          }, u().createElement(W.l, {
            width: cc11001100_hook("width", 17, "object-key-init")
          }), t), u().createElement("span", {
            className: cc11001100_hook("className", "zh-advert-pligin-invalid-replace-placeholder", "object-key-init")
          }, " "));
        },
        audit: function (e) {
          var t = cc11001100_hook("t", e.text, "var-init");
          return u().createElement(u().Fragment, null, u().createElement("span", {
            className: cc11001100_hook("className", "zh-advert-plugin-audit-replace-sign", "object-key-init")
          }, u().createElement(W.l, {
            width: cc11001100_hook("width", 17, "object-key-init")
          }), t), u().createElement("span", {
            className: cc11001100_hook("className", "zh-advert-plugin-audit-replace-placeholder", "object-key-init")
          }, " "));
        }
      }, "var-init"),
      G = cc11001100_hook("G", function (e) {
        function t() {
          return (0, c.Z)(this, t), (0, i.Z)(this, (0, s.Z)(t).apply(this, arguments));
        }
        return (0, l.Z)(t, e), (0, o.Z)(t, [{
          key: cc11001100_hook("key", "render", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this.props, "var-init"),
              t = cc11001100_hook("t", e.children, "var-init"),
              n = cc11001100_hook("n", e.signData, "var-init"),
              a = cc11001100_hook("a", n.text, "var-init"),
              r = cc11001100_hook("r", n.type, "var-init"),
              c = cc11001100_hook("c", j[r], "var-init");
            return c ? u().createElement(c, {
              text: cc11001100_hook("text", a, "object-key-init")
            }) : t;
          }
        }]), t;
      }(d.Component), "var-init");
    function X() {
      return u().createElement(W.l, {
        width: cc11001100_hook("width", 17, "object-key-init"),
        style: {
          flexShrink: cc11001100_hook("flexShrink", 0, "object-key-init")
        }
      });
    }
    G.defaultProps = cc11001100_hook("G.defaultProps", {
      signData: {}
    }, "assign");
    var J = cc11001100_hook("J", G, "var-init"),
      q = cc11001100_hook("q", n(23940), "var-init"),
      K = function (e) {
        e.align, e.url;
        return null;
      },
      Q = function (e) {
        var t = cc11001100_hook("t", e.align, "var-init"),
          n = cc11001100_hook("n", void 0 === t ? "center" : t, "var-init"),
          a = cc11001100_hook("a", e.data, "var-init"),
          r = cc11001100_hook("r", void 0 === a ? {} : a, "var-init"),
          c = cc11001100_hook("c", e.parseUA, "var-init"),
          o = cc11001100_hook("o", r.cardType, "var-init");
        return o && ["message"].includes(o) || (0, p.I2)(c) ? "" : u().createElement(K, {
          align: cc11001100_hook("align", n, "object-key-init")
        });
      },
      $ = cc11001100_hook("$", "ecommerce-ad", "var-init");
    function ee(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.data, "var-init"),
        n = cc11001100_hook("n", t.picUrl, "var-init"),
        a = cc11001100_hook("a", t.logo, "var-init"),
        r = cc11001100_hook("r", t.productName, "var-init"),
        c = cc11001100_hook("c", t.description, "var-init"),
        o = cc11001100_hook("o", t.price, "var-init"),
        i = cc11001100_hook("i", t.interactionLaunch, "var-init"),
        s = cc11001100_hook("s", t.showCartIcon, "var-init"),
        l = cc11001100_hook("l", t.showPrice, "var-init"),
        d = cc11001100_hook("d", t.className, "var-init"),
        m = cc11001100_hook("m", t.data, "var-init"),
        p = cc11001100_hook("p", t.parseUA, "var-init"),
        v = cc11001100_hook("v", e.onSetRef, "var-init"),
        h = cc11001100_hook("h", e.onClick, "var-init");
      return u().createElement("div", {
        className: cc11001100_hook("className", "".concat($, "-container ").concat(d), "object-key-init")
      }, u().createElement("div", {
        className: cc11001100_hook("className", $, "object-key-init"),
        ref: cc11001100_hook("ref", v, "object-key-init"),
        onClick: cc11001100_hook("onClick", h, "object-key-init"),
        "data-ad-type": cc11001100_hook("data-ad-type", "ecommerce-ad-card", "object-key-init")
      }, u().createElement("div", {
        className: cc11001100_hook("className", "".concat($, "-img"), "object-key-init"),
        style: {
          backgroundImage: cc11001100_hook("backgroundImage", "url(".concat(n, ")"), "object-key-init")
        }
      }), u().createElement("div", {
        className: cc11001100_hook("className", H()("".concat($, "-main"), {
          "ecommerce-ad-main-play": cc11001100_hook("ecommerce-ad-main-play", l, "object-key-init")
        }), "object-key-init")
      }, u().createElement("div", {
        className: cc11001100_hook("className", "".concat($, "-main-content"), "object-key-init")
      }, u().createElement("header", {
        className: cc11001100_hook("className", H()("".concat($, "-main-content-title"), {
          "ecommerce-ad-main-content-title-play": cc11001100_hook("ecommerce-ad-main-content-title-play", l, "object-key-init")
        }), "object-key-init")
      }, u().createElement(q.Z, {
        alt: cc11001100_hook("alt", "", "object-key-init"),
        className: cc11001100_hook("className", "".concat($, "-main-content-title-logo"), "object-key-init"),
        src: cc11001100_hook("src", a, "object-key-init"),
        align: cc11001100_hook("align", "middle", "object-key-init")
      }), r), u().createElement("div", {
        className: cc11001100_hook("className", H()("".concat($, "-main-content-des"), {
          "ecommerce-ad-main-content-des-none": cc11001100_hook("ecommerce-ad-main-content-des-none", !l, "object-key-init")
        }), "object-key-init")
      }, c), l && u().createElement("div", {
        className: cc11001100_hook("className", "".concat($, "-main-content-price"), "object-key-init")
      }, "¥", o))), u().createElement(J, {
        signData: cc11001100_hook("signData", M.Z8(m), "object-key-init")
      }, u().createElement("div", {
        className: cc11001100_hook("className", "".concat($, "-icon"), "object-key-init")
      }, s && u().createElement(Y, {
        className: cc11001100_hook("className", "".concat($, "-main-content-purchase"), "object-key-init")
      }), i))), u().createElement(Q, {
        align: cc11001100_hook("align", "center", "object-key-init"),
        data: cc11001100_hook("data", m, "object-key-init"),
        parseUA: cc11001100_hook("parseUA", p, "object-key-init")
      }));
    }
    function te(e) {
      cc11001100_hook("e", e, "function-parameter");
      return u().createElement("svg", (0, a.Z)({
        width: cc11001100_hook("width", "24px", "object-key-init"),
        height: cc11001100_hook("height", "24px", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 16 28", "object-key-init")
      }, e), u().createElement("g", {
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        transform: cc11001100_hook("transform", "translate(-16 -10)", "object-key-init")
      }, u().createElement("rect", {
        width: cc11001100_hook("width", "48", "object-key-init"),
        height: cc11001100_hook("height", "48", "object-key-init")
      }), u().createElement("path", {
        d: cc11001100_hook("d", "M16.5815824,37.3821495 C17.3536131,38.2059502 18.6110874,38.2059502 19.3860425,37.3821495 L31.4187837,25.4877594 C32.1937388,24.6639587 32.1937388,23.3329674 31.4187837,22.5091668 L19.3860425,10.6178505 C18.6110874,9.79404984 17.3565375,9.79404984 16.5815824,10.6178505 C15.8066273,11.4416511 15.8066273,12.7726424 16.578658,13.5964431 L26.6666667,24 L16.5815824,34.4035569 C15.8066273,35.2273576 15.8066273,36.5583489 16.5815824,37.3821495 Z", "object-key-init")
      })));
    }
    var ne = cc11001100_hook("ne", "ecommerce-ad-arrow", "var-init"),
      ae = function (e) {
        var t = cc11001100_hook("t", e.data, "var-init"),
          n = cc11001100_hook("n", t.picUrl, "var-init"),
          a = cc11001100_hook("a", t.description, "var-init"),
          r = cc11001100_hook("r", t.data, "var-init"),
          c = cc11001100_hook("c", t.productName, "var-init"),
          o = cc11001100_hook("o", t.interactionLaunch, "var-init"),
          i = cc11001100_hook("i", t.webExperiment, "var-init"),
          s = cc11001100_hook("s", t.parseUA, "var-init"),
          l = cc11001100_hook("l", e.onClick, "var-init"),
          d = cc11001100_hook("d", e.onSetRef, "var-init"),
          m = cc11001100_hook("m", e.isBottomStyle, "var-init"),
          p = cc11001100_hook("p", (i || {}).shangyebiaoshi, "var-init");
        return u().createElement("div", {
          className: cc11001100_hook("className", "ecommerce-ad-box", "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", H()(ne, {
            "ecommerce-ad-bottom-style": cc11001100_hook("ecommerce-ad-bottom-style", m, "object-key-init")
          }), "object-key-init"),
          onClick: cc11001100_hook("onClick", l, "object-key-init"),
          ref: cc11001100_hook("ref", d, "object-key-init"),
          "data-ad-type": cc11001100_hook("data-ad-type", "ecommerce-ad-card", "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ne, "-img"), "object-key-init"),
          style: {
            backgroundImage: cc11001100_hook("backgroundImage", "url(".concat(n, ")"), "object-key-init")
          }
        }, p ? u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ne, "-sign"), "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ne, "-sign-text"), "object-key-init")
        }, p)) : null), u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ne, "-main"), "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ne, "-main-content"), "object-key-init")
        }, m && u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ne, "-main-content-title"), "object-key-init")
        }, c.slice(0, -3)), u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ne, "-main-content-des"), "object-key-init")
        }, u().createElement("span", null, a))), u().createElement(J, {
          signData: cc11001100_hook("signData", M.Z8(r), "object-key-init")
        }, m ? u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ne, "-button"), "object-key-init")
        }, o) : u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ne, "-icon"), "object-key-init")
        }, u().createElement(te, {
          width: cc11001100_hook("width", "8px", "object-key-init"),
          height: cc11001100_hook("height", "14px", "object-key-init")
        }))))), u().createElement(Q, {
          data: cc11001100_hook("data", r, "object-key-init"),
          parseUA: cc11001100_hook("parseUA", s, "object-key-init")
        }));
      };
    function re(e) {
      cc11001100_hook("e", e, "function-parameter");
      return u().createElement("svg", (0, a.Z)({
        width: cc11001100_hook("width", "14", "object-key-init"),
        height: cc11001100_hook("height", "13", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 14 13", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        xmlns: cc11001100_hook("xmlns", "http://www.w3.org/2000/svg", "object-key-init")
      }, e), u().createElement("path", {
        d: cc11001100_hook("d", "M1.77384 11.3751C0.942575 10.5438 0.942575 9.19607 1.77384 8.36481L3.62091 6.51773C3.82838 6.31027 3.82838 5.9739 3.62091 5.76643C3.41345 5.55897 3.07708 5.55897 2.86961 5.76643L1.02254 7.61351C-0.223658 8.8597 -0.223658 10.8802 1.02254 12.1264C2.26873 13.3726 4.28921 13.3726 5.5354 12.1264L7.38248 10.2793C7.58995 10.0718 7.58995 9.73546 7.38248 9.528C7.17501 9.32053 6.83864 9.32053 6.63118 9.528L4.7841 11.3751C3.95284 12.2063 2.6051 12.2063 1.77384 11.3751ZM5.61858 3.01746C5.41112 3.22493 5.41112 3.5613 5.61858 3.76876C5.82605 3.97623 6.16242 3.97623 6.36988 3.76876L8.25739 1.88126C9.08865 1.05 10.4364 1.05 11.2677 1.88126C12.0989 2.71252 12.0989 4.06026 11.2677 4.89152L9.38015 6.77903C9.17268 6.98649 9.17268 7.32286 9.38015 7.53033C9.58761 7.73779 9.92398 7.73779 10.1314 7.53033L12.019 5.64282C13.2651 4.39663 13.2651 2.37615 12.019 1.12996C10.7728 -0.116235 8.75228 -0.116237 7.50609 1.12996L5.61858 3.01746ZM9.38915 4.51667C9.59661 4.3092 9.59661 3.97284 9.38915 3.76537C9.18168 3.5579 8.84531 3.5579 8.63785 3.76537L3.62917 8.77404C3.42171 8.98151 3.42171 9.31788 3.62917 9.52534C3.83664 9.73281 4.17301 9.73281 4.38048 9.52534L9.38915 4.51667Z", "object-key-init"),
        fill: cc11001100_hook("fill", "#175199", "object-key-init")
      }));
    }
    function ce(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.isFailurePlugin ? u().createElement(X, null) : u().createElement(re, null);
    }
    var oe = function (e) {
        var t = cc11001100_hook("t", e.data, "var-init"),
          n = cc11001100_hook("n", t.description, "var-init"),
          a = cc11001100_hook("a", t.data, "var-init"),
          r = cc11001100_hook("r", t.parseUA, "var-init"),
          c = cc11001100_hook("c", e.onClick, "var-init"),
          o = cc11001100_hook("o", e.onSetRef, "var-init"),
          i = cc11001100_hook("i", M.a4(a), "var-init");
        return u().createElement("p", null, u().createElement("p", {
          className: cc11001100_hook("className", "ecommerce-ad-link", "object-key-init"),
          onClick: cc11001100_hook("onClick", c, "object-key-init"),
          ref: cc11001100_hook("ref", o, "object-key-init"),
          "data-ad-type": cc11001100_hook("data-ad-type", "ecommerce-ad-card", "object-key-init")
        }, u().createElement(ce, {
          isFailurePlugin: cc11001100_hook("isFailurePlugin", i, "object-key-init")
        }), n), u().createElement(Q, {
          align: cc11001100_hook("align", "left", "object-key-init"),
          data: cc11001100_hook("data", a, "object-key-init"),
          parseUA: cc11001100_hook("parseUA", r, "object-key-init")
        }));
      },
      ie = cc11001100_hook("ie", "ecommerce-ad-floatNode", "var-init");
    function se(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.imgSrc, "var-init"),
        n = cc11001100_hook("n", e.description, "var-init"),
        a = cc11001100_hook("a", e.onClick, "var-init"),
        r = cc11001100_hook("r", e.onSetRef, "var-init"),
        c = cc11001100_hook("c", e.isExpand, "var-init");
      return u().createElement("div", {
        className: cc11001100_hook("className", H()(ie, {
          "Float-node-fadeIn": cc11001100_hook("Float-node-fadeIn", !c, "object-key-init")
        }), "object-key-init"),
        onClick: cc11001100_hook("onClick", a, "object-key-init"),
        ref: cc11001100_hook("ref", r, "object-key-init")
      }, u().createElement(q.Z, {
        className: cc11001100_hook("className", "".concat(ie, "-img"), "object-key-init"),
        src: cc11001100_hook("src", t, "object-key-init")
      }), u().createElement("span", {
        className: cc11001100_hook("className", "".concat(ie, "-desc"), "object-key-init")
      }, n));
    }
    function le() {
      return u().createElement("svg", {
        width: cc11001100_hook("width", "6", "object-key-init"),
        height: cc11001100_hook("height", "9", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 6 9", "object-key-init"),
        fill: cc11001100_hook("fill", "none", "object-key-init"),
        xmlns: cc11001100_hook("xmlns", "http://www.w3.org/2000/svg", "object-key-init")
      }, u().createElement("path", {
        d: cc11001100_hook("d", "M3.31467 4.5L0.745606 7.0685C0.418131 7.39598 0.418131 7.92692 0.745607 8.25439C1.07308 8.58187 1.60402 8.58187 1.9315 8.25439L5.09295 5.09295C5.25028 4.93572 5.33867 4.72242 5.33867 4.5C5.33867 4.27758 5.25028 4.06428 5.09295 3.90705L1.9315 0.745606C1.60402 0.418131 1.07308 0.418131 0.745607 0.745606C0.418131 1.07308 0.418131 1.60402 0.745606 1.9315L3.31467 4.5Z", "object-key-init"),
        fill: cc11001100_hook("fill", "#FF7955", "object-key-init")
      }));
    }
    var de = cc11001100_hook("de", "ecommerce-ad-commodity", "var-init"),
      ue = cc11001100_hook("ue", "ecommerce-ad-commodity-box", "var-init"),
      me = function (e) {
        var t = cc11001100_hook("t", e.data, "var-init"),
          n = cc11001100_hook("n", t.picUrl, "var-init"),
          a = cc11001100_hook("a", t.showPrice, "var-init"),
          r = cc11001100_hook("r", t.description, "var-init"),
          c = cc11001100_hook("c", t.data, "var-init"),
          o = cc11001100_hook("o", t.channelSource, "var-init"),
          i = cc11001100_hook("i", t.price2Decimal, "var-init"),
          s = cc11001100_hook("s", t.webExperiment, "var-init"),
          l = cc11001100_hook("l", t.parseUA, "var-init"),
          d = cc11001100_hook("d", e.onClick, "var-init"),
          m = cc11001100_hook("m", e.onSetRef, "var-init"),
          p = cc11001100_hook("p", (s || {}).shangyebiaoshi, "var-init");
        return u().createElement("div", {
          className: cc11001100_hook("className", H()("ecommerce-ad-box", ue), "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "ecommerce-ad-commodity", "object-key-init"),
          onClick: cc11001100_hook("onClick", d, "object-key-init"),
          ref: cc11001100_hook("ref", m, "object-key-init"),
          "data-ad-type": cc11001100_hook("data-ad-type", "ecommerce-ad-card", "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "".concat(de, "-img"), "object-key-init"),
          style: {
            backgroundImage: cc11001100_hook("backgroundImage", "url(".concat(n, ")"), "object-key-init")
          }
        }, p ? u().createElement("div", {
          className: cc11001100_hook("className", "".concat(de, "-sign"), "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "".concat(de, "-sign-text"), "object-key-init")
        }, p)) : null), u().createElement("div", {
          className: cc11001100_hook("className", "".concat(de, "-main"), "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "".concat(de, "-main-content"), "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "".concat(de, "-main-content-des"), "object-key-init")
        }, u().createElement("span", null, r)), u().createElement("div", {
          className: cc11001100_hook("className", "".concat(de, "-main-content-source"), "object-key-init")
        }, o || "")), u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ue, "-main-second"), "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ue, "-main-second-price"), "object-key-init")
        }, a && "¥".concat(i)), u().createElement(J, {
          signData: cc11001100_hook("signData", M.Z8(c), "object-key-init")
        }, u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ue, "-main-second-right"), "object-key-init")
        }, "去购买", u().createElement("div", {
          className: cc11001100_hook("className", "".concat(ue, "-icon"), "object-key-init")
        }, u().createElement(le, {
          className: cc11001100_hook("className", "rightArrow", "object-key-init")
        }))))))), u().createElement(Q, {
          data: cc11001100_hook("data", c, "object-key-init"),
          parseUA: cc11001100_hook("parseUA", l, "object-key-init")
        }));
      };
    function pe(e) {
      cc11001100_hook("e", e, "function-parameter");
      return u().createElement("svg", (0, a.Z)({
        width: cc11001100_hook("width", "24", "object-key-init"),
        height: cc11001100_hook("height", "24", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 24 24", "object-key-init")
      }, e), u().createElement("path", {
        d: cc11001100_hook("d", "M16.1917 20C14.4179 19.9167 12.0796 18.25 9.90253 15.5L9.09622 14.5C6.91918 11.6667 5.79035 9 6.03224 7.25C6.27413 6 8.04802 5 9.01559 5C9.49937 5 9.66064 5.25 9.74127 5.41667C10.3057 6.5 11.0314 8.33333 11.0314 8.91667V9.08333C10.8701 9.41667 10.6282 9.58333 10.3863 9.66667C9.98316 9.91667 9.8219 10 9.8219 10.4167C9.8219 10.5 9.90253 11 11.3539 12.9167L11.9989 13.6667C13.4503 15.4167 13.8534 15.6667 14.0147 15.6667C14.3372 15.75 14.4985 15.5833 14.7404 15.25C14.9017 15 15.1435 14.75 15.4661 14.75H15.6273C16.2724 14.9167 17.885 16 18.7719 16.75C18.9332 16.8333 19.0945 17.0833 18.9332 17.75C18.6107 18.5833 17.3206 20 16.1917 20Z", "object-key-init"),
        fill: cc11001100_hook("fill", "#0084FF", "object-key-init")
      }));
    }
    var ve = cc11001100_hook("ve", "ecommerce-ad-TelephoneCard", "var-init");
    var he = cc11001100_hook("he", "ecommerce-ad-form", "var-init"),
      fe = cc11001100_hook("fe", Object.freeze({
        NO_VERIFY: cc11001100_hook("NO_VERIFY", "NONE", "object-key-init"),
        ALL_VERIFY: cc11001100_hook("ALL_VERIFY", "ALL", "object-key-init"),
        CHECK_AUTO: cc11001100_hook("CHECK_AUTO", "WRITE", "object-key-init")
      }), "var-init"),
      Ce = cc11001100_hook("Ce", function (e) {
        function t(e) {
          cc11001100_hook("e", e, "function-parameter");
          var n;
          (0, c.Z)(this, t), (n = cc11001100_hook("n", (0, i.Z)(this, (0, s.Z)(t).call(this, e)), "assign")).handleChecked = cc11001100_hook("(n = (0, i.Z)(this, (0, s.Z)(t).call(this, e))).handleChecked", function () {
            n.setState(function (e) {
              return {
                checked: cc11001100_hook("checked", !e.checked, "object-key-init")
              };
            });
          }, "assign"), n.handleSendCaptcha = cc11001100_hook("n.handleSendCaptcha", function () {
            var e = cc11001100_hook("e", n.props.data.originData.onSendVerify, "var-init"),
              t = cc11001100_hook("t", n.state, "var-init"),
              a = cc11001100_hook("a", t.phone, "var-init");
            t.submitSuccess || (a ? 11 === a.length ? e ? n.verifyPromise = cc11001100_hook("n.verifyPromise", e({
              phone: cc11001100_hook("phone", a, "object-key-init")
            }).then(function () {
              n.setState({
                message: cc11001100_hook("message", "", "object-key-init"),
                captchaCountdown: cc11001100_hook("captchaCountdown", 60, "object-key-init")
              }, function () {
                var e = cc11001100_hook("e", setInterval(function () {
                  n.setState({
                    captchaCountdown: cc11001100_hook("captchaCountdown", n.state.captchaCountdown - 1, "object-key-init")
                  }, function () {
                    n.state.captchaCountdown <= 0 && (clearInterval(e), n.verifyPromise = cc11001100_hook("n.verifyPromise", null, "assign"), n.setState({
                      captchaCountdown: cc11001100_hook("captchaCountdown", 0, "object-key-init")
                    }));
                  });
                }, 1e3), "var-init");
              });
            }).catch(function () {
              var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
                t = cc11001100_hook("t", e.message, "var-init"),
                a = cc11001100_hook("a", void 0 === t ? "请求错误,稍后再试" : t, "var-init");
              n.verifyPromise = cc11001100_hook("n.verifyPromise", null, "assign"), n.setState({
                message: cc11001100_hook("message", a, "object-key-init")
              });
            }), "assign") : n.setState({
              message: cc11001100_hook("message", "无法发送短信,刷新页面稍后再试", "object-key-init")
            }) : n.setState({
              message: cc11001100_hook("message", "请输入正确的手机号", "object-key-init")
            }) : n.setState({
              message: cc11001100_hook("message", "手机号不能为空", "object-key-init")
            }));
          }, "assign"), n.handleChange = cc11001100_hook("n.handleChange", function (e) {
            return function (t) {
              var a,
                r,
                c = cc11001100_hook("c", (null == t || null === (a = cc11001100_hook("a", t.target, "assign")) || void 0 === a || null === (r = cc11001100_hook("r", a.value, "assign")) || void 0 === r ? void 0 : r.trim()) || "", "var-init");
              ["phone", "captcha"].includes(e) && (c = cc11001100_hook("c", c.replace(/[^\d]/g, ""), "assign")), c = cc11001100_hook("c", c.substring(0, 11), "assign"), n.setState((0, m.Z)({}, e, c));
            };
          }, "assign"), n.handleSubmit = cc11001100_hook("n.handleSubmit", function () {
            var e = cc11001100_hook("e", n.props, "var-init"),
              t = cc11001100_hook("t", e.data.originData, "var-init"),
              a = cc11001100_hook("a", e.dataModel, "var-init"),
              c = cc11001100_hook("c", n.state, "var-init"),
              o = cc11001100_hook("o", c.phone, "var-init"),
              i = cc11001100_hook("i", c.name, "var-init"),
              s = cc11001100_hook("s", c.captcha, "var-init"),
              l = cc11001100_hook("l", c.submitSuccess, "var-init");
            if (11 === o.length) {
              var d = cc11001100_hook("d", t.onSubmit, "var-init");
              n.submitPromise || l || (d ? n.submitPromise = cc11001100_hook("n.submitPromise", d({
                name: cc11001100_hook("name", i, "object-key-init"),
                phone: cc11001100_hook("phone", o, "object-key-init"),
                verifyCode: cc11001100_hook("verifyCode", s, "object-key-init")
              }).then(function () {
                var e, c;
                n.setState({
                  submitSuccess: cc11001100_hook("submitSuccess", !0, "object-key-init"),
                  message: cc11001100_hook("message", "", "object-key-init")
                }), n.submitPromise = cc11001100_hook("n.submitPromise", null, "assign"), (0, p.Vg)({
                  conversion: cc11001100_hook("conversion", null !== (e = cc11001100_hook("e", null == t || null === (c = cc11001100_hook("c", t.data, "assign")) || void 0 === c ? void 0 : c.conversion, "assign")) && void 0 !== e ? e : [], "object-key-init")
                }, (0, r.Z)({}, (0, g.getTrackMacroOptions)(), null == a ? void 0 : a._getMacroOptions(), {
                  appendParams: cc11001100_hook("appendParams", "et=submit_success", "object-key-init")
                })).conversion.forEach(function (e) {
                  return (0, p.Yv)(e);
                });
              }).catch(function () {
                var e,
                  t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
                console.log("e:", t), n.setState({
                  message: cc11001100_hook("message", null !== (e = cc11001100_hook("e", null == t ? void 0 : t.message, "assign")) && void 0 !== e ? e : "提交失败", "object-key-init")
                }), n.submitPromise = cc11001100_hook("n.submitPromise", null, "assign");
              }), "assign") : n.setState({
                message: cc11001100_hook("message", "无法提交,刷新页面稍后再试", "object-key-init")
              }));
            } else n.setState({
              message: cc11001100_hook("message", "请输入正确的手机号", "object-key-init")
            });
          }, "assign");
          var a = cc11001100_hook("a", n.props.data.originData.phone, "var-init"),
            o = cc11001100_hook("o", void 0 === a ? "" : a, "var-init");
          return o = cc11001100_hook("o", o.substr(-11), "assign"), n.state = cc11001100_hook("n.state", {
            submitSuccess: cc11001100_hook("submitSuccess", !1, "object-key-init"),
            message: cc11001100_hook("message", "", "object-key-init"),
            checked: cc11001100_hook("checked", !0, "object-key-init"),
            captchaCountdown: cc11001100_hook("captchaCountdown", 0, "object-key-init"),
            phone: cc11001100_hook("phone", o, "object-key-init")
          }, "assign"), n;
        }
        return (0, l.Z)(t, e), (0, o.Z)(t, [{
          key: cc11001100_hook("key", "render", "object-key-init"),
          value: function () {
            var e,
              t,
              n = cc11001100_hook("n", this.props, "var-init"),
              a = cc11001100_hook("a", n.data, "var-init"),
              r = cc11001100_hook("r", a.description, "var-init"),
              c = cc11001100_hook("c", a.parseUA, "var-init"),
              o = cc11001100_hook("o", n.onSetRef, "var-init"),
              i = cc11001100_hook("i", this.state, "var-init"),
              s = cc11001100_hook("s", i.checked, "var-init"),
              l = cc11001100_hook("l", i.captchaCountdown, "var-init"),
              d = cc11001100_hook("d", i.phone, "var-init"),
              p = cc11001100_hook("p", void 0 === d ? "" : d, "var-init"),
              v = cc11001100_hook("v", i.name, "var-init"),
              h = cc11001100_hook("h", void 0 === v ? "" : v, "var-init"),
              f = cc11001100_hook("f", i.captcha, "var-init"),
              C = cc11001100_hook("C", i.message, "var-init"),
              g = cc11001100_hook("g", i.submitSuccess, "var-init"),
              E = cc11001100_hook("E", s && h && p && (!this.showVerify || f), "var-init");
            return u().createElement("div", {
              className: cc11001100_hook("className", "ecommerce-ad-box", "object-key-init")
            }, u().createElement("div", {
              className: cc11001100_hook("className", he, "object-key-init"),
              ref: cc11001100_hook("ref", o, "object-key-init"),
              "data-ad-type": cc11001100_hook("data-ad-type", "ecommerce-ad-card", "object-key-init")
            }, u().createElement("div", {
              className: cc11001100_hook("className", "".concat(he, "-title"), "object-key-init")
            }, r), u().createElement("input", {
              className: cc11001100_hook("className", "".concat(he, "-input"), "object-key-init"),
              type: cc11001100_hook("type", "text", "object-key-init"),
              placeholder: cc11001100_hook("placeholder", "请输入姓名", "object-key-init"),
              onChange: cc11001100_hook("onChange", this.handleChange("name"), "object-key-init"),
              disabled: cc11001100_hook("disabled", g, "object-key-init")
            }), u().createElement("input", {
              className: cc11001100_hook("className", "".concat(he, "-input"), "object-key-init"),
              type: cc11001100_hook("type", "text", "object-key-init"),
              placeholder: cc11001100_hook("placeholder", "请输入手机号", "object-key-init"),
              onChange: cc11001100_hook("onChange", this.handleChange("phone"), "object-key-init"),
              value: cc11001100_hook("value", p, "object-key-init"),
              disabled: cc11001100_hook("disabled", g, "object-key-init")
            }), this.showVerify && u().createElement("div", {
              className: cc11001100_hook("className", "".concat(he, "-verify"), "object-key-init")
            }, u().createElement("input", {
              className: cc11001100_hook("className", "".concat(he, "-input"), "object-key-init"),
              type: cc11001100_hook("type", "text", "object-key-init"),
              placeholder: cc11001100_hook("placeholder", "请输入验证码", "object-key-init"),
              onChange: cc11001100_hook("onChange", this.handleChange("captcha"), "object-key-init"),
              disabled: cc11001100_hook("disabled", g, "object-key-init")
            }), u().createElement("span", {
              className: cc11001100_hook("className", H()("".concat(he, "-submit"), (e = cc11001100_hook("e", {}, "assign"), (0, m.Z)(e, "".concat(he, "-submit-active"), !l), (0, m.Z)(e, "".concat(he, "-submit-disabled"), Boolean(l)), e)), "object-key-init"),
              onClick: cc11001100_hook("onClick", this.handleSendCaptcha, "object-key-init")
            }, l ? "".concat(l, " 秒") : "发送验证码")), u().createElement("div", {
              className: cc11001100_hook("className", "".concat(he, "-protocol"), "object-key-init"),
              onClick: cc11001100_hook("onClick", this.handleChecked, "object-key-init")
            }, u().createElement("input", {
              type: cc11001100_hook("type", "checkbox", "object-key-init"),
              checked: cc11001100_hook("checked", s, "object-key-init"),
              readOnly: cc11001100_hook("readOnly", !0, "object-key-init")
            }), "点击提交即视为同意将您的信息分享给商家，商家将尽快与您联系"), Boolean(C.length) && u().createElement("div", {
              className: cc11001100_hook("className", "".concat(he, "-message"), "object-key-init")
            }, C), u().createElement("div", {
              className: cc11001100_hook("className", H()("".concat(he, "-submit"), (t = cc11001100_hook("t", {}, "assign"), (0, m.Z)(t, "".concat(he, "-submit-active"), E), (0, m.Z)(t, "".concat(he, "-submit-disabled"), !E || g), t)), "object-key-init"),
              onClick: cc11001100_hook("onClick", this.handleSubmit, "object-key-init")
            }, g ? "提交成功" : "提交信息")), u().createElement(Q, {
              parseUA: cc11001100_hook("parseUA", c, "object-key-init")
            }));
          }
        }, {
          key: cc11001100_hook("key", "showVerify", "object-key-init"),
          get: function () {
            var e,
              t = cc11001100_hook("t", this.props.data.originData, "var-init"),
              n = cc11001100_hook("n", this.state.phone, "var-init"),
              a = cc11001100_hook("a", t.data.verifyType, "var-init");
            return a === fe.ALL_VERIFY || a === fe.CHECK_AUTO && (null == t || null === (e = cc11001100_hook("e", t.phone, "assign")) || void 0 === e ? void 0 : e.substr(-11)) !== n;
          }
        }]), t;
      }(d.Component), "var-init"),
      ge = cc11001100_hook("ge", n(68649), "var-init"),
      Ee = cc11001100_hook("Ee", n(75926), "var-init"),
      ke = cc11001100_hook("ke", n.n(Ee), "var-init"),
      ye = cc11001100_hook("ye", (n(77638), n(14910)), "var-init"),
      Ne = cc11001100_hook("Ne", n(77568), "var-init"),
      we = cc11001100_hook("we", n.n(Ne), "var-init"),
      be = cc11001100_hook("be", n(30975), "var-init");
    function Te(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "[object Number]" === Object.prototype.toString.call(e);
    }
    var Ze = cc11001100_hook("Ze", "CLICK", "var-init"),
      _e = cc11001100_hook("_e", "VIEW", "var-init"),
      Se = cc11001100_hook("Se", "VIEWX", "var-init"),
      xe = cc11001100_hook("xe", "IMPRESSION", "var-init"),
      Ue = cc11001100_hook("Ue", {
        AD: cc11001100_hook("AD", "AD", "object-key-init"),
        PLUGIN: cc11001100_hook("PLUGIN", "PLUGIN", "object-key-init")
      }, "var-init"),
      Ie = cc11001100_hook("Ie", n(48457), "var-init"),
      Le = cc11001100_hook("Le", "BIZ=ECOMMERCE", "var-init");
    var Ae = function (e) {
        for (var t = cc11001100_hook("t", Array.from(document.querySelectorAll("[data-ad-type='ecommerce-ad-card'],a[data-draft-type='link-card'],a[data-draft-type='ad-link-card']")).filter(function (e) {
            return "link-card" !== e.getAttribute("data-draft-type") || !!function (e) {
              return e.includes(Le) ? e : e.includes(encodeURIComponent(Le)) ? decodeURIComponent(ye.parse(e.slice(e.indexOf("?") + 1)).target || "") : "";
            }(e.href).includes(Le);
          }), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) if (t[n] == e) return n + 1;
        return -1;
      },
      Oe = cc11001100_hook("Oe", u().createContext({}), "var-init");
    var De = function () {
        var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
          t = cc11001100_hook("t", e.clickTrackFunc, "var-init"),
          n = cc11001100_hook("n", void 0 === t ? function (e) {
            return (0, be.Ti)(e);
          } : t, "var-init"),
          a = cc11001100_hook("a", e.trackFunc, "var-init"),
          r = cc11001100_hook("r", void 0 === a ? function (e) {
            return Promise.all(e.map(function (e) {
              return (0, p.j)(e);
            }));
          } : a, "var-init");
        return function (e, t) {
          var a = cc11001100_hook("a", t.actionType, "var-init");
          return e = cc11001100_hook("e", e.filter(Boolean), "assign"), a === Ze ? n(e, t) : r(e, t);
        };
      },
      Re = cc11001100_hook("Re", function (e) {
        function t() {
          var e, n;
          (0, c.Z)(this, t);
          for (var a = cc11001100_hook("a", arguments.length, "var-init"), o = cc11001100_hook("o", new Array(a), "var-init"), l = cc11001100_hook("l", 0, "var-init"); l < a; l++) o[l] = cc11001100_hook("o[l]", arguments[l], "assign");
          return (n = cc11001100_hook("n", (0, i.Z)(this, (e = cc11001100_hook("e", (0, s.Z)(t), "assign")).call.apply(e, [this].concat(o))), "assign")).__setTrackRef = cc11001100_hook("(n = (0, i.Z)(this, (e = (0, s.Z)(t)).call.apply(e, [this].concat(o)))).__setTrackRef", function (e) {
            n.node = cc11001100_hook("n.node", e, "assign");
          }, "assign"), n.onTrackClick = cc11001100_hook("n.onTrackClick", function (e) {
            n.sendClickTrack(e);
          }, "assign"), n.observers = cc11001100_hook("n.observers", [], "assign"), n.touchStartTime = cc11001100_hook("n.touchStartTime", Date.now(), "assign"), n.state = cc11001100_hook("n.state", {
            providerValue: {
              setTrackRef: cc11001100_hook("setTrackRef", n.__setTrackRef, "object-key-init"),
              onTrackClick: cc11001100_hook("onTrackClick", n.onTrackClick, "object-key-init")
            }
          }, "assign"), n.sendTrackArray = cc11001100_hook("n.sendTrackArray", function (e, t) {
            if (Array.isArray(e) && 0 !== e.length) {
              var a = cc11001100_hook("a", t.actionType, "var-init"),
                r = cc11001100_hook("r", n.props, "var-init"),
                c = cc11001100_hook("c", r.sendTracks, "var-init"),
                o = cc11001100_hook("o", r.onSendTracksBefore, "var-init"),
                i = cc11001100_hook("i", r.onSendTracksAfter, "var-init"),
                s = cc11001100_hook("s", e, "var-init");
              if (s = cc11001100_hook("s", o(s, t), "assign"), !Array.isArray(s)) throw new TypeError("必须返回打点请求的数组");
              i(c(s, {
                actionType: cc11001100_hook("actionType", a, "object-key-init")
              }), t);
            }
          }, "assign"), n.replacePosition = cc11001100_hook("n.replacePosition", function (e) {
            if (n.props.isReplacePosition) {
              var t;
              if (!n.position) n.position = cc11001100_hook("n.position", (null === (t = cc11001100_hook("t", n.props, "assign")) || void 0 === t ? void 0 : t.cardIndex) || Ae(n.node), "assign"), n.props.setPosition(n.position);
              return (0, p.ow)(e, {
                position: cc11001100_hook("position", n.position, "object-key-init")
              });
            }
            return e;
          }, "assign"), n.getClickData = cc11001100_hook("n.getClickData", function (e) {
            if (!(e && n.node && Te(e.clientX) && Te(e.clientY))) return "";
            var t = cc11001100_hook("t", (0, be.PV)(e, n.node), "var-init"),
              a = cc11001100_hook("a", (0, be.JG)(n.touchStartTime), "var-init");
            return ye.stringify((0, r.Z)({}, t, a));
          }, "assign"), n.getClickUrls = cc11001100_hook("n.getClickUrls", function (e, t) {
            if (!n.props.sendClickData) return n.replacePosition(e);
            var a = cc11001100_hook("a", n.getClickData(t), "var-init");
            return (n.replacePosition(e) || []).map(function (e) {
              return "".concat(e, "&").concat(a);
            });
          }, "assign"), n.sendClickTrack = cc11001100_hook("n.sendClickTrack", function (e) {
            var t, a;
            (n.props.zaClick && n.props.zaClick.id && (0, be.rz)("trackEvent", n.node, {
              id: cc11001100_hook("id", n.props.zaClick.id, "object-key-init"),
              action: cc11001100_hook("action", "Click", "object-key-init")
            }), n.props.zaEnvBlock) && (null === (t = cc11001100_hook("t", n.zaRef, "assign")) || void 0 === t || null === (a = cc11001100_hook("a", t.current, "assign")) || void 0 === a || a.trackEvent({
              eventType: cc11001100_hook("eventType", "Click", "object-key-init"),
              action: cc11001100_hook("action", "OpenUrl", "object-key-init"),
              elementLocation: {
                type: cc11001100_hook("type", "Card", "object-key-init")
              }
            }));
            n.sendTrackArray(n.getClickUrls(n.__trackUrls.clicks, e), {
              actionType: cc11001100_hook("actionType", Ze, "object-key-init"),
              event: cc11001100_hook("event", e, "object-key-init")
            });
          }, "assign"), n.calculateMacroOptions = cc11001100_hook("n.calculateMacroOptions", function (e) {
            var t = cc11001100_hook("t", (0, p.dU)(e), "var-init"),
              a = cc11001100_hook("a", t.os, "var-init"),
              c = cc11001100_hook("c", t.platform, "var-init"),
              o = cc11001100_hook("o", (0, p.I2)(e), "var-init"),
              i = cc11001100_hook("i", (navigator && (0, p.Sf)(navigator.userAgent)).version, "var-init");
            return n.__trackUrlMacroOption = cc11001100_hook("n.__trackUrlMacroOption", (0, r.Z)({
              os: cc11001100_hook("os", a, "object-key-init"),
              ua: cc11001100_hook("ua", navigator.userAgent, "object-key-init"),
              platform: cc11001100_hook("platform", c, "object-key-init"),
              isHybrid: cc11001100_hook("isHybrid", o ? "1" : "0", "object-key-init"),
              version: cc11001100_hook("version", i, "object-key-init")
            }, n.props.getMacroOptions()), "assign");
          }, "assign"), n.replaceUrlMacro = cc11001100_hook("n.replaceUrlMacro", function () {
            var e = cc11001100_hook("e", n.props, "var-init"),
              t = cc11001100_hook("t", e.views, "var-init"),
              a = cc11001100_hook("a", e.impressions, "var-init"),
              r = cc11001100_hook("r", e.clicks, "var-init"),
              c = cc11001100_hook("c", e.viewXs, "var-init"),
              o = cc11001100_hook("o", e.parseUA, "var-init");
            n.__trackUrls = cc11001100_hook("n.__trackUrls", (0, p.Vg)({
              views: cc11001100_hook("views", t, "object-key-init"),
              impressions: cc11001100_hook("impressions", a, "object-key-init"),
              clicks: cc11001100_hook("clicks", r, "object-key-init"),
              viewXs: cc11001100_hook("viewXs", c, "object-key-init")
            }, n.calculateMacroOptions(o)), "assign");
          }, "assign"), n.zaRef = cc11001100_hook("n.zaRef", u().createRef(), "assign"), n;
        }
        return (0, l.Z)(t, e), (0, o.Z)(t, [{
          key: cc11001100_hook("key", "addListener", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this, "var-init");
            this.node && !this.observers.length && (this.sendTrackArray(this.__trackUrls.impressions, {
              actionType: cc11001100_hook("actionType", xe, "object-key-init")
            }), this.props.sendClickData && this.node.addEventListener("touchstart", function () {
              e.touchStartTime = cc11001100_hook("e.touchStartTime", Date.now(), "assign");
            }), this.makeObservers([{
              threshold: cc11001100_hook("threshold", [0], "object-key-init"),
              callback: function () {
                e.props.zaView && e.props.zaView.id && e.node && (0, be.rz)("cardShow", e.node, {
                  id: cc11001100_hook("id", e.props.zaView.id, "object-key-init")
                }), e.sendTrackArray(e.replacePosition(e.__trackUrls.views), {
                  actionType: cc11001100_hook("actionType", _e, "object-key-init")
                });
              }
            }, {
              threshold: cc11001100_hook("threshold", [.3], "object-key-init"),
              callback: function () {
                e.sendTrackArray(e.replacePosition(e.__trackUrls.viewXs), {
                  actionType: cc11001100_hook("actionType", Se, "object-key-init")
                });
              }
            }]));
          }
        }, {
          key: cc11001100_hook("key", "makeObservers", "object-key-init"),
          value: function (e) {
            var t = cc11001100_hook("t", this, "var-init");
            if (this.node) if (Array.isArray(e)) e.forEach(function (e) {
              t.makeObservers(e);
            });else {
              var n = cc11001100_hook("n", e.callback, "var-init"),
                a = cc11001100_hook("a", function (e, t) {
                  var n = cc11001100_hook("n", t.threshold, "var-init");
                  return new window.IntersectionObserver(e, {
                    threshold: cc11001100_hook("threshold", n, "object-key-init")
                  });
                }(function (e) {
                  (0, b.Z)(e, 1)[0].isIntersecting && (n(), a.disconnect());
                }, {
                  threshold: cc11001100_hook("threshold", e.threshold, "object-key-init")
                }), "var-init");
              a.observe(this.node), this.observers.push(a);
            }
          }
        }, {
          key: cc11001100_hook("key", "componentDidMount", "object-key-init"),
          value: function () {
            this.replaceUrlMacro(), this.addListener();
          }
        }, {
          key: cc11001100_hook("key", "componentDidUpdate", "object-key-init"),
          value: function () {
            this.addListener();
          }
        }, {
          key: cc11001100_hook("key", "componentWillUnmount", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this, "var-init");
            this.observers.forEach(function (t) {
              t.unobserve(e.node);
            }), this.observers = cc11001100_hook("this.observers", [], "assign");
          }
        }, {
          key: cc11001100_hook("key", "render", "object-key-init"),
          value: function () {
            var e,
              t = cc11001100_hook("t", this, "var-init"),
              n = cc11001100_hook("n", this.props, "var-init"),
              a = cc11001100_hook("a", n.children, "var-init"),
              r = cc11001100_hook("r", n.id, "var-init");
            return u().Children.only(a), u().createElement(Ie.eV, {
              content: {
                type: cc11001100_hook("type", "Ad", "object-key-init"),
                id: cc11001100_hook("id", "".concat(r), "object-key-init")
              },
              block: cc11001100_hook("block", "advertPluginCard", "object-key-init"),
              extra: {
                attachedInfoBytes: cc11001100_hook("attachedInfoBytes", "", "object-key-init")
              }
            }, u().createElement(Ie.pS, {
              ref: cc11001100_hook("ref", this.zaRef, "object-key-init")
            }), u().createElement(Ie.Wi, {
              zaType: cc11001100_hook("zaType", "Card", "object-key-init")
            }), u().createElement(Oe.Provider, {
              value: cc11001100_hook("value", this.state.providerValue, "object-key-init")
            }, (e = cc11001100_hook("e", a.type, "assign"), Boolean(e) && "string" == typeof e ? u().cloneElement(a, {
              ref: function (e) {
                !function (e, t) {
                  e && ("function" == typeof e ? e(t) : e.current = cc11001100_hook("e.current", t, "assign"));
                }(a.ref, e), t.node = cc11001100_hook("t.node", e, "assign");
              },
              onClick: function (e) {
                t.sendClickTrack(e), "function" == typeof a.props.onClick && a.props.onClick(e);
              }
            }) : a)));
          }
        }]), t;
      }(u().Component), "var-init");
    Re.propTypes = cc11001100_hook("Re.propTypes", {
      type: cc11001100_hook("type", ke().oneOf(Object.keys(Ue)), "object-key-init"),
      views: cc11001100_hook("views", ke().array, "object-key-init"),
      viewXs: cc11001100_hook("viewXs", ke().array, "object-key-init"),
      impressions: cc11001100_hook("impressions", ke().array, "object-key-init"),
      clicks: cc11001100_hook("clicks", ke().array, "object-key-init"),
      zaClick: cc11001100_hook("zaClick", ke().shape({
        id: cc11001100_hook("id", ke().number, "object-key-init")
      }), "object-key-init"),
      zaView: cc11001100_hook("zaView", ke().shape({
        id: cc11001100_hook("id", ke().number, "object-key-init")
      }), "object-key-init"),
      getMacroOptions: cc11001100_hook("getMacroOptions", ke().func, "object-key-init"),
      onSendTracksBefore: cc11001100_hook("onSendTracksBefore", ke().func, "object-key-init"),
      onSendTracksAfter: cc11001100_hook("onSendTracksAfter", ke().func, "object-key-init"),
      sendTracks: cc11001100_hook("sendTracks", ke().func.isRequired, "object-key-init")
    }, "assign"), Re.defaultProps = cc11001100_hook("Re.defaultProps", {
      views: cc11001100_hook("views", [], "object-key-init"),
      viewXs: cc11001100_hook("viewXs", [], "object-key-init"),
      impressions: cc11001100_hook("impressions", [], "object-key-init"),
      clicks: cc11001100_hook("clicks", [], "object-key-init"),
      getMacroOptions: function () {
        return {};
      },
      onSendTracksBefore: function (e) {
        return e;
      },
      onSendTracksAfter: function () {},
      type: cc11001100_hook("type", Ue.PLUGIN, "object-key-init"),
      sendTracks: cc11001100_hook("sendTracks", De(), "object-key-init")
    }, "assign"), [{
      name: cc11001100_hook("name", "PluginTrack", "object-key-init"),
      type: cc11001100_hook("type", Ue.PLUGIN, "object-key-init"),
      sendTracks: cc11001100_hook("sendTracks", De({
        clickTrackFunc: function (e) {
          return (0, be.Ti)({
            trackMethod: cc11001100_hook("trackMethod", be.Yv, "object-key-init"),
            tracks: cc11001100_hook("tracks", e, "object-key-init")
          });
        },
        trackFunc: function (e) {
          return Promise.all(e.map(function (e) {
            return (0, be.Yv)(e);
          }));
        }
      }), "object-key-init")
    }, {
      name: cc11001100_hook("name", "ADTrack", "object-key-init"),
      type: cc11001100_hook("type", Ue.AD, "object-key-init")
    }].forEach(function (e) {
      var t = cc11001100_hook("t", e.name, "var-init"),
        n = cc11001100_hook("n", e.type, "var-init"),
        r = cc11001100_hook("r", e.sendTracks, "var-init");
      Re[t] = cc11001100_hook("Re[t]", function (e) {
        var t = cc11001100_hook("t", e.children, "var-init"),
          c = cc11001100_hook("c", (0, ge.Z)(e, ["children"]), "var-init");
        return u().createElement(Re, (0, a.Z)({
          type: cc11001100_hook("type", n, "object-key-init"),
          sendTracks: cc11001100_hook("sendTracks", r, "object-key-init")
        }, c), t);
      }, "assign");
    });
    var Pe = cc11001100_hook("Pe", Re, "var-init"),
      Me = cc11001100_hook("Me", n(12856), "var-init");
    function ze(e) {
      cc11001100_hook("e", e, "function-parameter");
      return u().createElement("svg", (0, a.Z)({
        width: cc11001100_hook("width", "32", "object-key-init"),
        height: cc11001100_hook("height", "28", "object-key-init"),
        viewBox: cc11001100_hook("viewBox", "0 0 32 28", "object-key-init")
      }, e), u().createElement("g", {
        fill: cc11001100_hook("fill", "#0084FF", "object-key-init"),
        fillRule: cc11001100_hook("fillRule", "evenodd", "object-key-init"),
        transform: cc11001100_hook("transform", "translate(1.464 .212)", "object-key-init")
      }, u().createElement("path", {
        fillRule: cc11001100_hook("fillRule", "nonzero", "object-key-init"),
        d: cc11001100_hook("d", "M26.7860999,22.6432186 C26.7860999,23.4221053 26.1860408,24.0379555 25.465587,24.0379555 L3.60661269,24.0379555 C2.88615896,24.0379555 2.28609987,23.4221053 2.28609987,22.6432186 C2.28609987,21.8147915 1.61452699,21.1432186 0.786099865,21.1432186 C-0.0423272597,21.1432186 -0.713900135,21.8147915 -0.713900135,22.6432186 C-0.713900135,25.0617699 1.21161398,27.0379555 3.60661269,27.0379555 L25.465587,27.0379555 C27.8605858,27.0379555 29.7860999,25.0617699 29.7860999,22.6432186 C29.7860999,21.8147915 29.114527,21.1432186 28.2860999,21.1432186 C27.4576727,21.1432186 26.7860999,21.8147915 26.7860999,22.6432186 Z", "object-key-init")
      }), u().createElement("path", {
        d: cc11001100_hook("d", "M6.98076923,7.75 L22.7965587,7.75 C23.6249858,7.75 24.2965587,8.42157288 24.2965587,9.25 L24.2965587,10 C24.2965587,10.8284271 23.6249858,11.5 22.7965587,11.5 L6.98076923,11.5 C6.15234211,11.5 5.48076923,10.8284271 5.48076923,10 L5.48076923,9.25 C5.48076923,8.42157288 6.15234211,7.75 6.98076923,7.75 Z", "object-key-init"),
        transform: cc11001100_hook("transform", "rotate(90 14.889 9.625)", "object-key-init")
      }), u().createElement("path", {
        d: cc11001100_hook("d", "M14.1740505,12.9298687 L21.8895438,12.7652365 C22.7177824,12.7475637 23.4035291,13.4046571 23.4212019,14.2328957 C23.4215138,14.247512 23.421612,14.2621321 23.4214964,14.2767514 L23.4173849,14.7969038 C23.4109719,15.6082292 22.7605975,16.2673977 21.9494313,16.2847062 L14.233938,16.4493384 C13.4056994,16.4670112 12.7199527,15.8099178 12.7022799,14.9816792 C12.701968,14.9670629 12.7018698,14.9524427 12.7019854,14.9378235 L12.7060968,14.4176711 C12.7125099,13.6063457 13.3628843,12.9471772 14.1740505,12.9298687 Z", "object-key-init"),
        transform: cc11001100_hook("transform", "rotate(135 18.062 14.607)", "object-key-init")
      }), u().createElement("path", {
        d: cc11001100_hook("d", "M7.82789662,12.9298687 L15.5433899,12.7652365 C16.3716285,12.7475637 17.0573752,13.4046571 17.0750481,14.2328957 C17.07536,14.247512 17.0754581,14.2621321 17.0753426,14.2767514 L17.0712311,14.7969038 C17.0648181,15.6082292 16.4144436,16.2673977 15.6032775,16.2847062 L7.88778416,16.4493384 C7.05954556,16.4670112 6.37379885,15.8099178 6.35612601,14.9816792 C6.35581413,14.9670629 6.35571595,14.9524427 6.35583151,14.9378235 L6.35994299,14.4176711 C6.36635601,13.6063457 7.01673045,12.9471772 7.82789662,12.9298687 Z", "object-key-init"),
        transform: cc11001100_hook("transform", "scale(1 -1) rotate(-45 -23.55 0)", "object-key-init")
      })));
    }
    var Ve,
      Fe,
      Be = cc11001100_hook("Be", n(78597), "var-init"),
      He = cc11001100_hook("He", "ecommerce-ad-download-style", "var-init"),
      Ye = cc11001100_hook("Ye", "ecommerce-ad-download-warning", "var-init");
    function We(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      e.stopPropagation(), e.preventDefault(), P.execute({
        url: cc11001100_hook("url", t, "object-key-init"),
        cardType: cc11001100_hook("cardType", "baseUrl", "object-key-init")
      });
    }
    var je = cc11001100_hook("je", {
        card: cc11001100_hook("card", ae, "object-key-init"),
        text: cc11001100_hook("text", oe, "object-key-init"),
        ecard: cc11001100_hook("ecard", me, "object-key-init"),
        standard: cc11001100_hook("standard", ee, "object-key-init"),
        download: function (e) {
          var t = cc11001100_hook("t", e.data, "var-init"),
            n = cc11001100_hook("n", t.picUrl, "var-init"),
            a = cc11001100_hook("a", t.description, "var-init"),
            r = cc11001100_hook("r", t.productNameNew, "var-init"),
            c = cc11001100_hook("c", t.data, "var-init"),
            o = cc11001100_hook("o", t.pluginSourceFrom, "var-init"),
            i = cc11001100_hook("i", t.appInfo, "var-init"),
            s = cc11001100_hook("s", t.parseUA, "var-init"),
            l = cc11001100_hook("l", e.onClick, "var-init"),
            d = cc11001100_hook("d", e.onSetRef, "var-init"),
            m = cc11001100_hook("m", "string" == typeof i ? JSON.parse(i) : i, "var-init"),
            v = cc11001100_hook("v", (0, Me.camelizeKeys)(m) || {}, "var-init"),
            h = cc11001100_hook("h", v.name, "var-init"),
            f = cc11001100_hook("f", v.appVersion, "var-init"),
            C = cc11001100_hook("C", v.developer, "var-init"),
            g = cc11001100_hook("g", v.appPermissionsUrl, "var-init"),
            E = cc11001100_hook("E", v.appPrivacyUrl, "var-init"),
            k = cc11001100_hook("k", function (e) {
              var t = cc11001100_hook("t", e.iosScore, "var-init"),
                n = cc11001100_hook("n", void 0 === t ? 0 : t, "var-init"),
                a = cc11001100_hook("a", e.androidScore, "var-init"),
                r = cc11001100_hook("r", void 0 === a ? 0 : a, "var-init");
              return "android" === (0, p.dU)().os ? r : n;
            }(c), "var-init"),
            y = cc11001100_hook("y", V.CANVAS === o ? [function () {}, l] : [l, function () {}], "var-init"),
            N = cc11001100_hook("N", (0, b.Z)(y, 2), "var-init"),
            w = cc11001100_hook("w", N[0], "var-init"),
            T = cc11001100_hook("T", N[1], "var-init"),
            Z = cc11001100_hook("Z", h && f && C && g && E, "var-init"),
            _ = cc11001100_hook("_", u().createElement("span", {
              className: cc11001100_hook("className", "".concat(Ye, "-right"), "object-key-init")
            }, "|"), "var-init");
          return u().createElement("div", {
            className: cc11001100_hook("className", "ecommerce-ad-box", "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", He, "object-key-init"),
            onClick: cc11001100_hook("onClick", w, "object-key-init"),
            ref: cc11001100_hook("ref", d, "object-key-init"),
            "data-ad-type": cc11001100_hook("data-ad-type", "ecommerce-ad-card", "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "".concat(He, "-img"), "object-key-init"),
            style: {
              backgroundImage: cc11001100_hook("backgroundImage", "url(".concat(n, ")"), "object-key-init")
            }
          }), u().createElement("div", {
            className: cc11001100_hook("className", "".concat(He, "-main"), "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "".concat(He, "-main-content"), "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "".concat(He, "-main-content-des"), "object-key-init")
          }, u().createElement("span", null, r), u().createElement("span", null, a)), u().createElement("div", {
            className: cc11001100_hook("className", "".concat(He, k > 0 ? "-main-content-bottom" : "-main-content-bottom-noScore"), "object-key-init")
          }, k > 0 && u().createElement(Be.Z, {
            score: cc11001100_hook("score", k, "object-key-init"),
            showScore: cc11001100_hook("showScore", !0, "object-key-init")
          }), u().createElement(J, {
            signData: cc11001100_hook("signData", M.Z8(c), "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "".concat(He, "-icon-blue"), "object-key-init"),
            onClick: cc11001100_hook("onClick", T, "object-key-init")
          }, u().createElement(ze, {
            width: cc11001100_hook("width", "15px", "object-key-init"),
            height: cc11001100_hook("height", "15px", "object-key-init")
          }), u().createElement("span", null, "下载"))))))), Z && "android" === (0, p.dU)().os ? u().createElement("div", {
            className: cc11001100_hook("className", Ye, "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "".concat(Ye, "-appDes"), "object-key-init")
          }, u().createElement("span", null, "应用名称: ", h), _, u().createElement("span", null, "版本号: ", f), _, u().createElement("span", null, "开发者: ", C), _, u().createElement("a", {
            onClick: function (e) {
              return We(e, E);
            },
            className: cc11001100_hook("className", "".concat(Ye, "-right"), "object-key-init")
          }, "隐私政策"), _, u().createElement("a", {
            onClick: function (e) {
              return We(e, g);
            }
          }, "应用权限"))) : "", u().createElement(Q, {
            data: cc11001100_hook("data", c, "object-key-init"),
            parseUA: cc11001100_hook("parseUA", s, "object-key-init")
          }));
        },
        telephone: function (e) {
          var t = cc11001100_hook("t", e.data, "var-init"),
            n = cc11001100_hook("n", t.picUrl, "var-init"),
            a = cc11001100_hook("a", t.description, "var-init"),
            r = cc11001100_hook("r", t.data, "var-init"),
            c = cc11001100_hook("c", t.parseUA, "var-init"),
            o = cc11001100_hook("o", e.onClick, "var-init"),
            i = cc11001100_hook("i", e.onSetRef, "var-init"),
            s = cc11001100_hook("s", r.brandName, "var-init"),
            l = cc11001100_hook("l", void 0 === s ? "" : s, "var-init");
          return u().createElement("div", {
            className: cc11001100_hook("className", "ecommerce-ad-box", "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", ve, "object-key-init"),
            onClick: cc11001100_hook("onClick", o, "object-key-init"),
            ref: cc11001100_hook("ref", i, "object-key-init"),
            "data-ad-type": cc11001100_hook("data-ad-type", "ecommerce-ad-card", "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "".concat(ve, "-img"), "object-key-init"),
            style: {
              backgroundImage: cc11001100_hook("backgroundImage", "url(".concat(n, ")"), "object-key-init")
            }
          }), u().createElement("div", {
            className: cc11001100_hook("className", "".concat(ve, "-main"), "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "".concat(ve, "-main-content"), "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "".concat(ve, "-main-content-title"), "object-key-init")
          }, l), u().createElement("div", {
            className: cc11001100_hook("className", "".concat(ve, "-main-content-des"), "object-key-init")
          }, a)), u().createElement(J, {
            showInvalidSign: cc11001100_hook("showInvalidSign", M.Z8(r), "object-key-init")
          }, u().createElement("div", {
            className: cc11001100_hook("className", "".concat(ve, "-icon"), "object-key-init")
          }, u().createElement(pe, null))))), u().createElement(Q, {
            data: cc11001100_hook("data", r, "object-key-init"),
            parseUA: cc11001100_hook("parseUA", c, "object-key-init")
          }));
        },
        form: cc11001100_hook("form", Ce, "object-key-init")
      }, "var-init"),
      Ge = cc11001100_hook("Ge", Object.keys(je).reduce(function (e, t) {
        return e[t] = cc11001100_hook("e[t]", t, "assign"), e;
      }, {}), "var-init");
    function Xe(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.data, "var-init"),
        n = cc11001100_hook("n", t.picUrl, "var-init"),
        a = cc11001100_hook("a", t.interactionLaunch, "var-init"),
        r = cc11001100_hook("r", t.originData, "var-init"),
        c = cc11001100_hook("c", e.onClick, "var-init"),
        o = cc11001100_hook("o", e.onSetRef, "var-init"),
        i = cc11001100_hook("i", r.isExpand, "var-init");
      return u().createElement(se, {
        isExpand: cc11001100_hook("isExpand", i, "object-key-init"),
        imgSrc: cc11001100_hook("imgSrc", n, "object-key-init"),
        description: cc11001100_hook("description", a, "object-key-init"),
        onClick: cc11001100_hook("onClick", c, "object-key-init"),
        onSetRef: cc11001100_hook("onSetRef", o, "object-key-init")
      });
    }
    var Je = cc11001100_hook("Je", Object.freeze({
        IN_TEXT: cc11001100_hook("IN_TEXT", "0", "object-key-init"),
        BOTTOM: cc11001100_hook("BOTTOM", "1", "object-key-init"),
        FLOAT: cc11001100_hook("FLOAT", "2", "object-key-init")
      }), "var-init"),
      qe = cc11001100_hook("qe", function (e) {
        var t = cc11001100_hook("t", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, "var-init"),
          n = cc11001100_hook("n", t.forwardRef, "var-init"),
          r = cc11001100_hook("r", void 0 !== n && n, "var-init");
        function c(t) {
          cc11001100_hook("t", t, "function-parameter");
          return u().createElement(Oe.Consumer, null, function (n) {
            return u().createElement(e, (0, a.Z)({
              ref: cc11001100_hook("ref", t.forwardRef ? t.forwardRef : null, "object-key-init")
            }, n, t));
          });
        }
        return we()(c, e), r && u().forwardRef(function (e, t) {
          return u().createElement(c, (0, a.Z)({}, e, {
            forwardedRef: cc11001100_hook("forwardedRef", t, "object-key-init")
          }));
        }), c;
      }((Fe = cc11001100_hook("Fe", function (e) {
        function t() {
          var e, n;
          (0, c.Z)(this, t);
          for (var a = cc11001100_hook("a", arguments.length, "var-init"), r = cc11001100_hook("r", new Array(a), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < a; o++) r[o] = cc11001100_hook("r[o]", arguments[o], "assign");
          return (n = cc11001100_hook("n", (0, i.Z)(this, (e = cc11001100_hook("e", (0, s.Z)(t), "assign")).call.apply(e, [this].concat(r))), "assign")).handleClick = cc11001100_hook("(n = (0, i.Z)(this, (e = (0, s.Z)(t)).call.apply(e, [this].concat(r)))).handleClick", function (e) {
            n.props.onTrackClick(e), n.props.onClick(e);
          }, "assign"), n;
        }
        return (0, l.Z)(t, e), (0, o.Z)(t, [{
          key: cc11001100_hook("key", "render", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this.props, "var-init"),
              t = cc11001100_hook("t", e.data, "var-init"),
              n = cc11001100_hook("n", t.pluginStyle, "var-init"),
              r = cc11001100_hook("r", t.originData, "var-init"),
              c = cc11001100_hook("c", e.setTrackRef, "var-init"),
              o = cc11001100_hook("o", r.displayMode, "var-init"),
              i = cc11001100_hook("i", je[n] || ee, "var-init"),
              s = cc11001100_hook("s", o === Je.BOTTOM, "var-init");
            return o === Je.FLOAT ? u().createElement(Xe, (0, a.Z)({}, this.props, {
              onSetRef: cc11001100_hook("onSetRef", c, "object-key-init"),
              onClick: cc11001100_hook("onClick", this.handleClick, "object-key-init")
            })) : u().createElement(i, (0, a.Z)({}, this.props, {
              isBottomStyle: cc11001100_hook("isBottomStyle", s, "object-key-init"),
              onSetRef: cc11001100_hook("onSetRef", c, "object-key-init"),
              onClick: cc11001100_hook("onClick", this.handleClick, "object-key-init")
            }));
          }
        }]), t;
      }(u().Component), "assign"), Ve = cc11001100_hook("Ve", Fe, "assign"))) || Ve, "var-init"),
      Ke = cc11001100_hook("Ke", n(38387), "var-init"),
      Qe = cc11001100_hook("Qe", n(65160), "var-init"),
      $e = cc11001100_hook("$e", function (e) {
        function t(e) {
          cc11001100_hook("e", e, "function-parameter");
          var n;
          (0, c.Z)(this, t), (n = cc11001100_hook("n", (0, i.Z)(this, (0, s.Z)(t).call(this, e)), "assign")).onClick = cc11001100_hook("(n = (0, i.Z)(this, (0, s.Z)(t).call(this, e))).onClick", function (e) {
            e.stopPropagation(), e.preventDefault(), n.dataModel.handleClick();
          }, "assign");
          var a = cc11001100_hook("a", n.context, "var-init");
          return n.dataModel = cc11001100_hook("n.dataModel", new F((0, r.Z)({}, e, {
            zhiExtra: cc11001100_hook("zhiExtra", a, "object-key-init")
          })), "assign"), n;
        }
        return (0, l.Z)(t, e), (0, o.Z)(t, [{
          key: cc11001100_hook("key", "componentDidMount", "object-key-init"),
          value: function () {
            this.dataModel.preload(), this.dataModel.getContentSign();
            var e = cc11001100_hook("e", this.context, "var-init");
            e && this.dataModel.setZhicontentInfo(e);
          }
        }, {
          key: cc11001100_hook("key", "shouldComponentUpdate", "object-key-init"),
          value: function (e) {
            var t = cc11001100_hook("t", this.context, "var-init");
            return this.dataModel.setPropsData((0, r.Z)({}, e, {
              zhiExtra: cc11001100_hook("zhiExtra", t, "object-key-init")
            })), !0;
          }
        }, {
          key: cc11001100_hook("key", "render", "object-key-init"),
          value: function () {
            var e = cc11001100_hook("e", this.dataModel.getRenderData(), "var-init"),
              t = cc11001100_hook("t", e.isHidden, "var-init"),
              n = cc11001100_hook("n", this.context, "var-init");
            return t ? u().createElement("div", {
              className: cc11001100_hook("className", "ecommerce-ad-null", "object-key-init"),
              "data-ad-type": cc11001100_hook("data-ad-type", "ecommerce-ad-card", "object-key-init")
            }) : u().createElement(Pe.PluginTrack, (0, a.Z)({}, this.dataModel.getTrackInfo(n), {
              sendClickData: cc11001100_hook("sendClickData", !0, "object-key-init"),
              parseUA: cc11001100_hook("parseUA", e.parseUA, "object-key-init"),
              cardIndex: cc11001100_hook("cardIndex", e.cardIndex, "object-key-init")
            }), u().createElement(qe, {
              data: cc11001100_hook("data", e, "object-key-init"),
              dataModel: cc11001100_hook("dataModel", this.dataModel, "object-key-init"),
              onClick: cc11001100_hook("onClick", this.onClick, "object-key-init")
            }));
          }
        }]), t;
      }(d.Component), "var-init");
    $e.contextType = cc11001100_hook("$e.contextType", Qe.Z, "assign");
    var et = cc11001100_hook("et", (0, Ke.J)($e), "var-init");
  },
  2429: function (e, t, n) {
    n.d(t, {
      nn: function () {
        return a;
      },
      Z8: function () {
        return i;
      },
      a4: function () {
        return o;
      }
    });
    var a = cc11001100_hook("a", {
        ONLY_SHOW: cc11001100_hook("ONLY_SHOW", "ONLY_SHOW", "object-key-init")
      }, "var-init"),
      r = cc11001100_hook("r", [1, 2], "var-init"),
      c = cc11001100_hook("c", {
        1: {
          type: cc11001100_hook("type", "invalid", "object-key-init"),
          text: cc11001100_hook("text", "已失效", "object-key-init")
        },
        2: {
          type: cc11001100_hook("type", "audit", "object-key-init"),
          text: cc11001100_hook("text", "审核中", "object-key-init")
        }
      }, "var-init"),
      o = function () {
        var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
          t = cc11001100_hook("t", e.validStatus, "var-init");
        return r.includes(t);
      },
      i = function () {
        var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
          t = cc11001100_hook("t", e.validStatus, "var-init"),
          n = cc11001100_hook("n", c[t], "var-init");
        return n;
      };
  }
}]);
//# sourceMappingURL=shared-bf8e55f747b1310da866a56e0f5656c66d9272a4.5cadd2f436ace8cbb601.js.map