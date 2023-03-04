!function (t, n) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = cc11001100_hook("module.exports", n(), "assign") : "function" == typeof define && define.amd ? define(n) : (t = cc11001100_hook("t", t || self, "assign"), t.infSign = cc11001100_hook("t.infSign", n(), "assign"));
}(this, function () {
  "use strict";

  function t(t, n, r) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    return n in t ? Object.defineProperty(t, n, {
      value: cc11001100_hook("value", r, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      writable: cc11001100_hook("writable", !0, "object-key-init")
    }) : t[n] = cc11001100_hook("t[n]", r, "assign"), t;
  }
  function n(t, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", Object.keys(t), "var-init");
    if (Object.getOwnPropertySymbols) {
      var e = cc11001100_hook("e", Object.getOwnPropertySymbols(t), "var-init");
      n && (e = cc11001100_hook("e", e.filter(function (n) {
        return Object.getOwnPropertyDescriptor(t, n).enumerable;
      }), "assign")), r.push.apply(r, e);
    }
    return r;
  }
  function r(r) {
    cc11001100_hook("r", r, "function-parameter");
    for (var e = cc11001100_hook("e", 1, "var-init"); e < arguments.length; e++) {
      var o = cc11001100_hook("o", null != arguments[e] ? arguments[e] : {}, "var-init");
      e % 2 ? n(o, !0).forEach(function (n) {
        t(r, n, o[n]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : n(o).forEach(function (t) {
        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(o, t));
      });
    }
    return r;
  }
  function e(t, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    return n = cc11001100_hook("n", {
      exports: {}
    }, "assign"), t(n, n.exports), n.exports;
  }
  function o(t) {
    cc11001100_hook("t", t, "function-parameter");
    return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
  }
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    return "function" == typeof t.readFloatLE && "function" == typeof t.slice && o(t.slice(0, 0));
  }
  function c() {
    var t,
      n = cc11001100_hook("n", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
      e = cc11001100_hook("e", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", "var-init"),
      o = cc11001100_hook("o", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, "var-init"),
      i = cc11001100_hook("i", !1, "var-init"),
      c = cc11001100_hook("c", !1, "var-init"),
      a = cc11001100_hook("a", "json", "var-init"),
      l = cc11001100_hook("l", r({}, n), "var-init"),
      u = cc11001100_hook("u", s.isInClient(), "var-init");
    "function" == typeof o ? t = cc11001100_hook("t", o, "assign") : (t = cc11001100_hook("t", o.callback, "assign"), i = cc11001100_hook("i", o.useH5 || !1, "assign"), a = cc11001100_hook("a", o.postType || "json", "assign"), c = cc11001100_hook("c", o.isCDN || !1, "assign")), e && ("[object Object]" != Object.prototype.toString.call(e) ? u = cc11001100_hook("u", !1, "assign") : "urlencoded" == a && (u = cc11001100_hook("u", !1, "assign")));
    var f = function () {
      var n = cc11001100_hook("n", new Date().getTime(), "var-init"),
        i = cc11001100_hook("i", [], "var-init"),
        s = cc11001100_hook("s", [], "var-init"),
        u = cc11001100_hook("u", "NVPh5oo715z5DIWAeQlhMDsWXXQV4hwt", "var-init"),
        f = cc11001100_hook("f", {
          srcappid: cc11001100_hook("srcappid", "2919", "object-key-init"),
          clientver: cc11001100_hook("clientver", "20000", "object-key-init"),
          clienttime: cc11001100_hook("clienttime", n, "object-key-init"),
          mid: cc11001100_hook("mid", n, "object-key-init"),
          uuid: cc11001100_hook("uuid", n, "object-key-init"),
          dfid: cc11001100_hook("dfid", "-", "object-key-init")
        }, "var-init");
      c && (delete f.clienttime, delete f.mid, delete f.uuid, delete f.dfid), l = cc11001100_hook("l", r({}, f, {}, l), "assign");
      for (var g in l) i.push(g);
      if (i.sort(), i.forEach(function (t) {
        s.push(t + "=" + l[t]);
      }), e) if ("[object Object]" == Object.prototype.toString.call(e)) {
        if ("json" == a) s.push(JSON.stringify(e));else {
          var b = cc11001100_hook("b", [], "var-init");
          for (var g in e) b.push(g + "=" + e[g]);
          s.push(b.join("&"));
        }
      } else s.push(e);
      s.unshift(u), s.push(u), l.signature = cc11001100_hook("l.signature", d(s.join("")), "assign"), o.log && (console.log("H5签名前参数", s), console.log("H5签名后返回", l)), e ? t && t(l, "[object Object]" == Object.prototype.toString.call(e) && "json" == a ? JSON.stringify(e) : e) : t && t(l);
    };
    if (u && !i) {
      var g = cc11001100_hook("g", !1, "var-init");
      s.mobileCall(764, {
        get: cc11001100_hook("get", l, "object-key-init"),
        post: cc11001100_hook("post", e, "object-key-init")
      }, function (n) {
        return !g && (g = cc11001100_hook("g", !0, "assign"), n && n.status ? (delete n.status, o.log && (console.log("客户端签名前参数", {
          get: cc11001100_hook("get", l, "object-key-init"),
          post: cc11001100_hook("post", e, "object-key-init")
        }), console.log("客户端签名后返回", r({}, l, {}, n))), l = cc11001100_hook("l", r({}, l, {}, n), "assign"), e ? t && t(l, "[object Object]" == Object.prototype.toString.call(e) && "json" == a ? JSON.stringify(e) : e) : t && t(l), !1) : (u = cc11001100_hook("u", !1, "assign"), void f()));
      });
    } else u = cc11001100_hook("u", !1, "assign"), f();
  }
  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var s = cc11001100_hook("s", e(function (t, n) {
      !function (n, r) {
        t.exports = cc11001100_hook("t.exports", function () {
          var t = cc11001100_hook("t", {
            str2Json: function (t) {
              var n = cc11001100_hook("n", {}, "var-init");
              if ("[object String]" === Object.prototype.toString.call(t)) try {
                n = cc11001100_hook("n", JSON.parse(t), "assign");
              } catch (t) {
                n = cc11001100_hook("n", {}, "assign");
              }
              return n;
            },
            json2Str: function (t) {
              var n = cc11001100_hook("n", t, "var-init");
              if ("string" != typeof t) try {
                n = cc11001100_hook("n", JSON.stringify(t), "assign");
              } catch (t) {
                n = cc11001100_hook("n", "", "assign");
              }
              return n;
            },
            _extend: function (t, n) {
              if (n) for (var r in t) n.hasOwnProperty(r) || (n[r] = cc11001100_hook("n[r]", t[r], "assign"));
              return n;
            },
            formatURL: {
              browser: cc11001100_hook("browser", "", "object-key-init"),
              url: cc11001100_hook("url", "", "object-key-init")
            },
            formatSong: {
              filename: cc11001100_hook("filename", "", "object-key-init"),
              filesize: cc11001100_hook("filesize", "", "object-key-init"),
              hash: cc11001100_hook("hash", "", "object-key-init"),
              bitrate: cc11001100_hook("bitrate", "", "object-key-init"),
              extname: cc11001100_hook("extname", "", "object-key-init"),
              duration: cc11001100_hook("duration", "", "object-key-init"),
              mvhash: cc11001100_hook("mvhash", "", "object-key-init"),
              m4afilesize: cc11001100_hook("m4afilesize", "", "object-key-init"),
              "320hash": cc11001100_hook("320hash", "", "object-key-init"),
              "320filesize": cc11001100_hook("320filesize", "", "object-key-init"),
              sqhash: cc11001100_hook("sqhash", "", "object-key-init"),
              sqfilesize: cc11001100_hook("sqfilesize", 0, "object-key-init"),
              feetype: cc11001100_hook("feetype", 0, "object-key-init"),
              isfirst: cc11001100_hook("isfirst", 0, "object-key-init")
            },
            formatMV: {
              filename: cc11001100_hook("filename", "", "object-key-init"),
              singername: cc11001100_hook("singername", "", "object-key-init"),
              hash: cc11001100_hook("hash", "", "object-key-init"),
              imgurl: cc11001100_hook("imgurl", "", "object-key-init")
            },
            formatShare: {
              shareName: cc11001100_hook("shareName", "", "object-key-init"),
              topicName: cc11001100_hook("topicName", "", "object-key-init"),
              hash: cc11001100_hook("hash", "", "object-key-init"),
              listID: cc11001100_hook("listID", "", "object-key-init"),
              type: cc11001100_hook("type", "", "object-key-init"),
              suid: cc11001100_hook("suid", "", "object-key-init"),
              slid: cc11001100_hook("slid", "", "object-key-init"),
              imgUrl: cc11001100_hook("imgUrl", "", "object-key-init"),
              filename: cc11001100_hook("filename", "", "object-key-init"),
              duration: cc11001100_hook("duration", "", "object-key-init"),
              shareData: {
                linkUrl: cc11001100_hook("linkUrl", "", "object-key-init"),
                picUrl: cc11001100_hook("picUrl", "", "object-key-init"),
                content: cc11001100_hook("content", "", "object-key-init"),
                title: cc11001100_hook("title", "", "object-key-init")
              }
            },
            cbNum: cc11001100_hook("cbNum", 0, "object-key-init"),
            isIOS: cc11001100_hook("isIOS", !!navigator.userAgent.match(/KGBrowser/gi), "object-key-init"),
            isKugouAndroid: cc11001100_hook("isKugouAndroid", !!navigator.userAgent.match(/kugouandroid/gi), "object-key-init"),
            isAndroid: cc11001100_hook("isAndroid", "undefined" != typeof external && void 0 !== external.superCall, "object-key-init"),
            loadUrl: function (t) {
              var n = cc11001100_hook("n", document.createElement("iframe"), "var-init");
              n.setAttribute("src", t), n.setAttribute("style", "display:none;"), n.setAttribute("height", "0px"), n.setAttribute("width", "0px"), n.setAttribute("frameborder", "0"), document.body.appendChild(n), n.parentNode.removeChild(n), n = cc11001100_hook("n", null, "assign");
            },
            callCmd: function (n) {
              var r = cc11001100_hook("r", t, "var-init");
              if (r.isKugouAndroid) {
                var e = cc11001100_hook("e", {}, "var-init"),
                  o = cc11001100_hook("o", "", "var-init");
                if (n.cmd && (e.cmd = cc11001100_hook("e.cmd", n.cmd, "assign")), n.jsonStr && (e.jsonStr = cc11001100_hook("e.jsonStr", n.jsonStr, "assign")), n.callback && (o = cc11001100_hook("o", "kgandroidmobilecall" + ++r.cbNum + Math.random().toString().substr(2, 9), "assign"), e.callback = cc11001100_hook("e.callback", o, "assign"), window[o] = cc11001100_hook("window[o]", function (t, e) {
                  void 0 !== t && ("[object String]" === Object.prototype.toString.call(t) ? (t = cc11001100_hook("t", "#" === e ? decodeURIComponent(t) : decodeURIComponent(decodeURIComponent(t)), "assign"), n.callback(r.str2Json(t))) : n.callback(t));
                }, "assign")), n.AndroidCallback) {
                  var i = cc11001100_hook("i", r.str2Json(n.jsonStr), "var-init");
                  i.AndroidCallback = cc11001100_hook("i.AndroidCallback", o, "assign"), n.jsonStr = cc11001100_hook("n.jsonStr", r.json2Str(i), "assign"), n.jsonStr && (e.jsonStr = cc11001100_hook("e.jsonStr", n.jsonStr, "assign"));
                }
                var c = cc11001100_hook("c", encodeURIComponent(JSON.stringify(e)), "var-init"),
                  s = cc11001100_hook("s", "kugoujsbridge://start.kugou_jsbridge/?".concat(c), "var-init");
                r.loadUrl(s);
              } else if (r.isAndroid) {
                var a = cc11001100_hook("a", "", "var-init"),
                  l = cc11001100_hook("l", "", "var-init");
                if (n.jsonStr) {
                  if (n.callback && "" !== n.callback && !0 === n.AndroidCallback) {
                    l = cc11001100_hook("l", "kgmobilecall" + ++r.cbNum + Math.random().toString().substr(2, 9), "assign"), window[l] = cc11001100_hook("window[l]", function (t, e) {
                      void 0 !== t && ("[object String]" === Object.prototype.toString.call(t) ? (t = cc11001100_hook("t", "#" === e ? decodeURIComponent(t) : decodeURIComponent(decodeURIComponent(t)), "assign"), n.callback(r.str2Json(t))) : n.callback(t));
                    }, "assign");
                    var u = cc11001100_hook("u", r.str2Json(n.jsonStr), "var-init");
                    u.AndroidCallback = cc11001100_hook("u.AndroidCallback", l, "assign"), n.jsonStr = cc11001100_hook("n.jsonStr", r.json2Str(u), "assign");
                  }
                  try {
                    a = cc11001100_hook("a", external.superCall(n.cmd, n.jsonStr), "assign");
                  } catch (t) {}
                } else try {
                  a = cc11001100_hook("a", external.superCall(n.cmd), "assign");
                } catch (t) {}
                n.callback && "" !== n.callback && "AndroidCallback" != a && (a = cc11001100_hook("a", r.str2Json(a), "assign"), n.callback(a));
              } else {
                var f = cc11001100_hook("f", "", "var-init"),
                  d = cc11001100_hook("d", "", "var-init");
                n.callback && (d = cc11001100_hook("d", "kgmobilecall" + ++r.cbNum + Math.random().toString().substr(2, 9), "assign"), window[d] = cc11001100_hook("window[d]", function (t) {
                  void 0 !== t && n.callback && ("[object String]" === Object.prototype.toString.call(t) ? n.callback(r.str2Json(t)) : n.callback(t));
                }, "assign")), d && "" != d && n.jsonStr && (f = cc11001100_hook("f", 'kugouurl://start.music/?{"cmd":' + n.cmd + ', "jsonStr":' + n.jsonStr + ', "callback":"' + d + '"}', "assign")), d && "" != d && !n.jsonStr && (f = cc11001100_hook("f", 'kugouurl://start.music/?{"cmd":' + n.cmd + ', "callback":"' + d + '"}', "assign")), "" == d && n.jsonStr && (f = cc11001100_hook("f", 'kugouurl://start.music/?{"cmd":' + n.cmd + ', "jsonStr":' + n.jsonStr + "}", "assign")), "" != d || n.jsonStr || (f = cc11001100_hook("f", 'kugouurl://start.music/?{"cmd":' + n.cmd + "}", "assign")), r.loadUrl(f);
              }
            },
            formartData: function (n, r) {
              n && 123 == n && r && (r = cc11001100_hook("r", t._extend(t.formatURL, r), "assign")), n && 123 == n && r && (r = cc11001100_hook("r", t._extend(t.formatURL, r), "assign"));
            }
          }, "var-init");
          return {
            isIOS: cc11001100_hook("isIOS", t.isIOS, "object-key-init"),
            isKugouAndroid: cc11001100_hook("isKugouAndroid", t.isKugouAndroid, "object-key-init"),
            isAndroid: cc11001100_hook("isAndroid", t.isAndroid, "object-key-init"),
            isInClient: function () {
              return !(!t.isAndroid && !t.isKugouAndroid && !t.isIOS);
            },
            mobileCall: function (n, r, e) {
              var o = cc11001100_hook("o", "", "var-init");
              if (r && (o = cc11001100_hook("o", t.json2Str(r), "assign")), !n) return console.error("请输入命令号！"), !1;
              var i = cc11001100_hook("i", {}, "var-init");
              n && (i.cmd = cc11001100_hook("i.cmd", n, "assign")), "" != o && (i.jsonStr = cc11001100_hook("i.jsonStr", o, "assign")), e && (i.callback = cc11001100_hook("i.callback", e, "assign")), n && 186 == n && e && (i.AndroidCallback = cc11001100_hook("i.AndroidCallback", !0, "assign")), t.callCmd(i);
            },
            KgWebMobileCall: function (t, n) {
              if (t) try {
                var r = cc11001100_hook("r", t.split("."), "var-init");
                r.reduce(function (e, o) {
                  if (e[o]) {
                    if (o === r[r.length - 1]) {
                      var i = cc11001100_hook("i", e[o], "var-init");
                      return "function" == typeof i ? (e[o] = cc11001100_hook("e[o]", function (t) {
                        i && i(t), n && n(t);
                      }, "assign"), e[o]) : (console.error("请检查，当前环境变量已注册了对象：" + t + "，且该对象不是方法"), null);
                    }
                    return e[o];
                  }
                  return o === r[r.length - 1] ? e[o] = cc11001100_hook("e[o]", function (t) {
                    n && n(t);
                  }, "assign") : e[o] = cc11001100_hook("e[o]", new Object(), "assign"), e[o];
                }, window);
              } catch (t) {}
            }
          };
        }(), "assign");
      }();
    }), "var-init"),
    a = cc11001100_hook("a", e(function (t) {
      !function () {
        var n = cc11001100_hook("n", "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", "var-init"),
          r = cc11001100_hook("r", {
            rotl: function (t, n) {
              return t << n | t >>> 32 - n;
            },
            rotr: function (t, n) {
              return t << 32 - n | t >>> n;
            },
            endian: function (t) {
              if (t.constructor == Number) return 16711935 & r.rotl(t, 8) | 4278255360 & r.rotl(t, 24);
              for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) t[n] = cc11001100_hook("t[n]", r.endian(t[n]), "assign");
              return t;
            },
            randomBytes: function (t) {
              for (var n = cc11001100_hook("n", [], "var-init"); t > 0; t--) n.push(Math.floor(256 * Math.random()));
              return n;
            },
            bytesToWords: function (t) {
              for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"), e = cc11001100_hook("e", 0, "var-init"); r < t.length; r++, e += cc11001100_hook("e", 8, "assign")) n[e >>> 5] |= cc11001100_hook("n[e >>> 5]", t[r] << 24 - e % 32, "assign");
              return n;
            },
            wordsToBytes: function (t) {
              for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < 32 * t.length; r += cc11001100_hook("r", 8, "assign")) n.push(t[r >>> 5] >>> 24 - r % 32 & 255);
              return n;
            },
            bytesToHex: function (t) {
              for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) n.push((t[r] >>> 4).toString(16)), n.push((15 & t[r]).toString(16));
              return n.join("");
            },
            hexToBytes: function (t) {
              for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r += cc11001100_hook("r", 2, "assign")) n.push(parseInt(t.substr(r, 2), 16));
              return n;
            },
            bytesToBase64: function (t) {
              for (var r = cc11001100_hook("r", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < t.length; e += cc11001100_hook("e", 3, "assign")) for (var o = cc11001100_hook("o", t[e] << 16 | t[e + 1] << 8 | t[e + 2], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < 4; i++) 8 * e + 6 * i <= 8 * t.length ? r.push(n.charAt(o >>> 6 * (3 - i) & 63)) : r.push("=");
              return r.join("");
            },
            base64ToBytes: function (t) {
              t = cc11001100_hook("t", t.replace(/[^A-Z0-9+\/]/gi, ""), "assign");
              for (var r = cc11001100_hook("r", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"), o = cc11001100_hook("o", 0, "var-init"); e < t.length; o = cc11001100_hook("o", ++e % 4, "assign")) 0 != o && r.push((n.indexOf(t.charAt(e - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | n.indexOf(t.charAt(e)) >>> 6 - 2 * o);
              return r;
            }
          }, "var-init");
        t.exports = cc11001100_hook("t.exports", r, "assign");
      }();
    }), "var-init"),
    l = cc11001100_hook("l", {
      utf8: {
        stringToBytes: function (t) {
          return l.bin.stringToBytes(unescape(encodeURIComponent(t)));
        },
        bytesToString: function (t) {
          return decodeURIComponent(escape(l.bin.bytesToString(t)));
        }
      },
      bin: {
        stringToBytes: function (t) {
          for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) n.push(255 & t.charCodeAt(r));
          return n;
        },
        bytesToString: function (t) {
          for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) n.push(String.fromCharCode(t[r]));
          return n.join("");
        }
      }
    }, "var-init"),
    u = cc11001100_hook("u", l, "var-init"),
    f = function (t) {
      return null != t && (o(t) || i(t) || !!t._isBuffer);
    },
    d = cc11001100_hook("d", e(function (t) {
      !function () {
        var n = cc11001100_hook("n", a, "var-init"),
          r = cc11001100_hook("r", u.utf8, "var-init"),
          e = cc11001100_hook("e", f, "var-init"),
          o = cc11001100_hook("o", u.bin, "var-init"),
          i = function (t, c) {
            t.constructor == String ? t = cc11001100_hook("t", c && "binary" === c.encoding ? o.stringToBytes(t) : r.stringToBytes(t), "assign") : e(t) ? t = cc11001100_hook("t", Array.prototype.slice.call(t, 0), "assign") : Array.isArray(t) || (t = cc11001100_hook("t", t.toString(), "assign"));
            for (var s = cc11001100_hook("s", n.bytesToWords(t), "var-init"), a = cc11001100_hook("a", 8 * t.length, "var-init"), l = cc11001100_hook("l", 1732584193, "var-init"), u = cc11001100_hook("u", -271733879, "var-init"), f = cc11001100_hook("f", -1732584194, "var-init"), d = cc11001100_hook("d", 271733878, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < s.length; g++) s[g] = cc11001100_hook("s[g]", 16711935 & (s[g] << 8 | s[g] >>> 24) | 4278255360 & (s[g] << 24 | s[g] >>> 8), "assign");
            s[a >>> 5] |= cc11001100_hook("s[a >>> 5]", 128 << a % 32, "assign"), s[14 + (a + 64 >>> 9 << 4)] = cc11001100_hook("s[14 + (a + 64 >>> 9 << 4)]", a, "assign");
            for (var b = cc11001100_hook("b", i._ff, "var-init"), p = cc11001100_hook("p", i._gg, "var-init"), h = cc11001100_hook("h", i._hh, "var-init"), m = cc11001100_hook("m", i._ii, "var-init"), g = cc11001100_hook("g", 0, "var-init"); g < s.length; g += cc11001100_hook("g", 16, "assign")) {
              var y = cc11001100_hook("y", l, "var-init"),
                j = cc11001100_hook("j", u, "var-init"),
                S = cc11001100_hook("S", f, "var-init"),
                v = cc11001100_hook("v", d, "var-init");
              u = cc11001100_hook("u", m(u = cc11001100_hook("u", m(u = cc11001100_hook("u", m(u = cc11001100_hook("u", m(u = cc11001100_hook("u", h(u = cc11001100_hook("u", h(u = cc11001100_hook("u", h(u = cc11001100_hook("u", h(u = cc11001100_hook("u", p(u = cc11001100_hook("u", p(u = cc11001100_hook("u", p(u = cc11001100_hook("u", p(u = cc11001100_hook("u", b(u = cc11001100_hook("u", b(u = cc11001100_hook("u", b(u = cc11001100_hook("u", b(u, f = cc11001100_hook("f", b(f, d = cc11001100_hook("d", b(d, l = cc11001100_hook("l", b(l, u, f, d, s[g + 0], 7, -680876936), "assign"), u, f, s[g + 1], 12, -389564586), "assign"), l, u, s[g + 2], 17, 606105819), "assign"), d, l, s[g + 3], 22, -1044525330), "assign"), f = cc11001100_hook("f", b(f, d = cc11001100_hook("d", b(d, l = cc11001100_hook("l", b(l, u, f, d, s[g + 4], 7, -176418897), "assign"), u, f, s[g + 5], 12, 1200080426), "assign"), l, u, s[g + 6], 17, -1473231341), "assign"), d, l, s[g + 7], 22, -45705983), "assign"), f = cc11001100_hook("f", b(f, d = cc11001100_hook("d", b(d, l = cc11001100_hook("l", b(l, u, f, d, s[g + 8], 7, 1770035416), "assign"), u, f, s[g + 9], 12, -1958414417), "assign"), l, u, s[g + 10], 17, -42063), "assign"), d, l, s[g + 11], 22, -1990404162), "assign"), f = cc11001100_hook("f", b(f, d = cc11001100_hook("d", b(d, l = cc11001100_hook("l", b(l, u, f, d, s[g + 12], 7, 1804603682), "assign"), u, f, s[g + 13], 12, -40341101), "assign"), l, u, s[g + 14], 17, -1502002290), "assign"), d, l, s[g + 15], 22, 1236535329), "assign"), f = cc11001100_hook("f", p(f, d = cc11001100_hook("d", p(d, l = cc11001100_hook("l", p(l, u, f, d, s[g + 1], 5, -165796510), "assign"), u, f, s[g + 6], 9, -1069501632), "assign"), l, u, s[g + 11], 14, 643717713), "assign"), d, l, s[g + 0], 20, -373897302), "assign"), f = cc11001100_hook("f", p(f, d = cc11001100_hook("d", p(d, l = cc11001100_hook("l", p(l, u, f, d, s[g + 5], 5, -701558691), "assign"), u, f, s[g + 10], 9, 38016083), "assign"), l, u, s[g + 15], 14, -660478335), "assign"), d, l, s[g + 4], 20, -405537848), "assign"), f = cc11001100_hook("f", p(f, d = cc11001100_hook("d", p(d, l = cc11001100_hook("l", p(l, u, f, d, s[g + 9], 5, 568446438), "assign"), u, f, s[g + 14], 9, -1019803690), "assign"), l, u, s[g + 3], 14, -187363961), "assign"), d, l, s[g + 8], 20, 1163531501), "assign"), f = cc11001100_hook("f", p(f, d = cc11001100_hook("d", p(d, l = cc11001100_hook("l", p(l, u, f, d, s[g + 13], 5, -1444681467), "assign"), u, f, s[g + 2], 9, -51403784), "assign"), l, u, s[g + 7], 14, 1735328473), "assign"), d, l, s[g + 12], 20, -1926607734), "assign"), f = cc11001100_hook("f", h(f, d = cc11001100_hook("d", h(d, l = cc11001100_hook("l", h(l, u, f, d, s[g + 5], 4, -378558), "assign"), u, f, s[g + 8], 11, -2022574463), "assign"), l, u, s[g + 11], 16, 1839030562), "assign"), d, l, s[g + 14], 23, -35309556), "assign"), f = cc11001100_hook("f", h(f, d = cc11001100_hook("d", h(d, l = cc11001100_hook("l", h(l, u, f, d, s[g + 1], 4, -1530992060), "assign"), u, f, s[g + 4], 11, 1272893353), "assign"), l, u, s[g + 7], 16, -155497632), "assign"), d, l, s[g + 10], 23, -1094730640), "assign"), f = cc11001100_hook("f", h(f, d = cc11001100_hook("d", h(d, l = cc11001100_hook("l", h(l, u, f, d, s[g + 13], 4, 681279174), "assign"), u, f, s[g + 0], 11, -358537222), "assign"), l, u, s[g + 3], 16, -722521979), "assign"), d, l, s[g + 6], 23, 76029189), "assign"), f = cc11001100_hook("f", h(f, d = cc11001100_hook("d", h(d, l = cc11001100_hook("l", h(l, u, f, d, s[g + 9], 4, -640364487), "assign"), u, f, s[g + 12], 11, -421815835), "assign"), l, u, s[g + 15], 16, 530742520), "assign"), d, l, s[g + 2], 23, -995338651), "assign"), f = cc11001100_hook("f", m(f, d = cc11001100_hook("d", m(d, l = cc11001100_hook("l", m(l, u, f, d, s[g + 0], 6, -198630844), "assign"), u, f, s[g + 7], 10, 1126891415), "assign"), l, u, s[g + 14], 15, -1416354905), "assign"), d, l, s[g + 5], 21, -57434055), "assign"), f = cc11001100_hook("f", m(f, d = cc11001100_hook("d", m(d, l = cc11001100_hook("l", m(l, u, f, d, s[g + 12], 6, 1700485571), "assign"), u, f, s[g + 3], 10, -1894986606), "assign"), l, u, s[g + 10], 15, -1051523), "assign"), d, l, s[g + 1], 21, -2054922799), "assign"), f = cc11001100_hook("f", m(f, d = cc11001100_hook("d", m(d, l = cc11001100_hook("l", m(l, u, f, d, s[g + 8], 6, 1873313359), "assign"), u, f, s[g + 15], 10, -30611744), "assign"), l, u, s[g + 6], 15, -1560198380), "assign"), d, l, s[g + 13], 21, 1309151649), "assign"), f = cc11001100_hook("f", m(f, d = cc11001100_hook("d", m(d, l = cc11001100_hook("l", m(l, u, f, d, s[g + 4], 6, -145523070), "assign"), u, f, s[g + 11], 10, -1120210379), "assign"), l, u, s[g + 2], 15, 718787259), "assign"), d, l, s[g + 9], 21, -343485551), "assign"), l = cc11001100_hook("l", l + y >>> 0, "assign"), u = cc11001100_hook("u", u + j >>> 0, "assign"), f = cc11001100_hook("f", f + S >>> 0, "assign"), d = cc11001100_hook("d", d + v >>> 0, "assign");
            }
            return n.endian([l, u, f, d]);
          };
        i._ff = cc11001100_hook("i._ff", function (t, n, r, e, o, i, c) {
          var s = cc11001100_hook("s", t + (n & r | ~n & e) + (o >>> 0) + c, "var-init");
          return (s << i | s >>> 32 - i) + n;
        }, "assign"), i._gg = cc11001100_hook("i._gg", function (t, n, r, e, o, i, c) {
          var s = cc11001100_hook("s", t + (n & e | r & ~e) + (o >>> 0) + c, "var-init");
          return (s << i | s >>> 32 - i) + n;
        }, "assign"), i._hh = cc11001100_hook("i._hh", function (t, n, r, e, o, i, c) {
          var s = cc11001100_hook("s", t + (n ^ r ^ e) + (o >>> 0) + c, "var-init");
          return (s << i | s >>> 32 - i) + n;
        }, "assign"), i._ii = cc11001100_hook("i._ii", function (t, n, r, e, o, i, c) {
          var s = cc11001100_hook("s", t + (r ^ (n | ~e)) + (o >>> 0) + c, "var-init");
          return (s << i | s >>> 32 - i) + n;
        }, "assign"), i._blocksize = cc11001100_hook("i._blocksize", 16, "assign"), i._digestsize = cc11001100_hook("i._digestsize", 16, "assign"), t.exports = cc11001100_hook("t.exports", function (t, r) {
          if (void 0 === t || null === t) throw new Error("Illegal argument " + t);
          var e = cc11001100_hook("e", n.wordsToBytes(i(t, r)), "var-init");
          return r && r.asBytes ? e : r && r.asString ? o.bytesToString(e) : n.bytesToHex(e);
        }, "assign");
      }();
    }), "var-init");
  return c;
});
//# sourceMappingURL=infSign.min.js.map