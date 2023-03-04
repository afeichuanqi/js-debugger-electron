"undefined" == typeof faultylabs && (faultylabs = cc11001100_hook("faultylabs", {}, "assign")), faultylabs.MD5 = cc11001100_hook("faultylabs.MD5", function (e) {
  function t(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return e & t | ~e & r;
  }
  function r(e, t, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return r & e | ~r & t;
  }
  function i(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t];
  }
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) if (e.charCodeAt(r) <= 127) t.push(e.charCodeAt(r));else for (var i = cc11001100_hook("i", encodeURIComponent(e.charAt(r)).substr(1).split("%"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < i.length; n++) t.push(parseInt(i[n], 16));
    return t;
  }
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", new Array(e.length), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) t[r] = cc11001100_hook("t[r]", e[r], "assign");
    return t;
  }
  function s(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return 4294967295 & e + t;
  }
  var a = cc11001100_hook("a", null, "var-init"),
    g = cc11001100_hook("g", null, "var-init");
  function c(e, t, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var n = cc11001100_hook("n", U, "var-init");
    U = cc11001100_hook("U", y, "assign"), K = cc11001100_hook("K", s(y = cc11001100_hook("y", K, "assign"), (e = cc11001100_hook("e", s(h, s(e, s(t, r))), "assign")) << i & 4294967295 | e >>> 32 - i), "assign"), h = cc11001100_hook("h", n, "assign");
  }
  "string" == typeof e ? a = cc11001100_hook("a", n(e), "assign") : e.constructor == Array ? 0 === e.length ? a = cc11001100_hook("a", e, "assign") : "string" == typeof e[0] ? a = cc11001100_hook("a", function (e) {
    for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) t = cc11001100_hook("t", t.concat(n(e[r])), "assign");
    return t;
  }(e), "assign") : "number" == typeof e[0] ? a = cc11001100_hook("a", e, "assign") : g = cc11001100_hook("g", typeof e[0], "assign") : "undefined" != typeof ArrayBuffer ? e instanceof ArrayBuffer ? a = cc11001100_hook("a", o(new Uint8Array(e)), "assign") : e instanceof Uint8Array || e instanceof Int8Array ? a = cc11001100_hook("a", o(e), "assign") : e instanceof Uint32Array || e instanceof Int32Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Float32Array || e instanceof Float64Array ? a = cc11001100_hook("a", o(new Uint8Array(e.buffer)), "assign") : g = cc11001100_hook("g", typeof e, "assign") : g = cc11001100_hook("g", typeof e, "assign"), g && alert("MD5 type mismatch, cannot process " + g);
  var e = cc11001100_hook("e", a.length, "var-init"),
    d = cc11001100_hook("d", (a.push(128), a.length % 64), "var-init");
  if (56 < d) {
    for (var u = cc11001100_hook("u", 0, "var-init"); u < 64 - d; u++) a.push(0);
    d = cc11001100_hook("d", a.length % 64, "assign");
  }
  for (u = cc11001100_hook("u", 0, "assign"); u < 56 - d; u++) a.push(0);
  a = cc11001100_hook("a", a.concat(function (e) {
    for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < 8; r++) t.push(255 & e), e >>>= cc11001100_hook("e", 8, "assign");
    return t;
  }(8 * e)), "assign");
  for (var l = cc11001100_hook("l", 1732584193, "var-init"), p = cc11001100_hook("p", 4023233417, "var-init"), f = cc11001100_hook("f", 2562383102, "var-init"), m = cc11001100_hook("m", 271733878, "var-init"), h = cc11001100_hook("h", 0, "var-init"), K = cc11001100_hook("K", 0, "var-init"), y = cc11001100_hook("y", 0, "var-init"), U = cc11001100_hook("U", 0, "var-init"), u = cc11001100_hook("u", 0, "var-init"); u < a.length / 64; u++) {
    var h = cc11001100_hook("h", l, "var-init"),
      v = cc11001100_hook("v", 64 * u, "var-init");
    c(t(K = cc11001100_hook("K", p, "assign"), y = cc11001100_hook("y", f, "assign"), U = cc11001100_hook("U", m, "assign")), 3614090360, i(a, v), 7), c(t(K, y, U), 3905402710, i(a, 4 + v), 12), c(t(K, y, U), 606105819, i(a, 8 + v), 17), c(t(K, y, U), 3250441966, i(a, 12 + v), 22), c(t(K, y, U), 4118548399, i(a, 16 + v), 7), c(t(K, y, U), 1200080426, i(a, 20 + v), 12), c(t(K, y, U), 2821735955, i(a, 24 + v), 17), c(t(K, y, U), 4249261313, i(a, 28 + v), 22), c(t(K, y, U), 1770035416, i(a, 32 + v), 7), c(t(K, y, U), 2336552879, i(a, 36 + v), 12), c(t(K, y, U), 4294925233, i(a, 40 + v), 17), c(t(K, y, U), 2304563134, i(a, 44 + v), 22), c(t(K, y, U), 1804603682, i(a, 48 + v), 7), c(t(K, y, U), 4254626195, i(a, 52 + v), 12), c(t(K, y, U), 2792965006, i(a, 56 + v), 17), c(t(K, y, U), 1236535329, i(a, 60 + v), 22), c(r(K, y, U), 4129170786, i(a, 4 + v), 5), c(r(K, y, U), 3225465664, i(a, 24 + v), 9), c(r(K, y, U), 643717713, i(a, 44 + v), 14), c(r(K, y, U), 3921069994, i(a, v), 20), c(r(K, y, U), 3593408605, i(a, 20 + v), 5), c(r(K, y, U), 38016083, i(a, 40 + v), 9), c(r(K, y, U), 3634488961, i(a, 60 + v), 14), c(r(K, y, U), 3889429448, i(a, 16 + v), 20), c(r(K, y, U), 568446438, i(a, 36 + v), 5), c(r(K, y, U), 3275163606, i(a, 56 + v), 9), c(r(K, y, U), 4107603335, i(a, 12 + v), 14), c(r(K, y, U), 1163531501, i(a, 32 + v), 20), c(r(K, y, U), 2850285829, i(a, 52 + v), 5), c(r(K, y, U), 4243563512, i(a, 8 + v), 9), c(r(K, y, U), 1735328473, i(a, 28 + v), 14), c(r(K, y, U), 2368359562, i(a, 48 + v), 20), c(K ^ y ^ U, 4294588738, i(a, 20 + v), 4), c(K ^ y ^ U, 2272392833, i(a, 32 + v), 11), c(K ^ y ^ U, 1839030562, i(a, 44 + v), 16), c(K ^ y ^ U, 4259657740, i(a, 56 + v), 23), c(K ^ y ^ U, 2763975236, i(a, 4 + v), 4), c(K ^ y ^ U, 1272893353, i(a, 16 + v), 11), c(K ^ y ^ U, 4139469664, i(a, 28 + v), 16), c(K ^ y ^ U, 3200236656, i(a, 40 + v), 23), c(K ^ y ^ U, 681279174, i(a, 52 + v), 4), c(K ^ y ^ U, 3936430074, i(a, v), 11), c(K ^ y ^ U, 3572445317, i(a, 12 + v), 16), c(K ^ y ^ U, 76029189, i(a, 24 + v), 23), c(K ^ y ^ U, 3654602809, i(a, 36 + v), 4), c(K ^ y ^ U, 3873151461, i(a, 48 + v), 11), c(K ^ y ^ U, 530742520, i(a, 60 + v), 16), c(K ^ y ^ U, 3299628645, i(a, 8 + v), 23), c(y ^ (K | ~U), 4096336452, i(a, v), 6), c(y ^ (K | ~U), 1126891415, i(a, 28 + v), 10), c(y ^ (K | ~U), 2878612391, i(a, 56 + v), 15), c(y ^ (K | ~U), 4237533241, i(a, 20 + v), 21), c(y ^ (K | ~U), 1700485571, i(a, 48 + v), 6), c(y ^ (K | ~U), 2399980690, i(a, 12 + v), 10), c(y ^ (K | ~U), 4293915773, i(a, 40 + v), 15), c(y ^ (K | ~U), 2240044497, i(a, 4 + v), 21), c(y ^ (K | ~U), 1873313359, i(a, 32 + v), 6), c(y ^ (K | ~U), 4264355552, i(a, 60 + v), 10), c(y ^ (K | ~U), 2734768916, i(a, 24 + v), 15), c(y ^ (K | ~U), 1309151649, i(a, 52 + v), 21), c(y ^ (K | ~U), 4149444226, i(a, 16 + v), 6), c(y ^ (K | ~U), 3174756917, i(a, 44 + v), 10), c(y ^ (K | ~U), 718787259, i(a, 8 + v), 15), c(y ^ (K | ~U), 3951481745, i(a, 36 + v), 21), l = cc11001100_hook("l", s(l, h), "assign"), p = cc11001100_hook("p", s(p, K), "assign"), f = cc11001100_hook("f", s(f, y), "assign"), m = cc11001100_hook("m", s(m, U), "assign");
  }
  return function () {
    for (var e, t = cc11001100_hook("t", "", "var-init"), r = cc11001100_hook("r", 3, "var-init"); 0 <= r; r--) t += cc11001100_hook("t", (e = cc11001100_hook("e", ((e = cc11001100_hook("e", (((255 & (e = cc11001100_hook("e", arguments[r], "assign"))) << 8 | 255 & (e >>>= cc11001100_hook("e", 8, "assign"))) << 8 | 255 & (e >>>= cc11001100_hook("e", 8, "assign"))) << 8 | (e >>>= cc11001100_hook("e", 8, "assign")), "assign")) >>> 0).toString(16), "assign"), "00000000".substr(0, 8 - e.length) + e), "assign");
    return t;
  }(m, f, p, l).toUpperCase();
}, "assign"), !function () {
  function e(e, n, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    n = cc11001100_hook("n", n || "", "assign");
    var o,
      r,
      i = cc11001100_hook("i", !1, "var-init"),
      s = cc11001100_hook("s", "json", "var-init"),
      a = cc11001100_hook("a", ("function" == typeof (t = cc11001100_hook("t", t || {}, "assign")) ? o = cc11001100_hook("o", t, "assign") : (o = cc11001100_hook("o", t.callback, "assign"), i = cc11001100_hook("i", t.useH5 || !1, "assign"), s = cc11001100_hook("s", t.postType || "json", "assign")), {}), "var-init");
    for (r in e = cc11001100_hook("e", e || {}, "assign")) a[r] || (a[r] = cc11001100_hook("a[r]", e[r], "assign"));
    function g() {
      for (var e in U) f.push(e);
      !function r(i) {
        if (i < f.length) U[f[i]](function (e) {
          if (e) if ("[object Object]" == Object.prototype.toString.call(e)) for (var t in e) m[t] = cc11001100_hook("m[t]", e[t], "assign");else m[f[i]] = cc11001100_hook("m[f[i]]", e, "assign");
          r(i + 1);
        });else {
          for (var e in m) a[e] || (a[e] = cc11001100_hook("a[e]", m[e], "assign"));
          for (var e in a) h.push(e);
          if (h.sort(), h.forEach(function (e) {
            K.push(e + "=" + a[e]);
          }), n) if ("[object Object]" == Object.prototype.toString.call(n)) {
            if ("json" == s) K.push(JSON.stringify(n));else {
              var t = cc11001100_hook("t", [], "var-init");
              for (e in n) t.push(e + "=" + n[e]);
              K.push(t.join("&"));
            }
          } else K.push(n);
          K.unshift(y), K.push(y), a.signature = cc11001100_hook("a.signature", faultylabs.MD5(K.join("")), "assign"), o && o(a);
        }
      }(0);
    }
    t = cc11001100_hook("t", !!navigator.userAgent.match(/KGBrowser/gi), "assign"), u = cc11001100_hook("u", !!navigator.userAgent.match(/kugouandroid/gi), "assign");
    var c,
      d,
      u,
      l = cc11001100_hook("l", "undefined" != typeof external && void 0 !== external.superCall || u || t, "var-init"),
      p = cc11001100_hook("p", new Date().getTime(), "var-init"),
      f = cc11001100_hook("f", [], "var-init"),
      m = cc11001100_hook("m", {}, "var-init"),
      h = cc11001100_hook("h", [], "var-init"),
      K = cc11001100_hook("K", [], "var-init"),
      y = cc11001100_hook("y", "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt", "var-init"),
      U = cc11001100_hook("U", {
        appid: function (e) {
          return e();
        },
        srcappid: function (e) {
          return e("2919");
        },
        clientver: function (e) {
          return e("20000");
        },
        "clienttime,mid,uuid,dfid": function (e) {
          return e({
            clienttime: cc11001100_hook("clienttime", p, "object-key-init"),
            mid: cc11001100_hook("mid", p, "object-key-init"),
            uuid: cc11001100_hook("uuid", p, "object-key-init"),
            dfid: cc11001100_hook("dfid", "-", "object-key-init")
          });
        }
      }, "var-init");
    (l = cc11001100_hook("l", !n || "[object Object]" == Object.prototype.toString.call(n) && "urlencoded" != s ? l : !1, "assign")) && !i ? (c = cc11001100_hook("c", !1, "assign"), d = cc11001100_hook("d", function () {
      KgMobileCall.callCmd({
        cmd: cc11001100_hook("cmd", 764, "object-key-init"),
        jsonStr: cc11001100_hook("jsonStr", JSON.stringify({
          get: cc11001100_hook("get", a, "object-key-init"),
          post: cc11001100_hook("post", n, "object-key-init")
        }), "object-key-init"),
        callback: function (e) {
          if (c) return !1;
          if (c = cc11001100_hook("c", !0, "assign"), e && e.status) {
            for (var t in delete e.status, e) a[t] || (a[t] = cc11001100_hook("a[t]", e[t], "assign"));
            return o && o(a);
          }
          l = cc11001100_hook("l", !1, "assign"), g();
        }
      });
    }, "assign"), window.KgMobileCall ? d && d() : ((u = cc11001100_hook("u", document.createElement("script"), "assign")).src = cc11001100_hook("(u = document.createElement(\"script\")).src", "https://m3ws.kugou.com/static/js/common/mobilecall_3.0.js", "assign"), u.onload = cc11001100_hook("u.onload", function () {
      this.readyState && "loaded" != this.readyState && "complete" != this.readyState || d && d();
    }, "assign"), document.body.appendChild(u))) : (l = cc11001100_hook("l", !1, "assign"), g());
  }
  "undefined" != typeof module && module.exports ? module.exports = cc11001100_hook("module.exports", e, "assign") : "function" == typeof define && define.amd ? define(function () {
    return e;
  }) : window.getInterFacePublic = cc11001100_hook("window.getInterFacePublic", e, "assign");
}(), !function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = cc11001100_hook("module.exports", t(require("crypto")), "assign") : "function" == typeof define && define.amd ? define(["crypto"], t) : (e = cc11001100_hook("e", e || self, "assign")).AES = cc11001100_hook("(e = e || self).AES", t(e.crypto), "assign");
}(this, function (f) {
  "use strict";

  f = cc11001100_hook("f", f && f.hasOwnProperty("default") ? f.default : f, "assign");
  var h = cc11001100_hook("h", "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}, "var-init");
  function e(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e(t = cc11001100_hook("t", {
      exports: {}
    }, "assign"), t.exports), t.exports;
  }
  var m = cc11001100_hook("m", e(function (e, t) {
      e.exports = cc11001100_hook("e.exports", (e = cc11001100_hook("e", function (c) {
        var i;
        if (!(i = cc11001100_hook("i", !(i = cc11001100_hook("i", !(i = cc11001100_hook("i", "undefined" != typeof window && window.crypto ? window.crypto : i, "assign")) && "undefined" != typeof window && window.msCrypto ? window.msCrypto : i, "assign")) && void 0 !== h && h.crypto ? h.crypto : i, "assign"))) try {
          i = cc11001100_hook("i", f, "assign");
        } catch (e) {}
        var r = cc11001100_hook("r", Object.create || function (e) {
          return t.prototype = cc11001100_hook("t.prototype", e, "assign"), e = cc11001100_hook("e", new t(), "assign"), t.prototype = cc11001100_hook("t.prototype", null, "assign"), e;
        }, "var-init");
        function t() {}
        var e = cc11001100_hook("e", {}, "var-init"),
          n = cc11001100_hook("n", e.lib = cc11001100_hook("e.lib", {}, "assign"), "var-init"),
          o = cc11001100_hook("o", n.Base = cc11001100_hook("n.Base", {
            extend: function (e) {
              var t = cc11001100_hook("t", r(this), "var-init");
              return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = cc11001100_hook("t.init", function () {
                t.$super.init.apply(this, arguments);
              }, "assign")), (t.init.prototype = cc11001100_hook("t.init.prototype", t, "assign")).$super = cc11001100_hook("(t.init.prototype = t).$super", this, "assign"), t;
            },
            create: function () {
              var e = cc11001100_hook("e", this.extend(), "var-init");
              return e.init.apply(e, arguments), e;
            },
            init: function () {},
            mixIn: function (e) {
              for (var t in e) e.hasOwnProperty(t) && (this[t] = cc11001100_hook("this[t]", e[t], "assign"));
              e.hasOwnProperty("toString") && (this.toString = cc11001100_hook("this.toString", e.toString, "assign"));
            },
            clone: function () {
              return this.init.prototype.extend(this);
            }
          }, "assign"), "var-init"),
          d = cc11001100_hook("d", n.WordArray = cc11001100_hook("n.WordArray", o.extend({
            init: function (e, t) {
              e = cc11001100_hook("e", this.words = cc11001100_hook("this.words", e || [], "assign"), "assign"), this.sigBytes = cc11001100_hook("this.sigBytes", null != t ? t : 4 * e.length, "assign");
            },
            toString: function (e) {
              return (e || a).stringify(this);
            },
            concat: function (e) {
              var t = cc11001100_hook("t", this.words, "var-init"),
                r = cc11001100_hook("r", e.words, "var-init"),
                i = cc11001100_hook("i", this.sigBytes, "var-init"),
                n = cc11001100_hook("n", e.sigBytes, "var-init");
              if (this.clamp(), i % 4) for (var o = cc11001100_hook("o", 0, "var-init"); o < n; o++) {
                var s = cc11001100_hook("s", r[o >>> 2] >>> 24 - o % 4 * 8 & 255, "var-init");
                t[i + o >>> 2] |= cc11001100_hook("t[i + o >>> 2]", s << 24 - (i + o) % 4 * 8, "assign");
              } else for (o = cc11001100_hook("o", 0, "assign"); o < n; o += cc11001100_hook("o", 4, "assign")) t[i + o >>> 2] = cc11001100_hook("t[i + o >>> 2]", r[o >>> 2], "assign");
              return this.sigBytes += cc11001100_hook("this.sigBytes", n, "assign"), this;
            },
            clamp: function () {
              var e = cc11001100_hook("e", this.words, "var-init"),
                t = cc11001100_hook("t", this.sigBytes, "var-init");
              e[t >>> 2] &= cc11001100_hook("e[t >>> 2]", 4294967295 << 32 - t % 4 * 8, "assign"), e.length = cc11001100_hook("e.length", c.ceil(t / 4), "assign");
            },
            clone: function () {
              var e = cc11001100_hook("e", o.clone.call(this), "var-init");
              return e.words = cc11001100_hook("e.words", this.words.slice(0), "assign"), e;
            },
            random: function (e) {
              for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e; r += cc11001100_hook("r", 4, "assign")) t.push(function () {
                if (i) {
                  if ("function" == typeof i.getRandomValues) try {
                    return i.getRandomValues(new Uint32Array(1))[0];
                  } catch (e) {}
                  if ("function" == typeof i.randomBytes) try {
                    return i.randomBytes(4).readInt32LE();
                  } catch (e) {}
                }
                throw new Error("Native crypto module could not be used to get secure random number.");
              }());
              return new d.init(t, e);
            }
          }), "assign"), "var-init"),
          s = cc11001100_hook("s", e.enc = cc11001100_hook("e.enc", {}, "assign"), "var-init"),
          a = cc11001100_hook("a", s.Hex = cc11001100_hook("s.Hex", {
            stringify: function (e) {
              for (var t = cc11001100_hook("t", e.words, "var-init"), r = cc11001100_hook("r", e.sigBytes, "var-init"), i = cc11001100_hook("i", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < r; n++) {
                var o = cc11001100_hook("o", t[n >>> 2] >>> 24 - n % 4 * 8 & 255, "var-init");
                i.push((o >>> 4).toString(16)), i.push((15 & o).toString(16));
              }
              return i.join("");
            },
            parse: function (e) {
              for (var t = cc11001100_hook("t", e.length, "var-init"), r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t; i += cc11001100_hook("i", 2, "assign")) r[i >>> 3] |= cc11001100_hook("r[i >>> 3]", parseInt(e.substr(i, 2), 16) << 24 - i % 8 * 4, "assign");
              return new d.init(r, t / 2);
            }
          }, "assign"), "var-init"),
          g = cc11001100_hook("g", s.Latin1 = cc11001100_hook("s.Latin1", {
            stringify: function (e) {
              for (var t = cc11001100_hook("t", e.words, "var-init"), r = cc11001100_hook("r", e.sigBytes, "var-init"), i = cc11001100_hook("i", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < r; n++) {
                var o = cc11001100_hook("o", t[n >>> 2] >>> 24 - n % 4 * 8 & 255, "var-init");
                i.push(String.fromCharCode(o));
              }
              return i.join("");
            },
            parse: function (e) {
              for (var t = cc11001100_hook("t", e.length, "var-init"), r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < t; i++) r[i >>> 2] |= cc11001100_hook("r[i >>> 2]", (255 & e.charCodeAt(i)) << 24 - i % 4 * 8, "assign");
              return new d.init(r, t);
            }
          }, "assign"), "var-init"),
          u = cc11001100_hook("u", s.Utf8 = cc11001100_hook("s.Utf8", {
            stringify: function (e) {
              try {
                return decodeURIComponent(escape(g.stringify(e)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            parse: function (e) {
              return g.parse(unescape(encodeURIComponent(e)));
            }
          }, "assign"), "var-init"),
          l = cc11001100_hook("l", n.BufferedBlockAlgorithm = cc11001100_hook("n.BufferedBlockAlgorithm", o.extend({
            reset: function () {
              this._data = cc11001100_hook("this._data", new d.init(), "assign"), this._nDataBytes = cc11001100_hook("this._nDataBytes", 0, "assign");
            },
            _append: function (e) {
              "string" == typeof e && (e = cc11001100_hook("e", u.parse(e), "assign")), this._data.concat(e), this._nDataBytes += cc11001100_hook("this._nDataBytes", e.sigBytes, "assign");
            },
            _process: function (e) {
              var t,
                r = cc11001100_hook("r", this._data, "var-init"),
                i = cc11001100_hook("i", r.words, "var-init"),
                n = cc11001100_hook("n", r.sigBytes, "var-init"),
                o = cc11001100_hook("o", this.blockSize, "var-init"),
                s = cc11001100_hook("s", n / (4 * o), "var-init"),
                a = cc11001100_hook("a", (s = cc11001100_hook("s", e ? c.ceil(s) : c.max((0 | s) - this._minBufferSize, 0), "assign")) * o, "var-init"),
                e = cc11001100_hook("e", c.min(4 * a, n), "var-init");
              if (a) {
                for (var g = cc11001100_hook("g", 0, "var-init"); g < a; g += cc11001100_hook("g", o, "assign")) this._doProcessBlock(i, g);
                t = cc11001100_hook("t", i.splice(0, a), "assign"), r.sigBytes -= cc11001100_hook("r.sigBytes", e, "assign");
              }
              return new d.init(t, e);
            },
            clone: function () {
              var e = cc11001100_hook("e", o.clone.call(this), "var-init");
              return e._data = cc11001100_hook("e._data", this._data.clone(), "assign"), e;
            },
            _minBufferSize: cc11001100_hook("_minBufferSize", 0, "object-key-init")
          }), "assign"), "var-init"),
          p = cc11001100_hook("p", (n.Hasher = cc11001100_hook("n.Hasher", l.extend({
            cfg: cc11001100_hook("cfg", o.extend(), "object-key-init"),
            init: function (e) {
              this.cfg = cc11001100_hook("this.cfg", this.cfg.extend(e), "assign"), this.reset();
            },
            reset: function () {
              l.reset.call(this), this._doReset();
            },
            update: function (e) {
              return this._append(e), this._process(), this;
            },
            finalize: function (e) {
              return e && this._append(e), this._doFinalize();
            },
            blockSize: cc11001100_hook("blockSize", 16, "object-key-init"),
            _createHelper: function (r) {
              return function (e, t) {
                return new r.init(t).finalize(e);
              };
            },
            _createHmacHelper: function (r) {
              return function (e, t) {
                return new p.HMAC.init(r, t).finalize(e);
              };
            }
          }), "assign"), e.algo = cc11001100_hook("e.algo", {}, "assign")), "var-init");
        return e;
      }(Math), "assign"), e), "assign");
    }), "var-init"),
    n = cc11001100_hook("n", e(function (e, t) {
      function s(e, t, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        for (var i, n, o = cc11001100_hook("o", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < t; a++) a % 4 && (i = cc11001100_hook("i", r[e.charCodeAt(a - 1)] << a % 4 * 2, "assign"), n = cc11001100_hook("n", r[e.charCodeAt(a)] >>> 6 - a % 4 * 2, "assign"), o[s >>> 2] |= cc11001100_hook("o[s >>> 2]", (i | n) << 24 - s % 4 * 8, "assign"), s++);
        return g.create(o, s);
      }
      var g;
      e.exports = cc11001100_hook("e.exports", (g = cc11001100_hook("g", (e = cc11001100_hook("e", m, "assign")).lib.WordArray, "assign"), e.enc.Base64 = cc11001100_hook("e.enc.Base64", {
        stringify: function (e) {
          for (var t = cc11001100_hook("t", e.words, "var-init"), r = cc11001100_hook("r", e.sigBytes, "var-init"), i = cc11001100_hook("i", this._map, "var-init"), n = cc11001100_hook("n", (e.clamp(), []), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < r; o += cc11001100_hook("o", 3, "assign")) for (var s = cc11001100_hook("s", (t[o >>> 2] >>> 24 - o % 4 * 8 & 255) << 16 | (t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255) << 8 | t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < 4 && o + .75 * a < r; a++) n.push(i.charAt(s >>> 6 * (3 - a) & 63));
          var g = cc11001100_hook("g", i.charAt(64), "var-init");
          if (g) for (; n.length % 4;) n.push(g);
          return n.join("");
        },
        parse: function (e) {
          var t = cc11001100_hook("t", e.length, "var-init"),
            r = cc11001100_hook("r", this._map, "var-init");
          if (!(i = cc11001100_hook("i", this._reverseMap, "assign"))) for (var i = cc11001100_hook("i", this._reverseMap = cc11001100_hook("this._reverseMap", [], "assign"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < r.length; n++) i[r.charCodeAt(n)] = cc11001100_hook("i[r.charCodeAt(n)]", n, "assign");
          var o = cc11001100_hook("o", r.charAt(64), "var-init");
          return o && -1 !== (o = cc11001100_hook("o", e.indexOf(o), "assign")) && (t = cc11001100_hook("t", o, "assign")), s(e, t, i);
        },
        _map: cc11001100_hook("_map", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", "object-key-init")
      }, "assign"), e.enc.Base64), "assign");
    }), "var-init"),
    o = cc11001100_hook("o", (e(function (e, t) {
      e.exports = cc11001100_hook("e.exports", function (e) {
        for (var d = cc11001100_hook("d", Math, "var-init"), t = cc11001100_hook("t", e, "var-init"), r = cc11001100_hook("r", t.lib, "var-init"), i = cc11001100_hook("i", r.WordArray, "var-init"), n = cc11001100_hook("n", r.Hasher, "var-init"), o = cc11001100_hook("o", t.algo, "var-init"), I = cc11001100_hook("I", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < 64; s++) I[s] = cc11001100_hook("I[s]", d.abs(d.sin(s + 1)) * 4294967296 | 0, "assign");
        var a = cc11001100_hook("a", o.MD5 = cc11001100_hook("o.MD5", n.extend({
          _doReset: function () {
            this._hash = cc11001100_hook("this._hash", new i.init([1732584193, 4023233417, 2562383102, 271733878]), "assign");
          },
          _doProcessBlock: function (e, t) {
            for (var r = cc11001100_hook("r", 0, "var-init"); r < 16; r++) {
              var i = cc11001100_hook("i", t + r, "var-init");
              var n = cc11001100_hook("n", e[i], "var-init");
              e[i] = cc11001100_hook("e[i]", (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360, "assign");
            }
            var o = cc11001100_hook("o", this._hash.words, "var-init");
            var s = cc11001100_hook("s", e[t + 0], "var-init");
            var a = cc11001100_hook("a", e[t + 1], "var-init");
            var g = cc11001100_hook("g", e[t + 2], "var-init");
            var c = cc11001100_hook("c", e[t + 3], "var-init");
            var d = cc11001100_hook("d", e[t + 4], "var-init");
            var u = cc11001100_hook("u", e[t + 5], "var-init");
            var l = cc11001100_hook("l", e[t + 6], "var-init");
            var p = cc11001100_hook("p", e[t + 7], "var-init");
            var f = cc11001100_hook("f", e[t + 8], "var-init");
            var m = cc11001100_hook("m", e[t + 9], "var-init");
            var h = cc11001100_hook("h", e[t + 10], "var-init");
            var K = cc11001100_hook("K", e[t + 11], "var-init");
            var y = cc11001100_hook("y", e[t + 12], "var-init");
            var U = cc11001100_hook("U", e[t + 13], "var-init");
            var v = cc11001100_hook("v", e[t + 14], "var-init");
            var k = cc11001100_hook("k", e[t + 15], "var-init");
            var C = cc11001100_hook("C", o[0], "var-init");
            var _ = cc11001100_hook("_", o[1], "var-init");
            var b = cc11001100_hook("b", o[2], "var-init");
            var w = cc11001100_hook("w", o[3], "var-init");
            C = cc11001100_hook("C", T(C, _, b, w, s, 7, I[0]), "assign");
            w = cc11001100_hook("w", T(w, C, _, b, a, 12, I[1]), "assign");
            b = cc11001100_hook("b", T(b, w, C, _, g, 17, I[2]), "assign");
            _ = cc11001100_hook("_", T(_, b, w, C, c, 22, I[3]), "assign");
            C = cc11001100_hook("C", T(C, _, b, w, d, 7, I[4]), "assign");
            w = cc11001100_hook("w", T(w, C, _, b, u, 12, I[5]), "assign");
            b = cc11001100_hook("b", T(b, w, C, _, l, 17, I[6]), "assign");
            _ = cc11001100_hook("_", T(_, b, w, C, p, 22, I[7]), "assign");
            C = cc11001100_hook("C", T(C, _, b, w, f, 7, I[8]), "assign");
            w = cc11001100_hook("w", T(w, C, _, b, m, 12, I[9]), "assign");
            b = cc11001100_hook("b", T(b, w, C, _, h, 17, I[10]), "assign");
            _ = cc11001100_hook("_", T(_, b, w, C, K, 22, I[11]), "assign");
            C = cc11001100_hook("C", T(C, _, b, w, y, 7, I[12]), "assign");
            w = cc11001100_hook("w", T(w, C, _, b, U, 12, I[13]), "assign");
            b = cc11001100_hook("b", T(b, w, C, _, v, 17, I[14]), "assign");
            _ = cc11001100_hook("_", T(_, b, w, C, k, 22, I[15]), "assign");
            C = cc11001100_hook("C", S(C, _, b, w, a, 5, I[16]), "assign");
            w = cc11001100_hook("w", S(w, C, _, b, l, 9, I[17]), "assign");
            b = cc11001100_hook("b", S(b, w, C, _, K, 14, I[18]), "assign");
            _ = cc11001100_hook("_", S(_, b, w, C, s, 20, I[19]), "assign");
            C = cc11001100_hook("C", S(C, _, b, w, u, 5, I[20]), "assign");
            w = cc11001100_hook("w", S(w, C, _, b, h, 9, I[21]), "assign");
            b = cc11001100_hook("b", S(b, w, C, _, k, 14, I[22]), "assign");
            _ = cc11001100_hook("_", S(_, b, w, C, d, 20, I[23]), "assign");
            C = cc11001100_hook("C", S(C, _, b, w, m, 5, I[24]), "assign");
            w = cc11001100_hook("w", S(w, C, _, b, v, 9, I[25]), "assign");
            b = cc11001100_hook("b", S(b, w, C, _, c, 14, I[26]), "assign");
            _ = cc11001100_hook("_", S(_, b, w, C, f, 20, I[27]), "assign");
            C = cc11001100_hook("C", S(C, _, b, w, U, 5, I[28]), "assign");
            w = cc11001100_hook("w", S(w, C, _, b, g, 9, I[29]), "assign");
            b = cc11001100_hook("b", S(b, w, C, _, p, 14, I[30]), "assign");
            _ = cc11001100_hook("_", S(_, b, w, C, y, 20, I[31]), "assign");
            C = cc11001100_hook("C", E(C, _, b, w, u, 4, I[32]), "assign");
            w = cc11001100_hook("w", E(w, C, _, b, f, 11, I[33]), "assign");
            b = cc11001100_hook("b", E(b, w, C, _, K, 16, I[34]), "assign");
            _ = cc11001100_hook("_", E(_, b, w, C, v, 23, I[35]), "assign");
            C = cc11001100_hook("C", E(C, _, b, w, a, 4, I[36]), "assign");
            w = cc11001100_hook("w", E(w, C, _, b, d, 11, I[37]), "assign");
            b = cc11001100_hook("b", E(b, w, C, _, p, 16, I[38]), "assign");
            _ = cc11001100_hook("_", E(_, b, w, C, h, 23, I[39]), "assign");
            C = cc11001100_hook("C", E(C, _, b, w, U, 4, I[40]), "assign");
            w = cc11001100_hook("w", E(w, C, _, b, s, 11, I[41]), "assign");
            b = cc11001100_hook("b", E(b, w, C, _, c, 16, I[42]), "assign");
            _ = cc11001100_hook("_", E(_, b, w, C, l, 23, I[43]), "assign");
            C = cc11001100_hook("C", E(C, _, b, w, m, 4, I[44]), "assign");
            w = cc11001100_hook("w", E(w, C, _, b, y, 11, I[45]), "assign");
            b = cc11001100_hook("b", E(b, w, C, _, k, 16, I[46]), "assign");
            _ = cc11001100_hook("_", E(_, b, w, C, g, 23, I[47]), "assign");
            C = cc11001100_hook("C", A(C, _, b, w, s, 6, I[48]), "assign");
            w = cc11001100_hook("w", A(w, C, _, b, p, 10, I[49]), "assign");
            b = cc11001100_hook("b", A(b, w, C, _, v, 15, I[50]), "assign");
            _ = cc11001100_hook("_", A(_, b, w, C, u, 21, I[51]), "assign");
            C = cc11001100_hook("C", A(C, _, b, w, y, 6, I[52]), "assign");
            w = cc11001100_hook("w", A(w, C, _, b, c, 10, I[53]), "assign");
            b = cc11001100_hook("b", A(b, w, C, _, h, 15, I[54]), "assign");
            _ = cc11001100_hook("_", A(_, b, w, C, a, 21, I[55]), "assign");
            C = cc11001100_hook("C", A(C, _, b, w, f, 6, I[56]), "assign");
            w = cc11001100_hook("w", A(w, C, _, b, k, 10, I[57]), "assign");
            b = cc11001100_hook("b", A(b, w, C, _, l, 15, I[58]), "assign");
            _ = cc11001100_hook("_", A(_, b, w, C, U, 21, I[59]), "assign");
            C = cc11001100_hook("C", A(C, _, b, w, d, 6, I[60]), "assign");
            w = cc11001100_hook("w", A(w, C, _, b, K, 10, I[61]), "assign");
            b = cc11001100_hook("b", A(b, w, C, _, g, 15, I[62]), "assign");
            _ = cc11001100_hook("_", A(_, b, w, C, m, 21, I[63]), "assign");
            o[0] = cc11001100_hook("o[0]", o[0] + C | 0, "assign");
            o[1] = cc11001100_hook("o[1]", o[1] + _ | 0, "assign");
            o[2] = cc11001100_hook("o[2]", o[2] + b | 0, "assign");
            o[3] = cc11001100_hook("o[3]", o[3] + w | 0, "assign");
          },
          _doFinalize: function () {
            var e = cc11001100_hook("e", this._data, "var-init");
            var t = cc11001100_hook("t", e.words, "var-init");
            var r = cc11001100_hook("r", this._nDataBytes * 8, "var-init");
            var i = cc11001100_hook("i", e.sigBytes * 8, "var-init");
            t[i >>> 5] |= cc11001100_hook("t[i >>> 5]", 128 << 24 - i % 32, "assign");
            var n = cc11001100_hook("n", d.floor(r / 4294967296), "var-init");
            var o = cc11001100_hook("o", r, "var-init");
            t[(i + 64 >>> 9 << 4) + 15] = cc11001100_hook("t[(i + 64 >>> 9 << 4) + 15]", (n << 8 | n >>> 24) & 16711935 | (n << 24 | n >>> 8) & 4278255360, "assign");
            t[(i + 64 >>> 9 << 4) + 14] = cc11001100_hook("t[(i + 64 >>> 9 << 4) + 14]", (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, "assign");
            e.sigBytes = cc11001100_hook("e.sigBytes", (t.length + 1) * 4, "assign");
            this._process();
            var s = cc11001100_hook("s", this._hash, "var-init");
            var a = cc11001100_hook("a", s.words, "var-init");
            for (var g = cc11001100_hook("g", 0, "var-init"); g < 4; g++) {
              var c = cc11001100_hook("c", a[g], "var-init");
              a[g] = cc11001100_hook("a[g]", (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360, "assign");
            }
            return s;
          },
          clone: function () {
            var e = cc11001100_hook("e", n.clone.call(this), "var-init");
            e._hash = cc11001100_hook("e._hash", this._hash.clone(), "assign");
            return e;
          }
        }), "assign"), "var-init");
        function T(e, t, r, i, n, o, s) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          cc11001100_hook("s", s, "function-parameter");
          var a = cc11001100_hook("a", e + (t & r | ~t & i) + n + s, "var-init");
          return (a << o | a >>> 32 - o) + t;
        }
        function S(e, t, r, i, n, o, s) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          cc11001100_hook("s", s, "function-parameter");
          var a = cc11001100_hook("a", e + (t & i | r & ~i) + n + s, "var-init");
          return (a << o | a >>> 32 - o) + t;
        }
        function E(e, t, r, i, n, o, s) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          cc11001100_hook("s", s, "function-parameter");
          var a = cc11001100_hook("a", e + (t ^ r ^ i) + n + s, "var-init");
          return (a << o | a >>> 32 - o) + t;
        }
        function A(e, t, r, i, n, o, s) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          cc11001100_hook("s", s, "function-parameter");
          var a = cc11001100_hook("a", e + (r ^ (t | ~i)) + n + s, "var-init");
          return (a << o | a >>> 32 - o) + t;
        }
        return t.MD5 = cc11001100_hook("t.MD5", n._createHelper(a), "assign"), t.HmacMD5 = cc11001100_hook("t.HmacMD5", n._createHmacHelper(a), "assign"), e.MD5;
      }(m), "assign");
    }), e(function (e, t) {
      var r, i, n, d, o;
      e.exports = cc11001100_hook("e.exports", (o = cc11001100_hook("o", (r = cc11001100_hook("r", e = cc11001100_hook("e", m, "assign"), "assign")).lib, "assign"), i = cc11001100_hook("i", o.WordArray, "assign"), n = cc11001100_hook("n", o.Hasher, "assign"), o = cc11001100_hook("o", r.algo, "assign"), d = cc11001100_hook("d", [], "assign"), o = cc11001100_hook("o", o.SHA1 = cc11001100_hook("o.SHA1", n.extend({
        _doReset: function () {
          this._hash = cc11001100_hook("this._hash", new i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]), "assign");
        },
        _doProcessBlock: function (e, t) {
          for (var r = cc11001100_hook("r", this._hash.words, "var-init"), i = cc11001100_hook("i", r[0], "var-init"), n = cc11001100_hook("n", r[1], "var-init"), o = cc11001100_hook("o", r[2], "var-init"), s = cc11001100_hook("s", r[3], "var-init"), a = cc11001100_hook("a", r[4], "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < 80; g++) {
            g < 16 ? d[g] = cc11001100_hook("d[g]", 0 | e[t + g], "assign") : (c = cc11001100_hook("c", d[g - 3] ^ d[g - 8] ^ d[g - 14] ^ d[g - 16], "assign"), d[g] = cc11001100_hook("d[g]", c << 1 | c >>> 31, "assign"));
            var c = cc11001100_hook("c", (i << 5 | i >>> 27) + a + d[g], "var-init");
            c += cc11001100_hook("c", g < 20 ? 1518500249 + (n & o | ~n & s) : g < 40 ? 1859775393 + (n ^ o ^ s) : g < 60 ? (n & o | n & s | o & s) - 1894007588 : (n ^ o ^ s) - 899497514, "assign"), a = cc11001100_hook("a", s, "assign"), s = cc11001100_hook("s", o, "assign"), o = cc11001100_hook("o", n << 30 | n >>> 2, "assign"), n = cc11001100_hook("n", i, "assign"), i = cc11001100_hook("i", c, "assign");
          }
          r[0] = cc11001100_hook("r[0]", r[0] + i | 0, "assign"), r[1] = cc11001100_hook("r[1]", r[1] + n | 0, "assign"), r[2] = cc11001100_hook("r[2]", r[2] + o | 0, "assign"), r[3] = cc11001100_hook("r[3]", r[3] + s | 0, "assign"), r[4] = cc11001100_hook("r[4]", r[4] + a | 0, "assign");
        },
        _doFinalize: function () {
          var e = cc11001100_hook("e", this._data, "var-init"),
            t = cc11001100_hook("t", e.words, "var-init"),
            r = cc11001100_hook("r", 8 * this._nDataBytes, "var-init"),
            i = cc11001100_hook("i", 8 * e.sigBytes, "var-init");
          return t[i >>> 5] |= cc11001100_hook("t[i >>> 5]", 128 << 24 - i % 32, "assign"), t[14 + (64 + i >>> 9 << 4)] = cc11001100_hook("t[14 + (64 + i >>> 9 << 4)]", Math.floor(r / 4294967296), "assign"), t[15 + (64 + i >>> 9 << 4)] = cc11001100_hook("t[15 + (64 + i >>> 9 << 4)]", r, "assign"), e.sigBytes = cc11001100_hook("e.sigBytes", 4 * t.length, "assign"), this._process(), this._hash;
        },
        clone: function () {
          var e = cc11001100_hook("e", n.clone.call(this), "var-init");
          return e._hash = cc11001100_hook("e._hash", this._hash.clone(), "assign"), e;
        }
      }), "assign"), "assign"), r.SHA1 = cc11001100_hook("r.SHA1", n._createHelper(o), "assign"), r.HmacSHA1 = cc11001100_hook("r.HmacSHA1", n._createHmacHelper(o), "assign"), e.SHA1), "assign");
    }), e(function (e, t) {
      var r, a;
      e.exports = cc11001100_hook("e.exports", (r = cc11001100_hook("r", (e = cc11001100_hook("e", m, "assign")).lib.Base, "assign"), a = cc11001100_hook("a", e.enc.Utf8, "assign"), void (e.algo.HMAC = cc11001100_hook("e.algo.HMAC", r.extend({
        init: function (e, t) {
          e = cc11001100_hook("e", this._hasher = cc11001100_hook("this._hasher", new e.init(), "assign"), "assign"), "string" == typeof t && (t = cc11001100_hook("t", a.parse(t), "assign"));
          for (var r = cc11001100_hook("r", e.blockSize, "var-init"), i = cc11001100_hook("i", 4 * r, "var-init"), e = cc11001100_hook("e", ((t = cc11001100_hook("t", t.sigBytes > i ? e.finalize(t) : t, "assign")).clamp(), this._oKey = cc11001100_hook("this._oKey", t.clone(), "assign")), "var-init"), t = cc11001100_hook("t", this._iKey = cc11001100_hook("this._iKey", t.clone(), "assign"), "var-init"), n = cc11001100_hook("n", e.words, "var-init"), o = cc11001100_hook("o", t.words, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < r; s++) n[s] ^= cc11001100_hook("n[s]", 1549556828, "assign"), o[s] ^= cc11001100_hook("o[s]", 909522486, "assign");
          e.sigBytes = cc11001100_hook("e.sigBytes", t.sigBytes = cc11001100_hook("t.sigBytes", i, "assign"), "assign"), this.reset();
        },
        reset: function () {
          var e = cc11001100_hook("e", this._hasher, "var-init");
          e.reset(), e.update(this._iKey);
        },
        update: function (e) {
          return this._hasher.update(e), this;
        },
        finalize: function (e) {
          var t = cc11001100_hook("t", this._hasher, "var-init"),
            e = cc11001100_hook("e", t.finalize(e), "var-init");
          return t.reset(), t.finalize(this._oKey.clone().concat(e));
        }
      }), "assign"))), "assign");
    }), e(function (e, t) {
      var r, i, d, n, o, s;
      e.exports = cc11001100_hook("e.exports", (n = cc11001100_hook("n", (r = cc11001100_hook("r", e = cc11001100_hook("e", m, "assign"), "assign")).lib, "assign"), i = cc11001100_hook("i", n.Base, "assign"), d = cc11001100_hook("d", n.WordArray, "assign"), n = cc11001100_hook("n", r.algo, "assign"), o = cc11001100_hook("o", n.MD5, "assign"), s = cc11001100_hook("s", n.EvpKDF = cc11001100_hook("n.EvpKDF", i.extend({
        cfg: cc11001100_hook("cfg", i.extend({
          keySize: cc11001100_hook("keySize", 4, "object-key-init"),
          hasher: cc11001100_hook("hasher", o, "object-key-init"),
          iterations: cc11001100_hook("iterations", 1, "object-key-init")
        }), "object-key-init"),
        init: function (e) {
          this.cfg = cc11001100_hook("this.cfg", this.cfg.extend(e), "assign");
        },
        compute: function (e, t) {
          for (var r, i = cc11001100_hook("i", this.cfg, "var-init"), n = cc11001100_hook("n", i.hasher.create(), "var-init"), o = cc11001100_hook("o", d.create(), "var-init"), s = cc11001100_hook("s", o.words, "var-init"), a = cc11001100_hook("a", i.keySize, "var-init"), g = cc11001100_hook("g", i.iterations, "var-init"); s.length < a;) {
            r && n.update(r), r = cc11001100_hook("r", n.update(e).finalize(t), "assign"), n.reset();
            for (var c = cc11001100_hook("c", 1, "var-init"); c < g; c++) r = cc11001100_hook("r", n.finalize(r), "assign"), n.reset();
            o.concat(r);
          }
          return o.sigBytes = cc11001100_hook("o.sigBytes", 4 * a, "assign"), o;
        }
      }), "assign"), "assign"), r.EvpKDF = cc11001100_hook("r.EvpKDF", function (e, t, r) {
        return s.create(r).compute(e, t);
      }, "assign"), e.EvpKDF), "assign");
    }), e(function (e, t) {
      var r, i, s, n, o, a, g, c, d, u, l, p, f;
      e.exports = cc11001100_hook("e.exports", void ((e = cc11001100_hook("e", m, "assign")).lib.Cipher || (r = cc11001100_hook("r", (e = cc11001100_hook("e", e, "assign")).lib, "assign"), i = cc11001100_hook("i", r.Base, "assign"), s = cc11001100_hook("s", r.WordArray, "assign"), n = cc11001100_hook("n", r.BufferedBlockAlgorithm, "assign"), (u = cc11001100_hook("u", e.enc, "assign")).Utf8, o = cc11001100_hook("o", u.Base64, "assign"), a = cc11001100_hook("a", e.algo.EvpKDF, "assign"), g = cc11001100_hook("g", r.Cipher = cc11001100_hook("r.Cipher", n.extend({
        cfg: cc11001100_hook("cfg", i.extend(), "object-key-init"),
        createEncryptor: function (e, t) {
          return this.create(this._ENC_XFORM_MODE, e, t);
        },
        createDecryptor: function (e, t) {
          return this.create(this._DEC_XFORM_MODE, e, t);
        },
        init: function (e, t, r) {
          this.cfg = cc11001100_hook("this.cfg", this.cfg.extend(r), "assign"), this._xformMode = cc11001100_hook("this._xformMode", e, "assign"), this._key = cc11001100_hook("this._key", t, "assign"), this.reset();
        },
        reset: function () {
          n.reset.call(this), this._doReset();
        },
        process: function (e) {
          return this._append(e), this._process();
        },
        finalize: function (e) {
          return e && this._append(e), this._doFinalize();
        },
        keySize: cc11001100_hook("keySize", 4, "object-key-init"),
        ivSize: cc11001100_hook("ivSize", 4, "object-key-init"),
        _ENC_XFORM_MODE: cc11001100_hook("_ENC_XFORM_MODE", 1, "object-key-init"),
        _DEC_XFORM_MODE: cc11001100_hook("_DEC_XFORM_MODE", 2, "object-key-init"),
        _createHelper: cc11001100_hook("_createHelper", function () {
          function n(e) {
            cc11001100_hook("e", e, "function-parameter");
            return "string" == typeof e ? f : l;
          }
          return function (i) {
            return {
              encrypt: function (e, t, r) {
                return n(t).encrypt(i, e, t, r);
              },
              decrypt: function (e, t, r) {
                return n(t).decrypt(i, e, t, r);
              }
            };
          };
        }(), "object-key-init")
      }), "assign"), "assign"), r.StreamCipher = cc11001100_hook("r.StreamCipher", g.extend({
        _doFinalize: function () {
          return this._process(!0);
        },
        blockSize: cc11001100_hook("blockSize", 1, "object-key-init")
      }), "assign"), u = cc11001100_hook("u", e.mode = cc11001100_hook("e.mode", {}, "assign"), "assign"), c = cc11001100_hook("c", r.BlockCipherMode = cc11001100_hook("r.BlockCipherMode", i.extend({
        createEncryptor: function (e, t) {
          return this.Encryptor.create(e, t);
        },
        createDecryptor: function (e, t) {
          return this.Decryptor.create(e, t);
        },
        init: function (e, t) {
          this._cipher = cc11001100_hook("this._cipher", e, "assign"), this._iv = cc11001100_hook("this._iv", t, "assign");
        }
      }), "assign"), "assign"), u = cc11001100_hook("u", u.CBC = cc11001100_hook("u.CBC", function () {
        var e = cc11001100_hook("e", c.extend(), "var-init");
        function o(e, t, r) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          var i,
            n = cc11001100_hook("n", this._iv, "var-init");
          n ? (i = cc11001100_hook("i", n, "assign"), this._iv = cc11001100_hook("this._iv", void 0, "assign")) : i = cc11001100_hook("i", this._prevBlock, "assign");
          for (var o = cc11001100_hook("o", 0, "var-init"); o < r; o++) e[t + o] ^= cc11001100_hook("e[t + o]", i[o], "assign");
        }
        return e.Encryptor = cc11001100_hook("e.Encryptor", e.extend({
          processBlock: function (e, t) {
            var r = cc11001100_hook("r", this._cipher, "var-init"),
              i = cc11001100_hook("i", r.blockSize, "var-init");
            o.call(this, e, t, i), r.encryptBlock(e, t), this._prevBlock = cc11001100_hook("this._prevBlock", e.slice(t, t + i), "assign");
          }
        }), "assign"), e.Decryptor = cc11001100_hook("e.Decryptor", e.extend({
          processBlock: function (e, t) {
            var r = cc11001100_hook("r", this._cipher, "var-init"),
              i = cc11001100_hook("i", r.blockSize, "var-init"),
              n = cc11001100_hook("n", e.slice(t, t + i), "var-init");
            r.decryptBlock(e, t), o.call(this, e, t, i), this._prevBlock = cc11001100_hook("this._prevBlock", n, "assign");
          }
        }), "assign"), e;
      }(), "assign"), "assign"), p = cc11001100_hook("p", (e.pad = cc11001100_hook("e.pad", {}, "assign")).Pkcs7 = cc11001100_hook("(e.pad = {}).Pkcs7", {
        pad: function (e, t) {
          for (var t = cc11001100_hook("t", 4 * t, "var-init"), r = cc11001100_hook("r", t - e.sigBytes % t, "var-init"), i = cc11001100_hook("i", r << 24 | r << 16 | r << 8 | r, "var-init"), n = cc11001100_hook("n", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < r; o += cc11001100_hook("o", 4, "assign")) n.push(i);
          t = cc11001100_hook("t", s.create(n, r), "assign");
          e.concat(t);
        },
        unpad: function (e) {
          var t = cc11001100_hook("t", 255 & e.words[e.sigBytes - 1 >>> 2], "var-init");
          e.sigBytes -= cc11001100_hook("e.sigBytes", t, "assign");
        }
      }, "assign"), "assign"), r.BlockCipher = cc11001100_hook("r.BlockCipher", g.extend({
        cfg: cc11001100_hook("cfg", g.cfg.extend({
          mode: cc11001100_hook("mode", u, "object-key-init"),
          padding: cc11001100_hook("padding", p, "object-key-init")
        }), "object-key-init"),
        reset: function () {
          g.reset.call(this);
          var e,
            t = cc11001100_hook("t", this.cfg, "var-init"),
            r = cc11001100_hook("r", t.iv, "var-init"),
            t = cc11001100_hook("t", t.mode, "var-init");
          this._xformMode == this._ENC_XFORM_MODE ? e = cc11001100_hook("e", t.createEncryptor, "assign") : (e = cc11001100_hook("e", t.createDecryptor, "assign"), this._minBufferSize = cc11001100_hook("this._minBufferSize", 1, "assign")), this._mode && this._mode.__creator == e ? this._mode.init(this, r && r.words) : (this._mode = cc11001100_hook("this._mode", e.call(t, this, r && r.words), "assign"), this._mode.__creator = cc11001100_hook("this._mode.__creator", e, "assign"));
        },
        _doProcessBlock: function (e, t) {
          this._mode.processBlock(e, t);
        },
        _doFinalize: function () {
          var e,
            t = cc11001100_hook("t", this.cfg.padding, "var-init");
          return this._xformMode == this._ENC_XFORM_MODE ? (t.pad(this._data, this.blockSize), e = cc11001100_hook("e", this._process(!0), "assign")) : (e = cc11001100_hook("e", this._process(!0), "assign"), t.unpad(e)), e;
        },
        blockSize: cc11001100_hook("blockSize", 4, "object-key-init")
      }), "assign"), d = cc11001100_hook("d", r.CipherParams = cc11001100_hook("r.CipherParams", i.extend({
        init: function (e) {
          this.mixIn(e);
        },
        toString: function (e) {
          return (e || this.formatter).stringify(this);
        }
      }), "assign"), "assign"), u = cc11001100_hook("u", (e.format = cc11001100_hook("e.format", {}, "assign")).OpenSSL = cc11001100_hook("(e.format = {}).OpenSSL", {
        stringify: function (e) {
          var t = cc11001100_hook("t", e.ciphertext, "var-init"),
            e = cc11001100_hook("e", e.salt, "var-init"),
            e = cc11001100_hook("e", e ? s.create([1398893684, 1701076831]).concat(e).concat(t) : t, "var-init");
          return e.toString(o);
        },
        parse: function (e) {
          var t,
            e = cc11001100_hook("e", o.parse(e), "var-init"),
            r = cc11001100_hook("r", e.words, "var-init");
          return 1398893684 == r[0] && 1701076831 == r[1] && (t = cc11001100_hook("t", s.create(r.slice(2, 4)), "assign"), r.splice(0, 4), e.sigBytes -= cc11001100_hook("e.sigBytes", 16, "assign")), d.create({
            ciphertext: cc11001100_hook("ciphertext", e, "object-key-init"),
            salt: cc11001100_hook("salt", t, "object-key-init")
          });
        }
      }, "assign"), "assign"), l = cc11001100_hook("l", r.SerializableCipher = cc11001100_hook("r.SerializableCipher", i.extend({
        cfg: cc11001100_hook("cfg", i.extend({
          format: cc11001100_hook("format", u, "object-key-init")
        }), "object-key-init"),
        encrypt: function (e, t, r, i) {
          i = cc11001100_hook("i", this.cfg.extend(i), "assign");
          var n = cc11001100_hook("n", e.createEncryptor(r, i), "var-init"),
            t = cc11001100_hook("t", n.finalize(t), "var-init"),
            n = cc11001100_hook("n", n.cfg, "var-init");
          return d.create({
            ciphertext: cc11001100_hook("ciphertext", t, "object-key-init"),
            key: cc11001100_hook("key", r, "object-key-init"),
            iv: cc11001100_hook("iv", n.iv, "object-key-init"),
            algorithm: cc11001100_hook("algorithm", e, "object-key-init"),
            mode: cc11001100_hook("mode", n.mode, "object-key-init"),
            padding: cc11001100_hook("padding", n.padding, "object-key-init"),
            blockSize: cc11001100_hook("blockSize", e.blockSize, "object-key-init"),
            formatter: cc11001100_hook("formatter", i.format, "object-key-init")
          });
        },
        decrypt: function (e, t, r, i) {
          return i = cc11001100_hook("i", this.cfg.extend(i), "assign"), t = cc11001100_hook("t", this._parse(t, i.format), "assign"), e.createDecryptor(r, i).finalize(t.ciphertext);
        },
        _parse: function (e, t) {
          return "string" == typeof e ? t.parse(e, this) : e;
        }
      }), "assign"), "assign"), p = cc11001100_hook("p", (e.kdf = cc11001100_hook("e.kdf", {}, "assign")).OpenSSL = cc11001100_hook("(e.kdf = {}).OpenSSL", {
        execute: function (e, t, r, i) {
          i = cc11001100_hook("i", i || s.random(8), "assign");
          e = cc11001100_hook("e", a.create({
            keySize: cc11001100_hook("keySize", t + r, "object-key-init")
          }).compute(e, i), "assign"), r = cc11001100_hook("r", s.create(e.words.slice(t), 4 * r), "assign");
          return e.sigBytes = cc11001100_hook("e.sigBytes", 4 * t, "assign"), d.create({
            key: cc11001100_hook("key", e, "object-key-init"),
            iv: cc11001100_hook("iv", r, "object-key-init"),
            salt: cc11001100_hook("salt", i, "object-key-init")
          });
        }
      }, "assign"), "assign"), f = cc11001100_hook("f", r.PasswordBasedCipher = cc11001100_hook("r.PasswordBasedCipher", l.extend({
        cfg: cc11001100_hook("cfg", l.cfg.extend({
          kdf: cc11001100_hook("kdf", p, "object-key-init")
        }), "object-key-init"),
        encrypt: function (e, t, r, i) {
          r = cc11001100_hook("r", (i = cc11001100_hook("i", this.cfg.extend(i), "assign")).kdf.execute(r, e.keySize, e.ivSize), "assign"), i.iv = cc11001100_hook("i.iv", r.iv, "assign"), e = cc11001100_hook("e", l.encrypt.call(this, e, t, r.key, i), "assign");
          return e.mixIn(r), e;
        },
        decrypt: function (e, t, r, i) {
          i = cc11001100_hook("i", this.cfg.extend(i), "assign"), t = cc11001100_hook("t", this._parse(t, i.format), "assign");
          r = cc11001100_hook("r", i.kdf.execute(r, e.keySize, e.ivSize, t.salt), "assign");
          return i.iv = cc11001100_hook("i.iv", r.iv, "assign"), l.decrypt.call(this, e, t, r.key, i);
        }
      }), "assign"), "assign"))), "assign");
    }), e(function (e, t) {
      e.exports = cc11001100_hook("e.exports", function (e) {
        for (var t = cc11001100_hook("t", e, "var-init"), r, i = cc11001100_hook("i", t.lib.BlockCipher, "var-init"), n = cc11001100_hook("n", t.algo, "var-init"), d = cc11001100_hook("d", [], "var-init"), o = cc11001100_hook("o", [], "var-init"), s = cc11001100_hook("s", [], "var-init"), a = cc11001100_hook("a", [], "var-init"), g = cc11001100_hook("g", [], "var-init"), c = cc11001100_hook("c", [], "var-init"), u = cc11001100_hook("u", [], "var-init"), l = cc11001100_hook("l", [], "var-init"), p = cc11001100_hook("p", [], "var-init"), f = cc11001100_hook("f", [], "var-init"), m = cc11001100_hook("m", [], "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < 256; h++) if (h < 128) m[h] = cc11001100_hook("m[h]", h << 1, "assign");else m[h] = cc11001100_hook("m[h]", h << 1 ^ 283, "assign");
        for (var K = cc11001100_hook("K", 0, "var-init"), y = cc11001100_hook("y", 0, "var-init"), h = cc11001100_hook("h", 0, "var-init"); h < 256; h++) {
          var U = cc11001100_hook("U", y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4, "var-init");
          U = cc11001100_hook("U", U >>> 8 ^ U & 255 ^ 99, "assign");
          d[K] = cc11001100_hook("d[K]", U, "assign");
          o[U] = cc11001100_hook("o[U]", K, "assign");
          var v = cc11001100_hook("v", m[K], "var-init");
          var k = cc11001100_hook("k", m[v], "var-init");
          var C = cc11001100_hook("C", m[k], "var-init");
          var _ = cc11001100_hook("_", m[U] * 257 ^ U * 16843008, "var-init");
          s[K] = cc11001100_hook("s[K]", _ << 24 | _ >>> 8, "assign");
          a[K] = cc11001100_hook("a[K]", _ << 16 | _ >>> 16, "assign");
          g[K] = cc11001100_hook("g[K]", _ << 8 | _ >>> 24, "assign");
          c[K] = cc11001100_hook("c[K]", _, "assign");
          var _ = cc11001100_hook("_", C * 16843009 ^ k * 65537 ^ v * 257 ^ K * 16843008, "var-init");
          u[U] = cc11001100_hook("u[U]", _ << 24 | _ >>> 8, "assign");
          l[U] = cc11001100_hook("l[U]", _ << 16 | _ >>> 16, "assign");
          p[U] = cc11001100_hook("p[U]", _ << 8 | _ >>> 24, "assign");
          f[U] = cc11001100_hook("f[U]", _, "assign");
          if (!K) K = cc11001100_hook("K", y = cc11001100_hook("y", 1, "assign"), "assign");else {
            K = cc11001100_hook("K", v ^ m[m[m[C ^ v]]], "assign");
            y ^= cc11001100_hook("y", m[m[y]], "assign");
          }
        }
        var b = cc11001100_hook("b", [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], "var-init"),
          w = cc11001100_hook("w", n.AES = cc11001100_hook("n.AES", i.extend({
            _doReset: function () {
              var e;
              if (this._nRounds && this._keyPriorReset === this._key) return;
              var t = cc11001100_hook("t", this._keyPriorReset = cc11001100_hook("this._keyPriorReset", this._key, "assign"), "var-init");
              var r = cc11001100_hook("r", t.words, "var-init");
              var i = cc11001100_hook("i", t.sigBytes / 4, "var-init");
              var n = cc11001100_hook("n", this._nRounds = cc11001100_hook("this._nRounds", i + 6, "assign"), "var-init");
              var o = cc11001100_hook("o", (n + 1) * 4, "var-init");
              var s = cc11001100_hook("s", this._keySchedule = cc11001100_hook("this._keySchedule", [], "assign"), "var-init");
              for (var a = cc11001100_hook("a", 0, "var-init"); a < o; a++) if (a < i) s[a] = cc11001100_hook("s[a]", r[a], "assign");else {
                e = cc11001100_hook("e", s[a - 1], "assign");
                if (!(a % i)) {
                  e = cc11001100_hook("e", e << 8 | e >>> 24, "assign");
                  e = cc11001100_hook("e", d[e >>> 24] << 24 | d[e >>> 16 & 255] << 16 | d[e >>> 8 & 255] << 8 | d[e & 255], "assign");
                  e ^= cc11001100_hook("e", b[a / i | 0] << 24, "assign");
                } else if (i > 6 && a % i == 4) e = cc11001100_hook("e", d[e >>> 24] << 24 | d[e >>> 16 & 255] << 16 | d[e >>> 8 & 255] << 8 | d[e & 255], "assign");
                s[a] = cc11001100_hook("s[a]", s[a - i] ^ e, "assign");
              }
              var g = cc11001100_hook("g", this._invKeySchedule = cc11001100_hook("this._invKeySchedule", [], "assign"), "var-init");
              for (var c = cc11001100_hook("c", 0, "var-init"); c < o; c++) {
                var a = cc11001100_hook("a", o - c, "var-init");
                if (c % 4) var e = cc11001100_hook("e", s[a], "var-init");else var e = cc11001100_hook("e", s[a - 4], "var-init");
                if (c < 4 || a <= 4) g[c] = cc11001100_hook("g[c]", e, "assign");else g[c] = cc11001100_hook("g[c]", u[d[e >>> 24]] ^ l[d[e >>> 16 & 255]] ^ p[d[e >>> 8 & 255]] ^ f[d[e & 255]], "assign");
              }
            },
            encryptBlock: function (e, t) {
              this._doCryptBlock(e, t, this._keySchedule, s, a, g, c, d);
            },
            decryptBlock: function (e, t) {
              var r = cc11001100_hook("r", e[t + 1], "var-init");
              e[t + 1] = cc11001100_hook("e[t + 1]", e[t + 3], "assign");
              e[t + 3] = cc11001100_hook("e[t + 3]", r, "assign");
              this._doCryptBlock(e, t, this._invKeySchedule, u, l, p, f, o);
              var r = cc11001100_hook("r", e[t + 1], "var-init");
              e[t + 1] = cc11001100_hook("e[t + 1]", e[t + 3], "assign");
              e[t + 3] = cc11001100_hook("e[t + 3]", r, "assign");
            },
            _doCryptBlock: function (e, t, r, i, n, o, s, a) {
              var g = cc11001100_hook("g", this._nRounds, "var-init");
              var c = cc11001100_hook("c", e[t] ^ r[0], "var-init");
              var d = cc11001100_hook("d", e[t + 1] ^ r[1], "var-init");
              var u = cc11001100_hook("u", e[t + 2] ^ r[2], "var-init");
              var l = cc11001100_hook("l", e[t + 3] ^ r[3], "var-init");
              var p = cc11001100_hook("p", 4, "var-init");
              for (var f = cc11001100_hook("f", 1, "var-init"); f < g; f++) {
                var m = cc11001100_hook("m", i[c >>> 24] ^ n[d >>> 16 & 255] ^ o[u >>> 8 & 255] ^ s[l & 255] ^ r[p++], "var-init");
                var h = cc11001100_hook("h", i[d >>> 24] ^ n[u >>> 16 & 255] ^ o[l >>> 8 & 255] ^ s[c & 255] ^ r[p++], "var-init");
                var K = cc11001100_hook("K", i[u >>> 24] ^ n[l >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[d & 255] ^ r[p++], "var-init");
                var y = cc11001100_hook("y", i[l >>> 24] ^ n[c >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[u & 255] ^ r[p++], "var-init");
                c = cc11001100_hook("c", m, "assign");
                d = cc11001100_hook("d", h, "assign");
                u = cc11001100_hook("u", K, "assign");
                l = cc11001100_hook("l", y, "assign");
              }
              var m = cc11001100_hook("m", (a[c >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[l & 255]) ^ r[p++], "var-init");
              var h = cc11001100_hook("h", (a[d >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[c & 255]) ^ r[p++], "var-init");
              var K = cc11001100_hook("K", (a[u >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[c >>> 8 & 255] << 8 | a[d & 255]) ^ r[p++], "var-init");
              var y = cc11001100_hook("y", (a[l >>> 24] << 24 | a[c >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[u & 255]) ^ r[p++], "var-init");
              e[t] = cc11001100_hook("e[t]", m, "assign");
              e[t + 1] = cc11001100_hook("e[t + 1]", h, "assign");
              e[t + 2] = cc11001100_hook("e[t + 2]", K, "assign");
              e[t + 3] = cc11001100_hook("e[t + 3]", y, "assign");
            },
            keySize: cc11001100_hook("keySize", 256 / 32, "object-key-init")
          }), "assign"), "var-init");
        return t.AES = cc11001100_hook("t.AES", i._createHelper(w), "assign"), e.AES;
      }(m), "assign");
    })), "var-init"),
    s = cc11001100_hook("s", e(function (e, t) {
      e.exports = cc11001100_hook("e.exports", m.enc.Latin1, "assign");
    }), "var-init"),
    a = cc11001100_hook("a", e(function (e, t) {
      e.exports = cc11001100_hook("e.exports", m.enc.Utf8, "assign");
    }), "var-init"),
    g = cc11001100_hook("g", e(function (e, t) {
      e.exports = cc11001100_hook("e.exports", m.enc.Hex, "assign");
    }), "var-init"),
    c = cc11001100_hook("c", e(function (e, t) {
      e.exports = cc11001100_hook("e.exports", m.pad.Pkcs7, "assign");
    }), "var-init"),
    d = cc11001100_hook("d", e(function (e) {
      function u(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var r = cc11001100_hook("r", (65535 & e) + (65535 & t), "var-init");
        return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
      }
      function a(e, t, r, i, n, o) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        return u((t = cc11001100_hook("t", u(u(t, e), u(i, o)), "assign")) << n | t >>> 32 - n, r);
      }
      function l(e, t, r, i, n, o, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        return a(t & r | ~t & i, e, t, n, o, s);
      }
      function p(e, t, r, i, n, o, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        return a(t & i | r & ~i, e, t, n, o, s);
      }
      function f(e, t, r, i, n, o, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        return a(t ^ r ^ i, e, t, n, o, s);
      }
      function m(e, t, r, i, n, o, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        return a(r ^ (t | ~i), e, t, n, o, s);
      }
      function s(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        e[t >> 5] |= cc11001100_hook("e[t >> 5]", 128 << t % 32, "assign"), e[14 + (t + 64 >>> 9 << 4)] = cc11001100_hook("e[14 + (t + 64 >>> 9 << 4)]", t, "assign");
        for (var r, i, n, o, s = cc11001100_hook("s", 1732584193, "var-init"), a = cc11001100_hook("a", -271733879, "var-init"), g = cc11001100_hook("g", -1732584194, "var-init"), c = cc11001100_hook("c", 271733878, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < e.length; d += cc11001100_hook("d", 16, "assign")) s = cc11001100_hook("s", l(r = cc11001100_hook("r", s, "assign"), i = cc11001100_hook("i", a, "assign"), n = cc11001100_hook("n", g, "assign"), o = cc11001100_hook("o", c, "assign"), e[d], 7, -680876936), "assign"), c = cc11001100_hook("c", l(c, s, a, g, e[d + 1], 12, -389564586), "assign"), g = cc11001100_hook("g", l(g, c, s, a, e[d + 2], 17, 606105819), "assign"), a = cc11001100_hook("a", l(a, g, c, s, e[d + 3], 22, -1044525330), "assign"), s = cc11001100_hook("s", l(s, a, g, c, e[d + 4], 7, -176418897), "assign"), c = cc11001100_hook("c", l(c, s, a, g, e[d + 5], 12, 1200080426), "assign"), g = cc11001100_hook("g", l(g, c, s, a, e[d + 6], 17, -1473231341), "assign"), a = cc11001100_hook("a", l(a, g, c, s, e[d + 7], 22, -45705983), "assign"), s = cc11001100_hook("s", l(s, a, g, c, e[d + 8], 7, 1770035416), "assign"), c = cc11001100_hook("c", l(c, s, a, g, e[d + 9], 12, -1958414417), "assign"), g = cc11001100_hook("g", l(g, c, s, a, e[d + 10], 17, -42063), "assign"), a = cc11001100_hook("a", l(a, g, c, s, e[d + 11], 22, -1990404162), "assign"), s = cc11001100_hook("s", l(s, a, g, c, e[d + 12], 7, 1804603682), "assign"), c = cc11001100_hook("c", l(c, s, a, g, e[d + 13], 12, -40341101), "assign"), g = cc11001100_hook("g", l(g, c, s, a, e[d + 14], 17, -1502002290), "assign"), s = cc11001100_hook("s", p(s, a = cc11001100_hook("a", l(a, g, c, s, e[d + 15], 22, 1236535329), "assign"), g, c, e[d + 1], 5, -165796510), "assign"), c = cc11001100_hook("c", p(c, s, a, g, e[d + 6], 9, -1069501632), "assign"), g = cc11001100_hook("g", p(g, c, s, a, e[d + 11], 14, 643717713), "assign"), a = cc11001100_hook("a", p(a, g, c, s, e[d], 20, -373897302), "assign"), s = cc11001100_hook("s", p(s, a, g, c, e[d + 5], 5, -701558691), "assign"), c = cc11001100_hook("c", p(c, s, a, g, e[d + 10], 9, 38016083), "assign"), g = cc11001100_hook("g", p(g, c, s, a, e[d + 15], 14, -660478335), "assign"), a = cc11001100_hook("a", p(a, g, c, s, e[d + 4], 20, -405537848), "assign"), s = cc11001100_hook("s", p(s, a, g, c, e[d + 9], 5, 568446438), "assign"), c = cc11001100_hook("c", p(c, s, a, g, e[d + 14], 9, -1019803690), "assign"), g = cc11001100_hook("g", p(g, c, s, a, e[d + 3], 14, -187363961), "assign"), a = cc11001100_hook("a", p(a, g, c, s, e[d + 8], 20, 1163531501), "assign"), s = cc11001100_hook("s", p(s, a, g, c, e[d + 13], 5, -1444681467), "assign"), c = cc11001100_hook("c", p(c, s, a, g, e[d + 2], 9, -51403784), "assign"), g = cc11001100_hook("g", p(g, c, s, a, e[d + 7], 14, 1735328473), "assign"), s = cc11001100_hook("s", f(s, a = cc11001100_hook("a", p(a, g, c, s, e[d + 12], 20, -1926607734), "assign"), g, c, e[d + 5], 4, -378558), "assign"), c = cc11001100_hook("c", f(c, s, a, g, e[d + 8], 11, -2022574463), "assign"), g = cc11001100_hook("g", f(g, c, s, a, e[d + 11], 16, 1839030562), "assign"), a = cc11001100_hook("a", f(a, g, c, s, e[d + 14], 23, -35309556), "assign"), s = cc11001100_hook("s", f(s, a, g, c, e[d + 1], 4, -1530992060), "assign"), c = cc11001100_hook("c", f(c, s, a, g, e[d + 4], 11, 1272893353), "assign"), g = cc11001100_hook("g", f(g, c, s, a, e[d + 7], 16, -155497632), "assign"), a = cc11001100_hook("a", f(a, g, c, s, e[d + 10], 23, -1094730640), "assign"), s = cc11001100_hook("s", f(s, a, g, c, e[d + 13], 4, 681279174), "assign"), c = cc11001100_hook("c", f(c, s, a, g, e[d], 11, -358537222), "assign"), g = cc11001100_hook("g", f(g, c, s, a, e[d + 3], 16, -722521979), "assign"), a = cc11001100_hook("a", f(a, g, c, s, e[d + 6], 23, 76029189), "assign"), s = cc11001100_hook("s", f(s, a, g, c, e[d + 9], 4, -640364487), "assign"), c = cc11001100_hook("c", f(c, s, a, g, e[d + 12], 11, -421815835), "assign"), g = cc11001100_hook("g", f(g, c, s, a, e[d + 15], 16, 530742520), "assign"), s = cc11001100_hook("s", m(s, a = cc11001100_hook("a", f(a, g, c, s, e[d + 2], 23, -995338651), "assign"), g, c, e[d], 6, -198630844), "assign"), c = cc11001100_hook("c", m(c, s, a, g, e[d + 7], 10, 1126891415), "assign"), g = cc11001100_hook("g", m(g, c, s, a, e[d + 14], 15, -1416354905), "assign"), a = cc11001100_hook("a", m(a, g, c, s, e[d + 5], 21, -57434055), "assign"), s = cc11001100_hook("s", m(s, a, g, c, e[d + 12], 6, 1700485571), "assign"), c = cc11001100_hook("c", m(c, s, a, g, e[d + 3], 10, -1894986606), "assign"), g = cc11001100_hook("g", m(g, c, s, a, e[d + 10], 15, -1051523), "assign"), a = cc11001100_hook("a", m(a, g, c, s, e[d + 1], 21, -2054922799), "assign"), s = cc11001100_hook("s", m(s, a, g, c, e[d + 8], 6, 1873313359), "assign"), c = cc11001100_hook("c", m(c, s, a, g, e[d + 15], 10, -30611744), "assign"), g = cc11001100_hook("g", m(g, c, s, a, e[d + 6], 15, -1560198380), "assign"), a = cc11001100_hook("a", m(a, g, c, s, e[d + 13], 21, 1309151649), "assign"), s = cc11001100_hook("s", m(s, a, g, c, e[d + 4], 6, -145523070), "assign"), c = cc11001100_hook("c", m(c, s, a, g, e[d + 11], 10, -1120210379), "assign"), g = cc11001100_hook("g", m(g, c, s, a, e[d + 2], 15, 718787259), "assign"), a = cc11001100_hook("a", m(a, g, c, s, e[d + 9], 21, -343485551), "assign"), s = cc11001100_hook("s", u(s, r), "assign"), a = cc11001100_hook("a", u(a, i), "assign"), g = cc11001100_hook("g", u(g, n), "assign"), c = cc11001100_hook("c", u(c, o), "assign");
        return [s, a, g, c];
      }
      function g(e) {
        cc11001100_hook("e", e, "function-parameter");
        for (var t = cc11001100_hook("t", "", "var-init"), r = cc11001100_hook("r", 32 * e.length, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r; i += cc11001100_hook("i", 8, "assign")) t += cc11001100_hook("t", String.fromCharCode(e[i >> 5] >>> i % 32 & 255), "assign");
        return t;
      }
      function c(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t = cc11001100_hook("t", [], "var-init");
        for (t[(e.length >> 2) - 1] = cc11001100_hook("t[(e.length >> 2) - 1]", void 0, "assign"), i = cc11001100_hook("i", 0, "assign"); i < t.length; i += cc11001100_hook("i", 1, "assign")) t[i] = cc11001100_hook("t[i]", 0, "assign");
        for (var r = cc11001100_hook("r", 8 * e.length, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r; i += cc11001100_hook("i", 8, "assign")) t[i >> 5] |= cc11001100_hook("t[i >> 5]", (255 & e.charCodeAt(i / 8)) << i % 32, "assign");
        return t;
      }
      function i(e) {
        cc11001100_hook("e", e, "function-parameter");
        for (var t, r = cc11001100_hook("r", "0123456789abcdef", "var-init"), i = cc11001100_hook("i", "", "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n += cc11001100_hook("n", 1, "assign")) t = cc11001100_hook("t", e.charCodeAt(n), "assign"), i += cc11001100_hook("i", r.charAt(t >>> 4 & 15) + r.charAt(15 & t), "assign");
        return i;
      }
      function d(e) {
        cc11001100_hook("e", e, "function-parameter");
        return unescape(encodeURIComponent(e));
      }
      function n(e) {
        cc11001100_hook("e", e, "function-parameter");
        return g(s(c(e = cc11001100_hook("e", d(e), "assign")), 8 * e.length));
      }
      function o(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var r,
          e = cc11001100_hook("e", d(e), "var-init"),
          t = cc11001100_hook("t", d(t), "var-init"),
          i = cc11001100_hook("i", c(e), "var-init"),
          n = cc11001100_hook("n", [], "var-init"),
          o = cc11001100_hook("o", [], "var-init");
        for (n[15] = cc11001100_hook("n[15]", o[15] = cc11001100_hook("o[15]", void 0, "assign"), "assign"), 16 < i.length && (i = cc11001100_hook("i", s(i, 8 * e.length), "assign")), r = cc11001100_hook("r", 0, "assign"); r < 16; r += cc11001100_hook("r", 1, "assign")) n[r] = cc11001100_hook("n[r]", 909522486 ^ i[r], "assign"), o[r] = cc11001100_hook("o[r]", 1549556828 ^ i[r], "assign");
        return e = cc11001100_hook("e", s(n.concat(c(t)), 512 + 8 * t.length), "assign"), g(s(o.concat(e), 640));
      }
      function t(e, t, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        return t ? r ? o(t, e) : i(o(t, e)) : r ? n(e) : i(n(e));
      }
      var r;
      r = cc11001100_hook("r", h, "assign"), e.exports ? e.exports = cc11001100_hook("e.exports", t, "assign") : r.md5 = cc11001100_hook("r.md5", t, "assign");
    }), "var-init");
  return {
    encrypt: function (e, t, r, i) {
      return t = cc11001100_hook("t", t || function (e) {
        for (var t = cc11001100_hook("t", ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], "var-init"), r = cc11001100_hook("r", "", "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e; i++) r += cc11001100_hook("r", t[Math.ceil(35 * Math.random())], "assign");
        return r;
      }(16), "assign"), r = cc11001100_hook("r", r || d(t).substring(0, 32), "assign"), i = cc11001100_hook("i", i || r.substring(r.length - 16, r.length), "assign"), {
        key: cc11001100_hook("key", t, "object-key-init"),
        encryptedStr: cc11001100_hook("encryptedStr", o.encrypt(e, s.parse(r), {
          iv: cc11001100_hook("iv", s.parse(i), "object-key-init"),
          padding: cc11001100_hook("padding", c, "object-key-init")
        }).ciphertext.toString(), "object-key-init")
      };
    },
    decrypt: function (e, t, r, i) {
      if (!t) return console.error("请输入正确的解码 key，不能为空"), null;
      r = cc11001100_hook("r", r || d(t).substring(0, 32), "assign"), i = cc11001100_hook("i", i || r.substring(r.length - 16, r.length), "assign");
      t = cc11001100_hook("t", g.parse(e), "assign"), e = cc11001100_hook("e", n.stringify(t), "assign");
      return o.decrypt(e, s.parse(r), {
        iv: cc11001100_hook("iv", s.parse(i), "object-key-init"),
        padding: cc11001100_hook("padding", c, "object-key-init")
      }).toString(a);
    }
  };
}), !function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = cc11001100_hook("module.exports", t(), "assign") : "function" == typeof define && define.amd ? define(t) : (e = cc11001100_hook("e", e || self, "assign")).RSA = cc11001100_hook("(e = e || self).RSA", t(), "assign");
}(this, function () {
  "use strict";

  var r,
    h,
    U,
    v = cc11001100_hook("v", 16, "var-init"),
    k = cc11001100_hook("k", 65536, "var-init"),
    C = cc11001100_hook("C", k >>> 1, "var-init"),
    _ = cc11001100_hook("_", k * k, "var-init"),
    b = cc11001100_hook("b", k - 1, "var-init");
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    r = cc11001100_hook("r", new Array(e), "assign");
    for (var t = cc11001100_hook("t", 0, "var-init"); t < r.length; t++) r[t] = cc11001100_hook("r[t]", 0, "assign");
    h = cc11001100_hook("h", new w(), "assign"), (U = cc11001100_hook("U", new w(), "assign")).digits[0] = cc11001100_hook("(U = new w()).digits[0]", 1, "assign");
  }
  i(130);
  !function (e) {
    var t = cc11001100_hook("t", new w(), "var-init"),
      r = cc11001100_hook("r", (t.isNeg = cc11001100_hook("t.isNeg", e < 0, "assign"), e = cc11001100_hook("e", Math.abs(e), "assign"), 0), "var-init");
    for (; 0 < e;) t.digits[r++] = cc11001100_hook("t.digits[r++]", e & b, "assign"), e >>= cc11001100_hook("e", 16, "assign");
  }(1e15);
  function w(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.digits = cc11001100_hook("this.digits", "boolean" == typeof e && 1 == e ? null : r.slice(0), "assign"), this.isNeg = cc11001100_hook("this.isNeg", !1, "assign");
  }
  function I(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", new w(!0), "var-init");
    return t.digits = cc11001100_hook("t.digits", e.digits.slice(0), "assign"), t.isNeg = cc11001100_hook("t.isNeg", e.isNeg, "assign"), t;
  }
  function K(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", "", "var-init"), r = cc11001100_hook("r", e.length - 1, "var-init"); -1 < r; --r) t += cc11001100_hook("t", e.charAt(r), "assign");
    return t;
  }
  var y = cc11001100_hook("y", new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"), "var-init");
  var n = cc11001100_hook("n", new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"), "var-init");
  function T(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", "", "var-init"), r = cc11001100_hook("r", (M(e), M(e)), "var-init"); -1 < r; --r) t += cc11001100_hook("t", function (e) {
      for (var t = cc11001100_hook("t", "", "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < 4; ++r) t += cc11001100_hook("t", n[15 & e], "assign"), e >>>= cc11001100_hook("e", 4, "assign");
      return K(t);
    }(e.digits[r]), "assign");
    return t;
  }
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", new w(), "var-init"), r = cc11001100_hook("r", e.length, "var-init"), i = cc11001100_hook("i", 0, "var-init"); 0 < r; r -= cc11001100_hook("r", 4, "assign"), ++i) t.digits[i] = cc11001100_hook("t.digits[i]", function (e) {
      for (var t, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", Math.min(e.length, 4), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < i; ++n) r = cc11001100_hook("r", (r <<= cc11001100_hook("r", 4, "assign")) | (t = cc11001100_hook("t", 48 <= (t = cc11001100_hook("t", e.charCodeAt(n), "assign")) && t <= 57 ? t - 48 : 65 <= t && t <= 90 ? 10 + t - 65 : 97 <= t && t <= 122 ? 10 + t - 97 : 0, "assign")), "assign");
      return r;
    }(e.substr(Math.max(r - 4, 0), Math.min(r, 4))), "assign");
    return t;
  }
  function S(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t, r, i = cc11001100_hook("i", "", "var-init"), n = cc11001100_hook("n", M(e), "var-init"); -1 < n; --n) i += cc11001100_hook("i", (t = cc11001100_hook("t", e.digits[n], "assign"), r = cc11001100_hook("r", void 0, "assign"), r = cc11001100_hook("r", String.fromCharCode(255 & t), "assign"), t >>>= cc11001100_hook("t", 8, "assign"), String.fromCharCode(255 & t) + r), "assign");
    return i;
  }
  function E(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e.isNeg != t.isNeg) t.isNeg = cc11001100_hook("t.isNeg", !t.isNeg, "assign"), i = cc11001100_hook("i", A(e, t), "assign"), t.isNeg = cc11001100_hook("t.isNeg", !t.isNeg, "assign");else {
      for (var r, i = cc11001100_hook("i", new w(), "var-init"), n = cc11001100_hook("n", 0, "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e.digits.length; ++o) r = cc11001100_hook("r", e.digits[o] + t.digits[o] + n, "assign"), i.digits[o] = cc11001100_hook("i.digits[o]", 65535 & r, "assign"), n = cc11001100_hook("n", Number(k <= r), "assign");
      i.isNeg = cc11001100_hook("i.isNeg", e.isNeg, "assign");
    }
    return i;
  }
  function A(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e.isNeg != t.isNeg) t.isNeg = cc11001100_hook("t.isNeg", !t.isNeg, "assign"), i = cc11001100_hook("i", E(e, t), "assign"), t.isNeg = cc11001100_hook("t.isNeg", !t.isNeg, "assign");else {
      for (var r, i = cc11001100_hook("i", new w(), "var-init"), n = cc11001100_hook("n", o = cc11001100_hook("o", 0, "assign"), "var-init"); n < e.digits.length; ++n) r = cc11001100_hook("r", e.digits[n] - t.digits[n] + o, "assign"), i.digits[n] = cc11001100_hook("i.digits[n]", 65535 & r, "assign"), i.digits[n] < 0 && (i.digits[n] += cc11001100_hook("i.digits[n]", k, "assign")), o = cc11001100_hook("o", 0 - Number(r < 0), "assign");
      if (-1 == o) {
        for (var o = cc11001100_hook("o", 0, "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.digits.length; ++n) r = cc11001100_hook("r", 0 - i.digits[n] + o, "assign"), i.digits[n] = cc11001100_hook("i.digits[n]", 65535 & r, "assign"), i.digits[n] < 0 && (i.digits[n] += cc11001100_hook("i.digits[n]", k, "assign")), o = cc11001100_hook("o", 0 - Number(r < 0), "assign");
        i.isNeg = cc11001100_hook("i.isNeg", !e.isNeg, "assign");
      } else i.isNeg = cc11001100_hook("i.isNeg", e.isNeg, "assign");
    }
    return i;
  }
  function M(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", e.digits.length - 1, "var-init"); 0 < t && 0 == e.digits[t];) --t;
    return t;
  }
  function B(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", M(e), "var-init"), r = cc11001100_hook("r", e.digits[t], "var-init"), i = cc11001100_hook("i", (t + 1) * v, "var-init"), n = cc11001100_hook("n", i, "var-init"); i - v < n && 0 == (32768 & r); --n) r <<= cc11001100_hook("r", 1, "assign");
    return n;
  }
  function s(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var r, i = cc11001100_hook("i", new w(), "var-init"), n = cc11001100_hook("n", M(e), "var-init"), o = cc11001100_hook("o", M(t), "var-init"), s = cc11001100_hook("s", 0, "var-init"); s <= o; ++s) {
      for (var a = cc11001100_hook("a", 0, "var-init"), g = cc11001100_hook("g", s, "var-init"), c = cc11001100_hook("c", 0, "var-init"); c <= n; ++c, ++g) r = cc11001100_hook("r", i.digits[g] + e.digits[c] * t.digits[s] + a, "assign"), i.digits[g] = cc11001100_hook("i.digits[g]", r & b, "assign"), a = cc11001100_hook("a", r >>> 16, "assign");
      i.digits[s + n + 1] = cc11001100_hook("i.digits[s + n + 1]", a, "assign");
    }
    return i.isNeg = cc11001100_hook("i.isNeg", e.isNeg != t.isNeg, "assign"), i;
  }
  function g(e, t, r, i, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var o = cc11001100_hook("o", Math.min(t + n, e.length), "var-init"), s = cc11001100_hook("s", t, "var-init"), a = cc11001100_hook("a", i, "var-init"); s < o; ++s, ++a) r[a] = cc11001100_hook("r[a]", e[s], "assign");
  }
  var c = cc11001100_hook("c", new Array(0, 32768, 49152, 57344, 61440, 63488, 64512, 65024, 65280, 65408, 65472, 65504, 65520, 65528, 65532, 65534, 65535), "var-init");
  function x(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var r = cc11001100_hook("r", Math.floor(t / v), "var-init"), i = cc11001100_hook("i", new w(), "var-init"), n = cc11001100_hook("n", (g(e.digits, 0, i.digits, r, i.digits.length - r), t % v), "var-init"), o = cc11001100_hook("o", v - n, "var-init"), s = cc11001100_hook("s", i.digits.length - 1, "var-init"), a = cc11001100_hook("a", s - 1, "var-init"); 0 < s; --s, --a) i.digits[s] = cc11001100_hook("i.digits[s]", i.digits[s] << n & b | (i.digits[a] & c[n]) >>> o, "assign");
    return i.digits[0] = cc11001100_hook("i.digits[0]", i.digits[s] << n & b, "assign"), i.isNeg = cc11001100_hook("i.isNeg", e.isNeg, "assign"), i;
  }
  var d = cc11001100_hook("d", new Array(0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535), "var-init");
  function R(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var r = cc11001100_hook("r", Math.floor(t / v), "var-init"), i = cc11001100_hook("i", new w(), "var-init"), n = cc11001100_hook("n", (g(e.digits, r, i.digits, 0, e.digits.length - r), t % v), "var-init"), o = cc11001100_hook("o", v - n, "var-init"), s = cc11001100_hook("s", 0, "var-init"), a = cc11001100_hook("a", s + 1, "var-init"); s < i.digits.length - 1; ++s, ++a) i.digits[s] = cc11001100_hook("i.digits[s]", i.digits[s] >>> n | (i.digits[a] & d[n]) << o, "assign");
    return i.digits[i.digits.length - 1] >>>= cc11001100_hook("i.digits[i.digits.length - 1]", n, "assign"), i.isNeg = cc11001100_hook("i.isNeg", e.isNeg, "assign"), i;
  }
  function N(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", new w(), "var-init");
    return g(e.digits, 0, r.digits, t, r.digits.length - t), r;
  }
  function a(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", new w(), "var-init");
    return g(e.digits, t, r.digits, 0, r.digits.length - t), r;
  }
  function u(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", new w(), "var-init");
    return g(e.digits, 0, r.digits, 0, t), r;
  }
  function D(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (e.isNeg != t.isNeg) return 1 - 2 * Number(e.isNeg);
    for (var r = cc11001100_hook("r", e.digits.length - 1, "var-init"); 0 <= r; --r) if (e.digits[r] != t.digits[r]) return e.isNeg ? 1 - 2 * Number(e.digits[r] > t.digits[r]) : 1 - 2 * Number(e.digits[r] < t.digits[r]);
    return 0;
  }
  function P(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var r = cc11001100_hook("r", B(e), "var-init"),
      i = cc11001100_hook("i", B(t), "var-init"),
      n = cc11001100_hook("n", t.isNeg, "var-init");
    if (r < i) return e.isNeg ? ((o = cc11001100_hook("o", I(U), "assign")).isNeg = cc11001100_hook("(o = I(U)).isNeg", !t.isNeg, "assign"), e.isNeg = cc11001100_hook("e.isNeg", !1, "assign"), t.isNeg = cc11001100_hook("t.isNeg", !1, "assign"), s = cc11001100_hook("s", A(t, e), "assign"), e.isNeg = cc11001100_hook("e.isNeg", !0, "assign"), t.isNeg = cc11001100_hook("t.isNeg", n, "assign")) : (o = cc11001100_hook("o", new w(), "assign"), s = cc11001100_hook("s", I(e), "assign")), new Array(o, s);
    for (var o = cc11001100_hook("o", new w(), "var-init"), s = cc11001100_hook("s", e, "var-init"), a = cc11001100_hook("a", Math.ceil(i / v) - 1, "var-init"), g = cc11001100_hook("g", 0, "var-init"); t.digits[a] < C;) t = cc11001100_hook("t", x(t, 1), "assign"), ++g, ++i, a = cc11001100_hook("a", Math.ceil(i / v) - 1, "assign");
    s = cc11001100_hook("s", x(s, g), "assign"), r += cc11001100_hook("r", g, "assign");
    for (var c = cc11001100_hook("c", Math.ceil(r / v) - 1, "var-init"), d = cc11001100_hook("d", N(t, c - a), "var-init"); -1 != D(s, d);) ++o.digits[c - a], s = cc11001100_hook("s", A(s, d), "assign");
    for (var u = cc11001100_hook("u", c, "var-init"); a < u; --u) {
      for (var l = cc11001100_hook("l", u >= s.digits.length ? 0 : s.digits[u], "var-init"), p = cc11001100_hook("p", u - 1 >= s.digits.length ? 0 : s.digits[u - 1], "var-init"), f = cc11001100_hook("f", u - 2 >= s.digits.length ? 0 : s.digits[u - 2], "var-init"), m = cc11001100_hook("m", a >= t.digits.length ? 0 : t.digits[a], "var-init"), h = cc11001100_hook("h", a - 1 >= t.digits.length ? 0 : t.digits[a - 1], "var-init"), K = cc11001100_hook("K", (o.digits[u - a - 1] = cc11001100_hook("o.digits[u - a - 1]", l == m ? b : Math.floor((l * k + p) / m), "assign"), o.digits[u - a - 1] * (m * k + h)), "var-init"), y = cc11001100_hook("y", l * _ + (p * k + f), "var-init"); y < K;) --o.digits[u - a - 1], K = cc11001100_hook("K", o.digits[u - a - 1] * (m * k | h), "assign"), y = cc11001100_hook("y", l * k * k + (p * k + f), "assign");
      (s = cc11001100_hook("s", A(s, function (e, t) {
        for (var r, i = cc11001100_hook("i", new w(), "var-init"), n = cc11001100_hook("n", M(e), "var-init"), o = cc11001100_hook("o", 0, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s <= n; ++s) r = cc11001100_hook("r", i.digits[s] + e.digits[s] * t + o, "assign"), i.digits[s] = cc11001100_hook("i.digits[s]", r & b, "assign"), o = cc11001100_hook("o", r >>> 16, "assign");
        return i.digits[1 + n] = cc11001100_hook("i.digits[1 + n]", o, "assign"), i;
      }(d = cc11001100_hook("d", N(t, u - a - 1), "assign"), o.digits[u - a - 1])), "assign")).isNeg && (s = cc11001100_hook("s", E(s, d), "assign"), --o.digits[u - a - 1]);
    }
    return s = cc11001100_hook("s", R(s, g), "assign"), o.isNeg = cc11001100_hook("o.isNeg", e.isNeg != n, "assign"), e.isNeg && (o = cc11001100_hook("o", (n ? E : A)(o, U), "assign"), s = cc11001100_hook("s", A(t = cc11001100_hook("t", R(t, g), "assign"), s), "assign")), 0 == s.digits[0] && 0 == M(s) && (s.isNeg = cc11001100_hook("s.isNeg", !1, "assign")), new Array(o, s);
  }
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.modulus = cc11001100_hook("this.modulus", I(e), "assign"), this.k = cc11001100_hook("this.k", M(this.modulus) + 1, "assign");
    var t,
      e = cc11001100_hook("e", new w(), "var-init");
    e.digits[2 * this.k] = cc11001100_hook("e.digits[2 * this.k]", 1, "assign"), this.mu = cc11001100_hook("this.mu", (t = cc11001100_hook("t", this.modulus, "assign"), P(e, t)[0]), "assign"), this.bkplus1 = cc11001100_hook("this.bkplus1", new w(), "assign"), this.bkplus1.digits[this.k + 1] = cc11001100_hook("this.bkplus1.digits[this.k + 1]", 1, "assign"), this.modulo = cc11001100_hook("this.modulo", p, "assign"), this.multiplyMod = cc11001100_hook("this.multiplyMod", f, "assign"), this.powMod = cc11001100_hook("this.powMod", m, "assign");
  }
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", a(e, this.k - 1), "var-init"), t = cc11001100_hook("t", a(s(t, this.mu), this.k + 1), "var-init"), r = cc11001100_hook("r", A(u(e, this.k + 1), u(s(t, this.modulus), this.k + 1)), "var-init"), i = cc11001100_hook("i", 0 <= D(r = cc11001100_hook("r", r.isNeg ? E(r, this.bkplus1) : r, "assign"), this.modulus), "var-init"); i;) i = cc11001100_hook("i", 0 <= D(r = cc11001100_hook("r", A(r, this.modulus), "assign"), this.modulus), "assign");
    return r;
  }
  function f(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    e = cc11001100_hook("e", s(e, t), "assign");
    return this.modulo(e);
  }
  function m(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var r = cc11001100_hook("r", new w(), "var-init"), i = cc11001100_hook("i", (r.digits[0] = cc11001100_hook("r.digits[0]", 1, "assign"), e), "var-init"), n = cc11001100_hook("n", t, "var-init"); 0 != (1 & n.digits[0]) && (r = cc11001100_hook("r", this.multiplyMod(r, i), "assign")), 0 != (n = cc11001100_hook("n", R(n, 1), "assign")).digits[0] || 0 != M(n);) i = cc11001100_hook("i", this.multiplyMod(i, i), "assign");
    return r;
  }
  var j = cc11001100_hook("j", {}, "var-init");
  function G(e, t, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    this.e = cc11001100_hook("this.e", o(e), "assign"), this.d = cc11001100_hook("this.d", o(t), "assign"), this.m = cc11001100_hook("this.m", o(r), "assign"), this.chunkSize = cc11001100_hook("this.chunkSize", "number" != typeof i ? 2 * M(this.m) : i / 8, "assign"), this.radix = cc11001100_hook("this.radix", 16, "assign"), this.barrett = cc11001100_hook("this.barrett", new l(this.m), "assign");
  }
  function O(e, t, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var n,
      o,
      s,
      a,
      g,
      c,
      d,
      u = cc11001100_hook("u", new Array(), "var-init"),
      l = cc11001100_hook("l", t.length, "var-init"),
      p = cc11001100_hook("p", "", "var-init"),
      f = cc11001100_hook("f", "string" == typeof r ? r == j.NoPadding ? 1 : r == j.PKCS1Padding ? 2 : 0 : 0, "var-init"),
      m = cc11001100_hook("m", "string" == typeof i && i == j.RawEncoding ? 1 : 0, "var-init");
    for (1 == f ? l > e.chunkSize && (l = cc11001100_hook("l", e.chunkSize, "assign")) : 2 == f && l > e.chunkSize - 11 && (l = cc11001100_hook("l", e.chunkSize - 11, "assign")), n = cc11001100_hook("n", 0, "assign"), o = cc11001100_hook("o", 2 == f ? l - 1 : e.chunkSize - 1, "assign"); n < l;) f ? u[o] = cc11001100_hook("u[o]", t.charCodeAt(n), "assign") : u[n] = cc11001100_hook("u[n]", t.charCodeAt(n), "assign"), n++, o--;
    for (1 == f && (n = cc11001100_hook("n", 0, "assign")), o = cc11001100_hook("o", e.chunkSize - l % e.chunkSize, "assign"); 0 < o;) {
      if (2 == f) {
        for (a = cc11001100_hook("a", Math.floor(256 * Math.random()), "assign"); !a;) a = cc11001100_hook("a", Math.floor(256 * Math.random()), "assign");
        u[n] = cc11001100_hook("u[n]", a, "assign");
      } else u[n] = cc11001100_hook("u[n]", 0, "assign");
      n++, o--;
    }
    for (2 == f && (u[l] = cc11001100_hook("u[l]", 0, "assign"), u[e.chunkSize - 2] = cc11001100_hook("u[e.chunkSize - 2]", 2, "assign"), u[e.chunkSize - 1] = cc11001100_hook("u[e.chunkSize - 1]", 0, "assign")), g = cc11001100_hook("g", u.length, "assign"), n = cc11001100_hook("n", 0, "assign"); n < g; n += cc11001100_hook("n", e.chunkSize, "assign")) {
      for (c = cc11001100_hook("c", new w(), "assign"), o = cc11001100_hook("o", 0, "assign"), s = cc11001100_hook("s", n, "assign"); s < n + e.chunkSize; ++o) c.digits[o] = cc11001100_hook("c.digits[o]", u[s++], "assign"), c.digits[o] += cc11001100_hook("c.digits[o]", u[s++] << 8, "assign");
      d = cc11001100_hook("d", e.barrett.powMod(c, e.e), "assign"), p += cc11001100_hook("p", 1 == m ? S(d) : 16 == e.radix ? T(d) : function (e, t) {
        for (var r = cc11001100_hook("r", new w(), "var-init"), i = cc11001100_hook("i", (r.digits[0] = cc11001100_hook("r.digits[0]", t, "assign"), P(e, r)), "var-init"), n = cc11001100_hook("n", y[i[1].digits[0]], "var-init"); 1 == D(i[0], h);) i = cc11001100_hook("i", P(i[0], r), "assign"), digit = cc11001100_hook("digit", i[1].digits[0], "assign"), n += cc11001100_hook("n", y[i[1].digits[0]], "assign");
        return (e.isNeg ? "-" : "") + K(n);
      }(d, e.radix), "assign");
    }
    return p;
  }
  return j.NoPadding = cc11001100_hook("j.NoPadding", "NoPadding", "assign"), j.PKCS1Padding = cc11001100_hook("j.PKCS1Padding", "PKCS1Padding", "assign"), j.RawEncoding = cc11001100_hook("j.RawEncoding", "RawEncoding", "assign"), j.NumericEncoding = cc11001100_hook("j.NumericEncoding", "NumericEncoding", "assign"), {
    encrypt: function (e, t, r) {
      return i(130), r = cc11001100_hook("r", r || "NoPadding", "assign"), O(new G("10001", "", t = cc11001100_hook("t", t || "B1B1EC76A1BBDBF0D18E8CD9A87E53FA3881E2F004C67C9DDA2CA677DBEFA3D61DF8463FE12D84FF4B4699E02C9D41CAB917F5A8FB9E35580C4BDF97763A0420A476295D763EE10174E6F9EBF7DF8A77BA5B20CDA4EE705DEF5BBA3C88567B9656E52C9CD5CD95CA735FF2D25F762B133273EEEB7B4F3EA8B6DA29040F3B67CD", "assign"), 1024), e, r);
    }
  };
});
var jsVersion = cc11001100_hook("jsVersion", 180925, "var-init"),
  KgUser = cc11001100_hook("KgUser", KgUser || {
    $: function () {
      for (var e = cc11001100_hook("e", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", arguments.length, "var-init"); t < r; t++) {
        var i = cc11001100_hook("i", arguments[t], "var-init");
        if ("string" == typeof i && (i = cc11001100_hook("i", document.getElementById(i), "assign")), 1 == r) return i;
        e.push(i);
      }
      return e;
    },
    $T: function (e, t) {
      t = cc11001100_hook("t", (this.$(t) || document).getElementsByTagName(e || "*"), "assign");
      return this.$A(t);
    },
    $A: function (e) {
      for (var t = cc11001100_hook("t", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); r < i; r++) t.push(e[r]);
      return t;
    },
    $C: function (e, t, r) {
      var i = cc11001100_hook("i", [], "var-init"),
        n = cc11001100_hook("n", 0, "var-init");
      if (document.getElementsByClassName) {
        var o = cc11001100_hook("o", this.$(t || document).getElementsByClassName(e), "var-init");
        if (o = cc11001100_hook("o", this.$A(o), "assign"), r && "*" !== r) for (var s = cc11001100_hook("s", o.length, "var-init"); n < s; n++) o[n].tagName.toLowerCase() === r.toLowerCase() && i.push(o[n]);else i = cc11001100_hook("i", o, "assign");
      } else for (s = cc11001100_hook("s", (o = cc11001100_hook("o", this.$T(r, t), "assign")).length, "assign"); n < s; n++) new RegExp("\\b" + e + "\\b", "g").test(o[n].className) && i.push(o[n]);
      return i;
    },
    addJsVersion: function (e) {
      return -1 == e.indexOf("?") ? e + "?kguser_jv=" + jsVersion : e + "&kguser_jv=" + jsVersion;
    },
    isAckHost: function (e, t) {
      e = cc11001100_hook("e", e.split("/"), "assign");
      return e.length <= 2 || e[2] != t;
    },
    loadScriptN: function (e, t, r, i) {
      var n = cc11001100_hook("n", !1, "var-init"),
        o = cc11001100_hook("o", null, "var-init"),
        s = cc11001100_hook("s", 3e3, "var-init"),
        a = cc11001100_hook("a", t || "", "var-init");
      if (t && "object" == typeof t) {
        KgUser.IsEmpty(t.mid) && (t.mid = cc11001100_hook("t.mid", KgUser.Cookie.read(KgUser.KgMid.name), "assign"));
        var g,
          c = cc11001100_hook("c", "", "var-init");
        for (g in t) "error" !== g && (c += cc11001100_hook("c", g + "=" + t[g] + "&", "assign"));
        a = cc11001100_hook("a", c.substr(0, c.length - 1), "assign"), KgUser.IsEmpty(t.timeout) || (s = cc11001100_hook("s", t.timeout, "assign"));
      }
      var d = cc11001100_hook("d", document.createElement("script"), "var-init"),
        u = cc11001100_hook("u", (d.type = cc11001100_hook("d.type", "text/javascript", "assign"), e = cc11001100_hook("e", KgUser.addJsVersion(e = cc11001100_hook("e", null != a && "" != a ? e + "?" + (a || "") : e, "assign")), "assign"), KgUser.KgErrType.busislave), "var-init");
      -1 < e.indexOf("KgAck") && (u = cc11001100_hook("u", KgUser.KgErrType.ackjs, "assign")), d.src = cc11001100_hook("d.src", e, "assign"), d.onload = cc11001100_hook("d.onload", d.onreadystatechange = cc11001100_hook("d.onreadystatechange", function () {
        this.readyState && "complete" != this.readyState && "loaded" != this.readyState || (d.onreadystatechange = cc11001100_hook("d.onreadystatechange", d.onload = cc11001100_hook("d.onload", null, "assign"), "assign"), d = cc11001100_hook("d", null, "assign"), clearTimeout(o), r && r());
      }, "assign"), "assign"), d.onerror = cc11001100_hook("d.onerror", function () {
        n || (clearTimeout(o), t.error && t.error(u));
      }, "assign"), i && (d.async = cc11001100_hook("d.async", "async", "assign")), o = cc11001100_hook("o", setTimeout(function () {
        n = cc11001100_hook("n", !0, "assign"), t.error && t.error(u);
      }, s), "assign"), document.getElementsByTagName("head")[0].appendChild(d);
    },
    loadScript: function (e, t, r) {
      var i = cc11001100_hook("i", !1, "var-init"),
        n = cc11001100_hook("n", null, "var-init"),
        o = cc11001100_hook("o", t, "var-init"),
        s = cc11001100_hook("s", e, "var-init"),
        a = cc11001100_hook("a", t || "", "var-init");
      if (t && "object" == typeof t) {
        KgUser.IsEmpty(t.mid) && (t.mid = cc11001100_hook("t.mid", KgUser.Cookie.read(KgUser.KgMid.name), "assign"));
        var g,
          c = cc11001100_hook("c", "", "var-init");
        for (g in t) "error" !== g && (c += cc11001100_hook("c", g + "=" + t[g] + "&", "assign"));
        a = cc11001100_hook("a", c.substr(0, c.length - 1), "assign"), KgUser.IsEmpty(t.timeout) && (o.timeout = cc11001100_hook("o.timeout", 3500, "assign"));
      }
      var d,
        u,
        l,
        p,
        f = cc11001100_hook("f", document.createElement("script"), "var-init"),
        a = cc11001100_hook("a", (f.type = cc11001100_hook("f.type", "text/javascript", "assign"), e = cc11001100_hook("e", KgUser.addJsVersion(e = cc11001100_hook("e", null != a && "" != a ? e + "?" + (a || "") : e, "assign")), "assign"), KgUser.KgUrl.verify = cc11001100_hook("KgUser.KgUrl.verify", "https://verifyservice.kugou.com/", "assign"), e.split("/")), "var-init");
      a.length <= 2 ? t.error && t.error(KgUser.KgErrType.param) : (d = cc11001100_hook("d", a[2], "assign"), l = cc11001100_hook("l", KgUser.KgErrType.busislave, "assign"), (u = cc11001100_hook("u", "login-user.kugou.com" == d || "reg-user.kugou.com" == d, "assign")) ? l = cc11001100_hook("l", KgUser.KgErrType.busimaster, "assign") : -1 < e.indexOf("KgAck") && (l = cc11001100_hook("l", KgUser.KgErrType.ackjs, "assign")), f.src = cc11001100_hook("f.src", e, "assign"), p = cc11001100_hook("p", !1, "assign"), f.onload = cc11001100_hook("f.onload", f.onreadystatechange = cc11001100_hook("f.onreadystatechange", function () {
        this.readyState && "complete" != this.readyState && "loaded" != this.readyState || (f.onreadystatechange = cc11001100_hook("f.onreadystatechange", f.onload = cc11001100_hook("f.onload", null, "assign"), "assign"), p = cc11001100_hook("p", !(f = cc11001100_hook("f", null, "assign")), "assign"), clearTimeout(n), r && r());
      }, "assign"), "assign"), f.onerror = cc11001100_hook("f.onerror", function () {
        u ? i || (clearTimeout(n), KgUser.loginDRRetry(s, d, o, r)) : t.error && t.error(l);
      }, "assign"), document.getElementsByTagName("head")[0].appendChild(f), u && (n = cc11001100_hook("n", setTimeout(function () {
        p || (i = cc11001100_hook("i", !0, "assign"), KgUser.loginDRRetry(s, d, o, r));
      }, 3500), "assign")));
    },
    KgAckId: {
      login: cc11001100_hook("login", 10015, "object-key-init"),
      reg: cc11001100_hook("reg", 10016, "object-key-init"),
      verify: cc11001100_hook("verify", 10017, "object-key-init"),
      url: cc11001100_hook("url", "http://serveraddr.serviceweb.kugou.com/KgAck.js", "object-key-init"),
      url_https: cc11001100_hook("url_https", "https://serveraddrweb.kugou.com/KgAckV2.js", "object-key-init")
    },
    ackCallBack: function (e) {
      var t, r;
      1 == e.errorCode && (t = cc11001100_hook("t", KgUser.KgAckId.global_param, "assign"), e = cc11001100_hook("e", e.data, "assign"), r = cc11001100_hook("r", t.loginHost, "assign"), e = cc11001100_hook("e", e["server_" + KgUser.KgAckId.login], "assign"), KgUser.IsEmpty(e) || (e = cc11001100_hook("e", e.list[0], "assign"), KgUser.isAckHost(KgUser.KgUrl.login, r) || (KgUser.KgUrl.verify = cc11001100_hook("KgUser.KgUrl.verify", "http://" + e, "assign"), KgUser.KgUrl.login = cc11001100_hook("KgUser.KgUrl.login", KgUser.KgUrl.login.replace(r, e), "assign"), KgUser.KgUrl.loginHTTP = cc11001100_hook("KgUser.KgUrl.loginHTTP", KgUser.KgUrl.loginHTTP.replace(r, e), "assign")), KgUser.loadScriptN(t.url.replace(r, e), t.args, t.callback)));
    },
    ackCallBackUpdateCookie: function (e) {
      setTimeout(function () {
        var e = cc11001100_hook("e", "ACK_SERVER_" + KgUser.KgAckId.login, "var-init"),
          t = cc11001100_hook("t", KgUser.Cookie.read(e), "var-init");
        KgUser.IsEmpty(t) || KgUser.Cookie.write(e, t, 3600, "/");
      }, 500);
    },
    KgErrType: {
      busimaster: cc11001100_hook("busimaster", 1, "object-key-init"),
      busislave: cc11001100_hook("busislave", 2, "object-key-init"),
      ackjs: cc11001100_hook("ackjs", 3, "object-key-init"),
      ackconf: cc11001100_hook("ackconf", 4, "object-key-init")
    },
    loadAckJs: function (t) {
      for (var e = cc11001100_hook("e", [KgUser.KgAckId.login, KgUser.KgAckId.reg, KgUser.KgAckId.verify], "var-init"), r = cc11001100_hook("r", new Array(), "var-init"), i = cc11001100_hook("i", "ACK_SERVER_", "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
        var o = cc11001100_hook("o", KgUser.Cookie.read(i + e[n]), "var-init");
        KgUser.IsEmpty(o) && r.push(e[n]);
      }
      var s,
        a,
        g = cc11001100_hook("g", 88, "var-init");
      t && t.appid && 0 < parseInt(t.appid) && (g = cc11001100_hook("g", t.appid, "assign")), window.getAckConfCallback = cc11001100_hook("window.getAckConfCallback", function () {
        var e;
        "undefined" != typeof KgAck && ((e = cc11001100_hook("e", new Object(), "assign")).appid = cc11001100_hook("(e = new Object()).appid", g, "assign"), e.clientver = cc11001100_hook("e.clientver", 10, "assign"), e.clienttime = cc11001100_hook("e.clienttime", new Date().getTime(), "assign"), e.plats = cc11001100_hook("e.plats", r, "assign"), void 0 !== t ? (KgAck.getConfig(e, "KgUser.ackCallBack"), t.error && setTimeout(function () {
          KgUser.IsEmpty(KgUser.Cookie.read(i + KgUser.KgAckId.login)) && t.error(KgUser.KgErrType.ackconf);
        }, timeout)) : KgAck.getConfig(e, "KgUser.ackCallBackUpdateCookie"));
      }, "assign"), 0 < r.length && ("undefined" == typeof KgAck ? (s = cc11001100_hook("s", KgUser.KgAckId.url, "assign"), "https:" == document.location.protocol && (s = cc11001100_hook("s", KgUser.KgAckId.url_https, "assign")), (a = cc11001100_hook("a", new Object(), "assign")).timeout = cc11001100_hook("(a = new Object()).timeout", 3e3, "assign"), t && t.timeout && (a.timeout = cc11001100_hook("a.timeout", t.timeout, "assign")), t && t.error && (a.error = cc11001100_hook("a.error", t.error, "assign")), KgUser.loadScriptN(s, a, getAckConfCallback, !0)) : getAckConfCallback());
    },
    ackRetry: function (e, t, r, i) {
      var n = cc11001100_hook("n", "login-user.kugou.com", "var-init"),
        o = cc11001100_hook("o", KgUser.Cookie.read("ACK_SERVER_" + KgUser.KgAckId.login), "var-init");
      if (!KgUser.IsEmpty(o)) return o = cc11001100_hook("o", KgUser.JSON.parse(o).list[0], "assign"), KgUser.isAckHost(KgUser.KgUrl.login, n) || (KgUser.KgUrl.verify = cc11001100_hook("KgUser.KgUrl.verify", "http://" + o, "assign"), KgUser.KgUrl.login = cc11001100_hook("KgUser.KgUrl.login", KgUser.KgUrl.login.replace(n, o), "assign"), KgUser.KgUrl.loginHTTP = cc11001100_hook("KgUser.KgUrl.loginHTTP", KgUser.KgUrl.loginHTTP.replace(n, o), "assign")), void KgUser.loadScriptN(e.replace(t, o), r, i);
      t = cc11001100_hook("t", new Object(), "assign");
      t.loginHost = cc11001100_hook("t.loginHost", n, "assign"), t.url = cc11001100_hook("t.url", e, "assign"), t.args = cc11001100_hook("t.args", r, "assign"), t.callback = cc11001100_hook("t.callback", i, "assign"), KgUser.KgAckId.global_param = cc11001100_hook("KgUser.KgAckId.global_param", t, "assign"), this.loadAckJs(r);
    },
    KgMid: {
      name: cc11001100_hook("name", "kg_mid", "object-key-init"),
      days: cc11001100_hook("days", 1e4, "object-key-init")
    },
    JSON: cc11001100_hook("JSON", function () {
      function f(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e < 10 ? "0" + e : e;
      }
      Date.prototype.toJSON = cc11001100_hook("Date.prototype.toJSON", function () {
        return this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z";
      }, "assign");
      var m = cc11001100_hook("m", {
        "\b": cc11001100_hook("\b", "\\b", "object-key-init"),
        "\t": cc11001100_hook("\t", "\\t", "object-key-init"),
        "\n": cc11001100_hook("\n", "\\n", "object-key-init"),
        "\f": cc11001100_hook("\f", "\\f", "object-key-init"),
        "\r": cc11001100_hook("\r", "\\r", "object-key-init"),
        '"': cc11001100_hook('"', '\\"', "object-key-init"),
        "\\": cc11001100_hook("\\", "\\\\", "object-key-init")
      }, "var-init");
      function stringify(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var r,
          i,
          n,
          o,
          s,
          a = cc11001100_hook("a", /["\\\x00-\x1f\x7f-\x9f]/g, "var-init");
        switch (typeof e) {
          case "string":
            return a.test(e) ? '"' + e.replace(a, function (e) {
              var t = cc11001100_hook("t", m[e], "var-init");
              return t || (t = cc11001100_hook("t", e.charCodeAt(), "assign"), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16));
            }) + '"' : '"' + e + '"';
          case "number":
            return isFinite(e) ? String(e) : "null";
          case "boolean":
          case "null":
            return String(e);
          case "object":
            if (!e) return "null";
            if ("function" == typeof e.toJSON) return stringify(e.toJSON());
            if (r = cc11001100_hook("r", [], "assign"), "number" == typeof e.length && !e.propertyIsEnumerable("length")) {
              for (o = cc11001100_hook("o", e.length, "assign"), i = cc11001100_hook("i", 0, "assign"); i < o; i += cc11001100_hook("i", 1, "assign")) r.push(stringify(e[i], t) || "null");
              return "[" + r.join(",") + "]";
            }
            if (t) for (o = cc11001100_hook("o", t.length, "assign"), i = cc11001100_hook("i", 0, "assign"); i < o; i += cc11001100_hook("i", 1, "assign")) "string" == typeof (n = cc11001100_hook("n", t[i], "assign")) && (s = cc11001100_hook("s", stringify(e[n], t), "assign")) && r.push(stringify(n) + ":" + s);else for (n in e) "string" == typeof n && (s = cc11001100_hook("s", stringify(e[n], t), "assign")) && r.push(stringify(n) + ":" + s);
            return "{" + r.join(",") + "}";
        }
      }
      return {
        stringify: cc11001100_hook("stringify", stringify, "object-key-init"),
        parse: function (text, filter) {
          var j;
          function walk(e, t) {
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("t", t, "function-parameter");
            var r, i;
            if (t && "object" == typeof t) for (r in t) Object.prototype.hasOwnProperty.apply(t, [r]) && (void 0 !== (i = cc11001100_hook("i", walk(r, t[r]), "assign")) ? t[r] = cc11001100_hook("t[r]", i, "assign") : delete t[r]);
            return filter(e, t);
          }
          if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = cc11001100_hook("j", eval("(" + text + ")"), "assign"), "function" == typeof filter ? walk("", j) : j;
          throw new SyntaxError("parseJSON");
        }
      };
    }(), "object-key-init"),
    Cookie: {
      write: function (e, t, r, i, n, o, s) {
        var a,
          g = cc11001100_hook("g", "", "var-init");
        r && ((a = cc11001100_hook("a", new Date(), "assign")).setTime(a.getTime() + 1e3 * r), g = cc11001100_hook("g", ";expires=" + a.toGMTString(), "assign")), t = cc11001100_hook("t", encodeURIComponent(t), "assign"), i = cc11001100_hook("i", i ? "; path=" + i : ";path=/", "assign"), n = cc11001100_hook("n", n ? "; domain=" + n : "", "assign"), o = cc11001100_hook("o", o ? "; secure" : "", "assign"), s = cc11001100_hook("s", s ? "; sameSite=" + s : "", "assign"), document.cookie = cc11001100_hook("document.cookie", [e, "=", t, g, i, n, o, s].join(""), "assign");
      },
      writeUnencodeVaule: function (e, t, r, i, n, o, s) {
        var a,
          g = cc11001100_hook("g", "", "var-init");
        r && ((a = cc11001100_hook("a", new Date(), "assign")).setTime(a.getTime() + 1e3 * r), g = cc11001100_hook("g", ";expires=" + a.toGMTString(), "assign")), t = cc11001100_hook("t", t || "", "assign"), i = cc11001100_hook("i", i ? "; path=" + i : ";path=/", "assign"), n = cc11001100_hook("n", n ? "; domain=" + n : "", "assign"), o = cc11001100_hook("o", o ? "; secure" : "", "assign"), s = cc11001100_hook("s", s ? "; sameSite=" + s : "", "assign"), document.cookie = cc11001100_hook("document.cookie", [e, "=", t, g, i, n, o, s].join(""), "assign");
      },
      setDay: function (e, t, r, i, n, o) {
        this.write(e, t, 24 * r * 60 * 60, i, n, o);
      },
      setHour: function (e, t, r, i, n, o) {
        this.write(e, t, 60 * r * 60, i, n, o);
      },
      setMin: function (e, t, r, i, n, o) {
        this.write(e, t, 60 * r, i, n, o);
      },
      setSec: function (e, t, r, i, n, o) {
        this.write(e, t, r, i, n, o);
      },
      read: function (e, t) {
        var r = cc11001100_hook("r", "", "var-init"),
          e = cc11001100_hook("e", e + "=", "var-init");
        if (0 < document.cookie.length && -1 != (offset = cc11001100_hook("offset", document.cookie.indexOf(e), "assign")) && (offset += cc11001100_hook("offset", e.length, "assign"), -1 == (end = cc11001100_hook("end", document.cookie.indexOf(";", offset), "assign")) && (end = cc11001100_hook("end", document.cookie.length, "assign")), r = cc11001100_hook("r", document.cookie.substring(offset, end), "assign"), void 0 !== t && null != t && "" != t)) for (var i = cc11001100_hook("i", r.toString().split("&"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < i.length; n++) {
          var o = cc11001100_hook("o", i[n], "var-init");
          if (o.substring(0, t.length + 1) == t + "=") {
            r = cc11001100_hook("r", o.substring(t.length + 1).replace(/%/g, "\\"), "assign");
            break;
          }
          r = cc11001100_hook("r", "", "assign");
        }
        return decodeURIComponent(r);
      },
      remove: function (e) {
        this.write(e, "", -90);
      }
    },
    KgUrl: {
      login: cc11001100_hook("login", "https://login-user.kugou.com/", "object-key-init"),
      loginHTTP: cc11001100_hook("loginHTTP", "http://login-user.kugou.com/", "object-key-init"),
      verify: cc11001100_hook("verify", "https://verifyservice.kugou.com/", "object-key-init"),
      third: cc11001100_hook("third", "https://openplat-user.kugou.com/", "object-key-init"),
      cross: cc11001100_hook("cross", "https://loginservice.kugou.com/", "object-key-init"),
      reg: cc11001100_hook("reg", "https://reg-user.kugou.com/", "object-key-init"),
      user: cc11001100_hook("user", "https://userinfoservice.kugou.com/", "object-key-init"),
      qrcodeH5: cc11001100_hook("qrcodeH5", "https://h5.kugou.com/apps/loginQRCode/html/index.html", "object-key-init")
    },
    LoadCss: function (e, t) {
      var r = cc11001100_hook("r", document.createElement("style"), "var-init"),
        i = cc11001100_hook("i", document.head || document.getElementsByTagName("head")[0], "var-init");
      r.type = cc11001100_hook("r.type", "text/css", "assign"), r.id = cc11001100_hook("r.id", t, "assign"), r.styleSheet ? (t = cc11001100_hook("t", function () {
        try {
          r.styleSheet.cssText = cc11001100_hook("r.styleSheet.cssText", e, "assign");
        } catch (e) {}
      }, "assign"), r.styleSheet.disabled ? setTimeout(t, 10) : t()) : (t = cc11001100_hook("t", document.createTextNode(e), "assign"), r.appendChild(t)), i.appendChild(r);
    },
    Login: function (t, r) {
      var i,
        n,
        o,
        s = cc11001100_hook("s", "", "var-init"),
        a = cc11001100_hook("a", "", "var-init"),
        g = cc11001100_hook("g", 1, "var-init"),
        c = cc11001100_hook("c", !1, "var-init"),
        d = cc11001100_hook("d", "", "var-init"),
        u = cc11001100_hook("u", "", "var-init"),
        l = cc11001100_hook("l", "", "var-init"),
        p = cc11001100_hook("p", "", "var-init");
      if (KgUser.IsEmpty(t.appid) || KgUser.IsEmpty(KgUser.Trim(t.username)) || KgUser.IsEmpty(KgUser.Trim(t.pwd)) || KgUser.IsEmpty(r)) return KgUser.GetMsg(r, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      }), !1;
      i = cc11001100_hook("i", t.appid, "assign"), n = cc11001100_hook("n", KgUser.Trim(t.username), "assign"), o = cc11001100_hook("o", KgUser.Trim(t.pwd), "assign"), KgUser.IsEmpty(KgUser.Trim(t.code)) || (s = cc11001100_hook("s", KgUser.Trim(t.code), "assign")), KgUser.IsEmpty(KgUser.Trim(t.ticket)) || (a = cc11001100_hook("a", KgUser.Trim(t.ticket), "assign")), KgUser.IsEmpty(t.expire_day) || (g = cc11001100_hook("g", t.expire_day, "assign")), KgUser.IsEmpty(t.autologin) || (c = cc11001100_hook("c", t.autologin, "assign")), KgUser.IsEmpty(t.redirect_uri) || (d = cc11001100_hook("d", t.redirect_uri, "assign")), KgUser.IsEmpty(t.state) || (u = cc11001100_hook("u", t.state, "assign")), KgUser.IsEmpty(KgUser.Trim(t.mobile)) || (l = cc11001100_hook("l", KgUser.Trim(t.mobile), "assign")), KgUser.IsEmpty(KgUser.Trim(t.mobile_code)) || (p = cc11001100_hook("p", KgUser.Trim(t.mobile_code), "assign")), c && (g = cc11001100_hook("g", 30, "assign"));
      var f,
        m = cc11001100_hook("m", KgUser.getPlat(i), "var-init");
      KgUser.getDfidAsyn(i, function (e) {
        f = cc11001100_hook("f", e, "assign");
        e = cc11001100_hook("e", {
          appid: cc11001100_hook("appid", i, "object-key-init"),
          username: cc11001100_hook("username", encodeURIComponent(n), "object-key-init"),
          pwd: cc11001100_hook("pwd", KgUser.Md5(o), "object-key-init"),
          code: cc11001100_hook("code", s, "object-key-init"),
          ticket: cc11001100_hook("ticket", a, "object-key-init"),
          clienttime: cc11001100_hook("clienttime", parseInt(new Date().getTime() / 1e3), "object-key-init"),
          expire_day: cc11001100_hook("expire_day", g, "object-key-init"),
          autologin: cc11001100_hook("autologin", c, "object-key-init"),
          redirect_uri: cc11001100_hook("redirect_uri", encodeURIComponent(d), "object-key-init"),
          state: cc11001100_hook("state", encodeURIComponent(u), "object-key-init"),
          callback: cc11001100_hook("callback", r, "object-key-init"),
          error: cc11001100_hook("error", t.error, "object-key-init"),
          login_ver: cc11001100_hook("login_ver", 1, "object-key-init"),
          mobile: cc11001100_hook("mobile", l, "object-key-init"),
          mobile_code: cc11001100_hook("mobile_code", p, "object-key-init"),
          plat: cc11001100_hook("plat", m, "object-key-init"),
          dfid: cc11001100_hook("dfid", f, "object-key-init")
        }, "assign");
        KgUser.loadScript(KgUser.KgUrl.login + "v1/login/", e);
      });
    },
    LoginByVerifycode: function (e, r) {
      var i,
        n,
        o = cc11001100_hook("o", "", "var-init"),
        s = cc11001100_hook("s", 1, "var-init"),
        a = cc11001100_hook("a", 1, "var-init");
      if (KgUser.IsEmpty(e.appid) || KgUser.IsEmpty(KgUser.Trim(e.mobile)) || KgUser.IsEmpty(KgUser.Trim(e.code)) || KgUser.IsEmpty(r)) return KgUser.GetMsg(r, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      }), !1;
      i = cc11001100_hook("i", e.appid, "assign"), n = cc11001100_hook("n", KgUser.Trim(e.mobile), "assign"), KgUser.IsEmpty(KgUser.Trim(e.code)) || (o = cc11001100_hook("o", KgUser.Trim(e.code), "assign")), KgUser.IsEmpty(e.expire_day) || (s = cc11001100_hook("s", e.expire_day, "assign")), KgUser.IsEmpty(e.force_login) && 0 != e.force_login || (a = cc11001100_hook("a", e.force_login, "assign"));
      var g,
        c = cc11001100_hook("c", KgUser.getPlat(i), "var-init");
      KgUser.getDfidAsyn(i, function (e) {
        g = cc11001100_hook("g", e, "assign");
        var e = cc11001100_hook("e", {
            appid: cc11001100_hook("appid", i, "object-key-init"),
            mobile: cc11001100_hook("mobile", encodeURIComponent(n), "object-key-init"),
            code: cc11001100_hook("code", o, "object-key-init"),
            clienttime: cc11001100_hook("clienttime", parseInt(new Date().getTime() / 1e3), "object-key-init"),
            expire_day: cc11001100_hook("expire_day", s, "object-key-init"),
            callback: cc11001100_hook("callback", "KgUser.LoginByCodeVerifyCallback", "object-key-init"),
            login_ver: cc11001100_hook("login_ver", 1, "object-key-init"),
            plat: cc11001100_hook("plat", c, "object-key-init"),
            dfid: cc11001100_hook("dfid", g, "object-key-init"),
            force_login: cc11001100_hook("force_login", a, "object-key-init")
          }, "var-init"),
          t = cc11001100_hook("t", KgUser.getKgMid(), "var-init");
        KgUser.LoginByCodeVerifyCallbackParam.appid = cc11001100_hook("KgUser.LoginByCodeVerifyCallbackParam.appid", i, "assign"), KgUser.LoginByCodeVerifyCallbackParam.mid = cc11001100_hook("KgUser.LoginByCodeVerifyCallbackParam.mid", t, "assign"), KgUser.LoginByCodeVerifyCallbackParam.callbackName = cc11001100_hook("KgUser.LoginByCodeVerifyCallbackParam.callbackName", r, "assign"), KgUser.loadScript(KgUser.KgUrl.login + "v1/loginbyverifycode/", e);
      });
    },
    LoginByVerifycodeV2: function (e, n) {
      var o,
        s,
        a = cc11001100_hook("a", "", "var-init"),
        g = cc11001100_hook("g", 1, "var-init"),
        c = cc11001100_hook("c", 1, "var-init"),
        d = cc11001100_hook("d", KgUser.getKgMid(), "var-init"),
        u = cc11001100_hook("u", "", "var-init"),
        l = cc11001100_hook("l", 1, "var-init"),
        p = cc11001100_hook("p", "", "var-init");
      if (KgUser.IsEmpty(e.appid) || KgUser.IsEmpty(KgUser.Trim(e.mobile)) || KgUser.IsEmpty(KgUser.Trim(e.code)) || KgUser.IsEmpty(n)) return KgUser.GetMsg(n, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      }), !1;
      o = cc11001100_hook("o", e.appid, "assign"), s = cc11001100_hook("s", KgUser.Trim(e.mobile), "assign"), KgUser.IsEmpty(KgUser.Trim(e.code)) || (a = cc11001100_hook("a", KgUser.Trim(e.code), "assign")), KgUser.IsEmpty(e.expire_day) || (g = cc11001100_hook("g", e.expire_day, "assign")), KgUser.IsEmpty(e.support_multi) || (c = cc11001100_hook("c", e.support_multi, "assign")), KgUser.IsEmpty(e.userid) || (u = cc11001100_hook("u", e.userid, "assign")), KgUser.IsEmpty(e.force_login) && 0 != e.force_login || (l = cc11001100_hook("l", e.force_login, "assign")), KgUser.IsEmpty(e.verify_data) && 0 != e.verify_data || (p = cc11001100_hook("p", e.verify_data, "assign"));
      var f,
        m = cc11001100_hook("m", KgUser.getPlat(o), "var-init");
      KgUser.getDfidAsyn(o, function (e) {
        f = cc11001100_hook("f", e, "assign");
        var t = cc11001100_hook("t", {
            appid: cc11001100_hook("appid", o, "object-key-init"),
            clientver: cc11001100_hook("clientver", 10, "object-key-init"),
            clienttime: cc11001100_hook("clienttime", parseInt(new Date().getTime() / 1e3), "object-key-init"),
            mid: cc11001100_hook("mid", d, "object-key-init"),
            dfid: cc11001100_hook("dfid", f, "object-key-init")
          }, "var-init"),
          r = cc11001100_hook("r", {
            plat: cc11001100_hook("plat", m, "object-key-init"),
            mobile: cc11001100_hook("mobile", encodeURIComponent(s), "object-key-init"),
            code: cc11001100_hook("code", a, "object-key-init"),
            expire_day: cc11001100_hook("expire_day", g, "object-key-init"),
            support_multi: cc11001100_hook("support_multi", c, "object-key-init"),
            userid: cc11001100_hook("userid", u, "object-key-init"),
            force_login: cc11001100_hook("force_login", l, "object-key-init")
          }, "var-init"),
          i = cc11001100_hook("i", p ? [{
            key: cc11001100_hook("key", "VerifyData", "object-key-init"),
            value: cc11001100_hook("value", p, "object-key-init")
          }] : null, "var-init");
        window.getInterFacePublic ? getInterFacePublic(t, r, function (e) {
          e = cc11001100_hook("e", KgUser.objectToGetParams(e), "assign");
          KgUser.sentPostRequest(KgUser.KgUrl.login + "v2/loginbyverifycode/?" + e, r, function (e) {
            KgUser.LoginByCodeVerifyCallback(e, o, d, n, g, t, r);
          }, i);
        }) : KgUser.loadScript("https://staticssl.kugou.com/common/js/min/inf_public-min.js", null, function () {
          getInterFacePublic(t, r, function (e) {
            e = cc11001100_hook("e", KgUser.objectToGetParams(e), "assign");
            KgUser.sentPostRequest(KgUser.KgUrl.login + "v2/loginbyverifycode/?" + e, r, function (e) {
              KgUser.LoginByCodeVerifyCallback(e, o, d, n, g, t, r);
            }, i);
          });
        });
      });
    },
    checkMobileV3: function (i, n) {
      var o = cc11001100_hook("o", i.appid, "var-init");
      KgUser.getDfidAsyn(o, function (e) {
        dfid = cc11001100_hook("dfid", e, "assign");
        var t = cc11001100_hook("t", {
            appid: cc11001100_hook("appid", o, "object-key-init"),
            clientver: cc11001100_hook("clientver", 1e3, "object-key-init"),
            clienttime: cc11001100_hook("clienttime", parseInt(new Date().getTime() / 1e3), "object-key-init"),
            mid: cc11001100_hook("mid", KgUser.getKgMid(), "object-key-init"),
            uuid: cc11001100_hook("uuid", KgUser.getKgMid(), "object-key-init"),
            dfid: cc11001100_hook("dfid", dfid, "object-key-init")
          }, "var-init"),
          r = cc11001100_hook("r", {
            plat: cc11001100_hook("plat", KgUser.getPlat(o), "object-key-init"),
            mobile: cc11001100_hook("mobile", i.mobile, "object-key-init"),
            code: cc11001100_hook("code", i.code, "object-key-init"),
            businessid: cc11001100_hook("businessid", i.businessid || 1, "object-key-init"),
            query: cc11001100_hook("query", i.query, "object-key-init")
          }, "var-init");
        window.getInterFacePublic ? getInterFacePublic(t, r, function (e) {
          e = cc11001100_hook("e", KgUser.objectToGetParams(e), "assign");
          KgUser.sentPostRequest(KgUser.KgUrl.user + "v3/check_mobile?" + e, r, function (e) {
            n && n(e);
          });
        }) : KgUser.loadScript("https://staticssl.kugou.com/common/js/min/inf_public-min.js", null, function () {
          getInterFacePublic(t, r, function (e) {
            e = cc11001100_hook("e", KgUser.objectToGetParams(e), "assign");
            KgUser.sentPostRequest(KgUser.KgUrl.user + "v3/check_mobile?" + e, r, function (e) {
              n && n(e);
            });
          });
        });
      });
    },
    LoginByCodeVerifyCallbackParam: {
      appid: cc11001100_hook("appid", "", "object-key-init"),
      mid: cc11001100_hook("mid", "", "object-key-init"),
      callbackName: cc11001100_hook("callbackName", "", "object-key-init")
    },
    LoginByCodeVerifyCallback: function (e, t, r, i, n, o, s) {
      if ("string" == typeof e && (e = cc11001100_hook("e", JSON.parse(e), "assign")), null == t && null == r && null == i && (t = cc11001100_hook("t", KgUser.LoginByCodeVerifyCallbackParam.appid, "assign"), r = cc11001100_hook("r", KgUser.LoginByCodeVerifyCallbackParam.mid, "assign"), i = cc11001100_hook("i", KgUser.LoginByCodeVerifyCallbackParam.callbackName, "assign")), 20028 == e.errorCode) {
        var a = cc11001100_hook("a", e.eventid, "var-init");
        1058 == t ? KgUser.antiBrushH5({
          eventid: cc11001100_hook("eventid", a, "object-key-init"),
          userid: cc11001100_hook("userid", 0, "object-key-init"),
          appid: cc11001100_hook("appid", t, "object-key-init"),
          mid: cc11001100_hook("mid", r, "object-key-init"),
          url: cc11001100_hook("url", window.location.href, "object-key-init"),
          callback: function (e) {
            KgUser.GetMsg(i, e);
          }
        }) : KgUser.antiBrush({
          eventid: cc11001100_hook("eventid", a, "object-key-init"),
          userid: cc11001100_hook("userid", 0, "object-key-init"),
          appid: cc11001100_hook("appid", t, "object-key-init"),
          mid: cc11001100_hook("mid", r, "object-key-init"),
          url: cc11001100_hook("url", window.location.href, "object-key-init"),
          callback: function (e) {
            KgUser.GetMsg(i, e);
          }
        });
      } else if (20028 == e.error_code) {
        a = cc11001100_hook("a", function (e, t) {
          for (var r = cc11001100_hook("r", {}, "var-init"), i = cc11001100_hook("i", e.split("&"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < i.length; n++) r[i[n].split("=")[0]] = cc11001100_hook("r[i[n].split(\"=\")[0]]", unescape(i[n].split("=")[1]), "assign");
          return r[t];
        }(e.data, "eventid"), "assign"), o = cc11001100_hook("o", {
          appid: cc11001100_hook("appid", o.appid, "object-key-init"),
          mobile: cc11001100_hook("mobile", decodeURIComponent(s.mobile), "object-key-init"),
          code: cc11001100_hook("code", s.code, "object-key-init"),
          support_multi: cc11001100_hook("support_multi", s.support_multi, "object-key-init"),
          userid: cc11001100_hook("userid", s.userid, "object-key-init"),
          force_login: cc11001100_hook("force_login", s.force_login, "object-key-init"),
          verify_data: cc11001100_hook("verify_data", "", "object-key-init"),
          api: cc11001100_hook("api", "LoginByVerifycodeV2", "object-key-init")
        }, "assign");
        KgUser.Cookie.write("kg_login_retry", "", -90, "/", "kugou.com"), KgUser.Cookie.write("kg_login_retry", JSON.stringify(o), 3e5, "/", KgUser.GetDomain()), KgUser.antiBrushH5({
          eventid: cc11001100_hook("eventid", a, "object-key-init"),
          userid: cc11001100_hook("userid", 0, "object-key-init"),
          appid: cc11001100_hook("appid", t, "object-key-init"),
          mid: cc11001100_hook("mid", r, "object-key-init"),
          url: cc11001100_hook("url", window.location.href + "&vb=1", "object-key-init")
        });
      } else {
        if (1 == e.status && 0 == e.error_code) try {
          var g = cc11001100_hook("g", e.data.domain, "var-init"),
            c = cc11001100_hook("c", e.data.name, "var-init"),
            d = cc11001100_hook("d", e.data.path, "var-init"),
            u = cc11001100_hook("u", e.data.value, "var-init");
          KgUser.Cookie.writeUnencodeVaule(c, u, 86400 * n, d, g);
        } catch (e) {}
        KgUser.GetMsg(i, e);
      }
    },
    objectToGetParams: function (e) {
      var t,
        r = cc11001100_hook("r", "", "var-init");
      for (t in e) e.hasOwnProperty(t) && (r = cc11001100_hook("r", "" == r ? r + t + "=" + e[t] : r + "&" + t + "=" + e[t], "assign"));
      return r;
    },
    VerifyCode: function (e, t) {
      var r,
        n,
        o = cc11001100_hook("o", 90, "var-init"),
        s = cc11001100_hook("s", 40, "var-init"),
        a = cc11001100_hook("a", "LoginCheckCode", "var-init"),
        g = cc11001100_hook("g", "", "var-init"),
        c = cc11001100_hook("c", 0, "var-init");
      if (KgUser.IsEmpty(e.appid)) return !1;
      r = cc11001100_hook("r", e.appid, "assign"), n = cc11001100_hook("n", KgUser.Trim(e.codeid), "assign"), KgUser.IsEmpty(KgUser.Trim(e.width)) || (o = cc11001100_hook("o", KgUser.Trim(e.width), "assign")), KgUser.IsEmpty(KgUser.Trim(e.height)) || (s = cc11001100_hook("s", KgUser.Trim(e.height), "assign")), KgUser.IsEmpty(KgUser.Trim(e.type)) || (a = cc11001100_hook("a", KgUser.Trim(e.type), "assign")), KgUser.IsEmpty(KgUser.Trim(e.inputid)) || (g = cc11001100_hook("g", KgUser.Trim(e.inputid), "assign"));
      var c = cc11001100_hook("c", KgUser.IsEmpty(e.codetype) ? 0 : e.codetype, "var-init"),
        d = cc11001100_hook("d", Math.round(100 * Math.random()), "var-init");
      if ("RegCheckCode" == a && void 0 === e.codetype) {
        0 <= d && d <= 100 ? c = cc11001100_hook("c", 1, "assign") : 31 <= d && d <= 40 && (c = cc11001100_hook("c", 2, "assign"));
        var u = cc11001100_hook("u", g.split(","), "var-init");
        for (i = cc11001100_hook("i", 0, "assign"); i < u.length; i++) void 0 !== KgUser.$(u[i]) && (KgUser.$(u[i]).style.display = cc11001100_hook("KgUser.$(u[i]).style.display", 0 != c ? "none" : "", "assign"));
      }
      KgUser.CodeAll.codetype = cc11001100_hook("KgUser.CodeAll.codetype", c, "assign"), KgUser.CodeAll.appid = cc11001100_hook("KgUser.CodeAll.appid", r, "assign"), KgUser.CodeAll.codeid = cc11001100_hook("KgUser.CodeAll.codeid", n, "assign");
      var l = cc11001100_hook("l", "", "var-init");
      switch (l = cc11001100_hook("l", (l = cc11001100_hook("l", 3 == c && "LoginCheckCode" == a || "LoginCheckCode" == a || "RegCheckCode" == a || "SmsCheckCode" == a ? KgUser.KgUrl.login : KgUser.KgUrl.verify, "assign")) + "v1/get_img_code?type=" + a + "&appid=" + r + "&codetype=" + c + "&t=" + new Date().getTime(), "assign"), c) {
        case 1:
          setTimeout(function () {
            KgUser.SudokuCode({
              url: cc11001100_hook("url", l, "object-key-init"),
              id: cc11001100_hook("id", e.codeid, "object-key-init"),
              appid: cc11001100_hook("appid", r, "object-key-init")
            }, t);
          }, 100);
          break;
        case 2:
          setTimeout(function () {
            KgUser.ThirdCode({
              id: cc11001100_hook("id", e.codeid, "object-key-init"),
              url: cc11001100_hook("url", l, "object-key-init")
            }, t);
          }, 100);
          break;
        case 3:
          KgUser.SliderVerifyCode({
            url: cc11001100_hook("url", l, "object-key-init"),
            appid: cc11001100_hook("appid", r, "object-key-init"),
            success: cc11001100_hook("success", e.success, "object-key-init"),
            close: cc11001100_hook("close", e.close, "object-key-init"),
            update: cc11001100_hook("update", e.update, "object-key-init"),
            timeout: cc11001100_hook("timeout", e.timeout, "object-key-init"),
            callback: cc11001100_hook("callback", e.callback, "object-key-init"),
            callback_deg: cc11001100_hook("callback_deg", e.callback_deg, "object-key-init")
          });
          break;
        default:
          setTimeout(function () {
            KgUser.$(n).style.display = cc11001100_hook("KgUser.$(n).style.display", "", "assign"), KgUser.$(n).innerHTML = cc11001100_hook("KgUser.$(n).innerHTML", '<img id="KgPopupVerifyCode" src="' + l + '" onclick="KgUser.ChangeVerifyCode(this,' + r + ",'" + a + '\')" title="看不清，换一张" alt="看不清，换一张" style="cursor:pointer;width:' + o + "px;height:" + s + 'px;" />', "assign");
          }, 100);
      }
    },
    ChangeVerifyCode: function (t, r, i) {
      setTimeout(function () {
        var e = cc11001100_hook("e", "", "var-init"),
          e = cc11001100_hook("e", "LoginCheckCode" == i || "RegCheckCode" == i || "SmsCheckCode" == i ? KgUser.KgUrl.login : KgUser.KgUrl.verify, "var-init");
        t.src = cc11001100_hook("t.src", e + "v1/get_img_code?type=" + i + "&appid=" + r + "&t=" + new Date().getTime(), "assign");
      }, 100);
    },
    CheckVerifyCode: function (e) {
      var t = cc11001100_hook("t", parseInt(new Date().getTime() / 1e3), "var-init");
      if (KgUser.IsEmpty(e.appid) || KgUser.IsEmpty(KgUser.Trim(e.username))) return !1;
      var r = cc11001100_hook("r", e.appid, "var-init"),
        e = cc11001100_hook("e", KgUser.Trim(e.username), "var-init"),
        r = cc11001100_hook("r", {
          appid: cc11001100_hook("appid", r, "object-key-init"),
          username: cc11001100_hook("username", encodeURIComponent(e), "object-key-init"),
          t: cc11001100_hook("t", t, "object-key-init")
        }, "var-init");
      KgUser.loadScript(KgUser.KgUrl.login + "v1/check/", r);
    },
    ThirdLogin: function (e, t) {
      var r = cc11001100_hook("r", "", "var-init"),
        i = cc11001100_hook("i", "", "var-init"),
        n = cc11001100_hook("n", 0, "var-init"),
        o = cc11001100_hook("o", 0, "var-init"),
        s = cc11001100_hook("s", "", "var-init"),
        a = cc11001100_hook("a", 0, "var-init"),
        g = cc11001100_hook("g", parseInt(new Date().getTime() / 1e3), "var-init"),
        c = cc11001100_hook("c", "", "var-init"),
        d = cc11001100_hook("d", 0, "var-init"),
        u = cc11001100_hook("u", ("https:" === document.location.protocol && (d = cc11001100_hook("d", 1, "assign")), KgUser.IsEmpty(e.https) || (d = cc11001100_hook("d", e.https, "assign")), KgUser.IsEmpty(e.appid) || (a = cc11001100_hook("a", e.appid, "assign")), KgUser.IsEmpty(KgUser.Trim(e.partner)) || (s = cc11001100_hook("s", KgUser.Trim(e.partner).toLowerCase(), "assign")), KgUser.IsEmpty(KgUser.Trim(e.client)) || (c = cc11001100_hook("c", KgUser.Trim(e.client).toLowerCase(), "assign")), ""), "var-init");
      switch (s) {
        case "qzone":
        case "qq":
          r = cc11001100_hook("r", KgUser.KgUrl.third + "qq/?", "assign"), i = cc11001100_hook("i", "TencentLogin", "assign"), n = cc11001100_hook("n", 470, "assign"), o = cc11001100_hook("o", 340, "assign"), u = cc11001100_hook("u", "qq", "assign");
          break;
        case "sina":
          r = cc11001100_hook("r", KgUser.KgUrl.third + "sina/?", "assign"), i = cc11001100_hook("i", "SinaLogin", "assign"), n = cc11001100_hook("n", 562, "assign"), o = cc11001100_hook("o", 380, "assign");
          break;
        case "qqweibo":
          r = cc11001100_hook("r", KgUser.KgUrl.third + "qqweibo/?", "assign"), i = cc11001100_hook("i", "QQWeiBoLogin", "assign"), n = cc11001100_hook("n", 563, "assign"), o = cc11001100_hook("o", 387, "assign");
          break;
        case "renren":
          r = cc11001100_hook("r", KgUser.KgUrl.third + "renren/?", "assign"), i = cc11001100_hook("i", "RenrenLogin", "assign"), n = cc11001100_hook("n", 563, "assign"), o = cc11001100_hook("o", 387, "assign");
          break;
        case "weixin":
          r = cc11001100_hook("r", KgUser.KgUrl.third + "weixin/index.php?ktype=0", "assign"), i = cc11001100_hook("i", "WeiXinLogin", "assign"), n = cc11001100_hook("n", 563, "assign"), o = cc11001100_hook("o", 593, "assign"), u = cc11001100_hook("u", "wechat", "assign");
          break;
        case "esurfing":
          r = cc11001100_hook("r", KgUser.KgUrl.third + "esurfing/?", "assign"), i = cc11001100_hook("i", "EsurLogin", "assign"), n = cc11001100_hook("n", 800, "assign"), o = cc11001100_hook("o", 458, "assign");
      }
      var l,
        p = cc11001100_hook("p", 0, "var-init"),
        f = cc11001100_hook("f", (KgUser.IsEmpty(KgUser.Trim(e.bind)) || (p = cc11001100_hook("p", KgUser.Trim(e.bind), "assign")), ""), "var-init");
      KgUser.IsEmpty(KgUser.Trim(e.ktype)) || (f = cc11001100_hook("f", "&ktype=" + e.ktype, "assign")), (r = cc11001100_hook("r", 1 == p && "" != u ? "https://openplat-user.kugou.com/bind?userid=0&bind=1&partnername=" + u + f : r, "assign")) && (r += cc11001100_hook("r", "&appid=" + a + "&clienttime=" + g + "&callback=" + t + "&domain=" + KgUser.GetDomain() + "&https=" + d, "assign"), e = cc11001100_hook("e", KgUser.Cookie.read(KgUser.KgMid.name), "assign"), KgUser.IsEmpty(e) || (r += cc11001100_hook("r", "&mid=" + e, "assign")), l = cc11001100_hook("l", KgUser.getPlat(a), "assign"), KgUser.getDfidAsyn(a, function (e) {
        r += cc11001100_hook("r", "&dfid=" + e + "&platid=" + l, "assign");
        var e = cc11001100_hook("e", (window.screen.width - n) / 2, "var-init"),
          t = cc11001100_hook("t", (window.screen.height - o) / 2, "var-init");
        if ("mackugou" == c || "uwp" == c) {
          switch (r += cc11001100_hook("r", "&client=" + c, "assign"), s) {
            case "qzone":
              n = cc11001100_hook("n", 540, "assign"), o = cc11001100_hook("o", 400, "assign");
              break;
            case "sina":
              n = cc11001100_hook("n", 768, "assign"), o = cc11001100_hook("o", 400, "assign");
          }
          Supercall && Supercall.setView({
            type: cc11001100_hook("type", "child", "object-key-init"),
            window: cc11001100_hook("window", "contentWindow", "object-key-init"),
            name: cc11001100_hook("name", "ThirdLogin", "object-key-init"),
            options: {
              width: cc11001100_hook("width", n, "object-key-init"),
              height: cc11001100_hook("height", o, "object-key-init"),
              url: cc11001100_hook("url", r, "object-key-init"),
              parent: cc11001100_hook("parent", "login", "object-key-init"),
              standButton: cc11001100_hook("standButton", ["close"], "object-key-init")
            }
          }, function () {});
        } else window.open(r, i, "width=" + n + ",height=" + o + ",left=" + e + ",top=" + t + ",menubar=0,scrollbars=0,resizable=0,status=0,titlebar=0,toolbar=0,location=1");
      }));
    },
    SliderVerifyCode: function (t) {
      var r = cc11001100_hook("r", this, "var-init"),
        i = cc11001100_hook("i", t.success, "var-init"),
        n = cc11001100_hook("n", t.close, "var-init"),
        o = cc11001100_hook("o", t.update, "var-init"),
        s = cc11001100_hook("s", t.callback, "var-init"),
        a = cc11001100_hook("a", t.callback_deg, "var-init"),
        g = cc11001100_hook("g", t.timeout, "var-init"),
        e = cc11001100_hook("e", t.url, "var-init"),
        c = cc11001100_hook("c", !1, "var-init");
      function d() {
        window.capDestroy();
        var e = cc11001100_hook("e", {
          showHeader: cc11001100_hook("showHeader", !0, "object-key-init"),
          type: cc11001100_hook("type", "popup", "object-key-init"),
          start: function () {},
          callback: function (e) {
            e = cc11001100_hook("e", e, "assign"), (c = cc11001100_hook("c", !0, "assign")) && (e.ticket && 0 == e.ret ? (e = cc11001100_hook("e", e.ticket, "assign"), i && i(e)) : n && n());
          }
        }, "var-init");
        window.capRefresh(), o && o(), s && s(!0), window.capInit(document, e);
      }
      r.tcaptchaJsUrl ? d() : r.loadingTcaptchaJsUrl || (r.loadingTcaptchaJsUrl = cc11001100_hook("r.loadingTcaptchaJsUrl", !0, "assign"), window.kgSliderVerifyCodeHandler = cc11001100_hook("window.kgSliderVerifyCodeHandler", function (e) {
        r.loadingTcaptchaJsUrl = cc11001100_hook("r.loadingTcaptchaJsUrl", !1, "assign"), e && 0 == e.success && 1 == e.isDegrade ? a && a() : e && e.success && e.url ? (KgUser.loadScript(e.url, "", function () {
          c = cc11001100_hook("c", !0, "assign"), r.tcaptchaJsUrl = cc11001100_hook("r.tcaptchaJsUrl", e.url, "assign"), r.loadingTcaptchaJsUrl = cc11001100_hook("r.loadingTcaptchaJsUrl", !1, "assign"), 1 <= window.navigator.userAgent.indexOf("MSIE") ? setTimeout(function () {
            d();
          }, 500) : d();
        }), g && 0 < g && setTimeout(function () {
          c || s && s(!1);
        }, g)) : (r.loadingTcaptchaJsUrl = cc11001100_hook("r.loadingTcaptchaJsUrl", !1, "assign"), void 0 === t.retry && (t.retry = cc11001100_hook("t.retry", 3, "assign")), 0 < t.retry && (t.retry--, r.SliderVerifyCode(t)));
      }, "assign"), this.loadScript(e + "&callback=kgSliderVerifyCodeHandler"));
    },
    CrossDomainLogin: function (callbackName) {
      var appid = cc11001100_hook("appid", 0, "var-init"),
        userid = cc11001100_hook("userid", 0, "var-init"),
        token = cc11001100_hook("token", "", "var-init"),
        ct = cc11001100_hook("ct", parseInt(new Date().getTime() / 1e3), "var-init"),
        domain = cc11001100_hook("domain", KgUser.GetDomain(), "var-init"),
        param = cc11001100_hook("param", (KgUser.IsEmpty(KgUser.Cookie.read("KuGoo", "a_id")) || (appid = cc11001100_hook("appid", parseInt(KgUser.Cookie.read("KuGoo", "a_id")), "assign")), KgUser.IsEmpty(KgUser.Cookie.read("KuGoo", "KugooID")) || (userid = cc11001100_hook("userid", parseInt(KgUser.Cookie.read("KuGoo", "KugooID")), "assign")), KgUser.IsEmpty(KgUser.Cookie.read("KuGoo", "ct")) || (ct = cc11001100_hook("ct", parseInt(KgUser.Cookie.read("KuGoo", "ct")), "assign")), KgUser.IsEmpty(KgUser.Trim(KgUser.Cookie.read("KuGoo", "t"))) || (token = cc11001100_hook("token", KgUser.Trim(KgUser.Cookie.read("KuGoo", "t")), "assign")), {
          a_id: cc11001100_hook("a_id", appid, "object-key-init"),
          userid: cc11001100_hook("userid", userid, "object-key-init"),
          t: cc11001100_hook("t", token, "object-key-init"),
          ct: cc11001100_hook("ct", ct, "object-key-init"),
          callback: cc11001100_hook("callback", "", "object-key-init"),
          domain: cc11001100_hook("domain", domain, "object-key-init"),
          midname: cc11001100_hook("midname", KgUser.KgMid.name, "object-key-init"),
          days: cc11001100_hook("days", KgUser.KgMid.days, "object-key-init")
        }), "var-init"),
        url = cc11001100_hook("url", KgUser.KgUrl.login, "var-init");
      KgUser.loadScript(url + "v1/cross/", param, function () {
        var uinfo;
        KgUser.IsEmpty(callbackName) || (uinfo = cc11001100_hook("uinfo", new Object(), "assign"), KgUser.IsEmpty(KgUser.Cookie.read("KuGoo", "KugooID")) || (uinfo.userid = cc11001100_hook("uinfo.userid", parseInt(KgUser.Cookie.read("KuGoo", "KugooID")), "assign")), KgUser.IsEmpty(KgUser.Cookie.read("KuGoo", "UserName")) || (uinfo.username = cc11001100_hook("uinfo.username", eval("'" + KgUser.Trim(KgUser.Cookie.read("KuGoo", "UserName")) + "'"), "assign")), KgUser.IsEmpty(KgUser.Cookie.read("KuGoo", "NickName")) || (uinfo.nickname = cc11001100_hook("uinfo.nickname", eval("'" + KgUser.Trim(KgUser.Cookie.read("KuGoo", "NickName")) + "'"), "assign")), KgUser.IsEmpty(KgUser.Trim(KgUser.Cookie.read("KuGoo", "t"))) || (uinfo.token = cc11001100_hook("uinfo.token", KgUser.Trim(KgUser.Cookie.read("KuGoo", "t")), "assign")), KgUser.IsEmpty(KgUser.Trim(KgUser.Cookie.read("KuGoo", "Pic"))) || (uinfo.pic = cc11001100_hook("uinfo.pic", KgUser.Trim(KgUser.Cookie.read("KuGoo", "Pic")), "assign")), KgUser.GetMsg(callbackName, uinfo));
      });
    },
    AutoLogin: function (e) {
      var r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        n = cc11001100_hook("n", "", "var-init"),
        o = cc11001100_hook("o", parseInt(new Date().getTime() / 1e3), "var-init"),
        s = cc11001100_hook("s", KgUser.GetDomain(), "var-init"),
        a = cc11001100_hook("a", (KgUser.IsEmpty(KgUser.Cookie.read("KuGoo", "a_id")) || (r = cc11001100_hook("r", parseInt(KgUser.Cookie.read("KuGoo", "a_id")), "assign")), KgUser.IsEmpty(KgUser.Cookie.read("KuGoo", "KugooID")) || (i = cc11001100_hook("i", parseInt(KgUser.Cookie.read("KuGoo", "KugooID")), "assign")), KgUser.IsEmpty(KgUser.Cookie.read("KuGoo", "ct")) || (o = cc11001100_hook("o", parseInt(KgUser.Cookie.read("KuGoo", "ct")), "assign")), KgUser.IsEmpty(KgUser.Trim(KgUser.Cookie.read("KuGoo", "t"))) || (n = cc11001100_hook("n", KgUser.Trim(KgUser.Cookie.read("KuGoo", "t")), "assign")), KgUser.getPlat(r)), "var-init");
      KgUser.getDfidAsyn(r, function (e) {
        var e = cc11001100_hook("e", {
            a_id: cc11001100_hook("a_id", r, "object-key-init"),
            userid: cc11001100_hook("userid", i, "object-key-init"),
            t: cc11001100_hook("t", n, "object-key-init"),
            ct: cc11001100_hook("ct", o, "object-key-init"),
            callback: cc11001100_hook("callback", "", "object-key-init"),
            domain: cc11001100_hook("domain", s, "object-key-init"),
            plat: cc11001100_hook("plat", a, "object-key-init"),
            dfid: cc11001100_hook("dfid", e, "object-key-init")
          }, "var-init"),
          t = cc11001100_hook("t", KgUser.KgUrl.login, "var-init");
        KgUser.IsEmpty(n) || KgUser.loadScript(t + "v1/autologin", e);
      });
    },
    LoginOut: function (e) {
      KgUser.Cookie.setDay("KuGoo", "", -1, "", "." + KgUser.GetDomain(), "");
      var t,
        e = cc11001100_hook("e", KgUser.KgUrl.cross + "v2/loginout/?a_id=" + e + "&ct=" + parseInt(new Date().getTime() / 1e3) + "&domain=" + KgUser.GetDomain(), "var-init");
      /MSIE (\d+\.\d+);/.test(navigator.userAgent) || /MSIE(\d+\.\d+);/.test(navigator.userAgent) ? ((t = cc11001100_hook("t", document.createElement("a"), "assign")).href = cc11001100_hook("(t = document.createElement(\"a\")).href", e, "assign"), document.body.appendChild(t), t.click()) : location.href = cc11001100_hook("location.href", e, "assign");
    },
    GetDomain: function () {
      return "" == document.domain.toString() ? "" : document.domain.toString().match(/\w*\.(com.cn|com|net.cn|net|org.cn|org|gov.cn|gov|cn|mobi|me|info|name|biz|cc|tv|asia|hk|网络|公司|中国).*$/g)[0];
    },
    GetMsg: function (e, t) {
      if (Array.prototype.reduce || (Array.prototype.reduce = cc11001100_hook("Array.prototype.reduce", function (e) {
        if (null === this) throw new TypeError("Array.prototype.reduce called on null or undefined");
        if ("function" != typeof e) throw new TypeError(e + " is not a function");
        var t,
          r = cc11001100_hook("r", Object(this), "var-init"),
          i = cc11001100_hook("i", r.length >>> 0, "var-init"),
          n = cc11001100_hook("n", 0, "var-init");
        if (2 == arguments.length) t = cc11001100_hook("t", arguments[1], "assign");else {
          for (; n < i && !(n in r);) n++;
          if (i <= n) throw new TypeError("Reduce of empty array with no initial value");
          t = cc11001100_hook("t", r[n++], "assign");
        }
        for (; n < i; n++) n in r && (t = cc11001100_hook("t", e(t, r[n], n, r), "assign"));
        return t;
      }, "assign")), !KgUser.IsEmpty(e)) {
        var r = cc11001100_hook("r", null, "var-init");
        try {
          r = cc11001100_hook("r", e.split(".").reduce(function (e, t) {
            return e[t];
          }, window), "assign");
        } catch (e) {
          r = cc11001100_hook("r", null, "assign");
        }
        "function" == typeof r && r(t);
      }
    },
    GetSmsCode: function (n, o) {
      var s,
        a = cc11001100_hook("a", "", "var-init");
      if (KgUser.IsEmpty(n.appid) || KgUser.IsEmpty(KgUser.Trim(n.mobile))) return KgUser.GetMsg(o, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      }), !1;
      KgUser.IsEmpty(n.type) && (n.type = cc11001100_hook("n.type", "reg", "assign")), s = cc11001100_hook("s", n.appid, "assign"), a = cc11001100_hook("a", KgUser.Trim(n.mobile).toString(), "assign"), type = cc11001100_hook("type", KgUser.Trim(n.type), "assign"), verifycode = cc11001100_hook("verifycode", n.verifycode, "assign"), KgUser.IsEmpty(verifycode) && (verifycode = cc11001100_hook("verifycode", "", "assign"));
      var g = cc11001100_hook("g", 5, "var-init");
      if (KgUser.IsEmpty(n.businessid) || (g = cc11001100_hook("g", n.businessid, "assign")), type) switch (type) {
        case "bind":
          g = cc11001100_hook("g", 2, "assign");
          break;
        case "verify_old":
          g = cc11001100_hook("g", 4, "assign");
          break;
        case "other":
          g = cc11001100_hook("g", 8, "assign");
          break;
        case "reg":
          g = cc11001100_hook("g", 1, "assign");
      }
      var c,
        d = cc11001100_hook("d", KgUser.getPlat(s), "var-init");
      KgUser.getDfidAsyn(s, function (e) {
        c = cc11001100_hook("c", e, "assign");
        var e = cc11001100_hook("e", parseInt(new Date().getTime()), "var-init"),
          i = cc11001100_hook("i", {
            appid: cc11001100_hook("appid", s, "object-key-init"),
            clientver: cc11001100_hook("clientver", 1e3, "object-key-init"),
            clienttime: cc11001100_hook("clienttime", e, "object-key-init"),
            mid: cc11001100_hook("mid", KgUser.getKgMid(), "object-key-init"),
            uuid: cc11001100_hook("uuid", KgUser.getKgMid(), "object-key-init"),
            dfid: cc11001100_hook("dfid", c, "object-key-init")
          }, "var-init"),
          t = cc11001100_hook("t", {
            mobile: cc11001100_hook("mobile", a, "object-key-init")
          }, "var-init"),
          t = cc11001100_hook("t", AES.encrypt(JSON.stringify(t)), "var-init"),
          r = cc11001100_hook("r", {
            plat: cc11001100_hook("plat", d, "object-key-init"),
            clienttime_ms: cc11001100_hook("clienttime_ms", e, "object-key-init"),
            businessid: cc11001100_hook("businessid", g, "object-key-init"),
            pk: cc11001100_hook("pk", RSA.encrypt(JSON.stringify({
              clienttime_ms: cc11001100_hook("clienttime_ms", e, "object-key-init"),
              key: cc11001100_hook("key", t.key, "object-key-init")
            })), "object-key-init"),
            params: cc11001100_hook("params", t.encryptedStr, "object-key-init"),
            mobile: cc11001100_hook("mobile", a.substring(0, 2) + "********" + a.substring(10, 11), "object-key-init")
          }, "var-init");
        getInterFacePublic(i, r, {
          useH5: cc11001100_hook("useH5", !0, "object-key-init"),
          postType: cc11001100_hook("postType", "json", "object-key-init"),
          callback: function (e) {
            i = cc11001100_hook("i", e, "assign");
            e = cc11001100_hook("e", KgUser.objToParamStr(i), "assign");
            KgUser.sentPostRequest("https://gateway.kugou.com/v8/send_mobile_code?" + e, r, function (e, t) {
              try {
                e = cc11001100_hook("e", JSON.parse(e), "assign");
              } catch (e) {}
              var r;
              0 == e.status && t.getResponseHeader("SSA-CODE") ? (r = cc11001100_hook("r", t.getResponseHeader("SSA-CODE"), "assign"), t = cc11001100_hook("t", t.getResponseHeader("SSA-HMID"), "assign"), r ? "PC" == KgUser.getClientType() ? KgUser.antiBrush({
                eventid: cc11001100_hook("eventid", r, "object-key-init"),
                userid: cc11001100_hook("userid", 0, "object-key-init"),
                appid: cc11001100_hook("appid", s, "object-key-init"),
                mid: cc11001100_hook("mid", t || i.mid, "object-key-init"),
                url: cc11001100_hook("url", window.location.href, "object-key-init"),
                allowMultipleInit: cc11001100_hook("allowMultipleInit", !0, "object-key-init"),
                callback: function (e) {
                  1 == e.status && KgUser.GetSmsCode(n, o);
                }
              }) : KgUser.antiBrushH5({
                eventid: cc11001100_hook("eventid", r, "object-key-init"),
                userid: cc11001100_hook("userid", 0, "object-key-init"),
                appid: cc11001100_hook("appid", s, "object-key-init"),
                mid: cc11001100_hook("mid", t || i.mid, "object-key-init"),
                url: cc11001100_hook("url", window.location.href, "object-key-init"),
                openWith: cc11001100_hook("openWith", "iframe", "object-key-init"),
                callback: function (e) {
                  1 == e.status && KgUser.GetSmsCode(n, o);
                }
              }) : KgUser.GetMsg(o, {
                status: cc11001100_hook("status", e.status, "object-key-init"),
                errorCode: cc11001100_hook("errorCode", e.error_code, "object-key-init"),
                errorMsg: cc11001100_hook("errorMsg", e.data, "object-key-init")
              })) : KgUser.GetMsg(o, {
                status: cc11001100_hook("status", e.status, "object-key-init"),
                errorCode: cc11001100_hook("errorCode", e.error_code, "object-key-init"),
                errorMsg: cc11001100_hook("errorMsg", e.data, "object-key-init")
              });
            }, [{
              key: cc11001100_hook("key", "x-router", "object-key-init"),
              value: cc11001100_hook("value", "loginservice.kugou.com", "object-key-init")
            }]);
          }
        });
      });
    },
    objToParamStr: function (t) {
      var r = cc11001100_hook("r", "", "var-init");
      return Object.keys(t).forEach(function (e) {
        r += cc11001100_hook("r", "" == r ? e + "=" + t[e] : "&" + e + "=" + t[e], "assign");
      }), r;
    },
    getClientType: function () {
      return window.external && window.external.superCall || navigator.userAgent.match(/kugouandroid/gi) ? "KG_ANDROID" : window.navigator.userAgent.match(/KGBrowser/gi) ? "KG_IOS" : /(iPhone|iPad|iPod|iOS)/i.test(window.navigator.userAgent) ? "IOS" : /(Android)/i.test(window.navigator.userAgent) ? "ANDROID" : "PC";
    },
    RegByUserName: function (e, t) {
      var r,
        i,
        n,
        o,
        s = cc11001100_hook("s", 1, "var-init"),
        a = cc11001100_hook("a", 1, "var-init"),
        g = cc11001100_hook("g", "", "var-init"),
        c = cc11001100_hook("c", "", "var-init"),
        d = cc11001100_hook("d", "", "var-init"),
        u = cc11001100_hook("u", "", "var-init");
      if (1 == KgUser.CodeAll.codetype && (e.code = cc11001100_hook("e.code", KgUser.CodeAll.cval, "assign")), KgUser.IsEmpty(e.appid) || KgUser.IsEmpty(KgUser.Trim(e.username)) || KgUser.IsEmpty(KgUser.Trim(e.password))) return KgUser.GetMsg(t, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      }), !1;
      if (KgUser.IsEmpty(KgUser.Trim(e.code)) && 2 != KgUser.CodeAll.codetype) return KgUser.GetMsg(t, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "验证码不能为空", "object-key-init")
      }), !1;
      r = cc11001100_hook("r", e.appid, "assign"), n = cc11001100_hook("n", KgUser.Trim(e.username), "assign"), o = cc11001100_hook("o", KgUser.Trim(e.password), "assign"), i = cc11001100_hook("i", KgUser.Trim(e.code), "assign"), KgUser.IsEmpty(e.expire_day) || (s = cc11001100_hook("s", e.expire_day, "assign")), void 0 !== e.sex && null != e.sex && (a = cc11001100_hook("a", e.sex, "assign")), g = cc11001100_hook("g", KgUser.IsEmpty(KgUser.Trim(e.nickname)) ? n : KgUser.Trim(e.nickname), "assign"), KgUser.IsEmpty(KgUser.Trim(e.security_email)) || (c = cc11001100_hook("c", KgUser.Trim(e.security_email), "assign")), KgUser.IsEmpty(KgUser.Trim(e.id_card)) || (d = cc11001100_hook("d", KgUser.Trim(e.id_card), "assign")), KgUser.IsEmpty(KgUser.Trim(e.truename)) || (u = cc11001100_hook("u", KgUser.Trim(e.truename), "assign"));
      var l,
        p = cc11001100_hook("p", KgUser.getPlat(r), "var-init");
      KgUser.getDfidAsyn(r, function (e) {
        l = cc11001100_hook("l", e, "assign");
        e = cc11001100_hook("e", {
          regtype: cc11001100_hook("regtype", "username", "object-key-init"),
          appid: cc11001100_hook("appid", r, "object-key-init"),
          code: cc11001100_hook("code", encodeURIComponent(i), "object-key-init"),
          expire_day: cc11001100_hook("expire_day", s, "object-key-init"),
          v: cc11001100_hook("v", 1, "object-key-init"),
          username: cc11001100_hook("username", encodeURIComponent(n), "object-key-init"),
          sex: cc11001100_hook("sex", a, "object-key-init"),
          password: cc11001100_hook("password", KgUser.Md5(o), "object-key-init"),
          nickname: cc11001100_hook("nickname", encodeURIComponent(g), "object-key-init"),
          security_email: cc11001100_hook("security_email", encodeURIComponent(c), "object-key-init"),
          id_card: cc11001100_hook("id_card", encodeURIComponent(d), "object-key-init"),
          truename: cc11001100_hook("truename", encodeURIComponent(u), "object-key-init"),
          callback: cc11001100_hook("callback", t, "object-key-init"),
          codetype: cc11001100_hook("codetype", KgUser.CodeAll.codetype, "object-key-init"),
          plat: cc11001100_hook("plat", p, "object-key-init"),
          dfid: cc11001100_hook("dfid", l, "object-key-init")
        }, "assign");
        2 == KgUser.CodeAll.codetype && void 0 !== KgUser.$C("geetest_challenge", "", "input")[0] && (e.geetest_challenge = cc11001100_hook("e.geetest_challenge", KgUser.$C("geetest_challenge", KgUser.CodeAll.codeid, "input")[0].value, "assign"), e.geetest_validate = cc11001100_hook("e.geetest_validate", KgUser.$C("geetest_validate", KgUser.CodeAll.codeid, "input")[0].value, "assign"), e.geetest_seccode = cc11001100_hook("e.geetest_seccode", KgUser.$C("geetest_seccode", KgUser.CodeAll.codeid, "input")[0].value, "assign")), KgUser.loadScript(KgUser.KgUrl.login + "v2/reg", e);
      });
    },
    RegByMobile: function (t, r) {
      window.saveTempInfoObj = cc11001100_hook("window.saveTempInfoObj", KgUser.JSON.parse(KgUser.JSON.stringify(t)), "assign");
      var i,
        n = cc11001100_hook("n", 1, "var-init"),
        o = cc11001100_hook("o", 1, "var-init"),
        s = cc11001100_hook("s", "", "var-init"),
        a = cc11001100_hook("a", "", "var-init"),
        g = cc11001100_hook("g", t.appid, "var-init"),
        c = cc11001100_hook("c", KgUser.Trim(t.mobile), "var-init"),
        d = cc11001100_hook("d", KgUser.Trim(t.code), "var-init"),
        u = cc11001100_hook("u", {}, "var-init"),
        l = cc11001100_hook("l", void 0 === t.mid ? "" : t.mid, "var-init"),
        p = cc11001100_hook("p", void 0 === t.type ? "" : t.type, "var-init"),
        f = cc11001100_hook("f", KgUser.getPlat(g), "var-init");
      KgUser.getDfidAsyn(g, function (e) {
        i = cc11001100_hook("i", e, "assign");
        e = cc11001100_hook("e", "tempCallbackName", "assign");
        if ("" == p) {
          if (KgUser.IsEmpty(KgUser.Trim(t.password))) return KgUser.GetMsg(r, {
            errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
            errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
          }), !1;
          s = cc11001100_hook("s", KgUser.Trim(t.password), "assign"), KgUser.IsEmpty(t.expire_day) || (n = cc11001100_hook("n", t.expire_day, "assign")), void 0 !== t.sex && null != t.sex && (o = cc11001100_hook("o", t.sex, "assign")), a = cc11001100_hook("a", KgUser.IsEmpty(KgUser.Trim(t.nickname)) ? c : KgUser.Trim(t.nickname), "assign"), u = cc11001100_hook("u", {
            regtype: cc11001100_hook("regtype", "mobile", "object-key-init"),
            appid: cc11001100_hook("appid", g, "object-key-init"),
            code: cc11001100_hook("code", encodeURIComponent(d), "object-key-init"),
            expire_day: cc11001100_hook("expire_day", n, "object-key-init"),
            mobile: cc11001100_hook("mobile", encodeURIComponent(c), "object-key-init"),
            sex: cc11001100_hook("sex", o, "object-key-init"),
            password: cc11001100_hook("password", KgUser.Md5(s), "object-key-init"),
            nickname: cc11001100_hook("nickname", encodeURIComponent(a), "object-key-init"),
            error: cc11001100_hook("error", t.error, "object-key-init"),
            callback: cc11001100_hook("callback", e, "object-key-init"),
            mid: cc11001100_hook("mid", l, "object-key-init"),
            plat: cc11001100_hook("plat", f, "object-key-init"),
            dfid: cc11001100_hook("dfid", i, "object-key-init")
          }, "assign");
        } else u = cc11001100_hook("u", {
          regtype: cc11001100_hook("regtype", "mobile", "object-key-init"),
          appid: cc11001100_hook("appid", g, "object-key-init"),
          code: cc11001100_hook("code", encodeURIComponent(d), "object-key-init"),
          mobile: cc11001100_hook("mobile", encodeURIComponent(c), "object-key-init"),
          callback: cc11001100_hook("callback", e, "object-key-init"),
          error: cc11001100_hook("error", t.error, "object-key-init"),
          type: cc11001100_hook("type", p, "object-key-init"),
          mid: cc11001100_hook("mid", l, "object-key-init"),
          plat: cc11001100_hook("plat", f, "object-key-init"),
          dfid: cc11001100_hook("dfid", i, "object-key-init")
        }, "assign");
        window.tempCallbackName = cc11001100_hook("window.tempCallbackName", function (e) {
          20028 == e.errorCode ? 1001 == g ? KgUser.antiBrushPCCLient({
            eventid: cc11001100_hook("eventid", e.eventid, "object-key-init"),
            userid: cc11001100_hook("userid", 0, "object-key-init"),
            appid: cc11001100_hook("appid", 1001, "object-key-init"),
            mid: cc11001100_hook("mid", e.mid, "object-key-init"),
            url: cc11001100_hook("url", window.location.href, "object-key-init"),
            callback: function (e) {
              1 == e.status && KgUser.RegByMobile(window.saveTempInfoObj, r);
            }
          }) : 1058 == g ? (localStorage.setItem("_RIS_PH", c), localStorage.setItem("_RIS_PS", s), KgUser.antiBrushH5({
            eventid: cc11001100_hook("eventid", e.eventid, "object-key-init"),
            userid: cc11001100_hook("userid", 0, "object-key-init"),
            appid: cc11001100_hook("appid", 1058, "object-key-init"),
            mid: cc11001100_hook("mid", e.mid, "object-key-init"),
            url: cc11001100_hook("url", window.location.href, "object-key-init"),
            callback: function (e) {
              e.status;
            }
          })) : KgUser.antiBrush({
            eventid: cc11001100_hook("eventid", e.eventid, "object-key-init"),
            userid: cc11001100_hook("userid", 0, "object-key-init"),
            appid: cc11001100_hook("appid", g, "object-key-init"),
            mid: cc11001100_hook("mid", e.mid, "object-key-init"),
            url: cc11001100_hook("url", window.location.href, "object-key-init"),
            callback: function (e) {
              1 == e.status && KgUser.RegByMobile(window.saveTempInfoObj, r);
            }
          }) : KgUser.GetMsg(r, e);
        }, "assign"), KgUser.loadScript(KgUser.KgUrl.login + "v2/reg", u);
      });
    },
    RegByEmail: function (e, r) {
      var i,
        n,
        o,
        s,
        a = cc11001100_hook("a", 1, "var-init"),
        g = cc11001100_hook("g", 1, "var-init"),
        c = cc11001100_hook("c", "", "var-init");
      if (1 == KgUser.CodeAll.codetype && (e.code = cc11001100_hook("e.code", KgUser.CodeAll.cval, "assign")), KgUser.IsEmpty(e.appid) || KgUser.IsEmpty(KgUser.Trim(e.email)) || KgUser.IsEmpty(KgUser.Trim(e.password))) return KgUser.GetMsg(r, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      }), !1;
      if (KgUser.IsEmpty(KgUser.Trim(e.code)) && 2 != KgUser.CodeAll.codetype) return KgUser.GetMsg(r, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "验证码不能为空", "object-key-init")
      }), !1;
      i = cc11001100_hook("i", e.appid, "assign"), o = cc11001100_hook("o", KgUser.Trim(e.email), "assign"), s = cc11001100_hook("s", KgUser.Trim(e.password), "assign"), n = cc11001100_hook("n", KgUser.Trim(e.code), "assign"), KgUser.IsEmpty(e.expire_day) || (a = cc11001100_hook("a", e.expire_day, "assign")), void 0 !== e.sex && null != e.sex && (g = cc11001100_hook("g", e.sex, "assign"));
      var c = cc11001100_hook("c", KgUser.IsEmpty(KgUser.Trim(e.nickname)) ? o : KgUser.Trim(e.nickname), "var-init"),
        d = cc11001100_hook("d", KgUser.getPlat(i), "var-init");
      KgUser.getDfidAsyn(i, function (e) {
        var t = cc11001100_hook("t", {
          regtype: cc11001100_hook("regtype", "email", "object-key-init"),
          appid: cc11001100_hook("appid", i, "object-key-init"),
          code: cc11001100_hook("code", encodeURIComponent(n), "object-key-init"),
          expire_day: cc11001100_hook("expire_day", a, "object-key-init"),
          email: cc11001100_hook("email", encodeURIComponent(o), "object-key-init"),
          sex: cc11001100_hook("sex", g, "object-key-init"),
          password: cc11001100_hook("password", KgUser.Md5(s), "object-key-init"),
          nickname: cc11001100_hook("nickname", encodeURIComponent(c), "object-key-init"),
          callback: cc11001100_hook("callback", r, "object-key-init"),
          codetype: cc11001100_hook("codetype", KgUser.CodeAll.codetype, "object-key-init"),
          plat: cc11001100_hook("plat", d, "object-key-init"),
          dfid: cc11001100_hook("dfid", "", "object-key-init")
        }, "var-init");
        2 == KgUser.CodeAll.codetype && void 0 !== KgUser.$C("geetest_challenge", "", "input")[0] && (t.geetest_challenge = cc11001100_hook("t.geetest_challenge", KgUser.$C("geetest_challenge", KgUser.CodeAll.codeid, "input")[0].value, "assign"), t.geetest_validate = cc11001100_hook("t.geetest_validate", KgUser.$C("geetest_validate", KgUser.CodeAll.codeid, "input")[0].value, "assign"), t.geetest_seccode = cc11001100_hook("t.geetest_seccode", KgUser.$C("geetest_seccode", KgUser.CodeAll.codeid, "input")[0].value, "assign")), KgUser.loadScript(KgUser.KgUrl.login + "v2/reg/", t);
      });
    },
    CheckPwd: function (e, t) {
      var r,
        i,
        n = cc11001100_hook("n", "", "var-init");
      if (KgUser.IsEmpty(e.appid) || KgUser.IsEmpty(KgUser.Trim(e.password))) return KgUser.GetMsg(t, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      }), !1;
      r = cc11001100_hook("r", e.appid, "assign"), i = cc11001100_hook("i", KgUser.Trim(e.password), "assign"), KgUser.IsEmpty(KgUser.Trim(e.username)) || (n = cc11001100_hook("n", KgUser.Trim(e.username), "assign"));
      e = cc11001100_hook("e", {
        appid: cc11001100_hook("appid", r, "object-key-init"),
        str: cc11001100_hook("str", KgUser.Md5(i), "object-key-init"),
        username: cc11001100_hook("username", encodeURIComponent(n), "object-key-init"),
        callback: cc11001100_hook("callback", t, "object-key-init")
      }, "assign");
      KgUser.loadScript(KgUser.KgUrl.user + "check_str/", e);
    },
    CheckReg: function (e, t) {
      setTimeout(function () {
        KgUser.GetMsg(t, {
          data: cc11001100_hook("data", 0, "object-key-init")
        });
      }, 200);
    },
    ThirdCode: function (e, t) {
      var r, i, o, s, a;
      KgUser.IsEmpty(KgUser.Trim(e.url)) || KgUser.IsEmpty(KgUser.Trim(e.id)) || (r = cc11001100_hook("r", e.url, "assign"), i = cc11001100_hook("i", e.id, "assign"), window.gt_thirdcode = cc11001100_hook("window.gt_thirdcode", (o = cc11001100_hook("o", window, "assign"), s = cc11001100_hook("s", document, "assign"), a = cc11001100_hook("a", s.getElementsByTagName("head")[0], "assign"), function (r, e) {
        r.protocol = cc11001100_hook("r.protocol", r.https ? "https://" : "http://", "assign");
        function i() {
          e(new o.Geetest(r));
        }
        function t() {
          var e = cc11001100_hook("e", s.createElement("script"), "var-init"),
            t = cc11001100_hook("t", (e.id = cc11001100_hook("e.id", "gt_lib", "assign"), e.src = cc11001100_hook("e.src", r.protocol + "static.geetest.com/static/js/geetest.0.0.0.js", "assign"), e.charset = cc11001100_hook("e.charset", "UTF-8", "assign"), e.type = cc11001100_hook("e.type", "text/javascript", "assign"), a.appendChild(e), !1), "var-init");
          e.onload = cc11001100_hook("e.onload", e.onreadystatechange = cc11001100_hook("e.onreadystatechange", function () {
            t || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i(), t = cc11001100_hook("t", !0, "assign"));
          }, "assign"), "assign");
        }
        var n;
        o.geetest_callback = cc11001100_hook("o.geetest_callback", function () {
          i();
        }, "assign"), r && (r.offline ? t() : o.Geetest ? i() : ((n = cc11001100_hook("n", s.createElement("script"), "assign")).onerror = cc11001100_hook("(n = s.createElement(\"script\")).onerror", function () {
          r.offline = cc11001100_hook("r.offline", !0, "assign"), t();
        }, "assign"), n.src = cc11001100_hook("n.src", r.protocol + "api.geetest.com/get.php?callback=geetest_callback", "assign"), a.appendChild(n)));
      }), "assign"), KgUser.IsEmpty(KgUser.Trim(i)) || (KgUser.loadScript(r, ""), window.gt_succCallback = cc11001100_hook("window.gt_succCallback", function (e) {
        void 0 !== KgUser.$(i) && (KgUser.$(i).innerHTML = cc11001100_hook("KgUser.$(i).innerHTML", "", "assign")), e.appendTo("#" + i), e.onSuccess(t);
      }, "assign")));
    },
    CodeAll: {
      kg_sudoku_anslist: cc11001100_hook("kg_sudoku_anslist", ["", "", "", ""], "object-key-init"),
      kg_sudoku_flag: cc11001100_hook("kg_sudoku_flag", 0, "object-key-init"),
      codetype: cc11001100_hook("codetype", 0, "object-key-init"),
      cval: cc11001100_hook("cval", "", "object-key-init"),
      appid: cc11001100_hook("appid", 0, "object-key-init"),
      codeid: cc11001100_hook("codeid", "", "object-key-init")
    },
    SudokuCode: function (e, d) {
      if (!KgUser.IsEmpty(KgUser.Trim(e.url)) && !KgUser.IsEmpty(KgUser.Trim(e.id))) {
        KgUser.CodeAll.cval = cc11001100_hook("KgUser.CodeAll.cval", "", "assign"), KgUser.CodeAll.kg_sudoku_anslist = cc11001100_hook("KgUser.CodeAll.kg_sudoku_anslist", ["", "", "", ""], "assign"), KgUser.CodeAll.kg_sudoku_flag = cc11001100_hook("KgUser.CodeAll.kg_sudoku_flag", 0, "assign");
        for (var t = cc11001100_hook("t", document.createElement("link"), "var-init"), r = cc11001100_hook("r", document.head || document.getElementsByTagName("head")[0], "var-init"), r = cc11001100_hook("r", (t.type = cc11001100_hook("t.type", "text/css", "assign"), t.rel = cc11001100_hook("t.rel", "stylesheet", "assign"), t.href = cc11001100_hook("t.href", KgUser.KgUrl.verify + "v1/static/css/sudoku.css", "assign"), t.id = cc11001100_hook("t.id", "kg_sudoku_css", "assign"), void 0 !== document.getElementById("kg_sudoku_css") && null != document.getElementById("kg_sudoku_css") || r.appendChild(t), e.url), "var-init"), t = cc11001100_hook("t", e.id, "var-init"), u = cc11001100_hook("u", e.appid, "var-init"), e = cc11001100_hook("e", (KgUser.CodeAll.appid = cc11001100_hook("KgUser.CodeAll.appid", u, "assign"), ".kg_sudoku_val_add b,.kg_sudoku_input_show span,.kg_sudoku_val_input a b{background:url(" + r + ") no-repeat  -500px -500px;} .kg_sudoku_input_show span{background-position:0 0;}"), "var-init"), e = cc11001100_hook("e", (KgUser.LoadCss(e, "kg_sudoku_style"), ['<div id="kg_sudoku_com" class="kg_sudoku_com">', '<div class="kg_sudoku_val_add kg_sudoku_clearfix" id="kg_sudoku_val_add">', "<b></b>", "<b></b>", "<b></b>", "<b></b>", '<b class="kg_sudoku_delete" title="清除" onclick="KgUser.DelSudokuCode(1);"></b>', '<div id="kg_sudoku_msg" class="kg_sudoku_msg"></div>', "</div>", '<div class="kg_sudoku_input_show"><span></span><a onclick="KgUser.ChangeSudokuCode(\'' + r + "',1)\">看不清,换一张?</a></div>", '<div class="kg_sudoku_ation">点击框内文字输入上图中对应<i>汉字</i></div>', '<div class="kg_sudoku_val_input kg_sudoku_clearfix" id="kg_sudoku_val_input">', '<a href="javascript:;"><b id="kg_sudoku_v_0"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_1"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_2"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_3"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_4"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_5"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_6"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_7"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_8"></b></a>', "</div>", "</div>"].join("")), "var-init"), r = cc11001100_hook("r", (document.getElementById(t).innerHTML = cc11001100_hook("document.getElementById(t).innerHTML", e, "assign"), "kg_sudoku_val_input"), "var-init"), i = cc11001100_hook("i", document.getElementById(r).getElementsByTagName("b"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < i.length; n++) i[n].onclick = cc11001100_hook("i[n].onclick", function () {
          c_val = cc11001100_hook("c_val", parseInt(this.id.replace("kg_sudoku_v_", "")) + 1, "assign"), i = cc11001100_hook("i", this.id, "assign"), e = cc11001100_hook("e", "backgroundPosition", "assign"), i = cc11001100_hook("i", document.getElementById(i), "assign"), r = cc11001100_hook("r", document.documentMode, "assign");
          for (var e, t, r = cc11001100_hook("r", ("backgroundPosition" == e && 10 == r ? i.currentStyle.backgroundPositionX + " " + i.currentStyle.backgroundPositionY : i.currentStyle ? i.currentStyle[e] : window.getComputedStyle ? (propprop = cc11001100_hook("propprop", e.replace(/([A-Z])/g, "-$1"), "assign"), propprop = cc11001100_hook("propprop", e.toLowerCase(), "assign"), document.defaultView.getComputedStyle(i, null)[e]) : void 0).split(" "), "var-init"), i = cc11001100_hook("i", "", "var-init"), n = cc11001100_hook("n", (t = cc11001100_hook("t", KgUser.IsEmpty(r[0]) ? t : parseInt(r[0].replace("px")) - 3, "assign")) + "px " + (i = cc11001100_hook("i", KgUser.IsEmpty(r[1]) ? i : parseInt(r[1].replace("px")) - 5, "assign")) + "px", "var-init"), o = cc11001100_hook("o", c_val, "var-init"), s = cc11001100_hook("s", KgUser.CodeAll.kg_sudoku_anslist, "var-init"), a = cc11001100_hook("a", KgUser.CodeAll.kg_sudoku_flag, "var-init"), g = cc11001100_hook("g", document.getElementById("kg_sudoku_val_add").getElementsByTagName("b"), "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < s.length; c++) if ("" == s[c]) {
            s[c] = cc11001100_hook("s[c]", o, "assign"), g[c].style.cssText = cc11001100_hook("g[c].style.cssText", "background-position:" + n, "assign"), a = cc11001100_hook("a", c, "assign");
            break;
          }
          3 == a && (KgUser.CodeAll.cval = cc11001100_hook("KgUser.CodeAll.cval", s.join(""), "assign"), setTimeout(function () {
            KgUser.CheckCode({
              appid: cc11001100_hook("appid", u, "object-key-init"),
              code: cc11001100_hook("code", KgUser.CodeAll.cval, "object-key-init"),
              type: cc11001100_hook("type", "RegCheckCode", "object-key-init"),
              blurCallback: cc11001100_hook("blurCallback", d, "object-key-init")
            }, "KgUser.CheckSudoCode");
          }, 100));
        }, "assign");
      }
    },
    ChangeSudokuCode: function (t, r) {
      setTimeout(function () {
        var e = cc11001100_hook("e", ".kg_sudoku_val_add b,.kg_sudoku_input_show span,.kg_sudoku_val_input a b{background:url(" + t + "&nt=" + new Date().getTime() + ") no-repeat -500px -500px;}  .kg_sudoku_input_show span{background-position:0 0;}", "var-init");
        KgUser.LoadCss(e, "kg_sudoku_style"), KgUser.DelSudokuCode(r);
      }, 200);
    },
    DelSudokuCode: function (e) {
      KgUser.CodeAll.cval = cc11001100_hook("KgUser.CodeAll.cval", "", "assign"), KgUser.CodeAll.kg_sudoku_flag = cc11001100_hook("KgUser.CodeAll.kg_sudoku_flag", 0, "assign"), KgUser.CodeAll.kg_sudoku_anslist = cc11001100_hook("KgUser.CodeAll.kg_sudoku_anslist", ["", "", "", ""], "assign");
      for (var t = cc11001100_hook("t", document.getElementById("kg_sudoku_val_add").getElementsByTagName("b"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) t[r].style.cssText = cc11001100_hook("t[r].style.cssText", "", "assign");
      1 == e && (document.getElementById("kg_sudoku_msg").className = cc11001100_hook("document.getElementById(\"kg_sudoku_msg\").className", "kg_sudoku_msg", "assign"));
    },
    CheckSudoCode: function (e) {
      var t = cc11001100_hook("t", "", "var-init");
      KgUser.IsEmpty(e.errorCode) ? (t = cc11001100_hook("t", "kg_sudoku_msg success", "assign"), document.getElementById("kg_sudoku_msg").className = cc11001100_hook("document.getElementById(\"kg_sudoku_msg\").className", t, "assign")) : (t = cc11001100_hook("t", "kg_sudoku_msg fail", "assign"), document.getElementById("kg_sudoku_msg").className = cc11001100_hook("document.getElementById(\"kg_sudoku_msg\").className", t, "assign"), e = cc11001100_hook("e", KgUser.KgUrl.verify + "v1/get_img_code?type=RegCheckCode&appid=" + KgUser.CodeAll.appid + "&codetype=1&t=" + new Date().getTime(), "assign"), KgUser.ChangeSudokuCode(e, 0));
    },
    CheckCode: function (e, t) {
      var r,
        i,
        n = cc11001100_hook("n", parseInt(new Date().getTime() / 1e3), "var-init"),
        o = cc11001100_hook("o", "LoginCheckCode", "var-init"),
        s = cc11001100_hook("s", "", "var-init");
      if (KgUser.IsEmpty(e.appid)) return KgUser.GetMsg(t, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      }), !1;
      KgUser.IsEmpty(KgUser.Trim(e.code)) || (i = cc11001100_hook("i", KgUser.Trim(e.code), "assign"), r = cc11001100_hook("r", e.appid, "assign"), KgUser.IsEmpty(KgUser.Trim(e.type)) || (o = cc11001100_hook("o", KgUser.Trim(e.type), "assign")), KgUser.IsEmpty(e.blurCallback) || (s = cc11001100_hook("s", e.blurCallback, "assign")), e = cc11001100_hook("e", {
        appid: cc11001100_hook("appid", r, "object-key-init"),
        ct: cc11001100_hook("ct", n, "object-key-init"),
        code: cc11001100_hook("code", encodeURIComponent(i), "object-key-init"),
        type: cc11001100_hook("type", encodeURIComponent(o), "object-key-init"),
        callback: cc11001100_hook("callback", t, "object-key-init")
      }, "assign"), KgUser.loadScript(KgUser.KgUrl.login + "v1/check_img_code", e, s));
    },
    Md5: function (e) {
      var o = cc11001100_hook("o", 0, "var-init"),
        s = cc11001100_hook("s", 8, "var-init");
      function a(e, t, r, i, n, o) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        return m((t = cc11001100_hook("t", m(m(t, e), m(i, o)), "assign")) << n | t >>> 32 - n, r);
      }
      function u(e, t, r, i, n, o, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        return a(t & r | ~t & i, e, t, n, o, s);
      }
      function l(e, t, r, i, n, o, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        return a(t & i | r & ~i, e, t, n, o, s);
      }
      function p(e, t, r, i, n, o, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        return a(t ^ r ^ i, e, t, n, o, s);
      }
      function f(e, t, r, i, n, o, s) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        return a(r ^ (t | ~i), e, t, n, o, s);
      }
      function m(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        var r = cc11001100_hook("r", (65535 & e) + (65535 & t), "var-init");
        return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r;
      }
      return e = cc11001100_hook("e", e ? function (e) {
        for (var t = cc11001100_hook("t", function (e, t) {
            e[t >> 5] |= cc11001100_hook("e[t >> 5]", 128 << t % 32, "assign"), e[14 + (t + 64 >>> 9 << 4)] = cc11001100_hook("e[14 + (t + 64 >>> 9 << 4)]", t, "assign");
            for (var r = cc11001100_hook("r", 1732584193, "var-init"), i = cc11001100_hook("i", -271733879, "var-init"), n = cc11001100_hook("n", -1732584194, "var-init"), o = cc11001100_hook("o", 271733878, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < e.length; s += cc11001100_hook("s", 16, "assign")) {
              var a = cc11001100_hook("a", r, "var-init"),
                g = cc11001100_hook("g", i, "var-init"),
                c = cc11001100_hook("c", n, "var-init"),
                d = cc11001100_hook("d", o, "var-init");
              r = cc11001100_hook("r", u(r, i, n, o, e[s + 0], 7, -680876936), "assign"), o = cc11001100_hook("o", u(o, r, i, n, e[s + 1], 12, -389564586), "assign"), n = cc11001100_hook("n", u(n, o, r, i, e[s + 2], 17, 606105819), "assign"), i = cc11001100_hook("i", u(i, n, o, r, e[s + 3], 22, -1044525330), "assign"), r = cc11001100_hook("r", u(r, i, n, o, e[s + 4], 7, -176418897), "assign"), o = cc11001100_hook("o", u(o, r, i, n, e[s + 5], 12, 1200080426), "assign"), n = cc11001100_hook("n", u(n, o, r, i, e[s + 6], 17, -1473231341), "assign"), i = cc11001100_hook("i", u(i, n, o, r, e[s + 7], 22, -45705983), "assign"), r = cc11001100_hook("r", u(r, i, n, o, e[s + 8], 7, 1770035416), "assign"), o = cc11001100_hook("o", u(o, r, i, n, e[s + 9], 12, -1958414417), "assign"), n = cc11001100_hook("n", u(n, o, r, i, e[s + 10], 17, -42063), "assign"), i = cc11001100_hook("i", u(i, n, o, r, e[s + 11], 22, -1990404162), "assign"), r = cc11001100_hook("r", u(r, i, n, o, e[s + 12], 7, 1804603682), "assign"), o = cc11001100_hook("o", u(o, r, i, n, e[s + 13], 12, -40341101), "assign"), n = cc11001100_hook("n", u(n, o, r, i, e[s + 14], 17, -1502002290), "assign"), i = cc11001100_hook("i", u(i, n, o, r, e[s + 15], 22, 1236535329), "assign"), r = cc11001100_hook("r", l(r, i, n, o, e[s + 1], 5, -165796510), "assign"), o = cc11001100_hook("o", l(o, r, i, n, e[s + 6], 9, -1069501632), "assign"), n = cc11001100_hook("n", l(n, o, r, i, e[s + 11], 14, 643717713), "assign"), i = cc11001100_hook("i", l(i, n, o, r, e[s + 0], 20, -373897302), "assign"), r = cc11001100_hook("r", l(r, i, n, o, e[s + 5], 5, -701558691), "assign"), o = cc11001100_hook("o", l(o, r, i, n, e[s + 10], 9, 38016083), "assign"), n = cc11001100_hook("n", l(n, o, r, i, e[s + 15], 14, -660478335), "assign"), i = cc11001100_hook("i", l(i, n, o, r, e[s + 4], 20, -405537848), "assign"), r = cc11001100_hook("r", l(r, i, n, o, e[s + 9], 5, 568446438), "assign"), o = cc11001100_hook("o", l(o, r, i, n, e[s + 14], 9, -1019803690), "assign"), n = cc11001100_hook("n", l(n, o, r, i, e[s + 3], 14, -187363961), "assign"), i = cc11001100_hook("i", l(i, n, o, r, e[s + 8], 20, 1163531501), "assign"), r = cc11001100_hook("r", l(r, i, n, o, e[s + 13], 5, -1444681467), "assign"), o = cc11001100_hook("o", l(o, r, i, n, e[s + 2], 9, -51403784), "assign"), n = cc11001100_hook("n", l(n, o, r, i, e[s + 7], 14, 1735328473), "assign"), i = cc11001100_hook("i", l(i, n, o, r, e[s + 12], 20, -1926607734), "assign"), r = cc11001100_hook("r", p(r, i, n, o, e[s + 5], 4, -378558), "assign"), o = cc11001100_hook("o", p(o, r, i, n, e[s + 8], 11, -2022574463), "assign"), n = cc11001100_hook("n", p(n, o, r, i, e[s + 11], 16, 1839030562), "assign"), i = cc11001100_hook("i", p(i, n, o, r, e[s + 14], 23, -35309556), "assign"), r = cc11001100_hook("r", p(r, i, n, o, e[s + 1], 4, -1530992060), "assign"), o = cc11001100_hook("o", p(o, r, i, n, e[s + 4], 11, 1272893353), "assign"), n = cc11001100_hook("n", p(n, o, r, i, e[s + 7], 16, -155497632), "assign"), i = cc11001100_hook("i", p(i, n, o, r, e[s + 10], 23, -1094730640), "assign"), r = cc11001100_hook("r", p(r, i, n, o, e[s + 13], 4, 681279174), "assign"), o = cc11001100_hook("o", p(o, r, i, n, e[s + 0], 11, -358537222), "assign"), n = cc11001100_hook("n", p(n, o, r, i, e[s + 3], 16, -722521979), "assign"), i = cc11001100_hook("i", p(i, n, o, r, e[s + 6], 23, 76029189), "assign"), r = cc11001100_hook("r", p(r, i, n, o, e[s + 9], 4, -640364487), "assign"), o = cc11001100_hook("o", p(o, r, i, n, e[s + 12], 11, -421815835), "assign"), n = cc11001100_hook("n", p(n, o, r, i, e[s + 15], 16, 530742520), "assign"), i = cc11001100_hook("i", p(i, n, o, r, e[s + 2], 23, -995338651), "assign"), r = cc11001100_hook("r", f(r, i, n, o, e[s + 0], 6, -198630844), "assign"), o = cc11001100_hook("o", f(o, r, i, n, e[s + 7], 10, 1126891415), "assign"), n = cc11001100_hook("n", f(n, o, r, i, e[s + 14], 15, -1416354905), "assign"), i = cc11001100_hook("i", f(i, n, o, r, e[s + 5], 21, -57434055), "assign"), r = cc11001100_hook("r", f(r, i, n, o, e[s + 12], 6, 1700485571), "assign"), o = cc11001100_hook("o", f(o, r, i, n, e[s + 3], 10, -1894986606), "assign"), n = cc11001100_hook("n", f(n, o, r, i, e[s + 10], 15, -1051523), "assign"), i = cc11001100_hook("i", f(i, n, o, r, e[s + 1], 21, -2054922799), "assign"), r = cc11001100_hook("r", f(r, i, n, o, e[s + 8], 6, 1873313359), "assign"), o = cc11001100_hook("o", f(o, r, i, n, e[s + 15], 10, -30611744), "assign"), n = cc11001100_hook("n", f(n, o, r, i, e[s + 6], 15, -1560198380), "assign"), i = cc11001100_hook("i", f(i, n, o, r, e[s + 13], 21, 1309151649), "assign"), r = cc11001100_hook("r", f(r, i, n, o, e[s + 4], 6, -145523070), "assign"), o = cc11001100_hook("o", f(o, r, i, n, e[s + 11], 10, -1120210379), "assign"), n = cc11001100_hook("n", f(n, o, r, i, e[s + 2], 15, 718787259), "assign"), i = cc11001100_hook("i", f(i, n, o, r, e[s + 9], 21, -343485551), "assign"), r = cc11001100_hook("r", m(r, a), "assign"), i = cc11001100_hook("i", m(i, g), "assign"), n = cc11001100_hook("n", m(n, c), "assign"), o = cc11001100_hook("o", m(o, d), "assign");
            }
            return Array(r, i, n, o);
          }(function (e) {
            for (var t = cc11001100_hook("t", Array(), "var-init"), r = cc11001100_hook("r", (1 << s) - 1, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length * s; i += cc11001100_hook("i", s, "assign")) t[i >> 5] |= cc11001100_hook("t[i >> 5]", (e.charCodeAt(i / s) & r) << i % 32, "assign");
            return t;
          }(e), e.length * s), "var-init"), r = cc11001100_hook("r", o ? "0123456789ABCDEF" : "0123456789abcdef", "var-init"), i = cc11001100_hook("i", "", "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < 4 * t.length; n++) i += cc11001100_hook("i", r.charAt(t[n >> 2] >> n % 4 * 8 + 4 & 15) + r.charAt(t[n >> 2] >> n % 4 * 8 & 15), "assign");
        return i;
      }(e) : "", "assign");
    },
    Trim: function (e) {
      return "string" == typeof e ? e.replace(/^\s+|\s+$/g, "") : e;
    },
    IsEmpty: function (e) {
      return void 0 === e || null == e || "" == e;
    },
    GetBytes: function () {
      for (var e = cc11001100_hook("e", 0, "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < this.length; t++) 256 < this.charCodeAt(t) ? e += cc11001100_hook("e", 2, "assign") : e += cc11001100_hook("e", 1, "assign");
      return e;
    },
    Intercept: function (e, t) {
      var r = cc11001100_hook("r", this, "var-init");
      if ((r = cc11001100_hook("r", r.trim(), "assign")).getBytes() < e) return r;
      var i = cc11001100_hook("i", 0, "var-init"),
        n = cc11001100_hook("n", 0, "var-init");
      0 < t.length && (e -= cc11001100_hook("e", t.length, "assign"));
      for (var o = cc11001100_hook("o", 0, "var-init"); o < r.length && (256 < this.charCodeAt(o) ? i += cc11001100_hook("i", 2, "assign") : i += cc11001100_hook("i", 1, "assign"), !(e < i)); o++) n++;
      return r.substr(0, n) + t;
    },
    Guid: function () {
      function e() {
        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
      }
      return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
    },
    CheckAutoLogin: function () {
      KgUser.Cookie.read("KuGoo", "KugooID");
      var e = cc11001100_hook("e", KgUser.Cookie.read("KuGoo", "ct"), "var-init");
      86400 < parseInt(new Date().getTime() / 1e3) - e && KgUser.AutoLogin("");
    },
    LoginQRCodeImgObject: cc11001100_hook("LoginQRCodeImgObject", null, "object-key-init"),
    GetQRCode: function (n, e, o, s, a, g, c, d, u) {
      var e = cc11001100_hook("e", {
          appid: cc11001100_hook("appid", n, "object-key-init"),
          uuid: cc11001100_hook("uuid", KgUser.getKgMid(), "object-key-init"),
          clientver: cc11001100_hook("clientver", e, "object-key-init"),
          clienttime: cc11001100_hook("clienttime", parseInt(new Date().getTime() / 1e3), "object-key-init"),
          mid: cc11001100_hook("mid", KgUser.getKgMid(), "object-key-init"),
          type: cc11001100_hook("type", 1, "object-key-init")
        }, "var-init"),
        t = cc11001100_hook("t", KgUser.signatureParam(e), "var-init");
      KgUser.sentGetRequest(KgUser.KgUrl.login + "v1/qrcode", "appid=" + e.appid + "&clientver=" + e.clientver + "&clienttime=" + e.clienttime + "&uuid=" + e.uuid + "&mid=" + e.mid + "&type=" + e.type + "&signature=" + t, function (t) {
        var r = cc11001100_hook("r", "", "var-init");
        try {
          r = cc11001100_hook("r", KgUser.JSON.parse(t), "assign");
        } catch (e) {
          r = cc11001100_hook("r", t, "assign");
        }
        var e,
          i = cc11001100_hook("i", {}, "var-init");
        1 != r.status || KgUser.IsEmpty(r.data.qrcode) ? (i.status = cc11001100_hook("i.status", 0, "assign"), i.data = cc11001100_hook("i.data", {
          appid: cc11001100_hook("appid", n, "object-key-init"),
          qrcode: cc11001100_hook("qrcode", null, "object-key-init")
        }, "assign"), i.error_code = cc11001100_hook("i.error_code", r.error_code, "assign"), d && d(KgUser.JSON.stringify(i))) : (KgUser.QRCodeState = cc11001100_hook("KgUser.QRCodeState", 1, "assign"), e = cc11001100_hook("e", KgUser.KgUrl.qrcodeH5 + "?qrcode=" + r.data.qrcode + "&appid=" + n, "assign"), u && u.name && (e = cc11001100_hook("e", e + "&name=" + u.name, "assign")), KgUser.loadScript("https://staticssl.kugou.com/common/js/min/login/qrcode.min.js", null, function () {
          setTimeout(function () {
            null == KgUser.LoginQRCodeImgObject ? KgUser.LoginQRCodeImgObject = cc11001100_hook("KgUser.LoginQRCodeImgObject", new QRCode(o, {
              text: cc11001100_hook("text", e, "object-key-init"),
              width: cc11001100_hook("width", s, "object-key-init"),
              height: cc11001100_hook("height", a, "object-key-init"),
              colorDark: cc11001100_hook("colorDark", g, "object-key-init"),
              colorLight: cc11001100_hook("colorLight", c, "object-key-init"),
              correctLevel: cc11001100_hook("correctLevel", QRCode.CorrectLevel.L, "object-key-init")
            }), "assign") : (KgUser.LoginQRCodeImgObject.clear(), KgUser.LoginQRCodeImgObject.makeCode(e)), o.removeAttribute("title"), i.status = cc11001100_hook("i.status", 1, "assign"), i.data = cc11001100_hook("i.data", {
              appid: cc11001100_hook("appid", n, "object-key-init"),
              qrcode: cc11001100_hook("qrcode", r.data.qrcode, "object-key-init")
            }, "assign"), i.error_code = cc11001100_hook("i.error_code", 0, "assign"), d && d(KgUser.JSON.stringify(i));
          }, 100);
        }));
      });
    },
    GetQRCodeStateTimer: cc11001100_hook("GetQRCodeStateTimer", null, "object-key-init"),
    GetQRCodeStatePollingTime: cc11001100_hook("GetQRCodeStatePollingTime", 0, "object-key-init"),
    QRCodeState: cc11001100_hook("QRCodeState", 1, "object-key-init"),
    GetQRCodeState: function (r, s, a, g) {
      function c(i, n, o) {
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        var e;
        4 == (e = cc11001100_hook("e", KgUser.QRCodeState, "assign")) || 0 == e ? clearTimeout(KgUser.GetQRCodeStateTimer) : (e = cc11001100_hook("e", 1e3, "assign"), 60 < KgUser.GetQRCodeStatePollingTime && (e = cc11001100_hook("e", 5e3, "assign")), KgUser.GetQRCodeStateTimer = cc11001100_hook("KgUser.GetQRCodeStateTimer", setTimeout(function () {
          KgUser.GetQRCodeStatePollingTime++;
          var e = cc11001100_hook("e", {
              appid: cc11001100_hook("appid", r, "object-key-init"),
              uuid: cc11001100_hook("uuid", n, "object-key-init"),
              clientver: cc11001100_hook("clientver", s, "object-key-init"),
              clienttime: cc11001100_hook("clienttime", parseInt(new Date().getTime() / 1e3), "object-key-init"),
              qrcode: cc11001100_hook("qrcode", a, "object-key-init"),
              dfid: cc11001100_hook("dfid", i, "object-key-init"),
              mid: cc11001100_hook("mid", n, "object-key-init"),
              plat: cc11001100_hook("plat", o, "object-key-init")
            }, "var-init"),
            t = cc11001100_hook("t", KgUser.signatureParam(e), "var-init");
          KgUser.sentGetRequest(KgUser.KgUrl.login + "v1/get_userinfo_qrcode", "appid=" + e.appid + "&clientver=" + e.clientver + "&clienttime=" + e.clienttime + "&uuid=" + e.uuid + "&qrcode=" + e.qrcode + "&dfid=" + e.dfid + "&mid=" + e.mid + "&plat=" + e.plat + "&signature=" + t, function (t) {
            var r = cc11001100_hook("r", "", "var-init");
            try {
              r = cc11001100_hook("r", KgUser.JSON.parse(t), "assign");
            } catch (e) {
              r = cc11001100_hook("r", t, "assign");
            }
            1 == r.status && (KgUser.QRCodeState = cc11001100_hook("KgUser.QRCodeState", r.data.status, "assign"), c(i, n, o)), g && g(t);
          });
        }, e), "assign"));
      }
      var t, i, e;
      null != KgUser.GetQRCodeStateTimer && (clearTimeout(KgUser.GetQRCodeStateTimer), KgUser.GetQRCodeStatePollingTime = cc11001100_hook("KgUser.GetQRCodeStatePollingTime", 0, "assign")), 1 != (e = cc11001100_hook("e", KgUser.QRCodeState, "assign")) && 2 != e || (t = cc11001100_hook("t", KgUser.getPlat(r), "assign"), i = cc11001100_hook("i", KgUser.getKgMid(), "assign"), KgUser.getDfidAsyn(r, function (e) {
        c(e, i, t);
      }));
    },
    ClearGetQRCodeStateTimer: function () {
      clearTimeout(KgUser.GetQRCodeStateTimer);
    },
    QRCodeLogin: function (t, r, i, n) {
      var o,
        s = cc11001100_hook("s", KgUser.getPlat(t), "var-init");
      KgUser.getDfidAsyn(t, function (e) {
        o = cc11001100_hook("o", e, "assign");
        e = cc11001100_hook("e", {
          a_id: cc11001100_hook("a_id", t, "object-key-init"),
          userid: cc11001100_hook("userid", r, "object-key-init"),
          t: cc11001100_hook("t", i, "object-key-init"),
          ct: cc11001100_hook("ct", parseInt(new Date().getTime() / 1e3), "object-key-init"),
          callback: cc11001100_hook("callback", n, "object-key-init"),
          error: cc11001100_hook("error", n, "object-key-init"),
          domain: cc11001100_hook("domain", KgUser.GetDomain(), "object-key-init"),
          uuid: cc11001100_hook("uuid", KgUser.getKgMid(), "object-key-init"),
          mid: cc11001100_hook("mid", KgUser.getKgMid(), "object-key-init"),
          plat: cc11001100_hook("plat", s, "object-key-init"),
          dfid: cc11001100_hook("dfid", o, "object-key-init")
        }, "assign");
        KgUser.IsEmpty(i) || KgUser.loadScript(KgUser.KgUrl.login + "v1/autologin", e);
      });
    },
    signatureParam: function (e) {
      var t,
        r = cc11001100_hook("r", new Array(), "var-init");
      for (t in e) e.hasOwnProperty(t) && "signature" != t && r.push(e[t]);
      for (var i = cc11001100_hook("i", r.sort(), "var-init"), n = cc11001100_hook("n", "", "var-init"), o = cc11001100_hook("o", 0, "var-init"), s = cc11001100_hook("s", i.length, "var-init"); o < s; o++) n += cc11001100_hook("n", i[o], "assign");
      return n = cc11001100_hook("n", KgUser.Md5(n), "assign");
    },
    sentGetRequest: function (t, r, i) {
      var n,
        o = cc11001100_hook("o", null, "var-init"),
        s = cc11001100_hook("s", !1, "var-init"),
        a = cc11001100_hook("a", !1, "var-init"),
        e = cc11001100_hook("e", t.split("/"), "var-init");
      if (e.length <= 2) args.error && args.error(KgUser.KgErrType.param);else {
        var g = cc11001100_hook("g", e[2], "var-init"),
          c = cc11001100_hook("c", "login-user.kugou.com" == g ? !0 : !1, "var-init");
        if (window.XMLHttpRequest && !window.ActiveXObject) n = cc11001100_hook("n", new XMLHttpRequest(), "assign");else if (window.ActiveXObject) try {
          n = cc11001100_hook("n", new ActiveXObject("Microsoft.XMLHTTP"), "assign");
        } catch (e) {
          try {
            n = cc11001100_hook("n", new ActiveXObject("Msxml2.XMLHTTP"), "assign");
          } catch (e) {
            n = cc11001100_hook("n", null, "assign");
          }
        }
        n.open("GET", t + "?" + r, !0), n.send(null), n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
          var e;
          4 == n.readyState && (200 <= (e = cc11001100_hook("e", n.status, "assign")) && e < 300 || 304 == e ? (a = cc11001100_hook("a", !0, "assign"), clearTimeout(o), i(n.responseText, n.responseXML)) : c ? s || (clearTimeout(o), n.abort(), KgUser.sentGetRequestRetry(t, g, r, i)) : i(e));
        }, "assign"), c && (o = cc11001100_hook("o", setTimeout(function () {
          a || (s = cc11001100_hook("s", !0, "assign"), n.abort(), KgUser.sentGetRequestRetry(t, g, r, i));
        }, 3500), "assign"));
      }
    },
    sentPostRequest: function (t, r, i, n) {
      var o,
        s = cc11001100_hook("s", null, "var-init"),
        a = cc11001100_hook("a", !1, "var-init"),
        g = cc11001100_hook("g", !1, "var-init"),
        e = cc11001100_hook("e", t.split("/"), "var-init");
      if (e.length <= 2) args.error && args.error(KgUser.KgErrType.param);else {
        var c = cc11001100_hook("c", e[2], "var-init"),
          d = cc11001100_hook("d", "login-user.kugou.com" == c ? !0 : !1, "var-init");
        if (window.XMLHttpRequest && !window.ActiveXObject) o = cc11001100_hook("o", new XMLHttpRequest(), "assign");else if (window.ActiveXObject) try {
          o = cc11001100_hook("o", new ActiveXObject("Microsoft.XMLHTTP"), "assign");
        } catch (e) {
          try {
            o = cc11001100_hook("o", new ActiveXObject("Msxml2.XMLHTTP"), "assign");
          } catch (e) {
            o = cc11001100_hook("o", null, "assign");
          }
        }
        if (o.open("POST", t, !0), !KgUser.IsEmpty(n)) for (var u = cc11001100_hook("u", 0, "var-init"), l = cc11001100_hook("l", n.length, "var-init"); u < l; u++) o.setRequestHeader(n[u].key, n[u].value);
        KgUser.IsEmpty(r) ? o.send(null) : o.send(JSON.stringify(r)), o.onreadystatechange = cc11001100_hook("o.onreadystatechange", function () {
          var e;
          4 == o.readyState && (200 <= (e = cc11001100_hook("e", o.status, "assign")) && e < 300 || 304 == e ? (g = cc11001100_hook("g", !0, "assign"), clearTimeout(s), i(o.responseText, o)) : d ? a || (clearTimeout(s), o.abort(), KgUser.sentPostRequestRetry(t, c, r, i, n)) : i(e));
        }, "assign"), d && (s = cc11001100_hook("s", setTimeout(function () {
          g || (a = cc11001100_hook("a", !0, "assign"), o.abort(), KgUser.sentPostRequestRetry(t, c, r, i, n));
        }, 3500), "assign"));
      }
    },
    loginDRRetry: function (e, t, r, i) {
      var n = cc11001100_hook("n", "login-user.kugou.com", "var-init"),
        o = cc11001100_hook("o", "loginuserretry.kugou.com", "var-init");
      KgUser.IsEmpty(o) || (KgUser.isAckHost(KgUser.KgUrl.login, n) || (KgUser.KgUrl.login = cc11001100_hook("KgUser.KgUrl.login", KgUser.KgUrl.login.replace(n, o), "assign"), KgUser.KgUrl.loginHTTP = cc11001100_hook("KgUser.KgUrl.loginHTTP", KgUser.KgUrl.loginHTTP.replace(n, o), "assign")), e = cc11001100_hook("e", e.replace(t, o), "assign"), KgUser.loadScriptN(e, r, i));
    },
    sentGetRequestRetry: function (e, t, r, i) {
      var n = cc11001100_hook("n", "login-user.kugou.com", "var-init"),
        o = cc11001100_hook("o", "loginuserretry.kugou.com", "var-init");
      KgUser.IsEmpty(o) || (KgUser.isAckHost(KgUser.KgUrl.login, n) || (KgUser.KgUrl.login = cc11001100_hook("KgUser.KgUrl.login", KgUser.KgUrl.login.replace(n, o), "assign"), KgUser.KgUrl.loginHTTP = cc11001100_hook("KgUser.KgUrl.loginHTTP", KgUser.KgUrl.loginHTTP.replace(n, o), "assign")), e = cc11001100_hook("e", e.replace(t, o), "assign"), KgUser.sentGetRequest(e, r, i));
    },
    sentPostRequestRetry: function (e, t, r, i, n) {
      var o = cc11001100_hook("o", "login-user.kugou.com", "var-init"),
        s = cc11001100_hook("s", "loginuserretry.kugou.com", "var-init");
      KgUser.IsEmpty(s) || (KgUser.isAckHost(KgUser.KgUrl.login, o) || (KgUser.KgUrl.login = cc11001100_hook("KgUser.KgUrl.login", KgUser.KgUrl.login.replace(o, s), "assign"), KgUser.KgUrl.loginHTTP = cc11001100_hook("KgUser.KgUrl.loginHTTP", KgUser.KgUrl.loginHTTP.replace(o, s), "assign")), e = cc11001100_hook("e", e.replace(t, s), "assign"), KgUser.sentPostRequest(e, r, i, n));
    },
    antiBrush: function (t) {
      if (!KgUser.IsEmpty(t.eventid) && !KgUser.IsEmpty(t.appid)) {
        var r = cc11001100_hook("r", "kgAntiBrush" + Math.random().toString().substring(5), "var-init");
        t.callback ? window[r] = cc11001100_hook("window[r]", t.callback, "assign") : window[r] = cc11001100_hook("window[r]", function () {
          return null;
        }, "assign");
        try {
          jQuery || KgUser.loadScript("https://staticssl.kugou.com/common/js/min/jquery-2.1.4.min.js", null);
        } catch (e) {
          KgUser.loadScript("https://staticssl.kugou.com/common/js/min/jquery-2.1.4.min.js", null);
        }
        try {
          verifyObject.init(t.appid, t.mid, t.userid, t.eventid, r, t.allowMultipleInit);
        } catch (e) {
          KgUser.loadScript("https://staticssl.kugou.com/verify/static/js/verify.min.js?20200707", null, function () {
            setTimeout(function () {
              verifyObject.init(t.appid, t.mid, t.userid, t.eventid, r, t.allowMultipleInit);
            }, 100);
          });
        }
      }
    },
    antiBrushH5: function (t) {
      var e, r, i;
      KgUser.IsEmpty(t.eventid) || KgUser.IsEmpty(t.appid) ? console.error("请输入正确的参数。eventid 和 appid 不允许为空！") : (r = cc11001100_hook("r", t.url || "https://m3ws.kugou.com", "assign"), r = cc11001100_hook("r", encodeURIComponent(r), "assign"), e = cc11001100_hook("e", "https://h5.kugou.com/apps/verify-h5/dist/#/index/" + t.eventid + "/" + t.appid + "/" + r + "/" + t.mid, "assign"), r = cc11001100_hook("r", "kgAntiBrush" + Math.random().toString().substring(5), "assign"), i = cc11001100_hook("i", r, "assign"), window.kgAntiBrushH5CallbackName = cc11001100_hook("window.kgAntiBrushH5CallbackName", r, "assign"), t.callback ? window[window.kgAntiBrushH5CallbackName] = cc11001100_hook("window[window.kgAntiBrushH5CallbackName]", function (e) {
        try {
          e = cc11001100_hook("e", JSON.parse(e), "assign");
        } catch (e) {}
        t.callback && t.callback(e), window[window.kgAntiBrushH5CallbackName] = cc11001100_hook("window[window.kgAntiBrushH5CallbackName]", null, "assign");
      }, "assign") : window[window.kgAntiBrushH5CallbackName] = cc11001100_hook("window[window.kgAntiBrushH5CallbackName]", function () {
        return null;
      }, "assign"), t.openWith && "iframe" == t.openWith ? KgUser.loadScript("https://staticssl.kugou.com/common/js/min/npm/light-mobilecall-iframe.min.js", null, function () {
        var t = cc11001100_hook("t", document.getElementById("kgVerifyPopupBg"), "var-init");
        if (t) return null;
        e = cc11001100_hook("e", e + "/" + window.kgAntiBrushH5CallbackName, "assign"), (t = cc11001100_hook("t", document.createElement("div"), "assign")).id = cc11001100_hook("(t = document.createElement(\"div\")).id", "kgVerifyPopupBg", "assign"), t.style.position = cc11001100_hook("t.style.position", "fixed", "assign"), t.style.top = cc11001100_hook("t.style.top", "0", "assign"), t.style.left = cc11001100_hook("t.style.left", "0", "assign"), t.style.width = cc11001100_hook("t.style.width", "100%", "assign"), t.style.height = cc11001100_hook("t.style.height", "100%", "assign"), t.style.zIndex = cc11001100_hook("t.style.zIndex", "99999", "assign"), t.style.zIndex = cc11001100_hook("t.style.zIndex", "99999", "assign"), t.style.backgroundColor = cc11001100_hook("t.style.backgroundColor", "#ffffff", "assign"), t.innerHTML = cc11001100_hook("t.innerHTML", '<div style="position: absolute; top: 5px; right: 5px; width: 0.4rem; height: 0.4rem; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABeElEQVRYR+2WMU7FMAxAneycgIUZRhbExAGYucGvmwswsNB/BoY07Q24xGdhYEWCFYmBU1QJCqLSV37b2G6lMtCxtfJeHduJgpUftTIf/gX+Zgaccy6E4AHgoSzL9zl1Utf1KQDcKaW+EPE2XesgA9baK631LgYqpd689zdSiQjXWj+GEM7ieoh4wBvcAmttpbW+nyORwr33W2NMlc1AHzBHggr/+cGp/ZVIcOBZgRjAkeDCSQJUCQmcLJCTkMJZAmMS8f1+q41V+1itsSdhWhNx4b7PuXB2BoZatH8ngYsF0j2fMzHZW5DC+wxIJVgCQ9X+W4TisU0WmGo1zrAinwX7gZQ+l0pkM0CBzznAJgU4cKnEqIAELpEYFJgD50oMCjjnngHgMi4mnXDp2QEAL4h4QeoC59wHAJwAQIWI26lLS+5b3x3xUloUxTFJoG3b867rjowxTzkA5XvTNNdKqc/NZvNKEqAsulRMdg4sBVrsPrC00OoZ+AakVX0wydFR4AAAAABJRU5ErkJggg==) no-repeat; -webkit-background-size: cover; background-size: cover; background-repeat: no-repeat;" id="kgVerifyPopupBgClose"></div><iframe id="kgVerifyPopupBgCont" style="width:100%; height:100%;" frameborder="0" src="' + e + '"></iframe>', "assign"), document.body.appendChild(t), window.postMessage && !window.kgVerifyMessaageListener && (window.kgVerifyMessaageListener = cc11001100_hook("window.kgVerifyMessaageListener", !0, "assign"), addEventListener("message", function (r) {
          var e,
            i = cc11001100_hook("i", document.getElementById("kgVerifyPopupBgCont"), "var-init");
          if ("https://h5.kugou.com" === r.origin) {
            if ("kgVerifyCallbackData" == r.data.type) {
              try {
                window[window.kgAntiBrushH5CallbackName](r.data.dataJson || {
                  status: cc11001100_hook("status", 0, "object-key-init")
                });
              } catch (e) {}
              try {
                i.src = cc11001100_hook("i.src", "about:blank", "assign"), i.contentWindow.document.write(""), i.contentWindow.document.clear(), i.parentNode.removeChild(i);
              } catch (r) {}
              try {
                (t = cc11001100_hook("t", document.getElementById("kgVerifyPopupBg"), "assign")) && t.parentNode.removeChild(t);
              } catch (e) {}
            }
            if ("KgMobileCall" == r.data.type && LightMobileCall.isInClient() && (e = cc11001100_hook("e", null, "assign"), r.data.dataJson && (e = cc11001100_hook("e", JSON.parse(r.data.dataJson), "assign")), LightMobileCall.mobileCall(r.data.cmd, e, function (e) {
              if (r.data.cbName) {
                var t = cc11001100_hook("t", e, "var-init");
                try {
                  t = cc11001100_hook("t", JSON.stringify(e), "assign");
                } catch (e) {}
                i.contentWindow.postMessage({
                  type: cc11001100_hook("type", r.data.type, "object-key-init"),
                  cbName: cc11001100_hook("cbName", r.data.cbName, "object-key-init"),
                  dataJson: cc11001100_hook("dataJson", t, "object-key-init")
                }, "*");
              }
            })), "KgWebMobileCall" == r.data.type && LightMobileCall.isInClient()) {
              var n = cc11001100_hook("n", r.data.funcName, "var-init");
              if (n) try {
                var o = cc11001100_hook("o", n.split("."), "var-init");
                o.reduce(function (e, t) {
                  var r;
                  return e[t] ? t === o[o.length - 1] ? "function" == typeof (r = cc11001100_hook("r", e[t], "assign")) ? (e[t] = cc11001100_hook("e[t]", function (e) {
                    r && r(e), i.contentWindow.postMessage({
                      type: cc11001100_hook("type", "KgWebMobileCall", "object-key-init"),
                      funcName: cc11001100_hook("funcName", n, "object-key-init"),
                      dataJson: cc11001100_hook("dataJson", e, "object-key-init")
                    }, "*");
                  }, "assign"), e[t]) : null : e[t] : (t === o[o.length - 1] ? e[t] = cc11001100_hook("e[t]", function (e) {
                    i.contentWindow.postMessage({
                      type: cc11001100_hook("type", "KgWebMobileCall", "object-key-init"),
                      funcName: cc11001100_hook("funcName", n, "object-key-init"),
                      dataJson: cc11001100_hook("dataJson", e, "object-key-init")
                    }, "*");
                  }, "assign") : e[t] = cc11001100_hook("e[t]", new Object(), "assign"), e[t]);
                }, window);
              } catch (r) {}
            }
          }
        })), document.getElementById("kgVerifyPopupBgClose").addEventListener("click", function () {
          window[i]({
            status: cc11001100_hook("status", 0, "object-key-init"),
            error_code: cc11001100_hook("error_code", 301, "object-key-init"),
            error_msg: cc11001100_hook("error_msg", "请先完成安全验证", "object-key-init")
          });
          var e = cc11001100_hook("e", document.getElementById("kgVerifyPopupBgCont"), "var-init");
          try {
            e.src = cc11001100_hook("e.src", "about:blank", "assign"), e.contentWindow.document.write(""), e.contentWindow.document.clear(), e.parentNode.removeChild(e);
          } catch (e) {}
          try {
            t.parentNode.removeChild(t);
          } catch (e) {}
        });
      }) : window.location.replace(e));
    },
    antiBrushPCCLient: function (t) {
      if (!KgUser.IsEmpty(t.eventid)) {
        var r = cc11001100_hook("r", "kgAntiBrush" + Math.random().toString().substring(5), "var-init");
        t.callback ? window[r] = cc11001100_hook("window[r]", t.callback, "assign") : window[r] = cc11001100_hook("window[r]", function () {
          return null;
        }, "assign");
        try {
          jQuery ? i(function () {
            n(t.eventid, r);
          }) : KgUser.loadScript("https://staticssl.kugou.com/common/js/min/jquery-2.1.4.min.js", null, function () {
            i(function () {
              n(t.eventid, r);
            });
          });
        } catch (e) {
          KgUser.loadScript("https://staticssl.kugou.com/common/js/min/jquery-2.1.4.min.js", null, function () {
            i(function () {
              n(t.eventid, r);
            });
          });
        }
        function i(t) {
          cc11001100_hook("t", t, "function-parameter");
          try {
            riskCtrl ? t && t() : KgUser.loadScript("https://staticssl.kugou.com/common/js/min/riskCtrl.min.js", null, function () {
              t && t();
            });
          } catch (e) {
            KgUser.loadScript("https://staticssl.kugou.com/common/js/min/riskCtrl.min.js", null, function () {
              t && t();
            });
          }
        }
        function n(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          try {
            riskCtrl.init({
              eventId: cc11001100_hook("eventId", e, "object-key-init"),
              callback: function (e) {
                window[t](e);
              }
            });
          } catch (e) {}
        }
      }
    },
    getDfid: function (e) {
      return KgUser.Cookie.read("kg_dfid");
    },
    getDfidInClient: function (e, t) {
      if (1001 == e) {
        var r = function (e) {
            "string" == typeof e && (e = cc11001100_hook("e", JSON.parse(e), "assign")), dfid = cc11001100_hook("dfid", (dfid = cc11001100_hook("dfid", e.dfid, "assign")) || "", "assign"), t && t(dfid);
          },
          i = cc11001100_hook("i", "KGSupercall_GetUserInfo" + Math.random().toString().substr(2, 9), "var-init"),
          e = cc11001100_hook("e", null, "var-init");
        window[i] = cc11001100_hook("window[i]", function (e) {
          r && r(e), window[i] = cc11001100_hook("window[i]", null, "assign");
        }, "assign");
        try {
          e = cc11001100_hook("e", external.SuperCall(504, '{"callback":"' + i + '"}'), "assign");
        } catch (e) {}
        void 0 !== e && r ? window[i](e) : r || (window[i] = cc11001100_hook("window[i]", null, "assign"));
      }
    },
    getDfidAsyn: function (e, t) {
      var r = cc11001100_hook("r", "", "var-init");
      1001 == e ? KgUser.getDfidInClient(e, function (e) {
        r = cc11001100_hook("r", e, "assign"), t && t(r);
      }) : (r = cc11001100_hook("r", KgUser.getDfid(e), "assign"), t && t(r));
    },
    getPlat: function (e) {
      return 1001 == e ? 3 : 4;
    },
    getKgMid: function () {
      var e = cc11001100_hook("e", KgUser.Cookie.read(KgUser.KgMid.name), "var-init"),
        t = cc11001100_hook("t", "", "var-init"),
        r = cc11001100_hook("r", (window.Storage && window.localStorage && window.localStorage instanceof Storage && (t = cc11001100_hook("t", window.localStorage.getItem(KgUser.KgMid.name), "assign")), e || t), "var-init");
      if (e && e != t && window.localStorage.setItem(KgUser.KgMid.name, e), !e && t && KgUser.Cookie.write(KgUser.KgMid.name, t, 86400 * KgUser.KgMid.days, "/", KgUser.GetDomain(), !0, "None"), navigator.cookieEnabled) {
        if (KgUser.IsEmpty(r)) {
          e = cc11001100_hook("e", KgUser.Guid(), "assign"), r = cc11001100_hook("r", KgUser.Md5(e), "assign");
          try {
            KgUser.Cookie.write(KgUser.KgMid.name, KgUser.Md5(e), 86400 * KgUser.KgMid.days, "/", KgUser.GetDomain(), !0, "None"), window.localStorage.setItem(KgUser.KgMid.name, KgUser.Md5(e));
          } catch (e) {}
        }
      } else {
        var t = cc11001100_hook("t", navigator.userAgent, "var-init"),
          e = cc11001100_hook("e", function () {
            var e = cc11001100_hook("e", navigator.plugins, "var-init"),
              t = cc11001100_hook("t", "", "var-init");
            if (0 < e.length) {
              for (var r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"), n = cc11001100_hook("n", e.length, "var-init"); i < n; i++) {
                var o = cc11001100_hook("o", e[i].name, "var-init");
                r.push(o);
              }
              t = cc11001100_hook("t", r.toString(), "assign");
            }
            return t;
          }(), "var-init"),
          i = cc11001100_hook("i", screen.width + "x" + screen.height, "var-init"),
          n = cc11001100_hook("n", screen.colorDepth || "", "var-init"),
          o = cc11001100_hook("o", screen.pixelDepth || "", "var-init"),
          s = cc11001100_hook("s", function () {
            var e = cc11001100_hook("e", ["canvas"], "var-init");
            try {
              var t,
                r = cc11001100_hook("r", document.createElement("canvas"), "var-init");
              r.getContext && r.getContext("2d") && (r.width = cc11001100_hook("r.width", 200, "assign"), r.height = cc11001100_hook("r.height", 200, "assign"), r.style.display = cc11001100_hook("r.style.display", "inline", "assign"), (t = cc11001100_hook("t", r.getContext("2d"), "assign")).rect(0, 0, 10, 10), t.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === t.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), t.textBaseline = cc11001100_hook("t.textBaseline", "alphabetic", "assign"), t.fillStyle = cc11001100_hook("t.fillStyle", "#f60", "assign"), t.fillRect(125, 1, 62, 20), t.fillStyle = cc11001100_hook("t.fillStyle", "#069", "assign"), t.font = cc11001100_hook("t.font", "14px 'Arial'", "assign"), t.fillText("hello kugou", 2, 15), t.fillStyle = cc11001100_hook("t.fillStyle", "rgba(102, 204, 0, 0.2)", "assign"), t.font = cc11001100_hook("t.font", "18pt Arial", "assign"), t.fillText("hello kugou", 4, 45), t.globalCompositeOperation = cc11001100_hook("t.globalCompositeOperation", "multiply", "assign"), t.fillStyle = cc11001100_hook("t.fillStyle", "rgb(255,0,255)", "assign"), t.beginPath(), t.arc(50, 50, 50, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.fillStyle = cc11001100_hook("t.fillStyle", "rgb(0,255,255)", "assign"), t.beginPath(), t.arc(100, 50, 50, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.fillStyle = cc11001100_hook("t.fillStyle", "rgb(255,255,0)", "assign"), t.beginPath(), t.arc(75, 100, 50, 0, 2 * Math.PI, !0), t.closePath(), t.fill(), t.fillStyle = cc11001100_hook("t.fillStyle", "rgb(255,0,255)", "assign"), t.arc(75, 75, 75, 0, 2 * Math.PI, !0), t.arc(75, 75, 25, 0, 2 * Math.PI, !0), t.fill("evenodd"), r.toDataURL && e.push("canvas fp:" + r.toDataURL()));
            } catch (e) {}
            return KgUser.Md5(e.toString());
          }(), "var-init");
        r = cc11001100_hook("r", KgUser.Md5(t + e + i + n + o + s), "assign");
      }
      return r;
    }
  }, "var-init"),
  m_val = cc11001100_hook("m_val", KgUser.Cookie.read(KgUser.KgMid.name), "var-init");
KgUser.Cookie.remove("kg_mid_temp"), KgUser.Cookie.write("kg_mid_temp", m_val, 300, "/", KgUser.GetDomain()), KgUser.getKgMid(), "kugou.com" != KgUser.GetDomain() ? KgUser.CrossDomainLogin("") : KgUser.CheckAutoLogin();
try {
  document.execCommand("BackgroundImageCache", !1, !0);
} catch (e) {}
KgUser.loadAckJs();