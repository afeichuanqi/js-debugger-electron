define("aladdin-san/app/se_com_default/result_76dcd8b", ["san", "tslib", "@searchfe/inject-js", searchUiPcNode["Row_Span"], "@baidu/www-api", searchUiPcNode["Row_Row"], searchUiPcNode["Source_Source"], searchUiPcNode["Label_Label"], searchUiPcNode["Image_Image"], searchUiPcNode["Title_Title"], searchUiPcNode["Star_Star"], searchUiPcNode["Tts_Tts"]], function (a, n, s, i, r, o, l, c, u, p, f, m) {
  return h = cc11001100_hook("h", {}, "assign"), d.m = cc11001100_hook("d.m", _ = cc11001100_hook("_", [function (t, e, a) {
    var n = cc11001100_hook("n", [e, a(1)], "var-init"),
      s = cc11001100_hook("s", function (t, o) {
        "use strict";

        function l() {
          return (l = cc11001100_hook("l", Object.assign || function (t) {
            for (var e = cc11001100_hook("e", 1, "var-init"); e < arguments.length; e++) {
              var a = cc11001100_hook("a", arguments[e], "var-init");
              for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (t[n] = cc11001100_hook("t[n]", a[n], "assign"));
            }
            return t;
          }, "assign")).apply(this, arguments);
        }
        function c(t) {
          cc11001100_hook("t", t, "function-parameter");
          return c = cc11001100_hook("c", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function c(e) {
            return typeof e;
          } : function c(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
          }, "assign"), c(t);
        }
        function u(t, e) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("e", e, "function-parameter");
          var a;
          if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
            if (Array.isArray(t) || (a = cc11001100_hook("a", function (t, e) {
              if (!t) return;
              if ("string" == typeof t) return p(t, e);
              var a = cc11001100_hook("a", Object.prototype.toString.call(t).slice(8, -1), "var-init");
              "Object" === a && t.constructor && (a = cc11001100_hook("a", t.constructor.name, "assign"));
              if ("Map" === a || "Set" === a) return Array.from(t);
              if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return p(t, e);
            }(t), "assign")) || e && t && "number" == typeof t.length) {
              a && (t = cc11001100_hook("t", a, "assign"));
              var n = cc11001100_hook("n", 0, "var-init"),
                s = function s() {};
              return {
                s: cc11001100_hook("s", s, "object-key-init"),
                n: function () {
                  return n >= t.length ? {
                    done: cc11001100_hook("done", !0, "object-key-init")
                  } : {
                    done: cc11001100_hook("done", !1, "object-key-init"),
                    value: cc11001100_hook("value", t[n++], "object-key-init")
                  };
                },
                e: function (t) {
                  throw t;
                },
                f: cc11001100_hook("f", s, "object-key-init")
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var i,
            r = cc11001100_hook("r", !0, "var-init"),
            o = cc11001100_hook("o", !1, "var-init");
          return {
            s: function () {
              a = cc11001100_hook("a", t[Symbol.iterator](), "assign");
            },
            n: function () {
              var t = cc11001100_hook("t", a.next(), "var-init");
              return r = cc11001100_hook("r", t.done, "assign"), t;
            },
            e: function (t) {
              o = cc11001100_hook("o", !0, "assign"), i = cc11001100_hook("i", t, "assign");
            },
            f: function () {
              try {
                r || null == a["return"] || a["return"]();
              } finally {
                if (o) throw i;
              }
            }
          };
        }
        function p(t, e) {
          cc11001100_hook("t", t, "function-parameter");
          cc11001100_hook("e", e, "function-parameter");
          (null == e || e > t.length) && (e = cc11001100_hook("e", t.length, "assign"));
          for (var a = cc11001100_hook("a", 0, "var-init"), n = cc11001100_hook("n", new Array(e), "var-init"); a < e; a++) n[a] = cc11001100_hook("n[a]", t[a], "assign");
          return n;
        }
        Object.defineProperty(t, "__esModule", {
          value: cc11001100_hook("value", !0, "object-key-init")
        }), t["default"] = cc11001100_hook("t[\"default\"]", function (t, e, a) {
          var n,
            s = cc11001100_hook("s", u(function (t) {
              var e = cc11001100_hook("e", [t], "var-init");
              "function" == typeof t && (e.push(t.prototype), t.prototype.constructor && e.push(t.prototype.constructor.prototype));
              return e;
            }(t)), "var-init");
          try {
            for (s.s(); !(n = cc11001100_hook("n", s.n(), "assign")).done;) {
              var i = cc11001100_hook("i", n.value, "var-init");
              e && (i.template = cc11001100_hook("i.template", e, "assign")), a.length && function (t, e) {
                var a,
                  n = cc11001100_hook("n", {}, "var-init"),
                  s = cc11001100_hook("s", u(e), "var-init");
                try {
                  for (s.s(); !(a = cc11001100_hook("a", s.n(), "assign")).done;) {
                    var i = cc11001100_hook("i", a.value, "var-init");
                    l(n, i);
                  }
                } catch (o) {
                  s.e(o);
                } finally {
                  s.f();
                }
                var r = cc11001100_hook("r", t.initData, "var-init");
                t.initData = cc11001100_hook("t.initData", r ? function () {
                  return l({}, r.call(this), {
                    $style: cc11001100_hook("$style", n, "object-key-init")
                  });
                } : function () {
                  return n;
                }, "assign");
              }(i, a);
            }
          } catch (r) {
            s.e(r);
          } finally {
            s.f();
          }
          return "object" === c(t) ? (0, o.defineComponent)(t) : t;
        }, "assign");
      }.apply(e, n), "var-init");
    s === undefined || (t.exports = cc11001100_hook("t.exports", s, "assign"));
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", a, "assign");
  }, function (t, e, a) {
    var n = cc11001100_hook("n", function () {
      "use strict";

      t.exports = cc11001100_hook("t.exports", function (a) {
        var l = cc11001100_hook("l", [], "var-init");
        return l.toString = cc11001100_hook("l.toString", function () {
          return this.map(function (t) {
            var e = cc11001100_hook("e", function (t, e) {
              var a = cc11001100_hook("a", t[1] || "", "var-init"),
                n = cc11001100_hook("n", t[3], "var-init");
              if (!n) return a;
              if (e && "function" == typeof btoa) {
                var s = cc11001100_hook("s", function (t) {
                    var e = cc11001100_hook("e", btoa(unescape(encodeURIComponent(JSON.stringify(t)))), "var-init"),
                      a = cc11001100_hook("a", "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e), "var-init");
                    return "/*# ".concat(a, " */");
                  }(n), "var-init"),
                  i = cc11001100_hook("i", n.sources.map(function (t) {
                    return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */");
                  }), "var-init");
                return [a].concat(i).concat([s]).join("\n");
              }
              return [a].join("\n");
            }(t, a), "var-init");
            return t[2] ? "@media ".concat(t[2], " {").concat(e, "}") : e;
          }).join("");
        }, "assign"), l.i = cc11001100_hook("l.i", function (t, e, a) {
          "string" == typeof t && (t = cc11001100_hook("t", [[null, t, ""]], "assign"));
          var n = cc11001100_hook("n", {}, "var-init");
          if (a) for (var s = cc11001100_hook("s", 0, "var-init"); s < this.length; s++) {
            var i = cc11001100_hook("i", this[s][0], "var-init");
            null != i && (n[i] = cc11001100_hook("n[i]", !0, "assign"));
          }
          for (var r = cc11001100_hook("r", 0, "var-init"); r < t.length; r++) {
            var o = cc11001100_hook("o", [].concat(t[r]), "var-init");
            a && n[o[0]] || (e && (o[2] ? o[2] = cc11001100_hook("o[2]", "".concat(e, " and ").concat(o[2]), "assign") : o[2] = cc11001100_hook("o[2]", e, "assign")), l.push(o));
          }
        }, "assign"), l;
      }, "assign");
    }.apply(e, []), "var-init");
    n === undefined || (t.exports = cc11001100_hook("t.exports", n, "assign"));
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", n, "assign");
  }, function (t, e, a) {
    "use strict";

    function l(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      for (var a = cc11001100_hook("a", [], "var-init"), n = cc11001100_hook("n", {}, "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < e.length; s++) {
        var i = cc11001100_hook("i", e[s], "var-init"),
          r = cc11001100_hook("r", i[0], "var-init"),
          o = cc11001100_hook("o", {
            id: cc11001100_hook("id", t + ":" + s, "object-key-init"),
            css: cc11001100_hook("css", i[1], "object-key-init"),
            media: cc11001100_hook("media", i[2], "object-key-init"),
            sourceMap: cc11001100_hook("sourceMap", i[3], "object-key-init")
          }, "var-init");
        n[r] ? n[r].parts.push(o) : a.push(n[r] = cc11001100_hook("n[r]", {
          id: cc11001100_hook("id", r, "object-key-init"),
          parts: cc11001100_hook("parts", [o], "object-key-init")
        }, "assign"));
      }
      return a;
    }
    a.r(e), a.d(e, "default", function () {
      return d;
    });
    var n = cc11001100_hook("n", "undefined" != typeof document, "var-init");
    if ("undefined" != typeof DEBUG && DEBUG && !n) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var c = cc11001100_hook("c", {}, "var-init"),
      s = cc11001100_hook("s", n && (document.head || document.getElementsByTagName("head")[0]), "var-init"),
      i = cc11001100_hook("i", null, "var-init"),
      r = cc11001100_hook("r", 0, "var-init"),
      u = cc11001100_hook("u", !1, "var-init"),
      o = function () {},
      p = cc11001100_hook("p", null, "var-init"),
      f = cc11001100_hook("f", "data-vue-ssr-id", "var-init"),
      m = cc11001100_hook("m", "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()), "var-init");
    function d(r, t, e, a) {
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      u = cc11001100_hook("u", !!a.runAsProduction || e, "assign"), p = cc11001100_hook("p", a || {}, "assign");
      var o = cc11001100_hook("o", l(r, t), "var-init");
      return _(o), function (t) {
        for (var e = cc11001100_hook("e", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < o.length; a++) {
          var n = cc11001100_hook("n", o[a], "var-init");
          (s = cc11001100_hook("s", c[n.id], "assign")).refs--, e.push(s);
        }
        t ? _(o = cc11001100_hook("o", l(r, t), "assign")) : o = cc11001100_hook("o", [], "assign");
        for (var s, a = cc11001100_hook("a", 0, "var-init"); a < e.length; a++) {
          if (0 === (s = cc11001100_hook("s", e[a], "assign")).refs) {
            for (var i = cc11001100_hook("i", 0, "var-init"); i < s.parts.length; i++) s.parts[i]();
            delete c[s.id];
          }
        }
      };
    }
    function _(t) {
      cc11001100_hook("t", t, "function-parameter");
      for (var e = cc11001100_hook("e", 0, "var-init"); e < t.length; e++) {
        var a = cc11001100_hook("a", t[e], "var-init"),
          n = cc11001100_hook("n", c[a.id], "var-init");
        if (n) {
          n.refs++;
          for (var s = cc11001100_hook("s", 0, "var-init"); s < n.parts.length; s++) n.parts[s](a.parts[s]);
          for (; s < a.parts.length; s++) n.parts.push(y(a.parts[s]));
          n.parts.length > a.parts.length && (n.parts.length = cc11001100_hook("n.parts.length", a.parts.length, "assign"));
        } else {
          for (var i = cc11001100_hook("i", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < a.parts.length; s++) i.push(y(a.parts[s]));
          c[a.id] = cc11001100_hook("c[a.id]", {
            id: cc11001100_hook("id", a.id, "object-key-init"),
            refs: cc11001100_hook("refs", 1, "object-key-init"),
            parts: cc11001100_hook("parts", i, "object-key-init")
          }, "assign");
        }
      }
    }
    function h() {
      var t = cc11001100_hook("t", document.createElement("style"), "var-init"),
        e = cc11001100_hook("e", p.attributes || {}, "var-init");
      for (var a in t.type = cc11001100_hook("t.type", "text/css", "assign"), e) e.hasOwnProperty(a) && t.setAttribute(a, e[a]);
      return s.appendChild(t), t;
    }
    function y(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t,
        a,
        n,
        s = cc11001100_hook("s", document.querySelector("style[" + f + '~="' + e.id + '"]'), "var-init");
      if (s) {
        if (u) return o;
        s.parentNode.removeChild(s);
      }
      return n = cc11001100_hook("n", m ? (t = cc11001100_hook("t", r++, "assign"), s = cc11001100_hook("s", i = cc11001100_hook("i", i || h(), "assign"), "assign"), a = cc11001100_hook("a", g.bind(null, s, t, !1), "assign"), g.bind(null, s, t, !0)) : (s = cc11001100_hook("s", h(), "assign"), a = cc11001100_hook("a", function (t, e) {
        var a = cc11001100_hook("a", e.css, "var-init"),
          n = cc11001100_hook("n", e.media, "var-init"),
          s = cc11001100_hook("s", e.sourceMap, "var-init");
        n && t.setAttribute("media", n);
        p.ssrId && t.setAttribute(f, e.id);
        s && (a += cc11001100_hook("a", "\n/*# sourceURL=" + s.sources[0] + " */", "assign"), a += cc11001100_hook("a", "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(s)))) + " */", "assign"));
        if (t.styleSheet) t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", a, "assign");else {
          for (; t.firstChild;) t.removeChild(t.firstChild);
          t.appendChild(document.createTextNode(a));
        }
      }.bind(null, s), "assign"), function () {
        s.parentNode.removeChild(s);
      }), "assign"), a(e), function (t) {
        if (t) {
          if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
          a(e = cc11001100_hook("e", t, "assign"));
        } else n();
      };
    }
    var b,
      v = cc11001100_hook("v", (b = cc11001100_hook("b", [], "assign"), function (t, e) {
        return b[t] = cc11001100_hook("b[t]", e, "assign"), b.filter(Boolean).join("\n");
      }), "var-init");
    function g(t, e, a, n) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var s,
        i,
        r = cc11001100_hook("r", a ? "" : n.css, "var-init");
      t.styleSheet ? t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", v(e, r), "assign") : (s = cc11001100_hook("s", document.createTextNode(r), "assign"), (i = cc11001100_hook("i", t.childNodes, "assign"))[e] && t.removeChild(i[e]), i.length ? t.insertBefore(s, i[e]) : t.appendChild(s));
    }
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", s, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", i, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", r, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", o, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", l, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", c, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", u, "assign");
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", p, "assign");
  }, function (t, e, a) {
    "use strict";

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var n,
      s = cc11001100_hook("s", a(3), "var-init"),
      i = cc11001100_hook("i", a(1), "var-init"),
      r = cc11001100_hook("r", a(7), "var-init"),
      o = cc11001100_hook("o", a(5), "var-init"),
      l = cc11001100_hook("l", s.__importDefault(a(51)), "var-init"),
      c = cc11001100_hook("c", s.__importDefault(a(53)), "var-init"),
      u = cc11001100_hook("u", s.__importDefault(a(55)), "var-init"),
      p = cc11001100_hook("p", s.__importDefault(a(57)), "var-init"),
      f = cc11001100_hook("f", (n = cc11001100_hook("n", i.Component, "assign"), s.__extends(m, n), m.prototype.initData = cc11001100_hook("m.prototype.initData", function () {
        return {
          officialFlag: cc11001100_hook("officialFlag", !1, "object-key-init"),
          title: cc11001100_hook("title", "", "object-key-init"),
          titleUrl: cc11001100_hook("titleUrl", "", "object-key-init"),
          extQuery: cc11001100_hook("extQuery", "", "object-key-init"),
          kbShowStyle: cc11001100_hook("kbShowStyle", "", "object-key-init"),
          kbUrl: cc11001100_hook("kbUrl", "", "object-key-init"),
          kbFrom: cc11001100_hook("kbFrom", "", "object-key-init"),
          showUrl: cc11001100_hook("showUrl", "", "object-key-init"),
          toolsId: cc11001100_hook("toolsId", "", "object-key-init"),
          toolsTitle: cc11001100_hook("toolsTitle", "", "object-key-init"),
          robotsUrl: cc11001100_hook("robotsUrl", "", "object-key-init"),
          col: cc11001100_hook("col", "24", "object-key-init"),
          urlSign: cc11001100_hook("urlSign", "", "object-key-init"),
          test: cc11001100_hook("test", 0, "object-key-init"),
          subLinkArray: cc11001100_hook("subLinkArray", [], "object-key-init"),
          ttsInfo: {},
          showNewSafeIcon: cc11001100_hook("showNewSafeIcon", !1, "object-key-init"),
          codeCoverAry: cc11001100_hook("codeCoverAry", [], "object-key-init"),
          authoritativeInfo: {}
        };
      }, "assign"), m.prototype.attached = cc11001100_hook("m.prototype.attached", function () {
        var e = cc11001100_hook("e", this, "var-init");
        this.nextTick(function () {
          e.data.get("codeCoverAry").forEach(function (t) {
            e.codeCover.send(t, 1);
          });
        });
      }, "assign"), m.components = cc11001100_hook("m.components", {
        "sub-link": cc11001100_hook("sub-link", l["default"], "object-key-init"),
        "sub-title": cc11001100_hook("sub-title", u["default"], "object-key-init"),
        "c-title": cc11001100_hook("c-title", p["default"], "object-key-init"),
        "c-content": cc11001100_hook("c-content", c["default"], "object-key-init")
      }, "assign"), s.__decorate([o.injectable, s.__metadata("design:paramtypes", [r.SanOption, r.CodeCover])], m)), "var-init");
    function m(t, e) {
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("e", e, "function-parameter");
      var a = cc11001100_hook("a", n.call(this, t) || this, "var-init");
      return a.trimWhitespace = cc11001100_hook("a.trimWhitespace", "all", "assign"), a.codeCover = cc11001100_hook("a.codeCover", e, "assign"), a;
    }
    e["default"] = cc11001100_hook("e[\"default\"]", f, "assign");
  }, function (t, e, a) {
    "use strict";

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var n,
      s = cc11001100_hook("s", a(3), "var-init"),
      i = cc11001100_hook("i", a(1), "var-init"),
      r = cc11001100_hook("r", s.__importDefault(a(24)), "var-init"),
      o = cc11001100_hook("o", s.__importDefault(a(26)), "var-init"),
      l = cc11001100_hook("l", s.__importDefault(a(10)), "var-init"),
      c = cc11001100_hook("c", (n = cc11001100_hook("n", i.Component, "assign"), s.__extends(u, n), u.prototype.initData = cc11001100_hook("u.prototype.initData", function () {
        return {
          subLinkArray: cc11001100_hook("subLinkArray", [], "object-key-init"),
          tplData: {},
          alignType: cc11001100_hook("alignType", "left", "object-key-init"),
          colNum: cc11001100_hook("colNum", 3, "object-key-init"),
          searchUrl: cc11001100_hook("searchUrl", "", "object-key-init")
        };
      }, "assign"), u.components = cc11001100_hook("u.components", {
        "c-star": cc11001100_hook("c-star", r["default"], "object-key-init"),
        "c-tts": cc11001100_hook("c-tts", o["default"], "object-key-init"),
        "c-label": cc11001100_hook("c-label", l["default"], "object-key-init")
      }, "assign"), u), "var-init");
    function u() {
      var t = cc11001100_hook("t", null !== n && n.apply(this, arguments) || this, "var-init");
      return t.trimWhitespace = cc11001100_hook("t.trimWhitespace", "all", "assign"), t;
    }
    e["default"] = cc11001100_hook("e[\"default\"]", c, "assign");
  }, function (t, e, a) {
    "use strict";

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var n,
      s = cc11001100_hook("s", a(3), "var-init"),
      i = cc11001100_hook("i", a(1), "var-init"),
      r = cc11001100_hook("r", s.__importDefault(a(9)), "var-init"),
      o = cc11001100_hook("o", s.__importDefault(a(8)), "var-init"),
      l = cc11001100_hook("l", s.__importDefault(a(6)), "var-init"),
      c = cc11001100_hook("c", s.__importDefault(a(11)), "var-init"),
      u = cc11001100_hook("u", s.__importDefault(a(24)), "var-init"),
      p = cc11001100_hook("p", s.__importDefault(a(10)), "var-init"),
      f = cc11001100_hook("f", a(5), "var-init"),
      m = cc11001100_hook("m", s.__importDefault(a(26)), "var-init"),
      d = cc11001100_hook("d", (n = cc11001100_hook("n", i.Component, "assign"), s.__extends(_, n), _.prototype.initData = cc11001100_hook("_.prototype.initData", function () {
        return {
          normalGallery: cc11001100_hook("normalGallery", [], "object-key-init"),
          source: {},
          contentText: cc11001100_hook("contentText", "", "object-key-init"),
          leftImg: cc11001100_hook("leftImg", "", "object-key-init"),
          wenkuInfo: {},
          tplData: {},
          newTimeFactorStr: cc11001100_hook("newTimeFactorStr", "", "object-key-init"),
          url: cc11001100_hook("url", "", "object-key-init"),
          ttsInfo: {},
          showNewSafeIcon: cc11001100_hook("showNewSafeIcon", !1, "object-key-init"),
          authoritativeInfo: {}
        };
      }, "assign"), _.components = cc11001100_hook("_.components", {
        "c-source": cc11001100_hook("c-source", r["default"], "object-key-init"),
        "c-img": cc11001100_hook("c-img", c["default"], "object-key-init"),
        "c-row": cc11001100_hook("c-row", o["default"], "object-key-init"),
        "c-span": cc11001100_hook("c-span", l["default"], "object-key-init"),
        "c-star": cc11001100_hook("c-star", u["default"], "object-key-init"),
        "c-label": cc11001100_hook("c-label", p["default"], "object-key-init"),
        "c-tts": cc11001100_hook("c-tts", m["default"], "object-key-init")
      }, "assign"), _.computed = cc11001100_hook("_.computed", {
        showResHintUnsafe: function () {
          var t = cc11001100_hook("t", this.data.get("tplData").templateData, "var-init");
          return !("res_hint_unsafe" !== t.templateName || !t.hintData || !t.hintData.hintText);
        }
      }, "assign"), s.__decorate([f.injectable], _)), "var-init");
    function _() {
      var t = cc11001100_hook("t", null !== n && n.apply(this, arguments) || this, "var-init");
      return t.trimWhitespace = cc11001100_hook("t.trimWhitespace", "all", "assign"), t;
    }
    e["default"] = cc11001100_hook("e[\"default\"]", d, "assign");
  }, function (t, e, a) {
    "use strict";

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var n,
      s = cc11001100_hook("s", a(3), "var-init"),
      i = cc11001100_hook("i", a(1), "var-init"),
      r = cc11001100_hook("r", s.__importDefault(a(9)), "var-init"),
      o = cc11001100_hook("o", s.__importDefault(a(24)), "var-init"),
      l = cc11001100_hook("l", s.__importDefault(a(6)), "var-init"),
      c = cc11001100_hook("c", s.__importDefault(a(10)), "var-init"),
      u = cc11001100_hook("u", (n = cc11001100_hook("n", i.Component, "assign"), s.__extends(p, n), p.prototype.initData = cc11001100_hook("p.prototype.initData", function () {
        return {
          subtitleWithAvatar: cc11001100_hook("subtitleWithAvatar", [], "object-key-init"),
          subtitleWithIcon: cc11001100_hook("subtitleWithIcon", null, "object-key-init"),
          wenkuInfo: cc11001100_hook("wenkuInfo", null, "object-key-init"),
          leftImg: cc11001100_hook("leftImg", "", "object-key-init"),
          tplData: cc11001100_hook("tplData", null, "object-key-init"),
          suntitleTranslateUrl: cc11001100_hook("suntitleTranslateUrl", "", "object-key-init")
        };
      }, "assign"), p.components = cc11001100_hook("p.components", {
        "c-source": cc11001100_hook("c-source", r["default"], "object-key-init"),
        "c-star": cc11001100_hook("c-star", o["default"], "object-key-init"),
        "c-span": cc11001100_hook("c-span", l["default"], "object-key-init"),
        "c-label": cc11001100_hook("c-label", c["default"], "object-key-init")
      }, "assign"), p.computed = cc11001100_hook("p.computed", {
        labelData: function () {
          var t = cc11001100_hook("t", this.data.get("subtitleWithIcon.label"), "var-init");
          return {
            type: cc11001100_hook("type", null == t ? void 0 : t.type, "object-key-init"),
            text: cc11001100_hook("text", null == t ? void 0 : t.text, "object-key-init")
          };
        }
      }, "assign"), p), "var-init");
    function p() {
      var t = cc11001100_hook("t", null !== n && n.apply(this, arguments) || this, "var-init");
      return t.trimWhitespace = cc11001100_hook("t.trimWhitespace", "all", "assign"), t;
    }
    e["default"] = cc11001100_hook("e[\"default\"]", u, "assign");
  }, function (t, e, a) {
    "use strict";

    e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
    var n,
      s = cc11001100_hook("s", a(3), "var-init"),
      i = cc11001100_hook("i", a(1), "var-init"),
      r = cc11001100_hook("r", s.__importDefault(a(12)), "var-init"),
      o = cc11001100_hook("o", (n = cc11001100_hook("n", i.Component, "assign"), s.__extends(l, n), l.prototype.initData = cc11001100_hook("l.prototype.initData", function () {
        return {
          iconClass: cc11001100_hook("iconClass", "", "object-key-init"),
          iconText: cc11001100_hook("iconText", "", "object-key-init"),
          titleUrl: cc11001100_hook("titleUrl", "", "object-key-init"),
          officialFlag: cc11001100_hook("officialFlag", "", "object-key-init"),
          title: cc11001100_hook("title", "", "object-key-init"),
          frontIcon: {
            code: cc11001100_hook("code", "&#xe636", "object-key-init"),
            color: cc11001100_hook("color", "#509de0", "object-key-init")
          },
          dataClick: cc11001100_hook("dataClick", "", "object-key-init")
        };
      }, "assign"), l.components = cc11001100_hook("l.components", {
        "c-title": cc11001100_hook("c-title", r["default"], "object-key-init")
      }, "assign"), l), "var-init");
    function l() {
      var t = cc11001100_hook("t", null !== n && n.apply(this, arguments) || this, "var-init");
      return t.trimWhitespace = cc11001100_hook("t.trimWhitespace", "all", "assign"), t;
    }
    e["default"] = cc11001100_hook("e[\"default\"]", o, "assign");
  },,,,,,, function (t, e) {
    t.exports = cc11001100_hook("t.exports", f, "assign");
  },, function (t, e) {
    t.exports = cc11001100_hook("t.exports", m, "assign");
  }, function (t, e, a) {
    var n = cc11001100_hook("n", a(50), "var-init");
    "string" == typeof n && (n = cc11001100_hook("n", [[t.i, n, ""]], "assign")), n.locals && (t.exports = cc11001100_hook("t.exports", n.locals, "assign"));
    (0, a(4)["default"])("737009d0", n, !1, {
      runAsProduction: cc11001100_hook("runAsProduction", !0, "object-key-init")
    });
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div class="c-container" data-click="{{containerDataClick}}"> <div has-tts="{{tplData.ttsInfo[0].hasTts}}"> <c-title iconClass="{{iconClass}}" iconText="{{iconText}}" titleUrl="{{titleUrl}}" dataClick="{{titleDataClick}}" titleLabelProps="{{titleLabelProps}}" title="{{title}}" frontIcon="{{frontIcon}}" class="tts-title" preText="{{preText}}"/> <sub-title subtitleWithAvatar="{{subtitleWithAvatar}}" subtitleWithIcon="{{subtitleWithIcon}}" wenkuInfo="{{wenkuInfo}}" leftImg="{{leftImg}}" tplData="{{tplData}}" suntitleTranslateUrl="{{suntitleTranslateUrl}}"/> <c-content subtitleWithIcon="{{subtitleWithIcon}}" normalGallery="{{normalGallery}}" source="{{source}}" contentText="{{contentText}}" leftImg="{{leftImg}}" wenkuInfo="{{wenkuInfo}}" tplData="{{tplData}}" newTimeFactorStr="{{newTimeFactorStr}}" summaryList="{{summaryList}}" url="{{titleUrl}}" show-new-safe-icon="{{showNewSafeIcon}}" authoritative-info="{{authoritativeInfo}}"/> </div> <div s-if="tplData.sitelink_with_summary_cn" class="sitelink"> <div s-for="sl , index in tplData.sitelink_with_summary_cn.sitelink" s-bind:key="sl.title + index" class="{{[\'c-gap-top-small\', \'sitelink_summary\', index % 2 === 1 ? \'sitelink_summary_last\' : \'\']}}"> <a href="{{sl.url}}" target="_blank">{{sl.title}}</a> <p class="c-color-text">{{sl.summary}}</p> </div> </div> <sub-link s-if="subLinkArray" subLinkArray="{{ subLinkArray }}" alignType="{{ tplData.comm_sublink_align }}" colNum="{{ tplData.comm_sublink_colNum }}" tplData="{{ tplData }}" searchUrl="{{ searchUrl }}"/> </div> ', "assign");
  }, function (t, e, a) {
    var n = cc11001100_hook("n", a(52), "var-init");
    "string" == typeof n && (n = cc11001100_hook("n", [[t.i, n, ""]], "assign")), n.locals && (t.exports = cc11001100_hook("t.exports", n.locals, "assign"));
    (0, a(4)["default"])("8a37523a", n, !1, {
      runAsProduction: cc11001100_hook("runAsProduction", !0, "object-key-init")
    });
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div> <ul s-if="tplData.pc_site_group_new" class="subLink_answer" style="{{tplData.comm_general_pic && tplData.comm_general_pic.url ? \'padding-top: 6px\' : \'\'}}"> <li s-for="item , index in subLinkArray" has-tts="{{tplData.ttsInfo[index + 1]\n                    && tplData.ttsInfo[index + 1].hasTts ? tplData.ttsInfo[index + 1].hasTts : \'false\'}}"> <h4 class="f14" s-if="item.col0"> <a s-if="item.col0link" href="{{ item.col0link }}" target="_blank" s-html="item.col0" class="tts-title"> </a> <span s-else>{{ item.col0 }}</span> </h4> <div s-if="item.col1" class="label_wrap f13"> <c-label s-if="item.label.type && item.label.text" class="c-gap-right-small" type="{{item.label.type}}" text="{{item.label.text}}"/> <span class="" s-if="item.value"> <c-star style="margin-top: 2px;" score="{{item.value / 2}}"/> </span> <span>{{item.col1}}</span> <span s-if="item.col2">{{item.col2}}</span> <span s-else-if="item.timefactor">{{item.timefactor}}</span> <div s-if="item.abstract" s-html="item.abstract"></div> </div> <template s-else-if="!item.col2"> <div s-if="item.timefactor"> <span class="date">{{item.timefactor}}</span> <i s-if="item.abstract" class="subLink_answer_dis date">-</i> <span s-html="item.abstract"></span> </div> <div s-else-if="item.abstract" s-html="item.abstract"></div> </template> <template s-else> <div s-if="item.value" class="label_wrap f13"> <span class=""> <c-star style="margin-top: 2px;" score="{{item.value / 2}}"/>{{item.value}} </span> <span>{{item.col2}}</span> <span s-if="item.timefactor">{{item.timefactor}}</span> </div> <div s-else> <span class="date">{{item.col2}}&nbsp;&nbsp;</span> <span s-if="item.timefactor" class="date">{{item.timefactor}}</span> </div> <div s-if="item.abstract" s-html="item.abstract"></div> </template> <c-tts s-if="tplData.ttsInfo && tplData.ttsInfo[index + 1] && tplData.ttsInfo[index + 1].hasTts" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[index + 1].ext}}" tts-id="{{tplData.ttsInfo[index + 1].ttsId}}" title-url="{{tplData.ttsInfo[index + 1].titleUrl}}" tts-source-type="{{tplData.ttsInfo[index + 1].ttsSourceType}}"/> </li> </ul> <a s-if="searchUrl" href="{{searchUrl}}" target="_blank" class="c-gap-top-xsmall f14" style="display:block;"> {{tplData.comm_sublink_more.text}} </a> </div> ', "assign");
  }, function (t, e, a) {
    var n = cc11001100_hook("n", a(54), "var-init");
    "string" == typeof n && (n = cc11001100_hook("n", [[t.i, n, ""]], "assign")), n.locals && (t.exports = cc11001100_hook("t.exports", n.locals, "assign"));
    (0, a(4)["default"])("0e2aa182", n, !1, {
      runAsProduction: cc11001100_hook("runAsProduction", !0, "object-key-init")
    });
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div> <div s-if="normalGallery && normalGallery.length !== 0" style="margin-top: 10px;"> <c-row class="c-gap-bottom-small"> <c-span col="3" s-for="item , index in normalGallery" s-bind:key="item.link + index"> <a href="{{item.link}}" target="_blank"> <c-img type="z" src="{{ item.src }}" gridSize="3"/> </a> </c-span> </c-row> <c-source s-if="source && contentText && !leftImg" class="OP_LOG_LINK {{showNewSafeIcon ? $style.newSafeIcon : \'\'}}" s-bind="{{ source }}" sourceLinkTitle="true"> <c-label s-if="authoritativeInfo.type && authoritativeInfo.text" class="c-gap-left" type="{{authoritativeInfo.type}}" text="{{authoritativeInfo.text}}"/> </c-source> <c-tts s-if="tplData.ttsInfo[0] && tplData.ttsInfo[0].hasTts && source && contentText && !leftImg" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[0].ext}}" tts-id="{{tplData.ttsInfo[0].ttsId}}" title-url="{{tplData.ttsInfo[0].titleUrl}}" tts-source-type="{{tplData.ttsInfo[0].ttsSourceType}}"/> </div> <template s-else-if="leftImg"> <c-row class="c-gap-top-middle"> <c-span col="3"> <a href="{{url}}" target="_blank"> <c-img class="c-gap-top-mini" size="128_85" type="y" src="{{ leftImg }}" gridSize="3"/> </a> </c-span> <c-span col="9" class="c-span-last"> <p s-if="tplData.comm_subtitle_structure" class="f13 c-color-gray2"> {{ tplData.comm_subtitle_structure }} </p> <div s-if="wenkuInfo.score" class="c-color-gray2"> <c-star style="margin-top: 2px;" score="{{wenkuInfo.score}}"/> &nbsp;评分:{{ wenkuInfo.score }}/5 <template s-if="wenkuInfo.page">&nbsp;{{ wenkuInfo.page }}页</template> </div> <span s-if="tplData.ZhidaoProfTag"> <c-label type="blue-border" text="专业"/> <span class="m">答案:</span> </span> <span class="c-color-gray2" s-if="tplData.comm_summary_pre && !tplData.ZhidaoProfTag"> {{ tplData.comm_summary_pre }} </span> <span class="c-color-gray2" s-else-if="{{newTimeFactorStr}}">{{ newTimeFactorStr + \' \' }}</span> <p s-if="tplData.comm_original" class="f13 c-color-gray2"> <c-label type="blue-border" text="原创"/> {{ tplData.comm_original }} </p> <div s-if="tplData.baijiahao_struct_abstract" class="c-gray"> <c-label type="blue-border" text="百家号"/> 作者:{{ tplData.baijiahao_struct_abstract.author }} </div> <span s-if="tplData.general_pic && tplData.general_pic.hasPicType == \'21\'" class="{{$style.labelRight}}"> <c-label type="blue-border" text="图文"/> </span> <span s-if="tplData.from_official_info && tplData.from_official_info.is_main == 1" class="{{$style.labelRight}}"> <c-label type="blue-border" text="官方"/> </span> <p s-if="tplData.comm_sup_summary"> <span s-if="tplData.comm_sup_summary_pre" class="c-color-gray2"> {{ tplData.comm_sup_summary_pre }} </span> {{ tplData.comm_sup_summary }} </p> <span s-if="contentText" s-html="contentText" class="{{$style.contentRight}}"> </span> <div s-else-if="summaryList" s-for="item , index in summaryList" s-bind:key="item + index" s-html="{{ item }}"> </div> <div s-if="tplData.comm_summary_escaped" s-html="{{tplData.comm_summary_escaped}}"></div> <c-source s-if="source && !tplData.comm_summary_escaped && !subtitleWithIcon.iconClass" class="OP_LOG_LINK c-gap-top-xsmall {{showNewSafeIcon ? $style.newSafeIcon : \'\'}}" s-bind="{{ source }}" sourceLinkTitle="true"> <c-label s-if="authoritativeInfo.type && authoritativeInfo.text" class="c-gap-left" type="{{authoritativeInfo.type}}" text="{{authoritativeInfo.text}}"/> </c-source> <c-tts s-if="tplData.ttsInfo[0].hasTts && source\n                            && !tplData.comm_summary_escaped\n                            && !subtitleWithIcon.iconClass" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[0].ext}}" tts-id="{{tplData.ttsInfo[0].ttsId}}" title-url="{{tplData.ttsInfo[0].titleUrl}}" tts-source-type="{{tplData.ttsInfo[0].ttsSourceType}}"/> </c-span> </c-row> <c-source s-if="source && (tplData.comm_summary_escaped || subtitleWithIcon.iconClass)" class="OP_LOG_LINK c-gap-top-mini {{showNewSafeIcon ? $style.newSafeIcon : \'\'}}" s-bind="{{ source }}" sourceLinkTitle="true"> <c-label s-if="authoritativeInfo.type && authoritativeInfo.text" class="c-gap-left" type="{{authoritativeInfo.type}}" text="{{authoritativeInfo.text}}"/> </c-source> <c-tts s-if="tplData.ttsInfo[0].hasTts && source\n                    && (tplData.comm_summary_escaped || subtitleWithIcon.iconClass)" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[0].ext}}" tts-id="{{tplData.ttsInfo[0].ttsId}}" title-url="{{tplData.ttsInfo[0].titleUrl}}" tts-source-type="{{tplData.ttsInfo[0].ttsSourceType}}"/> </template> <div class="c-gap-top-small" s-else> <div s-if="showResHintUnsafe" class="unsafe_content {{$style[\'unsafe\']}}"> <a href="{{tplData.templateData.jubaoUrl}}" target="_blank" class="unsafe_ico_new c-color-orange"> 百度网址安全中心提醒您：{{tplData.templateData.hintData.hintText}} </a> </div> <span s-if="tplData.general_pic && tplData.general_pic.hasPicType == \'21\'" class="{{$style.labelRight}}"> <c-label type="blue-border" text="图文"/> </span> <span s-if="tplData.from_official_info && tplData.from_official_info.is_main == 1" class="{{$style.labelRight}}"> <c-label type="blue-border" text="官方"/> </span> <span class="c-color-gray2" s-if="{{newTimeFactorStr}}">{{ newTimeFactorStr + \' \' }}</span> <span s-if="tplData.ZhidaoProfTag"> <c-label type="blue-border" text="专业"/> <span class="m">答案:</span> </span> <span class="c-color-gray2" s-if="{{ tplData.comm_summary_pre && !tplData.ZhidaoProfTag}}"> {{ tplData.comm_summary_pre}} </span> <span s-if="contentText" s-html="{{ contentText }}" class="{{$style.contentRight}}"> </span> <div s-else-if="summaryList" s-for="item , index in summaryList" s-bind:key="item + index" s-html="{{ item }}"> </div> <div s-if="tplData.comm_summary_escaped" s-html="{{tplData.comm_summary_escaped}}"> </div> <c-source s-if="source && !leftImg" class="OP_LOG_LINK c-gap-top-xsmall {{ $style.sourceS }} {{showNewSafeIcon ? $style.newSafeIcon : \'\'}}" s-bind="{{ source }}" sourceLinkTitle="true"> <c-label s-if="authoritativeInfo.type && authoritativeInfo.text" class="c-gap-left" type="{{authoritativeInfo.type}}" text="{{authoritativeInfo.text}}"/> </c-source> <c-tts s-if="tplData.ttsInfo[0].hasTts && source && !leftImg" class="{{$style.ttsSite}}" ext="{{tplData.ttsInfo[0].ext}}" tts-id="{{tplData.ttsInfo[0].ttsId}}" title-url="{{tplData.ttsInfo[0].titleUrl}}" tts-source-type="{{tplData.ttsInfo[0].ttsSourceType}}"/> </div> </div> ', "assign");
  }, function (t, e, a) {
    var n = cc11001100_hook("n", a(56), "var-init");
    "string" == typeof n && (n = cc11001100_hook("n", [[t.i, n, ""]], "assign")), n.locals && (t.exports = cc11001100_hook("t.exports", n.locals, "assign"));
    (0, a(4)["default"])("0e5a0b53", n, !1, {
      runAsProduction: cc11001100_hook("runAsProduction", !0, "object-key-init")
    });
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <div style="margin-bottom: -4px;"> <div s-if="suntitleTranslateUrl" class="c-gray"> 查看此网页的中文翻译，请点击&nbsp; <a class="c-gray" href="{{suntitleTranslateUrl}}" target="_blank">翻译此页</a> </div> <c-source s-if="subtitleWithAvatar && subtitleWithAvatar[0] && subtitleWithAvatar[0].text" class="OP_LOG_LINK" img="{{subtitleWithAvatar[0].avatarUrl }}" sitename="{{ subtitleWithAvatar[0].text }}" sourceLinkTitle="true"/> <div s-if="wenkuInfo.score && !leftImg" class="c-color-gray2"> <c-star style="margin-top: 2px;" score="{{wenkuInfo.score}}"/> &nbsp;评分:{{wenkuInfo.score}}/5<template s-if="wenkuInfo.page">&nbsp;{{wenkuInfo.page}}页</template> </div> <p s-if="!leftImg && tplData.comm_subtitle_structure" class="f13 c-color-gray2" style="margin-bottom: 2px;margin-top: -2px;"> <i s-if="tplData.comm_original" class="c-text c-text-info"> <b>[</b><span>原创</span><b>]</b> </i> {{tplData.comm_subtitle_structure}} </p> <p class="f13" s-if="tplData.classicInfo\n                && tplData.classicInfo.docType >= 0\n                && !tplData.comm_hideDocType\n                && tplData.classicInfo.docTypeDetail\n                && tplData.classicInfo.snapshootKey\n                && !tplData.subtitleWithIcon"> <span>文件格式：</span>{{tplData.classicInfo.docTypeDetail}}&nbsp;-&nbsp; <a href="{{\'http://cache.baidu.com/c?\' + tplData.classicInfo.snapshootKey + \'&user=baidu\'}}" target="_blank">HTML版</a> </p> <div class="f13 c-color-gray2" s-if="tplData.subtitleWithIcon" style="margin-bottom: 2px;margin-top: -2px;"> <c-label s-if="labelData.type && labelData.text" class="c-gap-right-small" type="{{labelData.type}}" text="{{labelData.text}}"/> <span>{{tplData.subtitleWithIcon.text}}</span> </div> </div> ', "assign");
  }, function (t, e, a) {
    var n = cc11001100_hook("n", a(58), "var-init");
    "string" == typeof n && (n = cc11001100_hook("n", [[t.i, n, ""]], "assign")), n.locals && (t.exports = cc11001100_hook("t.exports", n.locals, "assign"));
    (0, a(4)["default"])("7c207cbe", n, !1, {
      runAsProduction: cc11001100_hook("runAsProduction", !0, "object-key-init")
    });
  }, function (t, e) {
    t.exports = cc11001100_hook("t.exports", ' <c-title url="{{titleUrl}}" text="{{title}}" labelProps="{{titleLabelProps}}" frontIcon="{{frontIcon}}" class="t" preText="{{preText}}" logInfo="{{dataClick}}" sourceLinkTitle="true"/> ', "assign");
  },,,,,,,,,,,,, function (t, e, a) {
    "use strict";

    a.r(e);
    var n = cc11001100_hook("n", a(0), "var-init"),
      s = cc11001100_hook("s", a.n(n), "var-init"),
      i = cc11001100_hook("i", a(27), "var-init"),
      r = cc11001100_hook("r", a.n(i), "var-init"),
      o = cc11001100_hook("o", a(28), "var-init"),
      l = cc11001100_hook("l", a.n(o), "var-init"),
      c = cc11001100_hook("c", a(13), "var-init"),
      u = cc11001100_hook("u", a.n(c), "var-init");
    for (var p in c) "default" !== p && function (t) {
      a.d(e, t, function () {
        return c[t];
      });
    }(p);
    var f = cc11001100_hook("f", [r.a], "var-init");
    e["default"] = cc11001100_hook("e[\"default\"]", s()(u.a, l.a, f), "assign");
  }, function (t, e, a) {
    (e = cc11001100_hook("e", a(2)(!1), "assign")).push([t.i, ".sitelink_summary_3VdXX {\n  float: left;\n  width: 272px;\n  padding-right: 0;\n}\n.sitelink_summary_last_T63lC {\n  padding-right: 0;\n}\n", ""]), e.locals = cc11001100_hook("e.locals", {
      sitelink_summary: cc11001100_hook("sitelink_summary", "sitelink_summary_3VdXX", "object-key-init"),
      sitelinkSummary: cc11001100_hook("sitelinkSummary", "sitelink_summary_3VdXX", "object-key-init"),
      sitelink_summary_last: cc11001100_hook("sitelink_summary_last", "sitelink_summary_last_T63lC", "object-key-init"),
      sitelinkSummaryLast: cc11001100_hook("sitelinkSummaryLast", "sitelink_summary_last_T63lC", "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e, a) {
    "use strict";

    a.r(e);
    var n = cc11001100_hook("n", a(0), "var-init"),
      s = cc11001100_hook("s", a.n(n), "var-init"),
      i = cc11001100_hook("i", a(29), "var-init"),
      r = cc11001100_hook("r", a.n(i), "var-init"),
      o = cc11001100_hook("o", a(30), "var-init"),
      l = cc11001100_hook("l", a.n(o), "var-init"),
      c = cc11001100_hook("c", a(14), "var-init"),
      u = cc11001100_hook("u", a.n(c), "var-init");
    for (var p in c) "default" !== p && function (t) {
      a.d(e, t, function () {
        return c[t];
      });
    }(p);
    var f = cc11001100_hook("f", [r.a], "var-init");
    e["default"] = cc11001100_hook("e[\"default\"]", s()(u.a, l.a, f), "assign");
  }, function (t, e, a) {
    (e = cc11001100_hook("e", a(2)(!1), "assign")).push([t.i, ".tts-site_2uSdA {\n  float: right !important;\n  margin-top: -20px;\n}\n", ""]), e.locals = cc11001100_hook("e.locals", {
      "tts-site": cc11001100_hook("tts-site", "tts-site_2uSdA", "object-key-init"),
      ttsSite: cc11001100_hook("ttsSite", "tts-site_2uSdA", "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e, a) {
    "use strict";

    a.r(e);
    var n = cc11001100_hook("n", a(0), "var-init"),
      s = cc11001100_hook("s", a.n(n), "var-init"),
      i = cc11001100_hook("i", a(31), "var-init"),
      r = cc11001100_hook("r", a.n(i), "var-init"),
      o = cc11001100_hook("o", a(32), "var-init"),
      l = cc11001100_hook("l", a.n(o), "var-init"),
      c = cc11001100_hook("c", a(15), "var-init"),
      u = cc11001100_hook("u", a.n(c), "var-init");
    for (var p in c) "default" !== p && function (t) {
      a.d(e, t, function () {
        return c[t];
      });
    }(p);
    var f = cc11001100_hook("f", [r.a], "var-init");
    e["default"] = cc11001100_hook("e[\"default\"]", s()(u.a, l.a, f), "assign");
  }, function (t, e, a) {
    (e = cc11001100_hook("e", a(2)(!1), "assign")).push([t.i, ".label-right_1tffw {\n  margin-right: 3px;\n  position: relative;\n  bottom: 2px;\n}\n.source_s_3aixw {\n  margin-top: 4px;\n}\n.tts-source_2PMLh {\n  position: relative;\n}\n.tts-site_2MWX0 {\n  float: right !important;\n  margin-top: -20px;\n}\n.unsafe_vMrNJ {\n  margin-top: -2px;\n  margin-bottom: 2px;\n}\n.content-right_8Zs40 {\n  word-break: break-all;\n}\n.new-safe-icon_3HzD2 .c-trust-as.baozhang-new-v2 i {\n  background-image: url('https://psstatic.cdn.bcebos.com/basics/www_normal/new_safeicon_1668523461000.png');\n  width: 0.15rem;\n  height: 0.15rem;\n  margin-left: 0.04rem;\n}\n", ""]), e.locals = cc11001100_hook("e.locals", {
      "label-right": cc11001100_hook("label-right", "label-right_1tffw", "object-key-init"),
      labelRight: cc11001100_hook("labelRight", "label-right_1tffw", "object-key-init"),
      source_s: cc11001100_hook("source_s", "source_s_3aixw", "object-key-init"),
      sourceS: cc11001100_hook("sourceS", "source_s_3aixw", "object-key-init"),
      "tts-source": cc11001100_hook("tts-source", "tts-source_2PMLh", "object-key-init"),
      ttsSource: cc11001100_hook("ttsSource", "tts-source_2PMLh", "object-key-init"),
      "tts-site": cc11001100_hook("tts-site", "tts-site_2MWX0", "object-key-init"),
      ttsSite: cc11001100_hook("ttsSite", "tts-site_2MWX0", "object-key-init"),
      unsafe: cc11001100_hook("unsafe", "unsafe_vMrNJ", "object-key-init"),
      "content-right": cc11001100_hook("content-right", "content-right_8Zs40", "object-key-init"),
      contentRight: cc11001100_hook("contentRight", "content-right_8Zs40", "object-key-init"),
      "new-safe-icon": cc11001100_hook("new-safe-icon", "new-safe-icon_3HzD2", "object-key-init"),
      newSafeIcon: cc11001100_hook("newSafeIcon", "new-safe-icon_3HzD2", "object-key-init")
    }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e, a) {
    "use strict";

    a.r(e);
    var n = cc11001100_hook("n", a(0), "var-init"),
      s = cc11001100_hook("s", a.n(n), "var-init"),
      i = cc11001100_hook("i", a(33), "var-init"),
      r = cc11001100_hook("r", a.n(i), "var-init"),
      o = cc11001100_hook("o", a(34), "var-init"),
      l = cc11001100_hook("l", a.n(o), "var-init"),
      c = cc11001100_hook("c", a(16), "var-init"),
      u = cc11001100_hook("u", a.n(c), "var-init");
    for (var p in c) "default" !== p && function (t) {
      a.d(e, t, function () {
        return c[t];
      });
    }(p);
    var f = cc11001100_hook("f", [r.a], "var-init");
    e["default"] = cc11001100_hook("e[\"default\"]", s()(u.a, l.a, f), "assign");
  }, function (t, e, a) {
    (e = cc11001100_hook("e", a(2)(!1), "assign")).push([t.i, "", ""]), t.exports = cc11001100_hook("t.exports", e, "assign");
  }, function (t, e, a) {
    "use strict";

    a.r(e);
    var n = cc11001100_hook("n", a(0), "var-init"),
      s = cc11001100_hook("s", a.n(n), "var-init"),
      i = cc11001100_hook("i", a(35), "var-init"),
      r = cc11001100_hook("r", a.n(i), "var-init"),
      o = cc11001100_hook("o", a(36), "var-init"),
      l = cc11001100_hook("l", a.n(o), "var-init"),
      c = cc11001100_hook("c", a(17), "var-init"),
      u = cc11001100_hook("u", a.n(c), "var-init");
    for (var p in c) "default" !== p && function (t) {
      a.d(e, t, function () {
        return c[t];
      });
    }(p);
    var f = cc11001100_hook("f", [r.a], "var-init");
    e["default"] = cc11001100_hook("e[\"default\"]", s()(u.a, l.a, f), "assign");
  }, function (t, e, a) {
    (e = cc11001100_hook("e", a(2)(!1), "assign")).push([t.i, "", ""]), t.exports = cc11001100_hook("t.exports", e, "assign");
  }], "assign"), "assign"), d.c = cc11001100_hook("d.c", h, "assign"), d.d = cc11001100_hook("d.d", function (t, e, a) {
    d.o(t, e) || Object.defineProperty(t, e, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: cc11001100_hook("get", a, "object-key-init")
    });
  }, "assign"), d.r = cc11001100_hook("d.r", function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: cc11001100_hook("value", "Module", "object-key-init")
    }), Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }, "assign"), d.t = cc11001100_hook("d.t", function (e, t) {
    if (1 & t && (e = cc11001100_hook("e", d(e), "assign")), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var a = cc11001100_hook("a", Object.create(null), "var-init");
    if (d.r(a), Object.defineProperty(a, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      value: cc11001100_hook("value", e, "object-key-init")
    }), 2 & t && "string" != typeof e) for (var n in e) d.d(a, n, function (t) {
      return e[t];
    }.bind(null, n));
    return a;
  }, "assign"), d.n = cc11001100_hook("d.n", function (t) {
    var e = cc11001100_hook("e", t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    }, "var-init");
    return d.d(e, "a", e), e;
  }, "assign"), d.o = cc11001100_hook("d.o", function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, "assign"), d.p = cc11001100_hook("d.p", "https://pss.bdstatic.com/r/www/cache", "assign"), d(d.s = cc11001100_hook("d.s", 49, "assign"));
  function d(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (h[t]) return h[t].exports;
    var e = cc11001100_hook("e", h[t] = cc11001100_hook("h[t]", {
      i: cc11001100_hook("i", t, "object-key-init"),
      l: cc11001100_hook("l", !1, "object-key-init"),
      exports: {}
    }, "assign"), "var-init");
    return _[t].call(e.exports, e, e.exports, d), e.l = cc11001100_hook("e.l", !0, "assign"), e.exports;
  }
  var _, h;
});