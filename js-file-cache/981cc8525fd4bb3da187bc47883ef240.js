F.module("superman:components/advert", function (require, exports, ctx) {
  var $davertWrap = cc11001100_hook("$davertWrap", $("#s_popup_advert"), "var-init");
  var data = cc11001100_hook("data", bds.comm && bds.comm.popUpAdvert, "var-init");
  var timer = cc11001100_hook("timer", null, "var-init");
  var fadeTime = cc11001100_hook("fadeTime", 600, "var-init");
  var showStyle = cc11001100_hook("showStyle", {
    transition: cc11001100_hook("transition", "all 0.5s", "object-key-init"),
    "-webkit-transition": cc11001100_hook("-webkit-transition", "all 0.5s", "object-key-init"),
    "-moz-transition": cc11001100_hook("-moz-transition", "all 0.5s", "object-key-init"),
    "-o-transition": cc11001100_hook("-o-transition", "all 0.5s", "object-key-init"),
    transform: cc11001100_hook("transform", "scale(1)", "object-key-init"),
    "-ms-transform": cc11001100_hook("-ms-transform", "scale(1)", "object-key-init"),
    "-moz-transform": cc11001100_hook("-moz-transform", "scale(1)", "object-key-init"),
    "-webkit-transform": cc11001100_hook("-webkit-transform", "scale(1)", "object-key-init"),
    "-o-transform": cc11001100_hook("-o-transform", "scale(1)", "object-key-init"),
    opacity: cc11001100_hook("opacity", 1, "object-key-init")
  }, "var-init");
  var hideStyle = cc11001100_hook("hideStyle", {
    transition: cc11001100_hook("transition", "all 0.5s", "object-key-init"),
    "-webkit-transition": cc11001100_hook("-webkit-transition", "all 0.5s", "object-key-init"),
    "-moz-transition": cc11001100_hook("-moz-transition", "all 0.5s", "object-key-init"),
    "-o-transition": cc11001100_hook("-o-transition", "all 0.5s", "object-key-init"),
    transform: cc11001100_hook("transform", "scale(0)", "object-key-init"),
    "-ms-transform": cc11001100_hook("-ms-transform", "scale(0)", "object-key-init"),
    "-moz-transform": cc11001100_hook("-moz-transform", "scale(0)", "object-key-init"),
    "-webkit-transform": cc11001100_hook("-webkit-transform", "scale(0)", "object-key-init"),
    "-o-transform": cc11001100_hook("-o-transform", "scale(0)", "object-key-init"),
    opacity: cc11001100_hook("opacity", 0, "object-key-init")
  }, "var-init");
  var TAG = cc11001100_hook("TAG", data.tag, "var-init");
  var KEY_PREFIX = cc11001100_hook("KEY_PREFIX", "advert_", "var-init");
  var KEY_SHOWTIMES = cc11001100_hook("KEY_SHOWTIMES", KEY_PREFIX + TAG, "var-init");
  var KEY_CLOSEADVERT = cc11001100_hook("KEY_CLOSEADVERT", KEY_SHOWTIMES + "_close", "var-init");
  function initDom() {
    var countDownBg = cc11001100_hook("countDownBg", data.countDownBg || "rgba(251,251,251,0.8)", "var-init");
    var replayBg = cc11001100_hook("replayBg", data.replayBg || "rgba(216,216,216,0.15)", "var-init");
    var shrinkClass = cc11001100_hook("shrinkClass", "advert-shrink advert-shrink2", "var-init");
    $davertWrap.html('<div class="popup-advert">' + '<a class="advert-link" target="_blank" href="' + data.jumpUrl + '">' + '<img class="advert" src="' + data.imgUrl + '">' + "</a>" + '<div class="right-wrap" style="background:' + countDownBg + '">' + '<span class="popup-count-down">倒计时' + data.showTime + "秒</span>" + '<span class="close-wrap">' + '<i class="c-icon close-icon">&#xe610;</i>' + '<span class="close-text">关闭</span>' + "</span>" + "</div>" + "</div>" + '<div class="' + shrinkClass + '">' + '<i class="close-shrink c-icon">&#xe610;</i>' + '<a class="shrink-link" target="_blank" href="' + data.jumpUrl + '">' + '<img class="shrink" src="' + data.iconUrl + '">' + "</a>" + '<span class="replay"  style="background:' + replayBg + '">重播</span>' + "</div>");
    var maxNumer = cc11001100_hook("maxNumer", parseInt(data.showNumber), "var-init");
    var showNumber = cc11001100_hook("showNumber", 0, "var-init");
    try {
      showNumber = cc11001100_hook("showNumber", parseInt(window.localStorage.getItem(KEY_SHOWTIMES), 10), "assign");
    } catch (error) {}
    showNumber = cc11001100_hook("showNumber", isNaN(showNumber) ? 0 : showNumber, "assign");
    if (showNumber < maxNumer) {
      $davertWrap.find(".advert").load(function () {
        ctx.fire("advertAutoPlay");
        $davertWrap.find(".popup-count-down").text("倒计时" + data.showTime + "秒");
        $davertWrap.find(".popup-advert").fadeIn(fadeTime);
        countDown();
        showNumber++;
        try {
          window.localStorage.setItem(KEY_SHOWTIMES, showNumber);
        } catch (error) {}
      });
    } else {
      $davertWrap.find(".shrink").load(function () {
        ctx.fire("shrinkAutoPlay");
        $davertWrap.find(".advert-shrink").css(showStyle);
      });
    }
  }
  function bindEvent() {
    $davertWrap.find(".advert-link").on("click", function () {
      ctx.fire("advertClick");
    });
    $davertWrap.find(".close-wrap").on("click", function () {
      ctx.fire("advertClose");
      clearInterval(timer);
      $davertWrap.find(".popup-advert").fadeOut(fadeTime);
      $davertWrap.find(".advert-shrink").css(showStyle);
    });
    $davertWrap.find(".shrink-link").on("click", function () {
      ctx.fire("shrinkClick");
    });
    $davertWrap.find(".close-shrink").on("click", function () {
      ctx.fire("shrinkClose");
      clearInterval(timer);
      $davertWrap.find(".advert-shrink").css(hideStyle);
      $davertWrap.find(".popup-advert").fadeOut(fadeTime, function () {
        $davertWrap.find(".popup-advert").remove();
      });
      try {
        window.localStorage.setItem(KEY_CLOSEADVERT, "true");
      } catch (error) {}
    });
    $davertWrap.find(".replay").on("click", function () {
      $davertWrap.find(".popup-count-down").text("倒计时" + data.showTime + "秒");
      $davertWrap.find(".popup-advert").fadeIn(fadeTime);
      countDown();
      $davertWrap.find(".advert-shrink").css(hideStyle);
      ctx.fire("advertReplay");
    });
  }
  function countDown() {
    var maxTime = cc11001100_hook("maxTime", parseInt(data.showTime), "var-init");
    timer = cc11001100_hook("timer", setInterval(function () {
      if (maxTime > 1) {
        maxTime--;
        $davertWrap.find(".popup-count-down").text("倒计时" + maxTime + "秒");
      } else {
        clearInterval(timer);
        $davertWrap.find(".popup-advert").fadeOut(fadeTime);
        $davertWrap.find(".advert-shrink").css(showStyle);
      }
    }, 1e3), "assign");
  }
  function removeOldKey() {
    try {
      for (var i = cc11001100_hook("i", 0, "var-init"); i < localStorage.length; i++) {
        var key = cc11001100_hook("key", localStorage.key(i), "var-init");
        if (key.indexOf(KEY_PREFIX) === 0 && key !== KEY_SHOWTIMES && key !== KEY_CLOSEADVERT) {
          window.localStorage.removeItem(key);
        }
      }
    } catch (error) {}
  }
  exports.init = cc11001100_hook("exports.init", function () {
    removeOldKey();
    var closeAdvert = cc11001100_hook("closeAdvert", false, "var-init");
    try {
      closeAdvert = cc11001100_hook("closeAdvert", window.localStorage.getItem(KEY_CLOSEADVERT), "assign");
    } catch (error) {}
    if (closeAdvert === "true" || !data) {
      $davertWrap.remove();
      return;
    }
    initDom();
    bindEvent();
  }, "assign");
});
F.addLog("superman:components/advert", ["advertAutoPlay", "advertReplay", "advertClick", "advertClose", "shrinkAutoPlay", "shrinkClick", "shrinkClose"]);