define("plugins/compatible_ipad_input", ["require"], function () {
  function t() {
    function t() {
      return this.orientation, this.screenWidth, this.viewportScale, this.getScale = cc11001100_hook("this.getScale", function () {
        this.viewportScale = cc11001100_hook("this.viewportScale", void 0, "assign");
        var t = cc11001100_hook("t", document.documentElement.clientWidth, "var-init");
        if (!(screen.width > t)) return this.updateOrientation(), this.screenWidth = cc11001100_hook("this.screenWidth", screen.width, "assign"), "portrait" === this.orientation ? screen.width > screen.height && (this.screenWidth = cc11001100_hook("this.screenWidth", screen.height, "assign")) : screen.width < screen.height && (this.screenWidth = cc11001100_hook("this.screenWidth", screen.height, "assign")), this.viewportScale = cc11001100_hook("this.viewportScale", this.screenWidth / window.innerWidth, "assign"), this.viewportScale;
      }, "assign"), this.updateOrientation = cc11001100_hook("this.updateOrientation", function () {
        this.orientation = cc11001100_hook("this.orientation", window.orientation, "assign"), this.orientation = cc11001100_hook("this.orientation", void 0 === this.orientation ? document.documentElement.clientWidth > document.documentElement.clientHeight ? "landscape" : "portrait" : 0 === this.orientation || 180 === this.orientation ? "portrait" : "landscape", "assign");
      }, "assign"), !0;
    }
    var i = cc11001100_hook("i", navigator.appVersion, "var-init"),
      e = cc11001100_hook("e", /ipad/gi.test(i), "var-init"),
      n = cc11001100_hook("n", /UCBrowser/gi.test(i), "var-init"),
      o = cc11001100_hook("o", /BaiduHD/gi.test(i), "var-init"),
      r = cc11001100_hook("r", new t(), "var-init"),
      s = cc11001100_hook("s", r.getScale(), "var-init");
    e && (n || o) && ($("#head").css({
      position: cc11001100_hook("position", "absolute", "object-key-init"),
      top: cc11001100_hook("top", "0px", "object-key-init")
    }), $(window).on("orientationchange", function () {
      var i = cc11001100_hook("i", new t(), "var-init"),
        e = cc11001100_hook("e", i.getScale(), "var-init");
      s === e && $("body").css({
        width: cc11001100_hook("width", window.innerWidth + "px", "object-key-init")
      }), s = cc11001100_hook("s", e, "assign");
    }));
  }
  return t;
});