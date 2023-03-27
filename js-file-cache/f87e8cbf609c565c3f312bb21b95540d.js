define("@searchfe/assert/index", ["require"], function () {
  function a(a, c) {
    cc11001100_hook("a", a, "function-parameter");
    cc11001100_hook("c", c, "function-parameter");
    if (!a) throw new Error(c);
  }
  function c(c, h, w) {
    cc11001100_hook("c", c, "function-parameter");
    cc11001100_hook("h", h, "function-parameter");
    cc11001100_hook("w", w, "function-parameter");
    return a(c == h, w);
  }
  var h = cc11001100_hook("h", a, "var-init");
  return h.ok = cc11001100_hook("h.ok", a, "assign"), h.equal = cc11001100_hook("h.equal", c, "assign"), h;
}), define("@searchfe/assert", ["@searchfe/assert/index"], function (mod) {
  return mod;
});