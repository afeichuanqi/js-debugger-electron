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
    }, "assign"), "assign"), "assign")), Object.freeze(e), Object.getOwnPropertyNames(e).forEach(t => {
      var a = cc11001100_hook("a", e[t], "var-init");
      "object" != typeof a || Object.isFrozen(a) || n(a);
    }), e;
  }
  e.exports = cc11001100_hook("e.exports", n, "assign"), e.exports.default = cc11001100_hook("e.exports.default", n, "assign");
  var t = cc11001100_hook("t", e.exports, "var-init");
  class a {
    constructor(e) {
      void 0 === e.data && (e.data = cc11001100_hook("e.data", {}, "assign")), this.data = cc11001100_hook("this.data", e.data, "assign"), this.isMatchIgnored = cc11001100_hook("this.isMatchIgnored", !1, "assign");
    }
    ignoreMatch() {
      this.isMatchIgnored = cc11001100_hook("this.isMatchIgnored", !0, "assign");
    }
  }
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(e, ...n) {
    cc11001100_hook("e", e, "function-parameter");
    const t = cc11001100_hook("t", Object.create(null), "var-init");
    for (const n in e) t[n] = cc11001100_hook("t[n]", e[n], "assign");
    return n.forEach(e => {
      for (const n in e) t[n] = cc11001100_hook("t[n]", e[n], "assign");
    }), t;
  }
  const s = cc11001100_hook("s", e => !!e.kind, "var-init");
  class o {
    constructor(e, n) {
      this.buffer = cc11001100_hook("this.buffer", "", "assign"), this.classPrefix = cc11001100_hook("this.classPrefix", n.classPrefix, "assign"), e.walk(this);
    }
    addText(e) {
      this.buffer += cc11001100_hook("this.buffer", i(e), "assign");
    }
    openNode(e) {
      if (!s(e)) return;
      let n = cc11001100_hook("n", e.kind, "var-init");
      n = cc11001100_hook("n", e.sublanguage ? "language-" + n : ((e, {
        prefix: n
      }) => {
        if (e.includes(".")) {
          const t = cc11001100_hook("t", e.split("."), "var-init");
          return [`${n}${t.shift()}`, ...t.map((e, n) => `${e}${"_".repeat(n + 1)}`)].join(" ");
        }
        return `${n}${e}`;
      })(n, {
        prefix: cc11001100_hook("prefix", this.classPrefix, "object-key-init")
      }), "assign"), this.span(n);
    }
    closeNode(e) {
      s(e) && (this.buffer += cc11001100_hook("this.buffer", "</span>", "assign"));
    }
    value() {
      return this.buffer;
    }
    span(e) {
      this.buffer += cc11001100_hook("this.buffer", `<span class="${e}">`, "assign");
    }
  }
  class l {
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
        l._collapse(e);
      }));
    }
  }
  class c extends l {
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
      const t = cc11001100_hook("t", e.root, "var-init");
      t.kind = cc11001100_hook("t.kind", n, "assign"), t.sublanguage = cc11001100_hook("t.sublanguage", !0, "assign"), this.add(t);
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
    return e ? "string" == typeof e ? e : e.source : null;
  }
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    return m("(?=", e, ")");
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    return m("(?:", e, ")*");
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    return m("(?:", e, ")?");
  }
  function m(...e) {
    return e.map(e => d(e)).join("");
  }
  function p(...e) {
    const n = cc11001100_hook("n", (e => {
      const n = cc11001100_hook("n", e[e.length - 1], "var-init");
      return "object" == typeof n && n.constructor === Object ? (e.splice(e.length - 1, 1), n) : {};
    })(e), "var-init");
    return "(" + (n.capture ? "" : "?:") + e.map(e => d(e)).join("|") + ")";
  }
  function _(e) {
    cc11001100_hook("e", e, "function-parameter");
    return RegExp(e.toString() + "|").exec("").length - 1;
  }
  const h = cc11001100_hook("h", /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, "var-init");
  function f(e, {
    joinWith: n
  }) {
    cc11001100_hook("e", e, "function-parameter");
    let t = cc11001100_hook("t", 0, "var-init");
    return e.map(e => {
      t += cc11001100_hook("t", 1, "assign");
      const n = cc11001100_hook("n", t, "var-init");
      let a = cc11001100_hook("a", d(e), "var-init"),
        i = cc11001100_hook("i", "", "var-init");
      for (; a.length > 0;) {
        const e = cc11001100_hook("e", h.exec(a), "var-init");
        if (!e) {
          i += cc11001100_hook("i", a, "assign");
          break;
        }
        i += cc11001100_hook("i", a.substring(0, e.index), "assign"), a = cc11001100_hook("a", a.substring(e.index + e[0].length), "assign"), "\\" === e[0][0] && e[1] ? i += cc11001100_hook("i", "\\" + (Number(e[1]) + n), "assign") : (i += cc11001100_hook("i", e[0], "assign"), "(" === e[0] && t++);
      }
      return i;
    }).map(e => `(${e})`).join(n);
  }
  const E = cc11001100_hook("E", "[a-zA-Z]\\w*", "var-init"),
    y = cc11001100_hook("y", "[a-zA-Z_]\\w*", "var-init"),
    N = cc11001100_hook("N", "\\b\\d+(\\.\\d+)?", "var-init"),
    w = cc11001100_hook("w", "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", "var-init"),
    v = cc11001100_hook("v", "\\b(0b[01]+)", "var-init"),
    O = cc11001100_hook("O", {
      begin: cc11001100_hook("begin", "\\\\[\\s\\S]", "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    }, "var-init"),
    x = cc11001100_hook("x", {
      scope: cc11001100_hook("scope", "string", "object-key-init"),
      begin: cc11001100_hook("begin", "'", "object-key-init"),
      end: cc11001100_hook("end", "'", "object-key-init"),
      illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
      contains: cc11001100_hook("contains", [O], "object-key-init")
    }, "var-init"),
    M = cc11001100_hook("M", {
      scope: cc11001100_hook("scope", "string", "object-key-init"),
      begin: cc11001100_hook("begin", '"', "object-key-init"),
      end: cc11001100_hook("end", '"', "object-key-init"),
      illegal: cc11001100_hook("illegal", "\\n", "object-key-init"),
      contains: cc11001100_hook("contains", [O], "object-key-init")
    }, "var-init"),
    k = cc11001100_hook("k", (e, n, t = {}) => {
      const a = cc11001100_hook("a", r({
        scope: cc11001100_hook("scope", "comment", "object-key-init"),
        begin: cc11001100_hook("begin", e, "object-key-init"),
        end: cc11001100_hook("end", n, "object-key-init"),
        contains: cc11001100_hook("contains", [], "object-key-init")
      }, t), "var-init");
      a.contains.push({
        scope: cc11001100_hook("scope", "doctag", "object-key-init"),
        begin: cc11001100_hook("begin", "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)", "object-key-init"),
        end: cc11001100_hook("end", /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/, "object-key-init"),
        excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      });
      const i = cc11001100_hook("i", p("I", "a", "is", "so", "us", "to", "at", "if", "in", "it", "on", /[A-Za-z]+['](d|ve|re|ll|t|s|n)/, /[A-Za-z]+[-][a-z]+/, /[A-Za-z][a-z]{2,}/), "var-init");
      return a.contains.push({
        begin: cc11001100_hook("begin", m(/[ ]+/, "(", i, /[.]?[:]?([.][ ]|[ ])/, "){3}"), "object-key-init")
      }), a;
    }, "var-init"),
    S = cc11001100_hook("S", k("//", "$"), "var-init"),
    A = cc11001100_hook("A", k("/\\*", "\\*/"), "var-init"),
    C = cc11001100_hook("C", k("#", "$"), "var-init");
  var T = cc11001100_hook("T", Object.freeze({
    __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
    MATCH_NOTHING_RE: cc11001100_hook("MATCH_NOTHING_RE", /\b\B/, "object-key-init"),
    IDENT_RE: cc11001100_hook("IDENT_RE", E, "object-key-init"),
    UNDERSCORE_IDENT_RE: cc11001100_hook("UNDERSCORE_IDENT_RE", y, "object-key-init"),
    NUMBER_RE: cc11001100_hook("NUMBER_RE", N, "object-key-init"),
    C_NUMBER_RE: cc11001100_hook("C_NUMBER_RE", w, "object-key-init"),
    BINARY_NUMBER_RE: cc11001100_hook("BINARY_NUMBER_RE", v, "object-key-init"),
    RE_STARTERS_RE: cc11001100_hook("RE_STARTERS_RE", "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", "object-key-init"),
    SHEBANG: cc11001100_hook("SHEBANG", (e = {}) => {
      const n = cc11001100_hook("n", /^#![ ]*\//, "var-init");
      return e.binary && (e.begin = cc11001100_hook("e.begin", m(n, /.*\b/, e.binary, /\b.*/), "assign")), r({
        scope: cc11001100_hook("scope", "meta", "object-key-init"),
        begin: cc11001100_hook("begin", n, "object-key-init"),
        end: cc11001100_hook("end", /$/, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        "on:begin": cc11001100_hook("on:begin", (e, n) => {
          0 !== e.index && n.ignoreMatch();
        }, "object-key-init")
      }, e);
    }, "object-key-init"),
    BACKSLASH_ESCAPE: cc11001100_hook("BACKSLASH_ESCAPE", O, "object-key-init"),
    APOS_STRING_MODE: cc11001100_hook("APOS_STRING_MODE", x, "object-key-init"),
    QUOTE_STRING_MODE: cc11001100_hook("QUOTE_STRING_MODE", M, "object-key-init"),
    PHRASAL_WORDS_MODE: {
      begin: cc11001100_hook("begin", /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/, "object-key-init")
    },
    COMMENT: cc11001100_hook("COMMENT", k, "object-key-init"),
    C_LINE_COMMENT_MODE: cc11001100_hook("C_LINE_COMMENT_MODE", S, "object-key-init"),
    C_BLOCK_COMMENT_MODE: cc11001100_hook("C_BLOCK_COMMENT_MODE", A, "object-key-init"),
    HASH_COMMENT_MODE: cc11001100_hook("HASH_COMMENT_MODE", C, "object-key-init"),
    NUMBER_MODE: {
      scope: cc11001100_hook("scope", "number", "object-key-init"),
      begin: cc11001100_hook("begin", N, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    C_NUMBER_MODE: {
      scope: cc11001100_hook("scope", "number", "object-key-init"),
      begin: cc11001100_hook("begin", w, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    BINARY_NUMBER_MODE: {
      scope: cc11001100_hook("scope", "number", "object-key-init"),
      begin: cc11001100_hook("begin", v, "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    },
    REGEXP_MODE: {
      begin: cc11001100_hook("begin", /(?=\/[^/\n]*\/)/, "object-key-init"),
      contains: cc11001100_hook("contains", [{
        scope: cc11001100_hook("scope", "regexp", "object-key-init"),
        begin: cc11001100_hook("begin", /\//, "object-key-init"),
        end: cc11001100_hook("end", /\/[gimuy]*/, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
        contains: cc11001100_hook("contains", [O, {
          begin: cc11001100_hook("begin", /\[/, "object-key-init"),
          end: cc11001100_hook("end", /\]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [O], "object-key-init")
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
      begin: cc11001100_hook("begin", y, "object-key-init"),
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
  function R(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    "." === e.input[e.index - 1] && n.ignoreMatch();
  }
  function D(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    void 0 !== e.className && (e.scope = cc11001100_hook("e.scope", e.className, "assign"), delete e.className);
  }
  function I(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    n && e.beginKeywords && (e.begin = cc11001100_hook("e.begin", "\\b(" + e.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", "assign"), e.__beforeBegin = cc11001100_hook("e.__beforeBegin", R, "assign"), e.keywords = cc11001100_hook("e.keywords", e.keywords || e.beginKeywords, "assign"), delete e.beginKeywords, void 0 === e.relevance && (e.relevance = cc11001100_hook("e.relevance", 0, "assign")));
  }
  function L(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    Array.isArray(e.illegal) && (e.illegal = cc11001100_hook("e.illegal", p(...e.illegal), "assign"));
  }
  function B(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (e.match) {
      if (e.begin || e.end) throw Error("begin & end are not supported with match");
      e.begin = cc11001100_hook("e.begin", e.match, "assign"), delete e.match;
    }
  }
  function $(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    void 0 === e.relevance && (e.relevance = cc11001100_hook("e.relevance", 1, "assign"));
  }
  const F = cc11001100_hook("F", (e, n) => {
      if (!e.beforeMatch) return;
      if (e.starts) throw Error("beforeMatch cannot be used with starts");
      const t = cc11001100_hook("t", Object.assign({}, e), "var-init");
      Object.keys(e).forEach(n => {
        delete e[n];
      }), e.keywords = cc11001100_hook("e.keywords", t.keywords, "assign"), e.begin = cc11001100_hook("e.begin", m(t.beforeMatch, g(t.begin)), "assign"), e.starts = cc11001100_hook("e.starts", {
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        contains: cc11001100_hook("contains", [Object.assign(t, {
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
        })], "object-key-init")
      }, "assign"), e.relevance = cc11001100_hook("e.relevance", 0, "assign"), delete t.beforeMatch;
    }, "var-init"),
    z = cc11001100_hook("z", ["of", "and", "for", "in", "not", "or", "if", "then", "parent", "list", "value"], "var-init");
  function U(e, n, t = "keyword") {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    const a = cc11001100_hook("a", Object.create(null), "var-init");
    return "string" == typeof e ? i(t, e.split(" ")) : Array.isArray(e) ? i(t, e) : Object.keys(e).forEach(t => {
      Object.assign(a, U(e[t], n, t));
    }), a;
    function i(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      n && (t = cc11001100_hook("t", t.map(e => e.toLowerCase()), "assign")), t.forEach(n => {
        const t = cc11001100_hook("t", n.split("|"), "var-init");
        a[t[0]] = cc11001100_hook("a[t[0]]", [e, j(t[0], t[1])], "assign");
      });
    }
  }
  function j(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return n ? Number(n) : (e => z.includes(e.toLowerCase()))(e) ? 0 : 1;
  }
  const P = cc11001100_hook("P", {}, "var-init"),
    K = cc11001100_hook("K", e => {
      console.error(e);
    }, "var-init"),
    q = cc11001100_hook("q", (e, ...n) => {
      console.log("WARN: " + e, ...n);
    }, "var-init"),
    H = cc11001100_hook("H", (e, n) => {
      P[`${e}/${n}`] || (console.log(`Deprecated as of ${e}. ${n}`), P[`${e}/${n}`] = cc11001100_hook("P[`${e}/${n}`]", !0, "assign"));
    }, "var-init"),
    Z = cc11001100_hook("Z", Error(), "var-init");
  function G(e, n, {
    key: t
  }) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    let a = cc11001100_hook("a", 0, "var-init");
    const i = cc11001100_hook("i", e[t], "var-init"),
      r = cc11001100_hook("r", {}, "var-init"),
      s = cc11001100_hook("s", {}, "var-init");
    for (let e = cc11001100_hook("e", 1, "var-init"); e <= n.length; e++) s[e + a] = cc11001100_hook("s[e + a]", i[e], "assign"), r[e + a] = cc11001100_hook("r[e + a]", !0, "assign"), a += cc11001100_hook("a", _(n[e - 1]), "assign");
    e[t] = cc11001100_hook("e[t]", s, "assign"), e[t]._emit = cc11001100_hook("e[t]._emit", r, "assign"), e[t]._multi = cc11001100_hook("e[t]._multi", !0, "assign");
  }
  function W(e) {
    cc11001100_hook("e", e, "function-parameter");
    (e => {
      e.scope && "object" == typeof e.scope && null !== e.scope && (e.beginScope = cc11001100_hook("e.beginScope", e.scope, "assign"), delete e.scope);
    })(e), "string" == typeof e.beginScope && (e.beginScope = cc11001100_hook("e.beginScope", {
      _wrap: cc11001100_hook("_wrap", e.beginScope, "object-key-init")
    }, "assign")), "string" == typeof e.endScope && (e.endScope = cc11001100_hook("e.endScope", {
      _wrap: cc11001100_hook("_wrap", e.endScope, "object-key-init")
    }, "assign")), (e => {
      if (Array.isArray(e.begin)) {
        if (e.skip || e.excludeBegin || e.returnBegin) throw K("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Z;
        if ("object" != typeof e.beginScope || null === e.beginScope) throw K("beginScope must be object"), Z;
        G(e, e.begin, {
          key: cc11001100_hook("key", "beginScope", "object-key-init")
        }), e.begin = cc11001100_hook("e.begin", f(e.begin, {
          joinWith: cc11001100_hook("joinWith", "", "object-key-init")
        }), "assign");
      }
    })(e), (e => {
      if (Array.isArray(e.end)) {
        if (e.skip || e.excludeEnd || e.returnEnd) throw K("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Z;
        if ("object" != typeof e.endScope || null === e.endScope) throw K("endScope must be object"), Z;
        G(e, e.end, {
          key: cc11001100_hook("key", "endScope", "object-key-init")
        }), e.end = cc11001100_hook("e.end", f(e.end, {
          joinWith: cc11001100_hook("joinWith", "", "object-key-init")
        }), "assign");
      }
    })(e);
  }
  function Q(e) {
    cc11001100_hook("e", e, "function-parameter");
    function n(n, t) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return RegExp(d(n), "m" + (e.case_insensitive ? "i" : "") + (e.unicodeRegex ? "u" : "") + (t ? "g" : ""));
    }
    class t {
      constructor() {
        this.matchIndexes = cc11001100_hook("this.matchIndexes", {}, "assign"), this.regexes = cc11001100_hook("this.regexes", [], "assign"), this.matchAt = cc11001100_hook("this.matchAt", 1, "assign"), this.position = cc11001100_hook("this.position", 0, "assign");
      }
      addRule(e, n) {
        n.position = cc11001100_hook("n.position", this.position++, "assign"), this.matchIndexes[this.matchAt] = cc11001100_hook("this.matchIndexes[this.matchAt]", n, "assign"), this.regexes.push([n, e]), this.matchAt += cc11001100_hook("this.matchAt", _(e) + 1, "assign");
      }
      compile() {
        0 === this.regexes.length && (this.exec = cc11001100_hook("this.exec", () => null, "assign"));
        const e = cc11001100_hook("e", this.regexes.map(e => e[1]), "var-init");
        this.matcherRe = cc11001100_hook("this.matcherRe", n(f(e, {
          joinWith: cc11001100_hook("joinWith", "|", "object-key-init")
        }), !0), "assign"), this.lastIndex = cc11001100_hook("this.lastIndex", 0, "assign");
      }
      exec(e) {
        this.matcherRe.lastIndex = cc11001100_hook("this.matcherRe.lastIndex", this.lastIndex, "assign");
        const n = cc11001100_hook("n", this.matcherRe.exec(e), "var-init");
        if (!n) return null;
        const t = cc11001100_hook("t", n.findIndex((e, n) => n > 0 && void 0 !== e), "var-init"),
          a = cc11001100_hook("a", this.matchIndexes[t], "var-init");
        return n.splice(0, t), Object.assign(n, a);
      }
    }
    class a {
      constructor() {
        this.rules = cc11001100_hook("this.rules", [], "assign"), this.multiRegexes = cc11001100_hook("this.multiRegexes", [], "assign"), this.count = cc11001100_hook("this.count", 0, "assign"), this.lastIndex = cc11001100_hook("this.lastIndex", 0, "assign"), this.regexIndex = cc11001100_hook("this.regexIndex", 0, "assign");
      }
      getMatcher(e) {
        if (this.multiRegexes[e]) return this.multiRegexes[e];
        const n = cc11001100_hook("n", new t(), "var-init");
        return this.rules.slice(e).forEach(([e, t]) => n.addRule(e, t)), n.compile(), this.multiRegexes[e] = cc11001100_hook("this.multiRegexes[e]", n, "assign"), n;
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
        let t = cc11001100_hook("t", n.exec(e), "var-init");
        if (this.resumingScanAtSamePosition()) if (t && t.index === this.lastIndex) ;else {
          const n = cc11001100_hook("n", this.getMatcher(0), "var-init");
          n.lastIndex = cc11001100_hook("n.lastIndex", this.lastIndex + 1, "assign"), t = cc11001100_hook("t", n.exec(e), "assign");
        }
        return t && (this.regexIndex += cc11001100_hook("this.regexIndex", t.position + 1, "assign"), this.regexIndex === this.count && this.considerAll()), t;
      }
    }
    if (e.compilerExtensions || (e.compilerExtensions = cc11001100_hook("e.compilerExtensions", [], "assign")), e.contains && e.contains.includes("self")) throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return e.classNameAliases = cc11001100_hook("e.classNameAliases", r(e.classNameAliases || {}), "assign"), function t(i, s) {
      const o = cc11001100_hook("o", i, "var-init");
      if (i.isCompiled) return o;
      [D, B, W, F].forEach(e => e(i, s)), e.compilerExtensions.forEach(e => e(i, s)), i.__beforeBegin = cc11001100_hook("i.__beforeBegin", null, "assign"), [I, L, $].forEach(e => e(i, s)), i.isCompiled = cc11001100_hook("i.isCompiled", !0, "assign");
      let l = cc11001100_hook("l", null, "var-init");
      return "object" == typeof i.keywords && i.keywords.$pattern && (i.keywords = cc11001100_hook("i.keywords", Object.assign({}, i.keywords), "assign"), l = cc11001100_hook("l", i.keywords.$pattern, "assign"), delete i.keywords.$pattern), l = cc11001100_hook("l", l || /\w+/, "assign"), i.keywords && (i.keywords = cc11001100_hook("i.keywords", U(i.keywords, e.case_insensitive), "assign")), o.keywordPatternRe = cc11001100_hook("o.keywordPatternRe", n(l, !0), "assign"), s && (i.begin || (i.begin = cc11001100_hook("i.begin", /\B|\b/, "assign")), o.beginRe = cc11001100_hook("o.beginRe", n(o.begin), "assign"), i.end || i.endsWithParent || (i.end = cc11001100_hook("i.end", /\B|\b/, "assign")), i.end && (o.endRe = cc11001100_hook("o.endRe", n(o.end), "assign")), o.terminatorEnd = cc11001100_hook("o.terminatorEnd", d(o.end) || "", "assign"), i.endsWithParent && s.terminatorEnd && (o.terminatorEnd += cc11001100_hook("o.terminatorEnd", (i.end ? "|" : "") + s.terminatorEnd, "assign"))), i.illegal && (o.illegalRe = cc11001100_hook("o.illegalRe", n(i.illegal), "assign")), i.contains || (i.contains = cc11001100_hook("i.contains", [], "assign")), i.contains = cc11001100_hook("i.contains", [].concat(...i.contains.map(e => (e => (e.variants && !e.cachedVariants && (e.cachedVariants = cc11001100_hook("e.cachedVariants", e.variants.map(n => r(e, {
        variants: cc11001100_hook("variants", null, "object-key-init")
      }, n)), "assign")), e.cachedVariants ? e.cachedVariants : X(e) ? r(e, {
        starts: cc11001100_hook("starts", e.starts ? r(e.starts) : null, "object-key-init")
      }) : Object.isFrozen(e) ? r(e) : e))("self" === e ? i : e))), "assign"), i.contains.forEach(e => {
        t(e, o);
      }), i.starts && t(i.starts, s), o.matcher = cc11001100_hook("o.matcher", (e => {
        const n = cc11001100_hook("n", new a(), "var-init");
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
  function X(e) {
    cc11001100_hook("e", e, "function-parameter");
    return !!e && (e.endsWithParent || X(e.starts));
  }
  class V extends Error {
    constructor(e, n) {
      super(e), this.name = cc11001100_hook("this.name", "HTMLInjectionError", "assign"), this.html = cc11001100_hook("this.html", n, "assign");
    }
  }
  const J = cc11001100_hook("J", i, "var-init"),
    Y = cc11001100_hook("Y", r, "var-init"),
    ee = cc11001100_hook("ee", Symbol("nomatch"), "var-init");
  var ne = cc11001100_hook("ne", (e => {
    const n = cc11001100_hook("n", Object.create(null), "var-init"),
      i = cc11001100_hook("i", Object.create(null), "var-init"),
      r = cc11001100_hook("r", [], "var-init");
    let s = cc11001100_hook("s", !0, "var-init");
    const o = cc11001100_hook("o", "Could not find the language '{}', did you forget to load/include a language module?", "var-init"),
      l = cc11001100_hook("l", {
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
      __emitter: cc11001100_hook("__emitter", c, "object-key-init")
    }, "var-init");
    function _(e) {
      cc11001100_hook("e", e, "function-parameter");
      return d.noHighlightRe.test(e);
    }
    function h(e, n, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      let a = cc11001100_hook("a", "", "var-init"),
        i = cc11001100_hook("i", "", "var-init");
      "object" == typeof n ? (a = cc11001100_hook("a", e, "assign"), t = cc11001100_hook("t", n.ignoreIllegals, "assign"), i = cc11001100_hook("i", n.language, "assign")) : (H("10.7.0", "highlight(lang, code, ...args) has been deprecated."), H("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"), i = cc11001100_hook("i", e, "assign"), a = cc11001100_hook("a", n, "assign")), void 0 === t && (t = cc11001100_hook("t", !0, "assign"));
      const r = cc11001100_hook("r", {
        code: cc11001100_hook("code", a, "object-key-init"),
        language: cc11001100_hook("language", i, "object-key-init")
      }, "var-init");
      M("before:highlight", r);
      const s = cc11001100_hook("s", r.result ? r.result : f(r.language, r.code, t), "var-init");
      return s.code = cc11001100_hook("s.code", r.code, "assign"), M("after:highlight", s), s;
    }
    function f(e, t, i, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      const l = cc11001100_hook("l", Object.create(null), "var-init");
      function c() {
        if (!x.keywords) return void k.addText(S);
        let e = cc11001100_hook("e", 0, "var-init");
        x.keywordPatternRe.lastIndex = cc11001100_hook("x.keywordPatternRe.lastIndex", 0, "assign");
        let n = cc11001100_hook("n", x.keywordPatternRe.exec(S), "var-init"),
          t = cc11001100_hook("t", "", "var-init");
        for (; n;) {
          t += cc11001100_hook("t", S.substring(e, n.index), "assign");
          const i = cc11001100_hook("i", N.case_insensitive ? n[0].toLowerCase() : n[0], "var-init"),
            r = cc11001100_hook("r", (a = cc11001100_hook("a", i, "assign"), x.keywords[a]), "var-init");
          if (r) {
            const [e, a] = cc11001100_hook("", r, "var-init");
            if (k.addText(t), t = cc11001100_hook("t", "", "assign"), l[i] = cc11001100_hook("l[i]", (l[i] || 0) + 1, "assign"), l[i] <= 7 && (A += cc11001100_hook("A", a, "assign")), e.startsWith("_")) t += cc11001100_hook("t", n[0], "assign");else {
              const t = cc11001100_hook("t", N.classNameAliases[e] || e, "var-init");
              k.addKeyword(n[0], t);
            }
          } else t += cc11001100_hook("t", n[0], "assign");
          e = cc11001100_hook("e", x.keywordPatternRe.lastIndex, "assign"), n = cc11001100_hook("n", x.keywordPatternRe.exec(S), "assign");
        }
        var a;
        t += cc11001100_hook("t", S.substr(e), "assign"), k.addText(t);
      }
      function g() {
        null != x.subLanguage ? (() => {
          if ("" === S) return;
          let e = cc11001100_hook("e", null, "var-init");
          if ("string" == typeof x.subLanguage) {
            if (!n[x.subLanguage]) return void k.addText(S);
            e = cc11001100_hook("e", f(x.subLanguage, S, !0, M[x.subLanguage]), "assign"), M[x.subLanguage] = cc11001100_hook("M[x.subLanguage]", e._top, "assign");
          } else e = cc11001100_hook("e", E(S, x.subLanguage.length ? x.subLanguage : null), "assign");
          x.relevance > 0 && (A += cc11001100_hook("A", e.relevance, "assign")), k.addSublanguage(e._emitter, e.language);
        })() : c(), S = cc11001100_hook("S", "", "assign");
      }
      function u(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        let t = cc11001100_hook("t", 1, "var-init");
        for (; void 0 !== n[t];) {
          if (!e._emit[t]) {
            t++;
            continue;
          }
          const a = cc11001100_hook("a", N.classNameAliases[e[t]] || e[t], "var-init"),
            i = cc11001100_hook("i", n[t], "var-init");
          a ? k.addKeyword(i, a) : (S = cc11001100_hook("S", i, "assign"), c(), S = cc11001100_hook("S", "", "assign")), t++;
        }
      }
      function b(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        return e.scope && "string" == typeof e.scope && k.openNode(N.classNameAliases[e.scope] || e.scope), e.beginScope && (e.beginScope._wrap ? (k.addKeyword(S, N.classNameAliases[e.beginScope._wrap] || e.beginScope._wrap), S = cc11001100_hook("S", "", "assign")) : e.beginScope._multi && (u(e.beginScope, n), S = cc11001100_hook("S", "", "assign"))), x = cc11001100_hook("x", Object.create(e, {
          parent: {
            value: cc11001100_hook("value", x, "object-key-init")
          }
        }), "assign"), x;
      }
      function m(e, n, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        let i = cc11001100_hook("i", ((e, n) => {
          const t = cc11001100_hook("t", e && e.exec(n), "var-init");
          return t && 0 === t.index;
        })(e.endRe, t), "var-init");
        if (i) {
          if (e["on:end"]) {
            const t = cc11001100_hook("t", new a(e), "var-init");
            e["on:end"](n, t), t.isMatchIgnored && (i = cc11001100_hook("i", !1, "assign"));
          }
          if (i) {
            for (; e.endsParent && e.parent;) e = cc11001100_hook("e", e.parent, "assign");
            return e;
          }
        }
        if (e.endsWithParent) return m(e.parent, n, t);
      }
      function p(e) {
        cc11001100_hook("e", e, "function-parameter");
        return 0 === x.matcher.regexIndex ? (S += cc11001100_hook("S", e[0], "assign"), 1) : (R = cc11001100_hook("R", !0, "assign"), 0);
      }
      function _(e) {
        cc11001100_hook("e", e, "function-parameter");
        const n = cc11001100_hook("n", e[0], "var-init"),
          a = cc11001100_hook("a", t.substr(e.index), "var-init"),
          i = cc11001100_hook("i", m(x, e, a), "var-init");
        if (!i) return ee;
        const r = cc11001100_hook("r", x, "var-init");
        x.endScope && x.endScope._wrap ? (g(), k.addKeyword(n, x.endScope._wrap)) : x.endScope && x.endScope._multi ? (g(), u(x.endScope, e)) : r.skip ? S += cc11001100_hook("S", n, "assign") : (r.returnEnd || r.excludeEnd || (S += cc11001100_hook("S", n, "assign")), g(), r.excludeEnd && (S = cc11001100_hook("S", n, "assign")));
        do {
          x.scope && k.closeNode(), x.skip || x.subLanguage || (A += cc11001100_hook("A", x.relevance, "assign")), x = cc11001100_hook("x", x.parent, "assign");
        } while (x !== i.parent);
        return i.starts && b(i.starts, e), r.returnEnd ? 0 : n.length;
      }
      let h = cc11001100_hook("h", {}, "var-init");
      function y(n, r) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        const o = cc11001100_hook("o", r && r[0], "var-init");
        if (S += cc11001100_hook("S", n, "assign"), null == o) return g(), 0;
        if ("begin" === h.type && "end" === r.type && h.index === r.index && "" === o) {
          if (S += cc11001100_hook("S", t.slice(r.index, r.index + 1), "assign"), !s) {
            const n = cc11001100_hook("n", Error(`0 width match regex (${e})`), "var-init");
            throw n.languageName = cc11001100_hook("n.languageName", e, "assign"), n.badRule = cc11001100_hook("n.badRule", h.rule, "assign"), n;
          }
          return 1;
        }
        if (h = cc11001100_hook("h", r, "assign"), "begin" === r.type) return (e => {
          const n = cc11001100_hook("n", e[0], "var-init"),
            t = cc11001100_hook("t", e.rule, "var-init"),
            i = cc11001100_hook("i", new a(t), "var-init"),
            r = cc11001100_hook("r", [t.__beforeBegin, t["on:begin"]], "var-init");
          for (const t of r) if (t && (t(e, i), i.isMatchIgnored)) return p(n);
          return t.skip ? S += cc11001100_hook("S", n, "assign") : (t.excludeBegin && (S += cc11001100_hook("S", n, "assign")), g(), t.returnBegin || t.excludeBegin || (S = cc11001100_hook("S", n, "assign"))), b(t, e), t.returnBegin ? 0 : n.length;
        })(r);
        if ("illegal" === r.type && !i) {
          const e = cc11001100_hook("e", Error('Illegal lexeme "' + o + '" for mode "' + (x.scope || "<unnamed>") + '"'), "var-init");
          throw e.mode = cc11001100_hook("e.mode", x, "assign"), e;
        }
        if ("end" === r.type) {
          const e = cc11001100_hook("e", _(r), "var-init");
          if (e !== ee) return e;
        }
        if ("illegal" === r.type && "" === o) return 1;
        if (T > 1e5 && T > 3 * r.index) throw Error("potential infinite loop, way more iterations than matches");
        return S += cc11001100_hook("S", o, "assign"), o.length;
      }
      const N = cc11001100_hook("N", v(e), "var-init");
      if (!N) throw K(o.replace("{}", e)), Error('Unknown language: "' + e + '"');
      const w = cc11001100_hook("w", Q(N), "var-init");
      let O = cc11001100_hook("O", "", "var-init"),
        x = cc11001100_hook("x", r || w, "var-init");
      const M = cc11001100_hook("M", {}, "var-init"),
        k = cc11001100_hook("k", new d.__emitter(d), "var-init");
      (() => {
        const e = cc11001100_hook("e", [], "var-init");
        for (let n = cc11001100_hook("n", x, "var-init"); n !== N; n = cc11001100_hook("n", n.parent, "assign")) n.scope && e.unshift(n.scope);
        e.forEach(e => k.openNode(e));
      })();
      let S = cc11001100_hook("S", "", "var-init"),
        A = cc11001100_hook("A", 0, "var-init"),
        C = cc11001100_hook("C", 0, "var-init"),
        T = cc11001100_hook("T", 0, "var-init"),
        R = cc11001100_hook("R", !1, "var-init");
      try {
        for (x.matcher.considerAll();;) {
          T++, R ? R = cc11001100_hook("R", !1, "assign") : x.matcher.considerAll(), x.matcher.lastIndex = cc11001100_hook("x.matcher.lastIndex", C, "assign");
          const e = cc11001100_hook("e", x.matcher.exec(t), "var-init");
          if (!e) break;
          const n = cc11001100_hook("n", y(t.substring(C, e.index), e), "var-init");
          C = cc11001100_hook("C", e.index + n, "assign");
        }
        return y(t.substr(C)), k.closeAllNodes(), k.finalize(), O = cc11001100_hook("O", k.toHTML(), "assign"), {
          language: cc11001100_hook("language", e, "object-key-init"),
          value: cc11001100_hook("value", O, "object-key-init"),
          relevance: cc11001100_hook("relevance", A, "object-key-init"),
          illegal: cc11001100_hook("illegal", !1, "object-key-init"),
          _emitter: cc11001100_hook("_emitter", k, "object-key-init"),
          _top: cc11001100_hook("_top", x, "object-key-init")
        };
      } catch (n) {
        if (n.message && n.message.includes("Illegal")) return {
          language: cc11001100_hook("language", e, "object-key-init"),
          value: cc11001100_hook("value", J(t), "object-key-init"),
          illegal: cc11001100_hook("illegal", !0, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          _illegalBy: {
            message: cc11001100_hook("message", n.message, "object-key-init"),
            index: cc11001100_hook("index", C, "object-key-init"),
            context: cc11001100_hook("context", t.slice(C - 100, C + 100), "object-key-init"),
            mode: cc11001100_hook("mode", n.mode, "object-key-init"),
            resultSoFar: cc11001100_hook("resultSoFar", O, "object-key-init")
          },
          _emitter: cc11001100_hook("_emitter", k, "object-key-init")
        };
        if (s) return {
          language: cc11001100_hook("language", e, "object-key-init"),
          value: cc11001100_hook("value", J(t), "object-key-init"),
          illegal: cc11001100_hook("illegal", !1, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          errorRaised: cc11001100_hook("errorRaised", n, "object-key-init"),
          _emitter: cc11001100_hook("_emitter", k, "object-key-init"),
          _top: cc11001100_hook("_top", x, "object-key-init")
        };
        throw n;
      }
    }
    function E(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      t = cc11001100_hook("t", t || d.languages || Object.keys(n), "assign");
      const a = cc11001100_hook("a", (e => {
          const n = cc11001100_hook("n", {
            value: cc11001100_hook("value", J(e), "object-key-init"),
            illegal: cc11001100_hook("illegal", !1, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            _top: cc11001100_hook("_top", l, "object-key-init"),
            _emitter: cc11001100_hook("_emitter", new d.__emitter(d), "object-key-init")
          }, "var-init");
          return n._emitter.addText(e), n;
        })(e), "var-init"),
        i = cc11001100_hook("i", t.filter(v).filter(x).map(n => f(n, e, !1)), "var-init");
      i.unshift(a);
      const r = cc11001100_hook("r", i.sort((e, n) => {
          if (e.relevance !== n.relevance) return n.relevance - e.relevance;
          if (e.language && n.language) {
            if (v(e.language).supersetOf === n.language) return 1;
            if (v(n.language).supersetOf === e.language) return -1;
          }
          return 0;
        }), "var-init"),
        [s, o] = cc11001100_hook("", r, "var-init"),
        c = cc11001100_hook("c", s, "var-init");
      return c.secondBest = cc11001100_hook("c.secondBest", o, "assign"), c;
    }
    function y(e) {
      cc11001100_hook("e", e, "function-parameter");
      let n = cc11001100_hook("n", null, "var-init");
      const t = cc11001100_hook("t", (e => {
        let n = cc11001100_hook("n", e.className + " ", "var-init");
        n += cc11001100_hook("n", e.parentNode ? e.parentNode.className : "", "assign");
        const t = cc11001100_hook("t", d.languageDetectRe.exec(n), "var-init");
        if (t) {
          const n = cc11001100_hook("n", v(t[1]), "var-init");
          return n || (q(o.replace("{}", t[1])), q("Falling back to no-highlight mode for this block.", e)), n ? t[1] : "no-highlight";
        }
        return n.split(/\s+/).find(e => _(e) || v(e));
      })(e), "var-init");
      if (_(t)) return;
      if (M("before:highlightElement", {
        el: cc11001100_hook("el", e, "object-key-init"),
        language: cc11001100_hook("language", t, "object-key-init")
      }), e.children.length > 0 && (d.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(e)), d.throwUnescapedHTML)) throw new V("One of your code blocks includes unescaped HTML.", e.innerHTML);
      n = cc11001100_hook("n", e, "assign");
      const a = cc11001100_hook("a", n.textContent, "var-init"),
        r = cc11001100_hook("r", t ? h(a, {
          language: cc11001100_hook("language", t, "object-key-init"),
          ignoreIllegals: cc11001100_hook("ignoreIllegals", !0, "object-key-init")
        }) : E(a), "var-init");
      e.innerHTML = cc11001100_hook("e.innerHTML", r.value, "assign"), ((e, n, t) => {
        const a = cc11001100_hook("a", n && i[n] || t, "var-init");
        e.classList.add("hljs"), e.classList.add("language-" + a);
      })(e, t, r.language), e.result = cc11001100_hook("e.result", {
        language: cc11001100_hook("language", r.language, "object-key-init"),
        re: cc11001100_hook("re", r.relevance, "object-key-init"),
        relevance: cc11001100_hook("relevance", r.relevance, "object-key-init")
      }, "assign"), r.secondBest && (e.secondBest = cc11001100_hook("e.secondBest", {
        language: cc11001100_hook("language", r.secondBest.language, "object-key-init"),
        relevance: cc11001100_hook("relevance", r.secondBest.relevance, "object-key-init")
      }, "assign")), M("after:highlightElement", {
        el: cc11001100_hook("el", e, "object-key-init"),
        result: cc11001100_hook("result", r, "object-key-init"),
        text: cc11001100_hook("text", a, "object-key-init")
      });
    }
    let N = cc11001100_hook("N", !1, "var-init");
    function w() {
      "loading" !== document.readyState ? document.querySelectorAll(d.cssSelector).forEach(y) : N = cc11001100_hook("N", !0, "assign");
    }
    function v(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e = cc11001100_hook("e", (e || "").toLowerCase(), "assign"), n[e] || n[i[e]];
    }
    function O(e, {
      languageName: n
    }) {
      cc11001100_hook("e", e, "function-parameter");
      "string" == typeof e && (e = cc11001100_hook("e", [e], "assign")), e.forEach(e => {
        i[e.toLowerCase()] = cc11001100_hook("i[e.toLowerCase()]", n, "assign");
      });
    }
    function x(e) {
      cc11001100_hook("e", e, "function-parameter");
      const n = cc11001100_hook("n", v(e), "var-init");
      return n && !n.disableAutodetect;
    }
    function M(e, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      const t = cc11001100_hook("t", e, "var-init");
      r.forEach(e => {
        e[t] && e[t](n);
      });
    }
    "undefined" != typeof window && window.addEventListener && window.addEventListener("DOMContentLoaded", () => {
      N && w();
    }, !1), Object.assign(e, {
      highlight: cc11001100_hook("highlight", h, "object-key-init"),
      highlightAuto: cc11001100_hook("highlightAuto", E, "object-key-init"),
      highlightAll: cc11001100_hook("highlightAll", w, "object-key-init"),
      highlightElement: cc11001100_hook("highlightElement", y, "object-key-init"),
      highlightBlock: cc11001100_hook("highlightBlock", e => (H("10.7.0", "highlightBlock will be removed entirely in v12.0"), H("10.7.0", "Please use highlightElement now."), y(e)), "object-key-init"),
      configure: cc11001100_hook("configure", e => {
        d = cc11001100_hook("d", Y(d, e), "assign");
      }, "object-key-init"),
      initHighlighting: cc11001100_hook("initHighlighting", () => {
        w(), H("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
      }, "object-key-init"),
      initHighlightingOnLoad: cc11001100_hook("initHighlightingOnLoad", () => {
        w(), H("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
      }, "object-key-init"),
      registerLanguage: cc11001100_hook("registerLanguage", (t, a) => {
        let i = cc11001100_hook("i", null, "var-init");
        try {
          i = cc11001100_hook("i", a(e), "assign");
        } catch (e) {
          if (K("Language definition for '{}' could not be registered.".replace("{}", t)), !s) throw e;
          K(e), i = cc11001100_hook("i", l, "assign");
        }
        i.name || (i.name = cc11001100_hook("i.name", t, "assign")), n[t] = cc11001100_hook("n[t]", i, "assign"), i.rawDefinition = cc11001100_hook("i.rawDefinition", a.bind(null, e), "assign"), i.aliases && O(i.aliases, {
          languageName: cc11001100_hook("languageName", t, "object-key-init")
        });
      }, "object-key-init"),
      unregisterLanguage: cc11001100_hook("unregisterLanguage", e => {
        delete n[e];
        for (const n of Object.keys(i)) i[n] === e && delete i[n];
      }, "object-key-init"),
      listLanguages: cc11001100_hook("listLanguages", () => Object.keys(n), "object-key-init"),
      getLanguage: cc11001100_hook("getLanguage", v, "object-key-init"),
      registerAliases: cc11001100_hook("registerAliases", O, "object-key-init"),
      autoDetection: cc11001100_hook("autoDetection", x, "object-key-init"),
      inherit: cc11001100_hook("inherit", Y, "object-key-init"),
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
      s = cc11001100_hook("s", !1, "assign");
    }, "assign"), e.safeMode = cc11001100_hook("e.safeMode", () => {
      s = cc11001100_hook("s", !0, "assign");
    }, "assign"), e.versionString = cc11001100_hook("e.versionString", "11.4.0", "assign"), e.regex = cc11001100_hook("e.regex", {
      concat: cc11001100_hook("concat", m, "object-key-init"),
      lookahead: cc11001100_hook("lookahead", g, "object-key-init"),
      either: cc11001100_hook("either", p, "object-key-init"),
      optional: cc11001100_hook("optional", b, "object-key-init"),
      anyNumberOfTimes: cc11001100_hook("anyNumberOfTimes", u, "object-key-init")
    }, "assign");
    for (const e in T) "object" == typeof T[e] && t(T[e]);
    return Object.assign(e, T), e;
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
    ie = cc11001100_hook("ie", ["any-hover", "any-pointer", "aspect-ratio", "color", "color-gamut", "color-index", "device-aspect-ratio", "device-height", "device-width", "display-mode", "forced-colors", "grid", "height", "hover", "inverted-colors", "monochrome", "orientation", "overflow-block", "overflow-inline", "pointer", "prefers-color-scheme", "prefers-contrast", "prefers-reduced-motion", "prefers-reduced-transparency", "resolution", "scan", "scripting", "update", "width", "min-width", "max-width", "min-height", "max-height"], "var-init"),
    re = cc11001100_hook("re", ["active", "any-link", "blank", "checked", "current", "default", "defined", "dir", "disabled", "drop", "empty", "enabled", "first", "first-child", "first-of-type", "fullscreen", "future", "focus", "focus-visible", "focus-within", "has", "host", "host-context", "hover", "indeterminate", "in-range", "invalid", "is", "lang", "last-child", "last-of-type", "left", "link", "local-link", "not", "nth-child", "nth-col", "nth-last-child", "nth-last-col", "nth-last-of-type", "nth-of-type", "only-child", "only-of-type", "optional", "out-of-range", "past", "placeholder-shown", "read-only", "read-write", "required", "right", "root", "scope", "target", "target-within", "user-invalid", "valid", "visited", "where"], "var-init"),
    se = cc11001100_hook("se", ["after", "backdrop", "before", "cue", "cue-region", "first-letter", "first-line", "grammar-error", "marker", "part", "placeholder", "selection", "slotted", "spelling-error"], "var-init"),
    oe = cc11001100_hook("oe", ["align-content", "align-items", "align-self", "all", "animation", "animation-delay", "animation-direction", "animation-duration", "animation-fill-mode", "animation-iteration-count", "animation-name", "animation-play-state", "animation-timing-function", "backface-visibility", "background", "background-attachment", "background-clip", "background-color", "background-image", "background-origin", "background-position", "background-repeat", "background-size", "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-style", "border-bottom-width", "border-collapse", "border-color", "border-image", "border-image-outset", "border-image-repeat", "border-image-slice", "border-image-source", "border-image-width", "border-left", "border-left-color", "border-left-style", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-style", "border-right-width", "border-spacing", "border-style", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-style", "border-top-width", "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing", "break-after", "break-before", "break-inside", "caption-side", "caret-color", "clear", "clip", "clip-path", "clip-rule", "color", "column-count", "column-fill", "column-gap", "column-rule", "column-rule-color", "column-rule-style", "column-rule-width", "column-span", "column-width", "columns", "contain", "content", "content-visibility", "counter-increment", "counter-reset", "cue", "cue-after", "cue-before", "cursor", "direction", "display", "empty-cells", "filter", "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow", "flex-shrink", "flex-wrap", "float", "flow", "font", "font-display", "font-family", "font-feature-settings", "font-kerning", "font-language-override", "font-size", "font-size-adjust", "font-smoothing", "font-stretch", "font-style", "font-synthesis", "font-variant", "font-variant-caps", "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric", "font-variant-position", "font-variation-settings", "font-weight", "gap", "glyph-orientation-vertical", "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows", "grid-column", "grid-column-end", "grid-column-start", "grid-gap", "grid-row", "grid-row-end", "grid-row-start", "grid-template", "grid-template-areas", "grid-template-columns", "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon", "image-orientation", "image-rendering", "image-resolution", "ime-mode", "isolation", "justify-content", "left", "letter-spacing", "line-break", "line-height", "list-style", "list-style-image", "list-style-position", "list-style-type", "margin", "margin-bottom", "margin-left", "margin-right", "margin-top", "marks", "mask", "mask-border", "mask-border-mode", "mask-border-outset", "mask-border-repeat", "mask-border-slice", "mask-border-source", "mask-border-width", "mask-clip", "mask-composite", "mask-image", "mask-mode", "mask-origin", "mask-position", "mask-repeat", "mask-size", "mask-type", "max-height", "max-width", "min-height", "min-width", "mix-blend-mode", "nav-down", "nav-index", "nav-left", "nav-right", "nav-up", "none", "normal", "object-fit", "object-position", "opacity", "order", "orphans", "outline", "outline-color", "outline-offset", "outline-style", "outline-width", "overflow", "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom", "padding-left", "padding-right", "padding-top", "page-break-after", "page-break-before", "page-break-inside", "pause", "pause-after", "pause-before", "perspective", "perspective-origin", "pointer-events", "position", "quotes", "resize", "rest", "rest-after", "rest-before", "right", "row-gap", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-align", "scroll-snap-stop", "scroll-snap-type", "shape-image-threshold", "shape-margin", "shape-outside", "speak", "speak-as", "src", "tab-size", "table-layout", "text-align", "text-align-all", "text-align-last", "text-combine-upright", "text-decoration", "text-decoration-color", "text-decoration-line", "text-decoration-style", "text-emphasis", "text-emphasis-color", "text-emphasis-position", "text-emphasis-style", "text-indent", "text-justify", "text-orientation", "text-overflow", "text-rendering", "text-shadow", "text-transform", "text-underline-position", "top", "transform", "transform-box", "transform-origin", "transform-style", "transition", "transition-delay", "transition-duration", "transition-property", "transition-timing-function", "unicode-bidi", "vertical-align", "visibility", "voice-balance", "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate", "voice-stress", "voice-volume", "white-space", "widows", "width", "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index"].reverse(), "var-init"),
    le = cc11001100_hook("le", re.concat(se), "var-init");
  var ce = cc11001100_hook("ce", "\\.([0-9](_*[0-9])*)", "var-init"),
    de = cc11001100_hook("de", "[0-9a-fA-F](_*[0-9a-fA-F])*", "var-init"),
    ge = cc11001100_hook("ge", {
      className: cc11001100_hook("className", "number", "object-key-init"),
      variants: cc11001100_hook("variants", [{
        begin: cc11001100_hook("begin", `(\\b([0-9](_*[0-9])*)((${ce})|\\.)?|(${ce}))[eE][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", `\\b([0-9](_*[0-9])*)((${ce})[fFdD]?\\b|\\.([fFdD]\\b)?)`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", `(${ce})[fFdD]?\\b`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b([0-9](_*[0-9])*)[fFdD]\\b", "object-key-init")
      }, {
        begin: cc11001100_hook("begin", `\\b0[xX]((${de})\\.?|(${de})?\\.(${de}))[pP][+-]?([0-9](_*[0-9])*)[fFdD]?\\b`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b(0|[1-9](_*[0-9])*)[lL]?\\b", "object-key-init")
      }, {
        begin: cc11001100_hook("begin", `\\b0[xX](${de})[lL]?\\b`, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b0(_*[0-7])*[lL]?\\b", "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b0[bB][01](_*[01])*[lL]?\\b", "object-key-init")
      }], "object-key-init"),
      relevance: cc11001100_hook("relevance", 0, "object-key-init")
    }, "var-init");
  function ue(e, n, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return -1 === t ? "" : e.replace(n, a => ue(e, n, t - 1));
  }
  const be = cc11001100_hook("be", "[A-Za-z$_][0-9A-Za-z$_]*", "var-init"),
    me = cc11001100_hook("me", ["as", "in", "of", "if", "for", "while", "finally", "var", "new", "function", "do", "return", "void", "else", "break", "catch", "instanceof", "with", "throw", "case", "default", "try", "switch", "continue", "typeof", "delete", "let", "yield", "const", "class", "debugger", "async", "await", "static", "import", "from", "export", "extends"], "var-init"),
    pe = cc11001100_hook("pe", ["true", "false", "null", "undefined", "NaN", "Infinity"], "var-init"),
    _e = cc11001100_hook("_e", ["Object", "Function", "Boolean", "Symbol", "Math", "Date", "Number", "BigInt", "String", "RegExp", "Array", "Float32Array", "Float64Array", "Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Int32Array", "Uint16Array", "Uint32Array", "BigInt64Array", "BigUint64Array", "Set", "Map", "WeakSet", "WeakMap", "ArrayBuffer", "SharedArrayBuffer", "Atomics", "DataView", "JSON", "Promise", "Generator", "GeneratorFunction", "AsyncFunction", "Reflect", "Proxy", "Intl", "WebAssembly"], "var-init"),
    he = cc11001100_hook("he", ["Error", "EvalError", "InternalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"], "var-init"),
    fe = cc11001100_hook("fe", ["setInterval", "setTimeout", "clearInterval", "clearTimeout", "require", "exports", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "unescape"], "var-init"),
    Ee = cc11001100_hook("Ee", ["arguments", "this", "super", "console", "window", "document", "localStorage", "module", "global"], "var-init"),
    ye = cc11001100_hook("ye", [].concat(fe, _e, he), "var-init");
  function Ne(e) {
    cc11001100_hook("e", e, "function-parameter");
    const n = cc11001100_hook("n", e.regex, "var-init"),
      t = cc11001100_hook("t", be, "var-init"),
      a = cc11001100_hook("a", {
        begin: cc11001100_hook("begin", /<[A-Za-z0-9\\._:-]+/, "object-key-init"),
        end: cc11001100_hook("end", /\/[A-Za-z0-9\\._:-]+>|\/>/, "object-key-init"),
        isTrulyOpeningTag: cc11001100_hook("isTrulyOpeningTag", (e, n) => {
          const t = cc11001100_hook("t", e[0].length + e.index, "var-init"),
            a = cc11001100_hook("a", e.input[t], "var-init");
          if ("<" === a || "," === a) return void n.ignoreMatch();
          let i;
          ">" === a && (((e, {
            after: n
          }) => {
            const t = cc11001100_hook("t", "</" + e[0].slice(1), "var-init");
            return -1 !== e.input.indexOf(t, n);
          })(e, {
            after: cc11001100_hook("after", t, "object-key-init")
          }) || n.ignoreMatch()), (i = cc11001100_hook("i", e.input.substr(t).match(/^\s+extends\s+/), "assign")) && 0 === i.index && n.ignoreMatch();
        }, "object-key-init")
      }, "var-init"),
      i = cc11001100_hook("i", {
        $pattern: cc11001100_hook("$pattern", be, "object-key-init"),
        keyword: cc11001100_hook("keyword", me, "object-key-init"),
        literal: cc11001100_hook("literal", pe, "object-key-init"),
        built_in: cc11001100_hook("built_in", ye, "object-key-init"),
        "variable.language": cc11001100_hook("variable.language", Ee, "object-key-init")
      }, "var-init"),
      r = cc11001100_hook("r", "\\.([0-9](_?[0-9])*)", "var-init"),
      s = cc11001100_hook("s", "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", "var-init"),
      o = cc11001100_hook("o", {
        className: cc11001100_hook("className", "number", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", `(\\b(${s})((${r})|\\.)?|(${r}))[eE][+-]?([0-9](_?[0-9])*)\\b`, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", `\\b(${s})\\b((${r})\\b|\\.)?|(${r})\\b`, "object-key-init")
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
      l = cc11001100_hook("l", {
        className: cc11001100_hook("className", "subst", "object-key-init"),
        begin: cc11001100_hook("begin", "\\$\\{", "object-key-init"),
        end: cc11001100_hook("end", "\\}", "object-key-init"),
        keywords: cc11001100_hook("keywords", i, "object-key-init"),
        contains: cc11001100_hook("contains", [], "object-key-init")
      }, "var-init"),
      c = cc11001100_hook("c", {
        begin: cc11001100_hook("begin", "html`", "object-key-init"),
        end: cc11001100_hook("end", "", "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "`", "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !1, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, l], "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init")
        }
      }, "var-init"),
      d = cc11001100_hook("d", {
        begin: cc11001100_hook("begin", "css`", "object-key-init"),
        end: cc11001100_hook("end", "", "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "`", "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !1, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, l], "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "css", "object-key-init")
        }
      }, "var-init"),
      g = cc11001100_hook("g", {
        className: cc11001100_hook("className", "string", "object-key-init"),
        begin: cc11001100_hook("begin", "`", "object-key-init"),
        end: cc11001100_hook("end", "`", "object-key-init"),
        contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, l], "object-key-init")
      }, "var-init"),
      u = cc11001100_hook("u", {
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
              begin: cc11001100_hook("begin", t + "(?=\\s*(-)|$)", "object-key-init"),
              endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, {
              begin: cc11001100_hook("begin", /(?=[^\n])\s/, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }), e.C_BLOCK_COMMENT_MODE, e.C_LINE_COMMENT_MODE], "object-key-init")
      }, "var-init"),
      b = cc11001100_hook("b", [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, c, d, g, o], "var-init");
    l.contains = cc11001100_hook("l.contains", b.concat({
      begin: cc11001100_hook("begin", /\{/, "object-key-init"),
      end: cc11001100_hook("end", /\}/, "object-key-init"),
      keywords: cc11001100_hook("keywords", i, "object-key-init"),
      contains: cc11001100_hook("contains", ["self"].concat(b), "object-key-init")
    }), "assign");
    const m = cc11001100_hook("m", [].concat(u, l.contains), "var-init"),
      p = cc11001100_hook("p", m.concat([{
        begin: cc11001100_hook("begin", /\(/, "object-key-init"),
        end: cc11001100_hook("end", /\)/, "object-key-init"),
        keywords: cc11001100_hook("keywords", i, "object-key-init"),
        contains: cc11001100_hook("contains", ["self"].concat(m), "object-key-init")
      }]), "var-init"),
      _ = cc11001100_hook("_", {
        className: cc11001100_hook("className", "params", "object-key-init"),
        begin: cc11001100_hook("begin", /\(/, "object-key-init"),
        end: cc11001100_hook("end", /\)/, "object-key-init"),
        excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
        excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", i, "object-key-init"),
        contains: cc11001100_hook("contains", p, "object-key-init")
      }, "var-init"),
      h = cc11001100_hook("h", {
        variants: cc11001100_hook("variants", [{
          match: cc11001100_hook("match", [/class/, /\s+/, t, /\s+/, /extends/, /\s+/, n.concat(t, "(", n.concat(/\./, t), ")*")], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.class", "object-key-init"),
            5: cc11001100_hook(5, "keyword", "object-key-init"),
            7: cc11001100_hook(7, "title.class.inherited", "object-key-init")
          }
        }, {
          match: cc11001100_hook("match", [/class/, /\s+/, t], "object-key-init"),
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
          _: cc11001100_hook("_", [..._e, ...he], "object-key-init")
        }
      }, "var-init"),
      E = cc11001100_hook("E", {
        variants: cc11001100_hook("variants", [{
          match: cc11001100_hook("match", [/function/, /\s+/, t, /(?=\s*\()/], "object-key-init")
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
      y = cc11001100_hook("y", {
        match: cc11001100_hook("match", n.concat(/\b/, (N = cc11001100_hook("N", [...fe, "super"], "assign"), n.concat("(?!", N.join("|"), ")")), t, n.lookahead(/\(/)), "object-key-init"),
        className: cc11001100_hook("className", "title.function", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, "var-init");
    var N;
    const w = cc11001100_hook("w", {
        begin: cc11001100_hook("begin", n.concat(/\./, n.lookahead(n.concat(t, /(?![0-9A-Za-z$_(])/))), "object-key-init"),
        end: cc11001100_hook("end", t, "object-key-init"),
        excludeBegin: cc11001100_hook("excludeBegin", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", "prototype", "object-key-init"),
        className: cc11001100_hook("className", "property", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, "var-init"),
      v = cc11001100_hook("v", {
        match: cc11001100_hook("match", [/get|set/, /\s+/, t, /(?=\()/], "object-key-init"),
        className: {
          1: cc11001100_hook(1, "keyword", "object-key-init"),
          3: cc11001100_hook(3, "title.function", "object-key-init")
        },
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", /\(\)/, "object-key-init")
        }, _], "object-key-init")
      }, "var-init"),
      O = cc11001100_hook("O", "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", "var-init"),
      x = cc11001100_hook("x", {
        match: cc11001100_hook("match", [/const|var|let/, /\s+/, t, /\s*/, /=\s*/, /(async\s*)?/, n.lookahead(O)], "object-key-init"),
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
      keywords: cc11001100_hook("keywords", i, "object-key-init"),
      exports: {
        PARAMS_CONTAINS: cc11001100_hook("PARAMS_CONTAINS", p, "object-key-init"),
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
      }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, c, d, g, u, o, f, {
        className: cc11001100_hook("className", "attr", "object-key-init"),
        begin: cc11001100_hook("begin", t + n.lookahead(":"), "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, x, {
        begin: cc11001100_hook("begin", "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*", "object-key-init"),
        keywords: cc11001100_hook("keywords", "return throw case", "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        contains: cc11001100_hook("contains", [u, e.REGEXP_MODE, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", O, "object-key-init"),
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
              keywords: cc11001100_hook("keywords", i, "object-key-init"),
              contains: cc11001100_hook("contains", p, "object-key-init")
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
            begin: cc11001100_hook("begin", a.begin, "object-key-init"),
            "on:begin": cc11001100_hook("on:begin", a.isTrulyOpeningTag, "object-key-init"),
            end: cc11001100_hook("end", a.end, "object-key-init")
          }], "object-key-init"),
          subLanguage: cc11001100_hook("subLanguage", "xml", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", a.begin, "object-key-init"),
            end: cc11001100_hook("end", a.end, "object-key-init"),
            skip: cc11001100_hook("skip", !0, "object-key-init"),
            contains: cc11001100_hook("contains", ["self"], "object-key-init")
          }], "object-key-init")
        }], "object-key-init")
      }, E, {
        beginKeywords: cc11001100_hook("beginKeywords", "while if switch catch for", "object-key-init")
      }, {
        begin: cc11001100_hook("begin", "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{", "object-key-init"),
        returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
        label: cc11001100_hook("label", "func.def", "object-key-init"),
        contains: cc11001100_hook("contains", [_, e.inherit(e.TITLE_MODE, {
          begin: cc11001100_hook("begin", t, "object-key-init"),
          className: cc11001100_hook("className", "title.function", "object-key-init")
        })], "object-key-init")
      }, {
        match: cc11001100_hook("match", /\.\.\./, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, w, {
        match: cc11001100_hook("match", "\\$" + t, "object-key-init"),
        relevance: cc11001100_hook("relevance", 0, "object-key-init")
      }, {
        match: cc11001100_hook("match", [/\bconstructor(?=\s*\()/], "object-key-init"),
        className: {
          1: cc11001100_hook(1, "title.function", "object-key-init")
        },
        contains: cc11001100_hook("contains", [_], "object-key-init")
      }, y, {
        relevance: cc11001100_hook("relevance", 0, "object-key-init"),
        match: cc11001100_hook("match", /\b[A-Z][A-Z_0-9]+\b/, "object-key-init"),
        className: cc11001100_hook("className", "variable.constant", "object-key-init")
      }, h, v, {
        match: cc11001100_hook("match", /\$[(.]/, "object-key-init")
      }], "object-key-init")
    };
  }
  const we = cc11001100_hook("we", e => m(/\b/, e, /\w$/.test(e) ? /\b/ : /\B/), "var-init"),
    ve = cc11001100_hook("ve", ["Protocol", "Type"].map(we), "var-init"),
    Oe = cc11001100_hook("Oe", ["init", "self"].map(we), "var-init"),
    xe = cc11001100_hook("xe", ["Any", "Self"], "var-init"),
    Me = cc11001100_hook("Me", ["actor", "associatedtype", "async", "await", /as\?/, /as!/, "as", "break", "case", "catch", "class", "continue", "convenience", "default", "defer", "deinit", "didSet", "do", "dynamic", "else", "enum", "extension", "fallthrough", /fileprivate\(set\)/, "fileprivate", "final", "for", "func", "get", "guard", "if", "import", "indirect", "infix", /init\?/, /init!/, "inout", /internal\(set\)/, "internal", "in", "is", "isolated", "nonisolated", "lazy", "let", "mutating", "nonmutating", /open\(set\)/, "open", "operator", "optional", "override", "postfix", "precedencegroup", "prefix", /private\(set\)/, "private", "protocol", /public\(set\)/, "public", "repeat", "required", "rethrows", "return", "set", "some", "static", "struct", "subscript", "super", "switch", "throws", "throw", /try\?/, /try!/, "try", "typealias", /unowned\(safe\)/, /unowned\(unsafe\)/, "unowned", "var", "weak", "where", "while", "willSet"], "var-init"),
    ke = cc11001100_hook("ke", ["false", "nil", "true"], "var-init"),
    Se = cc11001100_hook("Se", ["assignment", "associativity", "higherThan", "left", "lowerThan", "none", "right"], "var-init"),
    Ae = cc11001100_hook("Ae", ["#colorLiteral", "#column", "#dsohandle", "#else", "#elseif", "#endif", "#error", "#file", "#fileID", "#fileLiteral", "#filePath", "#function", "#if", "#imageLiteral", "#keyPath", "#line", "#selector", "#sourceLocation", "#warn_unqualified_access", "#warning"], "var-init"),
    Ce = cc11001100_hook("Ce", ["abs", "all", "any", "assert", "assertionFailure", "debugPrint", "dump", "fatalError", "getVaList", "isKnownUniquelyReferenced", "max", "min", "numericCast", "pointwiseMax", "pointwiseMin", "precondition", "preconditionFailure", "print", "readLine", "repeatElement", "sequence", "stride", "swap", "swift_unboxFromSwiftValueWithType", "transcode", "type", "unsafeBitCast", "unsafeDowncast", "withExtendedLifetime", "withUnsafeMutablePointer", "withUnsafePointer", "withVaList", "withoutActuallyEscaping", "zip"], "var-init"),
    Te = cc11001100_hook("Te", p(/[/=\-+!*%<>&|^~?]/, /[\u00A1-\u00A7]/, /[\u00A9\u00AB]/, /[\u00AC\u00AE]/, /[\u00B0\u00B1]/, /[\u00B6\u00BB\u00BF\u00D7\u00F7]/, /[\u2016-\u2017]/, /[\u2020-\u2027]/, /[\u2030-\u203E]/, /[\u2041-\u2053]/, /[\u2055-\u205E]/, /[\u2190-\u23FF]/, /[\u2500-\u2775]/, /[\u2794-\u2BFF]/, /[\u2E00-\u2E7F]/, /[\u3001-\u3003]/, /[\u3008-\u3020]/, /[\u3030]/), "var-init"),
    Re = cc11001100_hook("Re", p(Te, /[\u0300-\u036F]/, /[\u1DC0-\u1DFF]/, /[\u20D0-\u20FF]/, /[\uFE00-\uFE0F]/, /[\uFE20-\uFE2F]/), "var-init"),
    De = cc11001100_hook("De", m(Te, Re, "*"), "var-init"),
    Ie = cc11001100_hook("Ie", p(/[a-zA-Z_]/, /[\u00A8\u00AA\u00AD\u00AF\u00B2-\u00B5\u00B7-\u00BA]/, /[\u00BC-\u00BE\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF]/, /[\u0100-\u02FF\u0370-\u167F\u1681-\u180D\u180F-\u1DBF]/, /[\u1E00-\u1FFF]/, /[\u200B-\u200D\u202A-\u202E\u203F-\u2040\u2054\u2060-\u206F]/, /[\u2070-\u20CF\u2100-\u218F\u2460-\u24FF\u2776-\u2793]/, /[\u2C00-\u2DFF\u2E80-\u2FFF]/, /[\u3004-\u3007\u3021-\u302F\u3031-\u303F\u3040-\uD7FF]/, /[\uF900-\uFD3D\uFD40-\uFDCF\uFDF0-\uFE1F\uFE30-\uFE44]/, /[\uFE47-\uFEFE\uFF00-\uFFFD]/), "var-init"),
    Le = cc11001100_hook("Le", p(Ie, /\d/, /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]/), "var-init"),
    Be = cc11001100_hook("Be", m(Ie, Le, "*"), "var-init"),
    $e = cc11001100_hook("$e", m(/[A-Z]/, Le, "*"), "var-init"),
    Fe = cc11001100_hook("Fe", ["autoclosure", m(/convention\(/, p("swift", "block", "c"), /\)/), "discardableResult", "dynamicCallable", "dynamicMemberLookup", "escaping", "frozen", "GKInspectable", "IBAction", "IBDesignable", "IBInspectable", "IBOutlet", "IBSegueAction", "inlinable", "main", "nonobjc", "NSApplicationMain", "NSCopying", "NSManaged", m(/objc\(/, Be, /\)/), "objc", "objcMembers", "propertyWrapper", "requires_stored_property_inits", "resultBuilder", "testable", "UIApplicationMain", "unknown", "usableFromInline"], "var-init"),
    ze = cc11001100_hook("ze", ["iOS", "iOSApplicationExtension", "macOS", "macOSApplicationExtension", "macCatalyst", "macCatalystApplicationExtension", "watchOS", "watchOSApplicationExtension", "tvOS", "tvOSApplicationExtension", "swift"], "var-init");
  var Ue = cc11001100_hook("Ue", Object.freeze({
    __proto__: cc11001100_hook("__proto__", null, "object-key-init"),
    grmr_bash: cc11001100_hook("grmr_bash", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", {}, "var-init"),
        a = cc11001100_hook("a", {
          begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", {
            begin: cc11001100_hook("begin", /:-/, "object-key-init"),
            contains: cc11001100_hook("contains", [t], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      Object.assign(t, {
        className: cc11001100_hook("className", "variable", "object-key-init"),
        variants: cc11001100_hook("variants", [{
          begin: cc11001100_hook("begin", n.concat(/\$[\w\d#@][\w\d_]*/, "(?![\\w\\d])(?![$])"), "object-key-init")
        }, a], "object-key-init")
      });
      const i = cc11001100_hook("i", {
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
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, t, i], "object-key-init")
        }, "var-init");
      i.contains.push(s);
      const o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", /\$\(\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)\)/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\d+#[0-9a-f]+/, "object-key-init"),
            className: cc11001100_hook("className", "number", "object-key-init")
          }, e.NUMBER_MODE, t], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", e.SHEBANG({
          binary: cc11001100_hook("binary", "(fish|bash|zsh|sh|csh|ksh|tcsh|dash|scsh)", "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), "var-init"),
        c = cc11001100_hook("c", {
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
        contains: cc11001100_hook("contains", [l, e.SHEBANG(), c, o, e.HASH_COMMENT_MODE, r, {
          match: cc11001100_hook("match", /(\/[a-z._-]+)+/, "object-key-init")
        }, s, {
          className: cc11001100_hook("className", "", "object-key-init"),
          begin: cc11001100_hook("begin", /\\"/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /'/, "object-key-init"),
          end: cc11001100_hook("end", /'/, "object-key-init")
        }, t], "object-key-init")
      };
    }, "object-key-init"),
    grmr_c: cc11001100_hook("grmr_c", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", e.COMMENT("//", "$", {
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        a = cc11001100_hook("a", "[a-zA-Z_]\\w*::", "var-init"),
        i = cc11001100_hook("i", "(decltype\\(auto\\)|" + n.optional(a) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "\\b[a-z\\d_]*_t\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", /\batomic_[a-z]{3,6}\b/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
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
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /#\s*[a-z]+\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, e.inherit(s, {
            className: cc11001100_hook("className", "string", "object-key-init")
          }), {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /<.*?>/, "object-key-init")
          }, t, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "title", "object-key-init"),
          begin: cc11001100_hook("begin", n.optional(a) + e.IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", n.optional(a) + e.IDENT_RE + "\\s*\\(", "var-init"),
        g = cc11001100_hook("g", {
          keyword: cc11001100_hook("keyword", ["asm", "auto", "break", "case", "continue", "default", "do", "else", "enum", "extern", "for", "fortran", "goto", "if", "inline", "register", "restrict", "return", "sizeof", "struct", "switch", "typedef", "union", "volatile", "while", "_Alignas", "_Alignof", "_Atomic", "_Generic", "_Noreturn", "_Static_assert", "_Thread_local", "alignas", "alignof", "noreturn", "static_assert", "thread_local", "_Pragma"], "object-key-init"),
          type: cc11001100_hook("type", ["float", "double", "signed", "unsigned", "int", "short", "long", "char", "void", "_Bool", "_Complex", "_Imaginary", "_Decimal32", "_Decimal64", "_Decimal128", "const", "static", "complex", "bool", "imaginary"], "object-key-init"),
          literal: cc11001100_hook("literal", "true false NULL", "object-key-init"),
          built_in: cc11001100_hook("built_in", "std string wstring cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set pair bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap priority_queue make_pair array shared_ptr abort terminate abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf future isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr", "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", [l, r, t, e.C_BLOCK_COMMENT_MODE, o, s], "var-init"),
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
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          contains: cc11001100_hook("contains", u.concat([{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", g, "object-key-init"),
            contains: cc11001100_hook("contains", u.concat(["self"]), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }]), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", {
          begin: cc11001100_hook("begin", "(" + i + "[\\*&\\s]+)+" + d, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\w\s\*&:<>.]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "decltype\\(auto\\)", "object-key-init"),
            keywords: cc11001100_hook("keywords", g, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", d, "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [e.inherit(c, {
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
            keywords: cc11001100_hook("keywords", g, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [t, e.C_BLOCK_COMMENT_MODE, s, o, r, {
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              keywords: cc11001100_hook("keywords", g, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", ["self", t, e.C_BLOCK_COMMENT_MODE, s, o, r], "object-key-init")
            }], "object-key-init")
          }, r, t, e.C_BLOCK_COMMENT_MODE, l], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "C", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["h"], "object-key-init"),
        keywords: cc11001100_hook("keywords", g, "object-key-init"),
        disableAutodetect: cc11001100_hook("disableAutodetect", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        contains: cc11001100_hook("contains", [].concat(b, m, u, [l, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init")
        }, {
          className: cc11001100_hook("className", "class", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "enum class struct union", "object-key-init"),
          end: cc11001100_hook("end", /[{;:<>=]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "final class struct", "object-key-init")
          }, e.TITLE_MODE], "object-key-init")
        }]), "object-key-init"),
        exports: {
          preprocessor: cc11001100_hook("preprocessor", l, "object-key-init"),
          strings: cc11001100_hook("strings", s, "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init")
        }
      };
    }, "object-key-init"),
    grmr_cpp: cc11001100_hook("grmr_cpp", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", e.COMMENT("//", "$", {
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        a = cc11001100_hook("a", "[a-zA-Z_]\\w*::", "var-init"),
        i = cc11001100_hook("i", "(?!struct)(decltype\\(auto\\)|" + n.optional(a) + "[a-zA-Z_]\\w*" + n.optional("<[^<>]+>") + ")", "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b[a-z\\d_]*_t\\b", "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
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
        l = cc11001100_hook("l", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /#\s*[a-z]+\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "if else elif endif define undef warning error line pragma _Pragma ifdef ifndef include", "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\\\n/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, e.inherit(s, {
            className: cc11001100_hook("className", "string", "object-key-init")
          }), {
            className: cc11001100_hook("className", "string", "object-key-init"),
            begin: cc11001100_hook("begin", /<.*?>/, "object-key-init")
          }, t, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "title", "object-key-init"),
          begin: cc11001100_hook("begin", n.optional(a) + e.IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", n.optional(a) + e.IDENT_RE + "\\s*\\(", "var-init"),
        g = cc11001100_hook("g", {
          type: cc11001100_hook("type", ["bool", "char", "char16_t", "char32_t", "char8_t", "double", "float", "int", "long", "short", "void", "wchar_t", "unsigned", "signed", "const", "static"], "object-key-init"),
          keyword: cc11001100_hook("keyword", ["alignas", "alignof", "and", "and_eq", "asm", "atomic_cancel", "atomic_commit", "atomic_noexcept", "auto", "bitand", "bitor", "break", "case", "catch", "class", "co_await", "co_return", "co_yield", "compl", "concept", "const_cast|10", "consteval", "constexpr", "constinit", "continue", "decltype", "default", "delete", "do", "dynamic_cast|10", "else", "enum", "explicit", "export", "extern", "false", "final", "for", "friend", "goto", "if", "import", "inline", "module", "mutable", "namespace", "new", "noexcept", "not", "not_eq", "nullptr", "operator", "or", "or_eq", "override", "private", "protected", "public", "reflexpr", "register", "reinterpret_cast|10", "requires", "return", "sizeof", "static_assert", "static_cast|10", "struct", "switch", "synchronized", "template", "this", "thread_local", "throw", "transaction_safe", "transaction_safe_dynamic", "true", "try", "typedef", "typeid", "typename", "union", "using", "virtual", "volatile", "while", "xor", "xor_eq"], "object-key-init"),
          literal: cc11001100_hook("literal", ["NULL", "false", "nullopt", "nullptr", "true"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["_Pragma"], "object-key-init"),
          _type_hints: cc11001100_hook("_type_hints", ["any", "auto_ptr", "barrier", "binary_semaphore", "bitset", "complex", "condition_variable", "condition_variable_any", "counting_semaphore", "deque", "false_type", "future", "imaginary", "initializer_list", "istringstream", "jthread", "latch", "lock_guard", "multimap", "multiset", "mutex", "optional", "ostringstream", "packaged_task", "pair", "promise", "priority_queue", "queue", "recursive_mutex", "recursive_timed_mutex", "scoped_lock", "set", "shared_future", "shared_lock", "shared_mutex", "shared_timed_mutex", "shared_ptr", "stack", "string_view", "stringstream", "timed_mutex", "thread", "true_type", "tuple", "unique_lock", "unique_ptr", "unordered_map", "unordered_multimap", "unordered_multiset", "unordered_set", "variant", "vector", "weak_ptr", "wstring", "wstring_view"], "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          className: cc11001100_hook("className", "function.dispatch", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: {
            _hint: cc11001100_hook("_hint", ["abort", "abs", "acos", "apply", "as_const", "asin", "atan", "atan2", "calloc", "ceil", "cerr", "cin", "clog", "cos", "cosh", "cout", "declval", "endl", "exchange", "exit", "exp", "fabs", "floor", "fmod", "forward", "fprintf", "fputs", "free", "frexp", "fscanf", "future", "invoke", "isalnum", "isalpha", "iscntrl", "isdigit", "isgraph", "islower", "isprint", "ispunct", "isspace", "isupper", "isxdigit", "labs", "launder", "ldexp", "log", "log10", "make_pair", "make_shared", "make_shared_for_overwrite", "make_tuple", "make_unique", "malloc", "memchr", "memcmp", "memcpy", "memset", "modf", "move", "pow", "printf", "putchar", "puts", "realloc", "scanf", "sin", "sinh", "snprintf", "sprintf", "sqrt", "sscanf", "std", "stderr", "stdin", "stdout", "strcat", "strchr", "strcmp", "strcpy", "strcspn", "strlen", "strncat", "strncmp", "strncpy", "strpbrk", "strrchr", "strspn", "strstr", "swap", "tan", "tanh", "terminate", "to_underlying", "tolower", "toupper", "vfprintf", "visit", "vprintf", "vsprintf"], "object-key-init")
          },
          begin: cc11001100_hook("begin", n.concat(/\b/, /(?!decltype)/, /(?!if)/, /(?!for)/, /(?!switch)/, /(?!while)/, e.IDENT_RE, n.lookahead(/(<[^<>]+>|)\s*\(/)), "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", [u, l, r, t, e.C_BLOCK_COMMENT_MODE, o, s], "var-init"),
        m = cc11001100_hook("m", {
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
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          contains: cc11001100_hook("contains", b.concat([{
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", g, "object-key-init"),
            contains: cc11001100_hook("contains", b.concat(["self"]), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }]), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        p = cc11001100_hook("p", {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", "(" + i + "[\\*&\\s]+)+" + d, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\w\s\*&:<>.]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", "decltype\\(auto\\)", "object-key-init"),
            keywords: cc11001100_hook("keywords", g, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", d, "object-key-init"),
            returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [c], "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /::/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /:/, "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            contains: cc11001100_hook("contains", [s, o], "object-key-init")
          }, {
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            match: cc11001100_hook("match", /,/, "object-key-init")
          }, {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", g, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [t, e.C_BLOCK_COMMENT_MODE, s, o, r, {
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              keywords: cc11001100_hook("keywords", g, "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", ["self", t, e.C_BLOCK_COMMENT_MODE, s, o, r], "object-key-init")
            }], "object-key-init")
          }, r, t, e.C_BLOCK_COMMENT_MODE, l], "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "C++", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"], "object-key-init"),
        keywords: cc11001100_hook("keywords", g, "object-key-init"),
        illegal: cc11001100_hook("illegal", "</", "object-key-init"),
        classNameAliases: {
          "function.dispatch": cc11001100_hook("function.dispatch", "built_in", "object-key-init")
        },
        contains: cc11001100_hook("contains", [].concat(m, p, u, b, [l, {
          begin: cc11001100_hook("begin", "\\b(deque|list|queue|priority_queue|pair|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array|tuple|optional|variant|function)\\s*<(?!<)", "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", r], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init"),
          keywords: cc11001100_hook("keywords", g, "object-key-init")
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
        t = cc11001100_hook("t", e.inherit(e.TITLE_MODE, {
          begin: cc11001100_hook("begin", "[a-zA-Z](\\.?\\w)*", "object-key-init")
        }), "var-init"),
        a = cc11001100_hook("a", {
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
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", '@"', "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", e.inherit(i, {
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
        }), "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", n, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", e.inherit(s, {
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
        }), "var-init"),
        l = cc11001100_hook("l", {
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
        c = cc11001100_hook("c", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /\$@"/, "object-key-init"),
          end: cc11001100_hook("end", '"', "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\{\{/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\}\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }, s], "object-key-init")
        }, "var-init"),
        d = cc11001100_hook("d", e.inherit(c, {
          illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /\{\{/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /\}\}/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '""', "object-key-init")
          }, o], "object-key-init")
        }), "var-init");
      s.contains = cc11001100_hook("s.contains", [c, l, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.C_BLOCK_COMMENT_MODE], "assign"), o.contains = cc11001100_hook("o.contains", [d, l, r, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, a, e.inherit(e.C_BLOCK_COMMENT_MODE, {
        illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
      })], "assign");
      const g = cc11001100_hook("g", {
          variants: cc11001100_hook("variants", [c, l, i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          begin: cc11001100_hook("begin", "<", "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "in out", "object-key-init")
          }, t], "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", e.IDENT_RE + "(<" + e.IDENT_RE + "(\\s*,\\s*" + e.IDENT_RE + ")*>)?(\\[\\])?", "var-init"),
        m = cc11001100_hook("m", {
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
        }, g, a, {
          beginKeywords: cc11001100_hook("beginKeywords", "class interface", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\s:,]/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "where class", "object-key-init")
          }, t, u, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "namespace", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\s:]/, "object-key-init"),
          contains: cc11001100_hook("contains", [t, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "record", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          end: cc11001100_hook("end", /[{;=]/, "object-key-init"),
          illegal: cc11001100_hook("illegal", /[^\s:]/, "object-key-init"),
          contains: cc11001100_hook("contains", [t, u, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
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
          begin: cc11001100_hook("begin", "(" + b + "\\s+)+" + e.IDENT_RE + "\\s*(<[^=]+>\\s*)?\\(", "object-key-init"),
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
            contains: cc11001100_hook("contains", [e.TITLE_MODE, u], "object-key-init"),
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
            contains: cc11001100_hook("contains", [g, a, e.C_BLOCK_COMMENT_MODE], "object-key-init")
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, m], "object-key-init")
      };
    }, "object-key-init"),
    grmr_css: cc11001100_hook("grmr_css", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", te(e), "var-init"),
        a = cc11001100_hook("a", [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "var-init");
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
        contains: cc11001100_hook("contains", [t.BLOCK_COMMENT, {
          begin: cc11001100_hook("begin", /-(webkit|moz|ms|o)-(?=[a-z])/, "object-key-init")
        }, t.CSS_NUMBER_MODE, {
          className: cc11001100_hook("className", "selector-id", "object-key-init"),
          begin: cc11001100_hook("begin", /#[A-Za-z0-9_-]+/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-class", "object-key-init"),
          begin: cc11001100_hook("begin", "\\.[a-zA-Z-][a-zA-Z0-9_-]*", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, t.ATTRIBUTE_SELECTOR_MODE, {
          className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", ":(" + re.join("|") + ")", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", ":(:)?(" + se.join("|") + ")", "object-key-init")
          }], "object-key-init")
        }, t.CSS_VARIABLE, {
          className: cc11001100_hook("className", "attribute", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + oe.join("|") + ")\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /:/, "object-key-init"),
          end: cc11001100_hook("end", /[;}{]/, "object-key-init"),
          contains: cc11001100_hook("contains", [t.BLOCK_COMMENT, t.HEXCOLOR, t.IMPORTANT, t.CSS_NUMBER_MODE, ...a, {
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
          }, t.FUNCTION_DISPATCH], "object-key-init")
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
              attribute: cc11001100_hook("attribute", ie.join(" "), "object-key-init")
            },
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /[a-z-]+(?=:)/, "object-key-init"),
              className: cc11001100_hook("className", "attribute", "object-key-init")
            }, ...a, t.CSS_NUMBER_MODE], "object-key-init")
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
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /([+-]+)?[\d]+_[\d_]+/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", e.NUMBER_RE, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", e.COMMENT(), "var-init");
      a.variants = cc11001100_hook("a.variants", [{
        begin: cc11001100_hook("begin", /;/, "object-key-init"),
        end: cc11001100_hook("end", /$/, "object-key-init")
      }, {
        begin: cc11001100_hook("begin", /#/, "object-key-init"),
        end: cc11001100_hook("end", /$/, "object-key-init")
      }], "assign");
      const i = cc11001100_hook("i", {
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
        s = cc11001100_hook("s", {
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
          contains: cc11001100_hook("contains", [a, r, i, s, t, "self"], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", n.either(/[A-Za-z0-9_-]+/, /"(\\"|[^"])*"/, /'[^']*'/), "var-init");
      return {
        name: cc11001100_hook("name", "TOML, also INI", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["toml"], "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\S/, "object-key-init"),
        contains: cc11001100_hook("contains", [a, {
          className: cc11001100_hook("className", "section", "object-key-init"),
          begin: cc11001100_hook("begin", /\[+/, "object-key-init"),
          end: cc11001100_hook("end", /\]+/, "object-key-init")
        }, {
          begin: cc11001100_hook("begin", n.concat(l, "(\\s*\\.\\s*", l, ")*", n.lookahead(/\s*=\s*[^#\s]/)), "object-key-init"),
          className: cc11001100_hook("className", "attr", "object-key-init"),
          starts: {
            end: cc11001100_hook("end", /$/, "object-key-init"),
            contains: cc11001100_hook("contains", [a, o, r, i, s, t], "object-key-init")
          }
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_java: cc11001100_hook("grmr_java", e => {
      e.regex;
      const n = cc11001100_hook("n", "[\xc0-\u02b8a-zA-Z_$][\xc0-\u02b8a-zA-Z_$0-9]*", "var-init"),
        t = cc11001100_hook("t", n + ue("(?:<" + n + "~~~(?:\\s*,\\s*" + n + "~~~)*>)?", /~~~/g, 2), "var-init"),
        a = cc11001100_hook("a", {
          keyword: cc11001100_hook("keyword", ["synchronized", "abstract", "private", "var", "static", "if", "const ", "for", "while", "strictfp", "finally", "protected", "import", "native", "final", "void", "enum", "else", "break", "transient", "catch", "instanceof", "volatile", "case", "assert", "package", "default", "public", "try", "switch", "continue", "throws", "protected", "public", "private", "module", "requires", "exports", "do", "sealed"], "object-key-init"),
          literal: cc11001100_hook("literal", ["false", "true", "null"], "object-key-init"),
          type: cc11001100_hook("type", ["char", "boolean", "long", "float", "int", "byte", "short", "double"], "object-key-init"),
          built_in: cc11001100_hook("built_in", ["super", "this"], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
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
          keywords: cc11001100_hook("keywords", a, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_BLOCK_COMMENT_MODE], "object-key-init"),
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init")
        }, "var-init");
      return {
        name: cc11001100_hook("name", "Java", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["jsp"], "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
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
          begin: cc11001100_hook("begin", ["(?:" + t + "\\s+)", e.UNDERSCORE_IDENT_RE, /\s*(?=\()/], "object-key-init"),
          className: {
            2: cc11001100_hook(2, "title.function", "object-key-init")
          },
          keywords: cc11001100_hook("keywords", a, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", /\(/, "object-key-init"),
            end: cc11001100_hook("end", /\)/, "object-key-init"),
            keywords: cc11001100_hook("keywords", a, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [i, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, ge, e.C_BLOCK_COMMENT_MODE], "object-key-init")
          }, e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE], "object-key-init")
        }, ge, i], "object-key-init")
      };
    }, "object-key-init"),
    grmr_javascript: cc11001100_hook("grmr_javascript", Ne, "object-key-init"),
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
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE + "@", "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\$\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_NUMBER_MODE], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", "\\$" + e.UNDERSCORE_IDENT_RE, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", '"""', "object-key-init"),
            end: cc11001100_hook("end", '"""(?=[^"])', "object-key-init"),
            contains: cc11001100_hook("contains", [i, a], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "'", "object-key-init"),
            end: cc11001100_hook("end", "'", "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", '"', "object-key-init"),
            end: cc11001100_hook("end", '"', "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, i, a], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      a.contains.push(r);
      const s = cc11001100_hook("s", {
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
        l = cc11001100_hook("l", ge, "var-init"),
        c = cc11001100_hook("c", e.COMMENT("/\\*", "\\*/", {
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
        g = cc11001100_hook("g", d, "var-init");
      return g.variants[1].contains = cc11001100_hook("g.variants[1].contains", [d], "assign"), d.variants[1].contains = cc11001100_hook("d.variants[1].contains", [g], "assign"), {
        name: cc11001100_hook("name", "Kotlin", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["kt", "kts"], "object-key-init"),
        keywords: cc11001100_hook("keywords", n, "object-key-init"),
        contains: cc11001100_hook("contains", [e.COMMENT("/\\*\\*", "\\*/", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
          }], "object-key-init")
        }), e.C_LINE_COMMENT_MODE, c, {
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          begin: cc11001100_hook("begin", /\b(break|continue|return|this)\b/, "object-key-init"),
          starts: {
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "symbol", "object-key-init"),
              begin: cc11001100_hook("begin", /@\w+/, "object-key-init")
            }], "object-key-init")
          }
        }, t, s, o, {
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
              contains: cc11001100_hook("contains", [d, e.C_LINE_COMMENT_MODE, c], "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init")
            }, e.C_LINE_COMMENT_MODE, c, s, o, r, e.C_NUMBER_MODE], "object-key-init")
          }, c], "object-key-init")
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
          }, s, o], "object-key-init")
        }, r, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "^#!/usr/bin/env", "object-key-init"),
          end: cc11001100_hook("end", "$", "object-key-init"),
          illegal: cc11001100_hook("illegal", "\n", "object-key-init")
        }, l], "object-key-init")
      };
    }, "object-key-init"),
    grmr_less: cc11001100_hook("grmr_less", e => {
      const n = cc11001100_hook("n", te(e), "var-init"),
        t = cc11001100_hook("t", le, "var-init"),
        a = cc11001100_hook("a", "([\\w-]+|@\\{[\\w-]+\\})", "var-init"),
        i = cc11001100_hook("i", [], "var-init"),
        r = cc11001100_hook("r", [], "var-init"),
        s = cc11001100_hook("s", e => ({
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", "~?" + e + ".*?" + e, "object-key-init")
        }), "var-init"),
        o = cc11001100_hook("o", (e, n, t) => ({
          className: cc11001100_hook("className", e, "object-key-init"),
          begin: cc11001100_hook("begin", n, "object-key-init"),
          relevance: cc11001100_hook("relevance", t, "object-key-init")
        }), "var-init"),
        l = cc11001100_hook("l", {
          $pattern: cc11001100_hook("$pattern", /[a-z-]+/, "object-key-init"),
          keyword: cc11001100_hook("keyword", "and or not only", "object-key-init"),
          attribute: cc11001100_hook("attribute", ie.join(" "), "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", {
          begin: cc11001100_hook("begin", "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          contains: cc11001100_hook("contains", r, "object-key-init"),
          keywords: cc11001100_hook("keywords", l, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init");
      r.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, s("'"), s('"'), n.CSS_NUMBER_MODE, {
        begin: cc11001100_hook("begin", "(url|data-uri)\\(", "object-key-init"),
        starts: {
          className: cc11001100_hook("className", "string", "object-key-init"),
          end: cc11001100_hook("end", "[\\)\\n]", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
        }
      }, n.HEXCOLOR, c, o("variable", "@@?[\\w-]+", 10), o("variable", "@\\{[\\w-]+\\}"), o("built_in", "~?`[^`]*?`"), {
        className: cc11001100_hook("className", "attribute", "object-key-init"),
        begin: cc11001100_hook("begin", "[\\w-]+\\s*:", "object-key-init"),
        end: cc11001100_hook("end", ":", "object-key-init"),
        returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
        excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init")
      }, n.IMPORTANT);
      const d = cc11001100_hook("d", r.concat({
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          contains: cc11001100_hook("contains", i, "object-key-init")
        }), "var-init"),
        g = cc11001100_hook("g", {
          beginKeywords: cc11001100_hook("beginKeywords", "when", "object-key-init"),
          endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            beginKeywords: cc11001100_hook("beginKeywords", "and not", "object-key-init")
          }].concat(r), "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", {
          begin: cc11001100_hook("begin", a + "\\s*:", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          end: cc11001100_hook("end", /[;}]/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /-(webkit|moz|ms|o)-/, "object-key-init")
          }, n.CSS_VARIABLE, {
            className: cc11001100_hook("className", "attribute", "object-key-init"),
            begin: cc11001100_hook("begin", "\\b(" + oe.join("|") + ")\\b", "object-key-init"),
            end: cc11001100_hook("end", /(?=:)/, "object-key-init"),
            starts: {
              endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
              illegal: cc11001100_hook("illegal", "[<=$]", "object-key-init"),
              relevance: cc11001100_hook("relevance", 0, "object-key-init"),
              contains: cc11001100_hook("contains", r, "object-key-init")
            }
          }], "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          begin: cc11001100_hook("begin", "@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b", "object-key-init"),
          starts: {
            end: cc11001100_hook("end", "[;{}]", "object-key-init"),
            keywords: cc11001100_hook("keywords", l, "object-key-init"),
            returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
            contains: cc11001100_hook("contains", r, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }
        }, "var-init"),
        m = cc11001100_hook("m", {
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
        p = cc11001100_hook("p", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", "[\\.#:&\\[>]", "object-key-init"),
            end: cc11001100_hook("end", "[;{}]", "object-key-init")
          }, {
            begin: cc11001100_hook("begin", a, "object-key-init"),
            end: cc11001100_hook("end", /\{/, "object-key-init")
          }], "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          returnEnd: cc11001100_hook("returnEnd", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", "[<='$\"]", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, g, o("keyword", "all\\b"), o("variable", "@\\{[\\w-]+\\}"), {
            begin: cc11001100_hook("begin", "\\b(" + ae.join("|") + ")\\b", "object-key-init"),
            className: cc11001100_hook("className", "selector-tag", "object-key-init")
          }, n.CSS_NUMBER_MODE, o("selector-tag", a, 0), o("selector-id", "#" + a), o("selector-class", "\\." + a, 0), o("selector-tag", "&", 0), n.ATTRIBUTE_SELECTOR_MODE, {
            className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
            begin: cc11001100_hook("begin", ":(" + re.join("|") + ")", "object-key-init")
          }, {
            className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
            begin: cc11001100_hook("begin", ":(:)?(" + se.join("|") + ")", "object-key-init")
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
          begin: cc11001100_hook("begin", `[\\w-]+:(:)?(${t.join("|")})`, "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [p], "object-key-init")
        }, "var-init");
      return i.push(e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, b, m, _, u, p), {
        name: cc11001100_hook("name", "Less", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        illegal: cc11001100_hook("illegal", "[=>'/<($\"]", "object-key-init"),
        contains: cc11001100_hook("contains", i, "object-key-init")
      };
    }, "object-key-init"),
    grmr_lua: cc11001100_hook("grmr_lua", e => {
      const n = cc11001100_hook("n", "\\[=*\\[", "var-init"),
        t = cc11001100_hook("t", "\\]=*\\]", "var-init"),
        a = cc11001100_hook("a", {
          begin: cc11001100_hook("begin", n, "object-key-init"),
          end: cc11001100_hook("end", t, "object-key-init"),
          contains: cc11001100_hook("contains", ["self"], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", [e.COMMENT("--(?!\\[=*\\[)", "$"), e.COMMENT("--\\[=*\\[", t, {
          contains: cc11001100_hook("contains", [a], "object-key-init"),
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
        contains: cc11001100_hook("contains", i.concat([{
          className: cc11001100_hook("className", "function", "object-key-init"),
          beginKeywords: cc11001100_hook("beginKeywords", "function", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*", "object-key-init")
          }), {
            className: cc11001100_hook("className", "params", "object-key-init"),
            begin: cc11001100_hook("begin", "\\(", "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init"),
            contains: cc11001100_hook("contains", i, "object-key-init")
          }].concat(i), "object-key-init")
        }, e.C_NUMBER_MODE, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", n, "object-key-init"),
          end: cc11001100_hook("end", t, "object-key-init"),
          contains: cc11001100_hook("contains", [a], "object-key-init"),
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
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          begin: cc11001100_hook("begin", /"/, "object-key-init"),
          end: cc11001100_hook("end", /"/, "object-key-init"),
          contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, n], "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          begin: cc11001100_hook("begin", /\$\([\w-]+\s/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: {
            built_in: cc11001100_hook("built_in", "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value", "object-key-init")
          },
          contains: cc11001100_hook("contains", [n], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
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
        contains: cc11001100_hook("contains", [e.HASH_COMMENT_MODE, n, t, a, i, {
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
        t = cc11001100_hook("t", n.concat(/[A-Z_]/, n.optional(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/), "var-init"),
        a = cc11001100_hook("a", {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/, "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          begin: cc11001100_hook("begin", /\s/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            begin: cc11001100_hook("begin", /#?[a-z_][a-z1-9_-]+/, "object-key-init"),
            illegal: cc11001100_hook("illegal", /\n/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", e.inherit(i, {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init")
        }), "var-init"),
        s = cc11001100_hook("s", e.inherit(e.APOS_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init")
        }), "var-init"),
        o = cc11001100_hook("o", e.inherit(e.QUOTE_STRING_MODE, {
          className: cc11001100_hook("className", "string", "object-key-init")
        }), "var-init"),
        l = cc11001100_hook("l", {
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
                contains: cc11001100_hook("contains", [a], "object-key-init")
              }, {
                begin: cc11001100_hook("begin", /'/, "object-key-init"),
                end: cc11001100_hook("end", /'/, "object-key-init"),
                contains: cc11001100_hook("contains", [a], "object-key-init")
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
          contains: cc11001100_hook("contains", [i, o, s, r, {
            begin: cc11001100_hook("begin", /\[/, "object-key-init"),
            end: cc11001100_hook("end", /\]/, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "meta", "object-key-init"),
              begin: cc11001100_hook("begin", /<![a-z]/, "object-key-init"),
              end: cc11001100_hook("end", />/, "object-key-init"),
              contains: cc11001100_hook("contains", [i, r, o, s], "object-key-init")
            }], "object-key-init")
          }], "object-key-init")
        }, e.COMMENT(/<!--/, /-->/, {
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), {
          begin: cc11001100_hook("begin", /<!\[CDATA\[/, "object-key-init"),
          end: cc11001100_hook("end", /\]\]>/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }, a, {
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
          contains: cc11001100_hook("contains", [l], "object-key-init"),
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
          contains: cc11001100_hook("contains", [l], "object-key-init"),
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
          begin: cc11001100_hook("begin", n.concat(/</, n.lookahead(n.concat(t, n.either(/\/>/, />/, /\s/)))), "object-key-init"),
          end: cc11001100_hook("end", /\/?>/, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "name", "object-key-init"),
            begin: cc11001100_hook("begin", t, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            starts: cc11001100_hook("starts", l, "object-key-init")
          }], "object-key-init")
        }, {
          className: cc11001100_hook("className", "tag", "object-key-init"),
          begin: cc11001100_hook("begin", n.concat(/<\//, n.lookahead(n.concat(t, />/))), "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "name", "object-key-init"),
            begin: cc11001100_hook("begin", t, "object-key-init"),
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
        t = cc11001100_hook("t", {
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
        a = cc11001100_hook("a", {
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
        i = cc11001100_hook("i", {
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
      a.contains.push(i), i.contains.push(a);
      let r = cc11001100_hook("r", [n, t], "var-init");
      return a.contains = cc11001100_hook("a.contains", a.contains.concat(r), "assign"), i.contains = cc11001100_hook("i.contains", i.contains.concat(r), "assign"), r = cc11001100_hook("r", r.concat(a, i), "assign"), {
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
        }, a, i, {
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
        }, t, {
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
        t = cc11001100_hook("t", {
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
          begin: cc11001100_hook("begin", "(" + t.keyword.join("|") + ")\\b", "object-key-init"),
          end: cc11001100_hook("end", /(\{|$)/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", t, "object-key-init"),
          contains: cc11001100_hook("contains", [e.UNDERSCORE_TITLE_MODE], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\." + e.UNDERSCORE_IDENT_RE, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_perl: cc11001100_hook("grmr_perl", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", /[dualxmsipngr]{0,12}/, "var-init"),
        a = cc11001100_hook("a", {
          $pattern: cc11001100_hook("$pattern", /[\w.]+/, "object-key-init"),
          keyword: cc11001100_hook("keyword", "abs accept alarm and atan2 bind binmode bless break caller chdir chmod chomp chop chown chr chroot close closedir connect continue cos crypt dbmclose dbmopen defined delete die do dump each else elsif endgrent endhostent endnetent endprotoent endpwent endservent eof eval exec exists exit exp fcntl fileno flock for foreach fork format formline getc getgrent getgrgid getgrnam gethostbyaddr gethostbyname gethostent getlogin getnetbyaddr getnetbyname getnetent getpeername getpgrp getpriority getprotobyname getprotobynumber getprotoent getpwent getpwnam getpwuid getservbyname getservbyport getservent getsockname getsockopt given glob gmtime goto grep gt hex if index int ioctl join keys kill last lc lcfirst length link listen local localtime log lstat lt ma map mkdir msgctl msgget msgrcv msgsnd my ne next no not oct open opendir or ord our pack package pipe pop pos print printf prototype push q|0 qq quotemeta qw qx rand read readdir readline readlink readpipe recv redo ref rename require reset return reverse rewinddir rindex rmdir say scalar seek seekdir select semctl semget semop send setgrent sethostent setnetent setpgrp setpriority setprotoent setpwent setservent setsockopt shift shmctl shmget shmread shmwrite shutdown sin sleep socket socketpair sort splice split sprintf sqrt srand stat state study sub substr symlink syscall sysopen sysread sysseek system syswrite tell telldir tie tied time times tr truncate uc ucfirst umask undef unless unlink unpack unshift untie until use utime values vec wait waitpid wantarray warn when while write x|0 xor y|0", "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", "[$@]\\{", "object-key-init"),
          end: cc11001100_hook("end", "\\}", "object-key-init"),
          keywords: cc11001100_hook("keywords", a, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          begin: cc11001100_hook("begin", /->\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", /\$\d/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/[$%@](\^\w\b|#\w+(::\w+)*|\{\w+\}|\w+(::\w*)*)/, "(?![A-Za-z])(?![@$%])"), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /[$%@][^\s\w{]/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", [e.BACKSLASH_ESCAPE, i, s], "var-init"),
        l = cc11001100_hook("l", [/!/, /\//, /\|/, /\?/, /'/, /"/, /#/], "var-init"),
        c = cc11001100_hook("c", (e, a, i = "\\1") => {
          const r = cc11001100_hook("r", "\\1" === i ? i : n.concat(i, a), "var-init");
          return n.concat(n.concat("(?:", e, ")"), a, /(?:\\.|[^\\\/])*?/, r, /(?:\\.|[^\\\/])*?/, i, t);
        }, "var-init"),
        d = cc11001100_hook("d", (e, a, i) => n.concat(n.concat("(?:", e, ")"), a, /(?:\\.|[^\\\/])*?/, i, t), "var-init"),
        g = cc11001100_hook("g", [s, e.HASH_COMMENT_MODE, e.COMMENT(/^=\w/, /=cut/, {
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
              begin: cc11001100_hook("begin", c("s|tr|y", n.either(...l, {
                capture: cc11001100_hook("capture", !0, "object-key-init")
              })), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", c("s|tr|y", "\\(", "\\)"), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", c("s|tr|y", "\\[", "\\]"), "object-key-init")
            }, {
              begin: cc11001100_hook("begin", c("s|tr|y", "\\{", "\\}"), "object-key-init")
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
              begin: cc11001100_hook("begin", d("m|qr", n.either(...l, {
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
      return i.contains = cc11001100_hook("i.contains", g, "assign"), r.contains = cc11001100_hook("r.contains", g, "assign"), {
        name: cc11001100_hook("name", "Perl", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["pl", "pm"], "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
        contains: cc11001100_hook("contains", g, "object-key-init")
      };
    }, "object-key-init"),
    grmr_php: cc11001100_hook("grmr_php", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", "[a-zA-Z0-9_\x7f-\xff]*(?![A-Za-z0-9])(?![$]))", "var-init"),
        a = cc11001100_hook("a", n.concat("([a-zA-Z_\\x7f-\\xff]", t), "var-init"),
        i = cc11001100_hook("i", n.concat("([A-Z]", t), "var-init"),
        r = cc11001100_hook("r", {
          scope: cc11001100_hook("scope", "variable", "object-key-init"),
          match: cc11001100_hook("match", "\\$+" + a, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
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
        l = cc11001100_hook("l", "[ \t\n]", "var-init"),
        c = cc11001100_hook("c", {
          scope: cc11001100_hook("scope", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [e.inherit(e.QUOTE_STRING_MODE, {
            illegal: cc11001100_hook("illegal", null, "object-key-init"),
            contains: cc11001100_hook("contains", e.QUOTE_STRING_MODE.contains.concat(s), "object-key-init")
          }), o, e.END_SAME_AS_BEGIN({
            begin: cc11001100_hook("begin", /<<<[ \t]*(\w+)\n/, "object-key-init"),
            end: cc11001100_hook("end", /[ \t]*(\w+)\b/, "object-key-init"),
            contains: cc11001100_hook("contains", e.QUOTE_STRING_MODE.contains.concat(s), "object-key-init")
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
        g = cc11001100_hook("g", ["__CLASS__", "__DIR__", "__FILE__", "__FUNCTION__", "__COMPILER_HALT_OFFSET__", "__LINE__", "__METHOD__", "__NAMESPACE__", "__TRAIT__", "die", "echo", "exit", "include", "include_once", "print", "require", "require_once", "array", "abstract", "and", "as", "binary", "bool", "boolean", "break", "callable", "case", "catch", "class", "clone", "const", "continue", "declare", "default", "do", "double", "else", "elseif", "empty", "enddeclare", "endfor", "endforeach", "endif", "endswitch", "endwhile", "enum", "eval", "extends", "final", "finally", "float", "for", "foreach", "from", "global", "goto", "if", "implements", "instanceof", "insteadof", "int", "integer", "interface", "isset", "iterable", "list", "match|0", "mixed", "new", "never", "object", "or", "private", "protected", "public", "readonly", "real", "return", "string", "switch", "throw", "trait", "try", "unset", "use", "var", "void", "while", "xor", "yield"], "var-init"),
        u = cc11001100_hook("u", ["Error|0", "AppendIterator", "ArgumentCountError", "ArithmeticError", "ArrayIterator", "ArrayObject", "AssertionError", "BadFunctionCallException", "BadMethodCallException", "CachingIterator", "CallbackFilterIterator", "CompileError", "Countable", "DirectoryIterator", "DivisionByZeroError", "DomainException", "EmptyIterator", "ErrorException", "Exception", "FilesystemIterator", "FilterIterator", "GlobIterator", "InfiniteIterator", "InvalidArgumentException", "IteratorIterator", "LengthException", "LimitIterator", "LogicException", "MultipleIterator", "NoRewindIterator", "OutOfBoundsException", "OutOfRangeException", "OuterIterator", "OverflowException", "ParentIterator", "ParseError", "RangeException", "RecursiveArrayIterator", "RecursiveCachingIterator", "RecursiveCallbackFilterIterator", "RecursiveDirectoryIterator", "RecursiveFilterIterator", "RecursiveIterator", "RecursiveIteratorIterator", "RecursiveRegexIterator", "RecursiveTreeIterator", "RegexIterator", "RuntimeException", "SeekableIterator", "SplDoublyLinkedList", "SplFileInfo", "SplFileObject", "SplFixedArray", "SplHeap", "SplMaxHeap", "SplMinHeap", "SplObjectStorage", "SplObserver", "SplPriorityQueue", "SplQueue", "SplStack", "SplSubject", "SplTempFileObject", "TypeError", "UnderflowException", "UnexpectedValueException", "UnhandledMatchError", "ArrayAccess", "BackedEnum", "Closure", "Fiber", "Generator", "Iterator", "IteratorAggregate", "Serializable", "Stringable", "Throwable", "Traversable", "UnitEnum", "WeakReference", "WeakMap", "Directory", "__PHP_Incomplete_Class", "parent", "php_user_filter", "self", "static", "stdClass"], "var-init"),
        b = cc11001100_hook("b", {
          keyword: cc11001100_hook("keyword", g, "object-key-init"),
          literal: cc11001100_hook("literal", (e => {
            const n = cc11001100_hook("n", [], "var-init");
            return ["false", "null", "true"].forEach(e => {
              n.push(e), e.toLowerCase() === e ? n.push(e.toUpperCase()) : n.push(e.toLowerCase());
            }), n;
          })(), "object-key-init"),
          built_in: cc11001100_hook("built_in", u, "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", e => e.map(e => e.replace(/\|\d+$/, "")), "var-init"),
        p = cc11001100_hook("p", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/new/, n.concat(l, "+"), n.concat("(?!", m(u).join("\\b|"), "\\b)"), n.concat(/\\?/, a), n.concat(l, "*", /\(/)], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "keyword", "object-key-init"),
              4: cc11001100_hook(4, "title.class", "object-key-init")
            }
          }], "object-key-init")
        }, "var-init"),
        _ = cc11001100_hook("_", {
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          match: cc11001100_hook("match", [/\b/, n.concat("(?!fn\\b|function\\b|", m(g).join("\\b|"), "|", m(u).join("\\b|"), "\\b)"), a, n.concat(l, "*"), n.lookahead(/(?=\()/)], "object-key-init"),
          scope: {
            3: cc11001100_hook(3, "title.function.invoke", "object-key-init")
          }
        }, "var-init"),
        h = cc11001100_hook("h", n.concat(a, "\\b(?!\\()"), "var-init"),
        f = cc11001100_hook("f", {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [n.concat(/::/, n.lookahead(/(?!class\b)/)), h], "object-key-init"),
            scope: {
              2: cc11001100_hook(2, "variable.constant", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [/::/, /class/], "object-key-init"),
            scope: {
              2: cc11001100_hook(2, "variable.language", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [i, n.concat("::", n.lookahead(/(?!class\b)/))], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "title.class", "object-key-init")
            }
          }, {
            match: cc11001100_hook("match", [i, /::/, /class/], "object-key-init"),
            scope: {
              1: cc11001100_hook(1, "title.class", "object-key-init"),
              3: cc11001100_hook(3, "variable.language", "object-key-init")
            }
          }], "object-key-init")
        }, "var-init");
      return {
        case_insensitive: cc11001100_hook("case_insensitive", !1, "object-key-init"),
        keywords: cc11001100_hook("keywords", b, "object-key-init"),
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
          match: cc11001100_hook("match", [/const/, /\s/, a, /\s*=/], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "variable.constant", "object-key-init")
          }
        }, p, {
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
            keywords: cc11001100_hook("keywords", b, "object-key-init"),
            contains: cc11001100_hook("contains", ["self", r, f, e.C_BLOCK_COMMENT_MODE, c, d], "object-key-init")
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
        }, c, d], "object-key-init")
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
        t = cc11001100_hook("t", /[\p{XID_Start}_]\p{XID_Continue}*/u, "var-init"),
        a = cc11001100_hook("a", ["and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif", "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda", "nonlocal|10", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"], "var-init"),
        i = cc11001100_hook("i", {
          $pattern: cc11001100_hook("$pattern", /[A-Za-z]\w+|__\w+__/, "object-key-init"),
          keyword: cc11001100_hook("keyword", a, "object-key-init"),
          built_in: cc11001100_hook("built_in", ["__import__", "abs", "all", "any", "ascii", "bin", "bool", "breakpoint", "bytearray", "bytes", "callable", "chr", "classmethod", "compile", "complex", "delattr", "dict", "dir", "divmod", "enumerate", "eval", "exec", "filter", "float", "format", "frozenset", "getattr", "globals", "hasattr", "hash", "help", "hex", "id", "input", "int", "isinstance", "issubclass", "iter", "len", "list", "locals", "map", "max", "memoryview", "min", "next", "object", "oct", "open", "ord", "pow", "print", "property", "range", "repr", "reversed", "round", "set", "setattr", "slice", "sorted", "staticmethod", "str", "sum", "super", "tuple", "type", "vars", "zip"], "object-key-init"),
          literal: cc11001100_hook("literal", ["__debug__", "Ellipsis", "False", "None", "NotImplemented", "True"], "object-key-init"),
          type: cc11001100_hook("type", ["Any", "Callable", "Coroutine", "Dict", "List", "Literal", "Generic", "Optional", "Sequence", "Set", "Tuple", "Type", "Union"], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /^(>>>|\.\.\.) /, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", i, "object-key-init"),
          illegal: cc11001100_hook("illegal", /#/, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", {
          begin: cc11001100_hook("begin", /\{\{/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
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
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, r, o, s], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])"""/, "object-key-init"),
            end: cc11001100_hook("end", /"""/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, r, o, s], "object-key-init")
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
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, o, s], "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /([fF][rR]|[rR][fF]|[fF])"/, "object-key-init"),
            end: cc11001100_hook("end", /"/, "object-key-init"),
            contains: cc11001100_hook("contains", [e.BACKSLASH_ESCAPE, o, s], "object-key-init")
          }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE], "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", "[0-9](_?[0-9])*", "var-init"),
        d = cc11001100_hook("d", `(\\b(${c}))?\\.(${c})|\\b(${c})\\.`, "var-init"),
        g = cc11001100_hook("g", "\\b|" + a.join("|"), "var-init"),
        u = cc11001100_hook("u", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", `(\\b(${c})|(${d}))[eE][+-]?(${c})[jJ]?(?=${g})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `(${d})[jJ]?`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${g})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b0[bB](_?[01])+[lL]?(?=${g})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b0[oO](_?[0-7])+[lL]?(?=${g})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${g})`, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", `\\b(${c})[jJ](?=${g})`, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          className: cc11001100_hook("className", "comment", "object-key-init"),
          begin: cc11001100_hook("begin", n.lookahead(/# type:/), "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: cc11001100_hook("keywords", i, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", /# type:/, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", /#/, "object-key-init"),
            end: cc11001100_hook("end", /\b\B/, "object-key-init"),
            endsWithParent: cc11001100_hook("endsWithParent", !0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        m = cc11001100_hook("m", {
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
            keywords: cc11001100_hook("keywords", i, "object-key-init"),
            contains: cc11001100_hook("contains", ["self", r, u, l, e.HASH_COMMENT_MODE], "object-key-init")
          }], "object-key-init")
        }, "var-init");
      return s.contains = cc11001100_hook("s.contains", [l, u, r], "assign"), {
        name: cc11001100_hook("name", "Python", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["py", "gyp", "ipython"], "object-key-init"),
        unicodeRegex: cc11001100_hook("unicodeRegex", !0, "object-key-init"),
        keywords: cc11001100_hook("keywords", i, "object-key-init"),
        illegal: cc11001100_hook("illegal", /(<\/|->|\?)|=>/, "object-key-init"),
        contains: cc11001100_hook("contains", [r, u, {
          begin: cc11001100_hook("begin", /\bself\b/, "object-key-init")
        }, {
          beginKeywords: cc11001100_hook("beginKeywords", "if", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, l, b, e.HASH_COMMENT_MODE, {
          match: cc11001100_hook("match", [/\bdef/, /\s+/, t], "object-key-init"),
          scope: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [m], "object-key-init")
        }, {
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", [/\bclass/, /\s+/, t, /\s*/, /\(\s*/, t, /\s*\)/], "object-key-init")
          }, {
            match: cc11001100_hook("match", [/\bclass/, /\s+/, t], "object-key-init")
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
          contains: cc11001100_hook("contains", [u, m, l], "object-key-init")
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
        t = cc11001100_hook("t", /(?:(?:[a-zA-Z]|\.[._a-zA-Z])[._a-zA-Z0-9]*)|\.(?!\d)/, "var-init"),
        a = cc11001100_hook("a", n.either(/0[xX][0-9a-fA-F]+\.[0-9a-fA-F]*[pP][+-]?\d+i?/, /0[xX][0-9a-fA-F]+(?:[pP][+-]?\d+)?[Li]?/, /(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?[Li]?/), "var-init"),
        i = cc11001100_hook("i", /[=!<>:]=|\|\||&&|:::?|<-|<<-|->>|->|\|>|[-+*\/?!$&|:<=>@^~]|\*\*/, "var-init"),
        r = cc11001100_hook("r", n.either(/[()]/, /[{}]/, /\[\[/, /[[\]]/, /\\/, /,/), "var-init");
      return {
        name: cc11001100_hook("name", "R", "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", t, "object-key-init"),
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
                match: cc11001100_hook("match", t, "object-key-init")
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
            match: cc11001100_hook("match", [i, a], "object-key-init")
          }, {
            scope: {
              1: cc11001100_hook(1, "operator", "object-key-init"),
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [/%[^%]*%/, a], "object-key-init")
          }, {
            scope: {
              1: cc11001100_hook(1, "punctuation", "object-key-init"),
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [r, a], "object-key-init")
          }, {
            scope: {
              2: cc11001100_hook(2, "number", "object-key-init")
            },
            match: cc11001100_hook("match", [/[^a-zA-Z0-9._]|^/, a], "object-key-init")
          }], "object-key-init")
        }, {
          scope: {
            3: cc11001100_hook(3, "operator", "object-key-init")
          },
          match: cc11001100_hook("match", [t, /\s+/, /<-/, /\s+/], "object-key-init")
        }, {
          scope: cc11001100_hook("scope", "operator", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", i, "object-key-init")
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
        t = cc11001100_hook("t", "([a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?)", "var-init"),
        a = cc11001100_hook("a", {
          keyword: cc11001100_hook("keyword", "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor __FILE__", "object-key-init"),
          built_in: cc11001100_hook("built_in", "proc lambda", "object-key-init"),
          literal: cc11001100_hook("literal", "true false nil", "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          className: cc11001100_hook("className", "doctag", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z]+", "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          begin: cc11001100_hook("begin", "#<", "object-key-init"),
          end: cc11001100_hook("end", ">", "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", [e.COMMENT("#", "$", {
          contains: cc11001100_hook("contains", [i], "object-key-init")
        }), e.COMMENT("^=begin", "^=end", {
          contains: cc11001100_hook("contains", [i], "object-key-init"),
          relevance: cc11001100_hook("relevance", 10, "object-key-init")
        }), e.COMMENT("^__END__", "\\n$")], "var-init"),
        o = cc11001100_hook("o", {
          className: cc11001100_hook("className", "subst", "object-key-init"),
          begin: cc11001100_hook("begin", /#\{/, "object-key-init"),
          end: cc11001100_hook("end", /\}/, "object-key-init"),
          keywords: cc11001100_hook("keywords", a, "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
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
        c = cc11001100_hook("c", "[0-9](_?[0-9])*", "var-init"),
        d = cc11001100_hook("d", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", `\\b([1-9](_?[0-9])*|0)(\\.(${c}))?([eE][+-]?(${c})|r)?i?\\b`, "object-key-init")
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
        g = cc11001100_hook("g", {
          className: cc11001100_hook("className", "params", "object-key-init"),
          begin: cc11001100_hook("begin", "\\(", "object-key-init"),
          end: cc11001100_hook("end", "\\)", "object-key-init"),
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", a, "object-key-init")
        }, "var-init"),
        u = cc11001100_hook("u", [l, {
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
          }].concat(s), "object-key-init")
        }, {
          className: cc11001100_hook("className", "function", "object-key-init"),
          begin: cc11001100_hook("begin", n.concat(/def\s+/, n.lookahead(t + "\\s*(\\(|;|$)")), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: cc11001100_hook("keywords", "def", "object-key-init"),
          end: cc11001100_hook("end", "$|;", "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            begin: cc11001100_hook("begin", t, "object-key-init")
          }), g].concat(s), "object-key-init")
        }, {
          begin: cc11001100_hook("begin", e.IDENT_RE + "::", "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", e.UNDERSCORE_IDENT_RE + "(!|\\?)?:", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "symbol", "object-key-init"),
          begin: cc11001100_hook("begin", ":(?!\\s)", "object-key-init"),
          contains: cc11001100_hook("contains", [l, {
            begin: cc11001100_hook("begin", t, "object-key-init")
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
          keywords: cc11001100_hook("keywords", a, "object-key-init")
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
          }].concat(r, s), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }].concat(r, s), "var-init");
      o.contains = cc11001100_hook("o.contains", u, "assign"), g.contains = cc11001100_hook("g.contains", u, "assign");
      const b = cc11001100_hook("b", [{
        begin: cc11001100_hook("begin", /^\s*=>/, "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", u, "object-key-init")
        }
      }, {
        className: cc11001100_hook("className", "meta", "object-key-init"),
        begin: cc11001100_hook("begin", "^([>?]>|[\\w#]+\\(\\w+\\):\\d+:\\d+>|(\\w+-)?\\d+\\.\\d+\\.\\d+(p\\d+)?[^\\d][^>]+>)(?=[ ])", "object-key-init"),
        starts: {
          end: cc11001100_hook("end", "$", "object-key-init"),
          contains: cc11001100_hook("contains", u, "object-key-init")
        }
      }], "var-init");
      return s.unshift(r), {
        name: cc11001100_hook("name", "Ruby", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["rb", "gemspec", "podspec", "thor", "irb"], "object-key-init"),
        keywords: cc11001100_hook("keywords", a, "object-key-init"),
        illegal: cc11001100_hook("illegal", /\/\*/, "object-key-init"),
        contains: cc11001100_hook("contains", [e.SHEBANG({
          binary: cc11001100_hook("binary", "ruby", "object-key-init")
        })].concat(b).concat(s).concat(u), "object-key-init")
      };
    }, "object-key-init"),
    grmr_rust: cc11001100_hook("grmr_rust", e => {
      const n = cc11001100_hook("n", e.regex, "var-init"),
        t = cc11001100_hook("t", {
          className: cc11001100_hook("className", "title.function.invoke", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          begin: cc11001100_hook("begin", n.concat(/\b/, /(?!let\b)/, e.IDENT_RE, n.lookahead(/\s*\(/)), "object-key-init")
        }, "var-init"),
        a = cc11001100_hook("a", "([ui](8|16|32|64|128|size)|f(32|64))?", "var-init"),
        i = cc11001100_hook("i", ["drop ", "Copy", "Send", "Sized", "Sync", "Drop", "Fn", "FnMut", "FnOnce", "ToOwned", "Clone", "Debug", "PartialEq", "PartialOrd", "Eq", "Ord", "AsRef", "AsMut", "Into", "From", "Default", "Iterator", "Extend", "IntoIterator", "DoubleEndedIterator", "ExactSizeIterator", "SliceConcatExt", "ToString", "assert!", "assert_eq!", "bitflags!", "bytes!", "cfg!", "col!", "concat!", "concat_idents!", "debug_assert!", "debug_assert_eq!", "env!", "panic!", "file!", "format!", "format_args!", "include_bin!", "include_str!", "line!", "local_data_key!", "module_path!", "option_env!", "print!", "println!", "select!", "stringify!", "try!", "unimplemented!", "unreachable!", "vec!", "write!", "writeln!", "macro_rules!", "assert_ne!", "debug_assert_ne!"], "var-init");
      return {
        name: cc11001100_hook("name", "Rust", "object-key-init"),
        aliases: cc11001100_hook("aliases", ["rs"], "object-key-init"),
        keywords: {
          $pattern: cc11001100_hook("$pattern", e.IDENT_RE + "!?", "object-key-init"),
          type: cc11001100_hook("type", ["i8", "i16", "i32", "i64", "i128", "isize", "u8", "u16", "u32", "u64", "u128", "usize", "f32", "f64", "str", "char", "bool", "Box", "Option", "Result", "String", "Vec"], "object-key-init"),
          keyword: cc11001100_hook("keyword", ["abstract", "as", "async", "await", "become", "box", "break", "const", "continue", "crate", "do", "dyn", "else", "enum", "extern", "false", "final", "fn", "for", "if", "impl", "in", "let", "loop", "macro", "match", "mod", "move", "mut", "override", "priv", "pub", "ref", "return", "self", "Self", "static", "struct", "super", "trait", "true", "try", "type", "typeof", "unsafe", "unsized", "use", "virtual", "where", "while", "yield"], "object-key-init"),
          literal: cc11001100_hook("literal", ["true", "false", "Some", "None", "Ok", "Err"], "object-key-init"),
          built_in: cc11001100_hook("built_in", i, "object-key-init")
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
            begin: cc11001100_hook("begin", "\\b0b([01_]+)" + a, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0o([0-7_]+)" + a, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b0x([A-Fa-f0-9_]+)" + a, "object-key-init")
          }, {
            begin: cc11001100_hook("begin", "\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)" + a, "object-key-init")
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
            built_in: cc11001100_hook("built_in", i, "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "punctuation", "object-key-init"),
          begin: cc11001100_hook("begin", "->", "object-key-init")
        }, t], "object-key-init")
      };
    }, "object-key-init"),
    grmr_scss: cc11001100_hook("grmr_scss", e => {
      const n = cc11001100_hook("n", te(e), "var-init"),
        t = cc11001100_hook("t", se, "var-init"),
        a = cc11001100_hook("a", re, "var-init"),
        i = cc11001100_hook("i", "@[a-z-]+", "var-init"),
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
          begin: cc11001100_hook("begin", ":(" + a.join("|") + ")", "object-key-init")
        }, {
          className: cc11001100_hook("className", "selector-pseudo", "object-key-init"),
          begin: cc11001100_hook("begin", ":(:)?(" + t.join("|") + ")", "object-key-init")
        }, r, {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          contains: cc11001100_hook("contains", [n.CSS_NUMBER_MODE], "object-key-init")
        }, n.CSS_VARIABLE, {
          className: cc11001100_hook("className", "attribute", "object-key-init"),
          begin: cc11001100_hook("begin", "\\b(" + oe.join("|") + ")\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b", "object-key-init")
        }, {
          begin: cc11001100_hook("begin", /:/, "object-key-init"),
          end: cc11001100_hook("end", /[;}{]/, "object-key-init"),
          contains: cc11001100_hook("contains", [n.BLOCK_COMMENT, r, n.HEXCOLOR, n.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, n.IMPORTANT], "object-key-init")
        }, {
          begin: cc11001100_hook("begin", "@(page|font-face)", "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", i, "object-key-init"),
            keyword: cc11001100_hook("keyword", "@page @font-face", "object-key-init")
          }
        }, {
          begin: cc11001100_hook("begin", "@", "object-key-init"),
          end: cc11001100_hook("end", "[{;]", "object-key-init"),
          returnBegin: cc11001100_hook("returnBegin", !0, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", /[a-z-]+/, "object-key-init"),
            keyword: cc11001100_hook("keyword", "and or not only", "object-key-init"),
            attribute: cc11001100_hook("attribute", ie.join(" "), "object-key-init")
          },
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", i, "object-key-init"),
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
        t = cc11001100_hook("t", e.COMMENT("--", "$"), "var-init"),
        a = cc11001100_hook("a", ["true", "false", "unknown"], "var-init"),
        i = cc11001100_hook("i", ["bigint", "binary", "blob", "boolean", "char", "character", "clob", "date", "dec", "decfloat", "decimal", "float", "int", "integer", "interval", "nchar", "nclob", "national", "numeric", "real", "row", "smallint", "time", "timestamp", "varchar", "varying", "varbinary"], "var-init"),
        r = cc11001100_hook("r", ["abs", "acos", "array_agg", "asin", "atan", "avg", "cast", "ceil", "ceiling", "coalesce", "corr", "cos", "cosh", "count", "covar_pop", "covar_samp", "cume_dist", "dense_rank", "deref", "element", "exp", "extract", "first_value", "floor", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "last_value", "lead", "listagg", "ln", "log", "log10", "lower", "max", "min", "mod", "nth_value", "ntile", "nullif", "percent_rank", "percentile_cont", "percentile_disc", "position", "position_regex", "power", "rank", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "row_number", "sin", "sinh", "sqrt", "stddev_pop", "stddev_samp", "substring", "substring_regex", "sum", "tan", "tanh", "translate", "translate_regex", "treat", "trim", "trim_array", "unnest", "upper", "value_of", "var_pop", "var_samp", "width_bucket"], "var-init"),
        s = cc11001100_hook("s", ["create table", "insert into", "primary key", "foreign key", "not null", "alter table", "add constraint", "grouping sets", "on overflow", "character set", "respect nulls", "ignore nulls", "nulls first", "nulls last", "depth first", "breadth first"], "var-init"),
        o = cc11001100_hook("o", r, "var-init"),
        l = cc11001100_hook("l", ["abs", "acos", "all", "allocate", "alter", "and", "any", "are", "array", "array_agg", "array_max_cardinality", "as", "asensitive", "asin", "asymmetric", "at", "atan", "atomic", "authorization", "avg", "begin", "begin_frame", "begin_partition", "between", "bigint", "binary", "blob", "boolean", "both", "by", "call", "called", "cardinality", "cascaded", "case", "cast", "ceil", "ceiling", "char", "char_length", "character", "character_length", "check", "classifier", "clob", "close", "coalesce", "collate", "collect", "column", "commit", "condition", "connect", "constraint", "contains", "convert", "copy", "corr", "corresponding", "cos", "cosh", "count", "covar_pop", "covar_samp", "create", "cross", "cube", "cume_dist", "current", "current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_row", "current_schema", "current_time", "current_timestamp", "current_path", "current_role", "current_transform_group_for_type", "current_user", "cursor", "cycle", "date", "day", "deallocate", "dec", "decimal", "decfloat", "declare", "default", "define", "delete", "dense_rank", "deref", "describe", "deterministic", "disconnect", "distinct", "double", "drop", "dynamic", "each", "element", "else", "empty", "end", "end_frame", "end_partition", "end-exec", "equals", "escape", "every", "except", "exec", "execute", "exists", "exp", "external", "extract", "false", "fetch", "filter", "first_value", "float", "floor", "for", "foreign", "frame_row", "free", "from", "full", "function", "fusion", "get", "global", "grant", "group", "grouping", "groups", "having", "hold", "hour", "identity", "in", "indicator", "initial", "inner", "inout", "insensitive", "insert", "int", "integer", "intersect", "intersection", "interval", "into", "is", "join", "json_array", "json_arrayagg", "json_exists", "json_object", "json_objectagg", "json_query", "json_table", "json_table_primitive", "json_value", "lag", "language", "large", "last_value", "lateral", "lead", "leading", "left", "like", "like_regex", "listagg", "ln", "local", "localtime", "localtimestamp", "log", "log10", "lower", "match", "match_number", "match_recognize", "matches", "max", "member", "merge", "method", "min", "minute", "mod", "modifies", "module", "month", "multiset", "national", "natural", "nchar", "nclob", "new", "no", "none", "normalize", "not", "nth_value", "ntile", "null", "nullif", "numeric", "octet_length", "occurrences_regex", "of", "offset", "old", "omit", "on", "one", "only", "open", "or", "order", "out", "outer", "over", "overlaps", "overlay", "parameter", "partition", "pattern", "per", "percent", "percent_rank", "percentile_cont", "percentile_disc", "period", "portion", "position", "position_regex", "power", "precedes", "precision", "prepare", "primary", "procedure", "ptf", "range", "rank", "reads", "real", "recursive", "ref", "references", "referencing", "regr_avgx", "regr_avgy", "regr_count", "regr_intercept", "regr_r2", "regr_slope", "regr_sxx", "regr_sxy", "regr_syy", "release", "result", "return", "returns", "revoke", "right", "rollback", "rollup", "row", "row_number", "rows", "running", "savepoint", "scope", "scroll", "search", "second", "seek", "select", "sensitive", "session_user", "set", "show", "similar", "sin", "sinh", "skip", "smallint", "some", "specific", "specifictype", "sql", "sqlexception", "sqlstate", "sqlwarning", "sqrt", "start", "static", "stddev_pop", "stddev_samp", "submultiset", "subset", "substring", "substring_regex", "succeeds", "sum", "symmetric", "system", "system_time", "system_user", "table", "tablesample", "tan", "tanh", "then", "time", "timestamp", "timezone_hour", "timezone_minute", "to", "trailing", "translate", "translate_regex", "translation", "treat", "trigger", "trim", "trim_array", "true", "truncate", "uescape", "union", "unique", "unknown", "unnest", "update", "upper", "user", "using", "value", "values", "value_of", "var_pop", "var_samp", "varbinary", "varchar", "varying", "versioning", "when", "whenever", "where", "width_bucket", "window", "with", "within", "without", "year", "add", "asc", "collation", "desc", "final", "first", "last", "view"].filter(e => !r.includes(e)), "var-init"),
        c = cc11001100_hook("c", {
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
            when: t
          } = {}) => {
            const a = cc11001100_hook("a", t, "var-init");
            return n = cc11001100_hook("n", n || [], "assign"), e.map(e => e.match(/\|\d+$/) || n.includes(e) ? e : a(e) ? e + "|0" : e);
          })(l, {
            when: cc11001100_hook("when", e => e.length < 3, "object-key-init")
          }), "object-key-init"),
          literal: cc11001100_hook("literal", a, "object-key-init"),
          type: cc11001100_hook("type", i, "object-key-init"),
          built_in: cc11001100_hook("built_in", ["current_catalog", "current_date", "current_default_transform_group", "current_path", "current_role", "current_schema", "current_transform_group_for_type", "current_user", "session_user", "system_time", "system_user", "current_time", "localtime", "current_timestamp", "localtimestamp"], "object-key-init")
        },
        contains: cc11001100_hook("contains", [{
          begin: cc11001100_hook("begin", n.either(...s), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: {
            $pattern: cc11001100_hook("$pattern", /[\w\.]+/, "object-key-init"),
            keyword: cc11001100_hook("keyword", l.concat(s), "object-key-init"),
            literal: cc11001100_hook("literal", a, "object-key-init"),
            type: cc11001100_hook("type", i, "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", n.either("double precision", "large object", "with timezone", "without timezone"), "object-key-init")
        }, c, {
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
        }, e.C_NUMBER_MODE, e.C_BLOCK_COMMENT_MODE, t, {
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
        t = cc11001100_hook("t", e.COMMENT("/\\*", "\\*/", {
          contains: cc11001100_hook("contains", ["self"], "object-key-init")
        }), "var-init"),
        a = cc11001100_hook("a", [e.C_LINE_COMMENT_MODE, t], "var-init"),
        i = cc11001100_hook("i", {
          match: cc11001100_hook("match", [/\./, p(...ve, ...Oe)], "object-key-init"),
          className: {
            2: cc11001100_hook(2, "keyword", "object-key-init")
          }
        }, "var-init"),
        r = cc11001100_hook("r", {
          match: cc11001100_hook("match", m(/\./, p(...Me)), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", Me.filter(e => "string" == typeof e).concat(["_|0"]), "var-init"),
        o = cc11001100_hook("o", {
          variants: cc11001100_hook("variants", [{
            className: cc11001100_hook("className", "keyword", "object-key-init"),
            match: cc11001100_hook("match", p(...Me.filter(e => "string" != typeof e).concat(xe).map(we), ...Oe), "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        l = cc11001100_hook("l", {
          $pattern: cc11001100_hook("$pattern", p(/\b\w+/, /#\w+/), "object-key-init"),
          keyword: cc11001100_hook("keyword", s.concat(Ae), "object-key-init"),
          literal: cc11001100_hook("literal", ke, "object-key-init")
        }, "var-init"),
        c = cc11001100_hook("c", [i, r, o], "var-init"),
        d = cc11001100_hook("d", [{
          match: cc11001100_hook("match", m(/\./, p(...Ce)), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, {
          className: cc11001100_hook("className", "built_in", "object-key-init"),
          match: cc11001100_hook("match", m(/\b/, p(...Ce), /(?=\()/), "object-key-init")
        }], "var-init"),
        u = cc11001100_hook("u", {
          match: cc11001100_hook("match", /->/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", [u, {
          className: cc11001100_hook("className", "operator", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", De, "object-key-init")
          }, {
            match: cc11001100_hook("match", `\\.(\\.|${Re})+`, "object-key-init")
          }], "object-key-init")
        }], "var-init"),
        _ = cc11001100_hook("_", "([0-9a-fA-F]_*)+", "var-init"),
        h = cc11001100_hook("h", {
          className: cc11001100_hook("className", "number", "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", "\\b(([0-9]_*)+)(\\.(([0-9]_*)+))?([eE][+-]?(([0-9]_*)+))?\\b", "object-key-init")
          }, {
            match: cc11001100_hook("match", `\\b0x(${_})(\\.(${_}))?([pP][+-]?(([0-9]_*)+))?\\b`, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\b0o([0-7]_*)+\b/, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\b0b([01]_*)+\b/, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        f = cc11001100_hook("f", (e = "") => ({
          className: cc11001100_hook("className", "subst", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            match: cc11001100_hook("match", m(/\\/, e, /[0\\tnr"']/), "object-key-init")
          }, {
            match: cc11001100_hook("match", m(/\\/, e, /u\{[0-9a-fA-F]{1,8}\}/), "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        E = cc11001100_hook("E", (e = "") => ({
          className: cc11001100_hook("className", "subst", "object-key-init"),
          match: cc11001100_hook("match", m(/\\/, e, /[\t ]*(?:[\r\n]|\r\n)/), "object-key-init")
        }), "var-init"),
        y = cc11001100_hook("y", (e = "") => ({
          className: cc11001100_hook("className", "subst", "object-key-init"),
          label: cc11001100_hook("label", "interpol", "object-key-init"),
          begin: cc11001100_hook("begin", m(/\\/, e, /\(/), "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init")
        }), "var-init"),
        N = cc11001100_hook("N", (e = "") => ({
          begin: cc11001100_hook("begin", m(e, /"""/), "object-key-init"),
          end: cc11001100_hook("end", m(/"""/, e), "object-key-init"),
          contains: cc11001100_hook("contains", [f(e), E(e), y(e)], "object-key-init")
        }), "var-init"),
        w = cc11001100_hook("w", (e = "") => ({
          begin: cc11001100_hook("begin", m(e, /"/), "object-key-init"),
          end: cc11001100_hook("end", m(/"/, e), "object-key-init"),
          contains: cc11001100_hook("contains", [f(e), y(e)], "object-key-init")
        }), "var-init"),
        v = cc11001100_hook("v", {
          className: cc11001100_hook("className", "string", "object-key-init"),
          variants: cc11001100_hook("variants", [N(), N("#"), N("##"), N("###"), w(), w("#"), w("##"), w("###")], "object-key-init")
        }, "var-init"),
        O = cc11001100_hook("O", {
          match: cc11001100_hook("match", m(/`/, Be, /`/), "object-key-init")
        }, "var-init"),
        x = cc11001100_hook("x", [O, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          match: cc11001100_hook("match", /\$\d+/, "object-key-init")
        }, {
          className: cc11001100_hook("className", "variable", "object-key-init"),
          match: cc11001100_hook("match", `\\$${Le}+`, "object-key-init")
        }], "var-init"),
        M = cc11001100_hook("M", [{
          match: cc11001100_hook("match", /(@|#(un)?)available/, "object-key-init"),
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          starts: {
            contains: cc11001100_hook("contains", [{
              begin: cc11001100_hook("begin", /\(/, "object-key-init"),
              end: cc11001100_hook("end", /\)/, "object-key-init"),
              keywords: cc11001100_hook("keywords", ze, "object-key-init"),
              contains: cc11001100_hook("contains", [...b, h, v], "object-key-init")
            }], "object-key-init")
          }
        }, {
          className: cc11001100_hook("className", "keyword", "object-key-init"),
          match: cc11001100_hook("match", m(/@/, p(...Fe)), "object-key-init")
        }, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          match: cc11001100_hook("match", m(/@/, Be), "object-key-init")
        }], "var-init"),
        k = cc11001100_hook("k", {
          match: cc11001100_hook("match", g(/\b[A-Z]/), "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "type", "object-key-init"),
            match: cc11001100_hook("match", m(/(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)/, Le, "+"), "object-key-init")
          }, {
            className: cc11001100_hook("className", "type", "object-key-init"),
            match: cc11001100_hook("match", $e, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /[?!]+/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", /\.\.\./, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, {
            match: cc11001100_hook("match", m(/\s+&\s+/, g($e)), "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        S = cc11001100_hook("S", {
          begin: cc11001100_hook("begin", /</, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          keywords: cc11001100_hook("keywords", l, "object-key-init"),
          contains: cc11001100_hook("contains", [...a, ...c, ...M, u, k], "object-key-init")
        }, "var-init");
      k.contains.push(S);
      const A = cc11001100_hook("A", {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init"),
          keywords: cc11001100_hook("keywords", l, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", {
            match: cc11001100_hook("match", m(Be, /\s*:/), "object-key-init"),
            keywords: cc11001100_hook("keywords", "_|0", "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init")
          }, ...a, ...c, ...d, ...b, h, v, ...x, ...M, k], "object-key-init")
        }, "var-init"),
        C = cc11001100_hook("C", {
          begin: cc11001100_hook("begin", /</, "object-key-init"),
          end: cc11001100_hook("end", />/, "object-key-init"),
          contains: cc11001100_hook("contains", [...a, k], "object-key-init")
        }, "var-init"),
        T = cc11001100_hook("T", {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          keywords: cc11001100_hook("keywords", l, "object-key-init"),
          contains: cc11001100_hook("contains", [{
            begin: cc11001100_hook("begin", p(g(m(Be, /\s*:/)), g(m(Be, /\s+/, Be, /\s*:/))), "object-key-init"),
            end: cc11001100_hook("end", /:/, "object-key-init"),
            relevance: cc11001100_hook("relevance", 0, "object-key-init"),
            contains: cc11001100_hook("contains", [{
              className: cc11001100_hook("className", "keyword", "object-key-init"),
              match: cc11001100_hook("match", /\b_\b/, "object-key-init")
            }, {
              className: cc11001100_hook("className", "params", "object-key-init"),
              match: cc11001100_hook("match", Be, "object-key-init")
            }], "object-key-init")
          }, ...a, ...c, ...b, h, v, ...M, k, A], "object-key-init"),
          endsParent: cc11001100_hook("endsParent", !0, "object-key-init"),
          illegal: cc11001100_hook("illegal", /["']/, "object-key-init")
        }, "var-init"),
        R = cc11001100_hook("R", {
          match: cc11001100_hook("match", [/func/, /\s+/, p(O.match, Be, De)], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title.function", "object-key-init")
          },
          contains: cc11001100_hook("contains", [C, T, n], "object-key-init"),
          illegal: cc11001100_hook("illegal", [/\[/, /%/], "object-key-init")
        }, "var-init"),
        D = cc11001100_hook("D", {
          match: cc11001100_hook("match", [/\b(?:subscript|init[?!]?)/, /\s*(?=[<(])/], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init")
          },
          contains: cc11001100_hook("contains", [C, T, n], "object-key-init"),
          illegal: cc11001100_hook("illegal", /\[|%/, "object-key-init")
        }, "var-init"),
        I = cc11001100_hook("I", {
          match: cc11001100_hook("match", [/operator/, /\s+/, De], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title", "object-key-init")
          }
        }, "var-init"),
        L = cc11001100_hook("L", {
          begin: cc11001100_hook("begin", [/precedencegroup/, /\s+/, $e], "object-key-init"),
          className: {
            1: cc11001100_hook(1, "keyword", "object-key-init"),
            3: cc11001100_hook(3, "title", "object-key-init")
          },
          contains: cc11001100_hook("contains", [k], "object-key-init"),
          keywords: cc11001100_hook("keywords", [...Se, ...ke], "object-key-init"),
          end: cc11001100_hook("end", /}/, "object-key-init")
        }, "var-init");
      for (const e of v.variants) {
        const n = cc11001100_hook("n", e.contains.find(e => "interpol" === e.label), "var-init");
        n.keywords = cc11001100_hook("n.keywords", l, "assign");
        const t = cc11001100_hook("t", [...c, ...d, ...b, h, v, ...x], "var-init");
        n.contains = cc11001100_hook("n.contains", [...t, {
          begin: cc11001100_hook("begin", /\(/, "object-key-init"),
          end: cc11001100_hook("end", /\)/, "object-key-init"),
          contains: cc11001100_hook("contains", ["self", ...t], "object-key-init")
        }], "assign");
      }
      return {
        name: cc11001100_hook("name", "Swift", "object-key-init"),
        keywords: cc11001100_hook("keywords", l, "object-key-init"),
        contains: cc11001100_hook("contains", [...a, R, D, {
          beginKeywords: cc11001100_hook("beginKeywords", "struct protocol class extension enum actor", "object-key-init"),
          end: cc11001100_hook("end", "\\{", "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: cc11001100_hook("keywords", l, "object-key-init"),
          contains: cc11001100_hook("contains", [e.inherit(e.TITLE_MODE, {
            className: cc11001100_hook("className", "title.class", "object-key-init"),
            begin: cc11001100_hook("begin", /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/, "object-key-init")
          }), ...c], "object-key-init")
        }, I, L, {
          beginKeywords: cc11001100_hook("beginKeywords", "import", "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          contains: cc11001100_hook("contains", [...a], "object-key-init"),
          relevance: cc11001100_hook("relevance", 0, "object-key-init")
        }, ...c, ...d, ...b, h, v, ...x, ...M, k, A], "object-key-init")
      };
    }, "object-key-init"),
    grmr_typescript: cc11001100_hook("grmr_typescript", e => {
      const n = cc11001100_hook("n", Ne(e), "var-init"),
        t = cc11001100_hook("t", ["any", "void", "number", "boolean", "string", "object", "never", "enum"], "var-init"),
        a = cc11001100_hook("a", {
          beginKeywords: cc11001100_hook("beginKeywords", "namespace", "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          contains: cc11001100_hook("contains", [n.exports.CLASS_REFERENCE], "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          beginKeywords: cc11001100_hook("beginKeywords", "interface", "object-key-init"),
          end: cc11001100_hook("end", /\{/, "object-key-init"),
          excludeEnd: cc11001100_hook("excludeEnd", !0, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "interface extends", "object-key-init"),
            built_in: cc11001100_hook("built_in", t, "object-key-init")
          },
          contains: cc11001100_hook("contains", [n.exports.CLASS_REFERENCE], "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          $pattern: cc11001100_hook("$pattern", be, "object-key-init"),
          keyword: cc11001100_hook("keyword", me.concat(["type", "namespace", "typedef", "interface", "public", "private", "protected", "implements", "declare", "abstract", "readonly"]), "object-key-init"),
          literal: cc11001100_hook("literal", pe, "object-key-init"),
          built_in: cc11001100_hook("built_in", ye.concat(t), "object-key-init"),
          "variable.language": cc11001100_hook("variable.language", Ee, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", "@[A-Za-z$_][0-9A-Za-z$_]*", "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", (e, n, t) => {
          const a = cc11001100_hook("a", e.contains.findIndex(e => e.label === n), "var-init");
          if (-1 === a) throw Error("can not find mode to replace");
          e.contains.splice(a, 1, t);
        }, "var-init");
      return Object.assign(n.keywords, r), n.exports.PARAMS_CONTAINS.push(s), n.contains = cc11001100_hook("n.contains", n.contains.concat([s, a, i]), "assign"), o(n, "shebang", e.SHEBANG()), o(n, "use_strict", {
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
        t = cc11001100_hook("t", /\d{1,2}\/\d{1,2}\/\d{4}/, "var-init"),
        a = cc11001100_hook("a", /\d{4}-\d{1,2}-\d{1,2}/, "var-init"),
        i = cc11001100_hook("i", /(\d|1[012])(:\d+){0,2} *(AM|PM)/, "var-init"),
        r = cc11001100_hook("r", /\d{1,2}(:\d{1,2}){1,2}/, "var-init"),
        s = cc11001100_hook("s", {
          className: cc11001100_hook("className", "literal", "object-key-init"),
          variants: cc11001100_hook("variants", [{
            begin: cc11001100_hook("begin", n.concat(/# */, n.either(a, t), / *#/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/# */, r, / *#/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/# */, i, / *#/), "object-key-init")
          }, {
            begin: cc11001100_hook("begin", n.concat(/# */, n.either(a, t), / +/, n.either(i, r), / *#/), "object-key-init")
          }], "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", e.COMMENT(/'''/, /$/, {
          contains: cc11001100_hook("contains", [{
            className: cc11001100_hook("className", "doctag", "object-key-init"),
            begin: cc11001100_hook("begin", /<\/?/, "object-key-init"),
            end: cc11001100_hook("end", />/, "object-key-init")
          }], "object-key-init")
        }), "var-init"),
        l = cc11001100_hook("l", e.COMMENT(null, /$/, {
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
        }, s, {
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
        }, o, l, {
          className: cc11001100_hook("className", "meta", "object-key-init"),
          begin: cc11001100_hook("begin", /[\t ]*#(const|disable|else|elseif|enable|end|externalsource|if|region)\b/, "object-key-init"),
          end: cc11001100_hook("end", /$/, "object-key-init"),
          keywords: {
            keyword: cc11001100_hook("keyword", "const disable else elseif enable end externalsource if region then", "object-key-init")
          },
          contains: cc11001100_hook("contains", [l], "object-key-init")
        }], "object-key-init")
      };
    }, "object-key-init"),
    grmr_yaml: cc11001100_hook("grmr_yaml", e => {
      const n = cc11001100_hook("n", "true false yes no null", "var-init"),
        t = cc11001100_hook("t", "[\\w#;/?:@&=+$,.~*'()[\\]]+", "var-init"),
        a = cc11001100_hook("a", {
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
        i = cc11001100_hook("i", e.inherit(a, {
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
        s = cc11001100_hook("s", {
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
        l = cc11001100_hook("l", [{
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
          begin: cc11001100_hook("begin", "!\\w+!" + t, "object-key-init")
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "!<" + t + ">", "object-key-init")
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "!" + t, "object-key-init")
        }, {
          className: cc11001100_hook("className", "type", "object-key-init"),
          begin: cc11001100_hook("begin", "!!" + t, "object-key-init")
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
        }, s, o, a], "var-init"),
        c = cc11001100_hook("c", [...l], "var-init");
      return c.pop(), c.push(i), r.contains = cc11001100_hook("r.contains", c, "assign"), {
        name: cc11001100_hook("name", "YAML", "object-key-init"),
        case_insensitive: cc11001100_hook("case_insensitive", !0, "object-key-init"),
        aliases: cc11001100_hook("aliases", ["yml"], "object-key-init"),
        contains: cc11001100_hook("contains", l, "object-key-init")
      };
    }, "object-key-init")
  }), "var-init");
  const je = cc11001100_hook("je", ne, "var-init");
  for (const e of Object.keys(Ue)) {
    const n = cc11001100_hook("n", e.replace("grmr_", "").replace("_", "-"), "var-init");
    je.registerLanguage(n, Ue[e]);
  }
  return je;
}(), "var-init");
"object" == typeof exports && "undefined" != typeof module && (module.exports = cc11001100_hook("module.exports", hljs, "assign"));