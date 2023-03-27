define(function (require) {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", h(a, c), "var-init");
    return v ? v.strategy : null;
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a && a !== D;
  }
  function v(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a && a[c];
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    $.each(a, function (c) {
      var v = cc11001100_hook("v", window.sSession.invokeApps.control[c], "var-init"),
        w = cc11001100_hook("w", v.carouselArr, "var-init");
      if (w) {
        var k = cc11001100_hook("k", a[c], "var-init");
        w.map(function (a) {
          k[+a.sort] && (a = cc11001100_hook("a", $.extend(a, k[+a.sort]), "assign"));
        });
      } else v = cc11001100_hook("v", $.extend(v, a[c]), "assign");
    });
  }
  function k(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", h(a, c), "var-init"),
      w = cc11001100_hook("w", {}, "var-init");
    if (v && v.title) {
      var k = cc11001100_hook("k", v.title.split("_"), "var-init"),
        b = cc11001100_hook("b", {}, "var-init");
      try {
        b = cc11001100_hook("b", "string" == typeof v.ext ? JSON.parse(v.ext).flow : v.ext.flow, "assign");
      } catch (e) {}
      w = cc11001100_hook("w", k.reduce(function (a, c) {
        return c in b && (a[c] = cc11001100_hook("a[c]", b[c], "assign")), a;
      }, {}), "assign");
    }
    return w;
  }
  function b(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", {}, "var-init");
    if (c instanceof Object) for (var w in c) if (c[w] instanceof Object && w === a) {
      v = cc11001100_hook("v", c[w], "assign");
      break;
    }
    return v;
  }
  function g(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", S.getLogData(a), "var-init");
    return $.extend({
      union: cc11001100_hook("union", v.from, "object-key-init"),
      browserid: cc11001100_hook("browserid", v.browserid, "object-key-init"),
      qid: cc11001100_hook("qid", v.lid, "object-key-init")
    }, a, c);
  }
  var S = cc11001100_hook("S", require("@baidu/invoke-box"), "var-init"),
    A = cc11001100_hook("A", require("@baidu/invoke-box-search"), "var-init"),
    B = cc11001100_hook("B", S.invoke, "var-init"),
    h = cc11001100_hook("h", S.getControlByPos, "var-init"),
    y = cc11001100_hook("y", 27, "var-init"),
    L = cc11001100_hook("L", 51, "var-init"),
    D = cc11001100_hook("D", "baiduboxapp", "var-init"),
    O = cc11001100_hook("O", a(y, window.sSession.invokeApps), "var-init"),
    j = cc11001100_hook("j", k(L, window.sSession.invokeApps), "var-init");
  return w(j), S.sendLogByBeacon = cc11001100_hook("S.sendLogByBeacon", function (a, c, v) {
    void 0 === v && (v = cc11001100_hook("v", !1, "assign")), A.invokeBox.sendLog(a, c, v);
  }, "assign"), S.getLogData = cc11001100_hook("S.getLogData", function (a) {
    var c = cc11001100_hook("c", window.sSession.from, "var-init"),
      v = cc11001100_hook("v", a.from || "", "var-init"),
      w = cc11001100_hook("w", a.channel || "", "var-init"),
      k = cc11001100_hook("k", c && "0" !== c ? c : "", "var-init"),
      b = cc11001100_hook("b", window.sSession.mobileBrowserId, "var-init"),
      g = cc11001100_hook("g", $("#commonBase").attr("data-lid"), "var-init"),
      S = cc11001100_hook("S", new Date().getTime(), "var-init");
    return {
      origin: cc11001100_hook("origin", v, "object-key-init"),
      from: cc11001100_hook("from", k, "object-key-init"),
      channel: cc11001100_hook("channel", w, "object-key-init"),
      browserid: cc11001100_hook("browserid", b, "object-key-init"),
      qid: cc11001100_hook("qid", g, "object-key-init"),
      timestamp: cc11001100_hook("timestamp", S, "object-key-init")
    };
  }, "assign"), S.invoke = cc11001100_hook("S.invoke", function (a, w) {
    var k = cc11001100_hook("k", null, "var-init");
    c(O) && (a.protocolHeader = cc11001100_hook("a.protocolHeader", O, "assign")), w && v(j, w) && (k = cc11001100_hook("k", a.sort ? b(a.sort, j[w]) : j[w], "assign")), a = cc11001100_hook("a", g(a, k), "assign"), window.sSession && sSession.invokeApps && sSession.invokeApps.stoken && (a.stoken = cc11001100_hook("a.stoken", sSession.invokeApps.stoken, "assign")), B(a);
  }, "assign"), S.invokeBoxSearch = cc11001100_hook("S.invokeBoxSearch", A, "assign"), S;
});