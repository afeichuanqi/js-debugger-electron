/*! For license information please see outdatedbrowser.js.LICENSE.txt */
var self = cc11001100_hook("self", {}, "var-init"),
  outdatedBrowser = function (e) {
    var t,
      o,
      a,
      n,
      r = cc11001100_hook("r", document.getElementById("outdated"), "var-init");
    self.defaultOpts = cc11001100_hook("self.defaultOpts", {
      bgColor: cc11001100_hook("bgColor", "#f25648", "object-key-init"),
      color: cc11001100_hook("color", "#ffffff", "object-key-init"),
      lowerThan: cc11001100_hook("lowerThan", "transform", "object-key-init"),
      languagePath: cc11001100_hook("languagePath", "../outdatedbrowser/lang/en.html", "object-key-init")
    }, "assign"), e ? ("IE8" == e.lowerThan || "borderSpacing" == e.lowerThan ? e.lowerThan = cc11001100_hook("e.lowerThan", "borderSpacing", "assign") : "IE9" == e.lowerThan || "boxShadow" == e.lowerThan ? e.lowerThan = cc11001100_hook("e.lowerThan", "boxShadow", "assign") : "IE10" == e.lowerThan || "transform" == e.lowerThan || "" == e.lowerThan || void 0 === e.lowerThan ? e.lowerThan = cc11001100_hook("e.lowerThan", "transform", "assign") : "IE11" != e.lowerThan && "borderImage" != e.lowerThan || (e.lowerThan = cc11001100_hook("e.lowerThan", "borderImage", "assign")), self.defaultOpts.bgColor = cc11001100_hook("self.defaultOpts.bgColor", e.bgColor, "assign"), self.defaultOpts.color = cc11001100_hook("self.defaultOpts.color", e.color, "assign"), self.defaultOpts.lowerThan = cc11001100_hook("self.defaultOpts.lowerThan", e.lowerThan, "assign"), self.defaultOpts.languagePath = cc11001100_hook("self.defaultOpts.languagePath", e.languagePath, "assign"), t = cc11001100_hook("t", self.defaultOpts.bgColor, "assign"), o = cc11001100_hook("o", self.defaultOpts.color, "assign"), a = cc11001100_hook("a", self.defaultOpts.lowerThan, "assign"), n = cc11001100_hook("n", self.defaultOpts.languagePath, "assign")) : (t = cc11001100_hook("t", self.defaultOpts.bgColor, "assign"), o = cc11001100_hook("o", self.defaultOpts.color, "assign"), a = cc11001100_hook("a", self.defaultOpts.lowerThan, "assign"), n = cc11001100_hook("n", self.defaultOpts.languagePath, "assign"));
    var l = cc11001100_hook("l", !0, "var-init");
    var s,
      f,
      d,
      u,
      i,
      c = cc11001100_hook("c", (s = cc11001100_hook("s", document.createElement("div"), "assign"), f = cc11001100_hook("f", "Khtml Ms O Moz Webkit".split(" "), "assign"), d = cc11001100_hook("d", f.length, "assign"), function (e) {
        if (e in s.style) return !0;
        for (e = cc11001100_hook("e", e.replace(/^[a-z]/, function (e) {
          return e.toUpperCase();
        }), "assign"); d--;) if (f[d] + e in s.style) return !0;
        return !1;
      }), "var-init");
    if (console.log(a), !c("" + a)) {
      if (l && "1" !== r.style.opacity) {
        l = cc11001100_hook("l", !1, "assign");
        for (var w = cc11001100_hook("w", 1, "var-init"); w <= 100; w++) setTimeout(function (e) {
          return function () {
            var t;
            (function (e) {
              r.style.opacity = cc11001100_hook("r.style.opacity", e / 100, "assign"), r.style.filter = cc11001100_hook("r.style.filter", "alpha(opacity=" + e + ")", "assign");
            })(t = cc11001100_hook("t", e, "assign")), 1 == t && (r.style.display = cc11001100_hook("r.style.display", "block", "assign")), 100 == t && (l = cc11001100_hook("l", !0, "assign"));
          };
        }(w), 8 * w);
      }
      " " === n || 0 == n.length ? p() : (u = cc11001100_hook("u", n, "assign"), (i = cc11001100_hook("i", function () {
        var e = cc11001100_hook("e", !1, "var-init");
        if (window.XMLHttpRequest) e = cc11001100_hook("e", new XMLHttpRequest(), "assign");else if (window.ActiveXObject) try {
          e = cc11001100_hook("e", new ActiveXObject("Msxml2.XMLHTTP"), "assign");
        } catch (t) {
          try {
            e = cc11001100_hook("e", new ActiveXObject("Microsoft.XMLHTTP"), "assign");
          } catch (t) {
            e = cc11001100_hook("e", !1, "assign");
          }
        }
        return e;
      }(), "assign")) && (i.onreadystatechange = cc11001100_hook("i.onreadystatechange", function () {
        !function (e) {
          var t = cc11001100_hook("t", document.getElementById("outdated"), "var-init");
          4 == e.readyState && (200 == e.status || 304 == e.status ? t.innerHTML = cc11001100_hook("t.innerHTML", e.responseText, "assign") : t.innerHTML = cc11001100_hook("t.innerHTML", h, "assign"), p());
        }(i);
      }, "assign"), i.open("GET", u, !0), i.send(null)));
      var h = cc11001100_hook("h", '<h6>Your browser is out-of-date!</h6><p>Update your browser to view this website correctly. <a id="btnUpdateBrowser" href="http://outdatedbrowser.com/">Update my browser now </a></p><p class="last"><a href="#" id="btnCloseUpdateBrowser" title="Close">&times;</a></p>', "var-init");
    }
    function p() {
      var e = cc11001100_hook("e", document.getElementById("btnCloseUpdateBrowser"), "var-init");
      r.style.backgroundColor = cc11001100_hook("r.style.backgroundColor", t, "assign"), r.style.color = cc11001100_hook("r.style.color", o, "assign"), r.children[0].style.color = cc11001100_hook("r.children[0].style.color", o, "assign"), r.children[1].style.color = cc11001100_hook("r.children[1].style.color", o, "assign"), e.onmousedown = cc11001100_hook("e.onmousedown", function () {
        return r.style.display = cc11001100_hook("r.style.display", "none", "assign"), !1;
      }, "assign");
    }
  };
function addLoadEvent(e) {
  cc11001100_hook("e", e, "function-parameter");
  var t = cc11001100_hook("t", window.onload, "var-init");
  "function" != typeof window.onload ? window.onload = cc11001100_hook("window.onload", e, "assign") : window.onload = cc11001100_hook("window.onload", function () {
    t && t(), e();
  }, "assign");
}
addLoadEvent(function () {
  outdatedBrowser({
    bgColor: cc11001100_hook("bgColor", "#f25648", "object-key-init"),
    color: cc11001100_hook("color", "#ffffff", "object-key-init"),
    lowerThan: cc11001100_hook("lowerThan", "object-fit", "object-key-init"),
    languagePath: cc11001100_hook("languagePath", "", "object-key-init")
  });
});