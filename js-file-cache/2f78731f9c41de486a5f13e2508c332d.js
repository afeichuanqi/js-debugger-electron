define("superman/lib/event", ["require", "exports"], function (require, _exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: cc11001100_hook("value", true, "object-key-init")
  });
  _exports.fire = cc11001100_hook("_exports.fire", fire, "assign");
  _exports.on = cc11001100_hook("_exports.on", on, "assign");
  _exports.un = cc11001100_hook("_exports.un", un, "assign");
  function fire(modName, evtName, evtArgs) {
    cc11001100_hook("modName", modName, "function-parameter");
    cc11001100_hook("evtName", evtName, "function-parameter");
    cc11001100_hook("evtArgs", evtArgs, "function-parameter");
    F.use("superman:lib/mod_evt", function (evt) {
      evt.fire(modName, evtName, evtArgs);
    });
  }
  function on(modName, evtName, handler) {
    cc11001100_hook("modName", modName, "function-parameter");
    cc11001100_hook("evtName", evtName, "function-parameter");
    cc11001100_hook("handler", handler, "function-parameter");
    F.use("superman:lib/mod_evt", function (evt) {
      evt.on(modName, evtName, handler);
    });
  }
  function un(modName, evtName, handler) {
    cc11001100_hook("modName", modName, "function-parameter");
    cc11001100_hook("evtName", evtName, "function-parameter");
    cc11001100_hook("handler", handler, "function-parameter");
    F.use("superman:lib/mod_evt", function (evt) {
      evt.un(modName, evtName, handler);
    });
  }
});
$.extend({
  browser: {
    chrome: cc11001100_hook("chrome", /chrome\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp["$1"] : undefined, "object-key-init"),
    firefox: cc11001100_hook("firefox", /firefox\/(\d+\.\d+)/i.test(navigator.userAgent) ? +RegExp["$1"] : undefined, "object-key-init"),
    ie: cc11001100_hook("ie", /msie (\d+\.\d+)|Trident/i.test(navigator.userAgent) ? document.documentMode || +RegExp["$1"] : undefined, "object-key-init"),
    isGecko: cc11001100_hook("isGecko", /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent), "object-key-init"),
    isWebkit: cc11001100_hook("isWebkit", /webkit/i.test(navigator.userAgent), "object-key-init"),
    opera: cc11001100_hook("opera", /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp["$6"] || RegExp["$2"]) : undefined, "object-key-init"),
    safari: cc11001100_hook("safari", /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) ? +(RegExp["$1"] || RegExp["$2"]) : undefined, "object-key-init"),
    isSogouIE: cc11001100_hook("isSogouIE", navigator.userAgent.toLowerCase().indexOf("msie") > 0 && navigator.userAgent.toLowerCase().indexOf("se") > 0 && navigator.userAgent.toLowerCase().indexOf("360se") == -1, "object-key-init"),
    isBaidu: cc11001100_hook("isBaidu", /BIDUBrowser/i.test(navigator.userAgent), "object-key-init"),
    edge: cc11001100_hook("edge", /edge\/(\d+)/i.test(navigator.userAgent) ? +RegExp["$1"] : undefined, "object-key-init")
  }
});
$.extend({
  isIE: cc11001100_hook("isIE", $.browser.ie, "object-key-init"),
  isIE6: cc11001100_hook("isIE6", $.browser.ie == 6, "object-key-init"),
  isBaidu: cc11001100_hook("isBaidu", $.browser.isBaidu, "object-key-init")
});
$.extend({
  Strpx: cc11001100_hook("Strpx", function (style) {
    var num = cc11001100_hook("num", 0, "var-init"),
      cnChar = cc11001100_hook("cnChar", "中", "var-init"),
      _fixStyle = cc11001100_hook("_fixStyle", "visibility:hidden;position:absolute;bottom:0;left:0;", "var-init"),
      _entity = cc11001100_hook("_entity", "s_strpx_span", "var-init");
    return function (style) {
      num++;
      var cnLength = cc11001100_hook("cnLength", 0, "var-init"),
        _lengthMap = cc11001100_hook("_lengthMap", {}, "var-init"),
        _spanTpl = cc11001100_hook("_spanTpl", '<span id="' + _entity + num + '" style="' + _fixStyle + (style || "") + '"></span>', "var-init"),
        _span = cc11001100_hook("_span", $(_spanTpl)[0], "var-init");
      document.getElementsByTagName("body")[0].appendChild(_span);
      _span.innerHTML = cc11001100_hook("_span.innerHTML", cnChar, "assign");
      cnLength = cc11001100_hook("cnLength", _span.offsetWidth, "assign");
      var getLengthPx = function (str) {
        var lengthPx = cc11001100_hook("lengthPx", 0, "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", str.length, "var-init"); i < len; i++) {
          var charCode = cc11001100_hook("charCode", str.charCodeAt(i), "var-init");
          lengthPx += cc11001100_hook("lengthPx", charCode > 255 ? cnLength : getCharLength.call(this, str.charAt(i)), "assign");
        }
        return lengthPx;
      };
      var getCharLength = function (aChar) {
        if (_lengthMap[aChar]) {
          return _lengthMap[aChar];
        } else {
          _span.innerHTML = cc11001100_hook("_span.innerHTML", aChar == " " ? "&nbsp;" : aChar, "assign");
          var len = cc11001100_hook("len", _span.offsetWidth, "var-init");
          _lengthMap[aChar] = cc11001100_hook("_lengthMap[aChar]", len, "assign");
          return len;
        }
      };
      var substringByPx = function (str, px, overflow) {
        if (!str) return str;
        if (str.length * cnLength < px) return str;
        if (getLengthPx(str) <= px) return str;
        if (overflow) {
          px = cc11001100_hook("px", px - getLengthPx(overflow), "assign");
        }
        if (px < 0) px = cc11001100_hook("px", 0, "assign");
        var lengthPx = cc11001100_hook("lengthPx", 0, "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", str.length, "var-init"); i < len; i++) {
          var charCode = cc11001100_hook("charCode", str.charCodeAt(i), "var-init"),
            charLen = cc11001100_hook("charLen", charCode > 255 ? cnLength : getCharLength.call(this, str.charAt(i)), "var-init");
          if (lengthPx <= px && lengthPx + charLen > px) {
            return str.substring(0, i) + (overflow || "");
          } else {
            lengthPx += cc11001100_hook("lengthPx", charLen, "assign");
          }
        }
        return str;
      };
      return {
        substringByPx: cc11001100_hook("substringByPx", substringByPx, "object-key-init"),
        getLengthPx: cc11001100_hook("getLengthPx", getLengthPx, "object-key-init")
      };
    };
  }(), "object-key-init")
});
$.extend({
  url: {
    escapeReg: function (url) {
      return String(url).replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])", "g"), "\\$1");
    },
    escapeSSL: function (url) {
      if (s_domain.protocol === "http:" || url.indexOf("https:") == 0) {
        return url;
      }
      var list = cc11001100_hook("list", s_domain.ssllist || {}, "var-init"),
        reg = cc11001100_hook("reg", /^(http[s]?:\/\/)?([^\/]+)(.*)/, "var-init"),
        matches = cc11001100_hook("matches", url.match(reg), "var-init");
      var sslurl = cc11001100_hook("sslurl", list.hasOwnProperty(matches[2]) && list[matches[2]] + matches[3], "var-init");
      if (!sslurl) {
        new Image().src = cc11001100_hook("new Image().src", "/home/page/data/pageserver?errno=7008&errurl=" + encodeURIComponent(url) + "&_t=" + new Date() * 1, "assign");
        if ($.browser.chrome) {
          return url;
        }
        return url.replace(/http:/, "https:");
      }
      return "https://" + sslurl;
    },
    getQueryValue: function (url, key) {
      var reg = cc11001100_hook("reg", new RegExp("(^|&|\\?|#)" + $.url.escapeReg(key) + "=([^&#]*)(&|$|#)", ""), "var-init");
      var match = cc11001100_hook("match", url.match(reg), "var-init");
      if (match) {
        return match[2];
      }
      return null;
    },
    escapeSymbol: function (source) {
      return String(source).replace(/[#%&+=\/\\\ \　\f\r\n\t]/g, function (all) {
        return "%" + (256 + all.charCodeAt()).toString(16).substring(1).toUpperCase();
      });
    },
    jsonToQuery: function (json, replacer_opt) {
      var result = cc11001100_hook("result", [], "var-init"),
        itemLen,
        replacer = cc11001100_hook("replacer", replacer_opt || function (value) {
          return $.url.escapeSymbol(value);
        }, "var-init");
      $.each(json, function (key, item) {
        if ($.isArray(item)) {
          itemLen = cc11001100_hook("itemLen", item.length, "assign");
          while (itemLen--) {
            result.push(key + "=" + encodeURIComponent(item[itemLen]));
          }
        } else {
          result.push(key + "=" + encodeURIComponent(item));
        }
      });
      return result.join("&");
    },
    queryToJson: function (url) {
      var query = cc11001100_hook("query", url.substr(url.lastIndexOf("?") + 1), "var-init"),
        params = cc11001100_hook("params", query.split("&"), "var-init"),
        len = cc11001100_hook("len", params.length, "var-init"),
        result = cc11001100_hook("result", {}, "var-init"),
        i = cc11001100_hook("i", 0, "var-init"),
        key,
        value,
        item,
        param;
      for (; i < len; i++) {
        if (!params[i]) {
          continue;
        }
        param = cc11001100_hook("param", params[i].split("="), "assign");
        key = cc11001100_hook("key", param[0], "assign");
        value = cc11001100_hook("value", param[1], "assign");
        item = cc11001100_hook("item", result[key], "assign");
        if ("undefined" == typeof item) {
          result[key] = cc11001100_hook("result[key]", value, "assign");
        } else if ($.isArray(item)) {
          item.push(value);
        } else {
          result[key] = cc11001100_hook("result[key]", [item, value], "assign");
        }
      }
      return result;
    }
  }
});
$.extend({
  ajaxget: function (url, callback, istab) {
    var addJson = cc11001100_hook("addJson", {}, "var-init");
    addJson["indextype"] = cc11001100_hook("addJson[\"indextype\"]", "manht", "assign");
    if (!$.url.getQueryValue(url, "_req_seqid")) {
      addJson["_req_seqid"] = cc11001100_hook("addJson[\"_req_seqid\"]", s_session.seqId, "assign");
    }
    if (s_session.debug) {
      addJson["debug"] = cc11001100_hook("addJson[\"debug\"]", "on", "assign");
    }
    if (!$.url.getQueryValue(url, "asyn") || $.url.getQueryValue(url, "asyn") != 1) {
      addJson["asyn"] = cc11001100_hook("addJson[\"asyn\"]", 1, "assign");
    }
    if (!$.url.getQueryValue(url, "t") && !$.url.getQueryValue(url, "r")) {
      addJson["t"] = cc11001100_hook("addJson[\"t\"]", new Date().valueOf(), "assign");
    }
    if (!$.url.getQueryValue(url, "sid") && !$.url.getQueryValue(url, "sid")) {
      addJson["sid"] = cc11001100_hook("addJson[\"sid\"]", s_session.sid, "assign");
    }
    if (!$.url.getQueryValue(url, "super_frm") && $.url.getQueryValue(location.href, "super_frm")) {
      addJson["super_frm"] = cc11001100_hook("addJson[\"super_frm\"]", $.url.getQueryValue(location.href, "super_frm"), "assign");
    }
    if (!$.url.getQueryValue(url, "from_login") && $.url.getQueryValue(location.href, "from_login")) {
      addJson["from_login"] = cc11001100_hook("addJson[\"from_login\"]", $.url.getQueryValue(location.href, "from_login"), "assign");
    }
    if (!$.url.getQueryValue(url, "from_reg") && $.url.getQueryValue(location.href, "from_reg")) {
      addJson["from_reg"] = cc11001100_hook("addJson[\"from_reg\"]", $.url.getQueryValue(location.href, "from_reg"), "assign");
    }
    if (url && url.indexOf("?") > 0) {
      url += cc11001100_hook("url", "&" + $.url.jsonToQuery(addJson), "assign");
    } else {
      url += cc11001100_hook("url", "?" + $.url.jsonToQuery(addJson), "assign");
    }
    var _jsonParse = function (data) {
      return new Function("return (" + data + ")")();
    };
    return $.ajax({
      url: cc11001100_hook("url", url, "object-key-init"),
      type: cc11001100_hook("type", "GET", "object-key-init"),
      dataType: cc11001100_hook("dataType", "text", "object-key-init"),
      success: function (res, textStatus) {
        if (res) {
          var data = cc11001100_hook("data", {}, "var-init");
          try {
            data = cc11001100_hook("data", _jsonParse(res), "assign");
          } catch (ex) {
            new Image().src = cc11001100_hook("new Image().src", s_domain.baseuri + "/page/data/pageserver?errno=2013&url=" + encodeURIComponent(url) + "&ldq=" + encodeURIComponent(res.slice(0, 200)), "assign");
            if (res.indexOf("script") >= 0) {
              $.ajax({
                type: cc11001100_hook("type", "POST", "object-key-init"),
                url: cc11001100_hook("url", "/home/page/data/pageserver", "object-key-init"),
                data: {
                  errno: cc11001100_hook("errno", 7006, "object-key-init"),
                  isData: cc11001100_hook("isData", encodeURIComponent(res), "object-key-init")
                }
              });
            }
          }
          errno = cc11001100_hook("errno", data.errNo || data.errno, "assign");
          if (errno === undefined) {
            callback && callback({
              errNo: cc11001100_hook("errNo", -1e3, "object-key-init")
            });
            window._xman_exception && _xman_exception.api("get", url, "-1000", url.split("?")[1]);
          }
          if (errno != 0) {
            callback && callback({
              errNo: cc11001100_hook("errNo", errno, "object-key-init")
            });
            window._xman_exception && _xman_exception.api("get", url, errno, url.split("?")[1]);
          }
          if (errno == "403") {
            new Image().src = cc11001100_hook("new Image().src", s_domain.baseuri + "/page/data/pageserver?errno=403&url=" + encodeURIComponent(url), "assign");
          } else {
            if (!istab || istab && errno == 0) {
              callback && callback(data);
            }
          }
        }
      }
    });
  },
  ajaxpost: function (url, data, callback) {
    if (typeof data != "string") {
      data["indextype"] = cc11001100_hook("data[\"indextype\"]", "manht", "assign");
      data["bsToken"] = cc11001100_hook("data[\"bsToken\"]", $("#bsToken") && $("#bsToken").val() || "", "assign");
      data["_req_seqid"] = cc11001100_hook("data[\"_req_seqid\"]", s_session.seqId, "assign");
      data["sid"] = cc11001100_hook("data[\"sid\"]", s_session.sid, "assign");
      if (!$.url.getQueryValue(url, "super_frm") && $.url.getQueryValue(location.href, "super_frm")) {
        data["super_frm"] = cc11001100_hook("data[\"super_frm\"]", $.url.getQueryValue(location.href, "super_frm"), "assign");
      }
      if (!$.url.getQueryValue(url, "from_login") && $.url.getQueryValue(location.href, "from_login")) {
        data["from_login"] = cc11001100_hook("data[\"from_login\"]", $.url.getQueryValue(location.href, "from_login"), "assign");
      }
      if (!$.url.getQueryValue(url, "from_reg") && $.url.getQueryValue(location.href, "from_reg")) {
        data["from_reg"] = cc11001100_hook("data[\"from_reg\"]", $.url.getQueryValue(location.href, "from_reg"), "assign");
      }
      if (s_session.debug) {
        data["debug"] = cc11001100_hook("data[\"debug\"]", "on", "assign");
      }
      data = cc11001100_hook("data", $.url.jsonToQuery(data), "assign");
    } else {
      data += cc11001100_hook("data", "&_req_seqid=" + s_session.seqId + "&bsToken=" + ($("#bsToken") && $("$bsToken").val() || "") + "&sid=" + s_session.sid, "assign");
      if (s_session.debug) {
        data += cc11001100_hook("data", "&debug=on", "assign");
      }
    }
    var _jsonParse = function (data) {
      return new Function("return (" + data + ")")();
    };
    var pdata = cc11001100_hook("pdata", data, "var-init");
    return $.ajax({
      url: cc11001100_hook("url", url, "object-key-init"),
      type: cc11001100_hook("type", "POST", "object-key-init"),
      data: cc11001100_hook("data", data, "object-key-init"),
      dataType: cc11001100_hook("dataType", "text", "object-key-init"),
      success: function (res, textStatus) {
        if (res) {
          if (typeof pdata != "string") {
            pdata = cc11001100_hook("pdata", $.url.jsonToQuery(pdata), "assign");
          }
          var data = cc11001100_hook("data", {}, "var-init");
          data = cc11001100_hook("data", _jsonParse(res), "assign");
          if (data.errNo === undefined) {
            window._xman_exception && _xman_exception.api("post", url, "-1000", pdata);
          }
          if (data.errNo && data.errNo != 0) {
            window._xman_exception && _xman_exception.api("post", url, data.errNo, pdata);
          }
          if (data.errNo == "7007") {
            pdata += cc11001100_hook("pdata", "&retryno=" + data.errNo, "assign");
            if (url && url.indexOf("?") > 0) {
              url += cc11001100_hook("url", "&" + pdata, "assign");
            } else {
              url += cc11001100_hook("url", "?" + pdata, "assign");
            }
            $.ajax({
              url: cc11001100_hook("url", url, "object-key-init"),
              type: cc11001100_hook("type", "get", "object-key-init"),
              dataType: cc11001100_hook("dataType", "text", "object-key-init"),
              success: function (res, textStatus) {
                if (res) {
                  var gdata = cc11001100_hook("gdata", _jsonParse(res), "var-init");
                  callback && callback(gdata);
                }
              }
            });
          } else {
            callback && callback(data);
          }
        }
      }
    });
  }
});
$.ajaxSetup({
  beforeSend: function (xhr) {
    var qid = cc11001100_hook("qid", s_session.qid || "", "var-init");
    var url = cc11001100_hook("url", this.url || "", "var-init");
    var isTuOrVoice = cc11001100_hook("isTuOrVoice", url.indexOf("graph.baidu.com") > -1 || url.indexOf("vse.baidu.com") > -1, "var-init");
    !isTuOrVoice && xhr.setRequestHeader("Ps-Dataurlconfigqid", qid);
  }
});
$.extend({
  ajaxsyncget: function (url, callback) {
    if (s_session.issync && s_session.isdev != "1") {
      s_session.issync = cc11001100_hook("s_session.issync", null, "assign");
      var data = cc11001100_hook("data", {}, "var-init");
      try {
        data = cc11001100_hook("data", new Function("return (" + $.trim($("#s_sync_data").html()) + ")")(), "assign");
      } catch (e) {
        data.errNo = cc11001100_hook("data.errNo", 9999, "assign");
      }
      callback && callback(data);
    } else {
      return $.ajaxget(url, callback, true);
    }
  }
});
$.extend({
  loadCss: function (path) {
    var element = cc11001100_hook("element", document.createElement("link"), "var-init");
    element.setAttribute("rel", "stylesheet");
    element.setAttribute("type", "text/css");
    element.setAttribute("href", path);
    document.getElementsByTagName("head")[0].appendChild(element);
  },
  loadJs: function (path, ignoreedge) {
    var element = cc11001100_hook("element", document.createElement("script"), "var-init");
    element.setAttribute("type", "text/javascript");
    element.setAttribute("src", path);
    element.setAttribute("defer", "defer");
    document.getElementsByTagName("head")[0].appendChild(element);
  }
});
$.extend({
  formatString: function (source, opts) {
    source = cc11001100_hook("source", String(source), "assign");
    var data = cc11001100_hook("data", Array.prototype.slice.call(arguments, 1), "var-init"),
      toString = cc11001100_hook("toString", Object.prototype.toString, "var-init");
    if (data.length) {
      data = cc11001100_hook("data", data.length == 1 ? opts !== null && /\[object Array\]|\[object Object\]/.test(toString.call(opts)) ? opts : data : data, "assign");
      return source.replace(/#\{(.+?)\}/g, function (match, key) {
        var replacer = cc11001100_hook("replacer", data[key], "var-init");
        if ("[object Function]" == toString.call(replacer)) {
          replacer = cc11001100_hook("replacer", replacer(key), "assign");
        }
        return "undefined" == typeof replacer ? "" : replacer;
      });
    }
    return source;
  },
  encodeHTML: function (source) {
    return String(source).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  },
  decodeHTML: function (source) {
    var str = cc11001100_hook("str", String(source).replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"), "var-init");
    return str.replace(/&#([\d]+);/g, function (_0, _1) {
      return String.fromCharCode(parseInt(_1, 10));
    });
  },
  isString: function (source) {
    return "[object String]" == Object.prototype.toString.call(source);
  },
  trimAll: function (str) {
    return str.replace(/\s+/g, "");
  }
});
$.extend({
  stringify: function stringify(obj) {
    if ("JSON" in window) {
      return JSON.stringify(obj);
    }
    var t = cc11001100_hook("t", typeof obj, "var-init");
    if (t != "object" || obj === null) {
      if (t == "string") {
        obj = cc11001100_hook("obj", '"' + obj + '"', "assign");
      }
      return String(obj);
    } else {
      var escapeMap = cc11001100_hook("escapeMap", {
        "\b": cc11001100_hook("\b", "\\b", "object-key-init"),
        "\t": cc11001100_hook("\t", "\\t", "object-key-init"),
        "\n": cc11001100_hook("\n", "\\n", "object-key-init"),
        "\f": cc11001100_hook("\f", "\\f", "object-key-init"),
        "\r": cc11001100_hook("\r", "\\r", "object-key-init"),
        '"': cc11001100_hook('"', '\\"', "object-key-init"),
        "\\": cc11001100_hook("\\", "\\\\", "object-key-init")
      }, "var-init");
      function encodeString(source) {
        cc11001100_hook("source", source, "function-parameter");
        if (/["\\\x00-\x1f]/.test(source)) {
          source = cc11001100_hook("source", source.replace(/["\\\x00-\x1f]/g, function (match) {
            var c = cc11001100_hook("c", escapeMap[match], "var-init");
            if (c) {
              return c;
            }
            c = cc11001100_hook("c", match.charCodeAt(), "assign");
            return "\\u00" + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
          }), "assign");
        }
        return '"' + source + '"';
      }
      function encodeArray(source) {
        cc11001100_hook("source", source, "function-parameter");
        var result = cc11001100_hook("result", ["["], "var-init"),
          l = cc11001100_hook("l", source.length, "var-init"),
          preComma,
          i,
          item;
        for (i = cc11001100_hook("i", 0, "assign"); i < l; i++) {
          item = cc11001100_hook("item", source[i], "assign");
          switch (typeof item) {
            case "undefined":
            case "function":
            case "unknown":
              break;
            default:
              if (preComma) {
                result.push(",");
              }
              result.push($.stringify(item));
              preComma = cc11001100_hook("preComma", 1, "assign");
          }
        }
        result.push("]");
        return result.join("");
      }
      switch (typeof obj) {
        case "undefined":
          return "undefined";
        case "number":
          return isFinite(obj) ? String(obj) : "null";
        case "string":
          return encodeString(obj);
        case "boolean":
          return String(obj);
        default:
          if (obj === null) {
            return "null";
          } else if (obj instanceof Array) {
            return encodeArray(obj);
          } else {
            var result = cc11001100_hook("result", ["{"], "var-init"),
              encode = cc11001100_hook("encode", $.stringify, "var-init"),
              preComma,
              item;
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                item = cc11001100_hook("item", obj[key], "assign");
                switch (typeof item) {
                  case "undefined":
                  case "unknown":
                  case "function":
                    break;
                  default:
                    if (preComma) {
                      result.push(",");
                    }
                    preComma = cc11001100_hook("preComma", 1, "assign");
                    result.push(encode(key) + ":" + encode(item));
                }
              }
            }
            result.push("}");
            return result.join("");
          }
      }
    }
  }
});
$.extend({
  localstorage: cc11001100_hook("localstorage", function () {
    var isDate = function (o) {
      return {}.toString.call(o) === "[object Date]" && o.toString() !== "Invalid Date" && !isNaN(o);
    };
    var _guid = cc11001100_hook("_guid", "SUPER_LS_PLUGIN_1", "var-init"),
      _status = cc11001100_hook("_status", {
        SUCCESS: cc11001100_hook("SUCCESS", 0, "object-key-init"),
        FAILURE: cc11001100_hook("FAILURE", 1, "object-key-init"),
        OVERFLOW: cc11001100_hook("OVERFLOW", 2, "object-key-init")
      }, "var-init");
    function _getKey(key) {
      cc11001100_hook("key", key, "function-parameter");
      return "_super_" + key.replace(/[_\s]/g, function (matcher) {
        return matcher == "_" ? "__" : "_s";
      });
    }
    function _getElement() {
      return document.getElementById(_guid + "-storage");
    }
    function _getInstance() {
      var _storage;
      if (window.ActiveXObject && $.browser.ie < 9) {
        _storage = cc11001100_hook("_storage", _createUserData(), "assign");
      } else if (window.localStorage) {
        _storage = cc11001100_hook("_storage", _createLocalStorage(), "assign");
      } else {
        _storage = cc11001100_hook("_storage", _createCookie(), "assign");
      }
      return _storage;
    }
    function _createUserData() {
      $(document.body).append($.formatString('<div id="#{id}" style="display:none;"></div>', {
        id: cc11001100_hook("id", _guid + "-storage", "object-key-init")
      }));
      _getElement().addBehavior("#default#userData");
      return {
        set: function (key, value, callback, options) {
          var status = cc11001100_hook("status", _status.SUCCESS, "var-init"),
            ele = cc11001100_hook("ele", _getElement(), "var-init"),
            newKey = cc11001100_hook("newKey", _getKey(key), "var-init"),
            time = cc11001100_hook("time", options && options.expires ? options.expires : new Date().getTime() + 365 * 24 * 60 * 60 * 1e3, "var-init");
          if (isDate(time)) {
            time = cc11001100_hook("time", time.getTime(), "assign");
          } else {
            time = cc11001100_hook("time", new Date().getTime() + (time - 0), "assign");
          }
          ele.expires = cc11001100_hook("ele.expires", new Date(time).toUTCString(), "assign");
          try {
            ele.setAttribute(newKey, value);
            ele.save(newKey);
          } catch (e) {
            status = cc11001100_hook("status", _status.OVERFLOW, "assign");
          }
          ele = cc11001100_hook("ele", null, "assign");
          callback && callback.call(this, status, value);
        },
        get: function (key) {
          var status = cc11001100_hook("status", _status.SUCCESS, "var-init"),
            ele = cc11001100_hook("ele", _getElement(), "var-init"),
            newKey = cc11001100_hook("newKey", _getKey(key), "var-init"),
            val = cc11001100_hook("val", null, "var-init");
          try {
            ele.load(newKey);
            val = cc11001100_hook("val", ele.getAttribute(newKey), "assign");
          } catch (e) {
            return {
              status: cc11001100_hook("status", _status.FAILURE, "object-key-init"),
              value: cc11001100_hook("value", null, "object-key-init")
            };
          }
          return {
            status: cc11001100_hook("status", status, "object-key-init"),
            value: cc11001100_hook("value", val, "object-key-init")
          };
        },
        del: function (key, callback) {
          var status = cc11001100_hook("status", _status.SUCCESS, "var-init"),
            ele = cc11001100_hook("ele", _getElement(), "var-init"),
            newKey = cc11001100_hook("newKey", _getKey(key), "var-init"),
            val;
          try {
            ele.load(newKey);
            val = cc11001100_hook("val", ele.getAttribute(newKey), "assign");
            if (val) {
              ele.removeAttribute(newKey);
              ele.expires = cc11001100_hook("ele.expires", new Date(315532799e3).toUTCString(), "assign");
              ele.save(newKey);
            } else {
              status = cc11001100_hook("status", _status.FAILURE, "assign");
            }
          } catch (e) {
            status = cc11001100_hook("status", _status.FAILURE, "assign");
          }
          callback && callback.call(this, status, val);
        }
      };
    }
    function _createLocalStorage() {
      return {
        set: function (key, value, callback, options) {
          var status = cc11001100_hook("status", _status.SUCCESS, "var-init"),
            storage = cc11001100_hook("storage", window.localStorage, "var-init"),
            newKey = cc11001100_hook("newKey", _getKey(key), "var-init"),
            time = cc11001100_hook("time", options && options.expires ? options.expires : 0, "var-init");
          if (isDate(time)) {
            time = cc11001100_hook("time", time.getTime(), "assign");
          } else if (time > 0) {
            time = cc11001100_hook("time", new Date().getTime() + (time - 0), "assign");
          }
          try {
            storage.setItem(newKey, time + "|" + value);
          } catch (e) {
            status = cc11001100_hook("status", _status.OVERFLOW, "assign");
          }
          callback && callback.call(this, status, value);
        },
        get: function (key) {
          var status = cc11001100_hook("status", _status.SUCCESS, "var-init"),
            storage = cc11001100_hook("storage", window.localStorage, "var-init"),
            newKey = cc11001100_hook("newKey", _getKey(key), "var-init"),
            val = cc11001100_hook("val", null, "var-init"),
            index,
            time;
          try {
            val = cc11001100_hook("val", storage.getItem(newKey), "assign");
          } catch (e) {
            return {
              status: cc11001100_hook("status", _status.FAILURE, "object-key-init"),
              value: cc11001100_hook("value", null, "object-key-init")
            };
          }
          if (val) {
            index = cc11001100_hook("index", val.indexOf("|"), "assign");
            time = cc11001100_hook("time", parseInt(val.substring(0, index), 10), "assign");
            if (new Date(time).getTime() > new Date().getTime() || time == 0) {
              val = cc11001100_hook("val", val.substring(index + 1, val.length), "assign");
            } else {
              val = cc11001100_hook("val", null, "assign");
              status = cc11001100_hook("status", _status.FAILURE, "assign");
              this.del(key);
            }
          } else {
            status = cc11001100_hook("status", _status.FAILURE, "assign");
          }
          return {
            status: cc11001100_hook("status", status, "object-key-init"),
            value: cc11001100_hook("value", val, "object-key-init")
          };
        },
        del: function (key, callback) {
          var status = cc11001100_hook("status", _status.SUCCESS, "var-init"),
            storage = cc11001100_hook("storage", window.localStorage, "var-init"),
            newKey = cc11001100_hook("newKey", _getKey(key), "var-init"),
            val = cc11001100_hook("val", null, "var-init");
          try {
            val = cc11001100_hook("val", storage.getItem(newKey), "assign");
          } catch (e) {
            status = cc11001100_hook("status", _status.FAILURE, "assign");
          }
          if (val) {
            val = cc11001100_hook("val", val.substring(val.indexOf("|") + 1, val.length), "assign");
            status = cc11001100_hook("status", _status[val ? "SUCCESS" : "FAILURE"], "assign");
            val && storage.removeItem(newKey);
          } else {
            status = cc11001100_hook("status", _status.FAILURE, "assign");
          }
          callback && callback.call(this, status, val);
        }
      };
    }
    function _createCookie() {
      return {
        set: function (key, value, callback, options) {
          S.cookie.set(_getKey(key), value, options);
          callback && callback.call(me, _status.SUCCESS, value);
        },
        get: function (key) {
          var val = cc11001100_hook("val", S.cookie.get(_getKey(key)), "var-init");
          return {
            status: cc11001100_hook("status", _status[val ? "SUCCESS" : "FAILURE"], "object-key-init"),
            value: cc11001100_hook("value", val, "object-key-init")
          };
        },
        del: function (key, callback) {
          var newKey = cc11001100_hook("newKey", _getKey(key), "var-init"),
            val = cc11001100_hook("val", S.cookie.get(newKey), "var-init");
          S.cookie.remove(newKey);
          callback && callback.call(me, _status[val ? "SUCCESS" : "FAILURE"], val);
        }
      };
    }
    return {
      set: function (key, value, callback, options) {
        var me = cc11001100_hook("me", this, "var-init");
        !me._storage && (me._storage = cc11001100_hook("me._storage", _getInstance(), "assign"));
        me._storage.set.apply(me._storage, arguments);
      },
      get: function (key) {
        var me = cc11001100_hook("me", this, "var-init");
        !me._storage && (me._storage = cc11001100_hook("me._storage", _getInstance(), "assign"));
        return me._storage.get(key);
      },
      remove: function (key, callback) {
        var me = cc11001100_hook("me", this, "var-init");
        !me._storage && (me._storage = cc11001100_hook("me._storage", _getInstance(), "assign"));
        me._storage.del.apply(me._storage, arguments);
      }
    };
  }(), "object-key-init")
});
$.extend({
  ls: cc11001100_hook("ls", $.localstorage, "object-key-init")
});
$.extend({
  Bind: function (scope, func) {
    var xargs = cc11001100_hook("xargs", arguments.length > 2 ? [].slice.call(arguments, 2) : null, "var-init");
    return function () {
      var fn = cc11001100_hook("fn", $.isString(func) ? scope[func] : func, "var-init"),
        args = cc11001100_hook("args", xargs ? xargs.concat([].slice.call(arguments, 0)) : arguments, "var-init");
      return fn.apply(scope || fn, args);
    };
  }
});
$.easing["jswing"] = cc11001100_hook("$.easing[\"jswing\"]", $.easing["swing"], "assign");
$.extend($.easing, {
  def: cc11001100_hook("def", "easeOutQuad", "object-key-init"),
  swing: function (x, t, b, c, d) {
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c * (t /= cc11001100_hook("t", d, "assign")) * t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c * (t /= cc11001100_hook("t", d, "assign")) * (t - 2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t /= cc11001100_hook("t", d / 2, "assign")) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c * (t /= cc11001100_hook("t", d, "assign")) * t * t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c * ((t = cc11001100_hook("t", t / d - 1, "assign")) * t * t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t /= cc11001100_hook("t", d / 2, "assign")) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= cc11001100_hook("t", 2, "assign")) * t * t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c * (t /= cc11001100_hook("t", d, "assign")) * t * t * t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t = cc11001100_hook("t", t / d - 1, "assign")) * t * t * t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t /= cc11001100_hook("t", d / 2, "assign")) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= cc11001100_hook("t", 2, "assign")) * t * t * t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c * (t /= cc11001100_hook("t", d, "assign")) * t * t * t * t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c * ((t = cc11001100_hook("t", t / d - 1, "assign")) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t /= cc11001100_hook("t", d / 2, "assign")) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= cc11001100_hook("t", 2, "assign")) * t * t * t * t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= cc11001100_hook("t", d / 2, "assign")) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= cc11001100_hook("t", d, "assign")) * t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = cc11001100_hook("t", t / d - 1, "assign")) * t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t /= cc11001100_hook("t", d / 2, "assign")) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= cc11001100_hook("t", 2, "assign")) * t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s = cc11001100_hook("s", 1.70158, "var-init");
    var p = cc11001100_hook("p", 0, "var-init");
    var a = cc11001100_hook("a", c, "var-init");
    if (t == 0) return b;
    if ((t /= cc11001100_hook("t", d, "assign")) == 1) return b + c;
    if (!p) p = cc11001100_hook("p", d * .3, "assign");
    if (a < Math.abs(c)) {
      a = cc11001100_hook("a", c, "assign");
      var s = cc11001100_hook("s", p / 4, "var-init");
    } else var s = cc11001100_hook("s", p / (2 * Math.PI) * Math.asin(c / a), "var-init");
    return -(a * Math.pow(2, 10 * (t -= cc11001100_hook("t", 1, "assign"))) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s = cc11001100_hook("s", 1.70158, "var-init");
    var p = cc11001100_hook("p", 0, "var-init");
    var a = cc11001100_hook("a", c, "var-init");
    if (t == 0) return b;
    if ((t /= cc11001100_hook("t", d, "assign")) == 1) return b + c;
    if (!p) p = cc11001100_hook("p", d * .3, "assign");
    if (a < Math.abs(c)) {
      a = cc11001100_hook("a", c, "assign");
      var s = cc11001100_hook("s", p / 4, "var-init");
    } else var s = cc11001100_hook("s", p / (2 * Math.PI) * Math.asin(c / a), "var-init");
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s = cc11001100_hook("s", 1.70158, "var-init");
    var p = cc11001100_hook("p", 0, "var-init");
    var a = cc11001100_hook("a", c, "var-init");
    if (t == 0) return b;
    if ((t /= cc11001100_hook("t", d / 2, "assign")) == 2) return b + c;
    if (!p) p = cc11001100_hook("p", d * (.3 * 1.5), "assign");
    if (a < Math.abs(c)) {
      a = cc11001100_hook("a", c, "assign");
      var s = cc11001100_hook("s", p / 4, "var-init");
    } else var s = cc11001100_hook("s", p / (2 * Math.PI) * Math.asin(c / a), "var-init");
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= cc11001100_hook("t", 1, "assign"))) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= cc11001100_hook("t", 1, "assign"))) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = cc11001100_hook("s", 1.70158, "assign");
    return c * (t /= cc11001100_hook("t", d, "assign")) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = cc11001100_hook("s", 1.70158, "assign");
    return c * ((t = cc11001100_hook("t", t / d - 1, "assign")) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = cc11001100_hook("s", 1.70158, "assign");
    if ((t /= cc11001100_hook("t", d / 2, "assign")) < 1) return c / 2 * (t * t * (((s *= cc11001100_hook("s", 1.525, "assign")) + 1) * t - s)) + b;
    return c / 2 * ((t -= cc11001100_hook("t", 2, "assign")) * t * (((s *= cc11001100_hook("s", 1.525, "assign")) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t /= cc11001100_hook("t", d, "assign")) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= cc11001100_hook("t", 1.5 / 2.75, "assign")) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= cc11001100_hook("t", 2.25 / 2.75, "assign")) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= cc11001100_hook("t", 2.625 / 2.75, "assign")) * t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
});
(function () {
  var toFix = cc11001100_hook("toFix", ["mousewheel", "DOMMouseScroll"], "var-init"),
    toBind = cc11001100_hook("toBind", ["mousewheel", "DOMMouseScroll"], "var-init"),
    slice = cc11001100_hook("slice", Array.prototype.slice, "var-init"),
    nullLowestDeltaTimeout,
    lowestDelta;
  if ($.event.fixHooks) {
    for (var i = cc11001100_hook("i", toFix.length, "var-init"); i;) {
      $.event.fixHooks[toFix[--i]] = cc11001100_hook("$.event.fixHooks[toFix[--i]]", $.event.mouseHooks, "assign");
    }
  }
  var special = cc11001100_hook("special", $.event.special.mousewheel = cc11001100_hook("$.event.special.mousewheel", {
    version: cc11001100_hook("version", "3.1.9", "object-key-init"),
    setup: function () {
      if (this.addEventListener) {
        for (var i = cc11001100_hook("i", toBind.length, "var-init"); i;) {
          this.addEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = cc11001100_hook("this.onmousewheel", handler, "assign");
      }
      $.data(this, "mousewheel-line-height", special.getLineHeight(this));
      $.data(this, "mousewheel-page-height", special.getPageHeight(this));
    },
    teardown: function () {
      if (this.removeEventListener) {
        for (var i = cc11001100_hook("i", toBind.length, "var-init"); i;) {
          this.removeEventListener(toBind[--i], handler, false);
        }
      } else {
        this.onmousewheel = cc11001100_hook("this.onmousewheel", null, "assign");
      }
    },
    getLineHeight: function (elem) {
      return parseInt($(elem)["offsetParent" in $.fn ? "offsetParent" : "parent"]().css("fontSize"), 10);
    },
    getPageHeight: function (elem) {
      return $(elem).height();
    },
    settings: {
      adjustOldDeltas: cc11001100_hook("adjustOldDeltas", true, "object-key-init")
    }
  }, "assign"), "var-init");
  $.fn.extend({
    mousewheel: function (fn) {
      return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    unmousewheel: function (fn) {
      return this.unbind("mousewheel", fn);
    }
  });
  function handler(event) {
    cc11001100_hook("event", event, "function-parameter");
    var orgEvent = cc11001100_hook("orgEvent", event || window.event, "var-init"),
      args = cc11001100_hook("args", slice.call(arguments, 1), "var-init"),
      delta = cc11001100_hook("delta", 0, "var-init"),
      deltaX = cc11001100_hook("deltaX", 0, "var-init"),
      deltaY = cc11001100_hook("deltaY", 0, "var-init"),
      absDelta = cc11001100_hook("absDelta", 0, "var-init");
    event = cc11001100_hook("event", $.event.fix(orgEvent), "assign");
    event.type = cc11001100_hook("event.type", "mousewheel", "assign");
    if ("detail" in orgEvent) {
      deltaY = cc11001100_hook("deltaY", orgEvent.detail * -1, "assign");
    }
    if ("wheelDelta" in orgEvent) {
      deltaY = cc11001100_hook("deltaY", orgEvent.wheelDelta, "assign");
    }
    if ("wheelDeltaY" in orgEvent) {
      deltaY = cc11001100_hook("deltaY", orgEvent.wheelDeltaY, "assign");
    }
    if ("wheelDeltaX" in orgEvent) {
      deltaX = cc11001100_hook("deltaX", orgEvent.wheelDeltaX * -1, "assign");
    }
    if ("axis" in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
      deltaX = cc11001100_hook("deltaX", deltaY * -1, "assign");
      deltaY = cc11001100_hook("deltaY", 0, "assign");
    }
    delta = cc11001100_hook("delta", deltaY === 0 ? deltaX : deltaY, "assign");
    if ("deltaY" in orgEvent) {
      deltaY = cc11001100_hook("deltaY", orgEvent.deltaY * -1, "assign");
      delta = cc11001100_hook("delta", deltaY, "assign");
    }
    if ("deltaX" in orgEvent) {
      deltaX = cc11001100_hook("deltaX", orgEvent.deltaX, "assign");
      if (deltaY === 0) {
        delta = cc11001100_hook("delta", deltaX * -1, "assign");
      }
    }
    if (deltaY === 0 && deltaX === 0) {
      return;
    }
    if (orgEvent.deltaMode === 1) {
      var lineHeight = cc11001100_hook("lineHeight", $.data(this, "mousewheel-line-height"), "var-init");
      delta *= cc11001100_hook("delta", lineHeight, "assign");
      deltaY *= cc11001100_hook("deltaY", lineHeight, "assign");
      deltaX *= cc11001100_hook("deltaX", lineHeight, "assign");
    } else if (orgEvent.deltaMode === 2) {
      var pageHeight = cc11001100_hook("pageHeight", $.data(this, "mousewheel-page-height"), "var-init");
      delta *= cc11001100_hook("delta", pageHeight, "assign");
      deltaY *= cc11001100_hook("deltaY", pageHeight, "assign");
      deltaX *= cc11001100_hook("deltaX", pageHeight, "assign");
    }
    absDelta = cc11001100_hook("absDelta", Math.max(Math.abs(deltaY), Math.abs(deltaX)), "assign");
    if (!lowestDelta || absDelta < lowestDelta) {
      lowestDelta = cc11001100_hook("lowestDelta", absDelta, "assign");
      if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
        lowestDelta /= cc11001100_hook("lowestDelta", 40, "assign");
      }
    }
    if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
      delta /= cc11001100_hook("delta", 40, "assign");
      deltaX /= cc11001100_hook("deltaX", 40, "assign");
      deltaY /= cc11001100_hook("deltaY", 40, "assign");
    }
    delta = cc11001100_hook("delta", Math[delta >= 1 ? "floor" : "ceil"](delta / lowestDelta), "assign");
    deltaX = cc11001100_hook("deltaX", Math[deltaX >= 1 ? "floor" : "ceil"](deltaX / lowestDelta), "assign");
    deltaY = cc11001100_hook("deltaY", Math[deltaY >= 1 ? "floor" : "ceil"](deltaY / lowestDelta), "assign");
    event.deltaX = cc11001100_hook("event.deltaX", deltaX, "assign");
    event.deltaY = cc11001100_hook("event.deltaY", deltaY, "assign");
    event.deltaFactor = cc11001100_hook("event.deltaFactor", lowestDelta, "assign");
    event.deltaMode = cc11001100_hook("event.deltaMode", 0, "assign");
    args.unshift(event, delta, deltaX, deltaY);
    if (nullLowestDeltaTimeout) {
      clearTimeout(nullLowestDeltaTimeout);
    }
    nullLowestDeltaTimeout = cc11001100_hook("nullLowestDeltaTimeout", setTimeout(nullLowestDelta, 200), "assign");
    return ($.event.dispatch || $.event.handle).apply(this, args);
  }
  function nullLowestDelta() {
    lowestDelta = cc11001100_hook("lowestDelta", null, "assign");
  }
  function shouldAdjustOldDeltas(orgEvent, absDelta) {
    cc11001100_hook("orgEvent", orgEvent, "function-parameter");
    cc11001100_hook("absDelta", absDelta, "function-parameter");
    return special.settings.adjustOldDeltas && orgEvent.type === "mousewheel" && absDelta % 120 === 0;
  }
})();
$.extend({
  cookie: {
    _isValidKey: function (key) {
      return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(key);
    },
    getRaw: function (key) {
      if (this._isValidKey(key)) {
        var reg = cc11001100_hook("reg", new RegExp("(^| )" + key + "=([^;]*)(;|$)"), "var-init"),
          result = cc11001100_hook("result", reg.exec(document.cookie), "var-init");
        if (result) {
          return result[2] || null;
        }
      }
      return null;
    },
    get: function (key) {
      var value = cc11001100_hook("value", this.getRaw(key), "var-init");
      if ("string" == typeof value) {
        value = cc11001100_hook("value", decodeURIComponent(value), "assign");
        return value;
      }
      return null;
    },
    setRaw: function (key, value, options) {
      if (!this._isValidKey(key)) {
        return;
      }
      options = cc11001100_hook("options", options || {}, "assign");
      var expires = cc11001100_hook("expires", options.expires, "var-init");
      if ("number" == typeof options.expires) {
        expires = cc11001100_hook("expires", new Date(), "assign");
        expires.setTime(expires.getTime() + options.expires);
      }
      document.cookie = cc11001100_hook("document.cookie", key + "=" + value + (options.path ? "; path=" + options.path : "") + (expires ? "; expires=" + expires.toGMTString() : "") + (options.domain ? "; domain=" + options.domain : "") + (options.secure ? "; secure" : ""), "assign");
    },
    remove: function (key, options) {
      options = cc11001100_hook("options", options || {}, "assign");
      options.expires = cc11001100_hook("options.expires", new Date(0), "assign");
      this.setRaw(key, "", options);
    },
    set: function (key, value, options) {
      this.setRaw(key, encodeURIComponent(value), options);
    }
  }
});
(function (F, baseUrl) {
  function forEach(o, fn) {
    cc11001100_hook("o", o, "function-parameter");
    cc11001100_hook("fn", fn, "function-parameter");
    if (o instanceof Array) {
      for (var i = cc11001100_hook("i", 0, "var-init"), l = cc11001100_hook("l", o.length, "var-init"); i < l; i++) {
        if (fn.call(o[i], o[i], i) === false) {
          return;
        }
      }
    } else {
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          if (fn.call(o[i], o[i], i) === false) {
            return;
          }
        }
      }
    }
  }
  F.each = cc11001100_hook("F.each", forEach, "assign");
  function Module(path, name) {
    cc11001100_hook("path", path, "function-parameter");
    cc11001100_hook("name", name, "function-parameter");
    this.svnMod = cc11001100_hook("this.svnMod", "", "assign");
    this.name = cc11001100_hook("this.name", null, "assign");
    this.path = cc11001100_hook("this.path", path, "assign");
    this.fn = cc11001100_hook("this.fn", null, "assign");
    this.exports = cc11001100_hook("this.exports", {}, "assign");
    this._loaded = cc11001100_hook("this._loaded", false, "assign");
    this._requiredStack = cc11001100_hook("this._requiredStack", [], "assign");
    this._readyStack = cc11001100_hook("this._readyStack", [], "assign");
    Module.cache[this.path] = cc11001100_hook("Module.cache[this.path]", this, "assign");
    if (name) {
      if (name.charAt(0) !== ".") {
        var segs = cc11001100_hook("segs", name.split(":"), "var-init");
        if (segs.length > 1) {
          this.svnMod = cc11001100_hook("this.svnMod", segs[0], "assign");
          this.name = cc11001100_hook("this.name", segs[1], "assign");
        } else {
          this.name = cc11001100_hook("this.name", name, "assign");
        }
      }
    }
    if (!this.svnMod) {
      this.svnMod = cc11001100_hook("this.svnMod", this.path.split("/js/")[0].substr(1), "assign");
    }
    this.type = cc11001100_hook("this.type", "js", "assign");
    this.getKey = cc11001100_hook("this.getKey", function () {
      return this.svnMod + ":" + this.name;
    }, "assign");
    this._info = cc11001100_hook("this._info", {}, "assign");
  }
  Module.currentPath = cc11001100_hook("Module.currentPath", "", "assign");
  Module.loadedPaths = cc11001100_hook("Module.loadedPaths", {}, "assign");
  Module.loadingPaths = cc11001100_hook("Module.loadingPaths", {}, "assign");
  Module.cache = cc11001100_hook("Module.cache", {}, "assign");
  Module.paths = cc11001100_hook("Module.paths", {}, "assign");
  Module.handlers = cc11001100_hook("Module.handlers", [], "assign");
  Module.moduleFileMap = cc11001100_hook("Module.moduleFileMap", {}, "assign");
  Module.requiredPaths = cc11001100_hook("Module.requiredPaths", {}, "assign");
  Module.lazyLoadPaths = cc11001100_hook("Module.lazyLoadPaths", {}, "assign");
  Module.services = cc11001100_hook("Module.services", {}, "assign");
  Module.isPathsLoaded = cc11001100_hook("Module.isPathsLoaded", function (paths) {
    var r = cc11001100_hook("r", true, "var-init");
    forEach(paths, function (path) {
      if (!(path in Module.loadedPaths)) {
        return r = cc11001100_hook("r", false, "assign");
      }
    });
    return r;
  }, "assign");
  Module.require = cc11001100_hook("Module.require", function (name, svnMod) {
    if (name.search(":") < 0) {
      if (!svnMod) {
        svnMod = cc11001100_hook("svnMod", "superman", "assign");
        if (Module.currentPath) {
          svnMod = cc11001100_hook("svnMod", Module.currentPath.split("/js/")[0].substr(1), "assign");
        }
      }
      name = cc11001100_hook("name", svnMod + ":" + name, "assign");
    }
    var mod = cc11001100_hook("mod", Module.get(name, Module.currentPath), "var-init");
    if (mod.type == "css") return;
    if (mod) {
      if (!mod._inited) {
        mod._inited = cc11001100_hook("mod._inited", true, "assign");
        var result,
          modSvnMod = cc11001100_hook("modSvnMod", mod.svnMod, "var-init");
        if (result = cc11001100_hook("result", mod.fn.call(null, function (n) {
          return Module.require(n, modSvnMod);
        }, mod.exports, new Context(mod.name, modSvnMod)), "assign")) {
          mod.exports = cc11001100_hook("mod.exports", result, "assign");
        }
      }
      return mod.exports;
    } else {
      throw new Error('Module "' + name + '" not found!');
    }
  }, "assign");
  Module.baseUrl = cc11001100_hook("Module.baseUrl", baseUrl ? baseUrl[baseUrl.length - 1] == "/" ? baseUrl : baseUrl + "/" : "/", "assign");
  Module.getBasePath = cc11001100_hook("Module.getBasePath", function (name) {
    var prefix, i;
    if ((i = cc11001100_hook("i", name.indexOf("/"), "assign")) !== -1) {
      prefix = cc11001100_hook("prefix", name.slice(0, i), "assign");
    }
    if (prefix && prefix in Module.paths) {
      return Module.paths[prefix];
    }
    return Module.baseUrl;
  }, "assign");
  Module.getJsPath = cc11001100_hook("Module.getJsPath", function (name, basePath) {
    if (name.charAt(0) === ".") {
      basePath = cc11001100_hook("basePath", basePath.replace(/\/[^\/]+\/[^\/]+$/, ""), "assign");
      if (name.search("./") === 0) {
        name = cc11001100_hook("name", name.substr(2), "assign");
      }
      var depth = cc11001100_hook("depth", 0, "var-init");
      name = cc11001100_hook("name", name.replace(/^(\.\.\/)+/g, function (x) {
        depth = cc11001100_hook("depth", x.length / 3, "assign");
        return "";
      }), "assign");
      while (depth > 0) {
        basePath = cc11001100_hook("basePath", basePath.substr(0, basePath.lastIndexOf("/")), "assign");
        depth--;
      }
      return basePath + "/" + name + "/" + name.substr(name.lastIndexOf("/") + 1) + ".js";
    } else {
      var svnMod, prefix, i1, i2, fileName, path;
      if (name.search(":") >= 0) {
        var arr = cc11001100_hook("arr", name.split(":"), "var-init");
        svnMod = cc11001100_hook("svnMod", arr[0], "assign");
        name = cc11001100_hook("name", arr[1], "assign");
      } else if (basePath) {
        svnMod = cc11001100_hook("svnMod", basePath.split("/")[1], "assign");
      }
      svnMod = cc11001100_hook("svnMod", svnMod || "superman", "assign");
      var isCSS = cc11001100_hook("isCSS", /\.css(?:\?|$)/i.test(name), "var-init");
      if (isCSS) {
        if (Module.moduleFileMap[svnMod][name]) {
          F._useConfig && (name = cc11001100_hook("name", Module.moduleFileMap[svnMod][name], "assign"));
        } else {
          !F._useConfig && alert(name + "没有配置在config.js中");
        }
      }
      var name = cc11001100_hook("name", fileName = cc11001100_hook("fileName", name, "assign"), "var-init");
      var libPath = cc11001100_hook("libPath", Module.getBasePath(name), "var-init");
      if ((i1 = cc11001100_hook("i1", name.indexOf("/"), "assign")) !== -1) {
        prefix = cc11001100_hook("prefix", name.slice(0, i1), "assign");
        i2 = cc11001100_hook("i2", name.lastIndexOf("/"), "assign");
        fileName = cc11001100_hook("fileName", name.slice(i2 + 1), "assign");
      }
      if (prefix && prefix in Module.paths) {
        name = cc11001100_hook("name", name.slice(i1 + 1), "assign");
      }
      path = cc11001100_hook("path", libPath + svnMod + "/js/" + name + ".js", "assign");
      return path;
    }
  }, "assign");
  Module.get = cc11001100_hook("Module.get", function (name, basePath) {
    var path = cc11001100_hook("path", Module.getJsPath(name, basePath), "var-init");
    if (Module.cache[path]) {
      return Module.cache[path];
    }
    return new Module(path, name);
  }, "assign");
  Module.prototype = cc11001100_hook("Module.prototype", {
    load: function () {
      Module.loadingPaths[this.path] = cc11001100_hook("Module.loadingPaths[this.path]", true, "assign");
      var svnMod = cc11001100_hook("svnMod", this.svnMod || "superman", "var-init"),
        path = cc11001100_hook("path", s_domain.staticUrl + "static/" + svnMod + "/", "var-init");
      var _this = cc11001100_hook("_this", this, "var-init");
      var isCSS = cc11001100_hook("isCSS", /\.css(?:\?|$)/i.test(this.name), "var-init");
      this.type = cc11001100_hook("this.type", isCSS ? "css" : "js", "assign");
      var modname = cc11001100_hook("modname", "/" + this.type + "/" + Module.moduleFileMap[svnMod][this.name], "var-init");
      if (F._useConfig && Module.moduleFileMap[svnMod][this.name]) {
        path += cc11001100_hook("path", this.type + "/" + Module.moduleFileMap[svnMod][this.name], "assign");
      } else {
        path += cc11001100_hook("path", this.type + "/" + this.name + (isCSS ? "" : ".js"), "assign");
      }
      if ($.inArray(modname, F._firstScreenCSS) >= 0 || F._useConfig && $.inArray(modname, F._firstScreenJS) >= 0) {
        if (isCSS) {
          setTimeout(function () {
            _this._loaded = cc11001100_hook("_this._loaded", true, "assign");
            _this.ready();
          }, 1);
        } else {
          _this._loaded = cc11001100_hook("_this._loaded", true, "assign");
          _this.ready();
        }
      } else {
        var startTime = cc11001100_hook("startTime", new Date().getTime(), "var-init");
        Script.create({
          src: cc11001100_hook("src", path, "object-key-init"),
          type: cc11001100_hook("type", this.type, "object-key-init"),
          loaded: function () {
            _this._info.loadedTime = cc11001100_hook("_this._info.loadedTime", new Date().getTime() - startTime, "assign");
            if (_this.type == "css") {
              _this._loaded = cc11001100_hook("_this._loaded", true, "assign");
              _this.ready();
            }
          }
        });
      }
    },
    lazyLoad: function () {
      var name = cc11001100_hook("name", this.name, "var-init");
      if (Module.lazyLoadPaths[this.getKey()]) {
        this.define();
        delete Module.lazyLoadPaths[this.getKey()];
      } else {
        if (this.exist()) {
          return;
        }
        Module.requiredPaths[this.getKey()] = cc11001100_hook("Module.requiredPaths[this.getKey()]", true, "assign");
        this.load();
      }
    },
    ready: function (fn, isRequired) {
      var stack = cc11001100_hook("stack", isRequired ? this._requiredStack : this._readyStack, "var-init");
      if (fn) {
        if (this._loaded) {
          fn();
        } else {
          stack.push(fn);
        }
      } else {
        Module.loadedPaths[this.path] = cc11001100_hook("Module.loadedPaths[this.path]", true, "assign");
        delete Module.loadingPaths[this.path];
        this._loaded = cc11001100_hook("this._loaded", true, "assign");
        Module.currentPath = cc11001100_hook("Module.currentPath", this.path, "assign");
        if (this._readyStack && this._readyStack.length > 0) {
          this._inited = cc11001100_hook("this._inited", true, "assign");
          var result,
            modSvnMod = cc11001100_hook("modSvnMod", this.svnMod, "var-init");
          if (result = cc11001100_hook("result", this.fn.call(null, function (n) {
            return Module.require(n, modSvnMod);
          }, this.exports, new Context(this.name, modSvnMod)), "assign")) {
            this.exports = cc11001100_hook("this.exports", result, "assign");
          }
          forEach(this._readyStack, function (func) {
            func();
          });
          delete this._readyStack;
        }
        if (this._requiredStack && this._requiredStack.length > 0) {
          forEach(this._requiredStack, function (func) {
            func();
          });
          delete this._requiredStack;
        }
      }
    },
    define: function () {
      var _this = cc11001100_hook("_this", this, "var-init"),
        deps = cc11001100_hook("deps", this.deps, "var-init"),
        path = cc11001100_hook("path", this.path, "var-init"),
        depPaths = cc11001100_hook("depPaths", [], "var-init");
      if (!deps) {
        deps = cc11001100_hook("deps", this.getDependents(), "assign");
      }
      if (deps.length) {
        forEach(deps, function (d) {
          depPaths.push(Module.getJsPath(d, _this.path));
        });
        forEach(deps, function (d) {
          var mod = cc11001100_hook("mod", Module.get(d, _this.path), "var-init");
          mod.ready(function () {
            if (Module.isPathsLoaded(depPaths)) {
              _this.ready();
            }
          }, true);
          mod.lazyLoad();
        });
      } else {
        this.ready();
      }
    },
    exist: function () {
      var path = cc11001100_hook("path", this.path, "var-init");
      return path in Module.loadedPaths || path in Module.loadingPaths;
    },
    getDependents: function () {
      var _this = cc11001100_hook("_this", this, "var-init");
      var str = cc11001100_hook("str", this.fn.toString(), "var-init");
      var req = cc11001100_hook("req", str.match(/function\s*\(([^,]*),/i), "var-init");
      var reg = cc11001100_hook("reg", new RegExp("[^.]\\b" + req[1] + "\\(\\s*('|\")([^()\"']*)('|\")\\s*\\)", "g"), "var-init");
      var deps = cc11001100_hook("deps", str.match(reg), "var-init");
      var depsr = cc11001100_hook("depsr", [], "var-init");
      if (deps) {
        forEach(deps, function (d, i) {
          depsr[i] = cc11001100_hook("depsr[i]", d.substr(req[1].length + 3).slice(0, -2), "assign");
        });
      }
      return depsr;
    }
  }, "assign");
  var Script = cc11001100_hook("Script", {
    create: function (opt) {
      var src = cc11001100_hook("src", opt.src, "var-init");
      if (src in this._paths) {
        return;
      }
      this._paths[src] = cc11001100_hook("this._paths[src]", true, "assign");
      forEach(this._rules, function (modify) {
        src = cc11001100_hook("src", modify.call(null, src), "assign");
      });
      assetOnload(src, opt.type, opt.loaded);
    },
    _paths: {},
    _rules: cc11001100_hook("_rules", [], "object-key-init"),
    addPathRule: function (modify) {
      this._rules.push(modify);
    }
  }, "var-init");
  function createNode(src, type) {
    cc11001100_hook("src", src, "function-parameter");
    cc11001100_hook("type", type, "function-parameter");
    var isCSS = cc11001100_hook("isCSS", type == "css", "var-init");
    var node = cc11001100_hook("node", document.createElement(isCSS ? "link" : "script"), "var-init");
    return node;
  }
  function assetOnload(src, type, callback, reload) {
    cc11001100_hook("src", src, "function-parameter");
    cc11001100_hook("type", type, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    cc11001100_hook("reload", reload, "function-parameter");
    var node = cc11001100_hook("node", createNode(src, type), "var-init");
    if (node.nodeName === "SCRIPT") {
      scriptOnload(node, cb);
    } else {
      styleOnload(node, cb);
    }
    var timer = cc11001100_hook("timer", setTimeout(function () {
      throw new Error("load " + type + " timeout : " + src);
      !reload && assetOnload(src + "?v=" + new Date().valueOf(), type, cb, true);
    }, F._loadScriptTimeout || 1e4), "var-init");
    function cb() {
      if (!cb.isCalled) {
        cb.isCalled = cc11001100_hook("cb.isCalled", true, "assign");
        clearTimeout(timer);
        callback && callback();
      }
    }
    var head = cc11001100_hook("head", document.getElementsByTagName("head")[0], "var-init");
    if (type == "css") {
      node.rel = cc11001100_hook("node.rel", "stylesheet", "assign");
      node.href = cc11001100_hook("node.href", src, "assign");
      head.appendChild(node);
    } else {
      node.type = cc11001100_hook("node.type", "text/javascript", "assign");
      node.charset = cc11001100_hook("node.charset", "utf-8", "assign");
      node.src = cc11001100_hook("node.src", src, "assign");
      head.insertBefore(node, head.firstChild);
    }
  }
  function scriptOnload(node, callback) {
    cc11001100_hook("node", node, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    node.onload = cc11001100_hook("node.onload", node.onerror = cc11001100_hook("node.onerror", node.onreadystatechange = cc11001100_hook("node.onreadystatechange", function () {
      if (/loaded|complete|undefined/.test(node.readyState)) {
        node.onload = cc11001100_hook("node.onload", node.onerror = cc11001100_hook("node.onerror", node.onreadystatechange = cc11001100_hook("node.onreadystatechange", null, "assign"), "assign"), "assign");
        if (node.parentNode) {
          node.parentNode.removeChild(node);
          try {
            if (node.clearAttributes) {
              node.clearAttributes();
            } else {
              for (var p in node) delete node[p];
            }
          } catch (x) {}
        }
        node = cc11001100_hook("node", undefined, "assign");
        callback && callback();
      }
    }, "assign"), "assign"), "assign");
  }
  function styleOnload(node, callback) {
    cc11001100_hook("node", node, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (node.attachEvent) {
      node.attachEvent("onload", callback);
    } else {
      setTimeout(function () {
        poll(node, callback);
      }, 0);
    }
  }
  function poll(node, callback) {
    cc11001100_hook("node", node, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    if (callback && callback.isCalled) {
      return;
    }
    var isLoaded;
    var UA = cc11001100_hook("UA", navigator.userAgent, "var-init");
    var isWebKit = cc11001100_hook("isWebKit", ~UA.indexOf("AppleWebKit"), "var-init");
    var isOpera = cc11001100_hook("isOpera", ~UA.indexOf("Opera"), "var-init");
    if (isWebKit || isOpera) {
      if (node["sheet"]) {
        isLoaded = cc11001100_hook("isLoaded", true, "assign");
      }
    } else if (node["sheet"]) {
      try {
        if (node["sheet"].cssRules) {
          isLoaded = cc11001100_hook("isLoaded", true, "assign");
        }
      } catch (ex) {
        if (ex.name === "SecurityError" || ex.name === "NS_ERROR_DOM_SECURITY_ERR") {
          isLoaded = cc11001100_hook("isLoaded", true, "assign");
        }
      }
    }
    setTimeout(function () {
      if (isLoaded) {
        callback && callback();
      } else {
        poll(node, callback);
      }
    }, 1);
  }
  F.version = cc11001100_hook("F.version", "1.0", "assign");
  F.use = cc11001100_hook("F.use", function (names, fn) {
    if (typeof names === "string") {
      names = cc11001100_hook("names", [names], "assign");
    }
    var args = cc11001100_hook("args", [], "var-init");
    var flags = cc11001100_hook("flags", [], "var-init");
    forEach(names, function (name, i) {
      flags[i] = cc11001100_hook("flags[i]", false, "assign");
    });
    forEach(names, function (name, i) {
      var mod = cc11001100_hook("mod", Module.get(name), "var-init"),
        modLoaded = cc11001100_hook("modLoaded", mod._loaded, "var-init");
      mod.ready(function () {
        var modArg = cc11001100_hook("modArg", mod.exports || {}, "var-init");
        modArg._INFO = cc11001100_hook("modArg._INFO", mod._info, "assign");
        if (modArg._INFO) {
          modArg._INFO.isNew = cc11001100_hook("modArg._INFO.isNew", !modLoaded, "assign");
        }
        args[i] = cc11001100_hook("args[i]", modArg, "assign");
        flags[i] = cc11001100_hook("flags[i]", true, "assign");
        var done = cc11001100_hook("done", true, "var-init");
        forEach(flags, function (f) {
          if (f === false) {
            return done = cc11001100_hook("done", false, "assign");
          }
        });
        if (fn && done) {
          fn.apply(null, args);
        }
      });
      mod.lazyLoad();
    });
  }, "assign");
  F.module = cc11001100_hook("F.module", function (name, fn, deps) {
    var mod = cc11001100_hook("mod", Module.get(name), "var-init");
    mod.fn = cc11001100_hook("mod.fn", fn, "assign");
    mod.deps = cc11001100_hook("mod.deps", deps, "assign");
    if (Module.requiredPaths[mod.getKey()]) {
      mod.define();
    } else {
      Module.lazyLoadPaths[mod.getKey()] = cc11001100_hook("Module.lazyLoadPaths[mod.getKey()]", true, "assign");
    }
  }, "assign");
  F.pathRule = cc11001100_hook("F.pathRule", function (modify) {
    Script.addPathRule(modify);
  }, "assign");
  F._addPath = cc11001100_hook("F._addPath", function (prefix, path) {
    if (path.slice(-1) !== "/") {
      path += cc11001100_hook("path", "/", "assign");
    }
    if (prefix in Module.paths) {
      throw new Error(prefix + " has already in Module.paths");
    } else {
      Module.paths[prefix] = cc11001100_hook("Module.paths[prefix]", path, "assign");
    }
  }, "assign");
  var _curSvnMod = cc11001100_hook("_curSvnMod", "superman", "var-init");
  F._setMod = cc11001100_hook("F._setMod", function (svnMod) {
    _curSvnMod = cc11001100_hook("_curSvnMod", svnMod || "superman", "assign");
  }, "assign");
  F._fileMap = cc11001100_hook("F._fileMap", function (path, names) {
    if (typeof path === "object") {
      forEach(path, function (ns, p) {
        F._fileMap(p, ns);
      });
    } else {
      var svnMod = cc11001100_hook("svnMod", _curSvnMod, "var-init");
      if (typeof names === "string") {
        names = cc11001100_hook("names", [names], "assign");
      }
      path = cc11001100_hook("path", path.indexOf("js/") == 1 ? path.substr(4) : path, "assign");
      path = cc11001100_hook("path", path.indexOf("css/") == 1 ? path.substr(5) : path, "assign");
      var modMap = cc11001100_hook("modMap", Module.moduleFileMap[svnMod], "var-init");
      if (!modMap) {
        modMap = cc11001100_hook("modMap", {}, "assign");
      }
      forEach(names, function (name) {
        if (!modMap[name]) modMap[name] = cc11001100_hook("modMap[name]", path, "assign");
      });
      Module.moduleFileMap[svnMod] = cc11001100_hook("Module.moduleFileMap[svnMod]", modMap, "assign");
    }
  }, "assign");
  F._eventMap = cc11001100_hook("F._eventMap", {}, "assign");
  F.call = cc11001100_hook("F.call", function (mod, fn, params) {
    var realArgs = cc11001100_hook("realArgs", [], "var-init");
    for (var i = cc11001100_hook("i", 2, "var-init"), len = cc11001100_hook("len", arguments.length, "var-init"); i < len; i++) {
      realArgs.push(arguments[i]);
    }
    F.use(mod, function (m) {
      var fns = cc11001100_hook("fns", fn.split("."), "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"), l = cc11001100_hook("l", fns.length, "var-init"); i < l; i++) {
        m = cc11001100_hook("m", m[fns[i]], "assign");
      }
      if (m) {
        m.apply(this, realArgs);
      }
    });
  }, "assign");
  F._setContext = cc11001100_hook("F._setContext", function (context) {
    if (typeof context === "object") {
      forEach(context, function (a, b) {
        Context.prototype[b] = cc11001100_hook("Context.prototype[b]", Module.require(a), "assign");
      });
    }
  }, "assign");
  F._setContextMethod = cc11001100_hook("F._setContextMethod", function (methodName, method) {
    Context.prototype[methodName] = cc11001100_hook("Context.prototype[methodName]", method, "assign");
  }, "assign");
  var Context = function (modName, svnMod) {
    this.modName = cc11001100_hook("this.modName", modName, "assign");
    this.svnMod = cc11001100_hook("this.svnMod", svnMod, "assign");
  };
  Context.prototype = cc11001100_hook("Context.prototype", {
    domain: cc11001100_hook("domain", s_domain, "object-key-init"),
    session: cc11001100_hook("session", s_session, "object-key-init"),
    use: function (names, fn) {
      if (typeof names === "string") {
        names = cc11001100_hook("names", [names], "assign");
      }
      for (var i = cc11001100_hook("i", names.length - 1, "var-init"); i >= 0; i--) {
        names[i] = cc11001100_hook("names[i]", this.svnMod + ":" + names[i], "assign");
      }
      F.use(names, fn);
    }
  }, "assign");
  F._Context = cc11001100_hook("F._Context", Context, "assign");
  F.addLog = cc11001100_hook("F.addLog", function (modName, logCfg) {
    F.use("superman:lib/log", function (log) {
      log.defaultLog(modName, logCfg);
    });
  }, "assign");
  F.fire = cc11001100_hook("F.fire", function (modName, evtName, evtArgs) {
    F.use("superman:lib/mod_evt", function (evt) {
      evt.fire(modName, evtName, evtArgs);
    });
  }, "assign");
  F._defService = cc11001100_hook("F._defService", function (svnMod, srvObj) {
    if (svnMod) {
      var srvPool = cc11001100_hook("srvPool", Module.services[svnMod], "var-init");
      srvPool = cc11001100_hook("srvPool", srvPool || {}, "assign");
      forEach(srvObj, function (obj, key) {
        srvPool[key] = cc11001100_hook("srvPool[key]", obj, "assign");
      });
      Module.services[svnMod] = cc11001100_hook("Module.services[svnMod]", srvPool, "assign");
    }
  }, "assign");
  F.getService = cc11001100_hook("F.getService", function (svnMod, srvKey, fn) {
    var srvPool = cc11001100_hook("srvPool", Module.services[svnMod], "var-init");
    if (srvPool) {
      var srvMod = cc11001100_hook("srvMod", srvPool[srvKey], "var-init");
      if (srvMod) {
        F.use(svnMod + ":" + srvMod, fn);
      } else {
        throw new Error(svnMod + " mod didn't provide service " + srvKey);
      }
    } else {
      throw new Error(svnMod + " mod didn't define any services");
    }
  }, "assign");
  F.inherit = cc11001100_hook("F.inherit", function () {
    var args = cc11001100_hook("args", Array.prototype.slice.call(arguments), "var-init");
    var subclass = cc11001100_hook("subclass", args[0], "var-init");
    var subpro = cc11001100_hook("subpro", subclass.prototype, "var-init");
    var oinitialize = cc11001100_hook("oinitialize", subpro.initialize, "var-init");
    var initializes = cc11001100_hook("initializes", [], "var-init");
    var index = cc11001100_hook("index", 1, "var-init");
    var superclass;
    var superpro;
    while (superclass = cc11001100_hook("superclass", args[index++], "assign")) {
      superpro = cc11001100_hook("superpro", $.isFunction(superclass) ? superclass.prototype : $.isPlainObject(superclass) ? superclass : null, "assign");
      if (superpro) {
        $.isFunction(superpro.initialize) && initializes.push(superpro.initialize);
        for (var key in superpro) {
          if (superpro.hasOwnProperty(key) && key !== "initialize") {
            subpro[key] = cc11001100_hook("subpro[key]", superpro[key], "assign");
          }
        }
      }
    }
    if (initializes.length) {
      oinitialize && initializes.push(oinitialize);
      subpro.initialize = cc11001100_hook("subpro.initialize", function () {
        var args = cc11001100_hook("args", arguments, "var-init");
        var len = cc11001100_hook("len", initializes.length, "var-init");
        for (var idx = cc11001100_hook("idx", 0, "var-init"); idx < len; idx++) {
          initializes[idx].apply(this, args);
        }
      }, "assign");
    }
    return subclass;
  }, "assign");
  F.mix = cc11001100_hook("F.mix", $.extend, "assign");
})(function () {
  return window.F = cc11001100_hook("window.F", {}, "assign");
}());
F.module("superman:lib/sbase", function (require, exports, ctx) {
  var S = cc11001100_hook("S", exports, "var-init");
});
F.use("superman:lib/sbase", function (S) {
  S.BaseClass = cc11001100_hook("S.BaseClass", function () {
    var me = cc11001100_hook("me", this, "var-init"),
      _events = cc11001100_hook("_events", {}, "var-init");
    me.on = cc11001100_hook("me.on", function (eventName, handler) {
      var arr = cc11001100_hook("arr", _events[eventName], "var-init");
      if (!arr) {
        arr = cc11001100_hook("arr", _events[eventName] = cc11001100_hook("_events[eventName]", [], "assign"), "assign");
      }
      arr.push(handler);
    }, "assign");
    me.un = cc11001100_hook("me.un", function (eventName, handler) {
      if (!eventName) {
        _events = cc11001100_hook("_events", {}, "assign");
        return;
      }
      var arr = cc11001100_hook("arr", _events[eventName], "var-init");
      if (arr) {
        if (handler) {
          $.each(arr, function (i, h) {
            if (h == handler) {
              arr.splice(i, 1);
              return false;
            }
          });
        } else {
          _events[eventName] = cc11001100_hook("_events[eventName]", [], "assign");
        }
      }
    }, "assign");
    me.fire = cc11001100_hook("me.fire", function (eventName, args) {
      var arr = cc11001100_hook("arr", _events[eventName], "var-init");
      if (arr) {
        args = cc11001100_hook("args", args || {}, "assign");
        $.each(arr, function (idx, handler) {
          args._result = cc11001100_hook("args._result", handler.call(me, $.extend({
            _ctx: {
              src: cc11001100_hook("src", me, "object-key-init")
            }
          }, args)), "assign");
        });
      }
    }, "assign");
  }, "assign");
  var Class = cc11001100_hook("Class", {}, "var-init");
  Class.create = cc11001100_hook("Class.create", function (cls, superClass) {
    superClass = cc11001100_hook("superClass", superClass || S.BaseClass, "assign");
    return function Class() {
      superClass.apply(this, arguments);
      var bs = cc11001100_hook("bs", $.extend({}, this), "var-init");
      cls.apply(this, arguments);
      this._super = cc11001100_hook("this._super", bs, "assign");
    };
  }, "assign");
  S.Class = cc11001100_hook("S.Class", Class, "assign");
});
F.module("lib/mod_evt", function (require, exports, ctx) {
  var handlers = cc11001100_hook("handlers", {}, "var-init");
  var fire = function (modName, eventName, eventArgs) {
    var tmpArr = cc11001100_hook("tmpArr", modName.split("/"), "var-init"),
      mod = cc11001100_hook("mod", tmpArr[0], "var-init"),
      submod = cc11001100_hook("submod", tmpArr[1], "var-init"),
      key = cc11001100_hook("key", mod + "-" + eventName, "var-init"),
      eventResult = cc11001100_hook("eventResult", {
        handlerCount: cc11001100_hook("handlerCount", 0, "object-key-init"),
        returnValue: cc11001100_hook("returnValue", true, "object-key-init")
      }, "var-init");
    if (handlers[key]) {
      eventArgs = cc11001100_hook("eventArgs", eventArgs || {}, "assign");
      var hs = cc11001100_hook("hs", handlers[key], "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", hs.length, "var-init"); i < len; i++) {
        var h = cc11001100_hook("h", hs[i], "var-init");
        if (submod && h.submod && submod != h.submod) continue;
        var evtArgs = cc11001100_hook("evtArgs", {
          _MOD: cc11001100_hook("_MOD", mod, "object-key-init"),
          _EVENT_NAME: cc11001100_hook("_EVENT_NAME", eventName, "object-key-init"),
          _SUBMOD: cc11001100_hook("_SUBMOD", submod || "", "object-key-init")
        }, "var-init");
        for (var k in eventArgs) {
          evtArgs[k] = cc11001100_hook("evtArgs[k]", eventArgs[k], "assign");
        }
        var rValue = cc11001100_hook("rValue", h.hnd(evtArgs), "var-init");
        if (rValue === false) {
          eventResult.returnValue = cc11001100_hook("eventResult.returnValue", false, "assign");
        }
      }
      eventResult.handlerCount = cc11001100_hook("eventResult.handlerCount", hs.length, "assign");
    }
    return eventResult;
  };
  var addEvent = function (modName, eventName, handler) {
    var tmpArr = cc11001100_hook("tmpArr", modName.split("/"), "var-init"),
      mod = cc11001100_hook("mod", tmpArr[0], "var-init"),
      submod = cc11001100_hook("submod", tmpArr[1], "var-init"),
      key = cc11001100_hook("key", mod + "-" + eventName, "var-init");
    h = cc11001100_hook("h", {
      hnd: cc11001100_hook("hnd", handler, "object-key-init"),
      mod: cc11001100_hook("mod", mod, "object-key-init"),
      submod: cc11001100_hook("submod", submod, "object-key-init")
    }, "assign");
    if (handlers[key]) {
      handlers[key].push(h);
    } else {
      handlers[key] = cc11001100_hook("handlers[key]", [h], "assign");
    }
  };
  var on = function (modName, evtNames, handler) {
    var mType = cc11001100_hook("mType", Object.prototype.toString.call(modName), "var-init");
    if (mType == "[object String]") {
      var eType = cc11001100_hook("eType", Object.prototype.toString.call(evtNames), "var-init");
      if (eType == "[object String]") {
        addEvent(modName, evtNames, handler);
      } else if (eType == "[object Array]") {
        for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", evtNames.length, "var-init"); i < len; i++) {
          addEvent(modName, evtNames[i], handler);
        }
      }
    } else if (mType == "[object Array]") {
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", modName.length, "var-init"); i < len; i++) {
        on(modName[i], evtNames, handler);
      }
    }
  };
  var un = function (modName, eventName, handler) {
    var tmpArr = cc11001100_hook("tmpArr", modName.split("/"), "var-init"),
      mod = cc11001100_hook("mod", tmpArr[0], "var-init"),
      submod = cc11001100_hook("submod", tmpArr[1], "var-init"),
      key = cc11001100_hook("key", mod + "-" + eventName, "var-init");
    if (handlers[key]) {
      var hs = cc11001100_hook("hs", handlers[key], "var-init"),
        newHs = cc11001100_hook("newHs", [], "var-init");
      for (var i = cc11001100_hook("i", 0, "var-init"), len = cc11001100_hook("len", hs.length, "var-init"); i < len; i++) {
        var h = cc11001100_hook("h", hs[i], "var-init");
        if (h.hnd != handler) newHs.push(h);
      }
      handlers[key] = cc11001100_hook("handlers[key]", newHs, "assign");
    }
  };
  exports.fire = cc11001100_hook("exports.fire", fire, "assign");
  exports.on = cc11001100_hook("exports.on", on, "assign");
  exports.un = cc11001100_hook("exports.un", un, "assign");
  exports.handlers = cc11001100_hook("exports.handlers", handlers, "assign");
});
F.module("lib/log", function (require, exports, ctx) {
  var S = cc11001100_hook("S", ctx.base, "var-init");
  var buildInKeys = cc11001100_hook("buildInKeys", {
      m: cc11001100_hook("m", 1, "object-key-init"),
      mod: cc11001100_hook("mod", 1, "object-key-init"),
      submod: cc11001100_hook("submod", 1, "object-key-init"),
      evttype: cc11001100_hook("evttype", 1, "object-key-init"),
      mouse: cc11001100_hook("mouse", 1, "object-key-init"),
      initiator: cc11001100_hook("initiator", 1, "object-key-init"),
      portrait: cc11001100_hook("portrait", 1, "object-key-init"),
      glogid: cc11001100_hook("glogid", 1, "object-key-init"),
      slogid: cc11001100_hook("slogid", 1, "object-key-init"),
      type: cc11001100_hook("type", 1, "object-key-init"),
      pid: cc11001100_hook("pid", 1, "object-key-init"),
      logactid: cc11001100_hook("logactid", 1, "object-key-init")
    }, "var-init"),
    femods = cc11001100_hook("femods", {
      sys: cc11001100_hook("sys", 1, "object-key-init"),
      base: cc11001100_hook("base", 1, "object-key-init"),
      page: cc11001100_hook("page", 2, "object-key-init"),
      feed: cc11001100_hook("feed", 2, "object-key-init"),
      nav: cc11001100_hook("nav", 2, "object-key-init"),
      hot: cc11001100_hook("hot", 2, "object-key-init"),
      app: cc11001100_hook("app", 2, "object-key-init"),
      msg: cc11001100_hook("msg", 2, "object-key-init"),
      res: cc11001100_hook("res", 2, "object-key-init")
    }, "var-init"),
    bUtype = cc11001100_hook("bUtype", s_session.usertype, "var-init"),
    bSuperVer = cc11001100_hook("bSuperVer", "supernewplus", "var-init"),
    bPortrait = cc11001100_hook("bPortrait", s_session.portrait, "var-init"),
    bGlogId = cc11001100_hook("bGlogId", s_session.logId || "0", "var-init"),
    logPortrait = cc11001100_hook("logPortrait", s_session.logPortrait, "var-init"),
    logSrcDomain = cc11001100_hook("logSrcDomain", 0, "var-init"),
    ubslogactids = cc11001100_hook("ubslogactids", {}, "var-init");
  var getBuildInValues = function (mod, submod) {
    var values = cc11001100_hook("values", {
      mod: cc11001100_hook("mod", mod, "object-key-init"),
      submod: cc11001100_hook("submod", submod || "", "object-key-init"),
      utype: cc11001100_hook("utype", bUtype, "object-key-init"),
      superver: cc11001100_hook("superver", bSuperVer, "object-key-init"),
      portrait: cc11001100_hook("portrait", logPortrait, "object-key-init"),
      logPortrait: cc11001100_hook("logPortrait", bPortrait, "object-key-init"),
      glogid: cc11001100_hook("glogid", bGlogId, "object-key-init"),
      type: cc11001100_hook("type", 2011, "object-key-init"),
      pid: cc11001100_hook("pid", 315, "object-key-init"),
      isLogin: cc11001100_hook("isLogin", s_session.username ? 1 : 0, "object-key-init"),
      version: cc11001100_hook("version", "PCHome", "object-key-init"),
      terminal: cc11001100_hook("terminal", "PC", "object-key-init"),
      qid: cc11001100_hook("qid", s_session.seqId, "object-key-init"),
      sid: cc11001100_hook("sid", s_session.sid, "object-key-init"),
      super_frm: cc11001100_hook("super_frm", $.url.getQueryValue(location.href, "super_frm") || "", "object-key-init"),
      from_login: cc11001100_hook("from_login", $.url.getQueryValue(location.href, "from_login") || "", "object-key-init"),
      from_reg: cc11001100_hook("from_reg", $.url.getQueryValue(location.href, "from_reg") || "", "object-key-init"),
      query: cc11001100_hook("query", $("#kw").val(), "object-key-init"),
      curcard: cc11001100_hook("curcard", s_session.curmod, "object-key-init"),
      curcardtab: cc11001100_hook("curcardtab", $("#s_content_" + s_session.curmod + " " + ".s-xmancard").attr("data-curtab") || "", "object-key-init"),
      _r: cc11001100_hook("_r", Math.random(), "object-key-init")
    }, "var-init");
    return values;
  };
  var imgLogSrc = function () {
    return $.url.escapeSSL("http://dj" + ++logSrcDomain % 3 + ".baidu.com/v.gif?");
  };
  var imgLog = function (src) {
    var n = cc11001100_hook("n", "imglog__" + new Date().getTime(), "var-init");
    var c = cc11001100_hook("c", window[n] = cc11001100_hook("window[n]", new Image(), "assign"), "var-init");
    c.onload = cc11001100_hook("c.onload", c.onerror = cc11001100_hook("c.onerror", function () {
      window[n] = cc11001100_hook("window[n]", null, "assign");
    }, "assign"), "assign");
    c.src = cc11001100_hook("c.src", src, "assign");
    c = cc11001100_hook("c", null, "assign");
  };
  var logEventListener = function (evt) {
    var params = cc11001100_hook("params", getBuildInValues(evt._MOD, evt._SUBMOD), "var-init");
    var m = cc11001100_hook("m", evt._MOD + "_" + evt._EVENT_NAME, "var-init");
    params.m = cc11001100_hook("params.m", m, "assign");
    if (ubslogactids[m]) {
      params.logactid = cc11001100_hook("params.logactid", ubslogactids[m], "assign");
    }
    for (var k in evt) {
      if (k.indexOf("_") === 0) {
        continue;
      }
      if (params[k]) {
        ctx.warn("logParamConflicted", k + " is conflicted in " + params.m);
        continue;
      }
      var value = cc11001100_hook("value", evt[k], "var-init");
      var vType = cc11001100_hook("vType", typeof value, "var-init");
      if (vType === "string" || vType === "number" || vType === "boolean") {
        params[k] = cc11001100_hook("params[k]", value, "assign");
      }
    }
    var src = cc11001100_hook("src", imgLogSrc() + $.url.jsonToQuery(params), "var-init");
    if (params.logactid === "0200100000" || params.logactid === "0200100001" && params.clickType === "wordTopic") {
      imgLog("//www.baidu.com/home/hit/v.gif?" + $.url.jsonToQuery(params));
    }
    ctx.use("lib/mod_evt", function (evt) {
      var evtResult = cc11001100_hook("evtResult", evt.fire("lib/log", "beforeSendLog", {
        modEvt: cc11001100_hook("modEvt", evt, "object-key-init"),
        logParams: cc11001100_hook("logParams", params, "object-key-init")
      }), "var-init");
      if (evtResult.returnValue) {
        imgLog(src);
      }
    });
  };
  var defaultLog = function (modName, logCfg) {
    var cfgType = cc11001100_hook("cfgType", Object.prototype.toString.call(logCfg), "var-init");
    switch (cfgType) {
      case "[object Array]":
        ctx.listen(modName, logCfg, logEventListener);
        break;
      case "[object Object]":
        var mod = cc11001100_hook("mod", modName.split("/")[0], "var-init");
        for (var evtName in logCfg) {
          if (logCfg.hasOwnProperty(evtName)) {
            ctx.listen(modName, evtName, logEventListener);
            ubslogactids[mod + "_" + evtName] = cc11001100_hook("ubslogactids[mod + \"_\" + evtName]", logCfg[evtName], "assign");
          }
        }
        break;
    }
  };
  var modReg = cc11001100_hook("modReg", /home\/\w+\/(data|submit)\/\w+/, "var-init");
  ctx.listen("lib/sbase", "ajaxSuccess", function (evt) {
    if (!evt.logId) {
      return;
    }
    var ms = cc11001100_hook("ms", evt.url && evt.url.match(modReg), "var-init");
    var m = cc11001100_hook("m", ms && ms[0] || "", "var-init");
    var paths = cc11001100_hook("paths", m.split("/"), "var-init");
    var mod = cc11001100_hook("mod", paths && paths[1], "var-init");
  });
  var imgLogPC = function () {
    var params = cc11001100_hook("params", getBuildInValues("superman:lib", "index"), "var-init");
    var optLog = cc11001100_hook("optLog", {
      logactid: cc11001100_hook("logactid", "1234567890", "object-key-init"),
      showTab: cc11001100_hook("showTab", "10000", "object-key-init"),
      opType: cc11001100_hook("opType", "showpv", "object-key-init")
    }, "var-init");
    var megeredParams = cc11001100_hook("megeredParams", $.extend({}, optLog, params), "var-init");
    var src = cc11001100_hook("src", imgLogSrc() + $.url.jsonToQuery(megeredParams), "var-init");
    imgLog(src);
  };
  var imgLogTC = function () {
    var rnd = cc11001100_hook("rnd", "imglogtc__" + new Date().getTime(), "var-init");
    var img = cc11001100_hook("img", window[rnd] = cc11001100_hook("window[rnd]", new Image(), "assign"), "var-init");
    img.onload = cc11001100_hook("img.onload", img.onerror = cc11001100_hook("img.onerror", function () {
      window[rnd] = cc11001100_hook("window[rnd]", null, "assign");
    }, "assign"), "assign");
    img.src = cc11001100_hook("img.src", "//m.baidu.com/tc?tcreq4log=1" + "&ssid=" + window.s_session.portrait + "&from=0&pu=sz%401320_2001%2Cta%40iphone_1_9.1_3_601" + "&qid=" + window.s_session.logId + "pc" + "&ct=10&cst=1&clk_from=exception&clk_info=pclog", "assign");
    img = cc11001100_hook("img", null, "assign");
  };
  function randTool(probability) {
    cc11001100_hook("probability", probability, "function-parameter");
    return !!(Math.random() * 100 < probability);
  }
  imgLogPC();
  if (!!window.s_session.sid.match("20277")) {
    imgLogTC();
  }
  if (window.webb2 && randTool(1)) {
    var webb = cc11001100_hook("webb", new webb2({
      pid: cc11001100_hook("pid", "1_79", "object-key-init"),
      lid: cc11001100_hook("lid", bds.comm.qid, "object-key-init"),
      pf_comm: {
        sample: cc11001100_hook("sample", 1, "object-key-init")
      }
    }), "var-init");
    webb.send("pf_comm", {
      qid: cc11001100_hook("qid", bds.comm.qid, "object-key-init")
    }, {}, null, {
      group: cc11001100_hook("group", "showpv", "object-key-init")
    });
  }
  exports.log = cc11001100_hook("exports.log", logEventListener, "assign");
  exports.defaultLog = cc11001100_hook("exports.defaultLog", defaultLog, "assign");
});
(function (global) {
  var EXT_TYPE = cc11001100_hook("EXT_TYPE", {
    PROTOTYPE: cc11001100_hook("PROTOTYPE", "prototype", "object-key-init"),
    INSTANCE: cc11001100_hook("INSTANCE", "instance", "object-key-init"),
    SINGLETON: cc11001100_hook("SINGLETON", "singleton", "object-key-init"),
    STATICTYPE: cc11001100_hook("STATICTYPE", "static", "object-key-init")
  }, "var-init");
  var extensions = cc11001100_hook("extensions", {}, "var-init");
  function Thunder(opt) {
    cc11001100_hook("opt", opt, "function-parameter");
    var self = cc11001100_hook("self", this, "var-init");
    self.opt = cc11001100_hook("self.opt", opt || {}, "assign");
    self.baseParams = cc11001100_hook("self.baseParams", self.opt.baseParams || {}, "assign");
    self.config(opt, true);
    if (opt.autoBind) {
      self.bindLogHook();
    }
    simpleMerge(self, extensions);
  }
  Thunder.prototype = cc11001100_hook("Thunder.prototype", {
    config: function (opt) {
      var self = cc11001100_hook("self", this, "var-init");
      simpleMerge(self.opt, opt);
      self.baseURL = cc11001100_hook("self.baseURL", self.opt.baseURL || "//hpd.baidu.com/v.gif", "assign");
      self.domHook = cc11001100_hook("self.domHook", self.opt.domHook || "data-stats", "assign");
      self.mainDom = cc11001100_hook("self.mainDom", self.opt.mainDom, "assign");
      self.skipPrevent = cc11001100_hook("self.skipPrevent", !!self.opt.skipPrevent, "assign");
      self.logRegx = cc11001100_hook("self.logRegx", self.opt.logRegx || "(.*?):(.*?);", "assign");
      self.baseParams = cc11001100_hook("self.baseParams", simpleMerge(self.baseParams, opt.baseParams), "assign");
      return self;
    },
    send: function (pobj, callback, url) {
      var self = cc11001100_hook("self", this, "var-init");
      self.__sendPreHook && self.__sendPreHook(pobj);
      var id = cc11001100_hook("id", "l" + Date.now(), "var-init");
      var req = cc11001100_hook("req", window[id] = cc11001100_hook("window[id]", new Image(), "assign"), "var-init");
      var params = cc11001100_hook("params", "", "var-init");
      var timer = cc11001100_hook("timer", null, "var-init");
      url = cc11001100_hook("url", url || self.baseURL, "assign");
      req.onload = cc11001100_hook("req.onload", req.onerror = cc11001100_hook("req.onerror", req.onabort = cc11001100_hook("req.onabort", function () {
        window[id] = cc11001100_hook("window[id]", null, "assign");
        if (timer) {
          clearTimeout(timer);
          timer = cc11001100_hook("timer", null, "assign");
          callback && callback();
          self.__sendAfrHook && self.__sendAfrHook(pobj, false);
        }
      }, "assign"), "assign"), "assign");
      pobj = cc11001100_hook("pobj", pobj || {}, "assign");
      pobj.r = cc11001100_hook("pobj.r", id, "assign");
      pobj._r = cc11001100_hook("pobj._r", Math.random(), "assign");
      pobj.isLogin = cc11001100_hook("pobj.isLogin", s_session.username ? 1 : 0, "assign");
      var baseParams = cc11001100_hook("baseParams", self.baseParams, "var-init");
      pobj = cc11001100_hook("pobj", simpleMerge(simpleMerge({}, baseParams), pobj), "assign");
      for (var i in pobj) {
        if (pobj.hasOwnProperty(i)) {
          params += cc11001100_hook("params", "&" + i + "=" + encodeURIComponent(pobj[i]), "assign");
        }
      }
      req.src = cc11001100_hook("req.src", url + "?" + params.slice(1), "assign");
      if (typeof callback === "function") {
        timer = cc11001100_hook("timer", setTimeout(function () {
          timer = cc11001100_hook("timer", null, "assign");
          callback();
        }, 500), "assign");
      }
      self.__sendAfrHook && self.__sendAfrHook(pobj, true);
      return self;
    },
    bindLogHook: function (mainDom, domHook) {
      var self = cc11001100_hook("self", this, "var-init");
      mainDom = cc11001100_hook("mainDom", mainDom ? $(mainDom) : $(self.mainDom), "assign");
      mainDom && mainDom.on("click", domHook || "[" + self.domHook + "]", function (e) {
        self.hookClick.call(self, this, e);
      });
    },
    hookClick: function (dom, e) {
      var self = cc11001100_hook("self", this, "var-init");
      var dataLogStr = cc11001100_hook("dataLogStr", dom.getAttribute(self.domHook), "var-init");
      var isSkip = cc11001100_hook("isSkip", dom.getAttribute("data-stopskip"), "var-init");
      var targetHref = cc11001100_hook("targetHref", dom.getAttribute("href"), "var-init");
      var callback = cc11001100_hook("callback", null, "var-init");
      var logObj = cc11001100_hook("logObj", {}, "var-init");
      var regx = cc11001100_hook("regx", new RegExp(self.logRegx, "g"), "var-init");
      var output = cc11001100_hook("output", null, "var-init");
      while (output = cc11001100_hook("output", regx.exec(dataLogStr), "assign")) {
        logObj[output[1]] = cc11001100_hook("logObj[output[1]]", output[2], "assign");
      }
      if (dom.tagName.toLowerCase() === "a" && targetHref && isSkip) {
        e.preventDefault();
        callback = cc11001100_hook("callback", function () {
          global.location.href = cc11001100_hook("global.location.href", targetHref, "assign");
        }, "assign");
      }
      self.send(logObj, callback);
    }
  }, "assign");
  function simpleMerge(obj1, obj2) {
    cc11001100_hook("obj1", obj1, "function-parameter");
    cc11001100_hook("obj2", obj2, "function-parameter");
    if (!obj2 || !obj1) {
      return obj1;
    }
    for (var i in obj2) {
      if (obj2.hasOwnProperty(i)) {
        obj1[i] = cc11001100_hook("obj1[i]", obj2[i], "assign");
      }
    }
    return obj1;
  }
  var thunderInstance = cc11001100_hook("thunderInstance", null, "var-init");
  var exportThunder = cc11001100_hook("exportThunder", {
    create: function (opt, cb) {
      return new Thunder(opt);
    },
    extend: function (ext, methodType) {
      switch (methodType) {
        case EXT_TYPE.PROTOTYPE:
          simpleMerge(Thunder.prototype, ext);
          break;
        case EXT_TYPE.STATICTYPE:
          simpleMerge(Thunder, ext);
          break;
        case EXT_TYPE.INSTANCE:
        case EXT_TYPE.SINGLETON:
        default:
          simpleMerge(extensions, ext);
      }
    },
    get: function (opt) {
      return thunderInstance || (thunderInstance = cc11001100_hook("thunderInstance", this.create(opt), "assign"));
    }
  }, "var-init");
  window.Thunder = cc11001100_hook("window.Thunder", exportThunder, "assign");
})(this);
F.module("superman:lib/utils", function (require, exports, ctx) {
  function throttle(func, wait, options) {
    cc11001100_hook("func", func, "function-parameter");
    cc11001100_hook("wait", wait, "function-parameter");
    cc11001100_hook("options", options, "function-parameter");
    var context, args, result;
    var timeout = cc11001100_hook("timeout", null, "var-init");
    var previous = cc11001100_hook("previous", 0, "var-init");
    if (!options) options = cc11001100_hook("options", {}, "assign");
    var later = function () {
      previous = cc11001100_hook("previous", options.leading === false ? 0 : +new Date(), "assign");
      timeout = cc11001100_hook("timeout", null, "assign");
      result = cc11001100_hook("result", func.apply(context, args), "assign");
      if (!timeout) context = cc11001100_hook("context", args = cc11001100_hook("args", null, "assign"), "assign");
    };
    return function () {
      var now = cc11001100_hook("now", +new Date(), "var-init");
      if (!previous && options.leading === false) previous = cc11001100_hook("previous", now, "assign");
      var remaining = cc11001100_hook("remaining", wait - (now - previous), "var-init");
      context = cc11001100_hook("context", this, "assign");
      args = cc11001100_hook("args", arguments, "assign");
      if (remaining <= 0 || remaining > wait) {
        clearTimeout(timeout);
        timeout = cc11001100_hook("timeout", null, "assign");
        previous = cc11001100_hook("previous", now, "assign");
        result = cc11001100_hook("result", func.apply(context, args), "assign");
        if (!timeout) context = cc11001100_hook("context", args = cc11001100_hook("args", null, "assign"), "assign");
      } else if (!timeout && options.trailing !== false) {
        timeout = cc11001100_hook("timeout", setTimeout(later, remaining), "assign");
      }
      return result;
    };
  }
  function debounce(fn, delay) {
    cc11001100_hook("fn", fn, "function-parameter");
    cc11001100_hook("delay", delay, "function-parameter");
    var timer;
    return function () {
      var _this = cc11001100_hook("_this", this, "var-init");
      var args = cc11001100_hook("args", arguments, "var-init");
      if (timer) {
        clearTimeout(timer);
      }
      timer = cc11001100_hook("timer", setTimeout(function () {
        fn.apply(_this, args);
      }, delay), "assign");
    };
  }
  exports.throttle = cc11001100_hook("exports.throttle", throttle, "assign");
  exports.debounce = cc11001100_hook("exports.debounce", debounce, "assign");
});
F.module("superman:common/user_attr", function (require, exports, ctx) {
  var URLS = cc11001100_hook("URLS", {
    SUBMIT_STATUS: cc11001100_hook("SUBMIT_STATUS", ["/page/submit/userattr", "/pcweb/submit/manusertips"], "object-key-init")
  }, "var-init");
  var userProp = cc11001100_hook("userProp", [s_session.userProp || 0, s_session.userTips || 0], "var-init"),
    PropOrTips = cc11001100_hook("PropOrTips", {}, "var-init");
  var getAttr = function (name) {
    var propValue = cc11001100_hook("propValue", userProp[0][name], "var-init"),
      tipsValue = cc11001100_hook("tipsValue", userProp[1][name], "var-init");
    if (propValue != undefined) {
      PropOrTips.name = cc11001100_hook("PropOrTips.name", 0, "assign");
      return propValue;
    } else if (tipsValue != undefined) {
      PropOrTips.name = cc11001100_hook("PropOrTips.name", 1, "assign");
      return tipsValue;
    } else return;
  };
  var setAttr = function (name, value) {
    var oldValue = cc11001100_hook("oldValue", getAttr(name), "var-init");
    if (typeof oldValue != "undefined" && oldValue != value) {
      var bsToken = cc11001100_hook("bsToken", $("#bsToken") && $("#bsToken").val() || "", "var-init");
      $.ajax({
        url: cc11001100_hook("url", "/home/data/setups?bsToken=" + bsToken, "object-key-init"),
        type: cc11001100_hook("type", "POST", "object-key-init"),
        data: cc11001100_hook("data", JSON.stringify({
          props: cc11001100_hook("props", [name], "object-key-init"),
          values: cc11001100_hook("values", [parseValue(value)], "object-key-init")
        }), "object-key-init"),
        headers: {
          "Content-Type": cc11001100_hook("Content-Type", "application/json", "object-key-init")
        },
        traditional: cc11001100_hook("traditional", true, "object-key-init"),
        success: function (data, textStatus) {
          callback && callback(data);
        }
      });
      function callback(data) {
        cc11001100_hook("data", data, "function-parameter");
        if (data.errno == 0) {
          userProp[PropOrTips.name][name] = cc11001100_hook("userProp[PropOrTips.name][name]", value, "assign");
          ctx.fire("setUserAttr", {
            attr: cc11001100_hook("attr", name, "object-key-init"),
            state: cc11001100_hook("state", "setSucc", "object-key-init")
          });
        } else {
          ctx.fire("setUserAttr", {
            attr: cc11001100_hook("attr", name, "object-key-init"),
            state: cc11001100_hook("state", "setFail", "object-key-init")
          });
        }
      }
    }
  };
  var setMultiAttr = function (names, values) {
    var _leng = cc11001100_hook("_leng", names.length, "var-init"),
      _names = cc11001100_hook("_names", [], "var-init"),
      _values = cc11001100_hook("_values", [], "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < _leng; i++) {
      var oldValue = cc11001100_hook("oldValue", getAttr(names[i]), "var-init");
      if (typeof oldValue != "undefined" && oldValue != values[i]) {
        _names.push(names[i]);
        _values.push(parseValue(values[i]));
      }
    }
    var _nLeng = cc11001100_hook("_nLeng", _names.length, "var-init");
    if (_nLeng > 0) {
      if (isFromSameInterface) {
        $.ajaxpost(s_domain.baseuri + URLS.SUBMIT_STATUS[PropOrTips.name], {
          prop: cc11001100_hook("prop", _names.join(","), "object-key-init"),
          value: cc11001100_hook("value", _values.join(","), "object-key-init")
        }, function (data) {
          if (data.errNo == 0) {
            for (var j = cc11001100_hook("j", 0, "var-init"); j < _nLeng; j++) {
              userProp[PropOrTips.name][_names[j]] = cc11001100_hook("userProp[PropOrTips.name][_names[j]]", _values[j] == "on" ? true : false, "assign");
              ctx.fire("setUserAttr", {
                attr: cc11001100_hook("attr", _names[j], "object-key-init"),
                state: cc11001100_hook("state", "setSucc", "object-key-init")
              });
            }
          } else {
            for (var k = cc11001100_hook("k", 0, "var-init"); k < _nLeng; k++) {
              userProp[PropOrTips.name][_names[k]] = cc11001100_hook("userProp[PropOrTips.name][_names[k]]", _values[k], "assign");
              ctx.fire("setUserAttr", {
                attr: cc11001100_hook("attr", _names[k], "object-key-init"),
                state: cc11001100_hook("state", "setFail", "object-key-init")
              });
            }
          }
        });
      } else {}
    }
  };
  var parseValue = function (value) {
    if (value === true) {
      return "on";
    } else if (value === false) {
      return "off";
    } else {
      return value;
    }
  };
  var isFromSameInterface = function (names) {
    if (names && names.length > 0) {
      var _namesL = cc11001100_hook("_namesL", names.length, "var-init"),
        initvalue = cc11001100_hook("initvalue", PropOrTips[_names[0]], "var-init");
      for (var i = cc11001100_hook("i", _namesL - 1, "var-init"); i >= 0; i--) {
        if (PropOrTips[_names[0]] != initvalue) {
          return false;
        }
      }
      return true;
    }
  };
  exports.getAttr = cc11001100_hook("exports.getAttr", getAttr, "assign");
  exports.setAttr = cc11001100_hook("exports.setAttr", setAttr, "assign");
  exports.setMultiAttr = cc11001100_hook("exports.setMultiAttr", setMultiAttr, "assign");
});
F.module("superman:common/select", function (require, exports, ctx) {
  require("select.css");
  var S = cc11001100_hook("S", ctx.base, "var-init");
  var Select = cc11001100_hook("Select", S.Class.create(function (cfg) {
    var me = cc11001100_hook("me", this, "var-init"),
      time = cc11001100_hook("time", new Date().getTime(), "var-init");
    me.value = cc11001100_hook("me.value", null, "assign");
    me.words = cc11001100_hook("me.words", null, "assign");
    me.selectId = cc11001100_hook("me.selectId", "s_select_" + time, "assign");
    me.inputId = cc11001100_hook("me.inputId", "s_select_input_" + time, "assign");
    me.inputMaskId = cc11001100_hook("me.inputMaskId", "s_select_input_mask_" + time, "assign");
    me.arrowId = cc11001100_hook("me.arrowId", "s_select_arrow_" + time, "assign");
    me.hiddenId = cc11001100_hook("me.hiddenId", "s_select_hidden_" + time, "assign");
    me.layerId = cc11001100_hook("me.layerId", "s_select_layer_" + time, "assign");
    me.selected = cc11001100_hook("me.selected", 0, "assign");
    me.isshow = cc11001100_hook("me.isshow", false, "assign");
    me.maxCount = cc11001100_hook("me.maxCount", cfg.showCount || 10, "assign");
    me.optHeight = cc11001100_hook("me.optHeight", 20, "assign");
    me.mouseoverOpt = cc11001100_hook("me.mouseoverOpt", null, "assign");
    me.mouseoverIdx = cc11001100_hook("me.mouseoverIdx", null, "assign");
    me.timer = cc11001100_hook("me.timer", null, "assign");
    me.scroll = cc11001100_hook("me.scroll", false, "assign");
    me.scrollTimer = cc11001100_hook("me.scrollTimer", null, "assign");
    var setOption = function (value, words, selected, pos) {
      if (pos != undefined) {
        var option = cc11001100_hook("option", me.layer.find(".s-select-layer-option")[pos], "var-init");
        if (option) {
          $(option).val(value).html(words);
          if (selected) {
            option.className = cc11001100_hook("option.className", "s-select-layer-option current", "assign");
            setValue(value, words, pos);
          } else {
            option.className = cc11001100_hook("option.className", "s-select-layer-option", "assign");
          }
        }
      }
    };
    var addOption = function (value, words, selected, pos) {
      if (pos != undefined) {
        var options = cc11001100_hook("options", me.layer.find(".s-select-layer-option"), "var-init"),
          option = cc11001100_hook("option", options[pos], "var-init");
        if (option) {
          $(option).before('<div value="' + value + '" class="s-select-layer-option' + (selected ? " current" : "") + '">' + words + "</div>");
        } else {
          if (options.length) {
            $(options.last()).after('<div value="' + value + '" class="s-select-layer-option' + (selected ? " current" : "") + '">' + words + "</div>");
          } else {
            me.layer.prepend('<div value="' + value + '" class="s-select-layer-option' + (selected ? " current" : "") + '">' + words + "</div>");
          }
        }
      } else {
        me.layer.append('<div value="' + value + '" class="s-select-layer-option' + (selected ? " current" : "") + '">' + words + "</div>");
      }
      if (selected) {
        setValue(value, words, pos);
        updateCurrent();
      }
      setLayerHeight();
    };
    var updateCurrent = function () {
      eachOption(function (opt, idx) {
        if (idx == me.selected) {
          $(opt).addClass("current");
        } else {
          $(opt).removeClass("current");
        }
      });
    };
    var setValue = function (value, words, idx) {
      me.hidden.val(value);
      me.input.val(words);
      me.inputMask.html(words);
      me.selected = cc11001100_hook("me.selected", idx, "assign");
      me.mouseoverIdx = cc11001100_hook("me.mouseoverIdx", idx, "assign");
      me.fire("valueChange");
    };
    var getVlaue = function () {
      return me.hidden.val();
    };
    var bindEvent = function () {
      me.inputMask.bind("mousedown", function (e) {
        me.fire("clickSelect");
        me.input.focus();
        if (me.isshow) {
          hideLayer();
        } else {
          showLayer();
        }
        e.preventDefault();
        e.stopPropagation();
      });
      me.inputMask.bind("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
      me.arrow.bind("mousedown", function (e) {
        me.fire("clickSelect");
        me.input.focus();
        if (me.isshow) {
          hideLayer();
        } else {
          showLayer();
        }
        e.preventDefault();
        e.stopPropagation();
      });
      me.arrow.bind("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
      });
    };
    var setLayerPos = function () {
      var pos = cc11001100_hook("pos", me.select.offset(), "var-init"),
        left = cc11001100_hook("left", 0, "var-init"),
        top = cc11001100_hook("top", 26, "var-init");
      if ($.isIE == 8) {
        left = cc11001100_hook("left", -1, "assign");
        top = cc11001100_hook("top", 25, "assign");
      } else if ($.isIE == 7) {
        left = cc11001100_hook("left", -1, "assign");
      } else if ($.isIE6) {
        left = cc11001100_hook("left", -1, "assign");
        top = cc11001100_hook("top", 25, "assign");
      }
      me.layer.css({
        left: cc11001100_hook("left", pos.left + left + "px", "object-key-init"),
        top: cc11001100_hook("top", pos.top + top + "px", "object-key-init")
      });
    };
    var showLayer = function () {
      me.input.focus();
      if (me.isshow) return;
      setLayerPos();
      me.layer.addClass("show");
      setLayerHeight();
      updateCurrent();
      me.isshow = cc11001100_hook("me.isshow", true, "assign");
      setScrollTop();
      bindLayer();
      me.fire("layerShow");
    };
    var setLayerHeight = function () {
      var options = cc11001100_hook("options", me.layer.find(".s-select-layer-option"), "var-init");
      if (options.length > me.maxCount) {
        me.layer.css("height", me.optHeight * me.maxCount + "px");
      }
    };
    var hideLayer = function () {
      if (!me.isshow) return;
      me.layer.removeClass("show");
      me.isshow = cc11001100_hook("me.isshow", false, "assign");
      unbindLayer();
      me.mouseoverOpt = cc11001100_hook("me.mouseoverOpt", null, "assign");
      me.fire("layerHide");
    };
    var bindLayer = function () {
      me.timer = cc11001100_hook("me.timer", setInterval(function () {
        setLayerPos();
      }, 300), "assign");
      me.input.bind("keydown", function (e) {
        if (e.keyCode && me.isshow) {
          switch (e.keyCode) {
            case 38:
              up();
              e.preventDefault();
              e.stopPropagation();
              break;
            case 40:
              down();
              e.preventDefault();
              e.stopPropagation();
              break;
            case 13:
              enterFunc();
              hideLayer();
              e.preventDefault();
              e.stopPropagation();
              break;
          }
        }
      });
      $(document.body).bind("click", hideLayer);
      var options = cc11001100_hook("options", me.layer.find(".s-select-layer-option"), "var-init");
      me.layer.bind("mouseenter", function (e) {
        $(options[me.selected]).removeClass("current");
        e.preventDefault();
        e.stopPropagation();
      });
      me.layer.bind("mouseleave", function (e) {
        me.mouseoverOpt && me.mouseoverOpt[0] && me.mouseoverOpt.remove("current");
        e.preventDefault();
        e.stopPropagation();
      });
      $.each(options, function (idx, o) {
        var option = cc11001100_hook("option", $(o), "var-init");
        option.bind("mousedown", function (e) {
          setValue(option.attr("value"), option.html(), idx);
          hideLayer();
          e.preventDefault();
          e.stopPropagation();
        });
        option.bind("mouseover", function (e) {
          if (me.scroll) return;
          eachOption(function (obj) {
            $(obj).removeClass("current");
          });
          option.addClass("current");
          me.mouseoverOpt = cc11001100_hook("me.mouseoverOpt", option, "assign");
          me.mouseoverIdx = cc11001100_hook("me.mouseoverIdx", idx, "assign");
          e.preventDefault();
          e.stopPropagation();
        });
        option.bind("mouseout", function (e) {
          if (me.scroll) return;
          option.removeClass("current");
          me.mouseoverIdx = cc11001100_hook("me.mouseoverIdx", idx, "assign");
          e.preventDefault();
          e.stopPropagation();
        });
      });
    };
    var enterFunc = function () {
      var options = cc11001100_hook("options", me.layer.find(".s-select-layer-option"), "var-init");
      for (i = cc11001100_hook("i", 0, "assign"), len = cc11001100_hook("len", options.length, "assign"); i < len; i++) {
        if ($(options[i]).hasClass("current")) {
          setValue($(options[i]).attr("value"), $(options[i]).html(), i);
          break;
        }
      }
    };
    var eachOption = function (callback) {
      var options = cc11001100_hook("options", me.layer.find(".s-select-layer-option"), "var-init");
      $.each(options, function (idx, opt) {
        callback && callback($(opt), idx);
      });
    };
    var unbindLayer = function () {
      me.timer && clearInterval(me.timer);
      me.timer = cc11001100_hook("me.timer", null, "assign");
      me.input.unbind("keydown");
      me.input.unbind("blur");
      eachOption(function (option) {
        $(option).unbind("mousedown");
        $(option).unbind("mouseover");
        $(option).unbind("mouseout");
      });
      me.layer.unbind("mouseenter");
      me.layer.unbind("mouseleave");
    };
    var up = function () {
      var idx = cc11001100_hook("idx", me.mouseoverIdx || me.selected, "var-init");
      if (idx && idx > 0) {
        var options = cc11001100_hook("options", me.layer.find(".s-select-layer-option"), "var-init");
        $(options[idx]).removeClass("current");
        $(options[idx - 1]).addClass("current");
        setValue($(options[idx - 1]).attr("value"), $(options[idx - 1]).html(), idx - 1);
        setScrollTop();
      }
    };
    var down = function () {
      var options = cc11001100_hook("options", me.layer.find(".s-select-layer-option"), "var-init");
      var idx = cc11001100_hook("idx", me.mouseoverIdx || me.selected, "var-init");
      if (idx < options.length - 1) {
        $(options[idx]).removeClass("current");
        $(options[idx + 1]).addClass("current");
        setValue($(options[idx + 1]).attr("value"), $(options[idx + 1]).html(), idx + 1);
        setScrollTop();
      }
    };
    var setScrollTop = function () {
      me.scroll = cc11001100_hook("me.scroll", true, "assign");
      var c = cc11001100_hook("c", me.selected + 1 - me.maxCount, "var-init");
      if (c > 0) {
        me.layer.scrollTop(c * me.optHeight);
      } else {
        me.layer.scrollTop(0);
      }
      if (me.scrollTimer) {
        clearTimeout(me.scrollTimer);
        me.scrollTimer = cc11001100_hook("me.scrollTimer", null, "assign");
        me.scrollTimer = cc11001100_hook("me.scrollTimer", setTimeout(function () {
          me.scroll = cc11001100_hook("me.scroll", false, "assign");
        }, 500), "assign");
      } else {
        me.scrollTimer = cc11001100_hook("me.scrollTimer", setTimeout(function () {
          me.scroll = cc11001100_hook("me.scroll", false, "assign");
        }, 500), "assign");
      }
    };
    me.getResult = cc11001100_hook("me.getResult", function () {
      return {
        value: cc11001100_hook("value", me.hidden.val(), "object-key-init"),
        words: cc11001100_hook("words", me.inputMask.html(), "object-key-init")
      };
    }, "assign");
    me.hide = cc11001100_hook("me.hide", function () {
      me.select.hide();
      hideLayer();
    }, "assign");
    me.show = cc11001100_hook("me.show", function () {
      me.select.css("display", "inline-block");
    }, "assign");
    me.addOption = cc11001100_hook("me.addOption", addOption, "assign");
    me.setOption = cc11001100_hook("me.setOption", setOption, "assign");
    me.getLayer = cc11001100_hook("me.getLayer", function () {
      return $("#" + me.layerId);
    }, "assign");
    me.hideLayer = cc11001100_hook("me.hideLayer", hideLayer, "assign");
    (function () {
      var html = cc11001100_hook("html", ['<span id="' + me.selectId + '" class="s-select ' + cfg.customClass + '">', '<div id="' + me.inputMaskId + '" class="s-select-input-mask s-opacity-blank1 ' + cfg.customClass + '"></div><input type="input" class="s-select-input ' + cfg.customClass + '" value="' + me.words + '" id="' + me.inputId + '">', '<a class="s-select-arrow s-opacity-border3-left ' + cfg.customClass + '" id="' + me.arrowId + '" href="#" onclick="return false;" hidefocus></a></span>', '<input type="hidden" value="' + me.value + '" id="' + me.hiddenId + '">'].join(""), "var-init");
      $(cfg.dom)[cfg.type](html);
      $("#head").append('<div id="' + me.layerId + '" class="s-select-layer  s-isindex-wrap ' + cfg.customClass + '"></div>');
      me.select = cc11001100_hook("me.select", $("#" + me.selectId), "assign");
      me.input = cc11001100_hook("me.input", $("#" + me.inputId), "assign");
      me.inputMask = cc11001100_hook("me.inputMask", $("#" + me.inputMaskId), "assign");
      me.arrow = cc11001100_hook("me.arrow", $("#" + me.arrowId), "assign");
      me.hidden = cc11001100_hook("me.hidden", $("#" + me.hiddenId), "assign");
      me.layer = cc11001100_hook("me.layer", $("#" + me.layerId), "assign");
      $.each(cfg.options, function (idx, opt) {
        addOption(opt.value, opt.words, opt.selected, idx);
      });
      bindEvent();
    })();
  }), "var-init");
  exports.Select = cc11001100_hook("exports.Select", Select, "assign");
});
F.module("superman:common/bottom_layer", function (require, exports, ctx) {
  function init() {
    $("#bottom_layer .s-bottom-show").click(function () {
      if (s_session.isLogin) {
        window.location.href = cc11001100_hook("window.location.href", location.protocol + "//" + location.host + "/home/xman/show/liteoff", "assign");
        return;
      }
      $.cookie.remove("hide_feed");
      location.reload();
    });
    $("#bottom_layer .s-bottom-hide").click(function () {
      ctx.fire("hideMain");
      if (!s_session.isLogin) {
        $.cookie.set("hide_feed", 1);
        $("#qrcodeCon").removeClass("hide");
        $("#bottom_space").hide();
      }
    });
  }
  exports.init = cc11001100_hook("exports.init", init, "assign");
});
F.call("superman:common/bottom_layer", "init");