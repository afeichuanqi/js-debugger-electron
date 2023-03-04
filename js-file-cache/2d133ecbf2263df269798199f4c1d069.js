/**
 * [utility 公用功能函数]
 * @type {Object}
 */
window.utility = cc11001100_hook("window.utility", {
  /**
   * [strToJson 字符串转json]
   * @param  {[type]} str [description]
   * @return {[type]}     [description]
   */
  strToJson: function (str) {
    var json = cc11001100_hook("json", eval('(' + str + ')'), "var-init");
    return json;
  },
  /**
   * [read 获取cookies]
   * @param  {[string]} name [description]
   * @param  {[string]} key  [description]
   * @return {[type]}      [description]
   */
  read: function (name, key) {
    var cookieValue = cc11001100_hook("cookieValue", "", "var-init");
    var search = cc11001100_hook("search", name + "=", "var-init");
    if (document.cookie.split("").length > 0) {
      offset = cc11001100_hook("offset", document.cookie.indexOf(search), "assign");
      if (offset != -1) {
        offset += cc11001100_hook("offset", search.length, "assign");
        end = cc11001100_hook("end", document.cookie.indexOf(";", offset), "assign");
        if (end == -1) {
          end = cc11001100_hook("end", document.cookie.split("").length, "assign");
        }
        cookieValue = cc11001100_hook("cookieValue", document.cookie.substring(offset, end), "assign");
      }
    }
    var a = cc11001100_hook("a", cookieValue.split("&"), "var-init");
    var o = cc11001100_hook("o", {}, "var-init");
    var haveVal = cc11001100_hook("haveVal", false, "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), l = cc11001100_hook("l", a.length, "var-init"); i < l; i++) {
      var k = cc11001100_hook("k", a[i].split("="), "var-init");
      if (k[0] != "") {
        o[k[0]] = cc11001100_hook("o[k[0]]", k[1], "assign");
        haveVal = cc11001100_hook("haveVal", true, "assign");
      }
    }
    return haveVal ? o : false;
  },
  /**
   * [trim 去除前后空格]
   * @param  {[string]} str [string]
   * @return {[string]}     [string]
   */
  trim: function (str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  /**
   * [loadScript 加载脚本]
   * @param  {[type]} option [description]
   * @return {[type]}        [description]
   */
  loadScript: function (option) {
    var url = cc11001100_hook("url", option.url, "var-init"),
      callback = cc11001100_hook("callback", option.callback, "var-init");
    var script = cc11001100_hook("script", document.createElement("script"), "var-init");
    script.type = cc11001100_hook("script.type", 'text/javascript', "assign");
    if (script.readyState) {
      script.onreadystatechange = cc11001100_hook("script.onreadystatechange", function () {
        if (this.readyState == "complete" || this.readyState == "loaded") {
          callback && callback();
          script.onreadystatechange = cc11001100_hook("script.onreadystatechange", script = cc11001100_hook("script", callback = cc11001100_hook("callback", null, "assign"), "assign"), "assign");
        }
      }, "assign");
    } else {
      script.onload = cc11001100_hook("script.onload", function () {
        callback && callback();
        script.onload = cc11001100_hook("script.onload", script = cc11001100_hook("script", callback = cc11001100_hook("callback", null, "assign"), "assign"), "assign");
      }, "assign");
    }
    script.src = cc11001100_hook("script.src", url, "assign");
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  /**
   * [formatDateTime 格式化时间]
   * @param  {[type]} date [description]
   * @return {[type]}      [description]
   */
  formatDateTime: function (date) {
    var y = cc11001100_hook("y", date.getFullYear(), "var-init");
    var m = cc11001100_hook("m", date.getMonth() + 1, "var-init");
    m = cc11001100_hook("m", m < 10 ? '0' + m : m, "assign");
    var d = cc11001100_hook("d", date.getDate(), "var-init");
    d = cc11001100_hook("d", d < 10 ? '0' + d : d, "assign");
    var h = cc11001100_hook("h", date.getHours(), "var-init");
    var minute = cc11001100_hook("minute", date.getMinutes(), "var-init");
    minute = cc11001100_hook("minute", minute < 10 ? '0' + minute : minute, "assign");
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute;
  },
  /**
   * [detectOS 获取操作系统]
   * @return {[type]} [description]
   */
  detectOS: function () {
    var sUserAgent = cc11001100_hook("sUserAgent", navigator.userAgent, "var-init");
    var isWin = cc11001100_hook("isWin", navigator.platform == "Win32" || navigator.platform == "Windows" || navigator.platform == "Win64", "var-init");
    var isMac = cc11001100_hook("isMac", navigator.platform == "Mac68K" || navigator.platform == "MacPPC" || navigator.platform == "Macintosh" || navigator.platform == "MacIntel", "var-init");
    if (isMac) return "Mac";
    var isUnix = cc11001100_hook("isUnix", navigator.platform == "X11" && !isWin && !isMac, "var-init");
    if (isUnix) return "Unix";
    var isLinux = cc11001100_hook("isLinux", String(navigator.platform).indexOf("Linux") > -1, "var-init");
    if (isLinux) return "Linux";
    if (isWin) {
      return "Windows";
    }
    return "other";
  },
  getBrowser: function () {
    var Sys = cc11001100_hook("Sys", {}, "var-init");
    var ua = cc11001100_hook("ua", navigator.userAgent.toLowerCase(), "var-init");
    var s;
    (s = cc11001100_hook("s", ua.match(/rv:([\d.]+)\) like gecko/), "assign")) ? Sys = cc11001100_hook("Sys", {
      "v": cc11001100_hook("v", s[1], "object-key-init"),
      "type": cc11001100_hook("type", "ie", "object-key-init")
    }, "assign") : (s = cc11001100_hook("s", ua.match(/msie ([\d.]+)/), "assign")) ? Sys = cc11001100_hook("Sys", {
      "v": cc11001100_hook("v", s[1], "object-key-init"),
      "type": cc11001100_hook("type", "ie", "object-key-init")
    }, "assign") : (s = cc11001100_hook("s", ua.match(/firefox\/([\d.]+)/), "assign")) ? Sys = cc11001100_hook("Sys", {
      "v": cc11001100_hook("v", s[1], "object-key-init"),
      "type": cc11001100_hook("type", "firefox", "object-key-init")
    }, "assign") : (s = cc11001100_hook("s", ua.match(/chrome\/([\d.]+)/), "assign")) ? Sys = cc11001100_hook("Sys", {
      "v": cc11001100_hook("v", s[1], "object-key-init"),
      "type": cc11001100_hook("type", "chrome", "object-key-init")
    }, "assign") : (s = cc11001100_hook("s", ua.match(/opera.([\d.]+)/), "assign")) ? Sys = cc11001100_hook("Sys", {
      "v": cc11001100_hook("v", s[1], "object-key-init"),
      "type": cc11001100_hook("type", "opera", "object-key-init")
    }, "assign") : (s = cc11001100_hook("s", ua.match(/version\/([\d.]+).*safari/), "assign")) ? Sys = cc11001100_hook("Sys", {
      "v": cc11001100_hook("v", s[1], "object-key-init"),
      "type": cc11001100_hook("type", "safari", "object-key-init")
    }, "assign") : 0;
    return Sys;
  }
}, "assign");