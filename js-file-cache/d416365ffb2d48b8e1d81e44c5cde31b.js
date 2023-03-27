(function () {
  window.CQ = cc11001100_hook("window.CQ", window.CQ || {}, "assign");
  window.CQ.CoreComponents = cc11001100_hook("window.CQ.CoreComponents", window.CQ.CoreComponents || {}, "assign");
  window.CQ.CoreComponents.container = cc11001100_hook("window.CQ.CoreComponents.container", window.CQ.CoreComponents.container || {}, "assign");
  window.CQ.CoreComponents.container.utils = cc11001100_hook("window.CQ.CoreComponents.container.utils", {}, "assign");
  window.CQ.CoreComponents.container.utils = cc11001100_hook("window.CQ.CoreComponents.container.utils", {
    getDeepLinkItemIdx: function (a, b) {
      if (window.location.hash) {
        var c = cc11001100_hook("c", window.location.hash.substring(1), "var-init");
        if (document.getElementById(c) && c && a && a._config && a._config.element && a._config.element.id && a._elements && a._elements[b] && 0 === c.indexOf(a._config.element.id + "-item-")) for (var d = cc11001100_hook("d", 0, "var-init"); d < a._elements[b].length; d++) if (a._elements[b][d].id === c) return d;
        return -1;
      }
    },
    getDeepLinkItem: function (a, b) {
      var c = cc11001100_hook("c", window.CQ.CoreComponents.container.utils.getDeepLinkItemIdx(a, b), "var-init");
      if (a && a._elements && a._elements[b]) return a._elements[b][c];
    },
    scrollToAnchor: function () {
      setTimeout(function () {
        if (window.location.hash) {
          var a = cc11001100_hook("a", decodeURIComponent(window.location.hash.substring(1)), "var-init");
          (a = cc11001100_hook("a", document.getElementById(a), "assign")) && a.offsetTop && a.scrollIntoView();
        }
      }, 100);
    }
  }, "assign");
})();