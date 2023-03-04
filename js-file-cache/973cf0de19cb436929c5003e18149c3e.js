!function (e) {
  "use strict";

  function t() {
    return !!window.navigator.userAgent.toLowerCase().match(/(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i);
  }
  function n() {
    return !!window.navigator.userAgent.toLowerCase().match(/(csdn)/i);
  }
  function o(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var t = cc11001100_hook("t", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
      var o = cc11001100_hook("o", t[n].split("="), "var-init");
      if (e == o[0]) return o[1];
    }
    return null;
  }
  function r(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.target || e.srcElement, "var-init"),
      n = cc11001100_hook("n", document.documentElement.scrollTop, "var-init");
    if (t.className.indexOf(w) > -1) {
      e.preventDefault();
      var o = cc11001100_hook("o", document.getElementById("hljs-copy-el"), "var-init");
      o || (o = cc11001100_hook("o", document.createElement("textarea"), "assign"), o.style.position = cc11001100_hook("o.style.position", "absolute", "assign"), o.style.left = cc11001100_hook("o.style.left", "-9999px", "assign"), o.style.top = cc11001100_hook("o.style.top", n + "px", "assign"), o.id = cc11001100_hook("o.id", "hljs-copy-el", "assign"), document.body.appendChild(o)), o.textContent = cc11001100_hook("o.textContent", e.currentTarget.innerText.replace(/[\u00A0]/gi, " "), "assign"), m($(e.currentTarget.parentNode).attr("data-index")), a("#hljs-copy-el");
      try {
        var r = cc11001100_hook("r", document.execCommand("copy"), "var-init");
        o.remove(), t.dataset.title = cc11001100_hook("t.dataset.title", r ? y : x, "assign"), r && setTimeout(function () {
          t.dataset.title = cc11001100_hook("t.dataset.title", h, "assign");
        }, 3e3);
      } catch (i) {
        t.dataset.title = cc11001100_hook("t.dataset.title", x, "assign");
      }
    }
  }
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.target || e.srcElement, "var-init"),
      n = cc11001100_hook("n", document.documentElement.scrollTop, "var-init");
    if (t.className.indexOf(w) > -1) {
      e.preventDefault();
      var o = cc11001100_hook("o", document.getElementById("hljs-copy-el"), "var-init");
      o || (o = cc11001100_hook("o", document.createElement("textarea"), "assign"), o.style.position = cc11001100_hook("o.style.position", "absolute", "assign"), o.style.left = cc11001100_hook("o.style.left", "-9999px", "assign"), o.style.top = cc11001100_hook("o.style.top", n + "px", "assign"), o.id = cc11001100_hook("o.id", "hljs-copy-el", "assign"), document.body.appendChild(o)), o.textContent = cc11001100_hook("o.textContent", e.currentTarget.parentNode.innerText.replace(/[\u00A0]/gi, " "), "assign"), m($(e.currentTarget.parentNode).attr("data-index")), a("#hljs-copy-el");
      try {
        var r = cc11001100_hook("r", document.execCommand("copy"), "var-init");
        o.remove(), t.dataset.title = cc11001100_hook("t.dataset.title", r ? y : x, "assign"), r && setTimeout(function () {
          t.dataset.title = cc11001100_hook("t.dataset.title", h, "assign");
        }, 3e3);
      } catch (i) {
        t.dataset.title = cc11001100_hook("t.dataset.title", x, "assign");
      }
    }
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (e = cc11001100_hook("e", "string" == typeof e ? document.querySelector(e) : e, "assign"), navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      var t = cc11001100_hook("t", e.contentEditable, "var-init"),
        n = cc11001100_hook("n", e.readOnly, "var-init");
      e.contentEditable = cc11001100_hook("e.contentEditable", !0, "assign"), e.readOnly = cc11001100_hook("e.readOnly", !0, "assign");
      var o = cc11001100_hook("o", document.createRange(), "var-init");
      o.selectNodeContents(e);
      var r = cc11001100_hook("r", window.getSelection(), "var-init");
      r.removeAllRanges(), r.addRange(o), e.setSelectionRange(0, 999999), e.contentEditable = cc11001100_hook("e.contentEditable", t, "assign"), e.readOnly = cc11001100_hook("e.readOnly", n, "assign");
    } else e.select();
  }
  function d() {
    var e = cc11001100_hook("e", document.createElement("style"), "var-init");
    e.type = cc11001100_hook("e.type", "text/css", "assign"), window.navigator.userAgent.toLowerCase().match(/(csdn)/i) && isShowCodeFull ? e.innerHTML = cc11001100_hook("e.innerHTML", ["pre{position: relative}", "pre:hover .code-full-screen{display:block !important;}", ".code-full-screen{", "display: none !important;", "position: absolute;", "right: 4px;", "top: 4px;", "width: 24px !important;", "height: 24px !important;", "margin: 4px !important;", "}", "pre:hover .{0}{display: block}", ".{0}{", "display: none;", "position: absolute;", "right: 34px;", "top: 4px;", "font-size: 12px;", "color: #ffffff;", "background-color: #9999AA;", "padding: 2px 8px;", "margin: 4px !important;", "border-radius: 4px;", "cursor: pointer;", " box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);", "}", ".{0}:after{", "content: attr(data-title)", "}", "code .{0}{", "margin: 2px 8px;", "}"].join("").format(w), "assign") : e.innerHTML = cc11001100_hook("e.innerHTML", ["pre{position: relative}", "pre:hover .code-full-screen{display:none !important;}", ".code-full-screen{", "display: none !important;", "position: absolute;", "right: 4px;", "top: 3px;", "width: 24px !important;", "height: 24px !important;", "margin: 4px !important;", "}", "pre:hover .{0}{display: block}", ".{0}{", "display: none;", "position: absolute;", "right: 4px;", "top: 4px;", "font-size: 12px;", "color: #ffffff;", "background-color: #9999AA;", "padding: 2px 8px;", "margin: 8px;", "border-radius: 4px;", "cursor: pointer;", " box-shadow: 0 2px 4px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.05);", "}", ".{0}:after{", "content: attr(data-title)", "}", "code .{0}{", "margin: 2px 8px;", "}"].join("").format(w), "assign"), document.getElementsByTagName("head")[0].appendChild(e);
  }
  function c() {
    "complete" === document.readyState ? s() : e.addEventListener("DOMContentLoaded", s);
  }
  function s() {
    try {
      var e;
      if ("ckeditor" == v) {
        e = cc11001100_hook("e", document.querySelectorAll("code.hljs"), "assign");
        for (var t in e) e.hasOwnProperty(t) && l(e[t].parentNode);
      } else {
        e = cc11001100_hook("e", A, "assign");
        for (var t in e) e.hasOwnProperty(t) && l(e[t]);
      }
    } catch (n) {
      console.error("CopyButton error: ", n);
    }
  }
  function p(e) {
    cc11001100_hook("e", e, "function-parameter");
    var r = cc11001100_hook("r", e.target || e.srcElement, "var-init");
    r.className.indexOf(w) > -1 && (n() ? window.location.href = cc11001100_hook("window.location.href", "https://passport.csdn.net/account/login?ref=codecopy", "assign") : t() ? toobarFlag(20, 21) ? $(".ab-app-shadowbox").show() : window.csdn.loginBox.show({
      spm: cc11001100_hook("spm", "1001.2101.3001.7759", "object-key-init")
    }) : o("UserName") || window.csdn.loginBox.show({
      spm: cc11001100_hook("spm", "1001.2101.3001.4334", "object-key-init")
    }));
  }
  function l(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "", "var-init");
    if ("object" == typeof e && null !== e) {
      var n = cc11001100_hook("n", ".signin(event)", "var-init"),
        o = cc11001100_hook("o", "hljs", "var-init"),
        r = cc11001100_hook("r", ".copyCode(event)", "var-init");
      "mdeditor" === v && (o = cc11001100_hook("o", "mdcp", "assign")), r = cc11001100_hook("r", o + r, "assign"), C && (r = cc11001100_hook("r", o + n, "assign"), t = cc11001100_hook("t", 'data-report-click=\'{"spm":"1001.2101.3001.4334"}\'', "assign")), window.navigator.userAgent.toLowerCase().match(/(csdn)/i) && isShowCodeFull ? e.innerHTML = cc11001100_hook("e.innerHTML", e.innerHTML + ('<img class="code-full-screen app_remove_content no-enlarge-img" src="' + blogStaticHost + 'dist/app/img/codeAmplify.png"><div class="{0} {2}" data-title="{1}" ' + t + "></div>").format(w, h, b), "assign") : e.innerHTML = cc11001100_hook("e.innerHTML", e.innerHTML + ('<div class="{0} {2}" data-title="{1}" ' + t + "></div>").format(w, h, b), "assign"), "hljs" === o ? e.querySelector(".hljs-button").setAttribute("onclick", r) : (e.setAttribute("onclick", r), e.style.position = cc11001100_hook("e.style.position", "unset", "assign"));
    }
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", "1001.2101.3001.4259", "var-init"),
      n = cc11001100_hook("n", JSON.stringify({
        codeId: cc11001100_hook("codeId", e, "object-key-init")
      }), "var-init");
    if (window.csdn.report && "function" == typeof window.csdn.report.reportClick) window.csdn.report.reportClick({
      spm: cc11001100_hook("spm", t, "object-key-init"),
      extra: cc11001100_hook("extra", n, "object-key-init")
    });else if (window.isApp) {
      var o = cc11001100_hook("o", {
          spm: cc11001100_hook("spm", t, "object-key-init"),
          extra: cc11001100_hook("extra", n, "object-key-init")
        }, "var-init"),
        r = cc11001100_hook("r", {
          trackingInfo: cc11001100_hook("trackingInfo", JSON.stringify(o), "object-key-init")
        }, "var-init");
      f && window.jsCallBackListener.csdntrackclick(JSON.stringify(r)), g && window.webkit.messageHandlers.csdntrackclick.postMessage(JSON.stringify(r));
    }
  }
  if (window.ActiveXObject || "ActiveXObject" in window) return !1;
  var u = cc11001100_hook("u", navigator.userAgent, "var-init"),
    f = cc11001100_hook("f", u.indexOf("Android") > -1 || u.indexOf("Adr") > -1, "var-init"),
    g = cc11001100_hook("g", !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), "var-init"),
    w = cc11001100_hook("w", "hljs-button", "var-init"),
    h = cc11001100_hook("h", "复制", "var-init"),
    x = cc11001100_hook("x", "复制失败", "var-init"),
    y = cc11001100_hook("y", "复制成功", "var-init"),
    v = cc11001100_hook("v", void 0, "var-init"),
    b = cc11001100_hook("b", "", "var-init"),
    C = cc11001100_hook("C", !1, "var-init");
  n() || o("UserName") || (C = cc11001100_hook("C", !0, "assign")), C && (h = cc11001100_hook("h", "登录后复制", "assign"), b = cc11001100_hook("b", "signin", "assign")), $("#content_views").find("pre").each(function (e, t) {
    $(t).attr("data-index", e);
  }), String.prototype.format = cc11001100_hook("String.prototype.format", String.prototype.f = cc11001100_hook("String.prototype.f", function () {
    var e = cc11001100_hook("e", arguments, "var-init");
    return !!this && this.replace(/\{(\d+)\}/g, function (t, n) {
      return e[n] ? e[n] : t;
    });
  }, "assign"), "assign");
  var A = cc11001100_hook("A", document.querySelectorAll("pre code"), "var-init");
  document.querySelectorAll("div.htmledit_views").length > 0 ? (e.hljs.initCopyButtonOnLoad = cc11001100_hook("e.hljs.initCopyButtonOnLoad", c, "assign"), e.hljs.addCopyButton = cc11001100_hook("e.hljs.addCopyButton", l, "assign"), e.hljs.copyCode = cc11001100_hook("e.hljs.copyCode", i, "assign"), e.hljs.signin = cc11001100_hook("e.hljs.signin", p, "assign"), d(), v = cc11001100_hook("v", "ckeditor", "assign")) : A.length > 0 && (window.mdcp ? window.mdcp : window.mdcp = cc11001100_hook("window.mdcp", {}, "assign"), window.mdcp.copyCode = cc11001100_hook("window.mdcp.copyCode", r, "assign"), window.mdcp.signin = cc11001100_hook("window.mdcp.signin", p, "assign"), c(), d(), v = cc11001100_hook("v", "mdeditor", "assign"));
}(window);