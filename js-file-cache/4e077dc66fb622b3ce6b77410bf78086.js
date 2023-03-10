/*! For license information please see 3476.e8fa875269f1c8383f09.js.LICENSE.txt */
"use strict";

(self.webpackChunkheifetz = cc11001100_hook("self.webpackChunkheifetz", self.webpackChunkheifetz || [], "assign")).push([[3476], {
  43476: function (e, t, n) {
    n.r(t), n.d(t, {
      default: function () {
        return Ee;
      }
    });
    var r = function () {
      return r = cc11001100_hook("r", Object.assign || function (e) {
        for (var t, n = cc11001100_hook("n", 1, "var-init"), r = cc11001100_hook("r", arguments.length, "var-init"); n < r; n++) for (var i in t = cc11001100_hook("t", arguments[n], "assign")) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = cc11001100_hook("e[i]", t[i], "assign"));
        return e;
      }, "assign"), r.apply(this, arguments);
    };
    function i(e, t, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      return new (n || (n = cc11001100_hook("n", Promise, "assign")))(function (i, o) {
        function a(e) {
          cc11001100_hook("e", e, "function-parameter");
          try {
            s(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function u(e) {
          cc11001100_hook("e", e, "function-parameter");
          try {
            s(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          cc11001100_hook("e", e, "function-parameter");
          var t;
          e.done ? i(e.value) : (t = cc11001100_hook("t", e.value, "assign"), t instanceof n ? t : new n(function (e) {
            e(t);
          })).then(a, u);
        }
        s((r = cc11001100_hook("r", r.apply(e, t || []), "assign")).next());
      });
    }
    function o(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n,
        r,
        i,
        o,
        a = cc11001100_hook("a", {
          label: cc11001100_hook("label", 0, "object-key-init"),
          sent: function () {
            if (1 & i[0]) throw i[1];
            return i[1];
          },
          trys: cc11001100_hook("trys", [], "object-key-init"),
          ops: cc11001100_hook("ops", [], "object-key-init")
        }, "var-init");
      return o = cc11001100_hook("o", {
        next: cc11001100_hook("next", u(0), "object-key-init"),
        throw: cc11001100_hook("throw", u(1), "object-key-init"),
        return: cc11001100_hook("return", u(2), "object-key-init")
      }, "assign"), "function" == typeof Symbol && (o[Symbol.iterator] = cc11001100_hook("o[Symbol.iterator]", function () {
        return this;
      }, "assign")), o;
      function u(o) {
        cc11001100_hook("o", o, "function-parameter");
        return function (u) {
          return function (o) {
            if (n) throw new TypeError("Generator is already executing.");
            for (; a;) try {
              if (n = cc11001100_hook("n", 1, "assign"), r && (i = cc11001100_hook("i", 2 & o[0] ? r.return : o[0] ? r.throw || ((i = cc11001100_hook("i", r.return, "assign")) && i.call(r), 0) : r.next, "assign")) && !(i = cc11001100_hook("i", i.call(r, o[1]), "assign")).done) return i;
              switch (r = cc11001100_hook("r", 0, "assign"), i && (o = cc11001100_hook("o", [2 & o[0], i.value], "assign")), o[0]) {
                case 0:
                case 1:
                  i = cc11001100_hook("i", o, "assign");
                  break;
                case 4:
                  return a.label++, {
                    value: cc11001100_hook("value", o[1], "object-key-init"),
                    done: cc11001100_hook("done", !1, "object-key-init")
                  };
                case 5:
                  a.label++, r = cc11001100_hook("r", o[1], "assign"), o = cc11001100_hook("o", [0], "assign");
                  continue;
                case 7:
                  o = cc11001100_hook("o", a.ops.pop(), "assign"), a.trys.pop();
                  continue;
                default:
                  if (!((i = cc11001100_hook("i", (i = cc11001100_hook("i", a.trys, "assign")).length > 0 && i[i.length - 1], "assign")) || 6 !== o[0] && 2 !== o[0])) {
                    a = cc11001100_hook("a", 0, "assign");
                    continue;
                  }
                  if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                    a.label = cc11001100_hook("a.label", o[1], "assign");
                    break;
                  }
                  if (6 === o[0] && a.label < i[1]) {
                    a.label = cc11001100_hook("a.label", i[1], "assign"), i = cc11001100_hook("i", o, "assign");
                    break;
                  }
                  if (i && a.label < i[2]) {
                    a.label = cc11001100_hook("a.label", i[2], "assign"), a.ops.push(o);
                    break;
                  }
                  i[2] && a.ops.pop(), a.trys.pop();
                  continue;
              }
              o = cc11001100_hook("o", t.call(e, a), "assign");
            } catch (e) {
              o = cc11001100_hook("o", [6, e], "assign"), r = cc11001100_hook("r", 0, "assign");
            } finally {
              n = cc11001100_hook("n", i = cc11001100_hook("i", 0, "assign"), "assign");
            }
            if (5 & o[0]) throw o[1];
            return {
              value: cc11001100_hook("value", o[0] ? o[1] : void 0, "object-key-init"),
              done: cc11001100_hook("done", !0, "object-key-init")
            };
          }([o, u]);
        };
      }
    }
    function a(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", "function" == typeof Symbol && e[Symbol.iterator], "var-init");
      if (!n) return e;
      var r,
        i,
        o = cc11001100_hook("o", n.call(e), "var-init"),
        a = cc11001100_hook("a", [], "var-init");
      try {
        for (; (void 0 === t || t-- > 0) && !(r = cc11001100_hook("r", o.next(), "assign")).done;) a.push(r.value);
      } catch (e) {
        i = cc11001100_hook("i", {
          error: cc11001100_hook("error", e, "object-key-init")
        }, "assign");
      } finally {
        try {
          r && !r.done && (n = cc11001100_hook("n", o.return, "assign")) && n.call(o);
        } finally {
          if (i) throw i.error;
        }
      }
      return a;
    }
    function u(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      if (n || 2 === arguments.length) for (var r, i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", t.length, "var-init"); i < o; i++) !r && i in t || (r || (r = cc11001100_hook("r", Array.prototype.slice.call(t, 0, i), "assign")), r[i] = cc11001100_hook("r[i]", t[i], "assign"));
      return e.concat(r || Array.prototype.slice.call(t));
    }
    var s = function (e) {
      return function (t) {
        if ("img" === e) new window.Image().src = cc11001100_hook("new window.Image().src", t.url, "assign");else {
          var n = cc11001100_hook("n", document.createElement(e), "var-init");
          n.src = cc11001100_hook("n.src", t.url, "assign");
          var r = cc11001100_hook("r", document.head, "var-init");
          r.appendChild(n);
          var i = function () {
            r.removeChild(n);
          };
          n.onload = cc11001100_hook("n.onload", function () {
            i(), t.success && t.success();
          }, "assign"), n.onerror = cc11001100_hook("n.onerror", function () {
            i(), t.fail && t.fail();
          }, "assign");
        }
      };
    };
    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t;
      if ((e = cc11001100_hook("e", e || {}, "assign")).type = cc11001100_hook("(e = e || {}).type", (e.type || "GET").toUpperCase(), "assign"), e.dataType = cc11001100_hook("e.dataType", e.dataType || "json", "assign"), (t = cc11001100_hook("t", window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject("Microsoft.XMLHTTP"), "assign")).onreadystatechange = cc11001100_hook("(t = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject(\"Microsoft.XMLHTTP\")).onreadystatechange", function () {
        if (4 === t.readyState) {
          var n = cc11001100_hook("n", t.status, "var-init");
          n >= 200 && n < 300 ? e.success && e.success(t.responseText, t.responseXML) : e.fail && e.fail(n);
        }
      }, "assign"), "GET" === e.type) t.open("GET", e.url, !0), t.send(null);else if ("POST" === e.type) {
        if (t.open("POST", e.url, !0), e.headers) for (var n in e.headers) t.setRequestHeader(n, e.headers[n]);
        t.send(e.data);
      }
    }
    s("img"), s("script");
    var l = function (e) {
        c({
          type: cc11001100_hook("type", "GET", "object-key-init"),
          url: cc11001100_hook("url", e.url, "object-key-init"),
          data: cc11001100_hook("data", e.data, "object-key-init"),
          headers: cc11001100_hook("headers", e.headers, "object-key-init"),
          success: cc11001100_hook("success", e.success, "object-key-init"),
          fail: cc11001100_hook("fail", e.fail, "object-key-init")
        });
      },
      f = cc11001100_hook("f", navigator.userAgent, "var-init"),
      d = cc11001100_hook("d", (/Mobile/.test(f), /Android/.test(f), /Zhihu|osee2unifiedRelease|Futureve/.test(f), /ZhihuHybrid/.test(f)), "var-init"),
      p = cc11001100_hook("p", (/ZhihuExternalHit|Baiduspider|Googlebot|yodaobot|Sogou web spider|Sogou inst spider|bingbot|360spider|sosospider|YisouSpider|DuckDuckBot|HTTP_Request2|Readability|Slackbot|Instapaper|pocket/.test(f), function (e) {
        return new Promise(function (t) {
          setTimeout(t, e);
        });
      }), "var-init"),
      m = cc11001100_hook("m", !1, "var-init"),
      v = cc11001100_hook("v", null, "var-init");
    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      return i(this, void 0, void 0, function () {
        var t, n, i, a, u, s;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return window.returnCitySN || d ? [3, 2] : [4, p(1e3)];
            case 1:
              o.sent(), o.label = cc11001100_hook("o.label", 2, "assign");
            case 2:
              return t = cc11001100_hook("t", window.location.href, "assign"), n = cc11001100_hook("n", r({
                za_monitor_version: cc11001100_hook("za_monitor_version", "0.6.1", "object-key-init"),
                ua: cc11001100_hook("ua", navigator.userAgent.toLowerCase(), "object-key-init"),
                page_url: cc11001100_hook("page_url", t && t.split("?")[0], "object-key-init"),
                current_href: cc11001100_hook("current_href", t, "object-key-init")
              }, window.returnCitySN), "assign"), i = cc11001100_hook("i", "fe-monitor", "assign"), a = cc11001100_hook("a", e.esIndexKeyword, "assign"), u = cc11001100_hook("u", e.disableLog, "assign"), i, s = cc11001100_hook("s", a ? e.type ? "fe-".concat(e.type, "-").concat(a) : "".concat(i, "-").concat(a) : e.type ? "fe-".concat(e.type) : "".concat(i), "assign"), u && console.info("%c[za-js-monitor.logData]", "color: green", {
                logData: cc11001100_hook("logData", r(r({}, n), e), "object-key-init")
              }), [2, {
                type: cc11001100_hook("type", s, "object-key-init"),
                defaultData: cc11001100_hook("defaultData", n, "object-key-init"),
                disableLog: cc11001100_hook("disableLog", u, "object-key-init")
              }];
          }
        });
      });
    }
    function g(e) {
      cc11001100_hook("e", e, "function-parameter");
      return i(this, void 0, void 0, function () {
        var t, n, i;
        return o(this, function (o) {
          switch (o.label) {
            case 0:
              return window.zap && !m && (a = cc11001100_hook("a", {
                useProto3: cc11001100_hook("useProto3", !1, "object-key-init"),
                enableLog: cc11001100_hook("enableLog", !1, "object-key-init"),
                apiHost: cc11001100_hook("apiHost", "//apm.zhihu.com", "object-key-init"),
                apiPath: cc11001100_hook("apiPath", "/collector/apm", "object-key-init"),
                product: cc11001100_hook("product", "Zhihu", "object-key-init"),
                onBeforeSend: function (e, t) {
                  var n = cc11001100_hook("n", (void 0 === t ? {
                    defaultSendHandler: function () {
                      console.log("defaultSendHandler");
                    }
                  } : t).defaultSendHandler, "var-init");
                  try {
                    e.base.network = cc11001100_hook("e.base.network", {
                      internet_ip: cc11001100_hook("internet_ip", window.returnCitySN.client_ip, "object-key-init")
                    }, "assign");
                    var r = cc11001100_hook("r", e.base.id.client_id, "var-init"),
                      i = cc11001100_hook("i", JSON.parse(e.extra.monitor.json_log.json), "var-init");
                    i.client_id = cc11001100_hook("i.client_id", r, "assign"), e.extra.monitor.json_log.json = cc11001100_hook("e.extra.monitor.json_log.json", JSON.stringify(i), "assign");
                  } catch (e) {}
                  return n && n(e);
                }
              }, "assign"), window.zap && ((v = cc11001100_hook("v", new window.zap.Client(r({}, a)), "assign")).config(a), m = cc11001100_hook("m", !0, "assign"))), [4, h(e)];
            case 1:
              return t = cc11001100_hook("t", o.sent(), "assign"), n = cc11001100_hook("n", t.type, "assign"), i = cc11001100_hook("i", t.defaultData, "assign"), t.disableLog || v && v.trackMonitor({}, {
                monitor: {
                  json_log: {
                    type: cc11001100_hook("type", n, "object-key-init"),
                    json: cc11001100_hook("json", JSON.stringify(r(r({}, i), e)), "object-key-init")
                  }
                }
              }), [2];
          }
          var a;
        });
      });
    }
    var w,
      y = cc11001100_hook("y", [], "var-init");
    d || (function (e) {
      var t = cc11001100_hook("t", this, "var-init");
      window.addEventListener("load", function () {
        return i(t, void 0, void 0, function () {
          return o(this, function (t) {
            switch (t.label) {
              case 0:
                return v ? [3, 2] : [4, p(1e3)];
              case 1:
                t.sent(), t.label = cc11001100_hook("t.label", 2, "assign");
              case 2:
                if (v && e.length) for (; e.length;) g(e[0]), e.shift();else window.zap || console.warn("za 没有初始化成功，请检查代码");
                return [2];
            }
          });
        });
      });
    }(y), d || l({
      url: cc11001100_hook("url", "//118.89.204.198/resolv?host=www.zhihu.com&os_type=web", "object-key-init"),
      success: function (e) {
        try {
          var t = cc11001100_hook("t", JSON.parse(e), "var-init");
          window.returnCitySN = cc11001100_hook("window.returnCitySN", {
            client_ip: cc11001100_hook("client_ip", t.dns[0].client_ip, "object-key-init")
          }, "assign");
        } catch (e) {}
      },
      fail: function () {
        return "";
      }
    }));
    var S = function (e, t) {
        if (e) {
          "CLS" !== e.name && "LCP" !== e.name || (e.entries = cc11001100_hook("e.entries", [], "assign")), t && (w = cc11001100_hook("w", t, "assign")), t || (t = cc11001100_hook("t", w, "assign"));
          var n = cc11001100_hook("n", r(r({}, e), t), "var-init");
          if (d) !function (e) {
            i(this, void 0, void 0, function () {
              var t, n, i;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return "undefined" == typeof zhihuHybrid ? [3, 2] : [4, h(e)];
                  case 1:
                    return t = cc11001100_hook("t", o.sent(), "assign"), n = cc11001100_hook("n", t.type, "assign"), i = cc11001100_hook("i", t.defaultData, "assign"), t.disableLog ? [2] : (zhihuHybrid.ready().then(function () {
                      var t = cc11001100_hook("t", "base/report", "var-init"),
                        o = cc11001100_hook("o", {
                          target: cc11001100_hook("target", "APM", "object-key-init"),
                          params: {
                            indexName: cc11001100_hook("indexName", "hybrid-".concat(n), "object-key-init"),
                            params: cc11001100_hook("params", r(r({}, i), e), "object-key-init")
                          }
                        }, "var-init");
                      "function" == typeof zhihuHybrid ? zhihuHybrid(t).dispatch(o) : zhihuHybrid.dispatch(t, o);
                    }), [3, 3]);
                  case 2:
                    console.error("请接入 zhihu-hybrid，详见： https://hybrid.in.zhihu.com/"), g(e), o.label = cc11001100_hook("o.label", 3, "assign");
                  case 3:
                    return [2];
                }
              });
            });
          }(n);else {
            if (!window.zap) return void y.push(n);
            g(n);
          }
        }
      },
      b = cc11001100_hook("b", function () {
        function e() {
          this.queue = cc11001100_hook("this.queue", [], "assign"), this.size = cc11001100_hook("this.size", 10, "assign");
        }
        return e.prototype.push = cc11001100_hook("e.prototype.push", function (e) {
          var t = cc11001100_hook("t", r(r({}, e), {
            time: cc11001100_hook("time", new Date().getTime(), "object-key-init")
          }), "var-init");
          return this.queue.push(t), this.queue.length > this.size && this.queue.splice(0, this.queue.length - this.size), this.queue;
        }, "assign"), e.prototype.get = cc11001100_hook("e.prototype.get", function () {
          return this.queue;
        }, "assign"), e.prototype.getReportData = cc11001100_hook("e.prototype.getReportData", function () {
          var e = cc11001100_hook("e", this.queue.map(function (e) {
            var t = cc11001100_hook("t", r({}, e), "var-init");
            t.userInputTarget && delete t.userInputTarget;
            var n = cc11001100_hook("n", t.type, "var-init"),
              i = cc11001100_hook("i", function (e, t) {
                var n = cc11001100_hook("n", {}, "var-init");
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = cc11001100_hook("n[r]", e[r], "assign"));
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                  var i = cc11001100_hook("i", 0, "var-init");
                  for (r = cc11001100_hook("r", Object.getOwnPropertySymbols(e), "assign"); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = cc11001100_hook("n[r[i]]", e[r[i]], "assign"));
                }
                return n;
              }(t, ["type"]), "var-init");
            return {
              type: cc11001100_hook("type", n, "object-key-init"),
              extra: cc11001100_hook("extra", JSON.stringify(r({}, i)), "object-key-init")
            };
          }), "var-init");
          return e;
        }, "assign"), e.prototype.replace = cc11001100_hook("e.prototype.replace", function (e, t) {
          var n = cc11001100_hook("n", r(r({}, e), {
            time: cc11001100_hook("time", new Date().getTime(), "object-key-init")
          }), "var-init");
          "number" != typeof t ? this.queue.splice(this.queue.length - 1, 1, n) : this.queue.splice(t, 1, n);
        }, "assign"), e.prototype.clear = cc11001100_hook("e.prototype.clear", function () {
          this.queue = cc11001100_hook("this.queue", [], "assign");
        }, "assign"), e;
      }(), "var-init"),
      E = cc11001100_hook("E", null, "var-init"),
      x = cc11001100_hook("x", Object.keys(b.prototype).concat(["queue", "size"]), "var-init"),
      T = cc11001100_hook("T", {}, "var-init");
    x.forEach(function (e) {
      Object.defineProperty(T, e, {
        get: function () {
          return E ? E[e] : function () {
            return null;
          };
        }
      });
    });
    var k,
      L,
      O,
      N,
      R = function (e, t) {
        return {
          name: cc11001100_hook("name", e, "object-key-init"),
          value: cc11001100_hook("value", void 0 === t ? -1 : t, "object-key-init"),
          delta: cc11001100_hook("delta", 0, "object-key-init"),
          entries: cc11001100_hook("entries", [], "object-key-init"),
          id: cc11001100_hook("id", "v2-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12), "object-key-init")
        };
      },
      _ = function (e, t) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            if ("first-input" === e && !("PerformanceEventTiming" in self)) return;
            var n = cc11001100_hook("n", new PerformanceObserver(function (e) {
              return e.getEntries().map(t);
            }), "var-init");
            return n.observe({
              type: cc11001100_hook("type", e, "object-key-init"),
              buffered: cc11001100_hook("buffered", !0, "object-key-init")
            }), n;
          }
        } catch (e) {}
      },
      C = function (e, t) {
        var n = function n(r) {
          "pagehide" !== r.type && "hidden" !== document.visibilityState || (e(r), t && (removeEventListener("visibilitychange", n, !0), removeEventListener("pagehide", n, !0)));
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0);
      },
      H = function (e) {
        addEventListener("pageshow", function (t) {
          t.persisted && e(t);
        }, !0);
      },
      j = function (e, t, n) {
        var r;
        return function (i) {
          t.value >= 0 && (i || n) && (t.delta = cc11001100_hook("t.delta", t.value - (r || 0), "assign"), (t.delta || void 0 === r) && (r = cc11001100_hook("r", t.value, "assign"), e(t)));
        };
      },
      z = cc11001100_hook("z", -1, "var-init"),
      q = function () {
        return "hidden" === document.visibilityState ? 0 : 1 / 0;
      },
      M = function () {
        C(function (e) {
          var t = cc11001100_hook("t", e.timeStamp, "var-init");
          z = cc11001100_hook("z", t, "assign");
        }, !0);
      },
      P = function () {
        return z < 0 && (z = cc11001100_hook("z", q(), "assign"), M(), H(function () {
          setTimeout(function () {
            z = cc11001100_hook("z", q(), "assign"), M();
          }, 0);
        })), {
          get firstHiddenTime() {
            return z;
          }
        };
      },
      I = cc11001100_hook("I", !1, "var-init"),
      A = cc11001100_hook("A", -1, "var-init"),
      F = cc11001100_hook("F", {
        passive: cc11001100_hook("passive", !0, "object-key-init"),
        capture: cc11001100_hook("capture", !0, "object-key-init")
      }, "var-init"),
      D = cc11001100_hook("D", new Date(), "var-init"),
      $ = function (e, t) {
        k || (k = cc11001100_hook("k", t, "assign"), L = cc11001100_hook("L", e, "assign"), O = cc11001100_hook("O", new Date(), "assign"), U(removeEventListener), B());
      },
      B = function () {
        if (L >= 0 && L < O - D) {
          var e = cc11001100_hook("e", {
            entryType: cc11001100_hook("entryType", "first-input", "object-key-init"),
            name: cc11001100_hook("name", k.type, "object-key-init"),
            target: cc11001100_hook("target", k.target, "object-key-init"),
            cancelable: cc11001100_hook("cancelable", k.cancelable, "object-key-init"),
            startTime: cc11001100_hook("startTime", k.timeStamp, "object-key-init"),
            processingStart: cc11001100_hook("processingStart", k.timeStamp + L, "object-key-init")
          }, "var-init");
          N.forEach(function (t) {
            t(e);
          }), N = cc11001100_hook("N", [], "assign");
        }
      },
      X = function (e) {
        if (e.cancelable) {
          var t = cc11001100_hook("t", (e.timeStamp > 1e12 ? new Date() : performance.now()) - e.timeStamp, "var-init");
          "pointerdown" == e.type ? function (e, t) {
            var n = function () {
                $(e, t), i();
              },
              r = function () {
                i();
              },
              i = function () {
                removeEventListener("pointerup", n, F), removeEventListener("pointercancel", r, F);
              };
            addEventListener("pointerup", n, F), addEventListener("pointercancel", r, F);
          }(t, e) : $(t, e);
        }
      },
      U = function (e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (t) {
          return e(t, X, F);
        });
      },
      J = cc11001100_hook("J", {}, "var-init");
    function G() {
      var e,
        t,
        n,
        r,
        i,
        o,
        a = cc11001100_hook("a", {
          effectiveType: cc11001100_hook("effectiveType", "", "object-key-init"),
          downlink: cc11001100_hook("downlink", -1, "object-key-init"),
          rtt: cc11001100_hook("rtt", -1, "object-key-init")
        }, "var-init");
      return window.navigator && window.navigator.connection && (a = cc11001100_hook("a", {
        effectiveType: cc11001100_hook("effectiveType", (null === (t = cc11001100_hook("t", null === (e = cc11001100_hook("e", window.navigator, "assign")) || void 0 === e ? void 0 : e.connection, "assign")) || void 0 === t ? void 0 : t.effectiveType) || "", "object-key-init"),
        downlink: cc11001100_hook("downlink", (null === (r = cc11001100_hook("r", null === (n = cc11001100_hook("n", window.navigator, "assign")) || void 0 === n ? void 0 : n.connection, "assign")) || void 0 === r ? void 0 : r.downlink) || -1, "object-key-init"),
        rtt: cc11001100_hook("rtt", (null === (o = cc11001100_hook("o", null === (i = cc11001100_hook("i", window.navigator, "assign")) || void 0 === i ? void 0 : i.connection, "assign")) || void 0 === o ? void 0 : o.rtt) || -1, "object-key-init")
      }, "assign")), a;
    }
    function Z() {
      var e,
        t = cc11001100_hook("t", window.performance, "var-init"),
        n = cc11001100_hook("n", {
          type: cc11001100_hook("type", "", "object-key-init"),
          dns: cc11001100_hook("dns", -1, "object-key-init"),
          tcp: cc11001100_hook("tcp", -1, "object-key-init"),
          ttfb: cc11001100_hook("ttfb", -1, "object-key-init"),
          trans: cc11001100_hook("trans", -1, "object-key-init"),
          dom: cc11001100_hook("dom", -1, "object-key-init"),
          ssl: cc11001100_hook("ssl", -1, "object-key-init"),
          firstbyte: cc11001100_hook("firstbyte", -1, "object-key-init"),
          fp: cc11001100_hook("fp", -1, "object-key-init"),
          tti: cc11001100_hook("tti", -1, "object-key-init"),
          res: cc11001100_hook("res", -1, "object-key-init"),
          ready: cc11001100_hook("ready", -1, "object-key-init"),
          load: cc11001100_hook("load", -1, "object-key-init"),
          effectiveType: cc11001100_hook("effectiveType", "", "object-key-init"),
          downlink: cc11001100_hook("downlink", -1, "object-key-init"),
          rtt: cc11001100_hook("rtt", -1, "object-key-init"),
          platform: cc11001100_hook("platform", "", "object-key-init"),
          fcp: cc11001100_hook("fcp", -1, "object-key-init"),
          rd: cc11001100_hook("rd", -1, "object-key-init"),
          https: cc11001100_hook("https", "", "object-key-init"),
          wherepage: cc11001100_hook("wherepage", -1, "object-key-init")
        }, "var-init");
      if (t && (t.getEntriesByType && t.getEntriesByType("navigation") && t.getEntriesByType("navigation")[0] ? e = cc11001100_hook("e", t.getEntriesByType("navigation")[0], "assign") : t.timing && (e = cc11001100_hook("e", t.timing, "assign")), e)) {
        n.type = cc11001100_hook("n.type", "Performance", "assign"), e.domainLookupEnd && void 0 !== e.domainLookupStart && (n.dns = cc11001100_hook("n.dns", Math.round(e.domainLookupEnd - e.domainLookupStart || 0), "assign")), e.connectEnd && void 0 !== e.connectStart && (n.tcp = cc11001100_hook("n.tcp", Math.round(e.connectEnd - e.connectStart), "assign")), e.responseStart && void 0 !== e.requestStart && (n.ttfb = cc11001100_hook("n.ttfb", Math.round(e.responseStart - e.requestStart), "assign")), e.responseEnd && e.responseStart && (n.trans = cc11001100_hook("n.trans", Math.round(e.responseEnd - e.responseStart), "assign")), e.domInteractive && e.responseEnd && (n.dom = cc11001100_hook("n.dom", Math.round(e.domInteractive - e.responseEnd), "assign")), e.loadEventStart && e.domContentLoadedEventEnd && (n.res = cc11001100_hook("n.res", Math.round(e.loadEventStart - e.domContentLoadedEventEnd), "assign"));
        var r = cc11001100_hook("r", window.location, "var-init");
        r && "https:" === r.protocol && e.connectEnd && e.secureConnectionStart && (n.ssl = cc11001100_hook("n.ssl", Math.round(e.connectEnd - e.secureConnectionStart), "assign")), e.responseStart && e.domainLookupStart && (n.firstbyte = cc11001100_hook("n.firstbyte", Math.round(e.responseStart - e.domainLookupStart), "assign")), e.responseEnd && e.fetchStart && (n.fp = cc11001100_hook("n.fp", Math.round(e.responseEnd - e.fetchStart), "assign")), e.domInteractive && e.fetchStart && (n.tti = cc11001100_hook("n.tti", Math.round(e.domInteractive - e.fetchStart), "assign")), e.domContentLoadedEventEnd && e.fetchStart && (n.ready = cc11001100_hook("n.ready", Math.round(e.domContentLoadedEventEnd - e.fetchStart), "assign")), e.loadEventStart && e.fetchStart && (n.load = cc11001100_hook("n.load", Math.round(e.loadEventStart - e.fetchStart), "assign"));
        var i = cc11001100_hook("i", G(), "var-init");
        if (Object.assign(n, i), window.navigator && (n.platform = cc11001100_hook("n.platform", window.navigator.platform || "", "assign")), t && t.getEntries) {
          var o = cc11001100_hook("o", t.getEntries(), "var-init");
          for (var a in o) o[a].name && "first-contentful-paint" === o[a].name && o[a].startTime && (n.fcp = cc11001100_hook("n.fcp", 1 * o[a].startTime.toFixed(0), "assign")), o[a].name && "first-paint" === o[a].name && o[a].startTime && (n.fp = cc11001100_hook("n.fp", 1 * o[a].startTime.toFixed(0), "assign"));
        }
        if (void 0 !== e.navigationStart ? n.rd = cc11001100_hook("n.rd", e.fetchStart - e.navigationStart, "assign") : void 0 !== e.redirectEnd ? n.rd = cc11001100_hook("n.rd", e.redirectEnd - e.redirectStart, "assign") : n.rd = cc11001100_hook("n.rd", 0, "assign"), n.https = cc11001100_hook("n.https", e.nextHopProtocol || "", "assign"), t.navigation || e.type) if (e.type) switch (e.type) {
          case "navigate":
          default:
            n.wherepage = cc11001100_hook("n.wherepage", 0, "assign");
            break;
          case "back_forward":
            n.wherepage = cc11001100_hook("n.wherepage", 2, "assign");
            break;
          case "reload":
            n.wherepage = cc11001100_hook("n.wherepage", 1, "assign");
            break;
          case "prerender":
            n.wherepage = cc11001100_hook("n.wherepage", 256, "assign");
        } else n.wherepage = cc11001100_hook("n.wherepage", t.navigation.type || -1, "assign");
      }
      return n;
    }
    function K(e) {
      cc11001100_hook("e", e, "function-parameter");
      !function (e, t) {
        var n,
          r = cc11001100_hook("r", P(), "var-init"),
          i = cc11001100_hook("i", R("LCP"), "var-init"),
          o = function (e) {
            var t = cc11001100_hook("t", e.startTime, "var-init");
            t < r.firstHiddenTime && (i.value = cc11001100_hook("i.value", t, "assign"), i.entries.push(e), n());
          },
          a = cc11001100_hook("a", _("largest-contentful-paint", o), "var-init");
        if (a) {
          n = cc11001100_hook("n", j(e, i, t), "assign");
          var u = function () {
            J[i.id] || (a.takeRecords().map(o), a.disconnect(), J[i.id] = cc11001100_hook("J[i.id]", !0, "assign"), n(!0));
          };
          ["keydown", "click"].forEach(function (e) {
            addEventListener(e, u, {
              once: cc11001100_hook("once", !0, "object-key-init"),
              capture: cc11001100_hook("capture", !0, "object-key-init")
            });
          }), C(u, !0), H(function (r) {
            i = cc11001100_hook("i", R("LCP"), "assign"), n = cc11001100_hook("n", j(e, i, t), "assign"), requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                i.value = cc11001100_hook("i.value", performance.now() - r.timeStamp, "assign"), J[i.id] = cc11001100_hook("J[i.id]", !0, "assign"), n(!0);
              });
            });
          });
        }
      }(e), function (e, t) {
        var n,
          r = cc11001100_hook("r", P(), "var-init"),
          i = cc11001100_hook("i", R("FID"), "var-init"),
          o = function (e) {
            e.startTime < r.firstHiddenTime && (i.value = cc11001100_hook("i.value", e.processingStart - e.startTime, "assign"), i.entries.push(e), n(!0));
          },
          a = cc11001100_hook("a", _("first-input", o), "var-init");
        n = cc11001100_hook("n", j(e, i, t), "assign"), a && C(function () {
          a.takeRecords().map(o), a.disconnect();
        }, !0), a && H(function () {
          var r;
          i = cc11001100_hook("i", R("FID"), "assign"), n = cc11001100_hook("n", j(e, i, t), "assign"), N = cc11001100_hook("N", [], "assign"), L = cc11001100_hook("L", -1, "assign"), k = cc11001100_hook("k", null, "assign"), U(addEventListener), r = cc11001100_hook("r", o, "assign"), N.push(r), B();
        });
      }(e), function (e, t) {
        I || (function (e, t) {
          var n,
            r = cc11001100_hook("r", P(), "var-init"),
            i = cc11001100_hook("i", R("FCP"), "var-init"),
            o = function (e) {
              "first-contentful-paint" === e.name && (u && u.disconnect(), e.startTime < r.firstHiddenTime && (i.value = cc11001100_hook("i.value", e.startTime, "assign"), i.entries.push(e), n(!0)));
            },
            a = cc11001100_hook("a", window.performance && performance.getEntriesByName && performance.getEntriesByName("first-contentful-paint")[0], "var-init"),
            u = cc11001100_hook("u", a ? null : _("paint", o), "var-init");
          (a || u) && (n = cc11001100_hook("n", j(e, i, t), "assign"), a && o(a), H(function (r) {
            i = cc11001100_hook("i", R("FCP"), "assign"), n = cc11001100_hook("n", j(e, i, t), "assign"), requestAnimationFrame(function () {
              requestAnimationFrame(function () {
                i.value = cc11001100_hook("i.value", performance.now() - r.timeStamp, "assign"), n(!0);
              });
            });
          }));
        }(function (e) {
          A = cc11001100_hook("A", e.value, "assign");
        }), I = cc11001100_hook("I", !0, "assign"));
        var n,
          r = function (t) {
            A > -1 && e(t);
          },
          i = cc11001100_hook("i", R("CLS", 0), "var-init"),
          o = cc11001100_hook("o", 0, "var-init"),
          a = cc11001100_hook("a", [], "var-init"),
          u = function (e) {
            if (!e.hadRecentInput) {
              var t = cc11001100_hook("t", a[0], "var-init"),
                r = cc11001100_hook("r", a[a.length - 1], "var-init");
              o && e.startTime - r.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (o += cc11001100_hook("o", e.value, "assign"), a.push(e)) : (o = cc11001100_hook("o", e.value, "assign"), a = cc11001100_hook("a", [e], "assign")), o > i.value && (i.value = cc11001100_hook("i.value", o, "assign"), i.entries = cc11001100_hook("i.entries", a, "assign"), n());
            }
          },
          s = cc11001100_hook("s", _("layout-shift", u), "var-init");
        s && (n = cc11001100_hook("n", j(r, i, t), "assign"), C(function () {
          s.takeRecords().map(u), n(!0);
        }), H(function () {
          o = cc11001100_hook("o", 0, "assign"), A = cc11001100_hook("A", -1, "assign"), i = cc11001100_hook("i", R("CLS", 0), "assign"), n = cc11001100_hook("n", j(r, i, t), "assign");
        }));
      }(e);
      var t = cc11001100_hook("t", document.createElement("div"), "var-init");
      t.style.height = cc11001100_hook("t.style.height", "0px", "assign"), t.style.width = cc11001100_hook("t.style.width", "0px", "assign"), document.body.appendChild(t), t.click(), document.body.removeChild(t);
    }
    var V,
      W = function (e) {
        return -1 !== (null == e ? void 0 : e.indexOf(".js")) || -1 !== (null == e ? void 0 : e.indexOf(".css")) || -1 !== (null == e ? void 0 : e.indexOf(".html")) || -1 !== (null == e ? void 0 : e.indexOf(".ts"));
      },
      Y = function (e, t) {
        var n = cc11001100_hook("n", null == e ? void 0 : e.split("?")[0], "var-init");
        return !!(null == t ? void 0 : t.some(function (e) {
          return -1 !== (null == n ? void 0 : n.indexOf(e));
        }));
      },
      Q = function (e, t) {
        var n = cc11001100_hook("n", null == e ? void 0 : e.split("?")[0], "var-init");
        return !!(null == t ? void 0 : t.some(function (e) {
          return -1 !== (null == n ? void 0 : n.indexOf(e));
        }));
      },
      ee = cc11001100_hook("ee", new Uint8Array(16), "var-init");
    function te() {
      if (!V && !(V = cc11001100_hook("V", "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto), "assign"))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return V(ee);
    }
    var ne = cc11001100_hook("ne", /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i, "var-init");
    function re(e) {
      cc11001100_hook("e", e, "function-parameter");
      return "string" == typeof e && ne.test(e);
    }
    for (var ie = cc11001100_hook("ie", [], "var-init"), oe = cc11001100_hook("oe", 0, "var-init"); oe < 256; ++oe) ie.push((oe + 256).toString(16).substr(1));
    function ae(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", (e = cc11001100_hook("e", e || {}, "assign")).random || (e.rng || te)(), "var-init");
      if (r[6] = cc11001100_hook("r[6]", 15 & r[6] | 64, "assign"), r[8] = cc11001100_hook("r[8]", 63 & r[8] | 128, "assign"), t) {
        n = cc11001100_hook("n", n || 0, "assign");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < 16; ++i) t[n + i] = cc11001100_hook("t[n + i]", r[i], "assign");
        return t;
      }
      return function (e) {
        var t = cc11001100_hook("t", arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, "var-init"),
          n = cc11001100_hook("n", (ie[e[t + 0]] + ie[e[t + 1]] + ie[e[t + 2]] + ie[e[t + 3]] + "-" + ie[e[t + 4]] + ie[e[t + 5]] + "-" + ie[e[t + 6]] + ie[e[t + 7]] + "-" + ie[e[t + 8]] + ie[e[t + 9]] + "-" + ie[e[t + 10]] + ie[e[t + 11]] + ie[e[t + 12]] + ie[e[t + 13]] + ie[e[t + 14]] + ie[e[t + 15]]).toLowerCase(), "var-init");
        if (!re(n)) throw TypeError("Stringified UUID is invalid");
        return n;
      }(r);
    }
    function ue() {
      return ae().replace(/-/g, "");
    }
    function se(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", (window.performance && window.performance.getEntriesByType instanceof Function && window.performance.getEntriesByType("resource") || []).find(function (t) {
        return -1 !== t.name.indexOf(e);
      }), "var-init");
      if (t) {
        var n = cc11001100_hook("n", G(), "var-init");
        return r({
          size: cc11001100_hook("size", t.transferSize, "object-key-init"),
          spend_time: cc11001100_hook("spend_time", t.duration, "object-key-init"),
          dns: cc11001100_hook("dns", t.domainLookupStart - t.domainLookupEnd, "object-key-init"),
          protocol: cc11001100_hook("protocol", t.nextHopProtocol, "object-key-init")
        }, n);
      }
      return {};
    }
    function ce(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", {
        outerHTML: cc11001100_hook("outerHTML", void 0, "object-key-init"),
        timestamp: cc11001100_hook("timestamp", -1, "object-key-init"),
        XPath: cc11001100_hook("XPath", null, "object-key-init"),
        selector: cc11001100_hook("selector", "", "object-key-init"),
        type: cc11001100_hook("type", "ResourceError", "object-key-init"),
        url: cc11001100_hook("url", "", "object-key-init"),
        baseURI: cc11001100_hook("baseURI", void 0, "object-key-init"),
        tagName: cc11001100_hook("tagName", void 0, "object-key-init")
      }, "var-init");
      if (e.target.tagName) {
        var n = cc11001100_hook("n", e.target ? e.target : e.srcElement, "var-init");
        t.outerHTML = cc11001100_hook("t.outerHTML", (n && n.outerHTML).slice(0, 200), "assign"), t.timestamp = cc11001100_hook("t.timestamp", e.timeStamp || -1, "assign"), t.XPath = cc11001100_hook("t.XPath", function (e) {
          for (var t = cc11001100_hook("t", [], "var-init"); e && e.nodeType === window.Node.ELEMENT_NODE; e = cc11001100_hook("e", e.parentNode, "assign")) {
            var n = cc11001100_hook("n", void 0, "var-init"),
              r = cc11001100_hook("r", 0, "var-init"),
              i = cc11001100_hook("i", !1, "var-init");
            for (n = cc11001100_hook("n", e.previousSibling, "assign"); n; n = cc11001100_hook("n", n.previousSibling, "assign")) n.nodeType !== window.Node.DOCUMENT_TYPE_NODE && n.nodeName === e.nodeName && ++r;
            for (n = cc11001100_hook("n", e.nextSibling, "assign"); n && !i; n = cc11001100_hook("n", n.nextSibling, "assign")) n.nodeName === e.nodeName && (i = cc11001100_hook("i", !0, "assign"));
            var o = cc11001100_hook("o", (e.prefix ? e.prefix + ":" : "") + e.localName, "var-init"),
              a = cc11001100_hook("a", r || i ? "[" + (r + 1) + "]" : "", "var-init");
            t.splice(0, 0, o + a);
          }
          return t.length ? "/" + t.join("/") : null;
        }(n), "assign"), t.selector = cc11001100_hook("t.selector", function (e) {
          for (var t = cc11001100_hook("t", [], "var-init"); e.parentNode;) {
            if (e.id) {
              t.unshift("#" + e.id);
              break;
            }
            if (e === e.ownerDocument.documentElement) t.unshift(e.tagName);else {
              for (var n = cc11001100_hook("n", 1, "var-init"), r = cc11001100_hook("r", e, "var-init"); r.previousElementSibling; r = cc11001100_hook("r", r.previousElementSibling, "assign"), n++);
              t.unshift(e.tagName + ":nth-child(" + n + ")");
            }
            e = cc11001100_hook("e", e.parentNode, "assign");
          }
          return t.join(" > ");
        }(n), "assign"), t.type = cc11001100_hook("t.type", "ResourceError", "assign");
        var r = cc11001100_hook("r", e.target, "var-init");
        if (t.url = cc11001100_hook("t.url", r && r.src || r.href || "", "assign"), t.baseURI = cc11001100_hook("t.baseURI", r && r.baseURI || "", "assign"), t.tagName = cc11001100_hook("t.tagName", r && r.tagName || "", "assign"), t.url && ("string" == typeof t.url || t.url instanceof String)) return t;
      }
    }
    var le = function (e) {
        var t = cc11001100_hook("t", e, "var-init"),
          n = cc11001100_hook("n", t.inputType, "var-init"),
          r = cc11001100_hook("r", void 0 === n ? "" : n, "var-init"),
          i = cc11001100_hook("i", t.target, "var-init");
        if (r) {
          var o = cc11001100_hook("o", i, "var-init"),
            a = cc11001100_hook("a", o.value, "var-init"),
            u = cc11001100_hook("u", o.innerText, "var-init"),
            s = cc11001100_hook("s", o.localName, "var-init"),
            c = cc11001100_hook("c", o.className, "var-init"),
            l = cc11001100_hook("l", o.tagName, "var-init"),
            f = cc11001100_hook("f", {
              type: cc11001100_hook("type", "input", "object-key-init"),
              content: cc11001100_hook("content", ["input", "textarea"].includes(s) ? a : u, "object-key-init"),
              userInputTarget: cc11001100_hook("userInputTarget", i, "object-key-init"),
              tagName: cc11001100_hook("tagName", l, "object-key-init"),
              className: cc11001100_hook("className", c, "object-key-init")
            }, "var-init"),
            d = cc11001100_hook("d", T.get(), "var-init");
          Array.isArray(d) && (i === d[d.length - 1].userInputTarget ? T.replace(f) : T.push(f));
        }
      },
      fe = function (e) {
        var t = cc11001100_hook("t", history[e], "var-init");
        return function () {
          for (var n = cc11001100_hook("n", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < arguments.length; r++) n[r] = cc11001100_hook("n[r]", arguments[r], "assign");
          var i = cc11001100_hook("i", window.location.pathname, "var-init"),
            o = cc11001100_hook("o", t.apply(this, n), "var-init"),
            u = cc11001100_hook("u", new Event(e), "var-init"),
            s = cc11001100_hook("s", a(n, 3), "var-init"),
            c = cc11001100_hook("c", s[0], "var-init"),
            l = cc11001100_hook("l", s[1], "var-init"),
            f = cc11001100_hook("f", s[2], "var-init");
          return u.params = cc11001100_hook("u.params", {
            state: cc11001100_hook("state", c, "object-key-init"),
            title: cc11001100_hook("title", l, "object-key-init"),
            from: cc11001100_hook("from", i, "object-key-init"),
            to: cc11001100_hook("to", f, "object-key-init")
          }, "assign"), window.dispatchEvent(u), o;
        };
      };
    window.history.pushState = cc11001100_hook("window.history.pushState", fe("pushState"), "assign"), window.history.replaceState = cc11001100_hook("window.history.replaceState", fe("replaceState"), "assign");
    var de = cc11001100_hook("de", {}, "var-init"),
      pe = cc11001100_hook("pe", window.TraceKit, "var-init"),
      me = cc11001100_hook("me", [].slice, "var-init"),
      ve = cc11001100_hook("ve", /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|Aggregate|)Error): )?(.*)$/, "var-init");
    function he(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    function ge(e) {
      cc11001100_hook("e", e, "function-parameter");
      return void 0 === e;
    }
    function we(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", t.opts.userActions, "var-init");
      !function (e, t) {
        de.report.subscribe(function (n) {
          if (n && n.stack && n.stack instanceof Array && n.stack.length) {
            n.type = cc11001100_hook("n.type", "Script", "assign");
            var r = cc11001100_hook("r", n.stack[0], "var-init");
            n.url = cc11001100_hook("n.url", r.url || "", "assign"), n.line = cc11001100_hook("n.line", r.line ? 1 * r.line : -1, "assign"), n.col = cc11001100_hook("n.col", r.column ? 1 * r.column : -1, "assign"), n.file_name = cc11001100_hook("n.file_name", r.url || "", "assign"), n.msg = cc11001100_hook("n.msg", n.message || "", "assign"), n.name = cc11001100_hook("n.name", n.name || "", "assign"), delete n.message, n.msg && ("string" == typeof n.msg || n.msg instanceof String) && -1 === n.msg.indexOf("Script error") && (T.push(n), n.actions = cc11001100_hook("n.actions", T.getReportData(), "assign"), e(n, t));
          }
        });
      }(e, t), function (e, t) {
        var n, r;
        n = cc11001100_hook("n", "unhandledrejection", "assign"), r = cc11001100_hook("r", function (n) {
          if (n.reason) {
            var r = cc11001100_hook("r", de.computeStackTrace(n.reason), "var-init");
            if (r.type = cc11001100_hook("r.type", "Script", "assign"), r && r.stack && r.stack instanceof Array && r.stack.length) {
              var i = cc11001100_hook("i", r.stack[0], "var-init");
              r.url = cc11001100_hook("r.url", i.url || "", "assign"), r.line = cc11001100_hook("r.line", i.line ? 1 * i.line : -1, "assign"), r.col = cc11001100_hook("r.col", i.column ? 1 * i.column : -1, "assign"), r.file_name = cc11001100_hook("r.file_name", i.url || "", "assign"), r.msg = cc11001100_hook("r.msg", r.message || "", "assign"), r.name = cc11001100_hook("r.name", r.name || "", "assign"), delete r.message, r.msg && ("string" == typeof r.msg || r.msg instanceof String) && -1 === r.msg.indexOf("Script error") && (T.push(r), e(r, t));
            }
          }
        }, "assign"), window.attachEvent ? window.attachEvent("on" + n, r) : window.addEventListener(n, r, !1);
      }(e, t), n && (E = cc11001100_hook("E", new b(), "assign"), window.addEventListener("replaceState", function (e) {
        var t = cc11001100_hook("t", e.params, "var-init"),
          n = cc11001100_hook("n", void 0 === t ? {} : t, "var-init"),
          r = cc11001100_hook("r", n.from, "var-init"),
          i = cc11001100_hook("i", n.to, "var-init");
        T.push({
          type: cc11001100_hook("type", "replaceState", "object-key-init"),
          from: cc11001100_hook("from", r, "object-key-init"),
          to: cc11001100_hook("to", i, "object-key-init")
        });
      }), window.addEventListener("pushState", function (e) {
        var t = cc11001100_hook("t", e.params, "var-init"),
          n = cc11001100_hook("n", void 0 === t ? {} : t, "var-init"),
          r = cc11001100_hook("r", n.from, "var-init"),
          i = cc11001100_hook("i", n.to, "var-init");
        T.push({
          type: cc11001100_hook("type", "pushState", "object-key-init"),
          from: cc11001100_hook("from", r, "object-key-init"),
          to: cc11001100_hook("to", i, "object-key-init")
        });
      }), window.addEventListener("popstate", function () {
        T.push({
          type: cc11001100_hook("type", "popstate", "object-key-init"),
          to: cc11001100_hook("to", window.location.href, "object-key-init")
        });
      }), function () {
        var e, t;
        window.addEventListener("input", (e = cc11001100_hook("e", le, "assign"), t = cc11001100_hook("t", null, "assign"), function () {
          for (var n = cc11001100_hook("n", this, "var-init"), r = cc11001100_hook("r", [], "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < arguments.length; i++) r[i] = cc11001100_hook("r[i]", arguments[i], "assign");
          t && clearTimeout(t), t = cc11001100_hook("t", setTimeout(function () {
            e.call.apply(e, u([n], a(r), !1));
          }, 200), "assign");
        }), !1);
      }(), window.addEventListener("click", function (e) {
        var t = cc11001100_hook("t", e, "var-init"),
          n = cc11001100_hook("n", t.path, "var-init"),
          r = cc11001100_hook("r", void 0 === n ? [] : n, "var-init"),
          i = cc11001100_hook("i", t.target, "var-init"),
          o = cc11001100_hook("o", t.pointerType, "var-init"),
          a = cc11001100_hook("a", void 0 === o ? "null" : o, "var-init"),
          u = cc11001100_hook("u", t.composedPath, "var-init"),
          s = cc11001100_hook("s", a ? "click" : "jsClick", "var-init"),
          c = cc11001100_hook("c", i, "var-init"),
          l = cc11001100_hook("l", c.outerHTML, "var-init"),
          f = cc11001100_hook("f", c.tagName, "var-init"),
          d = cc11001100_hook("d", c.className, "var-init"),
          p = cc11001100_hook("p", (u && u.apply(e) || r).reduce(function (e, t) {
            var n = cc11001100_hook("n", t.localName, "var-init"),
              r = cc11001100_hook("r", void 0 === n ? "" : n, "var-init"),
              i = cc11001100_hook("i", t.className, "var-init"),
              o = cc11001100_hook("o", void 0 === i ? "" : i, "var-init");
            if ("object" == typeof o && (o = cc11001100_hook("o", (null == o ? void 0 : o.baseVal) || "", "assign")), !r || r.includes("body") || r.includes("html")) return e;
            var a = cc11001100_hook("a", o ? ".".concat(o.replace(/\s+/g, ".")) : "", "var-init");
            return e.push(r + a), e;
          }, []), "var-init");
        T.push({
          type: cc11001100_hook("type", s, "object-key-init"),
          path: cc11001100_hook("path", p, "object-key-init"),
          outerHTML: cc11001100_hook("outerHTML", l, "object-key-init"),
          tagName: cc11001100_hook("tagName", f, "object-key-init"),
          className: cc11001100_hook("className", d, "object-key-init")
        });
      }, !0));
    }
    de.noConflict = cc11001100_hook("de.noConflict", function () {
      return window.TraceKit = cc11001100_hook("window.TraceKit", pe, "assign"), de;
    }, "assign"), de.wrap = cc11001100_hook("de.wrap", function (e) {
      return function () {
        try {
          return e.apply(this, arguments);
        } catch (e) {
          throw de.report(e), e;
        }
      };
    }, "assign"), de.report = cc11001100_hook("de.report", function () {
      var e,
        t,
        n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", null, "var-init"),
        i = cc11001100_hook("i", null, "var-init");
      function o(e, t, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var i = cc11001100_hook("i", null, "var-init");
        if (!t || de.collectWindowErrors) {
          for (var o in n) if (he(n, o)) try {
            n[o](e, t, r);
          } catch (e) {
            i = cc11001100_hook("i", e, "assign");
          }
          if (i) throw i;
        }
      }
      function a(t, n, r, a, s) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("s", s, "function-parameter");
        if (i) de.computeStackTrace.augmentStackTraceWithInitialElement(i, n, r, t), u();else if (s) o(de.computeStackTrace(s), !0, s);else {
          var c,
            l = cc11001100_hook("l", {
              url: cc11001100_hook("url", n, "object-key-init"),
              line: cc11001100_hook("line", r, "object-key-init"),
              column: cc11001100_hook("column", a, "object-key-init")
            }, "var-init"),
            f = cc11001100_hook("f", t, "var-init");
          if ("[object String]" === {}.toString.call(t)) {
            var d = cc11001100_hook("d", t.match(ve), "var-init");
            d && (c = cc11001100_hook("c", d[1], "assign"), f = cc11001100_hook("f", d[2], "assign"));
          }
          l.func = cc11001100_hook("l.func", de.computeStackTrace.guessFunctionName(l.url, l.line), "assign"), l.context = cc11001100_hook("l.context", de.computeStackTrace.gatherContext(l.url, l.line), "assign"), o({
            name: cc11001100_hook("name", c, "object-key-init"),
            message: cc11001100_hook("message", f, "object-key-init"),
            mode: cc11001100_hook("mode", "onerror", "object-key-init"),
            stack: cc11001100_hook("stack", [l], "object-key-init")
          }, !0, null);
        }
        return !!e && e.apply(this, arguments);
      }
      function u() {
        var e = cc11001100_hook("e", i, "var-init"),
          t = cc11001100_hook("t", r, "var-init");
        i = cc11001100_hook("i", null, "assign"), r = cc11001100_hook("r", null, "assign"), o(e, !1, t);
      }
      function s(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (i) {
          if (r === e) return;
          u();
        }
        var t = cc11001100_hook("t", de.computeStackTrace(e), "var-init");
        throw i = cc11001100_hook("i", t, "assign"), r = cc11001100_hook("r", e, "assign"), setTimeout(function () {
          r === e && u();
        }, t.incomplete ? 2e3 : 0), e;
      }
      return s.subscribe = cc11001100_hook("s.subscribe", function (r) {
        !0 !== t && (e = cc11001100_hook("e", window.onerror, "assign"), window.onerror = cc11001100_hook("window.onerror", a, "assign"), t = cc11001100_hook("t", !0, "assign")), n.push(r);
      }, "assign"), s.unsubscribe = cc11001100_hook("s.unsubscribe", function (r) {
        for (var i = cc11001100_hook("i", n.length - 1, "var-init"); i >= 0; --i) n[i] === r && n.splice(i, 1);
        0 === n.length && (window.onerror = cc11001100_hook("window.onerror", e, "assign"), t = cc11001100_hook("t", !1, "assign"));
      }, "assign"), s;
    }(), "assign"), de.computeStackTrace = cc11001100_hook("de.computeStackTrace", function () {
      var e = cc11001100_hook("e", {}, "var-init");
      function t(t) {
        cc11001100_hook("t", t, "function-parameter");
        if ("string" != typeof t) return [];
        if (!he(e, t)) {
          var n = cc11001100_hook("n", "", "var-init"),
            r = cc11001100_hook("r", "", "var-init");
          try {
            r = cc11001100_hook("r", window.document.domain, "assign");
          } catch (e) {}
          var i = cc11001100_hook("i", /(.*)\:\/\/([^:\/]+)([:\d]*)\/{0,1}([\s\S]*)/.exec(t), "var-init");
          i && i[2] === r && (n = cc11001100_hook("n", function (e) {
            if (!de.remoteFetching) return "";
            try {
              var t = cc11001100_hook("t", function () {
                try {
                  return new window.XMLHttpRequest();
                } catch (e) {
                  return new window.ActiveXObject("Microsoft.XMLHTTP");
                }
              }(), "var-init");
              return t.open("GET", e, !1), t.send(""), t.responseText;
            } catch (e) {
              return "";
            }
          }(t), "assign")), e[t] = cc11001100_hook("e[t]", n ? n.split("\n") : [], "assign");
        }
        return e[t];
      }
      function n(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var r,
          i = cc11001100_hook("i", /function ([^(]*)\(([^)]*)\)/, "var-init"),
          o = cc11001100_hook("o", /['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/, "var-init"),
          a = cc11001100_hook("a", "", "var-init"),
          u = cc11001100_hook("u", t(e), "var-init");
        if (!u.length) return "?";
        for (var s = cc11001100_hook("s", 0, "var-init"); s < 10; ++s) if (!ge(a = cc11001100_hook("a", u[n - s] + a, "assign"))) {
          if (r = cc11001100_hook("r", o.exec(a), "assign")) return r[1];
          if (r = cc11001100_hook("r", i.exec(a), "assign")) return r[1];
        }
        return "?";
      }
      function r(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        var r = cc11001100_hook("r", t(e), "var-init");
        if (!r.length) return null;
        var i = cc11001100_hook("i", [], "var-init"),
          o = cc11001100_hook("o", Math.floor(de.linesOfContext / 2), "var-init"),
          a = cc11001100_hook("a", o + de.linesOfContext % 2, "var-init"),
          u = cc11001100_hook("u", Math.max(0, n - o - 1), "var-init"),
          s = cc11001100_hook("s", Math.min(r.length, n + a - 1), "var-init");
        n -= cc11001100_hook("n", 1, "assign");
        for (var c = cc11001100_hook("c", u, "var-init"); c < s; ++c) ge(r[c]) || i.push(r[c].length < 100 ? r[c] : r[c].substr(0, 100) + "...");
        return i.length > 0 ? i : null;
      }
      function i(e) {
        cc11001100_hook("e", e, "function-parameter");
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g, "\\$&");
      }
      function o(e) {
        cc11001100_hook("e", e, "function-parameter");
        return i(e).replace("<", "(?:<|&lt;)").replace(">", "(?:>|&gt;)").replace("&", "(?:&|&amp;)").replace('"', '(?:"|&quot;)').replace(/\s+/g, "\\s+");
      }
      function a(e, n) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        for (var r, i, o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", n.length, "var-init"); o < a; ++o) if ((r = cc11001100_hook("r", t(n[o]), "assign")).length && (r = cc11001100_hook("r", r.join("\n"), "assign"), i = cc11001100_hook("i", e.exec(r), "assign"))) return {
          url: cc11001100_hook("url", n[o], "object-key-init"),
          line: cc11001100_hook("line", r.substring(0, i.index).split("\n").length, "object-key-init"),
          column: cc11001100_hook("column", i.index - r.lastIndexOf("\n", i.index) - 1, "object-key-init")
        };
        return null;
      }
      function u(e, n, r) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        var o,
          a = cc11001100_hook("a", t(n), "var-init"),
          u = cc11001100_hook("u", new RegExp("\\b" + i(e) + "\\b"), "var-init");
        return r -= cc11001100_hook("r", 1, "assign"), a && a.length > r && (o = cc11001100_hook("o", u.exec(a[r]), "assign")) ? o.index : null;
      }
      function s(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (!ge(window && window.document)) {
          for (var t, n, r, u, s = cc11001100_hook("s", [window.location.href], "var-init"), c = cc11001100_hook("c", window.document.getElementsByTagName("script"), "var-init"), l = cc11001100_hook("l", "" + e, "var-init"), f = cc11001100_hook("f", 0, "var-init"); f < c.length; ++f) {
            var d = cc11001100_hook("d", c[f], "var-init");
            d.src && s.push(d.src);
          }
          if (r = cc11001100_hook("r", /^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l), "assign")) {
            var p = cc11001100_hook("p", r[1] ? "\\s+" + r[1] : "", "var-init"),
              m = cc11001100_hook("m", r[2].split(",").join("\\s*,\\s*"), "var-init");
            t = cc11001100_hook("t", i(r[3]).replace(/;$/, ";?"), "assign"), n = cc11001100_hook("n", new RegExp("function" + p + "\\s*\\(\\s*" + m + "\\s*\\)\\s*{\\s*" + t + "\\s*}"), "assign");
          } else n = cc11001100_hook("n", new RegExp(i(l).replace(/\s+/g, "\\s+")), "assign");
          if (u = cc11001100_hook("u", a(n, s), "assign")) return u;
          if (r = cc11001100_hook("r", /^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/.exec(l), "assign")) {
            var v = cc11001100_hook("v", r[1], "var-init");
            if (t = cc11001100_hook("t", o(r[2]), "assign"), u = cc11001100_hook("u", a(n = cc11001100_hook("n", new RegExp("on" + v + "=[\\'\"]\\s*" + t + "\\s*[\\'\"]", "i"), "assign"), s[0]), "assign")) return u;
            if (u = cc11001100_hook("u", a(n = cc11001100_hook("n", new RegExp(t), "assign"), s), "assign")) return u;
          }
          return null;
        }
      }
      function c(e) {
        cc11001100_hook("e", e, "function-parameter");
        if (!e.stack) return null;
        for (var t, i, o, a = cc11001100_hook("a", /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, "var-init"), s = cc11001100_hook("s", /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i, "var-init"), c = cc11001100_hook("c", /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, "var-init"), l = cc11001100_hook("l", /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, "var-init"), f = cc11001100_hook("f", /\((\S*)(?::(\d+))(?::(\d+))\)/, "var-init"), d = cc11001100_hook("d", e.stack.split("\n"), "var-init"), p = cc11001100_hook("p", [], "var-init"), m = cc11001100_hook("m", /^(.*) is undefined$/.exec(e.message), "var-init"), v = cc11001100_hook("v", 0, "var-init"), h = cc11001100_hook("h", d.length, "var-init"); v < h; ++v) {
          if (i = cc11001100_hook("i", a.exec(d[v]), "assign")) {
            var g = cc11001100_hook("g", i[2] && 0 === i[2].indexOf("native"), "var-init");
            i[2] && 0 === i[2].indexOf("eval") && (t = cc11001100_hook("t", f.exec(i[2]), "assign")) && (i[2] = cc11001100_hook("i[2]", t[1], "assign"), i[3] = cc11001100_hook("i[3]", t[2], "assign"), i[4] = cc11001100_hook("i[4]", t[3], "assign")), o = cc11001100_hook("o", {
              url: cc11001100_hook("url", g ? null : i[2], "object-key-init"),
              func: cc11001100_hook("func", i[1] || "?", "object-key-init"),
              args: cc11001100_hook("args", g ? [i[2]] : [], "object-key-init"),
              line: cc11001100_hook("line", i[3] ? +i[3] : null, "object-key-init"),
              column: cc11001100_hook("column", i[4] ? +i[4] : null, "object-key-init")
            }, "assign");
          } else if (i = cc11001100_hook("i", c.exec(d[v]), "assign")) o = cc11001100_hook("o", {
            url: cc11001100_hook("url", i[2], "object-key-init"),
            func: cc11001100_hook("func", i[1] || "?", "object-key-init"),
            args: cc11001100_hook("args", [], "object-key-init"),
            line: cc11001100_hook("line", +i[3], "object-key-init"),
            column: cc11001100_hook("column", i[4] ? +i[4] : null, "object-key-init")
          }, "assign");else {
            if (!(i = cc11001100_hook("i", s.exec(d[v]), "assign"))) continue;
            i[3] && i[3].indexOf(" > eval") > -1 && (t = cc11001100_hook("t", l.exec(i[3]), "assign")) ? (i[3] = cc11001100_hook("i[3]", t[1], "assign"), i[4] = cc11001100_hook("i[4]", t[2], "assign"), i[5] = cc11001100_hook("i[5]", null, "assign")) : 0 !== v || i[5] || ge(e.columnNumber) || (p[0].column = cc11001100_hook("p[0].column", e.columnNumber + 1, "assign")), o = cc11001100_hook("o", {
              url: cc11001100_hook("url", i[3], "object-key-init"),
              func: cc11001100_hook("func", i[1] || "?", "object-key-init"),
              args: cc11001100_hook("args", i[2] ? i[2].split(",") : [], "object-key-init"),
              line: cc11001100_hook("line", i[4] ? +i[4] : null, "object-key-init"),
              column: cc11001100_hook("column", i[5] ? +i[5] : null, "object-key-init")
            }, "assign");
          }
          !o.func && o.line && (o.func = cc11001100_hook("o.func", n(o.url, o.line), "assign")), o.context = cc11001100_hook("o.context", o.line ? r(o.url, o.line) : null, "assign"), p.push(o);
        }
        return p.length ? (p[0] && p[0].line && !p[0].column && m && (p[0].column = cc11001100_hook("p[0].column", u(m[1], p[0].url, p[0].line), "assign")), {
          mode: cc11001100_hook("mode", "stack", "object-key-init"),
          name: cc11001100_hook("name", e.name, "object-key-init"),
          message: cc11001100_hook("message", e.message, "object-key-init"),
          stack: cc11001100_hook("stack", p, "object-key-init")
        }) : null;
      }
      function l(e, t, i, o) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        var a = cc11001100_hook("a", {
          url: cc11001100_hook("url", t, "object-key-init"),
          line: cc11001100_hook("line", i, "object-key-init")
        }, "var-init");
        if (a.url && a.line) {
          e.incomplete = cc11001100_hook("e.incomplete", !1, "assign"), a.func || (a.func = cc11001100_hook("a.func", n(a.url, a.line), "assign")), a.context || (a.context = cc11001100_hook("a.context", r(a.url, a.line), "assign"));
          var s = cc11001100_hook("s", / '([^']+)' /.exec(o), "var-init");
          if (s && (a.column = cc11001100_hook("a.column", u(s[1], a.url, a.line), "assign")), e.stack.length > 0 && e.stack[0].url === a.url) {
            if (e.stack[0].line === a.line) return !1;
            if (!e.stack[0].line && e.stack[0].func === a.func) return e.stack[0].line = cc11001100_hook("e.stack[0].line", a.line, "assign"), e.stack[0].context = cc11001100_hook("e.stack[0].context", a.context, "assign"), !1;
          }
          return e.stack.unshift(a), e.partial = cc11001100_hook("e.partial", !0, "assign"), !0;
        }
        return e.incomplete = cc11001100_hook("e.incomplete", !0, "assign"), !1;
      }
      function f(e, t) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        for (var r, i, o, a = cc11001100_hook("a", /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, "var-init"), c = cc11001100_hook("c", [], "var-init"), p = cc11001100_hook("p", {}, "var-init"), m = cc11001100_hook("m", !1, "var-init"), v = cc11001100_hook("v", f.caller, "var-init"); v && !m; v = cc11001100_hook("v", v.caller, "assign")) if (v !== d && v !== de.report) {
          if (i = cc11001100_hook("i", {
            url: cc11001100_hook("url", null, "object-key-init"),
            func: cc11001100_hook("func", "?", "object-key-init"),
            args: cc11001100_hook("args", [], "object-key-init"),
            line: cc11001100_hook("line", null, "object-key-init"),
            column: cc11001100_hook("column", null, "object-key-init")
          }, "assign"), v.name ? i.func = cc11001100_hook("i.func", v.name, "assign") : (r = cc11001100_hook("r", a.exec(v.toString()), "assign")) && (i.func = cc11001100_hook("i.func", r[1], "assign")), void 0 === i.func) try {
            i.func = cc11001100_hook("i.func", r.input.substring(0, r.input.indexOf("{")), "assign");
          } catch (e) {}
          if (o = cc11001100_hook("o", s(v), "assign")) {
            i.url = cc11001100_hook("i.url", o.url, "assign"), i.line = cc11001100_hook("i.line", o.line, "assign"), "?" === i.func && (i.func = cc11001100_hook("i.func", n(i.url, i.line), "assign"));
            var h = cc11001100_hook("h", / '([^']+)' /.exec(e.message || e.description), "var-init");
            h && (i.column = cc11001100_hook("i.column", u(h[1], o.url, o.line), "assign"));
          }
          p["" + v] ? m = cc11001100_hook("m", !0, "assign") : p["" + v] = cc11001100_hook("p[\"\" + v]", !0, "assign"), c.push(i);
        }
        t && c.splice(0, t);
        var g = cc11001100_hook("g", {
          mode: cc11001100_hook("mode", "callers", "object-key-init"),
          name: cc11001100_hook("name", e.name, "object-key-init"),
          message: cc11001100_hook("message", e.message, "object-key-init"),
          stack: cc11001100_hook("stack", c, "object-key-init")
        }, "var-init");
        return l(g, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description), g;
      }
      function d(e, i) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        var u = cc11001100_hook("u", null, "var-init");
        i = cc11001100_hook("i", null == i ? 0 : +i, "assign");
        try {
          if (u = cc11001100_hook("u", function (e) {
            var t = cc11001100_hook("t", e.stacktrace, "var-init");
            if (t) {
              for (var i, o = cc11001100_hook("o", / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, "var-init"), a = cc11001100_hook("a", / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, "var-init"), u = cc11001100_hook("u", t.split("\n"), "var-init"), s = cc11001100_hook("s", [], "var-init"), c = cc11001100_hook("c", 0, "var-init"); c < u.length; c += cc11001100_hook("c", 2, "assign")) {
                var l = cc11001100_hook("l", null, "var-init");
                if ((i = cc11001100_hook("i", o.exec(u[c]), "assign")) ? l = cc11001100_hook("l", {
                  url: cc11001100_hook("url", i[2], "object-key-init"),
                  line: cc11001100_hook("line", +i[1], "object-key-init"),
                  column: cc11001100_hook("column", null, "object-key-init"),
                  func: cc11001100_hook("func", i[3], "object-key-init"),
                  args: cc11001100_hook("args", [], "object-key-init")
                }, "assign") : (i = cc11001100_hook("i", a.exec(u[c]), "assign")) && (l = cc11001100_hook("l", {
                  url: cc11001100_hook("url", i[6], "object-key-init"),
                  line: cc11001100_hook("line", +i[1], "object-key-init"),
                  column: cc11001100_hook("column", +i[2], "object-key-init"),
                  func: cc11001100_hook("func", i[3] || i[4], "object-key-init"),
                  args: cc11001100_hook("args", i[5] ? i[5].split(",") : [], "object-key-init")
                }, "assign")), l) {
                  if (!l.func && l.line && (l.func = cc11001100_hook("l.func", n(l.url, l.line), "assign")), l.line) try {
                    l.context = cc11001100_hook("l.context", r(l.url, l.line), "assign");
                  } catch (e) {}
                  l.context || (l.context = cc11001100_hook("l.context", [u[c + 1]], "assign")), s.push(l);
                }
              }
              return s.length ? {
                mode: cc11001100_hook("mode", "stacktrace", "object-key-init"),
                name: cc11001100_hook("name", e.name, "object-key-init"),
                message: cc11001100_hook("message", e.message, "object-key-init"),
                stack: cc11001100_hook("stack", s, "object-key-init")
              } : null;
            }
          }(e), "assign"), u) return u;
        } catch (e) {}
        try {
          if (u = cc11001100_hook("u", c(e), "assign")) return u;
        } catch (e) {}
        try {
          if (u = cc11001100_hook("u", function (e) {
            var i = cc11001100_hook("i", e.message.split("\n"), "var-init");
            if (i.length < 4) return null;
            var u,
              s = cc11001100_hook("s", /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, "var-init"),
              c = cc11001100_hook("c", /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i, "var-init"),
              l = cc11001100_hook("l", /^\s*Line (\d+) of function script\s*$/i, "var-init"),
              f = cc11001100_hook("f", [], "var-init"),
              d = cc11001100_hook("d", window && window.document && window.document.getElementsByTagName("script"), "var-init"),
              p = cc11001100_hook("p", [], "var-init");
            for (var m in d) he(d, m) && !d[m].src && p.push(d[m]);
            for (var v = cc11001100_hook("v", 2, "var-init"); v < i.length; v += cc11001100_hook("v", 2, "assign")) {
              var h = cc11001100_hook("h", null, "var-init");
              if (u = cc11001100_hook("u", s.exec(i[v]), "assign")) h = cc11001100_hook("h", {
                url: cc11001100_hook("url", u[2], "object-key-init"),
                func: cc11001100_hook("func", u[3], "object-key-init"),
                args: cc11001100_hook("args", [], "object-key-init"),
                line: cc11001100_hook("line", +u[1], "object-key-init"),
                column: cc11001100_hook("column", null, "object-key-init")
              }, "assign");else if (u = cc11001100_hook("u", c.exec(i[v]), "assign")) {
                h = cc11001100_hook("h", {
                  url: cc11001100_hook("url", u[3], "object-key-init"),
                  func: cc11001100_hook("func", u[4], "object-key-init"),
                  args: cc11001100_hook("args", [], "object-key-init"),
                  line: cc11001100_hook("line", +u[1], "object-key-init"),
                  column: cc11001100_hook("column", null, "object-key-init")
                }, "assign");
                var g = cc11001100_hook("g", +u[1], "var-init"),
                  w = cc11001100_hook("w", p[u[2] - 1], "var-init");
                if (w) {
                  var y = cc11001100_hook("y", t(h.url), "var-init");
                  if (y) {
                    var S = cc11001100_hook("S", (y = cc11001100_hook("y", y.join("\n"), "assign")).indexOf(w.innerText), "var-init");
                    S >= 0 && (h.line = cc11001100_hook("h.line", g + y.substring(0, S).split("\n").length, "assign"));
                  }
                }
              } else if (u = cc11001100_hook("u", l.exec(i[v]), "assign")) {
                var b = cc11001100_hook("b", window.location.href.replace(/#.*$/, ""), "var-init"),
                  E = cc11001100_hook("E", a(new RegExp(o(i[v + 1])), [b]), "var-init");
                h = cc11001100_hook("h", {
                  url: cc11001100_hook("url", b, "object-key-init"),
                  func: cc11001100_hook("func", "", "object-key-init"),
                  args: cc11001100_hook("args", [], "object-key-init"),
                  line: cc11001100_hook("line", E ? E.line : u[1], "object-key-init"),
                  column: cc11001100_hook("column", null, "object-key-init")
                }, "assign");
              }
              if (h) {
                h.func || (h.func = cc11001100_hook("h.func", n(h.url, h.line), "assign"));
                var x = cc11001100_hook("x", r(h.url, h.line), "var-init"),
                  T = cc11001100_hook("T", x ? x[Math.floor(x.length / 2)] : null, "var-init");
                x && T.replace(/^\s*/, "") === i[v + 1].replace(/^\s*/, "") ? h.context = cc11001100_hook("h.context", x, "assign") : h.context = cc11001100_hook("h.context", [i[v + 1]], "assign"), f.push(h);
              }
            }
            return f.length ? {
              mode: cc11001100_hook("mode", "multiline", "object-key-init"),
              name: cc11001100_hook("name", e.name, "object-key-init"),
              message: cc11001100_hook("message", i[0], "object-key-init"),
              stack: cc11001100_hook("stack", f, "object-key-init")
            } : null;
          }(e), "assign"), u) return u;
        } catch (e) {}
        try {
          if (u = cc11001100_hook("u", f(e, i + 1), "assign")) return u;
        } catch (e) {}
        return {
          name: cc11001100_hook("name", e.name, "object-key-init"),
          message: cc11001100_hook("message", e.message, "object-key-init"),
          mode: cc11001100_hook("mode", "failed", "object-key-init")
        };
      }
      return d.augmentStackTraceWithInitialElement = cc11001100_hook("d.augmentStackTraceWithInitialElement", l, "assign"), d.computeStackTraceFromStackProp = cc11001100_hook("d.computeStackTraceFromStackProp", c, "assign"), d.guessFunctionName = cc11001100_hook("d.guessFunctionName", n, "assign"), d.gatherContext = cc11001100_hook("d.gatherContext", r, "assign"), d.ofCaller = cc11001100_hook("d.ofCaller", function (e) {
        e = cc11001100_hook("e", 1 + (null == e ? 0 : +e), "assign");
        try {
          throw new Error();
        } catch (t) {
          return d(t, e + 1);
        }
      }, "assign"), d.getSource = cc11001100_hook("d.getSource", t, "assign"), d;
    }(), "assign"), de.extendToAsynchronousCallbacks = cc11001100_hook("de.extendToAsynchronousCallbacks", function () {
      var e = function (e) {
        var t = cc11001100_hook("t", window[e], "var-init");
        window[e] = cc11001100_hook("window[e]", function () {
          var e = cc11001100_hook("e", me.call(arguments), "var-init"),
            n = cc11001100_hook("n", e[0], "var-init");
          return "function" == typeof n && (e[0] = cc11001100_hook("e[0]", de.wrap(n), "assign")), t.apply ? t.apply(this, e) : t(e[0], e[1]);
        }, "assign");
      };
      e("setTimeout"), e("setInterval");
    }, "assign"), de.remoteFetching || (de.remoteFetching = cc11001100_hook("de.remoteFetching", !0, "assign")), de.collectWindowErrors || (de.collectWindowErrors = cc11001100_hook("de.collectWindowErrors", !0, "assign")), (!de.linesOfContext || de.linesOfContext < 1) && (de.linesOfContext = cc11001100_hook("de.linesOfContext", 11, "assign"));
    function ye(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", e.trace, "var-init"),
        n = cc11001100_hook("n", e.performance, "var-init"),
        i = cc11001100_hook("i", e.resourceError, "var-init"),
        o = cc11001100_hook("o", e.runtimeError, "var-init"),
        a = cc11001100_hook("a", e.request, "var-init"),
        u = cc11001100_hook("u", e.common, "var-init");
      if (n) {
        var s = function () {
          var t = cc11001100_hook("t", Z(), "var-init"),
            n = cc11001100_hook("n", function () {
              var e = cc11001100_hook("e", {
                usedJSHeapSize: cc11001100_hook("usedJSHeapSize", -1, "object-key-init"),
                totalJSHeapSize: cc11001100_hook("totalJSHeapSize", -1, "object-key-init"),
                jsHeapSizeLimit: cc11001100_hook("jsHeapSizeLimit", -1, "object-key-init")
              }, "var-init");
              if (window.performance) {
                var t = cc11001100_hook("t", null === performance || void 0 === performance ? void 0 : performance.memory, "var-init");
                t && (e = cc11001100_hook("e", t, "assign"));
              }
              return {
                memory: {
                  usedJSHeapSize: cc11001100_hook("usedJSHeapSize", null == e ? void 0 : e.usedJSHeapSize, "object-key-init"),
                  totalJSHeapSize: cc11001100_hook("totalJSHeapSize", null == e ? void 0 : e.totalJSHeapSize, "object-key-init"),
                  jsHeapSizeLimit: cc11001100_hook("jsHeapSizeLimit", null == e ? void 0 : e.jsHeapSizeLimit, "object-key-init")
                }
              };
            }(), "var-init");
          S(r(r({}, t), n), r({
            opts: cc11001100_hook("opts", e, "object-key-init")
          }, u)), K(S), (null == t ? void 0 : t.load) > 8e3 && function (e, t) {
            var n = cc11001100_hook("n", window.performance && window.performance.getEntriesByType instanceof Function && window.performance.getEntriesByType("resource") || [], "var-init"),
              i = cc11001100_hook("i", [], "var-init");
            if (n.forEach(function (e) {
              var t = cc11001100_hook("t", G(), "var-init"),
                n = cc11001100_hook("n", r({
                  size: cc11001100_hook("size", e.transferSize, "object-key-init"),
                  spend_time: cc11001100_hook("spend_time", e.duration, "object-key-init"),
                  dns: cc11001100_hook("dns", e.domainLookupStart - e.domainLookupEnd, "object-key-init"),
                  protocol: cc11001100_hook("protocol", e.nextHopProtocol, "object-key-init"),
                  name: cc11001100_hook("name", e.name, "object-key-init")
                }, t), "var-init");
              i.push(n);
            }), i.length) {
              var o = cc11001100_hook("o", Z(), "var-init");
              e(r(r({
                res_data: cc11001100_hook("res_data", i, "object-key-init"),
                resources_num: cc11001100_hook("resources_num", n.length, "object-key-init")
              }, o), {
                type: cc11001100_hook("type", "slowPage", "object-key-init")
              }), t);
            }
          }(S, r({
            opts: cc11001100_hook("opts", e, "object-key-init")
          }, u));
        };
        "complete" !== document.readyState ? window.addEventListener("load", function () {
          s();
        }) : s();
      }
      i && (window.__RESOURCEERROR__ && window.__RESOURCEERROR__.length && window.__RESOURCEERROR__.forEach(function (t) {
        var n = cc11001100_hook("n", ce(t), "var-init");
        n && S(n, r({
          opts: cc11001100_hook("opts", e, "object-key-init")
        }, u));
      }), window.addEventListener("error", function (t) {
        var n = cc11001100_hook("n", ce(t), "var-init");
        n && (T.push(n), S(n, r({
          opts: cc11001100_hook("opts", e, "object-key-init")
        }, u)));
      }, !0)), a && function (e, t, n) {
        var i,
          o = cc11001100_hook("o", r({
            hostFilter: cc11001100_hook("hostFilter", ["zhihu-web-analytics.zhihu.com/api/v2", "apm.zhihu.com/collector/apm"], "object-key-init")
          }, n), "var-init");
        !function () {
          if (window.XMLHttpRequest) {
            var n = cc11001100_hook("n", window.XMLHttpRequest.prototype.open, "var-init");
            window.XMLHttpRequest.prototype.open = cc11001100_hook("window.XMLHttpRequest.prototype.open", function (i, a, u) {
              var s = cc11001100_hook("s", this, "var-init"),
                c = cc11001100_hook("c", [].slice.call(arguments), "var-init"),
                l = cc11001100_hook("l", s.onreadystatechange || function () {}, "var-init"),
                f = cc11001100_hook("f", {
                  url: cc11001100_hook("url", a || "", "object-key-init"),
                  method: cc11001100_hook("method", i || "", "object-key-init"),
                  filter: cc11001100_hook("filter", !1, "object-key-init"),
                  startTime: cc11001100_hook("startTime", -1, "object-key-init"),
                  trace_id: cc11001100_hook("trace_id", o.trace ? ue() : "", "object-key-init"),
                  endTime: cc11001100_hook("endTime", -1, "object-key-init"),
                  time: cc11001100_hook("time", -1, "object-key-init"),
                  status: cc11001100_hook("status", -1, "object-key-init"),
                  statusText: cc11001100_hook("statusText", "", "object-key-init"),
                  response: {}
                }, "var-init");
              return s.addEventListener("readystatechange", function () {
                var n, i, a, u, d;
                if (f.url = cc11001100_hook("f.url", c[1], "assign"), -1 === o.hostFilter.findIndex(function (e) {
                  return -1 !== f.url.indexOf(e);
                })) {
                  if (0 === s.readyState) ;else if (1 === s.readyState) {
                    if (f.filter = cc11001100_hook("f.filter", !0, "assign"), f.url && ("string" == typeof f.url || f.url instanceof String)) {
                      f.filter = cc11001100_hook("f.filter", !1, "assign"), f.startTime = cc11001100_hook("f.startTime", +new Date(), "assign");
                      var p = cc11001100_hook("p", !W(f.url), "var-init");
                      (null === (n = cc11001100_hook("n", o.trace, "assign")) || void 0 === n ? void 0 : n.open) && p && Y(f.url, null === (i = cc11001100_hook("i", o.trace, "assign")) || void 0 === i ? void 0 : i.apiList) && !Q(f.url, null === (a = cc11001100_hook("a", o.trace, "assign")) || void 0 === a ? void 0 : a.ignoreList) && s.setRequestHeader("X-B3-Traceid", f.trace_id);
                    }
                  } else if (2 === s.readyState) ;else if (3 === s.readyState) ;else if (4 === s.readyState && !f.filter) {
                    var m = cc11001100_hook("m", !1, "var-init"),
                      v = cc11001100_hook("v", "reqSuccess", "var-init");
                    f.endTime = cc11001100_hook("f.endTime", +new Date(), "assign"), f.time = cc11001100_hook("f.time", f.endTime - (f.startTime || 0), "assign"), f.status = cc11001100_hook("f.status", s.status, "assign"), f.statusText = cc11001100_hook("f.statusText", s.statusText, "assign"), f.response = cc11001100_hook("f.response", s.response.length > 2e3 ? s.response.substr(0, 2e3) : s.response, "assign");
                    var h = cc11001100_hook("h", s.status >= 200 && s.status < 300 || 304 === s.status, "var-init"),
                      g = cc11001100_hook("g", null === (u = cc11001100_hook("u", null == f ? void 0 : f.url, "assign")) || void 0 === u ? void 0 : u.split("?")[0], "var-init"),
                      w = cc11001100_hook("w", null == f ? void 0 : f.method, "var-init"),
                      y = cc11001100_hook("y", null === (d = cc11001100_hook("d", null == f ? void 0 : f.url, "assign")) || void 0 === d ? void 0 : d.split("?")[1], "var-init");
                    f.time >= 3e3 && h ? (m = cc11001100_hook("m", !0, "assign"), v = cc11001100_hook("v", "reqPerf", "assign")) : h || (m = cc11001100_hook("m", !0, "assign"), v = cc11001100_hook("v", "reqError", "assign"));
                    var S = cc11001100_hook("S", r(r({
                      type: cc11001100_hook("type", v, "object-key-init"),
                      request: cc11001100_hook("request", y || "", "object-key-init"),
                      elapsed_time: cc11001100_hook("elapsed_time", f.time, "object-key-init"),
                      method: cc11001100_hook("method", w || "GET", "object-key-init"),
                      req_url: cc11001100_hook("req_url", g || "未知", "object-key-init"),
                      response: cc11001100_hook("response", JSON.stringify(f.response) || "", "object-key-init"),
                      status: cc11001100_hook("status", f.status, "object-key-init"),
                      statusText: cc11001100_hook("statusText", f.statusText, "object-key-init")
                    }, se(f.url)), {
                      trace_id: cc11001100_hook("trace_id", f.trace_id, "object-key-init")
                    }), "var-init");
                    T.push(S), m && e(S, t);
                  }
                  return l.apply(s, arguments);
                }
              }), n.apply(s, arguments);
            }, "assign");
          }
        }(), i = cc11001100_hook("i", fetch, "assign"), Object.defineProperty(window, "fetch", {
          configurable: cc11001100_hook("configurable", !0, "object-key-init"),
          enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
          get: function () {
            return function (n, a) {
              var u,
                s,
                c,
                l,
                f = cc11001100_hook("f", !1, "var-init"),
                d = cc11001100_hook("d", "reqSuccess", "var-init"),
                p = cc11001100_hook("p", Date.now(), "var-init"),
                m = cc11001100_hook("m", o.trace ? ue() : "", "var-init"),
                v = cc11001100_hook("v", !W(n), "var-init");
              return (null === (u = cc11001100_hook("u", o.trace, "assign")) || void 0 === u ? void 0 : u.open) && v && Y(n, null === (s = cc11001100_hook("s", o.trace, "assign")) || void 0 === s ? void 0 : s.apiList) && !Q(n, null === (c = cc11001100_hook("c", o.trace, "assign")) || void 0 === c ? void 0 : c.ignoreList) && (a ? a.headers = cc11001100_hook("a.headers", r(r({}, null == a ? void 0 : a.headers), {
                "X-B3-Traceid": cc11001100_hook("X-B3-Traceid", m, "object-key-init")
              }), "assign") : a = cc11001100_hook("a", {
                headers: {
                  "X-B3-Traceid": cc11001100_hook("X-B3-Traceid", m, "object-key-init")
                }
              }, "assign")), new Promise(function (o, u) {
                i(n, r({}, a)).then(function (n) {
                  var i,
                    u,
                    s = cc11001100_hook("s", Date.now() - p, "var-init"),
                    c = cc11001100_hook("c", n.status >= 200 && n.status < 300 || 304 === n.status, "var-init"),
                    v = cc11001100_hook("v", null === (i = cc11001100_hook("i", null == n ? void 0 : n.url, "assign")) || void 0 === i ? void 0 : i.split("?")[0], "var-init"),
                    h = cc11001100_hook("h", null === (u = cc11001100_hook("u", null == n ? void 0 : n.url, "assign")) || void 0 === u ? void 0 : u.split("?")[1], "var-init"),
                    g = cc11001100_hook("g", null == a ? void 0 : a.method, "var-init");
                  g && "GET" !== (null == g ? void 0 : g.toUpperCase()) && (h = cc11001100_hook("h", JSON.stringify(null == a ? void 0 : a.body), "assign"));
                  var w = cc11001100_hook("w", n.clone(), "var-init");
                  s >= 3e3 && c ? (f = cc11001100_hook("f", !0, "assign"), d = cc11001100_hook("d", "reqPerf", "assign")) : c || (f = cc11001100_hook("f", !0, "assign"), d = cc11001100_hook("d", "reqError", "assign")), l = cc11001100_hook("l", r(r({
                    type: cc11001100_hook("type", d, "object-key-init"),
                    request: cc11001100_hook("request", h || "", "object-key-init"),
                    elapsed_time: cc11001100_hook("elapsed_time", s, "object-key-init"),
                    req_url: cc11001100_hook("req_url", v, "object-key-init"),
                    method: cc11001100_hook("method", g || "GET", "object-key-init"),
                    response: cc11001100_hook("response", JSON.stringify(w.body) || "", "object-key-init"),
                    status: cc11001100_hook("status", n.status, "object-key-init"),
                    statusText: cc11001100_hook("statusText", n.statusText, "object-key-init")
                  }, se(n.url)), {
                    trace_id: cc11001100_hook("trace_id", m, "object-key-init")
                  }), "assign"), T.push(l), f && e(l, t), o(n);
                }).catch(function (e) {
                  u(e);
                });
              });
            };
          },
          set: function () {}
        });
      }(S, r({
        opts: cc11001100_hook("opts", e, "object-key-init")
      }, u), {
        trace: cc11001100_hook("trace", t, "object-key-init")
      }), o && we(S, r({
        opts: cc11001100_hook("opts", e, "object-key-init")
      }, u));
    }
    var Se = cc11001100_hook("Se", {
        performance: cc11001100_hook("performance", !1, "object-key-init"),
        resourceError: cc11001100_hook("resourceError", !1, "object-key-init"),
        request: cc11001100_hook("request", !1, "object-key-init"),
        trace: {
          open: cc11001100_hook("open", !1, "object-key-init"),
          apiList: cc11001100_hook("apiList", [], "object-key-init"),
          ignoreList: cc11001100_hook("ignoreList", [], "object-key-init")
        },
        runtimeError: cc11001100_hook("runtimeError", !1, "object-key-init"),
        userActions: cc11001100_hook("userActions", !1, "object-key-init"),
        metrics: cc11001100_hook("metrics", !1, "object-key-init"),
        common: {
          disableLog: cc11001100_hook("disableLog", !1, "object-key-init"),
          projectId: cc11001100_hook("projectId", "msfe", "object-key-init")
        }
      }, "var-init"),
      be = cc11001100_hook("be", !1, "var-init"),
      Ee = cc11001100_hook("Ee", function () {
        function e(e) {
          cc11001100_hook("e", e, "function-parameter");
          if (this.opts = cc11001100_hook("this.opts", Se, "assign"), be) console.warn("%cZHLogger can not instantiate multiple times.", "color:blue;font-size:12px;");else {
            be = cc11001100_hook("be", !0, "assign"), this.opts = cc11001100_hook("this.opts", e ? r(r({}, Se), e) : Se, "assign");
            try {
              this.init();
            } catch (e) {
              console.error(e);
            }
          }
        }
        return e.prototype.init = cc11001100_hook("e.prototype.init", function () {
          ye(this.opts);
        }, "assign"), e.prototype.show = cc11001100_hook("e.prototype.show", function (e, t) {
          if (e) {
            if (!t) throw Error("arguments need two, but one");
            var n = cc11001100_hook("n", this.opts.common, "var-init");
            Object.assign(n, {
              esIndexKeyword: cc11001100_hook("esIndexKeyword", t, "object-key-init")
            }), Object.assign(e, {
              type: cc11001100_hook("type", "show", "object-key-init")
            }), S(e, n);
          }
        }, "assign"), e.prototype.click = cc11001100_hook("e.prototype.click", function (e, t) {
          if (e) {
            if (!t) throw Error("arguments need two, but one");
            var n = cc11001100_hook("n", this.opts.common, "var-init");
            Object.assign(n, {
              esIndexKeyword: cc11001100_hook("esIndexKeyword", t, "object-key-init")
            }), Object.assign(e, {
              type: cc11001100_hook("type", "click", "object-key-init")
            }), S(e, n);
          }
        }, "assign"), e.prototype.metrics = cc11001100_hook("e.prototype.metrics", function () {
          console.warn("已不支持,请接入 指标SDK：@cfe/statsc-client");
        }, "assign"), e;
      }(), "var-init");
    window.ZHLogger = cc11001100_hook("window.ZHLogger", Ee, "assign"), function (e) {
      for (var t, n, r = cc11001100_hook("r", document.getElementsByTagName("script"), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < r.length; i++) {
        var o = cc11001100_hook("o", r[i], "var-init"),
          a = cc11001100_hook("a", o.getAttribute("src"), "var-init");
        o && a && a.indexOf("za-js-monitor") > -1 && o.getAttribute("instanced") && (t = cc11001100_hook("t", o.getAttribute("instanced"), "assign"), n = cc11001100_hook("n", o.getAttribute("disableLog"), "assign"));
      }
      "yes" === t && new e({
        performance: cc11001100_hook("performance", !0, "object-key-init"),
        resourceError: cc11001100_hook("resourceError", !0, "object-key-init"),
        runtimeError: cc11001100_hook("runtimeError", !0, "object-key-init"),
        request: cc11001100_hook("request", !1, "object-key-init"),
        trace: {
          apiList: cc11001100_hook("apiList", [], "object-key-init"),
          ignoreList: cc11001100_hook("ignoreList", [], "object-key-init"),
          open: cc11001100_hook("open", !1, "object-key-init")
        },
        common: {
          disableLog: cc11001100_hook("disableLog", "yes" === n, "object-key-init"),
          projectId: cc11001100_hook("projectId", "", "object-key-init"),
          userId: cc11001100_hook("userId", "", "object-key-init"),
          extra: {}
        }
      });
    }(Ee);
  }
}]);
//# sourceMappingURL=3476.e8fa875269f1c8383f09.js.map