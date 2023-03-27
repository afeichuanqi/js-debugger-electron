"use strict";

define("@baidu/invoke-box-search/output/index", ["require", "@baidu/invoke-box-search/output/src/invoke"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/invoke-box-search/output/src/invoke"), "var-init");
  return a;
}), define("@baidu/invoke-box-search/output/src/invoke", ["require", "@searchfe/user-agent", "@baidu/invoke-box-search/output/src/ivkBox", "@baidu/invoke-box-search/output/src/until", "@baidu/invoke-box-search/output/src/invokeCookie", "@baidu/invoke-box-search/output/src/log"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c;
    return a.match(/^https?:\/\/tieba.baidu.com\/?$/) ? "/pages/index/index" : (c = cc11001100_hook("c", a.match(/^https?:\/\/tieba.baidu.com\/p\/(\d+)/) || a.match(/^https?:\/\/tieba.baidu.com\/f\/?\?.*kz=(\d+)/), "assign")) ? "/pages/pb/pb?tid=" + c[1] : (c = cc11001100_hook("c", a.match(/^https?:\/\/tieba.baidu.com\/f\/?\?.*kw=([^&]+)/), "assign"), c ? "/pages/frs/frs?kw=" + c[1] : "");
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c;
    try {
      c = cc11001100_hook("c", JSON.parse(a.replace(/'/g, '"')), "assign");
    } catch (e) {
      c = cc11001100_hook("c", {}, "assign");
    }
    return c;
  }
  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", $(a).closest(".c-result").data("log"), "var-init");
    return c(v);
  }
  function g(a) {
    cc11001100_hook("a", a, "function-parameter");
    return v(a).mu || "";
  }
  function k(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", $(a).data("url"), "var-init");
    return !v && c.tbParams && (c.tbParams.tbUrl || c.tbParams.originUrl) ? c.tbParams.tbUrl || c.tbParams.originUrl : !v && c.dataUrl ? c.dataUrl : O.isSfApp() ? v || "" : v || g(a) || "";
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a) {
      var c = cc11001100_hook("c", {
        invoke_url: cc11001100_hook("invoke_url", "invokeURL", "object-key-init"),
        default_url: cc11001100_hook("default_url", "defaultURL", "object-key-init"),
        appkey: cc11001100_hook("appkey", "appKey", "object-key-init"),
        app_multi: cc11001100_hook("app_multi", "appMulti", "object-key-init")
      }, "var-init");
      for (var v in c) c.hasOwnProperty(v) && a[v] && (a[c[v]] = cc11001100_hook("a[c[v]]", a[v], "assign"));
    }
  }
  function h(c, v, g, w) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("w", w, "function-parameter");
    g = cc11001100_hook("g", +g || +c.app, "assign"), w = cc11001100_hook("w", +w || +c.mode, "assign");
    var h = cc11001100_hook("h", k(v, c), "var-init"),
      L = cc11001100_hook("L", $(v).attr("href") || "", "var-init");
    if (g === R.IQY) $.extend(c, {
      invokeURL: cc11001100_hook("invokeURL", c.invokeURL || h, "object-key-init"),
      iqyParams: {
        tcUrl: cc11001100_hook("tcUrl", L, "object-key-init")
      }
    });else if (g === R.TIEBA) $.extend(c, {
      invokeURL: cc11001100_hook("invokeURL", c.invokeURL || L, "object-key-init"),
      tbParams: {
        originUrl: cc11001100_hook("originUrl", h, "object-key-init")
      }
    });else if (g === R.HAOKAN) c.ext || (c.ext = cc11001100_hook("c.ext", {}, "assign")), c.hkParams && !c.ext.hkParams && (c.ext.hkParams = cc11001100_hook("c.ext.hkParams", c.hkParams, "assign")), c.ext.hkParams ? c.ext.hkParams.tcUrl = cc11001100_hook("c.ext.hkParams.tcUrl", L, "assign") : c.ext.hkParams = cc11001100_hook("c.ext.hkParams", {
      tcUrl: cc11001100_hook("tcUrl", L, "object-key-init")
    }, "assign");else if (g !== R.BD_LITE && g !== R.BD || w !== T.XCX) g === R.LIBRARY ? c.invokeURL = cc11001100_hook("c.invokeURL", c.defaultURL = cc11001100_hook("c.defaultURL", c.invokeURL || c.dataUrl, "assign"), "assign") : g === R.MAP ? $.extend(c, {
      invokeURL: cc11001100_hook("invokeURL", c.invokeURL || L, "object-key-init"),
      defaultURL: cc11001100_hook("defaultURL", c.defaultURL || L, "object-key-init")
    }) : $.extend(c, {
      invokeURL: cc11001100_hook("invokeURL", c.invokeURL || L, "object-key-init")
    });else {
      var b = cc11001100_hook("b", k(v, c), "var-init"),
        S = cc11001100_hook("S", a(b), "var-init");
      "" !== S || !b.match(/^https?:\/\/tieba.baidu.com/) && "" !== b || (c.mode = cc11001100_hook("c.mode", 3, "assign"), S = cc11001100_hook("S", c.invokeURL || L, "assign")), $.extend(c, {
        invokeURL: cc11001100_hook("invokeURL", c.invokeURL || S, "object-key-init"),
        defaultURL: cc11001100_hook("defaultURL", c.defaultURL || L, "object-key-init")
      });
    }
  }
  function L(a, c, v, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    H.sendPopupLog("SHOW", a.popUpLog, c, {
      action: cc11001100_hook("action", "show_popup", "object-key-init")
    }), O.renderPopup({
      popTitle: cc11001100_hook("popTitle", a.ext.popTitle || "", "object-key-init"),
      popText: cc11001100_hook("popText", a.ext.popText || "", "object-key-init"),
      cancelCallback: function () {
        g && D && D.isIOS() && 3 !== +a.success && setTimeout(function () {
          window.location.href = cc11001100_hook("window.location.href", g, "assign");
        }, 500), H.sendPopupLog("CLICK", a.popUpLog, c, {
          action: cc11001100_hook("action", "click_popup_cancel", "object-key-init")
        });
      },
      coverCallback: function () {
        H.sendPopupLog("CLICK", a.popUpLog, c, {
          action: cc11001100_hook("action", "click_popup_cover", "object-key-init")
        });
      },
      confirmCallback: function () {
        v.pos && E.setCookie(v.pos), I(a, g, v.pos), H.sendPopupLog("CLICK", a.popUpLog, c, {
          action: cc11001100_hook("action", "click_popup_confirm", "object-key-init")
        });
      }
    });
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    return N.isSharePage() ? P() : N.isGlobalShouldInvoke(a) ? 1 === +a.rule && _() : y(a);
  }
  function S(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    var g = cc11001100_hook("g", "PSCBD", "var-init"),
      k = cc11001100_hook("k", E.getCookieVal(a.pos, g) || 0, "var-init");
    E.setPosValCookie(a.pos, g, k + 1);
    var w = cc11001100_hook("w", b(a), "var-init"),
      h = cc11001100_hook("h", a && a.control && a.control.ext && a.control.ext.attemptFailType, "var-init");
    (!c || v) && (h && !w ? a.pos && E.setCookie(a.pos) : a.pos && E.setCookie(a.pos));
  }
  function C(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", "G_PSCBD", "var-init"),
      g = cc11001100_hook("g", N.getGlobalIndex(), "var-init"),
      k = cc11001100_hook("k", E.getCookieVal(g, v) || 0, "var-init");
    E.setPosValCookie(g, v, k + 1), (!a || c) && E.setCookie(g, "G_LAUNCH");
  }
  function y(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a || {}, "assign");
    var c = cc11001100_hook("c", !1, "var-init"),
      v = cc11001100_hook("v", a.control || {}, "var-init"),
      g = cc11001100_hook("g", v.ext, "var-init");
    if (g = cc11001100_hook("g", N.getExt(g), "assign"), v && (!a.pos || +a.rule) && (E.checkInvokeHZ(a.pos, v.shutdown_trigger_interval, g.invokeHZ, g.sameDayBlock, g.maxAttemptCount, "SE_LAUNCH") || c)) {
      var k = cc11001100_hook("k", +v.app, "var-init");
      if (+v.mode, D.isBaiduBox() && (k === R.BD_LITE || k === R.LITE || k === R.KDD)) return !1;
      if (g.attemptFailType) {
        var w = cc11001100_hook("w", E.getCookieVal(a.pos, "PSCBD") || 0, "var-init");
        return !!(g.maxAttemptCount && w < g.maxAttemptCount);
      }
      return !0;
    }
    return !1;
  }
  function _() {
    var a,
      c = cc11001100_hook("c", "0", "var-init"),
      v = cc11001100_hook("v", N.getGlobalIndex(), "var-init");
    if (window.page && window.page.comm && window.page.comm.invokeApps && window.page.comm.invokeApps.rule && (c = cc11001100_hook("c", window.page.comm.invokeApps.rule[v], "assign"), a = cc11001100_hook("a", window.page.comm.invokeApps.control[v], "assign")), window.sSession && window.sSession.invokeApps && window.sSession.invokeApps.control && (c = cc11001100_hook("c", window.sSession.invokeApps.rule[v], "assign"), a = cc11001100_hook("a", window.sSession.invokeApps.control[v], "assign")), "1" !== c) return !1;
    var g = cc11001100_hook("g", a.ext, "var-init"),
      g = cc11001100_hook("g", N.getExt(g), "var-init");
    if (E.checkInvokeHZ(v, a.shutdown_trigger_interval, g.invokeHZ, g.sameDayBlock, g.maxAttemptCount, "G_LAUNCH")) {
      if (g.attemptFailType) {
        var k = cc11001100_hook("k", E.getCookieVal(v, "G_PSCBD") || 0, "var-init");
        return !!(g.maxAttemptCount && k < g.maxAttemptCount);
      }
      return !0;
    }
    return !1;
  }
  function P() {
    var a = cc11001100_hook("a", N.getSessionStorage("SHARED_PSCBD") || 0, "var-init");
    return 0 === a ? (N.setSessionStorage("SHARED_PSCBD", 1), !0) : !1;
  }
  function A(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a || {}, "assign");
    var v = cc11001100_hook("v", a.params, "var-init"),
      g = cc11001100_hook("g", a.ele, "var-init"),
      k = cc11001100_hook("k", a.invokeURL, "var-init");
    delete a.invokeURL;
    var b = cc11001100_hook("b", v.control, "var-init");
    w(b);
    var y = cc11001100_hook("y", {
      pos: cc11001100_hook("pos", v.pos || "", "object-key-init")
    }, "var-init");
    b.ext && "string" == typeof b.ext && (b.ext = cc11001100_hook("b.ext", c(b.ext), "assign"), b.ext && b.ext.hkParams && (y.vid = cc11001100_hook("y.vid", b.ext.hkParams.vid, "assign"), y.url = cc11001100_hook("y.url", b.ext.hkParams.url_key, "assign"))), b.ext && b.ext.appMulti && (b.appMulti = cc11001100_hook("b.appMulti", b.ext.appMulti, "assign"));
    var _ = cc11001100_hook("_", a.appendPVLog || !1, "var-init"),
      P = cc11001100_hook("P", !1, "var-init"),
      A = cc11001100_hook("A", !1, "var-init"),
      U = cc11001100_hook("U", {}, "var-init");
    b.extLogContent && void 0 !== b.extLogContent.forcePVLog && (P = cc11001100_hook("P", 1 === +b.extLogContent.forcePVLog, "assign"), A = cc11001100_hook("A", 0 === +b.extLogContent.forcePVLog, "assign"), U = cc11001100_hook("U", b.extLogContent && b.extLogContent.firstLevel ? b.extLogContent.firstLevel : {}, "assign"), delete b.extLogContent.firstLevel, delete b.extLogContent.forcePVLog);
    var B = cc11001100_hook("B", $.extend({
      isInstalled: cc11001100_hook("isInstalled", +!!a.isInstalled, "object-key-init")
    }, H.getTcLogData(b)), "var-init");
    b.extLogContent = cc11001100_hook("b.extLogContent", b.extLogContent || {}, "assign"), b.extLogContent.invokeId = cc11001100_hook("b.extLogContent.invokeId", B.invokeId, "assign"), H.sendClickMidLog($.extend(B, {
      extTcLog: cc11001100_hook("extTcLog", b.extTcLog || {}, "object-key-init")
    }, y));
    var E = cc11001100_hook("E", !1, "var-init");
    if (b.ext && "" + b.ext.isShowFold) {
      var J = cc11001100_hook("J", "" + b.ext.isShowFold, "var-init");
      E = cc11001100_hook("E", "0" === J, "assign");
    }
    var F = cc11001100_hook("F", !1, "var-init");
    b.ext && b.ext.isPopRender && (F = cc11001100_hook("F", 1 === +b.ext.isPopRender, "assign")), N.isSharePage() || (N.isGlobalShouldInvoke(v) ? C(E, F) : S(v, E, F));
    var M = cc11001100_hook("M", {
      app: cc11001100_hook("app", R.BD, "object-key-init"),
      mode: cc11001100_hook("mode", T.OPEN_URL, "object-key-init"),
      union: cc11001100_hook("union", B.from, "object-key-init"),
      browserid: cc11001100_hook("browserid", B.browserid, "object-key-init"),
      applid: cc11001100_hook("applid", B.applid, "object-key-init"),
      qid: cc11001100_hook("qid", B.qid, "object-key-init"),
      backQuery: cc11001100_hook("backQuery", window.page.comm.rawQuery, "object-key-init"),
      backQueryMore: {
        rqid: cc11001100_hook("rqid", window.page.comm.lid, "object-key-init")
      },
      fail: cc11001100_hook("fail", 1, "object-key-init")
    }, "var-init");
    if (k && (M.invokeURL = cc11001100_hook("M.invokeURL", k, "assign")), O.isBox() && v.xcxParams) {
      for (var V in v.xcxParams) null === v.xcxParams[V] && (v.xcxParams[V] = cc11001100_hook("v.xcxParams[V]", "", "assign"));
      $.extend(M, {
        xcxParams: cc11001100_hook("xcxParams", v.xcxParams, "object-key-init")
      });
    }
    v && v.sid && (M.backQueryMore[sidKey] = cc11001100_hook("M.backQueryMore[sidKey]", v.sid, "assign"));
    var j = cc11001100_hook("j", $.extend(M, b), "var-init");
    if ($("#commonBase") && $("#commonBase").attr("data-lid") && (j.rqid = cc11001100_hook("j.rqid", $("#commonBase").attr("data-lid"), "assign")), window.page && window.page.comm && window.page.comm.lid && (j.rqid = cc11001100_hook("j.rqid", window.page.comm.lid, "assign")), b.appMulti) {
      for (var G = cc11001100_hook("G", j.appMulti.split("_"), "var-init"), K = cc11001100_hook("K", !1, "var-init"), Z = cc11001100_hook("Z", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < G.length; i++) {
        var Q = cc11001100_hook("Q", G[i].split(":"), "var-init");
        Z.push(Q), 0 === i ? h(j, g, Q[0], Q[1]) : (j.ext = cc11001100_hook("j.ext", b.ext || {}, "assign"), j.tbParams && (j.ext.tbParams = cc11001100_hook("j.ext.tbParams", j.tbParams, "assign")), h(j.ext, g, Q[0], Q[1]), j.ext.mode && j.ext.mode !== Q[1] && (K = cc11001100_hook("K", !0, "assign"), Q[1] = cc11001100_hook("Q[1]", j.ext.mode, "assign")));
      }
      K && (j.appMulti = cc11001100_hook("j.appMulti", "".concat(Z[0][0], ":").concat(Z[0][1], "_").concat(Z[1][0], ":").concat(Z[1][1]), "assign"));
    } else h(j, g);
    var Y = cc11001100_hook("Y", "pop" === b.title, "var-init"),
      W = cc11001100_hook("W", !1, "var-init");
    if (_ && (Y || 1 !== +j.fail || +j.app === R.TIEBA && D.isIOS() && D.iOSVersion()[0] >= 9) && (W = cc11001100_hook("W", !0, "assign")), P && (W = cc11001100_hook("W", !0, "assign")), A && (W = cc11001100_hook("W", !1, "assign")), W) {
      var X = cc11001100_hook("X", b.extLogContent && b.extLogContent.clkInfo ? b.extLogContent.clkInfo : B, "var-init");
      H.sendClickPVLog(g, $.extend({
        ivk_clk_log: cc11001100_hook("ivk_clk_log", 1, "object-key-init"),
        type: cc11001100_hook("type", "na", "object-key-init")
      }, X), U);
    }
    if (Y && "function" == typeof a.popupFunc) a.popupFunc(j, B, v);else {
      var z = cc11001100_hook("z", "", "var-init");
      z = cc11001100_hook("z", 1 === +j.success ? j.invokeURL : 2 === +j.success ? j.defaultURL : j.invokeURL, "assign"), z = cc11001100_hook("z", z || $(g).attr("href"), "assign"), E && !F ? L(j, B, v, z) : I(j, z, v.pos);
    }
  }
  function I(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    O.invoke(a, v), c && D && D.isIOS() && 3 !== +a.success && !a.appMulti && setTimeout(function () {
      window.location.href = cc11001100_hook("window.location.href", c, "assign");
    }, 500);
  }
  function U(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.params, "var-init");
    D.isBaiduBox() ? O.isAppInstalled(c.control.app, function (i) {
      A($.extend(a, {
        isInstalled: cc11001100_hook("isInstalled", i, "object-key-init")
      }));
    }) : A(a);
  }
  function B(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", a || {}, "assign");
    var c = cc11001100_hook("c", a.dom, "var-init"),
      v = cc11001100_hook("v", a.appendPVLog || !1, "var-init");
    c || (c = cc11001100_hook("c", "#page.search-page, #page-controller, #super-frame, #pop-up", "assign"), v = cc11001100_hook("v", !0, "assign")), $(c).on("click", "a[data-ivk]", function (e) {
      var c = cc11001100_hook("c", $(this).data("ivk"), "var-init");
      H.sendTCLog(this, c), b(c) && (e.preventDefault(), e.stopPropagation(), c.xcxParams = cc11001100_hook("c.xcxParams", $(this).data("xcx"), "assign"), U($.extend({
        params: cc11001100_hook("params", c, "object-key-init"),
        ele: cc11001100_hook("ele", this, "object-key-init"),
        appendPVLog: cc11001100_hook("appendPVLog", v, "object-key-init")
      }, a)));
    });
  }
  var D = cc11001100_hook("D", require("@searchfe/user-agent"), "var-init"),
    O = cc11001100_hook("O", require("@baidu/invoke-box-search/output/src/ivkBox"), "var-init"),
    N = cc11001100_hook("N", require("@baidu/invoke-box-search/output/src/until"), "var-init"),
    R = cc11001100_hook("R", O.APP, "var-init"),
    T = cc11001100_hook("T", O.MODE, "var-init"),
    E = cc11001100_hook("E", require("@baidu/invoke-box-search/output/src/invokeCookie"), "var-init"),
    H = cc11001100_hook("H", require("@baidu/invoke-box-search/output/src/log"), "var-init");
  return {
    bindInvoke: cc11001100_hook("bindInvoke", B, "object-key-init"),
    callApp: cc11001100_hook("callApp", U, "object-key-init"),
    call: cc11001100_hook("call", A, "object-key-init"),
    shouldInvoke: cc11001100_hook("shouldInvoke", b, "object-key-init"),
    invokeBox: cc11001100_hook("invokeBox", O, "object-key-init"),
    invokeCookie: cc11001100_hook("invokeCookie", E, "object-key-init"),
    until: cc11001100_hook("until", N, "object-key-init")
  };
}), define("@baidu/invoke-box-search/output/src/invokeCookie", ["require"], function () {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c,
      v,
      g,
      k = cc11001100_hook("k", (null === (g = cc11001100_hook("g", null === (v = cc11001100_hook("v", null === (c = cc11001100_hook("c", null === window || void 0 === window ? void 0 : window.page, "assign")) || void 0 === c ? void 0 : c.comm, "assign")) || void 0 === v ? void 0 : v.invokeApps, "assign")) || void 0 === g ? void 0 : g.control) || [], "var-init");
    if (!Array.isArray(k)) {
      var w = cc11001100_hook("w", [], "var-init");
      Object.keys(k).forEach(function (a) {
        w[a] = cc11001100_hook("w[a]", k[a], "assign");
      }), k = cc11001100_hook("k", w, "assign");
    }
    var h = cc11001100_hook("h", [], "var-init");
    try {
      for (var L = cc11001100_hook("L", 0, "var-init"), b = cc11001100_hook("b", k.length, "var-init"); b > L; L++) if (k[L] && k[L].invoke_group) {
        var S = cc11001100_hook("S", JSON.parse(k[L].invoke_group), "var-init");
        S[_] && S[_] === a && h.push(L);
      }
    } catch (C) {}
    return h;
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c,
      v,
      g,
      k = cc11001100_hook("k", (null === (g = cc11001100_hook("g", null === (v = cc11001100_hook("v", null === (c = cc11001100_hook("c", null === window || void 0 === window ? void 0 : window.page, "assign")) || void 0 === c ? void 0 : c.comm, "assign")) || void 0 === v ? void 0 : v.invokeApps, "assign")) || void 0 === g ? void 0 : g.control) || [], "var-init"),
      w = cc11001100_hook("w", k[a] && k[a].invoke_group, "var-init");
    if (w) try {
      return JSON.parse(w);
    } catch (h) {}
    return {};
  }
  function v(a) {
    cc11001100_hook("a", a, "function-parameter");
    var v = cc11001100_hook("v", c(a), "var-init");
    return v[_] || "";
  }
  function g(c, g) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    g = cc11001100_hook("g", g || "SE_LAUNCH", "assign");
    var w = cc11001100_hook("w", v(c), "var-init");
    if (w) {
      var h = cc11001100_hook("h", a(w), "var-init");
      h && h.length && h.forEach(function (a) {
        k(a, g);
      });
    } else k(c, g);
  }
  function k(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v,
      g = cc11001100_hook("g", S(c) || "", "var-init"),
      k = cc11001100_hook("k", a + ":[\\d]*", "var-init"),
      re = cc11001100_hook("re", new RegExp(k, "g", "i"), "var-init");
    if (5 === a) {
      if (re.test(g)) return;
      v = cc11001100_hook("v", g ? g + "_5:" + C : "5:" + C, "assign");
    } else v = cc11001100_hook("v", re.test(g) ? g.replace(re, a + ":" + C) : g ? g + "_" + a + ":" + C : a + ":" + C, "assign");
    v && S(c, v, {
      expires: cc11001100_hook("expires", 864e5, "object-key-init"),
      domain: cc11001100_hook("domain", ".baidu.com", "object-key-init"),
      path: cc11001100_hook("path", "/", "object-key-init")
    });
  }
  function w(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    var g,
      k = cc11001100_hook("k", S(c) || "", "var-init"),
      w = cc11001100_hook("w", a + ":[\\d]*", "var-init"),
      re = cc11001100_hook("re", new RegExp(w, "ig"), "var-init");
    g = cc11001100_hook("g", re.test(k) ? v ? k.replace(re, a + ":" + v) : k.replace(re, "") : k ? k + "_" + a + ":" + v : a + ":" + v, "assign"), g && S(c, g, {
      expires: cc11001100_hook("expires", 864e5, "object-key-init"),
      domain: cc11001100_hook("domain", ".baidu.com", "object-key-init"),
      path: cc11001100_hook("path", "/", "object-key-init")
    });
  }
  function h(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var c = cc11001100_hook("c", c || "SE_LAUNCH", "var-init"),
      v = cc11001100_hook("v", S(c) || "", "var-init"),
      g = cc11001100_hook("g", new RegExp("(^|_)" + a + ":(\\d+)", "ig").exec(v), "var-init");
    return g ? +g[2] : void 0;
  }
  function L(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var v = cc11001100_hook("v", [], "var-init"), g = cc11001100_hook("g", parseInt(Date.now() / 1e3 / 60, 10), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < a.length; i++) if (v = cc11001100_hook("v", a[i].segm.split("-").map(function (a) {
      return parseInt(new Date().setHours(+a, 0, 0, 0) / 1e3 / 60, 10);
    }), "assign"), v[0] <= g && g < v[1] && (h(c) < v[0] || g - h(c) >= +a[i].int)) return C = cc11001100_hook("C", g, "assign"), !0;
    return !1;
  }
  function b(a, v, g, k, b, S) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    cc11001100_hook("k", k, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("S", S, "function-parameter");
    var S = cc11001100_hook("S", S || "SE_LAUNCH", "var-init");
    if (!a) return !0;
    var C = cc11001100_hook("C", h(a, S), "var-init");
    if (!C) return !0;
    if (k) {
      var _ = cc11001100_hook("_", 60 * C * 1e3, "var-init");
      if (new Date(_).toDateString() !== new Date().toDateString()) return "SE_LAUNCH" === S ? w(a, "PSCBD", "0") : w(a, "G_PSCBD", "0"), w(a, S, ""), !0;
    }
    if (k && b && +b > 0) return !0;
    if (!v && !g) {
      var P = cc11001100_hook("P", c(a), "var-init");
      v = cc11001100_hook("v", P.interval && +P.interval, "assign");
    }
    return !v || 0 >= +v ? !0 : g && Array.isArray(g) && L(g, a) ? !0 : parseInt(Date.now() / 1e3 / 60, 10) - y - C < +v ? !1 : !0;
  }
  var S;
  S = cc11001100_hook("S", window.page && window.page.utils && window.page.utils.cookie ? page.utils.cookie : window.B && window.B.cookie ? window.B.cookie : function () {
    return "";
  }, "assign");
  var C = cc11001100_hook("C", parseInt((page.comm.serverTime || window.sSession && window.sSession.serverTime) / 60, 10), "var-init"),
    y = cc11001100_hook("y", parseInt(Date.now() / 1e3 / 60, 10) - C, "var-init"),
    _ = cc11001100_hook("_", "shutdown_trigger_interval", "var-init");
  return {
    setCookie: cc11001100_hook("setCookie", g, "object-key-init"),
    setPosValCookie: cc11001100_hook("setPosValCookie", w, "object-key-init"),
    getCookieVal: cc11001100_hook("getCookieVal", h, "object-key-init"),
    checkInvokeHZ: cc11001100_hook("checkInvokeHZ", b, "object-key-init")
  };
}), define("@baidu/invoke-box-search/output/src/ivkBox", ["require", "@searchfe/user-agent", "@baidu/invoke-box", "@baidu/invoke-box-search/output/src/sendBeacon"], function (require) {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", C(a, c), "var-init");
    return v ? v.strategy : null;
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a && a !== P;
  }
  function v(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a && a[c];
  }
  function g(a) {
    cc11001100_hook("a", a, "function-parameter");
    $.each(a, function (a, c) {
      var v = cc11001100_hook("v", A.control[a], "var-init");
      v && c instanceof Object && (v = cc11001100_hook("v", $.extend(v, c), "assign"));
    });
  }
  function k(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", C(a, c), "var-init"),
      g = cc11001100_hook("g", {}, "var-init");
    if (v) try {
      g = cc11001100_hook("g", "string" == typeof v.ext ? JSON.parse(v.ext).flow : v.ext.flow, "assign");
    } catch (e) {}
    return g;
  }
  function w(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", L.getLogData(a), "var-init");
    return $.extend({
      union: cc11001100_hook("union", v.from, "object-key-init"),
      browserid: cc11001100_hook("browserid", v.browserid, "object-key-init"),
      qid: cc11001100_hook("qid", v.lid, "object-key-init")
    }, a, c);
  }
  var h = cc11001100_hook("h", require("@searchfe/user-agent"), "var-init"),
    L = cc11001100_hook("L", require("@baidu/invoke-box"), "var-init"),
    b = cc11001100_hook("b", require("@baidu/invoke-box-search/output/src/sendBeacon"), "var-init"),
    S = cc11001100_hook("S", L.invoke, "var-init"),
    C = cc11001100_hook("C", L.getControlByPos, "var-init"),
    y = cc11001100_hook("y", 27, "var-init"),
    _ = cc11001100_hook("_", 51, "var-init"),
    P = cc11001100_hook("P", "baiduboxapp", "var-init"),
    A = cc11001100_hook("A", window.page.comm.invokeApps, "var-init"),
    I = cc11001100_hook("I", a(y, A), "var-init"),
    U = cc11001100_hook("U", k(_, A), "var-init");
  return g(U), L.invoke = cc11001100_hook("L.invoke", function (a, g) {
    var k = cc11001100_hook("k", {}, "var-init");
    c(I) && (a.protocolHeader = cc11001100_hook("a.protocolHeader", I, "assign")), g && v(U, g) && (k = cc11001100_hook("k", U[g], "assign")), a = cc11001100_hook("a", w(a, k), "assign"), window.page && window.page.comm && window.page.comm.invokeApps && window.page.comm.invokeApps.stoken && (a.stoken = cc11001100_hook("a.stoken", window.page.comm.invokeApps.stoken, "assign")), window.sSession && window.sSession.invokeApps && window.sSession.invokeApps.stoken && (a.stoken = cc11001100_hook("a.stoken", window.sSession.invokeApps.stoken, "assign")), h.isIOS() && !a.isForceBack && (a.backURL = cc11001100_hook("a.backURL", "", "assign")), S(a, g);
  }, "assign"), L.isSfApp = cc11001100_hook("L.isSfApp", function () {
    return window.isSfapp || /^\/sf(\/.+)?/gi.test(location.pathname);
  }, "assign"), L.sendBeaconLog = cc11001100_hook("L.sendBeaconLog", function (a) {
    try {
      !a.logInfo && a.clk_extra && (a.logInfo = cc11001100_hook("a.logInfo", a.clk_extra, "assign"), delete a.clk_extra), b.init({
        url: cc11001100_hook("url", "//m.baidu.com/tc", "object-key-init"),
        app: cc11001100_hook("app", "searchbox-temp", "object-key-init"),
        watch: cc11001100_hook("watch", !1, "object-key-init")
      }), b.send($.extend({}, a), !0);
    } catch (e) {
      console.error(e);
    }
  }, "assign"), L.sendLog = cc11001100_hook("L.sendLog", function (a, c, v) {
    void 0 === v && (v = cc11001100_hook("v", !1, "assign"));
    var g = cc11001100_hook("g", window.page.log, "var-init");
    if (window._SF_ && window._SF_.page && window._SF_.page.log && (g = cc11001100_hook("g", window._SF_.page.log, "assign")), L.isSfApp() && g.sendInfo) {
      if (g.sendInfo(a, c), v) try {
        L.sendBeaconLog(L.getSendBeaconLogSFData(a, c));
      } catch (e) {}
    } else if (g.send(a), v) try {
      L.sendBeaconLog(L.getSendBeaconLogData(a));
    } catch (e) {}
  }, "assign"), L.getSendBeaconLogSFData = cc11001100_hook("L.getSendBeaconLogSFData", function (a, c) {
    var v = cc11001100_hook("v", window.page.comm || {}, "var-init"),
      g = cc11001100_hook("g", {
        applid: cc11001100_hook("applid", v.applid, "object-key-init"),
        t: cc11001100_hook("t", +new Date(), "object-key-init")
      }, "var-init");
    v.actname && (g.apptpl = cc11001100_hook("g.apptpl", v.actname, "assign")), a = cc11001100_hook("a", $.extend(g, a), "assign"), c = cc11001100_hook("c", c || {}, "assign");
    var c = cc11001100_hook("c", c || {}, "var-init");
    $.extend(c, {
      clk_info: cc11001100_hook("clk_info", JSON.stringify(a), "object-key-init")
    });
    var v = cc11001100_hook("v", window.page.comm || {}, "var-init"),
      k = cc11001100_hook("k", {
        tcreq4log: cc11001100_hook("tcreq4log", 1, "object-key-init"),
        pd: cc11001100_hook("pd", v.pd || "", "object-key-init"),
        tn: cc11001100_hook("tn", v.tn || "", "object-key-init"),
        lid: cc11001100_hook("lid", v.lid, "object-key-init"),
        module: cc11001100_hook("module", "sf", "object-key-init")
      }, "var-init");
    return $.extend(k, c);
  }, "assign"), L.getSendBeaconLogData = cc11001100_hook("L.getSendBeaconLogData", function (a) {
    var c = cc11001100_hook("c", window.page.comm || {}, "var-init"),
      v = cc11001100_hook("v", c.prepath || "", "var-init"),
      g = cc11001100_hook("g", {
        tcreq4log: cc11001100_hook("tcreq4log", 1 + (v ? "&" + v.replace(/#/g, "&") : ""), "object-key-init"),
        ct: cc11001100_hook("ct", 0, "object-key-init"),
        cst: cc11001100_hook("cst", 0, "object-key-init")
      }, "var-init");
    c.ref && (g.ref = cc11001100_hook("g.ref", c.ref, "assign")), c.lid && (g.lid = cc11001100_hook("g.lid", c.lid, "assign")), c.pn && c.rn && c.query && (g.w = cc11001100_hook("g.w", c.pn + "_" + c.rn + "_" + encodeURIComponent(c.query), "assign")), c.sid && (g.sid = cc11001100_hook("g.sid", c.sid, "assign"));
    var k = cc11001100_hook("k", $.extend(g, a), "var-init");
    return k.r = cc11001100_hook("k.r", Date.now(), "assign"), k;
  }, "assign"), L.getLogData = cc11001100_hook("L.getLogData", function (a) {
    var c = cc11001100_hook("c", window.page.comm, "var-init"),
      v = cc11001100_hook("v", c.from, "var-init"),
      g = cc11001100_hook("g", a.from || "", "var-init"),
      k = cc11001100_hook("k", a.channel || "", "var-init"),
      w = cc11001100_hook("w", v && "0" !== v ? v : "", "var-init"),
      h = cc11001100_hook("h", c.browserid, "var-init"),
      L = cc11001100_hook("L", c.applid, "var-init"),
      b = cc11001100_hook("b", c.lid, "var-init"),
      S = cc11001100_hook("S", c.query, "var-init"),
      C = cc11001100_hook("C", new Date().getTime(), "var-init"),
      y = cc11001100_hook("y", c.lid + "_" + C, "var-init");
    return {
      origin: cc11001100_hook("origin", g, "object-key-init"),
      from: cc11001100_hook("from", w, "object-key-init"),
      channel: cc11001100_hook("channel", k, "object-key-init"),
      browserid: cc11001100_hook("browserid", h, "object-key-init"),
      applid: cc11001100_hook("applid", L, "object-key-init"),
      qid: cc11001100_hook("qid", b, "object-key-init"),
      query: cc11001100_hook("query", S, "object-key-init"),
      timestamp: cc11001100_hook("timestamp", C, "object-key-init"),
      invokeId: cc11001100_hook("invokeId", y, "object-key-init")
    };
  }, "assign"), L;
}), define("@baidu/invoke-box-search/output/src/log", ["require", "@baidu/invoke-box-search/output/src/ivkBox", "@baidu/invoke-box-search/output/src/until"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c;
    try {
      c = cc11001100_hook("c", JSON.parse(a.replace(/'/g, '"')), "assign");
    } catch (e) {
      c = cc11001100_hook("c", {}, "assign");
    }
    return c;
  }
  function c(c) {
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", $(c).closest(".c-result").data("log"), "var-init");
    return a(v);
  }
  function v(a, v, k) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("k", k, "function-parameter");
    try {
      require(["@baidu/ala-util/ala"], function (h) {
        var L = cc11001100_hook("L", g(a) || {}, "var-init"),
          b = cc11001100_hook("b", h.sendLog, "var-init"),
          S = cc11001100_hook("S", $(a).closest(".c-result"), "var-init"),
          C = cc11001100_hook("C", $(a).closest("[srcid]").get(0), "var-init"),
          _ = cc11001100_hook("_", $(a).data("sig"), "var-init"),
          P = cc11001100_hook("P", S.attr("tpl") || L.tpl, "var-init"),
          A = cc11001100_hook("A", S.attr("srcid") || L.srcid, "var-init");
        A === P && (A = cc11001100_hook("A", S.attr("new_srcid") || L.new_srcid, "assign"));
        var I = cc11001100_hook("I", $(a).attr("href"), "var-init"),
          U = cc11001100_hook("U", L.xpath, "var-init");
        if (/^baiduboxapp/.test(I)) try {
          var B = cc11001100_hook("B", decodeURIComponent(I).match(/pageUrl\"\:\"https\:\\\/\\\/m\.baidu\.com\\([^"]*)\"/), "var-init");
          if (B && B[1]) I = cc11001100_hook("I", B[1], "assign");else {
            var D = cc11001100_hook("D", decodeURIComponent(I).match(/pageUrl\"\:\"https\:\/\/m\.baidu\.com([^"]*)\"/), "var-init");
            D && D[1] && (I = cc11001100_hook("I", D[1], "assign"));
          }
        } catch (e) {}
        var O = cc11001100_hook("O", w(a) || {}, "var-init");
        b($.extend($.extend({
          src: cc11001100_hook("src", I, "object-key-init"),
          xpath: cc11001100_hook("xpath", U || y(a, C).slice(0, 150), "object-key-init"),
          sig: cc11001100_hook("sig", _, "object-key-init")
        }, k), v), {
          env: cc11001100_hook("env", "wise", "object-key-init"),
          srcid: cc11001100_hook("srcid", A, "object-key-init"),
          tplname: cc11001100_hook("tplname", P, "object-key-init"),
          order: cc11001100_hook("order", S.attr("order") || L.order, "object-key-init"),
          ensrcid: cc11001100_hook("ensrcid", c(a).ensrcid || "", "object-key-init"),
          lid: cc11001100_hook("lid", O.lid || window.page.comm.lid, "object-key-init")
        });
      });
    } catch (e) {}
  }
  function g(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", $(a).attr("invoke-need-props"), "var-init"),
      v = cc11001100_hook("v", {}, "var-init");
    if ("string" == typeof c) try {
      v = cc11001100_hook("v", JSON.parse(c), "assign");
    } catch (e) {}
    return v;
  }
  function k(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? a.classList && a.classList.contains("se-page-bd") ? a : a.className && a.className.includes("se-page-bd") ? a : k(a.parentNode) : null;
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c,
      v = cc11001100_hook("v", g(a) || {}, "var-init");
    if (v && (v.pageNumber || 0 === v.pageNumber)) c = cc11001100_hook("c", document.querySelectorAll("script[data-for=query]")[v.pageNumber - 1], "assign");else {
      var w = cc11001100_hook("w", k(a), "var-init");
      c = cc11001100_hook("c", w && w.querySelector("script[data-for=query]"), "assign");
    }
    var h = cc11001100_hook("h", {}, "var-init");
    try {
      var L = cc11001100_hook("L", c && c.innerHTML, "var-init");
      h = cc11001100_hook("h", L && JSON.parse(L), "assign");
    } catch (e) {}
    return h || {};
  }
  function h(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var v = cc11001100_hook("v", a.extTcLog || {}, "var-init");
    if (delete a.extTcLog, I.isSfApp()) {
      var c = cc11001100_hook("c", c || {}, "var-init"),
        g = cc11001100_hook("g", $.extend({
          extra: cc11001100_hook("extra", JSON.stringify(c), "object-key-init")
        }, v), "var-init");
      a.cyc && (g.cyc = cc11001100_hook("g.cyc", a.cyc, "assign"), delete a.cyc), a.clkInfo && (a = cc11001100_hook("a", $.extend(a, a.clkInfo), "assign"), delete a.clkInfo), I.sendLog(a, g, !0);
    } else {
      var k = cc11001100_hook("k", $.extend({
        ct: cc11001100_hook("ct", B, "object-key-init"),
        cst: cc11001100_hook("cst", D.CLICK, "object-key-init"),
        clk_extra: cc11001100_hook("clk_extra", JSON.stringify(a), "object-key-init")
      }, v), "var-init");
      I.sendLog(k, null, !0);
    }
  }
  function L(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    I.sendLog($.extend({
      type: cc11001100_hook("type", "sf", "object-key-init")
    }, c), {
      extra: cc11001100_hook("extra", JSON.stringify(v || {}), "object-key-init")
    });
  }
  function b(a, c, v, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    I.sendLog($.extend({
      ct: cc11001100_hook("ct", B, "object-key-init"),
      cst: cc11001100_hook("cst", D[a], "object-key-init")
    }, {
      clk_extra: cc11001100_hook("clk_extra", JSON.stringify($.extend(v, g)), "object-key-init")
    }, c));
  }
  function S(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", a.extLogContent, "var-init");
    if ("string" == typeof c) try {
      c = cc11001100_hook("c", JSON.parse(c), "assign");
    } catch (e) {
      c = cc11001100_hook("c", {}, "assign");
    }
    var v = cc11001100_hook("v", $.extend(I.getLogData(a), c), "var-init");
    return a.app_multi && a.ext && $.extend(v, {
      secondIvk: {
        origin: cc11001100_hook("origin", a.ext.from || "", "object-key-init"),
        channel: cc11001100_hook("channel", a.ext.channel || "", "object-key-init")
      }
    }), v;
  }
  function C(a, c, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    I.isSfApp() ? L(a, c, g) : v(a, c, g);
  }
  function y(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    function v(a) {
      cc11001100_hook("a", a, "function-parameter");
      var c = cc11001100_hook("c", [], "var-init"),
        v = cc11001100_hook("v", a, "var-init");
      for (v = cc11001100_hook("v", v.previousSibling, "assign"); v;) v.tagName === a.tagName && c.push(v), v = cc11001100_hook("v", v.previousSibling, "assign");
      return c.length;
    }
    c = cc11001100_hook("c", c || document.documentElement, "assign");
    for (var g, k = cc11001100_hook("k", [], "var-init"); a && a !== c;) {
      g = cc11001100_hook("g", v(a), "assign");
      var w = cc11001100_hook("w", $(a).data("module"), "var-init");
      w = cc11001100_hook("w", w ? "(" + w + ")" : "", "assign"), k.push(a.nodeName.toLowerCase() + (g > 0 ? g + 1 : "") + w), a = cc11001100_hook("a", a.parentNode, "assign");
    }
    return k.reverse().join("-");
  }
  function _(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", $(a).attr("href") || "", "var-init");
    return /\/\/swan/.test(c) ? "xcx" : "na";
  }
  function P(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", $(a).attr("rl-link-data-click") || $(a).attr("data-click"), "var-init");
    if (c) {
      if ("string" == typeof c) try {
        c = cc11001100_hook("c", JSON.parse(c), "assign");
      } catch (e) {
        c = cc11001100_hook("c", {}, "assign");
      }
      var v = cc11001100_hook("v", c.clk_info || {}, "var-init");
      delete c.clk_info;
      var g = cc11001100_hook("g", c || {}, "var-init");
      return [g, v];
    }
    return [{}, {}];
  }
  function A(a, c, v) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("v", v, "function-parameter");
    c = cc11001100_hook("c", c || {}, "assign");
    var g = cc11001100_hook("g", c.control || {}, "var-init"),
      k = cc11001100_hook("k", U.getOriginExt(g.ext), "var-init");
    if (1 === +k.shouldAutoSendTcLog) {
      g.extLogContent = cc11001100_hook("g.extLogContent", g.extLogContent || {}, "assign"), g.extLogContent.forcePVLog = cc11001100_hook("g.extLogContent.forcePVLog", 0, "assign");
      var w = cc11001100_hook("w", g.extLogContent && g.extLogContent.firstLevel ? g.extLogContent.firstLevel : {}, "var-init");
      delete g.extLogContent.firstLevel;
      var h = cc11001100_hook("h", $.extend({}, S(g)), "var-init"),
        L = cc11001100_hook("L", g.extLogContent && g.extLogContent.clkInfo ? g.extLogContent.clkInfo : h, "var-init"),
        b = cc11001100_hook("b", k.shouldAutoSendTcLogType || _(a), "var-init");
      if ("xcx" === b) {
        var y = cc11001100_hook("y", P(a), "var-init");
        w = cc11001100_hook("w", $.extend({}, y[0], w), "assign"), L = cc11001100_hook("L", $.extend({}, y[1], L), "assign");
      }
      C(a, $.extend({
        ivk_clk_log: cc11001100_hook("ivk_clk_log", 1, "object-key-init"),
        type: cc11001100_hook("type", b, "object-key-init")
      }, v, L), w);
    }
  }
  var I = cc11001100_hook("I", require("@baidu/invoke-box-search/output/src/ivkBox"), "var-init"),
    U = cc11001100_hook("U", require("@baidu/invoke-box-search/output/src/until"), "var-init"),
    B = cc11001100_hook("B", 76, "var-init"),
    D = cc11001100_hook("D", {
      SHOW: cc11001100_hook("SHOW", 1, "object-key-init"),
      CLICK: cc11001100_hook("CLICK", 2, "object-key-init")
    }, "var-init");
  return {
    getTcLogData: cc11001100_hook("getTcLogData", S, "object-key-init"),
    sendSFClickLog: cc11001100_hook("sendSFClickLog", L, "object-key-init"),
    sendClickMidLog: cc11001100_hook("sendClickMidLog", h, "object-key-init"),
    sendCardClickLog: cc11001100_hook("sendCardClickLog", v, "object-key-init"),
    sendClickPVLog: cc11001100_hook("sendClickPVLog", C, "object-key-init"),
    sendPopupLog: cc11001100_hook("sendPopupLog", b, "object-key-init"),
    sendTCLog: cc11001100_hook("sendTCLog", A, "object-key-init")
  };
}), define("@baidu/invoke-box-search/output/src/sendBeacon", ["require"], function () {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", Object.keys(a).reduce(function (c, v) {
      var g = cc11001100_hook("g", a[v], "var-init");
      return g && "object" == typeof g && (g = cc11001100_hook("g", JSON.stringify(g), "assign")), c += cc11001100_hook("c", "&" + v + "=" + g, "assign");
    }, ""), "var-init");
    return c.slice(1);
  }
  function c() {
    return Math.floor(1e8 * Math.random());
  }
  var v = cc11001100_hook("v", 120, "var-init"),
    g = cc11001100_hook("g", {
      app: cc11001100_hook("app", "", "object-key-init"),
      url: cc11001100_hook("url", "//m.baidu.com/tc", "object-key-init"),
      watch: cc11001100_hook("watch", !0, "object-key-init")
    }, "var-init"),
    k = cc11001100_hook("k", {
      config: {},
      isCheckedParams: cc11001100_hook("isCheckedParams", !0, "object-key-init"),
      init: function (a) {
        return a || (a = cc11001100_hook("a", {}, "assign")), this.config = cc11001100_hook("this.config", Object.assign({}, g, a), "assign"), this.config.app ? (this.config.watch && this.watch(), void delete this.config.watch) : (this.isCheckedParams = cc11001100_hook("this.isCheckedParams", !1, "assign"), void console.error("[h5-error-log]: app参数必填~"));
      },
      watch: function () {
        window.addEventListener("error", function (e) {
          this.send({
            level: cc11001100_hook("level", "error", "object-key-init"),
            type: cc11001100_hook("type", "page", "object-key-init"),
            content: cc11001100_hook("content", JSON.stringify(e), "object-key-init"),
            ext: {
              errmsg: cc11001100_hook("errmsg", JSON.stringify(e), "object-key-init")
            }
          });
        }), window.addEventListener("unhandledrejection", function (a) {
          a.preventDefault(), this.send({
            level: cc11001100_hook("level", "unhandledrejection", "object-key-init"),
            type: cc11001100_hook("type", "page", "object-key-init"),
            content: cc11001100_hook("content", JSON.stringify(a.reason), "object-key-init"),
            ext: {
              errmsg: cc11001100_hook("errmsg", JSON.stringify(a.reason), "object-key-init")
            }
          });
        });
      },
      send: function (c, g) {
        if (g || (g = cc11001100_hook("g", !0, "assign")), !this.isCheckedParams) return void console.error("[h5-error-log]: 参数校验失败，请检查init参数");
        var k = cc11001100_hook("k", Object.assign({}, c), "var-init");
        k.origin_ct = cc11001100_hook("k.origin_ct", k.ct, "assign"), k.ct = cc11001100_hook("k.ct", v, "assign");
        var w = cc11001100_hook("w", a(k), "var-init");
        (!g || g && !this.sendBeacon(w)) && this.loadImage(w);
      },
      loadImage: function (a) {
        var v = cc11001100_hook("v", new Image(), "var-init"),
          g = cc11001100_hook("g", "_img_" + c(), "var-init");
        window[g] = cc11001100_hook("window[g]", v, "assign"), v.onload = cc11001100_hook("v.onload", v.onerror = cc11001100_hook("v.onerror", v.onabort = cc11001100_hook("v.onabort", function () {
          v = cc11001100_hook("v", v.onload = cc11001100_hook("v.onload", v.onerror = cc11001100_hook("v.onerror", v.onabort = cc11001100_hook("v.onabort", null, "assign"), "assign"), "assign"), "assign"), delete window[g];
        }, "assign"), "assign"), "assign"), v.src = cc11001100_hook("v.src", this.config.url + "?" + a, "assign");
      },
      sendBeacon: function (a) {
        return "sendBeacon" in navigator ? navigator.sendBeacon(this.config.url + "?" + a) : !1;
      }
    }, "var-init");
  return k;
}), define("@baidu/invoke-box-search/output/src/until", ["require"], function () {
  function a() {
    return 36;
  }
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    return /baiduboxapp/.test(a);
  }
  function v() {
    return window.page && window.page.comm && window.page.comm.invokeApps ? window.page.comm.invokeApps : void 0;
  }
  function g(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", v(), "var-init");
    return c && c.control ? c.control[a] : void 0;
  }
  function k(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return window.sessionStorage && window.sessionStorage.setItem(a, c);
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    return window.sessionStorage && window.sessionStorage.getItem(a);
  }
  function h(c) {
    cc11001100_hook("c", c, "function-parameter");
    if (!c) return !1;
    var v = cc11001100_hook("v", a(), "var-init"),
      g = cc11001100_hook("g", +c.app, "var-init");
    !g && c.control && (g = cc11001100_hook("g", +c.control.app, "assign"));
    var k,
      w = cc11001100_hook("w", +c.pos, "var-init");
    if (window.page && window.page.comm && window.page.comm.invokeApps && window.page.comm.invokeApps.control && (k = cc11001100_hook("k", window.page.comm.invokeApps.control[v], "assign")), window.sSession && window.sSession.invokeApps && window.sSession.invokeApps.control && (k = cc11001100_hook("k", window.sSession.invokeApps.control[v], "assign")), !k) return !1;
    if (1 !== g && 3 !== g) return !1;
    if (k.ext) {
      var h = cc11001100_hook("h", L(k.ext), "var-init");
      if (h.avoid && h.avoid.indexOf(w) > -1) return !1;
      if (h.effect && h.effect.indexOf(w) > -1) return !0;
    }
    return !1;
  }
  function L(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", {}, "var-init");
    if (a && "string" == typeof a) try {
      c = cc11001100_hook("c", JSON.parse(a), "assign");
    } catch (e) {
      c = cc11001100_hook("c", {}, "assign");
    }
    return a && "object" == typeof a && (c = cc11001100_hook("c", a, "assign")), {
      invokeHZ: cc11001100_hook("invokeHZ", c.invokeHZ, "object-key-init"),
      forceInvoke: cc11001100_hook("forceInvoke", !!c.forceInvoke, "object-key-init"),
      sameDayBlock: cc11001100_hook("sameDayBlock", +c.sameDayBlock, "object-key-init"),
      maxAttemptCount: cc11001100_hook("maxAttemptCount", c.maxAttemptCount, "object-key-init"),
      attemptFailType: cc11001100_hook("attemptFailType", c.attemptFailType, "object-key-init"),
      avoid: cc11001100_hook("avoid", c.avoid || [], "object-key-init"),
      effect: cc11001100_hook("effect", c.effect || [], "object-key-init")
    };
  }
  function b(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (!a) return {};
    var c = cc11001100_hook("c", {}, "var-init");
    if (a && "string" == typeof a) try {
      c = cc11001100_hook("c", JSON.parse(a), "assign");
    } catch (e) {
      c = cc11001100_hook("c", {}, "assign");
    }
    return "object" == typeof a && (c = cc11001100_hook("c", a, "assign")), c;
  }
  function S(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a || !c) return !1;
    var v = cc11001100_hook("v", new Date(a), "var-init"),
      g = cc11001100_hook("g", new Date(c), "var-init");
    return v.getFullYear() === g.getFullYear() && v.getMonth() === g.getMonth() && v.getDate() === g.getDate();
  }
  return {
    getGlobalIndex: cc11001100_hook("getGlobalIndex", a, "object-key-init"),
    isSharePage: cc11001100_hook("isSharePage", c, "object-key-init"),
    setSessionStorage: cc11001100_hook("setSessionStorage", k, "object-key-init"),
    getSessionStorage: cc11001100_hook("getSessionStorage", w, "object-key-init"),
    isGlobalShouldInvoke: cc11001100_hook("isGlobalShouldInvoke", h, "object-key-init"),
    getExt: cc11001100_hook("getExt", L, "object-key-init"),
    getInvokeApps: cc11001100_hook("getInvokeApps", v, "object-key-init"),
    getOriginExt: cc11001100_hook("getOriginExt", b, "object-key-init"),
    getInvokeAppsControl: cc11001100_hook("getInvokeAppsControl", g, "object-key-init"),
    isSameDay: cc11001100_hook("isSameDay", S, "object-key-init")
  };
}), define("@baidu/invoke-box-search", ["@baidu/invoke-box-search/output/index"], function (mod) {
  return mod;
});