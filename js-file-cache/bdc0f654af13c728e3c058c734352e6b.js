define("@baidu/get-app-info/index", ["require", "@baidu/jssdk"], function (require) {
  function a(a) {
    cc11001100_hook("a", a, "function-parameter");
    var g = cc11001100_hook("g", require("@baidu/jssdk"), "var-init");
    return g.data.get({
      name: cc11001100_hook("name", "utils-appInfo", "object-key-init"),
      data: {
        scheme: cc11001100_hook("scheme", a.scheme || "", "object-key-init"),
        pkg: cc11001100_hook("pkg", a.pkg || "", "object-key-init")
      }
    });
  }
  return {
    getAppInfo: cc11001100_hook("getAppInfo", a, "object-key-init")
  };
}), define("@baidu/get-app-info", ["@baidu/get-app-info/index"], function (mod) {
  return mod;
});