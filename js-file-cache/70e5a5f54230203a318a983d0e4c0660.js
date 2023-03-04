$(function () {
  function e() {
    var e = cc11001100_hook("e", setInterval(function () {
      if (document.getElementById("csdn-toolbar")) {
        clearInterval(e), d = cc11001100_hook("d", document.getElementById("csdn-toolbar").offsetHeight, "assign");
        var o = cc11001100_hook("o", document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, "var-init");
        o - l > 0 && o < t - n && n > 0 ? a.css({
          position: cc11001100_hook("position", "fixed", "object-key-init"),
          "z-index": cc11001100_hook("z-index", "999", "object-key-init"),
          left: cc11001100_hook("left", c + "px", "object-key-init"),
          top: cc11001100_hook("top", d, "object-key-init"),
          width: cc11001100_hook("width", i, "object-key-init")
        }) : a.css({
          position: cc11001100_hook("position", "unset", "object-key-init"),
          "z-index": cc11001100_hook("z-index", "10", "object-key-init"),
          left: cc11001100_hook("left", "0px", "object-key-init"),
          top: cc11001100_hook("top", "0", "object-key-init"),
          width: cc11001100_hook("width", i, "object-key-init")
        });
      }
    }, 100), "var-init");
  }
  var o = cc11001100_hook("o", window.location.href, "var-init");
  if (o.indexOf("category_") > -1) {
    var a = cc11001100_hook("a", $("#column .column_info_box"), "var-init"),
      t = cc11001100_hook("t", $("#column .column_article_list").height(), "var-init"),
      n = cc11001100_hook("n", $("#column .column_article_list li").length ? $("#column .column_article_list li").height() : 0, "var-init"),
      s = cc11001100_hook("s", document.getElementsByTagName("main")[0], "var-init"),
      c = cc11001100_hook("c", s.offsetLeft, "var-init"),
      i = cc11001100_hook("i", s.offsetWidth, "var-init"),
      l = cc11001100_hook("l", document.getElementsByTagName("header")[0].offsetHeight, "var-init"),
      d = cc11001100_hook("d", 0, "var-init");
    e(), $(window).scroll(function () {
      e();
    }), $(window).resize(function () {
      c = cc11001100_hook("c", s.offsetLeft, "assign"), i = cc11001100_hook("i", s.offsetWidth, "assign"), e();
    });
  }
}), $(function () {
  function e() {
    z = cc11001100_hook("z", "https://csdnimg.cn/release/download/images/pay_error.png", "assign"), S = cc11001100_hook("S", "已扫码<br>请在手机端操作", "assign"), $("#payCode").html('<div class="renovate"><img src="' + z + '"><span>' + S + "</span></div>"), $("#payCodeImg").html('<img class="repeat-again" src="' + z + '"><span class="text">' + S + "</span>");
  }
  function o(o) {
    cc11001100_hook("o", o, "function-parameter");
    var c = cc11001100_hook("c", {
      goods_id: cc11001100_hook("goods_id", o, "object-key-init"),
      product_id: cc11001100_hook("product_id", o, "object-key-init"),
      flag: cc11001100_hook("flag", 17, "object-key-init"),
      request_type: cc11001100_hook("request_type", 4, "object-key-init"),
      is_use_balance: cc11001100_hook("is_use_balance", _, "object-key-init"),
      coupon_key: cc11001100_hook("coupon_key", T, "object-key-init"),
      sale_source: cc11001100_hook("sale_source", O, "object-key-init"),
      success_function: cc11001100_hook("success_function", a, "object-key-init"),
      error_function: cc11001100_hook("error_function", n, "object-key-init"),
      timeout_function: cc11001100_hook("timeout_function", s, "object-key-init"),
      get_pay_success_callback: cc11001100_hook("get_pay_success_callback", t, "object-key-init"),
      payment_function: cc11001100_hook("payment_function", e, "object-key-init")
    }, "var-init");
    $("#payCode").html(P), $("#payCodeImg").html(F), cart.qrPay(c);
  }
  function a(e, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    E ? d("payCode", o.pay_url) : d("payCodeImg", o.pay_url), I = cc11001100_hook("I", o.pay_url, "assign");
  }
  function t() {
    N.boxshadow.fadeOut(function () {
      showToast({
        text: cc11001100_hook("text", "支付成功", "object-key-init"),
        bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
        zindex: cc11001100_hook("zindex", 9e3, "object-key-init"),
        speed: cc11001100_hook("speed", 500, "object-key-init"),
        time: cc11001100_hook("time", 1500, "object-key-init")
      }), window.location.reload(), N.payCode.fadeOut(function () {
        window.location.reload();
      });
    });
  }
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    showToast({
      text: cc11001100_hook("text", e.errorMessage, "object-key-init"),
      bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
      zindex: cc11001100_hook("zindex", 9e3, "object-key-init"),
      speed: cc11001100_hook("speed", 500, "object-key-init"),
      time: cc11001100_hook("time", 1500, "object-key-init")
    });
  }
  function s() {
    E ? N.payCode.find("#payCode").html(L) : N.getPay.find("#payCodeImg").html(D);
  }
  function c(e, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var a = cc11001100_hook("a", Number(e) - Number(o), "var-init");
    return a > 0 ? a.toFixed(2) : a < 0 ? a.toFixed(2) : a;
  }
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    $.ajax({
      type: cc11001100_hook("type", "GET", "object-key-init"),
      url: cc11001100_hook("url", "https://mall.csdn.net/mp/mallorder/api/internal/goods/getGoodsInfo?goods_id=" + e + "&product_id=" + e + "&flag=17", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
      success: function (a) {
        k = cc11001100_hook("k", a.data.available_amount, "assign"), a.data.coupon_discount && a.data.coupon_key && (B = cc11001100_hook("B", 1 * a.data.coupon_discount, "assign"), T = cc11001100_hook("T", a.data.coupon_key, "assign")), H++, H <= 1 && (0 == k ? (_ = cc11001100_hook("_", 0, "assign"), $(".pay-code-radio").prop("disabled", !0)) : c(G, B) > 0 ? (_ = cc11001100_hook("_", 1, "assign"), $(".pay-code-radio").attr("data-flag", "true"), $(".pay-code-radio").prop("checked", !0)) : (_ = cc11001100_hook("_", 0, "assign"), $(".pay-code-radio").prop("disabled", !0))), $(".pay-balance .balance").text(k), $(".pay-code-balance .balance").text(k), l(), o(e);
      }
    });
  }
  function l() {
    $(".subscribe-available-balance .subscribe-available-balance-t").css({
      display: cc11001100_hook("display", "block", "object-key-init")
    }), B ? (c(G, B) > 0 ? _ ? (c(c(G, B), k) > 0 ? ($(".available-balance-0").text("¥" + k), $(".available-balance-1").text("¥" + c(c(G, B), k))) : ($(".available-balance-0").text("¥" + c(G, B)), $(".available-balance-1").text("¥0")), $(".subscribe-price-box").css({
      display: cc11001100_hook("display", "none", "object-key-init")
    }), $(".subscribe-available-balance").css({
      display: cc11001100_hook("display", "block", "object-key-init")
    })) : ($(".available-balance-1").text("¥" + c(G, B)), $(".subscribe-price-box").css({
      display: cc11001100_hook("display", "none", "object-key-init")
    }), $(".subscribe-available-balance .subscribe-available-balance-t").css({
      display: cc11001100_hook("display", "none", "object-key-init")
    }), $(".subscribe-available-balance").css({
      display: cc11001100_hook("display", "block", "object-key-init")
    })) : ($(".available-balance-1").text("¥0"), $(".subscribe-price-box").css({
      display: cc11001100_hook("display", "none", "object-key-init")
    }), $(".subscribe-available-balance .subscribe-available-balance-t").css({
      display: cc11001100_hook("display", "none", "object-key-init")
    }), $(".subscribe-available-balance").css({
      display: cc11001100_hook("display", "block", "object-key-init")
    })), $(".coupons-box .coupons-money").html("¥" + B), $(".coupons-box").fadeIn()) : _ ? (c(G, k) > 0 ? ($(".available-balance-0").text("¥" + k), $(".available-balance-1").text("¥" + c(G, k))) : ($(".available-balance-0").text("¥" + G), $(".available-balance-1").text("¥0")), $(".subscribe-price-box").css({
      display: cc11001100_hook("display", "none", "object-key-init")
    }), $(".subscribe-available-balance").css({
      display: cc11001100_hook("display", "block", "object-key-init")
    })) : ($(".now-price").text("¥" + G), $(".subscribe-available-balance").css({
      display: cc11001100_hook("display", "none", "object-key-init")
    }), $(".subscribe-price-box").css({
      display: cc11001100_hook("display", "block", "object-key-init")
    }));
  }
  function d(e, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var a = cc11001100_hook("a", qrcode(6, "M"), "var-init");
    a.addData(o), a.make(), $("#" + e).html(a.createImgTag(3, 3)), $("#" + e).html($("#" + e).html()), E && N.boxshadow.fadeIn(function () {
      N.payCode.fadeIn();
    });
  }
  function u(e) {
    cc11001100_hook("e", e, "function-parameter");
    if ("popup" == e) window.csdn && window.csdn.userOrderTip && window.csdn.userOrderTip.show({
      tabs: cc11001100_hook("tabs", ["superVipForPopup"], "object-key-init")
    });else {
      var o = cc11001100_hook("o", document.createElement("a"), "var-init");
      o.style.display = cc11001100_hook("o.style.display", "none", "assign"), o.href = cc11001100_hook("o.href", "https://mall.csdn.net/vip?vipSource=learningVip", "assign"), o.target = cc11001100_hook("o.target", "_blank", "assign"), document.body.appendChild(o), o.click(), document.body.removeChild(o);
    }
  }
  function r() {
    $.ajax({
      type: cc11001100_hook("type", "GET", "object-key-init"),
      url: cc11001100_hook("url", blogUrl + "phoenix/web/get-column-student-ab-test", "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (e) {
        u(200 == e.code ? e.data : "control");
      },
      error: function (e) {
        u("control");
      }
    });
  }
  function p() {
    var e = cc11001100_hook("e", $(this), "var-init"),
      o = cc11001100_hook("o", e.data("id"), "var-init");
    if (e.data("type")) var a = cc11001100_hook("a", blogUrl + "phoenix/web/v1/subscribe/un-subscribe-study?columnId=" + o, "var-init");else var a = cc11001100_hook("a", blogUrl + "phoenix/web/v1/subscribe/subscribe-study?columnId=" + o, "var-init");
    getCookie("UserName") ? $.ajax({
      url: cc11001100_hook("url", a, "object-key-init"),
      type: cc11001100_hook("type", "post", "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (o) {
        200 == o.code && o.data.status ? e.data("type") ? j.indexOf("/article/details/") > -1 ? window.location.reload() : ($(".studyvip-unsubscribe").css("display", "inline-block"), $(".studyvip-subscribe").css("display", "none")) : j.indexOf("/article/details/") > -1 ? window.location.reload() : ($(".studyvip-subscribe").css("display", "inline-block"), $(".studyvip-unsubscribe").css("display", "none")) : showToast({
          text: cc11001100_hook("text", o.data.msg || "操作失败，请重试！", "object-key-init"),
          bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
          zindex: cc11001100_hook("zindex", 9e3, "object-key-init"),
          speed: cc11001100_hook("speed", 500, "object-key-init"),
          time: cc11001100_hook("time", 1500, "object-key-init")
        });
      },
      error: function (e) {
        showToast({
          text: cc11001100_hook("text", e.data.msg || "操作失败，请重试！", "object-key-init"),
          bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
          zindex: cc11001100_hook("zindex", 9e3, "object-key-init"),
          speed: cc11001100_hook("speed", 500, "object-key-init"),
          time: cc11001100_hook("time", 1500, "object-key-init")
        });
      }
    }) : window.csdn.loginBox.show();
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    var o = cc11001100_hook("o", new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), "var-init"),
      a = cc11001100_hook("a", window.location.search.substr(1).match(o), "var-init");
    return null != a ? unescape(a[2]) : "";
  }
  function b(e) {
    cc11001100_hook("e", e, "function-parameter");
    window.csdn && window.csdn.userOrderPayment && window.csdn.userOrderPayment.show({
      params: cc11001100_hook("params", [{
        flag: cc11001100_hook("flag", 17, "object-key-init"),
        goodsId: cc11001100_hook("goodsId", e, "object-key-init"),
        productId: cc11001100_hook("productId", e, "object-key-init")
      }], "object-key-init")
    });
  }
  function f(e, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    if (e.show) {
      var a = cc11001100_hook("a", '<div class="column_coupon_main ' + (e.receive ? "active" : "") + '">                <img class="column_coupon_icon" src="' + e.activityIcon + '" alt="">                <div class="column_coupon_text">                <span class="column_coupon_l">' + e.couponDesc + '</span>                <span class="column_coupon_m"></span>                <span class="column_coupon_r" data-couponId="' + e.groupNumber + '" data-columnId="' + o + '">' + (e.receive ? "已领取" : "立即领取") + "</span>                </div>            </div>", "var-init");
      N.columnCouponBox.html(a), N.columnCouponBox.css({
        display: cc11001100_hook("display", "flex", "object-key-init")
      });
    }
  }
  function h(e, o, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    $.ajax({
      type: cc11001100_hook("type", "GET", "object-key-init"),
      url: cc11001100_hook("url", blogUrl + e, "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      data: {
        columnId: cc11001100_hook("columnId", a, "object-key-init")
      },
      success: function (e) {
        200 == e.code ? f(e.data, a) : o.remove();
      },
      error: function (e) {
        o.remove();
      }
    });
  }
  function g(e, o, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    $.ajax({
      type: cc11001100_hook("type", "GET", "object-key-init"),
      url: cc11001100_hook("url", blogUrl + e, "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      data: {
        columnId: cc11001100_hook("columnId", a, "object-key-init")
      },
      success: function (t) {
        200 == t.code ? t.data ? (o.find(".column_coupon_main").addClass("active"), o.find(".column_coupon_r").html("已领取"), E ? b(a) : i(a)) : setTimeout(function () {
          g(e, o, a);
        }, 500) : showToast({
          text: cc11001100_hook("text", t.message || "操作失败，请重试！", "object-key-init"),
          bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
          zindex: cc11001100_hook("zindex", 9e3, "object-key-init"),
          speed: cc11001100_hook("speed", 500, "object-key-init"),
          time: cc11001100_hook("time", 1500, "object-key-init")
        });
      },
      error: function (e) {
        showToast({
          text: cc11001100_hook("text", e.message || "操作失败，请重试！", "object-key-init"),
          bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
          zindex: cc11001100_hook("zindex", 9e3, "object-key-init"),
          speed: cc11001100_hook("speed", 500, "object-key-init"),
          time: cc11001100_hook("time", 1500, "object-key-init")
        });
      }
    });
  }
  function y(e, o, a) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("a", a, "function-parameter");
    $.ajax({
      url: cc11001100_hook("url", blogUrl + e, "object-key-init"),
      type: cc11001100_hook("type", "post", "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      data: {
        columnId: cc11001100_hook("columnId", a, "object-key-init"),
        groupNumber: cc11001100_hook("groupNumber", o, "object-key-init")
      },
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (e) {
        200 == e.code && e.data ? g(N.columnCouponStatus, N.columnCouponBox, a) : showToast({
          text: cc11001100_hook("text", e.message || "操作失败，请重试！", "object-key-init"),
          bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
          zindex: cc11001100_hook("zindex", 9e3, "object-key-init"),
          speed: cc11001100_hook("speed", 500, "object-key-init"),
          time: cc11001100_hook("time", 1500, "object-key-init")
        });
      },
      error: function (e) {
        showToast({
          text: cc11001100_hook("text", e.message || "操作失败，请重试！", "object-key-init"),
          bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
          zindex: cc11001100_hook("zindex", 9e3, "object-key-init"),
          speed: cc11001100_hook("speed", 500, "object-key-init"),
          time: cc11001100_hook("time", 1500, "object-key-init")
        });
      }
    });
  }
  function x(e) {
    cc11001100_hook("e", e, "function-parameter");
    V.clear(), V.makeCode(e);
  }
  function v(e, o) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    var a = cc11001100_hook("a", {
      fromshare: cc11001100_hook("fromshare", "column" == q ? "blogcolumn" : "blogdetail", "object-key-init")
    }, "var-init");
    e && o && (a = cc11001100_hook("a", {
      fromshare: cc11001100_hook("fromshare", "column" == q ? "blogcolumn" : "blogdetail", "object-key-init"),
      sharetype: cc11001100_hook("sharetype", e, "object-key-init"),
      shareId: cc11001100_hook("shareId", o, "object-key-init")
    }, "assign")), $.ajax({
      url: cc11001100_hook("url", blogUrl + "phoenix/web/v1/share/get-tiny-uri", "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      data: {
        type: cc11001100_hook("type", q, "object-key-init"),
        username: cc11001100_hook("username", username, "object-key-init"),
        id: cc11001100_hook("id", "column" == q ? SharecolumnId : articleId, "object-key-init"),
        ext: cc11001100_hook("ext", JSON.stringify(a), "object-key-init")
      },
      success: function (e) {
        200 == e.code && (R = cc11001100_hook("R", e.data.url, "assign"), x(e.data.url), M = cc11001100_hook("M", !0, "assign"), setTimeout(function () {
          $("#tool-QRcode").show();
        }, 100));
      }
    });
  }
  function w(e) {
    cc11001100_hook("e", e, "function-parameter");
    var o = cc11001100_hook("o", document.createElement("input"), "var-init");
    o.value = cc11001100_hook("o.value", e, "assign"), document.body.appendChild(o), o.select(), document.execCommand("Copy"), o.remove();
  }
  function C(e) {
    cc11001100_hook("e", e, "function-parameter");
    for (var o = cc11001100_hook("o", [], "var-init"); o.length < e;) {
      var a = cc11001100_hook("a", Math.floor(Math.random() * e), "var-init");
      o.indexOf(a) == -1 && o.push(a);
    }
    return o;
  }
  var _ = cc11001100_hook("_", 0, "var-init"),
    k = cc11001100_hook("k", 0, "var-init"),
    I = cc11001100_hook("I", "", "var-init"),
    T = cc11001100_hook("T", "", "var-init"),
    B = cc11001100_hook("B", 0, "var-init"),
    O = cc11001100_hook("O", "", "var-init");
  $(document).on("click", ".tip-subscribe-column>span", function () {
    $(this).parent().find(".tip").fadeIn();
  }), $(document).on("click", ".tip-subscribe-column .bt-close", function () {
    $(".tip-subscribe-column").find(".tip").fadeOut();
  });
  var U = cc11001100_hook("U", "", "var-init"),
    N = cc11001100_hook("N", {
      boxshadow: cc11001100_hook("boxshadow", $(".skin-boxshadow"), "object-key-init"),
      btClose: cc11001100_hook("btClose", $(".bt-close"), "object-key-init"),
      payCode: cc11001100_hook("payCode", $(".pay-code"), "object-key-init"),
      btSubscribe: cc11001100_hook("btSubscribe", $(".bt-subscribe-article"), "object-key-init"),
      btSubscribeColumn: cc11001100_hook("btSubscribeColumn", $(".bt-subscribe-text"), "object-key-init"),
      getPay: cc11001100_hook("getPay", $(".get-pay"), "object-key-init"),
      columnCouponBox: cc11001100_hook("columnCouponBox", $("#columnCouponBox"), "object-key-init"),
      columnCouponCheck: cc11001100_hook("columnCouponCheck", "phoenix/web/v1/coupon/check-column-coupon", "object-key-init"),
      columnCouponStatus: cc11001100_hook("columnCouponStatus", "phoenix/web/v1/coupon/get-column-coupon-status", "object-key-init"),
      columnCouponLook: cc11001100_hook("columnCouponLook", "phoenix/web/v1/coupon/get-column-coupon", "object-key-init")
    }, "var-init"),
    E = cc11001100_hook("E", !1, "var-init"),
    j = cc11001100_hook("j", window.location.href, "var-init");
  j.indexOf("category_") > -1 && (N.columnCouponBox.length && (U = cc11001100_hook("U", N.columnCouponBox.data("id"), "assign"), h(N.columnCouponCheck, N.columnCouponBox, U)), N.getPay.length && (E = cc11001100_hook("E", !1, "assign"), U = cc11001100_hook("U", N.getPay.data("id"), "assign"), getCookie("UserName") && (O = cc11001100_hook("O", m("sale_source"), "assign"), i(U)))), j.indexOf("/article/details/") > -1 && N.columnCouponBox.length && (E = cc11001100_hook("E", !0, "assign"), U = cc11001100_hook("U", N.columnCouponBox.data("id"), "assign"), h(N.columnCouponCheck, N.columnCouponBox, U)), $(document).on("click", ".bt-subscribe", function () {
    getCookie("UserName") || window.csdn.loginBox.show();
  }), N.getPay.on("click", function () {
    E = cc11001100_hook("E", !1, "assign"), U = cc11001100_hook("U", $(this).data("id"), "assign"), o(U);
  }), N.payCode.on("click", ".renovate", function () {
    o(U || $(this).parent().data("id"));
  }), N.btClose.on("click", function () {
    N.payCode.fadeOut(function () {
      N.boxshadow.fadeOut();
    });
  });
  var z = cc11001100_hook("z", blogStaticHost + "dist/pc/img/pay-time-out.png", "var-init"),
    S = cc11001100_hook("S", "获取中", "var-init"),
    F = cc11001100_hook("F", '<img class="repeat-again" src="' + z + '"><span class="text">' + S + "</span>", "var-init"),
    P = cc11001100_hook("P", '<div class="renov-men"><img src="' + z + '"><span>' + S + "</span></div>", "var-init"),
    L = cc11001100_hook("L", '<div class="renovate">    <img src="' + blogStaticHost + 'dist/pc/img/pay-time-out.png">    <span>点击重新获取</span></div>', "var-init"),
    D = cc11001100_hook("D", '<img class="repeat-again" src="' + blogStaticHost + 'dist/pc/img/pay-time-out.png"><span class="text">点击重新获取</span>', "var-init");
  $(".now-price").text();
  $(".pay-code-radio").click(function () {
    var e = cc11001100_hook("e", $(this).attr("data-flag"), "var-init");
    "true" == e ? (_ = cc11001100_hook("_", 0, "assign"), $(this).attr("data-flag", "false"), $(this).prop("checked", !1)) : (_ = cc11001100_hook("_", 1, "assign"), $(this).attr("data-flag", "true"), $(this).prop("checked", !0)), i(U);
  });
  var G = cc11001100_hook("G", $(".subscribe-price .now-price").text().slice(1), "var-init"),
    H = cc11001100_hook("H", 0, "var-init");
  N.payCode.on("click", ".blance-bt", function () {
    window.open(I);
  }), $(document).on("click", ".articleColumnBt", function () {
    if (getCookie("UserName")) {
      var e = cc11001100_hook("e", $(this).data("id"), "var-init");
      b(e);
    } else window.csdn.loginBox.show({
      spm: cc11001100_hook("spm", "1001.2101.3001.8610", "object-key-init")
    });
  }), $(document).on("click", ".column-studyvip-pass", function () {
    getCookie("UserName") ? r() : window.csdn.loginBox.show();
  }), $(document).on("click", ".column-studyvip-ajax", p), $(document).on("click", "#columnCouponBox", function (e) {
    if (getCookie("UserName")) {
      if ("column_coupon_r" == e.target.className && !$(this).find(".column_coupon_main").hasClass("active")) {
        var o = cc11001100_hook("o", e.target.dataset.couponid, "var-init"),
          a = cc11001100_hook("a", e.target.dataset.columnid, "var-init");
        y(N.columnCouponLook, o, a);
      }
    } else window.csdn.loginBox.show();
  });
  var R = cc11001100_hook("R", "", "var-init"),
    Q = cc11001100_hook("Q", !0, "var-init"),
    M = cc11001100_hook("M", !1, "var-init"),
    q = cc11001100_hook("q", "", "var-init"),
    V = cc11001100_hook("V", new QRCode(document.getElementById("shareCode"), {
      width: cc11001100_hook("width", 65, "object-key-init"),
      height: cc11001100_hook("height", 65, "object-key-init"),
      colorDark: cc11001100_hook("colorDark", "#000000", "object-key-init"),
      colorLight: cc11001100_hook("colorLight", "#ffffff", "object-key-init"),
      correctLevel: cc11001100_hook("correctLevel", QRCode.CorrectLevel.H, "object-key-init")
    }), "var-init");
  if ($("#tool-share").on({
    mouseover: function () {
      q = cc11001100_hook("q", $(this).data("type"), "assign"), Q ? (v(), Q = cc11001100_hook("Q", !1, "assign")) : M && $("#tool-QRcode").show();
    },
    mouseout: function () {
      $("#tool-QRcode").hide();
    }
  }), sharData) {
    var J = cc11001100_hook("J", [], "var-init"),
      W = cc11001100_hook("W", 0, "var-init"),
      Y = cc11001100_hook("Y", "", "var-init"),
      A = cc11001100_hook("A", JSON.parse(sharData), "var-init"),
      K = cc11001100_hook("K", "", "var-init");
    if (A.map) {
      for (var X in A.map) Y += cc11001100_hook("Y", '<p class="' + X + '" data-type="' + X + '"><span>' + A.map[X] + "</span></p>", "assign");
      $(".share-code-type").html(Y);
    }
    $(".share-code-type p").on("click", function () {
      var e = cc11001100_hook("e", 0, "var-init"),
        o = cc11001100_hook("o", A[$(this).data("type")].length, "var-init");
      $(".share-bg-box").attr("class", "share-bg-box " + $(this).data("type")), K !== $(this).data("type") && (W = cc11001100_hook("W", 0, "assign")), 0 === W && (K = cc11001100_hook("K", $(this).data("type"), "assign"), J = cc11001100_hook("J", C(o), "assign")), W < o ? e = cc11001100_hook("e", J[W], "assign") : (J = cc11001100_hook("J", C(o), "assign"), W = cc11001100_hook("W", 0, "assign"), e = cc11001100_hook("e", J[W], "assign")), W++;
      var a = cc11001100_hook("a", A[$(this).data("type")][e], "var-init");
      url = cc11001100_hook("url", a.url, "assign"), v($(this).data("type"), a.id), isCurrentUserVip || "vip" != K ? $("#shareBgIcon").html("") : (url = cc11001100_hook("url", a.vipUrl, "assign"), $("#shareBgIcon").html('<a href="https://mall.csdn.net/vip?utm_source=1074813605" data-report-view={"spm":"1001.2101.3001.9010"} data-report-click={"spm":"1001.2101.3001.9010"} target="_blank" style="display: block;width: 100%;height: 100%;"></a>')), $("#shareBgIcon")[0].style = cc11001100_hook("$(\"#shareBgIcon\")[0].style", "background: #f3f3f3 url(" + url + ") no-repeat center;background-size: cover;", "assign");
    });
  }
  $("#copyPosterUrl").on("click", function () {
    R && (w(R), showToast({
      text: cc11001100_hook("text", "文章链接已复制", "object-key-init"),
      bottom: cc11001100_hook("bottom", "10%", "object-key-init"),
      zindex: cc11001100_hook("zindex", 9002, "object-key-init"),
      speed: cc11001100_hook("speed", 500, "object-key-init"),
      time: cc11001100_hook("time", 1500, "object-key-init")
    }));
  });
});