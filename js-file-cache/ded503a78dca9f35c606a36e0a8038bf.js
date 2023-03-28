!function (a, b) {
  "use strict";

  function c() {
    if (!e) {
      e = cc11001100_hook("e", !0, "assign");
      var a,
        c,
        d,
        f,
        g = cc11001100_hook("g", -1 !== navigator.appVersion.indexOf("MSIE 10"), "var-init"),
        h = cc11001100_hook("h", !!navigator.userAgent.match(/Trident.*rv:11\./), "var-init"),
        i = cc11001100_hook("i", b.querySelectorAll("iframe.wp-embedded-content"), "var-init");
      for (c = cc11001100_hook("c", 0, "assign"); c < i.length; c++) {
        if (d = cc11001100_hook("d", i[c], "assign"), !d.getAttribute("data-secret")) f = cc11001100_hook("f", Math.random().toString(36).substr(2, 10), "assign"), d.src += cc11001100_hook("d.src", "#?secret=" + f, "assign"), d.setAttribute("data-secret", f);
        if (g || h) a = cc11001100_hook("a", d.cloneNode(!0), "assign"), a.removeAttribute("security"), d.parentNode.replaceChild(a, d);
      }
    }
  }
  var d = cc11001100_hook("d", !1, "var-init"),
    e = cc11001100_hook("e", !1, "var-init");
  if (b.querySelector) if (a.addEventListener) d = cc11001100_hook("d", !0, "assign");
  if (a.wp = cc11001100_hook("a.wp", a.wp || {}, "assign"), !a.wp.receiveEmbedMessage) if (a.wp.receiveEmbedMessage = cc11001100_hook("a.wp.receiveEmbedMessage", function (c) {
    var d = cc11001100_hook("d", c.data, "var-init");
    if (d) if (d.secret || d.message || d.value) if (!/[^a-zA-Z0-9]/.test(d.secret)) {
      var e,
        f,
        g,
        h,
        i,
        j = cc11001100_hook("j", b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'), "var-init"),
        k = cc11001100_hook("k", b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]'), "var-init");
      for (e = cc11001100_hook("e", 0, "assign"); e < k.length; e++) k[e].style.display = cc11001100_hook("k[e].style.display", "none", "assign");
      for (e = cc11001100_hook("e", 0, "assign"); e < j.length; e++) if (f = cc11001100_hook("f", j[e], "assign"), c.source === f.contentWindow) {
        if (f.removeAttribute("style"), "height" === d.message) {
          if (g = cc11001100_hook("g", parseInt(d.value, 10), "assign"), g > 1e3) g = cc11001100_hook("g", 1e3, "assign");else if (~~g < 200) g = cc11001100_hook("g", 200, "assign");
          f.height = cc11001100_hook("f.height", g, "assign");
        }
        if ("link" === d.message) if (h = cc11001100_hook("h", b.createElement("a"), "assign"), i = cc11001100_hook("i", b.createElement("a"), "assign"), h.href = cc11001100_hook("h.href", f.getAttribute("src"), "assign"), i.href = cc11001100_hook("i.href", d.value, "assign"), i.host === h.host) if (b.activeElement === f) a.top.location.href = cc11001100_hook("a.top.location.href", d.value, "assign");
      } else ;
    }
  }, "assign"), d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1);
}(window, document);