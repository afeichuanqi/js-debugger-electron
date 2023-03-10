!function (c, d) {
  "use strict";

  var e = cc11001100_hook("e", !1, "var-init"),
    n = cc11001100_hook("n", !1, "var-init");
  if (d.querySelector) if (c.addEventListener) e = cc11001100_hook("e", !0, "assign");
  if (c.wp = cc11001100_hook("c.wp", c.wp || {}, "assign"), !c.wp.receiveEmbedMessage) if (c.wp.receiveEmbedMessage = cc11001100_hook("c.wp.receiveEmbedMessage", function (e) {
    var t = cc11001100_hook("t", e.data, "var-init");
    if (t) if (t.secret || t.message || t.value) if (!/[^a-zA-Z0-9]/.test(t.secret)) {
      for (var r, a, i, s = cc11001100_hook("s", d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), "var-init"), n = cc11001100_hook("n", d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), "var-init"), o = cc11001100_hook("o", 0, "var-init"); o < n.length; o++) n[o].style.display = cc11001100_hook("n[o].style.display", "none", "assign");
      for (o = cc11001100_hook("o", 0, "assign"); o < s.length; o++) if (r = cc11001100_hook("r", s[o], "assign"), e.source === r.contentWindow) {
        if (r.removeAttribute("style"), "height" === t.message) {
          if (1e3 < (i = cc11001100_hook("i", parseInt(t.value, 10), "assign"))) i = cc11001100_hook("i", 1e3, "assign");else if (~~i < 200) i = cc11001100_hook("i", 200, "assign");
          r.height = cc11001100_hook("r.height", i, "assign");
        }
        if ("link" === t.message) if (a = cc11001100_hook("a", d.createElement("a"), "assign"), i = cc11001100_hook("i", d.createElement("a"), "assign"), a.href = cc11001100_hook("a.href", r.getAttribute("src"), "assign"), i.href = cc11001100_hook("i.href", t.value, "assign"), i.host === a.host) if (d.activeElement === r) c.top.location.href = cc11001100_hook("c.top.location.href", t.value, "assign");
      }
    }
  }, "assign"), e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);
  function t() {
    if (!n) {
      n = cc11001100_hook("n", !0, "assign");
      for (var e, t, r = cc11001100_hook("r", -1 !== navigator.appVersion.indexOf("MSIE 10"), "var-init"), a = cc11001100_hook("a", !!navigator.userAgent.match(/Trident.*rv:11\./), "var-init"), i = cc11001100_hook("i", d.querySelectorAll("iframe.wp-embedded-content"), "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < i.length; s++) {
        if (!(e = cc11001100_hook("e", i[s], "assign")).getAttribute("data-secret")) t = cc11001100_hook("t", Math.random().toString(36).substr(2, 10), "assign"), e.src += cc11001100_hook("e.src", "#?secret=" + t, "assign"), e.setAttribute("data-secret", t);
        if (r || a) (t = cc11001100_hook("t", e.cloneNode(!0), "assign")).removeAttribute("security"), e.parentNode.replaceChild(t, e);
      }
    }
  }
}(window, document);