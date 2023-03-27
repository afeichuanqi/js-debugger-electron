!function () {
  if (/#+.*?wd=([^&|$]+)/.test(location.href) && RegExp.$1) {
    var a = cc11001100_hook("a", RegExp.$1, "var-init"),
      c = cc11001100_hook("c", location.search, "var-init"),
      h = cc11001100_hook("h", "/s" + c, "var-init");
    h += cc11001100_hook("h", c && c.indexOf("?") >= 0 ? "&" : "?", "assign"), h += cc11001100_hook("h", "word=" + a, "assign"), location.replace(h);
    var b = cc11001100_hook("b", document.createElement("meta"), "var-init");
    b.setAttribute("http-equiv", "refresh"), b.setAttribute("content", "0;URL=" + h), document.head.appendChild(b), document.body.style.display = cc11001100_hook("document.body.style.display", "none", "assign");
  }
}();