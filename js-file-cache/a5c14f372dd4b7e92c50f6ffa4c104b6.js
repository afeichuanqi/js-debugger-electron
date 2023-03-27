define("@baidu/wise-invoke-popup/index", ["require", "@baidu/wise-invoke-popup/src/renderPopup"], function (require) {
  var a = cc11001100_hook("a", require("@baidu/wise-invoke-popup/src/renderPopup"), "var-init");
  return a;
}), define("@baidu/wise-invoke-popup/src/renderPopup", ["require", "@baidu/wise-invoke-popup/src/utils"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    function w(e) {
      cc11001100_hook("e", e, "function-parameter");
      e.preventDefault();
    }
    function k(a) {
      cc11001100_hook("a", a, "function-parameter");
      j || (j = cc11001100_hook("j", !0, "assign"), b && "cancel" === a ? $(c).find("#popupLead").remove() : A.removeChild(c), H && H.removeEventListener("touchmove", w));
    }
    function F(c) {
      cc11001100_hook("c", c, "function-parameter");
      c && G && a.coverCallback();
    }
    function y(c) {
      cc11001100_hook("c", c, "function-parameter");
      k(), c && D && a.confirmCallback();
    }
    function E(c) {
      cc11001100_hook("c", c, "function-parameter");
      k("cancel"), c && U && a.cancelCallback();
    }
    function C(c) {
      cc11001100_hook("c", c, "function-parameter");
      k("close"), c && J && a.closeCallback();
    }
    b = cc11001100_hook("b", a.sugpopup || !1, "assign");
    var z = cc11001100_hook("z", a.capsuleDisplay, "var-init"),
      T = cc11001100_hook("T", a.capsuleText || "在百度App内打开", "var-init");
    if (c ? "" : g.addStyle(v), b ? g.addStyle(h) : "", b) {
      c = cc11001100_hook("c", document.createElement("div"), "assign"), c.id = cc11001100_hook("c.id", "pop-up", "assign");
      var B;
      B = cc11001100_hook("B", z ? '<div class="capsule-btn" id="capsuleBtn">' + T + "</div>" : "", "assign");
      var S = cc11001100_hook("S", a.popHeadTitle || "前往百度App，体验更佳", "var-init"),
        P = cc11001100_hook("P", a.popTitle || "百度App", "var-init"),
        L = cc11001100_hook("L", a.popText || "有事搜一搜，没事看一看", "var-init"),
        N = cc11001100_hook("N", a.browerName && a.browerName.icon, "var-init"),
        I = cc11001100_hook("I", a.browerName && a.browerName.title, "var-init"),
        M = cc11001100_hook("M", a.isSupportAnimate, "var-init");
      c.innerHTML = cc11001100_hook("c.innerHTML", '<div class="popup-fix-bottom" id="popupLead"><div class="popup-fix-head"><div>' + S + '</div><div class="popup-fix-head-close-btn" id="popUpCloseBtn"></div></div><div class="popup-fix-content"><div class="popup-fix-cont"><div class="popup-item"><div class="popup-item-left"><div class="brower-icon brower-icon-baidu"></div><div class="borwer-msg"><div class="brower-title">' + P + '</div><div class="brower-describe">' + L + '</div></div></div><div class="brower-btn brower-confirm" style="' + (M ? "animation: capsule 500ms cubic-bezier(0.25, 0.1, 0.25, 1) infinite forwards;" : "") + '">打开</div></div></div><div class="popup-divier"></div><div class="popup-fix-cont"><div class="popup-item"><div class="popup-item-left"><div class="brower-icon" style="background-image: url(' + N + ')"></div><div class="brower-title">' + I + '</div></div><div class="brower-btn brower-continue">继续</div></div></div></div></div>' + B, "assign");
    } else {
      var P = cc11001100_hook("P", a.popTitle || "提示", "var-init"),
        L = cc11001100_hook("L", a.popText || "前往百度App查看全文，体验更佳", "var-init");
      c = cc11001100_hook("c", document.createElement("div"), "assign"), c.id = cc11001100_hook("c.id", "pop-up", "assign"), c.innerHTML = cc11001100_hook("c.innerHTML", '<div class="popup-lead" id="popupLead"><div class="popup-lead-con"><div class="popup-lead-title">' + P + '</div><div class="popup-lead-text">' + L + '</div><div class="popup-lead-btn"><div class="popup-lead-cancel">取消</div><div class="popup-lead-confirm">确定</div></div></div></div>', "assign");
    }
    var A = cc11001100_hook("A", document.body, "var-init");
    a.popId && document.getElementById(a.popId) && (A = cc11001100_hook("A", document.getElementById(a.popId), "assign")), A.appendChild(c);
    var H = cc11001100_hook("H", document.getElementById("popupLead"), "var-init"),
      R = cc11001100_hook("R", document.getElementById("capsuleBtn"), "var-init"),
      j = cc11001100_hook("j", !1, "var-init");
    H && H.addEventListener("touchmove", w);
    var D = cc11001100_hook("D", a.confirmCallback instanceof Function, "var-init"),
      U = cc11001100_hook("U", a.cancelCallback instanceof Function, "var-init"),
      G = cc11001100_hook("G", a.coverCallback instanceof Function, "var-init"),
      J = cc11001100_hook("J", a.closeCallback instanceof Function, "var-init");
    return R && (R.onclick = cc11001100_hook("R.onclick", function () {
      y(!0);
    }, "assign")), H && (H.onclick = cc11001100_hook("H.onclick", function (e) {
      switch (e.target.className) {
        case "popup-lead":
          F(!0);
          break;
        case "popup-lead-confirm":
          y(!0);
          break;
        case "popup-lead-cancel":
          E(!0);
          break;
        case "popup-fix-bottom":
          F(!0);
          break;
        case "popup-fix-head-close-btn":
          C(!0);
          break;
        case "brower-btn brower-confirm":
          y(!0);
          break;
        case "brower-btn brower-continue":
          E(!0);
      }
    }, "assign")), {
      cancel: cc11001100_hook("cancel", E, "object-key-init")
    };
  }
  var c,
    b,
    g = cc11001100_hook("g", require("@baidu/wise-invoke-popup/src/utils"), "var-init"),
    v = cc11001100_hook("v", ".popup-lead {display: block;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.5);z-index: 1000;}.popup-lead-con {position: absolute;top: 50%;left: 50%;width: 80%;border-radius: 13px;background: #fff;transform: translate(-50%, -50%);-ms-transform: translate(-50%, -50%);-moz-transform: translate(-50%, -50%);-webkit-transform: translate(-50%, -50%);-o-transform: translate(-50%, -50%);text-align: center;}.popup-lead-title {font-size: 24px;line-height: 1;color: #303030;margin-top: 28px;}.popup-lead-text {font-size: 16px;line-height: 1;color: #999;margin-top: 24px;}.popup-lead-btn {position: relative;display: block;width: 100%;height: 48px;font-size: 18px;color: #000;border-top: 1px solid #eee;margin-top: 32px;}.popup-lead-cancel,.popup-lead-confirm {width: 48%;height: 100%;display: inline-block;line-height: 48px;text-align: center;}.popup-lead-cancel {border-right: 1px solid #eee;box-sizing: border-box;}", "var-init"),
    h = cc11001100_hook("h", ".popup-fix-bottom {position: fixed;bottom: 0px;left: 0;width: 100%;min-height: 2.15rem;background: #fff;border: 1px solid #e0e0e0;border-radius: .21rem .21rem 0 0;box-sizing: border-box;z-index: 202;font-family: PingFangSC-Regular;animation: ivk-panel-slide-up 300ms ease-in normal forwards;}@keyframes ivk-panel-slide-up {from {bottom: -2.1rem;}to {bottom: 0rem;}}.popup-fix-head {position: relative;height: .54rem;border-bottom: 1px solid #EEEEEE;font-family: PingFangSC-Regular;font-size: .19rem;line-height: .58rem;color: #1E1E1E;text-align: left;padding: 0 .17rem;}.popup-fix-head-close-btn {position: absolute;top: 18px;right: 20px;width: .16rem;height: .16rem;background-image: url(https://b.bdstatic.com/searchbox/icms/searchbox/img/c-close.png);background-repeat: no-repeat;background-size: cover;}.popup-fix-cont {display: flex;justify-content: space-between;align-items: center;padding: .14rem 0;margin: 0 .17rem;}.popup-item {width: 100%;display: flex;align-items: center;justify-content: space-between;}.popup-item-left {display: flex;align-items: center;justify-content: flex-start;}.brower-icon {width: .5rem;height: .5rem;margin-right: .11rem;background-repeat: no-repeat;background-position: center;background-size: cover;border: 1px solid #FFFFFF;border-radius: .1rem;flex-shrink: 0;}.brower-icon-baidu {background-image: url(https://b.bdstatic.com/searchbox/icms/searchbox/img/baidu.png);}.brower-btn {flex-shrink: 0;border-radius: .19rem;width: .82rem;height: .38rem;box-sizing: border-box;}.brower-title {font-family: PingFangSC-Regular;font-size: .19rem;color: #1E1E1E;letter-spacing: 0;line-height: .19rem;text-align: start;}.brower-describe {max-width: 1.7rem;font-family: PingFangSC-Regular;font-size: .14rem;color: #858585;letter-spacing: 0;text-align: start;line-height: .14rem;margin-top: .06rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}.brower-confirm {background: #4E6EF2;font-family: PingFangSC-Medium;font-size: .14rem;line-height: .38rem;color: #FFFFFF;letter-spacing: 0;text-align: center;}.brower-continue {background: #e0e0e0;border: 1px solid #FFFFFF;font-family: PingFangSC-Medium;font-size: .14rem;color: #FFFFFF;letter-spacing: 0;text-align: center;line-height: .38rem;}.popup-divier {border-bottom: 1px solid #EEEEEE;margin: 0 .17rem;}.capsule-btn {position: fixed;bottom: 35px;left: 50%;transform: translate(-50%, 0);font-family: PingFangSC-Medium;font-size: 14px;color: #FFFFFF;letter-spacing: 0;text-align: center;line-height: 16px;background: #3388FF;box-shadow: 0 2px 4px 0 rgba(0,0,0,0.30);border-radius: 15.5px;padding: 7px 13px;z-index: 201;}@keyframes capsule {0% {transform: scale(1);}50% {transform: scale(1.1);}100% {transform: scale(1);}}", "var-init");
  return a;
}), define("@baidu/wise-invoke-popup/src/utils", ["require"], function () {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (/.+\.css$/.test(a)) {
      var c = cc11001100_hook("c", document.createElement("link"), "var-init");
      c.type = cc11001100_hook("c.type", "text/css", "assign"), c.rel = cc11001100_hook("c.rel", "stylesheet", "assign"), c.href = cc11001100_hook("c.href", a, "assign"), (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(c);
    } else {
      var c = cc11001100_hook("c", document.createElement("style"), "var-init");
      c.type = cc11001100_hook("c.type", "text/css", "assign"), (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(c), c.innerHTML = cc11001100_hook("c.innerHTML", a, "assign");
    }
  }
  return {
    addStyle: cc11001100_hook("addStyle", a, "object-key-init")
  };
}), define("@baidu/wise-invoke-popup", ["@baidu/wise-invoke-popup/index"], function (mod) {
  return mod;
});