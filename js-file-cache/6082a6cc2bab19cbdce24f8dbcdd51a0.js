//tealium universal tag - utag.1152 ut4.0.202303230638, Copyright 2023 Tealium.com Inc. All Rights Reserved.
var aa = cc11001100_hook("aa", s_gi("asiaml-cx-globalmaster-dev"), "var-init");
aa.account = cc11001100_hook("aa.account", "asiaml-cx-globalmaster-dev", "assign");
aa.trackDownloadLinks = cc11001100_hook("aa.trackDownloadLinks", true, "assign");
aa.trackExternalLinks = cc11001100_hook("aa.trackExternalLinks", true, "assign");
aa.trackInlineStats = cc11001100_hook("aa.trackInlineStats", true, "assign");
aa.linkInternalFilters = cc11001100_hook("aa.linkInternalFilters", "javascript:,asiamiles.com,cathaypacific.com", "assign");
aa.linkLeaveQueryString = cc11001100_hook("aa.linkLeaveQueryString", false, "assign");
aa.linkTrackVars = cc11001100_hook("aa.linkTrackVars", "None", "assign");
aa.linkTrackEvents = cc11001100_hook("aa.linkTrackEvents", "None", "assign");
aa.usePlugins = cc11001100_hook("aa.usePlugins", false, "assign");
aa.currencyCode = cc11001100_hook("aa.currencyCode", "USD", "assign");
aa.visitorNamespace = cc11001100_hook("aa.visitorNamespace", "cathaypacific", "assign");
aa.trackingServer = cc11001100_hook("aa.trackingServer", "metrics.cathaypacific.com", "assign");
aa.trackingServerSecure = cc11001100_hook("aa.trackingServerSecure", "metrics.cathaypacific.com", "assign");
aa.charSet = cc11001100_hook("aa.charSet", "UTF-8", "assign");
aa.expectSupplementalData = cc11001100_hook("aa.expectSupplementalData", true, "assign");
aa.debugTracking = cc11001100_hook("aa.debugTracking", utag.cfg ? utag.cfg.utagdb : false, "assign");
function AppMeasurement(r) {
  cc11001100_hook("r", r, "function-parameter");
  var a = cc11001100_hook("a", this, "var-init");
  a.version = cc11001100_hook("a.version", "2.22.0", "assign");
  var h = cc11001100_hook("h", window, "var-init");
  h.s_c_in || (h.s_c_il = cc11001100_hook("h.s_c_il", [], "assign"), h.s_c_in = cc11001100_hook("h.s_c_in", 0, "assign"));
  a._il = cc11001100_hook("a._il", h.s_c_il, "assign");
  a._in = cc11001100_hook("a._in", h.s_c_in, "assign");
  a._il[a._in] = cc11001100_hook("a._il[a._in]", a, "assign");
  h.s_c_in++;
  a._c = cc11001100_hook("a._c", "s_c", "assign");
  var q = cc11001100_hook("q", h.AppMeasurement.ic, "var-init");
  q || (q = cc11001100_hook("q", null, "assign"));
  var p = cc11001100_hook("p", h, "var-init"),
    m,
    s;
  try {
    for (m = cc11001100_hook("m", p.parent, "assign"), s = cc11001100_hook("s", p.location, "assign"); m && m.location && s && "" + m.location !== "" + s && p.location && "" + m.location !== "" + p.location && m.location.host === s.host;) p = cc11001100_hook("p", m, "assign"), m = cc11001100_hook("m", p.parent, "assign");
  } catch (u) {}
  a.C = cc11001100_hook("a.C", function (a) {
    try {
      console.log(a);
    } catch (b) {}
  }, "assign");
  a.Ra = cc11001100_hook("a.Ra", function (a) {
    return "" + parseInt(a) == "" + a;
  }, "assign");
  a.replace = cc11001100_hook("a.replace", function (a, b, d) {
    return !a || 0 > a.indexOf(b) ? a : a.split(b).join(d);
  }, "assign");
  a.escape = cc11001100_hook("a.escape", function (c) {
    var b, d;
    if (!c) return c;
    c = cc11001100_hook("c", encodeURIComponent(c), "assign");
    for (b = cc11001100_hook("b", 0, "assign"); 7 > b; b++) d = cc11001100_hook("d", "+~!*()'".substring(b, b + 1), "assign"), 0 <= c.indexOf(d) && (c = cc11001100_hook("c", a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()), "assign"));
    return c;
  }, "assign");
  a.unescape = cc11001100_hook("a.unescape", function (c) {
    if (!c) return c;
    c = cc11001100_hook("c", 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c, "assign");
    try {
      return decodeURIComponent(c);
    } catch (b) {}
    return unescape(c);
  }, "assign");
  a.Nb = cc11001100_hook("a.Nb", function () {
    var c = cc11001100_hook("c", h.location.hostname, "var-init"),
      b = cc11001100_hook("b", a.fpCookieDomainPeriods, "var-init"),
      d;
    b || (b = cc11001100_hook("b", a.cookieDomainPeriods, "assign"));
    if (c && !a.Ka && !/^[0-9.]+$/.test(c) && (b = cc11001100_hook("b", b ? parseInt(b) : 2, "assign"), b = cc11001100_hook("b", 2 < b ? b : 2, "assign"), d = cc11001100_hook("d", c.lastIndexOf("."), "assign"), 0 <= d)) {
      for (; 0 <= d && 1 < b;) d = cc11001100_hook("d", c.lastIndexOf(".", d - 1), "assign"), b--;
      a.Ka = cc11001100_hook("a.Ka", 0 < d ? c.substring(d) : c, "assign");
    }
    return a.Ka;
  }, "assign");
  a.c_r = cc11001100_hook("a.c_r", a.cookieRead = cc11001100_hook("a.cookieRead", function (c) {
    c = cc11001100_hook("c", a.escape(c), "assign");
    var b = cc11001100_hook("b", " " + a.d.cookie, "var-init"),
      d = cc11001100_hook("d", b.indexOf(" " + c + "="), "var-init"),
      f = cc11001100_hook("f", 0 > d ? d : b.indexOf(";", d), "var-init");
    c = cc11001100_hook("c", 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f)), "assign");
    return "[[B]]" != c ? c : "";
  }, "assign"), "assign");
  a.c_w = cc11001100_hook("a.c_w", a.cookieWrite = cc11001100_hook("a.cookieWrite", function (c, b, d) {
    var f = cc11001100_hook("f", a.Nb(), "var-init"),
      e = cc11001100_hook("e", a.cookieLifetime, "var-init"),
      g;
    b = cc11001100_hook("b", "" + b, "assign");
    e = cc11001100_hook("e", e ? ("" + e).toUpperCase() : "", "assign");
    d && "SESSION" != e && "NONE" != e && ((g = cc11001100_hook("g", "" != b ? parseInt(e ? e : 0) : -60, "assign")) ? (d = cc11001100_hook("d", new Date(), "assign"), d.setTime(d.getTime() + 1E3 * g)) : 1 === d && (d = cc11001100_hook("d", new Date(), "assign"), g = cc11001100_hook("g", d.getYear(), "assign"), d.setYear(g + 2 + (1900 > g ? 1900 : 0))));
    return c && "NONE" != e ? (a.d.cookie = cc11001100_hook("a.d.cookie", a.escape(c) + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toUTCString() + ";" : "") + (f ? " domain=" + f + ";" : "") + (a.writeSecureCookies ? " secure;" : ""), "assign"), a.cookieRead(c) == b) : 0;
  }, "assign"), "assign");
  a.Kb = cc11001100_hook("a.Kb", function () {
    var c = cc11001100_hook("c", a.Util.getIeVersion(), "var-init");
    "number" === typeof c && 10 > c && (a.unsupportedBrowser = cc11001100_hook("a.unsupportedBrowser", !0, "assign"), a.xb(a, function () {}));
  }, "assign");
  a.ya = cc11001100_hook("a.ya", function () {
    var a = cc11001100_hook("a", navigator.userAgent, "var-init");
    return "Microsoft Internet Explorer" === navigator.appName || 0 <= a.indexOf("MSIE ") || 0 <= a.indexOf("Trident/") && 0 <= a.indexOf("Windows NT 6") ? !0 : !1;
  }, "assign");
  a.xb = cc11001100_hook("a.xb", function (a, b) {
    for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && "function" === typeof a[d] && (a[d] = cc11001100_hook("a[d]", b, "assign"));
  }, "assign");
  a.K = cc11001100_hook("a.K", [], "assign");
  a.fa = cc11001100_hook("a.fa", function (c, b, d) {
    if (a.La) return 0;
    a.maxDelay || (a.maxDelay = cc11001100_hook("a.maxDelay", 250, "assign"));
    var f = cc11001100_hook("f", 0, "var-init"),
      e = cc11001100_hook("e", new Date().getTime() + a.maxDelay, "var-init"),
      g = cc11001100_hook("g", a.d.visibilityState, "var-init"),
      k = cc11001100_hook("k", ["webkitvisibilitychange", "visibilitychange"], "var-init");
    g || (g = cc11001100_hook("g", a.d.webkitVisibilityState, "assign"));
    if (g && "prerender" == g) {
      if (!a.ga) for (a.ga = cc11001100_hook("a.ga", 1, "assign"), d = cc11001100_hook("d", 0, "assign"); d < k.length; d++) a.d.addEventListener(k[d], function () {
        var c = cc11001100_hook("c", a.d.visibilityState, "var-init");
        c || (c = cc11001100_hook("c", a.d.webkitVisibilityState, "assign"));
        "visible" == c && (a.ga = cc11001100_hook("a.ga", 0, "assign"), a.delayReady());
      });
      f = cc11001100_hook("f", 1, "assign");
      e = cc11001100_hook("e", 0, "assign");
    } else d || a.u("_d") && (f = cc11001100_hook("f", 1, "assign"));
    f && (a.K.push({
      m: cc11001100_hook("m", c, "object-key-init"),
      a: cc11001100_hook("a", b, "object-key-init"),
      t: cc11001100_hook("t", e, "object-key-init")
    }), a.ga || setTimeout(a.delayReady, a.maxDelay));
    return f;
  }, "assign");
  a.delayReady = cc11001100_hook("a.delayReady", function () {
    var c = cc11001100_hook("c", new Date().getTime(), "var-init"),
      b = cc11001100_hook("b", 0, "var-init"),
      d;
    for (a.u("_d") ? b = cc11001100_hook("b", 1, "assign") : a.Aa(); 0 < a.K.length;) {
      d = cc11001100_hook("d", a.K.shift(), "assign");
      if (b && !d.t && d.t > c) {
        a.K.unshift(d);
        setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
        break;
      }
      a.La = cc11001100_hook("a.La", 1, "assign");
      a[d.m].apply(a, d.a);
      a.La = cc11001100_hook("a.La", 0, "assign");
    }
  }, "assign");
  a.setAccount = cc11001100_hook("a.setAccount", a.sa = cc11001100_hook("a.sa", function (c) {
    var b, d;
    if (!a.fa("setAccount", arguments)) if (a.account = cc11001100_hook("a.account", c, "assign"), a.allAccounts) for (b = cc11001100_hook("b", a.allAccounts.concat(c.split(",")), "assign"), a.allAccounts = cc11001100_hook("a.allAccounts", [], "assign"), b.sort(), d = cc11001100_hook("d", 0, "assign"); d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);else a.allAccounts = cc11001100_hook("a.allAccounts", c.split(","), "assign");
  }, "assign"), "assign");
  a.foreachVar = cc11001100_hook("a.foreachVar", function (c, b) {
    var d,
      f,
      e,
      g,
      k = cc11001100_hook("k", "", "var-init");
    e = cc11001100_hook("e", f = cc11001100_hook("f", "", "assign"), "assign");
    if (a.lightProfileID) d = cc11001100_hook("d", a.O, "assign"), (k = cc11001100_hook("k", a.lightTrackVars, "assign")) && (k = cc11001100_hook("k", "," + k + "," + a.la.join(",") + ",", "assign"));else {
      d = cc11001100_hook("d", a.g, "assign");
      if (a.pe || a.linkType) k = cc11001100_hook("k", a.linkTrackVars, "assign"), f = cc11001100_hook("f", a.linkTrackEvents, "assign"), a.pe && (e = cc11001100_hook("e", a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), "assign"), a[e] && (k = cc11001100_hook("k", a[e].ec, "assign"), f = cc11001100_hook("f", a[e].cc, "assign")));
      k && (k = cc11001100_hook("k", "," + k + "," + a.F.join(",") + ",", "assign"));
      f && k && (k += cc11001100_hook("k", ",events,", "assign"));
    }
    b && (b = cc11001100_hook("b", "," + b + ",", "assign"));
    for (f = cc11001100_hook("f", 0, "assign"); f < d.length; f++) e = cc11001100_hook("e", d[f], "assign"), (g = cc11001100_hook("g", a[e], "assign")) && (!k || 0 <= k.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g);
  }, "assign");
  a.o = cc11001100_hook("a.o", function (c, b, d, f, e) {
    var g = cc11001100_hook("g", "", "var-init"),
      k,
      l,
      h,
      n,
      m = cc11001100_hook("m", 0, "var-init");
    "contextData" == c && (c = cc11001100_hook("c", "c", "assign"));
    if (b) {
      for (k in b) if (!(Object.prototype[k] || e && k.substring(0, e.length) != e) && b[k] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + k + ","))) {
        h = cc11001100_hook("h", !1, "assign");
        if (m) for (l = cc11001100_hook("l", 0, "assign"); l < m.length; l++) if (k.substring(0, m[l].length) == m[l]) {
          h = cc11001100_hook("h", !0, "assign");
          break;
        }
        if (!h && ("" == g && (g += cc11001100_hook("g", "&" + c + ".", "assign")), l = cc11001100_hook("l", b[k], "assign"), e && (k = cc11001100_hook("k", k.substring(e.length), "assign")), 0 < k.length)) if (h = cc11001100_hook("h", k.indexOf("."), "assign"), 0 < h) l = cc11001100_hook("l", k.substring(0, h), "assign"), h = cc11001100_hook("h", (e ? e : "") + l + ".", "assign"), m || (m = cc11001100_hook("m", [], "assign")), m.push(h), g += cc11001100_hook("g", a.o(l, b, d, f, h), "assign");else if ("boolean" == typeof l && (l = cc11001100_hook("l", l ? "true" : "false", "assign")), l) {
          if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (h = cc11001100_hook("h", k.substring(0, 4), "assign"), n = cc11001100_hook("n", k.substring(4), "assign"), k) {
            case "transactionID":
              k = cc11001100_hook("k", "xact", "assign");
              break;
            case "channel":
              k = cc11001100_hook("k", "ch", "assign");
              break;
            case "campaign":
              k = cc11001100_hook("k", "v0", "assign");
              break;
            default:
              a.Ra(n) && ("prop" == h ? k = cc11001100_hook("k", "c" + n, "assign") : "eVar" == h ? k = cc11001100_hook("k", "v" + n, "assign") : "list" == h ? k = cc11001100_hook("k", "l" + n, "assign") : "hier" == h && (k = cc11001100_hook("k", "h" + n, "assign"), l = cc11001100_hook("l", l.substring(0, 255), "assign")));
          }
          g += cc11001100_hook("g", "&" + a.escape(k) + "=" + a.escape(l), "assign");
        }
      }
      "" != g && (g += cc11001100_hook("g", "&." + c, "assign"));
    }
    return g;
  }, "assign");
  a.usePostbacks = cc11001100_hook("a.usePostbacks", 0, "assign");
  a.Qb = cc11001100_hook("a.Qb", function () {
    var c = cc11001100_hook("c", "", "var-init"),
      b,
      d,
      f,
      e,
      g,
      k,
      l,
      h,
      n = cc11001100_hook("n", "", "var-init"),
      m = cc11001100_hook("m", "", "var-init"),
      p = cc11001100_hook("p", e = cc11001100_hook("e", "", "assign"), "var-init"),
      r = cc11001100_hook("r", a.T(), "var-init");
    if (a.lightProfileID) b = cc11001100_hook("b", a.O, "assign"), (n = cc11001100_hook("n", a.lightTrackVars, "assign")) && (n = cc11001100_hook("n", "," + n + "," + a.la.join(",") + ",", "assign"));else {
      b = cc11001100_hook("b", a.g, "assign");
      if (a.pe || a.linkType) n = cc11001100_hook("n", a.linkTrackVars, "assign"), m = cc11001100_hook("m", a.linkTrackEvents, "assign"), a.pe && (e = cc11001100_hook("e", a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), "assign"), a[e] && (n = cc11001100_hook("n", a[e].ec, "assign"), m = cc11001100_hook("m", a[e].cc, "assign")));
      n && (n = cc11001100_hook("n", "," + n + "," + a.F.join(",") + ",", "assign"));
      m && (m = cc11001100_hook("m", "," + m + ",", "assign"), n && (n += cc11001100_hook("n", ",events,", "assign")));
      a.events2 && (p += cc11001100_hook("p", ("" != p ? "," : "") + a.events2, "assign"));
    }
    if (r && r.getCustomerIDs) {
      e = cc11001100_hook("e", q, "assign");
      if (g = cc11001100_hook("g", r.getCustomerIDs(), "assign")) for (d in g) Object.prototype[d] || (f = cc11001100_hook("f", g[d], "assign"), "object" == typeof f && (e || (e = cc11001100_hook("e", {}, "assign")), f.id && (e[d + ".id"] = cc11001100_hook("e[d + \".id\"]", f.id, "assign")), f.authState && (e[d + ".as"] = cc11001100_hook("e[d + \".as\"]", f.authState, "assign"))));
      e && (c += cc11001100_hook("c", a.o("cid", e), "assign"));
    }
    a.AudienceManagement && a.AudienceManagement.isReady() && (c += cc11001100_hook("c", a.o("d", a.AudienceManagement.getEventCallConfigParams()), "assign"));
    for (d = cc11001100_hook("d", 0, "assign"); d < b.length; d++) {
      e = cc11001100_hook("e", b[d], "assign");
      g = cc11001100_hook("g", a[e], "assign");
      f = cc11001100_hook("f", e.substring(0, 4), "assign");
      k = cc11001100_hook("k", e.substring(4), "assign");
      g || ("events" == e && p ? (g = cc11001100_hook("g", p, "assign"), p = cc11001100_hook("p", "", "assign")) : "marketingCloudOrgID" == e && r && a.V("ECID") && (g = cc11001100_hook("g", r.marketingCloudOrgID, "assign")));
      if (g && (!n || 0 <= n.indexOf("," + e + ","))) {
        switch (e) {
          case "customerPerspective":
            e = cc11001100_hook("e", "cp", "assign");
            break;
          case "marketingCloudOrgID":
            e = cc11001100_hook("e", "mcorgid", "assign");
            break;
          case "supplementalDataID":
            e = cc11001100_hook("e", "sdid", "assign");
            break;
          case "timestamp":
            e = cc11001100_hook("e", "ts", "assign");
            break;
          case "dynamicVariablePrefix":
            e = cc11001100_hook("e", "D", "assign");
            break;
          case "visitorID":
            e = cc11001100_hook("e", "vid", "assign");
            break;
          case "marketingCloudVisitorID":
            e = cc11001100_hook("e", "mid", "assign");
            break;
          case "analyticsVisitorID":
            e = cc11001100_hook("e", "aid", "assign");
            break;
          case "audienceManagerLocationHint":
            e = cc11001100_hook("e", "aamlh", "assign");
            break;
          case "audienceManagerBlob":
            e = cc11001100_hook("e", "aamb", "assign");
            break;
          case "authState":
            e = cc11001100_hook("e", "as", "assign");
            break;
          case "pageURL":
            e = cc11001100_hook("e", "g", "assign");
            255 < g.length && (a.pageURLRest = cc11001100_hook("a.pageURLRest", g.substring(255), "assign"), g = cc11001100_hook("g", g.substring(0, 255), "assign"));
            break;
          case "pageURLRest":
            e = cc11001100_hook("e", "-g", "assign");
            break;
          case "referrer":
            e = cc11001100_hook("e", "r", "assign");
            break;
          case "vmk":
          case "visitorMigrationKey":
            e = cc11001100_hook("e", "vmt", "assign");
            break;
          case "visitorMigrationServer":
            e = cc11001100_hook("e", "vmf", "assign");
            a.ssl && a.visitorMigrationServerSecure && (g = cc11001100_hook("g", "", "assign"));
            break;
          case "visitorMigrationServerSecure":
            e = cc11001100_hook("e", "vmf", "assign");
            !a.ssl && a.visitorMigrationServer && (g = cc11001100_hook("g", "", "assign"));
            break;
          case "charSet":
            e = cc11001100_hook("e", "ce", "assign");
            break;
          case "visitorNamespace":
            e = cc11001100_hook("e", "ns", "assign");
            break;
          case "cookieDomainPeriods":
            e = cc11001100_hook("e", "cdp", "assign");
            break;
          case "cookieLifetime":
            e = cc11001100_hook("e", "cl", "assign");
            break;
          case "variableProvider":
            e = cc11001100_hook("e", "vvp", "assign");
            break;
          case "currencyCode":
            e = cc11001100_hook("e", "cc", "assign");
            break;
          case "channel":
            e = cc11001100_hook("e", "ch", "assign");
            break;
          case "transactionID":
            e = cc11001100_hook("e", "xact", "assign");
            break;
          case "campaign":
            e = cc11001100_hook("e", "v0", "assign");
            break;
          case "latitude":
            e = cc11001100_hook("e", "lat", "assign");
            break;
          case "longitude":
            e = cc11001100_hook("e", "lon", "assign");
            break;
          case "resolution":
            e = cc11001100_hook("e", "s", "assign");
            break;
          case "colorDepth":
            e = cc11001100_hook("e", "c", "assign");
            break;
          case "javascriptVersion":
            e = cc11001100_hook("e", "j", "assign");
            break;
          case "javaEnabled":
            e = cc11001100_hook("e", "v", "assign");
            break;
          case "cookiesEnabled":
            e = cc11001100_hook("e", "k", "assign");
            break;
          case "browserWidth":
            e = cc11001100_hook("e", "bw", "assign");
            break;
          case "browserHeight":
            e = cc11001100_hook("e", "bh", "assign");
            break;
          case "connectionType":
            e = cc11001100_hook("e", "ct", "assign");
            break;
          case "homepage":
            e = cc11001100_hook("e", "hp", "assign");
            break;
          case "events":
            p && (g += cc11001100_hook("g", ("" != g ? "," : "") + p, "assign"));
            if (m) for (k = cc11001100_hook("k", g.split(","), "assign"), g = cc11001100_hook("g", "", "assign"), f = cc11001100_hook("f", 0, "assign"); f < k.length; f++) l = cc11001100_hook("l", k[f], "assign"), h = cc11001100_hook("h", l.indexOf("="), "assign"), 0 <= h && (l = cc11001100_hook("l", l.substring(0, h), "assign")), h = cc11001100_hook("h", l.indexOf(":"), "assign"), 0 <= h && (l = cc11001100_hook("l", l.substring(0, h), "assign")), 0 <= m.indexOf("," + l + ",") && (g += cc11001100_hook("g", (g ? "," : "") + k[f], "assign"));
            break;
          case "events2":
            g = cc11001100_hook("g", "", "assign");
            break;
          case "contextData":
            c += cc11001100_hook("c", a.o("c", a[e], n, e), "assign");
            g = cc11001100_hook("g", "", "assign");
            break;
          case "lightProfileID":
            e = cc11001100_hook("e", "mtp", "assign");
            break;
          case "lightStoreForSeconds":
            e = cc11001100_hook("e", "mtss", "assign");
            a.lightProfileID || (g = cc11001100_hook("g", "", "assign"));
            break;
          case "lightIncrementBy":
            e = cc11001100_hook("e", "mti", "assign");
            a.lightProfileID || (g = cc11001100_hook("g", "", "assign"));
            break;
          case "retrieveLightProfiles":
            e = cc11001100_hook("e", "mtsr", "assign");
            break;
          case "deleteLightProfiles":
            e = cc11001100_hook("e", "mtsd", "assign");
            break;
          case "retrieveLightData":
            a.retrieveLightProfiles && (c += cc11001100_hook("c", a.o("mts", a[e], n, e), "assign"));
            g = cc11001100_hook("g", "", "assign");
            break;
          default:
            a.Ra(k) && ("prop" == f ? e = cc11001100_hook("e", "c" + k, "assign") : "eVar" == f ? e = cc11001100_hook("e", "v" + k, "assign") : "list" == f ? e = cc11001100_hook("e", "l" + k, "assign") : "hier" == f && (e = cc11001100_hook("e", "h" + k, "assign"), g = cc11001100_hook("g", g.substring(0, 255), "assign")));
        }
        g && (c += cc11001100_hook("c", "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g), "assign"));
      }
      "pev3" == e && a.e && (c += cc11001100_hook("c", a.e, "assign"));
    }
    a.ka && (c += cc11001100_hook("c", "&lrt=" + a.ka, "assign"), a.ka = cc11001100_hook("a.ka", null, "assign"));
    return c;
  }, "assign");
  a.B = cc11001100_hook("a.B", function (a) {
    var b = cc11001100_hook("b", a.tagName, "var-init");
    if ("undefined" != "" + a.lc || "undefined" != "" + a.Zb && "HTML" != ("" + a.Zb).toUpperCase()) return "";
    b = cc11001100_hook("b", b && b.toUpperCase ? b.toUpperCase() : "", "assign");
    "SHAPE" == b && (b = cc11001100_hook("b", "", "assign"));
    b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = cc11001100_hook("b", a.type.toUpperCase(), "assign") : !b && a.href && (b = cc11001100_hook("b", "A", "assign")));
    return b;
  }, "assign");
  a.Na = cc11001100_hook("a.Na", function (a) {
    var b = cc11001100_hook("b", h.location, "var-init"),
      d = cc11001100_hook("d", a.href ? a.href : "", "var-init"),
      f,
      e,
      g;
    f = cc11001100_hook("f", d.indexOf(":"), "assign");
    e = cc11001100_hook("e", d.indexOf("?"), "assign");
    g = cc11001100_hook("g", d.indexOf("/"), "assign");
    d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = cc11001100_hook("e", a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : "", "assign"), f = cc11001100_hook("f", b.pathname.lastIndexOf("/"), "assign"), d = cc11001100_hook("d", (e ? e + "//" : "") + (a.host ? a.host : b.host ? b.host : "") + ("/" != d.substring(0, 1) ? b.pathname.substring(0, 0 > f ? 0 : f) + "/" : "") + d, "assign"));
    return d;
  }, "assign");
  a.L = cc11001100_hook("a.L", function (c) {
    var b = cc11001100_hook("b", a.B(c), "var-init"),
      d,
      f,
      e = cc11001100_hook("e", "", "var-init"),
      g = cc11001100_hook("g", 0, "var-init");
    return b && (d = cc11001100_hook("d", c.protocol, "assign"), f = cc11001100_hook("f", c.onclick, "assign"), !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = cc11001100_hook("e", a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), "assign"), g = cc11001100_hook("g", 2, "assign")) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = cc11001100_hook("e", c.value, "assign") : c.innerText ? e = cc11001100_hook("e", c.innerText, "assign") : c.textContent && (e = cc11001100_hook("e", c.textContent, "assign")), g = cc11001100_hook("g", 3, "assign")) : "IMAGE" == b && c.src && (e = cc11001100_hook("e", c.src, "assign")) : e = cc11001100_hook("e", a.Na(c), "assign"), e) ? {
      id: cc11001100_hook("id", e.substring(0, 100), "object-key-init"),
      type: cc11001100_hook("type", g, "object-key-init")
    } : 0;
  }, "assign");
  a.jc = cc11001100_hook("a.jc", function (c) {
    for (var b = cc11001100_hook("b", a.B(c), "var-init"), d = cc11001100_hook("d", a.L(c), "var-init"); c && !d && "BODY" != b;) if (c = cc11001100_hook("c", c.parentElement ? c.parentElement : c.parentNode, "assign")) b = cc11001100_hook("b", a.B(c), "assign"), d = cc11001100_hook("d", a.L(c), "assign");
    d && "BODY" != b || (c = cc11001100_hook("c", 0, "assign"));
    c && (b = cc11001100_hook("b", c.onclick ? "" + c.onclick : "", "assign"), 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = cc11001100_hook("c", 0, "assign"));
    return c;
  }, "assign");
  a.Yb = cc11001100_hook("a.Yb", function () {
    var c,
      b,
      d = cc11001100_hook("d", a.linkObject, "var-init"),
      f = cc11001100_hook("f", a.linkType, "var-init"),
      e = cc11001100_hook("e", a.linkURL, "var-init"),
      g,
      k;
    a.ma = cc11001100_hook("a.ma", 1, "assign");
    d || (a.ma = cc11001100_hook("a.ma", 0, "assign"), d = cc11001100_hook("d", a.clickObject, "assign"));
    if (d) {
      c = cc11001100_hook("c", a.B(d), "assign");
      for (b = cc11001100_hook("b", a.L(d), "assign"); d && !b && "BODY" != c;) if (d = cc11001100_hook("d", d.parentElement ? d.parentElement : d.parentNode, "assign")) c = cc11001100_hook("c", a.B(d), "assign"), b = cc11001100_hook("b", a.L(d), "assign");
      b && "BODY" != c || (d = cc11001100_hook("d", 0, "assign"));
      if (d && !a.linkObject) {
        var l = cc11001100_hook("l", d.onclick ? "" + d.onclick : "", "var-init");
        if (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) d = cc11001100_hook("d", 0, "assign");
      }
    } else a.ma = cc11001100_hook("a.ma", 1, "assign");
    !e && d && (e = cc11001100_hook("e", a.Na(d), "assign"));
    e && !a.linkLeaveQueryString && (g = cc11001100_hook("g", e.indexOf("?"), "assign"), 0 <= g && (e = cc11001100_hook("e", e.substring(0, g), "assign")));
    if (!f && e) {
      var m = cc11001100_hook("m", 0, "var-init"),
        n = cc11001100_hook("n", 0, "var-init"),
        p;
      if (a.trackDownloadLinks && a.linkDownloadFileTypes) for (l = cc11001100_hook("l", e.toLowerCase(), "assign"), g = cc11001100_hook("g", l.indexOf("?"), "assign"), k = cc11001100_hook("k", l.indexOf("#"), "assign"), 0 <= g ? 0 <= k && k < g && (g = cc11001100_hook("g", k, "assign")) : g = cc11001100_hook("g", k, "assign"), 0 <= g && (l = cc11001100_hook("l", l.substring(0, g), "assign")), g = cc11001100_hook("g", a.linkDownloadFileTypes.toLowerCase().split(","), "assign"), k = cc11001100_hook("k", 0, "assign"); k < g.length; k++) (p = cc11001100_hook("p", g[k], "assign")) && l.substring(l.length - (p.length + 1)) == "." + p && (f = cc11001100_hook("f", "d", "assign"));
      if (a.trackExternalLinks && !f && (l = cc11001100_hook("l", e.toLowerCase(), "assign"), a.Qa(l) && (a.linkInternalFilters || (a.linkInternalFilters = cc11001100_hook("a.linkInternalFilters", h.location.hostname, "assign")), g = cc11001100_hook("g", 0, "assign"), a.linkExternalFilters ? (g = cc11001100_hook("g", a.linkExternalFilters.toLowerCase().split(","), "assign"), m = cc11001100_hook("m", 1, "assign")) : a.linkInternalFilters && (g = cc11001100_hook("g", a.linkInternalFilters.toLowerCase().split(","), "assign")), g))) {
        for (k = cc11001100_hook("k", 0, "assign"); k < g.length; k++) p = cc11001100_hook("p", g[k], "assign"), 0 <= l.indexOf(p) && (n = cc11001100_hook("n", 1, "assign"));
        n ? m && (f = cc11001100_hook("f", "e", "assign")) : m || (f = cc11001100_hook("f", "e", "assign"));
      }
    }
    a.linkObject = cc11001100_hook("a.linkObject", d, "assign");
    a.linkURL = cc11001100_hook("a.linkURL", e, "assign");
    a.linkType = cc11001100_hook("a.linkType", f, "assign");
    if (a.trackClickMap || a.trackInlineStats) a.e = cc11001100_hook("a.e", "", "assign"), d && (f = cc11001100_hook("f", a.pageName, "assign"), e = cc11001100_hook("e", 1, "assign"), d = cc11001100_hook("d", d.sourceIndex, "assign"), f || (f = cc11001100_hook("f", a.pageURL, "assign"), e = cc11001100_hook("e", 0, "assign")), h.s_objectID && (b.id = cc11001100_hook("b.id", h.s_objectID, "assign"), d = cc11001100_hook("d", b.type = cc11001100_hook("b.type", 1, "assign"), "assign")), f && b && b.id && c && (a.e = cc11001100_hook("a.e", "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : ""), "assign")));
  }, "assign");
  a.Rb = cc11001100_hook("a.Rb", function () {
    var c = cc11001100_hook("c", a.ma, "var-init"),
      b = cc11001100_hook("b", a.linkType, "var-init"),
      d = cc11001100_hook("d", a.linkURL, "var-init"),
      f = cc11001100_hook("f", a.linkName, "var-init");
    b && (d || f) && (b = cc11001100_hook("b", b.toLowerCase(), "assign"), "d" != b && "e" != b && (b = cc11001100_hook("b", "o", "assign")), a.pe = cc11001100_hook("a.pe", "lnk_" + b, "assign"), a.pev1 = cc11001100_hook("a.pev1", d ? a.escape(d) : "", "assign"), a.pev2 = cc11001100_hook("a.pev2", f ? a.escape(f) : "", "assign"), c = cc11001100_hook("c", 1, "assign"));
    a.abort && (c = cc11001100_hook("c", 0, "assign"));
    if (a.trackClickMap || a.trackInlineStats || a.Ub()) {
      var b = cc11001100_hook("b", {}, "var-init"),
        d = cc11001100_hook("d", 0, "var-init"),
        e = cc11001100_hook("e", a.rb(), "var-init"),
        g = cc11001100_hook("g", e ? e.split("&") : 0, "var-init"),
        k,
        l,
        h,
        e = cc11001100_hook("e", 0, "var-init");
      if (g) for (k = cc11001100_hook("k", 0, "assign"); k < g.length; k++) l = cc11001100_hook("l", g[k].split("="), "assign"), f = cc11001100_hook("f", a.unescape(l[0]).split(","), "assign"), l = cc11001100_hook("l", a.unescape(l[1]), "assign"), b[l] = cc11001100_hook("b[l]", f, "assign");
      f = cc11001100_hook("f", a.account.split(","), "assign");
      k = cc11001100_hook("k", {}, "assign");
      for (h in a.contextData) h && !Object.prototype[h] && "a.activitymap." == h.substring(0, 14) && (k[h] = cc11001100_hook("k[h]", a.contextData[h], "assign"), a.contextData[h] = cc11001100_hook("a.contextData[h]", "", "assign"));
      a.e = cc11001100_hook("a.e", a.o("c", k) + (a.e ? a.e : ""), "assign");
      if (c || a.e) {
        c && !a.e && (e = cc11001100_hook("e", 1, "assign"));
        for (l in b) if (!Object.prototype[l]) for (h = cc11001100_hook("h", 0, "assign"); h < f.length; h++) for (e && (g = cc11001100_hook("g", b[l].join(","), "assign"), g == a.account && (a.e += cc11001100_hook("a.e", ("&" != l.charAt(0) ? "&" : "") + l, "assign"), b[l] = cc11001100_hook("b[l]", [], "assign"), d = cc11001100_hook("d", 1, "assign"))), k = cc11001100_hook("k", 0, "assign"); k < b[l].length; k++) g = cc11001100_hook("g", b[l][k], "assign"), g == f[h] && (e && (a.e += cc11001100_hook("a.e", "&u=" + a.escape(g) + ("&" != l.charAt(0) ? "&" : "") + l + "&u=0", "assign")), b[l].splice(k, 1), d = cc11001100_hook("d", 1, "assign"));
        c || (d = cc11001100_hook("d", 1, "assign"));
        if (d) {
          e = cc11001100_hook("e", "", "assign");
          k = cc11001100_hook("k", 2, "assign");
          !c && a.e && (e = cc11001100_hook("e", a.escape(f.join(",")) + "=" + a.escape(a.e), "assign"), k = cc11001100_hook("k", 1, "assign"));
          for (l in b) !Object.prototype[l] && 0 < k && 0 < b[l].length && (e += cc11001100_hook("e", (e ? "&" : "") + a.escape(b[l].join(",")) + "=" + a.escape(l), "assign"), k--);
          a.zb(e);
        }
      }
    }
    return c;
  }, "assign");
  a.rb = cc11001100_hook("a.rb", function () {
    if (a.useLinkTrackSessionStorage) {
      if (a.Ea()) return h.sessionStorage.getItem(a.P);
    } else return a.cookieRead(a.P);
  }, "assign");
  a.Ea = cc11001100_hook("a.Ea", function () {
    return h.sessionStorage ? !0 : !1;
  }, "assign");
  a.zb = cc11001100_hook("a.zb", function (c) {
    a.useLinkTrackSessionStorage ? a.Ea() && h.sessionStorage.setItem(a.P, c) : a.cookieWrite(a.P, c);
  }, "assign");
  a.Sb = cc11001100_hook("a.Sb", function () {
    if (!a.bc) {
      var c = cc11001100_hook("c", new Date(), "var-init"),
        b = cc11001100_hook("b", p.location, "var-init"),
        d,
        f,
        e = cc11001100_hook("e", f = cc11001100_hook("f", d = cc11001100_hook("d", "", "assign"), "assign"), "var-init"),
        g = cc11001100_hook("g", "", "var-init"),
        k = cc11001100_hook("k", "", "var-init"),
        l = cc11001100_hook("l", "1.2", "var-init"),
        h = cc11001100_hook("h", a.cookieWrite("s_cc", "true", 0) ? "Y" : "N", "var-init"),
        m = cc11001100_hook("m", "", "var-init"),
        q = cc11001100_hook("q", "", "var-init");
      if (c.setUTCDate && (l = cc11001100_hook("l", "1.3", "assign"), 0 .toPrecision && (l = cc11001100_hook("l", "1.5", "assign"), c = cc11001100_hook("c", [], "assign"), c.forEach))) {
        l = cc11001100_hook("l", "1.6", "assign");
        f = cc11001100_hook("f", 0, "assign");
        d = cc11001100_hook("d", {}, "assign");
        try {
          f = cc11001100_hook("f", new Iterator(d), "assign"), f.next && (l = cc11001100_hook("l", "1.7", "assign"), c.reduce && (l = cc11001100_hook("l", "1.8", "assign"), l.trim && (l = cc11001100_hook("l", "1.8.1", "assign"), Date.parse && (l = cc11001100_hook("l", "1.8.2", "assign"), Object.create && (l = cc11001100_hook("l", "1.8.5", "assign"))))));
        } catch (r) {}
      }
      d = cc11001100_hook("d", screen.width + "x" + screen.height, "assign");
      e = cc11001100_hook("e", navigator.javaEnabled() ? "Y" : "N", "assign");
      f = cc11001100_hook("f", screen.pixelDepth ? screen.pixelDepth : screen.colorDepth, "assign");
      g = cc11001100_hook("g", a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth, "assign");
      k = cc11001100_hook("k", a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight, "assign");
      try {
        a.b.addBehavior("#default#homePage"), m = cc11001100_hook("m", a.b.kc(b) ? "Y" : "N", "assign");
      } catch (s) {}
      try {
        a.b.addBehavior("#default#clientCaps"), q = cc11001100_hook("q", a.b.connectionType, "assign");
      } catch (t) {}
      a.resolution = cc11001100_hook("a.resolution", d, "assign");
      a.colorDepth = cc11001100_hook("a.colorDepth", f, "assign");
      a.javascriptVersion = cc11001100_hook("a.javascriptVersion", l, "assign");
      a.javaEnabled = cc11001100_hook("a.javaEnabled", e, "assign");
      a.cookiesEnabled = cc11001100_hook("a.cookiesEnabled", h, "assign");
      a.browserWidth = cc11001100_hook("a.browserWidth", g, "assign");
      a.browserHeight = cc11001100_hook("a.browserHeight", k, "assign");
      a.connectionType = cc11001100_hook("a.connectionType", q, "assign");
      a.homepage = cc11001100_hook("a.homepage", m, "assign");
      a.bc = cc11001100_hook("a.bc", 1, "assign");
    }
  }, "assign");
  a.Q = cc11001100_hook("a.Q", {}, "assign");
  a.loadModule = cc11001100_hook("a.loadModule", function (c, b) {
    var d = cc11001100_hook("d", a.Q[c], "var-init");
    if (!d) {
      d = cc11001100_hook("d", h["AppMeasurement_Module_" + c] ? new h["AppMeasurement_Module_" + c](a) : {}, "assign");
      a.Q[c] = cc11001100_hook("a.Q[c]", a[c] = cc11001100_hook("a[c]", d, "assign"), "assign");
      d.kb = cc11001100_hook("d.kb", function () {
        return d.ub;
      }, "assign");
      d.Ab = cc11001100_hook("d.Ab", function (b) {
        if (d.ub = cc11001100_hook("d.ub", b, "assign")) a[c + "_onLoad"] = cc11001100_hook("a[c + \"_onLoad\"]", b, "assign"), a.fa(c + "_onLoad", [a, d], 1) || b(a, d);
      }, "assign");
      try {
        Object.defineProperty ? Object.defineProperty(d, "onLoad", {
          get: cc11001100_hook("get", d.kb, "object-key-init"),
          set: cc11001100_hook("set", d.Ab, "object-key-init")
        }) : d._olc = cc11001100_hook("d._olc", 1, "assign");
      } catch (f) {
        d._olc = cc11001100_hook("d._olc", 1, "assign");
      }
    }
    b && (a[c + "_onLoad"] = cc11001100_hook("a[c + \"_onLoad\"]", b, "assign"), a.fa(c + "_onLoad", [a, d], 1) || b(a, d));
  }, "assign");
  a.u = cc11001100_hook("a.u", function (c) {
    var b, d;
    for (b in a.Q) if (!Object.prototype[b] && (d = cc11001100_hook("d", a.Q[b], "assign")) && (d._olc && d.onLoad && (d._olc = cc11001100_hook("d._olc", 0, "assign"), d.onLoad(a, d)), d[c] && d[c]())) return 1;
    return 0;
  }, "assign");
  a.Ub = cc11001100_hook("a.Ub", function () {
    return a.ActivityMap && a.ActivityMap._c ? !0 : !1;
  }, "assign");
  a.Vb = cc11001100_hook("a.Vb", function () {
    var c = cc11001100_hook("c", Math.floor(1E13 * Math.random()), "var-init"),
      b = cc11001100_hook("b", a.visitorSampling, "var-init"),
      d = cc11001100_hook("d", a.visitorSamplingGroup, "var-init"),
      d = cc11001100_hook("d", "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""), "var-init"),
      f = cc11001100_hook("f", a.cookieRead(d), "var-init");
    if (b) {
      b *= cc11001100_hook("b", 100, "assign");
      f && (f = cc11001100_hook("f", parseInt(f), "assign"));
      if (!f) {
        if (!a.cookieWrite(d, c)) return 0;
        f = cc11001100_hook("f", c, "assign");
      }
      if (f % 1E4 > b) return 0;
    }
    return 1;
  }, "assign");
  a.S = cc11001100_hook("a.S", function (c, b) {
    var d, f, e, g, k, h, m;
    m = cc11001100_hook("m", {}, "assign");
    for (d = cc11001100_hook("d", 0, "assign"); 2 > d; d++) for (f = cc11001100_hook("f", 0 < d ? a.Ga : a.g, "assign"), e = cc11001100_hook("e", 0, "assign"); e < f.length; e++) if (g = cc11001100_hook("g", f[e], "assign"), (k = cc11001100_hook("k", c[g], "assign")) || c["!" + g]) {
      if (k && !b && ("contextData" == g || "retrieveLightData" == g) && a[g]) for (h in a[g]) k[h] || (k[h] = cc11001100_hook("k[h]", a[g][h], "assign"));
      a[g] || (m["!" + g] = cc11001100_hook("m[\"!\" + g]", 1, "assign"));
      m[g] = cc11001100_hook("m[g]", a[g], "assign");
      a[g] = cc11001100_hook("a[g]", k, "assign");
    }
    return m;
  }, "assign");
  a.hc = cc11001100_hook("a.hc", function (c) {
    var b, d, f, e;
    for (b = cc11001100_hook("b", 0, "assign"); 2 > b; b++) for (d = cc11001100_hook("d", 0 < b ? a.Ga : a.g, "assign"), f = cc11001100_hook("f", 0, "assign"); f < d.length; f++) e = cc11001100_hook("e", d[f], "assign"), c[e] = cc11001100_hook("c[e]", a[e], "assign"), c[e] || "prop" !== e.substring(0, 4) && "eVar" !== e.substring(0, 4) && "hier" !== e.substring(0, 4) && "list" !== e.substring(0, 4) && "channel" !== e && "events" !== e && "eventList" !== e && "products" !== e && "productList" !== e && "purchaseID" !== e && "transactionID" !== e && "state" !== e && "zip" !== e && "campaign" !== e && "events2" !== e && "latitude" !== e && "longitude" !== e && "ms_a" !== e && "contextData" !== e && "supplementalDataID" !== e && "tnt" !== e && "timestamp" !== e && "abort" !== e && "useBeacon" !== e && "linkObject" !== e && "clickObject" !== e && "linkType" !== e && "linkName" !== e && "linkURL" !== e && "bodyClickTarget" !== e && "bodyClickFunction" !== e || (c["!" + e] = cc11001100_hook("c[\"!\" + e]", 1, "assign"));
  }, "assign");
  a.Mb = cc11001100_hook("a.Mb", function (a) {
    var b,
      d,
      f,
      e,
      g,
      k = cc11001100_hook("k", 0, "var-init"),
      h,
      m = cc11001100_hook("m", "", "var-init"),
      n = cc11001100_hook("n", "", "var-init");
    if (a && 255 < a.length && (b = cc11001100_hook("b", "" + a, "assign"), d = cc11001100_hook("d", b.indexOf("?"), "assign"), 0 < d && (h = cc11001100_hook("h", b.substring(d + 1), "assign"), b = cc11001100_hook("b", b.substring(0, d), "assign"), e = cc11001100_hook("e", b.toLowerCase(), "assign"), f = cc11001100_hook("f", 0, "assign"), "http://" == e.substring(0, 7) ? f += cc11001100_hook("f", 7, "assign") : "https://" == e.substring(0, 8) && (f += cc11001100_hook("f", 8, "assign")), d = cc11001100_hook("d", e.indexOf("/", f), "assign"), 0 < d && (e = cc11001100_hook("e", e.substring(f, d), "assign"), g = cc11001100_hook("g", b.substring(d), "assign"), b = cc11001100_hook("b", b.substring(0, d), "assign"), 0 <= e.indexOf("google") ? k = cc11001100_hook("k", ",q,ie,start,search_key,word,kw,cd,", "assign") : 0 <= e.indexOf("yahoo.co") ? k = cc11001100_hook("k", ",p,ei,", "assign") : 0 <= e.indexOf("baidu.") && (k = cc11001100_hook("k", ",wd,word,", "assign")), k && h)))) {
      if ((a = cc11001100_hook("a", h.split("&"), "assign")) && 1 < a.length) {
        for (f = cc11001100_hook("f", 0, "assign"); f < a.length; f++) e = cc11001100_hook("e", a[f], "assign"), d = cc11001100_hook("d", e.indexOf("="), "assign"), 0 < d && 0 <= k.indexOf("," + e.substring(0, d) + ",") ? m += cc11001100_hook("m", (m ? "&" : "") + e, "assign") : n += cc11001100_hook("n", (n ? "&" : "") + e, "assign");
        m && n ? h = cc11001100_hook("h", m + "&" + n, "assign") : n = cc11001100_hook("n", "", "assign");
      }
      d = cc11001100_hook("d", 253 - (h.length - n.length) - b.length, "assign");
      a = cc11001100_hook("a", b + (0 < d ? g.substring(0, d) : "") + "?" + h, "assign");
    }
    return a;
  }, "assign");
  a.eb = cc11001100_hook("a.eb", function (c) {
    var b = cc11001100_hook("b", a.d.visibilityState, "var-init"),
      d = cc11001100_hook("d", ["webkitvisibilitychange", "visibilitychange"], "var-init");
    b || (b = cc11001100_hook("b", a.d.webkitVisibilityState, "assign"));
    if (b && "prerender" == b) {
      if (c) for (b = cc11001100_hook("b", 0, "assign"); b < d.length; b++) a.d.addEventListener(d[b], function () {
        var b = cc11001100_hook("b", a.d.visibilityState, "var-init");
        b || (b = cc11001100_hook("b", a.d.webkitVisibilityState, "assign"));
        "visible" == b && c();
      });
      return !1;
    }
    return !0;
  }, "assign");
  a.ca = cc11001100_hook("a.ca", !1, "assign");
  a.H = cc11001100_hook("a.H", !1, "assign");
  a.Cb = cc11001100_hook("a.Cb", function () {
    a.H = cc11001100_hook("a.H", !0, "assign");
    a.p();
  }, "assign");
  a.I = cc11001100_hook("a.I", !1, "assign");
  a.Db = cc11001100_hook("a.Db", function (c) {
    a.marketingCloudVisitorID = cc11001100_hook("a.marketingCloudVisitorID", c.MCMID, "assign");
    a.visitorOptedOut = cc11001100_hook("a.visitorOptedOut", c.MCOPTOUT, "assign");
    a.analyticsVisitorID = cc11001100_hook("a.analyticsVisitorID", c.MCAID, "assign");
    a.audienceManagerLocationHint = cc11001100_hook("a.audienceManagerLocationHint", c.MCAAMLH, "assign");
    a.audienceManagerBlob = cc11001100_hook("a.audienceManagerBlob", c.MCAAMB, "assign");
    a.I = cc11001100_hook("a.I", !1, "assign");
    a.p();
  }, "assign");
  a.cb = cc11001100_hook("a.cb", function (c) {
    a.maxDelay || (a.maxDelay = cc11001100_hook("a.maxDelay", 250, "assign"));
    return a.u("_d") ? (c && setTimeout(function () {
      c();
    }, a.maxDelay), !1) : !0;
  }, "assign");
  a.aa = cc11001100_hook("a.aa", !1, "assign");
  a.G = cc11001100_hook("a.G", !1, "assign");
  a.Aa = cc11001100_hook("a.Aa", function () {
    a.G = cc11001100_hook("a.G", !0, "assign");
    a.p();
  }, "assign");
  a.isReadyToTrack = cc11001100_hook("a.isReadyToTrack", function () {
    var c = cc11001100_hook("c", !0, "var-init");
    if (!a.ob() || !a.mb()) return !1;
    a.qb() || (c = cc11001100_hook("c", !1, "assign"));
    a.tb() || (c = cc11001100_hook("c", !1, "assign"));
    return c;
  }, "assign");
  a.ob = cc11001100_hook("a.ob", function () {
    a.ca || a.H || (a.eb(a.Cb) ? a.H = cc11001100_hook("a.H", !0, "assign") : a.ca = cc11001100_hook("a.ca", !0, "assign"));
    return a.ca && !a.H ? !1 : !0;
  }, "assign");
  a.mb = cc11001100_hook("a.mb", function () {
    var c = cc11001100_hook("c", a.wa(), "var-init");
    if (c) if (a.ta || a.ba) {
      if (a.ta) {
        if (!c.isApproved(c.Categories.ANALYTICS)) return !1;
      } else return !1;
    } else return c.fetchPermissions(a.vb, !0), a.ba = cc11001100_hook("a.ba", !0, "assign"), !1;
    return !0;
  }, "assign");
  a.V = cc11001100_hook("a.V", function (c) {
    var b = cc11001100_hook("b", a.wa(), "var-init");
    return b && !b.isApproved(b.Categories[c]) ? !1 : !0;
  }, "assign");
  a.wa = cc11001100_hook("a.wa", function () {
    return h.adobe && h.adobe.optIn ? h.adobe.optIn : null;
  }, "assign");
  a.Y = cc11001100_hook("a.Y", !0, "assign");
  a.qb = cc11001100_hook("a.qb", function () {
    var c = cc11001100_hook("c", a.T(), "var-init");
    if (!c || !c.getVisitorValues) return !0;
    a.Y && (a.Y = cc11001100_hook("a.Y", !1, "assign"), a.I || (a.I = cc11001100_hook("a.I", !0, "assign"), c.getVisitorValues(a.Db)));
    return !a.I;
  }, "assign");
  a.T = cc11001100_hook("a.T", function () {
    var c = cc11001100_hook("c", a.visitor, "var-init");
    c && !c.isAllowed() && (c = cc11001100_hook("c", null, "assign"));
    return c;
  }, "assign");
  a.tb = cc11001100_hook("a.tb", function () {
    a.aa || a.G || (a.cb(a.Aa) ? a.G = cc11001100_hook("a.G", !0, "assign") : a.aa = cc11001100_hook("a.aa", !0, "assign"));
    return a.aa && !a.G ? !1 : !0;
  }, "assign");
  a.ba = cc11001100_hook("a.ba", !1, "assign");
  a.vb = cc11001100_hook("a.vb", function () {
    a.ba = cc11001100_hook("a.ba", !1, "assign");
    a.ta = cc11001100_hook("a.ta", !0, "assign");
  }, "assign");
  a.j = cc11001100_hook("a.j", q, "assign");
  a.q = cc11001100_hook("a.q", 0, "assign");
  a.callbackWhenReadyToTrack = cc11001100_hook("a.callbackWhenReadyToTrack", function (c, b, d) {
    var f;
    f = cc11001100_hook("f", {}, "assign");
    f.Hb = cc11001100_hook("f.Hb", c, "assign");
    f.Gb = cc11001100_hook("f.Gb", b, "assign");
    f.Eb = cc11001100_hook("f.Eb", d, "assign");
    a.j == q && (a.j = cc11001100_hook("a.j", [], "assign"));
    a.j.push(f);
    0 == a.q && (a.q = cc11001100_hook("a.q", setInterval(a.p, 100), "assign"));
  }, "assign");
  a.p = cc11001100_hook("a.p", function () {
    var c;
    if (a.isReadyToTrack() && (a.Bb(), a.j != q)) for (; 0 < a.j.length;) c = cc11001100_hook("c", a.j.shift(), "assign"), c.Gb.apply(c.Hb, c.Eb);
  }, "assign");
  a.Bb = cc11001100_hook("a.Bb", function () {
    a.q && (clearInterval(a.q), a.q = cc11001100_hook("a.q", 0, "assign"));
  }, "assign");
  a.ua = cc11001100_hook("a.ua", function (c) {
    var b,
      d = cc11001100_hook("d", {}, "var-init");
    a.hc(d);
    if (c != q) for (b in c) d[b] = cc11001100_hook("d[b]", c[b], "assign");
    a.callbackWhenReadyToTrack(a, a.Fa, [d]);
    a.Da();
  }, "assign");
  a.Ob = cc11001100_hook("a.Ob", function () {
    var c = cc11001100_hook("c", a.cookieRead("s_fid"), "var-init"),
      b = cc11001100_hook("b", "", "var-init"),
      d = cc11001100_hook("d", "", "var-init"),
      f;
    f = cc11001100_hook("f", 8, "assign");
    var e = cc11001100_hook("e", 4, "var-init");
    if (!c || 0 > c.indexOf("-")) {
      for (c = cc11001100_hook("c", 0, "assign"); 16 > c; c++) f = cc11001100_hook("f", Math.floor(Math.random() * f), "assign"), b += cc11001100_hook("b", "0123456789ABCDEF".substring(f, f + 1), "assign"), f = cc11001100_hook("f", Math.floor(Math.random() * e), "assign"), d += cc11001100_hook("d", "0123456789ABCDEF".substring(f, f + 1), "assign"), f = cc11001100_hook("f", e = cc11001100_hook("e", 16, "assign"), "assign");
      c = cc11001100_hook("c", b + "-" + d, "assign");
    }
    a.cookieWrite("s_fid", c, 1) || (c = cc11001100_hook("c", 0, "assign"));
    return c;
  }, "assign");
  a.Fa = cc11001100_hook("a.Fa", function (c) {
    var b = cc11001100_hook("b", new Date(), "var-init"),
      d = cc11001100_hook("d", "s" + Math.floor(b.getTime() / 108E5) % 10 + Math.floor(1E13 * Math.random()), "var-init"),
      f = cc11001100_hook("f", b.getYear(), "var-init"),
      f = cc11001100_hook("f", "t=" + a.escape(b.getDate() + "/" + b.getMonth() + "/" + (1900 > f ? f + 1900 : f) + " " + b.getHours() + ":" + b.getMinutes() + ":" + b.getSeconds() + " " + b.getDay() + " " + b.getTimezoneOffset()), "var-init"),
      e = cc11001100_hook("e", a.T(), "var-init"),
      g;
    c && (g = cc11001100_hook("g", a.S(c, 1), "assign"));
    a.Vb() && !a.visitorOptedOut && (a.xa() || (a.fid = cc11001100_hook("a.fid", a.Ob(), "assign")), a.Yb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort || (a.trackOffline && !a.timestamp && (a.timestamp = cc11001100_hook("a.timestamp", Math.floor(b.getTime() / 1E3), "assign")), c = cc11001100_hook("c", h.location, "assign"), a.pageURL || (a.pageURL = cc11001100_hook("a.pageURL", c.href ? c.href : c, "assign")), a.referrer || a.$a || (c = cc11001100_hook("c", a.Util.getQueryParam("adobe_mc_ref", null, null, !0), "assign"), a.referrer = cc11001100_hook("a.referrer", c || void 0 === c ? void 0 === c ? "" : c : p.document.referrer, "assign")), a.$a = cc11001100_hook("a.$a", 1, "assign"), !a.referrer && a.Z && (a.referrer = cc11001100_hook("a.referrer", a.Z, "assign")), a.Z = cc11001100_hook("a.Z", 0, "assign"), a.referrer = cc11001100_hook("a.referrer", a.Mb(a.referrer), "assign"), a.u("_g")), a.Rb() && !a.abort && (e && a.V("TARGET") && !a.supplementalDataID && e.getSupplementalDataID && (a.supplementalDataID = cc11001100_hook("a.supplementalDataID", e.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0), "assign")), a.V("AAM") || (a.contextData["cm.ssf"] = cc11001100_hook("a.contextData[\"cm.ssf\"]", 1, "assign")), a.Sb(), a.wb(), f += cc11001100_hook("f", a.Qb(), "assign"), a.sb(d, f), a.u("_t"), a.referrer = cc11001100_hook("a.referrer", "", "assign"))));
    a.referrer && (a.Z = cc11001100_hook("a.Z", a.referrer, "assign"));
    a.Da();
    g && a.S(g, 1);
  }, "assign");
  a.t = cc11001100_hook("a.t", a.track = cc11001100_hook("a.track", function (c, b) {
    b && a.S(b);
    a.Y = cc11001100_hook("a.Y", !0, "assign");
    a.isReadyToTrack() ? null != a.j && 0 < a.j.length ? (a.ua(c), a.p()) : a.Fa(c) : a.ua(c);
  }, "assign"), "assign");
  a.wb = cc11001100_hook("a.wb", function () {
    a.writeSecureCookies && !a.ssl && a.ab();
  }, "assign");
  a.ab = cc11001100_hook("a.ab", function () {
    a.contextData.excCodes = cc11001100_hook("a.contextData.excCodes", a.contextData.excCodes ? a.contextData.excCodes : [], "assign");
    a.contextData.excCodes.push(1);
  }, "assign");
  a.Da = cc11001100_hook("a.Da", function () {
    a.abort = cc11001100_hook("a.abort", a.supplementalDataID = cc11001100_hook("a.supplementalDataID", a.timestamp = cc11001100_hook("a.timestamp", a.pageURLRest = cc11001100_hook("a.pageURLRest", a.linkObject = cc11001100_hook("a.linkObject", a.clickObject = cc11001100_hook("a.clickObject", a.linkURL = cc11001100_hook("a.linkURL", a.linkName = cc11001100_hook("a.linkName", a.linkType = cc11001100_hook("a.linkType", h.s_objectID = cc11001100_hook("h.s_objectID", a.pe = cc11001100_hook("a.pe", a.pev1 = cc11001100_hook("a.pev1", a.pev2 = cc11001100_hook("a.pev2", a.pev3 = cc11001100_hook("a.pev3", a.e = cc11001100_hook("a.e", a.lightProfileID = cc11001100_hook("a.lightProfileID", a.useBeacon = cc11001100_hook("a.useBeacon", a.referrer = cc11001100_hook("a.referrer", 0, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), "assign");
    a.contextData && a.contextData.excCodes && (a.contextData.excCodes = cc11001100_hook("a.contextData.excCodes", 0, "assign"));
  }, "assign");
  a.Ca = cc11001100_hook("a.Ca", [], "assign");
  a.registerPreTrackCallback = cc11001100_hook("a.registerPreTrackCallback", function (c) {
    for (var b = cc11001100_hook("b", [], "var-init"), d = cc11001100_hook("d", 1, "var-init"); d < arguments.length; d++) b.push(arguments[d]);
    "function" == typeof c ? a.Ca.push([c, b]) : a.debugTracking && a.C("DEBUG: Non function type passed to registerPreTrackCallback");
  }, "assign");
  a.hb = cc11001100_hook("a.hb", function (c) {
    a.va(a.Ca, c);
  }, "assign");
  a.Ba = cc11001100_hook("a.Ba", [], "assign");
  a.registerPostTrackCallback = cc11001100_hook("a.registerPostTrackCallback", function (c) {
    for (var b = cc11001100_hook("b", [], "var-init"), d = cc11001100_hook("d", 1, "var-init"); d < arguments.length; d++) b.push(arguments[d]);
    "function" == typeof c ? a.Ba.push([c, b]) : a.debugTracking && a.C("DEBUG: Non function type passed to registerPostTrackCallback");
  }, "assign");
  a.gb = cc11001100_hook("a.gb", function (c) {
    a.va(a.Ba, c);
  }, "assign");
  a.va = cc11001100_hook("a.va", function (c, b) {
    if ("object" == typeof c) for (var d = cc11001100_hook("d", 0, "var-init"); d < c.length; d++) {
      var f = cc11001100_hook("f", c[d][0], "var-init"),
        e = cc11001100_hook("e", c[d][1].slice(), "var-init");
      e.unshift(b);
      if ("function" == typeof f) try {
        f.apply(null, e);
      } catch (g) {
        a.debugTracking && a.C(g.message);
      }
    }
  }, "assign");
  a.tl = cc11001100_hook("a.tl", a.trackLink = cc11001100_hook("a.trackLink", function (c, b, d, f, e) {
    a.linkObject = cc11001100_hook("a.linkObject", c, "assign");
    a.linkType = cc11001100_hook("a.linkType", b, "assign");
    a.linkName = cc11001100_hook("a.linkName", d, "assign");
    e && (a.bodyClickTarget = cc11001100_hook("a.bodyClickTarget", c, "assign"), a.bodyClickFunction = cc11001100_hook("a.bodyClickFunction", e, "assign"));
    return a.track(f);
  }, "assign"), "assign");
  a.trackLight = cc11001100_hook("a.trackLight", function (c, b, d, f) {
    a.lightProfileID = cc11001100_hook("a.lightProfileID", c, "assign");
    a.lightStoreForSeconds = cc11001100_hook("a.lightStoreForSeconds", b, "assign");
    a.lightIncrementBy = cc11001100_hook("a.lightIncrementBy", d, "assign");
    return a.track(f);
  }, "assign");
  a.clearVars = cc11001100_hook("a.clearVars", function () {
    var c, b;
    for (c = cc11001100_hook("c", 0, "assign"); c < a.g.length; c++) if (b = cc11001100_hook("b", a.g[c], "assign"), "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] = cc11001100_hook("a[b]", void 0, "assign");
  }, "assign");
  a.tagContainerMarker = cc11001100_hook("a.tagContainerMarker", "", "assign");
  a.sb = cc11001100_hook("a.sb", function (c, b) {
    var d = cc11001100_hook("d", a.ib() + "/" + c + "?AQB=1&ndh=1&pf=1&" + (a.za() ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + b + "&AQE=1", "var-init");
    a.hb(d);
    a.fb(d);
    a.U();
  }, "assign");
  a.ib = cc11001100_hook("a.ib", function () {
    var c = cc11001100_hook("c", a.jb(), "var-init");
    return "http" + (a.ssl ? "s" : "") + "://" + c + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (a.za() ? "10" : "1") + "/JS-" + a.version + (a.ac ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "");
  }, "assign");
  a.za = cc11001100_hook("a.za", function () {
    return a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks;
  }, "assign");
  a.jb = cc11001100_hook("a.jb", function () {
    var c = cc11001100_hook("c", a.dc, "var-init"),
      b = cc11001100_hook("b", a.trackingServer, "var-init");
    b ? a.trackingServerSecure && a.ssl && (b = cc11001100_hook("b", a.trackingServerSecure, "assign")) : (c = cc11001100_hook("c", c ? ("" + c).toLowerCase() : "d1", "assign"), "d1" == c ? c = cc11001100_hook("c", "112", "assign") : "d2" == c && (c = cc11001100_hook("c", "122", "assign")), b = cc11001100_hook("b", a.lb() + "." + c + ".2o7.net", "assign"));
    return b;
  }, "assign");
  a.lb = cc11001100_hook("a.lb", function () {
    var c = cc11001100_hook("c", a.visitorNamespace, "var-init");
    c || (c = cc11001100_hook("c", a.account.split(",")[0], "assign"), c = cc11001100_hook("c", c.replace(/[^0-9a-z]/gi, ""), "assign"));
    return c;
  }, "assign");
  a.Za = cc11001100_hook("a.Za", /{(%?)(.*?)(%?)}/, "assign");
  a.gc = cc11001100_hook("a.gc", RegExp(a.Za.source, "g"), "assign");
  a.Lb = cc11001100_hook("a.Lb", function (c) {
    if ("object" == typeof c.dests) for (var b = cc11001100_hook("b", 0, "var-init"); b < c.dests.length; ++b) {
      var d = cc11001100_hook("d", c.dests[b], "var-init");
      if ("string" == typeof d.c && "aa." == d.id.substr(0, 3)) for (var f = cc11001100_hook("f", d.c.match(a.gc), "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < f.length; ++e) {
        var g = cc11001100_hook("g", f[e], "var-init"),
          k = cc11001100_hook("k", g.match(a.Za), "var-init"),
          h = cc11001100_hook("h", "", "var-init");
        "%" == k[1] && "timezone_offset" == k[2] ? h = cc11001100_hook("h", new Date().getTimezoneOffset(), "assign") : "%" == k[1] && "timestampz" == k[2] && (h = cc11001100_hook("h", a.Pb(), "assign"));
        d.c = cc11001100_hook("d.c", d.c.replace(g, a.escape(h)), "assign");
      }
    }
  }, "assign");
  a.Pb = cc11001100_hook("a.Pb", function () {
    var c = cc11001100_hook("c", new Date(), "var-init"),
      b = cc11001100_hook("b", new Date(6E4 * Math.abs(c.getTimezoneOffset())), "var-init");
    return a.k(4, c.getFullYear()) + "-" + a.k(2, c.getMonth() + 1) + "-" + a.k(2, c.getDate()) + "T" + a.k(2, c.getHours()) + ":" + a.k(2, c.getMinutes()) + ":" + a.k(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? "-" : "+") + a.k(2, b.getUTCHours()) + ":" + a.k(2, b.getUTCMinutes());
  }, "assign");
  a.k = cc11001100_hook("a.k", function (a, b) {
    return (Array(a + 1).join(0) + b).slice(-a);
  }, "assign");
  a.qa = cc11001100_hook("a.qa", {}, "assign");
  a.doPostbacks = cc11001100_hook("a.doPostbacks", function (c) {
    if ("object" == typeof c) if (a.Lb(c), "object" == typeof a.AudienceManagement && "function" == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && "function" == typeof a.AudienceManagement.passData) a.AudienceManagement.passData(c);else if ("object" == typeof c && "object" == typeof c.dests) for (var b = cc11001100_hook("b", 0, "var-init"); b < c.dests.length; ++b) {
      var d = cc11001100_hook("d", c.dests[b], "var-init");
      "object" == typeof d && "string" == typeof d.c && "string" == typeof d.id && "aa." == d.id.substr(0, 3) && (a.qa[d.id] = cc11001100_hook("a.qa[d.id]", new Image(), "assign"), a.qa[d.id].alt = cc11001100_hook("a.qa[d.id].alt", "", "assign"), a.qa[d.id].src = cc11001100_hook("a.qa[d.id].src", d.c, "assign"));
    }
  }, "assign");
  a.fb = cc11001100_hook("a.fb", function (c) {
    a.i || a.Tb();
    a.i.push(c);
    a.ja = cc11001100_hook("a.ja", a.A(), "assign");
    a.Ya();
  }, "assign");
  a.Tb = cc11001100_hook("a.Tb", function () {
    a.i = cc11001100_hook("a.i", a.Wb(), "assign");
    a.i || (a.i = cc11001100_hook("a.i", [], "assign"));
  }, "assign");
  a.Wb = cc11001100_hook("a.Wb", function () {
    var c, b;
    if (a.pa()) {
      try {
        (b = cc11001100_hook("b", h.localStorage.getItem(a.na()), "assign")) && (c = cc11001100_hook("c", h.JSON.parse(b), "assign"));
      } catch (d) {}
      return c;
    }
  }, "assign");
  a.pa = cc11001100_hook("a.pa", function () {
    var c = cc11001100_hook("c", !0, "var-init");
    a.trackOffline && a.offlineFilename && h.localStorage && h.JSON || (c = cc11001100_hook("c", !1, "assign"));
    return c;
  }, "assign");
  a.Oa = cc11001100_hook("a.Oa", function () {
    var c = cc11001100_hook("c", 0, "var-init");
    a.i && (c = cc11001100_hook("c", a.i.length, "assign"));
    a.l && c++;
    return c;
  }, "assign");
  a.U = cc11001100_hook("a.U", function () {
    if (a.l && (a.v && a.v.complete && a.v.D && a.v.R(), a.l)) return;
    a.Pa = cc11001100_hook("a.Pa", q, "assign");
    if (a.oa) a.ja > a.N && a.Wa(a.i), a.ra(500);else {
      var c = cc11001100_hook("c", a.Fb(), "var-init");
      if (0 < c) a.ra(c);else if (c = cc11001100_hook("c", a.Ma(), "assign")) a.l = cc11001100_hook("a.l", 1, "assign"), a.Xb(c), a.$b(c);
    }
  }, "assign");
  a.ra = cc11001100_hook("a.ra", function (c) {
    a.Pa || (c || (c = cc11001100_hook("c", 0, "assign")), a.Pa = cc11001100_hook("a.Pa", setTimeout(a.U, c), "assign"));
  }, "assign");
  a.Fb = cc11001100_hook("a.Fb", function () {
    var c;
    if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
    c = cc11001100_hook("c", a.A() - a.Ua, "assign");
    return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c;
  }, "assign");
  a.Ma = cc11001100_hook("a.Ma", function () {
    if (0 < a.i.length) return a.i.shift();
  }, "assign");
  a.Xb = cc11001100_hook("a.Xb", function (c) {
    if (a.debugTracking) {
      var b = cc11001100_hook("b", "AppMeasurement Debug: " + c, "var-init");
      c = cc11001100_hook("c", c.split("&"), "assign");
      var d;
      for (d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) b += cc11001100_hook("b", "\n\t" + a.unescape(c[d]), "assign");
      a.C(b);
    }
  }, "assign");
  a.xa = cc11001100_hook("a.xa", function () {
    return a.marketingCloudVisitorID || a.analyticsVisitorID;
  }, "assign");
  a.X = cc11001100_hook("a.X", !1, "assign");
  var t;
  try {
    t = cc11001100_hook("t", JSON.parse('{"x":"y"}'), "assign");
  } catch (v) {
    t = cc11001100_hook("t", null, "assign");
  }
  t && "y" == t.x ? (a.X = cc11001100_hook("a.X", !0, "assign"), a.W = cc11001100_hook("a.W", function (a) {
    return JSON.parse(a);
  }, "assign")) : h.$ && h.$.parseJSON ? (a.W = cc11001100_hook("a.W", function (a) {
    return h.$.parseJSON(a);
  }, "assign"), a.X = cc11001100_hook("a.X", !0, "assign")) : a.W = cc11001100_hook("a.W", function () {
    return null;
  }, "assign");
  a.$b = cc11001100_hook("a.$b", function (c) {
    var b, d, f;
    a.nb(c) && (d = cc11001100_hook("d", 1, "assign"), b = cc11001100_hook("b", {
      send: function (c) {
        a.useBeacon = cc11001100_hook("a.useBeacon", !1, "assign");
        navigator.sendBeacon(c) ? b.R() : b.ha();
      }
    }, "assign"));
    !b && a.xa() && 2047 < c.length && (a.bb() && (d = cc11001100_hook("d", 2, "assign"), b = cc11001100_hook("b", new XMLHttpRequest(), "assign")), b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.X ? b.Ha = cc11001100_hook("b.Ha", !0, "assign") : b = cc11001100_hook("b", 0, "assign")));
    !b && a.fc && (c = cc11001100_hook("c", c.substring(0, 2047), "assign"));
    !b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = cc11001100_hook("b", a.d.createElement("SCRIPT"), "assign")) && "async" in b && ((f = cc11001100_hook("f", (f = cc11001100_hook("f", a.d.getElementsByTagName("HEAD"), "assign")) && f[0] ? f[0] : a.d.body, "assign")) ? (b.type = cc11001100_hook("b.type", "text/javascript", "assign"), b.setAttribute("async", "async"), d = cc11001100_hook("d", 3, "assign")) : b = cc11001100_hook("b", 0, "assign"));
    b || (b = cc11001100_hook("b", new Image(), "assign"), b.alt = cc11001100_hook("b.alt", "", "assign"), b.abort || "undefined" === typeof h.InstallTrigger || (b.abort = cc11001100_hook("b.abort", function () {
      b.src = cc11001100_hook("b.src", q, "assign");
    }, "assign")));
    b.Va = cc11001100_hook("b.Va", Date.now(), "assign");
    b.Ja = cc11001100_hook("b.Ja", function () {
      try {
        b.D && (clearTimeout(b.D), b.D = cc11001100_hook("b.D", 0, "assign"));
      } catch (a) {}
    }, "assign");
    b.onload = cc11001100_hook("b.onload", b.R = cc11001100_hook("b.R", function () {
      b.Va && (a.ka = cc11001100_hook("a.ka", Date.now() - b.Va, "assign"));
      a.gb(c);
      b.Ja();
      a.Jb();
      a.da();
      a.l = cc11001100_hook("a.l", 0, "assign");
      a.U();
      if (b.Ha) {
        b.Ha = cc11001100_hook("b.Ha", !1, "assign");
        try {
          a.doPostbacks(a.W(b.responseText));
        } catch (d) {}
      }
    }, "assign"), "assign");
    b.onabort = cc11001100_hook("b.onabort", b.onerror = cc11001100_hook("b.onerror", b.ha = cc11001100_hook("b.ha", function () {
      b.Ja();
      (a.trackOffline || a.oa) && a.l && a.i.unshift(a.Ib);
      a.l = cc11001100_hook("a.l", 0, "assign");
      a.ja > a.N && a.Wa(a.i);
      a.da();
      a.ra(500);
    }, "assign"), "assign"), "assign");
    b.onreadystatechange = cc11001100_hook("b.onreadystatechange", function () {
      4 == b.readyState && (200 == b.status ? b.R() : b.ha());
    }, "assign");
    a.Ua = cc11001100_hook("a.Ua", a.A(), "assign");
    if (1 === d) b.send(c);else if (2 === d) f = cc11001100_hook("f", c.indexOf("?"), "assign"), d = cc11001100_hook("d", c.substring(0, f), "assign"), f = cc11001100_hook("f", c.substring(f + 1), "assign"), f = cc11001100_hook("f", f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, ""), "assign"), b.open("POST", d, !0), b.withCredentials = cc11001100_hook("b.withCredentials", !0, "assign"), b.send(f);else if (b.src = cc11001100_hook("b.src", c, "assign"), 3 === d) {
      if (a.Sa) try {
        f.removeChild(a.Sa);
      } catch (e) {}
      f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
      a.Sa = cc11001100_hook("a.Sa", a.v, "assign");
    }
    b.D = cc11001100_hook("b.D", setTimeout(function () {
      b.D && (b.complete ? b.R() : (a.trackOffline && b.abort && b.abort(), b.ha()));
    }, 5E3), "assign");
    a.Ib = cc11001100_hook("a.Ib", c, "assign");
    a.v = cc11001100_hook("a.v", h["s_i_" + a.replace(a.account, ",", "_")] = cc11001100_hook("h[\"s_i_\" + a.replace(a.account, \",\", \"_\")]", b, "assign"), "assign");
    if (a.useForcedLinkTracking && a.J || a.bodyClickFunction) a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout = cc11001100_hook("a.forcedLinkTrackingTimeout", 250, "assign")), a.ea = cc11001100_hook("a.ea", setTimeout(a.da, a.forcedLinkTrackingTimeout), "assign");
  }, "assign");
  a.nb = cc11001100_hook("a.nb", function (c) {
    var b = cc11001100_hook("b", !1, "var-init");
    navigator.sendBeacon && (a.pb(c) ? b = cc11001100_hook("b", !0, "assign") : a.useBeacon && (b = cc11001100_hook("b", !0, "assign")));
    a.yb(c) && (b = cc11001100_hook("b", !1, "assign"));
    return b;
  }, "assign");
  a.pb = cc11001100_hook("a.pb", function (a) {
    return a && 0 < a.indexOf("pe=lnk_e") ? !0 : !1;
  }, "assign");
  a.yb = cc11001100_hook("a.yb", function (a) {
    return 64E3 <= a.length;
  }, "assign");
  a.bb = cc11001100_hook("a.bb", function () {
    return "undefined" !== typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest() ? !0 : !1;
  }, "assign");
  a.Jb = cc11001100_hook("a.Jb", function () {
    if (a.pa() && !(a.Ta > a.N)) try {
      h.localStorage.removeItem(a.na()), a.Ta = cc11001100_hook("a.Ta", a.A(), "assign");
    } catch (c) {}
  }, "assign");
  a.Wa = cc11001100_hook("a.Wa", function (c) {
    if (a.pa()) {
      a.Ya();
      try {
        h.localStorage.setItem(a.na(), h.JSON.stringify(c)), a.N = cc11001100_hook("a.N", a.A(), "assign");
      } catch (b) {}
    }
  }, "assign");
  a.Ya = cc11001100_hook("a.Ya", function () {
    if (a.trackOffline) {
      if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = cc11001100_hook("a.offlineLimit", 10, "assign");
      for (; a.i.length > a.offlineLimit;) a.Ma();
    }
  }, "assign");
  a.forceOffline = cc11001100_hook("a.forceOffline", function () {
    a.oa = cc11001100_hook("a.oa", !0, "assign");
  }, "assign");
  a.forceOnline = cc11001100_hook("a.forceOnline", function () {
    a.oa = cc11001100_hook("a.oa", !1, "assign");
  }, "assign");
  a.na = cc11001100_hook("a.na", function () {
    return a.offlineFilename + "-" + a.visitorNamespace + a.account;
  }, "assign");
  a.A = cc11001100_hook("a.A", function () {
    return new Date().getTime();
  }, "assign");
  a.Qa = cc11001100_hook("a.Qa", function (a) {
    a = cc11001100_hook("a", a.toLowerCase(), "assign");
    return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1;
  }, "assign");
  a.setTagContainer = cc11001100_hook("a.setTagContainer", function (c) {
    var b, d, f;
    a.ac = cc11001100_hook("a.ac", c, "assign");
    for (b = cc11001100_hook("b", 0, "assign"); b < a._il.length; b++) if ((d = cc11001100_hook("d", a._il[b], "assign")) && "s_l" == d._c && d.tagContainerName == c) {
      a.S(d);
      if (d.lmq) for (b = cc11001100_hook("b", 0, "assign"); b < d.lmq.length; b++) f = cc11001100_hook("f", d.lmq[b], "assign"), a.loadModule(f.n);
      if (d.ml) for (f in d.ml) if (a[f]) for (b in c = cc11001100_hook("c", a[f], "assign"), f = cc11001100_hook("f", d.ml[f], "assign"), f) !Object.prototype[b] && ("function" != typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = cc11001100_hook("c[b]", f[b], "assign"));
      if (d.mmq) for (b = cc11001100_hook("b", 0, "assign"); b < d.mmq.length; b++) f = cc11001100_hook("f", d.mmq[b], "assign"), a[f.m] && (c = cc11001100_hook("c", a[f.m], "assign"), c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
      if (d.tq) for (b = cc11001100_hook("b", 0, "assign"); b < d.tq.length; b++) a.track(d.tq[b]);
      d.s = cc11001100_hook("d.s", a, "assign");
      break;
    }
  }, "assign");
  a.Util = cc11001100_hook("a.Util", {
    urlEncode: cc11001100_hook("urlEncode", a.escape, "object-key-init"),
    urlDecode: cc11001100_hook("urlDecode", a.unescape, "object-key-init"),
    cookieRead: cc11001100_hook("cookieRead", a.cookieRead, "object-key-init"),
    cookieWrite: cc11001100_hook("cookieWrite", a.cookieWrite, "object-key-init"),
    getQueryParam: function (c, b, d, f) {
      var e,
        g = cc11001100_hook("g", "", "var-init");
      b || (b = cc11001100_hook("b", a.pageURL ? a.pageURL : h.location, "assign"));
      d = cc11001100_hook("d", d ? d : "&", "assign");
      if (!c || !b) return g;
      b = cc11001100_hook("b", "" + b, "assign");
      e = cc11001100_hook("e", b.indexOf("?"), "assign");
      if (0 > e) return g;
      b = cc11001100_hook("b", d + b.substring(e + 1) + d, "assign");
      if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + "=" + d))) {
        e = cc11001100_hook("e", b.indexOf("#"), "assign");
        0 <= e && (b = cc11001100_hook("b", b.substr(0, e) + d, "assign"));
        e = cc11001100_hook("e", b.indexOf(d + c + "="), "assign");
        if (0 > e) return g;
        b = cc11001100_hook("b", b.substring(e + d.length + c.length + 1), "assign");
        e = cc11001100_hook("e", b.indexOf(d), "assign");
        0 <= e && (b = cc11001100_hook("b", b.substring(0, e), "assign"));
        0 < b.length && (g = cc11001100_hook("g", a.unescape(b), "assign"));
        return g;
      }
    },
    getIeVersion: function () {
      return document.documentMode ? document.documentMode : a.ya() ? 7 : null;
    }
  }, "assign");
  a.F = cc11001100_hook("a.F", "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" "), "assign");
  a.g = cc11001100_hook("a.g", a.F.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" ")), "assign");
  a.la = cc11001100_hook("a.la", "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" "), "assign");
  a.O = cc11001100_hook("a.O", a.la.slice(0), "assign");
  a.Ga = cc11001100_hook("a.Ga", "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" "), "assign");
  for (m = cc11001100_hook("m", 0, "assign"); 250 >= m; m++) 76 > m && (a.g.push("prop" + m), a.O.push("prop" + m)), a.g.push("eVar" + m), a.O.push("eVar" + m), 6 > m && a.g.push("hier" + m), 4 > m && a.g.push("list" + m);
  m = cc11001100_hook("m", "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" "), "assign");
  a.g = cc11001100_hook("a.g", a.g.concat(m), "assign");
  a.F = cc11001100_hook("a.F", a.F.concat(m), "assign");
  a.ssl = cc11001100_hook("a.ssl", 0 <= h.location.protocol.toLowerCase().indexOf("https"), "assign");
  a.charSet = cc11001100_hook("a.charSet", "UTF-8", "assign");
  a.contextData = cc11001100_hook("a.contextData", {}, "assign");
  a.writeSecureCookies = cc11001100_hook("a.writeSecureCookies", !1, "assign");
  a.offlineThrottleDelay = cc11001100_hook("a.offlineThrottleDelay", 0, "assign");
  a.offlineFilename = cc11001100_hook("a.offlineFilename", "AppMeasurement.offline", "assign");
  a.P = cc11001100_hook("a.P", "s_sq", "assign");
  a.Ua = cc11001100_hook("a.Ua", 0, "assign");
  a.ja = cc11001100_hook("a.ja", 0, "assign");
  a.N = cc11001100_hook("a.N", 0, "assign");
  a.Ta = cc11001100_hook("a.Ta", 0, "assign");
  a.linkDownloadFileTypes = cc11001100_hook("a.linkDownloadFileTypes", "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx", "assign");
  a.w = cc11001100_hook("a.w", h, "assign");
  a.d = cc11001100_hook("a.d", h.document, "assign");
  a.da = cc11001100_hook("a.da", function () {
    a.ea && (h.clearTimeout(a.ea), a.ea = cc11001100_hook("a.ea", q, "assign"));
    a.bodyClickTarget && a.J && a.bodyClickTarget.dispatchEvent(a.J);
    a.bodyClickFunction && ("function" == typeof a.bodyClickFunction ? a.bodyClickFunction() : a.bodyClickTarget && a.bodyClickTarget.href && (a.d.location = cc11001100_hook("a.d.location", a.bodyClickTarget.href, "assign")));
    a.bodyClickTarget = cc11001100_hook("a.bodyClickTarget", a.J = cc11001100_hook("a.J", a.bodyClickFunction = cc11001100_hook("a.bodyClickFunction", 0, "assign"), "assign"), "assign");
  }, "assign");
  a.Xa = cc11001100_hook("a.Xa", function () {
    a.b = cc11001100_hook("a.b", a.d.body, "assign");
    a.b ? (a.r = cc11001100_hook("a.r", function (c) {
      var b, d, f, e, g;
      if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
        if (a.Ia) {
          if (a.useForcedLinkTracking) a.b.removeEventListener("click", a.r, !1);else {
            a.b.removeEventListener("click", a.r, !0);
            a.Ia = cc11001100_hook("a.Ia", a.useForcedLinkTracking = cc11001100_hook("a.useForcedLinkTracking", 0, "assign"), "assign");
            return;
          }
        } else a.useForcedLinkTracking = cc11001100_hook("a.useForcedLinkTracking", 0, "assign");
        a.clickObject = cc11001100_hook("a.clickObject", c.srcElement ? c.srcElement : c.target, "assign");
        try {
          if (!a.clickObject || a.M && a.M == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement || a.clickObject.parentNode)) a.clickObject = cc11001100_hook("a.clickObject", 0, "assign");else {
            var k = cc11001100_hook("k", a.M = cc11001100_hook("a.M", a.clickObject, "assign"), "var-init");
            a.ia && (clearTimeout(a.ia), a.ia = cc11001100_hook("a.ia", 0, "assign"));
            a.ia = cc11001100_hook("a.ia", setTimeout(function () {
              a.M == k && (a.M = cc11001100_hook("a.M", 0, "assign"));
            }, 1E4), "assign");
            f = cc11001100_hook("f", a.Oa(), "assign");
            a.track();
            if (f < a.Oa() && a.useForcedLinkTracking && c.target) {
              for (e = cc11001100_hook("e", c.target, "assign"); e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = cc11001100_hook("e", e.parentNode, "assign");
              if (e && (g = cc11001100_hook("g", e.href, "assign"), a.Qa(g) || (g = cc11001100_hook("g", 0, "assign")), d = cc11001100_hook("d", e.target, "assign"), c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || h.name && d == h.name))) {
                try {
                  b = cc11001100_hook("b", a.d.createEvent("MouseEvents"), "assign");
                } catch (l) {
                  b = cc11001100_hook("b", new h.MouseEvent(), "assign");
                }
                if (b) {
                  try {
                    b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget);
                  } catch (m) {
                    b = cc11001100_hook("b", 0, "assign");
                  }
                  b && (b["s_fe_" + a._in] = cc11001100_hook("b[\"s_fe_\" + a._in]", b.s_fe = cc11001100_hook("b.s_fe", 1, "assign"), "assign"), c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.bodyClickTarget = cc11001100_hook("a.bodyClickTarget", c.target, "assign"), a.J = cc11001100_hook("a.J", b, "assign"));
                }
              }
            }
          }
        } catch (n) {
          a.clickObject = cc11001100_hook("a.clickObject", 0, "assign");
        }
      }
    }, "assign"), a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.r) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") && a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && h.MouseEvent) && (a.Ia = cc11001100_hook("a.Ia", 1, "assign"), a.useForcedLinkTracking = cc11001100_hook("a.useForcedLinkTracking", 1, "assign"), a.b.addEventListener("click", a.r, !0)), a.b.addEventListener("click", a.r, !1))) : setTimeout(a.Xa, 30);
  }, "assign");
  a.fc = cc11001100_hook("a.fc", a.ya(), "assign");
  a.Kb();
  a.mc || (r ? a.setAccount(r) : a.C("Error, missing Report Suite ID in AppMeasurement initialization"), a.Xa(), a.loadModule("ActivityMap"));
}
function s_gi(r) {
  cc11001100_hook("r", r, "function-parameter");
  var a,
    h = cc11001100_hook("h", window.s_c_il, "var-init"),
    q,
    p,
    m = cc11001100_hook("m", r.split(","), "var-init"),
    s,
    u,
    t = cc11001100_hook("t", 0, "var-init");
  if (h) for (q = cc11001100_hook("q", 0, "assign"); !t && q < h.length;) {
    a = cc11001100_hook("a", h[q], "assign");
    if ("s_c" == a._c && (a.account || a.oun)) if (a.account && a.account == r) t = cc11001100_hook("t", 1, "assign");else for (p = cc11001100_hook("p", a.account ? a.account : a.oun, "assign"), p = cc11001100_hook("p", a.allAccounts ? a.allAccounts : p.split(","), "assign"), s = cc11001100_hook("s", 0, "assign"); s < m.length; s++) for (u = cc11001100_hook("u", 0, "assign"); u < p.length; u++) m[s] == p[u] && (t = cc11001100_hook("t", 1, "assign"));
    q++;
  }
  t ? a.setAccount && a.setAccount(r) : a = cc11001100_hook("a", new AppMeasurement(r), "assign");
  return a;
}
AppMeasurement.getInstance = cc11001100_hook("AppMeasurement.getInstance", s_gi, "assign");
window.s_objectID || (window.s_objectID = cc11001100_hook("window.s_objectID", 0, "assign"));
function s_pgicq() {
  var r = cc11001100_hook("r", window, "var-init"),
    a = cc11001100_hook("a", r.s_giq, "var-init"),
    h,
    q,
    p;
  if (a) for (h = cc11001100_hook("h", 0, "assign"); h < a.length; h++) q = cc11001100_hook("q", a[h], "assign"), p = cc11001100_hook("p", s_gi(q.oun), "assign"), p.setAccount(q.un), p.setTagContainer(q.tagContainerName);
  r.s_giq = cc11001100_hook("r.s_giq", 0, "assign");
}
s_pgicq();
function AppMeasurement_Module_Integrate(l) {
  cc11001100_hook("l", l, "function-parameter");
  var c = cc11001100_hook("c", this, "var-init");
  c.s = cc11001100_hook("c.s", l, "assign");
  var e = cc11001100_hook("e", window, "var-init");
  e.s_c_in || (e.s_c_il = cc11001100_hook("e.s_c_il", [], "assign"), e.s_c_in = cc11001100_hook("e.s_c_in", 0, "assign"));
  c._il = cc11001100_hook("c._il", e.s_c_il, "assign");
  c._in = cc11001100_hook("c._in", e.s_c_in, "assign");
  c._il[c._in] = cc11001100_hook("c._il[c._in]", c, "assign");
  e.s_c_in++;
  c._c = cc11001100_hook("c._c", "s_m", "assign");
  c.list = cc11001100_hook("c.list", [], "assign");
  c.add = cc11001100_hook("c.add", function (d, b) {
    var a;
    b || (b = cc11001100_hook("b", "s_Integrate_" + d, "assign"));
    e[b] || (e[b] = cc11001100_hook("e[b]", {}, "assign"));
    a = cc11001100_hook("a", c[d] = cc11001100_hook("c[d]", e[b], "assign"), "assign");
    a.a = cc11001100_hook("a.a", d, "assign");
    a.e = cc11001100_hook("a.e", c, "assign");
    a._c = cc11001100_hook("a._c", 0, "assign");
    a._d = cc11001100_hook("a._d", 0, "assign");
    void 0 == a.disable && (a.disable = cc11001100_hook("a.disable", 0, "assign"));
    a.get = cc11001100_hook("a.get", function (b, d) {
      var f = cc11001100_hook("f", document, "var-init"),
        h = cc11001100_hook("h", f.getElementsByTagName("HEAD"), "var-init"),
        k;
      if (!a.disable && (d || (v = cc11001100_hook("v", "s_" + c._in + "_Integrate_" + a.a + "_get_" + a._c, "assign")), a._c++, a.VAR = cc11001100_hook("a.VAR", v, "assign"), a.CALLBACK = cc11001100_hook("a.CALLBACK", "s_c_il[" + c._in + "]." + a.a + ".callback", "assign"), a.delay(), h = cc11001100_hook("h", h && 0 < h.length ? h[0] : f.body, "assign"))) try {
        k = cc11001100_hook("k", f.createElement("SCRIPT"), "assign"), k.type = cc11001100_hook("k.type", "text/javascript", "assign"), k.setAttribute("async", "async"), k.src = cc11001100_hook("k.src", c.c(a, b), "assign"), 0 > b.indexOf("[CALLBACK]") && (k.onload = cc11001100_hook("k.onload", k.onreadystatechange = cc11001100_hook("k.onreadystatechange", function () {
          a.callback(e[v]);
        }, "assign"), "assign")), h.firstChild ? h.insertBefore(k, h.firstChild) : h.appendChild(k);
      } catch (l) {}
    }, "assign");
    a.callback = cc11001100_hook("a.callback", function (b) {
      var c;
      if (b) for (c in b) Object.prototype[c] || (a[c] = cc11001100_hook("a[c]", b[c], "assign"));
      a.ready();
    }, "assign");
    a.beacon = cc11001100_hook("a.beacon", function (b) {
      var d = cc11001100_hook("d", "s_i_" + c._in + "_Integrate_" + a.a + "_" + a._c, "var-init");
      a.disable || (a._c++, d = cc11001100_hook("d", e[d] = cc11001100_hook("e[d]", new Image(), "assign"), "assign"), d.src = cc11001100_hook("d.src", c.c(a, b), "assign"));
    }, "assign");
    a.script = cc11001100_hook("a.script", function (b) {
      a.get(b, 1);
    }, "assign");
    a.delay = cc11001100_hook("a.delay", function () {
      a._d++;
    }, "assign");
    a.ready = cc11001100_hook("a.ready", function () {
      a._d--;
      a.disable || l.delayReady();
    }, "assign");
    c.list.push(d);
  }, "assign");
  c._g = cc11001100_hook("c._g", function (d) {
    var b,
      a = cc11001100_hook("a", (d ? "use" : "set") + "Vars", "var-init");
    for (d = cc11001100_hook("d", 0, "assign"); d < c.list.length; d++) if ((b = cc11001100_hook("b", c[c.list[d]], "assign")) && !b.disable && b[a]) try {
      b[a](l, b);
    } catch (e) {}
  }, "assign");
  c._t = cc11001100_hook("c._t", function () {
    c._g(1);
  }, "assign");
  c._d = cc11001100_hook("c._d", function () {
    var d, b;
    for (d = cc11001100_hook("d", 0, "assign"); d < c.list.length; d++) if ((b = cc11001100_hook("b", c[c.list[d]], "assign")) && !b.disable && 0 < b._d) return 1;
    return 0;
  }, "assign");
  c.c = cc11001100_hook("c.c", function (c, b) {
    var a, e, g, f;
    "http" != b.toLowerCase().substring(0, 4) && (b = cc11001100_hook("b", "http://" + b, "assign"));
    l.ssl && (b = cc11001100_hook("b", l.replace(b, "http:", "https:"), "assign"));
    c.RAND = cc11001100_hook("c.RAND", Math.floor(1E13 * Math.random()), "assign");
    for (a = cc11001100_hook("a", 0, "assign"); 0 <= a;) a = cc11001100_hook("a", b.indexOf("[", a), "assign"), 0 <= a && (e = cc11001100_hook("e", b.indexOf("]", a), "assign"), e > a && (g = cc11001100_hook("g", b.substring(a + 1, e), "assign"), 2 < g.length && "s." == g.substring(0, 2) ? (f = cc11001100_hook("f", l[g.substring(2)], "assign")) || (f = cc11001100_hook("f", "", "assign")) : (f = cc11001100_hook("f", "" + c[g], "assign"), f != c[g] && parseFloat(f) != c[g] && (g = cc11001100_hook("g", 0, "assign"))), g && (b = cc11001100_hook("b", b.substring(0, a) + encodeURIComponent(f) + b.substring(e + 1), "assign")), a = cc11001100_hook("a", e, "assign")));
    return b;
  }, "assign");
}
function AppMeasurement_Module_ActivityMap(h) {
  cc11001100_hook("h", h, "function-parameter");
  function p() {
    var a = cc11001100_hook("a", f.pageYOffset + (f.innerHeight || 0), "var-init");
    a && a > +g && (g = cc11001100_hook("g", a, "assign"));
  }
  function q() {
    if (e.scrollReachSelector) {
      var a = cc11001100_hook("a", h.d.querySelector && h.d.querySelector(e.scrollReachSelector), "var-init");
      a ? (g = cc11001100_hook("g", a.scrollTop || 0, "assign"), a.addEventListener("scroll", function () {
        var d;
        (d = cc11001100_hook("d", a && a.scrollTop + a.clientHeight || 0, "assign")) > g && (g = cc11001100_hook("g", d, "assign"));
      })) : 0 < v-- && setTimeout(q, 1E3);
    }
  }
  function l(a, d) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    var b, c, n;
    if (a && d && (b = cc11001100_hook("b", e.c[d] || (e.c[d] = cc11001100_hook("e.c[d]", d.split(","), "assign")), "assign"))) for (n = cc11001100_hook("n", 0, "assign"); n < b.length && (c = cc11001100_hook("c", b[n++], "assign"));) if (-1 < a.indexOf(c)) return null;
    return a;
  }
  function r(a, d, b, c, e) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var f, k;
    if (a.dataset && (k = cc11001100_hook("k", a.dataset[d], "assign"))) f = cc11001100_hook("f", k, "assign");else if (a.getAttribute) if (k = cc11001100_hook("k", a.getAttribute("data-" + b), "assign")) f = cc11001100_hook("f", k, "assign");else if (k = cc11001100_hook("k", a.getAttribute(b), "assign")) f = cc11001100_hook("f", k, "assign");
    if (!f && h.useForcedLinkTracking && e) {
      var g;
      a = cc11001100_hook("a", a.onclick ? "" + a.onclick : "", "assign");
      varValue = cc11001100_hook("varValue", "", "assign");
      if (c && a && (d = cc11001100_hook("d", a.indexOf(c), "assign"), 0 <= d)) {
        for (d += cc11001100_hook("d", c.length, "assign"); d < a.length;) if (b = cc11001100_hook("b", a.charAt(d++), "assign"), 0 <= "'\"".indexOf(b)) {
          g = cc11001100_hook("g", b, "assign");
          break;
        }
        for (k = cc11001100_hook("k", !1, "assign"); d < a.length && g;) {
          b = cc11001100_hook("b", a.charAt(d), "assign");
          if (!k && b === g) break;
          "\\" === b ? k = cc11001100_hook("k", !0, "assign") : (varValue += cc11001100_hook("varValue", b, "assign"), k = cc11001100_hook("k", !1, "assign"));
          d++;
        }
      }
      (g = cc11001100_hook("g", varValue, "assign")) && (h.w[c] = cc11001100_hook("h.w[c]", g, "assign"));
    }
    return f || e && h.w[c];
  }
  function s(a, d, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c;
    return (c = cc11001100_hook("c", e[d](a, b), "assign")) && l(m(c), e[d + "Exclusions"]);
  }
  function t(a, d, b) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("d", d, "function-parameter");
    cc11001100_hook("b", b, "function-parameter");
    var c;
    if (a && !(1 === (c = cc11001100_hook("c", a.nodeType, "assign")) && (c = cc11001100_hook("c", a.nodeName, "assign")) && (c = cc11001100_hook("c", c.toUpperCase(), "assign")) && w[c]) && (1 === a.nodeType && (c = cc11001100_hook("c", a.nodeValue, "assign")) && (d[d.length] = cc11001100_hook("d[d.length]", c, "assign")), b.a || b.t || b.s || !a.getAttribute || ((c = cc11001100_hook("c", a.getAttribute("alt"), "assign")) ? b.a = cc11001100_hook("b.a", c, "assign") : (c = cc11001100_hook("c", a.getAttribute("title"), "assign")) ? b.t = cc11001100_hook("b.t", c, "assign") : "IMG" == ("" + a.nodeName).toUpperCase() && (c = cc11001100_hook("c", a.getAttribute("src") || a.src, "assign")) && (b.s = cc11001100_hook("b.s", c, "assign"))), (c = cc11001100_hook("c", a.childNodes, "assign")) && c.length)) for (a = cc11001100_hook("a", 0, "assign"); a < c.length; a++) t(c[a], d, b);
  }
  function m(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (null == a || void 0 == a) return a;
    try {
      return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$", "mg"), "").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}", "mg"), " ").substring(0, 254);
    } catch (d) {}
  }
  var e = cc11001100_hook("e", this, "var-init");
  e.s = cc11001100_hook("e.s", h, "assign");
  var f = cc11001100_hook("f", window, "var-init");
  f.s_c_in || (f.s_c_il = cc11001100_hook("f.s_c_il", [], "assign"), f.s_c_in = cc11001100_hook("f.s_c_in", 0, "assign"));
  e._il = cc11001100_hook("e._il", f.s_c_il, "assign");
  e._in = cc11001100_hook("e._in", f.s_c_in, "assign");
  e._il[e._in] = cc11001100_hook("e._il[e._in]", e, "assign");
  f.s_c_in++;
  e._c = cc11001100_hook("e._c", "s_m", "assign");
  var g = cc11001100_hook("g", 0, "var-init"),
    u,
    v = cc11001100_hook("v", 60, "var-init");
  e.c = cc11001100_hook("e.c", {}, "assign");
  var w = cc11001100_hook("w", {
    SCRIPT: cc11001100_hook("SCRIPT", 1, "object-key-init"),
    STYLE: cc11001100_hook("STYLE", 1, "object-key-init"),
    LINK: cc11001100_hook("LINK", 1, "object-key-init"),
    CANVAS: cc11001100_hook("CANVAS", 1, "object-key-init")
  }, "var-init");
  e._g = cc11001100_hook("e._g", function () {
    var a,
      d,
      b,
      c = cc11001100_hook("c", h.contextData, "var-init"),
      e = cc11001100_hook("e", h.linkObject, "var-init");
    (a = cc11001100_hook("a", h.pageName || h.pageURL, "assign")) && (d = cc11001100_hook("d", s(e, "link", h.linkName), "assign")) && (b = cc11001100_hook("b", s(e, "region"), "assign")) && (c["a.activitymap.page"] = cc11001100_hook("c[\"a.activitymap.page\"]", a.substring(0, 255), "assign"), c["a.activitymap.link"] = cc11001100_hook("c[\"a.activitymap.link\"]", 128 < d.length ? d.substring(0, 128) : d, "assign"), c["a.activitymap.region"] = cc11001100_hook("c[\"a.activitymap.region\"]", 127 < b.length ? b.substring(0, 127) : b, "assign"), 0 < g && (c["a.activitymap.xy"] = cc11001100_hook("c[\"a.activitymap.xy\"]", 10 * Math.floor(g / 10), "assign")), c["a.activitymap.pageIDType"] = cc11001100_hook("c[\"a.activitymap.pageIDType\"]", h.pageName ? 1 : 0, "assign"));
  }, "assign");
  e._d = cc11001100_hook("e._d", function () {
    e.trackScrollReach && !u && (e.scrollReachSelector ? q() : (p(), f.addEventListener && f.addEventListener("scroll", p, !1)), u = cc11001100_hook("u", !0, "assign"));
  }, "assign");
  e.link = cc11001100_hook("e.link", function (a, d) {
    var b;
    if (d) b = cc11001100_hook("b", l(m(d), e.linkExclusions), "assign");else if ((b = cc11001100_hook("b", a, "assign")) && !(b = cc11001100_hook("b", r(a, "sObjectId", "s-object-id", "s_objectID", 1), "assign"))) {
      var c, f;
      (f = cc11001100_hook("f", l(m(a.innerText || a.textContent), e.linkExclusions), "assign")) || (t(a, c = cc11001100_hook("c", [], "assign"), b = cc11001100_hook("b", {
        a: cc11001100_hook("a", void 0, "object-key-init"),
        t: cc11001100_hook("t", void 0, "object-key-init"),
        s: cc11001100_hook("s", void 0, "object-key-init")
      }, "assign")), (f = cc11001100_hook("f", l(m(c.join(""))), "assign")) || (f = cc11001100_hook("f", l(m(b.a ? b.a : b.t ? b.t : b.s ? b.s : void 0)), "assign")) || !(c = cc11001100_hook("c", (c = cc11001100_hook("c", a.tagName, "assign")) && c.toUpperCase ? c.toUpperCase() : "", "assign")) || ("INPUT" == c || "SUBMIT" == c && a.value ? f = cc11001100_hook("f", l(m(a.value)), "assign") : "IMAGE" == c && a.src && (f = cc11001100_hook("f", l(m(a.src)), "assign"))));
      b = cc11001100_hook("b", f, "assign");
    }
    return b;
  }, "assign");
  e.region = cc11001100_hook("e.region", function (a) {
    for (var d, b = cc11001100_hook("b", e.regionIDAttribute || "id", "var-init"); a && (a = cc11001100_hook("a", a.parentNode, "assign"));) {
      if (d = cc11001100_hook("d", r(a, b, b, b), "assign")) return d;
      if ("BODY" == a.nodeName) return "BODY";
    }
  }, "assign");
}
try {
  (function (id, loader) {
    window.utag.tagsettings = cc11001100_hook("window.utag.tagsettings", window.utag.tagsettings || {}, "assign");
    window.utag.tagsettings.adobe = cc11001100_hook("window.utag.tagsettings.adobe", window.utag.tagsettings.adobe || {}, "assign");
    var vAPI = cc11001100_hook("vAPI", window.utag.tagsettings.adobe.visitorAPI = cc11001100_hook("window.utag.tagsettings.adobe.visitorAPI", window.utag.tagsettings.adobe.visitorAPI || function () {
      return {
        getInstance: function (orgID, callback) {
          if (orgID) {
            utag.DB("[" + u.id + "] OrgID used, but no 'Adobe Marketing Cloud ID Service' tag detected");
          }
          return callback();
        }
      };
    }(), "assign"), "var-init");
    var u = cc11001100_hook("u", {
      "id": cc11001100_hook("id", id, "object-key-init")
    }, "var-init");
    u.queue = cc11001100_hook("u.queue", [], "assign");
    utag.o[loader].sender[id] = cc11001100_hook("utag.o[loader].sender[id]", u, "assign");
    u.ev = cc11001100_hook("u.ev", {
      'view': cc11001100_hook('view', 1, "object-key-init"),
      'link': cc11001100_hook('link', 1, "object-key-init"),
      'video': cc11001100_hook('video', 1, "object-key-init")
    }, "assign");
    u.o = cc11001100_hook("u.o", aa, "assign");
    u.varlist = cc11001100_hook("u.varlist", {
      pageName: cc11001100_hook("pageName", 'pageName', "object-key-init"),
      channel: cc11001100_hook("channel", 'ch', "object-key-init"),
      campaign: cc11001100_hook("campaign", 'v0', "object-key-init"),
      hier1: cc11001100_hook("hier1", 'h1', "object-key-init"),
      hier2: cc11001100_hook("hier2", 'h2', "object-key-init"),
      hier3: cc11001100_hook("hier3", 'h3', "object-key-init"),
      hier4: cc11001100_hook("hier4", 'h4', "object-key-init")
    }, "assign");
    for (var i = cc11001100_hook("i", 1, "var-init"); i < 76; i++) {
      u.varlist['prop' + i] = cc11001100_hook("u.varlist['prop' + i]", 'c' + i, "assign");
      u.varlist['eVar' + i] = cc11001100_hook("u.varlist['eVar' + i]", 'v' + i, "assign");
    }
    u.combineLinkVar = cc11001100_hook("u.combineLinkVar", false, "assign");
    u.pushlt = cc11001100_hook("u.pushlt", function (l, v) {
      if (typeof l != "undefined") l.push(v);
    }, "assign");
    if (utag.ut.typeOf === undefined) {
      u.typeOf = cc11001100_hook("u.typeOf", function (e) {
        return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
      }, "assign");
    } else {
      u.typeOf = cc11001100_hook("u.typeOf", utag.ut.typeOf, "assign");
    }
    u.typeCheck = cc11001100_hook("u.typeCheck", function (linkTrack, type) {
      if (u.typeOf(linkTrack) === "string") {
        u[type] = cc11001100_hook("u[type]", linkTrack.split(","), "assign");
      } else if (u.typeOf(linkTrack) === "array") {
        u[type] = cc11001100_hook("u[type]", linkTrack, "assign");
      } else {
        u[type] = cc11001100_hook("u[type]", [], "assign");
      }
    }, "assign");
    u.hasadobeView = cc11001100_hook("u.hasadobeView", function () {
      if (utag.ut.adobeViewScriptRequested) {
        return true;
      }
      var i,
        s = cc11001100_hook("s", document.getElementsByTagName("script"), "var-init");
      for (i = cc11001100_hook("i", 0, "assign"); i < s.length; i++) {
        if (s[i].src && s[i].src.indexOf("https://www.everestjs.net/static/le/last-event-tag-latest.min.js") >= 0) {
          return true;
        }
      }
      return false;
    }, "assign");
    u.map = cc11001100_hook("u.map", {
      "adobe_rsid": cc11001100_hook("adobe_rsid", "s_account", "object-key-init"),
      "page.name": cc11001100_hook("page.name", "pageName", "object-key-init"),
      "page.page_id": cc11001100_hook("page.page_id", "pageName", "object-key-init"),
      "tealium_event": cc11001100_hook("tealium_event", "prop1", "object-key-init"),
      "adobe_event_report": cc11001100_hook("adobe_event_report", "eVar21,linkName", "object-key-init"),
      "registration.hash_id": cc11001100_hook("registration.hash_id", "eVar14", "object-key-init"),
      "registration.type": cc11001100_hook("registration.type", "eVar15", "object-key-init"),
      "registration.login_status": cc11001100_hook("registration.login_status", "eVar51", "object-key-init"),
      "conversion.name": cc11001100_hook("conversion.name", "eVar22", "object-key-init"),
      "page.flow": cc11001100_hook("page.flow", "eVar5", "object-key-init"),
      "qp.cxsource": cc11001100_hook("qp.cxsource", "eVar9", "object-key-init"),
      "_sm_1152_12": cc11001100_hook("_sm_1152_12", "currencyCode", "object-key-init"),
      "registration.login_method": cc11001100_hook("registration.login_method", "eVar17", "object-key-init"),
      "page.stream": cc11001100_hook("page.stream", "eVar18", "object-key-init"),
      "origin": cc11001100_hook("origin", "server", "object-key-init"),
      "qp.keyword": cc11001100_hook("qp.keyword", "eVar12", "object-key-init"),
      "qp.custref": cc11001100_hook("qp.custref", "referrer", "object-key-init"),
      "cp.utm": cc11001100_hook("cp.utm", "eVar142", "object-key-init"),
      "custom_data.ibe.syn_banner": cc11001100_hook("custom_data.ibe.syn_banner", "eVar143", "object-key-init")
    }, "assign");
    u.extend = cc11001100_hook("u.extend", [function (a, b) {
      try {
        b['_sm_1152_12'] = cc11001100_hook("b['_sm_1152_12']", "HKD", "assign");
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          aa.apl = cc11001100_hook("aa.apl", function (lv, vta, d1, d2, cc) {
            if (!lv || "string" === typeof lv) {
              if ("undefined" === typeof this.inList || "string" !== typeof vta || "" === vta) return lv;
              d1 = cc11001100_hook("d1", d1 || ",", "assign");
              d2 = cc11001100_hook("d2", d2 || d1, "assign");
              1 == d2 && (d2 = cc11001100_hook("d2", d1, "assign"), cc || (cc = cc11001100_hook("cc", 1, "assign")));
              2 == d2 && 1 != cc && (d2 = cc11001100_hook("d2", d1, "assign"));
              vta = cc11001100_hook("vta", vta.split(","), "assign");
              for (var g = cc11001100_hook("g", vta.length, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < g; e++) this.inList(lv, vta[e], d1, cc) || (lv = cc11001100_hook("lv", lv ? lv + d2 + vta[e] : vta[e], "assign"));
            }
            return lv;
          }, "assign");
          aa.inList = cc11001100_hook("aa.inList", function (lv, vtc, d, cc) {
            if ("string" !== typeof vtc) return !1;
            if ("string" === typeof lv) lv = cc11001100_hook("lv", lv.split(d || ","), "assign");else if ("object" !== typeof lv) return !1;
            d = cc11001100_hook("d", 0, "assign");
            for (var e = cc11001100_hook("e", lv.length, "var-init"); d < e; d++) if (1 == cc && vtc === lv[d] || vtc.toLowerCase() === lv[d].toLowerCase()) return !0;
            return !1;
          }, "assign");
          aa.getPreviousValue = cc11001100_hook("aa.getPreviousValue", new Function("v", "c", "el", "" + "var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el" + "){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i" + "){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)" + ":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?" + "s.c_w(c,v,t):s.c_w(c,'no value',t);return r}"), "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b, c, d) {
      try {
        if (typeof b['event.event_category'] != 'undefined' && b['event.event_category'] != '') {
          c = cc11001100_hook("c", [b['event.event_category'], b['event.event_action'], b['event.event_label'], b['event.event_value']], "assign");
          for (d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) {
            if (typeof c[d] == 'undefined' || c[d] == '') c[d] = cc11001100_hook("c[d]", '1', "assign");
          }
          ;
          b['adobe_event_report'] = cc11001100_hook("b['adobe_event_report']", c.join('|'), "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b, c, d) {
      try {
        if (typeof b['event_category'] != 'undefined' && b['event_category'] != '') {
          c = cc11001100_hook("c", [b['event_category'], b['event_action'], b['event_label'], b['event_value']], "assign");
          for (d = cc11001100_hook("d", 0, "assign"); d < c.length; d++) {
            if (typeof c[d] == 'undefined' || c[d] == '') c[d] = cc11001100_hook("c[d]", '1', "assign");
          }
          ;
          b['adobe_event_report'] = cc11001100_hook("b['adobe_event_report']", c.join('|'), "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }, function (a, b) {
      try {
        if (1) {
          aa.usePlugins = cc11001100_hook("aa.usePlugins", true, "assign");
          aa.doPlugins = cc11001100_hook("aa.doPlugins", function () {
            if (!b['application.name'] && !cxDataLayer.application.name) {
              aa.abort = cc11001100_hook("aa.abort", true, "assign");
              console.log('no application name, abort AA');
            } else {
              aa.eVar85 = cc11001100_hook("aa.eVar85", b['application.name'], "assign");
              aa.eVar86 = cc11001100_hook("aa.eVar86", b['page.pillar'], "assign");
              aa.eVar111 = cc11001100_hook("aa.eVar111", b['tealium_timestamp_utc'], "assign");
              aa.eVar11 = cc11001100_hook("aa.eVar11", b['tealium_visitor_id'], "assign");
              aa.prop12 = cc11001100_hook("aa.prop12", aa.getPreviousValue(aa.pageName, 'a_ppn'), "assign");
              aa.prop15 = cc11001100_hook("aa.prop15", 'web', "assign");
              aa.prop16 = cc11001100_hook("aa.prop16", 'human', "assign");
              if (aa.eVar85 == 'AEM') {
                aa.eVar13 = cc11001100_hook("aa.eVar13", b['registration.sha256_hash_id'], "assign");
              }
              aa.eVar14 = cc11001100_hook("aa.eVar14", b['registration.hash_id'], "assign");
              if (navigator.webdriver) {
                aa.prop16 = cc11001100_hook("aa.prop16", 'bot', "assign");
              }
              if (navigator.userAgent.indexOf("Chrome") > -1 && !window.chrome) {
                aa.prop16 = cc11001100_hook("aa.prop16", 'bot', "assign");
              }
              if (!aa.server) aa.server = cc11001100_hook("aa.server", document.domain, "assign");
              if (!aa.pageName) {
                aa.pageName = cc11001100_hook("aa.pageName", cxDataLayer.page.name, "assign");
              }
              if (!aa.pageName) {
                aa.pageName = cc11001100_hook("aa.pageName", location.host + location.pathname, "assign");
              }
              if (aa.Util.getQueryParam('utm_medium') || aa.Util.getQueryParam('utm_source')) {
                let medium = cc11001100_hook("medium", aa.Util.getQueryParam('utm_medium') || 'none', "var-init");
                let source = cc11001100_hook("source", aa.Util.getQueryParam('utm_source') || 'none', "var-init");
                let campaign = cc11001100_hook("campaign", aa.Util.getQueryParam('utm_campaign') || 'none', "var-init");
                let content = cc11001100_hook("content", aa.Util.getQueryParam('utm_content') || 'none', "var-init");
                let term = cc11001100_hook("term", aa.Util.getQueryParam('utm_term') || 'none', "var-init");
                aa.campaign = cc11001100_hook("aa.campaign", [medium, source, campaign, content, term].join('::'), "assign");
              }
              aa.eVar1 = cc11001100_hook("aa.eVar1", 'D=pageName', "assign");
              let today = cc11001100_hook("today", new Date(), "var-init");
              aa.eVar2 = cc11001100_hook("aa.eVar2", today.toLocaleDateString('en-US'), "assign");
              aa.eVar3 = cc11001100_hook("aa.eVar3", 'D=mid', "assign");
              aa.eVar4 = cc11001100_hook("aa.eVar4", window.location.href.slice(0, 255), "assign");
              if (b['page.language']) {
                aa.eVar19 = cc11001100_hook("aa.eVar19", b['page.language'], "assign");
                if (b['page.country']) {
                  aa.eVar19 = cc11001100_hook("aa.eVar19", b['page.language'] + '_' + b['page.country'], "assign");
                }
              }
              if (cxDataLayer.hasOwnProperty('errors')) {
                try {
                  var errorsItem = cc11001100_hook("errorsItem", [], "var-init");
                  var errorsDesc = cc11001100_hook("errorsDesc", [], "var-init");
                  var errorsArr = cc11001100_hook("errorsArr", cxDataLayer.errors, "var-init");
                  for (let i = cc11001100_hook("i", 0, "var-init"); i < errorsArr.length; i++) {
                    if (errorsArr[i].error_code) {
                      errorsItem.push(errorsArr[i].error_code);
                    }
                    if (errorsArr[i].error_description) {
                      errorsDesc.push(errorsArr[i].error_description);
                    }
                  }
                  aa.linkTrackVars = cc11001100_hook("aa.linkTrackVars", aa.apl(aa.linkTrackVars, 'eVar20,prop4,eVar49'), "assign");
                  aa.eVar20 = cc11001100_hook("aa.eVar20", aa.prop4 = cc11001100_hook("aa.prop4", errorsItem.join(), "assign"), "assign");
                  aa.eVar49 = cc11001100_hook("aa.eVar49", errorsDesc.join(), "assign");
                } catch (errorerror) {
                  console.log(errorerror);
                }
              } else if (b['errors'] && b['errors'].length > 0) {
                try {
                  var errorsItem = cc11001100_hook("errorsItem", [], "var-init");
                  var errorsDesc = cc11001100_hook("errorsDesc", [], "var-init");
                  var errorsArr = cc11001100_hook("errorsArr", b['errors'], "var-init");
                  for (let i = cc11001100_hook("i", 0, "var-init"); i < errorsArr.length; i++) {
                    if (errorsArr[i].error_code) {
                      errorsItem.push(errorsArr[i].error_code);
                    }
                    if (errorsArr[i].error_description) {
                      errorsDesc.push(errorsArr[i].error_description);
                    }
                  }
                  aa.linkTrackVars = cc11001100_hook("aa.linkTrackVars", 'eVar20,prop4', "assign");
                  aa.eVar20 = cc11001100_hook("aa.eVar20", aa.prop4 = cc11001100_hook("aa.prop4", errorsItem.join(), "assign"), "assign");
                  aa.eVar49 = cc11001100_hook("aa.eVar49", errorsDesc.join(), "assign");
                } catch (errorerror) {
                  console.log(errorerror);
                }
              } else if (b['error.error_code']) {
                try {
                  aa.linkTrackVars = cc11001100_hook("aa.linkTrackVars", 'eVar20,prop4', "assign");
                  aa.eVar20 = cc11001100_hook("aa.eVar20", aa.prop4 = cc11001100_hook("aa.prop4", b['error.error_code'], "assign"), "assign");
                  aa.eVar49 = cc11001100_hook("aa.eVar49", b['error.error_description'], "assign");
                } catch (errorerror) {
                  console.log(errorerror);
                }
              }
              try {
                if (aa.eVar21) if (aa.eVar21.indexOf('BANNERS_CLICK') > -1) {
                  var banner_id;
                  var banner_name;
                  var banner_position;
                  var bdpAll;
                  var bdp1;
                  banner_id = cc11001100_hook("banner_id", b['collection.banner.ids'].toString(), "assign");
                  bdp1 = cc11001100_hook("bdp1", b['collection.banner.feedback.105'], "assign");
                  if (bdp1) {
                    var bdp2 = cc11001100_hook("bdp2", b['collection.banner.feedback.106'] || 'not set', "var-init");
                    var bdp3 = cc11001100_hook("bdp3", b['collection.banner.feedback.107'] || 'not set', "var-init");
                    var bdp4 = cc11001100_hook("bdp4", b['collection.banner.feedback.108'] || 'not set', "var-init");
                    var bdp5 = cc11001100_hook("bdp5", b['collection.banner.feedback.109'] || 'not set', "var-init");
                    bdpAll = cc11001100_hook("bdpAll", bdp1 + '|' + bdp2 + '|' + bdp3 + '|' + bdp4 + '|' + bdp5, "assign");
                    aa.eVar64 = cc11001100_hook("aa.eVar64", bdpAll, "assign");
                    aa.linkTrackVars = cc11001100_hook("aa.linkTrackVars", aa.apl(aa.linkTrackVars, 'eVar64,events'), "assign");
                    aa.linkTrackEvents = cc11001100_hook("aa.linkTrackEvents", aa.apl(aa.linkTrackEvents, 'event18'), "assign");
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event18'), "assign");
                  }
                  if (banner_id) {
                    banner_name = cc11001100_hook("banner_name", b['collection.banner.names'].toString() || 'not set', "assign");
                    banner_position = cc11001100_hook("banner_position", b['collection.banner.positions'].toString() || 'not set', "assign");
                    aa.list1 = cc11001100_hook("aa.list1", banner_id + '|' + banner_position, "assign");
                    aa.linkTrackVars = cc11001100_hook("aa.linkTrackVars", aa.apl(aa.linkTrackVars, 'list1,events'), "assign");
                    aa.linkTrackEvents = cc11001100_hook("aa.linkTrackEvents", aa.apl(aa.linkTrackEvents, 'event17'), "assign");
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event17'), "assign");
                  }
                }
              } catch (bannererror) {
                console.log('Report Only:banner tracking:' + bannererror);
              }
              var conversion = cc11001100_hook("conversion", '', "var-init");
              if (b['conversion.name']) {
                aa.eVar22 = cc11001100_hook("aa.eVar22", conversion = cc11001100_hook("conversion", b['conversion.name'], "assign"), "assign");
              }
              switch (aa.eVar22) {
                case 'WEB::CATHAYSHOP::PAYMENT':
                  aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event138'), "assign");
                  break;
                case 'WEB::CATHAYSHOP::PAYMENT_VERFICATION':
                  aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event140'), "assign");
                  break;
                case 'WEB::LOGIN::SUCCESS':
                  aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event11'), "assign");
                  break;
                case 'WEB::REGISTRATION::SUCCESS':
                  aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event12'), "assign");
                  break;
              }
              if (aa.pageName.match(/^[\/RIBE].*[OUTBOUND|SELECT_DATES|INBOUND|SUMMARY|PASSENGER|SEATMAP|REVIEW_AND_PAY|CONFIRMATION]$/)) {
                if (b['itinerary.cabin_fullname'] && b['itinerary.cabin_fullname'] !== '|') {
                  aa.eVar24 = cc11001100_hook("aa.eVar24", b['itinerary.cabin_fullname'], "assign");
                }
                aa.eVar25 = cc11001100_hook("aa.eVar25", b['itinerary.trip_type'], "assign");
                aa.eVar26 = cc11001100_hook("aa.eVar26", b['itinerary.segmented_carriers'], "assign");
                aa.eVar27 = cc11001100_hook("aa.eVar27", b['itinerary.outbound.date_L'], "assign");
                aa.eVar28 = cc11001100_hook("aa.eVar28", b['itinerary.inbound.date_L'], "assign");
                aa.eVar29 = cc11001100_hook("aa.eVar29", b['itinerary.days_advance'], "assign");
                aa.eVar30 = cc11001100_hook("aa.eVar30", b['itinerary.origin.airport'], "assign");
                aa.eVar38 = cc11001100_hook("aa.eVar38", b['offer.discount_code'], "assign");
                aa.eVar31 = cc11001100_hook("aa.eVar31", b['itinerary.destination.airport'], "assign");
                aa.eVar33 = cc11001100_hook("aa.eVar33", b['itinerary.trip_duration'], "assign");
                aa.eVar36 = cc11001100_hook("aa.eVar36", b['offer.fare_id'], "assign");
                aa.eVar45 = cc11001100_hook("aa.eVar45", b['offer.sponsor_code'], "assign");
                aa.eVar46 = cc11001100_hook("aa.eVar46", b['offer.type'], "assign");
                aa.eVar50 = cc11001100_hook("aa.eVar50", b['itinerary.route'], "assign");
                aa.eVar53 = cc11001100_hook("aa.eVar53", b['itinerary.pax.combination'], "assign");
                if (b['itinerary.segmented_cabins'] !== '|' && b['itinerary.segmented_cabins'] !== '||' && b['itinerary.segmented_cabins'] !== '|||') {
                  aa.eVar54 = cc11001100_hook("aa.eVar54", b['itinerary.segmented_cabins'], "assign");
                }
                try {
                  if (b['custom_data.ibe.outbound_brand_code']) {
                    aa.eVar47 = cc11001100_hook("aa.eVar47", b['custom_data.ibe.outbound_brand_selected'] + '|' + b['custom_data.ibe.outbound_brand_code'] + '|' + b['custom_data.ibe.outbound_brand_lowest'] + '|' + b['custom_data.ibe.outbound_ff_code'] + '|' + b['custom_data.ibe.upsell_outbound_category'], "assign");
                  }
                  if (b['custom_data.ibe.inbound_brand_code']) {
                    aa.eVar48 = cc11001100_hook("aa.eVar48", b['custom_data.ibe.inbound_brand_selected'] + '|' + b['custom_data.ibe.inbound_brand_code'] + '|' + b['custom_data.ibe.inbound_brand_lowest'] + '|' + b['custom_data.ibe.inbound_ff_code'] + '|' + b['custom_data.ibe.upsell_inbound_category'], "assign");
                  }
                  aa.eVar52 = cc11001100_hook("aa.eVar52", b['custom_data.ibe.b_code'], "assign");
                  if (b['offer.promotion_code']) {
                    aa.eVar35 = cc11001100_hook("aa.eVar35", b['offer.promotion_code'], "assign");
                  }
                  if (aa.pageName == 'RIBE/REVENUE/REVENUE_FLEXPRICER/SUMMARY') {
                    var outbound_value_lowest = cc11001100_hook("outbound_value_lowest", cxDataLayer.custom_data.ibe.outbound_value_lowest || '0', "var-init");
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event159=' + outbound_value_lowest), "assign");
                    var outbound_value_selected = cc11001100_hook("outbound_value_selected", cxDataLayer.custom_data.ibe.outbound_value_selected || '0', "var-init");
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event160=' + outbound_value_selected), "assign");
                    var inbound_value_lowest = cc11001100_hook("inbound_value_lowest", cxDataLayer.custom_data.ibe.inbound_value_lowest || '0', "var-init");
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event161=' + inbound_value_lowest), "assign");
                    var inbound_value_selected = cc11001100_hook("inbound_value_selected", cxDataLayer.custom_data.ibe.inbound_value_selected || '0', "var-init");
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event162=' + inbound_value_selected), "assign");
                  }
                } catch (ibecusterror) {
                  console.log('Report Only:custom_data.ibe' + ibecusterror);
                }
                switch (aa.eVar22) {
                  case 'WEB::IBE::REV::SEARCH':
                    aa.linkTrackVars = cc11001100_hook("aa.linkTrackVars", aa.apl(aa.linkTrackVars, 'eVar34,events'), "assign");
                    aa.linkTrackEvents = cc11001100_hook("aa.linkTrackEvents", aa.apl(aa.linkTrackEvents, 'event1'), "assign");
                    aa.eVar34 = cc11001100_hook("aa.eVar34", b['search.keyword'], "assign");
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event1'), "assign");
                    break;
                  case 'WEB::IBE::REV::PASSENGER':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event2'), "assign");
                    break;
                  case 'WEB::IBE::REV::SEATMAP':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event3'), "assign");
                    break;
                  case 'WEB::IBE::REV::REVIEW_AND_PAY':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event4'), "assign");
                    var selected_miles = cc11001100_hook("selected_miles", b['custom_data.ibe.selected_miles'] || '0', "var-init");
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event117=' + selected_miles), "assign");
                    break;
                  case 'WEB::IBE::REV::CONFIRMATION':
                    if (aa.eVar18 == 'BOH') {
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event45'), "assign");
                    } else {
                      aa.currencyCode = cc11001100_hook("aa.currencyCode", aa.eVar37 = cc11001100_hook("aa.eVar37", b['transaction.currency'], "assign"), "assign");
                      aa.purchaseID = cc11001100_hook("aa.purchaseID", aa.eVar80 = cc11001100_hook("aa.eVar80", b['transaction.aa_transaction_id'], "assign"), "assign");
                      if (!aa.purchaseID) {
                        var tempID = cc11001100_hook("tempID", b['transaction.transaction_id'], "var-init");
                        tempID = cc11001100_hook("tempID", tempID.substring(tempID.length - 17, tempID.length), "assign");
                        aa.purchaseID = cc11001100_hook("aa.purchaseID", aa.eVar80 = cc11001100_hook("aa.eVar80", tempID.replace('::', '__'), "assign"), "assign");
                      }
                      aa.eVar23 = cc11001100_hook("aa.eVar23", b['booking.pnr'], "assign");
                      aa.eVar39 = cc11001100_hook("aa.eVar39", b['transaction.payment_method'], "assign");
                      aa.eVar40 = cc11001100_hook("aa.eVar40", b['transaction.payment_gateway'], "assign");
                      aa.eVar41 = cc11001100_hook("aa.eVar41", b['itinerary.segmented_flights'], "assign");
                      aa.eVar42 = cc11001100_hook("aa.eVar42", b['itinerary.segments_rbds'], "assign");
                      aa.eVar44 = cc11001100_hook("aa.eVar44", b['transaction.cm_eligibility'], "assign");
                      aa.events = cc11001100_hook("aa.events", 'purchase' + ',event5:' + aa.purchaseID + ',event6=' + b['itinerary.pax.adult'] + ':' + aa.purchaseID + ',event7=' + b['itinerary.pax.child'] + ':' + aa.purchaseID + ',event8=' + b['itinerary.pax.infant'] + ':' + aa.purchaseID + ',event164=' + b['itinerary.pax.young_adult'] + ':' + aa.purchaseID + ',event9=' + cxDataLayer.transaction.surcharge + ':' + aa.purchaseID + ',event10=' + cxDataLayer.transaction.tax + ':' + aa.purchaseID, "assign");
                      try {
                        var miles_balance = cc11001100_hook("miles_balance", b['custom_data.ibe.miles_balance'] || '0', "var-init");
                        aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event116=' + miles_balance.toString() + ':' + aa.purchaseID), "assign");
                        var max_miles = cc11001100_hook("max_miles", b['custom_data.ibe.max_miles'] || '0', "var-init");
                        aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event118=' + max_miles.toString() + ':' + aa.purchaseID), "assign");
                        var transaction_miles = cc11001100_hook("transaction_miles", b['transaction.miles'] || '0', "var-init");
                        aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event119=' + transaction_miles.toString() + ':' + aa.purchaseID), "assign");
                        var transaction_cash = cc11001100_hook("transaction_cash", b['transaction.cash'] || '0', "var-init");
                        aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event120=' + transaction_cash.toString() + ':' + aa.purchaseID), "assign");
                        var discount_amount = cc11001100_hook("discount_amount", b['offer.discount_amount'] || '0', "var-init");
                        aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event112=' + discount_amount.toString() + ':' + aa.purchaseID), "assign");
                      } catch (transactionError) {
                        console.log('Report Only:transaction information' + transactionError);
                      }
                      try {
                        var outbound_value_lowest = cc11001100_hook("outbound_value_lowest", cxDataLayer.custom_data.ibe.outbound_value_lowest || '0', "var-init");
                        aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event121=' + outbound_value_lowest + ':' + aa.purchaseID), "assign");
                        var outbound_value_selected = cc11001100_hook("outbound_value_selected", cxDataLayer.custom_data.ibe.outbound_value_selected || '0', "var-init");
                        aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event122=' + outbound_value_selected + ':' + aa.purchaseID), "assign");
                        var inbound_value_lowest = cc11001100_hook("inbound_value_lowest", cxDataLayer.custom_data.ibe.inbound_value_lowest || '0', "var-init");
                        aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event123=' + inbound_value_lowest + ':' + aa.purchaseID), "assign");
                        var inbound_value_selected = cc11001100_hook("inbound_value_selected", cxDataLayer.custom_data.ibe.inbound_value_selected || '0', "var-init");
                        aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event124=' + inbound_value_selected + ':' + aa.purchaseID), "assign");
                      } catch (customDataError) {
                        console.log('Report Only:custom_data.ibe' + customDataError);
                      }
                    }
                    break;
                  case 'WEB::IBE::BOH::REVIEW_AND_PAY':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event13'), "assign");
                    break;
                  case 'WEB::IBE::BOH::CONFIRMATION':
                    aa.currencyCode = cc11001100_hook("aa.currencyCode", aa.eVar37 = cc11001100_hook("aa.eVar37", b['transaction.currency'], "assign"), "assign");
                    aa.purchaseID = cc11001100_hook("aa.purchaseID", aa.eVar80 = cc11001100_hook("aa.eVar80", b['transaction.aa_transaction_id'], "assign"), "assign");
                    if (!aa.purchaseID) {
                      var tempID = cc11001100_hook("tempID", b['transaction.transaction_id'], "var-init");
                      tempID = cc11001100_hook("tempID", tempID.substring(tempID.length - 17, tempID.length), "assign");
                      aa.purchaseID = cc11001100_hook("aa.purchaseID", aa.eVar80 = cc11001100_hook("aa.eVar80", tempID.replace('::', '__'), "assign"), "assign");
                    }
                    aa.eVar23 = cc11001100_hook("aa.eVar23", b['booking.pnr'], "assign");
                    aa.eVar39 = cc11001100_hook("aa.eVar39", b['transaction.payment_method'], "assign");
                    aa.eVar40 = cc11001100_hook("aa.eVar40", b['transaction.payment_gateway'], "assign");
                    aa.eVar41 = cc11001100_hook("aa.eVar41", b['itinerary.segmented_flights'], "assign");
                    aa.eVar42 = cc11001100_hook("aa.eVar42", b['itinerary.segmented_rbds'], "assign");
                    aa.eVar44 = cc11001100_hook("aa.eVar44", b['transaction.cm_eligibility'], "assign");
                    aa.events = cc11001100_hook("aa.events", 'purchase' + ',event14:' + aa.purchaseID + ',event6=' + b['itinerary.pax.adult'] + ':' + aa.purchaseID + ',event7=' + b['itinerary.pax.child'] + ':' + aa.purchaseID + ',event8=' + b['itinerary.pax.infant'] + ':' + aa.purchaseID + ',event164=' + b['itinerary.pax.young_adult'] + ':' + aa.purchaseID + ',event9=' + cxDataLayer.transaction.surcharge + ':' + aa.purchaseID + ',event10=' + cxDataLayer.transaction.tax + ':' + aa.purchaseID, "assign");
                    try {
                      var miles_balance = cc11001100_hook("miles_balance", b['custom_data.ibe.miles_balance'] || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event116=' + miles_balance.toString() + ':' + aa.purchaseID), "assign");
                      var max_miles = cc11001100_hook("max_miles", b['custom_data.ibe.max_miles'] || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event118=' + max_miles.toString() + ':' + aa.purchaseID), "assign");
                      var transaction_miles = cc11001100_hook("transaction_miles", b['transaction.miles'] || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event119=' + transaction_miles.toString() + ':' + aa.purchaseID), "assign");
                      var transaction_cash = cc11001100_hook("transaction_cash", b['transaction.cash'] || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event120=' + transaction_cash.toString() + ':' + aa.purchaseID), "assign");
                      var discount_amount = cc11001100_hook("discount_amount", b['offer.discount_amount'] || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event112=' + discount_amount.toString() + ':' + aa.purchaseID), "assign");
                    } catch (transactionError) {
                      console.log('Report Only:transaction information' + transactionError);
                    }
                    try {
                      var outbound_value_lowest = cc11001100_hook("outbound_value_lowest", cxDataLayer.custom_data.ibe.outbound_value_lowest || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event121=' + outbound_value_lowest + ':' + aa.purchaseID), "assign");
                      var outbound_value_selected = cc11001100_hook("outbound_value_selected", cxDataLayer.custom_data.ibe.outbound_value_selected || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event122=' + outbound_value_selected + ':' + aa.purchaseID), "assign");
                      var inbound_value_lowest = cc11001100_hook("inbound_value_lowest", cxDataLayer.custom_data.ibe.inbound_value_lowest || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event123=' + inbound_value_lowest + ':' + aa.purchaseID), "assign");
                      var inbound_value_selected = cc11001100_hook("inbound_value_selected", cxDataLayer.custom_data.ibe.inbound_value_selected || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event124=' + inbound_value_selected + ':' + aa.purchaseID), "assign");
                    } catch (customDataError) {
                      console.log('Report Only:custom_data.ibe' + customDataError);
                    }
                    break;
                  case 'WEB::IBE::ATC::REBOOK_CHANGE_FLIGHTS':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event97'), "assign");
                    break;
                  case 'WEB::IBE::ATC::REBOOK_SEARCH':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event98'), "assign");
                    break;
                  case 'WEB::IBE::ATC::REBOOK_PASSENGER':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event99'), "assign");
                    break;
                  case 'WEB::IBE::ATC::REBOOK_SEATMAP':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event100'), "assign");
                    break;
                  case 'WEB::IBE::ATC::REBOOK_REVIEW_AND_PAY':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event101'), "assign");
                    break;
                  case 'WEB::IBE::ATC::REBOOK_CONFIRMATION':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event102'), "assign");
                    break;
                  case 'WEB::IBE::ATC::CANCEL_REVIEW':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event103'), "assign");
                    break;
                  case 'WEB::IBE::ATC::CANCEL_CONFIRMATION':
                    aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event104'), "assign");
                    break;
                }
                try {
                  var prodArr = cc11001100_hook("prodArr", [], "var-init");
                  var prodStr = cc11001100_hook("prodStr", [], "var-init");
                  prodArr = cc11001100_hook("prodArr", cxDataLayer.products, "assign");
                  for (let i = cc11001100_hook("i", 0, "var-init"); i < prodArr.length; i++) {
                    let _category = cc11001100_hook("_category", prodArr[i].product_category, "var-init");
                    let _name = cc11001100_hook("_name", prodArr[i].product_name, "var-init");
                    let _qty = cc11001100_hook("_qty", prodArr[i].qty, "var-init");
                    let _subtotal = cc11001100_hook("_subtotal", prodArr[i].subtotal, "var-init");
                    let _pax_type = cc11001100_hook("_pax_type", prodArr[i].pax_type, "var-init");
                    if (typeof _pax_type == 'undefined') {
                      _pax_type = cc11001100_hook("_pax_type", '', "assign");
                    }
                    prodStr.push(_category + ';' + _name + ';' + _qty + ';' + _subtotal + ';;eVar32=' + _pax_type);
                  }
                  aa.products = cc11001100_hook("aa.products", prodStr.join(), "assign");
                } catch (proderror) {
                  console.log('Report Only: IBE product not available in data layer' + proderror);
                }
              }
              if (aa.eVar85 == 'TRP') {
                if (aa.eVar22.indexOf('TRP::HTL') > -1) {
                  switch (conversion) {
                    case 'WEB::TRP::HTL::SEARCH':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event21'), "assign");
                      aa.eVar34 = cc11001100_hook("aa.eVar34", cxDataLayer.search.keyword, "assign");
                      aa.eVar82 = cc11001100_hook("aa.eVar82", cxDataLayer.search.type, "assign");
                      aa.products = cc11001100_hook("aa.products", 'TRP_HOTEL;;;;' + 'eVar55=' + cxDataLayer.search.params.date_checkin + '|eVar56=' + cxDataLayer.search.params.date_checkout + '|eVar57=' + cxDataLayer.search.params.night + '|eVar58=' + cxDataLayer.search.params.room + '|eVar59=' + cxDataLayer.search.params.days_advance + '|eVar63=' + cxDataLayer.search.params.guest_combination, "assign");
                      break;
                    case 'WEB::TRP::HTL::DETAILS':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event22'), "assign");
                      break;
                    case 'WEB::TRP::HTL::REVIEW':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event23'), "assign");
                      break;
                    case 'WEB::TRP::HTL::GUEST':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event24'), "assign");
                      break;
                    case 'WEB::TRP::HTL::PAYMENT':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event25'), "assign");
                      break;
                    case 'WEB::TRP::HTL::CONFIRMATION':
                      aa.eVar77 = cc11001100_hook("aa.eVar77", aa.purchaseID = cc11001100_hook("aa.purchaseID", cxDataLayer.transaction.aa_transaction_id, "assign"), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event26:' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event113=' + cxDataLayer.transaction.payment_total_miles + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event114=' + cxDataLayer.transaction.subtotal + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'purchase'), "assign");
                      aa.eVar78 = cc11001100_hook("aa.eVar78", cxDataLayer.transaction.promo_code, "assign");
                      s.currencyCode = cc11001100_hook("s.currencyCode", aa.eVar37 = cc11001100_hook("aa.eVar37", cxDataLayer.transaction.currency, "assign"), "assign");
                      aa.eVar66 = cc11001100_hook("aa.eVar66", cxDataLayer.booking.pnr, "assign");
                      aa.eVar67 = cc11001100_hook("aa.eVar67", cxDataLayer.booking.pnr_super, "assign");
                      let paxAdult = cc11001100_hook("paxAdult", cxDataLayer.booking.pax.adult || '0', "var-init");
                      let paxChild = cc11001100_hook("paxChild", cxDataLayer.booking.pax.child || '0', "var-init");
                      let paxInfant = cc11001100_hook("paxInfant", cxDataLayer.booking.pax.infant || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event34=' + paxAdult + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event35=' + paxChild + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event36=' + paxInfant + ':' + aa.purchaseID), "assign");
                      break;
                  }
                  try {
                    var prodStr = cc11001100_hook("prodStr", [], "var-init");
                    var prodArr = cc11001100_hook("prodArr", [], "var-init");
                    var stayArr = cc11001100_hook("stayArr", [], "var-init");
                    if (cxDataLayer.products?.length) {
                      prodArr = cc11001100_hook("prodArr", cxDataLayer.products, "assign");
                    }
                    if (cxDataLayer.stay.hotels?.length) {
                      stayArr = cc11001100_hook("stayArr", cxDataLayer.stay.hotels, "assign");
                    }
                    for (let i = cc11001100_hook("i", 0, "var-init"); i < stayArr.length; i++) {
                      let qty = cc11001100_hook("qty", '0', "var-init");
                      if (prodArr.length > 0) {
                        qty = cc11001100_hook("qty", prodArr[i].qty, "assign");
                      }
                      let datetime_checkin = cc11001100_hook("datetime_checkin", cxDataLayer.stay.hotels[i].datetime_checkin || '', "var-init");
                      let datetime_checkout = cc11001100_hook("datetime_checkout", cxDataLayer.stay.hotels[i].datetime_checkout || '', "var-init");
                      let nights = cc11001100_hook("nights", cxDataLayer.stay.hotels[i].nights || '', "var-init");
                      let rooms = cc11001100_hook("rooms", cxDataLayer.stay.hotels[i].rooms || '', "var-init");
                      let days_advance = cc11001100_hook("days_advance", '', "var-init");
                      if (cxDataLayer.hasOwnProperty('booking')) {
                        days_advance = cc11001100_hook("days_advance", cxDataLayer.booking.days_advance, "assign");
                      }
                      let city = cc11001100_hook("city", cxDataLayer.stay.hotels[i].city || '', "var-init");
                      let hotel_name = cc11001100_hook("hotel_name", cxDataLayer.stay.hotels[i].hotel_name.replace(/[&,;|()'"_]/g, '') || '', "var-init");
                      let hotel_id = cc11001100_hook("hotel_id", cxDataLayer.stay.hotels[i].hotel_id || '', "var-init");
                      let guest_combination = cc11001100_hook("guest_combination", cxDataLayer.stay.guest_combination || '', "var-init");
                      let hotel_brand = cc11001100_hook("hotel_brand", cxDataLayer.stay.hotels[i].hotel_brand || '', "var-init");
                      prodStr.push('TRP_HOTEL;' + stayArr[i].hotel_name.replace(/[&,;|()'"_]/g, '') + ';' + qty + ';' + ';event178=' + nights + '|event179=' + rooms + ';eVar55=' + datetime_checkin + '|eVar56=' + datetime_checkout + '|eVar57=' + nights + '|eVar58=' + rooms + '|eVar59=' + days_advance + '|eVar60=' + city + '|eVar61=' + hotel_name.replace(/[&,;|()'"_]/g, '') + '|eVar62=' + hotel_id + '|eVar63=' + guest_combination + '|eVar84=' + hotel_brand);
                    }
                    prodStr.join();
                    aa.products = cc11001100_hook("aa.products", prodStr.join(), "assign");
                  } catch (trperror) {
                    console.log('Report Only:TRP Productstring ' + trperror);
                  }
                }
                if (aa.eVar22.indexOf('TRP::PKG') > -1) {
                  switch (aa.eVar22) {
                    case 'WEB::TRP::PKG::SEARCH':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event27'), "assign");
                      aa.eVar34 = cc11001100_hook("aa.eVar34", cxDataLayer.search.keyword, "assign");
                      aa.eVar82 = cc11001100_hook("aa.eVar82", cxDataLayer.search.type, "assign");
                      aa.products = cc11001100_hook("aa.products", 'TRP_PACKAGE;;;;' + 'eVar55=' + cxDataLayer.search.params.date_checkin + '|eVar56=' + cxDataLayer.search.params.date_checkout + '|eVar57=' + cxDataLayer.search.params.night + '|eVar58=' + cxDataLayer.search.params.room + '|eVar59=' + cxDataLayer.search.params.days_advance + '|eVar63=' + cxDataLayer.search.params.guest_combination, "assign");
                      break;
                    case 'WEB::TRP::PKG::DETAILS':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event28'), "assign");
                      break;
                    case 'WEB::TRP::PKG::CHANGE_FLIGHTS':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event29'), "assign");
                      break;
                    case 'WEB::TRP::PKG::REVIEW':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event30'), "assign");
                      break;
                    case 'WEB::TRP::PKG::PASSENGER':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event31'), "assign");
                      break;
                    case 'WEB::TRP::PKG::PAYMENT':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event32'), "assign");
                      break;
                    case 'WEB::TRP::PKG::CONFIRMATION':
                      aa.eVar77 = cc11001100_hook("aa.eVar77", aa.purchaseID = cc11001100_hook("aa.purchaseID", cxDataLayer.transaction.aa_transaction_id, "assign"), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event33:' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event113=' + cxDataLayer.transaction.payment_total_miles + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event114=' + cxDataLayer.transaction.subtotal + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'purchase,event178,event179'), "assign");
                      aa.eVar78 = cc11001100_hook("aa.eVar78", cxDataLayer.transaction.promo_code, "assign");
                      s.currencyCode = cc11001100_hook("s.currencyCode", aa.eVar37 = cc11001100_hook("aa.eVar37", cxDataLayer.transaction.currency, "assign"), "assign");
                      aa.eVar66 = cc11001100_hook("aa.eVar66", cxDataLayer.booking.pnr, "assign");
                      aa.eVar67 = cc11001100_hook("aa.eVar67", cxDataLayer.booking.pnr_super, "assign");
                      let paxAdult = cc11001100_hook("paxAdult", cxDataLayer.booking.pax.adult || '0', "var-init");
                      let paxChild = cc11001100_hook("paxChild", cxDataLayer.booking.pax.child || '0', "var-init");
                      let paxInfant = cc11001100_hook("paxInfant", cxDataLayer.booking.pax.infant || '0', "var-init");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event34=' + paxAdult + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event35=' + paxChild + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event36=' + paxInfant + ':' + aa.purchaseID), "assign");
                      break;
                  }
                  try {
                    var prodArrAll = cc11001100_hook("prodArrAll", [], "var-init");
                    var StayProductStringArr = cc11001100_hook("StayProductStringArr", [], "var-init");
                    var stayArr = cc11001100_hook("stayArr", [], "var-init");
                    if (cxDataLayer.stay.hotels?.length) {
                      stayArr = cc11001100_hook("stayArr", cxDataLayer.stay.hotels, "assign");
                    }
                    for (let i = cc11001100_hook("i", 0, "var-init"); i < stayArr.length; i++) {
                      let datetime_checkin = cc11001100_hook("datetime_checkin", cxDataLayer.stay.hotels[i].datetime_checkin || '', "var-init");
                      let datetime_checkout = cc11001100_hook("datetime_checkout", cxDataLayer.stay.hotels[i].datetime_checkout || '', "var-init");
                      let nights = cc11001100_hook("nights", cxDataLayer.stay.hotels[i].nights || '', "var-init");
                      let rooms = cc11001100_hook("rooms", cxDataLayer.stay.hotels[i].rooms || '', "var-init");
                      let stayQty = cc11001100_hook("stayQty", cxDataLayer.stay.hotels[i].qty || '0', "var-init");
                      let days_advance = cc11001100_hook("days_advance", '', "var-init");
                      if (cxDataLayer.hasOwnProperty('booking')) {
                        days_advance = cc11001100_hook("days_advance", cxDataLayer.booking.days_advance, "assign");
                      }
                      let city = cc11001100_hook("city", cxDataLayer.stay.hotels[i].city || '', "var-init");
                      let hotel_name = cc11001100_hook("hotel_name", cxDataLayer.stay.hotels[i].hotel_name.replace(/[&,;|()'"_]/g, '') || '', "var-init");
                      let hotel_id = cc11001100_hook("hotel_id", cxDataLayer.stay.hotels[i].hotel_id || '', "var-init");
                      let guest_combination = cc11001100_hook("guest_combination", cxDataLayer.stay.guest_combination || '', "var-init");
                      let hotel_brand = cc11001100_hook("hotel_brand", cxDataLayer.stay.hotels[i].hotel_brand || '', "var-init");
                      if (cxDataLayer.hasOwnProperty('booking')) {
                        paxAdult = cc11001100_hook("paxAdult", cxDataLayer.booking.pax.adult, "assign");
                        paxChild = cc11001100_hook("paxChild", cxDataLayer.booking.pax.child, "assign");
                        paxInfant = cc11001100_hook("paxInfant", cxDataLayer.booking.pax.infant, "assign");
                      }
                      StayProductStringArr.push('TRP_PACKAGE;' + stayArr[i].hotel_name.replace(/[&,;|()'"_]/g, '') + ';' + stayQty + ';' + ';event178=' + nights + '|event179=' + rooms + ';eVar55=' + datetime_checkin + '|eVar56=' + datetime_checkout + '|eVar57=' + nights + '|eVar58=' + rooms + '|eVar59=' + days_advance + '|eVar60=' + city + '|eVar61=' + hotel_name.replace(/[&,;|()'"_]/g, '') + '|eVar62=' + hotel_id + '|eVar63=' + guest_combination + '|eVar84=' + hotel_brand);
                    }
                    var StayProductString = cc11001100_hook("StayProductString", StayProductStringArr.join(), "var-init");
                    prodArrAll.push(StayProductString);
                    var FlightProductStringArr = cc11001100_hook("FlightProductStringArr", [], "var-init");
                    var FlightArr = cc11001100_hook("FlightArr", [], "var-init");
                    if (cxDataLayer.products?.length) {
                      FlightArr = cc11001100_hook("FlightArr", cxDataLayer.products, "assign");
                    }
                    for (let i = cc11001100_hook("i", 0, "var-init"); i < FlightArr.length; i++) {
                      let _category = cc11001100_hook("_category", FlightArr[i].product_category, "var-init");
                      let _name = cc11001100_hook("_name", FlightArr[i].product_id, "var-init");
                      let _qty = cc11001100_hook("_qty", FlightArr[i].qty, "var-init");
                      FlightProductStringArr.push(_category + ';' + _name + ';' + _qty);
                    }
                    var FligtProductString = cc11001100_hook("FligtProductString", FlightProductStringArr.join(), "var-init");
                    prodArrAll.push(FligtProductString);
                    aa.products = cc11001100_hook("aa.products", prodArrAll.join(), "assign");
                    console.log(aa.products);
                  } catch (trperror) {
                    console.log('Report Only:TRP PKG Productstring ' + trperror);
                  }
                }
                if (aa.eVar22.indexOf('TRP::EVT') > -1) {
                  switch (aa.eVar22) {
                    case 'WEB::TRP::EVT::SEARCH':
                      aa.eVar34 = cc11001100_hook("aa.eVar34", cxDataLayer.search.keyword, "assign");
                      aa.eVar82 = cc11001100_hook("aa.eVar82", cxDataLayer.search.type, "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event76'), "assign");
                      break;
                    case 'WEB::TRP::EVT::DETAILS':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event77'), "assign");
                      break;
                    case 'WEB::TRP::EVT::REVIEW':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event78'), "assign");
                      break;
                    case 'WEB::TRP::EVT::GUEST':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event79'), "assign");
                      break;
                    case 'WEB::TRP::EVT::PAYMENT':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event80'), "assign");
                      break;
                    case 'WEB::TRP::EVT::CONFIRMATION':
                      aa.eVar77 = cc11001100_hook("aa.eVar77", aa.purchaseID = cc11001100_hook("aa.purchaseID", cxDataLayer.transaction.aa_transaction_id, "assign"), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event81:' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event113=' + cxDataLayer.transaction.payment_total_miles + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event114=' + cxDataLayer.transaction.subtotal + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'purchase'), "assign");
                      aa.eVar78 = cc11001100_hook("aa.eVar78", cxDataLayer.transaction.promo_code, "assign");
                      s.currencyCode = cc11001100_hook("s.currencyCode", aa.eVar37 = cc11001100_hook("aa.eVar37", cxDataLayer.transaction.currency, "assign"), "assign");
                      aa.eVar66 = cc11001100_hook("aa.eVar66", cxDataLayer.booking.pnr, "assign");
                      aa.eVar67 = cc11001100_hook("aa.eVar67", cxDataLayer.booking.pnr_super, "assign");
                      var prodString = cc11001100_hook("prodString", [], "var-init");
                      var evtArr = cc11001100_hook("evtArr", cxDataLayer.products, "var-init");
                      for (let i = cc11001100_hook("i", 0, "var-init"); i < evtArr.length; i++) {
                        prodString.push('TRP_EVENT;' + evtArr[i].product_id.replace(/[&,;|()'"_]/g, '') + ';' + evtArr[i].qty + ';' + evtArr[i].subtotal);
                      }
                      aa.products = cc11001100_hook("aa.products", prodString.join(), "assign");
                      break;
                  }
                }
                if (aa.eVar22.indexOf('TRP::EVT') > -1) {
                  switch (aa.eVar22) {
                    case 'WEB::TRP::EPK::SEARCH':
                      aa.eVar34 = cc11001100_hook("aa.eVar34", cxDataLayer.search.keyword, "assign");
                      aa.eVar82 = cc11001100_hook("aa.eVar82", cxDataLayer.search.type, "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event82'), "assign");
                      break;
                    case 'WEB::TRP::EPK::DETAILS':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event83'), "assign");
                      break;
                    case 'WEB::TRP::EPK::CHANGE_FLIGHTS':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event84'), "assign");
                      break;
                    case 'WEB::TRP::EPK::REVIEW':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event85'), "assign");
                      break;
                    case 'WEB::TRP::EPK::PASSENGER':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event86'), "assign");
                      break;
                    case 'WEB::TRP::EPK::PAYMENT':
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event87'), "assign");
                    case 'WEB::TRP::EPK::CONFIRMATION':
                      aa.eVar77 = cc11001100_hook("aa.eVar77", aa.purchaseID = cc11001100_hook("aa.purchaseID", cxDataLayer.transaction.aa_transaction_id, "assign"), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event88:' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event113=' + cxDataLayer.transaction.payment_total_miles + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'event114=' + cxDataLayer.transaction.subtotal + ':' + aa.purchaseID), "assign");
                      aa.events = cc11001100_hook("aa.events", aa.apl(aa.events, 'purchase'), "assign");
                      aa.eVar78 = cc11001100_hook("aa.eVar78", cxDataLayer.transaction.promo_code, "assign");
                      s.currencyCode = cc11001100_hook("s.currencyCode", aa.eVar37 = cc11001100_hook("aa.eVar37", cxDataLayer.transaction.currency, "assign"), "assign");
                      aa.eVar66 = cc11001100_hook("aa.eVar66", cxDataLayer.booking.pnr, "assign");
                      aa.eVar67 = cc11001100_hook("aa.eVar67", cxDataLayer.booking.pnr_super, "assign");
                      var prodString = cc11001100_hook("prodString", [], "var-init");
                      var epkArr = cc11001100_hook("epkArr", cxDataLayer.products, "var-init");
                      for (let i = cc11001100_hook("i", 0, "var-init"); i < epkArr.length; i++) {
                        prodString.push('TRP_EVENT;' + epkArr[i].product_id.replace(/[&,;|()'"_]/g, '') + ';' + epkArr[i].qty + ';' + epkArr[i].subtotal);
                      }
                      aa.products = cc11001100_hook("aa.products", prodString.join(), "assign");
                      break;
                  }
                }
              }
              aa.eVar249 = cc11001100_hook("aa.eVar249", aa.products, "assign");
              aa.linkTrackVars = cc11001100_hook("aa.linkTrackVars", aa.apl(aa.linkTrackVars, 'server,prop4,prop15,prop16,eVar2,eVar3,eVar4,eVar5,eVar11,eVar14,eVar15,eVar18,eVar19,eVar85,eVar86,eVar111,products'), "assign");
              aa.linkTrackEvents = cc11001100_hook("aa.linkTrackEvents", aa.apl(aa.linkTrackEvents, ''), "assign");
              console.log('doPlugin fired');
            }
          }, "assign");
        }
      } catch (e) {
        utag.DB(e);
      }
    }], "assign");
    u.send = cc11001100_hook("u.send", function (a, b, c, d, e, f, g, h, ev) {
      if (u.ev[a] || typeof u.ev.all != "undefined") {
        utag.DB("send:1152");
        u.data = cc11001100_hook("u.data", {
          "adobe_org_id": cc11001100_hook("adobe_org_id", "21683A5857FCAE5A0A495DC5@AdobeOrg", "object-key-init"),
          "cookieDomain": cc11001100_hook("cookieDomain", function () {
            return utag.loader.RC('utag_main').vapi_domain || function () {
              var i = cc11001100_hook("i", 0, "var-init"),
                d = cc11001100_hook("d", document.domain, "var-init"),
                p = cc11001100_hook("p", d.split('.'), "var-init"),
                s = cc11001100_hook("s", '_vapi' + new Date().getTime(), "var-init");
              while (i < p.length - 1 && document.cookie.indexOf(s + '=' + s) === -1) {
                d = cc11001100_hook("d", p.slice(-1 - ++i).join('.'), "assign");
                document.cookie = cc11001100_hook("document.cookie", s + '=' + s + ';domain=' + d + ';', "assign");
              }
              document.cookie = cc11001100_hook("document.cookie", s + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=' + d + ';', "assign");
              utag.loader.SC('utag_main', {
                'vapi_domain': cc11001100_hook('vapi_domain', d, "object-key-init")
              });
              return d;
            }();
          }(), "object-key-init"),
          "a": {},
          "serial": {},
          "linkName": cc11001100_hook("linkName", "", "object-key-init"),
          "linkType": cc11001100_hook("linkType", "", "object-key-init"),
          "runviewthrough": cc11001100_hook("runviewthrough", "no", "object-key-init"),
          "viewthroughloaded": cc11001100_hook("viewthroughloaded", u.hasadobeView(), "object-key-init"),
          "viewthroughinterval": cc11001100_hook("viewthroughinterval", 100, "object-key-init"),
          "viewthroughmaxtries": cc11001100_hook("viewthroughmaxtries", 3, "object-key-init"),
          "clearVars_in_RPTCallback": cc11001100_hook("clearVars_in_RPTCallback", true, "object-key-init"),
          "send_timestamp": cc11001100_hook("send_timestamp", "no", "object-key-init"),
          "timestamp": cc11001100_hook("timestamp", "", "object-key-init")
        }, "assign");
        if (u.data.runviewthrough === "yes" && !u.data.viewthroughloaded) {
          (function (el, script) {
            el = cc11001100_hook("el", document.createElement("script"), "assign");
            el.async = cc11001100_hook("el.async", !0, "assign");
            el.src = cc11001100_hook("el.src", "https://www.everestjs.net/static/le/last-event-tag-latest.min.js", "assign");
            script = cc11001100_hook("script", document.getElementsByTagName("script")[0], "assign");
            script.parentNode.insertBefore(el, script);
          })();
          utag.ut.adobeViewScriptRequested = cc11001100_hook("utag.ut.adobeViewScriptRequested", true, "assign");
          u.data.viewthroughloaded = cc11001100_hook("u.data.viewthroughloaded", true, "assign");
        }
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = cc11001100_hook("e", u.map[d].split(","), "assign");
            for (f = cc11001100_hook("f", 0, "assign"); f < e.length; f++) {
              if (e[f] === "adobe_org_id" || e[f] === "linkTrackVars" || e[f] === "linkTrackEvents" || e[f] === "linkType" || e[f] === "linkName") {
                u.data[e[f]] = cc11001100_hook("u.data[e[f]]", b[d], "assign");
                if (e[f] === "linkName" && b[d] !== "" && b[d] !== null && b[d] !== undefined) {
                  if (u.typeOf(window.tealium) !== "undefined" && u.typeOf(window.tealium.track) === "function") {
                    utag.DB("Found mapping of linkName. Calling Adobe link tracking function tl().");
                    a = cc11001100_hook("a", "link", "assign");
                  }
                }
              } else if (e[f] === "combineLinkVar") {
                u.combineLinkVar = cc11001100_hook("u.combineLinkVar", b[d], "assign");
              }
            }
          }
        }
        if (u.typeOf(window.tealium) !== "undefined" && u.typeOf(window.tealium.track) === "function") {
          if (window.utag_cfg_ovrd && window.utag_cfg_ovrd.link_attribute && b[window.utag_cfg_ovrd.link_attribute]) {
            utag.DB("Config utag_cfg_ovrd.link_attribute property set. Calling Adobe link tracking function tl().");
            a = cc11001100_hook("a", "link", "assign");
          }
        }
        u.queue.push({
          "a": cc11001100_hook("a", a, "object-key-init"),
          "b": cc11001100_hook("b", b, "object-key-init"),
          "u.data": cc11001100_hook("u.data", u.data, "object-key-init")
        });
        vAPI.getInstance(u.data.adobe_org_id, function (instance) {
          var data = cc11001100_hook("data", u.queue.shift(), "var-init");
          a = cc11001100_hook("a", data["a"], "assign");
          b = cc11001100_hook("b", data["b"], "assign");
          u.data = cc11001100_hook("u.data", data["u.data"], "assign");
          u.a = cc11001100_hook("u.a", a, "assign");
          b.sc_events = cc11001100_hook("b.sc_events", b.sc_events || {}, "assign");
          u.addEvent = cc11001100_hook("u.addEvent", function (v, n) {
            var t = cc11001100_hook("t", [], "var-init");
            if (v instanceof Array) {
              t = cc11001100_hook("t", v.slice(0), "assign");
            } else if (typeof n !== "undefined") {
              t.push(v + "=" + n);
            } else {
              t.push(v);
            }
            for (var i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) {
              b.sc_events[t[i]] = cc11001100_hook("b.sc_events[t[i]]", 1, "assign");
              u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
            }
            return b.sc_events;
          }, "assign");
          u.addProduct = cc11001100_hook("u.addProduct", function (v) {
            u.data.sc_addProd = cc11001100_hook("u.data.sc_addProd", "", "assign");
            if (v instanceof Array) {
              u.data.sc_addProd = cc11001100_hook("u.data.sc_addProd", v.join(","), "assign");
            } else {
              u.data.sc_addProd = cc11001100_hook("u.data.sc_addProd", v, "assign");
            }
          }, "assign");
          if (u.data.runviewthrough === "yes") {
            var editedReportSuite = cc11001100_hook("editedReportSuite", "asiaml-cx-globalmaster-dev".toLowerCase(), "var-init");
            editedReportSuite = cc11001100_hook("editedReportSuite", editedReportSuite.replace(/\s/g, ""), "assign");
            var attempt_counter = cc11001100_hook("attempt_counter", 0, "var-init");
            var adcloud_interval = cc11001100_hook("adcloud_interval", setInterval(function () {
              attempt_counter++;
              if (window["AdCloudEvent"]) {
                clearInterval(adcloud_interval);
                AdCloudEvent(u.data.adobe_org_id, editedReportSuite);
                processAnalytics();
              } else if (attempt_counter > u.data.viewthroughmaxtries) {
                clearInterval(adcloud_interval);
                processAnalytics();
              }
            }, u.data.viewthroughinterval), "var-init");
          } else {
            processAnalytics();
          }
          function processAnalytics() {
            if (u.a === "link") {
              u.ltflag = cc11001100_hook("u.ltflag", true, "assign");
              if (typeof u.data.linkTrackVars === "undefined" && typeof b.linkTrackVars === "undefined") {
                u.ltv = cc11001100_hook("u.ltv", [], "assign");
              }
              if (u.combineLinkVar && typeof u.data.linkTrackVars !== "undefined") {
                u.typeCheck(u.data.linkTrackVars, "ltv");
              } else if (u.combineLinkVar && typeof b.linkTrackVars !== "undefined") {
                u.typeCheck(b.linkTrackVars, "ltv");
              }
              if (typeof u.data.linkTrackEvents === "undefined" && typeof b.linkTrackEvents === "undefined") {
                u.lte = cc11001100_hook("u.lte", [], "assign");
              }
              if (u.combineLinkVar && typeof u.data.linkTrackEvents !== "undefined") {
                u.typeCheck(u.data.linkTrackEvents, "lte");
              } else if (u.combineLinkVar && typeof b.linkTrackEvents !== "undefined") {
                u.typeCheck(b.linkTrackEvents, "lte");
              }
            }
            u.data.tagdevicetype = cc11001100_hook("u.data.tagdevicetype", "standard", "assign");
            u.data.detectserial = cc11001100_hook("u.data.detectserial", "no", "assign");
            for (c = cc11001100_hook("c", 0, "assign"); c < u.extend.length; c++) {
              try {
                d = cc11001100_hook("d", u.extend[c](a, b), "assign");
                if (d == false) return;
              } catch (e) {}
            }
            ;
            try {
              if (window.sessionStorage) {
                var standardDimensions = cc11001100_hook("standardDimensions", sessionStorage.getItem("s_dmdbase") || "", "var-init");
                var customDimensions1 = cc11001100_hook("customDimensions1", sessionStorage.getItem("s_dmdbase_custom1") || "", "var-init");
                var customDimensions2 = cc11001100_hook("customDimensions2", sessionStorage.getItem("s_dmdbase_custom2") || "", "var-init");
                var customDimensions3 = cc11001100_hook("customDimensions3", sessionStorage.getItem("s_dmdbase_custom3") || "", "var-init");
                var customDimensions4 = cc11001100_hook("customDimensions4", sessionStorage.getItem("s_dmdbase_custom4") || "", "var-init");
                u.o.contextData.s_dmdbase = cc11001100_hook("u.o.contextData.s_dmdbase", standardDimensions, "assign");
                u.o.contextData.s_dmdbase_custom1 = cc11001100_hook("u.o.contextData.s_dmdbase_custom1", customDimensions1, "assign");
                u.o.contextData.s_dmdbase_custom2 = cc11001100_hook("u.o.contextData.s_dmdbase_custom2", customDimensions2, "assign");
                u.o.contextData.s_dmdbase_custom3 = cc11001100_hook("u.o.contextData.s_dmdbase_custom3", customDimensions3, "assign");
                u.o.contextData.s_dmdbase_custom4 = cc11001100_hook("u.o.contextData.s_dmdbase_custom4", customDimensions4, "assign");
              }
            } catch (e) {
              utag.DB("AppMeasurement Demandbase Error: " + e.message);
            }
            if (u.data.tagdevicetype === "mobile") {
              u.data.timestamp = cc11001100_hook("u.data.timestamp", u.data.timestamp || b.timestamp || b.timestamp_unix, "assign");
              if (isTrue(u.data.send_timestamp) && u.data.timestamp) {
                u.o.timestamp = cc11001100_hook("u.o.timestamp", u.data.timestamp, "assign");
              }
              u.data.a = cc11001100_hook("u.data.a", {
                "AppID": cc11001100_hook("AppID", b.app_id || "", "object-key-init"),
                "CarrierName": cc11001100_hook("CarrierName", b.carrier || "", "object-key-init"),
                "DeviceName": cc11001100_hook("DeviceName", b.device || "", "object-key-init"),
                "HourOfDay": cc11001100_hook("HourOfDay", b.lifecycle_hourofday_local || "", "object-key-init"),
                "DayOfWeek": cc11001100_hook("DayOfWeek", b.lifecycle_dayofweek_local || "", "object-key-init"),
                "OSVersion": cc11001100_hook("OSVersion", b.os_version || b.platform_version || "", "object-key-init"),
                "Resolution": cc11001100_hook("Resolution", b.device_resolution || "", "object-key-init")
              }, "assign");
              if (b.lifecycle_type) {
                u.data.a.disable_wake_track = cc11001100_hook("u.data.a.disable_wake_track", false, "assign");
                u.data.a.disable_sleep_track = cc11001100_hook("u.data.a.disable_sleep_track", false, "assign");
                u.data.a.DaysSinceFirstUse = cc11001100_hook("u.data.a.DaysSinceFirstUse", b.lifecycle_dayssincelaunch || "", "assign");
                u.data.a.DaysSinceLastUpgrade = cc11001100_hook("u.data.a.DaysSinceLastUpgrade", b.lifecycle_dayssinceupdate || "", "assign");
                u.data.a.DaysSinceLastUse = cc11001100_hook("u.data.a.DaysSinceLastUse", b.lifecycle_dayssincelastwake || "", "assign");
                u.data.a.Launches = cc11001100_hook("u.data.a.Launches", b.lifecycle_launchcount || "", "assign");
                u.data.a.InstallDate = cc11001100_hook("u.data.a.InstallDate", b.lifecycle_firstlaunchdate_MMDDYYYY || "", "assign");
                u.data.a.UpgradeEvent = cc11001100_hook("u.data.a.UpgradeEvent", b.lifecycle_isfirstlaunchupdate || "", "assign");
                u.data.a.PrevSessionLength = cc11001100_hook("u.data.a.PrevSessionLength", b.lifecycle_priorsecondsawake || "", "assign");
              }
              if (b.lifecycle_isfirstlaunch) {
                u.data.a.InstallEvent = cc11001100_hook("u.data.a.InstallEvent", "InstallEvent", "assign");
              }
              if (b.lifecycle_diddetectcrash) {
                u.data.a.CrashEvent = cc11001100_hook("u.data.a.CrashEvent", "CrashEvent", "assign");
              }
              if (b.lifecycle_type === "launch") {
                u.data.a.LaunchEvent = cc11001100_hook("u.data.a.LaunchEvent", "LaunchEvent", "assign");
              }
              if (b.lifecycle_isfirslaunchupdate) {
                u.data.a.UpgradeEvent = cc11001100_hook("u.data.a.UpgradeEvent", "UpgradeEvent", "assign");
              }
            }
            for (e in utag.loader.GV(u.map)) {
              if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("SERIAL_") > -1) {
                f = cc11001100_hook("f", u.map[e].split(","), "assign");
                for (g = cc11001100_hook("g", 0, "assign"); g < f.length; g++) {
                  if (f[g].indexOf("SERIAL_") === 0) {
                    u.data.serial[f[g].substring(7)] = cc11001100_hook("u.data.serial[f[g].substring(7)]", b[e], "assign");
                  }
                }
              } else if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                f = cc11001100_hook("f", u.map[e].split(","), "assign");
                for (g = cc11001100_hook("g", 0, "assign"); g < f.length; g++) {
                  if (f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")) {
                    u.data[f[g].substring(9)] = cc11001100_hook("u.data[f[g].substring(9)]", b[e], "assign");
                  }
                }
              }
              if (u.data.tagdevicetype === "mobile") {
                if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("contextData.a.") > -1) {
                  f = cc11001100_hook("f", u.map[e].split(","), "assign");
                  for (g = cc11001100_hook("g", 0, "assign"); g < f.length; g++) {
                    if (f[g].indexOf("contextData.a.") === 0) {
                      u.data.a[f[g].substring(14)] = cc11001100_hook("u.data.a[f[g].substring(14)]", b[e], "assign");
                    }
                  }
                }
              }
            }
            if (u.data.a.disable_wake_track === true || u.data.a.disable_wake_track === "true") {
              if (b.lifecycle_type === "wake") {
                return false;
              }
            }
            if (u.data.a.disable_sleep_track === true || u.data.a.disable_sleep_track === "true") {
              if (b.lifecycle_type === "sleep") {
                return false;
              }
            }
            u.data.id = cc11001100_hook("u.data.id", u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []), "assign");
            u.data.category = cc11001100_hook("u.data.category", u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []), "assign");
            u.data.quantity = cc11001100_hook("u.data.quantity", u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []), "assign");
            u.data.price = cc11001100_hook("u.data.price", u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []), "assign");
            if (typeof u.data.id != "undefined" && u.data.id != "") {
              c = cc11001100_hook("c", [], "assign");
              d = cc11001100_hook("d", {}, "assign");
              ev = cc11001100_hook("ev", {}, "assign");
              for (e in utag.loader.GV(u.map)) {
                if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
                  f = cc11001100_hook("f", u.map[e].split(","), "assign");
                  for (g = cc11001100_hook("g", 0, "assign"); g < f.length; g++) {
                    var pv = cc11001100_hook("pv", f[g].substring(9), "var-init");
                    if (f[g].indexOf("PRODUCTS_evar") == 0 || f[g].indexOf("PRODUCTS_eVar") == 0) {
                      if (b[e] instanceof Array) {
                        b.sc_prodevars = cc11001100_hook("b.sc_prodevars", b.sc_prodevars || [], "assign");
                        for (var i = cc11001100_hook("i", 0, "var-init"); i < b[e].length; i++) {
                          var prodvars = cc11001100_hook("prodvars", {}, "var-init");
                          if (typeof b.sc_prodevars[i] != "undefined" && b.sc_prodevars[i] != "") {
                            b.sc_prodevars[i][pv] = cc11001100_hook("b.sc_prodevars[i][pv]", b[e][i], "assign");
                          } else {
                            prodvars[pv] = cc11001100_hook("prodvars[pv]", b[e][i], "assign");
                            b.sc_prodevars.push(prodvars);
                          }
                        }
                      } else {
                        d[pv] = cc11001100_hook("d[pv]", (b[e] + "").split(","), "assign");
                      }
                    } else if (f[g].indexOf("PRODUCTS_event") == 0) {
                      if (b[e] instanceof Array) {
                        b.sc_prodevents = cc11001100_hook("b.sc_prodevents", b.sc_prodevents || [], "assign");
                        for (var i = cc11001100_hook("i", 0, "var-init"); i < b[e].length; i++) {
                          var prodevents = cc11001100_hook("prodevents", {}, "var-init");
                          if (typeof b.sc_prodevents[i] != "undefined" && b.sc_prodevents[i] != "") {
                            b.sc_prodevents[i][pv] = cc11001100_hook("b.sc_prodevents[i][pv]", b[e][i], "assign");
                          } else {
                            prodevents[pv] = cc11001100_hook("prodevents[pv]", b[e][i], "assign");
                            b.sc_prodevents.push(prodevents);
                          }
                        }
                        u.addEvent(pv);
                      } else if (b[e] !== "") {
                        ev[pv] = cc11001100_hook("ev[pv]", b[e], "assign");
                        u.addEvent(pv);
                      }
                    }
                  }
                }
              }
              e = cc11001100_hook("e", "", "assign");
              for (f in utag.loader.GV(d)) {
                for (g = cc11001100_hook("g", 0, "assign"); g < d[f].length; g++) {
                  if (e != "") {
                    e += cc11001100_hook("e", "|" + f + "=" + d[f][g], "assign");
                  } else {
                    e = cc11001100_hook("e", f + "=" + d[f][g], "assign");
                  }
                }
              }
              h = cc11001100_hook("h", "", "assign");
              for (f in utag.loader.GV(ev)) {
                if (h) {
                  h += cc11001100_hook("h", "|" + f + "=" + (isNaN(ev[f]) ? "1" : ev[f]), "assign");
                } else {
                  h = cc11001100_hook("h", f + "=" + (isNaN(ev[f]) ? "1" : ev[f]), "assign");
                }
              }
              b.sc_prodevents = cc11001100_hook("b.sc_prodevents", b.sc_prodevents || [], "assign");
              b.sc_prodevars = cc11001100_hook("b.sc_prodevars", b.sc_prodevars || [], "assign");
              for (d = cc11001100_hook("d", 0, "assign"); d < u.data.id.length; d++) {
                var h2 = cc11001100_hook("h2", h, "var-init");
                var h3 = cc11001100_hook("h3", e, "var-init");
                if (typeof b.sc_prodevents != "undefined") {
                  for (f in b.sc_prodevents[d]) {
                    if (typeof b.sc_prodevents[d][f] != "undefined") {
                      var l = cc11001100_hook("l", b.sc_prodevents[d][f], "var-init");
                      if (typeof l != "undefined" && l != "" && isNaN(l) == false) {
                        if (h2) {
                          h2 += cc11001100_hook("h2", "|" + f + "=" + l, "assign");
                        } else {
                          h2 = cc11001100_hook("h2", f + "=" + l, "assign");
                        }
                      }
                    }
                  }
                }
                if (typeof b.sc_prodevars != "undefined") {
                  for (f in b.sc_prodevars[d]) {
                    if (typeof b.sc_prodevars[d][f] != "undefined") {
                      var l = cc11001100_hook("l", b.sc_prodevars[d][f], "var-init");
                      if (typeof l != "undefined" && l != "") {
                        if (h3) {
                          h3 += cc11001100_hook("h3", "|" + f + '=' + l, "assign");
                        } else {
                          h3 = cc11001100_hook("h3", f + '=' + l, "assign");
                        }
                      }
                    }
                  }
                }
                c.push((u.data.category[d] ? u.data.category[d] : "") + ";" + u.data.id[d] + ";" + (u.data.quantity[d] ? u.data.quantity[d] : "") + ";" + (u.data.price[d] ? ((u.data.quantity[d] ? parseInt(u.data.quantity[d]) : 1) * parseFloat(u.data.price[d])).toFixed(2) : "") + ";" + h2 + ";" + h3);
              }
              if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
                c.push(u.data.sc_addProd);
              }
              u.o.products = cc11001100_hook("u.o.products", c.join(","), "assign");
            } else {
              u.o.products = cc11001100_hook("u.o.products", "", "assign");
            }
            var evt = cc11001100_hook("evt", /^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/, "var-init");
            for (c in utag.loader.GV(b)) {
              if (b[c] !== "") {
                f = cc11001100_hook("f", ("" + b[c]).split(","), "assign");
                for (g = cc11001100_hook("g", 0, "assign"); g < f.length; g++) {
                  h = cc11001100_hook("h", f[g].split(":"), "assign");
                  d = cc11001100_hook("d", [], "assign");
                  if (u.data.detectserial === "no") {
                    if (typeof u.map[c + ":" + h.join(":")] != "undefined") {
                      d = cc11001100_hook("d", u.map[c + ":" + h.join(":")].split(","), "assign");
                    } else if (typeof u.map[c] != "undefined") {
                      d = cc11001100_hook("d", u.map[c].split(","), "assign");
                    }
                  } else {
                    if (h.length > 1) {
                      var subTrigger = cc11001100_hook("subTrigger", h[0], "var-init");
                      for (var i = cc11001100_hook("i", 1, "var-init"); i < h.length - 1; i++) {
                        subTrigger += cc11001100_hook("subTrigger", ":" + h[i], "assign");
                      }
                      h[0] = cc11001100_hook("h[0]", subTrigger, "assign");
                      h[1] = cc11001100_hook("h[1]", h[h.length - 1], "assign");
                    }
                    if (typeof u.map[c + ":" + h[0]] != "undefined") {
                      d = cc11001100_hook("d", u.map[c + ":" + h[0]].split(","), "assign");
                    } else if (typeof u.map[c] != "undefined") {
                      d = cc11001100_hook("d", u.map[c].split(","), "assign");
                    }
                  }
                  for (e = cc11001100_hook("e", 0, "assign"); e < d.length; e++) {
                    if (d[e] != "events" && evt.test(d[e]) && d[e].indexOf("SERIAL_") !== 0) {
                      if (u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "") {
                        u.addEvent(d[e] + ":" + u.data.serial[d[e]]);
                      } else {
                        if (u.data.detectserial === "yes") {
                          u.addEvent(d[e] + (h.length > 1 ? ":" + h[1] : ""));
                        } else {
                          u.addEvent(d[e]);
                        }
                      }
                    }
                  }
                }
              }
            }
            for (var m in u.data.a) {
              u.o.contextData["a." + m] = cc11001100_hook("u.o.contextData[\"a.\" + m]", u.data.a[m], "assign");
              u.pushlt(u.ltv, "contextData.a." + m);
            }
            for (c in utag.loader.GV(b)) {
              if (typeof u.map[c] != "undefined") {
                d = cc11001100_hook("d", u.map[c].split(","), "assign");
                for (e = cc11001100_hook("e", 0, "assign"); e < d.length; e++) {
                  if (d[e].indexOf("VALUE_") == 0) {
                    if (u.data.serial[d[e]] !== undefined && u.data.serial[d[e]] !== "") {
                      u.addEvent(d[e].substring(6), b[c] + ":" + u.data.serial[d[e]]);
                    } else {
                      u.addEvent(d[e].substring(6), b[c]);
                    }
                  } else if (d[e] == "doneAction") {
                    b.doneAction = cc11001100_hook("b.doneAction", b[c], "assign");
                    if (b.doneAction != "navigate") {
                      b.doneAction = cc11001100_hook("b.doneAction", eval(b[c]), "assign");
                    }
                  } else if (d[e].indexOf("c.") == 0 || d[e].indexOf("contextData.") == 0) {
                    d[e] = cc11001100_hook("d[e]", d[e].replace("contextData.", "c."), "assign");
                    if (!(d[e][2] === "a" && d[e][3] === ".")) {
                      u.o.contextData[d[e].substring(2)] = cc11001100_hook("u.o.contextData[d[e].substring(2)]", b[c], "assign");
                      u.pushlt(u.ltv, "contextData." + d[e].substring(2));
                    }
                  } else if (d[e] === "clearVars_in_RPTCallback") {
                    u.data[d[e]] = cc11001100_hook("u.data[d[e]]", b[c], "assign");
                  } else {
                    if (c == "sc_events" || c == "sc_prodevents" || c == "sc_prodevars") {
                      utag.DB("Error:1152: Mapping reserved object name " + c);
                    } else {
                      u.o[d[e]] = cc11001100_hook("u.o[d[e]]", b[c], "assign");
                    }
                    if (d[e] == "s_account") {
                      u.o.account = cc11001100_hook("u.o.account", b[c], "assign");
                    } else if (d[e] == "linkTrackVars") {
                      u.ltflag = cc11001100_hook("u.ltflag", false, "assign");
                    } else {
                      if (u.combineLinkVar) {
                        u.ltflag = cc11001100_hook("u.ltflag", true, "assign");
                      }
                      if (d[e] !== "combineLinkVar") {
                        u.pushlt(u.ltv, d[e]);
                      }
                    }
                  }
                }
              }
            }
            d = cc11001100_hook("d", [], "assign");
            for (c in utag.loader.GV(b.sc_events)) {
              if (b.sc_events[c]) {
                d.push(c);
              }
            }
            if (d.length > 0) {
              u.o.events = cc11001100_hook("u.o.events", d.join(","), "assign");
              u.pushlt(u.lte, u.o.events);
            } else {
              u.o.events = cc11001100_hook("u.o.events", "", "assign");
            }
            if (b._ccurrency) {
              u.o.currencyCode = cc11001100_hook("u.o.currencyCode", b._ccurrency, "assign");
            }
            if (b._corder) {
              u.pushlt(u.lte, "purchase");
              u.pushlt(u.ltv, "purchaseID");
              u.o.purchaseID = cc11001100_hook("u.o.purchaseID", u.o.purchaseID ? u.o.purchaseID : b._corder, "assign");
              u.o.events = cc11001100_hook("u.o.events", u.o.events ? u.o.events : "purchase", "assign");
              if (u.o.events.indexOf("purchase") < 0) {
                u.o.events += cc11001100_hook("u.o.events", ",purchase", "assign");
              }
            }
            if (instance) {
              u.o.visitor = cc11001100_hook("u.o.visitor", instance, "assign");
            }
            if (!u.o.visitor) {
              if (typeof visitor !== "undefined") {
                u.o.visitor = cc11001100_hook("u.o.visitor", window.visitor, "assign");
              } else if (typeof Visitor !== "undefined" && typeof Visitor.getInstance !== "undefined") {
                u.o.visitor = cc11001100_hook("u.o.visitor", Visitor.getInstance(u.data.adobe_org_id), "assign");
              }
            }
            u.o.cookieDomain = cc11001100_hook("u.o.cookieDomain", u.o.visitor ? u.o.visitor.cookieDomain || u.data.cookieDomain : u.data.cookieDomain, "assign");
            u.o.cookieDomainPeriods = cc11001100_hook("u.o.cookieDomainPeriods", u.o.cookieDomain.split('.').length, "assign");
            if (u.a === "view") {
              var img = cc11001100_hook("img", u.o.t(), "var-init");
              if (typeof img !== "undefined" && img !== "") {
                u.img = cc11001100_hook("u.img", new Image(), "assign");
                u.img.src = cc11001100_hook("u.img.src", img.substring(img.indexOf("src=") + 5, img.indexOf("width=") - 2), "assign");
              }
            } else if (u.a === "link") {
              if (typeof u.ltv !== "undefined" && u.ltflag) {
                if (u.o.events) {
                  u.ltv.push("events");
                }
                if (u.o.products) {
                  u.ltv.push("products");
                }
                b.linkTrackVars = cc11001100_hook("b.linkTrackVars", u.ltv.join(","), "assign");
              }
              if (typeof u.lte !== "undefined" && u.ltflag) {
                b.linkTrackEvents = cc11001100_hook("b.linkTrackEvents", u.lte.join(","), "assign");
              }
              u.o.linkTrackVars = cc11001100_hook("u.o.linkTrackVars", u.data.linkTrackVars || b.linkTrackVars || "None", "assign");
              u.o.linkTrackEvents = cc11001100_hook("u.o.linkTrackEvents", u.data.linkTrackEvents || b.linkTrackEvents || "None", "assign");
              if (!u.data.linkType) {
                if (b.link_type === "download link") {
                  u.data.linkType = cc11001100_hook("u.data.linkType", "d", "assign");
                } else if (b.link_type === "exit link") {
                  u.data.linkType = cc11001100_hook("u.data.linkType", "e", "assign");
                }
              }
              u.o.linkType = cc11001100_hook("u.o.linkType", u.data.linkType || u.o.linkType || "o", "assign");
              u.data.linkName = cc11001100_hook("u.data.linkName", u.data.linkName || b.link_name || b.link_text || "no link_name", "assign");
              u.o.tl(b.link_obj ? b.link_obj : true, u.o.linkType, u.data.linkName, null, b.doneAction ? b.doneAction : null);
            }
            if ("yes" === "yes") {
              if (u.data.clearVars_in_RPTCallback === true || u.data.clearVars_in_RPTCallback === "true") {
                u.o.registerPostTrackCallback(u.o.clearVars);
              } else {
                u.o.clearVars();
              }
            }
          }
          utag.DB("send:1152:COMPLETE");
        });
      }
    }, "assign");
    function isTrue(input) {
      cc11001100_hook("input", input, "function-parameter");
      if (typeof input === "boolean") {
        return input;
      } else if (typeof input === "string" && (input.toLowerCase() === "yes" || input.toLowerCase() === "true")) {
        return true;
      } else {
        return false;
      }
    }
    try {
      utag.o[loader].loader.LOAD(id);
    } catch (e) {
      utag.loader.LOAD(id);
    }
  })("1152", "cx.web");
} catch (e) {
  utag.DB(e);
}