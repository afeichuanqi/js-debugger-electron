!function (e, n) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = cc11001100_hook("module.exports", n(), "assign") : "function" == typeof define && define.amd ? define(n) : (e = cc11001100_hook("e", e || self, "assign"), e.getBaseInfo = cc11001100_hook("e.getBaseInfo", n(), "assign"));
}(this, function () {
  "use strict";

  var e = cc11001100_hook("e", {
      Cookie: {
        write: function (e, n, t, i, r, o) {
          /^\w*$/.test(e) || alert("cookie格式不正确"), /; /.test(n) && alert("cookie格式不正确");
          var a = cc11001100_hook("a", e + "=" + n, "var-init");
          if (t) {
            var l = cc11001100_hook("l", new Date(), "var-init");
            l.setTime(l.getTime() + 1e3 * t), a += cc11001100_hook("a", "; expires=" + l.toGMTString(), "assign");
          }
          i && (a += cc11001100_hook("a", "; path=" + i, "assign")), r && (a += cc11001100_hook("a", "; domain=" + r, "assign")), o && (a += cc11001100_hook("a", "; secure", "assign")), document.cookie = cc11001100_hook("document.cookie", a, "assign");
        },
        rewriteKey: function (e, n, t, i, r, o, a) {
          var l = cc11001100_hook("l", n, "var-init");
          if (t) {
            var s = cc11001100_hook("s", this.read(e), "var-init"),
              c = cc11001100_hook("c", new RegExp("\\b" + n + "=([^&]*)\\b", "g"), "var-init");
            l = cc11001100_hook("l", s.replace(c, function (e, n) {
              return e.replace(n, t);
            }), "assign");
          }
          /^\d+(s|m|h|d)$/i.test(i) ? (/^\d+s$/i.test(i) && this.setSec(e, l, i.replace(/s$/i, ""), r, o, a), /^\d+m$/i.test(i) && this.setMin(e, l, i.replace(/m$/i, ""), r, o, a), /^\d+h$/i.test(i) && this.setHour(e, l, i.replace(/h$/i, ""), r, o, a), /^\d+d$/i.test(i) && this.setDay(e, l, i.replace(/d$/i, ""), r, o, a)) : this.write(e, l, i, r, o, a);
        },
        setDay: function (e, n, t, i, r, o) {
          this.write(e, n, 24 * t * 60 * 60, i, r, o);
        },
        setHour: function (e, n, t, i, r, o) {
          this.write(e, n, 60 * t * 60, i, r, o);
        },
        setMin: function (e, n, t, i, r, o) {
          this.write(e, n, 60 * t, i, r, o);
        },
        setSec: function (e, n, t, i, r, o) {
          this.write(e, n, t, i, r, o);
        },
        read: function (n, t, i) {
          for (var r = cc11001100_hook("r", "", "var-init"), o = cc11001100_hook("o", document.cookie.split("; "), "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < o.length; a++) {
            var l = cc11001100_hook("l", o[a].match(/^(\w+)=(.+)$/), "var-init");
            if (l && l.length > 1 && l[1] == n) {
              r = cc11001100_hook("r", l[2], "assign");
              break;
            }
          }
          return "" == r ? null : t ? i ? JSON.parse(r)[t] : new e.Param().parse(r)[t] : r;
        },
        remove: function (e, n, t) {
          var i = cc11001100_hook("i", e + "=", "var-init");
          n && (i += cc11001100_hook("i", "; path=" + n, "assign")), t && (i += cc11001100_hook("i", ";domain=" + t, "assign")), i += cc11001100_hook("i", "; expires=Fri, 02-Jan-1970 00:00:00 GMT", "assign"), document.cookie = cc11001100_hook("document.cookie", i, "assign");
        }
      },
      Md5: function (e) {
        function n(e, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          e[n >> 5] |= cc11001100_hook("e[n >> 5]", 128 << n % 32, "assign"), e[14 + (n + 64 >>> 9 << 4)] = cc11001100_hook("e[14 + (n + 64 >>> 9 << 4)]", n, "assign");
          for (var t = cc11001100_hook("t", 1732584193, "var-init"), s = cc11001100_hook("s", -271733879, "var-init"), c = cc11001100_hook("c", -1732584194, "var-init"), u = cc11001100_hook("u", 271733878, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < e.length; d += cc11001100_hook("d", 16, "assign")) {
            var f = cc11001100_hook("f", t, "var-init"),
              m = cc11001100_hook("m", s, "var-init"),
              g = cc11001100_hook("g", c, "var-init"),
              p = cc11001100_hook("p", u, "var-init");
            s = cc11001100_hook("s", a(s = cc11001100_hook("s", a(s = cc11001100_hook("s", a(s = cc11001100_hook("s", a(s = cc11001100_hook("s", o(s = cc11001100_hook("s", o(s = cc11001100_hook("s", o(s = cc11001100_hook("s", o(s = cc11001100_hook("s", r(s = cc11001100_hook("s", r(s = cc11001100_hook("s", r(s = cc11001100_hook("s", r(s = cc11001100_hook("s", i(s = cc11001100_hook("s", i(s = cc11001100_hook("s", i(s = cc11001100_hook("s", i(s, c = cc11001100_hook("c", i(c, u = cc11001100_hook("u", i(u, t = cc11001100_hook("t", i(t, s, c, u, e[d + 0], 7, -680876936), "assign"), s, c, e[d + 1], 12, -389564586), "assign"), t, s, e[d + 2], 17, 606105819), "assign"), u, t, e[d + 3], 22, -1044525330), "assign"), c = cc11001100_hook("c", i(c, u = cc11001100_hook("u", i(u, t = cc11001100_hook("t", i(t, s, c, u, e[d + 4], 7, -176418897), "assign"), s, c, e[d + 5], 12, 1200080426), "assign"), t, s, e[d + 6], 17, -1473231341), "assign"), u, t, e[d + 7], 22, -45705983), "assign"), c = cc11001100_hook("c", i(c, u = cc11001100_hook("u", i(u, t = cc11001100_hook("t", i(t, s, c, u, e[d + 8], 7, 1770035416), "assign"), s, c, e[d + 9], 12, -1958414417), "assign"), t, s, e[d + 10], 17, -42063), "assign"), u, t, e[d + 11], 22, -1990404162), "assign"), c = cc11001100_hook("c", i(c, u = cc11001100_hook("u", i(u, t = cc11001100_hook("t", i(t, s, c, u, e[d + 12], 7, 1804603682), "assign"), s, c, e[d + 13], 12, -40341101), "assign"), t, s, e[d + 14], 17, -1502002290), "assign"), u, t, e[d + 15], 22, 1236535329), "assign"), c = cc11001100_hook("c", r(c, u = cc11001100_hook("u", r(u, t = cc11001100_hook("t", r(t, s, c, u, e[d + 1], 5, -165796510), "assign"), s, c, e[d + 6], 9, -1069501632), "assign"), t, s, e[d + 11], 14, 643717713), "assign"), u, t, e[d + 0], 20, -373897302), "assign"), c = cc11001100_hook("c", r(c, u = cc11001100_hook("u", r(u, t = cc11001100_hook("t", r(t, s, c, u, e[d + 5], 5, -701558691), "assign"), s, c, e[d + 10], 9, 38016083), "assign"), t, s, e[d + 15], 14, -660478335), "assign"), u, t, e[d + 4], 20, -405537848), "assign"), c = cc11001100_hook("c", r(c, u = cc11001100_hook("u", r(u, t = cc11001100_hook("t", r(t, s, c, u, e[d + 9], 5, 568446438), "assign"), s, c, e[d + 14], 9, -1019803690), "assign"), t, s, e[d + 3], 14, -187363961), "assign"), u, t, e[d + 8], 20, 1163531501), "assign"), c = cc11001100_hook("c", r(c, u = cc11001100_hook("u", r(u, t = cc11001100_hook("t", r(t, s, c, u, e[d + 13], 5, -1444681467), "assign"), s, c, e[d + 2], 9, -51403784), "assign"), t, s, e[d + 7], 14, 1735328473), "assign"), u, t, e[d + 12], 20, -1926607734), "assign"), c = cc11001100_hook("c", o(c, u = cc11001100_hook("u", o(u, t = cc11001100_hook("t", o(t, s, c, u, e[d + 5], 4, -378558), "assign"), s, c, e[d + 8], 11, -2022574463), "assign"), t, s, e[d + 11], 16, 1839030562), "assign"), u, t, e[d + 14], 23, -35309556), "assign"), c = cc11001100_hook("c", o(c, u = cc11001100_hook("u", o(u, t = cc11001100_hook("t", o(t, s, c, u, e[d + 1], 4, -1530992060), "assign"), s, c, e[d + 4], 11, 1272893353), "assign"), t, s, e[d + 7], 16, -155497632), "assign"), u, t, e[d + 10], 23, -1094730640), "assign"), c = cc11001100_hook("c", o(c, u = cc11001100_hook("u", o(u, t = cc11001100_hook("t", o(t, s, c, u, e[d + 13], 4, 681279174), "assign"), s, c, e[d + 0], 11, -358537222), "assign"), t, s, e[d + 3], 16, -722521979), "assign"), u, t, e[d + 6], 23, 76029189), "assign"), c = cc11001100_hook("c", o(c, u = cc11001100_hook("u", o(u, t = cc11001100_hook("t", o(t, s, c, u, e[d + 9], 4, -640364487), "assign"), s, c, e[d + 12], 11, -421815835), "assign"), t, s, e[d + 15], 16, 530742520), "assign"), u, t, e[d + 2], 23, -995338651), "assign"), c = cc11001100_hook("c", a(c, u = cc11001100_hook("u", a(u, t = cc11001100_hook("t", a(t, s, c, u, e[d + 0], 6, -198630844), "assign"), s, c, e[d + 7], 10, 1126891415), "assign"), t, s, e[d + 14], 15, -1416354905), "assign"), u, t, e[d + 5], 21, -57434055), "assign"), c = cc11001100_hook("c", a(c, u = cc11001100_hook("u", a(u, t = cc11001100_hook("t", a(t, s, c, u, e[d + 12], 6, 1700485571), "assign"), s, c, e[d + 3], 10, -1894986606), "assign"), t, s, e[d + 10], 15, -1051523), "assign"), u, t, e[d + 1], 21, -2054922799), "assign"), c = cc11001100_hook("c", a(c, u = cc11001100_hook("u", a(u, t = cc11001100_hook("t", a(t, s, c, u, e[d + 8], 6, 1873313359), "assign"), s, c, e[d + 15], 10, -30611744), "assign"), t, s, e[d + 6], 15, -1560198380), "assign"), u, t, e[d + 13], 21, 1309151649), "assign"), c = cc11001100_hook("c", a(c, u = cc11001100_hook("u", a(u, t = cc11001100_hook("t", a(t, s, c, u, e[d + 4], 6, -145523070), "assign"), s, c, e[d + 11], 10, -1120210379), "assign"), t, s, e[d + 2], 15, 718787259), "assign"), u, t, e[d + 9], 21, -343485551), "assign"), t = cc11001100_hook("t", l(t, f), "assign"), s = cc11001100_hook("s", l(s, m), "assign"), c = cc11001100_hook("c", l(c, g), "assign"), u = cc11001100_hook("u", l(u, p), "assign");
          }
          return Array(t, s, c, u);
        }
        function t(e, n, t, i, r, o) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          return l(s(l(l(n, e), l(i, o)), r), t);
        }
        function i(e, n, i, r, o, a, l) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("l", l, "function-parameter");
          return t(n & i | ~n & r, e, n, o, a, l);
        }
        function r(e, n, i, r, o, a, l) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("l", l, "function-parameter");
          return t(n & r | i & ~r, e, n, o, a, l);
        }
        function o(e, n, i, r, o, a, l) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("l", l, "function-parameter");
          return t(n ^ i ^ r, e, n, o, a, l);
        }
        function a(e, n, i, r, o, a, l) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          cc11001100_hook("i", i, "function-parameter");
          cc11001100_hook("r", r, "function-parameter");
          cc11001100_hook("o", o, "function-parameter");
          cc11001100_hook("a", a, "function-parameter");
          cc11001100_hook("l", l, "function-parameter");
          return t(i ^ (n | ~r), e, n, o, a, l);
        }
        function l(e, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          var t = cc11001100_hook("t", (65535 & e) + (65535 & n), "var-init");
          return (e >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
        }
        function s(e, n) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("n", n, "function-parameter");
          return e << n | e >>> 32 - n;
        }
        function c(e) {
          cc11001100_hook("e", e, "function-parameter");
          for (var n = cc11001100_hook("n", Array(), "var-init"), t = cc11001100_hook("t", (1 << d) - 1, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length * d; i += cc11001100_hook("i", d, "assign")) n[i >> 5] |= cc11001100_hook("n[i >> 5]", (e.charCodeAt(i / d) & t) << i % 32, "assign");
          return n;
        }
        function u(e) {
          cc11001100_hook("e", e, "function-parameter");
          for (var n = cc11001100_hook("n", "", "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < 4 * e.length; t++) n += cc11001100_hook("n", "0123456789abcdef".charAt(e[t >> 2] >> t % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(e[t >> 2] >> t % 4 * 8 & 15), "assign");
          return n;
        }
        var d = cc11001100_hook("d", 8, "var-init");
        return e = cc11001100_hook("e", e ? function (e) {
          return u(n(c(e), e.length * d));
        }(e) : "", "assign");
      },
      Param: function () {
        var e = cc11001100_hook("e", [], "var-init"),
          n = cc11001100_hook("n", {}, "var-init");
        this.parse = cc11001100_hook("this.parse", function (e) {
          for (var t = cc11001100_hook("t", e.split("&"), "var-init"), i = cc11001100_hook("i", 0, "var-init"), r = cc11001100_hook("r", t.length, "var-init"); i < r; i++) {
            var o = cc11001100_hook("o", t[i].split("="), "var-init");
            n[o[0]] = cc11001100_hook("n[o[0]]", o[1], "assign");
          }
          return n;
        }, "assign"), this.toString = cc11001100_hook("this.toString", function (n) {
          return n = cc11001100_hook("n", n || "&", "assign"), e.join(n);
        }, "assign"), this.add = cc11001100_hook("this.add", function (n, t) {
          var i = cc11001100_hook("i", n + "=" + t, "var-init");
          return e.push(i), this;
        }, "assign");
      },
      IsEmpty: function (e) {
        return void 0 === e || null == e || "" == e;
      },
      Guid: function () {
        function e() {
          return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);
        }
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
      },
      getKgMid: function () {
        var n = cc11001100_hook("n", e.Cookie.read("kg_mid"), "var-init");
        if (navigator.cookieEnabled) {
          if (e.IsEmpty(n)) {
            var t = cc11001100_hook("t", e.Guid(), "var-init");
            n = cc11001100_hook("n", e.Md5(t), "assign");
            try {
              e.Cookie.write("kg_mid", e.Md5(t), 864e6, "/", "kugou.com");
            } catch (e) {}
          }
        } else {
          var i = cc11001100_hook("i", navigator.userAgent, "var-init"),
            r = cc11001100_hook("r", function () {
              var e = cc11001100_hook("e", navigator.plugins, "var-init"),
                n = cc11001100_hook("n", "", "var-init");
              if (e.length > 0) {
                for (var t = cc11001100_hook("t", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"), r = cc11001100_hook("r", e.length, "var-init"); i < r; i++) {
                  var o = cc11001100_hook("o", e[i].name, "var-init");
                  t.push(o);
                }
                n = cc11001100_hook("n", t.toString(), "assign");
              }
              return n;
            }(), "var-init"),
            o = cc11001100_hook("o", screen.width + "x" + screen.height, "var-init"),
            a = cc11001100_hook("a", screen.colorDepth ? screen.colorDepth : "", "var-init"),
            l = cc11001100_hook("l", screen.pixelDepth ? screen.pixelDepth : "", "var-init"),
            s = cc11001100_hook("s", function () {
              var n = cc11001100_hook("n", ["canvas"], "var-init");
              try {
                var t = cc11001100_hook("t", document.createElement("canvas"), "var-init");
                if (t.getContext && t.getContext("2d")) {
                  t.width = cc11001100_hook("t.width", 200, "assign"), t.height = cc11001100_hook("t.height", 200, "assign"), t.style.display = cc11001100_hook("t.style.display", "inline", "assign");
                  var i = cc11001100_hook("i", t.getContext("2d"), "var-init");
                  i.rect(0, 0, 10, 10), i.rect(2, 2, 6, 6), n.push("canvas winding:" + (!1 === i.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), i.textBaseline = cc11001100_hook("i.textBaseline", "alphabetic", "assign"), i.fillStyle = cc11001100_hook("i.fillStyle", "#f60", "assign"), i.fillRect(125, 1, 62, 20), i.fillStyle = cc11001100_hook("i.fillStyle", "#069", "assign"), i.font = cc11001100_hook("i.font", "14px 'Arial'", "assign"), i.fillText("hello kugou", 2, 15), i.fillStyle = cc11001100_hook("i.fillStyle", "rgba(102, 204, 0, 0.2)", "assign"), i.font = cc11001100_hook("i.font", "18pt Arial", "assign"), i.fillText("hello kugou", 4, 45), i.globalCompositeOperation = cc11001100_hook("i.globalCompositeOperation", "multiply", "assign"), i.fillStyle = cc11001100_hook("i.fillStyle", "rgb(255,0,255)", "assign"), i.beginPath(), i.arc(50, 50, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = cc11001100_hook("i.fillStyle", "rgb(0,255,255)", "assign"), i.beginPath(), i.arc(100, 50, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = cc11001100_hook("i.fillStyle", "rgb(255,255,0)", "assign"), i.beginPath(), i.arc(75, 100, 50, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), i.fillStyle = cc11001100_hook("i.fillStyle", "rgb(255,0,255)", "assign"), i.arc(75, 75, 75, 0, 2 * Math.PI, !0), i.arc(75, 75, 25, 0, 2 * Math.PI, !0), i.fill("evenodd"), t.toDataURL && n.push("canvas fp:" + t.toDataURL());
                }
              } catch (e) {}
              return e.Md5(n.toString());
            }(), "var-init");
          n = cc11001100_hook("n", e.Md5(i + r + o + a + l + s), "assign");
        }
        return n;
      },
      isiOS: function () {
        var e = cc11001100_hook("e", navigator.userAgent, "var-init"),
          n = cc11001100_hook("n", e.match(/(iPad).*OS\s([\d_]+)/), "var-init"),
          t = cc11001100_hook("t", e.match(/(iPod)(.*OS\s([\d_]+))?/), "var-init"),
          i = cc11001100_hook("i", !n && e.match(/(iPhone\sOS)\s([\d_]+)/), "var-init");
        return !!(n || t || i);
      }
    }, "var-init"),
    n = cc11001100_hook("n", ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self, function (e, n) {
      return n = cc11001100_hook("n", {
        exports: {}
      }, "assign"), e(n, n.exports), n.exports;
    }(function (e, n) {
      !function (n, t) {
        e.exports = cc11001100_hook("e.exports", function () {
          var e = cc11001100_hook("e", {
              str2Json: function (e) {
                var n = cc11001100_hook("n", {}, "var-init");
                if ("[object String]" === Object.prototype.toString.call(e)) try {
                  n = cc11001100_hook("n", JSON.parse(e), "assign");
                } catch (e) {
                  n = cc11001100_hook("n", {}, "assign");
                }
                return n;
              },
              json2Str: function (e) {
                var n = cc11001100_hook("n", e, "var-init");
                if ("string" != typeof e) try {
                  n = cc11001100_hook("n", JSON.stringify(e), "assign");
                } catch (e) {
                  n = cc11001100_hook("n", "", "assign");
                }
                return n;
              },
              cbNum: cc11001100_hook("cbNum", 0, "object-key-init"),
              isIOS: cc11001100_hook("isIOS", !!navigator.userAgent.match(/KGBrowser/gi), "object-key-init"),
              isKugouAndroid: cc11001100_hook("isKugouAndroid", !!navigator.userAgent.match(/kugouandroid/gi), "object-key-init"),
              isAndroid: cc11001100_hook("isAndroid", "undefined" != typeof external && void 0 !== external.superCall, "object-key-init"),
              isFXAPP: cc11001100_hook("isFXAPP", !!navigator.userAgent.match(/Fanxing/gi), "object-key-init"),
              isFXQianBanAPP: cc11001100_hook("isFXQianBanAPP", !!navigator.userAgent.match(/QianBan/gi), "object-key-init"),
              isIframePage: cc11001100_hook("isIframePage", window.parent && window.parent != window, "object-key-init"),
              loadUrl: function (e) {
                var n = cc11001100_hook("n", document.createElement("iframe"), "var-init");
                n.setAttribute("src", e), n.setAttribute("style", "display:none;"), n.setAttribute("height", "0px"), n.setAttribute("width", "0px"), n.setAttribute("frameborder", "0"), document.body.appendChild(n), n.parentNode.removeChild(n), n = cc11001100_hook("n", null, "assign");
              },
              mobileCallInIframe: function (e, n, t) {
                var i = cc11001100_hook("i", {
                  type: cc11001100_hook("type", "KgMobileCall", "object-key-init"),
                  cmd: cc11001100_hook("cmd", e, "object-key-init")
                }, "var-init");
                n && (i.dataJson = cc11001100_hook("i.dataJson", n, "assign")), t && (i.cbName = cc11001100_hook("i.cbName", t, "assign")), i.source = cc11001100_hook("i.source", "personal", "assign"), window.parent.postMessage(i, "*");
              },
              receiveMessage: function (e) {
                var n = cc11001100_hook("n", e.data, "var-init");
                if ("KgMobileCall" == n.type && window[n.cbName] && (n.dataJson ? window[n.cbName](n.dataJson) : window[n.cbName](), window[n.cbName] = cc11001100_hook("window[n.cbName]", null, "assign")), "KgWebMobileCall" == n.type) {
                  var t = cc11001100_hook("t", n.funcName.split("."), "var-init");
                  KgWebMobileCall[t[1]] && (n.dataJson ? KgWebMobileCall[t[1]](n.dataJson) : KgWebMobileCall[t[1]]());
                }
              },
              callCmd: function (n) {
                var t = cc11001100_hook("t", e, "var-init");
                if (t.isKugouAndroid) {
                  var i = cc11001100_hook("i", {}, "var-init"),
                    r = cc11001100_hook("r", "", "var-init");
                  if (n.cmd && (i.cmd = cc11001100_hook("i.cmd", n.cmd, "assign")), n.jsonStr && (i.jsonStr = cc11001100_hook("i.jsonStr", n.jsonStr, "assign")), n.callback && (t.cbNum++, r = cc11001100_hook("r", "kgandroidmobilecall_" + (n.cmd || 0) + "_" + t.cbNum + Math.random().toString().substr(2, 9), "assign"), i.callback = cc11001100_hook("i.callback", r, "assign"), window[r] = cc11001100_hook("window[r]", function (e, i) {
                    void 0 !== e && ("[object String]" === Object.prototype.toString.call(e) ? (e = cc11001100_hook("e", "#" === i ? decodeURIComponent(e) : decodeURIComponent(decodeURIComponent(e)), "assign"), n.callback(t.str2Json(e))) : n.callback(e));
                  }, "assign")), n.AndroidCallback) {
                    var o = cc11001100_hook("o", t.str2Json(n.jsonStr), "var-init");
                    o.AndroidCallback = cc11001100_hook("o.AndroidCallback", r, "assign"), n.jsonStr = cc11001100_hook("n.jsonStr", t.json2Str(o), "assign"), n.jsonStr && (i.jsonStr = cc11001100_hook("i.jsonStr", n.jsonStr, "assign"));
                  }
                  var a = cc11001100_hook("a", encodeURIComponent(JSON.stringify(i)), "var-init"),
                    l = cc11001100_hook("l", "kugoujsbridge://start.kugou_jsbridge/?".concat(a), "var-init");
                  t.isIframePage ? t.mobileCallInIframe(i.cmd, i.jsonStr, r) : t.loadUrl(l);
                } else if (t.isAndroid) {
                  var s = cc11001100_hook("s", "", "var-init"),
                    c = cc11001100_hook("c", "", "var-init");
                  if (n.jsonStr) {
                    if (n.callback && "" !== n.callback && !0 === n.AndroidCallback) {
                      t.cbNum++, c = cc11001100_hook("c", "kgmobilecall_" + (n.cmd || 0) + "_" + t.cbNum + Math.random().toString().substr(2, 9), "assign"), window[c] = cc11001100_hook("window[c]", function (e, i) {
                        void 0 !== e && ("[object String]" === Object.prototype.toString.call(e) ? (e = cc11001100_hook("e", "#" === i ? decodeURIComponent(e) : decodeURIComponent(decodeURIComponent(e)), "assign"), n.callback(t.str2Json(e))) : n.callback(e));
                      }, "assign");
                      var u = cc11001100_hook("u", t.str2Json(n.jsonStr), "var-init");
                      u.AndroidCallback = cc11001100_hook("u.AndroidCallback", c, "assign"), n.jsonStr = cc11001100_hook("n.jsonStr", t.json2Str(u), "assign");
                    }
                    if (t.isIframePage && n.AndroidCallback) t.mobileCallInIframe(n.cmd, n.jsonStr, c);else try {
                      s = cc11001100_hook("s", external.superCall(n.cmd, n.jsonStr), "assign");
                    } catch (e) {}
                  } else try {
                    s = cc11001100_hook("s", external.superCall(n.cmd), "assign");
                  } catch (e) {}
                  (!t.isIframePage || t.isIframePage && !n.AndroidCallback) && n.callback && "" !== n.callback && "AndroidCallback" != s && (s = cc11001100_hook("s", t.str2Json(s), "assign"), n.callback(s));
                } else if (t.isFXAPP || t.isFXQianBanAPP) {
                  var d = cc11001100_hook("d", "", "var-init"),
                    f = cc11001100_hook("f", "", "var-init");
                  if (n.callback ? (t.cbNum++, f = cc11001100_hook("f", "kgmobilecall_" + (n.cmd || 0) + "_" + t.cbNum + Math.random().toString().substr(2, 9), "assign"), window[f] = cc11001100_hook("window[f]", function (e) {
                    void 0 !== e && n.callback && ("[object String]" === Object.prototype.toString.call(e) ? n.callback(t.str2Json(e)) : n.callback(e));
                  }, "assign"), d = cc11001100_hook("d", n.jsonStr ? 'fanxing2://send.message/?{"cmd":' + n.cmd + ', "jsonStr":' + n.jsonStr + ', "callback":"' + f + '"}' : 'fanxing2://send.message/?{"cmd":' + n.cmd + ', "callback":"' + f + '"}', "assign")) : d = cc11001100_hook("d", n.jsonStr ? 'fanxing2://send.message/?{"cmd":' + n.cmd + ', "jsonStr":' + n.jsonStr + "}" : 'fanxing2://send.message/?{"cmd":' + n.cmd + "}", "assign"), t.isIframePage) t.mobileCallInIframe(n.cmd, n.jsonStr, f);else if (navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)) {
                    if (external && external.callFanxing) {
                      var m = cc11001100_hook("m", {
                        cmd: cc11001100_hook("cmd", n.cmd, "object-key-init"),
                        jsonStr: cc11001100_hook("jsonStr", n.jsonStr || "", "object-key-init"),
                        callback: cc11001100_hook("callback", f, "object-key-init")
                      }, "var-init");
                      external.callFanxing(JSON.stringify(m));
                    } else window.prompt(d);
                  } else t.loadUrl(d);
                } else {
                  var g = cc11001100_hook("g", "", "var-init"),
                    p = cc11001100_hook("p", "", "var-init");
                  n.callback && (t.cbNum++, p = cc11001100_hook("p", "kgmobilecall_" + (n.cmd || 0) + "_" + t.cbNum + Math.random().toString().substr(2, 9), "assign"), window[p] = cc11001100_hook("window[p]", function (e) {
                    void 0 !== e && n.callback && ("[object String]" === Object.prototype.toString.call(e) ? n.callback(t.str2Json(e)) : n.callback(e));
                  }, "assign")), p && "" != p && n.jsonStr && (g = cc11001100_hook("g", 'kugouurl://start.music/?{"cmd":' + n.cmd + ', "jsonStr":' + n.jsonStr + ', "callback":"' + p + '"}', "assign")), p && "" != p && !n.jsonStr && (g = cc11001100_hook("g", 'kugouurl://start.music/?{"cmd":' + n.cmd + ', "callback":"' + p + '"}', "assign")), "" == p && n.jsonStr && (g = cc11001100_hook("g", 'kugouurl://start.music/?{"cmd":' + n.cmd + ', "jsonStr":' + n.jsonStr + "}", "assign")), "" != p || n.jsonStr || (g = cc11001100_hook("g", 'kugouurl://start.music/?{"cmd":' + n.cmd + "}", "assign")), t.isIframePage ? t.mobileCallInIframe(n.cmd, n.jsonStr, p) : t.loadUrl(g);
                }
              }
            }, "var-init"),
            n = cc11001100_hook("n", {
              isIOS: cc11001100_hook("isIOS", e.isIOS, "object-key-init"),
              isKugouAndroid: cc11001100_hook("isKugouAndroid", e.isKugouAndroid, "object-key-init"),
              isAndroid: cc11001100_hook("isAndroid", e.isAndroid, "object-key-init"),
              isFXAPP: cc11001100_hook("isFXAPP", e.isFXAPP, "object-key-init"),
              isFXQianBanAPP: cc11001100_hook("isFXQianBanAPP", e.isFXQianBanAPP, "object-key-init"),
              isInClient: function () {
                return !!(e.isAndroid || e.isKugouAndroid || e.isIOS || e.isFXAPP || e.isFXQianBanAPP);
              },
              mobileCall: function (n, t, i) {
                var r = cc11001100_hook("r", "", "var-init");
                if (t && (r = cc11001100_hook("r", e.json2Str(t), "assign")), !n) return console.error("请输入命令号！"), !1;
                var o = cc11001100_hook("o", {}, "var-init");
                n && (o.cmd = cc11001100_hook("o.cmd", n, "assign")), "" != r && (o.jsonStr = cc11001100_hook("o.jsonStr", r, "assign")), i && (o.callback = cc11001100_hook("o.callback", i, "assign")), !n || 186 != n && 225 != n || i && (o.AndroidCallback = cc11001100_hook("o.AndroidCallback", !0, "assign")), e.callCmd(o);
              },
              KgWebMobileCall: function (n, t) {
                if (n) try {
                  e.isIframePage && window.parent.postMessage({
                    type: cc11001100_hook("type", "KgWebMobileCall", "object-key-init"),
                    funcName: cc11001100_hook("funcName", n, "object-key-init")
                  }, "*");
                  var i = cc11001100_hook("i", n.split("."), "var-init");
                  i.reduce(function (e, r) {
                    if (e[r]) {
                      if (r === i[i.length - 1]) {
                        var o = cc11001100_hook("o", e[r], "var-init");
                        return "function" == typeof o ? (e[r] = cc11001100_hook("e[r]", function () {
                          o && o.apply(void 0, arguments), t && t.apply(void 0, arguments);
                        }, "assign"), e[r]) : (console.error("请检查，当前环境变量已注册了对象：" + n + "，且该对象不是方法"), null);
                      }
                      return e[r];
                    }
                    return r === i[i.length - 1] ? e[r] = cc11001100_hook("e[r]", function () {
                      t && t.apply(void 0, arguments);
                    }, "assign") : e[r] = cc11001100_hook("e[r]", new Object(), "assign"), e[r];
                  }, window);
                } catch (e) {}
              }
            }, "var-init");
          return window.addEventListener("message", function (n) {
            e.receiveMessage(n);
          }, !1), n;
        }(), "assign");
      }();
    })), "var-init");
  return function (t, i) {
    var r = cc11001100_hook("r", {
        getUserInfo: cc11001100_hook("getUserInfo", 101, "object-key-init"),
        getVersion: cc11001100_hook("getVersion", 122, "object-key-init"),
        getMobileInfo: cc11001100_hook("getMobileInfo", 124, "object-key-init")
      }, "var-init"),
      o = cc11001100_hook("o", {
        appid: cc11001100_hook("appid", null, "object-key-init"),
        mid: cc11001100_hook("mid", null, "object-key-init"),
        uuid: cc11001100_hook("uuid", null, "object-key-init"),
        plat: cc11001100_hook("plat", null, "object-key-init"),
        dfid: cc11001100_hook("dfid", null, "object-key-init"),
        userid: cc11001100_hook("userid", null, "object-key-init"),
        userpic: cc11001100_hook("userpic", null, "object-key-init"),
        userNickName: cc11001100_hook("userNickName", null, "object-key-init"),
        token: cc11001100_hook("token", null, "object-key-init"),
        clientver: cc11001100_hook("clientver", null, "object-key-init")
      }, "var-init");
    if (n.isInClient() && !n.isFXAP) n.mobileCall(r.getUserInfo, null, function (e) {
      1 == e.status ? (o.userid = cc11001100_hook("o.userid", e.kugouID, "assign"), o.token = cc11001100_hook("o.token", e.token, "assign"), o.userpic = cc11001100_hook("o.userpic", e.photo, "assign"), o.userNickName = cc11001100_hook("o.userNickName", e.nickName, "assign"), o.isVIP = cc11001100_hook("o.isVIP", e.isVIP || e.isVip, "assign")) : (o.userid = cc11001100_hook("o.userid", null, "assign"), o.token = cc11001100_hook("o.token", null, "assign"), o.userpic = cc11001100_hook("o.userpic", null, "assign"), o.userNickName = cc11001100_hook("o.userNickName", null, "assign")), o.appid = cc11001100_hook("o.appid", e.appid, "assign"), n.mobileCall(r.getVersion, null, function (e) {
        o.clientver = cc11001100_hook("o.clientver", e.version, "assign"), n.mobileCall(r.getMobileInfo, null, function (e) {
          o.mid = cc11001100_hook("o.mid", e.mid_v2 ? e.mid_v2 : e.mid, "assign"), o.dfid = cc11001100_hook("o.dfid", e.dfid ? e.dfid : "-", "assign"), o.uuid = cc11001100_hook("o.uuid", e.uuid ? e.uuid : o.mid, "assign"), o.osVersion = cc11001100_hook("o.osVersion", e.osVersion ? e.osVersion : "", "assign"), n.isIOS ? o.plat = cc11001100_hook("o.plat", 2, "assign") : o.plat = cc11001100_hook("o.plat", 1, "assign"), i && i(o);
        });
      });
    });else if (n.isInClient() && n.isFXAP) n.mobileCall(625, null, function (t) {
      var r = cc11001100_hook("r", JSON.parse(t.jsonStr), "var-init");
      o.clientver = cc11001100_hook("o.clientver", r.version, "assign"), o.mid = cc11001100_hook("o.mid", r.mid, "assign"), o.uuid = cc11001100_hook("o.uuid", r.uuid ? r.uuid : o.mid, "assign"), o.dfid = cc11001100_hook("o.dfid", r.dfid ? r.dfid : "-", "assign"), o.appid = cc11001100_hook("o.appid", r.appId, "assign"), e.isiOS() ? o.plat = cc11001100_hook("o.plat", 2, "assign") : o.plat = cc11001100_hook("o.plat", 1, "assign"), n.mobileCall(410, null, function (e) {
        1 == JSON.parse(e.jsonStr).status ? n.mobileCall(411, {}, function (e) {
          var n = cc11001100_hook("n", JSON.parse(e.jsonStr).jsonStr ? JSON.parse(e.jsonStr).jsonStr : JSON.parse(e.jsonStr), "var-init");
          o.userid = cc11001100_hook("o.userid", n.kugouId, "assign"), o.token = cc11001100_hook("o.token", n.token, "assign"), o.pic = cc11001100_hook("o.pic", n.userLogo, "assign"), o.nickName = cc11001100_hook("o.nickName", n.nickName, "assign"), i && i(o);
        }) : (o.userid = cc11001100_hook("o.userid", null, "assign"), o.token = cc11001100_hook("o.token", null, "assign"), o.userpic = cc11001100_hook("o.userpic", null, "assign"), o.userNickName = cc11001100_hook("o.userNickName", null, "assign"), i && i(o));
      });
    });else {
      o.appid = cc11001100_hook("o.appid", t || null, "assign"), o.mid = cc11001100_hook("o.mid", e.getKgMid(), "assign"), o.uuid = cc11001100_hook("o.uuid", o.mid, "assign"), o.plat = cc11001100_hook("o.plat", 4, "assign"), o.dfid = cc11001100_hook("o.dfid", e.Cookie.read("kg_dfid") || "-", "assign"), o.userid = cc11001100_hook("o.userid", e.Cookie.read("KuGoo", "KugooID"), "assign"), o.userpic = cc11001100_hook("o.userpic", e.Cookie.read("KuGoo", "Pic"), "assign"), o.userNickName = cc11001100_hook("o.userNickName", e.Cookie.read("KuGoo", "NickName"), "assign"), o.token = cc11001100_hook("o.token", e.Cookie.read("KuGoo", "t"), "assign");
      var a = cc11001100_hook("a", e.Cookie.read("KuGoo", "a_id"), "var-init");
      a && a != o.appid && o.appid && (o.userid = cc11001100_hook("o.userid", null, "assign"), o.token = cc11001100_hook("o.token", null, "assign"), o.userpic = cc11001100_hook("o.userpic", null, "assign"), o.userNickName = cc11001100_hook("o.userNickName", null, "assign")), o.clientver = cc11001100_hook("o.clientver", 1e3, "assign"), o.userNickName = cc11001100_hook("o.userNickName", o.userNickName ? unescape(o.userNickName) : "", "assign"), i && i(o);
    }
  };
});
//# sourceMappingURL=main.min.js.map