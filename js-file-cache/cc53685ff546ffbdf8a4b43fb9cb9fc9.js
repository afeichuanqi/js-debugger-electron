define("wiseindex/tabs/news/activity/postmessage", function () {
  function a(a, h, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    var g = cc11001100_hook("g", {}, "var-init"),
      w = cc11001100_hook("w", c(), "var-init");
    return v ? ($.extend(g, h, {
      type: cc11001100_hook("type", y.TWO_WAY, "object-key-init"),
      sentinel: cc11001100_hook("sentinel", S, "object-key-init"),
      sessionId: cc11001100_hook("sessionId", w, "object-key-init")
    }), b[w] = cc11001100_hook("b[w]", $.Deferred(), "assign"), g.deferTimer = cc11001100_hook("g.deferTimer", setTimeout(function () {
      b[w].reject("timeout");
    }, 1e3), "assign")) : g = cc11001100_hook("g", h, "assign"), a.postMessage(g, "*"), v && b[w].promise();
  }
  function c() {
    return (1e3 * +new Date() + Math.ceil(1e3 * Math.random())).toString(36);
  }
  function h(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    w[a] = cc11001100_hook("w[a]", c, "assign");
  }
  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    delete w[a];
  }
  function g(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return "function" == typeof w[a] ? w[a](c) : void 0;
  }
  var b = cc11001100_hook("b", {}, "var-init"),
    w = cc11001100_hook("w", {}, "var-init"),
    y = cc11001100_hook("y", {
      TWO_WAY: cc11001100_hook("TWO_WAY", "two-way", "object-key-init")
    }, "var-init"),
    S = cc11001100_hook("S", "PM_REQUEST", "var-init"),
    _ = cc11001100_hook("_", "PM_RESPONSE", "var-init");
  return window.addEventListener("message", function (e) {
    var c = cc11001100_hook("c", e.data || {}, "var-init");
    c.type === y.TWO_WAY ? c.sentinel === S ? a(e.source, $.extend({}, c, {
      sentinel: cc11001100_hook("sentinel", _, "object-key-init"),
      data: cc11001100_hook("data", g(c.event, c) || {}, "object-key-init")
    }), !1) : c.sentinel === _ && (c.deferTimer && window.clearTimeout(c.deferTimer), b[c.sessionId] && b[c.sessionId].resolve(c), delete b[c.sessionId], delete c.deferTimer) : g(c.event, c);
  }, !1), {
    addRequestHandle: cc11001100_hook("addRequestHandle", h, "object-key-init"),
    deleteRequestHandle: cc11001100_hook("deleteRequestHandle", v, "object-key-init"),
    sendMessage: cc11001100_hook("sendMessage", a, "object-key-init")
  };
}), define("wiseindex/tabs/news/activity/aio", function () {
  !function (n, o) {
    function e(n, o) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      return d.cleanObj.toString.call(n).slice(8, -1) === o;
    }
    function t(n) {
      cc11001100_hook("n", n, "function-parameter");
      var o = cc11001100_hook("o", f[n], "var-init");
      if (o) return o.exports;
      throw "module " + n + " is undefined";
    }
    function r(n, o) {
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      for (var e, r, i = cc11001100_hook("i", n.split(":"), "var-init"), s = cc11001100_hook("s", i.pop().split("/"), "var-init"), a = cc11001100_hook("a", d, "var-init"); e = cc11001100_hook("e", s.shift(), "assign");) "bdbox" !== e && (r = cc11001100_hook("r", e, "assign"), s.length && (a = cc11001100_hook("a", a[e] = cc11001100_hook("a[e]", a[e] || {}, "assign"), "assign")));
      var c = cc11001100_hook("c", f[n] = cc11001100_hook("f[n]", {
          exports: {}
        }, "assign"), "var-init"),
        u = cc11001100_hook("u", d.isFunction(o) ? o.apply(c, [t, c.exports, c, d]) : o, "var-init");
      u && (c.exports = cc11001100_hook("c.exports", u, "assign")), a[r] = cc11001100_hook("a[r]", c.exports, "assign");
    }
    function i() {
      p.forEach(function (n) {
        n();
      }), p.length = cc11001100_hook("p.length", 0, "assign"), h = cc11001100_hook("h", !0, "assign");
    }
    function s(n) {
      cc11001100_hook("n", n, "function-parameter");
      var o;
      return null == n ? o = cc11001100_hook("o", String(n), "assign") : (o = cc11001100_hook("o", Object.prototype.toString.call(n).toLowerCase(), "assign"), o = cc11001100_hook("o", o.substring(8, o.length - 1), "assign")), o;
    }
    function a(o) {
      cc11001100_hook("o", o, "function-parameter");
      var e = cc11001100_hook("e", o.success || b, "var-init"),
        t = cc11001100_hook("t", {
          imageUrl: cc11001100_hook("imageUrl", "", "object-key-init"),
          mediaType: cc11001100_hook("mediaType", "all", "object-key-init"),
          title: cc11001100_hook("title", "", "object-key-init"),
          content: cc11001100_hook("content", "", "object-key-init"),
          linkUrl: cc11001100_hook("linkUrl", location.href, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", o.error || b, "var-init");
      return d.isFunction(o.success) && (e = cc11001100_hook("e", "_xSHARE_SUCCESS_" + d.getId(), "assign"), n[e] = cc11001100_hook("n[e]", o.success, "assign"), t.success = cc11001100_hook("t.success", e, "assign")), d.isFunction(o.error) && (r = cc11001100_hook("r", "_xSHARE_FAIL_" + d.getId(), "assign"), n[r] = cc11001100_hook("n[r]", o.error, "assign"), t.error = cc11001100_hook("t.error", r, "assign")), d.each(o, function (n, e) {
        "success" !== e && "error" !== e && (e in g ? e = cc11001100_hook("e", g[e], "assign") : "content" !== e || o.title || (t.title = cc11001100_hook("t.title", n, "assign")), t[e] = cc11001100_hook("t[e]", n, "assign"));
      }), d.isArray(t.mediaType) && (t.mediaType = cc11001100_hook("t.mediaType", "all", "assign")), n.BoxShareData || (n.BoxShareData = cc11001100_hook("n.BoxShareData", {
        successcallback: cc11001100_hook("successcallback", e, "object-key-init"),
        errorcallback: cc11001100_hook("errorcallback", r, "object-key-init"),
        options: cc11001100_hook("options", t, "object-key-init")
      }, "assign")), t;
    }
    var c = cc11001100_hook("c", +new Date(), "var-init"),
      u = cc11001100_hook("u", (c + "").slice(-3), "var-init"),
      l = cc11001100_hook("l", navigator.userAgent, "var-init"),
      d = cc11001100_hook("d", {
        isBox: cc11001100_hook("isBox", / baiduboxapp\//i.test(l), "object-key-init"),
        isIOS: cc11001100_hook("isIOS", /(iPhone|iPod|iPad)/.test(l), "object-key-init"),
        isAndroid: cc11001100_hook("isAndroid", /(Android);?[\s\/]+([\d.]+)?/.test(l), "object-key-init"),
        getId: function () {
          return u++;
        },
        emptyArr: cc11001100_hook("emptyArr", [], "object-key-init"),
        emptyFn: function () {},
        cleanObj: {},
        byId: function (n) {
          return d.isString(n) ? o.getElementById(n) : n;
        },
        toArray: function (n) {
          return d.emptyArr.slice.call(n);
        },
        $: function (n, e) {
          return e = cc11001100_hook("e", e && 1 === e.nodeType ? e : o, "assign"), d.toArray(e.querySelectorAll(n));
        }
      }, "var-init");
    "Function,String,Array,Number,RegExp".replace(/[^, ]+/g, function (n) {
      d["is" + n] = cc11001100_hook("d[\"is\" + n]", function (o) {
        return e(o, n);
      }, "assign");
    }), d.isBoolean = cc11001100_hook("d.isBoolean", function (n) {
      return n === !0 || n === !1;
    }, "assign"), d.isObject = cc11001100_hook("d.isObject", function (n) {
      return "object" == typeof n;
    }, "assign"), d.isUndefined = cc11001100_hook("d.isUndefined", function (n) {
      return void 0 === n;
    }, "assign"), d.isWindow = cc11001100_hook("d.isWindow", function (n) {
      return null != n && n == n.window;
    }, "assign"), d.isPlainObject = cc11001100_hook("d.isPlainObject", function (n) {
      return d.isObject(n) && !d.isWindow(n) && Object.getPrototypeOf(n) == Object.prototype;
    }, "assign");
    var f = cc11001100_hook("f", {}, "var-init");
    d.define = cc11001100_hook("d.define", r, "assign");
    var m = function (n, o, e) {
        for (var t, r, i = cc11001100_hook("i", n.split("."), "var-init"), s = cc11001100_hook("s", e || m, "var-init"); t = cc11001100_hook("t", i.shift(), "assign");) "Box" !== t && (r = cc11001100_hook("r", t, "assign"), i.length && (s = cc11001100_hook("s", s[t] = cc11001100_hook("s[t]", s[t] || {}, "assign"), "assign")));
        return s[r] = cc11001100_hook("s[r]", o || {}, "assign"), s[r];
      },
      p = cc11001100_hook("p", [], "var-init"),
      h = cc11001100_hook("h", !1, "var-init");
    if (m.init = cc11001100_hook("m.init", function (n) {
      return "function" != typeof n ? this : (h ? n() : p.push(n), this);
    }, "assign"), "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? i() : o.addEventListener("DOMContentLoaded", i, !1), r("common:bdbox/utils/getVersion", function (o, e, t) {
      var r = function () {
        var o = cc11001100_hook("o", 0, "var-init");
        if (n.baiduboxapp_version) o = cc11001100_hook("o", n.baiduboxapp_version, "assign");else {
          var e,
            t = cc11001100_hook("t", navigator.userAgent, "var-init");
          (e = cc11001100_hook("e", /([\d+.]+)_(?:diordna|enohpi)_/.exec(t), "assign")) ? (e = cc11001100_hook("e", e[1].split("."), "assign"), o = cc11001100_hook("o", e.reverse().join("."), "assign")) : (e = cc11001100_hook("e", /baiduboxapp\/([\d+.]+)/.exec(t), "assign")) && (o = cc11001100_hook("o", e[1], "assign"));
        }
        return r = cc11001100_hook("r", function () {
          return o;
        }, "assign"), o;
      };
      t.exports = cc11001100_hook("t.exports", r, "assign");
    }), r("common:bdbox/utils/version_compare", function (n, o, e) {
      var t = function (n, o) {
        o += cc11001100_hook("o", "", "assign"), n += cc11001100_hook("n", "", "assign");
        for (var e = cc11001100_hook("e", n.split("."), "var-init"), t = cc11001100_hook("t", o.split("."), "var-init"), r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", Math.max(e.length, t.length), "var-init"); i > r; r++) {
          if (e[r] && !t[r] && parseInt(e[r]) > 0 || parseInt(e[r]) > parseInt(t[r])) return 1;
          if (t[r] && !e[r] && parseInt(t[r]) > 0 || parseInt(e[r]) < parseInt(t[r])) return -1;
        }
        return 0;
      };
      e.exports = cc11001100_hook("e.exports", t, "assign");
    }), r("common:bdbox/ios/invokeApp", function (e, t, r, i) {
      r.exports = cc11001100_hook("r.exports", function (e, t, r) {
        if (e && i.isBox) {
          var s = cc11001100_hook("s", [], "var-init");
          if (i.isFunction(t)) r = cc11001100_hook("r", t, "assign");else for (var a in t) s.push(a + "=" + t[a]);
          if (i.isFunction(r)) {
            var c = cc11001100_hook("c", "_bdbox_js_" + i.getId(), "var-init");
            n[c] = cc11001100_hook("n[c]", function () {
              r.apply(n, [].slice.call(arguments, 0));
            }, "assign"), s.push("func=" + c);
          } else r && s.push("func=" + r);
          s = cc11001100_hook("s", "baiduboxapp://" + e + "?" + s.join("&"), "assign");
          var u = cc11001100_hook("u", "_bdbox_ios_jsbridge", "var-init"),
            l = cc11001100_hook("l", o.getElementById(u), "var-init");
          l ? l.src = cc11001100_hook("l.src", s, "assign") : (l = cc11001100_hook("l", o.createElement("iframe"), "assign"), l.style.display = cc11001100_hook("l.style.display", "none", "assign"), l.id = cc11001100_hook("l.id", u, "assign"), l.src = cc11001100_hook("l.src", s, "assign"), (o.body || o.getElementsByTagName("body")[0]).appendChild(l));
        }
      }, "assign");
    }), r("common:bdbox/android/invokeApp", function (o, e, t, r) {
      function i(o, e, t) {
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        if (t && !r.isArray(t) && (t = cc11001100_hook("t", Array.prototype.slice.call(arguments, 0).slice(2), "assign")), n[o] && n[o][e]) {
          var i = cc11001100_hook("i", n[o][e].apply(n[o], t), "var-init");
          return {
            error: cc11001100_hook("error", 0, "object-key-init"),
            result: cc11001100_hook("result", i, "object-key-init"),
            __from: cc11001100_hook("__from", "js", "object-key-init")
          };
        }
        var u = cc11001100_hook("u", c(), "var-init");
        if (a(u, 4.8) >= 0) {
          var l = cc11001100_hook("l", s(o, e, t), "var-init");
          return l = cc11001100_hook("l", l ? JSON.parse(l) : {}, "assign"), l.__from = cc11001100_hook("l.__from", "app", "assign"), l;
        }
        if ("4.7.1" === u || "4.7" == u) {
          var d = cc11001100_hook("d", s(o, e, t), "var-init");
          return {
            error: cc11001100_hook("error", 0, "object-key-init"),
            result: cc11001100_hook("result", d, "object-key-init"),
            __from: cc11001100_hook("__from", "app4.7", "object-key-init")
          };
        }
        return {
          error: cc11001100_hook("error", 200, "object-key-init")
        };
      }
      function s(o, e, t) {
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        if (!r.isBox) return {
          error: cc11001100_hook("error", 201, "object-key-init")
        };
        if (!r.isAndroid) return {
          error: cc11001100_hook("error", 202, "object-key-init")
        };
        var i = cc11001100_hook("i", {
          obj: cc11001100_hook("obj", o, "object-key-init"),
          func: cc11001100_hook("func", e, "object-key-init"),
          args: cc11001100_hook("args", t ? t : [], "object-key-init")
        }, "var-init");
        try {
          return n.prompt("BdboxApp:" + JSON.stringify(i));
        } catch (s) {
          return {
            error: cc11001100_hook("error", 201, "object-key-init")
          };
        }
      }
      var a = cc11001100_hook("a", o("common:bdbox/utils/version_compare"), "var-init"),
        c = cc11001100_hook("c", o("common:bdbox/utils/getVersion"), "var-init");
      t.exports = cc11001100_hook("t.exports", i, "assign");
    }), r("common:bdbox/utils/detect", function (o, e, t, r) {
      function i(o) {
        cc11001100_hook("o", o, "function-parameter");
        var e = cc11001100_hook("e", {
          name: cc11001100_hook("name", "unknown", "object-key-init"),
          version: cc11001100_hook("version", 0, "object-key-init")
        }, "var-init");
        this === n || this.os || (this.os = cc11001100_hook("this.os", e, "assign")), o = cc11001100_hook("o", o || navigator.userAgent, "assign");
        var t = cc11001100_hook("t", {
          Weibo: cc11001100_hook("Weibo", /weibo/i, "object-key-init"),
          Wechat: cc11001100_hook("Wechat", /micromessenger\//i, "object-key-init"),
          QQ: cc11001100_hook("QQ", /QQ\//, "object-key-init")
        }, "var-init");
        for (var r in t) t.hasOwnProperty(r) && (e["is" + r] = cc11001100_hook("e[\"is\" + r]", t[r].test(o), "assign"));
        e.isUC = cc11001100_hook("e.isUC", o.match(/UC/) || n.ucweb || n.ucbrowser, "assign");
        var i = cc11001100_hook("i", o.match(/(Android);?\s+([\d.]+)?/), "var-init");
        if (i) return e.android = cc11001100_hook("e.android", !0, "assign"), e.version = cc11001100_hook("e.version", i[2], "assign"), e.name = cc11001100_hook("e.name", "android", "assign"), e;
        var s = cc11001100_hook("s", o.match(/(iPad).*OS\s([\d_]+)/), "var-init"),
          a = cc11001100_hook("a", o.match(/(iPod)(.*OS\s([\d_]+))?/), "var-init"),
          c = cc11001100_hook("c", !s && o.match(/(iPhone\sOS)\s([\d_]+)/), "var-init");
        return c && !a ? (e.ios = cc11001100_hook("e.ios", e.iphone = cc11001100_hook("e.iphone", !0, "assign"), "assign"), e.version = cc11001100_hook("e.version", c[2].replace(/_/g, "."), "assign"), e.name = cc11001100_hook("e.name", "ios", "assign"), e) : s ? (e.ios = cc11001100_hook("e.ios", e.ipad = cc11001100_hook("e.ipad", !0, "assign"), "assign"), e.name = cc11001100_hook("e.name", "ios", "assign"), e.version = cc11001100_hook("e.version", s[2].replace(/_/g, "."), "assign"), e) : a ? (e.name = cc11001100_hook("e.name", "ios", "assign"), e.ios = cc11001100_hook("e.ios", e.ipod = cc11001100_hook("e.ipod", !0, "assign"), "assign"), e.version = cc11001100_hook("e.version", a[3] ? a[3].replace(/_/g, ".") : null, "assign"), e) : e;
      }
      i.apply(r), t.exports = cc11001100_hook("t.exports", i, "assign");
    }), r("common:bdbox/each", function (n, o, e) {
      function t(n) {
        cc11001100_hook("n", n, "function-parameter");
        var o;
        return null == n ? o = cc11001100_hook("o", String(n), "assign") : (o = cc11001100_hook("o", Object.prototype.toString.call(n).toLowerCase(), "assign"), o = cc11001100_hook("o", o.substring(8, o.length - 1), "assign")), o;
      }
      e.exports = cc11001100_hook("e.exports", function (n, o, e) {
        if ("object" == typeof n) {
          var r,
            i,
            s = cc11001100_hook("s", t(n), "var-init");
          if (e = cc11001100_hook("e", e || n, "assign"), "array" === s || "arguments" === s || "nodelist" === s) {
            for (r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", n.length, "assign"); i > r; r++) if (o.call(e, n[r], r, n) === !1) return;
          } else for (r in n) if (n.hasOwnProperty(r) && o.call(e, n[r], r, n) === !1) return;
        }
      }, "assign");
    }), r("common:bdbox/client/nativeShare", function (e, t, r, i) {
      function s(o) {
        cc11001100_hook("o", o, "function-parameter");
        var e = cc11001100_hook("e", {
          wechatIcon: cc11001100_hook("wechatIcon", location.protocol + "//m.baidu.com/static/search/logo300.png", "object-key-init"),
          type: cc11001100_hook("type", "url", "object-key-init"),
          mediaType: cc11001100_hook("mediaType", "all", "object-key-init"),
          linkUrl: cc11001100_hook("linkUrl", location.href, "object-key-init"),
          title: cc11001100_hook("title", c.title, "object-key-init"),
          success: cc11001100_hook("success", "console.log", "object-key-init"),
          error: cc11001100_hook("error", "console.log", "object-key-init")
        }, "var-init");
        each(o || {}, function (n, o) {
          e[o] = cc11001100_hook("e[o]", n, "assign");
        }), e.image && (e.imageUrl = cc11001100_hook("e.imageUrl", e.image, "assign")), e.iconUrl && !e.imageUrl && "url" === e.type && (e.imageUrl = cc11001100_hook("e.imageUrl", e.iconUrl, "assign"));
        var t = cc11001100_hook("t", {}, "var-init");
        ["success", "error"].forEach(function (o) {
          var r = cc11001100_hook("r", o, "var-init");
          i.isFunction(e[o]) && (r = cc11001100_hook("r", "_xSHARE_SUCCESS_" + i.getId(), "assign"), n[r] = cc11001100_hook("n[r]", e[o], "assign")), t[o + "callback"] = cc11001100_hook("t[o + \"callback\"]", r, "assign"), delete e[o];
        }), t.options = cc11001100_hook("t.options", e, "assign"), t.options.imageUrl && i.isAndroid && a(i.version, "6.5") < 0 && delete t.options.imageUrl, n.BoxShareData = cc11001100_hook("n.BoxShareData", t, "assign");
        var r = cc11001100_hook("r", e.wechatIcon, "var-init");
        if (/micromessenger\//i.test(navigator.userAgent) && r && r.length > 20) {
          var s = cc11001100_hook("s", c.createElement("div"), "var-init");
          s.id = cc11001100_hook("s.id", "wa-generalevent-wx-logo", "assign"), s.style.display = cc11001100_hook("s.style.display", "none", "assign"), s.innerHTML = cc11001100_hook("s.innerHTML", '<img src="' + r + '"/>', "assign");
          var u = cc11001100_hook("u", c.body.firstChild, "var-init");
          u ? c.body.insertBefore(s, u) : c.body.appendChild(s);
        }
      }
      var a = cc11001100_hook("a", e("common:bdbox/utils/version_compare"), "var-init"),
        c = cc11001100_hook("c", o, "var-init");
      r.exports = cc11001100_hook("r.exports", s, "assign");
    }), r("common:bdbox/utils/ready", function (n, e, t) {
      function r() {
        s.forEach(function (n) {
          n();
        }), s.length = cc11001100_hook("s.length", 0, "assign"), a = cc11001100_hook("a", !0, "assign");
      }
      function i(n) {
        cc11001100_hook("n", n, "function-parameter");
        "function" == typeof n && (a ? n() : s.push(n));
      }
      var s = cc11001100_hook("s", [], "var-init"),
        a = cc11001100_hook("a", !1, "var-init");
      "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? r() : o.addEventListener("DOMContentLoaded", r, !1), t.exports = cc11001100_hook("t.exports", i, "assign");
    }), d.version = cc11001100_hook("d.version", d.utils.getVersion(), "assign"), d.version_compare = cc11001100_hook("d.version_compare", d.utils.version_compare, "assign"), each = cc11001100_hook("each", d.each, "assign"), d.nativeShare = cc11001100_hook("d.nativeShare", d.client.nativeShare, "assign"), d.type = cc11001100_hook("d.type", s, "assign"), d.canI = cc11001100_hook("d.canI", function (n, o, e) {
      return d.version_compare(d.version, n) >= 0 ? d.isFunction(o) && o() : d.isFunction(e) && e(), d;
    }, "assign"), r("common:bdbox/client/o2o", function (n, o, e, t) {
      var r = cc11001100_hook("r", n("common:bdbox/android/invokeApp"), "var-init"),
        i = cc11001100_hook("i", n("common:bdbox/ios/invokeApp"), "var-init"),
        s = cc11001100_hook("s", encodeURIComponent, "var-init"),
        a = cc11001100_hook("a", n("common:bdbox/each"), "var-init"),
        c = cc11001100_hook("c", t.isAndroid ? function (n, o) {
          t.isObject(n) && (o = cc11001100_hook("o", n, "assign"), n = cc11001100_hook("n", n.url, "assign"), delete o.url);
          var e = cc11001100_hook("e", ["S.bdsb_light_start_url=" + s(n)], "var-init");
          if (t.isObject(o)) {
            var i = cc11001100_hook("i", {
              color: cc11001100_hook("color", "i.extra_actionbar_color_id", "object-key-init"),
              appid: cc11001100_hook("appid", "S.bdsb_wallet_appid", "object-key-init")
            }, "var-init");
            a(o, function (n, o) {
              "color" === o && (n = cc11001100_hook("n", 4278190080 | parseInt("0x" + n), "assign")), o = cc11001100_hook("o", i[o] || o, "assign"), e.push(o + "=" + n);
            });
          }
          e = cc11001100_hook("e", e.join(";"), "assign"), r("Bdbox_android_utils", "command", [JSON.stringify({
            intent: cc11001100_hook("intent", "intent:#Intent;" + e + ";end", "object-key-init"),
            "class": cc11001100_hook("class", "com.baidu.searchbox.wallet.WalletServiceActivity", "object-key-init"),
            min_v: cc11001100_hook("min_v", "16783629", "object-key-init"),
            mode: cc11001100_hook("mode", "0", "object-key-init")
          })]);
        } : function (n, o) {
          t.isObject(n) && (o = cc11001100_hook("o", n, "assign"), n = cc11001100_hook("n", n.url, "assign"), delete o.url);
          var e = cc11001100_hook("e", {
            openurl: cc11001100_hook("openurl", s(n), "object-key-init"),
            minver: cc11001100_hook("minver", "5.3.0.0", "object-key-init"),
            isla: cc11001100_hook("isla", 0, "object-key-init"),
            opentype: cc11001100_hook("opentype", 1, "object-key-init"),
            append: cc11001100_hook("append", 0, "object-key-init"),
            rbtnstyle: cc11001100_hook("rbtnstyle", 2, "object-key-init")
          }, "var-init");
          if (t.isObject(o)) {
            var r = cc11001100_hook("r", {
              color: cc11001100_hook("color", "barcolor", "object-key-init")
            }, "var-init");
            a(o, function (n, o) {
              o = cc11001100_hook("o", r[o] || o, "assign"), e[o] = cc11001100_hook("e[o]", n, "assign");
            });
          }
          e.appid && (e.isla = cc11001100_hook("e.isla", 1, "assign")), i("easybrowse", e);
        }, "var-init");
      e.exports = cc11001100_hook("e.exports", c, "assign");
    }), d.o2o = cc11001100_hook("d.o2o", d.client.o2o, "assign"), "android" === d.os.name ? m("card", {
      query: function (n, o) {
        if (m.version_compare(m.version, "5.0") < 0) return this;
        var e, t;
        m.isArray(n) ? e = cc11001100_hook("e", [JSON.stringify(n)], "assign") : (t = cc11001100_hook("t", m.toArray(arguments), "assign"), o = cc11001100_hook("o", t.pop(), "assign"), m.isFunction(o) ? e = cc11001100_hook("e", t, "assign") : (e = cc11001100_hook("e", m.toArray(arguments), "assign"), o = cc11001100_hook("o", null, "assign")), e = cc11001100_hook("e", [JSON.stringify(e)], "assign"));
        var r = cc11001100_hook("r", m.android.invokeApp("Bdbox_android_card", "mquery", e), "var-init");
        return r = cc11001100_hook("r", 0 === r.error && r.result ? JSON.parse(r.result) : !1, "assign"), m.isFunction(o) && o(r), r;
      },
      add: function (o, e) {
        if (m.version_compare(m.version, "5.0") < 0) return this;
        var t, r;
        m.isString(o) ? t = cc11001100_hook("t", [o], "assign") : m.isArray(o) ? t = cc11001100_hook("t", [JSON.stringify(o)], "assign") : (r = cc11001100_hook("r", m.toArray(arguments), "assign"), e = cc11001100_hook("e", r.pop(), "assign"), m.isFunction(e) ? t = cc11001100_hook("t", r, "assign") : (t = cc11001100_hook("t", m.toArray(arguments), "assign"), e = cc11001100_hook("e", null, "assign")), t = cc11001100_hook("t", [JSON.stringify(t)], "assign"));
        var i = cc11001100_hook("i", null, "var-init");
        if (m.version_compare(m.version, "5.5") >= 0) {
          var s = cc11001100_hook("s", "", "var-init");
          m.isFunction(e) && (s = cc11001100_hook("s", "__box_card_" + m.getId(), "assign"), n[s] = cc11001100_hook("n[s]", function (n) {
            var o = cc11001100_hook("o", JSON.parse(n), "var-init"),
              t = cc11001100_hook("t", !1, "var-init");
            for (var r in o) {
              t = cc11001100_hook("t", o[r].st, "assign");
              break;
            }
            e(t);
          }, "assign")), i = cc11001100_hook("i", m.android.invokeApp("Bdbox_android_card", "madd", t.concat([s, 0])), "assign");
        } else i = cc11001100_hook("i", m.android.invokeApp("Bdbox_android_card", "madd", t), "assign");
        return i;
      }
    }) : m("card", {
      query: function (n, o) {
        if (m.version_compare(m.version, "5.0") < 0) return this;
        var e, t;
        m.isArray(n) ? e = cc11001100_hook("e", [JSON.stringify(n)], "assign") : (t = cc11001100_hook("t", m.toArray(arguments), "assign"), o = cc11001100_hook("o", t.pop(), "assign"), m.isFunction(o) ? e = cc11001100_hook("e", t, "assign") : (e = cc11001100_hook("e", m.toArray(arguments), "assign"), o = cc11001100_hook("o", null, "assign")), e = cc11001100_hook("e", [JSON.stringify(e)], "assign"));
        var r = function (n) {
          m.isFunction(o) && o(JSON.parse(n)), r = cc11001100_hook("r", null, "assign");
        };
        m.ios.invokeApp("cardMquery", {
          params: cc11001100_hook("params", encodeURIComponent(e), "object-key-init")
        }, r);
      },
      add: function (n, o) {
        if (m.version_compare(m.version, "5.0") < 0) return this;
        var e, t;
        m.isString(n) ? e = cc11001100_hook("e", [n], "assign") : m.isArray(n) ? e = cc11001100_hook("e", [JSON.stringify(n)], "assign") : (t = cc11001100_hook("t", m.toArray(arguments), "assign"), o = cc11001100_hook("o", t.pop(), "assign"), m.isFunction(o) ? e = cc11001100_hook("e", t, "assign") : (e = cc11001100_hook("e", m.toArray(arguments), "assign"), o = cc11001100_hook("o", null, "assign")), e = cc11001100_hook("e", [JSON.stringify(e)], "assign"));
        var r = function (n) {
          var e = cc11001100_hook("e", JSON.parse(n), "var-init"),
            t = cc11001100_hook("t", !1, "var-init");
          for (var i in e) {
            t = cc11001100_hook("t", e[i].st, "assign");
            break;
          }
          m.isFunction(o) && o(t), r = cc11001100_hook("r", null, "assign");
        };
        return m.ios.invokeApp("cardMadd", {
          params: cc11001100_hook("params", encodeURIComponent(e), "object-key-init"),
          gohome: cc11001100_hook("gohome", "0", "object-key-init")
        }, r), !0;
      }
    }), r("common:bdbox/utils/jsonToQuery", function (n, o, e, t) {
      e.exports = cc11001100_hook("e.exports", function (n) {
        if (t.isString(n)) return n;
        var o = cc11001100_hook("o", [], "var-init");
        for (var e in n) o.push(e + "=" + n[e]);
        return o.join("&");
      }, "assign");
    }), r("common:bdbox/io/loadJS", function (e, t, r, i) {
      function s(e, t, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var s,
          u,
          l,
          d = cc11001100_hook("d", o.createElement("script"), "var-init");
        i.isString(e) ? (s = cc11001100_hook("s", e, "assign"), i.isFunction(t) && (r = cc11001100_hook("r", t, "assign"), t = cc11001100_hook("t", null, "assign"))) : (s = cc11001100_hook("s", e.url, "assign"), t = cc11001100_hook("t", e.data, "assign"), r = cc11001100_hook("r", e.success, "assign"), u = cc11001100_hook("u", e.error || i.emptyFn, "assign"), l = cc11001100_hook("l", e.timeout, "assign")), i.isObject(t) && (t = cc11001100_hook("t", c(t), "assign")), t && (s += cc11001100_hook("s", (-1 === s.indexOf("?") ? "?" : "&") + t, "assign")), s = cc11001100_hook("s", s.replace(/[&?]{1,2}/, "?"), "assign");
        var f;
        /=\?/.test(s) && (f = cc11001100_hook("f", "_box_jsonp" + i.getId(), "assign"), s = cc11001100_hook("s", s.replace(/=\?/, "=" + f), "assign"));
        var m = cc11001100_hook("m", a(), "var-init");
        l = cc11001100_hook("l", l || 2e4, "assign"), d.type = cc11001100_hook("d.type", "text/javascript", "assign"), d.src = cc11001100_hook("d.src", s, "assign");
        var p,
          h = cc11001100_hook("h", !0, "var-init"),
          v = function () {
            f && delete n[f], p && clearTimeout(p), d.onload = cc11001100_hook("d.onload", d.onreadystatechange = cc11001100_hook("d.onreadystatechange", d.onerror = cc11001100_hook("d.onerror", null, "assign"), "assign"), "assign"), d = cc11001100_hook("d", null, "assign");
          },
          g = function () {
            !d || d.readyState && !/loaded|complete/.test(d.readyState) || (v(), h && i.isFunction(r) && r.apply(null, i.toArray(arguments)), h = cc11001100_hook("h", !1, "assign"));
          },
          b = function (n) {
            v(), h && u(n), h = cc11001100_hook("h", !1, "assign");
          };
        f && (n[f] = cc11001100_hook("n[f]", g, "assign")), p = cc11001100_hook("p", setTimeout(function () {
          v(), h && u("timeout"), h = cc11001100_hook("h", !1, "assign");
        }, l), "assign"), d.onload = cc11001100_hook("d.onload", d.onreadystatechange = cc11001100_hook("d.onreadystatechange", d.onerror = cc11001100_hook("d.onerror", g, "assign"), "assign"), "assign"), d.onerror = cc11001100_hook("d.onerror", b, "assign"), m.appendChild(d);
      }
      function a() {
        return o.head || o.getElementsByTagName("head")[0] || o.documentElement;
      }
      var c = cc11001100_hook("c", e("common:bdbox/utils/jsonToQuery"), "var-init");
      i.emptyFn, r.exports = cc11001100_hook("r.exports", s, "assign");
    }), r("common:bdbox/utils/queryToJson", function (n, o, e) {
      e.exports = cc11001100_hook("e.exports", function (n) {
        try {
          n = cc11001100_hook("n", n ? decodeURIComponent(n) : "", "assign");
        } catch (o) {
          n = cc11001100_hook("n", "", "assign");
        }
        var e = cc11001100_hook("e", n.split("?"), "var-init"),
          t = cc11001100_hook("t", e[1] ? e[1] : e[0], "var-init"),
          r = cc11001100_hook("r", t.split("&"), "var-init"),
          i = cc11001100_hook("i", {}, "var-init");
        return r.forEach(function (n) {
          n = cc11001100_hook("n", n.split("="), "assign"), n[0].length > 0 && (i[n[0]] = cc11001100_hook("i[n[0]]", n[1] || "", "assign"));
        }), i;
      }, "assign");
    }), r("common:bdbox/extend", function (n, o, e, t) {
      function r(n, o, e) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        for (var t in o) e && (i(o[t]) || s(o[t])) ? (i(o[t]) && !i(n[t]) && (n[t] = cc11001100_hook("n[t]", {}, "assign")), s(o[t]) && !s(n[t]) && (n[t] = cc11001100_hook("n[t]", [], "assign")), r(n[t], o[t], e)) : c(o[t]) || (n[t] = cc11001100_hook("n[t]", o[t], "assign"));
      }
      var i = cc11001100_hook("i", t.isPlainObject, "var-init"),
        s = cc11001100_hook("s", t.isArray, "var-init"),
        a = cc11001100_hook("a", t.isBoolean, "var-init"),
        c = cc11001100_hook("c", t.isUndefined, "var-init");
      e.exports = cc11001100_hook("e.exports", function (n) {
        var o,
          e = cc11001100_hook("e", t.emptyArr.slice.call(arguments, 1), "var-init");
        return a(n) && (o = cc11001100_hook("o", n, "assign"), n = cc11001100_hook("n", e.shift(), "assign")), e.forEach(function (e) {
          r(n, e, o);
        }), n;
      }, "assign");
    }), r("common:bdbox/utils/ready", function (n, e, t) {
      function r() {
        s.forEach(function (n) {
          n();
        }), s.length = cc11001100_hook("s.length", 0, "assign"), a = cc11001100_hook("a", !0, "assign");
      }
      function i(n) {
        cc11001100_hook("n", n, "function-parameter");
        "function" == typeof n && (a ? n() : s.push(n));
      }
      var s = cc11001100_hook("s", [], "var-init"),
        a = cc11001100_hook("a", !1, "var-init");
      "complete,loaded,interactive".indexOf(o.readyState) > -1 && o.body ? r() : o.addEventListener("DOMContentLoaded", r, !1), t.exports = cc11001100_hook("t.exports", i, "assign");
    }), r("common:bdbox/utils/detect", function (o, e, t, r) {
      function i(o) {
        cc11001100_hook("o", o, "function-parameter");
        var e = cc11001100_hook("e", {
          name: cc11001100_hook("name", "unknown", "object-key-init"),
          version: cc11001100_hook("version", 0, "object-key-init")
        }, "var-init");
        this === n || this.os || (this.os = cc11001100_hook("this.os", e, "assign")), o = cc11001100_hook("o", o || navigator.userAgent, "assign");
        var t = cc11001100_hook("t", {
          Weibo: cc11001100_hook("Weibo", /weibo/i, "object-key-init"),
          Wechat: cc11001100_hook("Wechat", /micromessenger\//i, "object-key-init"),
          QQ: cc11001100_hook("QQ", /QQ\//, "object-key-init")
        }, "var-init");
        for (var r in t) t.hasOwnProperty(r) && (e["is" + r] = cc11001100_hook("e[\"is\" + r]", t[r].test(o), "assign"));
        e.isUC = cc11001100_hook("e.isUC", o.match(/UC/) || n.ucweb || n.ucbrowser, "assign");
        var i = cc11001100_hook("i", o.match(/(Android);?\s+([\d.]+)?/), "var-init");
        if (i) return e.android = cc11001100_hook("e.android", !0, "assign"), e.version = cc11001100_hook("e.version", i[2], "assign"), e.name = cc11001100_hook("e.name", "android", "assign"), e;
        var s = cc11001100_hook("s", o.match(/(iPad).*OS\s([\d_]+)/), "var-init"),
          a = cc11001100_hook("a", o.match(/(iPod)(.*OS\s([\d_]+))?/), "var-init"),
          c = cc11001100_hook("c", !s && o.match(/(iPhone\sOS)\s([\d_]+)/), "var-init");
        return c && !a ? (e.ios = cc11001100_hook("e.ios", e.iphone = cc11001100_hook("e.iphone", !0, "assign"), "assign"), e.version = cc11001100_hook("e.version", c[2].replace(/_/g, "."), "assign"), e.name = cc11001100_hook("e.name", "ios", "assign"), e) : s ? (e.ios = cc11001100_hook("e.ios", e.ipad = cc11001100_hook("e.ipad", !0, "assign"), "assign"), e.name = cc11001100_hook("e.name", "ios", "assign"), e.version = cc11001100_hook("e.version", s[2].replace(/_/g, "."), "assign"), e) : a ? (e.name = cc11001100_hook("e.name", "ios", "assign"), e.ios = cc11001100_hook("e.ios", e.ipod = cc11001100_hook("e.ipod", !0, "assign"), "assign"), e.version = cc11001100_hook("e.version", a[3] ? a[3].replace(/_/g, ".") : null, "assign"), e) : e;
      }
      i.apply(r), t.exports = cc11001100_hook("t.exports", i, "assign");
    }), r("common:bdbox/schema", function (n, e, t, r) {
      function i(n, e) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        if (n) {
          if (e = cc11001100_hook("e", e || r.emptyFn, "assign"), !r.isBox && r.isIOS && c(a.version, "9.0") >= 0) return void u(function () {
            s(n, e);
          });
          var t = cc11001100_hook("t", Date.now(), "var-init"),
            i = cc11001100_hook("i", o.createElement("IFRAME"), "var-init");
          i.src = cc11001100_hook("i.src", n, "assign"), i.style.position = cc11001100_hook("i.style.position", "absolute", "assign"), i.style.left = cc11001100_hook("i.style.left", "-2000px", "assign"), i.style.top = cc11001100_hook("i.style.top", "-1000px", "assign"), i.style.width = cc11001100_hook("i.style.width", "1px", "assign"), i.style.height = cc11001100_hook("i.style.height", "1px", "assign"), i.style.webkitTransition = cc11001100_hook("i.style.webkitTransition", "all 0.9s", "assign"), i.style.transition = cc11001100_hook("i.style.transition", "all 0.9s", "assign"), o.body.appendChild(i);
          var l = function () {
            o.body.removeChild(i), e(Date.now() - t < 1500 ? !0 : !1);
          };
          i.addEventListener("webkitTransitionEnd", l, !1), i.addEventListener("transitionEnd", l, !1), setTimeout(function () {
            i.style.left = cc11001100_hook("i.style.left", "-1000px", "assign");
          }, 20);
        }
      }
      function s(n, o) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        location.href = cc11001100_hook("location.href", n, "assign"), l && clearTimeout(l), l = cc11001100_hook("l", setTimeout(function () {
          o(!0);
        }, 1200), "assign");
      }
      var a = cc11001100_hook("a", n("common:bdbox/utils/detect")(), "var-init"),
        c = cc11001100_hook("c", n("common:bdbox/utils/version_compare"), "var-init"),
        u = cc11001100_hook("u", n("common:bdbox/utils/ready"), "var-init"),
        l = cc11001100_hook("l", null, "var-init");
      t.exports = cc11001100_hook("t.exports", i, "assign");
    }), r("common:bdbox/monitor", function (o, e, t, r) {
      var i = cc11001100_hook("i", encodeURIComponent, "var-init"),
        s = function (n, o) {
          n += cc11001100_hook("n", n.indexOf("?") < 0 ? "?" : "&", "assign"), this.url = cc11001100_hook("this.url", n, "assign"), this.options = cc11001100_hook("this.options", o, "assign");
        };
      s.prototype.report = cc11001100_hook("s.prototype.report", function (o) {
        o = cc11001100_hook("o", o || "", "assign");
        var e = cc11001100_hook("e", new Image(1, 1), "var-init"),
          t = cc11001100_hook("t", [], "var-init");
        if (r.isObject(o)) {
          for (var s in o) t.push(s + "=" + i(String(o[s])));
          o = cc11001100_hook("o", t.join("&"), "assign");
        }
        var a = cc11001100_hook("a", "_box_mt" + r.getId(), "var-init");
        n[a] = cc11001100_hook("n[a]", e, "assign"), e.onload = cc11001100_hook("e.onload", e.onerror = cc11001100_hook("e.onerror", e.onabort = cc11001100_hook("e.onabort", function () {
          e.onload = cc11001100_hook("e.onload", e.onerror = cc11001100_hook("e.onerror", e.onabort = cc11001100_hook("e.onabort", null, "assign"), "assign"), "assign"), n[a] = cc11001100_hook("n[a]", e = cc11001100_hook("e", null, "assign"), "assign");
        }, "assign"), "assign"), "assign");
        var c = cc11001100_hook("c", this.url + o, "var-init");
        return r.isFunction(this.options.customHandler) && (c = cc11001100_hook("c", this.options.customHandler(c), "assign")), e.src = cc11001100_hook("e.src", c + "&_rnd=" + Math.floor(2147483648 * Math.random()), "assign"), this;
      }, "assign"), s.prototype.main = cc11001100_hook("s.prototype.main", function (n, o) {
        return n && r.isFunction(this[n]) && this[n].apply(this, r.toArray(o || [])), this;
      }, "assign"), t.exports = cc11001100_hook("t.exports", function (n, o) {
        return new s(n, o);
      }, "assign");
    }), r("common:bdbox/clone", function (n, o, e) {
      var t = cc11001100_hook("t", Object.prototype.toString, "var-init"),
        r = function (n, o, e) {
          var t = cc11001100_hook("t", 0, "var-init");
          for (var r in n) if (n.hasOwnProperty(r)) if (e) o[r] = cc11001100_hook("o[r]", n[r], "assign");else if (o(r, n[r], t++)) break;
        },
        i = function (n) {
          var o;
          switch (t.call(n)) {
            case "[object Object]":
              o = cc11001100_hook("o", {}, "assign"), r(n, function (n, e) {
                o[n] = cc11001100_hook("o[n]", i(e), "assign");
              });
              break;
            case "[object Array]":
              o = cc11001100_hook("o", [], "assign"), n.forEach(function (n) {
                o.push(i(n));
              });
              break;
            default:
              o = cc11001100_hook("o", n, "assign");
          }
          return o;
        };
      e.exports = cc11001100_hook("e.exports", i, "assign");
    }), r("common:bdbox/monitor/pblog", function (n, o, e, t) {
      var r = cc11001100_hook("r", n("common:bdbox/monitor"), "var-init"),
        i = cc11001100_hook("i", n("common:bdbox/extend"), "var-init"),
        s = cc11001100_hook("s", n("common:bdbox/utils/queryToJson"), "var-init"),
        a = cc11001100_hook("a", n("common:bdbox/utils/getVersion"), "var-init"),
        c = cc11001100_hook("c", n("common:bdbox/clone"), "var-init"),
        u = cc11001100_hook("u", s(location.search), "var-init"),
        l = cc11001100_hook("l", navigator.userAgent, "var-init"),
        d = cc11001100_hook("d", "//m.baidu.com/tcbox", "var-init"),
        f = cc11001100_hook("f", {
          service: cc11001100_hook("service", "bdbox", "object-key-init"),
          action: cc11001100_hook("action", "pblog", "object-key-init"),
          ctv: cc11001100_hook("ctv", 2, "object-key-init"),
          cen: cc11001100_hook("cen", "uid_ua_ut", "object-key-init"),
          data: {
            appid: cc11001100_hook("appid", "1", "object-key-init"),
            dataid: cc11001100_hook("dataid", "2", "object-key-init"),
            actiontype: cc11001100_hook("actiontype", "1", "object-key-init"),
            actionid: cc11001100_hook("actionid", "2", "object-key-init"),
            actiondata: {
              ref: cc11001100_hook("ref", u.ref || "", "object-key-init"),
              gmv: cc11001100_hook("gmv", u.vmgdb || "", "object-key-init"),
              source: cc11001100_hook("source", u.from || u.ref || "", "object-key-init"),
              boxVersion: cc11001100_hook("boxVersion", a(), "object-key-init"),
              boxPlatform: cc11001100_hook("boxPlatform", l.match(/(iPad|iPhone|iPod)/gim) ? "ios" : "android", "object-key-init")
            }
          }
        }, "var-init"),
        m = cc11001100_hook("m", encodeURIComponent, "var-init");
      u.uid && u.osname && ["osname", "ua", "ut", "from", "cfrom", "uid", "pkgname"].forEach(function (n) {
        u[n] && (f[n] = cc11001100_hook("f[n]", u[n], "assign"));
      });
      var p,
        h = cc11001100_hook("h", r(d, {
          customHandler: function (n) {
            var o = cc11001100_hook("o", [], "var-init");
            if (p) for (var e in p) if (p.hasOwnProperty(e)) {
              var r = cc11001100_hook("r", p[e], "var-init");
              t.isPlainObject(r) && (r = cc11001100_hook("r", JSON.stringify(r), "assign")), o.push(e + "=" + m(r));
            }
            return o.length && (n += cc11001100_hook("n", o.join("&"), "assign")), n;
          }
        }), "var-init");
      h.init = cc11001100_hook("h.init", function (n, o) {
        t.isPlainObject(o) && (f = cc11001100_hook("f", i(f, o), "assign")), f.data.cateid = cc11001100_hook("f.data.cateid", n, "assign");
      }, "assign"), h.pv = cc11001100_hook("h.pv", function (n, o) {
        p = cc11001100_hook("p", c(f), "assign");
        var e = cc11001100_hook("e", p.data, "var-init");
        e.actionid = cc11001100_hook("e.actionid", "1", "assign");
        var t = cc11001100_hook("t", {}, "var-init");
        return t.url = cc11001100_hook("t.url", n || location.href, "assign"), o && (t.u = cc11001100_hook("t.u", o, "assign")), e.actiondata = cc11001100_hook("e.actiondata", i(e.actiondata, t), "assign"), h.report();
      }, "assign"), h.event = cc11001100_hook("h.event", function (n, o, e) {
        if (!n) throw "monitor.tc.event need a evtName";
        if (t.isPlainObject(o) && !e) {
          var r = cc11001100_hook("r", {
            evtName: cc11001100_hook("evtName", n, "object-key-init")
          }, "var-init");
          for (var s in o) r[s] = cc11001100_hook("r[s]", o[s], "assign");
        } else var r = cc11001100_hook("r", {
          evtName: cc11001100_hook("evtName", n, "object-key-init"),
          evtType: cc11001100_hook("evtType", o || "", "object-key-init"),
          evtTag: cc11001100_hook("evtTag", e || "", "object-key-init")
        }, "var-init");
        p = cc11001100_hook("p", c(f), "assign");
        var a = cc11001100_hook("a", p.data, "var-init");
        return a.actionid = cc11001100_hook("a.actionid", "2", "assign"), a.actiondata = cc11001100_hook("a.actiondata", i(a.actiondata, r), "assign"), h.report();
      }, "assign"), e.exports = cc11001100_hook("e.exports", function () {
        h.main.apply(h, arguments);
      }, "assign");
    }), r("common:bdbox/moplus", function (n, o, e, t) {
      var r = cc11001100_hook("r", n("common:bdbox/utils/jsonToQuery"), "var-init"),
        i = cc11001100_hook("i", n("common:bdbox/io/loadJS"), "var-init"),
        s = cc11001100_hook("s", n("common:bdbox/utils/version_compare"), "var-init"),
        a = cc11001100_hook("a", n("common:bdbox/monitor/pblog"), "var-init"),
        c = cc11001100_hook("c", n("common:bdbox/schema"), "var-init"),
        u = cc11001100_hook("u", "com.baidu.searchbox", "var-init"),
        l = cc11001100_hook("l", "http://127.0.0.1:6259/", "var-init"),
        d = cc11001100_hook("d", "http://127.0.0.1:40310/", "var-init"),
        f = cc11001100_hook("f", "inapp_boxserver", "var-init"),
        m = cc11001100_hook("m", "https:" === location.protocol, "var-init"),
        p = cc11001100_hook("p", 500, "var-init"),
        h = cc11001100_hook("h", null, "var-init"),
        v = cc11001100_hook("v", "__moplus_host__", "var-init"),
        g = cc11001100_hook("g", {
          isSendPv: cc11001100_hook("isSendPv", !1, "object-key-init"),
          isHit: cc11001100_hook("isHit", !1, "object-key-init"),
          parseUA: function () {
            var n,
              o,
              e = cc11001100_hook("e", navigator.userAgent, "var-init"),
              t = cc11001100_hook("t", {
                uc: cc11001100_hook("uc", /UCBrowser\/(\S*) \S*/g, "object-key-init"),
                bd: cc11001100_hook("bd", /baidubrowser\/(\S*) \(Baidu/g, "object-key-init"),
                qq: cc11001100_hook("qq", /MQQBrowser\/(\S*) Mobile/g, "object-key-init"),
                chr: cc11001100_hook("chr", /Chrome\/(\S*) Mobile/g, "object-key-init"),
                qh: cc11001100_hook("qh", /360 Aphone Browser \((\S*)\)/g, "object-key-init"),
                sg: cc11001100_hook("sg", /SogouMobileBrowser\/(\S*)/g, "object-key-init"),
                mi: cc11001100_hook("mi", /MiuiBrowser\/(\S*)/g, "object-key-init")
              }, "var-init");
            for (var r in t) {
              var i = cc11001100_hook("i", t[r].exec(e), "var-init");
              if (i) {
                n = cc11001100_hook("n", r, "assign"), o = cc11001100_hook("o", i[1], "assign");
                break;
              }
            }
            return n = cc11001100_hook("n", n ? n : "other", "assign"), o = cc11001100_hook("o", o ? o : "0", "assign"), {
              t: cc11001100_hook("t", n, "object-key-init"),
              v: cc11001100_hook("v", o, "object-key-init")
            };
          },
          parseHost: function () {
            return b.curHost === d ? 1 : 0;
          },
          sendEvt: function (n, o, e, t) {
            this.isHit && this.send(n, o, e, t);
          },
          send: function (n, o, e, t) {
            var r = cc11001100_hook("r", this.parseUA(), "var-init"),
              i = cc11001100_hook("i", r.t, "var-init"),
              s = cc11001100_hook("s", r.v, "var-init"),
              c = cc11001100_hook("c", m ? 0 : 1, "var-init"),
              u = cc11001100_hook("u", this.parseHost(), "var-init");
            a("event", [n, {
              evtType: cc11001100_hook("evtType", o || "", "object-key-init"),
              brName: cc11001100_hook("brName", i, "object-key-init"),
              brVer: cc11001100_hook("brVer", s, "object-key-init"),
              isHttp: cc11001100_hook("isHttp", c, "object-key-init"),
              isNew: cc11001100_hook("isNew", u, "object-key-init"),
              source: cc11001100_hook("source", e || "", "object-key-init"),
              intent: cc11001100_hook("intent", t || "", "object-key-init")
            }]);
          },
          init: function () {
            this.isHit = cc11001100_hook("this.isHit", Date.now() % 100 === 1, "assign"), a("init", [2]);
          }
        }, "var-init"),
        b = function (n, o, e) {
          this.version = cc11001100_hook("this.version", "2.0", "assign"), this.isHttps = cc11001100_hook("this.isHttps", m, "assign"), this.curHost = cc11001100_hook("this.curHost", e || "", "assign"), this.newHost = cc11001100_hook("this.newHost", d, "assign"), this.oldHost = cc11001100_hook("this.oldHost", this.isHttps ? d : l, "assign"), this.MCMDF = cc11001100_hook("this.MCMDF", o || f, "assign"), this._infoFuncs = cc11001100_hook("this._infoFuncs", [], "assign"), this._verFuncs = cc11001100_hook("this._verFuncs", [], "assign"), this.minVersion = cc11001100_hook("this.minVersion", n ? n : 0, "assign"), this.pkgName = cc11001100_hook("this.pkgName", u, "assign"), g.init();
        },
        w = function (n, o) {
          try {
            sessionStorage.setItem(n, o);
          } catch (e) {}
        },
        x = function (n) {
          var o;
          try {
            o = cc11001100_hook("o", sessionStorage.getItem(n), "assign");
          } catch (e) {}
          return o;
        };
      b.prototype = cc11001100_hook("b.prototype", {
        constructor: cc11001100_hook("constructor", b, "object-key-init"),
        setMcmdf: function (n) {
          return this.MCMDF = cc11001100_hook("this.MCMDF", n, "assign"), this;
        },
        setHost: function (n) {
          return this.curHost = cc11001100_hook("this.curHost", n, "assign"), w(v, n), this;
        },
        getHost: function () {
          if (this.isHttps) return this.curHost = cc11001100_hook("this.curHost", this.newHost, "assign"), this.newHost;
          var n = cc11001100_hook("n", x(v), "var-init");
          return n ? (this.curHost = cc11001100_hook("this.curHost", n, "assign"), this.curHost) : void 0;
        },
        api: function (n, o, e, i) {
          if (!n) throw "Moplus.api need an action";
          t.isFunction(o) && (i = cc11001100_hook("i", e, "assign"), e = cc11001100_hook("e", o, "assign"), o = cc11001100_hook("o", {}, "assign"));
          var s = cc11001100_hook("s", n + (~n.indexOf("?") ? "&" : "?") + r(o), "var-init");
          return ~s.indexOf("mcmdf") || (s += cc11001100_hook("s", "&mcmdf=" + this.MCMDF, "assign")), g.sendEvt("api", "send:" + n, this.MCMDF, s), this.request(s, function (o) {
            g.sendEvt("api", (t.isPlainObject(o) && 0 == o.error ? "success:" : "fail:") + n, this.MCMDF, s), e(o);
          }, i);
        },
        getInfo: function (n, o) {
          if (h) return n(h);
          if (this._infoFuncs.push(n), !(this._infoFuncs.length > 1)) {
            var e = cc11001100_hook("e", this, "var-init"),
              r = function (n, o) {
                !o && t.isPlainObject(n) && (h = cc11001100_hook("h", n, "assign"));
                var r;
                for (o && (n = cc11001100_hook("n", {
                  error: cc11001100_hook("error", 33, "object-key-init")
                }, "assign")); r = cc11001100_hook("r", e._infoFuncs.shift(), "assign");) r(n);
              },
              s = cc11001100_hook("s", "getsearchboxinfo?mcmdf=" + this.MCMDF, "var-init");
            if (this.getHost()) {
              var a = cc11001100_hook("a", {
                url: cc11001100_hook("url", this.curHost + s + "&callback=?", "object-key-init"),
                success: cc11001100_hook("success", r, "object-key-init"),
                error: function () {
                  r(null, !0);
                },
                timeout: cc11001100_hook("timeout", o, "object-key-init")
              }, "var-init");
              i(a);
            } else this.request(s, function (n) {
              return 33 === n.error ? r(null, !0) : void r(n);
            }, o);
            return this;
          }
        },
        getHVersion: function (n, o) {
          this._verFuncs.push(n);
          var e = cc11001100_hook("e", this, "var-init");
          if (!(this._verFuncs.length > 1)) {
            var t = function (n) {
              var o;
              for (n = cc11001100_hook("n", e.parseInfo(n), "assign"); o = cc11001100_hook("o", e._verFuncs.shift(), "assign");) o(n);
            };
            return this.getInfo(t, o), this;
          }
        },
        parseInfo: function (n, o) {
          n = cc11001100_hook("n", n || h, "assign"), o = cc11001100_hook("o", o || this.minVersion, "assign");
          var e = cc11001100_hook("e", n.package_infos, "var-init");
          if (!e || 0 === e.length) return !1;
          var t = cc11001100_hook("t", u, "var-init"),
            r = cc11001100_hook("r", {
              offic: {
                name: cc11001100_hook("name", u, "object-key-init"),
                version: cc11001100_hook("version", 0, "object-key-init")
              },
              oem: {
                version: cc11001100_hook("version", 0, "object-key-init")
              }
            }, "var-init");
          return e.forEach(function (n) {
            var e = cc11001100_hook("e", n.version_name, "var-init"),
              i = cc11001100_hook("i", n.package_name, "var-init");
            s(e, o) >= 0 && (i === t ? 1 === s(e, r.offic.version) && (r.offic = cc11001100_hook("r.offic", {
              version: cc11001100_hook("version", e, "object-key-init"),
              name: cc11001100_hook("name", u, "object-key-init")
            }, "assign")) : 1 === s(e, r.oem.version) && (r.oem = cc11001100_hook("r.oem", {
              version: cc11001100_hook("version", e, "object-key-init"),
              name: cc11001100_hook("name", i, "object-key-init")
            }, "assign")));
          }), 0 === r.oem.version && 0 === r.offic.version ? !1 : 0 !== r.offic.version ? r.offic : 0 !== r.oem.version ? r.oem : void 0;
        },
        schema: function (n, o) {
          if (!n.intent) throw "schema intent is empty";
          n.mcmdf || (n.mcmdf = cc11001100_hook("n.mcmdf", this.MCMDF, "assign"));
          var e = function () {
              g.send("schema", "success", n.source, n.intent), t.isFunction(o) && o({
                error: cc11001100_hook("error", 0, "object-key-init"),
                from: cc11001100_hook("from", "schema", "object-key-init")
              });
            },
            r = function () {
              g.send("schema", "fail", n.source, n.intent), t.isFunction(o) && o({
                error: cc11001100_hook("error", 20, "object-key-init"),
                from: cc11001100_hook("from", "schema", "object-key-init")
              });
            },
            i = cc11001100_hook("i", n.schema || "", "var-init");
          if (n.intent && !n.schema) {
            var s = cc11001100_hook("s", n.intent, "var-init");
            -1 == s.indexOf(u) && (g.sendEvt("defaultPKGName", "fail", n.source || "", n.intent), n.minver = cc11001100_hook("n.minver", n.minver ? n.minver : "6.9.1", "assign"));
          }
          i || (i = cc11001100_hook("i", "baiduboxapp://utils?action=sendIntent&params=" + encodeURIComponent(JSON.stringify(n)) + "&minver=" + (n.minver ? n.minver : "6.9"), "assign")), c(i, function (n) {
            n ? r() : e();
          });
        },
        sendIntent: function (n, o, e) {
          var r = cc11001100_hook("r", {}, "var-init");
          if (n && t.isString(n)) {
            var i,
              s = cc11001100_hook("s", this, "var-init"),
              a = cc11001100_hook("a", !0, "var-init");
            return t.isPlainObject(e) ? (r = cc11001100_hook("r", e, "assign"), i = cc11001100_hook("i", e.source || "", "assign"), e.needlog ? g.isHit = cc11001100_hook("g.isHit", e.needlog, "assign") : r.needlog = cc11001100_hook("r.needlog", g.isHit ? 1 : 0, "assign"), e = cc11001100_hook("e", e.timeout, "assign")) : t.isBoolean(e) && (a = cc11001100_hook("a", e, "assign")), r.intent = cc11001100_hook("r.intent", n, "assign"), g.send("sendintent", "send", i, n), this.api("sendintent", {
              intent: cc11001100_hook("intent", encodeURIComponent(n), "object-key-init")
            }, function (e) {
              !e || e && 33 === e.error || !t.isPlainObject(e) ? (g.send("sendintent", "fail", i, n), a ? s.schema(r, o) : (e = cc11001100_hook("e", e || {}, "assign"), e.from = cc11001100_hook("e.from", "moplus", "assign"), o(e))) : (g.send("sendintent", "success", i, n), o(e));
            }, e);
          }
          return this;
        },
        request: function (n, o, e) {
          var r,
            s,
            a = cc11001100_hook("a", this, "var-init"),
            c = cc11001100_hook("c", {
              timeout: cc11001100_hook("timeout", e, "object-key-init")
            }, "var-init");
          t.isFunction(o) && !~n.indexOf("callback=") && (n += cc11001100_hook("n", "&callback=?", "assign"));
          var u = function (n) {
              r = cc11001100_hook("r", "success", "assign"), t.isFunction(o) && o(n);
            },
            l = function () {
              t.isFunction(o) && o({
                error: cc11001100_hook("error", 33, "object-key-init")
              });
            };
          if (a.getHost()) c.url = cc11001100_hook("c.url", a.curHost + n, "assign"), c.success = cc11001100_hook("c.success", u, "assign"), c.error = cc11001100_hook("c.error", l, "assign"), i(c);else if (c.url = cc11001100_hook("c.url", a.newHost + n, "assign"), c.success = cc11001100_hook("c.success", function (n) {
            "success" !== r && (s && clearTimeout(s), a.setHost(a.newHost), u(n));
          }, "assign"), c.error = cc11001100_hook("c.error", function () {
            a.isHttps ? (r = cc11001100_hook("r", "error", "assign"), l()) : "error" === r && l(), r = cc11001100_hook("r", "error", "assign");
          }, "assign"), i(c), !a.isHttps) {
            var d = cc11001100_hook("d", {
              timeout: cc11001100_hook("timeout", e, "object-key-init"),
              url: cc11001100_hook("url", a.oldHost + n, "object-key-init"),
              error: cc11001100_hook("error", c.error, "object-key-init")
            }, "var-init");
            d.success = cc11001100_hook("d.success", function (n) {
              "success" !== r && ("error" === r ? (a.setHost(a.oldHost), u(n)) : s = cc11001100_hook("s", setTimeout(function () {
                a.setHost(a.oldHost), u(n);
              }, p), "assign"));
            }, "assign"), i(d);
          }
          return this;
        }
      }, "assign"), e.exports = cc11001100_hook("e.exports", function (n, o) {
        return new b(n, o);
      }, "assign"), e.exports.Moplus = cc11001100_hook("e.exports.Moplus", b, "assign");
    }), d.version_compare(d.version, "5.3.5") >= 0) {
      var v,
        g = cc11001100_hook("g", {
          image: cc11001100_hook("image", "imageUrl", "object-key-init"),
          url: cc11001100_hook("url", "linkUrl", "object-key-init"),
          order: cc11001100_hook("order", "mediaType", "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", "", "var-init");
      n[b] = cc11001100_hook("n[b]", d.emptyFn, "assign"), d.isAndroid ? (v = cc11001100_hook("v", function (n) {
        if (n.id && d.byId(n.id)) {
          var o = cc11001100_hook("o", n.eventType || "touchstart", "var-init");
          d.byId(n.id).addEventListener(o, function () {
            e(n);
          }, !0);
        }
        var e = function (o) {
          o = cc11001100_hook("o", a(o || n), "assign");
          var e = cc11001100_hook("e", o.error, "var-init"),
            t = cc11001100_hook("t", o.success, "var-init");
          o.iconUrl && o.imageUrl && delete o.imageUrl, d.android.invokeApp("Bdbox_android_utils", "callShare", [JSON.stringify(o), t || "console.log", e || "console.log"]);
        };
        return e;
      }, "assign"), m("share", v)) : (v = cc11001100_hook("v", function (n) {
        if (n.id && d.byId(n.id)) {
          var o = cc11001100_hook("o", n.eventType || "touchstart", "var-init");
          d.byId(n.id).addEventListener(o, function () {
            e(n);
          }, !0);
        }
        var e = function (o) {
          o = cc11001100_hook("o", a(o || n), "assign");
          var e = cc11001100_hook("e", o.error, "var-init"),
            t = cc11001100_hook("t", o.success, "var-init");
          o.iconUrl && !o.imageUrl && (o.imageUrl = cc11001100_hook("o.imageUrl", o.iconUrl, "assign")), o = cc11001100_hook("o", JSON.stringify(o), "assign"), d.ios.invokeApp("callShare", {
            options: cc11001100_hook("options", encodeURIComponent(o), "object-key-init"),
            errorcallback: cc11001100_hook("errorcallback", e || "console.log", "object-key-init"),
            successcallback: cc11001100_hook("successcallback", t || "console.log", "object-key-init")
          });
        };
        return e;
      }, "assign"), m("share", v));
    } else {
      var w = cc11001100_hook("w", [], "var-init"),
        x = function () {
          m._socShare && m._socShare.init ? w.forEach(function (n) {
            m._socShare.init(n);
          }) : setTimeout(x, 3e3);
        };
      d.io.loadJS("//m.baidu.com/static/searchbox/openjs/share.js?v=1.2", x);
      var y = cc11001100_hook("y", {
          source: cc11001100_hook("source", "client_id", "object-key-init"),
          id: cc11001100_hook("id", "dom_id", "object-key-init"),
          image: cc11001100_hook("image", "pic_url", "object-key-init"),
          success: cc11001100_hook("success", "afterRender", "object-key-init")
        }, "var-init"),
        v = function (n) {
          var o = cc11001100_hook("o", {
            content: cc11001100_hook("content", "", "object-key-init"),
            client_id: cc11001100_hook("client_id", "ZVEpDSsmZ0qxa1gmgDAh1Fje", "object-key-init"),
            theme: cc11001100_hook("theme", "native", "object-key-init"),
            dom_id: cc11001100_hook("dom_id", "share", "object-key-init"),
            animate: cc11001100_hook("animate", !0, "object-key-init"),
            pic_url: cc11001100_hook("pic_url", "", "object-key-init"),
            url: cc11001100_hook("url", encodeURIComponent(location.href), "object-key-init")
          }, "var-init");
          return d.isObject(n) && d.each(n, function (n, e) {
            if (e in y && (e = cc11001100_hook("e", y[e], "assign")), "order" === e && d.isArray(n)) {
              var t = cc11001100_hook("t", [], "var-init");
              n.forEach(function (n) {
                "email" === n && (n = cc11001100_hook("n", "mail", "assign")), t.push(n);
              });
            }
            o[e] = cc11001100_hook("o[e]", n, "assign");
          }), delete o.success, delete o.error, delete o.afterRender, "all" === o.order ? o.order = cc11001100_hook("o.order", ["qqdenglu", "sinaweibo", "renren", "kaixin", "mail", "sms"], "assign") : d.isString(o.order) && (o.order = cc11001100_hook("o.order", o.order.split(","), "assign")), m._socShare && m._socShare.init ? m._socShare.init(o) : w.push(o), function () {
            m._socShare.ui._shareBtnClickHandler();
          };
        };
      m("share", v);
    }
    if (r("common:bdbox/distribute", function (n, o, e, t) {
      var r = cc11001100_hook("r", n("common:bdbox/schema"), "var-init");
      n("common:bdbox/utils/detect");
      var i = cc11001100_hook("i", n("common:bdbox/each"), "var-init"),
        s = cc11001100_hook("s", n("common:bdbox/moplus"), "var-init"),
        a = cc11001100_hook("a", t.emptyFn, "var-init"),
        c = cc11001100_hook("c", {
          qqDownloadUrl: cc11001100_hook("qqDownloadUrl", "http://a.app.qq.com/o/simple.jsp?pkgname=com.baidu.searchbox", "object-key-init"),
          androidDownloadUrl: cc11001100_hook("androidDownloadUrl", "", "object-key-init"),
          iosDownloadUrl: cc11001100_hook("iosDownloadUrl", "", "object-key-init"),
          iosFailCallback: cc11001100_hook("iosFailCallback", a, "object-key-init"),
          androidFailCallback: cc11001100_hook("androidFailCallback", a, "object-key-init"),
          iosSchema: cc11001100_hook("iosSchema", "", "object-key-init"),
          androidSchema: cc11001100_hook("androidSchema", "", "object-key-init"),
          androidIntent: cc11001100_hook("androidIntent", "", "object-key-init"),
          inBoxCallback: cc11001100_hook("inBoxCallback", a, "object-key-init")
        }, "var-init"),
        u = function (n) {
          var o = cc11001100_hook("o", this, "var-init");
          n && i(c, function (o, e) {
            n[e] = cc11001100_hook("n[e]", n[e] || o, "assign");
          });
          var e = cc11001100_hook("e", this.url = cc11001100_hook("this.url", n.url, "assign"), "var-init");
          e && "" !== e ? (this.androidIntent = cc11001100_hook("this.androidIntent", "intent://" + e.replace(/^http[s]?:\/\//, "") + "#Intent;scheme=http;action=com.baidu.searchbox.action.VIEW;category=android.intent.category.DEFAULT;end", "assign"), this.iosSchema = cc11001100_hook("this.iosSchema", "baiduboxapp://easybrowse?openurl=" + encodeURIComponent(e) + "&opentype=0&isla=0&append=0&minver=5.3.0.0", "assign")) : ["androidIntent", "iosSchema", "androidSchema"].forEach(function (e) {
            o[e] = cc11001100_hook("o[e]", n[e], "assign");
          }), this.options = cc11001100_hook("this.options", n, "assign"), this.fail = cc11001100_hook("this.fail", function () {
            if (console.log(t.os.name + " fail"), t.isFunction(n[t.os.name + "FailCallback"])) {
              var o = cc11001100_hook("o", n[t.os.name + "FailCallback"](), "var-init");
              if (t.isBoolean(o) && !o) return;
            }
            var e = cc11001100_hook("e", n[t.os.name + "DownloadUrl"], "var-init");
            e && "" !== e && (location.href = cc11001100_hook("location.href", n[t.os.name + "DownloadUrl"], "assign"));
          }, "assign"), this.success = cc11001100_hook("this.success", function () {
            return console.log(t.os.name + " success"), t.isFunction(n[t.os.name + "SuccessCallback"]) ? n[t.os.name + "SuccessCallback"]() : void 0;
          }, "assign");
        };
      u.prototype.wechat = cc11001100_hook("u.prototype.wechat", function () {
        var n = cc11001100_hook("n", this.options, "var-init");
        if (t.isFunction(n.wechatCallback)) {
          var o = cc11001100_hook("o", n.wechatCallback(), "var-init");
          if (t.isBoolean(o) && !o) return;
        }
        n.qqDownloadUrl && "" !== n.qqDownloadUrl && (location.href = cc11001100_hook("location.href", n.qqDownloadUrl, "assign"));
      }, "assign"), u.prototype.run = cc11001100_hook("u.prototype.run", function () {
        var n = cc11001100_hook("n", this, "var-init"),
          o = cc11001100_hook("o", (n.url, n.options), "var-init");
        return t.os.isWechat ? n.wechat() : t.isBox && t.isFunction(o.inBoxCallback) ? o.inBoxCallback() : void this.invoke();
      }, "assign"), u.prototype.invoke = cc11001100_hook("u.prototype.invoke", function () {
        var n = cc11001100_hook("n", this, "var-init");
        if (t.os.android) {
          var o = cc11001100_hook("o", s(), "var-init");
          o.getHVersion(function (e) {
            e ? o.sendIntent(n.androidIntent, function (o) {
              0 == o.error ? n.success() : n.fail();
            }, 1e3) : n.androidSchema ? r(n.androidSchema, function (o) {
              o ? n.fail() : n.success();
            }) : n.fail();
          });
        } else r(n.iosSchema, function (o) {
          o ? n.fail() : n.success();
        });
      }, "assign"), e.exports = cc11001100_hook("e.exports", function (n) {
        return new u(n);
      }, "assign");
    }), each(d, function (n, o) {
      m[o] = cc11001100_hook("m[o]", n, "assign");
    }), n.Box && n.Box.$) for (var S in m) n.Box[S] = cc11001100_hook("n.Box[S]", n.Box[S] || m[S], "assign");else n.Box = cc11001100_hook("n.Box", m, "assign");
  }(window, document);
}), define("wiseindex/tabs/news/activity/popup", function () {
  var a = function (a) {
    var c = cc11001100_hook("c", this, "var-init");
    c.options = cc11001100_hook("c.options", $.extend({
      title: cc11001100_hook("title", "", "object-key-init"),
      content: cc11001100_hook("content", "", "object-key-init"),
      fullView: cc11001100_hook("fullView", !1, "object-key-init"),
      duration: cc11001100_hook("duration", 400, "object-key-init"),
      customClassName: cc11001100_hook("customClassName", "", "object-key-init"),
      onOpen: function () {},
      onClose: function () {}
    }, a), "assign"), c._init();
  };
  return a.prototype = cc11001100_hook("a.prototype", {
    constructor: cc11001100_hook("constructor", a, "object-key-init"),
    version: cc11001100_hook("version", "0.0.1", "object-key-init"),
    _init: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a._preparePopupWrapper(), a._stopScroll(), a.popup();
    },
    _preparePopupWrapper: function () {
      var a = cc11001100_hook("a", this, "var-init"),
        c = cc11001100_hook("c", $(".c-popup-wrapper"), "var-init");
      c.length ? (a.$popupFrame = cc11001100_hook("a.$popupFrame", c, "assign"), a.$popupFrame.empty()) : (a.$popupFrame = cc11001100_hook("a.$popupFrame", $('<div class="c-popup-wrapper"></div>'), "assign"), $(document.body).append(a.$popupFrame));
    },
    _stopScroll: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.$popupFrame.on("touchmove", function (e) {
        e.preventDefault();
      });
    },
    _bindEvent: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.$popupFrame.on("click", ".c-popup-mask,.c-popup-remove", function () {
        a.closePopup();
      });
    },
    _randerContent: function () {
      var a = cc11001100_hook("a", this, "var-init");
      if (a.$popupMask = cc11001100_hook("a.$popupMask", $('<div class="c-popup-mask"></div>'), "assign"), a.$popupModal = cc11001100_hook("a.$popupModal", $('<div class="c-popup-modal"></div>'), "assign"), a.$popupContent = cc11001100_hook("a.$popupContent", $('<div class="c-popup-content"></div>'), "assign"), a.$popupHead = cc11001100_hook("a.$popupHead", $('<div class="c-popup-head"></div>'), "assign"), a.options.title) {
        var c = cc11001100_hook("c", $('<div class="c-popup-title"></div>'), "var-init");
        c.append(a.options.title), a.$popupHead.append(c);
      }
      var h = cc11001100_hook("h", $('<div class="c-popup-remove c-icon">&#xe61a</div>'), "var-init");
      a.$popupHead.append(h), a.$popupContent.append(a.options.content), a.$popupModal.append(a.$popupHead).append(a.$popupContent).addClass(a.options.customClassName), a.$popupFrame.append(a.$popupModal).append(a.$popupMask);
    },
    popup: function () {
      var a = cc11001100_hook("a", this, "var-init"),
        c = cc11001100_hook("c", $(window).height(), "var-init");
      a._randerContent(), a._bindEvent(), a.$popupMask.show().animate({
        opacity: cc11001100_hook("opacity", 1, "object-key-init")
      }, "fast", "ease"), a.$popupModal.show();
      var h = cc11001100_hook("h", a.$popupModal.height(), "var-init");
      (a.options.fullView || h > c) && a.$popupModal.height("100%"), a.$popupModal.animate({
        "-webkit-transform": cc11001100_hook("-webkit-transform", "translate3d(0, 0, 0)", "object-key-init"),
        transform: cc11001100_hook("transform", "translate3d(0, 0, 0)", "object-key-init")
      }, a.options.duration, "ease", function () {
        $(this).css({
          "-webkit-transform": cc11001100_hook("-webkit-transform", "none", "object-key-init"),
          transform: cc11001100_hook("transform", "none", "object-key-init")
        });
      });
    },
    closePopup: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.$popupModal.animate({
        "-webkit-transform": cc11001100_hook("-webkit-transform", "translate3d(0, 100%, 0)", "object-key-init"),
        transform: cc11001100_hook("transform", "translate3d(0, 100%, 0)", "object-key-init")
      }, a.options.duration, "ease", function () {
        $(this).css({
          "-webkit-transform": cc11001100_hook("-webkit-transform", "none", "object-key-init"),
          transform: cc11001100_hook("transform", "none", "object-key-init")
        }).hide(), a.options.onClose(), a._destroy();
      }), a.$popupMask.animate({
        opacity: cc11001100_hook("opacity", 0, "object-key-init")
      }, "fast", "ease", function () {
        $(this).hide();
      });
    },
    _destroy: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.$popupFrame.off("click", ".c-popup-mask,.c-popup-remove"), a.$popupFrame.empty();
    }
  }, "assign"), a;
}), define("wiseindex/tabs/news/activity/toast", function () {
  var a = cc11001100_hook("a", $('<style data-for="pmd/toast/toast"></style>'), "var-init");
  a.text(".c-toast-wrapper{z-index:900;position:fixed;left:50%;top:50%;background:rgba(0,0,0,.8);border-radius:22px;color:#fff;padding:8px 18px;line-height:24px;font-size:18px;max-width:40%;text-align:center}"), $("head").append(a);
  var c = function (a) {
    var c = cc11001100_hook("c", this, "var-init");
    c.options = cc11001100_hook("c.options", $.extend({
      msg: cc11001100_hook("msg", "", "object-key-init"),
      customClassName: cc11001100_hook("customClassName", "", "object-key-init"),
      duration: cc11001100_hook("duration", 2e3, "object-key-init"),
      autoClose: cc11001100_hook("autoClose", !0, "object-key-init"),
      onOpen: function () {},
      onClose: function () {}
    }, a), "assign"), c._init();
  };
  return c.prototype = cc11001100_hook("c.prototype", {
    constructor: cc11001100_hook("constructor", c, "object-key-init"),
    version: cc11001100_hook("version", "0.0.1", "object-key-init"),
    _init: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a._prepareWrapper(), a.open();
    },
    _prepareWrapper: function () {
      var a = cc11001100_hook("a", this, "var-init"),
        c = cc11001100_hook("c", $(".c-toast-wrapper"), "var-init");
      c.remove(), a.$toastWrapper = cc11001100_hook("a.$toastWrapper", $('<div class="c-toast-wrapper"></div>'), "assign"), a.$toastWrapper.append(a.options.msg).addClass(a.options.customClassName), $(document.body).append(a.$toastWrapper);
    },
    open: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.$toastWrapper.css({
        "margin-top": cc11001100_hook("margin-top", -(a.$toastWrapper.height() / 2) + "px", "object-key-init"),
        "margin-left": cc11001100_hook("margin-left", -(a.$toastWrapper.width() / 2) + "px", "object-key-init")
      }), a.$toastWrapper.css({
        "-webkit-transform": cc11001100_hook("-webkit-transform", "scale3d(1.5, 1.5, 1)", "object-key-init"),
        transform: cc11001100_hook("transform", "scale3d(1.5, 1.5, 1)", "object-key-init"),
        opacity: cc11001100_hook("opacity", 0, "object-key-init")
      }).animate({
        "-webkit-transform": cc11001100_hook("-webkit-transform", "scale3d(1, 1, 1)", "object-key-init"),
        transform: cc11001100_hook("transform", "scale3d(1, 1, 1)", "object-key-init"),
        opacity: cc11001100_hook("opacity", 1, "object-key-init")
      }, 100, "ease", function () {
        a.$toastWrapper.css({
          "-webkit-transform": cc11001100_hook("-webkit-transform", "none", "object-key-init"),
          transform: cc11001100_hook("transform", "none", "object-key-init")
        }), a.options.onOpen(), a.options.autoClose && (a.delay = cc11001100_hook("a.delay", setTimeout($.proxy(a.close, a), a.options.duration), "assign"));
      });
    },
    close: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.$toastWrapper.animate({
        "-webkit-transform": cc11001100_hook("-webkit-transform", "scale3d(0.7, 0.7, 1)", "object-key-init"),
        transform: cc11001100_hook("transform", "scale3d(0.7, 0.7, 1)", "object-key-init"),
        opacity: cc11001100_hook("opacity", 0, "object-key-init")
      }, 100, "ease", function () {
        a.$toastWrapper.css({
          "-webkit-transform": cc11001100_hook("-webkit-transform", "none", "object-key-init"),
          transform: cc11001100_hook("transform", "none", "object-key-init")
        }), a.options.onClose(), a._destory();
      });
    },
    _destory: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.$toastWrapper.remove(), a.delay && clearTimeout(a.delay);
    }
  }, "assign"), c;
}), define("wiseindex/tabs/news/activity/star", ["wiseindex/tabs/news/activity/toast"], function (a) {
  var c = cc11001100_hook("c", (B.Index, function (a, c) {
    var h = cc11001100_hook("h", this, "var-init");
    h.opt = cc11001100_hook("h.opt", $.extend({}, a), "assign"), /^\/\/.+/.test(h.opt.url) && (h.opt.url = cc11001100_hook("h.opt.url", "http:" + h.opt.url, "assign")), h.star = cc11001100_hook("h.star", !1, "assign"), h.login = cc11001100_hook("h.login", c, "assign");
  }), "var-init");
  return c.prototype = cc11001100_hook("c.prototype", {
    version: cc11001100_hook("version", "1.0.0", "object-key-init"),
    _dispatch: function () {
      var a = cc11001100_hook("a", this, "var-init");
      return a.login ? void (a.star ? a.fav_id ? a._delStar() : a._readStar() : a._addStar()) : void (location.href = cc11001100_hook("location.href", "//wappass.baidu.com/passport/?login&u=" + encodeURIComponent(location.href), "assign"));
    },
    _toast: function (c) {
      var h = cc11001100_hook("h", a, "var-init");
      new h({
        msg: cc11001100_hook("msg", '<div class="icon"></div><p>' + c + "</p>", "object-key-init"),
        customClassName: cc11001100_hook("customClassName", "star-toast", "object-key-init")
      });
    },
    _requestUrl: function () {
      var a = cc11001100_hook("a", "http://mysearch.pae.baidu.com/api/favorites", "var-init");
      return "https:" === window.location.protocol && (a = cc11001100_hook("a", "https://sp0.baidu.com/5LMDcjW6BwF3otqbppnN2DJv/mysearch.pae.baidu.com/api/favorites", "assign")), a;
    },
    _starNews: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a._toast("收藏成功"), $('[data-key="star"]').find("img").attr("src", "//m.baidu.com/static/ala/uiamd/Share/collect-succ.png"), $('[data-key="star"]').find(".c-gap-top").text("已收藏"), $('[data-key="star"]').attr("data-key", "stared"), a.star = cc11001100_hook("a.star", !0, "assign");
    },
    _unstarNews: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a._toast("取消收藏"), $('[data-key="stared"]').find("img").attr("src", "//m.baidu.com/static/ala/uiamd/Share/collect.png"), $('[data-key="stared"]').find(".c-gap-top").text("收藏"), $('[data-key="stared"]').attr("data-key", "star"), a.star = cc11001100_hook("a.star", !1, "assign");
    },
    _checkStar: function () {
      var a = cc11001100_hook("a", this, "var-init"),
        c = cc11001100_hook("c", $.Deferred(), "var-init"),
        h = cc11001100_hook("h", a._requestUrl(), "var-init"),
        v = cc11001100_hook("v", {
          action: cc11001100_hook("action", "c", "object-key-init"),
          params: cc11001100_hook("params", JSON.stringify([a.opt.url]), "object-key-init")
        }, "var-init"),
        g = function () {
          return function (h) {
            if (3 == h.status && "用户未登录" == h.msg ? (a.login = cc11001100_hook("a.login", !1, "assign"), c.reject()) : a.login = cc11001100_hook("a.login", !0, "assign"), h.data && 1 == h.data.length) {
              var v = cc11001100_hook("v", h.data[0], "var-init"),
                g = cc11001100_hook("g", a.opt.url, "var-init");
              0 == v[g].code && "" == v[g].msg ? (a.fav_id = cc11001100_hook("a.fav_id", v[g].fav_id, "assign"), a.star = cc11001100_hook("a.star", !0, "assign"), c.resolve()) : c.reject();
            }
          };
        },
        b = function () {
          c.reject();
        };
      return a._jsonp(h, v, g, b), c;
    },
    _addStar: function () {
      var a = cc11001100_hook("a", this, "var-init"),
        c = cc11001100_hook("c", a._requestUrl(), "var-init"),
        h = cc11001100_hook("h", {
          action: cc11001100_hook("action", "w", "object-key-init"),
          origin: cc11001100_hook("origin", "news", "object-key-init"),
          params: cc11001100_hook("params", JSON.stringify([{
            url: cc11001100_hook("url", a.opt.url, "object-key-init"),
            title: cc11001100_hook("title", a.opt.title, "object-key-init"),
            type: cc11001100_hook("type", "artical", "object-key-init"),
            stype: cc11001100_hook("stype", "链接", "object-key-init"),
            img: cc11001100_hook("img", a.opt.iconUrl, "object-key-init"),
            act: cc11001100_hook("act", "收藏", "object-key-init"),
            source: cc11001100_hook("source", a.opt.origin, "object-key-init"),
            fav_time: cc11001100_hook("fav_time", Date.now(), "object-key-init")
          }]), "object-key-init")
        }, "var-init"),
        v = function () {
          return function (c) {
            if (a._starNews(), c && 1 == c.data.length) {
              var h = cc11001100_hook("h", c.data[0], "var-init"),
                v = cc11001100_hook("v", a.opt.url, "var-init");
              0 == h[v].code && "" == h[v].msg && (a._starNews(), a.fav_id = cc11001100_hook("a.fav_id", h[v].data, "assign"));
            }
          };
        },
        g = function () {
          a._toast("收藏失败");
        };
      a._jsonp(c, h, v, g);
    },
    _readStar: function () {
      var a = cc11001100_hook("a", this, "var-init"),
        c = cc11001100_hook("c", a._requestUrl(), "var-init"),
        h = cc11001100_hook("h", {
          action: cc11001100_hook("action", "r", "object-key-init"),
          origin: cc11001100_hook("origin", "news", "object-key-init"),
          pn: cc11001100_hook("pn", 1, "object-key-init"),
          ipp: cc11001100_hook("ipp", 20, "object-key-init"),
          origin: cc11001100_hook("origin", "", "object-key-init")
        }, "var-init"),
        v = function () {
          return function (c) {
            if (c && c.data) for (var h = cc11001100_hook("h", c.data, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < h.length; i++) if (h[i].url == a.opt.url) {
              a.fav_id = cc11001100_hook("a.fav_id", h[i].id, "assign"), a._delStar();
              break;
            }
          };
        },
        g = function () {};
      a._jsonp(c, h, v, g);
    },
    _delStar: function () {
      var a = cc11001100_hook("a", this, "var-init"),
        c = cc11001100_hook("c", a._requestUrl(), "var-init"),
        h = cc11001100_hook("h", {
          action: cc11001100_hook("action", "d", "object-key-init"),
          origin: cc11001100_hook("origin", "news", "object-key-init"),
          params: cc11001100_hook("params", JSON.stringify([a.fav_id]), "object-key-init")
        }, "var-init"),
        v = function () {
          return function (c) {
            if (c && 1 == c.data.length) {
              var h = cc11001100_hook("h", c.data[0], "var-init"),
                v = cc11001100_hook("v", a.fav_id, "var-init");
              0 == h[v].code && "" == h[v].msg && a._unstarNews();
            }
          };
        },
        g = function () {
          a._toast("删除失败");
        };
      a._jsonp(c, h, v, g);
    },
    _jsonp: function (a, c, h, v) {
      $.ajax({
        url: cc11001100_hook("url", a, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
        jsonp: cc11001100_hook("jsonp", "cb", "object-key-init"),
        data: cc11001100_hook("data", c, "object-key-init")
      }).done(function (a) {
        return h()(a);
      }).fail(function () {
        return v();
      });
    },
    constructor: cc11001100_hook("constructor", c, "object-key-init")
  }, "assign"), c;
}), define("wiseindex/tabs/news/activity/share", ["wiseindex/tabs/news/activity/detect", "wiseindex/tabs/news/activity/popup"], function (a, c) {
  var h = cc11001100_hook("h", {
      url: cc11001100_hook("url", window.location.href, "object-key-init"),
      title: cc11001100_hook("title", "百度搜索有惊喜", "object-key-init"),
      content: cc11001100_hook("content", "百度搜索有惊喜", "object-key-init"),
      iconUrl: cc11001100_hook("iconUrl", "https://m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg", "object-key-init"),
      custom: cc11001100_hook("custom", [], "object-key-init")
    }, "var-init"),
    a = cc11001100_hook("a", a, "var-init"),
    v = cc11001100_hook("v", a.os, "var-init"),
    g = cc11001100_hook("g", a.browser, "var-init"),
    b = cc11001100_hook("b", "zbios" == g.n ? 1 : 0, "var-init"),
    w = cc11001100_hook("w", "uc" != g.n || "undefined" == typeof ucweb && "undefined" == typeof ucbrowser ? 0 : 1, "var-init"),
    y = cc11001100_hook("y", "qq" == g.n && g.v && g.v > "5.4" ? 1 : 0, "var-init"),
    S = cc11001100_hook("S", "wechat" == g.n ? 1 : 0, "var-init"),
    _ = cc11001100_hook("_", $.Deferred(), "var-init");
  if (y) {
    var k = cc11001100_hook("k", document.createElement("script"), "var-init");
    k.type = cc11001100_hook("k.type", "text/javascript", "assign"), k.onload = cc11001100_hook("k.onload", k.onreadystatechange = cc11001100_hook("k.onreadystatechange", function () {
      this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || _.resolve();
    }, "assign"), "assign"), k.src = cc11001100_hook("k.src", "//jsapi.qq.com/get?api=app.share", "assign"), $("head").append(k);
  }
  var T,
    E,
    C = function (a, c) {
      c && (a.url = cc11001100_hook("a.url", encodeURIComponent(a.url), "assign"), a.linkUrl = cc11001100_hook("a.linkUrl", encodeURIComponent(a.url), "assign")), require(["wiseindex/tabs/news/activity/aio"], function () {
        Box.os.android ? Box.android.invokeApp("Bdbox_android_utils", "callShare", [JSON.stringify(a), "onSuccess", "onFail"]) : Box.ios.invokeApp("callShare", {
          options: cc11001100_hook("options", encodeURIComponent(JSON.stringify(a)), "object-key-init"),
          errorcallback: cc11001100_hook("errorcallback", "onFail", "object-key-init"),
          successcallback: cc11001100_hook("successcallback", "onSuccess", "object-key-init")
        });
      });
    },
    P = function (a, c) {
      var h = cc11001100_hook("h", {
          sinaweibo: cc11001100_hook("sinaweibo", ["kSinaWeibo", "SinaWeibo", 11, "新浪微博"], "object-key-init"),
          wxfriend: cc11001100_hook("wxfriend", ["kWeixin", "WechatFriends", 1, "微信好友"], "object-key-init"),
          pyq: cc11001100_hook("pyq", ["kWeixinFriend", "WechatTimeline", "8", "微信朋友圈"], "object-key-init"),
          qqfriend: cc11001100_hook("qqfriend", ["kQQ", "QQ", "4", "QQ好友"], "object-key-init"),
          qzone: cc11001100_hook("qzone", ["kQZone", "QZone", "3", "QQ空间"], "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", c.url, "var-init"),
        b = cc11001100_hook("b", c.title, "var-init"),
        w = cc11001100_hook("w", "", "var-init");
      c.content, a = cc11001100_hook("a", "" == a ? "" : "ios" == v.n ? h[a][0] : h[a][1], "assign"), "undefined" != typeof ucweb ? ucweb.startRequest("shell.page_share", [b, b, g, a, "", "@" + w, ""]) : "undefined" != typeof ucbrowser && ucbrowser.web_share(b, b, g, a, "", "@" + w, "");
    },
    I = function (a, c) {
      var h = cc11001100_hook("h", {
        sinaweibo: cc11001100_hook("sinaweibo", ["kSinaWeibo", "SinaWeibo", 11, "新浪微博"], "object-key-init"),
        wxfriend: cc11001100_hook("wxfriend", ["kWeixin", "WechatFriends", 1, "微信好友"], "object-key-init"),
        pyq: cc11001100_hook("pyq", ["kWeixinFriend", "WechatTimeline", "8", "微信朋友圈"], "object-key-init"),
        qqfriend: cc11001100_hook("qqfriend", ["kQQ", "QQ", "4", "QQ好友"], "object-key-init"),
        qzone: cc11001100_hook("qzone", ["kQZone", "QZone", "3", "QQ空间"], "object-key-init")
      }, "var-init");
      a = cc11001100_hook("a", "" == a ? "" : h[a][2], "assign");
      var v = cc11001100_hook("v", {
        url: cc11001100_hook("url", c.url, "object-key-init"),
        title: cc11001100_hook("title", c.title, "object-key-init"),
        description: cc11001100_hook("description", c.content, "object-key-init"),
        img_url: cc11001100_hook("img_url", "", "object-key-init"),
        img_title: cc11001100_hook("img_title", "", "object-key-init"),
        to_app: cc11001100_hook("to_app", a, "object-key-init"),
        cus_txt: cc11001100_hook("cus_txt", "请输入此时此刻想要分享的内容", "object-key-init")
      }, "var-init");
      v = cc11001100_hook("v", "" == a ? "" : v, "assign"), $.when(_).done(function () {
        "undefined" != typeof browser && "undefined" != typeof browser.app && browser.app.share(v);
      });
    },
    O = function () {
      $(".c-share-wechat-tips").length ? $(".c-share-wechat-tips").show() : ($("body").append($('<div class="c-share-wechat-tips"></div>')), $(".c-share-wechat-tips").on("click", function () {
        $(this).hide(), clearTimeout(T);
      })), T = cc11001100_hook("T", setTimeout(function () {
        $(".c-share-wechat-tips").hide(), clearTimeout(T);
      }, 2e3), "assign");
    },
    H = function (a) {
      var c = cc11001100_hook("c", $.Deferred(), "var-init"),
        h = cc11001100_hook("h", "http://mysearch.pae.baidu.com/api/s", "var-init");
      return "https:" === window.location.protocol && (h = cc11001100_hook("h", "https://sp0.baidu.com/5LMDcjW6BwF3otqbppnN2DJv/mysearch.pae.baidu.com/api/s", "assign")), $.ajax({
        url: cc11001100_hook("url", h, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        timeout: cc11001100_hook("timeout", 1e3, "object-key-init"),
        dataType: cc11001100_hook("dataType", "jsonp", "object-key-init"),
        jsonp: cc11001100_hook("jsonp", "cb", "object-key-init"),
        data: {
          params: cc11001100_hook("params", JSON.stringify([a]), "object-key-init")
        }
      }).done(function (h) {
        c.resolve(h && "0" == h.status && h[a] ? h[a] : a);
      }).fail(function () {
        c.resolve(a);
      }), c.promise();
    },
    A = function (a) {
      $.when(H(a)).then(function (a) {
        var h = cc11001100_hook("h", ['<div class="c-share-copytip-content">', '<div class="c-share-copytip-text">长按复制下方链接，去粘贴给好友吧：</div>', '<div class="c-share-copytip-linkwr"><a class="c-share-copytip-link" href="' + a + '" target="_blank">' + a + "</a></div>", "</div>", '<div class="c-share-copytip-cancel-btn">取消</div>'].join(""), "var-init"),
          v = cc11001100_hook("v", c, "var-init");
        E = cc11001100_hook("E", new v({
          content: cc11001100_hook("content", h, "object-key-init"),
          customClassName: cc11001100_hook("customClassName", "c-share-popup-modal", "object-key-init")
        }), "assign"), $(".c-share-copytip-cancel-btn").on("click", function () {
          E.closePopup();
        }), $(".c-share-copytip-link").on("click", function () {
          return !1;
        });
      });
    },
    D = cc11001100_hook("D", {
      key: cc11001100_hook("key", "pyq", "object-key-init"),
      icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/pyq_2.png", "object-key-init"),
      title: cc11001100_hook("title", "朋友圈", "object-key-init"),
      cb: cc11001100_hook("cb", function () {
        var a;
        return a = cc11001100_hook("a", b ? function (a) {
          a.mediaType = cc11001100_hook("a.mediaType", "weixin_timeline", "assign"), C(a, !1);
        } : w ? function (a) {
          P("pyq", a);
        } : y ? function (a) {
          I("pyq", a);
        } : S ? function () {
          O();
        } : function (a) {
          A(a.url);
        }, "assign");
      }(), "object-key-init")
    }, "var-init"),
    U = cc11001100_hook("U", {
      key: cc11001100_hook("key", "wxfriend", "object-key-init"),
      icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/wxfriend_2.png", "object-key-init"),
      title: cc11001100_hook("title", "微信好友", "object-key-init"),
      cb: cc11001100_hook("cb", function () {
        var a;
        return a = cc11001100_hook("a", b ? function (a) {
          a.mediaType = cc11001100_hook("a.mediaType", "weixin_friend", "assign"), C(a, !1);
        } : w ? function (a) {
          P("wxfriend", a);
        } : y ? function (a) {
          I("wxfriend", a);
        } : S ? function () {
          O();
        } : function (a) {
          A(a.url);
        }, "assign");
      }(), "object-key-init")
    }, "var-init"),
    M = cc11001100_hook("M", {
      key: cc11001100_hook("key", "qqfriend", "object-key-init"),
      icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/qqfriend_2.png", "object-key-init"),
      title: cc11001100_hook("title", "QQ好友", "object-key-init"),
      cb: cc11001100_hook("cb", function () {
        var a;
        return a = cc11001100_hook("a", b ? function (a) {
          a.mediaType = cc11001100_hook("a.mediaType", "qqfriend", "assign"), C(a, !1);
        } : w ? function (a) {
          P("qqfriend", a);
        } : y ? function (a) {
          I("qqfriend", a);
        } : function (a) {
          A(a.url);
        }, "assign");
      }(), "object-key-init")
    }, "var-init"),
    W = cc11001100_hook("W", {
      key: cc11001100_hook("key", "qzone", "object-key-init"),
      icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/qzone_2.png", "object-key-init"),
      title: cc11001100_hook("title", "QQ空间", "object-key-init"),
      cb: cc11001100_hook("cb", function () {
        var a;
        return a = cc11001100_hook("a", b ? function (a) {
          a.mediaType = cc11001100_hook("a.mediaType", "qqdenglu", "assign"), C(a, !1);
        } : w && "ios" == v.n ? function (a) {
          P("qzone", a);
        } : y ? function (a) {
          I("qzone", a);
        } : function (a) {
          var c = cc11001100_hook("c", "url=" + encodeURIComponent(a.url) + "&successurl=" + encodeURIComponent(window.location.href) + "&summary=" + a.content + "&title=" + a.title + "&pics=" + encodeURIComponent(a.iconUrl), "var-init");
          window.open("http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?" + c);
        }, "assign");
      }(), "object-key-init")
    }, "var-init"),
    X = cc11001100_hook("X", {
      key: cc11001100_hook("key", "sinaweibo", "object-key-init"),
      icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/sinaweibo_2.png", "object-key-init"),
      title: cc11001100_hook("title", "新浪微博", "object-key-init"),
      cb: cc11001100_hook("cb", function () {
        var a;
        return a = cc11001100_hook("a", b ? function (a) {
          a.mediaType = cc11001100_hook("a.mediaType", "sinaweibo", "assign"), C(a, !1);
        } : w ? function (a) {
          P("sinaweibo", a);
        } : y ? function (a) {
          I("sinaweibo", a);
        } : function (a) {
          window.open("http://v.t.sina.com.cn/share/share.php?url=" + encodeURIComponent(a.url) + "&title=" + encodeURIComponent(a.title));
        }, "assign");
      }(), "object-key-init")
    }, "var-init"),
    F = cc11001100_hook("F", ({
      key: cc11001100_hook("key", "more", "object-key-init"),
      icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/more_2.png", "object-key-init"),
      title: cc11001100_hook("title", "更多", "object-key-init"),
      cb: cc11001100_hook("cb", function () {
        var a;
        return b ? a = cc11001100_hook("a", function (a) {
          a.mediaType = cc11001100_hook("a.mediaType", "all", "assign"), C(a, !1);
        }, "assign") : w ? a = cc11001100_hook("a", function (a) {
          P("", a);
        }, "assign") : y && (a = cc11001100_hook("a", function (a) {
          I("", a);
        }, "assign")), a;
      }(), "object-key-init")
    }, function (a, c) {
      this.key = cc11001100_hook("this.key", a, "assign"), this.opt = cc11001100_hook("this.opt", $.extend({}, h, c), "assign"), this.opt.content || (this.opt.content = cc11001100_hook("this.opt.content", this.opt.title, "assign")), /^\/\/.+/.test(this.opt.url) && (this.opt.url = cc11001100_hook("this.opt.url", "http:" + this.opt.url, "assign")), this.opt.linkUrl = cc11001100_hook("this.opt.linkUrl", this.opt.url, "assign"), this._init();
    }), "var-init");
  return F.prototype = cc11001100_hook("F.prototype", {
    version: cc11001100_hook("version", "1.0.0", "object-key-init"),
    _init: function () {
      for (var a = cc11001100_hook("a", this, "var-init"), c = cc11001100_hook("c", [U, D, M, W, X], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < c.length; i++) if (c[i].key === a.key) {
        c[i].cb(a.opt);
        break;
      }
      a._sendLog(a.key);
    },
    _sendLog: function (a) {
      var c = cc11001100_hook("c", this, "var-init"),
        h = cc11001100_hook("h", {
          sa: cc11001100_hook("sa", "nfrom=share", "object-key-init")
        }, "var-init"),
        v = cc11001100_hook("v", {
          pyq: {
            ct: cc11001100_hook("ct", 40, "object-key-init"),
            cst: cc11001100_hook("cst", 2, "object-key-init")
          },
          wxfriend: {
            ct: cc11001100_hook("ct", 40, "object-key-init"),
            cst: cc11001100_hook("cst", 1, "object-key-init")
          },
          qqfriend: {
            ct: cc11001100_hook("ct", 40, "object-key-init"),
            cst: cc11001100_hook("cst", 5, "object-key-init")
          },
          qzone: {
            ct: cc11001100_hook("ct", 40, "object-key-init"),
            cst: cc11001100_hook("cst", 3, "object-key-init")
          },
          sinaweibo: {
            ct: cc11001100_hook("ct", 40, "object-key-init"),
            cst: cc11001100_hook("cst", 4, "object-key-init")
          },
          more: {
            ct: cc11001100_hook("ct", 40, "object-key-init"),
            cst: cc11001100_hook("cst", 9, "object-key-init")
          },
          close: {
            ct: cc11001100_hook("ct", 40, "object-key-init"),
            cst: cc11001100_hook("cst", 0, "object-key-init")
          }
        }, "var-init"),
        g = cc11001100_hook("g", {
          pyq: {
            clk_info: cc11001100_hook("clk_info", "a1_b1", "object-key-init")
          },
          wxfriend: {
            clk_info: cc11001100_hook("clk_info", "a1_b2", "object-key-init")
          },
          qqfriend: {
            clk_info: cc11001100_hook("clk_info", "a1_b3", "object-key-init")
          },
          qzone: {
            clk_info: cc11001100_hook("clk_info", "a1_b4", "object-key-init")
          },
          sinaweibo: {
            clk_info: cc11001100_hook("clk_info", "a1_b5", "object-key-init")
          },
          more: {
            clk_info: cc11001100_hook("clk_info", "a1_b6", "object-key-init")
          },
          close: {
            clk_info: cc11001100_hook("clk_info", "a1_b7", "object-key-init")
          }
        }, "var-init");
      if (a && v[a] && g[a] && "object" == typeof B && B.log && B.log.send) {
        var b = cc11001100_hook("b", v[a], "var-init");
        c.opt && "object" == typeof c.opt.loginfo && (b = cc11001100_hook("b", $.extend(b, h, c.opt.loginfo), "assign")), B.log.send(b), B.log.send($.extend(g[a], {
          ct: cc11001100_hook("ct", 10, "object-key-init"),
          cst: cc11001100_hook("cst", 2, "object-key-init"),
          clk_from: cc11001100_hook("clk_from", "share", "object-key-init")
        }));
      }
    },
    render: function (a, c) {
      var h = cc11001100_hook("h", this, "var-init");
      if (a && $(a).length) {
        var v = cc11001100_hook("v", $(a), "var-init");
        c && c.customClassName && h.$dom_shareList.addClass(c.customClassName), v.append(h.$dom_shareList), h.isRender = cc11001100_hook("h.isRender", !0, "assign"), c && "function" == typeof c.onRender && c.onRender();
      }
    },
    popup: function (a) {
      var h = cc11001100_hook("h", this, "var-init"),
        a = cc11001100_hook("a", a || {}, "var-init");
      h.isRender && (h.$dom_shareList = cc11001100_hook("h.$dom_shareList", h.$dom_shareList.clone(), "assign"), h._bindEvent()), a && a.customClassName && h.$dom_shareList.addClass(a.customClassName);
      var v = cc11001100_hook("v", $('<div class="c-tool-cancel-btn">取消</div>'), "var-init"),
        g = cc11001100_hook("g", c, "var-init");
      h.sharePopup = cc11001100_hook("h.sharePopup", new g({
        content: cc11001100_hook("content", h.$dom_shareList.add(v), "object-key-init"),
        customClassName: cc11001100_hook("customClassName", "c-share-popup-modal", "object-key-init"),
        onOpen: cc11001100_hook("onOpen", a.onOpen || function () {}, "object-key-init"),
        onClose: cc11001100_hook("onClose", a.onClose || function () {}, "object-key-init")
      }), "assign"), v.on("click", function () {
        h.sharePopup.closePopup(), h._sendLog("close");
      });
    },
    close: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.sharePopup && a.sharePopup.closePopup();
    },
    _horizontalHack: function () {
      var a;
      return void 0 != window.orientation ? 0 == window.orientation || 180 == window.orientation ? a = cc11001100_hook("a", Math.min(window.screen.width, $(window).width()), "assign") : (90 == window.orientation || -90 == window.orientation) && (a = cc11001100_hook("a", Math.min(window.screen.width, window.screen.height), "assign"), a = cc11001100_hook("a", a * $(window).width() / Math.max(window.screen.width, window.screen.height), "assign")) : a = cc11001100_hook("a", Math.min(window.screen.width, window.screen.height), "assign"), a;
    },
    constructor: cc11001100_hook("constructor", F, "object-key-init")
  }, "assign"), F;
}), define("wiseindex/tabs/news/activity/font", ["wiseindex/tabs/news/activity/slider", "wiseindex/tabs/news/activity/postmessage"], function (a, c) {
  var h = function () {
    var h = cc11001100_hook("h", [.875, 1, 1.125, 1.25], "var-init"),
      v = cc11001100_hook("v", 1, "var-init"),
      g = cc11001100_hook("g", $(".c-popup-wrapper"), "var-init");
    c.sendMessage($(".sf-frame iframe")[0].contentWindow, {
      event: cc11001100_hook("event", "getDetailFont", "object-key-init")
    }, !0).done(function (b) {
      var w = cc11001100_hook("w", b.data.font || 1, "var-init");
      w && (v = cc11001100_hook("v", h.indexOf(+w), "assign")), a.feedSlider({
        length: cc11001100_hook("length", $(window).width() - 56, "object-key-init"),
        options: cc11001100_hook("options", ["小", "标准", "大", "特大"], "object-key-init"),
        defaultIndex: cc11001100_hook("defaultIndex", a.data("index") || v, "object-key-init"),
        cb: function (a) {
          c.sendMessage($(".sf-frame iframe")[0].contentWindow, {
            event: cc11001100_hook("event", "setDetailFont", "object-key-init"),
            font: cc11001100_hook("font", h[a], "object-key-init")
          }, !1);
        }
      }).show(), g.hide();
    });
  };
  return h.prototype = cc11001100_hook("h.prototype", {
    constructor: cc11001100_hook("constructor", h, "object-key-init")
  }, "assign"), h;
}), define("wiseindex/tabs/news/activity/tool", ["wiseindex/tabs/news/activity/postmessage", "wiseindex/tabs/news/activity/share", "wiseindex/tabs/news/activity/star", "wiseindex/tabs/news/activity/font", "wiseindex/tabs/news/activity/popup", "wiseindex/tabs/news/activity/bdscroll", "wiseindex/lib/thunder/thunder"], function (a, c, h, v, g, b, w) {
  var y = function (a) {
    this.opt = cc11001100_hook("this.opt", $.extend({}, a), "assign"), this.opt.content || (this.opt.content = cc11001100_hook("this.opt.content", this.opt.title, "assign")), /^\/\/.+/.test(this.opt.url) && (this.opt.url = cc11001100_hook("this.opt.url", "http:" + this.opt.url, "assign")), this.opt.linkUrl = cc11001100_hook("this.opt.linkUrl", this.opt.url, "assign");
    var c = cc11001100_hook("c", this.opt.log, "var-init");
    this.thunderLog = cc11001100_hook("this.thunderLog", w.create({
      baseParams: {
        logid: cc11001100_hook("logid", c.logid || void 0, "object-key-init"),
        ssid: cc11001100_hook("ssid", c.ssid || void 0, "object-key-init"),
        sid: cc11001100_hook("sid", c.sid || void 0, "object-key-init")
      }
    }), "assign"), this._init();
  };
  return y.prototype = cc11001100_hook("y.prototype", {
    version: cc11001100_hook("version", "1.0.0", "object-key-init"),
    _init: function () {
      var a = cc11001100_hook("a", this, "var-init"),
        c = cc11001100_hook("c", $("#userinfo").length > 0 ? !0 : !1, "var-init");
      a.star = cc11001100_hook("a.star", new h(a.opt, c), "assign"), a.star._checkStar().done(function () {
        a.star.star = cc11001100_hook("a.star.star", !0, "assign"), a._initToolList();
      }).fail(function () {
        a.star.star = cc11001100_hook("a.star.star", !1, "assign"), a._initToolList();
      });
    },
    _initToolList: function () {
      var a = cc11001100_hook("a", this, "var-init"),
        c = cc11001100_hook("c", {
          key: cc11001100_hook("key", "wxfriend", "object-key-init"),
          icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/wxfriend_2.png", "object-key-init"),
          title: cc11001100_hook("title", "微信好友", "object-key-init")
        }, "var-init"),
        h = cc11001100_hook("h", {
          key: cc11001100_hook("key", "pyq", "object-key-init"),
          icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/pyq_2.png", "object-key-init"),
          title: cc11001100_hook("title", "微信朋友圈", "object-key-init")
        }, "var-init"),
        v = cc11001100_hook("v", {
          key: cc11001100_hook("key", "qqfriend", "object-key-init"),
          icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/qqfriend_2.png", "object-key-init"),
          title: cc11001100_hook("title", "QQ好友", "object-key-init")
        }, "var-init"),
        g = cc11001100_hook("g", {
          key: cc11001100_hook("key", "qzone", "object-key-init"),
          icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/qzone_2.png", "object-key-init"),
          title: cc11001100_hook("title", "QQ空间", "object-key-init")
        }, "var-init"),
        b = cc11001100_hook("b", {
          key: cc11001100_hook("key", "sinaweibo", "object-key-init"),
          icon: cc11001100_hook("icon", "//m.baidu.com/se/static/pmd/pmd/share/images/sinaweibo_2.png", "object-key-init"),
          title: cc11001100_hook("title", "新浪微博", "object-key-init")
        }, "var-init"),
        w = cc11001100_hook("w", {
          key: cc11001100_hook("key", "star", "object-key-init"),
          icon: cc11001100_hook("icon", "//m.baidu.com/static/ala/uiamd/Share/collect.png", "object-key-init"),
          title: cc11001100_hook("title", "收藏", "object-key-init")
        }, "var-init"),
        y = cc11001100_hook("y", {
          key: cc11001100_hook("key", "stared", "object-key-init"),
          icon: cc11001100_hook("icon", "//m.baidu.com/static/ala/uiamd/Share/collect-succ.png", "object-key-init"),
          title: cc11001100_hook("title", "已收藏", "object-key-init")
        }, "var-init"),
        S = cc11001100_hook("S", {
          key: cc11001100_hook("key", "font", "object-key-init"),
          icon: cc11001100_hook("icon", "//m.baidu.com/static/ala/uiamd/Share/font.png", "object-key-init"),
          title: cc11001100_hook("title", "字号", "object-key-init")
        }, "var-init"),
        _ = cc11001100_hook("_", [{
          share: cc11001100_hook("share", [c, h, v, g, b], "object-key-init")
        }, {
          other: cc11001100_hook("other", [], "object-key-init")
        }], "var-init"),
        k = cc11001100_hook("k", $(".sf-title").data("bjh"), "var-init");
      if (k) {
        var T = cc11001100_hook("T", {
          key: cc11001100_hook("key", "bjh", "object-key-init"),
          icon: cc11001100_hook("icon", $(".sf-title").find("img").attr("src"), "object-key-init"),
          url: cc11001100_hook("url", $(".sf-title").find("a").attr("href"), "object-key-init"),
          title: cc11001100_hook("title", "查看作者", "object-key-init")
        }, "var-init");
        _[1].other.push(T);
      }
      var E = cc11001100_hook("E", a.star.star, "var-init"),
        C = cc11001100_hook("C", a.opt.isThird, "var-init");
      E ? C ? _[1].other.push(y) : _[1].other.push(y, S) : C ? _[1].other.push(w) : _[1].other.push(w, S), this.opt.isVideo && _[1].other.pop();
      for (var P = cc11001100_hook("P", '<div class="c-tool-list wa-image-scroll-wrapper">', "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < _.length; i++) {
        P += cc11001100_hook("P", '<div class="c-flexbox c-' + Object.keys(_[i]) + '-list wa-image-scroller">', "assign");
        for (var I = cc11001100_hook("I", _[i][Object.keys(_[i])].length, "var-init"), O = cc11001100_hook("O", I > 4 ? I : 4, "var-init"), H = cc11001100_hook("H", 0, "var-init"); O > H; H++) {
          var B = cc11001100_hook("B", _[i][Object.keys(_[i])][H], "var-init");
          if (B) {
            var A = cc11001100_hook("A", i * O + H + 1, "var-init");
            P += cc11001100_hook("P", B.url ? '<div class="c-tool-btn wa-image-entity" data-url = "' + B.url + '" data-key = "' + B.key + '" data-cat = "' + Object.keys(_[i]) + 'data-clklog = "ct:1;cst:2;logFrom:recdetail;logInfo:tools;" data-extralog = "rid:;pos:' + A + ";extra:{};from:" + B.key + ';">' : '<div class="c-tool-btn wa-image-entity" data-key = "' + B.key + '" data-cat = "' + Object.keys(_[i]) + '" data-clklog = "ct:1;cst:2;logFrom:recdetail;logInfo:tools;" data-extralog = "rid:;pos:' + A + ";extra:{};from:" + B.key + ';">', "assign"), P += cc11001100_hook("P", '<img class="c-img" src="' + B.icon + '" />', "assign"), P += cc11001100_hook("P", '<span class="c-gap-top c-line-clamp1">' + B.title + "</span>", "assign");
          } else P += cc11001100_hook("P", '<div class="c-tool-btn ">', "assign");
          P += cc11001100_hook("P", "</div>", "assign");
        }
        "share" == Object.keys(_[i]) && (P += cc11001100_hook("P", '<div class = "coverLeft"></div>', "assign"), P += cc11001100_hook("P", '<div class = "coverRight"></div>', "assign")), P += cc11001100_hook("P", "</div>", "assign");
      }
      P += cc11001100_hook("P", "</div>", "assign"), a.$dom_toolList = cc11001100_hook("a.$dom_toolList", $(P), "assign"), a._bindEvent();
    },
    _bindEvent: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.$dom_toolList.find(".c-tool-btn").each(function () {
        $(this).on("click", function () {
          var h = cc11001100_hook("h", a.opt.isThird, "var-init");
          if (!h) {
            var g = cc11001100_hook("g", a.opt.url.split("#"), "var-init");
            g[0] += cc11001100_hook("g[0]", "&type=share", "assign"), a.opt.url = cc11001100_hook("a.opt.url", g.join("#"), "assign");
          }
          "share" === $(this).data("cat") && new c($(this).data("key"), a.opt);
          var b = cc11001100_hook("b", $(this).data("key"), "var-init");
          switch (b) {
            case "star":
            case "stared":
              a.star._dispatch();
              break;
            case "font":
              new v();
              break;
            case "bjh":
              window.location.href = cc11001100_hook("window.location.href", $(this).data("url"), "assign");
              break;
            case "defalut":
          }
          a.sendLog($(this).data("clklog"), $(this).data("extralog"));
        });
      }), a.popup();
    },
    sendLog: function (a, c) {
      var h = cc11001100_hook("h", this, "var-init"),
        v = cc11001100_hook("v", h.parse(a), "var-init");
      v.logExtra = cc11001100_hook("v.logExtra", JSON.stringify(h.parse(c)), "assign"), h.thunderLog.send(v);
    },
    parse: function (a) {
      for (var c = cc11001100_hook("c", {}, "var-init"), h = cc11001100_hook("h", /(.*?):(.*?);/gi, "var-init"); output = cc11001100_hook("output", h.exec(a), "assign");) c[output[1]] = cc11001100_hook("c[output[1]]", output[2], "assign");
      return c;
    },
    render: function (a, c) {
      var h = cc11001100_hook("h", this, "var-init");
      if (a && $(a).length) {
        var v = cc11001100_hook("v", $(a), "var-init");
        c && c.customClassName && h.$dom_toolList.addClass(c.customClassName), v.append(h.$dom_toolList), h.isRender = cc11001100_hook("h.isRender", !0, "assign"), c && "function" == typeof c.onRender && c.onRender();
      }
    },
    popup: function (a) {
      var c = cc11001100_hook("c", this, "var-init"),
        a = cc11001100_hook("a", a || {}, "var-init");
      c.isRender && (c.$dom_toolList = cc11001100_hook("c.$dom_toolList", c.$dom_toolList.clone(), "assign"), c._bindEvent()), a && a.customClassName && c.$dom_toolList.addClass(a.customClassName);
      var h = cc11001100_hook("h", $('<div class="c-tool-cancel-btn">取消</div>'), "var-init");
      c.toolPopup = cc11001100_hook("c.toolPopup", new g({
        content: cc11001100_hook("content", c.$dom_toolList.add(h), "object-key-init"),
        customClassName: cc11001100_hook("customClassName", "c-tool-popup-modal", "object-key-init"),
        onOpen: cc11001100_hook("onOpen", a.onOpen || function () {}, "object-key-init"),
        onClose: cc11001100_hook("onClose", a.onClose || function () {}, "object-key-init")
      }), "assign"), this.thunderLog.send({
        ct: cc11001100_hook("ct", 1, "object-key-init"),
        cst: cc11001100_hook("cst", 1, "object-key-init"),
        logFrom: cc11001100_hook("logFrom", "recdetail", "object-key-init"),
        logInfo: cc11001100_hook("logInfo", "tools", "object-key-init"),
        logExtra: cc11001100_hook("logExtra", JSON.stringify({
          rid: cc11001100_hook("rid", "", "object-key-init"),
          pos: cc11001100_hook("pos", "", "object-key-init"),
          extra: cc11001100_hook("extra", "", "object-key-init")
        }), "object-key-init")
      }), h.on("click", function () {
        c.toolPopup.closePopup();
      }), window.innerWidth < 406 && $(".wa-image-scroll-wrapper").find(".wa-image-scroller").width(406), setTimeout(function () {
        new b(".wa-image-scroll-wrapper", {
          disableMouse: cc11001100_hook("disableMouse", !1, "object-key-init"),
          momentum: cc11001100_hook("momentum", !0, "object-key-init")
        });
      }, 400);
    },
    close: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.toolPopup && a.toolPopup.closePopup();
    },
    _horizontalHack: function () {
      var a;
      return void 0 != window.orientation ? 0 == window.orientation || 180 == window.orientation ? a = cc11001100_hook("a", Math.min(window.screen.width, $(window).width()), "assign") : (90 == window.orientation || -90 == window.orientation) && (a = cc11001100_hook("a", Math.min(window.screen.width, window.screen.height), "assign"), a = cc11001100_hook("a", a * $(window).width() / Math.max(window.screen.width, window.screen.height), "assign")) : a = cc11001100_hook("a", Math.min(window.screen.width, window.screen.height), "assign"), a;
    },
    constructor: cc11001100_hook("constructor", y, "object-key-init")
  }, "assign"), y;
}), !function (a, c, h) {
  function v(a, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    if (this.wrapper = cc11001100_hook("this.wrapper", "string" == typeof a ? c.querySelector(a) : a, "assign"), this.wrapper && this.wrapper.children) {
      this.scroller = cc11001100_hook("this.scroller", this.wrapper.children[0], "assign"), this.scrollerStyle = cc11001100_hook("this.scrollerStyle", this.scroller.style, "assign"), this.options = cc11001100_hook("this.options", {
        resizeScrollbars: cc11001100_hook("resizeScrollbars", !0, "object-key-init"),
        mouseWheelSpeed: cc11001100_hook("mouseWheelSpeed", 20, "object-key-init"),
        snapThreshold: cc11001100_hook("snapThreshold", .334, "object-key-init"),
        startX: cc11001100_hook("startX", 0, "object-key-init"),
        startY: cc11001100_hook("startY", 0, "object-key-init"),
        scrollY: cc11001100_hook("scrollY", !0, "object-key-init"),
        directionLockThreshold: cc11001100_hook("directionLockThreshold", 5, "object-key-init"),
        momentum: cc11001100_hook("momentum", !0, "object-key-init"),
        bounce: cc11001100_hook("bounce", !0, "object-key-init"),
        bounceTime: cc11001100_hook("bounceTime", 600, "object-key-init"),
        bounceEasing: cc11001100_hook("bounceEasing", "", "object-key-init"),
        preventDefault: cc11001100_hook("preventDefault", !0, "object-key-init"),
        preventDefaultException: {
          tagName: cc11001100_hook("tagName", /^(INPUT|TEXTAREA|BUTTON|SELECT)$/, "object-key-init")
        },
        HWCompositing: cc11001100_hook("HWCompositing", !0, "object-key-init"),
        useTransition: cc11001100_hook("useTransition", !0, "object-key-init"),
        useTransform: cc11001100_hook("useTransform", !0, "object-key-init")
      }, "assign");
      for (var i in h) this.options[i] = cc11001100_hook("this.options[i]", h[i], "assign");
      this.translateZ = cc11001100_hook("this.translateZ", this.options.HWCompositing && y.hasPerspective ? " translateZ(0)" : "", "assign"), this.options.useTransition = cc11001100_hook("this.options.useTransition", y.hasTransition && this.options.useTransition, "assign"), this.options.useTransform = cc11001100_hook("this.options.useTransform", y.hasTransform && this.options.useTransform, "assign"), this.options.eventPassthrough = cc11001100_hook("this.options.eventPassthrough", this.options.eventPassthrough === !0 ? "vertical" : this.options.eventPassthrough, "assign"), this.options.preventDefault = cc11001100_hook("this.options.preventDefault", !this.options.eventPassthrough && this.options.preventDefault, "assign"), this.options.scrollY = cc11001100_hook("this.options.scrollY", "vertical" == this.options.eventPassthrough ? !1 : this.options.scrollY, "assign"), this.options.scrollX = cc11001100_hook("this.options.scrollX", "horizontal" == this.options.eventPassthrough ? !1 : this.options.scrollX, "assign"), this.options.freeScroll = cc11001100_hook("this.options.freeScroll", this.options.freeScroll && !this.options.eventPassthrough, "assign"), this.options.directionLockThreshold = cc11001100_hook("this.options.directionLockThreshold", this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, "assign"), this.options.bounceEasing = cc11001100_hook("this.options.bounceEasing", "string" == typeof this.options.bounceEasing ? y.ease[this.options.bounceEasing] || y.ease.circular : this.options.bounceEasing, "assign"), this.options.resizePolling = cc11001100_hook("this.options.resizePolling", void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, "assign"), this.options.tap === !0 && (this.options.tap = cc11001100_hook("this.options.tap", "tap", "assign")), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = cc11001100_hook("this.options.useTransition", !1, "assign")), this.options.invertWheelDirection = cc11001100_hook("this.options.invertWheelDirection", this.options.invertWheelDirection ? -1 : 1, "assign"), 3 == this.options.probeType && (this.options.useTransition = cc11001100_hook("this.options.useTransition", !1, "assign")), this.x = cc11001100_hook("this.x", 0, "assign"), this.y = cc11001100_hook("this.y", 0, "assign"), this.directionX = cc11001100_hook("this.directionX", 0, "assign"), this.directionY = cc11001100_hook("this.directionY", 0, "assign"), this._events = cc11001100_hook("this._events", {}, "assign"), this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable();
    }
  }
  function g(a, h, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    var g = cc11001100_hook("g", c.createElement("div"), "var-init"),
      b = cc11001100_hook("b", c.createElement("div"), "var-init");
    return v === !0 && (g.style.cssText = cc11001100_hook("g.style.cssText", "position:absolute;z-index:9999", "assign"), b.style.cssText = cc11001100_hook("b.style.cssText", "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px", "assign")), b.className = cc11001100_hook("b.className", "iScrollIndicator", "assign"), "h" == a ? (v === !0 && (g.style.cssText += cc11001100_hook("g.style.cssText", ";height:7px;left:2px;right:2px;bottom:0", "assign"), b.style.height = cc11001100_hook("b.style.height", "100%", "assign")), g.className = cc11001100_hook("g.className", "iScrollHorizontalScrollbar", "assign")) : (v === !0 && (g.style.cssText += cc11001100_hook("g.style.cssText", ";width:7px;bottom:2px;top:2px;right:1px", "assign"), b.style.width = cc11001100_hook("b.style.width", "100%", "assign")), g.className = cc11001100_hook("g.className", "iScrollVerticalScrollbar", "assign")), g.style.cssText += cc11001100_hook("g.style.cssText", ";overflow:hidden", "assign"), h || (g.style.pointerEvents = cc11001100_hook("g.style.pointerEvents", "none", "assign")), g.appendChild(b), g;
  }
  function b(h, v) {
    cc11001100_hook("h", h, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    this.wrapper = cc11001100_hook("this.wrapper", "string" == typeof v.el ? c.querySelector(v.el) : v.el, "assign"), this.wrapperStyle = cc11001100_hook("this.wrapperStyle", this.wrapper.style, "assign"), this.indicator = cc11001100_hook("this.indicator", this.wrapper.children[0], "assign"), this.indicatorStyle = cc11001100_hook("this.indicatorStyle", this.indicator.style, "assign"), this.scroller = cc11001100_hook("this.scroller", h, "assign"), this.options = cc11001100_hook("this.options", {
      listenX: cc11001100_hook("listenX", !0, "object-key-init"),
      listenY: cc11001100_hook("listenY", !0, "object-key-init"),
      interactive: cc11001100_hook("interactive", !1, "object-key-init"),
      resize: cc11001100_hook("resize", !0, "object-key-init"),
      defaultScrollbars: cc11001100_hook("defaultScrollbars", !1, "object-key-init"),
      shrink: cc11001100_hook("shrink", !1, "object-key-init"),
      fade: cc11001100_hook("fade", !1, "object-key-init"),
      speedRatioX: cc11001100_hook("speedRatioX", 0, "object-key-init"),
      speedRatioY: cc11001100_hook("speedRatioY", 0, "object-key-init")
    }, "assign");
    for (var i in v) this.options[i] = cc11001100_hook("this.options[i]", v[i], "assign");
    this.sizeRatioX = cc11001100_hook("this.sizeRatioX", 1, "assign"), this.sizeRatioY = cc11001100_hook("this.sizeRatioY", 1, "assign"), this.maxPosX = cc11001100_hook("this.maxPosX", 0, "assign"), this.maxPosY = cc11001100_hook("this.maxPosY", 0, "assign"), this.options.interactive && (this.options.disableTouch || (y.addEvent(this.indicator, "touchstart", this), y.addEvent(a, "touchend", this)), this.options.disablePointer || (y.addEvent(this.indicator, y.prefixPointerEvent("pointerdown"), this), y.addEvent(a, y.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (y.addEvent(this.indicator, "mousedown", this), y.addEvent(a, "mouseup", this))), this.options.fade && (this.wrapperStyle[y.style.transform] = cc11001100_hook("this.wrapperStyle[y.style.transform]", this.scroller.translateZ, "assign"), this.wrapperStyle[y.style.transitionDuration] = cc11001100_hook("this.wrapperStyle[y.style.transitionDuration]", y.isBadAndroid ? "0.001s" : "0ms", "assign"), this.wrapperStyle.opacity = cc11001100_hook("this.wrapperStyle.opacity", "0", "assign"));
  }
  var w = cc11001100_hook("w", a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (c) {
      a.setTimeout(c, 1e3 / 60);
    }, "var-init"),
    y = cc11001100_hook("y", function () {
      function v(a) {
        cc11001100_hook("a", a, "function-parameter");
        return w === !1 ? !1 : "" === w ? a : w + a.charAt(0).toUpperCase() + a.substr(1);
      }
      var g = cc11001100_hook("g", {}, "var-init"),
        b = cc11001100_hook("b", c.createElement("div").style, "var-init"),
        w = cc11001100_hook("w", function () {
          for (var a, c = cc11001100_hook("c", ["t", "webkitT", "MozT", "msT", "OT"], "var-init"), i = cc11001100_hook("i", 0, "var-init"), l = cc11001100_hook("l", c.length, "var-init"); l > i; i++) if (a = cc11001100_hook("a", c[i] + "ransform", "assign"), a in b) return c[i].substr(0, c[i].length - 1);
          return !1;
        }(), "var-init");
      g.getTime = cc11001100_hook("g.getTime", Date.now || function () {
        return new Date().getTime();
      }, "assign"), g.extend = cc11001100_hook("g.extend", function (a, c) {
        for (var i in c) a[i] = cc11001100_hook("a[i]", c[i], "assign");
      }, "assign"), g.addEvent = cc11001100_hook("g.addEvent", function (a, c, h, v) {
        a.addEventListener(c, h, !!v);
      }, "assign"), g.removeEvent = cc11001100_hook("g.removeEvent", function (a, c, h, v) {
        a.removeEventListener(c, h, !!v);
      }, "assign"), g.prefixPointerEvent = cc11001100_hook("g.prefixPointerEvent", function (c) {
        return a.MSPointerEvent ? "MSPointer" + c.charAt(9).toUpperCase() + c.substr(10) : c;
      }, "assign"), g.momentum = cc11001100_hook("g.momentum", function (a, c, v, g, b, w) {
        var y,
          S,
          _ = cc11001100_hook("_", a - c, "var-init"),
          k = cc11001100_hook("k", h.abs(_) / v, "var-init");
        return w = cc11001100_hook("w", void 0 === w ? 6e-4 : w, "assign"), y = cc11001100_hook("y", a + k * k / (2 * w) * (0 > _ ? -1 : 1), "assign"), S = cc11001100_hook("S", k / w, "assign"), g > y ? (y = cc11001100_hook("y", b ? g - b / 2.5 * (k / 8) : g, "assign"), _ = cc11001100_hook("_", h.abs(y - a), "assign"), S = cc11001100_hook("S", _ / k, "assign")) : y > 0 && (y = cc11001100_hook("y", b ? b / 2.5 * (k / 8) : 0, "assign"), _ = cc11001100_hook("_", h.abs(a) + y, "assign"), S = cc11001100_hook("S", _ / k, "assign")), {
          destination: cc11001100_hook("destination", h.round(y), "object-key-init"),
          duration: cc11001100_hook("duration", S, "object-key-init")
        };
      }, "assign");
      var y = cc11001100_hook("y", v("transform"), "var-init");
      return g.extend(g, {
        hasTransform: cc11001100_hook("hasTransform", y !== !1, "object-key-init"),
        hasPerspective: cc11001100_hook("hasPerspective", v("perspective") in b, "object-key-init"),
        hasTouch: cc11001100_hook("hasTouch", "ontouchstart" in a, "object-key-init"),
        hasPointer: cc11001100_hook("hasPointer", a.PointerEvent || a.MSPointerEvent, "object-key-init"),
        hasTransition: cc11001100_hook("hasTransition", v("transition") in b, "object-key-init")
      }), g.isBadAndroid = cc11001100_hook("g.isBadAndroid", /Android /.test(a.navigator.appVersion) && !/Chrome\/\d/.test(a.navigator.appVersion), "assign"), g.extend(g.style = cc11001100_hook("g.style", {}, "assign"), {
        transform: cc11001100_hook("transform", y, "object-key-init"),
        transitionTimingFunction: cc11001100_hook("transitionTimingFunction", v("transitionTimingFunction"), "object-key-init"),
        transitionDuration: cc11001100_hook("transitionDuration", v("transitionDuration"), "object-key-init"),
        transitionDelay: cc11001100_hook("transitionDelay", v("transitionDelay"), "object-key-init"),
        transformOrigin: cc11001100_hook("transformOrigin", v("transformOrigin"), "object-key-init")
      }), g.hasClass = cc11001100_hook("g.hasClass", function (e, a) {
        var re = cc11001100_hook("re", new RegExp("(^|\\s)" + a + "(\\s|$)"), "var-init");
        return re.test(e.className);
      }, "assign"), g.addClass = cc11001100_hook("g.addClass", function (e, a) {
        if (!g.hasClass(e, a)) {
          var c = cc11001100_hook("c", e.className.split(" "), "var-init");
          c.push(a), e.className = cc11001100_hook("e.className", c.join(" "), "assign");
        }
      }, "assign"), g.removeClass = cc11001100_hook("g.removeClass", function (e, a) {
        if (g.hasClass(e, a)) {
          var re = cc11001100_hook("re", new RegExp("(^|\\s)" + a + "(\\s|$)", "g"), "var-init");
          e.className = cc11001100_hook("e.className", e.className.replace(re, " "), "assign");
        }
      }, "assign"), g.offset = cc11001100_hook("g.offset", function (a) {
        for (var c = cc11001100_hook("c", -a.offsetLeft, "var-init"), h = cc11001100_hook("h", -a.offsetTop, "var-init"); a = cc11001100_hook("a", a.offsetParent, "assign");) c -= cc11001100_hook("c", a.offsetLeft, "assign"), h -= cc11001100_hook("h", a.offsetTop, "assign");
        return {
          left: cc11001100_hook("left", c, "object-key-init"),
          top: cc11001100_hook("top", h, "object-key-init")
        };
      }, "assign"), g.preventDefaultException = cc11001100_hook("g.preventDefaultException", function (a, c) {
        for (var i in c) if (c[i].test(a[i])) return !0;
        return !1;
      }, "assign"), g.extend(g.eventType = cc11001100_hook("g.eventType", {}, "assign"), {
        touchstart: cc11001100_hook("touchstart", 1, "object-key-init"),
        touchmove: cc11001100_hook("touchmove", 1, "object-key-init"),
        touchend: cc11001100_hook("touchend", 1, "object-key-init"),
        mousedown: cc11001100_hook("mousedown", 2, "object-key-init"),
        mousemove: cc11001100_hook("mousemove", 2, "object-key-init"),
        mouseup: cc11001100_hook("mouseup", 2, "object-key-init"),
        pointerdown: cc11001100_hook("pointerdown", 3, "object-key-init"),
        pointermove: cc11001100_hook("pointermove", 3, "object-key-init"),
        pointerup: cc11001100_hook("pointerup", 3, "object-key-init"),
        MSPointerDown: cc11001100_hook("MSPointerDown", 3, "object-key-init"),
        MSPointerMove: cc11001100_hook("MSPointerMove", 3, "object-key-init"),
        MSPointerUp: cc11001100_hook("MSPointerUp", 3, "object-key-init")
      }), g.extend(g.ease = cc11001100_hook("g.ease", {}, "assign"), {
        quadratic: {
          style: cc11001100_hook("style", "cubic-bezier(0.25, 0.46, 0.45, 0.94)", "object-key-init"),
          fn: function (a) {
            return a * (2 - a);
          }
        },
        circular: {
          style: cc11001100_hook("style", "cubic-bezier(0.1, 0.57, 0.1, 1)", "object-key-init"),
          fn: function (a) {
            return h.sqrt(1 - --a * a);
          }
        },
        back: {
          style: cc11001100_hook("style", "cubic-bezier(0.175, 0.885, 0.32, 1.275)", "object-key-init"),
          fn: function (a) {
            var c = cc11001100_hook("c", 4, "var-init");
            return (a -= cc11001100_hook("a", 1, "assign")) * a * ((c + 1) * a + c) + 1;
          }
        },
        bounce: {
          style: cc11001100_hook("style", "", "object-key-init"),
          fn: function (a) {
            return (a /= cc11001100_hook("a", 1, "assign")) < 1 / 2.75 ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= cc11001100_hook("a", 1.5 / 2.75, "assign")) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= cc11001100_hook("a", 2.25 / 2.75, "assign")) * a + .9375 : 7.5625 * (a -= cc11001100_hook("a", 2.625 / 2.75, "assign")) * a + .984375;
          }
        },
        elastic: {
          style: cc11001100_hook("style", "", "object-key-init"),
          fn: function (a) {
            var f = cc11001100_hook("f", .22, "var-init"),
              e = cc11001100_hook("e", .4, "var-init");
            return 0 === a ? 0 : 1 == a ? 1 : e * h.pow(2, -10 * a) * h.sin(2 * (a - f / 4) * h.PI / f) + 1;
          }
        }
      }), g.tap = cc11001100_hook("g.tap", function (e, a) {
        var h = cc11001100_hook("h", c.createEvent("Event"), "var-init");
        h.initEvent(a, !0, !0), h.pageX = cc11001100_hook("h.pageX", e.pageX, "assign"), h.pageY = cc11001100_hook("h.pageY", e.pageY, "assign"), e.target.dispatchEvent(h);
      }, "assign"), g.click = cc11001100_hook("g.click", function (e) {
        var a,
          h = cc11001100_hook("h", e.target, "var-init");
        /(SELECT|INPUT|TEXTAREA)/i.test(h.tagName) || (a = cc11001100_hook("a", c.createEvent("MouseEvents"), "assign"), a.initMouseEvent("click", !0, !0, e.view, 1, h.screenX, h.screenY, h.clientX, h.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), a._constructed = cc11001100_hook("a._constructed", !0, "assign"), h.dispatchEvent(a));
      }, "assign"), g;
    }(), "var-init");
  v.prototype = cc11001100_hook("v.prototype", {
    version: cc11001100_hook("version", "5.1.3", "object-key-init"),
    _init: function () {
      this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys();
    },
    destroy: function () {
      this._initEvents(!0), this._execEvent("destroy");
    },
    _transitionEnd: function (e) {
      e.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = cc11001100_hook("this.isInTransition", !1, "assign"), this._execEvent("scrollEnd")));
    },
    _start: function (e) {
      if (!(1 != y.eventType[e.type] && 0 !== e.button || !this.enabled || this.initiated && y.eventType[e.type] !== this.initiated)) {
        !this.options.preventDefault || y.isBadAndroid || y.preventDefaultException(e.target, this.options.preventDefaultException) || e.preventDefault();
        var a,
          c = cc11001100_hook("c", e.touches ? e.touches[0] : e, "var-init");
        this.initiated = cc11001100_hook("this.initiated", y.eventType[e.type], "assign"), this.moved = cc11001100_hook("this.moved", !1, "assign"), this.distX = cc11001100_hook("this.distX", 0, "assign"), this.distY = cc11001100_hook("this.distY", 0, "assign"), this.directionX = cc11001100_hook("this.directionX", 0, "assign"), this.directionY = cc11001100_hook("this.directionY", 0, "assign"), this.directionLocked = cc11001100_hook("this.directionLocked", 0, "assign"), this._transitionTime(), this.startTime = cc11001100_hook("this.startTime", y.getTime(), "assign"), this.options.useTransition && this.isInTransition ? (this.isInTransition = cc11001100_hook("this.isInTransition", !1, "assign"), a = cc11001100_hook("a", this.getComputedPosition(), "assign"), this._translate(h.round(a.x), h.round(a.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = cc11001100_hook("this.isAnimating", !1, "assign"), this._execEvent("scrollEnd")), this.startX = cc11001100_hook("this.startX", this.x, "assign"), this.startY = cc11001100_hook("this.startY", this.y, "assign"), this.absStartX = cc11001100_hook("this.absStartX", this.x, "assign"), this.absStartY = cc11001100_hook("this.absStartY", this.y, "assign"), this.pointX = cc11001100_hook("this.pointX", c.pageX, "assign"), this.pointY = cc11001100_hook("this.pointY", c.pageY, "assign"), this._execEvent("beforeScrollStart");
      }
    },
    _move: function (e) {
      if (this.enabled && y.eventType[e.type] === this.initiated) {
        this.options.preventDefault && e.preventDefault();
        var a,
          c,
          v,
          g,
          b = cc11001100_hook("b", e.touches ? e.touches[0] : e, "var-init"),
          w = cc11001100_hook("w", b.pageX - this.pointX, "var-init"),
          S = cc11001100_hook("S", b.pageY - this.pointY, "var-init"),
          _ = cc11001100_hook("_", y.getTime(), "var-init");
        if (this.pointX = cc11001100_hook("this.pointX", b.pageX, "assign"), this.pointY = cc11001100_hook("this.pointY", b.pageY, "assign"), this.distX += cc11001100_hook("this.distX", w, "assign"), this.distY += cc11001100_hook("this.distY", S, "assign"), v = cc11001100_hook("v", h.abs(this.distX), "assign"), g = cc11001100_hook("g", h.abs(this.distY), "assign"), !(_ - this.endTime > 300 && 10 > v && 10 > g)) {
          if (this.directionLocked || this.options.freeScroll || (this.directionLocked = cc11001100_hook("this.directionLocked", v > g + this.options.directionLockThreshold ? "h" : g >= v + this.options.directionLockThreshold ? "v" : "n", "assign")), "h" == this.directionLocked) {
            if ("vertical" == this.options.eventPassthrough) e.preventDefault();else if ("horizontal" == this.options.eventPassthrough) return void (this.initiated = cc11001100_hook("this.initiated", !1, "assign"));
            S = cc11001100_hook("S", 0, "assign");
          } else if ("v" == this.directionLocked) {
            if ("horizontal" == this.options.eventPassthrough) e.preventDefault();else if ("vertical" == this.options.eventPassthrough) return void (this.initiated = cc11001100_hook("this.initiated", !1, "assign"));
            w = cc11001100_hook("w", 0, "assign");
          }
          w = cc11001100_hook("w", this.hasHorizontalScroll ? w : 0, "assign"), S = cc11001100_hook("S", this.hasVerticalScroll ? S : 0, "assign"), a = cc11001100_hook("a", this.x + w, "assign"), c = cc11001100_hook("c", this.y + S, "assign"), (a > 0 || a < this.maxScrollX) && (a = cc11001100_hook("a", this.options.bounce ? this.x + w / 3 : a > 0 ? 0 : this.maxScrollX, "assign")), (c > 0 || c < this.maxScrollY) && (c = cc11001100_hook("c", this.options.bounce ? this.y + S / 3 : c > 0 ? 0 : this.maxScrollY, "assign")), this.directionX = cc11001100_hook("this.directionX", w > 0 ? -1 : 0 > w ? 1 : 0, "assign"), this.directionY = cc11001100_hook("this.directionY", S > 0 ? -1 : 0 > S ? 1 : 0, "assign"), this.moved || this._execEvent("scrollStart"), this.moved = cc11001100_hook("this.moved", !0, "assign"), this._translate(a, c), _ - this.startTime > 300 && (this.startTime = cc11001100_hook("this.startTime", _, "assign"), this.startX = cc11001100_hook("this.startX", this.x, "assign"), this.startY = cc11001100_hook("this.startY", this.y, "assign"), 1 == this.options.probeType && this._execEvent("scroll")), this.options.probeType > 1 && this._execEvent("scroll");
        }
      }
    },
    _end: function (e) {
      if (this.enabled && y.eventType[e.type] === this.initiated) {
        this.options.preventDefault && !y.preventDefaultException(e.target, this.options.preventDefaultException) && e.preventDefault();
        var a,
          c,
          v = cc11001100_hook("v", (e.changedTouches ? e.changedTouches[0] : e, y.getTime() - this.startTime), "var-init"),
          g = cc11001100_hook("g", h.round(this.x), "var-init"),
          b = cc11001100_hook("b", h.round(this.y), "var-init"),
          w = cc11001100_hook("w", h.abs(g - this.startX), "var-init"),
          S = cc11001100_hook("S", h.abs(b - this.startY), "var-init"),
          _ = cc11001100_hook("_", 0, "var-init"),
          k = cc11001100_hook("k", "", "var-init");
        if (this.isInTransition = cc11001100_hook("this.isInTransition", 0, "assign"), this.initiated = cc11001100_hook("this.initiated", 0, "assign"), this.endTime = cc11001100_hook("this.endTime", y.getTime(), "assign"), !this.resetPosition(this.options.bounceTime)) {
          if (this.scrollTo(g, b), !this.moved) return this.options.tap && y.tap(e, this.options.tap), this.options.click && y.click(e), void this._execEvent("scrollCancel");
          if (this._events.flick && 200 > v && 100 > w && 100 > S) return void this._execEvent("flick");
          if (this.options.momentum && 300 > v && (a = cc11001100_hook("a", this.hasHorizontalScroll ? y.momentum(this.x, this.startX, v, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
            destination: cc11001100_hook("destination", g, "object-key-init"),
            duration: cc11001100_hook("duration", 0, "object-key-init")
          }, "assign"), c = cc11001100_hook("c", this.hasVerticalScroll ? y.momentum(this.y, this.startY, v, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
            destination: cc11001100_hook("destination", b, "object-key-init"),
            duration: cc11001100_hook("duration", 0, "object-key-init")
          }, "assign"), g = cc11001100_hook("g", a.destination, "assign"), b = cc11001100_hook("b", c.destination, "assign"), _ = cc11001100_hook("_", h.max(a.duration, c.duration), "assign"), this.isInTransition = cc11001100_hook("this.isInTransition", 1, "assign")), this.options.snap) {
            var T = cc11001100_hook("T", this._nearestSnap(g, b), "var-init");
            this.currentPage = cc11001100_hook("this.currentPage", T, "assign"), _ = cc11001100_hook("_", this.options.snapSpeed || h.max(h.max(h.min(h.abs(g - T.x), 1e3), h.min(h.abs(b - T.y), 1e3)), 300), "assign"), g = cc11001100_hook("g", T.x, "assign"), b = cc11001100_hook("b", T.y, "assign"), this.directionX = cc11001100_hook("this.directionX", 0, "assign"), this.directionY = cc11001100_hook("this.directionY", 0, "assign"), k = cc11001100_hook("k", this.options.bounceEasing, "assign");
          }
          return g != this.x || b != this.y ? ((g > 0 || g < this.maxScrollX || b > 0 || b < this.maxScrollY) && (k = cc11001100_hook("k", y.ease.quadratic, "assign")), void this.scrollTo(g, b, _, k)) : void this._execEvent("scrollEnd");
        }
      }
    },
    _resize: function () {
      var a = cc11001100_hook("a", this, "var-init");
      clearTimeout(this.resizeTimeout), this.resizeTimeout = cc11001100_hook("this.resizeTimeout", setTimeout(function () {
        a.refresh();
      }, this.options.resizePolling), "assign");
    },
    resetPosition: function (a) {
      var x = cc11001100_hook("x", this.x, "var-init"),
        c = cc11001100_hook("c", this.y, "var-init");
      return a = cc11001100_hook("a", a || 0, "assign"), !this.hasHorizontalScroll || this.x > 0 ? x = cc11001100_hook("x", 0, "assign") : this.x < this.maxScrollX && (x = cc11001100_hook("x", this.maxScrollX, "assign")), !this.hasVerticalScroll || this.y > 0 ? c = cc11001100_hook("c", 0, "assign") : this.y < this.maxScrollY && (c = cc11001100_hook("c", this.maxScrollY, "assign")), x == this.x && c == this.y ? !1 : (this.scrollTo(x, c, a, this.options.bounceEasing), !0);
    },
    disable: function () {
      this.enabled = cc11001100_hook("this.enabled", !1, "assign");
    },
    enable: function () {
      this.enabled = cc11001100_hook("this.enabled", !0, "assign");
    },
    refresh: function () {
      this.wrapper.offsetHeight, this.wrapperWidth = cc11001100_hook("this.wrapperWidth", this.wrapper.clientWidth, "assign"), this.wrapperHeight = cc11001100_hook("this.wrapperHeight", this.wrapper.clientHeight, "assign"), this.scrollerWidth = cc11001100_hook("this.scrollerWidth", this.scroller.offsetWidth, "assign"), this.scrollerHeight = cc11001100_hook("this.scrollerHeight", this.scroller.offsetHeight, "assign"), this.maxScrollX = cc11001100_hook("this.maxScrollX", this.wrapperWidth - this.scrollerWidth, "assign"), this.maxScrollY = cc11001100_hook("this.maxScrollY", this.wrapperHeight - this.scrollerHeight, "assign"), this.hasHorizontalScroll = cc11001100_hook("this.hasHorizontalScroll", this.options.scrollX && this.maxScrollX < 0, "assign"), this.hasVerticalScroll = cc11001100_hook("this.hasVerticalScroll", this.options.scrollY && this.maxScrollY < 0, "assign"), this.hasHorizontalScroll || (this.maxScrollX = cc11001100_hook("this.maxScrollX", 0, "assign"), this.scrollerWidth = cc11001100_hook("this.scrollerWidth", this.wrapperWidth, "assign")), this.hasVerticalScroll || (this.maxScrollY = cc11001100_hook("this.maxScrollY", 0, "assign"), this.scrollerHeight = cc11001100_hook("this.scrollerHeight", this.wrapperHeight, "assign")), this.endTime = cc11001100_hook("this.endTime", 0, "assign"), this.directionX = cc11001100_hook("this.directionX", 0, "assign"), this.directionY = cc11001100_hook("this.directionY", 0, "assign"), this.wrapperOffset = cc11001100_hook("this.wrapperOffset", y.offset(this.wrapper), "assign"), this._execEvent("refresh"), this.resetPosition();
    },
    on: function (a, c) {
      this._events && (this._events[a] || (this._events[a] = cc11001100_hook("this._events[a]", [], "assign")), this._events[a].push(c));
    },
    off: function (a, c) {
      if (this._events && this._events[a]) {
        var h = cc11001100_hook("h", this._events[a].indexOf(c), "var-init");
        h > -1 && this._events[a].splice(h, 1);
      }
    },
    _execEvent: function (a) {
      if (this._events[a]) {
        var i = cc11001100_hook("i", 0, "var-init"),
          l = cc11001100_hook("l", this._events[a].length, "var-init");
        if (l) for (; l > i; i++) this._events[a][i].apply(this, [].slice.call(arguments, 1));
      }
    },
    scrollBy: function (x, a, c, h) {
      x = cc11001100_hook("x", this.x + x, "assign"), a = cc11001100_hook("a", this.y + a, "assign"), c = cc11001100_hook("c", c || 0, "assign"), this.scrollTo(x, a, c, h);
    },
    scrollTo: function (x, a, c, h, v) {
      h = cc11001100_hook("h", h || y.ease.circular, "assign"), this.customFlag = cc11001100_hook("this.customFlag", v || {}, "assign"), this.isInTransition = cc11001100_hook("this.isInTransition", this.options.useTransition && c > 0, "assign"), !c || this.options.useTransition && h.style ? (this._transitionTimingFunction(h.style), this._transitionTime(c), this._translate(x, a)) : this._animate(x, a, c, h.fn);
    },
    scrollToElement: function (a, c, v, g, b, w) {
      if (a = cc11001100_hook("a", a.nodeType ? a : this.scroller.querySelector(a), "assign")) {
        var w = cc11001100_hook("w", w || {}, "var-init"),
          S = cc11001100_hook("S", y.offset(a), "var-init");
        S.left -= cc11001100_hook("S.left", this.wrapperOffset.left, "assign"), S.top -= cc11001100_hook("S.top", this.wrapperOffset.top, "assign"), v === !0 && (v = cc11001100_hook("v", h.round(a.offsetWidth / 2 - this.wrapper.offsetWidth / 2), "assign")), g === !0 && (g = cc11001100_hook("g", h.round(a.offsetHeight / 2 - this.wrapper.offsetHeight / 2), "assign")), S.left -= cc11001100_hook("S.left", v || 0, "assign"), S.top -= cc11001100_hook("S.top", g || 0, "assign"), S.left = cc11001100_hook("S.left", S.left > 0 ? 0 : S.left < this.maxScrollX ? this.maxScrollX : S.left, "assign"), S.top = cc11001100_hook("S.top", S.top > 0 ? 0 : S.top < this.maxScrollY ? this.maxScrollY : S.top, "assign"), c = cc11001100_hook("c", void 0 === c || null === c || "auto" === c ? h.max(h.abs(this.x - S.left), h.abs(this.y - S.top)) : c, "assign"), this.scrollTo(S.left, S.top, c, b, w);
      }
    },
    _transitionTime: function (a) {
      if (a = cc11001100_hook("a", a || 0, "assign"), this.scrollerStyle[y.style.transitionDuration] = cc11001100_hook("this.scrollerStyle[y.style.transitionDuration]", a + "ms", "assign"), !a && y.isBadAndroid && (this.scrollerStyle[y.style.transitionDuration] = cc11001100_hook("this.scrollerStyle[y.style.transitionDuration]", "0.001s", "assign")), this.indicators) for (var i = cc11001100_hook("i", this.indicators.length, "var-init"); i--;) this.indicators[i].transitionTime(a);
    },
    _transitionTimingFunction: function (a) {
      if (this.scrollerStyle[y.style.transitionTimingFunction] = cc11001100_hook("this.scrollerStyle[y.style.transitionTimingFunction]", a, "assign"), this.indicators) for (var i = cc11001100_hook("i", this.indicators.length, "var-init"); i--;) this.indicators[i].transitionTimingFunction(a);
    },
    _translate: function (x, a) {
      if (this.options.useTransform ? this.scrollerStyle[y.style.transform] = cc11001100_hook("this.scrollerStyle[y.style.transform]", "translate(" + x + "px," + a + "px)" + this.translateZ, "assign") : (x = cc11001100_hook("x", h.round(x), "assign"), a = cc11001100_hook("a", h.round(a), "assign"), this.scrollerStyle.left = cc11001100_hook("this.scrollerStyle.left", x + "px", "assign"), this.scrollerStyle.top = cc11001100_hook("this.scrollerStyle.top", a + "px", "assign")), this.x = cc11001100_hook("this.x", x, "assign"), this.y = cc11001100_hook("this.y", a, "assign"), this.indicators) for (var i = cc11001100_hook("i", this.indicators.length, "var-init"); i--;) this.indicators[i].updatePosition();
    },
    _initEvents: function (c) {
      var h = cc11001100_hook("h", c ? y.removeEvent : y.addEvent, "var-init"),
        v = cc11001100_hook("v", this.options.bindToWrapper ? this.wrapper : a, "var-init");
      h(a, "orientationchange", this), h(a, "resize", this), this.options.click && h(this.wrapper, "click", this, !0), this.options.disableMouse || (h(this.wrapper, "mousedown", this), h(v, "mousemove", this), h(v, "mousecancel", this), h(v, "mouseup", this)), y.hasPointer && !this.options.disablePointer && (h(this.wrapper, y.prefixPointerEvent("pointerdown"), this), h(v, y.prefixPointerEvent("pointermove"), this), h(v, y.prefixPointerEvent("pointercancel"), this), h(v, y.prefixPointerEvent("pointerup"), this)), y.hasTouch && !this.options.disableTouch && (h(this.wrapper, "touchstart", this), h(v, "touchmove", this), h(v, "touchcancel", this), h(v, "touchend", this)), h(this.scroller, "transitionend", this), h(this.scroller, "webkitTransitionEnd", this), h(this.scroller, "oTransitionEnd", this), h(this.scroller, "MSTransitionEnd", this);
    },
    getComputedPosition: function () {
      var x,
        c,
        h = cc11001100_hook("h", a.getComputedStyle(this.scroller, null), "var-init");
      return this.options.useTransform ? (h = cc11001100_hook("h", h[y.style.transform].split(")")[0].split(", "), "assign"), x = cc11001100_hook("x", +(h[12] || h[4]), "assign"), c = cc11001100_hook("c", +(h[13] || h[5]), "assign")) : (x = cc11001100_hook("x", +h.left.replace(/[^-\d.]/g, ""), "assign"), c = cc11001100_hook("c", +h.top.replace(/[^-\d.]/g, ""), "assign")), {
        x: cc11001100_hook("x", x, "object-key-init"),
        y: cc11001100_hook("y", c, "object-key-init")
      };
    },
    _initIndicators: function () {
      function a(a) {
        cc11001100_hook("a", a, "function-parameter");
        for (var i = cc11001100_hook("i", y.indicators.length, "var-init"); i--;) a.call(y.indicators[i]);
      }
      var c,
        h = cc11001100_hook("h", this.options.interactiveScrollbars, "var-init"),
        v = cc11001100_hook("v", "string" != typeof this.options.scrollbars, "var-init"),
        w = cc11001100_hook("w", [], "var-init"),
        y = cc11001100_hook("y", this, "var-init");
      this.indicators = cc11001100_hook("this.indicators", [], "assign"), this.options.scrollbars && (this.options.scrollY && (c = cc11001100_hook("c", {
        el: cc11001100_hook("el", g("v", h, this.options.scrollbars), "object-key-init"),
        interactive: cc11001100_hook("interactive", h, "object-key-init"),
        defaultScrollbars: cc11001100_hook("defaultScrollbars", !0, "object-key-init"),
        customStyle: cc11001100_hook("customStyle", v, "object-key-init"),
        resize: cc11001100_hook("resize", this.options.resizeScrollbars, "object-key-init"),
        shrink: cc11001100_hook("shrink", this.options.shrinkScrollbars, "object-key-init"),
        fade: cc11001100_hook("fade", this.options.fadeScrollbars, "object-key-init"),
        listenX: cc11001100_hook("listenX", !1, "object-key-init")
      }, "assign"), this.wrapper.appendChild(c.el), w.push(c)), this.options.scrollX && (c = cc11001100_hook("c", {
        el: cc11001100_hook("el", g("h", h, this.options.scrollbars), "object-key-init"),
        interactive: cc11001100_hook("interactive", h, "object-key-init"),
        defaultScrollbars: cc11001100_hook("defaultScrollbars", !0, "object-key-init"),
        customStyle: cc11001100_hook("customStyle", v, "object-key-init"),
        resize: cc11001100_hook("resize", this.options.resizeScrollbars, "object-key-init"),
        shrink: cc11001100_hook("shrink", this.options.shrinkScrollbars, "object-key-init"),
        fade: cc11001100_hook("fade", this.options.fadeScrollbars, "object-key-init"),
        listenY: cc11001100_hook("listenY", !1, "object-key-init")
      }, "assign"), this.wrapper.appendChild(c.el), w.push(c))), this.options.indicators && (w = cc11001100_hook("w", w.concat(this.options.indicators), "assign"));
      for (var i = cc11001100_hook("i", w.length, "var-init"); i--;) this.indicators.push(new b(this, w[i]));
      this.options.fadeScrollbars && (this.on("scrollEnd", function () {
        a(function () {
          this.fade();
        });
      }), this.on("scrollCancel", function () {
        a(function () {
          this.fade();
        });
      }), this.on("scrollStart", function () {
        a(function () {
          this.fade(1);
        });
      }), this.on("beforeScrollStart", function () {
        a(function () {
          this.fade(1, !0);
        });
      })), this.on("refresh", function () {
        a(function () {
          this.refresh();
        });
      }), this.on("destroy", function () {
        a(function () {
          this.destroy();
        }), delete this.indicators;
      });
    },
    _initWheel: function () {
      y.addEvent(this.wrapper, "wheel", this), y.addEvent(this.wrapper, "mousewheel", this), y.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function () {
        y.removeEvent(this.wrapper, "wheel", this), y.removeEvent(this.wrapper, "mousewheel", this), y.removeEvent(this.wrapper, "DOMMouseScroll", this);
      });
    },
    _wheel: function (e) {
      if (this.enabled) {
        e.preventDefault(), e.stopPropagation();
        var a,
          c,
          v,
          g,
          b = cc11001100_hook("b", this, "var-init");
        if (void 0 === this.wheelTimeout && b._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = cc11001100_hook("this.wheelTimeout", setTimeout(function () {
          b._execEvent("scrollEnd"), b.wheelTimeout = cc11001100_hook("b.wheelTimeout", void 0, "assign");
        }, 400), "assign"), "deltaX" in e) 1 === e.deltaMode ? (a = cc11001100_hook("a", -e.deltaX * this.options.mouseWheelSpeed, "assign"), c = cc11001100_hook("c", -e.deltaY * this.options.mouseWheelSpeed, "assign")) : (a = cc11001100_hook("a", -e.deltaX, "assign"), c = cc11001100_hook("c", -e.deltaY, "assign"));else if ("wheelDeltaX" in e) a = cc11001100_hook("a", e.wheelDeltaX / 120 * this.options.mouseWheelSpeed, "assign"), c = cc11001100_hook("c", e.wheelDeltaY / 120 * this.options.mouseWheelSpeed, "assign");else if ("wheelDelta" in e) a = cc11001100_hook("a", c = cc11001100_hook("c", e.wheelDelta / 120 * this.options.mouseWheelSpeed, "assign"), "assign");else {
          if (!("detail" in e)) return;
          a = cc11001100_hook("a", c = cc11001100_hook("c", -e.detail / 3 * this.options.mouseWheelSpeed, "assign"), "assign");
        }
        if (a *= cc11001100_hook("a", this.options.invertWheelDirection, "assign"), c *= cc11001100_hook("c", this.options.invertWheelDirection, "assign"), this.hasVerticalScroll || (a = cc11001100_hook("a", c, "assign"), c = cc11001100_hook("c", 0, "assign")), this.options.snap) return v = cc11001100_hook("v", this.currentPage.pageX, "assign"), g = cc11001100_hook("g", this.currentPage.pageY, "assign"), a > 0 ? v-- : 0 > a && v++, c > 0 ? g-- : 0 > c && g++, void this.goToPage(v, g);
        v = cc11001100_hook("v", this.x + h.round(this.hasHorizontalScroll ? a : 0), "assign"), g = cc11001100_hook("g", this.y + h.round(this.hasVerticalScroll ? c : 0), "assign"), v > 0 ? v = cc11001100_hook("v", 0, "assign") : v < this.maxScrollX && (v = cc11001100_hook("v", this.maxScrollX, "assign")), g > 0 ? g = cc11001100_hook("g", 0, "assign") : g < this.maxScrollY && (g = cc11001100_hook("g", this.maxScrollY, "assign")), this.scrollTo(v, g, 0), this.options.probeType > 1 && this._execEvent("scroll");
      }
    },
    _initSnap: function () {
      this.currentPage = cc11001100_hook("this.currentPage", {}, "assign"), "string" == typeof this.options.snap && (this.options.snap = cc11001100_hook("this.options.snap", this.scroller.querySelectorAll(this.options.snap), "assign")), this.on("refresh", function () {
        var l,
          n,
          a,
          c,
          v,
          g,
          i = cc11001100_hook("i", 0, "var-init"),
          m = cc11001100_hook("m", 0, "var-init"),
          x = cc11001100_hook("x", 0, "var-init"),
          b = cc11001100_hook("b", this.options.snapStepX || this.wrapperWidth, "var-init"),
          w = cc11001100_hook("w", this.options.snapStepY || this.wrapperHeight, "var-init");
        if (this.pages = cc11001100_hook("this.pages", [], "assign"), this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
          if (this.options.snap === !0) for (a = cc11001100_hook("a", h.round(b / 2), "assign"), c = cc11001100_hook("c", h.round(w / 2), "assign"); x > -this.scrollerWidth;) {
            for (this.pages[i] = cc11001100_hook("this.pages[i]", [], "assign"), l = cc11001100_hook("l", 0, "assign"), v = cc11001100_hook("v", 0, "assign"); v > -this.scrollerHeight;) this.pages[i][l] = cc11001100_hook("this.pages[i][l]", {
              x: cc11001100_hook("x", h.max(x, this.maxScrollX), "object-key-init"),
              y: cc11001100_hook("y", h.max(v, this.maxScrollY), "object-key-init"),
              width: cc11001100_hook("width", b, "object-key-init"),
              height: cc11001100_hook("height", w, "object-key-init"),
              cx: cc11001100_hook("cx", x - a, "object-key-init"),
              cy: cc11001100_hook("cy", v - c, "object-key-init")
            }, "assign"), v -= cc11001100_hook("v", w, "assign"), l++;
            x -= cc11001100_hook("x", b, "assign"), i++;
          } else for (g = cc11001100_hook("g", this.options.snap, "assign"), l = cc11001100_hook("l", g.length, "assign"), n = cc11001100_hook("n", -1, "assign"); l > i; i++) (0 === i || g[i].offsetLeft <= g[i - 1].offsetLeft) && (m = cc11001100_hook("m", 0, "assign"), n++), this.pages[m] || (this.pages[m] = cc11001100_hook("this.pages[m]", [], "assign")), x = cc11001100_hook("x", h.max(-g[i].offsetLeft, this.maxScrollX), "assign"), v = cc11001100_hook("v", h.max(-g[i].offsetTop, this.maxScrollY), "assign"), a = cc11001100_hook("a", x - h.round(g[i].offsetWidth / 2), "assign"), c = cc11001100_hook("c", v - h.round(g[i].offsetHeight / 2), "assign"), this.pages[m][n] = cc11001100_hook("this.pages[m][n]", {
            x: cc11001100_hook("x", x, "object-key-init"),
            y: cc11001100_hook("y", v, "object-key-init"),
            width: cc11001100_hook("width", g[i].offsetWidth, "object-key-init"),
            height: cc11001100_hook("height", g[i].offsetHeight, "object-key-init"),
            cx: cc11001100_hook("cx", a, "object-key-init"),
            cy: cc11001100_hook("cy", c, "object-key-init")
          }, "assign"), x > this.maxScrollX && m++;
          this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 === 0 ? (this.snapThresholdX = cc11001100_hook("this.snapThresholdX", this.options.snapThreshold, "assign"), this.snapThresholdY = cc11001100_hook("this.snapThresholdY", this.options.snapThreshold, "assign")) : (this.snapThresholdX = cc11001100_hook("this.snapThresholdX", h.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), "assign"), this.snapThresholdY = cc11001100_hook("this.snapThresholdY", h.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold), "assign"));
        }
      }), this.on("flick", function () {
        var a = cc11001100_hook("a", this.options.snapSpeed || h.max(h.max(h.min(h.abs(this.x - this.startX), 1e3), h.min(h.abs(this.y - this.startY), 1e3)), 300), "var-init");
        this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, a);
      });
    },
    _nearestSnap: function (x, a) {
      if (!this.pages.length) return {
        x: cc11001100_hook("x", 0, "object-key-init"),
        y: cc11001100_hook("y", 0, "object-key-init"),
        pageX: cc11001100_hook("pageX", 0, "object-key-init"),
        pageY: cc11001100_hook("pageY", 0, "object-key-init")
      };
      var i = cc11001100_hook("i", 0, "var-init"),
        l = cc11001100_hook("l", this.pages.length, "var-init"),
        m = cc11001100_hook("m", 0, "var-init");
      if (h.abs(x - this.absStartX) < this.snapThresholdX && h.abs(a - this.absStartY) < this.snapThresholdY) return this.currentPage;
      for (x > 0 ? x = cc11001100_hook("x", 0, "assign") : x < this.maxScrollX && (x = cc11001100_hook("x", this.maxScrollX, "assign")), a > 0 ? a = cc11001100_hook("a", 0, "assign") : a < this.maxScrollY && (a = cc11001100_hook("a", this.maxScrollY, "assign")); l > i; i++) if (x >= this.pages[i][0].cx) {
        x = cc11001100_hook("x", this.pages[i][0].x, "assign");
        break;
      }
      for (l = cc11001100_hook("l", this.pages[i].length, "assign"); l > m; m++) if (a >= this.pages[0][m].cy) {
        a = cc11001100_hook("a", this.pages[0][m].y, "assign");
        break;
      }
      return i == this.currentPage.pageX && (i += cc11001100_hook("i", this.directionX, "assign"), 0 > i ? i = cc11001100_hook("i", 0, "assign") : i >= this.pages.length && (i = cc11001100_hook("i", this.pages.length - 1, "assign")), x = cc11001100_hook("x", this.pages[i][0].x, "assign")), m == this.currentPage.pageY && (m += cc11001100_hook("m", this.directionY, "assign"), 0 > m ? m = cc11001100_hook("m", 0, "assign") : m >= this.pages[0].length && (m = cc11001100_hook("m", this.pages[0].length - 1, "assign")), a = cc11001100_hook("a", this.pages[0][m].y, "assign")), {
        x: cc11001100_hook("x", x, "object-key-init"),
        y: cc11001100_hook("y", a, "object-key-init"),
        pageX: cc11001100_hook("pageX", i, "object-key-init"),
        pageY: cc11001100_hook("pageY", m, "object-key-init")
      };
    },
    goToPage: function (x, a, c, v) {
      v = cc11001100_hook("v", v || this.options.bounceEasing, "assign"), x >= this.pages.length ? x = cc11001100_hook("x", this.pages.length - 1, "assign") : 0 > x && (x = cc11001100_hook("x", 0, "assign")), a >= this.pages[x].length ? a = cc11001100_hook("a", this.pages[x].length - 1, "assign") : 0 > a && (a = cc11001100_hook("a", 0, "assign"));
      var g = cc11001100_hook("g", this.pages[x][a].x, "var-init"),
        b = cc11001100_hook("b", this.pages[x][a].y, "var-init");
      c = cc11001100_hook("c", void 0 === c ? this.options.snapSpeed || h.max(h.max(h.min(h.abs(g - this.x), 1e3), h.min(h.abs(b - this.y), 1e3)), 300) : c, "assign"), this.currentPage = cc11001100_hook("this.currentPage", {
        x: cc11001100_hook("x", g, "object-key-init"),
        y: cc11001100_hook("y", b, "object-key-init"),
        pageX: cc11001100_hook("pageX", x, "object-key-init"),
        pageY: cc11001100_hook("pageY", a, "object-key-init")
      }, "assign"), this.scrollTo(g, b, c, v);
    },
    next: function (a, c) {
      var x = cc11001100_hook("x", this.currentPage.pageX, "var-init"),
        h = cc11001100_hook("h", this.currentPage.pageY, "var-init");
      x++, x >= this.pages.length && this.hasVerticalScroll && (x = cc11001100_hook("x", 0, "assign"), h++), this.goToPage(x, h, a, c);
    },
    prev: function (a, c) {
      var x = cc11001100_hook("x", this.currentPage.pageX, "var-init"),
        h = cc11001100_hook("h", this.currentPage.pageY, "var-init");
      x--, 0 > x && this.hasVerticalScroll && (x = cc11001100_hook("x", 0, "assign"), h--), this.goToPage(x, h, a, c);
    },
    _initKeys: function () {
      var i,
        c = cc11001100_hook("c", {
          pageUp: cc11001100_hook("pageUp", 33, "object-key-init"),
          pageDown: cc11001100_hook("pageDown", 34, "object-key-init"),
          end: cc11001100_hook("end", 35, "object-key-init"),
          home: cc11001100_hook("home", 36, "object-key-init"),
          left: cc11001100_hook("left", 37, "object-key-init"),
          up: cc11001100_hook("up", 38, "object-key-init"),
          right: cc11001100_hook("right", 39, "object-key-init"),
          down: cc11001100_hook("down", 40, "object-key-init")
        }, "var-init");
      if ("object" == typeof this.options.keyBindings) for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = cc11001100_hook("this.options.keyBindings[i]", this.options.keyBindings[i].toUpperCase().charCodeAt(0), "assign"));else this.options.keyBindings = cc11001100_hook("this.options.keyBindings", {}, "assign");
      for (i in c) this.options.keyBindings[i] = cc11001100_hook("this.options.keyBindings[i]", this.options.keyBindings[i] || c[i], "assign");
      y.addEvent(a, "keydown", this), this.on("destroy", function () {
        y.removeEvent(a, "keydown", this);
      });
    },
    _key: function (e) {
      if (this.enabled) {
        var a,
          c = cc11001100_hook("c", this.options.snap, "var-init"),
          v = cc11001100_hook("v", c ? this.currentPage.pageX : this.x, "var-init"),
          g = cc11001100_hook("g", c ? this.currentPage.pageY : this.y, "var-init"),
          b = cc11001100_hook("b", y.getTime(), "var-init"),
          w = cc11001100_hook("w", this.keyTime || 0, "var-init"),
          S = cc11001100_hook("S", .25, "var-init");
        switch (this.options.useTransition && this.isInTransition && (a = cc11001100_hook("a", this.getComputedPosition(), "assign"), this._translate(h.round(a.x), h.round(a.y)), this.isInTransition = cc11001100_hook("this.isInTransition", !1, "assign")), this.keyAcceleration = cc11001100_hook("this.keyAcceleration", 200 > b - w ? h.min(this.keyAcceleration + S, 50) : 0, "assign"), e.keyCode) {
          case this.options.keyBindings.pageUp:
            this.hasHorizontalScroll && !this.hasVerticalScroll ? v += cc11001100_hook("v", c ? 1 : this.wrapperWidth, "assign") : g += cc11001100_hook("g", c ? 1 : this.wrapperHeight, "assign");
            break;
          case this.options.keyBindings.pageDown:
            this.hasHorizontalScroll && !this.hasVerticalScroll ? v -= cc11001100_hook("v", c ? 1 : this.wrapperWidth, "assign") : g -= cc11001100_hook("g", c ? 1 : this.wrapperHeight, "assign");
            break;
          case this.options.keyBindings.end:
            v = cc11001100_hook("v", c ? this.pages.length - 1 : this.maxScrollX, "assign"), g = cc11001100_hook("g", c ? this.pages[0].length - 1 : this.maxScrollY, "assign");
            break;
          case this.options.keyBindings.home:
            v = cc11001100_hook("v", 0, "assign"), g = cc11001100_hook("g", 0, "assign");
            break;
          case this.options.keyBindings.left:
            v += cc11001100_hook("v", c ? -1 : 5 + this.keyAcceleration >> 0, "assign");
            break;
          case this.options.keyBindings.up:
            g += cc11001100_hook("g", c ? 1 : 5 + this.keyAcceleration >> 0, "assign");
            break;
          case this.options.keyBindings.right:
            v -= cc11001100_hook("v", c ? -1 : 5 + this.keyAcceleration >> 0, "assign");
            break;
          case this.options.keyBindings.down:
            g -= cc11001100_hook("g", c ? 1 : 5 + this.keyAcceleration >> 0, "assign");
            break;
          default:
            return;
        }
        if (c) return void this.goToPage(v, g);
        v > 0 ? (v = cc11001100_hook("v", 0, "assign"), this.keyAcceleration = cc11001100_hook("this.keyAcceleration", 0, "assign")) : v < this.maxScrollX && (v = cc11001100_hook("v", this.maxScrollX, "assign"), this.keyAcceleration = cc11001100_hook("this.keyAcceleration", 0, "assign")), g > 0 ? (g = cc11001100_hook("g", 0, "assign"), this.keyAcceleration = cc11001100_hook("this.keyAcceleration", 0, "assign")) : g < this.maxScrollY && (g = cc11001100_hook("g", this.maxScrollY, "assign"), this.keyAcceleration = cc11001100_hook("this.keyAcceleration", 0, "assign")), this.scrollTo(v, g, 0), this.keyTime = cc11001100_hook("this.keyTime", b, "assign");
      }
    },
    _animate: function (a, c, h, v) {
      function g() {
        var $,
          E,
          C,
          P = cc11001100_hook("P", y.getTime(), "var-init");
        return P >= T ? (b.isAnimating = cc11001100_hook("b.isAnimating", !1, "assign"), b._translate(a, c), void (b.resetPosition(b.options.bounceTime) || b._execEvent("scrollEnd"))) : (P = cc11001100_hook("P", (P - k) / h, "assign"), C = cc11001100_hook("C", v(P), "assign"), $ = cc11001100_hook("$", (a - S) * C + S, "assign"), E = cc11001100_hook("E", (c - _) * C + _, "assign"), b._translate($, E), b.isAnimating && w(g), void (3 == b.options.probeType && b._execEvent("scroll")));
      }
      var b = cc11001100_hook("b", this, "var-init"),
        S = cc11001100_hook("S", this.x, "var-init"),
        _ = cc11001100_hook("_", this.y, "var-init"),
        k = cc11001100_hook("k", y.getTime(), "var-init"),
        T = cc11001100_hook("T", k + h, "var-init");
      this.isAnimating = cc11001100_hook("this.isAnimating", !0, "assign"), g();
    },
    handleEvent: function (e) {
      switch (e.type) {
        case "touchstart":
        case "pointerdown":
        case "MSPointerDown":
        case "mousedown":
          this._start(e);
          break;
        case "touchmove":
        case "pointermove":
        case "MSPointerMove":
        case "mousemove":
          this._move(e);
          break;
        case "touchend":
        case "pointerup":
        case "MSPointerUp":
        case "mouseup":
        case "touchcancel":
        case "pointercancel":
        case "MSPointerCancel":
        case "mousecancel":
          this._end(e);
          break;
        case "orientationchange":
        case "resize":
          this._resize();
          break;
        case "transitionend":
        case "webkitTransitionEnd":
        case "oTransitionEnd":
        case "MSTransitionEnd":
          this._transitionEnd(e);
          break;
        case "wheel":
        case "DOMMouseScroll":
        case "mousewheel":
          this._wheel(e);
          break;
        case "keydown":
          this._key(e);
          break;
        case "click":
          e._constructed || (e.preventDefault(), e.stopPropagation());
      }
    }
  }, "assign"), b.prototype = cc11001100_hook("b.prototype", {
    handleEvent: function (e) {
      switch (e.type) {
        case "touchstart":
        case "pointerdown":
        case "MSPointerDown":
        case "mousedown":
          this._start(e);
          break;
        case "touchmove":
        case "pointermove":
        case "MSPointerMove":
        case "mousemove":
          this._move(e);
          break;
        case "touchend":
        case "pointerup":
        case "MSPointerUp":
        case "mouseup":
        case "touchcancel":
        case "pointercancel":
        case "MSPointerCancel":
        case "mousecancel":
          this._end(e);
      }
    },
    destroy: function () {
      this.options.interactive && (y.removeEvent(this.indicator, "touchstart", this), y.removeEvent(this.indicator, y.prefixPointerEvent("pointerdown"), this), y.removeEvent(this.indicator, "mousedown", this), y.removeEvent(a, "touchmove", this), y.removeEvent(a, y.prefixPointerEvent("pointermove"), this), y.removeEvent(a, "mousemove", this), y.removeEvent(a, "touchend", this), y.removeEvent(a, y.prefixPointerEvent("pointerup"), this), y.removeEvent(a, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper);
    },
    _start: function (e) {
      var c = cc11001100_hook("c", e.touches ? e.touches[0] : e, "var-init");
      e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = cc11001100_hook("this.initiated", !0, "assign"), this.moved = cc11001100_hook("this.moved", !1, "assign"), this.lastPointX = cc11001100_hook("this.lastPointX", c.pageX, "assign"), this.lastPointY = cc11001100_hook("this.lastPointY", c.pageY, "assign"), this.startTime = cc11001100_hook("this.startTime", y.getTime(), "assign"), this.options.disableTouch || y.addEvent(a, "touchmove", this), this.options.disablePointer || y.addEvent(a, y.prefixPointerEvent("pointermove"), this), this.options.disableMouse || y.addEvent(a, "mousemove", this), this.scroller._execEvent("beforeScrollStart");
    },
    _move: function (e) {
      var a,
        c,
        h,
        v,
        g = cc11001100_hook("g", e.touches ? e.touches[0] : e, "var-init"),
        b = cc11001100_hook("b", y.getTime(), "var-init");
      this.moved || this.scroller._execEvent("scrollStart"), this.moved = cc11001100_hook("this.moved", !0, "assign"), a = cc11001100_hook("a", g.pageX - this.lastPointX, "assign"), this.lastPointX = cc11001100_hook("this.lastPointX", g.pageX, "assign"), c = cc11001100_hook("c", g.pageY - this.lastPointY, "assign"), this.lastPointY = cc11001100_hook("this.lastPointY", g.pageY, "assign"), h = cc11001100_hook("h", this.x + a, "assign"), v = cc11001100_hook("v", this.y + c, "assign"), this._pos(h, v), 1 == this.scroller.options.probeType && b - this.startTime > 300 ? (this.startTime = cc11001100_hook("this.startTime", b, "assign"), this.scroller._execEvent("scroll")) : this.scroller.options.probeType > 1 && this.scroller._execEvent("scroll"), e.preventDefault(), e.stopPropagation();
    },
    _end: function (e) {
      if (this.initiated) {
        if (this.initiated = cc11001100_hook("this.initiated", !1, "assign"), e.preventDefault(), e.stopPropagation(), y.removeEvent(a, "touchmove", this), y.removeEvent(a, y.prefixPointerEvent("pointermove"), this), y.removeEvent(a, "mousemove", this), this.scroller.options.snap) {
          var c = cc11001100_hook("c", this.scroller._nearestSnap(this.scroller.x, this.scroller.y), "var-init"),
            v = cc11001100_hook("v", this.options.snapSpeed || h.max(h.max(h.min(h.abs(this.scroller.x - c.x), 1e3), h.min(h.abs(this.scroller.y - c.y), 1e3)), 300), "var-init");
          (this.scroller.x != c.x || this.scroller.y != c.y) && (this.scroller.directionX = cc11001100_hook("this.scroller.directionX", 0, "assign"), this.scroller.directionY = cc11001100_hook("this.scroller.directionY", 0, "assign"), this.scroller.currentPage = cc11001100_hook("this.scroller.currentPage", c, "assign"), this.scroller.scrollTo(c.x, c.y, v, this.scroller.options.bounceEasing));
        }
        this.moved && this.scroller._execEvent("scrollEnd");
      }
    },
    transitionTime: function (a) {
      a = cc11001100_hook("a", a || 0, "assign"), this.indicatorStyle[y.style.transitionDuration] = cc11001100_hook("this.indicatorStyle[y.style.transitionDuration]", a + "ms", "assign"), !a && y.isBadAndroid && (this.indicatorStyle[y.style.transitionDuration] = cc11001100_hook("this.indicatorStyle[y.style.transitionDuration]", "0.001s", "assign"));
    },
    transitionTimingFunction: function (a) {
      this.indicatorStyle[y.style.transitionTimingFunction] = cc11001100_hook("this.indicatorStyle[y.style.transitionTimingFunction]", a, "assign");
    },
    refresh: function () {
      this.transitionTime(), this.indicatorStyle.display = cc11001100_hook("this.indicatorStyle.display", this.options.listenX && !this.options.listenY ? this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.scroller.hasVerticalScroll ? "block" : "none" : this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", "assign"), this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (y.addClass(this.wrapper, "iScrollBothScrollbars"), y.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = cc11001100_hook("this.wrapper.style.right", "8px", "assign") : this.wrapper.style.bottom = cc11001100_hook("this.wrapper.style.bottom", "8px", "assign"))) : (y.removeClass(this.wrapper, "iScrollBothScrollbars"), y.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = cc11001100_hook("this.wrapper.style.right", "2px", "assign") : this.wrapper.style.bottom = cc11001100_hook("this.wrapper.style.bottom", "2px", "assign"))), this.wrapper.offsetHeight, this.options.listenX && (this.wrapperWidth = cc11001100_hook("this.wrapperWidth", this.wrapper.clientWidth, "assign"), this.options.resize ? (this.indicatorWidth = cc11001100_hook("this.indicatorWidth", h.max(h.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), "assign"), this.indicatorStyle.width = cc11001100_hook("this.indicatorStyle.width", this.indicatorWidth + "px", "assign")) : this.indicatorWidth = cc11001100_hook("this.indicatorWidth", this.indicator.clientWidth, "assign"), this.maxPosX = cc11001100_hook("this.maxPosX", this.wrapperWidth - this.indicatorWidth, "assign"), "clip" == this.options.shrink ? (this.minBoundaryX = cc11001100_hook("this.minBoundaryX", -this.indicatorWidth + 8, "assign"), this.maxBoundaryX = cc11001100_hook("this.maxBoundaryX", this.wrapperWidth - 8, "assign")) : (this.minBoundaryX = cc11001100_hook("this.minBoundaryX", 0, "assign"), this.maxBoundaryX = cc11001100_hook("this.maxBoundaryX", this.maxPosX, "assign")), this.sizeRatioX = cc11001100_hook("this.sizeRatioX", this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX, "assign")), this.options.listenY && (this.wrapperHeight = cc11001100_hook("this.wrapperHeight", this.wrapper.clientHeight, "assign"), this.options.resize ? (this.indicatorHeight = cc11001100_hook("this.indicatorHeight", h.max(h.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), "assign"), this.indicatorStyle.height = cc11001100_hook("this.indicatorStyle.height", this.indicatorHeight + "px", "assign")) : this.indicatorHeight = cc11001100_hook("this.indicatorHeight", this.indicator.clientHeight, "assign"), this.maxPosY = cc11001100_hook("this.maxPosY", this.wrapperHeight - this.indicatorHeight, "assign"), "clip" == this.options.shrink ? (this.minBoundaryY = cc11001100_hook("this.minBoundaryY", -this.indicatorHeight + 8, "assign"), this.maxBoundaryY = cc11001100_hook("this.maxBoundaryY", this.wrapperHeight - 8, "assign")) : (this.minBoundaryY = cc11001100_hook("this.minBoundaryY", 0, "assign"), this.maxBoundaryY = cc11001100_hook("this.maxBoundaryY", this.maxPosY, "assign")), this.maxPosY = cc11001100_hook("this.maxPosY", this.wrapperHeight - this.indicatorHeight, "assign"), this.sizeRatioY = cc11001100_hook("this.sizeRatioY", this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY, "assign")), this.updatePosition();
    },
    updatePosition: function () {
      var x = cc11001100_hook("x", this.options.listenX && h.round(this.sizeRatioX * this.scroller.x) || 0, "var-init"),
        a = cc11001100_hook("a", this.options.listenY && h.round(this.sizeRatioY * this.scroller.y) || 0, "var-init");
      this.options.ignoreBoundaries || (x < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = cc11001100_hook("this.width", h.max(this.indicatorWidth + x, 8), "assign"), this.indicatorStyle.width = cc11001100_hook("this.indicatorStyle.width", this.width + "px", "assign")), x = cc11001100_hook("x", this.minBoundaryX, "assign")) : x > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = cc11001100_hook("this.width", h.max(this.indicatorWidth - (x - this.maxPosX), 8), "assign"), this.indicatorStyle.width = cc11001100_hook("this.indicatorStyle.width", this.width + "px", "assign"), x = cc11001100_hook("x", this.maxPosX + this.indicatorWidth - this.width, "assign")) : x = cc11001100_hook("x", this.maxBoundaryX, "assign") : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = cc11001100_hook("this.width", this.indicatorWidth, "assign"), this.indicatorStyle.width = cc11001100_hook("this.indicatorStyle.width", this.width + "px", "assign")), a < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = cc11001100_hook("this.height", h.max(this.indicatorHeight + 3 * a, 8), "assign"), this.indicatorStyle.height = cc11001100_hook("this.indicatorStyle.height", this.height + "px", "assign")), a = cc11001100_hook("a", this.minBoundaryY, "assign")) : a > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = cc11001100_hook("this.height", h.max(this.indicatorHeight - 3 * (a - this.maxPosY), 8), "assign"), this.indicatorStyle.height = cc11001100_hook("this.indicatorStyle.height", this.height + "px", "assign"), a = cc11001100_hook("a", this.maxPosY + this.indicatorHeight - this.height, "assign")) : a = cc11001100_hook("a", this.maxBoundaryY, "assign") : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = cc11001100_hook("this.height", this.indicatorHeight, "assign"), this.indicatorStyle.height = cc11001100_hook("this.indicatorStyle.height", this.height + "px", "assign"))), this.x = cc11001100_hook("this.x", x, "assign"), this.y = cc11001100_hook("this.y", a, "assign"), this.scroller.options.useTransform ? this.indicatorStyle[y.style.transform] = cc11001100_hook("this.indicatorStyle[y.style.transform]", "translate(" + x + "px," + a + "px)" + this.scroller.translateZ, "assign") : (this.indicatorStyle.left = cc11001100_hook("this.indicatorStyle.left", x + "px", "assign"), this.indicatorStyle.top = cc11001100_hook("this.indicatorStyle.top", a + "px", "assign"));
    },
    _pos: function (x, a) {
      0 > x ? x = cc11001100_hook("x", 0, "assign") : x > this.maxPosX && (x = cc11001100_hook("x", this.maxPosX, "assign")), 0 > a ? a = cc11001100_hook("a", 0, "assign") : a > this.maxPosY && (a = cc11001100_hook("a", this.maxPosY, "assign")), x = cc11001100_hook("x", this.options.listenX ? h.round(x / this.sizeRatioX) : this.scroller.x, "assign"), a = cc11001100_hook("a", this.options.listenY ? h.round(a / this.sizeRatioY) : this.scroller.y, "assign"), this.scroller.scrollTo(x, a);
    },
    fade: function (a, c) {
      if (!c || this.visible) {
        clearTimeout(this.fadeTimeout), this.fadeTimeout = cc11001100_hook("this.fadeTimeout", null, "assign");
        var h = cc11001100_hook("h", a ? 250 : 500, "var-init"),
          v = cc11001100_hook("v", a ? 0 : 300, "var-init");
        a = cc11001100_hook("a", a ? "1" : "0", "assign"), this.wrapperStyle[y.style.transitionDuration] = cc11001100_hook("this.wrapperStyle[y.style.transitionDuration]", h + "ms", "assign"), this.fadeTimeout = cc11001100_hook("this.fadeTimeout", setTimeout(function (a) {
          this.wrapperStyle.opacity = cc11001100_hook("this.wrapperStyle.opacity", a, "assign"), this.visible = cc11001100_hook("this.visible", +a, "assign");
        }.bind(this, a), v), "assign");
      }
    }
  }, "assign"), v.utils = cc11001100_hook("v.utils", y, "assign"), "function" == typeof define && define.amd ? define("wiseindex/tabs/news/activity/iscroll", function () {
    return v;
  }) : a.IScroll = cc11001100_hook("a.IScroll", v, "assign");
}(window, document, Math), define("wiseindex/tabs/news/activity/bdscroll", function () {
  var a = cc11001100_hook("a", require("wiseindex/tabs/news/activity/iscroll"), "var-init"),
    c = function (a, c) {
      if (a) {
        var h = cc11001100_hook("h", this, "var-init");
        h.el = cc11001100_hook("h.el", a, "assign"), h.options = cc11001100_hook("h.options", $.extend({
          disableMouse: cc11001100_hook("disableMouse", !0, "object-key-init"),
          scrollX: cc11001100_hook("scrollX", !0, "object-key-init"),
          scrollY: cc11001100_hook("scrollY", !1, "object-key-init"),
          momentum: cc11001100_hook("momentum", !0, "object-key-init"),
          eventPassthrough: cc11001100_hook("eventPassthrough", !0, "object-key-init"),
          scrollbars: cc11001100_hook("scrollbars", !1, "object-key-init"),
          snap: cc11001100_hook("snap", !1, "object-key-init"),
          snapThreshold: cc11001100_hook("snapThreshold", .1, "object-key-init"),
          snapSpeed: cc11001100_hook("snapSpeed", 400, "object-key-init")
        }, c), "assign"), h.preprocess();
      }
    },
    h = function () {};
  return h.prototype = cc11001100_hook("h.prototype", a.prototype, "assign"), c.prototype = cc11001100_hook("c.prototype", new h(), "assign"), c.prototype.constructor = cc11001100_hook("c.prototype.constructor", c, "assign"), c.prototype.preprocess = cc11001100_hook("c.prototype.preprocess", function () {
    var c = cc11001100_hook("c", this, "var-init"),
      h = cc11001100_hook("h", !1, "var-init");
    a.call(c, c.el, c.options), $(window).on("orientationchange", function () {
      setTimeout(function () {
        var a = cc11001100_hook("a", window.innerWidth > 406 ? window.innerWidth : 406, "var-init");
        $(".wa-image-scroll-wrapper").find(".wa-image-scroller").width(a), c.refresh();
      }, 100);
    }).on("pageshow", function () {
      c.refresh();
    }), $("body").one("onlyshowMore", function () {
      setTimeout(function () {
        c.refresh();
      }, 0);
    }), c.on("scrollStart", function () {
      h && ($(c.el).imageDelayload(), h = cc11001100_hook("h", !1, "assign"));
    }), c.options.snap && c.options.$indicator && c.on("scrollEnd", function () {
      var a = cc11001100_hook("a", this.currentPage.pageX, "var-init");
      c.options.$indicator.find("span").removeClass("c-scroll-dotty-now").eq(a).addClass("c-scroll-dotty-now");
    });
  }, "assign"), c;
}), define("wiseindex/tabs/news/activity/slider", function () {
  $.fn.feedSlider = cc11001100_hook("$.fn.feedSlider", function (e) {
    function i() {
      p = cc11001100_hook("p", $.extend(!0, {}, p, e), "assign"), r = cc11001100_hook("r", p.length || o.width(), "assign"), f = cc11001100_hook("f", p.options.length, "assign"), a = cc11001100_hook("a", parseInt(r / (f - 1), 10), "assign"), b = cc11001100_hook("b", p.defaultIndex, "assign");
      for (var i = cc11001100_hook("i", 0, "var-init"); f > i; i++) g.push(a * i);
      g.push(r), c.addClass(p.style.slider), h.addClass(p.style.bar), t(), s(b, g[b]);
    }
    function t() {
      for (var e, i = cc11001100_hook("i", [], "var-init"), a = cc11001100_hook("a", [], "var-init"), t = cc11001100_hook("t", 0, "var-init"); f > t; t++) e = cc11001100_hook("e", 0 === t || 2 === t ? "left: " + (g[t] - 7) + "px; text-align: left;" : "left: " + (g[t] - 14) + "px; text-align: right;", "assign"), i.push('<div class="feed-slider-option" style="' + e + '">' + p.options[t] + "</div>"), a.push('<div class="feed-slider-btn" style = "left:' + (g[t] - 3) + 'px"></div>'), v.html(i.join("")), c.html(a.join("") + '<div class="feed-slider-select-line"></div>'), x = cc11001100_hook("x", '<div class="feed-slider-title">字号调整</div>', "assign");
      l = cc11001100_hook("l", c.find(".feed-slider-select-line"), "assign");
      var d = cc11001100_hook("d", $('<div class="feed-slider-wrap"></div>'), "var-init");
      c.append(h), d.append(x), d.append(v), d.append(c), o.append(d), o.append('<div class="feed-slider-bg"></div>'), u = cc11001100_hook("u", v.children(), "assign"), u.eq(p.defaultIndex).addClass("feed-slider-selected");
    }
    function d() {
      var e, i, a, c;
      $(".feed-slider-bar").on("touchstart", function (i) {
        return e = cc11001100_hook("e", i.touches[0].pageX, "assign"), !1;
      }).on("touchmove", function (t) {
        i = cc11001100_hook("i", t.touches[0].pageX - e + g[b], "assign"), 0 > i ? (c = cc11001100_hook("c", 0, "assign"), i = cc11001100_hook("i", 0, "assign")) : i > r && (c = cc11001100_hook("c", 3, "assign"), i = cc11001100_hook("i", r, "assign")), s(c, i);
      }).on("touchmove", function (e) {
        e.preventDefault(), e.stopPropagation();
      }).on("touchend", function () {
        n(i);
      }), v.on("click", ".feed-slider-option", function () {
        var e = cc11001100_hook("e", $(this).index(), "var-init");
        n(g[e]);
      }), o.on("click", ".feed-slider-bg", function () {
        o.hide();
      }), $(".feed-slider-bg").on("touchmove", function (e) {
        e.preventDefault();
      }), $(".feed-slider-wrap").on("touchmove", function (e) {
        e.preventDefault();
      }), $(window).on("hashchange, popstate", function () {
        o.hide();
      }), $(window).on("orientationchange", function () {
        clearTimeout(a), a = cc11001100_hook("a", setTimeout(function () {
          if ("block" == $(".feed-slider-box").css("display")) {
            for (var a = cc11001100_hook("a", $(".feed-slider").width(), "var-init"), c = cc11001100_hook("c", parseInt(a / (f - 1), 10), "var-init"), i = cc11001100_hook("i", 0, "var-init"), h = cc11001100_hook("h", [], "var-init"); f > i; i++) h.push(c * i);
            $(".feed-slider-option").each(function (a, c) {
              $(c).css(0 == a || 2 == a ? {
                left: cc11001100_hook("left", h[a] - 7, "object-key-init")
              } : {
                left: cc11001100_hook("left", h[a] - 14, "object-key-init")
              });
            }), $(".feed-slider-btn").each(function (a, c) {
              $(c).css({
                left: cc11001100_hook("left", h[a] - 3, "object-key-init")
              });
            });
          }
        }, 50), "assign");
      });
    }
    function n(e) {
      cc11001100_hook("e", e, "function-parameter");
      h.addClass("feed-slider-bar-active"), b = cc11001100_hook("b", Math.round(e / a), "assign"), s(b, g[b]), setTimeout(function () {
        u.removeClass("feed-slider-selected"), h.removeClass("feed-slider-bar-active"), u.eq(b).addClass("feed-slider-selected"), o.data("index", b);
      }, 200), "function" == typeof p.cb && p.cb(b);
    }
    function s(i, e) {
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      $(".feed-slider-bar").css({
        left: cc11001100_hook("left", e - 13 + "px", "object-key-init")
      }), l.css({
        width: cc11001100_hook("width", e, "object-key-init")
      }), $(".feed-slider-btn").removeClass("active"), $(".feed-slider-btn").each(function (a, c) {
        i > a && $(c).addClass("active");
      });
    }
    var o = cc11001100_hook("o", $(this), "var-init");
    if (o.hasClass("feed-slider-inited")) return o;
    var r,
      a,
      l,
      f,
      p = cc11001100_hook("p", {
        options: cc11001100_hook("options", [0, 1, 2], "object-key-init"),
        defaultIndex: cc11001100_hook("defaultIndex", 0, "object-key-init"),
        length: cc11001100_hook("length", 100, "object-key-init"),
        style: {
          slider: cc11001100_hook("slider", "", "object-key-init"),
          bar: cc11001100_hook("bar", "", "object-key-init")
        },
        cb: function () {}
      }, "var-init"),
      c = cc11001100_hook("c", $('<div class="feed-slider"></div>'), "var-init"),
      h = cc11001100_hook("h", $('<div class="feed-slider-bar"></div>'), "var-init"),
      v = cc11001100_hook("v", $('<div class="feed-slider-select"></div>'), "var-init"),
      x = cc11001100_hook("x", $("<style></style"), "var-init"),
      u = cc11001100_hook("u", null, "var-init"),
      g = cc11001100_hook("g", [], "var-init"),
      b = cc11001100_hook("b", 0, "var-init");
    return i(), d(), o.addClass("feed-slider-inited"), o;
  }, "assign");
  var e = cc11001100_hook("e", $(".feed-slider-box"), "var-init");
  return 0 == e.length && (e = cc11001100_hook("e", $('<div class="feed-slider-box"></div>'), "assign"), $("body").append(e)), e;
}), define("wiseindex/tabs/news/activity/newsdetail", ["wiseindex/tabs/news/activity/postmessage", "wiseindex/tabs/news/activity/popup", "wiseindex/tabs/news/activity/toast", "wiseindex/lib/thunder/thunder", "wiseindex/lib/backflow", "plugin/monitor"], function (a, c, h, v, g) {
  var b = cc11001100_hook("b", "1", "var-init"),
    w = cc11001100_hook("w", "neibu_wise_huati_luodiye_yemianfuceng", "var-init"),
    y = cc11001100_hook("y", "1019447k", "var-init"),
    S = cc11001100_hook("S", "recdetail_huati", "var-init"),
    _ = cc11001100_hook("_", "", "var-init"),
    k = cc11001100_hook("k", window, "var-init"),
    T = function () {
      function c(c) {
        cc11001100_hook("c", c, "function-parameter");
        _e = cc11001100_hook("_e", {
          frameData: cc11001100_hook("frameData", c.frameData || {}, "object-key-init"),
          prefetch: cc11001100_hook("prefetch", c.prefetch || 0, "object-key-init"),
          recommendCall: cc11001100_hook("recommendCall", null, "object-key-init"),
          id: cc11001100_hook("id", c.id, "object-key-init")
        }, "assign"), k.onbeforeunload = cc11001100_hook("k.onbeforeunload", function () {
          Q();
        }, "assign"), ue = cc11001100_hook("ue", _e.frameData.linkList, "assign"), ge = cc11001100_hook("ge", pe + "_idetail", "assign"), O(c), M(), P();
        var h = cc11001100_hook("h", setTimeout(function () {
            $(".c-loading").hasClass("vhide") && $(".c-loading").removeClass("vhide").addClass("vshow");
          }, 500), "var-init"),
          v = cc11001100_hook("v", setTimeout(function () {
            $(".c-loading").hasClass("vshow") && $(".c-loading").removeClass("vshow").addClass("vhide"), $(".c-offline").hasClass("hide") && $(".c-offline").removeClass("hide").addClass("show");
          }, 3e3), "var-init");
        a.addRequestHandle("newsTitle", function (e) {
          var a = cc11001100_hook("a", e.data.title || "百度一下", "var-init");
          $("title").text(a);
        }), a.addRequestHandle("scrollIframeTo", function (e) {
          $("#__SF___idetail").find(".framelist").scrollTop(e.range / 2), setTimeout(function () {
            $("#__SF___idetail").find(".framelist").scrollTop(e.range);
          }, 100);
        }), a.addRequestHandle("isMinivideoTopHide", function () {
          $(".sf-container .sf-header").css("display", "none"), $(".sf-container .sf-frame .framelist").css("padding-top", "0px!important");
        }), a.addRequestHandle("isLargePicPage", function (e) {
          e.data.isLargePic === !0 && $(".sf-container .sf-frame .framelist").css("padding-top", "0px!important");
        }), a.addRequestHandle("isLastPicPage", function (e) {
          e.data.isLastPic === !0 && ($(".sf-header").hasClass("largePichide") || $(".sf-header").removeClass("largePicshow").addClass("largePichide"));
        }), a.addRequestHandle("invokeIframe", function (e) {
          ye && I(e);
        }), a.addRequestHandle("getMpCloseBanner", function (e) {
          ye && I(e);
        }), a.addRequestHandle("pushActivity", function (e) {
          B.activity.pushState({
            activity: cc11001100_hook("activity", "wiseindex/tabs/news/activity/newsdetail", "object-key-init"),
            state: {
              linkData: {
                name: cc11001100_hook("name", "iframe/mib-iframe", "object-key-init"),
                id: cc11001100_hook("id", "feed", "object-key-init"),
                index: cc11001100_hook("index", 0, "object-key-init"),
                url: cc11001100_hook("url", e.src, "object-key-init")
              }
            }
          });
        }), a.addRequestHandle("getMpDomReady", function (e) {
          if ($(".sf-frame ul li .s-loading-frame").remove(), fe.css({
            display: cc11001100_hook("display", "block", "object-key-init")
          }), clearTimeout(h), clearTimeout(v), $(".c-loading").hasClass("vshow") && $(".c-loading").removeClass("vshow").addClass("vhide"), $(".c-offline").hasClass("show") && $(".c-offline").removeClass("show").addClass("hide"), ye && e && e.height) {
            var c = cc11001100_hook("c", e.height + 30, "var-init");
            me.css({
              height: cc11001100_hook("height", "initial", "object-key-init")
            }), ve.css({
              height: cc11001100_hook("height", "initial", "object-key-init")
            }), fe.css({
              height: cc11001100_hook("height", c + "px", "object-key-init")
            });
          }
          if (!e || !e.hideFeedBackBanner) try {
            A();
          } catch (e) {}
          a.sendMessage(fe[he.index].contentWindow, {
            event: cc11001100_hook("event", "getParentParams", "object-key-init"),
            parentUrl: cc11001100_hook("parentUrl", window.location.href, "object-key-init"),
            qudaofrom: cc11001100_hook("qudaofrom", $("#commonBase").data("from"), "object-key-init")
          }, !1), a.sendMessage(fe[he.index].contentWindow, {
            event: cc11001100_hook("event", "isLogin", "object-key-init"),
            isLogin: cc11001100_hook("isLogin", window.sSession.isLogin, "object-key-init")
          }, !1);
        }), a.addRequestHandle("getInitWWidth", function () {
          a.sendMessage(fe[he.index].contentWindow, {
            event: cc11001100_hook("event", "setInitWWidth", "object-key-init"),
            width: cc11001100_hook("width", $(window).width(), "object-key-init")
          }, !1);
        }), a.addRequestHandle("sendDetailPvid", function (e) {
          Te = cc11001100_hook("Te", e.data.pvid || "", "assign");
        }), a.addRequestHandle("isTopic", function (e) {
          $(".sf-title").empty(), Ae = cc11001100_hook("Ae", e.data.log, "assign");
          var a = cc11001100_hook("a", '<a href = "' + e.data.link + '"><img src = "' + e.data.icon + '"><span>' + e.data.name + "</span></a>", "var-init");
          $(a).appendTo(".sf-title"), $(".sf-title").data("topic", "1"), $(".sf-title").removeClass("hide").addClass("show");
          var c = cc11001100_hook("c", {
            cst: cc11001100_hook("cst", 1, "object-key-init"),
            logInfo: cc11001100_hook("logInfo", "head", "object-key-init"),
            logExtra: cc11001100_hook("logExtra", JSON.stringify({
              rid: cc11001100_hook("rid", "", "object-key-init"),
              pos: cc11001100_hook("pos", "head", "object-key-init"),
              extra: cc11001100_hook("extra", "", "object-key-init"),
              isBaijiahao: cc11001100_hook("isBaijiahao", "0", "object-key-init"),
              isTopic: cc11001100_hook("isTopic", "1", "object-key-init"),
              title: cc11001100_hook("title", $(".sf-title").find("span").html(), "object-key-init")
            }), "object-key-init")
          }, "var-init");
          c = cc11001100_hook("c", $.extend(c, Ae), "assign"), Be.send(c);
        }), a.addRequestHandle("isBaiJiaHao", function (e) {
          if (1 != $(".sf-title").data("topic")) {
            $(".sf-title").empty(), Ae = cc11001100_hook("Ae", e.data.log, "assign");
            var a = cc11001100_hook("a", '<a href = "' + e.data.link + '" target = "_blank"><img src = "' + e.data.icon + '"><span>' + e.data.name + "</span></a>", "var-init");
            $(a).appendTo(".sf-title"), $(".sf-title").data("bjh", "1"), e.data.isImages && e.data.isImages === !0 && (Ee = cc11001100_hook("Ee", "image", "assign"), $(".sf-title").removeClass("hide").addClass("show"));
          }
        }), a.addRequestHandle("isTopBarShow", function (e) {
          1 == e.data.isShow ? $(".sf-header").removeClass("largePichide").addClass("largePicshow") : $(".sf-header").removeClass("largePicshow").addClass("largePichide");
        }), a.addRequestHandle("baijiahaoDisplay", function (e) {
          "show" == e.data.event ? $(".sf-title").addClass("show") : $(".sf-title").removeClass("show");
        }), a.addRequestHandle("baijiahaoLog", function (e) {
          Ae = cc11001100_hook("Ae", e.data.log, "assign");
          var a = cc11001100_hook("a", {
            cst: cc11001100_hook("cst", 1, "object-key-init"),
            logInfo: cc11001100_hook("logInfo", "head", "object-key-init"),
            logExtra: cc11001100_hook("logExtra", JSON.stringify({
              rid: cc11001100_hook("rid", "", "object-key-init"),
              pos: cc11001100_hook("pos", "head", "object-key-init"),
              extra: cc11001100_hook("extra", "", "object-key-init"),
              isBaijiahao: cc11001100_hook("isBaijiahao", "1", "object-key-init"),
              isTopic: cc11001100_hook("isTopic", "0", "object-key-init"),
              title: cc11001100_hook("title", $(".sf-title").find("span").html(), "object-key-init")
            }), "object-key-init")
          }, "var-init");
          a = cc11001100_hook("a", $.extend(a, Ae), "assign"), Be.send(a);
        }), a.addRequestHandle("backLog", function (e) {
          Ae = cc11001100_hook("Ae", e.data.log, "assign");
          var a = cc11001100_hook("a", {
            cst: cc11001100_hook("cst", 1, "object-key-init"),
            logInfo: cc11001100_hook("logInfo", "btm_tools", "object-key-init"),
            logExtra: cc11001100_hook("logExtra", JSON.stringify({
              rid: cc11001100_hook("rid", "", "object-key-init"),
              pos: cc11001100_hook("pos", "", "object-key-init"),
              extra: cc11001100_hook("extra", "", "object-key-init"),
              title: cc11001100_hook("title", "", "object-key-init")
            }), "object-key-init")
          }, "var-init");
          a = cc11001100_hook("a", $.extend(a, Ae), "assign"), Be.send(a);
        }), a.addRequestHandle("backTop", function (e) {
          "show" == e.data.event ? $(".c-back").addClass("show") : $(".c-back").removeClass("show");
        }), a.addRequestHandle("hasBackflow", function () {
          var c = cc11001100_hook("c", $("#bottom").data("bfshow") || $("#wrapper").data("bfshow"), "var-init");
          a.sendMessage($("iframe")[0].contentWindow, {
            event: cc11001100_hook("event", "backflowShow", "object-key-init"),
            flag: cc11001100_hook("flag", c, "object-key-init")
          }, !1);
        }), a.addRequestHandle("androidJumpToStore", Pe), a.addRequestHandle("invokeBaiduApp", function (e) {
          var a = cc11001100_hook("a", "", "var-init"),
            c = cc11001100_hook("c", "", "var-init"),
            h = cc11001100_hook("h", JSON.stringify(e.extLog ? {
              follow: cc11001100_hook("follow", e.extLog, "object-key-init")
            } : {}), "var-init"),
            v = cc11001100_hook("v", {
              tid: cc11001100_hook("tid", e.tid || 745, "object-key-init"),
              cst: cc11001100_hook("cst", 2, "object-key-init"),
              logInfo: cc11001100_hook("logInfo", e.logInfo || "invokebaiduapp", "object-key-init"),
              logExtra: cc11001100_hook("logExtra", h, "object-key-init")
            }, "var-init");
          v = cc11001100_hook("v", $.extend(v, Ae), "assign"), e.noNeedLog || Be.send(v);
          var g = cc11001100_hook("g", "news_" + e.nid, "var-init"),
            b = cc11001100_hook("b", e.thref || "https://mbd.baidu.com/newspage/data/landingreact?pageType=2&sourceFrom=landingWise&nid=" + g, "var-init"),
            w = cc11001100_hook("w", e.shareUrlExt || "", "var-init");
          b += cc11001100_hook("b", w, "assign");
          var y = cc11001100_hook("y", g || "", "var-init"),
            S = cc11001100_hook("S", b, "var-init"),
            _ = cc11001100_hook("_", e.activityId || null, "var-init"),
            k = cc11001100_hook("k", encodeURIComponent(b), "var-init"),
            T = cc11001100_hook("T", +e.tabId || 1, "var-init"),
            E = cc11001100_hook("E", e.tabInfo, "var-init");
          if (z() && window.OpenBox) {
            var P = cc11001100_hook("P", "", "var-init");
            if (1 !== T) {
              var I = cc11001100_hook("I", {
                channel: cc11001100_hook("channel", "" + T, "object-key-init"),
                refresh: cc11001100_hook("refresh", "1", "object-key-init"),
                tab_info: cc11001100_hook("tab_info", E, "object-key-init")
              }, "var-init");
              P = cc11001100_hook("P", "baiduboxapp://v11/appTab/select?item=home&upgrade=0&params=" + encodeURIComponent(JSON.stringify(I)), "assign");
            }
            var O = cc11001100_hook("O", {
              opentype: cc11001100_hook("opentype", "1", "object-key-init"),
              rbtnstyle: cc11001100_hook("rbtnstyle", "2", "object-key-init"),
              newbrowser: cc11001100_hook("newbrowser", "1", "object-key-init"),
              type: cc11001100_hook("type", "Hybrid", "object-key-init"),
              tpl_id: cc11001100_hook("tpl_id", "landing_app.html", "object-key-init"),
              sfrom: cc11001100_hook("sfrom", "feed", "object-key-init"),
              context: cc11001100_hook("context", JSON.stringify({
                nid: cc11001100_hook("nid", g, "object-key-init")
              }), "object-key-init"),
              slog: cc11001100_hook("slog", null, "object-key-init"),
              ch_url: cc11001100_hook("ch_url", k, "object-key-init")
            }, "var-init");
            e.threadId && (O.commentInfo = cc11001100_hook("O.commentInfo", JSON.stringify({
              topic_id: cc11001100_hook("topic_id", e.threadId, "object-key-init"),
              opentype: cc11001100_hook("opentype", "2", "object-key-init")
            }), "assign")), "comments" === e.callbackEvent && (O.context = cc11001100_hook("O.context", JSON.stringify({
              nid: cc11001100_hook("nid", g, "object-key-init"),
              anchor: cc11001100_hook("anchor", "comment", "object-key-init")
            }), "assign"));
            var H = cc11001100_hook("H", "intent:#Intent;S.toolbaricons=%7B%22toolids%22%3A%5B%224%22%2C%221%22%2C%222%22%2C%223%22%5D%7D;component=com.baidu.searchbox/.home.feed.FeedDetailActivity;S.menumode=2;S.sfrom=feed;S.context=" + encodeURIComponent(O.context) + ";S.tpl_id=landing_app.html;S.ch_url=" + k, "var-init");
            switch (e.threadId ? H = cc11001100_hook("H", H + ";S.commentInfo=" + encodeURIComponent(JSON.stringify({
              topic_id: cc11001100_hook("topic_id", e.threadId, "object-key-init"),
              opentype: cc11001100_hook("opentype", "2", "object-key-init")
            })) + ";end", "assign") : H += cc11001100_hook("H", ";end", "assign"), e.type) {
              case "query":
                a = cc11001100_hook("a", "baiduboxapp://search?word=" + k, "assign"), c = cc11001100_hook("c", {
                  mode: cc11001100_hook("mode", "0", "object-key-init"),
                  intent: cc11001100_hook("intent", "intent:#Intent;package=com.baidu.searchbox;action=com.baidu.searchbox.action.SEARCH;category=android.intent.category.DEFAULT;S.key_value=" + k + ";end;", "object-key-init"),
                  min_v: cc11001100_hook("min_v", "16787968", "object-key-init")
                }, "assign"), P && (a = cc11001100_hook("a", P + "&next=" + encodeURIComponent(a), "assign"), c = cc11001100_hook("c", a, "assign"));
                break;
              case "home":
                a = cc11001100_hook("a", "baiduboxapp://apppage?action=openPage&params=%7B%22pageid%22%3A%22homepage%22%7D", "assign"), c = cc11001100_hook("c", {
                  mode: cc11001100_hook("mode", "0", "object-key-init"),
                  intent: cc11001100_hook("intent", "intent:#Intent;action=com.baidu.searchbox.action.HOME;category=android.intent.category.DEFAULT;B.key_switch_to_home=true;end;", "object-key-init"),
                  min_v: cc11001100_hook("min_v", "16787968", "object-key-init")
                }, "assign"), P && (a = cc11001100_hook("a", P, "assign"), c = cc11001100_hook("c", a, "assign"));
                break;
              case "toStore":
                a = cc11001100_hook("a", "baiduboxapp://apppage?action=openPage&params=%7B%22pageid%22%3A%22homepage%22%7D", "assign"), c = cc11001100_hook("c", {
                  mode: cc11001100_hook("mode", "0", "object-key-init"),
                  intent: cc11001100_hook("intent", "intent:#Intent;action=com.baidu.searchbox.action.HOME;category=android.intent.category.DEFAULT;B.key_switch_to_home=true;end;", "object-key-init"),
                  min_v: cc11001100_hook("min_v", "25165824", "object-key-init")
                }, "assign"), P && (a = cc11001100_hook("a", P, "assign"), c = cc11001100_hook("c", a, "assign"));
                break;
              default:
                a = cc11001100_hook("a", "baiduboxapp://common?action=easybrowse&params=" + encodeURIComponent(JSON.stringify(O)) + "&minver=7.2.5.0&toolbaricons=%7b%22toolids%22%3a%5b%224%22%2c%221%22%2c%222%22%2c%223%22%5d%7d&menumode%3d2%22%7d", "assign"), c = cc11001100_hook("c", {
                  minver: cc11001100_hook("minver", "3.3", "object-key-init"),
                  mode: cc11001100_hook("mode", "0", "object-key-init"),
                  intent: cc11001100_hook("intent", H, "object-key-init"),
                  min_v: cc11001100_hook("min_v", "16787968", "object-key-init")
                }, "assign"), P && (a = cc11001100_hook("a", "baiduboxapp://v1/easybrowse/open?url=" + k + "&context=" + encodeURIComponent(O.context) + "&newbrowser=1&style=" + encodeURIComponent(JSON.stringify({
                  toolbaricons: {
                    tids: cc11001100_hook("tids", ["4", "1", "2", "3"], "object-key-init"),
                    menumode: cc11001100_hook("menumode", "2", "object-key-init"),
                    actionBarConfig: {
                      extCase: cc11001100_hook("extCase", "0", "object-key-init")
                    }
                  }
                })), "assign"), O.commentInfo && (a += cc11001100_hook("a", "&commentInfo=" + encodeURIComponent(O.commentInfo), "assign")), a = cc11001100_hook("a", P + "&next=" + encodeURIComponent(a), "assign"), c = cc11001100_hook("c", a, "assign"));
            }
            var B = cc11001100_hook("B", {
              iosScheme: cc11001100_hook("iosScheme", a, "object-key-init"),
              androidCommand: cc11001100_hook("androidCommand", c, "object-key-init"),
              from: cc11001100_hook("from", e.from || "", "object-key-init"),
              channel: cc11001100_hook("channel", e.channel || "", "object-key-init"),
              extLog: cc11001100_hook("extLog", e.extLog || "", "object-key-init")
            }, "var-init");
            setTimeout(function () {
              if (e.failUrl && e.failbackUrl && (B.failUrl = cc11001100_hook("B.failUrl", e.failUrl, "assign"), B.failCallback = cc11001100_hook("B.failCallback", function () {
                window.location.href = cc11001100_hook("window.location.href", e.failbackUrl, "assign");
              }, "assign")), "followBtn" === e.callbackEvent) B.failUrl = cc11001100_hook("B.failUrl", window.location.href, "assign"), B.failCallback = cc11001100_hook("B.failCallback", function () {}, "assign");else if ("relateTitle" === e.callbackEvent) {
                var a = cc11001100_hook("a", C(e.href), "var-init");
                B.failUrl = cc11001100_hook("B.failUrl", a, "assign"), B.failCallback = cc11001100_hook("B.failCallback", function () {
                  window.location.href = cc11001100_hook("window.location.href", a, "assign");
                }, "assign");
              } else "failHandle" === e.callbackEvent || "jumpToStore" === e.callbackEvent ? (B.failUrl = cc11001100_hook("B.failUrl", Ce.main, "assign"), B.failCallback = cc11001100_hook("B.failCallback", function () {
                Pe(e, y);
              }, "assign")) : "androidFailHandle" === e.callbackEvent && (B.failCallback = cc11001100_hook("B.failCallback", function () {}, "assign"));
              y ? B.copyTokenData = cc11001100_hook("B.copyTokenData", {
                nid: cc11001100_hook("nid", y, "object-key-init")
              }, "assign") : S && _ && (B.copyTokenData = cc11001100_hook("B.copyTokenData", {
                url: cc11001100_hook("url", S, "object-key-init"),
                activity_id: cc11001100_hook("activity_id", _, "object-key-init")
              }, "assign")), e.passwordExt && (B.copyTokenData.ext = cc11001100_hook("B.copyTokenData.ext", e.passwordExt, "assign")), B.failCallback || (B.failCallback = cc11001100_hook("B.failCallback", function () {
                window.location.href = cc11001100_hook("window.location.href", "https://boxer.baidu.com/scheme?from=" + e.channel + "&source=" + e.from + "&tokenData=" + encodeURIComponent(JSON.stringify(B.copyTokenData || {})), "assign");
              }, "assign"));
              try {
                window.shareOpenBox = cc11001100_hook("window.shareOpenBox", window.OpenBox(B), "assign"), window.shareOpenBox.ready(function () {
                  window.shareOpenBox.open();
                });
              } catch (c) {}
            }, 300);
          }
        }), a.addRequestHandle("invokeBaiduAppGrally", function (e) {
          var a = cc11001100_hook("a", e.data, "var-init"),
            c = cc11001100_hook("c", a.nid, "var-init");
          if (window.OpenBox) {
            var h = cc11001100_hook("h", "baiduboxapp://apppage?action=openPage&params=%7B%22pageid%22%3A%22homepage%22%7D", "var-init"),
              v = cc11001100_hook("v", {
                iosScheme: cc11001100_hook("iosScheme", "baiduboxapp://common?action=imagecollection&params=%7b%22context%22%3a%7b%22nid%22%3a%22news_" + c + "%22%7d%7d&minver=7.2.5.0&toolbaricons=%7B%22toolids%22%3A%5B%221%22%2C%222%22%2C%223%22%5D%7D&menumode=2&prev=" + encodeURIComponent(h), "object-key-init"),
                androidCommand: {
                  intent: cc11001100_hook("intent", "intent:#Intent;launchFlags=0x10000000;component=com.baidu.searchbox/.discovery.picture.PictureBrowseActivity;S.context=%7B%22nid%22%3A%22news_" + c + "%22%7D;end", "object-key-init"),
                  "class": cc11001100_hook("class", "com.baidu.searchbox.discovery.picture.PictureBrowseActivity", "object-key-init"),
                  mode: cc11001100_hook("mode", "0", "object-key-init"),
                  min_v: cc11001100_hook("min_v", "16789248", "object-key-init")
                },
                from: cc11001100_hook("from", a.from || "", "object-key-init"),
                channel: cc11001100_hook("channel", a.channel || "", "object-key-init"),
                extLog: cc11001100_hook("extLog", a.extLog || "", "object-key-init")
              }, "var-init");
            if (a.rewriteFailUrl) {
              var g = cc11001100_hook("g", C(a.failUrl), "var-init");
              v.failUrl = cc11001100_hook("v.failUrl", g, "assign"), v.failCallback = cc11001100_hook("v.failCallback", function () {
                location.href = cc11001100_hook("location.href", g, "assign");
              }, "assign");
            }
            setTimeout(function () {
              try {
                window.shareOpenBox = cc11001100_hook("window.shareOpenBox", window.OpenBox(v), "assign"), window.shareOpenBox.ready(function () {
                  window.shareOpenBox.open();
                });
              } catch (a) {
                console.log("invokeBaiduAppGrally fail", a);
              }
            }, 300);
          }
        }), a.addRequestHandle("videoInvokeApp", function (e) {
          if ("BdBox" === e.app) {
            var c = cc11001100_hook("c", e.action, "var-init");
            if (window.OpenBox) try {
              var h = cc11001100_hook("h", window.OpenBox({
                iosScheme: cc11001100_hook("iosScheme", c.iosScheme, "object-key-init"),
                androidCommand: cc11001100_hook("androidCommand", JSON.parse(c.androidCommand || "{}"), "object-key-init"),
                from: cc11001100_hook("from", c.from || "neibu_wise_shipin", "object-key-init"),
                channel: cc11001100_hook("channel", c.channel || "1020191d", "object-key-init"),
                overwrite: cc11001100_hook("overwrite", "1" === c.overwrite ? 1 : 0, "object-key-init"),
                failUrl: cc11001100_hook("failUrl", c.failUrl, "object-key-init"),
                failCallback: cc11001100_hook("failCallback", c.failCallback ? function () {
                  a.sendMessage(fe[he.index].contentWindow, {
                    event: cc11001100_hook("event", "videoInvokeFail", "object-key-init")
                  }, !1);
                } : "", "object-key-init")
              }), "var-init");
              h.ready(function () {
                h.open();
              });
            } catch (e) {}
          } else if ("HaoKan" === e.app || "Minivideo" === e.app) try {
            var v = cc11001100_hook("v", e.action, "var-init"),
              g = cc11001100_hook("g", v.HkUlink, "var-init"),
              b = cc11001100_hook("b", v.HkScheme, "var-init"),
              w = cc11001100_hook("w", v.QMAppLink, "var-init"),
              y = cc11001100_hook("y", v.HkDownloadurl, "var-init"),
              S = cc11001100_hook("S", e.useAppLink, "var-init");
            y.hkDownloadTimeout = cc11001100_hook("y.hkDownloadTimeout", v.HkDownloadTimeout || 0, "assign");
            var _ = function () {
                return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ? Boolean(parseInt(navigator.userAgent.replace(/^.*OS ([\d_]+) like.*$/, "$1").split("_")[0], 10) > 8) : !1;
              },
              k = function () {
                return /iphone|ipad|ipod/i.test(navigator.userAgent);
              },
              T = function () {
                return "micromessenger" == navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
              },
              $ = function () {
                return /^(?!.*Safari).*QQ/.test(navigator.userAgent);
              },
              E = cc11001100_hook("E", "https://m.baidu.com", "var-init"),
              C = function (a) {
                function c(a) {
                  cc11001100_hook("a", a, "function-parameter");
                  setTimeout(function () {
                    window.location.href = cc11001100_hook("window.location.href", a.pkgurl || v.errorUrl, "assign");
                  }, a.hkDownloadTimeout || 0);
                }
                function h(a) {
                  cc11001100_hook("a", a, "function-parameter");
                  var c = cc11001100_hook("c", document.createElement("iframe"), "var-init");
                  c.src = cc11001100_hook("c.src", a, "assign"), c.style.display = cc11001100_hook("c.style.display", "none", "assign"), document.body.appendChild(c), window.setTimeout(function () {
                    document.body.removeChild(c);
                  }, 300);
                }
                var v = cc11001100_hook("v", this, "var-init");
                (!a.pkgName || a.brandList && !a.brandList.length) && c(a);
                var g = cc11001100_hook("g", navigator.userAgent, "var-init"),
                  b = cc11001100_hook("b", "", "var-init"),
                  w = cc11001100_hook("w", !1, "var-init"),
                  y = cc11001100_hook("y", a.brandList || ["xiaomi", "samsung", "huawei", "oppo", "vivo"], "var-init"),
                  S = cc11001100_hook("S", {
                    xiaomi: {
                      reg: cc11001100_hook("reg", /\(.*Android.*(MI|Mi|Redmi|HM NOTE| 201\d{4} Build).*\)|Android.*XiaoMi/, "object-key-init"),
                      scheme: cc11001100_hook("scheme", "mimarket://details?id=${0}&back=true", "object-key-init")
                    },
                    samsung: {
                      reg: cc11001100_hook("reg", /\(.*Android.*(SAMSUNG|SM-|GT-).*\)/, "object-key-init"),
                      scheme: cc11001100_hook("scheme", "samsungapps://ProductDetail/${0}", "object-key-init")
                    },
                    huawei: {
                      reg: cc11001100_hook("reg", /\(.*Android.*(HUAWEI|HONOR|HW-|H60-).*\)|^HONOR|^HUAWEI/i, "object-key-init"),
                      scheme: cc11001100_hook("scheme", "appmarket://details?id=${0}", "object-key-init")
                    },
                    oppo: {
                      reg: cc11001100_hook("reg", /Android.*(OPPO|A31.? Build|R\d+(Plus)? Build)|Android.*OppoBrowser|^OPPO/, "object-key-init"),
                      scheme: cc11001100_hook("scheme", "oppomarket://details?packagename=${0}", "object-key-init"),
                      downloadFirst: cc11001100_hook("downloadFirst", !0, "object-key-init")
                    },
                    vivo: {
                      reg: cc11001100_hook("reg", /\(.*Android.*(vivo|VIVO).*\)/, "object-key-init"),
                      scheme: cc11001100_hook("scheme", "vivomarket://details?id=${0}", "object-key-init")
                    }
                  }, "var-init");
                y.forEach(function (c) {
                  if (S.hasOwnProperty(c)) {
                    var h = cc11001100_hook("h", S[c], "var-init");
                    if (h.reg.test(g)) return b = cc11001100_hook("b", h.scheme.replace("${0}", a.pkgName), "assign"), w = cc11001100_hook("w", h.downloadFirst || !1, "assign"), !1;
                  }
                });
                var _ = cc11001100_hook("_", [/liebaofast/gi], "var-init");
                return _.forEach(function (a) {
                  return a.test(g) ? (b = cc11001100_hook("b", "", "assign"), !1) : void 0;
                }), b ? void (w ? (c(a), setTimeout(function () {
                  h(b);
                }, 300)) : (h(b), setTimeout(function () {
                  c(a);
                }, 300))) : void c(a);
              };
            if (_()) window.location.href = cc11001100_hook("window.location.href", g, "assign");else if ("Minivideo" === e.app && S && w) window.location.href = cc11001100_hook("window.location.href", w, "assign");else {
              var P;
              P = cc11001100_hook("P", document.createElement("iframe"), "assign"), P.src = cc11001100_hook("P.src", b, "assign"), P.style.display = cc11001100_hook("P.style.display", "none", "assign"), document.body.appendChild(P), window.setTimeout(function () {
                try {
                  if (document.body.removeChild(P), T() || $()) window.location.href = cc11001100_hook("window.location.href", y.yybao || E, "assign");else if (k()) window.location.href = cc11001100_hook("window.location.href", y.ios || E, "assign");else {
                    if (y.pkgName) return void C(y);
                    setTimeout(function () {
                      window.location.href = cc11001100_hook("window.location.href", y.pkgurl || E, "assign");
                    }, y.hkDownloadTimeout || 0);
                  }
                } catch (e) {}
              }, 300);
            }
          } catch (e) {}
        }), a.addRequestHandle("subscript", function (e) {
          var a = cc11001100_hook("a", $("#" + ge).find(".sf-frame ul"), "var-init"),
            c = cc11001100_hook("c", "subscript", "var-init"),
            h = cc11001100_hook("h", document.createElement("script"), "var-init");
          a.length && (a.append('<div id="subscript"></div>'), h.onload = cc11001100_hook("h.onload", function () {
            console.log("load subscriptJs success"), bdTag($.extend(e.data, {
              tarDomId: cc11001100_hook("tarDomId", c, "object-key-init")
            }));
          }, "assign"), h.onerror = cc11001100_hook("h.onerror", function () {
            console.log("load subscriptJs error");
          }, "assign"), h.src = cc11001100_hook("h.src", "https://jadyoap.bj.bcebos.com/tag.js?_v=" + Math.floor(new Date().getTime() / 36e5), "assign"), document.getElementsByTagName("body")[0].appendChild(h));
        }), $(window).on("orientationchange", function () {
          setTimeout(function () {
            a.sendMessage(fe[he.index].contentWindow, {
              event: cc11001100_hook("event", "getWWidth", "object-key-init"),
              width: cc11001100_hook("width", $(window).width(), "object-key-init")
            }, !1);
          }, 100);
        }), $(".sf-title").on("click", "a", function (e) {
          e.preventDefault();
          var a = cc11001100_hook("a", {}, "var-init"),
            c = cc11001100_hook("c", {}, "var-init"),
            h = cc11001100_hook("h", this.getAttribute("href"), "var-init");
          1 === $(".sf-title").data("bjh") && (a = cc11001100_hook("a", function () {
            location.href = cc11001100_hook("location.href", h, "assign");
          }, "assign"), c = cc11001100_hook("c", {
            cst: cc11001100_hook("cst", 2, "object-key-init"),
            logExtra: cc11001100_hook("logExtra", JSON.stringify({
              rid: cc11001100_hook("rid", "", "object-key-init"),
              pos: cc11001100_hook("pos", "head", "object-key-init"),
              extra: cc11001100_hook("extra", "", "object-key-init"),
              isBaijiahao: cc11001100_hook("isBaijiahao", "1", "object-key-init"),
              isTopic: cc11001100_hook("isTopic", "0", "object-key-init"),
              title: cc11001100_hook("title", $(".sf-title").find("span").html(), "object-key-init")
            }), "object-key-init")
          }, "assign")), 1 === $(".sf-title").data("topic") && (a = cc11001100_hook("a", function () {
            location.href = cc11001100_hook("location.href", h, "assign");
          }, "assign"), c = cc11001100_hook("c", {
            cst: cc11001100_hook("cst", 2, "object-key-init"),
            logInfo: cc11001100_hook("logInfo", "head", "object-key-init"),
            logExtra: cc11001100_hook("logExtra", JSON.stringify({
              rid: cc11001100_hook("rid", "", "object-key-init"),
              pos: cc11001100_hook("pos", "head", "object-key-init"),
              extra: cc11001100_hook("extra", "", "object-key-init"),
              isBaijiahao: cc11001100_hook("isBaijiahao", "0", "object-key-init"),
              isTopic: cc11001100_hook("isTopic", "1", "object-key-init"),
              title: cc11001100_hook("title", $(".sf-title").find("span").html(), "object-key-init")
            }), "object-key-init")
          }, "assign")), c = cc11001100_hook("c", $.extend(c, Ae), "assign"), Be.send(c, a);
        });
      }
      function h(a) {
        cc11001100_hook("a", a, "function-parameter");
        var a = cc11001100_hook("a", "" + a, "var-init");
        return /^news\_/.test(a) ? a : "news_" + a;
      }
      function C(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", {
            activity: cc11001100_hook("activity", "wiseindex/tabs/news/activity/newsdetail", "object-key-init"),
            state: {
              linkData: {
                name: cc11001100_hook("name", "iframe/mib-iframe", "object-key-init"),
                id: cc11001100_hook("id", "feed", "object-key-init"),
                index: cc11001100_hook("index", 0, "object-key-init"),
                url: cc11001100_hook("url", a, "object-key-init")
              }
            }
          }, "var-init"),
          h = cc11001100_hook("h", c.activity + "=" + encodeURIComponent(JSON.stringify(c.state)), "var-init"),
          v = cc11001100_hook("v", "#iact=" + encodeURIComponent(h), "var-init"),
          g = cc11001100_hook("g", window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search + v, "var-init");
        return g;
      }
      function P() {
        if (!window.OpenBox) {
          var a = cc11001100_hook("a", document.createElement("script"), "var-init");
          a.src = cc11001100_hook("a.src", "https://s.bdstatic.com/common/openjs/openBox.js?_v=" + Math.floor(new Date().getTime() / 36e5), "assign"), $("head").append(a);
        }
      }
      function I(e) {
        cc11001100_hook("e", e, "function-parameter");
        var a = cc11001100_hook("a", e.height, "var-init");
        a && $(".sf-frame ul li iframe").css({
          height: cc11001100_hook("height", a, "object-key-init")
        }), $(".sf-frame ul li").removeClass("framelist"), setTimeout(function () {
          $(".sf-frame ul li").addClass("framelist");
        }, 200);
      }
      function O(c) {
        cc11001100_hook("c", c, "function-parameter");
        var h = cc11001100_hook("h", '<div class="sf-container" id="' + ge + '"><div class="sf-header"><span class="sf-back"><i class="head-icon"></i></span><span class="sf-title hide"></span><span class="sf-tools"><i class="head-icon"></i></span></div><div class="sf-frame"><ul class="sf-wrap"></ul></div><div class="sf-pagenum"><span></span></div></div>', "var-init");
        $("body").append(h), be = cc11001100_hook("be", $("#" + ge), "assign"), ae = cc11001100_hook("ae", be.find(".sf-header"), "assign"), ce = cc11001100_hook("ce", be.find(".sf-frame"), "assign"), me = cc11001100_hook("me", be.find(".sf-frame ul"), "assign");
        var v = cc11001100_hook("v", "", "var-init");
        if (_e.recommendCall) {
          var g = cc11001100_hook("g", '<div class="sf-middle-page"><div class="sf-middle-page-header"><i class="c-icon">&#xe783</i></div><div class="sf-middle-page-content"><p>百度根据您的兴趣</p><p>推荐了更多优质资源</p><p style="font-size:34px">希望您能喜欢</p><img src="//www.baidu.com/nocache/zhixin/speed/sf-middle-bg.png"></div><div class="sf-middle-page-footer"><p>查看感兴趣的新闻</p><p><i class="c-icon">&#xe619</i></p></div></div>', "var-init");
          $("body").append(g), $(".sf-middle-page-footer").bind("click", function (e) {
            e.stopPropagation(), $(".sf-middle-page").css({
              display: cc11001100_hook("display", "none!important", "object-key-init")
            }), De(), B.activity.pushState({
              activity: cc11001100_hook("activity", "wise_sf_news/feed", "object-key-init")
            });
          });
        }
        var b = cc11001100_hook("b", ue, "var-init");
        if (v = cc11001100_hook("v", 'scrolling="yes"', "assign"), b) for (var i = cc11001100_hook("i", 0, "var-init"); i < b.length; i++) {
          var w = cc11001100_hook("w", b[i].url, "var-init");
          me.append('<li class="framelist"><iframe name="' + pe + i + '" src="about:blank" data-src="' + w + '" sandbox="allow-popups allow-scripts allow-forms allow-pointer-lock allow-popups-to-escape-sandbox allow-same-origin allow-modals" ' + v + " ></li>");
        } else me.append('<li class="framelist"><iframe name="' + pe + i + '" src="about:blank" sandbox="allow-popups allow-scripts allow-forms allow-pointer-lock allow-popups-to-escape-sandbox allow-same-origin allow-modals" ' + v + " ></li>");
        var y = cc11001100_hook("y", ["wappass.baidu.com"], "var-init"),
          S = cc11001100_hook("S", N(c.linkData.url), "var-init");
        -1 === y.join().indexOf(S) && (me.append('<div class="c-loading vhide"><i class = "c-circles"></i><i class="c-icons"></i><p>加载中…</p></div>'), me.append('<div class="c-offline hide"><div class ="icons"></div><p>网络不给力，请稍后重试</p></div>')), me.append('<div class="c-back"><div class="back-top"></div></div>'), fe = cc11001100_hook("fe", be.find(".sf-frame iframe"), "assign"), ve = cc11001100_hook("ve", be.find(".sf-frame li"), "assign"), be.find(".sf-back").on("click", function (e) {
          B.activity ? B.activity.back() : history.back(), e.stopPropagation(), e.preventDefault();
        }), be.find(".sf-tools").on("click", function () {
          if ($(".c-popup-wrapper").length > 0 && "none" === $(".c-popup-wrapper").css("display")) return void $(".c-popup-wrapper").show();
          var h = cc11001100_hook("h", ue[he.index].url, "var-init"),
            v = cc11001100_hook("v", {}, "var-init");
          c.linkData.isThird ? (v = cc11001100_hook("v", {
            title: cc11001100_hook("title", "百度分享", "object-key-init"),
            content: cc11001100_hook("content", "", "object-key-init"),
            iconUrl: cc11001100_hook("iconUrl", "https://m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg", "object-key-init"),
            origin: cc11001100_hook("origin", "百度分享", "object-key-init"),
            isVideo: cc11001100_hook("isVideo", 0, "object-key-init"),
            log: {},
            url: cc11001100_hook("url", c.linkData.url, "object-key-init"),
            isThird: cc11001100_hook("isThird", !0, "object-key-init")
          }, "assign"), H(v)) : a.sendMessage(fe[he.index].contentWindow, {
            event: cc11001100_hook("event", "getShareInfo", "object-key-init")
          }, !0).done(function (a) {
            var c = cc11001100_hook("c", a.data || {}, "var-init");
            if (v.title = cc11001100_hook("v.title", c.title || "百度分享", "assign"), v.content = cc11001100_hook("v.content", c.content || "", "assign"), v.iconUrl = cc11001100_hook("v.iconUrl", c.iconUrl || "https://m.baidu.com/se/static/pmd/pmd/share/images/bdu.jpg", "assign"), v.origin = cc11001100_hook("v.origin", c.origin || "百度分享", "assign"), v.isVideo = cc11001100_hook("v.isVideo", c.isVideo || 0, "assign"), v.log = cc11001100_hook("v.log", c.log || {}, "assign"), c.isVideo) v.url = cc11001100_hook("v.url", h, "assign");else if ("topicList" === c.pageTag) v.url = cc11001100_hook("v.url", c.topicLink, "assign");else {
              var g = cc11001100_hook("g", h.match(/nid=([\d]*)&/), "var-init"),
                b = cc11001100_hook("b", "", "var-init");
              b = cc11001100_hook("b", g ? encodeURIComponent('{"nid":"news_' + g[1] + '"}') : j(h, "context"), "assign"), v.url = cc11001100_hook("v.url", "//po.baidu.com/feed/share?isWiseFrom=1&isBdboxShare=1&context=" + b, "assign");
            }
            H(v);
          });
        }), be.find(".back-top").on("click", function () {
          var c = function () {
              a.sendMessage(fe[he.index].contentWindow, {
                event: cc11001100_hook("event", "backToTop", "object-key-init")
              }, !1);
            },
            h = cc11001100_hook("h", {
              cst: cc11001100_hook("cst", 2, "object-key-init"),
              logInfo: cc11001100_hook("logInfo", "btm_tools", "object-key-init"),
              logExtra: cc11001100_hook("logExtra", JSON.stringify({
                rid: cc11001100_hook("rid", "", "object-key-init"),
                pos: cc11001100_hook("pos", "2", "object-key-init"),
                extra: cc11001100_hook("extra", "", "object-key-init"),
                title: cc11001100_hook("title", "backTop", "object-key-init")
              }), "object-key-init")
            }, "var-init");
          h = cc11001100_hook("h", $.extend(h, Ae), "assign"), Be.send(h, c);
        }), be.find(".back-feed").on("click", function () {
          var a = cc11001100_hook("a", D, "var-init"),
            c = cc11001100_hook("c", {
              cst: cc11001100_hook("cst", 2, "object-key-init"),
              logInfo: cc11001100_hook("logInfo", "btm_tools", "object-key-init"),
              logExtra: cc11001100_hook("logExtra", JSON.stringify({
                rid: cc11001100_hook("rid", "", "object-key-init"),
                pos: cc11001100_hook("pos", "1", "object-key-init"),
                extra: cc11001100_hook("extra", "", "object-key-init"),
                title: cc11001100_hook("title", "backfeed", "object-key-init")
              }), "object-key-init")
            }, "var-init");
          c = cc11001100_hook("c", $.extend(c, Ae), "assign"), Be.send(c, a);
        });
      }
      function H(a) {
        cc11001100_hook("a", a, "function-parameter");
        require(["wiseindex/tabs/news/activity/tool"], function (c) {
          se = cc11001100_hook("se", new c($.extend({}, a, {
            loginfo: {
              clk_from: cc11001100_hook("clk_from", "wise_news", "object-key-init")
            },
            custom: cc11001100_hook("custom", [], "object-key-init")
          })), "assign");
        }), Q();
      }
      function A() {
        var a = cc11001100_hook("a", $("iframe").attr("src"), "var-init");
        if (a.indexOf("videoland") > -1) {
          w = cc11001100_hook("w", "neibu_wise_shipin_luodiye_yemianfuceng", "assign"), y = cc11001100_hook("y", "1019447l", "assign"), S = cc11001100_hook("S", "recdetail_video", "assign"), _ = cc11001100_hook("_", encodeURIComponent(a), "assign");
          var c = cc11001100_hook("c", new g({
            parentDome: cc11001100_hook("parentDome", ".c-back", "object-key-init"),
            content: cc11001100_hook("content", "有事搜一搜，没事看一看", "object-key-init"),
            openType: cc11001100_hook("openType", "url", "object-key-init"),
            targetHref: cc11001100_hook("targetHref", _, "object-key-init"),
            bfFrom: cc11001100_hook("bfFrom", w, "object-key-init"),
            bfChannel: cc11001100_hook("bfChannel", y, "object-key-init"),
            lsName: cc11001100_hook("lsName", S, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", "", "object-key-init"),
            logInfo: cc11001100_hook("logInfo", "", "object-key-init"),
            logExtra: cc11001100_hook("logExtra", "", "object-key-init")
          }), "var-init");
        } else if (a.indexOf("imageland") > -1) {
          _ = cc11001100_hook("_", encodeURIComponent(a), "assign");
          var h = cc11001100_hook("h", /nid=(\d+)/i.exec(a)[1], "var-init"),
            c = cc11001100_hook("c", new g({
              parentDome: cc11001100_hook("parentDome", ".c-back", "object-key-init"),
              openType: cc11001100_hook("openType", "scheme", "object-key-init"),
              targetHref: cc11001100_hook("targetHref", _, "object-key-init"),
              bfFrom: cc11001100_hook("bfFrom", w, "object-key-init"),
              bfChannel: cc11001100_hook("bfChannel", y, "object-key-init"),
              lsName: cc11001100_hook("lsName", S, "object-key-init"),
              tplType: cc11001100_hook("tplType", "shareEntry", "object-key-init"),
              nid: cc11001100_hook("nid", h, "object-key-init"),
              logFrom: cc11001100_hook("logFrom", "", "object-key-init"),
              logInfo: cc11001100_hook("logInfo", "", "object-key-init"),
              logExtra: {
                from: cc11001100_hook("from", "landingAlbum", "object-key-init")
              },
              pagetype: cc11001100_hook("pagetype", 8, "object-key-init")
            }), "var-init");
        } else {
          var v = cc11001100_hook("v", a.match(/nid=(\d+)/i), "var-init"),
            b = cc11001100_hook("b", "", "var-init"),
            h = cc11001100_hook("h", "", "var-init");
          v ? (h = cc11001100_hook("h", v[1], "assign"), b = cc11001100_hook("b", '{"nid":"news_' + v[1] + '","sourceFrom":"bjh"}', "assign")) : (b = cc11001100_hook("b", decodeURIComponent(j(a, "context")), "assign"), h = cc11001100_hook("h", JSON.parse(b).nid, "assign"), h = cc11001100_hook("h", h.split("_")[1], "assign")), _ = cc11001100_hook("_", encodeURIComponent("https://po.baidu.com/feed/share?isBdboxShare=1&context=" + b), "assign");
          var c = cc11001100_hook("c", new g({
            parentDome: cc11001100_hook("parentDome", ".c-back", "object-key-init"),
            content: cc11001100_hook("content", "有事搜一搜，没事看一看", "object-key-init"),
            openType: cc11001100_hook("openType", "scheme", "object-key-init"),
            targetHref: cc11001100_hook("targetHref", _, "object-key-init"),
            bfFrom: cc11001100_hook("bfFrom", w, "object-key-init"),
            bfChannel: cc11001100_hook("bfChannel", y, "object-key-init"),
            lsName: cc11001100_hook("lsName", S, "object-key-init"),
            tplType: cc11001100_hook("tplType", "shareEntry", "object-key-init"),
            nid: cc11001100_hook("nid", h, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", "", "object-key-init"),
            logInfo: cc11001100_hook("logInfo", "", "object-key-init"),
            logExtra: {
              from: cc11001100_hook("from", "landingWise", "object-key-init")
            }
          }), "var-init");
        }
        c._updateIsShow() && $("#bottom").data("bfshow", "1");
      }
      function D() {
        B.activity.pushState({
          activity: cc11001100_hook("activity", "base", "object-key-init")
        });
      }
      function U(a) {
        cc11001100_hook("a", a, "function-parameter");
        var s = cc11001100_hook("s", "", "var-init");
        for (var c in a) {
          var h = cc11001100_hook("h", a[c], "var-init");
          null !== h && void 0 !== h && (s.length > 0 && (s += cc11001100_hook("s", "&", "assign")), s += cc11001100_hook("s", encodeURIComponent(c) + "=" + encodeURIComponent(h), "assign"));
        }
        return s;
      }
      function M() {
        ye && setTimeout(function () {
          ve.css({
            "overflow-y": cc11001100_hook("overflow-y", "auto", "object-key-init")
          });
        }, 200);
      }
      function W(a) {
        cc11001100_hook("a", a, "function-parameter");
        return "string" != typeof a ? a : a.replace(/[&<>`"'\/]/g, function (a) {
          return {
            "&": cc11001100_hook("&", "&amp;", "object-key-init"),
            "<": cc11001100_hook("<", "&lt;", "object-key-init"),
            ">": cc11001100_hook(">", "&gt;", "object-key-init"),
            "`": cc11001100_hook("`", "&#x60;", "object-key-init"),
            '"': cc11001100_hook('"', "&quot;", "object-key-init"),
            "'": cc11001100_hook("'", "&#x27;", "object-key-init"),
            "/": cc11001100_hook("/", "&#x2f;", "object-key-init")
          }[a];
        });
      }
      function X(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        var h = cc11001100_hook("h", fe.eq(a), "var-init"),
          v = cc11001100_hook("v", {
            viewportType: cc11001100_hook("viewportType", "virtual", "object-key-init"),
            paddingTop: cc11001100_hook("paddingTop", "54", "object-key-init"),
            from: cc11001100_hook("from", _e.id, "object-key-init"),
            pageType: cc11001100_hook("pageType", "", "object-key-init"),
            pageInfo: cc11001100_hook("pageInfo", "", "object-key-init")
          }, "var-init"),
          g = cc11001100_hook("g", "", "var-init"),
          c = cc11001100_hook("c", c ? c + "#" + U(v) : "about:blank", "var-init");
        g = cc11001100_hook("g", 'scrolling="yes"', "assign"), c = cc11001100_hook("c", W(c), "assign"), h.replaceWith('<iframe name="' + pe + a + '" src="' + c + '" data-src="' + h.attr("data-src") + '" sandbox="allow-popups allow-scripts allow-forms allow-pointer-lock allow-popups-to-escape-sandbox allow-same-origin allow-modals allow-top-navigation" ' + g + " >"), fe = cc11001100_hook("fe", be.find(".sf-frame iframe"), "assign"), fe.css({
          height: cc11001100_hook("height", "100%", "object-key-init")
        });
      }
      function F(a, c, h) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        var v = cc11001100_hook("v", a.url, "var-init");
        ue || (ue = cc11001100_hook("ue", [], "assign"), ue.push(a));
        var g = cc11001100_hook("g", /^http(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?/, "var-init"),
          b = cc11001100_hook("b", /^(http[s]?:\/\/)?([^\/]+)(.*)/, "var-init"),
          w = cc11001100_hook("w", (v.match(b), fe.eq(c), a.isThird), "var-init");
        if ((/^https?:\/\/([^\/]+)\.baidu\.com.*/.test(v) || w) && g.test(v)) {
          var y = cc11001100_hook("y", N(v), "var-init");
          return Ie.join().indexOf(y) > -1 ? void console.log("命中黑名单") : (-1 === Oe.join().indexOf(y) && (window.location.href = cc11001100_hook("window.location.href", window.location.origin, "assign")), he.index = cc11001100_hook("he.index", c, "assign"), R(c, v), h.resolve(), "about:blank" == fe.eq(c).attr("src") && X(c, v), !0);
        }
      }
      function R() {}
      function Y(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c;
        return c = cc11001100_hook("c", a.indexOf("://") > -1 ? a.split("/")[2] : a.split("/")[0], "assign"), c = cc11001100_hook("c", c.split(":")[0], "assign"), c = cc11001100_hook("c", c.split("?")[0], "assign");
      }
      function N(a) {
        cc11001100_hook("a", a, "function-parameter");
        var c = cc11001100_hook("c", Y(a), "var-init"),
          h = cc11001100_hook("h", c.split("."), "var-init"),
          v = cc11001100_hook("v", h.length, "var-init");
        return v > 2 && (c = cc11001100_hook("c", h[v - 2] + "." + h[v - 1], "assign")), c;
      }
      function j(a, c) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        var h = cc11001100_hook("h", new RegExp("(^|(&|/?))" + c + "=([^&]*)(&|$)", "i"), "var-init"),
          r = cc11001100_hook("r", a.match(h), "var-init");
        return null !== r ? r[3] : null;
      }
      function L() {
        try {
          if (window.sSession.mcpWise) {
            var a = cc11001100_hook("a", window.sSession.mcpWise, "var-init"),
              c = cc11001100_hook("c", a.action_rule.pos_6, "var-init");
            if (c && c[0] && 0 === c[0].action_flag) return !0;
          }
        } catch (e) {}
        return !1;
      }
      function z() {
        var a = cc11001100_hook("a", j(window.location.href, "from"), "var-init"),
          c = cc11001100_hook("c", ["1001192y", "1021611l", "1001192w", "1021611b", "1021611n", "1021611s", "1022688c", "1021611r"], "var-init"),
          h = cc11001100_hook("h", L(), "var-init");
        return !~c.indexOf(a) && !xe && !h;
      }
      function J(a) {
        cc11001100_hook("a", a, "function-parameter");
        a.resolve();
      }
      function Q() {
        $e && k.B.thunderLog.send({
          tid: cc11001100_hook("tid", 1383, "object-key-init"),
          logFrom: cc11001100_hook("logFrom", "recdetail", "object-key-init"),
          logInfo: cc11001100_hook("logInfo", "dura", "object-key-init"),
          duration: cc11001100_hook("duration", +new Date() - ke, "object-key-init"),
          cst: cc11001100_hook("cst", 8, "object-key-init"),
          logExtra: cc11001100_hook("logExtra", JSON.stringify({
            ext: cc11001100_hook("ext", k.sSession.duraext, "object-key-init"),
            page: cc11001100_hook("page", Ee, "object-key-init"),
            rid: cc11001100_hook("rid", $e, "object-key-init"),
            detailLogId: cc11001100_hook("detailLogId", Te, "object-key-init")
          }), "object-key-init")
        });
      }
      function V(a) {
        cc11001100_hook("a", a, "function-parameter");
        for (var c in a) return !1;
        return !0;
      }
      function Z() {}
      function G(e) {
        cc11001100_hook("e", e, "function-parameter");
        var a = cc11001100_hook("a", e.data, "var-init"),
          c = cc11001100_hook("c", a.event, "var-init"),
          h = cc11001100_hook("h", (he.index, this), "var-init"),
          v = cc11001100_hook("v", (be.find(".sf-pagenum"), {
            touchstart: function () {},
            loadiframe: function () {
              B.activity.pushState({
                activity: cc11001100_hook("activity", "wiseindex/tabs/news/activity/newsdetail", "object-key-init"),
                state: {
                  name: cc11001100_hook("name", "iframe/mib-iframe-sub", "object-key-init"),
                  id: cc11001100_hook("id", "sub", "object-key-init"),
                  index: cc11001100_hook("index", 0, "object-key-init"),
                  linkData: {
                    url: cc11001100_hook("url", "//mib.bdstatic.com/doc/detail/" + encodeURIComponent(a.data.url) + "/" + b + "/?lid=" + sSession.logid, "object-key-init"),
                    title: cc11001100_hook("title", a.data.title, "object-key-init")
                  }
                }
              });
            },
            urljump: function () {
              location.href = cc11001100_hook("location.href", a.data.url, "assign");
            },
            webbLog: function () {},
            jqHandle: function () {
              var c = cc11001100_hook("c", a.data, "var-init"),
                h = cc11001100_hook("h", $(c.selector), "var-init");
              h[c.handle].apply(h, c.params);
            },
            login: function () {
              var c = cc11001100_hook("c", {
                tpl: cc11001100_hook("tpl", "wimn", "object-key-init"),
                u: cc11001100_hook("u", window.location.href, "object-key-init")
              }, "var-init");
              location.href = cc11001100_hook("location.href", a.data.url + $.param(c), "assign");
            }
          }), "var-init");
        "function" == typeof v[c] && v[c].call(h);
      }
      function K() {
        var a = cc11001100_hook("a", $.Deferred(), "var-init");
        return J(a), window.B.thunderLog.send({
          sessionTime: cc11001100_hook("sessionTime", +new Date() - ke, "object-key-init"),
          cst: cc11001100_hook("cst", 8, "object-key-init"),
          nid: cc11001100_hook("nid", window.sSession.nid4log, "object-key-init"),
          detailLogId: cc11001100_hook("detailLogId", Te, "object-key-init")
        }), a;
      }
      function te(a) {
        cc11001100_hook("a", a, "function-parameter");
        var a = cc11001100_hook("a", a || {}, "var-init"),
          c = cc11001100_hook("c", (a.name, a.linkData), "var-init"),
          h = cc11001100_hook("h", c.url, "var-init");
        Ee = cc11001100_hook("Ee", "text", "assign"), $e = cc11001100_hook("$e", ee(h, "nid", "context"), "assign");
        var v = cc11001100_hook("v", 0, "var-init");
        ke = cc11001100_hook("ke", +new Date(), "assign"), $(window).bind("message", G), $(window).on("orientationchange", Z), $(window).on("resize", Z);
        var g = cc11001100_hook("g", $.Deferred(), "var-init");
        return F(c, v, g), g;
      }
      function ee(a, c, h) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("c", c, "function-parameter");
        cc11001100_hook("h", h, "function-parameter");
        var v = cc11001100_hook("v", new RegExp("(^|&)" + c + "=([^&]*)(&|$)"), "var-init"),
          r = cc11001100_hook("r", decodeURI(a).substr(1).match(v), "var-init"),
          g = cc11001100_hook("g", a.split("?"), "var-init"),
          b = cc11001100_hook("b", g[1] || g[0], "var-init"),
          w = cc11001100_hook("w", b.split("&"), "var-init"),
          y = cc11001100_hook("y", {}, "var-init");
        return w.forEach(function (a) {
          if (a = cc11001100_hook("a", a.split("="), "assign"), a[0].length > 0) {
            var c = cc11001100_hook("c", "", "var-init");
            try {
              c = cc11001100_hook("c", decodeURIComponent(a[1]) || "", "assign");
            } catch (e) {}
            y[a[0]] = cc11001100_hook("y[a[0]]", c, "assign");
          }
        }), null != r ? unescape(r[2]) : y[h] && JSON.parse(y[h])[c];
      }
      function ie(a) {
        cc11001100_hook("a", a, "function-parameter");
        a = cc11001100_hook("a", a || {}, "assign"), "undefined" != typeof a.version && (b = cc11001100_hook("b", a.version, "assign")), E.init(a);
      }
      function oe(a) {
        cc11001100_hook("a", a, "function-parameter");
        De(), ie(a), te(a);
      }
      var se,
        ae,
        ce,
        pe = cc11001100_hook("pe", "__SF__", "var-init"),
        he = cc11001100_hook("he", {}, "var-init"),
        ue = cc11001100_hook("ue", [], "var-init"),
        fe = cc11001100_hook("fe", [], "var-init"),
        me = cc11001100_hook("me", [], "var-init"),
        ve = cc11001100_hook("ve", [], "var-init"),
        ge = cc11001100_hook("ge", "", "var-init"),
        be = cc11001100_hook("be", "", "var-init"),
        we = cc11001100_hook("we", window.navigator.userAgent, "var-init"),
        ye = cc11001100_hook("ye", /iPhone|iPad|iPod/i.test(we), "var-init"),
        xe = cc11001100_hook("xe", we.match(/oppobrowser|heytapbrowser/i), "var-init"),
        Se = cc11001100_hook("Se", (/UCBrowser/i.test(we), /Chrome|CriOS/i.test(we)), "var-init"),
        _e = cc11001100_hook("_e", (/Safari/i.test(we) && !Se, B.ls && B.ls.get("wise", "sf", "firstRead") || null, {}), "var-init"),
        ke = cc11001100_hook("ke", ($('<style id="sf_detail_style"></style>'), 0), "var-init"),
        Te = cc11001100_hook("Te", "", "var-init"),
        $e = cc11001100_hook("$e", "", "var-init"),
        Ee = cc11001100_hook("Ee", "", "var-init"),
        Ce = cc11001100_hook("Ce", (window.sSession.sids, {
          lite: cc11001100_hook("lite", "https://apps.apple.com/cn/app/id1281873118", "object-key-init"),
          main: cc11001100_hook("main", "https://apps.apple.com/cn/app/id382201985", "object-key-init")
        }), "var-init"),
        Pe = function (e, a) {
          var c = cc11001100_hook("c", "", "var-init"),
            v = cc11001100_hook("v", window.navigator.userAgent, "var-init"),
            a = cc11001100_hook("a", a ? a : e.nid, "var-init"),
            g = cc11001100_hook("g", "com.baidu.searchbox", "var-init");
          if (v.match(/android/i)) {
            c = cc11001100_hook("c", v.match(/\(.*Android.*(MI|Mi|Redmi).*\)/) ? "mimarket://details?id=" + g + "&back=true" : v.match(/\(.*Android.*(SAMSUNG|SM-).*\)/) ? "samsungapps://ProductDetail/" + g : v.match(/\(.*Android.*(HUAWEI|HONOR).*\)/i) ? "appmarket://details?id=" + g : v.match(/\(.*Android.*OPPO.*\)/) ? "oppomarket://details?packagename=" + g : "market://details?id=" + g, "assign");
            var b = cc11001100_hook("b", c, "var-init"),
              w = cc11001100_hook("w", document.createElement("iframe"), "var-init");
            w.style.display = cc11001100_hook("w.style.display", "none", "assign"), w.src = cc11001100_hook("w.src", b, "assign");
            var y = cc11001100_hook("y", document.body || document.getElementsByTagName("body")[0], "var-init");
            y.appendChild(w), setTimeout(function () {
              y.removeChild(w), w = cc11001100_hook("w", null, "assign");
            }, 0), a = cc11001100_hook("a", h(a), "assign"), setTimeout(function () {
              window.location.href = cc11001100_hook("window.location.href", "https://boxer.baidu.com/scheme?from=" + e.channel + "&source=" + e.from + "&tokenData=" + encodeURIComponent(JSON.stringify({
                nid: cc11001100_hook("nid", a, "object-key-init")
              })), "assign");
            }, 300);
          } else window.location.href = cc11001100_hook("window.location.href", Ce.main, "assign");
        },
        Ie = cc11001100_hook("Ie", ["kfc.ysrmo.cn"], "var-init"),
        Oe = cc11001100_hook("Oe", ["baidu.com", "m.gmw.cn", "t.ynet.cn", "h5.china.com.cn", "m.kankanews.com", "wenhui.whb.cn", "rev.uar.hubpd.com", "wxd.sznews.com", "m.thepaper.cn", "export.shobserver.com", "sghexport.shobserver.com", "www.shobserver.com", "shobserver.com"], "var-init"),
        He = cc11001100_hook("He", {}, "var-init"),
        Be = cc11001100_hook("Be", v.create({
          baseParams: {
            ct: cc11001100_hook("ct", 1, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", "recdetail", "object-key-init")
          }
        }), "var-init"),
        Ae = cc11001100_hook("Ae", {
          logid: cc11001100_hook("logid", window.sSession.logid, "object-key-init"),
          ssid: cc11001100_hook("ssid", window.sSession.ssid, "object-key-init"),
          sid: cc11001100_hook("sid", window.sSession.sids, "object-key-init")
        }, "var-init"),
        De = function () {
          $(window).unbind("message", G), be.remove(), $(".sf-middle-page").remove(), se && se.close(), !V(He) && He.closePopup(), Q();
        };
      T.prototype.start = cc11001100_hook("T.prototype.start", te, "assign"), T.prototype.init = cc11001100_hook("T.prototype.init", c, "assign"), T.prototype.stop = cc11001100_hook("T.prototype.stop", K, "assign"), T.prototype.change = cc11001100_hook("T.prototype.change", oe, "assign"), T.prototype.create = cc11001100_hook("T.prototype.create", ie, "assign"), T.prototype.destroy = cc11001100_hook("T.prototype.destroy", De, "assign");
    },
    E = cc11001100_hook("E", new T(), "var-init");
  return {
    start: cc11001100_hook("start", E.start, "object-key-init"),
    stop: cc11001100_hook("stop", E.stop, "object-key-init"),
    create: cc11001100_hook("create", E.create, "object-key-init"),
    change: cc11001100_hook("change", E.change, "object-key-init"),
    destroy: cc11001100_hook("destroy", E.destroy, "object-key-init")
  };
});