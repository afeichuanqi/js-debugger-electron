"use strict";

function _toConsumableArray(t) {
  cc11001100_hook("t", t, "function-parameter");
  if (Array.isArray(t)) {
    for (var e = cc11001100_hook("e", 0, "var-init"), n = cc11001100_hook("n", Array(t.length), "var-init"); e < t.length; e++) n[e] = cc11001100_hook("n[e]", t[e], "assign");
    return n;
  }
  return Array.from(t);
}
function _classCallCheck(t, e) {
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("e", e, "function-parameter");
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
var _createClass = cc11001100_hook("_createClass", function () {
    function t(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      for (var n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
        var o = cc11001100_hook("o", e[n], "var-init");
        o.enumerable = cc11001100_hook("o.enumerable", o.enumerable || !1, "assign"), o.configurable = cc11001100_hook("o.configurable", !0, "assign"), "value" in o && (o.writable = cc11001100_hook("o.writable", !0, "assign")), Object.defineProperty(t, o.key, o);
      }
    }
    return function (e, n, o) {
      return n && t(e.prototype, n), o && t(e, o), e;
    };
  }(), "var-init"),
  _typeof = cc11001100_hook("_typeof", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, "var-init");
"function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
  value: function (t, e) {
    if (null === t || void 0 === t) throw new TypeError("Cannot convert undefined or null to object");
    for (var n = cc11001100_hook("n", Object(t), "var-init"), o = cc11001100_hook("o", 1, "var-init"); o < arguments.length; o++) {
      var a = cc11001100_hook("a", arguments[o], "var-init");
      if (null !== a && void 0 !== a) for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = cc11001100_hook("n[i]", a[i], "assign"));
    }
    return n;
  },
  writable: cc11001100_hook("writable", !0, "object-key-init"),
  configurable: cc11001100_hook("configurable", !0, "object-key-init"),
  enumerable: cc11001100_hook("enumerable", !1, "object-key-init")
}), window._hmt = cc11001100_hook("window._hmt", window._hmt || [], "assign"), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t && "UD" == t) return decodeURIComponent(o[1]);
      if (o[0] == t) return decodeURI(o[1]);
    }
  }
  function e() {
    var t = cc11001100_hook("t", window.location.host, "var-init");
    return 0 === t.indexOf("blog") ? "UA-127895514-2" : 0 === t.indexOf("download") ? "UA-127895514-8" : 0 === t.indexOf("edu") ? "UA-127895514-9" : 0 === t.indexOf("bbs") ? "UA-127895514-4" : 0 === t.indexOf("ask") ? "UA-127895514-5" : 0 === t.indexOf("gitbook") ? "UA-127895514-10" : 0 === t.indexOf("iteye") ? "UA-127895514-6" : 0 === t.indexOf("passport") ? "UA-127895514-7" : 0 === t.indexOf("so") ? "UA-127895514-3" : 0 === t.indexOf("www") ? t.indexOf("iteye") > 0 ? "UA-127895514-6" : "UA-127895514-1" : "";
  }
  var n = cc11001100_hook("n", "6bcd52f51e9b3dce32bec4a3997715ac", "var-init"),
    o = cc11001100_hook("o", function () {
      var t = cc11001100_hook("t", "6bcd52f51e9b3dce32bec4a3997715ac", "var-init"),
        e = cc11001100_hook("e", $('meta[name="toolbar"]'), "var-init");
      if (e.length) {
        var n = cc11001100_hook("n", e.attr("content") || {}, "var-init");
        n = cc11001100_hook("n", JSON.parse(n), "assign"), t = cc11001100_hook("t", n.hmId || t, "assign");
      }
      return t;
    }(), "var-init");
  if (function (t) {
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e.length; o++) {
      var a = cc11001100_hook("a", e[o].split("="), "var-init");
      /^Hm\_.+\_.+$/.test(a[0]) && -1 === a[0].indexOf(t) && -1 === a[0].indexOf(n) && (document.cookie = cc11001100_hook("document.cookie", a[0] + "=" + escape("") + ";max-age=0;domain=.csdn.net;path=/", "assign"));
    }
  }(o), function (t) {
    _hmt.push(["_setAccount", t]);
  }(o), function () {
    try {
      var e = cc11001100_hook("e", !!t("UN"), "var-init"),
        n = cc11001100_hook("n", !!t("UserName"), "var-init"),
        o = cc11001100_hook("o", t("p_uid"), "var-init");
      o = cc11001100_hook("o", o ? o.substr(1, 1) : 0, "assign"), _hmt.push(["_setUserProperty", {
        islogin: cc11001100_hook("islogin", +e, "object-key-init"),
        isonline: cc11001100_hook("isonline", +n, "object-key-init"),
        isvip: cc11001100_hook("isvip", +(1 == o), "object-key-init")
      }]), n && _hmt.push(["_setUserId", t("UserName")]), _hmt.push(["_setUserTag", "6525", t("uuid_tt_dd")]);
    } catch (t) {
      void 0;
    }
  }(), window.self == window.top || function () {
    var t = cc11001100_hook("t", null, "var-init");
    if (parent !== window) try {
      t = cc11001100_hook("t", parent.location.href, "assign");
    } catch (e) {
      t = cc11001100_hook("t", document.referrer, "assign");
    }
    return void 0, t;
  }().indexOf("csdn.net") < 0) {
    void 0;
    var a = cc11001100_hook("a", document.createElement("script"), "var-init");
    a.src = cc11001100_hook("a.src", "https://hm.baidu.com/hm.js?" + o, "assign");
    var i = cc11001100_hook("i", document.getElementsByTagName("script")[0], "var-init");
    i.parentNode.insertBefore(a, i);
  } else void 0;
  if (document.referrer.indexOf("google.com") > -1) {
    var r = function () {
        dataLayer.push(arguments);
      },
      s = cc11001100_hook("s", document.createElement("script"), "var-init");
    s.src = cc11001100_hook("s.src", "https://www.googletagmanager.com/gtag/js?id=" + e(), "assign"), i.parentNode.insertBefore(s, i), window.dataLayer = cc11001100_hook("window.dataLayer", window.dataLayer || [], "assign");
    var c = cc11001100_hook("c", t("UserName") || "", "var-init");
    r("js", new Date()), r("config", e()), c && r("set", {
      user_id: cc11001100_hook("user_id", c, "object-key-init")
    });
  }
}(), function () {
  var t = cc11001100_hook("t", document.createElement("script"), "var-init");
  t.type = cc11001100_hook("t.type", "text/javascript", "assign"), t.async = cc11001100_hook("t.async", !0, "assign"), t.src = cc11001100_hook("t.src", "https://g.csdnimg.cn/??asdf/1.1.3/trackad.js,iconfont/nav/iconfont-1.0.1.js,notification/1.3.8/notify.js,notification/1.3.8/main.js", "assign");
  var e = cc11001100_hook("e", document.getElementsByTagName("script")[0], "var-init");
  e.parentNode.insertBefore(t, e);
}(), window._hmt = cc11001100_hook("window._hmt", window._hmt || [], "assign"), function (t, e) {
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", document.createElement("link"), "var-init");
    e.rel = cc11001100_hook("e.rel", "stylesheet", "assign"), e.type = cc11001100_hook("e.type", "text/css", "assign"), e.href = cc11001100_hook("e.href", t, "assign"), document.getElementsByTagName("head")[0].appendChild(e);
  }
  function o(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t) return decodeURIComponent(o[1]);
    }
  }
  function a(t, e, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var o = cc11001100_hook("o", new Date(), "var-init");
    if (n) o.setTime(o.getTime() + n);else {
      o.setTime(o.getTime() + 2592e6);
    }
    document.cookie = cc11001100_hook("document.cookie", t + "=" + encodeURIComponent(e) + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/", "assign");
  }
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", new Date(), "var-init");
    document.cookie = cc11001100_hook("document.cookie", t + "=" + escape("1") + ";max-age=0;expires=" + e.toGMTString() + ";domain=.csdn.net;path=/", "assign");
  }
  function r(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var n,
      o = cc11001100_hook("o", null, "var-init");
    return function () {
      var a = cc11001100_hook("a", this, "var-init"),
        i = cc11001100_hook("i", new Date(), "var-init");
      i - o - e > 0 ? (n && (clearTimeout(n), n = cc11001100_hook("n", null, "assign")), t.apply(a, arguments), o = cc11001100_hook("o", i, "assign")) : n || (n = cc11001100_hook("n", setTimeout(function () {
        t.apply(a, arguments);
      }, e), "assign"));
    };
  }
  function s(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var n;
    return function () {
      var o = cc11001100_hook("o", this, "var-init"),
        a = cc11001100_hook("a", arguments, "var-init");
      n && clearTimeout(n), n = cc11001100_hook("n", setTimeout(function () {
        t.apply(o, a);
      }, e), "assign");
    };
  }
  function c(e) {
    cc11001100_hook("e", e, "function-parameter");
    t.csdn && t.csdn.loginBox && t.csdn.loginBox.show ? t.csdn.loginBox.show(e) : t.location.href = cc11001100_hook("t.location.href", "https://passport.csdn.net/account/login" + (e ? "?spm=" + e.spm : ""), "assign");
  }
  function l(t) {
    cc11001100_hook("t", t, "function-parameter");
    t = cc11001100_hook("t", t.replace("https://", ""), "assign");
    var e = cc11001100_hook("e", t.split("/")[0], "var-init");
    return ~location.host.indexOf(e);
  }
  function d() {
    return location.origin + location.pathname === "https://www.csdn.net/c/";
  }
  function p() {
    return location.origin + location.pathname === "https://www.csdn.net/vip";
  }
  function u(t) {
    cc11001100_hook("t", t, "function-parameter");
    return 0 == t.length ? "" : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;");
  }
  function h(n) {
    cc11001100_hook("n", n, "function-parameter");
    if ("[object Object]" == Object.prototype.toString.call(n)) {
      var o = cc11001100_hook("o", e("#csdn-toolbar"), "var-init"),
        a = cc11001100_hook("a", n.need_first_suspend || !1, "var-init"),
        i = cc11001100_hook("i", n.need_little_suspend || !1, "var-init"),
        s = cc11001100_hook("s", n.little_tool_id || "", "var-init"),
        c = cc11001100_hook("c", n.little_need_insert_type || "", "var-init"),
        l = cc11001100_hook("l", n.need_change_function || "", "var-init"),
        d = cc11001100_hook("d", "", "var-init"),
        p = cc11001100_hook("p", "", "var-init");
      if (1 != a || 1 != i) {
        if (i && "" != s && (o = cc11001100_hook("o", e(s), "assign")), i && s && "" != c && (d = cc11001100_hook("d", "." + c, "assign"), p = cc11001100_hook("p", e(d), "assign")), 0 === o.length) return void k.push(h.bind(this, n));
        var u = cc11001100_hook("u", r(function () {
          if ((document.documentElement.scrollTop || document.body.scrollTop) >= 50) o.css({
            position: cc11001100_hook("position", "fixed", "object-key-init"),
            top: cc11001100_hook("top", "0", "object-key-init"),
            left: cc11001100_hook("left", "0", "object-key-init"),
            "z-index": cc11001100_hook("z-index", "1993", "object-key-init"),
            "min-width": cc11001100_hook("min-width", "100%", "object-key-init"),
            width: cc11001100_hook("width", "max-content", "object-key-init")
          }), i && e(".secodn_level_csdn_logo").length && e(".secodn_level_csdn_logo").css({
            display: cc11001100_hook("display", "block", "object-key-init")
          }), i && "" != c && (e("body").addClass("toolbar-second-drop"), "onlySearch" == c ? e("#csdn_tool_otherPlace").append(p) : "onlyUser" == c ? e("#csdn_tool_otherPlace").append(p) : "searchUser" == c && (e("#csdn_tool_otherPlace").append(e(".onlySearch")), e("#csdn_tool_otherPlace").append(e(".onlyUser")))), "function" == typeof l && l("fixed");else {
            if (o.css({
              position: cc11001100_hook("position", "relative", "object-key-init"),
              "z-index": cc11001100_hook("z-index", "", "object-key-init"),
              "min-width": cc11001100_hook("min-width", "100%", "object-key-init"),
              width: cc11001100_hook("width", "max-content", "object-key-init")
            }), i && e(".secodn_level_csdn_logo").length && e(".secodn_level_csdn_logo").css({
              display: cc11001100_hook("display", "none", "object-key-init")
            }), i && "" != c) {
              e("body").removeClass("toolbar-second-drop");
              var t = cc11001100_hook("t", e("#csdn-toolbar .toolbar-container"), "var-init");
              "onlySearch" == c ? t.find(".toolbar-menus").after(p) : "onlyUser" == c ? t.find(".toolbar-container-right").append(p) : "searchUser" == c && (t.find(".toolbar-container-middle").append(e(".onlySearch")), t.find(".toolbar-container-right").append(e(".onlyUser")));
            }
            "function" == typeof l && l("noFixed");
          }
        }, 80), "var-init");
        (document.documentElement.scrollTop || document.body.scrollTop) > 50 && u(), e(t).on("scroll", u);
      }
    }
  }
  function g() {
    var e = cc11001100_hook("e", t.location.host, "var-init"),
      n = cc11001100_hook("n", e.split(".")[0], "var-init"),
      o = cc11001100_hook("o", "", "var-init");
    switch (n) {
      case "www":
      case "blog":
      case "bbs":
        o = cc11001100_hook("o", "", "assign");
        break;
      case "download":
        o = cc11001100_hook("o", "doc", "assign");
        break;
      case "ask":
        o = cc11001100_hook("o", "ask", "assign");
        break;
      case "gitchat":
      case "geek":
        o = cc11001100_hook("o", "", "assign");
        break;
      case "edu":
        o = cc11001100_hook("o", "course", "assign");
        break;
      default:
        o = cc11001100_hook("o", "", "assign");
    }
    return e.indexOf(".blog.csdn.net") > -1 && (o = cc11001100_hook("o", "blog", "assign")), o;
  }
  function m(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", {}, "var-init");
    return location.href.replace(/([^*#&=?]+)=([^*#&=?]+)/g, function () {
      for (var t = cc11001100_hook("t", arguments.length, "var-init"), n = cc11001100_hook("n", Array(t), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < t; o++) n[o] = cc11001100_hook("n[o]", arguments[o], "assign");
      var a = cc11001100_hook("a", n[1], "var-init"),
        i = cc11001100_hook("i", n[2], "var-init");
      e[a] = cc11001100_hook("e[a]", i, "assign");
    }), t ? e[t] : e;
  }
  function f(t) {
    cc11001100_hook("t", t, "function-parameter");
    void 0;
    try {
      t && e(document).trigger(t);
    } catch (t) {
      void 0;
    }
  }
  function b() {
    return !!+(o("p_uid") || "").substr(1, 1);
  }
  function v(t) {
    cc11001100_hook("t", t, "function-parameter");
    try {
      t > 1e4 && (t = cc11001100_hook("t", parseFloat((t / 1e4).toFixed(1)) + "w", "assign"));
    } catch (t) {}
    return t;
  }
  function y(e) {
    cc11001100_hook("e", e, "function-parameter");
    try {
      return t.csdn.report.getFullSpm(e);
    } catch (t) {
      return e;
    }
  }
  function w() {
    this.currentUser = cc11001100_hook("this.currentUser", {
      userName: cc11001100_hook("userName", "", "object-key-init"),
      userNick: cc11001100_hook("userNick", '<a class="set-nick" href="https://passport.csdn.net/account/profile">设置昵称<span class="write-icon"></span></a>', "object-key-init"),
      desc: cc11001100_hook("desc", '<a class="fill-dec" href="//my.csdn.net" target="_blank">编辑自我介绍，让更多人了解你<span class="write-icon"></span></a>', "object-key-init"),
      avatar: cc11001100_hook("avatar", "", "object-key-init")
    }, "assign"), this.hasLogin = cc11001100_hook("this.hasLogin", !1, "assign"), this.$container = cc11001100_hook("this.$container", "", "assign"), this.announcement = cc11001100_hook("this.announcement", 0, "assign"), this.logoData = cc11001100_hook("this.logoData", {
      title: cc11001100_hook("title", "CSDN首页", "object-key-init"),
      url: {
        default: cc11001100_hook("default", "https://csdnimg.cn/cdn/content-toolbar/csdn-logo.png?v=20200416.1", "object-key-init"),
        dark: cc11001100_hook("dark", "https://g.csdnimg.cn/common/csdn-toolbar/images/csdn-logo.png", "object-key-init"),
        home: cc11001100_hook("home", "https://g.csdnimg.cn/common/csdn-toolbar/images/csdn-logo.png", "object-key-init")
      }
    }, "assign"), this.navData = cc11001100_hook("this.navData", [], "assign"), this.personMenuData = cc11001100_hook("this.personMenuData", [], "assign"), this.advertData = cc11001100_hook("this.advertData", {
      date: {
        start: cc11001100_hook("start", "2022/07/03 08:50:00", "object-key-init"),
        end: cc11001100_hook("end", "2022/07/04 17:30:00", "object-key-init")
      },
      background: {
        large: cc11001100_hook("large", "https://csdnimg.cn/public/publick_img/ad_20200703_toolbar325.jpg", "object-key-init"),
        default: cc11001100_hook("default", "https://csdnimg.cn/public/publick_img/ad_20200703_toolbar80_2.jpg", "object-key-init")
      },
      color: cc11001100_hook("color", "#027ef2", "object-key-init"),
      url: cc11001100_hook("url", "https://aiprocon.csdn.net/p/live?utm_source=live_703", "object-key-init")
    }, "assign"), this.mpMenuData = cc11001100_hook("this.mpMenuData", {
      isShow: cc11001100_hook("isShow", !1, "object-key-init")
    }, "assign"), this.renderBtnData = cc11001100_hook("this.renderBtnData", {}, "assign"), this.init();
  }
  t.csdn = cc11001100_hook("t.csdn", t.csdn || {}, "assign"), t.csdn.configuration_tool_parameterv = cc11001100_hook("t.csdn.configuration_tool_parameterv", h, "assign");
  var x = cc11001100_hook("x", ["csdn-toolbar-default", "csdn-toolbar-dark", "csdn-toolbar-home"], "var-init"),
    k = cc11001100_hook("k", [], "var-init"),
    _ = cc11001100_hook("_", 0, "var-init"),
    D = cc11001100_hook("D", "normal", "var-init"),
    S = cc11001100_hook("S", 0, "var-init"),
    C = cc11001100_hook("C", "https://so.csdn.net/so/search", "var-init");
  w.prototype = cc11001100_hook("w.prototype", {
    constructor: cc11001100_hook("constructor", w, "object-key-init"),
    init: function () {
      var t = cc11001100_hook("t", this, "var-init");
      t.checkLogin(function (e) {
        e.userName && (t.hasLogin = cc11001100_hook("t.hasLogin", !0, "assign"), _hmt.push(["_setUserTag", "5744", e.userName])), t.setPersonMenuData();
      }), t.getToolbarData(t.render);
    },
    render: function (e) {
      var n = cc11001100_hook("n", this, "var-init");
      n.isMiniRenderSearch = cc11001100_hook("n.isMiniRenderSearch", !1, "assign"), "mini" === D ? (n.renderMiniToolbar(), n.renderLogo(), n.renderMiniMenu(), n.renderBtnsJudgement(), n.chain(), t.csdn && t.csdn.toolbarFinishCallback && t.csdn.toolbarFinishCallback()) : (n.renderToolbar(), n.renderLogo(), n.renderNav(), n.renderSearch(), n.renderBtnsJudgement(), n.getHotSearchWordData(), n.chain());
    },
    setPersonMenuData: function () {
      this.personMenuData = cc11001100_hook("this.personMenuData", [{
        name: cc11001100_hook("name", "我的关注", "object-key-init"),
        url: cc11001100_hook("url", "https://i.csdn.net/#/uc/follow-list", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://i.csdn.net/#/uc/follow-list", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5109", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-follow", "object-key-init"),
        class: cc11001100_hook("class", "", "object-key-init")
      }, {
        name: cc11001100_hook("name", "我的收藏", "object-key-init"),
        url: cc11001100_hook("url", "https://i.csdn.net/#/uc/collection-list?type=1", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://i.csdn.net/#/uc/collection-list?type=1", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5110", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-collect", "object-key-init"),
        class: cc11001100_hook("class", "", "object-key-init")
      }, {
        name: cc11001100_hook("name", "个人中心", "object-key-init"),
        url: cc11001100_hook("url", "https://i.csdn.net/#/uc/profile", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://i.csdn.net/#/uc/profile", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5111", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-profile", "object-key-init"),
        class: cc11001100_hook("class", "", "object-key-init")
      }, {
        name: cc11001100_hook("name", "帐号设置", "object-key-init"),
        url: cc11001100_hook("url", "https://i.csdn.net/#/account/index", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://i.csdn.net/#/account/index", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5112", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-account", "object-key-init"),
        class: cc11001100_hook("class", "toolbar-subMenu-border", "object-key-init")
      }, {
        name: cc11001100_hook("name", "我的博客", "object-key-init"),
        url: cc11001100_hook("url", "https://blog.csdn.net/" + this.currentUser.userName, "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://blog.csdn.net/", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5113", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-blog", "object-key-init"),
        class: cc11001100_hook("class", "", "object-key-init")
      }, {
        name: cc11001100_hook("name", "管理博客", "object-key-init"),
        url: cc11001100_hook("url", "https://mp.csdn.net/console/article", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://mp.csdn.net/console/article", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5114", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-mp", "object-key-init"),
        class: cc11001100_hook("class", "", "object-key-init")
      }, {
        name: cc11001100_hook("name", "我的学院", "object-key-init"),
        url: cc11001100_hook("url", "https://edu.csdn.net/", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://edu.csdn.net/", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5115", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-edu", "object-key-init"),
        class: cc11001100_hook("class", "", "object-key-init")
      }, {
        name: cc11001100_hook("name", "我的下载", "object-key-init"),
        url: cc11001100_hook("url", "https://mp.csdn.net/console/upDetailed", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://mp.csdn.net/console/upDetailed", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5116", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-download", "object-key-init"),
        class: cc11001100_hook("class", "", "object-key-init")
      }, {
        name: cc11001100_hook("name", "我的书架", "object-key-init"),
        url: cc11001100_hook("url", "https://book.csdn.net/bookshelf", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://book.csdn.net/bookshelf", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5117", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-book", "object-key-init"),
        class: cc11001100_hook("class", "toolbar-subMenu-border", "object-key-init")
      }, {
        name: cc11001100_hook("name", "我的钱包", "object-key-init"),
        url: cc11001100_hook("url", "https://i.csdn.net/#/wallet/index", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://i.csdn.net/#/wallet/index", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5136", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-wallet", "object-key-init"),
        class: cc11001100_hook("class", "", "object-key-init")
      }, {
        name: cc11001100_hook("name", "我的订单", "object-key-init"),
        url: cc11001100_hook("url", "https://mall.csdn.net/myorder", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://mall.csdn.net/myorder", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5137", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-order", "object-key-init"),
        class: cc11001100_hook("class", "toolbar-subMenu-border", "object-key-init")
      }, {
        name: cc11001100_hook("name", "帮助", "object-key-init"),
        url: cc11001100_hook("url", "https://blog.csdn.net/blogdevteam/article/details/103478461", "object-key-init"),
        report: {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init"),
          dest: cc11001100_hook("dest", "https://blog.csdn.net/blogdevteam/article/details/103478461", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.5138", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-help", "object-key-init"),
        class: cc11001100_hook("class", "", "object-key-init")
      }, {
        name: cc11001100_hook("name", "退出", "object-key-init"),
        url: cc11001100_hook("url", "javascript:;", "object-key-init"),
        report: {
          spm: cc11001100_hook("spm", "3001.5139", "object-key-init")
        },
        icon: cc11001100_hook("icon", "toolbar-icon-logout", "object-key-init"),
        class: cc11001100_hook("class", "toolbar-btn-logout", "object-key-init")
      }], "assign");
    },
    getAvatarByAu: function (t) {
      return !!t && "https://profile.csdnimg.cn/" + t.split("").join("/") + "/2_" + (this.currentUser.userName && this.currentUser.userName.toLowerCase());
    },
    checkLogin: function (t) {
      var e = cc11001100_hook("e", o("AU"), "var-init"),
        n = cc11001100_hook("n", o("UserNick"), "var-init"),
        a = cc11001100_hook("a", o("UserName"), "var-init");
      this.currentUser.userNick = cc11001100_hook("this.currentUser.userNick", n, "assign"), this.currentUser.userName = cc11001100_hook("this.currentUser.userName", a, "assign"), this.currentUser.avatar = cc11001100_hook("this.currentUser.avatar", this.getAvatarByAu(e), "assign"), t && t(this.currentUser);
    },
    renderToolbar: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", t.getToolbarStyle(), "var-init"),
        o = cc11001100_hook("o", e('<div id="csdn-toolbar">\n                    <div class="toolbar-inside" ' + (n ? 'style="' + n + '"' : "") + '>\n                      <div class="toolbar-container">\n                        <div class="toolbar-container-left">\n                          <div class="toolbar-logo toolbar-subMenu-box csdn-toolbar-fl"></div>\n                          <ul class="toolbar-menus csdn-toolbar-fl"></ul>\n                        </div>\n                        <div class="toolbar-container-middle">\n                        </div>\n                        <div class="toolbar-container-right">\n                          <div class="toolbar-btns onlyUser"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>'), "var-init");
      return 1 == S ? e("#toolbarBox").prepend(o) : e("body").prepend(o), t.$container = cc11001100_hook("t.$container", o.find(".toolbar-container"), "assign"), t.$logoBox = cc11001100_hook("t.$logoBox", o.find(".toolbar-logo"), "assign"), t.$NavBox = cc11001100_hook("t.$NavBox", o.find(".toolbar-menus"), "assign"), t.$btnsBox = cc11001100_hook("t.$btnsBox", o.find(".toolbar-btns"), "assign"), e(document).on("click", function (n) {
        0 !== e(n.target).closest(".toolbar-search").length || t.searchInputFocus || (t.clearSeachDropMenu(), t.toggleSearchBarInput());
      }), this;
    },
    renderMiniToolbar: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", t.getToolbarStyle(), "var-init"),
        o = cc11001100_hook("o", e('<div id="csdn-toolbar">\n                    <div class="toolbar-inside" ' + (n ? 'style="' + n + '"' : "") + '>\n                      <div class="toolbar-container">\n                        <div class="toolbar-container-left">\n                          <div class="toolbar-logo toolbar-subMenu-box csdn-toolbar-fl"></div>\n                        </div>\n                        <div class="toolbar-container-mini-middle">\n                        </div>\n                        <div class="toolbar-container-right">\n                          <div class="toolbar-btns onlyUser"></div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>'), "var-init");
      return e("body").prepend(o), t.$miniMenu = cc11001100_hook("t.$miniMenu", o.find(".toolbar-container-left"), "assign"), t.$logoBox = cc11001100_hook("t.$logoBox", o.find(".toolbar-logo"), "assign"), t.$btnsBox = cc11001100_hook("t.$btnsBox", o.find(".toolbar-btns"), "assign"), this;
    },
    renderNav: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        e = cc11001100_hook("e", "" + this.navData.map(function (e) {
          e.active = cc11001100_hook("e.active", l(e.url), "assign"), "index" === e.id && d() ? e.active = cc11001100_hook("e.active", !1, "assign") : "community" !== e.id || d() || (e.active = cc11001100_hook("e.active", !1, "assign"));
          var n = cc11001100_hook("n", (new Date().getTime(), t.isEffectiveTime(e.icon)), "var-init");
          return '<li class="' + (e.active ? "active " : "") + (e.children.length ? "toolbar-subMenu-box" : "") + (e.slider && e.slider.list && e.slider.list.length ? " toolbar-subSlider-box" : "") + "\" title='" + (e.title ? e.title : "") + "'>\n                                <a " + (e.report ? "data-report-click='" + JSON.stringify(e.report) + "'" : "") + " " + (e.report && e.report.spm ? 'data-report-query="spm=' + e.report.spm + '"' : "") + " href='" + e.url + "'>\n                                  " + e.name + "\n                                  " + (n ? "<img style='" + e.icon.style + '\'" src="' + e.icon.url + '">' : "") + "\n                                  " + (e.children.length ? '<i class="toolbar-subMenu-arrowHead"></i>' : "") + "\n                                </a>\n                                " + (e.children.length ? '<div class="toolbar-subMenu">\n                                    ' + e.children.map(function (t) {
            return "<a data-report-click='" + JSON.stringify(t.report) + "' data-report-query=\"spm=" + t.report.spm + '" target="_blank" href=\'' + t.url + "'>" + t.name + "</a>";
          }).join("") + "\n                                  </div>" : "") + "\n                                " + (e.slider && e.slider.list && e.slider.list.length ? '<div class="toolbar-subSlider">\n                                  <div class=toolbar-subSlider-' + e.id + ">\n                                    " + e.slider.list.map(function (t) {
            return (t.name && t.name.length <= 2 || t.imgUrl) && "<a " + (t.report ? "data-report-click='" + JSON.stringify(t.report) + "'" : "") + " " + (t.report && t.report.spm ? 'data-report-query="spm=' + t.report.spm + '"' : "") + ' target="_blank" href=' + (t.url ? t.url : "javascript:void(0);") + ">" + (t.name ? t.name : "") + (t.imgUrl ? "<img src=" + t.imgUrl + " style=" + (t.imgStyle ? t.imgStyle : "") + " />" : "") + "</a>";
          }).join("") + "\n                                    </div>\n                                  </div>" : "") + "\n                              </li>";
        }).join(""), "var-init");
      return this.$NavBox.append(e), this;
    },
    renderLogo: function () {
      var t = cc11001100_hook("t", ["default", "dark", "home"], "var-init"),
        e = cc11001100_hook("e", t[_], "var-init"),
        n = cc11001100_hook("n", '<a data-report-click=\'{"spm":"3001.4476"}\' data-report-query="spm=3001.4476" href="' + (this.logoData.link || "https://csdn.net") + '"><img title="' + (this.logoData.title || "CSDN首页") + '" src="' + this.logoData.url[e] + '"></a>\n                    ' + (this.logoData.qrcode ? '<div class="toolbar-subMenu">\n                    <img width="96" height="96" src="' + this.logoData.qrcode + '">\n                  </div>' : ""), "var-init");
      return void 0, this.$logoBox.append(n), this;
    },
    renderSearch: function (n) {
      var o = cc11001100_hook("o", this, "var-init"),
        a = cc11001100_hook("a", e('<div class="toolbar-search onlySearch"><div class="toolbar-search-container">\n                    <span class="icon-fire"></span>\n                    <input id="toolbar-search-input" maxlength="2000" autocomplete="off" type="text" value="" placeholder="' + this.getSearchInputPlaceholder() + '"><div class="gradient"></div>\n                    <button id="toolbar-search-button"><i></i><span>搜索</span></button>\n                    <input type="password" autocomplete="new-password" readonly disabled="true" style="display: none; position:absolute;left:-9999999px;width:0;height:0;"/>\n                  </div></div>'), "var-init"),
        i = cc11001100_hook("i", !1, "var-init"),
        r = cc11001100_hook("r", s(this.getSearchAssociateWord, 300).bind(this), "var-init");
      a.on("focus", "#toolbar-search-input", function (t) {
        var a = cc11001100_hook("a", e(this), "var-init"),
          s = cc11001100_hook("s", a.val().trim(), "var-init");
        "" === s ? o.getSearchHistoryArray(o.renderSearchHistoryDropMenu) : r(s, o.renderAssociateWordDropMenu.bind(o)), n || o.toggleSearchBarInput("focus"), o.searchInputFocus = cc11001100_hook("o.searchInputFocus", !0, "assign"), i = cc11001100_hook("i", !0, "assign"), o.refreshPlaceholder(), o.buriedPoint({
          spm: cc11001100_hook("spm", "3001.8516", "object-key-init")
        });
      }).on("blur", "#toolbar-search-input", function (t) {
        o.searchInputFocus = cc11001100_hook("o.searchInputFocus", !1, "assign"), setTimeout(function () {
          o.refreshPlaceholder();
        }, 500);
      }).on("input", "#toolbar-search-input", function (t) {
        var n = cc11001100_hook("n", e(this), "var-init"),
          a = cc11001100_hook("a", n.val().trim(), "var-init");
        o.searchInputValue = cc11001100_hook("o.searchInputValue", a, "assign"), void 0, "" === a && i ? o.getSearchHistoryArray(o.renderSearchHistoryDropMenu) : r(a, o.renderAssociateWordDropMenu.bind(o));
      }).on("click", "button", function (t) {
        var i = cc11001100_hook("i", e("#toolbar-search-input").val(), "var-init"),
          r = cc11001100_hook("r", o.placeholder && o.placeholder.productId || o.placeholderRight && o.placeholderRight.productId, "var-init"),
          s = cc11001100_hook("s", i ? "3001.4498" : "3001.7499", "var-init"),
          c = cc11001100_hook("c", i || r, "var-init"),
          l = cc11001100_hook("l", o.clickSearchBtnHandler.call(o, i, s), "var-init");
        return o.buriedPoint({
          spm: cc11001100_hook("spm", s, "object-key-init"),
          dest: cc11001100_hook("dest", l, "object-key-init"),
          extend1: cc11001100_hook("extend1", i ? "pc_search_uc_word" : "pc_search_default_word", "object-key-init"),
          extra: cc11001100_hook("extra", JSON.stringify({
            utm_medium: cc11001100_hook("utm_medium", o.utm_medium, "object-key-init"),
            searchword: cc11001100_hook("searchword", c, "object-key-init")
          }), "object-key-init")
        }), o.clearSeachDropMenu(), a.find("#toolbar-search-input").blur(), n || o.toggleSearchBarInput(), !1;
      }).on("keydown", "#toolbar-search-input", function (t) {
        229 !== t.keyCode && 13 === t.keyCode && e("#toolbar-search-button").trigger("click");
      });
      var c = cc11001100_hook("c", !1, "var-init");
      return a.on("compositionstart", "#toolbar-search-input", function (t) {
        c = cc11001100_hook("c", !0, "assign");
      }).on("compositionupdate", "#toolbar-search-input", function (t) {
        c = cc11001100_hook("c", !0, "assign");
      }).on("compositionend", "#toolbar-search-input", function (t) {
        c = cc11001100_hook("c", !1, "assign");
      }), n ? (e(n).append(a), o.isMiniRenderSearch = cc11001100_hook("o.isMiniRenderSearch", !0, "assign"), e(document).on("click", function (t) {
        0 !== e(t.target).closest(".toolbar-search").length || o.searchInputFocus || o.clearSeachDropMenu();
      })) : e(".toolbar-container-middle").append(a), o.$searchBox = cc11001100_hook("o.$searchBox", e(".toolbar-search"), "assign"), e(t).on("keydown", function (t) {
        if (!c) {
          var n = cc11001100_hook("n", e(".associate-word-drop-menu"), "var-init");
          if (n.length && i) {
            var o = cc11001100_hook("o", n.find(".toolbar-search-item"), "var-init"),
              r = cc11001100_hook("r", n.find(".toolbar-search-item.active"), "var-init"),
              s = cc11001100_hook("s", r.length ? r.index() : -1, "var-init");
            "ArrowUp" === t.key ? (s--, s < 0 && (s = cc11001100_hook("s", o.length - 1, "assign")), o.eq(s).addClass("active").siblings().removeClass("active"), a.find("#toolbar-search-input").val(o.eq(s).find(".search-key-data").text()), t.preventDefault()) : "ArrowDown" === t.key && (s++, s > o.length - 1 && (s = cc11001100_hook("s", 0, "assign")), o.eq(s).addClass("active").siblings().removeClass("active"), void 0, a.find("#toolbar-search-input").val(o.eq(s).find(".search-key-data").text()));
          }
        }
      }), e(t).on("resize", function () {
        i && (o.clearSeachDropMenu(), a.find("#toolbar-search-input").blur(), n || o.toggleSearchBarInput());
      }), this;
    },
    outPutSearchMethod: function (t) {
      this.renderSearch(t), this.getHotSearchWordData();
    },
    renderBtnsJudgement: function () {
      if (Object.keys(this.renderBtnData).length > 0 && "mini" !== D) {
        var t = cc11001100_hook("t", o("c_segment"), "var-init");
        t = cc11001100_hook("t", t ? parseInt(t) : 0, "assign"), this.renderBtnData.control1.indexOf(t) > -1 ? (document.querySelector(".toolbar-inside").classList.add("control1"), this.renderBtns()) : this.renderBtnData.exp1.indexOf(t) > -1 ? (document.querySelector(".toolbar-inside").classList.add("exp1"), this.renderBtnsExp1()) : this.renderBtnData.exp2.indexOf(t) > -1 ? (document.querySelector(".toolbar-inside").classList.add("exp2"), this.renderBtnsExp2()) : this.renderBtnData.exp3.indexOf(t) > -1 ? (document.querySelector(".toolbar-inside").classList.add("exp3"), this.renderBtnsExp3()) : this.renderBtns();
      } else this.renderBtns();
    },
    renderBtnsExp1: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", b(), "var-init"),
        o = cc11001100_hook("o", n && this.hasLogin ? this.vipData.iconVip : this.vipData.iconNormal, "var-init"),
        a = cc11001100_hook("a", (o.showIcon, e('<div class="toolbar-btn toolbar-btn-login toolbar-btn-login-new csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '">\n          ' + (this.hasLogin ? '<a class="hasAvatar" data-report-click=\'{"spm": "3001.5343"}\' data-report-query="spm=3001.5343" href="https://blog.csdn.net/' + t.currentUser.userName + '"><img src="' + this.currentUser.avatar + '"></a>' : ' <a class="toolbar-btn-loginfun" data-report-click=\'{"spm":"3001.5105"}\'>登录</a>') + '\n          </div>\n          <div class="toolbar-btn toolbar-btn-vip csdn-toolbar-fl">\n            <a data-report-click=\'' + JSON.stringify(t.vipData.report) + "' " + (t.vipData.report.spm ? 'data-report-query="spm=' + t.vipData.report.spm + '"' : "") + " href='" + t.vipData.url + "'>\n              " + t.vipData.name + "\n            </a>\n          </div>\n          " + (this.hasLogin ? '<div class="toolbar-btn toolbar-btn-msg csdn-toolbar-fl">\n              <div class="toolbar-subMenu-box">\n                <a data-report-click=\'{"spm":"3001.4508"}\' data-report-query="spm=3001.4508" id="toolbar-remind" href="https://i.csdn.net/#/msg/index">消息</a>\n              </div>\n              <div class="toolbar-msg-box"></div>\n            </div>' : "") + '\n          <div class="toolbar-btn toolbar-btn-collect csdn-toolbar-fl">\n            <a data-report-click=\'{"spm":"3001.7480"}\' data-report-query="spm=3001.7480" href="https://i.csdn.net/#/user-center/history">历史</a>\n          </div>\n          <div class="toolbar-btn toolbar-btn-mp csdn-toolbar-fl">\n            <a title="创作中心" data-report-click=\'{"dest":"https://mp.csdn.net/","spm":"3001.8539"}\' data-report-query="spm=3001.8539" href="https://mp.csdn.net">创作中心</a>\n          </div>\n          <div class="toolbar-btn toolbar-btn-write toolbar-btn-write-new csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '"></div>\n        </div>')), "var-init");
      this.$btnsBox.append(a), this.renderNewBtnWrite(), a.on("click", ".toolbar-btn-loginfun", function () {
        var t = cc11001100_hook("t", e(this).data("report-click"), "var-init");
        t ? c(t) : c();
      }), a.on("click", ".toolbar-btn-logout", function () {
        t.clickLogoutBtnHandler();
      });
    },
    renderBtnsExp2: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", b(), "var-init"),
        o = cc11001100_hook("o", n && this.hasLogin ? this.vipData.iconVip : this.vipData.iconNormal, "var-init"),
        a = cc11001100_hook("a", (o.showIcon, e('<div class="toolbar-btn toolbar-btn-login toolbar-btn-login-new csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '">\n          ' + (this.hasLogin ? '<a class="hasAvatar" data-report-click=\'{"spm": "3001.5343"}\' data-report-query="spm=3001.5343" href="https://blog.csdn.net/' + t.currentUser.userName + '"><img src="' + this.currentUser.avatar + '"></a>' : ' <a class="toolbar-btn-loginfun" data-report-click=\'{"spm":"3001.5105"}\'>登录</a>') + '\n          </div>\n          <div class="toolbar-btn toolbar-btn-vip csdn-toolbar-fl">\n            <a data-report-click=\'' + JSON.stringify(t.vipData.report) + "' " + (t.vipData.report.spm ? 'data-report-query="spm=' + t.vipData.report.spm + '"' : "") + " href='" + t.vipData.url + "' title='" + t.vipData.name + "'></a>\n          </div>\n          " + (this.hasLogin ? '<div class="toolbar-btn toolbar-btn-msg csdn-toolbar-fl">\n              <div class="toolbar-subMenu-box">\n                <a data-report-click=\'{"spm":"3001.4508"}\' data-report-query="spm=3001.4508" id="toolbar-remind" href="https://i.csdn.net/#/msg/index" title="消息"></a>\n              </div>\n              <div class="toolbar-msg-box"></div>\n            </div>' : "") + '\n          <div class="toolbar-btn toolbar-btn-collect csdn-toolbar-fl">\n            <a data-report-click=\'{"spm":"3001.7480"}\' data-report-query="spm=3001.7480" href="https://i.csdn.net/#/user-center/history" title="历史"></a>\n          </div>\n          <div class="toolbar-btn toolbar-btn-mp csdn-toolbar-fl">\n            <a title="创作中心" data-report-click=\'{"dest":"https://mp.csdn.net/","spm":"3001.8539"}\' data-report-query="spm=3001.8539" href="https://mp.csdn.net"></a>\n          </div>\n          <div class="toolbar-btn toolbar-btn-write toolbar-btn-write-new csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '"></div>\n        </div>')), "var-init");
      this.$btnsBox.append(a), this.renderNewBtnWrite(), a.on("click", ".toolbar-btn-loginfun", function () {
        var t = cc11001100_hook("t", e(this).data("report-click"), "var-init");
        t ? c(t) : c();
      }), a.on("click", ".toolbar-btn-logout", function () {
        t.clickLogoutBtnHandler();
      });
    },
    renderBtnsExp3: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", b(), "var-init"),
        o = cc11001100_hook("o", n && this.hasLogin ? this.vipData.iconVip : this.vipData.iconNormal, "var-init"),
        a = cc11001100_hook("a", o.showIcon ? "inline-block" : "none", "var-init"),
        i = cc11001100_hook("i", e('<div class="toolbar-btn toolbar-btn-login toolbar-btn-login-new csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '">\n          ' + (this.hasLogin ? '<a class="hasAvatar" data-report-click=\'{"spm": "3001.5343"}\' data-report-query="spm=3001.5343" href="https://blog.csdn.net/' + t.currentUser.userName + '"><img src="' + this.currentUser.avatar + '"></a>' : ' <a class="toolbar-btn-loginfun" data-report-click=\'{"spm":"3001.5105"}\'>登录</a>') + '\n          </div>\n          <div class="toolbar-btn toolbar-btn-vip csdn-toolbar-fl">\n            <a data-report-click=\'' + JSON.stringify(t.vipData.report) + "' " + (t.vipData.report.spm ? 'data-report-query="spm=' + t.vipData.report.spm + '"' : "") + " href='" + t.vipData.url + "'>\n              " + t.vipData.name + " " + (t.isEffectiveTime(t.vipData.icon) ? "<img style='" + t.vipData.icon.style + '\'" src="' + t.vipData.icon.url + '">' : "<img style='" + o.style + ";display:" + a + '\'" src="' + o.url + '">') + "\n            </a>\n          </div>\n          " + (this.hasLogin ? '<div class="toolbar-btn toolbar-btn-msg csdn-toolbar-fl">\n              <div class="toolbar-subMenu-box">\n                <a data-report-click=\'{"spm":"3001.4508"}\' data-report-query="spm=3001.4508" id="toolbar-remind" href="https://i.csdn.net/#/msg/index">消息</a>\n              </div>\n              <div class="toolbar-msg-box"></div>\n            </div>' : "") + '\n          <div class="toolbar-btn toolbar-btn-collect csdn-toolbar-fl">\n            <a data-report-click=\'{"spm":"3001.7480"}\' data-report-query="spm=3001.7480" href="https://i.csdn.net/#/user-center/history">历史</a>\n          </div>\n          <div class="toolbar-btn toolbar-btn-mp csdn-toolbar-fl">\n            <a title="创作中心" data-report-click=\'{"dest":"https://mp.csdn.net/","spm":"3001.8539"}\' data-report-query="spm=3001.8539" href="https://mp.csdn.net">\n              创作中心' + this.getMpMenuIcon() + '\n            </a>\n          </div>\n          <div class="toolbar-btn toolbar-btn-write toolbar-btn-write-new csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '"></div>\n        </div>'), "var-init");
      this.$btnsBox.append(i), this.renderNewBtnWrite(), i.on("click", ".toolbar-btn-loginfun", function () {
        var t = cc11001100_hook("t", e(this).data("report-click"), "var-init");
        t ? c(t) : c();
      }), i.on("click", ".toolbar-btn-logout", function () {
        t.clickLogoutBtnHandler();
      });
    },
    renderBtns: function () {
      var t = cc11001100_hook("t", b(), "var-init"),
        n = cc11001100_hook("n", t && this.hasLogin ? this.vipData.iconVip : this.vipData.iconNormal, "var-init"),
        i = cc11001100_hook("i", n.showIcon ? "inline-block" : "none", "var-init");
      void 0;
      var r = cc11001100_hook("r", this, "var-init"),
        s = cc11001100_hook("s", e('<div class="toolbar-btn toolbar-btn-login csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '">\n                      ' + (this.hasLogin ? '<a class="hasAvatar" data-report-click=\'{"spm": "3001.5343"}\' data-report-query="spm=3001.5343" href="https://blog.csdn.net/' + r.currentUser.userName + '"><img src="' + this.currentUser.avatar + '"></a>' : ' <a class="toolbar-btn-loginfun" data-report-click=\'{"spm":"3001.5105"}\'>登录/注册</a>') + '\n                      </div>\n                    <div class="toolbar-btn toolbar-btn-vip csdn-toolbar-fl">\n                      <a data-report-click=\'' + JSON.stringify(r.vipData.report) + "' " + (r.vipData.report.spm ? 'data-report-query="spm=' + r.vipData.report.spm + '"' : "") + " href='" + r.vipData.url + "'>" + r.vipData.name + " " + (r.isEffectiveTime(r.vipData.icon) ? "<img style='" + r.vipData.icon.style + '\'" src="' + r.vipData.icon.url + '">' : "<img style='" + n.style + ";display:" + i + '\'" src="' + n.url + '">') + '</a>\n                      </div>\n                    <div class="toolbar-btn toolbar-btn-collect csdn-toolbar-fl">\n                      <a data-report-click=\'{"spm":"3001.7480"}\' data-report-query="spm=3001.7480" href="https://i.csdn.net/#/user-center/history">足迹</a>\n                    </div>\n                    <div class="toolbar-btn toolbar-btn-dynamic csdn-toolbar-fl toolbar-dynamic-box">\n                      <a data-report-click=\'{"spm":"3001.4507"}\' data-report-query="spm=3001.4507" href="https://blink.csdn.net">动态</a>\n                      <div class="toolbar-dynamic-subMenu">\n                        <a class=\'vote-item\' data-report-click=\'{"spm":"3001.8379"}\' data-report-query="spm=3001.8379" href="https://blink.csdn.net/?source=vote">\n                          <span class="pos-rel">投票<i></i></span>\n                        </a>\n                      </div>\n                    </div>\n                    ' + (this.hasLogin ? '<div class="toolbar-btn toolbar-btn-msg csdn-toolbar-fl">\n                        <div class="toolbar-subMenu-box">\n                          <a data-report-click=\'{"spm":"3001.4508"}\' data-report-query="spm=3001.4508" id="toolbar-remind" href="https://i.csdn.net/#/msg/index">消息</a>\n                        </div>\n                        <div class="toolbar-msg-box"></div>\n                      </div>' : "") + "\n                    " + (this.hasShowMpMenu() ? '\n                      <div class="toolbar-btn toolbar-btn-dynamic csdn-toolbar-fl toolbar-mp-menubox">\n                        <a title="' + this.mpMenuData.title + "\" data-report-click='" + JSON.stringify(this.mpMenuData.report) + "' data-report-query=\"spm=" + this.mpMenuData.report.spm + '" href="' + this.mpMenuData.url + '">\n                          ' + this.mpMenuData.title + "\n                          " + this.getMpMenuIcon() + "\n                        </a>\n                      </div>\n                    " : "") + '\n                    <div class="toolbar-btn toolbar-btn-write csdn-toolbar-fl ' + (this.hasLogin ? "toolbar-subMenu-box" : "") + '"></div>\n                    </div>'), "var-init");
      return this.$btnsBox.append(s), this.renderBtnWrite(), s.on("click", ".toolbar-btn-loginfun", function () {
        var t = cc11001100_hook("t", e(this).data("report-click"), "var-init");
        t ? c(t) : c();
      }), s.on("click", ".toolbar-btn-logout", function () {
        r.clickLogoutBtnHandler();
      }), this.$msgBox = cc11001100_hook("this.$msgBox", s.find(".toolbar-msg-box"), "assign"), o("has-vote-msg") || e(".vote-item").find("i").show(), e(".toolbar-dynamic-subMenu").on("click", ".vote-item", function () {
        a("has-vote-msg", 1, 864e5), e(".vote-item").find("i").hide();
      }), this;
    },
    renderBtnWrite: function () {
      var n = cc11001100_hook("n", '<a data-report-click=\'{"spm":"3001.4503"}\' data-report-query="spm=3001.4503" href="' + (this.hasShowMpMenu() ? "https://mp.csdn.net/edit" : "https://mp.csdn.net") + '"><i></i>' + (this.hasShowMpMenu() ? "发布" : "创作") + "<i></i></a>", "var-init");
      e(".toolbar-btn-write").append(n), t.csdn && t.csdn.report && t.csdn.report.reportView && t.csdn.report.reportView({
        spm: cc11001100_hook("spm", "3001.7765", "object-key-init")
      });
    },
    renderNewBtnWrite: function () {
      e(".toolbar-btn-write-new").append('<a data-report-click=\'{"spm":"3001.4503"}\' data-report-query="spm=3001.4503" href="https://mp.csdn.net/edit">发布</a>'), t.csdn && t.csdn.report && t.csdn.report.reportView && t.csdn.report.reportView({
        spm: cc11001100_hook("spm", "3001.7765", "object-key-init")
      });
    },
    renderMiniMenu: function () {
      var t = cc11001100_hook("t", e('<div class="csdn-toolbar-mini csdn-toolbar-fl">\n        <div class="toolbar-mini-meun-logo">\n          <div class="toolbar-mini-icon"></div>\n          <span>导航</span>\n          <div class="toolbar-mini-partition"></div>\n        </div>\n        <ul class="csdn-toolbar-mini-ul">' + this.navData.map(function (t) {
        return t.active = cc11001100_hook("t.active", l(t.url), "assign"), "index" === t.id && d() ? t.active = cc11001100_hook("t.active", !1, "assign") : "community" !== t.id || d() ? p() && (t.active = cc11001100_hook("t.active", !1, "assign")) : t.active = cc11001100_hook("t.active", !1, "assign"), '<li class="' + (t.active ? "active " : "") + 'csdn-toolbar-mini-li">\n              <a ' + (t.report ? "data-report-click='" + JSON.stringify(t.report) + "'" : "") + " " + (t.report && t.report.spm ? 'data-report-query="spm=' + t.report.spm + '"' : "") + " href='" + t.url + "'>" + t.name + "</a>\n            </li>";
      }).join("") + "\n        </ul>\n      </div>"), "var-init");
      return this.$miniMenu.prepend(t), this;
    },
    renderMsgMenu: function () {
      var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
      if (this.hasLogin) {
        var e = cc11001100_hook("e", '<div class="toolbar-subMenu">\n                          <a data-type="comment" href="https://i.csdn.net/#/msg/index"><span \n                          class="pos-rel">评论和@' + (t.comment ? "<i></i>" : "") + '</span></a>\n                          <a data-type="attention" href="https://i.csdn.net/#/msg/attention"><span class="pos-rel">新增粉丝' + (t.follow ? "<i></i>" : "") + '</span></a>         \n                          <a data-type="like" href="https://i.csdn.net/#/msg/like"><span class="pos-rel">赞和收藏' + (t.thumb_up ? "<i></i>" : "") + '</span></a>\n                          <a data-type="chat" href="https://im.csdn.net/im/main.html"><span class="pos-rel">私信' + (t.im ? "<i></i>" : "") + '</span></a>\n                          <a data-type="notice" href="https://i.csdn.net/#/msg/notice"><span class="pos-rel">系统通知' + (t.system ? "<i></i>" : "") + '</span></a>\n                          <a href="https://i.csdn.net/#/msg/setting">消息设置</a>\n                     </div>', "var-init");
        this.$btnsBox.find(".toolbar-btn-msg .toolbar-subMenu-box").append(e);
      } else this.setRemind("https://passport.csdn.net/account/login", 0);
      k.length && k.forEach(function (t) {
        return t();
      });
    },
    renderCoupon: function (n) {
      var o = cc11001100_hook("o", e('<a href="https://i.csdn.net/#/msg/notice" class="toolbar-msg-coupon">你有一张VIP限时优惠券哦</a>'), "var-init");
      n && n > 0 && -1 === t.location.href.indexOf("assign_skin_id") && (this.$msgBox.append(o), setTimeout(function () {
        o.remove();
      }, 5e3));
    },
    renderGuide: function (t) {
      var n = cc11001100_hook("n", this, "var-init"),
        i = cc11001100_hook("i", o("c-toolbar-loginguide"), "var-init"),
        r = cc11001100_hook("r", e('<span class="toolbar-msg-guide"><a href="https://i.csdn.net/#/msg/index">登录查看未读消息</a><i></i></span>'), "var-init");
      !i && t && (r.find("i").click(function (t) {
        a("c-toolbar-loginguide", 1, 864e5), r.remove();
      }), !n.hasLogin && t > 0 && this.$msgBox.append(r));
    },
    renderLiveMsg: function (t) {
      var n = cc11001100_hook("n", this, "var-init");
      if (t && 1 === t.status) {
        var o = cc11001100_hook("o", e('<div class="toolbar-msg-live">\n                      <a class="toolbar-msg-live-title" target="_blank" href="' + t.url + '">' + t.title + '</a>\n                      <p class="toolbar-msg-live-count"><i></i>' + t.count + '人在看</p>\n                      <div class="toolbar-msg-live-avatar"><span><img src="' + t.avatar + '" alt=""></span></div>\n                      <span class="toolbar-msg-live-close"></span>\n                    </div>'), "var-init");
        o.on("click", ".toolbar-msg-live-close", function (t) {
          o.remove();
        }), o.on("click", ".toolbar-msg-live-title", function (e) {
          n.reportLiveId(+t.messageId);
        }), n.$msgBox.append(o), setTimeout(function () {
          o.remove();
        }, 15e3);
      }
    },
    reportLiveId: function (t) {
      if (t === t) {
        var n = cc11001100_hook("n", {
          messageId: cc11001100_hook("messageId", t, "object-key-init")
        }, "var-init");
        n = cc11001100_hook("n", JSON.stringify ? JSON.stringify(n) : '{"messageId":' + t + "}", "assign"), e.ajax({
          url: cc11001100_hook("url", "https://msg.csdn.net/v1/web/message/view/live", "object-key-init"),
          type: cc11001100_hook("type", "post", "object-key-init"),
          data: cc11001100_hook("data", n, "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          success: function (t) {}
        });
      }
    },
    renderSearchHistoryDropMenu: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        n = cc11001100_hook("n", this.getSearchHistoryData(), "var-init"),
        o = cc11001100_hook("o", JSON.stringify({
          spm: cc11001100_hook("spm", "3001.7957", "object-key-init")
        }), "var-init"),
        a = function (e, n) {
          var o = cc11001100_hook("o", y("3001.4501"), "var-init");
          return JSON.stringify({
            spm: cc11001100_hook("spm", o, "object-key-init"),
            index: cc11001100_hook("index", "" + n, "object-key-init"),
            dest: cc11001100_hook("dest", C + "?spm=" + o + "&q=" + encodeURIComponent(e), "object-key-init"),
            extra: {
              searchword: cc11001100_hook("searchword", e, "object-key-init"),
              isDoublePlaceholder: cc11001100_hook("isDoublePlaceholder", t.isDoublePlaceholder ? 1 : 0, "object-key-init")
            }
          });
        },
        i = cc11001100_hook("i", e('<div class="toolbar-search-drop-menu" data-report-view=\'' + o + "'>\n        " + (n.length ? '<div class="toolbar-search-history">\n          <p class="toolbar-search-title">搜索历史<span class="toolbar-search-clear"><i></i>清空</span></p>\n          <ul>\n            ' + n.map(function (t, e) {
          return '<li class="toolbar-search-item" data-type="history" data-index="' + e + "\" data-report-view='" + a(t, e) + "'><span>" + t + '</span><span class="del"></span></li>';
        }).join("") + "\n          </ul>\n        </div>" : "") + "\n      </div>"), "var-init");
      i.on("click", ".toolbar-search-clear", function (e) {
        t.clearSearchHistory(), i.find(".toolbar-search-history").remove(), i.removeClass("toolbar-search-half");
      }).on("click", ".del", function (n) {
        var o = cc11001100_hook("o", e(this).parent().text(), "var-init");
        t.clearSingleSearchHistory(o), e(this).parent().remove(), n.stopPropagation();
      }).on("click", "li", function (n) {
        t.clickSearchItemHandler.call(t, e(this)), t.isMiniRenderSearch || t.setAnimate(t.$NavBox, {
          width: cc11001100_hook("width", "auto", "object-key-init")
        });
      }).on("mouseover", "li.toolbar-search-item", function (t) {
        e(this).addClass("active").siblings().removeClass("active"), e(this).find(".del").show();
      }).on("mouseleave", "li.toolbar-search-item", function () {
        e(this).removeClass("active"), e(this).find(".del").hide();
      }), t.clearSeachDropMenu(), t.$searchHotAndHistoryDropMenu = cc11001100_hook("t.$searchHotAndHistoryDropMenu", i, "assign"), setTimeout(function () {
        t.reportViewCheck();
      }), n.length ? (t.$searchBox.append(i), t.getHotSearchData(function () {
        i.addClass("toolbar-search-half");
      }, n)) : t.getHotSearchData(function () {
        t.$searchBox.append(i);
      }, n);
    },
    renderSearchHotDropMenu: function (t, n) {
      var o = cc11001100_hook("o", this, "var-init"),
        a = cc11001100_hook("a", Array.isArray(t) ? t.slice() : [], "var-init");
      if (this.isDoublePlaceholder && this.placeholderRight && this.placeholderRight.productId) {
        a = cc11001100_hook("a", a.filter(function (t) {
          return t.productId !== o.placeholderRight.productId;
        }), "assign");
        var i = cc11001100_hook("i", Object.assign({}, this.placeholderRight, {
          productId: cc11001100_hook("productId", u(this.placeholderRight.productId), "object-key-init")
        }), "var-init");
        a.unshift(i);
      }
      if (a.length) {
        "function" == typeof n && n();
        var r = function (t, e) {
            var n = cc11001100_hook("n", t.productId || t.word, "var-init"),
              a = cc11001100_hook("a", y("3001.4502"), "var-init"),
              i = cc11001100_hook("i", Object.assign({}, t.reportData.data, {
                spm: cc11001100_hook("spm", a, "object-key-init"),
                index: cc11001100_hook("index", "" + e, "object-key-init"),
                dest: cc11001100_hook("dest", C + "?spm=" + a + "&q=" + encodeURIComponent(n), "object-key-init"),
                extra: {
                  searchword: cc11001100_hook("searchword", n, "object-key-init"),
                  isDoublePlaceholder: cc11001100_hook("isDoublePlaceholder", o.isDoublePlaceholder ? 1 : 0, "object-key-init")
                }
              }), "var-init");
            try {
              var r = cc11001100_hook("r", JSON.parse(t.reportData.data.extra), "var-init");
              i.extra = cc11001100_hook("i.extra", Object.assign({}, r, i.extra), "assign");
            } catch (t) {}
            return JSON.stringify(i);
          },
          s = cc11001100_hook("s", e('<div class="toolbar-search-hot guess">\n        <p class="toolbar-search-title">搜索发现</p>\n        <ul>\n          ' + a.map(function (t, e) {
            return '<li class="toolbar-search-item ' + (e <= 2 || t.hot ? "hot" : "") + '" data-type="hot" data-index="' + e + "\" data-report-view='" + r(t, e) + "'><span>" + (t.productId || t.word) + "</span></li>";
          }).join("") + "\n        </ul>\n      </div>"), "var-init");
        s.on("mouseover", ".toolbar-search-item", function (t) {
          e(this).addClass("active").siblings().removeClass("active");
        }).on("mouseleave", ".toolbar-search-item", function () {
          e(this).removeClass("active");
        }), this.$searchHotAndHistoryDropMenu.find(".toolbar-search-hot").remove(), this.$searchHotAndHistoryDropMenu && this.$searchHotAndHistoryDropMenu.append(s), setTimeout(function () {
          o.reportViewCheck();
        });
      }
    },
    renderAssociateWordDropMenu: function (t) {
      if (this.searchInputFocus) {
        var n = cc11001100_hook("n", this, "var-init"),
          o = cc11001100_hook("o", e(e.parseHTML('\n        <div id="dropDownList" class="toolbar-search-drop-menu associate-word-drop-menu" style="height: auto;">\n          <ul class="drop-menu-list">\n            ' + t.map(function (t, e) {
            var o = cc11001100_hook("o", y("3001.7498"), "var-init"),
              a = cc11001100_hook("a", t.ext && t.ext.query || t.productId, "var-init"),
              i = cc11001100_hook("i", C + "?spm=" + o + "&q=" + encodeURIComponent(a), "var-init"),
              r = cc11001100_hook("r", t.reportData && t.reportData.data || {}, "var-init");
            try {
              "string" == typeof r.extra && (r.extra = cc11001100_hook("r.extra", JSON.parse(r.extra) || {}, "assign"));
            } catch (t) {
              r.extra = cc11001100_hook("r.extra", {}, "assign");
            }
            return r.extra.searchword = cc11001100_hook("r.extra.searchword", a, "assign"), Object.assign(r, {
              spm: cc11001100_hook("spm", o, "object-key-init"),
              dest: cc11001100_hook("dest", i, "object-key-init")
            }), '<li class="toolbar-search-item" data-index=\'' + e + "' data-report-view='" + JSON.stringify(r) + '\'>\n                <span class="search-key-data" data-type="suggest" data-index=\'' + e + "'>" + t.productId + '</span>\n                <span class="search-key-tip">\n                  ' + ("1" === n.searchAssociateType && t.ext.pv > 0 ? v(t.ext.pv) + " 人搜过" : "") + "\n                  " + ("2" === n.searchAssociateType && t.ext.result_num > 0 ? v(t.ext.result_num) + " 篇精华内容" : "") + "\n                </span>\n              </li>";
          }).join("") + "\n          </ul>\n        </div>\n      ")), "var-init");
        o.on("click", "li", function (t) {
          n.clickSearchItemHandler.call(n, e(this).find(".search-key-data")), n.isMiniRenderSearch || n.setAnimate(n.$NavBox, {
            width: cc11001100_hook("width", "auto", "object-key-init")
          });
        }), o.on("mouseover", "li.toolbar-search-item", function (t) {
          e(this).addClass("active").siblings().removeClass("active");
        }), this.$searchBox.append(o), this.reportViewCheck();
      }
    },
    clickSearchBtnHandler: function (n, o) {
      var a = cc11001100_hook("a", this.placeholder && this.placeholder.productId || this.placeholderRight && this.placeholderRight.productId, "var-init"),
        i = cc11001100_hook("i", n || a, "var-init");
      if (!n && this.placeholder && "csdn_ad" === this.placeholder.recommendType && this.placeholder.ext && this.placeholder.ext.url) return void t.open(this.placeholder.ext.url);
      if (void 0 === i || null === i) return e("#toolbar-search-input").focus(), !1;
      var r = cc11001100_hook("r", encodeURIComponent(i), "var-init"),
        s = cc11001100_hook("s", !n && a, "var-init"),
        c = cc11001100_hook("c", "", "var-init"),
        l = cc11001100_hook("l", C + "?spm=" + y(o) + "&q=" + r + "&t=" + g() + "&u=", "var-init"),
        d = cc11001100_hook("d", s ? this.urlParamsPlaceholder : this.urlParams, "var-init");
      if (d) {
        for (var p in d) if (d.hasOwnProperty(p)) {
          var u = cc11001100_hook("u", d[p], "var-init");
          c += cc11001100_hook("c", "&" + p + "=" + u, "assign");
        }
        l += cc11001100_hook("l", c, "assign");
      }
      return this.urlParams = cc11001100_hook("this.urlParams", "", "assign"), t.location.href.indexOf("so.csdn.net") > -1 ? t.csdn && t.csdn.toolbarSearchUrl ? t.location.href = cc11001100_hook("t.location.href", t.csdn.toolbarSearchUrl + r + c, "assign") : t.location.href = cc11001100_hook("t.location.href", l, "assign") : t.open(l), l;
    },
    clickSearchItemHandler: function (n) {
      var o = cc11001100_hook("o", this, "var-init"),
        a = cc11001100_hook("a", [n.text(), n.data("type"), n.data("index")], "var-init"),
        i = cc11001100_hook("i", a[0], "var-init"),
        r = cc11001100_hook("r", a[1], "var-init"),
        s = cc11001100_hook("s", a[2], "var-init"),
        c = cc11001100_hook("c", {}, "var-init"),
        l = cc11001100_hook("l", "", "var-init");
      if ("hot" === r) {
        var d = cc11001100_hook("d", o.hotSearchData[s], "var-init"),
          p = cc11001100_hook("p", d && d.reportData, "var-init");
        c = cc11001100_hook("c", p ? o.getHotSearchPointData(p, i) : Object.assign({}, c, {
          spm: cc11001100_hook("spm", "3001.4502", "object-key-init")
        }), "assign"), d && "csdn_ad" === d.recommendType && d.ext && d.ext.url && (l = cc11001100_hook("l", d.ext.url, "assign"));
      } else if ("history" === r) c = cc11001100_hook("c", {
        spm: cc11001100_hook("spm", "3001.4501", "object-key-init")
      }, "assign");else {
        var u = cc11001100_hook("u", this.searchAssociateWord[s], "var-init"),
          h = cc11001100_hook("h", u && u.reportData && u.reportData.data, "var-init");
        this.urlParams = cc11001100_hook("this.urlParams", u && u.reportData && u.reportData.urlParams, "assign"), c = cc11001100_hook("c", Object.assign({}, h, {
          spm: cc11001100_hook("spm", "3001.7498", "object-key-init")
        }), "assign");
      }
      l ? t.open(l) : (e("#toolbar-search-input").val(i).blur(), l = cc11001100_hook("l", o.clickSearchBtnHandler.call(o, i, c.spm), "assign"));
      try {
        "string" == typeof c.extra && (c.extra = cc11001100_hook("c.extra", JSON.parse(c.extra), "assign"));
      } catch (t) {}
      c.extra = cc11001100_hook("c.extra", Object.assign({}, c.extra, {
        searchword: cc11001100_hook("searchword", i, "object-key-init"),
        isDoublePlaceholder: cc11001100_hook("isDoublePlaceholder", this.isDoublePlaceholder ? 1 : 0, "object-key-init")
      }), "assign"), Object.assign(c, {
        dest: cc11001100_hook("dest", l, "object-key-init"),
        index: cc11001100_hook("index", "" + s, "object-key-init")
      }), o.buriedPoint(c), o.clearSeachDropMenu(), o.isMiniRenderSearch || o.toggleSearchBarInput();
    },
    clickAnnouncementHandler: function () {
      this.hasLogin && (e("#toolbar-announcement").find(">i").remove(), this.announcement && (this.announcement.announcementCount = cc11001100_hook("this.announcement.announcementCount", 0, "assign")), a("announcement-new", JSON.stringify(this.announcement), this.announcement.announcementExpire || 3e5), this.clearReadAnnouncement());
    },
    clickLogoutBtnHandler: function () {
      var e = cc11001100_hook("e", {
          mod: cc11001100_hook("mod", "popu_789", "object-key-init")
        }, "var-init"),
        n = cc11001100_hook("n", "https://passport.csdn.net/account/logout?from=" + encodeURIComponent(t.location.href), "var-init");
      e.dest = cc11001100_hook("e.dest", n, "assign"), e.extend1 = cc11001100_hook("e.extend1", "退出", "assign"), t.location.href = cc11001100_hook("t.location.href", n, "assign"), csdn && csdn.report && csdn.report.reportClick(e);
    },
    clearSeachDropMenu: function () {
      e(".toolbar-search-drop-menu").remove();
    },
    clearReadAnnouncement: function () {
      e.ajax({
        url: cc11001100_hook("url", "https://msg.csdn.net/v1/web/message/read_announcement", "object-key-init"),
        type: cc11001100_hook("type", "post", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        success: function (t) {},
        error: function (t) {
          void 0;
        }
      });
    },
    setUserAvatar: function (t) {
      var n = cc11001100_hook("n", t.avatarUrl, "var-init");
      if (t.totalCount > 0 && n && !this.hasLogin && o("UN")) {
        var a = cc11001100_hook("a", '<a class="hasAvatar" href="https://passport.csdn.net/account/login"><img src="' + n + '"></a>', "var-init");
        e(".toolbar-btn-login").html(a);
      }
    },
    getHotSearchPointData: function (t, e) {
      this.urlParams = cc11001100_hook("this.urlParams", t.urlParams, "assign");
      var n = cc11001100_hook("n", Object.assign({}, t.data, {
        spm: cc11001100_hook("spm", "3001.4502", "object-key-init"),
        extra: {
          searchword: cc11001100_hook("searchword", e, "object-key-init"),
          isDoublePlaceholder: cc11001100_hook("isDoublePlaceholder", this.isDoublePlaceholder ? 1 : 0, "object-key-init")
        }
      }), "var-init");
      try {
        Object.assign(n.extra, JSON.parse(t.data.extra));
      } catch (t) {}
      return n;
    },
    getReadAnnouncement: function () {
      var t = cc11001100_hook("t", this, "var-init");
      e.ajax({
        url: cc11001100_hook("url", "https://msg.csdn.net/v1/web/message/view/announcement", "object-key-init"),
        type: cc11001100_hook("type", "post", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        success: function (e) {
          if (e.status) {
            var n = cc11001100_hook("n", e.data, "var-init");
            t.announcement = cc11001100_hook("t.announcement", n, "assign"), a("announcement-new", JSON.stringify(n), n.announcementExpire || 3e5), t.hasLogin ? t.getUnreadMsg() : t.renderMsgMenu({
              announcement: cc11001100_hook("announcement", n, "object-key-init")
            });
          }
        },
        error: function (t) {
          void 0;
        }
      });
    },
    getUnreadMsg: function () {
      if (this.hasLogin || o("UN")) {
        var t = cc11001100_hook("t", this, "var-init"),
          n = cc11001100_hook("n", JSON.stringify ? JSON.stringify({
            coupon: cc11001100_hook("coupon", !0, "object-key-init")
          }) : '{"coupon":true}', "var-init");
        e.ajax({
          url: cc11001100_hook("url", "https://msg.csdn.net/v1/web/message/view/unread", "object-key-init"),
          type: cc11001100_hook("type", "post", "object-key-init"),
          data: cc11001100_hook("data", n, "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          success: function (e) {
            if (e.status) {
              var n = cc11001100_hook("n", e.data, "var-init");
              t.setRemind("", n.totalCount), t.setDocumentTitle(n.totalCount), t.renderCoupon(n.coupon_order), t.renderGuide(n.totalCount), t.renderLiveMsg(n.live_info), t.setUserAvatar(n), t.renderMsgMenu(n);
            }
          }
        });
      }
    },
    getSearchHistoryData: function () {
      var t = cc11001100_hook("t", this.searchHistoryArray.splice(0, 10), "var-init");
      return this.isDoublePlaceholder && this.placeholder && this.placeholder.productId && (t.unshift(u(this.placeholder.productId)), t = cc11001100_hook("t", Array.from(new Set(t)), "assign")), t;
    },
    getSearchHistoryArray: function (t) {
      var n = cc11001100_hook("n", this, "var-init");
      e.ajax({
        url: cc11001100_hook("url", "https://so.csdn.net/api/v1/get_search_his", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (e) {
          200 == e.code && (n.searchHistoryArray = cc11001100_hook("n.searchHistoryArray", e.data.map(function (t) {
            return u(t);
          }), "assign"), t && t.call(n));
        },
        error: function (t) {
          void 0;
        }
      });
    },
    getHotSearchData: function (t, n) {
      var a = cc11001100_hook("a", this, "var-init");
      if (new Date().valueOf() - a.copyHotSearchDataTime <= 2e3 && a.hotSearchData) return void a.renderSearchHotDropMenu(a.hotSearchData, t);
      e.ajax({
        url: cc11001100_hook("url", "https://silkroad.csdn.net/api/v2/assemble/list/channel/pc_hot_word", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        data: {
          user_foormark: cc11001100_hook("user_foormark", 1, "object-key-init"),
          channel_name: cc11001100_hook("channel_name", "pc_hot_word", "object-key-init"),
          size: cc11001100_hook("size", 20, "object-key-init"),
          user_name: cc11001100_hook("user_name", a.currentUser.userName, "object-key-init"),
          platform: cc11001100_hook("platform", "pc", "object-key-init"),
          imei: cc11001100_hook("imei", o("uuid_tt_dd"), "object-key-init")
        },
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        success: function (e) {
          if (200 === e.code) {
            var o = cc11001100_hook("o", e.data && e.data.items || [], "var-init");
            Array.isArray(o) && Array.isArray(n) && (o = cc11001100_hook("o", o.filter(function (t) {
              return !n.includes(t.productId);
            }), "assign")), o = cc11001100_hook("o", o.slice(0, 10), "assign"), o.forEach(function (t) {
              t.productId = cc11001100_hook("t.productId", u(t.productId), "assign");
            }), a.copyHotSearchData(o), a.renderSearchHotDropMenu(o, t);
          }
        },
        error: function (e) {
          a.hotSearchData && a.renderSearchHotDropMenu(a.hotSearchData, t);
        }
      });
    },
    getSearchAssociateWord: function (t, n) {
      if (this.searchInputValue) {
        if (t === this.historySearchInputValue) return this.clearSeachDropMenu(), void n(this.searchAssociateWord);
        var a = cc11001100_hook("a", this, "var-init");
        e.ajax({
          url: cc11001100_hook("url", "https://silkroad.csdn.net/api/v2/rcmd/list/channel/pc_toolbar_associateword", "object-key-init"),
          type: cc11001100_hook("type", "POST", "object-key-init"),
          data: cc11001100_hook("data", JSON.stringify({
            channel: cc11001100_hook("channel", "pc_toolbar_associateword", "object-key-init"),
            ext: {
              isAcceptDownGrade: cc11001100_hook("isAcceptDownGrade", !0, "object-key-init"),
              summary: cc11001100_hook("summary", !0, "object-key-init"),
              query: cc11001100_hook("query", t, "object-key-init"),
              pageSize: cc11001100_hook("pageSize", 10, "object-key-init"),
              page: cc11001100_hook("page", 0, "object-key-init"),
              type: cc11001100_hook("type", "suggest", "object-key-init"),
              deviceid: cc11001100_hook("deviceid", "-", "object-key-init"),
              platform: cc11001100_hook("platform", "pc", "object-key-init"),
              user_name: cc11001100_hook("user_name", a.currentUser.userName, "object-key-init"),
              imei: cc11001100_hook("imei", o("uuid_tt_dd"), "object-key-init")
            },
            size: cc11001100_hook("size", 10, "object-key-init")
          }), "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          success: function (e) {
            if (200 === e.code) {
              if (a.clearSeachDropMenu(), !e.data.items.length) return;
              var o = cc11001100_hook("o", e.data.items.map(function (t) {
                return {
                  productId: cc11001100_hook("productId", t.product_id, "object-key-init"),
                  reportData: cc11001100_hook("reportData", t.report_data, "object-key-init"),
                  ext: cc11001100_hook("ext", t.ext, "object-key-init")
                };
              }), "var-init");
              a.searchAssociateType = cc11001100_hook("a.searchAssociateType", e.data.ext.num_show, "assign"), a.searchAssociateWord = cc11001100_hook("a.searchAssociateWord", o, "assign"), a.historySearchInputValue = cc11001100_hook("a.historySearchInputValue", t, "assign"), n && n(o);
            }
          }
        });
      }
    },
    getHotSearchWordData: function (n) {
      var a = cc11001100_hook("a", {
        new_hot_flag: cc11001100_hook("new_hot_flag", 1, "object-key-init"),
        channel_name: cc11001100_hook("channel_name", "pc_hot_word", "object-key-init"),
        size: cc11001100_hook("size", 20, "object-key-init"),
        user_name: cc11001100_hook("user_name", this.currentUser.userName, "object-key-init"),
        platform: cc11001100_hook("platform", "pc", "object-key-init"),
        imei: cc11001100_hook("imei", o("uuid_tt_dd"), "object-key-init")
      }, "var-init");
      if (t.toolbarSearchExt) try {
        var i = cc11001100_hook("i", _typeof(t.toolbarSearchExt), "var-init");
        "object" === i ? a.toolbarSearchExt = cc11001100_hook("a.toolbarSearchExt", JSON.stringify(t.toolbarSearchExt), "assign") : "string" === i && (a.toolbarSearchExt = cc11001100_hook("a.toolbarSearchExt", t.toolbarSearchExt, "assign"));
      } catch (t) {
        void 0;
      }
      var r = cc11001100_hook("r", this, "var-init");
      e.ajax({
        url: cc11001100_hook("url", "https://silkroad.csdn.net/api/v2/assemble/list/channel/search_hot_word", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        data: cc11001100_hook("data", a, "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        success: function (t) {
          if (200 === t.code) {
            var e = cc11001100_hook("e", t.data && t.data.items || [], "var-init");
            a.toolbarSearchExt ? this.isDoublePlaceholder = cc11001100_hook("this.isDoublePlaceholder", !1, "assign") : r.isDoublePlaceholder = cc11001100_hook("r.isDoublePlaceholder", t.data && t.data.ext && t.data.ext.ab_test_ext && "1" === t.data.ext.ab_test_ext.his_foot_flag, "assign"), e.length && (r.utm_medium = cc11001100_hook("r.utm_medium", t.data.ext.utm_medium || "", "assign"), r.isDoublePlaceholder ? (r.placeholderList = cc11001100_hook("r.placeholderList", e.filter(function (t) {
              return !!t.productId && "alirecmd" === t.strategyId;
            }), "assign"), r.placeholderListRight = cc11001100_hook("r.placeholderListRight", e.filter(function (t) {
              return !!t.productId && "alirecmd" !== t.strategyId;
            }), "assign")) : (r.placeholderList = cc11001100_hook("r.placeholderList", e.filter(function (t) {
              return !!t.productId;
            }), "assign"), r.placeholderListRight = cc11001100_hook("r.placeholderListRight", null, "assign")), r.setPlaceholderInterval(r.placeholderList, r.placeholderListRight)), n && n();
          }
        },
        error: function (t) {
          void 0;
        }
      });
    },
    refreshPlaceholder: function () {
      this.setPlaceholderInterval(this.placeholderList, this.placeholderListRight, this.placeholderIndex);
    },
    setPlaceholderInterval: function (t) {
      var n = cc11001100_hook("n", this, "var-init"),
        o = cc11001100_hook("o", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, "var-init"),
        a = cc11001100_hook("a", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, "var-init"),
        i = cc11001100_hook("i", t && t.length ? a % t.length : 0, "var-init"),
        r = cc11001100_hook("r", o && o.length ? a % o.length : 0, "var-init");
      this.placeholder = cc11001100_hook("this.placeholder", t && t[i] || null, "assign"), this.placeholderRight = cc11001100_hook("this.placeholderRight", this.isDoublePlaceholder && o && o[r] || null, "assign"), setTimeout(function () {
        n.setSearchInputPlaceholder(n.placeholder, n.placeholderRight);
      }, 200), !this.isDoublePlaceholder && this.placeholder && i < 3 || this.isDoublePlaceholder && this.placeholderRight && r < 3 ? (e(".icon-fire").show(), e("#toolbar-search-input").css("textIndent", "32px")) : (e(".icon-fire").hide(), e("#toolbar-search-input").css("textIndent", "12px")), this.placeholderIndex = cc11001100_hook("this.placeholderIndex", a, "assign"), clearTimeout(this.placeholderTimeout), this.placeholderTimeout = cc11001100_hook("this.placeholderTimeout", setTimeout(function () {
        n.setPlaceholderInterval(t, o, a + 1);
      }, 5e3), "assign");
    },
    copyHotSearchData: function (t) {
      if (t) {
        var e = cc11001100_hook("e", this, "var-init");
        e.hotSearchData = cc11001100_hook("e.hotSearchData", t, "assign"), e.copyHotSearchDataTime = cc11001100_hook("e.copyHotSearchDataTime", new Date().getTime(), "assign");
      }
    },
    clearSingleSearchHistory: function (t) {
      e.ajax({
        url: cc11001100_hook("url", "https://so.csdn.net/api/v1/del_one_search_his?del_query=" + t, "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        error: function (t) {
          void 0;
        }
      });
    },
    clearSearchHistory: function () {
      this.isDoublePlaceholder && (this.placeholderList = cc11001100_hook("this.placeholderList", [], "assign")), e.ajax({
        url: cc11001100_hook("url", "https://so.csdn.net/api/v1/del_search_his", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        error: function (t) {
          void 0;
        }
      });
    },
    getSearchInputPlaceholder: function () {
      return this.placeholder ? this.placeholder && this.placeholder.productId : ~location.host.indexOf("edu") ? "搜学院课程" : "搜CSDN";
    },
    setSearchInputPlaceholder: function (t, n) {
      this.urlParamsPlaceholder = cc11001100_hook("this.urlParamsPlaceholder", t && t.reportData && t.reportData.urlParams, "assign");
      var o = cc11001100_hook("o", t && t.productId || "", "var-init"),
        a = cc11001100_hook("a", n && n.productId || "", "var-init"),
        i = cc11001100_hook("i", "", "var-init");
      this.searchInputFocus ? i = cc11001100_hook("i", o || a || "", "assign") : o && a ? (o = cc11001100_hook("o", o.slice(0, 12), "assign"), a = cc11001100_hook("a", a.slice(0, 12), "assign"), i = cc11001100_hook("i", o + " | " + a, "assign")) : i = cc11001100_hook("i", o || a || "", "assign"), this.reportPlaceholderView(t), this.reportPlaceholderView(n), i && e("#toolbar-search-input").attr("placeholder", i);
    },
    reportPlaceholderView: function (n) {
      try {
        if (!n || "csdn_ad" !== n.recommendType || n.isViewReported || e("#toolbar-search-input").val()) return;
        var o = cc11001100_hook("o", n.reportData.data, "var-init");
        o.spm = cc11001100_hook("o.spm", "3001.7499", "assign"), t.csdn.report.reportView(o), n.isViewReported = cc11001100_hook("n.isViewReported", !0, "assign");
      } catch (t) {}
    },
    isEffectiveTime: function (t) {
      if (!t) return !1;
      if (t.always) return !0;
      var e = cc11001100_hook("e", new Date().valueOf(), "var-init"),
        n = cc11001100_hook("n", new Date(t.start).valueOf(), "var-init");
      return e <= new Date(t.end).valueOf() && e >= n;
    },
    getCurrentLogoData: function (t) {
      var e = cc11001100_hook("e", this, "var-init");
      return Array.isArray(t) ? t.reduce(function (t, n) {
        return t = cc11001100_hook("t", "default" !== n.type || t ? t : n, "assign"), t = cc11001100_hook("t", e.isEffectiveTime(n.time) ? n : t, "assign");
      }, void 0) : "object" === (void 0 === t ? "undefined" : _typeof(t)) ? t : e.logoData;
    },
    getToolbarData: function (n) {
      var o = cc11001100_hook("o", this, "var-init");
      e.ajax({
        url: cc11001100_hook("url", "https://img-home.csdnimg.cn/data_json/toolbar/toolbar1105.json", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        dataType: cc11001100_hook("dataType", "JSON", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
        success: function (e) {
          void 0, o.navData = cc11001100_hook("o.navData", e.menus.slice(0, e.menus.length - 1), "assign"), o.vipData = cc11001100_hook("o.vipData", e.menus.pop(), "assign"), void 0, void 0, o.logoData = cc11001100_hook("o.logoData", o.getCurrentLogoData(e.logo), "assign"), void 0, o.background = cc11001100_hook("o.background", e.background, "assign"), o.redpackData = cc11001100_hook("o.redpackData", e.redpackData, "assign"), o.mpMenuData = cc11001100_hook("o.mpMenuData", e.mpMenuData ? e.mpMenuData : o.mpMenuData, "assign"), o.renderBtnData = cc11001100_hook("o.renderBtnData", e.renderBtnData ? e.renderBtnData : [], "assign"), t.csdn.toolbarData = cc11001100_hook("t.csdn.toolbarData", e, "assign"), n && n.call(o);
        },
        error: function (t) {
          n && n.call(o);
        }
      });
    },
    hasShowMpMenu: function () {
      return !("normal" !== D || !this.mpMenuData.isShow || void 0 === this.mpMenuData.maxSegment) && o("c_segment") <= parseInt(this.mpMenuData.maxSegment);
    },
    getMpMenuIcon: function () {
      if (!this.mpMenuData.isShow) return "";
      if (this.mpMenuData.icon && this.mpMenuData.icon.length > 0) {
        return '<img src="' + (this.mpMenuData.icon[_] ? this.mpMenuData.icon[_] : this.mpMenuData.icon[0]) + '" class="icon-mp-menu">';
      }
      return "";
    },
    buriedPoint: function (t) {
      try {
        csdn && csdn.report && csdn.report.reportClick(t);
      } catch (t) {
        void 0;
      }
    },
    reportViewCheck: function () {
      try {
        csdn && csdn.report && csdn.report.viewCheck();
      } catch (t) {
        void 0;
      }
    },
    setDocumentTitle: function (t) {
      var e = cc11001100_hook("e", document.title, "var-init");
      t > 0 && (document.title = cc11001100_hook("document.title", "(" + t + "条消息) " + e, "assign"));
    },
    setRemind: function (t, n) {
      var o = cc11001100_hook("o", e("#toolbar-remind"), "var-init"),
        a = cc11001100_hook("a", e(".toolbar-inside").hasClass("exp2"), "var-init");
      !this.hasLogin && t && o.attr("href", t), o.html('<span class="pos-rel">' + (a ? "" : "消息") + (n > 0 ? '<i class="toolbar-msg-count"></i>' : "") + "</span>");
    },
    setAnimate: function (t, e, n) {
      n && t.animate(e, n) || t.css(e);
    },
    toggleNavItems: function (t, e) {
      var n = cc11001100_hook("n", this.$NavBox.find(">li").eq(t).nextAll(), "var-init");
      e && n.show() || n.hide();
    },
    getNavItemsWidthByCount: function (t) {
      var n = cc11001100_hook("n", 0, "var-init");
      return this.$NavBox.find(">li").eq(t).prevAll().each(function (t, o) {
        n += cc11001100_hook("n", e(this).width(), "assign");
      }), n += cc11001100_hook("n", 4, "assign");
    },
    toggleSearchBarInput: function (t) {
      var n = cc11001100_hook("n", e(document).width(), "var-init");
      if (!(n > 1440)) {
        var o = cc11001100_hook("o", 5, "var-init");
        1366 < n && n <= 1440 ? o = cc11001100_hook("o", 6, "assign") : 1280 < n && n <= 1366 ? o = cc11001100_hook("o", 5, "assign") : n <= 1280 && (o = cc11001100_hook("o", 4, "assign"));
        var a = cc11001100_hook("a", this.getNavItemsWidthByCount(o), "var-init");
        "focus" === t ? this.setAnimate(this.$NavBox, {
          width: cc11001100_hook("width", a, "object-key-init")
        }, 200) : this.setAnimate(this.$NavBox, {
          width: cc11001100_hook("width", "auto", "object-key-init")
        }, 0), this.toggleNavItems(o - 1, "focus" !== t);
      }
    },
    getToolbarStyle: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        e = cc11001100_hook("e", t.background, "var-init"),
        n = cc11001100_hook("n", ["default", "dark", "home"], "var-init"),
        o = cc11001100_hook("o", n[_], "var-init");
      if (e) {
        var a = cc11001100_hook("a", e[o], "var-init");
        if (void 0, a.indexOf("http") >= 0) return "background: url(" + a + ") no-repeat center center;background-size: cover;";
        if (a.indexOf("#") >= 0) return "background: " + a;
      }
    },
    setToolbarMsgCountByType: function (t) {
      var n = cc11001100_hook("n", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, "var-init");
      if (t && this.hasLogin) {
        var o = cc11001100_hook("o", e(".toolbar-btn-msg").find('a[data-type="' + t + '"]'), "var-init");
        if (0 !== o.length) {
          o.find("i").remove(), o.html('<span class="pos-rel">' + o.text() + (n > 0 ? "<i></i>" : "") + "</span>");
          var a = cc11001100_hook("a", e(".toolbar-btn-msg").find(".toolbar-subMenu a i").length, "var-init");
          void 0, this.setRemind("", a);
        }
      }
    },
    chain: function () {
      var t = cc11001100_hook("t", o("UserName"), "var-init");
      return f("toolbarReady"), t ? this.getUnreadMsg() : this.renderMsgMenu(), i("announcement"), i("announcement_new"), i("searchHistoryArray"), i("searchHistoryArray-new"), this;
    }
  }, "assign"), function () {
    var t = cc11001100_hook("t", e('meta[name="toolbar"]'), "var-init"),
      o = cc11001100_hook("o", "", "var-init"),
      a = cc11001100_hook("a", 0, "var-init"),
      i = cc11001100_hook("i", 0, "var-init");
    if (t.length) {
      var r = cc11001100_hook("r", t.attr("content") || {}, "var-init");
      r = cc11001100_hook("r", JSON.parse(r), "assign"), a = cc11001100_hook("a", r.type || a, "assign"), D = cc11001100_hook("D", r.model || D, "assign"), i = cc11001100_hook("i", r.fixModel || i, "assign");
    } else a = cc11001100_hook("a", m("toolbarSkinType") || a, "assign");
    o = cc11001100_hook("o", "https://g.csdnimg.cn/common/csdn-toolbar/" + x[a] + ".css", "assign"), _ = cc11001100_hook("_", a, "assign"), S = cc11001100_hook("S", i, "assign"), -1 === location.host.indexOf("loc-toolbar") && n(o);
  }();
  var T = cc11001100_hook("T", new w(), "var-init");
  t.csdn.toolbar = cc11001100_hook("t.csdn.toolbar", {
    setToolbarMsgCountByType: cc11001100_hook("setToolbarMsgCountByType", T.setToolbarMsgCountByType.bind(T), "object-key-init"),
    configuration_tool_parameterv: cc11001100_hook("configuration_tool_parameterv", h, "object-key-init"),
    renderSeasrchBox: cc11001100_hook("renderSeasrchBox", T.outPutSearchMethod.bind(T), "object-key-init")
  }, "assign");
}(window, jQuery), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t.some(function (t) {
      return "*" === t || !!~location.href.indexOf(t);
    });
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t.some(function (t) {
      return new RegExp("^http(s)?:\\/\\/(" + t + ")(\\/|\\/\\?)?(spm=\\S*)?$").test(location.href);
    });
  }
  var n = cc11001100_hook("n", function () {
    function t() {
      _classCallCheck(this, t), this.active = cc11001100_hook("this.active", {}, "assign"), this.loginUrl = cc11001100_hook("this.loginUrl", "https://passport.csdn.net/account/login?from=" + encodeURIComponent(window.location.href), "assign");
    }
    return _createClass(t, [{
      key: cc11001100_hook("key", "init", "object-key-init"),
      value: function () {
        this.getActiveData();
      }
    }, {
      key: cc11001100_hook("key", "getActiveData", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", this, "var-init"),
          e = cc11001100_hook("e", this, "var-init");
        $.ajax({
          url: cc11001100_hook("url", "https://mp-activity.csdn.net/activity/report", "object-key-init"),
          type: cc11001100_hook("type", "post", "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json; charset=utf-8", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          data: cc11001100_hook("data", JSON.stringify({
            pageUrl: cc11001100_hook("pageUrl", window.location.href, "object-key-init"),
            action: cc11001100_hook("action", "pageView", "object-key-init"),
            platform: cc11001100_hook("platform", "pc", "object-key-init")
          }), "object-key-init"),
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          success: function (n) {
            void 0;
            var o = cc11001100_hook("o", n.data, "var-init");
            return e.active = cc11001100_hook("e.active", o, "assign"), !(!o.matched || "popWindow" !== o.operationCommand) && (o.ext.report && -1 !== o.ext.report.indexOf("exposure") && window.csdn && window.csdn.report && window.csdn.report.reportView({
              spm: cc11001100_hook("spm", t.active.ext.spm, "object-key-init")
            }), "center" === o.ext.position ? (e.renderCenterDom(), e.renderCenterCss()) : "right" === o.ext.position ? (e.renderRightDom(), e.renderRightCss()) : (e.renderCenterDom(), e.renderCenterCss()), !1);
          },
          error: function (t) {
            void 0;
          }
        });
      }
    }, {
      key: cc11001100_hook("key", "handleClose", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", $("#csdn-active-dialog .closeBtn"), "var-init"),
          e = cc11001100_hook("e", $("#csdn-active-mask"), "var-init");
        void 0, t.click(function () {
          void 0, $("#csdn-active-mask").remove(), $("#csdn-active-dialog").remove();
        }), e.click(function () {
          void 0, $("#csdn-active-mask").remove(), $("#csdn-active-dialog").remove();
        });
      }
    }, {
      key: cc11001100_hook("key", "handleJump", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", $("#csdn-active-dialog .active_main"), "var-init");
        void 0, t.click(function () {
          void 0, $("#csdn-active-mask").remove(), $("#csdn-active-dialog").remove();
        });
      }
    }, {
      key: cc11001100_hook("key", "renderCenterDom", "object-key-init"),
      value: function () {
        void 0;
        var t = cc11001100_hook("t", '\n        <div id="csdn-active-mask" class="' + (this.active.ext.hasMask ? "" : "hide") + '"></div>\n        <div id="csdn-active-dialog">\n        <div class="dialog__wrapper">\n            <a \n              ' + ("close" !== this.active.ext.clickAction ? "href='" + (this.active.ext.clickUrl || this.loginUrl) + "'" : "") + "\n              " + (this.active.ext.report && -1 !== this.active.ext.report.indexOf("click") ? 'data-report-click=\'{"spm":' + JSON.stringify(this.active.ext.spm) + "}'" : "") + '\n              data-report-query="spm=' + this.active.ext.spm + '"\n              class="active_main"><img src="' + this.active.ext.backgroundPicUrl + '" alt=""></a>\n            <span class="closeBtn close_icon1"></span>\n          </div>\n        </div>\n      ', "var-init");
        if ($("body").append(t), this.handleClose(), this.handleJump(), -1 != this.active.ext.popUpDuration) var e = cc11001100_hook("e", setTimeout(function () {
          $("#csdn-active-mask").remove(), $("#csdn-active-dialog").remove(), clearTimeout(e);
        }, 1e3 * this.active.ext.popUpDuration), "var-init");
      }
    }, {
      key: cc11001100_hook("key", "renderRightDom", "object-key-init"),
      value: function () {
        void 0;
        var t = cc11001100_hook("t", '\n        <div id="csdn-active-mask" class="' + (this.active.ext.hasMask ? "" : "hide") + '"></div>\n        <div id="csdn-active-dialog">\n        <div class="dialog__wrapper">\n            <span class="closeBtn close_icon2"></span>\n            <a \n            ' + ("close" !== this.active.ext.clickAction ? "href='" + (this.active.ext.clickUrl || this.loginUrl) + "'" : "") + "\n            " + (this.active.ext.report && -1 !== this.active.ext.report.indexOf("click") ? 'data-report-click=\'{"spm":' + JSON.stringify(this.active.ext.spm) + "}'" : "") + '\n            data-report-query="spm=' + this.active.ext.spm + '"\n            class="active_main"><img src="' + this.active.ext.backgroundPicUrl + '" alt=""></a>\n          </div>\n        </div>\n      ', "var-init");
        if ($("body").append(t), this.handleClose(), this.handleJump(), -1 != this.active.ext.popUpDuration) var e = cc11001100_hook("e", setTimeout(function () {
          $("#csdn-active-mask").remove(), $("#csdn-active-dialog").remove(), clearTimeout(e);
        }, 1e3 * this.active.ext.popUpDuration), "var-init");
      }
    }, {
      key: cc11001100_hook("key", "renderCenterCss", "object-key-init"),
      value: function () {
        void 0;
        var t = cc11001100_hook("t", $('<style type="text/css">\n                    #csdn-active-mask {\n                      position: fixed;\n                      width: 100%;\n                      height: 100%;\n                      background: rgba(0, 0, 0, 0.5);\n                      overflow: hidden;\n                      top: 0;\n                      left: 0;\n                      z-index: 2147483645;\n                    }\n                    .hide {\n                      display: none;\n                    }\n                    #csdn-active-dialog {\n                      position: fixed;\n                      overflow: hidden;\n                      top: 0;\n                      left: 0;\n                      z-index: 2147483646;\n                    }\n                    #csdn-active-dialog .dialog__wrapper {\n                      \n                      width: 400px;\n                      position: fixed;;\n                      top: 50%;\n                      left: 50%;\n                      margin-left: -200px;\n                      margin-top: -200px;\n                      box-sizing: border-box;\n                    }\n                    #csdn-active-dialog .dialog__wrapper .active_main {\n                      width: 400px;\n                      height: 400px;\n                      cursor: pointer;\n                    }\n                    #csdn-active-dialog .dialog__wrapper .active_main img{\n                      width: 400px;\n                      height: 400px;\n                    }\n                    #csdn-active-dialog .dialog__wrapper .closeBtn{\n                      display: block;\n                      width: 32px;\n                      height: 32px;\n                      margin: 24px auto;\n                      cursor: pointer;\n                    }\n                    #csdn-active-dialog .dialog__wrapper .close_icon1 {\n                      background: url("https://img-home.csdnimg.cn/images/20211202112243.png") no-repeat center center;\n                      background-size: contain;\n                    }\n                    #csdn-active-dialog .dialog__wrapper .close_icon2 {\n                      background: url("https://img-home.csdnimg.cn/images/20211208022627.png") no-repeat center center;\n                      background-size: contain;\n                    }\n                  </style>'), "var-init");
        document.head.insertBefore($(t)[0], document.head.getElementsByTagName("title")[0]);
      }
    }, {
      key: cc11001100_hook("key", "renderRightCss", "object-key-init"),
      value: function () {
        void 0;
        var t = cc11001100_hook("t", $('<style type="text/css">\n                      #csdn-active-mask {\n                        position: fixed;\n                        width: 100%;\n                        height: 100%;\n                        background: rgba(0, 0, 0, 0.5);\n                        overflow: hidden;\n                        top: 0;\n                        left: 0;\n                        z-index: 2147483645;\n                      }\n                      .hide {\n                        display: none;\n                      }\n                      #csdn-active-dialog {\n                        position: fixed;\n                        overflow: hidden;\n                        top: 0;\n                        left: 0;\n                        z-index: 2147483646;\n                      }\n                      #csdn-active-dialog .dialog__wrapper {\n                        \n                        width: 343px;\n                        position: fixed;\n                        top: 48px;\n                        right: 270px;\n                        box-sizing: border-box;\n                      }\n                      #csdn-active-dialog .dialog__wrapper .active_main {\n                        display: block;\n                        overflow: hidden;\n                        width: 343px;\n                        height: 80px;\n                        cursor: pointer;\n                      }\n                      #csdn-active-dialog .dialog__wrapper .active_main img{\n                        width: 343px;\n                        height: 80px;\n                      }\n                      #csdn-active-dialog .dialog__wrapper .closeBtn{\n                        display: block;\n                        width: 28px;\n                        height: 28px;\n                        cursor: pointer;\n                        float:right\n                      }\n                      #csdn-active-dialog .dialog__wrapper .close_icon1 {\n                        background: url("https://img-home.csdnimg.cn/images/20211202112243.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                      #csdn-active-dialog .dialog__wrapper .close_icon2 {\n                        background: url("https://img-home.csdnimg.cn/images/20211208022627.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                  </style>'), "var-init");
        document.head.insertBefore($(t)[0], document.head.getElementsByTagName("title")[0]);
      }
    }]), t;
  }(), "var-init");
  $(document).on("toolbarReady", function (o) {
    var a = cc11001100_hook("a", window.csdn.toolbarData || {}, "var-init"),
      i = cc11001100_hook("i", a.activeData, "var-init");
    void 0, i && i.whiteList && t(i.whiteList) && (void 0, new n().init()), i && i.whiteRegexList && e(i.whiteRegexList) && (void 0, new n().init());
  });
}(), function () {
  !function () {
    function t() {
      _classCallCheck(this, t);
    }
    _createClass(t, [{
      key: cc11001100_hook("key", "init", "object-key-init"),
      value: function () {
        "www.csdn.net" === window.location.host && "/" === window.location.pathname && this.renderStyle();
      }
    }, {
      key: cc11001100_hook("key", "renderStyle", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", document.createElement("style"), "var-init");
        t.innerHTML = cc11001100_hook("t.innerHTML", "\n        html {\n          -webkit-filter: grayscale(100%); /* webkit */\n          -moz-filter: grayscale(100%); /*firefox*/\n          -ms-filter: grayscale(100%); /*ie9*/\n          -o-filter: grayscale(100%); /*opera*/\n          filter: grayscale(100%);\n          filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);\n        }\n        body{\n          filter:gray; /*ie9- */\n          background : none!important;\n        }\n      ", "assign"), document.querySelector("head").appendChild(t);
      }
    }]);
  }();
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t && "UD" == t) return decodeURIComponent(o[1]);
      if (o[0] == t) return decodeURI(o[1]);
    }
  }
  function e(t, e, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var o = cc11001100_hook("o", new Date(), "var-init");
    if (-1 == n) return void (document.cookie = cc11001100_hook("document.cookie", t + "=" + escape(e) + ";domain=.csdn.net;path=/", "assign"));
    if (n) o.setTime(o.getTime() + n);else {
      o.setTime(o.getTime() + 2592e6);
    }
    document.cookie = cc11001100_hook("document.cookie", t + "=" + escape(e) + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/", "assign");
  }
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", new Date(), "var-init");
    document.cookie = cc11001100_hook("document.cookie", t + "=" + escape("1") + ";max-age=0;expires=" + e.toGMTString() + ";domain=.csdn.net;path=/", "assign");
  }
  function o(t) {
    cc11001100_hook("t", t, "function-parameter");
    try {
      t && $(document).trigger(t);
    } catch (t) {
      void 0;
    }
  }
  function a(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", [603, 604, 605, 606, 607], "var-init");
    void 0 === e && (e = cc11001100_hook("e", (d ? 539 : 536) + "," + n.toString(), "assign"));
    var o = cc11001100_hook("o", "https://kunpeng.csdn.net/ad/json/list?positions=" + e, "var-init");
    $.ajax({
      url: cc11001100_hook("url", o, "object-key-init"),
      type: cc11001100_hook("type", "get", "object-key-init"),
      dataType: cc11001100_hook("dataType", "JSON", "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (n) {
        if (200 === n.code && n.data) {
          if (n.data.length > 0) {
            var o = cc11001100_hook("o", n.data[0], "var-init");
            if (-1 === [536, 539, 541].indexOf(o.adPositionId)) return;
            switch (o.adType) {
              case "baodeng":
                var d = cc11001100_hook("d", n.data.reduce(function (t, e, n) {
                  return 0 === n ? t = cc11001100_hook("t", Object.assign({}, e, {
                    children: cc11001100_hook("children", [], "object-key-init")
                  }), "assign") : t.children.push(e), t;
                }, {}), "var-init");
                void 0, i(d);
                break;
              case "code":
                r(o);
            }
          }
        } else csdn && csdn.toolbarData && csdn.toolbarData.advert && csdn.toolbarData.advert.checkPlugin && 541 !== e && setTimeout(function () {
          !s() && !c() || l() || a(t, 541);
        }, 5e3);
      }
    });
  }
  function i(a) {
    cc11001100_hook("a", a, "function-parameter");
    var i = cc11001100_hook("i", !!t("is_advert"), "var-init");
    if (!a) return void n("is_advert");
    var r = cc11001100_hook("r", "width:100%; height:100%; background-image: url(" + a.imgUrl + "); background-size: auto 80px;background-repeat: no-repeat; background-position: center center;", "var-init"),
      s = cc11001100_hook("s", "width:100%; height:100%; background-image: url(" + a.bigImgUrl + "); background-size: auto 320px;background-repeat: no-repeat; background-position: center center;", "var-init"),
      c = cc11001100_hook("c", $('<div class="toolbar-advert">\n            <a href="' + a.clickUrl + '" target="_blank" style="background: ' + a.backgroundColor + ';" class="toolbar-advert-default ' + (i ? "" : "toolbar-advert-lg") + '"><div style="' + (i ? r : s) + '"></div>\n              ' + (a.children.length ? '<span class="toolbar-advert-more">' + a.children.map(function (t) {
        return '<span class="toolbar-advert-more-item" data-adress="' + t.clickUrl + '" style="background-image: url(' + t.imgUrl + '); background-size: contain;background-repeat: no-repeat; background-position: center center;"><img style="width:0;height:0;display:none;" src="' + t.exposureUrl + '"/></span>';
      }).join("") + "</span>" : "") + '\n            </a>\n            <span class="toolbar-adver-btn">关闭</span>\n            <img style="width:0;height:0;display:none;" src="' + a.exposureUrl + '"/>\n          </div>'), "var-init");
    c.find(".toolbar-adver-btn").click(function (t) {
      return c.remove(), o("toolbarHeightChange"), a.closeAdClickUrl && $.ajax({
        url: cc11001100_hook("url", a.closeAdClickUrl, "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        dataType: cc11001100_hook("dataType", "JSON", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (t) {}
      }), !1;
    }), c.on("click", ".toolbar-advert-more-item", function (t) {
      var e = cc11001100_hook("e", $(this).data("adress") ? $(this).data("adress") : "", "var-init");
      return e && window.open(e, "_blank"), t.stopPropagation(), !1;
    }), $("#csdn-toolbar").prepend(c), o("toolbarHeightChange"), !i && e("is_advert", "1", 864e5), c.on("transitionend", function (t) {
      o("toolbarHeightChange");
    }), setTimeout(function () {
      !i && $(".toolbar-advert-default").removeClass("toolbar-advert-lg").find("div").attr("style", r), o("toolbarHeightChange");
    }, 1e3 * (a.showSeconds || 5));
  }
  function r(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", $('<div class="toolbar-advert"></div>'), "var-init");
    if (t.content && e.append(t.content), t.exposureUrl) {
      var n = cc11001100_hook("n", $('<img width="0" height="0" style="display:none;" src="' + t.exposureUrl + '">'), "var-init");
      e.append(n);
    }
    o("toolbarHeightChange"), $("#csdn-toolbar").prepend(e), setTimeout(function () {
      o("toolbarHeightChange");
    }, 200);
  }
  function s() {
    var t = cc11001100_hook("t", $('<div class="adsbox ad_box ads_box"></div>'), "var-init");
    if ($("#csdn-toolbar").append(t), t.is(":hidden")) return t.remove(), !0;
    t.remove();
  }
  function c() {
    return $("#greenerSettings").length;
  }
  function l() {
    return $("#open_chromePlugin_tab").length;
  }
  var d = cc11001100_hook("d", !1, "var-init");
  $(document).on("toolbarReady", function (t) {
    void 0, void 0, void 0, (window.csdn.toolbarData.advert.blacklist || []).indexOf(location.host) >= 0 || a();
  });
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t && "UD" == t) return decodeURIComponent(o[1]);
      if (o[0] == t) return decodeURI(o[1]);
    }
  }
  function e(t, e, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var o = cc11001100_hook("o", new Date(), "var-init");
    if (-1 == n) return void (document.cookie = cc11001100_hook("document.cookie", t + "=" + e + ";domain=.csdn.net;path=/", "assign"));
    if (n) o.setTime(o.getTime() + n);else {
      o.setTime(o.getTime() + 2592e6);
    }
    document.cookie = cc11001100_hook("document.cookie", t + "=" + e + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/", "assign");
  }
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t.some(function (t) {
      return "*" === t || !!~location.href.indexOf(t);
    });
  }
  var o = cc11001100_hook("o", function () {
    function n() {
      _classCallCheck(this, n), this.allData = cc11001100_hook("this.allData", [], "assign"), this.barrageList = cc11001100_hook("this.barrageList", [], "assign"), this.barrageDomArr = cc11001100_hook("this.barrageDomArr", [], "assign"), this.fnArr = cc11001100_hook("this.fnArr", [], "assign"), this.barrageBoxWidth = cc11001100_hook("this.barrageBoxWidth", 400, "assign"), this.pollDelay = cc11001100_hook("this.pollDelay", 30, "assign"), this.timer = cc11001100_hook("this.timer", null, "assign"), this.errorCount = cc11001100_hook("this.errorCount", 0, "assign"), this.toolbarHeight = cc11001100_hook("this.toolbarHeight", 44, "assign");
    }
    return _createClass(n, [{
      key: cc11001100_hook("key", "init", "object-key-init"),
      value: function () {
        "1" !== t("hideBarrage") && (this.getToolbarHeight(), this.insertCss(), this.queryBarrage(), this.bindToolbarHeightChange(), this.handlePageVisibilityChange());
      }
    }, {
      key: cc11001100_hook("key", "queryBarrage", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", this, "var-init");
        $.ajax({
          url: cc11001100_hook("url", "https://barrage-kunpeng.csdn.net/api/barrage/list", "object-key-init"),
          type: cc11001100_hook("type", "get", "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          success: function (e) {
            if (200 === e.code) {
              if (t.pollDelay = cc11001100_hook("t.pollDelay", e.pollDelay, "assign"), !e.data.length) return void t.setTimer();
              t.allData = cc11001100_hook("t.allData", e.data, "assign"), t.barrageList = cc11001100_hook("t.barrageList", t.getBarrageList(), "assign"), t.renderBarrage(), t.start(), t.insertAdCookie(), t.resetErrorCount();
            } else 201 !== e.code && t.handleQueryError();
          },
          error: function (e) {
            t.handleQueryError();
          }
        });
      }
    }, {
      key: cc11001100_hook("key", "handleQueryError", "object-key-init"),
      value: function () {
        this.errorCount++, this.setTimer(), this.errorCount > 10 && clearTimeout(this.timer);
      }
    }, {
      key: cc11001100_hook("key", "getBarrageList", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", this.allData.slice(0, 3), "var-init");
        return this.allData = cc11001100_hook("this.allData", this.allData.slice(3), "assign"), t.map(function (t) {
          return Object.assign({}, t, {
            x: cc11001100_hook("x", 0, "object-key-init"),
            speed: cc11001100_hook("speed", 2 + Number(Math.random().toFixed(1)), "object-key-init"),
            stop: cc11001100_hook("stop", !1, "object-key-init")
          });
        });
      }
    }, {
      key: cc11001100_hook("key", "start", "object-key-init"),
      value: function () {
        for (var t = cc11001100_hook("t", this, "var-init"), n = cc11001100_hook("n", document.documentElement.clientWidth, "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < this.barrageDomArr.length; a++) !function (a) {
          t.fnArr.push(function () {
            if (t.barrageList[a].x -= cc11001100_hook("t.barrageList[a].x", t.barrageList[a].speed, "assign"), t.barrageDomArr[a].style.transform = cc11001100_hook("t.barrageDomArr[a].style.transform", "translateX(" + t.barrageList[a].x + "px)", "assign"), n + t.barrageList[a].x >= -t.barrageBoxWidth && !t.barrageList[a].stop) requestAnimationFrame(t.fnArr[a]);else if (n + t.barrageList[a].x < -t.barrageBoxWidth && !t.barrageList[a].stop && ++o === t.barrageDomArr.length) {
              if (t.fnArr = cc11001100_hook("t.fnArr", [], "assign"), $("#barrageBox").remove(), !t.checkIsPassport()) {
                var i = cc11001100_hook("i", t.getTomorrowTimeRemaining(), "var-init");
                e("ad_last_time", Date.now(), i);
              }
              t.barrageList = cc11001100_hook("t.barrageList", t.getBarrageList(), "assign"), t.barrageList.length ? (t.renderBarrage(), t.start(), t.insertAdCookie()) : t.setTimer();
            }
          });
        }(a);
        for (var i = cc11001100_hook("i", 0, "var-init"); i < this.barrageList.length; i++) !function (e) {
          requestAnimationFrame(t.fnArr[e]), setTimeout(function () {
            window.csdn.report.reportView({
              mod: cc11001100_hook("mod", "popu_894", "object-key-init"),
              extend1: cc11001100_hook("extend1", t.barrageList[e].barrageId, "object-key-init"),
              dest: cc11001100_hook("dest", t.barrageList[e].clickUrl, "object-key-init")
            });
          }, 1e3);
        }(i);
      }
    }, {
      key: cc11001100_hook("key", "insertCss", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", document.getElementsByTagName("head")[0], "var-init"),
          e = cc11001100_hook("e", document.createElement("style"), "var-init");
        e.type = cc11001100_hook("e.type", "text/css", "assign"), e.appendChild(document.createTextNode("\n        #barrageBox .barrage-item {\n          position:relative;\n          display: flex;\n          align-items: center;\n          height: 40px;\n          margin-bottom: 62px;\n          border-radius: 0 100px 100px 0;\n          width: fit-content;\n        }\n        #barrageBox .barrage-item.barrage-link-hide {\n          visibility: hidden;\n        }\n        #barrageBox .barrage-item .barrage-follow {\n          cursor: pointer;\n          position: absolute;\n          left: 8px;\n          bottom: -9px;\n          z-index: 999;\n          border: none;\n          outline: none;\n          font-size: 12px;\n          font-weight: 500;\n          line-height: 17px;\n          color: #FFFFFF;\n          -webkit-background-clip: text;\n          -webkit-text-fill-color: transparent;\n        }\n        #barrageBox .barrage-item .barrage-follow.is-follow {\n          left: 2px\n        }\n        #barrageBox .barrage-item .barrage-link {\n          position: relative;\n          display: flex;\n          align-items: center;\n          color: #fff;\n          font-size: 14px;\n          font-weight: 500;\n          height: 100%;\n          padding-right: 24px;\n          min-width: 294px;\n        }\n        #barrageBox .barrage-item .barrage-link img {\n          width: 38px;\n          height: 38px;\n          display: block;\n          border-radius: 50%;\n          margin-right: 27px;\n        }\n        #barrageBox .barrage-item .barrage-link .barrage-content {\n          max-width: 592px;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n        }\n        #barrageBox .barrage-item .barrage-link .barrage-bg {\n          width: 320px;\n          height: 80px;\n          position: absolute;\n          left: -26px;\n          top: 50%;\n          transform: translateY(-50%);\n        }\n        #barrageBox .barrage-item .barrage-right {\n          position: relative;\n          height: 100%;\n          width: 44px;\n          display: flex;\n          align-items: center;\n        }\n        #barrageBox .barrage-item .barrage-right .barrage-close {\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          background: url('https://img-home.csdnimg.cn/images/20201104030927.png') no-repeat center;\n          background-size: 16px 16px;\n          cursor: pointer;\n        }\n        #barrageBox .barrage-item .barrage-right .barrage-right-border {\n          width: 1px;\n          height: 20px;\n          background: rgba(255, 255, 255, 0.3);\n        }\n      ")), t.appendChild(e);
      }
    }, {
      key: cc11001100_hook("key", "renderBarrage", "object-key-init"),
      value: function () {
        for (var n = cc11001100_hook("n", "", "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < this.barrageList.length; o++) {
          var a = cc11001100_hook("a", this.barrageList[o].barrageId, "var-init"),
            i = cc11001100_hook("i", this.barrageList[o].clickUrl, "var-init");
          n += cc11001100_hook("n", '\n          <div class="barrage-item" style="background-color: ' + this.barrageList[o].bgColor + "; box-shadow: -12px 4px 14px 0 " + this.barrageList[o].shadowColor + ';">\n          ' + (this.barrageList[o].type ? "" : '<button class="barrage-follow" data-username="' + this.barrageList[o].username + '">关注</button>') + '\n            <a class="' + (this.barrageList[o].type ? "barrage-link barrage-link-redpack" : "barrage-link") + '" href="' + (this.barrageList[o].type ? "javascript:;" : i) + '" target="' + (this.barrageList[o].type ? "" : "_blank") + '" data-report-click=\'{"mod":"popu_894","extend1": "' + a + '", "dest": "' + i + '"}\'>\n              <img src="' + this.barrageList[o].headImage + '" alt="">\n              <div class="barrage-content">' + this.barrageList[o].nickname.slice(0, 10) + "：" + this.barrageList[o].content + '</div>\n              <div class="barrage-bg" style="background: url(' + this.barrageList[o].bgImage + ') no-repeat center; background-size: cover;"></div>\n            </a>\n            <div class="barrage-right">\n              <div class="barrage-close"></div>\n              <div class="barrage-right-border"></div>\n            </div>\n          </div>\n        ', "assign");
        }
        $("#csdn-toolbar").append('<div id="barrageBox" style="position: fixed; z-index: 99999; top: ' + (this.toolbarHeight + 32) + 'px;">' + n + "</div>"), this.barrageDomArr = cc11001100_hook("this.barrageDomArr", [].concat(_toConsumableArray(document.querySelectorAll("#barrageBox .barrage-item"))), "assign");
        var r = cc11001100_hook("r", $("#barrageBox"), "var-init");
        this.barrageBoxWidth = cc11001100_hook("this.barrageBoxWidth", r.width() + 26, "assign"), r.css({
          right: cc11001100_hook("right", -this.barrageBoxWidth + "px", "object-key-init")
        });
        var s = cc11001100_hook("s", this, "var-init");
        r.on("mouseenter", ".barrage-item", function () {
          s.barrageList[$(this).index()].stop = cc11001100_hook("s.barrageList[$(this).index()].stop", !0, "assign");
        }), r.on("mouseleave", ".barrage-item", function () {
          s.barrageList[$(this).index()].stop = cc11001100_hook("s.barrageList[$(this).index()].stop", !1, "assign"), requestAnimationFrame(s.fnArr[$(this).index()]);
        }), r.on("click", ".barrage-close", function () {
          $("#barrageBox").remove(), clearTimeout(s.timer), e("hideBarrage", "1", s.getTomorrowTimeRemaining());
        }), r.on("click", ".barrage-follow", function () {
          $(this).hasClass("is-follow") || s.follow(s.barrageList[$(this).parent().index()].username);
        }), r.on("click", ".barrage-link.barrage-link-redpack", function () {
          if (t("UserName")) {
            if (!$(this).hasClass("already")) {
              var e = cc11001100_hook("e", $(this).parent().index(), "var-init");
              window.csdn.barrageRedpack && window.csdn.barrageRedpack.open(s.barrageList[e].typeId), $(this).addClass("already").parent().addClass("barrage-link-hide");
            }
          } else window.location.href = cc11001100_hook("window.location.href", "https://passport.csdn.net/account/login?from=" + encodeURIComponent(window.location.href), "assign");
        });
      }
    }, {
      key: cc11001100_hook("key", "insertAdCookie", "object-key-init"),
      value: function () {
        var n = cc11001100_hook("n", t("ad_barrage_ids") || "", "var-init"),
          o = cc11001100_hook("o", n ? n.split(",") : [], "var-init");
        for (o = cc11001100_hook("o", [].concat(_toConsumableArray(new Set(o.concat(this.barrageList.filter(function (t) {
          return t.isAddCookie;
        }).map(function (t) {
          return t.barrageId;
        }))))), "assign"); o.length > 500;) o.shift();
        e("ad_barrage_ids", o.join(","), 864e5);
      }
    }, {
      key: cc11001100_hook("key", "setTimer", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", this, "var-init");
        clearTimeout(this.timer), this.timer = cc11001100_hook("this.timer", setTimeout(function () {
          t.queryBarrage();
        }, 1e3 * this.pollDelay), "assign");
      }
    }, {
      key: cc11001100_hook("key", "resetErrorCount", "object-key-init"),
      value: function () {
        this.errorCount = cc11001100_hook("this.errorCount", 0, "assign");
      }
    }, {
      key: cc11001100_hook("key", "bindToolbarHeightChange", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", this, "var-init");
        $(document).on("toolbarHeightChange", function () {
          t.getToolbarHeight();
          var e = cc11001100_hook("e", $("#barrageBox"), "var-init");
          e.length && e.css("top", t.toolbarHeight + 32 + "px");
        });
      }
    }, {
      key: cc11001100_hook("key", "getToolbarHeight", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", $("#csdn-toolbar"), "var-init");
        this.toolbarHeight = cc11001100_hook("this.toolbarHeight", t.length ? t.height() : 44, "assign");
      }
    }, {
      key: cc11001100_hook("key", "handlePageVisibilityChange", "object-key-init"),
      value: function () {
        var t,
          e,
          n = cc11001100_hook("n", this, "var-init");
        void 0 !== document.hidden ? (t = cc11001100_hook("t", "hidden", "assign"), e = cc11001100_hook("e", "visibilitychange", "assign")) : void 0 !== document.msHidden ? (t = cc11001100_hook("t", "msHidden", "assign"), e = cc11001100_hook("e", "msvisibilitychange", "assign")) : void 0 !== document.webkitHidden && (t = cc11001100_hook("t", "webkitHidden", "assign"), e = cc11001100_hook("e", "webkitvisibilitychange", "assign"));
        var o = function () {
          document[t] ? clearTimeout(n.timer) : !$("#barrageBox").length && n.setTimer();
        };
        document.addEventListener(e, o, !1);
      }
    }, {
      key: cc11001100_hook("key", "getTomorrowTimeRemaining", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", new Date().getFullYear() + "/" + (new Date().getMonth() + 1) + "/" + (new Date().getDate() + 1), "var-init");
        return new Date(t) - Date.now();
      }
    }, {
      key: cc11001100_hook("key", "follow", "object-key-init"),
      value: function (e) {
        var n = cc11001100_hook("n", this, "var-init");
        t("UserName") ? t("UserName") !== e && $.ajax({
          url: cc11001100_hook("url", "https://me.csdn.net/api/relation/create", "object-key-init"),
          type: cc11001100_hook("type", "post", "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          data: cc11001100_hook("data", JSON.stringify({
            username: cc11001100_hook("username", e, "object-key-init")
          }), "object-key-init"),
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          success: function (t) {
            n.changeFollowStatus(e);
          },
          error: function (t) {
            n.changeFollowStatus(e);
          }
        }) : window.location.href = cc11001100_hook("window.location.href", "https://passport.csdn.net/account/login?from=" + encodeURIComponent(window.location.href), "assign");
      }
    }, {
      key: cc11001100_hook("key", "changeFollowStatus", "object-key-init"),
      value: function (t) {
        $("#barrageBox").find(".barrage-item").each(function () {
          $(this).find(".barrage-follow").attr("data-username") === t && $(this).find(".barrage-follow").addClass("is-follow").text("已关注");
        });
      }
    }, {
      key: cc11001100_hook("key", "checkIsPassport", "object-key-init"),
      value: function () {
        return !!~window.location.href.indexOf("passport.csdn.net");
      }
    }]), n;
  }(), "var-init");
  $(document).on("toolbarReady", function () {
    var t = cc11001100_hook("t", window.csdn.toolbarData.barrageData.whiteList, "var-init");
    t.length && n(t) && new o().init();
  });
}(), function () {
  function t() {
    return n("UserName");
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    window.csdn && window.csdn.loginBox && window.csdn.loginBox.show ? window.csdn.loginBox.show(t) : window.location.href = cc11001100_hook("window.location.href", "https://passport.csdn.net/account/login" + (t ? "?spm=" + t.spm : ""), "assign");
  }
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t && "UD" == t) return decodeURIComponent(o[1]);
      if (o[0] == t) return decodeURI(o[1]);
    }
  }
  var o = cc11001100_hook("o", !1, "var-init"),
    a = cc11001100_hook("a", function () {
      function t() {
        _classCallCheck(this, t), this.container = cc11001100_hook("this.container", $(".toolbar-btn.toolbar-btn-collect"), "assign"), this.data = cc11001100_hook("this.data", [], "assign"), this.history = cc11001100_hook("this.history", {}, "assign"), this.currentIndex = cc11001100_hook("this.currentIndex", 0, "assign"), this.isHideOnce = cc11001100_hook("this.isHideOnce", !1, "assign"), this.finishInit = cc11001100_hook("this.finishInit", !1, "assign"), this.timer = cc11001100_hook("this.timer", null, "assign"), this.init();
      }
      return _createClass(t, [{
        key: cc11001100_hook("key", "init", "object-key-init"),
        value: function () {
          this.getCollectionFolder();
        }
      }, {
        key: cc11001100_hook("key", "getCollectionFolder", "object-key-init"),
        value: function () {
          var t = cc11001100_hook("t", this, "var-init");
          $.ajax({
            url: cc11001100_hook("url", "https://g-api.csdn.net/community/toolbar-api/v2/favorites-list", "object-key-init"),
            type: cc11001100_hook("type", "get", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (e) {
              if (200 === e.code) {
                if (t.data = cc11001100_hook("t.data", e.data.favoritesList, "assign"), !t.data.length) return;
                t.data[0].contentList = cc11001100_hook("t.data[0].contentList", e.data.contentList, "assign"), t.render(), t.finishInit = cc11001100_hook("t.finishInit", !0, "assign");
              }
            },
            error: function (t) {
              void 0;
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "getCollectionContent", "object-key-init"),
        value: function (t) {
          var e = cc11001100_hook("e", this, "var-init");
          $.ajax({
            url: cc11001100_hook("url", "https://g-api.csdn.net/community/toolbar-api/v1/get-favorite-content?id=" + t, "object-key-init"),
            type: cc11001100_hook("type", "get", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (t) {
              200 === t.code && (e.data[e.currentIndex].contentList = cc11001100_hook("e.data[e.currentIndex].contentList", t.data, "assign"), e.render());
            },
            error: function (t) {
              void 0;
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "bindToggleFolder", "object-key-init"),
        value: function () {
          var t = cc11001100_hook("t", this, "var-init");
          $("#csdn-toolbar-collection").on("click", ".toolbar-collection-left ul li", function () {
            $(this).index() !== t.currentIndex && (t.currentIndex = cc11001100_hook("t.currentIndex", $(this).index(), "assign"), $(this).addClass("collection-folder-active").siblings().removeClass("collection-folder-active"), t.data[t.currentIndex].contentList ? t.render() : t.getCollectionContent(t.data[t.currentIndex].id));
          });
        }
      }, {
        key: cc11001100_hook("key", "bindToMore", "object-key-init"),
        value: function () {
          var t = cc11001100_hook("t", this, "var-init");
          $("#csdn-toolbar-collection").on("click", ".toolbar-collection-more", function () {
            var e = cc11001100_hook("e", 0 == t.currentIndex ? "https://i.csdn.net/#/user-center/history" : "https://i.csdn.net/#/user-center/collection-list?type=1&folder=" + t.data[t.currentIndex].id + "&key=" + (t.currentIndex - 1), "var-init");
            window.open(e, "_blank");
          });
        }
      }, {
        key: cc11001100_hook("key", "render", "object-key-init"),
        value: function () {
          if (this.finishInit) $("#csdn-toolbar-collection .toolbar-collection-right").empty().append(this.renderRight());else {
            var t = cc11001100_hook("t", '\n          <div id="csdn-toolbar-collection" class="csdn-toolbar-plugin">\n          ' + (this.data.length <= 1 ? "" : '<div class="toolbar-collection-left csdn-toolbar-scroll-box">\n          <ul>' + this.renderLeft() + "</ul>\n        </div>") + '\n            \n            <div class="toolbar-collection-right">\n              ' + this.renderRight() + '\n            </div>\n            <div class="csdn-toolbar-plugin-triangle"></div>\n          </div>\n        ', "var-init");
            this.container.append(t), 1 == this.data.length && $(".toolbar-collection-left").hide(), this.isHideOnce && $("#csdn-toolbar-collection").hide(), this.bindToggleFolder(), this.bindToMore();
          }
        }
      }, {
        key: cc11001100_hook("key", "renderLeft", "object-key-init"),
        value: function () {
          for (var t = cc11001100_hook("t", "", "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < this.data.length; e++) {
            var n = cc11001100_hook("n", this.data[e].name.replace(/</g, "&lt;").replace(/>/g, "&gt;"), "var-init");
            t += cc11001100_hook("t", "\n          <li" + (e === this.currentIndex ? ' class="collection-folder-active"' : "") + '>\n            <div class="toolbar-collection-folder-name">' + n + "</div>\n            " + (0 == e ? "" : ' <div class="toolbar-collection-folder-count">' + this.data[e].num + "</div>") + "\n          </li>\n        ", "assign");
          }
          return t;
        }
      }, {
        key: cc11001100_hook("key", "renderRight", "object-key-init"),
        value: function () {
          if (this.data[this.currentIndex].contentList.length) {
            for (var t = cc11001100_hook("t", "", "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < this.data[this.currentIndex].contentList.length; e++) {
              var n = cc11001100_hook("n", this.data[this.currentIndex].contentList[e], "var-init");
              t += cc11001100_hook("t", '\n          <li>\n            <a href="' + n.url + '" target="_blank">\n              <span ' + ("其他" === n.source ? 'class="toolbar-collection-type toolbar-collection-otherType"' : 'class="toolbar-collection-type"') + ">" + n.source + '</span>\n              <span class="toolbar-collection-title">' + n.title + "</span>\n            </a>\n          </li>\n        ", "assign");
            }
            return '<ul class="csdn-toolbar-scroll-box">' + t + "</ul>" + (this.data[this.currentIndex].num > 15 ? '<a class="toolbar-collection-more">查看更多<i></i></a>' : "");
          }
          return '\n          <div class="toolbar-collection-empty">\n            <div>空空如也</div>\n          </div>\n        ';
        }
      }, {
        key: cc11001100_hook("key", "show", "object-key-init"),
        value: function () {
          clearTimeout(this.timer), this.timer = cc11001100_hook("this.timer", setTimeout(function () {
            o && $("#csdn-toolbar-collection").stop().fadeIn(100);
          }, 150), "assign");
        }
      }, {
        key: cc11001100_hook("key", "hide", "object-key-init"),
        value: function () {
          this.isHideOnce = cc11001100_hook("this.isHideOnce", !0, "assign"), clearTimeout(this.timer), o || $("#csdn-toolbar-collection").stop().fadeOut(100);
        }
      }]), t;
    }(), "var-init"),
    i = cc11001100_hook("i", function () {
      function t() {
        _classCallCheck(this, t), this.container = cc11001100_hook("this.container", $(".toolbar-btn.toolbar-btn-collect"), "assign"), this.init();
      }
      return _createClass(t, [{
        key: cc11001100_hook("key", "init", "object-key-init"),
        value: function () {
          var t = cc11001100_hook("t", $('<div id="csdn-toolbar-collection-nologin" class="csdn-toolbar-plugin">\n      <div class="csdn-toolbar-plugin-triangle"></div>\n      <div class="csdn-toolbar-collection-top">登录即可查看浏览历史和收藏</div>\n      <a class="csdn-toolbar-loginbtn" data-report-click=\'{"spm":"3001.8845"}\'>立即登录</a>\n</div>'), "var-init");
          this.container.append(t), t.find("a.csdn-toolbar-loginbtn").on("click", function () {
            var t = cc11001100_hook("t", $(this).data("report-click"), "var-init");
            $("#csdn-toolbar-collection-nologin").hide(), t ? e(t) : e();
          });
        }
      }, {
        key: cc11001100_hook("key", "show", "object-key-init"),
        value: function () {
          clearTimeout(this.timer), this.timer = cc11001100_hook("this.timer", setTimeout(function () {
            o && $("#csdn-toolbar-collection-nologin").stop().fadeIn(100);
          }, 150), "assign");
        }
      }, {
        key: cc11001100_hook("key", "hide", "object-key-init"),
        value: function () {
          this.isHideOnce = cc11001100_hook("this.isHideOnce", !0, "assign"), clearTimeout(this.timer), o || $("#csdn-toolbar-collection-nologin").stop().fadeOut(100);
        }
      }]), t;
    }(), "var-init");
  $(document).on("toolbarReady", function () {
    if (t()) {
      var e = cc11001100_hook("e", null, "var-init"),
        n = cc11001100_hook("n", $(".toolbar-btn.toolbar-btn-collect"), "var-init");
      n.on("mouseenter", function () {
        o = cc11001100_hook("o", !0, "assign"), e ? e.show() : e = cc11001100_hook("e", new a(), "assign");
      }), n.on("mouseleave", function () {
        o = cc11001100_hook("o", !1, "assign"), e.hide();
      });
    } else {
      void 0;
      var r = cc11001100_hook("r", null, "var-init"),
        s = cc11001100_hook("s", $(".toolbar-btn.toolbar-btn-collect"), "var-init");
      s.on("mouseenter", function () {
        o = cc11001100_hook("o", !0, "assign"), r ? r.show() : r = cc11001100_hook("r", new i(), "assign");
      }), s.on("mouseleave", function () {
        o = cc11001100_hook("o", !1, "assign"), r.hide();
      });
    }
  });
}(), function () {
  function t() {
    return window.csdn.toolbarData.menus.filter(function (t) {
      return t.slider && t.slider.list && t.slider.list.length > 0;
    });
  }
  var e = cc11001100_hook("e", function () {
    function t(e) {
      cc11001100_hook("e", e, "function-parameter");
      _classCallCheck(this, t), this.sliderArray = cc11001100_hook("this.sliderArray", e, "assign"), this.init();
    }
    return _createClass(t, [{
      key: cc11001100_hook("key", "init", "object-key-init"),
      value: function () {
        this.initSliderScroll();
      }
    }, {
      key: cc11001100_hook("key", "initSliderScroll", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", this, "var-init");
        this.sliderArray.forEach(function (e) {
          $(".toolbar-subSlider-" + e.id).children().length && t.sliderScroll(".toolbar-subSlider-" + e.id, $(".toolbar-subSlider-" + e.id).children().length, e.slider.time || 4);
        });
      }
    }, {
      key: cc11001100_hook("key", "sliderScroll", "object-key-init"),
      value: function (t, e, n) {
        var o = cc11001100_hook("o", 0, "var-init"),
          a = cc11001100_hook("a", $(t), "var-init");
        setInterval(function () {
          o === e - 1 ? (o += cc11001100_hook("o", 1, "assign"), a.append(a.children().first().clone()), a.css({
            "margin-top": cc11001100_hook("margin-top", -48 * o + "px", "object-key-init"),
            transition: cc11001100_hook("transition", "all 0.8s", "object-key-init")
          })) : o >= e ? (o = cc11001100_hook("o", 0, "assign"), a.css({
            "margin-top": cc11001100_hook("margin-top", "0px", "object-key-init"),
            transition: cc11001100_hook("transition", "none", "object-key-init")
          }), a.children("a").last().remove()) : (o += cc11001100_hook("o", 1, "assign"), a.css({
            "margin-top": cc11001100_hook("margin-top", -48 * o + "px", "object-key-init"),
            transition: cc11001100_hook("transition", "all 0.8s", "object-key-init")
          }));
        }, 1e3 * n), a.on("transitionend", function () {
          o >= e && (o = cc11001100_hook("o", 0, "assign"), a.css({
            "margin-top": cc11001100_hook("margin-top", "0px", "object-key-init"),
            transition: cc11001100_hook("transition", "none", "object-key-init")
          }), a.children("a").last().remove());
        });
      }
    }]), t;
  }(), "var-init");
  $(document).on("toolbarReady", function () {
    var n = cc11001100_hook("n", t(), "var-init");
    n.length && new e(n);
  });
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t && "UD" == t) return decodeURIComponent(o[1]);
      if (o[0] == t) return decodeURI(o[1]);
    }
  }
  function e(t, e, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var o = cc11001100_hook("o", new Date(), "var-init");
    if (-1 == n) return void (document.cookie = cc11001100_hook("document.cookie", t + "=" + escape(e) + ";domain=.csdn.net;path=/", "assign"));
    if (n) o.setTime(o.getTime() + n);else {
      o.setTime(o.getTime() + 2592e6);
    }
    document.cookie = cc11001100_hook("document.cookie", t + "=" + escape(e) + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/", "assign");
  }
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t.some(function (t) {
      return "*" === t || !!~location.href.indexOf(t);
    });
  }
  function o(t) {
    cc11001100_hook("t", t, "function-parameter");
    window.csdn && window.csdn.report && window.csdn.report.reportClick(t);
  }
  function a(t) {
    cc11001100_hook("t", t, "function-parameter");
    window.csdn && window.csdn.report && window.csdn.report.reportView(t);
  }
  function i() {
    this.closeTime = cc11001100_hook("this.closeTime", 6, "assign"), this.isLogin = cc11001100_hook("this.isLogin", t("UserName"), "assign"), this.countDown = cc11001100_hook("this.countDown", "", "assign"), this.radioValue = cc11001100_hook("this.radioValue", "", "assign"), this.reportUV = cc11001100_hook("this.reportUV", "3001.6429", "assign"), this.IPurl = cc11001100_hook("this.IPurl", r ? "https://position.csdnimg.cn/oapi/get?ipAddr=1.185.10.30" : "https://position.csdnimg.cn/oapi/get", "assign"), this.certUrl = cc11001100_hook("this.certUrl", "https://i.csdn.net/#/user-center/profile?floor=edu&highSchool=true", "assign"), this.closeValue = cc11001100_hook("this.closeValue", t("UserName") ? "close" : "nologin_close", "assign"), this.isBlogDetail = cc11001100_hook("this.isBlogDetail", window.location.href.indexOf("blog.csdn.net") > -1 && window.location.href.indexOf("/article/details") > -1, "assign"), ~location.href.indexOf("blog.csdn.net") && !this.isBlogDetail || this.init();
  }
  var r = cc11001100_hook("r", !1, "var-init");
  i.prototype.init = cc11001100_hook("i.prototype.init", function () {
    this.isHighSchoolIp();
  }, "assign"), i.prototype.render = cc11001100_hook("i.prototype.render", function () {
    var t = cc11001100_hook("t", this, "var-init");
    this.$main = cc11001100_hook("this.$main", $('<div id="csdn-highschool-window" class="csdn-highschool-window ' + (this.isBlogDetail ? "csdn-highschool-blog-window" : "") + '">\n      <img class="csdn-highschool-close" src="https://g.csdnimg.cn/common/csdn-toolbar/images/high-school-close.png"/>\n      <img class="csdn-highschool-monkey" src="https://g.csdnimg.cn/common/csdn-toolbar/images/high-school-monkey.png" />\n      <span class="csdn-highschool-countdown"></span>\n    </div>'), "assign"), this.isLogin ? this.hasCert || this.renderSelect() : this.renderSelect(), this.$main.find(".csdn-highschool-close").on("click", function () {
      t.close(t.closeValue);
    }), $("body").append(this.$main), a({
      spm: cc11001100_hook("spm", this.reportUV, "object-key-init")
    });
  }, "assign"), i.prototype.renderSelect = cc11001100_hook("i.prototype.renderSelect", function () {
    var t = cc11001100_hook("t", this, "var-init"),
      e = cc11001100_hook("e", $('<div class="csdn-highschool-select">\n      <p>认证学生身份,立享VIP折扣</p>\n      <div class="highschool-container">\n        <p>您是否为学生:</p>\n        <div class="highschool-select">\n          <label class="highschool-radio">\n            <input type="radio" name="type" id="highschool-radio-isStudent" value="cert" hidden/>\n            <label for="highschool-radio-isStudent" ></label>\n            <span class="radio-name">是,立即认证</span>\n          </label>\n          <label class="highschool-radio">\n            <input type="radio" name="type" id="highschool-radio-notStudent" value="notcert" hidden/>\n            <label for="highschool-radio-notStudent" ></label>\n            <span class="radio-name">否,立即关闭</span>\n          </label>\n        </div>\n      </div>\n      <div class="highschool-submit cannot-select">确定</div>\n    </div>'), "var-init");
    e.find(".highschool-radio").on("click", function (e) {
      t.$main.find(".csdn-highschool-countdown").remove(), $(".highschool-submit").removeClass("cannot-select"), clearInterval(t.countDown), t.countDown = cc11001100_hook("t.countDown", "", "assign");
    }).on("click", "input", function (e) {
      t.radioValue = cc11001100_hook("t.radioValue", e.target.value, "assign");
    }), e.find(".highschool-submit").on("click", function () {
      t.radioValue && ("cert" === t.radioValue ? (window.open(t.certUrl, "_blank"), o({
        spm: cc11001100_hook("spm", t.reportUV, "object-key-init"),
        extend1: cc11001100_hook("extend1", "是", "object-key-init")
      })) : o({
        spm: cc11001100_hook("spm", t.reportUV, "object-key-init"),
        extend1: cc11001100_hook("extend1", "否", "object-key-init")
      }), t.close(t.closeValue));
    }), this.$main.append(e);
  }, "assign"), i.prototype.renderAccount = cc11001100_hook("i.prototype.renderAccount", function () {
    var t = cc11001100_hook("t", this, "var-init"),
      e = cc11001100_hook("e", $('<div class="csdn-highschool-account">\n      <p>高校社区扬帆起航 虚位以待静候卿来</p>\n      <div class="highschool-container">\n        <p class="highschool-name">' + this.schoolName + '</p>\n        <p class="highschool-desc">加入社区立即体验,参与校友互动</p>\n      </div>\n      <div class="highschool-submit">立即前往</div>\n    </div>'), "var-init");
    e.find(".highschool-submit").on("click", function () {
      window.open(t.schoolCommunityUrl, "_blank"), t.close(t.closeValue);
    }), this.$main.append(e);
  }, "assign"), i.prototype.isHighSchoolIp = cc11001100_hook("i.prototype.isHighSchoolIp", function () {
    var t = cc11001100_hook("t", this, "var-init");
    $.ajax({
      url: cc11001100_hook("url", this.IPurl, "object-key-init"),
      type: cc11001100_hook("type", "get", "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      success: function (e) {
        void 0, e && (t.isLogin ? t.getAccountInfo() : (t.render(), t.count()));
      },
      error: function (t) {
        void 0;
      }
    });
  }, "assign"), i.prototype.getAccountInfo = cc11001100_hook("i.prototype.getAccountInfo", function () {
    var t = cc11001100_hook("t", this, "var-init");
    $.ajax({
      url: cc11001100_hook("url", "https://g-api.csdn.net/community/personal-api/v1/get-school-community", "object-key-init"),
      type: cc11001100_hook("type", "get", "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      success: function (e) {
        void 0, 200 === e.code && e.data && e.data.studentCertification ? (t.hasCert = cc11001100_hook("t.hasCert", !0, "assign"), t.reportUV = cc11001100_hook("t.reportUV", "3001.6434", "assign"), t.schoolName = cc11001100_hook("t.schoolName", e.data.schoolName, "assign"), t.schoolCommunityUrl = cc11001100_hook("t.schoolCommunityUrl", e.data.schoolCommunityUrl, "assign")) : (t.render(), t.count());
      },
      error: function (e) {
        t.render(), t.count(), void 0;
      }
    });
  }, "assign"), i.prototype.close = cc11001100_hook("i.prototype.close", function (t) {
    this.$main.remove(), clearInterval(this.countDown), this.countDown = cc11001100_hook("this.countDown", "", "assign"), e("csdn_highschool_close", t || "close", 864e5);
  }, "assign"), i.prototype.count = cc11001100_hook("i.prototype.count", function () {
    var t = cc11001100_hook("t", this, "var-init"),
      e = cc11001100_hook("e", this.closeTime, "var-init");
    this.countDown = cc11001100_hook("this.countDown", setInterval(function () {
      0 === e ? t.close(t.closeValue) : (t.$main.find(".csdn-highschool-countdown").html(e + "秒"), e--);
    }, 1e3), "assign");
  }, "assign"), $(document).on("toolbarReady", function (e) {
    var o = cc11001100_hook("o", window.csdn.toolbarData || {}, "var-init"),
      a = cc11001100_hook("a", o.highSchoolData, "var-init");
    a && a.whiteList && n(a.whiteList) && (!t("csdn_highschool_close") || t("UserName") && "nologin_close" === t("csdn_highschool_close")) && (window.csdn.highSchool = cc11001100_hook("window.csdn.highSchool", new i(), "assign"));
  });
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t) return decodeURIComponent(o[1]);
    }
  }
  function e(t, e, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var o = cc11001100_hook("o", new Date(), "var-init");
    if (n) o.setTime(o.getTime() + n);else {
      o.setTime(o.getTime() + 2592e6);
    }
    document.cookie = cc11001100_hook("document.cookie", t + "=" + encodeURIComponent(e) + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/", "assign");
  }
  function n() {
    var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window, "var-init");
    return t && $(t).height();
  }
  function o() {
    return !!t("needShowLoginBoxAuto");
  }
  function a() {
    return t("UserName");
  }
  function i() {
    var t = cc11001100_hook("t", !window.csdn || void 0 === window.csdn.needShowLoginBoxAuto || !!window.csdn.needShowLoginBoxAuto, "var-init");
    window.csdn && window.csdn.loginBox && t && !o() && !a() && (setTimeout(function () {
      try {
        window.csdn.loginBox.show();
      } catch (t) {
        void 0;
      }
    }, 800), e("needShowLoginBoxAuto", "1", 60 * c.hours * 60 * 1e3));
  }
  function r() {
    $(window).on("scroll", function (t) {
      var e = cc11001100_hook("e", $(this).scrollTop(), "var-init"),
        o = cc11001100_hook("o", n(document), "var-init"),
        a = cc11001100_hook("a", n(window), "var-init");
      void 0, e >= (o - a) * c.ratio && i();
    });
  }
  function s(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t && t.some(function (t) {
      return "*" === t || !!~location.href.indexOf(t);
    });
  }
  var c = cc11001100_hook("c", {
    whiteList: cc11001100_hook("whiteList", ["loc-toolbar.csdn.net"], "object-key-init"),
    blackList: cc11001100_hook("blackList", [], "object-key-init"),
    ratio: cc11001100_hook("ratio", .5, "object-key-init"),
    hours: cc11001100_hook("hours", 6, "object-key-init")
  }, "var-init");
  try {
    window.csdn = cc11001100_hook("window.csdn", window.csdn || {}, "assign"), csdn.loginBox = cc11001100_hook("csdn.loginBox", csdn.loginBox || {}, "assign"), csdn.loginBox.loginBoxParams = cc11001100_hook("csdn.loginBox.loginBoxParams", {
      isClosedBtn: cc11001100_hook("isClosedBtn", !0, "object-key-init")
    }, "assign");
  } catch (t) {
    void 0;
  }
  $(document).on("toolbarReady", function (t) {
    var e = cc11001100_hook("e", window.csdn.toolbarData || {}, "var-init");
    if (c = cc11001100_hook("c", Object.assign({}, c, e.loginBoxData), "assign"), void 0, c && s(c.whiteList) && !s(c.blackList)) {
      var o = cc11001100_hook("o", n(document), "var-init"),
        a = cc11001100_hook("a", n(window), "var-init");
      void 0, (o - a) * c.ratio < 100 ? (void 0, i()) : (void 0, r());
    }
  });
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t && "UD" == t) return decodeURIComponent(o[1]);
      if (o[0] == t) return decodeURI(o[1]);
    }
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    window.csdn && window.csdn.report && window.csdn.report.reportClick(t);
  }
  function n() {
    var t = cc11001100_hook("t", new Date(), "var-init");
    return t.setDate(t.getDate() + 1), t.setHours(0), t.setMinutes(0), t.setSeconds(0), t;
  }
  function o() {
    var t = cc11001100_hook("t", window.location.href, "var-init");
    return s.some(function (e) {
      return t.startsWith(e);
    });
  }
  function a(t) {
    cc11001100_hook("t", t, "function-parameter");
    $.ajax({
      url: cc11001100_hook("url", "https://kunpeng.csdn.net/ad/json/integrate/list?positions=932", "object-key-init"),
      type: cc11001100_hook("type", "get", "object-key-init"),
      dataType: cc11001100_hook("dataType", "JSON", "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (e) {
        if (200 === e.code && e.data) {
          if (e.data.length > 0) {
            var n = cc11001100_hook("n", e.data[0], "var-init");
            t(n);
          }
        } else ;
      }
    });
  }
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (t && t.file2) {
      var o = cc11001100_hook("o", $('<div class="csdn-common-logo-advert">\n      <img class="logo-advert-close" src="https://img-operation.csdnimg.cn/csdn/silkroad/img/1666168836091.png" />\n      <img class="logo-advert-back link-img" src=' + t.file2 + " />\n      " + (t.file1 ? '<div class="logo-advert-bubble"><img class="link-img" src=' + t.file1 + " /></div>" : "") + "\n    </div>"), "var-init"),
        a = cc11001100_hook("a", $(t.con).find("img.pre-img-lasy"), "var-init");
      a.attr("data-src", a.attr("data-src") + "&timestamp=" + Date.now()), o.append(a), o.on("click", ".link-img", function () {
        t.clickUrl && window.open(t.clickUrl);
      }).on("click", ".logo-advert-close", function () {
        t.spm && e({
          spm: cc11001100_hook("spm", t.spm, "object-key-init")
        }), document.cookie = cc11001100_hook("document.cookie", "logo_advert_close=" + escape(1) + ";expires=" + n() + ";domain=.csdn.net;path=/", "assign"), o.remove();
      }), r(o, [".csdn-side-toolbar", ".so-fixed-menus"]);
    }
  }
  function r(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", 0, "var-init"),
      o = cc11001100_hook("o", setInterval(function () {
        n++, e.forEach(function (e) {
          var o = cc11001100_hook("o", $(e), "var-init");
          o.length && (n = cc11001100_hook("n", 15, "assign"), setTimeout(function () {
            o.prepend(t), "live.csdn.net" === window.location.host && $(o).attr("style", "z-index: 20000"), setTimeout(function () {
              window.csdn.trackad.checkImgs();
            }, 100);
          }, 1e3));
        }), n >= 15 && (clearInterval(o), o = cc11001100_hook("o", null, "assign"));
      }, 1e3), "var-init");
  }
  var s = cc11001100_hook("s", ["https://download.csdn.net", "https://mall.csdn.net/vip", "https://www.csdn.net/vip", "https://vip.csdn.net"], "var-init");
  !function () {
    t("logo_advert_close") || o() || $(document).on("toolbarReady", function (t) {
      a(i);
    });
  }();
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t && t.el && t.url;
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t = cc11001100_hook("t", t.split("?")[0], "assign"), t.indexOf(".csdn.net") > -1;
  }
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    return /^#/g.test(t);
  }
  function o(o) {
    cc11001100_hook("o", o, "function-parameter");
    t(o) ? (void 0, $(o.el).on("click", "a", function (t) {
      var a = cc11001100_hook("a", $(this).attr("href") || "", "var-init"),
        i = cc11001100_hook("i", e(a) ? a : o.url + (o.url.indexOf("?") > -1 ? "&" : "?") + "target=" + encodeURIComponent(a), "var-init");
      t.preventDefault(), void 0, a && !n(a) && window.open(i, "_blank");
    })) : void 0;
  }
  window.csdn = cc11001100_hook("window.csdn", window.csdn || {}, "assign"), window.csdn.middleJump = cc11001100_hook("window.csdn.middleJump", o, "assign");
}(), function () {
  !function (t, e) {
    var n = cc11001100_hook("n", document.createElement("script"), "var-init");
    n.type = cc11001100_hook("n.type", "text/javascript", "assign"), n.readyState ? n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
      "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), e && e());
    }, "assign") : n.onload = cc11001100_hook("n.onload", function () {
      e && e();
    }, "assign"), n.src = cc11001100_hook("n.src", t, "assign"), document.getElementsByTagName("head")[0].appendChild(n);
  }("https://g.csdnimg.cn/common/csdn-notification/csdn-notification.js", function () {
    function t(t) {
      cc11001100_hook("t", t, "function-parameter");
      if (303 === t.cmdId) {
        var n = cc11001100_hook("n", t.body, "var-init"),
          o = cc11001100_hook("o", {
            spm: cc11001100_hook("spm", "3001.6004", "object-key-init"),
            dest: cc11001100_hook("dest", n.url, "object-key-init"),
            extra: cc11001100_hook("extra", JSON.stringify(JSON.parse(n.report_data).data.extra), "object-key-init")
          }, "var-init"),
          a = cc11001100_hook("a", '<div class="notification-item" data-report-view=\'' + JSON.stringify(o) + '\'>\n        <span class="notification-close"></span>\n        <div class="notification-info">' + n.description + '</div>\n        <div class="notification-bottom">\n          <div class="notification-title">' + n.popularityWord + '</div>\n          <a href="' + n.url + '" target="_blank" class="notification-options" data-report-click=\'' + JSON.stringify(o) + '\' data-report-query="spm=3001.6004">' + n.jumpTag + "</a>\n        </div>\n        </div>", "var-init");
        csdn.report && csdn.report.viewCheck(), e.create(a);
      }
      if (304 === t.cmdId) {
        var n = cc11001100_hook("n", t.body, "var-init"),
          o = cc11001100_hook("o", n.report_data ? {
            spm: cc11001100_hook("spm", "3001.6004", "object-key-init"),
            dest: cc11001100_hook("dest", n.url, "object-key-init"),
            extra: cc11001100_hook("extra", JSON.stringify(JSON.parse(n.report_data).data.extra), "object-key-init")
          } : {}, "var-init"),
          a = cc11001100_hook("a", '<div class="notification-item" data-report-view=\'' + JSON.stringify(o) + '\'>\n        <span class="notification-close"></span>\n        <div class="notification-info">' + n.description + '</div>\n        <div class="notification-bottom">\n          <span class="notification-footer">' + n.time + '</span>\n          <a href="' + n.url + '" target="_blank" class="notification-options" data-report-click=\'' + JSON.stringify(o) + '\' data-report-query="spm=3001.6004">' + n.jumpTag + "</a>\n        </div>\n        </div>", "var-init");
        csdn.report && csdn.report.viewCheck(), e.create(a);
      }
    }
    var e;
    setTimeout(function () {
      e = cc11001100_hook("e", new CsdnNotification({
        top: cc11001100_hook("top", "50px", "object-key-init"),
        right: cc11001100_hook("right", "24px", "object-key-init"),
        time: cc11001100_hook("time", 9e3, "object-key-init")
      }, t), "assign");
    }, 3e4);
  });
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t && "UD" == t) return decodeURIComponent(o[1]);
      if (o[0] == t) return decodeURI(o[1]);
    }
  }
  function e(t, e, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var o = cc11001100_hook("o", new Date(), "var-init");
    if (-1 == n) return void (document.cookie = cc11001100_hook("document.cookie", t + "=" + escape(e) + ";domain=.csdn.net;path=/", "assign"));
    if (n) o.setTime(o.getTime() + n);else {
      o.setTime(o.getTime() + 2592e6);
    }
    document.cookie = cc11001100_hook("document.cookie", t + "=" + escape(e) + ";expires=" + o.toGMTString() + ";domain=.csdn.net;path=/", "assign");
  }
  function n() {
    var e = cc11001100_hook("e", t("AU"), "var-init");
    return e ? "https://profile.csdnimg.cn/" + e.split("").join("/") + "/0_" + a().toLowerCase() : "";
  }
  function o(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", {}, "var-init");
    return location.href.replace(/([^*#&=?]+)=([^*#&=?]+)/g, function () {
      for (var t = cc11001100_hook("t", arguments.length, "var-init"), n = cc11001100_hook("n", Array(t), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < t; o++) n[o] = cc11001100_hook("n[o]", arguments[o], "assign");
      var a = cc11001100_hook("a", n[1], "var-init"),
        i = cc11001100_hook("i", n[2], "var-init");
      e[a] = cc11001100_hook("e[a]", i, "assign");
    }), t ? e[t] : e;
  }
  function a() {
    return t("UserName");
  }
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    window.csdn && window.csdn.loginBox && window.csdn.loginBox.show ? window.csdn.loginBox.show(t) : window.location.href = cc11001100_hook("window.location.href", "https://passport.csdn.net/account/login" + (t ? "?spm=" + t.spm : ""), "assign");
  }
  function r() {
    return !!+(t("p_uid") || "").substr(1, 1);
  }
  function s() {
    return "--";
  }
  function c() {
    var t = cc11001100_hook("t", 0, "var-init"),
      e = cc11001100_hook("e", $('meta[name="toolbar"]'), "var-init");
    if (e.length) {
      var n = cc11001100_hook("n", e.attr("content") || {}, "var-init");
      n = cc11001100_hook("n", JSON.parse(n), "assign"), t = cc11001100_hook("t", n.type || t, "assign");
    } else t = cc11001100_hook("t", o("toolbarSkinType") || t, "assign");
    return t;
  }
  function l() {
    this.data = cc11001100_hook("this.data", {}, "assign"), this.isVip = cc11001100_hook("this.isVip", r(), "assign"), this.isRender = cc11001100_hook("this.isRender", !1, "assign"), this.$box = cc11001100_hook("this.$box", $(".toolbar-btn.toolbar-btn-login"), "assign"), this.nickName = cc11001100_hook("this.nickName", s(), "assign"), this.userName = cc11001100_hook("this.userName", t("UserName"), "assign"), this.avatar = cc11001100_hook("this.avatar", n(), "assign"), this.list = cc11001100_hook("this.list", [{
      name: cc11001100_hook("name", "个人中心", "object-key-init"),
      url: cc11001100_hook("url", "https://i.csdn.net/#/user-center/profile", "object-key-init"),
      report: {
        dest: cc11001100_hook("dest", "https://i.csdn.net/#/user-center/profile", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.5111", "object-key-init")
      },
      icon: cc11001100_hook("icon", "csdn-profile-icon-person", "object-key-init"),
      class: cc11001100_hook("class", "", "object-key-init")
    }, {
      name: cc11001100_hook("name", "内容管理", "object-key-init"),
      url: cc11001100_hook("url", "https://mp.csdn.net/mp_blog/manage/article?spm=1011.2124.3001.5298", "object-key-init"),
      report: {
        dest: cc11001100_hook("dest", "https://mp.csdn.net/mp_blog/manage/article?spm=1011.2124.3001.5298", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.5448", "object-key-init")
      },
      icon: cc11001100_hook("icon", "csdn-profile-icon-pages", "object-key-init"),
      class: cc11001100_hook("class", "", "object-key-init")
    }, {
      name: cc11001100_hook("name", "我的学习", "object-key-init"),
      url: cc11001100_hook("url", "https://edu.csdn.net?utm_source=edu_txxl_mh", "object-key-init"),
      report: {
        dest: cc11001100_hook("dest", "https://edu.csdn.net?utm_source=edu_txxl_mh", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.5350", "object-key-init")
      },
      icon: cc11001100_hook("icon", "csdn-profile-icon-study", "object-key-init"),
      class: cc11001100_hook("class", "", "object-key-init")
    }, {
      name: cc11001100_hook("name", "我的订单", "object-key-init"),
      url: cc11001100_hook("url", "https://mall.csdn.net/myorder", "object-key-init"),
      report: {
        dest: cc11001100_hook("dest", "https://mall.csdn.net/myorder", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.5137", "object-key-init")
      },
      icon: cc11001100_hook("icon", "csdn-profile-icon-order", "object-key-init"),
      class: cc11001100_hook("class", "", "object-key-init")
    }, {
      name: cc11001100_hook("name", "我的钱包", "object-key-init"),
      url: cc11001100_hook("url", "https://i.csdn.net/#/wallet/index", "object-key-init"),
      report: {
        dest: cc11001100_hook("dest", "https://i.csdn.net/#/wallet/index", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.5136", "object-key-init")
      },
      icon: cc11001100_hook("icon", "csdn-profile-icon-wallet", "object-key-init"),
      class: cc11001100_hook("class", "", "object-key-init")
    }, {
      name: cc11001100_hook("name", "我的云服务", "object-key-init"),
      url: cc11001100_hook("url", "https://dev-portal.csdn.net/welcome?utm_source=toolbar_user_profile", "object-key-init"),
      report: {
        dest: cc11001100_hook("dest", "https://dev-portal.csdn.net/welcome?utm_source=toolbar_user_profile", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.7345", "object-key-init")
      },
      icon: cc11001100_hook("icon", "csdn-profile-icon-API", "object-key-init"),
      class: cc11001100_hook("class", "", "object-key-init")
    }, {
      name: cc11001100_hook("name", "我的认证", "object-key-init"),
      url: cc11001100_hook("url", "https://ac.csdn.net/user/myCert.html", "object-key-init"),
      report: {
        dest: cc11001100_hook("dest", "https://ac.csdn.net/user/myCert.html", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.7346", "object-key-init")
      },
      icon: cc11001100_hook("icon", "csdn-profile-icon-ac", "object-key-init"),
      class: cc11001100_hook("class", "pb-8 csdn-border-bottom", "object-key-init")
    }, {
      name: cc11001100_hook("name", "签到抽奖", "object-key-init"),
      url: cc11001100_hook("url", "https://i.csdn.net/#/uc/reward", "object-key-init"),
      report: {
        dest: cc11001100_hook("dest", "https://i.csdn.net/#/uc/reward", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.5351", "object-key-init")
      },
      icon: cc11001100_hook("icon", "csdn-profile-icon-draw", "object-key-init"),
      class: cc11001100_hook("class", "pt-8 pb-8 csdn-border-bottom", "object-key-init")
    }, {
      name: cc11001100_hook("name", "退出", "object-key-init"),
      url: cc11001100_hook("url", "javascript:;", "object-key-init"),
      report: {
        spm: cc11001100_hook("spm", "3001.5139", "object-key-init")
      },
      icon: cc11001100_hook("icon", "csdn-profile-icon-logout", "object-key-init"),
      class: cc11001100_hook("class", "pt-8 csdn-profile-logout", "object-key-init")
    }], "assign"), this.render();
  }
  function d() {
    this.cookieTime = cc11001100_hook("this.cookieTime", 864e5, "assign"), this.cookieKey = cc11001100_hook("this.cookieKey", "hide_login", "assign"), this.init = cc11001100_hook("this.init", !!t(this.cookieKey), "assign"), this.type = cc11001100_hook("this.type", c(), "assign"), this.isRender = cc11001100_hook("this.isRender", !1, "assign"), this.$box = cc11001100_hook("this.$box", $(".toolbar-btn.toolbar-btn-login"), "assign"), void 0, this.list = cc11001100_hook("this.list", [[{
      icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20220208105133.png", "object-key-init"),
      text: cc11001100_hook("text", "免费复制代码", "object-key-init")
    }, {
      icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20220208105144.png", "object-key-init"),
      text: cc11001100_hook("text", "关注/点赞/评论/收藏", "object-key-init")
    }, {
      icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20220208105156.png", "object-key-init"),
      text: cc11001100_hook("text", "下载海量资源", "object-key-init")
    }, {
      icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20220208105204.png", "object-key-init"),
      text: cc11001100_hook("text", "写文章/发动态/加入社区", "object-key-init")
    }], [{
      icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20220208020025.png", "object-key-init"),
      text: cc11001100_hook("text", "免费复制代码", "object-key-init")
    }, {
      icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20220208020036.png", "object-key-init"),
      text: cc11001100_hook("text", "关注/点赞/评论/收藏", "object-key-init")
    }, {
      icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20220208020055.png", "object-key-init"),
      text: cc11001100_hook("text", "下载海量资源", "object-key-init")
    }, {
      icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20220208020057.png", "object-key-init"),
      text: cc11001100_hook("text", "写文章/发动态/加入社区", "object-key-init")
    }]], "assign"), !this.init && this.render();
  }
  l.prototype.render = cc11001100_hook("l.prototype.render", function () {
    var t = cc11001100_hook("t", this, "var-init"),
      e = cc11001100_hook("e", $('<div id="csdn-toolbar-profile" class="csdn-toolbar-plugin">\n            <div class="csdn-profile-top">\n              <a class="csdn-profile-avatar" data-report-click=\'{"spm": "3001.5343"}\' data-report-query="spm=3001.5343"  href="https://blog.csdn.net/' + t.userName + '"><img src="' + t.avatar + '"></a>\n              <p class="csdn-profile-nickName">' + t.nickName + '</p>\n              <a data-report-click=\'{"spm": "3001.5344"}\' data-report-query="spm=3001.5344" href="https://mall.csdn.net/vip" class="csdn-profile-no-vip"></a>\n            </div>\n            <div class="csdn-profile-mid">\n              <a data-report-click=\'{"spm": "3001.5347"}\' data-report-query="spm=3001.5347" href="https://blog.csdn.net/' + t.userName + '?type=sub&subType=fans"><i class="csdn-profile-fansCount">--</i>粉丝</a>\n              <a data-report-click=\'{"spm": "3001.5348"}\' data-report-query="spm=3001.5348" href="https://blog.csdn.net/' + t.userName + '?type=sub"><i class="csdn-profile-followCount">--</i>关注</a>\n              <a data-report-click=\'{"spm": "3001.5349"}\' data-report-query="spm=3001.5349" href="https://blog.csdn.net/' + t.userName + '"><i class="csdn-profile-likeCount">--</i>获赞</a>\n            </div>\n            <div class="csdn-profile-bottom">\n              <ul class="csdn-border-bottom">\n                ' + t.list.map(function (t) {
        return '<li class="' + t.class + '"><a href="' + t.url + '" ' + (t.report ? "data-report-click='" + JSON.stringify(t.report) + "'" : "") + " " + (t.report ? "data-report-query='spm=" + t.report.spm + "'" : "") + '><i class="csdn-profile-icon ' + t.icon + '"></i>' + t.name + "</a></li>";
      }).join("") + "\n              </ul>\n            </div>\n          </div>"), "var-init");
    return this.$box.append(e), this.$tpl = cc11001100_hook("this.$tpl", e, "assign"), this.$box.on("mouseenter", function (e) {
      void 0, t.isEenter = cc11001100_hook("t.isEenter", !0, "assign"), t.isRender && t.showProfile() || t.getData();
    }).on("mouseleave", function (e) {
      void 0, t.isEenter = cc11001100_hook("t.isEenter", !1, "assign"), t.hideProfile();
    }), this.$tpl.find(".csdn-profile-logout").on("click", function (t) {
      $.ajax({
        type: cc11001100_hook("type", "post", "object-key-init"),
        url: cc11001100_hook("url", "https://passport.csdn.net/account/logout", "object-key-init"),
        data: cc11001100_hook("data", JSON.stringify({}), "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (t) {
          var e = cc11001100_hook("e", {
              mod: cc11001100_hook("mod", "popu_789", "object-key-init")
            }, "var-init"),
            n = cc11001100_hook("n", "https://passport.csdn.net/account/logout?from=" + encodeURIComponent(window.location.href), "var-init");
          e.dest = cc11001100_hook("e.dest", n, "assign"), e.extend1 = cc11001100_hook("e.extend1", "退出", "assign"), csdn && csdn.report && csdn.report.reportClick(e), window.location.reload();
        },
        error: function (t) {}
      });
    }), this;
  }, "assign"), l.prototype.update = cc11001100_hook("l.prototype.update", function (t) {
    if (t) {
      var e = cc11001100_hook("e", t.fansCount, "var-init"),
        n = cc11001100_hook("n", t.likeCount, "var-init"),
        o = cc11001100_hook("o", t.favoritesCount, "var-init"),
        a = cc11001100_hook("a", t.nickName, "var-init"),
        i = cc11001100_hook("i", t.followCount, "var-init");
      this.toggleVip(t), this.isRender = cc11001100_hook("this.isRender", !0, "assign"), $(".csdn-profile-fansCount").text(e || "--"), $(".csdn-profile-likeCount").text(n || "--"), $(".csdn-profile-favoritesCount").text(o || "--"), $(".csdn-profile-nickName").text(a || "--"), $(".csdn-profile-followCount").text(i || "--");
    }
  }, "assign"), l.prototype.toggleVip = cc11001100_hook("l.prototype.toggleVip", function (t) {
    this.isVip = cc11001100_hook("this.isVip", 1 === t.vip, "assign"), this.isVip && $(".csdn-profile-no-vip").addClass("csdn-profile-vip").removeClass("csdn-profile-no-vip").attr("href", "https://www.csdn.net/vip");
  }, "assign"), l.prototype.showProfile = cc11001100_hook("l.prototype.showProfile", function () {
    var t = cc11001100_hook("t", this, "var-init");
    this.timer && clearTimeout(this.timer), this.timer = cc11001100_hook("this.timer", setTimeout(function () {
      t.isEenter && (void 0, $(".csdn-toolbar-plugin").hide(), t.$box.addClass("toolbar-btn-login-action"), t.$tpl.stop().fadeIn(200));
    }, 150), "assign");
  }, "assign"), l.prototype.hideProfile = cc11001100_hook("l.prototype.hideProfile", function () {
    if (this.timer && clearTimeout(this.timer), !this.isEenter) {
      void 0;
      this.$box.removeClass("toolbar-btn-login-action"), this.$tpl.stop().fadeOut(100);
    }
  }, "assign"), l.prototype.getData = cc11001100_hook("l.prototype.getData", function () {
    void 0;
    var t = cc11001100_hook("t", this, "var-init");
    if (!t.isRender) {
      var e = cc11001100_hook("e", window.csdn.toolbar.profileData, "var-init");
      if (e) return t.update(e), void t.showProfile();
      $.ajax({
        url: cc11001100_hook("url", "https://g-api.csdn.net/community/toolbar-api/v1/get-user-info", "object-key-init"),
        type: cc11001100_hook("type", "get", "object-key-init"),
        dataType: cc11001100_hook("dataType", "JSON", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (e) {
          200 === e.code && (t.update(e.data), window.csdn.toolbar.profileData = cc11001100_hook("window.csdn.toolbar.profileData", e.data, "assign")), t.showProfile();
        },
        error: function (t) {}
      });
    }
  }, "assign"), d.prototype.render = cc11001100_hook("d.prototype.render", function () {
    var t = cc11001100_hook("t", this, "var-init");
    !this.init && e(this.cookieKey, "1", this.cookieTime);
    var n = cc11001100_hook("n", this, "var-init"),
      o = cc11001100_hook("o", $('<div id="csdn-toolbar-profile-nologin" class="csdn-toolbar-plugin">\n                <div class="csdn-toolbar-plugin-triangle"></div>\n                <div class="csdn-toolbar-profile-title">登录后您可以：</div>\n                <ul class="csdn-profile-top">\n                ' + n.list[n.type].map(function (t) {
        return '<li class="csdn-profile-a"><i class="csdn-profile-icon" style="background-image: url(' + t.icon + '); "></i>' + t.text + "</li>";
      }).join("") + '\n                </ul>\n                <a class="csdn-toolbar-loginbtn" data-report-click=\'{"spm":"3001.8844"}\'>立即登录</a>\n          </div>'), "var-init");
    if (this.$box.append(o), this.$tpl = cc11001100_hook("this.$tpl", o, "assign"), this.$box.find("a.csdn-toolbar-loginbtn").on("click", function () {
      var t = cc11001100_hook("t", $(this).data("report-click"), "var-init");
      $(".csdn-toolbar-plugin").hide(), t ? i(t) : i();
    }), window.location.href.indexOf("passport.csdn.net") > -1) this.$tpl.hide(), n.isRender = cc11001100_hook("n.isRender", !0, "assign");else var a = cc11001100_hook("a", setTimeout(function () {
      n.isRender = cc11001100_hook("n.isRender", !0, "assign"), $(".csdn-toolbar-plugin").hide(), t.$tpl.stop().fadeOut(200), clearTimeout(a);
    }, 3e3), "var-init");
    this.$box.on("mouseenter", function (t) {
      void 0, n.isEenter = cc11001100_hook("n.isEenter", !0, "assign"), n.isRender && n.showProfile(), n.isRender = cc11001100_hook("n.isRender", !0, "assign");
    }).on("mouseleave", function (t) {
      void 0, n.isEenter = cc11001100_hook("n.isEenter", !1, "assign"), n.hideProfile();
    }), $(document).on("scroll", function (t) {
      void 0, n.isEenter = cc11001100_hook("n.isEenter", !1, "assign"), n.isRender = cc11001100_hook("n.isRender", !0, "assign"), n.hideProfile();
    });
  }, "assign"), d.prototype.showProfile = cc11001100_hook("d.prototype.showProfile", function () {
    var t = cc11001100_hook("t", this, "var-init");
    this.timer && clearTimeout(this.timer), this.timer = cc11001100_hook("this.timer", setTimeout(function () {
      t.isEenter && (void 0, $(".csdn-toolbar-plugin").hide(), t.$tpl.stop().fadeIn(200));
    }, 150), "assign");
  }, "assign"), d.prototype.hideProfile = cc11001100_hook("d.prototype.hideProfile", function () {
    if (this.timer && clearTimeout(this.timer), !this.isEenter) {
      void 0;
      this.$tpl.stop().fadeOut(100);
    }
  }, "assign"), $(document).on("toolbarReady", function (t) {
    void 0, setTimeout(function () {
      a() ? new l() : new d();
    }, 200);
  });
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t && "UD" == t) return decodeURIComponent(o[1]);
      if (o[0] == t) return decodeURI(o[1]);
    }
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t.some(function (t) {
      return "*" === t || !!~location.href.indexOf(t);
    });
  }
  function n() {
    this.el = cc11001100_hook("this.el", null, "assign"), this.host = cc11001100_hook("this.host", "https://mp-luckydraw.csdn.net/", "assign"), this.dev = cc11001100_hook("this.dev", !1, "assign"), this.type = cc11001100_hook("this.type", ["redPacket", "coupon", "common-coupon"], "assign"), this.renderCss();
  }
  n.prototype.open = cc11001100_hook("n.prototype.open", function (e) {
    if (e) {
      var n = cc11001100_hook("n", this, "var-init");
      $.ajax({
        url: cc11001100_hook("url", n.host + "/luckydraw/api/timesWin", "object-key-init"),
        type: cc11001100_hook("type", "post", "object-key-init"),
        data: cc11001100_hook("data", JSON.stringify({
          lotteryId: cc11001100_hook("lotteryId", e, "object-key-init"),
          username: cc11001100_hook("username", t("UserName"), "object-key-init")
        }), "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        success: function (t) {
          n.dev && (t = cc11001100_hook("t", {
            code: cc11001100_hook("code", 200, "object-key-init"),
            data: {
              prizeId: cc11001100_hook("prizeId", "123", "object-key-init"),
              name: cc11001100_hook("name", n.type[parseInt(99 * Math.random()) % 3], "object-key-init"),
              url: cc11001100_hook("url", "", "object-key-init"),
              money: cc11001100_hook("money", (10 * Math.random()).toFixed(2), "object-key-init")
            }
          }, "assign")), 200 === t.code && t.data ? n.clear().render(t.data) : n.clear().render();
        }
      });
    }
  }, "assign"), n.prototype.render = cc11001100_hook("n.prototype.render", function () {
    var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
    void 0;
    var e = cc11001100_hook("e", this, "var-init"),
      n = cc11001100_hook("n", "csdn-redpack-sorry", "var-init");
    t.prizeId && "common-coupon" === t.name ? n = cc11001100_hook("n", "csdn-redpack-common-coupon", "assign") : t.prizeId && "coupon" === t.name ? n = cc11001100_hook("n", "csdn-redpack-coupon", "assign") : !t.prizeId || "redPacket" !== t.name && "randomRedPacket" !== t.name || (n = cc11001100_hook("n", "csdn-redpack-cash", "assign")), e.el = cc11001100_hook("e.el", $('<div id="csdn-redpack-barrage" class="csdn-redpack-barrage csdn-redpack-container">\n                  <div class="csdn-redpack-result ' + n + '">\n                    <a class="csdn-redpack-result-link" href="' + (t.url ? t.url : "javascript:;") + '" ' + (t.url ? 'target="_blank"' : "") + '></a>\n                    <em class="csdn-redpack-result-close"></em>\n                    ' + ("csdn-redpack-sorry" !== n ? "<span>" + t.money + "</span>" : "") + "\n                    " + ("csdn-redpack-common-coupon" === n || "csdn-redpack-coupon" === n ? "<i>" + t.money + "</i>" : "") + "\n                  </div>\n              </div>"), "assign"), e.el.find(".csdn-redpack-result-close").on("click", function (t) {
      e.clear();
    }), e.el.find(".csdn-redpack-result-link").on("click", function (t) {
      e.clear();
    }), $("body").append(e.el);
  }, "assign"), n.prototype.renderCss = cc11001100_hook("n.prototype.renderCss", function () {
    void 0;
    var t = cc11001100_hook("t", $('<style type="text/css">\n                      #csdn-redpack-barrage {\n                        position: fixed;\n                        width: 100%;\n                        height: 100%;\n                        background: rgba(0, 0, 0, 0.74);\n                        overflow: hidden;\n                        top: 0;\n                        left: 0;\n                        z-index: 2147483647;\n                      }\n                      #csdn-redpack-barrage * {\n                        margin: 0;\n                        padding: 0;\n                        -webkit-box-sizing: border-box;\n                        box-sizing: border-box;\n                        -webkit-user-select: none;\n                        -moz-user-select: none;\n                        -ms-user-select: none;\n                        user-select: none;\n                      }\n                      #csdn-redpack-barrage a {\n                        text-decoration: none;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result {\n                        width: 950px;\n                        height: 720px;\n                        position: absolute;\n                        top: 50%;\n                        left: 50%;\n                        z-index: 999;\n                        -webkit-transform: translate(-50%, -45%);\n                        transform: translate(-50%, -45%);\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result .csdn-redpack-result-close {\n                        display: block;\n                        position: absolute;\n                        width: 50px;\n                        height: 50px;\n                        z-index: 99999;\n                        top: 18px;\n                        right: 300px;\n                        cursor: pointer;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result .csdn-redpack-result-link {\n                        display: block;\n                        position: absolute;\n                        width: 188px;\n                        height: 50px;\n                        z-index: 99999;\n                        left: 50%;\n                        bottom: 276px;\n                        cursor: pointer;\n                        margin-left: -84px;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-sorry {\n                        background: url("https://img-home.csdnimg.cn/images/20201110020632.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-cash {\n                        background: url("https://img-home.csdnimg.cn/images/20201110020622.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-cash span {\n                        position: absolute;\n                        display: block;\n                        text-align: center;\n                        min-width: 100px;\n                        font-size: 40px;\n                        font-weight: 900;\n                        height: 56px;\n                        line-height: 56px;\n                        font-family: Arial-Black, Arial;\n                        color: #FE1826;\n                        text-shadow: 0px 2px 12px rgba(234, 202, 105, 0.39);\n                        left: 50%;\n                        -webkit-transform: translate(-40%, 0);\n                        transform: translate(-40%, 0);\n                        top: 135px;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-cash .csdn-redpack-result-link {\n                        bottom: 316px;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-coupon {\n                        background: url("https://img-home.csdnimg.cn/images/20201110020628.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-common-coupon {\n                        background: url("https://img-home.csdnimg.cn/images/20201110020625.png") no-repeat center center;\n                        background-size: contain;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-coupon span,\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-common-coupon span,\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-coupon i,\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-common-coupon i {\n                        min-width: 90px;\n                        font-size: 24px;\n                        font-weight: 900;\n                        font-family: Arial-Black, Arial;\n                        color: #FE1826;\n                        text-shadow: 0px 2px 12px rgba(234, 202, 105, 0.39);\n                        position: absolute;\n                        top: 318px;\n                        left: 346px;\n                        text-align: center;\n                        line-height: 34px;\n                        height: 34px;\n                      }\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-coupon i,\n                      #csdn-redpack-barrage .csdn-redpack-result.csdn-redpack-common-coupon i {\n                        top: 303px;\n                        left: 516px;\n                        text-align: center;\n                        font-style: normal;\n                      }\n                  </style>'), "var-init");
    document.head.insertBefore($(t)[0], document.head.getElementsByTagName("title")[0]);
  }, "assign"), n.prototype.clear = cc11001100_hook("n.prototype.clear", function () {
    return void 0, this.el = cc11001100_hook("this.el", null, "assign"), this.dev = cc11001100_hook("this.dev", !1, "assign"), $(".csdn-redpack-barrage").remove(), this;
  }, "assign"), n.prototype.test = cc11001100_hook("n.prototype.test", function () {
    var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 243, "var-init"),
      e = cc11001100_hook("e", arguments.length > 1 && void 0 !== arguments[1] && arguments[1], "var-init");
    this.dev = cc11001100_hook("this.dev", e, "assign"), this.host = cc11001100_hook("this.host", "https://test-luckydraw.csdn.net/", "assign"), this.open(t);
  }, "assign"), $(document).on("toolbarReady", function (t) {
    var o = cc11001100_hook("o", window.csdn.toolbarData || {}, "var-init"),
      a = cc11001100_hook("a", o.barrageRedpackData, "var-init");
    void 0, a && a.whiteList && e(a.whiteList) && (void 0, window.csdn.barrageRedpack = cc11001100_hook("window.csdn.barrageRedpack", new n(), "assign"));
  });
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", "width:100%; height:100%; background-image: url(" + t.imgUrl + "); background-size: auto 80px;background-repeat: no-repeat; background-position: center center;", "var-init"),
      n = cc11001100_hook("n", $('<div class="toolbar-redpack-advert">\n            <a href="' + t.clickUrl + '" style="background: ' + t.backgroundColor + ';" class="toolbar-redpack-advert-default"><div style="' + e + '"></div></a>\n            <span class="toolbar-redpack-adver-btn" ' + (t.closeSpm ? 'data-report-click=\'{"spm":' + JSON.stringify(t.closeSpm) + "}'" : "") + " ></span>\n            " + (t.exposureUrl ? '<img style="width:0;height:0;display:none;" src="' + t.exposureUrl + '"/>' : "") + "\n          </div>"), "var-init");
    n.find(".toolbar-redpack-adver-btn").click(function (t) {
      n.remove();
    }), n.find(".toolbar-redpack-advert-default").click(function (e) {
      t.clickCallback && "function" == typeof t.clickCallback && t.clickCallback();
    }), $("#csdn-toolbar").prepend(n);
  }
  function e() {
    $("body").find("#csdn-toolbar .toolbar-redpack-advert").remove();
  }
  var n = cc11001100_hook("n", {
    clickUrl: cc11001100_hook("clickUrl", "javascript:void(0);", "object-key-init"),
    imgUrl: cc11001100_hook("imgUrl", "https://g.csdnimg.cn/common/redpack/images/redpaceAdvert.png", "object-key-init"),
    backgroundColor: cc11001100_hook("backgroundColor", "#FFCEA6", "object-key-init")
  }, "var-init");
  window.csdn = cc11001100_hook("window.csdn", window.csdn || {}, "assign"), window.csdn.bannerAdvert = cc11001100_hook("window.csdn.bannerAdvert", {
    show: function (o) {
      e(), t(Object.assign({}, n, o));
    },
    close: function () {
      e();
    }
  }, "assign");
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", document.createElement("link"), "var-init");
    e.rel = cc11001100_hook("e.rel", "stylesheet", "assign"), e.type = cc11001100_hook("e.type", "text/css", "assign"), e.href = cc11001100_hook("e.href", t, "assign"), document.getElementsByTagName("head")[0].appendChild(e);
  }
  function e(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", document.createElement("script"), "var-init");
    n.type = cc11001100_hook("n.type", "text/javascript", "assign"), n.readyState ? n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
      "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), e && e());
    }, "assign") : n.onload = cc11001100_hook("n.onload", function () {
      e && e();
    }, "assign"), n.src = cc11001100_hook("n.src", t, "assign"), document.getElementsByTagName("head")[0].appendChild(n);
  }
  function n() {
    t("https://g.csdnimg.cn/common/redpack/redpack.css"), e("https://g.csdnimg.cn/common/redpack/redpack.js");
  }
  function o(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t.some(function (t) {
      return "*" === t || !!~location.href.indexOf(t);
    });
  }
  $(document).on("toolbarReady", function (t) {
    var e = cc11001100_hook("e", window.csdn.toolbarData || {}, "var-init"),
      a = cc11001100_hook("a", e.redpackData, "var-init");
    void 0, a && a.whiteList && o(a.whiteList) && (void 0, n());
  });
}(), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", {}, "var-init");
    return location.href.replace(/([^*#&=?]+)=([^*#&=?]+)/g, function () {
      for (var t = cc11001100_hook("t", arguments.length, "var-init"), n = cc11001100_hook("n", Array(t), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < t; o++) n[o] = cc11001100_hook("n[o]", arguments[o], "assign");
      var a = cc11001100_hook("a", n[1], "var-init"),
        i = cc11001100_hook("i", n[2], "var-init");
      e[a] = cc11001100_hook("e[a]", i, "assign");
    }), t ? e[t] : e;
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) {
      var o = cc11001100_hook("o", e[n].split("="), "var-init");
      if (o[0] == t && "UD" == t) return decodeURIComponent(o[1]);
      if (o[0] == t) return decodeURI(o[1]);
    }
  }
  function n() {
    return e("UserName");
  }
  function o() {
    this.isVip = cc11001100_hook("this.isVip", !1, "assign"), this.timer = cc11001100_hook("this.timer", null, "assign"), this.box = cc11001100_hook("this.box", null, "assign"), this.isRender = cc11001100_hook("this.isRender", !1, "assign"), this.bindEvent();
  }
  var a = cc11001100_hook("a", 0, "var-init");
  !function () {
    var e = cc11001100_hook("e", $('meta[name="toolbar"]'), "var-init"),
      n = cc11001100_hook("n", 0, "var-init");
    if (e.length) {
      var o = cc11001100_hook("o", e.attr("content") || {}, "var-init");
      o = cc11001100_hook("o", JSON.parse(o), "assign"), n = cc11001100_hook("n", o.type || n, "assign");
    } else n = cc11001100_hook("n", t("toolbarSkinType") || n, "assign");
    a = cc11001100_hook("a", n, "assign");
  }(), o.prototype.getProfileData = cc11001100_hook("o.prototype.getProfileData", function (t) {
    var e = cc11001100_hook("e", this, "var-init");
    $.ajax({
      url: cc11001100_hook("url", "https://g-api.csdn.net/community/toolbar-api/v1/get-user-info", "object-key-init"),
      type: cc11001100_hook("type", "get", "object-key-init"),
      dataType: cc11001100_hook("dataType", "JSON", "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (n) {
        200 === n.code && (t && t.call(e, n.data), window.csdn.toolbar.profileData = cc11001100_hook("window.csdn.toolbar.profileData", n.data, "assign"));
      },
      error: function (t) {}
    });
  }, "assign"), o.prototype.renderVip = cc11001100_hook("o.prototype.renderVip", function (t) {
    void 0, void 0;
    var e = cc11001100_hook("e", window.csdn.toolbarData.vipItemPath || {
        normal: cc11001100_hook("normal", [{
          icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20210826043933.png", "object-key-init"),
          url: cc11001100_hook("url", "https://vip.csdn.net/welfarecenter?utm_source=vip_hyzx_hytbcj#banner", "object-key-init"),
          title: cc11001100_hook("title", "限时抽奖", "object-key-init")
        }, {
          icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20210826043936.png", "object-key-init"),
          url: cc11001100_hook("url", "https://vip.csdn.net/welfarecenter?utm_source=vip_hyzx_hytblq#discount_center", "object-key-init"),
          title: cc11001100_hook("title", "领券中心", "object-key-init")
        }, {
          icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20210826043937.png", "object-key-init"),
          url: cc11001100_hook("url", "https://vip.csdn.net/welfarecenter?utm_source=vip_hyzx_hytbhyg#vip_shop", "object-key-init"),
          title: cc11001100_hook("title", "会员购", "object-key-init")
        }, {
          icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20210826043940.png", "object-key-init"),
          url: cc11001100_hook("url", "https://www.csdn.net/vip?utm_source=vip_hyzx_hytb", "object-key-init"),
          title: cc11001100_hook("title", "更多特权", "object-key-init")
        }], "object-key-init"),
        dark: cc11001100_hook("dark", [{
          icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20210826043735.png", "object-key-init"),
          url: cc11001100_hook("url", "https://vip.csdn.net/welfarecenter?utm_source=vip_hyzx_hytbcj#banner", "object-key-init"),
          title: cc11001100_hook("title", "限时抽奖", "object-key-init")
        }, {
          icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20210826043738.png", "object-key-init"),
          url: cc11001100_hook("url", "https://vip.csdn.net/welfarecenter?utm_source=vip_hyzx_hytblq#discount_center", "object-key-init"),
          title: cc11001100_hook("title", "领券中心", "object-key-init")
        }, {
          icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20210826043740.png", "object-key-init"),
          url: cc11001100_hook("url", "https://vip.csdn.net/welfarecenter?utm_source=vip_hyzx_hytbhyg#vip_shop", "object-key-init"),
          title: cc11001100_hook("title", "会员购", "object-key-init")
        }, {
          icon: cc11001100_hook("icon", "https://img-home.csdnimg.cn/images/20210826043742.png", "object-key-init"),
          url: cc11001100_hook("url", "https://www.csdn.net/vip?utm_source=vip_hyzx_hytb", "object-key-init"),
          title: cc11001100_hook("title", "更多特权", "object-key-init")
        }], "object-key-init")
      }, "var-init"),
      n = cc11001100_hook("n", this, "var-init"),
      o = cc11001100_hook("o", 1 === t.vip, "var-init"),
      i = cc11001100_hook("i", "https://mall.csdn.net/vip", "var-init"),
      r = cc11001100_hook("r", 1 === t.vip ? "3001.6441" : "3001.6439", "var-init"),
      s = cc11001100_hook("s", 1 === t.vip ? "3001.6442" : "3001.6440", "var-init"),
      c = cc11001100_hook("c", void 0, "var-init");
    1 !== a ? e.normal && (c = cc11001100_hook("c", e.normal.map(function (t) {
      return '<a href="' + t.url + '"><i class="csdn-plugin-vip-icon" style="background:url(' + t.icon + ');background-size: contain;"></i><br/>' + t.title + "</a>";
    }).join(""), "assign")) : e.dark && (c = cc11001100_hook("c", e.dark.map(function (t) {
      return '<a href="' + t.url + '"><i class="csdn-plugin-vip-icon" style="background:url(' + t.icon + ');background-size: contain;"></i><br/>' + t.title + "</a>";
    }).join(""), "assign"));
    var l = cc11001100_hook("l", window.csdn.toolbarData.vipBg || {
        darkBg: cc11001100_hook("darkBg", "https://img-home.csdnimg.cn/images/20210826055052.png", "object-key-init"),
        defaultBg: cc11001100_hook("defaultBg", "https://img-home.csdnimg.cn/images/20210826055049.png", "object-key-init")
      }, "var-init"),
      d = cc11001100_hook("d", 1 == a ? l.darkBg : l.defaultBg, "var-init"),
      p = cc11001100_hook("p", $('<div id="csdn-plugin-vip" style=\'background:url(' + d + ') no-repeat center center; background-size: cover;\'}>\n                        <div class="csdn-plugin-vip-header">\n                            会员特权\n                        </div>\n                        <div class="csdn-plugin-vip-body">\n                            ' + c + '\n                        </div>\n                        <div class="csdn-plugin-vip-footer">                \n                            <a data-report-click=\'{"spm": "' + s + '"}\' data-report-query="spm=' + s + '" class="csdn-plugin-vip-footer-link" href="' + i + '">\n                              ' + (o ? "领取限时优惠券，最低可享7折" : "领取限时优惠券，最高可减80元") + '<i></i>\n                            </a>\n                            <a data-report-click=\'{"spm": "' + r + '"}\' data-report-query="spm=' + r + '" class="csdn-plugin-vip-footer-btn" href="' + i + '">\n                              ' + (o ? "领券续费" : "领券开通") + "\n                            </a>\n                        </div>\n                    </div>"), "var-init"),
      u = cc11001100_hook("u", $(".toolbar-btn-vip").find(">a"), "var-init");
    $(".toolbar-btn-vip").append(p), o && (u.attr("href", "https://www.csdn.net/vip"), u.attr("data-report-click", '{"spm": "3001.5399"}'), u.attr("data-report-query", "spm=3001.5399")), n.box = cc11001100_hook("n.box", p, "assign"), n.showVip(), n.isRender = cc11001100_hook("n.isRender", !0, "assign");
  }, "assign"), o.prototype.showVip = cc11001100_hook("o.prototype.showVip", function () {
    var t = cc11001100_hook("t", this, "var-init");
    clearTimeout(t.timer), t.timer = cc11001100_hook("t.timer", setTimeout(function () {
      t.isEnter && t.box && t.box.stop().fadeIn(100);
    }, 150), "assign");
  }, "assign"), o.prototype.hideVip = cc11001100_hook("o.prototype.hideVip", function () {
    var t = cc11001100_hook("t", this, "var-init");
    clearTimeout(t.timer), t.isEnter || t.box && t.box.stop().fadeOut(100);
  }, "assign"), o.prototype.init = cc11001100_hook("o.prototype.init", function () {
    var t = cc11001100_hook("t", window.csdn.toolbar && window.csdn.toolbar.profileData, "var-init");
    if (t) this.renderVip(t);else {
      n() ? this.getProfileData(this.renderVip) : (this.renderVip(this, {
        vip: cc11001100_hook("vip", 0, "object-key-init")
      }), window.csdn.toolbar.profileData = cc11001100_hook("window.csdn.toolbar.profileData", {
        vip: cc11001100_hook("vip", 0, "object-key-init")
      }, "assign"));
    }
  }, "assign"), o.prototype.bindEvent = cc11001100_hook("o.prototype.bindEvent", function () {
    var t = cc11001100_hook("t", this, "var-init");
    $(".toolbar-btn-vip").on("mouseenter", function (e) {
      t.isEnter = cc11001100_hook("t.isEnter", !0, "assign"), t.isRender ? t.showVip() : t.init();
    }).on("mouseleave", function (e) {
      t.isEnter = cc11001100_hook("t.isEnter", !1, "assign"), t.hideVip();
    });
  }, "assign"), $(document).on("toolbarReady", function (t) {
    void 0, setTimeout(function () {
      new o();
    }, 200);
  });
}(), function () {
  function t(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", document.createElement("script"), "var-init");
    n.type = cc11001100_hook("n.type", "text/javascript", "assign"), n.readyState ? n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function () {
      "loaded" != n.readyState && "complete" != n.readyState || (n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), e && e());
    }, "assign") : n.onload = cc11001100_hook("n.onload", function () {
      e && e();
    }, "assign"), n.src = cc11001100_hook("n.src", t, "assign"), document.getElementsByTagName("head")[0].appendChild(n);
  }
  function e() {
    t("https://g.csdnimg.cn/common/vip-buyside/vip-buyside.js");
  }
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    return t.some(function (t) {
      return "*" === t || !!~location.href.indexOf(t);
    });
  }
  $(document).on("toolbarReady", function (t) {
    var o = cc11001100_hook("o", window.csdn.toolbarData || {}, "var-init"),
      a = cc11001100_hook("a", o.vipBuySideDate, "var-init");
    void 0, a && a.whiteList && n(a.whiteList) && (void 0, e());
  });
}(), function () {
  var t = cc11001100_hook("t", !1, "var-init"),
    e = cc11001100_hook("e", function () {
      function e() {
        _classCallCheck(this, e), this.container = cc11001100_hook("this.container", $(".toolbar-btn.toolbar-btn-write"), "assign"), this.activityList = cc11001100_hook("this.activityList", [], "assign"), this.init();
      }
      return _createClass(e, [{
        key: cc11001100_hook("key", "init", "object-key-init"),
        value: function () {
          this.render(), this.getActivityList();
        }
      }, {
        key: cc11001100_hook("key", "getActivityList", "object-key-init"),
        value: function () {
          var t = cc11001100_hook("t", this, "var-init");
          $.ajax({
            url: cc11001100_hook("url", "https://g-api.csdn.net/community/toolbar-api/v1/get-activity-list", "object-key-init"),
            type: cc11001100_hook("type", "get", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=utf-8", "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (e) {
              200 === e.code && (t.activityList = cc11001100_hook("t.activityList", e.data.list, "assign"), t.activityList.length && t.insertActivity());
            },
            error: function (t) {
              void 0;
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "render", "object-key-init"),
        value: function () {
          this.container.append('\n        <div id="csdn-toolbar-write" class="csdn-toolbar-plugin">\n          <div class="csdn-toolbar-plugin-triangle"></div>\n          <ul class="csdn-toolbar-write-box">\n            <li class="csdn-toolbar-write-box-blog">\n              <a href="https://mp.csdn.net/edit" target="_blank" data-report-click=\'{"spm":"3001.5352"}\' data-report-query="spm=3001.5352">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>写文章</span>\n              </a>\n            </li>\n            <li class="csdn-toolbar-write-box-blink">\n              <a href="https://blink.csdn.net" target="_blank" data-report-click=\'{"spm":"3001.5353"}\' data-report-query="spm=3001.5353">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>发动态</span>\n              </a>\n            </li>\n            <li class="csdn-toolbar-write-box-ask">\n              <a href="https://ask.csdn.net/new?utm_source=p_toolbar" target="_blank" data-report-click=\'{"spm":"3001.5354"}\' data-report-query="spm=3001.5354">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>提问题</span>\n              </a>\n            </li>\n            <li class="csdn-toolbar-write-box-upload">\n              <a href="https://mp.csdn.net/mp_download/creation/uploadResources" target="_blank" data-report-click=\'{"spm":"3001.5355"}\' data-report-query="spm=3001.5355">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>传资源</span>\n              </a>\n            </li>\n            <li class="csdn-toolbar-write-box-code">\n              <a href="https://gitcode.net/explore" target="_blank" data-report-click=\'{"spm":"3001.5356"}\' data-report-query="spm=3001.5356">\n                <i class="csdn-toolbar-write-icon"></i>\n                <span>建项目</span>\n              </a>\n            </li>\n          </ul>\n        </div>\n      ');
        }
      }, {
        key: cc11001100_hook("key", "insertActivity", "object-key-init"),
        value: function () {
          for (var t = cc11001100_hook("t", "", "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < this.activityList.length; e++) t += cc11001100_hook("t", '\n          <li>\n            <a href="' + this.activityList[e].url + '" target="_blank">#' + this.activityList[e].name + "</a>\n          </li>\n        ", "assign");
          this.container.find("#csdn-toolbar-write").append('\n        <div class="csdn-toolbar-write-activity">\n          <div class="csdn-toolbar-write-activity-head"><span>创作活动</span><a href="https://mp.csdn.net/mp_blog/manage/creative?spm=1011.2124.3001.5311" target="_blank" data-report-click=\'{"spm":"3001.5358"}\' data-report-query="spm=3001.5358">更多<i></i></a></div>\n          <ul>' + t + '</ul>\n          <div class="toolbar-write-activity-more">\n          </div>\n        </div>\n      ');
        }
      }, {
        key: cc11001100_hook("key", "show", "object-key-init"),
        value: function () {
          clearTimeout(this.timer), this.timer = cc11001100_hook("this.timer", setTimeout(function () {
            t && $("#csdn-toolbar-write").stop().fadeIn(100);
          }, 150), "assign");
        }
      }, {
        key: cc11001100_hook("key", "hide", "object-key-init"),
        value: function () {
          clearTimeout(this.timer), t || $("#csdn-toolbar-write").stop().fadeOut(100);
        }
      }]), e;
    }(), "var-init");
  $(document).on("toolbarReady", function () {
    var n = cc11001100_hook("n", null, "var-init"),
      o = cc11001100_hook("o", $(".toolbar-btn.toolbar-btn-write"), "var-init");
    o.on("mouseenter", function () {
      t = cc11001100_hook("t", !0, "assign"), n ? n.show() : n = cc11001100_hook("n", new e(), "assign");
    }), o.on("mouseleave", function () {
      t = cc11001100_hook("t", !1, "assign"), n.hide();
    });
  });
}();