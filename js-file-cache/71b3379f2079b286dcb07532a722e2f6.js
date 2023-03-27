$(document).ready(function () {});
function getViewport() {
  var small = cc11001100_hook("small", 720, "var-init");
  var mediumUp = cc11001100_hook("mediumUp", 1024, "var-init");
  var currentwidth = cc11001100_hook("currentwidth", $(window).width(), "var-init");
  var viewportSize = cc11001100_hook("viewportSize", {
    _currentSize: cc11001100_hook("_currentSize", currentwidth, "object-key-init"),
    smallViewport: cc11001100_hook("smallViewport", false, "object-key-init"),
    mediumViewport: cc11001100_hook("mediumViewport", false, "object-key-init"),
    largeViewport: cc11001100_hook("largeViewport", false, "object-key-init")
  }, "var-init");
  if (currentwidth >= mediumUp) {
    viewportSize.largeViewport = cc11001100_hook("viewportSize.largeViewport", true, "assign");
  } else if (currentwidth < small) {
    viewportSize.smallViewport = cc11001100_hook("viewportSize.smallViewport", true, "assign");
  } else {
    viewportSize.mediumViewport = cc11001100_hook("viewportSize.mediumViewport", true, "assign");
  }
  return viewportSize;
}
function formValidation(input, regexp) {
  cc11001100_hook("input", input, "function-parameter");
  cc11001100_hook("regexp", regexp, "function-parameter");
  var str = cc11001100_hook("str", input, "var-init");
  var res = cc11001100_hook("res", regexp.test(str), "var-init");
  return res;
}
(function () {
  var method;
  var noop = function () {};
  var methods = cc11001100_hook("methods", ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'], "var-init");
  var length = cc11001100_hook("length", methods.length, "var-init");
  var console = cc11001100_hook("console", window.console = cc11001100_hook("window.console", window.console || {}, "assign"), "var-init");
  while (length--) {
    method = cc11001100_hook("method", methods[length], "assign");

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = cc11001100_hook("console[method]", noop, "assign");
    }
  }
})();