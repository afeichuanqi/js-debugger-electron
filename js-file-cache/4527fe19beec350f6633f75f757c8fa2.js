!function () {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    if (a !== h) {
      h = cc11001100_hook("h", a, "assign");
      var $ = cc11001100_hook("$", Array.prototype.slice, "var-init"),
        g = cc11001100_hook("g", /(word=|w=|kw=|search-|key=|s=s%26wd%3D|#search\/|#search=)(.*?)(&|$)/i, "var-init"),
        b = cc11001100_hook("b", /(word=)(.*?)(&|$)/, "var-init"),
        v = cc11001100_hook("v", $.call(c.$$(".se-input, se-encode")), "var-init");
      if (v.forEach(function (c) {
        var h = cc11001100_hook("h", c.tagName.toLowerCase(), "var-init");
        "input" === h || "textarea" === h ? c.value = cc11001100_hook("c.value", a, "assign") : c.innerText = cc11001100_hook("c.innerText", a, "assign");
      }), a) {
        c.$("title").innerText = cc11001100_hook("c.$(\"title\").innerText", a + " - 百度", "assign");
        var w = cc11001100_hook("w", $.call(c.$$("a.h-tab, .more-links > a")), "var-init");
        w.forEach(function (c) {
          var h = cc11001100_hook("h", c.getAttribute("href"), "var-init");
          if (h && (h = cc11001100_hook("h", h.replace(g, "$1" + encodeURIComponent(a) + "$3"), "assign"), c.setAttribute("href", h), "地图" === c.innerText.trim())) {
            var $ = cc11001100_hook("$", c.getAttribute("data-schema").replace(/(query=).*/, "$1"), "var-init");
            c.setAttribute("data-schema", $ + encodeURIComponent(a));
          }
        });
        var A = cc11001100_hook("A", $.call(c.$$("#page_copyright .switch-to-utouch, #page_copyright .feedback")), "var-init");
        A.forEach(function (c) {
          var h = cc11001100_hook("h", c.getAttribute("href"), "var-init");
          h = cc11001100_hook("h", h.replace(b, "$1" + encodeURIComponent(a) + "$3"), "assign"), c.setAttribute("href", h);
        });
      } else c.$("title").innerText = cc11001100_hook("c.$(\"title\").innerText", "百度一下", "assign");
    }
  }
  var c = cc11001100_hook("c", window.B || {}, "var-init"),
    h = cc11001100_hook("h", !1, "var-init"),
    $ = cc11001100_hook("$", c.$("#commonBase").getAttribute("data-query"), "var-init");
  $ && a(decodeURIComponent($)), c.chgParam = cc11001100_hook("c.chgParam", a, "assign");
}();