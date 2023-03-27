(function () {
  var raFallback = function raFallback(f) {
    return setTimeout(f, 1000 / 10);
  };
  window.requestAnimationFrame = cc11001100_hook("window.requestAnimationFrame", window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || raFallback, "assign");
  var MAX_WAITING_TIME = cc11001100_hook("MAX_WAITING_TIME", 300, "var-init");
  var INIT_TIME = cc11001100_hook("INIT_TIME", Date.now(), "var-init");
  const dataLayer = cc11001100_hook("dataLayer", window.cxDataLayer, "var-init");
  var loadScript = function loadScript() {
    var src = cc11001100_hook("src", [], "var-init");
    var currentTime = cc11001100_hook("currentTime", Date.now(), "var-init");
    var elapseTime = cc11001100_hook("elapseTime", (currentTime - INIT_TIME) / 1000, "var-init");
    if (dataLayer && Object.keys(dataLayer).length > 0 && 'search' in dataLayer && 'params' in dataLayer.search && 'trip_type' in dataLayer.search.params) {
      if (dataLayer.search.params.trip_type === 'O') {
        src.push('https://www.securitytrfx.com/js/cx/cx_ow_v3.6.js');
      }
      if (dataLayer.search.params.trip_type === 'R') {
        src.push('https://www.securitytrfx.com/js/cx/cx_rtp_v3.6.js');
      }
      for (let index = cc11001100_hook("index", 0, "var-init"); index < src.length; index++) {
        const element = cc11001100_hook("element", src[index], "var-init");
        var s = cc11001100_hook("s", document.createElement("script"), "var-init");
        s.type = cc11001100_hook("s.type", "text/javascript", "assign");
        s.async = cc11001100_hook("s.async", true, "assign");
        s.src = cc11001100_hook("s.src", element, "assign");
        var x = cc11001100_hook("x", document.getElementsByTagName("script")[0], "var-init");
        x.parentNode.insertBefore(s, x);
      }
    }
    if ((!dataLayer || Object.keys(dataLayer).length === 0 || !('search' in dataLayer) || !('params' in dataLayer.search) || !('trip_type' in dataLayer.search.params)) && elapseTime < MAX_WAITING_TIME) {
      window.requestAnimationFrame(function () {
        loadScript();
      });
    }
  };
  loadScript();
})();