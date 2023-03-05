!function (n, e) {
  for (var t in e) n[t] = cc11001100_hook("n[t]", e[t], "assign");
}(window, function (n) {
  var e = cc11001100_hook("e", {}, "var-init");
  function t(r) {
    cc11001100_hook("r", r, "function-parameter");
    if (e[r]) return e[r].exports;
    var a = cc11001100_hook("a", e[r] = cc11001100_hook("e[r]", {
      i: cc11001100_hook("i", r, "object-key-init"),
      l: cc11001100_hook("l", !1, "object-key-init"),
      exports: {}
    }, "assign"), "var-init");
    return n[r].call(a.exports, a, a.exports, t), a.l = cc11001100_hook("a.l", !0, "assign"), a.exports;
  }
  return t.m = cc11001100_hook("t.m", n, "assign"), t.c = cc11001100_hook("t.c", e, "assign"), t.d = cc11001100_hook("t.d", function (n, e, r) {
    t.o(n, e) || Object.defineProperty(n, e, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: cc11001100_hook("get", r, "object-key-init")
    });
  }, "assign"), t.r = cc11001100_hook("t.r", function (n) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: cc11001100_hook("value", "Module", "object-key-init")
    }), Object.defineProperty(n, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }, "assign"), t.t = cc11001100_hook("t.t", function (n, e) {
    if (1 & e && (n = cc11001100_hook("n", t(n), "assign")), 8 & e) return n;
    if (4 & e && "object" == typeof n && n && n.__esModule) return n;
    var r = cc11001100_hook("r", Object.create(null), "var-init");
    if (t.r(r), Object.defineProperty(r, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      value: cc11001100_hook("value", n, "object-key-init")
    }), 2 & e && "string" != typeof n) for (var a in n) t.d(r, a, function (e) {
      return n[e];
    }.bind(null, a));
    return r;
  }, "assign"), t.n = cc11001100_hook("t.n", function (n) {
    var e = cc11001100_hook("e", n && n.__esModule ? function () {
      return n.default;
    } : function () {
      return n;
    }, "var-init");
    return t.d(e, "a", e), e;
  }, "assign"), t.o = cc11001100_hook("t.o", function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }, "assign"), t.p = cc11001100_hook("t.p", "", "assign"), t(t.s = cc11001100_hook("t.s", 9, "assign"));
}([function (n, e) {
  n.exports = cc11001100_hook("n.exports", {
    ERROR_SCRIPT: cc11001100_hook("ERROR_SCRIPT", "1", "object-key-init"),
    ERROR_STYLE: cc11001100_hook("ERROR_STYLE", "2", "object-key-init"),
    ERROR_IMAGE: cc11001100_hook("ERROR_IMAGE", "3", "object-key-init"),
    ERROR_AUDIO: cc11001100_hook("ERROR_AUDIO", "4", "object-key-init"),
    ERROR_VIDEO: cc11001100_hook("ERROR_VIDEO", "5", "object-key-init"),
    LOAD_ERROR_TYPE: {
      SCRIPT: cc11001100_hook("SCRIPT", "1", "object-key-init"),
      LINK: cc11001100_hook("LINK", "2", "object-key-init"),
      IMG: cc11001100_hook("IMG", "3", "object-key-init"),
      AUDIO: cc11001100_hook("AUDIO", "4", "object-key-init"),
      VIDEO: cc11001100_hook("VIDEO", "5", "object-key-init")
    },
    ELEMENT_TYPE: cc11001100_hook("ELEMENT_TYPE", "1", "object-key-init"),
    RESOURCE_ERROR: cc11001100_hook("RESOURCE_ERROR", "1", "object-key-init"),
    IFRAME_IMGS_HIDDEN: cc11001100_hook("IFRAME_IMGS_HIDDEN", "2", "object-key-init"),
    IFRAME_LOAD: cc11001100_hook("IFRAME_LOAD", "3", "object-key-init"),
    IFRAME_HIDDEN_IN_PARENT: cc11001100_hook("IFRAME_HIDDEN_IN_PARENT", "4", "object-key-init"),
    PARENT_WINDOW: cc11001100_hook("PARENT_WINDOW", "window", "object-key-init"),
    IFRAME_WINDOW: cc11001100_hook("IFRAME_WINDOW", "iframe", "object-key-init"),
    ENVIRONMENT: cc11001100_hook("ENVIRONMENT", "environment", "object-key-init"),
    ALL_IFRAMES: cc11001100_hook("ALL_IFRAMES", "5", "object-key-init"),
    IFRAME_UNLOAD: cc11001100_hook("IFRAME_UNLOAD", "6", "object-key-init"),
    LOG_URL: cc11001100_hook("LOG_URL", "https://eclick.baidu.com/rs.jpg", "object-key-init"),
    PACKET_MOST_LENGTH: cc11001100_hook("PACKET_MOST_LENGTH", 1500, "object-key-init"),
    PAGE_SEARCH_ID: cc11001100_hook("PAGE_SEARCH_ID", "pageSearchId", "object-key-init"),
    FILTER_IFRAMES_REGEXS: cc11001100_hook("FILTER_IFRAMES_REGEXS", [/pos\.baidu\.com.*\?.{20,}/, /.*\?.*&swt=((1$)|(1\.\d$))/], "object-key-init"),
    ENCRYPT_IFRAMES_REGEXS: cc11001100_hook("ENCRYPT_IFRAMES_REGEXS", [/.*\?.*&swt=((1$)|(1\.\d$))/], "object-key-init"),
    FILTER_IMGS_MIN_WIDTH: cc11001100_hook("FILTER_IMGS_MIN_WIDTH", 2, "object-key-init"),
    FILTER_IMGS_MIN_HEIGHT: cc11001100_hook("FILTER_IMGS_MIN_HEIGHT", 2, "object-key-init")
  }, "assign");
}, function (n, e, t) {
  "use strict";

  t.d(e, "a", function () {
    return a;
  });
  var r = cc11001100_hook("r", {
      hasNewIframeLoad: cc11001100_hook("hasNewIframeLoad", !0, "object-key-init"),
      containers: cc11001100_hook("containers", [], "object-key-init")
    }, "var-init"),
    a = cc11001100_hook("a", {
      setMonitorData: function (n, e) {
        r[n] || (r[n] = cc11001100_hook("r[n]", [], "assign")), r[n].push(e);
      },
      getMonitorData: function (n) {
        return r[n];
      },
      getAllMonitorData: function () {
        return r;
      },
      removeMonitorData: function (n, e) {
        var t = cc11001100_hook("t", r[n], "var-init");
        if (t) if (e) for (var a = cc11001100_hook("a", 0, "var-init"), o = cc11001100_hook("o", t.length, "var-init"); a < o; a++) e === t[n] && t.splice(a, 1);else r[n] = cc11001100_hook("r[n]", null, "assign");
      },
      clear: function () {
        r = cc11001100_hook("r", {}, "assign");
      },
      setOneMonitorData: function (n, e) {
        r[n] = cc11001100_hook("r[n]", e, "assign");
      }
    }, "var-init");
}, function (n, e, t) {
  "use strict";

  t.d(e, "e", function () {
    return i;
  }), t.d(e, "b", function () {
    return c;
  }), t.d(e, "a", function () {
    return u;
  }), t.d(e, "f", function () {
    return f;
  }), t.d(e, "c", function () {
    return s;
  }), t.d(e, "d", function () {
    return d;
  });
  var r = cc11001100_hook("r", t(0), "var-init");
  function a(n) {
    cc11001100_hook("n", n, "function-parameter");
    return function (n) {
      if (Array.isArray(n)) return o(n);
    }(n) || function (n) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(n)) return Array.from(n);
    }(n) || function (n, e) {
      if (!n) return;
      if ("string" == typeof n) return o(n, e);
      var t = cc11001100_hook("t", Object.prototype.toString.call(n).slice(8, -1), "var-init");
      "Object" === t && n.constructor && (t = cc11001100_hook("t", n.constructor.name, "assign"));
      if ("Map" === t || "Set" === t) return Array.from(n);
      if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return o(n, e);
    }(n) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function o(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    (null == e || e > n.length) && (e = cc11001100_hook("e", n.length, "assign"));
    for (var t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", new Array(e), "var-init"); t < e; t++) r[t] = cc11001100_hook("r[t]", n[t], "assign");
    return r;
  }
  function i(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n.nodeType + "" === r.ELEMENT_TYPE;
  }
  function c(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n ? n.toString().split("_")[1] : "";
  }
  function u() {
    return !!(window.postMessage && window.addEventListener && URL);
  }
  function f(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return n.test(e);
  }
  function s() {
    var n = cc11001100_hook("n", a(document.getElementsByTagName("meta")).find(function (n) {
      return "template-name" === n.name;
    }), "var-init");
    return n && n.content ? n.content : "";
  }
  function d(n) {
    cc11001100_hook("n", n, "function-parameter");
    return new URL(n);
  }
}, function (n, e, t) {
  "use strict";

  function r(n) {
    cc11001100_hook("n", n, "function-parameter");
    try {
      window.parent.postMessage(JSON.stringify(n), "*");
    } catch (n) {
      console.log("postMessageToParent has error:", n);
    }
  }
  t.d(e, "a", function () {
    return r;
  });
}, function (n, e, t) {
  "use strict";

  t.d(e, "a", function () {
    return f;
  });
  var r = cc11001100_hook("r", t(0), "var-init"),
    a = cc11001100_hook("a", t.n(r), "var-init"),
    o = cc11001100_hook("o", t(1), "var-init"),
    i = cc11001100_hook("i", t(3), "var-init"),
    c = cc11001100_hook("c", t(2), "var-init"),
    u = cc11001100_hook("u", window.location.href, "var-init");
  function f(n) {
    cc11001100_hook("n", n, "function-parameter");
    window.addEventListener && window.addEventListener("error", function (e) {
      !function (n, e) {
        try {
          var t = cc11001100_hook("t", n.target, "var-init"),
            r = cc11001100_hook("r", t.nodeName && t.nodeName.toUpperCase(), "var-init");
          if (r && a.a.LOAD_ERROR_TYPE[r]) {
            var f = cc11001100_hook("f", a.a.LOAD_ERROR_TYPE[r], "var-init"),
              d = cc11001100_hook("d", t.src || t.href, "var-init");
            if (e === a.a.PARENT_WINDOW) {
              var l = cc11001100_hook("l", s(a.a.PARENT_WINDOW, f), "var-init");
              _ = cc11001100_hook("_", {
                type: cc11001100_hook("type", l, "object-key-init"),
                errorSrc: cc11001100_hook("errorSrc", d, "object-key-init")
              }, "assign"), o.a.setMonitorData(_.type, _);
            } else if (e === a.a.IFRAME_WINDOW) {
              !function (n) {
                Object(i.a)(n);
              }({
                type: cc11001100_hook("type", s(a.a.IFRAME_WINDOW, f), "object-key-init"),
                errorSrc: cc11001100_hook("errorSrc", d, "object-key-init"),
                windowsHref: cc11001100_hook("windowsHref", u, "object-key-init"),
                templateName: cc11001100_hook("templateName", Object(c.c)(), "object-key-init")
              });
            }
          }
        } catch (n) {
          var E = cc11001100_hook("E", n && n.stack ? n.stack : n, "var-init");
          new Image().src = cc11001100_hook("new Image().src", "//eclick.baidu.com/rs.jpg?type=parentMonitor&mes=" + encodeURIComponent(E), "assign");
        }
        var _;
      }(e, n);
    }, !0);
  }
  function s(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return n + "_" + a.a.RESOURCE_ERROR + "_" + e;
  }
}, function (n, e, t) {
  "use strict";

  var r = cc11001100_hook("r", t(0), "var-init"),
    a = cc11001100_hook("a", t(1), "var-init");
  e.a = cc11001100_hook("e.a", function (n) {
    var e,
      t,
      o,
      i,
      c = cc11001100_hook("c", (e = cc11001100_hook("e", window.location.href, "assign"), o = cc11001100_hook("o", new Date().getTime(), "assign"), i = cc11001100_hook("i", Math.random().toString(36).slice(2), "assign"), t = cc11001100_hook("t", o + i, "assign"), {
        type: cc11001100_hook("type", r.ENVIRONMENT, "object-key-init"),
        deliveryPageUrl: cc11001100_hook("deliveryPageUrl", e, "object-key-init"),
        pageSearchId: cc11001100_hook("pageSearchId", t, "object-key-init")
      }), "var-init");
    a.a.setMonitorData(c.type, c);
  }, "assign");
}, function (n, e, t) {
  "use strict";

  var r = cc11001100_hook("r", t(4), "var-init"),
    a = cc11001100_hook("a", t(0), "var-init"),
    o = cc11001100_hook("o", t.n(a), "var-init"),
    i = cc11001100_hook("i", t(1), "var-init"),
    c = cc11001100_hook("c", t(2), "var-init");
  function u(n) {
    cc11001100_hook("n", n, "function-parameter");
    try {
      var e = cc11001100_hook("e", JSON.parse(n.data), "var-init"),
        t = cc11001100_hook("t", Object(c.b)(e.type), "var-init");
      t && (t === o.a.RESOURCE_ERROR ? (a = cc11001100_hook("a", e, "assign"), i.a.setMonitorData(a.type, a)) : t === o.a.IFRAME_IMGS_HIDDEN ? function (n) {
        i.a.setMonitorData(n.type, n);
      }(e) : t === o.a.IFRAME_LOAD && function (n) {
        i.a.setOneMonitorData("hasNewIframeLoad", !0), i.a.setMonitorData(n.type, n);
      }(e));
    } catch (n) {
      var r = cc11001100_hook("r", n && n.stack ? n.stack : n, "var-init");
      new Image().src = cc11001100_hook("new Image().src", "//eclick.baidu.com/rs.jpg?type=parentMonitor&mes=" + encodeURIComponent(r), "assign");
    }
    var a;
  }
  function f(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    return e.some(function (e) {
      return Object(c.f)(e, n);
    });
  }
  function s() {
    var n = cc11001100_hook("n", function (n, e) {
        var t = cc11001100_hook("t", [], "var-init");
        return Array.prototype.forEach.call(n, function (n) {
          f(n.src, e) && t.push(n);
        }), t;
      }(document.getElementsByTagName("iframe"), a.FILTER_IFRAMES_REGEXS), "var-init"),
      e = cc11001100_hook("e", [], "var-init");
    return n.forEach(function (n) {
      var t = cc11001100_hook("t", n.clientHeight <= 0 ? function (n) {
        var e = cc11001100_hook("e", n, "var-init"),
          t = cc11001100_hook("t", {}, "var-init"),
          r = cc11001100_hook("r", !1, "var-init"),
          a = cc11001100_hook("a", !1, "var-init"),
          o = cc11001100_hook("o", [], "var-init");
        for (; Object(c.e)(e);) {
          if ("none" === window.getComputedStyle(e).display && (t = cc11001100_hook("t", {
            hiddenElementObj: {
              nodeName: cc11001100_hook("nodeName", e.nodeName, "object-key-init"),
              nodeId: cc11001100_hook("nodeId", e.id, "object-key-init"),
              nodeClass: cc11001100_hook("nodeClass", e.className, "object-key-init")
            },
            isMediaDom: cc11001100_hook("isMediaDom", a, "object-key-init"),
            blocked: cc11001100_hook("blocked", 1, "object-key-init")
          }, "assign"), r = cc11001100_hook("r", !0, "assign")), !a && o.push((void 0, {
            allAttributeNames: cc11001100_hook("allAttributeNames", (i = cc11001100_hook("i", e, "assign")).getAttributeNames(), "object-key-init"),
            nodeName: cc11001100_hook("nodeName", i.nodeName, "object-key-init"),
            nodeId: cc11001100_hook("nodeId", i.id, "object-key-init"),
            nodeClass: cc11001100_hook("nodeClass", i.className, "object-key-init")
          })), d(e) && (a = cc11001100_hook("a", !0, "assign")), r && a) {
            t.isMediaDom || (t.containerSelector = cc11001100_hook("t.containerSelector", o, "assign"));
            break;
          }
          e = cc11001100_hook("e", e.parentNode, "assign");
        }
        var i;
        return t;
      }(n) : {
        blocked: cc11001100_hook("blocked", 0, "object-key-init")
      }, "var-init");
      e.push(t);
    }), {
      type: cc11001100_hook("type", a.PARENT_WINDOW + "_" + a.IFRAME_HIDDEN_IN_PARENT, "object-key-init"),
      iframes: cc11001100_hook("iframes", e, "object-key-init")
    };
  }
  function d(n) {
    cc11001100_hook("n", n, "function-parameter");
    return i.a.getMonitorData("containers").find(function (e) {
      return e === n;
    });
  }
  var l = function () {
    var n,
      e,
      t,
      r = cc11001100_hook("r", a.PARENT_WINDOW + "_" + a.ALL_IFRAMES, "var-init"),
      o = cc11001100_hook("o", (t = cc11001100_hook("t", document.getElementsByTagName("iframe"), "assign"), n = cc11001100_hook("n", Array.prototype.map.call(t, function (n) {
        return n.src;
      }), "assign"), e = cc11001100_hook("e", a.FILTER_IFRAMES_REGEXS, "assign"), n.filter(function (n) {
        return f(n, e);
      })), "var-init"),
      i = cc11001100_hook("i", {}, "var-init");
    return o.length > 0 && (i = cc11001100_hook("i", {
      type: cc11001100_hook("type", r, "object-key-init"),
      allIframeSrc: cc11001100_hook("allIframeSrc", o, "object-key-init")
    }, "assign")), i;
  };
  e.a = cc11001100_hook("e.a", function (n, e) {
    window.addEventListener("load", function () {
      try {
        var n = cc11001100_hook("n", s(), "var-init");
        n.iframes.length > 0 && i.a.setMonitorData(n.type, n);
        var e = cc11001100_hook("e", l(), "var-init");
        e && i.a.setMonitorData(e.type, e);
      } catch (n) {
        var t = cc11001100_hook("t", n && n.stack ? n.stack : n, "var-init");
        new Image().src = cc11001100_hook("new Image().src", "//eclick.baidu.com/rs.jpg?type=parentMonitor&mes=" + encodeURIComponent(t), "assign");
      }
    }), "blocked" === e && (Object(r.a)(a.PARENT_WINDOW), window.addEventListener && window.addEventListener("message", u));
  }, "assign");
}, function (n, e, t) {
  "use strict";

  var r = cc11001100_hook("r", t(1), "var-init"),
    a = cc11001100_hook("a", t(0), "var-init"),
    o = cc11001100_hook("o", t.n(a), "var-init"),
    i = cc11001100_hook("i", t(2), "var-init");
  function c(n, e, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e in n ? Object.defineProperty(n, e, {
      value: cc11001100_hook("value", t, "object-key-init"),
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      configurable: cc11001100_hook("configurable", !0, "object-key-init"),
      writable: cc11001100_hook("writable", !0, "object-key-init")
    }) : n[e] = cc11001100_hook("n[e]", t, "assign"), n;
  }
  var u = cc11001100_hook("u", "", "var-init"),
    f = cc11001100_hook("f", !0, "var-init"),
    s = cc11001100_hook("s", !0, "var-init");
  function d() {
    var n,
      e = cc11001100_hook("e", (c(n = cc11001100_hook("n", {}, "assign"), o.a.PAGE_SEARCH_ID, _()), c(n, "needUpload", !1), n), "var-init");
    return function (n) {
      for (var e = cc11001100_hook("e", r.a.getAllMonitorData(), "var-init"), t = cc11001100_hook("t", 0, "var-init"), a = cc11001100_hook("a", Object.keys(e), "var-init"); t < a.length; t++) {
        var o = cc11001100_hook("o", a[t], "var-init"),
          i = cc11001100_hook("i", p(o), "var-init");
        i && (function (n) {
          return !!n.split("_")[2];
        }(c = cc11001100_hook("c", o, "assign")) && "iframe" === c.split("_")[0] || M(o) || A(o)) && (n[o] = cc11001100_hook("n[o]", i, "assign"), I(o), n.needUpload = cc11001100_hook("n.needUpload", !0, "assign"));
      }
      var c;
    }(e), function (n) {
      var e = cc11001100_hook("e", N("unloadIframeType"), "var-init"),
        t = cc11001100_hook("t", function () {
          var n = cc11001100_hook("n", N("allIframesType"), "var-init"),
            e = cc11001100_hook("e", r.a.getMonitorData(n), "var-init"),
            t = cc11001100_hook("t", N("loadIframesType"), "var-init"),
            a = cc11001100_hook("a", r.a.getMonitorData(t), "var-init"),
            o = cc11001100_hook("o", [], "var-init");
          if (e && e[0] && e[0].allIframeSrc) for (var c = cc11001100_hook("c", e[0].allIframeSrc, "var-init"), u = cc11001100_hook("u", 0, "var-init"), f = cc11001100_hook("f", c.length, "var-init"); u < f; u++) if (!R(a, c[u])) {
            var s = cc11001100_hook("s", Object(i.d)(c[u]), "var-init");
            o.push({
              iframeDomain: cc11001100_hook("iframeDomain", s.hostname, "object-key-init"),
              iframePathLen: cc11001100_hook("iframePathLen", s.pathname.length - 1, "object-key-init")
            });
          }
          return o;
        }(), "var-init");
      t.length && r.a.getMonitorData("hasNewIframeLoad") && (n[e] = cc11001100_hook("n[e]", t, "assign"), n.needUpload = cc11001100_hook("n.needUpload", !0, "assign"), r.a.setOneMonitorData("hasNewIframeLoad", !1));
    }(e), l(e, "blocked"), E(e), e;
  }
  function l(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", N("allIframesType"), "var-init"),
      a = cc11001100_hook("a", r.a.getMonitorData(t), "var-init"),
      c = cc11001100_hook("c", a && a[0] && a[0].allIframeSrc, "var-init");
    s && c && (n[t] = cc11001100_hook("n[t]", {
      type: cc11001100_hook("type", e, "object-key-init"),
      antiBlock: {},
      antiBlockNoBlock: cc11001100_hook("antiBlockNoBlock", 0, "object-key-init"),
      noAntiBlock: cc11001100_hook("noAntiBlock", 0, "object-key-init")
    }, "assign"), c.forEach(function (e) {
      var r = cc11001100_hook("r", Object(i.d)(e), "var-init"),
        a = cc11001100_hook("a", r.hostname, "var-init");
      !function (n) {
        return o.a.ENCRYPT_IFRAMES_REGEXS.some(function (e) {
          return Object(i.f)(e, n);
        });
      }(e) ? "/s" === r.pathname ? n[t].antiBlockNoBlock += cc11001100_hook("n[t].antiBlockNoBlock", 1, "assign") : n[t].noAntiBlock += cc11001100_hook("n[t].noAntiBlock", 1, "assign") : (n[t].antiBlock[a] || (n[t].antiBlock[a] = cc11001100_hook("n[t].antiBlock[a]", [], "assign")), n[t].antiBlock[a].push(r.pathname.length - 1));
    }), s = cc11001100_hook("s", !1, "assign"), n.needUpload = cc11001100_hook("n.needUpload", !0, "assign"));
  }
  function E(n) {
    cc11001100_hook("n", n, "function-parameter");
    f && (f = cc11001100_hook("f", !1, "assign"), n[o.a.ENVIRONMENT] = cc11001100_hook("n[o.a.ENVIRONMENT]", m(), "assign"), n.needUpload = cc11001100_hook("n.needUpload", !0, "assign"));
  }
  function _() {
    if (u) return u;
    var n = cc11001100_hook("n", m(), "var-init");
    return u = cc11001100_hook("u", n && n[0] && n[0].pageSearchId, "assign");
  }
  function m() {
    return r.a.getMonitorData(o.a.ENVIRONMENT);
  }
  function p(n) {
    cc11001100_hook("n", n, "function-parameter");
    var e = cc11001100_hook("e", "", "var-init");
    try {
      e = cc11001100_hook("e", JSON.parse(JSON.stringify(r.a.getMonitorData(n))), "assign");
    } catch (n) {
      var t = cc11001100_hook("t", n && n.stack ? n.stack : n, "var-init");
      new Image().src = cc11001100_hook("new Image().src", "//eclick.baidu.com/rs.jpg?type=JSON_API&mes=" + encodeURIComponent(t), "assign");
    }
    return e;
  }
  function I(n) {
    cc11001100_hook("n", n, "function-parameter");
    r.a.removeMonitorData(n);
  }
  function R(n, e) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", -1, "var-init");
    if (n instanceof Array) for (var r = cc11001100_hook("r", 0, "var-init"), a = cc11001100_hook("a", n.length, "var-init"); r < a; r++) if (n[r].iframeHref === e) {
      t = cc11001100_hook("t", r, "assign");
      break;
    }
    return t > -1;
  }
  function M(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n === N("hiddenImgsType");
  }
  function A(n) {
    cc11001100_hook("n", n, "function-parameter");
    return n === N("hiddenIframeType");
  }
  function N(n) {
    cc11001100_hook("n", n, "function-parameter");
    return {
      hiddenImgsType: cc11001100_hook("hiddenImgsType", o.a.IFRAME_WINDOW + "_" + o.a.IFRAME_IMGS_HIDDEN, "object-key-init"),
      hiddenIframeType: cc11001100_hook("hiddenIframeType", o.a.PARENT_WINDOW + "_" + o.a.IFRAME_HIDDEN_IN_PARENT, "object-key-init"),
      allIframesType: cc11001100_hook("allIframesType", o.a.PARENT_WINDOW + "_" + o.a.ALL_IFRAMES, "object-key-init"),
      loadIframesType: cc11001100_hook("loadIframesType", o.a.IFRAME_WINDOW + "_" + o.a.IFRAME_LOAD, "object-key-init"),
      unloadIframeType: cc11001100_hook("unloadIframeType", o.a.PARENT_WINDOW + "_" + o.a.IFRAME_UNLOAD, "object-key-init")
    }[n];
  }
  function O(n) {
    cc11001100_hook("n", n, "function-parameter");
    for (var e = cc11001100_hook("e", "", "var-init"), t = cc11001100_hook("t", "", "var-init"), r = cc11001100_hook("r", 0, "var-init"), a = cc11001100_hook("a", n.length, "var-init"); r < a; r += cc11001100_hook("r", 2, "assign")) e += cc11001100_hook("e", n.charAt(r), "assign"), r + 1 < a && (t += cc11001100_hook("t", n.charAt(r + 1), "assign"));
    return e + t;
  }
  function v(n, e, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return "FF" + e + t + n + "AA";
  }
  function y(n) {
    cc11001100_hook("n", n, "function-parameter");
    var e = cc11001100_hook("e", n + "", "var-init");
    return n < 10 && (e = cc11001100_hook("e", "0" + n, "assign")), e;
  }
  function g(n) {
    cc11001100_hook("n", n, "function-parameter");
    var e = cc11001100_hook("e", new Image(), "var-init"),
      t = cc11001100_hook("t", "baidu_monitor_log_" + new Date().getTime(), "var-init");
    window[t] = cc11001100_hook("window[t]", e, "assign"), e.onload = cc11001100_hook("e.onload", e.onerror = cc11001100_hook("e.onerror", e.onabort = cc11001100_hook("e.onabort", function () {
      try {
        delete window[t];
      } catch (n) {
        window[t] = cc11001100_hook("window[t]", null, "assign");
      }
      e = cc11001100_hook("e", null, "assign");
    }, "assign"), "assign"), "assign"), e.src = cc11001100_hook("e.src", n, "assign");
  }
  e.a = cc11001100_hook("e.a", function (n) {
    setInterval(D, 2e3, n);
  }, "assign");
  function D(n) {
    cc11001100_hook("n", n, "function-parameter");
    try {
      var e = cc11001100_hook("e", "blocked" === n ? d() : function () {
          for (var n, e = cc11001100_hook("e", r.a.getAllMonitorData(), "var-init"), t = cc11001100_hook("t", (c(n = cc11001100_hook("n", {}, "assign"), o.a.PAGE_SEARCH_ID, _()), c(n, "needUpload", !1), n), "var-init"), a = cc11001100_hook("a", 0, "var-init"), i = cc11001100_hook("i", Object.keys(e), "var-init"); a < i.length; a++) {
            var u = cc11001100_hook("u", i[a], "var-init"),
              f = cc11001100_hook("f", p(u), "var-init");
            f && A(u) && (t[u] = cc11001100_hook("t[u]", f, "assign"), I(u), t.needUpload = cc11001100_hook("t.needUpload", !0, "assign"));
          }
          return l(t, "unblocked"), E(t), t;
        }(), "var-init"),
        t = cc11001100_hook("t", e[a.PAGE_SEARCH_ID], "var-init"),
        i = cc11001100_hook("i", JSON.stringify(e), "var-init");
      if (e.needUpload) if (i.length > a.PACKET_MOST_LENGTH) for (var u = cc11001100_hook("u", function (n) {
          for (var e = cc11001100_hook("e", n.length, "var-init"), t = cc11001100_hook("t", 0, "var-init"), r = cc11001100_hook("r", a.PACKET_MOST_LENGTH, "var-init"), o = cc11001100_hook("o", Math.ceil(e / a.PACKET_MOST_LENGTH), "var-init"), i = cc11001100_hook("i", [], "var-init"), c = cc11001100_hook("c", 1, "var-init"); r <= e;) {
            var u = cc11001100_hook("u", v(O(n.slice(t, r)), y(o), y(c)), "var-init");
            if (i.push(u), c++, r === e) break;
            t = cc11001100_hook("t", r, "assign"), r = cc11001100_hook("r", Math.min(t + a.PACKET_MOST_LENGTH, e), "assign");
          }
          return i;
        }(i), "var-init"), f = cc11001100_hook("f", new Date().getTime(), "var-init"), s = cc11001100_hook("s", 0, "var-init"), m = cc11001100_hook("m", u.length, "var-init"); s < m; s++) {
        g(b(t, f, encodeURIComponent(u[s])));
      } else g(function (n, e) {
        return a.LOG_URL + "?" + a.PAGE_SEARCH_ID + "=" + n + "&content=" + e;
      }(t, encodeURIComponent(O(i))));
    } catch (n) {
      var R = cc11001100_hook("R", n && n.stack ? n.stack : n, "var-init");
      new Image().src = cc11001100_hook("new Image().src", "//eclick.baidu.com/rs.jpg?type=parentMonitor&mes=" + encodeURIComponent(R), "assign");
    }
  }
  function b(n, e, t) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return a.LOG_URL + "?" + a.PAGE_SEARCH_ID + "=" + n + "&timestamp=" + e + "&content=" + t;
  }
},, function (n, e, t) {
  "use strict";

  t.r(e), t.d(e, "unblockedMonitor", function () {
    return u;
  }), t.d(e, "setPresentContainer", function () {
    return f;
  });
  var r = cc11001100_hook("r", t(5), "var-init"),
    a = cc11001100_hook("a", t(7), "var-init"),
    o = cc11001100_hook("o", t(2), "var-init"),
    i = cc11001100_hook("i", t(6), "var-init"),
    c = cc11001100_hook("c", t(1), "var-init");
  function u(n) {
    cc11001100_hook("n", n, "function-parameter");
    if (o.a) try {
      !function (n) {
        c.a.removeMonitorData("containers"), c.a.setMonitorData("containers", n.container), Object(r.a)(), Object(i.a)(n.container, "unblocked"), Object(a.a)("unblocked");
      }(n);
    } catch (n) {
      var e = cc11001100_hook("e", n && n.stack ? n.stack : n, "var-init");
      new Image().src = cc11001100_hook("new Image().src", "//eclick.baidu.com/rs.jpg?type=unblockedMonitor&mes=" + encodeURIComponent(e), "assign");
    }
  }
  function f(n) {
    cc11001100_hook("n", n, "function-parameter");
    c.a.setMonitorData("containers", n);
  }
  window.___baidu_union = cc11001100_hook("window.___baidu_union", window.___baidu_union || {}, "assign"), window.___baidu_union.unblockedMonitor = cc11001100_hook("window.___baidu_union.unblockedMonitor", u, "assign"), window.___baidu_union.setPresentContainer = cc11001100_hook("window.___baidu_union.setPresentContainer", f, "assign");
}]));