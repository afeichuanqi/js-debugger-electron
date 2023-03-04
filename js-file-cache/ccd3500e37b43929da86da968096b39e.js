"use strict";

!function (t, e) {
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e,
      n = cc11001100_hook("n", new RegExp("(^| )" + t + "=([^;]*)(;|$)"), "var-init");
    return (e = cc11001100_hook("e", document.cookie.match(n), "assign")) ? unescape(e[2]) : null;
  }
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    for (var e = cc11001100_hook("e", document.cookie.split(";"), "var-init"), n = cc11001100_hook("n", {}, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < e.length; i++) {
      var r = cc11001100_hook("r", e[i].split("="), "var-init"),
        o = cc11001100_hook("o", r[0], "var-init");
      r.shift();
      var s = cc11001100_hook("s", r.join("="), "var-init");
      t && o.toString().trim().lastIndexOf("_app") === o.toString().trim().length - "_app".length ? n[o.toString().trim().replace("_app", "")] = cc11001100_hook("n[o.toString().trim().replace(\"_app\", \"\")]", s, "assign") : t || 0 !== o.toString().trim().indexOf("c_") || (n[o.toString().trim()] = cc11001100_hook("n[o.toString().trim()]", s, "assign"));
    }
    return n;
  }
  function r() {
    var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init");
    return t.product_id = cc11001100_hook("t.product_id", t.product_id || 0, "assign"), t.goods_id = cc11001100_hook("t.goods_id", t.goods_id || 0, "assign"), t.num = cc11001100_hook("t.num", t.num || 1, "assign"), t.is_ajax = cc11001100_hook("t.is_ajax", t.is_ajax || 1, "assign"), t.t = cc11001100_hook("t.t", t.t || new Date().getTime(), "assign"), t.device_id = cc11001100_hook("t.device_id", s(), "assign"), t.device_type = cc11001100_hook("t.device_type", u(), "assign"), t.utm_source_ext = cc11001100_hook("t.utm_source_ext", c(t.report_ext || {}), "assign"), t;
  }
  function o() {
    return !!t.navigator.userAgent.toLowerCase().match(/(csdn)/i);
  }
  function s() {
    var t = cc11001100_hook("t", n("X-App-ID") || "", "var-init");
    return "CSDN-APP" == t || "CSDN-EDU" == t ? n("X-Device-ID") || "" : n("uuid_tt_dd") || "";
  }
  function a(e) {
    cc11001100_hook("e", e, "function-parameter");
    var n = cc11001100_hook("n", new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), "var-init"),
      i = cc11001100_hook("i", t.location.search.substr(1).match(n), "var-init");
    return null != i ? unescape(i[2]) : null;
  }
  function c(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", {}, "var-init");
    return e = cc11001100_hook("e", i(o()), "assign"), o() ? e.dc_sid = cc11001100_hook("e.dc_sid", n("dc_sid_app") || "", "assign") : e.dc_sid = cc11001100_hook("e.dc_sid", n("dc_sid") || "", "assign"), JSON.stringify(Object.assign(e, t));
  }
  function u() {
    var t,
      e = cc11001100_hook("e", g.isEDUIos(), "var-init"),
      i = cc11001100_hook("i", g.isEDUAndroid(), "var-init"),
      r = cc11001100_hook("r", g.isAndroid(), "var-init"),
      o = cc11001100_hook("o", n("X-App-ID") || "", "var-init"),
      s = cc11001100_hook("s", n("X-OS") || "", "var-init");
    return g.isWap() || (t = cc11001100_hook("t", 10, "assign")), g.isMac() && (t = cc11001100_hook("t", 11, "assign")), g.isWap() && (t = cc11001100_hook("t", 9, "assign")), i && r && (t = cc11001100_hook("t", 3, "assign")), e && (t = cc11001100_hook("t", 4, "assign")), "CSDN-APP" == o && "Android" == s && (t = cc11001100_hook("t", 1, "assign")), "CSDN-APP" == o && "iOS" == s && (t = cc11001100_hook("t", 2, "assign")), "CSDN-EDU" == o && "Android" == s && (t = cc11001100_hook("t", 3, "assign")), "CSDN-EDU" == o && "iOS" == s && (t = cc11001100_hook("t", 4, "assign")), t;
  }
  function d() {
    var e = cc11001100_hook("e", a("api_env"), "var-init"),
      n = cc11001100_hook("n", t.location.host, "var-init"),
      i = cc11001100_hook("i", "https://mall.csdn.net/", "var-init"),
      r = cc11001100_hook("r", document.getElementsByTagName("meta").ordercart, "var-init");
    !e && r && r.content && r.content.length ? n = cc11001100_hook("n", JSON.parse(r.content).api_env, "assign") : e && (n = cc11001100_hook("n", e, "assign"));
    var o = cc11001100_hook("o", /^beta|test|loc[a-z]*/, "var-init");
    return n.indexOf(".blog.csdn.net") >= 0 ? (i = cc11001100_hook("i", "https://mall.csdn.net/", "assign"), h = cc11001100_hook("h", "prod", "assign")) : n.match(o) ? (i = cc11001100_hook("i", "https://test-mall.csdn.net/", "assign"), h = cc11001100_hook("h", "test", "assign")) : n.match(/^pre-|pre[a-z]*/) && (h = cc11001100_hook("h", "pre", "assign"), i = cc11001100_hook("i", "https://pre-mall.csdn.net/", "assign")), i;
  }
  function l() {
    var t = cc11001100_hook("t", "", "var-init");
    return "pre" == h ? t = cc11001100_hook("t", "pre-", "assign") : "test" == h && (t = cc11001100_hook("t", "test-", "assign")), t;
  }
  function p(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", "", "var-init");
    for (var n in t) "function" != typeof t[n] && (e += cc11001100_hook("e", n + "=" + t[n] + "&", "assign"));
    return "?" + (e = cc11001100_hook("e", e.substr(0, e.length - 1), "assign"));
  }
  function m() {
    if (t.csdn.loginBox && t.csdn.loginBox.show) t.csdn.loginBox.show();else {
      var e = cc11001100_hook("e", "https://passport.csdn.net/", "var-init");
      o() ? t.location.href = cc11001100_hook("t.location.href", e + "account/login", "assign") : ("test" == h && (e = cc11001100_hook("e", "https://test-passport.csdn.net/", "assign")), t.location.href = cc11001100_hook("t.location.href", e + "account/login?from=" + encodeURIComponent(location.href), "assign"));
    }
  }
  function f() {
    this.timer = cc11001100_hook("this.timer", 0, "assign"), this.timershow = cc11001100_hook("this.timershow", 0, "assign"), this.ident = cc11001100_hook("this.ident", !0, "assign"), this.pay_code_timeout = cc11001100_hook("this.pay_code_timeout", 3e5, "assign"), this.get_status_sec = cc11001100_hook("this.get_status_sec", 3e3, "assign"), this.timeout_time = cc11001100_hook("this.timeout_time", 1e4, "assign"), this.payment_flag = cc11001100_hook("this.payment_flag", 0, "assign"), this.payment_function = cc11001100_hook("this.payment_function", null, "assign"), this.no_login = cc11001100_hook("this.no_login", 0, "assign"), this.orderNo = cc11001100_hook("this.orderNo", "", "assign"), this.cart_url = cc11001100_hook("this.cart_url", d(), "assign"), this.prefix_domain = cc11001100_hook("this.prefix_domain", l(), "assign"), this.get_status_url = cc11001100_hook("this.get_status_url", this.cart_url + "mp/mallorder/pay/getStatus", "assign"), this.order_number = cc11001100_hook("this.order_number", "", "assign"), this.deviceDistinguish = cc11001100_hook("this.deviceDistinguish", g, "assign");
  }
  var _ = cc11001100_hook("_", null, "var-init"),
    h = cc11001100_hook("h", "prod", "var-init"),
    g = cc11001100_hook("g", {
      ua: cc11001100_hook("ua", t.navigator.userAgent.toLowerCase(), "object-key-init"),
      isEDUIos: function () {
        return /(?:csdnedu-ipad)/.test(this.ua);
      },
      isEDUAndroid: function () {
        return /(?:csdnedu)/.test(this.ua);
      },
      isAndroid: function () {
        return /(?:android)/.test(this.ua);
      },
      isWindowsPhone: function () {
        return /(?:windows phone)/.test(this.ua);
      },
      isSymbian: function () {
        return /(?:symbianos)/.test(this.ua) || this.isWindowsPhone;
      },
      isFireFox: function () {
        return /(?:firefox)/.test(this.ua);
      },
      isChrome: function () {
        return /(?:chrome|crios)/.test(this.ua);
      },
      isTablet: function () {
        return /(?:ipad|playbook)/.test(this.ua) || this.isAndroid && !/(?:mobile)/.test(this.ua) || this.isFireFox && /(?:tablet)/.test(this.ua);
      },
      isPhone: function () {
        return /(?:iphone)/.test(this.ua) && !this.isTablet;
      },
      isPc: function () {
        return !this.isPhone && !this.isAndroid && !this.isSymbian;
      },
      isWechatdevtools: function () {
        return /wechatdevtools/.test(this.ua);
      },
      isMac: function () {
        return t.navigator.platform.toLocaleLowerCase().indexOf("mac") > -1;
      },
      isMicromessenger: function () {
        return /micromessenger/.test(this.ua);
      },
      isWap: function () {
        return !!this.ua.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
      }
    }, "var-init");
  f.prototype = cc11001100_hook("f.prototype", {
    constructor: cc11001100_hook("constructor", f, "object-key-init"),
    setDefaultDate: cc11001100_hook("setDefaultDate", r, "object-key-init"),
    clearTimer: function (t) {
      void 0 !== this.timer && clearInterval(this.timer), void 0 !== this.timershow && clearInterval(this.timershow);
    },
    buyNow: function (e) {
      var n = cc11001100_hook("n", document.location.protocol, "var-init"),
        i = cc11001100_hook("i", "", "var-init");
      i = cc11001100_hook("i", this.deviceDistinguish.isWap() ? "order.csdn.net/v2/m/submit" : "order.csdn.net/v2/order-m/submit", "assign"), t.location.href = cc11001100_hook("t.location.href", n + "//" + this.prefix_domain + i + p(e), "assign");
    },
    buyNowMall: function (n) {
      var i = cc11001100_hook("i", document.location.protocol, "var-init"),
        o = cc11001100_hook("o", this, "var-init"),
        s = cc11001100_hook("s", "", "var-init");
      s = cc11001100_hook("s", this.deviceDistinguish.isWap() ? "order.csdn.net/v2/3/submit-m" : "order.csdn.net/v2/3/submit", "assign"), n.params && n.params.utmSourceExt || (n.params.utmSourceExt = cc11001100_hook("n.params.utmSourceExt", {}, "assign"));
      var a = cc11001100_hook("a", r(), "var-init");
      Object.assign(n.params.utmSourceExt, Object.assign(JSON.parse(decodeURIComponent(a.utm_source_ext || "{}")), {
        device_id: cc11001100_hook("device_id", a.device_id || "", "object-key-init"),
        device_type: cc11001100_hook("device_type", a.device_type || "", "object-key-init")
      }));
      var c = cc11001100_hook("c", e.ajax({
        type: cc11001100_hook("type", "post", "object-key-init"),
        url: cc11001100_hook("url", o.cart_url + "mp/mallorder/order/buyNow", "object-key-init"),
        data: cc11001100_hook("data", JSON.stringify(n.params), "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        timeout: cc11001100_hook("timeout", o.timeout_time, "object-key-init"),
        success: function (e) {
          if (200 == e.code) {
            var r = cc11001100_hook("r", n.extra || {}, "var-init");
            return r.cartId = cc11001100_hook("r.cartId", e.data.cartId, "assign"), s = cc11001100_hook("s", i + "//" + o.prefix_domain + s + p(r), "assign"), n.success ? n.success({
              code: cc11001100_hook("code", 200, "object-key-init"),
              data: {
                cartId: cc11001100_hook("cartId", e.data.cartId, "object-key-init"),
                url: cc11001100_hook("url", s, "object-key-init")
              }
            }) : t.location.href = cc11001100_hook("t.location.href", s, "assign"), !1;
          }
          401 == e.code ? m() : n.fail && n.fail({
            code: cc11001100_hook("code", 15, "object-key-init"),
            errorMessage: cc11001100_hook("errorMessage", "提交订单失败", "object-key-init")
          });
        },
        error: function (t) {
          if (401 == t.code) return void m();
          n.fail && n.fail({
            status: cc11001100_hook("status", 15, "object-key-init"),
            errorMessage: cc11001100_hook("errorMessage", "提交订单失败", "object-key-init")
          });
        },
        complete: function (t, e) {
          "timeout" === e && c.abort();
        }
      }), "var-init");
    },
    qrPay: function (t) {
      var n,
        i,
        o,
        s = cc11001100_hook("s", this, "var-init");
      t = cc11001100_hook("t", r(t), "assign"), "function" == typeof t.success_function && (n = cc11001100_hook("n", t.success_function, "assign"), delete t.success_function), "function" == typeof t.error_function && (i = cc11001100_hook("i", t.error_function, "assign"), delete t.error_function), "function" == typeof t.timeout_function && (o = cc11001100_hook("o", t.timeout_function, "assign"), delete t.timeout_function), "function" == typeof t.payment_function ? (s.payment_function = cc11001100_hook("s.payment_function", t.payment_function, "assign"), delete t.payment_function) : s.payment_function = cc11001100_hook("s.payment_function", null, "assign"), "function" == typeof t.get_pay_success_callback && (_ = cc11001100_hook("_", t.get_pay_success_callback, "assign"), delete t.get_pay_success_callback), s.payment_flag = cc11001100_hook("s.payment_flag", 0, "assign"), t.resultJSON = cc11001100_hook("t.resultJSON", 1, "assign");
      var a = cc11001100_hook("a", e.ajax({
        type: cc11001100_hook("type", "get", "object-key-init"),
        url: cc11001100_hook("url", s.cart_url + "mp/mallorder/pay/qrPay", "object-key-init"),
        data: cc11001100_hook("data", t, "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        timeout: cc11001100_hook("timeout", s.timeout_time, "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (e) {
          if (1 === e.status) return n(t.request_type, e), s.orderNo = cc11001100_hook("s.orderNo", e.orderNo, "assign"), s.clearTimer(), s.get_status_url = cc11001100_hook("s.get_status_url", e.get_status_url, "assign"), !0 !== t.isClearTimer && (s.timer = cc11001100_hook("s.timer", setInterval(function () {
            s.get_pay_status();
          }, s.get_status_sec), "assign")), s.timershow = cc11001100_hook("s.timershow", setInterval(function () {
            o(), s.clearTimer();
          }, s.pay_code_timeout), "assign"), !1;
          i(e);
        },
        error: function () {
          i({
            status: cc11001100_hook("status", 15, "object-key-init"),
            errorMessage: cc11001100_hook("errorMessage", "获取二维码失败", "object-key-init")
          });
        },
        complete: function (t, e) {
          "timeout" === e && a.abort();
        }
      }), "var-init");
    },
    get_pay_status: function () {
      var t = cc11001100_hook("t", arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, "var-init"),
        n = cc11001100_hook("n", this, "var-init");
      "function" == typeof t.payment_function && (n.payment_function = cc11001100_hook("n.payment_function", t.payment_function, "assign")), "function" == typeof t.get_pay_success_callback && (_ = cc11001100_hook("_", t.get_pay_success_callback, "assign")), t.get_status_url && (n.get_status_url = cc11001100_hook("n.get_status_url", t.get_status_url, "assign"));
      var i = cc11001100_hook("i", {
        type: cc11001100_hook("type", n.request_type, "object-key-init"),
        no_login: cc11001100_hook("no_login", n.no_login, "object-key-init"),
        flag: cc11001100_hook("flag", 1, "object-key-init"),
        t: cc11001100_hook("t", new Date().getTime(), "object-key-init"),
        is_ajax: cc11001100_hook("is_ajax", 1, "object-key-init"),
        resultJSON: cc11001100_hook("resultJSON", 1, "object-key-init")
      }, "var-init");
      if (n.order_number && (i.order_number = cc11001100_hook("i.order_number", n.order_number, "assign")), !1 === n.ident) return !1;
      n.ident = cc11001100_hook("n.ident", !1, "assign"), e.ajax({
        type: cc11001100_hook("type", "get", "object-key-init"),
        url: cc11001100_hook("url", n.get_status_url, "object-key-init"),
        async: cc11001100_hook("async", !1, "object-key-init"),
        data: cc11001100_hook("data", i, "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        timeout: cc11001100_hook("timeout", n.timeout_time, "object-key-init"),
        crossDomain: cc11001100_hook("crossDomain", !0, "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (t) {
          n.getStatusSuccess(t);
        },
        error: function () {
          n.ident = cc11001100_hook("n.ident", !0, "assign");
        }
      });
    },
    getStatusSuccess: function (e) {
      var n = cc11001100_hook("n", this, "var-init");
      1 === e.status ? (n.ident = cc11001100_hook("n.ident", !1, "assign"), n.clearTimer(), n.delScanPayCache(), null !== _ ? _(e) : setTimeout(function () {
        t.location.replace(e.url);
      }, 300)) : 3 === e.status ? (0 === n.payment_flag && "function" == typeof n.payment_function && (n.payment_flag = cc11001100_hook("n.payment_flag", 1, "assign"), n.payment_function(e)), n.ident = cc11001100_hook("n.ident", !0, "assign")) : 0 === e.status ? (void 0, n.ident = cc11001100_hook("n.ident", !1, "assign")) : n.ident = cc11001100_hook("n.ident", !0, "assign");
    },
    delScanPayCache: function () {
      new Image().src = cc11001100_hook("new Image().src", this.cart_url + "mp/mallorder/pay/delScanPayCache?key=" + this.orderNo, "assign");
    },
    quickBuy: function (t) {
      var n = cc11001100_hook("n", this, "var-init"),
        i = cc11001100_hook("i", r(t.params), "var-init");
      e.ajax({
        type: cc11001100_hook("type", "post", "object-key-init"),
        url: cc11001100_hook("url", n.cart_url + "mp/mallorder/order/quickBuy", "object-key-init"),
        data: cc11001100_hook("data", JSON.stringify(i), "object-key-init"),
        dataType: cc11001100_hook("dataType", "json", "object-key-init"),
        contentType: cc11001100_hook("contentType", "application/json", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        timeout: cc11001100_hook("timeout", n.timeout_time, "object-key-init"),
        success: function (e) {
          200 === e.code ? (n.clearTimer(), t.get_pay_success_callback && t.get_pay_success_callback(e)) : 400103012 === e.code ? t.error_function && t.error_function({
            status: cc11001100_hook("status", 400103012, "object-key-init"),
            errorMessage: cc11001100_hook("errorMessage", "余额不足", "object-key-init")
          }) : 401 == e.code ? m() : (void 0, t.error_function && t.error_function({
            status: cc11001100_hook("status", 15, "object-key-init"),
            errorMessage: cc11001100_hook("errorMessage", "提交订单失败", "object-key-init")
          }));
        },
        error: function (e) {
          if (401 == e.code) return void m();
          t.error_function && t.error_function({
            status: cc11001100_hook("status", 15, "object-key-init"),
            errorMessage: cc11001100_hook("errorMessage", "提交订单失败", "object-key-init")
          });
        },
        complete: function (t, e) {
          "timeout" === e && qrPayAjax.abort();
        }
      });
    }
  }, "assign"), t.csdn = cc11001100_hook("t.csdn", t.csdn || {}, "assign"), t.csdn.cart = cc11001100_hook("t.csdn.cart", new f(), "assign"), t.cart = cc11001100_hook("t.cart", new f(), "assign"), t.csdn.cartClass = cc11001100_hook("t.csdn.cartClass", f, "assign");
}(window, jQuery);