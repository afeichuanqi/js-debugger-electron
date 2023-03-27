!function () {
  function c(a) {
    cc11001100_hook("a", a, "function-parameter");
    var n = cc11001100_hook("n", 0, "var-init"),
      e = cc11001100_hook("e", 0, "var-init"),
      i = cc11001100_hook("i", 0, "var-init"),
      o = cc11001100_hook("o", 0, "var-init"),
      t = cc11001100_hook("t", window.innerWidth, "var-init"),
      c = cc11001100_hook("c", window.innerHeight, "var-init");
    function d(t) {
      cc11001100_hook("t", t, "function-parameter");
      (t = cc11001100_hook("t", t || window.event, "assign")).preventDefault(), n = cc11001100_hook("n", i - t.clientX, "assign"), e = cc11001100_hook("e", o - t.clientY, "assign"), i = cc11001100_hook("i", t.clientX, "assign"), o = cc11001100_hook("o", t.clientY, "assign"), a.style.top = cc11001100_hook("a.style.top", a.offsetTop - e + "px", "assign"), a.style.left = cc11001100_hook("a.style.left", a.offsetLeft - n + "px", "assign");
    }
    function w() {
      window.onmouseup = cc11001100_hook("window.onmouseup", null, "assign"), window.onmousemove = cc11001100_hook("window.onmousemove", null, "assign"), s();
    }
    function s() {
      a.style.top = cc11001100_hook("a.style.top", a.offsetTop <= 0 ? "0px" : a.offsetTop + a.offsetHeight > c ? c - a.offsetHeight + "px" : a.offsetTop + "px", "assign"), a.style.left = cc11001100_hook("a.style.left", a.offsetLeft <= 0 ? "0px" : a.offsetLeft + a.offsetWidth > t ? t - a.offsetWidth + "px" : a.offsetLeft + "px", "assign");
    }
    document.getElementById("cf-chat-window-drag-handle").onmousedown = cc11001100_hook("document.getElementById(\"cf-chat-window-drag-handle\").onmousedown", function (t) {
      (t = cc11001100_hook("t", t || window.event, "assign")).preventDefault(), i = cc11001100_hook("i", t.clientX, "assign"), o = cc11001100_hook("o", t.clientY, "assign"), window.onmouseup = cc11001100_hook("window.onmouseup", w, "assign"), window.onmousemove = cc11001100_hook("window.onmousemove", d, "assign");
    }, "assign"), window.addEventListener("resize", function () {
      t = cc11001100_hook("t", window.innerWidth, "assign"), c = cc11001100_hook("c", window.innerHeight, "assign"), a.classList.contains("show") && s();
    });
  }
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    this.domain = cc11001100_hook("this.domain", t.domain, "assign"), this.chatWindowZIndex = cc11001100_hook("this.chatWindowZIndex", t.chatWindowZIndex || 11e3, "assign"), this.domain || (this.domain = cc11001100_hook("this.domain", "https://www.cathaypacific.com", "assign")), this.locale = cc11001100_hook("this.locale", t.locale, "assign"), this.locale || (this.locale = cc11001100_hook("this.locale", "en_HK", "assign")), this.chatWindowStatusCallback = cc11001100_hook("this.chatWindowStatusCallback", t.chatWindowStatusCallback, "assign"), this.init(this.domain, this.locale, t);
  }
  t.prototype = cc11001100_hook("t.prototype", {
    init: function (t, a, n) {
      var e;
      n && n.chatWidget && this.addChatWidget(), this.bind(this.domain, this.locale), "true" === (n = cc11001100_hook("n", "chatAutoOpen", "assign"), e = cc11001100_hook("e", e || window.location.href, "assign"), n = cc11001100_hook("n", n.replace(/[\[\]]/g, "\\$&"), "assign"), (e = cc11001100_hook("e", new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)").exec(e), "assign")) ? e[2] ? decodeURIComponent(e[2].replace(/\+/g, " ")) : "" : null) && this.showChatWindow();
      var i = cc11001100_hook("i", this, "var-init");
      window.addEventListener("message", function (t) {
        var a;
        t.origin !== window.location.origin && "https://www.cathaypacific.com" !== t.origin && "https://www-t0.ete.cathaypacific.com" !== t.origin && "https://www-t1.ete.cathaypacific.com" !== t.origin || ("vera:chatWindowClosed" === t.data ? i.chatWindowStatusCallback && i.chatWindowStatusCallback("closed") : "vera:chatWindowMinimized" === t.data ? i.chatWindowStatusCallback && i.chatWindowStatusCallback("minimized") : "vera:forceCloseChatWindow" === t.data ? 0 < $("#cf-chat-window-popup").length && ($("#cf-chat-window-popup").remove(), i.chatWindowStatusCallback && i.chatWindowStatusCallback("closed")) : "vera:forceMinimizeChatWindow" !== t.data || null != (a = cc11001100_hook("a", $("#cf-chat-window-popup"), "assign")) && 0 < a.length && a.animate({
          height: cc11001100_hook("height", "46px", "object-key-init")
        }, 300, function () {
          a.removeClass("show"), i.chatWindowStatusCallback && i.chatWindowStatusCallback("minimized");
        }));
      }, !1);
    },
    bind: function (t, a) {
      var n,
        e,
        i,
        o = cc11001100_hook("o", $(".btn-chat-bot"), "var-init");
      null != o && 0 < o.length && null != (n = cc11001100_hook("n", $("#cf-chat-window-wrapper"), "assign")) && 0 == n.length && (o = cc11001100_hook("o", "", "assign"), n = cc11001100_hook("n", window.cxDataLayer.page, "assign"), null != window.cxDataLayer && (o = cc11001100_hook("o", window.cxDataLayer.application.name, "assign"), n = cc11001100_hook("n", (n = cc11001100_hook("n", window.cxDataLayer.page.name, "assign")) || window.cxDataLayer.page.page_id, "assign")), a = cc11001100_hook("a", '<iframe id="cf-chat-window-wrapper" src="' + (t + "/verachatbot/#/#locale#?chat_window=floating_window&app=" + o + "&pageId=" + n).replace("#locale#", a) + '" allowtransparency="false" frameborder="0"></iframe>', "assign"), $("body").append('<div id="cf-chat-window-popup"><div id="cf-chat-window-drag-handle"></div>' + a + "</div>"), e = cc11001100_hook("e", this, "assign"), $(".btn-chat-bot").click(function (t) {
        t.preventDefault(), e.showChatWindow();
      }), c($("#cf-chat-window-popup")[0]), i = cc11001100_hook("i", this, "assign"), $("#cf-chat-window-wrapper").on("load", function () {
        i.isLoaded = cc11001100_hook("i.isLoaded", !0, "assign");
      }), a = cc11001100_hook("a", {
        data: {
          sdk: {
            version: cc11001100_hook("version", "1.3.0", "object-key-init")
          },
          application: cc11001100_hook("application", window.cxDataLayer ? window.cxDataLayer.application : null, "object-key-init"),
          page: cc11001100_hook("page", window.cxDataLayer ? window.cxDataLayer.page : null, "object-key-init")
        },
        event: cc11001100_hook("event", "vera:setData", "object-key-init")
      }, "assign"), this.sendToChatFramework(a, !0));
    },
    _sendToChatFramework: function (t) {
      var a = cc11001100_hook("a", document.getElementById("cf-chat-window-wrapper"), "var-init");
      a && a.contentWindow.postMessage(t, this.domain);
    },
    sendToChatFramework: function (t, a) {
      var n, e;
      this.isLoaded || !a ? this._sendToChatFramework(t) : (n = cc11001100_hook("n", this, "assign"), e = cc11001100_hook("e", setInterval(function () {
        n.isLoaded && (clearInterval(e), n._sendToChatFramework(t));
      }, 100), "assign"));
    },
    setLiveChatData: function (t) {
      this.sendToChatFramework({
        data: {
          liveChat: cc11001100_hook("liveChat", t, "object-key-init")
        },
        event: cc11001100_hook("event", "vera:setData", "object-key-init")
      }, !0);
    },
    setVeraChatData: function (t) {
      this.sendToChatFramework({
        data: cc11001100_hook("data", t, "object-key-init"),
        event: cc11001100_hook("event", "vera:send", "object-key-init")
      }, !0);
    },
    addChatWidget: function () {
      var t,
        a = cc11001100_hook("a", $(".cf-chat-widget"), "var-init");
      null != a && 0 == a.length && ($("body").append('<div class="cf-chat-widget"><a class="cx-newpage-link opt-widget-button btn-chat-bot"><span class="widget-icon"></span><span>Chat with us</span><span class="sr-only">Open a new window</span><span class="icon-newpage" aria-hidden="true"></span></a></a></div>'), (t = cc11001100_hook("t", $(".opt-widget-button"), "assign")).on("mouseenter touch", function () {
        t.stop().animate({
          marginRight: cc11001100_hook("marginRight", 0, "object-key-init")
        });
      }).mouseleave(function () {
        t.stop().animate({
          marginRight: cc11001100_hook("marginRight", -102, "object-key-init")
        });
      }));
    },
    removeChatWidget: function () {
      var t = cc11001100_hook("t", $(".cf-chat-widget"), "var-init");
      null != t && 0 < t.length && t.remove();
    },
    showChatWindow: function () {
      var t = cc11001100_hook("t", $("#cf-chat-window-popup"), "var-init");
      0 < $(".btn-chat-bot").length && (0 == t.length && (this.bind(this.domain, this.locale), t = cc11001100_hook("t", $("#cf-chat-window-popup"), "assign")), null != t && 0 < t.length && (t.addClass("show"), this.chatWindowStatusCallback && this.chatWindowStatusCallback("opened")));
    },
    _isSameDomain: function () {
      var t = cc11001100_hook("t", document.getElementById("cf-chat-window-wrapper"), "var-init");
      return null != t && t.contentWindow.location.origin === window.location.origin;
    },
    isChatWindowVisible: function () {
      return $("#cf-chat-window-popup").hasClass("show");
    },
    hideChatWindow: function () {
      this.sendToChatFramework({
        event: cc11001100_hook("event", "vera:minimizeChatWindow", "object-key-init")
      }, !1);
    },
    closeChatWindow: function () {
      this.sendToChatFramework({
        event: cc11001100_hook("event", "vera:closeChatWindow", "object-key-init")
      }, !1);
    },
    clearAll: function () {
      console.log("sending clearAll event", window.location), this.sendToChatFramework({
        event: cc11001100_hook("event", "vera:clearAllData", "object-key-init")
      }, !1);
    }
  }, "assign"), window.CXChatFrameworkSDK = cc11001100_hook("window.CXChatFrameworkSDK", t, "assign");
}();