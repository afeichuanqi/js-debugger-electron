!function () {
  function a(a, c, h) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    var v = cc11001100_hook("v", h ? a + c + "@" + h : a + c + "", "var-init");
    return v;
  }
  function c(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    try {
      localStorage.setItem(a, c);
    } catch (e) {
      window.setCodeLSFailed = cc11001100_hook("window.setCodeLSFailed", !0, "assign");
    }
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", this, "var-init"),
      h = cc11001100_hook("h", a, "var-init");
    c.conf = cc11001100_hook("c.conf", {}, "assign");
    for (var p in h) c.conf[p] = cc11001100_hook("c.conf[p]", h[p], "assign");
    switch (w && (c.speed = cc11001100_hook("c.speed", {
      tag: cc11001100_hook("tag", "index", "object-key-init"),
      start: cc11001100_hook("start", new Date().getTime(), "object-key-init")
    }, "assign")), c.exeCodeQueue = cc11001100_hook("c.exeCodeQueue", [], "assign"), c.exeCoderQueue = cc11001100_hook("c.exeCoderQueue", {}, "assign"), c.pubVersion = cc11001100_hook("c.pubVersion", {}, "assign"), c.conf.type) {
      case "index":
        c.init = cc11001100_hook("c.init", c.indexInit, "assign");
        break;
      case "search":
        c.init = cc11001100_hook("c.init", c.searchInit, "assign");
        break;
      case "search-newi":
        c.init = cc11001100_hook("c.init", c.searchNewiInit, "assign");
    }
    return c.init(), c;
  }
  var v = cc11001100_hook("v", window.B || {}, "var-init");
  v.indexStyles = cc11001100_hook("v.indexStyles", [].slice.call(v.$$(".spa-index-style")), "assign"), v.searchStyles = cc11001100_hook("v.searchStyles", [], "assign"), window.addEventListener("load", function () {
    v.windowLoaded = cc11001100_hook("v.windowLoaded", !0, "assign");
  }, !1);
  var C = cc11001100_hook("C", !1, "var-init"),
    g = cc11001100_hook("g", !1, "var-init"),
    b = cc11001100_hook("b", v.$("#commonBase"), "var-init"),
    w = cc11001100_hook("w", !!b.getAttribute("data-pagetimer"), "var-init");
  h.prototype = cc11001100_hook("h.prototype", {
    indexInit: function () {
      var a,
        c,
        h = cc11001100_hook("h", this, "var-init");
      return h.prefix = cc11001100_hook("h.prefix", b.getAttribute("data-lsprefix"), "assign"), a = cc11001100_hook("a", v.$("body").getAttribute("data-version").split(","), "assign"), a.forEach(function (a) {
        c = cc11001100_hook("c", a.split("@"), "assign"), h.pubVersion[c[0]] = cc11001100_hook("h.pubVersion[c[0]]", c[1], "assign"), h.exeCodeQueue.push(c[0]);
      }), h.compareVersion(), h;
    },
    searchInit: function () {
      var a = cc11001100_hook("a", this, "var-init");
      return a.prefix = cc11001100_hook("a.prefix", "search_ls_", "assign"), a.chgVersion = cc11001100_hook("a.chgVersion", 1, "assign"), v.chgParam(a.conf.query), a;
    },
    searchNewiInit: function () {
      var a = cc11001100_hook("a", this, "var-init");
      return a.prefix = cc11001100_hook("a.prefix", "search_ls_", "assign"), a.chgVersion = cc11001100_hook("a.chgVersion", 1, "assign"), v.chgParam(a.conf.query), a;
    },
    compareVersion: function () {
      var c,
        h = cc11001100_hook("h", this, "var-init"),
        v = cc11001100_hook("v", "", "var-init");
      h.chgVersion = cc11001100_hook("h.chgVersion", 0, "assign"), h.requestStr = cc11001100_hook("h.requestStr", "", "assign");
      for (var p in h.pubVersion) c = cc11001100_hook("c", h.pubVersion[p], "assign"), v = cc11001100_hook("v", a(h.prefix, p, c), "assign"), c = cc11001100_hook("c", 0, "assign"), h.chgVersion = cc11001100_hook("h.chgVersion", 1, "assign"), h.requestStr += cc11001100_hook("h.requestStr", "," + p + "@" + c, "assign");
      return h.requestStr = cc11001100_hook("h.requestStr", h.requestStr.substr(1), "assign"), h;
    },
    executeCode: function (c) {
      var h,
        C,
        b = cc11001100_hook("b", this, "var-init");
      switch (b.conf.type) {
        case "index":
          b.lsCode = cc11001100_hook("b.lsCode", c ? c : {}, "assign");
          break;
        case "search":
          if (b.searchJSDone) {
            b.exeCodeQueue = cc11001100_hook("b.exeCodeQueue", [], "assign");
            break;
          }
          if (b.exeCodeQueue = cc11001100_hook("b.exeCodeQueue", [], "assign"), b.lsCode = cc11001100_hook("b.lsCode", c.lscode ? c.lscode : "", "assign"), b.lsCode) for (var p in b.lsCode) b.exeCodeQueue.push(p);else for (var p in localStorage) 0 == p.indexOf(b.prefix) && b.exeCodeQueue.push(p);
          break;
        case "search-newi":
          if (b.searchJSDone) {
            b.exeCoderQueue = cc11001100_hook("b.exeCoderQueue", {}, "assign");
            break;
          }
          b.exeCoderQueue = cc11001100_hook("b.exeCoderQueue", {
            top: cc11001100_hook("top", [], "object-key-init"),
            mid: cc11001100_hook("mid", [], "object-key-init"),
            btm: cc11001100_hook("btm", [], "object-key-init"),
            deal: cc11001100_hook("deal", [], "object-key-init")
          }, "assign");
          var y = cc11001100_hook("y", document.getElementsByClassName("code-to-write"), "var-init");
          for (i = cc11001100_hook("i", 0, "assign"); i < y.length; i++) y[i].parentNode.removeChild(y[i]);
          for (var C in c.html) 0 === C.indexOf("cooder_") && (C.indexOf("_frame") > -1 ? b.exeCoderQueue.btm.push(C) : C.indexOf("_deal") > -1 ? b.exeCoderQueue.deal.push(C) : C.indexOf("_top") > -1 ? b.exeCoderQueue.top.push(C) : C.indexOf("_btm") > -1 ? b.exeCoderQueue.btm.push(C) : b.exeCoderQueue.mid.push(C));
      }
      if ("search-newi" === b.conf.type) {
        var k = cc11001100_hook("k", document.createElement("div"), "var-init");
        b.exeCoderQueue.top.forEach(function (a) {
          k.innerHTML += cc11001100_hook("k.innerHTML", c.html[a], "assign");
        }), b.exeCoderQueue.mid.forEach(function (a) {
          k.innerHTML += cc11001100_hook("k.innerHTML", c.html[a], "assign");
        }), b.exeCoderQueue.btm.forEach(function (a) {
          k.innerHTML += cc11001100_hook("k.innerHTML", c.html[a], "assign");
        });
        for (var i = cc11001100_hook("i", 0, "var-init"); i < k.children.length; i++) {
          var L,
            S = cc11001100_hook("S", k.children[i], "var-init");
          switch (S.tagName.toLowerCase()) {
            case "script":
              L = cc11001100_hook("L", document.createElement("script"), "assign"), L.type = cc11001100_hook("L.type", "text/javascript", "assign");
              break;
            case "style":
              L = cc11001100_hook("L", document.createElement("style"), "assign");
              break;
            default:
              continue;
          }
          L.innerHTML = cc11001100_hook("L.innerHTML", S.innerHTML, "assign");
          var T = cc11001100_hook("T", S.attributes, "var-init");
          for (var E in T) T[E].name && T[E].value && "undefined" !== T[E].value && L.setAttribute(T[E].name, T[E].value);
          document.head.insertBefore(L, document.head.lastChild);
        }
        var _ = cc11001100_hook("_", [], "var-init");
        b.exeCoderQueue.deal.forEach(function (a) {
          _.push(c.html[a]);
        }), window.addEventListener("deal-btm", function () {
          _.forEach(function (a) {
            $("body").append(a);
          }), window.removeEventListener("deal-btm", arguments.callee);
        }, !1);
      } else b.exeCodeQueue.forEach(function (c) {
        if (b.lsCode && b.lsCode[c] && b.lsCode[c].data ? (C = cc11001100_hook("C", c, "assign"), h = cc11001100_hook("h", b.lsCode[c].data, "assign")) : v.lsSupport && (C = cc11001100_hook("C", a(b.prefix, c, b.pubVersion[c]), "assign"), h = cc11001100_hook("h", localStorage.getItem(C), "assign")), !h) return b.expireCookie({
          key: cc11001100_hook("key", "lsv", "object-key-init"),
          val: cc11001100_hook("val", "", "object-key-init")
        }), location.href = cc11001100_hook("location.href", b.redirectURL(), "assign"), !1;
        if (!g || b.lsCode[c] && !b.lsCode[c].widget) {
          var w;
          -1 != C.indexOf("js") && (w = cc11001100_hook("w", document.createElement("script"), "assign"), w.id = cc11001100_hook("w.id", b.prefix + c, "assign"), w.type = cc11001100_hook("w.type", "text/javascript", "assign"), "search_ls_js_btm" === w.id ? window.addEventListener("deal-btm", function () {
            document.body.appendChild(w), window.removeEventListener("deal-btm", arguments.callee);
          }, !1) : document.body.appendChild(w)), -1 != C.indexOf("css") && (w = cc11001100_hook("w", document.createElement("style"), "assign"), w.id = cc11001100_hook("w.id", b.prefix + c, "assign"), w.id.match(/^index_(?:plus_)?ls/) ? v.indexStyles.push(w) : v.searchStyles.push(w), w.type = cc11001100_hook("w.type", "text/css", "assign"), "search_ls_css_btm" === w.id ? window.addEventListener("deal-btm", function () {
            document.body.appendChild(w), window.removeEventListener("deal-btm", arguments.callee);
          }, !1) : document.head.appendChild(w)), w.className = cc11001100_hook("w.className", C, "assign"), w.innerHTML = cc11001100_hook("w.innerHTML", h, "assign");
        }
      });
      return "index" === b.conf.type && v.fire("feed", "init", b.chgVersion), w && "index" == b.conf.type && (PageTimer.combo_code = cc11001100_hook("PageTimer.combo_code", new Date().getTime() - PageTimer.start, "assign")), b.setExecuteTag(), b;
    },
    setExecuteTag: function () {
      var a = cc11001100_hook("a", this, "var-init");
      switch (a.conf.type) {
        case "index":
          g = cc11001100_hook("g", !0, "assign");
          break;
        case "search":
          C = cc11001100_hook("C", !0, "assign");
          break;
        case "search-newi":
          C = cc11001100_hook("C", !0, "assign");
      }
      return a;
    },
    jsonpRequest: function (a) {
      var c,
        h = cc11001100_hook("h", this, "var-init"),
        C = cc11001100_hook("C", b.getAttribute("data-sids") || "", "var-init");
      if (C && (C = cc11001100_hook("C", "&sid=" + C, "assign")), h.chgVersion) {
        switch (c = cc11001100_hook("c", document.createElement("script"), "assign"), c.type = cc11001100_hook("c.type", "text/javascript", "assign"), h.conf.type) {
          case "index":
            c.src = cc11001100_hook("c.src", "?action=static&ms=1&" + ("index_ls_" == h.prefix ? "cl=1&" : "") + "version=" + h.requestStr + "&callback=B.getCode&r=" + Math.floor(1e3 * Math.random()) + C, "assign");
            break;
          case "search":
            h.urlParamsUpdate();
            var g = cc11001100_hook("g", h.conf.query, "var-init"),
              w = cc11001100_hook("w", "/s?word=" + encodeURIComponent(g) + "&mod=0&callback=B.getCode&at=3&" + h.urlParam, "var-init");
            h.conf.sa && (w += cc11001100_hook("w", "&sa=" + h.conf.sa, "assign"));
            var y = cc11001100_hook("y", b.getAttribute("data-logid"), "var-init");
            y && (w += cc11001100_hook("w", "&isid=" + y, "assign")), h.jumpURL = cc11001100_hook("h.jumpURL", c.src = cc11001100_hook("c.src", w, "assign"), "assign");
            break;
          case "search-newi":
            h.urlParamsUpdate();
            var g = cc11001100_hook("g", h.conf.query, "var-init"),
              w = cc11001100_hook("w", "/s?word=" + encodeURIComponent(g) + "&mod=0&callback=B.getCode&at=3&" + h.urlParam, "var-init");
            h.conf.sa && (w += cc11001100_hook("w", "&sa=" + h.conf.sa, "assign")), 0 === C.indexOf("&sid=2462") && (w += cc11001100_hook("w", C, "assign"));
            var y = cc11001100_hook("y", b.getAttribute("data-logid"), "var-init");
            y && (w += cc11001100_hook("w", "&isid=" + y, "assign")), h.jumpURL = cc11001100_hook("h.jumpURL", c.src = cc11001100_hook("c.src", w, "assign"), "assign");
        }
        if ("search" === h.conf.type && "undefined" != typeof v.prefetch) {
          var g = cc11001100_hook("g", h.conf.query, "var-init"),
            k = cc11001100_hook("k", v.prefetch.search({
              word: cc11001100_hook("word", g, "object-key-init"),
              params: cc11001100_hook("params", v.prefetch.buildSearchParams(g, {}), "object-key-init"),
              type: cc11001100_hook("type", "ajax", "object-key-init")
            }, function (a) {
              v.getCode(a, h.speed, k);
            }), "var-init");
          h.speed && (h.speed.cacheStatus = cc11001100_hook("h.speed.cacheStatus", k.cacheStatus, "assign")), h.cacheObj = cc11001100_hook("h.cacheObj", k, "assign");
        } else if ("search-newi" === h.conf.type && "undefined" != typeof v.prefetch) {
          var g = cc11001100_hook("g", h.conf.query, "var-init"),
            k = cc11001100_hook("k", v.prefetch.search({
              word: cc11001100_hook("word", g, "object-key-init"),
              params: cc11001100_hook("params", v.prefetch.buildSearchParams(g, {}), "object-key-init"),
              type: cc11001100_hook("type", "ajax", "object-key-init")
            }, function (a) {
              v.getCode(a, h.speed, k);
            }), "var-init");
          h.speed && (h.speed.cacheStatus = cc11001100_hook("h.speed.cacheStatus", k.cacheStatus, "assign")), h.cacheObj = cc11001100_hook("h.cacheObj", k, "assign");
        } else h.scLoaded = cc11001100_hook("h.scLoaded", !1, "assign"), c.onload = cc11001100_hook("c.onload", function () {
          clearTimeout(c.scId), h.scLoaded = cc11001100_hook("h.scLoaded", !0, "assign");
        }, "assign"), c.onerror = cc11001100_hook("c.onerror", function () {
          location.href = cc11001100_hook("location.href", h.redirectURL(), "assign");
        }, "assign"), c.src && document.body.appendChild(c), c.scId = cc11001100_hook("c.scId", setTimeout(function () {
          h.scLoaded || (location.href = cc11001100_hook("location.href", h.redirectURL(), "assign"));
        }, 3e4), "assign");
      } else h.executeCode(), "index" === h.conf.type && h.clearLocal();
      return h;
    },
    saveCode: function () {
      var h,
        C,
        g = cc11001100_hook("g", this, "var-init");
      if (v.lsSupport) switch (g.conf.type) {
        case "index":
          break;
        case "search":
          for (var p in g.lsCode) h = cc11001100_hook("h", a(g.prefix, p), "assign"), !!g.lsCode[p].data && c(h, g.lsCode[p].data), C = cc11001100_hook("C", g.lsCode[p] ? g.lsCode[p].version : "", "assign");
          !!C && g.setCookie({
            key: cc11001100_hook("key", "lsv", "object-key-init"),
            val: cc11001100_hook("val", C, "object-key-init")
          });
      }
      return g;
    },
    setCookie: function (a) {
      var c = cc11001100_hook("c", this, "var-init"),
        h = cc11001100_hook("h", a.key, "var-init"),
        v = cc11001100_hook("v", a.val, "var-init"),
        C = cc11001100_hook("C", new Date(), "var-init");
      return C.setTime(C.getTime() + 6048e5), document.cookie = cc11001100_hook("document.cookie", h + "=" + v + ";domain=" + document.domain + ";path=/;expires=" + C.toGMTString() + ";", "assign"), document.cookie = cc11001100_hook("document.cookie", h + "=" + v + ";domain=.m.baidu.com;path=/;expires=" + C.toGMTString() + ";", "assign"), c;
    },
    expireCookie: function (a) {
      var c = cc11001100_hook("c", this, "var-init"),
        h = cc11001100_hook("h", a.key, "var-init"),
        v = cc11001100_hook("v", a.val, "var-init"),
        C = cc11001100_hook("C", new Date(), "var-init");
      return C.setTime(C.getTime() - 1), document.cookie = cc11001100_hook("document.cookie", h + "=" + v + ";domain=" + document.domain + ";path=/;expires=" + C.toGMTString() + ";", "assign"), document.cookie = cc11001100_hook("document.cookie", h + "=" + v + ";domain=.m.baidu.com;path=/;expires=" + new Date().toGMTString() + ";", "assign"), c;
    },
    redirectURL: function () {
      var a = cc11001100_hook("a", this, "var-init");
      return a.jumpURL.replace("&mod=0", "").replace("&callback=B.getCode", "").replace("&at=3", "");
    },
    clearLocal: function () {
      var a,
        c = cc11001100_hook("c", this, "var-init");
      if (v.lsSupport) for (var p in localStorage) 0 == p.indexOf(c.prefix) && (a = cc11001100_hook("a", p.replace(c.prefix, "").split("@"), "assign"), !!c.pubVersion[a[0]] && c.pubVersion[a[0]] != a[1] && localStorage.removeItem(p));
      return c;
    },
    urlParamsUpdate: function () {
      var a = cc11001100_hook("a", this, "var-init");
      a.urlParam = cc11001100_hook("a.urlParam", "", "assign"), a.urlParam = cc11001100_hook("a.urlParam", b.getAttribute("data-prepath").replace(/#/g, "&"), "assign"), a.urlParam += cc11001100_hook("a.urlParam", "&rn=10&wpo=base", "assign"), "from pu ss st sa rq dit ms".split(" ").forEach(function (c) {
        var h = cc11001100_hook("h", b.getAttribute("data-" + c), "var-init");
        h && "0" !== h && (a.urlParam += cc11001100_hook("a.urlParam", "&" + c + "=" + h, "assign"));
      });
      var c = cc11001100_hook("c", new Date().getTime().toString(), "var-init");
      return a.urlParam += cc11001100_hook("a.urlParam", "&ts=" + c.substr(-7), "assign"), a;
    }
  }, "assign"), v.localStore = cc11001100_hook("v.localStore", function (a) {
    var p = cc11001100_hook("p", a || {}, "var-init");
    p.type = cc11001100_hook("p.type", p.type ? p.type : "index", "assign");
    var c = cc11001100_hook("c", new h(p), "var-init");
    return v.getCode = cc11001100_hook("v.getCode", function (a, h, g) {
      switch (w && "index" == c.conf.type && (PageTimer.combo_net = cc11001100_hook("PageTimer.combo_net", new Date().getTime() - PageTimer.start, "assign")), c.conf.type) {
        case "index":
          !!a && c.executeCode(a).saveCode().clearLocal();
          break;
        case "search":
          try {
            if (g = cc11001100_hook("g", g || c.cacheObj, "assign")) {
              var b = cc11001100_hook("b", (g.word, g.item), "var-init");
              1 == b.params.mod && v.prefetch.confirm(g), v.prefetch.isid = cc11001100_hook("v.prefetch.isid", g.data.logid, "assign");
            }
            h = cc11001100_hook("h", h || c.speed, "assign"), h && (h.executeCode = cc11001100_hook("h.executeCode", new Date().getTime(), "assign")), !!a && !C && c.executeCode(a).saveCode(), h && (h.afterExecuteCode = cc11001100_hook("h.afterExecuteCode", new Date().getTime(), "assign")), $("body").trigger("singleRender", [a.html, h, c.jumpURL]), c.speed = cc11001100_hook("c.speed", !1, "assign"), c.jumpURL = cc11001100_hook("c.jumpURL", "", "assign");
          } catch (e) {
            c.expireCookie({
              key: cc11001100_hook("key", "lsv", "object-key-init"),
              val: cc11001100_hook("val", "", "object-key-init")
            }), location.href = cc11001100_hook("location.href", c.redirectURL(), "assign");
          }
          break;
        case "search-newi":
          try {
            if (g = cc11001100_hook("g", g || c.cacheObj, "assign")) {
              var b = cc11001100_hook("b", (g.word, g.item), "var-init");
              1 == b.params.mod && v.prefetch.confirm(g), v.prefetch.isid = cc11001100_hook("v.prefetch.isid", g.data.logid, "assign");
            }
            h = cc11001100_hook("h", h || c.speed, "assign"), h && (h.executeCode = cc11001100_hook("h.executeCode", new Date().getTime(), "assign")), !!a && !C && c.executeCode(a).saveCode(), h && (h.afterExecuteCode = cc11001100_hook("h.afterExecuteCode", new Date().getTime(), "assign")), $("body").trigger("singleRender", [a.html, h, c.jumpURL]), c.speed = cc11001100_hook("c.speed", !1, "assign"), c.jumpURL = cc11001100_hook("c.jumpURL", "", "assign");
          } catch (e) {
            c.expireCookie({
              key: cc11001100_hook("key", "lsv", "object-key-init"),
              val: cc11001100_hook("val", "", "object-key-init")
            }), location.href = cc11001100_hook("location.href", c.redirectURL(), "assign");
          }
      }
    }, "assign"), c.jsonpRequest(), c;
  }, "assign"), window.B = cc11001100_hook("window.B", v, "assign");
}();