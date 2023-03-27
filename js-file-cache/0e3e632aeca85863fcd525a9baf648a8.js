var passport = cc11001100_hook("passport", passport || window.passport || {}, "var-init");
passport._modulePool = cc11001100_hook("passport._modulePool", passport._modulePool || {}, "assign"), passport._define = cc11001100_hook("passport._define", passport._define || function (s, a) {
  passport._modulePool[s] = cc11001100_hook("passport._modulePool[s]", a && a(), "assign");
}, "assign"), passport._getModule = cc11001100_hook("passport._getModule", passport._getModule || function (s) {
  return passport._modulePool[s];
}, "assign"), window.upsmsStore = cc11001100_hook("window.upsmsStore", {
  reg_upsms: cc11001100_hook("reg_upsms", "106929130003000002", "object-key-init"),
  verify_upsms: cc11001100_hook("verify_upsms", "106929130003000004", "object-key-init"),
  verify_text_upsms: cc11001100_hook("verify_text_upsms", "1069 2913 0003 000 004", "object-key-init")
}, "assign"), window.YY_TPL_CONFIG = cc11001100_hook("window.YY_TPL_CONFIG", "yylive,yyliveserver,yyanchor,pcyy,yyudbsec,bdgameassist,yoyuyin,", "assign");
try {
  if (window.localStorage && window.localStorage.getItem("upsms-pcApi")) try {
    window.upsmsStore = cc11001100_hook("window.upsmsStore", JSON.parse(window.localStorage.getItem("upsms-pcApi")), "assign");
  } catch (e) {}
} catch (e) {}
var passport = cc11001100_hook("passport", window.passport || {}, "var-init");
passport._load = cc11001100_hook("passport._load", passport._load || function (s, a, e) {
  var t = cc11001100_hook("t", document, "var-init"),
    n = cc11001100_hook("n", t.createElement("SCRIPT"), "var-init");
  if (a) {
    n.type = cc11001100_hook("n.type", "text/javascript", "assign"), n.charset = cc11001100_hook("n.charset", "UTF-8", "assign");
    var o = cc11001100_hook("o", s.split("?")[0], "var-init"),
      p = cc11001100_hook("p", Math.round(1e3 * Math.random()), "var-init"),
      i = cc11001100_hook("i", new Date().getTime(), "var-init");
    n.readyState ? n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
      if ("loaded" === n.readyState || "complete" === n.readyState) {
        if (n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), 100 === p) {
          var s = cc11001100_hook("s", new Date().getTime() - i, "var-init");
          new Image().src = cc11001100_hook("new Image().src", document.location.protocol + "//nsclick.baidu.com/v.gif?pid=111&type=1023&url=" + encodeURIComponent(o) + "&time=" + s, "assign");
        }
        e && e();
      }
    }, "assign") : n.onload = cc11001100_hook("n.onload", function () {
      if (100 === p) {
        var s = cc11001100_hook("s", new Date().getTime() - i, "var-init");
        new Image().src = cc11001100_hook("new Image().src", document.location.protocol + "//nsclick.baidu.com/v.gif?pid=111&type=1023&url=" + encodeURIComponent(o) + "&time=" + s, "assign");
      }
      e && e();
    }, "assign"), n.src = cc11001100_hook("n.src", 100 === p ? o + "?t=" + Math.random() : s, "assign"), t.getElementsByTagName("head")[0].appendChild(n);
  } else n.type = cc11001100_hook("n.type", "text/javascript", "assign"), n.charset = cc11001100_hook("n.charset", "UTF-8", "assign"), n.src = cc11001100_hook("n.src", s, "assign"), t.getElementsByTagName("head")[0].appendChild(n), n.readyState ? n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
    ("loaded" === n.readyState || "complete" === n.readyState) && (n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), e && e());
  }, "assign") : n.onload = cc11001100_hook("n.onload", function () {
    e && e();
  }, "assign");
}, "assign"), passport.ieVersion = cc11001100_hook("passport.ieVersion", function () {
  var s;
  try {
    var a = cc11001100_hook("a", navigator.userAgent.toLowerCase(), "var-init"),
      e = cc11001100_hook("e", a.indexOf("msie") > -1, "var-init");
    e && a.match(/msie ([\d.]+)/) && (s = cc11001100_hook("s", a.match(/msie ([\d.]+)/)[1], "assign"));
  } catch (t) {
    s = cc11001100_hook("s", 0, "assign");
  }
  return s;
}, "assign"), passport.getDomain = cc11001100_hook("passport.getDomain", function () {
  var s = cc11001100_hook("s", {
    "http:": cc11001100_hook("http:", "http://ppui-static-pc.cdn.bcebos.com", "object-key-init"),
    "https:": cc11001100_hook("https:", "https://ppui-static-pc.cdn.bcebos.com", "object-key-init")
  }, "var-init");
  passport.ieVersion() <= 8 && (s = cc11001100_hook("s", {
    "http:": cc11001100_hook("http:", "http://passport.baidu.com", "object-key-init"),
    "https:": cc11001100_hook("https:", "https://passport.baidu.com", "object-key-init")
  }, "assign"));
  var a;
  return a = cc11001100_hook("a", passport && "https" === passport._protocol ? "https:" : window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase(), "assign"), s[a] || s["https:"];
}, "assign"), passport._use = cc11001100_hook("passport._use", passport._use || function (s, a, e) {
  function t() {
    passport._load("https://wappass.baidu.com/static/waplib/moonshad.js?tt=" + new Date().getTime(), !0, function () {
      var s = cc11001100_hook("s", passport._getModule(o), "var-init");
      if (!s) throw new Error("load " + o + "module script error.");
      e && e(s);
    });
  }
  var n = cc11001100_hook("n", passport.getDomain() + a, "var-init"),
    o = cc11001100_hook("o", s + ".js", "var-init"),
    p = cc11001100_hook("p", passport._getModule(o), "var-init");
  p ? e && e(p) : passport._load(n, !0, t);
}, "assign"), passport.loadPass = cc11001100_hook("passport.loadPass", function (s, a) {
  var e = cc11001100_hook("e", passport.getDomain() + s, "var-init"),
    t = cc11001100_hook("t", document.createElement("link"), "var-init");
  t.rel = cc11001100_hook("t.rel", "stylesheet", "assign"), t.type = cc11001100_hook("t.type", "text/css", "assign"), t.href = cc11001100_hook("t.href", e, "assign"), document.getElementsByTagName("head")[0].appendChild(t), t.readyState ? t.onreadystatechange = cc11001100_hook("t.onreadystatechange", function () {
    ("loaded" == t.readyState || "complete" == t.readyState) && (t.onreadystatechange = cc11001100_hook("t.onreadystatechange", null, "assign"), a && a());
  }, "assign") : t.onload = cc11001100_hook("t.onload", function () {
    a && a();
  }, "assign");
}, "assign"), passport.use = cc11001100_hook("passport.use", passport.use || function (s, a, e) {
  var t = cc11001100_hook("t", a && a.tangram === !1 ? "" : "_tangram", "var-init");
  a && a.protocol && (passport._protocol = cc11001100_hook("passport._protocol", a.protocol, "assign")), "reg" === s && a && a.regPhoneOnly && (s = cc11001100_hook("s", "regPhone", "assign"));
  var n,
    o,
    p,
    i = cc11001100_hook("i", "login" === s && a && a.loginVersion && "v4" === a.loginVersion, "var-init"),
    r = cc11001100_hook("r", "login" === s && a && a.loginVersion && "v5" === a.loginVersion, "var-init");
  r ? (p = cc11001100_hook("p", "/passApi/css/loginv5_ec420dd.css", "assign"), o = cc11001100_hook("o", "/passApi/js/loginv5_tangram_fbd6896.js", "assign"), n = cc11001100_hook("n", "/passApi/js/loginv5_50d5238.js", "assign")) : i ? (p = cc11001100_hook("p", "/passApi/css/loginv4_67e0a75.css", "assign"), o = cc11001100_hook("o", "/passApi/js/loginv4_tangram_1b21e3d.js", "assign"), n = cc11001100_hook("n", "/passApi/js/loginv4_e5b7fcb.js", "assign")) : (p = cc11001100_hook("p", "/passApi/css/uni_login_merge_d181fd7.css", "assign"), o = cc11001100_hook("o", "/passApi/js/login_tangram_b5bb291.js", "assign"), n = cc11001100_hook("n", "/passApi/js/login_2a3bfcd.js", "assign"));
  var c = cc11001100_hook("c", {
      login: cc11001100_hook("login", n, "object-key-init"),
      login_tangram: cc11001100_hook("login_tangram", o, "object-key-init"),
      smsloginEn: cc11001100_hook("smsloginEn", "/passApi/js/smsloginEn_2db488f.js", "object-key-init"),
      smsloginEn_tangram: cc11001100_hook("smsloginEn_tangram", "/passApi/js/smsloginEn_tangram_4bf173f.js", "object-key-init"),
      loginWLtoPC: cc11001100_hook("loginWLtoPC", "/passApi/js/loginWLtoPC_8388e0d.js", "object-key-init"),
      accConnect: cc11001100_hook("accConnect", "/passApi/js/accConnect_d607141.js", "object-key-init"),
      accConnect_tangram: cc11001100_hook("accConnect_tangram", "/passApi/js/accConnect_tangram_9da5544.js", "object-key-init"),
      accRealName: cc11001100_hook("accRealName", "/passApi/js/accRealName_e95b1b0.js", "object-key-init"),
      accRealName_tangram: cc11001100_hook("accRealName_tangram", "/passApi/js/accRealName_tangram_2d75434.js", "object-key-init"),
      checkPhone: cc11001100_hook("checkPhone", "/passApi/js/checkPhone_9330abf.js", "object-key-init"),
      checkPhone_tangram: cc11001100_hook("checkPhone_tangram", "/passApi/js/checkPhone_tangram_be1fba6.js", "object-key-init"),
      checkIDcard: cc11001100_hook("checkIDcard", "/passApi/js/checkIDcard_d1acbfb.js", "object-key-init"),
      checkIDcard_tangram: cc11001100_hook("checkIDcard_tangram", "/passApi/js/checkIDcard_tangram_997b7e1.js", "object-key-init"),
      travelComplete: cc11001100_hook("travelComplete", "/passApi/js/travelComplete_7361a01.js", "object-key-init"),
      travelComplete_tangram: cc11001100_hook("travelComplete_tangram", "/passApi/js/travelComplete_tangram_9aee826.js", "object-key-init"),
      bindGuide: cc11001100_hook("bindGuide", "/passApi/js/bindGuide_e5717f2.js", "object-key-init"),
      bindGuide_tangram: cc11001100_hook("bindGuide_tangram", "/passApi/js/bindGuide_tangram_b41425f.js", "object-key-init"),
      accSetPwd: cc11001100_hook("accSetPwd", "/passApi/js/accSetPwd_aaa0b24.js", "object-key-init"),
      accSetPwd_tangram: cc11001100_hook("accSetPwd_tangram", "/passApi/js/accSetPwd_tangram_70f63f9.js", "object-key-init"),
      IDCertify: cc11001100_hook("IDCertify", "/passApi/js/IDCertify_baf7166.js", "object-key-init"),
      IDCertify_tangram: cc11001100_hook("IDCertify_tangram", "/passApi/js/IDCertify_tangram_7b0ebd8.js", "object-key-init"),
      secondCardList: cc11001100_hook("secondCardList", "/passApi/js/secondCardList_d71ccbf.js", "object-key-init"),
      secondCardList_tangram: cc11001100_hook("secondCardList_tangram", "/passApi/js/secondCardList_tangram_7349eec.js", "object-key-init"),
      secondCardVerify: cc11001100_hook("secondCardVerify", "/passApi/js/secondCardVerify_31f3827.js", "object-key-init"),
      secondCardVerify_tangram: cc11001100_hook("secondCardVerify_tangram", "/passApi/js/secondCardVerify_tangram_50dc619.js", "object-key-init"),
      IDCertifyQrcode: cc11001100_hook("IDCertifyQrcode", "/passApi/js/IDCertifyQrcode_3f88973.js", "object-key-init"),
      IDCertifyQrcode_tangram: cc11001100_hook("IDCertifyQrcode_tangram", "/passApi/js/IDCertifyQrcode_tangram_44dd4b0.js", "object-key-init"),
      loadingApi: cc11001100_hook("loadingApi", "/passApi/js/loadingApi_c732d61.js", "object-key-init"),
      loadingApi_tangram: cc11001100_hook("loadingApi_tangram", "/passApi/js/loadingApi_tangram_e9ba334.js", "object-key-init"),
      loginWap: cc11001100_hook("loginWap", "/passApi/js/loginWap_780e90f.js", "object-key-init"),
      reg: cc11001100_hook("reg", "/passApi/js/reg_ace4ddd.js", "object-key-init"),
      reg_tangram: cc11001100_hook("reg_tangram", "/passApi/js/reg_tangram_9e3c780.js", "object-key-init"),
      regPhone: cc11001100_hook("regPhone", "/passApi/js/regPhone_d4cfcbd.js", "object-key-init"),
      regPhone_tangram: cc11001100_hook("regPhone_tangram", "/passApi/js/regPhone_tangram_ac364a8.js", "object-key-init"),
      fillUserName: cc11001100_hook("fillUserName", "/passApi/js/fillUserName_31a2c98.js", "object-key-init"),
      fillUserName_tangram: cc11001100_hook("fillUserName_tangram", "/passApi/js/fillUserName_tangram_5dfe522.js", "object-key-init"),
      qrcode: cc11001100_hook("qrcode", "/passApi/js/qrcode_a405554.js", "object-key-init"),
      qrcode_tangram: cc11001100_hook("qrcode_tangram", "/passApi/js/qrcode_tangram_f0d728a.js", "object-key-init"),
      realUserTag: cc11001100_hook("realUserTag", "/passApi/js/realUserTag_93147e0.js", "object-key-init"),
      realUserTag_tangram: cc11001100_hook("realUserTag_tangram", "/passApi/js/realUserTag_tangram_734e16f.js", "object-key-init"),
      bind: cc11001100_hook("bind", "/passApi/js/bind_93acc0a.js", "object-key-init"),
      bind_tangram: cc11001100_hook("bind_tangram", "/passApi/js/bind_tangram_81ad1d1.js", "object-key-init"),
      multiBind: cc11001100_hook("multiBind", "/passApi/js/multiBind_1e48093.js", "object-key-init"),
      multiBind_tangram: cc11001100_hook("multiBind_tangram", "/passApi/js/multiBind_tangram_364735e.js", "object-key-init"),
      multiUnbind: cc11001100_hook("multiUnbind", "/passApi/js/multiUnbind_09d485f.js", "object-key-init"),
      multiUnbind_tangram: cc11001100_hook("multiUnbind_tangram", "/passApi/js/multiUnbind_tangram_87c2703.js", "object-key-init"),
      changeUser: cc11001100_hook("changeUser", "/passApi/js/changeUser_45a0363.js", "object-key-init"),
      changeUser_tangram: cc11001100_hook("changeUser_tangram", "/passApi/js/changeUser_tangram_54104a4.js", "object-key-init"),
      loginMultichoice: cc11001100_hook("loginMultichoice", "/passApi/js/loginMultichoice_c956081.js", "object-key-init"),
      loginMultichoice_tangram: cc11001100_hook("loginMultichoice_tangram", "/passApi/js/loginMultichoice_tangram_ae15455.js", "object-key-init"),
      confirmWidget: cc11001100_hook("confirmWidget", "/passApi/js/confirmWidget_ed02faa.js", "object-key-init"),
      confirmWidget_tangram: cc11001100_hook("confirmWidget_tangram", "/passApi/js/confirmWidget_tangram_38c5a43.js", "object-key-init"),
      uni_rebindGuide: cc11001100_hook("uni_rebindGuide", "/passApi/js/uni_rebindGuide_6f240a4.js", "object-key-init"),
      uni_rebindGuide_tangram: cc11001100_hook("uni_rebindGuide_tangram", "/passApi/js/uni_rebindGuide_tangram_741d333.js", "object-key-init")
    }, "var-init"),
    d = cc11001100_hook("d", {
      login: cc11001100_hook("login", p, "object-key-init")
    }, "var-init"),
    g = cc11001100_hook("g", s + t, "var-init");
  2 === arguments.length && (e = cc11001100_hook("e", a, "assign")), a && a.tangramInst && (passport.tangramInst = cc11001100_hook("passport.tangramInst", a.tangramInst, "assign")), a && a.defaultCss && d[s] ? passport.loadPass(d[s], function () {
    passport._use(g, c[g], e);
  }) : passport._use(g, c[g], e);
}, "assign");