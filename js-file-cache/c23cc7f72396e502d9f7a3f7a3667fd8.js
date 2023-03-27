define("@searchfe/underscore/src/index", ["require", "@searchfe/assert"], function (require) {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var g = cc11001100_hook("g", a, "var-init");
    return (c || "").split(".").forEach(function (a) {
      g = cc11001100_hook("g", g ? g[a] : void 0, "assign");
    }), g;
  }
  function c(a, c, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    a = cc11001100_hook("a", a || {}, "assign");
    var v = cc11001100_hook("v", (c || "").split("."), "var-init");
    v.forEach(function (c, i) {
      a[c] = cc11001100_hook("a[c]", void 0 !== a[c] ? a[c] : {}, "assign"), i === v.length - 1 ? a[c] = cc11001100_hook("a[c]", g, "assign") : a = cc11001100_hook("a", a[c], "assign");
    });
  }
  function g(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    for (var g = cc11001100_hook("g", c.split("."), "var-init"), i = cc11001100_hook("i", 0, "var-init"); v(a, g[i]) && i < g.length;) a = cc11001100_hook("a", a[g[i++]], "assign");
    return i >= g.length;
  }
  function v(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return null !== a && void 0 !== a && cr.call(a, c);
  }
  function y(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a = cc11001100_hook("a", O(a), "assign"), a.shift(), a;
  }
  function h(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", [], "var-init");
    for (var g in a) c.push(g);
    return c;
  }
  function E(a) {
    cc11001100_hook("a", a, "function-parameter");
    return Object.keys(Object(a));
  }
  function b(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    a = cc11001100_hook("a", a || {}, "assign");
    for (var g in a) if (a.hasOwnProperty(g) && c(a[g], g, a) === !1) break;
    return a;
  }
  function O(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a ? ur.slice.call(a) : [];
  }
  function A(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", y(arguments), "var-init");
    return ur.forEach.apply(a || [], c);
  }
  function w(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", y(arguments), "var-init");
    return ur.filter.apply(a || [], c);
  }
  function j(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (M(a)) {
      var g = cc11001100_hook("g", y(arguments), "var-init");
      return ur.map.apply(a || [], g);
    }
    var v = cc11001100_hook("v", [], "var-init");
    return b(a, function () {
      v.push(c.apply(null, arguments));
    }), v;
  }
  function k(a, c, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    if (M(a)) {
      var v = cc11001100_hook("v", y(arguments), "var-init");
      return ur.reduce.apply(a, v);
    }
    var h,
      i,
      b = cc11001100_hook("b", E(a), "var-init");
    for (arguments.length >= 3 ? (h = cc11001100_hook("h", g, "assign"), i = cc11001100_hook("i", 0, "assign")) : b.length > 0 && (h = cc11001100_hook("h", a[b[0]], "assign"), i = cc11001100_hook("i", 1, "assign")); i < b.length; i++) {
      var O = cc11001100_hook("O", b[i], "var-init");
      h = cc11001100_hook("h", c(h, a[O], O, a), "assign");
    }
    return h;
  }
  function R(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", y(arguments), "var-init");
    return ur.slice.apply(a || [], c);
  }
  function P(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", y(arguments), "var-init");
    return ur.splice.apply(a || [], c);
  }
  function S(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", y(arguments), "var-init");
    return fr.split.apply(a || "", c);
  }
  function I(a, c, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    for (var i = cc11001100_hook("i", g || 0, "var-init"); i < a.length; i++) if (c(a[i], i, a)) return i;
    return -1;
  }
  function D(a) {
    cc11001100_hook("a", a, "function-parameter");
    return y(arguments).reduce(function (a, c) {
      return a.replace("%s", c);
    }, a);
  }
  function F() {
    return C.apply(null, R(arguments, 0).reverse());
  }
  function L(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c;
    return U(a) ? (c = cc11001100_hook("c", [], "assign"), a.forEach(function (a) {
      c.push(L(a));
    }), c) : _(a) ? (c = cc11001100_hook("c", {}, "assign"), b(a, function (a, g) {
      c[g] = cc11001100_hook("c[g]", a, "assign");
    }), c) : a;
  }
  function N(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c;
    return T(a) ? a : U(a) ? (c = cc11001100_hook("c", [], "assign"), a.forEach(function (a) {
      c.push(N(a));
    }), c) : _(a) ? (c = cc11001100_hook("c", {}, "assign"), b(a, function (a, g) {
      c[g] = cc11001100_hook("c[g]", N(a), "assign");
    }), c) : a;
  }
  function _(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", typeof a, "var-init");
    return null != a && ("object" === c || "function" === c);
  }
  function G(a) {
    cc11001100_hook("a", a, "function-parameter");
    return "number" == typeof a && a > -1 && a % 1 === 0 && sr >= a;
  }
  function M(a) {
    cc11001100_hook("a", a, "function-parameter");
    return null != a && G(a.length) && !T(a);
  }
  function T(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", typeof a, "var-init");
    return "function" === c;
  }
  function X(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof String || "string" == typeof a;
  }
  function z(a, c, g) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("g", g, "function-parameter");
    return void 0 === g && (g = cc11001100_hook("g", 0, "assign")), a.indexOf(c, g) > -1;
  }
  function B(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof RegExp;
  }
  function C(a) {
    cc11001100_hook("a", a, "function-parameter");
    a = cc11001100_hook("a", null == a ? {} : a, "assign");
    var c = cc11001100_hook("c", R(arguments, 1), "var-init");
    return A(c, function (c) {
      J(a, c);
    }), a;
  }
  function H(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a ? void b(c, function (c, g) {
      return _(c) && _(a[g]) ? H(a[g], c) : void (a[g] = cc11001100_hook("a[g]", c, "assign"));
    }) : a;
  }
  function J(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return a ? (b(c, function (c, g) {
      a[g] = cc11001100_hook("a[g]", c, "assign");
    }), a) : a;
  }
  function K() {
    var a = cc11001100_hook("a", {}, "var-init"),
      c = cc11001100_hook("c", R(arguments, 0).reverse(), "var-init");
    return A(c, function (c) {
      H(a, c);
    }), a;
  }
  function Q(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", {}, "var-init");
    return j(a, function (a) {
      var g = cc11001100_hook("g", a[0], "var-init"),
        v = cc11001100_hook("v", a[1], "var-init");
      c[g] = cc11001100_hook("c[g]", v, "assign");
    }), c;
  }
  function U(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a instanceof Array;
  }
  function V(a) {
    cc11001100_hook("a", a, "function-parameter");
    return U(a) ? 0 === a.length : !a;
  }
  function W(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function () {
      return !a.apply(null, arguments);
    };
  }
  function Y(a) {
    cc11001100_hook("a", a, "function-parameter");
    return a.bind.apply(a, R(arguments));
  }
  function Z(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", R(arguments), "var-init");
    return c.shift(), function () {
      var g = cc11001100_hook("g", R(arguments), "var-init"),
        v = cc11001100_hook("v", [g, arguments.length, 0].concat(c), "var-init");
      return P.apply(null, v), a.apply(null, g);
    };
  }
  function $(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    return er("function" == typeof c, "wrapper should be a function"), function () {
      var g = cc11001100_hook("g", Array.prototype.slice.call(arguments, 0), "var-init");
      return g.unshift(a), c.apply(this, g);
    };
  }
  function nr(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    var g = function () {};
    g.prototype = cc11001100_hook("g.prototype", c.prototype, "assign");
    var v = cc11001100_hook("v", a.prototype, "var-init"),
      y = cc11001100_hook("y", a.prototype = cc11001100_hook("a.prototype", new g(), "assign"), "var-init");
    for (var h in v) v.hasOwnProperty(h) && (y[h] = cc11001100_hook("y[h]", v[h], "assign"));
    return a.prototype.constructor = cc11001100_hook("a.prototype.constructor", a, "assign"), a;
  }
  function rr(a) {
    cc11001100_hook("a", a, "function-parameter");
    return function (c) {
      return null == a ? void 0 : a[c];
    };
  }
  function tr(a) {
    cc11001100_hook("a", a, "function-parameter");
    var c = cc11001100_hook("c", {
        "&": cc11001100_hook("&", "&amp;", "object-key-init"),
        "<": cc11001100_hook("<", "&lt;", "object-key-init"),
        ">": cc11001100_hook(">", "&gt;", "object-key-init"),
        '"': cc11001100_hook('"', "&quot;", "object-key-init"),
        "'": cc11001100_hook("'", "&#39;", "object-key-init")
      }, "var-init"),
      g = cc11001100_hook("g", /[&<>"']/g, "var-init"),
      v = cc11001100_hook("v", RegExp(g.source), "var-init"),
      y = cc11001100_hook("y", rr(c), "var-init");
    return a && v.test(a) ? a.replace(g, y) : a;
  }
  var er = cc11001100_hook("er", require("@searchfe/assert"), "var-init"),
    ur = cc11001100_hook("ur", Array.prototype, "var-init"),
    ar = cc11001100_hook("ar", Object.prototype, "var-init"),
    cr = cc11001100_hook("cr", ar.hasOwnProperty, "var-init"),
    fr = cc11001100_hook("fr", String.prototype, "var-init"),
    exports = cc11001100_hook("exports", {}, "var-init"),
    sr = cc11001100_hook("sr", Number.MAX_SAFE_INTEGER || 9007199254740991, "var-init");
  return exports.keysIn = cc11001100_hook("exports.keysIn", h, "assign"), exports.keys = cc11001100_hook("exports.keys", E, "assign"), exports.get = cc11001100_hook("exports.get", a, "assign"), exports.set = cc11001100_hook("exports.set", c, "assign"), exports.has = cc11001100_hook("exports.has", g, "assign"), exports.forOwn = cc11001100_hook("exports.forOwn", b, "assign"), exports.assign = cc11001100_hook("exports.assign", C, "assign"), exports.clone = cc11001100_hook("exports.clone", L, "assign"), exports.cloneDeep = cc11001100_hook("exports.cloneDeep", N, "assign"), exports.merge = cc11001100_hook("exports.merge", C, "assign"), exports.extend = cc11001100_hook("exports.extend", C, "assign"), exports.defaults = cc11001100_hook("exports.defaults", F, "assign"), exports.defaultsDeep = cc11001100_hook("exports.defaultsDeep", K, "assign"), exports.fromPairs = cc11001100_hook("exports.fromPairs", Q, "assign"), exports.slice = cc11001100_hook("exports.slice", R, "assign"), exports.splice = cc11001100_hook("exports.splice", P, "assign"), exports.forEach = cc11001100_hook("exports.forEach", A, "assign"), exports.filter = cc11001100_hook("exports.filter", w, "assign"), exports.map = cc11001100_hook("exports.map", j, "assign"), exports.reduce = cc11001100_hook("exports.reduce", k, "assign"), exports.toArray = cc11001100_hook("exports.toArray", O, "assign"), exports.findIndex = cc11001100_hook("exports.findIndex", I, "assign"), exports.split = cc11001100_hook("exports.split", S, "assign"), exports.format = cc11001100_hook("exports.format", D, "assign"), exports.escape = cc11001100_hook("exports.escape", tr, "assign"), exports.isArray = cc11001100_hook("exports.isArray", U, "assign"), exports.isFunction = cc11001100_hook("exports.isFunction", T, "assign"), exports.isEmpty = cc11001100_hook("exports.isEmpty", V, "assign"), exports.isString = cc11001100_hook("exports.isString", X, "assign"), exports.isObject = cc11001100_hook("exports.isObject", _, "assign"), exports.isArrayLike = cc11001100_hook("exports.isArrayLike", M, "assign"), exports.isLength = cc11001100_hook("exports.isLength", G, "assign"), exports.isRegExp = cc11001100_hook("exports.isRegExp", B, "assign"), exports.inherits = cc11001100_hook("exports.inherits", nr, "assign"), exports.contains = cc11001100_hook("exports.contains", z, "assign"), exports.noop = cc11001100_hook("exports.noop", function () {}, "assign"), exports.partial = cc11001100_hook("exports.partial", Y, "assign"), exports.partialRight = cc11001100_hook("exports.partialRight", Z, "assign"), exports.negate = cc11001100_hook("exports.negate", W, "assign"), exports.wrap = cc11001100_hook("exports.wrap", $, "assign"), exports;
}), define("@searchfe/underscore", ["@searchfe/underscore/src/index"], function (mod) {
  return mod;
});