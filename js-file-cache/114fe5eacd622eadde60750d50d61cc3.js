(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = cc11001100_hook("module.exports", factory(), "assign") : typeof define === 'function' && define.amd ? define(factory) : (global = cc11001100_hook("global", global || self, "assign"), global.replaceHttpsImg = cc11001100_hook("global.replaceHttpsImg", factory(), "assign"));
})(this, function () {
  'use strict';

  function _typeof(obj) {
    cc11001100_hook("obj", obj, "function-parameter");
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = cc11001100_hook("_typeof", function (obj) {
        return typeof obj;
      }, "assign");
    } else {
      _typeof = cc11001100_hook("_typeof", function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, "assign");
    }
    return _typeof(obj);
  }
  Array.prototype.forEach || (Array.prototype.forEach = cc11001100_hook("Array.prototype.forEach", function (r) {
    var o, t;
    if (null == this) throw new TypeError("this is null or not defined");
    var n = cc11001100_hook("n", Object(this), "var-init"),
      e = cc11001100_hook("e", n.length >>> 0, "var-init");
    if ("function" != typeof r) throw new TypeError(r + " is not a function");
    for (1 < arguments.length && (o = cc11001100_hook("o", arguments[1], "assign")), t = cc11001100_hook("t", 0, "assign"); t < e;) {
      var i;
      t in n && (i = cc11001100_hook("i", n[t], "assign"), r.call(o, i, t, n)), t++;
    }
  }, "assign"));
  function setLog(imgurl, msg) {
    cc11001100_hook("imgurl", imgurl, "function-parameter");
    cc11001100_hook("msg", msg, "function-parameter");
    try {
      var sourceUrl = cc11001100_hook("sourceUrl", window.location.href, "var-init");
      var img = cc11001100_hook("img", new Image(), "var-init");
      img.src = cc11001100_hook("img.src", 'https://statwww2.kugou.com/node/weblog/jsloger?key=img_https_list&sourceUrl=' + sourceUrl + '&imgurl=' + imgurl + '&msg=' + msg, "assign");
    } catch (ex) {}
  }
  function replaceHttpsImg(imgUrl) {
    cc11001100_hook("imgUrl", imgUrl, "function-parameter");
    if (!imgUrl) return 0;
    if (~imgUrl.indexOf('https://')) return imgUrl;
    var httpsUrl = cc11001100_hook("httpsUrl", '', "var-init"),
      imgMapHttps = cc11001100_hook("imgMapHttps", [["https://imgessl.kugou.com", ["http://imge.kugou.com", "http://imgessl.kugou.com", "http://singerimg.kugou.com", "http://c0.kgimg.com", "http://c1.kgimg.com", "http://c2.kgimg.com", "http://c3.kgimg.com", "http://c4.kgimg.com", "http://c5.kgimg.com", "http://c6.kgimg.com", "http://c7.kgimg.com", "http://c8.kgimg.com", "http://c9.kgimg.com", "http://s1.kgimg.com"]], ["https://webimg.kgimg.com", ["http://webimg.bssdl.kugou.com"]], ["https://mobileservicebssdl.kugou.com", ["http://mobileservice.bssdl.kugou.com"]], ["https://mwebbssdl.kugou.com", ["http://mweb.bssdl.kugou.com"]], ["https://schoolimgbssdl.kugou.com", ["http://schoolimg.bssdl.kugou.com"]], ["https://activitybssdl.kugou.com", ["http://activity.bssdl.kugou.com"]], ["https://adsfile.kugou.com", ["http://adsfile.bssdlbig.kugou.com"]], ["https://imgacsing.kugou.com", ["http://img.acsing.kugou.com"]], ["https://s10.fxwork.kugou.com", ["http://s10.fxwork.fanxing.kugou.com", "http://s10.fxwork.fanxing.com", "http://s10.fxwork.kugou.com"]], ["https://p3fx.kgimg.com", ["http://imge.kugou.com", "http://s3.fx.kgimg.com", "http://p3.fx.kgimg.com"]], ["https://s4fx.kgimg.com", ["http://s4fx.kgimg.com"]], ["https://m3ws.kugou.com", ["http://m.kugou.com"]], ["https://ep.kugou.com", ["http://zhuanjistatic.kugou.com"]], ["https://ksongbssdl.kugou.com", ["http://ksong.bssdl.kugou.com"]], ["https://fxbssdl.kgimg.com", ["http://fxbssdl.kgimg.com"]], ["https://fxmimagebssdl.kgimg.com", ["http://fxmimagebssdl.kgimg.com"]], ["https://fximgbssdl.kugou.com", ["http://fximgbssdl.kugou.com"]], ["https://fxbssdl.kgimg.com/bss/fxvideoimg/", ["http://fxvideoimg.bssdl.kugou.com"]], ["https://fxbssdl.kgimg.com/bss/fxams", ["http://fxams.bssdl.kugou.com"]], ["https://fxbssdl.kgimg.com/bss/album", ["http://album.bssdl.kugou.com"]], ["https://fxv.kugou.com", ["http://fx.v.kugou.com"]], ["https://imgulssl.kugou.com", ["http://image.upload.kugou.com"]], ["https://imgphpulssl.kugou.com", ["http://imgphp.kugou.com"]], ["https://audioulssl.kugou.com", ["http://upload.fs.kugou.com"]], ["https://bssulbig.service.kugou.com", ["http://bssulbig.kugou.com"]], ["https://qrcodebssdl.kugou.com", ["http://qrcode.bssdl.kugou.com"]], ["https://vipbssdl.kugou.com", ["http://vip.bssdl.kugou.com"]], ["https://$13fx.kgimg.com", [/^http:\/\/([sp])[1-5]\.fx\.(kgimg)\.com/, /^http:\/\/([sp])[1-5]\.fanxing\.com/]]], "var-init");
    imgMapHttps.forEach(function (item) {
      var list = cc11001100_hook("list", item[1], "var-init"),
        replaceHttps = cc11001100_hook("replaceHttps", item[0], "var-init");
      list.forEach(function (it) {
        // httpsUrl = imgUrl.replace(it, replaceHttps)
        if (httpsUrl) {
          return;
        } // 已经匹配到过则不再匹配
        if (_typeof(it) === 'object' && it.test(imgUrl)) {
          httpsUrl = cc11001100_hook("httpsUrl", imgUrl.replace(it, replaceHttps), "assign");
        } else if (~imgUrl.indexOf(it)) {
          httpsUrl = cc11001100_hook("httpsUrl", imgUrl.replace(it, replaceHttps), "assign");
        }
        return !httpsUrl;
      });
      return !httpsUrl;
    });
    httpsUrl || setLog(imgUrl, '转化https链接失败');
    return httpsUrl || imgUrl;
  }
  return replaceHttpsImg;
});
//# sourceMappingURL=replace-https-img.js.map