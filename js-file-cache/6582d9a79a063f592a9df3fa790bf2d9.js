define("molecules/app/rs/result_cb17422", ["san", "tslib", "@searchfe/inject-js", "@baidu/www-api"], function (e, r, o, i) {
  return c = cc11001100_hook("c", {
    0: function (t, n, e) {
      var e = cc11001100_hook("e", [n, e(1)], "var-init"),
        e = cc11001100_hook("e", function (t, c) {
          "use strict";

          function l() {
            return (l = cc11001100_hook("l", Object.assign || function (t) {
              for (var n = cc11001100_hook("n", 1, "var-init"); n < arguments.length; n++) {
                var e,
                  r = cc11001100_hook("r", arguments[n], "var-init");
                for (e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = cc11001100_hook("t[e]", r[e], "assign"));
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
          function p(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            var e = cc11001100_hook("e", "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"], "var-init");
            if (!e) {
              if (Array.isArray(t) || (e = cc11001100_hook("e", function (t, n) {
                if (t) {
                  if ("string" == typeof t) return u(t, n);
                  var e = cc11001100_hook("e", Object.prototype.toString.call(t).slice(8, -1), "var-init");
                  return "Map" === (e = cc11001100_hook("e", "Object" === e && t.constructor ? t.constructor.name : e, "assign")) || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? u(t, n) : void 0;
                }
              }(t), "assign")) || n && t && "number" == typeof t.length) {
                e && (t = cc11001100_hook("t", e, "assign"));
                var r,
                  o = cc11001100_hook("o", 0, "var-init");
                return {
                  s: cc11001100_hook("s", r = cc11001100_hook("r", function r() {}, "assign"), "object-key-init"),
                  n: function () {
                    return o >= t.length ? {
                      done: cc11001100_hook("done", !0, "object-key-init")
                    } : {
                      done: cc11001100_hook("done", !1, "object-key-init"),
                      value: cc11001100_hook("value", t[o++], "object-key-init")
                    };
                  },
                  e: function (t) {
                    throw t;
                  },
                  f: cc11001100_hook("f", r, "object-key-init")
                };
              }
              throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var i,
              a = cc11001100_hook("a", !0, "var-init"),
              c = cc11001100_hook("c", !1, "var-init");
            return {
              s: function () {
                e = cc11001100_hook("e", e.call(t), "assign");
              },
              n: function () {
                var t = cc11001100_hook("t", e.next(), "var-init");
                return a = cc11001100_hook("a", t.done, "assign"), t;
              },
              e: function (t) {
                c = cc11001100_hook("c", !0, "assign"), i = cc11001100_hook("i", t, "assign");
              },
              f: function () {
                try {
                  a || null == e["return"] || e["return"]();
                } finally {
                  if (c) throw i;
                }
              }
            };
          }
          function u(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            (null == n || n > t.length) && (n = cc11001100_hook("n", t.length, "assign"));
            for (var e = cc11001100_hook("e", 0, "var-init"), r = cc11001100_hook("r", new Array(n), "var-init"); e < n; e++) r[e] = cc11001100_hook("r[e]", t[e], "assign");
            return r;
          }
          function d(t, n) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("n", n, "function-parameter");
            var e,
              r = cc11001100_hook("r", {}, "var-init"),
              o = cc11001100_hook("o", p(n), "var-init");
            try {
              for (o.s(); !(e = cc11001100_hook("e", o.n(), "assign")).done;) {
                var i = cc11001100_hook("i", e.value, "var-init");
                l(r, i);
              }
            } catch (c) {
              o.e(c);
            } finally {
              o.f();
            }
            var a = cc11001100_hook("a", t.initData, "var-init");
            t.initData = cc11001100_hook("t.initData", a ? function () {
              return l({}, a.call(this), {
                $style: cc11001100_hook("$style", r, "object-key-init")
              });
            } : function () {
              return r;
            }, "assign");
          }
          Object.defineProperty(t, "__esModule", {
            value: cc11001100_hook("value", !0, "object-key-init")
          }), t["default"] = cc11001100_hook("t[\"default\"]", function (t, n, e) {
            var r,
              o = cc11001100_hook("o", p(function (t) {
                var n = cc11001100_hook("n", [t], "var-init");
                "function" == typeof t && (n.push(t.prototype), t.prototype.constructor && n.push(t.prototype.constructor.prototype));
                return n;
              }(t)), "var-init");
            try {
              for (o.s(); !(r = cc11001100_hook("r", o.n(), "assign")).done;) {
                var i = cc11001100_hook("i", r.value, "var-init");
                n && ("string" == typeof n ? i.template = cc11001100_hook("i.template", n, "assign") : n instanceof Array ? i.aPack = cc11001100_hook("i.aPack", n, "assign") : i.aNode = cc11001100_hook("i.aNode", n, "assign")), e.length && d(i, e);
              }
            } catch (a) {
              o.e(a);
            } finally {
              o.f();
            }
            return "object" === s(t) ? (0, c.defineComponent)(t) : t;
          }, "assign");
        }.apply(n, e), "var-init");
      e === undefined || (t.exports = cc11001100_hook("t.exports", e, "assign"));
    },
    1: function (t, n) {
      t.exports = cc11001100_hook("t.exports", e, "assign");
    },
    18: function (t, n, e) {
      "use strict";

      n.__esModule = cc11001100_hook("n.__esModule", !0, "assign");
      var o,
        p = cc11001100_hook("p", e(2), "var-init"),
        r = cc11001100_hook("r", e(1), "var-init"),
        i = cc11001100_hook("i", e(5), "var-init"),
        e = cc11001100_hook("e", e(6), "var-init"),
        e = cc11001100_hook("e", (o = cc11001100_hook("o", r.Component, "assign"), p.__extends(a, o), a.prototype.initData = cc11001100_hook("a.prototype.initData", function () {
          return {
            newList: cc11001100_hook("newList", [], "object-key-init"),
            labelRs: cc11001100_hook("labelRs", "相关搜索", "object-key-init"),
            picTxtStyle: cc11001100_hook("picTxtStyle", !1, "object-key-init"),
            isSample: cc11001100_hook("isSample", !1, "object-key-init")
          };
        }, "assign"), a.prototype.disableContextMenu = cc11001100_hook("a.prototype.disableContextMenu", function (t) {
          t.preventDefault();
        }, "assign"), a.prototype.logSend = cc11001100_hook("a.prototype.logSend", function (t, n, e) {
          var r = cc11001100_hook("r", n.word, "var-init"),
            o = cc11001100_hook("o", n.image, "var-init");
          this.log.send(e && "pictxt" === e ? {
            rsv_click_type: cc11001100_hook("rsv_click_type", "rs_pictxt_" + r + "_" + (o ? "1" : "0"), "object-key-init")
          } : {
            rsv_click_type: cc11001100_hook("rsv_click_type", "rs_" + r, "object-key-init")
          }), this.invokeApp(t, this.flatList.indexOf(n.url));
        }, "assign"), a.prototype.imgError = cc11001100_hook("a.prototype.imgError", function (t) {
          (t.target || t.srcElement).style.display = cc11001100_hook("(t.target || t.srcElement).style.display", "none", "assign");
        }, "assign"), a.prototype.initInvokeInfo = cc11001100_hook("a.prototype.initInvokeInfo", function () {
          return p.__awaiter(this, void 0, void 0, function () {
            var n, e, r, o, i, a, c, l, s;
            return p.__generator(this, function (t) {
              switch (t.label) {
                case 0:
                  return this.sampleService.hitSample("pc_recommend_invoke") && this.invokeService.isIPad() ? [4, this.invokeService.init()] : [3, 2];
                case 1:
                  for (t.sent(), n = cc11001100_hook("n", this.data.get("newList"), "assign"), e = cc11001100_hook("e", location.origin, "assign"), r = cc11001100_hook("r", [], "assign"), o = cc11001100_hook("o", 0, "assign"), i = cc11001100_hook("i", n, "assign"); o < i.length; o++) for (a = cc11001100_hook("a", i[o], "assign"), c = cc11001100_hook("c", 0, "assign"), l = cc11001100_hook("l", a, "assign"); c < l.length; c++) s = cc11001100_hook("s", l[c], "assign"), this.flatList.push(s.url), r.push({
                    url: cc11001100_hook("url", "" + e + s.url, "object-key-init"),
                    query: cc11001100_hook("query", s.word, "object-key-init")
                  });
                  this.invokeService.getInvokeInfo(this.pos, r), t.label = cc11001100_hook("t.label", 2, "assign");
                case 2:
                  return [2];
              }
            });
          });
        }, "assign"), a.prototype.invokeApp = cc11001100_hook("a.prototype.invokeApp", function (t, n) {
          this.sampleService.hitSample("pc_recommend_invoke") && this.invokeService.isIPad() && this.invokeService.hitMcp(this.pos) && this.invokeService.canInvoke(this.pos) && (t.stopPropagation(), t.preventDefault(), this.invokeService.execInvoke(this.pos, {}, n));
        }, "assign"), p.__decorate([i.injectable, p.__metadata("design:paramtypes", [e.SanOption, e.Log, e.MCPInvokeService, e.Sample])], a)), "var-init");
      function a(t, n, e, r) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        t = cc11001100_hook("t", o.call(this, t) || this, "assign");
        return t.trimwhitespace = cc11001100_hook("t.trimwhitespace", "all", "assign"), t.log = cc11001100_hook("t.log", n, "assign"), t.invokeService = cc11001100_hook("t.invokeService", e, "assign"), t.sampleService = cc11001100_hook("t.sampleService", r, "assign"), t.pos = cc11001100_hook("t.pos", 11, "assign"), t.flatList = cc11001100_hook("t.flatList", [], "assign"), t.invokeService.isIPad() && t.sampleService.hitSample("pc_recommend_invoke") && t.initInvokeInfo(), t;
      }
      n["default"] = cc11001100_hook("n[\"default\"]", e, "assign");
    },
    2: function (t, n) {
      t.exports = cc11001100_hook("t.exports", r, "assign");
    },
    3: function (t, n, e) {
      n = cc11001100_hook("n", function () {
        "use strict";

        t.exports = cc11001100_hook("t.exports", function (e) {
          var l = cc11001100_hook("l", [], "var-init");
          return l.toString = cc11001100_hook("l.toString", function () {
            return this.map(function (t) {
              var n = cc11001100_hook("n", function (t, n) {
                var e = cc11001100_hook("e", t[1] || "", "var-init"),
                  r = cc11001100_hook("r", t[3], "var-init");
                if (!r) return e;
                if (n && "function" == typeof btoa) {
                  t = cc11001100_hook("t", function (t) {
                    t = cc11001100_hook("t", btoa(unescape(encodeURIComponent(JSON.stringify(t)))), "assign"), t = cc11001100_hook("t", "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t), "assign");
                    return "/*# ".concat(t, " */");
                  }(r), "assign"), n = cc11001100_hook("n", r.sources.map(function (t) {
                    return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
                  }), "assign");
                  return [e].concat(n).concat([t]).join("\n");
                }
                return [e].join("\n");
              }(t, e), "var-init");
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }, "assign"), l.i = cc11001100_hook("l.i", function (t, n, e) {
            "string" == typeof t && (t = cc11001100_hook("t", [[null, t, ""]], "assign"));
            var r = cc11001100_hook("r", {}, "var-init");
            if (e) for (var o = cc11001100_hook("o", 0, "var-init"); o < this.length; o++) {
              var i = cc11001100_hook("i", this[o][0], "var-init");
              null != i && (r[i] = cc11001100_hook("r[i]", !0, "assign"));
            }
            for (var a = cc11001100_hook("a", 0, "var-init"); a < t.length; a++) {
              var c = cc11001100_hook("c", [].concat(t[a]), "var-init");
              e && r[c[0]] || (n && (c[2] ? c[2] = cc11001100_hook("c[2]", "".concat(n, " and ").concat(c[2]), "assign") : c[2] = cc11001100_hook("c[2]", n, "assign")), l.push(c));
            }
          }, "assign"), l;
        }, "assign");
      }.apply(n, []), "assign");
      n === undefined || (t.exports = cc11001100_hook("t.exports", n, "assign"));
    },
    4: function (t, n, e) {
      "use strict";

      function l(t, n) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        for (var e = cc11001100_hook("e", [], "var-init"), r = cc11001100_hook("r", {}, "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < n.length; o++) {
          var i = cc11001100_hook("i", n[o], "var-init"),
            a = cc11001100_hook("a", i[0], "var-init"),
            i = cc11001100_hook("i", {
              id: cc11001100_hook("id", t + ":" + o, "object-key-init"),
              css: cc11001100_hook("css", i[1], "object-key-init"),
              media: cc11001100_hook("media", i[2], "object-key-init"),
              sourceMap: cc11001100_hook("sourceMap", i[3], "object-key-init")
            }, "var-init");
          r[a] ? r[a].parts.push(i) : e.push(r[a] = cc11001100_hook("r[a]", {
            id: cc11001100_hook("id", a, "object-key-init"),
            parts: cc11001100_hook("parts", [i], "object-key-init")
          }, "assign"));
        }
        return e;
      }
      e.r(n), e.d(n, "default", function () {
        return o;
      });
      e = cc11001100_hook("e", "undefined" != typeof document, "assign");
      if ("undefined" != typeof DEBUG && DEBUG && !e) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var s = cc11001100_hook("s", {}, "var-init"),
        r = cc11001100_hook("r", e && (document.head || document.getElementsByTagName("head")[0]), "var-init"),
        i = cc11001100_hook("i", null, "var-init"),
        a = cc11001100_hook("a", 0, "var-init"),
        p = cc11001100_hook("p", !1, "var-init"),
        c = function () {},
        u = cc11001100_hook("u", null, "var-init"),
        d = cc11001100_hook("d", "data-vue-ssr-id", "var-init"),
        f = cc11001100_hook("f", "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()), "var-init");
      function o(a, t, n, e) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        p = cc11001100_hook("p", !!e.runAsProduction || n, "assign"), u = cc11001100_hook("u", e || {}, "assign");
        var c = cc11001100_hook("c", l(a, t), "var-init");
        return h(c), function (t) {
          for (var n = cc11001100_hook("n", [], "var-init"), e = cc11001100_hook("e", 0, "var-init"); e < c.length; e++) {
            var r = cc11001100_hook("r", c[e], "var-init");
            (o = cc11001100_hook("o", s[r.id], "assign")).refs--, n.push(o);
          }
          t ? h(c = cc11001100_hook("c", l(a, t), "assign")) : c = cc11001100_hook("c", [], "assign");
          for (var o, e = cc11001100_hook("e", 0, "var-init"); e < n.length; e++) if (0 === (o = cc11001100_hook("o", n[e], "assign")).refs) {
            for (var i = cc11001100_hook("i", 0, "var-init"); i < o.parts.length; i++) o.parts[i]();
            delete s[o.id];
          }
        };
      }
      function h(t) {
        cc11001100_hook("t", t, "function-parameter");
        for (var n = cc11001100_hook("n", 0, "var-init"); n < t.length; n++) {
          var e = cc11001100_hook("e", t[n], "var-init"),
            r = cc11001100_hook("r", s[e.id], "var-init");
          if (r) {
            r.refs++;
            for (var o = cc11001100_hook("o", 0, "var-init"); o < r.parts.length; o++) r.parts[o](e.parts[o]);
            for (; o < e.parts.length; o++) r.parts.push(v(e.parts[o]));
            r.parts.length > e.parts.length && (r.parts.length = cc11001100_hook("r.parts.length", e.parts.length, "assign"));
          } else {
            for (var i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < e.parts.length; o++) i.push(v(e.parts[o]));
            s[e.id] = cc11001100_hook("s[e.id]", {
              id: cc11001100_hook("id", e.id, "object-key-init"),
              refs: cc11001100_hook("refs", 1, "object-key-init"),
              parts: cc11001100_hook("parts", i, "object-key-init")
            }, "assign");
          }
        }
      }
      function m() {
        var t,
          n = cc11001100_hook("n", document.createElement("style"), "var-init"),
          e = cc11001100_hook("e", u.attributes || {}, "var-init");
        for (t in n.type = cc11001100_hook("n.type", "text/css", "assign"), e) e.hasOwnProperty(t) && n.setAttribute(t, e[t]);
        return r.appendChild(n), n;
      }
      function v(n) {
        cc11001100_hook("n", n, "function-parameter");
        var t,
          e,
          r,
          o = cc11001100_hook("o", document.querySelector("style[" + d + '~="' + n.id + '"]'), "var-init");
        if (o) {
          if (p) return c;
          o.parentNode.removeChild(o);
        }
        return r = cc11001100_hook("r", f ? (t = cc11001100_hook("t", a++, "assign"), o = cc11001100_hook("o", i = cc11001100_hook("i", i || m(), "assign"), "assign"), e = cc11001100_hook("e", g.bind(null, o, t, !1), "assign"), g.bind(null, o, t, !0)) : (o = cc11001100_hook("o", m(), "assign"), e = cc11001100_hook("e", function (t, n) {
          var e = cc11001100_hook("e", n.css, "var-init"),
            r = cc11001100_hook("r", n.media, "var-init"),
            o = cc11001100_hook("o", n.sourceMap, "var-init");
          r && t.setAttribute("media", r);
          u.ssrId && t.setAttribute(d, n.id);
          o && (e += cc11001100_hook("e", "\n/*# sourceURL=" + o.sources[0] + " */", "assign"), e += cc11001100_hook("e", "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */", "assign"));
          if (t.styleSheet) t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", e, "assign");else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        }.bind(null, o), "assign"), function () {
          o.parentNode.removeChild(o);
        }), "assign"), e(n), function (t) {
          t ? t.css === n.css && t.media === n.media && t.sourceMap === n.sourceMap || e(n = cc11001100_hook("n", t, "assign")) : r();
        };
      }
      var x,
        b = cc11001100_hook("b", (x = cc11001100_hook("x", [], "assign"), function (t, n) {
          return x[t] = cc11001100_hook("x[t]", n, "assign"), x.filter(Boolean).join("\n");
        }), "var-init");
      function g(t, n, e, r) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        e = cc11001100_hook("e", e ? "" : r.css, "assign");
        t.styleSheet ? t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", b(n, e), "assign") : (r = cc11001100_hook("r", document.createTextNode(e), "assign"), (e = cc11001100_hook("e", t.childNodes, "assign"))[n] && t.removeChild(e[n]), e.length ? t.insertBefore(r, e[n]) : t.appendChild(r));
      }
    },
    48: function (t, n) {
      t.exports = cc11001100_hook("t.exports", ' <div class="{{$style[\'rs-normal-width\']}}" id="rs_new"> <div class="c-color-t c-gap-bottom {{$style[\'rs-label\']}}"> {{ labelRs }} </div> <table s-if="!picTxtStyle" cellpadding="0" cellspacing="0" class="{{$style[\'rs-table\']}}"> <tr s-for="item in newList"> <template s-for="child in item"> <td class="{{$style[\'rs-col\']}}"> <a title="{{child.word}}" class="{{$style[\'rs-link\']}} c-line-clamp1 c-color-link" href="{{ child.url }}" on-click="logSend($event, child)"> {{child.word}} </a> </td> </template> </tr> </table> <table s-else cellpadding="0" cellspacing="0" class="{{$style[\'rs-table\']}} {{$style[\'pictxt-table\']}}"> <tr s-for="item in newList"> <template s-for="child in item"> <td class="{{$style[\'rs-col\']}} {{$style[\'pictxt-col\']}}"> <a title="{{child.word}}" class="{{$style[\'rs-link\']}} {{$style[\'pictxt-link\']}} c-line-clamp1 c-color-link" href="{{child.url}}" on-click="logSend($event, child, \'pictxt\')"> <img s-if="child.image" class="{{$style[\'pictxt-img\']}}" src="{{child.image}}" on-contextmenu="disableContextMenu($event)" on-error="imgError($event)"> <i class="c-icon {{$style[\'pictxt-icon\']}}"> &#xe608; </i> {{child.word}} </a> </td> </template> </tr> </table> </div> ', "assign");
    },
    5: function (t, n) {
      t.exports = cc11001100_hook("t.exports", o, "assign");
    },
    6: function (t, n) {
      t.exports = cc11001100_hook("t.exports", i, "assign");
    },
    92: function (t, n, e) {
      "use strict";

      e.r(n);
      var r,
        o = cc11001100_hook("o", e(0), "var-init"),
        i = cc11001100_hook("i", e.n(o), "var-init"),
        o = cc11001100_hook("o", (e(93), e(48)), "var-init"),
        a = cc11001100_hook("a", e.n(o), "var-init"),
        c = cc11001100_hook("c", e(18), "var-init"),
        o = cc11001100_hook("o", e.n(c), "var-init");
      for (r in c) ["default"].indexOf(r) < 0 && function (t) {
        e.d(n, t, function () {
          return c[t];
        });
      }(r);
      n["default"] = cc11001100_hook("n[\"default\"]", i()(o.a, a.a, []), "assign");
    },
    93: function (t, n, e) {
      var r = cc11001100_hook("r", e(94), "var-init");
      (r = cc11001100_hook("r", "string" == typeof r ? [[t.i, r, ""]] : r, "assign")).locals && (t.exports = cc11001100_hook("t.exports", r.locals, "assign"));
      (0, e(4)["default"])("a459854e", r, !0, {
        attributes: {
          "data-for": cc11001100_hook("data-for", "result", "object-key-init")
        },
        runAsProduction: cc11001100_hook("runAsProduction", !0, "object-key-init")
      });
    },
    94: function (t, n, e) {
      (n = cc11001100_hook("n", e(3)(!1), "assign")).push([t.i, "/* 适老化配色 */\n.darkmode.dark .rs-link_2DE3Q {\n  background: #292930;\n}\n.darkmode.dark .rs-link_2DE3Q:hover {\n  background: #3B3B45;\n  color: #FFF762;\n}\n.darkmode.dark .pictxt-link_30HNK:hover {\n  color: #FFF762;\n  background: #3B3B45;\n}\n.darkmode.dark .pictxt-link_30HNK:hover .pictxt-icon_2RNRK {\n  color: #FFF762;\n}\n.darkmode.dark .pictxt-link_30HNK:hover .pictxt-img_1JaOC {\n  border-color: #3B3B45;\n  background: #3B3B45;\n}\n.darkmode.dark .pictxt-img_1JaOC {\n  border-color: #292930;\n  background: #292930;\n}\n.darkmode.blue .rs-link_2DE3Q {\n  background: #1C295C;\n}\n.darkmode.blue .rs-link_2DE3Q:hover {\n  background: #273A80;\n  color: #FFF762;\n}\n.darkmode.blue .pictxt-link_30HNK:hover {\n  color: #FFF762;\n  background: #273A80;\n}\n.darkmode.blue .pictxt-link_30HNK:hover .pictxt-icon_2RNRK {\n  color: #FFF762;\n}\n.darkmode.blue .pictxt-link_30HNK:hover .pictxt-img_1JaOC {\n  border-color: #273A80;\n  background: #273A80;\n}\n.darkmode.blue .pictxt-img_1JaOC {\n  border-color: #1C295C;\n  background: #1C295C;\n}\n/* 适老化配色 */\n.rs-normal-width_2T91A {\n  margin: 6px 0 30px 0;\n  width: 704px;\n}\n.rs-table_3RiQc {\n  margin-top: -3px;\n}\n.rs-label_ihUhK {\n  font-size: 18px;\n  line-height: 18px;\n  margin-bottom: -4px;\n}\n.rs-col_8Qlx- {\n  padding: 6px 8px;\n}\n.rs-col_8Qlx-:last-child {\n  padding-right: 0;\n}\n.rs-col_8Qlx-:first-child {\n  padding-left: 0;\n}\n.rs-link_2DE3Q {\n  display: inline-block;\n  padding: 10px 12px;\n  margin-bottom: -10px;\n  background: #F5F5F6;\n  font-size: 14px;\n  height: 14px;\n  line-height: 14px;\n  border-radius: 6px;\n  text-align: left;\n  width: 224px;\n}\n.rs-link_2DE3Q:hover {\n  text-decoration: none;\n  color: #315EFB;\n  background: #F0F3FD;\n}\n.rs-link_2DE3Q:visited {\n  color: #771DAA;\n}\n.pictxt-table_2Jwps {\n  margin-top: -4px;\n}\n.pictxt-col_2EoTB {\n  padding: 7px 8px;\n}\n.pictxt-img_1JaOC {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 32px;\n  height: 32px;\n  border: 1px solid #F5F5F6;\n  border-radius: 8px;\n  background: #F5F5F6;\n  z-index: 10;\n  display: inline-block;\n}\n.pictxt-link_30HNK {\n  position: relative;\n  width: 210px;\n  border-radius: 8px;\n  padding: 10px 20px 10px 42px;\n}\n.pictxt-link_30HNK .pictxt-icon_2RNRK {\n  position: absolute;\n  top: 10px;\n  left: 12px;\n  font-size: 14px;\n  color: #9195A3;\n  z-index: 1;\n  transition: transform 0.3s ease;\n}\n.pictxt-link_30HNK:hover {\n  text-decoration: none;\n  color: #315EFB;\n  background: #F0F3FD;\n}\n.pictxt-link_30HNK:hover .pictxt-icon_2RNRK {\n  color: #315EFB;\n  -ms-transform: scale(1.14285714);\n  -webkit-transform: scale(1.14285714);\n  transform: scale(1.14285714);\n  -ms-transform-origin: center;\n  -webkit-transform-origin: center;\n  transform-origin: center;\n}\n.pictxt-link_30HNK:hover .pictxt-img_1JaOC {\n  border-color: #F0F3FD;\n  background: #F0F3FD;\n}\n", ""]), n.locals = cc11001100_hook("n.locals", {
        "rs-link": cc11001100_hook("rs-link", "rs-link_2DE3Q", "object-key-init"),
        rsLink: cc11001100_hook("rsLink", "rs-link_2DE3Q", "object-key-init"),
        "pictxt-link": cc11001100_hook("pictxt-link", "pictxt-link_30HNK", "object-key-init"),
        pictxtLink: cc11001100_hook("pictxtLink", "pictxt-link_30HNK", "object-key-init"),
        "pictxt-icon": cc11001100_hook("pictxt-icon", "pictxt-icon_2RNRK", "object-key-init"),
        pictxtIcon: cc11001100_hook("pictxtIcon", "pictxt-icon_2RNRK", "object-key-init"),
        "pictxt-img": cc11001100_hook("pictxt-img", "pictxt-img_1JaOC", "object-key-init"),
        pictxtImg: cc11001100_hook("pictxtImg", "pictxt-img_1JaOC", "object-key-init"),
        "rs-normal-width": cc11001100_hook("rs-normal-width", "rs-normal-width_2T91A", "object-key-init"),
        rsNormalWidth: cc11001100_hook("rsNormalWidth", "rs-normal-width_2T91A", "object-key-init"),
        "rs-table": cc11001100_hook("rs-table", "rs-table_3RiQc", "object-key-init"),
        rsTable: cc11001100_hook("rsTable", "rs-table_3RiQc", "object-key-init"),
        "rs-label": cc11001100_hook("rs-label", "rs-label_ihUhK", "object-key-init"),
        rsLabel: cc11001100_hook("rsLabel", "rs-label_ihUhK", "object-key-init"),
        "rs-col": cc11001100_hook("rs-col", "rs-col_8Qlx-", "object-key-init"),
        rsCol: cc11001100_hook("rsCol", "rs-col_8Qlx-", "object-key-init"),
        "pictxt-table": cc11001100_hook("pictxt-table", "pictxt-table_2Jwps", "object-key-init"),
        pictxtTable: cc11001100_hook("pictxtTable", "pictxt-table_2Jwps", "object-key-init"),
        "pictxt-col": cc11001100_hook("pictxt-col", "pictxt-col_2EoTB", "object-key-init"),
        pictxtCol: cc11001100_hook("pictxtCol", "pictxt-col_2EoTB", "object-key-init")
      }, "assign"), t.exports = cc11001100_hook("t.exports", n, "assign");
    }
  }, "assign"), l = cc11001100_hook("l", {}, "assign"), a.m = cc11001100_hook("a.m", c, "assign"), a.c = cc11001100_hook("a.c", l, "assign"), a.d = cc11001100_hook("a.d", function (t, n, e) {
    a.o(t, n) || Object.defineProperty(t, n, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: cc11001100_hook("get", e, "object-key-init")
    });
  }, "assign"), a.r = cc11001100_hook("a.r", function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: cc11001100_hook("value", "Module", "object-key-init")
    }), Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }, "assign"), a.t = cc11001100_hook("a.t", function (n, t) {
    if (1 & t && (n = cc11001100_hook("n", a(n), "assign")), 8 & t) return n;
    if (4 & t && "object" == typeof n && n && n.__esModule) return n;
    var e = cc11001100_hook("e", Object.create(null), "var-init");
    if (a.r(e), Object.defineProperty(e, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      value: cc11001100_hook("value", n, "object-key-init")
    }), 2 & t && "string" != typeof n) for (var r in n) a.d(e, r, function (t) {
      return n[t];
    }.bind(null, r));
    return e;
  }, "assign"), a.n = cc11001100_hook("a.n", function (t) {
    var n = cc11001100_hook("n", t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    }, "var-init");
    return a.d(n, "a", n), n;
  }, "assign"), a.o = cc11001100_hook("a.o", function (t, n) {
    return Object.prototype.hasOwnProperty.call(t, n);
  }, "assign"), a.p = cc11001100_hook("a.p", "https://pss.bdstatic.com/r/www/cache", "assign"), a(a.s = cc11001100_hook("a.s", 92, "assign"));
  function a(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (l[t]) return l[t].exports;
    var n = cc11001100_hook("n", l[t] = cc11001100_hook("l[t]", {
      i: cc11001100_hook("i", t, "object-key-init"),
      l: cc11001100_hook("l", !1, "object-key-init"),
      exports: {}
    }, "assign"), "var-init");
    return c[t].call(n.exports, n, n.exports, a), n.l = cc11001100_hook("n.l", !0, "assign"), n.exports;
  }
  var c, l;
});