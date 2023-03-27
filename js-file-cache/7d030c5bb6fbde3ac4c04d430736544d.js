F.module("common/result_page", function (require, exports, ctx) {
  exports.createResulPageLink = cc11001100_hook("exports.createResulPageLink", function (option) {
    if (!option || !option.wd) {
      return "";
    }
    if (!option.tn) {
      option.tn = cc11001100_hook("option.tn", "baidutop10", "assign");
    }
    return "//www.baidu.com/s?wd=" + encodeURIComponent(option.wd) + "&ie=utf-8&tn=" + option.tn + "&rsv_idx=2";
  }, "assign");
});
F.module("superman:common/image_lazy_load", function (require, exports, ctx) {
  var S = cc11001100_hook("S", ctx.base, "var-init");
  var _intervalId = cc11001100_hook("_intervalId", 0, "var-init");
  var _timeoutId = cc11001100_hook("_timeoutId", 0, "var-init");
  var _dataSrcImgStack = cc11001100_hook("_dataSrcImgStack", [], "var-init");
  var _intervaling = cc11001100_hook("_intervaling", false, "var-init");
  exports.isVisible = cc11001100_hook("exports.isVisible", function (elm, noOffset) {
    if (!_isVisible(elm)) {
      return false;
    }
    var hOffset = cc11001100_hook("hOffset", noOffset ? 0 : 60, "var-init");
    var vOffset = cc11001100_hook("vOffset", noOffset ? 0 : 60, "var-init");
    var elmPos = cc11001100_hook("elmPos", {}, "var-init");
    try {
      elmPos = cc11001100_hook("elmPos", $(elm).offset(), "assign");
    } catch (e) {
      elmPos = cc11001100_hook("elmPos", {
        left: cc11001100_hook("left", 0, "object-key-init"),
        top: cc11001100_hook("top", 0, "object-key-init")
      }, "assign");
    }
    var scrollTop = cc11001100_hook("scrollTop", $(document).scrollTop(), "var-init");
    var scrollLeft = cc11001100_hook("scrollLeft", $(document).scrollLeft(), "var-init");
    var viewWidth = cc11001100_hook("viewWidth", $(window).width(), "var-init");
    var viewHeight = cc11001100_hook("viewHeight", $(window).height(), "var-init");
    var xa = cc11001100_hook("xa", elmPos.left - hOffset, "var-init"),
      ya = cc11001100_hook("ya", elmPos.top - vOffset, "var-init"),
      xc = cc11001100_hook("xc", elmPos.left + elm.offsetWidth + hOffset, "var-init"),
      yc = cc11001100_hook("yc", elmPos.top + elm.offsetHeight + vOffset, "var-init"),
      xa1 = cc11001100_hook("xa1", scrollLeft, "var-init"),
      ya1 = cc11001100_hook("ya1", scrollTop, "var-init"),
      xc1 = cc11001100_hook("xc1", scrollLeft + viewWidth, "var-init"),
      yc1 = cc11001100_hook("yc1", scrollTop + viewHeight, "var-init");
    return xa <= xc1 && ya <= yc1 && xc >= xa1 && yc >= ya1;
  }, "assign");
  var _isImageLoadCompleted = function (elm) {
    if ($(elm).attr("data-loaded") == "1") {
      return true;
    }
    return false;
  };
  var _renderImage = function (init) {
    var _render = function () {
      if (_dataSrcImgStack.length === 0) {
        window.clearInterval(_intervalId);
        _intervaling = cc11001100_hook("_intervaling", false, "assign");
        return;
      }
      for (var i = cc11001100_hook("i", 0, "var-init"); i < _dataSrcImgStack.length; i++) {
        var elm = cc11001100_hook("elm", _dataSrcImgStack[i], "var-init");
        if (!_isImageLoadCompleted(elm) && exports.isVisible(elm)) {
          if ($(elm).attr("data-loadfunc") != "1") {
            $(elm).attr("data-loadfunc", "1");
            $(elm).bind("load", function (evt) {
              var $self = cc11001100_hook("$self", this, "var-init");
              $(this).attr("data-loaded", 1);
              for (var idx = cc11001100_hook("idx", 0, "var-init"); idx < _dataSrcImgStack.length; idx++) {
                var item = cc11001100_hook("item", _dataSrcImgStack[idx], "var-init");
                if ($self === item) {
                  _dataSrcImgStack.splice(idx, 1);
                }
              }
            });
          }
          var src = cc11001100_hook("src", $(elm).attr("data-src") + "", "var-init");
          if (src.indexOf("http") > -1 || src.indexOf("https") > -1) {
            $(elm).attr("src", src);
            elm.removeAttribute("data-src");
          }
        }
      }
    };
    if (init) {
      _render();
      return;
    }
    if (!_intervaling) {
      _intervaling = cc11001100_hook("_intervaling", true, "assign");
      _intervalId = cc11001100_hook("_intervalId", window.setInterval(function () {
        _render();
      }, 300), "assign");
    }
  };
  exports.scanAndDoRender = cc11001100_hook("exports.scanAndDoRender", function (newDom, init) {
    var isScanAll = cc11001100_hook("isScanAll", false, "var-init");
    if (!newDom) {
      newDom = cc11001100_hook("newDom", document.body, "assign");
      isScanAll = cc11001100_hook("isScanAll", true, "assign");
    }
    var imgList = cc11001100_hook("imgList", [], "var-init");
    $.each(newDom.getElementsByTagName("img"), function (i, elm) {
      if ($(elm).attr("data-src") && !_isImageLoadCompleted(elm)) {
        imgList.push(elm);
      }
    });
    if (isScanAll) {
      _dataSrcImgStack = cc11001100_hook("_dataSrcImgStack", imgList, "assign");
    } else {
      _dataSrcImgStack = cc11001100_hook("_dataSrcImgStack", _dataSrcImgStack.concat(imgList), "assign");
    }
    _renderImage(init);
  }, "assign");
  var _bindScrollEvent = function () {
    $.each(["resize", "scroll", "load", "cardrender"], function (index, evtName) {
      $(window).bind(evtName, function (e) {
        if (s_session.index_off == true) {
          return;
        }
        if (_timeoutId) {
          window.clearTimeout(_timeoutId);
        }
        _timeoutId = cc11001100_hook("_timeoutId", window.setTimeout(function () {
          _timeoutId = cc11001100_hook("_timeoutId", 0, "assign");
          exports.scanAndDoRender();
        }, 20), "assign");
        e.stopPropagation();
      });
    });
  };
  function _isVisible(element) {
    cc11001100_hook("element", element, "function-parameter");
    var rect = cc11001100_hook("rect", element.getBoundingClientRect(), "var-init");
    return !!(rect.bottom - rect.top);
  }
  exports.init = cc11001100_hook("exports.init", function () {
    exports.scanAndDoRender(null, true);
    _bindScrollEvent();
  }, "assign");
});
try {
  !function (e, t) {
    e.webb2 = cc11001100_hook("e.webb2", t(), "assign");
  }("undefined" != typeof self ? self : this, function () {
    return function (e) {
      function t(o) {
        cc11001100_hook("o", o, "function-parameter");
        if (n[o]) return n[o].exports;
        var i = cc11001100_hook("i", n[o] = cc11001100_hook("n[o]", {
          i: cc11001100_hook("i", o, "object-key-init"),
          l: cc11001100_hook("l", !1, "object-key-init"),
          exports: {}
        }, "assign"), "var-init");
        return e[o].call(i.exports, i, i.exports, t), i.l = cc11001100_hook("i.l", !0, "assign"), i.exports;
      }
      var n = cc11001100_hook("n", {}, "var-init");
      return t.m = cc11001100_hook("t.m", e, "assign"), t.c = cc11001100_hook("t.c", n, "assign"), t.d = cc11001100_hook("t.d", function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
          configurable: cc11001100_hook("configurable", !1, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
          get: cc11001100_hook("get", o, "object-key-init")
        });
      }, "assign"), t.n = cc11001100_hook("t.n", function (e) {
        var n = cc11001100_hook("n", e && e.__esModule ? function () {
          return e["default"];
        } : function () {
          return e;
        }, "var-init");
        return t.d(n, "a", n), n;
      }, "assign"), t.o = cc11001100_hook("t.o", function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, "assign"), t.p = cc11001100_hook("t.p", "", "assign"), t(t.s = cc11001100_hook("t.s", 10, "assign"));
    }([function (e, t, n) {
      "use strict";

      function o(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", new Image(), "var-init"),
          o = cc11001100_hook("o", i(), "var-init");
        window[o] = cc11001100_hook("window[o]", n, "assign"), n.onload = cc11001100_hook("n.onload", function () {
          t && t(), delete window[o];
        }, "assign"), n.onerror = cc11001100_hook("n.onerror", function (e) {
          t && t(e), delete window[o];
        }, "assign"), n.src = cc11001100_hook("n.src", e, "assign");
      }
      function i() {
        var e = function () {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        };
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
      }
      function r(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        if (!t || "object" !== (void 0 === t ? "undefined" : v(t))) return e;
        for (var n = cc11001100_hook("n", Object.keys(t), "var-init"), o = cc11001100_hook("o", n.length, "var-init"); o--;) e[n[o]] = cc11001100_hook("e[n[o]]", t[n[o]], "assign");
        return e;
      }
      function s(e) {
        cc11001100_hook("e", e, "function-parameter");
        return Object.keys(e).map(function (t) {
          var n = cc11001100_hook("n", e[t], "var-init");
          return void 0 === n ? n = cc11001100_hook("n", "", "assign") : "string" != typeof n && (n = cc11001100_hook("n", JSON.stringify(n), "assign")), encodeURIComponent(t) + "=" + encodeURIComponent(n);
        }).join("&");
      }
      function a(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var n = cc11001100_hook("n", ["webkit", "moz", "ms", "o"], "var-init");
        if (t in e) return t;
        for (var o = cc11001100_hook("o", 0, "var-init"); o < n.length; o++) {
          var i = cc11001100_hook("i", "" + n[o] + t, "var-init");
          if (i in e) return i;
        }
        return "";
      }
      function u() {
        return {
          x: cc11001100_hook("x", document.body.scrollLeft || document.documentElement.scrollLeft, "object-key-init"),
          y: cc11001100_hook("y", document.body.scrollTop || document.documentElement.scrollTop, "object-key-init")
        };
      }
      function c(e) {
        cc11001100_hook("e", e, "function-parameter");
        b && (document.addEventListener(g, e), document.addEventListener(w, e));
      }
      function d(e) {
        cc11001100_hook("e", e, "function-parameter");
        document.removeEventListener(g, e), document.removeEventListener(w, e);
      }
      function l(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e && "hidden" in e ? e.hidden : document[b];
      }
      function p() {
        var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
          t = cc11001100_hook("t", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, "var-init");
        return Object.keys(t).forEach(function (n) {
          e[n] = cc11001100_hook("e[n]", t[n], "assign");
        }), e;
      }
      function f() {
        if (Element && !Element.prototype.matches) {
          var e = cc11001100_hook("e", Element.prototype, "var-init");
          e.matches = cc11001100_hook("e.matches", e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector, "assign");
        }
      }
      function m(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", window.getComputedStyle(e)["background-image"], "var-init");
        return t && "none" !== t && /^url\(/i.test(t) ? t.replace(/^url\(['"]?([^'"]+)['"]?\)/i, "$1") : "";
      }
      function h(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e && "string" == typeof e && /^\s?(http:|https:)?\/\//.test(e);
      }
      function y(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        /complete|loaded|interactive/.test(document.readyState) && document.body ? e() : document.addEventListener("DOMContentLoaded", function () {
          if (t) return void e();
          setTimeout(function () {
            e();
          }, 0);
        });
      }
      Object.defineProperty(t, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var v = cc11001100_hook("v", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, "var-init");
      t.sendLog = cc11001100_hook("t.sendLog", o, "assign"), t.guid = cc11001100_hook("t.guid", i, "assign"), t.extend = cc11001100_hook("t.extend", r, "assign"), t.stringify = cc11001100_hook("t.stringify", s, "assign"), t.getProp = cc11001100_hook("t.getProp", a, "assign"), t.getScrollInfo = cc11001100_hook("t.getScrollInfo", u, "assign"), t.bindVisibilityChangeEvent = cc11001100_hook("t.bindVisibilityChangeEvent", c, "assign"), t.disposeVisibilityChangeEvent = cc11001100_hook("t.disposeVisibilityChangeEvent", d, "assign"), t.getPageHiddenValue = cc11001100_hook("t.getPageHiddenValue", l, "assign"), t.assign = cc11001100_hook("t.assign", p, "assign"), t.matchesPolyfill = cc11001100_hook("t.matchesPolyfill", f, "assign"), t.getUrlFromStyle = cc11001100_hook("t.getUrlFromStyle", m, "assign"), t.isUrl = cc11001100_hook("t.isUrl", h, "assign"), t.afterReady = cc11001100_hook("t.afterReady", y, "assign");
      var b = cc11001100_hook("b", a(document, "hidden"), "var-init"),
        g = cc11001100_hook("g", b.replace(/hidden/i, "visibilitychange"), "var-init"),
        w = cc11001100_hook("w", "baiduboxappvisibilitychange", "var-init");
    }, function (e, t, n) {
      "use strict";

      function o(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", this, "var-init"),
          n = cc11001100_hook("n", e.colno || window.event && window.event.errorCharacter || 0, "var-init"),
          o = cc11001100_hook("o", e.error || {}, "var-init"),
          r = cc11001100_hook("r", (0, i.assign)({
            msg: cc11001100_hook("msg", e.message, "object-key-init"),
            ln: cc11001100_hook("ln", e.lineno, "object-key-init"),
            file: cc11001100_hook("file", e.filename, "object-key-init"),
            col: cc11001100_hook("col", n, "object-key-init"),
            stack: cc11001100_hook("stack", o.stack, "object-key-init")
          }, this.exceptionInfo), "var-init");
        setTimeout(function () {
          t.send("et_js", r, t.exceptionDim);
        }, 0);
      }
      Object.defineProperty(t, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var i = cc11001100_hook("i", n(0), "var-init");
      t["default"] = cc11001100_hook("t[\"default\"]", {
        initException: function () {
          this.exceptionDim = cc11001100_hook("this.exceptionDim", null, "assign"), this.exceptionInfo = cc11001100_hook("this.exceptionInfo", {}, "assign"), this.onerrorCb = cc11001100_hook("this.onerrorCb", o.bind(this), "assign");
        },
        startJsExceptionLog: function (e, t) {
          this.exceptionInfo = cc11001100_hook("this.exceptionInfo", (0, i.assign)({}, e), "assign"), this.exceptionDim = cc11001100_hook("this.exceptionDim", (0, i.assign)({}, t), "assign"), window.removeEventListener("error", this.onerrorCb), window.addEventListener("error", this.onerrorCb);
        },
        startResExceptionLog: function (e, t) {},
        stopJsExceptionLog: function () {
          window.removeEventListener("error", this.onerrorCb);
        },
        stopResExceptionLog: function () {},
        sendExceptionLog: function (e, t) {
          this.send("et_comm", e, t);
        },
        destroyJsException: function () {
          this.stopJsExceptionLog(), this.exceptionDim = cc11001100_hook("this.exceptionDim", null, "assign"), this.exceptionInfo = cc11001100_hook("this.exceptionInfo", null, "assign"), this.onerrorCb = cc11001100_hook("this.onerrorCb", null, "assign");
        }
      }, "assign"), e.exports = cc11001100_hook("e.exports", t["default"], "assign");
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var o = cc11001100_hook("o", n(0), "var-init");
      t["default"] = cc11001100_hook("t[\"default\"]", {
        sendBaseDispLog: function (e, t, n) {
          var i = cc11001100_hook("i", document.documentElement, "var-init"),
            r = cc11001100_hook("r", {
              size: {
                doc: {
                  w: cc11001100_hook("w", i.scrollWidth, "object-key-init"),
                  h: cc11001100_hook("h", i.scrollHeight, "object-key-init")
                },
                wind: {
                  w: cc11001100_hook("w", i.clientWidth, "object-key-init"),
                  h: cc11001100_hook("h", i.clientHeight, "object-key-init")
                },
                scr: {
                  w: cc11001100_hook("w", screen.width, "object-key-init"),
                  h: cc11001100_hook("h", screen.height, "object-key-init")
                }
              },
              dpr: cc11001100_hook("dpr", window.devicePixelRatio || 1, "object-key-init")
            }, "var-init");
          e && (r = cc11001100_hook("r", (0, o.assign)(r, e), "assign")), this.send("disp_comm", r, t, null, n);
        },
        sendDispLog: function (e, t, n) {
          var i = cc11001100_hook("i", void 0, "var-init");
          i = cc11001100_hook("i", e instanceof Array ? e : (0, o.assign)({}, e), "assign"), this.send("disp_content", i, t, null, n);
        }
      }, "assign"), e.exports = cc11001100_hook("e.exports", t["default"], "assign");
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var o = cc11001100_hook("o", n(0), "var-init");
      t["default"] = cc11001100_hook("t[\"default\"]", {
        sendBasePfLog: function () {
          var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
            t = cc11001100_hook("t", arguments[1], "var-init"),
            n = cc11001100_hook("n", arguments[2], "var-init"),
            i = cc11001100_hook("i", window.performance && performance.timing || {}, "var-init"),
            r = cc11001100_hook("r", i.navigationStart, "var-init"),
            s = cc11001100_hook("s", i.requestStart, "var-init"),
            a = cc11001100_hook("a", i.responseStart, "var-init"),
            u = cc11001100_hook("u", i.responseEnd, "var-init"),
            c = cc11001100_hook("c", i.domComplete, "var-init"),
            d = cc11001100_hook("d", i.domLoading, "var-init"),
            l = cc11001100_hook("l", i.domainLookupStart, "var-init"),
            p = cc11001100_hook("p", i.domainLookupEnd, "var-init"),
            f = cc11001100_hook("f", i.connectStart, "var-init"),
            m = cc11001100_hook("m", i.connectEnd, "var-init"),
            h = cc11001100_hook("h", i.loadEventStart, "var-init"),
            y = cc11001100_hook("y", i.loadEventEnd, "var-init"),
            v = cc11001100_hook("v", {
              dns: cc11001100_hook("dns", p - l, "object-key-init"),
              tcp: cc11001100_hook("tcp", m - f, "object-key-init"),
              req: cc11001100_hook("req", a - s, "object-key-init"),
              res: cc11001100_hook("res", u - a, "object-key-init"),
              dct: cc11001100_hook("dct", c - d, "object-key-init"),
              ld: cc11001100_hook("ld", y - h, "object-key-init")
            }, "var-init"),
            b = cc11001100_hook("b", window.__webbbrige__ || {}, "var-init"),
            g = cc11001100_hook("g", b.whiteScreenTime, "var-init"),
            w = cc11001100_hook("w", b.firstScreenTime, "var-init");
          g && (v = cc11001100_hook("v", (0, o.assign)(v, {
            wst: cc11001100_hook("wst", g - r, "object-key-init")
          }), "assign")), w && (v = cc11001100_hook("v", (0, o.assign)(v, {
            fst: cc11001100_hook("fst", w - r, "object-key-init")
          }), "assign")), v = cc11001100_hook("v", (0, o.assign)(v, e), "assign"), this.send("pf_comm", v, t, null, n);
        },
        sendPfLog: function () {
          var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
            t = cc11001100_hook("t", arguments[1], "var-init"),
            n = cc11001100_hook("n", arguments[2], "var-init"),
            i = cc11001100_hook("i", (0, o.assign)({}, e), "var-init");
          this.send("pf_comm", i, t, null, n);
        }
      }, "assign"), e.exports = cc11001100_hook("e.exports", t["default"], "assign");
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      }), t["default"] = cc11001100_hook("t[\"default\"]", {
        sendCountLog: function (e, t) {
          this.send("count_comm", e, t);
        }
      }, "assign"), e.exports = cc11001100_hook("e.exports", t["default"], "assign");
    }, function (e, t, n) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      }), t["default"] = cc11001100_hook("t[\"default\"]", {
        sendDistributeLog: function (e, t) {
          this.send("dist_comm", e, t);
        }
      }, "assign"), e.exports = cc11001100_hook("e.exports", t["default"], "assign");
    }, function (e, t, n) {
      "use strict";

      function o(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }
      Object.defineProperty(t, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var i = cc11001100_hook("i", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e;
        } : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, "var-init"),
        r = cc11001100_hook("r", function () {
          function e(e, t) {
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("t", t, "function-parameter");
            for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
              var o = cc11001100_hook("o", t[n], "var-init");
              o.enumerable = cc11001100_hook("o.enumerable", o.enumerable || !1, "assign"), o.configurable = cc11001100_hook("o.configurable", !0, "assign"), "value" in o && (o.writable = cc11001100_hook("o.writable", !0, "assign")), Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        }(), "var-init"),
        s = cc11001100_hook("s", n(0), "var-init"),
        a = cc11001100_hook("a", "https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/webb.gif", "var-init");
      "http:" === location.protocol && (a = cc11001100_hook("a", "http://sestat.baidu.com/webb.gif", "assign"));
      var u = cc11001100_hook("u", "https://sp1.baidu.com/5b1ZeDe5KgQFm2e88IuM_a/mwb2.gif", "var-init");
      "http:" === location.protocol && (u = cc11001100_hook("u", "http://sestat.baidu.com/mwb2.gif", "assign"));
      var c = cc11001100_hook("c", {
          time: cc11001100_hook("time", 1, "object-key-init"),
          ia: cc11001100_hook("ia", 1, "object-key-init"),
          disp_comm: cc11001100_hook("disp_comm", 1, "object-key-init"),
          disp_content: cc11001100_hook("disp_content", 1, "object-key-init"),
          et_js: cc11001100_hook("et_js", 2, "object-key-init"),
          et_comm: cc11001100_hook("et_comm", 2, "object-key-init"),
          et_resource: cc11001100_hook("et_resource", 2, "object-key-init"),
          et_httpres: cc11001100_hook("et_httpres", 2, "object-key-init"),
          count_comm: cc11001100_hook("count_comm", 2, "object-key-init"),
          dist_comm: cc11001100_hook("dist_comm", 2, "object-key-init"),
          pf_comm: cc11001100_hook("pf_comm", 2, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", function () {
          function e(t) {
            cc11001100_hook("t", t, "function-parameter");
            o(this, e);
            var n = cc11001100_hook("n", {
              sample: cc11001100_hook("sample", 0, "object-key-init")
            }, "var-init");
            this.validateOptions(t), this.options = cc11001100_hook("this.options", (0, s.extend)(n, t), "assign"), this.random = cc11001100_hook("this.random", Math.random(), "assign"), this.options.sample && (this.options.curSample = cc11001100_hook("this.options.curSample", Math.random() < this.options.sample ? 1 : 0, "assign")), this.updateCurSample(), this.initException(), this.options.ia && this.initIa && this.initIa();
          }
          return r(e, [{
            key: cc11001100_hook("key", "updateCurSample", "object-key-init"),
            value: function () {
              var e = cc11001100_hook("e", this, "var-init");
              Object.keys(this.options).forEach(function (t) {
                var n = cc11001100_hook("n", e.options[t], "var-init");
                n && n.sample && !n.curSample && (e.options[t].curSample = cc11001100_hook("e.options[t].curSample", Math.random() < n.sample ? 1 : 0, "assign"));
              });
            }
          }, {
            key: cc11001100_hook("key", "validateOptions", "object-key-init"),
            value: function (e) {
              var t = cc11001100_hook("t", ["pid", "lid"], "var-init");
              if ("object" !== (void 0 === e ? "undefined" : i(e))) throw new Error("Options must be an object!");
              if (!t.every(function (t) {
                return t in e;
              })) throw new Error("Options " + t.join(", ") + " required");
            }
          }, {
            key: cc11001100_hook("key", "updateOption", "object-key-init"),
            value: function (e) {
              this.options = cc11001100_hook("this.options", (0, s.extend)(this.options, e), "assign"), this.updateCurSample();
            }
          }, {
            key: cc11001100_hook("key", "wrapCommonParam", "object-key-init"),
            value: function (e, t, n) {
              var o = cc11001100_hook("o", {
                pid: cc11001100_hook("pid", this.options.pid, "object-key-init"),
                lid: cc11001100_hook("lid", this.options.lid, "object-key-init"),
                ts: cc11001100_hook("ts", Date.now(), "object-key-init"),
                type: cc11001100_hook("type", e, "object-key-init"),
                info: cc11001100_hook("info", t, "object-key-init"),
                ext: cc11001100_hook("ext", this.options.ext ? this.options.ext : {}, "object-key-init")
              }, "var-init");
              return n && (o.dim = cc11001100_hook("o.dim", n, "assign")), o;
            }
          }, {
            key: cc11001100_hook("key", "hitSample", "object-key-init"),
            value: function (e) {
              var t = cc11001100_hook("t", this.options[e], "var-init");
              if (!t) return 0;
              return "sample" in t ? "eachreq" === t.sampleType ? t.sample && Math.random() <= t.sample ? 1 : 0 : t.curSample : "eachreq" === this.options.sampleType ? this.options.sample && Math.random() <= this.options.sample ? 1 : 0 : this.options.curSample;
            }
          }, {
            key: cc11001100_hook("key", "getLogHost", "object-key-init"),
            value: function (e) {
              var t = cc11001100_hook("t", this.options, "var-init");
              return t[e] && t[e].logHost || t.logHost ? t[e] && t[e].logHost ? t[e].logHost : t.logHost : 2 === c[e] ? u : a;
            }
          }, {
            key: cc11001100_hook("key", "send", "object-key-init"),
            value: function (e, t, n, o, i) {
              if (this.hitSample(e)) {
                "function" == typeof n && (i = cc11001100_hook("i", o, "assign"), o = cc11001100_hook("o", n, "assign"), n = cc11001100_hook("n", null, "assign"));
                var r = cc11001100_hook("r", this.wrapCommonParam(e, t, n), "var-init");
                (0, s.extend)(r, i), r && r.ext ? r.ext.path = cc11001100_hook("r.ext.path", location.pathname, "assign") : r && !r.ext && (r.ext = cc11001100_hook("r.ext", {
                  path: cc11001100_hook("path", location.pathname, "object-key-init")
                }, "assign"));
                var a = cc11001100_hook("a", (0, s.guid)(), "var-init"),
                  u = cc11001100_hook("u", window[a] = cc11001100_hook("window[a]", new Image(), "assign"), "var-init");
                u.onload = cc11001100_hook("u.onload", function (e) {
                  o && ("function" == typeof o ? o(e) : o.successCb && "function" == typeof o.successCb && o.successCb(e)), delete window[a];
                }, "assign"), u.onerror = cc11001100_hook("u.onerror", function (e) {
                  o && o.errorCb && "function" == typeof o.errorCb && o.errorCb(e), delete window[a];
                }, "assign"), u.src = cc11001100_hook("u.src", this.getLogHost(e) + "?" + (0, s.stringify)(r), "assign");
              }
            }
          }, {
            key: cc11001100_hook("key", "sendBeacon", "object-key-init"),
            value: function (e, t, n, o) {
              if (this.hitSample(e)) {
                var i = cc11001100_hook("i", this.wrapCommonParam(e, t, n), "var-init");
                if ((0, s.extend)(i, o), i && i.ext ? i.ext.path = cc11001100_hook("i.ext.path", location.pathname, "assign") : i && !i.ext && (i.ext = cc11001100_hook("i.ext", {
                  path: cc11001100_hook("path", location.pathname, "object-key-init")
                }, "assign")), navigator.sendBeacon) {
                  navigator.sendBeacon(this.getLogHost(e) + "?" + (0, s.stringify)(i)) || this.send(e, t, n);
                } else this.send(e, t, n);
              }
            }
          }, {
            key: cc11001100_hook("key", "destroy", "object-key-init"),
            value: function () {
              this.destroyJsException(), this.destroyIaMonitor(), this.destroyMediaTime();
            }
          }]), e;
        }(), "var-init");
      t["default"] = cc11001100_hook("t[\"default\"]", d, "assign"), e.exports = cc11001100_hook("e.exports", t["default"], "assign");
    },,,, function (e, t, n) {
      "use strict";

      function o(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e && e.__esModule ? e : {
          "default": cc11001100_hook("default", e, "object-key-init")
        };
      }
      Object.defineProperty(t, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var i = cc11001100_hook("i", n(1), "var-init"),
        r = cc11001100_hook("r", o(i), "var-init"),
        s = cc11001100_hook("s", n(2), "var-init"),
        a = cc11001100_hook("a", o(s), "var-init"),
        u = cc11001100_hook("u", n(3), "var-init"),
        c = cc11001100_hook("c", o(u), "var-init"),
        d = cc11001100_hook("d", n(4), "var-init"),
        l = cc11001100_hook("l", o(d), "var-init"),
        p = cc11001100_hook("p", n(5), "var-init"),
        f = cc11001100_hook("f", o(p), "var-init"),
        m = cc11001100_hook("m", n(6), "var-init"),
        h = cc11001100_hook("h", o(m), "var-init"),
        y = cc11001100_hook("y", n(0), "var-init");
      (0, y.extend)(h["default"].prototype, r["default"]), (0, y.extend)(h["default"].prototype, a["default"]), (0, y.extend)(h["default"].prototype, c["default"]), (0, y.extend)(h["default"].prototype, l["default"]), (0, y.extend)(h["default"].prototype, f["default"]), t["default"] = cc11001100_hook("t[\"default\"]", h["default"], "assign"), e.exports = cc11001100_hook("e.exports", t["default"], "assign");
    }]);
  });
} catch (error) {}
F.addLog("superman:skeleton", {});
var imgLogSrc = function () {
  return $.url.escapeSSL("http://dj1.baidu.com/v.gif?");
};
var params = cc11001100_hook("params", {
  logactid: cc11001100_hook("logactid", "1234567890", "object-key-init"),
  showTab: cc11001100_hook("showTab", "10000", "object-key-init"),
  opType: cc11001100_hook("opType", "nodepv", "object-key-init"),
  mod: cc11001100_hook("mod", "superman:lib", "object-key-init"),
  submod: cc11001100_hook("submod", "index", "object-key-init"),
  superver: cc11001100_hook("superver", "supernewplus", "object-key-init"),
  glogid: cc11001100_hook("glogid", s_session.logId || "0", "object-key-init"),
  type: cc11001100_hook("type", 2011, "object-key-init"),
  pid: cc11001100_hook("pid", 315, "object-key-init"),
  isLogin: cc11001100_hook("isLogin", s_session.username ? 1 : 0, "object-key-init"),
  version: cc11001100_hook("version", "PCHome", "object-key-init"),
  terminal: cc11001100_hook("terminal", "PC", "object-key-init"),
  qid: cc11001100_hook("qid", s_session.seqId, "object-key-init"),
  sid: cc11001100_hook("sid", s_session.sid, "object-key-init"),
  super_frm: cc11001100_hook("super_frm", $.url.getQueryValue(location.href, "super_frm") || "", "object-key-init"),
  from_login: cc11001100_hook("from_login", $.url.getQueryValue(location.href, "from_login") || "", "object-key-init"),
  from_reg: cc11001100_hook("from_reg", $.url.getQueryValue(location.href, "from_reg") || "", "object-key-init"),
  query: cc11001100_hook("query", $("#kw").val(), "object-key-init"),
  curcard: cc11001100_hook("curcard", s_session.curmod, "object-key-init"),
  curcardtab: cc11001100_hook("curcardtab", $("#s_content_" + s_session.curmod + " " + ".s-xmancard").attr("data-curtab") || "", "object-key-init"),
  _r: cc11001100_hook("_r", Math.random(), "object-key-init")
}, "var-init");
var src = cc11001100_hook("src", imgLogSrc() + $.url.jsonToQuery(params), "var-init");
var imgLog = function (src) {
  var n = cc11001100_hook("n", "imglog__" + new Date().getTime(), "var-init");
  var c = cc11001100_hook("c", window[n] = cc11001100_hook("window[n]", new Image(), "assign"), "var-init");
  c.onload = cc11001100_hook("c.onload", c.onerror = cc11001100_hook("c.onerror", function () {
    window[n] = cc11001100_hook("window[n]", null, "assign");
  }, "assign"), "assign");
  c.src = cc11001100_hook("c.src", src, "assign");
  c = cc11001100_hook("c", null, "assign");
};
imgLog(src);
F.addLog("mancard:skeleton", {
  modShow: cc11001100_hook("modShow", "1100000000", "object-key-init"),
  modClick: cc11001100_hook("modClick", "1100000001", "object-key-init"),
  loadMoreClick: cc11001100_hook("loadMoreClick", "1100000005", "object-key-init"),
  categoryClick: cc11001100_hook("categoryClick", "1200100001", "object-key-init"),
  gotoTopClick: cc11001100_hook("gotoTopClick", "1100000006", "object-key-init"),
  qrcodehover: cc11001100_hook("qrcodehover", "1100000007", "object-key-init")
});
F.addLog("superman:guide", {
  xguideShow: cc11001100_hook("xguideShow", "1000000000", "object-key-init"),
  xguide: cc11001100_hook("xguide", "1000000001", "object-key-init"),
  xmanGuideShow: cc11001100_hook("xmanGuideShow", "1100100000", "object-key-init"),
  xmanGuideClick: cc11001100_hook("xmanGuideClick", "1100200001", "object-key-init"),
  tripEntranceClick: cc11001100_hook("tripEntranceClick", "1100300001", "object-key-init"),
  tutorialClick: cc11001100_hook("tutorialClick", "1100400001", "object-key-init"),
  zeroOpacityClick: cc11001100_hook("zeroOpacityClick", "1100500001", "object-key-init"),
  wenjuanClick: cc11001100_hook("wenjuanClick", "1100700002", "object-key-init")
});
F.addLog("mancard:setting", {
  modOperate: cc11001100_hook("modOperate", "0900100001", "object-key-init"),
  webOperate: cc11001100_hook("webOperate", "0900200001", "object-key-init"),
  modConfirmOperate: cc11001100_hook("modConfirmOperate", "0900300001", "object-key-init")
});
F.addLog("superman:weather", {
  weatherShow: cc11001100_hook("weatherShow", "5000000000", "object-key-init"),
  settingShow: cc11001100_hook("settingShow", "5000100000", "object-key-init"),
  settingClick: cc11001100_hook("settingClick", "5000100001", "object-key-init"),
  settingOperate: cc11001100_hook("settingOperate", "5000100002", "object-key-init"),
  layerOperate: cc11001100_hook("layerOperate", "5000000002", "object-key-init")
});
F.addLog("superman:mt", {
  msgShow: cc11001100_hook("msgShow", "0400000000", "object-key-init"),
  msgItemClick: cc11001100_hook("msgItemClick", "0400100001", "object-key-init"),
  msgItemDelClick: cc11001100_hook("msgItemDelClick", "0400400001", "object-key-init"),
  msgBtnClick: cc11001100_hook("msgBtnClick", "0400500001", "object-key-init"),
  msgHide: cc11001100_hook("msgHide", "0400600002", "object-key-init"),
  msgItemShow: cc11001100_hook("msgItemShow", "0400700000", "object-key-init")
});
F.addLog("superman:ps", {
  categoryClick: cc11001100_hook("categoryClick", "1200100001", "object-key-init"),
  queryChange: cc11001100_hook("queryChange", "1200200001", "object-key-init"),
  searchBtnClick: cc11001100_hook("searchBtnClick", "1200200001", "object-key-init"),
  psLogoClick: cc11001100_hook("psLogoClick", "1200300001", "object-key-init"),
  psWorkLnkClick: cc11001100_hook("psWorkLnkClick", "1200400001", "object-key-init"),
  stayLog: cc11001100_hook("stayLog", "1200400002", "object-key-init")
});
F.addLog("superman:mngr", {
  categoryClick: cc11001100_hook("categoryClick", "1200100001", "object-key-init"),
  userQuitClick: cc11001100_hook("userQuitClick", "1200100002", "object-key-init"),
  treasureClick: cc11001100_hook("treasureClick", "1300000000", "object-key-init")
});
F.addLog("superman:skin", {
  skinShow: cc11001100_hook("skinShow", "5100000000", "object-key-init"),
  skinClick: cc11001100_hook("skinClick", "5100000001", "object-key-init"),
  skinHover: cc11001100_hook("skinHover", "5100000002", "object-key-init"),
  skinOperate: cc11001100_hook("skinOperate", "5100000003", "object-key-init"),
  skinInfo: cc11001100_hook("skinInfo", "5100000004", "object-key-init")
});
F.addLog("superman:skeleton", {
  tabTimeClick: cc11001100_hook("tabTimeClick", "7000000000", "object-key-init"),
  tabTimeClickInBucket: cc11001100_hook("tabTimeClickInBucket", "7000100000", "object-key-init")
});
F.addLog("superman:superuijs/component", {
  skinClick: cc11001100_hook("skinClick", "5100000001", "object-key-init")
});
F.addLog("superman:videomeeting", {
  opendialogClick: cc11001100_hook("opendialogClick", "5100000000", "object-key-init"),
  quickMeetClick: cc11001100_hook("quickMeetClick", "5100000001", "object-key-init"),
  orderMeetClick: cc11001100_hook("orderMeetClick", "5100000002", "object-key-init"),
  meetManageClick: cc11001100_hook("meetManageClick", "5100000003", "object-key-init"),
  feedbackClick: cc11001100_hook("feedbackClick", "5100000004", "object-key-init")
});
F.addLog("superman:aging-tools", {
  toolClick: cc11001100_hook("toolClick", "5100000000", "object-key-init"),
  new_aria_script_error: cc11001100_hook("new_aria_script_error", "5100000000", "object-key-init"),
  new_aria_script_load: cc11001100_hook("new_aria_script_load", "5100000000", "object-key-init"),
  new_aria_service: cc11001100_hook("new_aria_service", "5100000000", "object-key-init")
});
F.addLog("superman:lib/carditem_log", ["cardItemLog"]);
F.module("superman:lib/carditem_log", function (require, exports, ctx) {
  var thunder = cc11001100_hook("thunder", window.Thunder.get(), "var-init");
  var logactid = cc11001100_hook("logactid", "page-card-tpl-item", "var-init");
  var logDom = cc11001100_hook("logDom", ["s_ctner_contents"], "var-init");
  var pathLogTimer = cc11001100_hook("pathLogTimer", {}, "var-init");
  var sendItemLog = function (logParm, type, tlog) {
    pathLogTimer[type] && clearTimeout(pathLogTimer[type]);
    pathLogTimer[type] = cc11001100_hook("pathLogTimer[type]", setTimeout(function () {
      if (logParm.rid != undefined) {
        ctx.fire("cardItemLog", logParm);
        if (tlog && logParm.func !== "dustbin" && +s_session.curmod === 2) {
          thunder.send(tlog);
        }
      }
    }, 300), "assign");
  };
  var buildLogParam = function (node) {
    var curNode = cc11001100_hook("curNode", $(node), "var-init"),
      flag = cc11001100_hook("flag", false, "var-init"),
      cType = cc11001100_hook("cType", "", "var-init"),
      nodeName = cc11001100_hook("nodeName", "", "var-init"),
      func = cc11001100_hook("func", "", "var-init"),
      title = cc11001100_hook("title", "", "var-init"),
      url = cc11001100_hook("url", "", "var-init"),
      isItemClick = cc11001100_hook("isItemClick", false, "var-init");
    extra = cc11001100_hook("extra", "", "assign");
    while (curNode.attr("data-rid") == undefined && curNode.attr("id") != "s_ctner_contents") {
      if (curNode.attr("data-click") != undefined) {
        isItemClick = cc11001100_hook("isItemClick", true, "assign");
        cType = cc11001100_hook("cType", curNode.attr("data-click").toLowerCase(), "assign");
        nodeName = cc11001100_hook("nodeName", node.nodeName.toLowerCase(), "assign");
        if (cType == "log_link") {
          if (curNode[0] && curNode[0].nodeName && curNode[0].nodeName.toLowerCase() == "a") {
            title = cc11001100_hook("title", $.trim(curNode.attr("data-title")) || $.trim(curNode.attr("title")) || $.trim(curNode.text()), "assign");
            var tmpurl = cc11001100_hook("tmpurl", $.trim(curNode.attr("href")), "var-init");
            if (!tmpurl.indexOf("#") == 0 && !tmpurl.indexOf("javascript") == 0) {
              url = cc11001100_hook("url", tmpurl, "assign");
            }
          }
          if (nodeName != "img") {
            nodeName = cc11001100_hook("nodeName", "a", "assign");
          }
          cType = cc11001100_hook("cType", "outlink", "assign");
        } else if (cType.indexOf("log_btn") != 1) {
          func = cc11001100_hook("func", cType.replace("log_btn_", ""), "assign");
          cType = cc11001100_hook("cType", "btn", "assign");
          url = cc11001100_hook("url", "", "assign");
          title = cc11001100_hook("title", $.trim(curNode.attr("data-title")) || $.trim(curNode.attr("title")) || $.trim(curNode.text()), "assign");
        }
      }
      curNode = cc11001100_hook("curNode", curNode.parent(), "assign");
      if (curNode.attr("data-extra")) {
        extra = cc11001100_hook("extra", curNode.attr("data-extra"), "assign");
      }
    }
    var logParam = cc11001100_hook("logParam", {
      logactid: cc11001100_hook("logactid", logactid, "object-key-init"),
      logtype: cc11001100_hook("logtype", "click", "object-key-init"),
      clicktype: cc11001100_hook("clicktype", cType, "object-key-init"),
      nodename: cc11001100_hook("nodename", nodeName, "object-key-init"),
      func: cc11001100_hook("func", func, "object-key-init"),
      title: cc11001100_hook("title", title, "object-key-init"),
      url: cc11001100_hook("url", url, "object-key-init"),
      strategyHit: cc11001100_hook("strategyHit", s_session.strategy_hit, "object-key-init"),
      xx: cc11001100_hook("xx", $(node).offset().left, "object-key-init"),
      xy: cc11001100_hook("xy", $(node).offset().top, "object-key-init"),
      extra: cc11001100_hook("extra", extra, "object-key-init")
    }, "var-init");
    logParam["rid"] = cc11001100_hook("logParam[\"rid\"]", isItemClick ? curNode.attr("data-rid") : undefined, "assign");
    var thunderlog = cc11001100_hook("thunderlog", {
      cst: cc11001100_hook("cst", 2, "object-key-init"),
      tid: cc11001100_hook("tid", 30, "object-key-init"),
      logExtra: {
        rid: cc11001100_hook("rid", isItemClick ? curNode.attr("data-rid") : undefined, "object-key-init"),
        url: cc11001100_hook("url", isItemClick ? curNode.attr("data-url") : undefined, "object-key-init"),
        clicktype: cc11001100_hook("clicktype", cType, "object-key-init"),
        title: cc11001100_hook("title", title, "object-key-init"),
        flow: cc11001100_hook("flow", 2, "object-key-init"),
        extra: cc11001100_hook("extra", extra, "object-key-init")
      }
    }, "var-init");
    var logCustom = cc11001100_hook("logCustom", curNode.attr("data-log"), "var-init"),
      logArr = cc11001100_hook("logArr", [], "var-init");
    if (logCustom) {
      logCustom = cc11001100_hook("logCustom", logCustom.replace(/\;$/g, ""), "assign");
      logArr = cc11001100_hook("logArr", logCustom.split(";"), "assign");
      var keyvalue = cc11001100_hook("keyvalue", [], "var-init");
      var key = cc11001100_hook("key", "", "var-init");
      var value = cc11001100_hook("value", "", "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < logArr.length; i++) {
        keyvalue = cc11001100_hook("keyvalue", logArr[i].split(":"), "assign");
        key = cc11001100_hook("key", keyvalue[0], "assign");
        value = cc11001100_hook("value", keyvalue[1], "assign");
        thunderlog.logExtra[key] = cc11001100_hook("thunderlog.logExtra[key]", value, "assign");
        if (!/-1$/g.test(key)) {
          if (/-0$/g.test(key)) {
            key = cc11001100_hook("key", key.replace(/-0$/g, ""), "assign");
          }
          logParam[key] = cc11001100_hook("logParam[key]", value, "assign");
        }
      }
    }
    thunderlog.logExtra = cc11001100_hook("thunderlog.logExtra", $.stringify(thunderlog.logExtra), "assign");
    sendItemLog(logParam, "click", thunderlog);
  };
  var bindEvent = function (item) {
    $("#" + item).on("mousedown", function (e) {
      var t = cc11001100_hook("t", e.target, "var-init");
      buildLogParam(t);
    });
  };
  exports.init = cc11001100_hook("exports.init", function () {
    $.each(logDom, function (i, e) {
      bindEvent(e);
    });
  }, "assign");
});
F.module("ps/log", function (require, exports, ctx) {
  var keyMap = cc11001100_hook("keyMap", {
    "旧版": cc11001100_hook("旧版", "tjold", "object-key-init"),
    "使用百度前必读": cc11001100_hook("使用百度前必读", "tjread", "object-key-init"),
    "我的相册": cc11001100_hook("我的相册", "tjxiangce", "object-key-init"),
    "首页设置": cc11001100_hook("首页设置", "tjmsgsetting", "object-key-init"),
    "登录": cc11001100_hook("登录", "tjlogin", "object-key-init"),
    "退出": cc11001100_hook("退出", "tjlogout", "object-key-init"),
    "空间": cc11001100_hook("空间", "tjhi", "object-key-init"),
    "我的主页": cc11001100_hook("我的主页", "tjgongzhu", "object-key-init"),
    "我的成就": cc11001100_hook("我的成就", "tjchengjiu", "object-key-init"),
    "加入百度推广": cc11001100_hook("加入百度推广", "tjadjoin", "object-key-init"),
    "搜索风云榜": cc11001100_hook("搜索风云榜", "tjadtop", "object-key-init"),
    "关于百度": cc11001100_hook("关于百度", "tjadaboutch", "object-key-init"),
    AboutBaidu: cc11001100_hook("AboutBaidu", "tjadabouten", "object-key-init"),
    "加入开放首页": cc11001100_hook("加入开放首页", "tjadopen", "object-key-init"),
    "个人中心": cc11001100_hook("个人中心", "tjucent", "object-key-init"),
    "帐号设置": cc11001100_hook("帐号设置", "tjuser", "object-key-init"),
    "切换帐号": cc11001100_hook("切换帐号", "tjswitchuser", "object-key-init"),
    "退出登录": cc11001100_hook("退出登录", "tjlogout", "object-key-init"),
    "新闻": cc11001100_hook("新闻", "tjnews", "object-key-init"),
    hao123: cc11001100_hook("hao123", "tjhao123", "object-key-init"),
    "地图": cc11001100_hook("地图", "tjmap", "object-key-init"),
    "视频": cc11001100_hook("视频", "tjvideo", "object-key-init"),
    "贴吧": cc11001100_hook("贴吧", "tjtieba", "object-key-init"),
    "图片": cc11001100_hook("图片", "tjimg", "object-key-init"),
    "网盘": cc11001100_hook("网盘", "tjwangpan", "object-key-init"),
    "更多": cc11001100_hook("更多", "tjmore", "object-key-init"),
    "知道": cc11001100_hook("知道", "tjzhidao", "object-key-init"),
    "健康": cc11001100_hook("健康", "tjjiankang", "object-key-init"),
    "学术": cc11001100_hook("学术", "tjxueshu", "object-key-init"),
    "翻译": cc11001100_hook("翻译", "tjfanyi", "object-key-init"),
    "直播": cc11001100_hook("直播", "tjlive", "object-key-init"),
    "百科": cc11001100_hook("百科", "tjbaike", "object-key-init"),
    "营销推广": cc11001100_hook("营销推广", "tjyingxiaotuiguang", "object-key-init"),
    "文库": cc11001100_hook("文库", "tjwenku", "object-key-init"),
    "经验": cc11001100_hook("经验", "tjjingyan", "object-key-init"),
    "音乐": cc11001100_hook("音乐", "tjmp3", "object-key-init"),
    "查看全部百度产品>": cc11001100_hook("查看全部百度产品>", "tjquanbu", "object-key-init"),
    "搜索设置": cc11001100_hook("搜索设置", "tjsetting", "object-key-init"),
    "高级搜索": cc11001100_hook("高级搜索", "tjadvsetting", "object-key-init"),
    "隐私设置": cc11001100_hook("隐私设置", "tjhistorysetting", "object-key-init"),
    "我的收藏": cc11001100_hook("我的收藏", "tjucentcol", "object-key-init"),
    "我的日历": cc11001100_hook("我的日历", "tjucentcal", "object-key-init"),
    "搜索记录": cc11001100_hook("搜索记录", "tjucenthis", "object-key-init"),
    "完整版": cc11001100_hook("完整版", "tjtoxman", "object-key-init"),
    "极简版": cc11001100_hook("极简版", "tjtolite", "object-key-init"),
    "设为首页": cc11001100_hook("设为首页", "setpage", "object-key-init"),
    "好看": cc11001100_hook("好看", "tjhaokan", "object-key-init")
  }, "var-init");
  var topLocText = cc11001100_hook("topLocText", $("#topmenu-loc").text(), "var-init");
  if (topLocText) {
    keyMap[topLocText] = cc11001100_hook("keyMap[topLocText]", "tj_topLoc", "assign");
  }
  var _getTagTxt = function (tag) {
    return $(tag).text().replace(/[\s\t\xa0\u3000]/g, "");
  };
  var _MouseDown = function (e) {
    var obj = cc11001100_hook("obj", e.srcElement ? e.srcElement : e.target, "var-init");
    if (obj.tagName === "A") {
      var txt = cc11001100_hook("txt", _getTagTxt(obj), "var-init");
      var url = cc11001100_hook("url", obj.href, "var-init");
      if (txt in keyMap) {
        ctx.fire("categoryClick", {
          category: cc11001100_hook("category", keyMap[txt], "object-key-init"),
          url: cc11001100_hook("url", url, "object-key-init")
        });
      } else if (txt === s_session.username) {
        ctx.fire("categoryClick", {
          category: cc11001100_hook("category", "username", "object-key-init")
        });
      }
    }
    return false;
  };
  function _bind(id) {
    cc11001100_hook("id", id, "function-parameter");
    $("#" + id).bind("mousedown", _MouseDown);
  }
  function _fire(category, ext) {
    cc11001100_hook("category", category, "function-parameter");
    cc11001100_hook("ext", ext, "function-parameter");
    var param = cc11001100_hook("param", {
      category: cc11001100_hook("category", category, "object-key-init")
    }, "var-init");
    if (ext) {
      $.extend(param, ext);
    }
    ctx.fire("categoryClick", param);
  }
  exports.bindBox = cc11001100_hook("exports.bindBox", _bind, "assign");
  exports.fireLog = cc11001100_hook("exports.fireLog", _fire, "assign");
  exports.keyMap = cc11001100_hook("exports.keyMap", keyMap, "assign");
});
F.addLog("superman:ps/sindex", {
  hwInput: cc11001100_hook("hwInput", "1100000900", "object-key-init")
});
F.module("superman:ps/sindex", function (require, exports, ctx) {
  var S = cc11001100_hook("S", ctx.base, "var-init");
  exports.init = cc11001100_hook("exports.init", function () {
    var w = cc11001100_hook("w", window, "var-init"),
      d = cc11001100_hook("d", document, "var-init"),
      n = cc11001100_hook("n", navigator, "var-init"),
      k = cc11001100_hook("k", $("#kw"), "var-init"),
      isIE = cc11001100_hook("isIE", n.userAgent.indexOf("MSIE") != -1 && !window.opera, "var-init");
    s_session.searchLogSend = cc11001100_hook("s_session.searchLogSend", 0, "assign");
    $("#su").on("mouseout", function () {
      $(this).removeClass("btn_h");
    }).on("mousedown", function () {
      $(this).addClass("btn_h");
    });
    var kw = cc11001100_hook("kw", document.getElementById("kw"), "var-init");
    $(kw.parentNode).addClass("bg s_ipt_wr iptfocus");
    $(window).on("swap_end", function () {
      if (s_session.searchLogSend == 0) {
        s_session.searchLogSend = cc11001100_hook("s_session.searchLogSend", 1, "assign");
        var personalData = cc11001100_hook("personalData", bds.comm.personalData, "var-init");
        ctx.fire("searchBtnClick", {
          opType: cc11001100_hook("opType", "click", "object-key-init"),
          openMode: cc11001100_hook("openMode", "current", "object-key-init"),
          wd: cc11001100_hook("wd", encodeURIComponent($("#kw").val()), "object-key-init"),
          isSkin: cc11001100_hook("isSkin", !!(personalData && personalData.skinUrl), "object-key-init")
        });
      }
    });
    $(window).on("s-skinon", function () {
      $('<style id="s_skin_bdpfmenu">.bdpfmenu{border:0 none !important;}.bdpfmenu a{line-height:24px !important;border:1px solid #fff !important;}</style>').appendTo($("head"));
    }).on("s-skinoff", function () {
      $("#s_skin_bdpfmenu").remove();
    });
    function G(id) {
      cc11001100_hook("id", id, "function-parameter");
      return d.getElementById(id);
    }
    var noskinMan = cc11001100_hook("noskinMan", _noskinbind(k), "var-init");
    if (w.s_session.userIsNewSkined == "off") {
      noskinMan(k);
    }
    ctx.listen("superman:skin/skin_rewrite", "skin_change", function (e) {
      noskinMan(k, true);
    });
    try {
      if (typeof window._sp_async == "undefined") {
        G("kw") && G("kw").focus();
      } else {
        if (pageState == 0) {
          G("kw") && G("kw").focus();
        }
      }
    } catch (e) {}
    $("#s_username_top").bind("mouseover", function () {
      F.use("ps/log", function (psLog) {
        psLog.fireLog("tj_ucent_mouseover");
      });
    });
    var _menuShowing = cc11001100_hook("_menuShowing", [false, false], "var-init");
    var _logLock = cc11001100_hook("_logLock", false, "var-init");
    function regUserCenterMenu(dId, menuId, target, pos, index) {
      cc11001100_hook("dId", dId, "function-parameter");
      cc11001100_hook("menuId", menuId, "function-parameter");
      cc11001100_hook("target", target, "function-parameter");
      cc11001100_hook("pos", pos, "function-parameter");
      cc11001100_hook("index", index, "function-parameter");
      var $d = cc11001100_hook("$d", $("#" + dId), "var-init"),
        $target = cc11001100_hook("$target", $("#" + target), "var-init"),
        $menu = cc11001100_hook("$menu", $("#" + menuId), "var-init");
      $d.bind("mouseenter", function (e) {
        _menuShowing[index] = cc11001100_hook("_menuShowing[index]", true, "assign");
        $menu.show();
        var right = cc11001100_hook("right", pos == "right" ? $(document.body).width() - $menu[0].offsetWidth / 2 - $target.offset().left - $target.width() / 2 : $(document.body).width() - $menu[0].offsetWidth / 2 - $target.offset().left - $target.width() / 2, "var-init");
        $menu.css({
          right: cc11001100_hook("right", right, "object-key-init")
        });
      }).bind("mouseleave", function (e) {
        _menuShowing[index] = cc11001100_hook("_menuShowing[index]", false, "assign");
        w.setTimeout(function () {
          if (!_menuShowing[index]) {
            $menu.hide();
            ctx.fire("userMenuHide");
          }
        }, 200);
      });
    }
    regUserCenterMenu("s_username_top", "s_user_name_menu", "s_username_top", "left", 1);
    regUserCenterMenu("s_user_name_menu", "s_user_name_menu", "s_username_top", "left", 1);
    if (!window._sp_async) {
      regUserCenterMenu("s_usersetting_top", "s_user_setting_menu", "s_usersetting_top", "right", 2);
      regUserCenterMenu("s_user_setting_menu", "s_user_setting_menu", "s_usersetting_top", "right", 2);
    }
    function loadJS(url, cs) {
      cc11001100_hook("url", url, "function-parameter");
      cc11001100_hook("cs", cs, "function-parameter");
      if (url) {
        var s = cc11001100_hook("s", d.createElement("script"), "var-init");
        s.charset = cc11001100_hook("s.charset", cs ? cs : "gbk", "assign");
        s.src = cc11001100_hook("s.src", url, "assign");
        d.getElementsByTagName("head")[0].appendChild(s);
      }
    }
    addEV(w, "load", function () {
      try {
        var ua = cc11001100_hook("ua", navigator.userAgent.toLowerCase(), "var-init");
        if (!/ipad/.test(ua)) {
          G("kw").focus();
        } else {
          setTimeout(function () {
            if (/ipad/.test(ua) && document.activeElement && document.activeElement === G("kw")) {
              G("kw").blur();
            }
          }, 0);
        }
      } catch (e) {}
    });
    w.onunload = cc11001100_hook("w.onunload", function () {}, "assign");
    var mapDom = cc11001100_hook("mapDom", G("s_mp"), "var-init");
    var logoArea;
    if (mapDom) {
      logoArea = cc11001100_hook("logoArea", mapDom.getElementsByTagName("area")[0], "assign");
    }
    var wordLink = cc11001100_hook("wordLink", G("lm") && G("lm").getElementsByTagName("a")[0], "var-init");
    logoArea && $(logoArea).bind("click", function (e) {
      ctx.fire("psLogoClick", {
        isFesBg: cc11001100_hook("isFesBg", s_session.userTips.skinLogoHasSkined ? "1" : "0", "object-key-init")
      });
    });
    wordLink && $(wordLink).bind("click", function (e) {
      ctx.fire("psWorkLnkClick");
    });
  }, "assign");
  exports.fire = cc11001100_hook("exports.fire", function () {
    ctx.fire("hwInput", {
      clickType: cc11001100_hook("clickType", "handWriteInput", "object-key-init")
    });
  }, "assign");
  function countStay() {
    var times = cc11001100_hook("times", 0, "var-init");
    var logInterval = cc11001100_hook("logInterval", setInterval(function () {
      if (window.s_session.index_off) {
        clearInterval(logInterval);
        return;
      }
      ctx.fire("stayLog", {
        times: cc11001100_hook("times", 10, "object-key-init")
      });
    }, 1e4), "var-init");
  }
  var psforie6resize = function () {
    $("#s_pss_guide").css("width", document.body.clientWidth <= 958 ? "958px" : "100%");
  };
  function _noskinbind($k) {
    cc11001100_hook("$k", $k, "function-parameter");
    function emitFo() {
      $(this).addClass("nobg_s_fm_focus");
    }
    function emitBl() {
      $(this).removeClass("nobg_s_fm_focus");
    }
    function emitMv() {
      $(this).addClass("nobg_s_fm_hover");
    }
    function emitMu() {
      $(this).removeClass("nobg_s_fm_hover");
    }
    function suMd() {
      $(this).parent().addClass("s_btn_wr_h");
    }
    function suMu() {
      $(this).parent().removeClass("s_btn_wr_h");
    }
    return function ($k, bind) {
      if (!bind) {
        $k.on("focus", emitFo).on("blur", emitBl).on("mouseover", emitMv).on("mouseout", emitMu);
        $("#su").on("mousedown", suMd).on("mouseout", suMu);
      } else {
        $k.unbind("focus", emitFo).unbind("blur", emitBl).unbind("mouseover", emitMv).unbind("mouseout", emitMu);
        $("#su").unbind("mousedown", suMd).unbind("mouseout", suMu);
      }
    };
  }
});
var isIE = cc11001100_hook("isIE", navigator.userAgent.indexOf("MSIE") != -1 && !window.opera, "var-init");
function G(id) {
  cc11001100_hook("id", id, "function-parameter");
  return document.getElementById(id);
}
function addEV(o, e, f) {
  cc11001100_hook("o", o, "function-parameter");
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("f", f, "function-parameter");
  if (window.attachEvent) {
    o.attachEvent("on" + e, f);
  } else if (window.addEventListener) {
    o.addEventListener(e, f, false);
  }
}
if ($.browser.ie <= 8) {
  $("#head").addClass("s-ie8-hack");
}
var bds = cc11001100_hook("bds", bds || {}, "var-init");
bds.se = cc11001100_hook("bds.se", bds.se || {}, "assign");
bds.se.store = cc11001100_hook("bds.se.store", function () {
  var l = cc11001100_hook("l", {}, "var-init"),
    h = cc11001100_hook("h", window, "var-init"),
    k = cc11001100_hook("k", h.document, "var-init"),
    c = cc11001100_hook("c", "localStorage", "var-init"),
    o = cc11001100_hook("o", "globalStorage", "var-init"),
    d = cc11001100_hook("d", "__storejs__", "var-init"),
    g;
  l.disabled = cc11001100_hook("l.disabled", false, "assign");
  l.set = cc11001100_hook("l.set", function (e, p) {}, "assign");
  l.get = cc11001100_hook("l.get", function (e) {}, "assign");
  l.remove = cc11001100_hook("l.remove", function (e) {}, "assign");
  l.clear = cc11001100_hook("l.clear", function () {}, "assign");
  l.transact = cc11001100_hook("l.transact", function (e, r, p) {
    var q = cc11001100_hook("q", l.get(e), "var-init");
    if (p == null) {
      p = cc11001100_hook("p", r, "assign");
      r = cc11001100_hook("r", null, "assign");
    }
    if (typeof q == "undefined") {
      q = cc11001100_hook("q", r || {}, "assign");
    }
    p(q);
    l.set(e, q);
  }, "assign");
  l.getAll = cc11001100_hook("l.getAll", function () {}, "assign");
  l.serialize = cc11001100_hook("l.serialize", function (e) {
    return String(e);
  }, "assign");
  l.deserialize = cc11001100_hook("l.deserialize", function (e) {
    if (typeof e != "string") {
      return undefined;
    }
    return e;
  }, "assign");
  function b() {
    try {
      return c in h && h[c];
    } catch (e) {
      return false;
    }
  }
  function n() {
    try {
      return o in h && h[o] && h[o][h.location.hostname];
    } catch (e) {
      return false;
    }
  }
  if (b()) {
    g = cc11001100_hook("g", h[c], "assign");
    l.set = cc11001100_hook("l.set", function (e, p) {
      if (p === undefined) {
        return l.remove(e);
      }
      g.setItem(e, l.serialize(p));
    }, "assign");
    l.get = cc11001100_hook("l.get", function (e) {
      return l.deserialize(g.getItem(e));
    }, "assign");
    l.remove = cc11001100_hook("l.remove", function (e) {
      g.removeItem(e);
    }, "assign");
    l.clear = cc11001100_hook("l.clear", function () {
      g.clear();
    }, "assign");
    l.getAll = cc11001100_hook("l.getAll", function () {
      var e = cc11001100_hook("e", {}, "var-init");
      for (var q = cc11001100_hook("q", 0, "var-init"); q < g.length; ++q) {
        var p = cc11001100_hook("p", g.key(q), "var-init");
        e[p] = cc11001100_hook("e[p]", l.get(p), "assign");
      }
      return e;
    }, "assign");
  } else {
    if (n()) {
      g = cc11001100_hook("g", h[o][h.location.hostname], "assign");
      l.set = cc11001100_hook("l.set", function (e, p) {
        if (p === undefined) {
          return l.remove(e);
        }
        g[e] = cc11001100_hook("g[e]", l.serialize(p), "assign");
      }, "assign");
      l.get = cc11001100_hook("l.get", function (e) {
        return l.deserialize(g[e] && g[e].value);
      }, "assign");
      l.remove = cc11001100_hook("l.remove", function (e) {
        delete g[e];
      }, "assign");
      l.clear = cc11001100_hook("l.clear", function () {
        for (var e in g) {
          delete g[e];
        }
      }, "assign");
      l.getAll = cc11001100_hook("l.getAll", function () {
        var e = cc11001100_hook("e", {}, "var-init");
        for (var q = cc11001100_hook("q", 0, "var-init"); q < g.length; ++q) {
          var p = cc11001100_hook("p", g.key(q), "var-init");
          e[p] = cc11001100_hook("e[p]", l.get(p), "assign");
        }
        return e;
      }, "assign");
    } else {
      if (k.documentElement.addBehavior) {
        var j, f;
        try {
          f = cc11001100_hook("f", new ActiveXObject("htmlfile"), "assign");
          f.open();
          f.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>');
          f.close();
          j = cc11001100_hook("j", f.w.frames[0].document, "assign");
          g = cc11001100_hook("g", j.createElement("div"), "assign");
        } catch (i) {
          g = cc11001100_hook("g", k.createElement("div"), "assign");
          j = cc11001100_hook("j", k.body, "assign");
        }
        function a(e) {
          cc11001100_hook("e", e, "function-parameter");
          return function () {
            var q = cc11001100_hook("q", Array.prototype.slice.call(arguments, 0), "var-init");
            q.unshift(g);
            j.appendChild(g);
            g.addBehavior("#default#userData");
            g.load(c);
            var p = cc11001100_hook("p", e.apply(l, q), "var-init");
            j.removeChild(g);
            return p;
          };
        }
        function m(e) {
          cc11001100_hook("e", e, "function-parameter");
          return "_" + e;
        }
        l.set = cc11001100_hook("l.set", a(function (q, e, p) {
          e = cc11001100_hook("e", m(e), "assign");
          if (p === undefined) {
            return l.remove(e);
          }
          q.setAttribute(e, l.serialize(p));
          q.save(c);
        }), "assign");
        l.get = cc11001100_hook("l.get", a(function (p, e) {
          e = cc11001100_hook("e", m(e), "assign");
          return l.deserialize(p.getAttribute(e));
        }), "assign");
        l.remove = cc11001100_hook("l.remove", a(function (p, e) {
          e = cc11001100_hook("e", m(e), "assign");
          p.removeAttribute(e);
          p.save(c);
        }), "assign");
        l.clear = cc11001100_hook("l.clear", a(function (r) {
          var p = cc11001100_hook("p", r.XMLDocument.documentElement.attributes, "var-init");
          r.load(c);
          for (var q = cc11001100_hook("q", 0, "var-init"), e; e = cc11001100_hook("e", p[q], "assign"); q++) {
            r.removeAttribute(e.name);
          }
          r.save(c);
        }), "assign");
        l.getAll = cc11001100_hook("l.getAll", a(function (s) {
          var p = cc11001100_hook("p", s.XMLDocument.documentElement.attributes, "var-init");
          s.load(c);
          var q = cc11001100_hook("q", {}, "var-init");
          for (var r = cc11001100_hook("r", 0, "var-init"), e; e = cc11001100_hook("e", p[r], "assign"); ++r) {
            q[e] = cc11001100_hook("q[e]", l.get(e), "assign");
          }
          return q;
        }), "assign");
      }
    }
  }
  try {
    l.set(d, d);
    if (l.get(d) != d) {
      l.disabled = cc11001100_hook("l.disabled", true, "assign");
    }
    l.remove(d);
  } catch (i) {
    l.disabled = cc11001100_hook("l.disabled", true, "assign");
  }
  return l;
}(), "assign");
bds.se.sugStorage = cc11001100_hook("bds.se.sugStorage", function () {
  var suggestions,
    temp_sugs,
    options,
    SUGGESTION = cc11001100_hook("SUGGESTION", "BDSUGSTORED", "var-init"),
    OPTIONS = cc11001100_hook("OPTIONS", "__OPTIONS__", "var-init");
  var escapeData = cc11001100_hook("escapeData", function () {
    var reg = cc11001100_hook("reg", /['"\\\/\<\>\n\r]/g, "var-init"),
      escapeMap = cc11001100_hook("escapeMap", {
        "'": cc11001100_hook("'", "\\x27", "object-key-init"),
        '"': cc11001100_hook('"', "\\x22", "object-key-init"),
        "\\": cc11001100_hook("\\", "\\\\", "object-key-init"),
        "/": cc11001100_hook("/", "\\/", "object-key-init"),
        "\n": cc11001100_hook("\n", "\\\\n", "object-key-init"),
        "\r": cc11001100_hook("\r", "\\\\r", "object-key-init"),
        "<": cc11001100_hook("<", "&lt;", "object-key-init"),
        ">": cc11001100_hook(">", "&gt;", "object-key-init")
      }, "var-init");
    var replacer = function (str) {
      return escapeMap[str] || str;
    };
    return function (str) {
      return str.replace(reg, replacer);
    };
  }(), "var-init");
  var sug2Str = function () {
    return '{"q": "' + this.q + '", "p": "' + (this.p ? this.p : "") + '"}';
  };
  var opt2Str = function (option) {
    var arr = cc11001100_hook("arr", [], "var-init");
    for (var k in option) {
      arr.push('"' + k + '": "' + option[k] + '"');
    }
    return "{" + arr.join(",") + "}";
  };
  var option = function (key, value) {
    if (value !== undefined) {
      options[key] = cc11001100_hook("options[key]", value, "assign");
      bds.se.store.set(OPTIONS, opt2Str(options));
      return value;
    }
    return options[key] || "";
  };
  var isSupport = function () {
    return bds.se.store && !bds.se.store.disabled;
  };
  var set = function (suggestion) {
    if (suggestion && suggestion.q && suggestion.p) {
      suggestion.toString = cc11001100_hook("suggestion.toString", sug2Str, "assign");
      if (!(temp_sugs[suggestion.q] && temp_sugs[suggestion.p])) {
        suggestions.push(suggestion);
      } else {
        for (var i = cc11001100_hook("i", 0, "var-init"), f = cc11001100_hook("f", 0, "var-init"); i < suggestions.length; i++) {
          if (suggestion.q == suggestions[i].q && suggestion.p == suggestions[i].p) {
            f = cc11001100_hook("f", 1, "assign");
            break;
          }
        }
        if (f === 0) suggestions.push(suggestion);
      }
      if (temp_sugs[suggestion.q] == undefined) {
        temp_sugs[suggestion.q] = cc11001100_hook("temp_sugs[suggestion.q]", [suggestion], "assign");
      } else {
        for (var j = cc11001100_hook("j", 0, "var-init"), f = cc11001100_hook("f", 0, "var-init"), len = cc11001100_hook("len", temp_sugs[suggestion.q].length, "var-init"); j < len; j++) {
          if (temp_sugs[suggestion.q][j].p == suggestion.p || temp_sugs[suggestion.q][j].q == suggestion.q) {
            f = cc11001100_hook("f", 1, "assign");
            break;
          }
        }
        if (f === 0) temp_sugs[suggestion.q].push(suggestion);
      }
      if (temp_sugs[suggestion.p] == undefined) {
        temp_sugs[suggestion.p] = cc11001100_hook("temp_sugs[suggestion.p]", [suggestion], "assign");
      } else {
        for (var j = cc11001100_hook("j", 0, "var-init"), f = cc11001100_hook("f", 0, "var-init"), len = cc11001100_hook("len", temp_sugs[suggestion.p].length, "var-init"); j < len; j++) {
          if (temp_sugs[suggestion.p][j].q == suggestion.q) {
            f = cc11001100_hook("f", 1, "assign");
            break;
          }
        }
        if (f === 0) temp_sugs[suggestion.p].push(suggestion);
      }
      bds.se.store.set(SUGGESTION, "[" + suggestions.join(",") + "]");
      return suggestions.length;
    }
    return false;
  };
  var get = function (str) {
    var arr = cc11001100_hook("arr", [], "var-init");
    for (var k in temp_sugs) {
      if (new RegExp("^" + str, "img").test(k)) {
        arr = cc11001100_hook("arr", arr.concat(temp_sugs[k]), "assign");
      }
    }
    return arr;
  };
  var getAll = function (str) {
    return suggestions;
  };
  var reset = function () {
    suggestions = cc11001100_hook("suggestions", [], "assign");
    temp_sugs = cc11001100_hook("temp_sugs", {}, "assign");
    bds.se.store.set(SUGGESTION, "");
    return suggestions.length;
  };
  var getCount = function () {
    return suggestions.length;
  };
  var remove = function (sug) {
    if (!sug || !sug.q || !sug.p) return false;
    var suggestion;
    for (i = cc11001100_hook("i", 0, "assign"); i < suggestions.length; i++) {
      if (sug.q == suggestions[i].q && sug.p == suggestions[i].p) {
        suggestion = cc11001100_hook("suggestion", suggestions[i], "assign");
        suggestions.splice(i, 1);
        break;
      }
    }
    if (suggestion === undefined) {
      return false;
    } else {
      bds.se.store.set(SUGGESTION, "[" + suggestions.join(",") + "]");
      init();
      return suggestion;
    }
  };
  var edit = function (sug) {
    if (remove(sug)) {
      return set({
        q: cc11001100_hook("q", sug.q, "object-key-init"),
        p: cc11001100_hook("p", sug.p, "object-key-init")
      });
    }
    return false;
  };
  var pop = function () {
    var sug = cc11001100_hook("sug", suggestions[0], "var-init");
    if (sug) {
      return remove({
        q: cc11001100_hook("q", sug.q, "object-key-init"),
        p: cc11001100_hook("p", sug.p, "object-key-init")
      });
    }
    return false;
  };
  var init = function () {
    temp_sugs = cc11001100_hook("temp_sugs", {}, "assign");
    var optionData = cc11001100_hook("optionData", bds.se.store.get(OPTIONS), "var-init");
    if (optionData) {
      options = cc11001100_hook("options", new Function("return (" + optionData + ")")(), "assign");
    } else {
      options = cc11001100_hook("options", {}, "assign");
    }
    var suggestionData = cc11001100_hook("suggestionData", bds.se.store.get(SUGGESTION), "var-init");
    if (!suggestionData) {
      suggestions = cc11001100_hook("suggestions", [], "assign");
    } else {
      suggestions = cc11001100_hook("suggestions", new Function("return (" + suggestionData + ")")(), "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"), l = cc11001100_hook("l", suggestions.length, "var-init"); i < l; i++) {
        var suggestion = cc11001100_hook("suggestion", suggestions[i], "var-init");
        suggestion.toString = cc11001100_hook("suggestion.toString", sug2Str, "assign");
        if (temp_sugs[suggestion.q] == undefined) {
          temp_sugs[suggestion.q] = cc11001100_hook("temp_sugs[suggestion.q]", [suggestion], "assign");
        } else {
          for (var j = cc11001100_hook("j", 0, "var-init"), f = cc11001100_hook("f", 0, "var-init"), len = cc11001100_hook("len", temp_sugs[suggestion.q].length, "var-init"); j < len; j++) {
            if (temp_sugs[suggestion.q][j].p == suggestion.p || temp_sugs[suggestion.q][j].q == suggestion.q) {
              f = cc11001100_hook("f", 1, "assign");
              break;
            }
          }
          if (f === 0) temp_sugs[suggestion.q].push(suggestion);
        }
        if (temp_sugs[suggestion.p] == undefined) {
          temp_sugs[suggestion.p] = cc11001100_hook("temp_sugs[suggestion.p]", [suggestion], "assign");
        } else {
          for (var j = cc11001100_hook("j", 0, "var-init"), f = cc11001100_hook("f", 0, "var-init"), len = cc11001100_hook("len", temp_sugs[suggestion.p].length, "var-init"); j < len; j++) {
            if (temp_sugs[suggestion.p][j].q == suggestion.q) {
              f = cc11001100_hook("f", 1, "assign");
              break;
            }
          }
          if (f === 0) temp_sugs[suggestion.p].push(suggestion);
        }
      }
    }
  };
  init();
  return {
    escapeData: cc11001100_hook("escapeData", escapeData, "object-key-init"),
    isSupport: cc11001100_hook("isSupport", isSupport, "object-key-init"),
    reset: cc11001100_hook("reset", reset, "object-key-init"),
    getCount: cc11001100_hook("getCount", getCount, "object-key-init"),
    set: cc11001100_hook("set", set, "object-key-init"),
    get: cc11001100_hook("get", get, "object-key-init"),
    getAll: cc11001100_hook("getAll", getAll, "object-key-init"),
    edit: cc11001100_hook("edit", edit, "object-key-init"),
    remove: cc11001100_hook("remove", remove, "object-key-init"),
    pop: cc11001100_hook("pop", pop, "object-key-init"),
    option: cc11001100_hook("option", option, "object-key-init")
  };
}(), "assign");
bds.se.sugsync = cc11001100_hook("bds.se.sugsync", function () {
  var lenStorage;
  var rsv_sug1 = cc11001100_hook("rsv_sug1", 0, "var-init"),
    rsv_sug3 = cc11001100_hook("rsv_sug3", 0, "var-init"),
    rsv_sug4 = cc11001100_hook("rsv_sug4", 0, "var-init"),
    rsv_temp_time = cc11001100_hook("rsv_temp_time", 0, "var-init"),
    rsv_temp_flag = cc11001100_hook("rsv_temp_flag", false, "var-init"),
    rsv_timer = cc11001100_hook("rsv_timer", null, "var-init");
  var isIE = cc11001100_hook("isIE", /msie (\d+)/i.test(navigator.userAgent) && !window.opera ? parseInt(RegExp.$1) : 0, "var-init");
  var isQuirk = cc11001100_hook("isQuirk", document.compatMode == "BackCompat", "var-init");
  function G(id) {
    cc11001100_hook("id", id, "function-parameter");
    return document.getElementById(id);
  }
  function C(tg) {
    cc11001100_hook("tg", tg, "function-parameter");
    return document.createElement(tg);
  }
  function trim(str) {
    cc11001100_hook("str", str, "function-parameter");
    return String(str).replace(new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g"), "");
  }
  function trimAS(str) {
    cc11001100_hook("str", str, "function-parameter");
    return String(str).replace(new RegExp("[\\s\\t\\xa0\\u3000]", "g"), "");
  }
  function addEvent(elem, type, handler) {
    cc11001100_hook("elem", elem, "function-parameter");
    cc11001100_hook("type", type, "function-parameter");
    cc11001100_hook("handler", handler, "function-parameter");
    if (isIE) {
      elem.attachEvent("on" + type, function (elm) {
        return function () {
          handler.call(elm);
        };
      }(elem));
    } else {
      elem.addEventListener(type, handler, false);
    }
  }
  function stopDefault(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (isIE) {
      e.returnValue = cc11001100_hook("e.returnValue", false, "assign");
    } else {
      e.preventDefault();
    }
  }
  function addStyle(styleStr) {
    cc11001100_hook("styleStr", styleStr, "function-parameter");
    if (isIE) {
      var styleSheet = cc11001100_hook("styleSheet", document.createStyleSheet(), "var-init");
      styleSheet.cssText = cc11001100_hook("styleSheet.cssText", styleStr, "assign");
    } else {
      var style = cc11001100_hook("style", document.createElement("style"), "var-init");
      style.type = cc11001100_hook("style.type", "text/css", "assign");
      style.appendChild(document.createTextNode(styleStr));
      document.getElementsByTagName("HEAD")[0].appendChild(style);
    }
  }
  function addTj(o) {
    cc11001100_hook("o", o, "function-parameter");
    var fm = cc11001100_hook("fm", document.forms[0], "var-init");
    for (var i in o) {
      if (o[i] == undefined) {
        if (G("bdsug_ipt_" + i)) fm.removeChild(G("bdsug_ipt_" + i));
      } else {
        if (!_hasi(i)) {
          fm.appendChild(CHI(i, o[i]));
        } else {
          _hasi(i).value = cc11001100_hook("_hasi(i).value", o[i], "assign");
        }
      }
    }
    function CHI(n, v) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("v", v, "function-parameter");
      var elem = cc11001100_hook("elem", C("INPUT"), "var-init");
      elem.type = cc11001100_hook("elem.type", "hidden", "assign");
      elem.name = cc11001100_hook("elem.name", n, "assign");
      elem.id = cc11001100_hook("elem.id", "bdsug_ipt_" + n, "assign");
      elem.value = cc11001100_hook("elem.value", v, "assign");
      return elem;
    }
  }
  function _hasi(s) {
    cc11001100_hook("s", s, "function-parameter");
    var fm = cc11001100_hook("fm", document.forms[0], "var-init");
    var _i = cc11001100_hook("_i", false, "var-init");
    var _iarr = cc11001100_hook("_iarr", fm.getElementsByTagName("INPUT"), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < _iarr.length; i++) {
      if (s == _iarr[i].getAttribute("name")) {
        _i = cc11001100_hook("_i", _iarr[i], "assign");
        return _i;
      } else {
        _i = cc11001100_hook("_i", false, "assign");
      }
    }
  }
  function rmTj(o) {
    cc11001100_hook("o", o, "function-parameter");
    var fm = cc11001100_hook("fm", document.forms[0], "var-init");
    for (var i in o) {
      if (i == "f") {
        if (_hasi("f")) {
          if (_hasi("f").id == "bdsug_ipt_f") {
            fm.removeChild(G("bdsug_ipt_f"));
          } else {
            _hasi("f").value = cc11001100_hook("_hasi(\"f\").value", "8", "assign");
          }
        }
      } else {
        if (G("bdsug_ipt_" + i)) fm.removeChild(G("bdsug_ipt_" + i));
      }
    }
  }
  var sugT = cc11001100_hook("sugT", 0, "var-init");
  if (typeof window.bdsug != "object" || window.bdsug == null) {
    window.bdsug = cc11001100_hook("window.bdsug", {}, "assign");
  }
  bdsug.sug = cc11001100_hook("bdsug.sug", {}, "assign");
  bdsug.sugkeywatcher = cc11001100_hook("bdsug.sugkeywatcher", {}, "assign");
  var MessageDispatcher = cc11001100_hook("MessageDispatcher", function () {
    function addReceiver(msgType) {
      cc11001100_hook("msgType", msgType, "function-parameter");
      var queues = cc11001100_hook("queues", this.__MSG_QS__, "var-init");
      if (!queues[msgType]) {
        queues[msgType] = cc11001100_hook("queues[msgType]", [], "assign");
      }
      for (var i = cc11001100_hook("i", 1, "var-init"), n = cc11001100_hook("n", arguments.length, "var-init"), r; i < n; i++) {
        queues[msgType].push(arguments[i]);
      }
    }
    function dispatchMsg(msg) {
      cc11001100_hook("msg", msg, "function-parameter");
      var q = cc11001100_hook("q", this.__MSG_QS__[msg.type], "var-init");
      if (q == null) {
        return;
      }
      for (var i = cc11001100_hook("i", 0, "var-init"), n = cc11001100_hook("n", q.length, "var-init"); i < n; i++) {
        q[i].rm(msg);
      }
    }
    return {
      ini: function (obj) {
        obj.__MSG_QS__ = cc11001100_hook("obj.__MSG_QS__", {}, "assign");
        obj.on = cc11001100_hook("obj.on", addReceiver, "assign");
        obj.dm = cc11001100_hook("obj.dm", dispatchMsg, "assign");
        return obj;
      }
    };
  }(), "var-init");
  var Inpt = cc11001100_hook("Inpt", function () {
    var ipt = cc11001100_hook("ipt", G("kw"), "var-init");
    var div;
    var circleTimer = cc11001100_hook("circleTimer", 0, "var-init");
    var requestTimer = cc11001100_hook("requestTimer", 0, "var-init");
    var oldValue = cc11001100_hook("oldValue", "", "var-init");
    var keyValue = cc11001100_hook("keyValue", "", "var-init");
    var mouseOverValue;
    var isClkSdiv = cc11001100_hook("isClkSdiv", false, "var-init");
    var beforeStart = cc11001100_hook("beforeStart", true, "var-init");
    var rsv_sug;
    var btn = cc11001100_hook("btn", G("su"), "var-init");
    addEvent(btn, "mousedown", addInputTime);
    addEvent(btn, "keydown", addInputTime);
    addEvent(G("kw"), "paste", function () {
      addTj({
        rsv_n: cc11001100_hook("rsv_n", 2, "object-key-init")
      });
      if (sugT == 0) {
        sugT = cc11001100_hook("sugT", new Date().getTime(), "assign");
      }
    });
    function addInputTime() {
      addTj({
        inputT: cc11001100_hook("inputT", sugT > 0 ? new Date().getTime() - sugT : 0, "object-key-init")
      });
    }
    function mousedown() {
      if (beforeStart) {
        Inpt.dm({
          type: cc11001100_hook("type", "start", "object-key-init")
        });
        beforeStart = cc11001100_hook("beforeStart", false, "assign");
      }
    }
    function keydown(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (sugT == 0) {
        sugT = cc11001100_hook("sugT", new Date().getTime(), "assign");
      }
      if (beforeStart) {
        Inpt.dm({
          type: cc11001100_hook("type", "start", "object-key-init")
        });
        beforeStart = cc11001100_hook("beforeStart", false, "assign");
      }
      e = cc11001100_hook("e", e || window.event, "assign");
      if (e.keyCode == 9 || e.keyCode == 27) {
        Inpt.dm({
          type: cc11001100_hook("type", "hide_div", "object-key-init")
        });
      }
      if (e.keyCode == 13 && window.opera) {
        stopDefault(e);
        Inpt.dm({
          type: cc11001100_hook("type", "key_enter", "object-key-init")
        });
      }
      if (e.keyCode == 86 && e.ctrlKey) {
        addTj({
          rsv_n: cc11001100_hook("rsv_n", 2, "object-key-init")
        });
      }
      if (div.style.display != "none") {
        if (e.keyCode == 38) {
          stopDefault(e);
          Inpt.dm({
            type: cc11001100_hook("type", "key_up", "object-key-init")
          });
        }
        if (e.keyCode == 40) {
          Inpt.dm({
            type: cc11001100_hook("type", "key_down", "object-key-init")
          });
        }
      } else {
        if (e.keyCode == 38 || e.keyCode == 40) {
          Inpt.dm({
            type: cc11001100_hook("type", "need_data", "object-key-init"),
            wd: cc11001100_hook("wd", ipt.value, "object-key-init")
          });
        }
      }
    }
    function circle() {
      var nowValue = cc11001100_hook("nowValue", ipt.value, "var-init");
      if (nowValue == oldValue && nowValue != "" && nowValue != keyValue && nowValue != mouseOverValue) {
        if (requestTimer == 0) {
          requestTimer = cc11001100_hook("requestTimer", setTimeout(function () {
            Inpt.dm({
              type: cc11001100_hook("type", "need_data", "object-key-init"),
              wd: cc11001100_hook("wd", nowValue, "object-key-init")
            });
          }, 100), "assign");
        }
      } else {
        clearTimeout(requestTimer);
        requestTimer = cc11001100_hook("requestTimer", 0, "assign");
        oldValue = cc11001100_hook("oldValue", nowValue, "assign");
        if (nowValue == "") {
          Inpt.dm({
            type: cc11001100_hook("type", "hide_div", "object-key-init")
          });
        }
        if (keyValue != ipt.value) {
          keyValue = cc11001100_hook("keyValue", "", "assign");
        }
      }
    }
    function circleStart() {
      if (!circleTimer) {
        circleTimer = cc11001100_hook("circleTimer", setInterval(circle, 30), "assign");
      }
    }
    function circleStop() {
      clearInterval(circleTimer);
      circleTimer = cc11001100_hook("circleTimer", 0, "assign");
    }
    function stopMSinput() {
      if (isClkSdiv) {
        window.event.cancelBubble = cc11001100_hook("window.event.cancelBubble", true, "assign");
        window.event.returnValue = cc11001100_hook("window.event.returnValue", false, "assign");
        isClkSdiv = cc11001100_hook("isClkSdiv", false, "assign");
      }
    }
    function setAutocomplete(c) {
      cc11001100_hook("c", c, "function-parameter");
      ipt.blur();
      ipt.setAttribute("autocomplete", c);
      ipt.focus();
    }
    function stopSubmit(e) {
      cc11001100_hook("e", e, "function-parameter");
      var e = cc11001100_hook("e", e || window.event, "var-init");
      if (e.keyCode == 13) {
        stopDefault(e);
      }
    }
    ipt.setAttribute("autocomplete", "off");
    var keywatched = cc11001100_hook("keywatched", false, "var-init");
    bdsug.sugkeywatcher.on = cc11001100_hook("bdsug.sugkeywatcher.on", function () {
      if (!keywatched) {
        if (isIE) {
          ipt.attachEvent("onkeydown", keydown);
        } else {
          ipt.addEventListener("keydown", keydown, false);
        }
        keywatched = cc11001100_hook("keywatched", true, "assign");
      }
    }, "assign");
    bdsug.sugkeywatcher.off = cc11001100_hook("bdsug.sugkeywatcher.off", function () {
      if (keywatched) {
        if (isIE) {
          ipt.detachEvent("onkeydown", keydown);
        } else {
          ipt.removeEventListener("keydown", keydown, false);
        }
        keywatched = cc11001100_hook("keywatched", false, "assign");
      }
    }, "assign");
    bdsug.sugkeywatcher.on();
    addEvent(ipt, "blur", circleStop);
    addEvent(ipt, "focus", circleStart);
    addEvent(ipt, "mousedown", mousedown);
    addEvent(ipt, "beforedeactivate", stopMSinput);
    if (window.opera) {
      addEvent(ipt, "keypress", stopSubmit);
    }
    return MessageDispatcher.ini({
      rm: function (evtObj) {
        switch (evtObj.type) {
          case "div_ready":
            div = cc11001100_hook("div", evtObj.sdiv, "assign");
            keyValue = cc11001100_hook("keyValue", ipt.value, "assign");
            circleStart();
            break;
          case "clk_submit":
            ipt.blur();
            ipt.value = cc11001100_hook("ipt.value", evtObj.wd, "assign");
            break;
          case "ent_submit":
            circleStop();
            ipt.blur();
            break;
          case "key_select":
            mouseOverValue = cc11001100_hook("mouseOverValue", evtObj.selected, "assign");
            break;
          case "close":
            circleStop();
            setAutocomplete("on");
            break;
          case "mousedown_tr":
            if (navigator.userAgent.toLowerCase().indexOf("webkit") != -1) {
              circleStop();
              setTimeout(circleStart, 2e3);
            }
            isClkSdiv = cc11001100_hook("isClkSdiv", true, "assign");
            break;
        }
      }
    });
  }(), "var-init");
  var Sdiv = cc11001100_hook("Sdiv", function () {
    var div;
    var ipt = cc11001100_hook("ipt", G("kw"), "var-init");
    var tb;
    var selected = cc11001100_hook("selected", -1, "var-init");
    var dataArray;
    var dataObj;
    var oq;
    var ie6frm;
    function ct() {
      var trs = cc11001100_hook("trs", tb.rows, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < trs.length; i++) {
        trs[i].className = cc11001100_hook("trs[i].className", "ml", "assign");
      }
    }
    function getSelected() {
      if (typeof tb != "undefined" && tb != null && div.style.display != "none") {
        var trs = cc11001100_hook("trs", tb.rows, "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < trs.length; i++) {
          if (trs[i].className == "mo") return [i, trs[i].cells[0].innerHTML];
        }
      }
      return [-1, ""];
    }
    function hide() {
      if (isIE && isIE <= 6) {
        ie6frm && (ie6frm.style.display = cc11001100_hook("ie6frm.style.display", "none", "assign"));
      }
      div && (div.style.display = cc11001100_hook("div.style.display", "none", "assign"));
    }
    function mouseover() {
      ct();
      this.className = cc11001100_hook("this.className", "mo", "assign");
    }
    function mousedown(e) {
      cc11001100_hook("e", e, "function-parameter");
      Sdiv.dm({
        type: cc11001100_hook("type", "mousedown_tr", "object-key-init")
      });
      if (!isIE) {
        e.stopPropagation();
        e.preventDefault();
        return false;
      }
    }
    function click(i) {
      cc11001100_hook("i", i, "function-parameter");
      var j = cc11001100_hook("j", i, "var-init");
      return function () {
        var word = cc11001100_hook("word", dataArray[j].value, "var-init");
        hide();
        var id = cc11001100_hook("id", 0, "var-init");
        if (typeof dataArray[j].ala != "undefined") {
          id = cc11001100_hook("id", dataObj[dataArray[j].ala].id, "assign");
        }
        Sdiv.dm({
          type: cc11001100_hook("type", "clk_submit", "object-key-init"),
          oq: cc11001100_hook("oq", G("kw").value, "object-key-init"),
          wd: cc11001100_hook("wd", word, "object-key-init"),
          rsp: cc11001100_hook("rsp", j, "object-key-init"),
          rsv_sug5: cc11001100_hook("rsv_sug5", id, "object-key-init")
        });
      };
    }
    function close(e) {
      cc11001100_hook("e", e, "function-parameter");
      e = cc11001100_hook("e", e || window.event, "assign");
      stopDefault(e);
      Sdiv.dm({
        type: cc11001100_hook("type", "close", "object-key-init")
      });
      hide();
      new Image().src = cc11001100_hook("new Image().src", $.url.escapeSSL("http://sclick.baidu.com/w.gif?fm=suggestion&title=%B9%D8%B1%D5&t=") + new Date().getTime(), "assign");
    }
    function resize() {
      var iptwh = cc11001100_hook("iptwh", [ipt.offsetWidth, ipt.offsetHeight], "var-init");
      div.style.width = cc11001100_hook("div.style.width", (isIE && isQuirk ? iptwh[0] : iptwh[0] - 2) + "px", "assign");
      div.style.top = cc11001100_hook("div.style.top", (isIE && isQuirk ? iptwh[1] : iptwh[1] - 1) + "px", "assign");
      div.style.display = cc11001100_hook("div.style.display", "block", "assign");
      if (isIE && isIE <= 6) {
        ie6frm.style.top = cc11001100_hook("ie6frm.style.top", (isIE && isQuirk ? iptwh[1] : iptwh[1] - 1) + "px", "assign");
        ie6frm.style.width = cc11001100_hook("ie6frm.style.width", (isIE && isQuirk ? iptwh[0] : iptwh[0] - 2) + "px", "assign");
      }
    }
    function setBold(q, str) {
      cc11001100_hook("q", q, "function-parameter");
      cc11001100_hook("str", str, "function-parameter");
      if (q && str) {
        var query = cc11001100_hook("query", trim(q), "var-init");
        if (str.indexOf(query) == 0) {
          str = cc11001100_hook("str", boldSugText(str, query), "assign");
        } else if (str.indexOf(trimAS(q)) == 0) {
          query = cc11001100_hook("query", trimAS(q), "assign");
          str = cc11001100_hook("str", boldSugText(str, query), "assign");
        } else {
          str = cc11001100_hook("str", str.replace(/&/g, "&amp;"), "assign");
          str = cc11001100_hook("str", str.replace(/</g, "&lt;"), "assign");
          str = cc11001100_hook("str", str.replace(/>/g, "&gt;"), "assign");
        }
      }
      return str;
    }
    function boldSugText(text, key) {
      cc11001100_hook("text", text, "function-parameter");
      cc11001100_hook("key", key, "function-parameter");
      text = cc11001100_hook("text", text.replace(/&/g, "&amp;"), "assign");
      text = cc11001100_hook("text", text.replace(/</g, "&lt;"), "assign");
      text = cc11001100_hook("text", text.replace(/>/g, "&gt;"), "assign");
      key = cc11001100_hook("key", key.replace(/&/g, "&amp;"), "assign");
      key = cc11001100_hook("key", key.replace(/</g, "&lt;"), "assign");
      key = cc11001100_hook("key", key.replace(/>/g, "&gt;"), "assign");
      var str_begin = cc11001100_hook("str_begin", "<span>" + key + "</span>", "var-init");
      var len = cc11001100_hook("len", key.length, "var-init");
      var str_end = cc11001100_hook("str_end", "<b>" + text.substring(len) + "</b>", "var-init");
      return str_begin + str_end;
    }
    function changeData(data) {
      cc11001100_hook("data", data, "function-parameter");
      var word = cc11001100_hook("word", G("kw").value, "var-init"),
        reg = cc11001100_hook("reg", /[^\x00-\xff]/g, "var-init"),
        dataArray = cc11001100_hook("dataArray", [], "var-init"),
        tempArray = cc11001100_hook("tempArray", [], "var-init");
      lenStorage = cc11001100_hook("lenStorage", 0, "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < data.length; i++) {
        var temp = cc11001100_hook("temp", {}, "var-init");
        temp.value = cc11001100_hook("temp.value", data[i], "assign");
        temp.from = cc11001100_hook("temp.from", 0, "assign");
        dataArray.push(temp);
      }
      if (!bds.se.sugStorage.isSupport() || !navigator.cookieEnabled || !!/\bsugstore=(\d)/.exec(document.cookie) && /\bsugstore=(\d)/.exec(document.cookie)[1] == 0) {
        return dataArray;
      } else {
        if (word.replace(reg, "mm").length <= 3) {
          return dataArray;
        } else {
          for (var i = cc11001100_hook("i", 0, "var-init"); i < data.length; i++) {
            var temp = cc11001100_hook("temp", {}, "var-init");
            temp.value = cc11001100_hook("temp.value", data[i], "assign");
            temp.from = cc11001100_hook("temp.from", 0, "assign");
            dataArray.push(temp);
          }
          var localData = cc11001100_hook("localData", bds.se.sugStorage.get(encodeURIComponent(word)), "var-init");
          localData.sort(function (a, b) {
            if (typeof a.date == "undefined" || typeof b.date == "undefined") {
              return true;
            } else {
              return a.date - b.date;
            }
          });
          for (i = cc11001100_hook("i", 0, "assign"); i < localData.length; i++) {
            for (var j = cc11001100_hook("j", i + 1, "var-init"); j < localData.length; j++) {
              if (localData[i].q == localData[j].q) {
                localData.splice(j, 1);
                j--;
              }
            }
          }
          for (i = cc11001100_hook("i", localData.length - 1, "assign"); i >= 0; i--) {
            var temp = cc11001100_hook("temp", {}, "var-init");
            temp.value = cc11001100_hook("temp.value", decodeURIComponent(localData[i].q), "assign");
            temp.from = cc11001100_hook("temp.from", 1, "assign");
            temp.p = cc11001100_hook("temp.p", localData[i].p, "assign");
            tempArray.push(temp);
            lenStorage++;
            if (i == localData.length - 2) break;
          }
          data = cc11001100_hook("data", tempArray.concat(dataArray), "assign");
          for (i = cc11001100_hook("i", 0, "assign"); i < data.length; i++) {
            for (j = cc11001100_hook("j", i + 1, "assign"); j < data.length; j++) {
              if (data[i].value == data[j].value) {
                data.splice(j, 1);
                j--;
              }
            }
          }
          var alaData = cc11001100_hook("alaData", [], "var-init");
          for (var i = cc11001100_hook("i", 0, "var-init"); i < dataObj.length; i++) {
            for (var j = cc11001100_hook("j", 0, "var-init"); j < data.length; j++) {
              if (dataObj[i].key == data[j].value) {
                if (data[j].from == 1) {
                  lenStorage--;
                }
                data.splice(j, 1);
              }
            }
            var temp = cc11001100_hook("temp", {}, "var-init");
            temp.value = cc11001100_hook("temp.value", dataObj[i].key, "assign");
            temp.from = cc11001100_hook("temp.from", 0, "assign");
            temp.ala = cc11001100_hook("temp.ala", i, "assign");
            alaData.unshift(temp);
          }
          data = cc11001100_hook("data", alaData.concat(data), "assign");
          while (data.length > 10) {
            data.pop();
          }
          return data;
        }
      }
    }
    function draw() {
      function setTitle(obj) {
        cc11001100_hook("obj", obj, "function-parameter");
        if (!obj || !obj.title) return;
        setTimeout(function () {
          obj.title = cc11001100_hook("obj.title", "", "assign");
        }, 2e3);
      }
      dataArray = cc11001100_hook("dataArray", changeData(dataArray), "assign");
      if (dataArray.length <= 0) {
        hide();
        return;
      }
      tb = cc11001100_hook("tb", C("TABLE"), "assign");
      tb.id = cc11001100_hook("tb.id", "st", "assign");
      tb.cellSpacing = cc11001100_hook("tb.cellSpacing", 0, "assign");
      tb.cellPadding = cc11001100_hook("tb.cellPadding", 2, "assign");
      var tbd = cc11001100_hook("tbd", C("tbody"), "var-init");
      tb.appendChild(tbd);
      for (var i = cc11001100_hook("i", 0, "var-init"), l = cc11001100_hook("l", dataArray.length, "var-init"); i < l; i++) {
        var tr = cc11001100_hook("tr", tbd.insertRow(-1), "var-init");
        addEvent(tr, "mouseover", mouseover);
        addEvent(tr, "mouseout", ct);
        addEvent(tr, "mousedown", mousedown);
        addEvent(tr, "click", click(i));
        var td = cc11001100_hook("td", tr.insertCell(-1), "var-init");
        var str = cc11001100_hook("str", setBold(oq, dataArray[i].value), "var-init");
        if (dataArray[i].from == 1) {
          str = cc11001100_hook("str", '<u class="sug_del" title="如您不需要此搜索历史提示，&#13;可在右上角搜索设置中关闭">删除</u>' + str, "assign");
          td.className = cc11001100_hook("td.className", "sug_storage", "assign");
        }
        if (typeof dataArray[i].ala != "undefined") {
          td.innerHTML = cc11001100_hook("td.innerHTML", strAla(str, dataArray[i].ala), "assign");
          td.className = cc11001100_hook("td.className", "sug_ala", "assign");
        } else {
          td.innerHTML = cc11001100_hook("td.innerHTML", str, "assign");
        }
      }
      div.innerHTML = cc11001100_hook("div.innerHTML", "", "assign");
      div.appendChild(tb);
      resize();
      if (isIE && isIE <= 6) {
        ie6frm.style.display = cc11001100_hook("ie6frm.style.display", "block", "assign");
        ie6frm.style.left = cc11001100_hook("ie6frm.style.left", 0 + "px", "assign");
        ie6frm.style.top = cc11001100_hook("ie6frm.style.top", ipt.offsetHeight + "px", "assign");
        ie6frm.style.width = cc11001100_hook("ie6frm.style.width", ipt.offsetWidth + "px", "assign");
        ie6frm.style.height = cc11001100_hook("ie6frm.style.height", div.offsetHeight - 1 + "px", "assign");
      }
      var u = cc11001100_hook("u", div.getElementsByTagName("u"), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < u.length; i++) {
        u[i].onclick = cc11001100_hook("u[i].onclick", function (e) {
          var selected = cc11001100_hook("selected", getSelected()[0], "var-init");
          var e = cc11001100_hook("e", e || window.event, "var-init");
          var target = cc11001100_hook("target", e.target || e.srcElement, "var-init");
          target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode);
          if (isIE && isIE <= 6) {
            ie6frm.style.height = cc11001100_hook("ie6frm.style.height", div.offsetHeight - 1 + "px", "assign");
          }
          var img = cc11001100_hook("img", window["BD_PS_C" + new Date().getTime()] = cc11001100_hook("window[\"BD_PS_C\" + new Date().getTime()]", new Image(), "assign"), "var-init");
          img.src = cc11001100_hook("img.src", $.url.escapeSSL("http://sclick.baidu.com/w.gif?q=") + encodeURIComponent(dataArray[selected].value) + "&fm=beha&rsv_sug=del&rsv_sid=11&t=" + new Date().getTime() + "&path=http://www.baidu.com", "assign");
          bds.se.sugStorage.remove({
            q: cc11001100_hook("q", encodeURIComponent(dataArray[selected].value), "object-key-init"),
            p: cc11001100_hook("p", dataArray[selected].p, "object-key-init")
          });
          dataArray.splice(selected, 1);
          Sdiv.dm({
            type: cc11001100_hook("type", "update_data", "object-key-init"),
            word: cc11001100_hook("word", G("kw").value, "object-key-init"),
            data: cc11001100_hook("data", dataArray, "object-key-init")
          });
          if (lenStorage > 0) lenStorage--;
          if (lenStorage <= 0 && dataArray.length == 0) {
            hide();
            div.innerHTML = cc11001100_hook("div.innerHTML", "", "assign");
          }
          if (window.event) {
            e.cancelBubble = cc11001100_hook("e.cancelBubble", true, "assign");
          } else {
            e.stopPropagation();
          }
        }, "assign");
      }
      addTj({
        rsv_sug: cc11001100_hook("rsv_sug", lenStorage, "object-key-init")
      });
    }
    function strAla(str, n) {
      cc11001100_hook("str", str, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var html = cc11001100_hook("html", [], "var-init");
      switch (dataObj[n].type) {
        case "1":
          html.push("<h3>" + dataObj[n].key + "</h3>");
          html.push("<p>" + dataObj[n].word);
          if (dataObj[n].word_add) {
            html.push(" <span>（" + dataObj[n].word_add + "）</span>");
          }
          html.push("</p>");
          break;
        case "2":
          html.push("<h3>" + dataObj[n].key + " - 百度安全认证</h3>");
          html.push("<p>" + dataObj[n].word);
          if (dataObj[n].word_add) {
            html.push(" <span>（" + dataObj[n].word_add + "）</span>");
          }
          html.push("</p>");
          break;
        default:
          html.push(str);
      }
      return html.join("");
    }
    function enter() {
      selected = cc11001100_hook("selected", getSelected()[0], "assign");
      if (selected == -1) {
        Sdiv.dm({
          type: cc11001100_hook("type", "submit", "object-key-init")
        });
      } else {
        Sdiv.dm({
          type: cc11001100_hook("type", "ent_submit", "object-key-init"),
          oq: cc11001100_hook("oq", oq, "object-key-init"),
          wd: cc11001100_hook("wd", getSelected()[1], "object-key-init"),
          rsp: cc11001100_hook("rsp", selected, "object-key-init")
        });
      }
    }
    function keyup() {
      selected = cc11001100_hook("selected", getSelected()[0], "assign");
      ct();
      if (selected == 0) {
        Sdiv.dm({
          type: cc11001100_hook("type", "key_select", "object-key-init"),
          selected: cc11001100_hook("selected", "", "object-key-init")
        });
        G("kw").value = cc11001100_hook("G(\"kw\").value", oq, "assign");
        selected--;
        rmTj({
          oq: cc11001100_hook("oq", oq, "object-key-init"),
          sug: cc11001100_hook("sug", dataArray[selected], "object-key-init"),
          rsv_n: cc11001100_hook("rsv_n", 1, "object-key-init"),
          rsp: cc11001100_hook("rsp", selected, "object-key-init"),
          f: cc11001100_hook("f", 3, "object-key-init"),
          rsv_sug: cc11001100_hook("rsv_sug", rsv_sug, "object-key-init"),
          rsv_sug5: cc11001100_hook("rsv_sug5", 0, "object-key-init")
        });
      } else {
        if (selected == -1) selected = cc11001100_hook("selected", dataArray.length, "assign");
        selected--;
        var tr = cc11001100_hook("tr", tb.rows[selected], "var-init");
        tr.className = cc11001100_hook("tr.className", "mo", "assign");
        Sdiv.dm({
          type: cc11001100_hook("type", "key_select", "object-key-init"),
          selected: cc11001100_hook("selected", dataArray[selected].value, "object-key-init")
        });
        G("kw").value = cc11001100_hook("G(\"kw\").value", dataArray[selected].value, "assign");
        var id = cc11001100_hook("id", 0, "var-init");
        if (typeof dataArray[selected].ala != "undefined") {
          id = cc11001100_hook("id", dataObj[dataArray[selected].ala].id, "assign");
        }
        addTj({
          oq: cc11001100_hook("oq", oq, "object-key-init"),
          sug: cc11001100_hook("sug", dataArray[selected].value, "object-key-init"),
          rsv_n: cc11001100_hook("rsv_n", 1, "object-key-init"),
          rsp: cc11001100_hook("rsp", selected, "object-key-init"),
          f: cc11001100_hook("f", 3, "object-key-init"),
          rsv_sug: cc11001100_hook("rsv_sug", rsv_sug, "object-key-init")
        });
      }
    }
    function keydown() {
      selected = cc11001100_hook("selected", getSelected()[0], "assign");
      ct();
      if (selected == dataArray.length - 1) {
        Sdiv.dm({
          type: cc11001100_hook("type", "key_select", "object-key-init"),
          selected: cc11001100_hook("selected", "", "object-key-init")
        });
        G("kw").value = cc11001100_hook("G(\"kw\").value", oq, "assign");
        selected = cc11001100_hook("selected", -1, "assign");
        rmTj({
          oq: cc11001100_hook("oq", oq, "object-key-init"),
          sug: cc11001100_hook("sug", dataArray[selected], "object-key-init"),
          rsv_n: cc11001100_hook("rsv_n", 1, "object-key-init"),
          rsp: cc11001100_hook("rsp", selected, "object-key-init"),
          f: cc11001100_hook("f", 3, "object-key-init"),
          rsv_sug: cc11001100_hook("rsv_sug", rsv_sug, "object-key-init"),
          rsv_sug5: cc11001100_hook("rsv_sug5", 0, "object-key-init")
        });
      } else {
        selected++;
        var tr = cc11001100_hook("tr", tb.rows[selected], "var-init");
        tr.className = cc11001100_hook("tr.className", "mo", "assign");
        Sdiv.dm({
          type: cc11001100_hook("type", "key_select", "object-key-init"),
          selected: cc11001100_hook("selected", dataArray[selected].value, "object-key-init")
        });
        G("kw").value = cc11001100_hook("G(\"kw\").value", dataArray[selected].value, "assign");
        var id = cc11001100_hook("id", 0, "var-init");
        if (typeof dataArray[selected].ala != "undefined") {
          id = cc11001100_hook("id", dataObj[dataArray[selected].ala].id, "assign");
        }
        addTj({
          oq: cc11001100_hook("oq", oq, "object-key-init"),
          sug: cc11001100_hook("sug", dataArray[selected].value, "object-key-init"),
          rsv_n: cc11001100_hook("rsv_n", 1, "object-key-init"),
          rsp: cc11001100_hook("rsp", selected, "object-key-init"),
          f: cc11001100_hook("f", 3, "object-key-init"),
          rsv_sug: cc11001100_hook("rsv_sug", rsv_sug, "object-key-init"),
          rsv_sug5: cc11001100_hook("rsv_sug5", id, "object-key-init")
        });
      }
    }
    return MessageDispatcher.ini({
      rm: function (evtObj) {
        switch (evtObj.type) {
          case "div_ready":
            div = cc11001100_hook("div", evtObj.sdiv, "assign");
            ie6frm = cc11001100_hook("ie6frm", evtObj.frm, "assign");
            break;
          case "give_data":
            oq = cc11001100_hook("oq", evtObj.data.q, "assign");
            dataArray = cc11001100_hook("dataArray", evtObj.data.s, "assign");
            var dataObjTemp = cc11001100_hook("dataObjTemp", evtObj.data.z || [], "var-init");
            dataObj = cc11001100_hook("dataObj", [], "assign");
            for (var i = cc11001100_hook("i", 0, "var-init"); i < dataObjTemp.length; i++) {
              var d = cc11001100_hook("d", dataObjTemp[i], "var-init");
              if (d["type"] == 1 || d["type"] == 2) {
                dataObj.push(dataObjTemp[i]);
              }
            }
            rsv_sug = cc11001100_hook("rsv_sug", evtObj.data.t, "assign");
            if (div) {
              draw();
            }
            ;
            break;
          case "key_enter":
            enter();
            break;
          case "key_up":
            keyup();
            break;
          case "key_down":
            keydown();
            break;
          case "hide_div":
            hide();
            break;
          case "mousedown_other":
            hide();
            break;
          case "window_blur":
            hide();
            break;
          case "need_resize":
            resize();
            break;
        }
      }
    });
  }(), "var-init");
  var Form0 = cc11001100_hook("Form0", function () {
    var fm = cc11001100_hook("fm", document.forms[0], "var-init");
    function resetform() {
      if (G("bdsug_ipt_sug")) {
        if (G("bdsug_ipt_sug").value == trim(G("kw").value)) {
          rmTj({
            rsv_n: cc11001100_hook("rsv_n", 1, "object-key-init"),
            sug: cc11001100_hook("sug", 1, "object-key-init")
          });
        } else {
          rmTj({
            f: cc11001100_hook("f", 1, "object-key-init")
          });
        }
      }
    }
    addEvent(fm, "submit", resetform);
    function submit() {
      resetform();
      addTj({
        inputT: cc11001100_hook("inputT", sugT > 0 ? new Date().getTime() - sugT : 0, "object-key-init")
      });
      fm.onsubmit();
      fm.submit();
    }
    function submitTj(o) {
      cc11001100_hook("o", o, "function-parameter");
      addTj(o);
      addTj({
        inputT: cc11001100_hook("inputT", sugT > 0 ? new Date().getTime() - sugT : 0, "object-key-init")
      });
      rmTj({
        sug: cc11001100_hook("sug", 1, "object-key-init"),
        rsv_n: cc11001100_hook("rsv_n", 1, "object-key-init")
      });
      fm.onsubmit();
      fm.submit();
    }
    return MessageDispatcher.ini({
      rm: function (evtObj) {
        switch (evtObj.type) {
          case "clk_submit":
            submitTj({
              oq: cc11001100_hook("oq", evtObj.oq, "object-key-init"),
              rsp: cc11001100_hook("rsp", evtObj.rsp, "object-key-init"),
              f: cc11001100_hook("f", 3, "object-key-init"),
              rsv_sug: cc11001100_hook("rsv_sug", lenStorage, "object-key-init"),
              rsv_sug2: cc11001100_hook("rsv_sug2", 1, "object-key-init"),
              rsv_sug5: cc11001100_hook("rsv_sug5", evtObj.rsv_sug5, "object-key-init")
            });
            break;
          case "ent_submit":
            submitTj({
              oq: cc11001100_hook("oq", evtObj.oq, "object-key-init"),
              rsp: cc11001100_hook("rsp", evtObj.rsp, "object-key-init"),
              f: cc11001100_hook("f", 3, "object-key-init"),
              rsv_sug: cc11001100_hook("rsv_sug", lenStorage, "object-key-init"),
              rsv_sug2: cc11001100_hook("rsv_sug2", 0, "object-key-init")
            });
            break;
          case "submit":
            submit();
            break;
        }
      }
    });
  }(), "var-init");
  var Data = cc11001100_hook("Data", function () {
    var dataObj = cc11001100_hook("dataObj", {}, "var-init");
    function processData(word) {
      cc11001100_hook("word", word, "function-parameter");
      if (typeof dataObj[word] == "undefined") {
        Data.dm({
          type: cc11001100_hook("type", "request_data", "object-key-init"),
          wd: cc11001100_hook("wd", word, "object-key-init")
        });
      } else {
        Data.dm({
          type: cc11001100_hook("type", "give_data", "object-key-init"),
          data: cc11001100_hook("data", dataObj[word], "object-key-init")
        });
      }
    }
    function addData(d) {
      cc11001100_hook("d", d, "function-parameter");
      dataObj[d.q] = cc11001100_hook("dataObj[d.q]", d, "assign");
      Data.dm({
        type: cc11001100_hook("type", "give_data", "object-key-init"),
        data: cc11001100_hook("data", dataObj[d.q], "object-key-init")
      });
    }
    function updateData(word, data) {
      cc11001100_hook("word", word, "function-parameter");
      cc11001100_hook("data", data, "function-parameter");
      if (typeof dataObj[word] != "undefined") {
        if (data.length > 0) {
          var temp = cc11001100_hook("temp", [], "var-init");
          for (var i = cc11001100_hook("i", 0, "var-init"); i < data.length; i++) {
            temp.push(data[i].value);
          }
          dataObj[word].s = cc11001100_hook("dataObj[word].s", temp, "assign");
          Data.dm({
            type: cc11001100_hook("type", "give_data", "object-key-init"),
            data: cc11001100_hook("data", dataObj[word], "object-key-init")
          });
        }
      }
    }
    return MessageDispatcher.ini({
      rm: function (eventObj) {
        switch (eventObj.type) {
          case "response_data":
            addData(eventObj.data);
            break;
          case "need_data":
            processData(eventObj.wd);
            break;
          case "update_data":
            updateData(eventObj.word, eventObj.data);
            break;
        }
      }
    });
  }(), "var-init");
  var Request = cc11001100_hook("Request", function () {
    var dataElm;
    var cookieSwitch;
    function getDataScript(wd) {
      cc11001100_hook("wd", wd, "function-parameter");
      var requestUrl = cc11001100_hook("requestUrl", $.url.escapeSSL("http://suggestion.baidu.com/su"), "var-init");
      Request.dm({
        type: cc11001100_hook("type", "need_cookie", "object-key-init")
      });
      if (dataElm) document.body.removeChild(dataElm);
      dataElm = cc11001100_hook("dataElm", C("SCRIPT"), "assign");
      dataElm.src = cc11001100_hook("dataElm.src", requestUrl + "?wd=" + encodeURIComponent(wd) + "&p=" + cookieSwitch + "&cb=window.bdsug.sug&from=superpage" + "&t=" + new Date().getTime(), "assign");
      dataElm.charset = cc11001100_hook("dataElm.charset", "gb2312", "assign");
      document.body.appendChild(dataElm);
      addTj({
        rsv_sug3: cc11001100_hook("rsv_sug3", ++rsv_sug3, "object-key-init")
      });
      rsv_temp_time = cc11001100_hook("rsv_temp_time", new Date().getTime(), "assign");
      rsv_temp_flag = cc11001100_hook("rsv_temp_flag", false, "assign");
      rsv_timer = cc11001100_hook("rsv_timer", setTimeout(function () {
        addTj({
          rsv_sug4: cc11001100_hook("rsv_sug4", rsv_sug4 += cc11001100_hook("rsv_sug4", 5e3, "assign"), "object-key-init")
        });
        rsv_temp_flag = cc11001100_hook("rsv_temp_flag", true, "assign");
      }, 5e3), "assign");
      if (!window._LogSearchBoxChanged) {
        F.use("ps/sug", function (s) {
          s.searchLog();
        });
        window._LogSearchBoxChanged = cc11001100_hook("window._LogSearchBoxChanged", true, "assign");
      }
    }
    return MessageDispatcher.ini({
      rm: function (evtObj) {
        switch (evtObj.type) {
          case "request_data":
            getDataScript(evtObj.wd);
            break;
          case "give_cookie":
            var _sug = cc11001100_hook("_sug", evtObj.sug, "var-init");
            if (_sug > 0) {
              _sug = cc11001100_hook("_sug", 3, "assign");
            }
            ;
            cookieSwitch = cc11001100_hook("cookieSwitch", _sug, "assign");
            break;
        }
      }
    });
  }(), "var-init");
  bdsug.sug = cc11001100_hook("bdsug.sug", function (dataObj) {
    bdsug.dm({
      type: cc11001100_hook("type", "response_data", "object-key-init"),
      data: cc11001100_hook("data", dataObj, "object-key-init")
    });
    if (!rsv_temp_flag) {
      var ipt = cc11001100_hook("ipt", G("kw"), "var-init");
      if (ipt.value.toLowerCase() == dataObj.q) {
        addTj({
          rsv_sug1: cc11001100_hook("rsv_sug1", ++rsv_sug1, "object-key-init")
        });
      }
      clearTimeout(rsv_timer);
      addTj({
        rsv_sug4: cc11001100_hook("rsv_sug4", rsv_sug4 += cc11001100_hook("rsv_sug4", new Date().getTime() - rsv_temp_time, "assign"), "object-key-init")
      });
    }
  }, "assign");
  bdsug.initSug = cc11001100_hook("bdsug.initSug", function () {
    bdsug.dm({
      type: cc11001100_hook("type", "init", "object-key-init")
    });
  }, "assign");
  MessageDispatcher.ini(bdsug);
  var Cookie = cc11001100_hook("Cookie", function () {
    function close() {
      if (navigator.cookieEnabled) {
        document.cookie = cc11001100_hook("document.cookie", "su=0; domain=www.baidu.com", "assign");
      }
    }
    function getSug() {
      var p = cc11001100_hook("p", navigator.cookieEnabled && /sug=(\d)/.test(document.cookie) ? RegExp.$1 : 3, "var-init");
      Cookie.dm({
        type: cc11001100_hook("type", "give_cookie", "object-key-init"),
        sug: cc11001100_hook("sug", p, "object-key-init")
      });
    }
    return MessageDispatcher.ini({
      rm: function (evtObj) {
        switch (evtObj.type) {
          case "close":
            close();
            break;
          case "need_cookie":
            getSug();
            break;
        }
      }
    });
  }(), "var-init");
  var GlobalCtrl = cc11001100_hook("GlobalCtrl", function () {
    var ipt = cc11001100_hook("ipt", G("kw"), "var-init");
    var div;
    var fm = cc11001100_hook("fm", document.forms[0], "var-init");
    var ie6iframe;
    function listenZoom() {
      if (div.offsetWidth != 0 && ipt.offsetWidth != div.offsetWidth) {
        GlobalCtrl.dm({
          type: cc11001100_hook("type", "need_resize", "object-key-init")
        });
      }
    }
    function createDiv() {
      div = cc11001100_hook("div", C("DIV"), "assign");
      div.id = cc11001100_hook("div.id", "sd_" + new Date().getTime(), "assign");
      div.className = cc11001100_hook("div.className", "s-ps-sug", "assign");
      div.style.display = cc11001100_hook("div.style.display", "none", "assign");
      fm.appendChild(div);
      if (isIE && isIE <= 6) {
        ie6iframe = cc11001100_hook("ie6iframe", C("IFRAME"), "assign");
        ie6iframe.style.display = cc11001100_hook("ie6iframe.style.display", "none", "assign");
        ie6iframe.style.position = cc11001100_hook("ie6iframe.style.position", "absolute", "assign");
        div.parentNode.insertBefore(ie6iframe, div);
      }
    }
    function docMouseDown(e) {
      cc11001100_hook("e", e, "function-parameter");
      e = cc11001100_hook("e", e || window.event, "assign");
      var elm = cc11001100_hook("elm", e.target || e.srcElement, "var-init");
      if (elm == ipt) return;
      while (elm = cc11001100_hook("elm", elm.parentNode, "assign")) {
        if (elm == div) {
          return;
        }
      }
      GlobalCtrl.dm({
        type: cc11001100_hook("type", "mousedown_other", "object-key-init")
      });
    }
    function windowBlur() {
      GlobalCtrl.dm({
        type: cc11001100_hook("type", "window_blur", "object-key-init")
      });
    }
    function initi() {
      var dI = cc11001100_hook("dI", "#" + div.id, "var-init");
      var cssBuf = cc11001100_hook("cssBuf", [], "var-init");
      GlobalCtrl.dm({
        type: cc11001100_hook("type", "div_ready", "object-key-init"),
        sdiv: cc11001100_hook("sdiv", div, "object-key-init"),
        frm: cc11001100_hook("frm", ie6iframe, "object-key-init")
      });
      setInterval(listenZoom, 100);
      addEvent(document, "mousedown", docMouseDown);
      addEvent(window, "blur", windowBlur);
      cssBuf.push(dI + "{border:1px solid #817F82;position:absolute;top:32px;left:0}");
      cssBuf.push(dI + " table{width:100%;background:#fff;cursor:default}");
      cssBuf.push(dI + " td{color:#000;font:14px arial;height:25px;line-height:25px;padding:0 8px}");
      cssBuf.push(dI + " td b{color:#000}");
      cssBuf.push(dI + " .mo{background:#ebebeb}");
      cssBuf.push(dI + " .ml{background:#fff}");
      cssBuf.push(dI + " td.sug_storage{color:#7A77C8}");
      cssBuf.push(dI + " td.sug_storage b{color:#7A77C8}");
      cssBuf.push(dI + " .sug_del{font-size:12px;color:#666;text-decoration:underline;float:right;cursor:pointer;display:none}");
      cssBuf.push(dI + " .sug_del{font-size:12px;color:#666;text-decoration:underline;float:right;cursor:pointer;display:none}");
      cssBuf.push(dI + " .mo .sug_del{display:block}");
      cssBuf.push(dI + " .sug_ala{border-bottom:1px solid #e6e6e6}");
      cssBuf.push(dI + " td h3{line-height:14px;margin:6px 0 4px 0;font-size:12px;font-weight:normal;color:#7B7B7B;padding-left:20px;background:url(img/sug_bd.png) no-repeat left center}");
      cssBuf.push(dI + " td p{font-size:14px;font-weight:bold;padding-left:20px}");
      cssBuf.push(dI + " td p span{font-size:12px;font-weight:normal;color:#7B7B7B}");
      addStyle(cssBuf.join(""));
    }
    bdsug.sug.initial = cc11001100_hook("bdsug.sug.initial", initi, "assign");
    return MessageDispatcher.ini({
      rm: function (evtObj) {
        switch (evtObj.type) {
          case "start":
            initi();
            break;
          case "init":
            createDiv();
            break;
        }
      }
    });
  }(), "var-init");
  Inpt.on("need_data", Data);
  Inpt.on("close_div", Sdiv);
  Inpt.on("key_enter", Sdiv);
  Inpt.on("key_up", Sdiv);
  Inpt.on("key_down", Sdiv);
  Inpt.on("hide_div", Sdiv);
  Inpt.on("start", GlobalCtrl);
  Data.on("request_data", Request);
  Data.on("give_data", Sdiv);
  bdsug.on("response_data", Data);
  bdsug.on("init", GlobalCtrl);
  Sdiv.on("update_data", Data);
  Sdiv.on("clk_submit", Inpt, Form0);
  Sdiv.on("ent_submit", Inpt, Form0);
  Sdiv.on("submit", Form0);
  Sdiv.on("key_select", Inpt);
  Sdiv.on("close", Inpt, Cookie);
  Sdiv.on("mousedown_tr", Inpt);
  GlobalCtrl.on("mousedown_other", Sdiv);
  GlobalCtrl.on("need_resize", Sdiv);
  GlobalCtrl.on("div_ready", Inpt, Sdiv);
  GlobalCtrl.on("window_blur", Sdiv);
  Request.on("need_cookie", Cookie);
  Cookie.on("give_cookie", Request);
}, "assign");
F.module("ps/sug", function (require, exports, ctx) {
  exports.init = cc11001100_hook("exports.init", function () {
    bds.se.sugsync();
    window.bdsug.initSug();
  }, "assign");
  exports.pssubmit = cc11001100_hook("exports.pssubmit", function () {
    var S = cc11001100_hook("S", ctx.base, "var-init");
    var satag = cc11001100_hook("satag", s_session.userTips.isNewTabSearch || "0", "var-init");
    if (satag === "0") {
      var _player = cc11001100_hook("_player", window.baidu && baidu.packPlayer, "var-init");
      if (_player && s_session.yuce && s_session.yuce != "1") {
        if (_player.getState() == "play") {
          satag = cc11001100_hook("satag", true, "assign");
          $("#form")[0].target = cc11001100_hook("$(\"#form\")[0].target", "_blank", "assign");
        } else {
          satag = cc11001100_hook("satag", false, "assign");
          $("#form")[0].target = cc11001100_hook("$(\"#form\")[0].target", "_self", "assign");
        }
      }
    }
    var personalData = cc11001100_hook("personalData", bds.comm.personalData, "var-init");
    var isSkin = cc11001100_hook("isSkin", !!(personalData && personalData.skinUrl), "var-init");
    if (satag !== "0" && $("#kw")[0] && (s_session.searchLogSend === 0 || $("#form").attr("target") === "_blank")) {
      setTimeout(function () {
        if (s_session.sid.indexOf("12783") > -1) {
          $("#kw").attr("data-bfocus", 1).val("");
        } else {
          $("#kw").triggerHandler("focus");
          $("#kw").select();
        }
      }, 1);
      if (s_session.sid.indexOf("12783") > -1) {} else if ($.browser.firefox) {
        $("#kw").select();
      }
      setTimeout(function () {
        ctx.use("page/info", function (page) {
          var info = cc11001100_hook("info", page.getInfo(), "var-init"),
            mode = cc11001100_hook("mode", "focus", "var-init");
          if (info && info.isFocus) {
            mode = cc11001100_hook("mode", "blur", "assign");
          }
          s_session.searchLogSend = cc11001100_hook("s_session.searchLogSend", 1, "assign");
          ctx.fire("searchBtnClick", {
            opType: cc11001100_hook("opType", "click", "object-key-init"),
            openMode: cc11001100_hook("openMode", "new" + mode, "object-key-init"),
            wd: cc11001100_hook("wd", encodeURIComponent($("#kw").val()), "object-key-init"),
            isSkin: cc11001100_hook("isSkin", isSkin, "object-key-init")
          });
        });
      }, 100);
    } else if (s_session.searchLogSend == 0 || $("#form").attr("target") == "_blank") {
      s_session.searchLogSend = cc11001100_hook("s_session.searchLogSend", 1, "assign");
      ctx.fire("searchBtnClick", {
        opType: cc11001100_hook("opType", "click", "object-key-init"),
        openMode: cc11001100_hook("openMode", "current", "object-key-init"),
        wd: cc11001100_hook("wd", encodeURIComponent($("#kw").val()), "object-key-init"),
        isSkin: cc11001100_hook("isSkin", isSkin, "object-key-init")
      });
    }
    $("#bd_fm_search_tip").hide();
  }, "assign");
  exports.searchLog = cc11001100_hook("exports.searchLog", function () {
    ctx.fire("queryChange", {
      opType: cc11001100_hook("opType", "querychange", "object-key-init"),
      wd: cc11001100_hook("wd", encodeURIComponent($("#kw").val()), "object-key-init")
    });
  }, "assign");
});
$(window).on("load", function () {
  if ($.browser.chrome >= 39) {
    return;
  }
  var divDom = cc11001100_hook("divDom", '<div id="_FP_userDataDiv" style="behavior:url(#default#userdata);width:0px;height:0px;position:absolute;top:-10000px;left:-10000px"></div><div id="_FP_comDiv" style="behavior:url(#default#clientCaps);width:0px;height:0px;position:absolute;top:-10000px;left:-10000px"></div>', "var-init");
  $("body").append(divDom);
  var libjsUrl = cc11001100_hook("libjsUrl", "//www.baidu.com/cache/fpid/lib_1_0.js", "var-init");
  var ieLibUrl = cc11001100_hook("ieLibUrl", "//www.baidu.com/cache/fpid/ielib_1_1.js", "var-init");
  var otherLibUrl = cc11001100_hook("otherLibUrl", "//www.baidu.com/cache/fpid/chromelib_1_1.js", "var-init");
  var curTitle = cc11001100_hook("curTitle", document.title, "var-init");
  var config = cc11001100_hook("config", {
    flashDomId: cc11001100_hook("flashDomId", "_FP_userDataDiv", "object-key-init"),
    flashUrl: cc11001100_hook("flashUrl", "", "object-key-init"),
    comDomId: cc11001100_hook("comDomId", "_FP_comDiv", "object-key-init"),
    IEStoreDomId: cc11001100_hook("IEStoreDomId", "_FP_userDataDiv", "object-key-init")
  }, "var-init");
  var ua = cc11001100_hook("ua", navigator.userAgent.toLowerCase(), "var-init");
  var isIE = cc11001100_hook("isIE", false, "var-init");
  if (ua.indexOf("msie") >= 0 || new RegExp("trident(.*)rv.(\\d+)\\.(\\d+)").test(ua)) {
    isIE = cc11001100_hook("isIE", true, "assign");
  }
  var callback = function (arr) {
    if (isIE) {
      window.setTimeout(function () {
        document.title = cc11001100_hook("document.title", curTitle, "assign");
      }, 0);
    }
    window._FPID_CACHE = cc11001100_hook("window._FPID_CACHE", arr, "assign");
    $("#_FP_userDataDiv").remove();
    $("#_FP_comDiv").remove();
    var qid = cc11001100_hook("qid", s_session.seqId, "var-init");
    var img_key = cc11001100_hook("img_key", "_WWW_BR_API_" + new Date().getTime(), "var-init");
    var send_img = cc11001100_hook("send_img", window[img_key] = cc11001100_hook("window[img_key]", new Image(), "assign"), "var-init");
    send_img.onload = cc11001100_hook("send_img.onload", function () {
      window[img_key] = cc11001100_hook("window[img_key]", null, "assign");
    }, "assign");
    var baiduId = cc11001100_hook("baiduId", $.cookie.get("BAIDUID"), "var-init");
    var baseUrl = cc11001100_hook("baseUrl", $.url.escapeSSL("http://eclick.baidu.com/ps_fp.htm?"), "var-init");
    var sendUrl = cc11001100_hook("sendUrl", baseUrl + "pid=superman&fp=" + arr.data.fp + "&im=" + arr.data.im + "&wf=" + arr.data.wf + "&br=" + arr.data.br + "&qid=" + qid + "&bi=" + baiduId, "var-init");
    send_img.src = cc11001100_hook("send_img.src", sendUrl, "assign");
  };
  if (isIE) {
    $.getScript(libjsUrl, function () {
      fpLib.getFp(callback, config);
    });
  } else {
    $.getScript(otherLibUrl, function () {
      fpLib.getFp(callback, config);
    });
  }
});
$(document).ready(function () {
  var isNewTopMenu = cc11001100_hook("isNewTopMenu", bds.comm && bds.comm.newTopMenu === 1, "var-init");
  window._load_status = cc11001100_hook("window._load_status", "dom_ready", "assign");
  (function () {
    if (Math.random() * 100 < 1 && $.browser.edge) {
      window.testedge = cc11001100_hook("window.testedge", function (fn) {
        var health;
        if (/testedge=1/i.test(fn.toString())) {
          try {
            window.localStorage.setItem("_super_edgehealth", "good");
          } catch (e) {}
          health = cc11001100_hook("health", "1", "assign");
        } else {
          health = cc11001100_hook("health", "0", "assign");
        }
        var imgLog = function (src) {
          var n = cc11001100_hook("n", "imglog__" + new Date().getTime(), "var-init");
          var c = cc11001100_hook("c", window[n] = cc11001100_hook("window[n]", new Image(), "assign"), "var-init");
          c.onload = cc11001100_hook("c.onload", c.onerror = cc11001100_hook("c.onerror", function () {
            window[n] = cc11001100_hook("window[n]", null, "assign");
          }, "assign"), "assign");
          c.src = cc11001100_hook("c.src", src, "assign");
          c = cc11001100_hook("c", null, "assign");
        };
        var src = cc11001100_hook("src", "http://dj0.baidu.com/v.gif?pid=315&type=2011&portrait=" + s_session.logPortrait + "&logactid=9000500000&health=" + health + "&t=" + +new Date(), "var-init");
        imgLog($.url.escapeSSL(src));
      }, "assign");
      $.loadJs($.url.escapeSSL("http://ss.bdimg.com/cdn/testedge.js"));
    }
  })();
  if ($.browser.chrome && $.browser.chrome === 37) {
    if (window.navigator.appVersion.indexOf("Windows NT 6.1") > -1) {
      $("#kw").css({
        "font-family": cc11001100_hook("font-family", "Microsoft Yahei,STHeiti", "object-key-init")
      });
    }
  }
  F.use("superman:ps/sindex", function (s) {
    s.init();
    var opt = cc11001100_hook("opt", {}, "var-init");
    opt.baseParams = cc11001100_hook("opt.baseParams", {
      ct: cc11001100_hook("ct", 2, "object-key-init"),
      logFrom: cc11001100_hook("logFrom", "feed_index", "object-key-init"),
      logInfo: cc11001100_hook("logInfo", "item", "object-key-init"),
      qid: cc11001100_hook("qid", s_session.seqId, "object-key-init"),
      sid: cc11001100_hook("sid", s_session.sid, "object-key-init"),
      ssid: cc11001100_hook("ssid", s_session.portrait, "object-key-init"),
      logid: cc11001100_hook("logid", s_session.logId || "0", "object-key-init"),
      _r: cc11001100_hook("_r", Math.random(), "object-key-init")
    }, "assign");
    window.Thunder.get(opt);
  });
  if (typeof window._sp_async === "undefined") {
    F.use("superman:ps/sug", function (s) {
      s.init();
    });
  }
  F.use("superman:ps/log", function (psLog) {
    if (isNewTopMenu) {
      psLog.bindBox("s-top-left");
      psLog.bindBox("s-user-name-menu");
      psLog.bindBox("topmenu-loc");
    } else {
      psLog.bindBox("nv");
      psLog.bindBox("u_sp");
      psLog.bindBox("s_user_name_menu");
    }
    psLog.bindBox("bottom_container");
    $("#s_pss_exit")[0] && psLog.bindBox("s_pss_exit");
  });
  if ($("#toipad")[0]) {
    F.use("superman:page/toipad", function (s) {
      s.init();
    });
  }
  F.call("superman:common/image_lazy_load", "init");
  F.call("superman:lib/carditem_log", "init");
  (function () {
    var LEAST = cc11001100_hook("LEAST", "maybe", "var-init");
    var supportedTypes = cc11001100_hook("supportedTypes", [], "var-init");
    var testAudio = function () {
      var elem = cc11001100_hook("elem", document.createElement("audio"), "var-init");
      var bool = cc11001100_hook("bool", false, "var-init");
      try {
        bool = cc11001100_hook("bool", !!elem.canPlayType, "assign");
        if (bool) {
          bool.ogg = cc11001100_hook("bool.ogg", elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), "assign");
          bool.mp3 = cc11001100_hook("bool.mp3", elem.canPlayType("audio/mpeg;").replace(/^no$/, ""), "assign");
          bool.wav = cc11001100_hook("bool.wav", elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), "assign");
          bool.m4a = cc11001100_hook("bool.m4a", (elem.canPlayType("audio/x-m4a;") || elem.canPlayType("audio/aac;")).replace(/^no$/, ""), "assign");
        }
      } catch (e) {}
      return bool;
    };
    var supportedTypesHandle = function () {
      var audio = cc11001100_hook("audio", testAudio(), "var-init");
      if (!audio) {
        return;
      }
      for (var k in audio) {
        if (audio.hasOwnProperty(k) && audio[k] >= LEAST) {
          supportedTypes.push(k);
        }
      }
    };
    try {
      supportedTypesHandle();
      window.s_session.audioModernizr = cc11001100_hook("window.s_session.audioModernizr", !!supportedTypes.length, "assign");
    } catch (e) {
      window.s_session.audioModernizr = cc11001100_hook("window.s_session.audioModernizr", false, "assign");
    }
  })();
  if (_manCard.asynJs.length > 0) {
    $.each(_manCard.asynJs, function (i, e) {
      setTimeout(function () {
        $.loadJs($("#" + e).attr("data-src"));
      }, 1);
    });
  }
  _manCard.asynLoad = cc11001100_hook("_manCard.asynLoad", function (id) {
    $.loadJs($("#" + id).attr("data-src"));
  }, "assign");
  $(window).bind("load", function () {
    window._load_status = cc11001100_hook("window._load_status", "window_load", "assign");
    if (s_session.index_off) {
      return;
    }
    F.call("superman:page/scroll", "init");
    window._load_status = cc11001100_hook("window._load_status", "fully_load", "assign");
    F.call("superman:components/tips", "init");
    _initTopMenu();
    require(["superman/components/login_guide"], function (loginGuideTips) {
      loginGuideTips.init();
    });
    require(["superman/components/video-meet"], function (Meet) {
      var classA = cc11001100_hook("classA", Meet.VideoMeet, "var-init");
      var meet = cc11001100_hook("meet", new classA(), "var-init");
      meet.init();
    });
    require(["superman/components/content-info"], function (ContentInfo) {
      var ContentInfo = cc11001100_hook("ContentInfo", ContentInfo.ContentInfo, "var-init");
      var contentInfo = cc11001100_hook("contentInfo", new ContentInfo(), "var-init");
      contentInfo.init();
      $(window).on("index_off", function () {
        contentInfo.destroy();
      });
    });
    require(["superman/components/aging-tools"], function (Tools) {
      var ToolsClass = cc11001100_hook("ToolsClass", Tools.Tools, "var-init");
      var tools = cc11001100_hook("tools", new ToolsClass(), "var-init");
      tools.init();
      $(window).on("index_off", function () {
        tools.destroy();
      });
    });
    require(["superman/components/invoke"], function (invoke) {
      invoke.init(require);
    });
    if (bds.comm.duxiaoxiao) {
      require(["superman/components/bbox/bbox_view"], function (bbox) {
        bbox.init();
      });
    }
    if (!s_session.isLogin) {
      if (bds.comm.newNav === 1) {
        F.call("superman:components/nav", "init");
      }
      return;
    }
    F.call("superman:page/page_exp", "init");
    _initLoadModel();
    _initSkin();
    _initIndexGuide();
    setTimeout(function () {
      var elem = cc11001100_hook("elem", $("script[data-onload],#tipsplus-js"), "var-init");
      elem.each(function () {
        var that = cc11001100_hook("that", $(this), "var-init");
        var src = cc11001100_hook("src", that.attr("data-src"), "var-init");
        if (src) {
          that.attr("src", src);
        }
      });
    }, 1);
  });
  if (!s_session.isLogin) {
    return;
  }
  function _initSkin() {
    F.call("superman:start/skin_start", "init", false);
  }
  function _initTopMenu() {
    F.call("superman:mngr/menu_user", "init");
    F.call("superman:mngr/menu_common", "init");
    F.call("superman:mngr/top_menunav_new", "init");
    F.call("superman:components/qrcode", "init");
    var advertData = cc11001100_hook("advertData", bds.comm && bds.comm.popUpAdvert, "var-init");
    if (advertData) {
      F.call("superman:components/advert", "init");
    } else {
      $("#s_popup_advert").remove();
    }
  }
  function _initLoadModel() {
    var _dom = cc11001100_hook("_dom", $("#s_mod_weather"), "var-init");
    var willShow = cc11001100_hook("willShow", false, "var-init");
    var isLoading = cc11001100_hook("isLoading", false, "var-init");
    var lastResult;
    _dom.on("mouseenter", mouseEnterHandler);
    _dom.on("mouseleave", mouseLeaveHander);
    function mouseLeaveHander() {
      if (willShow) {
        willShow = cc11001100_hook("willShow", false, "assign");
      }
    }
    function mouseEnterHandler() {
      if (isLoading) {
        return;
      }
      willShow = cc11001100_hook("willShow", true, "assign");
      isLoading = cc11001100_hook("isLoading", true, "assign");
      var cityCode = cc11001100_hook("cityCode", $(".city-wather .show-city-name").attr("data-key"), "var-init");
      var bsToken = cc11001100_hook("bsToken", $("#bsToken") && $("#bsToken").val() || "", "var-init");
      if (lastResult) {
        handleResult(lastResult);
      } else {
        $.ajaxget(s_domain.baseuri + "/weather/getweather?citycode=" + cityCode + "&bsToken=" + bsToken, handleResult);
      }
    }
    function handleResult(result) {
      cc11001100_hook("result", result, "function-parameter");
      if (!willShow) {
        isLoading = cc11001100_hook("isLoading", false, "assign");
        lastResult = cc11001100_hook("lastResult", result, "assign");
        return;
      }
      _dom.off("mouseenter", mouseEnterHandler);
      _dom.off("mouseleave", mouseLeaveHander);
      if (+result.errno === 0 && result.data) {
        result.data.cityCode = cc11001100_hook("result.data.cityCode", result.cityCode, "assign");
        F.use("superman:weather/weather_tpl", function (w_tpl) {
          w_tpl.init(result.data);
        });
        F.use("weather/weather_ctrl", function (ww) {
          ww.bindEvents(result.data);
        });
      }
    }
  }
  if ($.isIE6) {
    $(window).bind("resize load", function (e) {
      $("#bottom_container").toggleClass("xxx4ielw");
      $(document.body).toggleClass("rs4ie");
    });
  }
  if ($.browser.opera) {
    $(document.body).css("minHeight", "100px");
  }
  if (+$.browser.ie === 6 || +$.browser.ie === 7) {
    $("span[data-tid=7999]").remove();
  }
  F.fire("superman:page", "runCssDetect");
  if (location.href.indexOf("frm=resultPage") > -1 && location.href.indexOf("showType=showSkin") > -1) {
    window.location.hash = cc11001100_hook("window.location.hash", "#", "assign");
    F.use("skin/skin_init", function (skin_init) {
      skin_init.init();
    });
  }
  function _initIndexGuide() {
    $("#s_menu_mine").on("click", function () {
      $("#s_xmancard_nav .s-nav-wrapper .nav-tips").remove();
      F.use("superman:common/user_attr", function (userAttr) {
        userAttr.setAttr("supermanNavGuide", "off");
      });
    });
  }
  if (s_session.isFesLogo) {
    $("#s_mp area").on("mousedown", function (e) {
      ns_c({
        fm: cc11001100_hook("fm", "tab", "object-key-init"),
        tab: cc11001100_hook("tab", "felogo", "object-key-init"),
        rsv_platform: cc11001100_hook("rsv_platform", "newhome", "object-key-init"),
        rsv_skin: cc11001100_hook("rsv_skin", $("#head").hasClass("s-skin-hasbg") ? "1" : "0", "object-key-init")
      });
    });
  }
  if (s_session.isHaveWrodLink) {
    $("#lm a").on("mousedown", function (e) {
      var $this = cc11001100_hook("$this", $(this), "var-init");
      ns_c && ns_c({
        fm: cc11001100_hook("fm", "behs", "object-key-init"),
        tab: cc11001100_hook("tab", "bdlink", "object-key-init"),
        p1: cc11001100_hook("p1", $this.index() + 1, "object-key-init"),
        title: cc11001100_hook("title", $this.text(), "object-key-init"),
        url: cc11001100_hook("url", $this.attr("href"), "object-key-init"),
        rsv_platform: cc11001100_hook("rsv_platform", "newhome", "object-key-init"),
        rsv_skin: cc11001100_hook("rsv_skin", $("#head").hasClass("s-skin-hasbg") ? "1" : "0", "object-key-init")
      });
    });
  }
});
F.module("page/info", function (require, exports, ctx) {
  var S = cc11001100_hook("S", ctx.base, "var-init"),
    _info = cc11001100_hook("_info", {
      isFocus: cc11001100_hook("isFocus", true, "object-key-init")
    }, "var-init");
  $(window).on("focus", function () {
    _info.isFocus = cc11001100_hook("_info.isFocus", true, "assign");
  });
  $(window).on("blur", function () {
    _info.isFocus = cc11001100_hook("_info.isFocus", false, "assign");
  });
  exports.getInfo = cc11001100_hook("exports.getInfo", function () {
    return _info;
  }, "assign");
});
F.module("superman:page/scroll", function (require, exports, ctx) {
  var tWrap = cc11001100_hook("tWrap", $("#s_top_wrap"), "var-init");
  var hWrap = cc11001100_hook("hWrap", $("#head_wrapper"), "var-init");
  var tabWrap = cc11001100_hook("tabWrap", $("#s_ctner_menus"), "var-init");
  var topTabWrap = cc11001100_hook("topTabWrap", $(".s-top-nav > #s_ctner_menus"), "var-init");
  var kwWrap = cc11001100_hook("kwWrap", s_session.isLogin ? $("#s_kw_wrap") : $("#kw"), "var-init");
  var sFormWrapper = cc11001100_hook("sFormWrapper", $("#s_form_wrapper"), "var-init");
  var u1 = cc11001100_hook("u1", $("#u1"), "var-init");
  var sWrap = cc11001100_hook("sWrap", $("#s_wrap"), "var-init");
  var upMenu = cc11001100_hook("upMenu", $("#u_sp"), "var-init");
  var s_fm = cc11001100_hook("s_fm", document.getElementById("s_fm"), "var-init");
  var isIE7 = cc11001100_hook("isIE7", $.isIE === 7 ? true : false, "var-init");
  var isIE6 = cc11001100_hook("isIE6", $.isIE === 6 ? true : false, "var-init");
  var newSearchBox = cc11001100_hook("newSearchBox", bds.comm.newSearchBox, "var-init");
  function init() {
    _bindEvent();
    bds.comm.ubsurl = cc11001100_hook("bds.comm.ubsurl", $.url.escapeSSL("http://sclick.baidu.com/w.gif"), "assign");
    if ($.isIE == 6) {
      document.execCommand("BackgroundImageCache", false, true);
    }
  }
  function handleSDown() {
    if (bds.comm.inputColorConfig && bds.comm.inputColorConfig.barColor) {
      sFormWrapper.removeClass("scene-style");
    }
    sWrap.css({
      "padding-top": cc11001100_hook("padding-top", hWrap.outerHeight(true), "object-key-init")
    });
    tWrap.addClass("s-down");
    sWrap.addClass("s-down");
    hWrap.addClass("s-down");
    u1.addClass("s-down");
    if (newSearchBox) {
      sFormWrapper.addClass("c-wrapper c-wrapper-l");
    }
  }
  function handleUnSDown() {
    if (bds.comm.inputColorConfig && bds.comm.inputColorConfig.barColor && bds.comm.sIndex) {
      sFormWrapper.addClass("scene-style");
    }
    sWrap.css({
      "padding-top": cc11001100_hook("padding-top", 0, "object-key-init")
    });
    tWrap.removeClass("s-down");
    sWrap.removeClass("s-down");
    hWrap.removeClass("s-down");
    u1.removeClass("s-down");
    if (newSearchBox) {
      sFormWrapper.removeClass("c-wrapper c-wrapper-l");
    }
    tabWrap.css({
      left: cc11001100_hook("left", 0, "object-key-init")
    });
  }
  var _roller = cc11001100_hook("_roller", {
    overBound: cc11001100_hook("overBound", false, "object-key-init"),
    topFy: function (left, top) {
      if (isIE6) {
        return;
      }
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      if (!_ctx.overBound) {
        _ctx.overBound = cc11001100_hook("_ctx.overBound", true, "assign");
        handleSDown();
        ctx.fire("outMenu", {
          out: cc11001100_hook("out", true, "object-key-init")
        });
        if (isIE7) {
          s_fm.style.zoom = cc11001100_hook("s_fm.style.zoom", 0, "assign");
        }
        $(window).bind("resize", _ctx.follow);
      }
      if (left >= 0) {
        topTabWrap.css({
          left: cc11001100_hook("left", -1 * left, "object-key-init")
        });
      }
      _ctx.follow(true);
    },
    unTopFy: function (left, top) {
      if (isIE6) {
        return;
      }
      var _ctx = cc11001100_hook("_ctx", this, "var-init");
      if (_ctx.overBound) {
        _ctx.overBound = cc11001100_hook("_ctx.overBound", false, "assign");
        handleUnSDown();
        ctx.fire("outMenu", {
          out: cc11001100_hook("out", false, "object-key-init")
        });
        if (isIE7) {
          setTimeout(function () {
            s_fm.style.zoom = cc11001100_hook("s_fm.style.zoom", 1, "assign");
          }, 30);
        }
        _ctx.follow();
        $(window).unbind("resize", _ctx.follow);
      }
      tWrap.css({
        left: cc11001100_hook("left", 0, "object-key-init")
      });
    },
    ieFix: function (top) {
      var skinLayer = cc11001100_hook("skinLayer", $("#s_skin_layer"), "var-init");
      if (parseInt(skinLayer.css("top"), 10) >= 0) {
        skinLayer.css({
          top: cc11001100_hook("top", top, "object-key-init")
        });
      }
    },
    follow: function (start) {
      if (newSearchBox) {
        return;
      }
      if (start) {
        hWrap.css({
          left: cc11001100_hook("left", tWrap.width() / 2 - $(window).scrollLeft(), "object-key-init")
        });
      } else {
        hWrap.css({
          left: cc11001100_hook("left", "", "object-key-init")
        });
      }
    },
    upMenuFollow: function () {
      upMenu.css({
        position: cc11001100_hook("position", "fixed", "object-key-init"),
        right: cc11001100_hook("right", $(window).width() - tWrap.width() + $(window).scrollLeft(), "object-key-init")
      });
    },
    miniFy: function (free) {
      var miniBound = cc11001100_hook("miniBound", 1280, "var-init");
      if ($(window).width() > miniBound || free === true) {
        $(s_fm).removeClass("minisize");
      } else {
        $(s_fm).addClass("minisize");
      }
    },
    initAdjust: function () {
      $(window).on("beforeunload", function () {
        _roller.unTopFy(0, 0);
        window.scrollTo(0, 0);
      });
    }
  }, "var-init");
  function _bindEvent() {
    var kwTop = cc11001100_hook("kwTop", kwWrap.offset().top, "var-init");
    _roller.initAdjust();
    $(window).on("scroll", function (e) {
      var top = cc11001100_hook("top", $(this).scrollTop(), "var-init");
      var left = cc11001100_hook("left", $(this).scrollLeft(), "var-init");
      if (hWrap.hasClass("s-ps-islite")) {
        return;
      }
      if (!s_session.isLogin) {
        return;
      }
      if (top >= kwTop - 18) {
        _roller.topFy(left, top);
      } else {
        _roller.unTopFy(left, top);
      }
      if (isIE7) {
        if (top == 0) {
          setTimeout(function () {
            upMenu[0].style.zoom = cc11001100_hook("upMenu[0].style.zoom", 1, "assign");
          }, 200);
        } else {
          upMenu[0].style.zoom = cc11001100_hook("upMenu[0].style.zoom", 0, "assign");
        }
      }
    });
    if ($.isIE !== 6) {
      $(window).on("resize", function () {
        tWrap.css({
          left: cc11001100_hook("left", -1 * $(window).scrollLeft(), "object-key-init")
        });
      });
    }
  }
  exports.init = cc11001100_hook("exports.init", init, "assign");
});