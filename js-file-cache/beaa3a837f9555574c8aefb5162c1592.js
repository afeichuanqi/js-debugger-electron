/**
 * @file core.js 调起核心模块,用于静态引用
 * @author zhangjingfeng
 */
/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = cc11001100_hook("module.exports", e(), "assign") : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.ClipboardJS = cc11001100_hook("exports.ClipboardJS", e(), "assign") : t.ClipboardJS = cc11001100_hook("t.ClipboardJS", e(), "assign");
}(this, function () {
  return function (t) {
    function e(o) {
      cc11001100_hook("o", o, "function-parameter");
      if (n[o]) return n[o].exports;
      var r = cc11001100_hook("r", n[o] = cc11001100_hook("n[o]", {
        i: cc11001100_hook("i", o, "object-key-init"),
        l: cc11001100_hook("l", !1, "object-key-init"),
        exports: {}
      }, "assign"), "var-init");
      return t[o].call(r.exports, r, r.exports, e), r.l = cc11001100_hook("r.l", !0, "assign"), r.exports;
    }
    var n = cc11001100_hook("n", {}, "var-init");
    return e.m = cc11001100_hook("e.m", t, "assign"), e.c = cc11001100_hook("e.c", n, "assign"), e.i = cc11001100_hook("e.i", function (t) {
      return t;
    }, "assign"), e.d = cc11001100_hook("e.d", function (t, n, o) {
      e.o(t, n) || Object.defineProperty(t, n, {
        configurable: cc11001100_hook("configurable", !1, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
        get: cc11001100_hook("get", o, "object-key-init")
      });
    }, "assign"), e.n = cc11001100_hook("e.n", function (t) {
      var n = cc11001100_hook("n", t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      }, "var-init");
      return e.d(n, "a", n), n;
    }, "assign"), e.o = cc11001100_hook("e.o", function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, "assign"), e.p = cc11001100_hook("e.p", "", "assign"), e(e.s = cc11001100_hook("e.s", 3, "assign"));
  }([function (t, e, n) {
    var o, r, i;
    !function (a, c) {
      r = cc11001100_hook("r", [t, n(7)], "assign"), o = cc11001100_hook("o", c, "assign"), void 0 !== (i = cc11001100_hook("i", "function" == typeof o ? o.apply(e, r) : o, "assign")) && (t.exports = cc11001100_hook("t.exports", i, "assign"));
    }(0, function (t, e) {
      "use strict";

      function n(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      var o = cc11001100_hook("o", function (t) {
          return t && t.__esModule ? t : {
            default: cc11001100_hook("default", t, "object-key-init")
          };
        }(e), "var-init"),
        r = cc11001100_hook("r", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, "var-init"),
        i = cc11001100_hook("i", function () {
          function t(t, e) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("e", e, "function-parameter");
            for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
              var o = cc11001100_hook("o", e[n], "var-init");
              o.enumerable = cc11001100_hook("o.enumerable", o.enumerable || !1, "assign"), o.configurable = cc11001100_hook("o.configurable", !0, "assign"), "value" in o && (o.writable = cc11001100_hook("o.writable", !0, "assign")), Object.defineProperty(t, o.key, o);
            }
          }
          return function (e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e;
          };
        }(), "var-init"),
        a = cc11001100_hook("a", function () {
          function t(e) {
            cc11001100_hook("e", e, "function-parameter");
            n(this, t), this.resolveOptions(e), this.initSelection();
          }
          return i(t, [{
            key: cc11001100_hook("key", "resolveOptions", "object-key-init"),
            value: function () {
              var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
              this.action = cc11001100_hook("this.action", t.action, "assign"), this.container = cc11001100_hook("this.container", t.container, "assign"), this.emitter = cc11001100_hook("this.emitter", t.emitter, "assign"), this.target = cc11001100_hook("this.target", t.target, "assign"), this.text = cc11001100_hook("this.text", t.text, "assign"), this.trigger = cc11001100_hook("this.trigger", t.trigger, "assign"), this.selectedText = cc11001100_hook("this.selectedText", "", "assign");
            }
          }, {
            key: cc11001100_hook("key", "initSelection", "object-key-init"),
            value: function () {
              this.text ? this.selectFake() : this.target && this.selectTarget();
            }
          }, {
            key: cc11001100_hook("key", "selectFake", "object-key-init"),
            value: function () {
              var t = cc11001100_hook("t", this, "var-init"),
                e = cc11001100_hook("e", "rtl" == document.documentElement.getAttribute("dir"), "var-init");
              this.removeFake(), this.fakeHandlerCallback = cc11001100_hook("this.fakeHandlerCallback", function () {
                return t.removeFake();
              }, "assign"), this.fakeHandler = cc11001100_hook("this.fakeHandler", this.container.addEventListener("click", this.fakeHandlerCallback) || !0, "assign"), this.fakeElem = cc11001100_hook("this.fakeElem", document.createElement("textarea"), "assign"), this.fakeElem.style.fontSize = cc11001100_hook("this.fakeElem.style.fontSize", "12pt", "assign"), this.fakeElem.style.border = cc11001100_hook("this.fakeElem.style.border", "0", "assign"), this.fakeElem.style.padding = cc11001100_hook("this.fakeElem.style.padding", "0", "assign"), this.fakeElem.style.margin = cc11001100_hook("this.fakeElem.style.margin", "0", "assign"), this.fakeElem.style.position = cc11001100_hook("this.fakeElem.style.position", "absolute", "assign"), this.fakeElem.style[e ? "right" : "left"] = cc11001100_hook("this.fakeElem.style[e ? \"right\" : \"left\"]", "-9999px", "assign");
              var n = cc11001100_hook("n", window.pageYOffset || document.documentElement.scrollTop, "var-init");
              this.fakeElem.style.top = cc11001100_hook("this.fakeElem.style.top", n + "px", "assign"), this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = cc11001100_hook("this.fakeElem.value", this.text, "assign"), this.container.appendChild(this.fakeElem), this.selectedText = cc11001100_hook("this.selectedText", (0, o.default)(this.fakeElem), "assign"), this.copyText();
            }
          }, {
            key: cc11001100_hook("key", "removeFake", "object-key-init"),
            value: function () {
              this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = cc11001100_hook("this.fakeHandler", null, "assign"), this.fakeHandlerCallback = cc11001100_hook("this.fakeHandlerCallback", null, "assign")), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = cc11001100_hook("this.fakeElem", null, "assign"));
            }
          }, {
            key: cc11001100_hook("key", "selectTarget", "object-key-init"),
            value: function () {
              this.selectedText = cc11001100_hook("this.selectedText", (0, o.default)(this.target), "assign"), this.copyText();
            }
          }, {
            key: cc11001100_hook("key", "copyText", "object-key-init"),
            value: function () {
              var t = cc11001100_hook("t", void 0, "var-init");
              try {
                t = cc11001100_hook("t", document.execCommand(this.action), "assign");
              } catch (e) {
                t = cc11001100_hook("t", !1, "assign");
              }
              this.handleResult(t);
            }
          }, {
            key: cc11001100_hook("key", "handleResult", "object-key-init"),
            value: function (t) {
              this.emitter.emit(t ? "success" : "error", {
                action: cc11001100_hook("action", this.action, "object-key-init"),
                text: cc11001100_hook("text", this.selectedText, "object-key-init"),
                trigger: cc11001100_hook("trigger", this.trigger, "object-key-init"),
                clearSelection: cc11001100_hook("clearSelection", this.clearSelection.bind(this), "object-key-init")
              });
            }
          }, {
            key: cc11001100_hook("key", "clearSelection", "object-key-init"),
            value: function () {
              this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
            }
          }, {
            key: cc11001100_hook("key", "destroy", "object-key-init"),
            value: function () {
              this.removeFake();
            }
          }, {
            key: cc11001100_hook("key", "action", "object-key-init"),
            set: function () {
              var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "copy", "var-init");
              if (this._action = cc11001100_hook("this._action", t, "assign"), "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
            },
            get: function () {
              return this._action;
            }
          }, {
            key: cc11001100_hook("key", "target", "object-key-init"),
            set: function (t) {
              if (void 0 !== t) {
                if (!t || "object" !== (void 0 === t ? "undefined" : r(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                this._target = cc11001100_hook("this._target", t, "assign");
              }
            },
            get: function () {
              return this._target;
            }
          }]), t;
        }(), "var-init");
      t.exports = cc11001100_hook("t.exports", a, "assign");
    });
  }, function (t, e, n) {
    function o(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      if (!t && !e && !n) throw new Error("Missing required arguments");
      if (!c.string(e)) throw new TypeError("Second argument must be a String");
      if (!c.fn(n)) throw new TypeError("Third argument must be a Function");
      if (c.node(t)) return r(t, e, n);
      if (c.nodeList(t)) return i(t, e, n);
      if (c.string(t)) return a(t, e, n);
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
    }
    function r(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return t.addEventListener(e, n), {
        destroy: function () {
          t.removeEventListener(e, n);
        }
      };
    }
    function i(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return Array.prototype.forEach.call(t, function (t) {
        t.addEventListener(e, n);
      }), {
        destroy: function () {
          Array.prototype.forEach.call(t, function (t) {
            t.removeEventListener(e, n);
          });
        }
      };
    }
    function a(t, e, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return u(document.body, t, e, n);
    }
    var c = cc11001100_hook("c", n(6), "var-init"),
      u = cc11001100_hook("u", n(5), "var-init");
    t.exports = cc11001100_hook("t.exports", o, "assign");
  }, function (t, e) {
    function n() {}
    n.prototype = cc11001100_hook("n.prototype", {
      on: function (t, e, n) {
        var o = cc11001100_hook("o", this.e || (this.e = cc11001100_hook("this.e", {}, "assign")), "var-init");
        return (o[t] || (o[t] = cc11001100_hook("o[t]", [], "assign"))).push({
          fn: cc11001100_hook("fn", e, "object-key-init"),
          ctx: cc11001100_hook("ctx", n, "object-key-init")
        }), this;
      },
      once: function (t, e, n) {
        function o() {
          r.off(t, o), e.apply(n, arguments);
        }
        var r = cc11001100_hook("r", this, "var-init");
        return o._ = cc11001100_hook("o._", e, "assign"), this.on(t, o, n);
      },
      emit: function (t) {
        var e = cc11001100_hook("e", [].slice.call(arguments, 1), "var-init"),
          n = cc11001100_hook("n", ((this.e || (this.e = cc11001100_hook("this.e", {}, "assign")))[t] || []).slice(), "var-init"),
          o = cc11001100_hook("o", 0, "var-init"),
          r = cc11001100_hook("r", n.length, "var-init");
        for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);
        return this;
      },
      off: function (t, e) {
        var n = cc11001100_hook("n", this.e || (this.e = cc11001100_hook("this.e", {}, "assign")), "var-init"),
          o = cc11001100_hook("o", n[t], "var-init"),
          r = cc11001100_hook("r", [], "var-init");
        if (o && e) for (var i = cc11001100_hook("i", 0, "var-init"), a = cc11001100_hook("a", o.length, "var-init"); i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
        return r.length ? n[t] = cc11001100_hook("n[t]", r, "assign") : delete n[t], this;
      }
    }, "assign"), t.exports = cc11001100_hook("t.exports", n, "assign");
  }, function (t, e, n) {
    var o, r, i;
    !function (a, c) {
      r = cc11001100_hook("r", [t, n(0), n(2), n(1)], "assign"), o = cc11001100_hook("o", c, "assign"), void 0 !== (i = cc11001100_hook("i", "function" == typeof o ? o.apply(e, r) : o, "assign")) && (t.exports = cc11001100_hook("t.exports", i, "assign"));
    }(0, function (t, e, n, o) {
      "use strict";

      function r(t) {
        cc11001100_hook("t", t, "function-parameter");
        return t && t.__esModule ? t : {
          default: cc11001100_hook("default", t, "object-key-init")
        };
      }
      function i(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }
      function a(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e;
      }
      function c(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = cc11001100_hook("t.prototype", Object.create(e && e.prototype, {
          constructor: {
            value: cc11001100_hook("value", t, "object-key-init"),
            enumerable: cc11001100_hook("enumerable", !1, "object-key-init"),
            writable: cc11001100_hook("writable", !0, "object-key-init"),
            configurable: cc11001100_hook("configurable", !0, "object-key-init")
          }
        }), "assign"), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = cc11001100_hook("t.__proto__", e, "assign"));
      }
      function u(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        var n = cc11001100_hook("n", "data-clipboard-" + t, "var-init");
        if (e.hasAttribute(n)) return e.getAttribute(n);
      }
      var l = cc11001100_hook("l", r(e), "var-init"),
        s = cc11001100_hook("s", r(n), "var-init"),
        f = cc11001100_hook("f", r(o), "var-init"),
        d = cc11001100_hook("d", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t;
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, "var-init"),
        h = cc11001100_hook("h", function () {
          function t(t, e) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("e", e, "function-parameter");
            for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
              var o = cc11001100_hook("o", e[n], "var-init");
              o.enumerable = cc11001100_hook("o.enumerable", o.enumerable || !1, "assign"), o.configurable = cc11001100_hook("o.configurable", !0, "assign"), "value" in o && (o.writable = cc11001100_hook("o.writable", !0, "assign")), Object.defineProperty(t, o.key, o);
            }
          }
          return function (e, n, o) {
            return n && t(e.prototype, n), o && t(e, o), e;
          };
        }(), "var-init"),
        p = cc11001100_hook("p", function (t) {
          function e(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            i(this, e);
            var o = cc11001100_hook("o", a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this)), "var-init");
            return o.resolveOptions(n), o.listenClick(t), o;
          }
          return c(e, t), h(e, [{
            key: cc11001100_hook("key", "resolveOptions", "object-key-init"),
            value: function () {
              var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
              this.action = cc11001100_hook("this.action", "function" == typeof t.action ? t.action : this.defaultAction, "assign"), this.target = cc11001100_hook("this.target", "function" == typeof t.target ? t.target : this.defaultTarget, "assign"), this.text = cc11001100_hook("this.text", "function" == typeof t.text ? t.text : this.defaultText, "assign"), this.container = cc11001100_hook("this.container", "object" === d(t.container) ? t.container : document.body, "assign");
            }
          }, {
            key: cc11001100_hook("key", "listenClick", "object-key-init"),
            value: function (t) {
              var e = cc11001100_hook("e", this, "var-init");
              this.listener = cc11001100_hook("this.listener", (0, f.default)(t, "click", function (t) {
                return e.onClick(t);
              }), "assign");
            }
          }, {
            key: cc11001100_hook("key", "onClick", "object-key-init"),
            value: function (t) {
              var e = cc11001100_hook("e", t.delegateTarget || t.currentTarget, "var-init");
              this.clipboardAction && (this.clipboardAction = cc11001100_hook("this.clipboardAction", null, "assign")), this.clipboardAction = cc11001100_hook("this.clipboardAction", new l.default({
                action: cc11001100_hook("action", this.action(e), "object-key-init"),
                target: cc11001100_hook("target", this.target(e), "object-key-init"),
                text: cc11001100_hook("text", this.text(e), "object-key-init"),
                container: cc11001100_hook("container", this.container, "object-key-init"),
                trigger: cc11001100_hook("trigger", e, "object-key-init"),
                emitter: cc11001100_hook("emitter", this, "object-key-init")
              }), "assign");
            }
          }, {
            key: cc11001100_hook("key", "defaultAction", "object-key-init"),
            value: function (t) {
              return u("action", t);
            }
          }, {
            key: cc11001100_hook("key", "defaultTarget", "object-key-init"),
            value: function (t) {
              var e = cc11001100_hook("e", u("target", t), "var-init");
              if (e) return document.querySelector(e);
            }
          }, {
            key: cc11001100_hook("key", "defaultText", "object-key-init"),
            value: function (t) {
              return u("text", t);
            }
          }, {
            key: cc11001100_hook("key", "destroy", "object-key-init"),
            value: function () {
              this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = cc11001100_hook("this.clipboardAction", null, "assign"));
            }
          }], [{
            key: cc11001100_hook("key", "isSupported", "object-key-init"),
            value: function () {
              var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ["copy", "cut"], "var-init"),
                e = cc11001100_hook("e", "string" == typeof t ? [t] : t, "var-init"),
                n = cc11001100_hook("n", !!document.queryCommandSupported, "var-init");
              return e.forEach(function (t) {
                n = cc11001100_hook("n", n && !!document.queryCommandSupported(t), "assign");
              }), n;
            }
          }]), e;
        }(s.default), "var-init");
      t.exports = cc11001100_hook("t.exports", p, "assign");
    });
  }, function (t, e) {
    function n(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      for (; t && t.nodeType !== o;) {
        if ("function" == typeof t.matches && t.matches(e)) return t;
        t = cc11001100_hook("t", t.parentNode, "assign");
      }
    }
    var o = cc11001100_hook("o", 9, "var-init");
    if ("undefined" != typeof Element && !Element.prototype.matches) {
      var r = cc11001100_hook("r", Element.prototype, "var-init");
      r.matches = cc11001100_hook("r.matches", r.matchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector || r.webkitMatchesSelector, "assign");
    }
    t.exports = cc11001100_hook("t.exports", n, "assign");
  }, function (t, e, n) {
    function o(t, e, n, o, r) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var a = cc11001100_hook("a", i.apply(this, arguments), "var-init");
      return t.addEventListener(n, a, r), {
        destroy: function () {
          t.removeEventListener(n, a, r);
        }
      };
    }
    function r(t, e, n, r, i) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      return "function" == typeof t.addEventListener ? o.apply(null, arguments) : "function" == typeof n ? o.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = cc11001100_hook("t", document.querySelectorAll(t), "assign")), Array.prototype.map.call(t, function (t) {
        return o(t, e, n, r, i);
      }));
    }
    function i(t, e, n, o) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      return function (n) {
        n.delegateTarget = cc11001100_hook("n.delegateTarget", a(n.target, e), "assign"), n.delegateTarget && o.call(t, n);
      };
    }
    var a = cc11001100_hook("a", n(4), "var-init");
    t.exports = cc11001100_hook("t.exports", r, "assign");
  }, function (t, e) {
    e.node = cc11001100_hook("e.node", function (t) {
      return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
    }, "assign"), e.nodeList = cc11001100_hook("e.nodeList", function (t) {
      var n = cc11001100_hook("n", Object.prototype.toString.call(t), "var-init");
      return void 0 !== t && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in t && (0 === t.length || e.node(t[0]));
    }, "assign"), e.string = cc11001100_hook("e.string", function (t) {
      return "string" == typeof t || t instanceof String;
    }, "assign"), e.fn = cc11001100_hook("e.fn", function (t) {
      return "[object Function]" === Object.prototype.toString.call(t);
    }, "assign");
  }, function (t, e) {
    function n(t) {
      cc11001100_hook("t", t, "function-parameter");
      var e;
      if ("SELECT" === t.nodeName) t.focus(), e = cc11001100_hook("e", t.value, "assign");else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = cc11001100_hook("n", t.hasAttribute("readonly"), "var-init");
        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = cc11001100_hook("e", t.value, "assign");
      } else {
        t.hasAttribute("contenteditable") && t.focus();
        var o = cc11001100_hook("o", window.getSelection(), "var-init"),
          r = cc11001100_hook("r", document.createRange(), "var-init");
        r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = cc11001100_hook("e", o.toString(), "assign");
      }
      return e;
    }
    t.exports = cc11001100_hook("t.exports", n, "assign");
  }]);
});
;
(function () {
  var define = cc11001100_hook("define", window.eslx_define || window.define, "var-init");
  var require = cc11001100_hook("require", window.eslx_require || window.require, "var-init");
  /**
  * @file moduleKit 组装模块相关
  * @author zhangjingfeng
  * @date 2017-07-20
  */

  var ROOT_MODULE_NAME = cc11001100_hook("ROOT_MODULE_NAME", 'rmbGrowth', "var-init");
  var BRANCH_MODULE_NAME = cc11001100_hook("BRANCH_MODULE_NAME", '', "var-init");
  function defineBranchModule(mName) {
    cc11001100_hook("mName", mName, "function-parameter");
    if (mName) {
      BRANCH_MODULE_NAME = cc11001100_hook("BRANCH_MODULE_NAME", ROOT_MODULE_NAME + '/' + mName, "assign");
    } else {
      BRANCH_MODULE_NAME = cc11001100_hook("BRANCH_MODULE_NAME", '', "assign");
    }
  }
  function defineChildModule(defineModule, path, moduleNames) {
    cc11001100_hook("defineModule", defineModule, "function-parameter");
    cc11001100_hook("path", path, "function-parameter");
    cc11001100_hook("moduleNames", moduleNames, "function-parameter");
    var eslDefine = cc11001100_hook("eslDefine", define, "var-init");
    var fullModuleNames = cc11001100_hook("fullModuleNames", moduleNames.map(function (n) {
      return path + '/' + n;
    }), "var-init");

    // 显式注入模块
    var cb = function (a, b, c, d, e, f) {
      var obj = cc11001100_hook("obj", {}, "var-init");
      Array.prototype.slice.call(arguments).forEach(function (n, index) {
        if (n && moduleNames && moduleNames[index]) {
          obj[moduleNames[index]] = cc11001100_hook("obj[moduleNames[index]]", n, "assign");
        }
      });
      return obj;
    };
    if (defineModule) {
      eslDefine(defineModule, fullModuleNames, cb);
    } else {
      eslDefine(fullModuleNames, cb);
    }
  }
  function defineLeafModules(moduleName) {
    cc11001100_hook("moduleName", moduleName, "function-parameter");
    if (!BRANCH_MODULE_NAME || !moduleName) {
      return;
    }
    defineChildModule(BRANCH_MODULE_NAME, BRANCH_MODULE_NAME, moduleName);
  }
  function defineExportModules(moduleNames) {
    cc11001100_hook("moduleNames", moduleNames, "function-parameter");
    if (!ROOT_MODULE_NAME || !moduleNames || !moduleNames.length) {
      return;
    }
    defineChildModule('', ROOT_MODULE_NAME, moduleNames);
  }
  ;

  /**
  * @file test
  * @author zhangjingfeng
  */
  !function () {
    /**
    * @file boxjs 调起APP
    * @author zhangjingfeng
    */
    define('rmbGrowth/tools/box', function () {
      var ua = cc11001100_hook("ua", navigator.userAgent, "var-init");
      var ret = cc11001100_hook("ret", {
        isBox: cc11001100_hook("isBox", / baiduboxapp\//i.test(ua), "object-key-init"),
        isAndroid: cc11001100_hook("isAndroid", /(Android);?[\s\/]+([\d.]+)?/.test(ua), "object-key-init"),
        assureOpenBox: cc11001100_hook("assureOpenBox", assureOpenBox, "object-key-init")
      }, "var-init");

      /**
       * 插入openBox.js
       *
       * @param {Object} opts 打开选项 @deprecated
       */
      function assureOpenBox(opts) {
        cc11001100_hook("opts", opts, "function-parameter");
        if (window.OpenBox) {
          return;
        }
        var script = cc11001100_hook("script", document.createElement('script'), "var-init");
        var t = cc11001100_hook("t", new Date(), "var-init");
        var formatNum = function (num) {
          return num.toString().replace(/^(\d)$/, '0$1');
        };
        var time = cc11001100_hook("time", '' + t.getFullYear() + '-' + formatNum(t.getMonth() + 1) + '-' + formatNum(t.getDate()) + '-' + formatNum(t.getHours()), "var-init");
        script.src = cc11001100_hook("script.src", '//s.bdstatic.com/common/openjs/openBox.js?_v=' + time, "assign");
        document.body.appendChild(script);
        if (window.OpenBox) {
          var b = cc11001100_hook("b", window.OpenBox, "var-init");
          var openBdBox = cc11001100_hook("openBdBox", b(opts), "var-init");
          openBdBox.open();
        }
      }
      return ret;
    });
    ;
    /* globals defineBranchModule */
    defineBranchModule('tools');
    /* globals defineLeafModules */
    defineLeafModules(['box']);
  }();
  ;
  /**
  * @file test
  * @author zhangjingfeng
  */
  !function () {
    /**
    * @file 轮播推广逻辑
    * @author zhangjingfeng
    */

    /**
     *   var opt = [{"priority": "1", "show": "2", "click": "50", "action": "bdbox"},
     *              {"priority": "2", "show": "2", "click": "150", "action": "haokan"}];
     *
     *   var instance = new ExhManager(opt);
     *   instance.getAppInfo();
     *   instance.showed();
     *   instance.clicked();
     */

    define('rmbGrowth/ext/exhibitionManager', function () {
      var ExhManager = cc11001100_hook("ExhManager", function () {
        var lsPrefix = cc11001100_hook("lsPrefix", 'bdVideoLaunchAppExh_', "var-init");
        var key = cc11001100_hook("key", 'action', "var-init");
        var showKey = cc11001100_hook("showKey", 'show', "var-init");
        var clickKey = cc11001100_hook("clickKey", 'click', "var-init");
        var instance = cc11001100_hook("instance", null, "var-init");

        /**
         * 轮展管理类
         *
         * @class
         */
        function ExhManager() {
          if (instance) {
            return instance;
          }
          return this.update.apply(this, arguments);
        }
        ExhManager.prototype.update = cc11001100_hook("ExhManager.prototype.update", function (opts) {
          this.opts = cc11001100_hook("this.opts", opts, "assign");
          if (!opts) {
            return '';
          }
          this.getAppInfo();
          instance = cc11001100_hook("instance", this, "assign");
          return this;
        }, "assign");
        ExhManager.prototype.getAppInfo = cc11001100_hook("ExhManager.prototype.getAppInfo", function () {
          var self = cc11001100_hook("self", this, "var-init");
          if (this._currentAppInfo) {
            return this._currentAppInfo;
          }
          var optLength = cc11001100_hook("optLength", this.opts.length, "var-init");
          if (!optLength) {
            return '';
          }
          var currentAppName = cc11001100_hook("currentAppName", this._getStorageAppName(), "var-init");
          // 获取不到保存的app信息,则认为是无痕模式或初次进入,取优先级最高的app
          if (!currentAppName) {
            this._currentAppInfo = cc11001100_hook("this._currentAppInfo", this.opts[0], "assign");
          }

          // 如果获取到了保存的app信息, 则去优先级内寻找
          this.opts.forEach(function (item) {
            if (item[key] === currentAppName) {
              self._currentAppInfo = cc11001100_hook("self._currentAppInfo", item, "assign");
              return false;
            }
          });

          // 优先级内找不到,那就直接取第一个了
          if (!this._currentAppInfo) {
            this._currentAppInfo = cc11001100_hook("this._currentAppInfo", this.opts[0], "assign");
          }
          this._updateStorageApp(this._currentAppInfo);
          return this._currentAppInfo;
        }, "assign");
        ExhManager.prototype.judgeShowClick = cc11001100_hook("ExhManager.prototype.judgeShowClick", function (type, typeKey) {
          if (type === 'show' && this['_once_' + type]) {
            return;
          }
          if (!this.opts || !this._currentAppInfo) {
            // not inited
            return;
          }
          var currentAppName = cc11001100_hook("currentAppName", this._currentAppInfo[key], "var-init");
          var previousAppName = cc11001100_hook("previousAppName", this._getStorageAppName(), "var-init");
          if ((currentAppName || previousAppName) && currentAppName !== previousAppName) {} else {
            this['_once_' + type] = cc11001100_hook("this['_once_' + type]", true, "assign");
            var time = cc11001100_hook("time", Math.floor(this._getStorage(type + 'Time')) || 0, "var-init");
            time = cc11001100_hook("time", time + 1, "assign");
            if (time >= Math.floor(this._currentAppInfo[typeKey])) {
              this.changeApp();
            } else {
              this._setStorage(type + 'Time', time);
            }
          }
        }, "assign");
        ExhManager.prototype.changeApp = cc11001100_hook("ExhManager.prototype.changeApp", function () {
          var currentAppName = cc11001100_hook("currentAppName", this._currentAppInfo[key], "var-init");
          var newIndex = cc11001100_hook("newIndex", -1, "var-init");
          this.opts.forEach(function (item, index) {
            if (item[key] === currentAppName) {
              newIndex = cc11001100_hook("newIndex", index, "assign");
              return false;
            }
          });
          newIndex = cc11001100_hook("newIndex", newIndex + 1, "assign");
          if (newIndex >= this.opts.length) {
            newIndex = cc11001100_hook("newIndex", 0, "assign");
          }
          this._updateStorageApp(this.opts[newIndex]);
        }, "assign");
        ExhManager.prototype.showed = cc11001100_hook("ExhManager.prototype.showed", function () {
          this.judgeShowClick('show', showKey);
        }, "assign");
        ExhManager.prototype.clicked = cc11001100_hook("ExhManager.prototype.clicked", function () {
          this.judgeShowClick('click', clickKey);
        }, "assign");
        ExhManager.prototype._updateStorageApp = cc11001100_hook("ExhManager.prototype._updateStorageApp", function (currentAppInfo) {
          var previousAppName = cc11001100_hook("previousAppName", this._getStorageAppName(), "var-init");
          if ((currentAppInfo[key] || previousAppName) && currentAppInfo[key] !== previousAppName) {
            this._setStorage('appName', currentAppInfo[key]);
            this._setStorage('clickTime', '0');
            this._setStorage('showTime', '0');
          }
        }, "assign");
        ExhManager.prototype._getStorageAppName = cc11001100_hook("ExhManager.prototype._getStorageAppName", function () {
          return this._getStorage('appName');
        }, "assign");
        ExhManager.prototype._getStorage = cc11001100_hook("ExhManager.prototype._getStorage", function (name) {
          try {
            return localStorage.getItem(lsPrefix + name);
          } catch (e) {
            return '';
          }
        }, "assign");
        ExhManager.prototype._setStorage = cc11001100_hook("ExhManager.prototype._setStorage", function (name, value) {
          try {
            localStorage.setItem(lsPrefix + name, '' + value);
          } catch (e) {}
        }, "assign");
        return ExhManager;
      }(), "var-init");
      return ExhManager;
    });
    ;
    /**
    * @file conf.js
    * @author zhangjingfeng
    *
    * 请严格按照以下顺序定义判断条件
    * 1. page  页面 按照上线模块区分
    * 2. pd    来源 按照入口区分
    * 3. isBox 手百 区分手百内外
    * 4. sid   小流量 区分不同小流量
    *
    * 1, 2, 4 的判断都请写在这里; 3的判断尽量写在本文件中
    *
    * 本文件用于临时干预, 任何diff都应该抽象为组件的配置, 请牢记组件化初衷!
    */
    define('rmbGrowth/ext/conf', ['rmbGrowth/tools/box'], function (box) {
      var navigator = cc11001100_hook("navigator", window.navigator || {}, "var-init");
      var opt = cc11001100_hook("opt", {
        page: cc11001100_hook("page", '', "object-key-init"),
        pd: cc11001100_hook("pd", '', "object-key-init"),
        isBox: cc11001100_hook("isBox", / baiduboxapp\//i.test(navigator.userAgent), "object-key-init"),
        sid: cc11001100_hook("sid", '', "object-key-init")
      }, "var-init");
      var config = function (opts) {
        box.assureOpenBox();
        for (var index in opt) {
          if (opt.hasOwnProperty(index) && undefined !== opts[index]) {
            opt[index] = cc11001100_hook("opt[index]", opts[index], "assign");
          }
        }
      };
      var PAGE = cc11001100_hook("PAGE", {
        VIDEOM: cc11001100_hook("VIDEOM", 'videom', "object-key-init"),
        VIDEOAE: cc11001100_hook("VIDEOAE", 'videoae', "object-key-init"),
        WISEFEED: cc11001100_hook("WISEFEED", 'wisefeed', "object-key-init"),
        VIDEOUI: cc11001100_hook("VIDEOUI", 'videoui', "object-key-init"),
        CHANNEL: cc11001100_hook("CHANNEL", 'channel', "object-key-init"),
        WISETAB: cc11001100_hook("WISETAB", 'wisetab', "object-key-init")
      }, "var-init");
      var PD = cc11001100_hook("PD", {
        WISENATURAL: cc11001100_hook("WISENATURAL", 'wise_natural', "object-key-init"),
        SHARE: cc11001100_hook("SHARE", 'share', "object-key-init")
      }, "var-init");
      var getWhiteList = function (funcName, funcArgs) {
        // 白名单, 不管其他条件, 满足即可生效, 不满足维持现状
        // eg. 1.videoui 手百下自然结果出红包模板 2.修改videoui轮展策略
        var whiteList = cc11001100_hook("whiteList", {
          // 'redPacket': opt.isBox && opt.pd === PD.WISENATURAL && opt.page === PAGE.VIDEOUI,
          // 'videouiShowAroundStrategy': function () {
          //     if (opt.page === PAGE.VIDEOUI) return {bdbox:0, haokan: 1};
          //     return '';
          // }
        }, "var-init");
        if (funcName && whiteList[funcName]) {
          return typeof whiteList[funcName] === 'function' ? whiteList[funcName](funcArgs) : whiteList[funcName];
        }
      };
      var getBlackList = function (funcName, funcArgs) {
        // 黑名单, 不管其他条件, 满足即应禁止, 不满足则维持现状
        var blackList = cc11001100_hook("blackList", {
          // 'redPacket': opt.isBox && opt.pd === PD.WISENATURAL && opt.page === PAGE.VIDEOUI,
          // 'videouiShowAroundStrategy': function () {
          //     if (opt.page === PAGE.VIDEOUI) return {bdbox:0, haokan: 1};
          //     return '';
          // }
        }, "var-init");
        if (funcName && blackList[funcName]) {
          return typeof blackList[funcName] === 'function' ? blackList[funcName](funcArgs) : blackList[funcName];
        }
      };
      return {
        config: cc11001100_hook("config", config, "object-key-init"),
        getWhiteList: cc11001100_hook("getWhiteList", getWhiteList, "object-key-init"),
        getBlackList: cc11001100_hook("getBlackList", getBlackList, "object-key-init")
      };
    });
    ;
    /* globals defineBranchModule */
    defineBranchModule('ext');
    /* globals defineLeafModules */
    defineLeafModules(['exhibitionManager', 'conf']);
  }();
  ;
  /**
  * @file invoke/index
  * @author zhangjingfeng
  */

  !function () {
    /**
    * @file invokeApp 核心调起模块
    * @author pankeyu zhangjingfeng
    * @date 2017-07-24
    */

    define('rmbGrowth/invoke/invokeApp', ['rmbGrowth/invoke/appAdDownload'], function (appAdDownload) {
      /**
       * 注入boxJS
       *
       * @private
       * @param {Object} injectBoxJSOption 整合boxjs与box
       * @param {Object} injectBoxJSOption.boxJS boxjs
       * @param {Object}injectBoxJSOption.box box
       * @return {Object} boxjs
       */
      function getBoxJS(injectBoxJSOption) {
        cc11001100_hook("injectBoxJSOption", injectBoxJSOption, "function-parameter");
        var boxJS = cc11001100_hook("boxJS", injectBoxJSOption && injectBoxJSOption.boxJS || window.BoxJS, "var-init");
        var box = cc11001100_hook("box", injectBoxJSOption && injectBoxJSOption.box || window.Box, "var-init");
        if (!box && !boxJS) {
          return null;
        }
        return {
          isBox: function () {
            if (boxJS) {
              return !!boxJS.isBox;
            }
            return !!box.isBox;
          },
          invokeAndroid: function () {
            if (boxJS) {
              boxJS.invokeAndroid.apply(boxJS, arguments);
            }
            box && box.android && box.android.invokeApp && box.android.invokeApp.apply(box.android, arguments);
          },
          versionCompare: function (v1, v2) {
            if (boxJS) {
              return boxJS.version_compare.apply(boxJS, arguments);
            }
            return box.version_compare.apply(boxJS, arguments) || 0;
          },
          getVersion: function () {
            if (boxJS) {
              return boxJS.getVersion();
            }
            return box.version;
          }
        };
      }

      // var innerModules;

      var invokeApp = cc11001100_hook("invokeApp", {
        errorUrl: cc11001100_hook("errorUrl", 'https://m.baidu.com', "object-key-init"),
        opts: {
          // 初始到剪切板的选择器
          hasInitedClipboardSelectorList: cc11001100_hook("hasInitedClipboardSelectorList", [], "object-key-init")
        },
        /**
         * 手百新调起函数
         *
         * @param {Object} action 调起行为
         * @param {Object} params 调起参数
         * @param {Function} callback 回调
         */
        newInvoke: function (action, params, callback) {
          if (!action || !(window.Box && window.Box.isBox)) {
            return;
          }
          var url = cc11001100_hook("url", [], "var-init");
          if ($.isFunction(params)) {
            callback = cc11001100_hook("callback", params, "assign");
          } else {
            for (var i in params) {
              if (params.hasOwnProperty(i)) {
                url.push(i + '=' + params[i]);
              }
            }
          }
          if ($.isFunction(callback)) {
            var funcName = cc11001100_hook("funcName", '_bdbox_js_' + $.getId(), "var-init");
            window[funcName] = cc11001100_hook("window[funcName]", function () {
              callback.apply(window, [].slice.call(arguments, 0));
            }, "assign");
            url.push('callback=' + funcName);
          } else {
            if (callback) {
              url.push('callback=' + callback);
            }
          }
          url = cc11001100_hook("url", 'baiduboxapp://' + action + '?' + url.join('&'), "assign");
          var $node = cc11001100_hook("$node", document.createElement('iframe'), "var-init");
          $node.style.display = cc11001100_hook("$node.style.display", 'none', "assign");
          $node.src = cc11001100_hook("$node.src", url, "assign");
          var body = cc11001100_hook("body", document.body || document.getElementsByTagName('body')[0], "var-init");
          body.appendChild($node);
          // 销毁 iframe
          setTimeout(function () {
            body.removeChild($node);
            $node = cc11001100_hook("$node", null, "assign");
          }, 0);
        },
        /**
         * 判断是否为safari浏览器
         *
         * @public
         * @return {boolean} 是否为safari浏览器
         */
        isSafari: function () {
          var ua = cc11001100_hook("ua", window.navigator.userAgent, "var-init");
          /* eslint-disable max-len */
          var ret = cc11001100_hook("ret", ua.match(/(MSIE|(?!Gecko.+)Firefox|(?!AppleWebKit.+Chrome.+)Safari|(?!AppleWebKit.+)Chrome|AppleWebKit(?!.+Chrome|.+Safari)|Gecko(?!.+Firefox))(?: |\/)([\d\.apre]+)/), "var-init");
          /* eslint-enable max-len */
          var likeSafari = cc11001100_hook("likeSafari", false, "var-init");
          if (ret && ret[1] && ret[1].toLowerCase() === 'safari') {
            likeSafari = cc11001100_hook("likeSafari", true, "assign");
          }
          /* eslint-disable max-len */
          return likeSafari && !/CriOS|UCBrowser|fxiOS|QHBrowser|MQQBrowser|baidubrowser|MicroMessenger|SogouMobileBrowser/i.test(ua);
          /* eslint-enable max-len */
        },

        /**
         * 判断是否为手百浏览器
         *
         * @public
         * @return {boolean} 是否为手百浏览器
         */
        isBox: function () {
          return / baiduboxapp/.test(navigator.userAgent);
        },
        /**
         * 判断是否大于给出的手百版本号
         *
         * @param {string} base 基准版本号
         * @return {number} 1：大于等于 ，0：小于， -1：无法判断
         */
        boxVerCompare: function (base) {
          var boxUtils = cc11001100_hook("boxUtils", window.Box || window.BoxJS, "var-init");
          if (boxUtils) {
            return boxUtils.version_compare(boxUtils.version || boxUtils.getVersion(), base) >= 0 ? 1 : 0;
          }
          return -1;
        },
        /**
         * 判断是否为uc浏览器
         *
         * @public
         * @return {boolean} 是否为uc浏览器
         *
         * */
        isUc: function () {
          var ua = cc11001100_hook("ua", window.navigator.userAgent, "var-init");
          return /UCBrowser|UCWeb/.test(ua);
        },
        /**
         * 有每日最大调起次数的限制。
         * 存入localStorage的格式为:当前日期_调起次数
         *
         * @private
         * @param {Object} option 调起次数相关配置
         * @param {string} option.lsKey localStorage的key
         * @param {string} option.cnt 每日调起次数的限制
         * @return {boolean} 为true是表示可以吊起
         */
        invokeCntPerDay: function (option) {
          var needInvokeLanding = cc11001100_hook("needInvokeLanding", true, "var-init");
          var lsKey = cc11001100_hook("lsKey", option.lsKey + '_' + option.app, "var-init");
          var cnt = cc11001100_hook("cnt", option.cnt, "var-init");
          var lsVal = cc11001100_hook("lsVal", '', "var-init");
          var today = cc11001100_hook("today", '', "var-init");
          var todayCnt = cc11001100_hook("todayCnt", '', "var-init");
          var getDate = function (day) {
            return '' + day.getYear() + day.getMonth() + day.getDate();
          };
          try {
            if (lsVal = cc11001100_hook("lsVal", localStorage.getItem(lsKey), "assign")) {
              today = cc11001100_hook("today", lsVal.split('_')[0], "assign");
              todayCnt = cc11001100_hook("todayCnt", lsVal.split('_')[1], "assign");
              if (cnt === 'MAX') {
                needInvokeLanding = cc11001100_hook("needInvokeLanding", true, "assign");
              } else {
                if (getDate(new Date()) === today) {
                  // 同一天进入
                  needInvokeLanding = cc11001100_hook("needInvokeLanding", parseInt(todayCnt, 10) < parseInt(cnt, 10), "assign");
                  todayCnt = cc11001100_hook("todayCnt", parseInt(todayCnt, 10) + 1 + '', "assign");
                  localStorage.setItem(lsKey, today + '_' + todayCnt);
                } else {
                  // 第二天进入
                  localStorage.setItem(lsKey, getDate(new Date()) + '_' + '1');
                  needInvokeLanding = cc11001100_hook("needInvokeLanding", true, "assign");
                }
              }
            } else {
              // 首次访问
              localStorage.setItem(lsKey, getDate(new Date()) + '_' + '1');
              needInvokeLanding = cc11001100_hook("needInvokeLanding", cnt !== '0', "assign");
            }
          } catch (err) {
            // 无痕模式
            needInvokeLanding = cc11001100_hook("needInvokeLanding", true, "assign");
          }
          return needInvokeLanding;
        },
        /**
         * 一天只吊起一次,外部可以直接使用。
         *
         * @public
         * @param {string} lskey localStorage的key
         * @return {boolean} needInvokeLanding 为true是表示可以吊起
         */
        onceEveryDay: function (lskey) {
          var needInvokeLanding = cc11001100_hook("needInvokeLanding", true, "var-init");
          var lsKey = cc11001100_hook("lsKey", lskey, "var-init");
          var getDate = function (day) {
            return '' + day.getYear() + day.getMonth() + day.getDate();
          };
          try {
            if (localStorage.getItem(lsKey)) {
              if (getDate(new Date()) === localStorage.getItem(lsKey)) {
                // 当天再次打开不调起
                needInvokeLanding = cc11001100_hook("needInvokeLanding", false, "assign");
              } else {
                // 第二天打开更新时间戳
                localStorage.setItem(lsKey, getDate(new Date()));
              }
            } else {
              // 第一次进来新增时间戳
              localStorage.setItem(lsKey, getDate(new Date()));
            }
          } catch (err) {
            // 无痕模式
            needInvokeLanding = cc11001100_hook("needInvokeLanding", false, "assign");
          }
          return needInvokeLanding;
        },
        /**
         * 获取url中的参数
         *
         * @private
         * @param {string} url 需要解析的url
         * @return {Object} args
         */
        getQuery: function (url) {
          url = cc11001100_hook("url", url ? url : window.location.search, "assign");
          if (url.indexOf('?') < 0) {
            return {};
          }
          var queryParam = cc11001100_hook("queryParam", url.substring(url.indexOf('?') + 1, url.length).split('&'), "var-init");
          var args = cc11001100_hook("args", {}, "var-init");
          for (var i = cc11001100_hook("i", 0, "var-init"), j; j = cc11001100_hook("j", queryParam[i], "assign"); i++) {
            args[j.substring(0, j.indexOf('='))] = cc11001100_hook("args[j.substring(0, j.indexOf('='))]", decodeURIComponent(j.substring(j.indexOf('=') + 1, j.length)), "assign");
          }
          return args;
        },
        /**
         * 更新一个对象的值,并返回一个新的对象
         *
         * @private
         * @param {Object} oldObj 被更新的对象
         * @param {Object} newObj 需要更新的值
         * @return {Object} finalObj 新对象
         */
        mergeObject: function (oldObj, newObj) {
          var finalObj = cc11001100_hook("finalObj", {}, "var-init");
          for (var i in oldObj) {
            if (oldObj.hasOwnProperty(i)) {
              finalObj[i] = cc11001100_hook("finalObj[i]", newObj[i] ? newObj[i] : oldObj[i], "assign");
            }
          }
          for (var j in newObj) {
            if (newObj.hasOwnProperty(j) && !oldObj[j]) {
              finalObj[j] = cc11001100_hook("finalObj[j]", newObj[j], "assign");
            }
          }
          return finalObj;
        },
        /**
         * 判断变量是否为一个对象
         *
         * @private
         * @param {Object} obj 需要进行判断的变量
         * @return  {boolean}
         */
        isObject: function (obj) {
          if (!obj) {
            return false;
          }
          return Object.prototype.toString.call(obj) === '[object Object]';
        },
        /**
         * 判断是否微信访问
         *
         * @private
         * @return  {boolean}
         */
        isWeChat: function () {
          return /MicroMessenger/i.test(navigator.userAgent.toLowerCase());
        },
        /**
         * 判断当前系统是否为iOS9以上(包括iOS9)
         *
         * @private
         * @return  {boolean}
         */
        isIos9: function () {
          if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i)) {
            var version = cc11001100_hook("version", parseInt(navigator.userAgent.replace(/^.*OS ([\d_]+) like.*$/, '$1').split('_')[0], 10), "var-init");
            return Boolean(version > 8);
          }
          return false;
        },
        /**
         * 判断是否为手机QQ
         *
         * @private
         * @return  {boolean}
         */
        isMobileQQ: function () {
          return /^(?!.*Safari).*QQ/.test(navigator.userAgent);
        },
        /**
         * 判断是否为QQ浏览器
         *
         * @private
         * @return  {boolean}
         */
        isQQBrowser: function () {
          return /MQQBrowser/i.test(navigator.userAgent);
        },
        /**
         * 判断是否为iOS
         *
         * @private
         * @return  {boolean}
         */
        isIos: function () {
          return /iphone|ipad|ipod/i.test(navigator.userAgent);
        },
        /**
         * 判断是否为Android
         *
         * @private
         * @return  {boolean}
         */
        isAndroid: function () {
          return /android/i.test(navigator.userAgent);
        },
        /**
         * 拼接手百视频落地页地址
         *
         * @private
         * @param {string} id 视频的id,可以为locid,或者为nid
         * @param {Object} source 额外的参数,主要用于统计
         * @param {boolean} noInvokeVideo 是否调起播放器.用于安卓拼返回频道scheme
         * @return {string} landUrl 手百视频落地页地址
         */
        getBdLandUrl: function (id, source, noInvokeVideo) {
          var obj;
          if (id.indexOf('internal') > -1) {
            obj = cc11001100_hook("obj", {
              /* eslint-disable fecs-camelcase */
              internal_url: cc11001100_hook("internal_url", id, "object-key-init")
              /* eslint-enable fecs-camelcase */
            }, "assign");
          } else {
            obj = cc11001100_hook("obj", {
              nid: cc11001100_hook("nid", id.indexOf('sv') > -1 ? id : 'sv_' + id, "object-key-init")
            }, "assign");
          }
          var extra = cc11001100_hook("extra", '&backflow=1', "var-init");
          if (this.isObject(source)) {
            for (var i in source) {
              if (source.hasOwnProperty(i)) {
                extra += cc11001100_hook("extra", '&' + i + '=' + source[i], "assign");
              }
            }
          }
          if (noInvokeVideo) {
            extra += cc11001100_hook("extra", '&no_invoke_video=1', "assign");
          }
          var landUrl = cc11001100_hook("landUrl", 'https://sv.baidu.com/videoui/page/videoland?' + 'context=' + encodeURIComponent(JSON.stringify(obj)) + extra, "var-init");
          return landUrl;
        },
        /**
         * 拼接手百iOS吊起scheme,用于手百吊起组件
         *
         * @private
         * @param {string} id 视频的id,可以为locid,或者为nid
         * @param {Object} source 额外的参数,主要用于统计
         * @return {string} iosScheme 传入手百组件的手百iOS吊起scheme
         */
        getBdIOSV80Scheme: function (id, source) {
          var landUrl = cc11001100_hook("landUrl", this.getBdLandUrl(id, source), "var-init");
          var iosSheme = cc11001100_hook("iosSheme", 'baiduboxapp://easybrowse?' + 'openurl=' + encodeURIComponent(landUrl) + '&opentype=1' + '&isla=0' + '&type=video' + '&page_type=empty' + '&newbrowser=1' + '&sfrom=feed' + '&append=1' + '&stay=1' + '&minver=6.0.0.0' + '&toolbaricons=%7B%22toolids%22%3A%5B%221%22%2C%222%22%2C%223%22%5D%7D' + '&menumode=2', "var-init");
          return iosSheme;
        },
        /**
         * 拼接手百Android吊起cmd,用于手百吊起组件
         *
         * @private
         * @param {string} id 视频的id,可以为locid,或者为nid
         * @param {Object} source 额外的参数,主要用于统计
         * @return {Object} andrCmd 传入手百组件的手百Android吊起cmd
         */
        getBdAndrCmd: function (id, source) {
          var landUrl = cc11001100_hook("landUrl", this.getBdLandUrl(id, source), "var-init");
          /* eslint-disable max-len */
          var intent = cc11001100_hook("intent", 'intent:#Intent;component=com.baidu.searchbox/.home.feed.ShortVideoDetailActivity;B.bdsb_append_param=true;S.bdsb_light_start_url=' + encodeURIComponent(landUrl) + ';S.toolbaricons=%7B%22toolids%22%3A%5B%221%22%2C%222%22%2C%223%22%5D%7D;S.menumode=2;end', "var-init");
          /* eslint-enable max-len */
          var andrCmd = cc11001100_hook("andrCmd", {
            mode: cc11001100_hook("mode", '0', "object-key-init"),
            intent: cc11001100_hook("intent", intent, "object-key-init"),
            /* eslint-disable fecs-camelcase */
            min_v: cc11001100_hook("min_v", '16787968', "object-key-init")
            /* eslint-enable fecs-camelcase */
          }, "var-init");
          return andrCmd;
        },
        /**
         * 拼接手百双端吊起scheme,仅限8.2以上
         *
         * @private
         * @param {string} id 视频的id,可以为locid,或者为nid
         * @param {Object} source 额外的参数,主要用于统计
         * @param {boolean} noInvokeVideo 是否禁止调起播放器.仅限android h5落地页->NA频道->NA落地页的方式使用
         * @return {string} iosScheme 传入手百组件的手百iOS吊起scheme
         */
        getBdV82Scheme: function (id, source, noInvokeVideo) {
          var landUrl = cc11001100_hook("landUrl", this.getBdLandUrl(id, source, noInvokeVideo), "var-init");
          var scheme = cc11001100_hook("scheme", 'baiduboxapp://v1/easybrowse/open?' + 'upgrade=1' + '&type=video' + '&url=' + encodeURIComponent(landUrl) + '&append=1' + '&slog=%7b%22from%22%3a%22feed%22%7d'
          /* eslint-disable max-len */ + '&style=%7b%22toolbaricons%22%3a%7b%22toolids%22%3a%5b%221%22%2c%222%22%2c%223%22%5d%7d%2c+%22menumode%22%3a%222%22%7d'
          /* eslint-enable max-len */ + '&newbrowser=1' + '&stay=1', "var-init");
          return scheme;
        },
        /**
         * 拼接手百Android吊起cmd,可直接进行吊起
         *
         * @private
         * @param {Object} cmd 视频的id,可以为locid,或者为nid
         * @return {string} invokeCmd 手百Android吊起cmd
         */
        getBdAndrInvokeCmd: function (cmd) {
          /* eslint-disable max-len */
          var params = cc11001100_hook("params", '{"intent":"intent:#Intent;action=com.baidu.searchbox.action.HOME;component=com.baidu.searchbox\/.MainActivity', "var-init");
          params = cc11001100_hook("params", params + ';S.targetCommand=' + encodeURIComponent(JSON.stringify(cmd)) + ';end"}', "assign");
          var invokeCmd = cc11001100_hook("invokeCmd", 'baiduboxapp://utils?action=sendIntent&minver=7.4&params=' + encodeURIComponent(params), "var-init");
          return invokeCmd;
          /* eslint-enable max-len */
        },

        /**
         * 拼接NA落地页吊起scheme,双端9.1支持. 但是只支持id调起
         *
         * @private
         * @param {string} id 视频的id,可以为locid,或者为nid
         * @param {string} playurl 视频的播放地址,安卓必需.注意防盗链风险
         * @param {string} pd 视频的来源渠道
         * @param {string} pagepd 视频的调起渠道
         * @return {string} invokeCmd 手百Android吊起cmd
         */
        getBdNALandScheme: function (id, playurl, pd, pagepd) {
          pd = cc11001100_hook("pd", pd || 'growth', "assign");
          var protocol = cc11001100_hook("protocol", 'baiduboxapp://v8/video/invokeVideoLandingPage', "var-init");
          var params = cc11001100_hook("params", {
            vid: cc11001100_hook("vid", '' + id, "object-key-init"),
            videoInfo: {
              /* eslint-disable fecs-camelcase */
              ext_log: {
                pd: cc11001100_hook("pd", pd || '', "object-key-init"),
                pagepd: cc11001100_hook("pagepd", pagepd || '', "object-key-init")
              },
              /* eslint-enable fecs-camelcase */
              ext: {
                clarityUrl: cc11001100_hook("clarityUrl", [{
                  key: cc11001100_hook("key", 'sd', "object-key-init"),
                  rank: cc11001100_hook("rank", 0, "object-key-init"),
                  title: cc11001100_hook("title", '标清', "object-key-init"),
                  url: cc11001100_hook("url", playurl, "object-key-init")
                }], "object-key-init")
              }
            },
            pd: cc11001100_hook("pd", pd, "object-key-init")
          }, "var-init");
          var tail = cc11001100_hook("tail", '&toolbaricons=%7B%22toolids%22%3A%5B%224%22%2C%221%22%2C%222%22%2C%223%22%5D%7D&menumode=2', "var-init");
          return protocol + '?params=' + encodeURIComponent(JSON.stringify(params)) + tail;
        },
        /**
         * 拼接手百iOS调起H5落地页返回NA视频频道scheme
         *
         * @private
         * @param {string} id 视频的id,可以为locid,或者为nid
         * @param {Object} source 额外的参数,主要用于统计
         * @return {string} scheme 手百iOS吊起scheme
         */
        getBdIOSBackChannelScheme: function (id, source) {
          var landScheme = cc11001100_hook("landScheme", this.getBdV82Scheme(id, source, false), "var-init");
          var naChannelScheme = cc11001100_hook("naChannelScheme", 'baiduboxapp://v11/appTab/select?item=video&upgrade=0&delaytime=0.6', "var-init");
          return landScheme + '&prev=' + encodeURIComponent(naChannelScheme);
        },
        /**
         * 拼接手百android调起scheme, NA落地页返回NA视频频道,低版本调起h5落地页
         *
         * @private
         * @param {string} id 视频的id,可以为locid,或者为nid
         * @param {Object} source 额外的参数,主要用于统计
         * @param {string} [playurl] 视频的url,视频播放地址
         * @return {string} scheme 手百iOS吊起scheme
         */
        getBdAndrBackChannelScheme: function (id, source, playurl) {
          // 手机百度在三星下有坑, 部分三星旧手机预装了8.1手百,会拦截高版本手百协议
          var isSamsung = cc11001100_hook("isSamsung", /\(.*Android.*(SAMSUNG|SM-).*\)/.test(navigator.userAgent), "var-init");
          if (isSamsung) {
            return this.getBdAndrCmd(id, source);
          }
          var naChannelScheme = cc11001100_hook("naChannelScheme", 'baiduboxapp://v11/appTab/select?item=video&upgrade=0', "var-init");
          var landScheme = cc11001100_hook("landScheme", this.getBdV82Scheme(id, source, true), "var-init");
          var landSchemeInvoke = cc11001100_hook("landSchemeInvoke", this.getBdV82Scheme(id, source, false), "var-init");
          // var naLandScheme = this.getBdNALandScheme(id, playurl, 'growth', source && source.pagepd);
          return landScheme + '&next=' + encodeURIComponent(naChannelScheme + '&next=' + encodeURIComponent(landSchemeInvoke));
        },
        /**
         * 拼接手百iOS调起scheme, H5落地页返回搜索页
         *
         * @private
         * @param {string} id 视频的id,可以为locid,或者为vid
         * @param {Object} source 额外的参数,主要用于统计
         * @param {string} query 搜索query
         * @return {string} scheme 手百iOS吊起scheme
         */
        getBdIOSBackSearchScheme: function (id, source, query) {
          var backSearchScheme = cc11001100_hook("backSearchScheme", this.getBdIOSV80Scheme(id, source) + '&prev=' + encodeURIComponent('baiduboxapp://v1/browser/search?query=' + encodeURIComponent(query)), "var-init");
          return backSearchScheme;
        },
        /**
         * 拼接好看iOS吊起通用链接,可直接进行吊起
         *
         * @private
         * @param {string} id 视频的locid
         * @param {Object} source 额外的参数,主要用于统计
         * @return {string} baseUrl 好看的吊起通链
         */
        getHkUrl: function (id, source, failUrl) {
          var baseUrl = cc11001100_hook("baseUrl", 'https://hku.baidu.com/h5/share/detail?url_key=' + encodeURIComponent(id), "var-init");
          if (failUrl) {
            baseUrl += cc11001100_hook("baseUrl", '&target=' + encodeURIComponent(failUrl), "assign");
          }
          if (this.isObject(source)) {
            for (var i in source) {
              if (source.hasOwnProperty(i)) {
                baseUrl += cc11001100_hook("baseUrl", '&' + i + '=' + source[i], "assign");
              }
            }
          }
          return baseUrl;
        },
        getHkMiniUrl: function (id, source, failUrl, vi) {
          var scheme = cc11001100_hook("scheme", encodeURIComponent('bdminivideo://video/details?source=guide-wisexspskpdq-0&params=%7B%22slog%22%3A%5B%5D%2C%22vid%22%3A%22' + id + '%22%2C%22hasMore%22%3A1%2C%22feedext%22%3A%22%7B%5C%22vid%5C%22%3A%5C%22' + id + '%5C%22%2C%5C%22source%5C%22%3A%5C%22guide-wisexspskpdq-0%5C%22%7D%22%7D&tab=guide&tag=wisexspskp'), "var-init");
          var taregtUrl = cc11001100_hook("taregtUrl", 'https%3A%2F%2Fitunes.apple.com%2Fcn%2Fapp%2F%25E5%2585%25A8%25E6%25B0%2591%25E5%25B0%258F%25E8%25A7%2586%25E9%25A2%2591%2Fid1329385145%3Fmt%3D8', "var-init");
          if (failUrl) {
            taregtUrl = cc11001100_hook("taregtUrl", encodeURIComponent(failUrl), "assign");
          }
          var baseUrl = cc11001100_hook("baseUrl", 'https://vv.baidu.com/feedvideoui/ulink?scheme=' + scheme + '&target=' + taregtUrl, "var-init");
          return baseUrl;
        },
        /**
         * 拼接好看Android吊起scheme,可直接进行吊起
         *
         * @private
         * @param {string} id 视频的locid
         * @param {Object} source 额外的参数,主要用于统计
         * @return {string} baseUrl 好看的吊起scheme
         */
        getHkScheme: function (id, source) {
          var baseUrl = cc11001100_hook("baseUrl", 'baiduhaokan://video/details/?url_key=' + encodeURIComponent(id), "var-init");
          if (this.isObject(source)) {
            for (var i in source) {
              if (source.hasOwnProperty(i)) {
                baseUrl += cc11001100_hook("baseUrl", '&' + i + '=' + source[i], "assign");
              }
            }
          }
          return baseUrl;
        },
        getHkMiniScheme: function (id, source, vi) {
          var baseUrl = cc11001100_hook("baseUrl", 'baiduhaokan://minivideo/videodetails/?vid=' + id + (vi ? '&videoInfo=' + encodeURIComponent(vi) : ''), "var-init");
          if (this.isObject(source)) {
            for (var i in source) {
              if (source.hasOwnProperty(i)) {
                baseUrl += cc11001100_hook("baseUrl", '&' + i + '=' + source[i], "assign");
              }
            }
          }
          return baseUrl;
        },
        /**
         * 拼接吊起universal link,可直接进行吊起
         *
         * @private
         * @param {string} app app类型
         * @param {Object} opts 拼接ulink时需要的参数,因app而已;
         * @return {string} ulink app的吊起通链。默认返回好看
         */
        getUniversalLink: function (app, opts) {
          switch (app) {
            case 'HaoKan':
              return this.getHkUrl(opts.id, opts.source, opts.failUrl);
            default:
              return this.getHkUrl(opts.id, opts.source, opts.failUrl);
          }
        },
        getMiniUniversalLink: function (app, opts) {
          switch (app) {
            case 'HaoKan':
              return this.getHkMiniUrl(opts.id, opts.source, opts.failUrl, opts.vi);
            default:
              return this.getHkMiniUrl(opts.id, opts.source, opts.failUrl, opts.vi);
          }
        },
        /**
         * 拼接吊起scheme, 可直接进行吊起
         *
         * @private
         * @param {string} app app类型
         * @param {Object} opts 拼接ulink时需要的参数,因app而已;
         * @return {string} scheme app的吊起scheme 。默认返回好看
         */
        getScheme: function (app, opts) {
          switch (app) {
            case 'HaoKan':
              return this.getHkScheme(opts.id, opts.source);
            default:
              return this.getHkUrl(opts.id, opts.source);
          }
        },
        getMiniScheme: function (app, opts) {
          var baseUrl = cc11001100_hook("baseUrl", 'bdminivideo://video/details?source=guide-wisexspskpdq-0&params=%7B%22slog%22%3A%5B%5D%2C%22vid%22%3A%22' + opts.id + '%22%2C%22hasMore%22%3A1%2C%22feedext%22%3A%22%7B%5C%22vid%5C%22%3A%5C%22' + opts.id + '%5C%22%2C%5C%22source%5C%22%3A%5C%22guide-wisexspskpdq-0%5C%22%7D%22%7D&tab=guide&tag=wisexspskp', "var-init");
          return baseUrl;
        },
        /**
         * 跳转到相应的app下载地址
         *
         * @private
         * @param {Object} downloadInfo 下载链接
         * @param {string} downloadInfo.ios appStore的下载链接
         * @param {string} downloadInfo.yybao 应用宝下的下载链接
         * @param {string} downloadInfo.pkgurl 安卓apk的下载链接
         * @param {string} downloadInfo.pkgName 安卓apk包名
         * @param {Object} [options] 下载参数
         * @param {Object} [options.isOpenBdAppSearch] 是否用手助下载,默认否
         * @param {Object} [data] 下载数据
         */
        jump: function (downloadInfo, options, data) {
          var self = cc11001100_hook("self", this, "var-init");
          if (!this.isObject(downloadInfo)) {
            console.warn('If you want to download the app, downloadinfo is required as an object');
            return;
          }
          if (this.isAndroid() && window.__vrandom && this.isBox() && parseFloat(window.BoxJS.getVersion()) >= 9.3) {
            appAdDownload.init(downloadInfo);
            return;
          }
          if (this.isWeChat() || this.isMobileQQ()) {
            setTimeout(function () {
              window.location.href = cc11001100_hook("window.location.href", downloadInfo.yybao || self.errorUrl, "assign");
            });
          } else if (this.isIos() && !(this.isWeChat() || this.isMobileQQ())) {
            setTimeout(function () {
              window.location.href = cc11001100_hook("window.location.href", downloadInfo.ios || self.errorUrl, "assign");
            });
          } else if (this.isAndroid() && this.isBox() && options && options.isOpenBdAppSearch && downloadInfo.pkgName) {
            this.isBdAppSearchInstalled(function (isInstalled) {
              if (isInstalled) {
                self.openBdAppSearch({
                  pkgName: cc11001100_hook("pkgName", downloadInfo.pkgName, "object-key-init")
                });
              } else {
                setTimeout(function () {
                  window.location.href = cc11001100_hook("window.location.href", downloadInfo.yybao || self.errorUrl, "assign");
                });
              }
            });
          } else if (this.isAndroid() && !this.isWeChat() && !this.isMobileQQ()) {
            if (downloadInfo.pkgName) {
              self.goToAppStore(downloadInfo, data);
              return;
            }
            setTimeout(function () {
              window.location.href = cc11001100_hook("window.location.href", downloadInfo.pkgurl || self.errorUrl, "assign");
            });
          } else {
            setTimeout(function () {
              window.location.href = cc11001100_hook("window.location.href", downloadInfo.pkgurl || self.errorUrl, "assign");
            });
          }
        },
        /**
         * 前端拼接吊起ulink,scheme等。data.action.id !==undefined 时,认为是前端自己拼接吊起参数,会进入到该函数逻辑。
         *
         * @private
         * @param {Object} data 吊起相关参数
         * @param {Object} data.action 吊起核心参数。
         * @param {Object} data.downloadInfo 下载信息。
         * @param {Object} data.pagepd 渠道相关信息。统计相关。
         */
        selfHandle: function (data) {
          var action = cc11001100_hook("action", data.action, "var-init");
          var pagepd = cc11001100_hook("pagepd", data.pagepd, "var-init");
          var locid = cc11001100_hook("locid", action.id, "var-init");
          var playurl = cc11001100_hook("playurl", action.playurl, "var-init");
          var ulink = cc11001100_hook("ulink", '', "var-init");
          var scheme = cc11001100_hook("scheme", '', "var-init");
          var obj = cc11001100_hook("obj", {}, "var-init");
          var source = cc11001100_hook("source", {}, "var-init");
          var isMini = cc11001100_hook("isMini", data.mini || false, "var-init");
          if (action.app === 'BdBox') {
            source = cc11001100_hook("source", {
              backflow: cc11001100_hook("backflow", '1', "object-key-init")
            }, "assign");
            pagepd && pagepd.pagepd && (source.pagepd = cc11001100_hook("source.pagepd", pagepd.pagepd, "assign")) && (source.pagepdSid = cc11001100_hook("source.pagepdSid", pagepd.pagepdSid, "assign"));
            if (action.searchQuery) {
              scheme = cc11001100_hook("scheme", this.isIos() ? this.getBdIOSBackSearchScheme(locid, source, action.searchQuery) : this.getBdAndrCmd(locid, source), "assign");
            } else if (/^\d+$/.test(locid)) {
              scheme = cc11001100_hook("scheme", this.isIos() ? this.getBdIOSBackChannelScheme(locid, source) : this.getBdAndrBackChannelScheme(locid, source, playurl), "assign");
            } else {
              scheme = cc11001100_hook("scheme", this.isIos() ? this.getBdIOSV80Scheme(locid, source) : this.getBdAndrCmd(locid, source), "assign");
            }
            obj = cc11001100_hook("obj", {
              app: cc11001100_hook("app", action.app, "object-key-init"),
              type: cc11001100_hook("type", action.type || 'invoke', "object-key-init"),
              scheme: cc11001100_hook("scheme", scheme, "object-key-init")
            }, "assign");
          } else if (action.app === 'HaoKan' || !action.app) {
            source = cc11001100_hook("source", {
              tab: cc11001100_hook("tab", 'guide', "object-key-init")
            }, "assign");
            pagepd && pagepd.pagepd && (source.tag = cc11001100_hook("source.tag", pagepd.pagepd, "assign")) && (source.source = cc11001100_hook("source.source", pagepd.source, "assign"));
            if (!isMini) {
              ulink = cc11001100_hook("ulink", this.getUniversalLink(action.app, {
                id: cc11001100_hook("id", locid, "object-key-init"),
                source: cc11001100_hook("source", source, "object-key-init"),
                failUrl: cc11001100_hook("failUrl", action.failUrl || '', "object-key-init")
              }), "assign");
              scheme = cc11001100_hook("scheme", this.getScheme(action.app, {
                id: cc11001100_hook("id", locid, "object-key-init"),
                source: cc11001100_hook("source", source, "object-key-init")
              }), "assign");
            } else {
              // scheme增加可滑动参数
              if (source) {
                source.hasMore = cc11001100_hook("source.hasMore", 1, "assign");
              }
              ulink = cc11001100_hook("ulink", this.getMiniUniversalLink(action.app, {
                id: cc11001100_hook("id", locid, "object-key-init"),
                source: cc11001100_hook("source", source, "object-key-init"),
                failUrl: cc11001100_hook("failUrl", action.failUrl || '', "object-key-init"),
                vi: cc11001100_hook("vi", action.videoInfo, "object-key-init")
              }), "assign");
              scheme = cc11001100_hook("scheme", this.getMiniScheme(action.app, {
                id: cc11001100_hook("id", locid, "object-key-init"),
                source: cc11001100_hook("source", source, "object-key-init"),
                vi: cc11001100_hook("vi", action.videoInfo, "object-key-init")
              }), "assign");
            }
            obj = cc11001100_hook("obj", {
              app: cc11001100_hook("app", action.app, "object-key-init"),
              type: cc11001100_hook("type", action.type || 'invoke', "object-key-init"),
              ulink: cc11001100_hook("ulink", ulink, "object-key-init"),
              scheme: cc11001100_hook("scheme", scheme, "object-key-init")
            }, "assign");
          }
          data.action = cc11001100_hook("data.action", this.mergeObject(data.action, obj), "assign");
          this.autoHandle(data);
        },
        /**
         * 后端传的吊起信息。当 data.action.id === undefined时,认为是后端传的吊起参数,会进入到该函数逻辑。
         *
         * @private
         * @param {Object} data 吊起相关参数
         * @param {Object} data.action  吊起核心参数。
         * @param {Object} data.downloadInfo 下载信息。
         * @param {Object} data.pagepd 渠道相关信息。统计相关。
         */
        autoHandle: function (data) {
          var action = cc11001100_hook("action", data.action, "var-init");
          var appName = cc11001100_hook("appName", action.app, "var-init");
          if (appName === 'channel') {
            this.invokeChannel();
          } else if (appName !== 'BdBox') {
            this.appInvoke(data);
          } else {
            this.bdInvoke(data);
          }
        },
        /**
         * 非手百APP吊起。最核心的吊起机制。
         *
         * @private
         * @param {Object} data 吊起的核心参数
         * @param {Object} data.downloadInfo app下载信息
         * @param {Object} data.downloadInfo app下载信息
         * @param {Object} data.action 吊起的核心参数
         * @param {string} data.action.scheme 吊起scheme。
         * @param {string} data.action.ulink 吊起universal link。
         * @param {string} data.action.type 值为: invoke 或 normalInvoke。type === 'invoke'时, 安卓下吊起失败会引导下载。
         * type === 'normalInvoke'时,安卓下吊起失败【不会】引导下载
         */
        appInvoke: function (data) {
          var self = cc11001100_hook("self", this, "var-init");
          var action = cc11001100_hook("action", data.action, "var-init");
          if (this.isIOSToGrowthByUlik(data)) {
            if (this.isBox()) {
              window.location.href = cc11001100_hook("window.location.href", action.scheme, "assign");
              setTimeout(function () {
                window.location.href = cc11001100_hook("window.location.href", action.ulink, "assign");
              }, 0);
            } else {
              window.location.href = cc11001100_hook("window.location.href", action.ulink, "assign");
            }
          } else {
            if (this.isWeChat() && action.type !== 'normalInvoke') {
              window.location.href = cc11001100_hook("window.location.href", 'http://a.app.qq.com/o/simple.jsp?pkgname=' + (action.pkgName || 'com.baidu.haokan') + '&android_scheme=' + encodeURIComponent(action.scheme), "assign");
            } else {
              var ifr = cc11001100_hook("ifr", document.createElement('iframe'), "var-init");
              ifr.src = cc11001100_hook("ifr.src", action.scheme || action.command, "assign");
              ifr.style.display = cc11001100_hook("ifr.style.display", 'none', "assign");
              document.body.appendChild(ifr);
              window.setTimeout(function () {
                document.body.removeChild(ifr);
                if (action.type !== 'normalInvoke') {
                  if (action.failCallback && typeof action.failCallback === 'function') {
                    action.failCallback();
                  } else {
                    self.jump(data.downloadInfo, {
                      // TODO 将 isOpenBdAppSearch 从downloadInfo中移到options中
                      isOpenBdAppSearch: cc11001100_hook("isOpenBdAppSearch", !!(data.downloadInfo && data.downloadInfo.isOpenBdAppSearch), "object-key-init")
                    }, {
                      goToAppStoreLogCb: cc11001100_hook("goToAppStoreLogCb", action.goToAppStoreLogCb, "object-key-init")
                    });
                  }
                }
              }, 300);
            }
          }
        },
        /**
         * ios下是否使用ulink调起方式
         */
        isIOSToGrowthByUlik: function (data) {
          // ios调起方式：schema，ulink
          var iosGrowthType = cc11001100_hook("iosGrowthType", data.iosGrowthType || '', "var-init");
          if (/MQQBrowser/.test(window.navigator.userAgent)) {
            return false;
          }

          // 强制配置
          if (iosGrowthType === 'schema') {
            return false;
          }

          // ios9以上使用ulink方式
          if (this.isIos9()) {
            return true;
          }
        },
        /**
         * 手百APP吊起。最核心的吊起机制。
         *
         * @private
         * @param {Object} data 吊起相关参数
         * @param {Object} data.action 吊起核心参数
         * @param {string} data.action.type 值为:normalInvoke,表示不会引导下载;值为:invoke,表示正常吊起,吊起失败导下载。
         * @param {string} data.action.app 必须。值为:BdBox
         * @param {Object} data.pagepd 吊起渠道相关。统计需要
         * @param {Object} data.action.extra 额外配置
         * @param {Object} data.action.extra.failUrl data.action.type==='normalInvoke'时必须,传入手百组件的failUrl.
         * @param {Function} data.action.extra.failCallback data.action.type==='normalInvoke'时必须,传入手百组件的failCallback.
         *
         */
        bdInvoke: function (data) {
          var action = cc11001100_hook("action", data.action, "var-init");
          var pagepd = cc11001100_hook("pagepd", data.pagepd, "var-init");
          var openBdBox = cc11001100_hook("openBdBox", null, "var-init");
          var opts = cc11001100_hook("opts", {
            showTip: cc11001100_hook("showTip", false, "object-key-init")
          }, "var-init");
          if (action.app !== 'BdBox') {
            console.warn('Action.app is required for bdInvoke');
            return;
          }
          if (action.searchQuery) {
            opts.backQuery = cc11001100_hook("opts.backQuery", action.searchQuery, "assign");
          }

          // 只进行手百的吊起,不进行下载
          if (action.type === 'normalInvoke') {
            if (!this.isObject(action.extra)) {
              console.warn('Extra info is required for invokeNormal');
              return;
            }
            var failUrl = cc11001100_hook("failUrl", action.extra.failUrl, "var-init");
            var failCallback = cc11001100_hook("failCallback", action.extra.failCallback, "var-init");
            opts.failUrl = cc11001100_hook("opts.failUrl", failUrl, "assign");
            opts.failCallback = cc11001100_hook("opts.failCallback", function () {
              console.log('invoke app failed');
              failCallback && failCallback();
            }, "assign");
          }
          if (this.isIos()) {
            opts.iosScheme = cc11001100_hook("opts.iosScheme", action.scheme, "assign");
          } else {
            opts.androidCommand = cc11001100_hook("opts.androidCommand", action.scheme, "assign");
          }
          pagepd && pagepd.channel && (opts.channel = cc11001100_hook("opts.channel", pagepd.channel, "assign"));
          pagepd && pagepd.from && (opts.from = cc11001100_hook("opts.from", pagepd.from, "assign"));
          var openbox = cc11001100_hook("openbox", window.OpenBox, "var-init");
          if (openbox) {
            openBdBox = cc11001100_hook("openBdBox", openbox(opts), "assign");
            openBdBox.open();
          }
        },
        /**
         * 手百内调起视频频道
         */
        invokeChannel: function () {
          var highVersion91 = cc11001100_hook("highVersion91", this.boxVerCompare('9.1'), "var-init");
          if (highVersion91 === 1) {
            this.newInvoke('v11/appTab/select', {
              item: cc11001100_hook("item", 'video', "object-key-init"),
              upgrade: cc11001100_hook("upgrade", 0, "object-key-init")
            });
          } else if (highVersion91 === 0) {
            this.newInvoke('v1/easybrowse/open', {
              append: cc11001100_hook("append", 1, "object-key-init"),
              newbrowser: cc11001100_hook("newbrowser", 1, "object-key-init"),
              upgrade: cc11001100_hook("upgrade", 1, "object-key-init"),
              url: cc11001100_hook("url", encodeURIComponent('https://sv.baidu.com'), "object-key-init")
            });
          }
        },
        /**
         * 安卓下获取应用商店地址
         *
         * @private
         * @param {Object} downloadInfo
         * @param {string} downloadInfo.pkgName 应用商店包地址, eg. com.baidu.haokan
         * @param {Function} [downloadInfo.goToAppStoreLogCb] 日志回调
         * @param {Array}  [downloadInfo.brandList] 数组,需要使用应用商店调起的品牌名称, 为空表示全部, 目前支持 oppo, huawei, xiaomi, samsung, vivo
         * @param {Object} [data] 调起数据
         */

        goToAppStore: function (downloadInfo, data) {
          var self = cc11001100_hook("self", this, "var-init");
          function gotoDownload(info) {
            cc11001100_hook("info", info, "function-parameter");
            window.location.href = cc11001100_hook("window.location.href", info.pkgurl || self.errorUrl, "assign");
          }
          function invoke(scheme) {
            cc11001100_hook("scheme", scheme, "function-parameter");
            var ifr = cc11001100_hook("ifr", document.createElement('iframe'), "var-init");
            ifr.src = cc11001100_hook("ifr.src", scheme, "assign");
            ifr.style.display = cc11001100_hook("ifr.style.display", 'none', "assign");
            document.body.appendChild(ifr);
            window.setTimeout(function () {
              document.body.removeChild(ifr);
            }, 300);
          }
          if (!downloadInfo.pkgName || downloadInfo.brandList && !downloadInfo.brandList.length) {
            gotoDownload(downloadInfo);
          }
          var ua = cc11001100_hook("ua", navigator.userAgent, "var-init");
          var scheme = cc11001100_hook("scheme", '', "var-init");
          var brand = cc11001100_hook("brand", '', "var-init");
          var downloadFirst = cc11001100_hook("downloadFirst", false, "var-init");
          var brandList = cc11001100_hook("brandList", downloadInfo.brandList || ['xiaomi', 'samsung', 'huawei', 'oppo', 'vivo'], "var-init");
          var supportedBrand = cc11001100_hook("supportedBrand", {
            xiaomi: {
              reg: cc11001100_hook("reg", /\(.*Android.*(MI|Mi|Redmi|HM NOTE| 201\d{4} Build).*\)|Android.*XiaoMi/, "object-key-init"),
              scheme: cc11001100_hook("scheme", 'mimarket://details?id=${0}&back=true', "object-key-init")
            },
            samsung: {
              reg: cc11001100_hook("reg", /\(.*Android.*(SAMSUNG|SM-|GT-).*\)/, "object-key-init"),
              scheme: cc11001100_hook("scheme", 'samsungapps://ProductDetail/${0}', "object-key-init")
            },
            huawei: {
              reg: cc11001100_hook("reg", /\(.*Android.*(HUAWEI|HONOR|HW-|H60-).*\)|^HONOR|^HUAWEI/i, "object-key-init"),
              scheme: cc11001100_hook("scheme", 'appmarket://details?id=${0}', "object-key-init")
            },
            oppo: {
              reg: cc11001100_hook("reg", /Android.*(OPPO|A31.? Build|R\d+(Plus)? Build)|Android.*OppoBrowser|^OPPO/, "object-key-init"),
              scheme: cc11001100_hook("scheme", 'oppomarket://details?packagename=${0}', "object-key-init"),
              downloadFirst: cc11001100_hook("downloadFirst", true, "object-key-init")
            },
            vivo: {
              reg: cc11001100_hook("reg", /\(.*Android.*(vivo|VIVO).*\)/, "object-key-init"),
              scheme: cc11001100_hook("scheme", 'vivomarket://details?id=${0}', "object-key-init")
            }
          }, "var-init");
          brandList.forEach(function (brandName) {
            if (supportedBrand.hasOwnProperty(brandName)) {
              var setting = cc11001100_hook("setting", supportedBrand[brandName], "var-init");
              if (setting.reg.test(ua)) {
                brand = cc11001100_hook("brand", brandName, "assign");
                scheme = cc11001100_hook("scheme", setting.scheme.replace('${0}', downloadInfo.pkgName), "assign");
                downloadFirst = cc11001100_hook("downloadFirst", setting.downloadFirst || false, "assign");
                return false;
              }
            }
          });

          /** 不调起应用商店的浏览器 **/
          var forbidBrowserList = cc11001100_hook("forbidBrowserList", [/liebaofast/ig], "var-init");
          forbidBrowserList.forEach(function (reg) {
            if (reg.test(ua)) {
              scheme = cc11001100_hook("scheme", '', "assign");
              brand = cc11001100_hook("brand", '', "assign");
              return false;
            }
          });
          data && data.goToAppStoreLogCb && data.goToAppStoreLogCb({
            appName: cc11001100_hook("appName", downloadInfo.pkgName, "object-key-init"),
            brandName: cc11001100_hook("brandName", brand || '', "object-key-init"),
            hitStore: cc11001100_hook("hitStore", brand === '' ? '0' : '1', "object-key-init")
          });
          if (!scheme) {
            gotoDownload(downloadInfo);
            return;
          }
          if (!downloadFirst) {
            invoke(scheme);
            setTimeout(function () {
              gotoDownload(downloadInfo);
            }, 300);
          } else {
            gotoDownload(downloadInfo);
            setTimeout(function () {
              invoke(scheme);
            }, 300);
          }
        },
        /**
         * 是否安装手百手机助手插件
         *
         * @param {Function} cb 判断在手百内,并且安装手助插件的回调
         * @param {Object} [data] 调起数据
         * @param {Object} [data.injectBoxJSOption] 注入选项
         * @param {Object} [data.injectBoxJSOption.boxjs] 注入的boxjs
         * @param {Object} [data.injectBoxJSOption.box] 注入的box
         */
        isBdAppSearchInstalled: function (cb, data) {
          var boxJS = cc11001100_hook("boxJS", getBoxJS(data && data.injectBoxJSOption), "var-init");
          if (!boxJS || !boxJS.isBox() || boxJS.versionCompare(boxJS.getVersion(), '8.0') < 0) {
            cb(false);
            return;
          }
          window.fecommonGetInstalledPluginVersionCallback = cc11001100_hook("window.fecommonGetInstalledPluginVersionCallback", function (back) {
            if (back !== -1 && back !== '-1') {
              cb(true);
            } else {
              cb(false);
            }
          }, "assign");
          boxJS.invokeAndroid('Bdbox_android_plugin', 'getInstalledPluginVersion', [JSON.stringify({
            /* eslint-disable fecs-camelcase */
            package_name: cc11001100_hook("package_name", 'com.baidu.appsearch', "object-key-init")
            /* eslint-enable fecs-camelcase */
          }), 'window.fecommonGetInstalledPluginVersionCallback']);
        },
        /**
         * 手机助手打开app
         *
         * @param {Function} data 调起数据
         * @param {string} data.pkgName 应用包名
         * @param {Function} [data.injectBoxJSOption] 注入的boxjs
         */
        openBdAppSearch: function (data) {
          var boxJS = cc11001100_hook("boxJS", getBoxJS(data && data.injectBoxJSOption), "var-init");
          if (!boxJS || !boxJS.isBox() || !data.pkgName) {
            return;
          }
          var opt = cc11001100_hook("opt", {
            /* eslint-disable fecs-camelcase */
            package_name: cc11001100_hook("package_name", 'com.baidu.appsearch', "object-key-init"),
            method_name: cc11001100_hook("method_name", 'plugin_appsearch_invoker', "object-key-init"),
            by_user: cc11001100_hook("by_user", 1, "object-key-init"),
            need_baidu_params: cc11001100_hook("need_baidu_params", 0, "object-key-init"),
            /* eslint-enable fecs-camelcase */
            /* eslint-disable max-len */
            params: cc11001100_hook("params", '{\"action\":\"com.baidu.searchbox.plugin.action.THIRD_INVOKE\",\"S.package_name\":\"com.baidu.appsearch\",\"S.method_name\":\"plugin_appsearch_invoker\",\"S.website_url\":\"\",\"S.by_user\":1,\"S.params\":\"{\\\"intent\\\":\\\"#Intent;action=com.baidu.appsearch.extinvoker.LITELAUNCH;S.backop=0;S.pkg=' + data.pkgName + ';S.quitop=1;S.func=10;B.download_immediatly=true;i.download_mode=1;end\\\"}\",\"S.need_baidu_params\":0}', "object-key-init")
            /* eslint-enable max-len */
          }, "var-init");
          boxJS.invokeAndroid('Bdbox_android_plugin', 'invokePlugin', [JSON.stringify(opt), 'console.log']);
        },
        /**
         * 总处理函数。暴露给外层使用。
         *
         * @public
         * @param {Object} data 吊起的相关参数
         * @param {string} data.onceEveryDay 一天是否只吊起一次。如果需求一天只吊起一次,则为该字段赋值,值为localstorage的key.
         */
        go: function (data) {
          if (!this.isObject(data) || !this.isObject(data.action)) {
            console.warn('Object is required for invokeApp.go');
            return;
          }
          if (data.onceEveryDay) {
            var needInvoke = cc11001100_hook("needInvoke", this.onceEveryDay(data.onceEveryDay), "var-init");
            if (!needInvoke) {
              return;
            }
          }

          // 有每日最大调起次数的限制
          if (data.invokeCntPerDay) {
            var needInvoke1 = cc11001100_hook("needInvoke1", this.invokeCntPerDay(data.invokeCntPerDay), "var-init");
            if (!needInvoke1) {
              return;
            }
          }
          data.logFn && data.logFn();

          // 组件被放入iframe内
          if (window.self !== window.top) {
            this.invokeInIframe(data);
          } else {
            // 将shema信息放入剪切板中
            this.schemaPutIntoClipboard(data);
            if (data.action.id && data.action.app === 'BdBox') {
              // action传入id,手百由前端自己拼接吊起相关链接
              this.selfHandle(data);
            } else if (data.action.id && data.action.isSelfHandle) {
              this.selfHandle(data);
            } else {
              // 后端传的调起scheme
              this.autoHandle(data);
            }
          }
        },
        /**
        * 将shema信息放入剪切板中
        *
        * @public
        * @param {object} data
        */
        schemaPutIntoClipboard: function (data) {
          var self = cc11001100_hook("self", this, "var-init");

          /**
           * scheme调起主feed + 剪切板(插入视频)
           */
          var actionApp = cc11001100_hook("actionApp", data.action && data.action.app || '', "var-init");
          actionApp = cc11001100_hook("actionApp", actionApp.toLowerCase(), "assign");
          if (!(actionApp == 'haokan')) {
            return;
          }
          /**
           * 需要配置启用复制赞帖公共的参数
           */
          if (!(data && data.clipboard && data.clipboard.clipboardText && data.clipboard.clipboardDom && data.clipboard.clipboardDomSelector)) {
            return;
          }
          var clipboardInfo = cc11001100_hook("clipboardInfo", data.clipboard, "var-init");
          // 点击复制的具体对象
          var clipboardDom = cc11001100_hook("clipboardDom", $(clipboardInfo.clipboardDom), "var-init");
          // 绑定具有复制功能的选择器(可能对应多个对象)，传入具体节点不work，改为传入选择器
          var clipboardSelector = cc11001100_hook("clipboardSelector", clipboardInfo.clipboardDomSelector, "var-init");
          var hasInitedClipboardSelectorList = cc11001100_hook("hasInitedClipboardSelectorList", self.opts.hasInitedClipboardSelectorList, "var-init");
          var clipboardObj = cc11001100_hook("clipboardObj", self.getClipboardObjBySelector(clipboardSelector, hasInitedClipboardSelectorList), "var-init");
          if (!(clipboardObj && clipboardObj.instanceObj)) {
            var instanceObj = cc11001100_hook("instanceObj", new window.ClipboardJS(clipboardInfo.clipboardDomSelector), "var-init");
            instanceObj.on('success', function (e) {
              e.clearSelection();
              console.log('copy success');
            });
            instanceObj.on('error', function (e) {
              console.log('copy error');
            });
            clipboardObj = cc11001100_hook("clipboardObj", {
              selector: cc11001100_hook("selector", clipboardSelector, "object-key-init"),
              instanceObj: cc11001100_hook("instanceObj", instanceObj, "object-key-init")
            }, "assign");
            self.opts.hasInitedClipboardSelectorList.push(clipboardObj);
          }
          // 写入剪切板
          var clipboardText = cc11001100_hook("clipboardText", '#' + clipboardInfo.clipboardText + '#', "var-init");
          clipboardDom.data('clipboard-text', clipboardText);
        },
        /**
        * 通过选择器查找，对应已经初始化的复制实例
        *
        * @public
        * @param {string} clipboardSelector 复制功能对应的对象选择器
        * @param {Array} hasInitedClipboardSelectorList 选择器和对应的实例的数组
        * @return 对应选择器已经初始化过的对象
        */
        getClipboardObjBySelector: function (clipboardSelector, hasInitedClipboardSelectorList) {
          var result = cc11001100_hook("result", hasInitedClipboardSelectorList.filter(function (obj, index) {
            return obj.selector == clipboardSelector;
          }), "var-init");
          if (result.length > 0) {
            return result[0];
          } else {
            return null;
          }
        },
        /**
         * 在iframe下吊起。通过postMessage与外层通信。主要用于wise_feed视频落地页
         *
         * @public
         * @param {Object} data 吊起的相关参数
         * @param {Object} data.mt 与wise 主feed通信的模块,采用注入形式
         */
        invokeInIframe: function (data) {
          var downloadInfo = cc11001100_hook("downloadInfo", data.downloadInfo, "var-init");
          var action = cc11001100_hook("action", data.action, "var-init");
          var extra = cc11001100_hook("extra", data.pagepd, "var-init");
          var mt = cc11001100_hook("mt", data.mt, "var-init");
          var locid = cc11001100_hook("locid", action.id, "var-init");
          var source;
          var self = cc11001100_hook("self", this, "var-init");
          var ulink = cc11001100_hook("ulink", '', "var-init");
          var scheme = cc11001100_hook("scheme", '', "var-init");
          if (!mt) {
            return;
          }

          // 拼接Scheme,ulink等
          if (action.id && action.app === 'BdBox') {
            if (action.app === 'BdBox') {
              var backflow = cc11001100_hook("backflow", '1', "var-init");
              source = cc11001100_hook("source", {
                backflow: cc11001100_hook("backflow", backflow, "object-key-init")
              }, "assign");
              extra && extra.pagepd && (source.pagepd = cc11001100_hook("source.pagepd", extra.pagepd, "assign")) && (source.pagepdSid = cc11001100_hook("source.pagepdSid", extra.pagepdSid, "assign"));
              scheme = cc11001100_hook("scheme", this.isIos() ? this.getBdIOSV80Scheme(action.id, source) : this.getBdAndrCmd(action.id, source), "assign");
              if (/^\d+$/.test(locid)) {
                scheme = cc11001100_hook("scheme", this.isIos() ? this.getBdIOSBackChannelScheme(locid, source) : this.getBdAndrBackChannelScheme(locid, source), "assign");
              } else {
                scheme = cc11001100_hook("scheme", this.isIos() ? this.getBdIOSV80Scheme(locid, source) : this.getBdAndrCmd(locid, source), "assign");
              }
              console.log(scheme);
            } else {
              source = cc11001100_hook("source", {
                tab: cc11001100_hook("tab", 'guide', "object-key-init")
              }, "assign");
              extra && extra.pagepd && (source.tag = cc11001100_hook("source.tag", extra.pagepd, "assign")) && (source.source = cc11001100_hook("source.source", extra.source, "assign"));
              ulink = cc11001100_hook("ulink", this.getHkUrl(action.id, source, action.failUrl), "assign");
              scheme = cc11001100_hook("scheme", this.getHkScheme(action.id, source), "assign");
            }
          } else {
            ulink = cc11001100_hook("ulink", action.ulink, "assign");
            scheme = cc11001100_hook("scheme", action.scheme, "assign");
          }
          var postMessage = cc11001100_hook("postMessage", {
            event: cc11001100_hook("event", 'videoInvokeApp', "object-key-init"),
            app: cc11001100_hook("app", action.app || 'BdBox', "object-key-init"),
            action: {}
          }, "var-init");
          if (action.app === 'BdBox') {
            // overwrite,是否强制使用scheme
            var overwrite = cc11001100_hook("overwrite", '0', "var-init");
            if (invokeApp.isAndroid()) {
              postMessage.action = cc11001100_hook("postMessage.action", {
                showTip: cc11001100_hook("showTip", false, "object-key-init"),
                androidCommand: cc11001100_hook("androidCommand", JSON.stringify(scheme), "object-key-init"),
                overwrite: cc11001100_hook("overwrite", overwrite, "object-key-init")
              }, "assign");
              if (action.type === 'normalInvoke') {
                mt.addRequestHandle('videoInvokeFail', function () {
                  console.log('videoInvokeFail');
                  action.extra.failCallback && action.extra.failCallback();
                });
                postMessage.action.failCallback = cc11001100_hook("postMessage.action.failCallback", '1', "assign");
              }
            } else {
              postMessage.action = cc11001100_hook("postMessage.action", {
                showTip: cc11001100_hook("showTip", false, "object-key-init"),
                iosScheme: cc11001100_hook("iosScheme", scheme, "object-key-init"),
                overwrite: cc11001100_hook("overwrite", overwrite, "object-key-init")
              }, "assign");
              if (action.type === 'normalInvoke') {
                postMessage.action.failUrl = cc11001100_hook("postMessage.action.failUrl", action.extra.failUrl, "assign");
              }
            }
            if (extra.channel || extra.from) {
              postMessage.action.channel = cc11001100_hook("postMessage.action.channel", extra.channel, "assign");
              postMessage.action.from = cc11001100_hook("postMessage.action.from", extra.from, "assign");
            }
          } else {
            postMessage.action = cc11001100_hook("postMessage.action", {
              HkUlink: cc11001100_hook("HkUlink", ulink, "object-key-init"),
              HkScheme: cc11001100_hook("HkScheme", scheme, "object-key-init"),
              HkDownloadurl: cc11001100_hook("HkDownloadurl", downloadInfo, "object-key-init")
            }, "assign");
          }
          mt.sendMessage(window.parent, postMessage, false);
          (function () {
            var action = cc11001100_hook("action", data.action, "var-init");
            var appName = cc11001100_hook("appName", action.app, "var-init");
            if (appName !== 'BdBox' && action.type !== 'normalInvoke' && self.isObject(data.downloadInfo) && self.isAndroid() && !self.isWeChat() && !self.isMobileQQ() && data.downloadInfo.pkgName) {
              console.log(1);
              var ua = cc11001100_hook("ua", navigator.userAgent, "var-init");
              var brand = cc11001100_hook("brand", '', "var-init");
              var downloadInfo = cc11001100_hook("downloadInfo", data.downloadInfo, "var-init");
              var brandList = cc11001100_hook("brandList", downloadInfo.brandList || ['xiaomi', 'samsung', 'huawei', 'oppo', 'vivo'], "var-init");
              var supportedBrand = cc11001100_hook("supportedBrand", {
                xiaomi: {
                  reg: cc11001100_hook("reg", /\(.*Android.*(MI|Mi|Redmi|HM NOTE| 201\d{4} Build).*\)|Android.*XiaoMi/, "object-key-init"),
                  scheme: cc11001100_hook("scheme", 'mimarket://details?id=${0}&back=true', "object-key-init")
                },
                samsung: {
                  reg: cc11001100_hook("reg", /\(.*Android.*(SAMSUNG|SM-|GT-).*\)/, "object-key-init"),
                  scheme: cc11001100_hook("scheme", 'samsungapps://ProductDetail/${0}', "object-key-init")
                },
                huawei: {
                  reg: cc11001100_hook("reg", /\(.*Android.*(HUAWEI|HONOR|HW-|H60-).*\)|^HONOR|^HUAWEI/i, "object-key-init"),
                  scheme: cc11001100_hook("scheme", 'appmarket://details?id=${0}', "object-key-init")
                },
                oppo: {
                  reg: cc11001100_hook("reg", /Android.*(OPPO|A31.? Build|R\d+(Plus)? Build)|Android.*OppoBrowser|^OPPO/, "object-key-init"),
                  scheme: cc11001100_hook("scheme", 'oppomarket://details?packagename=${0}', "object-key-init"),
                  downloadFirst: cc11001100_hook("downloadFirst", true, "object-key-init")
                },
                vivo: {
                  reg: cc11001100_hook("reg", /\(.*Android.*(vivo|VIVO).*\)/, "object-key-init"),
                  scheme: cc11001100_hook("scheme", 'vivomarket://details?id=${0}', "object-key-init")
                }
              }, "var-init");
              brandList.forEach(function (brandName) {
                if (supportedBrand.hasOwnProperty(brandName)) {
                  var setting = cc11001100_hook("setting", supportedBrand[brandName], "var-init");
                  if (setting.reg.test(ua)) {
                    brand = cc11001100_hook("brand", brandName, "assign");
                    return false;
                  }
                }
              });

              /** 不调起应用商店的浏览器 **/
              var forbidBrowserList = cc11001100_hook("forbidBrowserList", [/liebaofast/ig], "var-init");
              forbidBrowserList.forEach(function (reg) {
                if (reg.test(ua)) {
                  brand = cc11001100_hook("brand", '', "assign");
                  return false;
                }
              });
              data && data.action && data.action.goToAppStoreLogCb && data.action.goToAppStoreLogCb({
                appName: cc11001100_hook("appName", downloadInfo.pkgName, "object-key-init"),
                brandName: cc11001100_hook("brandName", brand || '', "object-key-init"),
                hitStore: cc11001100_hook("hitStore", brand === '' ? '0' : '1', "object-key-init")
              });
            }
          })();
        }
      }, "var-init");
      return invokeApp;
    });
    ;
    /**
    * @file appAdDownload
    * Created by wuhan01 on 2018/2/9.
    */

    define('rmbGrowth/invoke/appAdDownload', function () {
      var download = cc11001100_hook("download", {}, "var-init");
      var logUrl = cc11001100_hook("logUrl", 'https://ls.baidu.com/s.gif', "var-init");
      var appAdDwonload = cc11001100_hook("appAdDwonload", {
        init: function (opts) {
          var self = cc11001100_hook("self", this, "var-init");
          this.downloadInfo = cc11001100_hook("this.downloadInfo", opts, "assign");

          // 进度
          var random = cc11001100_hook("random", ~~(Math.random() * 20) + 40, "var-init");
          window.reCallback = cc11001100_hook("window.reCallback", function (action, data) {
            var state = cc11001100_hook("state", JSON.parse(data).data, "var-init");
            var process = cc11001100_hook("process", parseInt(state.process), "var-init");
            if (process <= random) {
              $('#process').css('width', random + '%');
              $('#percent').text(random + '%');
            } else if (process < 100) {
              $('#process').css('width', process + '%');
              $('#percent').text(process + '%');
            } else if (process === 100) {
              $('#process').css('width', '100%');
              $('#percent').text('100%');
              var t = cc11001100_hook("t", setTimeout(function () {
                clearTimeout(t);
                $('.shade').hide();
                $('html').removeClass('noscroll');
                var unregisterScheme = cc11001100_hook("unregisterScheme", 'baiduboxapp://v5/datachannel/unregister?action=com.baidu.channel.aladdin.downloadapk&page=haokandownload', "var-init");
                window.location.href = cc11001100_hook("window.location.href", unregisterScheme, "assign");
                self.installApk(state.uri, 'com.baidu.haokan');
              }, 1000), "var-init");
            }
          }, "assign");
          var self = cc11001100_hook("self", this, "var-init");

          // 注册通道
          if (window.BoxJS.isBox) {
            // 检测callback
            window.__checkcallback__ = cc11001100_hook("window.__checkcallback__", function (data) {}, "assign");

            // 下载callback
            window.__downloadCallback__ = cc11001100_hook("window.__downloadCallback__", function (data) {}, "assign");

            // 安装callback
            window.__installCallback__ = cc11001100_hook("window.__installCallback__", function (data) {}, "assign");
            var registerScheme = cc11001100_hook("registerScheme", 'baiduboxapp://v5/datachannel/register?action=com.baidu.channel.aladdin.downloadapk&page=haokandownload&jscallback=reCallback', "var-init");
            window.location.href = cc11001100_hook("window.location.href", registerScheme, "assign");

            // 开始
            if (this.downloadInfo && this.downloadInfo.pkgurl) {
              setTimeout(function () {
                self.go();
              }, 0);
            }
          }
        },
        go: function () {
          var params = cc11001100_hook("params", {
            type: cc11001100_hook("type", 'startdownload', "object-key-init"),
            business: cc11001100_hook("business", 'feed_video', "object-key-init"),
            url: cc11001100_hook("url", encodeURI(this.downloadInfo.pkgurl), "object-key-init"),
            uri: cc11001100_hook("uri", '', "object-key-init"),
            file_id: cc11001100_hook("file_id", '1021079n', "object-key-init"),
            callback: cc11001100_hook("callback", '__downloadCallback__', "object-key-init")
          }, "var-init");
          this.dlscheme = cc11001100_hook("this.dlscheme", 'baiduboxapp://v14/download/app?upgrade=1&params=' + encodeURIComponent(JSON.stringify(params)), "assign");
          this.check();
        },
        check: function () {
          var self = cc11001100_hook("self", this, "var-init");
          var status = cc11001100_hook("status", window.Box.android.invokeApp('bd_searchbox_interface', 'getNativeAppStatus', [encodeURIComponent('com.baidu.haokan'), '__checkcallback__']), "var-init");
          if (!status.error) {
            if (JSON.parse(status.result).hasApp) {
              download.installed = cc11001100_hook("download.installed", true, "assign");
              this.sendDonwloadLog();
              self.openApk();
            } else {
              download.installed = cc11001100_hook("download.installed", false, "assign");
              // 下载
              self.donwload();
            }
          } else {
            download.installed = cc11001100_hook("download.installed", false, "assign");
            // 下载
            self.donwload();
          }
        },
        openApk: function () {
          /*invokeApp.go({
              action: {
                  id: locid || self.locid,
                  type: 'normalInvoke',
                  app: 'HaoKan'
              },
              pagepd: self.pagepd,
              downloadInfo: downloadInfo
          });*/
        },
        donwload: function () {
          download.type = cc11001100_hook("download.type", 'shoubai', "assign");
          var self = cc11001100_hook("self", this, "var-init");
          if (!self.downloading) {
            self.downloading = cc11001100_hook("self.downloading", true, "assign");
            $('#process').css('width', '0%');
            $('.shade').show();
            $('html').addClass('noscroll');
            window.location.href = cc11001100_hook("window.location.href", self.dlscheme, "assign");
          }
        },
        installApk: function (uri, apk) {
          download.success = cc11001100_hook("download.success", true, "assign");
          this.sendDonwloadLog();
          var installScheme = cc11001100_hook("installScheme", 'baiduboxapp://v14/download/app?params=', "var-init");
          var params = cc11001100_hook("params", {
            type: cc11001100_hook("type", 'installapk', "object-key-init"),
            business: cc11001100_hook("business", 'feed_video', "object-key-init"),
            uri: cc11001100_hook("uri", uri || '', "object-key-init"),
            packageName: cc11001100_hook("packageName", apk, "object-key-init"),
            callback: cc11001100_hook("callback", '__installCallback__', "object-key-init")
          }, "var-init");
          this.downloading = cc11001100_hook("this.downloading", false, "assign");
          window.location.href = cc11001100_hook("window.location.href", installScheme + encodeURIComponent(JSON.stringify(params)), "assign");
        },
        sendDonwloadLog: function () {
          if (window.__vrandom) {
            var id = cc11001100_hook("id", '_tm' + new Date().getTime(), "var-init");
            var req = cc11001100_hook("req", window[id] = cc11001100_hook("window[id]", new Image(), "assign"), "var-init");
            req.onload = cc11001100_hook("req.onload", req.onerror = cc11001100_hook("req.onerror", req.onabort = cc11001100_hook("req.onabort", function () {
              window[id] = cc11001100_hook("window[id]", null, "assign");
            }, "assign"), "assign"), "assign");
            var src = cc11001100_hook("src", logUrl + (location.search ? encodeURI(location.search) + '&fm=' + 'download' : '?fm=' + 'download') + '&pageChannel=haokan' + '&show_id=' + window.__vrandom, "var-init");
            if (Object.keys(download).length > 0) {
              src += cc11001100_hook("src", '&download=' + encodeURIComponent(JSON.stringify(download)), "assign");
            }
            req.src = cc11001100_hook("req.src", src, "assign");
          }
        }
      }, "var-init");
      return appAdDwonload;
    });
    ;
    /* globals defineBranchModule */
    defineBranchModule('invoke');
    /* globals defineLeafModules */
    defineLeafModules(['invokeApp', 'appAdDownload']);
  }();
  ;
  /**
  * @file test
  * @author zhangjingfeng
  */

  !function () {
    /**
    * @file feed视频落地页，新的日志用此打点.老的thunder仅供相关推荐点击使用
    * @author zhangjingfeng
    * @email zhangjingfeng@baidu.com
    * @date 2017/03/19
    */
    define('rmbGrowth/log/thunder', function () {
      var global = cc11001100_hook("global", window, "var-init");
      var Conf = cc11001100_hook("Conf", global.Conf || {}, "var-init");
      var cuid;

      /**
       * thunder日志类
       *
       * @class
       * @param {Object} opt 日志参数
       * @constructor
       */
      function Thunder(opt) {
        cc11001100_hook("opt", opt, "function-parameter");
        var self = cc11001100_hook("self", this, "var-init");
        self.opt = cc11001100_hook("self.opt", opt || {}, "assign");
        self.baseParams = cc11001100_hook("self.baseParams", self.opt.baseParams || {}, "assign");
        if (window.Box && window.Box.os) {
          var Box = cc11001100_hook("Box", window.Box, "var-init");
          window.rmbvideogetcuid = cc11001100_hook("window.rmbvideogetcuid", function (ret) {
            cuid = cc11001100_hook("cuid", ret, "assign");
          }, "assign");
          cuid = cc11001100_hook("cuid", Box.os.ios ? Box.ios.invokeApp('utils', {
            action: cc11001100_hook("action", 'getcuid', "object-key-init"),
            minver: cc11001100_hook("minver", '6.1.0.0', "object-key-init")
          }, 'window.rmbvideogetcuid') : Box.android.invokeApp('Bdbox_android_utils', 'getcuid', []) || '', "assign");
        }
        self.config(opt, true);
        if (opt.autoBind) {
          self.bind();
        }
      }
      function queryToJSON(url) {
        cc11001100_hook("url", url, "function-parameter");
        var locse = cc11001100_hook("locse", url.split('?'), "var-init");
        var search = cc11001100_hook("search", locse[1] ? locse[1] : locse[0], "var-init");
        var pairs = cc11001100_hook("pairs", search.split('&'), "var-init");
        var result = cc11001100_hook("result", {}, "var-init");
        pairs.forEach(function (pair) {
          pair = cc11001100_hook("pair", pair.split('='), "assign");
          if (pair[0].length > 0) {
            var resultPair = cc11001100_hook("resultPair", '', "var-init");
            try {
              resultPair = cc11001100_hook("resultPair", decodeURIComponent(pair[1]) || '', "assign");
            } catch (e) {}
            result[pair[0]] = cc11001100_hook("result[pair[0]]", resultPair, "assign");
          }
        });
        return result;
      }
      var URL = cc11001100_hook("URL", queryToJSON(location.search), "var-init");
      var logId = cc11001100_hook("logId", (+new Date()).toString(36) + Math.random().toString(36).substr(2, 3), "var-init");
      Thunder.prototype = cc11001100_hook("Thunder.prototype", {
        config: function (opt) {
          var self = cc11001100_hook("self", this, "var-init");
          for (var k in opt) {
            if (opt.hasOwnProperty(k)) {
              self.opt[k] = cc11001100_hook("self.opt[k]", opt[k], "assign");
            }
          }
          // 日志打印基础URL
          self.baseURL = cc11001100_hook("self.baseURL", self.opt.baseURL || '//hpd.baidu.com/v.gif', "assign");
          // 是否需要增加DOM钩子由基础库协助打印日志
          self.domHook = cc11001100_hook("self.domHook", self.opt.domHook, "assign");
          // 点击日志，是否需要阻止跳转
          self.skipPrevent = cc11001100_hook("self.skipPrevent", !!self.opt.skipPrevent, "assign");
          // 如需解析DOM上的钩子参数，使用此正则表达式解析
          self.logRegx = cc11001100_hook("self.logRegx", self.opt.logRegx || '(.*?):(.*?);', "assign");
          // 需要混入日志打印的所有基础字段
          self.baseParams = cc11001100_hook("self.baseParams", simpleMerge(self.baseParams, opt.baseParams), "assign");
        },
        send: function (pobj, callback, url) {
          pobj.sid = cc11001100_hook("pobj.sid", Conf.psSidList && Conf.psSidList.length && Conf.psSidList.join('_') || '', "assign");
          pobj.cuid = cc11001100_hook("pobj.cuid", cuid || '', "assign");
          pobj.ssid = cc11001100_hook("pobj.ssid", '', "assign");
          pobj.cfrom = cc11001100_hook("pobj.cfrom", URL.cfrom || '', "assign");
          pobj.cua = cc11001100_hook("pobj.cua", URL.ua || '', "assign");
          pobj.cut = cc11001100_hook("pobj.cut", URL.ut || '', "assign");
          pobj.logid = cc11001100_hook("pobj.logid", logId, "assign");
          var self = cc11001100_hook("self", this, "var-init");
          self.__sendPreHook && self.__sendPreHook(pobj);
          var id = cc11001100_hook("id", 'l' + Date.now(), "var-init");
          var req = cc11001100_hook("req", window[id] = cc11001100_hook("window[id]", new Image(), "assign"), "var-init");
          var params = cc11001100_hook("params", '', "var-init");
          var timer = cc11001100_hook("timer", null, "var-init");
          url = cc11001100_hook("url", url || self.baseURL, "assign");
          req.onload = cc11001100_hook("req.onload", req.onerror = cc11001100_hook("req.onerror", req.onabort = cc11001100_hook("req.onabort", function () {
            window[id] = cc11001100_hook("window[id]", null, "assign");
            if (timer) {
              clearTimeout(timer);
              timer = cc11001100_hook("timer", null, "assign");
              callback && callback();
              self.__sendAfrHook && self.__sendAfrHook(pobj, false);
            }
          }, "assign"), "assign"), "assign");
          pobj = cc11001100_hook("pobj", pobj || {}, "assign");
          pobj.r = cc11001100_hook("pobj.r", id, "assign");
          var baseParams = cc11001100_hook("baseParams", self.baseParams, "var-init");
          pobj = cc11001100_hook("pobj", simpleMerge(simpleMerge({}, baseParams), pobj), "assign");
          // 拼接字符串
          for (var i in pobj) {
            if (pobj.hasOwnProperty(i)) {
              params += cc11001100_hook("params", '&' + i + '=' + encodeURIComponent(pobj[i]), "assign");
            }
          }
          req.src = cc11001100_hook("req.src", url + '?' + params.slice(1), "assign");
          // 防止回调被hold住
          if (typeof callback === 'function') {
            timer = cc11001100_hook("timer", setTimeout(function () {
              timer = cc11001100_hook("timer", null, "assign");
              callback();
            }, 500), "assign");
          }
          self.__sendAfrHook && self.__sendAfrHook(pobj, true);
        },
        bindLogHook: function (mainDom) {
          var self = cc11001100_hook("self", this, "var-init");
          mainDom.on('click', self.domHook, self.hookClick.bind(self));
        },
        hookClick: function (dom, e) {
          var self = cc11001100_hook("self", this, "var-init");
          var dom = cc11001100_hook("dom", $(e.target).parents(self.domHook)[0], "var-init");
          var dataLogStr = cc11001100_hook("dataLogStr", dom.getAttribute(self.domHook), "var-init");
          var targetHref = cc11001100_hook("targetHref", dom.getAttribute('href'), "var-init");
          var callback = cc11001100_hook("callback", null, "var-init");
          var logObj = cc11001100_hook("logObj", {}, "var-init");
          var regx = cc11001100_hook("regx", new RegExp(self.logRegx), "var-init");
          var output = cc11001100_hook("output", null, "var-init");
          while (output = cc11001100_hook("output", regx.exec(dataLogStr), "assign")) {
            logObj[output[1]] = cc11001100_hook("logObj[output[1]]", output[2], "assign");
          }
          if (dom.tagName.toLowerCase() === 'a' && targetHref) {
            e.preventDefault();
            callback = cc11001100_hook("callback", function () {
              global.location.href = cc11001100_hook("global.location.href", targetHref, "assign");
            }, "assign");
          }
          self.send(self.baseURL, logObj, callback);
        }
      }, "assign");
      function simpleMerge(obj1, obj2) {
        cc11001100_hook("obj1", obj1, "function-parameter");
        cc11001100_hook("obj2", obj2, "function-parameter");
        if (!obj2 || !obj1) {
          return obj1;
        }
        for (var i in obj2) {
          obj1[i] = cc11001100_hook("obj1[i]", obj2[i], "assign");
        }
        return obj1;
      }
      var thunderInstance = cc11001100_hook("thunderInstance", null, "var-init");
      return {
        create: function (opt, cb) {
          return new Thunder(opt);
        },
        get: function (opt) {
          return thunderInstance || (thunderInstance = cc11001100_hook("thunderInstance", this.create(opt), "assign"));
        }
      };
    });
    ;
    /**
    * @file common 落地页中间的推广模板
    * @author pankeyu
    * Created by pankeyu on 17/5/19.
    */

    /*通用推荐推广模板*/
    define('rmbGrowth/log/appAdLog', ['rmbGrowth/log/thunder', 'rmbGrowth/ext/exhibitionManager'], function (thunderLog, ExhibitionManager) {
      /**
       * Created by pankeyu on 17/4/30.
       */

      var isObject = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Object]';
      };
      var addAdLog = function (type, logInfo) {
        this.logLock = cc11001100_hook("this.logLock", 0, "assign");
        this.tplType = cc11001100_hook("this.tplType", type, "assign");

        /*初始化日志参数*/
        if (isObject(logInfo)) {
          this.logInfo = cc11001100_hook("this.logInfo", logInfo || {}, "assign");
          this.logTid = cc11001100_hook("this.logTid", this.logInfo.tid, "assign");
          delete this.logInfo.tid;
          if (this.logInfo.logExtra) {
            this.logExtra = cc11001100_hook("this.logExtra", this.logInfo.logExtra, "assign");
            if (this.logInfo.slideShowApp) {
              this.logExtra.app = cc11001100_hook("this.logExtra.app", this.logInfo.slideShowApp, "assign");
              delete this.logInfo.slideShowApp;
            }
            delete this.logInfo.logExtra;
          }
        }
      };
      addAdLog.prototype.init = cc11001100_hook("addAdLog.prototype.init", function (logType, data) {
        if (this.tplType === 'Carousel') {
          if (logType === 'show') {
            if (data instanceof Array) {
              this.carouselListData = cc11001100_hook("this.carouselListData", data, "assign");
              this.carouselListCache = cc11001100_hook("this.carouselListCache", {}, "assign");
              for (var i = cc11001100_hook("i", 0, "var-init"); i < this.carouselListData.length; i++) {
                var data = cc11001100_hook("data", this.carouselListData[i], "var-init");
                var key = cc11001100_hook("key", data.locid, "var-init");
                this.carouselListCache[key] = cc11001100_hook("this.carouselListCache[key]", {
                  status: cc11001100_hook("status", 'not_showed', "object-key-init"),
                  locid: cc11001100_hook("locid", data.locid, "object-key-init"),
                  nid: cc11001100_hook("nid", data.nid, "object-key-init"),
                  index: cc11001100_hook("index", i + 1 + '', "object-key-init"),
                  extra: cc11001100_hook("extra", '', "object-key-init"),
                  /* eslint-disable fecs-camelcase */
                  source_from: cc11001100_hook("source_from", data.source_from, "object-key-init")
                  /* eslint-enable fecs-camelcase */
                }, "assign");
              }
            }
            // 轮播图展现日志。init的时候,需要先打一条首次轮播时候的展现日志;
            this.detectShow(0);
          }
        } else if (this.tplType === 'commonTpl') {
          if (logType === 'show') {
            this._commonTplHasShowed = cc11001100_hook("this._commonTplHasShowed", false, "assign");
            var self = cc11001100_hook("self", this, "var-init");
            var commonTplOffsetTop = cc11001100_hook("commonTplOffsetTop", -100, "var-init");
            if (data.$container.find('.appAdd-commonTpl').length) {
              commonTplOffsetTop = cc11001100_hook("commonTplOffsetTop", data.$container.find('.appAdd-commonTpl').offset().top, "assign");
            }
            var windowHeight = cc11001100_hook("windowHeight", parseFloat(window.innerHeight), "var-init");
            var carouselHeight = cc11001100_hook("carouselHeight", $('.rmb-carsousel-position-top').length ? $('.rmb-carsousel-position-top').height() : '0', "var-init");
            var videoHeight = cc11001100_hook("videoHeight", parseFloat(carouselHeight) + parseFloat($('video').height()), "var-init");
            var inView = cc11001100_hook("inView", commonTplOffsetTop < windowHeight && commonTplOffsetTop - window.scrollY > videoHeight, "var-init");
            if (inView && !this._commonTplHasShowed) {
              /*通用模板初始化时已展现*/
              this._commonTplHasShowed = cc11001100_hook("this._commonTplHasShowed", true, "assign");
              this.sendLog('show', this.tplType, data);
            } else {
              /*通用模板初始化时未展现,监听滚动事件*/

              document.addEventListener('scroll', function () {
                if (this._commonTplHasShowed) {
                  return;
                }
                inView = cc11001100_hook("inView", commonTplOffsetTop - window.scrollY > videoHeight && commonTplOffsetTop - window.scrollY < windowHeight, "assign");
                if (inView) {
                  self.sendLog('show', self.tplType, data);
                  this._commonTplHasShowed = cc11001100_hook("this._commonTplHasShowed", true, "assign");
                }
              });
            }
          }
        }

        /*相关推荐模板初始化*/else if (this.tplType === 'recRelateTpl') {
          if (logType === 'show') {
            var tplList = cc11001100_hook("tplList", [].slice.call($('.appad-relate-rectpl')), "var-init");
            this.$recRelateTplList = cc11001100_hook("this.$recRelateTplList", tplList, "assign");
            this.recRelateTplCache = cc11001100_hook("this.recRelateTplCache", this.recRelateTplCache || {}, "assign");
            var self = cc11001100_hook("self", this, "var-init");
            this.$recRelateTplList.forEach(function (item, index) {
              var key = cc11001100_hook("key", item.getAttribute('data-locid'), "var-init");
              if (!self.recRelateTplCache[key]) {
                self.recRelateTplCache[key] = cc11001100_hook("self.recRelateTplCache[key]", {
                  status: cc11001100_hook("status", 'not_showed', "object-key-init"),
                  locid: cc11001100_hook("locid", key, "object-key-init"),
                  index: cc11001100_hook("index", item.getAttribute('data-index'), "object-key-init"),
                  extra: cc11001100_hook("extra", '', "object-key-init"),
                  top: cc11001100_hook("top", parseFloat($(item).offset().top), "object-key-init")
                }, "assign");
              }
            });
            var carouselHeight = cc11001100_hook("carouselHeight", $('.rmb-carsousel-position-top').length ? $('.rmb-carsousel-position-top').height() : '0', "var-init");
            this.videoHeight = cc11001100_hook("this.videoHeight", parseFloat(carouselHeight) + parseFloat($('video').height()), "assign");
            this.windowHeight = cc11001100_hook("this.windowHeight", parseFloat(window.innerHeight), "assign");
            this.recRelateTplLogArr = cc11001100_hook("this.recRelateTplLogArr", [], "assign");
            this.detectShow();
            this.timer = cc11001100_hook("this.timer", null, "assign");
            this.logShowIdx = cc11001100_hook("this.logShowIdx", 0, "assign");
            document.addEventListener('scroll', function () {
              self.detectShow();
            });
          }
        }
      }, "assign");
      addAdLog.prototype.detectShow = cc11001100_hook("addAdLog.prototype.detectShow", function (index) {
        /*轮播判断展现*/
        if (this.tplType === 'Carousel') {
          var key = cc11001100_hook("key", this.carouselListData[index].locid, "var-init");
          if (this.carouselListCache[key].status === 'not_showed') {
            this.carouselListCache[key].status = cc11001100_hook("this.carouselListCache[key].status", 'showed', "assign");
            this.sendLog('show', this.tplType, this.carouselListCache[key]);
            this.carouselListCache[key].status = cc11001100_hook("this.carouselListCache[key].status", 'logged', "assign");
          }
        }

        /*相关推荐模板判断展现*/else if (this.tplType === 'recRelateTpl') {
          var self = cc11001100_hook("self", this, "var-init");
          this.$recRelateTplList.forEach(function (item) {
            var key = cc11001100_hook("key", item.getAttribute('data-locid'), "var-init");
            var itemTop = cc11001100_hook("itemTop", self.recRelateTplCache[key].top, "var-init");
            var inView = cc11001100_hook("inView", itemTop - window.scrollY > self.videoHeight && itemTop - window.scrollY < self.windowHeight, "var-init");
            if (self.recRelateTplCache[key].status === 'not_showed' && inView) {
              self.recRelateTplCache[key].status = cc11001100_hook("self.recRelateTplCache[key].status", 'showed', "assign");
              self.recRelateTplLogArr.push(self.recRelateTplCache[key]);
            }
          });
          self.timer = cc11001100_hook("self.timer", setTimeout(log, 300), "assign");
          function log() {
            var logArr = cc11001100_hook("logArr", self.recRelateTplLogArr.slice(self.logShowIdx, self.logShowIdx + 3), "var-init");
            if (logArr.length === 0) {
              self.timer = cc11001100_hook("self.timer", null, "assign");
              return;
            }
            self.logShowIdx += cc11001100_hook("self.logShowIdx", logArr.length, "assign");
            self.sendLog('show', self.tplType, logArr, function () {
              logArr.forEach(function (item) {
                self.recRelateTplCache[item.locid].status = cc11001100_hook("self.recRelateTplCache[item.locid].status", 'logged', "assign");
              });
            });
            setTimeout(log, 300);
          }
        }
      }, "assign");
      addAdLog.prototype.sendLog = cc11001100_hook("addAdLog.prototype.sendLog", function (logtype, tpltype, data, callback) {
        if (isObject(data)) {
          /*日志基本参数*/
          var rid = cc11001100_hook("rid", data.nid ? 'sv_' + data.nid : '', "var-init");
          var locid = cc11001100_hook("locid", data.locid || '', "var-init");
          var sourceFrom = cc11001100_hook("sourceFrom", data.source_from || '', "var-init");
          var logExtra = cc11001100_hook("logExtra", {
            rid: cc11001100_hook("rid", rid, "object-key-init"),
            extra: cc11001100_hook("extra", data.extra || '', "object-key-init"),
            sourcetype: cc11001100_hook("sourcetype", sourceFrom, "object-key-init"),
            locid: cc11001100_hook("locid", encodeURIComponent(locid), "object-key-init")
          }, "var-init");
          data.index && (logExtra.index = cc11001100_hook("logExtra.index", data.index, "assign"));
          if (this.logExtra && isObject(this.logExtra)) {
            logExtra = cc11001100_hook("logExtra", $.extend(logExtra, this.logExtra), "assign");
          }
        } else {
          var oldLogExtra = cc11001100_hook("oldLogExtra", this.logExtra, "var-init");
          var logExtra = cc11001100_hook("logExtra", data.slice(0).map(function (item) {
            return $.extend({}, oldLogExtra, {
              locid: cc11001100_hook("locid", encodeURIComponent(item.locid), "object-key-init"),
              index: cc11001100_hook("index", item.index, "object-key-init")
            });
          }), "var-init");
        }
        var logObj = cc11001100_hook("logObj", {
          logFrom: cc11001100_hook("logFrom", 'video_landing', "object-key-init")
        }, "var-init");
        if (this.logInfo) {
          logObj = cc11001100_hook("logObj", $.extend(logObj, this.logInfo), "assign");
        }
        var thunder = cc11001100_hook("thunder", null, "var-init");
        /*根据不同日志设置参数*/
        if (logtype === 'show') {
          /*展现日志*/

          thunder = cc11001100_hook("thunder", thunderLog.create({
            baseParams: cc11001100_hook("baseParams", $.extend({
              cst: cc11001100_hook("cst", 1, "object-key-init")
            }, logObj), "object-key-init")
          }), "assign");
          if (isObject(logExtra)) {
            logObj.logExtra = cc11001100_hook("logObj.logExtra", JSON.stringify([logExtra]), "assign");
          } else {
            logObj.logExtra = cc11001100_hook("logObj.logExtra", JSON.stringify(logExtra), "assign");
          }
          logObj = cc11001100_hook("logObj", $.extend(logObj, {
            tid: cc11001100_hook("tid", this.logTid.show, "object-key-init")
          }), "assign");
          window._exhibitionManager && window._exhibitionManager.showed();
          this.sendNoLock(thunder, logObj, callback);
        } else if (logtype === 'click') {
          /*点击日志*/
          thunder = cc11001100_hook("thunder", thunderLog.create({
            baseParams: cc11001100_hook("baseParams", $.extend({
              cst: cc11001100_hook("cst", 2, "object-key-init")
            }, logObj), "object-key-init")
          }), "assign");
          if (tpltype === 'Carousel') {
            logExtra.index = cc11001100_hook("logExtra.index", data.index, "assign");
            logExtra.close = cc11001100_hook("logExtra.close", data.close, "assign");
          }
          if (tpltype === 'recRelateTpl') {
            logExtra.notext = cc11001100_hook("logExtra.notext", data.notext, "assign");
          }
          logObj.logExtra = cc11001100_hook("logObj.logExtra", JSON.stringify(logExtra), "assign");
          logObj = cc11001100_hook("logObj", $.extend(logObj, {
            tid: cc11001100_hook("tid", this.logTid.clk, "object-key-init")
          }), "assign");
          this.send(thunder, logObj, callback);
        }
      }, "assign");
      addAdLog.prototype.send = cc11001100_hook("addAdLog.prototype.send", function (thunder, logObj, callback) {
        /*发送日志*/
        if (this.logLock === 0) {
          this.logLock = cc11001100_hook("this.logLock", 1, "assign");
          var self = cc11001100_hook("self", this, "var-init");
          thunder.send(logObj, function () {
            self.logLock = cc11001100_hook("self.logLock", 0, "assign");
            callback && callback();
          }, '');
          window._exhibitionManager && window._exhibitionManager.clicked();
        }
      }, "assign");

      /*不加锁的发送日志。主要为展现日志使用*/
      addAdLog.prototype.sendNoLock = cc11001100_hook("addAdLog.prototype.sendNoLock", function (thunder, logObj, callback) {
        thunder.send(logObj, function () {
          callback && callback();
        }, '');
      }, "assign");
      return addAdLog;
    });
    ;
    /* globals defineBranchModule */
    defineBranchModule('log');
    /* globals defineLeafModules */
    defineLeafModules(['thunder', 'appAdLog']);
  }();
  ;

  /* globals defineExportModules */
  define('rmb-growth-mod/core', ['rmbGrowth/tools', 'rmbGrowth/invoke', 'rmbGrowth/ext', 'rmbGrowth/log'], function (tools, invoke, ext, log) {
    var rmbGrowth = cc11001100_hook("rmbGrowth", {
      tools: cc11001100_hook("tools", tools, "object-key-init"),
      invoke: cc11001100_hook("invoke", invoke, "object-key-init"),
      ext: cc11001100_hook("ext", ext, "object-key-init"),
      log: cc11001100_hook("log", log, "object-key-init")
    }, "var-init");
    return rmbGrowth;
  });

  /**
  * @file growthManager 管理growth相关模块
  * @author zhangjingfeng
  * @version 1.0.1
  */

  !function () {
    var define = cc11001100_hook("define", window.eslx_define || window.define, "var-init");
    define('rmb-growth/manager', function (eslxDefine) {
      var modules = cc11001100_hook("modules", {
        core: cc11001100_hook("core", 'core', "object-key-init")
      }, "var-init");
      return function (moduleName, cb) {
        var depArr = cc11001100_hook("depArr", [], "var-init");
        if (moduleName instanceof Array) {
          if (moduleName.filter(function (name) {
            return !modules[name];
          }).length) {
            return;
          }
          depArr = cc11001100_hook("depArr", moduleName.map(function (name) {
            return 'rmb-growth-mod/' + modules[name];
          }), "assign");
        } else {
          if (!modules[moduleName]) {
            return;
          }
          depArr = cc11001100_hook("depArr", ['rmb-growth-mod/' + modules[moduleName]], "assign");
        }
        eslxDefine(depArr, function (module) {
          cb && cb(module);
        });
      };
    });
  }();
  ;
  require && require(['rmb-growth/manager'], function (manager) {
    manager(['core'], function (coreModule) {
      window.rmbGrowth = cc11001100_hook("window.rmbGrowth", coreModule || window.rmbGrowth, "assign");
    });
  });
})();