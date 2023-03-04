/*! For license information please see LICENSES */
(window.webpackJsonp = cc11001100_hook("window.webpackJsonp", window.webpackJsonp || [], "assign")).push([[3], {
  1121: function (e, t, n) {
    "use strict";

    e.exports = cc11001100_hook("e.exports", function () {
      return {
        viewerEffect({
          markdownBody: e
        }) {
          Array.from(e.querySelectorAll("[data-grid-img]")).forEach(a => {
            a.style.display = cc11001100_hook("a.style.display", "flex", "assign"), a.style.justifyContent = cc11001100_hook("a.style.justifyContent", "center", "assign"), a.style.alignContent = cc11001100_hook("a.style.alignContent", "center", "assign");
          });
        }
      };
    }, "assign");
  },
  1122: function (e, t, n) {
    "use strict";

    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e && "object" == typeof e && "default" in e ? e : {
        default: cc11001100_hook("default", e, "object-key-init")
      };
    }
    var r = cc11001100_hook("r", o(n(3005)), "var-init");
    e.exports = cc11001100_hook("e.exports", function ({
      test: e,
      internalProps: t = {},
      externalProps: n = {
        target: cc11001100_hook("target", "_blank", "object-key-init"),
        rel: cc11001100_hook("rel", "nofollow noopener noreferrer", "object-key-init")
      }
    }) {
      return {
        rehype: cc11001100_hook("rehype", p => p.use(() => o => {
          r.default(o, "element", o => {
            var r;
            if ("a" !== o.tagName || !(null === (r = cc11001100_hook("r", o.properties, "assign")) || void 0 === r ? void 0 : r.href)) return;
            const l = cc11001100_hook("l", o.properties.href, "var-init");
            /https?:\/\//.test(l) && Object.assign(o.properties, e(l) ? n : t);
          });
        }), "object-key-init")
      };
    }, "assign");
  },
  1123: function (e, t, n) {
    "use strict";

    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e && "object" == typeof e && "default" in e ? e : {
        default: cc11001100_hook("default", e, "object-key-init")
      };
    }
    var r = cc11001100_hook("r", o(n(3006)), "var-init");
    e.exports = cc11001100_hook("e.exports", function (e) {
      return {
        remark: cc11001100_hook("remark", u => u.use(r.default, e), "object-key-init")
      };
    }, "assign");
  },
  1124: function (e, t, n) {
    "use strict";

    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e && "object" == typeof e && "default" in e ? e : {
        default: cc11001100_hook("default", e, "object-key-init")
      };
    }
    var r = cc11001100_hook("r", o(n(2165)), "var-init"),
      l = cc11001100_hook("l", {
        strike: cc11001100_hook("strike", "Strikethrough", "object-key-init"),
        strikeText: cc11001100_hook("strikeText", "text", "object-key-init"),
        task: cc11001100_hook("task", "Task list", "object-key-init"),
        taskText: cc11001100_hook("taskText", "todo", "object-key-init"),
        table: cc11001100_hook("table", "Table", "object-key-init"),
        tableHeading: cc11001100_hook("tableHeading", "Heading", "object-key-init")
      }, "var-init");
    const c = cc11001100_hook("c", '<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 24h38M24 24c16 6 10 20 0 20s-12-8-12-8M36 12s-3-8-12-8-12.564 7.6-8.39 14" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 36s4 8 12 8 12.564-7.6 8.39-14" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>', "var-init"),
      d = cc11001100_hook("d", '<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="M42 20v19a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h21"/><path d="m16 20 10 8L41 7"/></g><defs><clipPath id="a"><path fill="currentColor" d="M0 0h48v48H0z"/></clipPath></defs></svg>', "var-init"),
      f = cc11001100_hook("f", '<svg width="1em" height="1em" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.15 5H7.85A2.85 2.85 0 0 0 5 7.85v32.3A2.85 2.85 0 0 0 7.85 43h32.3A2.85 2.85 0 0 0 43 40.15V7.85A2.85 2.85 0 0 0 40.15 5z" stroke="currentColor" stroke-width="4"/><path d="M17 5v38M31 5v38M5 17h38M5 31h38" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></svg>', "var-init");
    e.exports = cc11001100_hook("e.exports", function ({
      locale: e,
      ...t
    } = {}) {
      const n = cc11001100_hook("n", {
        ...l,
        ...e
      }, "var-init");
      return {
        remark: cc11001100_hook("remark", p => p.use(r.default, t), "object-key-init"),
        actions: cc11001100_hook("actions", [{
          title: cc11001100_hook("title", n.strike, "object-key-init"),
          icon: cc11001100_hook("icon", c, "object-key-init"),
          cheatsheet: cc11001100_hook("cheatsheet", `~~${n.strikeText}~~`, "object-key-init"),
          handler: {
            type: cc11001100_hook("type", "action", "object-key-init"),
            click({
              wrapText: e,
              editor: t
            }) {
              e("~~"), t.focus();
            }
          }
        }, {
          title: cc11001100_hook("title", n.task, "object-key-init"),
          icon: cc11001100_hook("icon", d, "object-key-init"),
          cheatsheet: cc11001100_hook("cheatsheet", "- [ ] " + n.taskText, "object-key-init"),
          handler: {
            type: cc11001100_hook("type", "action", "object-key-init"),
            click({
              replaceLines: e,
              editor: t
            }) {
              e(line => "- [ ] " + line), t.focus();
            }
          }
        }, {
          title: cc11001100_hook("title", n.table, "object-key-init"),
          icon: cc11001100_hook("icon", f, "object-key-init"),
          handler: {
            type: cc11001100_hook("type", "action", "object-key-init"),
            click({
              editor: e,
              appendBlock: t,
              codemirror: o
            }) {
              const {
                line: line
              } = cc11001100_hook("", t(`| ${n.tableHeading} |  |\n| --- | --- |\n|  |  |\n`), "var-init");
              e.setSelection(o.Pos(line, 2), o.Pos(line, 2 + n.tableHeading.length)), e.focus();
            }
          }
        }], "object-key-init")
      };
    }, "assign");
  },
  1125: function (e, t, n) {
    "use strict";

    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (e && e.__esModule) return e;
      const t = cc11001100_hook("t", Object.create(null, {
        [Symbol.toStringTag]: {
          value: cc11001100_hook("value", "Module", "object-key-init")
        }
      }), "var-init");
      if (e) for (const n in e) if ("default" !== n) {
        const o = cc11001100_hook("o", Object.getOwnPropertyDescriptor(e, n), "var-init");
        Object.defineProperty(t, n, o.get ? o : {
          enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
          get: cc11001100_hook("get", () => e[n], "object-key-init")
        });
      }
      return t.default = cc11001100_hook("t.default", e, "assign"), Object.freeze(t);
    }
    e.exports = cc11001100_hook("e.exports", function (e) {
      let t;
      return {
        viewerEffect({
          markdownBody: r
        }) {
          const l = cc11001100_hook("l", [...r.querySelectorAll("img")].filter(t => {
            var n, o;
            return (null == (o = cc11001100_hook("o", null == (n = cc11001100_hook("n", null == e ? void 0 : e.filter, "assign")) ? void 0 : n.call(e, t), "assign")) || o) && !t.closest("a");
          }), "var-init");
          0 !== l.length && (async () => {
            t || (t = cc11001100_hook("t", await Promise.resolve().then(() => o(n(3053))), "assign")), t.default(l, e);
          })();
        }
      };
    }, "assign");
  },
  2157: function (e, t, n) {
    "use strict";

    e.exports = cc11001100_hook("e.exports", function (e) {
      return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
    }, "assign");
  },
  2163: function (e, t, n) {
    n(23), n(24), n(7), e.exports = cc11001100_hook("e.exports", function (e, input, t) {
      var n,
        d,
        f,
        pattern,
        m,
        h,
        v,
        k,
        y = cc11001100_hook("y", (t.before || "") + (input || "") + (t.after || ""), "var-init"),
        z = cc11001100_hook("z", [], "var-init"),
        x = cc11001100_hook("x", [], "var-init"),
        w = cc11001100_hook("w", {}, "var-init"),
        E = cc11001100_hook("E", -1, "var-init");
      for (; ++E < e.unsafe.length;) if (pattern = cc11001100_hook("pattern", e.unsafe[E], "assign"), r(e.stack, pattern)) for (m = cc11001100_hook("m", o(pattern), "assign"); h = cc11001100_hook("h", m.exec(y), "assign");) n = cc11001100_hook("n", "before" in pattern || pattern.atBreak, "assign"), d = cc11001100_hook("d", "after" in pattern, "assign"), f = cc11001100_hook("f", h.index + (n ? h[1].length : 0), "assign"), -1 === z.indexOf(f) ? (z.push(f), w[f] = cc11001100_hook("w[f]", {
        before: cc11001100_hook("before", n, "object-key-init"),
        after: cc11001100_hook("after", d, "object-key-init")
      }, "assign")) : (w[f].before && !n && (w[f].before = cc11001100_hook("w[f].before", !1, "assign")), w[f].after && !d && (w[f].after = cc11001100_hook("w[f].after", !1, "assign")));
      z.sort(l), v = cc11001100_hook("v", t.before ? t.before.length : 0, "assign"), k = cc11001100_hook("k", y.length - (t.after ? t.after.length : 0), "assign"), E = cc11001100_hook("E", -1, "assign");
      for (; ++E < z.length;) (f = cc11001100_hook("f", z[E], "assign")) < v || f >= k || f + 1 < k && z[E + 1] === f + 1 && w[f].after && !w[f + 1].before && !w[f + 1].after || (v !== f && x.push(c(y.slice(v, f), "\\")), v = cc11001100_hook("v", f, "assign"), !/[!-/:-@[-`{-~]/.test(y.charAt(f)) || t.encode && -1 !== t.encode.indexOf(y.charAt(f)) ? (x.push("&#x" + y.charCodeAt(f).toString(16).toUpperCase() + ";"), v++) : x.push("\\"));
      return x.push(c(y.slice(v, k), t.after)), x.join("");
    }, "assign");
    var o = cc11001100_hook("o", n(2164), "var-init"),
      r = cc11001100_hook("r", n(3017), "var-init");
    function l(a, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      return a - b;
    }
    function c(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      for (var n, o = cc11001100_hook("o", /\\(?=[!-/:-@[-`{-~])/g, "var-init"), r = cc11001100_hook("r", [], "var-init"), l = cc11001100_hook("l", [], "var-init"), c = cc11001100_hook("c", -1, "var-init"), d = cc11001100_hook("d", 0, "var-init"), f = cc11001100_hook("f", e + t, "var-init"); n = cc11001100_hook("n", o.exec(f), "assign");) r.push(n.index);
      for (; ++c < r.length;) d !== r[c] && l.push(e.slice(d, r[c])), l.push("\\"), d = cc11001100_hook("d", r[c], "assign");
      return l.push(e.slice(d)), l.join("");
    }
  },
  3005: function (e, t, n) {
    "use strict";

    e.exports = cc11001100_hook("e.exports", d, "assign");
    var o = cc11001100_hook("o", n(1602), "var-init"),
      r = cc11001100_hook("r", o.CONTINUE, "var-init"),
      l = cc11001100_hook("l", o.SKIP, "var-init"),
      c = cc11001100_hook("c", o.EXIT, "var-init");
    function d(e, t, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      "function" == typeof t && "function" != typeof n && (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", null, "assign")), o(e, t, function (e, t) {
        var o = cc11001100_hook("o", t[t.length - 1], "var-init"),
          r = cc11001100_hook("r", o ? o.children.indexOf(e) : null, "var-init");
        return n(e, r, o);
      }, r);
    }
    d.CONTINUE = cc11001100_hook("d.CONTINUE", r, "assign"), d.SKIP = cc11001100_hook("d.SKIP", l, "assign"), d.EXIT = cc11001100_hook("d.EXIT", c, "assign");
  },
  3006: function (e, t, n) {
    "use strict";

    var o,
      r = cc11001100_hook("r", n(3007), "var-init"),
      l = cc11001100_hook("l", n(3013), "var-init"),
      c = cc11001100_hook("c", n(3014), "var-init");
    e.exports = cc11001100_hook("e.exports", function (e) {
      var data = cc11001100_hook("data", this.data(), "var-init");
      !o && (this.Parser && this.Parser.prototype && this.Parser.prototype.blockTokenizers || this.Compiler && this.Compiler.prototype && this.Compiler.prototype.visitors) && (o = cc11001100_hook("o", !0, "assign"), console.warn("[remark-footnotes] Warning: please upgrade to remark 13 to use this plugin"));
      function t(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        data[e] ? data[e].push(t) : data[e] = cc11001100_hook("data[e]", [t], "assign");
      }
      t("micromarkExtensions", r(e)), t("fromMarkdownExtensions", l), t("toMarkdownExtensions", c);
    }, "assign");
  },
  3007: function (e, t, n) {
    e.exports = cc11001100_hook("e.exports", function (e) {
      var t = cc11001100_hook("t", {
          tokenize: cc11001100_hook("tokenize", z, "object-key-init"),
          resolveAll: cc11001100_hook("resolveAll", v, "object-key-init")
        }, "var-init"),
        n = cc11001100_hook("n", {
          add: cc11001100_hook("add", "after", "object-key-init"),
          tokenize: cc11001100_hook("tokenize", x, "object-key-init"),
          resolveAll: cc11001100_hook("resolveAll", v, "object-key-init"),
          resolveTo: cc11001100_hook("resolveTo", k, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          tokenize: cc11001100_hook("tokenize", w, "object-key-init"),
          continuation: {
            tokenize: cc11001100_hook("tokenize", E, "object-key-init")
          },
          exit: cc11001100_hook("exit", C, "object-key-init")
        }, "var-init"),
        text = cc11001100_hook("text", {
          91: {
            tokenize: cc11001100_hook("tokenize", y, "object-key-init")
          }
        }, "var-init");
      (e || {}).inlineNotes && (text[93] = cc11001100_hook("text[93]", n, "assign"), text[94] = cc11001100_hook("text[94]", t, "assign"));
      return {
        _hiddenFootnoteSupport: {},
        document: {
          91: cc11001100_hook(91, o, "object-key-init")
        },
        text: cc11001100_hook("text", text, "object-key-init")
      };
    }, "assign");
    var o = cc11001100_hook("o", n(2157), "var-init"),
      r = cc11001100_hook("r", n(3008), "var-init"),
      l = cc11001100_hook("l", n(1355), "var-init"),
      c = cc11001100_hook("c", n(1680), "var-init"),
      d = cc11001100_hook("d", n(1681), "var-init"),
      f = cc11001100_hook("f", n(2159), "var-init"),
      m = cc11001100_hook("m", n(2160), "var-init"),
      h = cc11001100_hook("h", {
        tokenize: function (e, t, n) {
          var o = cc11001100_hook("o", this, "var-init");
          return l(e, function (code) {
            return 4 === d(o.events, "footnoteDefinitionIndent") ? t(code) : n(code);
          }, "footnoteDefinitionIndent", 5);
        },
        partial: cc11001100_hook("partial", !0, "object-key-init")
      }, "var-init");
    function v(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t, n = cc11001100_hook("n", e.length, "var-init"), o = cc11001100_hook("o", -1, "var-init"); ++o < n;) t = cc11001100_hook("t", e[o][1], "assign"), "enter" === e[o][0] && "inlineNoteStart" === t.type && (t.type = cc11001100_hook("t.type", "data", "assign"), e.splice(o + 1, 4), n -= cc11001100_hook("n", 4, "assign"));
      return e;
    }
    function k(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      for (var n, text, o, r, l, d = cc11001100_hook("d", e.length - 4, "var-init"); d--;) if (o = cc11001100_hook("o", e[d][1], "assign"), "enter" === e[d][0] && "inlineNoteStart" === o.type) {
        l = cc11001100_hook("l", d, "assign"), r = cc11001100_hook("r", "inlineNote", "assign");
        break;
      }
      n = cc11001100_hook("n", {
        type: cc11001100_hook("type", r, "object-key-init"),
        start: cc11001100_hook("start", f(e[l][1].start), "object-key-init"),
        end: cc11001100_hook("end", f(e[e.length - 1][1].end), "object-key-init")
      }, "assign"), text = cc11001100_hook("text", {
        type: cc11001100_hook("type", "inlineNoteText", "object-key-init"),
        start: cc11001100_hook("start", f(e[l + 4][1].end), "object-key-init"),
        end: cc11001100_hook("end", f(e[e.length - 3][1].start), "object-key-init")
      }, "assign");
      var h = cc11001100_hook("h", [["enter", n, t], e[l + 1], e[l + 2], e[l + 3], e[l + 4], ["enter", text, t]], "var-init");
      return c(h, h.length, 0, m(t.parser.constructs.insideSpan.null, e.slice(l + 6, -4), t)), h.push(["exit", text, t], e[e.length - 2], e[e.length - 3], ["exit", n, t]), c(e, d, e.length - d, h), e;
    }
    function y(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var data,
        r = cc11001100_hook("r", this, "var-init"),
        l = cc11001100_hook("l", r.parser.footnotes || (r.parser.footnotes = cc11001100_hook("r.parser.footnotes", [], "assign")), "var-init"),
        c = cc11001100_hook("c", 0, "var-init");
      return function (code) {
        return 91 !== code ? n(code) : (e.enter("footnoteCall"), e.enter("footnoteCallLabelMarker"), e.consume(code), e.exit("footnoteCallLabelMarker"), d);
      };
      function d(code) {
        cc11001100_hook("code", code, "function-parameter");
        return 94 !== code ? n(code) : (e.enter("footnoteCallMarker"), e.consume(code), e.exit("footnoteCallMarker"), e.enter("footnoteCallString"), e.enter("chunkString").contentType = cc11001100_hook("e.enter(\"chunkString\").contentType", "string", "assign"), f);
      }
      function f(code) {
        cc11001100_hook("code", code, "function-parameter");
        var d;
        return null === code || 91 === code || c++ > 999 ? n(code) : 93 === code ? data ? (e.exit("chunkString"), d = cc11001100_hook("d", e.exit("footnoteCallString"), "assign"), l.indexOf(o(r.sliceSerialize(d))) < 0 ? n(code) : function (code) {
          return e.enter("footnoteCallLabelMarker"), e.consume(code), e.exit("footnoteCallLabelMarker"), e.exit("footnoteCall"), t;
        }(code)) : n(code) : (e.consume(code), code < 0 || 32 === code || (data = cc11001100_hook("data", !0, "assign")), 92 === code ? m : f);
      }
      function m(code) {
        cc11001100_hook("code", code, "function-parameter");
        return 91 === code || 92 === code || 93 === code ? (e.consume(code), c++, f) : f(code);
      }
    }
    function z(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      return function (code) {
        return 94 !== code ? n(code) : (e.enter("inlineNoteStart"), e.enter("inlineNoteMarker"), e.consume(code), e.exit("inlineNoteMarker"), o);
      };
      function o(code) {
        cc11001100_hook("code", code, "function-parameter");
        return 91 !== code ? n(code) : (e.enter("inlineNoteStartMarker"), e.consume(code), e.exit("inlineNoteStartMarker"), e.exit("inlineNoteStart"), t);
      }
    }
    function x(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var o = cc11001100_hook("o", this, "var-init");
      return function (code) {
        var r,
          l = cc11001100_hook("l", o.events.length, "var-init");
        for (; l--;) if ("inlineNoteStart" === o.events[l][1].type) {
          r = cc11001100_hook("r", !0, "assign");
          break;
        }
        if (93 !== code || !r) return n(code);
        return e.enter("inlineNoteEnd"), e.enter("inlineNoteEndMarker"), e.consume(code), e.exit("inlineNoteEndMarker"), e.exit("inlineNoteEnd"), t;
      };
    }
    function w(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var l,
        data,
        c = cc11001100_hook("c", this, "var-init"),
        d = cc11001100_hook("d", c.parser.footnotes || (c.parser.footnotes = cc11001100_hook("c.parser.footnotes", [], "assign")), "var-init"),
        f = cc11001100_hook("f", 0, "var-init");
      return function (code) {
        if (91 !== code) return n(code);
        return e.enter("footnoteDefinition")._container = cc11001100_hook("e.enter(\"footnoteDefinition\")._container", !0, "assign"), e.enter("footnoteDefinitionLabel"), e.enter("footnoteDefinitionLabelMarker"), e.consume(code), e.exit("footnoteDefinitionLabelMarker"), m;
      };
      function m(code) {
        cc11001100_hook("code", code, "function-parameter");
        return 94 !== code ? n(code) : (e.enter("footnoteDefinitionMarker"), e.consume(code), e.exit("footnoteDefinitionMarker"), e.enter("footnoteDefinitionLabelString"), h);
      }
      function h(code) {
        cc11001100_hook("code", code, "function-parameter");
        var t;
        return null === code || 91 === code || f > 999 ? n(code) : 93 === code ? data ? (t = cc11001100_hook("t", e.exit("footnoteDefinitionLabelString"), "assign"), l = cc11001100_hook("l", o(c.sliceSerialize(t)), "assign"), e.enter("footnoteDefinitionLabelMarker"), e.consume(code), e.exit("footnoteDefinitionLabelMarker"), e.exit("footnoteDefinitionLabel"), k) : n(code) : -5 === code || -4 === code || -3 === code ? (e.enter("lineEnding"), e.consume(code), e.exit("lineEnding"), f++, h) : (e.enter("chunkString").contentType = cc11001100_hook("e.enter(\"chunkString\").contentType", "string", "assign"), label(code));
      }
      function label(code) {
        cc11001100_hook("code", code, "function-parameter");
        return null === code || -5 === code || -4 === code || -3 === code || 91 === code || 93 === code || f > 999 ? (e.exit("chunkString"), h(code)) : (code < 0 || 32 === code || (data = cc11001100_hook("data", !0, "assign")), f++, e.consume(code), 92 === code ? v : label);
      }
      function v(code) {
        cc11001100_hook("code", code, "function-parameter");
        return 91 === code || 92 === code || 93 === code ? (e.consume(code), f++, label) : label(code);
      }
      function k(code) {
        cc11001100_hook("code", code, "function-parameter");
        return 58 !== code ? n(code) : (e.enter("definitionMarker"), e.consume(code), e.exit("definitionMarker"), e.check(r, y, z));
      }
      function y(code) {
        cc11001100_hook("code", code, "function-parameter");
        return c.containerState.initialBlankLine = cc11001100_hook("c.containerState.initialBlankLine", !0, "assign"), x(code);
      }
      function z(code) {
        cc11001100_hook("code", code, "function-parameter");
        return -2 === code || -1 === code || 32 === code ? (e.enter("footnoteDefinitionWhitespace"), e.consume(code), e.exit("footnoteDefinitionWhitespace"), x(code)) : x(code);
      }
      function x(code) {
        cc11001100_hook("code", code, "function-parameter");
        return d.indexOf(l) < 0 && d.push(l), t(code);
      }
    }
    function E(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var o = cc11001100_hook("o", this, "var-init");
      return e.check(r, function (code) {
        o.containerState.initialBlankLine && (o.containerState.furtherBlankLines = cc11001100_hook("o.containerState.furtherBlankLines", !0, "assign"));
        return t(code);
      }, function (code) {
        if (o.containerState.furtherBlankLines || -2 !== code && -1 !== code && 32 !== code) return n(code);
        return o.containerState.initialBlankLine = cc11001100_hook("o.containerState.initialBlankLine", void 0, "assign"), o.containerState.furtherBlankLines = cc11001100_hook("o.containerState.furtherBlankLines", void 0, "assign"), e.attempt(h, t, n)(code);
      });
    }
    function C(e) {
      cc11001100_hook("e", e, "function-parameter");
      e.exit("footnoteDefinition");
    }
  },
  3008: function (e, t, n) {
    "use strict";

    var o = cc11001100_hook("o", n(2158), "var-init"),
      r = cc11001100_hook("r", n(1355), "var-init"),
      l = cc11001100_hook("l", {
        tokenize: function (e, t, n) {
          return r(e, function (code) {
            return null === code || o(code) ? t(code) : n(code);
          }, "linePrefix");
        },
        partial: cc11001100_hook("partial", !0, "object-key-init")
      }, "var-init");
    e.exports = cc11001100_hook("e.exports", l, "assign");
  },
  3013: function (e, t, n) {
    var o = cc11001100_hook("o", n(2157), "var-init");
    t.canContainEols = cc11001100_hook("t.canContainEols", ["footnote"], "assign"), t.enter = cc11001100_hook("t.enter", {
      footnoteDefinition: function (e) {
        this.enter({
          type: cc11001100_hook("type", "footnoteDefinition", "object-key-init"),
          identifier: cc11001100_hook("identifier", "", "object-key-init"),
          label: cc11001100_hook("label", "", "object-key-init"),
          children: cc11001100_hook("children", [], "object-key-init")
        }, e);
      },
      footnoteDefinitionLabelString: function () {
        this.buffer();
      },
      footnoteCall: function (e) {
        this.enter({
          type: cc11001100_hook("type", "footnoteReference", "object-key-init"),
          identifier: cc11001100_hook("identifier", "", "object-key-init"),
          label: cc11001100_hook("label", "", "object-key-init")
        }, e);
      },
      footnoteCallString: function () {
        this.buffer();
      },
      inlineNote: function (e) {
        this.enter({
          type: cc11001100_hook("type", "footnote", "object-key-init"),
          children: cc11001100_hook("children", [], "object-key-init")
        }, e);
      }
    }, "assign"), t.exit = cc11001100_hook("t.exit", {
      footnoteDefinition: function (e) {
        this.exit(e);
      },
      footnoteDefinitionLabelString: function (e) {
        var label = cc11001100_hook("label", this.resume(), "var-init");
        this.stack[this.stack.length - 1].label = cc11001100_hook("this.stack[this.stack.length - 1].label", label, "assign"), this.stack[this.stack.length - 1].identifier = cc11001100_hook("this.stack[this.stack.length - 1].identifier", o(this.sliceSerialize(e)).toLowerCase(), "assign");
      },
      footnoteCall: function (e) {
        this.exit(e);
      },
      footnoteCallString: function (e) {
        var label = cc11001100_hook("label", this.resume(), "var-init");
        this.stack[this.stack.length - 1].label = cc11001100_hook("this.stack[this.stack.length - 1].label", label, "assign"), this.stack[this.stack.length - 1].identifier = cc11001100_hook("this.stack[this.stack.length - 1].identifier", o(this.sliceSerialize(e)).toLowerCase(), "assign");
      },
      inlineNote: function (e) {
        this.exit(e);
      }
    }, "assign");
  },
  3014: function (e, t, n) {
    t.unsafe = cc11001100_hook("t.unsafe", [{
      character: cc11001100_hook("character", "[", "object-key-init"),
      inConstruct: cc11001100_hook("inConstruct", ["phrasing", "label", "reference"], "object-key-init")
    }], "assign"), t.handlers = cc11001100_hook("t.handlers", {
      footnote: cc11001100_hook("footnote", m, "object-key-init"),
      footnoteDefinition: function (e, t, n) {
        var r,
          f = cc11001100_hook("f", n.enter("footnoteDefinition"), "var-init"),
          m = cc11001100_hook("m", n.enter("label"), "var-init"),
          label = cc11001100_hook("label", "[^" + d(n, o(e), {
            before: cc11001100_hook("before", "^", "object-key-init"),
            after: cc11001100_hook("after", "]", "object-key-init")
          }) + "]:", "var-init");
        return m(), r = cc11001100_hook("r", c(l(e, n), function (line, e, t) {
          if (e) return (t ? "" : "    ") + line;
          return (t ? label : label + " ") + line;
        }), "assign"), f(), r;
      },
      footnoteReference: cc11001100_hook("footnoteReference", f, "object-key-init")
    }, "assign");
    var o = cc11001100_hook("o", n(3015), "var-init"),
      r = cc11001100_hook("r", n(1682), "var-init"),
      l = cc11001100_hook("l", n(2161), "var-init"),
      c = cc11001100_hook("c", n(2162), "var-init"),
      d = cc11001100_hook("d", n(2163), "var-init");
    function f(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", n.enter("footnoteReference"), "var-init"),
        l = cc11001100_hook("l", n.enter("reference"), "var-init"),
        c = cc11001100_hook("c", d(n, o(e), {
          before: cc11001100_hook("before", "^", "object-key-init"),
          after: cc11001100_hook("after", "]", "object-key-init")
        }), "var-init");
      return l(), r(), "[^" + c + "]";
    }
    function m(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var o = cc11001100_hook("o", n.enter("footnote"), "var-init"),
        l = cc11001100_hook("l", n.enter("label"), "var-init"),
        c = cc11001100_hook("c", "^[" + r(e, n, {
          before: cc11001100_hook("before", "[", "object-key-init"),
          after: cc11001100_hook("after", "]", "object-key-init")
        }) + "]", "var-init");
      return l(), o(), c;
    }
    f.peek = cc11001100_hook("f.peek", function () {
      return "[";
    }, "assign"), m.peek = cc11001100_hook("m.peek", function () {
      return "^";
    }, "assign");
  },
  3015: function (e, t, n) {
    n(48), e.exports = cc11001100_hook("e.exports", function (e) {
      if (e.label || !e.identifier) return e.label || "";
      return e.identifier.replace(r, "$1").replace(l, c);
    }, "assign");
    var o = cc11001100_hook("o", n(3016), "var-init"),
      r = cc11001100_hook("r", /\\([!-/:-@[-`{-~])/g, "var-init"),
      l = cc11001100_hook("l", /&(#(\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi, "var-init");
    function c(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return o(t) || e;
    }
  },
  3016: function (e, t, n) {
    "use strict";

    var o;
    e.exports = cc11001100_hook("e.exports", function (e) {
      var t,
        n = cc11001100_hook("n", "&" + e + ";", "var-init");
      if ((o = cc11001100_hook("o", o || document.createElement("i"), "assign")).innerHTML = cc11001100_hook("(o = o || document.createElement(\"i\")).innerHTML", n, "assign"), 59 === (t = cc11001100_hook("t", o.textContent, "assign")).charCodeAt(t.length - 1) && "semi" !== e) return !1;
      return t !== n && t;
    }, "assign");
  },
  3017: function (e, t) {
    function n(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var o;
      if (!t) return n;
      for ("string" == typeof t && (t = cc11001100_hook("t", [t], "assign")), o = cc11001100_hook("o", -1, "assign"); ++o < t.length;) if (-1 !== e.indexOf(t[o])) return !0;
      return !1;
    }
    e.exports = cc11001100_hook("e.exports", function (e, pattern) {
      return n(e, pattern.inConstruct, !0) && !n(e, pattern.notInConstruct);
    }, "assign");
  },
  3053: function (e, t, n) {
    e.exports = cc11001100_hook("e.exports", function () {
      "use strict";

      var e = cc11001100_hook("e", Object.assign || function (e) {
          for (var t = cc11001100_hook("t", 1, "var-init"); t < arguments.length; t++) {
            var n = cc11001100_hook("n", arguments[t], "var-init");
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = cc11001100_hook("e[o]", n[o], "assign"));
          }
          return e;
        }, "var-init"),
        t = function (e) {
          return "IMG" === e.tagName;
        },
        n = function (e) {
          return e && 1 === e.nodeType;
        },
        o = function (e) {
          return ".svg" === (e.currentSrc || e.src).substr(-4).toLowerCase();
        },
        i = function (e) {
          try {
            return Array.isArray(e) ? e.filter(t) : function (e) {
              return NodeList.prototype.isPrototypeOf(e);
            }(e) ? [].slice.call(e).filter(t) : n(e) ? [e].filter(t) : "string" == typeof e ? [].slice.call(document.querySelectorAll(e)).filter(t) : [];
          } catch (e) {
            throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
          }
        },
        r = function (e) {
          var t = cc11001100_hook("t", document.createElement("div"), "var-init");
          return t.classList.add("medium-zoom-overlay"), t.style.background = cc11001100_hook("t.style.background", e, "assign"), t;
        },
        l = function (e) {
          var t = cc11001100_hook("t", e.getBoundingClientRect(), "var-init"),
            n = cc11001100_hook("n", t.top, "var-init"),
            o = cc11001100_hook("o", t.left, "var-init"),
            i = cc11001100_hook("i", t.width, "var-init"),
            r = cc11001100_hook("r", t.height, "var-init"),
            l = cc11001100_hook("l", e.cloneNode(), "var-init"),
            a = cc11001100_hook("a", window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, "var-init"),
            c = cc11001100_hook("c", window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0, "var-init");
          return l.removeAttribute("id"), l.style.position = cc11001100_hook("l.style.position", "absolute", "assign"), l.style.top = cc11001100_hook("l.style.top", n + a + "px", "assign"), l.style.left = cc11001100_hook("l.style.left", o + c + "px", "assign"), l.style.width = cc11001100_hook("l.style.width", i + "px", "assign"), l.style.height = cc11001100_hook("l.style.height", r + "px", "assign"), l.style.transform = cc11001100_hook("l.style.transform", "", "assign"), l;
        },
        a = function (t, n) {
          var o = cc11001100_hook("o", e({
            bubbles: cc11001100_hook("bubbles", !1, "object-key-init"),
            cancelable: cc11001100_hook("cancelable", !1, "object-key-init"),
            detail: cc11001100_hook("detail", void 0, "object-key-init")
          }, n), "var-init");
          if ("function" == typeof window.CustomEvent) return new CustomEvent(t, o);
          var i = cc11001100_hook("i", document.createEvent("CustomEvent"), "var-init");
          return i.initCustomEvent(t, o.bubbles, o.cancelable, o.detail), i;
        };
      return function (e, t) {
        void 0 === t && (t = cc11001100_hook("t", {}, "assign"));
        var n = cc11001100_hook("n", t.insertAt, "var-init");
        if ("undefined" != typeof document) {
          var o = cc11001100_hook("o", document.head || document.getElementsByTagName("head")[0], "var-init"),
            i = cc11001100_hook("i", document.createElement("style"), "var-init");
          i.type = cc11001100_hook("i.type", "text/css", "assign"), "top" === n && o.firstChild ? o.insertBefore(i, o.firstChild) : o.appendChild(i), i.styleSheet ? i.styleSheet.cssText = cc11001100_hook("i.styleSheet.cssText", e, "assign") : i.appendChild(document.createTextNode(e));
        }
      }(".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}"), function t(c) {
        var d = cc11001100_hook("d", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, "var-init"),
          f = cc11001100_hook("f", window.Promise || function (e) {
            function t() {}
            e(t, t);
          }, "var-init"),
          u = function (e) {
            var t = cc11001100_hook("t", e.target, "var-init");
            t !== T ? -1 !== L.indexOf(t) && x({
              target: cc11001100_hook("target", t, "object-key-init")
            }) : z();
          },
          s = function () {
            if (!M && O.original) {
              var e = cc11001100_hook("e", window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, "var-init");
              Math.abs(H - e) > N.scrollOffset && setTimeout(z, 150);
            }
          },
          m = function (e) {
            var t = cc11001100_hook("t", e.key || e.keyCode, "var-init");
            "Escape" !== t && "Esc" !== t && 27 !== t || z();
          },
          p = function () {
            var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
              o = cc11001100_hook("o", t, "var-init");
            if (t.background && (T.style.background = cc11001100_hook("T.style.background", t.background, "assign")), t.container && t.container instanceof Object && (o.container = cc11001100_hook("o.container", e({}, N.container, t.container), "assign")), t.template) {
              var i = cc11001100_hook("i", n(t.template) ? t.template : document.querySelector(t.template), "var-init");
              o.template = cc11001100_hook("o.template", i, "assign");
            }
            return N = cc11001100_hook("N", e({}, N, o), "assign"), L.forEach(function (e) {
              e.dispatchEvent(a("medium-zoom:update", {
                detail: {
                  zoom: cc11001100_hook("zoom", A, "object-key-init")
                }
              }));
            }), A;
          },
          g = function () {
            var n = cc11001100_hook("n", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
            return t(e({}, N, n));
          },
          h = function () {
            for (var e = cc11001100_hook("e", arguments.length, "var-init"), t = cc11001100_hook("t", Array(e), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e; n++) t[n] = cc11001100_hook("t[n]", arguments[n], "assign");
            var o = cc11001100_hook("o", t.reduce(function (e, t) {
              return [].concat(e, i(t));
            }, []), "var-init");
            return o.filter(function (e) {
              return -1 === L.indexOf(e);
            }).forEach(function (e) {
              L.push(e), e.classList.add("medium-zoom-image");
            }), S.forEach(function (e) {
              var t = cc11001100_hook("t", e.type, "var-init"),
                n = cc11001100_hook("n", e.listener, "var-init"),
                i = cc11001100_hook("i", e.options, "var-init");
              o.forEach(function (e) {
                e.addEventListener(t, n, i);
              });
            }), A;
          },
          v = function () {
            for (var e = cc11001100_hook("e", arguments.length, "var-init"), t = cc11001100_hook("t", Array(e), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e; n++) t[n] = cc11001100_hook("t[n]", arguments[n], "assign");
            O.zoomed && z();
            var o = cc11001100_hook("o", t.length > 0 ? t.reduce(function (e, t) {
              return [].concat(e, i(t));
            }, []) : L, "var-init");
            return o.forEach(function (e) {
              e.classList.remove("medium-zoom-image"), e.dispatchEvent(a("medium-zoom:detach", {
                detail: {
                  zoom: cc11001100_hook("zoom", A, "object-key-init")
                }
              }));
            }), L = cc11001100_hook("L", L.filter(function (e) {
              return -1 === o.indexOf(e);
            }), "assign"), A;
          },
          k = function (e, t) {
            var n = cc11001100_hook("n", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init");
            return L.forEach(function (o) {
              o.addEventListener("medium-zoom:" + e, t, n);
            }), S.push({
              type: cc11001100_hook("type", "medium-zoom:" + e, "object-key-init"),
              listener: cc11001100_hook("listener", t, "object-key-init"),
              options: cc11001100_hook("options", n, "object-key-init")
            }), A;
          },
          y = function (e, t) {
            var n = cc11001100_hook("n", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init");
            return L.forEach(function (o) {
              o.removeEventListener("medium-zoom:" + e, t, n);
            }), S = cc11001100_hook("S", S.filter(function (n) {
              return !(n.type === "medium-zoom:" + e && n.listener.toString() === t.toString());
            }), "assign"), A;
          },
          b = function () {
            var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
              i = cc11001100_hook("i", t.target, "var-init"),
              r = function () {
                var t = cc11001100_hook("t", {
                    width: cc11001100_hook("width", document.documentElement.clientWidth, "object-key-init"),
                    height: cc11001100_hook("height", document.documentElement.clientHeight, "object-key-init"),
                    left: cc11001100_hook("left", 0, "object-key-init"),
                    top: cc11001100_hook("top", 0, "object-key-init"),
                    right: cc11001100_hook("right", 0, "object-key-init"),
                    bottom: cc11001100_hook("bottom", 0, "object-key-init")
                  }, "var-init"),
                  i = cc11001100_hook("i", void 0, "var-init"),
                  r = cc11001100_hook("r", void 0, "var-init");
                if (N.container) if (N.container instanceof Object) i = cc11001100_hook("i", (t = cc11001100_hook("t", e({}, t, N.container), "assign")).width - t.left - t.right - 2 * N.margin, "assign"), r = cc11001100_hook("r", t.height - t.top - t.bottom - 2 * N.margin, "assign");else {
                  var l = cc11001100_hook("l", (n(N.container) ? N.container : document.querySelector(N.container)).getBoundingClientRect(), "var-init"),
                    a = cc11001100_hook("a", l.width, "var-init"),
                    c = cc11001100_hook("c", l.height, "var-init"),
                    d = cc11001100_hook("d", l.left, "var-init"),
                    f = cc11001100_hook("f", l.top, "var-init");
                  t = cc11001100_hook("t", e({}, t, {
                    width: cc11001100_hook("width", a, "object-key-init"),
                    height: cc11001100_hook("height", c, "object-key-init"),
                    left: cc11001100_hook("left", d, "object-key-init"),
                    top: cc11001100_hook("top", f, "object-key-init")
                  }), "assign");
                }
                i = cc11001100_hook("i", i || t.width - 2 * N.margin, "assign"), r = cc11001100_hook("r", r || t.height - 2 * N.margin, "assign");
                var u = cc11001100_hook("u", O.zoomedHd || O.original, "var-init"),
                  s = cc11001100_hook("s", o(u) ? i : u.naturalWidth || i, "var-init"),
                  m = cc11001100_hook("m", o(u) ? r : u.naturalHeight || r, "var-init"),
                  p = cc11001100_hook("p", u.getBoundingClientRect(), "var-init"),
                  g = cc11001100_hook("g", p.top, "var-init"),
                  h = cc11001100_hook("h", p.left, "var-init"),
                  v = cc11001100_hook("v", p.width, "var-init"),
                  k = cc11001100_hook("k", p.height, "var-init"),
                  y = cc11001100_hook("y", Math.min(Math.max(v, s), i) / v, "var-init"),
                  b = cc11001100_hook("b", Math.min(Math.max(k, m), r) / k, "var-init"),
                  z = cc11001100_hook("z", Math.min(y, b), "var-init"),
                  x = cc11001100_hook("x", "scale(" + z + ") translate3d(" + ((i - v) / 2 - h + N.margin + t.left) / z + "px, " + ((r - k) / 2 - g + N.margin + t.top) / z + "px, 0)", "var-init");
                O.zoomed.style.transform = cc11001100_hook("O.zoomed.style.transform", x, "assign"), O.zoomedHd && (O.zoomedHd.style.transform = cc11001100_hook("O.zoomedHd.style.transform", x, "assign"));
              };
            return new f(function (e) {
              if (i && -1 === L.indexOf(i)) e(A);else if (O.zoomed) e(A);else {
                if (i) O.original = cc11001100_hook("O.original", i, "assign");else {
                  if (!(L.length > 0)) return void e(A);
                  var t = cc11001100_hook("t", L, "var-init");
                  O.original = cc11001100_hook("O.original", t[0], "assign");
                }
                if (O.original.dispatchEvent(a("medium-zoom:open", {
                  detail: {
                    zoom: cc11001100_hook("zoom", A, "object-key-init")
                  }
                })), H = cc11001100_hook("H", window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0, "assign"), M = cc11001100_hook("M", !0, "assign"), O.zoomed = cc11001100_hook("O.zoomed", l(O.original), "assign"), document.body.appendChild(T), N.template) {
                  var o = cc11001100_hook("o", n(N.template) ? N.template : document.querySelector(N.template), "var-init");
                  O.template = cc11001100_hook("O.template", document.createElement("div"), "assign"), O.template.appendChild(o.content.cloneNode(!0)), document.body.appendChild(O.template);
                }
                if (O.original.parentElement && "PICTURE" === O.original.parentElement.tagName && O.original.currentSrc && (O.zoomed.src = cc11001100_hook("O.zoomed.src", O.original.currentSrc, "assign")), document.body.appendChild(O.zoomed), window.requestAnimationFrame(function () {
                  document.body.classList.add("medium-zoom--opened");
                }), O.original.classList.add("medium-zoom-image--hidden"), O.zoomed.classList.add("medium-zoom-image--opened"), O.zoomed.addEventListener("click", z), O.zoomed.addEventListener("transitionend", function t() {
                  M = cc11001100_hook("M", !1, "assign"), O.zoomed.removeEventListener("transitionend", t), O.original.dispatchEvent(a("medium-zoom:opened", {
                    detail: {
                      zoom: cc11001100_hook("zoom", A, "object-key-init")
                    }
                  })), e(A);
                }), O.original.getAttribute("data-zoom-src")) {
                  O.zoomedHd = cc11001100_hook("O.zoomedHd", O.zoomed.cloneNode(), "assign"), O.zoomedHd.removeAttribute("srcset"), O.zoomedHd.removeAttribute("sizes"), O.zoomedHd.removeAttribute("loading"), O.zoomedHd.src = cc11001100_hook("O.zoomedHd.src", O.zoomed.getAttribute("data-zoom-src"), "assign"), O.zoomedHd.onerror = cc11001100_hook("O.zoomedHd.onerror", function () {
                    clearInterval(c), console.warn("Unable to reach the zoom image target " + O.zoomedHd.src), O.zoomedHd = cc11001100_hook("O.zoomedHd", null, "assign"), r();
                  }, "assign");
                  var c = cc11001100_hook("c", setInterval(function () {
                    O.zoomedHd.complete && (clearInterval(c), O.zoomedHd.classList.add("medium-zoom-image--opened"), O.zoomedHd.addEventListener("click", z), document.body.appendChild(O.zoomedHd), r());
                  }, 10), "var-init");
                } else if (O.original.hasAttribute("srcset")) {
                  O.zoomedHd = cc11001100_hook("O.zoomedHd", O.zoomed.cloneNode(), "assign"), O.zoomedHd.removeAttribute("sizes"), O.zoomedHd.removeAttribute("loading");
                  var d = cc11001100_hook("d", O.zoomedHd.addEventListener("load", function () {
                    O.zoomedHd.removeEventListener("load", d), O.zoomedHd.classList.add("medium-zoom-image--opened"), O.zoomedHd.addEventListener("click", z), document.body.appendChild(O.zoomedHd), r();
                  }), "var-init");
                } else r();
              }
            });
          },
          z = function () {
            return new f(function (e) {
              !M && O.original ? (M = cc11001100_hook("M", !0, "assign"), document.body.classList.remove("medium-zoom--opened"), O.zoomed.style.transform = cc11001100_hook("O.zoomed.style.transform", "", "assign"), O.zoomedHd && (O.zoomedHd.style.transform = cc11001100_hook("O.zoomedHd.style.transform", "", "assign")), O.template && (O.template.style.transition = cc11001100_hook("O.template.style.transition", "opacity 150ms", "assign"), O.template.style.opacity = cc11001100_hook("O.template.style.opacity", 0, "assign")), O.original.dispatchEvent(a("medium-zoom:close", {
                detail: {
                  zoom: cc11001100_hook("zoom", A, "object-key-init")
                }
              })), O.zoomed.addEventListener("transitionend", function t() {
                O.original.classList.remove("medium-zoom-image--hidden"), document.body.removeChild(O.zoomed), O.zoomedHd && document.body.removeChild(O.zoomedHd), document.body.removeChild(T), O.zoomed.classList.remove("medium-zoom-image--opened"), O.template && document.body.removeChild(O.template), M = cc11001100_hook("M", !1, "assign"), O.zoomed.removeEventListener("transitionend", t), O.original.dispatchEvent(a("medium-zoom:closed", {
                  detail: {
                    zoom: cc11001100_hook("zoom", A, "object-key-init")
                  }
                })), O.original = cc11001100_hook("O.original", null, "assign"), O.zoomed = cc11001100_hook("O.zoomed", null, "assign"), O.zoomedHd = cc11001100_hook("O.zoomedHd", null, "assign"), O.template = cc11001100_hook("O.template", null, "assign"), e(A);
              })) : e(A);
            });
          },
          x = function () {
            var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
              t = cc11001100_hook("t", e.target, "var-init");
            return O.original ? z() : b({
              target: cc11001100_hook("target", t, "object-key-init")
            });
          },
          w = function () {
            return N;
          },
          E = function () {
            return L;
          },
          C = function () {
            return O.original;
          },
          L = cc11001100_hook("L", [], "var-init"),
          S = cc11001100_hook("S", [], "var-init"),
          M = cc11001100_hook("M", !1, "var-init"),
          H = cc11001100_hook("H", 0, "var-init"),
          N = cc11001100_hook("N", d, "var-init"),
          O = cc11001100_hook("O", {
            original: cc11001100_hook("original", null, "object-key-init"),
            zoomed: cc11001100_hook("zoomed", null, "object-key-init"),
            zoomedHd: cc11001100_hook("zoomedHd", null, "object-key-init"),
            template: cc11001100_hook("template", null, "object-key-init")
          }, "var-init");
        "[object Object]" === Object.prototype.toString.call(c) ? N = cc11001100_hook("N", c, "assign") : (c || "string" == typeof c) && h(c), N = cc11001100_hook("N", e({
          margin: cc11001100_hook("margin", 0, "object-key-init"),
          background: cc11001100_hook("background", "#fff", "object-key-init"),
          scrollOffset: cc11001100_hook("scrollOffset", 40, "object-key-init"),
          container: cc11001100_hook("container", null, "object-key-init"),
          template: cc11001100_hook("template", null, "object-key-init")
        }, N), "assign");
        var T = cc11001100_hook("T", r(N.background), "var-init");
        document.addEventListener("click", u), document.addEventListener("keyup", m), document.addEventListener("scroll", s), window.addEventListener("resize", z);
        var A = cc11001100_hook("A", {
          open: cc11001100_hook("open", b, "object-key-init"),
          close: cc11001100_hook("close", z, "object-key-init"),
          toggle: cc11001100_hook("toggle", x, "object-key-init"),
          update: cc11001100_hook("update", p, "object-key-init"),
          clone: cc11001100_hook("clone", g, "object-key-init"),
          attach: cc11001100_hook("attach", h, "object-key-init"),
          detach: cc11001100_hook("detach", v, "object-key-init"),
          on: cc11001100_hook("on", k, "object-key-init"),
          off: cc11001100_hook("off", y, "object-key-init"),
          getOptions: cc11001100_hook("getOptions", w, "object-key-init"),
          getImages: cc11001100_hook("getImages", E, "object-key-init"),
          getZoomedImage: cc11001100_hook("getZoomedImage", C, "object-key-init")
        }, "var-init");
        return A;
      };
    }(), "assign");
  }
}]);