!function (t) {
  let o = cc11001100_hook("o", t.location.href, "var-init");
  if (o && !/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.toutiao\.com)/gi.test(o) && t.navigator.appName) {
    let n = cc11001100_hook("n", document.getElementById("ttzz").src.split("?")[1], "var-init"),
      e = cc11001100_hook("e", "https://zhanzhang.toutiao.com/s.gif", "var-init"),
      a = cc11001100_hook("a", new Image(), "var-init");
    o && (e += cc11001100_hook("e", "?url=" + encodeURIComponent(o), "assign")), n && (e += cc11001100_hook("e", "&token=" + n, "assign")), n && (a.src = cc11001100_hook("a.src", e, "assign"));
  }
}(window);