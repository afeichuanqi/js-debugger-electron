F.module("superman:components/qrcode", function (require, exports, ctx) {
  var login1;
  var $qrcodeWrapper = cc11001100_hook("$qrcodeWrapper", $("#s_qrcode_nologin"), "var-init");
  var $qrTooltip = cc11001100_hook("$qrTooltip", $(".qrcode-tooltip"), "var-init");
  var called = cc11001100_hook("called", false, "var-init");
  function loadScript(cb) {
    cc11001100_hook("cb", cb, "function-parameter");
    $.getScript(location.protocol + "//passport.baidu.com/passApi/js/wrapper.js?cdnversion=" + new Date().getTime(), function () {
      cb && cb();
    });
  }
  function hoverHandler() {
    if (called) {
      $qrTooltip.hide();
      called = cc11001100_hook("called", false, "assign");
      return;
    }
    ctx.fire("qrcodehover");
    called = cc11001100_hook("called", true, "assign");
    $qrTooltip.show();
    if ($(".qrcode-tooltip").children().length > 2) {
      return;
    }
    loadScript(function () {
      passport.use("login", {
        tangram: cc11001100_hook("tangram", true, "object-key-init"),
        loginVersion: cc11001100_hook("loginVersion", "v5", "object-key-init"),
        defaultCss: cc11001100_hook("defaultCss", true, "object-key-init")
      }, function (magic) {
        login1 = cc11001100_hook("login1", new magic.passport.login({
          product: cc11001100_hook("product", "mn", "object-key-init"),
          loginType: cc11001100_hook("loginType", 1, "object-key-init"),
          qrcodeLogin: cc11001100_hook("qrcodeLogin", 1, "object-key-init"),
          hasRegUrl: cc11001100_hook("hasRegUrl", false, "object-key-init"),
          autosuggest: cc11001100_hook("autosuggest", false, "object-key-init"),
          hasPlaceholder: cc11001100_hook("hasPlaceholder", false, "object-key-init"),
          u: cc11001100_hook("u", window.document.location.href, "object-key-init"),
          staticPage: cc11001100_hook("staticPage", window.location.protocol + "//www.baidu.com/cache/user/html/v3Jump.html", "object-key-init")
        }), "assign");
        window.mmm = cc11001100_hook("window.mmm", login1, "assign");
        login1.on("loginSuccess", function (evt) {
          evt.returnValue = cc11001100_hook("evt.returnValue", false, "assign");
          ctx.fire("qrcodeloginsuccess");
          setTimeout(function () {
            window.document.location.href = cc11001100_hook("window.document.location.href", window.document.location.href, "assign");
          }, 500);
        });
        login1.on("render", function () {
          var success = cc11001100_hook("success", $qrTooltip.find(".Qrcode-status-success > p.Qrcode-status-msg"), "var-init");
          var refresh = cc11001100_hook("refresh", $qrTooltip.find(".Qrcode-status-refresh > p.refresh-timeout"), "var-init");
          var refreshIcon = cc11001100_hook("refreshIcon", $qrTooltip.find(".Qrcode-status-refresh > p.Qrcode-status-icon"), "var-init");
          var error = cc11001100_hook("error", $qrTooltip.find(".Qrcode-status-error > p.Qrcode-status-icon+p"), "var-init");
          var errorIcon = cc11001100_hook("errorIcon", $qrTooltip.find(".Qrcode-status-error > p.Qrcode-status-icon"), "var-init");
          $(refreshIcon).addClass("c-icon").html("&#xe622;");
          $(errorIcon).addClass("c-icon").html("&#xe622;");
          var text = cc11001100_hook("text", $qrTooltip.find(".Qrcode-status-success > p.Qrcode-status-icon+p"), "var-init");
          $(success).hide();
          text.innerText = cc11001100_hook("text.innerText", "扫码成功", "assign");
          refresh.innerText = cc11001100_hook("refresh.innerText", "二维码失效", "assign");
          error.innerText = cc11001100_hook("error.innerText", "加载失败", "assign");
          $(".refresh-loadout").text("加载失败").css({
            color: cc11001100_hook("color", "#9195a3", "object-key-init")
          });
        });
        login1.render("qrcode-login-wrapper");
      });
    });
  }
  exports.init = cc11001100_hook("exports.init", function () {
    $qrcodeWrapper.hover(hoverHandler);
    loadScript();
  }, "assign");
});
F.addLog("superman:components/qrcode", ["qrcodehover"]);
F.addLog("superman:components/qrcode", ["qrcodeloginsuccess"]);