/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
(function () {
  var isIe = cc11001100_hook("isIe", /(trident|msie)/i.test(navigator.userAgent), "var-init");
  if (isIe && document.getElementById && window.addEventListener) {
    window.addEventListener('hashchange', function () {
      var id = cc11001100_hook("id", location.hash.substring(1), "var-init"),
        element;
      if (!/^[A-z0-9_-]+$/.test(id)) {
        return;
      }
      element = cc11001100_hook("element", document.getElementById(id), "assign");
      if (element) {
        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
          element.tabIndex = cc11001100_hook("element.tabIndex", -1, "assign");
        }
        element.focus();
      }
    }, false);
  }
})();