function fixedSidebarInButton() {
  function t() {
    var t = cc11001100_hook("t", $(".csdn-side-toolbar"), "var-init");
    if (0 === t.length) var e = cc11001100_hook("e", setInterval(function () {
      t = cc11001100_hook("t", $(".csdn-side-toolbar"), "assign"), t.length > 0 && (t.css("left", i() + "px"), clearInterval(e));
    }, 200), "var-init");else t.css("left", i() + "px");
  }
  function i() {
    return $("#rightAside").length && "block" === $("#rightAside").css("display") ? $("#rightAside").offset().left + 300 + 8 : $("#rightAsideConcision").length && "block" === $("#rightAsideConcision").css("display") ? $("#rightAsideConcision").offset().left + 300 + 8 : $("main").offset().left + $("main").width() + 8;
  }
  window.csdn.fixedSidebar({
    targetBox: cc11001100_hook("targetBox", $(".blog_container_aside"), "object-key-init"),
    mainBox: cc11001100_hook("mainBox", $("main"), "object-key-init"),
    sidebar: cc11001100_hook("sidebar", $(".blog_container_aside"), "object-key-init"),
    direction: cc11001100_hook("direction", "left", "object-key-init"),
    position: cc11001100_hook("position", "fixed", "object-key-init"),
    bottom: cc11001100_hook("bottom", 0, "object-key-init"),
    zIndex: cc11001100_hook("zIndex", 99, "object-key-init"),
    sidebarRightMargin: cc11001100_hook("sidebarRightMargin", 8, "object-key-init"),
    sidebarLeftMargin: cc11001100_hook("sidebarLeftMargin", 8, "object-key-init")
  }), window.csdn.fixedSidebar.stopListener = cc11001100_hook("window.csdn.fixedSidebar.stopListener", !$(".main_father").hasClass("mainfather-concision"), "assign"), t(), $(window).resize(function () {
    t();
  }), $(document).on("click", ".csdn-side-toolbar .option-box", function (i) {
    isShowConcision && setTimeout(function () {
      t(), window.csdn.fixedSidebar({
        targetBox: cc11001100_hook("targetBox", $(".blog_container_aside"), "object-key-init"),
        mainBox: cc11001100_hook("mainBox", $("main"), "object-key-init"),
        sidebar: cc11001100_hook("sidebar", $(".blog_container_aside"), "object-key-init"),
        direction: cc11001100_hook("direction", "left", "object-key-init"),
        position: cc11001100_hook("position", "fixed", "object-key-init"),
        bottom: cc11001100_hook("bottom", 0, "object-key-init"),
        zIndex: cc11001100_hook("zIndex", 99, "object-key-init"),
        sidebarRightMargin: cc11001100_hook("sidebarRightMargin", 8, "object-key-init"),
        sidebarLeftMargin: cc11001100_hook("sidebarLeftMargin", 8, "object-key-init")
      }), window.csdn.fixedSidebar.stopListener = cc11001100_hook("window.csdn.fixedSidebar.stopListener", !$(".main_father").hasClass("mainfather-concision"), "assign");
    }, 100);
  });
}
function showInit() {
  $("<div id='st_mask' onclick='closeMask()'></div>").appendTo("body").css({
    width: cc11001100_hook("width", "100%", "object-key-init"),
    height: cc11001100_hook("height", "100%", "object-key-init"),
    background: cc11001100_hook("background", "rgba(0,0,0,.4)", "object-key-init"),
    position: cc11001100_hook("position", "fixed", "object-key-init"),
    left: cc11001100_hook("left", "0", "object-key-init"),
    top: cc11001100_hook("top", "0", "object-key-init"),
    display: cc11001100_hook("display", "none", "object-key-init"),
    "z-index": cc11001100_hook("z-index", "1", "object-key-init")
  }), $("<div id='st_confirmBox'></div>").appendTo("body").css({
    width: cc11001100_hook("width", "360px", "object-key-init"),
    position: cc11001100_hook("position", "fixed", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "left", "object-key-init"),
    display: cc11001100_hook("display", "none", "object-key-init"),
    "z-index": cc11001100_hook("z-index", "100", "object-key-init"),
    left: cc11001100_hook("left", "0px", "object-key-init"),
    top: cc11001100_hook("top", "0px", "object-key-init"),
    right: cc11001100_hook("right", "0px", "object-key-init"),
    bottom: cc11001100_hook("bottom", "0px", "object-key-init"),
    height: cc11001100_hook("height", "208px", "object-key-init"),
    margin: cc11001100_hook("margin", "auto", "object-key-init")
  }), $("<div id='st_confirm'></div>").appendTo("#st_confirmBox").css({
    background: cc11001100_hook("background", "#fff", "object-key-init"),
    "border-radius": cc11001100_hook("border-radius", "4px", "object-key-init"),
    overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
    padding: cc11001100_hook("padding", "24px", "object-key-init"),
    width: cc11001100_hook("width", "360px", "object-key-init"),
    height: cc11001100_hook("height", "208px", "object-key-init")
  }), $("<span id='st_confirm_tit'></span>").appendTo("#st_confirm").css({
    width: cc11001100_hook("width", "100%", "object-key-init"),
    "max-height": cc11001100_hook("max-height", "24px", "object-key-init"),
    "font-size": cc11001100_hook("font-size", "18px", "object-key-init"),
    "font-weight": cc11001100_hook("font-weight", "500", "object-key-init"),
    color: cc11001100_hook("color", "#222226", "object-key-init"),
    "line-height": cc11001100_hook("line-height", "24px", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "left", "object-key-init"),
    display: cc11001100_hook("display", "block", "object-key-init"),
    overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
    "text-overflow": cc11001100_hook("text-overflow", "ellipsis", "object-key-init"),
    "white-space": cc11001100_hook("white-space", "nowrap", "object-key-init")
  }), $("<span id='st_confirm_text'></span>").appendTo("#st_confirm").css({
    "text-align": cc11001100_hook("text-align", "left", "object-key-init"),
    height: cc11001100_hook("height", "44px", "object-key-init"),
    "font-size": cc11001100_hook("font-size", "14px", "object-key-init"),
    "font-weight": cc11001100_hook("font-weight", "400", "object-key-init"),
    color: cc11001100_hook("color", "#555666", "object-key-init"),
    "line-height": cc11001100_hook("line-height", "22px", "object-key-init"),
    overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
    display: cc11001100_hook("display", "-webkit-box", "object-key-init"),
    overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
    "-webkit-box-orient": cc11001100_hook("-webkit-box-orient", "vertical", "object-key-init"),
    "text-overflow": cc11001100_hook("text-overflow", "ellipsis", "object-key-init"),
    "-webkit-line-clamp": cc11001100_hook("-webkit-line-clamp", "2", "object-key-init"),
    "margin-top": cc11001100_hook("margin-top", "16px", "object-key-init"),
    "margin-bottom": cc11001100_hook("margin-bottom", "40px", "object-key-init")
  }), $("<span class='st_confirm_btn success'>确定</span>").appendTo("#st_confirm").css({
    background: cc11001100_hook("background", " #FC5533", "object-key-init"),
    color: cc11001100_hook("color", "#fff", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
    display: cc11001100_hook("display", "block", "object-key-init"),
    width: cc11001100_hook("width", "88px", "object-key-init"),
    height: cc11001100_hook("height", "36px", "object-key-init"),
    "line-height": cc11001100_hook("line-height", "36px", "object-key-init"),
    "margin-left": cc11001100_hook("margin-left", "16px", "object-key-init"),
    "float": cc11001100_hook("float", "right", "object-key-init"),
    "border-radius": cc11001100_hook("border-radius", "18px", "object-key-init")
  }), $("<span class='st_confirm_btn cancel'>取消</span>").appendTo("#st_confirm").css({
    color: cc11001100_hook("color", "#222226", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
    display: cc11001100_hook("display", "block", "object-key-init"),
    width: cc11001100_hook("width", "88px", "object-key-init"),
    height: cc11001100_hook("height", "36px", "object-key-init"),
    "line-height": cc11001100_hook("line-height", "36px", "object-key-init"),
    "margin-left": cc11001100_hook("margin-left", "16px", "object-key-init"),
    "float": cc11001100_hook("float", "right", "object-key-init"),
    "box-sizing": cc11001100_hook("box-sizing", "border-box", "object-key-init"),
    border: cc11001100_hook("border", "1px solid #CCCCD8", "object-key-init"),
    "border-radius": cc11001100_hook("border-radius", "18px", "object-key-init")
  }), $("<span id='st_confirm_close'></span>").appendTo("#st_confirm").css({
    display: cc11001100_hook("display", "block", "object-key-init"),
    width: cc11001100_hook("width", "12px", "object-key-init"),
    height: cc11001100_hook("height", "12px", "object-key-init"),
    position: cc11001100_hook("position", "absolute", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
    "z-index": cc11001100_hook("z-index", "100", "object-key-init"),
    top: cc11001100_hook("top", "24px", "object-key-init"),
    right: cc11001100_hook("right", "24px", "object-key-init")
  }), $("<img src='" + blogStaticHost + "dist/pc/img/closeBt.png'>").appendTo("#st_confirm_close").css({
    display: cc11001100_hook("display", "block", "object-key-init"),
    width: cc11001100_hook("width", "12px", "object-key-init"),
    height: cc11001100_hook("height", "12px", "object-key-init")
  }), $(".st_confirm_btn.cancel").mouseover(function () {
    $(".st_confirm_btn.cancel").css({
      border: cc11001100_hook("border", "1px solid #555666", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
  }).mouseout(function () {
    $(".st_confirm_btn.cancel").css({
      border: cc11001100_hook("border", "1px solid #CCCCD8", "object-key-init")
    });
  }), $(".st_confirm_btn.success").mouseover(function () {
    $(".st_confirm_btn.success").css({
      background: cc11001100_hook("background", "#FC1944", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
  }).mouseout(function () {
    $(".st_confirm_btn.success").css({
      background: cc11001100_hook("background", " #FC5533", "object-key-init")
    });
  }), $("#st_confirm_close").hover(function () {
    $("#st_confirm_close").css({
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
  }), $("<div></div>").appendTo("#st_confirm").css({
    clear: cc11001100_hook("clear", "both", "object-key-init"),
    display: cc11001100_hook("display", "block", "object-key-init")
  }), $("<div id='st_alertBox'></div>").appendTo("body").css({
    width: cc11001100_hook("width", "100%", "object-key-init"),
    position: cc11001100_hook("position", "fixed", "object-key-init"),
    left: cc11001100_hook("left", "0", "object-key-init"),
    top: cc11001100_hook("top", "34%", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
    display: cc11001100_hook("display", "none", "object-key-init"),
    "z-index": cc11001100_hook("z-index", "2", "object-key-init")
  }), $("<div id='st_alert'></div>").appendTo("#st_alertBox").css({
    width: cc11001100_hook("width", "80%", "object-key-init"),
    margin: cc11001100_hook("margin", "0 auto", "object-key-init"),
    background: cc11001100_hook("background", "#fff", "object-key-init"),
    "border-radius": cc11001100_hook("border-radius", "2px", "object-key-init"),
    overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
    "padding-top": cc11001100_hook("padding-top", "20px", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "center", "object-key-init")
  }), $("<span id='st_alert_text'></span>").appendTo("#st_alert").css({
    background: cc11001100_hook("background", "#fff", "object-key-init"),
    overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
    "padding-top": cc11001100_hook("padding-top", "20px", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
    display: cc11001100_hook("display", "block", "object-key-init"),
    padding: cc11001100_hook("padding", "15px 8px 30px", "object-key-init")
  }), $("<span id='st_alert_btn' onclick='closeMask()'></span>").appendTo("#st_alert").css({
    background: cc11001100_hook("background", "#1b79f8", "object-key-init"),
    color: cc11001100_hook("color", "#fff", "object-key-init"),
    padding: cc11001100_hook("padding", "8px", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
    display: cc11001100_hook("display", "block", "object-key-init"),
    width: cc11001100_hook("width", "72%", "object-key-init"),
    margin: cc11001100_hook("margin", "0 auto", "object-key-init"),
    "margin-bottom": cc11001100_hook("margin-bottom", "20px", "object-key-init"),
    "border-radius": cc11001100_hook("border-radius", "2px", "object-key-init"),
    overflow: cc11001100_hook("overflow", "hidden", "object-key-init"),
    "text-overflow": cc11001100_hook("text-overflow", "ellipsis", "object-key-init"),
    "white-space": cc11001100_hook("white-space", "nowrap", "object-key-init")
  }), $("<div id='st_toastBox'></div>").appendTo("body").css({
    width: cc11001100_hook("width", "100%", "object-key-init"),
    position: cc11001100_hook("position", "fixed", "object-key-init"),
    left: cc11001100_hook("left", "0", "object-key-init"),
    bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
    "text-align": cc11001100_hook("text-align", "center", "object-key-init"),
    display: cc11001100_hook("display", "none", "object-key-init")
  }), $("<span id='st_toastContent'></span>").appendTo("#st_toastBox").css({
    color: cc11001100_hook("color", "#fff", "object-key-init"),
    background: cc11001100_hook("background", "rgba(0,0,0,.8)", "object-key-init"),
    padding: cc11001100_hook("padding", "8px 24px", "object-key-init"),
    "border-radius": cc11001100_hook("border-radius", "4px", "object-key-init"),
    "max-width": cc11001100_hook("max-width", "80%", "object-key-init"),
    display: cc11001100_hook("display", "inline-block", "object-key-init"),
    "font-size": cc11001100_hook("font-size", "16px", "object-key-init")
  });
}
function showToast(t) {
  cc11001100_hook("t", t, "function-parameter");
  if (!t.text) return !1;
  clearTimeout(st_timer), $("#st_toastBox").hide();
  var i = cc11001100_hook("i", t.text, "var-init"),
    e = cc11001100_hook("e", parseInt(t.time ? t.time : 2300), "var-init"),
    s = cc11001100_hook("s", t.speed ? t.speed : "normal", "var-init"),
    n = cc11001100_hook("n", t.bottom ? t.bottom : "10%", "var-init");
  if (t.zindex) {
    var a = cc11001100_hook("a", parseInt(t.zindex), "var-init");
    $("#st_mask").css({
      "z-index": cc11001100_hook("z-index", a - 1, "object-key-init")
    }), $("#st_toastBox").css({
      "z-index": cc11001100_hook("z-index", a, "object-key-init")
    });
  } else $("#st_mask").css({
    "z-index": cc11001100_hook("z-index", 1, "object-key-init")
  }), $("#st_toastBox").css({
    "z-index": cc11001100_hook("z-index", 2, "object-key-init")
  });
  $("#st_toastBox").css({
    bottom: cc11001100_hook("bottom", n, "object-key-init")
  }), $("#st_toastContent").text(i), $("#st_mask").fadeIn(s, function () {
    $("#st_toastBox").fadeIn(s);
  }), st_timer = cc11001100_hook("st_timer", setTimeout(function () {
    $("#st_toastBox").fadeOut(function () {
      $("#st_mask").fadeOut();
    });
  }, e), "assign");
}
function showAlert(t) {
  cc11001100_hook("t", t, "function-parameter");
  if (!t.text) return !1;
  var i = cc11001100_hook("i", t.text, "var-init"),
    e = cc11001100_hook("e", (t.tit, t.bgColor ? t.bgColor : "#1b79f8"), "var-init"),
    s = cc11001100_hook("s", t.color ? t.color : "#fff", "var-init"),
    n = cc11001100_hook("n", t.btnText ? t.btnText : "确定", "var-init"),
    a = cc11001100_hook("a", t.top ? t.top : "34%", "var-init");
  if (t.zindex) {
    var o = cc11001100_hook("o", parseInt(t.zindex), "var-init");
    $("#st_mask").css({
      "z-index": cc11001100_hook("z-index", o - 1, "object-key-init")
    }), $("#st_alertBox").css({
      "z-index": cc11001100_hook("z-index", o, "object-key-init")
    });
  } else $("#st_mask").css({
    "z-index": cc11001100_hook("z-index", 1, "object-key-init")
  }), $("#st_alertBox").css({
    "z-index": cc11001100_hook("z-index", 2, "object-key-init")
  });
  $("#st_alert_text").text(i), $("#st_alert_text").text(i), $("#st_alert_btn").css({
    background: cc11001100_hook("background", e, "object-key-init")
  }), $("#st_alert_btn").css({
    color: cc11001100_hook("color", s, "object-key-init")
  }), $("#st_alert_btn").text(n), $("#st_alertBox").css({
    top: cc11001100_hook("top", a, "object-key-init")
  }), $("#st_mask,#st_alertBox").show(), t.success && $("#st_alert_btn").off("click").on("click", function () {
    t.success();
  });
}
function showConfirm(t) {
  cc11001100_hook("t", t, "function-parameter");
  if (!t.text) return !1;
  if (t.zindex) {
    var i = cc11001100_hook("i", parseInt(t.zindex), "var-init");
    $("#st_mask").css({
      "z-index": cc11001100_hook("z-index", i - 1, "object-key-init")
    }), $("#st_confirmBox").css({
      "z-index": cc11001100_hook("z-index", i, "object-key-init")
    });
  } else $("#st_mask").css({
    "z-index": cc11001100_hook("z-index", 1, "object-key-init")
  }), $("#st_confirmBox").css({
    "z-index": cc11001100_hook("z-index", 2, "object-key-init")
  });
  t.isBlack && ($("#st_confirmBox #st_confirm").css({
    background: cc11001100_hook("background", "#2E2E32", "object-key-init")
  }), $("#st_confirmBox #st_confirm_tit").css({
    color: cc11001100_hook("color", "#D3D3D3", "object-key-init")
  }), $("#st_confirmBox #st_confirm_text").css({
    color: cc11001100_hook("color", "#999999", "object-key-init")
  }), $("#st_confirmBox .st_confirm_btn.cancel").css({
    border: cc11001100_hook("border", "1px solid #555666", "object-key-init"),
    color: cc11001100_hook("color", "#CCCCD8", "object-key-init")
  }), $("#st_confirmBox .st_confirm_btn.cancel").mouseover(function () {
    $("#st_confirmBox .st_confirm_btn.cancel").css({
      border: cc11001100_hook("border", "1px solid #ccccd8", "object-key-init"),
      cursor: cc11001100_hook("cursor", "pointer", "object-key-init")
    });
  }).mouseout(function () {
    $("#st_confirmBox .st_confirm_btn.cancel").css({
      border: cc11001100_hook("border", "1px solid #555666", "object-key-init")
    });
  })), $("#st_confirm_tit").text(t.tit), $("#st_confirm_text").text(t.text), $(".st_confirm_btn.success").text(t.rightText ? t.rightText : "确定"), $("#st_mask,#st_confirmBox").show(), $("#st_confirm_close").off("click").on("click", function () {
    closeMask(), t.cancel();
  }), t.cancel ? $(".st_confirm_btn.cancel").off("click").on("click", function () {
    closeMask(), t.cancel();
  }) : $(".st_confirm_btn.cancel").off("click").on("click", function () {
    closeMask();
  }), t.success ? $(".st_confirm_btn.success").off("click").on("click", function () {
    closeMask(), t.success();
  }) : $(".st_confirm_btn.success").off("click").on("click", function () {
    closeMask();
  });
}
function closeMask() {
  $("#st_mask,#st_alertBox,#st_confirmBox").hide();
}
function getCookie(t) {
  cc11001100_hook("t", t, "function-parameter");
  for (var i = cc11001100_hook("i", document.cookie.split("; "), "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < i.length; e++) {
    var s = cc11001100_hook("s", i[e].split("="), "var-init");
    if (t == s[0]) return s[1];
  }
  return null;
}
function setCookieBaseHour(t, i, e) {
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  cc11001100_hook("e", e, "function-parameter");
  var s = cc11001100_hook("s", new Date(), "var-init");
  s.setTime(s.getTime() + 36e5 * e), document.cookie = cc11001100_hook("document.cookie", t + "=" + escape(i) + ";expires=" + s.toGMTString() + ";domain=.csdn.net;path=/", "assign");
}
function toolbarIsSuspension() {
  return !!window.csdn.configuration_tool_parameterv;
}
$(function () {
  var t = cc11001100_hook("t", $("div.box-box-default"), "var-init"),
    i = cc11001100_hook("i", $("div.box-box-large"), "var-init");
  boxAways = cc11001100_hook("boxAways", $("div.box-box-aways"), "assign"), t.find("a.btn-remove").click(function () {
    t.remove();
  }), i.find("a.btn-remove").click(function () {
    i.remove();
  }), boxAways.find("a.btn-remove").click(function () {
    boxAways.remove();
  });
}), window.addLoadEvent = cc11001100_hook("window.addLoadEvent", window.addLoadEvent ? window.addLoadEvent : function (t) {
  var i = cc11001100_hook("i", window.onload, "var-init");
  "function" != typeof window.onload ? window.onload = cc11001100_hook("window.onload", t, "assign") : window.onload = cc11001100_hook("window.onload", function () {
    i(), t();
  }, "assign");
}, "assign"), $(function () {
  function t() {}
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    $(t).text("点开这里查看关注").fadeIn(), setTimeout(function () {
      $(t).fadeOut();
    }, 3e3);
  }
  t.prototype.animation = cc11001100_hook("t.prototype.animation", function () {
    if (!currentUserName) return !1;
    var t = cc11001100_hook("t", $(this).offset(), "var-init"),
      e = cc11001100_hook("e", $(".loginCenter").offset().top, "var-init"),
      s = cc11001100_hook("s", $(".loginCenter").offset().left + 20, "var-init"),
      n = cc11001100_hook("n", t.left + 80, "var-init"),
      a = cc11001100_hook("a", t.top + 20, "var-init"),
      o = cc11001100_hook("o", $("#pointDivs .point-pre").first().removeClass("point-pre").css({
        left: cc11001100_hook("left", n + "px", "object-key-init"),
        top: cc11001100_hook("top", a + "px", "object-key-init")
      }), "var-init"),
      r = cc11001100_hook("r", o.find(".point-inner"), "var-init");
    setTimeout(function () {
      o[0].style.webkitTransform = cc11001100_hook("o[0].style.webkitTransform", "translate3d(0," + (e - a) + "px,0)", "assign"), r[0].style.webkitTransform = cc11001100_hook("r[0].style.webkitTransform", "translate3d(" + (s - n) + "px,0,0)", "assign"), setTimeout(function () {
        o.removeAttr("style").addClass("point-pre"), r.removeAttr("style"), i(".guo_tip_box");
      }, 800);
    }, 1);
  }, "assign"), t.prototype.animationInit = cc11001100_hook("t.prototype.animationInit", function () {
    for (var t = cc11001100_hook("t", $('<div id="pointDivs"></div>').appendTo("body"), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < 5; i++) $('<div class="point-outer point-pre"><div class="point-inner"/></div></div>').appendTo(t);
  }, "assign"), window.CSDNAnimation = cc11001100_hook("window.CSDNAnimation", t, "assign");
}), $(function () {
  function t() {
    return window.devicePixelRatio > 1;
  }
  function i(t, i) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    $("span.blog-expert-button-follow").each(function (e) {
      t ? $(this).attr("data-name") == i && $(this).html('<span class="hover-hide">已关注</span><span class="hover-show">取消</span>').removeClass("btn-red-follow").addClass("btn-gray-follow attented") : $(this).attr("data-name") == i && $(this).html("关注").addClass("btn-red-follow").removeClass("btn-gray-follow attented");
    }), i == $("p.csdn-tracking-statistics").attr("username") && (t ? ($("#btnAttent").addClass("attented").text("已关注").removeClass("btn-red-hollow").addClass("btn-gray-hollow"), e(1)) : ($("#btnAttent").text("关注").addClass("btn-red-hollow").removeClass("btn-gray-hollow attented"), e(-1)));
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    $("#fan").text().indexOf("+") < 0 ? $("#fan").text(parseInt($("#fan").text()) + t) : $("#fanBox").attr("title", parseInt($("#fanBox").attr("title")) + t);
  }
  !function () {
    $(".medal-img").on("click", function () {
      window.csdn = cc11001100_hook("window.csdn", window.csdn ? window.csdn : {}, "assign"), window.csdn.userMedal.show({
        username: cc11001100_hook("username", username, "object-key-init"),
        nickname: cc11001100_hook("nickname", nickName, "object-key-init"),
        avatar: cc11001100_hook("avatar", avatar, "object-key-init")
      });
    });
  }();
  var s = cc11001100_hook("s", $("#search-blog-words"), "var-init"),
    n = cc11001100_hook("n", $(".btn-search-blog"), "var-init");
  s.on("focus", function () {
    n.addClass("btn-search-blog-active"), n.find("img").attr("src", "https://csdnimg.cn/cdn/content-toolbar/csdn-white-search.png?v=1587006908"), s.attr("placeholder", "");
  }), s.on("blur", s, function (t) {
    n.removeClass("btn-search-blog-active"), "Black" == skinStatus ? n.find("img").attr("src", "https://csdnimg.cn/cdn/content-toolbar/csdn-white-search.png?v=1587006908") : n.find("img").attr("src", "https://csdnimg.cn/cdn/content-toolbar/csdn-sou.png?v=1587021042"), s.attr("placeholder", "搜博主文章");
  }), s.keyup(function (t) {
    var i = cc11001100_hook("i", t.keyCode, "var-init");
    if (13 == i) {
      var e = cc11001100_hook("e", encodeURIComponent(s.val()), "var-init");
      if (e) {
        var n = cc11001100_hook("n", "//so.csdn.net/so/search/s.do?q=" + e + "&t=blog&u=" + username, "var-init");
        window.open(n);
      }
    }
  }), n.on("click", function (t) {
    var i = cc11001100_hook("i", encodeURIComponent(s.val()), "var-init");
    if (i) {
      var e = cc11001100_hook("e", "//so.csdn.net/so/search/s.do?q=" + i + "&t=blog&u=" + username, "var-init");
      window.open(e);
    }
    t.preventDefault();
  }), function () {
    if (t()) {
      var i = cc11001100_hook("i", $(".user-years"), "var-init");
      i.length > 0 && (i = cc11001100_hook("i", i.attr("src").split("/")[$(".user-years").attr("src").split("/").length - 1], "assign"), $(".user-years").attr("src", "https://g.csdnimg.cn/static/user-reg-year/2x/" + i));
    }
  }(), window.csdn = cc11001100_hook("window.csdn", window.csdn ? window.csdn : {}, "assign"), window.csdn.watchBtnChange = cc11001100_hook("window.csdn.watchBtnChange", i, "assign");
}), (isCorporate || "undefined" == typeof articleId || $(window).width() > 0) && $(document).ready(fixedSidebarInButton), window.leftFixedSide ? window.leftFixedSide : window.leftFixedSide = cc11001100_hook("window.leftFixedSide", {}, "assign"), window.leftFixedSide.fixedSidebarInButton = cc11001100_hook("window.leftFixedSide.fixedSidebarInButton", fixedSidebarInButton, "assign"), $(function () {
  function t() {
    var t = cc11001100_hook("t", document.cookie.match(new RegExp("(^| )UserName=([^;]*)(;|$)")), "var-init");
    return t ? t[2] : "";
  }
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    if ($("#fan").text().indexOf("万") === -1 && $("#fan").text().indexOf("+") === -1) {
      var i = cc11001100_hook("i", parseInt($("#fan").text()) + parseInt(t), "var-init"),
        e = cc11001100_hook("e", i > 0 ? i : 0, "var-init");
      $("#fan").text(e), $("#fanBox").attr("title", e);
    }
    var s = cc11001100_hook("s", $(".fans_read_more"), "var-init");
    s.length > 0 && s.trigger("click");
  }
  function e(t, i) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var e = cc11001100_hook("e", t.hasClass("attented"), "var-init");
    articleDetailUrl ? e ? n(t, i) : s(t, i) : getCookie("UserName") ? e ? n(t, i) : s(t, i) : window.csdn.loginBox.show();
  }
  function s(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    window.followByRR && (o.source = cc11001100_hook("o.source", "BLOG_DETAIL_COMMENT_ENVELOPE", "assign"), window.followByRR = cc11001100_hook("window.followByRR", !1, "assign"));
    var s = cc11001100_hook("s", "https://mp-action.csdn.net/interact/wrapper/pc/fans/v1/api/follow", "var-init");
    $.ajax({
      type: cc11001100_hook("type", "POST", "object-key-init"),
      url: cc11001100_hook("url", s, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/json; charset=utf-8", "object-key-init"),
      data: cc11001100_hook("data", JSON.stringify(o), "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (s) {
        s = cc11001100_hook("s", "object" != typeof s ? JSON.parse(s) : s, "assign"), 200 === s.code ? (t.addClass("attented").text("已关注"), i(1), e && window.csdn.report && "function" == typeof window.csdn.report.reportClick && window.csdn.report.reportClick({
          mod: cc11001100_hook("mod", "popu_379", "object-key-init"),
          spm: cc11001100_hook("spm", "1001.2101.3001.4123", "object-key-init"),
          extend1: cc11001100_hook("extend1", "关注", "object-key-init")
        })) : 400105100 == s.code && window.csdn.loginBox.show();
      },
      error: function (t) {
        t = cc11001100_hook("t", "object" != typeof t.responseText ? JSON.parse(t.responseText) : t.responseText, "assign"), 400105100 == t.code && window.csdn.loginBox.show();
      }
    });
  }
  function n(t, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var s = cc11001100_hook("s", "https://mp-action.csdn.net/interact/wrapper/pc/fans/v1/api/unFollow", "var-init");
    $.ajax({
      type: cc11001100_hook("type", "POST", "object-key-init"),
      url: cc11001100_hook("url", s, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/json; charset=utf-8", "object-key-init"),
      data: cc11001100_hook("data", JSON.stringify(o), "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (s) {
        200 == s.code ? (t.text("关注").removeClass("attented"), i(-1), e && window.csdn.report && "function" == typeof window.csdn.report.reportClick && window.csdn.report.reportClick({
          mod: cc11001100_hook("mod", "popu_379", "object-key-init"),
          spm: cc11001100_hook("spm", "1001.2101.3001.4123", "object-key-init"),
          extend1: cc11001100_hook("extend1", "已关注", "object-key-init")
        })) : 400105100 == s.code && window.csdn.loginBox.show();
      }
    });
  }
  var a = cc11001100_hook("a", new window.CSDNAnimation(), "var-init");
  if (a.animationInit(), $(".personal-watch").click(function (t) {
    var i = cc11001100_hook("i", !1, "var-init");
    i = cc11001100_hook("i", !!t.originalEvent, "assign"), e($(".personal-watch"), i);
  }), articleDetailUrl) var o = cc11001100_hook("o", {
    username: cc11001100_hook("username", getCookie("UserName"), "object-key-init"),
    follow: cc11001100_hook("follow", username, "object-key-init"),
    source: cc11001100_hook("source", "BLOG_DETAIL", "object-key-init"),
    fromType: cc11001100_hook("fromType", "pc", "object-key-init"),
    detailSourceName: cc11001100_hook("detailSourceName", articleTitle, "object-key-init"),
    sourceId: cc11001100_hook("sourceId", articleId, "object-key-init")
  }, "var-init");else var o = cc11001100_hook("o", {
    username: cc11001100_hook("username", getCookie("UserName"), "object-key-init"),
    follow: cc11001100_hook("follow", username, "object-key-init"),
    source: cc11001100_hook("source", "ME", "object-key-init"),
    fromType: cc11001100_hook("fromType", "pc", "object-key-init"),
    detailSourceName: cc11001100_hook("detailSourceName", "pc列表页", "object-key-init")
  }, "var-init");
  t();
}), function () {
  function t(t) {
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", document.createElement("div"), "var-init");
    void 0 != i.textContent ? i.textContent = cc11001100_hook("i.textContent", t, "assign") : i.innerText = cc11001100_hook("i.innerText", t, "assign");
    var e = cc11001100_hook("e", i.innerHTML, "var-init");
    return i = cc11001100_hook("i", null, "assign"), e;
  }
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", "", "var-init");
    return 0 == t.length ? "" : (i = cc11001100_hook("i", t.replace(/</g, "&lt;"), "assign"), i = cc11001100_hook("i", i.replace(/>/g, "&gt;"), "assign"));
  }
  window.csdn ? window.csdn : window.csdn = cc11001100_hook("window.csdn", {}, "assign"), window.csdn.htmlEncode_inner = cc11001100_hook("window.csdn.htmlEncode_inner", t, "assign"), window.csdn.htmlEncode_Escape = cc11001100_hook("window.csdn.htmlEncode_Escape", i, "assign");
}(), !function (t, i) {
  "function" == typeof define && define.amd ? define(["jquery"], i) : "object" == typeof exports ? module.exports = cc11001100_hook("module.exports", i(), "assign") : t.Query = cc11001100_hook("t.Query", i(window.Zepto || window.jQuery || $), "assign");
}(this, function (t) {
  return {
    getQuery: function (t, e, s) {
      new RegExp("(^|&|#)" + t + "=([^&]*)(&|$|#)", "i"), s = cc11001100_hook("s", s || window, "assign");
      var n,
        a,
        o = cc11001100_hook("o", s.location.href, "var-init"),
        r = cc11001100_hook("r", "", "var-init");
      if (n = cc11001100_hook("n", "#" == e ? o.split("#") : o.split("?"), "assign"), "" != (a = cc11001100_hook("a", 1 == n.length ? "" : n[1], "assign"))) {
        gg = cc11001100_hook("gg", a.split(/&|#/), "assign");
        var c = cc11001100_hook("c", gg.length, "var-init");
        for (str = cc11001100_hook("str", arguments[0] + "=", "assign"), i = cc11001100_hook("i", 0, "assign"); i < c; i++) if (0 == gg[i].indexOf(str)) {
          r = cc11001100_hook("r", gg[i].replace(str, ""), "assign");
          break;
        }
      }
      return decodeURI(r);
    },
    getForm: function (i) {
      var e = cc11001100_hook("e", {}, "var-init"),
        s = cc11001100_hook("s", {}, "var-init");
      t(i).find("*[name]").each(function (i, n) {
        var a,
          o = cc11001100_hook("o", t(n).attr("name"), "var-init"),
          r = cc11001100_hook("r", t.trim(t(n).val()), "var-init"),
          c = cc11001100_hook("c", [], "var-init");
        if ("" != o && !t(n).hasClass("getvalued")) {
          if ("money" == t(n).data("type") && (r = cc11001100_hook("r", r.replace(/\,/gi, ""), "assign")), "radio" == t(n).attr("type")) {
            var l = cc11001100_hook("l", null, "var-init");
            t("input[name='" + o + "']:radio").each(function () {
              t(this).is(":checked") && (l = cc11001100_hook("l", t.trim(t(this).val()), "assign"));
            }), r = cc11001100_hook("r", l || "", "assign");
          }
          if ("checkbox" == t(n).attr("type")) {
            var l = cc11001100_hook("l", [], "var-init");
            t("input[name='" + o + "']:checkbox").each(function () {
              t(this).is(":checked") && l.push(t.trim(t(this).val()));
            }), r = cc11001100_hook("r", l.length ? l.join(",") : "", "assign");
          }
          if (t(n).attr("listvalue") && (e[t(n).attr("listvalue")] || (e[t(n).attr("listvalue")] = cc11001100_hook("e[t(n).attr(\"listvalue\")]", [], "assign"), t("input[listvalue='" + t(n).attr("listvalue") + "']").each(function () {
            if ("" != t(this).val()) {
              var i = cc11001100_hook("i", t(this).attr("name"), "var-init"),
                s = cc11001100_hook("s", {}, "var-init");
              if ("json" == t(this).data("type") ? s[i] = cc11001100_hook("s[i]", JSON.parse(t(this).val()), "assign") : s[i] = cc11001100_hook("s[i]", t.trim(t(this).val()), "assign"), t(this).attr("paramquest")) {
                var a = cc11001100_hook("a", JSON.parse(t(this).attr("paramquest")), "var-init");
                s = cc11001100_hook("s", t.extend(s, a), "assign");
              }
              e[t(n).attr("listvalue")].push(s), t(this).addClass("getvalued");
            }
          }))), t(n).attr("arrayvalue") && (e[t(n).attr("arrayvalue")] || (e[t(n).attr("arrayvalue")] = cc11001100_hook("e[t(n).attr(\"arrayvalue\")]", [], "assign"), t("input[arrayvalue='" + t(n).attr("arrayvalue") + "']").each(function () {
            if ("" != t(this).val()) {
              var i = cc11001100_hook("i", {}, "var-init");
              if (i = cc11001100_hook("i", "json" == t(this).data("type") ? JSON.parse(t(this).val()) : t.trim(t(this).val()), "assign"), t(this).attr("paramquest")) {
                var s = cc11001100_hook("s", JSON.parse(t(this).attr("paramquest")), "var-init");
                i = cc11001100_hook("i", t.extend(i, s), "assign");
              }
              e[t(n).attr("arrayvalue")].push(i);
            }
          }))), "" != o && !t(n).hasClass("getvalued")) if (o.match(/\./)) {
            if (c = cc11001100_hook("c", o.split("."), "assign"), a = cc11001100_hook("a", c[0], "assign"), 3 == c.length) s[c[1]] = cc11001100_hook("s[c[1]]", s[c[1]] || {}, "assign"), s[c[1]][c[2]] = cc11001100_hook("s[c[1]][c[2]]", r, "assign");else if ("json" == t(n).data("type")) {
              if (s[c[1]] = cc11001100_hook("s[c[1]]", JSON.parse(r), "assign"), t(n).attr("paramquest")) {
                var d = cc11001100_hook("d", JSON.parse(t(n).attr("paramquest")), "var-init");
                s[c[1]] = cc11001100_hook("s[c[1]]", t.extend(s[c[1]], d), "assign");
              }
            } else s[c[1]] = cc11001100_hook("s[c[1]]", r, "assign");
            e[a] ? e[a] = cc11001100_hook("e[a]", t.extend({}, e[a], s), "assign") : e[a] = cc11001100_hook("e[a]", s, "assign");
          } else e[o] = cc11001100_hook("e[o]", r, "assign");
        }
      });
      var n = cc11001100_hook("n", {}, "var-init");
      for (var a in e) {
        var o = cc11001100_hook("o", e[a], "var-init");
        n[a] = cc11001100_hook("n[a]", "object" == typeof o ? JSON.stringify(o) : e[a], "assign");
      }
      return t(".getvalued").removeClass("getvalued"), n;
    },
    setHash: function (i) {
      var e = cc11001100_hook("e", "", "var-init");
      i = cc11001100_hook("i", t.extend(this.getHash(), i), "assign");
      var s = cc11001100_hook("s", [], "var-init");
      for (var n in i) "" != i[n] && s.push(n + "=" + encodeURIComponent(i[n]));
      return e += cc11001100_hook("e", s.join("&"), "assign"), location.hash = cc11001100_hook("location.hash", e, "assign"), this;
    },
    getHash: function (t) {
      if ("string" == typeof t) return this.getQuery(t, "#");
      var i = cc11001100_hook("i", {}, "var-init"),
        e = cc11001100_hook("e", location.hash, "var-init");
      if (e.length > 0) {
        e = cc11001100_hook("e", e.substr(1), "assign");
        for (var s = cc11001100_hook("s", e.split("&"), "var-init"), n = cc11001100_hook("n", 0, "var-init"), a = cc11001100_hook("a", s.length, "var-init"); n < a; n++) {
          var o = cc11001100_hook("o", s[n].split("="), "var-init");
          o.length > 0 && (i[o[0]] = cc11001100_hook("i[o[0]]", decodeURI(o[1]) || "", "assign"));
        }
      }
      return i;
    }
  };
}), function (t, i) {
  "function" == typeof define && define.amd ? define(["jquery", "query"], i) : "object" == typeof exports ? module.exports = cc11001100_hook("module.exports", i(), "assign") : t.Paging = cc11001100_hook("t.Paging", i(window.Zepto || window.jQuery || $, Query), "assign");
}(this, function (t, i) {
  function e() {
    var t = cc11001100_hook("t", Math.random().toString().replace(".", ""), "var-init");
    this.id = cc11001100_hook("this.id", "Paging_" + t, "assign");
  }
  return t.fn.Paging = cc11001100_hook("t.fn.Paging", function (i) {
    var s = cc11001100_hook("s", [], "var-init");
    return t(this).each(function () {
      var n = cc11001100_hook("n", t.extend({
          target: cc11001100_hook("target", t(this), "object-key-init")
        }, i), "var-init"),
        a = cc11001100_hook("a", new e(), "var-init");
      a.init(n), s.push(a);
    }), s;
  }, "assign"), e.prototype = cc11001100_hook("e.prototype", {
    init: function (i) {
      this.settings = cc11001100_hook("this.settings", t.extend({
        callback: cc11001100_hook("callback", null, "object-key-init"),
        pagesize: cc11001100_hook("pagesize", 10, "object-key-init"),
        current: cc11001100_hook("current", 1, "object-key-init"),
        prevTpl: cc11001100_hook("prevTpl", "<", "object-key-init"),
        nextTpl: cc11001100_hook("nextTpl", ">", "object-key-init"),
        firstTpl: cc11001100_hook("firstTpl", "首页", "object-key-init"),
        lastTpl: cc11001100_hook("lastTpl", "末页", "object-key-init"),
        ellipseTpl: cc11001100_hook("ellipseTpl", "...", "object-key-init"),
        toolbar: cc11001100_hook("toolbar", !1, "object-key-init"),
        hash: cc11001100_hook("hash", !1, "object-key-init"),
        pageSizeList: cc11001100_hook("pageSizeList", [5, 10, 15, 20], "object-key-init")
      }, i), "assign"), this.target = cc11001100_hook("this.target", t(this.settings.target), "assign"), this.container = cc11001100_hook("this.container", t('<div id="' + this.id + '" class="ui-paging-container"/>'), "assign"), this.target.append(this.container), this.render(this.settings), this.format(), this.bindEvent();
    },
    render: function (t) {
      void 0 !== t.count ? this.count = cc11001100_hook("this.count", t.count, "assign") : this.count = cc11001100_hook("this.count", this.settings.count, "assign"), void 0 !== t.pagesize ? this.pagesize = cc11001100_hook("this.pagesize", t.pagesize, "assign") : this.pagesize = cc11001100_hook("this.pagesize", this.settings.pagesize, "assign"), void 0 !== t.current ? this.current = cc11001100_hook("this.current", t.current, "assign") : this.current = cc11001100_hook("this.current", this.settings.current, "assign"), this.pagecount = cc11001100_hook("this.pagecount", Math.ceil(this.count / this.pagesize), "assign"), this.format();
    },
    bindEvent: function () {
      var i = cc11001100_hook("i", this, "var-init");
      this.container.on("click", "li.js-page-action,li.ui-pager", function (e) {
        return !t(this).hasClass("ui-pager-disabled") && !t(this).hasClass("focus") && (t(this).hasClass("js-page-action") ? (t(this).hasClass("js-page-first") && (i.current = cc11001100_hook("i.current", 1, "assign")), t(this).hasClass("js-page-prev") && (i.current = cc11001100_hook("i.current", Math.max(1, i.current - 1), "assign")), t(this).hasClass("js-page-next") && (i.current = cc11001100_hook("i.current", Math.min(i.pagecount, i.current + 1), "assign")), t(this).hasClass("js-page-last") && (i.current = cc11001100_hook("i.current", i.pagecount, "assign"))) : t(this).data("page") && (i.current = cc11001100_hook("i.current", parseInt(t(this).data("page")), "assign")), void i.go());
      });
    },
    go: function (t) {
      var e = cc11001100_hook("e", this, "var-init");
      this.current = cc11001100_hook("this.current", t || this.current, "assign"), this.current = cc11001100_hook("this.current", Math.max(1, e.current), "assign"), this.current = cc11001100_hook("this.current", Math.min(this.current, e.pagecount), "assign"), this.format(), this.settings.hash && i.setHash({
        page: cc11001100_hook("page", this.current, "object-key-init")
      }), this.settings.callback && this.settings.callback(this.current, this.pagesize, this.pagecount);
    },
    changePagesize: function (t) {
      this.render({
        pagesize: cc11001100_hook("pagesize", t, "object-key-init")
      }), this.settings.changePagesize && this.settings.changePagesize.call(this, this.pagesize, this.current, this.pagecount);
    },
    format: function () {
      var i = cc11001100_hook("i", "<ul>", "var-init");
      if (i += cc11001100_hook("i", '<li class="js-page-first js-page-action ui-pager" >' + this.settings.firstTpl + "</li>", "assign"), i += cc11001100_hook("i", '<li class="js-page-prev js-page-action ui-pager">' + this.settings.prevTpl + "</li>", "assign"), this.pagecount > 6) {
        if (i += cc11001100_hook("i", '<li data-page="1" class="ui-pager">1</li>', "assign"), this.current <= 2) i += cc11001100_hook("i", '<li data-page="2" class="ui-pager">2</li>', "assign"), i += cc11001100_hook("i", '<li data-page="3" class="ui-pager">3</li>', "assign"), i += cc11001100_hook("i", '<li class="ui-paging-ellipse">' + this.settings.ellipseTpl + "</li>", "assign");else if (this.current > 2 && this.current <= this.pagecount - 2) this.current > 3 && (i += cc11001100_hook("i", "<li>" + this.settings.ellipseTpl + "</li>", "assign")), i += cc11001100_hook("i", '<li data-page="' + (this.current - 1) + '" class="ui-pager">' + (this.current - 1) + "</li>", "assign"), i += cc11001100_hook("i", '<li data-page="' + this.current + '" class="ui-pager">' + this.current + "</li>", "assign"), i += cc11001100_hook("i", '<li data-page="' + (this.current + 1) + '" class="ui-pager">' + (this.current + 1) + "</li>", "assign"), this.current < this.pagecount - 2 && (i += cc11001100_hook("i", '<li class="ui-paging-ellipse" class="ui-pager">' + this.settings.ellipseTpl + "</li>", "assign"));else {
          i += cc11001100_hook("i", '<li class="ui-paging-ellipse" >' + this.settings.ellipseTpl + "</li>", "assign");
          for (var e = cc11001100_hook("e", this.pagecount - 2, "var-init"); e < this.pagecount; e++) i += cc11001100_hook("i", '<li data-page="' + e + '" class="ui-pager">' + e + "</li>", "assign");
        }
        i += cc11001100_hook("i", '<li data-page="' + this.pagecount + '" class="ui-pager">' + this.pagecount + "</li>", "assign");
      } else for (var e = cc11001100_hook("e", 1, "var-init"); e <= this.pagecount; e++) i += cc11001100_hook("i", '<li data-page="' + e + '" class="ui-pager">' + e + "</li>", "assign");
      i += cc11001100_hook("i", '<li class="js-page-next js-page-action ui-pager">' + this.settings.nextTpl + "</li>", "assign"), i += cc11001100_hook("i", '<li class="js-page-last js-page-action ui-pager">' + this.settings.lastTpl + "</li>", "assign"), i += cc11001100_hook("i", "</ul>", "assign"), this.container.html(i), 1 == this.current && (t(".js-page-prev", this.container).addClass("ui-pager-disabled"), t(".js-page-first", this.container).addClass("ui-pager-disabled")), this.current == this.pagecount && (t(".js-page-next", this.container).addClass("ui-pager-disabled"), t(".js-page-last", this.container).addClass("ui-pager-disabled")), this.container.find('li[data-page="' + this.current + '"]').addClass("focus").siblings().removeClass("focus"), this.settings.toolbar && this.bindToolbar();
    },
    bindToolbar: function () {
      for (var i = cc11001100_hook("i", this, "var-init"), e = cc11001100_hook("e", t('<li class="ui-paging-toolbar"><select class="ui-select-pagesize"></select><input type="text" class="ui-paging-count"/><a href="javascript:void(0)">跳转</a></li>'), "var-init"), s = cc11001100_hook("s", t(".ui-select-pagesize", e), "var-init"), n = cc11001100_hook("n", "", "var-init"), a = cc11001100_hook("a", 0, "var-init"), o = cc11001100_hook("o", this.settings.pageSizeList.length, "var-init"); a < o; a++) n += cc11001100_hook("n", '<option value="' + this.settings.pageSizeList[a] + '">' + this.settings.pageSizeList[a] + "条/页</option>", "assign");
      s.html(n), s.val(this.pagesize), t("input", e).val(this.current), t("input", e).click(function () {
        t(this).select();
      }).keydown(function (e) {
        if (13 == e.keyCode) {
          var s = cc11001100_hook("s", parseInt(t(this).val()) || 1, "var-init");
          i.go(s);
        }
      }), t("a", e).click(function () {
        var e = cc11001100_hook("e", parseInt(t(this).prev().val()) || 1, "var-init");
        i.go(e);
      }), s.change(function () {
        i.changePagesize(t(this).val());
      }), this.container.children("ul").append(e);
    }
  }, "assign"), e;
}), function (t, i) {
  function e(t, e, s, n) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("s", s, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    i.post(t, e, s, n);
  }
  window.csdn ? window.csdn : window.csdn = cc11001100_hook("window.csdn", {}, "assign"), window.csdn.post = cc11001100_hook("window.csdn.post", e, "assign");
}(window, jQuery), $(function () {
  function t(t, i) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    var e = cc11001100_hook("e", qrcode(6, "M"), "var-init");
    e.addData(i), e.make(), t.html(e.createImgTag(3, 3)), t.html(t.html());
  }
  var i = cc11001100_hook("i", $("#btShareColumn"), "var-init"),
    e = cc11001100_hook("e", $("#ShareColumnCode"), "var-init"),
    s = cc11001100_hook("s", $(".share-column-box"), "var-init");
  i.on("click", function () {
    var i = cc11001100_hook("i", $(this).data("url"), "var-init");
    t(e, i), s.show();
  }), $(document).click(function (t) {
    i.is(t.target) || 0 !== i.has(t.target).length || s.hide();
  });
});
var st_timer = cc11001100_hook("st_timer", null, "var-init");
$(function () {
  showInit();
}), $(function () {
  function t(t, i, e) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    $.ajax({
      url: cc11001100_hook("url", t, "object-key-init"),
      type: cc11001100_hook("type", "POST", "object-key-init"),
      data: cc11001100_hook("data", i, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (t) {
        if (s.skinBoxshadow.html(""), 200 == t.code) {
          var i = cc11001100_hook("i", '<div class="skin-success skin-tip skin-massage">          <svg t="1513153231313" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4182" id="mx_n_1513153231314" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m244.8 392L467.2 691.2c-8 9.6-24 12.8-36.8 12.8-12.8 0-27.2-3.2-36.8-12.8L267.2 560c-16-16-16-43.2 0-59.2s41.6-16 57.6 0l105.6 110.4 267.2-278.4c16-16 41.6-16 57.6 0s16 43.2 1.6 59.2z" p-id="4183" fill=""></path></svg>          <span>保存成功</span>          </div>', "var-init");
          s.skinBoxshadow.append(i), s.skinBoxshadow.fadeIn(200), setTimeout(function () {
            s.skinBoxshadow.fadeOut(200), s.skinTipbox.slideUp(200), "" !== e && (window.location.href = cc11001100_hook("window.location.href", e.window_url, "assign"));
          }, 1e3);
        } else if (400200002 == t.code) {
          var n = cc11001100_hook("n", '<div class="skin-vip skin-adopt skin-massage">          <p class="skin-title">          <svg t="1513590447537" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9504" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m0 832c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m64-320c0 35.2-28.8 64-64 64s-64-28.8-64-64V256c0-35.2 28.8-64 64-64s64 28.8 64 64v256z" p-id="9505" fill=""></path></svg>          <span>你还不是VIP会员</span></p>          <p class="skin-text">本皮肤为VIP用户可用哦，请您开通VIP会员后再试！</p>          <a href="https://mall.csdn.net/vip?utm_source=skinTemplateVip" class="adopt-vip" target="_blank">              <img class="isvip" src="' + blogStaticHost + 'dist/pc/img/crown.png" >              <span>开通VIP会员</span>          </a>          <div class="skin-bt-close"><svg t="1567152543821" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10924" width="200" height="200"><path d="M512 438.378667L806.506667 143.893333a52.032 52.032 0 1 1 73.6 73.621334L585.621333 512l294.485334 294.485333a52.074667 52.074667 0 0 1-73.6 73.642667L512 585.621333 217.514667 880.128a52.053333 52.053333 0 1 1-73.621334-73.642667L438.378667 512 143.893333 217.514667a52.053333 52.053333 0 1 1 73.621334-73.621334L512 438.378667z" fill="" p-id="10925"></path></svg></div>        </div>', "var-init");
          s.skinBoxshadow.append(n), s.skinBoxshadow.fadeIn(200), $(".skin-bt-close").on("click", function () {
            s.skinBoxshadow.fadeOut(200);
          });
        } else if (400200003 == t.code) {
          var a = cc11001100_hook("a", '<div class="grade-vip skin-adopt skin-massage">          <p class="skin-title">          <svg t="1513590447537" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9504" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m0 832c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m64-320c0 35.2-28.8 64-64 64s-64-28.8-64-64V256c0-35.2 28.8-64 64-64s64 28.8 64 64v256z" p-id="9505" fill=""></path></svg>          <span>' + t.message + '</span>          <p class="skin-text">开通VIP会员，即可专享所有皮肤哦～！</p>          <a href="https://mall.csdn.net/vip?utm_source=skinTemplateVip" class="adopt-vip" target="_blank">              <img class="isvip" src="' + blogStaticHost + 'dist/pc/img/crown.png" >              <span>开通VIP会员</span>          </a>          <div class="skin-bt-close"><svg t="1567152543821" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10924" width="200" height="200"><path d="M512 438.378667L806.506667 143.893333a52.032 52.032 0 1 1 73.6 73.621334L585.621333 512l294.485334 294.485333a52.074667 52.074667 0 0 1-73.6 73.642667L512 585.621333 217.514667 880.128a52.053333 52.053333 0 1 1-73.621334-73.642667L438.378667 512 143.893333 217.514667a52.053333 52.053333 0 1 1 73.621334-73.621334L512 438.378667z" fill="" p-id="10925"></path></svg></div>        </div>', "var-init");
          s.skinBoxshadow.append(a), s.skinBoxshadow.fadeIn(200), $(".skin-bt-close").on("click", function () {
            s.skinBoxshadow.fadeOut(200);
          });
        } else {
          var o = cc11001100_hook("o", '<div class="skin-error skin-tip skin-massage">          <svg t="1513590447537" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9504" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m0 832c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m64-320c0 35.2-28.8 64-64 64s-64-28.8-64-64V256c0-35.2 28.8-64 64-64s64 28.8 64 64v256z" p-id="9505" fill=""></path></svg>          <span>' + t.message + "</span>          </div>", "var-init");
          s.skinBoxshadow.append(o), s.skinBoxshadow.fadeIn(200), setTimeout(function () {
            s.skinBoxshadow.fadeOut(200);
          }, 1e3);
        }
      },
      error: function (t) {
        s.skinBoxshadow.html("");
        var i = cc11001100_hook("i", '<div class="skin-error skin-tip skin-massage">        <svg t="1513590447537" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9504" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m0 832c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m64-320c0 35.2-28.8 64-64 64s-64-28.8-64-64V256c0-35.2 28.8-64 64-64s64 28.8 64 64v256z" p-id="9505" fill=""></path></svg>        <span>保存失败！请重新保存</span>        </div>', "var-init");
        s.skinBoxshadow.append(i), s.skinBoxshadow.fadeIn(200), setTimeout(function () {
          s.skinBoxshadow.fadeOut(200);
        }, 1e3);
      }
    });
  }
  function i() {
    var t,
      i,
      e = cc11001100_hook("e", window.location.href, "var-init");
    return e.indexOf("?assign_skin_id") != -1 ? (i = cc11001100_hook("i", e.split("?")[0], "assign"), t = cc11001100_hook("t", e.split("?")[1].split("=")[1], "assign")) : i = cc11001100_hook("i", e, "assign"), t = cc11001100_hook("t", parseInt(t), "assign"), {
      window_url: cc11001100_hook("window_url", i, "object-key-init"),
      skin_id: cc11001100_hook("skin_id", t, "object-key-init")
    };
  }
  function e() {
    function t() {
      c = cc11001100_hook("c", {
        img_title: cc11001100_hook("img_title", s.userSkin.find("#uploadHeaderimg").attr("value"), "object-key-init"),
        img_back: cc11001100_hook("img_back", s.userSkin.find("#uploadBgimg").attr("value"), "object-key-init"),
        img_column: cc11001100_hook("img_column", s.userSkin.find("#uploadColumnimg").attr("value"), "object-key-init"),
        color_title: cc11001100_hook("color_title", s.userSkin.find("#topicColor").val(), "object-key-init"),
        color_title_hover: cc11001100_hook("color_title_hover", s.userSkin.find("#topicHoverColor").val(), "object-key-init"),
        color_sub_title: cc11001100_hook("color_sub_title", s.userSkin.find("#subTopicColor").val(), "object-key-init")
      }, "assign");
      var t = cc11001100_hook("t", "^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$", "var-init"),
        i = cc11001100_hook("i", new RegExp(t), "var-init");
      return "" === c.img_title ? (a("头图必传", !1), !1) : !("" !== c.color_title && !i.test(c.color_title)) || (a("请填写正确的颜色值", !1), !1);
    }
    function e() {
      s.userSkin.find("input").val(""), $("#uploadHeaderimg").value = cc11001100_hook("$(\"#uploadHeaderimg\").value", "", "assign"), $("#uploadBgimg").value = cc11001100_hook("$(\"#uploadBgimg\").value", "", "assign"), $("#uploadColumnimg").value = cc11001100_hook("$(\"#uploadColumnimg\").value", "", "assign"), s.userSkin.find(".upload-icon").show(), s.userSkin.find(".success-upload-icon").hide(), s.userSkin.find(".tip-massage").html("点击选择上传的图片"), s.userSkin.fadeOut(200);
    }
    function n(t, i, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var n = cc11001100_hook("n", blogUrl + "phoenix/web/v1/" + t, "var-init");
      $.ajax({
        url: cc11001100_hook("url", n, "object-key-init"),
        type: cc11001100_hook("type", "POST", "object-key-init"),
        data: cc11001100_hook("data", i, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (i) {
          setTimeout(function () {
            if (200 == i.code) "preview-skin" === t ? !!e && e(!0, i.data ? i.data : "操作成功") : !!e && e(!0, i.message ? i.message : "操作成功");else {
              var n = cc11001100_hook("n", '<div class="skin-vip skin-adopt skin-massage">                <p class="skin-title">                <svg t="1513590447537" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9504" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m0 832c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m64-320c0 35.2-28.8 64-64 64s-64-28.8-64-64V256c0-35.2 28.8-64 64-64s64 28.8 64 64v256z" p-id="9505" fill=""></path></svg>                <span>你还不是VIP会员</span></p>                <p class="skin-text">本功能为VIP用户可用哦，请您开通VIP会员后再试！</p>                <a href="https://mall.csdn.net/vip?utm_source=skinTemplateVip" class="adopt-vip" target="_blank">                    <img class="isvip" src="' + blogStaticHost + 'dist/pc/img/crown.png" >                    <span>开通VIP会员</span>                </a>                <div class="skin-bt-close"><svg t="1567152543821" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10924" width="200" height="200"><path d="M512 438.378667L806.506667 143.893333a52.032 52.032 0 1 1 73.6 73.621334L585.621333 512l294.485334 294.485333a52.074667 52.074667 0 0 1-73.6 73.642667L512 585.621333 217.514667 880.128a52.053333 52.053333 0 1 1-73.621334-73.642667L438.378667 512 143.893333 217.514667a52.053333 52.053333 0 1 1 73.621334-73.621334L512 438.378667z" fill="" p-id="10925"></path></svg></div>                </div>', "var-init");
              s.skinBoxshadow.append(n), s.skinBoxshadow.fadeIn(200), $(".skin-bt-close").on("click", function () {
                s.skinBoxshadow.fadeOut(200), s.skinBoxshadow.html("");
              });
            }
          }, 2e3);
        },
        error: function (t) {
          a("系统错误，请重新上传", !1);
        }
      });
    }
    function a(t, i) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      s.skinBoxshadow.html("");
      var e = cc11001100_hook("e", "", "var-init");
      e = cc11001100_hook("e", i ? '<div class="skin-success skin-tip skin-massage">        <svg t="1513153231313" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4182" id="mx_n_1513153231314" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m244.8 392L467.2 691.2c-8 9.6-24 12.8-36.8 12.8-12.8 0-27.2-3.2-36.8-12.8L267.2 560c-16-16-16-43.2 0-59.2s41.6-16 57.6 0l105.6 110.4 267.2-278.4c16-16 41.6-16 57.6 0s16 43.2 1.6 59.2z" p-id="4183" fill=""></path></svg>        <span>' + t + "</span>        </div>" : '<div class="skin-error skin-tip skin-massage">        <svg t="1513590447537" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9504" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16"><defs><style type="text/css"></style></defs><path d="M512 0C228.8 0 0 228.8 0 512s228.8 512 512 512 512-228.8 512-512S795.2 0 512 0z m0 832c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m64-320c0 35.2-28.8 64-64 64s-64-28.8-64-64V256c0-35.2 28.8-64 64-64s64 28.8 64 64v256z" p-id="9505" fill=""></path></svg>        <span>' + t + "</span>        </div>", "assign"), s.skinBoxshadow.append(e), s.skinBoxshadow.fadeIn(200), setTimeout(function () {
        s.skinBoxshadow.fadeOut(200);
      }, 1e3);
    }
    function o(t) {
      cc11001100_hook("t", t, "function-parameter");
      var i = cc11001100_hook("i", null, "var-init");
      return void 0 != window.createObjectURL ? i = cc11001100_hook("i", window.createObjectURL(t), "assign") : void 0 != window.URL ? i = cc11001100_hook("i", window.URL.createObjectURL(t), "assign") : void 0 != window.webkitURL && (i = cc11001100_hook("i", window.webkitURL.createObjectURL(t), "assign")), i;
    }
    function r(t) {
      cc11001100_hook("t", t, "function-parameter");
      s.cropBox.find("#cropImg").cropper({
        aspectRatio: cc11001100_hook("aspectRatio", t, "object-key-init"),
        viewMode: cc11001100_hook("viewMode", 2, "object-key-init"),
        dragMode: cc11001100_hook("dragMode", "crop", "object-key-init"),
        preview: cc11001100_hook("preview", ".small", "object-key-init"),
        responsive: cc11001100_hook("responsive", !0, "object-key-init"),
        restore: cc11001100_hook("restore", !1, "object-key-init"),
        modal: cc11001100_hook("modal", !0, "object-key-init"),
        guides: cc11001100_hook("guides", !0, "object-key-init"),
        center: cc11001100_hook("center", !0, "object-key-init"),
        highlight: cc11001100_hook("highlight", !0, "object-key-init"),
        background: cc11001100_hook("background", !0, "object-key-init"),
        autoCrop: cc11001100_hook("autoCrop", !0, "object-key-init"),
        autoCropArea: cc11001100_hook("autoCropArea", 1, "object-key-init"),
        movable: cc11001100_hook("movable", !0, "object-key-init"),
        scalable: cc11001100_hook("scalable", !1, "object-key-init"),
        zoomable: cc11001100_hook("zoomable", !0, "object-key-init"),
        rotatable: cc11001100_hook("rotatable", !1, "object-key-init"),
        preview: cc11001100_hook("preview", document.querySelectorAll(".final-img"), "object-key-init")
      });
    }
    $(".customize").click(function () {
      s.userSkin.fadeIn(200);
    });
    var c = cc11001100_hook("c", {
      img_title: cc11001100_hook("img_title", "", "object-key-init"),
      img_back: cc11001100_hook("img_back", "", "object-key-init"),
      img_column: cc11001100_hook("img_column", "", "object-key-init"),
      color_title: cc11001100_hook("color_title", "", "object-key-init"),
      color_title_hover: cc11001100_hook("color_title_hover", "", "object-key-init"),
      color_sub_title: cc11001100_hook("color_sub_title", "", "object-key-init")
    }, "var-init");
    s.userSkin.find(".bt-back").click(function () {
      e();
    }), s.userSkin.find(".user-skin-refer").click(function () {
      window.csdn.loginBox.key({
        biz: cc11001100_hook("biz", "blog", "object-key-init"),
        subBiz: cc11001100_hook("subBiz", "other_service", "object-key-init"),
        cb: function () {
          if (t()) {
            var e = function (t, e) {
              t && (a(e, !0), setTimeout(function () {
                i();
                window.location.href = cc11001100_hook("window.location.href", blog_address, "assign");
              }, 200));
            };
            n("save-custom-skin", c, e);
          }
        }
      });
    }), s.userSkin.find(".user-skin-preview").click(function () {
      if (t()) {
        var i = function (t, i) {
          t && window.open(i);
        };
        n("preview-skin", c, i);
      }
    });
    var l;
    s.uploadSkinImg.change(function (t) {
      var i = cc11001100_hook("i", $(this)[0].files[0], "var-init"),
        e = cc11001100_hook("e", i.type, "var-init"),
        n = cc11001100_hook("n", i.size / 1024, "var-init");
      if (!/.(jpg|jpeg|png)$/.test(e)) return a("请上传jpg、png格式图片", !1), !1;
      var c = cc11001100_hook("c", o(i), "var-init");
      switch (s.cropBox.find(".crop-img-before img").attr("src", c), l = cc11001100_hook("l", $(this)[0].id, "assign"), s.cropBox.find("#cropImg").cropper("destroy"), l) {
        case "uploadHeaderimg":
          if (r(19.2), 2048 < n) return void a("请选择2M以内的图片", !1);
          s.cropBox.find("#cropImg").cropper("setCropBoxData", {
            width: cc11001100_hook("width", 1920, "object-key-init"),
            height: cc11001100_hook("height", 100, "object-key-init")
          });
          break;
        case "uploadBgimg":
          if (1024 < n) return void a("请选择1M以内的图片", !1);
          r(1), s.cropBox.find("#cropImg").cropper("setCropBoxData", {
            width: cc11001100_hook("width", 100, "object-key-init"),
            height: cc11001100_hook("height", 100, "object-key-init")
          });
          break;
        case "uploadColumnimg":
          if (512 < n) return void a("请选择0.5M以内的图片", !1);
          r(300 / 38), s.cropBox.find("#cropImg").cropper("setCropBoxData", {
            width: cc11001100_hook("width", 300, "object-key-init"),
            height: cc11001100_hook("height", 38, "object-key-init")
          });
      }
      s.cropBox.fadeIn(200), $(this)[0].value = cc11001100_hook("$(this)[0].value", "", "assign");
    }), s.cropBox.find(".bt-back").click(function () {
      s.cropBox.fadeOut(200), s.cropBox.find("#cropImg").cropper("destroy");
    }), s.cropBox.find(".bt-next").click(function () {
      var t = cc11001100_hook("t", "", "var-init"),
        i = cc11001100_hook("i", "", "var-init"),
        e = cc11001100_hook("e", "", "var-init");
      switch (l) {
        case "uploadHeaderimg":
          t = cc11001100_hook("t", 1920, "assign"), i = cc11001100_hook("i", 100, "assign"), e = cc11001100_hook("e", "img_title", "assign");
          break;
        case "uploadBgimg":
          t = cc11001100_hook("t", 100, "assign"), i = cc11001100_hook("i", 100, "assign"), e = cc11001100_hook("e", "img_back", "assign");
          break;
        case "uploadColumnimg":
          t = cc11001100_hook("t", 300, "assign"), i = cc11001100_hook("i", 38, "assign"), e = cc11001100_hook("e", "img_column", "assign");
      }
      s.cropBox.find("#cropImg").cropper("getCroppedCanvas", {
        width: cc11001100_hook("width", t, "object-key-init"),
        height: cc11001100_hook("height", i, "object-key-init"),
        minWidth: cc11001100_hook("minWidth", t, "object-key-init"),
        minHeight: cc11001100_hook("minHeight", i, "object-key-init"),
        maxWidth: cc11001100_hook("maxWidth", t, "object-key-init"),
        maxHeight: cc11001100_hook("maxHeight", i, "object-key-init")
      }).toBlob(function (t) {
        var i = cc11001100_hook("i", new FormData(), "var-init");
        i.append("file", t), i.append("img_type", e), $.ajax("/pheapi/skin/skin_upload_img", {
          method: cc11001100_hook("method", "POST", "object-key-init"),
          data: cc11001100_hook("data", i, "object-key-init"),
          processData: cc11001100_hook("processData", !1, "object-key-init"),
          contentType: cc11001100_hook("contentType", !1, "object-key-init"),
          xhrFields: {
            withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
          },
          success: function (t) {
            if (t.result) {
              var i = cc11001100_hook("i", $("#" + l), "var-init");
              switch (i.attr("value", t.url), l) {
                case "upload-headerimg":
                  c.img_title = cc11001100_hook("c.img_title", i.val(), "assign");
                  break;
                case "upload-bgimg":
                  c.img_back = cc11001100_hook("c.img_back", i.val(), "assign");
                  break;
                case "upload-columnimg":
                  c.img_column = cc11001100_hook("c.img_column", i.val(), "assign");
              }
              i.siblings(".upload-img").find(".upload-icon").hide(), i.siblings(".upload-img").find(".success-upload-icon").show(), i.siblings(".upload-img").find(".tip-massage").html("点击重新上传"), a("上传成功", !0), setTimeout(function () {
                s.cropBox.fadeOut(200);
              }, 1e3);
            } else a(t.content, !1), setTimeout(function () {
              s.cropBox.fadeOut(200);
            }, 1e3);
          },
          error: function (t) {
            a("系统错误，请重新上传", !1), setTimeout(function () {
              s.cropBox.fadeOut(200);
            }, 1e3);
          }
        });
      }, "image/png");
    }), s.cropBox.find(".bt-reduce").click(function () {
      s.cropBox.find("#cropImg").cropper("zoom", -.1);
    }), s.cropBox.find(".bt-add").click(function () {
      s.cropBox.find("#cropImg").cropper("zoom", .1);
    });
  }
  var s = cc11001100_hook("s", {
    skikTemplateBox: cc11001100_hook("skikTemplateBox", $(".skin-template-box"), "object-key-init"),
    skinTemplateItem: cc11001100_hook("skinTemplateItem", $(".skin-template-item"), "object-key-init"),
    skinList: cc11001100_hook("skinList", $(".skin-list"), "object-key-init"),
    skinListShow: cc11001100_hook("skinListShow", $(".skin-list-show"), "object-key-init"),
    skinItem: cc11001100_hook("skinItem", $(".skin-item"), "object-key-init"),
    skinTipbox: cc11001100_hook("skinTipbox", $("#skinTipbox"), "object-key-init"),
    skinChange: cc11001100_hook("skinChange", $("#skinChange"), "object-key-init"),
    meUser: cc11001100_hook("meUser", $("#meUser"), "object-key-init"),
    skinBoxshadow: cc11001100_hook("skinBoxshadow", $(".skin-boxshadow"), "object-key-init"),
    userSkin: cc11001100_hook("userSkin", $("#userSkin"), "object-key-init"),
    cropBox: cc11001100_hook("cropBox", $("#cropBox"), "object-key-init"),
    uploadSkinImg: cc11001100_hook("uploadSkinImg", $(".upload-skin-img"), "object-key-init")
  }, "var-init");
  s.skinChange.on("click", function () {
    s.skikTemplateBox.fadeIn(200);
  }), $(document).mouseup(function (t) {
    var i = cc11001100_hook("i", s.skikTemplateBox, "var-init");
    i.is(t.target) || 0 !== i.has(t.target).length || s.skikTemplateBox.fadeOut(200);
  }), s.skinTemplateItem.on("click", function () {
    var t = cc11001100_hook("t", $(this).index(), "var-init");
    t < 2 ? ($(this).siblings().each(function (t, i) {
      $(i).find("img").eq(1).removeClass("changed"), $(i).find("img").eq(0).addClass("changed");
    }), $(this).find("img").eq(0).removeClass("changed"), $(this).find("img").eq(1).addClass("changed"), s.skinList.hide(), s.skinList.eq(t).show()) : (s.skikTemplateBox.fadeOut(200), s.userSkin.fadeIn(200));
  }), s.skinItem.on("click", function () {
    s.skinListShow.find("li").removeClass("skin-item-act"), $(this).addClass("skin-item-act"), s.skikTemplateBox.fadeOut(200);
  }), s.skinTipbox.on("click", ".skin-exit", function () {
    s.skinTipbox.slideUp(200);
    var t = cc11001100_hook("t", i(), "var-init");
    setTimeout(function () {
      window.location.href = cc11001100_hook("window.location.href", t.window_url, "assign");
    }, 200);
  }), s.skinTipbox.on("click", ".skin-save", function () {
    var e = cc11001100_hook("e", i(), "var-init"),
      s = cc11001100_hook("s", blogUrl + "phoenix/web/v1/use-skin", "var-init"),
      n = cc11001100_hook("n", {
        skin_id: cc11001100_hook("skin_id", e.skin_id, "object-key-init")
      }, "var-init");
    t(s, n, e);
  }), e();
}), function () {
  function t() {
    var t = cc11001100_hook("t", "", "var-init");
    if (s.innerHTML = cc11001100_hook("s.innerHTML", "", "assign"), h) {
      var i = cc11001100_hook("i", "active disabled", "var-init");
      c = cc11001100_hook("c", "已评分", "assign"), l = cc11001100_hook("l", r[o - 1], "assign");
    } else var i = cc11001100_hook("i", "", "var-init");
    for (var e = cc11001100_hook("e", 0, "var-init"); e < 5; e++) t += cc11001100_hook("t", '<span class="rate-item ' + (o && e < o ? "rate-item-active" : "") + '">        <img class="default" src = "' + blogStaticHost + 'dist/pc/img/topicStarGrey.png" />        <img class="active" src = "' + blogStaticHost + 'dist/pc/img/topicStarLight.png" />      </span >', "assign");
    var d = cc11001100_hook("d", '<div class="rate-t">我正在参加博客之星评选，请您投票！</div>                    <div class="rate-c">                      <div class="rate-c-l ' + i + '">                        ' + t + '                        <span class="rate-default-text">' + l + '</span>                      </div>                      <div class="rate-c-r ' + i + '">                        <span class="rate-submit-text">' + c + '</span>                      </div>                    </div>                    <div class="rate-b">                      <a target="_blank" href="' + blogStar2021Active + '" data-report-click=\'{"spm":"' + u + '"}\' data-report-query="spm=' + u + '"><img src="' + n + '" alt="">评选活动</a>                      <span></span>                      <a target="_blank" href="' + blogStar2021Interaction + '" data-report-click=\'{"spm":"' + f + '"}\' data-report-query="spm=' + f + '"><img src="' + a + '" alt="">我的互动区</a>                    </div>', "var-init");
    s.innerHTML = cc11001100_hook("s.innerHTML", d, "assign");
  }
  function i() {
    var i = cc11001100_hook("i", {
      type: cc11001100_hook("type", "communityCloud", "object-key-init"),
      rtype: cc11001100_hook("rtype", "topic", "object-key-init"),
      rid: cc11001100_hook("rid", blogStar2021Id, "object-key-init"),
      username: cc11001100_hook("username", getCookie("UserName"), "object-key-init")
    }, "var-init");
    $.ajax({
      type: cc11001100_hook("type", "GET", "object-key-init"),
      url: cc11001100_hook("url", "https://mp-action.csdn.net/interact/wrapper/pc/grade/getUserGrade", "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      data: cc11001100_hook("data", i, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (i) {
        200 == i.code ? (i.data ? (o = cc11001100_hook("o", i.data.starNum, "assign"), h = cc11001100_hook("h", !0, "assign")) : o = cc11001100_hook("o", 5, "assign"), t()) : s.remove();
      },
      error: function (t) {
        s.remove();
      }
    });
  }
  function e() {
    if (!o) return !1;
    if (window.csdn.report && "function" == typeof window.csdn.report.reportClick && window.csdn.report.reportClick({
      spm: cc11001100_hook("spm", p, "object-key-init")
    }), !getCookie("UserName")) return window.csdn.loginBox.show(), !1;
    var t = cc11001100_hook("t", {
      type: cc11001100_hook("type", "communityCloud", "object-key-init"),
      rtype: cc11001100_hook("rtype", "topic", "object-key-init"),
      rid: cc11001100_hook("rid", blogStar2021Id, "object-key-init"),
      username: cc11001100_hook("username", getCookie("UserName"), "object-key-init"),
      starNum: cc11001100_hook("starNum", o, "object-key-init")
    }, "var-init");
    $.ajax({
      type: cc11001100_hook("type", "POST", "object-key-init"),
      url: cc11001100_hook("url", "https://mp-action.csdn.net/interact/wrapper/pc/grade/save", "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/json; charset=utf-8", "object-key-init"),
      data: cc11001100_hook("data", JSON.stringify(t), "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (t) {
        200 == t.code && i();
      }
    });
  }
  var s = cc11001100_hook("s", document.getElementById("asideTopicStar"), "var-init");
  if (s) {
    var n = cc11001100_hook("n", "https://img-home.csdnimg.cn/images/20211220032738.png", "var-init"),
      a = cc11001100_hook("a", "https://img-home.csdnimg.cn/images/20211220032736.png", "var-init"),
      o = cc11001100_hook("o", 5, "var-init"),
      r = cc11001100_hook("r", ["锋芒小试，眼前一亮", "潜力巨大，未来可期", "持续贡献，值得关注", "成绩优异，大力学习", "贡献巨大，全力支持"], "var-init"),
      c = cc11001100_hook("c", "投票", "var-init"),
      l = cc11001100_hook("l", r[o - 1], "var-init"),
      d = cc11001100_hook("d", "1001.2015.3001.6954", "var-init"),
      p = cc11001100_hook("p", "1001.2015.3001.6955", "var-init"),
      u = cc11001100_hook("u", "1001.2015.3001.6956", "var-init"),
      f = cc11001100_hook("f", "1001.2015.3001.6957", "var-init"),
      h = cc11001100_hook("h", !1, "var-init");
    window.location.href.indexOf("article/details") > -1 && (d = cc11001100_hook("d", "1001.2101.3001.6946", "assign"), p = cc11001100_hook("p", "1001.2101.3001.6947", "assign"), u = cc11001100_hook("u", "1001.2101.3001.6948", "assign"), f = cc11001100_hook("f", "1001.2101.3001.6949", "assign")), getCookie("UserName") ? i() : t(), $(document).on("click", ".rate-c-r", function () {
      $(this).hasClass("active") || e();
    }), $(document).on("mouseenter", ".rate-c-l .rate-item", function () {
      if (!$(this).parents(".rate-c-l").hasClass("disabled")) {
        $(this).parents(".rate-c-l").removeClass("active");
        var t = cc11001100_hook("t", $(this).index(), "var-init");
        $(".rate-item").find("img.default").show(), $(".rate-item").find("img.active").hide();
        for (var i = cc11001100_hook("i", 0, "var-init"); i <= t; i++) $(".rate-item").eq(i).find("img.default").hide(), $(".rate-item").eq(i).find("img.active").show();
        l = cc11001100_hook("l", r[t], "assign"), $(".rate-default-text").html(l);
      }
    }), $(document).on("mouseleave", ".rate-c-l .rate-item", function () {
      if (!$(this).parents(".rate-c-l").hasClass("active")) {
        if ($(".rate-item").find("img.default").show(), $(".rate-item").find("img.active").hide(), o) {
          for (var t = cc11001100_hook("t", 0, "var-init"); t < o; t++) $(".rate-item").eq(t).find("img.default").hide(), $(".rate-item").eq(t).find("img.active").show();
          l = cc11001100_hook("l", r[o - 1], "assign");
        } else l = cc11001100_hook("l", "请投票", "assign");
        $(".rate-default-text").html(l);
      }
    }), $(document).on("click", ".rate-c-l .rate-item", function () {
      if (!$(this).parents(".rate-c-l").hasClass("active")) {
        var t = cc11001100_hook("t", $(this).index(), "var-init");
        $(this).parents(".rate-c-l").addClass("active"), o = cc11001100_hook("o", t + 1, "assign"), window.csdn.report && "function" == typeof window.csdn.report.reportClick && window.csdn.report.reportClick({
          spm: cc11001100_hook("spm", d, "object-key-init"),
          extend1: cc11001100_hook("extend1", o, "object-key-init")
        });
      }
      $(this).parents(".rate-c-l").siblings(".rate-c-r").hasClass("active") || $(this).parents(".rate-c-l").siblings(".rate-c-r").find(".rate-submit-text").addClass("active");
    });
  }
}(), window.csdn.configuration_tool_parameterv && window.csdn.configuration_tool_parameterv({
  need_first_suspend: cc11001100_hook("need_first_suspend", !0, "object-key-init"),
  need_little_suspend: cc11001100_hook("need_little_suspend", !1, "object-key-init"),
  little_tool_id: cc11001100_hook("little_tool_id", "", "object-key-init"),
  little_need_insert_type: cc11001100_hook("little_need_insert_type", "", "object-key-init")
}), $(function () {
  $.ajaxSetup({
    type: cc11001100_hook("type", "POST", "object-key-init"),
    error: function (t, i, e) {
      401 == t.status && (window.location = cc11001100_hook("window.location", "https://passport.csdn.net/account/login", "assign"));
    },
    success: function (t) {}
  });
});