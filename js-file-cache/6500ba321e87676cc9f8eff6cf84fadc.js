!function () {
  if (location.hash.indexOf("iview=skin") > -1) {
    var a = cc11001100_hook("a", document.createElement("style"), "var-init");
    a.setAttribute("id", "skin-show"), a.setAttribute("type", "text/css"), a.innerHTML = cc11001100_hook("a.innerHTML", "#index-card{display:none;}#page{background-color:#3a3a3a;}", "assign"), B.$("head").appendChild(a);
  }
}();