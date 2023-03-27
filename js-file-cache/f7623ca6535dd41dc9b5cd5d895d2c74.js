!function () {
  var e = cc11001100_hook("e", /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi, "var-init"),
    r = cc11001100_hook("r", window.location.href, "var-init"),
    o = cc11001100_hook("o", document.referrer, "var-init");
  if (!e.test(r)) {
    var n = cc11001100_hook("n", "//api.share.baidu.com/s.gif", "var-init");
    o ? (n += cc11001100_hook("n", "?r=" + encodeURIComponent(document.referrer), "assign"), r && (n += cc11001100_hook("n", "&l=" + r, "assign"))) : r && (n += cc11001100_hook("n", "?l=" + r, "assign"));
    var t = cc11001100_hook("t", new Image(), "var-init");
    t.src = cc11001100_hook("t.src", n, "assign");
  }
}(window);