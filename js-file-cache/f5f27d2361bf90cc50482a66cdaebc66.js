"use strict";

!function (t, i, s) {
  function o() {
    for (var t = cc11001100_hook("t", {}, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < arguments.length; i++) s.extend(!0, t, arguments[i]);
    return t;
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    var s = cc11001100_hook("s", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500, "var-init"),
      o = cc11001100_hook("o", i.createElement("div"), "var-init");
    o.innerHTML = cc11001100_hook("o.innerHTML", t, "assign"), o.style.cssText = cc11001100_hook("o.style.cssText", "min-width:124px;padding:0 8px;opacity: 0.8;height: 40px;background:rgba(34,34,38,1);color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 35%;left:50%;transform: translateX(-50%);z-index: 999999;font-size: 16px;", "assign"), i.getElementById("user-ordertip").appendChild(o), setTimeout(function () {
      o.style.webkitTransition = cc11001100_hook("o.style.webkitTransition", "-webkit-transform 0.5s ease-in, opacity 0.5s ease-in", "assign"), o.style.opacity = cc11001100_hook("o.style.opacity", "0", "assign"), setTimeout(function () {
        i.getElementById("user-ordertip") && i.getElementById("user-ordertip").removeChild(o);
      }, 500);
    }, s);
  }
  function r() {
    var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500, "var-init"),
      i = cc11001100_hook("i", '\n      <div class="loading_warp" id="user-ordertip-loading">\n        <div class="icon_box">\n          <img class="rotating" src="' + m + '/icon-paying.png"/>\n        </div>\n        <div class="pay_msg">查询中...</div>\n      </div>\n    ', "var-init");
    s(".ordertip_dialog").append(i).find(".ordertip_content").addClass("noScroll"), setTimeout(function () {
      s("#user-ordertip-loading").remove(), s(".ordertip_dialog .ordertip_content").removeClass("noScroll");
    }, t);
  }
  function n() {
    var t = cc11001100_hook("t", a("api_env") || "", "var-init"),
      i = cc11001100_hook("i", "https://mall.csdn.net/", "var-init"),
      s = cc11001100_hook("s", /^beta|test|loc[a-z]*/, "var-init");
    return t.match(s) ? i = cc11001100_hook("i", "https://test-mall.csdn.net/", "assign") : t.match(/^pre-|pre[a-z]*/) && (i = cc11001100_hook("i", "https://pre-mall.csdn.net/", "assign")), i;
  }
  function a(t) {
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", new RegExp("(^|&)" + t + "=([^&]*)(&|$)", "i"), "var-init"),
      s = cc11001100_hook("s", window.location.search.substr(1).match(i), "var-init");
    return null != s ? unescape(s[2]) : "";
  }
  function d(t, o) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    QRCode ? o.pay_url && (k.priceInfo = cc11001100_hook("k.priceInfo", o, "assign"), s("#ordertip_qr_code").html(""), s("#ordertip_notify").hide(), s("#pay_btn").attr("href", o.pay_url), new QRCode(i.getElementById("ordertip_qr_code"), {
      text: cc11001100_hook("text", o.pay_url, "object-key-init"),
      width: cc11001100_hook("width", 120, "object-key-init"),
      height: cc11001100_hook("height", 120, "object-key-init")
    }), s("#user-ordertip .other_pay").removeClass("none").find("a").attr("href", o.pay_url)) : void 0;
  }
  function c() {
    _("pay_error", "获取失败,点击重试", "code_2");
  }
  function l() {
    _("pay_time_out", "点击重新获取", "");
  }
  function p() {
    _("pay_error", "已扫码<br>请在手机端操作", "");
  }
  function g(t) {
    cc11001100_hook("t", t, "function-parameter");
    var i = cc11001100_hook("i", !(!1 === k.show_params.needLoading), "var-init"),
      s = cc11001100_hook("s", k.show_params.successProcess || "reload", "var-init");
    i && r(), setTimeout(function () {
      e("支付成功", "1000"), setTimeout(function () {
        x ? (k.close(), x(t)) : "reload" === s ? window.location.reload() : "jump" === s && (window.location.href = cc11001100_hook("window.location.href", h(t), "assign"));
      }, 1e3);
    }, i ? 1500 : 0);
  }
  function h(t) {
    cc11001100_hook("t", t, "function-parameter");
    return "success" === t.errorMessage && t.jumpUrl && 1 === t.status ? t.jumpUrl : !t.need_third_pay && t.paySuccessUrl ? t.paySuccessUrl : "https://mall.csdn.net/myorder";
  }
  function _(t, i, o) {
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    s("#ordertip_notify").show().html('<img class="pay_icon" src="https://csdnimg.cn/release/download/images/' + t + '.png"/><span class="pay_tip">' + i + "</span>"), s("#ordertip_qr_code").html('<img src="https://csdnimg.cn/public/static/img/csdn-userimg250.gif" width="145" height="145"/>'), "pay_time_out" == t || "pay_error" == t ? s("#ordertip_notify .pay_icon,#ordertip_notify .pay_tip").on("click", function () {
      k.getPayCode();
    }) : s("#ordertip_notify .pay_icon,#ordertip_notify .pay_tip").off("click");
  }
  function u() {
    this.userInfo = cc11001100_hook("this.userInfo", {}, "assign"), this.tabList = cc11001100_hook("this.tabList", [{
      icon: cc11001100_hook("icon", m + "/tab1-icon.png", "object-key-init"),
      title: cc11001100_hook("title", "CSDN会员", "object-key-init"),
      desc: cc11001100_hook("desc", "下载", "object-key-init"),
      key: cc11001100_hook("key", "vipForPopup", "object-key-init"),
      list: cc11001100_hook("list", [], "object-key-init")
    }, {
      icon: cc11001100_hook("icon", m + "/tab2-icon.png", "object-key-init"),
      title: cc11001100_hook("title", "超级会员", "object-key-init"),
      desc: cc11001100_hook("desc", "专栏、课程、下载", "object-key-init"),
      key: cc11001100_hook("key", "superVipForPopup", "object-key-init"),
      list: cc11001100_hook("list", [], "object-key-init")
    }], "assign"), this.activeTab = cc11001100_hook("this.activeTab", "vipForPopup", "assign"), this.goodsInfo = cc11001100_hook("this.goodsInfo", {}, "assign"), this.goodsList = cc11001100_hook("this.goodsList", [], "assign"), this.activeGoodsId = cc11001100_hook("this.activeGoodsId", "", "assign"), this.isUseBalance = cc11001100_hook("this.isUseBalance", !0, "assign"), this.priceInfo = cc11001100_hook("this.priceInfo", {}, "assign"), this.errType = cc11001100_hook("this.errType", "", "assign"), this.reportExt = cc11001100_hook("this.reportExt", {}, "assign"), this.navList = cc11001100_hook("this.navList", [], "assign"), this.payMethods = cc11001100_hook("this.payMethods", [], "assign"), this.price = cc11001100_hook("this.price", 0, "assign"), this.payUrl = cc11001100_hook("this.payUrl", "", "assign"), this.params = cc11001100_hook("this.params", {}, "assign"), this._cart = cc11001100_hook("this._cart", null, "assign"), this.show_params = cc11001100_hook("this.show_params", {}, "assign"), this.goodsTransX = cc11001100_hook("this.goodsTransX", 0, "assign"), this.listBoxWidth = cc11001100_hook("this.listBoxWidth", 626, "assign"), this.listScrollWidth = cc11001100_hook("this.listScrollWidth", 0, "assign"), this.goodsTabWidth = cc11001100_hook("this.goodsTabWidth", 176, "assign"), this.rightsTransX = cc11001100_hook("this.rightsTransX", 0, "assign"), this.rightsBoxWidth = cc11001100_hook("this.rightsBoxWidth", 626, "assign"), this.rightsScrollWidth = cc11001100_hook("this.rightsScrollWidth", 0, "assign"), this.rightsTabWidth = cc11001100_hook("this.rightsTabWidth", 136, "assign"), this.vipRightsObj = cc11001100_hook("this.vipRightsObj", {}, "assign"), b = cc11001100_hook("b", this, "assign");
  }
  function f() {
    k.close();
  }
  var v = cc11001100_hook("v", "https://g.csdnimg.cn/user-ordertip/", "var-init"),
    m = cc11001100_hook("m", v + "5.0.1/images", "var-init"),
    b = cc11001100_hook("b", null, "var-init"),
    y = cc11001100_hook("y", !1, "var-init"),
    x = cc11001100_hook("x", null, "var-init"),
    w = cc11001100_hook("w", "", "var-init"),
    T = cc11001100_hook("T", !0, "var-init"),
    I = function (t) {
      var s = cc11001100_hook("s", i.cookie, "var-init");
      return s && function () {
        var i,
          o = cc11001100_hook("o", {}, "var-init");
        s = cc11001100_hook("s", s.split("; "), "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"), r = cc11001100_hook("r", s.length, "var-init"); e < r && (i = cc11001100_hook("i", s[e].split("="), "assign"), !(i.length > 0 && (i[0] === t && (o.key = cc11001100_hook("o.key", i[0], "assign"), o.value = cc11001100_hook("o.value", i[1], "assign"), o.status = cc11001100_hook("o.status", !0, "assign")), "key" in o))); e++);
        return "key" in o && o;
      }();
    };
  !function (t) {
    var s = cc11001100_hook("s", i.createElement("link"), "var-init");
    s.rel = cc11001100_hook("s.rel", "stylesheet", "assign"), s.type = cc11001100_hook("s.type", "text/css", "assign"), s.href = cc11001100_hook("s.href", t, "assign"), i.getElementsByTagName("head")[0].appendChild(s);
  }("https://g.csdnimg.cn/user-ordertip/5.0.1/user-ordertip.css");
  u.prototype = cc11001100_hook("u.prototype", {
    constructor: cc11001100_hook("constructor", u, "object-key-init"),
    close: function () {
      y = cc11001100_hook("y", !1, "assign"), this._cart && this._cart.clearTimer(), s("#user-ordertip-box").remove();
    },
    show: function () {
      var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
      return I("UserName").value ? window.csdn.cart ? window.csdn.cartClass ? (this.show_params = cc11001100_hook("this.show_params", t, "assign"), "function" == typeof t.get_pay_success_callback && (x = cc11001100_hook("x", t.get_pay_success_callback, "assign")), this.sale = cc11001100_hook("this.sale", t.sale_source || a("sale_source"), "assign"), this.reportExt = cc11001100_hook("this.reportExt", t.report_ext || {}, "assign"), t.tabList && t.tabList.length > 0 && (this.tabList = cc11001100_hook("this.tabList", t.tabList, "assign")), t.tabs && (this.activeTab = cc11001100_hook("this.activeTab", t.tabs[0], "assign"), this.tabList = cc11001100_hook("this.tabList", this.tabList.filter(function (i) {
        return -1 !== t.tabs.indexOf(i.key);
      }), "assign")), 0 === this.tabList.length ? void void 0 : void this.init()) : void void 0 : void void 0 : void void 0;
    },
    init: function () {
      this._cart = cc11001100_hook("this._cart", new window.csdn.cartClass(), "assign"), this.getVipGoodsList(function (t) {
        b.getGoodsInfo(t, function (t) {
          b.goodsInfo = cc11001100_hook("b.goodsInfo", t, "assign"), b.goodsCodeData(t.new_price, t.available_amount), b.activeGoodsId = cc11001100_hook("b.activeGoodsId", b.goodsInfo.goods_id, "assign"), b.initDialog(), b.getPayCode(), b.getUserInfo();
        }, !1);
      });
    },
    bindEvents: function () {
      s(i).off("click", ".ordertip_dialog .user_balance").on("click", ".ordertip_dialog .user_balance", function () {
        if (s(".ordertip_dialog .user_balance").hasClass("disable")) return void (b.isUseBalance = cc11001100_hook("b.isUseBalance", !1, "assign"));
        s(".ordertip_dialog .user_balance").hasClass("active") ? (s(".ordertip_dialog .user_balance").removeClass("active"), b.isUseBalance = cc11001100_hook("b.isUseBalance", !1, "assign")) : (s(".ordertip_dialog .user_balance").addClass("active"), b.isUseBalance = cc11001100_hook("b.isUseBalance", !0, "assign")), b.getGoodsInfo(b.goodsInfo, function (t) {
          b.goodsInfo = cc11001100_hook("b.goodsInfo", t, "assign"), b.goodsCodeData(b.goodsInfo.new_price, b.goodsInfo.available_amount), b.changePriceHtml(b.price), b.getPayCode(b.goodsInfo);
        });
      }), s(i).off("click", "#pay_btn").on("click", "#pay_btn", function (t) {
        var i = cc11001100_hook("i", I("UserName").value, "var-init");
        if (T) {
          T = cc11001100_hook("T", !1, "assign");
          var o = cc11001100_hook("o", {
            product_id: cc11001100_hook("product_id", b.goodsInfo.product_id, "object-key-init"),
            goods_id: cc11001100_hook("goods_id", b.goodsInfo.goods_id, "object-key-init"),
            flag: cc11001100_hook("flag", b.goodsInfo.flag, "object-key-init"),
            goodsSource: cc11001100_hook("goodsSource", b.goodsInfo.goodsSource || "", "object-key-init"),
            is_use_balance: cc11001100_hook("is_use_balance", 2, "object-key-init"),
            sale_source: cc11001100_hook("sale_source", b.sale, "object-key-init"),
            request_id: cc11001100_hook("request_id", i + "_" + w + "_" + b.goodsInfo.product_id + "_" + b.goodsInfo.goods_id + "_" + b.goodsInfo.flag, "object-key-init")
          }, "var-init");
          return void b._cart.quickBuy({
            params: cc11001100_hook("params", o, "object-key-init"),
            get_pay_success_callback: function (t) {
              T = cc11001100_hook("T", !0, "assign"), 200 == t.code && !1 === t.data.need_third_pay && g(t.data);
            },
            error_function: function (t) {
              T = cc11001100_hook("T", !0, "assign"), 400103012 == t.status && s(".ordertip_item.active").trigger("click"), void 0;
            }
          });
        }
      }), s(i).on("click", ".ordertip_header_btn", function (t) {
        b.close();
      }), s(i).off("click", ".user-ordertip .list_btn.btn_left").on("click", ".user-ordertip .list_btn.btn_left", function (t) {
        b.moveTab("left");
      }), s(i).off("click", ".user-ordertip .list_btn.btn_right").on("click", ".user-ordertip .list_btn.btn_right", function (t) {
        b.moveTab("right");
      }), s(i).off("click", ".user-ordertip .rights_btn.rights_btn_left").on("click", ".user-ordertip .rights_btn.rights_btn_left", function (t) {
        b.moveRightsCard("left");
      }), s(i).off("click", ".user-ordertip .rights_btn.rights_btn_right").on("click", ".user-ordertip .rights_btn.rights_btn_right", function (t) {
        b.moveRightsCard("right");
      }), s(i).off("click", ".ordertip_tab_item").on("click", ".ordertip_tab_item", function (t) {
        var i = cc11001100_hook("i", s(this).attr("data-key") || "", "var-init");
        if (!s(this).hasClass("active")) {
          s(this).addClass("active").siblings().removeClass("active"), b.goodsList = cc11001100_hook("b.goodsList", b.tabList.find(function (t) {
            return t.key === i;
          }).list || [], "assign"), s(".ordertip_dialog .ordertip_c_goodslist_scroll").html(b.setGoodsListHtml()), b.dealGoodsListJt();
          var o = cc11001100_hook("o", b.findDefaultGood(b.goodsList).goodsId, "var-init");
          s(".ordertip_item[data-id=" + o + "]").trigger("click");
        }
      }), s(i).off("click", ".ordertip_item").on("click", ".ordertip_item", function (t) {
        var i = cc11001100_hook("i", JSON.parse(s(this).attr("data-goods") || "{}"), "var-init");
        if (i = cc11001100_hook("i", o(i, b.goodsList[i.index].ext), "assign"), !s(this).hasClass("active")) return s(this).addClass("active").siblings().removeClass("active"), void b.getGoodsInfo(i, function (t) {
          b.goodsInfo = cc11001100_hook("b.goodsInfo", t, "assign"), 1 == b.goodsInfo.isContract && t.available_amount > t.new_price ? (b.isUseBalance = cc11001100_hook("b.isUseBalance", !1, "assign"), b.goodsInfo.hideBalance = cc11001100_hook("b.goodsInfo.hideBalance", !0, "assign")) : t.available_amount > 0 && (b.isUseBalance = cc11001100_hook("b.isUseBalance", !0, "assign")), b.activeGoodsId = cc11001100_hook("b.activeGoodsId", t.goods_id, "assign"), b.goodsCodeData(t.new_price, t.available_amount), b.goodsInfo.contractDesc ? s(".ordertip_dialog .ordertip_c_activity").html(decodeURIComponent(b.goodsInfo.contractDesc || "")).removeClass("none").show() : s(".ordertip_dialog .ordertip_c_activity").hide(), s(".ordertip_dialog .commodity_box").html("").append(b.setPayPriceHtml()), s(".ordertip_dialog .scan_code").html("").append(b.setPaylistHtml());
        });
      });
    },
    initDialog: function () {
      this.bindEvents(), this.renderDialog();
    },
    setUserInfoHtml: function () {
      return b.userInfo.nickname ? '<div class="ordertip_user">\n          <img class="ordertip_user_head" src="' + b.userInfo.avatar + '" />\n          <div class="ordertip_user_info">\n            <div class="ordertip_user_name ' + (4 == b.userInfo.userStatus ? "vip" : "") + '">' + b.userInfo.nickname + '<img src="' + m + '/vip-icon.png" /></div>\n            <div class="ordertip_user_vipdesc">' + b.userInfo.vipTips + "</div>\n          </div>\n        </div>" : "";
    },
    setVipTabHtml: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        i = cc11001100_hook("i", "", "var-init");
      if (this.tabList.length > 1) {
        var s = cc11001100_hook("s", "", "var-init");
        this.tabList.forEach(function (i) {
          s += cc11001100_hook("s", '<div class="ordertip_tab_item ' + (t.activeTab === i.key ? "active" : "") + '" data-key="' + i.key + '">\n            <div class="ordertip_tab_title">' + (i.icon ? '<img src="' + i.icon + '" />' : "") + i.title + '</div>\n            <div class="ordertip_tab_desc">' + i.desc + "</div>\n          </div>", "assign");
        }), i = cc11001100_hook("i", '<div class="ordertip_tab_list">' + s + "</div>", "assign");
      }
      return i;
    },
    setGoodsListHtml: function () {
      var t = cc11001100_hook("t", this, "var-init"),
        i = cc11001100_hook("i", "", "var-init");
      return this.goodsList.forEach(function (s, o) {
        i += cc11001100_hook("i", '<div class="ordertip_c_l_goodsitem ordertip_item ' + (t.activeGoodsId == s.ext.goodsId ? "active" : "") + " \" data-goods='" + JSON.stringify({
          index: cc11001100_hook("index", o, "object-key-init"),
          type: cc11001100_hook("type", "other", "object-key-init")
        }) + "' data-id='" + s.ext.goodsId + "'>\n          <span class=\"ordertip_c_l_b_tips " + (s.ext.activityContent ? "" : "none") + '" >' + s.ext.activityContent + '</span>\n          <div class="ordertip_c_l_b_name">' + (s.name || "").split("：")[0] + '</div>\n          <div class="ordertip_c_l_b_price"><span>¥</span>' + s.ext.unitPrice + "<span>/" + s.ext.availableUnit + '</span></div>\n          <div class="ordertip_c_l_b_activity ' + (s.title ? "" : "none") + '">' + s.title + "</div>\n        </div>", "assign");
      }), i;
    },
    setPaylistHtml: function () {
      var t = cc11001100_hook("t", b.goodsInfo, "var-init"),
        i = cc11001100_hook("i", [], "var-init");
      t.payTypeList && t.payTypeList.forEach(function (t) {
        "unionpay" !== t.name && i.push(t);
      });
      for (var s = cc11001100_hook("s", "", "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < i.length; o++) s += cc11001100_hook("s", '<img class="icon_item ' + i[o].name + '" src=' + JSON.stringify(i[o].image) + ' alt="img">', "assign");
      return s + '<span class="pay_intro">扫码支付</span>';
    },
    setPayPriceHtml: function () {
      var t = cc11001100_hook("t", b.priceInfo, "var-init"),
        i = cc11001100_hook("i", b.goodsInfo, "var-init");
      return '<ul class="commodity_desc">\n                    <li class="amount_actually">\n                      实付：<span class="num"><b>' + b.price + '</b>元</span><span class="num ' + (i.totalDiscountPrice > 0 ? "" : "none") + '">已优惠' + i.totalDiscountPrice + '元!</span>\n                    </li>\n                    <li class="voucher ' + (i.cashCouponVoList && i.cashCouponVoList.length > 0 ? "" : "none") + '" id="useVoucherBtn"><div class="voucher-title ">有' + i.cashCouponVoList.length + '张代金券可用，选择代金券</div>\n                    </li>\n                    <li class="gift none ' + (i.discount_msg ? "block" : "none") + '">\n                      <img src="' + m + '/enjoy.png" alt="">\n                      <span>' + i.discount_msg + '</span>\n                    </li>\n\n                    <li class="user_balance ' + (i.hideBalance ? "none" : "") + " " + (i.available_amount > 0 ? b.isUseBalance ? "active" : "" : "disable") + " " + (19 === i.flag ? "none" : "") + '" >\n                      <span class="unchecked"></span>\n                      <img src="' + m + '/checked.png" alt="" class="checked">\n                      余额抵扣 <b class="num">' + i.available_amount + '</b>\n                    </li>\n                    <li class="user_balance tips ' + (i.hideBalance ? "" : "none") + '">\n                      连续包月暂不支持余额抵扣，请使用微信或支付宝付款，请您谅解！\n                    </li>\n                    <li class="other_pay">\n                      <a href="' + t.pay_url + '" target="_blank"><img src="' + m + '/yl-icon.png" alt="">银联购买</a>\n                    </li>\n                  </ul>';
    },
    setVipRightsHtml: function (t) {
      if (!b.vipRightsObj[t] || 0 === b.vipRightsObj[t].length) return "";
      var i = cc11001100_hook("i", "", "var-init");
      return b.vipRightsObj[t].forEach(function (t) {
        i += cc11001100_hook("i", '<a href="' + t.permissionUrl + '" target="_blank" class="ordertip_rights_item">\n          <img src="' + t.permissionIcon + '" class="ordertip_r_item_img">\n          <div class="ordertip_r_item_info">\n            <div class="ordertip_r_item_title ellipis">' + t.permissionName + '</div>\n            <div class="ordertip_r_item_desc ellipis">' + t.permissionTips + "</div>\n          </div>\n        </a>", "assign");
      }), '<div class="ordertip_rights_head">CSDN会员特权</div>\n        <span class="rights_btn rights_btn_right">\n          <img src="' + m + '/icon-right.png">\n        </span>\n        <span class="rights_btn rights_btn_left">\n          <img src="' + m + '/icon-left.png">\n        </span>\n        <div class="ordertip_rights_scroll">\n          ' + i + "\n        </div>";
    },
    renderDialog: function () {
      this.createMask();
      var i = cc11001100_hook("i", this.setVipTabHtml(), "var-init"),
        o = cc11001100_hook("o", this.setGoodsListHtml(), "var-init"),
        e = cc11001100_hook("e", this.setPaylistHtml(), "var-init"),
        r = cc11001100_hook("r", this.setPayPriceHtml(), "var-init"),
        n = cc11001100_hook("n", '<div id="user-ordertip" class="user-ordertip noselect">\n          <div class="ordertip_dialog">\n              <div class="ordertip_header">\n                \n                <span class="ordertip_header_btn"> + </span>\n              </div>\n              ' + i + '\n              <div class="ordertip_content">\n                <div class="ordertip_c_goodslist ">\n                  <span class="list_btn btn_left">\n                    <img src="' + m + '/icon-left.png">\n                  </span>\n                  <span class="list_btn btn_right">\n                    <img src="' + m + '/icon-right.png">\n                  </span>\n                  <div class="ordertip_c_goodslist_scroll">\n                    ' + o + '\n                  </div>\n                </div>\n                <div class="ordertip_c_activity ' + (this.goodsInfo.contractDesc ? "" : "none") + '">' + (decodeURIComponent(this.goodsInfo.contractDesc) || "") + '</div>\n                <div class="ordertip_paybox">\n                  <div class="recharge_mode ' + (0 != b.price ? "block" : "none") + '">\n                    <div class="recharge_mode_qr_code" id="ordertip_qr_code">\n                      <img class="loading" src="' + m + '/loading.gif" width="50" height="50">\n                    </div>\n                    <div id="ordertip_notify" class="pay_notify"></div>\n                    <p class="scan_code">\n                      ' + e + '\n                    </p>\n                  </div>\n                  <div class="recharge_mode_btn ' + (0 == b.price ? "block" : "none") + '">\n                    <div class="pay_btn" id="pay_btn">确定支付</div>\n                  </div>\n                  <div class="commodity_box">\n                    ' + r + '\n                  </div>\n                </div>\n                <div class="ordertip_rights_box">\n                </div>\n                <div class="ordertip_agreement">\n                  购买即同意<a href="https://blog.csdn.net/blogdevteam/article/details/111173049" target="_blank">《CSDN会员服务协议》</a>\n                </div>\n              </div>\n            </div>\n          <div class="ordertip_mask"></div>\n      </div>\n      ', "var-init"),
        a = cc11001100_hook("a", s(n), "var-init");
      s("#user-ordertip-box").append(a), b.dealGoodsListJt(), b.dealRightsListJt(), t.report && window.csdn.report.viewCheck();
    },
    dealGoodsListJt: function () {
      b.goodsTransX = cc11001100_hook("b.goodsTransX", 0, "assign"), b.listScrollWidth = cc11001100_hook("b.listScrollWidth", s(".ordertip_c_goodslist_scroll").width() || 0, "assign"), b.listBoxWidth = cc11001100_hook("b.listBoxWidth", s(".ordertip_c_goodslist").width() || 626, "assign"), b.listBoxWidth >= b.listScrollWidth ? s("#user-ordertip-box .list_btn").hide() : s("#user-ordertip-box .btn_left").hide().siblings(".btn_right").show(), s(".ordertip_c_goodslist_scroll").css("transform", "translateX(0px)");
    },
    dealRightsListJt: function () {
      b.rightsTransX = cc11001100_hook("b.rightsTransX", 0, "assign"), b.rightsScrollWidth = cc11001100_hook("b.rightsScrollWidth", s(".ordertip_rights_scroll").width() || 0, "assign"), b.rightsBoxWidth = cc11001100_hook("b.rightsBoxWidth", s(".ordertip_rights_box").width() || 626, "assign"), b.rightsBoxWidth >= b.rightsScrollWidth ? s("#user-ordertip-box .rights_btn").hide() : s("#user-ordertip-box .rights_btn_left").hide().siblings(".rights_btn_right").show(), s(".ordertip_rights_scroll").css("transform", "translateX(0px)");
    },
    createMask: function () {
      var t = cc11001100_hook("t", i.createElement("div"), "var-init");
      t.id = cc11001100_hook("t.id", "user-ordertip-box", "assign"), i.body.appendChild(t);
    },
    getVipGoodsList: function (t) {
      s.ajax({
        url: cc11001100_hook("url", n() + "mp/mallorder/api/internal/goods/showListV2?abTest=Y&showType=vipForPopup,superVipForPopup", "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (i) {
          i.data ? (b.tabList.forEach(function (t) {
            t.list = cc11001100_hook("t.list", i.data[t.key] || [], "assign");
          }), b.goodsList = cc11001100_hook("b.goodsList", b.tabList.find(function (t) {
            return t.key === b.activeTab;
          }).list || [], "assign"), t && t(b.findDefaultGood(b.goodsList))) : void 0;
        },
        error: function (t) {
          void 0;
        }
      });
    },
    getGoodsInfo: function (t, i) {
      var e = cc11001100_hook("e", !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], "var-init");
      t.ext && delete t.ext, s.ajax({
        url: cc11001100_hook("url", n() + "mp/mallorder/api/internal/goods/getGoodsInfo", "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        data: cc11001100_hook("data", o(t, {
          goods_id: cc11001100_hook("goods_id", t.goodsId, "object-key-init"),
          product_id: cc11001100_hook("product_id", t.productId, "object-key-init")
        }), "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (s) {
          200 == s.code && s.data ? (19 === s.data.flag && (b.isUseBalance = cc11001100_hook("b.isUseBalance", !1, "assign")), i && i(s.data), b.changePriceHtml(b.price), e && b.getPayCode(s.data), b.getVipRights(t.rightsGoodsId)) : void 0;
        },
        error: function (t) {
          void 0;
        }
      });
    },
    getVipRights: function (t) {
      if (t) return b.vipRightsObj[t] ? (s("#user-ordertip .ordertip_rights_box").html(b.setVipRightsHtml(t)), void b.dealRightsListJt()) : void s.ajax({
        url: cc11001100_hook("url", n() + "mp/mallorder/vip_plugin/vip_card/get_permission?goodsId=" + t, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (i) {
          i.data ? (b.vipRightsObj[t] = cc11001100_hook("b.vipRightsObj[t]", i.data, "assign"), s("#user-ordertip .ordertip_rights_box").html(b.setVipRightsHtml(t)), b.dealRightsListJt()) : void 0;
        },
        error: function (t) {
          void 0;
        }
      });
    },
    getUserInfo: function () {
      s.ajax({
        url: cc11001100_hook("url", n() + "mp/mallorder/vip_plugin/vip_buy/get_user_info", "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (t) {
          t.data ? (b.userInfo = cc11001100_hook("b.userInfo", t.data, "assign"), s("#user-ordertip .ordertip_header").prepend(b.setUserInfoHtml())) : void 0;
        },
        error: function (t) {
          void 0;
        }
      });
    },
    goodsCodeData: function () {
      var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, "var-init"),
        i = cc11001100_hook("i", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, "var-init"),
        s = cc11001100_hook("s", arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      o = cc11001100_hook("o", this.isUseBalance ? t - s - i < 0 ? 0 : (100 * t - 100 * s - 100 * i) / 100 : t - s < 0 ? 0 : (100 * t - 100 * s) / 100, "assign"), this.price = cc11001100_hook("this.price", Number(o).toFixed(2), "assign");
    },
    changePriceHtml: function () {
      var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, "var-init");
      Number(t) <= 0 ? (s(".ordertip_dialog .recharge_mode").addClass("none"), s(".ordertip_dialog .recharge_mode_btn").addClass("show").removeClass("none")) : (s(".ordertip_dialog .recharge_mode").removeClass("none"), s(".ordertip_dialog .recharge_mode_btn").removeClass("show").addClass("none")), s(".ordertip_dialog .amount_actually .num b").html(t);
    },
    getPayCode: function () {
      var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b.goodsInfo, "var-init"),
        i = cc11001100_hook("i", {
          product_id: cc11001100_hook("product_id", t.product_id, "object-key-init"),
          goods_id: cc11001100_hook("goods_id", t.goods_id, "object-key-init"),
          goodsSource: cc11001100_hook("goodsSource", t.goodsSource || "", "object-key-init"),
          flag: cc11001100_hook("flag", t.flag, "object-key-init"),
          sale_source: cc11001100_hook("sale_source", b.sale, "object-key-init"),
          report_ext: cc11001100_hook("report_ext", b.reportExt, "object-key-init"),
          is_use_balance: cc11001100_hook("is_use_balance", Number(b.isUseBalance), "object-key-init"),
          coupon_key: cc11001100_hook("coupon_key", t.coupon_key, "object-key-init"),
          cash_coupon_keys: cc11001100_hook("cash_coupon_keys", t.cash_coupon_keys, "object-key-init"),
          use_cache: cc11001100_hook("use_cache", !0, "object-key-init"),
          success_function: cc11001100_hook("success_function", d, "object-key-init"),
          error_function: cc11001100_hook("error_function", c, "object-key-init"),
          timeout_function: cc11001100_hook("timeout_function", l, "object-key-init"),
          payment_function: cc11001100_hook("payment_function", p, "object-key-init"),
          get_pay_success_callback: cc11001100_hook("get_pay_success_callback", g, "object-key-init")
        }, "var-init");
      b._cart.qrPay(i);
    },
    findDefaultGood: function () {
      var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], "var-init"),
        i = cc11001100_hook("i", t.find(function (t, i, s) {
          return s[i].index = cc11001100_hook("s[i].index", i, "assign"), 1 === t.ext.default;
        }) || t[0], "var-init");
      return o({
        goods_id: cc11001100_hook("goods_id", i.ext.goodsId || "", "object-key-init"),
        flag: cc11001100_hook("flag", i.ext.flag || "", "object-key-init"),
        product_id: cc11001100_hook("product_id", i.ext.productId || "", "object-key-init")
      }, i.ext);
    },
    moveTab: function (t) {
      var i = cc11001100_hook("i", s(".ordertip_c_goodslist_scroll"), "var-init");
      "left" == t ? (b.goodsTransX >= 0 || Math.abs(b.goodsTransX) < 2.5 * b.goodsTabWidth ? (b.goodsTransX = cc11001100_hook("b.goodsTransX", 0, "assign"), s("#user-ordertip .btn_left").hide()) : b.goodsTransX += cc11001100_hook("b.goodsTransX", b.goodsTabWidth, "assign"), s("#user-ordertip .btn_right").show(), i.css("transform", "translateX(" + b.goodsTransX + "px)")) : (Math.abs(b.goodsTransX) + b.listBoxWidth >= b.listScrollWidth || b.listScrollWidth - b.listBoxWidth - Math.abs(b.goodsTransX) < 2.5 * b.goodsTabWidth ? (b.goodsTransX = cc11001100_hook("b.goodsTransX", -(b.listScrollWidth - b.listBoxWidth), "assign"), s("#user-ordertip .btn_right").hide()) : b.goodsTransX -= cc11001100_hook("b.goodsTransX", b.goodsTabWidth, "assign"), s("#user-ordertip .btn_left").show(), b.goodsTransX -= cc11001100_hook("b.goodsTransX", 10, "assign"), i.css("transform", "translateX(" + b.goodsTransX + "px)"));
    },
    moveRightsCard: function (t) {
      var i = cc11001100_hook("i", s(".ordertip_rights_scroll"), "var-init");
      "left" == t ? (b.rightsTransX >= 0 || Math.abs(b.rightsTransX) < 2.5 * b.rightsTabWidth ? (b.rightsTransX = cc11001100_hook("b.rightsTransX", 0, "assign"), s("#user-ordertip .rights_btn_left").hide()) : b.rightsTransX += cc11001100_hook("b.rightsTransX", b.rightsTabWidth, "assign"), s("#user-ordertip .rights_btn_right").show(), i.css("transform", "translateX(" + b.rightsTransX + "px)")) : (Math.abs(b.rightsTransX) + b.rightsBoxWidth >= b.rightsScrollWidth || b.rightsScrollWidth - b.rightsBoxWidth - Math.abs(b.rightsTransX) < 2.5 * b.rightsTabWidth ? (b.rightsTransX = cc11001100_hook("b.rightsTransX", -(b.rightsScrollWidth - b.rightsBoxWidth), "assign"), s("#user-ordertip .rights_btn_right").hide()) : b.rightsTransX -= cc11001100_hook("b.rightsTransX", b.rightsTabWidth, "assign"), s("#user-ordertip .rights_btn_left").show(), b.rightsTransX -= cc11001100_hook("b.rightsTransX", 10, "assign"), i.css("transform", "translateX(" + b.rightsTransX + "px)"));
    }
  }, "assign");
  var k = cc11001100_hook("k", void 0, "var-init"),
    C = cc11001100_hook("C", function (t, i) {
      var s = cc11001100_hook("s", null, "var-init");
      return function () {
        var o = cc11001100_hook("o", this, "var-init"),
          e = cc11001100_hook("e", arguments, "var-init");
        s && (clearTimeout(s), s = cc11001100_hook("s", null, "assign")), s = cc11001100_hook("s", setTimeout(function () {
          t.apply(o, e);
        }, i), "assign");
      };
    }(function (t) {
      void 0, y || (y = cc11001100_hook("y", !0, "assign"), w = cc11001100_hook("w", new Date().getTime(), "assign"), k = cc11001100_hook("k", new u(), "assign"), k.show(t), window._userOrderTip = cc11001100_hook("window._userOrderTip", k, "assign"));
    }, 200), "var-init");
  window.csdn.userOrderTip = cc11001100_hook("window.csdn.userOrderTip", {
    show: cc11001100_hook("show", C, "object-key-init"),
    close: cc11001100_hook("close", f, "object-key-init")
  }, "assign");
}(window.csdn = cc11001100_hook("window.csdn", window.csdn || {}, "assign"), document, jQuery);