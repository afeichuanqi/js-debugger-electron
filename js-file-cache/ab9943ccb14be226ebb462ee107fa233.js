var TTDCM = function () {
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", "iframe_" + this.mapIndex++, "var-init"),
      i = cc11001100_hook("i", document.createElement("iframe"), "var-init");
    i.setAttribute("id", e), i.setAttribute("allowTransparency", !0), i.setAttribute("height", 0), i.setAttribute("width", 0), i.setAttribute("src", t), document.body.appendChild(i);
  }
  this.init = cc11001100_hook("this.init", function (t) {
    if (this.sslOnly = cc11001100_hook("this.sslOnly", "https:" == location.protocol, "assign"), void 0 !== t && null != t && 0 != t.length) for (var e = cc11001100_hook("e", t.length, "var-init"), i = cc11001100_hook("i", this.mapIndex = cc11001100_hook("this.mapIndex", 0, "assign"), "var-init"); i < e; i++) n(t[i]);
  }, "assign");
};