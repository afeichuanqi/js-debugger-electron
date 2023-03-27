define("molecules/app/hint-float-ball-right/result_bb42abb", ["san", "tslib", "@searchfe/inject-js", "@baidu/www-api"], function (n, o, r, i) {
  return s = cc11001100_hook("s", {
    0: function (t, e, n) {
      var n = cc11001100_hook("n", [e, n(1)], "var-init"),
        n = cc11001100_hook("n", function (t, s) {
          "use strict";

          function c() {
            return (c = cc11001100_hook("c", Object.assign || function (t) {
              for (var e = cc11001100_hook("e", 1, "var-init"); e < arguments.length; e++) {
                var n,
                  o = cc11001100_hook("o", arguments[e], "var-init");
                for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = cc11001100_hook("t[n]", o[n], "assign"));
              }
              return t;
            }, "assign")).apply(this, arguments);
          }
          function l(t) {
            cc11001100_hook("t", t, "function-parameter");
            return (l = cc11001100_hook("l", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function l(t) {
              return typeof t;
            } : function l(t) {
              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            }, "assign"))(t);
          }
          function d(t, e) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("e", e, "function-parameter");
            var n = cc11001100_hook("n", "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"], "var-init");
            if (!n) {
              if (Array.isArray(t) || (n = cc11001100_hook("n", function (t, e) {
                if (t) {
                  if ("string" == typeof t) return u(t, e);
                  var n = cc11001100_hook("n", Object.prototype.toString.call(t).slice(8, -1), "var-init");
                  return "Map" === (n = cc11001100_hook("n", "Object" === n && t.constructor ? t.constructor.name : n, "assign")) || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0;
                }
              }(t), "assign")) || e && t && "number" == typeof t.length) {
                n && (t = cc11001100_hook("t", n, "assign"));
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
            var i,
              a = cc11001100_hook("a", !0, "var-init"),
              s = cc11001100_hook("s", !1, "var-init");
            return {
              s: function () {
                n = cc11001100_hook("n", n.call(t), "assign");
              },
              n: function () {
                var t = cc11001100_hook("t", n.next(), "var-init");
                return a = cc11001100_hook("a", t.done, "assign"), t;
              },
              e: function (t) {
                s = cc11001100_hook("s", !0, "assign"), i = cc11001100_hook("i", t, "assign");
              },
              f: function () {
                try {
                  a || null == n["return"] || n["return"]();
                } finally {
                  if (s) throw i;
                }
              }
            };
          }
          function u(t, e) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("e", e, "function-parameter");
            (null == e || e > t.length) && (e = cc11001100_hook("e", t.length, "assign"));
            for (var n = cc11001100_hook("n", 0, "var-init"), o = cc11001100_hook("o", new Array(e), "var-init"); n < e; n++) o[n] = cc11001100_hook("o[n]", t[n], "assign");
            return o;
          }
          function f(t, e) {
            cc11001100_hook("t", t, "function-parameter");
            cc11001100_hook("e", e, "function-parameter");
            var n,
              o = cc11001100_hook("o", {}, "var-init"),
              r = cc11001100_hook("r", d(e), "var-init");
            try {
              for (r.s(); !(n = cc11001100_hook("n", r.n(), "assign")).done;) {
                var i = cc11001100_hook("i", n.value, "var-init");
                c(o, i);
              }
            } catch (s) {
              r.e(s);
            } finally {
              r.f();
            }
            var a = cc11001100_hook("a", t.initData, "var-init");
            t.initData = cc11001100_hook("t.initData", a ? function () {
              return c({}, a.call(this), {
                $style: cc11001100_hook("$style", o, "object-key-init")
              });
            } : function () {
              return o;
            }, "assign");
          }
          Object.defineProperty(t, "__esModule", {
            value: cc11001100_hook("value", !0, "object-key-init")
          }), t["default"] = cc11001100_hook("t[\"default\"]", function (t, e, n) {
            var o,
              r = cc11001100_hook("r", d(function (t) {
                var e = cc11001100_hook("e", [t], "var-init");
                "function" == typeof t && (e.push(t.prototype), t.prototype.constructor && e.push(t.prototype.constructor.prototype));
                return e;
              }(t)), "var-init");
            try {
              for (r.s(); !(o = cc11001100_hook("o", r.n(), "assign")).done;) {
                var i = cc11001100_hook("i", o.value, "var-init");
                e && ("string" == typeof e ? i.template = cc11001100_hook("i.template", e, "assign") : e instanceof Array ? i.aPack = cc11001100_hook("i.aPack", e, "assign") : i.aNode = cc11001100_hook("i.aNode", e, "assign")), n.length && f(i, n);
              }
            } catch (a) {
              r.e(a);
            } finally {
              r.f();
            }
            return "object" === l(t) ? (0, s.defineComponent)(t) : t;
          }, "assign");
        }.apply(e, n), "var-init");
      n === undefined || (t.exports = cc11001100_hook("t.exports", n, "assign"));
    },
    1: function (t, e) {
      t.exports = cc11001100_hook("t.exports", n, "assign");
    },
    11: function (t, e, n) {
      "use strict";

      e.__esModule = cc11001100_hook("e.__esModule", !0, "assign");
      var o,
        r = cc11001100_hook("r", n(2), "var-init"),
        i = cc11001100_hook("i", n(1), "var-init"),
        a = cc11001100_hook("a", n(5), "var-init"),
        s = cc11001100_hook("s", n(6), "var-init"),
        c = cc11001100_hook("c", n(75), "var-init"),
        r = cc11001100_hook("r", (o = cc11001100_hook("o", i.Component, "assign"), r.__extends(l, o), l.initData = cc11001100_hook("l.initData", function () {
          return {
            mcpData: cc11001100_hook("mcpData", "", "object-key-init"),
            posData: cc11001100_hook("posData", "", "object-key-init"),
            qrcodeShow: cc11001100_hook("qrcodeShow", !1, "object-key-init"),
            style: cc11001100_hook("style", "row", "object-key-init"),
            isShow: cc11001100_hook("isShow", !1, "object-key-init"),
            source: cc11001100_hook("source", "", "object-key-init"),
            qrShowSec: cc11001100_hook("qrShowSec", "5", "object-key-init"),
            expires: cc11001100_hook("expires", 864e5, "object-key-init")
          };
        }, "assign"), l.prototype.getData = cc11001100_hook("l.prototype.getData", function () {
          var e = cc11001100_hook("e", this, "var-init");
          c.Ajax.post("https://ug.baidu.com/mcp/pc/pcsearch", JSON.stringify({
            invoke_info: {
              pos_1: cc11001100_hook("pos_1", [{}], "object-key-init"),
              pos_2: cc11001100_hook("pos_2", [{}], "object-key-init"),
              pos_3: cc11001100_hook("pos_3", [{}], "object-key-init")
            }
          }), {
            success: function (t) {
              0 === t.errno && "ok" === t.errmsg && t.data && t.data.action_rule && (e.data.set("mcpData", t.data.action_rule), t = cc11001100_hook("t", e.data.get().posNum, "assign"), e.switchPosData(t));
            }
          });
        }, "assign"), l.prototype.switchPosData = cc11001100_hook("l.prototype.switchPosData", function (t) {
          var e = cc11001100_hook("e", this.data.get("mcpData"), "var-init");
          if (e && t && 0 < e[t].length) {
            this.data.set("posData", e[t][0]);
            var n = cc11001100_hook("n", this.data.get(), "var-init"),
              o = cc11001100_hook("o", n.posData, "var-init"),
              r = cc11001100_hook("r", n.posNum, "var-init");
            if (0 === o.action_flag) return !1;
            n = cc11001100_hook("n", o.expires, "assign");
            if (n && this.data.set("expires", 1e3 * n), !this.frontBack(r)) return !1;
            this.data.set("isShow", !0), this.data.set("qrcodeShow", !0), e[t][0].style && this.data.set("style", e[t][0].style), this.data.set("qrShowSec", e[t][0].qr_show_sec);
            t = cc11001100_hook("t", this.data.get(), "assign"), e = cc11001100_hook("e", t.qrShowSec, "assign"), t = cc11001100_hook("t", t.mcpFrom, "assign");
            return this.log.send({
              fm: cc11001100_hook("fm", this.fmValue, "object-key-init"),
              rsv_fltrb_src: cc11001100_hook("rsv_fltrb_src", t, "object-key-init"),
              rsv_fltrb_action: cc11001100_hook("rsv_fltrb_action", "show", "object-key-init")
            }), this.qrcodeOut(e), o;
          }
          return "";
        }, "assign"), l.prototype.btnClick = cc11001100_hook("l.prototype.btnClick", function (t) {
          this.log.send({
            fm: cc11001100_hook("fm", this.fmValue, "object-key-init"),
            rsv_fltrb_src: cc11001100_hook("rsv_fltrb_src", t, "object-key-init"),
            rsv_fltrb_action: cc11001100_hook("rsv_fltrb_action", "close", "object-key-init")
          }), this.data.set("isShow", !1);
        }, "assign"), l.prototype.frontBack = cc11001100_hook("l.prototype.frontBack", function (t) {
          var e = cc11001100_hook("e", null, "var-init");
          try {
            e = cc11001100_hook("e", localStorage.getItem(t), "assign");
          } catch (r) {
            console.error("Error", r);
          }
          var n = cc11001100_hook("n", new Date().getTime(), "var-init"),
            o = cc11001100_hook("o", this.data.get().posData.expires, "var-init");
          if (e) {
            if (Number(n) - Number(e) > 1e3 * (o || 86400)) {
              try {
                localStorage.setItem(t, String(n));
              } catch (r) {
                console.error("Error", r);
              }
              return !0;
            }
            return !1;
          }
          try {
            localStorage.setItem(t, String(n));
          } catch (r) {
            console.error("Error", r);
          }
          return !0;
        }, "assign"), l.prototype.onMouseOver = cc11001100_hook("l.prototype.onMouseOver", function (t) {
          this.log.send({
            fm: cc11001100_hook("fm", this.fmValue, "object-key-init"),
            rsv_fltrb_src: cc11001100_hook("rsv_fltrb_src", t, "object-key-init"),
            rsv_fltrb_action: cc11001100_hook("rsv_fltrb_action", "show_in", "object-key-init")
          }), this.data.set("qrcodeShow", !0);
        }, "assign"), l.prototype.onMouseOut = cc11001100_hook("l.prototype.onMouseOut", function (t) {
          this.log.send({
            fm: cc11001100_hook("fm", this.fmValue, "object-key-init"),
            rsv_fltrb_src: cc11001100_hook("rsv_fltrb_src", t, "object-key-init"),
            rsv_fltrb_action: cc11001100_hook("rsv_fltrb_action", "show_out", "object-key-init")
          }), this.data.set("qrcodeShow", !1);
        }, "assign"), l.prototype.qrcodeOut = cc11001100_hook("l.prototype.qrcodeOut", function (t) {
          var e = cc11001100_hook("e", this, "var-init");
          setTimeout(function () {
            e.data.set("qrcodeShow", !1);
          }, 1e3 * +t);
        }, "assign"), l.prototype.created = cc11001100_hook("l.prototype.created", function () {
          this.getData();
        }, "assign"), r.__decorate([a.injectable, r.__metadata("design:paramtypes", [s.SanOption, s.Log])], l)), "var-init");
      function l(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        t = cc11001100_hook("t", o.call(this, t) || this, "assign");
        return t.fmValue = cc11001100_hook("t.fmValue", "inlo", "assign"), t.log = cc11001100_hook("t.log", e, "assign"), t;
      }
      e["default"] = cc11001100_hook("e[\"default\"]", r, "assign");
    },
    2: function (t, e) {
      t.exports = cc11001100_hook("t.exports", o, "assign");
    },
    3: function (t, e, n) {
      e = cc11001100_hook("e", function () {
        "use strict";

        t.exports = cc11001100_hook("t.exports", function (n) {
          var c = cc11001100_hook("c", [], "var-init");
          return c.toString = cc11001100_hook("c.toString", function () {
            return this.map(function (t) {
              var e = cc11001100_hook("e", function (t, e) {
                var n = cc11001100_hook("n", t[1] || "", "var-init"),
                  o = cc11001100_hook("o", t[3], "var-init");
                if (!o) return n;
                if (e && "function" == typeof btoa) {
                  t = cc11001100_hook("t", function (t) {
                    t = cc11001100_hook("t", btoa(unescape(encodeURIComponent(JSON.stringify(t)))), "assign"), t = cc11001100_hook("t", "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t), "assign");
                    return "/*# ".concat(t, " */");
                  }(o), "assign"), e = cc11001100_hook("e", o.sources.map(function (t) {
                    return "/*# sourceURL=".concat(o.sourceRoot || "").concat(t, " */");
                  }), "assign");
                  return [n].concat(e).concat([t]).join("\n");
                }
                return [n].join("\n");
              }(t, n), "var-init");
              return t[2] ? "@media ".concat(t[2], " {").concat(e, "}") : e;
            }).join("");
          }, "assign"), c.i = cc11001100_hook("c.i", function (t, e, n) {
            "string" == typeof t && (t = cc11001100_hook("t", [[null, t, ""]], "assign"));
            var o = cc11001100_hook("o", {}, "var-init");
            if (n) for (var r = cc11001100_hook("r", 0, "var-init"); r < this.length; r++) {
              var i = cc11001100_hook("i", this[r][0], "var-init");
              null != i && (o[i] = cc11001100_hook("o[i]", !0, "assign"));
            }
            for (var a = cc11001100_hook("a", 0, "var-init"); a < t.length; a++) {
              var s = cc11001100_hook("s", [].concat(t[a]), "var-init");
              n && o[s[0]] || (e && (s[2] ? s[2] = cc11001100_hook("s[2]", "".concat(e, " and ").concat(s[2]), "assign") : s[2] = cc11001100_hook("s[2]", e, "assign")), c.push(s));
            }
          }, "assign"), c;
        }, "assign");
      }.apply(e, []), "assign");
      e === undefined || (t.exports = cc11001100_hook("t.exports", e, "assign"));
    },
    32: function (t, e, n) {
      "use strict";

      n.r(e), e["default"] = cc11001100_hook("e[\"default\"]", n.p + "/static/molecules/app/hint-float-ball-right/img/close_7bc47f9.png", "assign");
    },
    39: function (t, e) {
      t.exports = cc11001100_hook("t.exports", ' <div> <div s-if="isShow" id="hint-float-ball-right" class="{{$style[\'hint-float-ball-right\']}}"> <div class="{{$style[\'activity-enter\']}}"> <div class="{{$style[\'activity-enter-area\']}}" style="background-image: url({{posData.ball_img}})" on-mouseover="onMouseOver(mcpFrom)" on-mouseout="onMouseOut(mcpFrom)"></div> <div class="close {{$style[\'hint-float-ball-closebtn\']}}" on-click="btnClick(mcpFrom)"></div> <div class="{{$style[\'activity-text\']}}">{{posData.ball_desc}}</div> </div> <div s-if="qrcodeShow" class="{{$style[\'qrcode-area\']}}"> <div s-if="style === \'row\'" class="{{$style[\'qrcode-row\']}}"> <div class="{{$style[\'qrcode-obox\']}}"> <div class="{{$style[\'qrcode-box\']}}"> <div class="{{$style[\'qrcode-content\']}}" style="background-image: url({{posData.qr_img}})"></div> </div> <div class="{{$style[\'qrcode-text\']}}"> <div class="c-line-clamp1 {{$style[\'qrcode-title\']}}"> {{ posData.qr_title }} </div> <div class="c-line-clamp1 {{$style[\'qrcode-desc\']}}"> {{ posData.qr_desc }} </div> </div> </div> </div> <div s-else class="{{$style[\'qrcode-col\']}}"> <div class="{{$style[\'qrcode-box\']}}"> <div class="{{$style[\'qrcode-content\']}}" style="background-image: url({{posData.qr_img}})"></div> </div> <div class="{{$style[\'qrcode-text\']}}"> <div class="c-line-clamp1 {{$style[\'qrcode-title\']}}"> {{ posData.qr_title }} </div> <div class="c-line-clamp1 {{$style[\'qrcode-desc\']}}"> {{ posData.qr_desc }} </div> </div> </div> </div> </div> </div> ', "assign");
    },
    4: function (t, e, n) {
      "use strict";

      function c(t, e) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        for (var n = cc11001100_hook("n", [], "var-init"), o = cc11001100_hook("o", {}, "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < e.length; r++) {
          var i = cc11001100_hook("i", e[r], "var-init"),
            a = cc11001100_hook("a", i[0], "var-init"),
            i = cc11001100_hook("i", {
              id: cc11001100_hook("id", t + ":" + r, "object-key-init"),
              css: cc11001100_hook("css", i[1], "object-key-init"),
              media: cc11001100_hook("media", i[2], "object-key-init"),
              sourceMap: cc11001100_hook("sourceMap", i[3], "object-key-init")
            }, "var-init");
          o[a] ? o[a].parts.push(i) : n.push(o[a] = cc11001100_hook("o[a]", {
            id: cc11001100_hook("id", a, "object-key-init"),
            parts: cc11001100_hook("parts", [i], "object-key-init")
          }, "assign"));
        }
        return n;
      }
      n.r(e), n.d(e, "default", function () {
        return r;
      });
      n = cc11001100_hook("n", "undefined" != typeof document, "assign");
      if ("undefined" != typeof DEBUG && DEBUG && !n) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var l = cc11001100_hook("l", {}, "var-init"),
        o = cc11001100_hook("o", n && (document.head || document.getElementsByTagName("head")[0]), "var-init"),
        i = cc11001100_hook("i", null, "var-init"),
        a = cc11001100_hook("a", 0, "var-init"),
        d = cc11001100_hook("d", !1, "var-init"),
        s = function () {},
        u = cc11001100_hook("u", null, "var-init"),
        f = cc11001100_hook("f", "data-vue-ssr-id", "var-init"),
        p = cc11001100_hook("p", "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase()), "var-init");
      function r(a, t, e, n) {
        cc11001100_hook("a", a, "function-parameter");
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        d = cc11001100_hook("d", !!n.runAsProduction || e, "assign"), u = cc11001100_hook("u", n || {}, "assign");
        var s = cc11001100_hook("s", c(a, t), "var-init");
        return h(s), function (t) {
          for (var e = cc11001100_hook("e", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < s.length; n++) {
            var o = cc11001100_hook("o", s[n], "var-init");
            (r = cc11001100_hook("r", l[o.id], "assign")).refs--, e.push(r);
          }
          t ? h(s = cc11001100_hook("s", c(a, t), "assign")) : s = cc11001100_hook("s", [], "assign");
          for (var r, n = cc11001100_hook("n", 0, "var-init"); n < e.length; n++) if (0 === (r = cc11001100_hook("r", e[n], "assign")).refs) {
            for (var i = cc11001100_hook("i", 0, "var-init"); i < r.parts.length; i++) r.parts[i]();
            delete l[r.id];
          }
        };
      }
      function h(t) {
        cc11001100_hook("t", t, "function-parameter");
        for (var e = cc11001100_hook("e", 0, "var-init"); e < t.length; e++) {
          var n = cc11001100_hook("n", t[e], "var-init"),
            o = cc11001100_hook("o", l[n.id], "var-init");
          if (o) {
            o.refs++;
            for (var r = cc11001100_hook("r", 0, "var-init"); r < o.parts.length; r++) o.parts[r](n.parts[r]);
            for (; r < n.parts.length; r++) o.parts.push(v(n.parts[r]));
            o.parts.length > n.parts.length && (o.parts.length = cc11001100_hook("o.parts.length", n.parts.length, "assign"));
          } else {
            for (var i = cc11001100_hook("i", [], "var-init"), r = cc11001100_hook("r", 0, "var-init"); r < n.parts.length; r++) i.push(v(n.parts[r]));
            l[n.id] = cc11001100_hook("l[n.id]", {
              id: cc11001100_hook("id", n.id, "object-key-init"),
              refs: cc11001100_hook("refs", 1, "object-key-init"),
              parts: cc11001100_hook("parts", i, "object-key-init")
            }, "assign");
          }
        }
      }
      function b() {
        var t,
          e = cc11001100_hook("e", document.createElement("style"), "var-init"),
          n = cc11001100_hook("n", u.attributes || {}, "var-init");
        for (t in e.type = cc11001100_hook("e.type", "text/css", "assign"), n) n.hasOwnProperty(t) && e.setAttribute(t, n[t]);
        return o.appendChild(e), e;
      }
      function v(e) {
        cc11001100_hook("e", e, "function-parameter");
        var t,
          n,
          o,
          r = cc11001100_hook("r", document.querySelector("style[" + f + '~="' + e.id + '"]'), "var-init");
        if (r) {
          if (d) return s;
          r.parentNode.removeChild(r);
        }
        return o = cc11001100_hook("o", p ? (t = cc11001100_hook("t", a++, "assign"), r = cc11001100_hook("r", i = cc11001100_hook("i", i || b(), "assign"), "assign"), n = cc11001100_hook("n", m.bind(null, r, t, !1), "assign"), m.bind(null, r, t, !0)) : (r = cc11001100_hook("r", b(), "assign"), n = cc11001100_hook("n", function (t, e) {
          var n = cc11001100_hook("n", e.css, "var-init"),
            o = cc11001100_hook("o", e.media, "var-init"),
            r = cc11001100_hook("r", e.sourceMap, "var-init");
          o && t.setAttribute("media", o);
          u.ssrId && t.setAttribute(f, e.id);
          r && (n += cc11001100_hook("n", "\n/*# sourceURL=" + r.sources[0] + " */", "assign"), n += cc11001100_hook("n", "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */", "assign"));
          if (t.styleSheet) t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", n, "assign");else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        }.bind(null, r), "assign"), function () {
          r.parentNode.removeChild(r);
        }), "assign"), n(e), function (t) {
          t ? t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap || n(e = cc11001100_hook("e", t, "assign")) : o();
        };
      }
      var g,
        y = cc11001100_hook("y", (g = cc11001100_hook("g", [], "assign"), function (t, e) {
          return g[t] = cc11001100_hook("g[t]", e, "assign"), g.filter(Boolean).join("\n");
        }), "var-init");
      function m(t, e, n, o) {
        cc11001100_hook("t", t, "function-parameter");
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("o", o, "function-parameter");
        n = cc11001100_hook("n", n ? "" : o.css, "assign");
        t.styleSheet ? t.styleSheet.cssText = cc11001100_hook("t.styleSheet.cssText", y(e, n), "assign") : (o = cc11001100_hook("o", document.createTextNode(n), "assign"), (n = cc11001100_hook("n", t.childNodes, "assign"))[e] && t.removeChild(n[e]), n.length ? t.insertBefore(o, n[e]) : t.appendChild(o));
      }
    },
    5: function (t, e) {
      t.exports = cc11001100_hook("t.exports", r, "assign");
    },
    6: function (t, e) {
      t.exports = cc11001100_hook("t.exports", i, "assign");
    },
    7: function (t, e, n) {
      e = cc11001100_hook("e", function () {
        "use strict";

        t.exports = cc11001100_hook("t.exports", function (t, e) {
          return e = cc11001100_hook("e", e || {}, "assign"), "string" != typeof (t = cc11001100_hook("t", t && t.__esModule ? t["default"] : t, "assign")) ? t : (/^['"].*['"]$/.test(t) && (t = cc11001100_hook("t", t.slice(1, -1), "assign")), e.hash && (t += cc11001100_hook("t", e.hash, "assign")), /["'() \t\n]/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t);
        }, "assign");
      }.apply(e, []), "assign");
      e === undefined || (t.exports = cc11001100_hook("t.exports", e, "assign"));
    },
    72: function (t, e, n) {
      "use strict";

      n.r(e);
      var o,
        r = cc11001100_hook("r", n(0), "var-init"),
        i = cc11001100_hook("i", n.n(r), "var-init"),
        r = cc11001100_hook("r", (n(73), n(39)), "var-init"),
        a = cc11001100_hook("a", n.n(r), "var-init"),
        s = cc11001100_hook("s", n(11), "var-init"),
        r = cc11001100_hook("r", n.n(s), "var-init");
      for (o in s) ["default"].indexOf(o) < 0 && function (t) {
        n.d(e, t, function () {
          return s[t];
        });
      }(o);
      e["default"] = cc11001100_hook("e[\"default\"]", i()(r.a, a.a, []), "assign");
    },
    73: function (t, e, n) {
      var o = cc11001100_hook("o", n(74), "var-init");
      (o = cc11001100_hook("o", "string" == typeof o ? [[t.i, o, ""]] : o, "assign")).locals && (t.exports = cc11001100_hook("t.exports", o.locals, "assign"));
      (0, n(4)["default"])("19af4086", o, !0, {
        attributes: {
          "data-for": cc11001100_hook("data-for", "result", "object-key-init")
        },
        runAsProduction: cc11001100_hook("runAsProduction", !0, "object-key-init")
      });
    },
    74: function (t, e, n) {
      var o = cc11001100_hook("o", n(3), "var-init"),
        r = cc11001100_hook("r", n(7), "var-init"),
        n = cc11001100_hook("n", n(32), "var-init");
      e = cc11001100_hook("e", o(!1), "assign");
      r = cc11001100_hook("r", r(n), "assign");
      e.push([t.i, ".hint-float-ball-right_35qVn {\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: flex-end;\n  position: fixed;\n  right: 24px;\n  bottom: 64px;\n  font-size: 14px;\n  z-index: 1000;\n}\n.activity-enter_3KGmI {\n  position: relative;\n  float: right\\0;\n}\n.activity-enter-area_1DNYN {\n  width: 96px;\n  height: 96px;\n  margin-left: 8px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.hint-float-ball-closebtn_2V4jN {\n  width: 12px;\n  height: 12px;\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  background-image: url(" + r + ');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.activity-text_D3ilj {\n  position: absolute;\n  bottom: 12px;\n  color: #ffe5ca;\n  font-size: 16px;\n  font-family: PingFangSC-Medium;\n  line-height: 16px;\n  text-align: center;\n  width: 96px;\n  margin-left: 8px;\n}\n.ball-desc_2fz6C {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.qrcode-area_3ttcf {\n  margin-right: 8px;\n  float: right\\0;\n}\n.qrcode-col_3MBJk {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 103px;\n  height: 128px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n.qrcode-col_3MBJk:after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n  left: 102px;\n  bottom: 20px;\n  border-top: solid 10px transparent;\n  border-left: solid 10px #ffffff;\n  /* 白色小三角形 */\n  border-bottom: solid 10px transparent;\n}\n.qrcode-col_3MBJk .qrcode-box_3svoY {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 12px 8px;\n}\n.qrcode-col_3MBJk .qrcode-content_t_13k {\n  width: 64px;\n  height: 64px;\n  margin: 4px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.qrcode-col_3MBJk .qrcode-title_3gmBA,\n.qrcode-col_3MBJk .qrcode-desc_al226 {\n  padding: 0 9px;\n  font-size: 13px;\n  line-height: 15px;\n  color: #222222;\n  margin-bottom: 8px;\n}\n.qrcode-row_1t-Zs {\n  display: flex;\n  justify-content: center;\n  width: 296px;\n  height: 102px;\n  position: relative;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n}\n.qrcode-row_1t-Zs:after {\n  content: "";\n  width: 0;\n  height: 0;\n  position: absolute;\n  right: -9px;\n  bottom: 20px;\n  border-top: solid 10px transparent;\n  border-left: solid 10px #ffffff;\n  /* 白色小三角形 */\n  border-bottom: solid 10px transparent;\n}\n.qrcode-row_1t-Zs .qrcode-obox_TLjKl {\n  padding: 16px;\n  width: 100%;\n  box-sizing: border-box;\n}\n.qrcode-row_1t-Zs .qrcode-box_3svoY {\n  float: right;\n}\n.qrcode-row_1t-Zs .qrcode-content_t_13k {\n  width: 70px;\n  height: 70px;\n  margin-left: 20px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.qrcode-row_1t-Zs .qrcode-text_2QPZ1 {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.qrcode-row_1t-Zs .qrcode-title_3gmBA {\n  font-family: Helvetica;\n  font-size: 20px;\n  color: #222222;\n  line-height: 20px;\n  margin-bottom: 6px;\n}\n.qrcode-row_1t-Zs .qrcode-desc_al226 {\n  font-family: MicrosoftYaHei;\n  font-size: 14px;\n  color: #f73131;\n  letter-spacing: 0;\n  line-height: 16px;\n}\n', ""]), e.locals = cc11001100_hook("e.locals", {
        "hint-float-ball-right": cc11001100_hook("hint-float-ball-right", "hint-float-ball-right_35qVn", "object-key-init"),
        hintFloatBallRight: cc11001100_hook("hintFloatBallRight", "hint-float-ball-right_35qVn", "object-key-init"),
        "activity-enter": cc11001100_hook("activity-enter", "activity-enter_3KGmI", "object-key-init"),
        activityEnter: cc11001100_hook("activityEnter", "activity-enter_3KGmI", "object-key-init"),
        "activity-enter-area": cc11001100_hook("activity-enter-area", "activity-enter-area_1DNYN", "object-key-init"),
        activityEnterArea: cc11001100_hook("activityEnterArea", "activity-enter-area_1DNYN", "object-key-init"),
        "hint-float-ball-closebtn": cc11001100_hook("hint-float-ball-closebtn", "hint-float-ball-closebtn_2V4jN", "object-key-init"),
        hintFloatBallClosebtn: cc11001100_hook("hintFloatBallClosebtn", "hint-float-ball-closebtn_2V4jN", "object-key-init"),
        "activity-text": cc11001100_hook("activity-text", "activity-text_D3ilj", "object-key-init"),
        activityText: cc11001100_hook("activityText", "activity-text_D3ilj", "object-key-init"),
        "ball-desc": cc11001100_hook("ball-desc", "ball-desc_2fz6C", "object-key-init"),
        ballDesc: cc11001100_hook("ballDesc", "ball-desc_2fz6C", "object-key-init"),
        "qrcode-area": cc11001100_hook("qrcode-area", "qrcode-area_3ttcf", "object-key-init"),
        qrcodeArea: cc11001100_hook("qrcodeArea", "qrcode-area_3ttcf", "object-key-init"),
        "qrcode-col": cc11001100_hook("qrcode-col", "qrcode-col_3MBJk", "object-key-init"),
        qrcodeCol: cc11001100_hook("qrcodeCol", "qrcode-col_3MBJk", "object-key-init"),
        "qrcode-box": cc11001100_hook("qrcode-box", "qrcode-box_3svoY", "object-key-init"),
        qrcodeBox: cc11001100_hook("qrcodeBox", "qrcode-box_3svoY", "object-key-init"),
        "qrcode-content": cc11001100_hook("qrcode-content", "qrcode-content_t_13k", "object-key-init"),
        qrcodeContent: cc11001100_hook("qrcodeContent", "qrcode-content_t_13k", "object-key-init"),
        "qrcode-title": cc11001100_hook("qrcode-title", "qrcode-title_3gmBA", "object-key-init"),
        qrcodeTitle: cc11001100_hook("qrcodeTitle", "qrcode-title_3gmBA", "object-key-init"),
        "qrcode-desc": cc11001100_hook("qrcode-desc", "qrcode-desc_al226", "object-key-init"),
        qrcodeDesc: cc11001100_hook("qrcodeDesc", "qrcode-desc_al226", "object-key-init"),
        "qrcode-row": cc11001100_hook("qrcode-row", "qrcode-row_1t-Zs", "object-key-init"),
        qrcodeRow: cc11001100_hook("qrcodeRow", "qrcode-row_1t-Zs", "object-key-init"),
        "qrcode-obox": cc11001100_hook("qrcode-obox", "qrcode-obox_TLjKl", "object-key-init"),
        qrcodeObox: cc11001100_hook("qrcodeObox", "qrcode-obox_TLjKl", "object-key-init"),
        "qrcode-text": cc11001100_hook("qrcode-text", "qrcode-text_2QPZ1", "object-key-init"),
        qrcodeText: cc11001100_hook("qrcodeText", "qrcode-text_2QPZ1", "object-key-init")
      }, "assign"), t.exports = cc11001100_hook("t.exports", e, "assign");
    },
    75: function (t, e, n) {
      "use strict";

      e.__esModule = cc11001100_hook("e.__esModule", !0, "assign"), e.Ajax = cc11001100_hook("e.Ajax", void 0, "assign");
      var o = cc11001100_hook("o", n(2), "var-init");
      e.Ajax = cc11001100_hook("e.Ajax", {
        post: function (t, e, n) {
          var o,
            r = cc11001100_hook("r", (o = cc11001100_hook("o", null, "assign"), window.XMLHttpRequest ? o = cc11001100_hook("o", new XMLHttpRequest(), "assign") : window.ActiveXObject && (o = cc11001100_hook("o", new ActiveXObject("Microsoft.XMLHTTP"), "assign")), o), "var-init");
          if (!r) return this.jsonp(t, e);
          r.open("POST", t), r.withCredentials = cc11001100_hook("r.withCredentials", !0, "assign"), r.setRequestHeader("Content-Type", "application/json"), r.onreadystatechange = cc11001100_hook("r.onreadystatechange", function () {
            var t;
            4 === r.readyState && (200 <= r.status && r.status < 300 || 304 === r.status ? n.success && (t = cc11001100_hook("t", r.responseText ? JSON.parse(r.responseText) : {}, "assign"), n.success(t)) : n.error && n.error(r.status));
          }, "assign"), r.send(e);
        },
        jsonp: function (t, e) {
          var i = cc11001100_hook("i", "jsonp_" + new Date().getTime(), "var-init"),
            e = cc11001100_hook("e", function (t, e) {
              var n,
                o = cc11001100_hook("o", [], "var-init");
              for (n in e) o.push(n + "=" + e[n]);
              return t + "?" + o.join("&");
            }(t, o.__assign(o.__assign({}, e), {
              cb: cc11001100_hook("cb", i, "object-key-init")
            })), "var-init"),
            a = cc11001100_hook("a", document.createElement("script"), "var-init");
          return a.src = cc11001100_hook("a.src", e, "assign"), new Promise(function (o, r) {
            window[i] = cc11001100_hook("window[i]", function (t) {
              var e, n;
              document.body.removeChild(a), delete window[i], e = cc11001100_hook("e", o, "assign"), n = cc11001100_hook("n", r, "assign"), (t = cc11001100_hook("t", t, "assign")).errno || !t ? n(t.errno) : e(t.data && t.data[0]);
            }, "assign"), document.body.appendChild(a);
          });
        }
      }, "assign");
    }
  }, "assign"), c = cc11001100_hook("c", {}, "assign"), a.m = cc11001100_hook("a.m", s, "assign"), a.c = cc11001100_hook("a.c", c, "assign"), a.d = cc11001100_hook("a.d", function (t, e, n) {
    a.o(t, e) || Object.defineProperty(t, e, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: cc11001100_hook("get", n, "object-key-init")
    });
  }, "assign"), a.r = cc11001100_hook("a.r", function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: cc11001100_hook("value", "Module", "object-key-init")
    }), Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }, "assign"), a.t = cc11001100_hook("a.t", function (e, t) {
    if (1 & t && (e = cc11001100_hook("e", a(e), "assign")), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = cc11001100_hook("n", Object.create(null), "var-init");
    if (a.r(n), Object.defineProperty(n, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      value: cc11001100_hook("value", e, "object-key-init")
    }), 2 & t && "string" != typeof e) for (var o in e) a.d(n, o, function (t) {
      return e[t];
    }.bind(null, o));
    return n;
  }, "assign"), a.n = cc11001100_hook("a.n", function (t) {
    var e = cc11001100_hook("e", t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    }, "var-init");
    return a.d(e, "a", e), e;
  }, "assign"), a.o = cc11001100_hook("a.o", function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, "assign"), a.p = cc11001100_hook("a.p", "https://pss.bdstatic.com/r/www/cache", "assign"), a(a.s = cc11001100_hook("a.s", 72, "assign"));
  function a(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (c[t]) return c[t].exports;
    var e = cc11001100_hook("e", c[t] = cc11001100_hook("c[t]", {
      i: cc11001100_hook("i", t, "object-key-init"),
      l: cc11001100_hook("l", !1, "object-key-init"),
      exports: {}
    }, "assign"), "var-init");
    return s[t].call(e.exports, e, e.exports, a), e.l = cc11001100_hook("e.l", !0, "assign"), e.exports;
  }
  var s, c;
});