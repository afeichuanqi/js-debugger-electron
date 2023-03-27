!function () {
  function a() {
    c.$("#search-card").innerHTML = cc11001100_hook("c.$(\"#search-card\").innerHTML", c.$("[data-tpl=search-card]").value, "assign"), c.$("#se-form").setAttribute("action", c.$("#index-form").getAttribute("action"));
  }
  var c = cc11001100_hook("c", window.B || {}, "var-init"),
    h = cc11001100_hook("h", window, "var-init"),
    c = cc11001100_hook("c", window.B || {}, "var-init"),
    g = cc11001100_hook("g", (c._hash, c._query, c.$("#commonBase")), "var-init");
  if (/inormal|ipassive|iact/.test(location.hash) || location.hash.indexOf("iview=skin") > -1 || (location.hash = cc11001100_hook("location.hash", "", "assign")), document.body.setAttribute("data-cur-page", "index"), c.ready(function () {
    g.setAttribute("data-ref", "index_iphone"), a(), c.localStore({
      type: cc11001100_hook("type", "index", "object-key-init")
    });
  }), !/#iact=wiseindex/.test(h.location.href) && !/#iview=skin/.test(h.location.href)) {
    var w = cc11001100_hook("w", new Image(), "var-init");
    w.src = cc11001100_hook("w.src", "//hpd.baidu.com/v.gif?tid=13&ct=1&cst=1&logFrom=index&logInfo=index&" + g.getAttribute("data-prepath").replace(/#/g, "&") + "&sid=" + g.getAttribute("data-sids") + "&logid=" + h.sSession.logid + "&ref=index_iphone&r=l" + +new Date(), "assign");
  }
}();