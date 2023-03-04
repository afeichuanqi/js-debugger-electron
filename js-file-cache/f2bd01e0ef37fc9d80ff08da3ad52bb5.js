"use strict";

function _classCallCheck(e, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
}
var _createClass = cc11001100_hook("_createClass", function () {
  function e(e, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    for (var n = cc11001100_hook("n", 0, "var-init"); n < i.length; n++) {
      var s = cc11001100_hook("s", i[n], "var-init");
      s.enumerable = cc11001100_hook("s.enumerable", s.enumerable || !1, "assign"), s.configurable = cc11001100_hook("s.configurable", !0, "assign"), "value" in s && (s.writable = cc11001100_hook("s.writable", !0, "assign")), Object.defineProperty(e, s.key, s);
    }
  }
  return function (i, n, s) {
    return n && e(i.prototype, n), s && e(i, s), i;
  };
}(), "var-init");
!function (e, i) {
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var i = cc11001100_hook("i", document.cookie.split("; "), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < i.length; n++) {
      var s = cc11001100_hook("s", i[n].split("="), "var-init");
      if (s[0] == e) return decodeURIComponent(s[1]);
    }
  }
  function s() {
    return /(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone|csdn|MicroMessenger)/i.test(navigator.userAgent);
  }
  function o() {
    return /iP(ad|hone|od)/.test(navigator.userAgent);
  }
  var t = cc11001100_hook("t", "https://img-home.csdnimg.cn/images/20210426071127.png", "var-init");
  e.csdn = cc11001100_hook("e.csdn", e.csdn || {}, "assign"), function (e) {
    var i = cc11001100_hook("i", document.createElement("link"), "var-init");
    i.rel = cc11001100_hook("i.rel", "stylesheet", "assign"), i.type = cc11001100_hook("i.type", "text/css", "assign"), i.href = cc11001100_hook("i.href", "https://g.csdnimg.cn/user-login/3.0.0/user-login.css", "assign"), document.getElementsByTagName("head")[0].appendChild(i);
  }();
  var r = cc11001100_hook("r", function () {
      function r() {
        _classCallCheck(this, r), this.isMobile = cc11001100_hook("this.isMobile", s(), "assign"), this.mobileAreaCodeList = cc11001100_hook("this.mobileAreaCodeList", [], "assign"), this.isRisk = cc11001100_hook("this.isRisk", !1, "assign"), this.countDownTime = cc11001100_hook("this.countDownTime", 60, "assign"), this.isCountDownStart = cc11001100_hook("this.isCountDownStart", !1, "assign"), this.callBackFn = cc11001100_hook("this.callBackFn", null, "assign"), this.verifyCode = cc11001100_hook("this.verifyCode", "", "assign"), this.mobile = cc11001100_hook("this.mobile", "", "assign"), this.code = cc11001100_hook("this.code", "86", "assign"), this.codeReg = cc11001100_hook("this.codeReg", /^[1][3,4,5,6,7,8,9][0-9]{9}$/, "assign"), this.verifyCodeType = cc11001100_hook("this.verifyCodeType", 1, "assign"), this.timer = cc11001100_hook("this.timer", null, "assign");
      }
      return _createClass(r, [{
        key: cc11001100_hook("key", "getUserStatus", "object-key-init"),
        value: function (s) {
          var o = cc11001100_hook("o", this, "var-init");
          this.callBackFn = cc11001100_hook("this.callBackFn", s, "assign"), i.ajax({
            url: cc11001100_hook("url", "https://passport.csdn.net/v1/api/check/userstatus", "object-key-init"),
            type: cc11001100_hook("type", "POST", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            data: cc11001100_hook("data", JSON.stringify({
              username: cc11001100_hook("username", n("UserName") || "", "object-key-init")
            }), "object-key-init"),
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (i) {
              if (i.status) {
                if (a.result = cc11001100_hook("a.result", i, "assign"), i.detail) switch (i.detail) {
                  case "deleted":
                    o.renderDeletedPopup();
                    break;
                  case "riskControl":
                    o.getUserMobile(o.renderRiskControlPopup);
                    break;
                  case "activateAndRisk":
                    o.isRisk = cc11001100_hook("o.isRisk", !0, "assign"), o.getMobileAreaCode(o.renderActivatePopup);
                    break;
                  case "activate":
                    o.getMobileAreaCode(o.renderActivatePopup);
                    break;
                  default:
                    return !0;
                } else o.executeCallBack();
              } else e.location.href = cc11001100_hook("e.location.href", "https://passport.csdn.net/account/login", "assign");
            },
            error: function (e) {
              console.log(e);
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "getUserMobile", "object-key-init"),
        value: function (e) {
          var n = cc11001100_hook("n", this, "var-init");
          i.ajax({
            url: cc11001100_hook("url", "https://passport.csdn.net/v1/api/riskControl/getUserMobile", "object-key-init"),
            type: cc11001100_hook("type", "POST", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (i) {
              i.status && e && e.call(n, i.data);
            },
            error: function (e) {
              console.log(e);
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "getMobileAreaCode", "object-key-init"),
        value: function (e) {
          var n = cc11001100_hook("n", this, "var-init");
          i.ajax({
            url: cc11001100_hook("url", "https://passport.csdn.net/v1/api/get/mobileAreaCode", "object-key-init"),
            type: cc11001100_hook("type", "POST", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (i) {
              i.status && (n.mobileAreaCodeList = cc11001100_hook("n.mobileAreaCodeList", i.data, "assign"), e && e.call(n));
            },
            error: function (e) {
              console.log(e);
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "sendVerifyCode", "object-key-init"),
        value: function (e, n) {
          var s = cc11001100_hook("s", this, "var-init"),
            o = cc11001100_hook("o", 1 === n ? "sendVoiceVerifyCode" : "sendVerifyCode", "var-init");
          i.ajax({
            url: cc11001100_hook("url", "https://passport.csdn.net/v1/api/riskControl/" + o, "object-key-init"),
            type: cc11001100_hook("type", "POST", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (i) {
              i.status ? e && e.call(s) : s.showError(i.message);
            },
            error: function (e) {
              s.showError(JSON.parse(e.responseText).message);
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "checkVerifyCode", "object-key-init"),
        value: function (e) {
          var n = cc11001100_hook("n", this, "var-init"),
            s = cc11001100_hook("s", 1 === e ? "checkVoiceVerifyCode" : "checkVerifyCode", "var-init"),
            o = cc11001100_hook("o", {
              verifyCode: cc11001100_hook("verifyCode", this.verifyCode, "object-key-init")
            }, "var-init");
          i.ajax({
            url: cc11001100_hook("url", "https://passport.csdn.net/v1/api/riskControl/" + s, "object-key-init"),
            type: cc11001100_hook("type", "POST", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
            data: cc11001100_hook("data", JSON.stringify(o), "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (e) {
              e.status ? n.executeCallBack() : n.showError(e.message);
            },
            error: function (e) {
              n.showError(JSON.parse(e.responseText).message);
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "sendBindVerifyCode", "object-key-init"),
        value: function (e, n) {
          var s = cc11001100_hook("s", this, "var-init"),
            o = cc11001100_hook("o", {
              mobile: cc11001100_hook("mobile", this.mobile, "object-key-init"),
              code: cc11001100_hook("code", "00" + this.code, "object-key-init")
            }, "var-init"),
            t = cc11001100_hook("t", 1 === n ? "sendBindVoiceCode" : "sendBindVerifyCode", "var-init");
          i.ajax({
            url: cc11001100_hook("url", "https://passport.csdn.net/v1/api/riskControl/" + t, "object-key-init"),
            type: cc11001100_hook("type", "POST", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
            data: cc11001100_hook("data", JSON.stringify(o), "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (i) {
              i.status ? e && e.call(s) : s.showError(i.message);
            },
            error: function (e) {
              s.showError(JSON.parse(e.responseText).message);
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "checkBindVerifyCode", "object-key-init"),
        value: function (e) {
          var n = cc11001100_hook("n", this, "var-init"),
            s = cc11001100_hook("s", {
              mobile: cc11001100_hook("mobile", this.mobile, "object-key-init"),
              code: cc11001100_hook("code", "00" + this.code, "object-key-init"),
              verifyCode: cc11001100_hook("verifyCode", this.verifyCode, "object-key-init")
            }, "var-init"),
            o = cc11001100_hook("o", 1 === e ? "checkVoiceCodeAndBind" : "checkBindVerifyCode", "var-init");
          i.ajax({
            url: cc11001100_hook("url", "https://passport.csdn.net/v1/api/riskControl/" + o, "object-key-init"),
            type: cc11001100_hook("type", "POST", "object-key-init"),
            contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
            data: cc11001100_hook("data", JSON.stringify(s), "object-key-init"),
            xhrFields: {
              withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
            },
            dataType: cc11001100_hook("dataType", "json", "object-key-init"),
            success: function (e) {
              e.status ? n.executeCallBack() : n.showError(e.message);
            },
            error: function (e) {
              var i = cc11001100_hook("i", JSON.parse(e.responseText), "var-init"),
                s = cc11001100_hook("s", i.code, "var-init"),
                o = cc11001100_hook("o", i.message, "var-init");
              "1028" === s ? n.renderMergePopup() : n.showError(o);
            }
          });
        }
      }, {
        key: cc11001100_hook("key", "executeCallBack", "object-key-init"),
        value: function () {
          this.callBackFn && this.callBackFn(), this.closeUserLoginPopup();
        }
      }, {
        key: cc11001100_hook("key", "renderMergePopup", "object-key-init"),
        value: function () {
          var n = cc11001100_hook("n", this, "var-init"),
            s = cc11001100_hook("s", i('<div id="user-login-box" ' + (this.isMobile ? 'class="user-login-mobile-box"' : "") + '>\n          <div class="user-login-head">\n            <div class="user-login-head-title">合并账号</div>\n            <div class="user-login-close"><img src="' + t + '" alt=""></div>\n          </div>\n          <div class="user-login-middle">\n            <div class="user-login-middle-hint">检测到该手机号已绑定CSDN账号，若合并账号，将会把您当前登录的账号进行注销，请您注意。</div>\n            <div class="user-login-img-area"><img src="https://img-home.csdnimg.cn/images/20210421042950.png" alt=""></div>\n          </div>\n          <div class="user-login-bottom">\n            <button class="user-login-btn-other">更换手机号</button>\n            <button class="user-login-btn-confirm">合并账号</button>\n          </div>\n        </div>'), "var-init");
          s.on("click", ".user-login-close", function () {
            n.closeUserLoginPopup();
          }).on("click", ".user-login-btn-confirm", function () {
            e.open("https://i.csdn.net/#/account/merge?isKey=1"), n.closeUserLoginPopup();
          }).on("click", ".user-login-btn-other", function () {
            n.clearTimerStuff(), n.renderActivatePopup();
          }), this.iosActivateActive(s), i("#user-login-mask").empty().append(s);
        }
      }, {
        key: cc11001100_hook("key", "renderDeletedPopup", "object-key-init"),
        value: function () {
          var n = cc11001100_hook("n", this, "var-init"),
            s = cc11001100_hook("s", i('<div id="user-login-box" ' + (this.isMobile ? 'class="user-login-mobile-box"' : "") + '>\n          <div class="user-login-head">\n            <div class="user-login-head-title">账号异常</div>\n            <div class="user-login-close"><img src="' + t + '" alt=""></div>\n          </div>\n          <div class="user-login-middle">\n            <div class="user-login-middle-hint">此账号处于冻结状态！</div>\n          </div>\n          <div class="user-login-bottom ' + (this.isMobile ? "user-login-btn-center" : "") + '" >\n            <button class="user-login-btn-confirm">联系客服</button>\n          </div>\n        </div>'), "var-init");
          s.on("click", ".user-login-close", function () {
            n.closeUserLoginPopup();
          }).on("click", ".user-login-btn-confirm", function () {
            e.open("https://csdn.s2.udesk.cn/im_client/?web_plugin_id=29181"), n.closeUserLoginPopup();
          }), this.iosActivateActive(s), i("body").append(i('<div id="user-login-mask"></div>').append(s));
        }
      }, {
        key: cc11001100_hook("key", "renderRiskControlPopup", "object-key-init"),
        value: function (e) {
          var n = cc11001100_hook("n", e.code, "var-init"),
            s = cc11001100_hook("s", e.mobile, "var-init");
          this.verifyCodeType = cc11001100_hook("this.verifyCodeType", "0086" !== n && n ? 2 : 1, "assign");
          var o = cc11001100_hook("o", this, "var-init"),
            r = cc11001100_hook("r", i('<div id="user-login-box" class="user-login-risk-box ' + (this.isMobile ? "user-login-mobile-box" : "") + '">\n          <div class="user-login-head">\n            <div class="user-login-head-title">账号异常</div>\n            <div class="user-login-close"><img src="' + t + '" alt=""></div>\n          </div>\n          <div class="user-login-middle">\n            <div class="user-login-middle-hint">请通过' + (n ? n + " " : "") + s + '获取验证码效验。</div>\n            <div class="user-login-input-area">\n              \x3c!--验证码--\x3e\n              <div class="user-login-input-area-verifyCode"></div>\n              <div class="user-login-error"></div>\n            </div>\n          </div>\n          <div class="user-login-bottom ' + (this.isMobile ? "user-login-btn-center" : "") + '">\n            <button class="user-login-btn-confirm">确定</button>\n          </div>\n        </div>'), "var-init");
          r.on("click", ".user-login-close", function () {
            o.closeUserLoginPopup();
          }).on("click", ".user-login-btn-confirm", function () {
            o.validateVerifyCode() && o.checkVerifyCode(o.verifyCodeType);
          }).find(".user-login-input-area-verifyCode").append(this.renderVerifyCodeArea(!1)), this.iosActivateActive(r), i("body").append(i('<div id="user-login-mask"></div>').append(r));
        }
      }, {
        key: cc11001100_hook("key", "renderActivatePopup", "object-key-init"),
        value: function () {
          this.isRisk || (this.verifyCodeType = cc11001100_hook("this.verifyCodeType", 2, "assign"));
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", i('<div id="user-login-box" ' + (this.isMobile ? 'class="user-login-mobile-box"' : "") + '>\n          <div class="user-login-head">\n            <div class="user-login-head-title">账号绑定</div>\n            <div class="user-login-close"><img src="' + t + '" alt=""></div>\n          </div>\n          <div class="user-login-middle">\n            <div class="user-login-middle-hint">为了保障您CSDN账号的正常使用，按照国家法律要求，需要进行账号实名，感谢您的配合与支持！</div>\n            <div class="user-login-input-area">\n              \x3c!--手机号--\x3e\n              <div class="user-login-input-area-mobile"></div>\n              \x3c!--验证码--\x3e\n              <div class="user-login-input-area-verifyCode"></div>\n              <div class="user-login-error"></div>\n            </div>\n          </div>\n          <div class="user-login-bottom">\n            <button class="user-login-btn-other">暂不绑定</button>\n            <button class="user-login-btn-confirm">立即绑定</button>\n          </div>\n        </div>'), "var-init");
          n.on("click", ".user-login-btn-other,.user-login-close", function () {
            e.closeUserLoginPopup();
          }).on("click", ".user-login-btn-confirm", function () {
            e.validateMobile() && e.validateVerifyCode() && (e.removeError(), e.checkBindVerifyCode(e.verifyCodeType));
          }), n.find(".user-login-input-area-mobile").append(this.renderMobileInputArea()), n.find(".user-login-input-area-verifyCode").append(this.renderVerifyCodeArea(!0)), this.iosActivateActive(n), i("#user-login-mask").length ? i("#user-login-mask").empty().append(n) : i("body").append(i('<div id="user-login-mask"></div>').append(n));
        }
      }, {
        key: cc11001100_hook("key", "renderMobileInputArea", "object-key-init"),
        value: function () {
          var e = cc11001100_hook("e", this, "var-init"),
            n = cc11001100_hook("n", this.mobileAreaCodeList.map(function (e) {
              var i = cc11001100_hook("i", parseInt(e.code), "var-init");
              return '<li data-code="' + i + '"><span>' + e.country + "</span><span>+" + i + "</span></li>";
            }).join(""), "var-init"),
            s = cc11001100_hook("s", i('<div class="user-login-input-area-mobile-content">\n          <div class="user-login-mobile-areaCode">+' + this.code + '</div>\n          <input type="text" id="user-login-mobile" value="' + this.mobile + '" autocomplete="off" placeholder="请输入手机号">\n          <ul class="user-login-areaCode-drop-list">' + n + "</ul>\n        </div>"), "var-init"),
            o = cc11001100_hook("o", s.find(".user-login-areaCode-drop-list"), "var-init");
          return s.on("input", "#user-login-mobile", function () {
            e.mobile = cc11001100_hook("e.mobile", i(this).val(), "assign");
          }).on("click", ".user-login-mobile-areaCode", function () {
            var e = cc11001100_hook("e", this, "var-init");
            return i(this).addClass("areaCode-drop-active"), o.stop().fadeIn("fast"), i(document).one("click", function () {
              o.stop().fadeOut("fast"), i(e).removeClass("areaCode-drop-active");
            }), !1;
          }).on("click", ".user-login-areaCode-drop-list li", function () {
            return e.code !== i(this).attr("data-code") && (e.code = cc11001100_hook("e.code", i(this).attr("data-code"), "assign"), e.codeReg = cc11001100_hook("e.codeReg", new RegExp(e.mobileAreaCodeList[i(this).index()].regular), "assign"), e.isRisk && (e.verifyCodeType = cc11001100_hook("e.verifyCodeType", "86" === e.code ? 1 : 2, "assign"), e.changeSendVerifyCodeText()), s.find(".user-login-mobile-areaCode").text("+" + e.code)), o.stop().fadeOut("fast"), !1;
          }), s;
        }
      }, {
        key: cc11001100_hook("key", "renderVerifyCodeArea", "object-key-init"),
        value: function (e) {
          var n = cc11001100_hook("n", this, "var-init"),
            s = cc11001100_hook("s", i('<div class="user-login-input-area-verifyCode-content">\n          <input type="text" id="user-login-verifyCode" placeholder="请输入验证码" autocomplete="off" value="' + this.verifyCode + '">\n          <div class="user-login-send">\n            <div class="user-login-send-verifyCode">获取<span>' + (1 === this.verifyCodeType ? "语音" : "短信") + '</span>验证码</div>\n            <div class="user-login-send-count"><span>' + this.countDownTime + "</span> 秒后可重发</div>\n          </div>\n        </div>"), "var-init");
          return s.on("click", ".user-login-send-verifyCode", function () {
            var o = cc11001100_hook("o", this, "var-init"),
              t = function () {
                n.removeError(), i(o).hide().siblings().show(), n.startCountDown(s);
              };
            e && n.validateMobile() ? n.sendBindVerifyCode(t, n.verifyCodeType) : e || n.sendVerifyCode(t, n.verifyCodeType);
          }).on("input", "#user-login-verifyCode", function () {
            n.verifyCode = cc11001100_hook("n.verifyCode", i(this).val(), "assign");
          }), s;
        }
      }, {
        key: cc11001100_hook("key", "changeSendVerifyCodeText", "object-key-init"),
        value: function () {
          i("#user-login-mask").find(".user-login-send-verifyCode span").text(1 === this.verifyCodeType ? "语音" : "短信");
        }
      }, {
        key: cc11001100_hook("key", "startCountDown", "object-key-init"),
        value: function (e) {
          var i = cc11001100_hook("i", this, "var-init");
          this.isCountDownStart || (this.isCountDownStart = cc11001100_hook("this.isCountDownStart", !0, "assign"), clearInterval(this.timer), this.timer = cc11001100_hook("this.timer", setInterval(function () {
            i.countDownTime--, e.find(".user-login-send-count span").text(i.countDownTime), i.countDownTime <= 0 && (i.clearTimerStuff(), e.find(".user-login-send-count span").text(i.countDownTime), e.find(".user-login-send-verifyCode").show().siblings().hide());
          }, 1e3), "assign"));
        }
      }, {
        key: cc11001100_hook("key", "closeUserLoginPopup", "object-key-init"),
        value: function () {
          i("#user-login-mask").remove(), this.timer && (clearInterval(this.timer), this.timer = cc11001100_hook("this.timer", null, "assign"));
        }
      }, {
        key: cc11001100_hook("key", "showError", "object-key-init"),
        value: function (e) {
          i("#user-login-box .user-login-error").text(e).addClass("show-error");
        }
      }, {
        key: cc11001100_hook("key", "removeError", "object-key-init"),
        value: function () {
          i("#user-login-box .user-login-error").removeClass("show-error");
        }
      }, {
        key: cc11001100_hook("key", "validateMobile", "object-key-init"),
        value: function () {
          var e = cc11001100_hook("e", "86" === this.code ? this.mobile : "00" + this.code + this.mobile, "var-init"),
            i = cc11001100_hook("i", this.mobile && this.codeReg.test(e), "var-init");
          return !i && this.showError("手机号格式不正确"), i;
        }
      }, {
        key: cc11001100_hook("key", "validateVerifyCode", "object-key-init"),
        value: function () {
          var e = cc11001100_hook("e", this.verifyCode && /^\d+$/.test(this.verifyCode), "var-init");
          return !e && this.showError("请输入正确格式的验证码"), e;
        }
      }, {
        key: cc11001100_hook("key", "clearTimerStuff", "object-key-init"),
        value: function () {
          clearInterval(this.timer), this.timer = cc11001100_hook("this.timer", null, "assign"), this.isCountDownStart = cc11001100_hook("this.isCountDownStart", !1, "assign"), this.countDownTime = cc11001100_hook("this.countDownTime", 60, "assign");
        }
      }, {
        key: cc11001100_hook("key", "iosActivateActive", "object-key-init"),
        value: function (e) {
          o() && e.find("button").on("touchstart", function () {});
        }
      }]), r;
    }(), "var-init"),
    a = cc11001100_hook("a", {
      loadAjax: function (e) {
        new r().getUserStatus(e);
      },
      result: {}
    }, "var-init");
  e.csdn.userLogin = cc11001100_hook("e.csdn.userLogin", a, "assign");
}(window, jQuery);