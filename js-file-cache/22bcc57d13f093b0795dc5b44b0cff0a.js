function _defineProperty(e, t, n) {
  cc11001100_hook("e", e, "function-parameter");
  cc11001100_hook("t", t, "function-parameter");
  cc11001100_hook("n", n, "function-parameter");
  return t in e ? Object.defineProperty(e, t, {
    value: cc11001100_hook("value", n, "object-key-init"),
    enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
    configurable: cc11001100_hook("configurable", !0, "object-key-init"),
    writable: cc11001100_hook("writable", !0, "object-key-init")
  }) : e[t] = cc11001100_hook("e[t]", n, "assign"), e;
}
!function (e) {
  var t, n, a;
  a = cc11001100_hook("a", {
    API_SERVER: cc11001100_hook("API_SERVER", "//zhannei-dm.csdn.net/", "object-key-init"),
    API_BAIDU_SERVER: cc11001100_hook("API_BAIDU_SERVER", "https://gsp0.baidu.com/yrwHcjSl0MgCo2Kml5_Y_D3/", "object-key-init"),
    API_KEYWORD_GET_URL: cc11001100_hook("API_KEYWORD_GET_URL", "recommend/baidu_keyword", "object-key-init"),
    API_BAIDU_CACHE_URL: cc11001100_hook("API_BAIDU_CACHE_URL", "recommend/baidu_zhannei_search", "object-key-init"),
    API_STATISTIC_SERVER: cc11001100_hook("API_STATISTIC_SERVER", "//statistic.csdn.net/", "object-key-init"),
    SUB_DOMAIN: cc11001100_hook("SUB_DOMAIN", ["blog.csdn.net", "download.csdn.net", "bbs.csdn.net", "edu.csdn.net", "ask.csdn.net", "www.csdn.net"], "object-key-init"),
    keyword: cc11001100_hook("keyword", "", "object-key-init"),
    autorun: cc11001100_hook("autorun", !1, "object-key-init"),
    install: cc11001100_hook("install", !0, "object-key-init"),
    baiduSearchAPPID: cc11001100_hook("baiduSearchAPPID", "10742016945123576423", "object-key-init"),
    debug: {
      active: cc11001100_hook("active", !1, "object-key-init"),
      currentUrl: cc11001100_hook("currentUrl", "http://blog.csdn.net/dqcfkyqdxym3f8rb0/article/details/66666666", "object-key-init"),
      API_SERVER: cc11001100_hook("API_SERVER", "http://devpassport.csdn.net/", "object-key-init")
    }
  }, "assign");
  for (var c in a) "API_SERVER" != c && "API_STATISTIC_SERVER" != c && "API_BAIDU_SERVER" != c && c.indexOf("API") > -1 && (a.debug.active ? a[c] = cc11001100_hook("a[c]", a.debug.API_SERVER + a[c], "assign") : a[c] = cc11001100_hook("a[c]", a.API_SERVER + a[c], "assign"));
  "http:" == window.location.protocol && (a.API_BAIDU_SERVER = cc11001100_hook("a.API_BAIDU_SERVER", "http://zhannei.baidu.com/", "assign")), n = cc11001100_hook("n", {
    getRequest: function (e, t) {
      var n,
        a,
        c,
        r = cc11001100_hook("r", {}, "var-init");
      switch (t = cc11001100_hook("t", t || "search", "assign")) {
        case "hash":
          n = cc11001100_hook("n", e.split("#")[1] || "", "assign");
          break;
        case "search":
          n = cc11001100_hook("n", e.split("?")[1] || "", "assign"), n = cc11001100_hook("n", n.split("#")[0], "assign");
      }
      for (c = cc11001100_hook("c", n.split("&"), "assign"), a = cc11001100_hook("a", 0, "assign"); a < c.length; a++) r[c[a].split("=")[0]] = cc11001100_hook("r[c[a].split(\"=\")[0]]", decodeURI(c[a].split("=")[1]), "assign");
      return r;
    },
    parseCFG: function () {
      if (document.getElementsByTagName("meta")["csdn-baidu-search"]) {
        var e = cc11001100_hook("e", {}, "var-init"),
          e = cc11001100_hook("e", JSON.parse(document.getElementsByTagName("meta")["csdn-baidu-search"].content), "var-init");
        a.keyword = cc11001100_hook("a.keyword", e.keyword || a.keyword, "assign"), a.autorun = cc11001100_hook("a.autorun", "true" == e.autorun, "assign"), a.install = cc11001100_hook("a.install", "false" != e.install, "assign"), void 0;
      }
    },
    autorun: function () {
      void 0, "" != a.keyword ? csdn.baiduSearch(a.keyword, function (e) {
        csdn.baiduCacheBuild(a.keyword, e);
      }) : csdn.baiduKeywordGet(function (e) {
        csdn.baiduSearch(e, function (t) {
          csdn.baiduCacheBuild(e, t);
        });
      });
    },
    trackByGraylog: function (t, n) {
      e.get(a.API_STATISTIC_SERVER + t, n);
    },
    filterData: function (e) {
      var t = cc11001100_hook("t", [], "var-init");
      for (var n in e) {
        var a = cc11001100_hook("a", e[n], "var-init");
        if (!/^((https|http)?:\/\/)(.*)download.csdn.net[^\s]+/.test(a.linkUrl) || /^((https|http)?:\/\/)download.csdn.net\/download\/[^\s]+/.test(a.linkUrl)) {
          if (!(a.linkUrl.indexOf("csdn.net") < 0)) {
            var c = cc11001100_hook("c", a.title, "var-init");
            c = cc11001100_hook("c", c.replace("-<em>CSDN</em>下载", ""), "assign"), c = cc11001100_hook("c", c.replace("- <em>CSDN</em>下载", ""), "assign"), c = cc11001100_hook("c", c.replace(" - 下载频道 - CSDN.NET", ""), "assign"), c = cc11001100_hook("c", c.replace(/[-_]CSDN(下载|博客)/gm, ""), "assign"), c !== a.title && void 0, a.title = cc11001100_hook("a.title", c, "assign"), t.push(a);
          }
        } else void 0;
      }
      return t;
    },
    checkDomain: function (e, t, n) {
      if (e.indexOf("/") > -1) n.push(e.split("/")[1]);else {
        var a = cc11001100_hook("a", e.split(".csdn.net"), "var-init");
        a.length > 1 && (e = cc11001100_hook("e", a[0], "assign")), csdn.cse.setSearchRange(2, [e + ".csdn.net"]), t.push(e + ".csdn.net");
      }
      return {
        two: cc11001100_hook("two", t, "object-key-init"),
        thir: cc11001100_hook("thir", n, "object-key-init")
      };
    },
    unique: function (e) {
      String.prototype.endsWith || (String.prototype.endsWith = cc11001100_hook("String.prototype.endsWith", function (e, t) {
        return (void 0 === t || t > this.length) && (t = cc11001100_hook("t", this.length, "assign")), this.substring(t - e.length, t) === e;
      }, "assign"));
      var t = cc11001100_hook("t", window.location.pathname.split("/").pop(), "var-init"),
        n = cc11001100_hook("n", _defineProperty({}, t, 1), "var-init");
      return e.filter(function (e) {
        var t = cc11001100_hook("t", e.linkUrl, "var-init");
        ~t.indexOf("?") ? t = cc11001100_hook("t", t.split("?")[0], "assign") : ~t.indexOf("#") && (t = cc11001100_hook("t", t.split("#")[0], "assign")), t = cc11001100_hook("t", t.endsWith("/") ? t.slice(0, t.length - 1) : t, "assign");
        var a = cc11001100_hook("a", t.split("/").pop(), "var-init");
        return !n[a] && (n[a] = cc11001100_hook("n[a]", 1, "assign"));
      });
    }
  }, "assign"), t = cc11001100_hook("t", {
    baiduSearchInstall: function (e) {
      var t = cc11001100_hook("t", document.createElement("script"), "var-init");
      t.type = cc11001100_hook("t.type", "text/javascript", "assign"), t.charset = cc11001100_hook("t.charset", "utf-8", "assign"), t.async = cc11001100_hook("t.async", !0, "assign"), t.src = cc11001100_hook("t.src", a.API_BAIDU_SERVER + "api/customsearch/apiaccept?sid=" + a.baiduSearchAPPID + "&v=2.0&callback=csdn.afterBaiduSearchInit", "assign"), t.onerror = cc11001100_hook("t.onerror", function () {
        n.trackByGraylog("baidu_search_error", {
          step: cc11001100_hook("step", "install", "object-key-init")
        }), void 0, "function" == typeof csdn.baiduSearchInstallError && csdn.baiduSearchInstallError();
      }, "assign");
      var c = cc11001100_hook("c", document.getElementsByTagName("script")[0], "var-init");
      c.parentNode.insertBefore(t, c);
    },
    afterBaiduSearchInit: function () {
      if (csdn.cse = cc11001100_hook("csdn.cse", new BCse.Search(a.baiduSearchAPPID), "assign"), "function" == typeof csdn.afterCasInit) return void csdn.afterCasInit(a.keyword, csdn.cse);
      a.autorun && n.autorun();
    },
    baiduSearch: function (e, t, c, r) {
      if (void 0, c) {
        var i = cc11001100_hook("i", [], "var-init"),
          s = cc11001100_hook("s", [], "var-init");
        if (-1 === Object.prototype.toString.call(c).indexOf("Array")) {
          var o = cc11001100_hook("o", n.checkDomain(c, i, s), "var-init");
          i = cc11001100_hook("i", o.two, "assign"), s = cc11001100_hook("s", o.thir, "assign");
        } else for (var d = cc11001100_hook("d", 0, "var-init"); d < c.length; d++) {
          var o = cc11001100_hook("o", n.checkDomain(c[d], i, s), "var-init");
          i = cc11001100_hook("i", o.two, "assign"), s = cc11001100_hook("s", o.thir, "assign");
        }
        void 0, i.length > 0 && csdn.cse.setSearchRange(2, i), s.length > 0 && csdn.cse.setSearchRange(3, s);
      } else csdn.cse.setSearchRange(2, a.SUB_DOMAIN);
      r || (r = cc11001100_hook("r", 1, "assign")), csdn.cse.getResult(e, function (a) {
        n.trackByGraylog("baidu_search_success"), a = cc11001100_hook("a", n.filterData(a), "assign"), void 0, csdn.baiduCacheBuild(e, a, r);
        var c = cc11001100_hook("c", n.unique(a), "var-init");
        void 0, t(c);
      }, r);
    },
    baiduKeywordGet: function (t) {
      e.ajax({
        url: cc11001100_hook("url", a.API_KEYWORD_GET_URL, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        contentType: cc11001100_hook("contentType", "text/plain;charset=UTF-8", "object-key-init"),
        data: {
          url: cc11001100_hook("url", a.debug.active ? a.debug.currentUrl : window.location.href, "object-key-init"),
          result_size: cc11001100_hook("result_size", 1, "object-key-init")
        },
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        success: function (e) {
          void 0, e.length > 0 && (a.debug.active && (void 0, void 0), t(e[0].keyword));
        }
      });
    },
    baiduCacheBuild: function (t, n, c) {
      var r = cc11001100_hook("r", "?keyword=" + encodeURIComponent(t) + "&page_no=" + c, "var-init");
      "2" == csdn.cse.param.ct && -1 == csdn.cse.param.cc.indexOf("%26") ? r += cc11001100_hook("r", "&domain_type=" + csdn.cse.param.cc.split(".csdn.net")[0], "assign") : "3" == csdn.cse.param.ct && (r += cc11001100_hook("r", "&url_type=" + csdn.cse.param.cc, "assign")), r += cc11001100_hook("r", "&decode=1", "assign"), e.ajax({
        url: cc11001100_hook("url", a.API_BAIDU_CACHE_URL + r, "object-key-init"),
        type: cc11001100_hook("type", "POST", "object-key-init"),
        dataType: cc11001100_hook("dataType", "text", "object-key-init"),
        contentType: cc11001100_hook("contentType", "text/plain;charset=UTF-8", "object-key-init"),
        xhrFields: {
          withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
        },
        data: cc11001100_hook("data", JSON.stringify(n), "object-key-init")
      });
    },
    baiduSearchCFG: cc11001100_hook("baiduSearchCFG", a, "object-key-init")
  }, "assign"), void 0 === window.csdn && (window.csdn = cc11001100_hook("window.csdn", {}, "assign"));
  for (var r in t) window.csdn[r] = cc11001100_hook("window.csdn[r]", t[r], "assign");
  n.parseCFG(), a.install && csdn.baiduSearchInstall();
}(jQuery);