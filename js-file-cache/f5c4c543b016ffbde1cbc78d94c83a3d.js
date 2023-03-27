var QueueIt;
function queueClient(e, t, i) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("i", i, "function-parameter");
  var o;
  return 5 <= arguments.length && (o = cc11001100_hook("o", arguments[4], "assign")), "object" == typeof i && (o = cc11001100_hook("o", i, "assign")), o = cc11001100_hook("o", o || new QueueIt.Javascript.Options(), "assign"), null == i || isNaN(i) || (o.validity = cc11001100_hook("o.validity", Number(i), "assign")), null != arguments[3] && "string" == typeof arguments[3] && (o.culture = cc11001100_hook("o.culture", arguments[3], "assign")), new QueueIt.Javascript.QueueClient(e, t, o);
}
!function (e) {
  !function (e) {
    var t = cc11001100_hook("t", (p.retrieveEnvInfoFromScriptTag = cc11001100_hook("p.retrieveEnvInfoFromScriptTag", function () {
      if (p.environemntVariable) return p.environemntVariable;
      try {
        for (var e = cc11001100_hook("e", document.getElementsByTagName("script"), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) {
          var i = cc11001100_hook("i", e[t], "var-init"),
            o = cc11001100_hook("o", i.getAttribute("data-queueit-c"), "var-init");
          if (o) {
            var n = cc11001100_hook("n", i.getAttribute("data-queueit-host") || "", "var-init"),
              r = cc11001100_hook("r", "true" == (i.getAttribute("data-queueit-intercept") || "").toLowerCase(), "var-init"),
              u = cc11001100_hook("u", null !== i.getAttribute("data-queueit-interceptvnext"), "var-init"),
              a = cc11001100_hook("a", i.getAttribute("data-queueit-intercept-domain") || "", "var-init"),
              s = cc11001100_hook("s", i.getAttribute("data-queueit-jshost") || "", "var-init"),
              c = cc11001100_hook("c", "true" == (i.getAttribute("data-queueit-nocachereq") || "").toLowerCase(), "var-init"),
              l = cc11001100_hook("l", "true" == (i.getAttribute("data-queueit-noautorun") || "").toLowerCase(), "var-init"),
              h = cc11001100_hook("h", i.getAttribute("data-queueit-ku-redirect-headername") || "", "var-init"),
              d = cc11001100_hook("d", "true" === (i.getAttribute("data-queueit-spa") || "").toLowerCase(), "var-init");
            return p.environemntVariable = cc11001100_hook("p.environemntVariable", {
              cid: cc11001100_hook("cid", o, "object-key-init"),
              intercept: cc11001100_hook("intercept", r, "object-key-init"),
              interceptVNext: cc11001100_hook("interceptVNext", u, "object-key-init"),
              host: cc11001100_hook("host", n, "object-key-init"),
              jsHost: cc11001100_hook("jsHost", s, "object-key-init"),
              noCacheRequest: cc11001100_hook("noCacheRequest", c, "object-key-init"),
              noAutorun: cc11001100_hook("noAutorun", l, "object-key-init"),
              domainToIntercept: cc11001100_hook("domainToIntercept", a, "object-key-init"),
              queueitKURedirectHeaderName: cc11001100_hook("queueitKURedirectHeaderName", h, "object-key-init"),
              isSPA: cc11001100_hook("isSPA", d, "object-key-init")
            }, "assign");
          }
        }
      } catch (e) {
        console.warn(e);
      }
      return null;
    }, "assign"), p.cleanUp = cc11001100_hook("p.cleanUp", function () {
      p.environemntVariable = cc11001100_hook("p.environemntVariable", void 0, "assign");
    }, "assign"), p), "var-init");
    function p() {}
    e.EnvironmentHelper = cc11001100_hook("e.EnvironmentHelper", t, "assign");
    function i() {}
    e.EnvironmentInfo = cc11001100_hook("e.EnvironmentInfo", i, "assign");
  }(e.Tools || (e.Tools = cc11001100_hook("e.Tools", {}, "assign")));
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (e) {
  (e.Javascript || (e.Javascript = cc11001100_hook("e.Javascript", {}, "assign"))).Version = cc11001100_hook("(e.Javascript || (e.Javascript = {})).Version", "2.0.48", "assign");
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (e) {
  var t, i, o;
  function n(e, t, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    void 0 === t && (t = cc11001100_hook("t", null, "assign")), void 0 === i && (i = cc11001100_hook("i", null, "assign")), this.queryStringPrefix = cc11001100_hook("this.queryStringPrefix", t || "", "assign"), this.client = cc11001100_hook("this.client", e, "assign"), this.urlUtil = cc11001100_hook("this.urlUtil", i, "assign"), this.urlUtil || (this.urlUtil = cc11001100_hook("this.urlUtil", {
      getPathName: function () {
        return document.location.pathname;
      },
      getSearch: function () {
        return document.location.search;
      },
      getHash: function () {
        return document.location.hash;
      },
      replaceHistory: function (e) {
        return window.history.replaceState(window.history.state, document.title, e);
      }
    }, "assign"));
  }
  t = cc11001100_hook("t", e.Javascript || (e.Javascript = cc11001100_hook("e.Javascript", {}, "assign")), "assign"), i = cc11001100_hook("i", t.Addons || (t.Addons = cc11001100_hook("t.Addons", {}, "assign")), "assign"), n.prototype.removeTokenFromUrl = cc11001100_hook("n.prototype.removeTokenFromUrl", function () {
    if (window.history && window.history.replaceState) {
      var e = cc11001100_hook("e", this.urlUtil.getSearch(), "var-init"),
        t = cc11001100_hook("t", "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}", "var-init");
      e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", (e = cc11001100_hook("e", this.tryRemoveQueueITToken(e), "assign")).replace(this.generateRegex("q", t), "$1"), "assign")).replace(this.generateRegex("p", t), "$1"), "assign")).replace(this.generateRegex("h", "[0-9a-f]{32}"), "$1"), "assign")).replace(this.generateRegex("rt", "[a-z]+"), ""), "assign")).replace(this.generateRegex("ts", "\\d+"), "$1"), "assign")).replace(this.generateRegex("e", "[a-z0-9]{3,20}"), "$1"), "assign")).replace(this.generateRegex("c", this.client.getCustomerId()), "$1"), "assign")).replace(/\?$/, ""), "assign")).replace(/&$/, ""), "assign")).replace(/\?#/, "#"), "assign");
      var i = cc11001100_hook("i", this.urlUtil.getPathName() + e + this.urlUtil.getHash(), "var-init");
      i = cc11001100_hook("i", i || "/", "assign"), this.urlUtil.replaceHistory(i);
    }
  }, "assign"), n.prototype.tryRemoveQueueITToken = cc11001100_hook("n.prototype.tryRemoveQueueITToken", function (e) {
    var t = cc11001100_hook("t", new RegExp("([?&])(queueittoken=([a-z0-9]|-|_|~)*&?)", "i"), "var-init");
    return e = cc11001100_hook("e", e.replace(t, "$1"), "assign");
  }, "assign"), n.prototype.generateRegex = cc11001100_hook("n.prototype.generateRegex", function (e, t) {
    return void 0 === t && (t = cc11001100_hook("t", "[^&]+", "assign")), new RegExp("([?&])(" + this.queryStringPrefix + e + "=" + t + "&?)", "i");
  }, "assign"), o = cc11001100_hook("o", n, "assign"), i.token = cc11001100_hook("i.token", o, "assign");
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), String.prototype.trim || (String.prototype.trim = cc11001100_hook("String.prototype.trim", function () {
  return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}, "assign")), function (h) {
  !function (a) {
    var o = cc11001100_hook("o", (e.prototype.add = cc11001100_hook("e.prototype.add", function (e) {
      this.clients.push(e), this[e.getEventId()] = cc11001100_hook("this[e.getEventId()]", e, "assign");
    }, "assign"), e.prototype.getAll = cc11001100_hook("e.prototype.getAll", function () {
      return this.clients;
    }, "assign"), e), "var-init");
    function e() {
      this.clients = cc11001100_hook("this.clients", new Array(), "assign");
    }
    a.QueueClientCustomerRepo = cc11001100_hook("a.QueueClientCustomerRepo", o, "assign");
    var n = cc11001100_hook("n", (t.prototype.set = cc11001100_hook("t.prototype.set", function (e, t, i) {
      this[e] || (this[e] = cc11001100_hook("this[e]", new o(), "assign")), this[e].add(i);
    }, "assign"), t.prototype.get = cc11001100_hook("t.prototype.get", function (e) {
      return this[e];
    }, "assign"), t), "var-init");
    function t() {}
    a.QueueClientRepository = cc11001100_hook("a.QueueClientRepository", n, "assign");
    var r = cc11001100_hook("r", (i.prototype.addTargetUrlParam = cc11001100_hook("i.prototype.addTargetUrlParam", function (e, t) {
      this.targetUrlParams.push(new u(e, t));
    }, "assign"), i), "var-init");
    function i() {
      this.targetUrlParams || (this.targetUrlParams = cc11001100_hook("this.targetUrlParams", new Array(), "assign"));
    }
    a.Options = cc11001100_hook("a.Options", r, "assign");
    var u = function (e, t) {
      if (this.key = cc11001100_hook("this.key", e, "assign"), this.value = cc11001100_hook("this.value", t, "assign"), !e || !e.match("^[a-zA-Z0-9_]+$")) throw new Error("Target URL parameter key '" + e + "' is invalid");
    };
    a.TargetUrlParam = cc11001100_hook("a.TargetUrlParam", u, "assign");
    function s() {}
    a.RedirectOptions = cc11001100_hook("a.RedirectOptions", s, "assign");
    var c = cc11001100_hook("c", (l.prototype.initialize = cc11001100_hook("l.prototype.initialize", function (e, t) {
      var i = cc11001100_hook("i", this, "var-init");
      this.options.removeTokenFromUrl && this.hasBeenThroughQueue(this.getCurrentUrl()) && new a.Addons.token(this, this.options.queryStringPrefix).removeTokenFromUrl();
      var o = cc11001100_hook("o", this.cookieManager.getValidationState(), "var-init");
      if (this.queueitTokenExist(this.getCurrentUrl()) ? this.queueClientIsEnabled = cc11001100_hook("this.queueClientIsEnabled", !0, "assign") : "verified" === o ? (this.options.extendValidity && this.cookieManager.extendCookie(this.validity), this.queueClientIsVerified = cc11001100_hook("this.queueClientIsVerified", !0, "assign"), this.queueClientIsEnabled = cc11001100_hook("this.queueClientIsEnabled", !0, "assign"), this.executeCallback(this.options.onVerified)) : "disabled" !== o || this.hasBeenThroughQueue(this.getCurrentUrl()) ? "timeout" !== o || this.hasBeenThroughQueue(this.getCurrentUrl()) ? this.queueClientIsEnabled = cc11001100_hook("this.queueClientIsEnabled", this.cookieManager.cookieIsEnabled(), "assign") : (this.queueClientIsEnabled = cc11001100_hook("this.queueClientIsEnabled", !1, "assign"), this.executeCallback(this.options.onTimeout)) : (this.queueClientIsEnabled = cc11001100_hook("this.queueClientIsEnabled", !1, "assign"), this.executeCallback(this.options.onDisabled)), !this.queueClientIsVerified && this.queueClientIsEnabled) {
        var n = cc11001100_hook("n", this.cookieManager.getQueueStateCookie(), "var-init"),
          r = cc11001100_hook("r", document.createElement("script"), "var-init");
        r.type = cc11001100_hook("r.type", "text/javascript", "assign"), r.src = cc11001100_hook("r.src", "https://" + this.options.host + "/javascriptqueue/" + e + "/" + t + "/" + new Date().getTime() + "?t=" + encodeURIComponent(this.getTargetUrl()) + "&ver=js" + h.Javascript.Version + (this.language ? "&cid=" + this.language : "") + (this.layoutName ? "&l=" + encodeURIComponent(this.layoutName) : "") + (n ? "&_cval=" + encodeURIComponent(n) + "&_cv=" + this.options.validity : "") + this.generateTargetUrlParams(), "assign"), r.async = cc11001100_hook("r.async", !0, "assign");
        var u = cc11001100_hook("u", document.getElementsByTagName("script")[0], "var-init");
        u.parentNode.insertBefore(r, u), this.timeoutTimer = cc11001100_hook("this.timeoutTimer", setTimeout(function () {
          i.cookieManager.setTimeoutState(), i.executeCallback(i.options.onTimeout);
        }, 5e3), "assign");
      }
    }, "assign"), l.prototype.getCustomerId = cc11001100_hook("l.prototype.getCustomerId", function () {
      return this.customerId;
    }, "assign"), l.prototype.getEventId = cc11001100_hook("l.prototype.getEventId", function () {
      return this.eventId;
    }, "assign"), l.prototype.enqueue = cc11001100_hook("l.prototype.enqueue", function (e) {
      if (e && (clearTimeout(this.timeoutTimer), !this.queueClientIsVerified && this.queueClientIsEnabled)) if (e.redirect) this.options.redirector(e.redirectUrl);else if (e.isError) this.executeCallback(this.options.onDisabled);else {
        this.cookieManager.setCookieValue(e.cookieValue, e.fixedCookieValidity || this.validity);
        var t = cc11001100_hook("t", this.cookieManager.getValidationState(), "var-init");
        if ("disabled" != t && !e.isError) {
          if ("verified" == t) return this.queueClientIsVerified = cc11001100_hook("this.queueClientIsVerified", !0, "assign"), void this.executeCallback(this.options.onVerified);
          throw "queueit could not set cookie.";
        }
        this.executeCallback(this.options.onDisabled);
      }
    }, "assign"), l.prototype.cancel = cc11001100_hook("l.prototype.cancel", function (e) {
      void 0 === e && (e = cc11001100_hook("e", null, "assign")), this.cancelSession(), this.cancelQueueItem(e);
    }, "assign"), l.prototype.cancelSession = cc11001100_hook("l.prototype.cancelSession", function () {
      this.cookieManager.cancelCookie();
    }, "assign"), l.prototype.cancelQueueItem = cc11001100_hook("l.prototype.cancelQueueItem", function (e) {
      void 0 === e && (e = cc11001100_hook("e", null, "assign"));
      var t = cc11001100_hook("t", "//" + this.options.host + "/cancel/" + this.customerId + "/" + this.eventId + "?t=" + encodeURIComponent(window.location.href), "var-init");
      e && (t = cc11001100_hook("t", t + "&r=" + encodeURIComponent(e), "assign")), this.options.redirector(t);
    }, "assign"), l.prototype.getTargetUrl = cc11001100_hook("l.prototype.getTargetUrl", function () {
      var e = cc11001100_hook("e", this.getCurrentUrl(), "var-init");
      return this.hasBeenThroughQueue(e) ? e : this.options.useEventTargetUrl ? "" : this.targetUrl ? this.targetUrl : e;
    }, "assign"), l.prototype.generateTargetUrlParams = cc11001100_hook("l.prototype.generateTargetUrlParams", function () {
      if (!this.options.useEventTargetUrl || !this.options.targetUrlParams) return "";
      for (var e = cc11001100_hook("e", "", "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < this.options.targetUrlParams.length; t++) {
        var i = cc11001100_hook("i", this.options.targetUrlParams[t], "var-init");
        e += cc11001100_hook("e", "&t_" + i.key + "=" + encodeURIComponent(i.value), "assign");
      }
      return e;
    }, "assign"), l.prototype.getCurrentUrl = cc11001100_hook("l.prototype.getCurrentUrl", function () {
      return this.options.currentUrl;
    }, "assign"), l.prototype.hasBeenThroughQueue = cc11001100_hook("l.prototype.hasBeenThroughQueue", function (e) {
      return e.match("[?&][a-zA-Z]{0,4}q=[0-9a-f-]{36}.*&[a-zA-Z]{0,4}h=[0-9a-f]{32}") || -1 < e.toLowerCase().indexOf("queueittoken");
    }, "assign"), l.prototype.queueitTokenExist = cc11001100_hook("l.prototype.queueitTokenExist", function (e) {
      return -1 < e.toLowerCase().indexOf("queueittoken");
    }, "assign"), l.prototype.executeCallback = cc11001100_hook("l.prototype.executeCallback", function (e) {
      if (e) try {
        e();
      } catch (e) {
        window.console && window.console.error("Error in onVerified callback: " + e.message);
      }
    }, "assign"), l), "var-init");
    function l(e, t, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      this.queueClientIsEnabled = cc11001100_hook("this.queueClientIsEnabled", !1, "assign"), this.queueClientIsVerified = cc11001100_hook("this.queueClientIsVerified", !1, "assign"), this.timeoutTimer = cc11001100_hook("this.timeoutTimer", null, "assign"), this.customerId = cc11001100_hook("this.customerId", e.toLowerCase().trim(), "assign"), this.eventId = cc11001100_hook("this.eventId", t.toLowerCase().trim(), "assign"), window.queueit || (window.queueit = cc11001100_hook("window.queueit", new n(), "assign")), window.queueit.set(this.customerId, this.eventId, this), (i = cc11001100_hook("i", i || new r(), "assign")).host || (i.host = cc11001100_hook("i.host", this.customerId + ".queue-it.net", "assign")), i.redirector || (i.redirector = cc11001100_hook("i.redirector", function (e) {
        window.location.href = cc11001100_hook("window.location.href", e, "assign"), document.close();
      }, "assign")), i.getCookies || (i.getCookies = cc11001100_hook("i.getCookies", function () {
        return document.cookie;
      }, "assign")), i.setCookie || (i.setCookie = cc11001100_hook("i.setCookie", function (e) {
        document.cookie = cc11001100_hook("document.cookie", e, "assign");
      }, "assign")), void 0 === i.extendValidity && (i.extendValidity = cc11001100_hook("i.extendValidity", !0, "assign")), i.currentUrl || (i.currentUrl = cc11001100_hook("i.currentUrl", window.location.href, "assign")), this.options = cc11001100_hook("this.options", i, "assign"), isNaN(i.validity) ? this.validity = cc11001100_hook("this.validity", 20, "assign") : this.validity = cc11001100_hook("this.validity", Number(i.validity), "assign"), this.language = cc11001100_hook("this.language", i.culture, "assign"), this.layoutName = cc11001100_hook("this.layoutName", i.layoutName, "assign"), this.targetUrl = cc11001100_hook("this.targetUrl", i.targetUrl, "assign"), i.createCookieManager || (i.createCookieManager = cc11001100_hook("i.createCookieManager", function (e, t, i, o, n, r, u) {
        return new a.CookieManager(e, t, i, o, n, r, u);
      }, "assign")), this.cookieManager = cc11001100_hook("this.cookieManager", i.createCookieManager(this.customerId, this.eventId, this.options.host, this.options.cookieDomain, this.options.isCookieSecure || !1, this.options.getCookies, this.options.setCookie), "assign"), this.initialize(this.customerId, this.eventId);
    }
    a.QueueClient = cc11001100_hook("a.QueueClient", c, "assign");
  }(h.Javascript || (h.Javascript = cc11001100_hook("h.Javascript", {}, "assign")));
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (e) {
  !function (e) {
    var t = cc11001100_hook("t", (i.prototype.extendCookie = cc11001100_hook("i.prototype.extendCookie", function (e) {
      var t = cc11001100_hook("t", this.getQueueStateCookie(), "var-init");
      t && "timeout" !== t && this.setCookieValue(t, e);
    }, "assign"), i.prototype.getValidationState = cc11001100_hook("i.prototype.getValidationState", function () {
      var e = cc11001100_hook("e", this.getQueueStateCookie(), "var-init");
      if (e) {
        if ("timeout" === e) return "timeout";
        var t = cc11001100_hook("t", this.toQueueState(e), "var-init");
        if (t) {
          if ("idle" !== t.redirectType) return "verified";
          var i = cc11001100_hook("i", this.getNow(), "var-init");
          t.issueTime = cc11001100_hook("t.issueTime", 1e3 * t.issueTime, "assign");
          var o = cc11001100_hook("o", new Date(t.issueTime), "var-init");
          o.setMinutes(o.getMinutes() + t.fixedCookieValidity);
          var n = cc11001100_hook("n", new Date(t.issueTime), "var-init");
          if (n.setMinutes(n.getMinutes() - t.fixedCookieValidity), !(o < i || i < n)) return "disabled";
        }
      }
    }, "assign"), i.prototype.cookieIsEnabled = cc11001100_hook("i.prototype.cookieIsEnabled", function () {
      return navigator.cookieEnabled;
    }, "assign"), i.prototype.setTimeoutState = cc11001100_hook("i.prototype.setTimeoutState", function () {
      this.setQueueStateCookie(this.getCookieName(), "timeout", 3);
    }, "assign"), i.prototype.setCookieValue = cc11001100_hook("i.prototype.setCookieValue", function (e, t) {
      this.setQueueStateCookie(this.getCookieName(), e, t);
    }, "assign"), i.prototype.cancelCookie = cc11001100_hook("i.prototype.cancelCookie", function () {
      this.setQueueStateCookie(this.getCookieName(), "", -1);
    }, "assign"), i.prototype.getQueueStateCookie = cc11001100_hook("i.prototype.getQueueStateCookie", function () {
      var e = cc11001100_hook("e", this.getCookieName(), "var-init"),
        t = cc11001100_hook("t", this.getCookies(), "var-init");
      if (t) {
        var i,
          o,
          n,
          r = cc11001100_hook("r", t.split(";"), "var-init");
        for (i = cc11001100_hook("i", 0, "assign"); i < r.length; i++) if (o = cc11001100_hook("o", r[i].substr(0, r[i].indexOf("=")), "assign"), n = cc11001100_hook("n", r[i].substr(r[i].indexOf("=") + 1), "assign"), (o = cc11001100_hook("o", o.replace(/^\s+|\s+$/g, ""), "assign")) == e) return decodeURIComponent(n);
      }
    }, "assign"), i.prototype.cancelQueueId = cc11001100_hook("i.prototype.cancelQueueId", function () {
      var e = cc11001100_hook("e", this.getQueueIdFromQueueStateCookie(), "var-init");
      this.removeLocalSession(), e && this.removeSessionInQueueITDomain(e);
    }, "assign"), i.prototype.setQueueStateCookie = cc11001100_hook("i.prototype.setQueueStateCookie", function (e, t, i) {
      var o = cc11001100_hook("o", encodeURIComponent(t) + ";path=/", "var-init"),
        n = cc11001100_hook("n", this.getNow(), "var-init");
      n.setMinutes(n.getMinutes() + i), 0 < i ? o = cc11001100_hook("o", o + ";expires=" + n.toUTCString(), "assign") : o += cc11001100_hook("o", ";expires=Thu, 01 Jan 1970 00:00:01 GMT", "assign"), this.cookieDomain && (o += cc11001100_hook("o", ";domain=" + this.cookieDomain, "assign")), this.isCookieSecure && (o += cc11001100_hook("o", ";secure", "assign")), this.setCookie(e + "=" + o), 0 < i && this.getQueueStateCookie() !== t ? (o = cc11001100_hook("o", encodeURIComponent(t) + ";path=/;expires=" + n.toUTCString(), "assign"), this.setCookie(e + "=" + o)) : i <= 0 && this.getQueueStateCookie() && (o = cc11001100_hook("o", encodeURIComponent(t) + ";expires=Thu, 01 Jan 1970 00:00:01 GMT", "assign"), this.setCookie(e + "=" + o));
    }, "assign"), i.prototype.getCookieName = cc11001100_hook("i.prototype.getCookieName", function () {
      return i.CookieNameInitializer + this.eventId;
    }, "assign"), i.prototype.getQueueIdFromQueueStateCookie = cc11001100_hook("i.prototype.getQueueIdFromQueueStateCookie", function () {
      try {
        var e = cc11001100_hook("e", this.getQueueStateCookie(), "var-init");
        return e ? this.toQueueState(e).queueId : null;
      } catch (e) {
        console.warn("Resolving QueueId from cookie failed");
      }
    }, "assign"), i.prototype.toQueueState = cc11001100_hook("i.prototype.toQueueState", function (e) {
      for (var t = cc11001100_hook("t", {
          redirectType: cc11001100_hook("redirectType", "", "object-key-init"),
          issueTime: cc11001100_hook("issueTime", 0, "object-key-init"),
          fixedCookieValidity: cc11001100_hook("fixedCookieValidity", 0, "object-key-init"),
          queueId: cc11001100_hook("queueId", null, "object-key-init")
        }, "var-init"), i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", e.split("&"), "var-init"); i < o.length; i++) {
        var n = cc11001100_hook("n", o[i].split("="), "var-init");
        if (2 != n.length) return;
        switch (n[0].toLowerCase()) {
          case "redirecttype":
            t.redirectType = cc11001100_hook("t.redirectType", n[1].toLowerCase(), "assign");
            break;
          case "issuetime":
            t.issueTime = cc11001100_hook("t.issueTime", Number(n[1]), "assign");
            break;
          case "fixedvaliditymins":
            t.fixedCookieValidity = cc11001100_hook("t.fixedCookieValidity", Number(n[1]), "assign");
            break;
          case "queueid":
            t.queueId = cc11001100_hook("t.queueId", n[1], "assign");
        }
      }
      return t;
    }, "assign"), i.prototype.removeLocalSession = cc11001100_hook("i.prototype.removeLocalSession", function () {
      var e = cc11001100_hook("e", this.getCookieName() + "=", "var-init");
      this.cookieDomain && (e += cc11001100_hook("e", ";domain=" + this.cookieDomain, "assign")), this.isCookieSecure && (e += cc11001100_hook("e", ";secure", "assign")), e += cc11001100_hook("e", ";path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;", "assign"), document.cookie = cc11001100_hook("document.cookie", e, "assign"), this.setCookie(e);
    }, "assign"), i.prototype.removeSessionInQueueITDomain = cc11001100_hook("i.prototype.removeSessionInQueueITDomain", function (e) {
      var t = cc11001100_hook("t", document.createElement("script"), "var-init");
      t.src = cc11001100_hook("t.src", this.host + "/cancel/" + this.customerId + "/" + this.eventId + "/" + e + "/cancelqueueid", "assign"), document.getElementsByTagName("head")[0].appendChild(t);
    }, "assign"), i.CookieNameInitializer = cc11001100_hook("i.CookieNameInitializer", "QueueITAccepted-SDFrts345E-V3_", "assign"), i), "var-init");
    function i(e, t, i, o, n, r, u, a) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("u", u, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      void 0 === r && (r = cc11001100_hook("r", function () {
        return document.cookie;
      }, "assign")), void 0 === u && (u = cc11001100_hook("u", function (e) {
        return document.cookie = cc11001100_hook("document.cookie", e, "assign");
      }, "assign")), void 0 === a && (a = cc11001100_hook("a", function () {
        return new Date();
      }, "assign")), this.customerId = cc11001100_hook("this.customerId", e, "assign"), this.eventId = cc11001100_hook("this.eventId", t, "assign"), this.host = cc11001100_hook("this.host", i, "assign"), this.cookieDomain = cc11001100_hook("this.cookieDomain", o, "assign"), this.isCookieSecure = cc11001100_hook("this.isCookieSecure", n, "assign"), this.getCookies = cc11001100_hook("this.getCookies", r, "assign"), this.setCookie = cc11001100_hook("this.setCookie", u, "assign"), this.getNow = cc11001100_hook("this.getNow", a, "assign");
    }
    e.CookieManager = cc11001100_hook("e.CookieManager", t, "assign");
    var o = cc11001100_hook("o", (n.Create = cc11001100_hook("n.Create", function (e, t) {
      return void 0 === t && (t = cc11001100_hook("t", null, "assign")), new c(e, t);
    }, "assign"), n), "var-init");
    function n() {}
    e.CookieDomainHelperFactory = cc11001100_hook("e.CookieDomainHelperFactory", o, "assign");
    var r = cc11001100_hook("r", (u.Create = cc11001100_hook("u.Create", function (e) {
      return void 0 === e && (e = cc11001100_hook("e", null, "assign")), new a(e);
    }, "assign"), u), "var-init");
    function u() {}
    e.CookieFlagsHelperFactory = cc11001100_hook("e.CookieFlagsHelperFactory", r, "assign");
    var a = cc11001100_hook("a", (s.prototype.cookieShouldBeSecure = cc11001100_hook("s.prototype.cookieShouldBeSecure", function () {
      return "https:" === this.currentLocationProvider().protocol;
    }, "assign"), s), "var-init");
    function s(e) {
      cc11001100_hook("e", e, "function-parameter");
      this.currentLocationProvider = cc11001100_hook("this.currentLocationProvider", e, "assign"), this.currentLocationProvider || (this.currentLocationProvider = cc11001100_hook("this.currentLocationProvider", function () {
        return window.location;
      }, "assign"));
    }
    e.CookieFlagsHelper = cc11001100_hook("e.CookieFlagsHelper", a, "assign");
    var c = cc11001100_hook("c", (l.prototype.resolveCookieDomain = cc11001100_hook("l.prototype.resolveCookieDomain", function () {
      var e,
        t = cc11001100_hook("t", null === (e = cc11001100_hook("e", this.environment, "assign")) || void 0 === e ? void 0 : e.domainToIntercept, "var-init");
      if (!t) return null;
      var i = cc11001100_hook("i", this.currentDomainProvider(), "var-init");
      if (i = cc11001100_hook("i", i || t, "assign"), t.toLowerCase() == i.toLowerCase()) return null;
      for (var o = cc11001100_hook("o", t.split("."), "var-init"), n = cc11001100_hook("n", i.split("."), "var-init"), r = cc11001100_hook("r", o.length - 1, "var-init"), u = cc11001100_hook("u", n.length - 1, "var-init"); 0 <= r && 0 <= u && o[r] == n[u];) --r, --u;
      var a = cc11001100_hook("a", n.slice(-1 * (n.length - u - 1)), "var-init");
      return a.length <= 1 ? t : a.join(".");
    }, "assign"), l), "var-init");
    function l(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      void 0 === t && (t = cc11001100_hook("t", null, "assign")), this.environment = cc11001100_hook("this.environment", e, "assign"), this.currentDomainProvider = cc11001100_hook("this.currentDomainProvider", t, "assign"), this.currentDomainProvider || (this.currentDomainProvider = cc11001100_hook("this.currentDomainProvider", function () {
        return window.location.hostname;
      }, "assign"));
    }
    e.CookieDomainHelper = cc11001100_hook("e.CookieDomainHelper", c, "assign");
  }(e.Javascript || (e.Javascript = cc11001100_hook("e.Javascript", {}, "assign")));
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign"));