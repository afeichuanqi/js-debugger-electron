function isSingleInstanceProd(s) {
  cc11001100_hook("s", s, "function-parameter");
  var i = cc11001100_hook("i", ["mn", "ma", "im_hi"], "var-init");
  return ("|" + i.join("|") + "|").indexOf("|" + s + "|") > -1;
}
function isLoginInstance(s) {
  cc11001100_hook("s", s, "function-parameter");
  return s = cc11001100_hook("s", s || "login", "assign"), s + "" == "login";
}
function saveInitInstance(s) {
  cc11001100_hook("s", s, "function-parameter");
  window._pass_popinit_instance = cc11001100_hook("window._pass_popinit_instance", s, "assign");
}
function getInitInstance() {
  return window._pass_popinit_instance;
}
var passport = cc11001100_hook("passport", passport || window.passport || {}, "var-init");
passport._modulePool = cc11001100_hook("passport._modulePool", passport._modulePool || {}, "assign"), passport._define = cc11001100_hook("passport._define", passport._define || function (s, i) {
  passport._modulePool[s] = cc11001100_hook("passport._modulePool[s]", i && i(), "assign");
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
passport.pop = cc11001100_hook("passport.pop", passport.pop || {}, "assign"), passport.pop.insertScript = cc11001100_hook("passport.pop.insertScript", passport.pop.insertScript || function (s, i) {
  var a = cc11001100_hook("a", document, "var-init"),
    n = cc11001100_hook("n", a.createElement("SCRIPT"), "var-init");
  n.type = cc11001100_hook("n.type", "text/javascript", "assign"), n.charset = cc11001100_hook("n.charset", "UTF-8", "assign"), n.readyState ? n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
    ("loaded" === n.readyState || "complete" === n.readyState) && (n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), i && i());
  }, "assign") : n.onload = cc11001100_hook("n.onload", function () {
    i && i();
  }, "assign"), n.src = cc11001100_hook("n.src", s, "assign"), a.getElementsByTagName("head")[0].appendChild(n);
}, "assign"), passport.ieVersion = cc11001100_hook("passport.ieVersion", function () {
  var s;
  try {
    var i = cc11001100_hook("i", navigator.userAgent.toLowerCase(), "var-init"),
      a = cc11001100_hook("a", i.indexOf("msie") > -1, "var-init");
    a && i.match(/msie ([\d.]+)/) && (s = cc11001100_hook("s", i.match(/msie ([\d.]+)/)[1], "assign"));
  } catch (n) {
    s = cc11001100_hook("s", 0, "assign");
  }
  return s;
}, "assign"), passport.pop.init = cc11001100_hook("passport.pop.init", passport.pop.init || function (s) {
  var i = cc11001100_hook("i", {
    "http:": cc11001100_hook("http:", "http://ppui-static-pc.cdn.bcebos.com", "object-key-init"),
    "https:": cc11001100_hook("https:", "https://ppui-static-pc.cdn.bcebos.com", "object-key-init")
  }, "var-init");
  if (passport.ieVersion() <= 8 && (i = cc11001100_hook("i", {
    "http:": cc11001100_hook("http:", "http://passport.baidu.com", "object-key-init"),
    "https:": cc11001100_hook("https:", "https://passport.baidu.com", "object-key-init")
  }, "assign")), isSingleInstanceProd(s.apiOpt.product) && isLoginInstance(s.type) && getInitInstance()) return getInitInstance();
  var a;
  a = cc11001100_hook("a", s && "https" === s.protocol ? "https:" : window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase(), "assign");
  var n,
    e,
    t,
    p = cc11001100_hook("p", ["pp", "mn", "wk", "cmovie", "translate", "baidugushitong", "ik", "exp", "waimai", "jn", "im", "do", "yuedu", "hao123", "tb", "netdisk", "developer", "newdev", "image_eco", "zbsc", "bpit_hcm", "defensor", "study", "bizcrm", "sjhlexus_all", "zhengxin"], "var-init"),
    c = cc11001100_hook("c", s && s.apiOpt && s.apiOpt.product || "", "var-init"),
    o = cc11001100_hook("o", ("|" + p.join("|") + "|").indexOf("|" + c + "|") > -1 || "v4" === (s && s.loginVersion), "var-init"),
    _ = cc11001100_hook("_", "v5" === (s && s.loginVersion), "var-init");
  _ ? (n = cc11001100_hook("n", "/passApi/js/uni_loginv4_eb7ac36.js", "assign"), e = cc11001100_hook("e", "/passApi/js/uni_loginv4_tangram_a8d1a47.js", "assign"), t = cc11001100_hook("t", "/passApi/css/uni_loginv5_b009ba4.css", "assign")) : o ? (n = cc11001100_hook("n", "/passApi/js/uni_loginv4_eb7ac36.js", "assign"), e = cc11001100_hook("e", "/passApi/js/uni_loginv4_tangram_a8d1a47.js", "assign"), t = cc11001100_hook("t", "/passApi/css/uni_loginv4_78bd2b1.css", "assign")) : (n = cc11001100_hook("n", "/passApi/js/uni_login_da05cef.js", "assign"), e = cc11001100_hook("e", "/passApi/js/uni_login_tangram_ca71b20.js", "assign"), t = cc11001100_hook("t", "/passApi/css/uni_login_new_0eed974.css", "assign"));
  var r = cc11001100_hook("r", {
      uni_login: cc11001100_hook("uni_login", n, "object-key-init"),
      uni_login_tangram: cc11001100_hook("uni_login_tangram", e, "object-key-init"),
      uni_loginPad: cc11001100_hook("uni_loginPad", "/passApi/js/uni_loginPad_ea0dd5c.js", "object-key-init"),
      uni_loginPad_tangram: cc11001100_hook("uni_loginPad_tangram", "/passApi/js/uni_loginPad_tangram_0c75094.js", "object-key-init"),
      uni_smsloginEn: cc11001100_hook("uni_smsloginEn", "/passApi/js/uni_smsloginEn_60c5834.js", "object-key-init"),
      uni_smsloginEn_tangram: cc11001100_hook("uni_smsloginEn_tangram", "/passApi/js/uni_smsloginEn_tangram_97bc547.js", "object-key-init"),
      uni_loginWap: cc11001100_hook("uni_loginWap", "/passApi/js/uni_loginWap_ba60ba0.js", "object-key-init"),
      uni_loginWap_tangram: cc11001100_hook("uni_loginWap_tangram", "/passApi/js/uni_loginWap_ba60ba0.js", "object-key-init"),
      uni_accConnect: cc11001100_hook("uni_accConnect", "/passApi/js/uni_accConnect_f89925f.js", "object-key-init"),
      uni_accConnect_tangram: cc11001100_hook("uni_accConnect_tangram", "/passApi/js/uni_accConnect_tangram_3132f15.js", "object-key-init"),
      uni_accRealName: cc11001100_hook("uni_accRealName", "/passApi/js/uni_accRealName_3ee1e6b.js", "object-key-init"),
      uni_accRealName_tangram: cc11001100_hook("uni_accRealName_tangram", "/passApi/js/uni_accRealName_tangram_ec7ea1e.js", "object-key-init"),
      uni_checkPhone: cc11001100_hook("uni_checkPhone", "/passApi/js/uni_checkPhone_aad3b33.js", "object-key-init"),
      uni_checkPhone_tangram: cc11001100_hook("uni_checkPhone_tangram", "/passApi/js/uni_checkPhone_tangram_da564e4.js", "object-key-init"),
      uni_checkIDcard: cc11001100_hook("uni_checkIDcard", "/passApi/js/uni_checkIDcard_7942dbc.js", "object-key-init"),
      uni_checkIDcard_tangram: cc11001100_hook("uni_checkIDcard_tangram", "/passApi/js/uni_checkIDcard_tangram_68200c6.js", "object-key-init"),
      uni_accSetPwd: cc11001100_hook("uni_accSetPwd", "/passApi/js/uni_accSetPwd_f4e8cab.js", "object-key-init"),
      uni_accSetPwd_tangram: cc11001100_hook("uni_accSetPwd_tangram", "/passApi/js/uni_accSetPwd_tangram_ec83098.js", "object-key-init"),
      uni_IDCertify: cc11001100_hook("uni_IDCertify", "/passApi/js/uni_IDCertify_22cd3e3.js", "object-key-init"),
      uni_IDCertify_tangram: cc11001100_hook("uni_IDCertify_tangram", "/passApi/js/uni_IDCertify_tangram_0c13317.js", "object-key-init"),
      uni_travelComplete: cc11001100_hook("uni_travelComplete", "/passApi/js/uni_travelComplete_a08cd7a.js", "object-key-init"),
      uni_travelComplete_tangram: cc11001100_hook("uni_travelComplete_tangram", "/passApi/js/uni_travelComplete_tangram_96cd16d.js", "object-key-init"),
      uni_bindGuide: cc11001100_hook("uni_bindGuide", "/passApi/js/uni_bindGuide_916a22a.js", "object-key-init"),
      uni_bindGuide_tangram: cc11001100_hook("uni_bindGuide_tangram", "/passApi/js/uni_bindGuide_tangram_5db1396.js", "object-key-init"),
      uni_fillUserName: cc11001100_hook("uni_fillUserName", "/passApi/js/uni_fillUserName_a5fc2cb.js", "object-key-init"),
      uni_fillUserName_tangram: cc11001100_hook("uni_fillUserName_tangram", "/passApi/js/uni_fillUserName_tangram_17439ab.js", "object-key-init"),
      uni_IDCertifyQrcode: cc11001100_hook("uni_IDCertifyQrcode", "/passApi/js/uni_IDCertifyQrcode_6318e48.js", "object-key-init"),
      uni_IDCertifyQrcode_tangram: cc11001100_hook("uni_IDCertifyQrcode_tangram", "/passApi/js/uni_IDCertifyQrcode_tangram_6ba54d6.js", "object-key-init"),
      uni_loadingApi: cc11001100_hook("uni_loadingApi", "/passApi/js/uni_loadingApi_16b4e3e.js", "object-key-init"),
      uni_loadingApi_tangram: cc11001100_hook("uni_loadingApi_tangram", "/passApi/js/uni_loadingApi_tangram_28a1b1d.js", "object-key-init"),
      uni_secondCardList: cc11001100_hook("uni_secondCardList", "/passApi/js/uni_secondCardList_5ed1887.js", "object-key-init"),
      uni_secondCardList_tangram: cc11001100_hook("uni_secondCardList_tangram", "/passApi/js/uni_secondCardList_tangram_6cc8660.js", "object-key-init"),
      uni_secondCardVerify: cc11001100_hook("uni_secondCardVerify", "/passApi/js/uni_secondCardVerify_9268913.js", "object-key-init"),
      uni_secondCardVerify_tangram: cc11001100_hook("uni_secondCardVerify_tangram", "/passApi/js/uni_secondCardVerify_tangram_17bca8b.js", "object-key-init"),
      uni_multiBind: cc11001100_hook("uni_multiBind", "/passApi/js/uni_multiBind_71b0466.js", "object-key-init"),
      uni_multiBind_tangram: cc11001100_hook("uni_multiBind_tangram", "/passApi/js/uni_multiBind_tangram_fc9fb57.js", "object-key-init"),
      uni_multiUnbind: cc11001100_hook("uni_multiUnbind", "/passApi/js/uni_multiUnbind_2d48aff.js", "object-key-init"),
      uni_multiUnbind_tangram: cc11001100_hook("uni_multiUnbind_tangram", "/passApi/js/uni_multiUnbind_tangram_810ea91.js", "object-key-init"),
      uni_changeUser: cc11001100_hook("uni_changeUser", "/passApi/js/uni_changeUser_fcac6b1.js", "object-key-init"),
      uni_changeUser_tangram: cc11001100_hook("uni_changeUser_tangram", "/passApi/js/uni_changeUser_tangram_08a641e.js", "object-key-init"),
      uni_loginMultichoice: cc11001100_hook("uni_loginMultichoice", "/passApi/js/uni_loginMultichoice_7dc166f.js", "object-key-init"),
      uni_loginMultichoice_tangram: cc11001100_hook("uni_loginMultichoice_tangram", "/passApi/js/uni_loginMultichoice_tangram_a18f6a7.js", "object-key-init"),
      uni_confirmWidget: cc11001100_hook("uni_confirmWidget", "/passApi/js/uni_confirmWidget_2c9aaa5.js", "object-key-init"),
      uni_confirmWidget_tangram: cc11001100_hook("uni_confirmWidget_tangram", "/passApi/js/uni_confirmWidget_tangram_639b0e4.js", "object-key-init")
    }, "var-init"),
    u = cc11001100_hook("u", {
      login: cc11001100_hook("login", t, "object-key-init"),
      loginWap: cc11001100_hook("loginWap", "/passApi/css/uni_loginWap_f57424a.css", "object-key-init"),
      smsloginEn: cc11001100_hook("smsloginEn", "/passApi/css/uni_smsloginEn_eef0a6a.css", "object-key-init"),
      accConnect: cc11001100_hook("accConnect", "/passApi/css/uni_accConnect_ab6dda9.css", "object-key-init"),
      accRealName: cc11001100_hook("accRealName", "/passApi/css/uni_accRealName_a224a37.css", "object-key-init"),
      secondCardVerify: cc11001100_hook("secondCardVerify", "/passApi/css/uni_secondCardVerify_1a69328.css", "object-key-init"),
      secondCardList: cc11001100_hook("secondCardList", "/passApi/css/uni_secondCardList_94f229c.css", "object-key-init"),
      checkPhone: cc11001100_hook("checkPhone", "/passApi/css/uni_checkPhone_cd7c7a0.css", "object-key-init"),
      checkIDcard: cc11001100_hook("checkIDcard", "/passApi/css/uni_checkIDcard_be79680.css", "object-key-init"),
      accSetPwd: cc11001100_hook("accSetPwd", "/passApi/css/uni_accSetPwd_66adc9b.css", "object-key-init"),
      IDCertify: cc11001100_hook("IDCertify", "/passApi/css/uni_IDCertify_36e091b.css", "object-key-init"),
      IDCertifyQrcode: cc11001100_hook("IDCertifyQrcode", "/passApi/css/uni_IDCertifyQrcode_1e8827b.css", "object-key-init"),
      loadingApi: cc11001100_hook("loadingApi", "/passApi/css/uni_loadingApi_f8732c0.css", "object-key-init"),
      loginPad: cc11001100_hook("loginPad", "/passApi/css/uni_loginPad_5dc290e.css", "object-key-init"),
      multiBind: cc11001100_hook("multiBind", "/passApi/css/uni_multiBind_e8d24e4.css", "object-key-init"),
      multiUnbind: cc11001100_hook("multiUnbind", "/passApi/css/uni_multiUnbind_21428a6.css", "object-key-init"),
      changeUser: cc11001100_hook("changeUser", "/passApi/css/uni_changeUser_c7ae7b4.css", "object-key-init"),
      loginMultichoice: cc11001100_hook("loginMultichoice", "/passApi/css/uni_loginMultichoice_289d3a0.css", "object-key-init"),
      confirmWidget: cc11001100_hook("confirmWidget", "/passApi/css/uni_confirmWidget_035fb81.css", "object-key-init"),
      uni_rebindGuide: cc11001100_hook("uni_rebindGuide", "/passApi/css/uni_rebindGuide_347ecf2.css", "object-key-init"),
      travelComplete: cc11001100_hook("travelComplete", "/passApi/css/uni_travelComplete_b06b013.css", "object-key-init"),
      bindGuide: cc11001100_hook("bindGuide", "/passApi/css/uni_bindGuide_35d4a06.css", "object-key-init"),
      fillUserName: cc11001100_hook("fillUserName", "/passApi/css/uni_fillUserName_931cb17.css", "object-key-init")
    }, "var-init"),
    d = cc11001100_hook("d", i[a] || i["https:"], "var-init");
  s = cc11001100_hook("s", s || {}, "assign"), s.type = cc11001100_hook("s.type", s.type || "login", "assign");
  var l,
    m = cc11001100_hook("m", document, "var-init"),
    g = cc11001100_hook("g", ("_PassUni" + new Date().getTime(), d + u[s.type]), "var-init");
  s.cssUrlWrapper && (g = cc11001100_hook("g", cssUrlWrapper.join(o ? "uni_loginv4.css" : _ ? "uni_loginv5.css" : "uni_login.css"), "assign")), l = cc11001100_hook("l", {
    show: function () {
      return l.loadPass(s.apiOpt), l.willShow = cc11001100_hook("l.willShow", !0, "assign"), l;
    },
    setSubpro: function (i) {
      return s.apiOpt && (s.apiOpt.subpro = cc11001100_hook("s.apiOpt.subpro", i, "assign")), l;
    },
    setMakeText: function (i) {
      return s.apiOpt && (s.apiOpt.makeText = cc11001100_hook("s.apiOpt.makeText", i, "assign")), l;
    },
    loadPass: function () {
      var i = cc11001100_hook("i", m.createElement("link"), "var-init");
      i.rel = cc11001100_hook("i.rel", "stylesheet", "assign"), i.type = cc11001100_hook("i.type", "text/css", "assign"), i.href = cc11001100_hook("i.href", g, "assign"), i.disabled = cc11001100_hook("i.disabled", !1, "assign"), i.setAttribute("data-for", "result"), m.getElementsByTagName("head")[0].appendChild(i), l.show = cc11001100_hook("l.show", function () {
        return l.willShow = cc11001100_hook("l.willShow", !0, "assign"), l;
      }, "assign"), s.plugCss && (i = cc11001100_hook("i", m.createElement("link"), "assign"), i.rel = cc11001100_hook("i.rel", "stylesheet", "assign"), i.type = cc11001100_hook("i.type", "text/css", "assign"), i.href = cc11001100_hook("i.href", s.plugCss, "assign"), i.disabled = cc11001100_hook("i.disabled", !1, "assign"), i.setAttribute("data-for", "result"), m.getElementsByTagName("head")[0].appendChild(i)), l.passCallback(), delete l.loadPass;
    },
    passCallback: function () {
      passport.pop.insertScript("https://wappass.baidu.com/static/waplib/moonshad.js?tt=" + new Date().getTime(), function () {
        l.components.length > 0 ? passport.pop.insertScript(l.components.shift(), l.passCallback) : (passport.pop[s.type](s, l, function () {
          l.willShow && l.show(), s && s.onRender && s.onRender();
        }), delete l.passCallback, delete l.components);
      });
    },
    components: cc11001100_hook("components", [], "object-key-init")
  }, "assign");
  var j = cc11001100_hook("j", "uni_" + s.type, "var-init");
  return s.tangram && (j += cc11001100_hook("j", "_tangram", "assign")), s.apiOpt && s.apiOpt.product + "" == "ik" && Math.random() < .3 && (l.components.push(d + "/passApi/js/uni/passhunt.js"), s.hunter = cc11001100_hook("s.hunter", !0, "assign")), l.components.push(d + r[j]), s.cache && l.loadPass(s.apiOpt), s.id && m.getElementById(s.id) && (m.getElementById(s.id).onclick = cc11001100_hook("m.getElementById(s.id).onclick", function () {
    l.show();
  }, "assign")), isSingleInstanceProd(s.apiOpt.product) && isLoginInstance(s.type) && saveInitInstance(l), l;
}, "assign");