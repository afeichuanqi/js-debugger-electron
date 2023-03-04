"use strict";

var _typeof = cc11001100_hook("_typeof", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
  return typeof n;
} : function (n) {
  return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
}, "var-init");
!function (n, t) {
  function e(n) {
    cc11001100_hook("n", n, "function-parameter");
    var e = cc11001100_hook("e", t.createElement("link"), "var-init");
    e.rel = cc11001100_hook("e.rel", "stylesheet", "assign"), e.type = cc11001100_hook("e.type", "text/css", "assign"), e.href = cc11001100_hook("e.href", n, "assign"), t.getElementsByTagName("head")[0].appendChild(e);
  }
  function o(n, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    Object.getOwnPropertyNames(n).forEach(function (e) {
      void 0 !== t[e] && null !== t[e] && ("object" === _typeof(t[e]) && "contentEl" !== e ? o(n[e], t[e]) : n[e] = cc11001100_hook("n[e]", t[e], "assign"));
    }, null);
  }
  function s() {
    var t = cc11001100_hook("t", n.scrollY, "var-init"),
      e = cc11001100_hook("e", t / 100, "var-init"),
      o = cc11001100_hook("o", setInterval(function () {
        t -= cc11001100_hook("t", e, "assign"), n.scrollTo(0, t), t <= 0 && clearInterval(o);
      }, 10), "var-init");
  }
  function a() {
    var e = cc11001100_hook("e", t.createElement("div"), "var-init");
    if (e.innerHTML = cc11001100_hook("e.innerHTML", f, "assign"), i.contentEl.appendChild(e), i.goTop.isShow) {
      var o = function () {
          n.scrollY >= c ? a.classList.remove("go-top-hide") : a.classList.add("go-top-hide");
        },
        a = cc11001100_hook("a", t.querySelector("a.option-box[data-type='gotop']"), "var-init"),
        c = cc11001100_hook("c", n.outerHeight, "var-init"),
        l = cc11001100_hook("l", t.body.scrollHeight, "var-init");
      o(), n.addEventListener("scroll", o, !1), n.addEventListener("resize", function () {
        c = cc11001100_hook("c", n.outerHeight, "assign"), l = cc11001100_hook("l", t.body.scrollHeight, "assign"), o();
      }), a.addEventListener("click", s, !1);
    }
    if (i.cs.isShow) {
      t.querySelector("a.option-box[data-type='cs']").addEventListener("click", function () {
        null !== i.cs.clickFun ? i.cs.clickFun() : n.open(i.cs.clickUrl, "_blank");
      }, !1);
    }
    if (i.help.isShow) {
      t.querySelector("a.option-box[data-type='cs']").addEventListener("click", function () {
        null !== i.help.clickFun ? i.help.clickFun() : n.open(i.help.clickUrl, "_blank");
      }, !1);
    }
    if (i.guide.isShow) {
      t.querySelector("a.option-box[data-type='guide']").addEventListener("click", function () {
        null !== i.guide.clickFun ? i.guide.clickFun() : n.open(i.guide.clickUrl, "_blank");
      }, !1);
    }
    if (i.mpNps.isShow) {
      t.querySelector("a.option-box[data-type='mpNps']").addEventListener("click", function () {
        var n = cc11001100_hook("n", i.mpNps.el && t.querySelector(i.mpNps.el), "var-init");
        n && ("none" == n.style.display ? n.style.display = cc11001100_hook("n.style.display", "block", "assign") : n.style.display = cc11001100_hook("n.style.display", "none", "assign"));
      }, !1);
    }
  }
  var c = cc11001100_hook("c", (location.protocol.substr(0, 4), "3.4"), "var-init"),
    i = cc11001100_hook("i", {}, "var-init"),
    l = cc11001100_hook("l", {
      options: {},
      goTop: cc11001100_hook("goTop", s, "object-key-init")
    }, "var-init");
  void 0 === n.csdn && (n.csdn = cc11001100_hook("n.csdn", {}, "assign")), n.csdn.sideToolbar = cc11001100_hook("n.csdn.sideToolbar", Object.assign(l, n.csdn.sideToolbar), "assign");
  var r = cc11001100_hook("r", n.csdn.sideToolbar.options, "var-init");
  !function () {
    var n = cc11001100_hook("n", r.url ? r.url : "https://g.csdnimg.cn/side-toolbar/" + c, "var-init");
    e(n + "/side-toolbar.css"), i = cc11001100_hook("i", {
      url: cc11001100_hook("url", n, "object-key-init"),
      opinion: {
        isShow: cc11001100_hook("isShow", !1, "object-key-init")
      },
      qr: {
        isShow: cc11001100_hook("isShow", !0, "object-key-init"),
        btnImgSrc: cc11001100_hook("btnImgSrc", n + "/images/qr.png", "object-key-init"),
        data: cc11001100_hook("data", [{
          tabName: cc11001100_hook("tabName", "下载 APP", "object-key-init"),
          imgSrc: cc11001100_hook("imgSrc", n + "/images/qr_app.png", "object-key-init"),
          desc: cc11001100_hook("desc", "程序员都在用的中文IT技术交流社区", "object-key-init")
        }, {
          tabName: cc11001100_hook("tabName", "公众号", "object-key-init"),
          imgSrc: cc11001100_hook("imgSrc", n + "/images/qr_wechat.png", "object-key-init"),
          desc: cc11001100_hook("desc", "专业的中文 IT 技术社区，与千万技术人共成长", "object-key-init")
        }, {
          tabName: cc11001100_hook("tabName", "视频号", "object-key-init"),
          imgSrc: cc11001100_hook("imgSrc", n + "/images/qr_video.png", "object-key-init"),
          desc: cc11001100_hook("desc", "关注【CSDN】视频号，行业资讯、技术分享精彩不断，直播好礼送不停！", "object-key-init")
        }], "object-key-init")
      },
      cs: {
        isShow: cc11001100_hook("isShow", !0, "object-key-init"),
        btnImgSrc: cc11001100_hook("btnImgSrc", n + "/images/kefu.png", "object-key-init"),
        clickUrl: cc11001100_hook("clickUrl", "https://csdn.s2.udesk.cn/im_client/?web_plugin_id=29181", "object-key-init"),
        clickFun: cc11001100_hook("clickFun", null, "object-key-init")
      },
      help: {
        isShow: cc11001100_hook("isShow", !1, "object-key-init"),
        btnImgSrc: cc11001100_hook("btnImgSrc", n + "/images/bangzhucopy.png", "object-key-init"),
        clickUrl: cc11001100_hook("clickUrl", "", "object-key-init"),
        clickFun: cc11001100_hook("clickFun", null, "object-key-init")
      },
      report: {
        isShow: cc11001100_hook("isShow", !1, "object-key-init"),
        btnImgSrc: cc11001100_hook("btnImgSrc", n + "/images/jubaocopy.png", "object-key-init")
      },
      goTop: {
        isShow: cc11001100_hook("isShow", !0, "object-key-init"),
        btnImgSrc: cc11001100_hook("btnImgSrc", n + "/images/fanhuidingbucopy.png", "object-key-init")
      },
      guide: {
        isShow: cc11001100_hook("isShow", !1, "object-key-init"),
        btnImgSrc: cc11001100_hook("btnImgSrc", n + "/images/guide.png", "object-key-init"),
        clickUrl: cc11001100_hook("clickUrl", "https://blogdev.blog.csdn.net/article/details/108241158", "object-key-init"),
        clickFun: cc11001100_hook("clickFun", null, "object-key-init")
      },
      theme: cc11001100_hook("theme", "white", "object-key-init"),
      contentEl: cc11001100_hook("contentEl", t.body, "object-key-init"),
      afterFinished: cc11001100_hook("afterFinished", null, "object-key-init"),
      mpNps: {
        isShow: cc11001100_hook("isShow", !1, "object-key-init"),
        btnImgSrc: cc11001100_hook("btnImgSrc", n + "/images/nps.png", "object-key-init"),
        el: cc11001100_hook("el", "", "object-key-init")
      }
    }, "assign"), o(i, r);
  }();
  var p = cc11001100_hook("p", "", "var-init"),
    d = cc11001100_hook("d", "", "var-init"),
    u = cc11001100_hook("u", "", "var-init"),
    g = cc11001100_hook("g", "", "var-init"),
    b = cc11001100_hook("b", "", "var-init"),
    m = cc11001100_hook("m", "", "var-init"),
    h = cc11001100_hook("h", "", "var-init"),
    y = cc11001100_hook("y", "", "var-init");
  if (i.opinion.isShow && (p = cc11001100_hook("p", '\n    <a class="option-box" data-type="feedback">\n      <img src="' + i.opinion.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">意见<br>反馈</span>\n    </a>\n    ', "assign")), i.guide.isShow && (d = cc11001100_hook("d", '\n    <a class="option-box" data-type="guide">\n      <img src="' + i.guide.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">新手<br>引导</span>\n    </a>\n    ', "assign")), i.qr.isShow) {
    var S = cc11001100_hook("S", "", "var-init");
    i.qr.data.forEach(function (n, t) {
      S += cc11001100_hook("S", '\n      <div class="tab-pane">\n        <input type="radio" ' + (0 === t ? "checked" : "") + ' name="tab" id="tab' + t + '"/>\n        <label class="tab-item" for="tab' + t + '">' + n.tabName + '</label>\n        <div class="tab-content">\n          <img src="' + n.imgSrc + '" alt="' + n.desc + '">\n          <p class="desc">' + n.desc + "</p>\n        </div>\n      </div>\n      ", "assign");
    }), u = cc11001100_hook("u", '\n    <a class="option-box no—h" data-type="app">\n      <img src="' + i.qr.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">手机看</span>\n      <div class="app-qr-box">\n        <div class="bg-box">\n          ' + S + "\n        </div>\n      </div>\n    </a>\n    ", "assign");
  }
  i.cs.isShow && (g = cc11001100_hook("g", '\n    <a class="option-box" data-type="cs">\n      <img src="' + i.cs.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">客服</span>\n    </a>\n    ', "assign")), i.help.isShow && (b = cc11001100_hook("b", '\n    <a class="option-box" data-type="help">\n      <img src="' + i.help.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">帮助</span>\n    </a>\n    ', "assign")), i.report.isShow && (m = cc11001100_hook("m", '\n    <a class="option-box" data-type="report">\n      <span class="show-txt" style=\'display:flex;opacity:100;\'>举报</span>\n    </a>\n    ', "assign")), i.goTop.isShow && (h = cc11001100_hook("h", '\n    <a class="option-box go-top-hide" data-type="gotop">\n      <img src="' + i.goTop.btnImgSrc + '" alt="" srcset="">\n      <span class="show-txt">返回<br>顶部</span>\n    </a>\n    ', "assign")), i.mpNps.isShow && (y = cc11001100_hook("y", '\n    <a class="option-box" data-type="mpNps">\n    <img src="' + i.mpNps.btnImgSrc + '" alt="" srcset="">\n    <span class="show-txt">调研</span>\n    </a>\n    ', "assign"));
  var f = cc11001100_hook("f", '\n  <div class="csdn-side-toolbar ' + ("white" == i.theme ? "" : i.theme) + '">\n    ' + d + "\n    " + p + "\n    " + u + "\n    " + y + "\n    " + g + "\n    " + b + "\n    " + m + "\n    " + h + "\n  </div>\n  ", "var-init");
  null !== i.afterFinished && i.afterFinished();
  var v,
    w = function (n) {
      var t = cc11001100_hook("t", !1, "var-init"),
        e = function () {
          t || (t = cc11001100_hook("t", !0, "assign"), n && n());
        };
      !function n() {
        try {
          doc.documentElement.doScroll("left");
        } catch (t) {
          return void setTimeout(n, 50);
        }
        e();
      }(), doc.onreadystatechange = cc11001100_hook("doc.onreadystatechange", function () {
        "complete" === doc.readyState && (doc.onreadystatechange = cc11001100_hook("doc.onreadystatechange", null, "assign"), e());
      }, "assign");
    };
  !function (n) {
    t.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(t.readyState) ? setTimeout(function () {
      n && n();
    }, 0) : (v = cc11001100_hook("v", function () {
      t.removeEventListener("DOMContentLoaded", v, !1), n();
    }, "assign"), t.addEventListener("DOMContentLoaded", v, !1)) : t.attachEvent && w(n);
  }(a);
}(window, document);