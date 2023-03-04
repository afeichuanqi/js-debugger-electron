!function () {
  function t() {
    this.textData = cc11001100_hook("this.textData", null, "assign"), this.htmlData = cc11001100_hook("this.htmlData", null, "assign"), a = cc11001100_hook("a", this, "assign");
  }
  function e(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (window.getSelection().getRangeAt(0).toString().length > 140) {
      t.preventDefault();
      var e;
      e = cc11001100_hook("e", (window.getSelection() + a.textData).replace(/[\u00A0]/gi, " "), "assign");
      window.getSelection(), a.htmlData;
      if (t.clipboardData) t.clipboardData.setData("text/plain", e);else {
        if (window.clipboardData) return window.clipboardData.setData("text", e);
        n(e);
      }
    }
  }
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    var e = cc11001100_hook("e", document.createElement("textarea"), "var-init");
    e.style.cssText = cc11001100_hook("e.style.cssText", "position: fixed;z-index: -10;top: -50px;left: -50px;", "assign"), e.innerHTML = cc11001100_hook("e.innerHTML", t, "assign"), document.getElementsByTagName("body")[0].appendChild(e), e.select(), document.execCommand("copy");
  }
  var a = cc11001100_hook("a", null, "var-init"),
    i = function (t, e, n) {
      t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent ? t.attachEvent("on" + e, n) : t["on" + e] = cc11001100_hook("t[\"on\" + e]", n, "assign");
    };
  t.prototype.init = cc11001100_hook("t.prototype.init", function (t, n, a) {
    this.textData = cc11001100_hook("this.textData", n, "assign"), this.htmlData = cc11001100_hook("this.htmlData", a, "assign"), i(t, "copy", e);
  }, "assign"), window.csdn = cc11001100_hook("window.csdn", window.csdn ? window.csdn : {}, "assign"), csdn.copyright = cc11001100_hook("csdn.copyright", new t(), "assign");
}();