!function () {
  function c(c) {
    cc11001100_hook("c", c, "function-parameter");
    for (var a; c.length > 0;) a = cc11001100_hook("a", c.shift(), "assign"), "function" == typeof a && a();
  }
  var a = cc11001100_hook("a", window.B || (window.B = cc11001100_hook("window.B", {}, "assign")), "var-init"),
    v = cc11001100_hook("v", document, "var-init");
  v.cookie.match(/BAIDUID=([^:]+)/) && (a.id = cc11001100_hook("a.id", RegExp.$1, "assign")), a.lsSupport = cc11001100_hook("a.lsSupport", !0, "assign");
  try {
    localStorage.setItem("_t", 1), localStorage.removeItem("_t");
  } catch (e) {
    a.lsSupport = cc11001100_hook("a.lsSupport", !1, "assign");
  }
  a.init = cc11001100_hook("a.init", function () {
    var v = cc11001100_hook("v", !1, "var-init"),
      h = cc11001100_hook("h", [], "var-init");
    return a._fireInit = cc11001100_hook("a._fireInit", function () {
      v = cc11001100_hook("v", !0, "assign"), c(h);
    }, "assign"), function (c) {
      v ? c() : h.push(c);
    };
  }(), "assign"), a.load = cc11001100_hook("a.load", function () {
    var a = cc11001100_hook("a", !1, "var-init"),
      v = cc11001100_hook("v", [], "var-init");
    return window.addEventListener("load", function () {
      a = cc11001100_hook("a", !0, "assign"), setTimeout(function () {
        c(v);
      }, 0);
    }, !1), function (c) {
      a ? c() : v.push(c);
    };
  }(), "assign"), a.ready = cc11001100_hook("a.ready", function () {
    var a = cc11001100_hook("a", !1, "var-init"),
      h = cc11001100_hook("h", [], "var-init");
    return v.addEventListener("DOMContentLoaded", function () {
      a = cc11001100_hook("a", !0, "assign"), setTimeout(function () {
        c(h);
      }, 0);
    }, !1), function (c) {
      a ? c() : h.push(c);
    };
  }(), "assign"), a.$ = cc11001100_hook("a.$", function (c) {
    return v.querySelector(c);
  }, "assign"), a.$$ = cc11001100_hook("a.$$", function (c) {
    return v.querySelectorAll(c);
  }, "assign");
}();