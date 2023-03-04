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
      var s = cc11001100_hook("s", e[n], "var-init");
      s.enumerable = cc11001100_hook("s.enumerable", s.enumerable || !1, "assign"), s.configurable = cc11001100_hook("s.configurable", !0, "assign"), "value" in s && (s.writable = cc11001100_hook("s.writable", !0, "assign")), Object.defineProperty(t, s.key, s);
    }
  }
  return function (e, n, s) {
    return n && t(e.prototype, n), s && t(e, s), e;
  };
}(), "var-init");
!function (t, e) {
  t.csdn = cc11001100_hook("t.csdn", t.csdn || {}, "assign"), function (t) {
    var e = cc11001100_hook("e", document.createElement("link"), "var-init");
    e.rel = cc11001100_hook("e.rel", "stylesheet", "assign"), e.type = cc11001100_hook("e.type", "text/css", "assign"), e.href = cc11001100_hook("e.href", "https://g.csdnimg.cn/user-accusation/1.0.5/user-accusation.css", "assign"), document.getElementsByTagName("head")[0].appendChild(e);
  }();
  var n = cc11001100_hook("n", function () {
    function t(e) {
      cc11001100_hook("e", e, "function-parameter");
      _classCallCheck(this, t), this.option = cc11001100_hook("this.option", e, "assign"), this.accusationTypeList = cc11001100_hook("this.accusationTypeList", [], "assign"), this.selectId = cc11001100_hook("this.selectId", "", "assign"), this.content = cc11001100_hook("this.content", "", "assign"), this.maxlength = cc11001100_hook("this.maxlength", 200, "assign"), this.st_timer = cc11001100_hook("this.st_timer", "", "assign"), this.selectSecondId = cc11001100_hook("this.selectSecondId", "", "assign"), this.reportUrl = cc11001100_hook("this.reportUrl", "", "assign"), this.index = cc11001100_hook("this.index", 0, "assign"), this.isHasSecond = cc11001100_hook("this.isHasSecond", !1, "assign"), this.accusationSecondTypeList = cc11001100_hook("this.accusationSecondTypeList", [], "assign"), this.init();
    }
    return _createClass(t, [{
      key: cc11001100_hook("key", "init", "object-key-init"),
      value: function () {
        this.getAccusationOption(), this.showInit();
      }
    }, {
      key: cc11001100_hook("key", "getAccusationOption", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", this, "var-init"),
          n = cc11001100_hook("n", {
            type: cc11001100_hook("type", this.option.type, "object-key-init"),
            rtype: cc11001100_hook("rtype", this.option.rtype, "object-key-init")
          }, "var-init");
        e.ajax({
          url: cc11001100_hook("url", "https://mp-action.csdn.net/interact/wrapper/report/v1/api/getReportContent", "object-key-init"),
          type: cc11001100_hook("type", "get", "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
          data: cc11001100_hook("data", n, "object-key-init"),
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          success: function (e) {
            200 === e.code && (t.accusationTypeList = cc11001100_hook("t.accusationTypeList", e.data, "assign"), t.renderAccusation());
          },
          error: function (t) {
            console.log("taodawang err ===>", t);
          }
        });
      }
    }, {
      key: cc11001100_hook("key", "renderAccusationSecond", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", this, "var-init");
        if (e("#secondTypeBox").html(""), !t.accusationSecondTypeList.length) return !1;
        var n = cc11001100_hook("n", "", "var-init");
        n = cc11001100_hook("n", e("原文链接" == t.accusationSecondTypeList[0].reason ? '<div class="accusation-type">\n          <h2 class="accusation-secondary-title">内容链接（必填）</h2>\n          <div class="content-input">\n            <input class="" type="text" id="reportOriginalurl" name="reportOriginalurl" placeholder="请输入被抄袭或刷量相关的内容链接">\n          </div>\n        </div>' : '<div class="accusation-type">\n          <h2 class="accusation-secondary-title">请选择具体原因（选填）</h2>\n          <ul>\n            ' + this.accusationSecondTypeList.map(function (t, e) {
          return '<li class="accusation-item  accusation-item-second" data-content=' + t.id + " data-index=" + e + ">" + t.reason + "</li>";
        }).join("") + "\n          </ul>\n        </div>"), "assign"), e("#secondTypeBox").append(n);
      }
    }, {
      key: cc11001100_hook("key", "renderAccusation", "object-key-init"),
      value: function () {
        var t = cc11001100_hook("t", this, "var-init"),
          n = cc11001100_hook("n", this, "var-init"),
          s = cc11001100_hook("s", e('<div class="user-accusation" id="user-accusation">\n        <div class="accusation-back"></div>\n        <div class="accusation-area">\n          <img class="accusation-close" src=https://img-home.csdnimg.cn/images/20210426071127.png />\n          <h1 class="accusation-title">举报反馈</h1>\n          <div class="accusation-type">\n            <h2 class="accusation-secondary-title">举报类型（必选）</h2>\n            <ul>\n              ' + this.accusationTypeList.map(function (t, e) {
            return '<li class="accusation-item accusation-item-first" data-content=' + t.id + " data-index=" + e + ">" + t.content + "</li>";
          }).join("") + '\n            </ul>\n          </div>\n          <div id="secondTypeBox" class="accusation-second"></div>\n          <div class="accusation-reason">\n            <h2 class="accusation-secondary-title">举报详情（选填）</h2>\n            ' + this.renderTextArea() + '\n          </div>\n          <div class="accusation-btn clearfix">\n            <button class="accusation-send">提交</button>\n            <button class="accusation-cancel">取消</button>\n          </div>\n        </div>\n      </div>'), "var-init");
        s.on("click", ".accusation-close", function () {
          t.destoryAccusation();
        }).on("click", ".accusation-cancel", function () {
          t.destoryAccusation();
        }).on("click", ".accusation-send", function () {
          t.sendAccusationMessage();
        }).on("click", ".accusation-type ul li", function (t) {
          e(this).hasClass("active") || (e(this).siblings().removeClass("active"), e(this).addClass("active")), t.target.className.indexOf("accusation-item-first") > -1 && (n.selectId = cc11001100_hook("n.selectId", e(t.target)[0].dataset.content, "assign"), n.index = cc11001100_hook("n.index", e(t.target)[0].dataset.index, "assign"), n.accusationTypeList[n.index].reasonList && n.accusationTypeList[n.index].reasonList.length ? (n.accusationSecondTypeList = cc11001100_hook("n.accusationSecondTypeList", n.accusationTypeList[n.index].reasonList, "assign"), n.isHasSecond = cc11001100_hook("n.isHasSecond", !0, "assign")) : (n.accusationSecondTypeList = cc11001100_hook("n.accusationSecondTypeList", [], "assign"), n.isHasSecond = cc11001100_hook("n.isHasSecond", !1, "assign")), n.selectSecondId = cc11001100_hook("n.selectSecondId", "", "assign"), n.renderAccusationSecond()), t.target.className.indexOf("accusation-item-second") > -1 && (n.selectSecondId = cc11001100_hook("n.selectSecondId", e(t.target)[0].dataset.content, "assign"));
        }).on("input", ".accusation-input > textarea", function (t) {
          n.content = cc11001100_hook("n.content", t.target.value, "assign"), e(".accusation-input > p").text(n.content.length + "/" + n.maxlength);
        }), e("body").append(s);
      }
    }, {
      key: cc11001100_hook("key", "renderTextArea", "object-key-init"),
      value: function () {
        return '<div class="accusation-input" >\n        <textarea placeholder="请详细描述举报原因，我们将第一时间核实处理" maxlength=' + this.maxlength + "/>\n        <p>" + (this.content.length || "0/" + this.maxlength) + "</p>\n      </div>";
      }
    }, {
      key: cc11001100_hook("key", "destoryAccusation", "object-key-init"),
      value: function () {
        e(".user-accusation").remove(), this.destory();
      }
    }, {
      key: cc11001100_hook("key", "sendAccusationMessage", "object-key-init"),
      value: function () {
        if (!this.selectId) return void this.showToast({
          text: cc11001100_hook("text", "请选择举报类型", "object-key-init"),
          zindex: cc11001100_hook("zindex", 4e3, "object-key-init")
        });
        if (this.isHasSecond && document.getElementById("reportOriginalurl")) {
          if (this.reportUrl = cc11001100_hook("this.reportUrl", document.getElementById("reportOriginalurl").value, "assign"), "" == this.reportUrl) return void this.showToast({
            text: cc11001100_hook("text", "请填写举报链接", "object-key-init"),
            zindex: cc11001100_hook("zindex", 4e3, "object-key-init")
          });
          if (!this.validateUrl(this.reportUrl)) return void this.showToast({
            text: cc11001100_hook("text", "举报链接格式错误", "object-key-init"),
            zindex: cc11001100_hook("zindex", 4e3, "object-key-init")
          });
        }
        var t = cc11001100_hook("t", this, "var-init"),
          n = cc11001100_hook("n", {
            type: cc11001100_hook("type", this.option.type, "object-key-init"),
            rtype: cc11001100_hook("rtype", this.option.rtype, "object-key-init"),
            rid: cc11001100_hook("rid", this.option.rid, "object-key-init"),
            reportContent: {
              id: cc11001100_hook("id", this.selectId, "object-key-init")
            },
            reasonList: cc11001100_hook("reasonList", [{
              id: cc11001100_hook("id", this.selectSecondId, "object-key-init")
            }], "object-key-init"),
            reportedName: cc11001100_hook("reportedName", this.option.reportedName, "object-key-init"),
            supplement: cc11001100_hook("supplement", document.getElementById("reportOriginalurl") ? this.content + "=>抄袭的地址链接：" + this.reportUrl : this.content, "object-key-init")
          }, "var-init");
        this.option.submitOptions && Object.assign(n, this.option.submitOptions), e.ajax({
          url: cc11001100_hook("url", "https:///mp-action.csdn.net/interact/wrapper/report/v1/api/addReportResource", "object-key-init"),
          type: cc11001100_hook("type", "post", "object-key-init"),
          contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
          data: cc11001100_hook("data", JSON.stringify(n), "object-key-init"),
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
          success: function (e) {
            200 === e.code && (t.destoryAccusation(), t.option.callback && t.option.callback());
          },
          error: function (t) {
            console.log("taodawang err ===>", t);
          }
        });
      }
    }, {
      key: cc11001100_hook("key", "destory", "object-key-init"),
      value: function () {
        this.accusationTypeList = cc11001100_hook("this.accusationTypeList", [], "assign"), this.selectId = cc11001100_hook("this.selectId", "", "assign"), this.content = cc11001100_hook("this.content", "", "assign"), clearTimeout(this.st_timer), e("#report_toastBox").remove();
      }
    }, {
      key: cc11001100_hook("key", "showInit", "object-key-init"),
      value: function () {
        e("<div id='report_toastBox'></div>").appendTo("body").css({
          width: cc11001100_hook("width", "100%", "object-key-init"),
          position: cc11001100_hook("position", "fixed", "object-key-init"),
          left: cc11001100_hook("left", "0", "object-key-init"),
          bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
          "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
          display: cc11001100_hook("display", "none", "object-key-init")
        }), e("<span id='report_toastContent'></span>").appendTo("#report_toastBox").css({
          color: cc11001100_hook("color", "#fff", "object-key-init"),
          background: cc11001100_hook("background", "rgba(0,0,0,.8)", "object-key-init"),
          padding: cc11001100_hook("padding", "8px 24px", "object-key-init"),
          "border-radius": cc11001100_hook("border-radius", "4px", "object-key-init"),
          "max-width": cc11001100_hook("max-width", "80%", "object-key-init"),
          display: cc11001100_hook("display", "inline-block", "object-key-init"),
          "font-size": cc11001100_hook("font-size", "16px", "object-key-init")
        });
      }
    }, {
      key: cc11001100_hook("key", "showToast", "object-key-init"),
      value: function (t) {
        clearTimeout(this.st_timer), e("#report_toastBox").hide();
        var n = cc11001100_hook("n", t.text, "var-init"),
          s = cc11001100_hook("s", parseInt(t.time ? t.time : 2e3), "var-init"),
          i = cc11001100_hook("i", t.speed ? t.speed : "normal", "var-init"),
          a = cc11001100_hook("a", t.bottom ? t.bottom : "10%", "var-init"),
          o = cc11001100_hook("o", t.zindex ? t.zindex : "4000", "var-init");
        e("#report_mask").css({
          "z-index": cc11001100_hook("z-index", o - 1, "object-key-init")
        }), e("#report_toastBox").css({
          "z-index": cc11001100_hook("z-index", o, "object-key-init")
        }), e("#report_toastBox").css({
          bottom: cc11001100_hook("bottom", a, "object-key-init")
        }), e("#report_toastContent").text(n), e("#report_toastBox").fadeIn(i), this.st_timer = cc11001100_hook("this.st_timer", setTimeout(function () {
          e("#report_toastBox").fadeOut(function () {});
        }, s), "assign");
      }
    }, {
      key: cc11001100_hook("key", "validateUrl", "object-key-init"),
      value: function (t) {
        return new RegExp("^((https|http)://)?[a-z0-9A-Z]{3}.[a-z0-9A-Z][a-z0-9A-Z]{0,61}?[a-z0-9A-Z].com|net|cn|cc (:s[0-9]{1-4})?/$").test(t);
      }
    }]), t;
  }(), "var-init");
  t.csdn.feedback = cc11001100_hook("t.csdn.feedback", function (t) {
    new n(t);
  }, "assign");
}(window, jQuery);