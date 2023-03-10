!function () {
  var e = cc11001100_hook("e", function () {
    function t() {
      if (!X && document.getElementsByTagName("body")[0]) {
        try {
          var e,
            t = cc11001100_hook("t", g("span"), "var-init");
          t.style.display = cc11001100_hook("t.style.display", "none", "assign"), e = cc11001100_hook("e", R.getElementsByTagName("body")[0].appendChild(t), "assign"), e.parentNode.removeChild(e), e = cc11001100_hook("e", null, "assign"), t = cc11001100_hook("t", null, "assign");
        } catch (n) {
          return;
        }
        X = cc11001100_hook("X", !0, "assign");
        for (var i = cc11001100_hook("i", H.length, "var-init"), a = cc11001100_hook("a", 0, "var-init"); i > a; a++) H[a]();
      }
    }
    function n(e) {
      cc11001100_hook("e", e, "function-parameter");
      X ? e() : H[H.length] = cc11001100_hook("H[H.length]", e, "assign");
    }
    function i(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (typeof P.addEventListener !== O) P.addEventListener("load", e, !1);else if (typeof R.addEventListener !== O) R.addEventListener("load", e, !1);else if (typeof P.attachEvent !== O) b(P, "onload", e);else if ("function" == typeof P.onload) {
        var t = cc11001100_hook("t", P.onload, "var-init");
        P.onload = cc11001100_hook("P.onload", function () {
          t(), e();
        }, "assign");
      } else P.onload = cc11001100_hook("P.onload", e, "assign");
    }
    function a() {
      var e = cc11001100_hook("e", R.getElementsByTagName("body")[0], "var-init"),
        t = cc11001100_hook("t", g(x), "var-init");
      t.setAttribute("style", "visibility:hidden;"), t.setAttribute("type", M);
      var n = cc11001100_hook("n", e.appendChild(t), "var-init");
      n ? !function () {
        if (typeof n.GetVariable !== O) try {
          var i = cc11001100_hook("i", n.GetVariable("$version"), "var-init");
          i && (i = cc11001100_hook("i", i.split(" ")[1].split(","), "assign"), Q.pv = cc11001100_hook("Q.pv", [w(i[0]), w(i[1]), w(i[2])], "assign"));
        } catch (a) {
          Q.pv = cc11001100_hook("Q.pv", [8, 0, 0], "assign");
        } else Q.pv = cc11001100_hook("Q.pv", [8, 0, 0], "assign");
        e.removeChild(t), n = cc11001100_hook("n", null, "assign"), r();
      }() : r();
    }
    function r() {
      var e = cc11001100_hook("e", W.length, "var-init");
      if (e > 0) for (var t = cc11001100_hook("t", 0, "var-init"); e > t; t++) {
        var n = cc11001100_hook("n", W[t].id, "var-init"),
          i = cc11001100_hook("i", W[t].callbackFn, "var-init"),
          a = cc11001100_hook("a", {
            success: cc11001100_hook("success", !1, "object-key-init"),
            id: cc11001100_hook("id", n, "object-key-init")
          }, "var-init");
        if (Q.pv[0] > 0) {
          var r = cc11001100_hook("r", m(n), "var-init");
          if (r) if (!E(W[t].swfVersion) || Q.wk && Q.wk < 312) {
            if (W[t].expressInstall && l()) {
              var f = cc11001100_hook("f", {}, "var-init");
              f.data = cc11001100_hook("f.data", W[t].expressInstall, "assign"), f.width = cc11001100_hook("f.width", r.getAttribute("width") || "0", "assign"), f.height = cc11001100_hook("f.height", r.getAttribute("height") || "0", "assign"), r.getAttribute("class") && (f.styleclass = cc11001100_hook("f.styleclass", r.getAttribute("class"), "assign")), r.getAttribute("align") && (f.align = cc11001100_hook("f.align", r.getAttribute("align"), "assign"));
              for (var c = cc11001100_hook("c", {}, "var-init"), u = cc11001100_hook("u", r.getElementsByTagName("param"), "var-init"), p = cc11001100_hook("p", u.length, "var-init"), v = cc11001100_hook("v", 0, "var-init"); p > v; v++) "movie" !== u[v].getAttribute("name").toLowerCase() && (c[u[v].getAttribute("name")] = cc11001100_hook("c[u[v].getAttribute(\"name\")]", u[v].getAttribute("value"), "assign"));
              s(f, c, n, i);
            } else d(r), i && i(a);
          } else A(n, !0), i && (a.success = cc11001100_hook("a.success", !0, "assign"), a.ref = cc11001100_hook("a.ref", o(n), "assign"), a.id = cc11001100_hook("a.id", n, "assign"), i(a));
        } else if (A(n, !0), i) {
          var y = cc11001100_hook("y", o(n), "var-init");
          y && typeof y.SetVariable !== O && (a.success = cc11001100_hook("a.success", !0, "assign"), a.ref = cc11001100_hook("a.ref", y, "assign"), a.id = cc11001100_hook("a.id", y.id, "assign")), i(a);
        }
      }
    }
    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", null, "var-init"),
        n = cc11001100_hook("n", m(e), "var-init");
      return n && "OBJECT" === n.nodeName.toUpperCase() && (t = cc11001100_hook("t", typeof n.SetVariable !== O ? n : n.getElementsByTagName(x)[0] || n, "assign")), t;
    }
    function l() {
      return !z && E("6.0.65") && (Q.win || Q.mac) && !(Q.wk && Q.wk < 312);
    }
    function s(e, t, n, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      var a = cc11001100_hook("a", m(n), "var-init");
      if (n = cc11001100_hook("n", h(n), "assign"), z = cc11001100_hook("z", !0, "assign"), k = cc11001100_hook("k", i || null, "assign"), B = cc11001100_hook("B", {
        success: cc11001100_hook("success", !1, "object-key-init"),
        id: cc11001100_hook("id", n, "object-key-init")
      }, "assign"), a) {
        "OBJECT" === a.nodeName.toUpperCase() ? (T = cc11001100_hook("T", f(a), "assign"), N = cc11001100_hook("N", null, "assign")) : (T = cc11001100_hook("T", a, "assign"), N = cc11001100_hook("N", n, "assign")), e.id = cc11001100_hook("e.id", j, "assign"), (typeof e.width === O || !/%$/.test(e.width) && w(e.width) < 310) && (e.width = cc11001100_hook("e.width", "310", "assign")), (typeof e.height === O || !/%$/.test(e.height) && w(e.height) < 137) && (e.height = cc11001100_hook("e.height", "137", "assign"));
        var r = cc11001100_hook("r", Q.ie ? "ActiveX" : "PlugIn", "var-init"),
          o = cc11001100_hook("o", "MMredirectURL=" + encodeURIComponent(P.location.toString().replace(/&/g, "%26")) + "&MMplayerType=" + r + "&MMdoctitle=" + encodeURIComponent(R.title.slice(0, 47) + " - Flash Player Installation"), "var-init");
        if (typeof t.flashvars !== O ? t.flashvars += cc11001100_hook("t.flashvars", "&" + o, "assign") : t.flashvars = cc11001100_hook("t.flashvars", o, "assign"), Q.ie && 4 != a.readyState) {
          var l = cc11001100_hook("l", g("div"), "var-init");
          n += cc11001100_hook("n", "SWFObjectNew", "assign"), l.setAttribute("id", n), a.parentNode.insertBefore(l, a), a.style.display = cc11001100_hook("a.style.display", "none", "assign"), v(a);
        }
        u(e, t, n);
      }
    }
    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (Q.ie && 4 != e.readyState) {
        e.style.display = cc11001100_hook("e.style.display", "none", "assign");
        var t = cc11001100_hook("t", g("div"), "var-init");
        e.parentNode.insertBefore(t, e), t.parentNode.replaceChild(f(e), t), v(e);
      } else e.parentNode.replaceChild(f(e), e);
    }
    function f(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", g("div"), "var-init");
      if (Q.win && Q.ie) t.innerHTML = cc11001100_hook("t.innerHTML", e.innerHTML, "assign");else {
        var n = cc11001100_hook("n", e.getElementsByTagName(x)[0], "var-init");
        if (n) {
          var i = cc11001100_hook("i", n.childNodes, "var-init");
          if (i) for (var a = cc11001100_hook("a", i.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"); a > r; r++) 1 == i[r].nodeType && "PARAM" === i[r].nodeName || 8 == i[r].nodeType || t.appendChild(i[r].cloneNode(!0));
        }
      }
      return t;
    }
    function c(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", g("div"), "var-init");
      return n.innerHTML = cc11001100_hook("n.innerHTML", "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='" + e + "'>" + t + "</object>", "assign"), n.firstChild;
    }
    function u(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var i,
        a = cc11001100_hook("a", m(n), "var-init");
      if (n = cc11001100_hook("n", h(n), "assign"), Q.wk && Q.wk < 312) return i;
      if (a) {
        var r,
          o,
          l,
          s = cc11001100_hook("s", g(Q.ie ? "div" : x), "var-init");
        typeof e.id === O && (e.id = cc11001100_hook("e.id", n, "assign"));
        for (l in t) t.hasOwnProperty(l) && "movie" !== l.toLowerCase() && p(s, l, t[l]);
        Q.ie && (s = cc11001100_hook("s", c(e.data, s.innerHTML), "assign"));
        for (r in e) e.hasOwnProperty(r) && (o = cc11001100_hook("o", r.toLowerCase(), "assign"), "styleclass" === o ? s.setAttribute("class", e[r]) : "classid" !== o && "data" !== o && s.setAttribute(r, e[r]));
        Q.ie ? G[G.length] = cc11001100_hook("G[G.length]", e.id, "assign") : (s.setAttribute("type", M), s.setAttribute("data", e.data)), a.parentNode.replaceChild(s, a), i = cc11001100_hook("i", s, "assign");
      }
      return i;
    }
    function p(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var i = cc11001100_hook("i", g("param"), "var-init");
      i.setAttribute("name", t), i.setAttribute("value", n), e.appendChild(i);
    }
    function v(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", m(e), "var-init");
      t && "OBJECT" === t.nodeName.toUpperCase() && (Q.ie ? (t.style.display = cc11001100_hook("t.style.display", "none", "assign"), function n() {
        if (4 == t.readyState) {
          for (var e in t) "function" == typeof t[e] && (t[e] = cc11001100_hook("t[e]", null, "assign"));
          t.parentNode.removeChild(t);
        } else setTimeout(n, 10);
      }()) : t.parentNode.removeChild(t));
    }
    function y(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e && e.nodeType && 1 === e.nodeType;
    }
    function h(e) {
      cc11001100_hook("e", e, "function-parameter");
      return y(e) ? e.id : e;
    }
    function m(e) {
      cc11001100_hook("e", e, "function-parameter");
      if (y(e)) return e;
      var t = cc11001100_hook("t", null, "var-init");
      try {
        t = cc11001100_hook("t", R.getElementById(e), "assign");
      } catch (n) {}
      return t;
    }
    function g(e) {
      cc11001100_hook("e", e, "function-parameter");
      return R.createElement(e);
    }
    function w(e) {
      cc11001100_hook("e", e, "function-parameter");
      return parseInt(e, 10);
    }
    function b(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      e.attachEvent(t, n), J[J.length] = cc11001100_hook("J[J.length]", [e, t, n], "assign");
    }
    function E(e) {
      cc11001100_hook("e", e, "function-parameter");
      e += cc11001100_hook("e", "", "assign");
      var t = cc11001100_hook("t", Q.pv, "var-init"),
        n = cc11001100_hook("n", e.split("."), "var-init");
      return n[0] = cc11001100_hook("n[0]", w(n[0]), "assign"), n[1] = cc11001100_hook("n[1]", w(n[1]) || 0, "assign"), n[2] = cc11001100_hook("n[2]", w(n[2]) || 0, "assign"), t[0] > n[0] || t[0] == n[0] && t[1] > n[1] || t[0] == n[0] && t[1] == n[1] && t[2] >= n[2] ? !0 : !1;
    }
    function C(e, t, n, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      var a = cc11001100_hook("a", R.getElementsByTagName("head")[0], "var-init");
      if (a) {
        var r = cc11001100_hook("r", "string" == typeof n ? n : "screen", "var-init");
        if (i && (I = cc11001100_hook("I", null, "assign"), L = cc11001100_hook("L", null, "assign")), !I || L != r) {
          var o = cc11001100_hook("o", g("style"), "var-init");
          o.setAttribute("type", "text/css"), o.setAttribute("media", r), I = cc11001100_hook("I", a.appendChild(o), "assign"), Q.ie && typeof R.styleSheets !== O && R.styleSheets.length > 0 && (I = cc11001100_hook("I", R.styleSheets[R.styleSheets.length - 1], "assign")), L = cc11001100_hook("L", r, "assign");
        }
        I && (typeof I.addRule !== O ? I.addRule(e, t) : typeof R.createTextNode !== O && I.appendChild(R.createTextNode(e + " {" + t + "}")));
      }
    }
    function A(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      if (Z) {
        var n = cc11001100_hook("n", t ? "visible" : "hidden", "var-init"),
          i = cc11001100_hook("i", m(e), "var-init");
        X && i ? i.style.visibility = cc11001100_hook("i.style.visibility", n, "assign") : "string" == typeof e && C("#" + e, "visibility:" + n);
      }
    }
    function S(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", /[\\\"<>\.;]/, "var-init"),
        n = cc11001100_hook("n", null !== t.exec(e), "var-init");
      return n && typeof encodeURIComponent !== O ? encodeURIComponent(e) : e;
    }
    {
      var T,
        N,
        k,
        B,
        I,
        L,
        O = cc11001100_hook("O", "undefined", "var-init"),
        x = cc11001100_hook("x", "object", "var-init"),
        F = cc11001100_hook("F", "Shockwave Flash", "var-init"),
        $ = cc11001100_hook("$", "ShockwaveFlash.ShockwaveFlash", "var-init"),
        M = cc11001100_hook("M", "application/x-shockwave-flash", "var-init"),
        j = cc11001100_hook("j", "SWFObjectExprInst", "var-init"),
        U = cc11001100_hook("U", "onreadystatechange", "var-init"),
        P = cc11001100_hook("P", window, "var-init"),
        R = cc11001100_hook("R", document, "var-init"),
        V = cc11001100_hook("V", navigator, "var-init"),
        D = cc11001100_hook("D", !1, "var-init"),
        H = cc11001100_hook("H", [], "var-init"),
        W = cc11001100_hook("W", [], "var-init"),
        G = cc11001100_hook("G", [], "var-init"),
        J = cc11001100_hook("J", [], "var-init"),
        X = cc11001100_hook("X", !1, "var-init"),
        z = cc11001100_hook("z", !1, "var-init"),
        Z = cc11001100_hook("Z", !0, "var-init"),
        q = cc11001100_hook("q", !1, "var-init"),
        Q = cc11001100_hook("Q", function () {
          var e = cc11001100_hook("e", typeof R.getElementById !== O && typeof R.getElementsByTagName !== O && typeof R.createElement !== O, "var-init"),
            t = cc11001100_hook("t", V.userAgent.toLowerCase(), "var-init"),
            n = cc11001100_hook("n", V.platform.toLowerCase(), "var-init"),
            i = cc11001100_hook("i", /win/.test(n ? n : t), "var-init"),
            a = cc11001100_hook("a", /mac/.test(n ? n : t), "var-init"),
            r = cc11001100_hook("r", /webkit/.test(t) ? parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1, "var-init"),
            o = cc11001100_hook("o", "Microsoft Internet Explorer" === V.appName, "var-init"),
            l = cc11001100_hook("l", [0, 0, 0], "var-init"),
            s = cc11001100_hook("s", null, "var-init");
          if (typeof V.plugins !== O && typeof V.plugins[F] === x) s = cc11001100_hook("s", V.plugins[F].description, "assign"), s && typeof V.mimeTypes !== O && V.mimeTypes[M] && V.mimeTypes[M].enabledPlugin && (D = cc11001100_hook("D", !0, "assign"), o = cc11001100_hook("o", !1, "assign"), s = cc11001100_hook("s", s.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), "assign"), l[0] = cc11001100_hook("l[0]", w(s.replace(/^(.*)\..*$/, "$1")), "assign"), l[1] = cc11001100_hook("l[1]", w(s.replace(/^.*\.(.*)\s.*$/, "$1")), "assign"), l[2] = cc11001100_hook("l[2]", /[a-zA-Z]/.test(s) ? w(s.replace(/^.*[a-zA-Z]+(.*)$/, "$1")) : 0, "assign"));else if (typeof P.ActiveXObject !== O) try {
            var d = cc11001100_hook("d", new ActiveXObject($), "var-init");
            d && (s = cc11001100_hook("s", d.GetVariable("$version"), "assign"), s && (o = cc11001100_hook("o", !0, "assign"), s = cc11001100_hook("s", s.split(" ")[1].split(","), "assign"), l = cc11001100_hook("l", [w(s[0]), w(s[1]), w(s[2])], "assign")));
          } catch (f) {}
          return {
            w3: cc11001100_hook("w3", e, "object-key-init"),
            pv: cc11001100_hook("pv", l, "object-key-init"),
            wk: cc11001100_hook("wk", r, "object-key-init"),
            ie: cc11001100_hook("ie", o, "object-key-init"),
            win: cc11001100_hook("win", i, "object-key-init"),
            mac: cc11001100_hook("mac", a, "object-key-init")
          };
        }(), "var-init");
      !function () {
        Q.w3 && ((typeof R.readyState !== O && ("complete" === R.readyState || "interactive" === R.readyState) || typeof R.readyState === O && (R.getElementsByTagName("body")[0] || R.body)) && t(), X || (typeof R.addEventListener !== O && R.addEventListener("DOMContentLoaded", t, !1), Q.ie && (R.attachEvent(U, function e() {
          "complete" === R.readyState && (R.detachEvent(U, e), t());
        }), P == top && !function n() {
          if (!X) {
            try {
              R.documentElement.doScroll("left");
            } catch (e) {
              return void setTimeout(n, 0);
            }
            t();
          }
        }()), Q.wk && !function i() {
          return X ? void 0 : /loaded|complete/.test(R.readyState) ? void t() : void setTimeout(i, 0);
        }()));
      }();
    }
    H[0] = cc11001100_hook("H[0]", function () {
      D ? a() : r();
    }, "assign");
    !function () {
      Q.ie && window.attachEvent("onunload", function () {
        for (var t = cc11001100_hook("t", J.length, "var-init"), n = cc11001100_hook("n", 0, "var-init"); t > n; n++) J[n][0].detachEvent(J[n][1], J[n][2]);
        for (var i = cc11001100_hook("i", G.length, "var-init"), a = cc11001100_hook("a", 0, "var-init"); i > a; a++) v(G[a]);
        for (var r in Q) Q[r] = cc11001100_hook("Q[r]", null, "assign");
        Q = cc11001100_hook("Q", null, "assign");
        for (var o in e) e[o] = cc11001100_hook("e[o]", null, "assign");
        e = cc11001100_hook("e", null, "assign");
      });
    }();
    return {
      registerObject: function (e, t, n, i) {
        if (Q.w3 && e && t) {
          var a = cc11001100_hook("a", {}, "var-init");
          a.id = cc11001100_hook("a.id", e, "assign"), a.swfVersion = cc11001100_hook("a.swfVersion", t, "assign"), a.expressInstall = cc11001100_hook("a.expressInstall", n, "assign"), a.callbackFn = cc11001100_hook("a.callbackFn", i, "assign"), W[W.length] = cc11001100_hook("W[W.length]", a, "assign"), A(e, !1);
        } else i && i({
          success: cc11001100_hook("success", !1, "object-key-init"),
          id: cc11001100_hook("id", e, "object-key-init")
        });
      },
      getObjectById: function (e) {
        return Q.w3 ? o(e) : void 0;
      },
      embedSWF: function (e, t, i, a, r, o, d, f, c, p) {
        var v = cc11001100_hook("v", h(t), "var-init"),
          y = cc11001100_hook("y", {
            success: cc11001100_hook("success", !1, "object-key-init"),
            id: cc11001100_hook("id", v, "object-key-init")
          }, "var-init");
        Q.w3 && !(Q.wk && Q.wk < 312) && e && t && i && a && r ? (A(v, !1), n(function () {
          i += cc11001100_hook("i", "", "assign"), a += cc11001100_hook("a", "", "assign");
          var n = cc11001100_hook("n", {}, "var-init");
          if (c && typeof c === x) for (var h in c) n[h] = cc11001100_hook("n[h]", c[h], "assign");
          n.data = cc11001100_hook("n.data", e, "assign"), n.width = cc11001100_hook("n.width", i, "assign"), n.height = cc11001100_hook("n.height", a, "assign");
          var m = cc11001100_hook("m", {}, "var-init");
          if (f && typeof f === x) for (var g in f) m[g] = cc11001100_hook("m[g]", f[g], "assign");
          if (d && typeof d === x) for (var w in d) if (d.hasOwnProperty(w)) {
            var b = cc11001100_hook("b", q ? encodeURIComponent(w) : w, "var-init"),
              C = cc11001100_hook("C", q ? encodeURIComponent(d[w]) : d[w], "var-init");
            typeof m.flashvars !== O ? m.flashvars += cc11001100_hook("m.flashvars", "&" + b + "=" + C, "assign") : m.flashvars = cc11001100_hook("m.flashvars", b + "=" + C, "assign");
          }
          if (E(r)) {
            var S = cc11001100_hook("S", u(n, m, t), "var-init");
            n.id == v && A(v, !0), y.success = cc11001100_hook("y.success", !0, "assign"), y.ref = cc11001100_hook("y.ref", S, "assign"), y.id = cc11001100_hook("y.id", S.id, "assign");
          } else {
            if (o && l()) return n.data = cc11001100_hook("n.data", o, "assign"), void s(n, m, t, p);
            A(v, !0);
          }
          p && p(y);
        })) : p && p(y);
      },
      switchOffAutoHideShow: function () {
        Z = cc11001100_hook("Z", !1, "assign");
      },
      enableUriEncoding: function (e) {
        q = cc11001100_hook("q", typeof e === O ? !0 : e, "assign");
      },
      ua: cc11001100_hook("ua", Q, "object-key-init"),
      getFlashPlayerVersion: function () {
        return {
          major: cc11001100_hook("major", Q.pv[0], "object-key-init"),
          minor: cc11001100_hook("minor", Q.pv[1], "object-key-init"),
          release: cc11001100_hook("release", Q.pv[2], "object-key-init")
        };
      },
      hasFlashPlayerVersion: cc11001100_hook("hasFlashPlayerVersion", E, "object-key-init"),
      createSWF: function (e, t, n) {
        return Q.w3 ? u(e, t, n) : void 0;
      },
      showExpressInstall: function (e, t, n, i) {
        Q.w3 && l() && s(e, t, n, i);
      },
      removeSWF: function (e) {
        Q.w3 && v(e);
      },
      createCSS: function (e, t, n, i) {
        Q.w3 && C(e, t, n, i);
      },
      addDomLoadEvent: cc11001100_hook("addDomLoadEvent", n, "object-key-init"),
      addLoadEvent: cc11001100_hook("addLoadEvent", i, "object-key-init"),
      getQueryParamValue: function (e) {
        var t = cc11001100_hook("t", R.location.search || R.location.hash, "var-init");
        if (t) {
          if (/\?/.test(t) && (t = cc11001100_hook("t", t.split("?")[1], "assign")), !e) return S(t);
          for (var n = cc11001100_hook("n", t.split("&"), "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < n.length; i++) if (n[i].substring(0, n[i].indexOf("=")) == e) return S(n[i].substring(n[i].indexOf("=") + 1));
        }
        return "";
      },
      expressInstallCallback: function () {
        if (z) {
          var e = cc11001100_hook("e", m(j), "var-init");
          e && T && (e.parentNode.replaceChild(T, e), N && (A(N, !0), Q.ie && (T.style.display = cc11001100_hook("T.style.display", "block", "assign"))), k && k(B)), z = cc11001100_hook("z", !1, "assign");
        }
      },
      version: cc11001100_hook("version", "2.3", "object-key-init")
    };
  }(), "var-init");
  "function" == typeof define && define("plugins/swfobject", ["require"], function () {
    return e;
  });
}();