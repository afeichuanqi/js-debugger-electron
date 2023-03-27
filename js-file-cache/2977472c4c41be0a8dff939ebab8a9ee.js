!function () {
  var a = cc11001100_hook("a", decodeURIComponent(location.hash), "var-init"),
    c = cc11001100_hook("c", window.B || (window.B = cc11001100_hook("window.B", {}, "assign")), "var-init"),
    h = cc11001100_hook("h", window.innerHeight, "var-init");
  if (/\|src_(.*?)\||$/g.test(a) && RegExp.$1) {
    var w = cc11001100_hook("w", "https://m.baidu.com/s?word=" + encodeURIComponent(RegExp.$1), "var-init");
    window.location.replace(w);
  } else {
    var g = cc11001100_hook("g", document.createTextNode("#search-card{min-height:" + h + "px !important;}"), "var-init");
    c.$(".spa-index-style").appendChild(g);
  }
  c.asynJs = cc11001100_hook("c.asynJs", [], "assign"), c.asynLoad = cc11001100_hook("c.asynLoad", function (a) {
    ~c.asynJs.indexOf(a) || c.asynJs.push(a);
  }, "assign");
}();