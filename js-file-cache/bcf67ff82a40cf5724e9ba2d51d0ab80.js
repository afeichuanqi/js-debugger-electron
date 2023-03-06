!function () {
  var q = cc11001100_hook("q", null, "var-init");
  window.PR_SHOULD_USE_CONTINUATION = cc11001100_hook("window.PR_SHOULD_USE_CONTINUATION", !0, "assign");
  (function () {
    function S(a) {
      cc11001100_hook("a", a, "function-parameter");
      function d(e) {
        cc11001100_hook("e", e, "function-parameter");
        var b = cc11001100_hook("b", e.charCodeAt(0), "var-init");
        if (b !== 92) return b;
        var a = cc11001100_hook("a", e.charAt(1), "var-init");
        return (b = cc11001100_hook("b", r[a], "assign")) ? b : "0" <= a && a <= "7" ? parseInt(e.substring(1), 8) : a === "u" || a === "x" ? parseInt(e.substring(2), 16) : e.charCodeAt(1);
      }
      function g(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (e < 32) return (e < 16 ? "\\x0" : "\\x") + e.toString(16);
        e = cc11001100_hook("e", String.fromCharCode(e), "assign");
        return e === "\\" || e === "-" || e === "]" || e === "^" ? "\\" + e : e;
      }
      function b(e) {
        cc11001100_hook("e", e, "function-parameter");
        var b = cc11001100_hook("b", e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), "var-init"),
          e = cc11001100_hook("e", [], "var-init"),
          a = cc11001100_hook("a", b[0] === "^", "var-init"),
          c = cc11001100_hook("c", ["["], "var-init");
        a && c.push("^");
        for (var a = cc11001100_hook("a", a ? 1 : 0, "var-init"), f = cc11001100_hook("f", b.length, "var-init"); a < f; ++a) {
          var h = cc11001100_hook("h", b[a], "var-init");
          if (/\\[bdsw]/i.test(h)) c.push(h);else {
            var h = cc11001100_hook("h", d(h), "var-init"),
              l;
            a + 2 < f && "-" === b[a + 1] ? (l = cc11001100_hook("l", d(b[a + 2]), "assign"), a += cc11001100_hook("a", 2, "assign")) : l = cc11001100_hook("l", h, "assign");
            e.push([h, l]);
            l < 65 || h > 122 || (l < 65 || h > 90 || e.push([Math.max(65, h) | 32, Math.min(l, 90) | 32]), l < 97 || h > 122 || e.push([Math.max(97, h) & -33, Math.min(l, 122) & -33]));
          }
        }
        e.sort(function (e, a) {
          return e[0] - a[0] || a[1] - e[1];
        });
        b = cc11001100_hook("b", [], "assign");
        f = cc11001100_hook("f", [], "assign");
        for (a = cc11001100_hook("a", 0, "assign"); a < e.length; ++a) h = cc11001100_hook("h", e[a], "assign"), h[0] <= f[1] + 1 ? f[1] = cc11001100_hook("f[1]", Math.max(f[1], h[1]), "assign") : b.push(f = cc11001100_hook("f", h, "assign"));
        for (a = cc11001100_hook("a", 0, "assign"); a < b.length; ++a) h = cc11001100_hook("h", b[a], "assign"), c.push(g(h[0])), h[1] > h[0] && (h[1] + 1 > h[0] && c.push("-"), c.push(g(h[1])));
        c.push("]");
        return c.join("");
      }
      function s(e) {
        cc11001100_hook("e", e, "function-parameter");
        for (var a = cc11001100_hook("a", e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), "var-init"), c = cc11001100_hook("c", a.length, "var-init"), d = cc11001100_hook("d", [], "var-init"), f = cc11001100_hook("f", 0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); f < c; ++f) {
          var l = cc11001100_hook("l", a[f], "var-init");
          l === "(" ? ++h : "\\" === l.charAt(0) && (l = cc11001100_hook("l", +l.substring(1), "assign")) && (l <= h ? d[l] = cc11001100_hook("d[l]", -1, "assign") : a[f] = cc11001100_hook("a[f]", g(l), "assign"));
        }
        for (f = cc11001100_hook("f", 1, "assign"); f < d.length; ++f) -1 === d[f] && (d[f] = cc11001100_hook("d[f]", ++x, "assign"));
        for (h = cc11001100_hook("h", f = cc11001100_hook("f", 0, "assign"), "assign"); f < c; ++f) l = cc11001100_hook("l", a[f], "assign"), l === "(" ? (++h, d[h] || (a[f] = cc11001100_hook("a[f]", "(?:", "assign"))) : "\\" === l.charAt(0) && (l = cc11001100_hook("l", +l.substring(1), "assign")) && l <= h && (a[f] = cc11001100_hook("a[f]", "\\" + d[l], "assign"));
        for (f = cc11001100_hook("f", 0, "assign"); f < c; ++f) "^" === a[f] && "^" !== a[f + 1] && (a[f] = cc11001100_hook("a[f]", "", "assign"));
        if (e.ignoreCase && m) for (f = cc11001100_hook("f", 0, "assign"); f < c; ++f) l = cc11001100_hook("l", a[f], "assign"), e = cc11001100_hook("e", l.charAt(0), "assign"), l.length >= 2 && e === "[" ? a[f] = cc11001100_hook("a[f]", b(l), "assign") : e !== "\\" && (a[f] = cc11001100_hook("a[f]", l.replace(/[A-Za-z]/g, function (a) {
          a = cc11001100_hook("a", a.charCodeAt(0), "assign");
          return "[" + String.fromCharCode(a & -33, a | 32) + "]";
        }), "assign"));
        return a.join("");
      }
      for (var x = cc11001100_hook("x", 0, "var-init"), m = cc11001100_hook("m", !1, "var-init"), j = cc11001100_hook("j", !1, "var-init"), k = cc11001100_hook("k", 0, "var-init"), c = cc11001100_hook("c", a.length, "var-init"); k < c; ++k) {
        var i = cc11001100_hook("i", a[k], "var-init");
        if (i.ignoreCase) j = cc11001100_hook("j", !0, "assign");else if (/[a-z]/i.test(i.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
          m = cc11001100_hook("m", !0, "assign");
          j = cc11001100_hook("j", !1, "assign");
          break;
        }
      }
      for (var r = cc11001100_hook("r", {
          b: cc11001100_hook("b", 8, "object-key-init"),
          t: cc11001100_hook("t", 9, "object-key-init"),
          n: cc11001100_hook("n", 10, "object-key-init"),
          v: cc11001100_hook("v", 11, "object-key-init"),
          f: cc11001100_hook("f", 12, "object-key-init"),
          r: cc11001100_hook("r", 13, "object-key-init")
        }, "var-init"), n = cc11001100_hook("n", [], "var-init"), k = cc11001100_hook("k", 0, "var-init"), c = cc11001100_hook("c", a.length, "var-init"); k < c; ++k) {
        i = cc11001100_hook("i", a[k], "assign");
        if (i.global || i.multiline) throw Error("" + i);
        n.push("(?:" + s(i) + ")");
      }
      return RegExp(n.join("|"), j ? "gi" : "g");
    }
    function T(a, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      function g(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", a.nodeType, "var-init");
        if (c == 1) {
          if (!b.test(a.className)) {
            for (c = cc11001100_hook("c", a.firstChild, "assign"); c; c = cc11001100_hook("c", c.nextSibling, "assign")) g(c);
            c = cc11001100_hook("c", a.nodeName.toLowerCase(), "assign");
            if ("br" === c || "li" === c) s[j] = cc11001100_hook("s[j]", "\n", "assign"), m[j << 1] = cc11001100_hook("m[j << 1]", x++, "assign"), m[j++ << 1 | 1] = cc11001100_hook("m[j++ << 1 | 1]", a, "assign");
          }
        } else if (c == 3 || c == 4) c = cc11001100_hook("c", a.nodeValue, "assign"), c.length && (c = cc11001100_hook("c", d ? c.replace(/\r\n?/g, "\n") : c.replace(/[\t\n\r ]+/g, " "), "assign"), s[j] = cc11001100_hook("s[j]", c, "assign"), m[j << 1] = cc11001100_hook("m[j << 1]", x, "assign"), x += cc11001100_hook("x", c.length, "assign"), m[j++ << 1 | 1] = cc11001100_hook("m[j++ << 1 | 1]", a, "assign"));
      }
      var b = cc11001100_hook("b", /(?:^|\s)nocode(?:\s|$)/, "var-init"),
        s = cc11001100_hook("s", [], "var-init"),
        x = cc11001100_hook("x", 0, "var-init"),
        m = cc11001100_hook("m", [], "var-init"),
        j = cc11001100_hook("j", 0, "var-init");
      g(a);
      return {
        a: cc11001100_hook("a", s.join("").replace(/\n$/, ""), "object-key-init"),
        d: cc11001100_hook("d", m, "object-key-init")
      };
    }
    function H(a, d, g, b) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("g", g, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      d && (a = cc11001100_hook("a", {
        a: cc11001100_hook("a", d, "object-key-init"),
        e: cc11001100_hook("e", a, "object-key-init")
      }, "assign"), g(a), b.push.apply(b, a.g));
    }
    function U(a) {
      cc11001100_hook("a", a, "function-parameter");
      for (var d = cc11001100_hook("d", void 0, "var-init"), g = cc11001100_hook("g", a.firstChild, "var-init"); g; g = cc11001100_hook("g", g.nextSibling, "assign")) var b = cc11001100_hook("b", g.nodeType, "var-init"), d = cc11001100_hook("d", b === 1 ? d ? a : g : b === 3 ? V.test(g.nodeValue) ? a : d : d, "var-init");
      return d === a ? void 0 : d;
    }
    function C(a, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      function g(a) {
        cc11001100_hook("a", a, "function-parameter");
        for (var j = cc11001100_hook("j", a.e, "var-init"), k = cc11001100_hook("k", [j, "pln"], "var-init"), c = cc11001100_hook("c", 0, "var-init"), i = cc11001100_hook("i", a.a.match(s) || [], "var-init"), r = cc11001100_hook("r", {}, "var-init"), n = cc11001100_hook("n", 0, "var-init"), e = cc11001100_hook("e", i.length, "var-init"); n < e; ++n) {
          var z = cc11001100_hook("z", i[n], "var-init"),
            w = cc11001100_hook("w", r[z], "var-init"),
            t = cc11001100_hook("t", void 0, "var-init"),
            f;
          if (typeof w === "string") f = cc11001100_hook("f", !1, "assign");else {
            var h = cc11001100_hook("h", b[z.charAt(0)], "var-init");
            if (h) t = cc11001100_hook("t", z.match(h[1]), "assign"), w = cc11001100_hook("w", h[0], "assign");else {
              for (f = cc11001100_hook("f", 0, "assign"); f < x; ++f) if (h = cc11001100_hook("h", d[f], "assign"), t = cc11001100_hook("t", z.match(h[1]), "assign")) {
                w = cc11001100_hook("w", h[0], "assign");
                break;
              }
              t || (w = cc11001100_hook("w", "pln", "assign"));
            }
            if ((f = cc11001100_hook("f", w.length >= 5 && "lang-" === w.substring(0, 5), "assign")) && !(t && typeof t[1] === "string")) f = cc11001100_hook("f", !1, "assign"), w = cc11001100_hook("w", "src", "assign");
            f || (r[z] = cc11001100_hook("r[z]", w, "assign"));
          }
          h = cc11001100_hook("h", c, "assign");
          c += cc11001100_hook("c", z.length, "assign");
          if (f) {
            f = cc11001100_hook("f", t[1], "assign");
            var l = cc11001100_hook("l", z.indexOf(f), "var-init"),
              B = cc11001100_hook("B", l + f.length, "var-init");
            t[2] && (B = cc11001100_hook("B", z.length - t[2].length, "assign"), l = cc11001100_hook("l", B - f.length, "assign"));
            w = cc11001100_hook("w", w.substring(5), "assign");
            H(j + h, z.substring(0, l), g, k);
            H(j + h + l, f, I(w, f), k);
            H(j + h + B, z.substring(B), g, k);
          } else k.push(j + h, w);
        }
        a.g = cc11001100_hook("a.g", k, "assign");
      }
      var b = cc11001100_hook("b", {}, "var-init"),
        s;
      (function () {
        for (var g = cc11001100_hook("g", a.concat(d), "var-init"), j = cc11001100_hook("j", [], "var-init"), k = cc11001100_hook("k", {}, "var-init"), c = cc11001100_hook("c", 0, "var-init"), i = cc11001100_hook("i", g.length, "var-init"); c < i; ++c) {
          var r = cc11001100_hook("r", g[c], "var-init"),
            n = cc11001100_hook("n", r[3], "var-init");
          if (n) for (var e = cc11001100_hook("e", n.length, "var-init"); --e >= 0;) b[n.charAt(e)] = cc11001100_hook("b[n.charAt(e)]", r, "assign");
          r = cc11001100_hook("r", r[1], "assign");
          n = cc11001100_hook("n", "" + r, "assign");
          k.hasOwnProperty(n) || (j.push(r), k[n] = cc11001100_hook("k[n]", q, "assign"));
        }
        j.push(/[\S\s]/);
        s = cc11001100_hook("s", S(j), "assign");
      })();
      var x = cc11001100_hook("x", d.length, "var-init");
      return g;
    }
    function v(a) {
      cc11001100_hook("a", a, "function-parameter");
      var d = cc11001100_hook("d", [], "var-init"),
        g = cc11001100_hook("g", [], "var-init");
      a.tripleQuotedStrings ? d.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : a.multiLineStrings ? d.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : d.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]);
      a.verbatimStrings && g.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
      var b = cc11001100_hook("b", a.hashComments, "var-init");
      b && (a.cStyleComments ? (b > 1 ? d.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : d.push(["com", /^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), g.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/, q])) : d.push(["com", /^#[^\n\r]*/, q, "#"]));
      a.cStyleComments && (g.push(["com", /^\/\/[^\n\r]*/, q]), g.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q]));
      if (b = cc11001100_hook("b", a.regexLiterals, "assign")) {
        var s = cc11001100_hook("s", (b = cc11001100_hook("b", b > 1 ? "" : "\n\r", "assign")) ? "." : "[\\S\\s]", "var-init");
        g.push(["lang-regex", RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*(" + ("/(?=[^/*" + b + "])(?:[^/\\x5B\\x5C" + b + "]|\\x5C" + s + "|\\x5B(?:[^\\x5C\\x5D" + b + "]|\\x5C" + s + ")*(?:\\x5D|$))+/") + ")")]);
      }
      (b = cc11001100_hook("b", a.types, "assign")) && g.push(["typ", b]);
      b = cc11001100_hook("b", ("" + a.keywords).replace(/^ | $/g, ""), "assign");
      b.length && g.push(["kwd", RegExp("^(?:" + b.replace(/[\s,]+/g, "|") + ")\\b"), q]);
      d.push(["pln", /^\s+/, q, " \r\n\t\u00a0"]);
      b = cc11001100_hook("b", "^.[^\\s\\w.$@'\"`/\\\\]*", "assign");
      a.regexLiterals && (b += cc11001100_hook("b", "(?!s*/)", "assign"));
      g.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", RegExp(b), q]);
      return C(d, g);
    }
    function J(a, d, g) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("g", g, "function-parameter");
      function b(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", a.nodeType, "var-init");
        if (c == 1 && !x.test(a.className)) {
          if ("br" === a.nodeName) s(a), a.parentNode && a.parentNode.removeChild(a);else for (a = cc11001100_hook("a", a.firstChild, "assign"); a; a = cc11001100_hook("a", a.nextSibling, "assign")) b(a);
        } else if ((c == 3 || c == 4) && g) {
          var d = cc11001100_hook("d", a.nodeValue, "var-init"),
            i = cc11001100_hook("i", d.match(m), "var-init");
          if (i) c = cc11001100_hook("c", d.substring(0, i.index), "assign"), a.nodeValue = cc11001100_hook("a.nodeValue", c, "assign"), (d = cc11001100_hook("d", d.substring(i.index + i[0].length), "assign")) && a.parentNode.insertBefore(j.createTextNode(d), a.nextSibling), s(a), c || a.parentNode.removeChild(a);
        }
      }
      function s(a) {
        cc11001100_hook("a", a, "function-parameter");
        function b(a, c) {
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("c", c, "function-parameter");
          var d = cc11001100_hook("d", c ? a.cloneNode(!1) : a, "var-init"),
            e = cc11001100_hook("e", a.parentNode, "var-init");
          if (e) {
            var e = cc11001100_hook("e", b(e, 1), "var-init"),
              g = cc11001100_hook("g", a.nextSibling, "var-init");
            e.appendChild(d);
            for (var i = cc11001100_hook("i", g, "var-init"); i; i = cc11001100_hook("i", g, "assign")) g = cc11001100_hook("g", i.nextSibling, "assign"), e.appendChild(i);
          }
          return d;
        }
        for (; !a.nextSibling;) if (a = cc11001100_hook("a", a.parentNode, "assign"), !a) return;
        for (var a = cc11001100_hook("a", b(a.nextSibling, 0), "var-init"), d; (d = cc11001100_hook("d", a.parentNode, "assign")) && d.nodeType === 1;) a = cc11001100_hook("a", d, "assign");
        c.push(a);
      }
      for (var x = cc11001100_hook("x", /(?:^|\s)nocode(?:\s|$)/, "var-init"), m = cc11001100_hook("m", /\r\n?|\n/, "var-init"), j = cc11001100_hook("j", a.ownerDocument, "var-init"), k = cc11001100_hook("k", j.createElement("li"), "var-init"); a.firstChild;) k.appendChild(a.firstChild);
      for (var c = cc11001100_hook("c", [k], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < c.length; ++i) b(c[i]);
      d === (d | 0) && c[0].setAttribute("value", d);
      var r = cc11001100_hook("r", j.createElement("ol"), "var-init");
      r.className = cc11001100_hook("r.className", "linenums", "assign");
      for (var d = cc11001100_hook("d", Math.max(0, d - 1 | 0) || 0, "var-init"), i = cc11001100_hook("i", 0, "var-init"), n = cc11001100_hook("n", c.length, "var-init"); i < n; ++i) k = cc11001100_hook("k", c[i], "assign"), k.className = cc11001100_hook("k.className", "L" + (i + d) % 10, "assign"), k.firstChild || k.appendChild(j.createTextNode("\u00a0")), r.appendChild(k);
      a.appendChild(r);
    }
    function p(a, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      for (var g = cc11001100_hook("g", d.length, "var-init"); --g >= 0;) {
        var b = cc11001100_hook("b", d[g], "var-init");
        F.hasOwnProperty(b) ? D.console && console.warn("cannot override language handler %s", b) : F[b] = cc11001100_hook("F[b]", a, "assign");
      }
    }
    function I(a, d) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      if (!a || !F.hasOwnProperty(a)) a = cc11001100_hook("a", /^\s*</.test(d) ? "default-markup" : "default-code", "assign");
      return F[a];
    }
    function K(a) {
      cc11001100_hook("a", a, "function-parameter");
      var d = cc11001100_hook("d", a.h, "var-init");
      try {
        var g = cc11001100_hook("g", T(a.c, a.i), "var-init"),
          b = cc11001100_hook("b", g.a, "var-init");
        a.a = cc11001100_hook("a.a", b, "assign");
        a.d = cc11001100_hook("a.d", g.d, "assign");
        a.e = cc11001100_hook("a.e", 0, "assign");
        I(d, b)(a);
        var s = cc11001100_hook("s", /\bMSIE\s(\d+)/.exec(navigator.userAgent), "var-init"),
          s = cc11001100_hook("s", s && +s[1] <= 8, "var-init"),
          d = cc11001100_hook("d", /\n/g, "var-init"),
          x = cc11001100_hook("x", a.a, "var-init"),
          m = cc11001100_hook("m", x.length, "var-init"),
          g = cc11001100_hook("g", 0, "var-init"),
          j = cc11001100_hook("j", a.d, "var-init"),
          k = cc11001100_hook("k", j.length, "var-init"),
          b = cc11001100_hook("b", 0, "var-init"),
          c = cc11001100_hook("c", a.g, "var-init"),
          i = cc11001100_hook("i", c.length, "var-init"),
          r = cc11001100_hook("r", 0, "var-init");
        c[i] = cc11001100_hook("c[i]", m, "assign");
        var n, e;
        for (e = cc11001100_hook("e", n = cc11001100_hook("n", 0, "assign"), "assign"); e < i;) c[e] !== c[e + 2] ? (c[n++] = cc11001100_hook("c[n++]", c[e++], "assign"), c[n++] = cc11001100_hook("c[n++]", c[e++], "assign")) : e += cc11001100_hook("e", 2, "assign");
        i = cc11001100_hook("i", n, "assign");
        for (e = cc11001100_hook("e", n = cc11001100_hook("n", 0, "assign"), "assign"); e < i;) {
          for (var p = cc11001100_hook("p", c[e], "var-init"), w = cc11001100_hook("w", c[e + 1], "var-init"), t = cc11001100_hook("t", e + 2, "var-init"); t + 2 <= i && c[t + 1] === w;) t += cc11001100_hook("t", 2, "assign");
          c[n++] = cc11001100_hook("c[n++]", p, "assign");
          c[n++] = cc11001100_hook("c[n++]", w, "assign");
          e = cc11001100_hook("e", t, "assign");
        }
        c.length = cc11001100_hook("c.length", n, "assign");
        var f = cc11001100_hook("f", a.c, "var-init"),
          h;
        if (f) h = cc11001100_hook("h", f.style.display, "assign"), f.style.display = cc11001100_hook("f.style.display", "none", "assign");
        try {
          for (; b < k;) {
            var l = cc11001100_hook("l", j[b + 2] || m, "var-init"),
              B = cc11001100_hook("B", c[r + 2] || m, "var-init"),
              t = cc11001100_hook("t", Math.min(l, B), "var-init"),
              A = cc11001100_hook("A", j[b + 1], "var-init"),
              G;
            if (A.nodeType !== 1 && (G = cc11001100_hook("G", x.substring(g, t), "assign"))) {
              s && (G = cc11001100_hook("G", G.replace(d, "\r"), "assign"));
              A.nodeValue = cc11001100_hook("A.nodeValue", G, "assign");
              var L = cc11001100_hook("L", A.ownerDocument, "var-init"),
                o = cc11001100_hook("o", L.createElement("span"), "var-init");
              o.className = cc11001100_hook("o.className", c[r + 1], "assign");
              var v = cc11001100_hook("v", A.parentNode, "var-init");
              v.replaceChild(o, A);
              o.appendChild(A);
              g < l && (j[b + 1] = cc11001100_hook("j[b + 1]", A = cc11001100_hook("A", L.createTextNode(x.substring(t, l)), "assign"), "assign"), v.insertBefore(A, o.nextSibling));
            }
            g = cc11001100_hook("g", t, "assign");
            g >= l && (b += cc11001100_hook("b", 2, "assign"));
            g >= B && (r += cc11001100_hook("r", 2, "assign"));
          }
        } finally {
          if (f) f.style.display = cc11001100_hook("f.style.display", h, "assign");
        }
      } catch (u) {
        D.console && console.log(u && u.stack || u);
      }
    }
    var D = cc11001100_hook("D", window, "var-init"),
      y = cc11001100_hook("y", ["break,continue,do,else,for,if,return,while"], "var-init"),
      E = cc11001100_hook("E", [[y, "auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"], "var-init"),
      M = cc11001100_hook("M", [E, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"], "var-init"),
      N = cc11001100_hook("N", [E, "abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"], "var-init"),
      O = cc11001100_hook("O", [N, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"], "var-init"),
      E = cc11001100_hook("E", [E, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"], "var-init"),
      P = cc11001100_hook("P", [y, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"], "var-init"),
      Q = cc11001100_hook("Q", [y, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"], "var-init"),
      W = cc11001100_hook("W", [y, "as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"], "var-init"),
      y = cc11001100_hook("y", [y, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"], "var-init"),
      R = cc11001100_hook("R", /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/, "var-init"),
      V = cc11001100_hook("V", /\S/, "var-init"),
      X = cc11001100_hook("X", v({
        keywords: cc11001100_hook("keywords", [M, O, E, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", P, Q, y], "object-key-init"),
        hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
        cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
        multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init"),
        regexLiterals: cc11001100_hook("regexLiterals", !0, "object-key-init")
      }), "var-init"),
      F = cc11001100_hook("F", {}, "var-init");
    p(X, ["default-code"]);
    p(C([], [["pln", /^[^<?]+/], ["dec", /^<!\w[^>]*(?:>|$)/], ["com", /^<\!--[\S\s]*?(?:--\>|$)/], ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/], ["lang-", /^<%([\S\s]+?)(?:%>|$)/], ["pun", /^(?:<[%?]|[%?]>)/], ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i], ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i], ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i], ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]);
    p(C([["pln", /^\s+/, q, " \t\r\n"], ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]], [["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i], ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i], ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/], ["pun", /^[/<->]+/], ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i], ["lang-js", /^on\w+\s*=\s*'([^']+)'/i], ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i], ["lang-css", /^style\s*=\s*"([^"]+)"/i], ["lang-css", /^style\s*=\s*'([^']+)'/i], ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]]), ["in.tag"]);
    p(C([], [["atv", /^[\S\s]+/]]), ["uq.val"]);
    p(v({
      keywords: cc11001100_hook("keywords", M, "object-key-init"),
      hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
      cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
      types: cc11001100_hook("types", R, "object-key-init")
    }), ["c", "cc", "cpp", "cxx", "cyc", "m"]);
    p(v({
      keywords: cc11001100_hook("keywords", "null,true,false", "object-key-init")
    }), ["json"]);
    p(v({
      keywords: cc11001100_hook("keywords", O, "object-key-init"),
      hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
      cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
      verbatimStrings: cc11001100_hook("verbatimStrings", !0, "object-key-init"),
      types: cc11001100_hook("types", R, "object-key-init")
    }), ["cs"]);
    p(v({
      keywords: cc11001100_hook("keywords", N, "object-key-init"),
      cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init")
    }), ["java"]);
    p(v({
      keywords: cc11001100_hook("keywords", y, "object-key-init"),
      hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
      multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init")
    }), ["bash", "bsh", "csh", "sh"]);
    p(v({
      keywords: cc11001100_hook("keywords", P, "object-key-init"),
      hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
      multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init"),
      tripleQuotedStrings: cc11001100_hook("tripleQuotedStrings", !0, "object-key-init")
    }), ["cv", "py", "python"]);
    p(v({
      keywords: cc11001100_hook("keywords", "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END", "object-key-init"),
      hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
      multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init"),
      regexLiterals: cc11001100_hook("regexLiterals", 2, "object-key-init")
    }), ["perl", "pl", "pm"]);
    p(v({
      keywords: cc11001100_hook("keywords", Q, "object-key-init"),
      hashComments: cc11001100_hook("hashComments", !0, "object-key-init"),
      multiLineStrings: cc11001100_hook("multiLineStrings", !0, "object-key-init"),
      regexLiterals: cc11001100_hook("regexLiterals", !0, "object-key-init")
    }), ["rb", "ruby"]);
    p(v({
      keywords: cc11001100_hook("keywords", E, "object-key-init"),
      cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
      regexLiterals: cc11001100_hook("regexLiterals", !0, "object-key-init")
    }), ["javascript", "js"]);
    p(v({
      keywords: cc11001100_hook("keywords", "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes", "object-key-init"),
      hashComments: cc11001100_hook("hashComments", 3, "object-key-init"),
      cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
      multilineStrings: cc11001100_hook("multilineStrings", !0, "object-key-init"),
      tripleQuotedStrings: cc11001100_hook("tripleQuotedStrings", !0, "object-key-init"),
      regexLiterals: cc11001100_hook("regexLiterals", !0, "object-key-init")
    }), ["coffee"]);
    p(v({
      keywords: cc11001100_hook("keywords", W, "object-key-init"),
      cStyleComments: cc11001100_hook("cStyleComments", !0, "object-key-init"),
      multilineStrings: cc11001100_hook("multilineStrings", !0, "object-key-init")
    }), ["rc", "rs", "rust"]);
    p(C([], [["str", /^[\S\s]+/]]), ["regex"]);
    var Y = cc11001100_hook("Y", D.PR = cc11001100_hook("D.PR", {
      createSimpleLexer: cc11001100_hook("createSimpleLexer", C, "object-key-init"),
      registerLangHandler: cc11001100_hook("registerLangHandler", p, "object-key-init"),
      sourceDecorator: cc11001100_hook("sourceDecorator", v, "object-key-init"),
      PR_ATTRIB_NAME: cc11001100_hook("PR_ATTRIB_NAME", "atn", "object-key-init"),
      PR_ATTRIB_VALUE: cc11001100_hook("PR_ATTRIB_VALUE", "atv", "object-key-init"),
      PR_COMMENT: cc11001100_hook("PR_COMMENT", "com", "object-key-init"),
      PR_DECLARATION: cc11001100_hook("PR_DECLARATION", "dec", "object-key-init"),
      PR_KEYWORD: cc11001100_hook("PR_KEYWORD", "kwd", "object-key-init"),
      PR_LITERAL: cc11001100_hook("PR_LITERAL", "lit", "object-key-init"),
      PR_NOCODE: cc11001100_hook("PR_NOCODE", "nocode", "object-key-init"),
      PR_PLAIN: cc11001100_hook("PR_PLAIN", "pln", "object-key-init"),
      PR_PUNCTUATION: cc11001100_hook("PR_PUNCTUATION", "pun", "object-key-init"),
      PR_SOURCE: cc11001100_hook("PR_SOURCE", "src", "object-key-init"),
      PR_STRING: cc11001100_hook("PR_STRING", "str", "object-key-init"),
      PR_TAG: cc11001100_hook("PR_TAG", "tag", "object-key-init"),
      PR_TYPE: cc11001100_hook("PR_TYPE", "typ", "object-key-init"),
      prettyPrintOne: cc11001100_hook("prettyPrintOne", D.prettyPrintOne = cc11001100_hook("D.prettyPrintOne", function (a, d, g) {
        var b = cc11001100_hook("b", document.createElement("div"), "var-init");
        b.innerHTML = cc11001100_hook("b.innerHTML", "<pre>" + a + "</pre>", "assign");
        b = cc11001100_hook("b", b.firstChild, "assign");
        g && J(b, g, !0);
        K({
          h: cc11001100_hook("h", d, "object-key-init"),
          j: cc11001100_hook("j", g, "object-key-init"),
          c: cc11001100_hook("c", b, "object-key-init"),
          i: cc11001100_hook("i", 1, "object-key-init")
        });
        return b.innerHTML;
      }, "assign"), "object-key-init"),
      prettyPrint: cc11001100_hook("prettyPrint", D.prettyPrint = cc11001100_hook("D.prettyPrint", function (a, d) {
        function g() {
          for (var b = cc11001100_hook("b", D.PR_SHOULD_USE_CONTINUATION ? c.now() + 250 : Infinity, "var-init"); i < p.length && c.now() < b; i++) {
            for (var d = cc11001100_hook("d", p[i], "var-init"), j = cc11001100_hook("j", h, "var-init"), k = cc11001100_hook("k", d, "var-init"); k = cc11001100_hook("k", k.previousSibling, "assign");) {
              var m = cc11001100_hook("m", k.nodeType, "var-init"),
                o = cc11001100_hook("o", (m === 7 || m === 8) && k.nodeValue, "var-init");
              if (o ? !/^\??prettify\b/.test(o) : m !== 3 || /\S/.test(k.nodeValue)) break;
              if (o) {
                j = cc11001100_hook("j", {}, "assign");
                o.replace(/\b(\w+)=([\w%+\-.:]+)/g, function (a, b, c) {
                  j[b] = cc11001100_hook("j[b]", c, "assign");
                });
                break;
              }
            }
            k = cc11001100_hook("k", d.className, "assign");
            if ((j !== h || e.test(k)) && !v.test(k)) {
              m = cc11001100_hook("m", !1, "assign");
              for (o = cc11001100_hook("o", d.parentNode, "assign"); o; o = cc11001100_hook("o", o.parentNode, "assign")) if (f.test(o.tagName) && o.className && e.test(o.className)) {
                m = cc11001100_hook("m", !0, "assign");
                break;
              }
              if (!m) {
                d.className += cc11001100_hook("d.className", " prettyprinted", "assign");
                m = cc11001100_hook("m", j.lang, "assign");
                if (!m) {
                  var m = cc11001100_hook("m", k.match(n), "var-init"),
                    y;
                  if (!m && (y = cc11001100_hook("y", U(d), "assign")) && t.test(y.tagName)) m = cc11001100_hook("m", y.className.match(n), "assign");
                  m && (m = cc11001100_hook("m", m[1], "assign"));
                }
                if (w.test(d.tagName)) o = cc11001100_hook("o", 1, "assign");else var o = cc11001100_hook("o", d.currentStyle, "var-init"),
                  u = cc11001100_hook("u", s.defaultView, "var-init"),
                  o = cc11001100_hook("o", (o = cc11001100_hook("o", o ? o.whiteSpace : u && u.getComputedStyle ? u.getComputedStyle(d, q).getPropertyValue("white-space") : 0, "assign")) && "pre" === o.substring(0, 3), "var-init");
                u = cc11001100_hook("u", j.linenums, "assign");
                if (!(u = cc11001100_hook("u", u === "true" || +u, "assign"))) u = cc11001100_hook("u", (u = cc11001100_hook("u", k.match(/\blinenums\b(?::(\d+))?/), "assign")) ? u[1] && u[1].length ? +u[1] : !0 : !1, "assign");
                u && J(d, u, o);
                r = cc11001100_hook("r", {
                  h: cc11001100_hook("h", m, "object-key-init"),
                  c: cc11001100_hook("c", d, "object-key-init"),
                  j: cc11001100_hook("j", u, "object-key-init"),
                  i: cc11001100_hook("i", o, "object-key-init")
                }, "assign");
                K(r);
              }
            }
          }
          i < p.length ? setTimeout(g, 250) : "function" === typeof a && a();
        }
        for (var b = cc11001100_hook("b", d || document.body, "var-init"), s = cc11001100_hook("s", b.ownerDocument || document, "var-init"), b = cc11001100_hook("b", [b.getElementsByTagName("pre"), b.getElementsByTagName("code"), b.getElementsByTagName("xmp")], "var-init"), p = cc11001100_hook("p", [], "var-init"), m = cc11001100_hook("m", 0, "var-init"); m < b.length; ++m) for (var j = cc11001100_hook("j", 0, "var-init"), k = cc11001100_hook("k", b[m].length, "var-init"); j < k; ++j) p.push(b[m][j]);
        var b = cc11001100_hook("b", q, "var-init"),
          c = cc11001100_hook("c", Date, "var-init");
        c.now || (c = cc11001100_hook("c", {
          now: function () {
            return +new Date();
          }
        }, "assign"));
        var i = cc11001100_hook("i", 0, "var-init"),
          r,
          n = cc11001100_hook("n", /\blang(?:uage)?-([\w.]+)(?!\S)/, "var-init"),
          e = cc11001100_hook("e", /\bprettyprint\b/, "var-init"),
          v = cc11001100_hook("v", /\bprettyprinted\b/, "var-init"),
          w = cc11001100_hook("w", /pre|xmp/i, "var-init"),
          t = cc11001100_hook("t", /^code$/i, "var-init"),
          f = cc11001100_hook("f", /^(?:pre|code|xmp)$/i, "var-init"),
          h = cc11001100_hook("h", {}, "var-init");
        g();
      }, "assign"), "object-key-init")
    }, "assign"), "var-init");
    typeof define === "function" && define.amd && define("google-code-prettify", [], function () {
      return Y;
    });
  })();
}();