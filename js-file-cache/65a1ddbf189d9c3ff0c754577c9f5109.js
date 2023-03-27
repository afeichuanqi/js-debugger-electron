var QueueIt, QueueIt, QueueIt, QueueIt, QueueIt, QueueIt, QueueIt, QueueIt;
!function (e) {
  (e.Javascript || (e.Javascript = cc11001100_hook("e.Javascript", {}, "assign"))).Version = cc11001100_hook("(e.Javascript || (e.Javascript = {})).Version", "2.0.48", "assign");
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (e) {
  !function (e) {
    var t = cc11001100_hook("t", (p.retrieveEnvInfoFromScriptTag = cc11001100_hook("p.retrieveEnvInfoFromScriptTag", function () {
      if (p.environemntVariable) return p.environemntVariable;
      try {
        for (var e = cc11001100_hook("e", document.getElementsByTagName("script"), "var-init"), t = cc11001100_hook("t", 0, "var-init"); t < e.length; t++) {
          var r = cc11001100_hook("r", e[t], "var-init"),
            n = cc11001100_hook("n", r.getAttribute("data-queueit-c"), "var-init");
          if (n) {
            var o = cc11001100_hook("o", r.getAttribute("data-queueit-host") || "", "var-init"),
              i = cc11001100_hook("i", "true" == (r.getAttribute("data-queueit-intercept") || "").toLowerCase(), "var-init"),
              a = cc11001100_hook("a", null !== r.getAttribute("data-queueit-interceptvnext"), "var-init"),
              u = cc11001100_hook("u", r.getAttribute("data-queueit-intercept-domain") || "", "var-init"),
              s = cc11001100_hook("s", r.getAttribute("data-queueit-jshost") || "", "var-init"),
              l = cc11001100_hook("l", "true" == (r.getAttribute("data-queueit-nocachereq") || "").toLowerCase(), "var-init"),
              d = cc11001100_hook("d", "true" == (r.getAttribute("data-queueit-noautorun") || "").toLowerCase(), "var-init"),
              c = cc11001100_hook("c", r.getAttribute("data-queueit-ku-redirect-headername") || "", "var-init"),
              g = cc11001100_hook("g", "true" === (r.getAttribute("data-queueit-spa") || "").toLowerCase(), "var-init");
            return p.environemntVariable = cc11001100_hook("p.environemntVariable", {
              cid: cc11001100_hook("cid", n, "object-key-init"),
              intercept: cc11001100_hook("intercept", i, "object-key-init"),
              interceptVNext: cc11001100_hook("interceptVNext", a, "object-key-init"),
              host: cc11001100_hook("host", o, "object-key-init"),
              jsHost: cc11001100_hook("jsHost", s, "object-key-init"),
              noCacheRequest: cc11001100_hook("noCacheRequest", l, "object-key-init"),
              noAutorun: cc11001100_hook("noAutorun", d, "object-key-init"),
              domainToIntercept: cc11001100_hook("domainToIntercept", u, "object-key-init"),
              queueitKURedirectHeaderName: cc11001100_hook("queueitKURedirectHeaderName", c, "object-key-init"),
              isSPA: cc11001100_hook("isSPA", g, "object-key-init")
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
    function r() {}
    e.EnvironmentInfo = cc11001100_hook("e.EnvironmentInfo", r, "assign");
  }(e.Tools || (e.Tools = cc11001100_hook("e.Tools", {}, "assign")));
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (e) {
  var t, r, n;
  function o() {}
  t = cc11001100_hook("t", e.Javascript || (e.Javascript = cc11001100_hook("e.Javascript", {}, "assign")), "assign"), r = cc11001100_hook("r", t.KnownUser || (t.KnownUser = cc11001100_hook("t.KnownUser", {}, "assign")), "assign"), o.getAjaxHeader = cc11001100_hook("o.getAjaxHeader", function (e) {
    return ["x-queueit-ajaxpageurl", encodeURIComponent(e)];
  }, "assign"), o.getUrlFromFetchArguments = cc11001100_hook("o.getUrlFromFetchArguments", function (e) {
    return e instanceof Request ? e.url : String(e);
  }, "assign"), o.getRedirectHeaderName = cc11001100_hook("o.getRedirectHeaderName", function (e) {
    return e && e.queueitKURedirectHeaderName ? e.queueitKURedirectHeaderName : "x-queueit-redirect";
  }, "assign"), o.addAjaxRedirectParameter = cc11001100_hook("o.addAjaxRedirectParameter", function (e) {
    var t = cc11001100_hook("t", e.indexOf("&t="), "var-init");
    return -1 === t ? (-1 === e.indexOf("?") && (e += cc11001100_hook("e", "?", "assign")), e += cc11001100_hook("e", "&_jsar=1", "assign")) : e = cc11001100_hook("e", e.substring(0, t) + "&_jsar=1" + e.substring(t), "assign"), e;
  }, "assign"), o.defaultRedirector = cc11001100_hook("o.defaultRedirector", function (t) {
    return function (e) {
      -1 === e.indexOf("_jsar=1") && (e = cc11001100_hook("e", o.addAjaxRedirectParameter(e), "assign")), t.href = cc11001100_hook("t.href", e, "assign"), document.close();
    };
  }, "assign"), o.tryGetQueueItRedirectHeaderFromFetch = cc11001100_hook("o.tryGetQueueItRedirectHeaderFromFetch", function (e, t) {
    return e.headers.get(t) || "";
  }, "assign"), o.tryGetQueueItRedirectHeaderFromXHR = cc11001100_hook("o.tryGetQueueItRedirectHeaderFromXHR", function (e, t) {
    var r = cc11001100_hook("r", "", "var-init"),
      n = cc11001100_hook("n", t.toLowerCase(), "var-init");
    return ("function" != typeof e.getAllResponseHeaders || 0 <= (e.getAllResponseHeaders().toLowerCase() || "").indexOf(n)) && (r = cc11001100_hook("r", e.getResponseHeader(t), "assign")), r;
  }, "assign"), o.isUrlDomainMatchingOrIsRelativeURL = cc11001100_hook("o.isUrlDomainMatchingOrIsRelativeURL", function (e, t) {
    if (!new RegExp("^(?:[a-z]+:)?//", "i").test(e)) return !0;
    if (t) {
      var r = cc11001100_hook("r", document.createElement("a"), "var-init");
      if (r.href = cc11001100_hook("r.href", e, "assign"), -1 < r.hostname.indexOf(t)) return !0;
    }
    return !1;
  }, "assign"), n = cc11001100_hook("n", o, "assign"), r.RequestInterceptHelper = cc11001100_hook("r.RequestInterceptHelper", n, "assign");
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (e) {
  var t, g, r;
  function n() {}
  t = cc11001100_hook("t", e.Javascript || (e.Javascript = cc11001100_hook("e.Javascript", {}, "assign")), "assign"), g = cc11001100_hook("g", t.KnownUser || (t.KnownUser = cc11001100_hook("t.KnownUser", {}, "assign")), "assign"), n.interceptOpen = cc11001100_hook("n.interceptOpen", function (u, e, s, l, t) {
    void 0 === s && (s = cc11001100_hook("s", null, "assign")), void 0 === l && (l = cc11001100_hook("l", null, "assign")), void 0 === t && (t = cc11001100_hook("t", null, "assign"));
    var d = cc11001100_hook("d", g.RequestInterceptHelper.getRedirectHeaderName(e), "var-init");
    if (t = cc11001100_hook("t", t || window.location, "assign"), l = cc11001100_hook("l", l || g.RequestInterceptHelper.defaultRedirector(t), "assign"), s = cc11001100_hook("s", s || function () {
      return t.href;
    }, "assign"), ("function" == typeof XMLHttpRequest || "object" == typeof XMLHttpRequest) && XMLHttpRequest.prototype) {
      var c = cc11001100_hook("c", XMLHttpRequest.prototype.open, "var-init");
      XMLHttpRequest.prototype.open = cc11001100_hook("XMLHttpRequest.prototype.open", function (e, t, r, n, o) {
        var i = cc11001100_hook("i", this, "var-init"),
          a = cc11001100_hook("a", !1, "var-init");
        try {
          (a = cc11001100_hook("a", g.RequestInterceptHelper.isUrlDomainMatchingOrIsRelativeURL(t, u), "assign")) && i.addEventListener("readystatechange", function () {
            return function (e) {
              if (e.readyState === XMLHttpRequest.DONE) try {
                var t = cc11001100_hook("t", g.RequestInterceptHelper.tryGetQueueItRedirectHeaderFromXHR(e, d), "var-init");
                t && l(decodeURIComponent(t));
              } catch (e) {
                console.log("getResponseHeader('" + d + "') error" + e);
              }
            }(i);
          });
        } catch (e) {
          console.warn(e);
        } finally {
          c.apply(i, arguments), a && i.setRequestHeader.apply(i, g.RequestInterceptHelper.getAjaxHeader(s()));
        }
      }, "assign");
    }
  }, "assign"), r = cc11001100_hook("r", n, "assign"), g.AjaxInterceptor = cc11001100_hook("g.AjaxInterceptor", r, "assign");
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (e) {
  var t, d, r;
  function c() {}
  t = cc11001100_hook("t", e.Javascript || (e.Javascript = cc11001100_hook("e.Javascript", {}, "assign")), "assign"), d = cc11001100_hook("d", t.KnownUser || (t.KnownUser = cc11001100_hook("t.KnownUser", {}, "assign")), "assign"), c.addEventListener = cc11001100_hook("c.addEventListener", function (n) {
    return function (e, t, r) {
      "readystatechange" == e ? (this.listeners = cc11001100_hook("this.listeners", this.listeners || [], "assign"), this.listeners.push(t)) : n.AddEventListener.apply(this, arguments);
    };
  }, "assign"), c.removeEventListener = cc11001100_hook("c.removeEventListener", function (n) {
    return function (e, t, r) {
      "readystatechange" == e ? (this.listeners = cc11001100_hook("this.listeners", this.listeners || [], "assign"), this.listeners = cc11001100_hook("this.listeners", this.listeners.filter(function (e) {
        return e !== t;
      }), "assign")) : n.RemoveEventListener.apply(this, arguments);
    };
  }, "assign"), c.open = cc11001100_hook("c.open", function (l) {
    return function (e, t, r, n, o) {
      var i = cc11001100_hook("i", this, "var-init");
      i.redirect = cc11001100_hook("i.redirect", l.Redirect, "assign"), i.redirectHeaderName = cc11001100_hook("i.redirectHeaderName", l.RedirectHeaderName, "assign");
      try {
        i.shouldBeIntercepted = cc11001100_hook("i.shouldBeIntercepted", d.RequestInterceptHelper.isUrlDomainMatchingOrIsRelativeURL(t, l.InterceptDomain), "assign"), l.AddEventListener.apply(i, ["readystatechange", c.stateUpdatedHandler]);
      } catch (e) {
        console.warn("Couldn't setup open intercept: ", e);
      } finally {
        if (l.Open.apply(i, arguments), i.shouldBeIntercepted) {
          var a = cc11001100_hook("a", d.RequestInterceptHelper.getAjaxHeader(l.GetCurrentUrl()), "var-init"),
            u = cc11001100_hook("u", a[0], "var-init"),
            s = cc11001100_hook("s", a[1], "var-init");
          i.setRequestHeader(u, s);
        }
      }
    };
  }, "assign"), c.invokeListeners = cc11001100_hook("c.invokeListeners", function (e, t) {
    for (var r = cc11001100_hook("r", 0, "var-init"); r < (e.listeners || []).length; r++) e.listeners[r].apply(e, arguments);
  }, "assign"), c.interceptOpen = cc11001100_hook("c.interceptOpen", function (e, t, r, n, o) {
    void 0 === r && (r = cc11001100_hook("r", null, "assign")), void 0 === n && (n = cc11001100_hook("n", null, "assign")), void 0 === o && (o = cc11001100_hook("o", null, "assign"));
    var i = cc11001100_hook("i", d.RequestInterceptHelper.getRedirectHeaderName(t), "var-init");
    if (o = cc11001100_hook("o", o || window.location, "assign"), n = cc11001100_hook("n", n || d.RequestInterceptHelper.defaultRedirector(o), "assign"), r = cc11001100_hook("r", r || function () {
      return window.location.href;
    }, "assign"), ("function" == typeof XMLHttpRequest || "object" == typeof XMLHttpRequest) && XMLHttpRequest.prototype) {
      var a = cc11001100_hook("a", {
        Open: cc11001100_hook("Open", XMLHttpRequest.prototype.open, "object-key-init"),
        AddEventListener: cc11001100_hook("AddEventListener", XMLHttpRequest.prototype.addEventListener, "object-key-init"),
        RemoveEventListener: cc11001100_hook("RemoveEventListener", XMLHttpRequest.prototype.removeEventListener, "object-key-init"),
        GetCurrentUrl: cc11001100_hook("GetCurrentUrl", r, "object-key-init"),
        Redirect: cc11001100_hook("Redirect", n, "object-key-init"),
        RedirectHeaderName: cc11001100_hook("RedirectHeaderName", i, "object-key-init"),
        InterceptDomain: cc11001100_hook("InterceptDomain", e, "object-key-init")
      }, "var-init");
      XMLHttpRequest.prototype.addEventListener = cc11001100_hook("XMLHttpRequest.prototype.addEventListener", c.addEventListener(a), "assign"), XMLHttpRequest.prototype.removeEventListener = cc11001100_hook("XMLHttpRequest.prototype.removeEventListener", c.removeEventListener(a), "assign"), XMLHttpRequest.prototype.open = cc11001100_hook("XMLHttpRequest.prototype.open", c.open(a), "assign");
    }
  }, "assign"), c.stateUpdatedHandler = cc11001100_hook("c.stateUpdatedHandler", function (e) {
    var t = cc11001100_hook("t", this, "var-init");
    if (!t.wasIntercepted) if (t.shouldBeIntercepted) {
      if (t.readyState == XMLHttpRequest.HEADERS_RECEIVED || t.readyState == XMLHttpRequest.DONE) try {
        var r = cc11001100_hook("r", d.RequestInterceptHelper.tryGetQueueItRedirectHeaderFromXHR(t, t.redirectHeaderName), "var-init");
        if (r) return t.wasIntercepted = cc11001100_hook("t.wasIntercepted", !0, "assign"), t.onreadystatechange = cc11001100_hook("t.onreadystatechange", c.stateUpdatedHandler.bind(t), "assign"), t.onload = cc11001100_hook("t.onload", c.stateUpdatedHandler.bind(t), "assign"), void t.redirect(decodeURIComponent(r));
      } catch (e) {
        console.log("getResponseHeader('" + t.redirectHeaderName + "') error" + e, e);
      }
      c.invokeListeners(t, arguments);
    } else c.invokeListeners(t, arguments);
  }, "assign"), r = cc11001100_hook("r", c, "assign"), d.AjaxVNextInterceptor = cc11001100_hook("d.AjaxVNextInterceptor", r, "assign");
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (e) {
  var t, p, r;
  function f() {}
  t = cc11001100_hook("t", e.Javascript || (e.Javascript = cc11001100_hook("e.Javascript", {}, "assign")), "assign"), p = cc11001100_hook("p", t.KnownUser || (t.KnownUser = cc11001100_hook("t.KnownUser", {}, "assign")), "assign"), f.responseHandler = cc11001100_hook("f.responseHandler", function (r, n) {
    return function (e) {
      try {
        var t = cc11001100_hook("t", p.RequestInterceptHelper.tryGetQueueItRedirectHeaderFromFetch(e, n), "var-init");
        return t ? (r(decodeURIComponent(t)), new Promise(function () {})) : e;
      } catch (e) {
        throw console.warn("fetch response header ('" + n + "') error" + e), e;
      }
    };
  }, "assign"), f.addQueueItHeadersToFetchRequest = cc11001100_hook("f.addQueueItHeadersToFetchRequest", function (e, t, r) {
    var n = cc11001100_hook("n", p.RequestInterceptHelper.getAjaxHeader(r), "var-init"),
      o = cc11001100_hook("o", n[0], "var-init"),
      i = cc11001100_hook("i", n[1], "var-init");
    return e instanceof Request ? e.headers.set(o, i) : "string" == typeof e && ((t = cc11001100_hook("t", t || {}, "assign")).headers = cc11001100_hook("(t = t || {}).headers", t.headers || {}, "assign"), t.headers[o] = cc11001100_hook("t.headers[o]", i, "assign")), null != t && "object" == typeof t && "no-cors" == t.mode && console.warn("when no-cors is used, custom queue-it headers can't be used"), [e, t];
  }, "assign"), f.interceptFetch = cc11001100_hook("f.interceptFetch", function (u, e, s, l, t) {
    void 0 === s && (s = cc11001100_hook("s", null, "assign")), void 0 === l && (l = cc11001100_hook("l", null, "assign")), void 0 === t && (t = cc11001100_hook("t", null, "assign"));
    var d = cc11001100_hook("d", window, "var-init"),
      r = cc11001100_hook("r", "function" == typeof d.fetch, "var-init");
    if (t = cc11001100_hook("t", t || window.location, "assign"), r) {
      var c = cc11001100_hook("c", p.RequestInterceptHelper.getRedirectHeaderName(e), "var-init"),
        g = cc11001100_hook("g", d.fetch, "var-init");
      l = cc11001100_hook("l", l || p.RequestInterceptHelper.defaultRedirector(t), "assign"), s = cc11001100_hook("s", s || function () {
        return t.href;
      }, "assign"), d.fetch = cc11001100_hook("d.fetch", function (e, t) {
        var r = cc11001100_hook("r", p.RequestInterceptHelper.getUrlFromFetchArguments(e), "var-init"),
          n = cc11001100_hook("n", !1, "var-init");
        try {
          n = cc11001100_hook("n", p.RequestInterceptHelper.isUrlDomainMatchingOrIsRelativeURL(r, u), "assign");
        } catch (e) {
          console.warn(e);
        }
        if (!n) return g.apply(d, arguments);
        var o = cc11001100_hook("o", f.addQueueItHeadersToFetchRequest(e, t, s()), "var-init"),
          i = cc11001100_hook("i", o[0], "var-init"),
          a = cc11001100_hook("a", o[1], "var-init");
        return g.apply(d, [i, a]).then(f.responseHandler(l, c));
      }, "assign");
    }
  }, "assign"), r = cc11001100_hook("r", f, "assign"), p.FetchInterceptor = cc11001100_hook("p.FetchInterceptor", r, "assign");
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (s) {
  var l;
  (function (e) {
    var t = cc11001100_hook("t", (a.tryInitQueueClientFromToken = cc11001100_hook("a.tryInitQueueClientFromToken", function (e, t) {
      if (void 0 === t && (t = cc11001100_hook("t", null, "assign")), t = cc11001100_hook("t", t || window.location.href, "assign"), e && e.cid) {
        var r = cc11001100_hook("r", a.getQueueITToken(t), "var-init");
        if (r && r.eventId && s.Javascript.QueueClient && !window.myQueueClient) {
          var n = cc11001100_hook("n", {
            removeTokenFromUrl: cc11001100_hook("removeTokenFromUrl", !0, "object-key-init")
          }, "var-init");
          e.host && (n.host = cc11001100_hook("n.host", e.host, "assign"));
          var o = cc11001100_hook("o", l.CookieDomainHelperFactory.Create(e), "var-init"),
            i = cc11001100_hook("i", l.CookieFlagsHelperFactory.Create(), "var-init");
          n.cookieDomain = cc11001100_hook("n.cookieDomain", o.resolveCookieDomain(), "assign"), n.isCookieSecure = cc11001100_hook("n.isCookieSecure", i.cookieShouldBeSecure(), "assign"), window.myQueueClient = cc11001100_hook("window.myQueueClient", window.queueClient(e.cid, r.eventId, n), "assign");
        }
      }
    }, "assign"), a.getQueueITToken = cc11001100_hook("a.getQueueITToken", function (e) {
      var t = cc11001100_hook("t", /queueittoken=([^&]*)/i.exec(e), "var-init");
      if (!t || !t[1]) return null;
      var r = cc11001100_hook("r", new u(), "var-init");
      r.rawQueueItToken = cc11001100_hook("r.rawQueueItToken", t[1], "assign");
      for (var n = cc11001100_hook("n", 0, "var-init"), o = cc11001100_hook("o", r.rawQueueItToken.split("~"), "var-init"); n < o.length; n++) {
        var i = cc11001100_hook("i", o[n].split("_"), "var-init");
        "e" === i[0].toLowerCase() && (r.eventId = cc11001100_hook("r.eventId", i[1], "assign"));
      }
      return r;
    }, "assign"), a), "var-init");
    function a() {}
    e.UrlQueueClientInitializer = cc11001100_hook("e.UrlQueueClientInitializer", t, "assign");
    var u = function () {};
    e.QueueItToken = cc11001100_hook("e.QueueItToken", u, "assign");
  })((l = cc11001100_hook("l", s.Javascript || (s.Javascript = cc11001100_hook("s.Javascript", {}, "assign")), "assign")).KnownUser || (l.KnownUser = cc11001100_hook("l.KnownUser", {}, "assign")));
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (e) {
  var t, r;
  t = cc11001100_hook("t", e.Javascript || (e.Javascript = cc11001100_hook("e.Javascript", {}, "assign")), "assign"), function (e) {
    function t() {}
    e.QueueClientEventConfig = cc11001100_hook("e.QueueClientEventConfig", t, "assign");
    var r = cc11001100_hook("r", (n.AllowTParameter = cc11001100_hook("n.AllowTParameter", "AllowTParameter", "assign"), n.EventTargetUrl = cc11001100_hook("n.EventTargetUrl", "EventTargetUrl", "assign"), n.ForcedTargetUrl = cc11001100_hook("n.ForcedTargetUrl", "ForcedTargetUrl", "assign"), n.ForecedTargetUrl = cc11001100_hook("n.ForecedTargetUrl", "ForecedTargetUrl", "assign"), n), "var-init");
    function n() {}
    e.RedirectionLogic = cc11001100_hook("e.RedirectionLogic", r, "assign");
    var o = cc11001100_hook("o", (i.UrlValidator = cc11001100_hook("i.UrlValidator", "UrlValidator", "assign"), i.CookieValidator = cc11001100_hook("i.CookieValidator", "CookieValidator", "assign"), i.JSVariableValidator = cc11001100_hook("i.JSVariableValidator", "JSVariableValidator", "assign"), i.UserAgentValidator = cc11001100_hook("i.UserAgentValidator", "UserAgentValidator", "assign"), i), "var-init");
    function i() {}
    e.ValidatorType = cc11001100_hook("e.ValidatorType", o, "assign");
    var a = cc11001100_hook("a", (u.Equals = cc11001100_hook("u.Equals", "Equals", "assign"), u.Contains = cc11001100_hook("u.Contains", "Contains", "assign"), u.ContainsAny = cc11001100_hook("u.ContainsAny", "ContainsAny", "assign"), u.EqualsAny = cc11001100_hook("u.EqualsAny", "EqualsAny", "assign"), u.NotEquals = cc11001100_hook("u.NotEquals", "NotEquals", "assign"), u.NotContains = cc11001100_hook("u.NotContains", "NotContains", "assign"), u.IgEquals = cc11001100_hook("u.IgEquals", "IgEquals", "assign"), u.IgContains = cc11001100_hook("u.IgContains", "IgContains", "assign"), u), "var-init");
    function u() {}
    e.ComparisonOperatorType = cc11001100_hook("e.ComparisonOperatorType", a, "assign");
    var s = cc11001100_hook("s", (l.PagePath = cc11001100_hook("l.PagePath", "PagePath", "assign"), l.HostName = cc11001100_hook("l.HostName", "HostName", "assign"), l.PageUrl = cc11001100_hook("l.PageUrl", "PageUrl", "assign"), l), "var-init");
    function l() {}
    e.UrlPartSelectorType = cc11001100_hook("e.UrlPartSelectorType", s, "assign");
    var d = cc11001100_hook("d", (c.CancelAction = cc11001100_hook("c.CancelAction", "Cancel", "assign"), c.QueueAction = cc11001100_hook("c.QueueAction", "Queue", "assign"), c.IgnoreAction = cc11001100_hook("c.IgnoreAction", "Ignore", "assign"), c), "var-init");
    function c() {}
    e.ActionType = cc11001100_hook("e.ActionType", d, "assign");
  }((r = cc11001100_hook("r", t.IntegrationConfig || (t.IntegrationConfig = cc11001100_hook("t.IntegrationConfig", {}, "assign")), "assign")).Model || (r.Model = cc11001100_hook("r.Model", {}, "assign")));
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign"));
var __extends = cc11001100_hook("__extends", this && this.__extends || function () {
    var n = function (e, t) {
      return (n = cc11001100_hook("n", Object.setPrototypeOf || {
        __proto__: cc11001100_hook("__proto__", [], "object-key-init")
      } instanceof Array && function (e, t) {
        e.__proto__ = cc11001100_hook("e.__proto__", t, "assign");
      } || function (e, t) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = cc11001100_hook("e[r]", t[r], "assign"));
      }, "assign"))(e, t);
    };
    return function (e, t) {
      function r() {
        this.constructor = cc11001100_hook("this.constructor", e, "assign");
      }
      n(e, t), e.prototype = cc11001100_hook("e.prototype", null === t ? Object.create(t) : (r.prototype = cc11001100_hook("r.prototype", t.prototype, "assign"), new r()), "assign");
    };
  }(), "var-init"),
  QueueIt,
  QueueIt;
if (!function (QueueIt) {
  var Javascript;
  !function (Javascript) {
    var IntegrationConfig;
    !function (IntegrationConfig) {
      function isNumber(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t;
        return ("number" != typeof (t = cc11001100_hook("t", parseFloat(e), "assign")) || !isNaN(t)) && isFinite(e);
      }
      var IntegrationPointBase = cc11001100_hook("IntegrationPointBase", (kd.CreateIntegrationPoint = cc11001100_hook("kd.CreateIntegrationPoint", function (e, t) {
        return void 0 === t && (t = cc11001100_hook("t", Trigger.CreateTrigger, "assign")), new (kd.getActionType(e) === IntegrationConfig.Model.ActionType.QueueAction ? IntegrationPointQueue : kd.getActionType(e) === IntegrationConfig.Model.ActionType.CancelAction ? IntegrationPointCancel : IntegrationPointIgnore)(e, t);
      }, "assign"), kd.prototype.initTriggers = cc11001100_hook("kd.prototype.initTriggers", function () {
        this._triggers = cc11001100_hook("this._triggers", new Array(), "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"), t = cc11001100_hook("t", this.model.triggers, "var-init"); e < t.length; e++) {
          var r = cc11001100_hook("r", t[e], "var-init");
          this._triggers.push(this._triggerFactory(r));
        }
      }, "assign"), kd.prototype.evaluate = cc11001100_hook("kd.prototype.evaluate", function () {
        for (var e = cc11001100_hook("e", 0, "var-init"), t = cc11001100_hook("t", this._triggers, "var-init"); e < t.length; e++) if (t[e].evaluate()) return !0;
        return !1;
      }, "assign"), kd.prototype.getActionType = cc11001100_hook("kd.prototype.getActionType", function () {
        return kd.getActionType(this.model);
      }, "assign"), kd.getActionType = cc11001100_hook("kd.getActionType", function (e) {
        return e.actionType ? e.actionType : IntegrationConfig.Model.ActionType.QueueAction;
      }, "assign"), kd), "var-init");
      function kd(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        this.model = cc11001100_hook("this.model", e, "assign"), this._triggerFactory = cc11001100_hook("this._triggerFactory", t, "assign"), this.initTriggers();
      }
      IntegrationConfig.IntegrationPointBase = cc11001100_hook("IntegrationConfig.IntegrationPointBase", IntegrationPointBase, "assign");
      var IntegrationPointQueue = cc11001100_hook("IntegrationPointQueue", function (_super) {
        function IntegrationPointQueue(e, t) {
          cc11001100_hook("e", e, "function-parameter");
          cc11001100_hook("t", t, "function-parameter");
          return _super.call(this, e, t) || this;
        }
        return __extends(IntegrationPointQueue, _super), IntegrationPointQueue.prototype.getQueueClientConfig = cc11001100_hook("IntegrationPointQueue.prototype.getQueueClientConfig", function (customerId) {
          var result = cc11001100_hook("result", new IntegrationConfig.Model.QueueClientEventConfig(), "var-init");
          result.eventId = cc11001100_hook("result.eventId", this.model.eventId, "assign"), result.cookieDomain = cc11001100_hook("result.cookieDomain", this.model.cookieDomain, "assign"), result.isCookieSecure = cc11001100_hook("result.isCookieSecure", this.model.isCookieSecure || !1, "assign"), result.culture = cc11001100_hook("result.culture", this.model.culture, "assign"), result.extendValidity = cc11001100_hook("result.extendValidity", this.model.extendValidity, "assign"), result.layoutName = cc11001100_hook("result.layoutName", this.model.layoutName, "assign"), result.validity = cc11001100_hook("result.validity", this.model.validity, "assign"), this.model.queueDomain && (result.host = cc11001100_hook("result.host", this.model.queueDomain, "assign")), this.model.removeTokenFromUrl && (result.removeTokenFromUrl = cc11001100_hook("result.removeTokenFromUrl", !0, "assign"), result.queryStringPrefix = cc11001100_hook("result.queryStringPrefix", this.model.queryStringPrefix, "assign"));
          var that = cc11001100_hook("that", this, "var-init");
          return this.model.onVerified && (result.onVerified = cc11001100_hook("result.onVerified", function () {
            !function (customerId, eventId, waitingRoomId) {
              eval(that.model.onVerified);
            }(customerId, that.model.eventId, that.model.eventId);
          }, "assign")), this.model.onDisabled && (result.onDisabled = cc11001100_hook("result.onDisabled", function () {
            !function (customerId, eventId, waitingRoomId) {
              eval(that.model.onDisabled);
            }(customerId, that.model.eventId, that.model.eventId);
          }, "assign")), this.model.onTimeout && (result.onTimeout = cc11001100_hook("result.onTimeout", function () {
            !function (customerId, eventId, waitingRoomId) {
              eval(that.model.onTimeout);
            }(customerId, that.model.eventId, that.model.eventId);
          }, "assign")), this.model.redirectLogic == IntegrationConfig.Model.RedirectionLogic.EventTargetUrl || 1 == this.model.redirectLogic ? (result.useEventTargetUrl = cc11001100_hook("result.useEventTargetUrl", !0, "assign"), result.targetUrl = cc11001100_hook("result.targetUrl", null, "assign")) : this.model.redirectLogic == IntegrationConfig.Model.RedirectionLogic.ForcedTargetUrl || this.model.redirectLogic == IntegrationConfig.Model.RedirectionLogic.ForecedTargetUrl || 2 == this.model.redirectLogic ? (result.useEventTargetUrl = cc11001100_hook("result.useEventTargetUrl", !1, "assign"), result.targetUrl = cc11001100_hook("result.targetUrl", this.model.forcedTargetUrl, "assign")) : this.model.redirectLogic != IntegrationConfig.Model.RedirectionLogic.AllowTParameter && 0 != this.model.redirectLogic || (result.useEventTargetUrl = cc11001100_hook("result.useEventTargetUrl", !1, "assign"), result.targetUrl = cc11001100_hook("result.targetUrl", null, "assign")), result;
        }, "assign"), IntegrationPointQueue;
      }(IntegrationPointBase), "var-init");
      IntegrationConfig.IntegrationPointQueue = cc11001100_hook("IntegrationConfig.IntegrationPointQueue", IntegrationPointQueue, "assign");
      var IntegrationPointCancel = cc11001100_hook("IntegrationPointCancel", (yd = cc11001100_hook("yd", IntegrationPointBase, "assign"), __extends(zd, yd), zd.prototype.getEventId = cc11001100_hook("zd.prototype.getEventId", function () {
          return this.model.eventId;
        }, "assign"), zd.prototype.getCookieDomain = cc11001100_hook("zd.prototype.getCookieDomain", function () {
          return this.model.cookieDomain;
        }, "assign"), zd.prototype.isCookieSecure = cc11001100_hook("zd.prototype.isCookieSecure", function () {
          return this.model.isCookieSecure;
        }, "assign"), zd.prototype.getQueueDomain = cc11001100_hook("zd.prototype.getQueueDomain", function () {
          return this.model.queueDomain;
        }, "assign"), zd), "var-init"),
        yd;
      function zd(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return yd.call(this, e, t) || this;
      }
      IntegrationConfig.IntegrationPointCancel = cc11001100_hook("IntegrationConfig.IntegrationPointCancel", IntegrationPointCancel, "assign");
      var IntegrationPointIgnore = cc11001100_hook("IntegrationPointIgnore", (Cd = cc11001100_hook("Cd", IntegrationPointBase, "assign"), __extends(Dd, Cd), Dd), "var-init"),
        Cd;
      function Dd(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        return Cd.call(this, e, t) || this;
      }
      IntegrationConfig.IntegrationPointIgnore = cc11001100_hook("IntegrationConfig.IntegrationPointIgnore", IntegrationPointIgnore, "assign");
      var Trigger = cc11001100_hook("Trigger", (Gd.CreateTrigger = cc11001100_hook("Gd.CreateTrigger", function (e, t) {
        return void 0 === t && (t = cc11001100_hook("t", ValidatorBase.CreateValidator, "assign")), new Gd(e, t);
      }, "assign"), Gd.prototype.initOperators = cc11001100_hook("Gd.prototype.initOperators", function () {
        this._expersions = cc11001100_hook("this._expersions", new Array(), "assign");
        for (var e = cc11001100_hook("e", 0, "var-init"), t = cc11001100_hook("t", this._triggerModel.triggerParts, "var-init"); e < t.length; e++) {
          var r = cc11001100_hook("r", t[e], "var-init");
          this._expersions.push(this._triggerPartFactory(r));
        }
      }, "assign"), Gd.prototype.evaluate = cc11001100_hook("Gd.prototype.evaluate", function () {
        if ("and" == this.logicalOperator.toLowerCase()) {
          for (var e = cc11001100_hook("e", 0, "var-init"), t = cc11001100_hook("t", this._expersions, "var-init"); e < t.length; e++) if (!t[e].evaluate()) return !1;
          return !0;
        }
        if ("or" != this.logicalOperator.toLowerCase()) throw "Not supported logical operator";
        for (var r = cc11001100_hook("r", 0, "var-init"), n = cc11001100_hook("n", this._expersions, "var-init"); r < n.length; r++) if (n[r].evaluate()) return !0;
        return !1;
      }, "assign"), Gd), "var-init");
      function Gd(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        this._triggerModel = cc11001100_hook("this._triggerModel", e, "assign"), this._triggerPartFactory = cc11001100_hook("this._triggerPartFactory", t, "assign"), this.logicalOperator = cc11001100_hook("this.logicalOperator", e.logicalOperator || "And", "assign"), this.initOperators();
      }
      IntegrationConfig.Trigger = cc11001100_hook("IntegrationConfig.Trigger", Trigger, "assign");
      var ValidatorBase = cc11001100_hook("ValidatorBase", (Td.CreateValidator = cc11001100_hook("Td.CreateValidator", function (e) {
        switch (e.validatorType = cc11001100_hook("e.validatorType", e.validatorType || "UrlValidator", "assign"), e.validatorType) {
          case IntegrationConfig.Model.ValidatorType.UrlValidator:
            return new UrlValidator(e);
          case IntegrationConfig.Model.ValidatorType.CookieValidator:
            return new CookieValidator(e);
          case IntegrationConfig.Model.ValidatorType.JSVariableValidator:
            return new JSVariableValidator(e);
          case IntegrationConfig.Model.ValidatorType.UserAgentValidator:
            return new UserAgentValidator(e);
          default:
            return new FalsyValidator(e);
        }
      }, "assign"), Td.getDocumentCookie = cc11001100_hook("Td.getDocumentCookie", function () {
        return document.cookie;
      }, "assign"), Td.getWindowLocation = cc11001100_hook("Td.getWindowLocation", function () {
        return window.location;
      }, "assign"), Td.getJSVariableValue = cc11001100_hook("Td.getJSVariableValue", function (e) {
        return window[e];
      }, "assign"), Td.getUserAgent = cc11001100_hook("Td.getUserAgent", function () {
        return window.navigator.userAgent;
      }, "assign"), Td), "var-init");
      function Td(e) {
        cc11001100_hook("e", e, "function-parameter");
        this.triggerPartModel = cc11001100_hook("this.triggerPartModel", e, "assign");
      }
      IntegrationConfig.ValidatorBase = cc11001100_hook("IntegrationConfig.ValidatorBase", ValidatorBase, "assign");
      var UrlValidator = cc11001100_hook("UrlValidator", (Xd = cc11001100_hook("Xd", ValidatorBase, "assign"), __extends(Yd, Xd), Yd.prototype.evaluate = cc11001100_hook("Yd.prototype.evaluate", function () {
          return ComparisonOperator.evaluate(this.triggerPartModel.operator, this.getUrlPart(), this.triggerPartModel.valueToCompare, this.triggerPartModel.isNegative, this.triggerPartModel.isIgnoreCase, this.triggerPartModel.valuesToCompare);
        }, "assign"), Yd.prototype.getUrlPart = cc11001100_hook("Yd.prototype.getUrlPart", function () {
          var e = cc11001100_hook("e", ValidatorBase.getWindowLocation(), "var-init");
          switch (this.triggerPartModel.urlPart) {
            case IntegrationConfig.Model.UrlPartSelectorType.HostName:
              return e.hostname;
            case IntegrationConfig.Model.UrlPartSelectorType.PagePath:
              return e.pathname;
            case IntegrationConfig.Model.UrlPartSelectorType.PageUrl:
              return e.href;
            default:
              throw "Not supported url part selector" + this.triggerPartModel.urlPart;
          }
        }, "assign"), Yd), "var-init"),
        Xd;
      function Yd(e) {
        cc11001100_hook("e", e, "function-parameter");
        return Xd.call(this, e) || this;
      }
      IntegrationConfig.UrlValidator = cc11001100_hook("IntegrationConfig.UrlValidator", UrlValidator, "assign");
      var CookieValidator = cc11001100_hook("CookieValidator", (_d = cc11001100_hook("_d", ValidatorBase, "assign"), __extends(ae, _d), ae.prototype.evaluate = cc11001100_hook("ae.prototype.evaluate", function () {
          var e = cc11001100_hook("e", this.getCookie(this.triggerPartModel.cookieName), "var-init");
          return ComparisonOperator.evaluate(this.triggerPartModel.operator, e, this.triggerPartModel.valueToCompare, this.triggerPartModel.isNegative, this.triggerPartModel.isIgnoreCase, this.triggerPartModel.valuesToCompare);
        }, "assign"), ae.prototype.getCookie = cc11001100_hook("ae.prototype.getCookie", function (e) {
          for (var t = cc11001100_hook("t", e + "=", "var-init"), r = cc11001100_hook("r", ValidatorBase.getDocumentCookie().split(";"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < r.length; n++) {
            for (var o = cc11001100_hook("o", r[n], "var-init"); " " == o.charAt(0);) o = cc11001100_hook("o", o.substring(1), "assign");
            if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
          }
          return "";
        }, "assign"), ae), "var-init"),
        _d;
      function ae(e) {
        cc11001100_hook("e", e, "function-parameter");
        return _d.call(this, e) || this;
      }
      IntegrationConfig.CookieValidator = cc11001100_hook("IntegrationConfig.CookieValidator", CookieValidator, "assign");
      var JSVariableValidator = cc11001100_hook("JSVariableValidator", (je = cc11001100_hook("je", ValidatorBase, "assign"), __extends(ke, je), ke.prototype.evaluate = cc11001100_hook("ke.prototype.evaluate", function () {
          return ComparisonOperator.evaluate(this.triggerPartModel.operator, ValidatorBase.getJSVariableValue(this.triggerPartModel.variableName), this.triggerPartModel.valueToCompare, this.triggerPartModel.isNegative, this.triggerPartModel.isIgnoreCase, this.triggerPartModel.valuesToCompare);
        }, "assign"), ke), "var-init"),
        je;
      function ke(e) {
        cc11001100_hook("e", e, "function-parameter");
        return je.call(this, e) || this;
      }
      IntegrationConfig.JSVariableValidator = cc11001100_hook("IntegrationConfig.JSVariableValidator", JSVariableValidator, "assign");
      var UserAgentValidator = cc11001100_hook("UserAgentValidator", (me = cc11001100_hook("me", ValidatorBase, "assign"), __extends(ne, me), ne.prototype.evaluate = cc11001100_hook("ne.prototype.evaluate", function () {
          return ComparisonOperator.evaluate(this.triggerPartModel.operator, ValidatorBase.getUserAgent(), this.triggerPartModel.valueToCompare, this.triggerPartModel.isNegative, this.triggerPartModel.isIgnoreCase, this.triggerPartModel.valuesToCompare);
        }, "assign"), ne), "var-init"),
        me;
      function ne(e) {
        cc11001100_hook("e", e, "function-parameter");
        return me.call(this, e) || this;
      }
      IntegrationConfig.UserAgentValidator = cc11001100_hook("IntegrationConfig.UserAgentValidator", UserAgentValidator, "assign");
      var FalsyValidator = cc11001100_hook("FalsyValidator", (pe = cc11001100_hook("pe", ValidatorBase, "assign"), __extends(qe, pe), qe.prototype.evaluate = cc11001100_hook("qe.prototype.evaluate", function () {
          return !1;
        }, "assign"), qe), "var-init"),
        pe;
      function qe(e) {
        cc11001100_hook("e", e, "function-parameter");
        return pe.call(this, e) || this;
      }
      IntegrationConfig.FalsyValidator = cc11001100_hook("IntegrationConfig.FalsyValidator", FalsyValidator, "assign");
      var ComparisonOperator = cc11001100_hook("ComparisonOperator", (se.containsAny = cc11001100_hook("se.containsAny", function (e, t, r, n) {
        for (var o = cc11001100_hook("o", 0, "var-init"), i = cc11001100_hook("i", n || [], "var-init"); o < i.length; o++) if (se.contains(!1, t, r, i[o])) return !e;
        return e;
      }, "assign"), se.equalsAny = cc11001100_hook("se.equalsAny", function (e, t, r, n) {
        for (var o = cc11001100_hook("o", 0, "var-init"), i = cc11001100_hook("i", n || [], "var-init"); o < i.length; o++) if (se.equals(!1, t, r, i[o])) return !e;
        return e;
      }, "assign"), se.contains = cc11001100_hook("se.contains", function (e, t, r, n) {
        if ("*" == n && r && 0 < r.length) return !0;
        var o = cc11001100_hook("o", !1, "var-init");
        return o = cc11001100_hook("o", t ? -1 < r.toUpperCase().indexOf(n.toUpperCase()) : -1 < r.indexOf(n), "assign"), e ? !o : o;
      }, "assign"), se.equals = cc11001100_hook("se.equals", function (e, t, r, n) {
        var o = cc11001100_hook("o", !1, "var-init");
        return o = cc11001100_hook("o", t ? r.toUpperCase() === n.toUpperCase() : r === n, "assign"), e ? !o : o;
      }, "assign"), se.evaluate = cc11001100_hook("se.evaluate", function (e, t, r, n, o, i) {
        var a = cc11001100_hook("a", String(t), "var-init");
        if (null == n) return this.evaluate_1_0_0_1(e, a, String(r));
        switch (e) {
          case IntegrationConfig.Model.ComparisonOperatorType.Equals:
            return se.equals(n, o, a, String(r));
          case IntegrationConfig.Model.ComparisonOperatorType.Contains:
            return se.contains(n, o, a, String(r));
          case IntegrationConfig.Model.ComparisonOperatorType.ContainsAny:
            return se.containsAny(n, o, a, i);
          case IntegrationConfig.Model.ComparisonOperatorType.EqualsAny:
            return se.equalsAny(n, o, a, i);
          default:
            throw "Not supported  operator : " + e;
        }
      }, "assign"), se.evaluate_1_0_0_1 = cc11001100_hook("se.evaluate_1_0_0_1", function (e, t, r) {
        switch (e) {
          case IntegrationConfig.Model.ComparisonOperatorType.Equals:
            return se.equals(!1, !1, t, r);
          case IntegrationConfig.Model.ComparisonOperatorType.NotEquals:
            return se.equals(!0, !1, t, r);
          case IntegrationConfig.Model.ComparisonOperatorType.Contains:
            return se.contains(!1, !1, t, r);
          case IntegrationConfig.Model.ComparisonOperatorType.NotContains:
            return se.contains(!0, !1, t, r);
          case IntegrationConfig.Model.ComparisonOperatorType.IgEquals:
            return se.equals(!1, !0, t, r);
          case IntegrationConfig.Model.ComparisonOperatorType.IgContains:
            return se.contains(!1, !0, t, r);
          default:
            throw "Not supported  operator : " + e;
        }
      }, "assign"), se), "var-init");
      function se() {}
      function getDefaultWindowProtocol() {
        return window.location.protocol;
      }
      function applyIntegrationConfig(e, t, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        if (void 0 === t && (t = cc11001100_hook("t", IntegrationPointBase.CreateIntegrationPoint, "assign")), void 0 === r && (r = cc11001100_hook("r", null, "assign")), e) {
          for (var n = cc11001100_hook("n", 0, "var-init"), o = cc11001100_hook("o", e.integrations, "var-init"); n < o.length; n++) {
            var i = cc11001100_hook("i", t(o[n]), "var-init");
            if (i.evaluate()) {
              if (i.getActionType() === IntegrationConfig.Model.ActionType.QueueAction) {
                var a = cc11001100_hook("a", i.getQueueClientConfig(e.customerId), "var-init");
                window.myQueueClient = cc11001100_hook("window.myQueueClient", window.queueClient(e.customerId, a.eventId, a), "assign");
              } else if (i.getActionType() === IntegrationConfig.Model.ActionType.CancelAction) {
                var u = cc11001100_hook("u", i, "var-init");
                r = cc11001100_hook("r", r || getDefaultWindowProtocol, "assign");
                var s = cc11001100_hook("s", u.getQueueDomain(), "var-init");
                s = cc11001100_hook("s", s || e.customerId + ".queue-it.net", "assign"), new QueueIt.Javascript.CookieManager(e.customerId, u.getEventId(), r() + "//" + s, u.getCookieDomain(), u.isCookieSecure()).cancelQueueId();
              } else if (i.getActionType() === IntegrationConfig.Model.ActionType.IgnoreAction) {
                var l = cc11001100_hook("l", QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag(), "var-init");
                (l.intercept || l.interceptVNext) && QueueIt.Javascript.KnownUser.UrlQueueClientInitializer.tryInitQueueClientFromToken(l);
              }
              return;
            }
          }
          var d = cc11001100_hook("d", QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag(), "var-init");
          (d.intercept || d.interceptVNext) && QueueIt.Javascript.KnownUser.UrlQueueClientInitializer.tryInitQueueClientFromToken(d);
        }
      }
      function loadIntegrationConfig(e) {
        cc11001100_hook("e", e, "function-parameter");
        void 0 === e && (e = cc11001100_hook("e", new Date(), "assign"));
        var t = cc11001100_hook("t", QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag(), "var-init");
        t.noAutorun || loadIntegrationConfigFromServer(e, t);
      }
      function loadIntegrationConfigFromServer(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        if (void 0 === e && (e = cc11001100_hook("e", new Date(), "assign")), void 0 === t && (t = cc11001100_hook("t", null, "assign")), !(t = cc11001100_hook("t", t || QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag(), "assign"))) throw "No queueit attribute is found in script tag";
        var r = cc11001100_hook("r", "", "var-init");
        if (t.noCacheRequest) r = cc11001100_hook("r", e.getTime().toString(), "assign");else {
          var n = cc11001100_hook("n", e.getFullYear(), "var-init"),
            o = cc11001100_hook("o", e.getMonth() + 1, "var-init"),
            i = cc11001100_hook("i", e.getDate(), "var-init"),
            a = cc11001100_hook("a", e.getHours(), "var-init"),
            u = cc11001100_hook("u", Math.floor(e.getMinutes() / 5), "var-init");
          r = cc11001100_hook("r", n + "" + (o < 10 ? "0" + o : o) + (i < 10 ? "0" + i : i) + (a < 10 ? "0" : a) + a + (u < 10 ? "0" + u : u), "assign");
        }
        var s = cc11001100_hook("s", document.createElement("script"), "var-init");
        s.type = cc11001100_hook("s.type", "text/javascript", "assign"), s.src = cc11001100_hook("s.src", getIntegrationConfigUrl(t) + "?versionTimestamp=" + r, "assign"), document.getElementsByTagName("head")[0].appendChild(s);
      }
      function getIntegrationConfigUrl(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (!e || !e.cid) throw "customer id is not found";
        var t = cc11001100_hook("t", "https://assets.queue-it.net/", "var-init");
        return e.jsHost && (t = cc11001100_hook("t", e.jsHost, "assign")), t + e.cid + "/integrationconfig/javascript/queueclientConfig.js";
      }
      function initQueueClient(e) {
        cc11001100_hook("e", e, "function-parameter");
        applyIntegrationConfig(e);
      }
      function validateUser(e) {
        cc11001100_hook("e", e, "function-parameter");
        void 0 === e && (e = cc11001100_hook("e", !1, "assign")), e ? loadIntegrationConfigFromServer() : window.queueit_clientside_config && applyIntegrationConfig(window.queueit_clientside_config);
      }
      function isIntegrationConfigReady() {
        return !!window.queueit_clientside_config;
      }
      function getIntegrationConfig() {
        return window.queueit_clientside_config;
      }
      IntegrationConfig.ComparisonOperator = cc11001100_hook("IntegrationConfig.ComparisonOperator", ComparisonOperator, "assign"), IntegrationConfig.applyIntegrationConfig = cc11001100_hook("IntegrationConfig.applyIntegrationConfig", applyIntegrationConfig, "assign"), IntegrationConfig.loadIntegrationConfig = cc11001100_hook("IntegrationConfig.loadIntegrationConfig", loadIntegrationConfig, "assign"), IntegrationConfig.loadIntegrationConfigFromServer = cc11001100_hook("IntegrationConfig.loadIntegrationConfigFromServer", loadIntegrationConfigFromServer, "assign"), QueueIt.Javascript.PageEventIntegration = cc11001100_hook("QueueIt.Javascript.PageEventIntegration", {
        initQueueClient: cc11001100_hook("initQueueClient", applyIntegrationConfig, "object-key-init")
      }, "assign"), IntegrationConfig.initQueueClient = cc11001100_hook("IntegrationConfig.initQueueClient", initQueueClient, "assign"), QueueIt.validateUser = cc11001100_hook("QueueIt.validateUser", validateUser, "assign"), QueueIt.getIntegrationConfig = cc11001100_hook("QueueIt.getIntegrationConfig", getIntegrationConfig, "assign"), QueueIt.isIntegrationConfigReady = cc11001100_hook("QueueIt.isIntegrationConfigReady", isIntegrationConfigReady, "assign");
    }(IntegrationConfig = cc11001100_hook("IntegrationConfig", Javascript.IntegrationConfig || (Javascript.IntegrationConfig = cc11001100_hook("Javascript.IntegrationConfig", {}, "assign")), "assign"));
  }(Javascript = cc11001100_hook("Javascript", QueueIt.Javascript || (QueueIt.Javascript = cc11001100_hook("QueueIt.Javascript", {}, "assign")), "assign"));
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), function (i) {
  var e, t;
  function r() {}
  e = cc11001100_hook("e", i.Tools || (i.Tools = cc11001100_hook("i.Tools", {}, "assign")), "assign"), r.setup = cc11001100_hook("r.setup", function (n) {
    if (n) {
      var e = cc11001100_hook("e", "function" == typeof n.pushState, "var-init"),
        o = cc11001100_hook("o", n.pushState, "var-init");
      e && (n.pushState = cc11001100_hook("n.pushState", function (e, t, r) {
        o.apply(n, arguments), i.validateUser();
      }, "assign"));
    } else console.warn("browser doesn't support history");
  }, "assign"), t = cc11001100_hook("t", r, "assign"), e.SpaHelper = cc11001100_hook("e.SpaHelper", t, "assign");
}(QueueIt = cc11001100_hook("QueueIt", QueueIt || {}, "assign")), QueueIt.Javascript.IntegrationConfig.isInitialized) console.log("IntegrationConfigLoader is already initialized!");else {
  var en = cc11001100_hook("en", QueueIt.Tools.EnvironmentHelper.retrieveEnvInfoFromScriptTag(), "var-init");
  en && en.cid && (en.interceptVNext ? QueueIt.Javascript.KnownUser.AjaxVNextInterceptor.interceptOpen(en.domainToIntercept, en) : en.intercept && QueueIt.Javascript.KnownUser.AjaxInterceptor.interceptOpen(en.domainToIntercept, en), (en.interceptVNext || en.intercept) && QueueIt.Javascript.KnownUser.FetchInterceptor.interceptFetch(en.domainToIntercept, en), en.isSPA && QueueIt.Tools.SpaHelper.setup(history)), QueueIt.Javascript.IntegrationConfig.loadIntegrationConfig(), QueueIt.Javascript.IntegrationConfig.isInitialized = cc11001100_hook("QueueIt.Javascript.IntegrationConfig.isInitialized", !0, "assign");
}