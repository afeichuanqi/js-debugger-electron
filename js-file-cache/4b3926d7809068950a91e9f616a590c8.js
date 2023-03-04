"use strict";

!function (o, e, s) {
  function n() {
    for (var o = cc11001100_hook("o", {}, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < arguments.length; e++) s.extend(!0, o, arguments[e]);
    return o;
  }
  function t(o) {
    cc11001100_hook("o", o, "function-parameter");
    var s = cc11001100_hook("s", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500, "var-init"),
      n = cc11001100_hook("n", e.createElement("div"), "var-init");
    n.innerHTML = cc11001100_hook("n.innerHTML", o, "assign"), n.style.cssText = cc11001100_hook("n.style.cssText", "min-width:124px;padding:0 8px;opacity: 0.8;height: 40px;background:rgba(34,34,38,1);color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 35%;left:50%;transform: translateX(-50%);z-index: 999999;font-size: 16px;", "assign"), e.getElementById("order-payment").appendChild(n), setTimeout(function () {
      n.style.webkitTransition = cc11001100_hook("n.style.webkitTransition", "-webkit-transform 0.5s ease-in, opacity 0.5s ease-in", "assign"), n.style.opacity = cc11001100_hook("n.style.opacity", "0", "assign"), setTimeout(function () {
        e.getElementById("order-payment") && e.getElementById("order-payment").removeChild(n);
      }, 500);
    }, s);
  }
  function a() {
    var o = cc11001100_hook("o", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500, "var-init"),
      e = cc11001100_hook("e", '\n      <div class="loading_warp" id="order-payment-loading">\n        <div class="icon_box">\n          <img class="rotating" src="' + f + '/icon-paying.png"/>\n        </div>\n        <div class="pay_msg">查询中...</div>\n      </div>\n    ', "var-init");
    s(".orderpayment_dialog").append(e).find(".orderpayment_content").addClass("noScroll"), setTimeout(function () {
      s("#order-payment-loading").remove(), s(".orderpayment_dialog .orderpayment_content").removeClass("noScroll");
    }, o);
  }
  function i() {
    var o = cc11001100_hook("o", r("api_env") || "", "var-init"),
      e = cc11001100_hook("e", "https://mall.csdn.net/", "var-init"),
      s = cc11001100_hook("s", /^beta|test|loc[a-z]*/, "var-init");
    return o.match(s) ? e = cc11001100_hook("e", "https://test-mall.csdn.net/", "assign") : o.match(/^pre-|pre[a-z]*/) && (e = cc11001100_hook("e", "https://pre-mall.csdn.net/", "assign")), e;
  }
  function r(o) {
    cc11001100_hook("o", o, "function-parameter");
    var e = cc11001100_hook("e", new RegExp("(^|&)" + o + "=([^&]*)(&|$)", "i"), "var-init"),
      s = cc11001100_hook("s", window.location.search.substr(1).match(e), "var-init");
    return null != s ? unescape(s[2]) : "";
  }
  function c(o, n) {
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    QRCode ? n.pay_url && (V.priceInfo = cc11001100_hook("V.priceInfo", n, "assign"), s("#ordertip_qr_code").html(""), s("#ordertip_notify").hide(), s("#pay_btn").attr("href", n.pay_url), new QRCode(e.getElementById("ordertip_qr_code"), {
      text: cc11001100_hook("text", n.pay_url, "object-key-init"),
      width: cc11001100_hook("width", 132, "object-key-init"),
      height: cc11001100_hook("height", 132, "object-key-init")
    })) : void 0;
  }
  function d() {
    u("pay_error", "获取失败,点击重试", "code_2");
  }
  function l() {
    u("pay_time_out", "点击重新获取", "");
  }
  function p() {
    u("pay_error", "已扫码<br>请在手机端操作", "");
  }
  function h(o) {
    cc11001100_hook("o", o, "function-parameter");
    V.show_config.needLoading && a(), setTimeout(function () {
      V.checkBalacneGoods ? (t("余额充值成功，使用余额支付完成购买吧", "1500"), s(".orderpayment_c_l_goodsitem").eq(0).trigger("click")) : (t("支付成功", "1000"), setTimeout(function () {
        w ? (V.close(), w(o)) : "reload" === V.show_config.successProcess ? window.location.reload() : "jump" === V.show_config.successProcess && (window.location.href = cc11001100_hook("window.location.href", _(o), "assign"));
      }, 1e3));
    }, V.show_config.needLoading ? 1500 : 0);
  }
  function _(o) {
    cc11001100_hook("o", o, "function-parameter");
    return "success" === o.errorMessage && o.jumpUrl && 1 === o.status ? o.jumpUrl : !o.need_third_pay && o.paySuccessUrl ? o.paySuccessUrl : "https://mall.csdn.net/myorder";
  }
  function u(o, e, n) {
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    s("#ordertip_notify").show().html('<img class="pay_icon" src="https://csdnimg.cn/release/download/images/' + o + '.png"/><span class="pay_tip">' + e + "</span>"), s("#ordertip_qr_code").html('<img src="https://csdnimg.cn/public/static/img/csdn-userimg250.gif" width="145" height="145"/>'), "pay_time_out" == o ? s("#ordertip_notify .pay_icon,#ordertip_notify .pay_tip").on("click", function () {
      V.getPayCode();
    }) : s("#ordertip_notify .pay_icon,#ordertip_notify .pay_tip").off("click");
  }
  function g() {
    this.checkBalacneGoods = cc11001100_hook("this.checkBalacneGoods", !1, "assign"), this.goodsInfo = cc11001100_hook("this.goodsInfo", {}, "assign"), this.goodsList = cc11001100_hook("this.goodsList", [], "assign"), this.balanceList = cc11001100_hook("this.balanceList", {}, "assign"), this.balanceGoodsInfo = cc11001100_hook("this.balanceGoodsInfo", {}, "assign"), this.activeGoodsId = cc11001100_hook("this.activeGoodsId", "", "assign"), this.voucherKeysList = cc11001100_hook("this.voucherKeysList", [], "assign"), this.voucherKeysObj = cc11001100_hook("this.voucherKeysObj", {}, "assign"), this.temporaryVoucherKeysList = cc11001100_hook("this.temporaryVoucherKeysList", [], "assign"), this.temporaryVoucherKeysObj = cc11001100_hook("this.temporaryVoucherKeysObj", {}, "assign"), this.isUseBalance = cc11001100_hook("this.isUseBalance", !0, "assign"), this.priceInfo = cc11001100_hook("this.priceInfo", {}, "assign"), this.errType = cc11001100_hook("this.errType", "", "assign"), this.reportExt = cc11001100_hook("this.reportExt", {}, "assign"), this.navList = cc11001100_hook("this.navList", [], "assign"), this.payMethods = cc11001100_hook("this.payMethods", [], "assign"), this.price = cc11001100_hook("this.price", 0, "assign"), this.payUrl = cc11001100_hook("this.payUrl", "", "assign"), this.params = cc11001100_hook("this.params", {}, "assign"), this._cart = cc11001100_hook("this._cart", null, "assign"), this.show_params = cc11001100_hook("this.show_params", {}, "assign"), this.show_in_goodsobj = cc11001100_hook("this.show_in_goodsobj", {}, "assign"), this.show_config = cc11001100_hook("this.show_config", {
      showHeads: cc11001100_hook("showHeads", !0, "object-key-init"),
      showBalance: cc11001100_hook("showBalance", !0, "object-key-init"),
      showGoods: cc11001100_hook("showGoods", !0, "object-key-init"),
      needLoading: cc11001100_hook("needLoading", !0, "object-key-init"),
      successProcess: cc11001100_hook("successProcess", "reload", "object-key-init")
    }, "assign"), this.transX = cc11001100_hook("this.transX", 0, "assign"), this.listBoxWidth = cc11001100_hook("this.listBoxWidth", 626, "assign"), this.listScrollWidth = cc11001100_hook("this.listScrollWidth", 0, "assign"), this.goodsTabWidth = cc11001100_hook("this.goodsTabWidth", 136, "assign"), b = cc11001100_hook("b", this, "assign");
  }
  function m(o) {
    cc11001100_hook("o", o, "function-parameter");
    I = cc11001100_hook("I", new Date().getTime(), "assign"), V = cc11001100_hook("V", new g(), "assign"), V.show(o), window._orderPayment = cc11001100_hook("window._orderPayment", V, "assign");
  }
  function y() {
    V.close();
  }
  var v = cc11001100_hook("v", "https://g.csdnimg.cn/order-payment/", "var-init"),
    f = cc11001100_hook("f", v + "4.0.1/images", "var-init"),
    b = cc11001100_hook("b", null, "var-init"),
    w = cc11001100_hook("w", null, "var-init"),
    x = cc11001100_hook("x", "default", "var-init"),
    I = cc11001100_hook("I", "", "var-init"),
    k = cc11001100_hook("k", !0, "var-init"),
    L = cc11001100_hook("L", {
      blog: cc11001100_hook("blog", "直接购买<br />无限次学习", "object-key-init"),
      download: cc11001100_hook("download", "直接购买<br />立即下载资料", "object-key-init"),
      default: cc11001100_hook("default", "放弃优惠<br />直接购买", "object-key-init")
    }, "var-init"),
    C = function (o) {
      var s = cc11001100_hook("s", e.cookie, "var-init");
      return s && function () {
        var e,
          n = cc11001100_hook("n", {}, "var-init");
        s = cc11001100_hook("s", s.split("; "), "assign");
        for (var t = cc11001100_hook("t", 0, "var-init"), a = cc11001100_hook("a", s.length, "var-init"); t < a && (e = cc11001100_hook("e", s[t].split("="), "assign"), !(e.length > 0 && (e[0] === o && (n.key = cc11001100_hook("n.key", e[0], "assign"), n.value = cc11001100_hook("n.value", e[1], "assign"), n.status = cc11001100_hook("n.status", !0, "assign")), "key" in n))); t++);
        return "key" in n && n;
      }();
    };
  !function () {
    var o = cc11001100_hook("o", window.location.host, "var-init");
    x = cc11001100_hook("x", -1 !== o.indexOf("blog.csdn.net") ? "blog" : -1 !== o.indexOf("download.csdn.net") ? "download" : "default", "assign");
  }(), function (o) {
    var s = cc11001100_hook("s", e.createElement("link"), "var-init");
    s.rel = cc11001100_hook("s.rel", "stylesheet", "assign"), s.type = cc11001100_hook("s.type", "text/css", "assign"), s.href = cc11001100_hook("s.href", o, "assign"), e.getElementsByTagName("head")[0].appendChild(s);
  }("https://g.csdnimg.cn/order-payment/4.0.1/order-payment.css"), g.prototype = cc11001100_hook("g.prototype", {
    constructor: cc11001100_hook("constructor", g, "object-key-init"),
    close: function () {
      this._cart.clearTimer(), s("#order-payment-box").remove();
    },
    show: function () {
      var o = cc11001100_hook("o", this, "var-init"),
        e = cc11001100_hook("e", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
      return window.csdn.cart ? window.csdn.cartClass ? (this.show_params = cc11001100_hook("this.show_params", e, "assign"), this.show_config = cc11001100_hook("this.show_config", Object.assign(this.show_config, e.config || {}), "assign"), "function" == typeof e.get_pay_success_callback && (w = cc11001100_hook("w", e.get_pay_success_callback, "assign")), e.params.forEach(function (e) {
        o.show_in_goodsobj[e.goodsId] = cc11001100_hook("o.show_in_goodsobj[e.goodsId]", e, "assign");
      }), this.sale = cc11001100_hook("this.sale", e.sale_source || r("sale_source"), "assign"), void this.init(e.params || {})) : void void 0 : void void 0;
    },
    init: function (o) {
      this._cart = cc11001100_hook("this._cart", new window.csdn.cartClass(), "assign"), this.reportExt = cc11001100_hook("this.reportExt", o.report_ext || {}, "assign"), this.getGoodsShowListByIds(o, function (o) {
        b.getGoodsInfo(o, function (e) {
          b.goodsInfo = cc11001100_hook("b.goodsInfo", n(o, e), "assign"), b.goodsCodeData(e.new_price, e.available_amount), b.show_config.showBalance && b.show_config.showGoods ? b.getGoodsShowList() : (b.activeGoodsId = cc11001100_hook("b.activeGoodsId", b.goodsInfo.goods_id, "assign"), b.checkBalacneGoods = cc11001100_hook("b.checkBalacneGoods", !1, "assign"), b.initDialog(), b.getPayCode());
        }, !1);
      });
    },
    bindEvents: function () {
      s(e).off("click", ".orderpayment_dialog .user_balance").on("click", ".orderpayment_dialog .user_balance", function () {
        if (s(".orderpayment_dialog .user_balance").hasClass("disable")) return void (b.isUseBalance = cc11001100_hook("b.isUseBalance", !1, "assign"));
        s(".orderpayment_dialog .user_balance").hasClass("active") ? (s(".orderpayment_dialog .user_balance").removeClass("active"), b.isUseBalance = cc11001100_hook("b.isUseBalance", !1, "assign")) : (s(".orderpayment_dialog .user_balance").addClass("active"), b.isUseBalance = cc11001100_hook("b.isUseBalance", !0, "assign")), b.goodsCodeData(b.goodsInfo.new_price, b.goodsInfo.available_amount, b.countVoucher()), b.changePriceHtml(b.price), b.getPayCode(b.goodsInfo);
      }), s(e).off("click", "#pay_btn").on("click", "#pay_btn", function (o) {
        var e = cc11001100_hook("e", C("UserName").value, "var-init");
        if (k) {
          k = cc11001100_hook("k", !1, "assign");
          var t = cc11001100_hook("t", n(b.show_in_goodsobj[b.goodsInfo.goods_id], {
            product_id: cc11001100_hook("product_id", b.goodsInfo.product_id, "object-key-init"),
            goods_id: cc11001100_hook("goods_id", b.goodsInfo.goods_id, "object-key-init"),
            flag: cc11001100_hook("flag", b.goodsInfo.flag, "object-key-init"),
            goodsSource: cc11001100_hook("goodsSource", b.goodsInfo.goodsSource || "", "object-key-init"),
            is_use_balance: cc11001100_hook("is_use_balance", 2, "object-key-init"),
            sale_source: cc11001100_hook("sale_source", b.sale, "object-key-init"),
            request_id: cc11001100_hook("request_id", e + "_" + I + "_" + b.goodsInfo.product_id + "_" + b.goodsInfo.goods_id + "_" + b.goodsInfo.flag, "object-key-init")
          }), "var-init");
          return void b._cart.quickBuy({
            params: cc11001100_hook("params", t, "object-key-init"),
            get_pay_success_callback: function (o) {
              k = cc11001100_hook("k", !0, "assign"), 200 == o.code && !1 === o.data.need_third_pay && h(o.data);
            },
            error_function: function (o) {
              k = cc11001100_hook("k", !0, "assign"), 400103012 == o.status && s(".orderpayment_item.active").trigger("click"), void 0;
            }
          });
        }
      }), s(e).off("click", ".order-payment #useVoucherBtn").on("click", ".order-payment #useVoucherBtn", function (o) {
        b.temporaryVoucherKeysObj = cc11001100_hook("b.temporaryVoucherKeysObj", JSON.parse(JSON.stringify(b.voucherKeysObj)), "assign"), b.temporaryVoucherKeysList = cc11001100_hook("b.temporaryVoucherKeysList", JSON.parse(JSON.stringify(b.voucherKeysList)), "assign"), s(".voucher_warp .v_w_desc").html(b.changeVoucherPriceHtml(!0)), s(".order-payment .voucher_warp").removeClass("none");
      }), s(e).off("click", ".order-payment .voucher_card").on("click", ".order-payment .voucher_card", function (o) {
        var e = cc11001100_hook("e", s(this).attr("data-key") || "", "var-init");
        b.temporaryVoucherKeysObj[e] = cc11001100_hook("b.temporaryVoucherKeysObj[e]", !s(this).hasClass("checked"), "assign"), b.temporaryVoucherKeysList = cc11001100_hook("b.temporaryVoucherKeysList", [], "assign"), s(this).toggleClass("checked");
        for (var n in b.temporaryVoucherKeysObj) b.temporaryVoucherKeysObj[n] && b.temporaryVoucherKeysList.push(n);
        s(".voucher_warp .v_w_desc").html(b.changeVoucherPriceHtml(!0));
      }), s(e).off("click", ".order-payment #sureUseVoucher").on("click", ".order-payment #sureUseVoucher", function (o) {
        b.voucherKeysObj = cc11001100_hook("b.voucherKeysObj", JSON.parse(JSON.stringify(b.temporaryVoucherKeysObj)), "assign"), b.voucherKeysList = cc11001100_hook("b.voucherKeysList", JSON.parse(JSON.stringify(b.temporaryVoucherKeysList)), "assign"), b.goodsInfo.cash_coupon_keys = cc11001100_hook("b.goodsInfo.cash_coupon_keys", b.voucherKeysList.join(","), "assign"), s("#useVoucherBtn .voucher-title").html(b.changeVoucherPriceHtml()), b.goodsCodeData(b.goodsInfo.new_price, b.goodsInfo.available_amount, b.countVoucher()), b.changePriceHtml(b.price), b.getPayCode(b.goodsInfo), s(".order-payment .voucher_warp").addClass("none");
      }), s(e).on("click", ".orderpayment_header_btn", function (o) {
        b.close();
      }), s(e).off("click", ".order-payment .list_btn.btn_left").on("click", ".order-payment .list_btn.btn_left", function (o) {
        b.moveTab("left");
      }), s(e).off("click", ".order-payment .list_btn.btn_right").on("click", ".order-payment .list_btn.btn_right", function (o) {
        b.moveTab("right");
      }), s(e).off("click", ".orderpayment_item").on("click", ".orderpayment_item", function (o) {
        var e = cc11001100_hook("e", JSON.parse(s(this).attr("data-goods") || "{}"), "var-init");
        if (e = cc11001100_hook("e", "balance" === e.type ? n(e, b.balanceList[e.index].ext, b.show_in_goodsobj[b.balanceList[e.index].ext.goodsId]) : n(e, b.goodsList[e.index].ext, b.show_in_goodsobj[b.goodsList[e.index].ext.goodsId]), "assign"), s(this).has("active")) return s(this).addClass("active").siblings().removeClass("active"), void b.getGoodsInfo(e, function (o) {
          "balance" === e.type ? (b.checkBalacneGoods = cc11001100_hook("b.checkBalacneGoods", !0, "assign"), b.balanceGoodsInfo = cc11001100_hook("b.balanceGoodsInfo", o, "assign")) : (b.goodsInfo = cc11001100_hook("b.goodsInfo", o, "assign"), b.checkBalacneGoods = cc11001100_hook("b.checkBalacneGoods", !1, "assign"), o.available_amount > 0 && (b.isUseBalance = cc11001100_hook("b.isUseBalance", !0, "assign"))), b.activeGoodsId = cc11001100_hook("b.activeGoodsId", o.goods_id, "assign"), b.goodsCodeData(o.new_price, o.available_amount), s(".orderpayment_dialog .orderpayment_c_goodsinfo").html(b.setGoodsInfos()), s(".orderpayment_dialog .orderpayment_c_activity").html(b.goodsInfo.activityDesc), s(".orderpayment_dialog .commodity_box").html("").append(b.setPayPriceHtml()), b.resetVoucherHtml(), s(".orderpayment_dialog .scan_code").html("").append(b.setPaylistHtml());
        });
      });
    },
    initDialog: function () {
      this.bindEvents(), this.renderDialog();
    },
    setGoodsInfos: function () {
      var o = cc11001100_hook("o", this.checkBalacneGoods ? this.balanceGoodsInfo : this.goodsInfo, "var-init");
      return '\n          <div class="orderpayment_c_goods_warp">\n            <img class="orderpayment_c_goods_img" src="' + (o.product_pic && o.product_pic.split("|")[0] || "https://img-home.csdnimg.cn/images/20210910025238.png") + '" />\n          </div>\n          <div class="orderpayment_c_goods_t"><p>' + o.name + "</p></div>";
    },
    setGoodsListHtml: function () {
      for (var o = cc11001100_hook("o", "", "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < this.balanceList.length; e++) o += cc11001100_hook("o", '<div class="orderpayment_c_l_bitem orderpayment_item ' + (this.activeGoodsId == this.balanceList[e].ext.goodsId ? "active" : "") + "\" data-goods='" + JSON.stringify({
        index: cc11001100_hook("index", e, "object-key-init"),
        type: cc11001100_hook("type", "balance", "object-key-init")
      }) + "'>\n          <span class=\"orderpayment_c_l_b_tips " + (this.balanceList[e].ext.activityContent ? "" : "none") + '">' + (this.balanceList[e].ext.activityContent || "") + '</span>\n          <div class="orderpayment_c_l_b_price"><span>¥</span>' + this.balanceList[e].ext.price + '</div>\n          <div class="orderpayment_c_l_b_dis">' + (this.balanceList[e].ext.activityDiscountDesc || "") + '</div>\n          <div class="orderpayment_c_l_b_activity ' + (this.balanceList[e].ext.activityDesc ? "" : "none") + '"><p>' + (this.balanceList[e].ext.activityDesc || "") + "</p></div>\n        </div>", "assign");
      for (var s = cc11001100_hook("s", "", "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < this.goodsList.length; e++) s += cc11001100_hook("s", '<div class="orderpayment_c_l_goodsitem orderpayment_c_l_bitem orderpayment_item ' + (this.activeGoodsId == this.goodsList[e].ext.goodsId ? "active" : "") + " " + (b.show_config.showGoods ? "" : "none") + "\" data-goods='" + JSON.stringify({
        index: cc11001100_hook("index", e, "object-key-init"),
        type: cc11001100_hook("type", "other", "object-key-init")
      }) + "'>\n          <span class=\"orderpayment_c_l_b_tips " + (this.goodsList[e].ext.activityContent ? "" : "none") + '" >' + this.goodsList[e].ext.activityContent + '</span>\n            <div class="orderpayment_c_l_b_price"><span>¥</span>' + this.goodsList[e].ext.price + '</div>\n            <div class="orderpayment_c_l_b_activity ' + ("string" != typeof this.show_params.params[e].aloneDesc || this.show_params.params[e].aloneDesc ? "" : "none") + '"><p>' + (this.show_params.params[e].aloneDesc ? this.show_params.params[e].aloneDesc : L[x]) + "</p></div>\n        </div>", "assign");
      return o + s;
    },
    setPaylistHtml: function () {
      var o = cc11001100_hook("o", b.checkBalacneGoods ? b.balanceGoodsInfo : b.goodsInfo, "var-init"),
        e = cc11001100_hook("e", [], "var-init");
      o.payTypeList && o.payTypeList.forEach(function (o) {
        "unionpay" !== o.name && e.push(o);
      });
      for (var s = cc11001100_hook("s", "", "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) s += cc11001100_hook("s", '<img class="icon_item ' + e[n].name + '" src=' + JSON.stringify(e[n].image) + ' alt="img">', "assign");
      return s + '<span class="pay_intro">扫码支付</span>';
    },
    setVoucherListHtml: function () {
      for (var o = cc11001100_hook("o", b.goodsInfo.cashCouponVoList || [], "var-init"), e = cc11001100_hook("e", "", "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < o.length; s++) e += cc11001100_hook("e", '<div class="voucher_card ' + (b.temporaryVoucherKeysObj[o[s].couponKey] ? "checked" : "") + '" data-key="' + o[s].couponKey + '">\n          <div class="c1">\n            余¥<span class="v_c_num">' + o[s].residualValue / 100 + '</span><span class="v_c_all">面值:¥' + o[s].groupValue / 100 + '</span>\n          </div>\n          <div class="c2 ellipis" alt="' + o[s].description + '">' + o[s].description + '</div>\n          <div class="c3">有效期至' + o[s].validDate + "</div>\n        </div>", "assign");
      return e;
    },
    setVoucherHtml: function () {
      return '<div class="voucher_warp none">\n        <div class="v_w_head">\n          <div class="v_w_desc">\n            <div>\n              金额抵用：<span class="v_unit">¥ </span><span class="v_price">0</span>使用代金券0张，抵用0元\n            </div>\n          </div>\n          <div class="hide_warp" id="sureUseVoucher">\n            <span class="voucher-title">确认使用</span>\n          </div>\n        </div>\n        <div class="v_w_content">\n          ' + this.setVoucherListHtml() + "\n        </div>\n      </div>";
    },
    setPayPriceHtml: function () {
      var o = cc11001100_hook("o", (b.priceInfo, b.checkBalacneGoods ? b.balanceGoodsInfo : b.goodsInfo), "var-init");
      return '<ul class="commodity_desc">\n                    <li class="amount_actually">\n                      待支付金额<span class="num">¥ <b>' + b.price + "</b></span><em><i>" + o.old_price + '</i>元</em><span class="' + (o.num > 1 ? "" : "none") + '">（共' + o.num + '件）</span>\n                    </li>\n                    <li class="voucher ' + (o.cashCouponVoList && o.cashCouponVoList.length > 0 ? "" : "none") + '" id="useVoucherBtn"><div class="voucher-title ">有' + o.cashCouponVoList.length + '张代金券可用，选择代金券</div>\n                    </li>\n                    <li class="gift ' + (o.discount_msg ? "block" : "none") + '">\n                      <img src="' + f + '/enjoy.png" alt="">\n                      <span>' + o.discount_msg + '</span>\n                    </li>\n\n                    <li class="user_balance ' + (o.available_amount > 0 ? b.isUseBalance ? "active" : "" : "disable") + " " + (19 === o.flag ? "none" : "") + '" >\n                      <img src="' + f + '/unchecked.png" alt="" class="unchecked">\n                      <img src="' + f + '/checked.png" alt="" class="checked">\n                      钱包余额 <b class="num">' + o.available_amount + '</b>\n                      <div class="balance_tips_box">\n                        <img src="' + f + '/help.png" alt="" class="help">\n                        <span class="balance_tips">\n                          <i class="chat"></i>\n                          <b>抵扣说明：</b>\n                          <em>1、余额是钱包充值的虚拟货币，按照1:1的比例进行支付金额的抵扣；</em>\n                          <em>2、余额无法直接购买下载，可以购买VIP、课程；</em>\n                        </span>\n                      </div>\n                    </li>\n                    <div class="btn ' + (0 != b.price ? "none" : "block") + '" id="pay_btn">确定支付</div>\n                  </ul>';
    },
    renderDialog: function () {
      this.createMask();
      var e = cc11001100_hook("e", this.setGoodsInfos(), "var-init"),
        n = cc11001100_hook("n", this.setGoodsListHtml(), "var-init"),
        t = cc11001100_hook("t", this.setPaylistHtml(), "var-init"),
        a = cc11001100_hook("a", this.setPayPriceHtml(), "var-init"),
        i = cc11001100_hook("i", this.setVoucherHtml(), "var-init"),
        r = cc11001100_hook("r", '<div id="order-payment" class="order-payment noselect">\n          <div class="orderpayment_dialog">\n              <div class="orderpayment_header">\n                <div class="orderpayment_header_title">扫码支付</div>\n                <span class="orderpayment_header_btn"> + </span>\n              </div>\n              <div class="orderpayment_content">\n                <div class="orderpayment_c_goodsinfo ' + (b.show_config.showHeads ? "" : "none") + '">\n                  ' + e + '\n                </div>\n                <div class="orderpayment_c_goodslist ' + (b.show_config.showGoods ? "" : "none") + '">\n                  <span class="list_btn btn_left">\n                    <img src="' + f + '/icon-left.png">\n                  </span>\n                  <span class="list_btn btn_right">\n                    <img src="' + f + '/icon-right.png">\n                  </span>\n                  <div class="orderpayment_c_goodslist_scroll">\n                    ' + n + '\n                  </div>\n                </div>\n                <div class="orderpayment_c_activity ' + (this.goodsInfo.activityDesc ? "" : "none") + '">' + (this.goodsInfo.activityDesc || "") + '</div>\n                <div class="orderpayment_paybox">\n                  <div class="recharge_mode ' + (0 != b.price ? "block" : "visnone") + '">\n                    <div class="recharge_mode_qr_code" id="ordertip_qr_code">\n                      <img class="loading" src="' + f + '/checked.png" width="50" height="50">\n                    </div>\n                    <div id="ordertip_notify" class="pay_notify"></div>\n                    <p class="scan_code">\n                      ' + t + '\n                    </p>\n                  </div>\n                  <div class="commodity_box">\n                    ' + a + '\n                  </div>\n                  <div class="voucher_warp_box">\n                    ' + i + '\n                  </div>\n                </div>\n                <div class="orderpayment_custombox ' + (this.show_config.customBox ? "" : "none") + '"">' + b.show_config.customBox + '</div>\n              </div>\n            </div>\n          <div class="orderpayment_mask"></div>\n      </div>\n      ', "var-init"),
        c = cc11001100_hook("c", s(r), "var-init");
      s("#order-payment-box").append(c), b.listScrollWidth = cc11001100_hook("b.listScrollWidth", s(".orderpayment_c_goodslist_scroll").width() || 0, "assign"), b.listBoxWidth = cc11001100_hook("b.listBoxWidth", s(".orderpayment_c_goodslist").width() || 626, "assign"), b.listBoxWidth >= b.listScrollWidth && s("#order-payment-box .list_btn").hide(), o.report && window.csdn.report.viewCheck();
    },
    createMask: function () {
      var o = cc11001100_hook("o", e.createElement("div"), "var-init");
      o.id = cc11001100_hook("o.id", "order-payment-box", "assign"), e.body.appendChild(o);
    },
    getGoodsShowList: function () {
      s.ajax({
        url: cc11001100_hook("url", i() + "mp/mallorder/api/internal/goods/showListV2?showType=balancePopup", "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (o) {
          if (o.data) {
            b.balanceList = cc11001100_hook("b.balanceList", o.data.balancePopup || [], "assign");
            b.activeGoodsId = cc11001100_hook("b.activeGoodsId", b.goodsInfo.goods_id, "assign"), b.checkBalacneGoods = cc11001100_hook("b.checkBalacneGoods", !1, "assign"), b.initDialog(), b.getPayCode();
          } else void 0;
        },
        error: function (o) {
          void 0;
        }
      });
    },
    getGoodsShowListByIds: function (o, e) {
      s.ajax({
        url: cc11001100_hook("url", i() + "mp/mallorder/api/internal/goods/listForPopup", "object-key-init"),
        type: cc11001100_hook("type", "POST", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        data: cc11001100_hook("data", o ? JSON.stringify({
          goodsList: cc11001100_hook("goodsList", o, "object-key-init")
        }) : "", "object-key-init"),
        async: cc11001100_hook("async", !1, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (o) {
          o.data ? (b.goodsList = cc11001100_hook("b.goodsList", o.data, "assign"), e && e(b.findDefaultGood(b.goodsList))) : void 0;
        },
        error: function (o) {
          void 0;
        }
      });
    },
    getGoodsInfo: function (o, e) {
      var t = cc11001100_hook("t", !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], "var-init");
      o.ext && delete o.ext, s.ajax({
        url: cc11001100_hook("url", i() + "mp/mallorder/api/internal/goods/getGoodsInfo", "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        data: cc11001100_hook("data", n(o, {
          goods_id: cc11001100_hook("goods_id", o.goodsId, "object-key-init"),
          product_id: cc11001100_hook("product_id", o.productId, "object-key-init")
        }), "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (o) {
          200 == o.code && o.data ? (19 === o.data.flag && (b.isUseBalance = cc11001100_hook("b.isUseBalance", !1, "assign")), e && e(o.data), b.changePriceHtml(b.price), t && b.getPayCode(o.data)) : void 0;
        },
        error: function (o) {
          void 0;
        }
      });
    },
    countVoucher: function () {
      var o = cc11001100_hook("o", arguments.length > 0 && void 0 !== arguments[0] && arguments[0], "var-init"),
        e = cc11001100_hook("e", 0, "var-init"),
        s = cc11001100_hook("s", [], "var-init");
      for (var n in o ? b.temporaryVoucherKeysObj : b.voucherKeysObj) (o ? b.temporaryVoucherKeysObj[n] : b.voucherKeysObj[n]) && s.push(n);
      return b.goodsInfo.cashCouponVoList.forEach(function (o) {
        s.indexOf(o.couponKey) > -1 && (e += cc11001100_hook("e", Number(o.residualValue), "assign"));
      }), e / 100;
    },
    resetVoucherHtml: function () {
      this.voucherKeysList = cc11001100_hook("this.voucherKeysList", [], "assign"), this.voucherKeysObj = cc11001100_hook("this.voucherKeysObj", {}, "assign"), this.temporaryVoucherKeysList = cc11001100_hook("this.temporaryVoucherKeysList", [], "assign"), this.temporaryVoucherKeysObj = cc11001100_hook("this.temporaryVoucherKeysObj", {}, "assign"), s(".orderpayment_dialog .voucher_warp_box").html(b.setVoucherHtml());
    },
    changeVoucherPriceHtml: function () {
      var o = cc11001100_hook("o", arguments.length > 0 && void 0 !== arguments[0] && arguments[0], "var-init"),
        e = cc11001100_hook("e", b.countVoucher(o), "var-init"),
        s = cc11001100_hook("s", b.goodsInfo.new_price, "var-init"),
        n = cc11001100_hook("n", s > e ? e : Number(s).toFixed(2), "var-init");
      return '<div>金额抵用：<span class="v_unit">¥</span><span class="v_price">' + n + "</span>使用代金券" + (o ? b.temporaryVoucherKeysList : b.voucherKeysList).length + "张，抵用" + n + "元</div>";
    },
    goodsCodeData: function () {
      var o = cc11001100_hook("o", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, "var-init"),
        e = cc11001100_hook("e", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, "var-init"),
        s = cc11001100_hook("s", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, "var-init"),
        n = cc11001100_hook("n", 0, "var-init");
      n = cc11001100_hook("n", this.isUseBalance ? o - s - e < 0 ? 0 : (100 * o - 100 * s - 100 * e) / 100 : o - s < 0 ? 0 : (100 * o - 100 * s) / 100, "assign"), this.price = cc11001100_hook("this.price", Number(n).toFixed(2), "assign");
    },
    changePriceHtml: function () {
      var o = cc11001100_hook("o", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, "var-init");
      Number(o) <= 0 ? (s(".orderpayment_dialog .recharge_mode").addClass("visnone"), s(".orderpayment_dialog #pay_btn").addClass("show").removeClass("none")) : (s(".orderpayment_dialog .recharge_mode").removeClass("visnone"), s(".orderpayment_dialog #pay_btn").removeClass("show").addClass("none")), s(".orderpayment_dialog .amount_actually .num b").html(o);
    },
    getPayCode: function () {
      var o = cc11001100_hook("o", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.checkBalacneGoods ? b.balanceGoodsInfo : b.goodsInfo, "var-init"),
        e = cc11001100_hook("e", {
          product_id: cc11001100_hook("product_id", o.product_id, "object-key-init"),
          goods_id: cc11001100_hook("goods_id", o.goods_id, "object-key-init"),
          goodsSource: cc11001100_hook("goodsSource", o.goodsSource || "", "object-key-init"),
          flag: cc11001100_hook("flag", o.flag, "object-key-init"),
          sale_source: cc11001100_hook("sale_source", b.sale, "object-key-init"),
          report_ext: cc11001100_hook("report_ext", b.reportExt, "object-key-init"),
          is_use_balance: cc11001100_hook("is_use_balance", Number(b.isUseBalance), "object-key-init"),
          coupon_key: cc11001100_hook("coupon_key", o.coupon_key, "object-key-init"),
          cash_coupon_keys: cc11001100_hook("cash_coupon_keys", o.cash_coupon_keys, "object-key-init"),
          use_cache: cc11001100_hook("use_cache", !0, "object-key-init"),
          success_function: cc11001100_hook("success_function", c, "object-key-init"),
          error_function: cc11001100_hook("error_function", d, "object-key-init"),
          timeout_function: cc11001100_hook("timeout_function", l, "object-key-init"),
          payment_function: cc11001100_hook("payment_function", p, "object-key-init"),
          get_pay_success_callback: cc11001100_hook("get_pay_success_callback", h, "object-key-init")
        }, "var-init"),
        s = cc11001100_hook("s", b.show_params.params.find(function (e) {
          return e.goodsId == o.goods_id;
        }) || {}, "var-init");
      b._cart.qrPay(Object.assign(s, e));
    },
    findDefaultGood: function () {
      var o = cc11001100_hook("o", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], "var-init"),
        e = cc11001100_hook("e", o.find(function (o) {
          return 1 === o.ext.default;
        }) || o[0], "var-init");
      return n({
        goods_id: cc11001100_hook("goods_id", e.ext.goodsId || "", "object-key-init"),
        flag: cc11001100_hook("flag", e.ext.flag || "", "object-key-init"),
        product_id: cc11001100_hook("product_id", e.ext.productId || "", "object-key-init")
      }, e.ext, b.show_in_goodsobj[e.ext.goodsId]);
    },
    moveTab: function (o) {
      var e = cc11001100_hook("e", s(".orderpayment_c_goodslist_scroll"), "var-init");
      "left" == o ? (b.transX >= 0 || Math.abs(b.transX) < 2.5 * b.goodsTabWidth ? (b.transX = cc11001100_hook("b.transX", 0, "assign"), s("#order-payment .btn_left").hide()) : b.transX += cc11001100_hook("b.transX", b.goodsTabWidth, "assign"), s("#order-payment .btn_right").show(), e.css("transform", "translateX(" + b.transX + "px)")) : (Math.abs(b.transX) + b.listBoxWidth >= b.listScrollWidth || b.listScrollWidth - b.listBoxWidth - Math.abs(b.transX) < 2.5 * b.goodsTabWidth ? (b.transX = cc11001100_hook("b.transX", -(b.listScrollWidth - b.listBoxWidth), "assign"), s("#order-payment .btn_right").hide()) : b.transX -= cc11001100_hook("b.transX", b.goodsTabWidth, "assign"), s("#order-payment .btn_left").show(), b.transX -= cc11001100_hook("b.transX", 10, "assign"), e.css("transform", "translateX(" + b.transX + "px)"));
    }
  }, "assign");
  var V = cc11001100_hook("V", void 0, "var-init");
  window.csdn.userOrderPayment = cc11001100_hook("window.csdn.userOrderPayment", {
    show: cc11001100_hook("show", m, "object-key-init"),
    close: cc11001100_hook("close", y, "object-key-init")
  }, "assign");
}(window.csdn = cc11001100_hook("window.csdn", window.csdn || {}, "assign"), document, jQuery);