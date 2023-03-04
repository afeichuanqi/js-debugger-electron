"use strict";

function _classCallCheck(e, o) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("o", o, "function-parameter");
  if (!(e instanceof o)) throw new TypeError("Cannot call a class as a function");
}
var _createClass = cc11001100_hook("_createClass", function () {
  function e(e, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    for (var t = cc11001100_hook("t", 0, "var-init"); t < o.length; t++) {
      var i = cc11001100_hook("i", o[t], "var-init");
      i.enumerable = cc11001100_hook("i.enumerable", i.enumerable || !1, "assign"), i.configurable = cc11001100_hook("i.configurable", !0, "assign"), "value" in i && (i.writable = cc11001100_hook("i.writable", !0, "assign")), Object.defineProperty(e, i.key, i);
    }
  }
  return function (o, t, i) {
    return t && e(o.prototype, t), i && e(o, i), o;
  };
}(), "var-init");
!function () {
  function e(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var o = cc11001100_hook("o", document.cookie.split("; "), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < o.length; t++) {
      var i = cc11001100_hook("i", o[t].split("="), "var-init");
      if (i[0] == e) return decodeURIComponent(i[1]);
    }
  }
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    window.csdn && window.csdn.report && window.csdn.report.reportClick(e);
  }
  function t(e) {
    cc11001100_hook("e", e, "function-parameter");
    window.csdn && window.csdn.report && window.csdn.report.reportView(e);
  }
  function i() {
    var e = cc11001100_hook("e", /(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone|csdn)/i.test(navigator.userAgent), "var-init");
    return /(MicroMessenger)/i.test(navigator.userAgent) ? !/(WindowsWechat|MacWechat)/i.test(navigator.userAgent) : e;
  }
  function n() {
    var e = cc11001100_hook("e", window.navigator.userAgent, "var-init"),
      o = cc11001100_hook("o", "others", "var-init"),
      t = cc11001100_hook("t", {
        Sogou: cc11001100_hook("Sogou", /SE\s2\.X|SogouMobileBrowser/, "object-key-init"),
        HuaWei: cc11001100_hook("HuaWei", /HuaweiBrowser/, "object-key-init"),
        Quark: cc11001100_hook("Quark", /Quark/, "object-key-init"),
        Explorer2345: cc11001100_hook("Explorer2345", /2345Explorer|2345chrome|Mb2345Browser/, "object-key-init"),
        Liebao: cc11001100_hook("Liebao", /LBBROWSER/, "object-key-init"),
        QQBrowser: cc11001100_hook("QQBrowser", /QQBrowser/, "object-key-init"),
        Baidu: cc11001100_hook("Baidu", /BIDUBrowser|baidubrowser|BaiduHD/, "object-key-init"),
        Toutiao: cc11001100_hook("Toutiao", /NewsArticle|NewsLite/, "object-key-init"),
        UC: cc11001100_hook("UC", /UBrowser|UCBrowser|UCWEB/, "object-key-init"),
        MiuiBrowser: cc11001100_hook("MiuiBrowser", /MiuiBrowser/, "object-key-init"),
        Wechat: cc11001100_hook("Wechat", /MicroMessenger/, "object-key-init"),
        MobileQQ: cc11001100_hook("MobileQQ", /Mobile\/\w{5,}\sQQ\/(\d+[\.\d]+)/, "object-key-init"),
        Shoujibaidu: cc11001100_hook("Shoujibaidu", /baiduboxapp/, "object-key-init"),
        Firefox: cc11001100_hook("Firefox", /Firefox/, "object-key-init"),
        Maxthon: cc11001100_hook("Maxthon", /Maxthon/, "object-key-init"),
        Se360: cc11001100_hook("Se360", /360SE/, "object-key-init"),
        Ee360: cc11001100_hook("Ee360", /360EE/, "object-key-init"),
        Wukong: cc11001100_hook("Wukong", /GoldBrowser|WukongSearch|wksearch/, "object-key-init"),
        TheWorld: cc11001100_hook("TheWorld", /TheWorld/, "object-key-init"),
        Weibo: cc11001100_hook("Weibo", /__weibo__/, "object-key-init"),
        NokiaBrowser: cc11001100_hook("NokiaBrowser", /NokiaBrowser/, "object-key-init"),
        Opera: cc11001100_hook("Opera", /Opera|OPR\/(\d+[\.\d]+)/, "object-key-init"),
        Edge: cc11001100_hook("Edge", /Edge/, "object-key-init"),
        IE: cc11001100_hook("IE", /Trident|MSIE/, "object-key-init"),
        Chrome: cc11001100_hook("Chrome", /Chrome|CriOS/, "object-key-init"),
        Safari: cc11001100_hook("Safari", /Version[|\/]([\w.]+)(\s\w.+)?\s?Safari|like\sGecko\)\sMobile\/\w{3,}$/, "object-key-init"),
        AndroidBrowser: cc11001100_hook("AndroidBrowser", /Android.*Mobile\sSafari|Android\/(\d[\.\d]+)\sRelease\/(\d[\.\d]+)\sBrowser\/AppleWebKit(\d[\.\d]+)/i, "object-key-init")
      }, "var-init");
    for (var i in t) if (t[i].exec(e)) {
      o = cc11001100_hook("o", i, "assign");
      break;
    }
    return o;
  }
  function s() {
    var e = cc11001100_hook("e", /micromessenger/.test(navigator.userAgent.toLowerCase()), "var-init"),
      o = cc11001100_hook("o", /wxwork/.test(navigator.userAgent.toLowerCase()), "var-init");
    if ("undefined" != typeof WeixinJSBridge || e) return !o;
  }
  function r(e) {
    cc11001100_hook("e", e, "function-parameter");
    this.app = cc11001100_hook("this.app", c(), "assign"), this.isMobile = cc11001100_hook("this.isMobile", i(), "assign"), this.cb = cc11001100_hook("this.cb", void 0, "assign"), this.payInfo = cc11001100_hook("this.payInfo", void 0, "assign"), this.reloadOnClose = cc11001100_hook("this.reloadOnClose", !1, "assign"), e && e.cb && (this.cb = cc11001100_hook("this.cb", e.cb, "assign")), e && e.biz && "pay" === e.biz && e.payInfo && (this.payInfo = cc11001100_hook("this.payInfo", e.payInfo, "assign")), this.cb && (delete e.cb, e.hascb = cc11001100_hook("e.hascb", "yes", "assign")), this.payInfo && delete e.payInfo, this.inputData = cc11001100_hook("this.inputData", e, "assign"), this.defaultParams = cc11001100_hook("this.defaultParams", {
      domain: cc11001100_hook("domain", "csdn.net", "object-key-init"),
      isIframe: cc11001100_hook("isIframe", !0, "object-key-init"),
      frameWidth: cc11001100_hook("frameWidth", this.isMobile ? 343 : 410, "object-key-init"),
      frameHeight: cc11001100_hook("frameHeight", this.isMobile ? 410 : 520, "object-key-init"),
      append: cc11001100_hook("append", "#passportbox", "object-key-init"),
      iframeName: cc11001100_hook("iframeName", "passport_iframe", "object-key-init"),
      from: cc11001100_hook("from", encodeURIComponent(window.location.href), "object-key-init"),
      pvSource: cc11001100_hook("pvSource", "", "object-key-init"),
      service: cc11001100_hook("service", "", "object-key-init"),
      loginService: cc11001100_hook("loginService", this.isMobile ? "https://passport.csdn.net/waplogin" : "https://passport.csdn.net/account/login", "object-key-init")
    }, "assign");
    var o = cc11001100_hook("o", d && d.spm ? d.spm : "", "var-init"),
      t = cc11001100_hook("t", e && e.spm ? e.spm : "", "var-init"),
      n = cc11001100_hook("n", t || o, "var-init");
    n && (this.inputData = cc11001100_hook("this.inputData", this.inputData || {}, "assign"), this.inputData.spm = cc11001100_hook("this.inputData.spm", w(n), "assign")), this.options = cc11001100_hook("this.options", Object.assign({}, this.defaultParams, this.inputData), "assign"), this.extend = cc11001100_hook("this.extend", "", "assign"), this.version = cc11001100_hook("this.version", this.isMobile ? "popupv1" : "loginv3", "assign"), this.renderCss(), this.fileExtends(), this.init(this.options);
  }
  var a = cc11001100_hook("a", null, "var-init"),
    d = cc11001100_hook("d", {}, "var-init");
  window.csdn = cc11001100_hook("window.csdn", window.csdn || {}, "assign");
  var l = function (e, o, t) {
      var i = cc11001100_hook("i", new Date(), "var-init");
      if (t) "number" == typeof t ? i.setTime(i.getTime() + t) : i = cc11001100_hook("i", new Date(i.getFullYear(), i.getMonth(), i.getDate() + 1, 0, 0, 0), "assign");else {
        i.setTime(i.getTime() + 2592e6);
      }
      document.cookie = cc11001100_hook("document.cookie", e + "=" + encodeURIComponent(o) + ";expires=" + i.toGMTString() + ";domain=.csdn.net;path=/", "assign");
    },
    p = function (e) {
      var o = cc11001100_hook("o", /([^?#*&=]+)=([^?#*&=]+)/g, "var-init"),
        t = cc11001100_hook("t", {}, "var-init");
      return location.href.replace(o, function () {
        for (var e = cc11001100_hook("e", arguments.length, "var-init"), o = cc11001100_hook("o", Array(e), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e; i++) o[i] = cc11001100_hook("o[i]", arguments[i], "assign");
        var n = cc11001100_hook("n", o[1], "var-init"),
          s = cc11001100_hook("s", o[2], "var-init");
        t[n] = cc11001100_hook("t[n]", s, "assign");
      }), t[e];
    },
    c = function () {
      return navigator.userAgent.toLowerCase().indexOf("csdn") > -1;
    },
    h = function () {
      if (c()) {
        var e = cc11001100_hook("e", navigator.userAgent.toLowerCase(), "var-init"),
          o = cc11001100_hook("o", JSON.stringify({
            url: cc11001100_hook("url", "csdnapp://app.csdn.net/login/quick", "object-key-init")
          }), "var-init");
        /iphone|ipad|ipod|ios/i.test(e) ? window.webkit.messageHandlers.csdnjumpnewpage.postMessage(o) : window.jsCallBackListener.csdnjumpnewpage(o);
      }
    },
    u = function () {
      if (c()) {
        /iphone|ipad|ipod|ios/i.test(navigator.userAgent.toLowerCase()) ? window.webkit.messageHandlers.csdnLogOut.postMessage(null) : window.jsCallBackListener.csdnLogOut();
      }
    },
    w = function (e) {
      e = cc11001100_hook("e", String(e), "assign");
      var o = cc11001100_hook("o", e.split(".").length, "var-init");
      if (2 === o || 3 === o) {
        var t = cc11001100_hook("t", document.querySelector('meta[name="report"]'), "var-init"),
          i = cc11001100_hook("i", t && t.getAttribute("content") || "{}", "var-init"),
          n = cc11001100_hook("n", JSON.parse(i), "var-init");
        return n.spm ? n.spm + "." + e : e;
      }
      return e;
    };
  r.prototype.init = cc11001100_hook("r.prototype.init", function (e) {
    if (this.app) return window.csdn.loginBox.self = cc11001100_hook("window.csdn.loginBox.self", void 0, "assign"), h(), !1;
    this.wapDistribute(e);
  }, "assign"), r.prototype.fileExtends = cc11001100_hook("r.prototype.fileExtends", function () {
    for (var e in this.inputData) this.defaultParams.hasOwnProperty(e) || (this.extend = cc11001100_hook("this.extend", this.extend + "&" + e + "=" + this.inputData[e], "assign"));
  }, "assign"), r.prototype.renderCss = cc11001100_hook("r.prototype.renderCss", function () {
    var e = cc11001100_hook("e", window.document.head, "var-init"),
      o = cc11001100_hook("o", e.firstElementChild || e.firstChild, "var-init"),
      t = cc11001100_hook("t", document.createElement("style"), "var-init");
    t.innerText = cc11001100_hook("t.innerText", ".passport-login-container{position: fixed;top: 0;left: 0;z-index: 9999;width: 100%;height: 100%;}.passport-login-box{position: absolute;display: block;border-radius: 8px;left: 50%;top: 50%;z-index: 10001;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);transform: translate(-50%, -50%);background-color: #fff;}.passport-login-mark{position: absolute;top: 0;left: 0;z-index: 9999;background-color: rgba(0, 0, 0, 0.5);width: 100%;height: 100%;}", "assign"), e.insertBefore(t, o);
  }, "assign"), r.prototype.renderHtml = cc11001100_hook("r.prototype.renderHtml", function (e) {
    var o = cc11001100_hook("o", this, "var-init"),
      i = cc11001100_hook("i", this.options.loginService, "var-init");
    this.$loginDom = cc11001100_hook("this.$loginDom", $('<div class="passport-login-container"><div id=' + this.options.append.replace(/[#\.]/, "") + ' class="passport-login-box" style="display: block;' + (this.options.frameHeight ? "height:" + this.options.frameHeight + "px" : "") + '"></div></div>'), "assign"), this.$markDom = cc11001100_hook("this.$markDom", $('<div class="passport-login-mark"></div>'), "assign"), window.document.domain = cc11001100_hook("window.document.domain", this.options.domain, "assign"), i = cc11001100_hook("i", i + (-1 === i.indexOf("?") ? "?from=" : "&from=") + this.options.from, "assign"), i = cc11001100_hook("i", this.options.service ? i + "&service=" + this.options.service : i, "assign"), i += cc11001100_hook("i", "&iframe=true", "assign"), i += cc11001100_hook("i", "&newframe=true", "assign"), i = cc11001100_hook("i", this.options.pvSource ? i + "&" + this.options.pvSource : i, "assign"), i = cc11001100_hook("i", this.version ? i + "&version=" + this.version : i, "assign"), i = cc11001100_hook("i", this.extend ? i + this.extend : i, "assign"), this.$iframeHtml = cc11001100_hook("this.$iframeHtml", $('<iframe  width="' + this.options.frameWidth + '" height="' + this.options.frameHeight + '" name="' + this.options.iframeName + '" src="' + i + '" style="border-radius: 8px;" frameborder="0" scrolling="no"></iframe>'), "assign"), this.$closeBtn = cc11001100_hook("this.$closeBtn", $('<span style="display: inline-block; color: #999; font-size: 22px; cursor: pointer; position:absolute; top:2%; right:3%;-moz-user-select:none; -webkit-user-select:none; user-select:none;">&times</span>'), "assign"), this.$closeBtn.on("click", function () {
      o.close();
    }), this.$markDom.on("click", function () {
      o.close();
    }), this.$loginDom.append(this.$markDom), $("body").append(this.$loginDom), $(this.options.append).append(this.$iframeHtml), $(this.options.append).append(this.$closeBtn);
    var n = cc11001100_hook("n", {}, "var-init");
    return "auto" !== e.showType ? n = cc11001100_hook("n", {
      spm: cc11001100_hook("spm", "3001.6428", "object-key-init")
    }, "assign") : "10s" === e.way ? n = cc11001100_hook("n", {
      spm: cc11001100_hook("spm", "3001.7902", "object-key-init")
    }, "assign") : "3t" === e.way ? n = cc11001100_hook("n", {
      spm: cc11001100_hook("spm", "3001.7961", "object-key-init")
    }, "assign") : "30m" === e.way ? n = cc11001100_hook("n", {
      spm: cc11001100_hook("spm", "3001.8531", "object-key-init")
    }, "assign") : "download" === e.way && (n = cc11001100_hook("n", {
      spm: cc11001100_hook("spm", "3001.8532", "object-key-init")
    }, "assign")), t(n), !0;
  }, "assign"), r.prototype.changeCloseReLoadSwitch = cc11001100_hook("r.prototype.changeCloseReLoadSwitch", function (e) {
    this.reloadOnClose = cc11001100_hook("this.reloadOnClose", !!e, "assign");
  }, "assign"), r.prototype.close = cc11001100_hook("r.prototype.close", function () {
    o({
      spm: cc11001100_hook("spm", "3001.6428", "object-key-init")
    }), this.$loginDom.remove(), this.reloadOnClose && window.location.reload(), window.csdn.loginBox.self = cc11001100_hook("window.csdn.loginBox.self", void 0, "assign");
  }, "assign"), r.prototype.getVersion = cc11001100_hook("r.prototype.getVersion", function (e) {
    var o = cc11001100_hook("o", this, "var-init");
    $.ajax({
      type: cc11001100_hook("type", "get", "object-key-init"),
      url: cc11001100_hook("url", "https://passport.csdn.net/v1/register/pc/iframe/login/version", "object-key-init"),
      crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
      success: function (t) {
        t.status ? (o.options.frameWidth = cc11001100_hook("o.options.frameWidth", t.data.width, "assign"), o.options.frameHeight = cc11001100_hook("o.options.frameHeight", t.data.height, "assign"), o.version = cc11001100_hook("o.version", t.data.controlVersion, "assign"), o.renderHtml(e)) : o.renderHtml(e);
      },
      error: function (t) {
        o.renderHtml(e);
      }
    });
  }, "assign"), r.prototype.wapDistribute = cc11001100_hook("r.prototype.wapDistribute", function (e) {
    var o = cc11001100_hook("o", this, "var-init"),
      t = cc11001100_hook("t", {
        platform: cc11001100_hook("platform", o.isMobile ? "WAP" : "PC", "object-key-init"),
        source: cc11001100_hook("source", o.options.pvSource, "object-key-init"),
        spm: cc11001100_hook("spm", o.options.spm, "object-key-init")
      }, "var-init");
    $.ajax({
      type: cc11001100_hook("type", "get", "object-key-init"),
      url: cc11001100_hook("url", "https://passport.csdn.net/v1/login/distribute/login/route?from=" + o.options.from, "object-key-init"),
      data: cc11001100_hook("data", t, "object-key-init"),
      crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
      success: function (t) {
        if (t.status) {
          if (!t.data.popup) return window.csdn.loginBox.self = cc11001100_hook("window.csdn.loginBox.self", void 0, "assign"), window.location.href = cc11001100_hook("window.location.href", t.data.routeUrl, "assign"), !1;
          o.options.frameWidth = cc11001100_hook("o.options.frameWidth", t.data.width, "assign"), o.options.frameHeight = cc11001100_hook("o.options.frameHeight", t.data.height, "assign"), o.version = cc11001100_hook("o.version", t.data.version, "assign"), o.isMobile && t.data && t.data.img && (o.options.loginService = cc11001100_hook("o.options.loginService", o.options.loginService + "?popimg=" + t.data.img, "assign")), o.renderHtml(e);
        } else o.renderHtml(e);
      },
      error: function (t) {
        o.renderHtml(e);
      }
    });
  }, "assign");
  var f = cc11001100_hook("f", function () {
    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      _classCallCheck(this, o), this.callBackFn = cc11001100_hook("this.callBackFn", e && e.cb || null, "assign"), this.errorFn = cc11001100_hook("this.errorFn", e && e.error || null, "assign"), e && delete e.cb, e && delete e.error, this.biz = cc11001100_hook("this.biz", "", "assign"), this.subBiz = cc11001100_hook("this.subBiz", "", "assign"), e && e.biz && (this.biz = cc11001100_hook("this.biz", e.biz, "assign"), delete e.biz), e && e.subBiz && (this.subBiz = cc11001100_hook("this.subBiz", e.subBiz, "assign"), delete e.subBiz), this.app = cc11001100_hook("this.app", c(), "assign"), this.isMobile = cc11001100_hook("this.isMobile", i(), "assign"), this.inputData = cc11001100_hook("this.inputData", e, "assign"), this.defaultParams = cc11001100_hook("this.defaultParams", {
        status: cc11001100_hook("status", "activate", "object-key-init"),
        domain: cc11001100_hook("domain", "csdn.net", "object-key-init"),
        isIframe: cc11001100_hook("isIframe", !0, "object-key-init"),
        frameWidth: cc11001100_hook("frameWidth", this.isMobile ? 295 : 366, "object-key-init"),
        frameHeight: cc11001100_hook("frameHeight", this.isMobile ? 370 : 408, "object-key-init"),
        append: cc11001100_hook("append", "#passportbox2", "object-key-init"),
        iframeName: cc11001100_hook("iframeName", "passport_iframe2", "object-key-init"),
        from: cc11001100_hook("from", encodeURIComponent(window.location.href), "object-key-init"),
        loginService: cc11001100_hook("loginService", "https://passport.csdn.net/key", "object-key-init")
      }, "assign"), e && e.spm && (this.inputData.spm = cc11001100_hook("this.inputData.spm", w(e.spm), "assign")), this.options = cc11001100_hook("this.options", Object.assign({}, this.defaultParams, this.inputData), "assign"), this.extend = cc11001100_hook("this.extend", "", "assign"), this.renderCss(), this.fileExtends(), this.init(this.options);
    }
    return _createClass(o, [{
      key: cc11001100_hook("key", "getUserStatus", "object-key-init"),
      value: function (o) {
        var t = cc11001100_hook("t", this, "var-init");
        $.ajax({
          url: cc11001100_hook("url", "https://passport.csdn.net/v1/api/check/userstatus", "object-key-init"),
          timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
          type: cc11001100_hook("type", "POST", "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          data: cc11001100_hook("data", JSON.stringify({
            username: cc11001100_hook("username", e("UserName") || "", "object-key-init"),
            biz: cc11001100_hook("biz", this.biz, "object-key-init"),
            subBiz: cc11001100_hook("subBiz", this.subBiz, "object-key-init")
          }), "object-key-init"),
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          success: function (e) {
            if (e.status) {
              if (e.detail) {
                switch (e.detail) {
                  case "deleted":
                    t.options.status = cc11001100_hook("t.options.status", "deleted", "assign"), t.options.frameHeight = cc11001100_hook("t.options.frameHeight", 178, "assign");
                    break;
                  case "activate":
                    t.options.status = cc11001100_hook("t.options.status", "activate", "assign");
                    break;
                  case "speechForbidden":
                    t.options.status = cc11001100_hook("t.options.status", "forbidden", "assign");
                    break;
                  default:
                    return !0;
                }
                t.renderHtml();
              } else t.executeCallBack();
            } else t.close(), window.csdn.loginBox.show();
          },
          error: function (e) {
            throw t.executeError(e), void 0, new Error(e.responseText);
          }
        });
      }
    }, {
      key: cc11001100_hook("key", "renderCss", "object-key-init"),
      value: function () {
        var e = cc11001100_hook("e", window.document.head, "var-init"),
          o = cc11001100_hook("o", e.firstElementChild || e.firstChild, "var-init"),
          t = cc11001100_hook("t", document.createElement("style"), "var-init");
        t.innerText = cc11001100_hook("t.innerText", ".passport-login-container2{position: fixed;top: 0;left: 0;z-index: 9999;width: 100%;height: 100%;}.passport-login-box2{position: absolute;display: block;border-radius: 8px;left: 50%;top: 50%;z-index: 10001;-webkit-transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);transform: translate(-50%, -50%);background-color: #fff;}.passport-login-mark2{position: absolute;top: 0;left: 0;z-index: 9999;background-color: rgba(0, 0, 0, 0.5);width: 100%;height: 100%;}", "assign"), e.insertBefore(t, o);
      }
    }, {
      key: cc11001100_hook("key", "renderHtml", "object-key-init"),
      value: function (e) {
        var o = cc11001100_hook("o", this, "var-init"),
          i = cc11001100_hook("i", this.options.loginService, "var-init");
        if (this.$loginDom = cc11001100_hook("this.$loginDom", $('<div class="passport-login-container2"><div id=' + this.options.append.replace(/[#\.]/, "") + ' class="passport-login-box2" style="display: block;' + (this.options.frameHeight ? "height:" + this.options.frameHeight + "px" : "") + '"></div></div>'), "assign"), this.$markDom = cc11001100_hook("this.$markDom", $('<div class="passport-login-mark2"></div>'), "assign"), window.document.domain = cc11001100_hook("window.document.domain", this.options.domain, "assign"), i = cc11001100_hook("i", i + (-1 === i.indexOf("?") ? "?status=" : "&status=") + this.options.status, "assign"), i = cc11001100_hook("i", this.extend ? i + this.extend : i, "assign"), this.$iframeHtml = cc11001100_hook("this.$iframeHtml", $('<iframe  width="' + this.options.frameWidth + '" height="' + this.options.frameHeight + '" name="' + this.options.iframeName + '" src="' + i + '" style="border-radius: 8px;" frameborder="0" scrolling="no"></iframe>'), "assign"), this.$closeBtn = cc11001100_hook("this.$closeBtn", $('<span style="display: inline-block; color: #999; font-size: 22px; cursor: pointer; position:absolute; top:2%; right:3%;-moz-user-select:none; -webkit-user-select:none; user-select:none;">&times</span>'), "assign"), this.$closeBtn.on("click", function () {
          o.close();
        }), this.$markDom.on("click", function () {
          o.close();
        }), this.$loginDom.append(this.$markDom), $("body").append(this.$loginDom), $(this.options.append).append(this.$iframeHtml), $(this.options.append).append(this.$closeBtn), this.options.spm) {
          t({
            spm: cc11001100_hook("spm", this.options.spm, "object-key-init")
          });
        }
      }
    }, {
      key: cc11001100_hook("key", "close", "object-key-init"),
      value: function () {
        this.$loginDom && this.$loginDom.remove(), window.csdn.loginBox.self2 = cc11001100_hook("window.csdn.loginBox.self2", void 0, "assign");
      }
    }, {
      key: cc11001100_hook("key", "fileExtends", "object-key-init"),
      value: function () {
        for (var e in this.inputData) this.defaultParams.hasOwnProperty(e) || (this.extend = cc11001100_hook("this.extend", this.extend + "&" + e + "=" + this.inputData[e], "assign"));
      }
    }, {
      key: cc11001100_hook("key", "init", "object-key-init"),
      value: function (e) {
        this.getUserStatus();
      }
    }, {
      key: cc11001100_hook("key", "executeCallBack", "object-key-init"),
      value: function () {
        this.callBackFn && this.callBackFn(), this.close();
      }
    }, {
      key: cc11001100_hook("key", "executeError", "object-key-init"),
      value: function (e) {
        this.errorFn && this.errorFn(e), this.close();
      }
    }]), o;
  }(), "var-init");
  window.csdn.loginBox = cc11001100_hook("window.csdn.loginBox", {
    self: cc11001100_hook("self", void 0, "object-key-init"),
    self2: cc11001100_hook("self2", void 0, "object-key-init"),
    show: function (o) {
      return e("UserName") ? void void 0 : c() ? void new r(o) : void (this.self || (this.self = cc11001100_hook("this.self", new r(o), "assign")));
    },
    key: function (e) {
      this.self2 || (this.self2 = cc11001100_hook("this.self2", new f(e), "assign"));
    },
    close: function () {
      return this.self.close();
    },
    loginout: function (e) {
      if (c()) return u(), !1;
      var o = cc11001100_hook("o", Object.assign({}, e), "var-init");
      return new Promise(function (e, t) {
        $.ajax({
          type: cc11001100_hook("type", "post", "object-key-init"),
          url: cc11001100_hook("url", "https://passport.csdn.net/account/logout", "object-key-init"),
          data: cc11001100_hook("data", JSON.stringify(o), "object-key-init"),
          crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          success: function (o) {
            e(o);
          },
          error: function (e) {
            t(e);
          }
        });
      });
    },
    setlogin: function () {
      var e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          UserName: cc11001100_hook("UserName", void 0, "object-key-init"),
          UserToken: cc11001100_hook("UserToken", void 0, "object-key-init")
        }, "var-init"),
        o = cc11001100_hook("o", e.UserName || p("UserName"), "var-init"),
        t = cc11001100_hook("t", e.UserToken || p("UserToken"), "var-init"),
        i = cc11001100_hook("i", Object.assign({}, {
          username: cc11001100_hook("username", o, "object-key-init"),
          userToken: cc11001100_hook("userToken", t, "object-key-init")
        }), "var-init");
      return new Promise(function (e, o) {
        $.ajax({
          type: cc11001100_hook("type", "post", "object-key-init"),
          url: cc11001100_hook("url", "https://passport.csdn.net/v1/login/wap/userToken/refresh", "object-key-init"),
          data: cc11001100_hook("data", JSON.stringify(i), "object-key-init"),
          crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          success: function (o) {
            e(o);
          },
          error: function (e) {
            o(e);
          }
        });
      });
    }
  }, "assign"), $(document).on("click", ".c-login-check", function (o) {
    d = cc11001100_hook("d", $(this).data("reportClick") || $(this).parent().data("reportClick") || $(this).parent().parent().data("reportClick") || {}, "assign"), e("UserName") || (o.stopPropagation(), window.csdn.loginBox.show());
  }), $(document).ready(function () {
    var o = cc11001100_hook("o", n(), "var-init"),
      t = cc11001100_hook("t", e("popTimes"), "var-init"),
      r = cc11001100_hook("r", e("popShowed10s"), "var-init"),
      a = cc11001100_hook("a", e("popShowed3t"), "var-init"),
      d = cc11001100_hook("d", "Baidu" === o || "Shoujibaidu" === o, "var-init"),
      p = cc11001100_hook("p", "Toutiao" === o, "var-init"),
      h = cc11001100_hook("h", "Wukong" === o, "var-init"),
      u = cc11001100_hook("u", s(), "var-init"),
      w = cc11001100_hook("w", "Weibo" === o, "var-init");
    if (!(!(window.location.pathname.indexOf("/article/details") >= 0) || !i() || c() || e("UserName") || d || u || p || h || w)) {
      var f = cc11001100_hook("f", setTimeout(function () {
        r ? (clearTimeout(f), f = cc11001100_hook("f", null, "assign")) : (window.csdn.loginBox.show({
          showType: cc11001100_hook("showType", "auto", "object-key-init"),
          way: cc11001100_hook("way", "10s", "object-key-init"),
          spm: cc11001100_hook("spm", "3001.7902", "object-key-init")
        }), l("popShowed10s", "yes", "toToday24h"), clearTimeout(f), f = cc11001100_hook("f", null, "assign"));
      }, 1e4), "var-init");
      t ? "one" === t ? l("popTimes", "two", "toToday24h") : a || (window.csdn.loginBox.show({
        showType: cc11001100_hook("showType", "auto", "object-key-init"),
        way: cc11001100_hook("way", "3t", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.7961", "object-key-init")
      }), l("popShowed3t", "yes", "toToday24h")) : l("popTimes", "one", "toToday24h");
    }
  }), $(document).on("visibilitychange ready", function (o) {
    var t = cc11001100_hook("t", n(), "var-init"),
      r = cc11001100_hook("r", "Baidu" === t || "Shoujibaidu" === t, "var-init"),
      d = cc11001100_hook("d", "Toutiao" === t, "var-init"),
      p = cc11001100_hook("p", "Weibo" === t, "var-init"),
      h = cc11001100_hook("h", s(), "var-init"),
      u = cc11001100_hook("u", e("popShowed30m"), "var-init"),
      w = cc11001100_hook("w", window.location.pathname, "var-init"),
      f = cc11001100_hook("f", w.indexOf("/article/details") >= 0, "var-init");
    u || !i() || c() || e("UserName") || r || h || d || p || ("visible" === o.target.visibilityState ? a = cc11001100_hook("a", window.setInterval(function () {
      var o = cc11001100_hook("o", e("popShowed30m"), "var-init"),
        t = cc11001100_hook("t", +e("unloadshowm") || 0, "var-init");
      o ? (window.clearInterval(a), a = cc11001100_hook("a", null, "assign")) : t >= 30 && f ? (window.csdn.loginBox.show({
        showType: cc11001100_hook("showType", "auto", "object-key-init"),
        way: cc11001100_hook("way", "30m", "object-key-init"),
        spm: cc11001100_hook("spm", "3001.8531", "object-key-init")
      }), l("popShowed30m", "yes", "toToday24h")) : (t++, l("unloadshowm", t, "toToday24h"));
    }, 6e4), "assign") : "hidden" === o.target.visibilityState && (window.clearInterval(a), a = cc11001100_hook("a", null, "assign")));
  }), $(document).ready(function () {
    var o = cc11001100_hook("o", n(), "var-init"),
      t = cc11001100_hook("t", e("downloadPopShowed"), "var-init"),
      r = cc11001100_hook("r", "Baidu" === o || "Shoujibaidu" === o, "var-init"),
      a = cc11001100_hook("a", s(), "var-init"),
      d = cc11001100_hook("d", window.location.href, "var-init"),
      p = cc11001100_hook("p", d.indexOf("https://download.csdn.net/") >= 0, "var-init");
    t || !p || !i() || c() || e("UserName") || r || a || (window.csdn.loginBox.show({
      showType: cc11001100_hook("showType", "auto", "object-key-init"),
      way: cc11001100_hook("way", "download", "object-key-init"),
      spm: cc11001100_hook("spm", "3001.8532", "object-key-init")
    }), t || l("downloadPopShowed", "yes", "toToday24h"));
  }), $(document).ready(function () {
    var o = cc11001100_hook("o", s(), "var-init"),
      t = cc11001100_hook("t", e("keyTimes"), "var-init"),
      n = cc11001100_hook("n", e("keyShowed"), "var-init"),
      r = cc11001100_hook("r", window.location.pathname, "var-init"),
      a = cc11001100_hook("a", r.indexOf("/article/details") >= 0, "var-init");
    if (!n && a && i() && !c() && e("UserName") && o) {
      var d = cc11001100_hook("d", setTimeout(function () {
        if (n) return clearTimeout(d), void (d = cc11001100_hook("d", null, "assign"));
        window.csdn.loginBox.key({
          spm: cc11001100_hook("spm", "3001.7962", "object-key-init")
        }), n || l("keyShowed", "yes", "toToday24h"), clearTimeout(d), d = cc11001100_hook("d", null, "assign");
      }, 1e4), "var-init");
      if (!t) return void l("keyTimes", "one", "toToday24h");
      if ("one" === t) return void l("keyTimes", "two", "toToday24h");
      window.csdn.loginBox.key({
        spm: cc11001100_hook("spm", "3001.7963", "object-key-init")
      }), n || l("keyShowed", "yes", "toToday24h");
    }
  }), window.addEventListener("message", function (e) {
    switch (void 0, e.data) {
      case "key-close":
        window.csdn.loginBox.self2 && window.csdn.loginBox.self2.close();
        break;
      case "im_client":
        window.csdn.loginBox.self2 && window.csdn.loginBox.self2.close(), window.open("https://csdn.s2.udesk.cn/im_client/?web_plugin_id=29181");
        break;
      case "pop":
        window.csdn.loginBox.self2 && window.csdn.loginBox.self2.close(), window.csdn.loginBox.show();
        break;
      case "page_reload":
        window.csdn.loginBox.self2 && window.csdn.loginBox.self2.close(), window.location.reload();
        break;
      case "page_reload_onclose":
        window.csdn.loginBox.self && window.csdn.loginBox.self.changeCloseReLoadSwitch(1);
        break;
      case "pay-cb":
        window.csdn.loginBox.self && window.csdn.loginBox.self.cb && window.csdn.loginBox.self.cb();
        break;
      case "pay-data":
        window.csdn.loginBox.self && window.csdn.loginBox.self.$iframeHtml[0].contentWindow.postMessage({
          payInfo: cc11001100_hook("payInfo", window.csdn.loginBox.self.payInfo, "object-key-init")
        }, "*");
        break;
      default:
        return !1;
    }
  }, !1);
}();