var jsVersion = cc11001100_hook("jsVersion", 180925, "var-init");
var KgUser = cc11001100_hook("KgUser", KgUser || {
  $: function () {
    var els = cc11001100_hook("els", [], "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), l = cc11001100_hook("l", arguments.length, "var-init"); i < l; i++) {
      var el = cc11001100_hook("el", arguments[i], "var-init");
      if (typeof el == "string") el = cc11001100_hook("el", document.getElementById(el), "assign");
      if (l == 1) return el;
      els.push(el);
    }
    return els;
  },
  $T: function (tagName, el) {
    var els = cc11001100_hook("els", (this.$(el) || document).getElementsByTagName(tagName || "*"), "var-init");
    return this.$A(els);
  },
  $A: function (args) {
    var arr = cc11001100_hook("arr", [], "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"), l = cc11001100_hook("l", args.length, "var-init"); i < l; i++) {
      arr.push(args[i]);
    }
    return arr;
  },
  $C: function (name, el, tagName) {
    var cEls = cc11001100_hook("cEls", [], "var-init"),
      i = cc11001100_hook("i", 0, "var-init");
    if (!!document.getElementsByClassName) {
      var arr = cc11001100_hook("arr", this.$(el || document).getElementsByClassName(name), "var-init");
      arr = cc11001100_hook("arr", this.$A(arr), "assign");
      if (tagName && tagName !== "*") {
        for (var l = cc11001100_hook("l", arr.length, "var-init"); i < l; i++) {
          arr[i].tagName.toLowerCase() === tagName.toLowerCase() && cEls.push(arr[i]);
        }
      } else {
        cEls = cc11001100_hook("cEls", arr, "assign");
      }
    } else {
      for (var arr = cc11001100_hook("arr", this.$T(tagName, el), "var-init"), l = cc11001100_hook("l", arr.length, "var-init"); i < l; i++) {
        new RegExp("\\b" + name + "\\b", "g").test(arr[i].className) && cEls.push(arr[i]);
      }
    }
    return cEls;
  },
  addJsVersion: function (url) {
    if (url.indexOf('?') == -1) {
      return url + "?kguser_jv=" + jsVersion;
    } else {
      return url + "&kguser_jv=" + jsVersion;
    }
  },
  isAckHost: function (url, lhost) {
    var urlArr = cc11001100_hook("urlArr", url.split("/"), "var-init");
    if (urlArr.length <= 2) {
      return true;
    }
    return urlArr[2] != lhost;
  },
  loadScriptN: function (url, args, callback, async) {
    var is_timeout = cc11001100_hook("is_timeout", false, "var-init");
    var timeoutid = cc11001100_hook("timeoutid", null, "var-init");
    var timeout = cc11001100_hook("timeout", 3000, "var-init");
    var params = cc11001100_hook("params", args || "", "var-init");
    if (args && typeof args === "object") {
      if (KgUser.IsEmpty(args.mid)) {
        args["mid"] = cc11001100_hook("args[\"mid\"]", KgUser.Cookie.read(KgUser.KgMid.name), "assign");
      }
      var str = cc11001100_hook("str", "", "var-init");
      for (var i in args) {
        if (i === 'error') continue;
        str += cc11001100_hook("str", i + "=" + args[i] + "&", "assign");
      }
      params = cc11001100_hook("params", str.substr(0, str.length - 1), "assign");
      if (!KgUser.IsEmpty(args.timeout)) {
        timeout = cc11001100_hook("timeout", args.timeout, "assign");
      }
    }
    ;
    var script = cc11001100_hook("script", document.createElement("script"), "var-init");
    script.type = cc11001100_hook("script.type", 'text/javascript', "assign");
    if (params != null && params != "") {
      url = cc11001100_hook("url", url + "?" + (params || ''), "assign");
    }
    url = cc11001100_hook("url", KgUser.addJsVersion(url), "assign");
    var err_type = cc11001100_hook("err_type", KgUser.KgErrType.busislave, "var-init");
    if (url.indexOf("KgAck") > -1) {
      err_type = cc11001100_hook("err_type", KgUser.KgErrType.ackjs, "assign");
    }
    script.src = cc11001100_hook("script.src", url, "assign");
    script.onload = cc11001100_hook("script.onload", script.onreadystatechange = cc11001100_hook("script.onreadystatechange", function () {
      if (!this.readyState || this.readyState == "complete" || this.readyState == "loaded") {
        script.onreadystatechange = cc11001100_hook("script.onreadystatechange", script.onload = cc11001100_hook("script.onload", null, "assign"), "assign");
        script = cc11001100_hook("script", null, "assign");
        clearTimeout(timeoutid);
        callback && callback();
      }
    }, "assign"), "assign");
    script.onerror = cc11001100_hook("script.onerror", function () {
      if (!is_timeout) {
        clearTimeout(timeoutid);
        args.error && args.error(err_type);
      }
    }, "assign");
    if (async) script.async = cc11001100_hook("script.async", 'async', "assign");
    timeoutid = cc11001100_hook("timeoutid", setTimeout(function () {
      is_timeout = cc11001100_hook("is_timeout", true, "assign");
      args.error && args.error(err_type);
    }, timeout), "assign");
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  loadScript: function (url, args, callback) {
    var is_timeout = cc11001100_hook("is_timeout", false, "var-init");
    var timeoutid = cc11001100_hook("timeoutid", null, "var-init");
    var timeout = cc11001100_hook("timeout", 3500, "var-init");
    var oArgs = cc11001100_hook("oArgs", args, "var-init");
    var oUrl = cc11001100_hook("oUrl", url, "var-init");
    var params = cc11001100_hook("params", args || "", "var-init");
    if (args && typeof args === "object") {
      if (KgUser.IsEmpty(args.mid)) {
        args["mid"] = cc11001100_hook("args[\"mid\"]", KgUser.Cookie.read(KgUser.KgMid.name), "assign");
      }
      var str = cc11001100_hook("str", "", "var-init");
      for (var i in args) {
        if (i === 'error') continue;
        str += cc11001100_hook("str", i + "=" + args[i] + "&", "assign");
      }
      params = cc11001100_hook("params", str.substr(0, str.length - 1), "assign");
      if (KgUser.IsEmpty(args.timeout)) {
        oArgs.timeout = cc11001100_hook("oArgs.timeout", timeout, "assign");
      }
    }
    ;
    var script = cc11001100_hook("script", document.createElement("script"), "var-init");
    script.type = cc11001100_hook("script.type", 'text/javascript', "assign");
    if (params != null && params != "") {
      url = cc11001100_hook("url", url + "?" + (params || ''), "assign");
    }
    url = cc11001100_hook("url", KgUser.addJsVersion(url), "assign");
    KgUser.KgUrl.verify = cc11001100_hook("KgUser.KgUrl.verify", "http://verifycode.service.kugou.com/", "assign");
    var urlArr = cc11001100_hook("urlArr", url.split("/"), "var-init");
    if (urlArr.length <= 2) {
      args.error && args.error(KgUser.KgErrType.param);
      return;
    }
    var host = cc11001100_hook("host", urlArr[2], "var-init");
    var need_retry = cc11001100_hook("need_retry", host == "login-user.kugou.com" || host == "reg-user.kugou.com", "var-init");
    var err_type = cc11001100_hook("err_type", KgUser.KgErrType.busislave, "var-init");
    if (need_retry) {
      err_type = cc11001100_hook("err_type", KgUser.KgErrType.busimaster, "assign");
    } else if (url.indexOf("KgAck") > -1) {
      err_type = cc11001100_hook("err_type", KgUser.KgErrType.ackjs, "assign");
    }
    script.src = cc11001100_hook("script.src", url, "assign");
    var isok = cc11001100_hook("isok", false, "var-init");
    script.onload = cc11001100_hook("script.onload", script.onreadystatechange = cc11001100_hook("script.onreadystatechange", function () {
      if (!this.readyState || this.readyState == "complete" || this.readyState == "loaded") {
        script.onreadystatechange = cc11001100_hook("script.onreadystatechange", script.onload = cc11001100_hook("script.onload", null, "assign"), "assign");
        script = cc11001100_hook("script", null, "assign");
        isok = cc11001100_hook("isok", true, "assign");
        clearTimeout(timeoutid);
        callback && callback();
      }
    }, "assign"), "assign");
    script.onerror = cc11001100_hook("script.onerror", function () {
      if (need_retry) {
        if (!is_timeout) {
          clearTimeout(timeoutid);
          KgUser.ackRetry(oUrl, host, oArgs, callback);
        }
      } else {
        args.error && args.error(err_type);
      }
    }, "assign");
    document.getElementsByTagName("head")[0].appendChild(script);
    if (need_retry) {
      timeoutid = cc11001100_hook("timeoutid", setTimeout(function () {
        if (!isok) {
          is_timeout = cc11001100_hook("is_timeout", true, "assign");
          KgUser.ackRetry(oUrl, host, oArgs, callback);
        }
      }, timeout), "assign");
    }
  },
  KgAckId: {
    login: cc11001100_hook("login", 10015, "object-key-init"),
    reg: cc11001100_hook("reg", 10016, "object-key-init"),
    verify: cc11001100_hook("verify", 10017, "object-key-init"),
    url: cc11001100_hook("url", "http://serveraddr.serviceweb.kugou.com/KgAck.js", "object-key-init"),
    url_https: cc11001100_hook("url_https", "https://serveraddrweb.kugou.com/KgAckV2.js", "object-key-init")
  },
  ackCallBack: function (dataObj) {
    if (dataObj.errorCode == 1) {
      var g_param = cc11001100_hook("g_param", KgUser.KgAckId.global_param, "var-init");
      var res_data = cc11001100_hook("res_data", dataObj.data, "var-init");
      var loginHost = cc11001100_hook("loginHost", g_param.loginHost, "var-init");
      var loginAckHost = cc11001100_hook("loginAckHost", res_data["server_" + KgUser.KgAckId.login], "var-init");
      if (!KgUser.IsEmpty(loginAckHost)) {
        var loginAckHost = cc11001100_hook("loginAckHost", loginAckHost["list"][0], "var-init");
        if (!KgUser.isAckHost(KgUser.KgUrl.login, loginHost)) {
          KgUser.KgUrl.verify = cc11001100_hook("KgUser.KgUrl.verify", "http://" + loginAckHost, "assign");
          KgUser.KgUrl.login = cc11001100_hook("KgUser.KgUrl.login", KgUser.KgUrl.login.replace(loginHost, loginAckHost), "assign");
          KgUser.KgUrl.loginHTTP = cc11001100_hook("KgUser.KgUrl.loginHTTP", KgUser.KgUrl.loginHTTP.replace(loginHost, loginAckHost), "assign");
        }
        KgUser.loadScriptN(g_param.url.replace(loginHost, loginAckHost), g_param.args, g_param.callback);
      }
    } else {}
  },
  ackCallBackUpdateCookie: function (dataObj) {
    setTimeout(function () {
      var ackKey = cc11001100_hook("ackKey", "ACK_SERVER_" + KgUser.KgAckId.login, "var-init");
      var ackVal = cc11001100_hook("ackVal", KgUser.Cookie.read(ackKey), "var-init");
      if (!KgUser.IsEmpty(ackVal)) {
        KgUser.Cookie.write(ackKey, ackVal, 3600, '/');
      }
    }, 500);
  },
  KgErrType: {
    busimaster: cc11001100_hook("busimaster", 1, "object-key-init"),
    busislave: cc11001100_hook("busislave", 2, "object-key-init"),
    ackjs: cc11001100_hook("ackjs", 3, "object-key-init"),
    ackconf: cc11001100_hook("ackconf", 4, "object-key-init")
  },
  loadAckJs: function (args) {
    var server_list = cc11001100_hook("server_list", [KgUser.KgAckId.login, KgUser.KgAckId.reg, KgUser.KgAckId.verify], "var-init");
    var update_server_list = cc11001100_hook("update_server_list", new Array(), "var-init");
    var ack_cookie_prefix = cc11001100_hook("ack_cookie_prefix", "ACK_SERVER_", "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < server_list.length; i++) {
      var ack_cookie_name = cc11001100_hook("ack_cookie_name", ack_cookie_prefix + server_list[i], "var-init");
      var ack_cookie_val = cc11001100_hook("ack_cookie_val", KgUser.Cookie.read(ack_cookie_name), "var-init");
      if (KgUser.IsEmpty(ack_cookie_val)) {
        update_server_list.push(server_list[i]);
      }
    }
    var appid = cc11001100_hook("appid", 88, "var-init");
    if (args && args["appid"]) {
      if (parseInt(args["appid"]) > 0) {
        appid = cc11001100_hook("appid", args["appid"], "assign");
      }
    }
    window.getAckConfCallback = cc11001100_hook("window.getAckConfCallback", function () {
      if (typeof KgAck != "undefined") {
        var infoObj = cc11001100_hook("infoObj", new Object(), "var-init");
        infoObj.appid = cc11001100_hook("infoObj.appid", appid, "assign");
        infoObj.clientver = cc11001100_hook("infoObj.clientver", 10, "assign");
        infoObj.clienttime = cc11001100_hook("infoObj.clienttime", new Date().getTime(), "assign");
        infoObj.plats = cc11001100_hook("infoObj.plats", update_server_list, "assign");
        if (typeof args != "undefined") {
          KgAck.getConfig(infoObj, "KgUser.ackCallBack");
          if (args.error) {
            setTimeout(function () {
              if (KgUser.IsEmpty(KgUser.Cookie.read(ack_cookie_prefix + KgUser.KgAckId.login))) {
                args.error(KgUser.KgErrType.ackconf);
              }
            }, timeout);
          }
        } else {
          KgAck.getConfig(infoObj, "KgUser.ackCallBackUpdateCookie");
        }
      }
    }, "assign");
    if (update_server_list.length > 0) {
      if (typeof KgAck == "undefined") {
        var ackUrl = cc11001100_hook("ackUrl", KgUser.KgAckId.url, "var-init");
        if (document.location.protocol == "https:") {
          ackUrl = cc11001100_hook("ackUrl", KgUser.KgAckId.url_https, "assign");
        }
        var param = cc11001100_hook("param", new Object(), "var-init");
        param.timeout = cc11001100_hook("param.timeout", 3000, "assign");
        if (args && args["timeout"]) {
          param.timeout = cc11001100_hook("param.timeout", args["timeout"], "assign");
        }
        if (args && args["error"]) {
          param.error = cc11001100_hook("param.error", args["error"], "assign");
        }
        KgUser.loadScriptN(ackUrl, param, getAckConfCallback, true);
      } else {
        getAckConfCallback();
      }
    }
  },
  ackRetry: function (url, host, args, callback) {
    var ack_cookie_prefix = cc11001100_hook("ack_cookie_prefix", "ACK_SERVER_", "var-init");
    var regHost = cc11001100_hook("regHost", "reg-user.kugou.com", "var-init");
    var loginHost = cc11001100_hook("loginHost", "login-user.kugou.com", "var-init");
    var loginAckHost = cc11001100_hook("loginAckHost", KgUser.Cookie.read(ack_cookie_prefix + KgUser.KgAckId.login), "var-init");
    if (!KgUser.IsEmpty(loginAckHost)) {
      var loginAckHost = cc11001100_hook("loginAckHost", KgUser.JSON.parse(loginAckHost)["list"][0], "var-init");
      if (!KgUser.isAckHost(KgUser.KgUrl.login, loginHost)) {
        KgUser.KgUrl.verify = cc11001100_hook("KgUser.KgUrl.verify", "http://" + loginAckHost, "assign");
        KgUser.KgUrl.login = cc11001100_hook("KgUser.KgUrl.login", KgUser.KgUrl.login.replace(loginHost, loginAckHost), "assign");
        KgUser.KgUrl.loginHTTP = cc11001100_hook("KgUser.KgUrl.loginHTTP", KgUser.KgUrl.loginHTTP.replace(loginHost, loginAckHost), "assign");
      }
      KgUser.loadScriptN(url.replace(host, loginAckHost), args, callback);
      return;
    }
    var tem_obj = cc11001100_hook("tem_obj", new Object(), "var-init");
    tem_obj.loginHost = cc11001100_hook("tem_obj.loginHost", loginHost, "assign");
    tem_obj.url = cc11001100_hook("tem_obj.url", url, "assign");
    tem_obj.args = cc11001100_hook("tem_obj.args", args, "assign");
    tem_obj.callback = cc11001100_hook("tem_obj.callback", callback, "assign");
    KgUser.KgAckId.global_param = cc11001100_hook("KgUser.KgAckId.global_param", tem_obj, "assign");
    this.loadAckJs(args);
  },
  KgMid: {
    name: cc11001100_hook("name", "kg_mid", "object-key-init"),
    days: cc11001100_hook("days", 10000, "object-key-init")
  },
  JSON: cc11001100_hook("JSON", function () {
    function f(n) {
      cc11001100_hook("n", n, "function-parameter");
      return n < 10 ? '0' + n : n;
    }
    Date.prototype.toJSON = cc11001100_hook("Date.prototype.toJSON", function () {
      return this.getUTCFullYear() + '-' + f(this.getUTCMonth() + 1) + '-' + f(this.getUTCDate()) + 'T' + f(this.getUTCHours()) + ':' + f(this.getUTCMinutes()) + ':' + f(this.getUTCSeconds()) + 'Z';
    }, "assign");
    var m = cc11001100_hook("m", {
      '\b': cc11001100_hook('\b', '\\b', "object-key-init"),
      '\t': cc11001100_hook('\t', '\\t', "object-key-init"),
      '\n': cc11001100_hook('\n', '\\n', "object-key-init"),
      '\f': cc11001100_hook('\f', '\\f', "object-key-init"),
      '\r': cc11001100_hook('\r', '\\r', "object-key-init"),
      '"': cc11001100_hook('"', '\\"', "object-key-init"),
      '\\': cc11001100_hook('\\', '\\\\', "object-key-init")
    }, "var-init");
    function stringify(value, whitelist) {
      cc11001100_hook("value", value, "function-parameter");
      cc11001100_hook("whitelist", whitelist, "function-parameter");
      var a,
        i,
        k,
        l,
        r = cc11001100_hook("r", /["\\\x00-\x1f\x7f-\x9f]/g, "var-init"),
        v;
      switch (typeof value) {
        case 'string':
          return r.test(value) ? '"' + value.replace(r, function (a) {
            var c = cc11001100_hook("c", m[a], "var-init");
            if (c) {
              return c;
            }
            c = cc11001100_hook("c", a.charCodeAt(), "assign");
            return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
          }) + '"' : '"' + value + '"';
        case 'number':
          return isFinite(value) ? String(value) : 'null';
        case 'boolean':
        case 'null':
          return String(value);
        case 'object':
          if (!value) {
            return 'null';
          }
          if (typeof value.toJSON === 'function') {
            return stringify(value.toJSON());
          }
          a = cc11001100_hook("a", [], "assign");
          if (typeof value.length === 'number' && !value.propertyIsEnumerable('length')) {
            l = cc11001100_hook("l", value.length, "assign");
            for (i = cc11001100_hook("i", 0, "assign"); i < l; i += cc11001100_hook("i", 1, "assign")) {
              a.push(stringify(value[i], whitelist) || 'null');
            }
            return '[' + a.join(',') + ']';
          }
          if (whitelist) {
            l = cc11001100_hook("l", whitelist.length, "assign");
            for (i = cc11001100_hook("i", 0, "assign"); i < l; i += cc11001100_hook("i", 1, "assign")) {
              k = cc11001100_hook("k", whitelist[i], "assign");
              if (typeof k === 'string') {
                v = cc11001100_hook("v", stringify(value[k], whitelist), "assign");
                if (v) {
                  a.push(stringify(k) + ':' + v);
                }
              }
            }
          } else {
            for (k in value) {
              if (typeof k === 'string') {
                v = cc11001100_hook("v", stringify(value[k], whitelist), "assign");
                if (v) {
                  a.push(stringify(k) + ':' + v);
                }
              }
            }
          }
          return '{' + a.join(',') + '}';
      }
    }
    return {
      stringify: cc11001100_hook("stringify", stringify, "object-key-init"),
      parse: function (text, filter) {
        var j;
        function walk(k, v) {
          cc11001100_hook("k", k, "function-parameter");
          cc11001100_hook("v", v, "function-parameter");
          var i, n;
          if (v && typeof v === 'object') {
            for (i in v) {
              if (Object.prototype.hasOwnProperty.apply(v, [i])) {
                n = cc11001100_hook("n", walk(i, v[i]), "assign");
                if (n !== undefined) {
                  v[i] = cc11001100_hook("v[i]", n, "assign");
                } else {
                  delete v[i];
                }
              }
            }
          }
          return filter(k, v);
        }
        if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
          j = cc11001100_hook("j", eval('(' + text + ')'), "assign");
          return typeof filter === 'function' ? walk('', j) : j;
        }
        throw new SyntaxError('parseJSON');
      }
    };
  }(), "object-key-init"),
  Cookie: {
    write: function (name, value, exp, path, domain, secure) {
      var expires = cc11001100_hook("expires", "", "var-init");
      if (exp) {
        var dt = cc11001100_hook("dt", new Date(), "var-init");
        dt.setTime(dt.getTime() + exp * 1000);
        expires = cc11001100_hook("expires", ";expires=" + dt.toGMTString(), "assign");
      }
      value = cc11001100_hook("value", encodeURIComponent(value), "assign");
      path = cc11001100_hook("path", path ? '; path=' + path : ';path=/', "assign");
      domain = cc11001100_hook("domain", domain ? '; domain=' + domain : '', "assign");
      secure = cc11001100_hook("secure", secure ? '; secure' : '', "assign");
      document.cookie = cc11001100_hook("document.cookie", [name, '=', value, expires, path, domain, secure].join(''), "assign");
    },
    setDay: function (name, value, exp, path, domain, secure) {
      this.write(name, value, exp * 24 * 60 * 60, path, domain, secure);
    },
    setHour: function (name, value, exp, path, domain, secure) {
      this.write(name, value, exp * 60 * 60, path, domain, secure);
    },
    setMin: function (name, value, exp, path, domain, secure) {
      this.write(name, value, exp * 60, path, domain, secure);
    },
    setSec: function (name, value, exp, path, domain, secure) {
      this.write(name, value, exp, path, domain, secure);
    },
    read: function (name, subName) {
      var cookieValue = cc11001100_hook("cookieValue", "", "var-init");
      var search = cc11001100_hook("search", name + "=", "var-init");
      if (document.cookie.length > 0) {
        offset = cc11001100_hook("offset", document.cookie.indexOf(search), "assign");
        if (offset != -1) {
          offset += cc11001100_hook("offset", search.length, "assign");
          end = cc11001100_hook("end", document.cookie.indexOf(";", offset), "assign");
          if (end == -1) {
            end = cc11001100_hook("end", document.cookie.length, "assign");
          }
          cookieValue = cc11001100_hook("cookieValue", document.cookie.substring(offset, end), "assign");
          if (typeof subName != 'undefined' && subName != null && subName != "") {
            var subCookies = cc11001100_hook("subCookies", cookieValue.toString().split('&'), "var-init");
            for (var j = cc11001100_hook("j", 0, "var-init"); j < subCookies.length; j++) {
              var subCookie = cc11001100_hook("subCookie", subCookies[j], "var-init");
              if (subCookie.substring(0, subName.length + 1) == subName + '=') {
                cookieValue = cc11001100_hook("cookieValue", subCookie.substring(subName.length + 1).replace(/%/g, "\\"), "assign");
                break;
              } else {
                cookieValue = cc11001100_hook("cookieValue", "", "assign");
              }
            }
          }
        }
      }
      return decodeURIComponent(cookieValue);
    },
    remove: function (name) {
      this.write(name, "", -90);
    }
  },
  KgUrl: {
    login: cc11001100_hook("login", "https://login-user.kugou.com/", "object-key-init"),
    loginHTTP: cc11001100_hook("loginHTTP", "http://login-user.kugou.com/", "object-key-init"),
    verify: cc11001100_hook("verify", "http://verifycode.service.kugou.com/", "object-key-init"),
    third: cc11001100_hook("third", "http://openplat-user.kugou.com/", "object-key-init"),
    cross: cc11001100_hook("cross", "http://login.user.kugou.com/", "object-key-init"),
    reg: cc11001100_hook("reg", "https://reg-user.kugou.com/", "object-key-init"),
    user: cc11001100_hook("user", "http://userinfo.user.kugou.com/", "object-key-init")
  },
  LoadCss: function (cssText, id) {
    var style = cc11001100_hook("style", document.createElement('style'), "var-init");
    var head = cc11001100_hook("head", document.head || document.getElementsByTagName('head')[0], "var-init");
    style.type = cc11001100_hook("style.type", 'text/css', "assign");
    style.id = cc11001100_hook("style.id", id, "assign");
    if (style.styleSheet) {
      var func = function () {
        try {
          style.styleSheet.cssText = cc11001100_hook("style.styleSheet.cssText", cssText, "assign");
        } catch (e) {}
      };
      if (style.styleSheet.disabled) {
        setTimeout(func, 10);
      } else {
        func();
      }
    } else {
      var textNode = cc11001100_hook("textNode", document.createTextNode(cssText), "var-init");
      style.appendChild(textNode);
    }
    head.appendChild(style);
  },
  Login: function (infoObj, callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var username = cc11001100_hook("username", "", "var-init");
    var pwd = cc11001100_hook("pwd", "", "var-init");
    var code = cc11001100_hook("code", "", "var-init");
    var ticket = cc11001100_hook("ticket", "", "var-init");
    var expireday = cc11001100_hook("expireday", 1, "var-init");
    var autologin = cc11001100_hook("autologin", false, "var-init");
    var redirect_uri = cc11001100_hook("redirect_uri", '', "var-init");
    var state = cc11001100_hook("state", '', "var-init");
    var mobile = cc11001100_hook("mobile", "", "var-init");
    var mobile_code = cc11001100_hook("mobile_code", "", "var-init");
    if (KgUser.IsEmpty(infoObj.appid) || KgUser.IsEmpty(KgUser.Trim(infoObj.username)) || KgUser.IsEmpty(KgUser.Trim(infoObj.pwd)) || KgUser.IsEmpty(callbackName)) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      });
      return false;
    }
    appid = cc11001100_hook("appid", infoObj.appid, "assign");
    username = cc11001100_hook("username", KgUser.Trim(infoObj.username), "assign");
    pwd = cc11001100_hook("pwd", KgUser.Trim(infoObj.pwd), "assign");
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.code))) {
      code = cc11001100_hook("code", KgUser.Trim(infoObj.code), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.ticket))) {
      ticket = cc11001100_hook("ticket", KgUser.Trim(infoObj.ticket), "assign");
    }
    if (!KgUser.IsEmpty(infoObj.expire_day)) {
      expireday = cc11001100_hook("expireday", infoObj.expire_day, "assign");
    }
    if (!KgUser.IsEmpty(infoObj.autologin)) {
      autologin = cc11001100_hook("autologin", infoObj.autologin, "assign");
    }
    if (!KgUser.IsEmpty(infoObj.redirect_uri)) {
      redirect_uri = cc11001100_hook("redirect_uri", infoObj.redirect_uri, "assign");
    }
    if (!KgUser.IsEmpty(infoObj.state)) {
      state = cc11001100_hook("state", infoObj.state, "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.mobile))) {
      mobile = cc11001100_hook("mobile", KgUser.Trim(infoObj.mobile), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.mobile_code))) {
      mobile_code = cc11001100_hook("mobile_code", KgUser.Trim(infoObj.mobile_code), "assign");
    }
    if (autologin) {
      expireday = cc11001100_hook("expireday", 30, "assign");
    }
    var param = cc11001100_hook("param", {
      'appid': cc11001100_hook('appid', appid, "object-key-init"),
      'username': cc11001100_hook('username', encodeURIComponent(username), "object-key-init"),
      'pwd': cc11001100_hook('pwd', KgUser.Md5(pwd), "object-key-init"),
      'code': cc11001100_hook('code', code, "object-key-init"),
      'ticket': cc11001100_hook('ticket', ticket, "object-key-init"),
      'clienttime': cc11001100_hook('clienttime', parseInt(new Date().getTime() / 1000), "object-key-init"),
      'expire_day': cc11001100_hook('expire_day', expireday, "object-key-init"),
      'autologin': cc11001100_hook('autologin', autologin, "object-key-init"),
      'redirect_uri': cc11001100_hook('redirect_uri', encodeURIComponent(redirect_uri), "object-key-init"),
      'state': cc11001100_hook('state', encodeURIComponent(state), "object-key-init"),
      'callback': cc11001100_hook('callback', callbackName, "object-key-init"),
      'error': cc11001100_hook('error', infoObj.error, "object-key-init"),
      'login_ver': cc11001100_hook('login_ver', 1, "object-key-init"),
      'mobile': cc11001100_hook('mobile', mobile, "object-key-init"),
      'mobile_code': cc11001100_hook('mobile_code', mobile_code, "object-key-init")
    }, "var-init");
    this.loadScript(KgUser.KgUrl.login + 'v1/login/', param);
  },
  LoginByVerifycode: function (infoObj, callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var mobile = cc11001100_hook("mobile", "", "var-init");
    var code = cc11001100_hook("code", "", "var-init");
    var expireday = cc11001100_hook("expireday", 1, "var-init");
    if (KgUser.IsEmpty(infoObj.appid) || KgUser.IsEmpty(KgUser.Trim(infoObj.mobile)) || KgUser.IsEmpty(KgUser.Trim(infoObj.code)) || KgUser.IsEmpty(callbackName)) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      });
      return false;
    }
    appid = cc11001100_hook("appid", infoObj.appid, "assign");
    mobile = cc11001100_hook("mobile", KgUser.Trim(infoObj.mobile), "assign");
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.code))) {
      code = cc11001100_hook("code", KgUser.Trim(infoObj.code), "assign");
    }
    if (!KgUser.IsEmpty(infoObj.expire_day)) {
      expireday = cc11001100_hook("expireday", infoObj.expire_day, "assign");
    }
    var param = cc11001100_hook("param", {
      'appid': cc11001100_hook('appid', appid, "object-key-init"),
      'mobile': cc11001100_hook('mobile', encodeURIComponent(mobile), "object-key-init"),
      'code': cc11001100_hook('code', code, "object-key-init"),
      'clienttime': cc11001100_hook('clienttime', parseInt(new Date().getTime() / 1000), "object-key-init"),
      'expire_day': cc11001100_hook('expire_day', expireday, "object-key-init"),
      'callback': cc11001100_hook('callback', callbackName, "object-key-init"),
      'login_ver': cc11001100_hook('login_ver', 1, "object-key-init")
    }, "var-init");
    this.loadScript(KgUser.KgUrl.login + 'v1/loginbyverifycode/', param);
  },
  VerifyCode: function (codeObj, blurCallbackname) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var codeid = cc11001100_hook("codeid", "", "var-init");
    var len = cc11001100_hook("len", 4, "var-init");
    var width = cc11001100_hook("width", 90, "var-init");
    var height = cc11001100_hook("height", 40, "var-init");
    var type = cc11001100_hook("type", "LoginCheckCode", "var-init");
    var inputid = cc11001100_hook("inputid", "", "var-init");
    var codetype = cc11001100_hook("codetype", 0, "var-init");
    var n = cc11001100_hook("n", 0, "var-init");
    if (KgUser.IsEmpty(codeObj.appid)) {
      return false;
    }
    appid = cc11001100_hook("appid", codeObj.appid, "assign");
    codeid = cc11001100_hook("codeid", KgUser.Trim(codeObj.codeid), "assign");
    if (!KgUser.IsEmpty(KgUser.Trim(codeObj.width))) {
      width = cc11001100_hook("width", KgUser.Trim(codeObj.width), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(codeObj.height))) {
      height = cc11001100_hook("height", KgUser.Trim(codeObj.height), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(codeObj.type))) {
      type = cc11001100_hook("type", KgUser.Trim(codeObj.type), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(codeObj.inputid))) {
      inputid = cc11001100_hook("inputid", KgUser.Trim(codeObj.inputid), "assign");
    }
    var codetype = cc11001100_hook("codetype", KgUser.IsEmpty(codeObj.codetype) ? 0 : codeObj.codetype, "var-init");
    n = cc11001100_hook("n", Math.round(Math.random() * 100), "assign");
    if (type == "RegCheckCode" && typeof codeObj.codetype == 'undefined') {
      if (n >= 0 && n <= 100) {
        codetype = cc11001100_hook("codetype", 1, "assign");
      } else if (n >= 31 && n <= 40) {
        codetype = cc11001100_hook("codetype", 2, "assign");
      }
      var ids = cc11001100_hook("ids", inputid.split(','), "var-init");
      for (i = cc11001100_hook("i", 0, "assign"); i < ids.length; i++) {
        if (typeof KgUser.$(ids[i]) != 'undefined') {
          if (codetype != 0) {
            KgUser.$(ids[i]).style.display = cc11001100_hook("KgUser.$(ids[i]).style.display", "none", "assign");
          } else {
            KgUser.$(ids[i]).style.display = cc11001100_hook("KgUser.$(ids[i]).style.display", "", "assign");
          }
        }
      }
    }
    KgUser.CodeAll.codetype = cc11001100_hook("KgUser.CodeAll.codetype", codetype, "assign");
    KgUser.CodeAll.appid = cc11001100_hook("KgUser.CodeAll.appid", appid, "assign");
    KgUser.CodeAll.codeid = cc11001100_hook("KgUser.CodeAll.codeid", codeid, "assign");
    var url = cc11001100_hook("url", '', "var-init");
    if (codetype == 3 && type == "LoginCheckCode") {
      url = cc11001100_hook("url", KgUser.KgUrl.login, "assign");
    } else if (type == "LoginCheckCode" || type == "RegCheckCode" || type == "SmsCheckCode") {
      url = cc11001100_hook("url", KgUser.KgUrl.loginHTTP, "assign");
    } else {
      url = cc11001100_hook("url", KgUser.KgUrl.verify, "assign");
    }
    url = cc11001100_hook("url", url + "v1/get_img_code?type=" + type + "&appid=" + appid + "&codetype=" + codetype + "&t=" + new Date().getTime(), "assign");
    switch (codetype) {
      case 1:
        setTimeout(function () {
          KgUser.SudokuCode({
            url: cc11001100_hook("url", url, "object-key-init"),
            id: cc11001100_hook("id", codeObj.codeid, "object-key-init"),
            appid: cc11001100_hook("appid", appid, "object-key-init")
          }, blurCallbackname);
        }, 100);
        break;
      case 2:
        setTimeout(function () {
          KgUser.ThirdCode({
            id: cc11001100_hook("id", codeObj.codeid, "object-key-init"),
            url: cc11001100_hook("url", url, "object-key-init")
          }, blurCallbackname);
        }, 100);
        break;
      case 3:
        KgUser.SliderVerifyCode({
          url: cc11001100_hook("url", url, "object-key-init"),
          appid: cc11001100_hook("appid", appid, "object-key-init"),
          success: cc11001100_hook("success", codeObj.success, "object-key-init"),
          close: cc11001100_hook("close", codeObj.close, "object-key-init"),
          update: cc11001100_hook("update", codeObj.update, "object-key-init"),
          timeout: cc11001100_hook("timeout", codeObj.timeout, "object-key-init"),
          callback: cc11001100_hook("callback", codeObj.callback, "object-key-init"),
          callback_deg: cc11001100_hook("callback_deg", codeObj.callback_deg, "object-key-init")
        });
        break;
      default:
        setTimeout(function () {
          KgUser.$(codeid).style.display = cc11001100_hook("KgUser.$(codeid).style.display", "", "assign");
          KgUser.$(codeid).innerHTML = cc11001100_hook("KgUser.$(codeid).innerHTML", '<img id="KgPopupVerifyCode" src="' + url + '" onclick="KgUser.ChangeVerifyCode(this,' + appid + ',\'' + type + '\')" title="看不清，换一张" alt="看不清，换一张" style="cursor:pointer;width:' + width + 'px;height:' + height + 'px;" />', "assign");
        }, 100);
        break;
    }
  },
  ChangeVerifyCode: function (othis, appid, type) {
    setTimeout(function () {
      var url = cc11001100_hook("url", "", "var-init");
      if (type == "LoginCheckCode" || type == "RegCheckCode" || type == "SmsCheckCode") {
        url = cc11001100_hook("url", KgUser.KgUrl.loginHTTP, "assign");
      } else {
        url = cc11001100_hook("url", KgUser.KgUrl.verify, "assign");
      }
      othis.src = cc11001100_hook("othis.src", url + "v1/get_img_code?type=" + type + "&appid=" + appid + "&t=" + new Date().getTime(), "assign");
    }, 100);
  },
  CheckVerifyCode: function (infoObj) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var username = cc11001100_hook("username", "", "var-init");
    var t = cc11001100_hook("t", parseInt(new Date().getTime() / 1000), "var-init");
    if (KgUser.IsEmpty(infoObj.appid) || KgUser.IsEmpty(KgUser.Trim(infoObj.username))) {
      return false;
    }
    appid = cc11001100_hook("appid", infoObj.appid, "assign");
    username = cc11001100_hook("username", KgUser.Trim(infoObj.username), "assign");
    var param = cc11001100_hook("param", {
      'appid': cc11001100_hook('appid', appid, "object-key-init"),
      'username': cc11001100_hook('username', encodeURIComponent(username), "object-key-init"),
      't': cc11001100_hook('t', t, "object-key-init")
    }, "var-init");
    KgUser.loadScript(KgUser.KgUrl.login + "v1/check/", param);
  },
  ThirdLogin: function (infoObj, callbackName) {
    var url = cc11001100_hook("url", "", "var-init"),
      name = cc11001100_hook("name", "", "var-init"),
      width = cc11001100_hook("width", 0, "var-init"),
      height = cc11001100_hook("height", 0, "var-init"),
      partner = cc11001100_hook("partner", "", "var-init");
    var appid = cc11001100_hook("appid", 0, "var-init");
    var clienttime = cc11001100_hook("clienttime", parseInt(new Date().getTime() / 1000), "var-init");
    var client = cc11001100_hook("client", "", "var-init");
    if (!KgUser.IsEmpty(infoObj.appid)) {
      appid = cc11001100_hook("appid", infoObj.appid, "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.partner))) {
      partner = cc11001100_hook("partner", KgUser.Trim(infoObj.partner).toLowerCase(), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.client))) {
      client = cc11001100_hook("client", KgUser.Trim(infoObj.client).toLowerCase(), "assign");
    }
    var convertPartner = cc11001100_hook("convertPartner", "", "var-init");
    switch (partner) {
      case "qzone":
        url = cc11001100_hook("url", KgUser.KgUrl.third + "qq/?", "assign");
        name = cc11001100_hook("name", "TencentLogin", "assign");
        width = cc11001100_hook("width", 470, "assign");
        height = cc11001100_hook("height", 340, "assign");
        convertPartner = cc11001100_hook("convertPartner", "qq", "assign");
        break;
      case "sina":
        url = cc11001100_hook("url", KgUser.KgUrl.third + "sina/?", "assign");
        name = cc11001100_hook("name", "SinaLogin", "assign");
        width = cc11001100_hook("width", 562, "assign");
        height = cc11001100_hook("height", 380, "assign");
        break;
      case "qqweibo":
        url = cc11001100_hook("url", KgUser.KgUrl.third + "qqweibo/?", "assign");
        name = cc11001100_hook("name", "QQWeiBoLogin", "assign");
        width = cc11001100_hook("width", 563, "assign");
        height = cc11001100_hook("height", 387, "assign");
        break;
      case "renren":
        url = cc11001100_hook("url", KgUser.KgUrl.third + "renren/?", "assign");
        name = cc11001100_hook("name", "RenrenLogin", "assign");
        width = cc11001100_hook("width", 563, "assign");
        height = cc11001100_hook("height", 387, "assign");
        break;
      case "weixin":
        url = cc11001100_hook("url", KgUser.KgUrl.third + "weixin/index.php?ktype=0", "assign");
        name = cc11001100_hook("name", "WeiXinLogin", "assign");
        width = cc11001100_hook("width", 563, "assign");
        height = cc11001100_hook("height", 593, "assign");
        convertPartner = cc11001100_hook("convertPartner", "wechat", "assign");
        break;
      case "esurfing":
        url = cc11001100_hook("url", KgUser.KgUrl.third + "esurfing/?", "assign");
        name = cc11001100_hook("name", "EsurLogin", "assign");
        width = cc11001100_hook("width", 800, "assign");
        height = cc11001100_hook("height", 458, "assign");
        break;
    }
    var bind = cc11001100_hook("bind", 0, "var-init");
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.bind))) {
      bind = cc11001100_hook("bind", KgUser.Trim(infoObj.bind), "assign");
    }
    var ktypeparam = cc11001100_hook("ktypeparam", "", "var-init");
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.ktype))) {
      ktypeparam = cc11001100_hook("ktypeparam", "&ktype=" + infoObj.ktype, "assign");
    }
    if (bind == 1 && convertPartner != "") {
      url = cc11001100_hook("url", "https://openplat-user.kugou.com/bind?userid=0&bind=1&partnername=" + convertPartner + ktypeparam, "assign");
    }
    if (url) {
      url += cc11001100_hook("url", "&appid=" + appid + "&clienttime=" + clienttime + "&callback=" + callbackName + "&domain=" + KgUser.GetDomain(), "assign");
      var mid = cc11001100_hook("mid", KgUser.Cookie.read(KgUser.KgMid.name), "var-init");
      if (!KgUser.IsEmpty(mid)) {
        url += cc11001100_hook("url", "&mid=" + mid, "assign");
      }
      var l = cc11001100_hook("l", (window.screen.width - width) / 2, "var-init"),
        t = cc11001100_hook("t", (window.screen.height - height) / 2, "var-init");
      if (client == "mackugou" || client == 'uwp') {
        url += cc11001100_hook("url", "&client=" + client, "assign");
        switch (partner) {
          case "qzone":
            width = cc11001100_hook("width", 540, "assign");
            height = cc11001100_hook("height", 400, "assign");
            break;
          case "sina":
            width = cc11001100_hook("width", 768, "assign");
            height = cc11001100_hook("height", 400, "assign");
            break;
        }
        if (Supercall) {
          Supercall.setView({
            type: cc11001100_hook("type", 'child', "object-key-init"),
            window: cc11001100_hook("window", 'contentWindow', "object-key-init"),
            name: cc11001100_hook("name", 'ThirdLogin', "object-key-init"),
            options: {
              width: cc11001100_hook("width", width, "object-key-init"),
              height: cc11001100_hook("height", height, "object-key-init"),
              url: cc11001100_hook("url", url, "object-key-init"),
              parent: cc11001100_hook("parent", 'login', "object-key-init"),
              standButton: cc11001100_hook("standButton", ['close'], "object-key-init")
            }
          }, function () {});
        }
      } else {
        window.open(url, name, "width=" + width + ",height=" + height + ",left=" + l + ",top=" + t + ",menubar=0,scrollbars=0,resizable=0,status=0,titlebar=0,toolbar=0,location=1");
      }
    }
  },
  SliderVerifyCode: function (infoObj) {
    var self = cc11001100_hook("self", this, "var-init");
    var success = cc11001100_hook("success", infoObj.success, "var-init");
    var close = cc11001100_hook("close", infoObj.close, "var-init");
    var update = cc11001100_hook("update", infoObj.update, "var-init");
    var callback = cc11001100_hook("callback", infoObj.callback, "var-init");
    var callback_deg = cc11001100_hook("callback_deg", infoObj.callback_deg, "var-init");
    var timeout = cc11001100_hook("timeout", infoObj.timeout, "var-init");
    var url = cc11001100_hook("url", infoObj.url, "var-init");
    var loadSuccess = cc11001100_hook("loadSuccess", false, "var-init");
    if (!self.tcaptchaJsUrl) {
      if (self.loadingTcaptchaJsUrl) {
        return;
      }
      self.loadingTcaptchaJsUrl = cc11001100_hook("self.loadingTcaptchaJsUrl", true, "assign");
      window.kgSliderVerifyCodeHandler = cc11001100_hook("window.kgSliderVerifyCodeHandler", function (res) {
        self.loadingTcaptchaJsUrl = cc11001100_hook("self.loadingTcaptchaJsUrl", false, "assign");
        if (res && res.success == 0 && res.isDegrade == 1) {
          callback_deg && callback_deg();
        } else if (res && res.success && res.url) {
          KgUser.loadScript(res.url, '', function () {
            loadSuccess = cc11001100_hook("loadSuccess", true, "assign");
            self.tcaptchaJsUrl = cc11001100_hook("self.tcaptchaJsUrl", res.url, "assign");
            self.loadingTcaptchaJsUrl = cc11001100_hook("self.loadingTcaptchaJsUrl", false, "assign");
            window.navigator.userAgent.indexOf('MSIE') >= 1 ? setTimeout(function () {
              TCaptchaInit();
            }, 500) : TCaptchaInit();
          });
          if (timeout && timeout > 0) {
            setTimeout(function () {
              if (!loadSuccess) {
                callback && callback(false);
              }
            }, timeout);
          }
        } else {
          self.loadingTcaptchaJsUrl = cc11001100_hook("self.loadingTcaptchaJsUrl", false, "assign");
          if (typeof infoObj.retry == 'undefined') {
            infoObj.retry = cc11001100_hook("infoObj.retry", 3, "assign");
          }
          if (infoObj.retry > 0) {
            infoObj.retry--;
            self.SliderVerifyCode(infoObj);
          }
        }
      }, "assign");
      this.loadScript(url + '&callback=kgSliderVerifyCodeHandler');
    } else {
      TCaptchaInit();
    }
    function TCaptchaInit() {
      window.capDestroy();
      var capOption = cc11001100_hook("capOption", {
        showHeader: cc11001100_hook("showHeader", true, "object-key-init"),
        type: cc11001100_hook("type", 'popup', "object-key-init"),
        start: function () {},
        callback: function (retJson) {
          loadSuccess = cc11001100_hook("loadSuccess", true, "assign");
          handleResult(retJson);
        }
      }, "var-init");
      window.capRefresh();
      update && update();
      callback && callback(true);
      window.capInit(document, capOption);
    }
    function handleResult(retJson) {
      cc11001100_hook("retJson", retJson, "function-parameter");
      if (!loadSuccess) {
        return;
      }
      if (retJson.ticket && retJson.ret == 0) {
        var ticket = cc11001100_hook("ticket", retJson.ticket, "var-init");
        success && success(ticket);
      } else {
        close && close();
      }
    }
  },
  CrossDomainLogin: function (callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var userid = cc11001100_hook("userid", 0, "var-init");
    var token = cc11001100_hook("token", "", "var-init");
    var ct = cc11001100_hook("ct", parseInt(new Date().getTime() / 1000), "var-init");
    var domain = cc11001100_hook("domain", KgUser.GetDomain(), "var-init");
    if (!KgUser.IsEmpty(KgUser.Cookie.read('KuGoo', 'a_id'))) {
      appid = cc11001100_hook("appid", parseInt(KgUser.Cookie.read('KuGoo', 'a_id')), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Cookie.read('KuGoo', 'KugooID'))) {
      userid = cc11001100_hook("userid", parseInt(KgUser.Cookie.read('KuGoo', 'KugooID')), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Cookie.read('KuGoo', 'ct'))) {
      ct = cc11001100_hook("ct", parseInt(KgUser.Cookie.read('KuGoo', 'ct')), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(KgUser.Cookie.read('KuGoo', 't')))) {
      token = cc11001100_hook("token", KgUser.Trim(KgUser.Cookie.read('KuGoo', 't')), "assign");
    }
    var param = cc11001100_hook("param", {
      'a_id': cc11001100_hook('a_id', appid, "object-key-init"),
      'userid': cc11001100_hook('userid', userid, "object-key-init"),
      't': cc11001100_hook('t', token, "object-key-init"),
      'ct': cc11001100_hook('ct', ct, "object-key-init"),
      'callback': cc11001100_hook('callback', '', "object-key-init"),
      'domain': cc11001100_hook('domain', domain, "object-key-init"),
      'midname': cc11001100_hook('midname', KgUser.KgMid.name, "object-key-init"),
      'days': cc11001100_hook('days', KgUser.KgMid.days, "object-key-init")
    }, "var-init");
    var url = cc11001100_hook("url", KgUser.KgUrl.login, "var-init");
    KgUser.loadScript(url + "v1/cross/", param, function () {
      if (!KgUser.IsEmpty(callbackName)) {
        var uinfo = cc11001100_hook("uinfo", new Object(), "var-init");
        if (!KgUser.IsEmpty(KgUser.Cookie.read('KuGoo', 'KugooID'))) {
          uinfo.userid = cc11001100_hook("uinfo.userid", parseInt(KgUser.Cookie.read('KuGoo', 'KugooID')), "assign");
        }
        if (!KgUser.IsEmpty(KgUser.Cookie.read('KuGoo', 'UserName'))) {
          uinfo.username = cc11001100_hook("uinfo.username", eval("'" + KgUser.Trim(KgUser.Cookie.read('KuGoo', 'UserName')) + "'"), "assign");
        }
        if (!KgUser.IsEmpty(KgUser.Cookie.read('KuGoo', 'NickName'))) {
          uinfo.nickname = cc11001100_hook("uinfo.nickname", eval("'" + KgUser.Trim(KgUser.Cookie.read('KuGoo', 'NickName')) + "'"), "assign");
        }
        if (!KgUser.IsEmpty(KgUser.Trim(KgUser.Cookie.read('KuGoo', 't')))) {
          uinfo.token = cc11001100_hook("uinfo.token", KgUser.Trim(KgUser.Cookie.read('KuGoo', 't')), "assign");
        }
        if (!KgUser.IsEmpty(KgUser.Trim(KgUser.Cookie.read('KuGoo', 'Pic')))) {
          uinfo.pic = cc11001100_hook("uinfo.pic", KgUser.Trim(KgUser.Cookie.read('KuGoo', 'Pic')), "assign");
        }
        KgUser.GetMsg(callbackName, uinfo);
      }
    });
  },
  AutoLogin: function (callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var userid = cc11001100_hook("userid", 0, "var-init");
    var token = cc11001100_hook("token", "", "var-init");
    var ct = cc11001100_hook("ct", parseInt(new Date().getTime() / 1000), "var-init");
    var domain = cc11001100_hook("domain", KgUser.GetDomain(), "var-init");
    if (!KgUser.IsEmpty(KgUser.Cookie.read('KuGoo', 'a_id'))) {
      appid = cc11001100_hook("appid", parseInt(KgUser.Cookie.read('KuGoo', 'a_id')), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Cookie.read('KuGoo', 'KugooID'))) {
      userid = cc11001100_hook("userid", parseInt(KgUser.Cookie.read('KuGoo', 'KugooID')), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Cookie.read('KuGoo', 'ct'))) {
      ct = cc11001100_hook("ct", parseInt(KgUser.Cookie.read('KuGoo', 'ct')), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(KgUser.Cookie.read('KuGoo', 't')))) {
      token = cc11001100_hook("token", KgUser.Trim(KgUser.Cookie.read('KuGoo', 't')), "assign");
    }
    var param = cc11001100_hook("param", {
      'a_id': cc11001100_hook('a_id', appid, "object-key-init"),
      'userid': cc11001100_hook('userid', userid, "object-key-init"),
      't': cc11001100_hook('t', token, "object-key-init"),
      'ct': cc11001100_hook('ct', ct, "object-key-init"),
      'callback': cc11001100_hook('callback', '', "object-key-init"),
      'domain': cc11001100_hook('domain', domain, "object-key-init")
    }, "var-init");
    var url = cc11001100_hook("url", KgUser.KgUrl.login, "var-init");
    if (!KgUser.IsEmpty(token)) {
      KgUser.loadScript(url + "v1/autologin", param);
    }
  },
  LoginOut: function (appid) {
    KgUser.Cookie.setDay('KuGoo', '', -1, '', '.' + KgUser.GetDomain(), '');
    var url = cc11001100_hook("url", KgUser.KgUrl.cross + 'v2/loginout/?a_id=' + appid + '&ct=' + parseInt(new Date().getTime() / 1000) + '&domain=' + KgUser.GetDomain(), "var-init");
    if (/MSIE (\d+\.\d+);/.test(navigator.userAgent) || /MSIE(\d+\.\d+);/.test(navigator.userAgent)) {
      var referLink = cc11001100_hook("referLink", document.createElement('a'), "var-init");
      referLink.href = cc11001100_hook("referLink.href", url, "assign");
      document.body.appendChild(referLink);
      referLink.click();
    } else {
      location.href = cc11001100_hook("location.href", url, "assign");
    }
  },
  GetDomain: function () {
    var s = cc11001100_hook("s", /\w*\.(com.cn|com|net.cn|net|org.cn|org|gov.cn|gov|cn|mobi|me|info|name|biz|cc|tv|asia|hk|网络|公司|中国).*$/g, "var-init");
    return document.domain.toString().match(s)[0];
  },
  GetMsg: function (callbackName, dataObj) {
    if (!KgUser.IsEmpty(callbackName)) {
      window[callbackName](dataObj);
    }
  },
  GetSmsCode: function (infoObj, callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var mobile = cc11001100_hook("mobile", "", "var-init");
    if (KgUser.IsEmpty(infoObj.appid) || KgUser.IsEmpty(KgUser.Trim(infoObj.mobile))) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      });
      return false;
    }
    if (KgUser.IsEmpty(infoObj.type)) {
      infoObj.type = cc11001100_hook("infoObj.type", "reg", "assign");
    }
    appid = cc11001100_hook("appid", infoObj.appid, "assign");
    mobile = cc11001100_hook("mobile", KgUser.Trim(infoObj.mobile), "assign");
    type = cc11001100_hook("type", KgUser.Trim(infoObj.type), "assign");
    verifycode = cc11001100_hook("verifycode", infoObj.verifycode, "assign");
    if (KgUser.IsEmpty(verifycode)) {
      verifycode = cc11001100_hook("verifycode", "", "assign");
    }
    var param = cc11001100_hook("param", {
      'appid': cc11001100_hook('appid', appid, "object-key-init"),
      'mobile': cc11001100_hook('mobile', encodeURIComponent(mobile), "object-key-init"),
      'callback': cc11001100_hook('callback', callbackName, "object-key-init"),
      'v': cc11001100_hook('v', 1, "object-key-init"),
      'verifycode': cc11001100_hook('verifycode', verifycode, "object-key-init"),
      'ct': cc11001100_hook('ct', parseInt(new Date().getTime() / 1000), "object-key-init"),
      'type': cc11001100_hook('type', type, "object-key-init")
    }, "var-init");
    if (type != "reg") {
      KgUser.loadScript(KgUser.KgUrl.login + 'v1/send_sms/', param);
    } else {
      KgUser.loadScript(KgUser.KgUrl.login + 'v1/send_sms_for_reg', param);
    }
  },
  RegByUserName: function (infoObj, callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var code = cc11001100_hook("code", "", "var-init");
    var expire_day = cc11001100_hook("expire_day", 1, "var-init");
    var username = cc11001100_hook("username", "", "var-init");
    var sex = cc11001100_hook("sex", 1, "var-init");
    var password = cc11001100_hook("password", "", "var-init");
    var nickname = cc11001100_hook("nickname", "", "var-init");
    var security_email = cc11001100_hook("security_email", "", "var-init");
    var id_card = cc11001100_hook("id_card", "", "var-init");
    var truename = cc11001100_hook("truename", "", "var-init");
    if (KgUser.CodeAll.codetype == 1) {
      infoObj.code = cc11001100_hook("infoObj.code", KgUser.CodeAll.cval, "assign");
    }
    if (KgUser.IsEmpty(infoObj.appid) || KgUser.IsEmpty(KgUser.Trim(infoObj.username)) || KgUser.IsEmpty(KgUser.Trim(infoObj.password))) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      });
      return false;
    }
    if (KgUser.IsEmpty(KgUser.Trim(infoObj.code)) && KgUser.CodeAll.codetype != 2) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "验证码不能为空", "object-key-init")
      });
      return false;
    }
    appid = cc11001100_hook("appid", infoObj.appid, "assign");
    username = cc11001100_hook("username", KgUser.Trim(infoObj.username), "assign");
    password = cc11001100_hook("password", KgUser.Trim(infoObj.password), "assign");
    code = cc11001100_hook("code", KgUser.Trim(infoObj.code), "assign");
    if (!KgUser.IsEmpty(infoObj.expire_day)) {
      expire_day = cc11001100_hook("expire_day", infoObj.expire_day, "assign");
    }
    if (typeof infoObj.sex != 'undefined' && infoObj.sex != null) {
      sex = cc11001100_hook("sex", infoObj.sex, "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.nickname))) {
      nickname = cc11001100_hook("nickname", KgUser.Trim(infoObj.nickname), "assign");
    } else {
      nickname = cc11001100_hook("nickname", username, "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.security_email))) {
      security_email = cc11001100_hook("security_email", KgUser.Trim(infoObj.security_email), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.id_card))) {
      id_card = cc11001100_hook("id_card", KgUser.Trim(infoObj.id_card), "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.truename))) {
      truename = cc11001100_hook("truename", KgUser.Trim(infoObj.truename), "assign");
    }
    var param = cc11001100_hook("param", {
      'regtype': cc11001100_hook('regtype', 'username', "object-key-init"),
      'appid': cc11001100_hook('appid', appid, "object-key-init"),
      'code': cc11001100_hook('code', encodeURIComponent(code), "object-key-init"),
      'expire_day': cc11001100_hook('expire_day', expire_day, "object-key-init"),
      'v': cc11001100_hook('v', 1, "object-key-init"),
      'username': cc11001100_hook('username', encodeURIComponent(username), "object-key-init"),
      'sex': cc11001100_hook('sex', sex, "object-key-init"),
      'password': cc11001100_hook('password', KgUser.Md5(password), "object-key-init"),
      'nickname': cc11001100_hook('nickname', encodeURIComponent(nickname), "object-key-init"),
      'security_email': cc11001100_hook('security_email', encodeURIComponent(security_email), "object-key-init"),
      'id_card': cc11001100_hook('id_card', encodeURIComponent(id_card), "object-key-init"),
      'truename': cc11001100_hook('truename', encodeURIComponent(truename), "object-key-init"),
      'callback': cc11001100_hook('callback', callbackName, "object-key-init"),
      'codetype': cc11001100_hook('codetype', KgUser.CodeAll.codetype, "object-key-init")
    }, "var-init");
    if (KgUser.CodeAll.codetype == 2 && typeof KgUser.$C('geetest_challenge', '', 'input')[0] != 'undefined') {
      param.geetest_challenge = cc11001100_hook("param.geetest_challenge", KgUser.$C('geetest_challenge', KgUser.CodeAll.codeid, 'input')[0].value, "assign");
      param.geetest_validate = cc11001100_hook("param.geetest_validate", KgUser.$C('geetest_validate', KgUser.CodeAll.codeid, 'input')[0].value, "assign");
      param.geetest_seccode = cc11001100_hook("param.geetest_seccode", KgUser.$C('geetest_seccode', KgUser.CodeAll.codeid, 'input')[0].value, "assign");
    }
    KgUser.loadScript(KgUser.KgUrl.login + 'v2/reg', param);
  },
  RegByMobile: function (infoObj, callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var code = cc11001100_hook("code", "", "var-init");
    var expire_day = cc11001100_hook("expire_day", 1, "var-init");
    var mobile = cc11001100_hook("mobile", "", "var-init");
    var sex = cc11001100_hook("sex", 1, "var-init");
    var password = cc11001100_hook("password", "", "var-init");
    var nickname = cc11001100_hook("nickname", "", "var-init");
    var type = cc11001100_hook("type", "", "var-init");
    appid = cc11001100_hook("appid", infoObj.appid, "assign");
    mobile = cc11001100_hook("mobile", KgUser.Trim(infoObj.mobile), "assign");
    code = cc11001100_hook("code", KgUser.Trim(infoObj.code), "assign");
    var param = cc11001100_hook("param", {}, "var-init");
    var mid = cc11001100_hook("mid", typeof infoObj.mid == 'undefined' ? "" : infoObj.mid, "var-init");
    var type = cc11001100_hook("type", typeof infoObj.type == 'undefined' ? "" : infoObj.type, "var-init");
    if (type == "") {
      if (KgUser.IsEmpty(KgUser.Trim(infoObj.password))) {
        KgUser.GetMsg(callbackName, {
          errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
          errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
        });
        return false;
      }
      password = cc11001100_hook("password", KgUser.Trim(infoObj.password), "assign");
      if (!KgUser.IsEmpty(infoObj.expire_day)) {
        expire_day = cc11001100_hook("expire_day", infoObj.expire_day, "assign");
      }
      if (typeof infoObj.sex != 'undefined' && infoObj.sex != null) {
        sex = cc11001100_hook("sex", infoObj.sex, "assign");
      }
      if (!KgUser.IsEmpty(KgUser.Trim(infoObj.nickname))) {
        nickname = cc11001100_hook("nickname", KgUser.Trim(infoObj.nickname), "assign");
      } else {
        nickname = cc11001100_hook("nickname", mobile, "assign");
      }
      param = cc11001100_hook("param", {
        'regtype': cc11001100_hook('regtype', 'mobile', "object-key-init"),
        'appid': cc11001100_hook('appid', appid, "object-key-init"),
        'code': cc11001100_hook('code', encodeURIComponent(code), "object-key-init"),
        'expire_day': cc11001100_hook('expire_day', expire_day, "object-key-init"),
        'mobile': cc11001100_hook('mobile', encodeURIComponent(mobile), "object-key-init"),
        'sex': cc11001100_hook('sex', sex, "object-key-init"),
        'password': cc11001100_hook('password', KgUser.Md5(password), "object-key-init"),
        'nickname': cc11001100_hook('nickname', encodeURIComponent(nickname), "object-key-init"),
        'error': cc11001100_hook('error', infoObj.error, "object-key-init"),
        'callback': cc11001100_hook('callback', callbackName, "object-key-init"),
        'mid': cc11001100_hook('mid', mid, "object-key-init")
      }, "assign");
    } else {
      param = cc11001100_hook("param", {
        'regtype': cc11001100_hook('regtype', 'mobile', "object-key-init"),
        'appid': cc11001100_hook('appid', appid, "object-key-init"),
        'code': cc11001100_hook('code', encodeURIComponent(code), "object-key-init"),
        'mobile': cc11001100_hook('mobile', encodeURIComponent(mobile), "object-key-init"),
        'callback': cc11001100_hook('callback', callbackName, "object-key-init"),
        'error': cc11001100_hook('error', infoObj.error, "object-key-init"),
        'type': cc11001100_hook('type', type, "object-key-init"),
        'mid': cc11001100_hook('mid', mid, "object-key-init")
      }, "assign");
    }
    KgUser.loadScript(KgUser.KgUrl.login + 'v2/reg', param);
  },
  RegByEmail: function (infoObj, callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var code = cc11001100_hook("code", "", "var-init");
    var expire_day = cc11001100_hook("expire_day", 1, "var-init");
    var email = cc11001100_hook("email", "", "var-init");
    var sex = cc11001100_hook("sex", 1, "var-init");
    var password = cc11001100_hook("password", "", "var-init");
    var nickname = cc11001100_hook("nickname", "", "var-init");
    if (KgUser.CodeAll.codetype == 1) {
      infoObj.code = cc11001100_hook("infoObj.code", KgUser.CodeAll.cval, "assign");
    }
    if (KgUser.IsEmpty(infoObj.appid) || KgUser.IsEmpty(KgUser.Trim(infoObj.email)) || KgUser.IsEmpty(KgUser.Trim(infoObj.password))) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      });
      return false;
    }
    if (KgUser.IsEmpty(KgUser.Trim(infoObj.code)) && KgUser.CodeAll.codetype != 2) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "验证码不能为空", "object-key-init")
      });
      return false;
    }
    appid = cc11001100_hook("appid", infoObj.appid, "assign");
    email = cc11001100_hook("email", KgUser.Trim(infoObj.email), "assign");
    password = cc11001100_hook("password", KgUser.Trim(infoObj.password), "assign");
    code = cc11001100_hook("code", KgUser.Trim(infoObj.code), "assign");
    if (!KgUser.IsEmpty(infoObj.expire_day)) {
      expire_day = cc11001100_hook("expire_day", infoObj.expire_day, "assign");
    }
    if (typeof infoObj.sex != 'undefined' && infoObj.sex != null) {
      sex = cc11001100_hook("sex", infoObj.sex, "assign");
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.nickname))) {
      nickname = cc11001100_hook("nickname", KgUser.Trim(infoObj.nickname), "assign");
    } else {
      nickname = cc11001100_hook("nickname", email, "assign");
    }
    var param = cc11001100_hook("param", {
      'regtype': cc11001100_hook('regtype', 'email', "object-key-init"),
      'appid': cc11001100_hook('appid', appid, "object-key-init"),
      'code': cc11001100_hook('code', encodeURIComponent(code), "object-key-init"),
      'expire_day': cc11001100_hook('expire_day', expire_day, "object-key-init"),
      'email': cc11001100_hook('email', encodeURIComponent(email), "object-key-init"),
      'sex': cc11001100_hook('sex', sex, "object-key-init"),
      'password': cc11001100_hook('password', KgUser.Md5(password), "object-key-init"),
      'nickname': cc11001100_hook('nickname', encodeURIComponent(nickname), "object-key-init"),
      'callback': cc11001100_hook('callback', callbackName, "object-key-init"),
      'codetype': cc11001100_hook('codetype', KgUser.CodeAll.codetype, "object-key-init")
    }, "var-init");
    if (KgUser.CodeAll.codetype == 2 && typeof KgUser.$C('geetest_challenge', '', 'input')[0] != 'undefined') {
      param.geetest_challenge = cc11001100_hook("param.geetest_challenge", KgUser.$C('geetest_challenge', KgUser.CodeAll.codeid, 'input')[0].value, "assign");
      param.geetest_validate = cc11001100_hook("param.geetest_validate", KgUser.$C('geetest_validate', KgUser.CodeAll.codeid, 'input')[0].value, "assign");
      param.geetest_seccode = cc11001100_hook("param.geetest_seccode", KgUser.$C('geetest_seccode', KgUser.CodeAll.codeid, 'input')[0].value, "assign");
    }
    KgUser.loadScript(KgUser.KgUrl.login + 'v2/reg/', param);
  },
  CheckPwd: function (infoObj, callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var password = cc11001100_hook("password", "", "var-init");
    var username = cc11001100_hook("username", "", "var-init");
    if (KgUser.IsEmpty(infoObj.appid) || KgUser.IsEmpty(KgUser.Trim(infoObj.password))) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      });
      return false;
    }
    appid = cc11001100_hook("appid", infoObj.appid, "assign");
    password = cc11001100_hook("password", KgUser.Trim(infoObj.password), "assign");
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.username))) {
      username = cc11001100_hook("username", KgUser.Trim(infoObj.username), "assign");
    }
    var param = cc11001100_hook("param", {
      'appid': cc11001100_hook('appid', appid, "object-key-init"),
      'str': cc11001100_hook('str', KgUser.Md5(password), "object-key-init"),
      'username': cc11001100_hook('username', encodeURIComponent(username), "object-key-init"),
      'callback': cc11001100_hook('callback', callbackName, "object-key-init")
    }, "var-init");
    KgUser.loadScript(KgUser.KgUrl.user + 'check_str/', param);
  },
  CheckReg: function (infoObj, callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var type = cc11001100_hook("type", 0, "var-init");
    var username = cc11001100_hook("username", "", "var-init");
    if (KgUser.IsEmpty(infoObj.appid) || KgUser.IsEmpty(infoObj.type) || KgUser.IsEmpty(KgUser.Trim(infoObj.username))) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      });
      return false;
    }
    appid = cc11001100_hook("appid", infoObj.appid, "assign");
    type = cc11001100_hook("type", infoObj.type, "assign");
    username = cc11001100_hook("username", infoObj.username, "assign");
    var param = cc11001100_hook("param", {
      'appid': cc11001100_hook('appid', appid, "object-key-init"),
      'type': cc11001100_hook('type', type, "object-key-init"),
      'username': cc11001100_hook('username', encodeURIComponent(username), "object-key-init"),
      'callback': cc11001100_hook('callback', callbackName, "object-key-init")
    }, "var-init");
    KgUser.loadScript(KgUser.KgUrl.login + 'v2/check_for_reg', param);
  },
  ThirdCode: function (infoObj, callbackName) {
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.url)) && !KgUser.IsEmpty(KgUser.Trim(infoObj.id))) {
      var url = cc11001100_hook("url", infoObj.url, "var-init");
      var id = cc11001100_hook("id", infoObj.id, "var-init");
      window.gt_thirdcode = cc11001100_hook("window.gt_thirdcode", function (window, document) {
        var head = cc11001100_hook("head", document.getElementsByTagName('head')[0], "var-init");
        return function (config, callback) {
          config.protocol = cc11001100_hook("config.protocol", config.https ? 'https://' : 'http://', "assign");
          var initGeetest = function () {
            callback(new window.Geetest(config));
          };
          var backendDown = function () {
            var s = cc11001100_hook("s", document.createElement('script'), "var-init");
            s.id = cc11001100_hook("s.id", 'gt_lib', "assign");
            s.src = cc11001100_hook("s.src", config.protocol + 'static.geetest.com/static/js/geetest.0.0.0.js', "assign");
            s.charset = cc11001100_hook("s.charset", 'UTF-8', "assign");
            s.type = cc11001100_hook("s.type", 'text/javascript', "assign");
            head.appendChild(s);
            var loaded = cc11001100_hook("loaded", false, "var-init");
            s.onload = cc11001100_hook("s.onload", s.onreadystatechange = cc11001100_hook("s.onreadystatechange", function () {
              if (!loaded && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {
                initGeetest();
                loaded = cc11001100_hook("loaded", true, "assign");
              }
            }, "assign"), "assign");
          };
          window.geetest_callback = cc11001100_hook("window.geetest_callback", function () {
            initGeetest();
          }, "assign");
          if (config) {
            if (config.offline) {
              backendDown();
            } else if (!window.Geetest) {
              var s = cc11001100_hook("s", document.createElement('script'), "var-init");
              s.onerror = cc11001100_hook("s.onerror", function () {
                config.offline = cc11001100_hook("config.offline", true, "assign");
                backendDown();
              }, "assign");
              s.src = cc11001100_hook("s.src", config.protocol + 'api.geetest.com/get.php?callback=geetest_callback', "assign");
              head.appendChild(s);
            } else {
              initGeetest();
            }
          }
        };
      }(window, document), "assign");
      if (!KgUser.IsEmpty(KgUser.Trim(id))) {
        KgUser.loadScript(url, "");
        window.gt_succCallback = cc11001100_hook("window.gt_succCallback", function (captcha_obj) {
          if (typeof KgUser.$(id) != 'undefined') {
            KgUser.$(id).innerHTML = cc11001100_hook("KgUser.$(id).innerHTML", '', "assign");
          }
          captcha_obj.appendTo("#" + id);
          captcha_obj.onSuccess(callbackName);
        }, "assign");
      }
    }
  },
  CodeAll: {
    kg_sudoku_anslist: cc11001100_hook("kg_sudoku_anslist", ["", "", "", ""], "object-key-init"),
    kg_sudoku_flag: cc11001100_hook("kg_sudoku_flag", 0, "object-key-init"),
    codetype: cc11001100_hook("codetype", 0, "object-key-init"),
    cval: cc11001100_hook("cval", "", "object-key-init"),
    appid: cc11001100_hook("appid", 0, "object-key-init"),
    codeid: cc11001100_hook("codeid", "", "object-key-init")
  },
  SudokuCode: function (infoObj, callbackName) {
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.url)) && !KgUser.IsEmpty(KgUser.Trim(infoObj.id))) {
      KgUser.CodeAll.cval = cc11001100_hook("KgUser.CodeAll.cval", "", "assign");
      KgUser.CodeAll.kg_sudoku_anslist = cc11001100_hook("KgUser.CodeAll.kg_sudoku_anslist", ["", "", "", ""], "assign");
      KgUser.CodeAll.kg_sudoku_flag = cc11001100_hook("KgUser.CodeAll.kg_sudoku_flag", 0, "assign");
      var link = cc11001100_hook("link", document.createElement('link'), "var-init");
      var head = cc11001100_hook("head", document.head || document.getElementsByTagName('head')[0], "var-init");
      link.type = cc11001100_hook("link.type", 'text/css', "assign");
      link.rel = cc11001100_hook("link.rel", 'stylesheet', "assign");
      link.href = cc11001100_hook("link.href", KgUser.KgUrl.verify + 'v1/static/css/sudoku.css', "assign");
      link.id = cc11001100_hook("link.id", 'kg_sudoku_css', "assign");
      if (typeof document.getElementById('kg_sudoku_css') == 'undefined' || document.getElementById('kg_sudoku_css') == null) {
        head.appendChild(link);
      }
      var url = cc11001100_hook("url", infoObj.url, "var-init");
      var id = cc11001100_hook("id", infoObj.id, "var-init");
      var appid = cc11001100_hook("appid", infoObj.appid, "var-init");
      KgUser.CodeAll.appid = cc11001100_hook("KgUser.CodeAll.appid", appid, "assign");
      var cssText = cc11001100_hook("cssText", '.kg_sudoku_val_add b,.kg_sudoku_input_show span,.kg_sudoku_val_input a b{background:url(' + url + ') no-repeat  -500px -500px;} .kg_sudoku_input_show span{background-position:0 0;}', "var-init");
      KgUser.LoadCss(cssText, 'kg_sudoku_style');
      var text = cc11001100_hook("text", ['<div id="kg_sudoku_com" class="kg_sudoku_com">', '<div class="kg_sudoku_val_add kg_sudoku_clearfix" id="kg_sudoku_val_add">', '<b></b>', '<b></b>', '<b></b>', '<b></b>', '<b class="kg_sudoku_delete" title="清除" onclick="KgUser.DelSudokuCode(1);"></b>', '<div id="kg_sudoku_msg" class="kg_sudoku_msg"></div>', '</div>', '<div class="kg_sudoku_input_show"><span></span><a onclick="KgUser.ChangeSudokuCode(\'' + url + '\',1)">看不清,换一张?</a></div>', '<div class="kg_sudoku_ation">点击框内文字输入上图中对应<i>汉字</i></div>', '<div class="kg_sudoku_val_input kg_sudoku_clearfix" id="kg_sudoku_val_input">', '<a href="javascript:;"><b id="kg_sudoku_v_0"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_1"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_2"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_3"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_4"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_5"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_6"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_7"></b></a>', '<a href="javascript:;"><b id="kg_sudoku_v_8"></b></a>', '</div>', '</div>'].join(""), "var-init");
      document.getElementById(id).innerHTML = cc11001100_hook("document.getElementById(id).innerHTML", text, "assign");
      var getStyle = function (id, prop) {
        var obj = cc11001100_hook("obj", document.getElementById(id), "var-init");
        var ie = cc11001100_hook("ie", !+"\v1", "var-init");
        var ie10 = cc11001100_hook("ie10", document.documentMode, "var-init");
        if (prop == "backgroundPosition") {
          if (ie || ie10 == 10) {
            return obj.currentStyle.backgroundPositionX + " " + obj.currentStyle.backgroundPositionY;
          }
        }
        if (obj.currentStyle) {
          return obj.currentStyle[prop];
        } else if (window.getComputedStyle) {
          propprop = cc11001100_hook("propprop", prop.replace(/([A-Z])/g, "-$1"), "assign");
          propprop = cc11001100_hook("propprop", prop.toLowerCase(), "assign");
          return document.defaultView.getComputedStyle(obj, null)[prop];
        }
      };
      var kg_sudoku_addans = function (va, cval) {
        var kg_sudoku_anslist = cc11001100_hook("kg_sudoku_anslist", KgUser.CodeAll.kg_sudoku_anslist, "var-init");
        var kg_sudoku_flag = cc11001100_hook("kg_sudoku_flag", KgUser.CodeAll.kg_sudoku_flag, "var-init");
        var adbs = cc11001100_hook("adbs", document.getElementById("kg_sudoku_val_add").getElementsByTagName("b"), "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < kg_sudoku_anslist.length; i++) {
          if (kg_sudoku_anslist[i] == "") {
            kg_sudoku_anslist[i] = cc11001100_hook("kg_sudoku_anslist[i]", cval, "assign");
            adbs[i].style.cssText = cc11001100_hook("adbs[i].style.cssText", "background-position:" + va, "assign");
            kg_sudoku_flag = cc11001100_hook("kg_sudoku_flag", i, "assign");
            break;
          }
        }
        if (kg_sudoku_flag == 3) {
          KgUser.CodeAll.cval = cc11001100_hook("KgUser.CodeAll.cval", kg_sudoku_anslist.join(''), "assign");
          setTimeout(function () {
            KgUser.CheckCode({
              appid: cc11001100_hook("appid", appid, "object-key-init"),
              code: cc11001100_hook("code", KgUser.CodeAll.cval, "object-key-init"),
              type: cc11001100_hook("type", 'RegCheckCode', "object-key-init"),
              blurCallback: cc11001100_hook("blurCallback", callbackName, "object-key-init")
            }, "KgUser.CheckSudoCode");
          }, 100);
        }
      };
      var kg_sudoku_addEvt = function (tab, ct, type) {
        var ctab = cc11001100_hook("ctab", document.getElementById(tab).getElementsByTagName("b"), "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < ctab.length; i++) {
          ctab[i].onclick = cc11001100_hook("ctab[i].onclick", function std() {
            c_val = cc11001100_hook("c_val", parseInt(this.id.replace("kg_sudoku_v_", "")) + 1, "assign");
            var st = cc11001100_hook("st", getStyle(this.id, "backgroundPosition"), "var-init");
            var std = cc11001100_hook("std", st.split(" "), "var-init");
            var st1,
              st2 = cc11001100_hook("st2", "", "var-init");
            if (!KgUser.IsEmpty(std[0])) {
              st1 = cc11001100_hook("st1", parseInt(std[0].replace("px")) - 3, "assign");
            }
            if (!KgUser.IsEmpty(std[1])) {
              st2 = cc11001100_hook("st2", parseInt(std[1].replace("px")) - 5, "assign");
            }
            kg_sudoku_addans(st1 + "px " + st2 + "px", c_val);
          }, "assign");
        }
      };
      kg_sudoku_addEvt("kg_sudoku_val_input");
    }
  },
  ChangeSudokuCode: function (url, clear) {
    setTimeout(function () {
      var cssText = cc11001100_hook("cssText", '.kg_sudoku_val_add b,.kg_sudoku_input_show span,.kg_sudoku_val_input a b{background:url(' + url + '&nt=' + new Date().getTime() + ') no-repeat -500px -500px;}  .kg_sudoku_input_show span{background-position:0 0;}', "var-init");
      KgUser.LoadCss(cssText, 'kg_sudoku_style');
      KgUser.DelSudokuCode(clear);
    }, 200);
  },
  DelSudokuCode: function (clear) {
    KgUser.CodeAll.cval = cc11001100_hook("KgUser.CodeAll.cval", "", "assign");
    KgUser.CodeAll.kg_sudoku_flag = cc11001100_hook("KgUser.CodeAll.kg_sudoku_flag", 0, "assign");
    KgUser.CodeAll.kg_sudoku_anslist = cc11001100_hook("KgUser.CodeAll.kg_sudoku_anslist", ["", "", "", ""], "assign");
    var adbs = cc11001100_hook("adbs", document.getElementById("kg_sudoku_val_add").getElementsByTagName("b"), "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < adbs.length; i++) {
      adbs[i].style.cssText = cc11001100_hook("adbs[i].style.cssText", "", "assign");
    }
    if (clear == 1) {
      document.getElementById("kg_sudoku_msg").className = cc11001100_hook("document.getElementById(\"kg_sudoku_msg\").className", "kg_sudoku_msg", "assign");
    }
  },
  CheckSudoCode: function (infoObj) {
    var classname = cc11001100_hook("classname", "", "var-init");
    if (!KgUser.IsEmpty(infoObj.errorCode)) {
      classname = cc11001100_hook("classname", "kg_sudoku_msg fail", "assign");
      document.getElementById("kg_sudoku_msg").className = cc11001100_hook("document.getElementById(\"kg_sudoku_msg\").className", classname, "assign");
      var url = cc11001100_hook("url", KgUser.KgUrl.verify + "v1/get_img_code?type=RegCheckCode&appid=" + KgUser.CodeAll.appid + "&codetype=1&t=" + new Date().getTime(), "var-init");
      KgUser.ChangeSudokuCode(url, 0);
    } else {
      classname = cc11001100_hook("classname", "kg_sudoku_msg success", "assign");
      document.getElementById("kg_sudoku_msg").className = cc11001100_hook("document.getElementById(\"kg_sudoku_msg\").className", classname, "assign");
    }
  },
  CheckCode: function (infoObj, callbackName) {
    var appid = cc11001100_hook("appid", 0, "var-init");
    var ct = cc11001100_hook("ct", parseInt(new Date().getTime() / 1000), "var-init");
    var code = cc11001100_hook("code", "", "var-init");
    var cvalue = cc11001100_hook("cvalue", "", "var-init");
    var type = cc11001100_hook("type", "LoginCheckCode", "var-init");
    var blurCallback = cc11001100_hook("blurCallback", "", "var-init");
    if (KgUser.IsEmpty(infoObj.appid)) {
      KgUser.GetMsg(callbackName, {
        errorCode: cc11001100_hook("errorCode", "20010", "object-key-init"),
        errorMsg: cc11001100_hook("errorMsg", "必填参数不能为空", "object-key-init")
      });
      return false;
    }
    if (!KgUser.IsEmpty(KgUser.Trim(infoObj.code))) {
      code = cc11001100_hook("code", KgUser.Trim(infoObj.code), "assign");
      appid = cc11001100_hook("appid", infoObj.appid, "assign");
      if (!KgUser.IsEmpty(KgUser.Trim(infoObj.type))) {
        type = cc11001100_hook("type", KgUser.Trim(infoObj.type), "assign");
      }
      if (!KgUser.IsEmpty(infoObj.blurCallback)) {
        blurCallback = cc11001100_hook("blurCallback", infoObj.blurCallback, "assign");
      }
      var param = cc11001100_hook("param", {
        'appid': cc11001100_hook('appid', appid, "object-key-init"),
        'ct': cc11001100_hook('ct', ct, "object-key-init"),
        'code': cc11001100_hook('code', encodeURIComponent(code), "object-key-init"),
        'type': cc11001100_hook('type', encodeURIComponent(type), "object-key-init"),
        'callback': cc11001100_hook('callback', callbackName, "object-key-init")
      }, "var-init");
      KgUser.loadScript(KgUser.KgUrl.loginHTTP + 'v1/check_img_code', param, blurCallback);
    }
  },
  Md5: function (str) {
    var hexcase = cc11001100_hook("hexcase", 0, "var-init");
    var b64pad = cc11001100_hook("b64pad", "", "var-init");
    var chrsz = cc11001100_hook("chrsz", 8, "var-init");
    function hex_md5(s) {
      cc11001100_hook("s", s, "function-parameter");
      return binl2hex(core_md5(str2binl(s), s.length * chrsz));
    }
    function core_md5(x, len) {
      cc11001100_hook("x", x, "function-parameter");
      cc11001100_hook("len", len, "function-parameter");
      x[len >> 5] |= cc11001100_hook("x[len >> 5]", 0x80 << len % 32, "assign");
      x[(len + 64 >>> 9 << 4) + 14] = cc11001100_hook("x[(len + 64 >>> 9 << 4) + 14]", len, "assign");
      var a = cc11001100_hook("a", 1732584193, "var-init");
      var b = cc11001100_hook("b", -271733879, "var-init");
      var c = cc11001100_hook("c", -1732584194, "var-init");
      var d = cc11001100_hook("d", 271733878, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < x.length; i += cc11001100_hook("i", 16, "assign")) {
        var olda = cc11001100_hook("olda", a, "var-init");
        var oldb = cc11001100_hook("oldb", b, "var-init");
        var oldc = cc11001100_hook("oldc", c, "var-init");
        var oldd = cc11001100_hook("oldd", d, "var-init");
        a = cc11001100_hook("a", md5_ff(a, b, c, d, x[i + 0], 7, -680876936), "assign");
        d = cc11001100_hook("d", md5_ff(d, a, b, c, x[i + 1], 12, -389564586), "assign");
        c = cc11001100_hook("c", md5_ff(c, d, a, b, x[i + 2], 17, 606105819), "assign");
        b = cc11001100_hook("b", md5_ff(b, c, d, a, x[i + 3], 22, -1044525330), "assign");
        a = cc11001100_hook("a", md5_ff(a, b, c, d, x[i + 4], 7, -176418897), "assign");
        d = cc11001100_hook("d", md5_ff(d, a, b, c, x[i + 5], 12, 1200080426), "assign");
        c = cc11001100_hook("c", md5_ff(c, d, a, b, x[i + 6], 17, -1473231341), "assign");
        b = cc11001100_hook("b", md5_ff(b, c, d, a, x[i + 7], 22, -45705983), "assign");
        a = cc11001100_hook("a", md5_ff(a, b, c, d, x[i + 8], 7, 1770035416), "assign");
        d = cc11001100_hook("d", md5_ff(d, a, b, c, x[i + 9], 12, -1958414417), "assign");
        c = cc11001100_hook("c", md5_ff(c, d, a, b, x[i + 10], 17, -42063), "assign");
        b = cc11001100_hook("b", md5_ff(b, c, d, a, x[i + 11], 22, -1990404162), "assign");
        a = cc11001100_hook("a", md5_ff(a, b, c, d, x[i + 12], 7, 1804603682), "assign");
        d = cc11001100_hook("d", md5_ff(d, a, b, c, x[i + 13], 12, -40341101), "assign");
        c = cc11001100_hook("c", md5_ff(c, d, a, b, x[i + 14], 17, -1502002290), "assign");
        b = cc11001100_hook("b", md5_ff(b, c, d, a, x[i + 15], 22, 1236535329), "assign");
        a = cc11001100_hook("a", md5_gg(a, b, c, d, x[i + 1], 5, -165796510), "assign");
        d = cc11001100_hook("d", md5_gg(d, a, b, c, x[i + 6], 9, -1069501632), "assign");
        c = cc11001100_hook("c", md5_gg(c, d, a, b, x[i + 11], 14, 643717713), "assign");
        b = cc11001100_hook("b", md5_gg(b, c, d, a, x[i + 0], 20, -373897302), "assign");
        a = cc11001100_hook("a", md5_gg(a, b, c, d, x[i + 5], 5, -701558691), "assign");
        d = cc11001100_hook("d", md5_gg(d, a, b, c, x[i + 10], 9, 38016083), "assign");
        c = cc11001100_hook("c", md5_gg(c, d, a, b, x[i + 15], 14, -660478335), "assign");
        b = cc11001100_hook("b", md5_gg(b, c, d, a, x[i + 4], 20, -405537848), "assign");
        a = cc11001100_hook("a", md5_gg(a, b, c, d, x[i + 9], 5, 568446438), "assign");
        d = cc11001100_hook("d", md5_gg(d, a, b, c, x[i + 14], 9, -1019803690), "assign");
        c = cc11001100_hook("c", md5_gg(c, d, a, b, x[i + 3], 14, -187363961), "assign");
        b = cc11001100_hook("b", md5_gg(b, c, d, a, x[i + 8], 20, 1163531501), "assign");
        a = cc11001100_hook("a", md5_gg(a, b, c, d, x[i + 13], 5, -1444681467), "assign");
        d = cc11001100_hook("d", md5_gg(d, a, b, c, x[i + 2], 9, -51403784), "assign");
        c = cc11001100_hook("c", md5_gg(c, d, a, b, x[i + 7], 14, 1735328473), "assign");
        b = cc11001100_hook("b", md5_gg(b, c, d, a, x[i + 12], 20, -1926607734), "assign");
        a = cc11001100_hook("a", md5_hh(a, b, c, d, x[i + 5], 4, -378558), "assign");
        d = cc11001100_hook("d", md5_hh(d, a, b, c, x[i + 8], 11, -2022574463), "assign");
        c = cc11001100_hook("c", md5_hh(c, d, a, b, x[i + 11], 16, 1839030562), "assign");
        b = cc11001100_hook("b", md5_hh(b, c, d, a, x[i + 14], 23, -35309556), "assign");
        a = cc11001100_hook("a", md5_hh(a, b, c, d, x[i + 1], 4, -1530992060), "assign");
        d = cc11001100_hook("d", md5_hh(d, a, b, c, x[i + 4], 11, 1272893353), "assign");
        c = cc11001100_hook("c", md5_hh(c, d, a, b, x[i + 7], 16, -155497632), "assign");
        b = cc11001100_hook("b", md5_hh(b, c, d, a, x[i + 10], 23, -1094730640), "assign");
        a = cc11001100_hook("a", md5_hh(a, b, c, d, x[i + 13], 4, 681279174), "assign");
        d = cc11001100_hook("d", md5_hh(d, a, b, c, x[i + 0], 11, -358537222), "assign");
        c = cc11001100_hook("c", md5_hh(c, d, a, b, x[i + 3], 16, -722521979), "assign");
        b = cc11001100_hook("b", md5_hh(b, c, d, a, x[i + 6], 23, 76029189), "assign");
        a = cc11001100_hook("a", md5_hh(a, b, c, d, x[i + 9], 4, -640364487), "assign");
        d = cc11001100_hook("d", md5_hh(d, a, b, c, x[i + 12], 11, -421815835), "assign");
        c = cc11001100_hook("c", md5_hh(c, d, a, b, x[i + 15], 16, 530742520), "assign");
        b = cc11001100_hook("b", md5_hh(b, c, d, a, x[i + 2], 23, -995338651), "assign");
        a = cc11001100_hook("a", md5_ii(a, b, c, d, x[i + 0], 6, -198630844), "assign");
        d = cc11001100_hook("d", md5_ii(d, a, b, c, x[i + 7], 10, 1126891415), "assign");
        c = cc11001100_hook("c", md5_ii(c, d, a, b, x[i + 14], 15, -1416354905), "assign");
        b = cc11001100_hook("b", md5_ii(b, c, d, a, x[i + 5], 21, -57434055), "assign");
        a = cc11001100_hook("a", md5_ii(a, b, c, d, x[i + 12], 6, 1700485571), "assign");
        d = cc11001100_hook("d", md5_ii(d, a, b, c, x[i + 3], 10, -1894986606), "assign");
        c = cc11001100_hook("c", md5_ii(c, d, a, b, x[i + 10], 15, -1051523), "assign");
        b = cc11001100_hook("b", md5_ii(b, c, d, a, x[i + 1], 21, -2054922799), "assign");
        a = cc11001100_hook("a", md5_ii(a, b, c, d, x[i + 8], 6, 1873313359), "assign");
        d = cc11001100_hook("d", md5_ii(d, a, b, c, x[i + 15], 10, -30611744), "assign");
        c = cc11001100_hook("c", md5_ii(c, d, a, b, x[i + 6], 15, -1560198380), "assign");
        b = cc11001100_hook("b", md5_ii(b, c, d, a, x[i + 13], 21, 1309151649), "assign");
        a = cc11001100_hook("a", md5_ii(a, b, c, d, x[i + 4], 6, -145523070), "assign");
        d = cc11001100_hook("d", md5_ii(d, a, b, c, x[i + 11], 10, -1120210379), "assign");
        c = cc11001100_hook("c", md5_ii(c, d, a, b, x[i + 2], 15, 718787259), "assign");
        b = cc11001100_hook("b", md5_ii(b, c, d, a, x[i + 9], 21, -343485551), "assign");
        a = cc11001100_hook("a", safe_add(a, olda), "assign");
        b = cc11001100_hook("b", safe_add(b, oldb), "assign");
        c = cc11001100_hook("c", safe_add(c, oldc), "assign");
        d = cc11001100_hook("d", safe_add(d, oldd), "assign");
      }
      return Array(a, b, c, d);
    }
    function md5_cmn(q, a, b, x, s, t) {
      cc11001100_hook("q", q, "function-parameter");
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("x", x, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
    }
    function md5_ff(a, b, c, d, x, s, t) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("x", x, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return md5_cmn(b & c | ~b & d, a, b, x, s, t);
    }
    function md5_gg(a, b, c, d, x, s, t) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("x", x, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return md5_cmn(b & d | c & ~d, a, b, x, s, t);
    }
    function md5_hh(a, b, c, d, x, s, t) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("x", x, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return md5_cmn(b ^ c ^ d, a, b, x, s, t);
    }
    function md5_ii(a, b, c, d, x, s, t) {
      cc11001100_hook("a", a, "function-parameter");
      cc11001100_hook("b", b, "function-parameter");
      cc11001100_hook("c", c, "function-parameter");
      cc11001100_hook("d", d, "function-parameter");
      cc11001100_hook("x", x, "function-parameter");
      cc11001100_hook("s", s, "function-parameter");
      cc11001100_hook("t", t, "function-parameter");
      return md5_cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    function safe_add(x, y) {
      cc11001100_hook("x", x, "function-parameter");
      cc11001100_hook("y", y, "function-parameter");
      var lsw = cc11001100_hook("lsw", (x & 0xFFFF) + (y & 0xFFFF), "var-init");
      var msw = cc11001100_hook("msw", (x >> 16) + (y >> 16) + (lsw >> 16), "var-init");
      return msw << 16 | lsw & 0xFFFF;
    }
    function bit_rol(num, cnt) {
      cc11001100_hook("num", num, "function-parameter");
      cc11001100_hook("cnt", cnt, "function-parameter");
      return num << cnt | num >>> 32 - cnt;
    }
    function str2binl(str) {
      cc11001100_hook("str", str, "function-parameter");
      var bin = cc11001100_hook("bin", Array(), "var-init");
      var mask = cc11001100_hook("mask", (1 << chrsz) - 1, "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < str.length * chrsz; i += cc11001100_hook("i", chrsz, "assign")) bin[i >> 5] |= cc11001100_hook("bin[i >> 5]", (str.charCodeAt(i / chrsz) & mask) << i % 32, "assign");
      return bin;
    }
    function binl2hex(binarray) {
      cc11001100_hook("binarray", binarray, "function-parameter");
      var hex_tab = cc11001100_hook("hex_tab", hexcase ? "0123456789ABCDEF" : "0123456789abcdef", "var-init");
      var str = cc11001100_hook("str", "", "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"); i < binarray.length * 4; i++) {
        str += cc11001100_hook("str", hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF), "assign");
      }
      return str;
    }
    str = cc11001100_hook("str", str ? hex_md5(str) : '', "assign");
    return str;
  },
  Trim: function (str) {
    if (typeof str === "string") {
      return str.replace(/^\s+|\s+$/g, "");
    } else {
      return str;
    }
  },
  IsEmpty: function (obj) {
    if (typeof obj != 'undefined' && obj != null && obj != "") {
      return false;
    } else {
      return true;
    }
  },
  GetBytes: function () {
    var bytes = cc11001100_hook("bytes", 0, "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < this.length; i++) {
      if (this.charCodeAt(i) > 256) {
        bytes += cc11001100_hook("bytes", 2, "assign");
      } else {
        bytes += cc11001100_hook("bytes", 1, "assign");
      }
    }
    return bytes;
  },
  Intercept: function (length, appendStr) {
    var str = cc11001100_hook("str", this, "var-init");
    str = cc11001100_hook("str", str.trim(), "assign");
    if (str.getBytes() < length) return str;
    var countLen = cc11001100_hook("countLen", 0, "var-init");
    var charCount = cc11001100_hook("charCount", 0, "var-init");
    if (appendStr.length > 0) {
      length = cc11001100_hook("length", length - appendStr.length, "assign");
    }
    for (var i = cc11001100_hook("i", 0, "var-init"); i < str.length; i++) {
      if (this.charCodeAt(i) > 256) {
        countLen += cc11001100_hook("countLen", 2, "assign");
      } else {
        countLen += cc11001100_hook("countLen", 1, "assign");
      }
      if (countLen > length) {
        break;
      }
      charCount++;
    }
    return str.substr(0, charCount) + appendStr;
  },
  Guid: function () {
    function S4() {
      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }
    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
  },
  CheckAutoLogin: function () {
    var kugouid = cc11001100_hook("kugouid", KgUser.Cookie.read('KuGoo', 'KugooID'), "var-init");
    var clienttime = cc11001100_hook("clienttime", KgUser.Cookie.read('KuGoo', 'ct'), "var-init");
    var now = cc11001100_hook("now", parseInt(new Date().getTime() / 1000), "var-init");
    if (now - clienttime > 86400) {
      KgUser.AutoLogin('');
    }
  }
}, "var-init");
var m_val = cc11001100_hook("m_val", KgUser.Cookie.read(KgUser.KgMid.name), "var-init");
if (KgUser.IsEmpty(m_val)) {
  var n = cc11001100_hook("n", KgUser.Guid(), "var-init");
  KgUser.Cookie.write(KgUser.KgMid.name, KgUser.Md5(n), KgUser.KgMid.days * 86400, "/", KgUser.GetDomain());
}
if ("kugou.com" != KgUser.GetDomain()) {
  KgUser.CrossDomainLogin('');
} else {
  KgUser.CheckAutoLogin();
}
try {
  document.execCommand('BackgroundImageCache', false, true);
} catch (e) {}
;
KgUser.loadAckJs();