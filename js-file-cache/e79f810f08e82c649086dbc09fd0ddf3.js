define("molecules/app/footer/result_ef84a2b", ["san", "tslib", "@searchfe/inject-js", "@baidu/www-api"], function (e, o, r, a) {
  return c = cc11001100_hook("c", {
    0: function (t, n, e) {
      var e = cc11001100_hook("e", [n, e(1)], "var-init"),
        e = cc11001100_hook("e", function (t, c) {
          "use strict";

          function u() {
            return (u = cc11001100_hook("u", Object.assign || function (t) {
              for (var n = cc11001100_hook("n", 1, "var-init"); n < arguments.length; n++) {
                var e,
                  o = cc11001100_hook("o", arguments[n], "var-init");
                for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = cc11001100_hook("t[e]", o[e], "assign"));
              }
              return t;
            }, "assign")).apply(this, arguments);
          }
          function s(t) {
            cc11001100_hook("t", t, "function-parameter");
            return (s = cc11001100_hook("s", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function s(t) {
              return typeof t;
            } : function s(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, "assign"))(t);
          }
          function f(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            var e = cc11001100_hook("e", "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"], "var-init");
            if (!e) {
              if (Array.isArray(t) || (e = cc11001100_hook("e", function (t, n) {
                if (t) {
                  if ("string" == typeof t) return l(t, n);
                  var e = cc11001100_hook("e", Object.prototype.toString.call(t).slice(8, -1), "var-init");
                  return "Map" === (e = cc11001100_hook("e", "Object" === e && t.constructor ? t.constructor.name : e, "assign")) || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? l(t, n) : void 0;
                }
              }(t), "assign")) || n && t && "number" == typeof t.length) {
                e && (t = cc11001100_hook("t", e, "assign"));
                var o,
                  r = cc11001100_hook("r", 0, "var-init");
                return {
                  s: cc11001100_hook("s", o = cc11001100_hook("o", function o() {}, "assign"), "object-key-init"),
                  n: function () {
                    return r >= t.length ? {
                      done: cc11001100_hook("done", !0, "object-key-init")
                    } : {
                      done: cc11001100_hook("done", !1, "object-key-init"),
                      value: cc11001100_hook("value", t[r++], "object-key-init")
                    };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: cc11001100_hook("f", o, "object-key-init")
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var a,
              i = cc11001100_hook("i", !0, "var-init"),
              c = cc11001100_hook("c", !1, "var-init");
            return {
              s: function () {
                e = cc11001100_hook("e", e.call(t), "assign");
              },
              n: function () {
                var t = cc11001100_hook("t", e.next(), "var-init");
                return i = cc11001100_hook("i", t.done, "assign"), t;
              },
              e: function (t) {
                c = cc11001100_hook("c", !0, "assign"), a = cc11001100_hook("a", t, "assign");
              },
              f: function () {
                try {
                  i || null == e["return"] || e["return"]();
                } finally {
                  if (c) throw a;
                }
              }
            };
          }
          function l(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            (null == n || n > t.length) && (n = cc11001100_hook("n", t.length, "assign"));
            for (var e = cc11001100_hook("e", 0, "var-init"), o = cc11001100_hook("o", new Array(n), "var-init"); e < n; e++) o[e] = cc11001100_hook("o[e]", t[e], "assign");
            return o;
          }
          function p(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            var e,
              o = cc11001100_hook("o", {}, "var-init"),
              r = cc11001100_hook("r", f(n), "var-init");
            try {
              for (r.s(); !(e = cc11001100_hook("e", r.n(), "assign")).done;) {
                var a = cc11001100_hook("a", e.value, "var-init");
                u(o, a);
              }
            } catch (c) {
              r.e(c);
            } finally {
              r.f();
            }
            var i = cc11001100_hook("i", t.initData, "var-init");
            t.initData = cc11001100_hook("t.initData", i ? function () {
              return u({}, i.call(this), {
                $style: cc11001100_hook("$style", o, "object-key-init")
              });
            } : function () {
              return o;
            }, "assign");
          }
          Object.defineProperty(t, "__esModule", {
            value: cc11001100_hook("value", !0, "object-key-init")
          }), t["default"] = cc11001100_hook("t[\"default\"]", function (t, n, e) {
            var o,
              r = cc11001100_hook("r", f(function (t) {
                var n = cc11001100_hook("n", [t], "var-init");
                "function" == typeof t && (n.push(t.prototype), t.prototype.constructor && n.push(t.prototype.constructor.prototype));
                return n;
              }(t)), "var-init");
            try {
              for (r.s(); !(o = cc11001100_hook("o", r.n(), "assign")).done;) {
                var a = cc11001100_hook("a", o.value, "var-init");
                n && ("string" == typeof n ? a.template = cc11001100_hook("a.template", n, "assign") : n instanceof Array ? a.aPack = cc11001100_hook("a.aPack", n, "assign") : a.aNode = cc11001100_hook("a.aNode", n, "assign")), e.length && p(a, e);
              }
            } catch (i) {
              r.e(i);
            } finally {
              r.f();
            }
            return "object" === s(t) ? (0, c.defineComponent)(t) : t;
          }, "assign");
        }.apply(n, e), "var-init");
      e === undefined || (t.exports = cc11001100_hook("t.exports", e, "assign"));
    },
    1: function (t, n) {
      t.exports = cc11001100_hook("t.exports", e, "assign");
    },
    2: function (t, n) {
      t.exports = cc11001100_hook("t.exports", o, "assign");
    },
    3: function (t, n, e) {
      n = cc11001100_hook("n", function () {
        "use strict";

        t.exports = cc11001100_hook("t.exports", function (e) {
          var u = cc11001100_hook("u", [], "var-init");
          return u.toString = cc11001100_hook("u.toString", function () {
            return this.map(function (t) {
              var n = cc11001100_hook("n", function (t, n) {
                var e = cc11001100_hook("e", t[1] || "", "var-init"),
                  o = cc11001100_hook("o", t[3], "var-init");
                if (!o) return e;
                if (n && "function" == typeof btoa) {
                  t = cc11001100_hook("t", function (t) {
                    t = cc11001100_hook("t", btoa(unescape(encodeURIComponent(JSON.stringify(t)))), "assign"), t = cc11001100_hook("t", "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t), "assign");
                    return "/*# ".concat(t, " */");
                  }(o), "assign"), n = cc11001100_hook("n", o.sources.map(function (t) {
                    return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */");
                  }), "assign");
                  return [e].concat(n).concat([t]).join("\n");
                }
                return [e].join("\n");
              }(t, e), "var-init");
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }, "assign"), u.i = cc11001100_hook("u.i", function (t, n, e) {
            "string" == typeof t && (t = cc11001100_hook("t", [[null, t, ""]], "assign"));
            var o = cc11001100_hook("o", {}, "var-init");
            if (e) for (var r = cc11001100_hook("r", 0, "var-init"); r < this.length; r++) {
              var a = cc11001100_hook("a", this[r][0], "var-init");
              null != a && (o[a] = cc11001100_hook("o[a]", !0, "assign"));
            }
            for (var i = cc11001100_hook("i", 0, "var-init"); i < t.length; i++) {
              var c = cc11001100_hook("c", [].concat(t[i]), "var-init");
              e && o[c[0]] || (n && (c[2] ? c[2] = cc11001100_hook("c[2]", "".concat(n, " and ").concat(c[2]), "assign") : c[2] = cc11001100_hook("c[2]", n, "assign")), u.push(c));
            }
          }, "assign"), u;
        }, "assign");
      }.apply(n, []), "assign");
      n === undefined || (t.exports = cc11001100_hook("t.exports", n, "assign"));
    },
    37: function (t, n) {
      t.exports = cc11001100_hook("t.exports", " <div id=\"foot\" class=\"{{$style['foot-container']}}\"> <div class=\"foot-inner\"> <span id=\"help\" class=\"{{$style['help-container']}}\"> <a href=\"{{helpLink}}\" target=\"_blank\" on-mousedown=\"sendLog({'fm': 'behb','tab':'help','url':helpLink,'title':'帮助'},'sclick')\"> 帮助</a> <a href=\"{{jubaoList}}\" target=\"_blank\" on-mousedown=\"sendLog({'fm': 'behb','tab':'jubao','url':jubaoList,'title':'举报'},'sclick')\"> 举报</a> <a class=\"feedback\" onclick=\"return false;\" href=\"javascript:;\" target=\"_blank\" on-mousedown=\"sendLog({'fm': 'behb','tab':'feedback'},'nsclick')\"> 用户反馈</a> <a s-if=\"dyconfig && dyconfig.title\" class=\"activity\" href=\"{{dyconfig.url}}\" target=\"_blank\" on-mousedown=\"sendLog({'fm': 'behb','tab': 'diaoyan'},'nsclick')\"> {{ dyconfig.title }} </a> </span> </div> </div> ", "assign");
    },
    4: function (t, n, e) {
      "use strict";

      function u(t, n) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        for (var e = cc11001100_hook("e", [], "var-init"), o = cc11001100_hook("o", {}, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.length; r++) {
          var a = cc11001100_hook("a", n[r], "var-init"),
            i = cc11001100_hook("i", a[0], "var-init"),
            a = cc11001100_hook("a", {
              id: cc11001100_hook("id", t + ":" + r, "object-key-init"),
              css: cc11001100_hook("css", a[1], "object-key-init"),
              media: cc11001100_hook("media", a[2], "object-key-init"),
              sourceMap: cc11001100_hook("sourceMap", a[3], "object-key-init")
            }, "var-init");
          o[i] ? o[i].parts.push(a) : e.push(o[i] = cc11001100_hook("o[i]", {
            id: cc11001100_hook("id", i, "object-key-init"),
            parts: cc11001100_hook("parts", [a], "object-key-init")
          }, "assign"));
        }
        return e;
      }
      e.r(n), e.d(n, "default", function () {
        return r;
      });
      e = cc11001100_hook("e", "undefined" != typeof document, "assign");
      if ("undefined" != typeof DEBUG && DEBUG && !e) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var s = cc11001100_hook("s", {}, "var-init"),
        o = cc11001100_hook("o", e && (document.head || document.getElementsByTagName("head")[0]), "var-init"),
        a = cc11001100_hook("a", null, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        f = cc11001100_hook("f", !1, "var-init"),
        c = function () {},
        l = cc11001100_hook("l", null, "var-init"),
        p = cc11001100_hook("p", "data-vue-ssr-id", "var-init"),
        d = cc11001100_hook("d", "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()), "var-init");
      function r(i, t, n, e) {
        cc11001100_hook("i", i, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        f = cc11001100_hook("f", !!e.runAsProduction || n, "assign"), l = cc11001100_hook("l", e || {}, "assign");
        var c = cc11001100_hook("c", u(i, t), "var-init");
        return h(c), function (t) {
          for (var n = cc11001100_hook("n", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < c.length; e++) {
            var o = cc11001100_hook("o", c[e], "var-init");
            (r = cc11001100_hook("r", s[o.id], "assign")).refs--, n.push(r);
          }
          t ? h(c = cc11001100_hook("c", u(i, t), "assign")) : c = cc11001100_hook("c", [], "assign");
          for (var r, e = cc11001100_hook("e", 0, "var-init"); e < n.length; e++) if (0 === (r = cc11001100_hook("r", n[e], "assign")).refs) {
            for (var a = cc11001100_hook("a", 0, "var-init"); a < r.parts.length; a++) r.parts[a]();
            delete s[r.id];
          }
        };
      }
      function h(t) {
        cc11001100_hook("t", t, "function-parameter");
        for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
          var e = cc11001100_hook("e", t[n], "var-init"),
            o = cc11001100_hook("o", s[e.id], "var-init");
          if (o) {
            o.refs++;
            for (var r = cc11001100_hook("r", 0, "var-init"); r < o.parts.length; r++) o.parts[r](e.parts[r]);
            for (; r < e.parts.length; r++) o.parts.push(b(e.parts[r]));
            o.parts.length > e.parts.length && (o.parts.length = cc11001100_hook("o.parts.length", e.parts.length, "assign"));
          } else {
            for (var a = cc11001100_hook("a", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e.parts.length; r++) a.push(b(e.parts[r]));
            s[e.id] = cc11001100_hook("s[e.id]", {
              id: cc11001100_hook("id", e.id, "object-key-init"),
              refs: cc11001100_hook("refs", 1, "object-key-init"),
              parts: cc11001100_hook("parts", a, "object-key-init")
            }, "assign");
          }
        }
      }
      function y() {
        var t,
          n = cc11001100_hook("n", document.createElement("style"), "var-init"),
          e = cc11001100_hook("e", l.attributes || {}, "var-init");
        for (t in n.type = cc11001100_hook("n.type", "text/css", "assign"), e) e.hasOwnProperty(t) && n.setAttribute(t, e[t]);
        return o.appendChild(n), n;
      }
      function b(n) {
        cc11001100_hook("n", n, "function-parameter");
        var t,
          e,
          o,
          r = cc11001100_hook("r", document.querySelector("style[" + p + '~="' + n.id + '"]'), "var-init");
        if (r) {
          if (f) return c;
          r.parentNode.removeChild(r);
        }
        return o = cc11001100_hook("o", d ? (t = cc11001100_hook("t", i++, "assign"), r = cc11001100_hook("r", a = cc11001100_hook("a", a || y(), "assign"), "assign"), e = cc11001100_hook("e", g.bind(null, r, t, !1), "assign"), g.bind(null, r, t, !0)) : (r = cc11001100_hook("r", y(), "assign"), e = cc11001100_hook("e", function (t, n) {
          var e = cc11001100_hook("e", n.css, "var-init"),
            o = cc11001100_hook("o", n.media, "var-init"),
            r = cc11001100_hook("r", n.sourceMap, "var-init");
          o && t.setAttribute("media", o);
          l.ssrId && t.setAttribute(p, n.id);
          r && (e += cc11001100_hook("e", "\n/*# sourceURL=" + r.sources[0] + " */", "assign"), e += cc11001100_hook("e", "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */", "assign"));
          if (t.styleSheet) t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", e, "assign");else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        }.bind(null, r), "assign"), function () {
          r.parentNode.removeChild(r);
        }), "assign"), e(n), function (t) {
          t ? t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap || e(n = cc11001100_hook("n", t, "assign")) : o();
        };
      }
      var m,
        v = cc11001100_hook("v", (m = cc11001100_hook("m", [], "assign"), function (t, n) {
          return m[t] = cc11001100_hook("m[t]", n, "assign"), m.filter(Boolean).join("\n");
        }), "var-init");
      function g(t, n, e, o) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        e = cc11001100_hook("e", e ? "" : o.css, "assign");
        t.styleSheet ? t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", v(n, e), "assign") : (o = cc11001100_hook("o", document.createTextNode(e), "assign"), (e = cc11001100_hook("e", t.childNodes, "assign"))[n] && t.removeChild(e[n]), e.length ? t.insertBefore(o, e[n]) : t.appendChild(o));
      }
    },
    5: function (t, n) {
      t.exports = cc11001100_hook("t.exports", r, "assign");
    },
    6: function (t, n) {
      t.exports = cc11001100_hook("t.exports", a, "assign");
    },
    66: function (t, n, e) {
      "use strict";

      e.r(n);
      var o,
        r = cc11001100_hook("r", e(0), "var-init"),
        a = cc11001100_hook("a", e.n(r), "var-init"),
        r = cc11001100_hook("r", (e(67), e(37)), "var-init"),
        i = cc11001100_hook("i", e.n(r), "var-init"),
        c = cc11001100_hook("c", e(9), "var-init"),
        r = cc11001100_hook("r", e.n(c), "var-init");
      for (o in c) ["default"].indexOf(o) < 0 && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(o);
      n["default"] = cc11001100_hook("n[\"default\"]", a()(r.a, i.a, []), "assign");
    },
    67: function (t, n, e) {
      var o = cc11001100_hook("o", e(68), "var-init");
      (o = cc11001100_hook("o", "string" == typeof o ? [[t.i, o, ""]] : o, "assign")).locals && (t.exports = cc11001100_hook("t.exports", o.locals, "assign"));
      (0, e(4)["default"])("bd564882", o, !0, {
        attributes: {
          "data-for": cc11001100_hook("data-for", "result", "object-key-init")
        },
        runAsProduction: cc11001100_hook("runAsProduction", !0, "object-key-init")
      });
    },
    68: function (t, n, e) {
      (n = cc11001100_hook("n", e(3)(!1), "assign")).push([t.i, ".foot-container_2X1Nt {\n  text-align: left;\n  height: 42px;\n  line-height: 42px;\n  border-top: none;\n  margin-top: 0;\n  background: #f5f6f5;\n}\n.foot-container_2X1Nt span {\n  color: #666666;\n}\n.help-container_3VJQo {\n  zoom: 1;\n  float: left !important;\n  padding-left: 150px !important;\n}\n.help-container_3VJQo a {\n  color: #9195a3;\n  padding: 0 12px;\n  text-decoration: none;\n}\n.help-container_3VJQo a:hover {\n  color: #222;\n}\n.help-container_3VJQo a:first-child {\n  padding-left: 0;\n}\n@media screen and (min-width: 1921px) {\n  .foot-container_2X1Nt div {\n    width: 1212px;\n    margin: 0 auto;\n  }\n  .help-container_3VJQo {\n    padding-left: 140px !important;\n  }\n}\n", ""]), n.locals = cc11001100_hook("n.locals", {
        "foot-container": cc11001100_hook("foot-container", "foot-container_2X1Nt", "object-key-init"),
        footContainer: cc11001100_hook("footContainer", "foot-container_2X1Nt", "object-key-init"),
        "help-container": cc11001100_hook("help-container", "help-container_3VJQo", "object-key-init"),
        helpContainer: cc11001100_hook("helpContainer", "help-container_3VJQo", "object-key-init")
      }, "assign"), t.exports = cc11001100_hook("t.exports", n, "assign");
    },
    9: function (t, n, e) {
      "use strict";

      n.__esModule = cc11001100_hook("n.__esModule", !0, "assign");
      var o,
        r = cc11001100_hook("r", e(2), "var-init"),
        a = cc11001100_hook("a", e(1), "var-init"),
        i = cc11001100_hook("i", e(5), "var-init"),
        e = cc11001100_hook("e", e(6), "var-init"),
        r = cc11001100_hook("r", (o = cc11001100_hook("o", a.Component, "assign"), r.__extends(c, o), c.prototype.initData = cc11001100_hook("c.prototype.initData", function () {
          return {
            helpLink: cc11001100_hook("helpLink", "http://help.baidu.com/question", "object-key-init"),
            jubaoList: cc11001100_hook("jubaoList", "http://www.baidu.com/search/jubao.html", "object-key-init"),
            dyconfig: {}
          };
        }, "assign"), c.prototype.sendLog = cc11001100_hook("c.prototype.sendLog", function (t, n) {
          this.log.send(t, n);
        }, "assign"), r.__decorate([i.injectable, r.__metadata("design:paramtypes", [e.SanOption, e.Log])], c)), "var-init");
      function c(t, n) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        t = cc11001100_hook("t", o.call(this, t) || this, "assign");
        return t.trimWhitespace = cc11001100_hook("t.trimWhitespace", "all", "assign"), t.log = cc11001100_hook("t.log", n, "assign"), t;
      }
      n["default"] = cc11001100_hook("n[\"default\"]", r, "assign");
    }
  }, "assign"), u = cc11001100_hook("u", {}, "assign"), i.m = cc11001100_hook("i.m", c, "assign"), i.c = cc11001100_hook("i.c", u, "assign"), i.d = cc11001100_hook("i.d", function (t, n, e) {
    i.o(t, n) || Object.defineProperty(t, n, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: cc11001100_hook("get", e, "object-key-init")
    });
  }, "assign"), i.r = cc11001100_hook("i.r", function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: cc11001100_hook("value", "Module", "object-key-init")
    }), Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }, "assign"), i.t = cc11001100_hook("i.t", function (n, t) {
    if (1 & t && (n = cc11001100_hook("n", i(n), "assign")), 8 & t) return n;
    if (4 & t && "object" == typeof n && n && n.__esModule) return n;
    var e = cc11001100_hook("e", Object.create(null), "var-init");
    if (i.r(e), Object.defineProperty(e, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      value: cc11001100_hook("value", n, "object-key-init")
    }), 2 & t && "string" != typeof n) for (var o in n) i.d(e, o, function (t) {
      return n[t];
    }.bind(null, o));
    return e;
  }, "assign"), i.n = cc11001100_hook("i.n", function (t) {
    var n = cc11001100_hook("n", t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    }, "var-init");
    return i.d(n, "a", n), n;
  }, "assign"), i.o = cc11001100_hook("i.o", function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, "assign"), i.p = cc11001100_hook("i.p", "https://pss.bdstatic.com/r/www/cache", "assign"), i(i.s = cc11001100_hook("i.s", 66, "assign"));
  function i(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (u[t]) return u[t].exports;
    var n = cc11001100_hook("n", u[t] = cc11001100_hook("u[t]", {
      i: cc11001100_hook("i", t, "object-key-init"),
      l: cc11001100_hook("l", !1, "object-key-init"),
      exports: {}
    }, "assign"), "var-init");
    return c[t].call(n.exports, n, n.exports, i), n.l = cc11001100_hook("n.l", !0, "assign"), n.exports;
  }
  var c, u;
});