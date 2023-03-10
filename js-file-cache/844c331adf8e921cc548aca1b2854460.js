/*! EnlighterJS Syntax Highlighter 3.3.0 | Mozilla Public License 2.0 | https://enlighterjs.org */
var EnlighterJS = cc11001100_hook("EnlighterJS", function (e) {
  "use strict";

  var c = cc11001100_hook("c", {
    indent: cc11001100_hook("indent", 4, "object-key-init"),
    ampersandCleanup: cc11001100_hook("ampersandCleanup", !0, "object-key-init"),
    linehover: cc11001100_hook("linehover", !0, "object-key-init"),
    rawcodeDbclick: cc11001100_hook("rawcodeDbclick", !1, "object-key-init"),
    textOverflow: cc11001100_hook("textOverflow", "break", "object-key-init"),
    collapse: cc11001100_hook("collapse", !1, "object-key-init"),
    retainCssClasses: cc11001100_hook("retainCssClasses", !1, "object-key-init"),
    cssClasses: cc11001100_hook("cssClasses", "", "object-key-init"),
    toolbarOuter: cc11001100_hook("toolbarOuter", "{BTN_TABS}", "object-key-init"),
    toolbarTop: cc11001100_hook("toolbarTop", "{BTN_RAW}{BTN_COPY}{BTN_WINDOW}{BTN_WEBSITE}", "object-key-init"),
    toolbarBottom: cc11001100_hook("toolbarBottom", "{BTN_COLLAPSE}", "object-key-init"),
    linenumbers: cc11001100_hook("linenumbers", !0, "object-key-init"),
    lineoffset: cc11001100_hook("lineoffset", 0, "object-key-init"),
    highlight: cc11001100_hook("highlight", "", "object-key-init"),
    layout: cc11001100_hook("layout", "standard", "object-key-init"),
    language: cc11001100_hook("language", "generic", "object-key-init"),
    theme: cc11001100_hook("theme", "enlighter", "object-key-init"),
    title: cc11001100_hook("title", "", "object-key-init")
  }, "var-init");
  function n(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  function r(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
      var r = cc11001100_hook("r", t[n], "var-init");
      r.enumerable = cc11001100_hook("r.enumerable", r.enumerable || !1, "assign"), r.configurable = cc11001100_hook("r.configurable", !0, "assign"), "value" in r && (r.writable = cc11001100_hook("r.writable", !0, "assign")), Object.defineProperty(e, r.key, r);
    }
  }
  function i(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return t && r(e.prototype, t), n && r(e, n), e;
  }
  function a(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = cc11001100_hook("e.prototype", Object.create(t && t.prototype, {
      constructor: {
        value: cc11001100_hook("value", e, "object-key-init"),
        writable: cc11001100_hook("writable", !0, "object-key-init"),
        configurable: cc11001100_hook("configurable", !0, "object-key-init")
      }
    }), "assign"), t && o(e, t);
  }
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    return (s = cc11001100_hook("s", Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, "assign"))(e);
  }
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return (o = cc11001100_hook("o", Object.setPrototypeOf || function (e, t) {
      return e.__proto__ = cc11001100_hook("e.__proto__", t, "assign"), e;
    }, "assign"))(e, t);
  }
  function l() {
    if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
      if ("function" == typeof Proxy) return 1;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), 1;
      } catch (e) {
        return;
      }
    }
  }
  function g(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return (g = cc11001100_hook("g", l() ? Reflect.construct : function (e, t, n) {
      var r = cc11001100_hook("r", [null], "var-init");
      r.push.apply(r, t);
      var i = cc11001100_hook("i", new (Function.bind.apply(e, r))(), "var-init");
      return n && o(i, n.prototype), i;
    }, "assign")).apply(null, arguments);
  }
  function u(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return !t || "object" != typeof t && "function" != typeof t ? function (e) {
      if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e;
    }(e) : t;
  }
  function p(r) {
    cc11001100_hook("r", r, "function-parameter");
    return function () {
      var e,
        t = cc11001100_hook("t", s(r), "var-init");
      if (l()) {
        var n = cc11001100_hook("n", s(this).constructor, "var-init");
        e = cc11001100_hook("e", Reflect.construct(t, arguments, n), "assign");
      } else e = cc11001100_hook("e", t.apply(this, arguments), "assign");
      return u(this, e);
    };
  }
  function y(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return (y = cc11001100_hook("y", "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (e, t, n) {
      var r = cc11001100_hook("r", function (e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = cc11001100_hook("e", s(e), "assign")););
        return e;
      }(e, t), "var-init");
      if (r) {
        var i = cc11001100_hook("i", Object.getOwnPropertyDescriptor(r, t), "var-init");
        return i.get ? i.get.call(n) : i.value;
      }
    }, "assign"))(e, t, n || e);
  }
  function f(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (e) {
      if (Array.isArray(e)) return d(e);
    }(e) || function (e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    }(e) || b(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function b(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e) {
      if ("string" == typeof e) return d(e, t);
      var n = cc11001100_hook("n", Object.prototype.toString.call(e).slice(8, -1), "var-init");
      return "Object" === n && e.constructor && (n = cc11001100_hook("n", e.constructor.name, "assign")), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
    }
  }
  function d(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    (null == t || t > e.length) && (t = cc11001100_hook("t", e.length, "assign"));
    for (var n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", new Array(t), "var-init"); n < t; n++) r[n] = cc11001100_hook("r[n]", e[n], "assign");
    return r;
  }
  function h(e) {
    cc11001100_hook("e", e, "function-parameter");
    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
      if (Array.isArray(e) || (e = cc11001100_hook("e", b(e), "assign"))) {
        var t = cc11001100_hook("t", 0, "var-init"),
          n = function () {};
        return {
          s: cc11001100_hook("s", n, "object-key-init"),
          n: function () {
            return t >= e.length ? {
              done: cc11001100_hook("done", !0, "object-key-init")
            } : {
              done: cc11001100_hook("done", !1, "object-key-init"),
              value: cc11001100_hook("value", e[t++], "object-key-init")
            };
          },
          e: function (e) {
            throw e;
          },
          f: cc11001100_hook("f", n, "object-key-init")
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var r,
      i,
      a = cc11001100_hook("a", !0, "var-init"),
      s = cc11001100_hook("s", !1, "var-init");
    return {
      s: function () {
        r = cc11001100_hook("r", e[Symbol.iterator](), "assign");
      },
      n: function () {
        var e = cc11001100_hook("e", r.next(), "var-init");
        return a = cc11001100_hook("a", e.done, "assign"), e;
      },
      e: function (e) {
        s = cc11001100_hook("s", !0, "assign"), i = cc11001100_hook("i", e, "assign");
      },
      f: function () {
        try {
          a || null == r.return || r.return();
        } finally {
          if (s) throw i;
        }
      }
    };
  }
  var m = cc11001100_hook("m", {
    sqStrings: {
      regex: cc11001100_hook("regex", /('(?:[^'\\]|\\.)*')/g, "object-key-init"),
      type: cc11001100_hook("type", "s0", "object-key-init")
    },
    dqStrings: {
      regex: cc11001100_hook("regex", /"(?:[^"\\]|\\.)*"/g, "object-key-init"),
      type: cc11001100_hook("type", "s0", "object-key-init")
    },
    bqStrings: {
      regex: cc11001100_hook("regex", /`(?:[^`\\]|\\.)*`/g, "object-key-init"),
      type: cc11001100_hook("type", "s0", "object-key-init")
    },
    char: {
      regex: cc11001100_hook("regex", /('(\\.|.|\\\w+)')/g, "object-key-init"),
      type: cc11001100_hook("type", "s1", "object-key-init")
    },
    slashComments: {
      regex: cc11001100_hook("regex", /(?:^|[^\\])\/\/.*$/gm, "object-key-init"),
      type: cc11001100_hook("type", "c0", "object-key-init")
    },
    poundComments: {
      regex: cc11001100_hook("regex", /(?:^|[^\\])#.*$/gm, "object-key-init"),
      type: cc11001100_hook("type", "c0", "object-key-init")
    },
    blockComments: {
      regex: cc11001100_hook("regex", /\/\*[\s\S]*?\*\//g, "object-key-init"),
      type: cc11001100_hook("type", "c1", "object-key-init")
    },
    docComments: {
      regex: cc11001100_hook("regex", /\/\*\*[\s\S]*?\*\//g, "object-key-init"),
      type: cc11001100_hook("type", "c2", "object-key-init")
    },
    heredoc: {
      regex: cc11001100_hook("regex", /(<<[<-]?\s*?(['"]?)([A-Z0-9_]+)\2\s*\n[\s\S]*?\n\3)/gi, "object-key-init"),
      type: cc11001100_hook("type", "s5", "object-key-init")
    },
    brackets: {
      regex: cc11001100_hook("regex", /[[\](){}<>]+/g, "object-key-init"),
      type: cc11001100_hook("type", "g1", "object-key-init")
    },
    floats: {
      regex: cc11001100_hook("regex", /[\b\W](-?((?:\d+\.\d+|\.\d+|\d+\.)(?:e[+-]?\d+)?)|\d+(?:e[+-]?\d+))/gi, "object-key-init"),
      type: cc11001100_hook("type", "n0", "object-key-init")
    },
    complex: {
      regex: cc11001100_hook("regex", /[\b\W](?:-?(?:(?:\d+\.\d+|\.\d+|\d+\.|\d+)(?:e[+-]?\d+)?)|\d+(?:e[+-]?\d+))[ij]/gi, "object-key-init"),
      type: cc11001100_hook("type", "n5", "object-key-init")
    },
    int: {
      regex: cc11001100_hook("regex", /[\b\W](-?\d+)(?!\.)\b/g, "object-key-init"),
      type: cc11001100_hook("type", "n1", "object-key-init")
    },
    hex: {
      regex: cc11001100_hook("regex", /[\b\W](-?0x[A-F0-9]+)\b/gi, "object-key-init"),
      type: cc11001100_hook("type", "n2", "object-key-init")
    },
    bin: {
      regex: cc11001100_hook("regex", /[\b\W](-?0b[01]+)\b/gi, "object-key-init"),
      type: cc11001100_hook("type", "n3", "object-key-init")
    },
    octal: {
      regex: cc11001100_hook("regex", /[\b\W](-?0[0-7]+)(?!\.)\b/g, "object-key-init"),
      type: cc11001100_hook("type", "n4", "object-key-init")
    },
    prop: {
      regex: cc11001100_hook("regex", /[\w\])]\.(\w+)\b/g, "object-key-init"),
      type: cc11001100_hook("type", "m3", "object-key-init")
    },
    fCalls: {
      regex: cc11001100_hook("regex", /\b([\w]+)\s*\(/gm, "object-key-init"),
      type: cc11001100_hook("type", "m0", "object-key-init")
    },
    mCalls: {
      regex: cc11001100_hook("regex", /\.([\w]+)\s*\(/gm, "object-key-init"),
      type: cc11001100_hook("type", "m1", "object-key-init")
    },
    boolean: {
      regex: cc11001100_hook("regex", /\b(true|false)\b/gi, "object-key-init"),
      type: cc11001100_hook("type", "e0", "object-key-init")
    },
    null: {
      regex: cc11001100_hook("regex", /\b(null)\b/gi, "object-key-init"),
      type: cc11001100_hook("type", "e1", "object-key-init")
    }
  }, "var-init");
  function C(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return {
      text: cc11001100_hook("text", e, "object-key-init"),
      type: cc11001100_hook("type", t, "object-key-init"),
      index: cc11001100_hook("index", r || 0, "object-key-init"),
      end: cc11001100_hook("end", e.length + r, "object-key-init"),
      filter: cc11001100_hook("filter", n || null, "object-key-init"),
      priority: cc11001100_hook("priority", i || 0, "object-key-init")
    };
  }
  var x = cc11001100_hook("x", function () {
      function e() {
        n(this, e), this.rules = cc11001100_hook("this.rules", [], "assign"), this.setupLanguage();
      }
      return i(e, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.sqStrings, m.dqStrings, m.prop, m.slashComments, m.poundComments, m.blockComments, m.brackets, {
            regex: cc11001100_hook("regex", /\W(true|false|null|nil|if|then|else|for|while|do|class|implements|extends|function|end|void|return|in|of|new|this|try|catch|def|except)\W/gi, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, m.mCalls, m.fCalls, m.octal, m.bin, m.hex, m.floats, m.int, {
            regex: cc11001100_hook("regex", /[\b\s]([$&|~*:;]+)[\b\s]/g, "object-key-init"),
            type: cc11001100_hook("type", "g0", "object-key-init")
          }], "assign");
        }
      }, {
        key: cc11001100_hook("key", "analyze", "object-key-init"),
        value: function (e) {
          return function (e, t, n) {
            for (var r = cc11001100_hook("r", 2 < arguments.length && void 0 !== n ? n : "text", "var-init"), i = cc11001100_hook("i", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < t.length; s++) {
              var o = cc11001100_hook("o", t[s], "var-init");
              if (!o || !o.type || !o.regex) return;
              for (var l = cc11001100_hook("l", void 0, "var-init"); null != (l = cc11001100_hook("l", o.regex.exec(e), "assign"));) {
                if (5e4 < ++a) throw new Error("Infinite tokenizer loop detected; more than 50k tokens - language rule [" + s + "] " + o.regex + " seems to be broken");
                if (0 != l[0].length) {
                  o.regex.lastIndex = cc11001100_hook("o.regex.lastIndex", l.index + 1 + l[0].length / 3, "assign");
                  var g = cc11001100_hook("g", Array.isArray(o.type) ? o.type[0] : o.type, "var-init"),
                    u = cc11001100_hook("u", (Array.isArray(o.filter) ? o.filter[0] : o.filter) || null, "var-init");
                  if (1 < l.length) {
                    for (var p = cc11001100_hook("p", 0, "var-init"), c = cc11001100_hook("c", 1, "var-init"); c < l.length; c++) if (l[c]) {
                      var y = cc11001100_hook("y", Array.isArray(o.type) && o.type.length >= c ? o.type[c - 1] : g, "var-init"),
                        f = cc11001100_hook("f", Array.isArray(o.filter) && o.filter.length >= c ? o.filter[c - 1] : u, "var-init"),
                        b = cc11001100_hook("b", l[0].indexOf(l[c], p), "var-init");
                      p = cc11001100_hook("p", b, "assign"), i.push(C(l[c], y, f, l.index + b, s));
                    }
                  } else i.push(C(l[0], g, u, l.index, s));
                }
              }
            }
            i = cc11001100_hook("i", i.sort(function (e, t) {
              return e.index == t.index ? e.priority < t.priority ? -1 : 1 : e.index < t.index ? -1 : 1;
            }), "assign");
            for (var d = cc11001100_hook("d", [], "var-init"), h = cc11001100_hook("h", 0, "var-init"), m = cc11001100_hook("m", 0, "var-init"); m < i.length; m++) {
              if (h < i[m].index && d.push(C(e.substring(h, i[m].index), r, null, h)), i[m].filter) for (var x = cc11001100_hook("x", i[m].filter(i[m]) || [], "var-init"), k = cc11001100_hook("k", 0, "var-init"); k < x.length; k++) d.push(x[k]);else d.push(i[m]);
              h = cc11001100_hook("h", i[m].end, "assign");
              for (var v = cc11001100_hook("v", !1, "var-init"), w = cc11001100_hook("w", m + 1, "var-init"); w < i.length; w++) if (i[w].index >= h) {
                m = cc11001100_hook("m", w - 1, "assign"), v = cc11001100_hook("v", !0, "assign");
                break;
              }
              if (!1 === v) break;
            }
            return h < e.length && d.push(C(e.substring(h), r, null, h)), d;
          }(e, this.rules);
        }
      }]), e;
    }(), "var-init"),
    t = cc11001100_hook("t", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.sqStrings, {
            regex: cc11001100_hook("regex", /\|.*?\|/g, "object-key-init"),
            type: cc11001100_hook("type", "s2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(".*)$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*(\*.*)$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(data):?\s*(\w+)\s*/gi, "object-key-init"),
            type: cc11001100_hook("type", ["k2", "k7"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(type)\s+(\w+)\s*/gi, "object-key-init"),
            type: cc11001100_hook("type", ["k2", "k5"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(abap_true|abap_false)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "e0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(abap_undefined)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "e1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b[A-Z_][A-Za-z0-9_]*\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, m.fCalls, m.int, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init");
  function k(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i = cc11001100_hook("i", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); null != (r = cc11001100_hook("r", t.exec(e.text), "assign"));) {
      a < r.index && i.push(C(e.text.substring(a, r.index), e.type, null, a));
      for (var s = cc11001100_hook("s", n(r, e.type) || [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < s.length; o++) i.push(s[o]);
      a = cc11001100_hook("a", r.index + r[0].length, "assign"), t.lastIndex = cc11001100_hook("t.lastIndex", a, "assign");
    }
    return 0 == i.length ? [e] : (a < e.text.length && i.push(C(e.text.substring(a), e.type, null, a)), i);
  }
  var v = cc11001100_hook("v", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.poundComments, {
            regex: cc11001100_hook("regex", /(<)([A-Z:_][A-Z0-9:.-]*)([\s\S]*?)(\/?>)/gi, "object-key-init"),
            type: cc11001100_hook("type", ["g1", "x1", "text", "g1"], "object-key-init"),
            filter: cc11001100_hook("filter", [null, null, function (e) {
              return k(e, m.dqStrings.regex, function (e) {
                return [C(e[0], "s0")];
              });
            }, null], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(<\/)([A-Z:_][A-Z0-9:.-]*\s*)(>)/gi, "object-key-init"),
            type: cc11001100_hook("type", ["g1", "x1", "g1"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*([A-Z]\w+)\b/gm, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /%\{\w+\}/g, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(on|off)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "e0", "object-key-init")
          }, m.int], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["apacheconf", "httpd"];
        }
      }]), t;
    }(), "var-init"),
    w = cc11001100_hook("w", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /(;.*)$/gm, "object-key-init"),
            type: cc11001100_hook("type", "co0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(\$.*)$/gm, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, m.sqStrings, m.dqStrings, {
            regex: cc11001100_hook("regex", /(^|:)\s*?(\w+)\s+/gm, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*?([A-Z?_][A-Z0-9?_]+:)\s*?/gim, "object-key-init"),
            type: cc11001100_hook("type", "k6", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /@\w+/gi, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /#\w+/gi, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[A-F0-9][A-F0-9$]+?H/gi, "object-key-init"),
            type: cc11001100_hook("type", "n2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\d[\d$]+?D/gi, "object-key-init"),
            type: cc11001100_hook("type", "n1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[01][01$]+?B/gi, "object-key-init"),
            type: cc11001100_hook("type", "n3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[0-7][0-7$]+?(?:Q|O)/gi, "object-key-init"),
            type: cc11001100_hook("type", "nu4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(0x[A-F0-9]+|\$[A-F0-9]+)/gi, "object-key-init"),
            type: cc11001100_hook("type", "n2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(0b[01]+)/g, "object-key-init"),
            type: cc11001100_hook("type", "n3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(\d+)/g, "object-key-init"),
            type: cc11001100_hook("type", "n1", "object-key-init")
          }, m.fCalls], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["asm"];
        }
      }]), t;
    }(), "var-init"),
    S = cc11001100_hook("S", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /(;.*)$/gm, "object-key-init"),
            type: cc11001100_hook("type", "co0", "object-key-init")
          }, m.sqStrings, m.dqStrings, {
            regex: cc11001100_hook("regex", /^\s*?\.\w+\s+/gm, "object-key-init"),
            type: cc11001100_hook("type", "kw4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(r\d{1,2})/gi, "object-key-init"),
            type: cc11001100_hook("type", "kw0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(@[0-9])/gi, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*?(\w+:)\s*?/gm, "object-key-init"),
            type: cc11001100_hook("type", "kw6", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(^|:)\s*?(\w+)\s+/gm, "object-key-init"),
            type: cc11001100_hook("type", "kw0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(0x[A-F0-9]+|\$[A-F0-9]+)/gi, "object-key-init"),
            type: cc11001100_hook("type", "nu2", "object-key-init")
          }, m.bin, m.int, m.fCalls, {
            regex: cc11001100_hook("regex", /\b[A-Z]{2,}[0-9]?[0-9]?\b/g, "object-key-init"),
            type: cc11001100_hook("type", "kw9", "object-key-init")
          }], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["avrasm"];
        }
      }]), t;
    }(), "var-init"),
    _ = cc11001100_hook("_", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.char, {
            regex: cc11001100_hook("regex", /@[\W\w_][\w]+/gm, "object-key-init"),
            type: cc11001100_hook("type", "s9", "object-key-init")
          }, m.boolean, m.null, m.prop, {
            regex: cc11001100_hook("regex", /#.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(break|case|catch|continue|do|else|for|if|goto|switch|try|throw|while)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(__[A-Z][A-Z0-9_]+__|__cplusplus)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "e3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(\w+\d+?_t)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(bool|char|double|float|int|long|short|void)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(enum|struct|typedef|union)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(const|volatile|unsigned|signed|restrict)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(asm|auto|class|auto|default|explicit|export|extern|friend|inline|thread_local|static_assert|nullptr|noexcept|friend|decltype|constexpr|alignof|alignas|virtual|using|typename|typeid|this|template|static|return|register|public|protected|private|operator|namespace|mutable|inline)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(new|delete|cast|const_cast|dynamic_cast|static_cast|reinterpret_cast|sizeof|and|bitand|and_eq|not|not_eq|or|bitor|or_eq|xor|xor_eq|compl)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.mCalls, m.fCalls, m.slashComments, m.blockComments, m.octal, m.bin, m.hex, m.floats, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["c++", "c"];
        }
      }]), t;
    }(), "var-init"),
    A = cc11001100_hook("A", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /\$("(?:[^"\\]|\\.)*")/g, "object-key-init"),
            type: cc11001100_hook("type", "s0", "object-key-init"),
            filter: function (e) {
              return k(e, /\{.*?}/g, function (e) {
                return [C(e[0], "s3")];
              });
            }
          }, m.dqStrings, m.char, m.null, m.boolean, m.prop, {
            regex: cc11001100_hook("regex", /\b(bool|byte|char|decimal|double|float|int|long|sbyte|short|uint|ulong|ushort|void)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(while|try|throw|switch|if|goto|foreach|for|finally|else|do|continue|catch|case|break)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^((?:using|namespace)\s+)(\w[\w._]+[;{\n])/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k0", "k10"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(enum|struct|var)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(const|in|out)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(using|volatile|virtual|using|unsafe|unchecked|static|stackalloc|sealed|return|ref|readonly|public|protected|private|params|override|operator|object|namespace|lock|is|internal|interface|implicit|fixed|extern|explicit|event|delegate|default|class|checked|base|as|abstract)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(this)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(new|sizeof|typeof)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.fCalls, m.mCalls, m.slashComments, m.blockComments, m.docComments, m.int, m.floats, m.bin, m.hex, m.octal, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["c#"];
        }
      }]), t;
    }(), "var-init"),
    E = cc11001100_hook("E", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.sqStrings, {
            regex: cc11001100_hook("regex", /\W@(charset|import|namespace|page|font-face|keyframes|viewport|document|supports)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(url\s*)(\(.*?\))/gi, "object-key-init"),
            type: cc11001100_hook("type", ["m0", "s0"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(#[a-z0-9]+)\W/gi, "object-key-init"),
            type: cc11001100_hook("type", "x14", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(\d+[.\d+-]?\s*(%|[a-z]{1,3})?)/gi, "object-key-init"),
            type: cc11001100_hook("type", "x13", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\w\]](::?[\w-]+)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "x15", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(#[\w-]+)\W/g, "object-key-init"),
            type: cc11001100_hook("type", "x10", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(\.[\w-]+)\W/g, "object-key-init"),
            type: cc11001100_hook("type", "x11", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /([\w-]+)\s*:/g, "object-key-init"),
            type: cc11001100_hook("type", "x12", "object-key-init")
          }, m.blockComments, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["styles"];
        }
      }]), t;
    }(), "var-init"),
    L = cc11001100_hook("L", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /^("""[\s\S]*?"""|'''[\s\S]*?''')/gm, "object-key-init"),
            type: cc11001100_hook("type", "c9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /("""[\s\S]*?"""|'''[\s\S]*?''')/g, "object-key-init"),
            type: cc11001100_hook("type", "s5", "object-key-init")
          }, m.dqStrings, m.sqStrings, {
            regex: cc11001100_hook("regex", /\b(__[a-z]+__)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "e3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[^;]\s*(from\s+)([\w.]+)(\s+import)/gi, "object-key-init"),
            type: cc11001100_hook("type", ["k0", "k10", "k0"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(raise|while|try|if|for|finally|else|elif|continue|break)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(yield|with|return|pass|lambda|is|in|import|global|from|except|def|class|assert|as|async|await)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(and|or|not|del)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(True|False)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "e0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(None)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "e1", "object-key-init")
          }, m.mCalls, m.fCalls, m.poundComments, m.int, m.hex, m.floats, m.octal, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["py"];
        }
      }]), t;
    }(), "var-init"),
    I = cc11001100_hook("I", function () {
      a(t, L);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          y(s(t.prototype), "setupLanguage", this).call(this);
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /\b(bool|char|double|float|int|long|short|void)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(enum|struct|typedef|union|object)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(const|volatile|unsigned|signed|restrict)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(readonly|extern|namespace|public|privat|include|cimport|pyximport|cythonize|cdef|cpdef|ctypedef|property|IF|ELIF|ELSE|DEF)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }].concat(this.rules), "assign");
        }
      }]), t;
    }(), "var-init"),
    W = cc11001100_hook("W", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.poundComments, m.brackets, {
            regex: cc11001100_hook("regex", /\[(\w+)\]/gm, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\{([\w_-]+)\s*(?::\s*(.*?))?}/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k7", "s0"], "object-key-init")
          }], "assign");
        }
      }]), t;
    }(), "var-init"),
    q = cc11001100_hook("q", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /^([+-]{3}.*)$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(@@.*@@\s*)/gm, "object-key-init"),
            type: cc11001100_hook("type", "t2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(\+.*)/gm, "object-key-init"),
            type: cc11001100_hook("type", "t5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(-.*)/gm, "object-key-init"),
            type: cc11001100_hook("type", "t6", "object-key-init")
          }], "assign");
        }
      }]), t;
    }(), "var-init"),
    N = cc11001100_hook("N", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, {
            regex: cc11001100_hook("regex", /\$\{\w+\}/gi, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /ARG\s+(\w+)(?:(=)(.*?)$)?/gim, "object-key-init"),
            type: cc11001100_hook("type", ["k7", "k3", "s0"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /ENV\s+(\w+)(?:(\s+|=)(.*?)$)?/gim, "object-key-init"),
            type: cc11001100_hook("type", ["k7", "k3", "s0"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(?:^|[^\\])#\s*\w+=.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, m.poundComments, {
            regex: cc11001100_hook("regex", /^([a-z]+)\b/gim, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(AS)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s+(&&)/gim, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["docker"];
        }
      }]), t;
    }(), "var-init"),
    D = cc11001100_hook("D", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.bqStrings, m.char, m.boolean, {
            regex: cc11001100_hook("regex", /\b(nil)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "e1", "object-key-init")
          }, m.prop, {
            regex: cc11001100_hook("regex", /\b(var)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(case|break|default|else|goto|switch|if|continue|for)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(func|interface|select|defer|go|map|chan|package|fallthrough|range|import|return)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(iota)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(bool|string|u?int(8|16|32|64)?|uintptr|byte|rune|float32|float64|complex64|complex128)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(struct|type)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(const)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, m.mCalls, m.fCalls, m.slashComments, m.octal, m.int, m.complex, m.floats, m.hex, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["golang"];
        }
      }]), t;
    }(), "var-init"),
    O = cc11001100_hook("O", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /("""[\s\S]*?"""|'''[\s\S]*?''')/g, "object-key-init"),
            type: cc11001100_hook("type", "s5", "object-key-init")
          }, m.dqStrings, m.sqStrings, m.char, m.slashComments, m.blockComments, m.docComments, {
            regex: cc11001100_hook("regex", /(\/(?:[^/\\]|\\.)*\/)/g, "object-key-init"),
            type: cc11001100_hook("type", "s5", "object-key-init")
          }, m.prop, {
            regex: cc11001100_hook("regex", /\b(byte|char|short|int|long|float|double|String)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(break|case|catch|continue|default|do|else|finally|for|goto|if|switch|throw|try|while)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(package|import)(\s+[\w.]+)/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k0", "k10"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(const|enum|def)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(as|assert|class|extends|goto|implements|in|interface|return|thows|trait)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(this|super)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(instanceof|new)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.fCalls, m.mCalls, m.null, m.boolean, {
            regex: cc11001100_hook("regex", /^#.*/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?0[0-7][0-7_]+[GLIDF]?)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?\d[\d_]*[GLIDF]?)(?!\.)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?0x[A-F0-9][A-F0-9_]+[GLIDF]?)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?0b[01][01_]+[GLIDF]?)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(-?((?:\d+\.\d+|\.\d+|\d+\.)(?:e[+-]?\d+)?)|\d+(?:e[+-]?\d+)?)/gi, "object-key-init"),
            type: cc11001100_hook("type", "n0", "object-key-init")
          }, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    $ = cc11001100_hook("$", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, {
            regex: cc11001100_hook("regex", /(;.*)$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, m.poundComments, {
            regex: cc11001100_hook("regex", /^\s*?(\[.*])\s*?$/gm, "object-key-init"),
            type: cc11001100_hook("type", "t2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(\s*?[a-z0-9._-]+\s*?)(=)/gim, "object-key-init"),
            type: cc11001100_hook("type", ["k2", "k3"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(true|false|on|off|yes|no)\b/gim, "object-key-init"),
            type: cc11001100_hook("type", "e0", "object-key-init")
          }, m.octal, m.bin, m.hex, m.floats, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["conf", "cnf"];
        }
      }]), t;
    }(), "var-init"),
    T = cc11001100_hook("T", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.char, {
            regex: cc11001100_hook("regex", /@[\W\w_][\w]+/gm, "object-key-init"),
            type: cc11001100_hook("type", "s9", "object-key-init")
          }, m.prop, {
            regex: cc11001100_hook("regex", /\b(boolean|byte|char|short|int|long|float|double|String|void|Integer|Double|BigInt|Float|Boolean|Byte|Char|Long)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(while|try|catch|case|else|throw|break|if|do|goto|switch|for|continue)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(package|import)(\s+[\w.]+)/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k0", "k10"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(enum)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(const)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(native|volatile|strictfp|finally|class|static|interface|final|extends|transient|return|throws|public|protected|implements|private|synchronized|default|assert|abstract)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(this|super)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(instanceof|new)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.fCalls, m.mCalls, m.null, m.boolean, m.slashComments, m.blockComments, m.docComments, m.int, m.floats, m.bin, m.hex, m.octal, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    R = cc11001100_hook("R", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          function e(e) {
            cc11001100_hook("e", e, "function-parameter");
            return k(e, /\\(x[A-F0-9]{2}|u[A-F0-9]{4}|.)/gi, function (e) {
              return [C(e[0], "s4")];
            });
          }
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", m.sqStrings.regex, "object-key-init"),
            type: cc11001100_hook("type", "s0", "object-key-init"),
            filter: cc11001100_hook("filter", e, "object-key-init")
          }, {
            regex: cc11001100_hook("regex", m.dqStrings.regex, "object-key-init"),
            type: cc11001100_hook("type", "s0", "object-key-init"),
            filter: cc11001100_hook("filter", e, "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /`(?:[^`\\]|\\.)*`/g, "object-key-init"),
            type: cc11001100_hook("type", "s2", "object-key-init"),
            filter: function (e) {
              return k(e, /\$\{.*?}/g, function (e) {
                return [C(e[0], "s3")];
              });
            }
          }, m.boolean, m.null, m.prop, {
            regex: cc11001100_hook("regex", /\b(var|let|enum|const)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(document|window|console)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(break|case|catch|continue|do|else|finally|for|if|switch|try|while|throw)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(as|async|class|constructor|debugger|default|export|extends|function|import|return|with|yield|implements|package|protected|static|interface|private|public|await|module)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(this|super)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(instanceof|new|delete|typeof|void|in)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\W(=>)\W/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.slashComments, m.blockComments, {
            regex: cc11001100_hook("regex", /\W(\/(?:[^/\\]|\\.)*\/\w*)/g, "object-key-init"),
            type: cc11001100_hook("type", "e2", "object-key-init")
          }, m.mCalls, m.fCalls, {
            regex: cc11001100_hook("regex", /\{|}|\(|\)|\[|]/g, "object-key-init"),
            type: cc11001100_hook("type", "g1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?0o[0-7]+)(?!\.)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "n4", "object-key-init")
          }, m.bin, m.hex, m.floats, m.int], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["js"];
        }
      }]), t;
    }(), "var-init"),
    F = cc11001100_hook("F", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /"(?:[^"\\]|\\.)*"\s*:/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, m.dqStrings, m.boolean, m.null, {
            regex: cc11001100_hook("regex", /\{|}|\(|\)|\[|]/g, "object-key-init"),
            type: cc11001100_hook("type", "g1", "object-key-init")
          }, m.int, m.floats, {
            regex: cc11001100_hook("regex", /,|:/g, "object-key-init"),
            type: cc11001100_hook("type", "g0", "object-key-init")
          }], "assign");
        }
      }]), t;
    }(), "var-init"),
    j = cc11001100_hook("j", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.char, {
            regex: cc11001100_hook("regex", /"""[\s\S]*?"""/g, "object-key-init"),
            type: cc11001100_hook("type", "s5", "object-key-init")
          }, m.prop, {
            regex: cc11001100_hook("regex", /\b(Double|Float|Long|Int|Short|Byte|Any|String|Array)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(break|continue|do|else|for|if|throw|try|when|while|catch|finally)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(package|import)(\s+[\w.]+)/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k0", "k10"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(enum|typealias|object|companion|val|var)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(actual|abstract|annotation|companion|crossinline|data|expect|external|final|infix|inline|inner|internal|lateinit|noinline|open|operator|out|override|private|protected|public|reified|sealed|suspend|tailrec|vararg)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(as|class|fun|in|interface|is|return|by|constructor|delegate|dynamic|field|file|get|init|param|property|receiver|set|setparam|where|field|it)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(this|super)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(instanceof|new)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(@\w+|\w+@)/gm, "object-key-init"),
            type: cc11001100_hook("type", "k6", "object-key-init")
          }, m.fCalls, m.mCalls, m.null, m.boolean, m.slashComments, m.blockComments, {
            regex: cc11001100_hook("regex", /[\b\W](-?\d[\d_]*L?)(?!\.)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "n1", "object-key-init")
          }, m.floats, {
            regex: cc11001100_hook("regex", /[\b\W](-?0x[A-F0-9][A-F0-9_]+)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?0b[01][01_]+)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n3", "object-key-init")
          }, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    z = cc11001100_hook("z", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /(?:^|[^\\])%.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[^\\](\\\w+)(?:[\W\s])/gm, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[$()]/g, "object-key-init"),
            type: cc11001100_hook("type", ["s3"], "object-key-init")
          }, m.int, m.floats, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["tex"];
        }
      }]), t;
    }(), "var-init"),
    B = cc11001100_hook("B", function () {
      a(t, E);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          y(s(t.prototype), "setupLanguage", this).call(this);
          var e = cc11001100_hook("e", [m.slashComments, {
            regex: cc11001100_hook("regex", /\b([\w][\w-]+)\s*\(/gm, "object-key-init"),
            type: cc11001100_hook("type", "m0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /@[\w-]+\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /&/gi, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }], "var-init");
          this.rules = cc11001100_hook("this.rules", this.rules.concat(e), "assign");
        }
      }]), t;
    }(), "var-init"),
    Z = cc11001100_hook("Z", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.poundComments, {
            regex: cc11001100_hook("regex", /[\w\])]\.([\w-]+)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "m3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(else)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\s\$[A-Z_]+/g, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(==|!=|=~|!~)/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(\w[\w-]+)\.\w/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, m.int, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return [];
        }
      }]), t;
    }(), "var-init"),
    M = cc11001100_hook("M", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /---\[\[[\s\S]*?(]])/g, "object-key-init"),
            type: cc11001100_hook("type", "c1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /--\[\[[\s\S]*?]]/g, "object-key-init"),
            type: cc11001100_hook("type", "c1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(--.*)$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, m.dqStrings, m.sqStrings, {
            regex: cc11001100_hook("regex", /(\[(=*)\[[\S\s]*?]\2])/g, "object-key-init"),
            type: cc11001100_hook("type", "s5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(true|false)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "e0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(nil)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "e1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(local)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(break|do|else|elseif|end|for|if|repeat|then|until|while)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(function|return|and|in|or|not)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, m.brackets, m.floats, m.mCalls, m.fCalls], "assign");
        }
      }]), t;
    }(), "var-init"),
    P = cc11001100_hook("P", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /[\r|\n](```[a-z_-]*[\r|\n][\S\s]+?```)/gi, "object-key-init"),
            type: cc11001100_hook("type", "t8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*#{1,6}.+$/gm, "object-key-init"),
            type: cc11001100_hook("type", "t1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(.+[\r|\n][=-]{3,})[\r|\n]/g, "object-key-init"),
            type: cc11001100_hook("type", "t1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /`.+?`/g, "object-key-init"),
            type: cc11001100_hook("type", "t8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(?:\*|_|-){3,}$/gm, "object-key-init"),
            type: cc11001100_hook("type", "t2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\W(\*\*|\*|~~|~|__|_)(.*?\1)\W/gm, "object-key-init"),
            type: cc11001100_hook("type", "t4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /!?\[.*?]\(.*?\)/g, "object-key-init"),
            type: cc11001100_hook("type", "t3", "object-key-init")
          }], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["md", "gfm"];
        }
      }]), t;
    }(), "var-init"),
    U = cc11001100_hook("U", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /%.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /%%.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c1", "object-key-init")
          }, m.sqStrings, m.dqStrings, m.boolean, m.mCalls, m.prop, {
            regex: cc11001100_hook("regex", /\b(break|case|catch|continue|do|else|elseif|end|end_try_catch|endfor|endif|endmethods|endparfor|endproperties|endswitch|endwhile|for|if|switch|try|until|while)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(__FILE__|__LINE__|classdef|end_unwind_protect|endclassdef|endenumeration|endevents|endfunctionenumeration|events|function|global|methods|otherwise|parfor|persistent|properties|return|static|unwind_protect|unwind_protect_cleanup)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(@[\w]+)\s*/gm, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, m.fCalls, m.floats, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    G = cc11001100_hook("G", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.sqStrings, m.poundComments, {
            regex: cc11001100_hook("regex", /([a-z]+)\s*\{/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*([a-z]\w+)\s/gm, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\W([a-z]+:\/\/.*?);/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(\d+\.\d+\.\d+\.\d+(?::\d+))\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(?:\W)\$[a-z_]+/g, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](\d+[kmgdyw])\b/g, "object-key-init"),
            type: cc11001100_hook("type", "n0", "object-key-init")
          }, m.int, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return [];
        }
      }]), t;
    }(), "var-init"),
    H = cc11001100_hook("H", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.sqStrings, m.bqStrings, {
            regex: cc11001100_hook("regex", /^\s*(Var(\s+\\GLOBAL)?)(\s+\w+)\b/g, "object-key-init"),
            type: cc11001100_hook("type", ["k2", "k7"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\W(\$\{\w+})\W/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\W(\$\w+)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*([A-Z]\w+)\s+/gm, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b[A-Z][A-Z_]*[A-Z]\b/g, "object-key-init"),
            type: cc11001100_hook("type", "e3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*(!\w+)\s+/gm, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*(\w+:)\s*$/gim, "object-key-init"),
            type: cc11001100_hook("type", "k6", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(admin|all|auto|both|colored|false|force|hide|highest|lastused|leave|listonly|none|normal|notset|off|on|open|print|show|silent|silentlog|smooth|textonly|true|user)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, m.blockComments, {
            regex: cc11001100_hook("regex", /[#;].*?$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, m.int, m.hex, m.octal, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    V = cc11001100_hook("V", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.sqStrings, m.dqStrings, m.heredoc, m.boolean, m.null, {
            regex: cc11001100_hook("regex", /(self|parent|\$this)/gi, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(as|break|case|catch|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|finally|for|foreach|goto|if|switch|throw|try|while)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b__[A-Z][A-Z0-9_]+__\b/g, "object-key-init"),
            type: cc11001100_hook("type", "e3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(__halt_compiler|abstract|array|callable|class|const|continue|declare|default|die|echo|empty|eval|exit|extends|final|function|global|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|print|private|protected|public|require|require_once|return|static|trait|use|var|yield)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(and|or|xor|clone|new|unset)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(int|float|bool|string|resource|object|mixed|numeric)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, m.slashComments, m.blockComments, {
            regex: cc11001100_hook("regex", /\$[A-Z_][\w]*/gim, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, m.fCalls, {
            regex: cc11001100_hook("regex", /->([\w]+)/gim, "object-key-init"),
            type: cc11001100_hook("type", "m1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /::([\w]+)/gim, "object-key-init"),
            type: cc11001100_hook("type", "m2", "object-key-init")
          }, m.octal, m.bin, m.hex, m.floats, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    J = cc11001100_hook("J", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          function e(e) {
            cc11001100_hook("e", e, "function-parameter");
            return k(e, /\$(?:\w+|\(.*?\))/g, function (e) {
              return [C(e[0], "k7")];
            });
          }
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /"(?:[^"`]|`.)*"/g, "object-key-init"),
            type: cc11001100_hook("type", "s2", "object-key-init"),
            filter: cc11001100_hook("filter", e, "object-key-init")
          }, m.sqStrings, {
            regex: cc11001100_hook("regex", /@"[\S\s]*?\n\s*"@/g, "object-key-init"),
            type: cc11001100_hook("type", "s5", "object-key-init"),
            filter: cc11001100_hook("filter", e, "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /@'[\S\s]*?\n\s*'@/g, "object-key-init"),
            type: cc11001100_hook("type", "s5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Begin|Break|Catch|Continue|Else|Elseif|End|Finally|For|ForEach|If|Switch|Throw|Try|Until|While)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Data|Do|DynamicParam|Exit|Filter|From|Function|In|InlineScript|Hidden|Parallel|Param|Process|Return|Sequence|Trap|Workflow)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b([A-Z]\w+(?:-\w+)+)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "m0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /<#[\S\s]+?#>/gi, "object-key-init"),
            type: cc11001100_hook("type", "c1", "object-key-init")
          }, m.poundComments, {
            regex: cc11001100_hook("regex", /\$[A-Z_][\w]*/gim, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, m.mCalls, m.fCalls, m.int, m.floats, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    X = cc11001100_hook("X", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /(%.*)$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, m.blockComments, m.dqStrings, m.sqStrings, {
            regex: cc11001100_hook("regex", /^(\w+)(?:\(.*?\))?\s*(?::-|\.)/gm, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(true|false|Yes|No|not|fail)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "e0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(catch|throw|repeat)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(\?-)/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(is)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[A-Z_][\w]*/g, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, m.brackets, m.floats, m.int, m.fCalls], "assign");
        }
      }]), t;
    }(), "var-init"),
    Y = cc11001100_hook("Y", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.int, m.floats, {
            regex: cc11001100_hook("regex", /[\b\W](-?\$[A-F0-9]+)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?%[01]+)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](\*\w+)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "text", "object-key-init")
          }, m.dqStrings, {
            regex: cc11001100_hook("regex", /[[\]()]+/g, "object-key-init"),
            type: cc11001100_hook("type", "g0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /#\w+/gim, "object-key-init"),
            type: cc11001100_hook("type", "g0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[@?]\w+/gim, "object-key-init"),
            type: cc11001100_hook("type", "g1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(IncludeFile|XIncludeFile|IncludeBinary|IncludePath) (.*?)$/gim, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Break|Case|Continue|Default|Else|ElseIf|End|EndIf|EndSelect|For|ForEver|ForEach|Gosub|Goto|If|Next|Repeat|Return|FakeReturn|Select|Until|Wend|While|To|Step)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Array|List|Map|Procedure(?:C|Dll|CDll)?|ProcedureReturn|EndProcedure|Declare(?:C|Dll|CDll)?|ImportC?|EndImport|As|Macro|MacroExpandedCount|EndMacro|UndefineMacro|DeclareModule|EndDeclareModule|Module|EndModule|UseModule|UnuseModule|With|EndWith|PrototypeC?|Runtime|Swap|Data|DataSection|EndDataSection|Read|Restore)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(ReDim|Dim|NewList|NewMap|Enumeration|EndEnumeration|Interface|Extends|EndInterface|Structure(?:Union)?|EndStructure(?:Union)?)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(?:ReDim|Dim|NewList|NewMap)\s*([\w]+)\(/gim, "object-key-init"),
            type: cc11001100_hook("type", "text", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Define|Global|Protected|Shared|Static|Threaded)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\w\])]\.(s{\d+}|(?:p-ascii|p-utf8|p-bstr|p-unicode|p-variant)|\w+)(?:\([\d,]*\))?/gi, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(CompilerIf|CompilerElse|CompilerElseIf|CompilerEndIf|CompilerSelect|CompilerCase|CompilerDefault|CompilerEndSelect|CompilerError|CompilerWarning|EnableExplicit|DisableExplicit|EnableASM|DisableASM|EnableDebugger|DisableDebugger|Debug|DebugLevel|CallDebugger)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\W(And|Not|Or|Xor)\W/gi, "object-key-init"),
            type: cc11001100_hook("type", "k6", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(<=|=<|>=|=>|<>|<<|>>|=|-|\+|\/|%|<|>|&|\||!|~)/gi, "object-key-init"),
            type: cc11001100_hook("type", "k6", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(\*)(?:\d|\s*(?:\b|-|\(|%|\$|\*))/gi, "object-key-init"),
            type: cc11001100_hook("type", "k6", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(\w+)::/gi, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(\w+):/gi, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, m.fCalls, {
            regex: cc11001100_hook("regex", /;.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\\(\w+)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "m3", "object-key-init")
          }], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["pb"];
        }
      }]), t;
    }(), "var-init"),
    Q = cc11001100_hook("Q", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.prop, {
            regex: cc11001100_hook("regex", /\b([A-Z]\w+)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(import)(\s+[\w.]+)/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k0", "k5"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(bool|char|double|float|int|long|short|void|string)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, m.mCalls, m.null, m.boolean, m.slashComments, m.blockComments, m.int, m.floats, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    K = cc11001100_hook("K", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /^(.*?)$/g, "object-key-init"),
            type: cc11001100_hook("type", "text", "object-key-init")
          }], "assign");
        }
      }]), t;
    }(), "var-init"),
    ee = cc11001100_hook("ee", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          function e(e) {
            cc11001100_hook("e", e, "function-parameter");
            return e.text.match(/^%r/) ? e.type = cc11001100_hook("e.type", "e2", "assign") : e.text.match(/^%x/) && (e.type = cc11001100_hook("e.type", "e4", "assign")), [e];
          }
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.sqStrings, m.heredoc, {
            regex: cc11001100_hook("regex", /(`(?:[^`\\]|\\.)*`)/g, "object-key-init"),
            type: cc11001100_hook("type", "e4", "object-key-init")
          }, m.boolean, {
            regex: cc11001100_hook("regex", /\b(nil)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "e1", "object-key-init")
          }, m.fCalls, m.prop, {
            regex: cc11001100_hook("regex", /@{1,2}[A-Za-z_]\w*\W/g, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[^:](:[\w]+)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k6", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(\$[a-z0-9_-]+|\$.)\W/gi, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(begin|break|case|do|else|elsif|end|ensure|for|if|in|next|redo|rescue|retry|then|unless|until|when|while)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b((?:__)?[A-Z][A-Z0-9_]+)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "e3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(alias|class|defined\?|undef|def|module|return|self|super|yield)\W/gi, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(and|not|or)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.poundComments, {
            regex: cc11001100_hook("regex", /^=begin[\S\s]*?^=end/gim, "object-key-init"),
            type: cc11001100_hook("type", "c2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(%[iqrswx](\W)(?:[^\2\n\\]|\\.)*\2[iomx]*)/gim, "object-key-init"),
            type: cc11001100_hook("type", "s2", "object-key-init"),
            filter: cc11001100_hook("filter", e, "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(%[iqrswx]?(\{(?:[^}\\]|\\.)*}|\[(?:[^}\\]|\\.)*]|\((?:[^)\\]|\\.)*\))[iomx]*)/gim, "object-key-init"),
            type: cc11001100_hook("type", "s2", "object-key-init"),
            filter: cc11001100_hook("filter", e, "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\W(\/(?:[^/\\]|\\.)*\/\w*)\W/g, "object-key-init"),
            type: cc11001100_hook("type", "e2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\W\?(?:\w|\\M|\\C)(?:-\w|-\\M|-\\C)*\b/g, "object-key-init"),
            type: cc11001100_hook("type", "n1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?\d[\d_]+?)(?!\.)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "n1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?0x[A-F0-9][A-F0-9_]+)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?0b[01][01_]+)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?[\d_]+(?:\.[\d_]+)?(?:e[+-]?\d+)?[ji]?)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n0", "object-key-init")
          }, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    te = cc11001100_hook("te", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.char, {
            regex: cc11001100_hook("regex", /r((#+)".*?"\2)/gm, "object-key-init"),
            type: cc11001100_hook("type", "s0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /("(?:\\.|\\\s*\n|\\s*\r\n|[^\\"])*")/g, "object-key-init"),
            type: cc11001100_hook("type", "s0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*#.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /fn\s+([\w]+)\s*(<\w+\s*>)?\(/gm, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b\.?([\w]+)\s*(\(|::)/gm, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b([\w]+)!/gm, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\bself\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, m.boolean, {
            regex: cc11001100_hook("regex", /\b(while|loop|in|for|if|else|do|continue|break)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(type|struct|let|enum)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(const)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(yield|where|virtual|use|unsized|unsafe|trait|super|static|return|ref|pure|pub|proc|priv|override|offsetof|mut|move|mod|match|macro|impl|fn|final|extern|crate|box|become|as|alignof|abstract)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(sizeof|typeof)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b([0-9_]+\.?[0-9_]+?(e\+[0-9_]+)?)(?:f32|f64)?\b/gim, "object-key-init"),
            type: cc11001100_hook("type", "n0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b([0-9_]+|0o[0-9_]+|0x[A-F0-9_]+|0b[0-1_]+)(?:u8|i8|u16|i16|u32|i32|u64|i64|isize|usize)?\b/gim, "object-key-init"),
            type: cc11001100_hook("type", "n1", "object-key-init")
          }, m.slashComments, m.blockComments, {
            regex: cc11001100_hook("regex", /(?:^|[^\\])\/\/[/!].*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\/\*[*!][\s\S]*?\*\//gm, "object-key-init"),
            type: cc11001100_hook("type", "c2", "object-key-init")
          }, m.brackets, {
            regex: cc11001100_hook("regex", /\W(&)\w/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }], "assign");
        }
      }]), t;
    }(), "var-init"),
    ne = cc11001100_hook("ne", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.char, {
            regex: cc11001100_hook("regex", /s"(?:[^"\\]|\\.)*"/g, "object-key-init"),
            type: cc11001100_hook("type", "s2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /`(?:[^`\\]|\\.)*`/g, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /@[\W\w_][\w]+/g, "object-key-init"),
            type: cc11001100_hook("type", "s9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b([A-Z]\w*)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(while|try|catch|else|throw|break|if|do|goto|switch|for|match)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(package|import)(\s+[\w.]+)/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k0", "k10"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\w\s)](_|:|@|#|<-|←|<:|<%|=|=>|⇒|>:)[\b\w\s]/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(abstract|class|case|extends|final|finally|forSome|implicit|lazy|object|override|private|protected|return|sealed|trait|with|yield)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(def)\s+(\w+)\b/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k2", "m0"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(type)\s+(\w+)\b/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k2", "k5"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(val)\s+(\w+)\b/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k2", "k7"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(var)\s+(\w+)\b/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k2", "k7"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(this|super)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(new)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.mCalls, m.fCalls, m.null, m.boolean, m.slashComments, m.blockComments, m.docComments, m.int, m.floats, m.bin, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    re = cc11001100_hook("re", function () {
      a(t, E);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          y(s(t.prototype), "setupLanguage", this).call(this);
          var e = cc11001100_hook("e", [m.slashComments, {
            regex: cc11001100_hook("regex", /\b([\w-]+)\s*\(/gm, "object-key-init"),
            type: cc11001100_hook("type", "m0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\$[\w-]+\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /@[\w-]+\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /&/gi, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }], "var-init");
          this.rules = cc11001100_hook("this.rules", this.rules.concat(e), "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["sass"];
        }
      }]), t;
    }(), "var-init"),
    ie = cc11001100_hook("ie", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /(^#!.*?)\n/gi, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, m.poundComments, {
            regex: cc11001100_hook("regex", /[^\\]("(?:[^"\\]|\\.)*")/g, "object-key-init"),
            type: cc11001100_hook("type", "s0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /`.*?`/gm, "object-key-init"),
            type: cc11001100_hook("type", "s2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(\$)\(/gm, "object-key-init"),
            type: cc11001100_hook("type", "s2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(\$\d)\b/gim, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(\$\w+)\b/gim, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^(\s*\w+)=/gm, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*\w+\)\s*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "k6", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(if|fi|then|elif|else|for|do|done|until|while|break|continue|case|esac|in|eq|ne|gt|lt|ge|le)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(return|function)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*\w+\(\)\s*\{/gm, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, m.int], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["bash", "sh", "zsh"];
        }
      }]), t;
    }(), "var-init"),
    ae = cc11001100_hook("ae", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.poundComments, m.blockComments, {
            regex: cc11001100_hook("regex", /--.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, m.null, m.sqStrings, {
            regex: cc11001100_hook("regex", /`\w+?`(?:\.`\w+?`)*/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(all|and|any|between|exists|in|like|not|or|is null|is not null|unique|=|!=|<>|>|<|>=|<=|!<|!>)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(bigint)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(unsigned)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(SELECT|INSERT|UPDATE|DELETE|INTO|FROM|CREATE|TABLE|VIEW|WHERE|TRIGGER|ALTER|ORDER BY|DESC|ASC|AS|BETWEEN|JOIN|LEFT|RIGHT|INNER|OUTER|USING|ON|UNION)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b[A-Z]+\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, m.int, m.floats], "assign");
        }
      }]), t;
    }(), "var-init"),
    se = cc11001100_hook("se", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, {
            regex: cc11001100_hook("regex", m.sqStrings.regex, "object-key-init"),
            type: cc11001100_hook("type", "n0", "object-key-init")
          }, m.prop, m.slashComments, m.poundComments, m.blockComments, m.brackets, {
            regex: cc11001100_hook("regex", /\b(const|enum|local)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(break|case|catch|continue|else|for|foreach|if|switch|while|try|do)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(base|class|clone|constructor|default|extends|false|function|null|resume|return|static|this|throw|true|yield)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(delete|in|instanceof|typeof)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.mCalls, m.fCalls, m.octal, m.hex, m.floats, m.int], "assign");
        }
      }]), t;
    }(), "var-init"),
    oe = cc11001100_hook("oe", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.boolean, {
            regex: cc11001100_hook("regex", /#.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, m.prop, {
            regex: cc11001100_hook("regex", /(import )(.*?)$/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k0", "k10"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(nil)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "e1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(break|case|continue|default|do|else|for|if|switch|while|catch|throw|try)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(var|let|enum|struct)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Int|UInt|Float|Double|Bool|String|Character|Optional|Array|Dictionary)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(associatedtype|class|deinit|extension|func|init|inout|internal|operator|private|protocol|public|static|subscript|typealias|defer|fallthrough|guard|in|as|repeat|return|where|dynamicType|is|rethrows|super|self|Self|throws|associativity|convenience|dynamic|didSet|final|get|infix|indirect|lazy|left|mutating|none|nonmutating|optional|override|postfix|precedence|prefix|Protocol|required|right|set|Type|unowned|weak|willSet)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, m.mCalls, m.fCalls, {
            regex: cc11001100_hook("regex", /(?:^|[^\\])\/\/\/.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c2", "object-key-init")
          }, m.docComments, m.slashComments, m.blockComments, {
            regex: cc11001100_hook("regex", /[\b\W](-?0b[01_]+)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?0x[A-F0-9_]+)(?!\.)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?0o[0-7_]+)(?!\.)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "n4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[\b\W](-?[\d_]+)(?!\.)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "n1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(-?(?:[\d_]+\.[\d_]+(?:e[+-]?[\d_]+)?))/gi, "object-key-init"),
            type: cc11001100_hook("type", "n0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(-?0x(?:[A-F0-9_]+\.[A-F0-9_]+(?:p[+-]?[A-F0-9_]+)?))/gi, "object-key-init"),
            type: cc11001100_hook("type", "n2", "object-key-init")
          }, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    le = cc11001100_hook("le", function () {
      a(t, R);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          y(s(t.prototype), "setupLanguage", this).call(this);
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /\b(boolean|number|string|any|void|undefined|never|symbol)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(type|interface)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(abstract|implements|readonly)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(declare|namespace)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b([\w]+)\s*</gm, "object-key-init"),
            type: cc11001100_hook("type", "m0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /[<>]/g, "object-key-init"),
            type: cc11001100_hook("type", "g1", "object-key-init")
          }].concat(this.rules), "assign");
        }
      }]), t;
    }(), "var-init"),
    ge = cc11001100_hook("ge", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /((?:^\s*|\s+)--.*$)/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /^\s*(?:use|library)\s*(\S+);/gim, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, m.fCalls, {
            regex: cc11001100_hook("regex", /\*\*|\*|\/|\+|-|&|=|\/=|<|<=|>|>=/g, "object-key-init"),
            type: cc11001100_hook("type", "g0", "object-key-init")
          }, m.dqStrings, m.sqStrings, m.brackets, {
            regex: cc11001100_hook("regex", /\b(alias|array|variable|downto|range|to|type|units)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(array|buffer|bus|file)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(if|else|elsif|end|for|while|loop|when|begin|block|case|exit|next|then)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(access|after|all|architecture|attribute|assert|body|component|configuration|constant|disconnect|entity|function|generate|generic|group|guarded|impure|in|inertial|inout|is|label|library|linkage|literal|map|null|of|on|open|others|out|package|port|postponed|procedure|process|pure|record|return|select|severity|signal|shared|subtype|transport|unaffected|use|vaiable|with|wait|until)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(abs|not|mod|rem|sll|srl|sla|sra|rol|ror|and|or|nand|nor|xor|xnor|new)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.floats], "assign");
        }
      }]), t;
    }(), "var-init"),
    ue = cc11001100_hook("ue", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, m.boolean, m.prop, {
            regex: cc11001100_hook("regex", /(#.*?)(?:'|$)/gim, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Case|Catch|Continue|Each|Else|ElseIf|End|EndIf|Do|Finally|For|If|Loop|Next|OrElse|Then|Throw|Try|When|While)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(Imports )(.*?)$/gm, "object-key-init"),
            type: cc11001100_hook("type", ["k0", "k10"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Boolean|Byte|CBool|CByte|CChar|CDate|CDbl|CDec|Char|CInt|CLng|CObj|CSByte|CShort|CSng|CStr|CType|CUInt|CULng|CUShort|Decimal|Double|Integer|Long|ParamArray|SByte|Short|Single|String|UInteger|ULong|UShort)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Dim|Enum|Let|ReDim)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(Const|Shared|Static)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k8", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(AddHandler|AddressOf|Alias|As|ByRef|ByVal|Call|Class|Date|Declare|Default|Delegate|DirectCast|Erase|Error|Event|Exit|Friend|Function|Get|GetType|GetXMLNamespace|Global|GoSub|GoTo|Handles|Implements|In|Inherits|Interface|Lib|Like|Me|Module|MustInherit|MustOverride|MyBase|MyClass|Namespace|Narrowing|Nothing|NotInheritable|NotOverridable|Object|Of|On|Operator|Option|Optional|Out|Overloads|Overridable|Overrides|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|REM|RemoveHandler|Resume|Return|Select|Set|Shadows|Step|Stop|Structure|Sub|SyncLock|To|TryCast|Using|Variant|Wend|Widening|With|WithEvents|WriteOnly)\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(And|AndAlso|Is|IsNot|Mod|New|Not|Or|TypeOf|Xor)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k3", "object-key-init")
          }, m.mCalls, m.fCalls, {
            regex: cc11001100_hook("regex", /'.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "c0", "object-key-init")
          }, m.int, m.floats, m.brackets], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["vb"];
        }
      }]), t;
    }(), "var-init"),
    pe = cc11001100_hook("pe", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [{
            regex: cc11001100_hook("regex", /<!DOCTYPE[\s\S]+?>/g, "object-key-init"),
            type: cc11001100_hook("type", "k9", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /<\?xml[\s\S]+\?>/gi, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /<!--[\s\S]*?-->/g, "object-key-init"),
            type: cc11001100_hook("type", "c1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(<!\[CDATA\[)([\s\S]*?)(]]>)/gim, "object-key-init"),
            type: cc11001100_hook("type", ["c9", "text", "c9"], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(<)([A-Z:_][A-Z0-9:.-]*)([\s\S]*?)(\/?>)/gi, "object-key-init"),
            type: cc11001100_hook("type", ["g1", "x1", "text", "g1"], "object-key-init"),
            filter: cc11001100_hook("filter", [null, null, function (e) {
              return k(e, /\b([\w:-]+)(\s*=\s*)(['"][^'"]*['"]|[^'" \t]+)/gi, function (e) {
                return [C(e[1], "x2"), C(e[2], "k3"), C(e[3], "s0")];
              });
            }, null], "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /(<\/)([A-Z:_][A-Z0-9:.-]*\s*)(>)/gi, "object-key-init"),
            type: cc11001100_hook("type", ["g1", "x1", "g1"], "object-key-init")
          }], "assign");
        }
      }], [{
        key: cc11001100_hook("key", "alias", "object-key-init"),
        value: function () {
          return ["html"];
        }
      }]), t;
    }(), "var-init"),
    ce = cc11001100_hook("ce", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.poundComments, m.boolean, m.null, {
            regex: cc11001100_hook("regex", /^%[A-Z]+\s+.*$/gm, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b!{1,2}[A-Z]+\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b[a-z][a-z0-9_-]*:/gim, "object-key-init"),
            type: cc11001100_hook("type", "k7", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\{|}|\(|\)|\[|]/g, "object-key-init"),
            type: cc11001100_hook("type", "g1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\s+(?:>|\|)[\r|\n]+((?:\s+[^\r\n]+[\r|\n]+)+)/gi, "object-key-init"),
            type: cc11001100_hook("type", "s5", "object-key-init")
          }, m.dqStrings, m.sqStrings, m.floats], "assign");
        }
      }]), t;
    }(), "var-init"),
    ye = cc11001100_hook("ye", function () {
      a(t, x);
      var e = cc11001100_hook("e", p(t), "var-init");
      function t() {
        return n(this, t), e.apply(this, arguments);
      }
      return i(t, [{
        key: cc11001100_hook("key", "setupLanguage", "object-key-init"),
        value: function () {
          this.rules = cc11001100_hook("this.rules", [m.dqStrings, {
            regex: cc11001100_hook("regex", /`\w*\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k4", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\[( *\d+(?: *\: *\d+) *)\]/g, "object-key-init"),
            type: cc11001100_hook("type", "e3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(for|generate|if|else|repeat|case|endcase|begin|end|ifnone)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(output|input|inout|reg|wire|assign)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k5", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(module|endmodule|always|function|endfunction)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /\b(or|rpmos|tranif1|and|initial|rtran|tri|parameter|rtranif0|tri0|pmos|rtranif1|tri1|buf|endprimitive|integer|posedge|scalared|triand|bufif0|endspecify|join|primitive|small|trior|bufif1|endtable|large|pull0|specify|trireg|endtask|macromodule|pull1|specparam|vectored|casex|event|medium|pullup|strong0|wait|casez|pulldown|strong1|wand|cmos|force|nand|rcmos|supply0|weak0|deassign|forever|negedge|real|supply1|weak1|default|nmos|realtime|table|defparam|nor|task|disable|highz0|not|release|time|wor|edge|highz1|notif0|tran|xnor|notif1|rnmos|tranif0|xor)\b/g, "object-key-init"),
            type: cc11001100_hook("type", "k0", "object-key-init")
          }, m.slashComments, m.blockComments, {
            regex: cc11001100_hook("regex", /-?\d*'s?d[0-9_xz]+\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n1", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /-?\d*'s?h[0-9a-f_xz]+\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n2", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /-?\d*'s?b[01_xz]+\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n3", "object-key-init")
          }, {
            regex: cc11001100_hook("regex", /-?\d*'s?o[0-7_xz]+\b/gi, "object-key-init"),
            type: cc11001100_hook("type", "n4", "object-key-init")
          }, m.int, m.brackets], "assign");
        }
      }]), t;
    }(), "var-init"),
    fe = cc11001100_hook("fe", Object.freeze({
      __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
      generic: cc11001100_hook("generic", x, "object-key-init"),
      abap: cc11001100_hook("abap", t, "object-key-init"),
      apache: cc11001100_hook("apache", v, "object-key-init"),
      assembly: cc11001100_hook("assembly", w, "object-key-init"),
      avrassembly: cc11001100_hook("avrassembly", S, "object-key-init"),
      cpp: cc11001100_hook("cpp", _, "object-key-init"),
      csharp: cc11001100_hook("csharp", A, "object-key-init"),
      css: cc11001100_hook("css", E, "object-key-init"),
      cython: cc11001100_hook("cython", I, "object-key-init"),
      cordpro: cc11001100_hook("cordpro", W, "object-key-init"),
      diff: cc11001100_hook("diff", q, "object-key-init"),
      dockerfile: cc11001100_hook("dockerfile", N, "object-key-init"),
      go: cc11001100_hook("go", D, "object-key-init"),
      groovy: cc11001100_hook("groovy", O, "object-key-init"),
      ini: cc11001100_hook("ini", $, "object-key-init"),
      java: cc11001100_hook("java", T, "object-key-init"),
      javascript: cc11001100_hook("javascript", R, "object-key-init"),
      json: cc11001100_hook("json", F, "object-key-init"),
      kotlin: cc11001100_hook("kotlin", j, "object-key-init"),
      latex: cc11001100_hook("latex", z, "object-key-init"),
      less: cc11001100_hook("less", B, "object-key-init"),
      lighttpd: cc11001100_hook("lighttpd", Z, "object-key-init"),
      lua: cc11001100_hook("lua", M, "object-key-init"),
      markdown: cc11001100_hook("markdown", P, "object-key-init"),
      matlab: cc11001100_hook("matlab", U, "object-key-init"),
      nginx: cc11001100_hook("nginx", G, "object-key-init"),
      nsis: cc11001100_hook("nsis", H, "object-key-init"),
      php: cc11001100_hook("php", V, "object-key-init"),
      powershell: cc11001100_hook("powershell", J, "object-key-init"),
      prolog: cc11001100_hook("prolog", X, "object-key-init"),
      purebasic: cc11001100_hook("purebasic", Y, "object-key-init"),
      python: cc11001100_hook("python", L, "object-key-init"),
      qml: cc11001100_hook("qml", Q, "object-key-init"),
      raw: cc11001100_hook("raw", K, "object-key-init"),
      ruby: cc11001100_hook("ruby", ee, "object-key-init"),
      rust: cc11001100_hook("rust", te, "object-key-init"),
      scala: cc11001100_hook("scala", ne, "object-key-init"),
      scss: cc11001100_hook("scss", re, "object-key-init"),
      shell: cc11001100_hook("shell", ie, "object-key-init"),
      sql: cc11001100_hook("sql", ae, "object-key-init"),
      squirrel: cc11001100_hook("squirrel", se, "object-key-init"),
      swift: cc11001100_hook("swift", oe, "object-key-init"),
      typescript: cc11001100_hook("typescript", le, "object-key-init"),
      vhdl: cc11001100_hook("vhdl", ge, "object-key-init"),
      visualbasic: cc11001100_hook("visualbasic", ue, "object-key-init"),
      xml: cc11001100_hook("xml", pe, "object-key-init"),
      yaml: cc11001100_hook("yaml", ce, "object-key-init"),
      verilog: cc11001100_hook("verilog", ye, "object-key-init")
    }), "var-init"),
    be = cc11001100_hook("be", {
      standard: cc11001100_hook("standard", "generic", "object-key-init")
    }, "var-init"),
    de = cc11001100_hook("de", {}, "var-init"),
    he = cc11001100_hook("he", !1, "var-init");
  function me(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e = cc11001100_hook("e", function (e) {
      if (!he) for (var t in he = cc11001100_hook("he", !0, "assign"), fe) if ("function" == typeof fe[t].alias) {
        var n,
          r = cc11001100_hook("r", h(fe[t].alias()), "var-init");
        try {
          for (r.s(); !(n = cc11001100_hook("n", r.n(), "assign")).done;) {
            var i = cc11001100_hook("i", n.value, "var-init");
            be[i] = cc11001100_hook("be[i]", t, "assign");
          }
        } catch (e) {
          r.e(e);
        } finally {
          r.f();
        }
      }
      return be[e];
    }(e = cc11001100_hook("e", (e || "").toLowerCase(), "assign")) || e, "assign"), fe[e] ? e : null;
  }
  var xe = cc11001100_hook("xe", {
    document: cc11001100_hook("document", document, "object-key-init"),
    window: cc11001100_hook("window", window, "object-key-init")
  }, "var-init");
  function ke() {
    return document;
  }
  function ve() {
    return window;
  }
  function we(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], "var-init");
    e.style.display = cc11001100_hook("e.style.display", !0 === t ? "block" : "none", "assign");
  }
  function Ce(e) {
    cc11001100_hook("e", e, "function-parameter");
    e.parentNode.removeChild(e);
  }
  function Se(e) {
    cc11001100_hook("e", e, "function-parameter");
    return null != e && 0 < e.length ? ke().querySelectorAll(e) : [];
  }
  function _e(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.getAttribute("data-" + t) || null;
  }
  function Ae(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.getAttribute(t) || null;
  }
  function Ee(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.parentNode.insertBefore(t, e);
  }
  function Le(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", ke(), "var-init"),
      i = cc11001100_hook("i", r.createElement(e), "var-init");
    if (0 < n.length) for (var a = cc11001100_hook("a", 0, "var-init"); a < n.length; a++) {
      var s = cc11001100_hook("s", n[a], "var-init");
      if (null !== s && !1 !== s) if (void 0 !== s) {
        if (s.push) for (var o = cc11001100_hook("o", 0, "var-init"); o < s.length; o++) {
          var l = cc11001100_hook("l", s[o], "var-init");
          null !== l && !1 !== l && (void 0 !== l ? l.appendChild ? i.appendChild(l) : i.appendChild(r.createTextNode(l)) : i.appendChild(r.createTextNode("#INVALID_ELEMENT#")));
        } else s.appendChild ? i.appendChild(s) : i.appendChild(r.createTextNode(s));
      } else i.appendChild(r.createTextNode("#INVALID_ELEMENT#"));
    }
    function g(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      i.addEventListener(e, function (e) {
        e.preventDefault(), e.stopPropagation(), t && t.apply(i, [e, i]);
      });
    }
    for (var u in t) if (Object.prototype.hasOwnProperty.call(t, u)) {
      var p = cc11001100_hook("p", t[u], "var-init");
      if ("on" === u.substr(0, 2)) {
        if (null === p) continue;
        g(u.substr(2).toLowerCase(), p);
      } else {
        if (null == p) continue;
        switch (u) {
          case "className":
            i.setAttribute("class", p);
            break;
          case "htmlFor":
            i.setAttribute("for", p);
            break;
          default:
            i.setAttribute(u, p);
        }
      }
    }
    return i.on = cc11001100_hook("i.on", g, "assign"), i;
  }
  function Ie(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n = cc11001100_hook("n", arguments.length, "var-init"), r = cc11001100_hook("r", new Array(2 < n ? n - 2 : 0), "var-init"), i = cc11001100_hook("i", 2, "var-init"); i < n; i++) r[i - 2] = cc11001100_hook("r[i - 2]", arguments[i], "assign");
    if ("function" != typeof e) return Le(e, t, r);
    var a = cc11001100_hook("a", g(e, [t || {}].concat(r)), "var-init");
    return "function" == typeof a.render ? a.render() : a instanceof HTMLElement ? a : void ke().createTextNode("#INVALID_JSX_ELEMENT#");
  }
  function We(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e.classList.contains(t) || e.classList.add(t);
  }
  function qe(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e.classList.contains(t) && e.classList.remove(t);
  }
  function Ne(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e.classList.contains(t);
  }
  function De(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t);
  }
  var Oe = cc11001100_hook("Oe", Object.freeze({
    __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
    globals: cc11001100_hook("globals", xe, "object-key-init"),
    getDocument: cc11001100_hook("getDocument", ke, "object-key-init"),
    getWindow: cc11001100_hook("getWindow", ve, "object-key-init"),
    displayElement: cc11001100_hook("displayElement", we, "object-key-init"),
    disposeElement: cc11001100_hook("disposeElement", Ce, "object-key-init"),
    getElements: cc11001100_hook("getElements", Se, "object-key-init"),
    getElement: function (e) {
      return null != e && 0 < e.length ? ke().querySelector(e) : null;
    },
    getElementDataAttribute: cc11001100_hook("getElementDataAttribute", _e, "object-key-init"),
    getElementAttribute: cc11001100_hook("getElementAttribute", Ae, "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", Ee, "object-key-init"),
    createNode: cc11001100_hook("createNode", Le, "object-key-init"),
    createElement: cc11001100_hook("createElement", Ie, "object-key-init"),
    renderComponent: function (e) {
      var t = cc11001100_hook("t", 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null, "var-init");
      return null !== t && t.appendChild(e), e;
    },
    addClass: cc11001100_hook("addClass", We, "object-key-init"),
    removeClass: cc11001100_hook("removeClass", qe, "object-key-init"),
    hasClass: cc11001100_hook("hasClass", Ne, "object-key-init"),
    toggleClass: cc11001100_hook("toggleClass", De, "object-key-init")
  }), "var-init");
  function $e(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.tokens, "var-init"),
      n = cc11001100_hook("n", e.options, "var-init"),
      r = cc11001100_hook("r", function (e, t) {
        if ("string" != typeof e || 0 === e.length) return function () {
          return !1;
        };
        var n = cc11001100_hook("n", parseInt(t), "var-init"),
          a = cc11001100_hook("a", !isNaN(n) && 1 < n ? n - 1 : 0, "var-init"),
          s = cc11001100_hook("s", {}, "var-init");
        return e.split(",").forEach(function (e) {
          var t = cc11001100_hook("t", e.match(/([0-9]+)-([0-9]+)/), "var-init");
          if (null != t) {
            var n = cc11001100_hook("n", parseInt(t[1]) - a, "var-init"),
              r = cc11001100_hook("r", parseInt(t[2]) - a, "var-init");
            if (n < r) for (var i = cc11001100_hook("i", n, "var-init"); i <= r; i++) s["" + i] = cc11001100_hook("s[\"\" + i]", !0, "assign");
          } else s["" + (parseInt(e) - a)] = cc11001100_hook("s[\"\" + (parseInt(e) - a)]", !0, "assign");
        }), function (e) {
          return s["" + e] || !1;
        };
      }(n.highlight, n.lineoffset), "var-init"),
      i = cc11001100_hook("i", [], "var-init"),
      a = cc11001100_hook("a", [], "var-init");
    t.forEach(function (t) {
      var e = cc11001100_hook("e", t.text.split("\n"), "var-init");
      1 === e.length ? a.push([t.type, t.text]) : (a.push([t.type, e.shift()]), e.forEach(function (e) {
        i.push(a), (a = cc11001100_hook("a", [], "assign")).push([t.type, e]);
      }));
    }), i.push(a);
    var s = cc11001100_hook("s", [], "var-init");
    return 0 < n.lineoffset && s.push("counter-reset: enlighter " + (parseInt(n.lineoffset) - 1)), Ie("div", {
      className: cc11001100_hook("className", "enlighter", "object-key-init"),
      style: cc11001100_hook("style", s.join(";"), "object-key-init")
    }, i.map(function (e, t) {
      return Ie("div", {
        className: cc11001100_hook("className", r(t + 1) ? "enlighter-special" : "", "object-key-init")
      }, Ie("div", null, e.map(function (e) {
        return Ie("span", {
          className: cc11001100_hook("className", "enlighter-" + e[0], "object-key-init")
        }, e[1]);
      })));
    }));
  }
  function Te(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", [], "var-init");
    e.name && t.push("enlighter-" + e.name), e.className && ("string" == typeof e.className ? t.push(e.className) : t.push.apply(t, f(e.className)));
    for (var n = cc11001100_hook("n", arguments.length, "var-init"), r = cc11001100_hook("r", new Array(1 < n ? n - 1 : 0), "var-init"), i = cc11001100_hook("i", 1, "var-init"); i < n; i++) r[i - 1] = cc11001100_hook("r[i - 1]", arguments[i], "assign");
    return Ie.apply(Oe, ["div", {
      className: cc11001100_hook("className", t.join(" "), "object-key-init")
    }].concat(r));
  }
  function Re(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", ["enlighter-btn"], "var-init");
    return e.name && t.push("enlighter-btn-" + e.name), Ie("div", {
      className: cc11001100_hook("className", t.join(" "), "object-key-init"),
      onClick: cc11001100_hook("onClick", e.onClick, "object-key-init"),
      title: cc11001100_hook("title", e.tooltip, "object-key-init")
    }, e.text || null);
  }
  function Fe() {
    ve().open("https://enlighterjs.org");
  }
  var je = cc11001100_hook("je", Object.freeze({
    __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
    raw: function (e) {
      return Ie(Re, {
        name: cc11001100_hook("name", "raw", "object-key-init"),
        tooltip: cc11001100_hook("tooltip", "Toggle RAW code", "object-key-init"),
        onClick: function () {
          e.toggleClass("enlighter-show-rawcode");
        }
      });
    },
    copy: function (e) {
      return Ie(Re, {
        name: cc11001100_hook("name", "copy", "object-key-init"),
        tooltip: cc11001100_hook("tooltip", "Copy to clipboard", "object-key-init"),
        onClick: function () {
          !function (e) {
            var t = cc11001100_hook("t", ke(), "var-init"),
              n = cc11001100_hook("n", ve(), "var-init"),
              r = cc11001100_hook("r", Ie("pre", {
                className: cc11001100_hook("className", "enlighter-clipboard", "object-key-init")
              }, e), "var-init");
            t.body.appendChild(r);
            try {
              var i = cc11001100_hook("i", t.createRange(), "var-init");
              i.selectNodeContents(r);
              var a = cc11001100_hook("a", n.getSelection(), "var-init");
              a.removeAllRanges(), a.addRange(i);
            } catch (e) {
              return;
            }
            var s = cc11001100_hook("s", function () {
              try {
                return t.execCommand("copy");
              } catch (e) {
                return !1;
              }
            }(), "var-init");
            n.getSelection().removeAllRanges(), Ce(r);
          }(e.getRawCode());
        }
      });
    },
    window: function (n) {
      var r = cc11001100_hook("r", ve(), "var-init");
      return Ie(Re, {
        name: cc11001100_hook("name", "window", "object-key-init"),
        tooltip: cc11001100_hook("tooltip", "Open code in new window", "object-key-init"),
        onClick: function () {
          var e = cc11001100_hook("e", r.open("", "", "width=" + r.screen.width / 2 + ", height=" + r.screen.height / 2 + ", menubar=no, titlebar=no, toolbar=no, top=100, left=100, scrollbars=yes, status=no"), "var-init"),
            t = cc11001100_hook("t", n.getRawCode().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "var-init");
          e.document.body.innerHTML = cc11001100_hook("e.document.body.innerHTML", "<pre>" + t + "</pre>", "assign"), e.document.title = cc11001100_hook("e.document.title", "Sourcecode | EnlighterJS Syntax Highlighter", "assign");
        }
      });
    },
    website: function () {
      return Ie(Re, {
        name: cc11001100_hook("name", "website", "object-key-init"),
        tooltip: cc11001100_hook("tooltip", "EnlighterJS 3 Syntax Highlighter", "object-key-init"),
        onClick: cc11001100_hook("onClick", Fe, "object-key-init")
      });
    },
    collapse: function (e) {
      return Ie(Re, {
        name: cc11001100_hook("name", "collapse", "object-key-init"),
        tooltip: cc11001100_hook("tooltip", "Expand", "object-key-init"),
        onClick: function () {
          e.toggleClass("enlighter-collapse-full");
        }
      });
    }
  }), "var-init");
  function ze(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", function (e) {
      for (var t, n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", /{BTN_([A-Z_]+)}/g, "var-init"); null != (t = cc11001100_hook("t", r.exec(e), "assign"));) n.push(t[1].toLowerCase());
      return n;
    }(t.layout).map(function (e) {
      return je[e] ? Ie(je[e], {
        getRawCode: cc11001100_hook("getRawCode", t.getRawCode, "object-key-init"),
        toggleClass: cc11001100_hook("toggleClass", t.toggleClass, "object-key-init")
      }) : null;
    }).filter(function (e) {
      return null !== e;
    }), "var-init");
    return Ie(Te, {
      name: cc11001100_hook("name", "toolbar-" + t.name, "object-key-init"),
      className: cc11001100_hook("className", "enlighter-toolbar", "object-key-init")
    }, e);
  }
  function Be(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return Ie("div", {
      className: cc11001100_hook("className", "enlighter-raw", "object-key-init")
    }, t);
  }
  function Ze(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", null, "var-init"),
      n = cc11001100_hook("n", e[0].params, "var-init"),
      r = cc11001100_hook("r", ["enlighter-default", "enlighter-v-standard", "enlighter-t-" + e[0].params.theme], "var-init");
    function i(e) {
      cc11001100_hook("e", e, "function-parameter");
      De(t, e);
    }
    function a() {
      return e[0].code;
    }
    return !0 === n.linehover && r.push("enlighter-hover"), !0 === n.linenumbers && r.push("enlighter-linenumbers"), "scroll" === n.textOverflow && r.push("enlighter-overflow-scroll"), !0 === n.collapse && r.push("enlighter-collapse"), 0 < n.cssClasses.length && r.push.apply(r, f(n.cssClasses)), t = cc11001100_hook("t", Ie(Te, {
      className: cc11001100_hook("className", r, "object-key-init")
    }, Ie(ze, {
      name: cc11001100_hook("name", "top", "object-key-init"),
      layout: cc11001100_hook("layout", n.toolbarTop, "object-key-init"),
      toggleClass: cc11001100_hook("toggleClass", i, "object-key-init"),
      getRawCode: cc11001100_hook("getRawCode", a, "object-key-init")
    }), Ie($e, {
      tokens: cc11001100_hook("tokens", e[0].tokens, "object-key-init"),
      options: cc11001100_hook("options", e[0].params, "object-key-init")
    }), Ie(Be, null, e[0].code), Ie(ze, {
      name: cc11001100_hook("name", "bottom", "object-key-init"),
      layout: cc11001100_hook("layout", n.toolbarBottom, "object-key-init"),
      toggleClass: cc11001100_hook("toggleClass", i, "object-key-init"),
      getRawCode: cc11001100_hook("getRawCode", a, "object-key-init")
    })), "assign"), n.rawcodeDbclick && t.on("dblclick", function () {
      i("enlighter-show-rawcode");
    }), t;
  }
  function Me(e) {
    cc11001100_hook("e", e, "function-parameter");
    return Ie("span", {
      className: cc11001100_hook("className", "enlighter", "object-key-init")
    }, e.tokens.map(function (e) {
      return Ie("span", {
        className: cc11001100_hook("className", "enlighter-" + e.type, "object-key-init")
      }, e.text);
    }));
  }
  function Pe(n) {
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", 0, "var-init"),
      i = cc11001100_hook("i", [], "var-init");
    return i = cc11001100_hook("i", n.dataset.map(function (e, t) {
      return Ie(Re, {
        onClick: function () {
          return e = cc11001100_hook("e", t, "assign"), qe(i[r], "enlighter-active"), We(i[e], "enlighter-active"), r = cc11001100_hook("r", e, "assign"), void n.onChange(e);
          var e;
        },
        text: cc11001100_hook("text", e.params.title || e.params.language, "object-key-init")
      });
    }), "assign"), We(i[0], "enlighter-active"), Ie(Te, {
      name: cc11001100_hook("name", "codegroup-switch", "object-key-init")
    }, i);
  }
  var Ue = cc11001100_hook("Ue", Object.freeze({
    __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
    standard: cc11001100_hook("standard", Ze, "object-key-init"),
    inline: function (e) {
      var t = cc11001100_hook("t", e[0].params, "var-init"),
        n = cc11001100_hook("n", ["enlighter-default", "enlighter-v-inline", "enlighter-t-" + t.theme], "var-init");
      return 0 < t.cssClasses.length && n.push.apply(n, f(t.cssClasses)), Ie(Te, {
        className: cc11001100_hook("className", n, "object-key-init")
      }, Ie(Me, {
        tokens: cc11001100_hook("tokens", e[0].tokens, "object-key-init"),
        options: cc11001100_hook("options", t, "object-key-init")
      }));
    },
    codegroup: function (e) {
      var t,
        n = cc11001100_hook("n", null, "var-init"),
        r = cc11001100_hook("r", e[0].params, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        a = cc11001100_hook("a", ["enlighter-default", "enlighter-v-codegroup", "enlighter-t-" + r.theme], "var-init");
      function s(e) {
        cc11001100_hook("e", e, "function-parameter");
        De(n, e);
      }
      function o() {
        return e[i].code;
      }
      function l(e) {
        cc11001100_hook("e", e, "function-parameter");
        we(t[i], !1), we(t[e], !0), i = cc11001100_hook("i", e, "assign");
      }
      return !0 === r.linehover && a.push("enlighter-hover"), !0 === r.linenumbers && a.push("enlighter-linenumbers"), "scroll" === r.textOverflow && a.push("enlighter-overflow-scroll"), !0 === r.collapse && a.push("enlighter-collapse"), 0 < r.cssClasses.length && a.push.apply(a, f(r.cssClasses)), t = cc11001100_hook("t", e.map(function (e) {
        return Ie("div", {
          style: cc11001100_hook("style", "display:none", "object-key-init")
        }, Ie($e, {
          tokens: cc11001100_hook("tokens", e.tokens, "object-key-init"),
          options: cc11001100_hook("options", e.params, "object-key-init")
        }), Ie(Be, null, e.code));
      }), "assign"), l(0), n = cc11001100_hook("n", Ie(Te, {
        className: cc11001100_hook("className", a, "object-key-init")
      }, Ie(Pe, {
        onChange: function (e) {
          return l(e);
        },
        dataset: cc11001100_hook("dataset", e, "object-key-init")
      }), Ie(Te, {
        name: cc11001100_hook("name", "codegroup-wrapper", "object-key-init")
      }, Ie(ze, {
        name: cc11001100_hook("name", "top", "object-key-init"),
        layout: cc11001100_hook("layout", r.toolbarTop, "object-key-init"),
        toggleClass: cc11001100_hook("toggleClass", s, "object-key-init"),
        getRawCode: cc11001100_hook("getRawCode", o, "object-key-init")
      }), t, Ie(ze, {
        name: cc11001100_hook("name", "bottom", "object-key-init"),
        layout: cc11001100_hook("layout", r.toolbarBottom, "object-key-init"),
        toggleClass: cc11001100_hook("toggleClass", s, "object-key-init"),
        getRawCode: cc11001100_hook("getRawCode", o, "object-key-init")
      }))), "assign"), r.rawcodeDbclick && n.on("dblclick", function () {
        s("enlighter-show-rawcode");
      }), n;
    }
  }), "var-init");
  function Ge(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t;
    return (t = cc11001100_hook("t", ((t = cc11001100_hook("t", e[0].params.layout, "assign")) || "").toLowerCase(), "assign"), Ue[t] ? Ue[t] : Ze)(e.map(function (e) {
      var t,
        n,
        r,
        i = cc11001100_hook("i", e.code, "var-init"),
        a = cc11001100_hook("a", e.params, "var-init");
      if ("string" != typeof i) throw new TypeError("EnlighterJS Engine requires string input");
      return {
        tokens: cc11001100_hook("tokens", (t = cc11001100_hook("t", a.language, "assign"), n = cc11001100_hook("n", c.language || null, "assign"), r = cc11001100_hook("r", me(t) || me(n) || "generic", "assign"), de[r] || (de[r] = cc11001100_hook("de[r]", new fe[r](), "assign")), de[r]).analyze(i), "object-key-init"),
        params: cc11001100_hook("params", a, "object-key-init"),
        code: cc11001100_hook("code", i, "object-key-init")
      };
    }));
  }
  function He(i, t) {
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    function a(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function () {
        for (var e = cc11001100_hook("e", arguments.length, "var-init"), t = cc11001100_hook("t", new Array(e), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e; n++) t[n] = cc11001100_hook("t[n]", arguments[n], "assign");
        for (var r = cc11001100_hook("r", t.pop(), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) {
          var a = cc11001100_hook("a", t[i], "var-init");
          if (null != a) return a;
        }
        return r;
      }(t[e], c[e], null);
    }
    function e(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", _e(i, "enlighter-" + e), "var-init"),
        r = cc11001100_hook("r", a(e), "var-init");
      if (!(n && 0 < n.length)) return r;
      switch (t) {
        case "boolean":
          return "true" === (n = cc11001100_hook("n", n.toLowerCase().trim(), "assign")) || "false" !== n && r;
        case "int":
          return n = cc11001100_hook("n", parseInt(n), "assign"), isNaN(n) ? r : n;
        default:
          return n;
      }
    }
    var n = cc11001100_hook("n", a("cssClasses") || "", "var-init");
    !0 === a("retainCssClasses") && (n += cc11001100_hook("n", " " + (Ae(i, "class") || ""), "assign"));
    var r = cc11001100_hook("r", n.replace(/\s+/g, " ").trim().split(" "), "var-init");
    return {
      language: cc11001100_hook("language", e("language"), "object-key-init"),
      theme: cc11001100_hook("theme", e("theme"), "object-key-init"),
      layout: cc11001100_hook("layout", e("layout"), "object-key-init"),
      title: cc11001100_hook("title", e("title"), "object-key-init"),
      highlight: cc11001100_hook("highlight", e("highlight"), "object-key-init"),
      linenumbers: cc11001100_hook("linenumbers", e("linenumbers", "boolean"), "object-key-init"),
      lineoffset: cc11001100_hook("lineoffset", e("lineoffset", "int"), "object-key-init"),
      indent: cc11001100_hook("indent", a("indent"), "object-key-init"),
      ampersandCleanup: cc11001100_hook("ampersandCleanup", a("ampersandCleanup"), "object-key-init"),
      linehover: cc11001100_hook("linehover", a("linehover"), "object-key-init"),
      rawcodeDbclick: cc11001100_hook("rawcodeDbclick", a("rawcodeDbclick"), "object-key-init"),
      textOverflow: cc11001100_hook("textOverflow", a("textOverflow"), "object-key-init"),
      collapse: cc11001100_hook("collapse", a("collapse"), "object-key-init"),
      cssClasses: cc11001100_hook("cssClasses", r, "object-key-init"),
      toolbarTop: cc11001100_hook("toolbarTop", a("toolbarTop"), "object-key-init"),
      toolbarBottom: cc11001100_hook("toolbarBottom", a("toolbarBottom"), "object-key-init"),
      toolbarHeader: cc11001100_hook("toolbarHeader", a("toolbarHeader"), "object-key-init")
    };
  }
  var Ve = cc11001100_hook("Ve", [], "var-init");
  function Je(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", function (e) {
      for (var t = cc11001100_hook("t", 0, "var-init"); t < Ve.length; t++) for (var n = cc11001100_hook("n", 0, "var-init"); n < Ve[t].elements.length; n++) if (Ve[t].elements[n] === e) return t;
      return !1;
    }(e), "var-init");
    if (!1 === t) return !1;
    var n = cc11001100_hook("n", Ve.splice(t, 1), "var-init");
    return Ce(n[0].wrapper), n[0].elements.map(function (e) {
      return qe(e, "enlighter-origin");
    }), !0;
  }
  function Xe(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t,
      n,
      r = cc11001100_hook("r", 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, "var-init");
    try {
      if (Array.isArray(e) || (e = cc11001100_hook("e", [e], "assign")), 0 === e.length) return !1;
      if (!1 === r) return Je(e[0]);
      if (Ne(e[0], "enlighter-origin")) return !1;
      var i = cc11001100_hook("i", Ge(e.map(function (e) {
        var t = cc11001100_hook("t", He(e, r), "var-init"),
          n = cc11001100_hook("n", function (e, t) {
            var n = cc11001100_hook("n", e.innerHTML || "", "var-init");
            n = cc11001100_hook("n", n.replace(/(^\s*\n|\n\s*$)/gi, ""), "assign"), !0 === t.ampersandCleanup && (n = cc11001100_hook("n", n.replace(/&amp;/gim, "&"), "assign")), n = cc11001100_hook("n", n.replace(/&lt;/gim, "<").replace(/&gt;/gim, ">").replace(/&nbsp;/gim, " "), "assign");
            var r = cc11001100_hook("r", t.indent, "var-init");
            return !1 !== r && -1 < r && (n = cc11001100_hook("n", n.replace(/(\t*)/gim, function (e, t) {
              return new Array(r * t.length + 1).join(" ");
            }), "assign")), n;
          }(e, t), "var-init");
        return We(e, "enlighter-origin"), {
          element: cc11001100_hook("element", e, "object-key-init"),
          code: cc11001100_hook("code", n, "object-key-init"),
          params: cc11001100_hook("params", t, "object-key-init")
        };
      })), "var-init");
      return Ee(e[0], i), t = cc11001100_hook("t", e, "assign"), n = cc11001100_hook("n", i, "assign"), Ve.push({
        elements: cc11001100_hook("elements", t, "object-key-init"),
        wrapper: cc11001100_hook("wrapper", n, "object-key-init")
      }), !0;
    } catch (e) {
      return console.error("EnlighterJS Internal Error:", e), !1;
    }
  }
  return e.enlight = cc11001100_hook("e.enlight", Xe, "assign"), e.init = cc11001100_hook("e.init", function () {
    var e,
      t = cc11001100_hook("t", 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "pre.ejs", "var-init"),
      n = cc11001100_hook("n", 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "code.ejs", "var-init"),
      r = cc11001100_hook("r", 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, "var-init");
    e = cc11001100_hook("e", 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null, "assign"), Object.assign(c, e || {});
    for (var i = cc11001100_hook("i", Se(t), "var-init"), a = cc11001100_hook("a", Se(n), "var-init"), s = cc11001100_hook("s", function (e) {
        for (var t = cc11001100_hook("t", {}, "var-init"), n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) {
          var i = cc11001100_hook("i", _e(e[r], "enlighter-group"), "var-init");
          i ? (t[i] || (t[i] = cc11001100_hook("t[i]", [], "assign")), t[i].push(e[r])) : n.push(e[r]);
        }
        return {
          standalone: cc11001100_hook("standalone", n, "object-key-init"),
          groups: cc11001100_hook("groups", Object.keys(t).map(function (e) {
            return t[e];
          }), "object-key-init")
        };
      }(i), "var-init"), o = cc11001100_hook("o", s.standalone, "var-init"), l = cc11001100_hook("l", s.groups, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < o.length; g++) Xe(o[g], {
      layout: cc11001100_hook("layout", r.block || "standard", "object-key-init")
    });
    for (var u = cc11001100_hook("u", 0, "var-init"); u < l.length; u++) Xe(l[u], {
      layout: cc11001100_hook("layout", r.codegroup || "codegroup", "object-key-init")
    });
    for (var p = cc11001100_hook("p", 0, "var-init"); p < a.length; p++) Xe(a[p], {
      layout: cc11001100_hook("layout", r.inline || "inline", "object-key-init")
    });
  }, "assign"), e.version = cc11001100_hook("e.version", "3.3.0", "assign"), e;
}({}), "var-init");
!function (n) {
  "function" == typeof n && n.fn && (n.fn.enlight = cc11001100_hook("n.fn.enlight", function (n) {
    return n = cc11001100_hook("n", !0 === (n = cc11001100_hook("n", void 0 === n ? {} : n, "assign")) ? {} : n, "assign"), this.each(function () {
      EnlighterJS.enlight(this, n);
    });
  }, "assign"));
}(window.jQuery);