"use strict";

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
      var i = cc11001100_hook("i", e[n], "var-init");
      i.enumerable = cc11001100_hook("i.enumerable", i.enumerable || !1, "assign"), i.configurable = cc11001100_hook("i.configurable", !0, "assign"), "value" in i && (i.writable = cc11001100_hook("i.writable", !0, "assign")), Object.defineProperty(t, i.key, i);
    }
  }
  return function (e, n, i) {
    return n && t(e.prototype, n), i && t(e, i), e;
  };
}(), "var-init");
!function () {
  function t() {
    return void 0 === n ? null : document[n];
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie, "var-init"), n = cc11001100_hook("n", e.split("; "), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) {
      var o = cc11001100_hook("o", n[i].split("="), "var-init");
      if (o[0] == t) return o[1];
    }
    return "";
  }
  var n = cc11001100_hook("n", void 0, "var-init"),
    i = cc11001100_hook("i", void 0, "var-init"),
    o = cc11001100_hook("o", null, "var-init"),
    s = cc11001100_hook("s", window.location.href.indexOf("test") > -1 ? "test" : "prod", "var-init");
  !function () {
    "undefined" != typeof document && (void 0 !== document.hidden ? (n = cc11001100_hook("n", "hidden", "assign"), i = cc11001100_hook("i", "visibilitychange", "assign")) : void 0 !== document.msHidden ? (n = cc11001100_hook("n", "msHidden", "assign"), i = cc11001100_hook("i", "msvisibilitychange", "assign")) : void 0 !== document.webkitHidden && (n = cc11001100_hook("n", "webkitHidden", "assign"), i = cc11001100_hook("i", "webkitvisibilitychange", "assign")));
  }();
  var c = cc11001100_hook("c", function () {
      function t(n) {
        cc11001100_hook("n", n, "function-parameter");
        _classCallCheck(this, t), void 0, this.messageHandle = cc11001100_hook("this.messageHandle", n.messageHandle, "assign"), this.UserName = cc11001100_hook("this.UserName", e("UserName") || "", "assign"), this.deviceId = cc11001100_hook("this.deviceId", e("uuid_tt_dd") || "default", "assign"), this.appId = cc11001100_hook("this.appId", n.appid || "CSDN-PC", "assign"), this.chatSocket = cc11001100_hook("this.chatSocket", null, "assign"), this.wsConnectStatus = cc11001100_hook("this.wsConnectStatus", 0, "assign"), this.testMsg = cc11001100_hook("this.testMsg", null, "assign"), this.wsUrl = cc11001100_hook("this.wsUrl", null, "assign"), this.lockReconnect = cc11001100_hook("this.lockReconnect", !1, "assign"), this.tt = cc11001100_hook("this.tt", null, "assign"), this.timeout = cc11001100_hook("this.timeout", 5e3, "assign"), this.timeoutObj = cc11001100_hook("this.timeoutObj", null, "assign"), this.serverTimeoutObj = cc11001100_hook("this.serverTimeoutObj", null, "assign"), this.connectInfo = cc11001100_hook("this.connectInfo", null, "assign"), this.isReallClose = cc11001100_hook("this.isReallClose", !1, "assign"), this.getIMtoken();
      }
      return _createClass(t, [{
        key: cc11001100_hook("key", "getIMtoken", "object-key-init"),
        value: function () {
          var t = cc11001100_hook("t", this.UserName || "", "var-init");
          if (!t) return void void 0;
          var e = cc11001100_hook("e", {
            appId: cc11001100_hook("appId", this.appId, "object-key-init"),
            userId: cc11001100_hook("userId", t || "", "object-key-init"),
            token: cc11001100_hook("token", "", "object-key-init"),
            linkType: cc11001100_hook("linkType", 1, "object-key-init"),
            deviceId: cc11001100_hook("deviceId", this.deviceId, "object-key-init"),
            groupId: cc11001100_hook("groupId", "CSDN-private-MSG", "object-key-init"),
            channelType: cc11001100_hook("channelType", "privateMsg", "object-key-init"),
            appFrom: cc11001100_hook("appFrom", 1, "object-key-init")
          }, "var-init");
          this.connectInfo = cc11001100_hook("this.connectInfo", e, "assign"), this.webSocketConnect();
        }
      }, {
        key: cc11001100_hook("key", "webSocketConnect", "object-key-init"),
        value: function () {
          var t = cc11001100_hook("t", this, "var-init"),
            e = cc11001100_hook("e", this.connectInfo, "var-init"),
            n = cc11001100_hook("n", "test" === s ? "https://test-im-manager.csdn.net/im-manage/v1.0/dispatch/do" : "https://bizapi.csdn.net/im-manage/v1.0/dispatch/do", "var-init");
          $.ajax({
            headers: {
              "Content-Type": cc11001100_hook("Content-Type", "application/json", "object-key-init")
            },
            type: cc11001100_hook("type", "post", "object-key-init"),
            url: cc11001100_hook("url", n, "object-key-init"),
            data: cc11001100_hook("data", JSON.stringify(e), "object-key-init"),
            crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            success: function (n) {
              if (n.data) {
                t.wsUrl = cc11001100_hook("t.wsUrl", "wss://" + n.data.linkServers[0], "assign"), t.testMsg = cc11001100_hook("t.testMsg", JSON.stringify({
                  ver: cc11001100_hook("ver", "1.0", "object-key-init"),
                  cmdId: cc11001100_hook("cmdId", 2, "object-key-init"),
                  isZip: cc11001100_hook("isZip", 0, "object-key-init"),
                  body: {
                    userId: cc11001100_hook("userId", e.userId, "object-key-init"),
                    appId: cc11001100_hook("appId", e.appId, "object-key-init"),
                    imToken: cc11001100_hook("imToken", n.data.imToken, "object-key-init"),
                    groupId: cc11001100_hook("groupId", e.groupId, "object-key-init")
                  }
                }), "assign");
                try {
                  t.chatSocket = cc11001100_hook("t.chatSocket", new WebSocket(t.wsUrl), "assign"), t.webSocketInit();
                } catch (e) {
                  t.webSocketReconnect();
                }
              }
            },
            error: function (t) {
              void 0, this.webSocketReconnect();
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "webSocketReconnect", "object-key-init"),
        value: function () {
          var t = cc11001100_hook("t", this, "var-init");
          this.isReallClose || this.wsConnectStatus > 0 || this.lockReconnect || (this.lockReconnect = cc11001100_hook("this.lockReconnect", !0, "assign"), this.tt && clearTimeout(this.tt), this.tt = cc11001100_hook("this.tt", setTimeout(function () {
            t.webSocketConnect(), t.lockReconnect = cc11001100_hook("t.lockReconnect", !1, "assign");
          }, 3e3), "assign"));
        }
      }, {
        key: cc11001100_hook("key", "webSocketInit", "object-key-init"),
        value: function (t) {
          var e = cc11001100_hook("e", this, "var-init");
          this.wsConnectStatus = cc11001100_hook("this.wsConnectStatus", 1, "assign"), this.chatSocket.onopen = cc11001100_hook("this.chatSocket.onopen", function (t) {
            void 0, e.wsConnectStatus = cc11001100_hook("e.wsConnectStatus", 2, "assign"), e.chatSocket.send(e.testMsg);
          }, "assign"), this.chatSocket.onmessage = cc11001100_hook("this.chatSocket.onmessage", function (t) {
            e.wsConnectStatus = cc11001100_hook("e.wsConnectStatus", 2, "assign"), e.onMessage(t.data), e.heartCheck();
          }, "assign"), this.chatSocket.onerror = cc11001100_hook("this.chatSocket.onerror", function (t) {
            void 0, e.onMessage({
              cmdId: cc11001100_hook("cmdId", -1, "object-key-init"),
              msg: cc11001100_hook("msg", "ws 连接失败", "object-key-init")
            }), e.wsConnectStatus = cc11001100_hook("e.wsConnectStatus", -1, "assign"), e.isReallClose || e.webSocketReconnect();
          }, "assign"), this.chatSocket.onclose = cc11001100_hook("this.chatSocket.onclose", function (t) {
            void 0, e.onMessage({
              msg: cc11001100_hook("msg", "ws 连接关闭", "object-key-init")
            }), e.wsConnectStatus = cc11001100_hook("e.wsConnectStatus", -1, "assign"), void 0, e.isReallClose || e.webSocketReconnect();
          }, "assign");
        }
      }, {
        key: cc11001100_hook("key", "onMessage", "object-key-init"),
        value: function (t) {
          var e = cc11001100_hook("e", "string" == typeof t ? JSON.parse(t) : t, "var-init");
          5 == +e.cmdId && 2 === this.wsConnectStatus && (this.wsConnectStatus = cc11001100_hook("this.wsConnectStatus", 3, "assign")), "function" == typeof this.messageHandle && this.messageHandle(e);
        }
      }, {
        key: cc11001100_hook("key", "closeWebsocket", "object-key-init"),
        value: function (t) {
          void 0, this.chatSocket.close(), t && (this.isReallClose = cc11001100_hook("this.isReallClose", !0, "assign")), this.wsConnectStatus = cc11001100_hook("this.wsConnectStatus", 0, "assign"), void 0;
        }
      }, {
        key: cc11001100_hook("key", "heartCheck", "object-key-init"),
        value: function () {
          var t = cc11001100_hook("t", this, "var-init");
          this.timeoutObj && clearTimeout(this.timeoutObj), this.serverTimeoutObj && clearTimeout(this.serverTimeoutObj), this.timeoutObj = cc11001100_hook("this.timeoutObj", setTimeout(function () {
            -1 !== t.wsConnectStatus && (t.chatSocket.send('{"cmdId":1}'), t.serverTimeoutObj = cc11001100_hook("t.serverTimeoutObj", setTimeout(function () {
              void 0, t.chatSocket.close();
            }, t.timeout), "assign"));
          }, this.timeout), "assign");
        }
      }, {
        key: cc11001100_hook("key", "sendMessage", "object-key-init"),
        value: function (t, e) {
          return t || e ? this.UserName ? Chatervice.sendMessage({
            username: cc11001100_hook("username", this.UserName, "object-key-init"),
            liveId: cc11001100_hook("liveId", this.liveId, "object-key-init"),
            message: cc11001100_hook("message", t, "object-key-init"),
            anchorId: cc11001100_hook("anchorId", this.anchorId, "object-key-init"),
            image: cc11001100_hook("image", e, "object-key-init")
          }, {
            deviceId: cc11001100_hook("deviceId", this.deviceId, "object-key-init"),
            appId: cc11001100_hook("appId", this.appId, "object-key-init")
          }) : void void 0 : void void 0;
        }
      }]), t;
    }(), "var-init"),
    a = cc11001100_hook("a", function () {
      function t(e) {
        cc11001100_hook("e", e, "function-parameter");
        _classCallCheck(this, t), Object.assign(this, {
          position: cc11001100_hook("position", "fixed", "object-key-init"),
          top: cc11001100_hook("top", "initial", "object-key-init"),
          bottom: cc11001100_hook("bottom", "initial", "object-key-init"),
          left: cc11001100_hook("left", "initial", "object-key-init"),
          right: cc11001100_hook("right", "initial", "object-key-init"),
          zIndex: cc11001100_hook("zIndex", 99999, "object-key-init"),
          dom: cc11001100_hook("dom", "body", "object-key-init"),
          height: cc11001100_hook("height", "100vh", "object-key-init"),
          overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
          time: cc11001100_hook("time", 6e3, "object-key-init")
        }, e), this.$tpl = cc11001100_hook("this.$tpl", null, "assign"), this.init();
      }
      return _createClass(t, [{
        key: cc11001100_hook("key", "init", "object-key-init"),
        value: function () {
          this.$tpl = cc11001100_hook("this.$tpl", $('<div class="notification" style="position: ' + this.position + "; left:" + this.left + "; right: " + this.right + "; top: " + this.top + "; bottom: " + this.bottom + "; z-index: " + this.zIndex + ';"></div>'), "assign"), $(this.dom).append(this.$tpl), $(".notification").on("click", ".notification-close", function () {
            var t = cc11001100_hook("t", $(this).closest(".notification-item"), "var-init");
            t.slideUp("200", function () {
              t.remove();
            });
          });
        }
      }, {
        key: cc11001100_hook("key", "create", "object-key-init"),
        value: function (t) {
          var e = cc11001100_hook("e", $(t), "var-init");
          e.appendTo(this.$tpl).hide().slideDown(200), setTimeout(function () {
            e.slideUp("200", function () {
              e.remove();
            });
          }, this.time);
        }
      }]), t;
    }(), "var-init"),
    l = cc11001100_hook("l", function () {
      function e(t, n) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        _classCallCheck(this, e), this.notification = cc11001100_hook("this.notification", null, "assign"), this.chat = cc11001100_hook("this.chat", null, "assign"), this.init(t, n);
      }
      return _createClass(e, [{
        key: cc11001100_hook("key", "init", "object-key-init"),
        value: function (t, e) {
          this.notification = cc11001100_hook("this.notification", new a(t), "assign"), this.chat = cc11001100_hook("this.chat", new c({
            appid: cc11001100_hook("appid", "CSDN-PC", "object-key-init"),
            messageHandle: cc11001100_hook("messageHandle", e.bind(this), "object-key-init")
          }), "assign"), -1 === window.location.origin.indexOf("im.csdn.net") && this.pageListener();
        }
      }, {
        key: cc11001100_hook("key", "create", "object-key-init"),
        value: function (t) {
          this.notification.create(t);
        }
      }, {
        key: cc11001100_hook("key", "closeChat", "object-key-init"),
        value: function () {
          this.chat.closeWebsocket(!0);
        }
      }, {
        key: cc11001100_hook("key", "pageListener", "object-key-init"),
        value: function () {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 12e4, "var-init");
          void 0 !== i && document.addEventListener(i, function () {
            var i = cc11001100_hook("i", t(), "var-init");
            if (null !== i) {
              if (o && clearInterval(o), i && 2 === e.chat.wsConnectStatus) return void (o = cc11001100_hook("o", setTimeout(function () {
                e.chat.closeWebsocket(!0);
              }, n), "assign"));
              !i && e.chat.isReallClose && (e.chat.webSocketConnect(), e.chat.isReallClose = cc11001100_hook("e.chat.isReallClose", !1, "assign"));
            }
          });
        }
      }]), e;
    }(), "var-init");
  window.CsdnNotification = cc11001100_hook("window.CsdnNotification", l, "assign");
}();