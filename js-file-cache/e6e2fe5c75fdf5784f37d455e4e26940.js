define("superman/components/login_guide", ["require", "exports", "superman/lib/event"], function (require, _exports, _event) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: cc11001100_hook("value", true, "object-key-init")
  });
  _exports.init = cc11001100_hook("_exports.init", init, "assign");
  function _createForOfIteratorHelper(o) {
    cc11001100_hook("o", o, "function-parameter");
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (o = cc11001100_hook("o", _unsupportedIterableToArray(o), "assign"))) {
        var i = cc11001100_hook("i", 0, "var-init");
        var F = function F() {};
        return {
          s: cc11001100_hook("s", F, "object-key-init"),
          n: function n() {
            if (i >= o.length) return {
              done: cc11001100_hook("done", true, "object-key-init")
            };
            return {
              done: cc11001100_hook("done", false, "object-key-init"),
              value: cc11001100_hook("value", o[i++], "object-key-init")
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: cc11001100_hook("f", F, "object-key-init")
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var it,
      normalCompletion = cc11001100_hook("normalCompletion", true, "var-init"),
      didErr = cc11001100_hook("didErr", false, "var-init"),
      err;
    return {
      s: function s() {
        it = cc11001100_hook("it", o[Symbol.iterator](), "assign");
      },
      n: function n() {
        var step = cc11001100_hook("step", it.next(), "var-init");
        normalCompletion = cc11001100_hook("normalCompletion", step.done, "assign");
        return step;
      },
      e: function e(_e2) {
        didErr = cc11001100_hook("didErr", true, "assign");
        err = cc11001100_hook("err", _e2, "assign");
      },
      f: function f() {
        try {
          if (!normalCompletion && it["return"] != null) it["return"]();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _unsupportedIterableToArray(o, minLen) {
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("minLen", minLen, "function-parameter");
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = cc11001100_hook("n", Object.prototype.toString.call(o).slice(8, -1), "var-init");
    if (n === "Object" && o.constructor) n = cc11001100_hook("n", o.constructor.name, "assign");
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    cc11001100_hook("arr", arr, "function-parameter");
    cc11001100_hook("len", len, "function-parameter");
    if (len == null || len > arr.length) len = cc11001100_hook("len", arr.length, "assign");
    for (var i = cc11001100_hook("i", 0, "var-init"), arr2 = cc11001100_hook("arr2", new Array(len), "var-init"); i < len; i++) {
      arr2[i] = cc11001100_hook("arr2[i]", arr[i], "assign");
    }
    return arr2;
  }
  F.addLog("superman:login_guide", ["loginPicShow", "loginPicClick", "unLoginPicShow", "unLoginPicClick", "loginWordShow", "loginWordClick", "unLoginWordShow", "unLoginWordClick"]);
  F.addLog("superman:login_guide", {
    categoryClick: cc11001100_hook("categoryClick", "2022040700", "object-key-init")
  });
  var popup = cc11001100_hook("popup", null, "var-init");
  function loginPopShow() {
    var loginurl = cc11001100_hook("loginurl", location.protocol + "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" + new Date().getTime(), "var-init");
    if (popup) {
      popup.show();
    } else {
      $.getScript(loginurl, function () {
        var config = cc11001100_hook("config", {
          loginVersion: cc11001100_hook("loginVersion", "v5", "object-key-init"),
          composeTemplate: cc11001100_hook("composeTemplate", 1, "object-key-init"),
          apiOpt: {
            staticPage: cc11001100_hook("staticPage", window.location.protocol + "//" + window.location.host + "/home/xman/show/worldcupv3jump", "object-key-init"),
            loginType: cc11001100_hook("loginType", 1, "object-key-init"),
            product: cc11001100_hook("product", "mn", "object-key-init"),
            u: cc11001100_hook("u", window.document.location.href, "object-key-init"),
            safeFlag: cc11001100_hook("safeFlag", 0, "object-key-init"),
            memberPass: cc11001100_hook("memberPass", true, "object-key-init"),
            sms: cc11001100_hook("sms", 5, "object-key-init")
          },
          cache: cc11001100_hook("cache", true, "object-key-init"),
          forgetLink: cc11001100_hook("forgetLink", "https://passport.baidu.com/?getpass_index&tpl=mn&u=" + encodeURIComponent(window.location.href), "object-key-init"),
          registerLink: cc11001100_hook("registerLink", "https://passport.baidu.com/v2/?reg&regType=1&tpl=mn&u=" + encodeURIComponent(window.location.href), "object-key-init"),
          authsite: cc11001100_hook("authsite", ["tsina", "weixin", "qzone"], "object-key-init"),
          tangram: cc11001100_hook("tangram", true, "object-key-init")
        }, "var-init");
        popup = cc11001100_hook("popup", passport.pop.init(config), "assign");
        popup.show();
      });
    }
  }
  function setLs(option) {
    cc11001100_hook("option", option, "function-parameter");
    if (option.ls) {
      try {
        var date = cc11001100_hook("date", new Date(), "var-init");
        var dataStr = cc11001100_hook("dataStr", JSON.stringify(date.getFullYear() + "" + date.getMonth() + "" + date.getDate()), "var-init");
        window.localStorage.setItem(option.ls, dataStr);
      } catch (e) {}
    }
  }
  function close(option) {
    cc11001100_hook("option", option, "function-parameter");
    setLs(option);
    var element = cc11001100_hook("element", $(option.target)[0], "var-init");
    var parentElement = cc11001100_hook("parentElement", element === null || element === void 0 ? void 0 : element.parentNode, "var-init");
    if (parentElement) {
      parentElement.removeChild(element);
    }
  }
  function created(option) {
    cc11001100_hook("option", option, "function-parameter");
    var loginBubble = cc11001100_hook("loginBubble", option.guideBubble, "var-init");
    var hasTitle = cc11001100_hook("hasTitle", !!loginBubble.title, "var-init");
    var firstLine = cc11001100_hook("firstLine", hasTitle ? loginBubble.title : loginBubble.text[0], "var-init");
    var secondLine = cc11001100_hook("secondLine", hasTitle ? loginBubble.text[0] : loginBubble.text[1], "var-init");
    var pos = cc11001100_hook("pos", loginBubble.pos, "var-init");
    var isLogin = cc11001100_hook("isLogin", s_session && s_session.isLogin, "var-init");
    var classForPos = cc11001100_hook("classForPos", "".concat(isLogin ? "is-login" : "", " guide-info-pos-").concat(pos), "var-init");
    var addHtml = cc11001100_hook("addHtml", '\n        <div class="guide-info-new guide-info-login '.concat(classForPos, '" style="background:').concat(loginBubble.background, ';">\n            <div class="login-guide-main">\n                <div class="guide-left-main">\n                    <div class="').concat(hasTitle ? "guide-first-title" : "guide-first-content", '">\n                        ').concat(firstLine, '\n                    </div>\n                    <div class="guide-left-content">\n                        ').concat(secondLine, '\n                    </div>\n                    <div class="guide-left-button" style="background:').concat(loginBubble.buttonColor, ';">\n                        ').concat(loginBubble.button, '\n                    </div>\n                </div>\n                <img class="guide-right-main" src="').concat(loginBubble.image, '"/>\n            </div>\n            <i class="c-icon guide-close">&#xe610;</i>\n            <div class="guide-arrow-bottom" style="border-bottom-color:').concat(loginBubble.background || "#f3f6ff", ';">\n            </div>\n        </div>  \n    '), "var-init");
    $("#u1").append(addHtml);
    $(".guide-left-button").on("mouseover", function () {
      $(".guide-left-button").css("background-color", "".concat(loginBubble.buttonHover));
    });
    $(".guide-left-button").on("mouseout", function () {
      $(".guide-left-button").css("background-color", "".concat(loginBubble.buttonColor));
    });
    if (isLogin) {
      var avaWidth = cc11001100_hook("avaWidth", $("#u1 .s-top-username").width(), "var-init");
      var diff = cc11001100_hook("diff", pos === "1" ? 107 - avaWidth : 57 - avaWidth, "var-init");
      var classPos = cc11001100_hook("classPos", "#u1 .guide-info-new.guide-info-pos-".concat(pos), "var-init");
      var offsetRight = cc11001100_hook("offsetRight", parseInt($(classPos).css("right"), 10) - diff, "var-init");
      $(classPos).css("right", "".concat(offsetRight, "px"));
    }
    var timer = cc11001100_hook("timer", setTimeout(function () {
      close({
        ls: cc11001100_hook("ls", option.ls, "object-key-init"),
        target: cc11001100_hook("target", ".guide-info-new", "object-key-init")
      });
    }, 5e3), "var-init");
    $(".guide-info-new").on("mouseenter", function () {
      clearTimeout(timer);
    });
    $(".guide-info-new").on("mouseleave", function () {
      timer = cc11001100_hook("timer", setTimeout(function () {
        close({
          ls: cc11001100_hook("ls", option.ls, "object-key-init"),
          target: cc11001100_hook("target", ".guide-info-new", "object-key-init")
        });
      }, 5e3), "assign");
    });
    var fireShowType = cc11001100_hook("fireShowType", isLogin ? "loginPicShow" : "unLoginPicShow", "var-init");
    var fireClickType = cc11001100_hook("fireClickType", isLogin ? "loginPicClick" : "unLoginPicClick", "var-init");
    (0, _event.fire)("superman:login_guide", fireShowType, {
      popid: cc11001100_hook("popid", loginBubble.textId, "object-key-init")
    });
    $("body").on("click", ".guide-info-new", function (e) {
      var isClobtn = cc11001100_hook("isClobtn", e.target.className.indexOf("guide-close") !== -1, "var-init");
      var clicktype = cc11001100_hook("clicktype", isClobtn ? "close_cl" : "cont_cl", "var-init");
      if (!loginBubble.jumpUrl || isClobtn) {
        clearTimeout(timer);
        close({
          ls: cc11001100_hook("ls", option.ls, "object-key-init"),
          target: cc11001100_hook("target", ".guide-info-new", "object-key-init")
        });
      }
      (0, _event.fire)("superman:login_guide", fireClickType, {
        clicktype: cc11001100_hook("clicktype", clicktype, "object-key-init"),
        popid: cc11001100_hook("popid", loginBubble.textId, "object-key-init")
      });
      if (!isClobtn) {
        loginBubble.jumpUrl ? window.open(loginBubble.jumpUrl) : loginPopShow();
      }
    });
  }
  function createdTips(option) {
    cc11001100_hook("option", option, "function-parameter");
    var guideBubble = cc11001100_hook("guideBubble", option.guideBubble, "var-init");
    var pos = cc11001100_hook("pos", guideBubble.pos, "var-init");
    var isLogin = cc11001100_hook("isLogin", s_session && s_session.isLogin, "var-init");
    var classForPos = cc11001100_hook("classForPos", "".concat(isLogin ? "is-login" : "", " guide-info-pos-").concat(pos), "var-init");
    var type = cc11001100_hook("type", guideBubble.wordType === "tip" ? "tip" : "operate", "var-init");
    var opTxt = cc11001100_hook("opTxt", type === "operate" ? '<a class="operate-jump" src="'.concat(guideBubble.jumpUrl, '">').concat(guideBubble.operateText, "></a>") : "", "var-init");
    var addHtml = cc11001100_hook("addHtml", '\n        <div class="guide-word-tips '.concat(classForPos, " ").concat(type, '" >\n            <span>').concat(guideBubble.title, "</span>\n            ").concat(opTxt, '\n            <i class="c-icon word-guide-close">&#xe610;</i>\n            <div class="word-arrow-bottom-black">\n            </div>\n            <div class="word-arrow-bottom-white">\n            </div>\n        </div>\n    '), "var-init");
    $("#u1").append(addHtml);
    if (isLogin) {
      var avaWidth = cc11001100_hook("avaWidth", $("#u1 .s-top-username").width(), "var-init");
      var diff = cc11001100_hook("diff", 101 - avaWidth, "var-init");
      var classPos = cc11001100_hook("classPos", "#u1 .guide-word-tips.guide-info-pos-".concat(pos), "var-init");
      var offsetRight = cc11001100_hook("offsetRight", parseInt($(classPos).css("right"), 10) - diff, "var-init");
      $(classPos).css("right", "".concat(offsetRight, "px"));
    }
    var timer = cc11001100_hook("timer", setTimeout(function () {
      close({
        ls: cc11001100_hook("ls", option.ls, "object-key-init"),
        target: cc11001100_hook("target", ".guide-word-tips", "object-key-init")
      });
    }, 5e3), "var-init");
    $(".guide-info-new").on("mouseenter", function () {
      clearTimeout(timer);
    });
    $(".guide-info-new").on("mouseleave", function () {
      timer = cc11001100_hook("timer", setTimeout(function () {
        close({
          ls: cc11001100_hook("ls", option.ls, "object-key-init"),
          target: cc11001100_hook("target", ".guide-word-tips", "object-key-init")
        });
      }, 5e3), "assign");
    });
    if (type === "operate") {
      var fireShowType = cc11001100_hook("fireShowType", isLogin ? "loginWordShow" : "unLoginWordShow", "var-init");
      var fireClickType = cc11001100_hook("fireClickType", isLogin ? "loginWordClick" : "unLoginWordClick", "var-init");
      (0, _event.fire)("superman:login_guide", fireShowType, {
        popid: cc11001100_hook("popid", guideBubble.textId, "object-key-init")
      });
      $("body").on("click", ".word-guide-close", function () {
        close({
          ls: cc11001100_hook("ls", option.ls, "object-key-init"),
          target: cc11001100_hook("target", ".guide-word-tips", "object-key-init")
        });
        (0, _event.fire)("superman:login_guide", fireClickType, {
          clicktype: cc11001100_hook("clicktype", "close_cl", "object-key-init"),
          popid: cc11001100_hook("popid", guideBubble.textId, "object-key-init")
        });
      });
      $("body").on("click", ".operate-jump", function () {
        (0, _event.fire)("superman:login_guide", fireClickType, {
          clicktype: cc11001100_hook("clicktype", "jumpurl_cl", "object-key-init"),
          popid: cc11001100_hook("popid", guideBubble.textId, "object-key-init")
        });
      });
    }
  }
  function initFun() {
    var hideGuide = cc11001100_hook("hideGuide", "0", "var-init");
    var guideBubble = cc11001100_hook("guideBubble", $("#promote_login_box").html(), "var-init");
    var logObj = cc11001100_hook("logObj", [], "var-init");
    try {
      logObj = cc11001100_hook("logObj", JSON.parse(guideBubble) || [], "assign");
    } catch (e) {}
    var date = cc11001100_hook("date", new Date(), "var-init");
    var dataStr = cc11001100_hook("dataStr", JSON.stringify(date.getFullYear() + "" + date.getMonth() + "" + date.getDate()), "var-init");
    var isShow = function isShow(key) {
      try {
        hideGuide = cc11001100_hook("hideGuide", window.localStorage.getItem(key) || "0", "assign");
      } catch (e) {}
      return !hideGuide || hideGuide !== dataStr;
    };
    var isLogin = cc11001100_hook("isLogin", s_session && s_session.isLogin, "var-init");
    var renderGuide = function renderGuide(obj, guideType) {
      guideType.indexOf("Pic") !== -1 ? created({
        ls: cc11001100_hook("ls", obj.type, "object-key-init"),
        guideBubble: cc11001100_hook("guideBubble", obj, "object-key-init")
      }) : createdTips({
        ls: cc11001100_hook("ls", obj.type, "object-key-init"),
        guideBubble: cc11001100_hook("guideBubble", obj, "object-key-init")
      });
    };
    var _iterator = cc11001100_hook("_iterator", _createForOfIteratorHelper(logObj), "var-init"),
      _step;
    try {
      for (_iterator.s(); !(_step = cc11001100_hook("_step", _iterator.n(), "assign")).done;) {
        var obj = cc11001100_hook("obj", _step.value, "var-init");
        if (isShow(obj.type)) {
          if (obj.type === "loginPic" && isLogin) {
            renderGuide(obj, obj.type);
          }
          if (obj.type === "unLoginPic" && !isLogin) {
            renderGuide(obj, obj.type);
          }
          if (obj.type === "loginWord" && isLogin) {
            renderGuide(obj, obj.type);
          }
          if (obj.type === "unLoginWord" && !isLogin) {
            renderGuide(obj, obj.type);
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  function init() {
    initFun();
  }
});