/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
!function (A, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = cc11001100_hook("module.exports", e(), "assign") : "function" == typeof define && define.amd ? define(e) : (A = cc11001100_hook("A", "undefined" != typeof globalThis ? globalThis : A || self, "assign")).html2canvas = cc11001100_hook("(A = \"undefined\" != typeof globalThis ? globalThis : A || self).html2canvas", e(), "assign");
}(this, function () {
  "use strict";

  /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
  
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
  
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */
  var r = function (A, e) {
    return (r = cc11001100_hook("r", Object.setPrototypeOf || {
      __proto__: cc11001100_hook("__proto__", [], "object-key-init")
    } instanceof Array && function (A, e) {
      A.__proto__ = cc11001100_hook("A.__proto__", e, "assign");
    } || function (A, e) {
      for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (A[t] = cc11001100_hook("A[t]", e[t], "assign"));
    }, "assign"))(A, e);
  };
  function A(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
    function t() {
      this.constructor = cc11001100_hook("this.constructor", A, "assign");
    }
    r(A, e), A.prototype = cc11001100_hook("A.prototype", null === e ? Object.create(e) : (t.prototype = cc11001100_hook("t.prototype", e.prototype, "assign"), new t()), "assign");
  }
  var h = function () {
    return (h = cc11001100_hook("h", Object.assign || function (A) {
      for (var e, t = cc11001100_hook("t", 1, "var-init"), r = cc11001100_hook("r", arguments.length, "var-init"); t < r; t++) for (var B in e = cc11001100_hook("e", arguments[t], "assign")) Object.prototype.hasOwnProperty.call(e, B) && (A[B] = cc11001100_hook("A[B]", e[B], "assign"));
      return A;
    }, "assign")).apply(this, arguments);
  };
  function a(A, s, o, i) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return new (o = cc11001100_hook("o", o || Promise, "assign"))(function (t, e) {
      function r(A) {
        cc11001100_hook("A", A, "function-parameter");
        try {
          n(i.next(A));
        } catch (A) {
          e(A);
        }
      }
      function B(A) {
        cc11001100_hook("A", A, "function-parameter");
        try {
          n(i.throw(A));
        } catch (A) {
          e(A);
        }
      }
      function n(A) {
        cc11001100_hook("A", A, "function-parameter");
        var e;
        A.done ? t(A.value) : ((e = cc11001100_hook("e", A.value, "assign")) instanceof o ? e : new o(function (A) {
          A(e);
        })).then(r, B);
      }
      n((i = cc11001100_hook("i", i.apply(A, s || []), "assign")).next());
    });
  }
  function H(t, r) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var B,
      n,
      s,
      o = cc11001100_hook("o", {
        label: cc11001100_hook("label", 0, "object-key-init"),
        sent: function () {
          if (1 & s[0]) throw s[1];
          return s[1];
        },
        trys: cc11001100_hook("trys", [], "object-key-init"),
        ops: cc11001100_hook("ops", [], "object-key-init")
      }, "var-init"),
      A = cc11001100_hook("A", {
        next: cc11001100_hook("next", e(0), "object-key-init"),
        throw: cc11001100_hook("throw", e(1), "object-key-init"),
        return: cc11001100_hook("return", e(2), "object-key-init")
      }, "var-init");
    return "function" == typeof Symbol && (A[Symbol.iterator] = cc11001100_hook("A[Symbol.iterator]", function () {
      return this;
    }, "assign")), A;
    function e(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (A) {
        return function (e) {
          if (B) throw new TypeError("Generator is already executing.");
          for (; o;) try {
            if (B = cc11001100_hook("B", 1, "assign"), n && (s = cc11001100_hook("s", 2 & e[0] ? n.return : e[0] ? n.throw || ((s = cc11001100_hook("s", n.return, "assign")) && s.call(n), 0) : n.next, "assign")) && !(s = cc11001100_hook("s", s.call(n, e[1]), "assign")).done) return s;
            switch (n = cc11001100_hook("n", 0, "assign"), (e = cc11001100_hook("e", s ? [2 & e[0], s.value] : e, "assign"))[0]) {
              case 0:
              case 1:
                s = cc11001100_hook("s", e, "assign");
                break;
              case 4:
                return o.label++, {
                  value: cc11001100_hook("value", e[1], "object-key-init"),
                  done: cc11001100_hook("done", !1, "object-key-init")
                };
              case 5:
                o.label++, n = cc11001100_hook("n", e[1], "assign"), e = cc11001100_hook("e", [0], "assign");
                continue;
              case 7:
                e = cc11001100_hook("e", o.ops.pop(), "assign"), o.trys.pop();
                continue;
              default:
                if (!(s = cc11001100_hook("s", 0 < (s = cc11001100_hook("s", o.trys, "assign")).length && s[s.length - 1], "assign")) && (6 === e[0] || 2 === e[0])) {
                  o = cc11001100_hook("o", 0, "assign");
                  continue;
                }
                if (3 === e[0] && (!s || e[1] > s[0] && e[1] < s[3])) {
                  o.label = cc11001100_hook("o.label", e[1], "assign");
                  break;
                }
                if (6 === e[0] && o.label < s[1]) {
                  o.label = cc11001100_hook("o.label", s[1], "assign"), s = cc11001100_hook("s", e, "assign");
                  break;
                }
                if (s && o.label < s[2]) {
                  o.label = cc11001100_hook("o.label", s[2], "assign"), o.ops.push(e);
                  break;
                }
                s[2] && o.ops.pop(), o.trys.pop();
                continue;
            }
            e = cc11001100_hook("e", r.call(t, o), "assign");
          } catch (A) {
            e = cc11001100_hook("e", [6, A], "assign"), n = cc11001100_hook("n", 0, "assign");
          } finally {
            B = cc11001100_hook("B", s = cc11001100_hook("s", 0, "assign"), "assign");
          }
          if (5 & e[0]) throw e[1];
          return {
            value: cc11001100_hook("value", e[0] ? e[1] : void 0, "object-key-init"),
            done: cc11001100_hook("done", !0, "object-key-init")
          };
        }([e, A]);
      };
    }
  }
  function t(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (t || 2 === arguments.length) for (var r, B = cc11001100_hook("B", 0, "var-init"), n = cc11001100_hook("n", e.length, "var-init"); B < n; B++) !r && B in e || ((r = cc11001100_hook("r", r || Array.prototype.slice.call(e, 0, B), "assign"))[B] = cc11001100_hook("(r = r || Array.prototype.slice.call(e, 0, B))[B]", e[B], "assign"));
    return A.concat(r || e);
  }
  var d = cc11001100_hook("d", (B.prototype.add = cc11001100_hook("B.prototype.add", function (A, e, t, r) {
    return new B(this.left + A, this.top + e, this.width + t, this.height + r);
  }, "assign"), B.fromClientRect = cc11001100_hook("B.fromClientRect", function (A, e) {
    return new B(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height);
  }, "assign"), B.fromDOMRectList = cc11001100_hook("B.fromDOMRectList", function (A, e) {
    e = cc11001100_hook("e", Array.from(e).find(function (A) {
      return 0 !== A.width;
    }), "assign");
    return e ? new B(e.left + A.windowBounds.left, e.top + A.windowBounds.top, e.width, e.height) : B.EMPTY;
  }, "assign"), B.EMPTY = cc11001100_hook("B.EMPTY", new B(0, 0, 0, 0), "assign"), B), "var-init");
  function B(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    this.left = cc11001100_hook("this.left", A, "assign"), this.top = cc11001100_hook("this.top", e, "assign"), this.width = cc11001100_hook("this.width", t, "assign"), this.height = cc11001100_hook("this.height", r, "assign");
  }
  for (var f = function (A, e) {
      return d.fromClientRect(A, e.getBoundingClientRect());
    }, Q = function (A) {
      for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", A.length, "var-init"); t < r;) {
        var B,
          n = cc11001100_hook("n", A.charCodeAt(t++), "var-init");
        55296 <= n && n <= 56319 && t < r ? 56320 == (64512 & (B = cc11001100_hook("B", A.charCodeAt(t++), "assign"))) ? e.push(((1023 & n) << 10) + (1023 & B) + 65536) : (e.push(n), t--) : e.push(n);
      }
      return e;
    }, g = function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
      if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
      var t = cc11001100_hook("t", A.length, "var-init");
      if (!t) return "";
      for (var r = cc11001100_hook("r", [], "var-init"), B = cc11001100_hook("B", -1, "var-init"), n = cc11001100_hook("n", "", "var-init"); ++B < t;) {
        var s = cc11001100_hook("s", A[B], "var-init");
        s <= 65535 ? r.push(s) : (s -= cc11001100_hook("s", 65536, "assign"), r.push(55296 + (s >> 10), s % 1024 + 56320)), (B + 1 === t || 16384 < r.length) && (n += cc11001100_hook("n", String.fromCharCode.apply(String, r), "assign"), r.length = cc11001100_hook("r.length", 0, "assign"));
      }
      return n;
    }, e = cc11001100_hook("e", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "var-init"), n = cc11001100_hook("n", "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < e.length; s++) n[e.charCodeAt(s)] = cc11001100_hook("n[e.charCodeAt(s)]", s, "assign");
  for (var o = cc11001100_hook("o", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "var-init"), c = cc11001100_hook("c", "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < o.length; i++) c[o.charCodeAt(i)] = cc11001100_hook("c[o.charCodeAt(i)]", i, "assign");
  function w(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }
  var U = cc11001100_hook("U", (l.prototype.get = cc11001100_hook("l.prototype.get", function (A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535) return e = cc11001100_hook("e", this.index[A >> 5], "assign"), this.data[e = cc11001100_hook("e", (e << 2) + (31 & A), "assign")];
      if (A <= 65535) return e = cc11001100_hook("e", this.index[2048 + (A - 55296 >> 5)], "assign"), this.data[e = cc11001100_hook("e", (e << 2) + (31 & A), "assign")];
      if (A < this.highStart) return e = cc11001100_hook("e", this.index[e = cc11001100_hook("e", 2080 + (A >> 11), "assign")], "assign"), e = cc11001100_hook("e", this.index[e += cc11001100_hook("e", A >> 5 & 63, "assign")], "assign"), this.data[e = cc11001100_hook("e", (e << 2) + (31 & A), "assign")];
      if (A <= 1114111) return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, "assign"), l), "var-init");
  function l(A, e, t, r, B, n) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    this.initialValue = cc11001100_hook("this.initialValue", A, "assign"), this.errorValue = cc11001100_hook("this.errorValue", e, "assign"), this.highStart = cc11001100_hook("this.highStart", t, "assign"), this.highValueIndex = cc11001100_hook("this.highValueIndex", r, "assign"), this.index = cc11001100_hook("this.index", B, "assign"), this.data = cc11001100_hook("this.data", n, "assign");
  }
  for (var C = cc11001100_hook("C", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "var-init"), u = cc11001100_hook("u", "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), "var-init"), F = cc11001100_hook("F", 0, "var-init"); F < C.length; F++) u[C.charCodeAt(F)] = cc11001100_hook("u[C.charCodeAt(F)]", F, "assign");
  function p(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var B = cc11001100_hook("B", r[t], "var-init");
    if (Array.isArray(A) ? -1 !== A.indexOf(B) : A === B) for (var n = cc11001100_hook("n", t, "var-init"); n <= r.length;) {
      if ((o = cc11001100_hook("o", r[++n], "assign")) === e) return 1;
      if (o !== D) break;
    }
    if (B === D) for (n = cc11001100_hook("n", t, "assign"); 0 < n;) {
      var s = cc11001100_hook("s", r[--n], "var-init");
      if (Array.isArray(A) ? -1 !== A.indexOf(s) : A === s) for (var o, i = cc11001100_hook("i", t, "var-init"); i <= r.length;) {
        if ((o = cc11001100_hook("o", r[++i], "assign")) === e) return 1;
        if (o !== D) break;
      }
      if (s !== D) break;
    }
  }
  function E(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", A, "var-init"); 0 <= t;) {
      var r = cc11001100_hook("r", e[t], "var-init");
      if (r !== D) return r;
      t--;
    }
    return 0;
  }
  function I(t, A) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", (B = cc11001100_hook("B", function (A, r) {
        void 0 === r && (r = cc11001100_hook("r", "strict", "assign"));
        var B = cc11001100_hook("B", [], "var-init"),
          n = cc11001100_hook("n", [], "var-init"),
          s = cc11001100_hook("s", [], "var-init");
        return A.forEach(function (A, e) {
          var t = cc11001100_hook("t", rA.get(A), "var-init");
          if (50 < t ? (s.push(!0), t -= cc11001100_hook("t", 50, "assign")) : s.push(!1), -1 !== ["normal", "auto", "loose"].indexOf(r) && -1 !== [8208, 8211, 12316, 12448].indexOf(A)) return n.push(e), B.push(16);
          if (4 !== t && 11 !== t) return n.push(e), 31 === t ? B.push("strict" === r ? O : q) : t === AA || 29 === t ? B.push(J) : 43 === t ? 131072 <= A && A <= 196605 || 196608 <= A && A <= 262141 ? B.push(q) : B.push(J) : void B.push(t);
          if (0 === e) return n.push(e), B.push(J);
          t = cc11001100_hook("t", B[e - 1], "assign");
          return -1 === iA.indexOf(t) ? (n.push(n[e - 1]), B.push(t)) : (n.push(e), B.push(J));
        }), [n, B, s];
      }(t, (A = cc11001100_hook("A", A || {
        lineBreak: cc11001100_hook("lineBreak", "normal", "object-key-init"),
        wordBreak: cc11001100_hook("wordBreak", "normal", "object-key-init")
      }, "assign")).lineBreak), "assign"))[0], "var-init"),
      r = cc11001100_hook("r", B[1], "var-init"),
      B = cc11001100_hook("B", B[2], "var-init");
    return [e, r = cc11001100_hook("r", "break-all" === A.wordBreak || "break-word" === A.wordBreak ? r.map(function (A) {
      return -1 !== [R, J, AA].indexOf(A) ? q : A;
    }) : r, "assign"), "keep-all" === A.wordBreak ? B.map(function (A, e) {
      return A && 19968 <= t[e] && t[e] <= 40959;
    }) : void 0];
  }
  var y,
    K,
    m,
    L,
    b,
    D = cc11001100_hook("D", 10, "var-init"),
    v = cc11001100_hook("v", 13, "var-init"),
    x = cc11001100_hook("x", 15, "var-init"),
    M = cc11001100_hook("M", 17, "var-init"),
    S = cc11001100_hook("S", 18, "var-init"),
    T = cc11001100_hook("T", 19, "var-init"),
    G = cc11001100_hook("G", 20, "var-init"),
    O = cc11001100_hook("O", 21, "var-init"),
    V = cc11001100_hook("V", 22, "var-init"),
    k = cc11001100_hook("k", 24, "var-init"),
    R = cc11001100_hook("R", 25, "var-init"),
    N = cc11001100_hook("N", 26, "var-init"),
    P = cc11001100_hook("P", 27, "var-init"),
    X = cc11001100_hook("X", 28, "var-init"),
    J = cc11001100_hook("J", 30, "var-init"),
    Y = cc11001100_hook("Y", 32, "var-init"),
    W = cc11001100_hook("W", 33, "var-init"),
    Z = cc11001100_hook("Z", 34, "var-init"),
    _ = cc11001100_hook("_", 35, "var-init"),
    q = cc11001100_hook("q", 37, "var-init"),
    j = cc11001100_hook("j", 38, "var-init"),
    z = cc11001100_hook("z", 39, "var-init"),
    $ = cc11001100_hook("$", 40, "var-init"),
    AA = cc11001100_hook("AA", 42, "var-init"),
    eA = cc11001100_hook("eA", [9001, 65288], "var-init"),
    tA = cc11001100_hook("tA", "×", "var-init"),
    rA = cc11001100_hook("rA", (m = cc11001100_hook("m", function (A) {
      var e,
        t,
        r,
        B,
        n = cc11001100_hook("n", .75 * A.length, "var-init"),
        s = cc11001100_hook("s", A.length, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      "=" === A[A.length - 1] && (n--, "=" === A[A.length - 2] && n--);
      for (var n = cc11001100_hook("n", new ("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n), "var-init"), i = cc11001100_hook("i", Array.isArray(n) ? n : new Uint8Array(n), "var-init"), Q = cc11001100_hook("Q", 0, "var-init"); Q < s; Q += cc11001100_hook("Q", 4, "assign")) e = cc11001100_hook("e", c[A.charCodeAt(Q)], "assign"), t = cc11001100_hook("t", c[A.charCodeAt(Q + 1)], "assign"), r = cc11001100_hook("r", c[A.charCodeAt(Q + 2)], "assign"), B = cc11001100_hook("B", c[A.charCodeAt(Q + 3)], "assign"), i[o++] = cc11001100_hook("i[o++]", e << 2 | t >> 4, "assign"), i[o++] = cc11001100_hook("i[o++]", (15 & t) << 4 | r >> 2, "assign"), i[o++] = cc11001100_hook("i[o++]", (3 & r) << 6 | 63 & B, "assign");
      return n;
    }(y = cc11001100_hook("y", "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", "assign")), "assign"), L = cc11001100_hook("L", Array.isArray(m) ? function (A) {
      for (var e = cc11001100_hook("e", A.length, "var-init"), t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e; r += cc11001100_hook("r", 4, "assign")) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
      return t;
    }(m) : new Uint32Array(m), "assign"), b = cc11001100_hook("b", Array.isArray(m) ? function (A) {
      for (var e = cc11001100_hook("e", A.length, "var-init"), t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e; r += cc11001100_hook("r", 2, "assign")) t.push(A[r + 1] << 8 | A[r]);
      return t;
    }(m) : new Uint16Array(m), "assign"), y = cc11001100_hook("y", w(b, 12, L[4] / 2), "assign"), K = cc11001100_hook("K", 2 === L[5] ? w(b, (24 + L[4]) / 2) : (m = cc11001100_hook("m", L, "assign"), b = cc11001100_hook("b", Math.ceil((24 + L[4]) / 4), "assign"), m.slice ? m.slice(b, K) : new Uint32Array(Array.prototype.slice.call(m, b, K))), "assign"), new U(L[0], L[1], L[2], L[3], y, K)), "var-init"),
    BA = cc11001100_hook("BA", [J, 36], "var-init"),
    nA = cc11001100_hook("nA", [1, 2, 3, 5], "var-init"),
    sA = cc11001100_hook("sA", [D, 8], "var-init"),
    oA = cc11001100_hook("oA", [P, N], "var-init"),
    iA = cc11001100_hook("iA", nA.concat(sA), "var-init"),
    QA = cc11001100_hook("QA", [j, z, $, Z, _], "var-init"),
    cA = cc11001100_hook("cA", [x, v], "var-init"),
    aA = cc11001100_hook("aA", (gA.prototype.slice = cc11001100_hook("gA.prototype.slice", function () {
      return g.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, "assign"), gA), "var-init");
  function gA(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    this.codePoints = cc11001100_hook("this.codePoints", A, "assign"), this.required = cc11001100_hook("this.required", "!" === e, "assign"), this.start = cc11001100_hook("this.start", t, "assign"), this.end = cc11001100_hook("this.end", r, "assign");
  }
  function wA(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", Q(A), "var-init"),
      r = cc11001100_hook("r", (e = cc11001100_hook("e", I(t, e), "assign"))[0], "var-init"),
      B = cc11001100_hook("B", e[1], "var-init"),
      n = cc11001100_hook("n", e[2], "var-init"),
      s = cc11001100_hook("s", t.length, "var-init"),
      o = cc11001100_hook("o", 0, "var-init"),
      i = cc11001100_hook("i", 0, "var-init");
    return {
      next: function () {
        if (s <= i) return {
          done: cc11001100_hook("done", !0, "object-key-init"),
          value: cc11001100_hook("value", null, "object-key-init")
        };
        for (var A = cc11001100_hook("A", tA, "var-init"); i < s && (A = cc11001100_hook("A", function (A, e, t, r, B) {
          if (0 === t[r]) return tA;
          var n = cc11001100_hook("n", r - 1, "var-init");
          if (Array.isArray(B) && !0 === B[n]) return tA;
          var s = cc11001100_hook("s", n - 1, "var-init"),
            o = cc11001100_hook("o", 1 + n, "var-init"),
            i = cc11001100_hook("i", e[n], "var-init"),
            r = cc11001100_hook("r", 0 <= s ? e[s] : 0, "var-init"),
            B = cc11001100_hook("B", e[o], "var-init");
          if (2 === i && 3 === B) return tA;
          if (-1 !== nA.indexOf(i)) return "!";
          if (-1 !== nA.indexOf(B)) return tA;
          if (-1 !== sA.indexOf(B)) return tA;
          if (8 === E(n, e)) return "÷";
          if (11 === rA.get(A[n])) return tA;
          if ((i === Y || i === W) && 11 === rA.get(A[o])) return tA;
          if (7 === i || 7 === B) return tA;
          if (9 === i) return tA;
          if (-1 === [D, v, x].indexOf(i) && 9 === B) return tA;
          if (-1 !== [M, S, T, k, X].indexOf(B)) return tA;
          if (E(n, e) === V) return tA;
          if (p(23, V, n, e)) return tA;
          if (p([M, S], O, n, e)) return tA;
          if (p(12, 12, n, e)) return tA;
          if (i === D) return "÷";
          if (23 === i || 23 === B) return tA;
          if (16 === B || 16 === i) return "÷";
          if (-1 !== [v, x, O].indexOf(B) || 14 === i) return tA;
          if (36 === r && -1 !== cA.indexOf(i)) return tA;
          if (i === X && 36 === B) return tA;
          if (B === G) return tA;
          if (-1 !== BA.indexOf(B) && i === R || -1 !== BA.indexOf(i) && B === R) return tA;
          if (i === P && -1 !== [q, Y, W].indexOf(B) || -1 !== [q, Y, W].indexOf(i) && B === N) return tA;
          if (-1 !== BA.indexOf(i) && -1 !== oA.indexOf(B) || -1 !== oA.indexOf(i) && -1 !== BA.indexOf(B)) return tA;
          if (-1 !== [P, N].indexOf(i) && (B === R || -1 !== [V, x].indexOf(B) && e[1 + o] === R) || -1 !== [V, x].indexOf(i) && B === R || i === R && -1 !== [R, X, k].indexOf(B)) return tA;
          if (-1 !== [R, X, k, M, S].indexOf(B)) for (var Q = cc11001100_hook("Q", n, "var-init"); 0 <= Q;) {
            if ((c = cc11001100_hook("c", e[Q], "assign")) === R) return tA;
            if (-1 === [X, k].indexOf(c)) break;
            Q--;
          }
          if (-1 !== [P, N].indexOf(B)) for (var c, Q = cc11001100_hook("Q", -1 !== [M, S].indexOf(i) ? s : n, "var-init"); 0 <= Q;) {
            if ((c = cc11001100_hook("c", e[Q], "assign")) === R) return tA;
            if (-1 === [X, k].indexOf(c)) break;
            Q--;
          }
          if (j === i && -1 !== [j, z, Z, _].indexOf(B) || -1 !== [z, Z].indexOf(i) && -1 !== [z, $].indexOf(B) || -1 !== [$, _].indexOf(i) && B === $) return tA;
          if (-1 !== QA.indexOf(i) && -1 !== [G, N].indexOf(B) || -1 !== QA.indexOf(B) && i === P) return tA;
          if (-1 !== BA.indexOf(i) && -1 !== BA.indexOf(B)) return tA;
          if (i === k && -1 !== BA.indexOf(B)) return tA;
          if (-1 !== BA.concat(R).indexOf(i) && B === V && -1 === eA.indexOf(A[o]) || -1 !== BA.concat(R).indexOf(B) && i === S) return tA;
          if (41 === i && 41 === B) {
            for (var a = cc11001100_hook("a", t[n], "var-init"), g = cc11001100_hook("g", 1, "var-init"); 0 < a && 41 === e[--a];) g++;
            if (g % 2 != 0) return tA;
          }
          return i === Y && B === W ? tA : "÷";
        }(t, B, r, ++i, n), "assign")) === tA;);
        if (A === tA && i !== s) return {
          done: cc11001100_hook("done", !0, "object-key-init"),
          value: cc11001100_hook("value", null, "object-key-init")
        };
        var e = cc11001100_hook("e", new aA(t, A, o, i), "var-init");
        return o = cc11001100_hook("o", i, "assign"), {
          value: cc11001100_hook("value", e, "object-key-init"),
          done: cc11001100_hook("done", !1, "object-key-init")
        };
      }
    };
  }
  function UA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 48 <= A && A <= 57;
  }
  function lA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return UA(A) || 65 <= A && A <= 70 || 97 <= A && A <= 102;
  }
  function CA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 10 === A || 9 === A || 32 === A;
  }
  function uA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 97 <= (t = cc11001100_hook("t", e = cc11001100_hook("e", A, "assign"), "assign")) && t <= 122 || 65 <= (e = cc11001100_hook("e", e, "assign")) && e <= 90 || 128 <= A || 95 === A;
    var e, t;
  }
  function FA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return uA(A) || UA(A) || 45 === A;
  }
  function hA(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return 92 === A && 10 !== e;
  }
  function dA(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return 45 === A ? uA(e) || hA(e, t) : !!uA(A) || 92 === A && 10 !== e;
  }
  function fA(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return 43 === A || 45 === A ? !!UA(e) || 46 === e && UA(t) : UA(46 === A ? e : A);
  }
  var HA = cc11001100_hook("HA", {
      type: cc11001100_hook("type", 2, "object-key-init")
    }, "var-init"),
    pA = cc11001100_hook("pA", {
      type: cc11001100_hook("type", 3, "object-key-init")
    }, "var-init"),
    EA = cc11001100_hook("EA", {
      type: cc11001100_hook("type", 4, "object-key-init")
    }, "var-init"),
    IA = cc11001100_hook("IA", {
      type: cc11001100_hook("type", 13, "object-key-init")
    }, "var-init"),
    yA = cc11001100_hook("yA", {
      type: cc11001100_hook("type", 8, "object-key-init")
    }, "var-init"),
    KA = cc11001100_hook("KA", {
      type: cc11001100_hook("type", 21, "object-key-init")
    }, "var-init"),
    mA = cc11001100_hook("mA", {
      type: cc11001100_hook("type", 9, "object-key-init")
    }, "var-init"),
    LA = cc11001100_hook("LA", {
      type: cc11001100_hook("type", 10, "object-key-init")
    }, "var-init"),
    bA = cc11001100_hook("bA", {
      type: cc11001100_hook("type", 11, "object-key-init")
    }, "var-init"),
    DA = cc11001100_hook("DA", {
      type: cc11001100_hook("type", 12, "object-key-init")
    }, "var-init"),
    vA = cc11001100_hook("vA", {
      type: cc11001100_hook("type", 14, "object-key-init")
    }, "var-init"),
    xA = cc11001100_hook("xA", {
      type: cc11001100_hook("type", 23, "object-key-init")
    }, "var-init"),
    MA = cc11001100_hook("MA", {
      type: cc11001100_hook("type", 1, "object-key-init")
    }, "var-init"),
    SA = cc11001100_hook("SA", {
      type: cc11001100_hook("type", 25, "object-key-init")
    }, "var-init"),
    TA = cc11001100_hook("TA", {
      type: cc11001100_hook("type", 24, "object-key-init")
    }, "var-init"),
    GA = cc11001100_hook("GA", {
      type: cc11001100_hook("type", 26, "object-key-init")
    }, "var-init"),
    OA = cc11001100_hook("OA", {
      type: cc11001100_hook("type", 27, "object-key-init")
    }, "var-init"),
    VA = cc11001100_hook("VA", {
      type: cc11001100_hook("type", 28, "object-key-init")
    }, "var-init"),
    kA = cc11001100_hook("kA", {
      type: cc11001100_hook("type", 29, "object-key-init")
    }, "var-init"),
    RA = cc11001100_hook("RA", {
      type: cc11001100_hook("type", 31, "object-key-init")
    }, "var-init"),
    NA = cc11001100_hook("NA", {
      type: cc11001100_hook("type", 32, "object-key-init")
    }, "var-init"),
    PA = cc11001100_hook("PA", (XA.prototype.write = cc11001100_hook("XA.prototype.write", function (A) {
      this._value = cc11001100_hook("this._value", this._value.concat(Q(A)), "assign");
    }, "assign"), XA.prototype.read = cc11001100_hook("XA.prototype.read", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", this.consumeToken(), "var-init"); e !== NA;) A.push(e), e = cc11001100_hook("e", this.consumeToken(), "assign");
      return A;
    }, "assign"), XA.prototype.consumeToken = cc11001100_hook("XA.prototype.consumeToken", function () {
      var A = cc11001100_hook("A", this.consumeCodePoint(), "var-init");
      switch (A) {
        case 34:
          return this.consumeStringToken(34);
        case 35:
          var e = cc11001100_hook("e", this.peekCodePoint(0), "var-init"),
            t = cc11001100_hook("t", this.peekCodePoint(1), "var-init"),
            r = cc11001100_hook("r", this.peekCodePoint(2), "var-init");
          if (FA(e) || hA(t, r)) {
            var B = cc11001100_hook("B", dA(e, t, r) ? 2 : 1, "var-init");
            return {
              type: cc11001100_hook("type", 5, "object-key-init"),
              value: cc11001100_hook("value", this.consumeName(), "object-key-init"),
              flags: cc11001100_hook("flags", B, "object-key-init")
            };
          }
          break;
        case 36:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), IA;
          break;
        case 39:
          return this.consumeStringToken(39);
        case 40:
          return HA;
        case 41:
          return pA;
        case 42:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), vA;
          break;
        case 43:
          if (fA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case 44:
          return EA;
        case 45:
          var r = cc11001100_hook("r", A, "var-init"),
            B = cc11001100_hook("B", this.peekCodePoint(0), "var-init"),
            n = cc11001100_hook("n", this.peekCodePoint(1), "var-init");
          if (fA(r, B, n)) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          if (dA(r, B, n)) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          if (45 === B && 62 === n) return this.consumeCodePoint(), this.consumeCodePoint(), TA;
          break;
        case 46:
          if (fA(A, this.peekCodePoint(0), this.peekCodePoint(1))) return this.reconsumeCodePoint(A), this.consumeNumericToken();
          break;
        case 47:
          if (42 === this.peekCodePoint(0)) for (this.consumeCodePoint();;) {
            var s = cc11001100_hook("s", this.consumeCodePoint(), "var-init");
            if (42 === s && 47 === (s = cc11001100_hook("s", this.consumeCodePoint(), "assign"))) return this.consumeToken();
            if (-1 === s) return this.consumeToken();
          }
          break;
        case 58:
          return GA;
        case 59:
          return OA;
        case 60:
          if (33 === this.peekCodePoint(0) && 45 === this.peekCodePoint(1) && 45 === this.peekCodePoint(2)) return this.consumeCodePoint(), this.consumeCodePoint(), SA;
          break;
        case 64:
          var n = cc11001100_hook("n", this.peekCodePoint(0), "var-init"),
            o = cc11001100_hook("o", this.peekCodePoint(1), "var-init"),
            i = cc11001100_hook("i", this.peekCodePoint(2), "var-init");
          if (dA(n, o, i)) return {
            type: cc11001100_hook("type", 7, "object-key-init"),
            value: cc11001100_hook("value", this.consumeName(), "object-key-init")
          };
          break;
        case 91:
          return VA;
        case 92:
          if (hA(A, this.peekCodePoint(0))) return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
          break;
        case 93:
          return kA;
        case 61:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), yA;
          break;
        case 123:
          return bA;
        case 125:
          return DA;
        case 117:
        case 85:
          o = cc11001100_hook("o", this.peekCodePoint(0), "assign"), i = cc11001100_hook("i", this.peekCodePoint(1), "assign");
          return 43 !== o || !lA(i) && 63 !== i || (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        case 124:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), mA;
          if (124 === this.peekCodePoint(0)) return this.consumeCodePoint(), KA;
          break;
        case 126:
          if (61 === this.peekCodePoint(0)) return this.consumeCodePoint(), LA;
          break;
        case -1:
          return NA;
      }
      return CA(A) ? (this.consumeWhiteSpace(), RA) : UA(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : uA(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : {
        type: cc11001100_hook("type", 6, "object-key-init"),
        value: cc11001100_hook("value", g(A), "object-key-init")
      };
    }, "assign"), XA.prototype.consumeCodePoint = cc11001100_hook("XA.prototype.consumeCodePoint", function () {
      var A = cc11001100_hook("A", this._value.shift(), "var-init");
      return void 0 === A ? -1 : A;
    }, "assign"), XA.prototype.reconsumeCodePoint = cc11001100_hook("XA.prototype.reconsumeCodePoint", function (A) {
      this._value.unshift(A);
    }, "assign"), XA.prototype.peekCodePoint = cc11001100_hook("XA.prototype.peekCodePoint", function (A) {
      return A >= this._value.length ? -1 : this._value[A];
    }, "assign"), XA.prototype.consumeUnicodeRangeToken = cc11001100_hook("XA.prototype.consumeUnicodeRangeToken", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", this.consumeCodePoint(), "var-init"); lA(e) && A.length < 6;) A.push(e), e = cc11001100_hook("e", this.consumeCodePoint(), "assign");
      for (var t = cc11001100_hook("t", !1, "var-init"); 63 === e && A.length < 6;) A.push(e), e = cc11001100_hook("e", this.consumeCodePoint(), "assign"), t = cc11001100_hook("t", !0, "assign");
      if (t) return {
        type: cc11001100_hook("type", 30, "object-key-init"),
        start: cc11001100_hook("start", parseInt(g.apply(void 0, A.map(function (A) {
          return 63 === A ? 48 : A;
        })), 16), "object-key-init"),
        end: cc11001100_hook("end", parseInt(g.apply(void 0, A.map(function (A) {
          return 63 === A ? 70 : A;
        })), 16), "object-key-init")
      };
      var r = cc11001100_hook("r", parseInt(g.apply(void 0, A), 16), "var-init");
      if (45 === this.peekCodePoint(0) && lA(this.peekCodePoint(1))) {
        this.consumeCodePoint();
        for (var e = cc11001100_hook("e", this.consumeCodePoint(), "var-init"), B = cc11001100_hook("B", [], "var-init"); lA(e) && B.length < 6;) B.push(e), e = cc11001100_hook("e", this.consumeCodePoint(), "assign");
        return {
          type: cc11001100_hook("type", 30, "object-key-init"),
          start: cc11001100_hook("start", r, "object-key-init"),
          end: cc11001100_hook("end", parseInt(g.apply(void 0, B), 16), "object-key-init")
        };
      }
      return {
        type: cc11001100_hook("type", 30, "object-key-init"),
        start: cc11001100_hook("start", r, "object-key-init"),
        end: cc11001100_hook("end", r, "object-key-init")
      };
    }, "assign"), XA.prototype.consumeIdentLikeToken = cc11001100_hook("XA.prototype.consumeIdentLikeToken", function () {
      var A = cc11001100_hook("A", this.consumeName(), "var-init");
      return "url" === A.toLowerCase() && 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), this.consumeUrlToken()) : 40 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
        type: cc11001100_hook("type", 19, "object-key-init"),
        value: cc11001100_hook("value", A, "object-key-init")
      }) : {
        type: cc11001100_hook("type", 20, "object-key-init"),
        value: cc11001100_hook("value", A, "object-key-init")
      };
    }, "assign"), XA.prototype.consumeUrlToken = cc11001100_hook("XA.prototype.consumeUrlToken", function () {
      var A = cc11001100_hook("A", [], "var-init");
      if (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0)) return {
        type: cc11001100_hook("type", 22, "object-key-init"),
        value: cc11001100_hook("value", "", "object-key-init")
      };
      var e,
        t = cc11001100_hook("t", this.peekCodePoint(0), "var-init");
      if (39 === t || 34 === t) {
        t = cc11001100_hook("t", this.consumeStringToken(this.consumeCodePoint()), "assign");
        return 0 === t.type && (this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0)) ? (this.consumeCodePoint(), {
          type: cc11001100_hook("type", 22, "object-key-init"),
          value: cc11001100_hook("value", t.value, "object-key-init")
        }) : (this.consumeBadUrlRemnants(), xA);
      }
      for (;;) {
        var r = cc11001100_hook("r", this.consumeCodePoint(), "var-init");
        if (-1 === r || 41 === r) return {
          type: cc11001100_hook("type", 22, "object-key-init"),
          value: cc11001100_hook("value", g.apply(void 0, A), "object-key-init")
        };
        if (CA(r)) return this.consumeWhiteSpace(), -1 === this.peekCodePoint(0) || 41 === this.peekCodePoint(0) ? (this.consumeCodePoint(), {
          type: cc11001100_hook("type", 22, "object-key-init"),
          value: cc11001100_hook("value", g.apply(void 0, A), "object-key-init")
        }) : (this.consumeBadUrlRemnants(), xA);
        if (34 === r || 39 === r || 40 === r || 0 <= (e = cc11001100_hook("e", r, "assign")) && e <= 8 || 11 === e || 14 <= e && e <= 31 || 127 === e) return this.consumeBadUrlRemnants(), xA;
        if (92 === r) {
          if (!hA(r, this.peekCodePoint(0))) return this.consumeBadUrlRemnants(), xA;
          A.push(this.consumeEscapedCodePoint());
        } else A.push(r);
      }
    }, "assign"), XA.prototype.consumeWhiteSpace = cc11001100_hook("XA.prototype.consumeWhiteSpace", function () {
      for (; CA(this.peekCodePoint(0));) this.consumeCodePoint();
    }, "assign"), XA.prototype.consumeBadUrlRemnants = cc11001100_hook("XA.prototype.consumeBadUrlRemnants", function () {
      for (;;) {
        var A = cc11001100_hook("A", this.consumeCodePoint(), "var-init");
        if (41 === A || -1 === A) return;
        hA(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, "assign"), XA.prototype.consumeStringSlice = cc11001100_hook("XA.prototype.consumeStringSlice", function (A) {
      for (var e = cc11001100_hook("e", "", "var-init"); 0 < A;) {
        var t = cc11001100_hook("t", Math.min(5e4, A), "var-init");
        e += cc11001100_hook("e", g.apply(void 0, this._value.splice(0, t)), "assign"), A -= cc11001100_hook("A", t, "assign");
      }
      return this._value.shift(), e;
    }, "assign"), XA.prototype.consumeStringToken = cc11001100_hook("XA.prototype.consumeStringToken", function (A) {
      for (var e = cc11001100_hook("e", "", "var-init"), t = cc11001100_hook("t", 0, "var-init");;) {
        var r,
          B = cc11001100_hook("B", this._value[t], "var-init");
        if (-1 === B || void 0 === B || B === A) return {
          type: cc11001100_hook("type", 0, "object-key-init"),
          value: cc11001100_hook("value", e += cc11001100_hook("e", this.consumeStringSlice(t), "assign"), "object-key-init")
        };
        if (10 === B) return this._value.splice(0, t), MA;
        92 !== B || -1 !== (r = cc11001100_hook("r", this._value[t + 1], "assign")) && void 0 !== r && (10 === r ? (e += cc11001100_hook("e", this.consumeStringSlice(t), "assign"), t = cc11001100_hook("t", -1, "assign"), this._value.shift()) : hA(B, r) && (e += cc11001100_hook("e", this.consumeStringSlice(t), "assign"), e += cc11001100_hook("e", g(this.consumeEscapedCodePoint()), "assign"), t = cc11001100_hook("t", -1, "assign"))), t++;
      }
    }, "assign"), XA.prototype.consumeNumber = cc11001100_hook("XA.prototype.consumeNumber", function () {
      var A = cc11001100_hook("A", [], "var-init"),
        e = cc11001100_hook("e", 4, "var-init");
      for (43 !== (t = cc11001100_hook("t", this.peekCodePoint(0), "assign")) && 45 !== t || A.push(this.consumeCodePoint()); UA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
      var t = cc11001100_hook("t", this.peekCodePoint(0), "var-init"),
        r = cc11001100_hook("r", this.peekCodePoint(1), "var-init");
      if (46 === t && UA(r)) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = cc11001100_hook("e", 8, "assign"); UA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
      t = cc11001100_hook("t", this.peekCodePoint(0), "assign");
      var r = cc11001100_hook("r", this.peekCodePoint(1), "var-init"),
        B = cc11001100_hook("B", this.peekCodePoint(2), "var-init");
      if ((69 === t || 101 === t) && ((43 === r || 45 === r) && UA(B) || UA(r))) for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), e = cc11001100_hook("e", 8, "assign"); UA(this.peekCodePoint(0));) A.push(this.consumeCodePoint());
      return [function (A) {
        var e = cc11001100_hook("e", 0, "var-init"),
          t = cc11001100_hook("t", 1, "var-init");
        43 !== A[e] && 45 !== A[e] || (45 === A[e] && (t = cc11001100_hook("t", -1, "assign")), e++);
        for (var r = cc11001100_hook("r", [], "var-init"); UA(A[e]);) r.push(A[e++]);
        var B = cc11001100_hook("B", r.length ? parseInt(g.apply(void 0, r), 10) : 0, "var-init");
        46 === A[e] && e++;
        for (var n = cc11001100_hook("n", [], "var-init"); UA(A[e]);) n.push(A[e++]);
        var s = cc11001100_hook("s", n.length, "var-init"),
          o = cc11001100_hook("o", s ? parseInt(g.apply(void 0, n), 10) : 0, "var-init");
        69 !== A[e] && 101 !== A[e] || e++;
        var i = cc11001100_hook("i", 1, "var-init");
        43 !== A[e] && 45 !== A[e] || (45 === A[e] && (i = cc11001100_hook("i", -1, "assign")), e++);
        for (var Q = cc11001100_hook("Q", [], "var-init"); UA(A[e]);) Q.push(A[e++]);
        var c = cc11001100_hook("c", Q.length ? parseInt(g.apply(void 0, Q), 10) : 0, "var-init");
        return t * (B + o * Math.pow(10, -s)) * Math.pow(10, i * c);
      }(A), e];
    }, "assign"), XA.prototype.consumeNumericToken = cc11001100_hook("XA.prototype.consumeNumericToken", function () {
      var A = cc11001100_hook("A", this.consumeNumber(), "var-init"),
        e = cc11001100_hook("e", A[0], "var-init"),
        t = cc11001100_hook("t", A[1], "var-init"),
        r = cc11001100_hook("r", this.peekCodePoint(0), "var-init"),
        B = cc11001100_hook("B", this.peekCodePoint(1), "var-init"),
        A = cc11001100_hook("A", this.peekCodePoint(2), "var-init");
      return dA(r, B, A) ? {
        type: cc11001100_hook("type", 15, "object-key-init"),
        number: cc11001100_hook("number", e, "object-key-init"),
        flags: cc11001100_hook("flags", t, "object-key-init"),
        unit: cc11001100_hook("unit", this.consumeName(), "object-key-init")
      } : 37 === r ? (this.consumeCodePoint(), {
        type: cc11001100_hook("type", 16, "object-key-init"),
        number: cc11001100_hook("number", e, "object-key-init"),
        flags: cc11001100_hook("flags", t, "object-key-init")
      }) : {
        type: cc11001100_hook("type", 17, "object-key-init"),
        number: cc11001100_hook("number", e, "object-key-init"),
        flags: cc11001100_hook("flags", t, "object-key-init")
      };
    }, "assign"), XA.prototype.consumeEscapedCodePoint = cc11001100_hook("XA.prototype.consumeEscapedCodePoint", function () {
      var A,
        e = cc11001100_hook("e", this.consumeCodePoint(), "var-init");
      if (lA(e)) {
        for (var t = cc11001100_hook("t", g(e), "var-init"); lA(this.peekCodePoint(0)) && t.length < 6;) t += cc11001100_hook("t", g(this.consumeCodePoint()), "assign");
        CA(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = cc11001100_hook("r", parseInt(t, 16), "var-init");
        return 0 === r || 55296 <= (A = cc11001100_hook("A", r, "assign")) && A <= 57343 || 1114111 < r ? 65533 : r;
      }
      return -1 === e ? 65533 : e;
    }, "assign"), XA.prototype.consumeName = cc11001100_hook("XA.prototype.consumeName", function () {
      for (var A = cc11001100_hook("A", "", "var-init");;) {
        var e = cc11001100_hook("e", this.consumeCodePoint(), "var-init");
        if (FA(e)) A += cc11001100_hook("A", g(e), "assign");else {
          if (!hA(e, this.peekCodePoint(0))) return this.reconsumeCodePoint(e), A;
          A += cc11001100_hook("A", g(this.consumeEscapedCodePoint()), "assign");
        }
      }
    }, "assign"), XA), "var-init");
  function XA() {
    this._value = cc11001100_hook("this._value", [], "assign");
  }
  var JA = cc11001100_hook("JA", (YA.create = cc11001100_hook("YA.create", function (A) {
    var e = cc11001100_hook("e", new PA(), "var-init");
    return e.write(A), new YA(e.read());
  }, "assign"), YA.parseValue = cc11001100_hook("YA.parseValue", function (A) {
    return YA.create(A).parseComponentValue();
  }, "assign"), YA.parseValues = cc11001100_hook("YA.parseValues", function (A) {
    return YA.create(A).parseComponentValues();
  }, "assign"), YA.prototype.parseComponentValue = cc11001100_hook("YA.prototype.parseComponentValue", function () {
    for (var A = cc11001100_hook("A", this.consumeToken(), "var-init"); 31 === A.type;) A = cc11001100_hook("A", this.consumeToken(), "assign");
    if (32 === A.type) throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(A);
    for (var e = cc11001100_hook("e", this.consumeComponentValue(), "var-init"); 31 === (A = cc11001100_hook("A", this.consumeToken(), "assign")).type;);
    if (32 === A.type) return e;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }, "assign"), YA.prototype.parseComponentValues = cc11001100_hook("YA.prototype.parseComponentValues", function () {
    for (var A = cc11001100_hook("A", [], "var-init");;) {
      var e = cc11001100_hook("e", this.consumeComponentValue(), "var-init");
      if (32 === e.type) return A;
      A.push(e), A.push();
    }
  }, "assign"), YA.prototype.consumeComponentValue = cc11001100_hook("YA.prototype.consumeComponentValue", function () {
    var A = cc11001100_hook("A", this.consumeToken(), "var-init");
    switch (A.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(A.type);
      case 19:
        return this.consumeFunction(A);
    }
    return A;
  }, "assign"), YA.prototype.consumeSimpleBlock = cc11001100_hook("YA.prototype.consumeSimpleBlock", function (A) {
    for (var e = cc11001100_hook("e", {
        type: cc11001100_hook("type", A, "object-key-init"),
        values: cc11001100_hook("values", [], "object-key-init")
      }, "var-init"), t = cc11001100_hook("t", this.consumeToken(), "var-init");;) {
      if (32 === t.type || ce(t, A)) return e;
      this.reconsumeToken(t), e.values.push(this.consumeComponentValue()), t = cc11001100_hook("t", this.consumeToken(), "assign");
    }
  }, "assign"), YA.prototype.consumeFunction = cc11001100_hook("YA.prototype.consumeFunction", function (A) {
    for (var e = cc11001100_hook("e", {
      name: cc11001100_hook("name", A.value, "object-key-init"),
      values: cc11001100_hook("values", [], "object-key-init"),
      type: cc11001100_hook("type", 18, "object-key-init")
    }, "var-init");;) {
      var t = cc11001100_hook("t", this.consumeToken(), "var-init");
      if (32 === t.type || 3 === t.type) return e;
      this.reconsumeToken(t), e.values.push(this.consumeComponentValue());
    }
  }, "assign"), YA.prototype.consumeToken = cc11001100_hook("YA.prototype.consumeToken", function () {
    var A = cc11001100_hook("A", this._tokens.shift(), "var-init");
    return void 0 === A ? NA : A;
  }, "assign"), YA.prototype.reconsumeToken = cc11001100_hook("YA.prototype.reconsumeToken", function (A) {
    this._tokens.unshift(A);
  }, "assign"), YA), "var-init");
  function YA(A) {
    cc11001100_hook("A", A, "function-parameter");
    this._tokens = cc11001100_hook("this._tokens", A, "assign");
  }
  function WA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 15 === A.type;
  }
  function ZA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 17 === A.type;
  }
  function _A(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 20 === A.type;
  }
  function qA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 0 === A.type;
  }
  function jA(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return _A(A) && A.value === e;
  }
  function zA(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 31 !== A.type;
  }
  function $A(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 31 !== A.type && 4 !== A.type;
  }
  function Ae(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", [], "var-init"),
      t = cc11001100_hook("t", [], "var-init");
    return A.forEach(function (A) {
      if (4 === A.type) {
        if (0 === t.length) throw new Error("Error parsing function args, zero tokens for arg");
        return e.push(t), void (t = cc11001100_hook("t", [], "assign"));
      }
      31 !== A.type && t.push(A);
    }), t.length && e.push(t), e;
  }
  function ee(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 17 === A.type || 15 === A.type;
  }
  function te(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 16 === A.type || ee(A);
  }
  function re(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 1 < A.length ? [A[0], A[1]] : [A[0]];
  }
  function Be(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", A[0], "var-init"),
      A = cc11001100_hook("A", A[1], "var-init");
    return [Ue(r, e), Ue(void 0 !== A ? A : r, t)];
  }
  function ne(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 15 === A.type && ("deg" === A.unit || "grad" === A.unit || "rad" === A.unit || "turn" === A.unit);
  }
  function se(A) {
    cc11001100_hook("A", A, "function-parameter");
    switch (A.filter(_A).map(function (A) {
      return A.value;
    }).join(" ")) {
      case "to bottom right":
      case "to right bottom":
      case "left top":
      case "top left":
        return [ae, ae];
      case "to top":
      case "bottom":
        return Ce(0);
      case "to bottom left":
      case "to left bottom":
      case "right top":
      case "top right":
        return [ae, we];
      case "to right":
      case "left":
        return Ce(90);
      case "to top left":
      case "to left top":
      case "right bottom":
      case "bottom right":
        return [we, we];
      case "to bottom":
      case "top":
        return Ce(180);
      case "to top right":
      case "to right top":
      case "left bottom":
      case "bottom left":
        return [we, ae];
      case "to left":
      case "right":
        return Ce(270);
    }
    return 0;
  }
  function oe(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 0 == (255 & A);
  }
  function ie(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", 255 & A, "var-init"),
      t = cc11001100_hook("t", 255 & A >> 8, "var-init"),
      r = cc11001100_hook("r", 255 & A >> 16, "var-init"),
      A = cc11001100_hook("A", 255 & A >> 24, "var-init");
    return e < 255 ? "rgba(" + A + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + A + "," + r + "," + t + ")";
  }
  function Qe(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    if (17 === A.type) return A.number;
    if (16 !== A.type) return 0;
    var t = cc11001100_hook("t", 3 === e ? 1 : 255, "var-init");
    return 3 === e ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  var ce = function (A, e) {
      return 11 === e && 12 === A.type || 28 === e && 29 === A.type || 2 === e && 3 === A.type;
    },
    ae = cc11001100_hook("ae", {
      type: cc11001100_hook("type", 17, "object-key-init"),
      number: cc11001100_hook("number", 0, "object-key-init"),
      flags: cc11001100_hook("flags", 4, "object-key-init")
    }, "var-init"),
    ge = cc11001100_hook("ge", {
      type: cc11001100_hook("type", 16, "object-key-init"),
      number: cc11001100_hook("number", 50, "object-key-init"),
      flags: cc11001100_hook("flags", 4, "object-key-init")
    }, "var-init"),
    we = cc11001100_hook("we", {
      type: cc11001100_hook("type", 16, "object-key-init"),
      number: cc11001100_hook("number", 100, "object-key-init"),
      flags: cc11001100_hook("flags", 4, "object-key-init")
    }, "var-init"),
    Ue = function (A, e) {
      if (16 === A.type) return A.number / 100 * e;
      if (WA(A)) switch (A.unit) {
        case "rem":
        case "em":
          return 16 * A.number;
        default:
          return A.number;
      }
      return A.number;
    },
    le = function (A, e) {
      if (15 === e.type) switch (e.unit) {
        case "deg":
          return Math.PI * e.number / 180;
        case "grad":
          return Math.PI / 200 * e.number;
        case "rad":
          return e.number;
        case "turn":
          return 2 * Math.PI * e.number;
      }
      throw new Error("Unsupported angle type");
    },
    Ce = function (A) {
      return Math.PI * A / 180;
    },
    ue = function (A, e) {
      if (18 === e.type) {
        var t = cc11001100_hook("t", me[e.name], "var-init");
        if (void 0 === t) throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
        return t(A, e.values);
      }
      if (5 === e.type) {
        if (3 === e.value.length) {
          var r = cc11001100_hook("r", e.value.substring(0, 1), "var-init"),
            B = cc11001100_hook("B", e.value.substring(1, 2), "var-init"),
            n = cc11001100_hook("n", e.value.substring(2, 3), "var-init");
          return Fe(parseInt(r + r, 16), parseInt(B + B, 16), parseInt(n + n, 16), 1);
        }
        if (4 === e.value.length) {
          var r = cc11001100_hook("r", e.value.substring(0, 1), "var-init"),
            B = cc11001100_hook("B", e.value.substring(1, 2), "var-init"),
            n = cc11001100_hook("n", e.value.substring(2, 3), "var-init"),
            s = cc11001100_hook("s", e.value.substring(3, 4), "var-init");
          return Fe(parseInt(r + r, 16), parseInt(B + B, 16), parseInt(n + n, 16), parseInt(s + s, 16) / 255);
        }
        if (6 === e.value.length) {
          r = cc11001100_hook("r", e.value.substring(0, 2), "assign"), B = cc11001100_hook("B", e.value.substring(2, 4), "assign"), n = cc11001100_hook("n", e.value.substring(4, 6), "assign");
          return Fe(parseInt(r, 16), parseInt(B, 16), parseInt(n, 16), 1);
        }
        if (8 === e.value.length) {
          r = cc11001100_hook("r", e.value.substring(0, 2), "assign"), B = cc11001100_hook("B", e.value.substring(2, 4), "assign"), n = cc11001100_hook("n", e.value.substring(4, 6), "assign"), s = cc11001100_hook("s", e.value.substring(6, 8), "assign");
          return Fe(parseInt(r, 16), parseInt(B, 16), parseInt(n, 16), parseInt(s, 16) / 255);
        }
      }
      if (20 === e.type) {
        e = cc11001100_hook("e", Le[e.value.toUpperCase()], "assign");
        if (void 0 !== e) return e;
      }
      return Le.TRANSPARENT;
    },
    Fe = function (A, e, t, r) {
      return (A << 24 | e << 16 | t << 8 | Math.round(255 * r) << 0) >>> 0;
    },
    he = function (A, e) {
      e = cc11001100_hook("e", e.filter($A), "assign");
      if (3 === e.length) {
        var t = cc11001100_hook("t", e.map(Qe), "var-init"),
          r = cc11001100_hook("r", t[0], "var-init"),
          B = cc11001100_hook("B", t[1], "var-init"),
          t = cc11001100_hook("t", t[2], "var-init");
        return Fe(r, B, t, 1);
      }
      if (4 !== e.length) return 0;
      e = cc11001100_hook("e", e.map(Qe), "assign"), r = cc11001100_hook("r", e[0], "assign"), B = cc11001100_hook("B", e[1], "assign"), t = cc11001100_hook("t", e[2], "assign"), e = cc11001100_hook("e", e[3], "assign");
      return Fe(r, B, t, e);
    };
  function de(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return t < 0 && (t += cc11001100_hook("t", 1, "assign")), 1 <= t && --t, t < 1 / 6 ? (e - A) * t * 6 + A : t < .5 ? e : t < 2 / 3 ? 6 * (e - A) * (2 / 3 - t) + A : A;
  }
  function fe(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return ue(A, JA.create(e).parseComponentValue());
  }
  function He(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return A = cc11001100_hook("A", ue(A, e[0]), "assign"), (e = cc11001100_hook("e", e[1], "assign")) && te(e) ? {
      color: cc11001100_hook("color", A, "object-key-init"),
      stop: cc11001100_hook("stop", e, "object-key-init")
    } : {
      color: cc11001100_hook("color", A, "object-key-init"),
      stop: cc11001100_hook("stop", null, "object-key-init")
    };
  }
  function pe(A, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", A[0], "var-init"),
      r = cc11001100_hook("r", A[A.length - 1], "var-init");
    null === e.stop && (e.stop = cc11001100_hook("e.stop", ae, "assign")), null === r.stop && (r.stop = cc11001100_hook("r.stop", we, "assign"));
    for (var B = cc11001100_hook("B", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < A.length; s++) {
      var o = cc11001100_hook("o", A[s].stop, "var-init");
      null !== o ? (n < (o = cc11001100_hook("o", Ue(o, t), "assign")) ? B.push(o) : B.push(n), n = cc11001100_hook("n", o, "assign")) : B.push(null);
    }
    for (var i = cc11001100_hook("i", null, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < B.length; s++) {
      var Q = cc11001100_hook("Q", B[s], "var-init");
      if (null === Q) null === i && (i = cc11001100_hook("i", s, "assign"));else if (null !== i) {
        for (var c = cc11001100_hook("c", s - i, "var-init"), a = cc11001100_hook("a", (Q - B[i - 1]) / (1 + c), "var-init"), g = cc11001100_hook("g", 1, "var-init"); g <= c; g++) B[i + g - 1] = cc11001100_hook("B[i + g - 1]", a * g, "assign");
        i = cc11001100_hook("i", null, "assign");
      }
    }
    return A.map(function (A, e) {
      return {
        color: cc11001100_hook("color", A.color, "object-key-init"),
        stop: cc11001100_hook("stop", Math.max(Math.min(1, B[e] / t), 0), "object-key-init")
      };
    });
  }
  function Ee(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", "number" == typeof A ? A : (s = cc11001100_hook("s", e / 2, "assign"), r = cc11001100_hook("r", (n = cc11001100_hook("n", t, "assign")) / 2, "assign"), s = cc11001100_hook("s", Ue((B = cc11001100_hook("B", A, "assign"))[0], e) - s, "assign"), n = cc11001100_hook("n", r - Ue(B[1], n), "assign"), (Math.atan2(n, s) + 2 * Math.PI) % (2 * Math.PI)), "var-init"),
      B = cc11001100_hook("B", Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), "var-init"),
      n = cc11001100_hook("n", e / 2, "var-init"),
      s = cc11001100_hook("s", t / 2, "var-init"),
      e = cc11001100_hook("e", B / 2, "var-init"),
      t = cc11001100_hook("t", Math.sin(r - Math.PI / 2) * e, "var-init"),
      e = cc11001100_hook("e", Math.cos(r - Math.PI / 2) * e, "var-init");
    return [B, n - e, n + e, s - t, s + t];
  }
  function Ie(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return Math.sqrt(A * A + e * e);
  }
  function ye(A, e, B, n, s) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    return [[0, 0], [0, e], [A, 0], [A, e]].reduce(function (A, e) {
      var t = cc11001100_hook("t", e[0], "var-init"),
        r = cc11001100_hook("r", e[1], "var-init"),
        r = cc11001100_hook("r", Ie(B - t, n - r), "var-init");
      return (s ? r < A.optimumDistance : r > A.optimumDistance) ? {
        optimumCorner: cc11001100_hook("optimumCorner", e, "object-key-init"),
        optimumDistance: cc11001100_hook("optimumDistance", r, "object-key-init")
      } : A;
    }, {
      optimumDistance: cc11001100_hook("optimumDistance", s ? 1 / 0 : -1 / 0, "object-key-init"),
      optimumCorner: cc11001100_hook("optimumCorner", null, "object-key-init")
    }).optimumCorner;
  }
  var Ke = function (A, e) {
      var t = cc11001100_hook("t", e.filter($A), "var-init"),
        r = cc11001100_hook("r", t[0], "var-init"),
        B = cc11001100_hook("B", t[1], "var-init"),
        n = cc11001100_hook("n", t[2], "var-init"),
        e = cc11001100_hook("e", t[3], "var-init"),
        t = cc11001100_hook("t", (17 === r.type ? Ce(r.number) : le(A, r)) / (2 * Math.PI), "var-init"),
        A = cc11001100_hook("A", te(B) ? B.number / 100 : 0, "var-init"),
        r = cc11001100_hook("r", te(n) ? n.number / 100 : 0, "var-init"),
        B = cc11001100_hook("B", void 0 !== e && te(e) ? Ue(e, 1) : 1, "var-init");
      if (0 == A) return Fe(255 * r, 255 * r, 255 * r, 1);
      n = cc11001100_hook("n", r <= .5 ? r * (1 + A) : r + A - r * A, "assign"), e = cc11001100_hook("e", 2 * r - n, "assign"), A = cc11001100_hook("A", de(e, n, t + 1 / 3), "assign"), r = cc11001100_hook("r", de(e, n, t), "assign"), t = cc11001100_hook("t", de(e, n, t - 1 / 3), "assign");
      return Fe(255 * A, 255 * r, 255 * t, B);
    },
    me = cc11001100_hook("me", {
      hsl: cc11001100_hook("hsl", Ke, "object-key-init"),
      hsla: cc11001100_hook("hsla", Ke, "object-key-init"),
      rgb: cc11001100_hook("rgb", he, "object-key-init"),
      rgba: cc11001100_hook("rgba", he, "object-key-init")
    }, "var-init"),
    Le = cc11001100_hook("Le", {
      ALICEBLUE: cc11001100_hook("ALICEBLUE", 4042850303, "object-key-init"),
      ANTIQUEWHITE: cc11001100_hook("ANTIQUEWHITE", 4209760255, "object-key-init"),
      AQUA: cc11001100_hook("AQUA", 16777215, "object-key-init"),
      AQUAMARINE: cc11001100_hook("AQUAMARINE", 2147472639, "object-key-init"),
      AZURE: cc11001100_hook("AZURE", 4043309055, "object-key-init"),
      BEIGE: cc11001100_hook("BEIGE", 4126530815, "object-key-init"),
      BISQUE: cc11001100_hook("BISQUE", 4293182719, "object-key-init"),
      BLACK: cc11001100_hook("BLACK", 255, "object-key-init"),
      BLANCHEDALMOND: cc11001100_hook("BLANCHEDALMOND", 4293643775, "object-key-init"),
      BLUE: cc11001100_hook("BLUE", 65535, "object-key-init"),
      BLUEVIOLET: cc11001100_hook("BLUEVIOLET", 2318131967, "object-key-init"),
      BROWN: cc11001100_hook("BROWN", 2771004159, "object-key-init"),
      BURLYWOOD: cc11001100_hook("BURLYWOOD", 3736635391, "object-key-init"),
      CADETBLUE: cc11001100_hook("CADETBLUE", 1604231423, "object-key-init"),
      CHARTREUSE: cc11001100_hook("CHARTREUSE", 2147418367, "object-key-init"),
      CHOCOLATE: cc11001100_hook("CHOCOLATE", 3530104575, "object-key-init"),
      CORAL: cc11001100_hook("CORAL", 4286533887, "object-key-init"),
      CORNFLOWERBLUE: cc11001100_hook("CORNFLOWERBLUE", 1687547391, "object-key-init"),
      CORNSILK: cc11001100_hook("CORNSILK", 4294499583, "object-key-init"),
      CRIMSON: cc11001100_hook("CRIMSON", 3692313855, "object-key-init"),
      CYAN: cc11001100_hook("CYAN", 16777215, "object-key-init"),
      DARKBLUE: cc11001100_hook("DARKBLUE", 35839, "object-key-init"),
      DARKCYAN: cc11001100_hook("DARKCYAN", 9145343, "object-key-init"),
      DARKGOLDENROD: cc11001100_hook("DARKGOLDENROD", 3095837695, "object-key-init"),
      DARKGRAY: cc11001100_hook("DARKGRAY", 2846468607, "object-key-init"),
      DARKGREEN: cc11001100_hook("DARKGREEN", 6553855, "object-key-init"),
      DARKGREY: cc11001100_hook("DARKGREY", 2846468607, "object-key-init"),
      DARKKHAKI: cc11001100_hook("DARKKHAKI", 3182914559, "object-key-init"),
      DARKMAGENTA: cc11001100_hook("DARKMAGENTA", 2332068863, "object-key-init"),
      DARKOLIVEGREEN: cc11001100_hook("DARKOLIVEGREEN", 1433087999, "object-key-init"),
      DARKORANGE: cc11001100_hook("DARKORANGE", 4287365375, "object-key-init"),
      DARKORCHID: cc11001100_hook("DARKORCHID", 2570243327, "object-key-init"),
      DARKRED: cc11001100_hook("DARKRED", 2332033279, "object-key-init"),
      DARKSALMON: cc11001100_hook("DARKSALMON", 3918953215, "object-key-init"),
      DARKSEAGREEN: cc11001100_hook("DARKSEAGREEN", 2411499519, "object-key-init"),
      DARKSLATEBLUE: cc11001100_hook("DARKSLATEBLUE", 1211993087, "object-key-init"),
      DARKSLATEGRAY: cc11001100_hook("DARKSLATEGRAY", 793726975, "object-key-init"),
      DARKSLATEGREY: cc11001100_hook("DARKSLATEGREY", 793726975, "object-key-init"),
      DARKTURQUOISE: cc11001100_hook("DARKTURQUOISE", 13554175, "object-key-init"),
      DARKVIOLET: cc11001100_hook("DARKVIOLET", 2483082239, "object-key-init"),
      DEEPPINK: cc11001100_hook("DEEPPINK", 4279538687, "object-key-init"),
      DEEPSKYBLUE: cc11001100_hook("DEEPSKYBLUE", 12582911, "object-key-init"),
      DIMGRAY: cc11001100_hook("DIMGRAY", 1768516095, "object-key-init"),
      DIMGREY: cc11001100_hook("DIMGREY", 1768516095, "object-key-init"),
      DODGERBLUE: cc11001100_hook("DODGERBLUE", 512819199, "object-key-init"),
      FIREBRICK: cc11001100_hook("FIREBRICK", 2988581631, "object-key-init"),
      FLORALWHITE: cc11001100_hook("FLORALWHITE", 4294635775, "object-key-init"),
      FORESTGREEN: cc11001100_hook("FORESTGREEN", 579543807, "object-key-init"),
      FUCHSIA: cc11001100_hook("FUCHSIA", 4278255615, "object-key-init"),
      GAINSBORO: cc11001100_hook("GAINSBORO", 3705462015, "object-key-init"),
      GHOSTWHITE: cc11001100_hook("GHOSTWHITE", 4177068031, "object-key-init"),
      GOLD: cc11001100_hook("GOLD", 4292280575, "object-key-init"),
      GOLDENROD: cc11001100_hook("GOLDENROD", 3668254975, "object-key-init"),
      GRAY: cc11001100_hook("GRAY", 2155905279, "object-key-init"),
      GREEN: cc11001100_hook("GREEN", 8388863, "object-key-init"),
      GREENYELLOW: cc11001100_hook("GREENYELLOW", 2919182335, "object-key-init"),
      GREY: cc11001100_hook("GREY", 2155905279, "object-key-init"),
      HONEYDEW: cc11001100_hook("HONEYDEW", 4043305215, "object-key-init"),
      HOTPINK: cc11001100_hook("HOTPINK", 4285117695, "object-key-init"),
      INDIANRED: cc11001100_hook("INDIANRED", 3445382399, "object-key-init"),
      INDIGO: cc11001100_hook("INDIGO", 1258324735, "object-key-init"),
      IVORY: cc11001100_hook("IVORY", 4294963455, "object-key-init"),
      KHAKI: cc11001100_hook("KHAKI", 4041641215, "object-key-init"),
      LAVENDER: cc11001100_hook("LAVENDER", 3873897215, "object-key-init"),
      LAVENDERBLUSH: cc11001100_hook("LAVENDERBLUSH", 4293981695, "object-key-init"),
      LAWNGREEN: cc11001100_hook("LAWNGREEN", 2096890111, "object-key-init"),
      LEMONCHIFFON: cc11001100_hook("LEMONCHIFFON", 4294626815, "object-key-init"),
      LIGHTBLUE: cc11001100_hook("LIGHTBLUE", 2916673279, "object-key-init"),
      LIGHTCORAL: cc11001100_hook("LIGHTCORAL", 4034953471, "object-key-init"),
      LIGHTCYAN: cc11001100_hook("LIGHTCYAN", 3774873599, "object-key-init"),
      LIGHTGOLDENRODYELLOW: cc11001100_hook("LIGHTGOLDENRODYELLOW", 4210742015, "object-key-init"),
      LIGHTGRAY: cc11001100_hook("LIGHTGRAY", 3553874943, "object-key-init"),
      LIGHTGREEN: cc11001100_hook("LIGHTGREEN", 2431553791, "object-key-init"),
      LIGHTGREY: cc11001100_hook("LIGHTGREY", 3553874943, "object-key-init"),
      LIGHTPINK: cc11001100_hook("LIGHTPINK", 4290167295, "object-key-init"),
      LIGHTSALMON: cc11001100_hook("LIGHTSALMON", 4288707327, "object-key-init"),
      LIGHTSEAGREEN: cc11001100_hook("LIGHTSEAGREEN", 548580095, "object-key-init"),
      LIGHTSKYBLUE: cc11001100_hook("LIGHTSKYBLUE", 2278488831, "object-key-init"),
      LIGHTSLATEGRAY: cc11001100_hook("LIGHTSLATEGRAY", 2005441023, "object-key-init"),
      LIGHTSLATEGREY: cc11001100_hook("LIGHTSLATEGREY", 2005441023, "object-key-init"),
      LIGHTSTEELBLUE: cc11001100_hook("LIGHTSTEELBLUE", 2965692159, "object-key-init"),
      LIGHTYELLOW: cc11001100_hook("LIGHTYELLOW", 4294959359, "object-key-init"),
      LIME: cc11001100_hook("LIME", 16711935, "object-key-init"),
      LIMEGREEN: cc11001100_hook("LIMEGREEN", 852308735, "object-key-init"),
      LINEN: cc11001100_hook("LINEN", 4210091775, "object-key-init"),
      MAGENTA: cc11001100_hook("MAGENTA", 4278255615, "object-key-init"),
      MAROON: cc11001100_hook("MAROON", 2147483903, "object-key-init"),
      MEDIUMAQUAMARINE: cc11001100_hook("MEDIUMAQUAMARINE", 1724754687, "object-key-init"),
      MEDIUMBLUE: cc11001100_hook("MEDIUMBLUE", 52735, "object-key-init"),
      MEDIUMORCHID: cc11001100_hook("MEDIUMORCHID", 3126187007, "object-key-init"),
      MEDIUMPURPLE: cc11001100_hook("MEDIUMPURPLE", 2473647103, "object-key-init"),
      MEDIUMSEAGREEN: cc11001100_hook("MEDIUMSEAGREEN", 1018393087, "object-key-init"),
      MEDIUMSLATEBLUE: cc11001100_hook("MEDIUMSLATEBLUE", 2070474495, "object-key-init"),
      MEDIUMSPRINGGREEN: cc11001100_hook("MEDIUMSPRINGGREEN", 16423679, "object-key-init"),
      MEDIUMTURQUOISE: cc11001100_hook("MEDIUMTURQUOISE", 1221709055, "object-key-init"),
      MEDIUMVIOLETRED: cc11001100_hook("MEDIUMVIOLETRED", 3340076543, "object-key-init"),
      MIDNIGHTBLUE: cc11001100_hook("MIDNIGHTBLUE", 421097727, "object-key-init"),
      MINTCREAM: cc11001100_hook("MINTCREAM", 4127193855, "object-key-init"),
      MISTYROSE: cc11001100_hook("MISTYROSE", 4293190143, "object-key-init"),
      MOCCASIN: cc11001100_hook("MOCCASIN", 4293178879, "object-key-init"),
      NAVAJOWHITE: cc11001100_hook("NAVAJOWHITE", 4292783615, "object-key-init"),
      NAVY: cc11001100_hook("NAVY", 33023, "object-key-init"),
      OLDLACE: cc11001100_hook("OLDLACE", 4260751103, "object-key-init"),
      OLIVE: cc11001100_hook("OLIVE", 2155872511, "object-key-init"),
      OLIVEDRAB: cc11001100_hook("OLIVEDRAB", 1804477439, "object-key-init"),
      ORANGE: cc11001100_hook("ORANGE", 4289003775, "object-key-init"),
      ORANGERED: cc11001100_hook("ORANGERED", 4282712319, "object-key-init"),
      ORCHID: cc11001100_hook("ORCHID", 3664828159, "object-key-init"),
      PALEGOLDENROD: cc11001100_hook("PALEGOLDENROD", 4008225535, "object-key-init"),
      PALEGREEN: cc11001100_hook("PALEGREEN", 2566625535, "object-key-init"),
      PALETURQUOISE: cc11001100_hook("PALETURQUOISE", 2951671551, "object-key-init"),
      PALEVIOLETRED: cc11001100_hook("PALEVIOLETRED", 3681588223, "object-key-init"),
      PAPAYAWHIP: cc11001100_hook("PAPAYAWHIP", 4293907967, "object-key-init"),
      PEACHPUFF: cc11001100_hook("PEACHPUFF", 4292524543, "object-key-init"),
      PERU: cc11001100_hook("PERU", 3448061951, "object-key-init"),
      PINK: cc11001100_hook("PINK", 4290825215, "object-key-init"),
      PLUM: cc11001100_hook("PLUM", 3718307327, "object-key-init"),
      POWDERBLUE: cc11001100_hook("POWDERBLUE", 2967529215, "object-key-init"),
      PURPLE: cc11001100_hook("PURPLE", 2147516671, "object-key-init"),
      REBECCAPURPLE: cc11001100_hook("REBECCAPURPLE", 1714657791, "object-key-init"),
      RED: cc11001100_hook("RED", 4278190335, "object-key-init"),
      ROSYBROWN: cc11001100_hook("ROSYBROWN", 3163525119, "object-key-init"),
      ROYALBLUE: cc11001100_hook("ROYALBLUE", 1097458175, "object-key-init"),
      SADDLEBROWN: cc11001100_hook("SADDLEBROWN", 2336560127, "object-key-init"),
      SALMON: cc11001100_hook("SALMON", 4202722047, "object-key-init"),
      SANDYBROWN: cc11001100_hook("SANDYBROWN", 4104413439, "object-key-init"),
      SEAGREEN: cc11001100_hook("SEAGREEN", 780883967, "object-key-init"),
      SEASHELL: cc11001100_hook("SEASHELL", 4294307583, "object-key-init"),
      SIENNA: cc11001100_hook("SIENNA", 2689740287, "object-key-init"),
      SILVER: cc11001100_hook("SILVER", 3233857791, "object-key-init"),
      SKYBLUE: cc11001100_hook("SKYBLUE", 2278484991, "object-key-init"),
      SLATEBLUE: cc11001100_hook("SLATEBLUE", 1784335871, "object-key-init"),
      SLATEGRAY: cc11001100_hook("SLATEGRAY", 1887473919, "object-key-init"),
      SLATEGREY: cc11001100_hook("SLATEGREY", 1887473919, "object-key-init"),
      SNOW: cc11001100_hook("SNOW", 4294638335, "object-key-init"),
      SPRINGGREEN: cc11001100_hook("SPRINGGREEN", 16744447, "object-key-init"),
      STEELBLUE: cc11001100_hook("STEELBLUE", 1182971135, "object-key-init"),
      TAN: cc11001100_hook("TAN", 3535047935, "object-key-init"),
      TEAL: cc11001100_hook("TEAL", 8421631, "object-key-init"),
      THISTLE: cc11001100_hook("THISTLE", 3636451583, "object-key-init"),
      TOMATO: cc11001100_hook("TOMATO", 4284696575, "object-key-init"),
      TRANSPARENT: cc11001100_hook("TRANSPARENT", 0, "object-key-init"),
      TURQUOISE: cc11001100_hook("TURQUOISE", 1088475391, "object-key-init"),
      VIOLET: cc11001100_hook("VIOLET", 4001558271, "object-key-init"),
      WHEAT: cc11001100_hook("WHEAT", 4125012991, "object-key-init"),
      WHITE: cc11001100_hook("WHITE", 4294967295, "object-key-init"),
      WHITESMOKE: cc11001100_hook("WHITESMOKE", 4126537215, "object-key-init"),
      YELLOW: cc11001100_hook("YELLOW", 4294902015, "object-key-init"),
      YELLOWGREEN: cc11001100_hook("YELLOWGREEN", 2597139199, "object-key-init")
    }, "var-init"),
    be = cc11001100_hook("be", {
      name: cc11001100_hook("name", "background-clip", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "border-box", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        return e.map(function (A) {
          if (_A(A)) switch (A.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
          return 0;
        });
      }
    }, "var-init"),
    De = cc11001100_hook("De", {
      name: cc11001100_hook("name", "background-color", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "transparent", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 3, "object-key-init"),
      format: cc11001100_hook("format", "color", "object-key-init")
    }, "var-init"),
    Ke = function (t, A) {
      var r = cc11001100_hook("r", Ce(180), "var-init"),
        B = cc11001100_hook("B", [], "var-init");
      return Ae(A).forEach(function (A, e) {
        if (0 === e) {
          e = cc11001100_hook("e", A[0], "assign");
          if (20 === e.type && -1 !== ["top", "left", "right", "bottom"].indexOf(e.value)) return void (r = cc11001100_hook("r", se(A), "assign"));
          if (ne(e)) return void (r = cc11001100_hook("r", (le(t, e) + Ce(270)) % Ce(360), "assign"));
        }
        A = cc11001100_hook("A", He(t, A), "assign");
        B.push(A);
      }), {
        angle: cc11001100_hook("angle", r, "object-key-init"),
        stops: cc11001100_hook("stops", B, "object-key-init"),
        type: cc11001100_hook("type", 1, "object-key-init")
      };
    },
    ve = cc11001100_hook("ve", "closest-side", "var-init"),
    xe = cc11001100_hook("xe", "farthest-side", "var-init"),
    Me = cc11001100_hook("Me", "closest-corner", "var-init"),
    Se = cc11001100_hook("Se", "farthest-corner", "var-init"),
    Te = cc11001100_hook("Te", "ellipse", "var-init"),
    Ge = cc11001100_hook("Ge", "contain", "var-init"),
    he = function (r, A) {
      var B = cc11001100_hook("B", 0, "var-init"),
        n = cc11001100_hook("n", 3, "var-init"),
        s = cc11001100_hook("s", [], "var-init"),
        o = cc11001100_hook("o", [], "var-init");
      return Ae(A).forEach(function (A, e) {
        var t = cc11001100_hook("t", !0, "var-init");
        0 === e ? t = cc11001100_hook("t", A.reduce(function (A, e) {
          if (_A(e)) switch (e.value) {
            case "center":
              return o.push(ge), !1;
            case "top":
            case "left":
              return o.push(ae), !1;
            case "right":
            case "bottom":
              return o.push(we), !1;
          } else if (te(e) || ee(e)) return o.push(e), !1;
          return A;
        }, t), "assign") : 1 === e && (t = cc11001100_hook("t", A.reduce(function (A, e) {
          if (_A(e)) switch (e.value) {
            case "circle":
              return B = cc11001100_hook("B", 0, "assign"), !1;
            case Te:
              return !(B = cc11001100_hook("B", 1, "assign"));
            case Ge:
            case ve:
              return n = cc11001100_hook("n", 0, "assign"), !1;
            case xe:
              return !(n = cc11001100_hook("n", 1, "assign"));
            case Me:
              return !(n = cc11001100_hook("n", 2, "assign"));
            case "cover":
            case Se:
              return !(n = cc11001100_hook("n", 3, "assign"));
          } else if (ee(e) || te(e)) return (n = cc11001100_hook("n", !Array.isArray(n) ? [] : n, "assign")).push(e), !1;
          return A;
        }, t), "assign")), t && (A = cc11001100_hook("A", He(r, A), "assign"), s.push(A));
      }), {
        size: cc11001100_hook("size", n, "object-key-init"),
        shape: cc11001100_hook("shape", B, "object-key-init"),
        stops: cc11001100_hook("stops", s, "object-key-init"),
        position: cc11001100_hook("position", o, "object-key-init"),
        type: cc11001100_hook("type", 2, "object-key-init")
      };
    },
    Oe = function (A, e) {
      if (22 === e.type) {
        var t = cc11001100_hook("t", {
          url: cc11001100_hook("url", e.value, "object-key-init"),
          type: cc11001100_hook("type", 0, "object-key-init")
        }, "var-init");
        return A.cache.addImage(e.value), t;
      }
      if (18 !== e.type) throw new Error("Unsupported image type " + e.type);
      t = cc11001100_hook("t", ke[e.name], "assign");
      if (void 0 === t) throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return t(A, e.values);
    };
  var Ve,
    ke = cc11001100_hook("ke", {
      "linear-gradient": function (t, A) {
        var r = cc11001100_hook("r", Ce(180), "var-init"),
          B = cc11001100_hook("B", [], "var-init");
        return Ae(A).forEach(function (A, e) {
          if (0 === e) {
            e = cc11001100_hook("e", A[0], "assign");
            if (20 === e.type && "to" === e.value) return void (r = cc11001100_hook("r", se(A), "assign"));
            if (ne(e)) return void (r = cc11001100_hook("r", le(t, e), "assign"));
          }
          A = cc11001100_hook("A", He(t, A), "assign");
          B.push(A);
        }), {
          angle: cc11001100_hook("angle", r, "object-key-init"),
          stops: cc11001100_hook("stops", B, "object-key-init"),
          type: cc11001100_hook("type", 1, "object-key-init")
        };
      },
      "-moz-linear-gradient": cc11001100_hook("-moz-linear-gradient", Ke, "object-key-init"),
      "-ms-linear-gradient": cc11001100_hook("-ms-linear-gradient", Ke, "object-key-init"),
      "-o-linear-gradient": cc11001100_hook("-o-linear-gradient", Ke, "object-key-init"),
      "-webkit-linear-gradient": cc11001100_hook("-webkit-linear-gradient", Ke, "object-key-init"),
      "radial-gradient": function (B, A) {
        var n = cc11001100_hook("n", 0, "var-init"),
          s = cc11001100_hook("s", 3, "var-init"),
          o = cc11001100_hook("o", [], "var-init"),
          i = cc11001100_hook("i", [], "var-init");
        return Ae(A).forEach(function (A, e) {
          var t,
            r = cc11001100_hook("r", !0, "var-init");
          0 === e && (t = cc11001100_hook("t", !1, "assign"), r = cc11001100_hook("r", A.reduce(function (A, e) {
            if (t) {
              if (_A(e)) switch (e.value) {
                case "center":
                  return i.push(ge), A;
                case "top":
                case "left":
                  return i.push(ae), A;
                case "right":
                case "bottom":
                  return i.push(we), A;
              } else (te(e) || ee(e)) && i.push(e);
            } else if (_A(e)) switch (e.value) {
              case "circle":
                return n = cc11001100_hook("n", 0, "assign"), !1;
              case Te:
                return !(n = cc11001100_hook("n", 1, "assign"));
              case "at":
                return !(t = cc11001100_hook("t", !0, "assign"));
              case ve:
                return s = cc11001100_hook("s", 0, "assign"), !1;
              case "cover":
              case xe:
                return !(s = cc11001100_hook("s", 1, "assign"));
              case Ge:
              case Me:
                return !(s = cc11001100_hook("s", 2, "assign"));
              case Se:
                return !(s = cc11001100_hook("s", 3, "assign"));
            } else if (ee(e) || te(e)) return (s = cc11001100_hook("s", !Array.isArray(s) ? [] : s, "assign")).push(e), !1;
            return A;
          }, r), "assign")), r && (A = cc11001100_hook("A", He(B, A), "assign"), o.push(A));
        }), {
          size: cc11001100_hook("size", s, "object-key-init"),
          shape: cc11001100_hook("shape", n, "object-key-init"),
          stops: cc11001100_hook("stops", o, "object-key-init"),
          position: cc11001100_hook("position", i, "object-key-init"),
          type: cc11001100_hook("type", 2, "object-key-init")
        };
      },
      "-moz-radial-gradient": cc11001100_hook("-moz-radial-gradient", he, "object-key-init"),
      "-ms-radial-gradient": cc11001100_hook("-ms-radial-gradient", he, "object-key-init"),
      "-o-radial-gradient": cc11001100_hook("-o-radial-gradient", he, "object-key-init"),
      "-webkit-radial-gradient": cc11001100_hook("-webkit-radial-gradient", he, "object-key-init"),
      "-webkit-gradient": function (r, A) {
        var e = cc11001100_hook("e", Ce(180), "var-init"),
          B = cc11001100_hook("B", [], "var-init"),
          n = cc11001100_hook("n", 1, "var-init");
        return Ae(A).forEach(function (A, e) {
          var t,
            A = cc11001100_hook("A", A[0], "var-init");
          if (0 === e) {
            if (_A(A) && "linear" === A.value) return void (n = cc11001100_hook("n", 1, "assign"));
            if (_A(A) && "radial" === A.value) return void (n = cc11001100_hook("n", 2, "assign"));
          }
          18 === A.type && ("from" === A.name ? (t = cc11001100_hook("t", ue(r, A.values[0]), "assign"), B.push({
            stop: cc11001100_hook("stop", ae, "object-key-init"),
            color: cc11001100_hook("color", t, "object-key-init")
          })) : "to" === A.name ? (t = cc11001100_hook("t", ue(r, A.values[0]), "assign"), B.push({
            stop: cc11001100_hook("stop", we, "object-key-init"),
            color: cc11001100_hook("color", t, "object-key-init")
          })) : "color-stop" !== A.name || 2 === (A = cc11001100_hook("A", A.values.filter($A), "assign")).length && (t = cc11001100_hook("t", ue(r, A[1]), "assign"), A = cc11001100_hook("A", A[0], "assign"), ZA(A) && B.push({
            stop: {
              type: cc11001100_hook("type", 16, "object-key-init"),
              number: cc11001100_hook("number", 100 * A.number, "object-key-init"),
              flags: cc11001100_hook("flags", A.flags, "object-key-init")
            },
            color: cc11001100_hook("color", t, "object-key-init")
          })));
        }), 1 === n ? {
          angle: cc11001100_hook("angle", (e + Ce(180)) % Ce(360), "object-key-init"),
          stops: cc11001100_hook("stops", B, "object-key-init"),
          type: cc11001100_hook("type", n, "object-key-init")
        } : {
          size: cc11001100_hook("size", 3, "object-key-init"),
          shape: cc11001100_hook("shape", 0, "object-key-init"),
          stops: cc11001100_hook("stops", B, "object-key-init"),
          position: cc11001100_hook("position", [], "object-key-init"),
          type: cc11001100_hook("type", n, "object-key-init")
        };
      }
    }, "var-init"),
    Re = cc11001100_hook("Re", {
      name: cc11001100_hook("name", "background-image", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (e, A) {
        if (0 === A.length) return [];
        var t = cc11001100_hook("t", A[0], "var-init");
        return 20 === t.type && "none" === t.value ? [] : A.filter(function (A) {
          return $A(A) && !(20 === (A = cc11001100_hook("A", A, "assign")).type && "none" === A.value || 18 === A.type && !ke[A.name]);
        }).map(function (A) {
          return Oe(e, A);
        });
      }
    }, "var-init"),
    Ne = cc11001100_hook("Ne", {
      name: cc11001100_hook("name", "background-origin", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "border-box", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        return e.map(function (A) {
          if (_A(A)) switch (A.value) {
            case "padding-box":
              return 1;
            case "content-box":
              return 2;
          }
          return 0;
        });
      }
    }, "var-init"),
    Pe = cc11001100_hook("Pe", {
      name: cc11001100_hook("name", "background-position", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0% 0%", "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A, e) {
        return Ae(e).map(function (A) {
          return A.filter(te);
        }).map(re);
      }
    }, "var-init"),
    Xe = cc11001100_hook("Xe", {
      name: cc11001100_hook("name", "background-repeat", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "repeat", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        return Ae(e).map(function (A) {
          return A.filter(_A).map(function (A) {
            return A.value;
          }).join(" ");
        }).map(Je);
      }
    }, "var-init"),
    Je = function (A) {
      switch (A) {
        case "no-repeat":
          return 1;
        case "repeat-x":
        case "repeat no-repeat":
          return 2;
        case "repeat-y":
        case "no-repeat repeat":
          return 3;
        default:
          return 0;
      }
    };
  (he = cc11001100_hook("he", Ve = cc11001100_hook("Ve", Ve || {}, "assign"), "assign")).AUTO = cc11001100_hook("(he = Ve = Ve || {}).AUTO", "auto", "assign"), he.CONTAIN = cc11001100_hook("he.CONTAIN", "contain", "assign");
  function Ye(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return _A(A) && "normal" === A.value ? 1.2 * e : 17 === A.type ? e * A.number : te(A) ? Ue(A, e) : e;
  }
  var We,
    Ze,
    _e = cc11001100_hook("_e", {
      name: cc11001100_hook("name", "background-size", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(he.COVER = cc11001100_hook("he.COVER", "cover", "assign")), "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        return Ae(e).map(function (A) {
          return A.filter(qe);
        });
      }
    }, "var-init"),
    qe = function (A) {
      return _A(A) || te(A);
    },
    he = function (A) {
      return {
        name: cc11001100_hook("name", "border-" + A + "-color", "object-key-init"),
        initialValue: cc11001100_hook("initialValue", "transparent", "object-key-init"),
        prefix: cc11001100_hook("prefix", !1, "object-key-init"),
        type: cc11001100_hook("type", 3, "object-key-init"),
        format: cc11001100_hook("format", "color", "object-key-init")
      };
    },
    je = cc11001100_hook("je", he("top"), "var-init"),
    ze = cc11001100_hook("ze", he("right"), "var-init"),
    $e = cc11001100_hook("$e", he("bottom"), "var-init"),
    At = cc11001100_hook("At", he("left"), "var-init"),
    he = function (A) {
      return {
        name: cc11001100_hook("name", "border-radius-" + A, "object-key-init"),
        initialValue: cc11001100_hook("initialValue", "0 0", "object-key-init"),
        prefix: cc11001100_hook("prefix", !1, "object-key-init"),
        type: cc11001100_hook("type", 1, "object-key-init"),
        parse: function (A, e) {
          return re(e.filter(te));
        }
      };
    },
    et = cc11001100_hook("et", he("top-left"), "var-init"),
    tt = cc11001100_hook("tt", he("top-right"), "var-init"),
    rt = cc11001100_hook("rt", he("bottom-right"), "var-init"),
    Bt = cc11001100_hook("Bt", he("bottom-left"), "var-init"),
    he = function (A) {
      return {
        name: cc11001100_hook("name", "border-" + A + "-style", "object-key-init"),
        initialValue: cc11001100_hook("initialValue", "solid", "object-key-init"),
        prefix: cc11001100_hook("prefix", !1, "object-key-init"),
        type: cc11001100_hook("type", 2, "object-key-init"),
        parse: function (A, e) {
          switch (e) {
            case "none":
              return 0;
            case "dashed":
              return 2;
            case "dotted":
              return 3;
            case "double":
              return 4;
          }
          return 1;
        }
      };
    },
    nt = cc11001100_hook("nt", he("top"), "var-init"),
    st = cc11001100_hook("st", he("right"), "var-init"),
    ot = cc11001100_hook("ot", he("bottom"), "var-init"),
    it = cc11001100_hook("it", he("left"), "var-init"),
    he = function (A) {
      return {
        name: cc11001100_hook("name", "border-" + A + "-width", "object-key-init"),
        initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
        type: cc11001100_hook("type", 0, "object-key-init"),
        prefix: cc11001100_hook("prefix", !1, "object-key-init"),
        parse: function (A, e) {
          return WA(e) ? e.number : 0;
        }
      };
    },
    Qt = cc11001100_hook("Qt", he("top"), "var-init"),
    ct = cc11001100_hook("ct", he("right"), "var-init"),
    at = cc11001100_hook("at", he("bottom"), "var-init"),
    gt = cc11001100_hook("gt", he("left"), "var-init"),
    wt = cc11001100_hook("wt", {
      name: cc11001100_hook("name", "color", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "transparent", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 3, "object-key-init"),
      format: cc11001100_hook("format", "color", "object-key-init")
    }, "var-init"),
    Ut = cc11001100_hook("Ut", {
      name: cc11001100_hook("name", "direction", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "ltr", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        return "rtl" !== e ? 0 : 1;
      }
    }, "var-init"),
    lt = cc11001100_hook("lt", {
      name: cc11001100_hook("name", "display", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "inline-block", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        return e.filter(_A).reduce(function (A, e) {
          return A | Ct(e.value);
        }, 0);
      }
    }, "var-init"),
    Ct = function (A) {
      switch (A) {
        case "block":
        case "-webkit-box":
          return 2;
        case "inline":
          return 4;
        case "run-in":
          return 8;
        case "flow":
          return 16;
        case "flow-root":
          return 32;
        case "table":
          return 64;
        case "flex":
        case "-webkit-flex":
          return 128;
        case "grid":
        case "-ms-grid":
          return 256;
        case "ruby":
          return 512;
        case "subgrid":
          return 1024;
        case "list-item":
          return 2048;
        case "table-row-group":
          return 4096;
        case "table-header-group":
          return 8192;
        case "table-footer-group":
          return 16384;
        case "table-row":
          return 32768;
        case "table-cell":
          return 65536;
        case "table-column-group":
          return 131072;
        case "table-column":
          return 262144;
        case "table-caption":
          return 524288;
        case "ruby-base":
          return 1048576;
        case "ruby-text":
          return 2097152;
        case "ruby-base-container":
          return 4194304;
        case "ruby-text-container":
          return 8388608;
        case "contents":
          return 16777216;
        case "inline-block":
          return 33554432;
        case "inline-list-item":
          return 67108864;
        case "inline-table":
          return 134217728;
        case "inline-flex":
          return 268435456;
        case "inline-grid":
          return 536870912;
      }
      return 0;
    },
    ut = cc11001100_hook("ut", {
      name: cc11001100_hook("name", "float", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        switch (e) {
          case "left":
            return 1;
          case "right":
            return 2;
          case "inline-start":
            return 3;
          case "inline-end":
            return 4;
        }
        return 0;
      }
    }, "var-init"),
    Ft = cc11001100_hook("Ft", {
      name: cc11001100_hook("name", "letter-spacing", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 0, "object-key-init"),
      parse: function (A, e) {
        return !(20 === e.type && "normal" === e.value || 17 !== e.type && 15 !== e.type) ? e.number : 0;
      }
    }, "var-init"),
    ht = cc11001100_hook("ht", {
      name: cc11001100_hook("name", "line-break", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", (he = cc11001100_hook("he", We = cc11001100_hook("We", We || {}, "assign"), "assign")).NORMAL = cc11001100_hook("(he = We = We || {}).NORMAL", "normal", "assign"), "object-key-init"),
      prefix: cc11001100_hook("prefix", !(he.STRICT = cc11001100_hook("he.STRICT", "strict", "assign")), "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        return "strict" !== e ? We.NORMAL : We.STRICT;
      }
    }, "var-init"),
    dt = cc11001100_hook("dt", {
      name: cc11001100_hook("name", "line-height", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 4, "object-key-init")
    }, "var-init"),
    ft = cc11001100_hook("ft", {
      name: cc11001100_hook("name", "list-style-image", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", 0, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A, e) {
        return 20 === e.type && "none" === e.value ? null : Oe(A, e);
      }
    }, "var-init"),
    Ht = cc11001100_hook("Ht", {
      name: cc11001100_hook("name", "list-style-position", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "outside", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        return "inside" !== e ? 1 : 0;
      }
    }, "var-init"),
    pt = cc11001100_hook("pt", {
      name: cc11001100_hook("name", "list-style-type", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        switch (e) {
          case "disc":
            return 0;
          case "circle":
            return 1;
          case "square":
            return 2;
          case "decimal":
            return 3;
          case "cjk-decimal":
            return 4;
          case "decimal-leading-zero":
            return 5;
          case "lower-roman":
            return 6;
          case "upper-roman":
            return 7;
          case "lower-greek":
            return 8;
          case "lower-alpha":
            return 9;
          case "upper-alpha":
            return 10;
          case "arabic-indic":
            return 11;
          case "armenian":
            return 12;
          case "bengali":
            return 13;
          case "cambodian":
            return 14;
          case "cjk-earthly-branch":
            return 15;
          case "cjk-heavenly-stem":
            return 16;
          case "cjk-ideographic":
            return 17;
          case "devanagari":
            return 18;
          case "ethiopic-numeric":
            return 19;
          case "georgian":
            return 20;
          case "gujarati":
            return 21;
          case "gurmukhi":
          case "hebrew":
            return 22;
          case "hiragana":
            return 23;
          case "hiragana-iroha":
            return 24;
          case "japanese-formal":
            return 25;
          case "japanese-informal":
            return 26;
          case "kannada":
            return 27;
          case "katakana":
            return 28;
          case "katakana-iroha":
            return 29;
          case "khmer":
            return 30;
          case "korean-hangul-formal":
            return 31;
          case "korean-hanja-formal":
            return 32;
          case "korean-hanja-informal":
            return 33;
          case "lao":
            return 34;
          case "lower-armenian":
            return 35;
          case "malayalam":
            return 36;
          case "mongolian":
            return 37;
          case "myanmar":
            return 38;
          case "oriya":
            return 39;
          case "persian":
            return 40;
          case "simp-chinese-formal":
            return 41;
          case "simp-chinese-informal":
            return 42;
          case "tamil":
            return 43;
          case "telugu":
            return 44;
          case "thai":
            return 45;
          case "tibetan":
            return 46;
          case "trad-chinese-formal":
            return 47;
          case "trad-chinese-informal":
            return 48;
          case "upper-armenian":
            return 49;
          case "disclosure-open":
            return 50;
          case "disclosure-closed":
            return 51;
          default:
            return -1;
        }
      }
    }, "var-init"),
    he = function (A) {
      return {
        name: cc11001100_hook("name", "margin-" + A, "object-key-init"),
        initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
        prefix: cc11001100_hook("prefix", !1, "object-key-init"),
        type: cc11001100_hook("type", 4, "object-key-init")
      };
    },
    Et = cc11001100_hook("Et", he("top"), "var-init"),
    It = cc11001100_hook("It", he("right"), "var-init"),
    yt = cc11001100_hook("yt", he("bottom"), "var-init"),
    Kt = cc11001100_hook("Kt", he("left"), "var-init"),
    mt = cc11001100_hook("mt", {
      name: cc11001100_hook("name", "overflow", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "visible", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        return e.filter(_A).map(function (A) {
          switch (A.value) {
            case "hidden":
              return 1;
            case "scroll":
              return 2;
            case "clip":
              return 3;
            case "auto":
              return 4;
            default:
              return 0;
          }
        });
      }
    }, "var-init"),
    Lt = cc11001100_hook("Lt", {
      name: cc11001100_hook("name", "overflow-wrap", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        return "break-word" !== e ? "normal" : "break-word";
      }
    }, "var-init"),
    he = function (A) {
      return {
        name: cc11001100_hook("name", "padding-" + A, "object-key-init"),
        initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
        prefix: cc11001100_hook("prefix", !1, "object-key-init"),
        type: cc11001100_hook("type", 3, "object-key-init"),
        format: cc11001100_hook("format", "length-percentage", "object-key-init")
      };
    },
    bt = cc11001100_hook("bt", he("top"), "var-init"),
    Dt = cc11001100_hook("Dt", he("right"), "var-init"),
    vt = cc11001100_hook("vt", he("bottom"), "var-init"),
    xt = cc11001100_hook("xt", he("left"), "var-init"),
    Mt = cc11001100_hook("Mt", {
      name: cc11001100_hook("name", "text-align", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "left", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        switch (e) {
          case "right":
            return 2;
          case "center":
          case "justify":
            return 1;
          default:
            return 0;
        }
      }
    }, "var-init"),
    St = cc11001100_hook("St", {
      name: cc11001100_hook("name", "position", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "static", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        switch (e) {
          case "relative":
            return 1;
          case "absolute":
            return 2;
          case "fixed":
            return 3;
          case "sticky":
            return 4;
        }
        return 0;
      }
    }, "var-init"),
    Tt = cc11001100_hook("Tt", {
      name: cc11001100_hook("name", "text-shadow", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (n, A) {
        return 1 === A.length && jA(A[0], "none") ? [] : Ae(A).map(function (A) {
          for (var e = cc11001100_hook("e", {
              color: cc11001100_hook("color", Le.TRANSPARENT, "object-key-init"),
              offsetX: cc11001100_hook("offsetX", ae, "object-key-init"),
              offsetY: cc11001100_hook("offsetY", ae, "object-key-init"),
              blur: cc11001100_hook("blur", ae, "object-key-init")
            }, "var-init"), t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < A.length; r++) {
            var B = cc11001100_hook("B", A[r], "var-init");
            ee(B) ? (0 === t ? e.offsetX = cc11001100_hook("e.offsetX", B, "assign") : 1 === t ? e.offsetY = cc11001100_hook("e.offsetY", B, "assign") : e.blur = cc11001100_hook("e.blur", B, "assign"), t++) : e.color = cc11001100_hook("e.color", ue(n, B), "assign");
          }
          return e;
        });
      }
    }, "var-init"),
    Gt = cc11001100_hook("Gt", {
      name: cc11001100_hook("name", "text-transform", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        switch (e) {
          case "uppercase":
            return 2;
          case "lowercase":
            return 1;
          case "capitalize":
            return 3;
        }
        return 0;
      }
    }, "var-init"),
    Ot = cc11001100_hook("Ot", {
      name: cc11001100_hook("name", "transform", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", 0, "object-key-init"),
      parse: function (A, e) {
        if (20 === e.type && "none" === e.value) return null;
        if (18 !== e.type) return null;
        var t = cc11001100_hook("t", Vt[e.name], "var-init");
        if (void 0 === t) throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
        return t(e.values);
      }
    }, "var-init"),
    Vt = cc11001100_hook("Vt", {
      matrix: function (A) {
        A = cc11001100_hook("A", A.filter(function (A) {
          return 17 === A.type;
        }).map(function (A) {
          return A.number;
        }), "assign");
        return 6 === A.length ? A : null;
      },
      matrix3d: function (A) {
        var e = cc11001100_hook("e", A.filter(function (A) {
            return 17 === A.type;
          }).map(function (A) {
            return A.number;
          }), "var-init"),
          t = cc11001100_hook("t", e[0], "var-init"),
          r = cc11001100_hook("r", e[1], "var-init");
        e[2], e[3];
        var B = cc11001100_hook("B", e[4], "var-init"),
          n = cc11001100_hook("n", e[5], "var-init");
        e[6], e[7], e[8], e[9], e[10], e[11];
        var s = cc11001100_hook("s", e[12], "var-init"),
          A = cc11001100_hook("A", e[13], "var-init");
        return e[14], e[15], 16 === e.length ? [t, r, B, n, s, A] : null;
      }
    }, "var-init"),
    he = cc11001100_hook("he", {
      type: cc11001100_hook("type", 16, "object-key-init"),
      number: cc11001100_hook("number", 50, "object-key-init"),
      flags: cc11001100_hook("flags", 4, "object-key-init")
    }, "var-init"),
    kt = cc11001100_hook("kt", [he, he], "var-init"),
    Rt = cc11001100_hook("Rt", {
      name: cc11001100_hook("name", "transform-origin", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "50% 50%", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        e = cc11001100_hook("e", e.filter(te), "assign");
        return 2 !== e.length ? kt : [e[0], e[1]];
      }
    }, "var-init"),
    Nt = cc11001100_hook("Nt", {
      name: cc11001100_hook("name", "visible", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        switch (e) {
          case "hidden":
            return 1;
          case "collapse":
            return 2;
          default:
            return 0;
        }
      }
    }, "var-init");
  (he = cc11001100_hook("he", Ze = cc11001100_hook("Ze", Ze || {}, "assign"), "assign")).NORMAL = cc11001100_hook("(he = Ze = Ze || {}).NORMAL", "normal", "assign"), he.BREAK_ALL = cc11001100_hook("he.BREAK_ALL", "break-all", "assign");
  function Pt(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return 0 != (A & e);
  }
  function Xt(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return (A = cc11001100_hook("A", A && A[Math.min(e, A.length - 1)], "assign")) ? t ? A.open : A.close : "";
  }
  var Jt = cc11001100_hook("Jt", {
      name: cc11001100_hook("name", "word-break", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      prefix: cc11001100_hook("prefix", !(he.KEEP_ALL = cc11001100_hook("he.KEEP_ALL", "keep-all", "assign")), "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        switch (e) {
          case "break-all":
            return Ze.BREAK_ALL;
          case "keep-all":
            return Ze.KEEP_ALL;
          default:
            return Ze.NORMAL;
        }
      }
    }, "var-init"),
    Yt = cc11001100_hook("Yt", {
      name: cc11001100_hook("name", "z-index", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "auto", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 0, "object-key-init"),
      parse: function (A, e) {
        if (20 === e.type) return {
          auto: cc11001100_hook("auto", !0, "object-key-init"),
          order: cc11001100_hook("order", 0, "object-key-init")
        };
        if (ZA(e)) return {
          auto: cc11001100_hook("auto", !1, "object-key-init"),
          order: cc11001100_hook("order", e.number, "object-key-init")
        };
        throw new Error("Invalid z-index number parsed");
      }
    }, "var-init"),
    Wt = function (A, e) {
      if (15 === e.type) switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
      throw new Error("Unsupported time type");
    },
    Zt = cc11001100_hook("Zt", {
      name: cc11001100_hook("name", "opacity", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "1", "object-key-init"),
      type: cc11001100_hook("type", 0, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A, e) {
        return ZA(e) ? e.number : 1;
      }
    }, "var-init"),
    _t = cc11001100_hook("_t", {
      name: cc11001100_hook("name", "text-decoration-color", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "transparent", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 3, "object-key-init"),
      format: cc11001100_hook("format", "color", "object-key-init")
    }, "var-init"),
    qt = cc11001100_hook("qt", {
      name: cc11001100_hook("name", "text-decoration-line", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        return e.filter(_A).map(function (A) {
          switch (A.value) {
            case "underline":
              return 1;
            case "overline":
              return 2;
            case "line-through":
              return 3;
            case "none":
              return 4;
          }
          return 0;
        }).filter(function (A) {
          return 0 !== A;
        });
      }
    }, "var-init"),
    jt = cc11001100_hook("jt", {
      name: cc11001100_hook("name", "font-family", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        var t = cc11001100_hook("t", [], "var-init"),
          r = cc11001100_hook("r", [], "var-init");
        return e.forEach(function (A) {
          switch (A.type) {
            case 20:
            case 0:
              t.push(A.value);
              break;
            case 17:
              t.push(A.number.toString());
              break;
            case 4:
              r.push(t.join(" ")), t.length = cc11001100_hook("t.length", 0, "assign");
          }
        }), t.length && r.push(t.join(" ")), r.map(function (A) {
          return -1 === A.indexOf(" ") ? A : "'" + A + "'";
        });
      }
    }, "var-init"),
    zt = cc11001100_hook("zt", {
      name: cc11001100_hook("name", "font-size", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 3, "object-key-init"),
      format: cc11001100_hook("format", "length", "object-key-init")
    }, "var-init"),
    $t = cc11001100_hook("$t", {
      name: cc11001100_hook("name", "font-weight", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      type: cc11001100_hook("type", 0, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A, e) {
        return ZA(e) ? e.number : !_A(e) || "bold" !== e.value ? 400 : 700;
      }
    }, "var-init"),
    Ar = cc11001100_hook("Ar", {
      name: cc11001100_hook("name", "font-variant", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A, e) {
        return e.filter(_A).map(function (A) {
          return A.value;
        });
      }
    }, "var-init"),
    er = cc11001100_hook("er", {
      name: cc11001100_hook("name", "font-style", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 2, "object-key-init"),
      parse: function (A, e) {
        switch (e) {
          case "oblique":
            return "oblique";
          case "italic":
            return "italic";
          default:
            return "normal";
        }
      }
    }, "var-init"),
    tr = cc11001100_hook("tr", {
      name: cc11001100_hook("name", "content", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A, e) {
        if (0 === e.length) return [];
        var t = cc11001100_hook("t", e[0], "var-init");
        return 20 === t.type && "none" === t.value ? [] : e;
      }
    }, "var-init"),
    rr = cc11001100_hook("rr", {
      name: cc11001100_hook("name", "counter-increment", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        if (0 === e.length) return null;
        var t = cc11001100_hook("t", e[0], "var-init");
        if (20 === t.type && "none" === t.value) return null;
        for (var r = cc11001100_hook("r", [], "var-init"), B = cc11001100_hook("B", e.filter(zA), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < B.length; n++) {
          var s = cc11001100_hook("s", B[n], "var-init"),
            o = cc11001100_hook("o", B[n + 1], "var-init");
          20 === s.type && (o = cc11001100_hook("o", o && ZA(o) ? o.number : 1, "assign"), r.push({
            counter: cc11001100_hook("counter", s.value, "object-key-init"),
            increment: cc11001100_hook("increment", o, "object-key-init")
          }));
        }
        return r;
      }
    }, "var-init"),
    Br = cc11001100_hook("Br", {
      name: cc11001100_hook("name", "counter-reset", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        if (0 === e.length) return [];
        for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", e.filter(zA), "var-init"), B = cc11001100_hook("B", 0, "var-init"); B < r.length; B++) {
          var n = cc11001100_hook("n", r[B], "var-init"),
            s = cc11001100_hook("s", r[B + 1], "var-init");
          _A(n) && "none" !== n.value && (s = cc11001100_hook("s", s && ZA(s) ? s.number : 0, "assign"), t.push({
            counter: cc11001100_hook("counter", n.value, "object-key-init"),
            reset: cc11001100_hook("reset", s, "object-key-init")
          }));
        }
        return t;
      }
    }, "var-init"),
    nr = cc11001100_hook("nr", {
      name: cc11001100_hook("name", "duration", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0s", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (e, A) {
        return A.filter(WA).map(function (A) {
          return Wt(e, A);
        });
      }
    }, "var-init"),
    sr = cc11001100_hook("sr", {
      name: cc11001100_hook("name", "quotes", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      prefix: cc11001100_hook("prefix", !0, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        if (0 === e.length) return null;
        var t = cc11001100_hook("t", e[0], "var-init");
        if (20 === t.type && "none" === t.value) return null;
        var r = cc11001100_hook("r", [], "var-init"),
          B = cc11001100_hook("B", e.filter(qA), "var-init");
        if (B.length % 2 != 0) return null;
        for (var n = cc11001100_hook("n", 0, "var-init"); n < B.length; n += cc11001100_hook("n", 2, "assign")) {
          var s = cc11001100_hook("s", B[n].value, "var-init"),
            o = cc11001100_hook("o", B[n + 1].value, "var-init");
          r.push({
            open: cc11001100_hook("open", s, "object-key-init"),
            close: cc11001100_hook("close", o, "object-key-init")
          });
        }
        return r;
      }
    }, "var-init"),
    or = cc11001100_hook("or", {
      name: cc11001100_hook("name", "box-shadow", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "none", "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (n, A) {
        return 1 === A.length && jA(A[0], "none") ? [] : Ae(A).map(function (A) {
          for (var e = cc11001100_hook("e", {
              color: cc11001100_hook("color", 255, "object-key-init"),
              offsetX: cc11001100_hook("offsetX", ae, "object-key-init"),
              offsetY: cc11001100_hook("offsetY", ae, "object-key-init"),
              blur: cc11001100_hook("blur", ae, "object-key-init"),
              spread: cc11001100_hook("spread", ae, "object-key-init"),
              inset: cc11001100_hook("inset", !1, "object-key-init")
            }, "var-init"), t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < A.length; r++) {
            var B = cc11001100_hook("B", A[r], "var-init");
            jA(B, "inset") ? e.inset = cc11001100_hook("e.inset", !0, "assign") : ee(B) ? (0 === t ? e.offsetX = cc11001100_hook("e.offsetX", B, "assign") : 1 === t ? e.offsetY = cc11001100_hook("e.offsetY", B, "assign") : 2 === t ? e.blur = cc11001100_hook("e.blur", B, "assign") : e.spread = cc11001100_hook("e.spread", B, "assign"), t++) : e.color = cc11001100_hook("e.color", ue(n, B), "assign");
          }
          return e;
        });
      }
    }, "var-init"),
    ir = cc11001100_hook("ir", {
      name: cc11001100_hook("name", "paint-order", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "normal", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      parse: function (A, e) {
        var t = cc11001100_hook("t", [], "var-init");
        return e.filter(_A).forEach(function (A) {
          switch (A.value) {
            case "stroke":
              t.push(1);
              break;
            case "fill":
              t.push(0);
              break;
            case "markers":
              t.push(2);
          }
        }), [0, 1, 2].forEach(function (A) {
          -1 === t.indexOf(A) && t.push(A);
        }), t;
      }
    }, "var-init"),
    Qr = cc11001100_hook("Qr", {
      name: cc11001100_hook("name", "-webkit-text-stroke-color", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "currentcolor", "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      type: cc11001100_hook("type", 3, "object-key-init"),
      format: cc11001100_hook("format", "color", "object-key-init")
    }, "var-init"),
    cr = cc11001100_hook("cr", {
      name: cc11001100_hook("name", "-webkit-text-stroke-width", "object-key-init"),
      initialValue: cc11001100_hook("initialValue", "0", "object-key-init"),
      type: cc11001100_hook("type", 0, "object-key-init"),
      prefix: cc11001100_hook("prefix", !1, "object-key-init"),
      parse: function (A, e) {
        return WA(e) ? e.number : 0;
      }
    }, "var-init"),
    ar = cc11001100_hook("ar", (gr.prototype.isVisible = cc11001100_hook("gr.prototype.isVisible", function () {
      return 0 < this.display && 0 < this.opacity && 0 === this.visibility;
    }, "assign"), gr.prototype.isTransparent = cc11001100_hook("gr.prototype.isTransparent", function () {
      return oe(this.backgroundColor);
    }, "assign"), gr.prototype.isTransformed = cc11001100_hook("gr.prototype.isTransformed", function () {
      return null !== this.transform;
    }, "assign"), gr.prototype.isPositioned = cc11001100_hook("gr.prototype.isPositioned", function () {
      return 0 !== this.position;
    }, "assign"), gr.prototype.isPositionedWithZIndex = cc11001100_hook("gr.prototype.isPositionedWithZIndex", function () {
      return this.isPositioned() && !this.zIndex.auto;
    }, "assign"), gr.prototype.isFloating = cc11001100_hook("gr.prototype.isFloating", function () {
      return 0 !== this.float;
    }, "assign"), gr.prototype.isInlineLevel = cc11001100_hook("gr.prototype.isInlineLevel", function () {
      return Pt(this.display, 4) || Pt(this.display, 33554432) || Pt(this.display, 268435456) || Pt(this.display, 536870912) || Pt(this.display, 67108864) || Pt(this.display, 134217728);
    }, "assign"), gr), "var-init");
  function gr(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.animationDuration = cc11001100_hook("this.animationDuration", lr(A, nr, e.animationDuration), "assign"), this.backgroundClip = cc11001100_hook("this.backgroundClip", lr(A, be, e.backgroundClip), "assign"), this.backgroundColor = cc11001100_hook("this.backgroundColor", lr(A, De, e.backgroundColor), "assign"), this.backgroundImage = cc11001100_hook("this.backgroundImage", lr(A, Re, e.backgroundImage), "assign"), this.backgroundOrigin = cc11001100_hook("this.backgroundOrigin", lr(A, Ne, e.backgroundOrigin), "assign"), this.backgroundPosition = cc11001100_hook("this.backgroundPosition", lr(A, Pe, e.backgroundPosition), "assign"), this.backgroundRepeat = cc11001100_hook("this.backgroundRepeat", lr(A, Xe, e.backgroundRepeat), "assign"), this.backgroundSize = cc11001100_hook("this.backgroundSize", lr(A, _e, e.backgroundSize), "assign"), this.borderTopColor = cc11001100_hook("this.borderTopColor", lr(A, je, e.borderTopColor), "assign"), this.borderRightColor = cc11001100_hook("this.borderRightColor", lr(A, ze, e.borderRightColor), "assign"), this.borderBottomColor = cc11001100_hook("this.borderBottomColor", lr(A, $e, e.borderBottomColor), "assign"), this.borderLeftColor = cc11001100_hook("this.borderLeftColor", lr(A, At, e.borderLeftColor), "assign"), this.borderTopLeftRadius = cc11001100_hook("this.borderTopLeftRadius", lr(A, et, e.borderTopLeftRadius), "assign"), this.borderTopRightRadius = cc11001100_hook("this.borderTopRightRadius", lr(A, tt, e.borderTopRightRadius), "assign"), this.borderBottomRightRadius = cc11001100_hook("this.borderBottomRightRadius", lr(A, rt, e.borderBottomRightRadius), "assign"), this.borderBottomLeftRadius = cc11001100_hook("this.borderBottomLeftRadius", lr(A, Bt, e.borderBottomLeftRadius), "assign"), this.borderTopStyle = cc11001100_hook("this.borderTopStyle", lr(A, nt, e.borderTopStyle), "assign"), this.borderRightStyle = cc11001100_hook("this.borderRightStyle", lr(A, st, e.borderRightStyle), "assign"), this.borderBottomStyle = cc11001100_hook("this.borderBottomStyle", lr(A, ot, e.borderBottomStyle), "assign"), this.borderLeftStyle = cc11001100_hook("this.borderLeftStyle", lr(A, it, e.borderLeftStyle), "assign"), this.borderTopWidth = cc11001100_hook("this.borderTopWidth", lr(A, Qt, e.borderTopWidth), "assign"), this.borderRightWidth = cc11001100_hook("this.borderRightWidth", lr(A, ct, e.borderRightWidth), "assign"), this.borderBottomWidth = cc11001100_hook("this.borderBottomWidth", lr(A, at, e.borderBottomWidth), "assign"), this.borderLeftWidth = cc11001100_hook("this.borderLeftWidth", lr(A, gt, e.borderLeftWidth), "assign"), this.boxShadow = cc11001100_hook("this.boxShadow", lr(A, or, e.boxShadow), "assign"), this.color = cc11001100_hook("this.color", lr(A, wt, e.color), "assign"), this.direction = cc11001100_hook("this.direction", lr(A, Ut, e.direction), "assign"), this.display = cc11001100_hook("this.display", lr(A, lt, e.display), "assign"), this.float = cc11001100_hook("this.float", lr(A, ut, e.cssFloat), "assign"), this.fontFamily = cc11001100_hook("this.fontFamily", lr(A, jt, e.fontFamily), "assign"), this.fontSize = cc11001100_hook("this.fontSize", lr(A, zt, e.fontSize), "assign"), this.fontStyle = cc11001100_hook("this.fontStyle", lr(A, er, e.fontStyle), "assign"), this.fontVariant = cc11001100_hook("this.fontVariant", lr(A, Ar, e.fontVariant), "assign"), this.fontWeight = cc11001100_hook("this.fontWeight", lr(A, $t, e.fontWeight), "assign"), this.letterSpacing = cc11001100_hook("this.letterSpacing", lr(A, Ft, e.letterSpacing), "assign"), this.lineBreak = cc11001100_hook("this.lineBreak", lr(A, ht, e.lineBreak), "assign"), this.lineHeight = cc11001100_hook("this.lineHeight", lr(A, dt, e.lineHeight), "assign"), this.listStyleImage = cc11001100_hook("this.listStyleImage", lr(A, ft, e.listStyleImage), "assign"), this.listStylePosition = cc11001100_hook("this.listStylePosition", lr(A, Ht, e.listStylePosition), "assign"), this.listStyleType = cc11001100_hook("this.listStyleType", lr(A, pt, e.listStyleType), "assign"), this.marginTop = cc11001100_hook("this.marginTop", lr(A, Et, e.marginTop), "assign"), this.marginRight = cc11001100_hook("this.marginRight", lr(A, It, e.marginRight), "assign"), this.marginBottom = cc11001100_hook("this.marginBottom", lr(A, yt, e.marginBottom), "assign"), this.marginLeft = cc11001100_hook("this.marginLeft", lr(A, Kt, e.marginLeft), "assign"), this.opacity = cc11001100_hook("this.opacity", lr(A, Zt, e.opacity), "assign");
    var t = cc11001100_hook("t", lr(A, mt, e.overflow), "var-init");
    this.overflowX = cc11001100_hook("this.overflowX", t[0], "assign"), this.overflowY = cc11001100_hook("this.overflowY", t[1 < t.length ? 1 : 0], "assign"), this.overflowWrap = cc11001100_hook("this.overflowWrap", lr(A, Lt, e.overflowWrap), "assign"), this.paddingTop = cc11001100_hook("this.paddingTop", lr(A, bt, e.paddingTop), "assign"), this.paddingRight = cc11001100_hook("this.paddingRight", lr(A, Dt, e.paddingRight), "assign"), this.paddingBottom = cc11001100_hook("this.paddingBottom", lr(A, vt, e.paddingBottom), "assign"), this.paddingLeft = cc11001100_hook("this.paddingLeft", lr(A, xt, e.paddingLeft), "assign"), this.paintOrder = cc11001100_hook("this.paintOrder", lr(A, ir, e.paintOrder), "assign"), this.position = cc11001100_hook("this.position", lr(A, St, e.position), "assign"), this.textAlign = cc11001100_hook("this.textAlign", lr(A, Mt, e.textAlign), "assign"), this.textDecorationColor = cc11001100_hook("this.textDecorationColor", lr(A, _t, null !== (t = cc11001100_hook("t", e.textDecorationColor, "assign")) && void 0 !== t ? t : e.color), "assign"), this.textDecorationLine = cc11001100_hook("this.textDecorationLine", lr(A, qt, null !== (t = cc11001100_hook("t", e.textDecorationLine, "assign")) && void 0 !== t ? t : e.textDecoration), "assign"), this.textShadow = cc11001100_hook("this.textShadow", lr(A, Tt, e.textShadow), "assign"), this.textTransform = cc11001100_hook("this.textTransform", lr(A, Gt, e.textTransform), "assign"), this.transform = cc11001100_hook("this.transform", lr(A, Ot, e.transform), "assign"), this.transformOrigin = cc11001100_hook("this.transformOrigin", lr(A, Rt, e.transformOrigin), "assign"), this.visibility = cc11001100_hook("this.visibility", lr(A, Nt, e.visibility), "assign"), this.webkitTextStrokeColor = cc11001100_hook("this.webkitTextStrokeColor", lr(A, Qr, e.webkitTextStrokeColor), "assign"), this.webkitTextStrokeWidth = cc11001100_hook("this.webkitTextStrokeWidth", lr(A, cr, e.webkitTextStrokeWidth), "assign"), this.wordBreak = cc11001100_hook("this.wordBreak", lr(A, Jt, e.wordBreak), "assign"), this.zIndex = cc11001100_hook("this.zIndex", lr(A, Yt, e.zIndex), "assign");
  }
  for (var wr = function (A, e) {
      this.content = cc11001100_hook("this.content", lr(A, tr, e.content), "assign"), this.quotes = cc11001100_hook("this.quotes", lr(A, sr, e.quotes), "assign");
    }, Ur = function (A, e) {
      this.counterIncrement = cc11001100_hook("this.counterIncrement", lr(A, rr, e.counterIncrement), "assign"), this.counterReset = cc11001100_hook("this.counterReset", lr(A, Br, e.counterReset), "assign");
    }, lr = function (A, e, t) {
      var r = cc11001100_hook("r", new PA(), "var-init"),
        t = cc11001100_hook("t", null != t ? t.toString() : e.initialValue, "var-init");
      r.write(t);
      var B = cc11001100_hook("B", new JA(r.read()), "var-init");
      switch (e.type) {
        case 2:
          var n = cc11001100_hook("n", B.parseComponentValue(), "var-init");
          return e.parse(A, _A(n) ? n.value : e.initialValue);
        case 0:
          return e.parse(A, B.parseComponentValue());
        case 1:
          return e.parse(A, B.parseComponentValues());
        case 4:
          return B.parseComponentValue();
        case 3:
          switch (e.format) {
            case "angle":
              return le(A, B.parseComponentValue());
            case "color":
              return ue(A, B.parseComponentValue());
            case "image":
              return Oe(A, B.parseComponentValue());
            case "length":
              var s = cc11001100_hook("s", B.parseComponentValue(), "var-init");
              return ee(s) ? s : ae;
            case "length-percentage":
              s = cc11001100_hook("s", B.parseComponentValue(), "assign");
              return te(s) ? s : ae;
            case "time":
              return Wt(A, B.parseComponentValue());
          }
      }
    }, Cr = function (A, e) {
      A = cc11001100_hook("A", function (A) {
        switch (A.getAttribute("data-html2canvas-debug")) {
          case "all":
            return 1;
          case "clone":
            return 2;
          case "parse":
            return 3;
          case "render":
            return 4;
          default:
            return 0;
        }
      }(A), "assign");
      return 1 === A || e === A;
    }, ur = function (A, e) {
      this.context = cc11001100_hook("this.context", A, "assign"), this.textNodes = cc11001100_hook("this.textNodes", [], "assign"), this.elements = cc11001100_hook("this.elements", [], "assign"), this.flags = cc11001100_hook("this.flags", 0, "assign"), Cr(e, 3), this.styles = cc11001100_hook("this.styles", new ar(A, window.getComputedStyle(e, null)), "assign"), JB(e) && (this.styles.animationDuration.some(function (A) {
        return 0 < A;
      }) && (e.style.animationDuration = cc11001100_hook("e.style.animationDuration", "0s", "assign")), null !== this.styles.transform && (e.style.transform = cc11001100_hook("e.style.transform", "none", "assign"))), this.bounds = cc11001100_hook("this.bounds", f(this.context, e), "assign"), Cr(e, 4) && (this.flags |= cc11001100_hook("this.flags", 16, "assign"));
    }, Fr = cc11001100_hook("Fr", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "var-init"), hr = cc11001100_hook("hr", "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), "var-init"), dr = cc11001100_hook("dr", 0, "var-init"); dr < Fr.length; dr++) hr[Fr.charCodeAt(dr)] = cc11001100_hook("hr[Fr.charCodeAt(dr)]", dr, "assign");
  function fr(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
  }
  var Hr = cc11001100_hook("Hr", (pr.prototype.get = cc11001100_hook("pr.prototype.get", function (A) {
    var e;
    if (0 <= A) {
      if (A < 55296 || 56319 < A && A <= 65535) return e = cc11001100_hook("e", this.index[A >> 5], "assign"), this.data[e = cc11001100_hook("e", (e << 2) + (31 & A), "assign")];
      if (A <= 65535) return e = cc11001100_hook("e", this.index[2048 + (A - 55296 >> 5)], "assign"), this.data[e = cc11001100_hook("e", (e << 2) + (31 & A), "assign")];
      if (A < this.highStart) return e = cc11001100_hook("e", this.index[e = cc11001100_hook("e", 2080 + (A >> 11), "assign")], "assign"), e = cc11001100_hook("e", this.index[e += cc11001100_hook("e", A >> 5 & 63, "assign")], "assign"), this.data[e = cc11001100_hook("e", (e << 2) + (31 & A), "assign")];
      if (A <= 1114111) return this.data[this.highValueIndex];
    }
    return this.errorValue;
  }, "assign"), pr), "var-init");
  function pr(A, e, t, r, B, n) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    this.initialValue = cc11001100_hook("this.initialValue", A, "assign"), this.errorValue = cc11001100_hook("this.errorValue", e, "assign"), this.highStart = cc11001100_hook("this.highStart", t, "assign"), this.highValueIndex = cc11001100_hook("this.highValueIndex", r, "assign"), this.index = cc11001100_hook("this.index", B, "assign"), this.data = cc11001100_hook("this.data", n, "assign");
  }
  for (var Er = cc11001100_hook("Er", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "var-init"), Ir = cc11001100_hook("Ir", "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), "var-init"), yr = cc11001100_hook("yr", 0, "var-init"); yr < Er.length; yr++) Ir[Er.charCodeAt(yr)] = cc11001100_hook("Ir[Er.charCodeAt(yr)]", yr, "assign");
  function Kr(A) {
    cc11001100_hook("A", A, "function-parameter");
    return kr.get(A);
  }
  function mr(A) {
    cc11001100_hook("A", A, "function-parameter");
    var t = cc11001100_hook("t", function (A) {
        for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", A.length, "var-init"); t < r;) {
          var B,
            n = cc11001100_hook("n", A.charCodeAt(t++), "var-init");
          55296 <= n && n <= 56319 && t < r ? 56320 == (64512 & (B = cc11001100_hook("B", A.charCodeAt(t++), "assign"))) ? e.push(((1023 & n) << 10) + (1023 & B) + 65536) : (e.push(n), t--) : e.push(n);
        }
        return e;
      }(A), "var-init"),
      r = cc11001100_hook("r", t.length, "var-init"),
      B = cc11001100_hook("B", 0, "var-init"),
      n = cc11001100_hook("n", 0, "var-init"),
      s = cc11001100_hook("s", t.map(Kr), "var-init");
    return {
      next: function () {
        if (r <= B) return {
          done: cc11001100_hook("done", !0, "object-key-init"),
          value: cc11001100_hook("value", null, "object-key-init")
        };
        for (var A = cc11001100_hook("A", Rr, "var-init"); B < r && (A = cc11001100_hook("A", function (A, e) {
          var t = cc11001100_hook("t", e - 2, "var-init"),
            r = cc11001100_hook("r", A[t], "var-init"),
            B = cc11001100_hook("B", A[e - 1], "var-init"),
            e = cc11001100_hook("e", A[e], "var-init");
          if (2 === B && 3 === e) return Rr;
          if (2 === B || 3 === B || 4 === B) return "÷";
          if (2 === e || 3 === e || 4 === e) return "÷";
          if (B === Tr && -1 !== [Tr, Gr, Or, Vr].indexOf(e)) return Rr;
          if (!(B !== Or && B !== Gr || e !== Gr && 10 !== e)) return Rr;
          if ((B === Vr || 10 === B) && 10 === e) return Rr;
          if (13 === e || 5 === e) return Rr;
          if (7 === e) return Rr;
          if (1 === B) return Rr;
          if (13 === B && 14 === e) {
            for (; 5 === r;) r = cc11001100_hook("r", A[--t], "assign");
            if (14 === r) return Rr;
          }
          if (15 === B && 15 === e) {
            for (var n = cc11001100_hook("n", 0, "var-init"); 15 === r;) n++, r = cc11001100_hook("r", A[--t], "assign");
            if (n % 2 == 0) return Rr;
          }
          return "÷";
        }(s, ++B), "assign")) === Rr;);
        if (A === Rr && B !== r) return {
          done: cc11001100_hook("done", !0, "object-key-init"),
          value: cc11001100_hook("value", null, "object-key-init")
        };
        var e = cc11001100_hook("e", function () {
          for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
          if (String.fromCodePoint) return String.fromCodePoint.apply(String, A);
          var t = cc11001100_hook("t", A.length, "var-init");
          if (!t) return "";
          for (var r = cc11001100_hook("r", [], "var-init"), B = cc11001100_hook("B", -1, "var-init"), n = cc11001100_hook("n", "", "var-init"); ++B < t;) {
            var s = cc11001100_hook("s", A[B], "var-init");
            s <= 65535 ? r.push(s) : (s -= cc11001100_hook("s", 65536, "assign"), r.push(55296 + (s >> 10), s % 1024 + 56320)), (B + 1 === t || 16384 < r.length) && (n += cc11001100_hook("n", String.fromCharCode.apply(String, r), "assign"), r.length = cc11001100_hook("r.length", 0, "assign"));
          }
          return n;
        }.apply(null, t.slice(n, B)), "var-init");
        return n = cc11001100_hook("n", B, "assign"), {
          value: cc11001100_hook("value", e, "object-key-init"),
          done: cc11001100_hook("done", !1, "object-key-init")
        };
      }
    };
  }
  function Lr(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 0 === A[0] && 255 === A[1] && 0 === A[2] && 255 === A[3];
  }
  var br,
    Dr,
    vr,
    xr,
    Mr,
    Sr,
    Tr = cc11001100_hook("Tr", 8, "var-init"),
    Gr = cc11001100_hook("Gr", 9, "var-init"),
    Or = cc11001100_hook("Or", 11, "var-init"),
    Vr = cc11001100_hook("Vr", 12, "var-init"),
    kr = cc11001100_hook("kr", (vr = cc11001100_hook("vr", function (A) {
      var e,
        t,
        r,
        B,
        n = cc11001100_hook("n", .75 * A.length, "var-init"),
        s = cc11001100_hook("s", A.length, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      "=" === A[A.length - 1] && (n--, "=" === A[A.length - 2] && n--);
      for (var n = cc11001100_hook("n", new ("undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.slice ? ArrayBuffer : Array)(n), "var-init"), i = cc11001100_hook("i", Array.isArray(n) ? n : new Uint8Array(n), "var-init"), Q = cc11001100_hook("Q", 0, "var-init"); Q < s; Q += cc11001100_hook("Q", 4, "assign")) e = cc11001100_hook("e", hr[A.charCodeAt(Q)], "assign"), t = cc11001100_hook("t", hr[A.charCodeAt(Q + 1)], "assign"), r = cc11001100_hook("r", hr[A.charCodeAt(Q + 2)], "assign"), B = cc11001100_hook("B", hr[A.charCodeAt(Q + 3)], "assign"), i[o++] = cc11001100_hook("i[o++]", e << 2 | t >> 4, "assign"), i[o++] = cc11001100_hook("i[o++]", (15 & t) << 4 | r >> 2, "assign"), i[o++] = cc11001100_hook("i[o++]", (3 & r) << 6 | 63 & B, "assign");
      return n;
    }(br = cc11001100_hook("br", "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", "assign")), "assign"), xr = cc11001100_hook("xr", Array.isArray(vr) ? function (A) {
      for (var e = cc11001100_hook("e", A.length, "var-init"), t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e; r += cc11001100_hook("r", 4, "assign")) t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
      return t;
    }(vr) : new Uint32Array(vr), "assign"), Mr = cc11001100_hook("Mr", Array.isArray(vr) ? function (A) {
      for (var e = cc11001100_hook("e", A.length, "var-init"), t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e; r += cc11001100_hook("r", 2, "assign")) t.push(A[r + 1] << 8 | A[r]);
      return t;
    }(vr) : new Uint16Array(vr), "assign"), br = cc11001100_hook("br", fr(Mr, 12, xr[4] / 2), "assign"), Dr = cc11001100_hook("Dr", 2 === xr[5] ? fr(Mr, (24 + xr[4]) / 2) : (vr = cc11001100_hook("vr", xr, "assign"), Mr = cc11001100_hook("Mr", Math.ceil((24 + xr[4]) / 4), "assign"), vr.slice ? vr.slice(Mr, Dr) : new Uint32Array(Array.prototype.slice.call(vr, Mr, Dr))), "assign"), new Hr(xr[0], xr[1], xr[2], xr[3], br, Dr)), "var-init"),
    Rr = cc11001100_hook("Rr", "×", "var-init"),
    Nr = function (A, e, t, r, B) {
      var n = cc11001100_hook("n", "http://www.w3.org/2000/svg", "var-init"),
        s = cc11001100_hook("s", document.createElementNS(n, "svg"), "var-init"),
        n = cc11001100_hook("n", document.createElementNS(n, "foreignObject"), "var-init");
      return s.setAttributeNS(null, "width", A.toString()), s.setAttributeNS(null, "height", e.toString()), n.setAttributeNS(null, "width", "100%"), n.setAttributeNS(null, "height", "100%"), n.setAttributeNS(null, "x", t.toString()), n.setAttributeNS(null, "y", r.toString()), n.setAttributeNS(null, "externalResourcesRequired", "true"), s.appendChild(n), n.appendChild(B), s;
    },
    Pr = function (r) {
      return new Promise(function (A, e) {
        var t = cc11001100_hook("t", new Image(), "var-init");
        t.onload = cc11001100_hook("t.onload", function () {
          return A(t);
        }, "assign"), t.onerror = cc11001100_hook("t.onerror", e, "assign"), t.src = cc11001100_hook("t.src", "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r)), "assign");
      });
    },
    Xr = cc11001100_hook("Xr", {
      get SUPPORT_RANGE_BOUNDS() {
        var A = cc11001100_hook("A", function (A) {
          if (A.createRange) {
            var e = cc11001100_hook("e", A.createRange(), "var-init");
            if (e.getBoundingClientRect) {
              var t = cc11001100_hook("t", A.createElement("boundtest"), "var-init");
              t.style.height = cc11001100_hook("t.style.height", "123px", "assign"), t.style.display = cc11001100_hook("t.style.display", "block", "assign"), A.body.appendChild(t), e.selectNode(t);
              e = cc11001100_hook("e", e.getBoundingClientRect(), "assign"), e = cc11001100_hook("e", Math.round(e.height), "assign");
              if (A.body.removeChild(t), 123 === e) return !0;
            }
          }
          return !1;
        }(document), "var-init");
        return Object.defineProperty(Xr, "SUPPORT_RANGE_BOUNDS", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_WORD_BREAKING() {
        var A = cc11001100_hook("A", Xr.SUPPORT_RANGE_BOUNDS && function (A) {
          var e = cc11001100_hook("e", A.createElement("boundtest"), "var-init");
          e.style.width = cc11001100_hook("e.style.width", "50px", "assign"), e.style.display = cc11001100_hook("e.style.display", "block", "assign"), e.style.fontSize = cc11001100_hook("e.style.fontSize", "12px", "assign"), e.style.letterSpacing = cc11001100_hook("e.style.letterSpacing", "0px", "assign"), e.style.wordSpacing = cc11001100_hook("e.style.wordSpacing", "0px", "assign"), A.body.appendChild(e);
          var r = cc11001100_hook("r", A.createRange(), "var-init");
          e.innerHTML = cc11001100_hook("e.innerHTML", "function" == typeof "".repeat ? "&#128104;".repeat(10) : "", "assign");
          var B = cc11001100_hook("B", e.firstChild, "var-init"),
            t = cc11001100_hook("t", Q(B.data).map(function (A) {
              return g(A);
            }), "var-init"),
            n = cc11001100_hook("n", 0, "var-init"),
            s = cc11001100_hook("s", {}, "var-init"),
            t = cc11001100_hook("t", t.every(function (A, e) {
              r.setStart(B, n), r.setEnd(B, n + A.length);
              var t = cc11001100_hook("t", r.getBoundingClientRect(), "var-init");
              n += cc11001100_hook("n", A.length, "assign");
              A = cc11001100_hook("A", t.x > s.x || t.y > s.y, "assign");
              return s = cc11001100_hook("s", t, "assign"), 0 === e || A;
            }), "var-init");
          return A.body.removeChild(e), t;
        }(document), "var-init");
        return Object.defineProperty(Xr, "SUPPORT_WORD_BREAKING", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_SVG_DRAWING() {
        var A = cc11001100_hook("A", function (A) {
          var e = cc11001100_hook("e", new Image(), "var-init"),
            t = cc11001100_hook("t", A.createElement("canvas"), "var-init"),
            A = cc11001100_hook("A", t.getContext("2d"), "var-init");
          if (!A) return !1;
          e.src = cc11001100_hook("e.src", "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>", "assign");
          try {
            A.drawImage(e, 0, 0), t.toDataURL();
          } catch (A) {
            return !1;
          }
          return !0;
        }(document), "var-init");
        return Object.defineProperty(Xr, "SUPPORT_SVG_DRAWING", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_FOREIGNOBJECT_DRAWING() {
        var A = cc11001100_hook("A", "function" == typeof Array.from && "function" == typeof window.fetch ? function (t) {
          var A = cc11001100_hook("A", t.createElement("canvas"), "var-init"),
            r = cc11001100_hook("r", 100, "var-init");
          A.width = cc11001100_hook("A.width", r, "assign"), A.height = cc11001100_hook("A.height", r, "assign");
          var B = cc11001100_hook("B", A.getContext("2d"), "var-init");
          if (!B) return Promise.reject(!1);
          B.fillStyle = cc11001100_hook("B.fillStyle", "rgb(0, 255, 0)", "assign"), B.fillRect(0, 0, r, r);
          var e = cc11001100_hook("e", new Image(), "var-init"),
            n = cc11001100_hook("n", A.toDataURL(), "var-init");
          e.src = cc11001100_hook("e.src", n, "assign");
          e = cc11001100_hook("e", Nr(r, r, 0, 0, e), "assign");
          return B.fillStyle = cc11001100_hook("B.fillStyle", "red", "assign"), B.fillRect(0, 0, r, r), Pr(e).then(function (A) {
            B.drawImage(A, 0, 0);
            var e = cc11001100_hook("e", B.getImageData(0, 0, r, r).data, "var-init");
            B.fillStyle = cc11001100_hook("B.fillStyle", "red", "assign"), B.fillRect(0, 0, r, r);
            A = cc11001100_hook("A", t.createElement("div"), "assign");
            return A.style.backgroundImage = cc11001100_hook("A.style.backgroundImage", "url(" + n + ")", "assign"), A.style.height = cc11001100_hook("A.style.height", "100px", "assign"), Lr(e) ? Pr(Nr(r, r, 0, 0, A)) : Promise.reject(!1);
          }).then(function (A) {
            return B.drawImage(A, 0, 0), Lr(B.getImageData(0, 0, r, r).data);
          }).catch(function () {
            return !1;
          });
        }(document) : Promise.resolve(!1), "var-init");
        return Object.defineProperty(Xr, "SUPPORT_FOREIGNOBJECT_DRAWING", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_CORS_IMAGES() {
        var A = cc11001100_hook("A", void 0 !== new Image().crossOrigin, "var-init");
        return Object.defineProperty(Xr, "SUPPORT_CORS_IMAGES", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_RESPONSE_TYPE() {
        var A = cc11001100_hook("A", "string" == typeof new XMLHttpRequest().responseType, "var-init");
        return Object.defineProperty(Xr, "SUPPORT_RESPONSE_TYPE", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_CORS_XHR() {
        var A = cc11001100_hook("A", "withCredentials" in new XMLHttpRequest(), "var-init");
        return Object.defineProperty(Xr, "SUPPORT_CORS_XHR", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      },
      get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
        var A = cc11001100_hook("A", !("undefined" == typeof Intl || !Intl.Segmenter), "var-init");
        return Object.defineProperty(Xr, "SUPPORT_NATIVE_TEXT_SEGMENTATION", {
          value: cc11001100_hook("value", A, "object-key-init")
        }), A;
      }
    }, "var-init"),
    Jr = function (A, e) {
      this.text = cc11001100_hook("this.text", A, "assign"), this.bounds = cc11001100_hook("this.bounds", e, "assign");
    },
    Yr = function (A, e) {
      var t = cc11001100_hook("t", e.ownerDocument, "var-init");
      if (t) {
        var r = cc11001100_hook("r", t.createElement("html2canvaswrapper"), "var-init");
        r.appendChild(e.cloneNode(!0));
        t = cc11001100_hook("t", e.parentNode, "assign");
        if (t) {
          t.replaceChild(r, e);
          A = cc11001100_hook("A", f(A, r), "assign");
          return r.firstChild && t.replaceChild(r.firstChild, r), A;
        }
      }
      return d.EMPTY;
    },
    Wr = function (A, e, t) {
      var r = cc11001100_hook("r", A.ownerDocument, "var-init");
      if (!r) throw new Error("Node has no owner document");
      r = cc11001100_hook("r", r.createRange(), "assign");
      return r.setStart(A, e), r.setEnd(A, e + t), r;
    },
    Zr = function (A) {
      if (Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
        var e = cc11001100_hook("e", new Intl.Segmenter(void 0, {
          granularity: cc11001100_hook("granularity", "grapheme", "object-key-init")
        }), "var-init");
        return Array.from(e.segment(A)).map(function (A) {
          return A.segment;
        });
      }
      return function (A) {
        for (var e, t = cc11001100_hook("t", mr(A), "var-init"), r = cc11001100_hook("r", [], "var-init"); !(e = cc11001100_hook("e", t.next(), "assign")).done;) e.value && r.push(e.value.slice());
        return r;
      }(A);
    },
    _r = function (A, e) {
      return 0 !== e.letterSpacing ? Zr(A) : function (A, e) {
        if (Xr.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
          var t = cc11001100_hook("t", new Intl.Segmenter(void 0, {
            granularity: cc11001100_hook("granularity", "word", "object-key-init")
          }), "var-init");
          return Array.from(t.segment(A)).map(function (A) {
            return A.segment;
          });
        }
        return jr(A, e);
      }(A, e);
    },
    qr = cc11001100_hook("qr", [32, 160, 4961, 65792, 65793, 4153, 4241], "var-init"),
    jr = function (A, e) {
      for (var t, r = cc11001100_hook("r", wA(A, {
          lineBreak: cc11001100_hook("lineBreak", e.lineBreak, "object-key-init"),
          wordBreak: cc11001100_hook("wordBreak", "break-word" === e.overflowWrap ? "break-word" : e.wordBreak, "object-key-init")
        }), "var-init"), B = cc11001100_hook("B", [], "var-init"); !(t = cc11001100_hook("t", r.next(), "assign")).done;) !function () {
        var A, e;
        t.value && (A = cc11001100_hook("A", t.value.slice(), "assign"), A = cc11001100_hook("A", Q(A), "assign"), e = cc11001100_hook("e", "", "assign"), A.forEach(function (A) {
          -1 === qr.indexOf(A) ? e += cc11001100_hook("e", g(A), "assign") : (e.length && B.push(e), B.push(g(A)), e = cc11001100_hook("e", "", "assign"));
        }), e.length && B.push(e));
      }();
      return B;
    },
    zr = function (A, e, t) {
      var B, n, s, o, i;
      this.text = cc11001100_hook("this.text", $r(e.data, t.textTransform), "assign"), this.textBounds = cc11001100_hook("this.textBounds", (B = cc11001100_hook("B", A, "assign"), A = cc11001100_hook("A", this.text, "assign"), s = cc11001100_hook("s", e, "assign"), A = cc11001100_hook("A", _r(A, n = cc11001100_hook("n", t, "assign")), "assign"), o = cc11001100_hook("o", [], "assign"), i = cc11001100_hook("i", 0, "assign"), A.forEach(function (A) {
        var e, t, r;
        n.textDecorationLine.length || 0 < A.trim().length ? Xr.SUPPORT_RANGE_BOUNDS ? 1 < (r = cc11001100_hook("r", Wr(s, i, A.length).getClientRects(), "assign")).length ? (e = cc11001100_hook("e", Zr(A), "assign"), t = cc11001100_hook("t", 0, "assign"), e.forEach(function (A) {
          o.push(new Jr(A, d.fromDOMRectList(B, Wr(s, t + i, A.length).getClientRects()))), t += cc11001100_hook("t", A.length, "assign");
        })) : o.push(new Jr(A, d.fromDOMRectList(B, r))) : (r = cc11001100_hook("r", s.splitText(A.length), "assign"), o.push(new Jr(A, Yr(B, s))), s = cc11001100_hook("s", r, "assign")) : Xr.SUPPORT_RANGE_BOUNDS || (s = cc11001100_hook("s", s.splitText(A.length), "assign")), i += cc11001100_hook("i", A.length, "assign");
      }), o), "assign");
    },
    $r = function (A, e) {
      switch (e) {
        case 1:
          return A.toLowerCase();
        case 3:
          return A.replace(AB, eB);
        case 2:
          return A.toUpperCase();
        default:
          return A;
      }
    },
    AB = cc11001100_hook("AB", /(^|\s|:|-|\(|\))([a-z])/g, "var-init"),
    eB = function (A, e, t) {
      return 0 < A.length ? e + t.toUpperCase() : A;
    },
    tB = cc11001100_hook("tB", (A(rB, Sr = cc11001100_hook("Sr", ur, "assign")), rB), "var-init");
  function rB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    A = cc11001100_hook("A", Sr.call(this, A, e) || this, "assign");
    return A.src = cc11001100_hook("A.src", e.currentSrc || e.src, "assign"), A.intrinsicWidth = cc11001100_hook("A.intrinsicWidth", e.naturalWidth, "assign"), A.intrinsicHeight = cc11001100_hook("A.intrinsicHeight", e.naturalHeight, "assign"), A.context.cache.addImage(A.src), A;
  }
  var BB,
    nB = cc11001100_hook("nB", (A(sB, BB = cc11001100_hook("BB", ur, "assign")), sB), "var-init");
  function sB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    A = cc11001100_hook("A", BB.call(this, A, e) || this, "assign");
    return A.canvas = cc11001100_hook("A.canvas", e, "assign"), A.intrinsicWidth = cc11001100_hook("A.intrinsicWidth", e.width, "assign"), A.intrinsicHeight = cc11001100_hook("A.intrinsicHeight", e.height, "assign"), A;
  }
  var oB,
    iB = cc11001100_hook("iB", (A(QB, oB = cc11001100_hook("oB", ur, "assign")), QB), "var-init");
  function QB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", oB.call(this, A, e) || this, "var-init"),
      r = cc11001100_hook("r", new XMLSerializer(), "var-init"),
      A = cc11001100_hook("A", f(A, e), "var-init");
    return e.setAttribute("width", A.width + "px"), e.setAttribute("height", A.height + "px"), t.svg = cc11001100_hook("t.svg", "data:image/svg+xml," + encodeURIComponent(r.serializeToString(e)), "assign"), t.intrinsicWidth = cc11001100_hook("t.intrinsicWidth", e.width.baseVal.value, "assign"), t.intrinsicHeight = cc11001100_hook("t.intrinsicHeight", e.height.baseVal.value, "assign"), t.context.cache.addImage(t.svg), t;
  }
  var cB,
    aB = cc11001100_hook("aB", (A(gB, cB = cc11001100_hook("cB", ur, "assign")), gB), "var-init");
  function gB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    A = cc11001100_hook("A", cB.call(this, A, e) || this, "assign");
    return A.value = cc11001100_hook("A.value", e.value, "assign"), A;
  }
  var wB,
    UB = cc11001100_hook("UB", (A(lB, wB = cc11001100_hook("wB", ur, "assign")), lB), "var-init");
  function lB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    A = cc11001100_hook("A", wB.call(this, A, e) || this, "assign");
    return A.start = cc11001100_hook("A.start", e.start, "assign"), A.reversed = cc11001100_hook("A.reversed", "boolean" == typeof e.reversed && !0 === e.reversed, "assign"), A;
  }
  var CB,
    uB = cc11001100_hook("uB", [{
      type: cc11001100_hook("type", 15, "object-key-init"),
      flags: cc11001100_hook("flags", 0, "object-key-init"),
      unit: cc11001100_hook("unit", "px", "object-key-init"),
      number: cc11001100_hook("number", 3, "object-key-init")
    }], "var-init"),
    FB = cc11001100_hook("FB", [{
      type: cc11001100_hook("type", 16, "object-key-init"),
      flags: cc11001100_hook("flags", 0, "object-key-init"),
      number: cc11001100_hook("number", 50, "object-key-init")
    }], "var-init"),
    hB = cc11001100_hook("hB", "checkbox", "var-init"),
    dB = cc11001100_hook("dB", "radio", "var-init"),
    fB = cc11001100_hook("fB", "password", "var-init"),
    HB = cc11001100_hook("HB", 707406591, "var-init"),
    pB = cc11001100_hook("pB", (A(EB, CB = cc11001100_hook("CB", ur, "assign")), EB), "var-init");
  function EB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", CB.call(this, A, e) || this, "var-init");
    switch (t.type = cc11001100_hook("t.type", e.type.toLowerCase(), "assign"), t.checked = cc11001100_hook("t.checked", e.checked, "assign"), t.value = cc11001100_hook("t.value", 0 === (e = cc11001100_hook("e", (A = cc11001100_hook("A", e, "assign")).type === fB ? new Array(A.value.length + 1).join("•") : A.value, "assign")).length ? A.placeholder || "" : e, "assign"), t.type !== hB && t.type !== dB || (t.styles.backgroundColor = cc11001100_hook("t.styles.backgroundColor", 3739148031, "assign"), t.styles.borderTopColor = cc11001100_hook("t.styles.borderTopColor", t.styles.borderRightColor = cc11001100_hook("t.styles.borderRightColor", t.styles.borderBottomColor = cc11001100_hook("t.styles.borderBottomColor", t.styles.borderLeftColor = cc11001100_hook("t.styles.borderLeftColor", 2779096575, "assign"), "assign"), "assign"), "assign"), t.styles.borderTopWidth = cc11001100_hook("t.styles.borderTopWidth", t.styles.borderRightWidth = cc11001100_hook("t.styles.borderRightWidth", t.styles.borderBottomWidth = cc11001100_hook("t.styles.borderBottomWidth", t.styles.borderLeftWidth = cc11001100_hook("t.styles.borderLeftWidth", 1, "assign"), "assign"), "assign"), "assign"), t.styles.borderTopStyle = cc11001100_hook("t.styles.borderTopStyle", t.styles.borderRightStyle = cc11001100_hook("t.styles.borderRightStyle", t.styles.borderBottomStyle = cc11001100_hook("t.styles.borderBottomStyle", t.styles.borderLeftStyle = cc11001100_hook("t.styles.borderLeftStyle", 1, "assign"), "assign"), "assign"), "assign"), t.styles.backgroundClip = cc11001100_hook("t.styles.backgroundClip", [0], "assign"), t.styles.backgroundOrigin = cc11001100_hook("t.styles.backgroundOrigin", [0], "assign"), t.bounds = cc11001100_hook("t.bounds", (e = cc11001100_hook("e", t.bounds, "assign")).width > e.height ? new d(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new d(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e, "assign")), t.type) {
      case hB:
        t.styles.borderTopRightRadius = cc11001100_hook("t.styles.borderTopRightRadius", t.styles.borderTopLeftRadius = cc11001100_hook("t.styles.borderTopLeftRadius", t.styles.borderBottomRightRadius = cc11001100_hook("t.styles.borderBottomRightRadius", t.styles.borderBottomLeftRadius = cc11001100_hook("t.styles.borderBottomLeftRadius", uB, "assign"), "assign"), "assign"), "assign");
        break;
      case dB:
        t.styles.borderTopRightRadius = cc11001100_hook("t.styles.borderTopRightRadius", t.styles.borderTopLeftRadius = cc11001100_hook("t.styles.borderTopLeftRadius", t.styles.borderBottomRightRadius = cc11001100_hook("t.styles.borderBottomRightRadius", t.styles.borderBottomLeftRadius = cc11001100_hook("t.styles.borderBottomLeftRadius", FB, "assign"), "assign"), "assign"), "assign");
    }
    return t;
  }
  var IB,
    yB = cc11001100_hook("yB", (A(KB, IB = cc11001100_hook("IB", ur, "assign")), KB), "var-init");
  function KB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    A = cc11001100_hook("A", IB.call(this, A, e) || this, "assign"), e = cc11001100_hook("e", e.options[e.selectedIndex || 0], "assign");
    return A.value = cc11001100_hook("A.value", e && e.text || "", "assign"), A;
  }
  var mB,
    LB = cc11001100_hook("LB", (A(bB, mB = cc11001100_hook("mB", ur, "assign")), bB), "var-init");
  function bB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    A = cc11001100_hook("A", mB.call(this, A, e) || this, "assign");
    return A.value = cc11001100_hook("A.value", e.value, "assign"), A;
  }
  var DB,
    vB = cc11001100_hook("vB", (A(xB, DB = cc11001100_hook("DB", ur, "assign")), xB), "var-init");
  function xB(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var t,
      r,
      B = cc11001100_hook("B", DB.call(this, A, e) || this, "var-init");
    B.src = cc11001100_hook("B.src", e.src, "assign"), B.width = cc11001100_hook("B.width", parseInt(e.width, 10) || 0, "assign"), B.height = cc11001100_hook("B.height", parseInt(e.height, 10) || 0, "assign"), B.backgroundColor = cc11001100_hook("B.backgroundColor", B.styles.backgroundColor, "assign");
    try {
      e.contentWindow && e.contentWindow.document && e.contentWindow.document.documentElement && (B.tree = cc11001100_hook("B.tree", kB(A, e.contentWindow.document.documentElement), "assign"), t = cc11001100_hook("t", e.contentWindow.document.documentElement ? fe(A, getComputedStyle(e.contentWindow.document.documentElement).backgroundColor) : Le.TRANSPARENT, "assign"), r = cc11001100_hook("r", e.contentWindow.document.body ? fe(A, getComputedStyle(e.contentWindow.document.body).backgroundColor) : Le.TRANSPARENT, "assign"), B.backgroundColor = cc11001100_hook("B.backgroundColor", oe(t) ? oe(r) ? B.styles.backgroundColor : r : t, "assign"));
    } catch (A) {}
    return B;
  }
  function MB(A) {
    cc11001100_hook("A", A, "function-parameter");
    return "VIDEO" === A.tagName;
  }
  function SB(A) {
    cc11001100_hook("A", A, "function-parameter");
    return "STYLE" === A.tagName;
  }
  function TB(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 0 < A.tagName.indexOf("-");
  }
  var GB = cc11001100_hook("GB", ["OL", "UL", "MENU"], "var-init"),
    OB = function (e, A, t, r) {
      for (var B = cc11001100_hook("B", A.firstChild, "var-init"); B; B = cc11001100_hook("B", s, "assign")) {
        var n,
          s = cc11001100_hook("s", B.nextSibling, "var-init");
        PB(B) && 0 < B.data.trim().length ? t.textNodes.push(new zr(e, B, t.styles)) : XB(B) && (rn(B) && B.assignedNodes ? B.assignedNodes().forEach(function (A) {
          return OB(e, A, t, r);
        }) : (n = cc11001100_hook("n", VB(e, B), "assign")).styles.isVisible() && (RB(B, n, r) ? n.flags |= cc11001100_hook("n.flags", 4, "assign") : NB(n.styles) && (n.flags |= cc11001100_hook("n.flags", 2, "assign")), -1 !== GB.indexOf(B.tagName) && (n.flags |= cc11001100_hook("n.flags", 8, "assign")), t.elements.push(n), B.slot, B.shadowRoot ? OB(e, B.shadowRoot, n, r) : en(B) || qB(B) || tn(B) || OB(e, B, n, r)));
      }
    },
    VB = function (A, e) {
      return new ($B(e) ? tB : zB(e) ? nB : qB(e) ? iB : WB(e) ? aB : ZB(e) ? UB : _B(e) ? pB : tn(e) ? yB : en(e) ? LB : An(e) ? vB : ur)(A, e);
    },
    kB = function (A, e) {
      var t = cc11001100_hook("t", VB(A, e), "var-init");
      return t.flags |= cc11001100_hook("t.flags", 4, "assign"), OB(A, e, t, t), t;
    },
    RB = function (A, e, t) {
      return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || jB(A) && t.styles.isTransparent();
    },
    NB = function (A) {
      return A.isPositioned() || A.isFloating();
    },
    PB = function (A) {
      return A.nodeType === Node.TEXT_NODE;
    },
    XB = function (A) {
      return A.nodeType === Node.ELEMENT_NODE;
    },
    JB = function (A) {
      return XB(A) && void 0 !== A.style && !YB(A);
    },
    YB = function (A) {
      return "object" == typeof A.className;
    },
    WB = function (A) {
      return "LI" === A.tagName;
    },
    ZB = function (A) {
      return "OL" === A.tagName;
    },
    _B = function (A) {
      return "INPUT" === A.tagName;
    },
    qB = function (A) {
      return "svg" === A.tagName;
    },
    jB = function (A) {
      return "BODY" === A.tagName;
    },
    zB = function (A) {
      return "CANVAS" === A.tagName;
    },
    $B = function (A) {
      return "IMG" === A.tagName;
    },
    An = function (A) {
      return "IFRAME" === A.tagName;
    },
    en = function (A) {
      return "TEXTAREA" === A.tagName;
    },
    tn = function (A) {
      return "SELECT" === A.tagName;
    },
    rn = function (A) {
      return "SLOT" === A.tagName;
    },
    Bn = cc11001100_hook("Bn", (nn.prototype.getCounterValue = cc11001100_hook("nn.prototype.getCounterValue", function (A) {
      A = cc11001100_hook("A", this.counters[A], "assign");
      return A && A.length ? A[A.length - 1] : 1;
    }, "assign"), nn.prototype.getCounterValues = cc11001100_hook("nn.prototype.getCounterValues", function (A) {
      A = cc11001100_hook("A", this.counters[A], "assign");
      return A || [];
    }, "assign"), nn.prototype.pop = cc11001100_hook("nn.prototype.pop", function (A) {
      var e = cc11001100_hook("e", this, "var-init");
      A.forEach(function (A) {
        return e.counters[A].pop();
      });
    }, "assign"), nn.prototype.parse = cc11001100_hook("nn.prototype.parse", function (A) {
      var t = cc11001100_hook("t", this, "var-init"),
        e = cc11001100_hook("e", A.counterIncrement, "var-init"),
        A = cc11001100_hook("A", A.counterReset, "var-init"),
        r = cc11001100_hook("r", !0, "var-init");
      null !== e && e.forEach(function (A) {
        var e = cc11001100_hook("e", t.counters[A.counter], "var-init");
        e && 0 !== A.increment && (r = cc11001100_hook("r", !1, "assign"), e.length || e.push(1), e[Math.max(0, e.length - 1)] += cc11001100_hook("e[Math.max(0, e.length - 1)]", A.increment, "assign"));
      });
      var B = cc11001100_hook("B", [], "var-init");
      return r && A.forEach(function (A) {
        var e = cc11001100_hook("e", t.counters[A.counter], "var-init");
        B.push(A.counter), (e = cc11001100_hook("e", e || (t.counters[A.counter] = cc11001100_hook("t.counters[A.counter]", [], "assign")), "assign")).push(A.reset);
      }), B;
    }, "assign"), nn), "var-init");
  function nn() {
    this.counters = cc11001100_hook("this.counters", {}, "assign");
  }
  function sn(r, A, e, B, t, n) {
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return r < A || e < r ? Fn(r, t, 0 < n.length) : B.integers.reduce(function (A, e, t) {
      for (; e <= r;) r -= cc11001100_hook("r", e, "assign"), A += cc11001100_hook("A", B.values[t], "assign");
      return A;
    }, "") + n;
  }
  function on(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    for (var B = cc11001100_hook("B", "", "var-init"); t || A--, B = cc11001100_hook("B", r(A) + B, "assign"), e <= (A /= cc11001100_hook("A", e, "assign")) * e;);
    return B;
  }
  function Qn(A, e, t, r, B) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    var n = cc11001100_hook("n", t - e + 1, "var-init");
    return (A < 0 ? "-" : "") + (on(Math.abs(A), n, r, function (A) {
      return g(Math.floor(A % n) + e);
    }) + B);
  }
  function cn(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    void 0 === t && (t = cc11001100_hook("t", ". ", "assign"));
    var r = cc11001100_hook("r", e.length, "var-init");
    return on(Math.abs(A), r, !1, function (A) {
      return e[Math.floor(A % r)];
    }) + t;
  }
  function an(A, e, t, r, B, n) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("B", B, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (A < -9999 || 9999 < A) return Fn(A, 4, 0 < B.length);
    var s = cc11001100_hook("s", Math.abs(A), "var-init"),
      o = cc11001100_hook("o", B, "var-init");
    if (0 === s) return e[0] + o;
    for (var i = cc11001100_hook("i", 0, "var-init"); 0 < s && i <= 4; i++) {
      var Q = cc11001100_hook("Q", s % 10, "var-init");
      0 == Q && Pt(n, 1) && "" !== o ? o = cc11001100_hook("o", e[Q] + o, "assign") : 1 < Q || 1 == Q && 0 === i || 1 == Q && 1 === i && Pt(n, 2) || 1 == Q && 1 === i && Pt(n, 4) && 100 < A || 1 == Q && 1 < i && Pt(n, 8) ? o = cc11001100_hook("o", e[Q] + (0 < i ? t[i - 1] : "") + o, "assign") : 1 == Q && 0 < i && (o = cc11001100_hook("o", t[i - 1] + o, "assign")), s = cc11001100_hook("s", Math.floor(s / 10), "assign");
    }
    return (A < 0 ? r : "") + o;
  }
  var gn,
    wn = cc11001100_hook("wn", {
      integers: cc11001100_hook("integers", [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], "object-key-init"),
      values: cc11001100_hook("values", ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"], "object-key-init")
    }, "var-init"),
    Un = cc11001100_hook("Un", {
      integers: cc11001100_hook("integers", [9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "object-key-init"),
      values: cc11001100_hook("values", ["Ք", "Փ", "Ւ", "Ց", "Ր", "Տ", "Վ", "Ս", "Ռ", "Ջ", "Պ", "Չ", "Ո", "Շ", "Ն", "Յ", "Մ", "Ճ", "Ղ", "Ձ", "Հ", "Կ", "Ծ", "Խ", "Լ", "Ի", "Ժ", "Թ", "Ը", "Է", "Զ", "Ե", "Դ", "Գ", "Բ", "Ա"], "object-key-init")
    }, "var-init"),
    ln = cc11001100_hook("ln", {
      integers: cc11001100_hook("integers", [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "object-key-init"),
      values: cc11001100_hook("values", ["י׳", "ט׳", "ח׳", "ז׳", "ו׳", "ה׳", "ד׳", "ג׳", "ב׳", "א׳", "ת", "ש", "ר", "ק", "צ", "פ", "ע", "ס", "נ", "מ", "ל", "כ", "יט", "יח", "יז", "טז", "טו", "י", "ט", "ח", "ז", "ו", "ה", "ד", "ג", "ב", "א"], "object-key-init")
    }, "var-init"),
    Cn = cc11001100_hook("Cn", {
      integers: cc11001100_hook("integers", [1e4, 9e3, 8e3, 7e3, 6e3, 5e3, 4e3, 3e3, 2e3, 1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], "object-key-init"),
      values: cc11001100_hook("values", ["ჵ", "ჰ", "ჯ", "ჴ", "ხ", "ჭ", "წ", "ძ", "ც", "ჩ", "შ", "ყ", "ღ", "ქ", "ფ", "ჳ", "ტ", "ს", "რ", "ჟ", "პ", "ო", "ჲ", "ნ", "მ", "ლ", "კ", "ი", "თ", "ჱ", "ზ", "ვ", "ე", "დ", "გ", "ბ", "ა"], "object-key-init")
    }, "var-init"),
    un = cc11001100_hook("un", "마이너스", "var-init"),
    Fn = function (A, e, t) {
      var r = cc11001100_hook("r", t ? ". " : "", "var-init"),
        B = cc11001100_hook("B", t ? "、" : "", "var-init"),
        n = cc11001100_hook("n", t ? ", " : "", "var-init"),
        s = cc11001100_hook("s", t ? " " : "", "var-init");
      switch (e) {
        case 0:
          return "•" + s;
        case 1:
          return "◦" + s;
        case 2:
          return "◾" + s;
        case 5:
          var o = cc11001100_hook("o", Qn(A, 48, 57, !0, r), "var-init");
          return o.length < 4 ? "0" + o : o;
        case 4:
          return cn(A, "〇一二三四五六七八九", B);
        case 6:
          return sn(A, 1, 3999, wn, 3, r).toLowerCase();
        case 7:
          return sn(A, 1, 3999, wn, 3, r);
        case 8:
          return Qn(A, 945, 969, !1, r);
        case 9:
          return Qn(A, 97, 122, !1, r);
        case 10:
          return Qn(A, 65, 90, !1, r);
        case 11:
          return Qn(A, 1632, 1641, !0, r);
        case 12:
        case 49:
          return sn(A, 1, 9999, Un, 3, r);
        case 35:
          return sn(A, 1, 9999, Un, 3, r).toLowerCase();
        case 13:
          return Qn(A, 2534, 2543, !0, r);
        case 14:
        case 30:
          return Qn(A, 6112, 6121, !0, r);
        case 15:
          return cn(A, "子丑寅卯辰巳午未申酉戌亥", B);
        case 16:
          return cn(A, "甲乙丙丁戊己庚辛壬癸", B);
        case 17:
        case 48:
          return an(A, "零一二三四五六七八九", "十百千萬", "負", B, 14);
        case 47:
          return an(A, "零壹貳參肆伍陸柒捌玖", "拾佰仟萬", "負", B, 15);
        case 42:
          return an(A, "零一二三四五六七八九", "十百千萬", "负", B, 14);
        case 41:
          return an(A, "零壹贰叁肆伍陆柒捌玖", "拾佰仟萬", "负", B, 15);
        case 26:
          return an(A, "〇一二三四五六七八九", "十百千万", "マイナス", B, 0);
        case 25:
          return an(A, "零壱弐参四伍六七八九", "拾百千万", "マイナス", B, 7);
        case 31:
          return an(A, "영일이삼사오육칠팔구", "십백천만", un, n, 7);
        case 33:
          return an(A, "零一二三四五六七八九", "十百千萬", un, n, 0);
        case 32:
          return an(A, "零壹貳參四五六七八九", "拾百千", un, n, 7);
        case 18:
          return Qn(A, 2406, 2415, !0, r);
        case 20:
          return sn(A, 1, 19999, Cn, 3, r);
        case 21:
          return Qn(A, 2790, 2799, !0, r);
        case 22:
          return Qn(A, 2662, 2671, !0, r);
        case 22:
          return sn(A, 1, 10999, ln, 3, r);
        case 23:
          return cn(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
        case 24:
          return cn(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
        case 27:
          return Qn(A, 3302, 3311, !0, r);
        case 28:
          return cn(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", B);
        case 29:
          return cn(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", B);
        case 34:
          return Qn(A, 3792, 3801, !0, r);
        case 37:
          return Qn(A, 6160, 6169, !0, r);
        case 38:
          return Qn(A, 4160, 4169, !0, r);
        case 39:
          return Qn(A, 2918, 2927, !0, r);
        case 40:
          return Qn(A, 1776, 1785, !0, r);
        case 43:
          return Qn(A, 3046, 3055, !0, r);
        case 44:
          return Qn(A, 3174, 3183, !0, r);
        case 45:
          return Qn(A, 3664, 3673, !0, r);
        case 46:
          return Qn(A, 3872, 3881, !0, r);
        default:
          return Qn(A, 48, 57, !0, r);
      }
    },
    hn = cc11001100_hook("hn", "data-html2canvas-ignore", "var-init"),
    dn = cc11001100_hook("dn", (fn.prototype.toIFrame = cc11001100_hook("fn.prototype.toIFrame", function (A, r) {
      var e = cc11001100_hook("e", this, "var-init"),
        B = cc11001100_hook("B", pn(A, r), "var-init");
      if (!B.contentWindow) return Promise.reject("Unable to find iframe window");
      var t = cc11001100_hook("t", A.defaultView.pageXOffset, "var-init"),
        n = cc11001100_hook("n", A.defaultView.pageYOffset, "var-init"),
        s = cc11001100_hook("s", B.contentWindow, "var-init"),
        o = cc11001100_hook("o", s.document, "var-init"),
        A = cc11001100_hook("A", In(B).then(function () {
          return a(e, void 0, void 0, function () {
            var e, t;
            return H(this, function (A) {
              switch (A.label) {
                case 0:
                  return this.scrolledElements.forEach(bn), s && (s.scrollTo(r.left, r.top), !/(iPad|iPhone|iPod)/g.test(navigator.userAgent) || s.scrollY === r.top && s.scrollX === r.left || (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = cc11001100_hook("this.context.windowBounds", this.context.windowBounds.add(s.scrollX - r.left, s.scrollY - r.top, 0, 0), "assign"))), e = cc11001100_hook("e", this.options.onclone, "assign"), void 0 === (t = cc11001100_hook("t", this.clonedReferenceElement, "assign")) ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : o.fonts && o.fonts.ready ? [4, o.fonts.ready] : [3, 2];
                case 1:
                  A.sent(), A.label = cc11001100_hook("A.label", 2, "assign");
                case 2:
                  return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, En(o)] : [3, 4];
                case 3:
                  A.sent(), A.label = cc11001100_hook("A.label", 4, "assign");
                case 4:
                  return "function" == typeof e ? [2, Promise.resolve().then(function () {
                    return e(o, t);
                  }).then(function () {
                    return B;
                  })] : [2, B];
              }
            });
          });
        }), "var-init");
      return o.open(), o.write(mn(document.doctype) + "<html></html>"), Ln(this.referenceElement.ownerDocument, t, n), o.replaceChild(o.adoptNode(this.documentElement), o.documentElement), o.close(), A;
    }, "assign"), fn.prototype.createElementClone = cc11001100_hook("fn.prototype.createElementClone", function (A) {
      if (Cr(A, 2), zB(A)) return this.createCanvasClone(A);
      if (MB(A)) return this.createVideoClone(A);
      if (SB(A)) return this.createStyleClone(A);
      var e = cc11001100_hook("e", A.cloneNode(!1), "var-init");
      return $B(e) && ($B(A) && A.currentSrc && A.currentSrc !== A.src && (e.src = cc11001100_hook("e.src", A.currentSrc, "assign"), e.srcset = cc11001100_hook("e.srcset", "", "assign")), "lazy" === e.loading && (e.loading = cc11001100_hook("e.loading", "eager", "assign"))), TB(e) ? this.createCustomElementClone(e) : e;
    }, "assign"), fn.prototype.createCustomElementClone = cc11001100_hook("fn.prototype.createCustomElementClone", function (A) {
      var e = cc11001100_hook("e", document.createElement("html2canvascustomelement"), "var-init");
      return Kn(A.style, e), e;
    }, "assign"), fn.prototype.createStyleClone = cc11001100_hook("fn.prototype.createStyleClone", function (A) {
      try {
        var e = cc11001100_hook("e", A.sheet, "var-init");
        if (e && e.cssRules) {
          var t = cc11001100_hook("t", [].slice.call(e.cssRules, 0).reduce(function (A, e) {
              return e && "string" == typeof e.cssText ? A + e.cssText : A;
            }, ""), "var-init"),
            r = cc11001100_hook("r", A.cloneNode(!1), "var-init");
          return r.textContent = cc11001100_hook("r.textContent", t, "assign"), r;
        }
      } catch (A) {
        if (this.context.logger.error("Unable to access cssRules property", A), "SecurityError" !== A.name) throw A;
      }
      return A.cloneNode(!1);
    }, "assign"), fn.prototype.createCanvasClone = cc11001100_hook("fn.prototype.createCanvasClone", function (e) {
      var A;
      if (this.options.inlineImages && e.ownerDocument) {
        var t = cc11001100_hook("t", e.ownerDocument.createElement("img"), "var-init");
        try {
          return t.src = cc11001100_hook("t.src", e.toDataURL(), "assign"), t;
        } catch (A) {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      t = cc11001100_hook("t", e.cloneNode(!1), "assign");
      try {
        t.width = cc11001100_hook("t.width", e.width, "assign"), t.height = cc11001100_hook("t.height", e.height, "assign");
        var r,
          B,
          n = cc11001100_hook("n", e.getContext("2d"), "var-init"),
          s = cc11001100_hook("s", t.getContext("2d"), "var-init");
        return s && (!this.options.allowTaint && n ? s.putImageData(n.getImageData(0, 0, e.width, e.height), 0, 0) : (!(r = cc11001100_hook("r", null !== (A = cc11001100_hook("A", e.getContext("webgl2"), "assign")) && void 0 !== A ? A : e.getContext("webgl"), "assign")) || !1 === (null == (B = cc11001100_hook("B", r.getContextAttributes(), "assign")) ? void 0 : B.preserveDrawingBuffer) && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e), s.drawImage(e, 0, 0))), t;
      } catch (A) {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return t;
    }, "assign"), fn.prototype.createVideoClone = cc11001100_hook("fn.prototype.createVideoClone", function (e) {
      var A = cc11001100_hook("A", e.ownerDocument.createElement("canvas"), "var-init");
      A.width = cc11001100_hook("A.width", e.offsetWidth, "assign"), A.height = cc11001100_hook("A.height", e.offsetHeight, "assign");
      var t = cc11001100_hook("t", A.getContext("2d"), "var-init");
      try {
        return t && (t.drawImage(e, 0, 0, A.width, A.height), this.options.allowTaint || t.getImageData(0, 0, A.width, A.height)), A;
      } catch (A) {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      A = cc11001100_hook("A", e.ownerDocument.createElement("canvas"), "assign");
      return A.width = cc11001100_hook("A.width", e.offsetWidth, "assign"), A.height = cc11001100_hook("A.height", e.offsetHeight, "assign"), A;
    }, "assign"), fn.prototype.appendChildNode = cc11001100_hook("fn.prototype.appendChildNode", function (A, e, t) {
      XB(e) && ("SCRIPT" === e.tagName || e.hasAttribute(hn) || "function" == typeof this.options.ignoreElements && this.options.ignoreElements(e)) || this.options.copyStyles && XB(e) && SB(e) || A.appendChild(this.cloneNode(e, t));
    }, "assign"), fn.prototype.cloneChildNodes = cc11001100_hook("fn.prototype.cloneChildNodes", function (A, e, t) {
      for (var r, B = cc11001100_hook("B", this, "var-init"), n = cc11001100_hook("n", (A.shadowRoot || A).firstChild, "var-init"); n; n = cc11001100_hook("n", n.nextSibling, "assign")) XB(n) && rn(n) && "function" == typeof n.assignedNodes ? (r = cc11001100_hook("r", n.assignedNodes(), "assign")).length && r.forEach(function (A) {
        return B.appendChildNode(e, A, t);
      }) : this.appendChildNode(e, n, t);
    }, "assign"), fn.prototype.cloneNode = cc11001100_hook("fn.prototype.cloneNode", function (A, e) {
      if (PB(A)) return document.createTextNode(A.data);
      if (!A.ownerDocument) return A.cloneNode(!1);
      var t = cc11001100_hook("t", A.ownerDocument.defaultView, "var-init");
      if (t && XB(A) && (JB(A) || YB(A))) {
        var r = cc11001100_hook("r", this.createElementClone(A), "var-init");
        r.style.transitionProperty = cc11001100_hook("r.style.transitionProperty", "none", "assign");
        var B = cc11001100_hook("B", t.getComputedStyle(A), "var-init"),
          n = cc11001100_hook("n", t.getComputedStyle(A, ":before"), "var-init"),
          s = cc11001100_hook("s", t.getComputedStyle(A, ":after"), "var-init");
        this.referenceElement === A && JB(r) && (this.clonedReferenceElement = cc11001100_hook("this.clonedReferenceElement", r, "assign")), jB(r) && Mn(r);
        t = cc11001100_hook("t", this.counters.parse(new Ur(this.context, B)), "assign"), n = cc11001100_hook("n", this.resolvePseudoContent(A, r, n, gn.BEFORE), "assign");
        TB(A) && (e = cc11001100_hook("e", !0, "assign")), MB(A) || this.cloneChildNodes(A, r, e), n && r.insertBefore(n, r.firstChild);
        s = cc11001100_hook("s", this.resolvePseudoContent(A, r, s, gn.AFTER), "assign");
        return s && r.appendChild(s), this.counters.pop(t), (B && (this.options.copyStyles || YB(A)) && !An(A) || e) && Kn(B, r), 0 === A.scrollTop && 0 === A.scrollLeft || this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (en(A) || tn(A)) && (en(r) || tn(r)) && (r.value = cc11001100_hook("r.value", A.value, "assign")), r;
      }
      return A.cloneNode(!1);
    }, "assign"), fn.prototype.resolvePseudoContent = cc11001100_hook("fn.prototype.resolvePseudoContent", function (o, A, e, t) {
      var i = cc11001100_hook("i", this, "var-init");
      if (e) {
        var r = cc11001100_hook("r", e.content, "var-init"),
          Q = cc11001100_hook("Q", A.ownerDocument, "var-init");
        if (Q && r && "none" !== r && "-moz-alt-content" !== r && "none" !== e.display) {
          this.counters.parse(new Ur(this.context, e));
          var c = cc11001100_hook("c", new wr(this.context, e), "var-init"),
            a = cc11001100_hook("a", Q.createElement("html2canvaspseudoelement"), "var-init");
          Kn(e, a), c.content.forEach(function (A) {
            if (0 === A.type) a.appendChild(Q.createTextNode(A.value));else if (22 === A.type) {
              var e = cc11001100_hook("e", Q.createElement("img"), "var-init");
              e.src = cc11001100_hook("e.src", A.value, "assign"), e.style.opacity = cc11001100_hook("e.style.opacity", "1", "assign"), a.appendChild(e);
            } else if (18 === A.type) {
              var t, r, B, n, s;
              "attr" === A.name ? (e = cc11001100_hook("e", A.values.filter(_A), "assign")).length && a.appendChild(Q.createTextNode(o.getAttribute(e[0].value) || "")) : "counter" === A.name ? (B = cc11001100_hook("B", (r = cc11001100_hook("r", A.values.filter($A), "assign"))[0], "assign"), r = cc11001100_hook("r", r[1], "assign"), B && _A(B) && (t = cc11001100_hook("t", i.counters.getCounterValue(B.value), "assign"), s = cc11001100_hook("s", r && _A(r) ? pt.parse(i.context, r.value) : 3, "assign"), a.appendChild(Q.createTextNode(Fn(t, s, !1))))) : "counters" === A.name && (B = cc11001100_hook("B", (t = cc11001100_hook("t", A.values.filter($A), "assign"))[0], "assign"), s = cc11001100_hook("s", t[1], "assign"), r = cc11001100_hook("r", t[2], "assign"), B && _A(B) && (B = cc11001100_hook("B", i.counters.getCounterValues(B.value), "assign"), n = cc11001100_hook("n", r && _A(r) ? pt.parse(i.context, r.value) : 3, "assign"), s = cc11001100_hook("s", s && 0 === s.type ? s.value : "", "assign"), s = cc11001100_hook("s", B.map(function (A) {
                return Fn(A, n, !1);
              }).join(s), "assign"), a.appendChild(Q.createTextNode(s))));
            } else if (20 === A.type) switch (A.value) {
              case "open-quote":
                a.appendChild(Q.createTextNode(Xt(c.quotes, i.quoteDepth++, !0)));
                break;
              case "close-quote":
                a.appendChild(Q.createTextNode(Xt(c.quotes, --i.quoteDepth, !1)));
                break;
              default:
                a.appendChild(Q.createTextNode(A.value));
            }
          }), a.className = cc11001100_hook("a.className", Dn + " " + vn, "assign");
          t = cc11001100_hook("t", t === gn.BEFORE ? " " + Dn : " " + vn, "assign");
          return YB(A) ? A.className.baseValue += cc11001100_hook("A.className.baseValue", t, "assign") : A.className += cc11001100_hook("A.className", t, "assign"), a;
        }
      }
    }, "assign"), fn.destroy = cc11001100_hook("fn.destroy", function (A) {
      return !!A.parentNode && (A.parentNode.removeChild(A), !0);
    }, "assign"), fn), "var-init");
  function fn(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (this.context = cc11001100_hook("this.context", A, "assign"), this.options = cc11001100_hook("this.options", t, "assign"), this.scrolledElements = cc11001100_hook("this.scrolledElements", [], "assign"), this.referenceElement = cc11001100_hook("this.referenceElement", e, "assign"), this.counters = cc11001100_hook("this.counters", new Bn(), "assign"), this.quoteDepth = cc11001100_hook("this.quoteDepth", 0, "assign"), !e.ownerDocument) throw new Error("Cloned element does not have an owner document");
    this.documentElement = cc11001100_hook("this.documentElement", this.cloneNode(e.ownerDocument.documentElement, !1), "assign");
  }
  (he = cc11001100_hook("he", gn = cc11001100_hook("gn", gn || {}, "assign"), "assign"))[he.BEFORE = cc11001100_hook("he.BEFORE", 0, "assign")] = cc11001100_hook("(he = gn = gn || {})[he.BEFORE = 0]", "BEFORE", "assign"), he[he.AFTER = cc11001100_hook("he.AFTER", 1, "assign")] = cc11001100_hook("he[he.AFTER = 1]", "AFTER", "assign");
  function Hn(e) {
    cc11001100_hook("e", e, "function-parameter");
    return new Promise(function (A) {
      !e.complete && e.src ? (e.onload = cc11001100_hook("e.onload", A, "assign"), e.onerror = cc11001100_hook("e.onerror", A, "assign")) : A();
    });
  }
  var pn = function (A, e) {
      var t = cc11001100_hook("t", A.createElement("iframe"), "var-init");
      return t.className = cc11001100_hook("t.className", "html2canvas-container", "assign"), t.style.visibility = cc11001100_hook("t.style.visibility", "hidden", "assign"), t.style.position = cc11001100_hook("t.style.position", "fixed", "assign"), t.style.left = cc11001100_hook("t.style.left", "-10000px", "assign"), t.style.top = cc11001100_hook("t.style.top", "0px", "assign"), t.style.border = cc11001100_hook("t.style.border", "0", "assign"), t.width = cc11001100_hook("t.width", e.width.toString(), "assign"), t.height = cc11001100_hook("t.height", e.height.toString(), "assign"), t.scrolling = cc11001100_hook("t.scrolling", "no", "assign"), t.setAttribute(hn, "true"), A.body.appendChild(t), t;
    },
    En = function (A) {
      return Promise.all([].slice.call(A.images, 0).map(Hn));
    },
    In = function (B) {
      return new Promise(function (e, A) {
        var t = cc11001100_hook("t", B.contentWindow, "var-init");
        if (!t) return A("No window assigned for iframe");
        var r = cc11001100_hook("r", t.document, "var-init");
        t.onload = cc11001100_hook("t.onload", B.onload = cc11001100_hook("B.onload", function () {
          t.onload = cc11001100_hook("t.onload", B.onload = cc11001100_hook("B.onload", null, "assign"), "assign");
          var A = cc11001100_hook("A", setInterval(function () {
            0 < r.body.childNodes.length && "complete" === r.readyState && (clearInterval(A), e(B));
          }, 50), "var-init");
        }, "assign"), "assign");
      });
    },
    yn = cc11001100_hook("yn", ["all", "d", "content"], "var-init"),
    Kn = function (A, e) {
      for (var t = cc11001100_hook("t", A.length - 1, "var-init"); 0 <= t; t--) {
        var r = cc11001100_hook("r", A.item(t), "var-init");
        -1 === yn.indexOf(r) && e.style.setProperty(r, A.getPropertyValue(r));
      }
      return e;
    },
    mn = function (A) {
      var e = cc11001100_hook("e", "", "var-init");
      return A && (e += cc11001100_hook("e", "<!DOCTYPE ", "assign"), A.name && (e += cc11001100_hook("e", A.name, "assign")), A.internalSubset && (e += cc11001100_hook("e", A.internalSubset, "assign")), A.publicId && (e += cc11001100_hook("e", '"' + A.publicId + '"', "assign")), A.systemId && (e += cc11001100_hook("e", '"' + A.systemId + '"', "assign")), e += cc11001100_hook("e", ">", "assign")), e;
    },
    Ln = function (A, e, t) {
      A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
    },
    bn = function (A) {
      var e = cc11001100_hook("e", A[0], "var-init"),
        t = cc11001100_hook("t", A[1], "var-init"),
        A = cc11001100_hook("A", A[2], "var-init");
      e.scrollLeft = cc11001100_hook("e.scrollLeft", t, "assign"), e.scrollTop = cc11001100_hook("e.scrollTop", A, "assign");
    },
    Dn = cc11001100_hook("Dn", "___html2canvas___pseudoelement_before", "var-init"),
    vn = cc11001100_hook("vn", "___html2canvas___pseudoelement_after", "var-init"),
    xn = cc11001100_hook("xn", '{\n    content: "" !important;\n    display: none !important;\n}', "var-init"),
    Mn = function (A) {
      Sn(A, "." + Dn + ":before" + xn + "\n         ." + vn + ":after" + xn);
    },
    Sn = function (A, e) {
      var t = cc11001100_hook("t", A.ownerDocument, "var-init");
      t && ((t = cc11001100_hook("t", t.createElement("style"), "assign")).textContent = cc11001100_hook("(t = t.createElement(\"style\")).textContent", e, "assign"), A.appendChild(t));
    },
    Tn = cc11001100_hook("Tn", (Gn.getOrigin = cc11001100_hook("Gn.getOrigin", function (A) {
      var e = cc11001100_hook("e", Gn._link, "var-init");
      return e ? (e.href = cc11001100_hook("e.href", A, "assign"), e.href = cc11001100_hook("e.href", e.href, "assign"), e.protocol + e.hostname + e.port) : "about:blank";
    }, "assign"), Gn.isSameOrigin = cc11001100_hook("Gn.isSameOrigin", function (A) {
      return Gn.getOrigin(A) === Gn._origin;
    }, "assign"), Gn.setContext = cc11001100_hook("Gn.setContext", function (A) {
      Gn._link = cc11001100_hook("Gn._link", A.document.createElement("a"), "assign"), Gn._origin = cc11001100_hook("Gn._origin", Gn.getOrigin(A.location.href), "assign");
    }, "assign"), Gn._origin = cc11001100_hook("Gn._origin", "about:blank", "assign"), Gn), "var-init");
  function Gn() {}
  var On = cc11001100_hook("On", (Vn.prototype.addImage = cc11001100_hook("Vn.prototype.addImage", function (A) {
    var e = cc11001100_hook("e", Promise.resolve(), "var-init");
    return this.has(A) || (Yn(A) || Pn(A)) && (this._cache[A] = cc11001100_hook("this._cache[A]", this.loadImage(A), "assign")).catch(function () {}), e;
  }, "assign"), Vn.prototype.match = cc11001100_hook("Vn.prototype.match", function (A) {
    return this._cache[A];
  }, "assign"), Vn.prototype.loadImage = cc11001100_hook("Vn.prototype.loadImage", function (s) {
    return a(this, void 0, void 0, function () {
      var e,
        r,
        t,
        B,
        n = cc11001100_hook("n", this, "var-init");
      return H(this, function (A) {
        switch (A.label) {
          case 0:
            return (e = cc11001100_hook("e", Tn.isSameOrigin(s), "assign"), r = cc11001100_hook("r", !Xn(s) && !0 === this._options.useCORS && Xr.SUPPORT_CORS_IMAGES && !e, "assign"), t = cc11001100_hook("t", !Xn(s) && !e && !Yn(s) && "string" == typeof this._options.proxy && Xr.SUPPORT_CORS_XHR && !r, "assign"), e || !1 !== this._options.allowTaint || Xn(s) || Yn(s) || t || r) ? (B = cc11001100_hook("B", s, "assign"), t ? [4, this.proxy(B)] : [3, 2]) : [2];
          case 1:
            B = cc11001100_hook("B", A.sent(), "assign"), A.label = cc11001100_hook("A.label", 2, "assign");
          case 2:
            return this.context.logger.debug("Added image " + s.substring(0, 256)), [4, new Promise(function (A, e) {
              var t = cc11001100_hook("t", new Image(), "var-init");
              t.onload = cc11001100_hook("t.onload", function () {
                return A(t);
              }, "assign"), t.onerror = cc11001100_hook("t.onerror", e, "assign"), (Jn(B) || r) && (t.crossOrigin = cc11001100_hook("t.crossOrigin", "anonymous", "assign")), t.src = cc11001100_hook("t.src", B, "assign"), !0 === t.complete && setTimeout(function () {
                return A(t);
              }, 500), 0 < n._options.imageTimeout && setTimeout(function () {
                return e("Timed out (" + n._options.imageTimeout + "ms) loading image");
              }, n._options.imageTimeout);
            })];
          case 3:
            return [2, A.sent()];
        }
      });
    });
  }, "assign"), Vn.prototype.has = cc11001100_hook("Vn.prototype.has", function (A) {
    return void 0 !== this._cache[A];
  }, "assign"), Vn.prototype.keys = cc11001100_hook("Vn.prototype.keys", function () {
    return Promise.resolve(Object.keys(this._cache));
  }, "assign"), Vn.prototype.proxy = cc11001100_hook("Vn.prototype.proxy", function (s) {
    var o = cc11001100_hook("o", this, "var-init"),
      i = cc11001100_hook("i", this._options.proxy, "var-init");
    if (!i) throw new Error("No proxy defined");
    var Q = cc11001100_hook("Q", s.substring(0, 256), "var-init");
    return new Promise(function (e, t) {
      var r = cc11001100_hook("r", Xr.SUPPORT_RESPONSE_TYPE ? "blob" : "text", "var-init"),
        B = cc11001100_hook("B", new XMLHttpRequest(), "var-init");
      B.onload = cc11001100_hook("B.onload", function () {
        var A;
        200 === B.status ? "text" == r ? e(B.response) : ((A = cc11001100_hook("A", new FileReader(), "assign")).addEventListener("load", function () {
          return e(A.result);
        }, !1), A.addEventListener("error", function (A) {
          return t(A);
        }, !1), A.readAsDataURL(B.response)) : t("Failed to proxy resource " + Q + " with status code " + B.status);
      }, "assign"), B.onerror = cc11001100_hook("B.onerror", t, "assign");
      var A,
        n = cc11001100_hook("n", -1 < i.indexOf("?") ? "&" : "?", "var-init");
      B.open("GET", i + n + "url=" + encodeURIComponent(s) + "&responseType=" + r), "text" != r && B instanceof XMLHttpRequest && (B.responseType = cc11001100_hook("B.responseType", r, "assign")), o._options.imageTimeout && (A = cc11001100_hook("A", o._options.imageTimeout, "assign"), B.timeout = cc11001100_hook("B.timeout", A, "assign"), B.ontimeout = cc11001100_hook("B.ontimeout", function () {
        return t("Timed out (" + A + "ms) proxying " + Q);
      }, "assign")), B.send();
    });
  }, "assign"), Vn), "var-init");
  function Vn(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.context = cc11001100_hook("this.context", A, "assign"), this._options = cc11001100_hook("this._options", e, "assign"), this._cache = cc11001100_hook("this._cache", {}, "assign");
  }
  var kn = cc11001100_hook("kn", /^data:image\/svg\+xml/i, "var-init"),
    Rn = cc11001100_hook("Rn", /^data:image\/.*;base64,/i, "var-init"),
    Nn = cc11001100_hook("Nn", /^data:image\/.*/i, "var-init"),
    Pn = function (A) {
      return Xr.SUPPORT_SVG_DRAWING || !Wn(A);
    },
    Xn = function (A) {
      return Nn.test(A);
    },
    Jn = function (A) {
      return Rn.test(A);
    },
    Yn = function (A) {
      return "blob" === A.substr(0, 4);
    },
    Wn = function (A) {
      return "svg" === A.substr(-3).toLowerCase() || kn.test(A);
    },
    Zn = cc11001100_hook("Zn", (_n.prototype.add = cc11001100_hook("_n.prototype.add", function (A, e) {
      return new _n(this.x + A, this.y + e);
    }, "assign"), _n), "var-init");
  function _n(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.type = cc11001100_hook("this.type", 0, "assign"), this.x = cc11001100_hook("this.x", A, "assign"), this.y = cc11001100_hook("this.y", e, "assign");
  }
  function qn(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return new Zn(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
  }
  var jn = cc11001100_hook("jn", (zn.prototype.subdivide = cc11001100_hook("zn.prototype.subdivide", function (A, e) {
    var t = cc11001100_hook("t", qn(this.start, this.startControl, A), "var-init"),
      r = cc11001100_hook("r", qn(this.startControl, this.endControl, A), "var-init"),
      B = cc11001100_hook("B", qn(this.endControl, this.end, A), "var-init"),
      n = cc11001100_hook("n", qn(t, r, A), "var-init"),
      r = cc11001100_hook("r", qn(r, B, A), "var-init"),
      A = cc11001100_hook("A", qn(n, r, A), "var-init");
    return e ? new zn(this.start, t, n, A) : new zn(A, r, B, this.end);
  }, "assign"), zn.prototype.add = cc11001100_hook("zn.prototype.add", function (A, e) {
    return new zn(this.start.add(A, e), this.startControl.add(A, e), this.endControl.add(A, e), this.end.add(A, e));
  }, "assign"), zn.prototype.reverse = cc11001100_hook("zn.prototype.reverse", function () {
    return new zn(this.end, this.endControl, this.startControl, this.start);
  }, "assign"), zn), "var-init");
  function zn(A, e, t, r) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    this.type = cc11001100_hook("this.type", 1, "assign"), this.start = cc11001100_hook("this.start", A, "assign"), this.startControl = cc11001100_hook("this.startControl", e, "assign"), this.endControl = cc11001100_hook("this.endControl", t, "assign"), this.end = cc11001100_hook("this.end", r, "assign");
  }
  function $n(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 1 === A.type;
  }
  var As,
    es = function (A) {
      var e = cc11001100_hook("e", A.styles, "var-init"),
        t = cc11001100_hook("t", A.bounds, "var-init"),
        r = cc11001100_hook("r", (C = cc11001100_hook("C", Be(e.borderTopLeftRadius, t.width, t.height), "assign"))[0], "var-init"),
        B = cc11001100_hook("B", C[1], "var-init"),
        n = cc11001100_hook("n", (u = cc11001100_hook("u", Be(e.borderTopRightRadius, t.width, t.height), "assign"))[0], "var-init"),
        s = cc11001100_hook("s", u[1], "var-init"),
        o = cc11001100_hook("o", (F = cc11001100_hook("F", Be(e.borderBottomRightRadius, t.width, t.height), "assign"))[0], "var-init"),
        i = cc11001100_hook("i", F[1], "var-init"),
        Q = cc11001100_hook("Q", (h = cc11001100_hook("h", Be(e.borderBottomLeftRadius, t.width, t.height), "assign"))[0], "var-init"),
        c = cc11001100_hook("c", h[1], "var-init");
      (d = cc11001100_hook("d", [], "assign")).push((r + n) / t.width), d.push((Q + o) / t.width), d.push((B + c) / t.height), d.push((s + i) / t.height), 1 < (f = cc11001100_hook("f", Math.max.apply(Math, d), "assign")) && (r /= cc11001100_hook("r", f, "assign"), B /= cc11001100_hook("B", f, "assign"), n /= cc11001100_hook("n", f, "assign"), s /= cc11001100_hook("s", f, "assign"), o /= cc11001100_hook("o", f, "assign"), i /= cc11001100_hook("i", f, "assign"), Q /= cc11001100_hook("Q", f, "assign"), c /= cc11001100_hook("c", f, "assign"));
      var a = cc11001100_hook("a", t.width - n, "var-init"),
        g = cc11001100_hook("g", t.height - i, "var-init"),
        w = cc11001100_hook("w", t.width - o, "var-init"),
        U = cc11001100_hook("U", t.height - c, "var-init"),
        l = cc11001100_hook("l", e.borderTopWidth, "var-init"),
        C = cc11001100_hook("C", e.borderRightWidth, "var-init"),
        u = cc11001100_hook("u", e.borderBottomWidth, "var-init"),
        F = cc11001100_hook("F", e.borderLeftWidth, "var-init"),
        h = cc11001100_hook("h", Ue(e.paddingTop, A.bounds.width), "var-init"),
        d = cc11001100_hook("d", Ue(e.paddingRight, A.bounds.width), "var-init"),
        f = cc11001100_hook("f", Ue(e.paddingBottom, A.bounds.width), "var-init"),
        A = cc11001100_hook("A", Ue(e.paddingLeft, A.bounds.width), "var-init");
      this.topLeftBorderDoubleOuterBox = cc11001100_hook("this.topLeftBorderDoubleOuterBox", 0 < r || 0 < B ? ss(t.left + F / 3, t.top + l / 3, r - F / 3, B - l / 3, As.TOP_LEFT) : new Zn(t.left + F / 3, t.top + l / 3), "assign"), this.topRightBorderDoubleOuterBox = cc11001100_hook("this.topRightBorderDoubleOuterBox", 0 < r || 0 < B ? ss(t.left + a, t.top + l / 3, n - C / 3, s - l / 3, As.TOP_RIGHT) : new Zn(t.left + t.width - C / 3, t.top + l / 3), "assign"), this.bottomRightBorderDoubleOuterBox = cc11001100_hook("this.bottomRightBorderDoubleOuterBox", 0 < o || 0 < i ? ss(t.left + w, t.top + g, o - C / 3, i - u / 3, As.BOTTOM_RIGHT) : new Zn(t.left + t.width - C / 3, t.top + t.height - u / 3), "assign"), this.bottomLeftBorderDoubleOuterBox = cc11001100_hook("this.bottomLeftBorderDoubleOuterBox", 0 < Q || 0 < c ? ss(t.left + F / 3, t.top + U, Q - F / 3, c - u / 3, As.BOTTOM_LEFT) : new Zn(t.left + F / 3, t.top + t.height - u / 3), "assign"), this.topLeftBorderDoubleInnerBox = cc11001100_hook("this.topLeftBorderDoubleInnerBox", 0 < r || 0 < B ? ss(t.left + 2 * F / 3, t.top + 2 * l / 3, r - 2 * F / 3, B - 2 * l / 3, As.TOP_LEFT) : new Zn(t.left + 2 * F / 3, t.top + 2 * l / 3), "assign"), this.topRightBorderDoubleInnerBox = cc11001100_hook("this.topRightBorderDoubleInnerBox", 0 < r || 0 < B ? ss(t.left + a, t.top + 2 * l / 3, n - 2 * C / 3, s - 2 * l / 3, As.TOP_RIGHT) : new Zn(t.left + t.width - 2 * C / 3, t.top + 2 * l / 3), "assign"), this.bottomRightBorderDoubleInnerBox = cc11001100_hook("this.bottomRightBorderDoubleInnerBox", 0 < o || 0 < i ? ss(t.left + w, t.top + g, o - 2 * C / 3, i - 2 * u / 3, As.BOTTOM_RIGHT) : new Zn(t.left + t.width - 2 * C / 3, t.top + t.height - 2 * u / 3), "assign"), this.bottomLeftBorderDoubleInnerBox = cc11001100_hook("this.bottomLeftBorderDoubleInnerBox", 0 < Q || 0 < c ? ss(t.left + 2 * F / 3, t.top + U, Q - 2 * F / 3, c - 2 * u / 3, As.BOTTOM_LEFT) : new Zn(t.left + 2 * F / 3, t.top + t.height - 2 * u / 3), "assign"), this.topLeftBorderStroke = cc11001100_hook("this.topLeftBorderStroke", 0 < r || 0 < B ? ss(t.left + F / 2, t.top + l / 2, r - F / 2, B - l / 2, As.TOP_LEFT) : new Zn(t.left + F / 2, t.top + l / 2), "assign"), this.topRightBorderStroke = cc11001100_hook("this.topRightBorderStroke", 0 < r || 0 < B ? ss(t.left + a, t.top + l / 2, n - C / 2, s - l / 2, As.TOP_RIGHT) : new Zn(t.left + t.width - C / 2, t.top + l / 2), "assign"), this.bottomRightBorderStroke = cc11001100_hook("this.bottomRightBorderStroke", 0 < o || 0 < i ? ss(t.left + w, t.top + g, o - C / 2, i - u / 2, As.BOTTOM_RIGHT) : new Zn(t.left + t.width - C / 2, t.top + t.height - u / 2), "assign"), this.bottomLeftBorderStroke = cc11001100_hook("this.bottomLeftBorderStroke", 0 < Q || 0 < c ? ss(t.left + F / 2, t.top + U, Q - F / 2, c - u / 2, As.BOTTOM_LEFT) : new Zn(t.left + F / 2, t.top + t.height - u / 2), "assign"), this.topLeftBorderBox = cc11001100_hook("this.topLeftBorderBox", 0 < r || 0 < B ? ss(t.left, t.top, r, B, As.TOP_LEFT) : new Zn(t.left, t.top), "assign"), this.topRightBorderBox = cc11001100_hook("this.topRightBorderBox", 0 < n || 0 < s ? ss(t.left + a, t.top, n, s, As.TOP_RIGHT) : new Zn(t.left + t.width, t.top), "assign"), this.bottomRightBorderBox = cc11001100_hook("this.bottomRightBorderBox", 0 < o || 0 < i ? ss(t.left + w, t.top + g, o, i, As.BOTTOM_RIGHT) : new Zn(t.left + t.width, t.top + t.height), "assign"), this.bottomLeftBorderBox = cc11001100_hook("this.bottomLeftBorderBox", 0 < Q || 0 < c ? ss(t.left, t.top + U, Q, c, As.BOTTOM_LEFT) : new Zn(t.left, t.top + t.height), "assign"), this.topLeftPaddingBox = cc11001100_hook("this.topLeftPaddingBox", 0 < r || 0 < B ? ss(t.left + F, t.top + l, Math.max(0, r - F), Math.max(0, B - l), As.TOP_LEFT) : new Zn(t.left + F, t.top + l), "assign"), this.topRightPaddingBox = cc11001100_hook("this.topRightPaddingBox", 0 < n || 0 < s ? ss(t.left + Math.min(a, t.width - C), t.top + l, a > t.width + C ? 0 : Math.max(0, n - C), Math.max(0, s - l), As.TOP_RIGHT) : new Zn(t.left + t.width - C, t.top + l), "assign"), this.bottomRightPaddingBox = cc11001100_hook("this.bottomRightPaddingBox", 0 < o || 0 < i ? ss(t.left + Math.min(w, t.width - F), t.top + Math.min(g, t.height - u), Math.max(0, o - C), Math.max(0, i - u), As.BOTTOM_RIGHT) : new Zn(t.left + t.width - C, t.top + t.height - u), "assign"), this.bottomLeftPaddingBox = cc11001100_hook("this.bottomLeftPaddingBox", 0 < Q || 0 < c ? ss(t.left + F, t.top + Math.min(U, t.height - u), Math.max(0, Q - F), Math.max(0, c - u), As.BOTTOM_LEFT) : new Zn(t.left + F, t.top + t.height - u), "assign"), this.topLeftContentBox = cc11001100_hook("this.topLeftContentBox", 0 < r || 0 < B ? ss(t.left + F + A, t.top + l + h, Math.max(0, r - (F + A)), Math.max(0, B - (l + h)), As.TOP_LEFT) : new Zn(t.left + F + A, t.top + l + h), "assign"), this.topRightContentBox = cc11001100_hook("this.topRightContentBox", 0 < n || 0 < s ? ss(t.left + Math.min(a, t.width + F + A), t.top + l + h, a > t.width + F + A ? 0 : n - F + A, s - (l + h), As.TOP_RIGHT) : new Zn(t.left + t.width - (C + d), t.top + l + h), "assign"), this.bottomRightContentBox = cc11001100_hook("this.bottomRightContentBox", 0 < o || 0 < i ? ss(t.left + Math.min(w, t.width - (F + A)), t.top + Math.min(g, t.height + l + h), Math.max(0, o - (C + d)), i - (u + f), As.BOTTOM_RIGHT) : new Zn(t.left + t.width - (C + d), t.top + t.height - (u + f)), "assign"), this.bottomLeftContentBox = cc11001100_hook("this.bottomLeftContentBox", 0 < Q || 0 < c ? ss(t.left + F + A, t.top + U, Math.max(0, Q - (F + A)), c - (u + f), As.BOTTOM_LEFT) : new Zn(t.left + F + A, t.top + t.height - (u + f)), "assign");
    };
  (he = cc11001100_hook("he", As = cc11001100_hook("As", As || {}, "assign"), "assign"))[he.TOP_LEFT = cc11001100_hook("he.TOP_LEFT", 0, "assign")] = cc11001100_hook("(he = As = As || {})[he.TOP_LEFT = 0]", "TOP_LEFT", "assign"), he[he.TOP_RIGHT = cc11001100_hook("he.TOP_RIGHT", 1, "assign")] = cc11001100_hook("he[he.TOP_RIGHT = 1]", "TOP_RIGHT", "assign"), he[he.BOTTOM_RIGHT = cc11001100_hook("he.BOTTOM_RIGHT", 2, "assign")] = cc11001100_hook("he[he.BOTTOM_RIGHT = 2]", "BOTTOM_RIGHT", "assign"), he[he.BOTTOM_LEFT = cc11001100_hook("he.BOTTOM_LEFT", 3, "assign")] = cc11001100_hook("he[he.BOTTOM_LEFT = 3]", "BOTTOM_LEFT", "assign");
  function ts(A) {
    cc11001100_hook("A", A, "function-parameter");
    return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
  }
  function rs(A) {
    cc11001100_hook("A", A, "function-parameter");
    return [A.topLeftPaddingBox, A.topRightPaddingBox, A.bottomRightPaddingBox, A.bottomLeftPaddingBox];
  }
  function Bs(A) {
    cc11001100_hook("A", A, "function-parameter");
    return 1 === A.type;
  }
  function ns(A, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return A.length === t.length && A.some(function (A, e) {
      return A === t[e];
    });
  }
  var ss = function (A, e, t, r, B) {
      var n = cc11001100_hook("n", (Math.sqrt(2) - 1) / 3 * 4, "var-init"),
        s = cc11001100_hook("s", t * n, "var-init"),
        o = cc11001100_hook("o", r * n, "var-init"),
        i = cc11001100_hook("i", A + t, "var-init"),
        Q = cc11001100_hook("Q", e + r, "var-init");
      switch (B) {
        case As.TOP_LEFT:
          return new jn(new Zn(A, Q), new Zn(A, Q - o), new Zn(i - s, e), new Zn(i, e));
        case As.TOP_RIGHT:
          return new jn(new Zn(A, e), new Zn(A + s, e), new Zn(i, Q - o), new Zn(i, Q));
        case As.BOTTOM_RIGHT:
          return new jn(new Zn(i, e), new Zn(i, e + o), new Zn(A + s, Q), new Zn(A, Q));
        default:
          As.BOTTOM_LEFT;
          return new jn(new Zn(i, Q), new Zn(i - s, Q), new Zn(A, e + o), new Zn(A, e));
      }
    },
    os = function (A, e, t) {
      this.offsetX = cc11001100_hook("this.offsetX", A, "assign"), this.offsetY = cc11001100_hook("this.offsetY", e, "assign"), this.matrix = cc11001100_hook("this.matrix", t, "assign"), this.type = cc11001100_hook("this.type", 0, "assign"), this.target = cc11001100_hook("this.target", 6, "assign");
    },
    is = function (A, e) {
      this.path = cc11001100_hook("this.path", A, "assign"), this.target = cc11001100_hook("this.target", e, "assign"), this.type = cc11001100_hook("this.type", 1, "assign");
    },
    Qs = function (A) {
      this.opacity = cc11001100_hook("this.opacity", A, "assign"), this.type = cc11001100_hook("this.type", 2, "assign"), this.target = cc11001100_hook("this.target", 6, "assign");
    },
    cs = function (A) {
      this.element = cc11001100_hook("this.element", A, "assign"), this.inlineLevel = cc11001100_hook("this.inlineLevel", [], "assign"), this.nonInlineLevel = cc11001100_hook("this.nonInlineLevel", [], "assign"), this.negativeZIndex = cc11001100_hook("this.negativeZIndex", [], "assign"), this.zeroOrAutoZIndexOrTransformedOrOpacity = cc11001100_hook("this.zeroOrAutoZIndexOrTransformedOrOpacity", [], "assign"), this.positiveZIndex = cc11001100_hook("this.positiveZIndex", [], "assign"), this.nonPositionedFloats = cc11001100_hook("this.nonPositionedFloats", [], "assign"), this.nonPositionedInlineLevel = cc11001100_hook("this.nonPositionedInlineLevel", [], "assign");
    },
    as = cc11001100_hook("as", (gs.prototype.getEffects = cc11001100_hook("gs.prototype.getEffects", function (e) {
      for (var A = cc11001100_hook("A", -1 === [2, 3].indexOf(this.container.styles.position), "var-init"), t = cc11001100_hook("t", this.parent, "var-init"), r = cc11001100_hook("r", this.effects.slice(0), "var-init"); t;) {
        var B,
          n,
          s = cc11001100_hook("s", t.effects.filter(function (A) {
            return !Bs(A);
          }), "var-init");
        A || 0 !== t.container.styles.position || !t.parent ? (r.unshift.apply(r, s), A = cc11001100_hook("A", -1 === [2, 3].indexOf(t.container.styles.position), "assign"), 0 !== t.container.styles.overflowX && (B = cc11001100_hook("B", ts(t.curves), "assign"), n = cc11001100_hook("n", rs(t.curves), "assign"), ns(B, n) || r.unshift(new is(n, 6)))) : r.unshift.apply(r, s), t = cc11001100_hook("t", t.parent, "assign");
      }
      return r.filter(function (A) {
        return Pt(A.target, e);
      });
    }, "assign"), gs), "var-init");
  function gs(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var t, r;
    this.container = cc11001100_hook("this.container", A, "assign"), this.parent = cc11001100_hook("this.parent", e, "assign"), this.effects = cc11001100_hook("this.effects", [], "assign"), this.curves = cc11001100_hook("this.curves", new es(this.container), "assign"), this.container.styles.opacity < 1 && this.effects.push(new Qs(this.container.styles.opacity)), null !== this.container.styles.transform && (e = cc11001100_hook("e", this.container.bounds.left + this.container.styles.transformOrigin[0].number, "assign"), t = cc11001100_hook("t", this.container.bounds.top + this.container.styles.transformOrigin[1].number, "assign"), r = cc11001100_hook("r", this.container.styles.transform, "assign"), this.effects.push(new os(e, t, r))), 0 !== this.container.styles.overflowX && (t = cc11001100_hook("t", ts(this.curves), "assign"), r = cc11001100_hook("r", rs(this.curves), "assign"), ns(t, r) ? this.effects.push(new is(t, 6)) : (this.effects.push(new is(t, 2)), this.effects.push(new is(r, 4))));
  }
  function ws(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    switch (e) {
      case 0:
        return Hs(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
      case 1:
        return Hs(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
      case 2:
        return Hs(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
      default:
        return Hs(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
    }
  }
  function Us(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", A.bounds, "var-init"),
      A = cc11001100_hook("A", A.styles, "var-init");
    return e.add(A.borderLeftWidth, A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth), -(A.borderTopWidth + A.borderBottomWidth));
  }
  function ls(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", A.styles, "var-init"),
      t = cc11001100_hook("t", A.bounds, "var-init"),
      r = cc11001100_hook("r", Ue(e.paddingLeft, t.width), "var-init"),
      B = cc11001100_hook("B", Ue(e.paddingRight, t.width), "var-init"),
      n = cc11001100_hook("n", Ue(e.paddingTop, t.width), "var-init"),
      A = cc11001100_hook("A", Ue(e.paddingBottom, t.width), "var-init");
    return t.add(r + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + B), -(e.borderTopWidth + e.borderBottomWidth + n + A));
  }
  function Cs(A, e, t) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", (B = cc11001100_hook("B", Es(A.styles.backgroundOrigin, e), "assign"), n = cc11001100_hook("n", A, "assign"), 0 === B ? n.bounds : (2 === B ? ls : Us)(n)), "var-init"),
      B = cc11001100_hook("B", (s = cc11001100_hook("s", Es(A.styles.backgroundClip, e), "assign"), o = cc11001100_hook("o", A, "assign"), 0 === s ? o.bounds : (2 === s ? ls : Us)(o)), "var-init"),
      n = cc11001100_hook("n", ps(Es(A.styles.backgroundSize, e), t, r), "var-init"),
      s = cc11001100_hook("s", n[0], "var-init"),
      o = cc11001100_hook("o", n[1], "var-init"),
      t = cc11001100_hook("t", Be(Es(A.styles.backgroundPosition, e), r.width - s, r.height - o), "var-init");
    return [Is(Es(A.styles.backgroundRepeat, e), t, n, r, B), Math.round(r.left + t[0]), Math.round(r.top + t[1]), s, o];
  }
  function us(A) {
    cc11001100_hook("A", A, "function-parameter");
    return _A(A) && A.value === Ve.AUTO;
  }
  function Fs(A) {
    cc11001100_hook("A", A, "function-parameter");
    return "number" == typeof A;
  }
  var hs = function (Q, c, a, g) {
      Q.container.elements.forEach(function (A) {
        var e = cc11001100_hook("e", Pt(A.flags, 4), "var-init"),
          t = cc11001100_hook("t", Pt(A.flags, 2), "var-init"),
          r = cc11001100_hook("r", new as(A, Q), "var-init");
        Pt(A.styles.display, 2048) && g.push(r);
        var B,
          n,
          s,
          o,
          i = cc11001100_hook("i", Pt(A.flags, 8) ? [] : g, "var-init");
        e || t ? (B = cc11001100_hook("B", e || A.styles.isPositioned() ? a : c, "assign"), t = cc11001100_hook("t", new cs(r), "assign"), A.styles.isPositioned() || A.styles.opacity < 1 || A.styles.isTransformed() ? (n = cc11001100_hook("n", A.styles.zIndex.order, "assign")) < 0 ? (s = cc11001100_hook("s", 0, "assign"), B.negativeZIndex.some(function (A, e) {
          return n > A.element.container.styles.zIndex.order ? (s = cc11001100_hook("s", e, "assign"), !1) : 0 < s;
        }), B.negativeZIndex.splice(s, 0, t)) : 0 < n ? (o = cc11001100_hook("o", 0, "assign"), B.positiveZIndex.some(function (A, e) {
          return n >= A.element.container.styles.zIndex.order ? (o = cc11001100_hook("o", e + 1, "assign"), !1) : 0 < o;
        }), B.positiveZIndex.splice(o, 0, t)) : B.zeroOrAutoZIndexOrTransformedOrOpacity.push(t) : (A.styles.isFloating() ? B.nonPositionedFloats : B.nonPositionedInlineLevel).push(t), hs(r, t, e ? t : a, i)) : ((A.styles.isInlineLevel() ? c.inlineLevel : c.nonInlineLevel).push(r), hs(r, c, a, i)), Pt(A.flags, 8) && ds(A, i);
      });
    },
    ds = function (A, e) {
      for (var t = cc11001100_hook("t", A instanceof UB ? A.start : 1, "var-init"), r = cc11001100_hook("r", A instanceof UB && A.reversed, "var-init"), B = cc11001100_hook("B", 0, "var-init"); B < e.length; B++) {
        var n = cc11001100_hook("n", e[B], "var-init");
        n.container instanceof aB && "number" == typeof n.container.value && 0 !== n.container.value && (t = cc11001100_hook("t", n.container.value, "assign")), n.listValue = cc11001100_hook("n.listValue", Fn(t, n.container.styles.listStyleType, !0), "assign"), t += cc11001100_hook("t", r ? -1 : 1, "assign");
      }
    },
    fs = function (A, e) {
      var t = cc11001100_hook("t", [], "var-init");
      return $n(A) ? t.push(A.subdivide(.5, !1)) : t.push(A), $n(e) ? t.push(e.subdivide(.5, !0)) : t.push(e), t;
    },
    Hs = function (A, e, t, r) {
      var B = cc11001100_hook("B", [], "var-init");
      return $n(A) ? B.push(A.subdivide(.5, !1)) : B.push(A), $n(t) ? B.push(t.subdivide(.5, !0)) : B.push(t), $n(r) ? B.push(r.subdivide(.5, !0).reverse()) : B.push(r), $n(e) ? B.push(e.subdivide(.5, !1).reverse()) : B.push(e), B;
    },
    ps = function (A, e, t) {
      var r = cc11001100_hook("r", e[0], "var-init"),
        B = cc11001100_hook("B", e[1], "var-init"),
        n = cc11001100_hook("n", e[2], "var-init"),
        s = cc11001100_hook("s", A[0], "var-init"),
        o = cc11001100_hook("o", A[1], "var-init");
      if (!s) return [0, 0];
      if (te(s) && o && te(o)) return [Ue(s, t.width), Ue(o, t.height)];
      var i = cc11001100_hook("i", Fs(n), "var-init");
      if (_A(s) && (s.value === Ve.CONTAIN || s.value === Ve.COVER)) return Fs(n) ? t.width / t.height < n != (s.value === Ve.COVER) ? [t.width, t.width / n] : [t.height * n, t.height] : [t.width, t.height];
      var Q = cc11001100_hook("Q", Fs(r), "var-init"),
        e = cc11001100_hook("e", Fs(B), "var-init"),
        A = cc11001100_hook("A", Q || e, "var-init");
      if (us(s) && (!o || us(o))) return Q && e ? [r, B] : i || A ? A && i ? [Q ? r : B * n, e ? B : r / n] : [Q ? r : t.width, e ? B : t.height] : [t.width, t.height];
      if (i) {
        var c = cc11001100_hook("c", 0, "var-init"),
          a = cc11001100_hook("a", 0, "var-init");
        return te(s) ? c = cc11001100_hook("c", Ue(s, t.width), "assign") : te(o) && (a = cc11001100_hook("a", Ue(o, t.height), "assign")), us(s) ? c = cc11001100_hook("c", a * n, "assign") : o && !us(o) || (a = cc11001100_hook("a", c / n, "assign")), [c, a];
      }
      c = cc11001100_hook("c", null, "assign"), a = cc11001100_hook("a", null, "assign");
      if (te(s) ? c = cc11001100_hook("c", Ue(s, t.width), "assign") : o && te(o) && (a = cc11001100_hook("a", Ue(o, t.height), "assign")), null !== (c = cc11001100_hook("c", null !== (a = cc11001100_hook("a", null !== c && (!o || us(o)) ? Q && e ? c / r * B : t.height : a, "assign")) && us(s) ? Q && e ? a / B * r : t.width : c, "assign")) && null !== a) return [c, a];
      throw new Error("Unable to calculate background-size for element");
    },
    Es = function (A, e) {
      e = cc11001100_hook("e", A[e], "assign");
      return void 0 === e ? A[0] : e;
    },
    Is = function (A, e, t, r, B) {
      var n = cc11001100_hook("n", e[0], "var-init"),
        s = cc11001100_hook("s", e[1], "var-init"),
        o = cc11001100_hook("o", t[0], "var-init"),
        i = cc11001100_hook("i", t[1], "var-init");
      switch (A) {
        case 2:
          return [new Zn(Math.round(r.left), Math.round(r.top + s)), new Zn(Math.round(r.left + r.width), Math.round(r.top + s)), new Zn(Math.round(r.left + r.width), Math.round(i + r.top + s)), new Zn(Math.round(r.left), Math.round(i + r.top + s))];
        case 3:
          return [new Zn(Math.round(r.left + n), Math.round(r.top)), new Zn(Math.round(r.left + n + o), Math.round(r.top)), new Zn(Math.round(r.left + n + o), Math.round(r.height + r.top)), new Zn(Math.round(r.left + n), Math.round(r.height + r.top))];
        case 1:
          return [new Zn(Math.round(r.left + n), Math.round(r.top + s)), new Zn(Math.round(r.left + n + o), Math.round(r.top + s)), new Zn(Math.round(r.left + n + o), Math.round(r.top + s + i)), new Zn(Math.round(r.left + n), Math.round(r.top + s + i))];
        default:
          return [new Zn(Math.round(B.left), Math.round(B.top)), new Zn(Math.round(B.left + B.width), Math.round(B.top)), new Zn(Math.round(B.left + B.width), Math.round(B.height + B.top)), new Zn(Math.round(B.left), Math.round(B.height + B.top))];
      }
    },
    ys = cc11001100_hook("ys", "Hidden Text", "var-init"),
    Ks = cc11001100_hook("Ks", (ms.prototype.parseMetrics = cc11001100_hook("ms.prototype.parseMetrics", function (A, e) {
      var t = cc11001100_hook("t", this._document.createElement("div"), "var-init"),
        r = cc11001100_hook("r", this._document.createElement("img"), "var-init"),
        B = cc11001100_hook("B", this._document.createElement("span"), "var-init"),
        n = cc11001100_hook("n", this._document.body, "var-init");
      t.style.visibility = cc11001100_hook("t.style.visibility", "hidden", "assign"), t.style.fontFamily = cc11001100_hook("t.style.fontFamily", A, "assign"), t.style.fontSize = cc11001100_hook("t.style.fontSize", e, "assign"), t.style.margin = cc11001100_hook("t.style.margin", "0", "assign"), t.style.padding = cc11001100_hook("t.style.padding", "0", "assign"), t.style.whiteSpace = cc11001100_hook("t.style.whiteSpace", "nowrap", "assign"), n.appendChild(t), r.src = cc11001100_hook("r.src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", "assign"), r.width = cc11001100_hook("r.width", 1, "assign"), r.height = cc11001100_hook("r.height", 1, "assign"), r.style.margin = cc11001100_hook("r.style.margin", "0", "assign"), r.style.padding = cc11001100_hook("r.style.padding", "0", "assign"), r.style.verticalAlign = cc11001100_hook("r.style.verticalAlign", "baseline", "assign"), B.style.fontFamily = cc11001100_hook("B.style.fontFamily", A, "assign"), B.style.fontSize = cc11001100_hook("B.style.fontSize", e, "assign"), B.style.margin = cc11001100_hook("B.style.margin", "0", "assign"), B.style.padding = cc11001100_hook("B.style.padding", "0", "assign"), B.appendChild(this._document.createTextNode(ys)), t.appendChild(B), t.appendChild(r);
      e = cc11001100_hook("e", r.offsetTop - B.offsetTop + 2, "assign");
      t.removeChild(B), t.appendChild(this._document.createTextNode(ys)), t.style.lineHeight = cc11001100_hook("t.style.lineHeight", "normal", "assign"), r.style.verticalAlign = cc11001100_hook("r.style.verticalAlign", "super", "assign");
      r = cc11001100_hook("r", r.offsetTop - t.offsetTop + 2, "assign");
      return n.removeChild(t), {
        baseline: cc11001100_hook("baseline", e, "object-key-init"),
        middle: cc11001100_hook("middle", r, "object-key-init")
      };
    }, "assign"), ms.prototype.getMetrics = cc11001100_hook("ms.prototype.getMetrics", function (A, e) {
      var t = cc11001100_hook("t", A + " " + e, "var-init");
      return void 0 === this._data[t] && (this._data[t] = cc11001100_hook("this._data[t]", this.parseMetrics(A, e), "assign")), this._data[t];
    }, "assign"), ms), "var-init");
  function ms(A) {
    cc11001100_hook("A", A, "function-parameter");
    this._data = cc11001100_hook("this._data", {}, "assign"), this._document = cc11001100_hook("this._document", A, "assign");
  }
  var Ls,
    he = function (A, e) {
      this.context = cc11001100_hook("this.context", A, "assign"), this.options = cc11001100_hook("this.options", e, "assign");
    },
    bs = cc11001100_hook("bs", (A(Ds, Ls = cc11001100_hook("Ls", he, "assign")), Ds.prototype.applyEffects = cc11001100_hook("Ds.prototype.applyEffects", function (A) {
      for (var e = cc11001100_hook("e", this, "var-init"); this._activeEffects.length;) this.popEffect();
      A.forEach(function (A) {
        return e.applyEffect(A);
      });
    }, "assign"), Ds.prototype.applyEffect = cc11001100_hook("Ds.prototype.applyEffect", function (A) {
      this.ctx.save(), 2 === A.type && (this.ctx.globalAlpha = cc11001100_hook("this.ctx.globalAlpha", A.opacity, "assign")), 0 === A.type && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), Bs(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A);
    }, "assign"), Ds.prototype.popEffect = cc11001100_hook("Ds.prototype.popEffect", function () {
      this._activeEffects.pop(), this.ctx.restore();
    }, "assign"), Ds.prototype.renderStack = cc11001100_hook("Ds.prototype.renderStack", function (e) {
      return a(this, void 0, void 0, function () {
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              return e.element.container.styles.isVisible() ? [4, this.renderStackContent(e)] : [3, 2];
            case 1:
              A.sent(), A.label = cc11001100_hook("A.label", 2, "assign");
            case 2:
              return [2];
          }
        });
      });
    }, "assign"), Ds.prototype.renderNode = cc11001100_hook("Ds.prototype.renderNode", function (e) {
      return a(this, void 0, void 0, function () {
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              return Pt(e.container.flags, 16), e.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(e)] : [3, 3];
            case 1:
              return A.sent(), [4, this.renderNodeContent(e)];
            case 2:
              A.sent(), A.label = cc11001100_hook("A.label", 3, "assign");
            case 3:
              return [2];
          }
        });
      });
    }, "assign"), Ds.prototype.renderTextWithLetterSpacing = cc11001100_hook("Ds.prototype.renderTextWithLetterSpacing", function (t, A, r) {
      var B = cc11001100_hook("B", this, "var-init");
      0 === A ? this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + r) : Zr(t.text).reduce(function (A, e) {
        return B.ctx.fillText(e, A, t.bounds.top + r), A + B.ctx.measureText(e).width;
      }, t.bounds.left);
    }, "assign"), Ds.prototype.createFontStyle = cc11001100_hook("Ds.prototype.createFontStyle", function (A) {
      var e = cc11001100_hook("e", A.fontVariant.filter(function (A) {
          return "normal" === A || "small-caps" === A;
        }).join(""), "var-init"),
        t = cc11001100_hook("t", Gs(A.fontFamily).join(", "), "var-init"),
        r = cc11001100_hook("r", WA(A.fontSize) ? "" + A.fontSize.number + A.fontSize.unit : A.fontSize.number + "px", "var-init");
      return [[A.fontStyle, e, A.fontWeight, r, t].join(" "), t, r];
    }, "assign"), Ds.prototype.renderTextNode = cc11001100_hook("Ds.prototype.renderTextNode", function (i, Q) {
      return a(this, void 0, void 0, function () {
        var e,
          t,
          r,
          B,
          n,
          s,
          o = cc11001100_hook("o", this, "var-init");
        return H(this, function (A) {
          return r = cc11001100_hook("r", this.createFontStyle(Q), "assign"), e = cc11001100_hook("e", r[0], "assign"), t = cc11001100_hook("t", r[1], "assign"), r = cc11001100_hook("r", r[2], "assign"), this.ctx.font = cc11001100_hook("this.ctx.font", e, "assign"), this.ctx.direction = cc11001100_hook("this.ctx.direction", 1 === Q.direction ? "rtl" : "ltr", "assign"), this.ctx.textAlign = cc11001100_hook("this.ctx.textAlign", "left", "assign"), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "alphabetic", "assign"), r = cc11001100_hook("r", this.fontMetrics.getMetrics(t, r), "assign"), B = cc11001100_hook("B", r.baseline, "assign"), n = cc11001100_hook("n", r.middle, "assign"), s = cc11001100_hook("s", Q.paintOrder, "assign"), i.textBounds.forEach(function (t) {
            s.forEach(function (A) {
              switch (A) {
                case 0:
                  o.ctx.fillStyle = cc11001100_hook("o.ctx.fillStyle", ie(Q.color), "assign"), o.renderTextWithLetterSpacing(t, Q.letterSpacing, B);
                  var e = cc11001100_hook("e", Q.textShadow, "var-init");
                  e.length && t.text.trim().length && (e.slice(0).reverse().forEach(function (A) {
                    o.ctx.shadowColor = cc11001100_hook("o.ctx.shadowColor", ie(A.color), "assign"), o.ctx.shadowOffsetX = cc11001100_hook("o.ctx.shadowOffsetX", A.offsetX.number * o.options.scale, "assign"), o.ctx.shadowOffsetY = cc11001100_hook("o.ctx.shadowOffsetY", A.offsetY.number * o.options.scale, "assign"), o.ctx.shadowBlur = cc11001100_hook("o.ctx.shadowBlur", A.blur.number, "assign"), o.renderTextWithLetterSpacing(t, Q.letterSpacing, B);
                  }), o.ctx.shadowColor = cc11001100_hook("o.ctx.shadowColor", "", "assign"), o.ctx.shadowOffsetX = cc11001100_hook("o.ctx.shadowOffsetX", 0, "assign"), o.ctx.shadowOffsetY = cc11001100_hook("o.ctx.shadowOffsetY", 0, "assign"), o.ctx.shadowBlur = cc11001100_hook("o.ctx.shadowBlur", 0, "assign")), Q.textDecorationLine.length && (o.ctx.fillStyle = cc11001100_hook("o.ctx.fillStyle", ie(Q.textDecorationColor || Q.color), "assign"), Q.textDecorationLine.forEach(function (A) {
                    switch (A) {
                      case 1:
                        o.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top + B), t.bounds.width, 1);
                        break;
                      case 2:
                        o.ctx.fillRect(t.bounds.left, Math.round(t.bounds.top), t.bounds.width, 1);
                        break;
                      case 3:
                        o.ctx.fillRect(t.bounds.left, Math.ceil(t.bounds.top + n), t.bounds.width, 1);
                    }
                  }));
                  break;
                case 1:
                  Q.webkitTextStrokeWidth && t.text.trim().length && (o.ctx.strokeStyle = cc11001100_hook("o.ctx.strokeStyle", ie(Q.webkitTextStrokeColor), "assign"), o.ctx.lineWidth = cc11001100_hook("o.ctx.lineWidth", Q.webkitTextStrokeWidth, "assign"), o.ctx.lineJoin = cc11001100_hook("o.ctx.lineJoin", window.chrome ? "miter" : "round", "assign"), o.ctx.strokeText(t.text, t.bounds.left, t.bounds.top + B)), o.ctx.strokeStyle = cc11001100_hook("o.ctx.strokeStyle", "", "assign"), o.ctx.lineWidth = cc11001100_hook("o.ctx.lineWidth", 0, "assign"), o.ctx.lineJoin = cc11001100_hook("o.ctx.lineJoin", "miter", "assign");
              }
            });
          }), [2];
        });
      });
    }, "assign"), Ds.prototype.renderReplacedElement = cc11001100_hook("Ds.prototype.renderReplacedElement", function (A, e, t) {
      var r;
      t && 0 < A.intrinsicWidth && 0 < A.intrinsicHeight && (r = cc11001100_hook("r", ls(A), "assign"), e = cc11001100_hook("e", rs(e), "assign"), this.path(e), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(t, 0, 0, A.intrinsicWidth, A.intrinsicHeight, r.left, r.top, r.width, r.height), this.ctx.restore());
    }, "assign"), Ds.prototype.renderNodeContent = cc11001100_hook("Ds.prototype.renderNodeContent", function (w) {
      return a(this, void 0, void 0, function () {
        var e, t, r, B, n, s, o, i, Q, c, a, g;
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              this.applyEffects(w.getEffects(4)), e = cc11001100_hook("e", w.container, "assign"), t = cc11001100_hook("t", w.curves, "assign"), r = cc11001100_hook("r", e.styles, "assign"), B = cc11001100_hook("B", 0, "assign"), n = cc11001100_hook("n", e.textNodes, "assign"), A.label = cc11001100_hook("A.label", 1, "assign");
            case 1:
              return B < n.length ? (s = cc11001100_hook("s", n[B], "assign"), [4, this.renderTextNode(s, r)]) : [3, 4];
            case 2:
              A.sent(), A.label = cc11001100_hook("A.label", 3, "assign");
            case 3:
              return B++, [3, 1];
            case 4:
              if (!(e instanceof tB)) return [3, 8];
              A.label = cc11001100_hook("A.label", 5, "assign");
            case 5:
              return A.trys.push([5, 7,, 8]), [4, this.context.cache.match(e.src)];
            case 6:
              return Q = cc11001100_hook("Q", A.sent(), "assign"), this.renderReplacedElement(e, t, Q), [3, 8];
            case 7:
              return A.sent(), this.context.logger.error("Error loading image " + e.src), [3, 8];
            case 8:
              if (e instanceof nB && this.renderReplacedElement(e, t, e.canvas), !(e instanceof iB)) return [3, 12];
              A.label = cc11001100_hook("A.label", 9, "assign");
            case 9:
              return A.trys.push([9, 11,, 12]), [4, this.context.cache.match(e.svg)];
            case 10:
              return Q = cc11001100_hook("Q", A.sent(), "assign"), this.renderReplacedElement(e, t, Q), [3, 12];
            case 11:
              return A.sent(), this.context.logger.error("Error loading svg " + e.svg.substring(0, 255)), [3, 12];
            case 12:
              return e instanceof vB && e.tree ? [4, new Ds(this.context, {
                scale: cc11001100_hook("scale", this.options.scale, "object-key-init"),
                backgroundColor: cc11001100_hook("backgroundColor", e.backgroundColor, "object-key-init"),
                x: cc11001100_hook("x", 0, "object-key-init"),
                y: cc11001100_hook("y", 0, "object-key-init"),
                width: cc11001100_hook("width", e.width, "object-key-init"),
                height: cc11001100_hook("height", e.height, "object-key-init")
              }).render(e.tree)] : [3, 14];
            case 13:
              s = cc11001100_hook("s", A.sent(), "assign"), e.width && e.height && this.ctx.drawImage(s, 0, 0, e.width, e.height, e.bounds.left, e.bounds.top, e.bounds.width, e.bounds.height), A.label = cc11001100_hook("A.label", 14, "assign");
            case 14:
              if (e instanceof pB && (i = cc11001100_hook("i", Math.min(e.bounds.width, e.bounds.height), "assign"), e.type === hB ? e.checked && (this.ctx.save(), this.path([new Zn(e.bounds.left + .39363 * i, e.bounds.top + .79 * i), new Zn(e.bounds.left + .16 * i, e.bounds.top + .5549 * i), new Zn(e.bounds.left + .27347 * i, e.bounds.top + .44071 * i), new Zn(e.bounds.left + .39694 * i, e.bounds.top + .5649 * i), new Zn(e.bounds.left + .72983 * i, e.bounds.top + .23 * i), new Zn(e.bounds.left + .84 * i, e.bounds.top + .34085 * i), new Zn(e.bounds.left + .39363 * i, e.bounds.top + .79 * i)]), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", ie(HB), "assign"), this.ctx.fill(), this.ctx.restore()) : e.type === dB && e.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(e.bounds.left + i / 2, e.bounds.top + i / 2, i / 4, 0, 2 * Math.PI, !0), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", ie(HB), "assign"), this.ctx.fill(), this.ctx.restore())), xs(e) && e.value.length) {
                switch (c = cc11001100_hook("c", this.createFontStyle(r), "assign"), a = cc11001100_hook("a", c[0], "assign"), i = cc11001100_hook("i", c[1], "assign"), c = cc11001100_hook("c", this.fontMetrics.getMetrics(a, i).baseline, "assign"), this.ctx.font = cc11001100_hook("this.ctx.font", a, "assign"), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", ie(r.color), "assign"), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "alphabetic", "assign"), this.ctx.textAlign = cc11001100_hook("this.ctx.textAlign", Ss(e.styles.textAlign), "assign"), g = cc11001100_hook("g", ls(e), "assign"), o = cc11001100_hook("o", 0, "assign"), e.styles.textAlign) {
                  case 1:
                    o += cc11001100_hook("o", g.width / 2, "assign");
                    break;
                  case 2:
                    o += cc11001100_hook("o", g.width, "assign");
                }
                i = cc11001100_hook("i", g.add(o, 0, 0, -g.height / 2 + 1), "assign"), this.ctx.save(), this.path([new Zn(g.left, g.top), new Zn(g.left + g.width, g.top), new Zn(g.left + g.width, g.top + g.height), new Zn(g.left, g.top + g.height)]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Jr(e.value, i), r.letterSpacing, c), this.ctx.restore(), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "alphabetic", "assign"), this.ctx.textAlign = cc11001100_hook("this.ctx.textAlign", "left", "assign");
              }
              if (!Pt(e.styles.display, 2048)) return [3, 20];
              if (null === e.styles.listStyleImage) return [3, 19];
              if (0 !== (c = cc11001100_hook("c", e.styles.listStyleImage, "assign")).type) return [3, 18];
              Q = cc11001100_hook("Q", void 0, "assign"), c = cc11001100_hook("c", c.url, "assign"), A.label = cc11001100_hook("A.label", 15, "assign");
            case 15:
              return A.trys.push([15, 17,, 18]), [4, this.context.cache.match(c)];
            case 16:
              return Q = cc11001100_hook("Q", A.sent(), "assign"), this.ctx.drawImage(Q, e.bounds.left - (Q.width + 10), e.bounds.top), [3, 18];
            case 17:
              return A.sent(), this.context.logger.error("Error loading list-style-image " + c), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              w.listValue && -1 !== e.styles.listStyleType && (a = cc11001100_hook("a", this.createFontStyle(r)[0], "assign"), this.ctx.font = cc11001100_hook("this.ctx.font", a, "assign"), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", ie(r.color), "assign"), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "middle", "assign"), this.ctx.textAlign = cc11001100_hook("this.ctx.textAlign", "right", "assign"), g = cc11001100_hook("g", new d(e.bounds.left, e.bounds.top + Ue(e.styles.paddingTop, e.bounds.width), e.bounds.width, Ye(r.lineHeight, r.fontSize.number) / 2 + 1), "assign"), this.renderTextWithLetterSpacing(new Jr(w.listValue, g), r.letterSpacing, Ye(r.lineHeight, r.fontSize.number) / 2 + 2), this.ctx.textBaseline = cc11001100_hook("this.ctx.textBaseline", "bottom", "assign"), this.ctx.textAlign = cc11001100_hook("this.ctx.textAlign", "left", "assign")), A.label = cc11001100_hook("A.label", 20, "assign");
            case 20:
              return [2];
          }
        });
      });
    }, "assign"), Ds.prototype.renderStackContent = cc11001100_hook("Ds.prototype.renderStackContent", function (C) {
      return a(this, void 0, void 0, function () {
        var e, t, r, B, n, s, o, i, Q, c, a, g, w, U, l;
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              return Pt(C.element.container.flags, 16), [4, this.renderNodeBackgroundAndBorders(C.element)];
            case 1:
              A.sent(), e = cc11001100_hook("e", 0, "assign"), t = cc11001100_hook("t", C.negativeZIndex, "assign"), A.label = cc11001100_hook("A.label", 2, "assign");
            case 2:
              return e < t.length ? (l = cc11001100_hook("l", t[e], "assign"), [4, this.renderStack(l)]) : [3, 5];
            case 3:
              A.sent(), A.label = cc11001100_hook("A.label", 4, "assign");
            case 4:
              return e++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(C.element)];
            case 6:
              A.sent(), r = cc11001100_hook("r", 0, "assign"), B = cc11001100_hook("B", C.nonInlineLevel, "assign"), A.label = cc11001100_hook("A.label", 7, "assign");
            case 7:
              return r < B.length ? (l = cc11001100_hook("l", B[r], "assign"), [4, this.renderNode(l)]) : [3, 10];
            case 8:
              A.sent(), A.label = cc11001100_hook("A.label", 9, "assign");
            case 9:
              return r++, [3, 7];
            case 10:
              n = cc11001100_hook("n", 0, "assign"), s = cc11001100_hook("s", C.nonPositionedFloats, "assign"), A.label = cc11001100_hook("A.label", 11, "assign");
            case 11:
              return n < s.length ? (l = cc11001100_hook("l", s[n], "assign"), [4, this.renderStack(l)]) : [3, 14];
            case 12:
              A.sent(), A.label = cc11001100_hook("A.label", 13, "assign");
            case 13:
              return n++, [3, 11];
            case 14:
              o = cc11001100_hook("o", 0, "assign"), i = cc11001100_hook("i", C.nonPositionedInlineLevel, "assign"), A.label = cc11001100_hook("A.label", 15, "assign");
            case 15:
              return o < i.length ? (l = cc11001100_hook("l", i[o], "assign"), [4, this.renderStack(l)]) : [3, 18];
            case 16:
              A.sent(), A.label = cc11001100_hook("A.label", 17, "assign");
            case 17:
              return o++, [3, 15];
            case 18:
              Q = cc11001100_hook("Q", 0, "assign"), c = cc11001100_hook("c", C.inlineLevel, "assign"), A.label = cc11001100_hook("A.label", 19, "assign");
            case 19:
              return Q < c.length ? (l = cc11001100_hook("l", c[Q], "assign"), [4, this.renderNode(l)]) : [3, 22];
            case 20:
              A.sent(), A.label = cc11001100_hook("A.label", 21, "assign");
            case 21:
              return Q++, [3, 19];
            case 22:
              a = cc11001100_hook("a", 0, "assign"), g = cc11001100_hook("g", C.zeroOrAutoZIndexOrTransformedOrOpacity, "assign"), A.label = cc11001100_hook("A.label", 23, "assign");
            case 23:
              return a < g.length ? (l = cc11001100_hook("l", g[a], "assign"), [4, this.renderStack(l)]) : [3, 26];
            case 24:
              A.sent(), A.label = cc11001100_hook("A.label", 25, "assign");
            case 25:
              return a++, [3, 23];
            case 26:
              w = cc11001100_hook("w", 0, "assign"), U = cc11001100_hook("U", C.positiveZIndex, "assign"), A.label = cc11001100_hook("A.label", 27, "assign");
            case 27:
              return w < U.length ? (l = cc11001100_hook("l", U[w], "assign"), [4, this.renderStack(l)]) : [3, 30];
            case 28:
              A.sent(), A.label = cc11001100_hook("A.label", 29, "assign");
            case 29:
              return w++, [3, 27];
            case 30:
              return [2];
          }
        });
      });
    }, "assign"), Ds.prototype.mask = cc11001100_hook("Ds.prototype.mask", function (A) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath();
    }, "assign"), Ds.prototype.path = cc11001100_hook("Ds.prototype.path", function (A) {
      this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath();
    }, "assign"), Ds.prototype.formatPath = cc11001100_hook("Ds.prototype.formatPath", function (A) {
      var r = cc11001100_hook("r", this, "var-init");
      A.forEach(function (A, e) {
        var t = cc11001100_hook("t", $n(A) ? A.start : A, "var-init");
        0 === e ? r.ctx.moveTo(t.x, t.y) : r.ctx.lineTo(t.x, t.y), $n(A) && r.ctx.bezierCurveTo(A.startControl.x, A.startControl.y, A.endControl.x, A.endControl.y, A.end.x, A.end.y);
      });
    }, "assign"), Ds.prototype.renderRepeat = cc11001100_hook("Ds.prototype.renderRepeat", function (A, e, t, r) {
      this.path(A), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", e, "assign"), this.ctx.translate(t, r), this.ctx.fill(), this.ctx.translate(-t, -r);
    }, "assign"), Ds.prototype.resizeImage = cc11001100_hook("Ds.prototype.resizeImage", function (A, e, t) {
      if (A.width === e && A.height === t) return A;
      var r = cc11001100_hook("r", (null !== (r = cc11001100_hook("r", this.canvas.ownerDocument, "assign")) && void 0 !== r ? r : document).createElement("canvas"), "var-init");
      return r.width = cc11001100_hook("r.width", Math.max(1, e), "assign"), r.height = cc11001100_hook("r.height", Math.max(1, t), "assign"), r.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, e, t), r;
    }, "assign"), Ds.prototype.renderBackgroundImage = cc11001100_hook("Ds.prototype.renderBackgroundImage", function (f) {
      return a(this, void 0, void 0, function () {
        var h, e, d, t, r, B;
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              h = cc11001100_hook("h", f.styles.backgroundImage.length - 1, "assign"), e = cc11001100_hook("e", function (e) {
                var t, r, B, n, s, o, i, Q, c, a, g, w, U, l, C, u, F;
                return H(this, function (A) {
                  switch (A.label) {
                    case 0:
                      if (0 !== e.type) return [3, 5];
                      t = cc11001100_hook("t", void 0, "assign"), r = cc11001100_hook("r", e.url, "assign"), A.label = cc11001100_hook("A.label", 1, "assign");
                    case 1:
                      return A.trys.push([1, 3,, 4]), [4, d.context.cache.match(r)];
                    case 2:
                      return t = cc11001100_hook("t", A.sent(), "assign"), [3, 4];
                    case 3:
                      return A.sent(), d.context.logger.error("Error loading background-image " + r), [3, 4];
                    case 4:
                      return t && (B = cc11001100_hook("B", Cs(f, h, [t.width, t.height, t.width / t.height]), "assign"), o = cc11001100_hook("o", B[0], "assign"), g = cc11001100_hook("g", B[1], "assign"), w = cc11001100_hook("w", B[2], "assign"), c = cc11001100_hook("c", B[3], "assign"), a = cc11001100_hook("a", B[4], "assign"), s = cc11001100_hook("s", d.ctx.createPattern(d.resizeImage(t, c, a), "repeat"), "assign"), d.renderRepeat(o, s, g, w)), [3, 6];
                    case 5:
                      1 === e.type ? (F = cc11001100_hook("F", Cs(f, h, [null, null, null]), "assign"), o = cc11001100_hook("o", F[0], "assign"), g = cc11001100_hook("g", F[1], "assign"), w = cc11001100_hook("w", F[2], "assign"), c = cc11001100_hook("c", F[3], "assign"), a = cc11001100_hook("a", F[4], "assign"), C = cc11001100_hook("C", Ee(e.angle, c, a), "assign"), l = cc11001100_hook("l", C[0], "assign"), B = cc11001100_hook("B", C[1], "assign"), i = cc11001100_hook("i", C[2], "assign"), u = cc11001100_hook("u", C[3], "assign"), Q = cc11001100_hook("Q", C[4], "assign"), (F = cc11001100_hook("F", document.createElement("canvas"), "assign")).width = cc11001100_hook("(F = document.createElement(\"canvas\")).width", c, "assign"), F.height = cc11001100_hook("F.height", a, "assign"), C = cc11001100_hook("C", F.getContext("2d"), "assign"), n = cc11001100_hook("n", C.createLinearGradient(B, u, i, Q), "assign"), pe(e.stops, l).forEach(function (A) {
                        return n.addColorStop(A.stop, ie(A.color));
                      }), C.fillStyle = cc11001100_hook("C.fillStyle", n, "assign"), C.fillRect(0, 0, c, a), 0 < c && 0 < a && (s = cc11001100_hook("s", d.ctx.createPattern(F, "repeat"), "assign"), d.renderRepeat(o, s, g, w))) : 2 === e.type && (u = cc11001100_hook("u", Cs(f, h, [null, null, null]), "assign"), o = cc11001100_hook("o", u[0], "assign"), i = cc11001100_hook("i", u[1], "assign"), Q = cc11001100_hook("Q", u[2], "assign"), c = cc11001100_hook("c", u[3], "assign"), a = cc11001100_hook("a", u[4], "assign"), l = cc11001100_hook("l", 0 === e.position.length ? [ge] : e.position, "assign"), g = cc11001100_hook("g", Ue(l[0], c), "assign"), w = cc11001100_hook("w", Ue(l[l.length - 1], a), "assign"), C = cc11001100_hook("C", function (A, e, t, r, B) {
                        var n,
                          s,
                          o,
                          i,
                          Q = cc11001100_hook("Q", 0, "var-init"),
                          c = cc11001100_hook("c", 0, "var-init");
                        switch (A.size) {
                          case 0:
                            0 === A.shape ? Q = cc11001100_hook("Q", c = cc11001100_hook("c", Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - B)), "assign"), "assign") : 1 === A.shape && (Q = cc11001100_hook("Q", Math.min(Math.abs(e), Math.abs(e - r)), "assign"), c = cc11001100_hook("c", Math.min(Math.abs(t), Math.abs(t - B)), "assign"));
                            break;
                          case 2:
                            0 === A.shape ? Q = cc11001100_hook("Q", c = cc11001100_hook("c", Math.min(Ie(e, t), Ie(e, t - B), Ie(e - r, t), Ie(e - r, t - B)), "assign"), "assign") : 1 === A.shape && (n = cc11001100_hook("n", Math.min(Math.abs(t), Math.abs(t - B)) / Math.min(Math.abs(e), Math.abs(e - r)), "assign"), o = cc11001100_hook("o", (s = cc11001100_hook("s", ye(r, B, e, t, !0), "assign"))[0], "assign"), i = cc11001100_hook("i", s[1], "assign"), c = cc11001100_hook("c", n * (Q = cc11001100_hook("Q", Ie(o - e, (i - t) / n), "assign")), "assign"));
                            break;
                          case 1:
                            0 === A.shape ? Q = cc11001100_hook("Q", c = cc11001100_hook("c", Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - B)), "assign"), "assign") : 1 === A.shape && (Q = cc11001100_hook("Q", Math.max(Math.abs(e), Math.abs(e - r)), "assign"), c = cc11001100_hook("c", Math.max(Math.abs(t), Math.abs(t - B)), "assign"));
                            break;
                          case 3:
                            0 === A.shape ? Q = cc11001100_hook("Q", c = cc11001100_hook("c", Math.max(Ie(e, t), Ie(e, t - B), Ie(e - r, t), Ie(e - r, t - B)), "assign"), "assign") : 1 === A.shape && (n = cc11001100_hook("n", Math.max(Math.abs(t), Math.abs(t - B)) / Math.max(Math.abs(e), Math.abs(e - r)), "assign"), o = cc11001100_hook("o", (s = cc11001100_hook("s", ye(r, B, e, t, !1), "assign"))[0], "assign"), i = cc11001100_hook("i", s[1], "assign"), c = cc11001100_hook("c", n * (Q = cc11001100_hook("Q", Ie(o - e, (i - t) / n), "assign")), "assign"));
                        }
                        return Array.isArray(A.size) && (Q = cc11001100_hook("Q", Ue(A.size[0], r), "assign"), c = cc11001100_hook("c", 2 === A.size.length ? Ue(A.size[1], B) : Q, "assign")), [Q, c];
                      }(e, g, w, c, a), "assign"), F = cc11001100_hook("F", C[0], "assign"), u = cc11001100_hook("u", C[1], "assign"), 0 < F && 0 < u && (U = cc11001100_hook("U", d.ctx.createRadialGradient(i + g, Q + w, 0, i + g, Q + w, F), "assign"), pe(e.stops, 2 * F).forEach(function (A) {
                        return U.addColorStop(A.stop, ie(A.color));
                      }), d.path(o), d.ctx.fillStyle = cc11001100_hook("d.ctx.fillStyle", U, "assign"), F !== u ? (l = cc11001100_hook("l", f.bounds.left + .5 * f.bounds.width, "assign"), C = cc11001100_hook("C", f.bounds.top + .5 * f.bounds.height, "assign"), F = cc11001100_hook("F", 1 / (u = cc11001100_hook("u", u / F, "assign")), "assign"), d.ctx.save(), d.ctx.translate(l, C), d.ctx.transform(1, 0, 0, u, 0, 0), d.ctx.translate(-l, -C), d.ctx.fillRect(i, F * (Q - C) + C, c, a * F), d.ctx.restore()) : d.ctx.fill())), A.label = cc11001100_hook("A.label", 6, "assign");
                    case 6:
                      return h--, [2];
                  }
                });
              }, "assign"), d = cc11001100_hook("d", this, "assign"), t = cc11001100_hook("t", 0, "assign"), r = cc11001100_hook("r", f.styles.backgroundImage.slice(0).reverse(), "assign"), A.label = cc11001100_hook("A.label", 1, "assign");
            case 1:
              return t < r.length ? (B = cc11001100_hook("B", r[t], "assign"), [5, e(B)]) : [3, 4];
            case 2:
              A.sent(), A.label = cc11001100_hook("A.label", 3, "assign");
            case 3:
              return t++, [3, 1];
            case 4:
              return [2];
          }
        });
      });
    }, "assign"), Ds.prototype.renderSolidBorder = cc11001100_hook("Ds.prototype.renderSolidBorder", function (e, t, r) {
      return a(this, void 0, void 0, function () {
        return H(this, function (A) {
          return this.path(ws(r, t)), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", ie(e), "assign"), this.ctx.fill(), [2];
        });
      });
    }, "assign"), Ds.prototype.renderDoubleBorder = cc11001100_hook("Ds.prototype.renderDoubleBorder", function (t, r, B, n) {
      return a(this, void 0, void 0, function () {
        var e;
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, B, n)] : [3, 2];
            case 1:
              return A.sent(), [2];
            case 2:
              return e = cc11001100_hook("e", function (A, e) {
                switch (e) {
                  case 0:
                    return Hs(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
                  case 1:
                    return Hs(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
                  case 2:
                    return Hs(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
                  default:
                    return Hs(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
                }
              }(n, B), "assign"), this.path(e), this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", ie(t), "assign"), this.ctx.fill(), e = cc11001100_hook("e", function (A, e) {
                switch (e) {
                  case 0:
                    return Hs(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
                  case 1:
                    return Hs(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
                  case 2:
                    return Hs(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
                  default:
                    return Hs(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
                }
              }(n, B), "assign"), this.path(e), this.ctx.fill(), [2];
          }
        });
      });
    }, "assign"), Ds.prototype.renderNodeBackgroundAndBorders = cc11001100_hook("Ds.prototype.renderNodeBackgroundAndBorders", function (c) {
      return a(this, void 0, void 0, function () {
        var e,
          t,
          r,
          B,
          n,
          s,
          o,
          i,
          Q = cc11001100_hook("Q", this, "var-init");
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              return (this.applyEffects(c.getEffects(2)), e = cc11001100_hook("e", c.container.styles, "assign"), t = cc11001100_hook("t", !oe(e.backgroundColor) || e.backgroundImage.length, "assign"), r = cc11001100_hook("r", [{
                style: cc11001100_hook("style", e.borderTopStyle, "object-key-init"),
                color: cc11001100_hook("color", e.borderTopColor, "object-key-init"),
                width: cc11001100_hook("width", e.borderTopWidth, "object-key-init")
              }, {
                style: cc11001100_hook("style", e.borderRightStyle, "object-key-init"),
                color: cc11001100_hook("color", e.borderRightColor, "object-key-init"),
                width: cc11001100_hook("width", e.borderRightWidth, "object-key-init")
              }, {
                style: cc11001100_hook("style", e.borderBottomStyle, "object-key-init"),
                color: cc11001100_hook("color", e.borderBottomColor, "object-key-init"),
                width: cc11001100_hook("width", e.borderBottomWidth, "object-key-init")
              }, {
                style: cc11001100_hook("style", e.borderLeftStyle, "object-key-init"),
                color: cc11001100_hook("color", e.borderLeftColor, "object-key-init"),
                width: cc11001100_hook("width", e.borderLeftWidth, "object-key-init")
              }], "assign"), B = cc11001100_hook("B", Ms(Es(e.backgroundClip, 0), c.curves), "assign"), t || e.boxShadow.length) ? (this.ctx.save(), this.path(B), this.ctx.clip(), oe(e.backgroundColor) || (this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", ie(e.backgroundColor), "assign"), this.ctx.fill()), [4, this.renderBackgroundImage(c.container)]) : [3, 2];
            case 1:
              A.sent(), this.ctx.restore(), e.boxShadow.slice(0).reverse().forEach(function (A) {
                Q.ctx.save();
                var t,
                  r,
                  B,
                  n,
                  e = cc11001100_hook("e", ts(c.curves), "var-init"),
                  s = cc11001100_hook("s", A.inset ? 0 : 1e4, "var-init"),
                  o = cc11001100_hook("o", (t = cc11001100_hook("t", -s + (A.inset ? 1 : -1) * A.spread.number, "assign"), r = cc11001100_hook("r", (A.inset ? 1 : -1) * A.spread.number, "assign"), B = cc11001100_hook("B", A.spread.number * (A.inset ? -2 : 2), "assign"), n = cc11001100_hook("n", A.spread.number * (A.inset ? -2 : 2), "assign"), e.map(function (A, e) {
                    switch (e) {
                      case 0:
                        return A.add(t, r);
                      case 1:
                        return A.add(t + B, r);
                      case 2:
                        return A.add(t + B, r + n);
                      case 3:
                        return A.add(t, r + n);
                    }
                    return A;
                  })), "var-init");
                A.inset ? (Q.path(e), Q.ctx.clip(), Q.mask(o)) : (Q.mask(e), Q.ctx.clip(), Q.path(o)), Q.ctx.shadowOffsetX = cc11001100_hook("Q.ctx.shadowOffsetX", A.offsetX.number + s, "assign"), Q.ctx.shadowOffsetY = cc11001100_hook("Q.ctx.shadowOffsetY", A.offsetY.number, "assign"), Q.ctx.shadowColor = cc11001100_hook("Q.ctx.shadowColor", ie(A.color), "assign"), Q.ctx.shadowBlur = cc11001100_hook("Q.ctx.shadowBlur", A.blur.number, "assign"), Q.ctx.fillStyle = cc11001100_hook("Q.ctx.fillStyle", A.inset ? ie(A.color) : "rgba(0,0,0,1)", "assign"), Q.ctx.fill(), Q.ctx.restore();
              }), A.label = cc11001100_hook("A.label", 2, "assign");
            case 2:
              s = cc11001100_hook("s", n = cc11001100_hook("n", 0, "assign"), "assign"), o = cc11001100_hook("o", r, "assign"), A.label = cc11001100_hook("A.label", 3, "assign");
            case 3:
              return s < o.length ? 0 !== (i = cc11001100_hook("i", o[s], "assign")).style && !oe(i.color) && 0 < i.width ? 2 !== i.style ? [3, 5] : [4, this.renderDashedDottedBorder(i.color, i.width, n, c.curves, 2)] : [3, 11] : [3, 13];
            case 4:
              return A.sent(), [3, 11];
            case 5:
              return 3 !== i.style ? [3, 7] : [4, this.renderDashedDottedBorder(i.color, i.width, n, c.curves, 3)];
            case 6:
              return A.sent(), [3, 11];
            case 7:
              return 4 !== i.style ? [3, 9] : [4, this.renderDoubleBorder(i.color, i.width, n, c.curves)];
            case 8:
              return A.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(i.color, n, c.curves)];
            case 10:
              A.sent(), A.label = cc11001100_hook("A.label", 11, "assign");
            case 11:
              n++, A.label = cc11001100_hook("A.label", 12, "assign");
            case 12:
              return s++, [3, 3];
            case 13:
              return [2];
          }
        });
      });
    }, "assign"), Ds.prototype.renderDashedDottedBorder = cc11001100_hook("Ds.prototype.renderDashedDottedBorder", function (g, w, U, l, C) {
      return a(this, void 0, void 0, function () {
        var e, t, r, B, n, s, o, i, Q, c, a;
        return H(this, function (A) {
          return this.ctx.save(), Q = cc11001100_hook("Q", function (A, e) {
            switch (e) {
              case 0:
                return fs(A.topLeftBorderStroke, A.topRightBorderStroke);
              case 1:
                return fs(A.topRightBorderStroke, A.bottomRightBorderStroke);
              case 2:
                return fs(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
              default:
                return fs(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
            }
          }(l, U), "assign"), e = cc11001100_hook("e", ws(l, U), "assign"), 2 === C && (this.path(e), this.ctx.clip()), s = cc11001100_hook("s", $n(e[0]) ? (t = cc11001100_hook("t", e[0].start.x, "assign"), e[0].start.y) : (t = cc11001100_hook("t", e[0].x, "assign"), e[0].y), "assign"), o = cc11001100_hook("o", $n(e[1]) ? (r = cc11001100_hook("r", e[1].end.x, "assign"), e[1].end.y) : (r = cc11001100_hook("r", e[1].x, "assign"), e[1].y), "assign"), B = cc11001100_hook("B", 0 === U || 2 === U ? Math.abs(t - r) : Math.abs(s - o), "assign"), this.ctx.beginPath(), 3 === C ? this.formatPath(Q) : this.formatPath(e.slice(0, 2)), n = cc11001100_hook("n", w < 3 ? 3 * w : 2 * w, "assign"), s = cc11001100_hook("s", w < 3 ? 2 * w : w, "assign"), 3 === C && (s = cc11001100_hook("s", n = cc11001100_hook("n", w, "assign"), "assign")), o = cc11001100_hook("o", !0, "assign"), B <= 2 * n ? o = cc11001100_hook("o", !1, "assign") : B <= 2 * n + s ? (n *= cc11001100_hook("n", i = cc11001100_hook("i", B / (2 * n + s), "assign"), "assign"), s *= cc11001100_hook("s", i, "assign")) : (Q = cc11001100_hook("Q", Math.floor((B + s) / (n + s)), "assign"), i = cc11001100_hook("i", (B - Q * n) / (Q - 1), "assign"), s = cc11001100_hook("s", (Q = cc11001100_hook("Q", (B - (Q + 1) * n) / Q, "assign")) <= 0 || Math.abs(s - i) < Math.abs(s - Q) ? i : Q, "assign")), o && (3 === C ? this.ctx.setLineDash([0, n + s]) : this.ctx.setLineDash([n, s])), 3 === C ? (this.ctx.lineCap = cc11001100_hook("this.ctx.lineCap", "round", "assign"), this.ctx.lineWidth = cc11001100_hook("this.ctx.lineWidth", w, "assign")) : this.ctx.lineWidth = cc11001100_hook("this.ctx.lineWidth", 2 * w + 1.1, "assign"), this.ctx.strokeStyle = cc11001100_hook("this.ctx.strokeStyle", ie(g), "assign"), this.ctx.stroke(), this.ctx.setLineDash([]), 2 === C && ($n(e[0]) && (c = cc11001100_hook("c", e[3], "assign"), a = cc11001100_hook("a", e[0], "assign"), this.ctx.beginPath(), this.formatPath([new Zn(c.end.x, c.end.y), new Zn(a.start.x, a.start.y)]), this.ctx.stroke()), $n(e[1]) && (c = cc11001100_hook("c", e[1], "assign"), a = cc11001100_hook("a", e[2], "assign"), this.ctx.beginPath(), this.formatPath([new Zn(c.end.x, c.end.y), new Zn(a.start.x, a.start.y)]), this.ctx.stroke())), this.ctx.restore(), [2];
        });
      });
    }, "assign"), Ds.prototype.render = cc11001100_hook("Ds.prototype.render", function (B) {
      return a(this, void 0, void 0, function () {
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", ie(this.options.backgroundColor), "assign"), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), t = cc11001100_hook("t", new as(e = cc11001100_hook("e", B, "assign"), null), "assign"), r = cc11001100_hook("r", new cs(t), "assign"), hs(t, r, r, e = cc11001100_hook("e", [], "assign")), ds(t.container, e), [4, this.renderStack(r)];
            case 1:
              return A.sent(), this.applyEffects([]), [2, this.canvas];
          }
          var e, t, r;
        });
      });
    }, "assign"), Ds), "var-init");
  function Ds(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    A = cc11001100_hook("A", Ls.call(this, A, e) || this, "assign");
    return A._activeEffects = cc11001100_hook("A._activeEffects", [], "assign"), A.canvas = cc11001100_hook("A.canvas", e.canvas || document.createElement("canvas"), "assign"), A.ctx = cc11001100_hook("A.ctx", A.canvas.getContext("2d"), "assign"), e.canvas || (A.canvas.width = cc11001100_hook("A.canvas.width", Math.floor(e.width * e.scale), "assign"), A.canvas.height = cc11001100_hook("A.canvas.height", Math.floor(e.height * e.scale), "assign"), A.canvas.style.width = cc11001100_hook("A.canvas.style.width", e.width + "px", "assign"), A.canvas.style.height = cc11001100_hook("A.canvas.style.height", e.height + "px", "assign")), A.fontMetrics = cc11001100_hook("A.fontMetrics", new Ks(document), "assign"), A.ctx.scale(A.options.scale, A.options.scale), A.ctx.translate(-e.x, -e.y), A.ctx.textBaseline = cc11001100_hook("A.ctx.textBaseline", "bottom", "assign"), A._activeEffects = cc11001100_hook("A._activeEffects", [], "assign"), A.context.logger.debug("Canvas renderer initialized (" + e.width + "x" + e.height + ") with scale " + e.scale), A;
  }
  var vs,
    xs = function (A) {
      return A instanceof LB || A instanceof yB || A instanceof pB && A.type !== dB && A.type !== hB;
    },
    Ms = function (A, e) {
      switch (A) {
        case 0:
          return ts(e);
        case 2:
          return [e.topLeftContentBox, e.topRightContentBox, e.bottomRightContentBox, e.bottomLeftContentBox];
        default:
          return rs(e);
      }
    },
    Ss = function (A) {
      switch (A) {
        case 1:
          return "center";
        case 2:
          return "right";
        default:
          return "left";
      }
    },
    Ts = cc11001100_hook("Ts", ["-apple-system", "system-ui"], "var-init"),
    Gs = function (A) {
      return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function (A) {
        return -1 === Ts.indexOf(A);
      }) : A;
    },
    Os = cc11001100_hook("Os", (A(Vs, vs = cc11001100_hook("vs", he, "assign")), Vs.prototype.render = cc11001100_hook("Vs.prototype.render", function (t) {
      return a(this, void 0, void 0, function () {
        var e;
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              return e = cc11001100_hook("e", Nr(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), "assign"), [4, ks(e)];
            case 1:
              return e = cc11001100_hook("e", A.sent(), "assign"), this.options.backgroundColor && (this.ctx.fillStyle = cc11001100_hook("this.ctx.fillStyle", ie(this.options.backgroundColor), "assign"), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(e, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, "assign"), Vs), "var-init");
  function Vs(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    A = cc11001100_hook("A", vs.call(this, A, e) || this, "assign");
    return A.canvas = cc11001100_hook("A.canvas", e.canvas || document.createElement("canvas"), "assign"), A.ctx = cc11001100_hook("A.ctx", A.canvas.getContext("2d"), "assign"), A.options = cc11001100_hook("A.options", e, "assign"), A.canvas.width = cc11001100_hook("A.canvas.width", Math.floor(e.width * e.scale), "assign"), A.canvas.height = cc11001100_hook("A.canvas.height", Math.floor(e.height * e.scale), "assign"), A.canvas.style.width = cc11001100_hook("A.canvas.style.width", e.width + "px", "assign"), A.canvas.style.height = cc11001100_hook("A.canvas.style.height", e.height + "px", "assign"), A.ctx.scale(A.options.scale, A.options.scale), A.ctx.translate(-e.x, -e.y), A.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + e.width + "x" + e.height + " at " + e.x + "," + e.y + ") with scale " + e.scale), A;
  }
  var ks = function (r) {
      return new Promise(function (A, e) {
        var t = cc11001100_hook("t", new Image(), "var-init");
        t.onload = cc11001100_hook("t.onload", function () {
          A(t);
        }, "assign"), t.onerror = cc11001100_hook("t.onerror", e, "assign"), t.src = cc11001100_hook("t.src", "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(r)), "assign");
      });
    },
    Rs = cc11001100_hook("Rs", (Ns.prototype.debug = cc11001100_hook("Ns.prototype.debug", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
      this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.debug ? console.debug.apply(console, t([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, "assign"), Ns.prototype.getTime = cc11001100_hook("Ns.prototype.getTime", function () {
      return Date.now() - this.start;
    }, "assign"), Ns.prototype.info = cc11001100_hook("Ns.prototype.info", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
      this.enabled && "undefined" != typeof window && window.console && "function" == typeof console.info && console.info.apply(console, t([this.id, this.getTime() + "ms"], A));
    }, "assign"), Ns.prototype.warn = cc11001100_hook("Ns.prototype.warn", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
      this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.warn ? console.warn.apply(console, t([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, "assign"), Ns.prototype.error = cc11001100_hook("Ns.prototype.error", function () {
      for (var A = cc11001100_hook("A", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) A[e] = cc11001100_hook("A[e]", arguments[e], "assign");
      this.enabled && ("undefined" != typeof window && window.console && "function" == typeof console.error ? console.error.apply(console, t([this.id, this.getTime() + "ms"], A)) : this.info.apply(this, A));
    }, "assign"), Ns.instances = cc11001100_hook("Ns.instances", {}, "assign"), Ns), "var-init");
  function Ns(A) {
    cc11001100_hook("A", A, "function-parameter");
    var e = cc11001100_hook("e", A.id, "var-init"),
      A = cc11001100_hook("A", A.enabled, "var-init");
    this.id = cc11001100_hook("this.id", e, "assign"), this.enabled = cc11001100_hook("this.enabled", A, "assign"), this.start = cc11001100_hook("this.start", Date.now(), "assign");
  }
  var Ps = cc11001100_hook("Ps", (Xs.instanceCount = cc11001100_hook("Xs.instanceCount", 1, "assign"), Xs), "var-init");
  function Xs(A, e) {
    cc11001100_hook("A", A, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    this.windowBounds = cc11001100_hook("this.windowBounds", e, "assign"), this.instanceName = cc11001100_hook("this.instanceName", "#" + Xs.instanceCount++, "assign"), this.logger = cc11001100_hook("this.logger", new Rs({
      id: cc11001100_hook("id", this.instanceName, "object-key-init"),
      enabled: cc11001100_hook("enabled", A.logging, "object-key-init")
    }), "assign"), this.cache = cc11001100_hook("this.cache", null !== (e = cc11001100_hook("e", A.cache, "assign")) && void 0 !== e ? e : new On(this, A), "assign");
  }
  "undefined" != typeof window && Tn.setContext(window);
  var Js = function (u, F) {
      return a(void 0, void 0, void 0, function () {
        var e, t, r, B, n, s, o, i, Q, c, a, g, w, U, l, C;
        return H(this, function (A) {
          switch (A.label) {
            case 0:
              if (!u || "object" != typeof u) return [2, Promise.reject("Invalid element provided as first argument")];
              if (!(e = cc11001100_hook("e", u.ownerDocument, "assign"))) throw new Error("Element is not attached to a Document");
              if (!(t = cc11001100_hook("t", e.defaultView, "assign"))) throw new Error("Document is not attached to a Window");
              return w = cc11001100_hook("w", {
                allowTaint: cc11001100_hook("allowTaint", null !== (U = cc11001100_hook("U", F.allowTaint, "assign")) && void 0 !== U && U, "object-key-init"),
                imageTimeout: cc11001100_hook("imageTimeout", null !== (c = cc11001100_hook("c", F.imageTimeout, "assign")) && void 0 !== c ? c : 15e3, "object-key-init"),
                proxy: cc11001100_hook("proxy", F.proxy, "object-key-init"),
                useCORS: cc11001100_hook("useCORS", null !== (a = cc11001100_hook("a", F.useCORS, "assign")) && void 0 !== a && a, "object-key-init")
              }, "assign"), U = cc11001100_hook("U", h({
                logging: cc11001100_hook("logging", null === (g = cc11001100_hook("g", F.logging, "assign")) || void 0 === g || g, "object-key-init"),
                cache: cc11001100_hook("cache", F.cache, "object-key-init")
              }, w), "assign"), c = cc11001100_hook("c", {
                windowWidth: cc11001100_hook("windowWidth", null !== (c = cc11001100_hook("c", F.windowWidth, "assign")) && void 0 !== c ? c : t.innerWidth, "object-key-init"),
                windowHeight: cc11001100_hook("windowHeight", null !== (a = cc11001100_hook("a", F.windowHeight, "assign")) && void 0 !== a ? a : t.innerHeight, "object-key-init"),
                scrollX: cc11001100_hook("scrollX", null !== (g = cc11001100_hook("g", F.scrollX, "assign")) && void 0 !== g ? g : t.pageXOffset, "object-key-init"),
                scrollY: cc11001100_hook("scrollY", null !== (w = cc11001100_hook("w", F.scrollY, "assign")) && void 0 !== w ? w : t.pageYOffset, "object-key-init")
              }, "assign"), a = cc11001100_hook("a", new d(c.scrollX, c.scrollY, c.windowWidth, c.windowHeight), "assign"), g = cc11001100_hook("g", new Ps(U, a), "assign"), c = cc11001100_hook("c", null !== (w = cc11001100_hook("w", F.foreignObjectRendering, "assign")) && void 0 !== w && w, "assign"), w = cc11001100_hook("w", {
                allowTaint: cc11001100_hook("allowTaint", null !== (U = cc11001100_hook("U", F.allowTaint, "assign")) && void 0 !== U && U, "object-key-init"),
                onclone: cc11001100_hook("onclone", F.onclone, "object-key-init"),
                ignoreElements: cc11001100_hook("ignoreElements", F.ignoreElements, "object-key-init"),
                inlineImages: cc11001100_hook("inlineImages", c, "object-key-init"),
                copyStyles: cc11001100_hook("copyStyles", c, "object-key-init")
              }, "assign"), g.logger.debug("Starting document clone with size " + a.width + "x" + a.height + " scrolled to " + -a.left + "," + -a.top), U = cc11001100_hook("U", new dn(g, u, w), "assign"), (w = cc11001100_hook("w", U.clonedReferenceElement, "assign")) ? [4, U.toIFrame(e, a)] : [2, Promise.reject("Unable to find element in cloned iframe")];
            case 1:
              return (r = cc11001100_hook("r", A.sent(), "assign"), l = cc11001100_hook("l", jB(w) || "HTML" === w.tagName ? function (A) {
                var e = cc11001100_hook("e", A.body, "var-init"),
                  t = cc11001100_hook("t", A.documentElement, "var-init");
                if (!e || !t) throw new Error("Unable to get document size");
                A = cc11001100_hook("A", Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), "assign"), t = cc11001100_hook("t", Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight)), "assign");
                return new d(0, 0, A, t);
              }(w.ownerDocument) : f(g, w), "assign"), B = cc11001100_hook("B", l.width, "assign"), n = cc11001100_hook("n", l.height, "assign"), s = cc11001100_hook("s", l.left, "assign"), o = cc11001100_hook("o", l.top, "assign"), i = cc11001100_hook("i", Ys(g, w, F.backgroundColor), "assign"), l = cc11001100_hook("l", {
                canvas: cc11001100_hook("canvas", F.canvas, "object-key-init"),
                backgroundColor: cc11001100_hook("backgroundColor", i, "object-key-init"),
                scale: cc11001100_hook("scale", null !== (l = cc11001100_hook("l", null !== (l = cc11001100_hook("l", F.scale, "assign")) && void 0 !== l ? l : t.devicePixelRatio, "assign")) && void 0 !== l ? l : 1, "object-key-init"),
                x: cc11001100_hook("x", (null !== (l = cc11001100_hook("l", F.x, "assign")) && void 0 !== l ? l : 0) + s, "object-key-init"),
                y: cc11001100_hook("y", (null !== (l = cc11001100_hook("l", F.y, "assign")) && void 0 !== l ? l : 0) + o, "object-key-init"),
                width: cc11001100_hook("width", null !== (l = cc11001100_hook("l", F.width, "assign")) && void 0 !== l ? l : Math.ceil(B), "object-key-init"),
                height: cc11001100_hook("height", null !== (l = cc11001100_hook("l", F.height, "assign")) && void 0 !== l ? l : Math.ceil(n), "object-key-init")
              }, "assign"), c) ? (g.logger.debug("Document cloned, using foreign object rendering"), [4, new Os(g, l).render(w)]) : [3, 3];
            case 2:
              return Q = cc11001100_hook("Q", A.sent(), "assign"), [3, 5];
            case 3:
              return g.logger.debug("Document cloned, element located at " + s + "," + o + " with size " + B + "x" + n + " using computed rendering"), g.logger.debug("Starting DOM parsing"), C = cc11001100_hook("C", kB(g, w), "assign"), i === C.styles.backgroundColor && (C.styles.backgroundColor = cc11001100_hook("C.styles.backgroundColor", Le.TRANSPARENT, "assign")), g.logger.debug("Starting renderer for element at " + l.x + "," + l.y + " with size " + l.width + "x" + l.height), [4, new bs(g, l).render(C)];
            case 4:
              Q = cc11001100_hook("Q", A.sent(), "assign"), A.label = cc11001100_hook("A.label", 5, "assign");
            case 5:
              return null !== (C = cc11001100_hook("C", F.removeContainer, "assign")) && void 0 !== C && !C || dn.destroy(r) || g.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore"), g.logger.debug("Finished rendering"), [2, Q];
          }
        });
      });
    },
    Ys = function (A, e, t) {
      var r = cc11001100_hook("r", e.ownerDocument, "var-init"),
        B = cc11001100_hook("B", r.documentElement ? fe(A, getComputedStyle(r.documentElement).backgroundColor) : Le.TRANSPARENT, "var-init"),
        n = cc11001100_hook("n", r.body ? fe(A, getComputedStyle(r.body).backgroundColor) : Le.TRANSPARENT, "var-init"),
        t = cc11001100_hook("t", "string" == typeof t ? fe(A, t) : null === t ? Le.TRANSPARENT : 4294967295, "var-init");
      return e === r.documentElement ? oe(B) ? oe(n) ? t : n : B : t;
    };
  return function (A, e) {
    return Js(A, e = cc11001100_hook("e", void 0 === e ? {} : e, "assign"));
  };
});