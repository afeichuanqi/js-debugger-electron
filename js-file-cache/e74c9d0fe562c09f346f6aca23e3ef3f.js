define("superman/components/guide_tips", ["require", "exports"], function (require, _exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: cc11001100_hook("value", true, "object-key-init")
  });
  _exports.show = cc11001100_hook("_exports.show", show, "assign");
  _exports.close = cc11001100_hook("_exports.close", close, "assign");
  _exports.init = cc11001100_hook("_exports.init", init, "assign");
  var arrowWidth = cc11001100_hook("arrowWidth", 10, "var-init");
  var tipsHeight = cc11001100_hook("tipsHeight", 34, "var-init");
  var tipsWidth = cc11001100_hook("tipsWidth", 120, "var-init");
  var arrowSpace = cc11001100_hook("arrowSpace", 8, "var-init");
  var loginSpace = cc11001100_hook("loginSpace", 6, "var-init");
  var txtLength = cc11001100_hook("txtLength", 7, "var-init");
  var bottomTxtLength = cc11001100_hook("bottomTxtLength", 12, "var-init");
  function closeGuideTips(option) {
    cc11001100_hook("option", option, "function-parameter");
    if (option.ls) {
      try {
        window.localStorage.setItem(option.ls, "1");
      } catch (e) {}
    }
    if (option.red_dot) {
      $(option.red_dot).removeClass("red-point");
    }
    var newClass = cc11001100_hook("newClass", option.id.trim() + "-" + option.type, "var-init");
    $("." + newClass).hide();
  }
  function createdElement(top, left, option) {
    cc11001100_hook("top", top, "function-parameter");
    cc11001100_hook("left", left, "function-parameter");
    cc11001100_hook("option", option, "function-parameter");
    var type = cc11001100_hook("type", option.type, "var-init");
    var txt = cc11001100_hook("txt", option.txt, "var-init");
    var newClass = cc11001100_hook("newClass", option.id.trim() + "-" + option.type, "var-init");
    $("#" + option.id).append('\n        <div class="guide-info-new '.concat(newClass, '" style="left: ').concat(left, "px;top: ").concat(top, 'px;">\n            <span>').concat(txt, '</span>\n            <i class="c-icon guide-close" >&#xe610;</i>\n            <div class="guide-arrow-').concat(type, '">\n            </div>\n        </div>  \n    '));
    $("body").on("click", ".".concat(newClass, " .guide-close"), function (e) {
      window.event ? window.event.cancelBubble = cc11001100_hook("window.event.cancelBubble", true, "assign") : e.stopPropagation();
      if (e.preventDefault) {
        e.preventDefault();
      } else if (window.event) {
        window.event.returnValue = cc11001100_hook("window.event.returnValue", false, "assign");
      }
      closeGuideTips(option);
    });
  }
  function showGuideTips(option) {
    cc11001100_hook("option", option, "function-parameter");
    var element = cc11001100_hook("element", document.getElementById("".concat(option.id)), "var-init");
    if (!element) {
      return;
    }
    var timestamp = cc11001100_hook("timestamp", new Date(), "var-init");
    if (option.time_off && timestamp > option.time_off) {
      return;
    }
    option.red_dot && $(option.red_dot).addClass("red-point");
    var offsetObj = cc11001100_hook("offsetObj", element.getBoundingClientRect(), "var-init");
    var top = cc11001100_hook("top", 0, "var-init");
    var left = cc11001100_hook("left", 0, "var-init");
    var txtGap = cc11001100_hook("txtGap", option.txt && option.txt.length - txtLength, "var-init");
    var txtNumber = cc11001100_hook("txtNumber", txtGap && txtGap > 0 ? txtGap : 0, "var-init");
    switch (option.type) {
      case "bottom":
        var btnSapce = cc11001100_hook("btnSapce", option.id === "s-top-loginbtn" ? loginSpace : 0, "var-init");
        top = cc11001100_hook("top", offsetObj.height + arrowSpace + btnSapce, "assign");
        left = cc11001100_hook("left", 0 - tipsWidth + btnSapce - txtNumber * bottomTxtLength, "assign");
        break;
      case "top":
        top = cc11001100_hook("top", 0 - tipsHeight - arrowSpace - 5, "assign");
        left = cc11001100_hook("left", offsetObj.width / 2 - arrowWidth - 2, "assign");
        break;
      case "left":
        top = cc11001100_hook("top", arrowWidth, "assign");
        left = cc11001100_hook("left", 0 - tipsWidth - txtNumber * txtLength - offsetObj.width, "assign");
        break;
      case "right":
        top = cc11001100_hook("top", 0, "assign");
        left = cc11001100_hook("left", offsetObj.width + arrowWidth + arrowSpace, "assign");
        break;
    }
    createdElement(top, left, option);
  }
  function skinGuideInit(islogin) {
    cc11001100_hook("islogin", islogin, "function-parameter");
    var hideSkinGuide = cc11001100_hook("hideSkinGuide", "0", "var-init");
    try {
      hideSkinGuide = cc11001100_hook("hideSkinGuide", window.localStorage.getItem("hide_guide_skin_new") || "0", "assign");
    } catch (e) {}
    var elementId = cc11001100_hook("elementId", islogin ? "s-usersetting-top" : "s-top-loginbtn", "var-init");
    if (!hideSkinGuide || hideSkinGuide !== "1") {
      showGuideTips({
        id: cc11001100_hook("id", elementId, "object-key-init"),
        type: cc11001100_hook("type", "bottom", "object-key-init"),
        txt: cc11001100_hook("txt", islogin ? "点击设置，享有度晓晓和豪车新皮肤！" : "新皮肤上线，登录一下即刻享有！", "object-key-init"),
        ls: cc11001100_hook("ls", "hide_guide_skin_new", "object-key-init"),
        red_dot: cc11001100_hook("red_dot", islogin ? $("#s-usersetting-top") : false, "object-key-init"),
        time_off: cc11001100_hook("time_off", new Date("2021/5/31 24:00:00"), "object-key-init")
      });
    }
    var closeParam = cc11001100_hook("closeParam", {
      id: cc11001100_hook("id", elementId, "object-key-init"),
      type: cc11001100_hook("type", "bottom", "object-key-init"),
      ls: cc11001100_hook("ls", "hide_guide_skin_new", "object-key-init"),
      red_dot: cc11001100_hook("red_dot", $("#s-usersetting-top"), "object-key-init")
    }, "var-init");
    if (elementId === "s-usersetting-top") {
      $("#s-usersetting-top").on("mouseover", function (e) {
        if (e.target.id === "s-usersetting-top") {
          closeGuideTips(closeParam);
          $("#s-usersetting-top").removeClass("color222");
        } else {
          $("#s-user-setting-menu").hide();
          $("#s-usersetting-top").addClass("color222");
        }
      });
    } else if (elementId === "s-top-loginbtn") {
      $("#s-top-loginbtn").on("click", function () {
        closeGuideTips(closeParam);
      });
    }
  }
  function userCenterHide(closeParam) {
    cc11001100_hook("closeParam", closeParam, "function-parameter");
    $("#s-top-username .user-name").removeClass("color222");
    closeGuideTips(closeParam);
  }
  function userCenterInit(islogin) {
    cc11001100_hook("islogin", islogin, "function-parameter");
    var hideGuide = cc11001100_hook("hideGuide", "0", "var-init");
    try {
      hideGuide = cc11001100_hook("hideGuide", window.localStorage.getItem("hide_guide_usercenter") || "0", "assign");
    } catch (e) {}
    var elementId = cc11001100_hook("elementId", islogin ? "s-top-username" : "s-top-loginbtn", "var-init");
    if (!hideGuide || hideGuide !== "1") {
      showGuideTips({
        id: cc11001100_hook("id", elementId, "object-key-init"),
        type: cc11001100_hook("type", "bottom", "object-key-init"),
        txt: cc11001100_hook("txt", islogin ? "新版个人中心从这里进入哦" : "登录后可以体验新版个人中心啦", "object-key-init"),
        ls: cc11001100_hook("ls", "hide_guide_usercenter", "object-key-init"),
        red_dot: cc11001100_hook("red_dot", false, "object-key-init"),
        time_off: cc11001100_hook("time_off", new Date("2020/02/24 20:25:00"), "object-key-init")
      });
    }
    var closeParam = cc11001100_hook("closeParam", {
      id: cc11001100_hook("id", elementId, "object-key-init"),
      type: cc11001100_hook("type", "bottom", "object-key-init"),
      ls: cc11001100_hook("ls", "hide_guide_usercenter", "object-key-init")
    }, "var-init");
    $("#s-usersetting-top").on("mouseover", function () {
      closeGuideTips(closeParam);
    });
    if (elementId === "s-top-username") {
      $("#s-top-username").on("mouseover", function () {
        userCenterHide(closeParam);
      });
      $("#s-top-username .guide-info-new").on("mouseover", function (e) {
        $("#s-top-username .user-name").addClass("color222");
        window.event ? window.event.cancelBubble = cc11001100_hook("window.event.cancelBubble", true, "assign") : e.stopPropagation();
      });
    } else if (elementId === "s-top-loginbtn") {
      $("#s-top-loginbtn").on("click", function () {
        closeGuideTips(closeParam);
      });
    }
  }
  function show(option) {
    cc11001100_hook("option", option, "function-parameter");
    showGuideTips(option);
  }
  function close(option) {
    cc11001100_hook("option", option, "function-parameter");
    closeGuideTips(option);
  }
  function init(islogin) {
    cc11001100_hook("islogin", islogin, "function-parameter");
    userCenterInit(islogin);
    skinGuideInit(islogin);
  }
});