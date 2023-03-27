!function (e, t) {
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", e.length, "var-init"),
      n = cc11001100_hook("n", ct.type(e), "var-init");
    return ct.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }
  function r(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", kt[e] = cc11001100_hook("kt[e]", {}, "assign"), "var-init");
    return ct.each(e.match(pt) || [], function (e, n) {
      t[n] = cc11001100_hook("t[n]", !0, "assign");
    }), t;
  }
  function i(e, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    if (ct.acceptData(e)) {
      var o,
        a,
        s = cc11001100_hook("s", ct.expando, "var-init"),
        u = cc11001100_hook("u", e.nodeType, "var-init"),
        l = cc11001100_hook("l", u ? ct.cache : e, "var-init"),
        c = cc11001100_hook("c", u ? e[s] : e[s] && s, "var-init");
      if (c && l[c] && (i || l[c].data) || r !== t || "string" != typeof n) return c || (c = cc11001100_hook("c", u ? e[s] = cc11001100_hook("e[s]", tt.pop() || ct.guid++, "assign") : s, "assign")), l[c] || (l[c] = cc11001100_hook("l[c]", u ? {} : {
        toJSON: cc11001100_hook("toJSON", ct.noop, "object-key-init")
      }, "assign")), ("object" == typeof n || "function" == typeof n) && (i ? l[c] = cc11001100_hook("l[c]", ct.extend(l[c], n), "assign") : l[c].data = cc11001100_hook("l[c].data", ct.extend(l[c].data, n), "assign")), a = cc11001100_hook("a", l[c], "assign"), i || (a.data || (a.data = cc11001100_hook("a.data", {}, "assign")), a = cc11001100_hook("a", a.data, "assign")), r !== t && (a[ct.camelCase(n)] = cc11001100_hook("a[ct.camelCase(n)]", r, "assign")), "string" == typeof n ? (o = cc11001100_hook("o", a[n], "assign"), null == o && (o = cc11001100_hook("o", a[ct.camelCase(n)], "assign"))) : o = cc11001100_hook("o", a, "assign"), o;
    }
  }
  function o(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (ct.acceptData(e)) {
      var r,
        i,
        o = cc11001100_hook("o", e.nodeType, "var-init"),
        a = cc11001100_hook("a", o ? ct.cache : e, "var-init"),
        u = cc11001100_hook("u", o ? e[ct.expando] : ct.expando, "var-init");
      if (a[u]) {
        if (t && (r = cc11001100_hook("r", n ? a[u] : a[u].data, "assign"))) {
          ct.isArray(t) ? t = cc11001100_hook("t", t.concat(ct.map(t, ct.camelCase)), "assign") : t in r ? t = cc11001100_hook("t", [t], "assign") : (t = cc11001100_hook("t", ct.camelCase(t), "assign"), t = cc11001100_hook("t", t in r ? [t] : t.split(" "), "assign")), i = cc11001100_hook("i", t.length, "assign");
          for (; i--;) delete r[t[i]];
          if (n ? !s(r) : !ct.isEmptyObject(r)) return;
        }
        (n || (delete a[u].data, s(a[u]))) && (o ? ct.cleanData([e], !0) : ct.support.deleteExpando || a != a.window ? delete a[u] : a[u] = cc11001100_hook("a[u]", null, "assign"));
      }
    }
  }
  function a(e, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    if (r === t && 1 === e.nodeType) {
      var i = cc11001100_hook("i", "data-" + n.replace(St, "-$1").toLowerCase(), "var-init");
      if (r = cc11001100_hook("r", e.getAttribute(i), "assign"), "string" == typeof r) {
        try {
          r = cc11001100_hook("r", "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Et.test(r) ? ct.parseJSON(r) : r, "assign");
        } catch (o) {}
        ct.data(e, n, r);
      } else r = cc11001100_hook("r", t, "assign");
    }
    return r;
  }
  function s(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t;
    for (t in e) if (("data" !== t || !ct.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function u() {
    return !0;
  }
  function l() {
    return !1;
  }
  function c() {
    try {
      return G.activeElement;
    } catch (e) {}
  }
  function f(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    do e = cc11001100_hook("e", e[t], "assign"); while (e && 1 !== e.nodeType);
    return e;
  }
  function p(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    if (ct.isFunction(t)) return ct.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });
    if (t.nodeType) return ct.grep(e, function (e) {
      return e === t !== n;
    });
    if ("string" == typeof t) {
      if ($t.test(t)) return ct.filter(t, e, n);
      t = cc11001100_hook("t", ct.filter(t, e), "assign");
    }
    return ct.grep(e, function (e) {
      return ct.inArray(e, t) >= 0 !== n;
    });
  }
  function d(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", Ut.split("|"), "var-init"),
      n = cc11001100_hook("n", e.createDocumentFragment(), "var-init");
    if (n.createElement) for (; t.length;) n.createElement(t.pop());
    return n;
  }
  function h(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return ct.nodeName(e, "table") && ct.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }
  function g(e) {
    cc11001100_hook("e", e, "function-parameter");
    return e.type = cc11001100_hook("e.type", (null !== ct.find.attr(e, "type")) + "/" + e.type, "assign"), e;
  }
  function m(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", on.exec(e.type), "var-init");
    return t ? e.type = cc11001100_hook("e.type", t[1], "assign") : e.removeAttribute("type"), e;
  }
  function y(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n, r = cc11001100_hook("r", 0, "var-init"); null != (n = cc11001100_hook("n", e[r], "assign")); r++) ct._data(n, "globalEval", !t || ct._data(t[r], "globalEval"));
  }
  function v(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (1 === t.nodeType && ct.hasData(e)) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", ct._data(e), "var-init"),
        a = cc11001100_hook("a", ct._data(t, o), "var-init"),
        s = cc11001100_hook("s", o.events, "var-init");
      if (s) {
        delete a.handle, a.events = cc11001100_hook("a.events", {}, "assign");
        for (n in s) for (r = cc11001100_hook("r", 0, "assign"), i = cc11001100_hook("i", s[n].length, "assign"); i > r; r++) ct.event.add(t, n, s[n][r]);
      }
      a.data && (a.data = cc11001100_hook("a.data", ct.extend({}, a.data), "assign"));
    }
  }
  function b(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i;
    if (1 === t.nodeType) {
      if (n = cc11001100_hook("n", t.nodeName.toLowerCase(), "assign"), !ct.support.noCloneEvent && t[ct.expando]) {
        i = cc11001100_hook("i", ct._data(t), "assign");
        for (r in i.events) ct.removeEvent(t, r, i.handle);
        t.removeAttribute(ct.expando);
      }
      "script" === n && t.text !== e.text ? (g(t).text = cc11001100_hook("g(t).text", e.text, "assign"), m(t)) : "object" === n ? (t.parentNode && (t.outerHTML = cc11001100_hook("t.outerHTML", e.outerHTML, "assign")), ct.support.html5Clone && e.innerHTML && !ct.trim(t.innerHTML) && (t.innerHTML = cc11001100_hook("t.innerHTML", e.innerHTML, "assign"))) : "input" === n && tn.test(e.type) ? (t.defaultChecked = cc11001100_hook("t.defaultChecked", t.checked = cc11001100_hook("t.checked", e.checked, "assign"), "assign"), t.value !== e.value && (t.value = cc11001100_hook("t.value", e.value, "assign"))) : "option" === n ? t.defaultSelected = cc11001100_hook("t.defaultSelected", t.selected = cc11001100_hook("t.selected", e.defaultSelected, "assign"), "assign") : ("input" === n || "textarea" === n) && (t.defaultValue = cc11001100_hook("t.defaultValue", e.defaultValue, "assign"));
    }
  }
  function x(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", 0, "var-init"),
      a = cc11001100_hook("a", typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t, "var-init");
    if (!a) for (a = cc11001100_hook("a", [], "assign"), r = cc11001100_hook("r", e.childNodes || e, "assign"); null != (i = cc11001100_hook("i", r[o], "assign")); o++) !n || ct.nodeName(i, n) ? a.push(i) : ct.merge(a, x(i, n));
    return n === t || n && ct.nodeName(e, n) ? ct.merge([e], a) : a;
  }
  function T(e) {
    cc11001100_hook("e", e, "function-parameter");
    tn.test(e.type) && (e.defaultChecked = cc11001100_hook("e.defaultChecked", e.checked, "assign"));
  }
  function w(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    if (t in e) return t;
    for (var n = cc11001100_hook("n", t.charAt(0).toUpperCase() + t.slice(1), "var-init"), r = cc11001100_hook("r", t, "var-init"), i = cc11001100_hook("i", kn.length, "var-init"); i--;) if (t = cc11001100_hook("t", kn[i] + n, "assign"), t in e) return t;
    return r;
  }
  function C(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    return e = cc11001100_hook("e", t || e, "assign"), "none" === ct.css(e, "display") || !ct.contains(e.ownerDocument, e);
  }
  function N(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    for (var n, r, i, o = cc11001100_hook("o", [], "var-init"), a = cc11001100_hook("a", 0, "var-init"), s = cc11001100_hook("s", e.length, "var-init"); s > a; a++) r = cc11001100_hook("r", e[a], "assign"), r.style && (o[a] = cc11001100_hook("o[a]", ct._data(r, "olddisplay"), "assign"), n = cc11001100_hook("n", r.style.display, "assign"), t ? (o[a] || "none" !== n || (r.style.display = cc11001100_hook("r.style.display", "", "assign")), "" === r.style.display && C(r) && (o[a] = cc11001100_hook("o[a]", ct._data(r, "olddisplay", A(r.nodeName)), "assign"))) : o[a] || (i = cc11001100_hook("i", C(r), "assign"), (n && "none" !== n || !i) && ct._data(r, "olddisplay", i ? n : ct.css(r, "display"))));
    for (a = cc11001100_hook("a", 0, "assign"); s > a; a++) r = cc11001100_hook("r", e[a], "assign"), r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = cc11001100_hook("r.style.display", t ? o[a] || "" : "none", "assign")));
    return e;
  }
  function k(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", vn.exec(t), "var-init");
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function E(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    for (var o = cc11001100_hook("o", n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, "var-init"), a = cc11001100_hook("a", 0, "var-init"); 4 > o; o += cc11001100_hook("o", 2, "assign")) "margin" === n && (a += cc11001100_hook("a", ct.css(e, n + Nn[o], !0, i), "assign")), r ? ("content" === n && (a -= cc11001100_hook("a", ct.css(e, "padding" + Nn[o], !0, i), "assign")), "margin" !== n && (a -= cc11001100_hook("a", ct.css(e, "border" + Nn[o] + "Width", !0, i), "assign"))) : (a += cc11001100_hook("a", ct.css(e, "padding" + Nn[o], !0, i), "assign"), "padding" !== n && (a += cc11001100_hook("a", ct.css(e, "border" + Nn[o] + "Width", !0, i), "assign")));
    return a;
  }
  function S(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r = cc11001100_hook("r", !0, "var-init"),
      i = cc11001100_hook("i", "width" === t ? e.offsetWidth : e.offsetHeight, "var-init"),
      o = cc11001100_hook("o", fn(e), "var-init"),
      a = cc11001100_hook("a", ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, o), "var-init");
    if (0 >= i || null == i) {
      if (i = cc11001100_hook("i", pn(e, t, o), "assign"), (0 > i || null == i) && (i = cc11001100_hook("i", e.style[t], "assign")), bn.test(i)) return i;
      r = cc11001100_hook("r", a && (ct.support.boxSizingReliable || i === e.style[t]), "assign"), i = cc11001100_hook("i", parseFloat(i) || 0, "assign");
    }
    return i + E(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }
  function A(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", G, "var-init"),
      n = cc11001100_hook("n", Tn[e], "var-init");
    return n || (n = cc11001100_hook("n", j(e, t), "assign"), "none" !== n && n || (cn = cc11001100_hook("cn", (cn || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), "assign"), t = cc11001100_hook("t", (cn[0].contentWindow || cn[0].contentDocument).document, "assign"), t.write("<!doctype html><html><body>"), t.close(), n = cc11001100_hook("n", j(e, t), "assign"), cn.detach()), Tn[e] = cc11001100_hook("Tn[e]", n, "assign")), n;
  }
  function j(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n = cc11001100_hook("n", ct(t.createElement(e)).appendTo(t.body), "var-init"),
      r = cc11001100_hook("r", ct.css(n[0], "display"), "var-init");
    return n.remove(), r;
  }
  function D(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i;
    if (ct.isArray(t)) ct.each(t, function (t, i) {
      n || Sn.test(e) ? r(e, i) : D(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== ct.type(t)) r(e, t);else for (i in t) D(e + "[" + i + "]", t[i], n, r);
  }
  function L(e) {
    cc11001100_hook("e", e, "function-parameter");
    return function (t, n) {
      "string" != typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", "*", "assign"));
      var r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t.toLowerCase().match(pt) || [], "var-init");
      if (ct.isFunction(n)) for (; r = cc11001100_hook("r", o[i++], "assign");) "+" === r[0] ? (r = cc11001100_hook("r", r.slice(1) || "*", "assign"), (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).unshift(n)) : (e[r] = cc11001100_hook("e[r]", e[r] || [], "assign")).push(n);
    };
  }
  function H(e, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    function o(u) {
      cc11001100_hook("u", u, "function-parameter");
      var l;
      return a[u] = cc11001100_hook("a[u]", !0, "assign"), ct.each(e[u] || [], function (e, u) {
        var c = cc11001100_hook("c", u(n, r, i), "var-init");
        return "string" != typeof c || s || a[c] ? s ? !(l = cc11001100_hook("l", c, "assign")) : t : (n.dataTypes.unshift(c), o(c), !1);
      }), l;
    }
    var a = cc11001100_hook("a", {}, "var-init"),
      s = cc11001100_hook("s", e === zn, "var-init");
    return o(n.dataTypes[0]) || !a["*"] && o("*");
  }
  function q(e, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", ct.ajaxSettings.flatOptions || {}, "var-init");
    for (i in n) n[i] !== t && ((o[i] ? e : r || (r = cc11001100_hook("r", {}, "assign")))[i] = cc11001100_hook("(o[i] ? e : r || (r = {}))[i]", n[i], "assign"));
    return r && ct.extend(!0, e, r), e;
  }
  function _(e, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    for (var i, o, a, s, u = cc11001100_hook("u", e.contents, "var-init"), l = cc11001100_hook("l", e.dataTypes, "var-init"); "*" === l[0];) l.shift(), o === t && (o = cc11001100_hook("o", e.mimeType || n.getResponseHeader("Content-Type"), "assign"));
    if (o) for (s in u) if (u[s] && u[s].test(o)) {
      l.unshift(s);
      break;
    }
    if (l[0] in r) a = cc11001100_hook("a", l[0], "assign");else {
      for (s in r) {
        if (!l[0] || e.converters[s + " " + l[0]]) {
          a = cc11001100_hook("a", s, "assign");
          break;
        }
        i || (i = cc11001100_hook("i", s, "assign"));
      }
      a = cc11001100_hook("a", a || i, "assign");
    }
    return a ? (a !== l[0] && l.unshift(a), r[a]) : t;
  }
  function M(e, t, n, r) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    var i,
      o,
      a,
      s,
      u,
      l = cc11001100_hook("l", {}, "var-init"),
      c = cc11001100_hook("c", e.dataTypes.slice(), "var-init");
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = cc11001100_hook("l[a.toLowerCase()]", e.converters[a], "assign");
    for (o = cc11001100_hook("o", c.shift(), "assign"); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = cc11001100_hook("n[e.responseFields[o]]", t, "assign")), !u && r && e.dataFilter && (t = cc11001100_hook("t", e.dataFilter(t, e.dataType), "assign")), u = cc11001100_hook("u", o, "assign"), o = cc11001100_hook("o", c.shift(), "assign")) if ("*" === o) o = cc11001100_hook("o", u, "assign");else if ("*" !== u && u !== o) {
      if (a = cc11001100_hook("a", l[u + " " + o] || l["* " + o], "assign"), !a) for (i in l) if (s = cc11001100_hook("s", i.split(" "), "assign"), s[1] === o && (a = cc11001100_hook("a", l[u + " " + s[0]] || l["* " + s[0]], "assign"))) {
        a === !0 ? a = cc11001100_hook("a", l[i], "assign") : l[i] !== !0 && (o = cc11001100_hook("o", s[0], "assign"), c.unshift(s[1]));
        break;
      }
      if (a !== !0) if (a && e["throws"]) t = cc11001100_hook("t", a(t), "assign");else try {
        t = cc11001100_hook("t", a(t), "assign");
      } catch (f) {
        return {
          state: cc11001100_hook("state", "parsererror", "object-key-init"),
          error: cc11001100_hook("error", a ? f : "No conversion from " + u + " to " + o, "object-key-init")
        };
      }
    }
    return {
      state: cc11001100_hook("state", "success", "object-key-init"),
      data: cc11001100_hook("data", t, "object-key-init")
    };
  }
  function O() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function F() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  function B() {
    return setTimeout(function () {
      Zn = cc11001100_hook("Zn", t, "assign");
    }), Zn = cc11001100_hook("Zn", ct.now(), "assign");
  }
  function P(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    for (var r, i = cc11001100_hook("i", (or[t] || []).concat(or["*"]), "var-init"), o = cc11001100_hook("o", 0, "var-init"), a = cc11001100_hook("a", i.length, "var-init"); a > o; o++) if (r = cc11001100_hook("r", i[o].call(n, t, e), "assign")) return r;
  }
  function R(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o = cc11001100_hook("o", 0, "var-init"),
      a = cc11001100_hook("a", ir.length, "var-init"),
      s = cc11001100_hook("s", ct.Deferred().always(function () {
        delete u.elem;
      }), "var-init"),
      u = function () {
        if (i) return !1;
        for (var t = cc11001100_hook("t", Zn || B(), "var-init"), n = cc11001100_hook("n", Math.max(0, l.startTime + l.duration - t), "var-init"), r = cc11001100_hook("r", n / l.duration || 0, "var-init"), o = cc11001100_hook("o", 1 - r, "var-init"), a = cc11001100_hook("a", 0, "var-init"), u = cc11001100_hook("u", l.tweens.length, "var-init"); u > a; a++) l.tweens[a].run(o);
        return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1);
      },
      l = cc11001100_hook("l", s.promise({
        elem: cc11001100_hook("elem", e, "object-key-init"),
        props: cc11001100_hook("props", ct.extend({}, t), "object-key-init"),
        opts: cc11001100_hook("opts", ct.extend(!0, {
          specialEasing: {}
        }, n), "object-key-init"),
        originalProperties: cc11001100_hook("originalProperties", t, "object-key-init"),
        originalOptions: cc11001100_hook("originalOptions", n, "object-key-init"),
        startTime: cc11001100_hook("startTime", Zn || B(), "object-key-init"),
        duration: cc11001100_hook("duration", n.duration, "object-key-init"),
        tweens: cc11001100_hook("tweens", [], "object-key-init"),
        createTween: function (t, n) {
          var r = cc11001100_hook("r", ct.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing), "var-init");
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = cc11001100_hook("n", 0, "var-init"),
            r = cc11001100_hook("r", t ? l.tweens.length : 0, "var-init");
          if (i) return this;
          for (i = cc11001100_hook("i", !0, "assign"); r > n; n++) l.tweens[n].run(1);
          return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this;
        }
      }), "var-init"),
      c = cc11001100_hook("c", l.props, "var-init");
    for (W(c, l.opts.specialEasing); a > o; o++) if (r = cc11001100_hook("r", ir[o].call(l, e, c, l.opts), "assign")) return r;
    return ct.map(c, P, l), ct.isFunction(l.opts.start) && l.opts.start.call(e, l), ct.fx.timer(ct.extend(u, {
      elem: cc11001100_hook("elem", e, "object-key-init"),
      anim: cc11001100_hook("anim", l, "object-key-init"),
      queue: cc11001100_hook("queue", l.opts.queue, "object-key-init")
    })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
  }
  function W(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n, r, i, o, a;
    for (n in e) if (r = cc11001100_hook("r", ct.camelCase(n), "assign"), i = cc11001100_hook("i", t[r], "assign"), o = cc11001100_hook("o", e[n], "assign"), ct.isArray(o) && (i = cc11001100_hook("i", o[1], "assign"), o = cc11001100_hook("o", e[n] = cc11001100_hook("e[n]", o[0], "assign"), "assign")), n !== r && (e[r] = cc11001100_hook("e[r]", o, "assign"), delete e[n]), a = cc11001100_hook("a", ct.cssHooks[r], "assign"), a && "expand" in a) {
      o = cc11001100_hook("o", a.expand(o), "assign"), delete e[r];
      for (n in o) n in e || (e[n] = cc11001100_hook("e[n]", o[n], "assign"), t[n] = cc11001100_hook("t[n]", i, "assign"));
    } else t[r] = cc11001100_hook("t[r]", i, "assign");
  }
  function $(e, t, n) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    var r,
      i,
      o,
      a,
      s,
      u,
      l = cc11001100_hook("l", this, "var-init"),
      c = cc11001100_hook("c", {}, "var-init"),
      f = cc11001100_hook("f", e.style, "var-init"),
      p = cc11001100_hook("p", e.nodeType && C(e), "var-init"),
      d = cc11001100_hook("d", ct._data(e, "fxshow"), "var-init");
    n.queue || (s = cc11001100_hook("s", ct._queueHooks(e, "fx"), "assign"), null == s.unqueued && (s.unqueued = cc11001100_hook("s.unqueued", 0, "assign"), u = cc11001100_hook("u", s.empty.fire, "assign"), s.empty.fire = cc11001100_hook("s.empty.fire", function () {
      s.unqueued || u();
    }, "assign")), s.unqueued++, l.always(function () {
      l.always(function () {
        s.unqueued--, ct.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = cc11001100_hook("n.overflow", [f.overflow, f.overflowX, f.overflowY], "assign"), "inline" === ct.css(e, "display") && "none" === ct.css(e, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = cc11001100_hook("f.zoom", 1, "assign") : f.display = cc11001100_hook("f.display", "inline-block", "assign"))), n.overflow && (f.overflow = cc11001100_hook("f.overflow", "hidden", "assign"), ct.support.shrinkWrapBlocks || l.always(function () {
      f.overflow = cc11001100_hook("f.overflow", n.overflow[0], "assign"), f.overflowX = cc11001100_hook("f.overflowX", n.overflow[1], "assign"), f.overflowY = cc11001100_hook("f.overflowY", n.overflow[2], "assign");
    }));
    for (r in t) if (i = cc11001100_hook("i", t[r], "assign"), tr.exec(i)) {
      if (delete t[r], o = cc11001100_hook("o", o || "toggle" === i, "assign"), i === (p ? "hide" : "show")) continue;
      c[r] = cc11001100_hook("c[r]", d && d[r] || ct.style(e, r), "assign");
    }
    if (!ct.isEmptyObject(c)) {
      d ? "hidden" in d && (p = cc11001100_hook("p", d.hidden, "assign")) : d = cc11001100_hook("d", ct._data(e, "fxshow", {}), "assign"), o && (d.hidden = cc11001100_hook("d.hidden", !p, "assign")), p ? ct(e).show() : l.done(function () {
        ct(e).hide();
      }), l.done(function () {
        var t;
        ct._removeData(e, "fxshow");
        for (t in c) ct.style(e, t, c[t]);
      });
      for (r in c) a = cc11001100_hook("a", P(p ? d[r] : 0, r, l), "assign"), r in d || (d[r] = cc11001100_hook("d[r]", a.start, "assign"), p && (a.end = cc11001100_hook("a.end", a.start, "assign"), a.start = cc11001100_hook("a.start", "width" === r || "height" === r ? 1 : 0, "assign")));
    }
  }
  function I(e, t, n, r, i) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("r", r, "function-parameter");
    cc11001100_hook("i", i, "function-parameter");
    return new I.prototype.init(e, t, n, r, i);
  }
  function z(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    var n,
      r = cc11001100_hook("r", {
        height: cc11001100_hook("height", e, "object-key-init")
      }, "var-init"),
      i = cc11001100_hook("i", 0, "var-init");
    for (t = cc11001100_hook("t", t ? 1 : 0, "assign"); 4 > i; i += cc11001100_hook("i", 2 - t, "assign")) n = cc11001100_hook("n", Nn[i], "assign"), r["margin" + n] = cc11001100_hook("r[\"margin\" + n]", r["padding" + n] = cc11001100_hook("r[\"padding\" + n]", e, "assign"), "assign");
    return t && (r.opacity = cc11001100_hook("r.opacity", r.width = cc11001100_hook("r.width", e, "assign"), "assign")), r;
  }
  function X(e) {
    cc11001100_hook("e", e, "function-parameter");
    return ct.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1;
  }
  var U,
    V,
    Y = cc11001100_hook("Y", typeof t, "var-init"),
    J = cc11001100_hook("J", e.location, "var-init"),
    G = cc11001100_hook("G", e.document, "var-init"),
    Q = cc11001100_hook("Q", G.documentElement, "var-init"),
    K = cc11001100_hook("K", e.jQuery, "var-init"),
    Z = cc11001100_hook("Z", e.$, "var-init"),
    et = cc11001100_hook("et", {}, "var-init"),
    tt = cc11001100_hook("tt", [], "var-init"),
    nt = cc11001100_hook("nt", "1.10.2", "var-init"),
    rt = cc11001100_hook("rt", tt.concat, "var-init"),
    it = cc11001100_hook("it", tt.push, "var-init"),
    ot = cc11001100_hook("ot", tt.slice, "var-init"),
    at = cc11001100_hook("at", tt.indexOf, "var-init"),
    st = cc11001100_hook("st", et.toString, "var-init"),
    ut = cc11001100_hook("ut", et.hasOwnProperty, "var-init"),
    lt = cc11001100_hook("lt", nt.trim, "var-init"),
    ct = function (e, t) {
      return new ct.fn.init(e, t, V);
    },
    ft = cc11001100_hook("ft", /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, "var-init"),
    pt = cc11001100_hook("pt", /\S+/g, "var-init"),
    dt = cc11001100_hook("dt", /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "var-init"),
    ht = cc11001100_hook("ht", /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, "var-init"),
    gt = cc11001100_hook("gt", /^<(\w+)\s*\/?>(?:<\/\1>|)$/, "var-init"),
    mt = cc11001100_hook("mt", /^[\],:{}\s]*$/, "var-init"),
    yt = cc11001100_hook("yt", /(?:^|:|,)(?:\s*\[)+/g, "var-init"),
    vt = cc11001100_hook("vt", /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, "var-init"),
    bt = cc11001100_hook("bt", /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, "var-init"),
    xt = cc11001100_hook("xt", /^-ms-/, "var-init"),
    Tt = cc11001100_hook("Tt", /-([\da-z])/gi, "var-init"),
    wt = function (e, t) {
      return t.toUpperCase();
    },
    Ct = function (e) {
      (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Nt(), ct.ready());
    },
    Nt = function () {
      G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Ct, !1), e.removeEventListener("load", Ct, !1)) : (G.detachEvent("onreadystatechange", Ct), e.detachEvent("onload", Ct));
    };
  ct.fn = cc11001100_hook("ct.fn", ct.prototype = cc11001100_hook("ct.prototype", {
    jquery: cc11001100_hook("jquery", nt, "object-key-init"),
    constructor: cc11001100_hook("constructor", ct, "object-key-init"),
    init: function (e, n, r) {
      var i, o;
      if (!e) return this;
      if ("string" == typeof e) {
        if (i = cc11001100_hook("i", "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : ht.exec(e), "assign"), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
        if (i[1]) {
          if (n = cc11001100_hook("n", n instanceof ct ? n[0] : n, "assign"), ct.merge(this, ct.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), gt.test(i[1]) && ct.isPlainObject(n)) for (i in n) ct.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
          return this;
        }
        if (o = cc11001100_hook("o", G.getElementById(i[2]), "assign"), o && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);
          this.length = cc11001100_hook("this.length", 1, "assign"), this[0] = cc11001100_hook("this[0]", o, "assign");
        }
        return this.context = cc11001100_hook("this.context", G, "assign"), this.selector = cc11001100_hook("this.selector", e, "assign"), this;
      }
      return e.nodeType ? (this.context = cc11001100_hook("this.context", this[0] = cc11001100_hook("this[0]", e, "assign"), "assign"), this.length = cc11001100_hook("this.length", 1, "assign"), this) : ct.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = cc11001100_hook("this.selector", e.selector, "assign"), this.context = cc11001100_hook("this.context", e.context, "assign")), ct.makeArray(e, this));
    },
    selector: cc11001100_hook("selector", "", "object-key-init"),
    length: cc11001100_hook("length", 0, "object-key-init"),
    toArray: function () {
      return ot.call(this);
    },
    get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    },
    pushStack: function (e) {
      var t = cc11001100_hook("t", ct.merge(this.constructor(), e), "var-init");
      return t.prevObject = cc11001100_hook("t.prevObject", this, "assign"), t.context = cc11001100_hook("t.context", this.context, "assign"), t;
    },
    each: function (e, t) {
      return ct.each(this, e, t);
    },
    ready: function (e) {
      return ct.ready.promise().done(e), this;
    },
    slice: function () {
      return this.pushStack(ot.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = cc11001100_hook("t", this.length, "var-init"),
        n = cc11001100_hook("n", +e + (0 > e ? t : 0), "var-init");
      return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    },
    map: function (e) {
      return this.pushStack(ct.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: cc11001100_hook("push", it, "object-key-init"),
    sort: cc11001100_hook("sort", [].sort, "object-key-init"),
    splice: cc11001100_hook("splice", [].splice, "object-key-init")
  }, "assign"), "assign"), ct.fn.init.prototype = cc11001100_hook("ct.fn.init.prototype", ct.fn, "assign"), ct.extend = cc11001100_hook("ct.extend", ct.fn.extend = cc11001100_hook("ct.fn.extend", function () {
    var e,
      n,
      r,
      i,
      o,
      a,
      s = cc11001100_hook("s", arguments[0] || {}, "var-init"),
      u = cc11001100_hook("u", 1, "var-init"),
      l = cc11001100_hook("l", arguments.length, "var-init"),
      c = cc11001100_hook("c", !1, "var-init");
    for ("boolean" == typeof s && (c = cc11001100_hook("c", s, "assign"), s = cc11001100_hook("s", arguments[1] || {}, "assign"), u = cc11001100_hook("u", 2, "assign")), "object" == typeof s || ct.isFunction(s) || (s = cc11001100_hook("s", {}, "assign")), l === u && (s = cc11001100_hook("s", this, "assign"), --u); l > u; u++) if (null != (o = cc11001100_hook("o", arguments[u], "assign"))) for (i in o) e = cc11001100_hook("e", s[i], "assign"), r = cc11001100_hook("r", o[i], "assign"), s !== r && (c && r && (ct.isPlainObject(r) || (n = cc11001100_hook("n", ct.isArray(r), "assign"))) ? (n ? (n = cc11001100_hook("n", !1, "assign"), a = cc11001100_hook("a", e && ct.isArray(e) ? e : [], "assign")) : a = cc11001100_hook("a", e && ct.isPlainObject(e) ? e : {}, "assign"), s[i] = cc11001100_hook("s[i]", ct.extend(c, a, r), "assign")) : r !== t && (s[i] = cc11001100_hook("s[i]", r, "assign")));
    return s;
  }, "assign"), "assign"), ct.extend({
    expando: cc11001100_hook("expando", "jQuery" + (nt + Math.random()).replace(/\D/g, ""), "object-key-init"),
    noConflict: function (t) {
      return e.$ === ct && (e.$ = cc11001100_hook("e.$", Z, "assign")), t && e.jQuery === ct && (e.jQuery = cc11001100_hook("e.jQuery", K, "assign")), ct;
    },
    isReady: cc11001100_hook("isReady", !1, "object-key-init"),
    readyWait: cc11001100_hook("readyWait", 1, "object-key-init"),
    holdReady: function (e) {
      e ? ct.readyWait++ : ct.ready(!0);
    },
    ready: function (e) {
      if (e === !0 ? ! --ct.readyWait : !ct.isReady) {
        if (!G.body) return setTimeout(ct.ready);
        ct.isReady = cc11001100_hook("ct.isReady", !0, "assign"), e !== !0 && --ct.readyWait > 0 || (U.resolveWith(G, [ct]), ct.fn.trigger && ct(G).trigger("ready").off("ready"));
      }
    },
    isFunction: function (e) {
      return "function" === ct.type(e);
    },
    isArray: cc11001100_hook("isArray", Array.isArray || function (e) {
      return "array" === ct.type(e);
    }, "object-key-init"),
    isWindow: function (e) {
      return null != e && e == e.window;
    },
    isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    },
    type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? et[st.call(e)] || "object" : typeof e;
    },
    isPlainObject: function (e) {
      var n;
      if (!e || "object" !== ct.type(e) || e.nodeType || ct.isWindow(e)) return !1;
      try {
        if (e.constructor && !ut.call(e, "constructor") && !ut.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (r) {
        return !1;
      }
      if (ct.support.ownLast) for (n in e) return ut.call(e, n);
      for (n in e);
      return n === t || ut.call(e, n);
    },
    isEmptyObject: function (e) {
      var t;
      for (t in e) return !1;
      return !0;
    },
    error: function (e) {
      throw Error(e);
    },
    parseHTML: function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = cc11001100_hook("n", t, "assign"), t = cc11001100_hook("t", !1, "assign")), t = cc11001100_hook("t", t || G, "assign");
      var r = cc11001100_hook("r", gt.exec(e), "var-init"),
        i = cc11001100_hook("i", !n && [], "var-init");
      return r ? [t.createElement(r[1])] : (r = cc11001100_hook("r", ct.buildFragment([e], t, i), "assign"), i && ct(i).remove(), ct.merge([], r.childNodes));
    },
    parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = cc11001100_hook("n", ct.trim(n), "assign"), n && mt.test(n.replace(vt, "@").replace(bt, "]").replace(yt, ""))) ? Function("return " + n)() : (ct.error("Invalid JSON: " + n), t);
    },
    parseXML: function (n) {
      var r, i;
      if (!n || "string" != typeof n) return null;
      try {
        e.DOMParser ? (i = cc11001100_hook("i", new DOMParser(), "assign"), r = cc11001100_hook("r", i.parseFromString(n, "text/xml"), "assign")) : (r = cc11001100_hook("r", new ActiveXObject("Microsoft.XMLDOM"), "assign"), r.async = cc11001100_hook("r.async", "false", "assign"), r.loadXML(n));
      } catch (o) {
        r = cc11001100_hook("r", t, "assign");
      }
      return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + n), r;
    },
    noop: function () {},
    globalEval: function (t) {
      t && ct.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    },
    camelCase: function (e) {
      return e.replace(xt, "ms-").replace(Tt, wt);
    },
    nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each: function (e, t, r) {
      var i,
        o = cc11001100_hook("o", 0, "var-init"),
        a = cc11001100_hook("a", e.length, "var-init"),
        s = cc11001100_hook("s", n(e), "var-init");
      if (r) {
        if (s) for (; a > o && (i = cc11001100_hook("i", t.apply(e[o], r), "assign"), i !== !1); o++);else for (o in e) if (i = cc11001100_hook("i", t.apply(e[o], r), "assign"), i === !1) break;
      } else if (s) for (; a > o && (i = cc11001100_hook("i", t.call(e[o], o, e[o]), "assign"), i !== !1); o++);else for (o in e) if (i = cc11001100_hook("i", t.call(e[o], o, e[o]), "assign"), i === !1) break;
      return e;
    },
    trim: cc11001100_hook("trim", lt && !lt.call("﻿ ") ? function (e) {
      return null == e ? "" : lt.call(e);
    } : function (e) {
      return null == e ? "" : (e + "").replace(dt, "");
    }, "object-key-init"),
    makeArray: function (e, t) {
      var r = cc11001100_hook("r", t || [], "var-init");
      return null != e && (n(Object(e)) ? ct.merge(r, "string" == typeof e ? [e] : e) : it.call(r, e)), r;
    },
    inArray: function (e, t, n) {
      var r;
      if (t) {
        if (at) return at.call(t, e, n);
        for (r = cc11001100_hook("r", t.length, "assign"), n = cc11001100_hook("n", n ? 0 > n ? Math.max(0, r + n) : n : 0, "assign"); r > n; n++) if (n in t && t[n] === e) return n;
      }
      return -1;
    },
    merge: function (e, n) {
      var r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", e.length, "var-init"),
        o = cc11001100_hook("o", 0, "var-init");
      if ("number" == typeof r) for (; r > o; o++) e[i++] = cc11001100_hook("e[i++]", n[o], "assign");else for (; n[o] !== t;) e[i++] = cc11001100_hook("e[i++]", n[o++], "assign");
      return e.length = cc11001100_hook("e.length", i, "assign"), e;
    },
    grep: function (e, t, n) {
      var r,
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", 0, "var-init"),
        a = cc11001100_hook("a", e.length, "var-init");
      for (n = cc11001100_hook("n", !!n, "assign"); a > o; o++) r = cc11001100_hook("r", !!t(e[o], o), "assign"), n !== r && i.push(e[o]);
      return i;
    },
    map: function (e, t, r) {
      var i,
        o = cc11001100_hook("o", 0, "var-init"),
        a = cc11001100_hook("a", e.length, "var-init"),
        s = cc11001100_hook("s", n(e), "var-init"),
        u = cc11001100_hook("u", [], "var-init");
      if (s) for (; a > o; o++) i = cc11001100_hook("i", t(e[o], o, r), "assign"), null != i && (u[u.length] = cc11001100_hook("u[u.length]", i, "assign"));else for (o in e) i = cc11001100_hook("i", t(e[o], o, r), "assign"), null != i && (u[u.length] = cc11001100_hook("u[u.length]", i, "assign"));
      return rt.apply([], u);
    },
    guid: cc11001100_hook("guid", 1, "object-key-init"),
    proxy: function (e, n) {
      var r, i, o;
      return "string" == typeof n && (o = cc11001100_hook("o", e[n], "assign"), n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", o, "assign")), ct.isFunction(e) ? (r = cc11001100_hook("r", ot.call(arguments, 2), "assign"), i = cc11001100_hook("i", function () {
        return e.apply(n || this, r.concat(ot.call(arguments)));
      }, "assign"), i.guid = cc11001100_hook("i.guid", e.guid = cc11001100_hook("e.guid", e.guid || ct.guid++, "assign"), "assign"), i) : t;
    },
    access: function (e, n, r, i, o, a, s) {
      var u = cc11001100_hook("u", 0, "var-init"),
        l = cc11001100_hook("l", e.length, "var-init"),
        c = cc11001100_hook("c", null == r, "var-init");
      if ("object" === ct.type(r)) {
        o = cc11001100_hook("o", !0, "assign");
        for (u in r) ct.access(e, n, u, r[u], !0, a, s);
      } else if (i !== t && (o = cc11001100_hook("o", !0, "assign"), ct.isFunction(i) || (s = cc11001100_hook("s", !0, "assign")), c && (s ? (n.call(e, i), n = cc11001100_hook("n", null, "assign")) : (c = cc11001100_hook("c", n, "assign"), n = cc11001100_hook("n", function (e, t, n) {
        return c.call(ct(e), n);
      }, "assign"))), n)) for (; l > u; u++) n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
      return o ? e : c ? n.call(e) : l ? n(e[0], r) : a;
    },
    now: function () {
      return new Date().getTime();
    },
    swap: function (e, t, n, r) {
      var i,
        o,
        a = cc11001100_hook("a", {}, "var-init");
      for (o in t) a[o] = cc11001100_hook("a[o]", e.style[o], "assign"), e.style[o] = cc11001100_hook("e.style[o]", t[o], "assign");
      i = cc11001100_hook("i", n.apply(e, r || []), "assign");
      for (o in t) e.style[o] = cc11001100_hook("e.style[o]", a[o], "assign");
      return i;
    }
  }), ct.ready.promise = cc11001100_hook("ct.ready.promise", function (t) {
    if (!U) if (U = cc11001100_hook("U", ct.Deferred(), "assign"), "complete" === G.readyState) setTimeout(ct.ready);else if (G.addEventListener) G.addEventListener("DOMContentLoaded", Ct, !1), e.addEventListener("load", Ct, !1);else {
      G.attachEvent("onreadystatechange", Ct), e.attachEvent("onload", Ct);
      var n = cc11001100_hook("n", !1, "var-init");
      try {
        n = cc11001100_hook("n", null == e.frameElement && G.documentElement, "assign");
      } catch (r) {}
      n && n.doScroll && function i() {
        if (!ct.isReady) {
          try {
            n.doScroll("left");
          } catch (e) {
            return setTimeout(i, 50);
          }
          Nt(), ct.ready();
        }
      }();
    }
    return U.promise(t);
  }, "assign"), ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    et["[object " + t + "]"] = cc11001100_hook("et[\"[object \" + t + \"]\"]", t.toLowerCase(), "assign");
  }), V = cc11001100_hook("V", ct(G), "assign"), function (e, t) {
    function n(e, t, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var i, o, a, s, u, l, c, f, h, g;
      if ((t ? t.ownerDocument || t : R) !== H && L(t), t = cc11001100_hook("t", t || H, "assign"), n = cc11001100_hook("n", n || [], "assign"), !e || "string" != typeof e) return n;
      if (1 !== (s = cc11001100_hook("s", t.nodeType, "assign")) && 9 !== s) return [];
      if (_ && !r) {
        if (i = cc11001100_hook("i", bt.exec(e), "assign")) if (a = cc11001100_hook("a", i[1], "assign")) {
          if (9 === s) {
            if (o = cc11001100_hook("o", t.getElementById(a), "assign"), !o || !o.parentNode) return n;
            if (o.id === a) return n.push(o), n;
          } else if (t.ownerDocument && (o = cc11001100_hook("o", t.ownerDocument.getElementById(a), "assign")) && B(t, o) && o.id === a) return n.push(o), n;
        } else {
          if (i[2]) return et.apply(n, t.getElementsByTagName(e)), n;
          if ((a = cc11001100_hook("a", i[3], "assign")) && C.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(a)), n;
        }
        if (C.qsa && (!M || !M.test(e))) {
          if (f = cc11001100_hook("f", c = cc11001100_hook("c", P, "assign"), "assign"), h = cc11001100_hook("h", t, "assign"), g = cc11001100_hook("g", 9 === s && e, "assign"), 1 === s && "object" !== t.nodeName.toLowerCase()) {
            for (l = cc11001100_hook("l", p(e), "assign"), (c = cc11001100_hook("c", t.getAttribute("id"), "assign")) ? f = cc11001100_hook("f", c.replace(wt, "\\$&"), "assign") : t.setAttribute("id", f), f = cc11001100_hook("f", "[id='" + f + "'] ", "assign"), u = cc11001100_hook("u", l.length, "assign"); u--;) l[u] = cc11001100_hook("l[u]", f + d(l[u]), "assign");
            h = cc11001100_hook("h", dt.test(e) && t.parentNode || t, "assign"), g = cc11001100_hook("g", l.join(","), "assign");
          }
          if (g) try {
            return et.apply(n, h.querySelectorAll(g)), n;
          } catch (m) {} finally {
            c || t.removeAttribute("id");
          }
        }
      }
      return T(e.replace(lt, "$1"), t, n, r);
    }
    function r() {
      function e(n, r) {
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        return t.push(n += cc11001100_hook("n", " ", "assign")) > k.cacheLength && delete e[t.shift()], e[n] = cc11001100_hook("e[n]", r, "assign");
      }
      var t = cc11001100_hook("t", [], "var-init");
      return e;
    }
    function i(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e[P] = cc11001100_hook("e[P]", !0, "assign"), e;
    }
    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", H.createElement("div"), "var-init");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = cc11001100_hook("t", null, "assign");
      }
    }
    function a(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      for (var n = cc11001100_hook("n", e.split("|"), "var-init"), r = cc11001100_hook("r", e.length, "var-init"); r--;) k.attrHandle[n[r]] = cc11001100_hook("k.attrHandle[n[r]]", t, "assign");
    }
    function s(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var n = cc11001100_hook("n", t && e, "var-init"),
        r = cc11001100_hook("r", n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J), "var-init");
      if (r) return r;
      if (n) for (; n = cc11001100_hook("n", n.nextSibling, "assign");) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function u(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
        return "input" === n && t.type === e;
      };
    }
    function l(e) {
      cc11001100_hook("e", e, "function-parameter");
      return function (t) {
        var n = cc11001100_hook("n", t.nodeName.toLowerCase(), "var-init");
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function c(e) {
      cc11001100_hook("e", e, "function-parameter");
      return i(function (t) {
        return t = cc11001100_hook("t", +t, "assign"), i(function (n, r) {
          for (var i, o = cc11001100_hook("o", e([], n.length, t), "var-init"), a = cc11001100_hook("a", o.length, "var-init"); a--;) n[i = cc11001100_hook("i", o[a], "assign")] && (n[i] = cc11001100_hook("n[i]", !(r[i] = cc11001100_hook("r[i]", n[i], "assign")), "assign"));
        });
      });
    }
    function f() {}
    function p(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = cc11001100_hook("c", z[e + " "], "var-init");
      if (c) return t ? 0 : c.slice(0);
      for (s = cc11001100_hook("s", e, "assign"), u = cc11001100_hook("u", [], "assign"), l = cc11001100_hook("l", k.preFilter, "assign"); s;) {
        (!r || (i = cc11001100_hook("i", ft.exec(s), "assign"))) && (i && (s = cc11001100_hook("s", s.slice(i[0].length) || s, "assign")), u.push(o = cc11001100_hook("o", [], "assign"))), r = cc11001100_hook("r", !1, "assign"), (i = cc11001100_hook("i", pt.exec(s), "assign")) && (r = cc11001100_hook("r", i.shift(), "assign"), o.push({
          value: cc11001100_hook("value", r, "object-key-init"),
          type: cc11001100_hook("type", i[0].replace(lt, " "), "object-key-init")
        }), s = cc11001100_hook("s", s.slice(r.length), "assign"));
        for (a in k.filter) !(i = cc11001100_hook("i", yt[a].exec(s), "assign")) || l[a] && !(i = cc11001100_hook("i", l[a](i), "assign")) || (r = cc11001100_hook("r", i.shift(), "assign"), o.push({
          value: cc11001100_hook("value", r, "object-key-init"),
          type: cc11001100_hook("type", a, "object-key-init"),
          matches: cc11001100_hook("matches", i, "object-key-init")
        }), s = cc11001100_hook("s", s.slice(r.length), "assign"));
        if (!r) break;
      }
      return t ? s.length : s ? n.error(e) : z(e, u).slice(0);
    }
    function d(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", e.length, "var-init"), r = cc11001100_hook("r", "", "var-init"); n > t; t++) r += cc11001100_hook("r", e[t].value, "assign");
      return r;
    }
    function h(e, t, n) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      var r = cc11001100_hook("r", t.dir, "var-init"),
        i = cc11001100_hook("i", n && "parentNode" === r, "var-init"),
        o = cc11001100_hook("o", $++, "var-init");
      return t.first ? function (t, n, o) {
        for (; t = cc11001100_hook("t", t[r], "assign");) if (1 === t.nodeType || i) return e(t, n, o);
      } : function (t, n, a) {
        var s,
          u,
          l,
          c = cc11001100_hook("c", W + " " + o, "var-init");
        if (a) {
          for (; t = cc11001100_hook("t", t[r], "assign");) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
        } else for (; t = cc11001100_hook("t", t[r], "assign");) if (1 === t.nodeType || i) if (l = cc11001100_hook("l", t[P] || (t[P] = cc11001100_hook("t[P]", {}, "assign")), "assign"), (u = cc11001100_hook("u", l[r], "assign")) && u[0] === c) {
          if ((s = cc11001100_hook("s", u[1], "assign")) === !0 || s === N) return s === !0;
        } else if (u = cc11001100_hook("u", l[r] = cc11001100_hook("l[r]", [c], "assign"), "assign"), u[1] = cc11001100_hook("u[1]", e(t, n, a) || N, "assign"), u[1] === !0) return !0;
      };
    }
    function g(e) {
      cc11001100_hook("e", e, "function-parameter");
      return e.length > 1 ? function (t, n, r) {
        for (var i = cc11001100_hook("i", e.length, "var-init"); i--;) if (!e[i](t, n, r)) return !1;
        return !0;
      } : e[0];
    }
    function m(e, t, n, r, i) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("i", i, "function-parameter");
      for (var o, a = cc11001100_hook("a", [], "var-init"), s = cc11001100_hook("s", 0, "var-init"), u = cc11001100_hook("u", e.length, "var-init"), l = cc11001100_hook("l", null != t, "var-init"); u > s; s++) (o = cc11001100_hook("o", e[s], "assign")) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
      return a;
    }
    function y(e, t, n, r, o, a) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      cc11001100_hook("o", o, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      return r && !r[P] && (r = cc11001100_hook("r", y(r), "assign")), o && !o[P] && (o = cc11001100_hook("o", y(o, a), "assign")), i(function (i, a, s, u) {
        var l,
          c,
          f,
          p = cc11001100_hook("p", [], "var-init"),
          d = cc11001100_hook("d", [], "var-init"),
          h = cc11001100_hook("h", a.length, "var-init"),
          g = cc11001100_hook("g", i || x(t || "*", s.nodeType ? [s] : s, []), "var-init"),
          y = cc11001100_hook("y", !e || !i && t ? g : m(g, p, e, s, u), "var-init"),
          v = cc11001100_hook("v", n ? o || (i ? e : h || r) ? [] : a : y, "var-init");
        if (n && n(y, v, s, u), r) for (l = cc11001100_hook("l", m(v, d), "assign"), r(l, [], s, u), c = cc11001100_hook("c", l.length, "assign"); c--;) (f = cc11001100_hook("f", l[c], "assign")) && (v[d[c]] = cc11001100_hook("v[d[c]]", !(y[d[c]] = cc11001100_hook("y[d[c]]", f, "assign")), "assign"));
        if (i) {
          if (o || e) {
            if (o) {
              for (l = cc11001100_hook("l", [], "assign"), c = cc11001100_hook("c", v.length, "assign"); c--;) (f = cc11001100_hook("f", v[c], "assign")) && l.push(y[c] = cc11001100_hook("y[c]", f, "assign"));
              o(null, v = cc11001100_hook("v", [], "assign"), l, u);
            }
            for (c = cc11001100_hook("c", v.length, "assign"); c--;) (f = cc11001100_hook("f", v[c], "assign")) && (l = cc11001100_hook("l", o ? nt.call(i, f) : p[c], "assign")) > -1 && (i[l] = cc11001100_hook("i[l]", !(a[l] = cc11001100_hook("a[l]", f, "assign")), "assign"));
          }
        } else v = cc11001100_hook("v", m(v === a ? v.splice(h, v.length) : v), "assign"), o ? o(null, a, v, u) : et.apply(a, v);
      });
    }
    function v(e) {
      cc11001100_hook("e", e, "function-parameter");
      for (var t, n, r, i = cc11001100_hook("i", e.length, "var-init"), o = cc11001100_hook("o", k.relative[e[0].type], "var-init"), a = cc11001100_hook("a", o || k.relative[" "], "var-init"), s = cc11001100_hook("s", o ? 1 : 0, "var-init"), u = cc11001100_hook("u", h(function (e) {
          return e === t;
        }, a, !0), "var-init"), l = cc11001100_hook("l", h(function (e) {
          return nt.call(t, e) > -1;
        }, a, !0), "var-init"), c = cc11001100_hook("c", [function (e, n, r) {
          return !o && (r || n !== j) || ((t = cc11001100_hook("t", n, "assign")).nodeType ? u(e, n, r) : l(e, n, r));
        }], "var-init"); i > s; s++) if (n = cc11001100_hook("n", k.relative[e[s].type], "assign")) c = cc11001100_hook("c", [h(g(c), n)], "assign");else {
        if (n = cc11001100_hook("n", k.filter[e[s].type].apply(null, e[s].matches), "assign"), n[P]) {
          for (r = cc11001100_hook("r", ++s, "assign"); i > r && !k.relative[e[r].type]; r++);
          return y(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({
            value: cc11001100_hook("value", " " === e[s - 2].type ? "*" : "", "object-key-init")
          })).replace(lt, "$1"), n, r > s && v(e.slice(s, r)), i > r && v(e = cc11001100_hook("e", e.slice(r), "assign")), i > r && d(e));
        }
        c.push(n);
      }
      return g(c);
    }
    function b(e, t) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      var r = cc11001100_hook("r", 0, "var-init"),
        o = cc11001100_hook("o", t.length > 0, "var-init"),
        a = cc11001100_hook("a", e.length > 0, "var-init"),
        s = function (i, s, u, l, c) {
          var f,
            p,
            d,
            h = cc11001100_hook("h", [], "var-init"),
            g = cc11001100_hook("g", 0, "var-init"),
            y = cc11001100_hook("y", "0", "var-init"),
            v = cc11001100_hook("v", i && [], "var-init"),
            b = cc11001100_hook("b", null != c, "var-init"),
            x = cc11001100_hook("x", j, "var-init"),
            T = cc11001100_hook("T", i || a && k.find.TAG("*", c && s.parentNode || s), "var-init"),
            w = cc11001100_hook("w", W += cc11001100_hook("W", null == x ? 1 : Math.random() || .1, "assign"), "var-init");
          for (b && (j = cc11001100_hook("j", s !== H && s, "assign"), N = cc11001100_hook("N", r, "assign")); null != (f = cc11001100_hook("f", T[y], "assign")); y++) {
            if (a && f) {
              for (p = cc11001100_hook("p", 0, "assign"); d = cc11001100_hook("d", e[p++], "assign");) if (d(f, s, u)) {
                l.push(f);
                break;
              }
              b && (W = cc11001100_hook("W", w, "assign"), N = cc11001100_hook("N", ++r, "assign"));
            }
            o && ((f = cc11001100_hook("f", !d && f, "assign")) && g--, i && v.push(f));
          }
          if (g += cc11001100_hook("g", y, "assign"), o && y !== g) {
            for (p = cc11001100_hook("p", 0, "assign"); d = cc11001100_hook("d", t[p++], "assign");) d(v, h, s, u);
            if (i) {
              if (g > 0) for (; y--;) v[y] || h[y] || (h[y] = cc11001100_hook("h[y]", K.call(l), "assign"));
              h = cc11001100_hook("h", m(h), "assign");
            }
            et.apply(l, h), b && !i && h.length > 0 && g + t.length > 1 && n.uniqueSort(l);
          }
          return b && (W = cc11001100_hook("W", w, "assign"), j = cc11001100_hook("j", x, "assign")), v;
        };
      return o ? i(s) : s;
    }
    function x(e, t, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      for (var i = cc11001100_hook("i", 0, "var-init"), o = cc11001100_hook("o", t.length, "var-init"); o > i; i++) n(e, t[i], r);
      return r;
    }
    function T(e, t, n, r) {
      cc11001100_hook("e", e, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      cc11001100_hook("n", n, "function-parameter");
      cc11001100_hook("r", r, "function-parameter");
      var i,
        o,
        a,
        s,
        u,
        l = cc11001100_hook("l", p(e), "var-init");
      if (!r && 1 === l.length) {
        if (o = cc11001100_hook("o", l[0] = cc11001100_hook("l[0]", l[0].slice(0), "assign"), "assign"), o.length > 2 && "ID" === (a = cc11001100_hook("a", o[0], "assign")).type && C.getById && 9 === t.nodeType && _ && k.relative[o[1].type]) {
          if (t = cc11001100_hook("t", (k.find.ID(a.matches[0].replace(Ct, Nt), t) || [])[0], "assign"), !t) return n;
          e = cc11001100_hook("e", e.slice(o.shift().value.length), "assign");
        }
        for (i = cc11001100_hook("i", yt.needsContext.test(e) ? 0 : o.length, "assign"); i-- && (a = cc11001100_hook("a", o[i], "assign"), !k.relative[s = cc11001100_hook("s", a.type, "assign")]);) if ((u = cc11001100_hook("u", k.find[s], "assign")) && (r = cc11001100_hook("r", u(a.matches[0].replace(Ct, Nt), dt.test(o[0].type) && t.parentNode || t), "assign"))) {
          if (o.splice(i, 1), e = cc11001100_hook("e", r.length && d(o), "assign"), !e) return et.apply(n, r), n;
          break;
        }
      }
      return A(e, l)(r, t, !_, n, dt.test(e)), n;
    }
    var w,
      C,
      N,
      k,
      E,
      S,
      A,
      j,
      D,
      L,
      H,
      q,
      _,
      M,
      O,
      F,
      B,
      P = cc11001100_hook("P", "sizzle" + -new Date(), "var-init"),
      R = cc11001100_hook("R", e.document, "var-init"),
      W = cc11001100_hook("W", 0, "var-init"),
      $ = cc11001100_hook("$", 0, "var-init"),
      I = cc11001100_hook("I", r(), "var-init"),
      z = cc11001100_hook("z", r(), "var-init"),
      X = cc11001100_hook("X", r(), "var-init"),
      U = cc11001100_hook("U", !1, "var-init"),
      V = function (e, t) {
        return e === t ? (U = cc11001100_hook("U", !0, "assign"), 0) : 0;
      },
      Y = cc11001100_hook("Y", typeof t, "var-init"),
      J = cc11001100_hook("J", 1 << 31, "var-init"),
      G = cc11001100_hook("G", {}.hasOwnProperty, "var-init"),
      Q = cc11001100_hook("Q", [], "var-init"),
      K = cc11001100_hook("K", Q.pop, "var-init"),
      Z = cc11001100_hook("Z", Q.push, "var-init"),
      et = cc11001100_hook("et", Q.push, "var-init"),
      tt = cc11001100_hook("tt", Q.slice, "var-init"),
      nt = cc11001100_hook("nt", Q.indexOf || function (e) {
        for (var t = cc11001100_hook("t", 0, "var-init"), n = cc11001100_hook("n", this.length, "var-init"); n > t; t++) if (this[t] === e) return t;
        return -1;
      }, "var-init"),
      rt = cc11001100_hook("rt", "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", "var-init"),
      it = cc11001100_hook("it", "[\\x20\\t\\r\\n\\f]", "var-init"),
      ot = cc11001100_hook("ot", "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", "var-init"),
      at = cc11001100_hook("at", ot.replace("w", "w#"), "var-init"),
      st = cc11001100_hook("st", "\\[" + it + "*(" + ot + ")" + it + "*(?:([*^$|!~]?=)" + it + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + at + ")|)|)" + it + "*\\]", "var-init"),
      ut = cc11001100_hook("ut", ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + st.replace(3, 8) + ")*)|.*)\\)|)", "var-init"),
      lt = cc11001100_hook("lt", RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"), "var-init"),
      ft = cc11001100_hook("ft", RegExp("^" + it + "*," + it + "*"), "var-init"),
      pt = cc11001100_hook("pt", RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"), "var-init"),
      dt = cc11001100_hook("dt", RegExp(it + "*[+~]"), "var-init"),
      ht = cc11001100_hook("ht", RegExp("=" + it + "*([^\\]'\"]*)" + it + "*\\]", "g"), "var-init"),
      gt = cc11001100_hook("gt", RegExp(ut), "var-init"),
      mt = cc11001100_hook("mt", RegExp("^" + at + "$"), "var-init"),
      yt = cc11001100_hook("yt", {
        ID: cc11001100_hook("ID", RegExp("^#(" + ot + ")"), "object-key-init"),
        CLASS: cc11001100_hook("CLASS", RegExp("^\\.(" + ot + ")"), "object-key-init"),
        TAG: cc11001100_hook("TAG", RegExp("^(" + ot.replace("w", "w*") + ")"), "object-key-init"),
        ATTR: cc11001100_hook("ATTR", RegExp("^" + st), "object-key-init"),
        PSEUDO: cc11001100_hook("PSEUDO", RegExp("^" + ut), "object-key-init"),
        CHILD: cc11001100_hook("CHILD", RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"), "object-key-init"),
        bool: cc11001100_hook("bool", RegExp("^(?:" + rt + ")$", "i"), "object-key-init"),
        needsContext: cc11001100_hook("needsContext", RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i"), "object-key-init")
      }, "var-init"),
      vt = cc11001100_hook("vt", /^[^{]+\{\s*\[native \w/, "var-init"),
      bt = cc11001100_hook("bt", /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, "var-init"),
      xt = cc11001100_hook("xt", /^(?:input|select|textarea|button)$/i, "var-init"),
      Tt = cc11001100_hook("Tt", /^h\d$/i, "var-init"),
      wt = cc11001100_hook("wt", /'|\\/g, "var-init"),
      Ct = cc11001100_hook("Ct", RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"), "var-init"),
      Nt = function (e, t, n) {
        var r = cc11001100_hook("r", "0x" + t - 65536, "var-init");
        return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
      };
    try {
      et.apply(Q = cc11001100_hook("Q", tt.call(R.childNodes), "assign"), R.childNodes), Q[R.childNodes.length].nodeType;
    } catch (kt) {
      et = cc11001100_hook("et", {
        apply: cc11001100_hook("apply", Q.length ? function (e, t) {
          Z.apply(e, tt.call(t));
        } : function (e, t) {
          for (var n = cc11001100_hook("n", e.length, "var-init"), r = cc11001100_hook("r", 0, "var-init"); e[n++] = cc11001100_hook("e[n++]", t[r++], "assign"););
          e.length = cc11001100_hook("e.length", n - 1, "assign");
        }, "object-key-init")
      }, "assign");
    }
    S = cc11001100_hook("S", n.isXML = cc11001100_hook("n.isXML", function (e) {
      var t = cc11001100_hook("t", e && (e.ownerDocument || e).documentElement, "var-init");
      return t ? "HTML" !== t.nodeName : !1;
    }, "assign"), "assign"), C = cc11001100_hook("C", n.support = cc11001100_hook("n.support", {}, "assign"), "assign"), L = cc11001100_hook("L", n.setDocument = cc11001100_hook("n.setDocument", function (e) {
      var n = cc11001100_hook("n", e ? e.ownerDocument || e : R, "var-init"),
        r = cc11001100_hook("r", n.defaultView, "var-init");
      return n !== H && 9 === n.nodeType && n.documentElement ? (H = cc11001100_hook("H", n, "assign"), q = cc11001100_hook("q", n.documentElement, "assign"), _ = cc11001100_hook("_", !S(n), "assign"), r && r.attachEvent && r !== r.top && r.attachEvent("onbeforeunload", function () {
        L();
      }), C.attributes = cc11001100_hook("C.attributes", o(function (e) {
        return e.className = cc11001100_hook("e.className", "i", "assign"), !e.getAttribute("className");
      }), "assign"), C.getElementsByTagName = cc11001100_hook("C.getElementsByTagName", o(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), "assign"), C.getElementsByClassName = cc11001100_hook("C.getElementsByClassName", o(function (e) {
        return e.innerHTML = cc11001100_hook("e.innerHTML", "<div class='a'></div><div class='a i'></div>", "assign"), e.firstChild.className = cc11001100_hook("e.firstChild.className", "i", "assign"), 2 === e.getElementsByClassName("i").length;
      }), "assign"), C.getById = cc11001100_hook("C.getById", o(function (e) {
        return q.appendChild(e).id = cc11001100_hook("q.appendChild(e).id", P, "assign"), !n.getElementsByName || !n.getElementsByName(P).length;
      }), "assign"), C.getById ? (k.find.ID = cc11001100_hook("k.find.ID", function (e, t) {
        if (typeof t.getElementById !== Y && _) {
          var n = cc11001100_hook("n", t.getElementById(e), "var-init");
          return n && n.parentNode ? [n] : [];
        }
      }, "assign"), k.filter.ID = cc11001100_hook("k.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(Ct, Nt), "var-init");
        return function (e) {
          return e.getAttribute("id") === t;
        };
      }, "assign")) : (delete k.find.ID, k.filter.ID = cc11001100_hook("k.filter.ID", function (e) {
        var t = cc11001100_hook("t", e.replace(Ct, Nt), "var-init");
        return function (e) {
          var n = cc11001100_hook("n", typeof e.getAttributeNode !== Y && e.getAttributeNode("id"), "var-init");
          return n && n.value === t;
        };
      }, "assign")), k.find.TAG = cc11001100_hook("k.find.TAG", C.getElementsByTagName ? function (e, n) {
        return typeof n.getElementsByTagName !== Y ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n,
          r = cc11001100_hook("r", [], "var-init"),
          i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", t.getElementsByTagName(e), "var-init");
        if ("*" === e) {
          for (; n = cc11001100_hook("n", o[i++], "assign");) 1 === n.nodeType && r.push(n);
          return r;
        }
        return o;
      }, "assign"), k.find.CLASS = cc11001100_hook("k.find.CLASS", C.getElementsByClassName && function (e, n) {
        return typeof n.getElementsByClassName !== Y && _ ? n.getElementsByClassName(e) : t;
      }, "assign"), O = cc11001100_hook("O", [], "assign"), M = cc11001100_hook("M", [], "assign"), (C.qsa = cc11001100_hook("C.qsa", vt.test(n.querySelectorAll), "assign")) && (o(function (e) {
        e.innerHTML = cc11001100_hook("e.innerHTML", "<select><option selected=''></option></select>", "assign"), e.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + rt + ")"), e.querySelectorAll(":checked").length || M.push(":checked");
      }), o(function (e) {
        var t = cc11001100_hook("t", n.createElement("input"), "var-init");
        t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:");
      })), (C.matchesSelector = cc11001100_hook("C.matchesSelector", vt.test(F = cc11001100_hook("F", q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector, "assign")), "assign")) && o(function (e) {
        C.disconnectedMatch = cc11001100_hook("C.disconnectedMatch", F.call(e, "div"), "assign"), F.call(e, "[s!='']:x"), O.push("!=", ut);
      }), M = cc11001100_hook("M", M.length && RegExp(M.join("|")), "assign"), O = cc11001100_hook("O", O.length && RegExp(O.join("|")), "assign"), B = cc11001100_hook("B", vt.test(q.contains) || q.compareDocumentPosition ? function (e, t) {
        var n = cc11001100_hook("n", 9 === e.nodeType ? e.documentElement : e, "var-init"),
          r = cc11001100_hook("r", t && t.parentNode, "var-init");
        return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) for (; t = cc11001100_hook("t", t.parentNode, "assign");) if (t === e) return !0;
        return !1;
      }, "assign"), V = cc11001100_hook("V", q.compareDocumentPosition ? function (e, t) {
        if (e === t) return U = cc11001100_hook("U", !0, "assign"), 0;
        var r = cc11001100_hook("r", t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t), "var-init");
        return r ? 1 & r || !C.sortDetached && t.compareDocumentPosition(e) === r ? e === n || B(R, e) ? -1 : t === n || B(R, t) ? 1 : D ? nt.call(D, e) - nt.call(D, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
          i = cc11001100_hook("i", 0, "var-init"),
          o = cc11001100_hook("o", e.parentNode, "var-init"),
          a = cc11001100_hook("a", t.parentNode, "var-init"),
          u = cc11001100_hook("u", [e], "var-init"),
          l = cc11001100_hook("l", [t], "var-init");
        if (e === t) return U = cc11001100_hook("U", !0, "assign"), 0;
        if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? nt.call(D, e) - nt.call(D, t) : 0;
        if (o === a) return s(e, t);
        for (r = cc11001100_hook("r", e, "assign"); r = cc11001100_hook("r", r.parentNode, "assign");) u.unshift(r);
        for (r = cc11001100_hook("r", t, "assign"); r = cc11001100_hook("r", r.parentNode, "assign");) l.unshift(r);
        for (; u[i] === l[i];) i++;
        return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0;
      }, "assign"), n) : H;
    }, "assign"), "assign"), n.matches = cc11001100_hook("n.matches", function (e, t) {
      return n(e, null, null, t);
    }, "assign"), n.matchesSelector = cc11001100_hook("n.matchesSelector", function (e, t) {
      if ((e.ownerDocument || e) !== H && L(e), t = cc11001100_hook("t", t.replace(ht, "='$1']"), "assign"), !(!C.matchesSelector || !_ || O && O.test(t) || M && M.test(t))) try {
        var r = cc11001100_hook("r", F.call(e, t), "var-init");
        if (r || C.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (i) {}
      return n(t, H, null, [e]).length > 0;
    }, "assign"), n.contains = cc11001100_hook("n.contains", function (e, t) {
      return (e.ownerDocument || e) !== H && L(e), B(e, t);
    }, "assign"), n.attr = cc11001100_hook("n.attr", function (e, n) {
      (e.ownerDocument || e) !== H && L(e);
      var r = cc11001100_hook("r", k.attrHandle[n.toLowerCase()], "var-init"),
        i = cc11001100_hook("i", r && G.call(k.attrHandle, n.toLowerCase()) ? r(e, n, !_) : t, "var-init");
      return i === t ? C.attributes || !_ ? e.getAttribute(n) : (i = cc11001100_hook("i", e.getAttributeNode(n), "assign")) && i.specified ? i.value : null : i;
    }, "assign"), n.error = cc11001100_hook("n.error", function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, "assign"), n.uniqueSort = cc11001100_hook("n.uniqueSort", function (e) {
      var t,
        n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", 0, "var-init");
      if (U = cc11001100_hook("U", !C.detectDuplicates, "assign"), D = cc11001100_hook("D", !C.sortStable && e.slice(0), "assign"), e.sort(V), U) {
        for (; t = cc11001100_hook("t", e[i++], "assign");) t === e[i] && (r = cc11001100_hook("r", n.push(i), "assign"));
        for (; r--;) e.splice(n[r], 1);
      }
      return e;
    }, "assign"), E = cc11001100_hook("E", n.getText = cc11001100_hook("n.getText", function (e) {
      var t,
        n = cc11001100_hook("n", "", "var-init"),
        r = cc11001100_hook("r", 0, "var-init"),
        i = cc11001100_hook("i", e.nodeType, "var-init");
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) n += cc11001100_hook("n", E(e), "assign");
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = cc11001100_hook("t", e[r], "assign"); r++) n += cc11001100_hook("n", E(t), "assign");
      return n;
    }, "assign"), "assign"), k = cc11001100_hook("k", n.selectors = cc11001100_hook("n.selectors", {
      cacheLength: cc11001100_hook("cacheLength", 50, "object-key-init"),
      createPseudo: cc11001100_hook("createPseudo", i, "object-key-init"),
      match: cc11001100_hook("match", yt, "object-key-init"),
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init"),
          first: cc11001100_hook("first", !0, "object-key-init")
        },
        " ": {
          dir: cc11001100_hook("dir", "parentNode", "object-key-init")
        },
        "+": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init"),
          first: cc11001100_hook("first", !0, "object-key-init")
        },
        "~": {
          dir: cc11001100_hook("dir", "previousSibling", "object-key-init")
        }
      },
      preFilter: {
        ATTR: function (e) {
          return e[1] = cc11001100_hook("e[1]", e[1].replace(Ct, Nt), "assign"), e[3] = cc11001100_hook("e[3]", (e[4] || e[5] || "").replace(Ct, Nt), "assign"), "~=" === e[2] && (e[3] = cc11001100_hook("e[3]", " " + e[3] + " ", "assign")), e.slice(0, 4);
        },
        CHILD: function (e) {
          return e[1] = cc11001100_hook("e[1]", e[1].toLowerCase(), "assign"), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = cc11001100_hook("e[4]", +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), "assign"), e[5] = cc11001100_hook("e[5]", +(e[7] + e[8] || "odd" === e[3]), "assign")) : e[3] && n.error(e[0]), e;
        },
        PSEUDO: function (e) {
          var n,
            r = cc11001100_hook("r", !e[5] && e[2], "var-init");
          return yt.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = cc11001100_hook("e[2]", e[4], "assign") : r && gt.test(r) && (n = cc11001100_hook("n", p(r, !0), "assign")) && (n = cc11001100_hook("n", r.indexOf(")", r.length - n) - r.length, "assign")) && (e[0] = cc11001100_hook("e[0]", e[0].slice(0, n), "assign"), e[2] = cc11001100_hook("e[2]", r.slice(0, n), "assign")), e.slice(0, 3));
        }
      },
      filter: {
        TAG: function (e) {
          var t = cc11001100_hook("t", e.replace(Ct, Nt).toLowerCase(), "var-init");
          return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        },
        CLASS: function (e) {
          var t = cc11001100_hook("t", I[e + " "], "var-init");
          return t || (t = cc11001100_hook("t", RegExp("(^|" + it + ")" + e + "(" + it + "|$)"), "assign")) && I(e, function (e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "");
          });
        },
        ATTR: function (e, t, r) {
          return function (i) {
            var o = cc11001100_hook("o", n.attr(i, e), "var-init");
            return null == o ? "!=" === t : t ? (o += cc11001100_hook("o", "", "assign"), "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0;
          };
        },
        CHILD: function (e, t, n, r, i) {
          var o = cc11001100_hook("o", "nth" !== e.slice(0, 3), "var-init"),
            a = cc11001100_hook("a", "last" !== e.slice(-4), "var-init"),
            s = cc11001100_hook("s", "of-type" === t, "var-init");
          return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, u) {
            var l,
              c,
              f,
              p,
              d,
              h,
              g = cc11001100_hook("g", o !== a ? "nextSibling" : "previousSibling", "var-init"),
              m = cc11001100_hook("m", t.parentNode, "var-init"),
              y = cc11001100_hook("y", s && t.nodeName.toLowerCase(), "var-init"),
              v = cc11001100_hook("v", !u && !s, "var-init");
            if (m) {
              if (o) {
                for (; g;) {
                  for (f = cc11001100_hook("f", t, "assign"); f = cc11001100_hook("f", f[g], "assign");) if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
                  h = cc11001100_hook("h", g = cc11001100_hook("g", "only" === e && !h && "nextSibling", "assign"), "assign");
                }
                return !0;
              }
              if (h = cc11001100_hook("h", [a ? m.firstChild : m.lastChild], "assign"), a && v) {
                for (c = cc11001100_hook("c", m[P] || (m[P] = cc11001100_hook("m[P]", {}, "assign")), "assign"), l = cc11001100_hook("l", c[e] || [], "assign"), d = cc11001100_hook("d", l[0] === W && l[1], "assign"), p = cc11001100_hook("p", l[0] === W && l[2], "assign"), f = cc11001100_hook("f", d && m.childNodes[d], "assign"); f = cc11001100_hook("f", ++d && f && f[g] || (p = cc11001100_hook("p", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign");) if (1 === f.nodeType && ++p && f === t) {
                  c[e] = cc11001100_hook("c[e]", [W, d, p], "assign");
                  break;
                }
              } else if (v && (l = cc11001100_hook("l", (t[P] || (t[P] = cc11001100_hook("t[P]", {}, "assign")))[e], "assign")) && l[0] === W) p = cc11001100_hook("p", l[1], "assign");else for (; (f = cc11001100_hook("f", ++d && f && f[g] || (p = cc11001100_hook("p", d = cc11001100_hook("d", 0, "assign"), "assign")) || h.pop(), "assign")) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = cc11001100_hook("f[P]", {}, "assign")))[e] = cc11001100_hook("(f[P] || (f[P] = {}))[e]", [W, p], "assign")), f !== t)););
              return p -= cc11001100_hook("p", i, "assign"), p === r || 0 === p % r && p / r >= 0;
            }
          };
        },
        PSEUDO: function (e, t) {
          var r,
            o = cc11001100_hook("o", k.pseudos[e] || k.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e), "var-init");
          return o[P] ? o(t) : o.length > 1 ? (r = cc11001100_hook("r", [e, e, "", t], "assign"), k.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
            for (var r, i = cc11001100_hook("i", o(e, t), "var-init"), a = cc11001100_hook("a", i.length, "var-init"); a--;) r = cc11001100_hook("r", nt.call(e, i[a]), "assign"), e[r] = cc11001100_hook("e[r]", !(n[r] = cc11001100_hook("n[r]", i[a], "assign")), "assign");
          }) : function (e) {
            return o(e, 0, r);
          }) : o;
        }
      },
      pseudos: {
        not: cc11001100_hook("not", i(function (e) {
          var t = cc11001100_hook("t", [], "var-init"),
            n = cc11001100_hook("n", [], "var-init"),
            r = cc11001100_hook("r", A(e.replace(lt, "$1")), "var-init");
          return r[P] ? i(function (e, t, n, i) {
            for (var o, a = cc11001100_hook("a", r(e, null, i, []), "var-init"), s = cc11001100_hook("s", e.length, "var-init"); s--;) (o = cc11001100_hook("o", a[s], "assign")) && (e[s] = cc11001100_hook("e[s]", !(t[s] = cc11001100_hook("t[s]", o, "assign")), "assign"));
          }) : function (e, i, o) {
            return t[0] = cc11001100_hook("t[0]", e, "assign"), r(t, null, o, n), !n.pop();
          };
        }), "object-key-init"),
        has: cc11001100_hook("has", i(function (e) {
          return function (t) {
            return n(e, t).length > 0;
          };
        }), "object-key-init"),
        contains: cc11001100_hook("contains", i(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
          };
        }), "object-key-init"),
        lang: cc11001100_hook("lang", i(function (e) {
          return mt.test(e || "") || n.error("unsupported lang: " + e), e = cc11001100_hook("e", e.replace(Ct, Nt).toLowerCase(), "assign"), function (t) {
            var n;
            do if (n = cc11001100_hook("n", _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"), "assign")) return n = cc11001100_hook("n", n.toLowerCase(), "assign"), n === e || 0 === n.indexOf(e + "-"); while ((t = cc11001100_hook("t", t.parentNode, "assign")) && 1 === t.nodeType);
            return !1;
          };
        }), "object-key-init"),
        target: function (t) {
          var n = cc11001100_hook("n", e.location && e.location.hash, "var-init");
          return n && n.slice(1) === t.id;
        },
        root: function (e) {
          return e === q;
        },
        focus: function (e) {
          return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        },
        enabled: function (e) {
          return e.disabled === !1;
        },
        disabled: function (e) {
          return e.disabled === !0;
        },
        checked: function (e) {
          var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
          return "input" === t && !!e.checked || "option" === t && !!e.selected;
        },
        selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
        },
        empty: function (e) {
          for (e = cc11001100_hook("e", e.firstChild, "assign"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;
          return !0;
        },
        parent: function (e) {
          return !k.pseudos.empty(e);
        },
        header: function (e) {
          return Tt.test(e.nodeName);
        },
        input: function (e) {
          return xt.test(e.nodeName);
        },
        button: function (e) {
          var t = cc11001100_hook("t", e.nodeName.toLowerCase(), "var-init");
          return "input" === t && "button" === e.type || "button" === t;
        },
        text: function (e) {
          var t;
          return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = cc11001100_hook("t", e.getAttribute("type"), "assign")) || t.toLowerCase() === e.type);
        },
        first: cc11001100_hook("first", c(function () {
          return [0];
        }), "object-key-init"),
        last: cc11001100_hook("last", c(function (e, t) {
          return [t - 1];
        }), "object-key-init"),
        eq: cc11001100_hook("eq", c(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), "object-key-init"),
        even: cc11001100_hook("even", c(function (e, t) {
          for (var n = cc11001100_hook("n", 0, "var-init"); t > n; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        odd: cc11001100_hook("odd", c(function (e, t) {
          for (var n = cc11001100_hook("n", 1, "var-init"); t > n; n += cc11001100_hook("n", 2, "assign")) e.push(n);
          return e;
        }), "object-key-init"),
        lt: cc11001100_hook("lt", c(function (e, t, n) {
          for (var r = cc11001100_hook("r", 0 > n ? n + t : n, "var-init"); --r >= 0;) e.push(r);
          return e;
        }), "object-key-init"),
        gt: cc11001100_hook("gt", c(function (e, t, n) {
          for (var r = cc11001100_hook("r", 0 > n ? n + t : n, "var-init"); t > ++r;) e.push(r);
          return e;
        }), "object-key-init")
      }
    }, "assign"), "assign"), k.pseudos.nth = cc11001100_hook("k.pseudos.nth", k.pseudos.eq, "assign");
    for (w in {
      radio: cc11001100_hook("radio", !0, "object-key-init"),
      checkbox: cc11001100_hook("checkbox", !0, "object-key-init"),
      file: cc11001100_hook("file", !0, "object-key-init"),
      password: cc11001100_hook("password", !0, "object-key-init"),
      image: cc11001100_hook("image", !0, "object-key-init")
    }) k.pseudos[w] = cc11001100_hook("k.pseudos[w]", u(w), "assign");
    for (w in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      reset: cc11001100_hook("reset", !0, "object-key-init")
    }) k.pseudos[w] = cc11001100_hook("k.pseudos[w]", l(w), "assign");
    f.prototype = cc11001100_hook("f.prototype", k.filters = cc11001100_hook("k.filters", k.pseudos, "assign"), "assign"), k.setFilters = cc11001100_hook("k.setFilters", new f(), "assign"), A = cc11001100_hook("A", n.compile = cc11001100_hook("n.compile", function (e, t) {
      var n,
        r = cc11001100_hook("r", [], "var-init"),
        i = cc11001100_hook("i", [], "var-init"),
        o = cc11001100_hook("o", X[e + " "], "var-init");
      if (!o) {
        for (t || (t = cc11001100_hook("t", p(e), "assign")), n = cc11001100_hook("n", t.length, "assign"); n--;) o = cc11001100_hook("o", v(t[n]), "assign"), o[P] ? r.push(o) : i.push(o);
        o = cc11001100_hook("o", X(e, b(i, r)), "assign");
      }
      return o;
    }, "assign"), "assign"), C.sortStable = cc11001100_hook("C.sortStable", P.split("").sort(V).join("") === P, "assign"), C.detectDuplicates = cc11001100_hook("C.detectDuplicates", U, "assign"), L(), C.sortDetached = cc11001100_hook("C.sortDetached", o(function (e) {
      return 1 & e.compareDocumentPosition(H.createElement("div"));
    }), "assign"), o(function (e) {
      return e.innerHTML = cc11001100_hook("e.innerHTML", "<a href='#'></a>", "assign"), "#" === e.firstChild.getAttribute("href");
    }) || a("type|href|height|width", function (e, n, r) {
      return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2);
    }), C.attributes && o(function (e) {
      return e.innerHTML = cc11001100_hook("e.innerHTML", "<input/>", "assign"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || a("value", function (e, n, r) {
      return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue;
    }), o(function (e) {
      return null == e.getAttribute("disabled");
    }) || a(rt, function (e, n, r) {
      var i;
      return r ? t : (i = cc11001100_hook("i", e.getAttributeNode(n), "assign")) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null;
    }), ct.find = cc11001100_hook("ct.find", n, "assign"), ct.expr = cc11001100_hook("ct.expr", n.selectors, "assign"), ct.expr[":"] = cc11001100_hook("ct.expr[\":\"]", ct.expr.pseudos, "assign"), ct.unique = cc11001100_hook("ct.unique", n.uniqueSort, "assign"), ct.text = cc11001100_hook("ct.text", n.getText, "assign"), ct.isXMLDoc = cc11001100_hook("ct.isXMLDoc", n.isXML, "assign"), ct.contains = cc11001100_hook("ct.contains", n.contains, "assign");
  }(e);
  var kt = cc11001100_hook("kt", {}, "var-init");
  ct.Callbacks = cc11001100_hook("ct.Callbacks", function (e) {
    e = cc11001100_hook("e", "string" == typeof e ? kt[e] || r(e) : ct.extend({}, e), "assign");
    var n,
      i,
      o,
      a,
      s,
      u,
      l = cc11001100_hook("l", [], "var-init"),
      c = cc11001100_hook("c", !e.once && [], "var-init"),
      f = function (t) {
        for (i = cc11001100_hook("i", e.memory && t, "assign"), o = cc11001100_hook("o", !0, "assign"), s = cc11001100_hook("s", u || 0, "assign"), u = cc11001100_hook("u", 0, "assign"), a = cc11001100_hook("a", l.length, "assign"), n = cc11001100_hook("n", !0, "assign"); l && a > s; s++) if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
          i = cc11001100_hook("i", !1, "assign");
          break;
        }
        n = cc11001100_hook("n", !1, "assign"), l && (c ? c.length && f(c.shift()) : i ? l = cc11001100_hook("l", [], "assign") : p.disable());
      },
      p = cc11001100_hook("p", {
        add: function () {
          if (l) {
            var t = cc11001100_hook("t", l.length, "var-init");
            !function r(t) {
              ct.each(t, function (t, n) {
                var i = cc11001100_hook("i", ct.type(n), "var-init");
                "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n);
              });
            }(arguments), n ? a = cc11001100_hook("a", l.length, "assign") : i && (u = cc11001100_hook("u", t, "assign"), f(i));
          }
          return this;
        },
        remove: function () {
          return l && ct.each(arguments, function (e, t) {
            for (var r; (r = cc11001100_hook("r", ct.inArray(t, l, r), "assign")) > -1;) l.splice(r, 1), n && (a >= r && a--, s >= r && s--);
          }), this;
        },
        has: function (e) {
          return e ? ct.inArray(e, l) > -1 : !(!l || !l.length);
        },
        empty: function () {
          return l = cc11001100_hook("l", [], "assign"), a = cc11001100_hook("a", 0, "assign"), this;
        },
        disable: function () {
          return l = cc11001100_hook("l", c = cc11001100_hook("c", i = cc11001100_hook("i", t, "assign"), "assign"), "assign"), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return c = cc11001100_hook("c", t, "assign"), i || p.disable(), this;
        },
        locked: function () {
          return !c;
        },
        fireWith: function (e, t) {
          return !l || o && !c || (t = cc11001100_hook("t", t || [], "assign"), t = cc11001100_hook("t", [e, t.slice ? t.slice() : t], "assign"), n ? c.push(t) : f(t)), this;
        },
        fire: function () {
          return p.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        }
      }, "var-init");
    return p;
  }, "assign"), ct.extend({
    Deferred: function (e) {
      var t = cc11001100_hook("t", [["resolve", "done", ct.Callbacks("once memory"), "resolved"], ["reject", "fail", ct.Callbacks("once memory"), "rejected"], ["notify", "progress", ct.Callbacks("memory")]], "var-init"),
        n = cc11001100_hook("n", "pending", "var-init"),
        r = cc11001100_hook("r", {
          state: function () {
            return n;
          },
          always: function () {
            return i.done(arguments).fail(arguments), this;
          },
          then: function () {
            var e = cc11001100_hook("e", arguments, "var-init");
            return ct.Deferred(function (n) {
              ct.each(t, function (t, o) {
                var a = cc11001100_hook("a", o[0], "var-init"),
                  s = cc11001100_hook("s", ct.isFunction(e[t]) && e[t], "var-init");
                i[o[1]](function () {
                  var e = cc11001100_hook("e", s && s.apply(this, arguments), "var-init");
                  e && ct.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
                });
              }), e = cc11001100_hook("e", null, "assign");
            }).promise();
          },
          promise: function (e) {
            return null != e ? ct.extend(e, r) : r;
          }
        }, "var-init"),
        i = cc11001100_hook("i", {}, "var-init");
      return r.pipe = cc11001100_hook("r.pipe", r.then, "assign"), ct.each(t, function (e, o) {
        var a = cc11001100_hook("a", o[2], "var-init"),
          s = cc11001100_hook("s", o[3], "var-init");
        r[o[1]] = cc11001100_hook("r[o[1]]", a.add, "assign"), s && a.add(function () {
          n = cc11001100_hook("n", s, "assign");
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = cc11001100_hook("i[o[0]]", function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, "assign"), i[o[0] + "With"] = cc11001100_hook("i[o[0] + \"With\"]", a.fireWith, "assign");
      }), r.promise(i), e && e.call(i, i), i;
    },
    when: function (e) {
      var t,
        n,
        r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", ot.call(arguments), "var-init"),
        a = cc11001100_hook("a", o.length, "var-init"),
        s = cc11001100_hook("s", 1 !== a || e && ct.isFunction(e.promise) ? a : 0, "var-init"),
        u = cc11001100_hook("u", 1 === s ? e : ct.Deferred(), "var-init"),
        l = function (e, n, r) {
          return function (i) {
            n[e] = cc11001100_hook("n[e]", this, "assign"), r[e] = cc11001100_hook("r[e]", arguments.length > 1 ? ot.call(arguments) : i, "assign"), r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
          };
        };
      if (a > 1) for (t = cc11001100_hook("t", Array(a), "assign"), n = cc11001100_hook("n", Array(a), "assign"), r = cc11001100_hook("r", Array(a), "assign"); a > i; i++) o[i] && ct.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
      return s || u.resolveWith(r, o), u.promise();
    }
  }), ct.support = cc11001100_hook("ct.support", function (t) {
    var n,
      r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = cc11001100_hook("f", G.createElement("div"), "var-init");
    if (f.setAttribute("className", "t"), f.innerHTML = cc11001100_hook("f.innerHTML", "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", "assign"), n = cc11001100_hook("n", f.getElementsByTagName("*") || [], "assign"), r = cc11001100_hook("r", f.getElementsByTagName("a")[0], "assign"), !r || !r.style || !n.length) return t;
    o = cc11001100_hook("o", G.createElement("select"), "assign"), s = cc11001100_hook("s", o.appendChild(G.createElement("option")), "assign"), i = cc11001100_hook("i", f.getElementsByTagName("input")[0], "assign"), r.style.cssText = cc11001100_hook("r.style.cssText", "top:1px;float:left;opacity:.5", "assign"), t.getSetAttribute = cc11001100_hook("t.getSetAttribute", "t" !== f.className, "assign"), t.leadingWhitespace = cc11001100_hook("t.leadingWhitespace", 3 === f.firstChild.nodeType, "assign"), t.tbody = cc11001100_hook("t.tbody", !f.getElementsByTagName("tbody").length, "assign"), t.htmlSerialize = cc11001100_hook("t.htmlSerialize", !!f.getElementsByTagName("link").length, "assign"), t.style = cc11001100_hook("t.style", /top/.test(r.getAttribute("style")), "assign"), t.hrefNormalized = cc11001100_hook("t.hrefNormalized", "/a" === r.getAttribute("href"), "assign"), t.opacity = cc11001100_hook("t.opacity", /^0.5/.test(r.style.opacity), "assign"), t.cssFloat = cc11001100_hook("t.cssFloat", !!r.style.cssFloat, "assign"), t.checkOn = cc11001100_hook("t.checkOn", !!i.value, "assign"), t.optSelected = cc11001100_hook("t.optSelected", s.selected, "assign"), t.enctype = cc11001100_hook("t.enctype", !!G.createElement("form").enctype, "assign"), t.html5Clone = cc11001100_hook("t.html5Clone", "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, "assign"), t.inlineBlockNeedsLayout = cc11001100_hook("t.inlineBlockNeedsLayout", !1, "assign"), t.shrinkWrapBlocks = cc11001100_hook("t.shrinkWrapBlocks", !1, "assign"), t.pixelPosition = cc11001100_hook("t.pixelPosition", !1, "assign"), t.deleteExpando = cc11001100_hook("t.deleteExpando", !0, "assign"), t.noCloneEvent = cc11001100_hook("t.noCloneEvent", !0, "assign"), t.reliableMarginRight = cc11001100_hook("t.reliableMarginRight", !0, "assign"), t.boxSizingReliable = cc11001100_hook("t.boxSizingReliable", !0, "assign"), i.checked = cc11001100_hook("i.checked", !0, "assign"), t.noCloneChecked = cc11001100_hook("t.noCloneChecked", i.cloneNode(!0).checked, "assign"), o.disabled = cc11001100_hook("o.disabled", !0, "assign"), t.optDisabled = cc11001100_hook("t.optDisabled", !s.disabled, "assign");
    try {
      delete f.test;
    } catch (p) {
      t.deleteExpando = cc11001100_hook("t.deleteExpando", !1, "assign");
    }
    i = cc11001100_hook("i", G.createElement("input"), "assign"), i.setAttribute("value", ""), t.input = cc11001100_hook("t.input", "" === i.getAttribute("value"), "assign"), i.value = cc11001100_hook("i.value", "t", "assign"), i.setAttribute("type", "radio"), t.radioValue = cc11001100_hook("t.radioValue", "t" === i.value, "assign"), i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = cc11001100_hook("a", G.createDocumentFragment(), "assign"), a.appendChild(i), t.appendChecked = cc11001100_hook("t.appendChecked", i.checked, "assign"), t.checkClone = cc11001100_hook("t.checkClone", a.cloneNode(!0).cloneNode(!0).lastChild.checked, "assign"), f.attachEvent && (f.attachEvent("onclick", function () {
      t.noCloneEvent = cc11001100_hook("t.noCloneEvent", !1, "assign");
    }), f.cloneNode(!0).click());
    for (c in {
      submit: cc11001100_hook("submit", !0, "object-key-init"),
      change: cc11001100_hook("change", !0, "object-key-init"),
      focusin: cc11001100_hook("focusin", !0, "object-key-init")
    }) f.setAttribute(u = cc11001100_hook("u", "on" + c, "assign"), "t"), t[c + "Bubbles"] = cc11001100_hook("t[c + \"Bubbles\"]", u in e || f.attributes[u].expando === !1, "assign");
    f.style.backgroundClip = cc11001100_hook("f.style.backgroundClip", "content-box", "assign"), f.cloneNode(!0).style.backgroundClip = cc11001100_hook("f.cloneNode(!0).style.backgroundClip", "", "assign"), t.clearCloneStyle = cc11001100_hook("t.clearCloneStyle", "content-box" === f.style.backgroundClip, "assign");
    for (c in ct(t)) break;
    return t.ownLast = cc11001100_hook("t.ownLast", "0" !== c, "assign"), ct(function () {
      var n,
        r,
        i,
        o = cc11001100_hook("o", "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", "var-init"),
        a = cc11001100_hook("a", G.getElementsByTagName("body")[0], "var-init");
      a && (n = cc11001100_hook("n", G.createElement("div"), "assign"), n.style.cssText = cc11001100_hook("n.style.cssText", "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", "assign"), a.appendChild(n).appendChild(f), f.innerHTML = cc11001100_hook("f.innerHTML", "<table><tr><td></td><td>t</td></tr></table>", "assign"), i = cc11001100_hook("i", f.getElementsByTagName("td"), "assign"), i[0].style.cssText = cc11001100_hook("i[0].style.cssText", "padding:0;margin:0;border:0;display:none", "assign"), l = cc11001100_hook("l", 0 === i[0].offsetHeight, "assign"), i[0].style.display = cc11001100_hook("i[0].style.display", "", "assign"), i[1].style.display = cc11001100_hook("i[1].style.display", "none", "assign"), t.reliableHiddenOffsets = cc11001100_hook("t.reliableHiddenOffsets", l && 0 === i[0].offsetHeight, "assign"), f.innerHTML = cc11001100_hook("f.innerHTML", "", "assign"), f.style.cssText = cc11001100_hook("f.style.cssText", "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", "assign"), ct.swap(a, null != a.style.zoom ? {
        zoom: cc11001100_hook("zoom", 1, "object-key-init")
      } : {}, function () {
        t.boxSizing = cc11001100_hook("t.boxSizing", 4 === f.offsetWidth, "assign");
      }), e.getComputedStyle && (t.pixelPosition = cc11001100_hook("t.pixelPosition", "1%" !== (e.getComputedStyle(f, null) || {}).top, "assign"), t.boxSizingReliable = cc11001100_hook("t.boxSizingReliable", "4px" === (e.getComputedStyle(f, null) || {
        width: cc11001100_hook("width", "4px", "object-key-init")
      }).width, "assign"), r = cc11001100_hook("r", f.appendChild(G.createElement("div")), "assign"), r.style.cssText = cc11001100_hook("r.style.cssText", f.style.cssText = cc11001100_hook("f.style.cssText", o, "assign"), "assign"), r.style.marginRight = cc11001100_hook("r.style.marginRight", r.style.width = cc11001100_hook("r.style.width", "0", "assign"), "assign"), f.style.width = cc11001100_hook("f.style.width", "1px", "assign"), t.reliableMarginRight = cc11001100_hook("t.reliableMarginRight", !parseFloat((e.getComputedStyle(r, null) || {}).marginRight), "assign")), typeof f.style.zoom !== Y && (f.innerHTML = cc11001100_hook("f.innerHTML", "", "assign"), f.style.cssText = cc11001100_hook("f.style.cssText", o + "width:1px;padding:1px;display:inline;zoom:1", "assign"), t.inlineBlockNeedsLayout = cc11001100_hook("t.inlineBlockNeedsLayout", 3 === f.offsetWidth, "assign"), f.style.display = cc11001100_hook("f.style.display", "block", "assign"), f.innerHTML = cc11001100_hook("f.innerHTML", "<div></div>", "assign"), f.firstChild.style.width = cc11001100_hook("f.firstChild.style.width", "5px", "assign"), t.shrinkWrapBlocks = cc11001100_hook("t.shrinkWrapBlocks", 3 !== f.offsetWidth, "assign"), t.inlineBlockNeedsLayout && (a.style.zoom = cc11001100_hook("a.style.zoom", 1, "assign"))), a.removeChild(n), n = cc11001100_hook("n", f = cc11001100_hook("f", i = cc11001100_hook("i", r = cc11001100_hook("r", null, "assign"), "assign"), "assign"), "assign"));
    }), n = cc11001100_hook("n", o = cc11001100_hook("o", a = cc11001100_hook("a", s = cc11001100_hook("s", r = cc11001100_hook("r", i = cc11001100_hook("i", null, "assign"), "assign"), "assign"), "assign"), "assign"), "assign"), t;
  }({}), "assign");
  var Et = cc11001100_hook("Et", /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, "var-init"),
    St = cc11001100_hook("St", /([A-Z])/g, "var-init");
  ct.extend({
    cache: {},
    noData: {
      applet: cc11001100_hook("applet", !0, "object-key-init"),
      embed: cc11001100_hook("embed", !0, "object-key-init"),
      object: cc11001100_hook("object", "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", "object-key-init")
    },
    hasData: function (e) {
      return e = cc11001100_hook("e", e.nodeType ? ct.cache[e[ct.expando]] : e[ct.expando], "assign"), !!e && !s(e);
    },
    data: function (e, t, n) {
      return i(e, t, n);
    },
    removeData: function (e, t) {
      return o(e, t);
    },
    _data: function (e, t, n) {
      return i(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return o(e, t, !0);
    },
    acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
      var t = cc11001100_hook("t", e.nodeName && ct.noData[e.nodeName.toLowerCase()], "var-init");
      return !t || t !== !0 && e.getAttribute("classid") === t;
    }
  }), ct.fn.extend({
    data: function (e, n) {
      var r,
        i,
        o = cc11001100_hook("o", null, "var-init"),
        s = cc11001100_hook("s", 0, "var-init"),
        u = cc11001100_hook("u", this[0], "var-init");
      if (e === t) {
        if (this.length && (o = cc11001100_hook("o", ct.data(u), "assign"), 1 === u.nodeType && !ct._data(u, "parsedAttrs"))) {
          for (r = cc11001100_hook("r", u.attributes, "assign"); r.length > s; s++) i = cc11001100_hook("i", r[s].name, "assign"), 0 === i.indexOf("data-") && (i = cc11001100_hook("i", ct.camelCase(i.slice(5)), "assign"), a(u, i, o[i]));
          ct._data(u, "parsedAttrs", !0);
        }
        return o;
      }
      return "object" == typeof e ? this.each(function () {
        ct.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        ct.data(this, e, n);
      }) : u ? a(u, e, ct.data(u, e)) : null;
    },
    removeData: function (e) {
      return this.each(function () {
        ct.removeData(this, e);
      });
    }
  }), ct.extend({
    queue: function (e, n, r) {
      var i;
      return e ? (n = cc11001100_hook("n", (n || "fx") + "queue", "assign"), i = cc11001100_hook("i", ct._data(e, n), "assign"), r && (!i || ct.isArray(r) ? i = cc11001100_hook("i", ct._data(e, n, ct.makeArray(r)), "assign") : i.push(r)), i || []) : t;
    },
    dequeue: function (e, t) {
      t = cc11001100_hook("t", t || "fx", "assign");
      var n = cc11001100_hook("n", ct.queue(e, t), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init"),
        i = cc11001100_hook("i", n.shift(), "var-init"),
        o = cc11001100_hook("o", ct._queueHooks(e, t), "var-init"),
        a = function () {
          ct.dequeue(e, t);
        };
      "inprogress" === i && (i = cc11001100_hook("i", n.shift(), "assign"), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
    },
    _queueHooks: function (e, t) {
      var n = cc11001100_hook("n", t + "queueHooks", "var-init");
      return ct._data(e, n) || ct._data(e, n, {
        empty: cc11001100_hook("empty", ct.Callbacks("once memory").add(function () {
          ct._removeData(e, t + "queue"), ct._removeData(e, n);
        }), "object-key-init")
      });
    }
  }), ct.fn.extend({
    queue: function (e, n) {
      var r = cc11001100_hook("r", 2, "var-init");
      return "string" != typeof e && (n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", "fx", "assign"), r--), r > arguments.length ? ct.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = cc11001100_hook("t", ct.queue(this, e, n), "var-init");
        ct._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ct.dequeue(this, e);
      });
    },
    dequeue: function (e) {
      return this.each(function () {
        ct.dequeue(this, e);
      });
    },
    delay: function (e, t) {
      return e = cc11001100_hook("e", ct.fx ? ct.fx.speeds[e] || e : e, "assign"), t = cc11001100_hook("t", t || "fx", "assign"), this.queue(t, function (t, n) {
        var r = cc11001100_hook("r", setTimeout(t, e), "var-init");
        n.stop = cc11001100_hook("n.stop", function () {
          clearTimeout(r);
        }, "assign");
      });
    },
    clearQueue: function (e) {
      return this.queue(e || "fx", []);
    },
    promise: function (e, n) {
      var r,
        i = cc11001100_hook("i", 1, "var-init"),
        o = cc11001100_hook("o", ct.Deferred(), "var-init"),
        a = cc11001100_hook("a", this, "var-init"),
        s = cc11001100_hook("s", this.length, "var-init"),
        u = function () {
          --i || o.resolveWith(a, [a]);
        };
      for ("string" != typeof e && (n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", t, "assign")), e = cc11001100_hook("e", e || "fx", "assign"); s--;) r = cc11001100_hook("r", ct._data(a[s], e + "queueHooks"), "assign"), r && r.empty && (i++, r.empty.add(u));
      return u(), o.promise(n);
    }
  });
  var At,
    jt,
    Dt = cc11001100_hook("Dt", /[\t\r\n\f]/g, "var-init"),
    Lt = cc11001100_hook("Lt", /\r/g, "var-init"),
    Ht = cc11001100_hook("Ht", /^(?:input|select|textarea|button|object)$/i, "var-init"),
    qt = cc11001100_hook("qt", /^(?:a|area)$/i, "var-init"),
    _t = cc11001100_hook("_t", /^(?:checked|selected)$/i, "var-init"),
    Mt = cc11001100_hook("Mt", ct.support.getSetAttribute, "var-init"),
    Ot = cc11001100_hook("Ot", ct.support.input, "var-init");
  ct.fn.extend({
    attr: function (e, t) {
      return ct.access(this, ct.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ct.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return ct.access(this, ct.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return e = cc11001100_hook("e", ct.propFix[e] || e, "assign"), this.each(function () {
        try {
          this[e] = cc11001100_hook("this[e]", t, "assign"), delete this[e];
        } catch (n) {}
      });
    },
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = cc11001100_hook("a", 0, "var-init"),
        s = cc11001100_hook("s", this.length, "var-init"),
        u = cc11001100_hook("u", "string" == typeof e && e, "var-init");
      if (ct.isFunction(e)) return this.each(function (t) {
        ct(this).addClass(e.call(this, t, this.className));
      });
      if (u) for (t = cc11001100_hook("t", (e || "").match(pt) || [], "assign"); s > a; a++) if (n = cc11001100_hook("n", this[a], "assign"), r = cc11001100_hook("r", 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : " "), "assign")) {
        for (o = cc11001100_hook("o", 0, "assign"); i = cc11001100_hook("i", t[o++], "assign");) 0 > r.indexOf(" " + i + " ") && (r += cc11001100_hook("r", i + " ", "assign"));
        n.className = cc11001100_hook("n.className", ct.trim(r), "assign");
      }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a = cc11001100_hook("a", 0, "var-init"),
        s = cc11001100_hook("s", this.length, "var-init"),
        u = cc11001100_hook("u", 0 === arguments.length || "string" == typeof e && e, "var-init");
      if (ct.isFunction(e)) return this.each(function (t) {
        ct(this).removeClass(e.call(this, t, this.className));
      });
      if (u) for (t = cc11001100_hook("t", (e || "").match(pt) || [], "assign"); s > a; a++) if (n = cc11001100_hook("n", this[a], "assign"), r = cc11001100_hook("r", 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Dt, " ") : ""), "assign")) {
        for (o = cc11001100_hook("o", 0, "assign"); i = cc11001100_hook("i", t[o++], "assign");) for (; r.indexOf(" " + i + " ") >= 0;) r = cc11001100_hook("r", r.replace(" " + i + " ", " "), "assign");
        n.className = cc11001100_hook("n.className", e ? ct.trim(r) : "", "assign");
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = cc11001100_hook("n", typeof e, "var-init");
      return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(ct.isFunction(e) ? function (n) {
        ct(this).toggleClass(e.call(this, n, this.className, t), t);
      } : function () {
        if ("string" === n) for (var t, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", ct(this), "var-init"), o = cc11001100_hook("o", e.match(pt) || [], "var-init"); t = cc11001100_hook("t", o[r++], "assign");) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);else (n === Y || "boolean" === n) && (this.className && ct._data(this, "__className__", this.className), this.className = cc11001100_hook("this.className", this.className || e === !1 ? "" : ct._data(this, "__className__") || "", "assign"));
      });
    },
    hasClass: function (e) {
      for (var t = cc11001100_hook("t", " " + e + " ", "var-init"), n = cc11001100_hook("n", 0, "var-init"), r = cc11001100_hook("r", this.length, "var-init"); r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Dt, " ").indexOf(t) >= 0) return !0;
      return !1;
    },
    val: function (e) {
      var n,
        r,
        i,
        o = cc11001100_hook("o", this[0], "var-init");
      return arguments.length ? (i = cc11001100_hook("i", ct.isFunction(e), "assign"), this.each(function (n) {
        var o;
        1 === this.nodeType && (o = cc11001100_hook("o", i ? e.call(this, n, ct(this).val()) : e, "assign"), null == o ? o = cc11001100_hook("o", "", "assign") : "number" == typeof o ? o += cc11001100_hook("o", "", "assign") : ct.isArray(o) && (o = cc11001100_hook("o", ct.map(o, function (e) {
          return null == e ? "" : e + "";
        }), "assign")), r = cc11001100_hook("r", ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], "assign"), r && "set" in r && r.set(this, o, "value") !== t || (this.value = cc11001100_hook("this.value", o, "assign")));
      })) : o ? (r = cc11001100_hook("r", ct.valHooks[o.type] || ct.valHooks[o.nodeName.toLowerCase()], "assign"), r && "get" in r && (n = cc11001100_hook("n", r.get(o, "value"), "assign")) !== t ? n : (n = cc11001100_hook("n", o.value, "assign"), "string" == typeof n ? n.replace(Lt, "") : null == n ? "" : n)) : void 0;
    }
  }), ct.extend({
    valHooks: {
      option: {
        get: function (e) {
          var t = cc11001100_hook("t", ct.find.attr(e, "value"), "var-init");
          return null != t ? t : e.text;
        }
      },
      select: {
        get: function (e) {
          for (var t, n, r = cc11001100_hook("r", e.options, "var-init"), i = cc11001100_hook("i", e.selectedIndex, "var-init"), o = cc11001100_hook("o", "select-one" === e.type || 0 > i, "var-init"), a = cc11001100_hook("a", o ? null : [], "var-init"), s = cc11001100_hook("s", o ? i + 1 : r.length, "var-init"), u = cc11001100_hook("u", 0 > i ? s : o ? i : 0, "var-init"); s > u; u++) if (n = cc11001100_hook("n", r[u], "assign"), !(!n.selected && u !== i || (ct.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ct.nodeName(n.parentNode, "optgroup"))) {
            if (t = cc11001100_hook("t", ct(n).val(), "assign"), o) return t;
            a.push(t);
          }
          return a;
        },
        set: function (e, t) {
          for (var n, r, i = cc11001100_hook("i", e.options, "var-init"), o = cc11001100_hook("o", ct.makeArray(t), "var-init"), a = cc11001100_hook("a", i.length, "var-init"); a--;) r = cc11001100_hook("r", i[a], "assign"), (r.selected = cc11001100_hook("r.selected", ct.inArray(ct(r).val(), o) >= 0, "assign")) && (n = cc11001100_hook("n", !0, "assign"));
          return n || (e.selectedIndex = cc11001100_hook("e.selectedIndex", -1, "assign")), o;
        }
      }
    },
    attr: function (e, n, r) {
      var i,
        o,
        a = cc11001100_hook("a", e.nodeType, "var-init");
      return e && 3 !== a && 8 !== a && 2 !== a ? typeof e.getAttribute === Y ? ct.prop(e, n, r) : (1 === a && ct.isXMLDoc(e) || (n = cc11001100_hook("n", n.toLowerCase(), "assign"), i = cc11001100_hook("i", ct.attrHooks[n] || (ct.expr.match.bool.test(n) ? jt : At), "assign")), r === t ? i && "get" in i && null !== (o = cc11001100_hook("o", i.get(e, n), "assign")) ? o : (o = cc11001100_hook("o", ct.find.attr(e, n), "assign"), null == o ? t : o) : null !== r ? i && "set" in i && (o = cc11001100_hook("o", i.set(e, r, n), "assign")) !== t ? o : (e.setAttribute(n, r + ""), r) : (ct.removeAttr(e, n), t)) : void 0;
    },
    removeAttr: function (e, t) {
      var n,
        r,
        i = cc11001100_hook("i", 0, "var-init"),
        o = cc11001100_hook("o", t && t.match(pt), "var-init");
      if (o && 1 === e.nodeType) for (; n = cc11001100_hook("n", o[i++], "assign");) r = cc11001100_hook("r", ct.propFix[n] || n, "assign"), ct.expr.match.bool.test(n) ? Ot && Mt || !_t.test(n) ? e[r] = cc11001100_hook("e[r]", !1, "assign") : e[ct.camelCase("default-" + n)] = cc11001100_hook("e[ct.camelCase(\"default-\" + n)]", e[r] = cc11001100_hook("e[r]", !1, "assign"), "assign") : ct.attr(e, n, ""), e.removeAttribute(Mt ? n : r);
    },
    attrHooks: {
      type: {
        set: function (e, t) {
          if (!ct.support.radioValue && "radio" === t && ct.nodeName(e, "input")) {
            var n = cc11001100_hook("n", e.value, "var-init");
            return e.setAttribute("type", t), n && (e.value = cc11001100_hook("e.value", n, "assign")), t;
          }
        }
      }
    },
    propFix: {
      "for": cc11001100_hook("for", "htmlFor", "object-key-init"),
      "class": cc11001100_hook("class", "className", "object-key-init")
    },
    prop: function (e, n, r) {
      var i,
        o,
        a,
        s = cc11001100_hook("s", e.nodeType, "var-init");
      return e && 3 !== s && 8 !== s && 2 !== s ? (a = cc11001100_hook("a", 1 !== s || !ct.isXMLDoc(e), "assign"), a && (n = cc11001100_hook("n", ct.propFix[n] || n, "assign"), o = cc11001100_hook("o", ct.propHooks[n], "assign")), r !== t ? o && "set" in o && (i = cc11001100_hook("i", o.set(e, r, n), "assign")) !== t ? i : e[n] = cc11001100_hook("e[n]", r, "assign") : o && "get" in o && null !== (i = cc11001100_hook("i", o.get(e, n), "assign")) ? i : e[n]) : void 0;
    },
    propHooks: {
      tabIndex: {
        get: function (e) {
          var t = cc11001100_hook("t", ct.find.attr(e, "tabindex"), "var-init");
          return t ? parseInt(t, 10) : Ht.test(e.nodeName) || qt.test(e.nodeName) && e.href ? 0 : -1;
        }
      }
    }
  }), jt = cc11001100_hook("jt", {
    set: function (e, t, n) {
      return t === !1 ? ct.removeAttr(e, n) : Ot && Mt || !_t.test(n) ? e.setAttribute(!Mt && ct.propFix[n] || n, n) : e[ct.camelCase("default-" + n)] = cc11001100_hook("e[ct.camelCase(\"default-\" + n)]", e[n] = cc11001100_hook("e[n]", !0, "assign"), "assign"), n;
    }
  }, "assign"), ct.each(ct.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = cc11001100_hook("r", ct.expr.attrHandle[n] || ct.find.attr, "var-init");
    ct.expr.attrHandle[n] = cc11001100_hook("ct.expr.attrHandle[n]", Ot && Mt || !_t.test(n) ? function (e, n, i) {
      var o = cc11001100_hook("o", ct.expr.attrHandle[n], "var-init"),
        a = cc11001100_hook("a", i ? t : (ct.expr.attrHandle[n] = cc11001100_hook("ct.expr.attrHandle[n]", t, "assign")) != r(e, n, i) ? n.toLowerCase() : null, "var-init");
      return ct.expr.attrHandle[n] = cc11001100_hook("ct.expr.attrHandle[n]", o, "assign"), a;
    } : function (e, n, r) {
      return r ? t : e[ct.camelCase("default-" + n)] ? n.toLowerCase() : null;
    }, "assign");
  }), Ot && Mt || (ct.attrHooks.value = cc11001100_hook("ct.attrHooks.value", {
    set: function (e, n, r) {
      return ct.nodeName(e, "input") ? (e.defaultValue = cc11001100_hook("e.defaultValue", n, "assign"), t) : At && At.set(e, n, r);
    }
  }, "assign")), Mt || (At = cc11001100_hook("At", {
    set: function (e, n, r) {
      var i = cc11001100_hook("i", e.getAttributeNode(r), "var-init");
      return i || e.setAttributeNode(i = cc11001100_hook("i", e.ownerDocument.createAttribute(r), "assign")), i.value = cc11001100_hook("i.value", n += cc11001100_hook("n", "", "assign"), "assign"), "value" === r || n === e.getAttribute(r) ? n : t;
    }
  }, "assign"), ct.expr.attrHandle.id = cc11001100_hook("ct.expr.attrHandle.id", ct.expr.attrHandle.name = cc11001100_hook("ct.expr.attrHandle.name", ct.expr.attrHandle.coords = cc11001100_hook("ct.expr.attrHandle.coords", function (e, n, r) {
    var i;
    return r ? t : (i = cc11001100_hook("i", e.getAttributeNode(n), "assign")) && "" !== i.value ? i.value : null;
  }, "assign"), "assign"), "assign"), ct.valHooks.button = cc11001100_hook("ct.valHooks.button", {
    get: function (e, n) {
      var r = cc11001100_hook("r", e.getAttributeNode(n), "var-init");
      return r && r.specified ? r.value : t;
    },
    set: cc11001100_hook("set", At.set, "object-key-init")
  }, "assign"), ct.attrHooks.contenteditable = cc11001100_hook("ct.attrHooks.contenteditable", {
    set: function (e, t, n) {
      At.set(e, "" === t ? !1 : t, n);
    }
  }, "assign"), ct.each(["width", "height"], function (e, n) {
    ct.attrHooks[n] = cc11001100_hook("ct.attrHooks[n]", {
      set: function (e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
      }
    }, "assign");
  })), ct.support.hrefNormalized || ct.each(["href", "src"], function (e, t) {
    ct.propHooks[t] = cc11001100_hook("ct.propHooks[t]", {
      get: function (e) {
        return e.getAttribute(t, 4);
      }
    }, "assign");
  }), ct.support.style || (ct.attrHooks.style = cc11001100_hook("ct.attrHooks.style", {
    get: function (e) {
      return e.style.cssText || t;
    },
    set: function (e, t) {
      return e.style.cssText = cc11001100_hook("e.style.cssText", t + "", "assign");
    }
  }, "assign")), ct.support.optSelected || (ct.propHooks.selected = cc11001100_hook("ct.propHooks.selected", {
    get: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    }
  }, "assign")), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ct.propFix[this.toLowerCase()] = cc11001100_hook("ct.propFix[this.toLowerCase()]", this, "assign");
  }), ct.support.enctype || (ct.propFix.enctype = cc11001100_hook("ct.propFix.enctype", "encoding", "assign")), ct.each(["radio", "checkbox"], function () {
    ct.valHooks[this] = cc11001100_hook("ct.valHooks[this]", {
      set: function (e, n) {
        return ct.isArray(n) ? e.checked = cc11001100_hook("e.checked", ct.inArray(ct(e).val(), n) >= 0, "assign") : t;
      }
    }, "assign"), ct.support.checkOn || (ct.valHooks[this].get = cc11001100_hook("ct.valHooks[this].get", function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    }, "assign"));
  });
  var Ft = cc11001100_hook("Ft", /^(?:input|select|textarea)$/i, "var-init"),
    Bt = cc11001100_hook("Bt", /^key/, "var-init"),
    Pt = cc11001100_hook("Pt", /^(?:mouse|contextmenu)|click/, "var-init"),
    Rt = cc11001100_hook("Rt", /^(?:focusinfocus|focusoutblur)$/, "var-init"),
    Wt = cc11001100_hook("Wt", /^([^.]*)(?:\.(.+)|)$/, "var-init");
  ct.event = cc11001100_hook("ct.event", {
    global: {},
    add: function (e, n, r, i, o) {
      var a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m,
        y = cc11001100_hook("y", ct._data(e), "var-init");
      if (y) {
        for (r.handler && (l = cc11001100_hook("l", r, "assign"), r = cc11001100_hook("r", l.handler, "assign"), o = cc11001100_hook("o", l.selector, "assign")), r.guid || (r.guid = cc11001100_hook("r.guid", ct.guid++, "assign")), (s = cc11001100_hook("s", y.events, "assign")) || (s = cc11001100_hook("s", y.events = cc11001100_hook("y.events", {}, "assign"), "assign")), (f = cc11001100_hook("f", y.handle, "assign")) || (f = cc11001100_hook("f", y.handle = cc11001100_hook("y.handle", function (e) {
          return typeof ct === Y || e && ct.event.triggered === e.type ? t : ct.event.dispatch.apply(f.elem, arguments);
        }, "assign"), "assign"), f.elem = cc11001100_hook("f.elem", e, "assign")), n = cc11001100_hook("n", (n || "").match(pt) || [""], "assign"), u = cc11001100_hook("u", n.length, "assign"); u--;) a = cc11001100_hook("a", Wt.exec(n[u]) || [], "assign"), h = cc11001100_hook("h", m = cc11001100_hook("m", a[1], "assign"), "assign"), g = cc11001100_hook("g", (a[2] || "").split(".").sort(), "assign"), h && (c = cc11001100_hook("c", ct.event.special[h] || {}, "assign"), h = cc11001100_hook("h", (o ? c.delegateType : c.bindType) || h, "assign"), c = cc11001100_hook("c", ct.event.special[h] || {}, "assign"), p = cc11001100_hook("p", ct.extend({
          type: cc11001100_hook("type", h, "object-key-init"),
          origType: cc11001100_hook("origType", m, "object-key-init"),
          data: cc11001100_hook("data", i, "object-key-init"),
          handler: cc11001100_hook("handler", r, "object-key-init"),
          guid: cc11001100_hook("guid", r.guid, "object-key-init"),
          selector: cc11001100_hook("selector", o, "object-key-init"),
          needsContext: cc11001100_hook("needsContext", o && ct.expr.match.needsContext.test(o), "object-key-init"),
          namespace: cc11001100_hook("namespace", g.join("."), "object-key-init")
        }, l), "assign"), (d = cc11001100_hook("d", s[h], "assign")) || (d = cc11001100_hook("d", s[h] = cc11001100_hook("s[h]", [], "assign"), "assign"), d.delegateCount = cc11001100_hook("d.delegateCount", 0, "assign"), c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = cc11001100_hook("p.handler.guid", r.guid, "assign"))), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ct.event.global[h] = cc11001100_hook("ct.event.global[h]", !0, "assign"));
        e = cc11001100_hook("e", null, "assign");
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        m = cc11001100_hook("m", ct.hasData(e) && ct._data(e), "var-init");
      if (m && (c = cc11001100_hook("c", m.events, "assign"))) {
        for (t = cc11001100_hook("t", (t || "").match(pt) || [""], "assign"), l = cc11001100_hook("l", t.length, "assign"); l--;) if (s = cc11001100_hook("s", Wt.exec(t[l]) || [], "assign"), d = cc11001100_hook("d", g = cc11001100_hook("g", s[1], "assign"), "assign"), h = cc11001100_hook("h", (s[2] || "").split(".").sort(), "assign"), d) {
          for (f = cc11001100_hook("f", ct.event.special[d] || {}, "assign"), d = cc11001100_hook("d", (r ? f.delegateType : f.bindType) || d, "assign"), p = cc11001100_hook("p", c[d] || [], "assign"), s = cc11001100_hook("s", s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), "assign"), u = cc11001100_hook("u", o = cc11001100_hook("o", p.length, "assign"), "assign"); o--;) a = cc11001100_hook("a", p[o], "assign"), !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
          u && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ct.removeEvent(e, d, m.handle), delete c[d]);
        } else for (d in c) ct.event.remove(e, d + t[l], n, r, !0);
        ct.isEmptyObject(c) && (delete m.handle, ct._removeData(e, "events"));
      }
    },
    trigger: function (n, r, i, o) {
      var a,
        s,
        u,
        l,
        c,
        f,
        p,
        d = cc11001100_hook("d", [i || G], "var-init"),
        h = cc11001100_hook("h", ut.call(n, "type") ? n.type : n, "var-init"),
        g = cc11001100_hook("g", ut.call(n, "namespace") ? n.namespace.split(".") : [], "var-init");
      if (u = cc11001100_hook("u", f = cc11001100_hook("f", i = cc11001100_hook("i", i || G, "assign"), "assign"), "assign"), 3 !== i.nodeType && 8 !== i.nodeType && !Rt.test(h + ct.event.triggered) && (h.indexOf(".") >= 0 && (g = cc11001100_hook("g", h.split("."), "assign"), h = cc11001100_hook("h", g.shift(), "assign"), g.sort()), s = cc11001100_hook("s", 0 > h.indexOf(":") && "on" + h, "assign"), n = cc11001100_hook("n", n[ct.expando] ? n : new ct.Event(h, "object" == typeof n && n), "assign"), n.isTrigger = cc11001100_hook("n.isTrigger", o ? 2 : 3, "assign"), n.namespace = cc11001100_hook("n.namespace", g.join("."), "assign"), n.namespace_re = cc11001100_hook("n.namespace_re", n.namespace ? RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, "assign"), n.result = cc11001100_hook("n.result", t, "assign"), n.target || (n.target = cc11001100_hook("n.target", i, "assign")), r = cc11001100_hook("r", null == r ? [n] : ct.makeArray(r, [n]), "assign"), c = cc11001100_hook("c", ct.event.special[h] || {}, "assign"), o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
        if (!o && !c.noBubble && !ct.isWindow(i)) {
          for (l = cc11001100_hook("l", c.delegateType || h, "assign"), Rt.test(l + h) || (u = cc11001100_hook("u", u.parentNode, "assign")); u; u = cc11001100_hook("u", u.parentNode, "assign")) d.push(u), f = cc11001100_hook("f", u, "assign");
          f === (i.ownerDocument || G) && d.push(f.defaultView || f.parentWindow || e);
        }
        for (p = cc11001100_hook("p", 0, "assign"); (u = cc11001100_hook("u", d[p++], "assign")) && !n.isPropagationStopped();) n.type = cc11001100_hook("n.type", p > 1 ? l : c.bindType || h, "assign"), a = cc11001100_hook("a", (ct._data(u, "events") || {})[n.type] && ct._data(u, "handle"), "assign"), a && a.apply(u, r), a = cc11001100_hook("a", s && u[s], "assign"), a && ct.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
        if (n.type = cc11001100_hook("n.type", h, "assign"), !o && !n.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), r) === !1) && ct.acceptData(i) && s && i[h] && !ct.isWindow(i)) {
          f = cc11001100_hook("f", i[s], "assign"), f && (i[s] = cc11001100_hook("i[s]", null, "assign")), ct.event.triggered = cc11001100_hook("ct.event.triggered", h, "assign");
          try {
            i[h]();
          } catch (m) {}
          ct.event.triggered = cc11001100_hook("ct.event.triggered", t, "assign"), f && (i[s] = cc11001100_hook("i[s]", f, "assign"));
        }
        return n.result;
      }
    },
    dispatch: function (e) {
      e = cc11001100_hook("e", ct.event.fix(e), "assign");
      var n,
        r,
        i,
        o,
        a,
        s = cc11001100_hook("s", [], "var-init"),
        u = cc11001100_hook("u", ot.call(arguments), "var-init"),
        l = cc11001100_hook("l", (ct._data(this, "events") || {})[e.type] || [], "var-init"),
        c = cc11001100_hook("c", ct.event.special[e.type] || {}, "var-init");
      if (u[0] = cc11001100_hook("u[0]", e, "assign"), e.delegateTarget = cc11001100_hook("e.delegateTarget", this, "assign"), !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
        for (s = cc11001100_hook("s", ct.event.handlers.call(this, e, l), "assign"), n = cc11001100_hook("n", 0, "assign"); (o = cc11001100_hook("o", s[n++], "assign")) && !e.isPropagationStopped();) for (e.currentTarget = cc11001100_hook("e.currentTarget", o.elem, "assign"), a = cc11001100_hook("a", 0, "assign"); (i = cc11001100_hook("i", o.handlers[a++], "assign")) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = cc11001100_hook("e.handleObj", i, "assign"), e.data = cc11001100_hook("e.data", i.data, "assign"), r = cc11001100_hook("r", ((ct.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), "assign"), r !== t && (e.result = cc11001100_hook("e.result", r, "assign")) === !1 && (e.preventDefault(), e.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, n) {
      var r,
        i,
        o,
        a,
        s = cc11001100_hook("s", [], "var-init"),
        u = cc11001100_hook("u", n.delegateCount, "var-init"),
        l = cc11001100_hook("l", e.target, "var-init");
      if (u && l.nodeType && (!e.button || "click" !== e.type)) for (; l != this; l = cc11001100_hook("l", l.parentNode || this, "assign")) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
        for (o = cc11001100_hook("o", [], "assign"), a = cc11001100_hook("a", 0, "assign"); u > a; a++) i = cc11001100_hook("i", n[a], "assign"), r = cc11001100_hook("r", i.selector + " ", "assign"), o[r] === t && (o[r] = cc11001100_hook("o[r]", i.needsContext ? ct(r, this).index(l) >= 0 : ct.find(r, this, null, [l]).length, "assign")), o[r] && o.push(i);
        o.length && s.push({
          elem: cc11001100_hook("elem", l, "object-key-init"),
          handlers: cc11001100_hook("handlers", o, "object-key-init")
        });
      }
      return n.length > u && s.push({
        elem: cc11001100_hook("elem", this, "object-key-init"),
        handlers: cc11001100_hook("handlers", n.slice(u), "object-key-init")
      }), s;
    },
    fix: function (e) {
      if (e[ct.expando]) return e;
      var t,
        n,
        r,
        i = cc11001100_hook("i", e.type, "var-init"),
        o = cc11001100_hook("o", e, "var-init"),
        a = cc11001100_hook("a", this.fixHooks[i], "var-init");
      for (a || (this.fixHooks[i] = cc11001100_hook("this.fixHooks[i]", a = cc11001100_hook("a", Pt.test(i) ? this.mouseHooks : Bt.test(i) ? this.keyHooks : {}, "assign"), "assign")), r = cc11001100_hook("r", a.props ? this.props.concat(a.props) : this.props, "assign"), e = cc11001100_hook("e", new ct.Event(o), "assign"), t = cc11001100_hook("t", r.length, "assign"); t--;) n = cc11001100_hook("n", r[t], "assign"), e[n] = cc11001100_hook("e[n]", o[n], "assign");
      return e.target || (e.target = cc11001100_hook("e.target", o.srcElement || G, "assign")), 3 === e.target.nodeType && (e.target = cc11001100_hook("e.target", e.target.parentNode, "assign")), e.metaKey = cc11001100_hook("e.metaKey", !!e.metaKey, "assign"), a.filter ? a.filter(e, o) : e;
    },
    props: cc11001100_hook("props", "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), "object-key-init"),
    fixHooks: {},
    keyHooks: {
      props: cc11001100_hook("props", "char charCode key keyCode".split(" "), "object-key-init"),
      filter: function (e, t) {
        return null == e.which && (e.which = cc11001100_hook("e.which", null != t.charCode ? t.charCode : t.keyCode, "assign")), e;
      }
    },
    mouseHooks: {
      props: cc11001100_hook("props", "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), "object-key-init"),
      filter: function (e, n) {
        var r,
          i,
          o,
          a = cc11001100_hook("a", n.button, "var-init"),
          s = cc11001100_hook("s", n.fromElement, "var-init");
        return null == e.pageX && null != n.clientX && (i = cc11001100_hook("i", e.target.ownerDocument || G, "assign"), o = cc11001100_hook("o", i.documentElement, "assign"), r = cc11001100_hook("r", i.body, "assign"), e.pageX = cc11001100_hook("e.pageX", n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), "assign"), e.pageY = cc11001100_hook("e.pageY", n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0), "assign")), !e.relatedTarget && s && (e.relatedTarget = cc11001100_hook("e.relatedTarget", s === e.target ? n.toElement : s, "assign")), e.which || a === t || (e.which = cc11001100_hook("e.which", 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0, "assign")), e;
      }
    },
    special: {
      load: {
        noBubble: cc11001100_hook("noBubble", !0, "object-key-init")
      },
      focus: {
        trigger: function () {
          if (this !== c() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        },
        delegateType: cc11001100_hook("delegateType", "focusin", "object-key-init")
      },
      blur: {
        trigger: function () {
          return this === c() && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: cc11001100_hook("delegateType", "focusout", "object-key-init")
      },
      click: {
        trigger: function () {
          return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
        },
        _default: function (e) {
          return ct.nodeName(e.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = cc11001100_hook("e.originalEvent.returnValue", e.result, "assign"));
        }
      }
    },
    simulate: function (e, t, n, r) {
      var i = cc11001100_hook("i", ct.extend(new ct.Event(), n, {
        type: cc11001100_hook("type", e, "object-key-init"),
        isSimulated: cc11001100_hook("isSimulated", !0, "object-key-init"),
        originalEvent: {}
      }), "var-init");
      r ? ct.event.trigger(i, null, t) : ct.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    }
  }, "assign"), ct.removeEvent = cc11001100_hook("ct.removeEvent", G.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = cc11001100_hook("r", "on" + t, "var-init");
    e.detachEvent && (typeof e[r] === Y && (e[r] = cc11001100_hook("e[r]", null, "assign")), e.detachEvent(r, n));
  }, "assign"), ct.Event = cc11001100_hook("ct.Event", function (e, n) {
    return this instanceof ct.Event ? (e && e.type ? (this.originalEvent = cc11001100_hook("this.originalEvent", e, "assign"), this.type = cc11001100_hook("this.type", e.type, "assign"), this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l, "assign")) : this.type = cc11001100_hook("this.type", e, "assign"), n && ct.extend(this, n), this.timeStamp = cc11001100_hook("this.timeStamp", e && e.timeStamp || ct.now(), "assign"), this[ct.expando] = cc11001100_hook("this[ct.expando]", !0, "assign"), t) : new ct.Event(e, n);
  }, "assign"), ct.Event.prototype = cc11001100_hook("ct.Event.prototype", {
    isDefaultPrevented: cc11001100_hook("isDefaultPrevented", l, "object-key-init"),
    isPropagationStopped: cc11001100_hook("isPropagationStopped", l, "object-key-init"),
    isImmediatePropagationStopped: cc11001100_hook("isImmediatePropagationStopped", l, "object-key-init"),
    preventDefault: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isDefaultPrevented = cc11001100_hook("this.isDefaultPrevented", u, "assign"), e && (e.preventDefault ? e.preventDefault() : e.returnValue = cc11001100_hook("e.returnValue", !1, "assign"));
    },
    stopPropagation: function () {
      var e = cc11001100_hook("e", this.originalEvent, "var-init");
      this.isPropagationStopped = cc11001100_hook("this.isPropagationStopped", u, "assign"), e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = cc11001100_hook("e.cancelBubble", !0, "assign"));
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = cc11001100_hook("this.isImmediatePropagationStopped", u, "assign"), this.stopPropagation();
    }
  }, "assign"), ct.each({
    mouseenter: cc11001100_hook("mouseenter", "mouseover", "object-key-init"),
    mouseleave: cc11001100_hook("mouseleave", "mouseout", "object-key-init")
  }, function (e, t) {
    ct.event.special[e] = cc11001100_hook("ct.event.special[e]", {
      delegateType: cc11001100_hook("delegateType", t, "object-key-init"),
      bindType: cc11001100_hook("bindType", t, "object-key-init"),
      handle: function (e) {
        var n,
          r = cc11001100_hook("r", this, "var-init"),
          i = cc11001100_hook("i", e.relatedTarget, "var-init"),
          o = cc11001100_hook("o", e.handleObj, "var-init");
        return (!i || i !== r && !ct.contains(r, i)) && (e.type = cc11001100_hook("e.type", o.origType, "assign"), n = cc11001100_hook("n", o.handler.apply(this, arguments), "assign"), e.type = cc11001100_hook("e.type", t, "assign")), n;
      }
    }, "assign");
  }), ct.support.submitBubbles || (ct.event.special.submit = cc11001100_hook("ct.event.special.submit", {
    setup: function () {
      return ct.nodeName(this, "form") ? !1 : (ct.event.add(this, "click._submit keypress._submit", function (e) {
        var n = cc11001100_hook("n", e.target, "var-init"),
          r = cc11001100_hook("r", ct.nodeName(n, "input") || ct.nodeName(n, "button") ? n.form : t, "var-init");
        r && !ct._data(r, "submitBubbles") && (ct.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = cc11001100_hook("e._submit_bubble", !0, "assign");
        }), ct._data(r, "submitBubbles", !0));
      }), t);
    },
    postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ct.event.simulate("submit", this.parentNode, e, !0));
    },
    teardown: function () {
      return ct.nodeName(this, "form") ? !1 : (ct.event.remove(this, "._submit"), t);
    }
  }, "assign")), ct.support.changeBubbles || (ct.event.special.change = cc11001100_hook("ct.event.special.change", {
    setup: function () {
      return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ct.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = cc11001100_hook("this._just_changed", !0, "assign"));
      }), ct.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = cc11001100_hook("this._just_changed", !1, "assign")), ct.event.simulate("change", this, e, !0);
      })), !1) : (ct.event.add(this, "beforeactivate._change", function (e) {
        var t = cc11001100_hook("t", e.target, "var-init");
        Ft.test(t.nodeName) && !ct._data(t, "changeBubbles") && (ct.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || ct.event.simulate("change", this.parentNode, e, !0);
        }), ct._data(t, "changeBubbles", !0));
      }), t);
    },
    handle: function (e) {
      var n = cc11001100_hook("n", e.target, "var-init");
      return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    },
    teardown: function () {
      return ct.event.remove(this, "._change"), !Ft.test(this.nodeName);
    }
  }, "assign")), ct.support.focusinBubbles || ct.each({
    focus: cc11001100_hook("focus", "focusin", "object-key-init"),
    blur: cc11001100_hook("blur", "focusout", "object-key-init")
  }, function (e, t) {
    var n = cc11001100_hook("n", 0, "var-init"),
      r = function (e) {
        ct.event.simulate(t, e.target, ct.event.fix(e), !0);
      };
    ct.event.special[t] = cc11001100_hook("ct.event.special[t]", {
      setup: function () {
        0 === n++ && G.addEventListener(e, r, !0);
      },
      teardown: function () {
        0 === --n && G.removeEventListener(e, r, !0);
      }
    }, "assign");
  }), ct.fn.extend({
    on: function (e, n, r, i, o) {
      var a, s;
      if ("object" == typeof e) {
        "string" != typeof n && (r = cc11001100_hook("r", r || n, "assign"), n = cc11001100_hook("n", t, "assign"));
        for (a in e) this.on(a, n, r, e[a], o);
        return this;
      }
      if (null == r && null == i ? (i = cc11001100_hook("i", n, "assign"), r = cc11001100_hook("r", n = cc11001100_hook("n", t, "assign"), "assign")) : null == i && ("string" == typeof n ? (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", t, "assign")) : (i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign"))), i === !1) i = cc11001100_hook("i", l, "assign");else if (!i) return this;
      return 1 === o && (s = cc11001100_hook("s", i, "assign"), i = cc11001100_hook("i", function (e) {
        return ct().off(e), s.apply(this, arguments);
      }, "assign"), i.guid = cc11001100_hook("i.guid", s.guid || (s.guid = cc11001100_hook("s.guid", ct.guid++, "assign")), "assign")), this.each(function () {
        ct.event.add(this, e, i, r, n);
      });
    },
    one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off: function (e, n, r) {
      var i, o;
      if (e && e.preventDefault && e.handleObj) return i = cc11001100_hook("i", e.handleObj, "assign"), ct(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      if ("object" == typeof e) {
        for (o in e) this.off(o, n, e[o]);
        return this;
      }
      return (n === !1 || "function" == typeof n) && (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign")), r === !1 && (r = cc11001100_hook("r", l, "assign")), this.each(function () {
        ct.event.remove(this, e, r, n);
      });
    },
    trigger: function (e, t) {
      return this.each(function () {
        ct.event.trigger(e, t, this);
      });
    },
    triggerHandler: function (e, n) {
      var r = cc11001100_hook("r", this[0], "var-init");
      return r ? ct.event.trigger(e, n, r, !0) : t;
    }
  });
  var $t = cc11001100_hook("$t", /^.[^:#\[\.,]*$/, "var-init"),
    It = cc11001100_hook("It", /^(?:parents|prev(?:Until|All))/, "var-init"),
    zt = cc11001100_hook("zt", ct.expr.match.needsContext, "var-init"),
    Xt = cc11001100_hook("Xt", {
      children: cc11001100_hook("children", !0, "object-key-init"),
      contents: cc11001100_hook("contents", !0, "object-key-init"),
      next: cc11001100_hook("next", !0, "object-key-init"),
      prev: cc11001100_hook("prev", !0, "object-key-init")
    }, "var-init");
  ct.fn.extend({
    find: function (e) {
      var t,
        n = cc11001100_hook("n", [], "var-init"),
        r = cc11001100_hook("r", this, "var-init"),
        i = cc11001100_hook("i", r.length, "var-init");
      if ("string" != typeof e) return this.pushStack(ct(e).filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); i > t; t++) if (ct.contains(r[t], this)) return !0;
      }));
      for (t = cc11001100_hook("t", 0, "assign"); i > t; t++) ct.find(e, r[t], n);
      return n = cc11001100_hook("n", this.pushStack(i > 1 ? ct.unique(n) : n), "assign"), n.selector = cc11001100_hook("n.selector", this.selector ? this.selector + " " + e : e, "assign"), n;
    },
    has: function (e) {
      var t,
        n = cc11001100_hook("n", ct(e, this), "var-init"),
        r = cc11001100_hook("r", n.length, "var-init");
      return this.filter(function () {
        for (t = cc11001100_hook("t", 0, "assign"); r > t; t++) if (ct.contains(this, n[t])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(p(this, e || [], !0));
    },
    filter: function (e) {
      return this.pushStack(p(this, e || [], !1));
    },
    is: function (e) {
      return !!p(this, "string" == typeof e && zt.test(e) ? ct(e) : e || [], !1).length;
    },
    closest: function (e, t) {
      for (var n, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", this.length, "var-init"), o = cc11001100_hook("o", [], "var-init"), a = cc11001100_hook("a", zt.test(e) || "string" != typeof e ? ct(e, t || this.context) : 0, "var-init"); i > r; r++) for (n = cc11001100_hook("n", this[r], "assign"); n && n !== t; n = cc11001100_hook("n", n.parentNode, "assign")) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ct.find.matchesSelector(n, e))) {
        n = cc11001100_hook("n", o.push(n), "assign");
        break;
      }
      return this.pushStack(o.length > 1 ? ct.unique(o) : o);
    },
    index: function (e) {
      return e ? "string" == typeof e ? ct.inArray(this[0], ct(e)) : ct.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      var n = cc11001100_hook("n", "string" == typeof e ? ct(e, t) : ct.makeArray(e && e.nodeType ? [e] : e), "var-init"),
        r = cc11001100_hook("r", ct.merge(this.get(), n), "var-init");
      return this.pushStack(ct.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }), ct.each({
    parent: function (e) {
      var t = cc11001100_hook("t", e.parentNode, "var-init");
      return t && 11 !== t.nodeType ? t : null;
    },
    parents: function (e) {
      return ct.dir(e, "parentNode");
    },
    parentsUntil: function (e, t, n) {
      return ct.dir(e, "parentNode", n);
    },
    next: function (e) {
      return f(e, "nextSibling");
    },
    prev: function (e) {
      return f(e, "previousSibling");
    },
    nextAll: function (e) {
      return ct.dir(e, "nextSibling");
    },
    prevAll: function (e) {
      return ct.dir(e, "previousSibling");
    },
    nextUntil: function (e, t, n) {
      return ct.dir(e, "nextSibling", n);
    },
    prevUntil: function (e, t, n) {
      return ct.dir(e, "previousSibling", n);
    },
    siblings: function (e) {
      return ct.sibling((e.parentNode || {}).firstChild, e);
    },
    children: function (e) {
      return ct.sibling(e.firstChild);
    },
    contents: function (e) {
      return ct.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ct.merge([], e.childNodes);
    }
  }, function (e, t) {
    ct.fn[e] = cc11001100_hook("ct.fn[e]", function (n, r) {
      var i = cc11001100_hook("i", ct.map(this, t, n), "var-init");
      return "Until" !== e.slice(-5) && (r = cc11001100_hook("r", n, "assign")), r && "string" == typeof r && (i = cc11001100_hook("i", ct.filter(r, i), "assign")), this.length > 1 && (Xt[e] || (i = cc11001100_hook("i", ct.unique(i), "assign")), It.test(e) && (i = cc11001100_hook("i", i.reverse(), "assign"))), this.pushStack(i);
    }, "assign");
  }), ct.extend({
    filter: function (e, t, n) {
      var r = cc11001100_hook("r", t[0], "var-init");
      return n && (e = cc11001100_hook("e", ":not(" + e + ")", "assign")), 1 === t.length && 1 === r.nodeType ? ct.find.matchesSelector(r, e) ? [r] : [] : ct.find.matches(e, ct.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    },
    dir: function (e, n, r) {
      for (var i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", e[n], "var-init"); o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ct(o).is(r));) 1 === o.nodeType && i.push(o), o = cc11001100_hook("o", o[n], "assign");
      return i;
    },
    sibling: function (e, t) {
      for (var n = cc11001100_hook("n", [], "var-init"); e; e = cc11001100_hook("e", e.nextSibling, "assign")) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    }
  });
  var Ut = cc11001100_hook("Ut", "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", "var-init"),
    Vt = cc11001100_hook("Vt", / jQuery\d+="(?:null|\d+)"/g, "var-init"),
    Yt = cc11001100_hook("Yt", RegExp("<(?:" + Ut + ")[\\s/>]", "i"), "var-init"),
    Jt = cc11001100_hook("Jt", /^\s+/, "var-init"),
    Gt = cc11001100_hook("Gt", /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, "var-init"),
    Qt = cc11001100_hook("Qt", /<([\w:]+)/, "var-init"),
    Kt = cc11001100_hook("Kt", /<tbody/i, "var-init"),
    Zt = cc11001100_hook("Zt", /<|&#?\w+;/, "var-init"),
    en = cc11001100_hook("en", /<(?:script|style|link)/i, "var-init"),
    tn = cc11001100_hook("tn", /^(?:checkbox|radio)$/i, "var-init"),
    nn = cc11001100_hook("nn", /checked\s*(?:[^=]|=\s*.checked.)/i, "var-init"),
    rn = cc11001100_hook("rn", /^$|\/(?:java|ecma)script/i, "var-init"),
    on = cc11001100_hook("on", /^true\/(.*)/, "var-init"),
    an = cc11001100_hook("an", /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, "var-init"),
    sn = cc11001100_hook("sn", {
      option: cc11001100_hook("option", [1, "<select multiple='multiple'>", "</select>"], "object-key-init"),
      legend: cc11001100_hook("legend", [1, "<fieldset>", "</fieldset>"], "object-key-init"),
      area: cc11001100_hook("area", [1, "<map>", "</map>"], "object-key-init"),
      param: cc11001100_hook("param", [1, "<object>", "</object>"], "object-key-init"),
      thead: cc11001100_hook("thead", [1, "<table>", "</table>"], "object-key-init"),
      tr: cc11001100_hook("tr", [2, "<table><tbody>", "</tbody></table>"], "object-key-init"),
      col: cc11001100_hook("col", [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], "object-key-init"),
      td: cc11001100_hook("td", [3, "<table><tbody><tr>", "</tr></tbody></table>"], "object-key-init"),
      _default: cc11001100_hook("_default", ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"], "object-key-init")
    }, "var-init"),
    un = cc11001100_hook("un", d(G), "var-init"),
    ln = cc11001100_hook("ln", un.appendChild(G.createElement("div")), "var-init");
  sn.optgroup = cc11001100_hook("sn.optgroup", sn.option, "assign"), sn.tbody = cc11001100_hook("sn.tbody", sn.tfoot = cc11001100_hook("sn.tfoot", sn.colgroup = cc11001100_hook("sn.colgroup", sn.caption = cc11001100_hook("sn.caption", sn.thead, "assign"), "assign"), "assign"), "assign"), sn.th = cc11001100_hook("sn.th", sn.td, "assign"), ct.fn.extend({
    text: function (e) {
      return ct.access(this, function (e) {
        return e === t ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e));
      }, null, e, arguments.length);
    },
    append: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = cc11001100_hook("t", h(this, e), "var-init");
          t.appendChild(e);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = cc11001100_hook("t", h(this, e), "var-init");
          t.insertBefore(e, t.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    },
    after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    },
    remove: function (e, t) {
      for (var n, r = cc11001100_hook("r", e ? ct.filter(e, this) : this, "var-init"), i = cc11001100_hook("i", 0, "var-init"); null != (n = cc11001100_hook("n", r[i], "assign")); i++) t || 1 !== n.nodeType || ct.cleanData(x(n)), n.parentNode && (t && ct.contains(n.ownerDocument, n) && y(x(n, "script")), n.parentNode.removeChild(n));
      return this;
    },
    empty: function () {
      for (var e, t = cc11001100_hook("t", 0, "var-init"); null != (e = cc11001100_hook("e", this[t], "assign")); t++) {
        for (1 === e.nodeType && ct.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
        e.options && ct.nodeName(e, "select") && (e.options.length = cc11001100_hook("e.options.length", 0, "assign"));
      }
      return this;
    },
    clone: function (e, t) {
      return e = cc11001100_hook("e", null == e ? !1 : e, "assign"), t = cc11001100_hook("t", null == t ? e : t, "assign"), this.map(function () {
        return ct.clone(this, e, t);
      });
    },
    html: function (e) {
      return ct.access(this, function (e) {
        var n = cc11001100_hook("n", this[0] || {}, "var-init"),
          r = cc11001100_hook("r", 0, "var-init"),
          i = cc11001100_hook("i", this.length, "var-init");
        if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
        if (!("string" != typeof e || en.test(e) || !ct.support.htmlSerialize && Yt.test(e) || !ct.support.leadingWhitespace && Jt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = cc11001100_hook("e", e.replace(Gt, "<$1></$2>"), "assign");
          try {
            for (; i > r; r++) n = cc11001100_hook("n", this[r] || {}, "assign"), 1 === n.nodeType && (ct.cleanData(x(n, !1)), n.innerHTML = cc11001100_hook("n.innerHTML", e, "assign"));
            n = cc11001100_hook("n", 0, "assign");
          } catch (o) {}
        }
        n && this.empty().append(e);
      }, null, e, arguments.length);
    },
    replaceWith: function () {
      var e = cc11001100_hook("e", ct.map(this, function (e) {
          return [e.nextSibling, e.parentNode];
        }), "var-init"),
        t = cc11001100_hook("t", 0, "var-init");
      return this.domManip(arguments, function (n) {
        var r = cc11001100_hook("r", e[t++], "var-init"),
          i = cc11001100_hook("i", e[t++], "var-init");
        i && (r && r.parentNode !== i && (r = cc11001100_hook("r", this.nextSibling, "assign")), ct(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    },
    detach: function (e) {
      return this.remove(e, !0);
    },
    domManip: function (e, t, n) {
      e = cc11001100_hook("e", rt.apply([], e), "assign");
      var r,
        i,
        o,
        a,
        s,
        u,
        l = cc11001100_hook("l", 0, "var-init"),
        c = cc11001100_hook("c", this.length, "var-init"),
        f = cc11001100_hook("f", this, "var-init"),
        p = cc11001100_hook("p", c - 1, "var-init"),
        d = cc11001100_hook("d", e[0], "var-init"),
        h = cc11001100_hook("h", ct.isFunction(d), "var-init");
      if (h || !(1 >= c || "string" != typeof d || ct.support.checkClone) && nn.test(d)) return this.each(function (r) {
        var i = cc11001100_hook("i", f.eq(r), "var-init");
        h && (e[0] = cc11001100_hook("e[0]", d.call(this, r, i.html()), "assign")), i.domManip(e, t, n);
      });
      if (c && (u = cc11001100_hook("u", ct.buildFragment(e, this[0].ownerDocument, !1, !n && this), "assign"), r = cc11001100_hook("r", u.firstChild, "assign"), 1 === u.childNodes.length && (u = cc11001100_hook("u", r, "assign")), r)) {
        for (a = cc11001100_hook("a", ct.map(x(u, "script"), g), "assign"), o = cc11001100_hook("o", a.length, "assign"); c > l; l++) i = cc11001100_hook("i", u, "assign"), l !== p && (i = cc11001100_hook("i", ct.clone(i, !0, !0), "assign"), o && ct.merge(a, x(i, "script"))), t.call(this[l], i, l);
        if (o) for (s = cc11001100_hook("s", a[a.length - 1].ownerDocument, "assign"), ct.map(a, m), l = cc11001100_hook("l", 0, "assign"); o > l; l++) i = cc11001100_hook("i", a[l], "assign"), rn.test(i.type || "") && !ct._data(i, "globalEval") && ct.contains(s, i) && (i.src ? ct._evalUrl(i.src) : ct.globalEval((i.text || i.textContent || i.innerHTML || "").replace(an, "")));
        u = cc11001100_hook("u", r = cc11001100_hook("r", null, "assign"), "assign");
      }
      return this;
    }
  }), ct.each({
    appendTo: cc11001100_hook("appendTo", "append", "object-key-init"),
    prependTo: cc11001100_hook("prependTo", "prepend", "object-key-init"),
    insertBefore: cc11001100_hook("insertBefore", "before", "object-key-init"),
    insertAfter: cc11001100_hook("insertAfter", "after", "object-key-init"),
    replaceAll: cc11001100_hook("replaceAll", "replaceWith", "object-key-init")
  }, function (e, t) {
    ct.fn[e] = cc11001100_hook("ct.fn[e]", function (e) {
      for (var n, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", [], "var-init"), o = cc11001100_hook("o", ct(e), "var-init"), a = cc11001100_hook("a", o.length - 1, "var-init"); a >= r; r++) n = cc11001100_hook("n", r === a ? this : this.clone(!0), "assign"), ct(o[r])[t](n), it.apply(i, n.get());
      return this.pushStack(i);
    }, "assign");
  }), ct.extend({
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u = cc11001100_hook("u", ct.contains(e.ownerDocument, e), "var-init");
      if (ct.support.html5Clone || ct.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = cc11001100_hook("o", e.cloneNode(!0), "assign") : (ln.innerHTML = cc11001100_hook("ln.innerHTML", e.outerHTML, "assign"), ln.removeChild(o = cc11001100_hook("o", ln.firstChild, "assign"))), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ct.isXMLDoc(e))) for (r = cc11001100_hook("r", x(o), "assign"), s = cc11001100_hook("s", x(e), "assign"), a = cc11001100_hook("a", 0, "assign"); null != (i = cc11001100_hook("i", s[a], "assign")); ++a) r[a] && b(i, r[a]);
      if (t) if (n) for (s = cc11001100_hook("s", s || x(e), "assign"), r = cc11001100_hook("r", r || x(o), "assign"), a = cc11001100_hook("a", 0, "assign"); null != (i = cc11001100_hook("i", s[a], "assign")); a++) v(i, r[a]);else v(e, o);
      return r = cc11001100_hook("r", x(o, "script"), "assign"), r.length > 0 && y(r, !u && x(e, "script")), r = cc11001100_hook("r", s = cc11001100_hook("s", i = cc11001100_hook("i", null, "assign"), "assign"), "assign"), o;
    },
    buildFragment: function (e, t, n, r) {
      for (var i, o, a, s, u, l, c, f = cc11001100_hook("f", e.length, "var-init"), p = cc11001100_hook("p", d(t), "var-init"), h = cc11001100_hook("h", [], "var-init"), g = cc11001100_hook("g", 0, "var-init"); f > g; g++) if (o = cc11001100_hook("o", e[g], "assign"), o || 0 === o) if ("object" === ct.type(o)) ct.merge(h, o.nodeType ? [o] : o);else if (Zt.test(o)) {
        for (s = cc11001100_hook("s", s || p.appendChild(t.createElement("div")), "assign"), u = cc11001100_hook("u", (Qt.exec(o) || ["", ""])[1].toLowerCase(), "assign"), c = cc11001100_hook("c", sn[u] || sn._default, "assign"), s.innerHTML = cc11001100_hook("s.innerHTML", c[1] + o.replace(Gt, "<$1></$2>") + c[2], "assign"), i = cc11001100_hook("i", c[0], "assign"); i--;) s = cc11001100_hook("s", s.lastChild, "assign");
        if (!ct.support.leadingWhitespace && Jt.test(o) && h.push(t.createTextNode(Jt.exec(o)[0])), !ct.support.tbody) for (o = cc11001100_hook("o", "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : s : s.firstChild, "assign"), i = cc11001100_hook("i", o && o.childNodes.length, "assign"); i--;) ct.nodeName(l = cc11001100_hook("l", o.childNodes[i], "assign"), "tbody") && !l.childNodes.length && o.removeChild(l);
        for (ct.merge(h, s.childNodes), s.textContent = cc11001100_hook("s.textContent", "", "assign"); s.firstChild;) s.removeChild(s.firstChild);
        s = cc11001100_hook("s", p.lastChild, "assign");
      } else h.push(t.createTextNode(o));
      for (s && p.removeChild(s), ct.support.appendChecked || ct.grep(x(h, "input"), T), g = cc11001100_hook("g", 0, "assign"); o = cc11001100_hook("o", h[g++], "assign");) if ((!r || -1 === ct.inArray(o, r)) && (a = cc11001100_hook("a", ct.contains(o.ownerDocument, o), "assign"), s = cc11001100_hook("s", x(p.appendChild(o), "script"), "assign"), a && y(s), n)) for (i = cc11001100_hook("i", 0, "assign"); o = cc11001100_hook("o", s[i++], "assign");) rn.test(o.type || "") && n.push(o);
      return s = cc11001100_hook("s", null, "assign"), p;
    },
    cleanData: function (e, t) {
      for (var n, r, i, o, a = cc11001100_hook("a", 0, "var-init"), s = cc11001100_hook("s", ct.expando, "var-init"), u = cc11001100_hook("u", ct.cache, "var-init"), l = cc11001100_hook("l", ct.support.deleteExpando, "var-init"), c = cc11001100_hook("c", ct.event.special, "var-init"); null != (n = cc11001100_hook("n", e[a], "assign")); a++) if ((t || ct.acceptData(n)) && (i = cc11001100_hook("i", n[s], "assign"), o = cc11001100_hook("o", i && u[i], "assign"))) {
        if (o.events) for (r in o.events) c[r] ? ct.event.remove(n, r) : ct.removeEvent(n, r, o.handle);
        u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== Y ? n.removeAttribute(s) : n[s] = cc11001100_hook("n[s]", null, "assign"), tt.push(i));
      }
    },
    _evalUrl: function (e) {
      return ct.ajax({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", "GET", "object-key-init"),
        dataType: cc11001100_hook("dataType", "script", "object-key-init"),
        async: cc11001100_hook("async", !1, "object-key-init"),
        global: cc11001100_hook("global", !1, "object-key-init"),
        "throws": cc11001100_hook("throws", !0, "object-key-init")
      });
    }
  }), ct.fn.extend({
    wrapAll: function (e) {
      if (ct.isFunction(e)) return this.each(function (t) {
        ct(this).wrapAll(e.call(this, t));
      });
      if (this[0]) {
        var t = cc11001100_hook("t", ct(e, this[0].ownerDocument).eq(0).clone(!0), "var-init");
        this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = cc11001100_hook("e", this, "var-init"); e.firstChild && 1 === e.firstChild.nodeType;) e = cc11001100_hook("e", e.firstChild, "assign");
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (e) {
      return this.each(ct.isFunction(e) ? function (t) {
        ct(this).wrapInner(e.call(this, t));
      } : function () {
        var t = cc11001100_hook("t", ct(this), "var-init"),
          n = cc11001100_hook("n", t.contents(), "var-init");
        n.length ? n.wrapAll(e) : t.append(e);
      });
    },
    wrap: function (e) {
      var t = cc11001100_hook("t", ct.isFunction(e), "var-init");
      return this.each(function (n) {
        ct(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes);
      }).end();
    }
  });
  var cn,
    fn,
    pn,
    dn = cc11001100_hook("dn", /alpha\([^)]*\)/i, "var-init"),
    hn = cc11001100_hook("hn", /opacity\s*=\s*([^)]*)/, "var-init"),
    gn = cc11001100_hook("gn", /^(top|right|bottom|left)$/, "var-init"),
    mn = cc11001100_hook("mn", /^(none|table(?!-c[ea]).+)/, "var-init"),
    yn = cc11001100_hook("yn", /^margin/, "var-init"),
    vn = cc11001100_hook("vn", RegExp("^(" + ft + ")(.*)$", "i"), "var-init"),
    bn = cc11001100_hook("bn", RegExp("^(" + ft + ")(?!px)[a-z%]+$", "i"), "var-init"),
    xn = cc11001100_hook("xn", RegExp("^([+-])=(" + ft + ")", "i"), "var-init"),
    Tn = cc11001100_hook("Tn", {
      BODY: cc11001100_hook("BODY", "block", "object-key-init")
    }, "var-init"),
    wn = cc11001100_hook("wn", {
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      visibility: cc11001100_hook("visibility", "hidden", "object-key-init"),
      display: cc11001100_hook("display", "block", "object-key-init")
    }, "var-init"),
    Cn = cc11001100_hook("Cn", {
      letterSpacing: cc11001100_hook("letterSpacing", 0, "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", 400, "object-key-init")
    }, "var-init"),
    Nn = cc11001100_hook("Nn", ["Top", "Right", "Bottom", "Left"], "var-init"),
    kn = cc11001100_hook("kn", ["Webkit", "O", "Moz", "ms"], "var-init");
  ct.fn.extend({
    css: function (e, n) {
      return ct.access(this, function (e, n, r) {
        var i,
          o,
          a = cc11001100_hook("a", {}, "var-init"),
          s = cc11001100_hook("s", 0, "var-init");
        if (ct.isArray(n)) {
          for (o = cc11001100_hook("o", fn(e), "assign"), i = cc11001100_hook("i", n.length, "assign"); i > s; s++) a[n[s]] = cc11001100_hook("a[n[s]]", ct.css(e, n[s], !1, o), "assign");
          return a;
        }
        return r !== t ? ct.style(e, n, r) : ct.css(e, n);
      }, e, n, arguments.length > 1);
    },
    show: function () {
      return N(this, !0);
    },
    hide: function () {
      return N(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        C(this) ? ct(this).show() : ct(this).hide();
      });
    }
  }), ct.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = cc11001100_hook("n", pn(e, "opacity"), "var-init");
            return "" === n ? "1" : n;
          }
        }
      }
    },
    cssNumber: {
      columnCount: cc11001100_hook("columnCount", !0, "object-key-init"),
      fillOpacity: cc11001100_hook("fillOpacity", !0, "object-key-init"),
      fontWeight: cc11001100_hook("fontWeight", !0, "object-key-init"),
      lineHeight: cc11001100_hook("lineHeight", !0, "object-key-init"),
      opacity: cc11001100_hook("opacity", !0, "object-key-init"),
      order: cc11001100_hook("order", !0, "object-key-init"),
      orphans: cc11001100_hook("orphans", !0, "object-key-init"),
      widows: cc11001100_hook("widows", !0, "object-key-init"),
      zIndex: cc11001100_hook("zIndex", !0, "object-key-init"),
      zoom: cc11001100_hook("zoom", !0, "object-key-init")
    },
    cssProps: {
      "float": cc11001100_hook("float", ct.support.cssFloat ? "cssFloat" : "styleFloat", "object-key-init")
    },
    style: function (e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          a,
          s,
          u = cc11001100_hook("u", ct.camelCase(n), "var-init"),
          l = cc11001100_hook("l", e.style, "var-init");
        if (n = cc11001100_hook("n", ct.cssProps[u] || (ct.cssProps[u] = cc11001100_hook("ct.cssProps[u]", w(l, u), "assign")), "assign"), s = cc11001100_hook("s", ct.cssHooks[n] || ct.cssHooks[u], "assign"), r === t) return s && "get" in s && (o = cc11001100_hook("o", s.get(e, !1, i), "assign")) !== t ? o : l[n];
        if (a = cc11001100_hook("a", typeof r, "assign"), "string" === a && (o = cc11001100_hook("o", xn.exec(r), "assign")) && (r = cc11001100_hook("r", (o[1] + 1) * o[2] + parseFloat(ct.css(e, n)), "assign"), a = cc11001100_hook("a", "number", "assign")), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ct.cssNumber[u] || (r += cc11001100_hook("r", "px", "assign")), ct.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = cc11001100_hook("l[n]", "inherit", "assign")), s && "set" in s && (r = cc11001100_hook("r", s.set(e, r, i), "assign")) === t))) try {
          l[n] = cc11001100_hook("l[n]", r, "assign");
        } catch (c) {}
      }
    },
    css: function (e, n, r, i) {
      var o,
        a,
        s,
        u = cc11001100_hook("u", ct.camelCase(n), "var-init");
      return n = cc11001100_hook("n", ct.cssProps[u] || (ct.cssProps[u] = cc11001100_hook("ct.cssProps[u]", w(e.style, u), "assign")), "assign"), s = cc11001100_hook("s", ct.cssHooks[n] || ct.cssHooks[u], "assign"), s && "get" in s && (a = cc11001100_hook("a", s.get(e, !0, r), "assign")), a === t && (a = cc11001100_hook("a", pn(e, n, i), "assign")), "normal" === a && n in Cn && (a = cc11001100_hook("a", Cn[n], "assign")), "" === r || r ? (o = cc11001100_hook("o", parseFloat(a), "assign"), r === !0 || ct.isNumeric(o) ? o || 0 : a) : a;
    }
  }), e.getComputedStyle ? (fn = cc11001100_hook("fn", function (t) {
    return e.getComputedStyle(t, null);
  }, "assign"), pn = cc11001100_hook("pn", function (e, n, r) {
    var i,
      o,
      a,
      s = cc11001100_hook("s", r || fn(e), "var-init"),
      u = cc11001100_hook("u", s ? s.getPropertyValue(n) || s[n] : t, "var-init"),
      l = cc11001100_hook("l", e.style, "var-init");
    return s && ("" !== u || ct.contains(e.ownerDocument, e) || (u = cc11001100_hook("u", ct.style(e, n), "assign")), bn.test(u) && yn.test(n) && (i = cc11001100_hook("i", l.width, "assign"), o = cc11001100_hook("o", l.minWidth, "assign"), a = cc11001100_hook("a", l.maxWidth, "assign"), l.minWidth = cc11001100_hook("l.minWidth", l.maxWidth = cc11001100_hook("l.maxWidth", l.width = cc11001100_hook("l.width", u, "assign"), "assign"), "assign"), u = cc11001100_hook("u", s.width, "assign"), l.width = cc11001100_hook("l.width", i, "assign"), l.minWidth = cc11001100_hook("l.minWidth", o, "assign"), l.maxWidth = cc11001100_hook("l.maxWidth", a, "assign"))), u;
  }, "assign")) : G.documentElement.currentStyle && (fn = cc11001100_hook("fn", function (e) {
    return e.currentStyle;
  }, "assign"), pn = cc11001100_hook("pn", function (e, n, r) {
    var i,
      o,
      a,
      s = cc11001100_hook("s", r || fn(e), "var-init"),
      u = cc11001100_hook("u", s ? s[n] : t, "var-init"),
      l = cc11001100_hook("l", e.style, "var-init");
    return null == u && l && l[n] && (u = cc11001100_hook("u", l[n], "assign")), bn.test(u) && !gn.test(n) && (i = cc11001100_hook("i", l.left, "assign"), o = cc11001100_hook("o", e.runtimeStyle, "assign"), a = cc11001100_hook("a", o && o.left, "assign"), a && (o.left = cc11001100_hook("o.left", e.currentStyle.left, "assign")), l.left = cc11001100_hook("l.left", "fontSize" === n ? "1em" : u, "assign"), u = cc11001100_hook("u", l.pixelLeft + "px", "assign"), l.left = cc11001100_hook("l.left", i, "assign"), a && (o.left = cc11001100_hook("o.left", a, "assign"))), "" === u ? "auto" : u;
  }, "assign")), ct.each(["height", "width"], function (e, n) {
    ct.cssHooks[n] = cc11001100_hook("ct.cssHooks[n]", {
      get: function (e, r, i) {
        return r ? 0 === e.offsetWidth && mn.test(ct.css(e, "display")) ? ct.swap(e, wn, function () {
          return S(e, n, i);
        }) : S(e, n, i) : t;
      },
      set: function (e, t, r) {
        var i = cc11001100_hook("i", r && fn(e), "var-init");
        return k(e, t, r ? E(e, n, r, ct.support.boxSizing && "border-box" === ct.css(e, "boxSizing", !1, i), i) : 0);
      }
    }, "assign");
  }), ct.support.opacity || (ct.cssHooks.opacity = cc11001100_hook("ct.cssHooks.opacity", {
    get: function (e, t) {
      return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    },
    set: function (e, t) {
      var n = cc11001100_hook("n", e.style, "var-init"),
        r = cc11001100_hook("r", e.currentStyle, "var-init"),
        i = cc11001100_hook("i", ct.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", "var-init"),
        o = cc11001100_hook("o", r && r.filter || n.filter || "", "var-init");
      n.zoom = cc11001100_hook("n.zoom", 1, "assign"), (t >= 1 || "" === t) && "" === ct.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = cc11001100_hook("n.filter", dn.test(o) ? o.replace(dn, i) : o + " " + i, "assign"));
    }
  }, "assign")), ct(function () {
    ct.support.reliableMarginRight || (ct.cssHooks.marginRight = cc11001100_hook("ct.cssHooks.marginRight", {
      get: function (e, n) {
        return n ? ct.swap(e, {
          display: cc11001100_hook("display", "inline-block", "object-key-init")
        }, pn, [e, "marginRight"]) : t;
      }
    }, "assign")), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function (e, n) {
      ct.cssHooks[n] = cc11001100_hook("ct.cssHooks[n]", {
        get: function (e, r) {
          return r ? (r = cc11001100_hook("r", pn(e, n), "assign"), bn.test(r) ? ct(e).position()[n] + "px" : r) : t;
        }
      }, "assign");
    });
  }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = cc11001100_hook("ct.expr.filters.hidden", function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ct.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ct.css(e, "display"));
  }, "assign"), ct.expr.filters.visible = cc11001100_hook("ct.expr.filters.visible", function (e) {
    return !ct.expr.filters.hidden(e);
  }, "assign")), ct.each({
    margin: cc11001100_hook("margin", "", "object-key-init"),
    padding: cc11001100_hook("padding", "", "object-key-init"),
    border: cc11001100_hook("border", "Width", "object-key-init")
  }, function (e, t) {
    ct.cssHooks[e + t] = cc11001100_hook("ct.cssHooks[e + t]", {
      expand: function (n) {
        for (var r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", {}, "var-init"), o = cc11001100_hook("o", "string" == typeof n ? n.split(" ") : [n], "var-init"); 4 > r; r++) i[e + Nn[r] + t] = cc11001100_hook("i[e + Nn[r] + t]", o[r] || o[r - 2] || o[0], "assign");
        return i;
      }
    }, "assign"), yn.test(e) || (ct.cssHooks[e + t].set = cc11001100_hook("ct.cssHooks[e + t].set", k, "assign"));
  });
  var En = cc11001100_hook("En", /%20/g, "var-init"),
    Sn = cc11001100_hook("Sn", /\[\]$/, "var-init"),
    An = cc11001100_hook("An", /\r?\n/g, "var-init"),
    jn = cc11001100_hook("jn", /^(?:submit|button|image|reset|file)$/i, "var-init"),
    Dn = cc11001100_hook("Dn", /^(?:input|select|textarea|keygen)/i, "var-init");
  ct.fn.extend({
    serialize: function () {
      return ct.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = cc11001100_hook("e", ct.prop(this, "elements"), "var-init");
        return e ? ct.makeArray(e) : this;
      }).filter(function () {
        var e = cc11001100_hook("e", this.type, "var-init");
        return this.name && !ct(this).is(":disabled") && Dn.test(this.nodeName) && !jn.test(e) && (this.checked || !tn.test(e));
      }).map(function (e, t) {
        var n = cc11001100_hook("n", ct(this).val(), "var-init");
        return null == n ? null : ct.isArray(n) ? ct.map(n, function (e) {
          return {
            name: cc11001100_hook("name", t.name, "object-key-init"),
            value: cc11001100_hook("value", e.replace(An, "\r\n"), "object-key-init")
          };
        }) : {
          name: cc11001100_hook("name", t.name, "object-key-init"),
          value: cc11001100_hook("value", n.replace(An, "\r\n"), "object-key-init")
        };
      }).get();
    }
  }), ct.param = cc11001100_hook("ct.param", function (e, n) {
    var r,
      i = cc11001100_hook("i", [], "var-init"),
      o = function (e, t) {
        t = cc11001100_hook("t", ct.isFunction(t) ? t() : null == t ? "" : t, "assign"), i[i.length] = cc11001100_hook("i[i.length]", encodeURIComponent(e) + "=" + encodeURIComponent(t), "assign");
      };
    if (n === t && (n = cc11001100_hook("n", ct.ajaxSettings && ct.ajaxSettings.traditional, "assign")), ct.isArray(e) || e.jquery && !ct.isPlainObject(e)) ct.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) D(r, e[r], n, o);
    return i.join("&").replace(En, "+");
  }, "assign"), ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    ct.fn[t] = cc11001100_hook("ct.fn[t]", function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    }, "assign");
  }), ct.fn.extend({
    hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    },
    bind: function (e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind: function (e, t) {
      return this.off(e, null, t);
    },
    delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    }
  });
  var Ln,
    Hn,
    qn = cc11001100_hook("qn", ct.now(), "var-init"),
    _n = cc11001100_hook("_n", /\?/, "var-init"),
    Mn = cc11001100_hook("Mn", /#.*$/, "var-init"),
    On = cc11001100_hook("On", /([?&])_=[^&]*/, "var-init"),
    Fn = cc11001100_hook("Fn", /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, "var-init"),
    Bn = cc11001100_hook("Bn", /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, "var-init"),
    Pn = cc11001100_hook("Pn", /^(?:GET|HEAD)$/, "var-init"),
    Rn = cc11001100_hook("Rn", /^\/\//, "var-init"),
    Wn = cc11001100_hook("Wn", /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, "var-init"),
    $n = cc11001100_hook("$n", ct.fn.load, "var-init"),
    In = cc11001100_hook("In", {}, "var-init"),
    zn = cc11001100_hook("zn", {}, "var-init"),
    Xn = cc11001100_hook("Xn", "*/".concat("*"), "var-init");
  try {
    Hn = cc11001100_hook("Hn", J.href, "assign");
  } catch (Un) {
    Hn = cc11001100_hook("Hn", G.createElement("a"), "assign"), Hn.href = cc11001100_hook("Hn.href", "", "assign"), Hn = cc11001100_hook("Hn", Hn.href, "assign");
  }
  Ln = cc11001100_hook("Ln", Wn.exec(Hn.toLowerCase()) || [], "assign"), ct.fn.load = cc11001100_hook("ct.fn.load", function (e, n, r) {
    if ("string" != typeof e && $n) return $n.apply(this, arguments);
    var i,
      o,
      a,
      s = cc11001100_hook("s", this, "var-init"),
      u = cc11001100_hook("u", e.indexOf(" "), "var-init");
    return u >= 0 && (i = cc11001100_hook("i", e.slice(u, e.length), "assign"), e = cc11001100_hook("e", e.slice(0, u), "assign")), ct.isFunction(n) ? (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", t, "assign")) : n && "object" == typeof n && (a = cc11001100_hook("a", "POST", "assign")), s.length > 0 && ct.ajax({
      url: cc11001100_hook("url", e, "object-key-init"),
      type: cc11001100_hook("type", a, "object-key-init"),
      dataType: cc11001100_hook("dataType", "html", "object-key-init"),
      data: cc11001100_hook("data", n, "object-key-init")
    }).done(function (e) {
      o = cc11001100_hook("o", arguments, "assign"), s.html(i ? ct("<div>").append(ct.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, "assign"), ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ct.fn[t] = cc11001100_hook("ct.fn[t]", function (e) {
      return this.on(t, e);
    }, "assign");
  }), ct.extend({
    active: cc11001100_hook("active", 0, "object-key-init"),
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: cc11001100_hook("url", Hn, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      isLocal: cc11001100_hook("isLocal", Bn.test(Ln[1]), "object-key-init"),
      global: cc11001100_hook("global", !0, "object-key-init"),
      processData: cc11001100_hook("processData", !0, "object-key-init"),
      async: cc11001100_hook("async", !0, "object-key-init"),
      contentType: cc11001100_hook("contentType", "application/x-www-form-urlencoded; charset=UTF-8", "object-key-init"),
      accepts: {
        "*": cc11001100_hook("*", Xn, "object-key-init"),
        text: cc11001100_hook("text", "text/plain", "object-key-init"),
        html: cc11001100_hook("html", "text/html", "object-key-init"),
        xml: cc11001100_hook("xml", "application/xml, text/xml", "object-key-init"),
        json: cc11001100_hook("json", "application/json, text/javascript", "object-key-init")
      },
      contents: {
        xml: cc11001100_hook("xml", /xml/, "object-key-init"),
        html: cc11001100_hook("html", /html/, "object-key-init"),
        json: cc11001100_hook("json", /json/, "object-key-init")
      },
      responseFields: {
        xml: cc11001100_hook("xml", "responseXML", "object-key-init"),
        text: cc11001100_hook("text", "responseText", "object-key-init"),
        json: cc11001100_hook("json", "responseJSON", "object-key-init")
      },
      converters: {
        "* text": cc11001100_hook("* text", String, "object-key-init"),
        "text html": cc11001100_hook("text html", !0, "object-key-init"),
        "text json": cc11001100_hook("text json", ct.parseJSON, "object-key-init"),
        "text xml": cc11001100_hook("text xml", ct.parseXML, "object-key-init")
      },
      flatOptions: {
        url: cc11001100_hook("url", !0, "object-key-init"),
        context: cc11001100_hook("context", !0, "object-key-init")
      }
    },
    ajaxSetup: function (e, t) {
      return t ? q(q(e, ct.ajaxSettings), t) : q(ct.ajaxSettings, e);
    },
    ajaxPrefilter: cc11001100_hook("ajaxPrefilter", L(In), "object-key-init"),
    ajaxTransport: cc11001100_hook("ajaxTransport", L(zn), "object-key-init"),
    ajax: function (e, n) {
      function r(e, n, r, i) {
        cc11001100_hook("e", e, "function-parameter");
        cc11001100_hook("n", n, "function-parameter");
        cc11001100_hook("r", r, "function-parameter");
        cc11001100_hook("i", i, "function-parameter");
        var o,
          f,
          v,
          b,
          T,
          C = cc11001100_hook("C", n, "var-init");
        2 !== x && (x = cc11001100_hook("x", 2, "assign"), u && clearTimeout(u), c = cc11001100_hook("c", t, "assign"), s = cc11001100_hook("s", i || "", "assign"), w.readyState = cc11001100_hook("w.readyState", e > 0 ? 4 : 0, "assign"), o = cc11001100_hook("o", e >= 200 && 300 > e || 304 === e, "assign"), r && (b = cc11001100_hook("b", _(p, w, r), "assign")), b = cc11001100_hook("b", M(p, b, w, o), "assign"), o ? (p.ifModified && (T = cc11001100_hook("T", w.getResponseHeader("Last-Modified"), "assign"), T && (ct.lastModified[a] = cc11001100_hook("ct.lastModified[a]", T, "assign")), T = cc11001100_hook("T", w.getResponseHeader("etag"), "assign"), T && (ct.etag[a] = cc11001100_hook("ct.etag[a]", T, "assign"))), 204 === e || "HEAD" === p.type ? C = cc11001100_hook("C", "nocontent", "assign") : 304 === e ? C = cc11001100_hook("C", "notmodified", "assign") : (C = cc11001100_hook("C", b.state, "assign"), f = cc11001100_hook("f", b.data, "assign"), v = cc11001100_hook("v", b.error, "assign"), o = cc11001100_hook("o", !v, "assign"))) : (v = cc11001100_hook("v", C, "assign"), (e || !C) && (C = cc11001100_hook("C", "error", "assign"), 0 > e && (e = cc11001100_hook("e", 0, "assign")))), w.status = cc11001100_hook("w.status", e, "assign"), w.statusText = cc11001100_hook("w.statusText", (n || C) + "", "assign"), o ? g.resolveWith(d, [f, C, w]) : g.rejectWith(d, [w, C, v]), w.statusCode(y), y = cc11001100_hook("y", t, "assign"), l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [w, p, o ? f : v]), m.fireWith(d, [w, C]), l && (h.trigger("ajaxComplete", [w, p]), --ct.active || ct.event.trigger("ajaxStop")));
      }
      "object" == typeof e && (n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", t, "assign")), n = cc11001100_hook("n", n || {}, "assign");
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = cc11001100_hook("p", ct.ajaxSetup({}, n), "var-init"),
        d = cc11001100_hook("d", p.context || p, "var-init"),
        h = cc11001100_hook("h", p.context && (d.nodeType || d.jquery) ? ct(d) : ct.event, "var-init"),
        g = cc11001100_hook("g", ct.Deferred(), "var-init"),
        m = cc11001100_hook("m", ct.Callbacks("once memory"), "var-init"),
        y = cc11001100_hook("y", p.statusCode || {}, "var-init"),
        v = cc11001100_hook("v", {}, "var-init"),
        b = cc11001100_hook("b", {}, "var-init"),
        x = cc11001100_hook("x", 0, "var-init"),
        T = cc11001100_hook("T", "canceled", "var-init"),
        w = cc11001100_hook("w", {
          readyState: cc11001100_hook("readyState", 0, "object-key-init"),
          getResponseHeader: function (e) {
            var t;
            if (2 === x) {
              if (!f) for (f = cc11001100_hook("f", {}, "assign"); t = cc11001100_hook("t", Fn.exec(s), "assign");) f[t[1].toLowerCase()] = cc11001100_hook("f[t[1].toLowerCase()]", t[2], "assign");
              t = cc11001100_hook("t", f[e.toLowerCase()], "assign");
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === x ? s : null;
          },
          setRequestHeader: function (e, t) {
            var n = cc11001100_hook("n", e.toLowerCase(), "var-init");
            return x || (e = cc11001100_hook("e", b[n] = cc11001100_hook("b[n]", b[n] || e, "assign"), "assign"), v[e] = cc11001100_hook("v[e]", t, "assign")), this;
          },
          overrideMimeType: function (e) {
            return x || (p.mimeType = cc11001100_hook("p.mimeType", e, "assign")), this;
          },
          statusCode: function (e) {
            var t;
            if (e) if (2 > x) for (t in e) y[t] = cc11001100_hook("y[t]", [y[t], e[t]], "assign");else w.always(e[w.status]);
            return this;
          },
          abort: function (e) {
            var t = cc11001100_hook("t", e || T, "var-init");
            return c && c.abort(t), r(0, t), this;
          }
        }, "var-init");
      if (g.promise(w).complete = cc11001100_hook("g.promise(w).complete", m.add, "assign"), w.success = cc11001100_hook("w.success", w.done, "assign"), w.error = cc11001100_hook("w.error", w.fail, "assign"), p.url = cc11001100_hook("p.url", ((e || p.url || Hn) + "").replace(Mn, "").replace(Rn, Ln[1] + "//"), "assign"), p.type = cc11001100_hook("p.type", n.method || n.type || p.method || p.type, "assign"), p.dataTypes = cc11001100_hook("p.dataTypes", ct.trim(p.dataType || "*").toLowerCase().match(pt) || [""], "assign"), null == p.crossDomain && (i = cc11001100_hook("i", Wn.exec(p.url.toLowerCase()), "assign"), p.crossDomain = cc11001100_hook("p.crossDomain", !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Ln[3] || ("http:" === Ln[1] ? "80" : "443"))), "assign")), p.data && p.processData && "string" != typeof p.data && (p.data = cc11001100_hook("p.data", ct.param(p.data, p.traditional), "assign")), H(In, p, n, w), 2 === x) return w;
      l = cc11001100_hook("l", p.global, "assign"), l && 0 === ct.active++ && ct.event.trigger("ajaxStart"), p.type = cc11001100_hook("p.type", p.type.toUpperCase(), "assign"), p.hasContent = cc11001100_hook("p.hasContent", !Pn.test(p.type), "assign"), a = cc11001100_hook("a", p.url, "assign"), p.hasContent || (p.data && (a = cc11001100_hook("a", p.url += cc11001100_hook("p.url", (_n.test(a) ? "&" : "?") + p.data, "assign"), "assign"), delete p.data), p.cache === !1 && (p.url = cc11001100_hook("p.url", On.test(a) ? a.replace(On, "$1_=" + qn++) : a + (_n.test(a) ? "&" : "?") + "_=" + qn++, "assign"))), p.ifModified && (ct.lastModified[a] && w.setRequestHeader("If-Modified-Since", ct.lastModified[a]), ct.etag[a] && w.setRequestHeader("If-None-Match", ct.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : p.accepts["*"]);
      for (o in p.headers) w.setRequestHeader(o, p.headers[o]);
      if (p.beforeSend && (p.beforeSend.call(d, w, p) === !1 || 2 === x)) return w.abort();
      T = cc11001100_hook("T", "abort", "assign");
      for (o in {
        success: cc11001100_hook("success", 1, "object-key-init"),
        error: cc11001100_hook("error", 1, "object-key-init"),
        complete: cc11001100_hook("complete", 1, "object-key-init")
      }) w[o](p[o]);
      if (c = cc11001100_hook("c", H(zn, p, n, w), "assign")) {
        w.readyState = cc11001100_hook("w.readyState", 1, "assign"), l && h.trigger("ajaxSend", [w, p]), p.async && p.timeout > 0 && (u = cc11001100_hook("u", setTimeout(function () {
          w.abort("timeout");
        }, p.timeout), "assign"));
        try {
          x = cc11001100_hook("x", 1, "assign"), c.send(v, r);
        } catch (C) {
          if (!(2 > x)) throw C;
          r(-1, C);
        }
      } else r(-1, "No Transport");
      return w;
    },
    getJSON: function (e, t, n) {
      return ct.get(e, t, n, "json");
    },
    getScript: function (e, n) {
      return ct.get(e, t, n, "script");
    }
  }), ct.each(["get", "post"], function (e, n) {
    ct[n] = cc11001100_hook("ct[n]", function (e, r, i, o) {
      return ct.isFunction(r) && (o = cc11001100_hook("o", o || i, "assign"), i = cc11001100_hook("i", r, "assign"), r = cc11001100_hook("r", t, "assign")), ct.ajax({
        url: cc11001100_hook("url", e, "object-key-init"),
        type: cc11001100_hook("type", n, "object-key-init"),
        dataType: cc11001100_hook("dataType", o, "object-key-init"),
        data: cc11001100_hook("data", r, "object-key-init"),
        success: cc11001100_hook("success", i, "object-key-init")
      });
    }, "assign");
  }), ct.ajaxSetup({
    accepts: {
      script: cc11001100_hook("script", "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript", "object-key-init")
    },
    contents: {
      script: cc11001100_hook("script", /(?:java|ecma)script/, "object-key-init")
    },
    converters: {
      "text script": function (e) {
        return ct.globalEval(e), e;
      }
    }
  }), ct.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = cc11001100_hook("e.cache", !1, "assign")), e.crossDomain && (e.type = cc11001100_hook("e.type", "GET", "assign"), e.global = cc11001100_hook("e.global", !1, "assign"));
  }), ct.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
        r = cc11001100_hook("r", G.head || ct("head")[0] || G.documentElement, "var-init");
      return {
        send: function (t, i) {
          n = cc11001100_hook("n", G.createElement("script"), "assign"), n.async = cc11001100_hook("n.async", !0, "assign"), e.scriptCharset && (n.charset = cc11001100_hook("n.charset", e.scriptCharset, "assign")), n.src = cc11001100_hook("n.src", e.url, "assign"), n.onload = cc11001100_hook("n.onload", n.onreadystatechange = cc11001100_hook("n.onreadystatechange", function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = cc11001100_hook("n.onload", n.onreadystatechange = cc11001100_hook("n.onreadystatechange", null, "assign"), "assign"), n.parentNode && n.parentNode.removeChild(n), n = cc11001100_hook("n", null, "assign"), t || i(200, "success"));
          }, "assign"), "assign"), r.insertBefore(n, r.firstChild);
        },
        abort: function () {
          n && n.onload(t, !0);
        }
      };
    }
  });
  var Vn = cc11001100_hook("Vn", [], "var-init"),
    Yn = cc11001100_hook("Yn", /(=)\?(?=&|$)|\?\?/, "var-init");
  ct.ajaxSetup({
    jsonp: cc11001100_hook("jsonp", "callback", "object-key-init"),
    jsonpCallback: function () {
      var e = cc11001100_hook("e", Vn.pop() || ct.expando + "_" + qn++, "var-init");
      return this[e] = cc11001100_hook("this[e]", !0, "assign"), e;
    }
  }), ct.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
      a,
      s,
      u = cc11001100_hook("u", n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data"), "var-init");
    return u || "jsonp" === n.dataTypes[0] ? (o = cc11001100_hook("o", n.jsonpCallback = cc11001100_hook("n.jsonpCallback", ct.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, "assign"), "assign"), u ? n[u] = cc11001100_hook("n[u]", n[u].replace(Yn, "$1" + o), "assign") : n.jsonp !== !1 && (n.url += cc11001100_hook("n.url", (_n.test(n.url) ? "&" : "?") + n.jsonp + "=" + o, "assign")), n.converters["script json"] = cc11001100_hook("n.converters[\"script json\"]", function () {
      return s || ct.error(o + " was not called"), s[0];
    }, "assign"), n.dataTypes[0] = cc11001100_hook("n.dataTypes[0]", "json", "assign"), a = cc11001100_hook("a", e[o], "assign"), e[o] = cc11001100_hook("e[o]", function () {
      s = cc11001100_hook("s", arguments, "assign");
    }, "assign"), i.always(function () {
      e[o] = cc11001100_hook("e[o]", a, "assign"), n[o] && (n.jsonpCallback = cc11001100_hook("n.jsonpCallback", r.jsonpCallback, "assign"), Vn.push(o)), s && ct.isFunction(a) && a(s[0]), s = cc11001100_hook("s", a = cc11001100_hook("a", t, "assign"), "assign");
    }), "script") : t;
  });
  var Jn,
    Gn,
    Qn = cc11001100_hook("Qn", 0, "var-init"),
    Kn = cc11001100_hook("Kn", e.ActiveXObject && function () {
      var e;
      for (e in Jn) Jn[e](t, !0);
    }, "var-init");
  ct.ajaxSettings.xhr = cc11001100_hook("ct.ajaxSettings.xhr", e.ActiveXObject ? function () {
    return !this.isLocal && O() || F();
  } : O, "assign"), Gn = cc11001100_hook("Gn", ct.ajaxSettings.xhr(), "assign"), ct.support.cors = cc11001100_hook("ct.support.cors", !!Gn && "withCredentials" in Gn, "assign"), Gn = cc11001100_hook("Gn", ct.support.ajax = cc11001100_hook("ct.support.ajax", !!Gn, "assign"), "assign"), Gn && ct.ajaxTransport(function (n) {
    if (!n.crossDomain || ct.support.cors) {
      var r;
      return {
        send: function (i, o) {
          var a,
            s,
            u = cc11001100_hook("u", n.xhr(), "var-init");
          if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) u[s] = cc11001100_hook("u[s]", n.xhrFields[s], "assign");
          n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = cc11001100_hook("i[\"X-Requested-With\"]", "XMLHttpRequest", "assign"));
          try {
            for (s in i) u.setRequestHeader(s, i[s]);
          } catch (l) {}
          u.send(n.hasContent && n.data || null), r = cc11001100_hook("r", function (e, i) {
            var s, l, c, f;
            try {
              if (r && (i || 4 === u.readyState)) if (r = cc11001100_hook("r", t, "assign"), a && (u.onreadystatechange = cc11001100_hook("u.onreadystatechange", ct.noop, "assign"), Kn && delete Jn[a]), i) 4 !== u.readyState && u.abort();else {
                f = cc11001100_hook("f", {}, "assign"), s = cc11001100_hook("s", u.status, "assign"), l = cc11001100_hook("l", u.getAllResponseHeaders(), "assign"), "string" == typeof u.responseText && (f.text = cc11001100_hook("f.text", u.responseText, "assign"));
                try {
                  c = cc11001100_hook("c", u.statusText, "assign");
                } catch (p) {
                  c = cc11001100_hook("c", "", "assign");
                }
                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = cc11001100_hook("s", 204, "assign")) : s = cc11001100_hook("s", f.text ? 200 : 404, "assign");
              }
            } catch (d) {
              i || o(-1, d);
            }
            f && o(s, c, f, l);
          }, "assign"), n.async ? 4 === u.readyState ? setTimeout(r) : (a = cc11001100_hook("a", ++Qn, "assign"), Kn && (Jn || (Jn = cc11001100_hook("Jn", {}, "assign"), ct(e).unload(Kn)), Jn[a] = cc11001100_hook("Jn[a]", r, "assign")), u.onreadystatechange = cc11001100_hook("u.onreadystatechange", r, "assign")) : r();
        },
        abort: function () {
          r && r(t, !0);
        }
      };
    }
  });
  var Zn,
    er,
    tr = cc11001100_hook("tr", /^(?:toggle|show|hide)$/, "var-init"),
    nr = cc11001100_hook("nr", RegExp("^(?:([+-])=|)(" + ft + ")([a-z%]*)$", "i"), "var-init"),
    rr = cc11001100_hook("rr", /queueHooks$/, "var-init"),
    ir = cc11001100_hook("ir", [$], "var-init"),
    or = cc11001100_hook("or", {
      "*": cc11001100_hook("*", [function (e, t) {
        var n = cc11001100_hook("n", this.createTween(e, t), "var-init"),
          r = cc11001100_hook("r", n.cur(), "var-init"),
          i = cc11001100_hook("i", nr.exec(t), "var-init"),
          o = cc11001100_hook("o", i && i[3] || (ct.cssNumber[e] ? "" : "px"), "var-init"),
          a = cc11001100_hook("a", (ct.cssNumber[e] || "px" !== o && +r) && nr.exec(ct.css(n.elem, e)), "var-init"),
          s = cc11001100_hook("s", 1, "var-init"),
          u = cc11001100_hook("u", 20, "var-init");
        if (a && a[3] !== o) {
          o = cc11001100_hook("o", o || a[3], "assign"), i = cc11001100_hook("i", i || [], "assign"), a = cc11001100_hook("a", +r || 1, "assign");
          do s = cc11001100_hook("s", s || ".5", "assign"), a /= cc11001100_hook("a", s, "assign"), ct.style(n.elem, e, a + o); while (s !== (s = cc11001100_hook("s", n.cur() / r, "assign")) && 1 !== s && --u);
        }
        return i && (a = cc11001100_hook("a", n.start = cc11001100_hook("n.start", +a || +r || 0, "assign"), "assign"), n.unit = cc11001100_hook("n.unit", o, "assign"), n.end = cc11001100_hook("n.end", i[1] ? a + (i[1] + 1) * i[2] : +i[2], "assign")), n;
      }], "object-key-init")
    }, "var-init");
  ct.Animation = cc11001100_hook("ct.Animation", ct.extend(R, {
    tweener: function (e, t) {
      ct.isFunction(e) ? (t = cc11001100_hook("t", e, "assign"), e = cc11001100_hook("e", ["*"], "assign")) : e = cc11001100_hook("e", e.split(" "), "assign");
      for (var n, r = cc11001100_hook("r", 0, "var-init"), i = cc11001100_hook("i", e.length, "var-init"); i > r; r++) n = cc11001100_hook("n", e[r], "assign"), or[n] = cc11001100_hook("or[n]", or[n] || [], "assign"), or[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? ir.unshift(e) : ir.push(e);
    }
  }), "assign"), ct.Tween = cc11001100_hook("ct.Tween", I, "assign"), I.prototype = cc11001100_hook("I.prototype", {
    constructor: cc11001100_hook("constructor", I, "object-key-init"),
    init: function (e, t, n, r, i, o) {
      this.elem = cc11001100_hook("this.elem", e, "assign"), this.prop = cc11001100_hook("this.prop", n, "assign"), this.easing = cc11001100_hook("this.easing", i || "swing", "assign"), this.options = cc11001100_hook("this.options", t, "assign"), this.start = cc11001100_hook("this.start", this.now = cc11001100_hook("this.now", this.cur(), "assign"), "assign"), this.end = cc11001100_hook("this.end", r, "assign"), this.unit = cc11001100_hook("this.unit", o || (ct.cssNumber[n] ? "" : "px"), "assign");
    },
    cur: function () {
      var e = cc11001100_hook("e", I.propHooks[this.prop], "var-init");
      return e && e.get ? e.get(this) : I.propHooks._default.get(this);
    },
    run: function (e) {
      var t,
        n = cc11001100_hook("n", I.propHooks[this.prop], "var-init");
      return this.pos = cc11001100_hook("this.pos", t = cc11001100_hook("t", this.options.duration ? ct.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, "assign"), "assign"), this.now = cc11001100_hook("this.now", (this.end - this.start) * t + this.start, "assign"), this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this;
    }
  }, "assign"), I.prototype.init.prototype = cc11001100_hook("I.prototype.init.prototype", I.prototype, "assign"), I.propHooks = cc11001100_hook("I.propHooks", {
    _default: {
      get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = cc11001100_hook("t", ct.css(e.elem, e.prop, ""), "assign"), t && "auto" !== t ? t : 0) : e.elem[e.prop];
      },
      set: function (e) {
        ct.fx.step[e.prop] ? ct.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ct.cssProps[e.prop]] || ct.cssHooks[e.prop]) ? ct.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign");
      }
    }
  }, "assign"), I.propHooks.scrollTop = cc11001100_hook("I.propHooks.scrollTop", I.propHooks.scrollLeft = cc11001100_hook("I.propHooks.scrollLeft", {
    set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = cc11001100_hook("e.elem[e.prop]", e.now, "assign"));
    }
  }, "assign"), "assign"), ct.each(["toggle", "show", "hide"], function (e, t) {
    var n = cc11001100_hook("n", ct.fn[t], "var-init");
    ct.fn[t] = cc11001100_hook("ct.fn[t]", function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, r, i);
    }, "assign");
  }), ct.fn.extend({
    fadeTo: function (e, t, n, r) {
      return this.filter(C).css("opacity", 0).show().end().animate({
        opacity: cc11001100_hook("opacity", t, "object-key-init")
      }, e, n, r);
    },
    animate: function (e, t, n, r) {
      var i = cc11001100_hook("i", ct.isEmptyObject(e), "var-init"),
        o = cc11001100_hook("o", ct.speed(t, n, r), "var-init"),
        a = function () {
          var t = cc11001100_hook("t", R(this, ct.extend({}, e), o), "var-init");
          (i || ct._data(this, "finish")) && t.stop(!0);
        };
      return a.finish = cc11001100_hook("a.finish", a, "assign"), i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
    },
    stop: function (e, n, r) {
      var i = function (e) {
        var t = cc11001100_hook("t", e.stop, "var-init");
        delete e.stop, t(r);
      };
      return "string" != typeof e && (r = cc11001100_hook("r", n, "assign"), n = cc11001100_hook("n", e, "assign"), e = cc11001100_hook("e", t, "assign")), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
        var t = cc11001100_hook("t", !0, "var-init"),
          n = cc11001100_hook("n", null != e && e + "queueHooks", "var-init"),
          o = cc11001100_hook("o", ct.timers, "var-init"),
          a = cc11001100_hook("a", ct._data(this), "var-init");
        if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) a[n] && a[n].stop && rr.test(n) && i(a[n]);
        for (n = cc11001100_hook("n", o.length, "assign"); n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = cc11001100_hook("t", !1, "assign"), o.splice(n, 1));
        (t || !r) && ct.dequeue(this, e);
      });
    },
    finish: function (e) {
      return e !== !1 && (e = cc11001100_hook("e", e || "fx", "assign")), this.each(function () {
        var t,
          n = cc11001100_hook("n", ct._data(this), "var-init"),
          r = cc11001100_hook("r", n[e + "queue"], "var-init"),
          i = cc11001100_hook("i", n[e + "queueHooks"], "var-init"),
          o = cc11001100_hook("o", ct.timers, "var-init"),
          a = cc11001100_hook("a", r ? r.length : 0, "var-init");
        for (n.finish = cc11001100_hook("n.finish", !0, "assign"), ct.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = cc11001100_hook("t", o.length, "assign"); t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
        for (t = cc11001100_hook("t", 0, "assign"); a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
        delete n.finish;
      });
    }
  }), ct.each({
    slideDown: cc11001100_hook("slideDown", z("show"), "object-key-init"),
    slideUp: cc11001100_hook("slideUp", z("hide"), "object-key-init"),
    slideToggle: cc11001100_hook("slideToggle", z("toggle"), "object-key-init"),
    fadeIn: {
      opacity: cc11001100_hook("opacity", "show", "object-key-init")
    },
    fadeOut: {
      opacity: cc11001100_hook("opacity", "hide", "object-key-init")
    },
    fadeToggle: {
      opacity: cc11001100_hook("opacity", "toggle", "object-key-init")
    }
  }, function (e, t) {
    ct.fn[e] = cc11001100_hook("ct.fn[e]", function (e, n, r) {
      return this.animate(t, e, n, r);
    }, "assign");
  }), ct.speed = cc11001100_hook("ct.speed", function (e, t, n) {
    var r = cc11001100_hook("r", e && "object" == typeof e ? ct.extend({}, e) : {
      complete: cc11001100_hook("complete", n || !n && t || ct.isFunction(e) && e, "object-key-init"),
      duration: cc11001100_hook("duration", e, "object-key-init"),
      easing: cc11001100_hook("easing", n && t || t && !ct.isFunction(t) && t, "object-key-init")
    }, "var-init");
    return r.duration = cc11001100_hook("r.duration", ct.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ct.fx.speeds ? ct.fx.speeds[r.duration] : ct.fx.speeds._default, "assign"), (null == r.queue || r.queue === !0) && (r.queue = cc11001100_hook("r.queue", "fx", "assign")), r.old = cc11001100_hook("r.old", r.complete, "assign"), r.complete = cc11001100_hook("r.complete", function () {
      ct.isFunction(r.old) && r.old.call(this), r.queue && ct.dequeue(this, r.queue);
    }, "assign"), r;
  }, "assign"), ct.easing = cc11001100_hook("ct.easing", {
    linear: function (e) {
      return e;
    },
    swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    }
  }, "assign"), ct.timers = cc11001100_hook("ct.timers", [], "assign"), ct.fx = cc11001100_hook("ct.fx", I.prototype.init, "assign"), ct.fx.tick = cc11001100_hook("ct.fx.tick", function () {
    var e,
      n = cc11001100_hook("n", ct.timers, "var-init"),
      r = cc11001100_hook("r", 0, "var-init");
    for (Zn = cc11001100_hook("Zn", ct.now(), "assign"); n.length > r; r++) e = cc11001100_hook("e", n[r], "assign"), e() || n[r] !== e || n.splice(r--, 1);
    n.length || ct.fx.stop(), Zn = cc11001100_hook("Zn", t, "assign");
  }, "assign"), ct.fx.timer = cc11001100_hook("ct.fx.timer", function (e) {
    e() && ct.timers.push(e) && ct.fx.start();
  }, "assign"), ct.fx.interval = cc11001100_hook("ct.fx.interval", 13, "assign"), ct.fx.start = cc11001100_hook("ct.fx.start", function () {
    er || (er = cc11001100_hook("er", setInterval(ct.fx.tick, ct.fx.interval), "assign"));
  }, "assign"), ct.fx.stop = cc11001100_hook("ct.fx.stop", function () {
    clearInterval(er), er = cc11001100_hook("er", null, "assign");
  }, "assign"), ct.fx.speeds = cc11001100_hook("ct.fx.speeds", {
    slow: cc11001100_hook("slow", 600, "object-key-init"),
    fast: cc11001100_hook("fast", 200, "object-key-init"),
    _default: cc11001100_hook("_default", 400, "object-key-init")
  }, "assign"), ct.fx.step = cc11001100_hook("ct.fx.step", {}, "assign"), ct.expr && ct.expr.filters && (ct.expr.filters.animated = cc11001100_hook("ct.expr.filters.animated", function (e) {
    return ct.grep(ct.timers, function (t) {
      return e === t.elem;
    }).length;
  }, "assign")), ct.fn.offset = cc11001100_hook("ct.fn.offset", function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      ct.offset.setOffset(this, e, t);
    });
    var n,
      r,
      i = cc11001100_hook("i", {
        top: cc11001100_hook("top", 0, "object-key-init"),
        left: cc11001100_hook("left", 0, "object-key-init")
      }, "var-init"),
      o = cc11001100_hook("o", this[0], "var-init"),
      a = cc11001100_hook("a", o && o.ownerDocument, "var-init");
    return a ? (n = cc11001100_hook("n", a.documentElement, "assign"), ct.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (i = cc11001100_hook("i", o.getBoundingClientRect(), "assign")), r = cc11001100_hook("r", X(a), "assign"), {
      top: cc11001100_hook("top", i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), "object-key-init"),
      left: cc11001100_hook("left", i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0), "object-key-init")
    }) : i) : void 0;
  }, "assign"), ct.offset = cc11001100_hook("ct.offset", {
    setOffset: function (e, t, n) {
      var r = cc11001100_hook("r", ct.css(e, "position"), "var-init");
      "static" === r && (e.style.position = cc11001100_hook("e.style.position", "relative", "assign"));
      var i,
        o,
        a = cc11001100_hook("a", ct(e), "var-init"),
        s = cc11001100_hook("s", a.offset(), "var-init"),
        u = cc11001100_hook("u", ct.css(e, "top"), "var-init"),
        l = cc11001100_hook("l", ct.css(e, "left"), "var-init"),
        c = cc11001100_hook("c", ("absolute" === r || "fixed" === r) && ct.inArray("auto", [u, l]) > -1, "var-init"),
        f = cc11001100_hook("f", {}, "var-init"),
        p = cc11001100_hook("p", {}, "var-init");
      c ? (p = cc11001100_hook("p", a.position(), "assign"), i = cc11001100_hook("i", p.top, "assign"), o = cc11001100_hook("o", p.left, "assign")) : (i = cc11001100_hook("i", parseFloat(u) || 0, "assign"), o = cc11001100_hook("o", parseFloat(l) || 0, "assign")), ct.isFunction(t) && (t = cc11001100_hook("t", t.call(e, n, s), "assign")), null != t.top && (f.top = cc11001100_hook("f.top", t.top - s.top + i, "assign")), null != t.left && (f.left = cc11001100_hook("f.left", t.left - s.left + o, "assign")), "using" in t ? t.using.call(e, f) : a.css(f);
    }
  }, "assign"), ct.fn.extend({
    position: function () {
      if (this[0]) {
        var e,
          t,
          n = cc11001100_hook("n", {
            top: cc11001100_hook("top", 0, "object-key-init"),
            left: cc11001100_hook("left", 0, "object-key-init")
          }, "var-init"),
          r = cc11001100_hook("r", this[0], "var-init");
        return "fixed" === ct.css(r, "position") ? t = cc11001100_hook("t", r.getBoundingClientRect(), "assign") : (e = cc11001100_hook("e", this.offsetParent(), "assign"), t = cc11001100_hook("t", this.offset(), "assign"), ct.nodeName(e[0], "html") || (n = cc11001100_hook("n", e.offset(), "assign")), n.top += cc11001100_hook("n.top", ct.css(e[0], "borderTopWidth", !0), "assign"), n.left += cc11001100_hook("n.left", ct.css(e[0], "borderLeftWidth", !0), "assign")), {
          top: cc11001100_hook("top", t.top - n.top - ct.css(r, "marginTop", !0), "object-key-init"),
          left: cc11001100_hook("left", t.left - n.left - ct.css(r, "marginLeft", !0), "object-key-init")
        };
      }
    },
    offsetParent: function () {
      return this.map(function () {
        for (var e = cc11001100_hook("e", this.offsetParent || Q, "var-init"); e && !ct.nodeName(e, "html") && "static" === ct.css(e, "position");) e = cc11001100_hook("e", e.offsetParent, "assign");
        return e || Q;
      });
    }
  }), ct.each({
    scrollLeft: cc11001100_hook("scrollLeft", "pageXOffset", "object-key-init"),
    scrollTop: cc11001100_hook("scrollTop", "pageYOffset", "object-key-init")
  }, function (e, n) {
    var r = cc11001100_hook("r", /Y/.test(n), "var-init");
    ct.fn[e] = cc11001100_hook("ct.fn[e]", function (i) {
      return ct.access(this, function (e, i, o) {
        var a = cc11001100_hook("a", X(e), "var-init");
        return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ct(a).scrollLeft() : o, r ? o : ct(a).scrollTop()) : e[i] = cc11001100_hook("e[i]", o, "assign"), t);
      }, e, i, arguments.length, null);
    }, "assign");
  }), ct.each({
    Height: cc11001100_hook("Height", "height", "object-key-init"),
    Width: cc11001100_hook("Width", "width", "object-key-init")
  }, function (e, n) {
    ct.each({
      padding: cc11001100_hook("padding", "inner" + e, "object-key-init"),
      content: cc11001100_hook("content", n, "object-key-init"),
      "": cc11001100_hook("", "outer" + e, "object-key-init")
    }, function (r, i) {
      ct.fn[i] = cc11001100_hook("ct.fn[i]", function (i, o) {
        var a = cc11001100_hook("a", arguments.length && (r || "boolean" != typeof i), "var-init"),
          s = cc11001100_hook("s", r || (i === !0 || o === !0 ? "margin" : "border"), "var-init");
        return ct.access(this, function (n, r, i) {
          var o;
          return ct.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = cc11001100_hook("o", n.documentElement, "assign"), Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ct.css(n, r, s) : ct.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      }, "assign");
    });
  }), ct.fn.size = cc11001100_hook("ct.fn.size", function () {
    return this.length;
  }, "assign"), ct.fn.andSelf = cc11001100_hook("ct.fn.andSelf", ct.fn.addBack, "assign"), "object" == typeof module && module && "object" == typeof module.exports ? module.exports = cc11001100_hook("module.exports", ct, "assign") : (e.jQuery = cc11001100_hook("e.jQuery", e.$ = cc11001100_hook("e.$", ct, "assign"), "assign"), "function" == typeof define && define.amd && define("jquery", [], function () {
    return ct;
  }));
}(window);