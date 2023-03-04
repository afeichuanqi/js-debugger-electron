!function (e, n, t) {
  var i = cc11001100_hook("i", {
    appId: cc11001100_hook("appId", "wx8fe524b6bb404c30", "object-key-init"),
    title: cc11001100_hook("title", "CSDN-专业IT技术社区", "object-key-init"),
    desc: cc11001100_hook("desc", "CSDN-专业IT技术社区", "object-key-init"),
    link: cc11001100_hook("link", location.href.split("#")[0], "object-key-init"),
    imgUrl: cc11001100_hook("imgUrl", "https://g.csdnimg.cn/static/logo/logo-200.jpg", "object-key-init"),
    getToken: cc11001100_hook("getToken", !1, "object-key-init"),
    isWeiXin: function () {
      return "micromessenger" == e.navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
    },
    getConfig: function (e) {
      var n = cc11001100_hook("n", this, "var-init");
      if (e || (e = cc11001100_hook("e", n.appId, "assign")), wx) {
        var i = cc11001100_hook("i", "https://wcp.csdn.net/api/wechat/share/id/" + e, "var-init");
        t.ajax({
          type: cc11001100_hook("type", "get", "object-key-init"),
          async: cc11001100_hook("async", !1, "object-key-init"),
          timeout: cc11001100_hook("timeout", 5e3, "object-key-init"),
          url: cc11001100_hook("url", i, "object-key-init"),
          dataType: cc11001100_hook("dataType", "json", "object-key-init"),
          success: function (n) {
            if (200 == n.code) {
              n = cc11001100_hook("n", n.data.sign, "assign");
              var t = cc11001100_hook("t", {
                debug: cc11001100_hook("debug", !1, "object-key-init"),
                appId: cc11001100_hook("appId", e || n.appId, "object-key-init"),
                timestamp: cc11001100_hook("timestamp", n.timestamp, "object-key-init"),
                nonceStr: cc11001100_hook("nonceStr", n.nonceStr, "object-key-init"),
                signature: cc11001100_hook("signature", n.signature, "object-key-init"),
                jsApiList: cc11001100_hook("jsApiList", ["onMenuShareAppMessage", "onMenuShareTimeline"], "object-key-init")
              }, "var-init");
              wx.config(t);
            }
          },
          error: function (e, n, i) {
            t.get("https://statistic.csdn.net/sharewx?error=wechatapi");
          }
        });
      }
    },
    onMenuShare: function (n) {
      var t = cc11001100_hook("t", this, "var-init");
      wx.ready(function () {
        wx.onMenuShareTimeline({
          title: cc11001100_hook("title", n.title || t.title, "object-key-init"),
          desc: cc11001100_hook("desc", n.desc || t.desc, "object-key-init"),
          link: cc11001100_hook("link", n.link || t.link, "object-key-init"),
          imgUrl: cc11001100_hook("imgUrl", n.imgUrl || t.imgUrl, "object-key-init"),
          success: function (n) {
            e.location.href = cc11001100_hook("e.location.href", "https://www.csdn.net/apps/download/share.html", "assign");
          },
          error: function (e) {}
        }), wx.onMenuShareAppMessage({
          title: cc11001100_hook("title", n.title || t.title, "object-key-init"),
          desc: cc11001100_hook("desc", n.desc || t.desc, "object-key-init"),
          link: cc11001100_hook("link", n.link || t.link, "object-key-init"),
          imgUrl: cc11001100_hook("imgUrl", n.imgUrl || t.imgUrl, "object-key-init"),
          success: function (n) {
            e.location.href = cc11001100_hook("e.location.href", "https://www.csdn.net/apps/download/share.html", "assign");
          },
          error: function (e) {}
        }), wx.error(function (e) {
          console.log(JSON.stringify(e));
        });
      });
    }
  }, "var-init");
  if (void 0 === e.csdn && (e.csdn = cc11001100_hook("e.csdn", {}, "assign")), !jQuery) return !1;
  e.csdn.sharewx = cc11001100_hook("e.csdn.sharewx", i, "assign");
}(window, document, jQuery), jQuery(function () {
  if (document.getElementsByTagName("meta")["csdn-share-wx"] && window.csdn.sharewx.isWeiXin()) {
    var e = cc11001100_hook("e", {}, "var-init"),
      n = cc11001100_hook("n", "", "var-init");
    e = cc11001100_hook("e", JSON.parse(document.getElementsByTagName("meta")["csdn-share-wx"].content), "assign"), e.appId && (n = cc11001100_hook("n", e.appId, "assign")), window.csdn.sharewx.getConfig(n), window.csdn.sharewx.onMenuShare(e);
  }
});