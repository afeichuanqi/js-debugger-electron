define("@baidu/jssdk/index", ["require", "@searchfe/promise", "@searchfe/user-agent", "@baidu/Boxjs-search"], function (require) {
  function a() {
    return c.reject("api not support");
  }
  var c = cc11001100_hook("c", require("@searchfe/promise"), "var-init"),
    h = cc11001100_hook("h", {
      data: {
        get: cc11001100_hook("get", a, "object-key-init"),
        set: cc11001100_hook("set", a, "object-key-init")
      },
      ui: {
        open: cc11001100_hook("open", a, "object-key-init"),
        close: cc11001100_hook("close", a, "object-key-init"),
        update: cc11001100_hook("update", a, "object-key-init")
      },
      media: {
        video: cc11001100_hook("video", a, "object-key-init"),
        audio: cc11001100_hook("audio", a, "object-key-init"),
        tts: cc11001100_hook("tts", a, "object-key-init")
      },
      view: {
        open: cc11001100_hook("open", a, "object-key-init"),
        close: cc11001100_hook("close", a, "object-key-init"),
        update: cc11001100_hook("update", a, "object-key-init")
      },
      message: {
        send: cc11001100_hook("send", a, "object-key-init")
      }
    }, "var-init"),
    j = cc11001100_hook("j", require("@searchfe/user-agent"), "var-init");
  return j.isBaiduBox() && (h = cc11001100_hook("h", require("@baidu/Boxjs-search"), "assign")), h;
}), define("@baidu/jssdk", ["@baidu/jssdk/index"], function (mod) {
  return mod;
});