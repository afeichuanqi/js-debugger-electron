; /* Version 390afaf42616833fafe738af3dd48b5e v:4.4.3.560, c:803257b4fc230f8e2aaf9ec7c320f318796c3545, b:4.4.3.560 n:INTERNAL-BUILD */
(function () {
  new function () {
    if (!window.ADRUM && !0 !== window["adrum-disable"]) {
      var g = cc11001100_hook("g", window.ADRUM = cc11001100_hook("window.ADRUM", {}, "assign"), "var-init"),
        x = cc11001100_hook("x", window.console, "var-init"),
        z = cc11001100_hook("z", x && "function" == typeof x.log ? x : {
          log: function () {}
        }, "var-init");
      window["adrum-start-time"] = cc11001100_hook("window[\"adrum-start-time\"]", window["adrum-start-time"] || new Date().getTime(), "assign");
      var u = cc11001100_hook("u", this && this.hh || function () {
        var a = cc11001100_hook("a", Object.Sj || {
          __proto__: cc11001100_hook("__proto__", [], "object-key-init")
        } instanceof Array && function (a, f) {
          a.__proto__ = cc11001100_hook("a.__proto__", f, "assign");
        } || function (a, f) {
          for (var e in f) f.hasOwnProperty(e) && (a[e] = cc11001100_hook("a[e]", f[e], "assign"));
        }, "var-init");
        return function (b, f) {
          function e() {
            this.constructor = cc11001100_hook("this.constructor", b, "assign");
          }
          a(b, f);
          b.prototype = cc11001100_hook("b.prototype", null === f ? Object.create(f) : (e.prototype = cc11001100_hook("e.prototype", f.prototype, "assign"), new e()), "assign");
        };
      }(), "var-init");
      (function (a) {
        (function (a) {
          a.yc = cc11001100_hook("a.yc", function () {
            for (var a = cc11001100_hook("a", [], "var-init"), b = cc11001100_hook("b", 0, "var-init"); b < arguments.length; b++) a[b] = cc11001100_hook("a[b]", arguments[b], "assign");
            for (b = cc11001100_hook("b", 0, "assign"); b < a.length; b++) {
              var c = cc11001100_hook("c", a[b], "var-init");
              c && c.setUp();
            }
          }, "assign");
        })(a.monitor || (a.monitor = cc11001100_hook("a.monitor", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          function f(a) {
            cc11001100_hook("a", a, "function-parameter");
            return b.Z.slice.apply(a, b.Z.slice.call(arguments, 1));
          }
          function e(a) {
            cc11001100_hook("a", a, "function-parameter");
            return "undefined" !== typeof a && null !== a;
          }
          function c(a) {
            cc11001100_hook("a", a, "function-parameter");
            return "object" == typeof a && !b.isArray(a) && null !== a;
          }
          function d(a) {
            cc11001100_hook("a", a, "function-parameter");
            return "function" == typeof a || !1;
          }
          function h(a) {
            cc11001100_hook("a", a, "function-parameter");
            return "string" == typeof a;
          }
          function n(a, d) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("d", d, "function-parameter");
            for (var e in d) {
              var h = cc11001100_hook("h", d[e], "var-init");
              if (m(d, e)) {
                var A = cc11001100_hook("A", a[e], "var-init");
                c(h) && c(A) ? n(A, h) : b.isArray(A) && b.isArray(h) ? a[e] = cc11001100_hook("a[e]", A.concat(h), "assign") : a[e] = cc11001100_hook("a[e]", h, "assign");
              }
            }
            return a;
          }
          function m(a, b) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("b", b, "function-parameter");
            return Object.prototype.hasOwnProperty.call(a, b) && e(a[b]);
          }
          function k(a) {
            cc11001100_hook("a", a, "function-parameter");
            return h(a) ? a.replace(/^\s*/, "").replace(/\s*$/, "") : a;
          }
          function q() {
            return new Date().getTime();
          }
          function g(a, b) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("b", b, "function-parameter");
            var c = cc11001100_hook("c", Array.prototype[a], "var-init");
            return c ? p(c) : s(a, b);
          }
          function p(a) {
            cc11001100_hook("a", a, "function-parameter");
            return function (c) {
              return a.apply(c, b.Z.slice.call(arguments, 1));
            };
          }
          function s(a, b) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("b", b, "function-parameter");
            return function (c, h) {
              if (!e(c)) throw new TypeError(a + " called on null or undefined");
              if (!d(h)) throw new TypeError(h + " is not a function");
              return b.apply(null, arguments);
            };
          }
          function t(a, b, c) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("b", b, "function-parameter");
            cc11001100_hook("c", c, "function-parameter");
            var d = cc11001100_hook("d", Object(a), "var-init"),
              e = cc11001100_hook("e", d.length >>> 0, "var-init"),
              h = cc11001100_hook("h", 0, "var-init");
            if (3 > arguments.length) {
              for (; h < e && !(h in d);) h++;
              if (h >= e) throw new TypeError("Reduce of empty array with no initial value");
              c = cc11001100_hook("c", d[h++], "assign");
            }
            for (; h < e; h++) h in d && (c = cc11001100_hook("c", b(c, d[h], h, d), "assign"));
            return c;
          }
          function v(a, c, d) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("c", c, "function-parameter");
            cc11001100_hook("d", d, "function-parameter");
            return b.reduce(a, function (a, b, e, h) {
              a[e] = cc11001100_hook("a[e]", c.call(d, b, e, h), "assign");
              return a;
            }, Array(a.length >>> 0));
          }
          function w(a, c, d) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("c", c, "function-parameter");
            cc11001100_hook("d", d, "function-parameter");
            return b.reduce(a, function (a, b, e, h) {
              c.call(d, b, e, h) && a.push(b);
              return a;
            }, []);
          }
          function C(a, b, c) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("b", b, "function-parameter");
            cc11001100_hook("c", c, "function-parameter");
            a = cc11001100_hook("a", Object(a), "assign");
            for (var d = cc11001100_hook("d", a.length >>> 0, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < d; e++) if (e in a && b.call(c, a[e], e, a)) return !0;
            return !1;
          }
          function l(a, c, d) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("c", c, "function-parameter");
            cc11001100_hook("d", d, "function-parameter");
            return !b.some(a, function (a) {
              return !c.call(d, a);
            });
          }
          function A(a, c, d) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("c", c, "function-parameter");
            cc11001100_hook("d", d, "function-parameter");
            b.reduce(a, function (a, b, e, h) {
              c.call(d, b, e, h);
            }, void 0);
          }
          b.Z = cc11001100_hook("b.Z", {
            isArray: cc11001100_hook("isArray", Array.isArray, "object-key-init"),
            toString: cc11001100_hook("toString", Object.prototype.toString, "object-key-init"),
            slice: cc11001100_hook("slice", Array.prototype.slice, "object-key-init"),
            assign: cc11001100_hook("assign", Object.assign, "object-key-init")
          }, "assign");
          b.Ha = cc11001100_hook("b.Ha", window.setTimeout, "assign");
          b.jb = cc11001100_hook("b.jb", window.setInterval, "assign");
          b.Ab = cc11001100_hook("b.Ab", f, "assign");
          b.isDefined = cc11001100_hook("b.isDefined", e, "assign");
          b.isArray = cc11001100_hook("b.isArray", d(b.Z.isArray) && d(b.Z.isArray.bind) ? b.Z.isArray.bind(Array) : function (a) {
            return b.Z.toString.call(a) === b.Z.toString.call([]);
          }, "assign");
          b.isObject = cc11001100_hook("b.isObject", c, "assign");
          b.isFunction = cc11001100_hook("b.isFunction", d, "assign");
          b.isString = cc11001100_hook("b.isString", h, "assign");
          b.isNumber = cc11001100_hook("b.isNumber", function (a) {
            return "number" == typeof a;
          }, "assign");
          b.isBoolean = cc11001100_hook("b.isBoolean", function (a) {
            return "boolean" == typeof a;
          }, "assign");
          b.max = cc11001100_hook("b.max", function (a, b) {
            return Math.max(isNaN(a) ? Number.NEGATIVE_INFINITY : a, isNaN(b) ? Number.NEGATIVE_INFINITY : b);
          }, "assign");
          b.lb = cc11001100_hook("b.lb", function (a) {
            b.Ha.call(window, a, 0);
          }, "assign");
          b.ul = cc11001100_hook("b.ul", function (a, c) {
            b.Ha.call(null, a, c || 1E4);
          }, "assign");
          b.addEventListener = cc11001100_hook("b.addEventListener", function (b, c, d, e) {
            function h() {
              try {
                return d.apply(this, f(arguments));
              } catch (e) {
                a.exception(e, "M1", c, b, e);
              }
            }
            void 0 === e && (e = cc11001100_hook("e", !1, "assign"));
            a.isDebug && a.log("M0", c, b);
            h.tb = cc11001100_hook("h.tb", !0, "assign");
            b.addEventListener ? b.addEventListener(c, h, e) : b.attachEvent && b.attachEvent("on" + c, h);
          }, "assign");
          b.loadScriptAsync = cc11001100_hook("b.loadScriptAsync", function (b) {
            var c = cc11001100_hook("c", document.createElement("script"), "var-init");
            c.type = cc11001100_hook("c.type", "text/javascript", "assign");
            c.async = cc11001100_hook("c.async", !0, "assign");
            c.src = cc11001100_hook("c.src", b, "assign");
            var d = cc11001100_hook("d", document.getElementsByTagName("script")[0], "var-init");
            d ? (d.parentNode.insertBefore(c, d), a.log("M2", b)) : a.log("M3", b);
          }, "assign");
          b.mergeJSON = cc11001100_hook("b.mergeJSON", n, "assign");
          b.hasOwnPropertyDefined = cc11001100_hook("b.hasOwnPropertyDefined", m, "assign");
          b.vk = cc11001100_hook("b.vk", function (a) {
            return e(a) ? b.isArray(a) ? a : [a] : [];
          }, "assign");
          b.zl = cc11001100_hook("b.zl", function (a, b) {
            return null != a && a.slice(0, b.length) == b;
          }, "assign");
          b.generateGUID = cc11001100_hook("b.generateGUID", function (a) {
            return e(a) && d(a.getRandomValues) && function () {
              function b(a) {
                cc11001100_hook("a", a, "function-parameter");
                a = cc11001100_hook("a", a.toString(16), "assign");
                return "0000".substr(a.length) + a;
              }
              var c = cc11001100_hook("c", new Uint16Array(8), "var-init");
              a.getRandomValues(c);
              return b(c[0]) + b(c[1]) + "_" + b(c[2]) + "_" + b(c[3]) + "_" + b(c[4]) + "_" + b(c[5]) + b(c[6]) + b(c[7]);
            };
          }(window.crypto || window.msCrypto) || function () {
            return "xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
              var b = cc11001100_hook("b", 16 * Math.random() | 0, "var-init");
              return ("x" == a ? b : b & 3 | 8).toString(16);
            });
          }, "assign");
          b.uf = cc11001100_hook("b.uf", function (a) {
            return a ? (a = cc11001100_hook("a", a.stack, "assign")) && "string" === typeof a ? a : null : null;
          }, "assign");
          b.trim = cc11001100_hook("b.trim", k, "assign");
          b.sj = cc11001100_hook("b.sj", function (a) {
            var b = cc11001100_hook("b", {}, "var-init"),
              c,
              d;
            if (!a) return b;
            var e = cc11001100_hook("e", a.split("\n"), "var-init");
            for (d = cc11001100_hook("d", 0, "assign"); d < e.length; d++) {
              var h = cc11001100_hook("h", e[d], "var-init");
              c = cc11001100_hook("c", h.indexOf(":"), "assign");
              a = cc11001100_hook("a", k(h.substr(0, c)).toLowerCase(), "assign");
              c = cc11001100_hook("c", k(h.substr(c + 1)), "assign");
              a && (b[a] = cc11001100_hook("b[a]", b[a] ? b[a] + (", " + c) : c, "assign"));
            }
            return b;
          }, "assign");
          b.tryPeriodically = cc11001100_hook("b.tryPeriodically", function (a, b, c, d) {
            function e() {
              if (b()) c && c();else {
                var n = cc11001100_hook("n", a(++h), "var-init");
                0 < n ? setTimeout(e, n) : d && d();
              }
            }
            var h = cc11001100_hook("h", 0, "var-init");
            e();
          }, "assign");
          b.Fd = cc11001100_hook("b.Fd", function (a) {
            return a.charAt(0).toUpperCase() + a.slice(1);
          }, "assign");
          b.Ke = cc11001100_hook("b.Ke", function (a) {
            for (var b = cc11001100_hook("b", [], "var-init"), c = cc11001100_hook("c", 1, "var-init"); c < arguments.length; c++) b[c - 1] = cc11001100_hook("b[c - 1]", arguments[c], "assign");
            return function () {
              for (var c = cc11001100_hook("c", [], "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < arguments.length; d++) c[d] = cc11001100_hook("c[d]", arguments[d], "assign");
              return a.apply(this, b.concat(c));
            };
          }, "assign");
          b.fl = cc11001100_hook("b.fl", function () {
            return e(performance) && e(performance.now);
          }, "assign");
          b.now = cc11001100_hook("b.now", q, "assign");
          b.Nd = cc11001100_hook("b.Nd", function () {
            var a = cc11001100_hook("a", window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance, "var-init"),
              a = cc11001100_hook("a", b.isObject(a) && b.isObject(a.timing) && b.isNumber(a.timing.navigationStart) ? a.timing.navigationStart : window["adrum-start-time"], "var-init");
            e(a) || (a = cc11001100_hook("a", q(), "assign"));
            return a;
          }, "assign");
          b.Sk = cc11001100_hook("b.Sk", t, "assign");
          b.reduce = cc11001100_hook("b.reduce", g("reduce", t), "assign");
          b.Rk = cc11001100_hook("b.Rk", v, "assign");
          b.map = cc11001100_hook("b.map", g("map", v), "assign");
          b.Pk = cc11001100_hook("b.Pk", w, "assign");
          b.filter = cc11001100_hook("b.filter", g("filter", w), "assign");
          b.Tk = cc11001100_hook("b.Tk", C, "assign");
          b.some = cc11001100_hook("b.some", g("some", C), "assign");
          b.Ok = cc11001100_hook("b.Ok", l, "assign");
          b.every = cc11001100_hook("b.every", g("every", l), "assign");
          b.Qk = cc11001100_hook("b.Qk", A, "assign");
          b.forEach = cc11001100_hook("b.forEach", g("forEach", A), "assign");
          b.Kh = cc11001100_hook("b.Kh", function (a) {
            return b.filter(a, e);
          }, "assign");
          b.Ah = cc11001100_hook("b.Ah", function (a) {
            return [].concat.apply([], a);
          }, "assign");
        })(a.utils || (a.utils = cc11001100_hook("a.utils", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", a.conf || (a.conf = cc11001100_hook("a.conf", {}, "assign")), "var-init");
        b.userConf = cc11001100_hook("b.userConf", window["adrum-config"] || {}, "assign");
        b.useHTTPSAlways = cc11001100_hook("b.useHTTPSAlways", !0 === b.userConf.useHTTPSAlways, "assign");
        b.spa2 = cc11001100_hook("b.spa2", b.userConf.spa && b.userConf.spa.spa2 && !0 === b.userConf.spa.spa2, "assign");
        b.beaconUrlHttp = cc11001100_hook("b.beaconUrlHttp", a.utils.isDefined(b.userConf.beaconUrlHttp) ? b.userConf.beaconUrlHttp : "http://col.eum-appdynamics.com", "assign");
        b.beaconUrlHttps = cc11001100_hook("b.beaconUrlHttps", a.utils.isDefined(b.userConf.beaconUrlHttps) ? b.userConf.beaconUrlHttps : "https://col.eum-appdynamics.com", "assign");
        b.corsEndpointPath = cc11001100_hook("b.corsEndpointPath", "/eumcollector/beacons/browser" + (b.spa2 ? "/v2" : "/v1"), "assign");
        b.imageEndpointPath = cc11001100_hook("b.imageEndpointPath", "/eumcollector/adrum.gif?", "assign");
        b.appKey = cc11001100_hook("b.appKey", b.userConf.appKey || window["adrum-app-key"] || "APP_KEY_NOT_SET", "assign");
        a = cc11001100_hook("a", b.useHTTPSAlways || "https:" === document.location.protocol, "assign");
        var f = cc11001100_hook("f", b.userConf.adrumExtUrlHttp || "http://cdn.appdynamics.com", "var-init"),
          e = cc11001100_hook("e", b.userConf.adrumExtUrlHttps || "https://cdn.appdynamics.com", "var-init");
        b.adrumExtUrl = cc11001100_hook("b.adrumExtUrl", (a ? e : f) + "/adrum-ext.390afaf42616833fafe738af3dd48b5e.js", "assign");
        b.adrumXdUrl = cc11001100_hook("b.adrumXdUrl", e + "/adrum-xd.390afaf42616833fafe738af3dd48b5e.html", "assign");
        b.agentVer = cc11001100_hook("b.agentVer", "4.4.3.560", "assign");
        b.sendImageBeacon = cc11001100_hook("b.sendImageBeacon", b.userConf.beacon && b.userConf.beacon.sendImageBeacon || window["adrum-send-image-beacon"], "assign");
        window["adrum-geo-resolver-url"] ? (f = cc11001100_hook("f", window["adrum-geo-resolver-url"], "assign"), e = cc11001100_hook("e", f.indexOf("://"), "assign"), -1 != e && (f = cc11001100_hook("f", f.substring(e + 3), "assign")), f = cc11001100_hook("f", (a ? "https://" : "http://") + f, "assign")) : (f = cc11001100_hook("f", b.userConf.geoResolverUrlHttps || "", "assign"), e = cc11001100_hook("e", b.userConf.geoResolverUrlHttp || "", "assign"), f = cc11001100_hook("f", a ? f : e, "assign"));
        b.geoResolverUrl = cc11001100_hook("b.geoResolverUrl", f, "assign");
        b.useStrictDomainCookies = cc11001100_hook("b.useStrictDomainCookies", !0 === window["adrum-use-strict-domain-cookies"], "assign");
        b.Ag = cc11001100_hook("b.Ag", 10, "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        function b(b, c, d, e) {
          cc11001100_hook("b", b, "function-parameter");
          cc11001100_hook("c", c, "function-parameter");
          cc11001100_hook("d", d, "function-parameter");
          cc11001100_hook("e", e, "function-parameter");
          b = cc11001100_hook("b", a.conf.beaconUrlHttps + "/eumcollector/error.gif?version=1&appKey=" + d + "&msg=" + encodeURIComponent(b.substring(0, 500)), "assign");
          e && (b += cc11001100_hook("b", "&stack=", "assign"), b += cc11001100_hook("b", encodeURIComponent(e.substring(0, 1500 - b.length)), "assign"));
          return b;
        }
        function f(c, d) {
          cc11001100_hook("c", c, "function-parameter");
          cc11001100_hook("d", d, "function-parameter");
          2 <= s || (document.createElement("img").src = cc11001100_hook("document.createElement(\"img\").src", b(c, 0, a.conf.appKey, d), "assign"), s++);
        }
        function e(a) {
          cc11001100_hook("a", a, "function-parameter");
          return 0 <= a.location.search.indexOf("ADRUM_debug=true") || 0 <= a.cookie.search(/(^|;)\s*ADRUM_debug=true/);
        }
        function c(b) {
          cc11001100_hook("b", b, "function-parameter");
          a.isDebug && g.push(n(arguments).join(" | "));
        }
        function d(a) {
          cc11001100_hook("a", a, "function-parameter");
          p.push(n(arguments).join(" | "));
        }
        function h(a) {
          cc11001100_hook("a", a, "function-parameter");
          var b = cc11001100_hook("b", n(arguments).join(" | "), "var-init");
          c(b);
          f(b, null);
        }
        var n = cc11001100_hook("n", a.utils.Ab, "var-init"),
          m = cc11001100_hook("m", a.utils.reduce, "var-init"),
          k = cc11001100_hook("k", a.utils.isDefined, "var-init");
        a.iDR = cc11001100_hook("a.iDR", e, "assign");
        var q;
        (function (a) {
          a[a.API_ERROR = cc11001100_hook("a.API_ERROR", 0, "assign")] = cc11001100_hook("a[a.API_ERROR = 0]", "API_ERROR", "assign");
          a[a.API_ERROR_INVALID_PARAMS = cc11001100_hook("a.API_ERROR_INVALID_PARAMS", 1, "assign")] = cc11001100_hook("a[a.API_ERROR_INVALID_PARAMS = 1]", "API_ERROR_INVALID_PARAMS", "assign");
          a[a.API_ERROR_INVALID_CONFIG = cc11001100_hook("a.API_ERROR_INVALID_CONFIG", 2, "assign")] = cc11001100_hook("a[a.API_ERROR_INVALID_CONFIG = 2]", "API_ERROR_INVALID_CONFIG", "assign");
          a[a.API_WARNING = cc11001100_hook("a.API_WARNING", 3, "assign")] = cc11001100_hook("a[a.API_WARNING = 3]", "API_WARNING", "assign");
          a[a.API_WARNING_INEFFECTIVE_CONFIG = cc11001100_hook("a.API_WARNING_INEFFECTIVE_CONFIG", 4, "assign")] = cc11001100_hook("a[a.API_WARNING_INEFFECTIVE_CONFIG = 4]", "API_WARNING_INEFFECTIVE_CONFIG", "assign");
        })(q = cc11001100_hook("q", a.I || (a.I = cc11001100_hook("a.I", {}, "assign")), "assign"));
        a.Oa = cc11001100_hook("a.Oa", ["JS Agent API Error:", "JS Agent API Error Invalid Parameters: ", "JS Agent API Error Invalid Configs: ", "JS Agent API Warning:", "JS Agent API Warning Ineffective Config:"], "assign");
        a.ta = cc11001100_hook("a.ta", " a constructor is called as a function. Don't forget keyword new.", "assign");
        a.isDebug = cc11001100_hook("a.isDebug", e(document), "assign");
        a.apiMessageConsoleOut = cc11001100_hook("a.apiMessageConsoleOut", k(a.conf.userConf) && k(a.conf.userConf.log) && !0 === a.conf.userConf.log.apiMessageConsoleOut ? !0 : !1, "assign");
        var g = cc11001100_hook("g", [], "var-init"),
          p = cc11001100_hook("p", [], "var-init");
        a.logMessages = cc11001100_hook("a.logMessages", g, "assign");
        a.apiMessages = cc11001100_hook("a.apiMessages", p, "assign");
        a.log = cc11001100_hook("a.log", c, "assign");
        a.ll = cc11001100_hook("a.ll", d, "assign");
        a.error = cc11001100_hook("a.error", h, "assign");
        a.reportAPIMessage = cc11001100_hook("a.reportAPIMessage", function (b, c, e, h) {
          var n = cc11001100_hook("n", a.yj.apply(this, arguments), "var-init");
          d(n);
          a.apiMessageConsoleOut && z.log(n);
          return n;
        }, "assign");
        a.exception = cc11001100_hook("a.exception", function () {
          if (!(1 > arguments.length)) {
            var b = cc11001100_hook("b", n(arguments), "var-init"),
              d = cc11001100_hook("d", a.utils.uf(b[0]), "var-init"),
              b = cc11001100_hook("b", b.slice(1).join(" | "), "var-init");
            c(b);
            f(b, d);
          }
        }, "assign");
        a.assert = cc11001100_hook("a.assert", function (a, b) {
          a || h("Assert fail: " + b);
        }, "assign");
        a.dumpLog = cc11001100_hook("a.dumpLog", a.isDebug ? function () {
          return m(g, function (a, b) {
            return a + b.replace(/\<br\/\>/g, "\n\t") + "\n";
          }, "");
        } : function () {}, "assign");
        a.yj = cc11001100_hook("a.yj", function (b, c, d, e) {
          var h = cc11001100_hook("h", "", "var-init"),
            h = cc11001100_hook("h", "", "var-init"),
            n = cc11001100_hook("n", new window.Error().stack, "var-init"),
            m,
            n = cc11001100_hook("n", a.utils.isString(n) ? n.substring(5) : n + "", "var-init");
          k(m) || (m = cc11001100_hook("m", a.utils.map(e, function (a) {
            return null === a ? "null" : void 0 == a ? "undefined" : "" === a ? "''" : a;
          }), "assign"));
          switch (b) {
            case q.V:
            case q.Ck:
              h = cc11001100_hook("h", a.Oa[b], "assign");
              h = cc11001100_hook("h", k(d) ? "" + h + c + "\n in " + d + "(" + m.join(", ") + ")\n" + n : "" + h + c + "\n" + n, "assign");
              break;
            case q.Pc:
              h = cc11001100_hook("h", a.Oa[b], "assign");
              h = cc11001100_hook("h", "" + h + c + "\nin " + d + "(" + m.join(", ") + ")\n" + n, "assign");
              break;
            case q.Nf:
            case q.Of:
              h = cc11001100_hook("h", a.Oa[b], "assign");
              h = cc11001100_hook("h", "" + h + c + ", but " + d + "=" + m.join(", ") + "\n" + n, "assign");
              break;
            default:
              h = cc11001100_hook("h", a.Oa[q.V], "assign"), h = cc11001100_hook("h", "" + h + c + "\nin " + d + "(" + m.join(", ") + ")\n" + n, "assign");
          }
          return h;
        }, "assign");
        a.cIEBU = cc11001100_hook("a.cIEBU", b, "assign");
        var s = cc11001100_hook("s", 0, "var-init");
        c("M4");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", function () {
            function a(b) {
              cc11001100_hook("b", b, "function-parameter");
              this.max = cc11001100_hook("this.max", b, "assign");
              this.Gb = cc11001100_hook("this.Gb", 0, "assign");
            }
            a.prototype.yi = cc11001100_hook("a.prototype.yi", function () {
              this.bb() || this.Gb++;
            }, "assign");
            a.prototype.bb = cc11001100_hook("a.prototype.bb", function () {
              return this.Gb >= this.max;
            }, "assign");
            a.prototype.reset = cc11001100_hook("a.prototype.reset", function () {
              this.Gb = cc11001100_hook("this.Gb", 0, "assign");
            }, "assign");
            return a;
          }(), "var-init"),
          f = cc11001100_hook("f", function () {
            function e() {
              this.Ta = cc11001100_hook("this.Ta", [], "assign");
              this.Ac = cc11001100_hook("this.Ac", new b(e.Lg), "assign");
              this.bc = cc11001100_hook("this.bc", new b(e.Eg), "assign");
            }
            e.prototype.submit = cc11001100_hook("e.prototype.submit", function (b) {
              this.push(b) && a.initEXTDone && this.processQ();
            }, "assign");
            e.prototype.processQ = cc11001100_hook("e.prototype.processQ", function () {
              for (var b = cc11001100_hook("b", this.Nh(), "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) {
                var e = cc11001100_hook("e", b[d], "var-init");
                "function" === typeof a.commands[e[0]] ? (a.isDebug && a.log("M5", e[0], e.slice(1).join(", ")), a.commands[e[0]].apply(a, e.slice(1))) : a.error("M6", e[0]);
              }
            }, "assign");
            e.prototype.Ri = cc11001100_hook("e.prototype.Ri", function (a) {
              return "reportXhr" === a || "reportPageError" === a;
            }, "assign");
            e.prototype.push = cc11001100_hook("e.prototype.push", function (b) {
              var d = cc11001100_hook("d", b[0], "var-init"),
                e = cc11001100_hook("e", this.Ri(d), "var-init"),
                n = cc11001100_hook("n", e ? this.Ac : this.bc, "var-init");
              if (n.bb()) return a.log("M7", e ? "spontaneous" : "non spontaneous", d), !1;
              this.Ta.push(b);
              n.yi();
              return !0;
            }, "assign");
            e.prototype.Nh = cc11001100_hook("e.prototype.Nh", function () {
              var a = cc11001100_hook("a", this.Ta, "var-init");
              this.reset();
              return a;
            }, "assign");
            e.prototype.size = cc11001100_hook("e.prototype.size", function () {
              return this.Ta.length;
            }, "assign");
            e.prototype.reset = cc11001100_hook("e.prototype.reset", function () {
              this.Ta = cc11001100_hook("this.Ta", [], "assign");
              this.Ac.reset();
              this.bc.reset();
            }, "assign");
            e.prototype.isSpontaneousQueueDead = cc11001100_hook("e.prototype.isSpontaneousQueueDead", function () {
              return this.Ac.bb();
            }, "assign");
            e.prototype.isNonSpontaneousQueueDead = cc11001100_hook("e.prototype.isNonSpontaneousQueueDead", function () {
              return this.bc.bb();
            }, "assign");
            return e;
          }(), "var-init");
        f.Lg = cc11001100_hook("f.Lg", 100, "assign");
        f.Eg = cc11001100_hook("f.Eg", 100, "assign");
        a.Wf = cc11001100_hook("a.Wf", f, "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        a.q = cc11001100_hook("a.q", new a.Wf(), "assign");
        a.command = cc11001100_hook("a.command", function (b) {
          for (var f = cc11001100_hook("f", 1, "var-init"); f < arguments.length; f++);
          a.isDebug && a.log("M8", b, Array.prototype.slice.call(arguments).slice(1).join(", "));
          a.q.submit(Array.prototype.slice.call(arguments));
        }, "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (a) {
          var f = cc11001100_hook("f", function () {
            function a() {
              this.status = cc11001100_hook("this.status", {}, "assign");
            }
            a.prototype.setUp = cc11001100_hook("a.prototype.setUp", function () {}, "assign");
            a.prototype.set = cc11001100_hook("a.prototype.set", function (a, b) {
              this.status[a] = cc11001100_hook("this.status[a]", b, "assign");
            }, "assign");
            return a;
          }(), "var-init");
          a.Xc = cc11001100_hook("a.Xc", f, "assign");
        })(a.monitor || (a.monitor = cc11001100_hook("a.monitor", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", a.utils.Ab, "var-init");
          window.ADRUM.aop = cc11001100_hook("window.ADRUM.aop", b, "assign");
          b.support = cc11001100_hook("b.support", function (a) {
            return !a || "apply" in a;
          }, "assign");
          b.around = cc11001100_hook("b.around", function (e, c, d, h, n) {
            a.assert(b.support(e), "aop.around called on a function which does not support interception");
            e = cc11001100_hook("e", e || function () {}, "assign");
            return function () {
              a.isDebug && a.log("M9", h, f(arguments).join(", "));
              var b = cc11001100_hook("b", f(arguments), "var-init"),
                k;
              try {
                c && (k = cc11001100_hook("k", c.apply(this, b), "assign"));
              } catch (q) {
                a.exception(q, "M10", h, q);
              }
              a.assert(!k || a.utils.isArray(k));
              var g = cc11001100_hook("g", void 0, "var-init");
              try {
                g = cc11001100_hook("g", e.apply(this, k || b), "assign");
              } catch (p) {
                throw n && n(p), p;
              } finally {
                try {
                  d && d.apply(this, b);
                } catch (s) {
                  a.exception(s, "M11", h, s);
                }
              }
              return g;
            };
          }, "assign");
          b.before = cc11001100_hook("b.before", function (a, c, d) {
            return b.around(a, c, null, d);
          }, "assign");
          b.after = cc11001100_hook("b.after", function (a, c, d) {
            return b.around(a, null, c, d);
          }, "assign");
        })(a.aop || (a.aop = cc11001100_hook("a.aop", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        a = cc11001100_hook("a", a.EventType || (a.EventType = cc11001100_hook("a.EventType", {}, "assign")), "assign");
        a[a.PageView = cc11001100_hook("a.PageView", 0, "assign")] = cc11001100_hook("a[a.PageView = 0]", "PageView", "assign");
        a[a.Ajax = cc11001100_hook("a.Ajax", 2, "assign")] = cc11001100_hook("a[a.Ajax = 2]", "Ajax", "assign");
        a[a.VPageView = cc11001100_hook("a.VPageView", 3, "assign")] = cc11001100_hook("a[a.VPageView = 3]", "VPageView", "assign");
        a[a.Error = cc11001100_hook("a.Error", 4, "assign")] = cc11001100_hook("a[a.Error = 4]", "Error", "assign");
        a[a.IFRAME = cc11001100_hook("a.IFRAME", 1, "assign")] = cc11001100_hook("a[a.IFRAME = 1]", "IFRAME", "assign");
        a[a.ABSTRACT = cc11001100_hook("a.ABSTRACT", 100, "assign")] = cc11001100_hook("a[a.ABSTRACT = 100]", "ABSTRACT", "assign");
        a[a.ADRUM_XHR = cc11001100_hook("a.ADRUM_XHR", 101, "assign")] = cc11001100_hook("a[a.ADRUM_XHR = 101]", "ADRUM_XHR", "assign");
        a[a.NG_VIRTUAL_PAGE = cc11001100_hook("a.NG_VIRTUAL_PAGE", 102, "assign")] = cc11001100_hook("a[a.NG_VIRTUAL_PAGE = 102]", "NG_VIRTUAL_PAGE", "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", a.events || (a.events = cc11001100_hook("a.events", {}, "assign")), "var-init");
        b.G = cc11001100_hook("b.G", {}, "assign");
        b.G[a.EventType.ABSTRACT] = cc11001100_hook("b.G[a.EventType.ABSTRACT]", {
          guid: cc11001100_hook("guid", "string", "object-key-init"),
          url: cc11001100_hook("url", "string", "object-key-init"),
          parentGUID: cc11001100_hook("parentGUID", "string", "object-key-init"),
          parentUrl: cc11001100_hook("parentUrl", "string", "object-key-init"),
          parentType: cc11001100_hook("parentType", "number", "object-key-init"),
          timestamp: cc11001100_hook("timestamp", "number", "object-key-init")
        }, "assign");
        b.G[a.EventType.VPageView] = cc11001100_hook("b.G[a.EventType.VPageView]", {
          resTiming: cc11001100_hook("resTiming", "object", "object-key-init")
        }, "assign");
        b.G[a.EventType.NG_VIRTUAL_PAGE] = cc11001100_hook("b.G[a.EventType.NG_VIRTUAL_PAGE]", {
          digestCount: cc11001100_hook("digestCount", "number", "object-key-init")
        }, "assign");
        b.G[a.EventType.Ajax] = cc11001100_hook("b.G[a.EventType.Ajax]", {
          method: cc11001100_hook("method", "string", "object-key-init"),
          parentPhase: cc11001100_hook("parentPhase", "string", "object-key-init"),
          parentPhaseId: cc11001100_hook("parentPhaseId", "number", "object-key-init"),
          error: cc11001100_hook("error", "object", "object-key-init"),
          parameter: cc11001100_hook("parameter", "object", "object-key-init"),
          xhrStatus: cc11001100_hook("xhrStatus", "number", "object-key-init")
        }, "assign");
        b.G[a.EventType.ADRUM_XHR] = cc11001100_hook("b.G[a.EventType.ADRUM_XHR]", {
          allResponseHeaders: cc11001100_hook("allResponseHeaders", "string", "object-key-init")
        }, "assign");
        b.G[a.EventType.Error] = cc11001100_hook("b.G[a.EventType.Error]", {
          msg: cc11001100_hook("msg", "string", "object-key-init"),
          line: cc11001100_hook("line", "number", "object-key-init"),
          stack: cc11001100_hook("stack", "string", "object-key-init")
        }, "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", function () {
          function a() {
            this.S = cc11001100_hook("this.S", {}, "assign");
          }
          a.prototype.mark = cc11001100_hook("a.prototype.mark", function (a, b) {
            f.mark.apply(this, arguments);
          }, "assign");
          a.prototype.getTiming = cc11001100_hook("a.prototype.getTiming", function (a) {
            return (a = cc11001100_hook("a", this.getEntryByName(a), "assign")) && a.startTime;
          }, "assign");
          a.prototype.measure = cc11001100_hook("a.prototype.measure", function (a, b, e) {
            f.measure.apply(this, arguments);
          }, "assign");
          a.prototype.getEntryByName = cc11001100_hook("a.prototype.getEntryByName", function (a) {
            return f.getEntryByName.call(this, a);
          }, "assign");
          return a;
        }(), "var-init");
        b.Fb = cc11001100_hook("b.Fb", function (a) {
          return f.Fb(a);
        }, "assign");
        a.PerformanceTracker = cc11001100_hook("a.PerformanceTracker", b, "assign");
        var f;
        (function (b) {
          var c = cc11001100_hook("c", a.utils.hasOwnPropertyDefined, "var-init"),
            d = cc11001100_hook("d", window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance, "var-init"),
            h = cc11001100_hook("h", a.utils.isObject(d) && a.utils.isObject(d.timing) && a.utils.isNumber(d.timing.navigationStart) ? d.timing.navigationStart : window["adrum-start-time"], "var-init"),
            n = cc11001100_hook("n", a.utils.now, "var-init");
          b.mark = cc11001100_hook("b.mark", function (b, c) {
            this.S[b] = cc11001100_hook("this.S[b]", {
              name: cc11001100_hook("name", b, "object-key-init"),
              entryType: cc11001100_hook("entryType", "mark", "object-key-init"),
              startTime: cc11001100_hook("startTime", a.utils.isDefined(c) ? c : n(), "object-key-init"),
              duration: cc11001100_hook("duration", 0, "object-key-init")
            }, "assign");
          }, "assign");
          b.measure = cc11001100_hook("b.measure", function (b, d, e) {
            c(this.S, d) && c(this.S, e) ? this.S[b] = cc11001100_hook("this.S[b]", {
              name: cc11001100_hook("name", b, "object-key-init"),
              entryType: cc11001100_hook("entryType", "measure", "object-key-init"),
              startTime: cc11001100_hook("startTime", d ? this.S[d].startTime : h, "object-key-init"),
              duration: cc11001100_hook("duration", (e ? this.S[e].startTime : n()) - (d ? this.S[d].startTime : h), "object-key-init")
            }, "assign") : a.error("M12", c(this.S, d) ? e : d);
          }, "assign");
          b.getEntryByName = cc11001100_hook("b.getEntryByName", function (a) {
            return this.S[a] || null;
          }, "assign");
          b.Fb = cc11001100_hook("b.Fb", function (a) {
            return a + h;
          }, "assign");
        })(f || (f = cc11001100_hook("f", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          function f(b, c) {
            cc11001100_hook("b", b, "function-parameter");
            cc11001100_hook("c", c, "function-parameter");
            b = cc11001100_hook("b", b || {}, "assign");
            for (var e in b) c[e] = cc11001100_hook("c[e]", function () {
              var c = cc11001100_hook("c", e, "var-init"),
                h = cc11001100_hook("h", b[e], "var-init");
              return function (b) {
                var d = cc11001100_hook("d", "_" + c, "var-init"),
                  e = cc11001100_hook("e", this[d], "var-init");
                if (a.utils.isDefined(b)) if (typeof b === h) this[d] = cc11001100_hook("this[d]", b, "assign");else throw d = cc11001100_hook("d", "wrong type of " + c + " value, " + typeof b + " passed in but should be a " + h + ".", "assign"), a.reportAPIMessage(a.I.Pc, d, "ADRUM.report", Array.prototype.slice.call(arguments)), TypeError(d);
                return e;
              };
            }(), "assign");
          }
          function e(a) {
            cc11001100_hook("a", a, "function-parameter");
            var b = cc11001100_hook("b", {}, "var-init"),
              c;
            for (c in a) {
              var e = cc11001100_hook("e", a[c], "var-init");
              b[e.start] = cc11001100_hook("b[e.start]", !0, "assign");
              b[e.end] = cc11001100_hook("b[e.end]", !0, "assign");
            }
            return b;
          }
          var c = cc11001100_hook("c", function () {
            function b(c) {
              cc11001100_hook("c", c, "function-parameter");
              this.perf = cc11001100_hook("this.perf", new a.PerformanceTracker(), "assign");
              "Object" === this.constructor.name && a.reportAPIMessage(a.I.V, a.ta);
              this.timestamp(a.utils.now());
              this.guid(a.utils.generateGUID());
              this.url(document.URL);
              this.ob(c);
            }
            b.prototype.type = cc11001100_hook("b.prototype.type", function () {
              return a.EventType.ABSTRACT;
            }, "assign");
            b.prototype.ob = cc11001100_hook("b.prototype.ob", function (b) {
              if (a.utils.isObject(b)) for (var c in b) {
                var d = cc11001100_hook("d", this[c] || this["mark" + a.utils.Fd(c)], "var-init");
                d && a.utils.isFunction(d) && d.call(this, b[c]);
              }
            }, "assign");
            b.Bb = cc11001100_hook("b.Bb", function (a, b, c) {
              return {
                guid: function () {
                  return a;
                },
                url: function () {
                  return b;
                },
                type: function () {
                  return c;
                }
              };
            }, "assign");
            b.prototype.mi = cc11001100_hook("b.prototype.mi", function () {
              return b.Bb(this.parentGUID(), this.parentUrl(), this.parentType());
            }, "assign");
            b.prototype.parent = cc11001100_hook("b.prototype.parent", function (b) {
              var c = cc11001100_hook("c", this.mi(), "var-init");
              a.utils.isDefined(b) && (a.utils.isFunction(b.guid) && a.utils.isFunction(b.url) && a.utils.isFunction(b.type) ? (this.parentGUID(b.guid()), this.parentUrl(b.url()), this.parentType(b.type())) : a.reportAPIMessage(a.I.V, "object is not a valid EventIdentifier", "EventTracker.parent", Array.prototype.slice.call(arguments)));
              return c;
            }, "assign");
            return b;
          }(), "var-init");
          b.EventTracker = cc11001100_hook("b.EventTracker", c, "assign");
          b.la = cc11001100_hook("b.la", f, "assign");
          b.Ad = cc11001100_hook("b.Ad", function (b, c) {
            b = cc11001100_hook("b", b || {}, "assign");
            var n = cc11001100_hook("n", e(b), "var-init"),
              m;
            for (m in n) n = cc11001100_hook("n", a.utils.Fd(m), "assign"), c["mark" + n] = cc11001100_hook("c[\"mark\" + n]", a.utils.Ke(function (a, b) {
              this.perf.mark(a, b);
            }, m), "assign"), c["get" + n] = cc11001100_hook("c[\"get\" + n]", a.utils.Ke(function (a) {
              return this.perf.getTiming(a);
            }, m), "assign");
          }, "assign");
          f(b.G[a.EventType.ABSTRACT], c.prototype);
        })(a.events || (a.events = cc11001100_hook("a.events", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function (b) {
            function c(d) {
              cc11001100_hook("d", d, "function-parameter");
              d = cc11001100_hook("d", b.call(this, d) || this, "assign");
              d.constructor != c && a.reportAPIMessage(a.I.V, a.ta, "ADRUM.events.Error", []);
              return d;
            }
            u(c, b);
            c.prototype.type = cc11001100_hook("c.prototype.type", function () {
              return a.EventType.Error;
            }, "assign");
            return c;
          }(b.EventTracker), "var-init");
          b.Error = cc11001100_hook("b.Error", f, "assign");
          b.la(b.G[a.EventType.Error], f.prototype);
        })(a.events || (a.events = cc11001100_hook("a.events", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function (b) {
            function c() {
              return null !== b && b.apply(this, arguments) || this;
            }
            u(c, b);
            c.prototype.setUp = cc11001100_hook("c.prototype.setUp", function () {
              var c = cc11001100_hook("c", this, "var-init");
              b.prototype.setUp.call(this);
              a.listenForErrors = cc11001100_hook("a.listenForErrors", function () {
                c.te();
              }, "assign");
              this.te();
            }, "assign");
            c.prototype.Ej = cc11001100_hook("c.prototype.Ej", function () {
              c.Nb = cc11001100_hook("c.Nb", 0, "assign");
            }, "assign");
            c.prototype.Ye = cc11001100_hook("c.prototype.Ye", function (b, e, n, m) {
              c.Nb >= a.conf.Ag ? a.log("M13") : (m = cc11001100_hook("m", a.utils.uf(m), "assign"), a.command("reportPageError", new a.events.Error(a.utils.mergeJSON({
                msg: cc11001100_hook("msg", b + "", "object-key-init"),
                url: cc11001100_hook("url", a.utils.isString(e) ? e : void 0, "object-key-init"),
                line: cc11001100_hook("line", a.utils.isNumber(n) ? n : void 0, "object-key-init"),
                stack: cc11001100_hook("stack", m, "object-key-init")
              }, this.status))), c.Nb++, c.hadErrors = cc11001100_hook("c.hadErrors", !0, "assign"));
            }, "assign");
            c.prototype.te = cc11001100_hook("c.prototype.te", function () {
              var b = cc11001100_hook("b", this, "var-init");
              a.aop.support(window.onerror) ? (window.onerror = cc11001100_hook("window.onerror", a.aop.around(window.onerror, function (a, e, m, k, f) {
                c.$b || (b.Ye(a, e, m, f), c.$b = cc11001100_hook("c.$b", !0, "assign"));
              }, function () {
                c.$b = cc11001100_hook("c.$b", !1, "assign");
              }, "onerror"), "assign"), a.log("M14")) : a.log("M15");
            }, "assign");
            return c;
          }(b.Xc), "var-init");
          f.$b = cc11001100_hook("f.$b", !1, "assign");
          f.Nb = cc11001100_hook("f.Nb", 0, "assign");
          f.hadErrors = cc11001100_hook("f.hadErrors", !1, "assign");
          b.ErrorMonitor = cc11001100_hook("b.ErrorMonitor", f, "assign");
          b.ma = cc11001100_hook("b.ma", new b.ErrorMonitor(), "assign");
        })(a.monitor || (a.monitor = cc11001100_hook("a.monitor", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function () {
            function b() {
              this.hc = cc11001100_hook("this.hc", this.navTiming = cc11001100_hook("this.navTiming", this.resTiming = cc11001100_hook("this.resTiming", null, "assign"), "assign"), "assign");
            }
            b.prototype.setUp = cc11001100_hook("b.prototype.setUp", function () {
              b.perf = cc11001100_hook("b.perf", window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance, "assign");
              a.utils.isObject(b.perf) && a.utils.isObject(b.perf.timing) || (b.perf = cc11001100_hook("b.perf", void 0, "assign"));
              this.setResourceTimingBufferSize();
              this.Qj();
            }, "assign");
            b.prototype.setResourceTimingBufferSize = cc11001100_hook("b.prototype.setResourceTimingBufferSize", function () {
              var c = cc11001100_hook("c", b.perf, "var-init"),
                d = cc11001100_hook("d", a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize, "var-init");
              !a.utils.isNumber(d) || 0 >= d ? a.log("M16") : c && a.utils.isFunction(c.setResourceTimingBufferSize) ? c.setResourceTimingBufferSize(d) : a.log("M17setResourceTimingBufferSize is not supported");
            }, "assign");
            b.prototype.Qj = cc11001100_hook("b.prototype.Qj", function () {
              var c = cc11001100_hook("c", b.perf, "var-init");
              a.utils.isDefined(c) && a.utils.isFunction(c.clearResourceTimings) && (this.hc = cc11001100_hook("this.hc", c.clearResourceTimings.bind(c), "assign"));
            }, "assign");
            b.prototype.Ch = cc11001100_hook("b.prototype.Ch", function () {
              var c = cc11001100_hook("c", b.perf, "var-init");
              if (c = cc11001100_hook("c", c && c.timing, "assign")) {
                if (c.navigationStart && c.navigationStart <= c.loadEventEnd) {
                  var d = cc11001100_hook("d", {}, "var-init"),
                    h;
                  for (h in c) {
                    var n = cc11001100_hook("n", c[h], "var-init");
                    "number" === typeof n && (d[h] = cc11001100_hook("d[h]", n, "assign"));
                  }
                  this.navTiming = cc11001100_hook("this.navTiming", d, "assign");
                } else a.log("M19");
              } else a.log("M18");
            }, "assign");
            b.prototype.ba = cc11001100_hook("b.prototype.ba", function () {
              this.resTiming = cc11001100_hook("this.resTiming", this.Y(), "assign");
            }, "assign");
            b.prototype.Y = cc11001100_hook("b.prototype.Y", function () {
              var c = cc11001100_hook("c", b.perf, "var-init"),
                d = cc11001100_hook("d", [], "var-init");
              c && c.getEntriesByType && (c = cc11001100_hook("c", c.getEntriesByType("resource"), "assign")) && c.length && 0 < c.length && c.unshift && (d = cc11001100_hook("d", c, "assign"));
              0 == d.length && a.log("M20");
              return d;
            }, "assign");
            b.prototype.clearResourceTimings = cc11001100_hook("b.prototype.clearResourceTimings", function () {
              a.utils.isFunction(this.hc) && this.hc();
            }, "assign");
            return b;
          }(), "var-init");
          f.perf = cc11001100_hook("f.perf", null, "assign");
          b.PerformanceMonitor = cc11001100_hook("b.PerformanceMonitor", f, "assign");
          b.perfMonitor = cc11001100_hook("b.perfMonitor", new b.PerformanceMonitor(), "assign");
        })(a.monitor || (a.monitor = cc11001100_hook("a.monitor", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function (e) {
            function c() {
              var a = cc11001100_hook("a", e.call(this) || this, "var-init");
              a.Q = cc11001100_hook("a.Q", [], "assign");
              a.Va = cc11001100_hook("a.Va", [], "assign");
              a.fd = cc11001100_hook("a.fd", 500, "assign");
              a.xb = cc11001100_hook("a.xb", 150, "assign");
              a.Hj = cc11001100_hook("a.Hj", 3E3, "assign");
              return a;
            }
            u(c, e);
            c.prototype.setUp = cc11001100_hook("c.prototype.setUp", function () {
              e.prototype.setUp.call(this);
              a.utils.isDefined(b.PerformanceMonitor.perf) && a.utils.isFunction(b.PerformanceMonitor.perf.getEntriesByType) ? a.utils.isFunction(b.PerformanceMonitor.perf.addEventListener) ? b.PerformanceMonitor.perf.addEventListener("resourcetimingbufferfull", this.ba.bind(this)) : "onresourcetimingbufferfull" in b.PerformanceMonitor.perf ? a.utils.isFunction(b.PerformanceMonitor.perf.gc) ? b.PerformanceMonitor.perf.gc = cc11001100_hook("b.PerformanceMonitor.perf.gc", a.aop.around(b.PerformanceMonitor.perf.gc, this.ba.bind(this)), "assign") : b.PerformanceMonitor.perf.gc = cc11001100_hook("b.PerformanceMonitor.perf.gc", this.ba.bind(this), "assign") : a.utils.jb.call(window, this.Gj.bind(this), this.Hj) : a.log("ResTiming API is not available");
              this.Vj();
              this.Ij();
            }, "assign");
            c.prototype.Vj = cc11001100_hook("c.prototype.Vj", function () {
              var c = cc11001100_hook("c", a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize, "var-init");
              a.utils.isDefined(b.PerformanceMonitor.perf) && a.utils.isFunction(b.PerformanceMonitor.perf.setResourceTimingBufferSize) && a.utils.isNumber(c) && 0 < c && (this.xb = cc11001100_hook("this.xb", c, "assign"));
            }, "assign");
            c.prototype.Ij = cc11001100_hook("c.prototype.Ij", function () {
              var c = cc11001100_hook("c", b.PerformanceMonitor.perf, "var-init");
              a.utils.isDefined(c) && (a.utils.isFunction(c.setResourceTimingBufferSize) && (c.setResourceTimingBufferSize = cc11001100_hook("c.setResourceTimingBufferSize", a.aop.around(c.setResourceTimingBufferSize, function () {
                a.utils.isDefined(arguments) && a.utils.isDefined(arguments[0]) && (this.xb = cc11001100_hook("this.xb", arguments[0], "assign"));
              }.bind(this)), "assign")), a.utils.isFunction(c.clearResourceTimings) && (c.clearResourceTimings = cc11001100_hook("c.clearResourceTimings", a.aop.around(c.clearResourceTimings, function () {
                this.ba();
              }.bind(this)), "assign")));
            }, "assign");
            c.prototype.Bh = cc11001100_hook("c.prototype.Bh", function () {
              this.Va = cc11001100_hook("this.Va", this.Y(), "assign");
            }, "assign");
            c.prototype.ba = cc11001100_hook("c.prototype.ba", function () {
              this.Q = cc11001100_hook("this.Q", this.Y(), "assign");
            }, "assign");
            c.prototype.Gj = cc11001100_hook("c.prototype.Gj", function () {
              e.prototype.Y.call(this).length >= this.xb && this.ba();
            }, "assign");
            c.prototype.Y = cc11001100_hook("c.prototype.Y", function () {
              var a = cc11001100_hook("a", e.prototype.Y.call(this), "var-init");
              if (this.Q.length + a.length > this.fd) return z.debug("Cannot copy more resources. Resource buffer size exceeded"), this.Q.concat(a.slice(0, this.fd - this.Q.length));
              e.prototype.clearResourceTimings.call(this);
              return this.Q.concat(a);
            }, "assign");
            c.prototype.oi = cc11001100_hook("c.prototype.oi", function (b, c, e) {
              return e ? a.utils.filter(this.Q, function (a) {
                return b + a.startTime >= c && b + a.startTime <= e;
              }) : a.utils.filter(this.Q, function (a) {
                return b + a.startTime >= c;
              });
            }, "assign");
            c.prototype.be = cc11001100_hook("c.prototype.be", function (a, b, c) {
              this.Q = cc11001100_hook("this.Q", this.Q.concat(e.prototype.Y.call(this)), "assign");
              a = cc11001100_hook("a", this.oi(a, b, c), "assign");
              e.prototype.clearResourceTimings.call(this);
              this.Q = cc11001100_hook("this.Q", [], "assign");
              return a;
            }, "assign");
            return c;
          }(b.PerformanceMonitor), "var-init");
          b.Ug = cc11001100_hook("b.Ug", f, "assign");
          b.ga = cc11001100_hook("b.ga", new b.Ug(), "assign");
        })(a.monitor || (a.monitor = cc11001100_hook("a.monitor", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function () {
            function e() {
              this.Ib = cc11001100_hook("this.Ib", 5E3, "assign");
              this.Ga = cc11001100_hook("this.Ga", a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxResourceQuietTime ? a.conf.userConf.navComplete.maxResourceQuietTime : this.Ib, "assign");
            }
            e.prototype.setUp = cc11001100_hook("e.prototype.setUp", function (a) {
              this.cc = cc11001100_hook("this.cc", this.n = cc11001100_hook("this.n", 0, "assign"), "assign");
              this.na = cc11001100_hook("this.na", a, "assign");
              this.B = cc11001100_hook("this.B", !1, "assign");
              this.Fe = cc11001100_hook("this.Fe", {}, "assign");
              this.He = cc11001100_hook("this.He", {}, "assign");
              this.Ge = cc11001100_hook("this.Ge", {}, "assign");
              this.Pd();
            }, "assign");
            e.prototype.start = cc11001100_hook("e.prototype.start", function (b) {
              this.setUp(b);
              b = cc11001100_hook("b", null, "assign");
              var d = cc11001100_hook("d", window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, "var-init");
              a.utils.isDefined(d) && (b = cc11001100_hook("b", new d(function (a) {
                for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) {
                  var c = cc11001100_hook("c", a[b], "var-init");
                  switch (c.type) {
                    case "childList":
                      this.Aj(c.addedNodes);
                      break;
                    case "attributes":
                      this.P(c.target);
                  }
                }
              }.bind(this)), "assign"), b.observe(document.documentElement, {
                childList: cc11001100_hook("childList", !0, "object-key-init"),
                subtree: cc11001100_hook("subtree", !0, "object-key-init"),
                attributes: cc11001100_hook("attributes", !0, "object-key-init"),
                attributeFilter: cc11001100_hook("attributeFilter", ["src", "href"], "object-key-init")
              }));
              this.c = cc11001100_hook("this.c", b, "assign");
            }, "assign");
            e.prototype.Aj = cc11001100_hook("e.prototype.Aj", function (a) {
              for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) this.P(a[b]);
            }, "assign");
            e.prototype.sf = cc11001100_hook("e.prototype.sf", function (a) {
              for (var b = cc11001100_hook("b", 0, "var-init"); b < a.length; b++) {
                var e = cc11001100_hook("e", a[b], "var-init");
                this.P(e);
                this.sf(e.childNodes);
              }
            }, "assign");
            e.prototype.P = cc11001100_hook("e.prototype.P", function (b) {
              if (/SCRIPT|IMG|LINK/.test(b.nodeName)) {
                var d = cc11001100_hook("d", b.attributes.getNamedItem("src") || b.attributes.getNamedItem("href"), "var-init");
                a.utils.isDefined(d) && (d = cc11001100_hook("d", d.value, "assign"), !a.utils.isDefined(this.Fe[d]) && 0 < d.length && (this.n += cc11001100_hook("this.n", 1, "assign"), b.addEventListener("load", this.ue.bind(this), !1), b.addEventListener("error", this.Da.bind(this), !1), this.Fe[d] = cc11001100_hook("this.Fe[d]", !0, "assign")));
              }
            }, "assign");
            e.prototype.ue = cc11001100_hook("e.prototype.ue", function (c) {
              var d = cc11001100_hook("d", this.de(c.target), "var-init");
              a.utils.isDefined(this.He[d]) || (this.n -= cc11001100_hook("this.n", 1, "assign"), this.He[d] = cc11001100_hook("this.He[d]", !0, "assign"));
              this.na = cc11001100_hook("this.na", a.utils.now(), "assign");
              this.cc += cc11001100_hook("this.cc", 1, "assign");
              1 == this.cc && (b.w.mf(), this.B = cc11001100_hook("this.B", !0, "assign"));
              this.Xe(c.target);
            }, "assign");
            e.prototype.Da = cc11001100_hook("e.prototype.Da", function (b) {
              var d = cc11001100_hook("d", this.de(b.target), "var-init");
              a.utils.isDefined(this.Ge[d]) || (this.n -= cc11001100_hook("this.n", 1, "assign"), this.Ge[d] = cc11001100_hook("this.Ge[d]", !0, "assign"));
              this.Xe(b.target);
            }, "assign");
            e.prototype.de = cc11001100_hook("e.prototype.de", function (a) {
              var b = cc11001100_hook("b", "", "var-init");
              a instanceof HTMLScriptElement ? b = cc11001100_hook("b", a.src, "assign") : a instanceof HTMLImageElement ? b = cc11001100_hook("b", a.src, "assign") : a instanceof HTMLLinkElement && (b = cc11001100_hook("b", a.href, "assign"));
              return b;
            }, "assign");
            e.prototype.Vb = cc11001100_hook("e.prototype.Vb", function (a) {
              return 0 == this.n && this.B && a - this.na >= this.Ga ? (this.reset(), this.na) : -1;
            }, "assign");
            e.prototype.Xe = cc11001100_hook("e.prototype.Xe", function (a) {
              a.removeEventListener("load", this.ue, !1);
              a.removeEventListener("error", this.Da, !1);
            }, "assign");
            e.prototype.reset = cc11001100_hook("e.prototype.reset", function () {
              this.B = cc11001100_hook("this.B", !1, "assign");
              this.n = cc11001100_hook("this.n", 0, "assign");
              this.Pd();
            }, "assign");
            e.prototype.Pd = cc11001100_hook("e.prototype.Pd", function () {
              a.utils.isDefined(this.c) && (this.c.disconnect(), this.c = cc11001100_hook("this.c", null, "assign"));
            }, "assign");
            return e;
          }(), "var-init");
          b.Vg = cc11001100_hook("b.Vg", f, "assign");
        })(a.c || (a.c = cc11001100_hook("a.c", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function (b) {
            function c() {
              return null !== b && b.apply(this, arguments) || this;
            }
            u(c, b);
            c.prototype.Tj = cc11001100_hook("c.prototype.Tj", function () {
              this.Ea(Element.prototype, "innerHTML", this.mc.bind(this));
              this.Ea(HTMLElement.prototype, "innerHTML", this.mc.bind(this));
              this.Ea(HTMLImageElement.prototype, "src", this.P.bind(this));
              this.Ea(HTMLScriptElement.prototype, "src", this.P.bind(this));
              this.Ea(HTMLLinkElement.prototype, "href", this.P.bind(this));
              this.Bi();
              this.Yb("append");
              this.Yb("appendChild");
              this.Yb("insertBefore");
            }, "assign");
            c.prototype.setUp = cc11001100_hook("c.prototype.setUp", function (a) {
              b.prototype.setUp.call(this, a);
            }, "assign");
            c.prototype.start = cc11001100_hook("c.prototype.start", function (a) {
              b.prototype.start.call(this, a);
              this.Wb = cc11001100_hook("this.Wb", !0, "assign");
            }, "assign");
            c.prototype.reset = cc11001100_hook("c.prototype.reset", function () {
              b.prototype.reset.call(this);
              this.Wb = cc11001100_hook("this.Wb", !1, "assign");
            }, "assign");
            c.prototype.Ea = cc11001100_hook("c.prototype.Ea", function (a, b, c) {
              this.pj(a, b, Object.getOwnPropertyDescriptor(a, b), c);
            }, "assign");
            c.prototype.pj = cc11001100_hook("c.prototype.pj", function (b, c, e, m) {
              if (a.utils.isDefined(e) && a.utils.isDefined(e.set)) {
                var k = cc11001100_hook("k", this, "var-init");
                Object.defineProperty(b, c, {
                  set: function (a) {
                    var b;
                    try {
                      b = cc11001100_hook("b", e.set.apply(this, arguments), "assign");
                    } catch (c) {
                      throw c;
                    } finally {
                      m.call(k, this);
                    }
                    return b;
                  }
                });
              }
            }, "assign");
            c.prototype.P = cc11001100_hook("c.prototype.P", function (a) {
              (this.c || this.Wb) && b.prototype.P.call(this, a);
            }, "assign");
            c.prototype.Bi = cc11001100_hook("c.prototype.Bi", function () {
              var b = cc11001100_hook("b", Element.prototype, "var-init"),
                c = cc11001100_hook("c", this, "var-init");
              a.utils.isDefined(b.setAttribute) && (b.setAttribute = cc11001100_hook("b.setAttribute", a.aop.around(b.setAttribute, null, function () {
                c.P.call(c, this);
              }), "assign"));
            }, "assign");
            c.prototype.Yb = cc11001100_hook("c.prototype.Yb", function (b) {
              var c = cc11001100_hook("c", Element.prototype, "var-init"),
                e = cc11001100_hook("e", this, "var-init");
              a.utils.isDefined(c[b]) && (c[b] = cc11001100_hook("c[b]", a.aop.around(c[b], null, function (a) {
                e.mc.call(e, a);
              }), "assign"));
            }, "assign");
            c.prototype.mc = cc11001100_hook("c.prototype.mc", function (c) {
              (this.c || this.Wb) && a.utils.isDefined(c) && a.utils.isDefined(c.childNodes) && (b.prototype.P.call(this, c), b.prototype.sf.call(this, c.childNodes));
            }, "assign");
            return c;
          }(b.Vg), "var-init");
          b.ag = cc11001100_hook("b.ag", f, "assign");
        })(a.c || (a.c = cc11001100_hook("a.c", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function () {
            function e() {
              this.Ib = cc11001100_hook("this.Ib", 3E3, "assign");
              this.Ga = cc11001100_hook("this.Ga", a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxXhrQuietTime ? a.conf.userConf.navComplete.maxXhrQuietTime : this.Ib, "assign");
            }
            e.prototype.setUp = cc11001100_hook("e.prototype.setUp", function (a) {
              this.dc = cc11001100_hook("this.dc", this.n = cc11001100_hook("this.n", 0, "assign"), "assign");
              this.oa = cc11001100_hook("this.oa", a, "assign");
              this.B = cc11001100_hook("this.B", !1, "assign");
              this.If = cc11001100_hook("this.If", {}, "assign");
              this.Oc = cc11001100_hook("this.Oc", {}, "assign");
            }, "assign");
            e.prototype.start = cc11001100_hook("e.prototype.start", function (a) {
              this.setUp(a);
            }, "assign");
            e.prototype.lh = cc11001100_hook("e.prototype.lh", function (b) {
              a.utils.isDefined(this.If[b]) || (this.n += cc11001100_hook("this.n", 1, "assign"), this.If[b] = cc11001100_hook("this.If[b]", !0, "assign"));
            }, "assign");
            e.prototype.sd = cc11001100_hook("e.prototype.sd", function (c) {
              b.w.B && (a.utils.isDefined(this.Oc) && !a.utils.isDefined(this.Oc[c]) && (this.oa = cc11001100_hook("this.oa", a.utils.now(), "assign"), this.n -= cc11001100_hook("this.n", 1, "assign"), this.Oc[c] = cc11001100_hook("this.Oc[c]", !0, "assign")), this.dc += cc11001100_hook("this.dc", 1, "assign"), 1 == this.dc && (b.w.mf(), this.B = cc11001100_hook("this.B", !0, "assign")));
            }, "assign");
            e.prototype.Vb = cc11001100_hook("e.prototype.Vb", function (a) {
              return 0 == this.n && this.B && a - this.oa >= this.Ga ? (this.reset(), this.oa) : -1;
            }, "assign");
            e.prototype.reset = cc11001100_hook("e.prototype.reset", function () {
              this.B = cc11001100_hook("this.B", !1, "assign");
              this.n = cc11001100_hook("this.n", 0, "assign");
            }, "assign");
            return e;
          }(), "var-init");
          b.gh = cc11001100_hook("b.gh", f, "assign");
        })(a.c || (a.c = cc11001100_hook("a.c", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", a.utils.generateGUID, "var-init"),
          f = cc11001100_hook("f", function () {
            return function (c, e) {
              this.start = cc11001100_hook("this.start", a.utils.now(), "assign");
              this.parent = cc11001100_hook("this.parent", c, "assign");
              this.sb = cc11001100_hook("this.sb", e, "assign");
              this.guid = cc11001100_hook("this.guid", b(), "assign");
            };
          }(), "var-init");
        a.Uc = cc11001100_hook("a.Uc", f, "assign");
        var e = cc11001100_hook("e", function () {
          function b() {}
          b.bl = cc11001100_hook("b.bl", function () {
            return b.events;
          }, "assign");
          b.Se = cc11001100_hook("b.Se", function (e, h, n, m) {
            var k;
            b.nc(h);
            try {
              a.utils.isFunction(e) && (k = cc11001100_hook("k", e.apply(n, m), "assign"));
            } catch (f) {
              throw f;
            } finally {
              b.pa();
            }
            return k;
          }, "assign");
          b.Ef = cc11001100_hook("b.Ef", function (a, e) {
            if (e.tb) return e;
            var n;
            return function (m) {
              var k = cc11001100_hook("k", b.Ld(a, m, n), "var-init");
              return b.Se(e, k, this, arguments);
            };
          }, "assign");
          b.Ld = cc11001100_hook("b.Ld", function (b, c, e) {
            a.log("[JSA] Executing wrapped " + b + (e ? " whose parent is " + e.sb.action : ""));
            a.utils.isDefined(c) ? (c = cc11001100_hook("c", a.Wc.Zi(c.target || c.srcElement), "assign"), c.action = cc11001100_hook("c.action", b, "assign")) : c = cc11001100_hook("c", new a.za(b), "assign");
            return new f(e, c);
          }, "assign");
          b.Ff = cc11001100_hook("b.Ff", function (e, h) {
            if (h.tb) return h;
            var n = cc11001100_hook("n", b.Za(), "var-init"),
              m = cc11001100_hook("m", new a.za(e), "var-init");
            new f(n, m);
            return function () {
              var m = cc11001100_hook("m", new a.za(e), "var-init"),
                m = cc11001100_hook("m", new f(n, m), "var-init");
              return b.Se(h, m, this, arguments);
            };
          }, "assign");
          b.El = cc11001100_hook("b.El", function (a, e) {
            return function () {
              var n = cc11001100_hook("n", e.apply(this, arguments), "var-init");
              b.Cd(a);
              return n;
            };
          }, "assign");
          b.Za = cc11001100_hook("b.Za", function () {
            return 0 < b.events.length ? b.events[b.events.length - 1] : null;
          }, "assign");
          b.nc = cc11001100_hook("b.nc", function (a) {
            b.events.push(a);
          }, "assign");
          b.pa = cc11001100_hook("b.pa", function () {
            b.events.pop();
          }, "assign");
          b.Db = cc11001100_hook("b.Db", function (b, c) {
            var e = cc11001100_hook("e", b, "var-init"),
              m = cc11001100_hook("m", 1, "var-init"),
              f = cc11001100_hook("f", "", "var-init");
            if (!a.utils.isDefined(e)) return null;
            for (; a.utils.isDefined(e.parent);) f = cc11001100_hook("f", " -> " + e.sb.action + f, "assign"), e = cc11001100_hook("e", e.parent, "assign"), m += cc11001100_hook("m", 1, "assign");
            var g = cc11001100_hook("g", a.utils.now(), "var-init");
            a.utils.isDefined(e.sb) && (f = cc11001100_hook("f", e.sb.action + f + " -> " + c, "assign"));
            a.log("SPA2~ Causality Chain: " + f);
            a.log("SPA2~ Transition started from " + e.start + ", and went through " + m + " functions");
            a.log("SPA2~ Transition took " + (g - e.start) + " ms");
            return e;
          }, "assign");
          b.Cd = cc11001100_hook("b.Cd", function (a) {
            return b.Db(b.Za(), a);
          }, "assign");
          b.setUp = cc11001100_hook("b.setUp", function () {
            b.events = cc11001100_hook("b.events", [], "assign");
            window.setTimeout = cc11001100_hook("window.setTimeout", function (e, h) {
              var n = cc11001100_hook("n", b.Ff("setTimeout", e), "var-init");
              return a.utils.Ha.apply(this, [n, h]);
            }, "assign");
            window.setInterval = cc11001100_hook("window.setInterval", function (e, h) {
              var n = cc11001100_hook("n", b.Ff("setInterval", e), "var-init");
              return a.utils.jb.apply(this, [n, h]);
            }, "assign");
          }, "assign");
          return b;
        }(), "var-init");
        e.events = cc11001100_hook("e.events", [], "assign");
        a.l = cc11001100_hook("a.l", e, "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", window.addEventListener, "var-init"),
          f = cc11001100_hook("f", a.utils.isDefined(window.Yc) ? window.Yc.prototype.addEventListener : function () {}, "var-init"),
          e = cc11001100_hook("e", function () {
            return function (a, b, c, e, f, g, r, p) {
              this.action = cc11001100_hook("this.action", a || "", "assign");
              this.ig = cc11001100_hook("this.ig", b || "", "assign");
              this.className = cc11001100_hook("this.className", c || "", "assign");
              this.tagName = cc11001100_hook("this.tagName", e || "", "assign");
              this.name = cc11001100_hook("this.name", f || "", "assign");
              this.text = cc11001100_hook("this.text", g || "", "assign");
              this.src = cc11001100_hook("this.src", r, "assign");
              this.item = cc11001100_hook("this.item", p, "assign");
            };
          }(), "var-init");
        a.za = cc11001100_hook("a.za", e, "assign");
        var c = cc11001100_hook("c", function () {
          function c() {}
          c.setUp = cc11001100_hook("c.setUp", function () {
            Array.prototype.push.apply(c.Jb, []);
            c.wk();
            a.utils.isDefined(window.Yc) ? c.xk() : c.kh();
          }, "assign");
          c.ql = cc11001100_hook("c.ql", function () {
            return [];
          }, "assign");
          c.Zi = cc11001100_hook("c.Zi", function (b) {
            var c = cc11001100_hook("c", b.id || "", "var-init"),
              d = cc11001100_hook("d", b.className || "", "var-init"),
              f = cc11001100_hook("f", "", "var-init"),
              g = cc11001100_hook("g", new e(), "var-init");
            b === document ? f = cc11001100_hook("f", "document", "assign") : b === window ? f = cc11001100_hook("f", "window", "assign") : b instanceof XMLHttpRequest ? (f = cc11001100_hook("f", "xhr", "assign"), g.src = cc11001100_hook("g.src", a.utils.isObject(b._adrumAjaxT) ? b._adrumAjaxT.url() : "", "assign")) : b instanceof WebSocket ? (f = cc11001100_hook("f", "websocket", "assign"), g.src = cc11001100_hook("g.src", b.url, "assign")) : b instanceof HTMLScriptElement ? (f = cc11001100_hook("f", "script", "assign"), g.src = cc11001100_hook("g.src", b.src, "assign")) : b instanceof HTMLAnchorElement ? (f = cc11001100_hook("f", "a", "assign"), g.text = cc11001100_hook("g.text", b.text.trim(), "assign")) : b instanceof HTMLButtonElement ? (f = cc11001100_hook("f", "button", "assign"), g.name = cc11001100_hook("g.name", b.name, "assign")) : b instanceof HTMLDivElement ? (f = cc11001100_hook("f", "div", "assign"), g.text = cc11001100_hook("g.text", b.title || b.innerText.trim(), "assign")) : b instanceof HTMLImageElement ? (f = cc11001100_hook("f", "img", "assign"), g.src = cc11001100_hook("g.src", b.src, "assign")) : b instanceof HTMLLIElement ? (f = cc11001100_hook("f", "li", "assign"), g.item = cc11001100_hook("g.item", b.value, "assign")) : b instanceof HTMLUListElement ? f = cc11001100_hook("f", "ul", "assign") : b instanceof HTMLFormElement ? f = cc11001100_hook("f", "form", "assign") : b instanceof HTMLFrameElement ? (f = cc11001100_hook("f", "frame", "assign"), g.src = cc11001100_hook("g.src", b.src, "assign")) : b instanceof HTMLInputElement ? (f = cc11001100_hook("f", "input", "assign"), g.name = cc11001100_hook("g.name", b.name, "assign")) : b instanceof HTMLTableElement ? f = cc11001100_hook("f", "table", "assign") : b instanceof HTMLTableCaptionElement ? f = cc11001100_hook("f", "tcap", "assign") : b instanceof HTMLTableCellElement ? (f = cc11001100_hook("f", "td", "assign"), g.text = cc11001100_hook("g.text", a.utils.isDefined(b.innerText) ? b.innerText.trim() : "", "assign")) : b instanceof HTMLTableRowElement ? f = cc11001100_hook("f", "tr", "assign") : (f = cc11001100_hook("f", a.utils.isDefined(b.tagName) ? b.tagName : "", "assign"), a.log("SPA2~ Cannot find out what kind of event target it is: " + f));
            g.ig = cc11001100_hook("g.ig", c, "assign");
            g.className = cc11001100_hook("g.className", d, "assign");
            g.tagName = cc11001100_hook("g.tagName", f, "assign");
            g.text = cc11001100_hook("g.text", a.utils.isDefined(b.innerText) ? b.innerText : "", "assign");
            return g;
          }, "assign");
          c.wk = cc11001100_hook("c.wk", function () {
            a.utils.forEach(c.Jb, function (c) {
              b(c, function (b) {
                b = cc11001100_hook("b", b.target || b.srcElement, "assign");
                (b === document || b === window || b instanceof XMLHttpRequest || b instanceof HTMLElement) && null != b && b["on" + c] && (b["on" + c] = cc11001100_hook("b[\"on\" + c]", a.l.Ef(c, b["on" + c]), "assign"), b["on" + c].tb = cc11001100_hook("b[\"on\" + c].tb", !0, "assign"));
              }, !0);
            });
          }, "assign");
          c.kh = cc11001100_hook("c.kh", function () {
            a.utils.forEach(c.Jb, function (c) {
              b(c, function (b) {
                b = cc11001100_hook("b", a.l.Ld(c, b, null), "assign");
                a.l.nc(b);
              }, !0);
              b(c, function () {
                a.l.pa();
              }, !1);
            });
          }, "assign");
          c.xk = cc11001100_hook("c.xk", function () {
            EventTarget.prototype.addEventListener = cc11001100_hook("EventTarget.prototype.addEventListener", function (b, c, e) {
              if (c && c.tb) return f.call(this, b, c, e);
              var d = cc11001100_hook("d", c, "var-init");
              switch (b) {
                case "click":
                case "dblclick":
                case "auxclick":
                case "mousedown":
                case "mouseup":
                case "drop":
                case "keyup":
                case "keydown":
                case "keypress":
                case "contextmenu":
                case "pageChanged":
                case "scroll":
                case "open":
                case "message":
                case "error":
                case "close":
                  d = cc11001100_hook("d", a.l.Ef(b, c), "assign");
              }
              f.call(this, b, d, e);
            }, "assign");
          }, "assign");
          return c;
        }(), "var-init");
        c.Jb = cc11001100_hook("c.Jb", "click dblclick mousedown mouseup change scroll select submit keydown keypress keyup load unload".split(" "), "assign");
        a.Wc = cc11001100_hook("a.Wc", c, "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          b.parseURI = cc11001100_hook("b.parseURI", function (a) {
            var b = cc11001100_hook("b", String(a).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/), "var-init");
            a = cc11001100_hook("a", b && null != a.match(b[1] + "//"), "assign");
            return b && {
              href: cc11001100_hook("href", b[0] || "", "object-key-init"),
              protocol: cc11001100_hook("protocol", b[1] || "", "object-key-init"),
              zc: cc11001100_hook("zc", a ? "//" : "", "object-key-init"),
              Ic: cc11001100_hook("Ic", b[2] || "", "object-key-init"),
              lc: cc11001100_hook("lc", b[3] || "", "object-key-init"),
              host: cc11001100_hook("host", b[4] || "", "object-key-init"),
              hostname: cc11001100_hook("hostname", b[5] || "", "object-key-init"),
              port: cc11001100_hook("port", b[6] || "", "object-key-init"),
              pathname: cc11001100_hook("pathname", b[7] || "", "object-key-init"),
              search: cc11001100_hook("search", b[8] || "", "object-key-init"),
              hash: cc11001100_hook("hash", b[9] || "", "object-key-init")
            };
          }, "assign");
          b.absolutizeURI = cc11001100_hook("b.absolutizeURI", function (a, e) {
            function c(a) {
              cc11001100_hook("a", a, "function-parameter");
              var b = cc11001100_hook("b", [], "var-init");
              a.replace(/^(\.\.?(\/|$))+/, "").replace(/\/(\.(\/|$))+/g, "/").replace(/\/\.\.$/, "/../").replace(/\/?[^\/]*/g, function (a) {
                "/.." === a ? b.pop() : b.push(a);
              });
              return b.join("").replace(/^\//, "/" === a.charAt(0) ? "/" : "");
            }
            var d, h, n, m, g, q, r, p;
            p = cc11001100_hook("p", e ? b.parseURI(e) : {}, "assign");
            r = cc11001100_hook("r", a ? b.parseURI(a) : {}, "assign");
            p.protocol ? (d = cc11001100_hook("d", p.protocol, "assign"), h = cc11001100_hook("h", p.zc, "assign"), n = cc11001100_hook("n", p.Ic, "assign"), m = cc11001100_hook("m", p.lc, "assign"), g = cc11001100_hook("g", p.host, "assign"), q = cc11001100_hook("q", c(p.pathname), "assign"), r = cc11001100_hook("r", p.search, "assign")) : p.host ? (d = cc11001100_hook("d", r.protocol, "assign"), h = cc11001100_hook("h", r.zc, "assign"), n = cc11001100_hook("n", p.Ic, "assign"), m = cc11001100_hook("m", p.lc, "assign"), g = cc11001100_hook("g", p.host, "assign"), q = cc11001100_hook("q", c(p.pathname), "assign"), r = cc11001100_hook("r", p.search, "assign")) : (d = cc11001100_hook("d", r.protocol, "assign"), h = cc11001100_hook("h", r.zc, "assign"), n = cc11001100_hook("n", r.Ic, "assign"), m = cc11001100_hook("m", r.lc, "assign"), g = cc11001100_hook("g", r.host, "assign"), p.pathname ? ("/" === p.pathname.charAt(0) ? q = cc11001100_hook("q", c(p.pathname), "assign") : (q = cc11001100_hook("q", r.pathname ? r.pathname.slice(0, r.pathname.lastIndexOf("/") + 1) + p.pathname : h ? "/" + p.pathname : p.pathname, "assign"), q = cc11001100_hook("q", c(q), "assign")), r = cc11001100_hook("r", p.search, "assign")) : (q = cc11001100_hook("q", c(r.pathname), "assign"), r = cc11001100_hook("r", p.search || r.search, "assign")));
            return d + h + (n ? n + (m ? ":" + m : "") + "@" : "") + g + q + r + (p.hash ? p.hash : "");
          }, "assign");
          b.getFullyQualifiedUrl = cc11001100_hook("b.getFullyQualifiedUrl", function (f) {
            try {
              var e,
                c = cc11001100_hook("c", document.location.href, "var-init"),
                d;
              a: {
                for (var h = cc11001100_hook("h", document.getElementsByTagName("base"), "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < h.length; n++) {
                  var m = cc11001100_hook("m", h[n].href, "var-init");
                  if (m) {
                    d = cc11001100_hook("d", m, "assign");
                    break a;
                  }
                }
                d = cc11001100_hook("d", void 0, "assign");
              }
              e = cc11001100_hook("e", d ? b.absolutizeURI(c, d) : c, "assign");
              return b.absolutizeURI(e, f);
            } catch (g) {
              return a.exception(g, "M21", f, e), f;
            }
          }, "assign");
        })(a.utils || (a.utils = cc11001100_hook("a.utils", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", function () {
          function b() {
            this.rb = cc11001100_hook("this.rb", [], "assign");
            this.kb(b.yb, 0);
          }
          b.prototype.hj = cc11001100_hook("b.prototype.hj", function (a) {
            this.kb(b.td, a);
          }, "assign");
          b.prototype.jj = cc11001100_hook("b.prototype.jj", function (a) {
            this.kb(b.Bd, a);
          }, "assign");
          b.prototype.ij = cc11001100_hook("b.prototype.ij", function (a) {
            this.kb(b.vd, a);
          }, "assign");
          b.prototype.kb = cc11001100_hook("b.prototype.kb", function (a, b) {
            this.rb.push({
              gj: cc11001100_hook("gj", new Date().getTime(), "object-key-init"),
              fj: cc11001100_hook("fj", b, "object-key-init"),
              Le: cc11001100_hook("Le", a, "object-key-init")
            });
            this.Hh = cc11001100_hook("this.Hh", a, "assign");
          }, "assign");
          b.prototype.getPhaseName = cc11001100_hook("b.prototype.getPhaseName", function () {
            return this.Hh;
          }, "assign");
          b.prototype.getPhaseID = cc11001100_hook("b.prototype.getPhaseID", function (a) {
            for (var c = cc11001100_hook("c", 0, "var-init"); c < b.zd.length; c++) if (b.zd[c] === a) return c;
            return null;
          }, "assign");
          b.prototype.getPhaseCallbackTime = cc11001100_hook("b.prototype.getPhaseCallbackTime", function (a) {
            for (var b = cc11001100_hook("b", this.rb, "var-init"), d = cc11001100_hook("d", 0, "var-init"); d < b.length; d++) if (b[d].Le === a) return b[d].gj;
            return null;
          }, "assign");
          b.prototype.findPhaseAtNominalTime = cc11001100_hook("b.prototype.findPhaseAtNominalTime", function (e) {
            a.assert(0 <= e);
            for (var c = cc11001100_hook("c", this.rb, "var-init"), d = cc11001100_hook("d", c.length - 1, "var-init"); 0 <= d; d--) if (e >= c[d].fj) return c[d].Le;
            a.error("M22", e, a.utils.Oh(c));
            return b.yb;
          }, "assign");
          return b;
        }(), "var-init");
        b.yb = cc11001100_hook("b.yb", "AFTER_FIRST_BYTE", "assign");
        b.td = cc11001100_hook("b.td", "AFTER_DOM_INTERACTIVE", "assign");
        b.Bd = cc11001100_hook("b.Bd", "AT_ONLOAD", "assign");
        b.vd = cc11001100_hook("b.vd", "AFTER_ONLOAD", "assign");
        b.zd = cc11001100_hook("b.zd", [b.yb, b.td, b.Bd, b.vd], "assign");
        a.Jk = cc11001100_hook("a.Jk", b, "assign");
        a.lifecycle = cc11001100_hook("a.lifecycle", new b(), "assign");
        a.lifecycle = cc11001100_hook("a.lifecycle", a.lifecycle, "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        a = cc11001100_hook("a", a.events || (a.events = cc11001100_hook("a.events", {}, "assign")), "assign");
        a = cc11001100_hook("a", a.b || (a.b = cc11001100_hook("a.b", {}, "assign")), "assign");
        a.navigationStart = cc11001100_hook("a.navigationStart", "navigationStart", "assign");
        a.domainLookupStart = cc11001100_hook("a.domainLookupStart", "domainLookupStart", "assign");
        a.domainLookupEnd = cc11001100_hook("a.domainLookupEnd", "domainLookupEnd", "assign");
        a.connectStart = cc11001100_hook("a.connectStart", "connectStart", "assign");
        a.secureConnectionStart = cc11001100_hook("a.secureConnectionStart", "secureConnectionStart", "assign");
        a.connectEnd = cc11001100_hook("a.connectEnd", "connectEnd", "assign");
        a.requestStart = cc11001100_hook("a.requestStart", "requestStart", "assign");
        a.responseStart = cc11001100_hook("a.responseStart", "responseStart", "assign");
        a.responseEnd = cc11001100_hook("a.responseEnd", "responseEnd", "assign");
        a.domContentLoadedEventStart = cc11001100_hook("a.domContentLoadedEventStart", "domContentLoadedEventStart", "assign");
        a.loadEventEnd = cc11001100_hook("a.loadEventEnd", "loadEventEnd", "assign");
        a.gf = cc11001100_hook("a.gf", "sendTime", "assign");
        a.Vd = cc11001100_hook("a.Vd", "firstByteTime", "assign");
        a.cf = cc11001100_hook("a.cf", "respAvailTime", "assign");
        a.df = cc11001100_hook("a.df", "respProcTime", "assign");
        a.Kc = cc11001100_hook("a.Kc", "viewChangeStart", "assign");
        a.Af = cc11001100_hook("a.Af", "viewChangeEnd", "assign");
        a.Lc = cc11001100_hook("a.Lc", "viewDOMLoaded", "assign");
        a.Hf = cc11001100_hook("a.Hf", "xhrRequestsCompleted", "assign");
        a.Cl = cc11001100_hook("a.Cl", "viewFragmentsLoaded", "assign");
        a.Dl = cc11001100_hook("a.Dl", "viewResourcesLoaded", "assign");
        a.Mc = cc11001100_hook("a.Mc", "virtualPageStart", "assign");
        a.sk = cc11001100_hook("a.sk", "virtualPageEnd", "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", a.events || (a.events = cc11001100_hook("a.events", {}, "assign")), "var-init");
        b.metricSpec = cc11001100_hook("b.metricSpec", {}, "assign");
        b.metricSpec[a.EventType.PageView] = cc11001100_hook("b.metricSpec[a.EventType.PageView]", {
          Th: {
            start: cc11001100_hook("start", b.b.navigationStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.loadEventEnd, "object-key-init"),
            name: cc11001100_hook("name", "PLT", "object-key-init")
          },
          $h: {
            start: cc11001100_hook("start", b.b.navigationStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.responseStart, "object-key-init"),
            name: cc11001100_hook("name", "FBT", "object-key-init")
          },
          wl: {
            start: cc11001100_hook("start", b.b.navigationStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.requestStart, "object-key-init"),
            name: cc11001100_hook("name", "SCT", "object-key-init")
          },
          xl: {
            start: cc11001100_hook("start", b.b.secureConnectionStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.connectEnd, "object-key-init"),
            name: cc11001100_hook("name", "SHT", "object-key-init")
          },
          Zk: {
            start: cc11001100_hook("start", b.b.domainLookupStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.domainLookupEnd, "object-key-init"),
            name: cc11001100_hook("name", "DLT", "object-key-init")
          },
          Bl: {
            start: cc11001100_hook("start", b.b.connectStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.connectEnd, "object-key-init"),
            name: cc11001100_hook("name", "TCP", "object-key-init")
          },
          tl: {
            start: cc11001100_hook("start", b.b.requestStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.responseStart, "object-key-init"),
            name: cc11001100_hook("name", "RAT", "object-key-init")
          },
          al: {
            start: cc11001100_hook("start", b.b.responseStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.loadEventEnd, "object-key-init"),
            name: cc11001100_hook("name", "FET", "object-key-init")
          },
          dl: {
            start: cc11001100_hook("start", b.b.responseStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.domContentLoadedEventStart, "object-key-init"),
            name: cc11001100_hook("name", "DRT", "object-key-init")
          },
          cl: {
            start: cc11001100_hook("start", b.b.responseStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.responseEnd, "object-key-init"),
            name: cc11001100_hook("name", "DDT", "object-key-init")
          },
          Xk: {
            start: cc11001100_hook("start", b.b.responseEnd, "object-key-init"),
            end: cc11001100_hook("end", b.b.domContentLoadedEventStart, "object-key-init"),
            name: cc11001100_hook("name", "DPT", "object-key-init")
          },
          sl: {
            start: cc11001100_hook("start", b.b.domContentLoadedEventStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.loadEventEnd, "object-key-init"),
            name: cc11001100_hook("name", "PRT", "object-key-init")
          },
          Yk: {
            start: cc11001100_hook("start", b.b.navigationStart, "object-key-init"),
            end: cc11001100_hook("end", b.b.domContentLoadedEventStart, "object-key-init"),
            name: cc11001100_hook("name", "DOM", "object-key-init")
          }
        }, "assign");
        b.metricSpec[a.EventType.Ajax] = cc11001100_hook("b.metricSpec[a.EventType.Ajax]", {
          $h: {
            start: cc11001100_hook("start", b.b.gf, "object-key-init"),
            end: cc11001100_hook("end", b.b.Vd, "object-key-init"),
            name: cc11001100_hook("name", "FBT", "object-key-init")
          },
          Nk: {
            start: cc11001100_hook("start", b.b.Vd, "object-key-init"),
            end: cc11001100_hook("end", b.b.cf, "object-key-init"),
            name: cc11001100_hook("name", "DDT", "object-key-init")
          },
          Mk: {
            start: cc11001100_hook("start", b.b.cf, "object-key-init"),
            end: cc11001100_hook("end", b.b.df, "object-key-init"),
            name: cc11001100_hook("name", "DPT", "object-key-init")
          },
          Th: {
            start: cc11001100_hook("start", b.b.gf, "object-key-init"),
            end: cc11001100_hook("end", b.b.df, "object-key-init"),
            name: cc11001100_hook("name", "PLT", "object-key-init")
          }
        }, "assign");
        b.metricSpec[a.EventType.VPageView] = cc11001100_hook("b.metricSpec[a.EventType.VPageView]", {
          kl: {
            start: cc11001100_hook("start", b.b.Mc, "object-key-init"),
            end: cc11001100_hook("end", b.b.sk, "object-key-init"),
            name: cc11001100_hook("name", "PLT", "object-key-init")
          },
          Vk: {
            start: cc11001100_hook("start", b.b.Kc, "object-key-init"),
            end: cc11001100_hook("end", b.b.Af, "object-key-init"),
            name: cc11001100_hook("name", "DDT", "object-key-init")
          },
          hl: {
            start: cc11001100_hook("start", b.b.Kc, "object-key-init"),
            end: cc11001100_hook("end", b.b.Lc, "object-key-init"),
            name: cc11001100_hook("name", "DRT", "object-key-init")
          },
          Ek: {
            start: cc11001100_hook("start", b.b.Af, "object-key-init"),
            end: cc11001100_hook("end", b.b.Lc, "object-key-init"),
            name: cc11001100_hook("name", "DPT", "object-key-init")
          },
          Fk: {
            start: cc11001100_hook("start", b.b.Kc, "object-key-init"),
            end: cc11001100_hook("end", b.b.Lc, "object-key-init"),
            name: cc11001100_hook("name", "DOM", "object-key-init")
          },
          rl: {
            start: cc11001100_hook("start", "viewChangeEnd", "object-key-init"),
            end: cc11001100_hook("end", "xhrRequestsCompleted", "object-key-init"),
            name: cc11001100_hook("name", null, "object-key-init")
          },
          il: {
            start: cc11001100_hook("start", "viewChangeEnd", "object-key-init"),
            end: cc11001100_hook("end", "viewPartialsLoaded", "object-key-init"),
            name: cc11001100_hook("name", null, "object-key-init")
          },
          gl: {
            start: cc11001100_hook("start", "viewPartialsLoaded", "object-key-init"),
            end: cc11001100_hook("end", "viewFragmentsLoaded", "object-key-init"),
            name: cc11001100_hook("name", null, "object-key-init")
          },
          jl: {
            start: cc11001100_hook("start", "viewPartialsLoaded", "object-key-init"),
            end: cc11001100_hook("end", "viewResourcesLoaded", "object-key-init"),
            name: cc11001100_hook("name", null, "object-key-init")
          }
        }, "assign");
        b.metricSpec[a.EventType.NG_VIRTUAL_PAGE] = cc11001100_hook("b.metricSpec[a.EventType.NG_VIRTUAL_PAGE]", b.metricSpec[a.EventType.VPageView], "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function (e) {
            function c(d) {
              cc11001100_hook("d", d, "function-parameter");
              d = cc11001100_hook("d", e.call(this, d) || this, "assign");
              d.constructor != c && d.constructor != b.AdrumAjax && a.reportAPIMessage(a.I.V, a.ta, "ADRUM.events.Ajax", []);
              return d;
            }
            u(c, e);
            c.prototype.type = cc11001100_hook("c.prototype.type", function () {
              return a.EventType.Ajax;
            }, "assign");
            return c;
          }(b.EventTracker), "var-init");
          b.Ajax = cc11001100_hook("b.Ajax", f, "assign");
          b.la(b.G[a.EventType.Ajax], f.prototype);
          b.Ad(b.metricSpec[a.EventType.Ajax], f.prototype);
        })(a.events || (a.events = cc11001100_hook("a.events", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function (b) {
            function c(a) {
              cc11001100_hook("a", a, "function-parameter");
              return b.call(this, a) || this;
            }
            u(c, b);
            c.prototype.type = cc11001100_hook("c.prototype.type", function () {
              return a.EventType.Ajax;
            }, "assign");
            return c;
          }(b.Ajax), "var-init");
          b.AdrumAjax = cc11001100_hook("b.AdrumAjax", f, "assign");
          b.la(b.G[a.EventType.ADRUM_XHR], f.prototype);
        })(a.events || (a.events = cc11001100_hook("a.events", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", a.utils.isObject, "var-init"),
            e = cc11001100_hook("e", a.utils.isDefined, "var-init"),
            c = cc11001100_hook("c", a.utils.map, "var-init"),
            d = cc11001100_hook("d", a.utils.reduce, "var-init"),
            h = cc11001100_hook("h", a.utils.filter, "var-init"),
            n = cc11001100_hook("n", a.utils.vk, "var-init"),
            m = cc11001100_hook("m", a.utils.isString, "var-init"),
            g = cc11001100_hook("g", a.utils.Kh, "var-init"),
            q = cc11001100_hook("q", a.utils.Ah, "var-init"),
            r = cc11001100_hook("r", a.utils.isFunction, "var-init"),
            p = cc11001100_hook("p", a.utils.mergeJSON, "var-init"),
            s = cc11001100_hook("s", a.utils.Ab, "var-init"),
            t = cc11001100_hook("t", a.utils.now, "var-init"),
            v = cc11001100_hook("v", a.utils.lb, "var-init"),
            w = cc11001100_hook("w", function (w) {
              function l() {
                var b = cc11001100_hook("b", w.call(this) || this, "var-init");
                b.conf = cc11001100_hook("b.conf", null, "assign");
                b.Cc = cc11001100_hook("b.Cc", !1, "assign");
                b.zb = cc11001100_hook("b.zb", 0, "assign");
                if (!0 === window["adrum-xhr-disable"]) return a.log("M23"), b;
                if (!window.XMLHttpRequest) return a.log("M24"), b;
                b.conf = cc11001100_hook("b.conf", {
                  exclude: cc11001100_hook("exclude", [{
                    urls: cc11001100_hook("urls", [{
                      pattern: cc11001100_hook("pattern", a.conf.beaconUrlHttp + a.conf.corsEndpointPath, "object-key-init")
                    }, {
                      pattern: cc11001100_hook("pattern", a.conf.beaconUrlHttps + a.conf.corsEndpointPath, "object-key-init")
                    }], "object-key-init")
                  }], "object-key-init"),
                  include: cc11001100_hook("include", [], "object-key-init"),
                  maxPerPageView: cc11001100_hook("maxPerPageView", l.Vc, "object-key-init")
                }, "assign");
                l.Re(b.conf, a.conf.userConf && a.conf.userConf.xhr);
                b.h = cc11001100_hook("b.h", window.XMLHttpRequest.prototype, "assign");
                if (!b.h) return a.log("M25"), b;
                if (!("open" in b.h && "send" in b.h)) return a.log("M26"), b;
                b.Cc = cc11001100_hook("b.Cc", a.aop.support(b.h.open) && a.aop.support(b.h.send), "assign");
                b.Cc || a.log("M27");
                return b;
              }
              u(l, w);
              l.Re = cc11001100_hook("l.Re", function (b, c) {
                var e = cc11001100_hook("e", l.Vc, "var-init");
                if (c) {
                  var d = cc11001100_hook("d", c.maxPerPageView, "var-init");
                  a.utils.isNumber(d) && 0 < d ? e = cc11001100_hook("e", d, "assign") : a.reportAPIMessage(a.I.Of, "value is not valid; don't limit xhr", "xhr.maxPerPageView", [d]);
                }
                b.maxPerPageView = cc11001100_hook("b.maxPerPageView", e, "assign");
                b.exclude = cc11001100_hook("b.exclude", l.Jc(l.zf, "exclude", b, c), "assign");
                b.include = cc11001100_hook("b.include", l.Jc(l.zf, "include", b, c), "assign");
                b.parameter = cc11001100_hook("b.parameter", l.Jc(l.qk, "parameter", c), "assign");
              }, "assign");
              l.Jc = cc11001100_hook("l.Jc", function (a, b) {
                for (var e = cc11001100_hook("e", [], "var-init"), d = cc11001100_hook("d", 2, "var-init"); d < arguments.length; d++) e[d - 2] = cc11001100_hook("e[d - 2]", arguments[d], "assign");
                return g(c(h(q(c(g(e), function (a) {
                  return n(a[b]);
                })), l.Ki(b)), a));
              }, "assign");
              l.zf = cc11001100_hook("l.zf", function (a) {
                var b = cc11001100_hook("b", l.Pe(a), "var-init");
                a = cc11001100_hook("a", l.Qe(a), "assign");
                return b || a;
              }, "assign");
              l.Ki = cc11001100_hook("l.Ki", function (b) {
                return function (c) {
                  return f(c) || a.reportAPIMessage(a.I.Nf, "Filter object must be an object", "xhr." + b, [c]);
                };
              }, "assign");
              l.Qe = cc11001100_hook("l.Qe", function (a) {
                var b = cc11001100_hook("b", a.urls, "var-init");
                if (b && 0 < b.length && (a.urls = cc11001100_hook("a.urls", l.Gh(b), "assign"), 0 < a.urls.length)) return a;
              }, "assign");
              l.Pe = cc11001100_hook("l.Pe", function (b) {
                var c = cc11001100_hook("c", b.method, "var-init");
                if (e(c)) {
                  if (m(c)) return b;
                  a.error("M28");
                }
              }, "assign");
              l.qk = cc11001100_hook("l.qk", function (a) {
                var b = cc11001100_hook("b", l.Qe(a), "var-init");
                l.Pe(a);
                return l.zj(a) && b;
              }, "assign");
              l.zj = cc11001100_hook("l.zj", function (b) {
                if (r(b.getFromBody)) return b;
                a.error("M29");
              }, "assign");
              l.Gh = cc11001100_hook("l.Gh", function (b) {
                for (var c = cc11001100_hook("c", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
                  var d = cc11001100_hook("d", b[e].pattern, "var-init");
                  if ("string" === typeof d) try {
                    c.push(new RegExp(d));
                  } catch (h) {
                    a.exception(h, "Parse regex pattern failed.");
                  } else a.error("xhr filter pattern should be a string");
                }
                return c;
              }, "assign");
              l.kf = cc11001100_hook("l.kf", function (a, b, c) {
                var e = cc11001100_hook("e", c && c.include, "var-init");
                c = cc11001100_hook("c", c && c.exclude, "assign");
                return e && 0 < e.length && !l.qe(b, a, e) || c && 0 < c.length && l.qe(b, a, c);
              }, "assign");
              l.Da = cc11001100_hook("l.Da", function (b) {
                var c = cc11001100_hook("c", b.message || b.description, "var-init"),
                  e = cc11001100_hook("e", b.fileName || b.filename, "var-init"),
                  d = cc11001100_hook("d", b.lineNumber, "var-init");
                a.utils.isString(b.description) && 0 <= b.description.indexOf("Access is denied.") && (c += cc11001100_hook("c", ": maybe you have CORS XHR error in IE", "assign"));
                a.monitor.ma.Ye(c, e, d, b);
              }, "assign");
              l.prototype.setUp = cc11001100_hook("l.prototype.setUp", function () {
                if (this.Cc) {
                  a.log("M30");
                  a.xhrConstructor = cc11001100_hook("a.xhrConstructor", window.XMLHttpRequest, "assign");
                  a.xhrOpen = cc11001100_hook("a.xhrOpen", this.xhrOpen = cc11001100_hook("this.xhrOpen", this.h.open, "assign"), "assign");
                  a.xhrSend = cc11001100_hook("a.xhrSend", this.xhrSend = cc11001100_hook("this.xhrSend", this.h.send, "assign"), "assign");
                  var b = cc11001100_hook("b", this, "var-init");
                  this.h.open = cc11001100_hook("this.h.open", a.aop.around(this.h.open, function () {
                    l.Oi(this) && (4 === this.readyState ? (a.log("M31"), l.Uh(this._adrumAjaxT), delete this.rd, l.a(this, this._adrumAjaxT)) : a.log("M32" + this._adrumAjaxT.url() + "' is reported."));
                    var c = cc11001100_hook("c", 1 <= arguments.length ? String(arguments[0]) : "", "var-init"),
                      e = cc11001100_hook("e", 2 <= arguments.length ? String(arguments[1]) : "", "var-init"),
                      e = cc11001100_hook("e", a.utils.getFullyQualifiedUrl(e), "var-init");
                    b.zb >= b.conf.maxPerPageView || l.kf(e, c, b.conf) || (this._adrumAjaxT = cc11001100_hook("this._adrumAjaxT", new a.events.AdrumAjax(a.utils.mergeJSON({
                      method: cc11001100_hook("method", c, "object-key-init"),
                      url: cc11001100_hook("url", e, "object-key-init")
                    }, b.status)), "assign"));
                  }, null, "XHR.open", l.Da), "assign");
                  this.h.send = cc11001100_hook("this.h.send", a.aop.around(this.h.send, function (e) {
                    var d = cc11001100_hook("d", this, "var-init"),
                      h = cc11001100_hook("h", this._adrumAjaxT, "var-init"),
                      n = cc11001100_hook("n", !1, "var-init");
                    if (h && !(++b.zb > b.conf.maxPerPageView)) {
                      var m = cc11001100_hook("m", a.utils.now(), "var-init"),
                        f = cc11001100_hook("f", h.getSendTime(), "var-init");
                      a.assert(null === f, "M33");
                      h.timestamp(m);
                      h.markSendTime(f || m);
                      h.parentPhase(a.lifecycle.getPhaseName());
                      a.conf.spa2 && (d.Sa = cc11001100_hook("d.Sa", new a.Uc(a.l.Za(), new a.za("XHR.send")), "assign"));
                      l.Pi(h.url()) ? d.setRequestHeader("ADRUM", "isAjax:true") : a.log("M34", document.location.href, h.url());
                      e = cc11001100_hook("e", l.li(h.url(), b.conf.parameter, e), "assign");
                      h.parameter(e);
                      var g = cc11001100_hook("g", 0, "var-init"),
                        k = function () {
                          if (4 == d.readyState) n ? a.log("M35") : (a.log("M36"), b.ub(d));else {
                            var e = cc11001100_hook("e", null, "var-init");
                            try {
                              e = cc11001100_hook("e", d.onreadystatechange, "assign");
                            } catch (h) {
                              if (n) {
                                a.log("M37", h);
                                return;
                              }
                              a.log("M38", h);
                              b.ub(d);
                              return;
                            }
                            g++;
                            e ? a.aop.support(e) ? (d.onreadystatechange = cc11001100_hook("d.onreadystatechange", l.Md(e, "XHR.onReadyStateChange"), "assign"), a.log("M39", g)) : c || (a.log("M40"), b.ub(d)) : g < l.eh ? a.utils.lb(k) : n ? a.log("M41") : (a.log("M42"), b.ub(d));
                          }
                        };
                      if (c) {
                        a.log("M43");
                        try {
                          b.zk.call(d, "readystatechange", l.Lh), n = cc11001100_hook("n", !0, "assign");
                        } catch (q) {
                          a.error("M44", q);
                        }
                      }
                      k();
                    }
                  }, function () {
                    if (a.conf.spa2) {
                      var b = cc11001100_hook("b", this._adrumAjaxT, "var-init");
                      b && a.c.w.J.lh(b.url());
                    }
                  }, "XHR.send", l.Da), "assign");
                  var c = cc11001100_hook("c", "addEventListener" in this.h && "removeEventListener" in this.h && a.aop.support(this.h.addEventListener) && a.aop.support(this.h.removeEventListener), "var-init");
                  c ? (this.zk = cc11001100_hook("this.zk", this.h.addEventListener, "assign"), this.h.addEventListener = cc11001100_hook("this.h.addEventListener", a.aop.around(this.h.addEventListener, function (b, c) {
                    if (/^(load|error|readystatechange)$/.test(b) && c) {
                      var e = cc11001100_hook("e", l.mk(c), "var-init");
                      if (e) {
                        var d = cc11001100_hook("d", s(arguments), "var-init");
                        d[1] = cc11001100_hook("d[1]", e, "assign");
                        a.log("M45");
                        return d;
                      }
                      a.log("M46", b, c);
                    }
                  }, null, "XHR.addEventListener"), "assign"), this.Bk = cc11001100_hook("this.Bk", this.h.removeEventListener, "assign"), this.h.removeEventListener = cc11001100_hook("this.h.removeEventListener", a.aop.around(this.h.removeEventListener, function (c, e) {
                    if (this._adrumAjaxT) {
                      var d = cc11001100_hook("d", s(arguments), "var-init");
                      e.__adrumInterceptor ? (d[1] = cc11001100_hook("d[1]", e.__adrumInterceptor, "assign"), a.log("M47"), b.Bk.apply(this, d)) : a.log("M48");
                    }
                  }, null, "XHR.removeEventListener"), "assign")) : a.log("M49");
                  a.log("M50");
                }
              }, "assign");
              l.prototype.tc = cc11001100_hook("l.prototype.tc", function () {
                this.zb = cc11001100_hook("this.zb", 0, "assign");
              }, "assign");
              l.We = cc11001100_hook("l.We", function (a) {
                l.T[a] = cc11001100_hook("l.T[a]", [], "assign");
                delete l.T[a];
              }, "assign");
              l.oc = cc11001100_hook("l.oc", function (b, c) {
                if (a.utils.isDefined(c.Sa)) {
                  var e = cc11001100_hook("e", a.l.Db(c.Sa).guid, "var-init");
                  l.vf(c, b);
                  a.utils.isDefined(l.T[e]) || (l.T[e] = cc11001100_hook("l.T[e]", [], "assign"));
                  -1 == l.T[e].indexOf(b) && l.T[e].push(b);
                } else a.log("~AnySPA: error in putInParentEventWaitingQueue() as xhr._xhrEvent is undefined.");
              }, "assign");
              l.aj = cc11001100_hook("l.aj", function (b, c) {
                var e = cc11001100_hook("e", l.T[c], "var-init");
                a.utils.isDefined(e) && (e.forEach(function (c) {
                  c.parent(b);
                  a.command("reportXhr", c);
                  a.l.pa();
                }), l.We(c));
              }, "assign");
              l.Cj = cc11001100_hook("l.Cj", function () {
                for (var b in l.T) l.T[b].forEach(function (b) {
                  a.command("reportXhr", b);
                  a.l.pa();
                }), l.We(b);
              }, "assign");
              l.Ae = cc11001100_hook("l.Ae", function (a, b) {
                for (var c = cc11001100_hook("c", !1, "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < b.length; e++) {
                  var d = cc11001100_hook("d", b[e], "var-init");
                  if (d && d.test(a)) {
                    c = cc11001100_hook("c", !0, "assign");
                    break;
                  }
                }
                return c;
              }, "assign");
              l.qe = cc11001100_hook("l.qe", function (a, b, c) {
                var e = cc11001100_hook("e", !1, "var-init");
                if (b && c) for (var d = cc11001100_hook("d", 0, "var-init"); d < c.length; d++) {
                  var h = cc11001100_hook("h", c[d], "var-init");
                  if (!(h.method && a !== h.method || h.urls && !l.Ae(b, h.urls))) {
                    e = cc11001100_hook("e", !0, "assign");
                    break;
                  }
                }
                return e;
              }, "assign");
              l.tj = cc11001100_hook("l.tj", function (a, b, c) {
                return (b || a) === (c || a);
              }, "assign");
              l.Pi = cc11001100_hook("l.Pi", function (a) {
                var b = cc11001100_hook("b", document.createElement("a"), "var-init");
                b.href = cc11001100_hook("b.href", a, "assign");
                a = cc11001100_hook("a", document.location, "assign");
                var c = cc11001100_hook("c", a.protocol, "var-init");
                return b.protocol === c && b.hostname === a.hostname && l.tj(l.Jh[c], b.port, a.port);
              }, "assign");
              l.li = cc11001100_hook("l.li", function (a, b, e) {
                if (b && (b = cc11001100_hook("b", h(c(h(b, function (b) {
                  return l.Ae(a, b.urls);
                }), function (a) {
                  return a.getFromBody(e);
                }), f), "assign"), 0 < b.length)) return d(b, p, {});
              }, "assign");
              l.Ub = cc11001100_hook("l.Ub", function (b) {
                var c = cc11001100_hook("c", b._adrumAjaxT, "var-init");
                if (c) {
                  var e = cc11001100_hook("e", a.utils.now(), "var-init");
                  2 == b.readyState ? c.markFirstByteTime(c.getFirstByteTime() || e) : 4 == b.readyState && (c.markRespAvailTime(c.getRespAvailTime() || e), c.markFirstByteTime(c.getFirstByteTime() || e), a.conf.spa2 && (b = cc11001100_hook("b", new a.Uc(b.Sa, new a.za("XHR.load")), "assign"), a.l.nc(b)));
                }
              }, "assign");
              l.fe = cc11001100_hook("l.fe", function (b) {
                var c = cc11001100_hook("c", b._adrumAjaxT, "var-init");
                if (c && 4 == b.readyState) {
                  var e = cc11001100_hook("e", t(), "var-init"),
                    d = cc11001100_hook("d", c.getRespProcTime(), "var-init");
                  c.markRespAvailTime(c.getRespAvailTime() || e);
                  e > d && c.markRespProcTime(e);
                  a.conf.spa2 ? l.Dh(b, c) : l.vc(b, c);
                }
              }, "assign");
              l.Md = cc11001100_hook("l.Md", function (a, b) {
                return l.Ak(a, function () {
                  l.Ub(this);
                }, function () {
                  l.fe(this);
                }, b);
              }, "assign");
              l.Lh = cc11001100_hook("l.Lh", function () {
                l.Ub(this);
                l.fe(this);
              }, "assign");
              l.Oi = cc11001100_hook("l.Oi", function (b) {
                return a.utils.isDefined(b._adrumAjaxT) && a.utils.isString(b._adrumAjaxT._url);
              }, "assign");
              l.Uh = cc11001100_hook("l.Uh", function (b) {
                var c = cc11001100_hook("c", a.utils.now(), "var-init");
                b.markRespAvailTime(b.getRespAvailTime() || c);
                b.markFirstByteTime(b.getFirstByteTime() || c);
                b.markRespProcTime(b.getRespProcTime() || c);
              }, "assign");
              l.vc = cc11001100_hook("l.vc", function (a, b) {
                var c = cc11001100_hook("c", {}, "var-init");
                a.rd = cc11001100_hook("a.rd", c, "assign");
                v(function () {
                  a.rd === c && (delete a._adrumAjaxT, l.a(a, b));
                });
              }, "assign");
              l.Dh = cc11001100_hook("l.Dh", function (c, e) {
                var d = cc11001100_hook("d", a.l.Db(c.Sa), "var-init");
                a.utils.isDefined(b.A.vp) && !b.A.U && b.A.vp.Eb == d ? (e.parent(b.A.vp), l.vc(c, e), a.l.pa()) : (a.utils.isDefined(b.A.vp) && !b.A.U && e.parent(b.A.vp), l.oc(e, c), a.utils.Ha.apply(null, [l.Cj, l.kd]), delete c._adrumAjaxT);
                a.c.w.J.sd(e.url());
              }, "assign");
              l.vf = cc11001100_hook("l.vf", function (a, b) {
                var c = cc11001100_hook("c", a.status, "var-init"),
                  e;
                b.xhrStatus(c);
                b.allResponseHeaders(a.getAllResponseHeaders());
                if (400 <= c) {
                  try {
                    m(a.responseText) && (e = cc11001100_hook("e", a.responseText, "assign"));
                  } catch (d) {
                    m(a.responseType) && (e = cc11001100_hook("e", a.responseType, "assign"));
                  }
                  b.error({
                    status: cc11001100_hook("status", c, "object-key-init"),
                    msg: cc11001100_hook("msg", e, "object-key-init")
                  });
                }
              }, "assign");
              l.a = cc11001100_hook("l.a", function (b, c) {
                l.vf(b, c);
                a.command("reportXhr", c);
              }, "assign");
              l.prototype.ub = cc11001100_hook("l.prototype.ub", function (b) {
                if (b._adrumAjaxT) {
                  var c = cc11001100_hook("c", a.utils.now() + 3E4, "var-init"),
                    e = function () {
                      l.Ub(b);
                      var d = cc11001100_hook("d", b._adrumAjaxT, "var-init");
                      if (d) {
                        var h = cc11001100_hook("h", a.utils.now(), "var-init");
                        4 == b.readyState ? (a.assert(null === d.getRespProcTime(), "M51"), d.markRespProcTime(d.getRespProcTime() || h), a.log("M52"), l.vc(b, d), a.conf.spa2 && (a.l.pa(), a.c.w.J.sd(d.url()))) : h < c ? a.utils.Ha.apply(null, [e, l.kd]) : (delete b._adrumAjaxT, a.log("M53"));
                      }
                    };
                  e();
                }
              }, "assign");
              l.Ak = cc11001100_hook("l.Ak", function (b, c, e, d) {
                var h = cc11001100_hook("h", b, "var-init");
                b && "object" === typeof b && "toString" in b && "[xpconnect wrapped nsIDOMEventListener]" === b.toString() && "handleEvent" in b && (h = cc11001100_hook("h", function () {
                  b.handleEvent.apply(this, s(arguments));
                }, "assign"));
                return a.aop.around(h, c, e, d);
              }, "assign");
              l.mk = cc11001100_hook("l.mk", function (b) {
                if (b.__adrumInterceptor) return b.__adrumInterceptor;
                if (a.aop.support(b)) {
                  var c = cc11001100_hook("c", l.Md(b, "XHR.invokeEventListener"), "var-init");
                  return b.__adrumInterceptor = cc11001100_hook("b.__adrumInterceptor", c, "assign");
                }
              }, "assign");
              return l;
            }(b.Xc), "var-init");
          w.eh = cc11001100_hook("w.eh", 5, "assign");
          w.$f = cc11001100_hook("w.$f", 50, "assign");
          w.Vc = cc11001100_hook("w.Vc", 50, "assign");
          w.kd = cc11001100_hook("w.kd", 2E3, "assign");
          w.T = cc11001100_hook("w.T", {}, "assign");
          w.Jh = cc11001100_hook("w.Jh", {
            "http:": cc11001100_hook("http:", "80", "object-key-init"),
            "https:": cc11001100_hook("https:", "443", "object-key-init")
          }, "assign");
          b.Ba = cc11001100_hook("b.Ba", w, "assign");
          b.ja = cc11001100_hook("b.ja", new b.Ba(), "assign");
        })(a.monitor || (a.monitor = cc11001100_hook("a.monitor", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function (e) {
            function c(b) {
              cc11001100_hook("b", b, "function-parameter");
              b = cc11001100_hook("b", e.call(this, b) || this, "assign");
              b.perf = cc11001100_hook("b.perf", new a.PerformanceTracker(), "assign");
              a.monitor.ja.tc();
              return b;
            }
            u(c, e);
            c.prototype.type = cc11001100_hook("c.prototype.type", function () {
              return a.EventType.VPageView;
            }, "assign");
            c.prototype.Qb = cc11001100_hook("c.prototype.Qb", function () {
              return b.EventTracker.Bb(this.guid(), this.url(), this.type());
            }, "assign");
            c.prototype.Bc = cc11001100_hook("c.prototype.Bc", function () {
              var b = cc11001100_hook("b", this.Qb(), "var-init");
              a.monitor.ma.set("parent", b);
              a.log("SPA2~ AnySpaVPageView startCorrelatingErrors, GUID: %s, Url: %s", b.guid(), b.url());
            }, "assign");
            c.prototype.startCorrelatingXhrs = cc11001100_hook("c.prototype.startCorrelatingXhrs", function () {
              a.log("SPA2~ AnySpaVPageView startCorrelatingXhrs");
              a.utils.isDefined(this.Eb) && !a.monitor.A.U && a.monitor.Ba.aj(this, this.Eb.guid);
            }, "assign");
            c.prototype.start = cc11001100_hook("c.prototype.start", function () {
              this.startCorrelatingXhrs();
              this.Bc();
            }, "assign");
            return c;
          }(b.EventTracker), "var-init");
          b.Qc = cc11001100_hook("b.Qc", f, "assign");
          b.la(b.G[a.EventType.VPageView], f.prototype);
        })(a.events || (a.events = cc11001100_hook("a.events", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function () {
            function e() {}
            e.prototype.setUp = cc11001100_hook("e.prototype.setUp", function () {
              var c = cc11001100_hook("c", !1, "var-init");
              e.oe = cc11001100_hook("e.oe", !1, "assign");
              e.Dd = cc11001100_hook("e.Dd", a.utils.Nd(), "assign");
              a.l.setUp();
              a.Wc.setUp();
              b.ga.setUp();
              a.c.w.setUp(a.utils.now());
              e.fa = cc11001100_hook("e.fa", document.URL, "assign");
              a.utils.isDefined(window.history) && a.utils.isFunction(window.history.pushState) && (c = cc11001100_hook("c", !0, "assign"), window.history.pushState = cc11001100_hook("window.history.pushState", a.aop.around(window.history.pushState, function () {
                b.DOMEventsMonitor.Fa && (e.wc(), e.U = cc11001100_hook("e.U", !1, "assign"), e.Wa(document.URL));
              }, function () {
                b.DOMEventsMonitor.Fa && e.pb(document.URL);
                e.fa = cc11001100_hook("e.fa", document.URL, "assign");
              }, "historyPushState"), "assign"));
              a.utils.isDefined(window.addEventListener) && (c = cc11001100_hook("c", !0, "assign"), window.addEventListener("popstate", function (c) {
                e.oe = cc11001100_hook("e.oe", !0, "assign");
                var h = cc11001100_hook("h", document.URL, "var-init");
                a.log("SPA2~ popstate event " + c);
                b.DOMEventsMonitor.Fa && (e.wc(), e.U = cc11001100_hook("e.U", !1, "assign"), e.Wa(e.fa), e.pb(h));
                e.fa = cc11001100_hook("e.fa", h, "assign");
              }));
              a.utils.isDefined(window.addEventListener) && (c = cc11001100_hook("c", !0, "assign"), window.addEventListener("hashchange", function () {
                if (!e.oe) {
                  var c = cc11001100_hook("c", document.URL, "var-init");
                  a.log("SPA2~ hashChange: from " + e.fa + " to " + c);
                  b.DOMEventsMonitor.Fa && (e.wc(), e.U = cc11001100_hook("e.U", !1, "assign"), e.Wa(e.fa), e.pb(c));
                  e.fa = cc11001100_hook("e.fa", c, "assign");
                }
              }));
              c || a.log("SPA2~ The browser maybe too old. AnySPA monitoring cannot start up.");
            }, "assign");
            e.Eh = cc11001100_hook("e.Eh", function () {
              e.U = cc11001100_hook("e.U", !0, "assign");
              e.Wa(e.fa);
              e.pb();
            }, "assign");
            e.wc = cc11001100_hook("e.wc", function () {
              if (!e.U && a.utils.isDefined(e.vp) && !e.vp.Ze) {
                var b = cc11001100_hook("b", a.utils.now(), "var-init");
                a.c.w.B ? (b = cc11001100_hook("b", a.c.w.cb ? a.utils.max(a.c.w.O.na, a.c.w.J.oa) : a.c.w.startTime, "assign"), a.c.w.reset()) : b = cc11001100_hook("b", e.vp.timestamp(), "assign");
                e.ye(e.vp.startTime, b);
                e.xe(e.vp.startTime, b);
                e.report();
              }
            }, "assign");
            e.Wa = cc11001100_hook("e.Wa", function (b) {
              e.reset();
              e.vp = cc11001100_hook("e.vp", new a.events.Qc(), "assign");
              e.vp.yl = cc11001100_hook("e.vp.yl", b, "assign");
              b = cc11001100_hook("b", a.l.Cd(), "assign");
              e.vp.startTime = cc11001100_hook("e.vp.startTime", e.U ? a.utils.Nd() : a.utils.isDefined(b) ? b.start : a.utils.now(), "assign");
              e.vp.Eb = cc11001100_hook("e.vp.Eb", b, "assign");
            }, "assign");
            e.pb = cc11001100_hook("e.pb", function (b) {
              a.utils.isDefined(b) && e.vp.url(b);
              e.vp.start();
              a.c.w.start(a.utils.now());
            }, "assign");
            e.ye = cc11001100_hook("e.ye", function (b, d) {
              a.utils.isDefined(e.vp) && (a.utils.isDefined(d) ? e.vp.timestamp(d) : e.vp.timestamp(b));
            }, "assign");
            e.xe = cc11001100_hook("e.xe", function (c, d) {
              a.utils.isDefined(e.vp) && (a.utils.isDefined(d) ? e.vp.resTiming(b.ga.be(e.Dd, c, d)) : e.vp.resTiming(b.ga.be(e.Dd, c)));
            }, "assign");
            e.report = cc11001100_hook("e.report", function () {
              if (a.utils.isDefined(e.vp)) {
                a.log("SPA2~ AnySpa report vp event");
                var c = cc11001100_hook("c", e.vp, "var-init");
                c.Ze ? a.log("SPA2~ AnySpa this vp has been reported before") : (c.parent(b.DOMEventsMonitor.currentBasePage), a.command("call", function () {
                  a.reporter.reportEvent(c);
                }), c.Ze = cc11001100_hook("c.Ze", !0, "assign"));
              } else a.log("SPA2~ AnySpa cannot report vp event as it is undefined");
            }, "assign");
            e.reset = cc11001100_hook("e.reset", function () {
              e.vp = cc11001100_hook("e.vp", null, "assign");
            }, "assign");
            return e;
          }(), "var-init");
          b.A = cc11001100_hook("b.A", f, "assign");
          b.qh = cc11001100_hook("b.qh", new b.A(), "assign");
        })(a.monitor || (a.monitor = cc11001100_hook("a.monitor", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function () {
            function e() {
              this.O = cc11001100_hook("this.O", new b.ag(), "assign");
              this.J = cc11001100_hook("this.J", new b.gh(), "assign");
              this.dj = cc11001100_hook("this.dj", 3E3, "assign");
              this.maxInactiveTime = cc11001100_hook("this.maxInactiveTime", a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxInactiveTime ? a.conf.userConf.navComplete.maxInactiveTime : Math.max(this.O.Ga, this.J.Ga) + this.dj, "assign");
              this.Oe = cc11001100_hook("this.Oe", 1E3, "assign");
            }
            e.prototype.setUp = cc11001100_hook("e.prototype.setUp", function (a) {
              this.currentTime = cc11001100_hook("this.currentTime", this.startTime = cc11001100_hook("this.startTime", a, "assign"), "assign");
              this.B = cc11001100_hook("this.B", this.cb = cc11001100_hook("this.cb", !1, "assign"), "assign");
              this.O.setUp(a);
              this.J.setUp(a);
            }, "assign");
            e.prototype.start = cc11001100_hook("e.prototype.start", function (a) {
              this.setUp(a);
              this.B = cc11001100_hook("this.B", !0, "assign");
              this.O.start(a);
              this.J.start(a);
              this.Gd();
              this.$j();
            }, "assign");
            e.prototype.$j = cc11001100_hook("e.prototype.$j", function () {
              this.rf = cc11001100_hook("this.rf", a.utils.jb.call(window, function () {
                this.currentTime = cc11001100_hook("this.currentTime", a.utils.now(), "assign");
                this.currentTime - Math.max(this.O.na, this.J.oa) >= this.maxInactiveTime && (this.navComplete(), this.reset());
              }.bind(this), this.Oe), "assign");
            }, "assign");
            e.prototype.mf = cc11001100_hook("e.prototype.mf", function () {
              this.cb || (this.Yj(), this.cb = cc11001100_hook("this.cb", !0, "assign"));
            }, "assign");
            e.prototype.Gd = cc11001100_hook("e.prototype.Gd", function () {
              a.utils.isDefined(this.Te) && clearInterval(this.Te);
              a.utils.isDefined(this.rf) && clearInterval(this.rf);
            }, "assign");
            e.prototype.reset = cc11001100_hook("e.prototype.reset", function () {
              this.Gd();
              this.B = cc11001100_hook("this.B", this.cb = cc11001100_hook("this.cb", !1, "assign"), "assign");
              this.O.reset();
              this.J.reset();
            }, "assign");
            e.prototype.navComplete = cc11001100_hook("e.prototype.navComplete", function () {
              var b = cc11001100_hook("b", a.utils.max(this.J.oa, this.O.na), "var-init");
              a.log("%cNav Complete Time: " + (b - this.startTime));
              a.monitor.A.ye(this.startTime, b);
              a.monitor.A.U || (a.monitor.A.xe(this.startTime, b), a.monitor.A.report());
            }, "assign");
            e.prototype.Yj = cc11001100_hook("e.prototype.Yj", function () {
              this.Te = cc11001100_hook("this.Te", a.utils.jb.call(window, function () {
                this.currentTime = cc11001100_hook("this.currentTime", a.utils.now(), "assign");
                var b = cc11001100_hook("b", this.O.Vb(this.currentTime), "var-init");
                0 <= b && a.log("SPA2~ Nav Complete Time based on DOM quiet time: " + (b - this.startTime));
                b = cc11001100_hook("b", this.J.Vb(this.currentTime), "assign");
                0 <= b && a.log("SPA2~ Nav Complete Time based on XHR quiet time: " + (b - this.startTime));
                this.J.B || this.O.B || (this.navComplete(), this.reset());
              }.bind(this), this.Oe), "assign");
            }, "assign");
            return e;
          }(), "var-init");
          b.Og = cc11001100_hook("b.Og", f, "assign");
          b.w = cc11001100_hook("b.w", new b.Og(), "assign");
        })(a.c || (a.c = cc11001100_hook("a.c", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function (b) {
            function c() {
              return null !== b && b.apply(this, arguments) || this;
            }
            u(c, b);
            c.prototype.type = cc11001100_hook("c.prototype.type", function () {
              return a.EventType.PageView;
            }, "assign");
            return c;
          }(b.EventTracker), "var-init");
          b.PageView = cc11001100_hook("b.PageView", f, "assign");
        })(a.events || (a.events = cc11001100_hook("a.events", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", a.utils.now, "var-init"),
            e = cc11001100_hook("e", function () {
              function c() {}
              c.prototype.setUp = cc11001100_hook("c.prototype.setUp", function () {
                var b = cc11001100_hook("b", document.readyState, "var-init");
                if ("loading" === b) a.log("M54"), c.Uj(), c.jf();else {
                  var e = cc11001100_hook("e", {
                    timeStamp: cc11001100_hook("timeStamp", f(), "object-key-init")
                  }, "var-init");
                  c.va(e);
                  "interactive" === b ? (a.log("M55"), c.jf()) : (a.log("M56"), c.Ia(e), c.Je(e));
                }
              }, "assign");
              c.jf = cc11001100_hook("c.jf", function () {
                a.utils.addEventListener(window, "load", c.Ia);
                a.utils.addEventListener(window, "load", c.Je);
              }, "assign");
              c.Je = cc11001100_hook("c.Je", function (e) {
                c.currentBasePage = cc11001100_hook("c.currentBasePage", new a.events.PageView(), "assign");
                a.lifecycle.jj(e && e.timeStamp);
                a.utils.lb(function () {
                  var e = cc11001100_hook("e", f(), "var-init");
                  a.lifecycle.ij(e);
                  a.command("mark", "onload", e);
                  c.Fa = cc11001100_hook("c.Fa", !0, "assign");
                  b.PerformanceMonitor.perf && b.perfMonitor.Ch();
                  a.conf.spa2 ? b.ga.Bh() : b.perfMonitor.ba();
                  a.command("reportOnload", c.currentBasePage);
                  a.conf.spa2 && (a.c.w.O.Tj(), b.A.Eh());
                  a.utils.loadScriptAsync(a.conf.adrumExtUrl);
                });
                a.log("M57");
              }, "assign");
              c.Uj = cc11001100_hook("c.Uj", function () {
                if (a.utils.isFunction(document.addEventListener)) document.addEventListener("DOMContentLoaded", c.va, !1);else if (a.utils.isObject(document.attachEvent)) {
                  document.attachEvent("onreadystatechange", c.va);
                  var b = cc11001100_hook("b", null, "var-init");
                  try {
                    b = cc11001100_hook("b", null === window.frameElement ? document.documentElement : null, "assign");
                  } catch (e) {}
                  null != b && b.doScroll && function m() {
                    if (!c.isReady) {
                      try {
                        b.doScroll("left");
                      } catch (a) {
                        setTimeout(m, 10);
                        return;
                      }
                      c.Ia();
                    }
                  }();
                } else a.exception("M58");
                a.log("M59");
              }, "assign");
              c.Ia = cc11001100_hook("c.Ia", function (b) {
                c.ze || (a.lifecycle.hj(b && b.timeStamp), a.command("mark", "onready", f()), c.ze = cc11001100_hook("c.ze", !0, "assign"));
              }, "assign");
              c.va = cc11001100_hook("c.va", function (a) {
                document.addEventListener ? (document.removeEventListener("DOMContentLoaded", c.va, !1), c.Ia(a)) : "complete" === document.readyState && (document.detachEvent("onreadystatechange", c.va), c.Ia(a));
              }, "assign");
              return c;
            }(), "var-init");
          e.isReady = cc11001100_hook("e.isReady", !1, "assign");
          e.ze = cc11001100_hook("e.ze", !1, "assign");
          e.Fa = cc11001100_hook("e.Fa", !1, "assign");
          b.DOMEventsMonitor = cc11001100_hook("b.DOMEventsMonitor", e, "assign");
          b.Qd = cc11001100_hook("b.Qd", new b.DOMEventsMonitor(), "assign");
        })(a.monitor || (a.monitor = cc11001100_hook("a.monitor", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          function f(a, b) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("b", b, "function-parameter");
            var c = cc11001100_hook("c", [], "var-init"),
              e = cc11001100_hook("e", /^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a), "var-init");
            if (e) {
              var f = cc11001100_hook("f", e[1], "var-init"),
                e = cc11001100_hook("e", e[2].replace(/^"|"$/g, ""), "var-init"),
                e = cc11001100_hook("e", decodeURIComponent(e).split("|"), "var-init"),
                g = cc11001100_hook("g", e[0].split(":"), "var-init");
              if ("R" === g[0] && Number(g[1]) === b) for (d(f), f = cc11001100_hook("f", 1, "assign"); f < e.length; f++) c.push(e[f]);
            }
            return c;
          }
          function e(a, b) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("b", b, "function-parameter");
            var c = cc11001100_hook("c", /^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a), "var-init");
            if (c) {
              var e = cc11001100_hook("e", c[1], "var-init"),
                f = cc11001100_hook("f", c[4], "var-init"),
                g = cc11001100_hook("g", c[5], "var-init");
              if (Number(c[3]) === b) return d(e), {
                index: cc11001100_hook("index", Number(f), "object-key-init"),
                value: cc11001100_hook("value", g, "object-key-init")
              };
            }
            return null;
          }
          function c(b) {
            cc11001100_hook("b", b, "function-parameter");
            var c = cc11001100_hook("c", /^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(b), "var-init");
            if (c) {
              a.log("M62", b);
              if (3 === c.length) return d("ADRUM"), {
                startTime: cc11001100_hook("startTime", Number(c[1]), "object-key-init"),
                startPage: cc11001100_hook("startPage", c[2], "object-key-init")
              };
              a.error("M63", b);
              return null;
            }
          }
          function d(b) {
            cc11001100_hook("b", b, "function-parameter");
            a.log("M61", b);
            var c = cc11001100_hook("c", new Date(), "var-init");
            c.setTime(c.getTime() - 1E3);
            document.cookie = cc11001100_hook("document.cookie", b + "=;Expires=" + c.toUTCString(), "assign");
          }
          b.startTimeCookie = cc11001100_hook("b.startTimeCookie", null, "assign");
          b.cookieMetadataChunks = cc11001100_hook("b.cookieMetadataChunks", null, "assign");
          b.Rd = cc11001100_hook("b.Rd", function (d, n) {
            a.log("M60");
            for (var m = cc11001100_hook("m", n ? n.length : 0, "var-init"), g = cc11001100_hook("g", [], "var-init"), q = cc11001100_hook("q", d.split(";"), "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < q.length; r++) {
              var p = cc11001100_hook("p", q[r], "var-init"),
                s = cc11001100_hook("s", e(p, m), "var-init");
              s ? g.push(s) : (p = cc11001100_hook("p", c(p), "assign"), null != p && (b.startTimeCookie = cc11001100_hook("b.startTimeCookie", p, "assign")));
            }
            Array.prototype.sort.call(g, function (a, b) {
              return a.index - b.index;
            });
            p = cc11001100_hook("p", [], "assign");
            for (r = cc11001100_hook("r", 0, "assign"); r < g.length; r++) p.push(g[r].value);
            for (r = cc11001100_hook("r", 0, "assign"); r < q.length; r++) (g = cc11001100_hook("g", f(q[r], m), "assign")) && 0 < g.length && (p = cc11001100_hook("p", p.concat(g), "assign"));
            b.cookieMetadataChunks = cc11001100_hook("b.cookieMetadataChunks", p, "assign");
          }, "assign");
          a.correlation.eck = cc11001100_hook("a.correlation.eck", b.Rd, "assign");
        })(a.correlation || (a.correlation = cc11001100_hook("a.correlation", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        a.report = cc11001100_hook("a.report", function (b) {
          a.utils.isObject(b) && a.utils.isFunction(b.type) ? -1 == [a.EventType.PageView, a.EventType.Ajax, a.EventType.VPageView, a.EventType.Error].indexOf(b.type()) ? a.reportAPIMessage(a.I.V, b.type() + "is not a valid external event type", "ADRUM.report", Array.prototype.slice.call(arguments)) : a.conf.spa2 && b instanceof a.events.VPageView ? a.log("SPA2~ Ignore report Virtual Page in old API") : a.utils.lb(function () {
            a.command("reportEvent", b);
          }) : a.reportAPIMessage(a.I.Pc, "", "ADRUM.report", Array.prototype.slice.call(arguments));
        }, "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        "APP_KEY_NOT_SET" === a.conf.appKey && z.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']");
        a.correlation.Rd(document.cookie, document.referrer);
        a.command("mark", "firstbyte", window["adrum-start-time"]);
        a.conf.spa2 ? a.monitor.yc(a.monitor.ma, a.monitor.Qd, a.monitor.perfMonitor, a.monitor.ja, a.monitor.qh) : a.monitor.yc(a.monitor.ma, a.monitor.Qd, a.monitor.perfMonitor, a.monitor.ja);
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        a = cc11001100_hook("a", a.ng || (a.ng = cc11001100_hook("a.ng", {}, "assign")), "assign");
        a = cc11001100_hook("a", a.g || (a.g = cc11001100_hook("a.g", {}, "assign")), "assign");
        a.ve = cc11001100_hook("a.ve", "locationChangeStart", "assign");
        a.Yi = cc11001100_hook("a.Yi", "locationChangeSuccess", "assign");
        a.ef = cc11001100_hook("a.ef", "routeChangeStart", "assign");
        a.ff = cc11001100_hook("a.ff", "routeChangeSuccess", "assign");
        a.nf = cc11001100_hook("a.nf", "stateChangeStart", "assign");
        a.of = cc11001100_hook("a.of", "stateChangeSuccess", "assign");
        a.Bf = cc11001100_hook("a.Bf", "viewContentLoaded", "assign");
        a.vi = cc11001100_hook("a.vi", "includeContentRequested", "assign");
        a.ui = cc11001100_hook("a.ui", "includeContentLoaded", "assign");
        a.Od = cc11001100_hook("a.Od", "digest", "assign");
        a.nl = cc11001100_hook("a.nl", "outstandingRequestsComplete", "assign");
        a.Ed = cc11001100_hook("a.Ed", "beforeNgXhrRequested", "assign");
        a.ud = cc11001100_hook("a.ud", "afterNgXhrRequested", "assign");
        a.ml = cc11001100_hook("a.ml", "ngXhrLoaded", "assign");
        a.Id = cc11001100_hook("a.Id", "$$completeOutstandingRequest", "assign");
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          function f(a, c, e, f, g, q) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("c", c, "function-parameter");
            cc11001100_hook("e", e, "function-parameter");
            cc11001100_hook("f", f, "function-parameter");
            cc11001100_hook("g", g, "function-parameter");
            cc11001100_hook("q", q, "function-parameter");
            if (c) try {
              return c.apply(a, [e, f, g].concat(q));
            } catch (r) {
              return a.error(e, f, g, q, b.Error.lg, "an exception occurred in a caller-provided callback function", r);
            }
          }
          function e(a, c) {
            cc11001100_hook("a", a, "function-parameter");
            cc11001100_hook("c", c, "function-parameter");
            return function () {
              var e = cc11001100_hook("e", this.current, "var-init"),
                m = cc11001100_hook("m", c[e] || c[b.Qa] || e, "var-init"),
                g = cc11001100_hook("g", Array.prototype.slice.call(arguments), "var-init");
              if (this.yh(a)) return this.error(a, e, m, g, b.Error.mg, "event " + a + " inappropriate in current state " + this.current);
              if (!1 === f(this, this["onbefore" + a], a, e, m, g)) return b.Pa.Rc;
              m === b.Qa && (m = cc11001100_hook("m", e, "assign"));
              if (e === m) return f(this, this["onafter" + a] || this["on" + a], a, e, m, g), b.Pa.Ng;
              var q = cc11001100_hook("q", this, "var-init");
              this.transition = cc11001100_hook("this.transition", function () {
                q.transition = cc11001100_hook("q.transition", null, "assign");
                q.current = cc11001100_hook("q.current", m, "assign");
                f(q, q["onenter" + m] || q["on" + m], a, e, m, g);
                f(q, q["onafter" + a] || q["on" + a], a, e, m, g);
                return b.Pa.Yg;
              }, "assign");
              if (!1 === f(this, this["onleave" + e], a, e, m, g)) return this.transition = cc11001100_hook("this.transition", null, "assign"), b.Pa.Rc;
              if (this.transition) return this.transition();
            };
          }
          var c = cc11001100_hook("c", a.utils.hasOwnPropertyDefined, "var-init");
          b.VERSION = cc11001100_hook("b.VERSION", "2.3.5", "assign");
          b.Pa = cc11001100_hook("b.Pa", {
            Yg: cc11001100_hook("Yg", 1, "object-key-init"),
            Ng: cc11001100_hook("Ng", 2, "object-key-init"),
            Rc: cc11001100_hook("Rc", 3, "object-key-init"),
            Hk: cc11001100_hook("Hk", 4, "object-key-init")
          }, "assign");
          b.Error = cc11001100_hook("b.Error", {
            mg: cc11001100_hook("mg", 100, "object-key-init"),
            Ik: cc11001100_hook("Ik", 200, "object-key-init"),
            lg: cc11001100_hook("lg", 300, "object-key-init")
          }, "assign");
          b.Qa = cc11001100_hook("b.Qa", "*", "assign");
          b.create = cc11001100_hook("b.create", function (a, f) {
            function g(a) {
              cc11001100_hook("a", a, "function-parameter");
              var c = cc11001100_hook("c", a.from instanceof Array ? a.from : a.from ? [a.from] : [b.Qa], "var-init");
              p[a.name] = cc11001100_hook("p[a.name]", p[a.name] || {}, "assign");
              for (var e = cc11001100_hook("e", 0, "var-init"); e < c.length; e++) s[c[e]] = cc11001100_hook("s[c[e]]", s[c[e]] || [], "assign"), s[c[e]].push(a.name), p[a.name][c[e]] = cc11001100_hook("p[a.name][c[e]]", a.to || c[e], "assign");
            }
            var m = cc11001100_hook("m", "string" == typeof a.initial ? {
                state: cc11001100_hook("state", a.initial, "object-key-init")
              } : a.initial, "var-init"),
              k = cc11001100_hook("k", f || a.target || {}, "var-init"),
              q = cc11001100_hook("q", a.events || [], "var-init"),
              r = cc11001100_hook("r", a.callbacks || {}, "var-init"),
              p = cc11001100_hook("p", {}, "var-init"),
              s = cc11001100_hook("s", {}, "var-init");
            m && (m.event = cc11001100_hook("m.event", m.event || "startup", "assign"), g({
              name: cc11001100_hook("name", m.event, "object-key-init"),
              from: cc11001100_hook("from", "none", "object-key-init"),
              to: cc11001100_hook("to", m.state, "object-key-init")
            }));
            for (var u = cc11001100_hook("u", 0, "var-init"); u < q.length; u++) g(q[u]);
            for (var v in p) c(p, v) && (k[v] = cc11001100_hook("k[v]", e(v, p[v]), "assign"));
            for (v in r) c(r, v) && (k[v] = cc11001100_hook("k[v]", r[v], "assign"));
            k.current = cc11001100_hook("k.current", "none", "assign");
            k.el = cc11001100_hook("k.el", function (a) {
              return a instanceof Array ? 0 <= a.indexOf(this.current) : this.current === a;
            }, "assign");
            k.xh = cc11001100_hook("k.xh", function (a) {
              return !this.transition && (c(p[a], this.current) || c(p[a], b.Qa));
            }, "assign");
            k.yh = cc11001100_hook("k.yh", function (a) {
              return !this.xh(a);
            }, "assign");
            k.rb = cc11001100_hook("k.rb", function () {
              return s[this.current];
            }, "assign");
            k.error = cc11001100_hook("k.error", a.error || function (a, b, c, e, d, f, h) {
              throw h || f;
            }, "assign");
            if (m && !m.defer) k[m.event]();
            return k;
          }, "assign");
        })(a.nd || (a.nd = cc11001100_hook("a.nd", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", function (e) {
            function c(b) {
              cc11001100_hook("b", b, "function-parameter");
              b = cc11001100_hook("b", e.call(this, b) || this, "assign");
              a.utils.isDefined(a.ng) && b.constructor != a.ng.NgVPageView && b.constructor != c && a.reportAPIMessage(a.I.V, a.ta, "ADRUM.events.VPageView", []);
              if (a.conf.spa2) return b;
              b.perf = cc11001100_hook("b.perf", new a.PerformanceTracker(), "assign");
              b.start();
              a.monitor.ja.tc();
              a.monitor.ma.Ej();
              return b;
            }
            u(c, e);
            c.prototype.type = cc11001100_hook("c.prototype.type", function () {
              return a.EventType.VPageView;
            }, "assign");
            c.prototype.Qb = cc11001100_hook("c.prototype.Qb", function () {
              return b.EventTracker.Bb(this.guid(), this.url(), this.type());
            }, "assign");
            c.prototype.lf = cc11001100_hook("c.prototype.lf", function (b) {
              var c = cc11001100_hook("c", this.Qb(), "var-init");
              b.set("parent", c);
              a.log("M64", c.guid(), c.url());
            }, "assign");
            c.prototype.startCorrelatingXhrs = cc11001100_hook("c.prototype.startCorrelatingXhrs", function () {
              a.conf.spa2 || (a.log("M65"), this.lf(a.monitor.ja));
            }, "assign");
            c.prototype.stopCorrelatingXhrs = cc11001100_hook("c.prototype.stopCorrelatingXhrs", function () {
              a.conf.spa2 || (a.monitor.ja.set("parent", null), a.log("M66"));
            }, "assign");
            c.prototype.Bc = cc11001100_hook("c.prototype.Bc", function () {
              a.conf.spa2 || (a.log("M67"), this.lf(a.monitor.ma));
            }, "assign");
            c.prototype.start = cc11001100_hook("c.prototype.start", function () {
              a.conf.spa2 || (this.markVirtualPageStart(), this.startCorrelatingXhrs());
            }, "assign");
            c.prototype.end = cc11001100_hook("c.prototype.end", function () {
              a.conf.spa2 || (this.markVirtualPageEnd(), this.stopCorrelatingXhrs());
            }, "assign");
            return c;
          }(b.EventTracker), "var-init");
          b.VPageView = cc11001100_hook("b.VPageView", f, "assign");
          b.la(b.G[a.EventType.VPageView], f.prototype);
          b.Ad(b.metricSpec[a.EventType.VPageView], f.prototype);
        })(a.events || (a.events = cc11001100_hook("a.events", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", a.ng || (a.ng = cc11001100_hook("a.ng", {}, "assign")), "var-init"),
          b = cc11001100_hook("b", b.conf || (b.conf = cc11001100_hook("b.conf", {}, "assign")), "var-init");
        b.disabled = cc11001100_hook("b.disabled", a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.disable, "assign");
        b.distinguishVPwithItsTemplateUrl = cc11001100_hook("b.distinguishVPwithItsTemplateUrl", a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && !0 === a.conf.userConf.spa.angular.distinguishVPwithItsTemplateUrl ? !0 : !1, "assign");
        b.xhr = cc11001100_hook("b.xhr", {}, "assign");
        b.metrics = cc11001100_hook("b.metrics", {
          includeResTimingInEndUserResponseTiming: cc11001100_hook("includeResTimingInEndUserResponseTiming", !0, "object-key-init")
        }, "assign");
        a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.vp && (a.conf.userConf.spa.angular.vp.xhr && a.monitor.Ba.Re(b.xhr, a.conf.userConf.spa.angular.vp.xhr), a.conf.userConf.spa.angular.vp.metrics && a.utils.mergeJSON(b.metrics, a.conf.userConf.spa.angular.vp.metrics));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var f = cc11001100_hook("f", a.utils.map, "var-init"),
            e = cc11001100_hook("e", a.utils.reduce, "var-init"),
            c = cc11001100_hook("c", a.utils.filter, "var-init"),
            d = cc11001100_hook("d", function (d) {
              function g(b) {
                cc11001100_hook("b", b, "function-parameter");
                b = cc11001100_hook("b", d.call(this, b) || this, "assign");
                b.ne = cc11001100_hook("b.ne", !0, "assign");
                b.Ja = cc11001100_hook("b.Ja", {}, "assign");
                b.sa = cc11001100_hook("b.sa", 0, "assign");
                b.Fl = cc11001100_hook("b.Fl", [], "assign");
                b.digestCount(0);
                if (b.constructor != g) return a.reportAPIMessage(a.I.V, a.ta, "ADRUM.events.Ajax", []), b;
                b.stopCorrelatingXhrs();
                return b;
              }
              u(g, d);
              g.prototype.type = cc11001100_hook("g.prototype.type", function () {
                return a.EventType.VPageView;
              }, "assign");
              g.prototype.Mc = cc11001100_hook("g.prototype.Mc", function () {
                this.markViewChangeStart();
                this.markVirtualPageStart(this.getViewChangeStart());
                this.timestamp(this.getViewChangeStart());
              }, "assign");
              g.prototype.wi = cc11001100_hook("g.prototype.wi", function () {
                this.digestCount(this.digestCount() + 1);
              }, "assign");
              g.prototype.xi = cc11001100_hook("g.prototype.xi", function () {
                this.sa++;
                a.log("M68", this.sa);
              }, "assign");
              g.prototype.Ih = cc11001100_hook("g.prototype.Ih", function () {
                this.sa--;
                a.log("M69", this.sa);
              }, "assign");
              g.prototype.ri = cc11001100_hook("g.prototype.ri", function () {
                var b = cc11001100_hook("b", this.perf.getEntryByName(a.events.b.Hf), "var-init");
                a.log("M70", this.sa, b);
                return 0 < this.sa;
              }, "assign");
              g.prototype.uh = cc11001100_hook("g.prototype.uh", function () {
                var a = cc11001100_hook("a", {
                    qb: cc11001100_hook("qb", 0, "object-key-init")
                  }, "var-init"),
                  b = cc11001100_hook("b", document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]"), "var-init"),
                  b = cc11001100_hook("b", f(b, angular.element), "var-init"),
                  c;
                for (c in g.bf) {
                  var e = cc11001100_hook("e", g.bf[c], "var-init");
                  f(b, function (b) {
                    b = cc11001100_hook("b", b.find(c), "assign");
                    f(b, function (b) {
                      if (b = cc11001100_hook("b", b[e], "assign")) b = cc11001100_hook("b", decodeURIComponent(b), "assign"), a[b] || (a[b] = cc11001100_hook("a[b]", c, "assign"), a.qb++);
                    });
                  });
                }
                this.Ja = cc11001100_hook("this.Ja", a, "assign");
              }, "assign");
              g.prototype.th = cc11001100_hook("g.prototype.th", function (a) {
                return !!this.Ja[decodeURIComponent(a.name)];
              }, "assign");
              g.prototype.vh = cc11001100_hook("g.prototype.vh", function () {
                var b = cc11001100_hook("b", [], "var-init"),
                  c = cc11001100_hook("c", this, "var-init");
                0 < this.Ja.qb && (b = cc11001100_hook("b", a.monitor.perfMonitor.Y().filter(function (a) {
                  return c.th(a);
                }), "assign"));
                this.resTiming(b);
              }, "assign");
              g.Xh = cc11001100_hook("g.Xh", function (e) {
                return c(e, function (c) {
                  return (c.eventType === a.EventType.Ajax || c.eventType === a.EventType.ADRUM_XHR) && !a.monitor.Ba.kf(c.eventUrl, c.method, b.conf.xhr);
                });
              }, "assign");
              g.ii = cc11001100_hook("g.ii", function (a) {
                return e(a, function (a, b) {
                  return Math.max(a, b.timestamp + b.metrics.PLT);
                }, -1);
              }, "assign");
              g.prototype.nh = cc11001100_hook("g.prototype.nh", function () {
                if (b.conf.xhr) {
                  var c = cc11001100_hook("c", g.Xh(a.channel.getEventsWithParentGUID(this.guid())), "var-init"),
                    c = cc11001100_hook("c", g.ii(c), "var-init");
                  if (0 < c) {
                    var e = cc11001100_hook("e", this.perf.getEntryByName(a.events.b.Hf), "var-init");
                    this.markXhrRequestsCompleted(Math.min(e && e.startTime || Number.MAX_VALUE, c));
                  }
                }
              }, "assign");
              g.prototype.adjustTimings = cc11001100_hook("g.prototype.adjustTimings", function () {
                this.nh();
                var c = cc11001100_hook("c", this.getViewDOMLoaded(), "var-init"),
                  e = cc11001100_hook("e", this.getXhrRequestsCompleted(), "var-init"),
                  c = cc11001100_hook("c", Math.max(c, e), "var-init");
                b.conf.metrics.includeResTimingInEndUserResponseTiming && (this.mh(), e = cc11001100_hook("e", this.getViewResourcesLoaded(), "assign"), e = cc11001100_hook("e", Math.max(c, e), "assign"), a.log("M71", c, e), c = cc11001100_hook("c", e, "assign"));
                this.markVirtualPageEnd(c);
              }, "assign");
              g.prototype.mh = cc11001100_hook("g.prototype.mh", function () {
                if (0 < this.Ja.qb) {
                  this.vh();
                  var b = cc11001100_hook("b", this.resTiming(), "var-init");
                  b && b.length >= this.Ja.qb && (b = cc11001100_hook("b", e(b, function (a, b) {
                    return Math.max(a, b.responseEnd);
                  }, 0), "assign"), this.markViewResourcesLoaded(a.PerformanceTracker.Fb(b)));
                }
              }, "assign");
              g.prototype.identifier = cc11001100_hook("g.prototype.identifier", function (b) {
                var c = cc11001100_hook("c", this.Df, "var-init");
                a.utils.isDefined(b) && (this.Df = cc11001100_hook("this.Df", g.Vh(b), "assign"), this.url(this.Df.url));
                return c;
              }, "assign");
              g.Vh = cc11001100_hook("g.Vh", function (b) {
                var c = cc11001100_hook("c", {}, "var-init");
                b && b.C ? (c.C = cc11001100_hook("c.C", {
                  jc: cc11001100_hook("jc", "", "object-key-init")
                }, "assign"), a.utils.mergeJSON(c.C, {
                  jc: cc11001100_hook("jc", b.C.originalPath, "object-key-init"),
                  Ka: cc11001100_hook("Ka", b.C.template, "object-key-init"),
                  La: cc11001100_hook("La", b.C.templateUrl, "object-key-init")
                })) : b && b.state && (c.state = cc11001100_hook("c.state", {
                  url: cc11001100_hook("url", "", "object-key-init")
                }, "assign"), a.utils.mergeJSON(c.state, {
                  url: cc11001100_hook("url", b.state.url, "object-key-init"),
                  name: cc11001100_hook("name", b.state.name, "object-key-init"),
                  Ka: cc11001100_hook("Ka", b.state.template, "object-key-init"),
                  La: cc11001100_hook("La", b.state.templateUrl, "object-key-init")
                }));
                return c;
              }, "assign");
              return g;
            }(a.events.VPageView), "var-init");
          d.bf = cc11001100_hook("d.bf", {
            img: cc11001100_hook("img", "src", "object-key-init"),
            script: cc11001100_hook("script", "src", "object-key-init"),
            link: cc11001100_hook("link", "href", "object-key-init")
          }, "assign");
          b.NgVPageView = cc11001100_hook("b.NgVPageView", d, "assign");
          a.events.la(a.events.G[a.EventType.NG_VIRTUAL_PAGE], d.prototype);
        })(a.ng || (a.ng = cc11001100_hook("a.ng", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var g = cc11001100_hook("g", function () {
            function e() {
              this.j = cc11001100_hook("this.j", new b.NgVPageView(), "assign");
            }
            e.prototype.Lj = cc11001100_hook("e.prototype.Lj", function () {
              var c = cc11001100_hook("c", this, "var-init");
              b.conf.metrics.includeResTimingInEndUserResponseTiming ? (a.log("M72"), setTimeout(function () {
                c.pc();
              }, e.$g)) : setTimeout(function () {
                c.pc();
              }, e.ah);
            }, "assign");
            e.prototype.pc = cc11001100_hook("e.prototype.pc", function () {
              a.log("M73");
              var b = cc11001100_hook("b", this.j, "var-init");
              b.parent(a.monitor.DOMEventsMonitor.currentBasePage);
              a.command("call", function () {
                b.adjustTimings();
                a.reporter.reportEvent(b);
              });
            }, "assign");
            e.prototype.Rj = cc11001100_hook("e.prototype.Rj", function (a) {
              this.j = cc11001100_hook("this.j", a, "assign");
            }, "assign");
            return e;
          }(), "var-init");
          g.$g = cc11001100_hook("g.$g", 5E3, "assign");
          g.ah = cc11001100_hook("g.ah", 2 * a.monitor.Ba.$f, "assign");
          b.VirtualPageStateMachine = cc11001100_hook("b.VirtualPageStateMachine", g, "assign");
          a.nd.create({
            events: cc11001100_hook("events", [{
              name: cc11001100_hook("name", "start", "object-key-init"),
              from: cc11001100_hook("from", "none", "object-key-init"),
              to: cc11001100_hook("to", "ChangeView", "object-key-init")
            }, {
              name: cc11001100_hook("name", "viewLoaded", "object-key-init"),
              from: cc11001100_hook("from", "ChangeView", "object-key-init"),
              to: cc11001100_hook("to", "XhrPending", "object-key-init")
            }, {
              name: cc11001100_hook("name", "xhrCompleted", "object-key-init"),
              from: cc11001100_hook("from", "XhrPending", "object-key-init"),
              to: cc11001100_hook("to", "End", "object-key-init")
            }, {
              name: cc11001100_hook("name", "abort", "object-key-init"),
              from: cc11001100_hook("from", "*", "object-key-init"),
              to: cc11001100_hook("to", "none", "object-key-init")
            }, {
              name: cc11001100_hook("name", "init", "object-key-init"),
              from: cc11001100_hook("from", "*", "object-key-init"),
              to: cc11001100_hook("to", "none", "object-key-init")
            }, {
              name: cc11001100_hook("name", "locChange", "object-key-init"),
              from: cc11001100_hook("from", "*", "object-key-init"),
              to: cc11001100_hook("to", "*", "object-key-init")
            }, {
              name: cc11001100_hook("name", "beforeXhrReq", "object-key-init"),
              from: cc11001100_hook("from", "*", "object-key-init"),
              to: cc11001100_hook("to", "*", "object-key-init")
            }, {
              name: cc11001100_hook("name", "afterXhrReq", "object-key-init"),
              from: cc11001100_hook("from", "*", "object-key-init"),
              to: cc11001100_hook("to", "*", "object-key-init")
            }], "object-key-init"),
            error: function (b) {
              a.log("M74" + b);
            },
            callbacks: {
              onChangeView: function () {
                this.j.Mc();
                this.j.Bc();
              },
              onviewLoaded: function () {
                this.j.markViewDOMLoaded();
              },
              onXhrPending: function () {
                this.j.ne && this.xhrCompleted();
              },
              onleaveXhrPending: function (a, b, d) {
                if ("abort" === a) return this.pc(), !0;
                if ("xhrCompleted" === a && "End" === d) {
                  if (this.j.ri()) return !1;
                  this.j.markXhrRequestsCompleted();
                  return !0;
                }
              },
              onEnd: function () {
                this.j.uh();
                this.Lj();
              },
              oninit: function (b, c, d, g) {
                this.Rj(g);
                a.monitor.ja.tc();
              },
              onlocChange: function (a, b, d, g) {
                this.j.identifier.url = cc11001100_hook("this.j.identifier.url", g, "assign");
                this.j.ob({
                  url: cc11001100_hook("url", g, "object-key-init")
                });
              },
              onbeforeXhrReq: function (b, c, d, g) {
                var f = cc11001100_hook("f", this.j, "var-init");
                f.ne = cc11001100_hook("f.ne", !1, "assign");
                a.log("M75", g && g[1] || "", f.guid());
                f.xi();
                f.startCorrelatingXhrs();
                g[3] && (g[3] = cc11001100_hook("g[3]", a.aop.before(g[3], function (b, c, e) {
                  a.log("M76");
                  f.Ih();
                  e && (b = cc11001100_hook("b", a.utils.sj(e)["content-type"], "assign")) && 0 <= b.indexOf("text/html") && f.markViewFragmentsLoaded();
                }), "assign"));
                return g;
              },
              onafterXhrReq: function () {
                this.j.stopCorrelatingXhrs();
              }
            }
          }, g.prototype);
        })(a.ng || (a.ng = cc11001100_hook("a.ng", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var g = cc11001100_hook("g", function () {
            function e() {
              this.D = cc11001100_hook("this.D", new b.VirtualPageStateMachine(), "assign");
              this.distinguishVPwithItsTemplateUrl = cc11001100_hook("this.distinguishVPwithItsTemplateUrl", a.ng.conf.distinguishVPwithItsTemplateUrl, "assign");
            }
            e.prototype.F = cc11001100_hook("e.prototype.F", function (c, d) {
              a.log("M77", c);
              switch (c) {
                case b.g.ef:
                case b.g.nf:
                  this.D.start();
                  var g = cc11001100_hook("g", d.next.url || document.URL, "var-init"),
                    f = cc11001100_hook("f", new b.NgVPageView({
                      url: cc11001100_hook("url", g, "object-key-init"),
                      identifier: cc11001100_hook("identifier", d.next, "object-key-init")
                    }), "var-init");
                  this.distinguishVPwithItsTemplateUrl && e.Gi(this.D.j, f) ? this.D.j.ob({
                    url: cc11001100_hook("url", g, "object-key-init"),
                    identifier: cc11001100_hook("identifier", d.next, "object-key-init")
                  }) : this.ek(f);
                  break;
                case b.g.ff:
                case b.g.of:
                  this.D.j.markViewChangeEnd();
                  break;
                case b.g.Bf:
                  this.D.viewLoaded();
                  break;
                case b.g.Ed:
                  this.D.beforeXhrReq(d);
                  break;
                case b.g.ud:
                  this.D.afterXhrReq();
                  break;
                case b.g.Id:
                  this.D.xhrCompleted();
                  break;
                case b.g.ve:
                  this.D.j.ob({
                    url: cc11001100_hook("url", d.next.url, "object-key-init")
                  });
                  this.D.locChange(d.next.url);
                  break;
                case b.g.Od:
                  this.D.j.wi();
              }
            }, "assign");
            e.prototype.ek = cc11001100_hook("e.prototype.ek", function (a) {
              this.D.abort();
              this.D.init(a);
              this.D.start();
            }, "assign");
            e.Gi = cc11001100_hook("e.Gi", function (b, e) {
              var g = cc11001100_hook("g", b.identifier(), "var-init"),
                f = cc11001100_hook("f", e.identifier(), "var-init"),
                m = cc11001100_hook("m", !1, "var-init");
              return m = cc11001100_hook("m", !a.utils.isDefined(g) && !a.utils.isDefined(f) || g === f ? !0 : a.utils.isDefined(g) && a.utils.isDefined(f) ? g.state || f.state ? a.utils.isDefined(g.state) && a.utils.isDefined(f.state) ? g.state.name === f.state.name && g.state.Ka === f.state.Ka && g.state.La === f.state.La && g.state.url === f.state.url : !1 : g.C && f.C ? g.C.jc === f.C.jc && g.C.Ka === f.C.Ka && g.C.La === f.C.La : g.url === f.url : !1, "assign");
            }, "assign");
            return e;
          }(), "var-init");
          b.bh = cc11001100_hook("b.bh", g, "assign");
        })(a.ng || (a.ng = cc11001100_hook("a.ng", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        (function (b) {
          var g = cc11001100_hook("g", a.utils.addEventListener, "var-init"),
            e = cc11001100_hook("e", function () {
              function c() {
                this.H = cc11001100_hook("this.H", new b.bh(), "assign");
                this.le = cc11001100_hook("this.le", !1, "assign");
              }
              c.prototype.setUp = cc11001100_hook("c.prototype.setUp", function () {
                function b(e) {
                  cc11001100_hook("e", e, "function-parameter");
                  return function () {
                    a.log(e);
                    c.init();
                  };
                }
                var c = cc11001100_hook("c", this, "var-init");
                b("M78")();
                g(document, "DOMContentLoaded", b("M79"));
                g(window, "load", b("M80"));
              }, "assign");
              c.prototype.init = cc11001100_hook("c.prototype.init", function () {
                if ("undefined" != typeof angular && !this.le) {
                  this.le = cc11001100_hook("this.le", !0, "assign");
                  a.log("M81");
                  var b = cc11001100_hook("b", this, "var-init"),
                    c = cc11001100_hook("c", angular.module("ng"), "var-init");
                  c.config(["$provide", function (a) {
                    b.Di(a);
                    b.Ci(a);
                  }]);
                  c.run(["$browser", function (a) {
                    b.Ai(a);
                  }]);
                  a.log("M82");
                }
              }, "assign");
              c.prototype.Ci = cc11001100_hook("c.prototype.Ci", function (c) {
                var e = cc11001100_hook("e", a.aop, "var-init"),
                  g = cc11001100_hook("g", this, "var-init");
                c.decorator("$httpBackend", ["$delegate", function (a) {
                  return a = cc11001100_hook("a", e.around(a, function () {
                    var a = cc11001100_hook("a", Array.prototype.slice.call(arguments), "var-init");
                    g.H.F(b.g.Ed, a);
                    return a;
                  }, function () {
                    g.H.F(b.g.ud);
                  }, "ng.httpBackend"), "assign");
                }]);
              }, "assign");
              c.prototype.Di = cc11001100_hook("c.prototype.Di", function (c) {
                var e = cc11001100_hook("e", a.aop, "var-init"),
                  g = cc11001100_hook("g", this, "var-init");
                c.decorator("$rootScope", ["$delegate", function (a) {
                  a.$digest = cc11001100_hook("a.$digest", e.after(a.$digest, function () {
                    g.H.F(b.g.Od);
                  }, "ngevents.digest"), "assign");
                  a.$on("$locationChangeStart", function (a, c) {
                    var e = cc11001100_hook("e", {
                        url: cc11001100_hook("url", c, "object-key-init")
                      }, "var-init"),
                      d = cc11001100_hook("d", a && a.Ca && a.Ca.$state && a.Ca.$state.current, "var-init");
                    d && (e.state = cc11001100_hook("e.state", d, "assign"));
                    g.H.F(b.g.ve, {
                      next: cc11001100_hook("next", e, "object-key-init")
                    });
                  });
                  a.$on("$locationChangeSuccess", function () {
                    g.H.F(b.g.Yi);
                  });
                  a.$on("$routeChangeStart", function (a, c) {
                    var e = cc11001100_hook("e", {
                        url: cc11001100_hook("url", location.href, "object-key-init")
                      }, "var-init"),
                      d = cc11001100_hook("d", c && c.$$route, "var-init");
                    d && (e.C = cc11001100_hook("e.C", d, "assign"));
                    g.H.F(b.g.ef, {
                      next: cc11001100_hook("next", e, "object-key-init")
                    });
                  });
                  a.$on("$routeChangeSuccess", function () {
                    g.H.F(b.g.ff);
                  });
                  a.$on("$stateChangeStart", function (a, c) {
                    g.H.F(b.g.nf, {
                      next: {
                        state: cc11001100_hook("state", c, "object-key-init")
                      }
                    });
                  });
                  a.$on("$stateChangeSuccess", function () {
                    g.H.F(b.g.of);
                  });
                  a.$on("$viewContentLoaded", function (a) {
                    var c = cc11001100_hook("c", {
                      url: cc11001100_hook("url", location.href, "object-key-init")
                    }, "var-init");
                    if (a = cc11001100_hook("a", a && a.Ca && a.Ca.$state && a.Ca.$state.current, "assign")) c.state = cc11001100_hook("c.state", a, "assign");
                    g.H.F(b.g.Bf, {
                      next: cc11001100_hook("next", c, "object-key-init")
                    });
                  });
                  a.$on("$includeContentRequested", function () {
                    g.H.F(b.g.vi);
                  });
                  a.$on("$includeContentLoaded", function () {
                    g.H.F(b.g.ui);
                  });
                  return a;
                }]);
              }, "assign");
              c.prototype.Ai = cc11001100_hook("c.prototype.Ai", function (c) {
                var e = cc11001100_hook("e", this, "var-init");
                c.$$completeOutstandingRequest = cc11001100_hook("c.$$completeOutstandingRequest", a.aop.before(c.$$completeOutstandingRequest, function () {
                  e.H.F(b.g.Id);
                }), "assign");
              }, "assign");
              return c;
            }(), "var-init");
          b.Dk = cc11001100_hook("b.Dk", e, "assign");
          b.ngMonitor = cc11001100_hook("b.ngMonitor", new e(), "assign");
        })(a.ng || (a.ng = cc11001100_hook("a.ng", {}, "assign")));
      })(g || (g = cc11001100_hook("g", {}, "assign")));
      (function (a) {
        var b = cc11001100_hook("b", a.ng || (a.ng = cc11001100_hook("a.ng", {}, "assign")), "var-init");
        b.conf.disabled || a.conf.spa2 || a.monitor.yc(b.ngMonitor);
      })(g || (g = cc11001100_hook("g", {}, "assign")));
    }
  }();
})();