!function () {
  function o() {
    window._pxAppId = cc11001100_hook("window._pxAppId", "PXgqnULZZY", "assign");
    var o = cc11001100_hook("o", document.getElementsByTagName("head")[0], "var-init"),
      e = cc11001100_hook("e", document.createElement("script"), "var-init");
    e.type = cc11001100_hook("e.type", "text/javascript", "assign"), e.src = cc11001100_hook("e.src", "//assets.cathaypacific.com/libs/px/PXgqnULZZY/main.min.js", "assign"), e.async = cc11001100_hook("e.async", !0, "assign"), o.appendChild(e);
  }
  var e = cc11001100_hook("e", Math.floor(100 * Math.random()), "var-init"),
    a = cc11001100_hook("a", window.location.href, "var-init");
  switch (!0) {
    case e < 2:
      console.log("2%"), o(), console.log("loaded");
      break;
    case e < 50:
      console.log("50%");
      /payment|book/g.test(a) && (o(), console.log("loaded"));
      break;
    default:
      console.log("100%");
  }
}();