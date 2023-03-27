!function () {
  var e = cc11001100_hook("e", /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi, "var-init"),
    r = cc11001100_hook("r", window.location.href, "var-init"),
    t = cc11001100_hook("t", document.referrer, "var-init");
  if (!e.test(r)) {
    var o = cc11001100_hook("o", "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif", "var-init");
    t ? (o += cc11001100_hook("o", "?r=" + encodeURIComponent(document.referrer), "assign"), r && (o += cc11001100_hook("o", "&l=" + r, "assign"))) : r && (o += cc11001100_hook("o", "?l=" + r, "assign"));
    var i = cc11001100_hook("i", new Image(), "var-init");
    i.src = cc11001100_hook("i.src", o, "assign");
  }
}(window);