/*!
  Highlight.js v11.4.0 (git: 2d0e7c1094)
  (c) 2006-2022 Ivan Sagalaev and other contributors
  License: BSD-3-Clause
 */
var hljs = cc11001100_hook("hljs", function () {
  "use strict";

  var e = cc11001100_hook("e", {
    exports: {}
  }, "var-init");
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e instanceof Map ? e.clear = cc11001100_hook("e.clear", e.delete = cc11001100_hook("e.delete", e.set = cc11001100_hook("e.set", () => {
      throw Error("map is read-only");
    }, "assign"), "assign"), "assign") : e instanceof Set && (e.add = cc11001100_hook("e.add", e.clear = cc11001100_hook("e.clear", e.delete = cc11001100_hook("e.delete", () => {
      throw Error("set is read-only");
    }, "assign"), "assign"), "assign")), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(s => {
      var t = cc11001100_hook("t", e[s], "var-init");
      "object" != typeof t || Object.isFrozen(t) || n(t);
    }), e;
  }
  e.exports = cc11001100_hook("e.exports", n, "assign"), e.exports.default = cc11001100_hook("e.exports.default", n, "assign");
  var s = cc11001100_hook("s", e.exports, "var-init");
  class t {
    constructor(e) {
      void 0 === e.data && (e.data = cc11001100_hook("e.data", {}, "assign")), this.data = cc11001100_hook("this.data", e.data, "assign"), this.isMatchIgnored = cc11001100_hook("this.isMatchIgnored", !1, "assign");
    }
    ignoreMatch() {
      this.isMatchIgnored = cc11001100_hook("this.isMatchIgnored", !0, "assign");
    }
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(e, ...n) {
    cc11001100_hook("e", e, "function-parameter");
    const s = cc11001100_hook("s", Object.create(null), "var-init");
    for (const n in e) s[n] = cc11001100_hook("s[n]", e[n], "assign");
    return n.forEach(e => {
      for (const n in e) s[n] = cc11001100_hook("s[n]", e[n], "assign");
    }), s;
  }
  const i = cc11001100_hook("i", e => !!e.kind, "var-init");
  class o {
    constructor(e, n) {
      this.buffer = cc11001100_hook("this.buffer", "", "assign"), this.classPrefix = cc11001100_hook("this.classPrefix", n.classPrefix, "assign"), e.walk(this);
    }
    addText(e) {
      this.buffer += cc11001100_hook("this.buffer", a(e), "assign");
    }
    openNode(e) {
      if (!i(e)) return;
      let n = cc11001100_hook("n", e.kind, "var-init");
      n = cc11001100_hook("n", e.sublanguage ? "language-" + n : ((e, {
        prefix: n
      }) => {
        if (e.includes(".")) {
          const s = cc11001100_hook("s", e.split("."), "var-init");
          return [`${n}${s.shift()}`, ...s.map((e, n) => `${e}${"_".repeat(n + 1)}`)].join(" ");
        }
        return `${n}${e}`;
      })(n, {
        prefix: cc11001100_hook("prefix", this.classPrefix, "object-key-init")
      }), "assign"), this.span(n);
    }
    closeNode(e) {
      i(e) && (this.buffer += cc11001100_hook("this.buffer", "</span>", "assign"));
    }
    value() {
      return this.buffer;
    }
    span(e) {
      this.buffer += cc11001100_hook("this.buffer", `<span class="${e}">`, "assign");
    }
  }
  class c {
    constructor() {
      this.rootNode = cc11001100_hook("this.rootNode", {
        children: cc11001100_hook("children", [], "object-key-init")
      }, "assign"), this.stack = cc11001100_hook("this.stack", [this.rootNode], "assign");
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    add(e) {
      this.top.children.push(e);
    }
    openNode(e) {
      const n = cc11001100_hook("n", {
        kind: cc11001100_hook("kind", e, "object-key-init"),
        children: cc11001100_hook("children", [], "object-key-init")
      }, "var-init");
      this.add(n), this.stack.push(n);
    }
    closeNode() {
      if (this.stack.length > 1) return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(););
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    walk(e) {
      return this.constructor._walk(e, this.rootNode);
    }
    static _walk(e, n) {
      return "string" == typeof n ? e.addText(n) : n.children && (e.openNode(n), n.children.forEach(n => this._walk(e, n)), e.closeNode(n)), e;
    }
    static _collapse(e) {
      "string" != typeof e && e.children && (e.children.every(e => "string" == typeof e) ? e.children = cc11001100_hook("e.children", [e.children.join("")], "assign") : e.children.forEach(e => {
        c._collapse(e);
      }));
    }
  }
  class l extends c {
    constructor(e) {
      super(), this.options = cc11001100_hook("this.options", e, "assign");
    }
    addKeyword(e, n) {
      "" !== e && (this.openNode(n), this.addText(e), this.closeNode());
    }
    addText(e) {
      "" !== e && this.add(e);
    }
    addSublanguage(e, n) {
      const s = cc11001100_hook("s", e.root, "var-init");
      s.kind = cc11001100_hook("s.kind", n, "assign"), s.sublanguage = cc11001100_hook("s.sublanguage", !0, "assign"), this.add(s);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return !0;
    }
  }
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    return RegExp(e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m");
  }
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e ? "string" == typeof e ? e : e.source : null;
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    return g("(?=", e, ")");
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    return g("(?:", e, ")*");
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    return g("(?:", e, ")?");
  }
  function g(...e) {
    return e.map(e => p(e)).join("");
  }
  function _(...e) {
    const n = cc11001100_hook("n", (e => {
      const n = cc11001100_hook("n", e[e.length - 1], "var-init");
      return "object" == typeof n && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {};
    })(e), "var-init");
    return "(" + (n.capture ? "" : "?:") + e.map(e => p(e)).join("|") + ")";
  }
  function v(e) {
    cc11001100_hook("e", e, "function-parameter");
    return RegExp(e.toString() + "|").exec("").length - 1;
  }
  const f = cc11001100_hook("f", /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, "var-init");
  function h(e, {
    joinWith: n
  }) {
    cc11001100_hook("e", e, "function-parameter");
    let s = cc11001100_hook("s", 0, "var-init");
    return e.map(e => {
      s += cc11001100_hook("s", 1, "assign");
      const n = cc11001100_hook("n", s, "var-init");
      let t = cc11001100_hook("t", p(e), "var-init"),
        a = cc11001100_hook("a", "", "var-init");
      for (; t.length > 0;) {
        const e = cc11001100_hook("e", f.exec(t), "var-init");
        if (!e) {
          a += cc11001100_hook("a", t, "assign");
          break;
        }
        a += cc11001100_hook("a", t.substring(0, e.index), "assign"), t = cc11001100_hook("t", t.substring(e.index + e[0].length), "assign"), "\\" === e[0][0] && e[1] ? a += cc11001100_hook("a", "\\" + (Number(e[1]) + n), "assign") : (a += cc11001100_hook("a", e[0], "assign"), "(" === e[0] && s++);
      }
      return a;
    }).map(e => `(${e})`).join(n);
  }
  const E = cc11001100_hook("E", "[a-zA-Z]\\w*", "var-init"),
    w = cc11001100_hook("w", "[a-zA-Z_]\\w*", "var-init"),
    y = cc11001100_hook("y", "\\b\\d+(\\.\\d+)?", "var-init"),
    N = cc11001100_hook("N", "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", "var-init"),
    x = cc11001100_hook("x", "\\b(0b[01]+)", "var-init"),
    k = cc11001100_hook("k", {
      begin: cc11001100_hook("begin", "\\\\[\\s\\S]", "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    }, "var-init"),
    O = cc11001100_hook("O", {
      scope: cc11001100_hook("scope", "string", "object-key-init"),
      begin: cc11001100_hook("begin", "'", "object-key-init"),
      end: cc11001100_hook("end", "'", "object-key-init"),
      illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
      contains: cc11001100_hook("contains", [k], "object-key-init")
    }, "var-init"),
    M = cc11001100_hook("M", {
      scope: cc11001100_hook("scope", "string", "object-key-init"),
      begin: cc11001100_hook("begin", '"', "object-key-init"),
      end: cc11001100_hook("end", '"', "object-key-init"),
      illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
      contains: cc11001100_hook("contains", [k], "object-key-init")
    }, "var-init"),
    S = cc11001100_hook("S", (e, n, s = {}) => {
      const t = cc11001100_hook("t", r({
        scope: cc11001100_hook("scope", "comment", "object-key-init"),
        begin: cc11001100_hook("begin", e, "object-key-init"),
        end: cc11001100_hook("end", n, "object-key-init"),
        contains: cc11001100_hook("contains", [], "object-key-init")
      }, s), "var-init");
      t.contains.push({
        scope: cc11001100_hook("scope", "doctag", "object-key-init"),
        begin: cc11001100_hook("begin", "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)", "object-key-init"),
        end: cc11001100_hook("end", /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, "object-key-init"),
        excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      });
      const a = cc11001100_hook("a", _("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/), "var-init");
      return t.contains.push({
        begin: cc11001100_hook("begin", g(/[ ]+/, "(", a, /[.]?[:]?([.][ ]|[ ])/, "){3}"), "object-key-init")
      }), t;
    }, "var-init"),
    C = cc11001100_hook("C", S("//", "$"), "var-init"),
    A = cc11001100_hook("A", S("/\\*", "\\*/"), "var-init"),
    T = cc11001100_hook("T", S("#", "$"), "var-init");
  var $ = cc11001100_hook("$", Object.freeze({
    __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
    MATCH_NOTHING_RE: cc11001100_hook("MATCH_NOTHING_RE", /\b\B/, "object-key-init"),
    IDENT_RE: cc11001100_hook("IDENT_RE", E, "object-key-init"),
    UNDERSCORE_IDENT_RE: cc11001100_hook("UNDERSCORE_IDENT_RE", w, "object-key-init"),
    NUMBER_RE: cc11001100_hook("NUMBER_RE", y, "object-key-init"),
    C_NUMBER_RE: cc11001100_hook("C_NUMBER_RE", N, "object-key-init"),
    BINARY_NUMBER_RE: cc11001100_hook("BINARY_NUMBER_RE", x, "object-key-init"),
    RE_STARTERS_RE: cc11001100_hook("RE_STARTERS_RE", "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", "object-key-init"),
    SHEBANG: cc11001100_hook("SHEBANG", (e = {}) => {
      const n = cc11001100_hook("n", /^#![ ]*\//, "var-init");
      return e.binary && (e.begin = cc11001100_hook("e.begin", g(n, /.*\b/, e.binary, /\b.*/), "assign")), r({
        scope: cc11001100_hook("scope", "meta", "object-key-init"),
        begin: cc11001100_hook("begin", n, "object-key-init"),
        end: cc11001100_hook("end", /$/, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        "on:begin": cc11001100_hook("on:begin", (e, n) => {
          0 !== e.index && n.ignoreMatch();
        }, "object-key-init")
      }, e);
    }, "object-key-init"),
    BACKSLASH_ESCAPE: cc11001100_hook("BACKSLASH_ESCAPE", k, "object-key-init"),
    APOS_STRING_MODE: cc11001100_hook("APOS_STRING_MODE", O, "object-key-init"),
    QUOTE_STRING_MODE: cc11001100_hook("QUOTE_STRING_MODE", M, "object-key-init"),
    PHRASAL_WORDS_MODE: {
      begin: cc11001100_hook("begin", /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/, "object-key-init")
    },
    COMMENT: cc11001100_hook("COMMENT", S, "object-key-init"),
    C_LINE_COMMENT_MODE: cc11001100_hook("C_LINE_COMMENT_MODE", C, "object-key-init"),
    C_BLOCK_COMMENT_MODE: cc11001100_hook("C_BLOCK_COMMENT_MODE", A, "object-key-init"),
    HASH_COMMENT_MODE: cc11001100_hook("HASH_COMMENT_MODE", T, "object-key-init"),
    NUMBER_MODE: {
      scope: cc11001100_hook("scope", "number", "object-key-init"),
      begin: cc11001100_hook("begin", y, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    C_NUMBER_MODE: {
      scope: cc11001100_hook("scope", "number", "object-key-init"),
      begin: cc11001100_hook("begin", N, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    BINARY_NUMBER_MODE: {
      scope: cc11001100_hook("scope", "number", "object-key-init"),
      begin: cc11001100_hook("begin", x, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    REGEXP_MODE: {
      begin: cc11001100_hook("begin", /(?=\/[^/\n]*\/)/, "object-key-init"),
      contains: cc11001100_hook("contains", [{
        scope: cc11001100_hook("scope", "regexp", "object-key-init"),
        begin: cc11001100_hook("begin", /\//, "object-key-init"),
        end: cc11001100_hook("end", /\/[gimuy]*/, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
        contains: cc11001100_hook("contains", [k, {
          begin: cc11001100_hook("begin", /\[/, "object-key-init"),
          end: cc11001100_hook("end", /\]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [k], "object-key-init")
        }], "object-key-init")
      }], "object-key-init")
    },
    TITLE_MODE: {
      scope: cc11001100_hook("scope", "title", "object-key-init"),
      begin: cc11001100_hook("begin", E, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    UNDERSCORE_TITLE_MODE: {
      scope: cc11001100_hook("scope", "title", "object-key-init"),
      begin: cc11001100_hook("begin", w, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    METHOD_GUARD: {
      begin: cc11001100_hook("begin", "\\.\\s*[a-zA-Z_]\\w*", "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    END_SAME_AS_BEGIN: cc11001100_hook("END_SAME_AS_BEGIN", e => Object.assign(e, {
      "on:begin": cc11001100_hook("on:begin", (e, n) => {
        n.data._beginMatch = cc11001100_hook("n.data._beginMatch", e[1], "assign");
      }, "object-key-init"),
      "on:end": cc11001100_hook("on:end", (e, n) => {
        n.data._beginMatch !== e[1] && n.ignoreMatch();
      }, "object-key-init")
    }), "object-key-init")
  }), "var-init");
  function q(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    "." === e.input[e.index - 1] && n.ignoreMatch();
  }
  function R(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    void 0 !== e.className && (e.scope = cc11001100_hook("e.scope", e.className, "assign"), delete e.className);
  }
  function D(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    n && e.beginKeywords && (e.begin = cc11001100_hook("e.begin", "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", "assign"), e.__beforeBegin = cc11001100_hook("e.__beforeBegin", q, "assign"), e.keywords = cc11001100_hook("e.keywords", e.keywords || e.beginKeywords, "assign"), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = cc11001100_hook("e.relevance", 0, "assign")));
  }
  function I(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    Array.isArray(e.illegal) && (e.illegal = cc11001100_hook("e.illegal", _(...e.illegal), "assign"));
  }
  function L(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (e.match) {
      if (e.begin || e.end) throw Error("begin & end are not supported with match");
      e.begin = cc11001100_hook("e.begin", e.match, "assign"), delete e.match;
    }
  }
  function B(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    void 0 === e.relevance && (e.relevance = cc11001100_hook("e.relevance", 1, "assign"));
  }
  const z = cc11001100_hook("z", (e, n) => {
      if (!e.beforeMatch) return;
      if (e.starts) throw Error("beforeMatch cannot be used with starts");
      const s = cc11001100_hook("s", Object.assign({}, e), "var-init");
      Object.keys(e).forEach(n => {
        delete e[n];
      }), e.keywords = cc11001100_hook("e.keywords", s.keywords, "assign"), e.begin = cc11001100_hook("e.begin", g(s.beforeMatch, m(s.begin)), "assign"), e.starts = cc11001100_hook("e.starts", {
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        contains: cc11001100_hook("contains", [Object.assign(s, {
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
        })], "object-key-init")
      }, "assign"), e.relevance = cc11001100_hook("e.relevance", 0, "assign"), delete s.beforeMatch;
    }, "var-init"),
    U = cc11001100_hook("U", ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"], "var-init");
  function F(e, n, s = "keyword") {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    const t = cc11001100_hook("t", Object.create(null), "var-init");
    return "string" == typeof e ? a(s, e.split(" ")) : Array.isArray(e) ? a(s, e) : Object.keys(e).forEach(s => {
      Object.assign(t, F(e[s], n, s));
    }), t;
    function a(e, s) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      n && (s = cc11001100_hook("s", s.map(e => e.toLowerCase()), "assign")), s.forEach(n => {
        const s = cc11001100_hook("s", n.split("|"), "var-init");
        t[s[0]] = cc11001100_hook("t[s[0]]", [e, P(s[0], s[1])], "assign");
      });
    }
  }
  function P(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return n ? Number(n) : (e => U.includes(e.toLowerCase()))(e) ? 0 : 1;
  }
  const j = cc11001100_hook("j", {}, "var-init"),
    K = cc11001100_hook("K", e => {
      console.error(e);
    }, "var-init"),
    H = cc11001100_hook("H", (e, ...n) => {
      console.log("WARN: " + e, ...n);
    }, "var-init"),
    Z = cc11001100_hook("Z", (e, n) => {
      j[`${e}/${n}`] || (console.log(`Deprecated as of ${e}. ${n}`), j[`${e}/${n}`] = cc11001100_hook("j[`${e}/${n}`]", !0, "assign"));
    }, "var-init"),
    G = cc11001100_hook("G", Error(), "var-init");
  function W(e, n, {
    key: s
  }) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    let t = cc11001100_hook("t", 0, "var-init");
    const a = cc11001100_hook("a", e[s], "var-init"),
      r = cc11001100_hook("r", {}, "var-init"),
      i = cc11001100_hook("i", {}, "var-init");
    for (let e = cc11001100_hook("e", 1, "var-init"); e <= n.length; e++) i[e + t] = cc11001100_hook("i[e + t]", a[e], "assign"), r[e + t] = cc11001100_hook("r[e + t]", !0, "assign"), t += cc11001100_hook("t", v(n[e - 1]), "assign");
    e[s] = cc11001100_hook("e[s]", i, "assign"), e[s]._emit = cc11001100_hook("e[s]._emit", r, "assign"), e[s]._multi = cc11001100_hook("e[s]._multi", !0, "assign");
  }
  function Q(e) {
    cc11001100_hook("e", e, "function-parameter");
    (e => {
      e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = cc11001100_hook("e.beginScope", e.scope, "assign"), delete e.scope);
    })(e), "string" == typeof e.beginScope && (e.beginScope = cc11001100_hook("e.beginScope", {
      _wrap: cc11001100_hook("_wrap", e.beginScope, "object-key-init")
    }, "assign")), "string" == typeof e.endScope && (e.endScope = cc11001100_hook("e.endScope", {
      _wrap: cc11001100_hook("_wrap", e.endScope, "object-key-init")
    }, "assign")), (e => {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), G;
        if ("object" != typeof e.beginScope || null === e.beginScope) throw K("beginScope must be object"), G;
        W(e, e.begin, {
          key: cc11001100_hook("key", "beginScope", "object-key-init")
        }), e.begin = cc11001100_hook("e.begin", h(e.begin, {
          joinWith: cc11001100_hook("joinWith", "", "object-key-init")
        }), "assign");
      }
    })(e), (e => {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"), G;
        if ("object" != typeof e.endScope || null === e.endScope) throw K("endScope must be object"), G;
        W(e, e.end, {
          key: cc11001100_hook("key", "endScope", "object-key-init")
        }), e.end = cc11001100_hook("e.end", h(e.end, {
          joinWith: cc11001100_hook("joinWith", "", "object-key-init")
        }), "assign");
      }
    })(e);
  }
  function X(e) {
    cc11001100_hook("e", e, "function-parameter");
    function n(n, s) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      return RegExp(p(n), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (s ? "g" : ""));
    }
    class s {
      constructor() {
        this.matchIndexes = cc11001100_hook("this.matchIndexes", {}, "assign"), this.regexes = cc11001100_hook("this.regexes", [], "assign"), this.matchAt = cc11001100_hook("this.matchAt", 1, "assign"), this.position = cc11001100_hook("this.position", 0, "assign");
      }
      addRule(e, n) {
        n.position = cc11001100_hook("n.position", this.position++, "assign"), this.matchIndexes[this.matchAt] = cc11001100_hook("this.matchIndexes[this.matchAt]", n, "assign"), this.regexes.push([n, e]), this.matchAt += cc11001100_hook("this.matchAt", v(e) + 1, "assign");
      }
      compile() {
        0 === this.regexes.length && (this.exec = cc11001100_hook("this.exec", () => null, "assign"));
        const e = cc11001100_hook("e", this.regexes.map(e => e[1]), "var-init");
        this.matcherRe = cc11001100_hook("this.matcherRe", n(h(e, {
          joinWith: cc11001100_hook("joinWith", "|", "object-key-init")
        }), !0), "assign"), this.lastIndex = cc11001100_hook("this.lastIndex", 0, "assign");
      }
      exec(e) {
        this.matcherRe.lastIndex = cc11001100_hook("this.matcherRe.lastIndex", this.lastIndex, "assign");
        const n = cc11001100_hook("n", this.matcherRe.exec(e), "var-init");
        if (!n) return null;
        const s = cc11001100_hook("s", n.findIndex((e, n) => n > 0 && void 0 !== e), "var-init"),
          t = cc11001100_hook("t", this.matchIndexes[s], "var-init");
        return n.splice(0, s), Object.assign(n, t);
      }
    }
    class t {
      constructor() {
        this.rules = cc11001100_hook("this.rules", [], "assign"), this.multiRegexes = cc11001100_hook("this.multiRegexes", [], "assign"), this.count = cc11001100_hook("this.count", 0, "assign"), this.lastIndex = cc11001100_hook("this.lastIndex", 0, "assign"), this.regexIndex = cc11001100_hook("this.regexIndex", 0, "assign");
      }
      getMatcher(e) {
        if (this.multiRegexes[e]) return this.multiRegexes[e];
        const n = cc11001100_hook("n", new s(), "var-init");
        return this.rules.slice(e).forEach(([e, s]) => n.addRule(e, s)), n.compile(), this.multiRegexes[e] = cc11001100_hook("this.multiRegexes[e]", n, "assign"), n;
      }
      resumingScanAtSamePosition() {
        return 0 !== this.regexIndex;
      }
      considerAll() {
        this.regexIndex = cc11001100_hook("this.regexIndex", 0, "assign");
      }
      addRule(e, n) {
        this.rules.push([e, n]), "begin" === n.type && this.count++;
      }
      exec(e) {
        const n = cc11001100_hook("n", this.getMatcher(this.regexIndex), "var-init");
        n.lastIndex = cc11001100_hook("n.lastIndex", this.lastIndex, "assign");
        let s = cc11001100_hook("s", n.exec(e), "var-init");
        if (this.resumingScanAtSamePosition()) if (s && s.index === this.lastIndex) ;else {
          const n = cc11001100_hook("n", this.getMatcher(0), "var-init");
          n.lastIndex = cc11001100_hook("n.lastIndex", this.lastIndex + 1, "assign"), s = cc11001100_hook("s", n.exec(e), "assign");
        }
        return s && (this.regexIndex += cc11001100_hook("this.regexIndex", s.position + 1, "assign"), this.regexIndex === this.count && this.considerAll()), s;
      }
    }
    if (e.compilerExtensions || (e.compilerExtensions = cc11001100_hook("e.compilerExtensions", [], "assign")), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = cc11001100_hook("e.classNameAliases", r(e.classNameAliases || {}), "assign"), function s(a, i) {
      const o = cc11001100_hook("o", a, "var-init");
      if (a.isCompiled) return o;
      [R, L, Q, z].forEach(e => e(a, i)), e.compilerExtensions.forEach(e => e(a, i)), a.__beforeBegin = cc11001100_hook("a.__beforeBegin", null, "assign"), [D, I, B].forEach(e => e(a, i)), a.isCompiled = cc11001100_hook("a.isCompiled", !0, "assign");
      let c = cc11001100_hook("c", null, "var-init");
      return "object" == typeof a.keywords && a.keywords.$pattern && (a.keywords = cc11001100_hook("a.keywords", Object.assign({}, a.keywords), "assign"), c = cc11001100_hook("c", a.keywords.$pattern, "assign"), delete a.keywords.$pattern), c = cc11001100_hook("c", c || /\w+/, "assign"), a.keywords && (a.keywords = cc11001100_hook("a.keywords", F(a.keywords, e.case_insensitive), "assign")), o.keywordPatternRe = cc11001100_hook("o.keywordPatternRe", n(c, !0), "assign"), i && (a.begin || (a.begin = cc11001100_hook("a.begin", /\B|\b/, "assign")), o.beginRe = cc11001100_hook("o.beginRe", n(o.begin), "assign"), a.end || a.endsWithParent || (a.end = cc11001100_hook("a.end", /\B|\b/, "assign")), a.end && (o.endRe = cc11001100_hook("o.endRe", n(o.end), "assign")), o.terminatorEnd = cc11001100_hook("o.terminatorEnd", p(o.end) || "", "assign"), a.endsWithParent && i.terminatorEnd && (o.terminatorEnd += cc11001100_hook("o.terminatorEnd", (a.end ? "|" : "") + i.terminatorEnd, "assign"))), a.illegal && (o.illegalRe = cc11001100_hook("o.illegalRe", n(a.illegal), "assign")), a.contains || (a.contains = cc11001100_hook("a.contains", [], "assign")), a.contains = cc11001100_hook("a.contains", [].concat(...a.contains.map(e => (e => (e.variants && !e.cachedVariants && (e.cachedVariants = cc11001100_hook("e.cachedVariants", e.variants.map(n => r(e, {
        variants: cc11001100_hook("variants", null, "object-key-init")
      }, n)), "assign")), e.cachedVariants ? e.cachedVariants : V(e) ? r(e, {
        starts: cc11001100_hook("starts", e.starts ? r(e.starts) : null, "object-key-init")
      }) : Object.isFrozen(e) ? r(e) : e))("self" === e ? a : e))), "assign"), a.contains.forEach(e => {
        s(e, o);
      }), a.starts && s(a.starts, i), o.matcher = cc11001100_hook("o.matcher", (e => {
        const n = cc11001100_hook("n", new t(), "var-init");
        return e.contains.forEach(e => n.addRule(e.begin, {
          rule: cc11001100_hook("rule", e, "object-key-init"),
          type: cc11001100_hook("type", "begin", "object-key-init")
        })), e.terminatorEnd && n.addRule(e.terminatorEnd, {
          type: cc11001100_hook("type", "end", "object-key-init")
        }), e.illegal && n.addRule(e.illegal, {
          type: cc11001100_hook("type", "illegal", "object-key-init")
        }), n;
      })(o), "assign"), o;
    }(e);
  }
  function V(e) {
    cc11001100_hook("e", e, "function-parameter");
    return !!e && (e.endsWithParent || V(e.starts));
  }
  class Y extends Error {
    constructor(e, n) {
      super(e), this.name = cc11001100_hook("this.name", "HTMLInjectionError", "assign"), this.html = cc11001100_hook("this.html", n, "assign");
    }
  }
  const J = cc11001100_hook("J", a, "var-init"),
    ee = cc11001100_hook("ee", r, "var-init"),
    ne = cc11001100_hook("ne", Symbol("nomatch"), "var-init");
  var se = cc11001100_hook("se", (e => {
    const n = cc11001100_hook("n", Object.create(null), "var-init"),
      a = cc11001100_hook("a", Object.create(null), "var-init"),
      r = cc11001100_hook("r", [], "var-init");
    let i = cc11001100_hook("i", !0, "var-init");
    const o = cc11001100_hook("o", "Could not find the language '{}', did you forget to load/include a language module?", "var-init"),
      c = cc11001100_hook("c", {
        disableAutodetect: cc11001100_hook("disableAutodetect", !0, "object-key-init"),
        name: cc11001100_hook("name", "Plain text", "object-key-init"),
        contains: cc11001100_hook("contains", [], "object-key-init")
      }, "var-init");
    let d = cc11001100_hook("d", {
      ignoreUnescapedHTML: cc11001100_hook("ignoreUnescapedHTML", !1, "object-key-init"),
      throwUnescapedHTML: cc11001100_hook("throwUnescapedHTML", !1, "object-key-init"),
      noHighlightRe: cc11001100_hook("noHighlightRe", /^(no-?highlight)$/i, "object-key-init"),
      languageDetectRe: cc11001100_hook("languageDetectRe", /\blang(?:uage)?-([\w-]+)\b/i, "object-key-init"),
      classPrefix: cc11001100_hook("classPrefix", "hljs-", "object-key-init"),
      cssSelector: cc11001100_hook("cssSelector", "pre code", "object-key-init"),
      languages: cc11001100_hook("languages", null, "object-key-init"),
      __emitter: cc11001100_hook("__emitter", l, "object-key-init")
    }, "var-init");
    function p(e) {
      cc11001100_hook("e", e, "function-parameter");
      return d.noHighlightRe.test(e);
    }
    function v(e, n, s) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      let t = cc11001100_hook("t", "", "var-init"),
        a = cc11001100_hook("a", "", "var-init");
      "object" == typeof n ? (t = cc11001100_hook("t", e, "assign"), s = cc11001100_hook("s", n.ignoreIllegals, "assign"), a = cc11001100_hook("a", n.language, "assign")) : (Z("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Z("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), a = cc11001100_hook("a", e, "assign"), t = cc11001100_hook("t", n, "assign")), void 0 === s && (s = cc11001100_hook("s", !0, "assign"));
      const r = cc11001100_hook("r", {
        code: cc11001100_hook("code", t, "object-key-init"),
        language: cc11001100_hook("language", a, "object-key-init")
      }, "var-init");
      O("before:highlight", r);
      const i = cc11001100_hook("i", r.result ? r.result : f(r.language, r.code, s), "var-init");
      return i.code = cc11001100_hook("i.code", r.code, "assign"), O("after:highlight", i), i;
    }
    function f(e, s, a, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      const c = cc11001100_hook("c", Object.create(null), "var-init");
      function l() {
        if (!k.keywords) return void M.addText(S);
        let e = cc11001100_hook("e", 0, "var-init");
        k.keywordPatternRe.lastIndex = cc11001100_hook("k.keywordPatternRe.lastIndex", 0, "assign");
        let n = cc11001100_hook("n", k.keywordPatternRe.exec(S), "var-init"),
          s = cc11001100_hook("s", "", "var-init");
        for (; n;) {
          s += cc11001100_hook("s", S.substring(e, n.index), "assign");
          const a = cc11001100_hook("a", w.case_insensitive ? n[0].toLowerCase() : n[0], "var-init"),
            r = cc11001100_hook("r", (t = cc11001100_hook("t", a, "assign"), k.keywords[t]), "var-init");
          if (r) {
            const [e, t] = cc11001100_hook("", r, "var-init");
            if (M.addText(s), s = cc11001100_hook("s", "", "assign"), c[a] = cc11001100_hook("c[a]", (c[a] || 0) + 1, "assign"), c[a] <= 7 && (C += cc11001100_hook("C", t, "assign")), e.startsWith("_")) s += cc11001100_hook("s", n[0], "assign");else {
              const s = cc11001100_hook("s", w.classNameAliases[e] || e, "var-init");
              M.addKeyword(n[0], s);
            }
          } else s += cc11001100_hook("s", n[0], "assign");
          e = cc11001100_hook("e", k.keywordPatternRe.lastIndex, "assign"), n = cc11001100_hook("n", k.keywordPatternRe.exec(S), "assign");
        }
        var t;
        s += cc11001100_hook("s", S.substr(e), "assign"), M.addText(s);
      }
      function p() {
        null != k.subLanguage ? (() => {
          if ("" === S) return;
          let e = cc11001100_hook("e", null, "var-init");
          if ("string" == typeof k.subLanguage) {
            if (!n[k.subLanguage]) return void M.addText(S);
            e = cc11001100_hook("e", f(k.subLanguage, S, !0, O[k.subLanguage]), "assign"), O[k.subLanguage] = cc11001100_hook("O[k.subLanguage]", e._top, "assign");
          } else e = cc11001100_hook("e", h(S, k.subLanguage.length ? k.subLanguage : null), "assign");
          k.relevance > 0 && (C += cc11001100_hook("C", e.relevance, "assign")), M.addSublanguage(e._emitter, e.language);
        })() : l(), S = cc11001100_hook("S", "", "assign");
      }
      function m(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        let s = cc11001100_hook("s", 1, "var-init");
        for (; void 0 !== n[s];) {
          if (!e._emit[s]) {
            s++;
            continue;
          }
          const t = cc11001100_hook("t", w.classNameAliases[e[s]] || e[s], "var-init"),
            a = cc11001100_hook("a", n[s], "var-init");
          t ? M.addKeyword(a, t) : (S = cc11001100_hook("S", a, "assign"), l(), S = cc11001100_hook("S", "", "assign")), s++;
        }
      }
      function u(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        return e.scope && "string" == typeof e.scope && M.openNode(w.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (M.addKeyword(S, w.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), S = cc11001100_hook("S", "", "assign")) : e.beginScope._multi && (m(e.beginScope, n), S = cc11001100_hook("S", "", "assign"))), k = cc11001100_hook("k", Object.create(e, {
          parent: {
            value: cc11001100_hook("value", k, "object-key-init")
          }
        }), "assign"), k;
      }
      function b(e, n, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        let a = cc11001100_hook("a", ((e, n) => {
          const s = cc11001100_hook("s", e && e.exec(n), "var-init");
          return s && 0 === s.index;
        })(e.endRe, s), "var-init");
        if (a) {
          if (e["on:end"]) {
            const s = cc11001100_hook("s", new t(e), "var-init");
            e["on:end"](n, s), s.isMatchIgnored && (a = cc11001100_hook("a", !1, "assign"));
          }
          if (a) {
            for (; e.endsParent && e.parent;) e = cc11001100_hook("e", e.parent, "assign");
            return e;
          }
        }
        if (e.endsWithParent) return b(e.parent, n, s);
      }
      function g(e) {
        cc11001100_hook("e", e, "function-parameter");
        return 0 === k.matcher.regexIndex ? (S += cc11001100_hook("S", e[0], "assign"), 1) : ($ = cc11001100_hook("$", !0, "assign"), 0);
      }
      function _(e) {
        cc11001100_hook("e", e, "function-parameter");
        const n = cc11001100_hook("n", e[0], "var-init"),
          t = cc11001100_hook("t", s.substr(e.index), "var-init"),
          a = cc11001100_hook("a", b(k, e, t), "var-init");
        if (!a) return ne;
        const r = cc11001100_hook("r", k, "var-init");
        k.endScope && k.endScope._wrap ? (p(), M.addKeyword(n, k.endScope._wrap)) : k.endScope && k.endScope._multi ? (p(), m(k.endScope, e)) : r.skip ? S += cc11001100_hook("S", n, "assign") : (r.returnEnd || r.excludeEnd || (S += cc11001100_hook("S", n, "assign")), p(), r.excludeEnd && (S = cc11001100_hook("S", n, "assign")));
        do {
          k.scope && M.closeNode(), k.skip || k.subLanguage || (C += cc11001100_hook("C", k.relevance, "assign")), k = cc11001100_hook("k", k.parent, "assign");
        } while (k !== a.parent);
        return a.starts && u(a.starts, e), r.returnEnd ? 0 : n.length;
      }
      let v = cc11001100_hook("v", {}, "var-init");
      function E(n, r) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        const o = cc11001100_hook("o", r && r[0], "var-init");
        if (S += cc11001100_hook("S", n, "assign"), null == o) return p(), 0;
        if ("begin" === v.type && "end" === r.type && v.index === r.index && "" === o) {
          if (S += cc11001100_hook("S", s.slice(r.index, r.index + 1), "assign"), !i) {
            const n = cc11001100_hook("n", Error(`0 width match regex (${e})`), "var-init");
            throw n.languageName = cc11001100_hook("n.languageName", e, "assign"), n.badRule = cc11001100_hook("n.badRule", v.rule, "assign"), n;
          }
          return 1;
        }
        if (v = cc11001100_hook("v", r, "assign"), "begin" === r.type) return (e => {
          const n = cc11001100_hook("n", e[0], "var-init"),
            s = cc11001100_hook("s", e.rule, "var-init"),
            a = cc11001100_hook("a", new t(s), "var-init"),
            r = cc11001100_hook("r", [s.__beforeBegin, s["on:begin"]], "var-init");
          for (const s of r) if (s && (s(e, a), a.isMatchIgnored)) return g(n);
          return s.skip ? S += cc11001100_hook("S", n, "assign") : (s.excludeBegin && (S += cc11001100_hook("S", n, "assign")), p(), s.returnBegin || s.excludeBegin || (S = cc11001100_hook("S", n, "assign"))), u(s, e), s.returnBegin ? 0 : n.length;
        })(r);
        if ("illegal" === r.type && !a) {
          const e = cc11001100_hook("e", Error('Illegal lexeme "' + o + '" for mode "' + (k.scope || "<unnamed>") + '"'), "var-init");
          throw e.mode = cc11001100_hook("e.mode", k, "assign"), e;
        }
        if ("end" === r.type) {
          const e = cc11001100_hook("e", _(r), "var-init");
          if (e !== ne) return e;
        }
        if ("illegal" === r.type && "" === o) return 1;
        if (T > 1e5 && T > 3 * r.index) throw Error("potential infinite loop, way more iterations than matches");
        return S += cc11001100_hook("S", o, "assign"), o.length;
      }
      const w = cc11001100_hook("w", N(e), "var-init");
      if (!w) throw K(o.replace("{}", e)), Error('Unknown language: "' + e + '"');
      const y = cc11001100_hook("y", X(w), "var-init");
      let x = cc11001100_hook("x", "", "var-init"),
        k = cc11001100_hook("k", r || y, "var-init");
      const O = cc11001100_hook("O", {}, "var-init"),
        M = cc11001100_hook("M", new d.__emitter(d), "var-init");
      (() => {
        const e = cc11001100_hook("e", [], "var-init");
        for (let n = cc11001100_hook("n", k, "var-init"); n !== w; n = cc11001100_hook("n", n.parent, "assign")) n.scope && e.unshift(n.scope);
        e.forEach(e => M.openNode(e));
      })();
      let S = cc11001100_hook("S", "", "var-init"),
        C = cc11001100_hook("C", 0, "var-init"),
        A = cc11001100_hook("A", 0, "var-init"),
        T = cc11001100_hook("T", 0, "var-init"),
        $ = cc11001100_hook("$", !1, "var-init");
      try {
        for (k.matcher.considerAll();;) {
          T++, $ ? $ = cc11001100_hook("$", !1, "assign") : k.matcher.considerAll(), k.matcher.lastIndex = cc11001100_hook("k.matcher.lastIndex", A, "assign");
          const e = cc11001100_hook("e", k.matcher.exec(s), "var-init");
          if (!e) break;
          const n = cc11001100_hook("n", E(s.substring(A, e.index), e), "var-init");
          A = cc11001100_hook("A", e.index + n, "assign");
        }
        return E(s.substr(A)), M.closeAllNodes(), M.finalize(), x = cc11001100_hook("x", M.toHTML(), "assign"), {
          language: cc11001100_hook("language", e, "object-key-init"),
          value: cc11001100_hook("value", x, "object-key-init"),
          relevance: cc11001100_hook("relevance", C, "object-key-init"),
          illegal: cc11001100_hook("illegal", !1, "object-key-init"),
          _emitter: cc11001100_hook("_emitter", M, "object-key-init"),
          _top: cc11001100_hook("_top", k, "object-key-init")
        };
      } catch (n) {
        if (n.message && n.message.includes("Illegal")) return {
          language: cc11001100_hook("language", e, "object-key-init"),
          value: cc11001100_hook("value", J(s), "object-key-init"),
          illegal: cc11001100_hook("illegal", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          _illegalBy: {
            message: cc11001100_hook("message", n.message, "object-key-init"),
            index: cc11001100_hook("index", A, "object-key-init"),
            context: cc11001100_hook("context", s.slice(A - 100, A + 100), "object-key-init"),
            mode: cc11001100_hook("mode", n.mode, "object-key-init"),
            resultSoFar: cc11001100_hook("resultSoFar", x, "object-key-init")
          },
          _emitter: cc11001100_hook("_emitter", M, "object-key-init")
        };
        if (i) return {
          language: cc11001100_hook("language", e, "object-key-init"),
          value: cc11001100_hook("value", J(s), "object-key-init"),
          illegal: cc11001100_hook("illegal", !1, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          errorRaised: cc11001100_hook("errorRaised", n, "object-key-init"),
          _emitter: cc11001100_hook("_emitter", M, "object-key-init"),
          _top: cc11001100_hook("_top", k, "object-key-init")
        };
        throw n;
      }
    }
    function h(e, s) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      s = cc11001100_hook("s", s || d.languages || Object.keys(n), "assign");
      const t = cc11001100_hook("t", (e => {
          const n = cc11001100_hook("n", {
            value: cc11001100_hook("value", J(e), "object-key-init"),
            illegal: cc11001100_hook("illegal", !1, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            _top: cc11001100_hook("_top", c, "object-key-init"),
            _emitter: cc11001100_hook("_emitter", new d.__emitter(d), "object-key-init")
          }, "var-init");
          return n._emitter.addText(e), n;
        })(e), "var-init"),
        a = cc11001100_hook("a", s.filter(N).filter(k).map(n => f(n, e, !1)), "var-init");
      a.unshift(t);
      const r = cc11001100_hook("r", a.sort((e, n) => {
          if (e.relevance !== n.relevance) return n.relevance - e.relevance;
          if (e.language && n.language) {
            if (N(e.language).supersetOf === n.language) return 1;
            if (N(n.language).supersetOf === e.language) return -1;
          }
          return 0;
        }), "var-init"),
        [i, o] = cc11001100_hook("", r, "var-init"),
        l = cc11001100_hook("l", i, "var-init");
      return l.secondBest = cc11001100_hook("l.secondBest", o, "assign"), l;
    }
    function E(e) {
      cc11001100_hook("e", e, "function-parameter");
      let n = cc11001100_hook("n", null, "var-init");
      const s = cc11001100_hook("s", (e => {
        let n = cc11001100_hook("n", e.className + " ", "var-init");
        n += cc11001100_hook("n", e.parentNode ? e.parentNode.className : "", "assign");
        const s = cc11001100_hook("s", d.languageDetectRe.exec(n), "var-init");
        if (s) {
          const n = cc11001100_hook("n", N(s[1]), "var-init");
          return n || (H(o.replace("{}", s[1])), H("Falling back to no-highlight mode for this block.", e)), n ? s[1] : "no-highlight";
        }
        return n.split(/\s+/).find(e => p(e) || N(e));
      })(e), "var-init");
      if (p(s)) return;
      if (O("before:highlightElement", {
        el: cc11001100_hook("el", e, "object-key-init"),
        language: cc11001100_hook("language", s, "object-key-init")
      }), e.children.length > 0 && (d.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), d.throwUnescapedHTML)) throw new Y("One of your code blocks includes unescaped HTML.", e.innerHTML);
      n = cc11001100_hook("n", e, "assign");
      const t = cc11001100_hook("t", n.textContent, "var-init"),
        r = cc11001100_hook("r", s ? v(t, {
          language: cc11001100_hook("language", s, "object-key-init"),
          ignoreIllegals: cc11001100_hook("ignoreIllegals", !0, "object-key-init")
        }) : h(t), "var-init");
      e.innerHTML = cc11001100_hook("e.innerHTML", r.value, "assign"), ((e, n, s) => {
        const t = cc11001100_hook("t", n && a[n] || s, "var-init");
        e.classList.add("hljs"), e.classList.add("language-" + t);
      })(e, s, r.language), e.result = cc11001100_hook("e.result", {
        language: cc11001100_hook("language", r.language, "object-key-init"),
        re: cc11001100_hook("re", r.relevance, "object-key-init"),
        relevance: cc11001100_hook("relevance", r.relevance, "object-key-init")
      }, "assign"), r.secondBest && (e.secondBest = cc11001100_hook("e.secondBest", {
        language: cc11001100_hook("language", r.secondBest.language, "object-key-init"),
        relevance: cc11001100_hook("relevance", r.secondBest.relevance, "object-key-init")
      }, "assign")), O("after:highlightElement", {
        el: cc11001100_hook("el", e, "object-key-init"),
        result: cc11001100_hook("result", r, "object-key-init"),
        text: cc11001100_hook("text", t, "object-key-init")
      });
    }
    let w = cc11001100_hook("w", !1, "var-init");
    function y() {
      "loading" !== document.readyState ? document.querySelectorAll(d.cssSelector).forEach(E) : w = cc11001100_hook("w", !0, "assign");
    }
    function N(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e = cc11001100_hook("e", (e || "").toLowerCase(), "assign"), n[e] || n[a[e]];
    }
    function x(e, {
      languageName: n
    }) {
      cc11001100_hook("e", e, "function-parameter");
      "string" == typeof e && (e = cc11001100_hook("e", [e], "assign")), e.forEach(e => {
        a[e.toLowerCase()] = cc11001100_hook("a[e.toLowerCase()]", n, "assign");
      });
    }
    function k(e) {
      cc11001100_hook("e", e, "function-parameter");
      const n = cc11001100_hook("n", N(e), "var-init");
      return n && !n.disableAutodetect;
    }
    function O(e, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      const s = cc11001100_hook("s", e, "var-init");
      r.forEach(e => {
        e[s] && e[s](n);
      });
    }
    "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", () => {
      w && y();
    }, !1), Object.assign(e, {
      highlight: cc11001100_hook("highlight", v, "object-key-init"),
      highlightAuto: cc11001100_hook("highlightAuto", h, "object-key-init"),
      highlightAll: cc11001100_hook("highlightAll", y, "object-key-init"),
      highlightElement: cc11001100_hook("highlightElement", E, "object-key-init"),
      highlightBlock: cc11001100_hook("highlightBlock", e => (Z("10.7.0", "highlightBlock will be removed entirely in v12.0"), Z("10.7.0", "Please use highlightElement now."), E(e)), "object-key-init"),
      configure: cc11001100_hook("configure", e => {
        d = cc11001100_hook("d", ee(d, e), "assign");
      }, "object-key-init"),
      initHighlighting: cc11001100_hook("initHighlighting", () => {
        y(), Z("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      }, "object-key-init"),
      initHighlightingOnLoad: cc11001100_hook("initHighlightingOnLoad", () => {
        y(), Z("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      }, "object-key-init"),
      registerLanguage: cc11001100_hook("registerLanguage", (s, t) => {
        let a = cc11001100_hook("a", null, "var-init");
        try {
          a = cc11001100_hook("a", t(e), "assign");
        } catch (e) {
          if (K("Language definition for '{}' could not be registered.".replace("{}", s)), !i) throw e;
          K(e), a = cc11001100_hook("a", c, "assign");
        }
        a.name || (a.name = cc11001100_hook("a.name", s, "assign")), n[s] = cc11001100_hook("n[s]", a, "assign"), a.rawDefinition = cc11001100_hook("a.rawDefinition", t.bind(null, e), "assign"), a.aliases && x(a.aliases, {
          languageName: cc11001100_hook("languageName", s, "object-key-init")
        });
      }, "object-key-init"),
      unregisterLanguage: cc11001100_hook("unregisterLanguage", e => {
        delete n[e];
        for (const n of Object.keys(a)) a[n] === e && delete a[n];
      }, "object-key-init"),
      listLanguages: cc11001100_hook("listLanguages", () => Object.keys(n), "object-key-init"),
      getLanguage: cc11001100_hook("getLanguage", N, "object-key-init"),
      registerAliases: cc11001100_hook("registerAliases", x, "object-key-init"),
      autoDetection: cc11001100_hook("autoDetection", k, "object-key-init"),
      inherit: cc11001100_hook("inherit", ee, "object-key-init"),
      addPlugin: cc11001100_hook("addPlugin", e => {
        (e => {
          e["before:highlightBlock"] && !e["before:highlightElement"] && (e["before:highlightElement"] = cc11001100_hook("e[\"before:highlightElement\"]", n => {
            e["before:highlightBlock"](Object.assign({
              block: cc11001100_hook("block", n.el, "object-key-init")
            }, n));
          }, "assign")), e["after:highlightBlock"] && !e["after:highlightElement"] && (e["after:highlightElement"] = cc11001100_hook("e[\"after:highlightElement\"]", n => {
            e["after:highlightBlock"](Object.assign({
              block: cc11001100_hook("block", n.el, "object-key-init")
            }, n));
          }, "assign"));
        })(e), r.push(e);
      }, "object-key-init")
    }), e.debugMode = cc11001100_hook("e.debugMode", () => {
      i = cc11001100_hook("i", !1, "assign");
    }, "assign"), e.safeMode = cc11001100_hook("e.safeMode", () => {
      i = cc11001100_hook("i", !0, "assign");
    }, "assign"), e.versionString = cc11001100_hook("e.versionString", "11.4.0", "assign"), e.regex = cc11001100_hook("e.regex", {
      concat: cc11001100_hook("concat", g, "object-key-init"),
      lookahead: cc11001100_hook("lookahead", m, "object-key-init"),
      either: cc11001100_hook("either", _, "object-key-init"),
      optional: cc11001100_hook("optional", b, "object-key-init"),
      anyNumberOfTimes: cc11001100_hook("anyNumberOfTimes", u, "object-key-init")
    }, "assign");
    for (const e in $) "object" == typeof $[e] && s($[e]);
    return Object.assign(e, $), e;
  })({}), "var-init");
  const te = cc11001100_hook("te", e => ({
      IMPORTANT: {
        scope: cc11001100_hook("scope", "meta", "object-key-init"),
        begin: cc11001100_hook("begin", "!important", "object-key-init")
      },
      BLOCK_COMMENT: cc11001100_hook("BLOCK_COMMENT", e.C_BLOCK_COMMENT_MODE, "object-key-init"),
      HEXCOLOR: {
        scope: cc11001100_hook("scope", "number", "object-key-init"),
        begin: cc11001100_hook("begin", /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/, "object-key-init")
      },
      FUNCTION_DISPATCH: {
        className: cc11001100_hook("className", "built_in", "object-key-init"),
        begin: cc11001100_hook("begin", /[\w-]+(?=\()/, "object-key-init")
      },
      ATTRIBUTE_SELECTOR_MODE: {
        scope: cc11001100_hook("scope", "selector-attr", "object-key-init"),
        begin: cc11001100_hook("begin", /\[/, "object-key-init"),
        end: cc11001100_hook("end", /\]/, "object-key-init"),
        illegal: cc11001100_hook("illegal", "$", "object-key-init"),
        contains: cc11001100_hook("contains", [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
      },
      CSS_NUMBER_MODE: {
        scope: cc11001100_hook("scope", "number", "object-key-init"),
        begin: cc11001100_hook("begin", e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      },
      CSS_VARIABLE: {
        className: cc11001100_hook("className", "attr", "object-key-init"),
        begin: cc11001100_hook("begin", /--[A-Za-z][A-Za-z0-9_-]*/, "object-key-init")
      }
    }), "var-init"),
    ae = cc11001100_hook("ae", ["a", "abbr", "address", "article", "aside", "audio", "b", "blockquote", "body", "button", "canvas", "caption", "cite", "code", "dd", "del", "details", "dfn", "div", "dl", "dt", "em", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "mark", "menu", "nav", "object", "ol", "p", "q", "quote", "samp", "section", "span", "strong", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "ul", "var", "video"], "var-init"),
    re = cc11001100_hook("re", ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"], "var-init"),
    ie = cc11001100_hook("ie", ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"], "var-init"),
    oe = cc11001100_hook("oe", ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"], "var-init"),
    ce = cc11001100_hook("ce", ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-height", "max-width", "min-height", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse(), "var-init"),
    le = cc11001100_hook("le", ie.concat(oe), "var-init");
  var de = cc11001100_hook("de", "\\.([0-9](_*[0-9])*)", "var-init"),
    pe = cc11001100_hook("pe", "[0-9a-fA-F](_*[0-9a-fA-F])*", "var-init"),
    me = cc11001100_hook("me", {
      className: cc11001100_hook("className", "number", "object-key-init"),
      variants: cc11001100_hook("variants", [{
        begin: cc11001100_hook("begin", `(\\b([0-9](_*[0-9])*)((${de})|\\.)?|(${de}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", `\\b([0-9](_*[0-9])*)((${de})[fFdD]?\\b|\\.([fFdD]\\b)?)`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", `(${de})[fFdD]?\\b`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b([0-9](_*[0-9])*)[fFdD]\\b", "object-key-init")
      }, {
        begin: cc11001100_hook("begin", `\\b0[xX]((${pe})\\.?|(${pe})?\\.(${pe}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b(0|[1-9](_*[0-9])*)[lL]?\\b", "object-key-init")
      }, {
        begin: cc11001100_hook("begin", `\\b0[xX](${pe})[lL]?\\b`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b0(_*[0-7])*[lL]?\\b", "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b0[bB][01](_*[01])*[lL]?\\b", "object-key-init")
      }], "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    }, "var-init");
  function ue(e, n, s) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    return -1 === s ? "" : e.replace(n, t => ue(e, n, s - 1));
  }
  const be = cc11001100_hook("be", "[A-Za-z$_][0-9A-Za-z$_]*", "var-init"),
    ge = cc11001100_hook("ge", ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], "var-init"),
    _e = cc11001100_hook("_e", ["true", "false", "null", "undefined", "NaN", "Infinity"], "var-init"),
    ve = cc11001100_hook("ve", ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], "var-init"),
    fe = cc11001100_hook("fe", ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], "var-init"),
    he = cc11001100_hook("he", ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], "var-init"),
    Ee = cc11001100_hook("Ee", ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], "var-init"),
    we = cc11001100_hook("we", [].concat(he, ve, fe), "var-init");
  function ye(e) {
    cc11001100_hook("e", e, "function-parameter");
    const n = cc11001100_hook("n", e.regex, "var-init"),
      s = cc11001100_hook("s", be, "var-init"),
      t = cc11001100_hook("t", {
        begin: cc11001100_hook("begin", /<[A-Za-z0-9\\._:-]+/, "object-key-init"),
        end: cc11001100_hook("end", /\/[A-Za-z0-9\\._:-]+>|\/>/, "object-key-init"),
        isTrulyOpeningTag: cc11001100_hook("isTrulyOpeningTag", (e, n) => {
          const s = cc11001100_hook("s", e[0].length + e.index, "var-init"),
            t = cc11001100_hook("t", e.input[s], "var-init");
          if ("<" === t || "," === t) return void n.ignoreMatch();
          let a;
          ">" === t && (((e, {
            after: n
          }) => {
            const s = cc11001100_hook("s", "</" + e[0].slice(1), "var-init");
            return -1 !== e.input.indexOf(s, n);
          })(e, {
            after: cc11001100_hook("after", s, "object-key-init")
          }) || n.ignoreMatch()), (a = cc11001100_hook("a", e.input.substr(s).match(/^\s+extends\s+/), "assign")) && 0 === a.index && n.ignoreMatch();
        }, "object-key-init")
      }, "var-init"),
      a = cc11001100_hook("a", {
        $pattern: cc11001100_hook("$pattern", be, "object-key-init"),
        keyword: cc11001100_hook("keyword", ge, "object-key-init"),
        literal: cc11001100_hook("literal", _e, "object-key-init"),
        built_in: cc11001100_hook("built_in", we, "object-key-init"),
        "variable.language": cc11001100_hook("variable.language", Ee, "object-key-init")
      }, "var-init"),
      r = cc11001100_hook("r", "\\.([0-9](_?[0-9])*)", "var-init"),
      i = cc11001100_hook("i", "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", "var-init"),
      o = cc11001100_hook("o", {
        className: cc11001100_hook("className", "number", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", `(\\b(${i})((${r})|\\.)?|(${r}))[eE][+-]?([0-9](_?[0-9])*)\\b`, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", `\\b(${i})\\b((${r})\\b|\\.)?|(${r})\\b`, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(0|[1-9](_?[0-9])*)n\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[bB][0-1](_?[0-1])*n?\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[oO][0-7](_?[0-7])*n?\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b0[0-7]+n?\\b", "object-key-init")
        }], "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, "var-init"),
      c = cc11001100_hook("c", {
        className: cc11001100_hook("className", "subst", "object-key-init"),
        begin: cc11001100_hook("begin", "\\$\\{", "object-key-init"),
        end: cc11001100_hook("end", "\\}", "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
        contains: cc11001100_hook("contains", [], "object-key-init")
      }, "var-init"),
      l = cc11001100_hook("l", {
        begin: cc11001100_hook("begin", "html`", "object-key-init"),
        end: cc11001100_hook("end", "", "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "`", "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !1, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, c], "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init")
        }
      }, "var-init"),
      d = cc11001100_hook("d", {
        begin: cc11001100_hook("begin", "css`", "object-key-init"),
        end: cc11001100_hook("end", "", "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "`", "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !1, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, c], "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "css", "object-key-init")
        }
      }, "var-init"),
      p = cc11001100_hook("p", {
        className: cc11001100_hook("className", "string", "object-key-init"),
        begin: cc11001100_hook("begin", "`", "object-key-init"),
        end: cc11001100_hook("end", "`", "object-key-init"),
        contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, c], "object-key-init")
      }, "var-init"),
      m = cc11001100_hook("m", {
        className: cc11001100_hook("className", "comment", "object-key-init"),
        variants: cc11001100_hook("variants", [e.COMMENT(/\/\*\*(?!\/)/, "\\*/", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "(?=@[A-Za-z]+)", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "doctag", "object-key-init"),
              begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
            }, {
              className: cc11001100_hook("className", "type", "object-key-init"),
              begin: cc11001100_hook("begin", "\\{", "object-key-init"),
              end: cc11001100_hook("end", "\\}", "object-key-init"),
              excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
              excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, {
              className: cc11001100_hook("className", "variable", "object-key-init"),
              begin: cc11001100_hook("begin", s + "(?=\\s*(-)|$)", "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", /(?=[^\n])\s/, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE], "object-key-init")
      }, "var-init"),
      u = cc11001100_hook("u", [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, l, d, p, o], "var-init");
    c.contains = cc11001100_hook("c.contains", u.concat({
      begin: cc11001100_hook("begin", /\{/, "object-key-init"),
      end: cc11001100_hook("end", /\}/, "object-key-init"),
      keywords: cc11001100_hook("keywords", a, "object-key-init"),
      contains: cc11001100_hook("contains", ["self"].concat(u), "object-key-init")
    }), "assign");
    const b = cc11001100_hook("b", [].concat(m, c.contains), "var-init"),
      g = cc11001100_hook("g", b.concat([{
        begin: cc11001100_hook("begin", /\(/, "object-key-init"),
        end: cc11001100_hook("end", /\)/, "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
        contains: cc11001100_hook("contains", ["self"].concat(b), "object-key-init")
      }]), "var-init"),
      _ = cc11001100_hook("_", {
        className: cc11001100_hook("className", "params", "object-key-init"),
        begin: cc11001100_hook("begin", /\(/, "object-key-init"),
        end: cc11001100_hook("end", /\)/, "object-key-init"),
        excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
        excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
        contains: cc11001100_hook("contains", g, "object-key-init")
      }, "var-init"),
      v = cc11001100_hook("v", {
        variants: cc11001100_hook("variants", [{
          match: cc11001100_hook("match", [/class/, /\s+/, s, /\s+/, /extends/, /\s+/, n.concat(s, "(", n.concat(/\./, s), ")*")], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init"),
            5: cc11001100_hook(5, "keyword", "object-key-init"),
            7: cc11001100_hook(7, "title.class.inherited", "object-key-init")
          }
        }, {
          match: cc11001100_hook("match", [/class/, /\s+/, s], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }], "object-key-init")
      }, "var-init"),
      f = cc11001100_hook("f", {
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        match: cc11001100_hook("match", n.either(/\bJSON/, /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/, /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/, /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/), "object-key-init"),
        className: cc11001100_hook("className", "title.class", "object-key-init"),
        keywords: {
          _: cc11001100_hook("_", [...ve, ...fe], "object-key-init")
        }
      }, "var-init"),
      h = cc11001100_hook("h", {
        variants: cc11001100_hook("variants", [{
          match: cc11001100_hook("match", [/function/, /\s+/, s, /(?=\s*\()/], "object-key-init")
        }, {
          match: cc11001100_hook("match", [/function/, /\s*(?=\()/], "object-key-init")
        }], "object-key-init"),
        className: {
          1: cc11001100_hook(1, "keyword", "object-key-init"),
          3: cc11001100_hook(3, "title.function", "object-key-init")
        },
        label: cc11001100_hook("label", "func.def", "object-key-init"),
        contains: cc11001100_hook("contains", [_], "object-key-init"),
        illegal: cc11001100_hook("illegal", /%/, "object-key-init")
      }, "var-init"),
      E = cc11001100_hook("E", {
        match: cc11001100_hook("match", n.concat(/\b/, (w = cc11001100_hook("w", [...he, "super"], "assign"), n.concat("(?!", w.join("|"), ")")), s, n.lookahead(/\(/)), "object-key-init"),
        className: cc11001100_hook("className", "title.function", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, "var-init");
    var w;
    const y = cc11001100_hook("y", {
        begin: cc11001100_hook("begin", n.concat(/\./, n.lookahead(n.concat(s, /(?![0-9A-Za-z$_(])/))), "object-key-init"),
        end: cc11001100_hook("end", s, "object-key-init"),
        excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", "prototype", "object-key-init"),
        className: cc11001100_hook("className", "property", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, "var-init"),
      N = cc11001100_hook("N", {
        match: cc11001100_hook("match", [/get|set/, /\s+/, s, /(?=\()/], "object-key-init"),
        className: {
          1: cc11001100_hook(1, "keyword", "object-key-init"),
          3: cc11001100_hook(3, "title.function", "object-key-init")
        },
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", /\(\)/, "object-key-init")
        }, _], "object-key-init")
      }, "var-init"),
      x = cc11001100_hook("x", "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", "var-init"),
      k = cc11001100_hook("k", {
        match: cc11001100_hook("match", [/const|var|let/, /\s+/, s, /\s*/, /=\s*/, /(async\s*)?/, n.lookahead(x)], "object-key-init"),
        keywords: cc11001100_hook("keywords", "async", "object-key-init"),
        className: {
          1: cc11001100_hook(1, "keyword", "object-key-init"),
          3: cc11001100_hook(3, "title.function", "object-key-init")
        },
        contains: cc11001100_hook("contains", [_], "object-key-init")
      }, "var-init");
    return {
      name: cc11001100_hook("name", "Javascript", "object-key-init"),
      aliases: cc11001100_hook("aliases", ["js", "jsx", "mjs", "cjs"], "object-key-init"),
      keywords: cc11001100_hook("keywords", a, "object-key-init"),
      exports: {
        PARAMS_CONTAINS: cc11001100_hook("PARAMS_CONTAINS", g, "object-key-init"),
        CLASS_REFERENCE: cc11001100_hook("CLASS_REFERENCE", f, "object-key-init")
      },
      illegal: cc11001100_hook("illegal", /#(?![$_A-z])/, "object-key-init"),
      contains: cc11001100_hook("contains", [e.SHEBANG({
        label: cc11001100_hook("label", "shebang", "object-key-init"),
        binary: cc11001100_hook("binary", "node", "object-key-init"),
        relevance: cc11001100_hook("relevance", 5, "object-key-init")
      }), {
        label: cc11001100_hook("label", "use_strict", "object-key-init"),
        className: cc11001100_hook("className", "meta", "object-key-init"),
        relevance: cc11001100_hook("relevance", 10, "object-key-init"),
        begin: cc11001100_hook("begin", /^\s*['"]use (strict|asm)['"]/, "object-key-init")
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, l, d, p, m, o, f, {
        className: cc11001100_hook("className", "attr", "object-key-init"),
        begin: cc11001100_hook("begin", s + n.lookahead(":"), "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, k, {
        begin: cc11001100_hook("begin", "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", "object-key-init"),
        keywords: cc11001100_hook("keywords", "return throw case", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        contains: cc11001100_hook("contains", [m, e.REGEXP_MODE, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", x, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", "\\s*=>", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "params", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, {
              className: cc11001100_hook("className", null, "object-key-init"),
              begin: cc11001100_hook("begin", /\(\s*\)/, "object-key-init"),
              skip: cc11001100_hook("skip", !0, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
              excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
              keywords: cc11001100_hook("keywords", a, "object-key-init"),
              contains: cc11001100_hook("contains", g, "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /,/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          match: cc11001100_hook("match", /\s+/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "<>", "object-key-init"),
            end: cc11001100_hook("end", "</>", "object-key-init")
          }, {
            match: cc11001100_hook("match", /<[A-Za-z0-9\\._:-]+\s*\/>/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", t.begin, "object-key-init"),
            "on:begin": cc11001100_hook("on:begin", t.isTrulyOpeningTag, "object-key-init"),
            end: cc11001100_hook("end", t.end, "object-key-init")
          }], "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", t.begin, "object-key-init"),
            end: cc11001100_hook("end", t.end, "object-key-init"),
            skip: cc11001100_hook("skip", !0, "object-key-init"),
            contains: cc11001100_hook("contains", ["self"], "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      }, h, {
        beginKeywords: cc11001100_hook("beginKeywords", "while if switch catch for", "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", "object-key-init"),
        returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
        label: cc11001100_hook("label", "func.def", "object-key-init"),
        contains: cc11001100_hook("contains", [_, e.inherit(e.TITLE_MODE, {
          begin: cc11001100_hook("begin", s, "object-key-init"),
          className: cc11001100_hook("className", "title.function", "object-key-init")
        })], "object-key-init")
      }, {
        match: cc11001100_hook("match", /\.\.\./, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, y, {
        match: cc11001100_hook("match", "\\$" + s, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        match: cc11001100_hook("match", [/\bconstructor(?=\s*\()/], "object-key-init"),
        className: {
          1: cc11001100_hook(1, "title.function", "object-key-init")
        },
        contains: cc11001100_hook("contains", [_], "object-key-init")
      }, E, {
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        match: cc11001100_hook("match", /\b[A-Z][A-Z_0-9]+\b/, "object-key-init"),
        className: cc11001100_hook("className", "variable.constant", "object-key-init")
      }, v, N, {
        match: cc11001100_hook("match", /\$[(.]/, "object-key-init")
      }], "object-key-init")
    };
  }
  const Ne = cc11001100_hook("Ne", e => g(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/), "var-init"),
    xe = cc11001100_hook("xe", ["Protocol", "Type"].map(Ne), "var-init"),
    ke = cc11001100_hook("ke", ["init", "self"].map(Ne), "var-init"),
    Oe = cc11001100_hook("Oe", ["Any", "Self"], "var-init"),
    Me = cc11001100_hook("Me", ["actor", "associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"], "var-init"),
    Se = cc11001100_hook("Se", ["false", "nil", "true"], "var-init"),
    Ce = cc11001100_hook("Ce", ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"], "var-init"),
    Ae = cc11001100_hook("Ae", ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"], "var-init"),
    Te = cc11001100_hook("Te", ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"], "var-init"),
    $e = cc11001100_hook("$e", _(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/), "var-init"),
    qe = cc11001100_hook("qe", _($e, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/), "var-init"),
    Re = cc11001100_hook("Re", g($e, qe, "*"), "var-init"),
    De = cc11001100_hook("De", _(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/), "var-init"),
    Ie = cc11001100_hook("Ie", _(De, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/), "var-init"),
    Le = cc11001100_hook("Le", g(De, Ie, "*"), "var-init"),
    Be = cc11001100_hook("Be", g(/[A-Z]/, Ie, "*"), "var-init"),
    ze = cc11001100_hook("ze", ["autoclosure", g(/convention\(/, _("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", g(/objc\(/, Le, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "testable", "UIApplicationMain", "unknown", "usableFromInline"], "var-init"),
    Ue = cc11001100_hook("Ue", ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"], "var-init");
  var Fe = cc11001100_hook("Fe", Object.freeze({
    __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
    grmr_bash: cc11001100_hook("grmr_bash", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", {}, "var-init"),
        t = cc11001100_hook("t", {
          begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", {
            begin: cc11001100_hook("begin", /:-/, "object-key-init"),
            contains: cc11001100_hook("contains", [s], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      Object.assign(s, {
        className: cc11001100_hook("className", "variable", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", n.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])"), "object-key-init")
        }, t], "object-key-init")
      });
      const a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\$\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          begin: cc11001100_hook("begin", /<<-?\s*(?=\w+)/, "object-key-init"),
          starts: {
            contains: cc11001100_hook("contains", [e.END_SAME_AS_BEGIN({
              begin: cc11001100_hook("begin", /(\w+)/, "object-key-init"),
              end: cc11001100_hook("end", /(\w+)/, "object-key-init"),
              className: cc11001100_hook("className", "string", "object-key-init")
            })], "object-key-init")
          }
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, s, a], "object-key-init")
        }, "var-init");
      a.contains.push(i);
      const o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", /\$\(\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)\)/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\d+#[0-9a-f]+/, "object-key-init"),
            className: cc11001100_hook("className", "number", "object-key-init")
          }, e.NUMBER_MODE, s], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", e.SHEBANG({
          binary: cc11001100_hook("binary", "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", /\w[\w\d_]*\s*\(\s*\)\s*\{/, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", /\w[\w\d_]*/, "object-key-init")
          })], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Bash", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["sh"], "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", /\b[a-z._-]+\b/, "object-key-init"),
          keyword: cc11001100_hook("keyword", ["if", "then", "else", "elif", "fi", "for", "while", "in", "do", "done", "case", "esac", "function"], "object-key-init"),
          literal: cc11001100_hook("literal", ["true", "false"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["break", "cd", "continue", "eval", "exec", "exit", "export", "getopts", "hash", "pwd", "readonly", "return", "shift", "test", "times", "trap", "umask", "unset", "alias", "bind", "builtin", "caller", "command", "declare", "echo", "enable", "help", "let", "local", "logout", "mapfile", "printf", "read", "readarray", "source", "type", "typeset", "ulimit", "unalias", "set", "shopt", "autoload", "bg", "bindkey", "bye", "cap", "chdir", "clone", "comparguments", "compcall", "compctl", "compdescribe", "compfiles", "compgroups", "compquote", "comptags", "comptry", "compvalues", "dirs", "disable", "disown", "echotc", "echoti", "emulate", "fc", "fg", "float", "functions", "getcap", "getln", "history", "integer", "jobs", "kill", "limit", "log", "noglob", "popd", "print", "pushd", "pushln", "rehash", "sched", "setcap", "setopt", "stat", "suspend", "ttyctl", "unfunction", "unhash", "unlimit", "unsetopt", "vared", "wait", "whence", "where", "which", "zcompile", "zformat", "zftp", "zle", "zmodload", "zparseopts", "zprof", "zpty", "zregexparse", "zsocket", "zstyle", "ztcp", "chcon", "chgrp", "chown", "chmod", "cp", "dd", "df", "dir", "dircolors", "ln", "ls", "mkdir", "mkfifo", "mknod", "mktemp", "mv", "realpath", "rm", "rmdir", "shred", "sync", "touch", "truncate", "vdir", "b2sum", "base32", "base64", "cat", "cksum", "comm", "csplit", "cut", "expand", "fmt", "fold", "head", "join", "md5sum", "nl", "numfmt", "od", "paste", "ptx", "pr", "sha1sum", "sha224sum", "sha256sum", "sha384sum", "sha512sum", "shuf", "sort", "split", "sum", "tac", "tail", "tr", "tsort", "unexpand", "uniq", "wc", "arch", "basename", "chroot", "date", "dirname", "du", "echo", "env", "expr", "factor", "groups", "hostid", "id", "link", "logname", "nice", "nohup", "nproc", "pathchk", "pinky", "printenv", "printf", "pwd", "readlink", "runcon", "seq", "sleep", "stat", "stdbuf", "stty", "tee", "test", "timeout", "tty", "uname", "unlink", "uptime", "users", "who", "whoami", "yes"], "object-key-init")
        },
        contains: cc11001100_hook("contains", [c, e.SHEBANG(), l, o, e.HASH_COMMENT_MODE, r, {
          match: cc11001100_hook("match", /(\/[a-z._-]+)+/, "object-key-init")
        }, i, {
          className: cc11001100_hook("className", "", "object-key-init"),
          begin: cc11001100_hook("begin", /\\"/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /'/, "object-key-init"),
          end: cc11001100_hook("end", /'/, "object-key-init")
        }, s], "object-key-init")
      };
    }, "object-key-init"),
    grmr_c: cc11001100_hook("grmr_c", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", e.COMMENT("//", "$", {
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        t = cc11001100_hook("t", "[a-zA-Z_]\\w*::", "var-init"),
        a = cc11001100_hook("a", "(decltype\\(auto\\)|" + n.optional(t) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b[a-z\\d_]*_t\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", /\batomic_[a-z]{3,6}\b/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '(u8?|U|L)?"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", ".", "object-key-init")
          }, e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)([^()\\ ]{0,16})"/, "object-key-init")
          })], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b(0b[01']+)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /#\s*[a-z]+\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, e.inherit(i, {
            className: cc11001100_hook("className", "string", "object-key-init")
          }), {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /<.*?>/, "object-key-init")
          }, s, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "title", "object-key-init"),
          begin: cc11001100_hook("begin", n.optional(t) + e.IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", n.optional(t) + e.IDENT_RE + "\\s*\\(", "var-init"),
        p = cc11001100_hook("p", {
          keyword: cc11001100_hook("keyword", ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"], "object-key-init"),
          type: cc11001100_hook("type", ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal128", "const", "static", "complex", "bool", "imaginary"], "object-key-init"),
          literal: cc11001100_hook("literal", "true false NULL", "object-key-init"),
          built_in: cc11001100_hook("built_in", "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr", "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", [c, r, s, e.C_BLOCK_COMMENT_MODE, o, i], "var-init"),
        u = cc11001100_hook("u", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /=/, "object-key-init"),
            end: cc11001100_hook("end", /;/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init")
          }, {
            beginKeywords: cc11001100_hook("beginKeywords", "new throw return else", "object-key-init"),
            end: cc11001100_hook("end", /;/, "object-key-init")
          }], "object-key-init"),
          keywords: cc11001100_hook("keywords", p, "object-key-init"),
          contains: cc11001100_hook("contains", m.concat([{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", p, "object-key-init"),
            contains: cc11001100_hook("contains", m.concat(["self"]), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }]), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          begin: cc11001100_hook("begin", "(" + a + "[\\*&\\s]+)+" + d, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", p, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\w\s\*&:<>.]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "decltype\\(auto\\)", "object-key-init"),
            keywords: cc11001100_hook("keywords", p, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", d, "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [e.inherit(l, {
              className: cc11001100_hook("className", "title.function", "object-key-init")
            })], "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            match: cc11001100_hook("match", /,/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", p, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [s, e.C_BLOCK_COMMENT_MODE, i, o, r, {
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              keywords: cc11001100_hook("keywords", p, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", ["self", s, e.C_BLOCK_COMMENT_MODE, i, o, r], "object-key-init")
            }], "object-key-init")
          }, r, s, e.C_BLOCK_COMMENT_MODE, c], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "C", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["h"], "object-key-init"),
        keywords: cc11001100_hook("keywords", p, "object-key-init"),
        disableAutodetect: cc11001100_hook("disableAutodetect", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        contains: cc11001100_hook("contains", [].concat(u, b, m, [c, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init"),
          keywords: cc11001100_hook("keywords", p, "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "enum class struct union", "object-key-init"),
          end: cc11001100_hook("end", /[{;:<>=]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "final class struct", "object-key-init")
          }, e.TITLE_MODE], "object-key-init")
        }]), "object-key-init"),
        exports: {
          preprocessor: cc11001100_hook("preprocessor", c, "object-key-init"),
          strings: cc11001100_hook("strings", i, "object-key-init"),
          keywords: cc11001100_hook("keywords", p, "object-key-init")
        }
      };
    }, "object-key-init"),
    grmr_cpp: cc11001100_hook("grmr_cpp", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", e.COMMENT("//", "$", {
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        t = cc11001100_hook("t", "[a-zA-Z_]\\w*::", "var-init"),
        a = cc11001100_hook("a", "(?!struct)(decltype\\(auto\\)|" + n.optional(t) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b[a-z\\d_]*_t\\b", "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '(u8?|U|L)?"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(u8?|U|L)?'(\\\\(x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4,8}|[0-7]{3}|\\S)|.)", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", ".", "object-key-init")
          }, e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /(?:u8?|U|L)?R"([^()\\ ]{0,16})\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)([^()\\ ]{0,16})"/, "object-key-init")
          })], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b(0b[01']+)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)((ll|LL|l|L)(u|U)?|(u|U)(ll|LL|l|L)?|f|F|b|B)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /#\s*[a-z]+\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, e.inherit(i, {
            className: cc11001100_hook("className", "string", "object-key-init")
          }), {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /<.*?>/, "object-key-init")
          }, s, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "title", "object-key-init"),
          begin: cc11001100_hook("begin", n.optional(t) + e.IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", n.optional(t) + e.IDENT_RE + "\\s*\\(", "var-init"),
        p = cc11001100_hook("p", {
          type: cc11001100_hook("type", ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"], "object-key-init"),
          keyword: cc11001100_hook("keyword", ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"], "object-key-init"),
          literal: cc11001100_hook("literal", ["NULL", "false", "nullopt", "nullptr", "true"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["_Pragma"], "object-key-init"),
          _type_hints: cc11001100_hook("_type_hints", ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"], "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", {
          className: cc11001100_hook("className", "function.dispatch", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: {
            _hint: cc11001100_hook("_hint", ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"], "object-key-init")
          },
          begin: cc11001100_hook("begin", n.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, n.lookahead(/(<[^<>]+>|)\s*\(/)), "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", [m, c, r, s, e.C_BLOCK_COMMENT_MODE, o, i], "var-init"),
        b = cc11001100_hook("b", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /=/, "object-key-init"),
            end: cc11001100_hook("end", /;/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init")
          }, {
            beginKeywords: cc11001100_hook("beginKeywords", "new throw return else", "object-key-init"),
            end: cc11001100_hook("end", /;/, "object-key-init")
          }], "object-key-init"),
          keywords: cc11001100_hook("keywords", p, "object-key-init"),
          contains: cc11001100_hook("contains", u.concat([{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", p, "object-key-init"),
            contains: cc11001100_hook("contains", u.concat(["self"]), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }]), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", "(" + a + "[\\*&\\s]+)+" + d, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", p, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\w\s\*&:<>.]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "decltype\\(auto\\)", "object-key-init"),
            keywords: cc11001100_hook("keywords", p, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", d, "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [l], "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /::/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /:/, "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [i, o], "object-key-init")
          }, {
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            match: cc11001100_hook("match", /,/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", p, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [s, e.C_BLOCK_COMMENT_MODE, i, o, r, {
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              keywords: cc11001100_hook("keywords", p, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", ["self", s, e.C_BLOCK_COMMENT_MODE, i, o, r], "object-key-init")
            }], "object-key-init")
          }, r, s, e.C_BLOCK_COMMENT_MODE, c], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "C++", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"], "object-key-init"),
        keywords: cc11001100_hook("keywords", p, "object-key-init"),
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        classNameAliases: {
          "function.dispatch": cc11001100_hook("function.dispatch", "built_in", "object-key-init")
        },
        contains: cc11001100_hook("contains", [].concat(b, g, m, u, [c, {
          begin: cc11001100_hook("begin", "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)", "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init"),
          keywords: cc11001100_hook("keywords", p, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", r], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init"),
          keywords: cc11001100_hook("keywords", p, "object-key-init")
        }, {
          match: cc11001100_hook("match", [/\b(?:enum(?:\s+(?:class|struct))?|class|struct|union)/, /\s+/, /\w+/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }]), "object-key-init")
      };
    }, "object-key-init"),
    grmr_csharp: cc11001100_hook("grmr_csharp", e => {
      const n = cc11001100_hook("n", {
          keyword: cc11001100_hook("keyword", ["abstract", "as", "base", "break", "case", "catch", "class", "const", "continue", "do", "else", "event", "explicit", "extern", "finally", "fixed", "for", "foreach", "goto", "if", "implicit", "in", "interface", "internal", "is", "lock", "namespace", "new", "operator", "out", "override", "params", "private", "protected", "public", "readonly", "record", "ref", "return", "sealed", "sizeof", "stackalloc", "static", "struct", "switch", "this", "throw", "try", "typeof", "unchecked", "unsafe", "using", "virtual", "void", "volatile", "while"].concat(["add", "alias", "and", "ascending", "async", "await", "by", "descending", "equals", "from", "get", "global", "group", "init", "into", "join", "let", "nameof", "not", "notnull", "on", "or", "orderby", "partial", "remove", "select", "set", "unmanaged", "value|0", "var", "when", "where", "with", "yield"]), "object-key-init"),
          built_in: cc11001100_hook("built_in", ["bool", "byte", "char", "decimal", "delegate", "double", "dynamic", "enum", "float", "int", "long", "nint", "nuint", "object", "sbyte", "short", "string", "ulong", "uint", "ushort"], "object-key-init"),
          literal: cc11001100_hook("literal", ["default", "false", "null", "true"], "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", e.inherit(e.TITLE_MODE, {
          begin: cc11001100_hook("begin", "[a-zA-Z](\\.?\\w)*", "object-key-init")
        }), "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b(0b[01']+)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", '@"', "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", e.inherit(a, {
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
        }), "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", e.inherit(i, {
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /\$"/, "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\{\{/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\}\}/, "object-key-init")
          }, e.BACKSLASH_ESCAPE, o], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /\$@"/, "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\{\{/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\}\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }, i], "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", e.inherit(l, {
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\{\{/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\}\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }, o], "object-key-init")
        }), "var-init");
      i.contains = cc11001100_hook("i.contains", [l, c, a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, t, e.C_BLOCK_COMMENT_MODE], "assign"), o.contains = cc11001100_hook("o.contains", [d, c, r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, t, e.inherit(e.C_BLOCK_COMMENT_MODE, {
        illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
      })], "assign");
      const p = cc11001100_hook("p", {
          variants: cc11001100_hook("variants", [l, c, a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", {
          begin: cc11001100_hook("begin", "<", "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "in out", "object-key-init")
          }, s], "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", "var-init"),
        b = cc11001100_hook("b", {
          begin: cc11001100_hook("begin", "@" + e.IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "C#", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["cs", "c#"], "object-key-init"),
        keywords: cc11001100_hook("keywords", n, "object-key-init"),
        illegal: cc11001100_hook("illegal", /::/, "object-key-init"),
        contains: cc11001100_hook("contains", [e.COMMENT("///", "$", {
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", "///", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "\x3c!--|--\x3e", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "</?", "object-key-init"),
              end: cc11001100_hook("end", ">", "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "#", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line region endregion pragma checksum", "object-key-init")
          }
        }, p, t, {
          beginKeywords: cc11001100_hook("beginKeywords", "class interface", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\s:,]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "where class", "object-key-init")
          }, s, m, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "namespace", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\s:]/, "object-key-init"),
          contains: cc11001100_hook("contains", [s, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "record", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\s:]/, "object-key-init"),
          contains: cc11001100_hook("contains", [s, m, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "^\\s*\\[(?=[\\w])", "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", "\\]", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "new return throw await else", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", "(" + u + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /\s*[{;=]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "public private protected static internal protected abstract async extern override unsafe virtual new sealed partial", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(", "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [e.TITLE_MODE, m], "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\(\)/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", n, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [p, t, e.C_BLOCK_COMMENT_MODE], "object-key-init")
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, b], "object-key-init")
      };
    }, "object-key-init"),
    grmr_css: cc11001100_hook("grmr_css", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", te(e), "var-init"),
        t = cc11001100_hook("t", [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "var-init");
      return {
        name: cc11001100_hook("name", "CSS", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", /[=|'\$]/, "object-key-init"),
        keywords: {
          keyframePosition: cc11001100_hook("keyframePosition", "from to", "object-key-init")
        },
        classNameAliases: {
          keyframePosition: cc11001100_hook("keyframePosition", "selector-tag", "object-key-init")
        },
        contains: cc11001100_hook("contains", [s.BLOCK_COMMENT, {
          begin: cc11001100_hook("begin", /-(webkit|moz|ms|o)-(?=[a-z])/, "object-key-init")
        }, s.CSS_NUMBER_MODE, {
          className: cc11001100_hook("className", "selector-id", "object-key-init"),
          begin: cc11001100_hook("begin", /#[A-Za-z0-9_-]+/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-class", "object-key-init"),
          begin: cc11001100_hook("begin", "\\.[a-zA-Z-][a-zA-Z0-9_-]*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, s.ATTRIBUTE_SELECTOR_MODE, {
          className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", ":(" + ie.join("|") + ")", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", ":(:)?(" + oe.join("|") + ")", "object-key-init")
          }], "object-key-init")
        }, s.CSS_VARIABLE, {
          className: cc11001100_hook("className", "attribute", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + ce.join("|") + ")\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /:/, "object-key-init"),
          end: cc11001100_hook("end", /[;}{]/, "object-key-init"),
          contains: cc11001100_hook("contains", [s.BLOCK_COMMENT, s.HEXCOLOR, s.IMPORTANT, s.CSS_NUMBER_MODE, ...t, {
            begin: cc11001100_hook("begin", /(url|data-uri)\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            keywords: {
              built_in: cc11001100_hook("built_in", "url data-uri", "object-key-init")
            },
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "string", "object-key-init"),
              begin: cc11001100_hook("begin", /[^)]/, "object-key-init"),
              endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
              excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
            }], "object-key-init")
          }, s.FUNCTION_DISPATCH], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", n.lookahead(/@/), "object-key-init"),
          end: cc11001100_hook("end", "[{;]", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          illegal: cc11001100_hook("illegal", /:/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            begin: cc11001100_hook("begin", /@-?\w[\w]*(-\w+)*/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\s/, "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            keywords: {
              $pattern: cc11001100_hook("$pattern", /[a-z-]+/, "object-key-init"),
              keyword: cc11001100_hook("keyword", "and or not only", "object-key-init"),
              attribute: cc11001100_hook("attribute", re.join(" "), "object-key-init")
            },
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /[a-z-]+(?=:)/, "object-key-init"),
              className: cc11001100_hook("className", "attribute", "object-key-init")
            }, ...t, s.CSS_NUMBER_MODE], "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-tag", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + ae.join("|") + ")\\b", "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_diff: cc11001100_hook("grmr_diff", e => {
      const n = cc11001100_hook("n", e.regex, "var-init");
      return {
        name: cc11001100_hook("name", "Diff", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["patch"], "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "meta", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init"),
          match: cc11001100_hook("match", n.either(/^@@ +-\d+,\d+ +\+\d+,\d+ +@@/, /^\*\*\* +\d+,\d+ +\*\*\*\*$/, /^--- +\d+,\d+ +----$/), "object-key-init")
        }, {
          className: cc11001100_hook("className", "comment", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", n.either(/Index: /, /^index/, /={3,}/, /^-{3}/, /^\*{3} /, /^\+{3}/, /^diff --git/), "object-key-init"),
            end: cc11001100_hook("end", /$/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /^\*{15}$/, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "addition", "object-key-init"),
          begin: cc11001100_hook("begin", /^\+/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "deletion", "object-key-init"),
          begin: cc11001100_hook("begin", /^-/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "addition", "object-key-init"),
          begin: cc11001100_hook("begin", /^!/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_go: cc11001100_hook("grmr_go", e => {
      const n = cc11001100_hook("n", {
        keyword: cc11001100_hook("keyword", ["break", "case", "chan", "const", "continue", "default", "defer", "else", "fallthrough", "for", "func", "go", "goto", "if", "import", "interface", "map", "package", "range", "return", "select", "struct", "switch", "type", "var"], "object-key-init"),
        type: cc11001100_hook("type", ["bool", "byte", "complex64", "complex128", "error", "float32", "float64", "int8", "int16", "int32", "int64", "string", "uint8", "uint16", "uint32", "uint64", "int", "uint", "uintptr", "rune"], "object-key-init"),
        literal: cc11001100_hook("literal", ["true", "false", "iota", "nil"], "object-key-init"),
        built_in: cc11001100_hook("built_in", ["append", "cap", "close", "complex", "copy", "imag", "len", "make", "new", "panic", "print", "println", "real", "recover", "delete"], "object-key-init")
      }, "var-init");
      return {
        name: cc11001100_hook("name", "Go", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["golang"], "object-key-init"),
        keywords: cc11001100_hook("keywords", n, "object-key-init"),
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
            begin: cc11001100_hook("begin", "`", "object-key-init"),
            end: cc11001100_hook("end", "`", "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", e.C_NUMBER_RE + "[i]", "object-key-init"),
            relevance: cc11001100_hook("relevance", 1, "object-key-init")
          }, e.C_NUMBER_MODE], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /:=/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "func", "object-key-init"),
          end: cc11001100_hook("end", "\\s*(\\{|$)", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.TITLE_MODE, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", n, "object-key-init"),
            illegal: cc11001100_hook("illegal", /["']/, "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_ini: cc11001100_hook("grmr_ini", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /([+-]+)?[\d]+_[\d_]+/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", e.NUMBER_RE, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", e.COMMENT(), "var-init");
      t.variants = cc11001100_hook("t.variants", [{
        begin: cc11001100_hook("begin", /;/, "object-key-init"),
        end: cc11001100_hook("end", /$/, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", /#/, "object-key-init"),
        end: cc11001100_hook("end", /$/, "object-key-init")
      }], "assign");
      const a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\$[\w\d"][\w\d_]*/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\$\{(.*?)\}/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "literal", "object-key-init"),
          begin: cc11001100_hook("begin", /\bon|off|true|false|yes|no\b/, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "'''", "object-key-init"),
            end: cc11001100_hook("end", "'''", "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"""', "object-key-init"),
            end: cc11001100_hook("end", '"""', "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", /\[/, "object-key-init"),
          end: cc11001100_hook("end", /\]/, "object-key-init"),
          contains: cc11001100_hook("contains", [t, r, a, i, s, "self"], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", n.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/), "var-init");
      return {
        name: cc11001100_hook("name", "TOML, also INI", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["toml"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\S/, "object-key-init"),
        contains: cc11001100_hook("contains", [t, {
          className: cc11001100_hook("className", "section", "object-key-init"),
          begin: cc11001100_hook("begin", /\[+/, "object-key-init"),
          end: cc11001100_hook("end", /\]+/, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", n.concat(c, "(\\s*\\.\\s*", c, ")*", n.lookahead(/\s*=\s*[^#\s]/)), "object-key-init"),
          className: cc11001100_hook("className", "attr", "object-key-init"),
          starts: {
            end: cc11001100_hook("end", /$/, "object-key-init"),
            contains: cc11001100_hook("contains", [t, o, r, a, i, s], "object-key-init")
          }
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_java: cc11001100_hook("grmr_java", e => {
      e.regex;
      const n = cc11001100_hook("n", "[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*", "var-init"),
        s = cc11001100_hook("s", n + ue("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2), "var-init"),
        t = cc11001100_hook("t", {
          keyword: cc11001100_hook("keyword", ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed"], "object-key-init"),
          literal: cc11001100_hook("literal", ["false", "true", "null"], "object-key-init"),
          type: cc11001100_hook("type", ["char", "boolean", "long", "float", "int", "byte", "short", "double"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["super", "this"], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@" + n, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            contains: cc11001100_hook("contains", ["self"], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "params", "object-key-init"),
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_BLOCK_COMMENT_MODE], "object-key-init"),
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Java", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["jsp"], "object-key-init"),
        keywords: cc11001100_hook("keywords", t, "object-key-init"),
        illegal: cc11001100_hook("illegal", /<\/|#/, "object-key-init"),
        contains: cc11001100_hook("contains", [e.COMMENT("/\\*\\*", "\\*/", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\w+@/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
          }], "object-key-init")
        }), {
          begin: cc11001100_hook("begin", /import java\.[a-z]+\./, "object-key-init"),
          keywords: cc11001100_hook("keywords", "import", "object-key-init"),
          relevance: cc11001100_hook("relevance", 2, "object-key-init")
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          begin: cc11001100_hook("begin", /"""/, "object-key-init"),
          end: cc11001100_hook("end", /"""/, "object-key-init"),
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
          match: cc11001100_hook("match", [/\b(?:class|interface|enum|extends|implements|new)/, /\s+/, n], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }, {
          match: cc11001100_hook("match", /non-sealed/, "object-key-init"),
          scope: cc11001100_hook("scope", "keyword", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", [n, /\s+/, n, /\s+/, /=/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "type", "object-key-init"),
            3: cc11001100_hook(3, "variable", "object-key-init"),
            5: cc11001100_hook(5, "operator", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", [/record/, /\s+/, n], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          },
          contains: cc11001100_hook("contains", [r, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "new throw return else", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", ["(?:" + s + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/], "object-key-init"),
          className: {
            2: cc11001100_hook(2, "title.function", "object-key-init")
          },
          keywords: cc11001100_hook("keywords", t, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", t, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [a, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, me, e.C_BLOCK_COMMENT_MODE], "object-key-init")
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, me, a], "object-key-init")
      };
    }, "object-key-init"),
    grmr_javascript: cc11001100_hook("grmr_javascript", ye, "object-key-init"),
    grmr_json: cc11001100_hook("grmr_json", e => ({
      name: cc11001100_hook("name", "JSON", "object-key-init"),
      contains: cc11001100_hook("contains", [{
        className: cc11001100_hook("className", "attr", "object-key-init"),
        begin: cc11001100_hook("begin", /"(\\.|[^\\"\r\n])*"(?=\s*:)/, "object-key-init"),
        relevance: cc11001100_hook("relevance", 1.01, "object-key-init")
      }, {
        match: cc11001100_hook("match", /[{}[\],:]/, "object-key-init"),
        className: cc11001100_hook("className", "punctuation", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, e.QUOTE_STRING_MODE, {
        beginKeywords: cc11001100_hook("beginKeywords", "true false null", "object-key-init")
      }, e.C_NUMBER_MODE, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init"),
      illegal: cc11001100_hook("illegal", "\\S", "object-key-init")
    }), "object-key-init"),
    grmr_kotlin: cc11001100_hook("grmr_kotlin", e => {
      const n = cc11001100_hook("n", {
          keyword: cc11001100_hook("keyword", "abstract as val var vararg get set class object open private protected public noinline crossinline dynamic final enum if else do while for when throw try catch finally import package is in fun override companion reified inline lateinit init interface annotation data sealed internal infix operator out by constructor super tailrec where const inner suspend typealias external expect actual", "object-key-init"),
          built_in: cc11001100_hook("built_in", "Byte Short Char Int Long Boolean Float Double Void Unit Nothing", "object-key-init"),
          literal: cc11001100_hook("literal", "true false null", "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE + "@", "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_NUMBER_MODE], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", "\\$" + e.UNDERSCORE_IDENT_RE, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '"""', "object-key-init"),
            end: cc11001100_hook("end", '"""(?=[^"])', "object-key-init"),
            contains: cc11001100_hook("contains", [a, t], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, a, t], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      t.contains.push(r);
      const i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@(?:file|property|field|get|set|receiver|param|setparam|delegate)\\s*:(?:\\s*" + e.UNDERSCORE_IDENT_RE + ")?", "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@" + e.UNDERSCORE_IDENT_RE, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.inherit(r, {
              className: cc11001100_hook("className", "string", "object-key-init")
            })], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", me, "var-init"),
        l = cc11001100_hook("l", e.COMMENT("/\\*", "\\*/", {
          contains: cc11001100_hook("contains", [e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }), "var-init"),
        d = cc11001100_hook("d", {
          variants: cc11001100_hook("variants", [{
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            contains: cc11001100_hook("contains", [], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", d, "var-init");
      return p.variants[1].contains = cc11001100_hook("p.variants[1].contains", [d], "assign"), d.variants[1].contains = cc11001100_hook("d.variants[1].contains", [p], "assign"), {
        name: cc11001100_hook("name", "Kotlin", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["kt", "kts"], "object-key-init"),
        keywords: cc11001100_hook("keywords", n, "object-key-init"),
        contains: cc11001100_hook("contains", [e.COMMENT("/\\*\\*", "\\*/", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
          }], "object-key-init")
        }), e.C_LINE_COMMENT_MODE, l, {
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          begin: cc11001100_hook("begin", /\b(break|continue|return|this)\b/, "object-key-init"),
          starts: {
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "symbol", "object-key-init"),
              begin: cc11001100_hook("begin", /@\w+/, "object-key-init")
            }], "object-key-init")
          }
        }, s, i, o, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "fun", "object-key-init"),
          end: cc11001100_hook("end", "[(]|$", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", 5, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE + "\\s*\\(", "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [e.UNDERSCORE_TITLE_MODE], "object-key-init")
          }, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", /</, "object-key-init"),
            end: cc11001100_hook("end", />/, "object-key-init"),
            keywords: cc11001100_hook("keywords", "reified", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", n, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /:/, "object-key-init"),
              end: cc11001100_hook("end", /[=,\/]/, "object-key-init"),
              endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
              contains: cc11001100_hook("contains", [d, e.C_LINE_COMMENT_MODE, l], "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, e.C_LINE_COMMENT_MODE, l, i, o, r, e.C_NUMBER_MODE], "object-key-init")
          }, l], "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "class interface trait", "object-key-init"),
          end: cc11001100_hook("end", /[:\{(]|$/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", "extends implements", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "public protected internal private constructor", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", /</, "object-key-init"),
            end: cc11001100_hook("end", />/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", /[,:]\s*/, "object-key-init"),
            end: cc11001100_hook("end", /[<\(,]|$/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init")
          }, i, o], "object-key-init")
        }, r, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "^#!/usr/bin/env", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          illegal: cc11001100_hook("illegal", "\n", "object-key-init")
        }, c], "object-key-init")
      };
    }, "object-key-init"),
    grmr_less: cc11001100_hook("grmr_less", e => {
      const n = cc11001100_hook("n", te(e), "var-init"),
        s = cc11001100_hook("s", le, "var-init"),
        t = cc11001100_hook("t", "([\\w-]+|@\\{[\\w-]+\\})", "var-init"),
        a = cc11001100_hook("a", [], "var-init"),
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", e => ({
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", "~?" + e + ".*?" + e, "object-key-init")
        }), "var-init"),
        o = cc11001100_hook("o", (e, n, s) => ({
          className: cc11001100_hook("className", e, "object-key-init"),
          begin: cc11001100_hook("begin", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", s, "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", {
          $pattern: cc11001100_hook("$pattern", /[a-z-]+/, "object-key-init"),
          keyword: cc11001100_hook("keyword", "and or not only", "object-key-init"),
          attribute: cc11001100_hook("attribute", re.join(" "), "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          begin: cc11001100_hook("begin", "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          contains: cc11001100_hook("contains", r, "object-key-init"),
          keywords: cc11001100_hook("keywords", c, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      r.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, i("'"), i('"'), n.CSS_NUMBER_MODE, {
        begin: cc11001100_hook("begin", "(url|data-uri)\\(", "object-key-init"),
        starts: {
          className: cc11001100_hook("className", "string", "object-key-init"),
          end: cc11001100_hook("end", "[\\)\\n]", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
        }
      }, n.HEXCOLOR, l, o("variable", "@@?[\\w-]+", 10), o("variable", "@\\{[\\w-]+\\}"), o("built_in", "~?`[^`]*?`"), {
        className: cc11001100_hook("className", "attribute", "object-key-init"),
        begin: cc11001100_hook("begin", "[\\w-]+\\s*:", "object-key-init"),
        end: cc11001100_hook("end", ":", "object-key-init"),
        returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
        excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
      }, n.IMPORTANT);
      const d = cc11001100_hook("d", r.concat({
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", a, "object-key-init")
        }), "var-init"),
        p = cc11001100_hook("p", {
          beginKeywords: cc11001100_hook("beginKeywords", "when", "object-key-init"),
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "and not", "object-key-init")
          }].concat(r), "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", {
          begin: cc11001100_hook("begin", t + "\\s*:", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /[;}]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /-(webkit|moz|ms|o)-/, "object-key-init")
          }, n.CSS_VARIABLE, {
            className: cc11001100_hook("className", "attribute", "object-key-init"),
            begin: cc11001100_hook("begin", "\\b(" + ce.join("|") + ")\\b", "object-key-init"),
            end: cc11001100_hook("end", /(?=:)/, "object-key-init"),
            starts: {
              endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
              illegal: cc11001100_hook("illegal", "[<=$]", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", r, "object-key-init")
            }
          }], "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          begin: cc11001100_hook("begin", "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b", "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "[;{}]", "object-key-init"),
            keywords: cc11001100_hook("keywords", c, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            contains: cc11001100_hook("contains", r, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }
        }, "var-init"),
        b = cc11001100_hook("b", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "@[\\w-]+\\s*:", "object-key-init"),
            relevance: cc11001100_hook("relevance", 15, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "@[\\w-]+", "object-key-init")
          }], "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "[;}]", "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            contains: cc11001100_hook("contains", d, "object-key-init")
          }
        }, "var-init"),
        g = cc11001100_hook("g", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "[\\.#:&\\[>]", "object-key-init"),
            end: cc11001100_hook("end", "[;{}]", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", t, "object-key-init"),
            end: cc11001100_hook("end", /\{/, "object-key-init")
          }], "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", "[<='$\"]", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, p, o("keyword", "all\\b"), o("variable", "@\\{[\\w-]+\\}"), {
            begin: cc11001100_hook("begin", "\\b(" + ae.join("|") + ")\\b", "object-key-init"),
            className: cc11001100_hook("className", "selector-tag", "object-key-init")
          }, n.CSS_NUMBER_MODE, o("selector-tag", t, 0), o("selector-id", "#" + t), o("selector-class", "\\." + t, 0), o("selector-tag", "&", 0), n.ATTRIBUTE_SELECTOR_MODE, {
            className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
            begin: cc11001100_hook("begin", ":(" + ie.join("|") + ")", "object-key-init")
          }, {
            className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
            begin: cc11001100_hook("begin", ":(:)?(" + oe.join("|") + ")", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", d, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "!important", "object-key-init")
          }, n.FUNCTION_DISPATCH], "object-key-init")
        }, "var-init"),
        _ = cc11001100_hook("_", {
          begin: cc11001100_hook("begin", `[\\w-]+:(:)?(${s.join("|")})`, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [g], "object-key-init")
        }, "var-init");
      return a.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, u, b, _, m, g), {
        name: cc11001100_hook("name", "Less", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", "[=>'/<($\"]", "object-key-init"),
        contains: cc11001100_hook("contains", a, "object-key-init")
      };
    }, "object-key-init"),
    grmr_lua: cc11001100_hook("grmr_lua", e => {
      const n = cc11001100_hook("n", "\\[=*\\[", "var-init"),
        s = cc11001100_hook("s", "\\]=*\\]", "var-init"),
        t = cc11001100_hook("t", {
          begin: cc11001100_hook("begin", n, "object-key-init"),
          end: cc11001100_hook("end", s, "object-key-init"),
          contains: cc11001100_hook("contains", ["self"], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", [e.COMMENT("--(?!\\[=*\\[)", "$"), e.COMMENT("--\\[=*\\[", s, {
          contains: cc11001100_hook("contains", [t], "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        })], "var-init");
      return {
        name: cc11001100_hook("name", "Lua", "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", e.UNDERSCORE_IDENT_RE, "object-key-init"),
          literal: cc11001100_hook("literal", "true false nil", "object-key-init"),
          keyword: cc11001100_hook("keyword", "and break do else elseif end for goto if in local not or repeat return then until while", "object-key-init"),
          built_in: cc11001100_hook("built_in", "_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len __gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall arg self coroutine resume yield status wrap create running debug getupvalue debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv io lines write close flush open output type read stderr stdin input stdout popen tmpfile math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower table setn insert getn foreachi maxn foreach concat sort remove", "object-key-init")
        },
        contains: cc11001100_hook("contains", a.concat([{
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "function", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*", "object-key-init")
          }), {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", "\\(", "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            contains: cc11001100_hook("contains", a, "object-key-init")
          }].concat(a), "object-key-init")
        }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", n, "object-key-init"),
          end: cc11001100_hook("end", s, "object-key-init"),
          contains: cc11001100_hook("contains", [t], "object-key-init"),
          relevance: cc11001100_hook("relevance", 5, "object-key-init")
        }]), "object-key-init")
      };
    }, "object-key-init"),
    grmr_makefile: cc11001100_hook("grmr_makefile", e => {
      const n = cc11001100_hook("n", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\$\\(" + e.UNDERSCORE_IDENT_RE + "\\)", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\$[@%<?\^\+\*]/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n], "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", /\$\([\w-]+\s/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: {
            built_in: cc11001100_hook("built_in", "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value", "object-key-init")
          },
          contains: cc11001100_hook("contains", [n], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          begin: cc11001100_hook("begin", "^" + e.UNDERSCORE_IDENT_RE + "\\s*(?=[:+?]?=)", "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "section", "object-key-init"),
          begin: cc11001100_hook("begin", /^[^\s]+:/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          contains: cc11001100_hook("contains", [n], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Makefile", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["mk", "mak", "make"], "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", /[\w-]+/, "object-key-init"),
          keyword: cc11001100_hook("keyword", "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath", "object-key-init")
        },
        contains: cc11001100_hook("contains", [e.HASH_COMMENT_MODE, n, s, t, a, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /^\.PHONY:/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", /[\.\w]+/, "object-key-init"),
            keyword: cc11001100_hook("keyword", ".PHONY", "object-key-init")
          }
        }, r], "object-key-init")
      };
    }, "object-key-init"),
    grmr_xml: cc11001100_hook("grmr_xml", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", n.concat(/[A-Z_]/, n.optional(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/), "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/, "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          begin: cc11001100_hook("begin", /\s/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            begin: cc11001100_hook("begin", /#?[a-z_][a-z1-9_-]+/, "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", e.inherit(a, {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init")
        }), "var-init"),
        i = cc11001100_hook("i", e.inherit(e.APOS_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init")
        }), "var-init"),
        o = cc11001100_hook("o", e.inherit(e.QUOTE_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", {
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", /</, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "attr", "object-key-init"),
            begin: cc11001100_hook("begin", /[A-Za-z0-9._:-]+/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /=\s*/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "string", "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
              variants: cc11001100_hook("variants", [{
                begin: cc11001100_hook("begin", /"/, "object-key-init"),
                end: cc11001100_hook("end", /"/, "object-key-init"),
                contains: cc11001100_hook("contains", [t], "object-key-init")
              }, {
                begin: cc11001100_hook("begin", /'/, "object-key-init"),
                end: cc11001100_hook("end", /'/, "object-key-init"),
                contains: cc11001100_hook("contains", [t], "object-key-init")
              }, {
                begin: cc11001100_hook("begin", /[^\s"'=<>`]+/, "object-key-init")
              }], "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "HTML, XML", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /<![a-z]/, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init"),
          contains: cc11001100_hook("contains", [a, o, i, r, {
            begin: cc11001100_hook("begin", /\[/, "object-key-init"),
            end: cc11001100_hook("end", /\]/, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "meta", "object-key-init"),
              begin: cc11001100_hook("begin", /<![a-z]/, "object-key-init"),
              end: cc11001100_hook("end", />/, "object-key-init"),
              contains: cc11001100_hook("contains", [a, r, o, i], "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, e.COMMENT(/<!--/, /-->/, {
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), {
          begin: cc11001100_hook("begin", /<!\[CDATA\[/, "object-key-init"),
          end: cc11001100_hook("end", /\]\]>/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }, t, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /<\?xml/, "object-key-init"),
          end: cc11001100_hook("end", /\?>/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", /<style(?=\s|>)/, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          keywords: {
            name: cc11001100_hook("name", "style", "object-key-init")
          },
          contains: cc11001100_hook("contains", [c], "object-key-init"),
          starts: {
            end: cc11001100_hook("end", /<\/style>/, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", ["css", "xml"], "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", /<script(?=\s|>)/, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          keywords: {
            name: cc11001100_hook("name", "script", "object-key-init")
          },
          contains: cc11001100_hook("contains", [c], "object-key-init"),
          starts: {
            end: cc11001100_hook("end", /<\/script>/, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", ["javascript", "handlebars", "xml"], "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", /<>|<\/>/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", n.concat(/</, n.lookahead(n.concat(s, n.either(/\/>/, />/, /\s/)))), "object-key-init"),
          end: cc11001100_hook("end", /\/?>/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "name", "object-key-init"),
            begin: cc11001100_hook("begin", s, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            starts: cc11001100_hook("starts", c, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", n.concat(/<\//, n.lookahead(n.concat(s, />/))), "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "name", "object-key-init"),
            begin: cc11001100_hook("begin", s, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", />/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_markdown: cc11001100_hook("grmr_markdown", e => {
      const n = cc11001100_hook("n", {
          begin: cc11001100_hook("begin", /<\/?[A-Za-z_]/, "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\[.+?\]\[.*?\]/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 2, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", e.regex.concat(/\[.+?\]\(/, /[A-Za-z][A-Za-z0-9+.-]*/, /:\/\/.*?\)/), "object-key-init"),
            relevance: cc11001100_hook("relevance", 2, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\[.+?\]\([./?&#].*?\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 1, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\[.*?\]\(.*?\)/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            match: cc11001100_hook("match", /\[(?=\])/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "string", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            begin: cc11001100_hook("begin", "\\[", "object-key-init"),
            end: cc11001100_hook("end", "\\]", "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "link", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            begin: cc11001100_hook("begin", "\\]\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "symbol", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            begin: cc11001100_hook("begin", "\\]\\[", "object-key-init"),
            end: cc11001100_hook("end", "\\]", "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "strong", "object-key-init"),
          contains: cc11001100_hook("contains", [], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /_{2}/, "object-key-init"),
            end: cc11001100_hook("end", /_{2}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\*{2}/, "object-key-init"),
            end: cc11001100_hook("end", /\*{2}/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "emphasis", "object-key-init"),
          contains: cc11001100_hook("contains", [], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\*(?!\*)/, "object-key-init"),
            end: cc11001100_hook("end", /\*/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /_(?!_)/, "object-key-init"),
            end: cc11001100_hook("end", /_/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init");
      t.contains.push(a), a.contains.push(t);
      let r = cc11001100_hook("r", [n, s], "var-init");
      return t.contains = cc11001100_hook("t.contains", t.contains.concat(r), "assign"), a.contains = cc11001100_hook("a.contains", a.contains.concat(r), "assign"), r = cc11001100_hook("r", r.concat(t, a), "assign"), {
        name: cc11001100_hook("name", "Markdown", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["md", "mkdown", "mkd"], "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "section", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "^#{1,6}", "object-key-init"),
            end: cc11001100_hook("end", "$", "object-key-init"),
            contains: cc11001100_hook("contains", r, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(?=^.+?\\n[=-]{2,}$)", "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", "^[=-]*$", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "^", "object-key-init"),
              end: cc11001100_hook("end", "\\n", "object-key-init"),
              contains: cc11001100_hook("contains", r, "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, n, {
          className: cc11001100_hook("className", "bullet", "object-key-init"),
          begin: cc11001100_hook("begin", "^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)", "object-key-init"),
          end: cc11001100_hook("end", "\\s+", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
        }, t, a, {
          className: cc11001100_hook("className", "quote", "object-key-init"),
          begin: cc11001100_hook("begin", "^>\\s+", "object-key-init"),
          contains: cc11001100_hook("contains", r, "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init")
        }, {
          className: cc11001100_hook("className", "code", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "(`{3,})[^`](.|\\n)*?\\1`*[ ]*", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(~{3,})[^~](.|\\n)*?\\1~*[ ]*", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "```", "object-key-init"),
            end: cc11001100_hook("end", "```+[ ]*$", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "~~~", "object-key-init"),
            end: cc11001100_hook("end", "~~~+[ ]*$", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "`.+?`", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(?=^( {4}|\\t))", "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", "^( {4}|\\t)", "object-key-init"),
              end: cc11001100_hook("end", "(\\n)$", "object-key-init")
            }], "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "^[-\\*]{3,}", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init")
        }, s, {
          begin: cc11001100_hook("begin", /^\[[^\n]+\]:/, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "symbol", "object-key-init"),
            begin: cc11001100_hook("begin", /\[/, "object-key-init"),
            end: cc11001100_hook("end", /\]/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "link", "object-key-init"),
            begin: cc11001100_hook("begin", /:\s*/, "object-key-init"),
            end: cc11001100_hook("end", /$/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_objectivec: cc11001100_hook("grmr_objectivec", e => {
      const n = cc11001100_hook("n", /[a-zA-Z@][a-zA-Z0-9_]*/, "var-init"),
        s = cc11001100_hook("s", {
          $pattern: cc11001100_hook("$pattern", n, "object-key-init"),
          keyword: cc11001100_hook("keyword", ["@interface", "@class", "@protocol", "@implementation"], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Objective-C", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["mm", "objc", "obj-c", "obj-c++", "objective-c++"], "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", n, "object-key-init"),
          keyword: cc11001100_hook("keyword", ["int", "float", "while", "char", "export", "sizeof", "typedef", "const", "struct", "for", "union", "unsigned", "long", "volatile", "static", "bool", "mutable", "if", "do", "return", "goto", "void", "enum", "else", "break", "extern", "asm", "case", "short", "default", "double", "register", "explicit", "signed", "typename", "this", "switch", "continue", "wchar_t", "inline", "readonly", "assign", "readwrite", "self", "@synchronized", "id", "typeof", "nonatomic", "super", "unichar", "IBOutlet", "IBAction", "strong", "weak", "copy", "in", "out", "inout", "bycopy", "byref", "oneway", "__strong", "__weak", "__block", "__autoreleasing", "@private", "@protected", "@public", "@try", "@property", "@end", "@throw", "@catch", "@finally", "@autoreleasepool", "@synthesize", "@dynamic", "@selector", "@optional", "@required", "@encode", "@package", "@import", "@defs", "@compatibility_alias", "__bridge", "__bridge_transfer", "__bridge_retained", "__bridge_retain", "__covariant", "__contravariant", "__kindof", "_Nonnull", "_Nullable", "_Null_unspecified", "__FUNCTION__", "__PRETTY_FUNCTION__", "__attribute__", "getter", "setter", "retain", "unsafe_unretained", "nonnull", "nullable", "null_unspecified", "null_resettable", "class", "instancetype", "NS_DESIGNATED_INITIALIZER", "NS_UNAVAILABLE", "NS_REQUIRES_SUPER", "NS_RETURNS_INNER_POINTER", "NS_INLINE", "NS_AVAILABLE", "NS_DEPRECATED", "NS_ENUM", "NS_OPTIONS", "NS_SWIFT_UNAVAILABLE", "NS_ASSUME_NONNULL_BEGIN", "NS_ASSUME_NONNULL_END", "NS_REFINED_FOR_SWIFT", "NS_SWIFT_NAME", "NS_SWIFT_NOTHROW", "NS_DURING", "NS_HANDLER", "NS_ENDHANDLER", "NS_VALUERETURN", "NS_VOIDRETURN"], "object-key-init"),
          literal: cc11001100_hook("literal", ["false", "true", "FALSE", "TRUE", "nil", "YES", "NO", "NULL"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["BOOL", "dispatch_once_t", "dispatch_queue_t", "dispatch_sync", "dispatch_async", "dispatch_once"], "object-key-init")
        },
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "built_in", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+", "object-key-init")
        }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, e.C_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '@"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /#\s*[a-z]+\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line pragma ifdef ifndef include", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, e.inherit(e.QUOTE_STRING_MODE, {
            className: cc11001100_hook("className", "string", "object-key-init")
          }), {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /<.*?>/, "object-key-init"),
            end: cc11001100_hook("end", /$/, "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init")
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          begin: cc11001100_hook("begin", "(" + s.keyword.join("|") + ")\\b", "object-key-init"),
          end: cc11001100_hook("end", /(\{|$)/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", s, "object-key-init"),
          contains: cc11001100_hook("contains", [e.UNDERSCORE_TITLE_MODE], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\." + e.UNDERSCORE_IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_perl: cc11001100_hook("grmr_perl", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", /[dualxmsipngr]{0,12}/, "var-init"),
        t = cc11001100_hook("t", {
          $pattern: cc11001100_hook("$pattern", /[\w.]+/, "object-key-init"),
          keyword: cc11001100_hook("keyword", "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0", "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", "[$@]\\{", "object-key-init"),
          end: cc11001100_hook("end", "\\}", "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          begin: cc11001100_hook("begin", /->\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\$\d/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /[$%@][^\s\w{]/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", [e.BACKSLASH_ESCAPE, a, i], "var-init"),
        c = cc11001100_hook("c", [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/], "var-init"),
        l = cc11001100_hook("l", (e, t, a = "\\1") => {
          const r = cc11001100_hook("r", "\\1" === a ? a : n.concat(a, t), "var-init");
          return n.concat(n.concat("(?:", e, ")"), t, /(?:\\.|[^\\\/])*?/, r, /(?:\\.|[^\\\/])*?/, a, s);
        }, "var-init"),
        d = cc11001100_hook("d", (e, t, a) => n.concat(n.concat("(?:", e, ")"), t, /(?:\\.|[^\\\/])*?/, a, s), "var-init"),
        p = cc11001100_hook("p", [i, e.HASH_COMMENT_MODE, e.COMMENT(/^=\w/, /=cut/, {
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init")
        }), r, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", o, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*\\[", "object-key-init"),
            end: cc11001100_hook("end", "\\]", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*\\{", "object-key-init"),
            end: cc11001100_hook("end", "\\}", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*\\|", "object-key-init"),
            end: cc11001100_hook("end", "\\|", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "q[qwxr]?\\s*<", "object-key-init"),
            end: cc11001100_hook("end", ">", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "qw\\s+q", "object-key-init"),
            end: cc11001100_hook("end", "q", "object-key-init"),
            relevance: cc11001100_hook("relevance", 5, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "`", "object-key-init"),
            end: cc11001100_hook("end", "`", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\{\w+\}/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "-?\\w+\\s*=>", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          begin: cc11001100_hook("begin", "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "(\\/\\/|" + e.RE_STARTERS_RE + "|\\b(split|return|print|reverse|grep)\\b)\\s*", "object-key-init"),
          keywords: cc11001100_hook("keywords", "split return print reverse grep", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.HASH_COMMENT_MODE, {
            className: cc11001100_hook("className", "regexp", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", l("s|tr|y", n.either(...c, {
                capture: cc11001100_hook("capture", !0, "object-key-init")
              })), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", l("s|tr|y", "\\(", "\\)"), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", l("s|tr|y", "\\[", "\\]"), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", l("s|tr|y", "\\{", "\\}"), "object-key-init")
            }], "object-key-init"),
            relevance: cc11001100_hook("relevance", 2, "object-key-init")
          }, {
            className: cc11001100_hook("className", "regexp", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", /(m|qr)\/\//, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", d("(?:m|qr)?", /\//, /\//), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", d("m|qr", n.either(...c, {
                capture: cc11001100_hook("capture", !0, "object-key-init")
              }), /\1/), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", d("m|qr", /\(/, /\)/), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", d("m|qr", /\[/, /\]/), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", d("m|qr", /\{/, /\}/), "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "sub", "object-key-init"),
          end: cc11001100_hook("end", "(\\s*\\(.*?\\))?[;{]", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 5, "object-key-init"),
          contains: cc11001100_hook("contains", [e.TITLE_MODE], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "-\\w\\b", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "^__DATA__$", "object-key-init"),
          end: cc11001100_hook("end", "^__END__$", "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "mojolicious", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "^@@.*", "object-key-init"),
            end: cc11001100_hook("end", "$", "object-key-init"),
            className: cc11001100_hook("className", "comment", "object-key-init")
          }], "object-key-init")
        }], "var-init");
      return a.contains = cc11001100_hook("a.contains", p, "assign"), r.contains = cc11001100_hook("r.contains", p, "assign"), {
        name: cc11001100_hook("name", "Perl", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["pl", "pm"], "object-key-init"),
        keywords: cc11001100_hook("keywords", t, "object-key-init"),
        contains: cc11001100_hook("contains", p, "object-key-init")
      };
    }, "object-key-init"),
    grmr_php: cc11001100_hook("grmr_php", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", "[a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$]))", "var-init"),
        t = cc11001100_hook("t", n.concat("([a-zA-Z_\\x7f-\\xff]", s), "var-init"),
        a = cc11001100_hook("a", n.concat("([A-Z]", s), "var-init"),
        r = cc11001100_hook("r", {
          scope: cc11001100_hook("scope", "variable", "object-key-init"),
          match: cc11001100_hook("match", "\\$+" + t, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          scope: cc11001100_hook("scope", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\$\w+/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\{\$/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", e.inherit(e.APOS_STRING_MODE, {
          illegal: cc11001100_hook("illegal", null, "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", "[ \t\n]", "var-init"),
        l = cc11001100_hook("l", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [e.inherit(e.QUOTE_STRING_MODE, {
            illegal: cc11001100_hook("illegal", null, "object-key-init"),
            contains: cc11001100_hook("contains", e.QUOTE_STRING_MODE.contains.concat(i), "object-key-init")
          }), o, e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /<<<[ \t]*(\w+)\n/, "object-key-init"),
            end: cc11001100_hook("end", /[ \t]*(\w+)\b/, "object-key-init"),
            contains: cc11001100_hook("contains", e.QUOTE_STRING_MODE.contains.concat(i), "object-key-init")
          })], "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", {
          scope: cc11001100_hook("scope", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b0[bB][01]+(?:_[01]+)*\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[oO][0-7]+(?:_[0-7]+)*\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", ["__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__", "die", "echo", "exit", "include", "include_once", "print", "require", "require_once", "array", "abstract", "and", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "new", "never", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"], "var-init"),
        m = cc11001100_hook("m", ["Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError", "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap", "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"], "var-init"),
        u = cc11001100_hook("u", {
          keyword: cc11001100_hook("keyword", p, "object-key-init"),
          literal: cc11001100_hook("literal", (e => {
            const n = cc11001100_hook("n", [], "var-init");
            return ["false", "null", "true"].forEach(e => {
              n.push(e), e.toLowerCase() === e ? n.push(e.toUpperCase()) : n.push(e.toLowerCase());
            }), n;
          })(), "object-key-init"),
          built_in: cc11001100_hook("built_in", m, "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", e => e.map(e => e.replace(/\|\d+$/, "")), "var-init"),
        g = cc11001100_hook("g", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/new/, n.concat(c, "+"), n.concat("(?!", b(m).join("\\b|"), "\\b)"), n.concat(/\\?/, t), n.concat(c, "*", /\(/)], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "keyword", "object-key-init"),
              4: cc11001100_hook(4, "title.class", "object-key-init")
            }
          }], "object-key-init")
        }, "var-init"),
        _ = cc11001100_hook("_", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", [/\b/, n.concat("(?!fn\\b|function\\b|", b(p).join("\\b|"), "|", b(m).join("\\b|"), "\\b)"), t, n.concat(c, "*"), n.lookahead(/(?=\()/)], "object-key-init"),
          scope: {
            3: cc11001100_hook(3, "title.function.invoke", "object-key-init")
          }
        }, "var-init"),
        v = cc11001100_hook("v", n.concat(t, "\\b(?!\\()"), "var-init"),
        f = cc11001100_hook("f", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [n.concat(/::/, n.lookahead(/(?!class\b)/)), v], "object-key-init"),
            scope: {
              2: cc11001100_hook(2, "variable.constant", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [/::/, /class/], "object-key-init"),
            scope: {
              2: cc11001100_hook(2, "variable.language", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [a, n.concat("::", n.lookahead(/(?!class\b)/))], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "title.class", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [a, /::/, /class/], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "title.class", "object-key-init"),
              3: cc11001100_hook(3, "variable.language", "object-key-init")
            }
          }], "object-key-init")
        }, "var-init");
      return {
        case_insensitive: cc11001100_hook("case_insensitive", !1, "object-key-init"),
        keywords: cc11001100_hook("keywords", u, "object-key-init"),
        contains: cc11001100_hook("contains", [e.HASH_COMMENT_MODE, e.COMMENT("//", "$"), e.COMMENT("/\\*", "\\*/", {
          contains: cc11001100_hook("contains", [{
            scope: cc11001100_hook("scope", "doctag", "object-key-init"),
            match: cc11001100_hook("match", "@[A-Za-z]+", "object-key-init")
          }], "object-key-init")
        }), {
          match: cc11001100_hook("match", /__halt_compiler\(\);/, "object-key-init"),
          keywords: cc11001100_hook("keywords", "__halt_compiler", "object-key-init"),
          starts: {
            scope: cc11001100_hook("scope", "comment", "object-key-init"),
            end: cc11001100_hook("end", e.MATCH_NOTHING_RE, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              match: cc11001100_hook("match", /\?>/, "object-key-init"),
              scope: cc11001100_hook("scope", "meta", "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
            }], "object-key-init")
          }
        }, {
          scope: cc11001100_hook("scope", "meta", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /<\?php/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /<\?[=]?/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\?>/, "object-key-init")
          }], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "variable.language", "object-key-init"),
          match: cc11001100_hook("match", /\$this\b/, "object-key-init")
        }, r, _, f, {
          match: cc11001100_hook("match", [/const/, /\s/, t, /\s*=/], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "variable.constant", "object-key-init")
          }
        }, g, {
          scope: cc11001100_hook("scope", "function", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "fn function", "object-key-init"),
          end: cc11001100_hook("end", /[;{]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", "[$%\\[]", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "use", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE, {
            begin: cc11001100_hook("begin", "=>", "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
          }, {
            scope: cc11001100_hook("scope", "params", "object-key-init"),
            begin: cc11001100_hook("begin", "\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", u, "object-key-init"),
            contains: cc11001100_hook("contains", ["self", r, f, e.C_BLOCK_COMMENT_MODE, l, d], "object-key-init")
          }], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "class", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            beginKeywords: cc11001100_hook("beginKeywords", "enum", "object-key-init"),
            illegal: cc11001100_hook("illegal", /[($"]/, "object-key-init")
          }, {
            beginKeywords: cc11001100_hook("beginKeywords", "class interface trait", "object-key-init"),
            illegal: cc11001100_hook("illegal", /[:($"]/, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "extends implements", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "namespace", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", ";", "object-key-init"),
          illegal: cc11001100_hook("illegal", /[.']/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.UNDERSCORE_TITLE_MODE, {
            scope: cc11001100_hook("scope", "title.class", "object-key-init")
          })], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "use", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", ";", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            match: cc11001100_hook("match", /\b(as|const|function)\b/, "object-key-init"),
            scope: cc11001100_hook("scope", "keyword", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE], "object-key-init")
        }, l, d], "object-key-init")
      };
    }, "object-key-init"),
    grmr_php_template: cc11001100_hook("grmr_php_template", e => ({
      name: cc11001100_hook("name", "PHP template", "object-key-init"),
      subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init"),
      contains: cc11001100_hook("contains", [{
        begin: cc11001100_hook("begin", /<\?(php|=)?/, "object-key-init"),
        end: cc11001100_hook("end", /\?>/, "object-key-init"),
        subLanguage: cc11001100_hook("subLanguage", "php", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", "/\\*", "object-key-init"),
          end: cc11001100_hook("end", "\\*/", "object-key-init"),
          skip: cc11001100_hook("skip", !0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", 'b"', "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          skip: cc11001100_hook("skip", !0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "b'", "object-key-init"),
          end: cc11001100_hook("end", "'", "object-key-init"),
          skip: cc11001100_hook("skip", !0, "object-key-init")
        }, e.inherit(e.APOS_STRING_MODE, {
          illegal: cc11001100_hook("illegal", null, "object-key-init"),
          className: cc11001100_hook("className", null, "object-key-init"),
          contains: cc11001100_hook("contains", null, "object-key-init"),
          skip: cc11001100_hook("skip", !0, "object-key-init")
        }), e.inherit(e.QUOTE_STRING_MODE, {
          illegal: cc11001100_hook("illegal", null, "object-key-init"),
          className: cc11001100_hook("className", null, "object-key-init"),
          contains: cc11001100_hook("contains", null, "object-key-init"),
          skip: cc11001100_hook("skip", !0, "object-key-init")
        })], "object-key-init")
      }], "object-key-init")
    }), "object-key-init"),
    grmr_plaintext: cc11001100_hook("grmr_plaintext", e => ({
      name: cc11001100_hook("name", "Plain text", "object-key-init"),
      aliases: cc11001100_hook("aliases", ["text", "txt"], "object-key-init"),
      disableAutodetect: cc11001100_hook("disableAutodetect", !0, "object-key-init")
    }), "object-key-init"),
    grmr_python: cc11001100_hook("grmr_python", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", /[\p{XID_Start}_]\p{XID_Continue}*/u, "var-init"),
        t = cc11001100_hook("t", ["and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"], "var-init"),
        a = cc11001100_hook("a", {
          $pattern: cc11001100_hook("$pattern", /[A-Za-z]\w+|__\w+__/, "object-key-init"),
          keyword: cc11001100_hook("keyword", t, "object-key-init"),
          built_in: cc11001100_hook("built_in", ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"], "object-key-init"),
          literal: cc11001100_hook("literal", ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"], "object-key-init"),
          type: cc11001100_hook("type", ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /^(>>>|\.\.\.) /, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", a, "object-key-init"),
          illegal: cc11001100_hook("illegal", /#/, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", /\{\{/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/, "object-key-init"),
            end: cc11001100_hook("end", /'''/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, r], "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/, "object-key-init"),
            end: cc11001100_hook("end", /"""/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, r], "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])'''/, "object-key-init"),
            end: cc11001100_hook("end", /'''/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, r, o, i], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])"""/, "object-key-init"),
            end: cc11001100_hook("end", /"""/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, r, o, i], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([uU]|[rR])'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([uU]|[rR])"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([bB]|[bB][rR]|[rR][bB])'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([bB]|[bB][rR]|[rR][bB])"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, o, i], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, o, i], "object-key-init")
          }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", "[0-9](_?[0-9])*", "var-init"),
        d = cc11001100_hook("d", `(\\b(${l}))?\\.(${l})|\\b(${l})\\.`, "var-init"),
        p = cc11001100_hook("p", "\\b|" + t.join("|"), "var-init"),
        m = cc11001100_hook("m", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", `(\\b(${l})|(${d}))[eE][+-]?(${l})[jJ]?(?=${p})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `(${d})[jJ]?`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${p})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b0[bB](_?[01])+[lL]?(?=${p})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b0[oO](_?[0-7])+[lL]?(?=${p})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${p})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b(${l})[jJ](?=${p})`, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          className: cc11001100_hook("className", "comment", "object-key-init"),
          begin: cc11001100_hook("begin", n.lookahead(/# type:/), "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: cc11001100_hook("keywords", a, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /# type:/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /#/, "object-key-init"),
            end: cc11001100_hook("end", /\b\B/, "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          className: cc11001100_hook("className", "params", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            className: cc11001100_hook("className", "", "object-key-init"),
            begin: cc11001100_hook("begin", /\(\s*\)/, "object-key-init"),
            skip: cc11001100_hook("skip", !0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            keywords: cc11001100_hook("keywords", a, "object-key-init"),
            contains: cc11001100_hook("contains", ["self", r, m, c, e.HASH_COMMENT_MODE], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      return i.contains = cc11001100_hook("i.contains", [c, m, r], "assign"), {
        name: cc11001100_hook("name", "Python", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["py", "gyp", "ipython"], "object-key-init"),
        unicodeRegex: cc11001100_hook("unicodeRegex", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
        illegal: cc11001100_hook("illegal", /(<\/|->|\?)|=>/, "object-key-init"),
        contains: cc11001100_hook("contains", [r, m, {
          begin: cc11001100_hook("begin", /\bself\b/, "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "if", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, c, u, e.HASH_COMMENT_MODE, {
          match: cc11001100_hook("match", [/\bdef/, /\s+/, s], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [b], "object-key-init")
        }, {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/\bclass/, /\s+/, s, /\s*/, /\(\s*/, s, /\s*\)/], "object-key-init")
          }, {
            match: cc11001100_hook("match", [/\bclass/, /\s+/, s], "object-key-init")
          }], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init"),
            6: cc11001100_hook(6, "title.class.inherited", "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /^[\t ]*@/, "object-key-init"),
          end: cc11001100_hook("end", /(?=#)|$/, "object-key-init"),
          contains: cc11001100_hook("contains", [m, b, c], "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_python_repl: cc11001100_hook("grmr_python_repl", e => ({
      aliases: cc11001100_hook("aliases", ["pycon"], "object-key-init"),
      contains: cc11001100_hook("contains", [{
        className: cc11001100_hook("className", "meta", "object-key-init"),
        starts: {
          end: cc11001100_hook("end", / |$/, "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "$", "object-key-init"),
            subLanguage: cc11001100_hook("subLanguage", "python", "object-key-init")
          }
        },
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", /^>>>(?=[ ]|$)/, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /^\.\.\.(?=[ ]|$)/, "object-key-init")
        }], "object-key-init")
      }], "object-key-init")
    }), "object-key-init"),
    grmr_r: cc11001100_hook("grmr_r", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, "var-init"),
        t = cc11001100_hook("t", n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/), "var-init"),
        a = cc11001100_hook("a", /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, "var-init"),
        r = cc11001100_hook("r", n.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/), "var-init");
      return {
        name: cc11001100_hook("name", "R", "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", s, "object-key-init"),
          keyword: cc11001100_hook("keyword", "function if in break next repeat else for while", "object-key-init"),
          literal: cc11001100_hook("literal", "NULL NA TRUE FALSE Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 NA_complex_|10", "object-key-init"),
          built_in: cc11001100_hook("built_in", "LETTERS letters month.abb month.name pi T F abs acos acosh all any anyNA Arg as.call as.character as.complex as.double as.environment as.integer as.logical as.null.default as.numeric as.raw asin asinh atan atanh attr attributes baseenv browser c call ceiling class Conj cos cosh cospi cummax cummin cumprod cumsum digamma dim dimnames emptyenv exp expression floor forceAndCall gamma gc.time globalenv Im interactive invisible is.array is.atomic is.call is.character is.complex is.double is.environment is.expression is.finite is.function is.infinite is.integer is.language is.list is.logical is.matrix is.na is.name is.nan is.null is.numeric is.object is.pairlist is.raw is.recursive is.single is.symbol lazyLoadDBfetch length lgamma list log max min missing Mod names nargs nzchar oldClass on.exit pos.to.env proc.time prod quote range Re rep retracemem return round seq_along seq_len seq.int sign signif sin sinh sinpi sqrt standardGeneric substitute sum switch tan tanh tanpi tracemem trigamma trunc unclass untracemem UseMethod xtfrm", "object-key-init")
        },
        contains: cc11001100_hook("contains", [e.COMMENT(/#'/, /$/, {
          contains: cc11001100_hook("contains", [{
            scope: cc11001100_hook("scope", "doctag", "object-key-init"),
            match: cc11001100_hook("match", /@examples/, "object-key-init"),
            starts: {
              end: cc11001100_hook("end", n.lookahead(n.either(/\n^#'\s*(?=@[a-zA-Z]+)/, /\n^(?!#')/)), "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
            }
          }, {
            scope: cc11001100_hook("scope", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", "@param", "object-key-init"),
            end: cc11001100_hook("end", /$/, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              scope: cc11001100_hook("scope", "variable", "object-key-init"),
              variants: cc11001100_hook("variants", [{
                match: cc11001100_hook("match", s, "object-key-init")
              }, {
                match: cc11001100_hook("match", /`(?:\\.|[^`\\])+`/, "object-key-init")
              }], "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
            }], "object-key-init")
          }, {
            scope: cc11001100_hook("scope", "doctag", "object-key-init"),
            match: cc11001100_hook("match", /@[a-zA-Z]+/, "object-key-init")
          }, {
            scope: cc11001100_hook("scope", "keyword", "object-key-init"),
            match: cc11001100_hook("match", /\\[a-zA-Z]+/, "object-key-init")
          }], "object-key-init")
        }), e.HASH_COMMENT_MODE, {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init"),
          variants: cc11001100_hook("variants", [e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]"(-*)\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)(-*)"/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]"(-*)\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}(-*)"/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]"(-*)\[/, "object-key-init"),
            end: cc11001100_hook("end", /\](-*)"/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]'(-*)\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)(-*)'/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]'(-*)\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}(-*)'/, "object-key-init")
          }), e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /[rR]'(-*)\[/, "object-key-init"),
            end: cc11001100_hook("end", /\](-*)'/, "object-key-init")
          }), {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            scope: {
              1: cc11001100_hook(1, "operator", "object-key-init"),
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [a, t], "object-key-init")
          }, {
            scope: {
              1: cc11001100_hook(1, "operator", "object-key-init"),
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [/%[^%]*%/, t], "object-key-init")
          }, {
            scope: {
              1: cc11001100_hook(1, "punctuation", "object-key-init"),
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [r, t], "object-key-init")
          }, {
            scope: {
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [/[^a-zA-Z0-9._]|^/, t], "object-key-init")
          }], "object-key-init")
        }, {
          scope: {
            3: cc11001100_hook(3, "operator", "object-key-init")
          },
          match: cc11001100_hook("match", [s, /\s+/, /<-/, /\s+/], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "operator", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", a, "object-key-init")
          }, {
            match: cc11001100_hook("match", /%[^%]*%/, "object-key-init")
          }], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "punctuation", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", r, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "`", "object-key-init"),
          end: cc11001100_hook("end", "`", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\./, "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_ruby: cc11001100_hook("grmr_ruby", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", "var-init"),
        t = cc11001100_hook("t", {
          keyword: cc11001100_hook("keyword", "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__", "object-key-init"),
          built_in: cc11001100_hook("built_in", "proc lambda", "object-key-init"),
          literal: cc11001100_hook("literal", "true false nil", "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "doctag", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          begin: cc11001100_hook("begin", "#<", "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", [e.COMMENT("#", "$", {
          contains: cc11001100_hook("contains", [a], "object-key-init")
        }), e.COMMENT("^=begin", "^=end", {
          contains: cc11001100_hook("contains", [a], "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), e.COMMENT("^__END__", "\\n$")], "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /#\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, o], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /`/, "object-key-init"),
            end: cc11001100_hook("end", /`/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\[/, "object-key-init"),
            end: cc11001100_hook("end", /\]/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?</, "object-key-init"),
            end: cc11001100_hook("end", />/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\//, "object-key-init"),
            end: cc11001100_hook("end", /\//, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?%/, "object-key-init"),
            end: cc11001100_hook("end", /%/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?-/, "object-key-init"),
            end: cc11001100_hook("end", /-/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /%[qQwWx]?\|/, "object-key-init"),
            end: cc11001100_hook("end", /\|/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?(\\\d{1,3})/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?(\\x[A-Fa-f0-9]{1,2})/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?(\\u\{?[A-Fa-f0-9]{1,6}\}?)/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?(\\M-\\C-|\\M-\\c|\\c\\M-|\\M-|\\C-\\M-)[\x20-\x7e]/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?\\(c|C-)[\x20-\x7e]/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B\?\\?\S/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/<<[-~]?'?/, n.lookahead(/(\w+)(?=\W)[^\n]*\n(?:[^\n]*\n)*?\s*\1\b/)), "object-key-init"),
            contains: cc11001100_hook("contains", [e.END_SAME_AS_BEGIN({
              begin: cc11001100_hook("begin", /(\w+)/, "object-key-init"),
              end: cc11001100_hook("end", /(\w+)/, "object-key-init"),
              contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, o], "object-key-init")
            })], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", "[0-9](_?[0-9])*", "var-init"),
        d = cc11001100_hook("d", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", `\\b([1-9](_?[0-9])*|0)(\\.(${l}))?([eE][+-]?(${l})|r)?i?\\b`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[dD][0-9](_?[0-9])*r?i?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[bB][0-1](_?[0-1])*r?i?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[oO][0-7](_?[0-7])*r?i?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*r?i?\\b", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0(_?[0-7])+r?i?\\b", "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", {
          className: cc11001100_hook("className", "params", "object-key-init"),
          begin: cc11001100_hook("begin", "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", [c, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "class module", "object-key-init"),
          end: cc11001100_hook("end", "$|;", "object-key-init"),
          illegal: cc11001100_hook("illegal", /=/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", "[A-Za-z_]\\w*(::\\w+)*(\\?|!)?", "object-key-init")
          }), {
            begin: cc11001100_hook("begin", "<\\s*", "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", "(" + e.IDENT_RE + "::)?" + e.IDENT_RE, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }], "object-key-init")
          }].concat(i), "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", n.concat(/def\s+/, n.lookahead(s + "\\s*(\\(|;|$)")), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: cc11001100_hook("keywords", "def", "object-key-init"),
          end: cc11001100_hook("end", "$|;", "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", s, "object-key-init")
          }), p].concat(i), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE + "(!|\\?)?:", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", ":(?!\\s)", "object-key-init"),
          contains: cc11001100_hook("contains", [c, {
            begin: cc11001100_hook("begin", s, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, d, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", "(\\$\\W)|((\\$|@@?)(\\w+))(?=[^@$?])(?![A-Za-z])(?![@$?'])", "object-key-init")
        }, {
          className: cc11001100_hook("className", "params", "object-key-init"),
          begin: cc11001100_hook("begin", /\|/, "object-key-init"),
          end: cc11001100_hook("end", /\|/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "(" + e.RE_STARTERS_RE + "|unless)\\s*", "object-key-init"),
          keywords: cc11001100_hook("keywords", "unless", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "regexp", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, o], "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", "/", "object-key-init"),
              end: cc11001100_hook("end", "/[a-z]*", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", /%r\{/, "object-key-init"),
              end: cc11001100_hook("end", /\}[a-z]*/, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "%r\\(", "object-key-init"),
              end: cc11001100_hook("end", "\\)[a-z]*", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "%r!", "object-key-init"),
              end: cc11001100_hook("end", "![a-z]*", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "%r\\[", "object-key-init"),
              end: cc11001100_hook("end", "\\][a-z]*", "object-key-init")
            }], "object-key-init")
          }].concat(r, i), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }].concat(r, i), "var-init");
      o.contains = cc11001100_hook("o.contains", m, "assign"), p.contains = cc11001100_hook("p.contains", m, "assign");
      const u = cc11001100_hook("u", [{
        begin: cc11001100_hook("begin", /^\s*=>/, "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", m, "object-key-init")
        }
      }, {
        className: cc11001100_hook("className", "meta", "object-key-init"),
        begin: cc11001100_hook("begin", "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])", "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", m, "object-key-init")
        }
      }], "var-init");
      return i.unshift(r), {
        name: cc11001100_hook("name", "Ruby", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["rb", "gemspec", "podspec", "thor", "irb"], "object-key-init"),
        keywords: cc11001100_hook("keywords", t, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\/\*/, "object-key-init"),
        contains: cc11001100_hook("contains", [e.SHEBANG({
          binary: cc11001100_hook("binary", "ruby", "object-key-init")
        })].concat(u).concat(i).concat(m), "object-key-init")
      };
    }, "object-key-init"),
    grmr_rust: cc11001100_hook("grmr_rust", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "title.function.invoke", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          begin: cc11001100_hook("begin", n.concat(/\b/, /(?!let\b)/, e.IDENT_RE, n.lookahead(/\s*\(/)), "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", "([ui](8|16|32|64|128|size)|f(32|64))?", "var-init"),
        a = cc11001100_hook("a", ["drop ", "Copy", "Send", "Sized", "Sync", "Drop", "Fn", "FnMut", "FnOnce", "ToOwned", "Clone", "Debug", "PartialEq", "PartialOrd", "Eq", "Ord", "AsRef", "AsMut", "Into", "From", "Default", "Iterator", "Extend", "IntoIterator", "DoubleEndedIterator", "ExactSizeIterator", "SliceConcatExt", "ToString", "assert!", "assert_eq!", "bitflags!", "bytes!", "cfg!", "col!", "concat!", "concat_idents!", "debug_assert!", "debug_assert_eq!", "env!", "panic!", "file!", "format!", "format_args!", "include_bin!", "include_str!", "line!", "local_data_key!", "module_path!", "option_env!", "print!", "println!", "select!", "stringify!", "try!", "unimplemented!", "unreachable!", "vec!", "write!", "writeln!", "macro_rules!", "assert_ne!", "debug_assert_ne!"], "var-init");
      return {
        name: cc11001100_hook("name", "Rust", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["rs"], "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", e.IDENT_RE + "!?", "object-key-init"),
          type: cc11001100_hook("type", ["i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "str", "char", "bool", "Box", "Option", "Result", "String", "Vec"], "object-key-init"),
          keyword: cc11001100_hook("keyword", ["abstract", "as", "async", "await", "become", "box", "break", "const", "continue", "crate", "do", "dyn", "else", "enum", "extern", "false", "final", "fn", "for", "if", "impl", "in", "let", "loop", "macro", "match", "mod", "move", "mut", "override", "priv", "pub", "ref", "return", "self", "Self", "static", "struct", "super", "trait", "true", "try", "type", "typeof", "unsafe", "unsized", "use", "virtual", "where", "while", "yield"], "object-key-init"),
          literal: cc11001100_hook("literal", ["true", "false", "Some", "None", "Ok", "Err"], "object-key-init"),
          built_in: cc11001100_hook("built_in", a, "object-key-init")
        },
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.COMMENT("/\\*", "\\*/", {
          contains: cc11001100_hook("contains", ["self"], "object-key-init")
        }), e.inherit(e.QUOTE_STRING_MODE, {
          begin: cc11001100_hook("begin", /b?"/, "object-key-init"),
          illegal: cc11001100_hook("illegal", null, "object-key-init")
        }), {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /b?r(#*)"(.|\n)*?"\1(?!#)/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", /'[a-zA-Z_][a-zA-Z0-9_]*/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b0b([01_]+)" + t, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0o([0-7_]+)" + t, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0x([A-Fa-f0-9_]+)" + t, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + t, "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", [/fn/, /\s+/, e.UNDERSCORE_IDENT_RE], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "#!?\\[", "object-key-init"),
          end: cc11001100_hook("end", "\\]", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", [/let/, /\s+/, /(?:mut\s+)?/, e.UNDERSCORE_IDENT_RE], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "keyword", "object-key-init"),
            4: cc11001100_hook(4, "variable", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", [/for/, /\s+/, e.UNDERSCORE_IDENT_RE, /\s+/, /in/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "variable", "object-key-init"),
            5: cc11001100_hook(5, "keyword", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", [/type/, /\s+/, e.UNDERSCORE_IDENT_RE], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", [/(?:trait|enum|struct|union|impl|for)/, /\s+/, e.UNDERSCORE_IDENT_RE], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "Self", "object-key-init"),
            built_in: cc11001100_hook("built_in", a, "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "punctuation", "object-key-init"),
          begin: cc11001100_hook("begin", "->", "object-key-init")
        }, s], "object-key-init")
      };
    }, "object-key-init"),
    grmr_scss: cc11001100_hook("grmr_scss", e => {
      const n = cc11001100_hook("n", te(e), "var-init"),
        s = cc11001100_hook("s", oe, "var-init"),
        t = cc11001100_hook("t", ie, "var-init"),
        a = cc11001100_hook("a", "@[a-z-]+", "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b", "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "SCSS", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", "[=/|']", "object-key-init"),
        contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, n.CSS_NUMBER_MODE, {
          className: cc11001100_hook("className", "selector-id", "object-key-init"),
          begin: cc11001100_hook("begin", "#[A-Za-z0-9_-]+", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-class", "object-key-init"),
          begin: cc11001100_hook("begin", "\\.[A-Za-z0-9_-]+", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, n.ATTRIBUTE_SELECTOR_MODE, {
          className: cc11001100_hook("className", "selector-tag", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + ae.join("|") + ")\\b", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
          begin: cc11001100_hook("begin", ":(" + t.join("|") + ")", "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
          begin: cc11001100_hook("begin", ":(:)?(" + s.join("|") + ")", "object-key-init")
        }, r, {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          contains: cc11001100_hook("contains", [n.CSS_NUMBER_MODE], "object-key-init")
        }, n.CSS_VARIABLE, {
          className: cc11001100_hook("className", "attribute", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + ce.join("|") + ")\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /:/, "object-key-init"),
          end: cc11001100_hook("end", /[;}{]/, "object-key-init"),
          contains: cc11001100_hook("contains", [n.BLOCK_COMMENT, r, n.HEXCOLOR, n.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, n.IMPORTANT], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "@(page|font-face)", "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", a, "object-key-init"),
            keyword: cc11001100_hook("keyword", "@page @font-face", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", "@", "object-key-init"),
          end: cc11001100_hook("end", "[{;]", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", /[a-z-]+/, "object-key-init"),
            keyword: cc11001100_hook("keyword", "and or not only", "object-key-init"),
            attribute: cc11001100_hook("attribute", re.join(" "), "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", a, "object-key-init"),
            className: cc11001100_hook("className", "keyword", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /[a-z-]+(?=:)/, "object-key-init"),
            className: cc11001100_hook("className", "attribute", "object-key-init")
          }, r, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, n.HEXCOLOR, n.CSS_NUMBER_MODE], "object-key-init")
        }, n.FUNCTION_DISPATCH], "object-key-init")
      };
    }, "object-key-init"),
    grmr_shell: cc11001100_hook("grmr_shell", e => ({
      name: cc11001100_hook("name", "Shell Session", "object-key-init"),
      aliases: cc11001100_hook("aliases", ["console", "shellsession"], "object-key-init"),
      contains: cc11001100_hook("contains", [{
        className: cc11001100_hook("className", "meta", "object-key-init"),
        begin: cc11001100_hook("begin", /^\s{0,3}[/~\w\d[\]()@-]*[>%$#][ ]?/, "object-key-init"),
        starts: {
          end: cc11001100_hook("end", /[^\\](?=\s*$)/, "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "bash", "object-key-init")
        }
      }], "object-key-init")
    }), "object-key-init"),
    grmr_sql: cc11001100_hook("grmr_sql", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", e.COMMENT("--", "$"), "var-init"),
        t = cc11001100_hook("t", ["true", "false", "unknown"], "var-init"),
        a = cc11001100_hook("a", ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"], "var-init"),
        r = cc11001100_hook("r", ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"], "var-init"),
        i = cc11001100_hook("i", ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"], "var-init"),
        o = cc11001100_hook("o", r, "var-init"),
        c = cc11001100_hook("c", ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter(e => !r.includes(e)), "var-init"),
        l = cc11001100_hook("l", {
          begin: cc11001100_hook("begin", n.concat(/\b/, n.either(...o), /\s*\(/), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: {
            built_in: cc11001100_hook("built_in", o, "object-key-init")
          }
        }, "var-init");
      return {
        name: cc11001100_hook("name", "SQL", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", /[{}]|<\//, "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", /\b[\w\.]+/, "object-key-init"),
          keyword: cc11001100_hook("keyword", ((e, {
            exceptions: n,
            when: s
          } = {}) => {
            const t = cc11001100_hook("t", s, "var-init");
            return n = cc11001100_hook("n", n || [], "assign"), e.map(e => e.match(/\|\d+$/) || n.includes(e) ? e : t(e) ? e + "|0" : e);
          })(c, {
            when: cc11001100_hook("when", e => e.length < 3, "object-key-init")
          }), "object-key-init"),
          literal: cc11001100_hook("literal", t, "object-key-init"),
          type: cc11001100_hook("type", a, "object-key-init"),
          built_in: cc11001100_hook("built_in", ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"], "object-key-init")
        },
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", n.either(...i), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", /[\w\.]+/, "object-key-init"),
            keyword: cc11001100_hook("keyword", c.concat(i), "object-key-init"),
            literal: cc11001100_hook("literal", t, "object-key-init"),
            type: cc11001100_hook("type", a, "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", n.either("double precision", "large object", "with timezone", "without timezone"), "object-key-init")
        }, l, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", /@[a-z0-9]+/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /''/, "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /""/, "object-key-init")
          }], "object-key-init")
        }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, s, {
          className: cc11001100_hook("className", "operator", "object-key-init"),
          begin: cc11001100_hook("begin", /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_swift: cc11001100_hook("grmr_swift", e => {
      const n = cc11001100_hook("n", {
          match: cc11001100_hook("match", /\s+/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", e.COMMENT("/\\*", "\\*/", {
          contains: cc11001100_hook("contains", ["self"], "object-key-init")
        }), "var-init"),
        t = cc11001100_hook("t", [e.C_LINE_COMMENT_MODE, s], "var-init"),
        a = cc11001100_hook("a", {
          match: cc11001100_hook("match", [/\./, _(...xe, ...ke)], "object-key-init"),
          className: {
            2: cc11001100_hook(2, "keyword", "object-key-init")
          }
        }, "var-init"),
        r = cc11001100_hook("r", {
          match: cc11001100_hook("match", g(/\./, _(...Me)), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", Me.filter(e => "string" == typeof e).concat(["_|0"]), "var-init"),
        o = cc11001100_hook("o", {
          variants: cc11001100_hook("variants", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            match: cc11001100_hook("match", _(...Me.filter(e => "string" != typeof e).concat(Oe).map(Ne), ...ke), "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          $pattern: cc11001100_hook("$pattern", _(/\b\w+/, /#\w+/), "object-key-init"),
          keyword: cc11001100_hook("keyword", i.concat(Ae), "object-key-init"),
          literal: cc11001100_hook("literal", Se, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", [a, r, o], "var-init"),
        d = cc11001100_hook("d", [{
          match: cc11001100_hook("match", g(/\./, _(...Te)), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "built_in", "object-key-init"),
          match: cc11001100_hook("match", g(/\b/, _(...Te), /(?=\()/), "object-key-init")
        }], "var-init"),
        p = cc11001100_hook("p", {
          match: cc11001100_hook("match", /->/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", [p, {
          className: cc11001100_hook("className", "operator", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", Re, "object-key-init")
          }, {
            match: cc11001100_hook("match", `\\.(\\.|${qe})+`, "object-key-init")
          }], "object-key-init")
        }], "var-init"),
        b = cc11001100_hook("b", "([0-9a-fA-F]_*)+", "var-init"),
        v = cc11001100_hook("v", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", `\\b0x(${b})(\\.(${b}))?([pP][+-]?(([0-9]_*)+))?\\b`, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\b0o([0-7]_*)+\b/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\b0b([01]_*)+\b/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        f = cc11001100_hook("f", (e = "") => ({
          className: cc11001100_hook("className", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", g(/\\/, e, /[0\\tnr"']/), "object-key-init")
          }, {
            match: cc11001100_hook("match", g(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/), "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        h = cc11001100_hook("h", (e = "") => ({
          className: cc11001100_hook("className", "subst", "object-key-init"),
          match: cc11001100_hook("match", g(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/), "object-key-init")
        }), "var-init"),
        E = cc11001100_hook("E", (e = "") => ({
          className: cc11001100_hook("className", "subst", "object-key-init"),
          label: cc11001100_hook("label", "interpol", "object-key-init"),
          begin: cc11001100_hook("begin", g(/\\/, e, /\(/), "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init")
        }), "var-init"),
        w = cc11001100_hook("w", (e = "") => ({
          begin: cc11001100_hook("begin", g(e, /"""/), "object-key-init"),
          end: cc11001100_hook("end", g(/"""/, e), "object-key-init"),
          contains: cc11001100_hook("contains", [f(e), h(e), E(e)], "object-key-init")
        }), "var-init"),
        y = cc11001100_hook("y", (e = "") => ({
          begin: cc11001100_hook("begin", g(e, /"/), "object-key-init"),
          end: cc11001100_hook("end", g(/"/, e), "object-key-init"),
          contains: cc11001100_hook("contains", [f(e), E(e)], "object-key-init")
        }), "var-init"),
        N = cc11001100_hook("N", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [w(), w("#"), w("##"), w("###"), y(), y("#"), y("##"), y("###")], "object-key-init")
        }, "var-init"),
        x = cc11001100_hook("x", {
          match: cc11001100_hook("match", g(/`/, Le, /`/), "object-key-init")
        }, "var-init"),
        k = cc11001100_hook("k", [x, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          match: cc11001100_hook("match", /\$\d+/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          match: cc11001100_hook("match", `\\$${Ie}+`, "object-key-init")
        }], "var-init"),
        O = cc11001100_hook("O", [{
          match: cc11001100_hook("match", /(@|#(un)?)available/, "object-key-init"),
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          starts: {
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              keywords: cc11001100_hook("keywords", Ue, "object-key-init"),
              contains: cc11001100_hook("contains", [...u, v, N], "object-key-init")
            }], "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          match: cc11001100_hook("match", g(/@/, _(...ze)), "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          match: cc11001100_hook("match", g(/@/, Le), "object-key-init")
        }], "var-init"),
        M = cc11001100_hook("M", {
          match: cc11001100_hook("match", m(/\b[A-Z]/), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "type", "object-key-init"),
            match: cc11001100_hook("match", g(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, Ie, "+"), "object-key-init")
          }, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            match: cc11001100_hook("match", Be, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /[?!]+/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\.\.\./, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", g(/\s+&\s+/, m(Be)), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        S = cc11001100_hook("S", {
          begin: cc11001100_hook("begin", /</, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          keywords: cc11001100_hook("keywords", c, "object-key-init"),
          contains: cc11001100_hook("contains", [...t, ...l, ...O, p, M], "object-key-init")
        }, "var-init");
      M.contains.push(S);
      const C = cc11001100_hook("C", {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: cc11001100_hook("keywords", c, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", {
            match: cc11001100_hook("match", g(Le, /\s*:/), "object-key-init"),
            keywords: cc11001100_hook("keywords", "_|0", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, ...t, ...l, ...d, ...u, v, N, ...k, ...O, M], "object-key-init")
        }, "var-init"),
        A = cc11001100_hook("A", {
          begin: cc11001100_hook("begin", /</, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          contains: cc11001100_hook("contains", [...t, M], "object-key-init")
        }, "var-init"),
        T = cc11001100_hook("T", {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", c, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", _(m(g(Le, /\s*:/)), m(g(Le, /\s+/, Le, /\s*:/))), "object-key-init"),
            end: cc11001100_hook("end", /:/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "keyword", "object-key-init"),
              match: cc11001100_hook("match", /\b_\b/, "object-key-init")
            }, {
              className: cc11001100_hook("className", "params", "object-key-init"),
              match: cc11001100_hook("match", Le, "object-key-init")
            }], "object-key-init")
          }, ...t, ...l, ...u, v, N, ...O, M, C], "object-key-init"),
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", /["']/, "object-key-init")
        }, "var-init"),
        $ = cc11001100_hook("$", {
          match: cc11001100_hook("match", [/func/, /\s+/, _(x.match, Le, Re)], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [A, T, n], "object-key-init"),
          illegal: cc11001100_hook("illegal", [/\[/, /%/], "object-key-init")
        }, "var-init"),
        q = cc11001100_hook("q", {
          match: cc11001100_hook("match", [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init")
          },
          contains: cc11001100_hook("contains", [A, T, n], "object-key-init"),
          illegal: cc11001100_hook("illegal", /\[|%/, "object-key-init")
        }, "var-init"),
        R = cc11001100_hook("R", {
          match: cc11001100_hook("match", [/operator/, /\s+/, Re], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title", "object-key-init")
          }
        }, "var-init"),
        D = cc11001100_hook("D", {
          begin: cc11001100_hook("begin", [/precedencegroup/, /\s+/, Be], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title", "object-key-init")
          },
          contains: cc11001100_hook("contains", [M], "object-key-init"),
          keywords: cc11001100_hook("keywords", [...Ce, ...Se], "object-key-init"),
          end: cc11001100_hook("end", /}/, "object-key-init")
        }, "var-init");
      for (const e of N.variants) {
        const n = cc11001100_hook("n", e.contains.find(e => "interpol" === e.label), "var-init");
        n.keywords = cc11001100_hook("n.keywords", c, "assign");
        const s = cc11001100_hook("s", [...l, ...d, ...u, v, N, ...k], "var-init");
        n.contains = cc11001100_hook("n.contains", [...s, {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", ...s], "object-key-init")
        }], "assign");
      }
      return {
        name: cc11001100_hook("name", "Swift", "object-key-init"),
        keywords: cc11001100_hook("keywords", c, "object-key-init"),
        contains: cc11001100_hook("contains", [...t, $, q, {
          beginKeywords: cc11001100_hook("beginKeywords", "struct protocol class extension enum actor", "object-key-init"),
          end: cc11001100_hook("end", "\\{", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", c, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            className: cc11001100_hook("className", "title.class", "object-key-init"),
            begin: cc11001100_hook("begin", /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/, "object-key-init")
          }), ...l], "object-key-init")
        }, R, D, {
          beginKeywords: cc11001100_hook("beginKeywords", "import", "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          contains: cc11001100_hook("contains", [...t], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, ...l, ...d, ...u, v, N, ...k, ...O, M, C], "object-key-init")
      };
    }, "object-key-init"),
    grmr_typescript: cc11001100_hook("grmr_typescript", e => {
      const n = cc11001100_hook("n", ye(e), "var-init"),
        s = cc11001100_hook("s", ["any", "void", "number", "boolean", "string", "object", "never", "enum"], "var-init"),
        t = cc11001100_hook("t", {
          beginKeywords: cc11001100_hook("beginKeywords", "namespace", "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [n.exports.CLASS_REFERENCE], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          beginKeywords: cc11001100_hook("beginKeywords", "interface", "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "interface extends", "object-key-init"),
            built_in: cc11001100_hook("built_in", s, "object-key-init")
          },
          contains: cc11001100_hook("contains", [n.exports.CLASS_REFERENCE], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          $pattern: cc11001100_hook("$pattern", be, "object-key-init"),
          keyword: cc11001100_hook("keyword", ge.concat(["type", "namespace", "typedef", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly"]), "object-key-init"),
          literal: cc11001100_hook("literal", _e, "object-key-init"),
          built_in: cc11001100_hook("built_in", we.concat(s), "object-key-init"),
          "variable.language": cc11001100_hook("variable.language", Ee, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z$_][0-9A-Za-z$_]*", "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", (e, n, s) => {
          const t = cc11001100_hook("t", e.contains.findIndex(e => e.label === n), "var-init");
          if (-1 === t) throw Error("can not find mode to replace");
          e.contains.splice(t, 1, s);
        }, "var-init");
      return Object.assign(n.keywords, r), n.exports.PARAMS_CONTAINS.push(i), n.contains = cc11001100_hook("n.contains", n.contains.concat([i, t, a]), "assign"), o(n, "shebang", e.SHEBANG()), o(n, "use_strict", {
        className: cc11001100_hook("className", "meta", "object-key-init"),
        relevance: cc11001100_hook("relevance", 10, "object-key-init"),
        begin: cc11001100_hook("begin", /^\s*['"]use strict['"]/, "object-key-init")
      }), n.contains.find(e => "func.def" === e.label).relevance = cc11001100_hook("n.contains.find(e => \"func.def\" === e.label).relevance", 0, "assign"), Object.assign(n, {
        name: cc11001100_hook("name", "TypeScript", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["ts", "tsx"], "object-key-init")
      }), n;
    }, "object-key-init"),
    grmr_vbnet: cc11001100_hook("grmr_vbnet", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", /\d{1,2}\/\d{1,2}\/\d{4}/, "var-init"),
        t = cc11001100_hook("t", /\d{4}-\d{1,2}-\d{1,2}/, "var-init"),
        a = cc11001100_hook("a", /(\d|1[012])(:\d+){0,2} *(AM|PM)/, "var-init"),
        r = cc11001100_hook("r", /\d{1,2}(:\d{1,2}){1,2}/, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "literal", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", n.concat(/# */, n.either(t, s), / *#/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/# */, r, / *#/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/# */, a, / *#/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/# */, n.either(t, s), / +/, n.either(a, r), / *#/), "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", e.COMMENT(/'''/, /$/, {
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", /<\/?/, "object-key-init"),
            end: cc11001100_hook("end", />/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", e.COMMENT(null, /$/, {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([\t ]|^)REM(?=\s)/, "object-key-init")
          }], "object-key-init")
        }), "var-init");
      return {
        name: cc11001100_hook("name", "Visual Basic .NET", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["vb"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        classNameAliases: {
          label: cc11001100_hook("label", "symbol", "object-key-init")
        },
        keywords: {
          keyword: cc11001100_hook("keyword", "addhandler alias aggregate ansi as async assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into iterator join key let lib loop me mid module mustinherit mustoverride mybase myclass namespace narrowing new next notinheritable notoverridable of off on operator option optional order overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly yield", "object-key-init"),
          built_in: cc11001100_hook("built_in", "addressof and andalso await directcast gettype getxmlnamespace is isfalse isnot istrue like mod nameof new not or orelse trycast typeof xor cbool cbyte cchar cdate cdbl cdec cint clng cobj csbyte cshort csng cstr cuint culng cushort", "object-key-init"),
          type: cc11001100_hook("type", "boolean byte char date decimal double integer long object sbyte short single string uinteger ulong ushort", "object-key-init"),
          literal: cc11001100_hook("literal", "true false nothing", "object-key-init")
        },
        illegal: cc11001100_hook("illegal", "//|\\{|\\}|endif|gosub|variant|wend|^\\$ ", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"(""|[^/n])"C\b/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /""/, "object-key-init")
          }], "object-key-init")
        }, i, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\b\d[\d_]*((\.[\d_]+(E[+-]?[\d_]+)?)|(E[+-]?[\d_]+))[RFD@!#]?/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\b\d[\d_]*((U?[SIL])|[%&])?/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /&H[\dA-F_]+((U?[SIL])|[%&])?/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /&O[0-7_]+((U?[SIL])|[%&])?/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /&B[01_]+((U?[SIL])|[%&])?/, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "label", "object-key-init"),
          begin: cc11001100_hook("begin", /^\w+:/, "object-key-init")
        }, o, c, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "const disable else elseif enable end externalsource if region then", "object-key-init")
          },
          contains: cc11001100_hook("contains", [c], "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_yaml: cc11001100_hook("grmr_yaml", e => {
      const n = cc11001100_hook("n", "true false yes no null", "var-init"),
        s = cc11001100_hook("s", "[\\w#;/?:@&=+$,.~*'()[\\]]+", "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\S+/, "object-key-init")
          }], "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, {
            className: cc11001100_hook("className", "template-variable", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", /\{\{/, "object-key-init"),
              end: cc11001100_hook("end", /\}\}/, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", /%\{/, "object-key-init"),
              end: cc11001100_hook("end", /\}/, "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", e.inherit(t, {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /[^\s,{}[\]]+/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        r = cc11001100_hook("r", {
          end: cc11001100_hook("end", ",", "object-key-init"),
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [r], "object-key-init"),
          illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", "\\[", "object-key-init"),
          end: cc11001100_hook("end", "\\]", "object-key-init"),
          contains: cc11001100_hook("contains", [r], "object-key-init"),
          illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", [{
          className: cc11001100_hook("className", "attr", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\w[\\w :\\/.-]*:(?=[ \t]|$)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"\\w[\\w :\\/.-]*":(?=[ \t]|$)', "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'\\w[\\w :\\/.-]*':(?=[ \t]|$)", "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "^---\\s*$", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", "[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "<%[%=-]?", "object-key-init"),
          end: cc11001100_hook("end", "[%-]?%>", "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "ruby", "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "!\\w+!" + s, "object-key-init")
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "!<" + s + ">", "object-key-init")
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "!" + s, "object-key-init")
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "!!" + s, "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "&" + e.UNDERSCORE_IDENT_RE + "$", "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "\\*" + e.UNDERSCORE_IDENT_RE + "$", "object-key-init")
        }, {
          className: cc11001100_hook("className", "bullet", "object-key-init"),
          begin: cc11001100_hook("begin", "-(?=[ ]|$)", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, e.HASH_COMMENT_MODE, {
          beginKeywords: cc11001100_hook("beginKeywords", n, "object-key-init"),
          keywords: {
            literal: cc11001100_hook("literal", n, "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b[0-9]{4}(-[0-9][0-9]){0,2}([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?(\\.[0-9]*)?([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?\\b", "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          begin: cc11001100_hook("begin", e.C_NUMBER_RE + "\\b", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, i, o, t], "var-init"),
        l = cc11001100_hook("l", [...c], "var-init");
      return l.pop(), l.push(a), r.contains = cc11001100_hook("r.contains", l, "assign"), {
        name: cc11001100_hook("name", "YAML", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        aliases: cc11001100_hook("aliases", ["yml"], "object-key-init"),
        contains: cc11001100_hook("contains", c, "object-key-init")
      };
    }, "object-key-init"),
    grmr_dart: cc11001100_hook("grmr_dart", e => {
      const n = cc11001100_hook("n", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\$[A-Za-z0-9_]+", "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }], "object-key-init"),
          keywords: cc11001100_hook("keywords", "true false null this is new super", "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "r'''", "object-key-init"),
            end: cc11001100_hook("end", "'''", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", 'r"""', "object-key-init"),
            end: cc11001100_hook("end", '"""', "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "r'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", 'r"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'''", "object-key-init"),
            end: cc11001100_hook("end", "'''", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n, s], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"""', "object-key-init"),
            end: cc11001100_hook("end", '"""', "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n, s], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n, s], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n, s], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      s.contains = cc11001100_hook("s.contains", [e.C_NUMBER_MODE, t], "assign");
      const a = cc11001100_hook("a", ["Comparable", "DateTime", "Duration", "Function", "Iterable", "Iterator", "List", "Map", "Match", "Object", "Pattern", "RegExp", "Set", "Stopwatch", "String", "StringBuffer", "StringSink", "Symbol", "Type", "Uri", "bool", "double", "int", "num", "Element", "ElementList"], "var-init"),
        r = cc11001100_hook("r", a.map(e => e + "?"), "var-init");
      return {
        name: cc11001100_hook("name", "Dart", "object-key-init"),
        keywords: {
          keyword: cc11001100_hook("keyword", ["abstract", "as", "assert", "async", "await", "break", "case", "catch", "class", "const", "continue", "covariant", "default", "deferred", "do", "dynamic", "else", "enum", "export", "extends", "extension", "external", "factory", "false", "final", "finally", "for", "Function", "get", "hide", "if", "implements", "import", "in", "inferface", "is", "late", "library", "mixin", "new", "null", "on", "operator", "part", "required", "rethrow", "return", "set", "show", "static", "super", "switch", "sync", "this", "throw", "true", "try", "typedef", "var", "void", "while", "with", "yield"], "object-key-init"),
          built_in: cc11001100_hook("built_in", a.concat(r).concat(["Never", "Null", "dynamic", "print", "document", "querySelector", "querySelectorAll", "window"]), "object-key-init"),
          $pattern: cc11001100_hook("$pattern", /[A-Za-z][A-Za-z0-9_]*\??/, "object-key-init")
        },
        contains: cc11001100_hook("contains", [t, e.COMMENT(/\/\*\*(?!\/)/, /\*\//, {
          subLanguage: cc11001100_hook("subLanguage", "markdown", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }), e.COMMENT(/\/{3,} ?/, /$/, {
          contains: cc11001100_hook("contains", [{
            subLanguage: cc11001100_hook("subLanguage", "markdown", "object-key-init"),
            begin: cc11001100_hook("begin", ".", "object-key-init"),
            end: cc11001100_hook("end", "$", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "class interface", "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "extends implements", "object-key-init")
          }, e.UNDERSCORE_TITLE_MODE], "object-key-init")
        }, e.C_NUMBER_MODE, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "=>", "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_dos: cc11001100_hook("grmr_dos", e => {
      const n = cc11001100_hook("n", e.COMMENT(/^\s*@?rem\b/, /$/, {
        relevance: cc11001100_hook("relevance", 10, "object-key-init")
      }), "var-init");
      return {
        name: cc11001100_hook("name", "Batch file (DOS)", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["bat", "cmd"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\/\*/, "object-key-init"),
        keywords: {
          keyword: cc11001100_hook("keyword", ["if", "else", "goto", "for", "in", "do", "call", "exit", "not", "exist", "errorlevel", "defined", "equ", "neq", "lss", "leq", "gtr", "geq"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["prn", "nul", "lpt3", "lpt2", "lpt1", "con", "com4", "com3", "com2", "com1", "aux", "shift", "cd", "dir", "echo", "setlocal", "endlocal", "set", "pause", "copy", "append", "assoc", "at", "attrib", "break", "cacls", "cd", "chcp", "chdir", "chkdsk", "chkntfs", "cls", "cmd", "color", "comp", "compact", "convert", "date", "dir", "diskcomp", "diskcopy", "doskey", "erase", "fs", "find", "findstr", "format", "ftype", "graftabl", "help", "keyb", "label", "md", "mkdir", "mode", "more", "move", "path", "pause", "print", "popd", "pushd", "promt", "rd", "recover", "rem", "rename", "replace", "restore", "rmdir", "shift", "sort", "start", "subst", "time", "title", "tree", "type", "ver", "verify", "vol", "ping", "net", "ipconfig", "taskkill", "xcopy", "ren", "del"], "object-key-init")
        },
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", /%%[^ ]|%[^ ]+?%|![^ ]+?!/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)", "object-key-init"),
          end: cc11001100_hook("end", "goto:eof", "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*", "object-key-init")
          }), n], "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b\\d+", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, n], "object-key-init")
      };
    }, "object-key-init"),
    grmr_armasm: cc11001100_hook("grmr_armasm", e => {
      const n = cc11001100_hook("n", {
        variants: cc11001100_hook("variants", [e.COMMENT("^[ \\t]*(?=#)", "$", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init")
        }), e.COMMENT("[;@]", "$", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }), e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
      }, "var-init");
      return {
        name: cc11001100_hook("name", "ARM Assembly", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        aliases: cc11001100_hook("aliases", ["arm"], "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", "\\.?" + e.IDENT_RE, "object-key-init"),
          meta: cc11001100_hook("meta", ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ", "object-key-init"),
          built_in: cc11001100_hook("built_in", "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 pc lr sp ip sl sb fp a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf s0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 s16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 d16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 {PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @", "object-key-init")
        },
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(adc|(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|wfe|wfi|yield)(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?[sptrx]?(?=\\s)", "object-key-init")
        }, n, e.QUOTE_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", "'", "object-key-init"),
          end: cc11001100_hook("end", "[^\\\\]'", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "title", "object-key-init"),
          begin: cc11001100_hook("begin", "\\|", "object-key-init"),
          end: cc11001100_hook("end", "\\|", "object-key-init"),
          illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "[#$=]?0x[0-9a-f]+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "[#$=]?0b[01]+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "[#$=]\\d+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b\\d+", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "^[ \\t]*[a-z_\\.\\$][a-z0-9_\\.\\$]+:", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "^[a-z_\\.\\$][a-z0-9_\\.\\$]+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "[=#]\\w+", "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_avrasm: cc11001100_hook("grmr_avrasm", e => ({
      name: cc11001100_hook("name", "AVR Assembly", "object-key-init"),
      case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
      keywords: {
        $pattern: cc11001100_hook("$pattern", "\\.?" + e.IDENT_RE, "object-key-init"),
        keyword: cc11001100_hook("keyword", "adc add adiw and andi asr bclr bld brbc brbs brcc brcs break breq brge brhc brhs brid brie brlo brlt brmi brne brpl brsh brtc brts brvc brvs bset bst call cbi cbr clc clh cli cln clr cls clt clv clz com cp cpc cpi cpse dec eicall eijmp elpm eor fmul fmuls fmulsu icall ijmp in inc jmp ld ldd ldi lds lpm lsl lsr mov movw mul muls mulsu neg nop or ori out pop push rcall ret reti rjmp rol ror sbc sbr sbrc sbrs sec seh sbi sbci sbic sbis sbiw sei sen ser ses set sev sez sleep spm st std sts sub subi swap tst wdr", "object-key-init"),
        built_in: cc11001100_hook("built_in", "r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 r16 r17 r18 r19 r20 r21 r22 r23 r24 r25 r26 r27 r28 r29 r30 r31 x|0 xh xl y|0 yh yl z|0 zh zl ucsr1c udr1 ucsr1a ucsr1b ubrr1l ubrr1h ucsr0c ubrr0h tccr3c tccr3a tccr3b tcnt3h tcnt3l ocr3ah ocr3al ocr3bh ocr3bl ocr3ch ocr3cl icr3h icr3l etimsk etifr tccr1c ocr1ch ocr1cl twcr twdr twar twsr twbr osccal xmcra xmcrb eicra spmcsr spmcr portg ddrg ping portf ddrf sreg sph spl xdiv rampz eicrb eimsk gimsk gicr eifr gifr timsk tifr mcucr mcucsr tccr0 tcnt0 ocr0 assr tccr1a tccr1b tcnt1h tcnt1l ocr1ah ocr1al ocr1bh ocr1bl icr1h icr1l tccr2 tcnt2 ocr2 ocdr wdtcr sfior eearh eearl eedr eecr porta ddra pina portb ddrb pinb portc ddrc pinc portd ddrd pind spdr spsr spcr udr0 ucsr0a ucsr0b ubrr0l acsr admux adcsr adch adcl porte ddre pine pinf", "object-key-init"),
        meta: cc11001100_hook("meta", ".byte .cseg .db .def .device .dseg .dw .endmacro .equ .eseg .exit .include .list .listmac .macro .nolist .org .set", "object-key-init")
      },
      contains: cc11001100_hook("contains", [e.C_BLOCK_COMMENT_MODE, e.COMMENT(";", "$", {
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }), e.C_NUMBER_MODE, e.BINARY_NUMBER_MODE, {
        className: cc11001100_hook("className", "number", "object-key-init"),
        begin: cc11001100_hook("begin", "\\b(\\$[a-zA-Z0-9]+|0o[0-7]+)", "object-key-init")
      }, e.QUOTE_STRING_MODE, {
        className: cc11001100_hook("className", "string", "object-key-init"),
        begin: cc11001100_hook("begin", "'", "object-key-init"),
        end: cc11001100_hook("end", "[^\\\\]'", "object-key-init"),
        illegal: cc11001100_hook("illegal", "[^\\\\][^']", "object-key-init")
      }, {
        className: cc11001100_hook("className", "symbol", "object-key-init"),
        begin: cc11001100_hook("begin", "^[A-Za-z0-9_.$]+:", "object-key-init")
      }, {
        className: cc11001100_hook("className", "meta", "object-key-init"),
        begin: cc11001100_hook("begin", "#", "object-key-init"),
        end: cc11001100_hook("end", "$", "object-key-init")
      }, {
        className: cc11001100_hook("className", "subst", "object-key-init"),
        begin: cc11001100_hook("begin", "@[0-9]+", "object-key-init")
      }], "object-key-init")
    }), "object-key-init"),
    grmr_x86asm: cc11001100_hook("grmr_x86asm", e => ({
      name: cc11001100_hook("name", "Intel x86 Assembly", "object-key-init"),
      case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
      keywords: {
        $pattern: cc11001100_hook("$pattern", "[.%]?" + e.IDENT_RE, "object-key-init"),
        keyword: cc11001100_hook("keyword", "lock rep repe repz repne repnz xaquire xrelease bnd nobnd aaa aad aam aas adc add and arpl bb0_reset bb1_reset bound bsf bsr bswap bt btc btr bts call cbw cdq cdqe clc cld cli clts cmc cmp cmpsb cmpsd cmpsq cmpsw cmpxchg cmpxchg486 cmpxchg8b cmpxchg16b cpuid cpu_read cpu_write cqo cwd cwde daa das dec div dmint emms enter equ f2xm1 fabs fadd faddp fbld fbstp fchs fclex fcmovb fcmovbe fcmove fcmovnb fcmovnbe fcmovne fcmovnu fcmovu fcom fcomi fcomip fcomp fcompp fcos fdecstp fdisi fdiv fdivp fdivr fdivrp femms feni ffree ffreep fiadd ficom ficomp fidiv fidivr fild fimul fincstp finit fist fistp fisttp fisub fisubr fld fld1 fldcw fldenv fldl2e fldl2t fldlg2 fldln2 fldpi fldz fmul fmulp fnclex fndisi fneni fninit fnop fnsave fnstcw fnstenv fnstsw fpatan fprem fprem1 fptan frndint frstor fsave fscale fsetpm fsin fsincos fsqrt fst fstcw fstenv fstp fstsw fsub fsubp fsubr fsubrp ftst fucom fucomi fucomip fucomp fucompp fxam fxch fxtract fyl2x fyl2xp1 hlt ibts icebp idiv imul in inc incbin insb insd insw int int01 int1 int03 int3 into invd invpcid invlpg invlpga iret iretd iretq iretw jcxz jecxz jrcxz jmp jmpe lahf lar lds lea leave les lfence lfs lgdt lgs lidt lldt lmsw loadall loadall286 lodsb lodsd lodsq lodsw loop loope loopne loopnz loopz lsl lss ltr mfence monitor mov movd movq movsb movsd movsq movsw movsx movsxd movzx mul mwait neg nop not or out outsb outsd outsw packssdw packsswb packuswb paddb paddd paddsb paddsiw paddsw paddusb paddusw paddw pand pandn pause paveb pavgusb pcmpeqb pcmpeqd pcmpeqw pcmpgtb pcmpgtd pcmpgtw pdistib pf2id pfacc pfadd pfcmpeq pfcmpge pfcmpgt pfmax pfmin pfmul pfrcp pfrcpit1 pfrcpit2 pfrsqit1 pfrsqrt pfsub pfsubr pi2fd pmachriw pmaddwd pmagw pmulhriw pmulhrwa pmulhrwc pmulhw pmullw pmvgezb pmvlzb pmvnzb pmvzb pop popa popad popaw popf popfd popfq popfw por prefetch prefetchw pslld psllq psllw psrad psraw psrld psrlq psrlw psubb psubd psubsb psubsiw psubsw psubusb psubusw psubw punpckhbw punpckhdq punpckhwd punpcklbw punpckldq punpcklwd push pusha pushad pushaw pushf pushfd pushfq pushfw pxor rcl rcr rdshr rdmsr rdpmc rdtsc rdtscp ret retf retn rol ror rdm rsdc rsldt rsm rsts sahf sal salc sar sbb scasb scasd scasq scasw sfence sgdt shl shld shr shrd sidt sldt skinit smi smint smintold smsw stc std sti stosb stosd stosq stosw str sub svdc svldt svts swapgs syscall sysenter sysexit sysret test ud0 ud1 ud2b ud2 ud2a umov verr verw fwait wbinvd wrshr wrmsr xadd xbts xchg xlatb xlat xor cmove cmovz cmovne cmovnz cmova cmovnbe cmovae cmovnb cmovb cmovnae cmovbe cmovna cmovg cmovnle cmovge cmovnl cmovl cmovnge cmovle cmovng cmovc cmovnc cmovo cmovno cmovs cmovns cmovp cmovpe cmovnp cmovpo je jz jne jnz ja jnbe jae jnb jb jnae jbe jna jg jnle jge jnl jl jnge jle jng jc jnc jo jno js jns jpo jnp jpe jp sete setz setne setnz seta setnbe setae setnb setnc setb setnae setcset setbe setna setg setnle setge setnl setl setnge setle setng sets setns seto setno setpe setp setpo setnp addps addss andnps andps cmpeqps cmpeqss cmpleps cmpless cmpltps cmpltss cmpneqps cmpneqss cmpnleps cmpnless cmpnltps cmpnltss cmpordps cmpordss cmpunordps cmpunordss cmpps cmpss comiss cvtpi2ps cvtps2pi cvtsi2ss cvtss2si cvttps2pi cvttss2si divps divss ldmxcsr maxps maxss minps minss movaps movhps movlhps movlps movhlps movmskps movntps movss movups mulps mulss orps rcpps rcpss rsqrtps rsqrtss shufps sqrtps sqrtss stmxcsr subps subss ucomiss unpckhps unpcklps xorps fxrstor fxrstor64 fxsave fxsave64 xgetbv xsetbv xsave xsave64 xsaveopt xsaveopt64 xrstor xrstor64 prefetchnta prefetcht0 prefetcht1 prefetcht2 maskmovq movntq pavgb pavgw pextrw pinsrw pmaxsw pmaxub pminsw pminub pmovmskb pmulhuw psadbw pshufw pf2iw pfnacc pfpnacc pi2fw pswapd maskmovdqu clflush movntdq movnti movntpd movdqa movdqu movdq2q movq2dq paddq pmuludq pshufd pshufhw pshuflw pslldq psrldq psubq punpckhqdq punpcklqdq addpd addsd andnpd andpd cmpeqpd cmpeqsd cmplepd cmplesd cmpltpd cmpltsd cmpneqpd cmpneqsd cmpnlepd cmpnlesd cmpnltpd cmpnltsd cmpordpd cmpordsd cmpunordpd cmpunordsd cmppd comisd cvtdq2pd cvtdq2ps cvtpd2dq cvtpd2pi cvtpd2ps cvtpi2pd cvtps2dq cvtps2pd cvtsd2si cvtsd2ss cvtsi2sd cvtss2sd cvttpd2pi cvttpd2dq cvttps2dq cvttsd2si divpd divsd maxpd maxsd minpd minsd movapd movhpd movlpd movmskpd movupd mulpd mulsd orpd shufpd sqrtpd sqrtsd subpd subsd ucomisd unpckhpd unpcklpd xorpd addsubpd addsubps haddpd haddps hsubpd hsubps lddqu movddup movshdup movsldup clgi stgi vmcall vmclear vmfunc vmlaunch vmload vmmcall vmptrld vmptrst vmread vmresume vmrun vmsave vmwrite vmxoff vmxon invept invvpid pabsb pabsw pabsd palignr phaddw phaddd phaddsw phsubw phsubd phsubsw pmaddubsw pmulhrsw pshufb psignb psignw psignd extrq insertq movntsd movntss lzcnt blendpd blendps blendvpd blendvps dppd dpps extractps insertps movntdqa mpsadbw packusdw pblendvb pblendw pcmpeqq pextrb pextrd pextrq phminposuw pinsrb pinsrd pinsrq pmaxsb pmaxsd pmaxud pmaxuw pminsb pminsd pminud pminuw pmovsxbw pmovsxbd pmovsxbq pmovsxwd pmovsxwq pmovsxdq pmovzxbw pmovzxbd pmovzxbq pmovzxwd pmovzxwq pmovzxdq pmuldq pmulld ptest roundpd roundps roundsd roundss crc32 pcmpestri pcmpestrm pcmpistri pcmpistrm pcmpgtq popcnt getsec pfrcpv pfrsqrtv movbe aesenc aesenclast aesdec aesdeclast aesimc aeskeygenassist vaesenc vaesenclast vaesdec vaesdeclast vaesimc vaeskeygenassist vaddpd vaddps vaddsd vaddss vaddsubpd vaddsubps vandpd vandps vandnpd vandnps vblendpd vblendps vblendvpd vblendvps vbroadcastss vbroadcastsd vbroadcastf128 vcmpeq_ospd vcmpeqpd vcmplt_ospd vcmpltpd vcmple_ospd vcmplepd vcmpunord_qpd vcmpunordpd vcmpneq_uqpd vcmpneqpd vcmpnlt_uspd vcmpnltpd vcmpnle_uspd vcmpnlepd vcmpord_qpd vcmpordpd vcmpeq_uqpd vcmpnge_uspd vcmpngepd vcmpngt_uspd vcmpngtpd vcmpfalse_oqpd vcmpfalsepd vcmpneq_oqpd vcmpge_ospd vcmpgepd vcmpgt_ospd vcmpgtpd vcmptrue_uqpd vcmptruepd vcmplt_oqpd vcmple_oqpd vcmpunord_spd vcmpneq_uspd vcmpnlt_uqpd vcmpnle_uqpd vcmpord_spd vcmpeq_uspd vcmpnge_uqpd vcmpngt_uqpd vcmpfalse_ospd vcmpneq_ospd vcmpge_oqpd vcmpgt_oqpd vcmptrue_uspd vcmppd vcmpeq_osps vcmpeqps vcmplt_osps vcmpltps vcmple_osps vcmpleps vcmpunord_qps vcmpunordps vcmpneq_uqps vcmpneqps vcmpnlt_usps vcmpnltps vcmpnle_usps vcmpnleps vcmpord_qps vcmpordps vcmpeq_uqps vcmpnge_usps vcmpngeps vcmpngt_usps vcmpngtps vcmpfalse_oqps vcmpfalseps vcmpneq_oqps vcmpge_osps vcmpgeps vcmpgt_osps vcmpgtps vcmptrue_uqps vcmptrueps vcmplt_oqps vcmple_oqps vcmpunord_sps vcmpneq_usps vcmpnlt_uqps vcmpnle_uqps vcmpord_sps vcmpeq_usps vcmpnge_uqps vcmpngt_uqps vcmpfalse_osps vcmpneq_osps vcmpge_oqps vcmpgt_oqps vcmptrue_usps vcmpps vcmpeq_ossd vcmpeqsd vcmplt_ossd vcmpltsd vcmple_ossd vcmplesd vcmpunord_qsd vcmpunordsd vcmpneq_uqsd vcmpneqsd vcmpnlt_ussd vcmpnltsd vcmpnle_ussd vcmpnlesd vcmpord_qsd vcmpordsd vcmpeq_uqsd vcmpnge_ussd vcmpngesd vcmpngt_ussd vcmpngtsd vcmpfalse_oqsd vcmpfalsesd vcmpneq_oqsd vcmpge_ossd vcmpgesd vcmpgt_ossd vcmpgtsd vcmptrue_uqsd vcmptruesd vcmplt_oqsd vcmple_oqsd vcmpunord_ssd vcmpneq_ussd vcmpnlt_uqsd vcmpnle_uqsd vcmpord_ssd vcmpeq_ussd vcmpnge_uqsd vcmpngt_uqsd vcmpfalse_ossd vcmpneq_ossd vcmpge_oqsd vcmpgt_oqsd vcmptrue_ussd vcmpsd vcmpeq_osss vcmpeqss vcmplt_osss vcmpltss vcmple_osss vcmpless vcmpunord_qss vcmpunordss vcmpneq_uqss vcmpneqss vcmpnlt_usss vcmpnltss vcmpnle_usss vcmpnless vcmpord_qss vcmpordss vcmpeq_uqss vcmpnge_usss vcmpngess vcmpngt_usss vcmpngtss vcmpfalse_oqss vcmpfalsess vcmpneq_oqss vcmpge_osss vcmpgess vcmpgt_osss vcmpgtss vcmptrue_uqss vcmptruess vcmplt_oqss vcmple_oqss vcmpunord_sss vcmpneq_usss vcmpnlt_uqss vcmpnle_uqss vcmpord_sss vcmpeq_usss vcmpnge_uqss vcmpngt_uqss vcmpfalse_osss vcmpneq_osss vcmpge_oqss vcmpgt_oqss vcmptrue_usss vcmpss vcomisd vcomiss vcvtdq2pd vcvtdq2ps vcvtpd2dq vcvtpd2ps vcvtps2dq vcvtps2pd vcvtsd2si vcvtsd2ss vcvtsi2sd vcvtsi2ss vcvtss2sd vcvtss2si vcvttpd2dq vcvttps2dq vcvttsd2si vcvttss2si vdivpd vdivps vdivsd vdivss vdppd vdpps vextractf128 vextractps vhaddpd vhaddps vhsubpd vhsubps vinsertf128 vinsertps vlddqu vldqqu vldmxcsr vmaskmovdqu vmaskmovps vmaskmovpd vmaxpd vmaxps vmaxsd vmaxss vminpd vminps vminsd vminss vmovapd vmovaps vmovd vmovq vmovddup vmovdqa vmovqqa vmovdqu vmovqqu vmovhlps vmovhpd vmovhps vmovlhps vmovlpd vmovlps vmovmskpd vmovmskps vmovntdq vmovntqq vmovntdqa vmovntpd vmovntps vmovsd vmovshdup vmovsldup vmovss vmovupd vmovups vmpsadbw vmulpd vmulps vmulsd vmulss vorpd vorps vpabsb vpabsw vpabsd vpacksswb vpackssdw vpackuswb vpackusdw vpaddb vpaddw vpaddd vpaddq vpaddsb vpaddsw vpaddusb vpaddusw vpalignr vpand vpandn vpavgb vpavgw vpblendvb vpblendw vpcmpestri vpcmpestrm vpcmpistri vpcmpistrm vpcmpeqb vpcmpeqw vpcmpeqd vpcmpeqq vpcmpgtb vpcmpgtw vpcmpgtd vpcmpgtq vpermilpd vpermilps vperm2f128 vpextrb vpextrw vpextrd vpextrq vphaddw vphaddd vphaddsw vphminposuw vphsubw vphsubd vphsubsw vpinsrb vpinsrw vpinsrd vpinsrq vpmaddwd vpmaddubsw vpmaxsb vpmaxsw vpmaxsd vpmaxub vpmaxuw vpmaxud vpminsb vpminsw vpminsd vpminub vpminuw vpminud vpmovmskb vpmovsxbw vpmovsxbd vpmovsxbq vpmovsxwd vpmovsxwq vpmovsxdq vpmovzxbw vpmovzxbd vpmovzxbq vpmovzxwd vpmovzxwq vpmovzxdq vpmulhuw vpmulhrsw vpmulhw vpmullw vpmulld vpmuludq vpmuldq vpor vpsadbw vpshufb vpshufd vpshufhw vpshuflw vpsignb vpsignw vpsignd vpslldq vpsrldq vpsllw vpslld vpsllq vpsraw vpsrad vpsrlw vpsrld vpsrlq vptest vpsubb vpsubw vpsubd vpsubq vpsubsb vpsubsw vpsubusb vpsubusw vpunpckhbw vpunpckhwd vpunpckhdq vpunpckhqdq vpunpcklbw vpunpcklwd vpunpckldq vpunpcklqdq vpxor vrcpps vrcpss vrsqrtps vrsqrtss vroundpd vroundps vroundsd vroundss vshufpd vshufps vsqrtpd vsqrtps vsqrtsd vsqrtss vstmxcsr vsubpd vsubps vsubsd vsubss vtestps vtestpd vucomisd vucomiss vunpckhpd vunpckhps vunpcklpd vunpcklps vxorpd vxorps vzeroall vzeroupper pclmullqlqdq pclmulhqlqdq pclmullqhqdq pclmulhqhqdq pclmulqdq vpclmullqlqdq vpclmulhqlqdq vpclmullqhqdq vpclmulhqhqdq vpclmulqdq vfmadd132ps vfmadd132pd vfmadd312ps vfmadd312pd vfmadd213ps vfmadd213pd vfmadd123ps vfmadd123pd vfmadd231ps vfmadd231pd vfmadd321ps vfmadd321pd vfmaddsub132ps vfmaddsub132pd vfmaddsub312ps vfmaddsub312pd vfmaddsub213ps vfmaddsub213pd vfmaddsub123ps vfmaddsub123pd vfmaddsub231ps vfmaddsub231pd vfmaddsub321ps vfmaddsub321pd vfmsub132ps vfmsub132pd vfmsub312ps vfmsub312pd vfmsub213ps vfmsub213pd vfmsub123ps vfmsub123pd vfmsub231ps vfmsub231pd vfmsub321ps vfmsub321pd vfmsubadd132ps vfmsubadd132pd vfmsubadd312ps vfmsubadd312pd vfmsubadd213ps vfmsubadd213pd vfmsubadd123ps vfmsubadd123pd vfmsubadd231ps vfmsubadd231pd vfmsubadd321ps vfmsubadd321pd vfnmadd132ps vfnmadd132pd vfnmadd312ps vfnmadd312pd vfnmadd213ps vfnmadd213pd vfnmadd123ps vfnmadd123pd vfnmadd231ps vfnmadd231pd vfnmadd321ps vfnmadd321pd vfnmsub132ps vfnmsub132pd vfnmsub312ps vfnmsub312pd vfnmsub213ps vfnmsub213pd vfnmsub123ps vfnmsub123pd vfnmsub231ps vfnmsub231pd vfnmsub321ps vfnmsub321pd vfmadd132ss vfmadd132sd vfmadd312ss vfmadd312sd vfmadd213ss vfmadd213sd vfmadd123ss vfmadd123sd vfmadd231ss vfmadd231sd vfmadd321ss vfmadd321sd vfmsub132ss vfmsub132sd vfmsub312ss vfmsub312sd vfmsub213ss vfmsub213sd vfmsub123ss vfmsub123sd vfmsub231ss vfmsub231sd vfmsub321ss vfmsub321sd vfnmadd132ss vfnmadd132sd vfnmadd312ss vfnmadd312sd vfnmadd213ss vfnmadd213sd vfnmadd123ss vfnmadd123sd vfnmadd231ss vfnmadd231sd vfnmadd321ss vfnmadd321sd vfnmsub132ss vfnmsub132sd vfnmsub312ss vfnmsub312sd vfnmsub213ss vfnmsub213sd vfnmsub123ss vfnmsub123sd vfnmsub231ss vfnmsub231sd vfnmsub321ss vfnmsub321sd rdfsbase rdgsbase rdrand wrfsbase wrgsbase vcvtph2ps vcvtps2ph adcx adox rdseed clac stac xstore xcryptecb xcryptcbc xcryptctr xcryptcfb xcryptofb montmul xsha1 xsha256 llwpcb slwpcb lwpval lwpins vfmaddpd vfmaddps vfmaddsd vfmaddss vfmaddsubpd vfmaddsubps vfmsubaddpd vfmsubaddps vfmsubpd vfmsubps vfmsubsd vfmsubss vfnmaddpd vfnmaddps vfnmaddsd vfnmaddss vfnmsubpd vfnmsubps vfnmsubsd vfnmsubss vfrczpd vfrczps vfrczsd vfrczss vpcmov vpcomb vpcomd vpcomq vpcomub vpcomud vpcomuq vpcomuw vpcomw vphaddbd vphaddbq vphaddbw vphadddq vphaddubd vphaddubq vphaddubw vphaddudq vphadduwd vphadduwq vphaddwd vphaddwq vphsubbw vphsubdq vphsubwd vpmacsdd vpmacsdqh vpmacsdql vpmacssdd vpmacssdqh vpmacssdql vpmacsswd vpmacssww vpmacswd vpmacsww vpmadcsswd vpmadcswd vpperm vprotb vprotd vprotq vprotw vpshab vpshad vpshaq vpshaw vpshlb vpshld vpshlq vpshlw vbroadcasti128 vpblendd vpbroadcastb vpbroadcastw vpbroadcastd vpbroadcastq vpermd vpermpd vpermps vpermq vperm2i128 vextracti128 vinserti128 vpmaskmovd vpmaskmovq vpsllvd vpsllvq vpsravd vpsrlvd vpsrlvq vgatherdpd vgatherqpd vgatherdps vgatherqps vpgatherdd vpgatherqd vpgatherdq vpgatherqq xabort xbegin xend xtest andn bextr blci blcic blsi blsic blcfill blsfill blcmsk blsmsk blsr blcs bzhi mulx pdep pext rorx sarx shlx shrx tzcnt tzmsk t1mskc valignd valignq vblendmpd vblendmps vbroadcastf32x4 vbroadcastf64x4 vbroadcasti32x4 vbroadcasti64x4 vcompresspd vcompressps vcvtpd2udq vcvtps2udq vcvtsd2usi vcvtss2usi vcvttpd2udq vcvttps2udq vcvttsd2usi vcvttss2usi vcvtudq2pd vcvtudq2ps vcvtusi2sd vcvtusi2ss vexpandpd vexpandps vextractf32x4 vextractf64x4 vextracti32x4 vextracti64x4 vfixupimmpd vfixupimmps vfixupimmsd vfixupimmss vgetexppd vgetexpps vgetexpsd vgetexpss vgetmantpd vgetmantps vgetmantsd vgetmantss vinsertf32x4 vinsertf64x4 vinserti32x4 vinserti64x4 vmovdqa32 vmovdqa64 vmovdqu32 vmovdqu64 vpabsq vpandd vpandnd vpandnq vpandq vpblendmd vpblendmq vpcmpltd vpcmpled vpcmpneqd vpcmpnltd vpcmpnled vpcmpd vpcmpltq vpcmpleq vpcmpneqq vpcmpnltq vpcmpnleq vpcmpq vpcmpequd vpcmpltud vpcmpleud vpcmpnequd vpcmpnltud vpcmpnleud vpcmpud vpcmpequq vpcmpltuq vpcmpleuq vpcmpnequq vpcmpnltuq vpcmpnleuq vpcmpuq vpcompressd vpcompressq vpermi2d vpermi2pd vpermi2ps vpermi2q vpermt2d vpermt2pd vpermt2ps vpermt2q vpexpandd vpexpandq vpmaxsq vpmaxuq vpminsq vpminuq vpmovdb vpmovdw vpmovqb vpmovqd vpmovqw vpmovsdb vpmovsdw vpmovsqb vpmovsqd vpmovsqw vpmovusdb vpmovusdw vpmovusqb vpmovusqd vpmovusqw vpord vporq vprold vprolq vprolvd vprolvq vprord vprorq vprorvd vprorvq vpscatterdd vpscatterdq vpscatterqd vpscatterqq vpsraq vpsravq vpternlogd vpternlogq vptestmd vptestmq vptestnmd vptestnmq vpxord vpxorq vrcp14pd vrcp14ps vrcp14sd vrcp14ss vrndscalepd vrndscaleps vrndscalesd vrndscaless vrsqrt14pd vrsqrt14ps vrsqrt14sd vrsqrt14ss vscalefpd vscalefps vscalefsd vscalefss vscatterdpd vscatterdps vscatterqpd vscatterqps vshuff32x4 vshuff64x2 vshufi32x4 vshufi64x2 kandnw kandw kmovw knotw kortestw korw kshiftlw kshiftrw kunpckbw kxnorw kxorw vpbroadcastmb2q vpbroadcastmw2d vpconflictd vpconflictq vplzcntd vplzcntq vexp2pd vexp2ps vrcp28pd vrcp28ps vrcp28sd vrcp28ss vrsqrt28pd vrsqrt28ps vrsqrt28sd vrsqrt28ss vgatherpf0dpd vgatherpf0dps vgatherpf0qpd vgatherpf0qps vgatherpf1dpd vgatherpf1dps vgatherpf1qpd vgatherpf1qps vscatterpf0dpd vscatterpf0dps vscatterpf0qpd vscatterpf0qps vscatterpf1dpd vscatterpf1dps vscatterpf1qpd vscatterpf1qps prefetchwt1 bndmk bndcl bndcu bndcn bndmov bndldx bndstx sha1rnds4 sha1nexte sha1msg1 sha1msg2 sha256rnds2 sha256msg1 sha256msg2 hint_nop0 hint_nop1 hint_nop2 hint_nop3 hint_nop4 hint_nop5 hint_nop6 hint_nop7 hint_nop8 hint_nop9 hint_nop10 hint_nop11 hint_nop12 hint_nop13 hint_nop14 hint_nop15 hint_nop16 hint_nop17 hint_nop18 hint_nop19 hint_nop20 hint_nop21 hint_nop22 hint_nop23 hint_nop24 hint_nop25 hint_nop26 hint_nop27 hint_nop28 hint_nop29 hint_nop30 hint_nop31 hint_nop32 hint_nop33 hint_nop34 hint_nop35 hint_nop36 hint_nop37 hint_nop38 hint_nop39 hint_nop40 hint_nop41 hint_nop42 hint_nop43 hint_nop44 hint_nop45 hint_nop46 hint_nop47 hint_nop48 hint_nop49 hint_nop50 hint_nop51 hint_nop52 hint_nop53 hint_nop54 hint_nop55 hint_nop56 hint_nop57 hint_nop58 hint_nop59 hint_nop60 hint_nop61 hint_nop62 hint_nop63", "object-key-init"),
        built_in: cc11001100_hook("built_in", "ip eip rip al ah bl bh cl ch dl dh sil dil bpl spl r8b r9b r10b r11b r12b r13b r14b r15b ax bx cx dx si di bp sp r8w r9w r10w r11w r12w r13w r14w r15w eax ebx ecx edx esi edi ebp esp eip r8d r9d r10d r11d r12d r13d r14d r15d rax rbx rcx rdx rsi rdi rbp rsp r8 r9 r10 r11 r12 r13 r14 r15 cs ds es fs gs ss st st0 st1 st2 st3 st4 st5 st6 st7 mm0 mm1 mm2 mm3 mm4 mm5 mm6 mm7 xmm0  xmm1  xmm2  xmm3  xmm4  xmm5  xmm6  xmm7  xmm8  xmm9 xmm10  xmm11 xmm12 xmm13 xmm14 xmm15 xmm16 xmm17 xmm18 xmm19 xmm20 xmm21 xmm22 xmm23 xmm24 xmm25 xmm26 xmm27 xmm28 xmm29 xmm30 xmm31 ymm0  ymm1  ymm2  ymm3  ymm4  ymm5  ymm6  ymm7  ymm8  ymm9 ymm10  ymm11 ymm12 ymm13 ymm14 ymm15 ymm16 ymm17 ymm18 ymm19 ymm20 ymm21 ymm22 ymm23 ymm24 ymm25 ymm26 ymm27 ymm28 ymm29 ymm30 ymm31 zmm0  zmm1  zmm2  zmm3  zmm4  zmm5  zmm6  zmm7  zmm8  zmm9 zmm10  zmm11 zmm12 zmm13 zmm14 zmm15 zmm16 zmm17 zmm18 zmm19 zmm20 zmm21 zmm22 zmm23 zmm24 zmm25 zmm26 zmm27 zmm28 zmm29 zmm30 zmm31 k0 k1 k2 k3 k4 k5 k6 k7 bnd0 bnd1 bnd2 bnd3 cr0 cr1 cr2 cr3 cr4 cr8 dr0 dr1 dr2 dr3 dr8 tr3 tr4 tr5 tr6 tr7 r0 r1 r2 r3 r4 r5 r6 r7 r0b r1b r2b r3b r4b r5b r6b r7b r0w r1w r2w r3w r4w r5w r6w r7w r0d r1d r2d r3d r4d r5d r6d r7d r0h r1h r2h r3h r0l r1l r2l r3l r4l r5l r6l r7l r8l r9l r10l r11l r12l r13l r14l r15l db dw dd dq dt ddq do dy dz resb resw resd resq rest resdq reso resy resz incbin equ times byte word dword qword nosplit rel abs seg wrt strict near far a32 ptr", "object-key-init"),
        meta: cc11001100_hook("meta", "%define %xdefine %+ %undef %defstr %deftok %assign %strcat %strlen %substr %rotate %elif %else %endif %if %ifmacro %ifctx %ifidn %ifidni %ifid %ifnum %ifstr %iftoken %ifempty %ifenv %error %warning %fatal %rep %endrep %include %push %pop %repl %pathsearch %depend %use %arg %stacksize %local %line %comment %endcomment .nolist __FILE__ __LINE__ __SECT__  __BITS__ __OUTPUT_FORMAT__ __DATE__ __TIME__ __DATE_NUM__ __TIME_NUM__ __UTC_DATE__ __UTC_TIME__ __UTC_DATE_NUM__ __UTC_TIME_NUM__  __PASS__ struc endstruc istruc at iend align alignb sectalign daz nodaz up down zero default option assume public bits use16 use32 use64 default section segment absolute extern global common cpu float __utf16__ __utf16le__ __utf16be__ __utf32__ __utf32le__ __utf32be__ __float8__ __float16__ __float32__ __float64__ __float80m__ __float80e__ __float128l__ __float128h__ __Infinity__ __QNaN__ __SNaN__ Inf NaN QNaN SNaN float8 float16 float32 float64 float80m float80e float128l float128h __FLOAT_DAZ__ __FLOAT_ROUND__ __FLOAT__", "object-key-init")
      },
      contains: cc11001100_hook("contains", [e.COMMENT(";", "$", {
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }), {
        className: cc11001100_hook("className", "number", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", "\\b(?:([0-9][0-9_]*)?\\.[0-9_]*(?:[eE][+-]?[0-9_]+)?|(0[Xx])?[0-9][0-9_]*(\\.[0-9_]*)?(?:[pP](?:[+-]?[0-9_]+)?)?)\\b", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\$[0-9][0-9A-Fa-f]*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(?:[0-9A-Fa-f][0-9A-Fa-f_]*[Hh]|[0-9][0-9_]*[DdTt]?|[0-7][0-7_]*[QqOo]|[0-1][0-1_]*[BbYy])\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(?:0[Xx][0-9A-Fa-f_]+|0[DdTt][0-9_]+|0[QqOo][0-7_]+|0[BbYy][0-1_]+)\\b", "object-key-init")
        }], "object-key-init")
      }, e.QUOTE_STRING_MODE, {
        className: cc11001100_hook("className", "string", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", "'", "object-key-init"),
          end: cc11001100_hook("end", "[^\\\\]'", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "`", "object-key-init"),
          end: cc11001100_hook("end", "[^\\\\]`", "object-key-init")
        }], "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        className: cc11001100_hook("className", "symbol", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "^\\s*%%[A-Za-z0-9_$#@~.?]*:", "object-key-init")
        }], "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        className: cc11001100_hook("className", "subst", "object-key-init"),
        begin: cc11001100_hook("begin", "%[0-9]+", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        className: cc11001100_hook("className", "subst", "object-key-init"),
        begin: cc11001100_hook("begin", "%!S+", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        className: cc11001100_hook("className", "meta", "object-key-init"),
        begin: cc11001100_hook("begin", /^\s*\.[\w_-]+/, "object-key-init")
      }], "object-key-init")
    }), "object-key-init"),
    grmr_mipsasm: cc11001100_hook("grmr_mipsasm", e => ({
      name: cc11001100_hook("name", "MIPS Assembly", "object-key-init"),
      case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
      aliases: cc11001100_hook("aliases", ["mips"], "object-key-init"),
      keywords: {
        $pattern: cc11001100_hook("$pattern", "\\.?" + e.IDENT_RE, "object-key-init"),
        meta: cc11001100_hook("meta", ".2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ", "object-key-init"),
        built_in: cc11001100_hook("built_in", "$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 $16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 t0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 k0 k1 gp sp fp ra $f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 $f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt ", "object-key-init")
      },
      contains: cc11001100_hook("contains", [{
        className: cc11001100_hook("className", "keyword", "object-key-init"),
        begin: cc11001100_hook("begin", "\\b(addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(\\.hb)?|jr(\\.hb)?|lbu?|lhu?|ll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|srlv?|subu?|sw[lr]?|xori?|wsbh|abs\\.[sd]|add\\.[sd]|alnv.ps|bc1[ft]l?|c\\.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et])\\.[sd]|(ceil|floor|round|trunc)\\.[lw]\\.[sd]|cfc1|cvt\\.d\\.[lsw]|cvt\\.l\\.[dsw]|cvt\\.ps\\.s|cvt\\.s\\.[dlw]|cvt\\.s\\.p[lu]|cvt\\.w\\.[dls]|div\\.[ds]|ldx?c1|luxc1|lwx?c1|madd\\.[sd]|mfc1|mov[fntz]?\\.[ds]|msub\\.[sd]|mth?c1|mul\\.[ds]|neg\\.[ds]|nmadd\\.[ds]|nmsub\\.[ds]|p[lu][lu]\\.ps|recip\\.fmt|r?sqrt\\.[ds]|sdx?c1|sub\\.[ds]|suxc1|swx?c1|break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|tlti?u?|tnei?|wait|wrpgpr)", "object-key-init"),
        end: cc11001100_hook("end", "\\s", "object-key-init")
      }, e.COMMENT("[;#](?!\\s*$)", "$"), e.C_BLOCK_COMMENT_MODE, e.QUOTE_STRING_MODE, {
        className: cc11001100_hook("className", "string", "object-key-init"),
        begin: cc11001100_hook("begin", "'", "object-key-init"),
        end: cc11001100_hook("end", "[^\\\\]'", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        className: cc11001100_hook("className", "title", "object-key-init"),
        begin: cc11001100_hook("begin", "\\|", "object-key-init"),
        end: cc11001100_hook("end", "\\|", "object-key-init"),
        illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        className: cc11001100_hook("className", "number", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", "0x[0-9a-f]+", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b-?\\d+", "object-key-init")
        }], "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        className: cc11001100_hook("className", "symbol", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", "^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "^\\s*[0-9]+:", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "[0-9]+[bf]", "object-key-init")
        }], "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }], "object-key-init"),
      illegal: cc11001100_hook("illegal", /\//, "object-key-init")
    }), "object-key-init"),
    grmr_basic: cc11001100_hook("grmr_basic", e => ({
      name: cc11001100_hook("name", "BASIC", "object-key-init"),
      case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
      illegal: cc11001100_hook("illegal", "^.", "object-key-init"),
      keywords: {
        $pattern: cc11001100_hook("$pattern", "[a-zA-Z][a-zA-Z0-9_$%!#]*", "object-key-init"),
        keyword: cc11001100_hook("keyword", ["ABS", "ASC", "AND", "ATN", "AUTO|0", "BEEP", "BLOAD|10", "BSAVE|10", "CALL", "CALLS", "CDBL", "CHAIN", "CHDIR", "CHR$|10", "CINT", "CIRCLE", "CLEAR", "CLOSE", "CLS", "COLOR", "COM", "COMMON", "CONT", "COS", "CSNG", "CSRLIN", "CVD", "CVI", "CVS", "DATA", "DATE$", "DEFDBL", "DEFINT", "DEFSNG", "DEFSTR", "DEF|0", "SEG", "USR", "DELETE", "DIM", "DRAW", "EDIT", "END", "ENVIRON", "ENVIRON$", "EOF", "EQV", "ERASE", "ERDEV", "ERDEV$", "ERL", "ERR", "ERROR", "EXP", "FIELD", "FILES", "FIX", "FOR|0", "FRE", "GET", "GOSUB|10", "GOTO", "HEX$", "IF", "THEN", "ELSE|0", "INKEY$", "INP", "INPUT", "INPUT#", "INPUT$", "INSTR", "IMP", "INT", "IOCTL", "IOCTL$", "KEY", "ON", "OFF", "LIST", "KILL", "LEFT$", "LEN", "LET", "LINE", "LLIST", "LOAD", "LOC", "LOCATE", "LOF", "LOG", "LPRINT", "USING", "LSET", "MERGE", "MID$", "MKDIR", "MKD$", "MKI$", "MKS$", "MOD", "NAME", "NEW", "NEXT", "NOISE", "NOT", "OCT$", "ON", "OR", "PEN", "PLAY", "STRIG", "OPEN", "OPTION", "BASE", "OUT", "PAINT", "PALETTE", "PCOPY", "PEEK", "PMAP", "POINT", "POKE", "POS", "PRINT", "PRINT]", "PSET", "PRESET", "PUT", "RANDOMIZE", "READ", "REM", "RENUM", "RESET|0", "RESTORE", "RESUME", "RETURN|0", "RIGHT$", "RMDIR", "RND", "RSET", "RUN", "SAVE", "SCREEN", "SGN", "SHELL", "SIN", "SOUND", "SPACE$", "SPC", "SQR", "STEP", "STICK", "STOP", "STR$", "STRING$", "SWAP", "SYSTEM", "TAB", "TAN", "TIME$", "TIMER", "TROFF", "TRON", "TO", "USR", "VAL", "VARPTR", "VARPTR$", "VIEW", "WAIT", "WHILE", "WEND", "WIDTH", "WINDOW", "WRITE", "XOR"], "object-key-init")
      },
      contains: cc11001100_hook("contains", [e.QUOTE_STRING_MODE, e.COMMENT("REM", "$", {
        relevance: cc11001100_hook("relevance", 10, "object-key-init")
      }), e.COMMENT("'", "$", {
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }), {
        className: cc11001100_hook("className", "symbol", "object-key-init"),
        begin: cc11001100_hook("begin", "^[0-9]+ ", "object-key-init"),
        relevance: cc11001100_hook("relevance", 10, "object-key-init")
      }, {
        className: cc11001100_hook("className", "number", "object-key-init"),
        begin: cc11001100_hook("begin", "\\b\\d+(\\.\\d+)?([edED]\\d+)?[#!]?", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        className: cc11001100_hook("className", "number", "object-key-init"),
        begin: cc11001100_hook("begin", "(&[hH][0-9a-fA-F]{1,4})", "object-key-init")
      }, {
        className: cc11001100_hook("className", "number", "object-key-init"),
        begin: cc11001100_hook("begin", "(&[oO][0-7]{1,6})", "object-key-init")
      }], "object-key-init")
    }), "object-key-init"),
    grmr_cmake: cc11001100_hook("grmr_cmake", e => ({
      name: cc11001100_hook("name", "CMake", "object-key-init"),
      aliases: cc11001100_hook("aliases", ["cmake.in"], "object-key-init"),
      case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
      keywords: {
        keyword: cc11001100_hook("keyword", "break cmake_host_system_information cmake_minimum_required cmake_parse_arguments cmake_policy configure_file continue elseif else endforeach endfunction endif endmacro endwhile execute_process file find_file find_library find_package find_path find_program foreach function get_cmake_property get_directory_property get_filename_component get_property if include include_guard list macro mark_as_advanced math message option return separate_arguments set_directory_properties set_property set site_name string unset variable_watch while add_compile_definitions add_compile_options add_custom_command add_custom_target add_definitions add_dependencies add_executable add_library add_link_options add_subdirectory add_test aux_source_directory build_command create_test_sourcelist define_property enable_language enable_testing export fltk_wrap_ui get_source_file_property get_target_property get_test_property include_directories include_external_msproject include_regular_expression install link_directories link_libraries load_cache project qt_wrap_cpp qt_wrap_ui remove_definitions set_source_files_properties set_target_properties set_tests_properties source_group target_compile_definitions target_compile_features target_compile_options target_include_directories target_link_directories target_link_libraries target_link_options target_sources try_compile try_run ctest_build ctest_configure ctest_coverage ctest_empty_binary_directory ctest_memcheck ctest_read_custom_files ctest_run_script ctest_sleep ctest_start ctest_submit ctest_test ctest_update ctest_upload build_name exec_program export_library_dependencies install_files install_programs install_targets load_command make_directory output_required_files remove subdir_depends subdirs use_mangled_mesa utility_source variable_requires write_file qt5_use_modules qt5_use_package qt5_wrap_cpp on off true false and or not command policy target test exists is_newer_than is_directory is_symlink is_absolute matches less greater equal less_equal greater_equal strless strgreater strequal strless_equal strgreater_equal version_less version_greater version_equal version_less_equal version_greater_equal in_list defined", "object-key-init")
      },
      contains: cc11001100_hook("contains", [{
        className: cc11001100_hook("className", "variable", "object-key-init"),
        begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
        end: cc11001100_hook("end", /\}/, "object-key-init")
      }, e.HASH_COMMENT_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE], "object-key-init")
    }), "object-key-init"),
    grmr_delphi: cc11001100_hook("grmr_delphi", e => {
      const n = cc11001100_hook("n", ["exports", "register", "file", "shl", "array", "record", "property", "for", "mod", "while", "set", "ally", "label", "uses", "raise", "not", "stored", "class", "safecall", "var", "interface", "or", "private", "static", "exit", "index", "inherited", "to", "else", "stdcall", "override", "shr", "asm", "far", "resourcestring", "finalization", "packed", "virtual", "out", "and", "protected", "library", "do", "xorwrite", "goto", "near", "function", "end", "div", "overload", "object", "unit", "begin", "string", "on", "inline", "repeat", "until", "destructor", "write", "message", "program", "with", "read", "initialization", "except", "default", "nil", "if", "case", "cdecl", "in", "downto", "threadvar", "of", "try", "pascal", "const", "external", "constructor", "type", "public", "then", "implementation", "finally", "published", "procedure", "absolute", "reintroduce", "operator", "as", "is", "abstract", "alias", "assembler", "bitpacked", "break", "continue", "cppdecl", "cvar", "enumerator", "experimental", "platform", "deprecated", "unimplemented", "dynamic", "export", "far16", "forward", "generic", "helper", "implements", "interrupt", "iochecks", "local", "name", "nodefault", "noreturn", "nostackframe", "oldfpccall", "otherwise", "saveregisters", "softfloat", "specialize", "strict", "unaligned", "varargs"], "var-init"),
        s = cc11001100_hook("s", [e.C_LINE_COMMENT_MODE, e.COMMENT(/\{/, /\}/, {
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }), e.COMMENT(/\(\*/, /\*\)/, {
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        })], "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\{\$/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(\*\$/, "object-key-init"),
            end: cc11001100_hook("end", /\*\)/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /'/, "object-key-init"),
          end: cc11001100_hook("end", /'/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /''/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /(#\d+)+/, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          begin: cc11001100_hook("begin", e.IDENT_RE + "\\s*=\\s*class\\s*\\(", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.TITLE_MODE], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "function constructor destructor procedure", "object-key-init"),
          end: cc11001100_hook("end", /[:;]/, "object-key-init"),
          keywords: cc11001100_hook("keywords", "function constructor|10 destructor|10 procedure|10", "object-key-init"),
          contains: cc11001100_hook("contains", [e.TITLE_MODE, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", n, "object-key-init"),
            contains: cc11001100_hook("contains", [a, r, t].concat(s), "object-key-init")
          }, t].concat(s), "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Delphi", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["dpr", "dfm", "pas", "pascal"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", n, "object-key-init"),
        illegal: cc11001100_hook("illegal", /"|\$[G-Zg-z]|\/\*|<\/|\|/, "object-key-init"),
        contains: cc11001100_hook("contains", [a, r, e.NUMBER_MODE, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\$[0-9A-Fa-f]+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "&[0-7]+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "%[01]+", "object-key-init")
          }], "object-key-init")
        }, i, o, t].concat(s), "object-key-init")
      };
    }, "object-key-init"),
    grmr_dockerfile: cc11001100_hook("grmr_dockerfile", e => ({
      name: cc11001100_hook("name", "Dockerfile", "object-key-init"),
      aliases: cc11001100_hook("aliases", ["docker"], "object-key-init"),
      case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
      keywords: cc11001100_hook("keywords", ["from", "maintainer", "expose", "env", "arg", "user", "onbuild", "stopsignal"], "object-key-init"),
      contains: cc11001100_hook("contains", [e.HASH_COMMENT_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.NUMBER_MODE, {
        beginKeywords: cc11001100_hook("beginKeywords", "run cmd entrypoint volume add copy workdir label healthcheck shell", "object-key-init"),
        starts: {
          end: cc11001100_hook("end", /[^\\]$/, "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "bash", "object-key-init")
        }
      }], "object-key-init"),
      illegal: cc11001100_hook("illegal", "</", "object-key-init")
    }), "object-key-init"),
    grmr_erlang: cc11001100_hook("grmr_erlang", e => {
      const n = cc11001100_hook("n", "[a-z'][a-zA-Z0-9_']*", "var-init"),
        s = cc11001100_hook("s", "(" + n + ":" + n + "|" + n + ")", "var-init"),
        t = cc11001100_hook("t", {
          keyword: cc11001100_hook("keyword", "after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if let not of orelse|10 query receive rem try when xor", "object-key-init"),
          literal: cc11001100_hook("literal", "false true", "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", e.COMMENT("%", "$"), "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(\\d+(_\\d+)*#[a-fA-F0-9]+(_[a-fA-F0-9]+)*|\\d+(_\\d+)*(\\.\\d+(_\\d+)*)?([eE][-+]?\\d+)?)", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          begin: cc11001100_hook("begin", "fun\\s+" + n + "/\\d+", "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", s + "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", s, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          begin: cc11001100_hook("begin", "\\b_([A-Z][A-Za-z0-9_]*)?", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", {
          begin: cc11001100_hook("begin", "[A-Z][a-zA-Z0-9_]*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", {
          begin: cc11001100_hook("begin", "#" + e.UNDERSCORE_IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "#" + e.UNDERSCORE_IDENT_RE, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", {
          beginKeywords: cc11001100_hook("beginKeywords", "fun receive if try case", "object-key-init"),
          end: cc11001100_hook("end", "end", "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, "var-init");
      m.contains = cc11001100_hook("m.contains", [a, i, e.inherit(e.APOS_STRING_MODE, {
        className: cc11001100_hook("className", "", "object-key-init")
      }), m, o, e.QUOTE_STRING_MODE, r, c, l, d, p], "assign");
      const u = cc11001100_hook("u", [a, i, m, o, e.QUOTE_STRING_MODE, r, c, l, d, p], "var-init");
      o.contains[1].contains = cc11001100_hook("o.contains[1].contains", u, "assign"), c.contains = cc11001100_hook("c.contains", u, "assign"), p.contains[1].contains = cc11001100_hook("p.contains[1].contains", u, "assign");
      const b = cc11001100_hook("b", {
        className: cc11001100_hook("className", "params", "object-key-init"),
        begin: cc11001100_hook("begin", "\\(", "object-key-init"),
        end: cc11001100_hook("end", "\\)", "object-key-init"),
        contains: cc11001100_hook("contains", u, "object-key-init")
      }, "var-init");
      return {
        name: cc11001100_hook("name", "Erlang", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["erl"], "object-key-init"),
        keywords: cc11001100_hook("keywords", t, "object-key-init"),
        illegal: cc11001100_hook("illegal", "(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", "^" + n + "\\s*\\(", "object-key-init"),
          end: cc11001100_hook("end", "->", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", "\\(|#|//|/\\*|\\\\|:|;", "object-key-init"),
          contains: cc11001100_hook("contains", [b, e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", n, "object-key-init")
          })], "object-key-init"),
          starts: {
            end: cc11001100_hook("end", ";|\\.", "object-key-init"),
            keywords: cc11001100_hook("keywords", t, "object-key-init"),
            contains: cc11001100_hook("contains", u, "object-key-init")
          }
        }, a, {
          begin: cc11001100_hook("begin", "^-", "object-key-init"),
          end: cc11001100_hook("end", "\\.", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", "-" + e.IDENT_RE, "object-key-init"),
            keyword: cc11001100_hook("keyword", ["-module", "-record", "-undef", "-export", "-ifdef", "-ifndef", "-author", "-copyright", "-doc", "-vsn", "-import", "-include", "-include_lib", "-compile", "-define", "-else", "-endif", "-file", "-behaviour", "-behavior", "-spec"].map(e => e + "|1.5").join(" "), "object-key-init")
          },
          contains: cc11001100_hook("contains", [b], "object-key-init")
        }, r, e.QUOTE_STRING_MODE, p, l, d, c, {
          begin: cc11001100_hook("begin", /\.$/, "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_fsharp: cc11001100_hook("grmr_fsharp", e => {
      const n = cc11001100_hook("n", {
          scope: cc11001100_hook("scope", "keyword", "object-key-init"),
          match: cc11001100_hook("match", /\b(yield|return|let|do|match|use)!/, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", ["bool", "byte", "sbyte", "int8", "int16", "int32", "uint8", "uint16", "uint32", "int", "uint", "int64", "uint64", "nativeint", "unativeint", "decimal", "float", "double", "float32", "single", "char", "string", "unit", "bigint", "option", "voption", "list", "array", "seq", "byref", "exn", "inref", "nativeptr", "obj", "outref", "voidptr", "Result"], "var-init"),
        t = cc11001100_hook("t", {
          keyword: cc11001100_hook("keyword", ["abstract", "and", "as", "assert", "base", "begin", "class", "default", "delegate", "do", "done", "downcast", "downto", "elif", "else", "end", "exception", "extern", "finally", "fixed", "for", "fun", "function", "global", "if", "in", "inherit", "inline", "interface", "internal", "lazy", "let", "match", "member", "module", "mutable", "namespace", "new", "of", "open", "or", "override", "private", "public", "rec", "return", "static", "struct", "then", "to", "try", "type", "upcast", "use", "val", "void", "when", "while", "with", "yield"], "object-key-init"),
          literal: cc11001100_hook("literal", ["true", "false", "null", "Some", "None", "Ok", "Error", "infinity", "infinityf", "nan", "nanf"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["not", "ref", "raise", "reraise", "dict", "readOnlyDict", "set", "get", "enum", "sizeof", "typeof", "typedefof", "nameof", "nullArg", "invalidArg", "invalidOp", "id", "fst", "snd", "ignore", "lock", "using", "box", "unbox", "tryUnbox", "printf", "printfn", "sprintf", "eprintf", "eprintfn", "fprintf", "fprintfn", "failwith", "failwithf"], "object-key-init"),
          "variable.constant": cc11001100_hook("variable.constant", ["__LINE__", "__SOURCE_DIRECTORY__", "__SOURCE_FILE__"], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          variants: cc11001100_hook("variants", [e.COMMENT(/\(\*(?!\))/, /\*\)/, {
            contains: cc11001100_hook("contains", ["self"], "object-key-init")
          }), e.C_LINE_COMMENT_MODE], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          scope: cc11001100_hook("scope", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", /``/, "object-key-init"),
          end: cc11001100_hook("end", /``/, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", /\B('|\^)/, "var-init"),
        o = cc11001100_hook("o", {
          scope: cc11001100_hook("scope", "symbol", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", g(i, /``.*?``/), "object-key-init")
          }, {
            match: cc11001100_hook("match", g(i, e.UNDERSCORE_IDENT_RE), "object-key-init")
          }], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", ({
          includeEqual: e
        }) => {
          let n;
          n = cc11001100_hook("n", e ? "!%&*+-/<=>@^|~?" : "!%&*+-/<>@^|~?", "assign");
          const s = cc11001100_hook("s", g("[", ...Array.from(n).map(d), "]"), "var-init"),
            t = cc11001100_hook("t", _(s, /\./), "var-init"),
            a = cc11001100_hook("a", g(t, m(t)), "var-init"),
            r = cc11001100_hook("r", _(g(a, t, "*"), g(s, "+")), "var-init");
          return {
            scope: cc11001100_hook("scope", "operator", "object-key-init"),
            match: cc11001100_hook("match", _(r, /:\?>/, /:\?/, /:>/, /:=/, /::?/, /\$/), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          };
        }, "var-init"),
        l = cc11001100_hook("l", c({
          includeEqual: cc11001100_hook("includeEqual", !0, "object-key-init")
        }), "var-init"),
        p = cc11001100_hook("p", c({
          includeEqual: cc11001100_hook("includeEqual", !1, "object-key-init")
        }), "var-init"),
        u = cc11001100_hook("u", (n, i) => ({
          begin: cc11001100_hook("begin", g(n, m(g(/\s*/, _(/\w/, /'/, /\^/, /#/, /``/, /\(/, /{\|/)))), "object-key-init"),
          beginScope: cc11001100_hook("beginScope", i, "object-key-init"),
          end: cc11001100_hook("end", m(_(/\n/, /=/)), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: cc11001100_hook("keywords", e.inherit(t, {
            type: cc11001100_hook("type", s, "object-key-init")
          }), "object-key-init"),
          contains: cc11001100_hook("contains", [a, o, e.inherit(r, {
            scope: cc11001100_hook("scope", null, "object-key-init")
          }), p], "object-key-init")
        }), "var-init"),
        b = cc11001100_hook("b", u(/:/, "operator"), "var-init"),
        v = cc11001100_hook("v", u(/\bof\b/, "keyword"), "var-init"),
        f = cc11001100_hook("f", {
          begin: cc11001100_hook("begin", [/(^|\s+)/, /type/, /\s+/, /[a-zA-Z_](\w|')*/], "object-key-init"),
          beginScope: {
            2: cc11001100_hook(2, "keyword", "object-key-init"),
            4: cc11001100_hook(4, "title.class", "object-key-init")
          },
          end: cc11001100_hook("end", m(/\(|=|$/), "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init"),
          contains: cc11001100_hook("contains", [a, e.inherit(r, {
            scope: cc11001100_hook("scope", null, "object-key-init")
          }), o, {
            scope: cc11001100_hook("scope", "operator", "object-key-init"),
            match: cc11001100_hook("match", /<|>/, "object-key-init")
          }, b], "object-key-init")
        }, "var-init"),
        h = cc11001100_hook("h", {
          scope: cc11001100_hook("scope", "computation-expression", "object-key-init"),
          match: cc11001100_hook("match", /\b[_a-z]\w*(?=\s*\{)/, "object-key-init")
        }, "var-init"),
        E = cc11001100_hook("E", {
          begin: cc11001100_hook("begin", [/^\s*/, g(/#/, _("if", "else", "endif", "line", "nowarn", "light", "r", "i", "I", "load", "time", "help", "quit")), /\b/], "object-key-init"),
          beginScope: {
            2: cc11001100_hook(2, "meta", "object-key-init")
          },
          end: cc11001100_hook("end", m(/\s|$/), "object-key-init")
        }, "var-init"),
        w = cc11001100_hook("w", {
          variants: cc11001100_hook("variants", [e.BINARY_NUMBER_MODE, e.C_NUMBER_MODE], "object-key-init")
        }, "var-init"),
        y = cc11001100_hook("y", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
        }, "var-init"),
        N = cc11001100_hook("N", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /@"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            match: cc11001100_hook("match", /""/, "object-key-init")
          }, e.BACKSLASH_ESCAPE], "object-key-init")
        }, "var-init"),
        x = cc11001100_hook("x", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"""/, "object-key-init"),
          end: cc11001100_hook("end", /"""/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 2, "object-key-init")
        }, "var-init"),
        k = cc11001100_hook("k", {
          scope: cc11001100_hook("scope", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init")
        }, "var-init"),
        O = cc11001100_hook("O", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /\$"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            match: cc11001100_hook("match", /\{\{/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\}\}/, "object-key-init")
          }, e.BACKSLASH_ESCAPE, k], "object-key-init")
        }, "var-init"),
        M = cc11001100_hook("M", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /(\$@|@\$)"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            match: cc11001100_hook("match", /\{\{/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\}\}/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /""/, "object-key-init")
          }, e.BACKSLASH_ESCAPE, k], "object-key-init")
        }, "var-init"),
        S = cc11001100_hook("S", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /\$"""/, "object-key-init"),
          end: cc11001100_hook("end", /"""/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            match: cc11001100_hook("match", /\{\{/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\}\}/, "object-key-init")
          }, k], "object-key-init"),
          relevance: cc11001100_hook("relevance", 2, "object-key-init")
        }, "var-init"),
        C = cc11001100_hook("C", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          match: cc11001100_hook("match", g(/'/, _(/[^\\']/, /\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8})/), /'/), "object-key-init")
        }, "var-init");
      return k.contains = cc11001100_hook("k.contains", [M, O, N, y, C, n, a, r, b, h, E, w, o, l], "assign"), {
        name: cc11001100_hook("name", "F#", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["fs", "f#"], "object-key-init"),
        keywords: cc11001100_hook("keywords", t, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\/\*/, "object-key-init"),
        classNameAliases: {
          "computation-expression": cc11001100_hook("computation-expression", "keyword", "object-key-init")
        },
        contains: cc11001100_hook("contains", [n, {
          variants: cc11001100_hook("variants", [S, M, O, x, N, y, C], "object-key-init")
        }, a, r, f, {
          scope: cc11001100_hook("scope", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /\[</, "object-key-init"),
          end: cc11001100_hook("end", />\]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 2, "object-key-init"),
          contains: cc11001100_hook("contains", [r, x, N, y, C, w], "object-key-init")
        }, v, b, h, E, w, o, l], "object-key-init")
      };
    }, "object-key-init"),
    grmr_haskell: cc11001100_hook("grmr_haskell", e => {
      const n = cc11001100_hook("n", {
          variants: cc11001100_hook("variants", [e.COMMENT("--", "$"), e.COMMENT(/\{-/, /-\}/, {
            contains: cc11001100_hook("contains", ["self"], "object-key-init")
          })], "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /\{-#/, "object-key-init"),
          end: cc11001100_hook("end", /#-\}/, "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "^#", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b[A-Z][\\w']*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          begin: cc11001100_hook("begin", "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          illegal: cc11001100_hook("illegal", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [s, t, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", "\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?", "object-key-init")
          }, e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", "[_a-z][\\w']*", "object-key-init")
          }), n], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", "([0-9a-fA-F]_*)+", "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", `\\b0[xX]_*(${i})(\\.(${i}))?([pP][+-]?(([0-9]_*)+))?\\b`, "object-key-init")
          }, {
            match: cc11001100_hook("match", "\\b0[oO](([0-7]_*)+)\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", "\\b0[bB](([01]_*)+)\\b", "object-key-init")
          }], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Haskell", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["hs"], "object-key-init"),
        keywords: cc11001100_hook("keywords", "let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec", "object-key-init"),
        contains: cc11001100_hook("contains", [{
          beginKeywords: cc11001100_hook("beginKeywords", "module", "object-key-init"),
          end: cc11001100_hook("end", "where", "object-key-init"),
          keywords: cc11001100_hook("keywords", "module where", "object-key-init"),
          contains: cc11001100_hook("contains", [r, n], "object-key-init"),
          illegal: cc11001100_hook("illegal", "\\W\\.|;", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\bimport\\b", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          keywords: cc11001100_hook("keywords", "import qualified as hiding", "object-key-init"),
          contains: cc11001100_hook("contains", [r, n], "object-key-init"),
          illegal: cc11001100_hook("illegal", "\\W\\.|;", "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          begin: cc11001100_hook("begin", "^(\\s*)?(class|instance)\\b", "object-key-init"),
          end: cc11001100_hook("end", "where", "object-key-init"),
          keywords: cc11001100_hook("keywords", "class family instance where", "object-key-init"),
          contains: cc11001100_hook("contains", [a, r, n], "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(data|(new)?type)\\b", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          keywords: cc11001100_hook("keywords", "data family type newtype deriving", "object-key-init"),
          contains: cc11001100_hook("contains", [s, a, r, {
            begin: cc11001100_hook("begin", /\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init"),
            contains: cc11001100_hook("contains", r.contains, "object-key-init")
          }, n], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "default", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", [a, r, n], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "infix infixl infixr", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_NUMBER_MODE, n], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\bforeign\\b", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          keywords: cc11001100_hook("keywords", "foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe", "object-key-init"),
          contains: cc11001100_hook("contains", [a, e.QUOTE_STRING_MODE, n], "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "#!\\/usr\\/bin\\/env runhaskell", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init")
        }, s, t, e.QUOTE_STRING_MODE, o, a, e.inherit(e.TITLE_MODE, {
          begin: cc11001100_hook("begin", "^[_a-z][\\w']*", "object-key-init")
        }), n, {
          begin: cc11001100_hook("begin", "->|<-", "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_lisp: cc11001100_hook("grmr_lisp", e => {
      var n = cc11001100_hook("n", "[a-zA-Z_\\-+\\*\\/<=>&#][a-zA-Z0-9_\\-+*\\/<=>&#!]*", "var-init"),
        s = cc11001100_hook("s", "\\|[^]*?\\|", "var-init"),
        t = cc11001100_hook("t", "(-|\\+)?\\d+(\\.\\d+|\\/\\d+)?((d|e|f|l|s|D|E|F|L|S)(\\+|-)?\\d+)?", "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "literal", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(t{1}|nil)\\b", "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", t, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#(b|B)[0-1]+(/[0-1]+)?", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#(o|O)[0-7]+(/[0-7]+)?", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#(x|X)[0-9a-fA-F]+(/[0-9a-fA-F]+)?", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#(c|C)\\(" + t + " +" + t, "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", e.inherit(e.QUOTE_STRING_MODE, {
          illegal: cc11001100_hook("illegal", null, "object-key-init")
        }), "var-init"),
        o = cc11001100_hook("o", e.COMMENT(";", "$", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", {
          begin: cc11001100_hook("begin", "\\*", "object-key-init"),
          end: cc11001100_hook("end", "\\*", "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", "[:&]" + n, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", {
          begin: cc11001100_hook("begin", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", {
          begin: cc11001100_hook("begin", s, "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", {
          contains: cc11001100_hook("contains", [r, i, c, l, {
            begin: cc11001100_hook("begin", "\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            contains: cc11001100_hook("contains", ["self", a, i, r, d], "object-key-init")
          }, d], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "['`]\\(", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\(quote ", "object-key-init"),
            end: cc11001100_hook("end", "\\)", "object-key-init"),
            keywords: {
              name: cc11001100_hook("name", "quote", "object-key-init")
            }
          }, {
            begin: cc11001100_hook("begin", "'" + s, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "'" + n, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "#'" + n + "(::" + n + ")*", "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          begin: cc11001100_hook("begin", "\\(\\s*", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", {
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      return b.contains = cc11001100_hook("b.contains", [{
        className: cc11001100_hook("className", "name", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", s, "object-key-init")
        }], "object-key-init")
      }, g], "assign"), g.contains = cc11001100_hook("g.contains", [m, u, b, a, r, i, o, c, l, p, d], "assign"), {
        name: cc11001100_hook("name", "Lisp", "object-key-init"),
        illegal: cc11001100_hook("illegal", /\S/, "object-key-init"),
        contains: cc11001100_hook("contains", [r, e.SHEBANG(), a, i, o, m, u, b, d], "object-key-init")
      };
    }, "object-key-init"),
    grmr_powershell: cc11001100_hook("grmr_powershell", e => {
      const n = cc11001100_hook("n", {
          $pattern: cc11001100_hook("$pattern", /-?[A-z\.\-]+\b/, "object-key-init"),
          keyword: cc11001100_hook("keyword", "if else foreach return do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catch hidden static parameter", "object-key-init"),
          built_in: cc11001100_hook("built_in", "ac asnp cat cd CFS chdir clc clear clhy cli clp cls clv cnsn compare copy cp cpi cpp curl cvpa dbp del diff dir dnsn ebp echo|0 epal epcsv epsn erase etsn exsn fc fhx fl ft fw gal gbp gc gcb gci gcm gcs gdr gerr ghy gi gin gjb gl gm gmo gp gps gpv group gsn gsnp gsv gtz gu gv gwmi h history icm iex ihy ii ipal ipcsv ipmo ipsn irm ise iwmi iwr kill lp ls man md measure mi mount move mp mv nal ndr ni nmo npssc nsn nv ogv oh popd ps pushd pwd r rbp rcjb rcsn rd rdr ren ri rjb rm rmdir rmo rni rnp rp rsn rsnp rujb rv rvpa rwmi sajb sal saps sasv sbp sc scb select set shcm si sl sleep sls sort sp spjb spps spsv start stz sujb sv swmi tee trcm type wget where wjb write", "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          begin: cc11001100_hook("begin", "`[\\s\\S]", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\$\B/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            begin: cc11001100_hook("begin", /\$this/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\$[\w\d][\w\d_:]*/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /@"/, "object-key-init"),
            end: cc11001100_hook("end", /^"@/, "object-key-init")
          }], "object-key-init"),
          contains: cc11001100_hook("contains", [s, t, {
            className: cc11001100_hook("className", "variable", "object-key-init"),
            begin: cc11001100_hook("begin", /\$[A-z]/, "object-key-init"),
            end: cc11001100_hook("end", /[^A-z]/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /'/, "object-key-init"),
            end: cc11001100_hook("end", /'/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /@'/, "object-key-init"),
            end: cc11001100_hook("end", /^'@/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", e.inherit(e.COMMENT(null, null), {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /#/, "object-key-init"),
            end: cc11001100_hook("end", /$/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /<#/, "object-key-init"),
            end: cc11001100_hook("end", /#>/, "object-key-init")
          }], "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/, "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "class enum", "object-key-init"),
          end: cc11001100_hook("end", /\s*[{]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.TITLE_MODE], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", /function\s+/, "object-key-init"),
          end: cc11001100_hook("end", /\s*\{|$/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "function", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            className: cc11001100_hook("className", "keyword", "object-key-init")
          }, {
            className: cc11001100_hook("className", "title", "object-key-init"),
            begin: cc11001100_hook("begin", /\w[\w\d]*((-)[\w\d]+)*/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            className: cc11001100_hook("className", "params", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [t], "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          begin: cc11001100_hook("begin", /using\s/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [a, r, {
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            begin: cc11001100_hook("begin", /(using|assembly|command|module|namespace|type)/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", /\[.*\]\s*[\w]+[ ]??\(/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            begin: cc11001100_hook("begin", "(".concat(n.keyword.toString().replace(/\s/g, "|"), ")\\b"), "object-key-init"),
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, e.inherit(e.TITLE_MODE, {
            endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
          })], "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", [d, i, s, e.NUMBER_MODE, a, r, {
          className: cc11001100_hook("className", "built_in", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "(Add|Clear|Close|Copy|Enter|Exit|Find|Format|Get|Hide|Join|Lock|Move|New|Open|Optimize|Pop|Push|Redo|Remove|Rename|Reset|Resize|Search|Select|Set|Show|Skip|Split|Step|Switch|Undo|Unlock|Watch|Backup|Checkpoint|Compare|Compress|Convert|ConvertFrom|ConvertTo|Dismount|Edit|Expand|Export|Group|Import|Initialize|Limit|Merge|Mount|Out|Publish|Restore|Save|Sync|Unpublish|Update|Approve|Assert|Build|Complete|Confirm|Deny|Deploy|Disable|Enable|Install|Invoke|Register|Request|Restart|Resume|Start|Stop|Submit|Suspend|Uninstall|Unregister|Wait|Debug|Measure|Ping|Repair|Resolve|Test|Trace|Connect|Disconnect|Read|Receive|Send|Write|Block|Grant|Protect|Revoke|Unblock|Unprotect|Use|ForEach|Sort|Tee|Where)+(-)[\\w\\d]+", "object-key-init")
          }], "object-key-init")
        }, t, {
          className: cc11001100_hook("className", "literal", "object-key-init"),
          begin: cc11001100_hook("begin", /\$(null|true|false)\b/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-tag", "object-key-init"),
          begin: cc11001100_hook("begin", /@\B/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "var-init"),
        m = cc11001100_hook("m", {
          begin: cc11001100_hook("begin", /\[/, "object-key-init"),
          end: cc11001100_hook("end", /\]/, "object-key-init"),
          excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [].concat("self", p, {
            begin: cc11001100_hook("begin", "(string|char|byte|int|long|bool|decimal|single|double|DateTime|xml|array|hashtable|void)", "object-key-init"),
            className: cc11001100_hook("className", "built_in", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            begin: cc11001100_hook("begin", /[\.\w\d]+/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }), "object-key-init")
        }, "var-init");
      return d.contains.unshift(m), {
        name: cc11001100_hook("name", "PowerShell", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["pwsh", "ps", "ps1"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", n, "object-key-init"),
        contains: cc11001100_hook("contains", p.concat(o, c, l, {
          variants: cc11001100_hook("variants", [{
            className: cc11001100_hook("className", "operator", "object-key-init"),
            begin: cc11001100_hook("begin", "(-and|-as|-band|-bnot|-bor|-bxor|-casesensitive|-ccontains|-ceq|-cge|-cgt|-cle|-clike|-clt|-cmatch|-cne|-cnotcontains|-cnotlike|-cnotmatch|-contains|-creplace|-csplit|-eq|-exact|-f|-file|-ge|-gt|-icontains|-ieq|-ige|-igt|-ile|-ilike|-ilt|-imatch|-in|-ine|-inotcontains|-inotlike|-inotmatch|-ireplace|-is|-isnot|-isplit|-join|-le|-like|-lt|-match|-ne|-not|-notcontains|-notin|-notlike|-notmatch|-or|-regex|-replace|-shl|-shr|-split|-wildcard|-xor)\\b", "object-key-init")
          }, {
            className: cc11001100_hook("className", "literal", "object-key-init"),
            begin: cc11001100_hook("begin", /(-){1,2}[\w\d-]+/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, m), "object-key-init")
      };
    }, "object-key-init"),
    grmr_scala: cc11001100_hook("grmr_scala", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\$[A-Za-z0-9_]+", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
            end: cc11001100_hook("end", /\}/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '"""', "object-key-init"),
            end: cc11001100_hook("end", '"""', "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '[a-z]+"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, s], "object-key-init")
          }, {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", '[a-z]+"""', "object-key-init"),
            end: cc11001100_hook("end", '"""', "object-key-init"),
            contains: cc11001100_hook("contains", [s], "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b[A-Z][A-Za-z0-9_]*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "title", "object-key-init"),
          begin: cc11001100_hook("begin", /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "class object trait type", "object-key-init"),
          end: cc11001100_hook("end", /[:={\[\n;]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
            beginKeywords: cc11001100_hook("beginKeywords", "extends with", "object-key-init"),
            relevance: cc11001100_hook("relevance", 10, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\[/, "object-key-init"),
            end: cc11001100_hook("end", /\]/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [a], "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
            excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [a], "object-key-init")
          }, r], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "def", "object-key-init"),
          end: cc11001100_hook("end", n.lookahead(/[:={\[(\n;]/), "object-key-init"),
          contains: cc11001100_hook("contains", [r], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Scala", "object-key-init"),
        keywords: {
          literal: cc11001100_hook("literal", "true false null", "object-key-init"),
          keyword: cc11001100_hook("keyword", "type yield lazy override def with val var sealed abstract private trait object if then forSome for while do throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit export enum given", "object-key-init")
        },
        contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, t, a, o, i, e.C_NUMBER_MODE, {
          begin: cc11001100_hook("begin", [/^\s*/, "extension", /\s+(?=[[(])/], "object-key-init"),
          beginScope: {
            2: cc11001100_hook(2, "keyword", "object-key-init")
          }
        }, [{
          begin: cc11001100_hook("begin", [/^\s*/, /end/, /\s+/, /(extension\b)?/], "object-key-init"),
          beginScope: {
            2: cc11001100_hook(2, "keyword", "object-key-init"),
            4: cc11001100_hook(4, "keyword", "object-key-init")
          }
        }], {
          match: cc11001100_hook("match", /\.inline\b/, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /\binline(?=\s)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", "inline", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", [/\(\s*/, /using/, /\s+(?!\))/], "object-key-init"),
          beginScope: {
            2: cc11001100_hook(2, "keyword", "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_smalltalk: cc11001100_hook("grmr_smalltalk", e => {
      const n = cc11001100_hook("n", "[a-z][a-zA-Z0-9_]*", "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", "\\$.{1}", "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", "#" + e.UNDERSCORE_IDENT_RE, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Smalltalk", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["st"], "object-key-init"),
        keywords: cc11001100_hook("keywords", ["self", "super", "nil", "true", "false", "thisContext"], "object-key-init"),
        contains: cc11001100_hook("contains", [e.COMMENT('"', '"'), e.APOS_STRING_MODE, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b[A-Z][A-Za-z0-9_]*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", n + ":", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, e.C_NUMBER_MODE, t, s, {
          begin: cc11001100_hook("begin", "\\|[ ]*" + n + "([ ]+" + n + ")*[ ]*\\|", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /\|/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /\S/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "(\\|[ ]*)?" + n, "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "#\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          contains: cc11001100_hook("contains", [e.APOS_STRING_MODE, s, e.C_NUMBER_MODE, t], "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_vhdl: cc11001100_hook("grmr_vhdl", e => ({
      name: cc11001100_hook("name", "VHDL", "object-key-init"),
      case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
      keywords: {
        keyword: cc11001100_hook("keyword", ["abs", "access", "after", "alias", "all", "and", "architecture", "array", "assert", "assume", "assume_guarantee", "attribute", "begin", "block", "body", "buffer", "bus", "case", "component", "configuration", "constant", "context", "cover", "disconnect", "downto", "default", "else", "elsif", "end", "entity", "exit", "fairness", "file", "for", "force", "function", "generate", "generic", "group", "guarded", "if", "impure", "in", "inertial", "inout", "is", "label", "library", "linkage", "literal", "loop", "map", "mod", "nand", "new", "next", "nor", "not", "null", "of", "on", "open", "or", "others", "out", "package", "parameter", "port", "postponed", "procedure", "process", "property", "protected", "pure", "range", "record", "register", "reject", "release", "rem", "report", "restrict", "restrict_guarantee", "return", "rol", "ror", "select", "sequence", "severity", "shared", "signal", "sla", "sll", "sra", "srl", "strong", "subtype", "then", "to", "transport", "type", "unaffected", "units", "until", "use", "variable", "view", "vmode", "vprop", "vunit", "wait", "when", "while", "with", "xnor", "xor"], "object-key-init"),
        built_in: cc11001100_hook("built_in", ["boolean", "bit", "character", "integer", "time", "delay_length", "natural", "positive", "string", "bit_vector", "file_open_kind", "file_open_status", "std_logic", "std_logic_vector", "unsigned", "signed", "boolean_vector", "integer_vector", "std_ulogic", "std_ulogic_vector", "unresolved_unsigned", "u_unsigned", "unresolved_signed", "u_signed", "real_vector", "time_vector"], "object-key-init"),
        literal: cc11001100_hook("literal", ["false", "true", "note", "warning", "error", "failure", "line", "text", "side", "width"], "object-key-init")
      },
      illegal: cc11001100_hook("illegal", /\{/, "object-key-init"),
      contains: cc11001100_hook("contains", [e.C_BLOCK_COMMENT_MODE, e.COMMENT("--", "$"), e.QUOTE_STRING_MODE, {
        className: cc11001100_hook("className", "number", "object-key-init"),
        begin: cc11001100_hook("begin", "\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        className: cc11001100_hook("className", "string", "object-key-init"),
        begin: cc11001100_hook("begin", "'(U|X|0|1|Z|W|L|H|-)'", "object-key-init"),
        contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
      }, {
        className: cc11001100_hook("className", "symbol", "object-key-init"),
        begin: cc11001100_hook("begin", "'[A-Za-z](_?[A-Za-z0-9])*", "object-key-init"),
        contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
      }], "object-key-init")
    }), "object-key-init"),
    grmr_verilog: cc11001100_hook("grmr_verilog", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        s = cc11001100_hook("s", ["begin_keywords", "celldefine", "default_nettype", "default_decay_time", "default_trireg_strength", "define", "delay_mode_distributed", "delay_mode_path", "delay_mode_unit", "delay_mode_zero", "else", "elsif", "end_keywords", "endcelldefine", "endif", "ifdef", "ifndef", "include", "line", "nounconnected_drive", "pragma", "resetall", "timescale", "unconnected_drive", "undef", "undefineall"], "var-init");
      return {
        name: cc11001100_hook("name", "Verilog", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["v", "sv", "svh"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !1, "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", /\$?[\w]+(\$[\w]+)*/, "object-key-init"),
          keyword: cc11001100_hook("keyword", ["accept_on", "alias", "always", "always_comb", "always_ff", "always_latch", "and", "assert", "assign", "assume", "automatic", "before", "begin", "bind", "bins", "binsof", "bit", "break", "buf|0", "bufif0", "bufif1", "byte", "case", "casex", "casez", "cell", "chandle", "checker", "class", "clocking", "cmos", "config", "const", "constraint", "context", "continue", "cover", "covergroup", "coverpoint", "cross", "deassign", "default", "defparam", "design", "disable", "dist", "do", "edge", "else", "end", "endcase", "endchecker", "endclass", "endclocking", "endconfig", "endfunction", "endgenerate", "endgroup", "endinterface", "endmodule", "endpackage", "endprimitive", "endprogram", "endproperty", "endspecify", "endsequence", "endtable", "endtask", "enum", "event", "eventually", "expect", "export", "extends", "extern", "final", "first_match", "for", "force", "foreach", "forever", "fork", "forkjoin", "function", "generate|5", "genvar", "global", "highz0", "highz1", "if", "iff", "ifnone", "ignore_bins", "illegal_bins", "implements", "implies", "import", "incdir", "include", "initial", "inout", "input", "inside", "instance", "int", "integer", "interconnect", "interface", "intersect", "join", "join_any", "join_none", "large", "let", "liblist", "library", "local", "localparam", "logic", "longint", "macromodule", "matches", "medium", "modport", "module", "nand", "negedge", "nettype", "new", "nexttime", "nmos", "nor", "noshowcancelled", "not", "notif0", "notif1", "or", "output", "package", "packed", "parameter", "pmos", "posedge", "primitive", "priority", "program", "property", "protected", "pull0", "pull1", "pulldown", "pullup", "pulsestyle_ondetect", "pulsestyle_onevent", "pure", "rand", "randc", "randcase", "randsequence", "rcmos", "real", "realtime", "ref", "reg", "reject_on", "release", "repeat", "restrict", "return", "rnmos", "rpmos", "rtran", "rtranif0", "rtranif1", "s_always", "s_eventually", "s_nexttime", "s_until", "s_until_with", "scalared", "sequence", "shortint", "shortreal", "showcancelled", "signed", "small", "soft", "solve", "specify", "specparam", "static", "string", "strong", "strong0", "strong1", "struct", "super", "supply0", "supply1", "sync_accept_on", "sync_reject_on", "table", "tagged", "task", "this", "throughout", "time", "timeprecision", "timeunit", "tran", "tranif0", "tranif1", "tri", "tri0", "tri1", "triand", "trior", "trireg", "type", "typedef", "union", "unique", "unique0", "unsigned", "until", "until_with", "untyped", "use", "uwire", "var", "vectored", "virtual", "void", "wait", "wait_order", "wand", "weak", "weak0", "weak1", "while", "wildcard", "wire", "with", "within", "wor", "xnor", "xor"], "object-key-init"),
          literal: cc11001100_hook("literal", ["null"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["$finish", "$stop", "$exit", "$fatal", "$error", "$warning", "$info", "$realtime", "$time", "$printtimescale", "$bitstoreal", "$bitstoshortreal", "$itor", "$signed", "$cast", "$bits", "$stime", "$timeformat", "$realtobits", "$shortrealtobits", "$rtoi", "$unsigned", "$asserton", "$assertkill", "$assertpasson", "$assertfailon", "$assertnonvacuouson", "$assertoff", "$assertcontrol", "$assertpassoff", "$assertfailoff", "$assertvacuousoff", "$isunbounded", "$sampled", "$fell", "$changed", "$past_gclk", "$fell_gclk", "$changed_gclk", "$rising_gclk", "$steady_gclk", "$coverage_control", "$coverage_get", "$coverage_save", "$set_coverage_db_name", "$rose", "$stable", "$past", "$rose_gclk", "$stable_gclk", "$future_gclk", "$falling_gclk", "$changing_gclk", "$display", "$coverage_get_max", "$coverage_merge", "$get_coverage", "$load_coverage_db", "$typename", "$unpacked_dimensions", "$left", "$low", "$increment", "$clog2", "$ln", "$log10", "$exp", "$sqrt", "$pow", "$floor", "$ceil", "$sin", "$cos", "$tan", "$countbits", "$onehot", "$isunknown", "$fatal", "$warning", "$dimensions", "$right", "$high", "$size", "$asin", "$acos", "$atan", "$atan2", "$hypot", "$sinh", "$cosh", "$tanh", "$asinh", "$acosh", "$atanh", "$countones", "$onehot0", "$error", "$info", "$random", "$dist_chi_square", "$dist_erlang", "$dist_exponential", "$dist_normal", "$dist_poisson", "$dist_t", "$dist_uniform", "$q_initialize", "$q_remove", "$q_exam", "$async$and$array", "$async$nand$array", "$async$or$array", "$async$nor$array", "$sync$and$array", "$sync$nand$array", "$sync$or$array", "$sync$nor$array", "$q_add", "$q_full", "$psprintf", "$async$and$plane", "$async$nand$plane", "$async$or$plane", "$async$nor$plane", "$sync$and$plane", "$sync$nand$plane", "$sync$or$plane", "$sync$nor$plane", "$system", "$display", "$displayb", "$displayh", "$displayo", "$strobe", "$strobeb", "$strobeh", "$strobeo", "$write", "$readmemb", "$readmemh", "$writememh", "$value$plusargs", "$dumpvars", "$dumpon", "$dumplimit", "$dumpports", "$dumpportson", "$dumpportslimit", "$writeb", "$writeh", "$writeo", "$monitor", "$monitorb", "$monitorh", "$monitoro", "$writememb", "$dumpfile", "$dumpoff", "$dumpall", "$dumpflush", "$dumpportsoff", "$dumpportsall", "$dumpportsflush", "$fclose", "$fdisplay", "$fdisplayb", "$fdisplayh", "$fdisplayo", "$fstrobe", "$fstrobeb", "$fstrobeh", "$fstrobeo", "$swrite", "$swriteb", "$swriteh", "$swriteo", "$fscanf", "$fread", "$fseek", "$fflush", "$feof", "$fopen", "$fwrite", "$fwriteb", "$fwriteh", "$fwriteo", "$fmonitor", "$fmonitorb", "$fmonitorh", "$fmonitoro", "$sformat", "$sformatf", "$fgetc", "$ungetc", "$fgets", "$sscanf", "$rewind", "$ftell", "$ferror"], "object-key-init")
        },
        contains: cc11001100_hook("contains", [e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE, e.QUOTE_STRING_MODE, {
          scope: cc11001100_hook("scope", "number", "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\b((\d+'([bhodBHOD]))[0-9xzXZa-fA-F_]+)/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\B(('([bhodBHOD]))[0-9xzXZa-fA-F_]+)/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\b[0-9][0-9_]*/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "variable", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "#\\((?!parameter).+\\)", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\.\\w+", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "variable.constant", "object-key-init"),
          match: cc11001100_hook("match", n.concat(/`/, n.either("__FILE__", "__LINE__")), "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", n.concat(/`/, n.either(...s)), "object-key-init"),
          end: cc11001100_hook("end", /$|\/\/|\/\*/, "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", s, "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_matlab: cc11001100_hook("grmr_matlab", e => {
      var n = cc11001100_hook("n", {
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", "('|\\.')+", "object-key-init")
        }], "object-key-init")
      }, "var-init");
      return {
        name: cc11001100_hook("name", "Matlab", "object-key-init"),
        keywords: {
          keyword: cc11001100_hook("keyword", "arguments break case catch classdef continue else elseif end enumeration events for function global if methods otherwise parfor persistent properties return spmd switch try while", "object-key-init"),
          built_in: cc11001100_hook("built_in", "sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i|0 inf nan isnan isinf isfinite j|0 why compan gallery hadamard hankel hilb invhilb magic pascal rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun legend intersect ismember procrustes hold num2cell ", "object-key-init")
        },
        illegal: cc11001100_hook("illegal", '(//|"|#|/\\*|\\s+/\\w+)', "object-key-init"),
        contains: cc11001100_hook("contains", [{
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "function", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", [e.UNDERSCORE_TITLE_MODE, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            variants: cc11001100_hook("variants", [{
              begin: cc11001100_hook("begin", "\\(", "object-key-init"),
              end: cc11001100_hook("end", "\\)", "object-key-init")
            }, {
              begin: cc11001100_hook("begin", "\\[", "object-key-init"),
              end: cc11001100_hook("end", "\\]", "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "built_in", "object-key-init"),
          begin: cc11001100_hook("begin", /true|false/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          starts: cc11001100_hook("starts", n, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "[a-zA-Z][a-zA-Z_0-9]*('|\\.')+", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "number", "object-key-init"),
          begin: cc11001100_hook("begin", e.C_NUMBER_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          starts: cc11001100_hook("starts", n, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", "'", "object-key-init"),
          end: cc11001100_hook("end", "'", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "''", "object-key-init")
          }], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /\]|\}|\)/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          starts: cc11001100_hook("starts", n, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", '"', "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }], "object-key-init"),
          starts: cc11001100_hook("starts", n, "object-key-init")
        }, e.COMMENT("^\\s*%\\{\\s*$", "^\\s*%\\}\\s*$"), e.COMMENT("%", "$")], "object-key-init")
      };
    }, "object-key-init")
  }), "var-init");
  const Pe = cc11001100_hook("Pe", se, "var-init");
  for (const e of Object.keys(Fe)) {
    const n = cc11001100_hook("n", e.replace("grmr_", "").replace("_", "-"), "var-init");
    Pe.registerLanguage(n, Fe[e]);
  }
  return Pe;
}(), "var-init");
"object" == typeof exports && "undefined" != typeof module && (module.exports = cc11001100_hook("module.exports", hljs, "assign"));