F.module("superman:weather/weather_tpl", function (require, exports, ctx) {
  var isNewStyle = cc11001100_hook("isNewStyle", bds.comm && bds.comm.newTopMenu === 1, "var-init");
  exports.pollutionLevel = cc11001100_hook("exports.pollutionLevel", {
    0: cc11001100_hook(0, "优", "object-key-init"),
    10: cc11001100_hook(10, "良", "object-key-init"),
    20: cc11001100_hook(20, "轻度污染", "object-key-init"),
    30: cc11001100_hook(30, "中度污染", "object-key-init"),
    40: cc11001100_hook(40, "重度污染", "object-key-init"),
    50: cc11001100_hook(50, "严重污染", "object-key-init")
  }, "assign");
  var _dom = cc11001100_hook("_dom", $("#s_mod_weather"), "var-init");
  exports.createIconUrl = cc11001100_hook("exports.createIconUrl", function (url, getStyleVal) {
    if (!url) {
      return "";
    }
    if (!getStyleVal) {
      return 'style="background-image:url(' + url + ");*background-image:none;*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + url + ', enabled=true,sizingMethod="crop")";';
    } else {
      return "background-image:url(" + url + ");*background-image:none;*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + url + ', enabled=true,sizingMethod="crop")';
    }
  }, "assign");
  exports.randIconCdn = cc11001100_hook("exports.randIconCdn", function (img) {
    var _returnStr = cc11001100_hook("_returnStr", (img ? img : "a2").slice(1), "var-init");
    if (isNaN(_returnStr) || _returnStr.length < 1) {
      return 1;
    } else {
      return parseInt(_returnStr) % 8 + 1;
    }
  }, "assign");
  exports.randerImgPath = cc11001100_hook("exports.randerImgPath", function (data, imgType, whichData, isNotToday) {
    var i = cc11001100_hook("i", whichData ? whichData : 0, "var-init");
    var _c = cc11001100_hook("_c", data, "var-init"),
      _t = cc11001100_hook("_t", _c.weatherArr ? _c.weatherArr[i] : {}, "var-init"),
      _nowTime = cc11001100_hook("_nowTime", sysTime * 1e3, "var-init"),
      _imgName = cc11001100_hook("_imgName", "", "var-init");
    if (_c && _c.timeStamp && +_c.timeStamp) {
      _nowTime = cc11001100_hook("_nowTime", +_c.timeStamp, "assign");
    }
    if (_t && _t.imgs && _t.imgs[0]) {
      _imgName = cc11001100_hook("_imgName", _t.imgs[0], "assign");
    } else {
      _imgName = cc11001100_hook("_imgName", "a2", "assign");
    }
    if (!isNotToday && +new Date(_nowTime).getHours() >= 18 && (_imgName == "a0" || _imgName == "a1")) {
      _imgName = cc11001100_hook("_imgName", _imgName + "_night", "assign");
    }
    if (isNewStyle) {
      return $.url.escapeSSL("https://dss" + Math.floor(Math.random() * 3.9) + ".bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/" + _imgName + ".png");
    }
    return $.url.escapeSSL("http://" + exports.randIconCdn(_imgName) + ".su.bdimg.com/icon/weather/" + (_c.weatherType ? _c.weatherType + "/" + (imgType ? imgType == "png" ? "png_18" : imgType : "png_18") : "aladdin/png_18") + "/" + _imgName + "." + (imgType ? imgType : "png"));
  }, "assign");
  var init = function (data) {
    $("#s_mod_weather .weather-bg").css("width", _dom.find(".city-wather").get(0).offsetWidth);
    ctx.fire("weatherShow", {
      showType: cc11001100_hook("showType", "weatherMod", "object-key-init")
    });
  };
  exports.init = cc11001100_hook("exports.init", init, "assign");
});
F.module("superman:weather/weather_ctrl", function (require, exports, ctx) {
  var _dom = cc11001100_hook("_dom", $("#s_mod_weather .weather-mod"), "var-init");
  var isNewStyle = cc11001100_hook("isNewStyle", bds.comm && bds.comm.newTopMenu === 1, "var-init");
  var _canGetWeatherPos = cc11001100_hook("_canGetWeatherPos", true, "var-init");
  var bindEvents = function (data) {
    if (!_dom.get(0)) {
      _dom = cc11001100_hook("_dom", $("#s_mod_weather .weather-mod"), "assign");
    }
    if (!_dom.get(0)) {
      return;
    }
    if (!data || !data.content || !data.content.today) {
      exports.setWeatherPosKey(false);
    }
    function hoverWithCityInfo() {
      ctx.use("weather/setting_ctrl", function (ws) {
        if (!$("#s_mod_setweather").get(0)) {
          ws.init(data);
        } else {
          ws.show();
        }
      });
    }
    function hoverWithoutCityInfo() {
      ctx.use("weather/setting_ctrl", function (ws) {
        if (!$("#s_mod_setweather").get(0)) {
          ctx.use("weather/weather_autorefresh", function (wa) {
            wa.autoRefreshCtrl(true);
          });
          ws.init(data, true);
          ws.show(true);
        } else {
          ws.show(true);
        }
        ctx.fire("settingShow", {
          showType: cc11001100_hook("showType", "settingMod", "object-key-init"),
          lastSetCityState: cc11001100_hook("lastSetCityState", _canGetWeatherPos, "object-key-init")
        });
      });
    }
    if (isNewStyle) {
      $("#s_mod_weather .unknown-setting").mouseenter(hoverWithoutCityInfo);
      $("#s_mod_weather").mouseleave(function () {
        ctx.use("weather/setting_ctrl", function (ws) {
          setTimeout(function () {
            ws.hide();
          }, 200);
        });
      });
    } else {
      $("#s_mod_weather .unknown-setting").click(hoverWithoutCityInfo);
    }
    _dom.mouseenter(hoverWithCityInfo).mousemove(hoverWithCityInfo);
    if (!isNewStyle) {
      _dom.mouseleave(function () {
        ctx.use("weather/setting_ctrl", function (ws) {
          if ($("#s_mod_setweather").get(0)) {
            ws.hide();
          }
        });
      });
      $("body").click(function (e) {
        var _tar = cc11001100_hook("_tar", e.target, "var-init");
        if (!$.contains(_dom.get(0), _tar) && !$.contains($("#s_mod_weather .unknown-city").get(0), _tar)) {
          ctx.use("weather/setting_ctrl", function (ws) {
            if ($("#s_mod_setweather").get(0)) {
              ws.hide(true);
            }
          });
        }
      });
    }
    if ($("#s_mod_weather").hasClass("hide-unknow-city")) {
      ctx.use("weather/weather_autorefresh", function (wa) {
        wa.autoRefreshCtrl();
      });
      hoverWithCityInfo();
    } else {
      hoverWithoutCityInfo();
    }
  };
  exports.setWeatherPosKey = cc11001100_hook("exports.setWeatherPosKey", function (value) {
    _canGetWeatherPos = cc11001100_hook("_canGetWeatherPos", value, "assign");
  }, "assign");
  exports.getWeatherPosKey = cc11001100_hook("exports.getWeatherPosKey", function () {
    return _canGetWeatherPos;
  }, "assign");
  exports.open = cc11001100_hook("exports.open", open, "assign");
  exports.close = cc11001100_hook("exports.close", close, "assign");
  exports.bindEvents = cc11001100_hook("exports.bindEvents", bindEvents, "assign");
});
F.module("superman:weather/weather_autorefresh", function (require, exports, ctx) {
  var _refreshWeatherInterval = cc11001100_hook("_refreshWeatherInterval", null, "var-init");
  var isNewStyle = cc11001100_hook("isNewStyle", bds.comm && bds.comm.newTopMenu === 1, "var-init");
  exports.autoRefreshCtrl = cc11001100_hook("exports.autoRefreshCtrl", function (isRestart) {
    var cityCode = cc11001100_hook("cityCode", $(".city-wather .show-city-name").attr("data-key"), "var-init");
    var bsToken = cc11001100_hook("bsToken", $("#bsToken") && $("#bsToken").val() || "", "var-init");
    if (isRestart && _refreshWeatherInterval) {
      clearInterval(_refreshWeatherInterval);
      _refreshWeatherInterval = cc11001100_hook("_refreshWeatherInterval", null, "assign");
    } else {
      _refreshWeatherInterval = cc11001100_hook("_refreshWeatherInterval", setInterval(function () {
        $.ajaxget(s_domain.baseuri + "/weather/getweather?citycode=" + cityCode + "&bsToken=" + bsToken, function (result) {
          if (result.errno == 0) {
            var _d = cc11001100_hook("_d", result.data, "var-init");
            if (_d && _d.content.countyName) {
              exports.refreshWeather(_d, s_session.userTips.weatherShowWarning);
            } else {}
          }
        });
      }, 1e3 * 60 * 60 * 3), "assign");
    }
  }, "assign");
  exports.refreshWeather = cc11001100_hook("exports.refreshWeather", function (data) {
    var _dom = cc11001100_hook("_dom", $("#s_mod_weather"), "var-init");
    if (!_dom.get(0) || !data.countyName) {
      return;
    }
    var contentData = cc11001100_hook("contentData", data, "var-init");
    F.use("weather/weather_tpl", function (WeatherTpl) {
      _dom.find(".city-wather").attr("href", "//www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=" + encodeURIComponent(contentData.countyName + "天气预报"));
      _dom.find(".show-city-name").html(contentData.countyName);
      var weatherIcon = cc11001100_hook("weatherIcon", _dom.find(".weather-icon"), "var-init");
      if (isNewStyle) {
        var iconUrl = cc11001100_hook("iconUrl", "https://dss" + Math.floor(Math.random() * 3.9) + ".bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/weather/icons2/" + contentData.currentWeatherIcon + ".png", "var-init");
        weatherIcon.attr("src", iconUrl);
      } else {
        weatherIcon.attr("style", WeatherTpl.createIconUrl(WeatherTpl.randerImgPath(data, "png"), true));
      }
      weatherIcon.next(".show-icon-temp").html(contentData.currentTemp ? contentData.currentTemp + "℃" : "");
      var _po = cc11001100_hook("_po", contentData.pollution, "var-init");
      if (+_po < 0) {
        _dom.find(".show-pollution").addClass("hide-pollution");
        _dom.addClass("no-polution-ie6");
      } else {
        var _polutionName = cc11001100_hook("_polutionName", contentData.pollution ? WeatherTpl.pollutionLevel[contentData.pollution] ? WeatherTpl.pollutionLevel[contentData.pollution] : "" : "", "var-init");
        _dom.find(".show-pollution").removeClass("hide-pollution").find(".show-polution-num").html(contentData.pm25 ? contentData.pm25 : "").parent();
        _dom.find(".show-polution-name").html(_polutionName).parent().attr("class", "show-airParm" + (+contentData.pollution >= 0 ? " polution-level-" + contentData.pollution : ""));
        _dom.removeClass("no-polution-ie6");
      }
      $("#s_mod_weather .weather-bg").css("width", _dom.find(".city-wather").get(0).offsetWidth);
      ctx.fire("settingsave", {});
    });
  }, "assign");
});
F.module("superman:start/skin_start", function (require, exports, ctx) {
  var _bgcolor = cc11001100_hook("_bgcolor", "", "var-init"),
    _definedGuideTipKey = cc11001100_hook("_definedGuideTipKey", s_session.userTips.definedGuideShowType, "var-init");
  function _loadSkinAndLogo() {
    if (s_session.userIsNewSkined == "on") {}
  }
  exports.init = cc11001100_hook("exports.init", function (isbirthlogo) {
    ctx.use("skin/skin_rewrite", function (sr) {
      sr.setBg({
        userDefined: cc11001100_hook("userDefined", s_session.userSkinDefined, "object-key-init"),
        color: cc11001100_hook("color", $(".s-skin-container").css("background-color") ? $(".s-skin-container").css("background-color") : "#fff", "object-key-init"),
        longUrl: cc11001100_hook("longUrl", decodeURIComponent(s_session.userSkinUrl), "object-key-init"),
        dataindex: cc11001100_hook("dataindex", s_session.userSkinName, "object-key-init"),
        logo: cc11001100_hook("logo", s_session.userSkinLogo, "object-key-init")
      });
    });
  }, "assign");
});
F.module("superman:skin/skin_rewrite", function (require, exports, ctx) {
  var _oldLogoUrl = cc11001100_hook("_oldLogoUrl", s_session.userLogoSrc, "var-init"),
    _oldLogoUrlRe = cc11001100_hook("_oldLogoUrlRe", s_session.userLogoSrcRe, "var-init"),
    _isBirthLogo = cc11001100_hook("_isBirthLogo", s_session._isBirthLogo, "var-init"),
    _isSetBgBefore = cc11001100_hook("_isSetBgBefore", false, "var-init"),
    _skinTimer = cc11001100_hook("_skinTimer", null, "var-init"),
    _isSkined = cc11001100_hook("_isSkined", s_session.userIsSkined, "var-init"),
    _modelsHeight = cc11001100_hook("_modelsHeight", $("#s_main").offsetHeight, "var-init"),
    _isIE6HeightAuto = cc11001100_hook("_isIE6HeightAuto", false, "var-init"),
    _bgHeightTimer = cc11001100_hook("_bgHeightTimer", null, "var-init"),
    _ImgUrl = cc11001100_hook("_ImgUrl", s_domain.staticUrl + "static/superman/img/logo/", "var-init");
  function imgDomain(id) {
    cc11001100_hook("id", id, "function-parameter");
    var _id = cc11001100_hook("_id", id ? +id : 0, "var-init");
    id = cc11001100_hook("id", parseInt(id) || 0, "assign");
    return $.url.escapeSSL("http://" + ((id + 1) % 8 + 1) + ".su.bdimg.com/");
  }
  function theWholeImgUrl(imgobj) {
    cc11001100_hook("imgobj", imgobj, "function-parameter");
    return imgobj.userDefined == "on" ? decodeURIComponent(imgobj.longUrl) : imgDomain(imgobj.dataindex) + "skin/" + imgobj.dataindex + ".jpg?2";
  }
  function _addBg(imgobj, fn) {
    cc11001100_hook("imgobj", imgobj, "function-parameter");
    cc11001100_hook("fn", fn, "function-parameter");
    if (!imgobj || imgobj.userDefined == "on" && !imgobj.longUrl || imgobj.userDefined != "on" && !imgobj.dataindex) {
      _isSetBgBefore = cc11001100_hook("_isSetBgBefore", true, "assign");
      return;
    }
    _setUserUps("fullSkinName", imgobj.dataindex);
    !$.isIE6 && $("#s_skin_opacity_set .bg-hideOrShowAjax").css("visibility", "visible");
    _removeLogoTitle();
    _imgurl = cc11001100_hook("_imgurl", $.url.escapeSSL(theWholeImgUrl(imgobj)), "assign");
    if (_isSetBgBefore) {
      if (window._sp_async) {
        var _body = cc11001100_hook("_body", $("#head"), "var-init");
      } else {
        var _body = cc11001100_hook("_body", $("body"), "var-init");
      }
      _body.addClass("s-skin-hasbg");
      _setLogoImg(imgobj.logo);
      _setAllBg(imgobj);
    } else {
      var _img = cc11001100_hook("_img", new Image(), "var-init");
      _img.src = cc11001100_hook("_img.src", _imgurl, "assign");
      imgLoad(_img, function () {
        _setAllBg(imgobj);
        listenResizeForIe();
      });
      _isSetBgBefore = cc11001100_hook("_isSetBgBefore", true, "assign");
    }
    ctx.fire("skin_change", imgobj);
    _isSkined = cc11001100_hook("_isSkined", "on", "assign");
    fn && fn();
  }
  function listenResizeForIe() {
    if (!$.browser.ie || $.browser.ie < 7 || $.browser.ie > 8) {
      return;
    }
    var imgDom = cc11001100_hook("imgDom", $(".s-skin-container img"), "var-init");
    var timer;
    var _resize = function () {
      var viewHeight = cc11001100_hook("viewHeight", $(window).height(), "var-init"),
        viewWidth = cc11001100_hook("viewWidth", $(window).width(), "var-init");
      if (viewWidth / viewHeight < 1.6) {
        imgDom.css("height", "100%");
      } else {
        imgDom.css("height", "auto");
      }
    };
    _resize();
    $(window).bind("resize", function (e) {
      clearInterval(timer);
      timer = cc11001100_hook("timer", setInterval(function () {
        _resize();
      }, 500), "assign");
    });
  }
  function _setAllBg(imgobj) {
    cc11001100_hook("imgobj", imgobj, "function-parameter");
    if (imgobj.dataindex < 0) {
      return;
    }
    if ($.isIE6) {
      _setBg4IE6(imgobj);
    } else {
      _setNotIE6Bg(imgobj);
    }
    _xman_speed.pushStTime && _xman_speed.pushStTime("skin", new Date().getTime());
    $(window).trigger("s-skinon");
  }
  function _removeLogoTitle() {
    if (s_session.isFesLogo) {
      var _imgdom = cc11001100_hook("_imgdom", $("#lg img"), "var-init");
      if (_imgdom) {
        _imgdom.attr("title", "");
        _imgdom.attr("cursor", "default");
      }
    }
  }
  function _setNotIE6Bg(imgobj) {
    cc11001100_hook("imgobj", imgobj, "function-parameter");
    var _skindoms = cc11001100_hook("_skindoms", $(".s-skin-container"), "var-init");
    var _url = cc11001100_hook("_url", $.url.escapeSSL(theWholeImgUrl(imgobj)), "var-init");
    if (_skindoms.get(0)) {
      if ($.browser.ie < 9) {
        if (_skindoms.find("img")[0]) {
          $(_skindoms[0]).attr("style", "background-color:" + imgobj.color + ";").find("img").attr("src", _url);
        } else {
          $(_skindoms[0]).attr("style", "background-color:" + imgobj.color + ";").html('<img style="top:0;left:0;width:100%;position:fixed" src="' + _url + '">');
        }
      } else {
        $(_skindoms[0]).attr("style", "background-color:" + imgobj.color + ';background-image:url("' + _url + '");');
        $(_skindoms[0]).find("img").remove();
      }
    } else {
      var _tpl = cc11001100_hook("_tpl", $.browser.ie < 9 ? '<div class="s-skin-container" style="background-color:#{bgcolor};"><img style="top:0;left:0;height:100%;width:100%;position:fixed" src="#{bgimg}"></div>' : '<div class="s-skin-container" style="background-color:#{bgcolor};background-image:#{bgimg}"></div>', "var-init"),
        _skinHtml = cc11001100_hook("_skinHtml", $.formatString(_tpl, {
          bgcolor: cc11001100_hook("bgcolor", imgobj.color, "object-key-init"),
          bgimg: cc11001100_hook("bgimg", $.browser.ie ? _url : "url('" + _url + "')", "object-key-init")
        }), "var-init");
      if (window._sp_async) {
        $("#head").prepend(_tpl);
      } else {
        $("body").prepend(_tpl);
      }
    }
    _removeBgNoneCls();
  }
  function _setBg4IE6(imgobj) {
    cc11001100_hook("imgobj", imgobj, "function-parameter");
    var _bgcolordom = cc11001100_hook("_bgcolordom", $(".s-skin-container"), "var-init");
    _bgcolordom && _bgcolordom[0] && $(_bgcolordom[0]).remove();
    var _bg = cc11001100_hook("_bg", "url('" + theWholeImgUrl(imgobj) + "') center 0px no-repeat fixed " + imgobj.color, "var-init");
    if (window._sp_async) {
      $("body").css({
        background: cc11001100_hook("background", _bg, "object-key-init"),
        overflow: cc11001100_hook("overflow", "visible", "object-key-init")
      });
    } else {
      $("body").css({
        background: cc11001100_hook("background", _bg, "object-key-init"),
        overflow: cc11001100_hook("overflow", "visible", "object-key-init")
      });
    }
  }
  function _hackLogo4IE6() {
    var _lg = cc11001100_hook("_lg", $("#lg img"), "var-init");
    if (_lg.get(0)) {
      if (s_session.userLogoIsFestival !== "1") {
        _lg.attr("src", s_domain.staticUrl + "static/superman/img/logo/logo_white-deadc30bf7.gif");
      }
      if (!$("#head").hasClass("white-logo")) {
        $("#head").addClass("white-logo");
      }
    }
  }
  function _removeLogoTip() {
    var _logoTip = cc11001100_hook("_logoTip", $("s_skin_logotip"), "var-init");
    _logoTip && _logoTip.remove();
  }
  function _removeBgNoneCls() {
    $.each($.makeArray($(".s-skin-container")), function (item, i) {
      $(item).removeClass("container-none");
    });
  }
  function _setLogoImg(imgName) {
    cc11001100_hook("imgName", imgName, "function-parameter");
    if (_isBirthLogo) {
      return;
    }
    var _imgLogo = cc11001100_hook("_imgLogo", $("#lg img"), "var-init"),
      _imgName = cc11001100_hook("_imgName", imgName ? imgName + ".png" : "logo_white.png", "var-init"),
      _docBody;
    if (window._sp_async) {
      _docBody = cc11001100_hook("_docBody", $("#head"), "assign");
    } else {
      _docBody = cc11001100_hook("_docBody", $("body"), "assign");
    }
    if ($.isIE6) {
      _hackLogo4IE6();
      return;
    }
    if (s_session.userLogoIsFestival !== "1") {
      if (_imgLogo.attr("src") != _ImgUrl + _imgName) {
        _imgLogo.attr("src", _ImgUrl + _imgName);
      }
    }
    switch (imgName) {
      case "logo_redBlue":
        if (_docBody.hasClass("white-logo")) {
          _docBody.removeClass("white-logo");
        }
        if (!_docBody.hasClass("red-blue-logo")) {
          _docBody.addClass("red-blue-logo");
        }
        break;
      case "logo_white":
      default:
        if (_docBody.hasClass("red-blue-logo")) {
          _docBody.removeClass("red-blue-logo");
        }
        if (!_docBody.hasClass("white-logo")) {
          _docBody.addClass("white-logo");
        }
        break;
    }
    s_session.userSkinLogo = cc11001100_hook("s_session.userSkinLogo", imgName ? imgName : "logo_white", "assign");
  }
  function _removeBg(fn) {
    cc11001100_hook("fn", fn, "function-parameter");
    !$.isIE6 && $("#s_skin_opacity_set .bg-hideOrShowAjax").css("visibility", "hidden");
    _setUserUps("fullSkinName", "0");
    var _skindoms = cc11001100_hook("_skindoms", $(".s-skin-container"), "var-init");
    _skindoms.css("background", "none");
    $(window).trigger("s-skinoff");
    var img = cc11001100_hook("img", _skindoms.find("img"), "var-init");
    img[0] && img.remove();
    var _mpname = cc11001100_hook("_mpname", _getMapName(), "var-init"),
      tips = cc11001100_hook("tips", "s-tips", "var-init");
    if (_mpname) {
      $("#lg img").attr("usemap", _mpname);
    }
    if (window._sp_async) {
      var _skinModDom = cc11001100_hook("_skinModDom", $("#head"), "var-init");
    } else {
      var _skinModDom = cc11001100_hook("_skinModDom", $("body"), "var-init");
    }
    var _isShowSkinMod = cc11001100_hook("_isShowSkinMod", _skinModDom.hasClass("s-show-skin") ? "s-show-skin" : "", "var-init");
    if (!_skinModDom.hasClass(tips)) {
      tips = cc11001100_hook("tips", "", "assign");
    }
    _skinModDom.get(0).className = cc11001100_hook("_skinModDom.get(0).className", _isShowSkinMod, "assign");
    _skinModDom.addClass(tips);
    if ($.isIE6) {
      $(".has-background").css("background", "none");
      $("body").css("background", "none");
      _skinModDom.css("background", "none");
    }
    _isSkined = cc11001100_hook("_isSkined", "off", "assign");
    fn && fn();
  }
  function _getMapName() {
    var _mapDom = cc11001100_hook("_mapDom", $("#s_mp"), "var-init");
    if (_mapDom) {
      return "#" + _mapDom.attr("name");
    }
  }
  function _setUserUps(name, value, fn) {
    cc11001100_hook("name", name, "function-parameter");
    cc11001100_hook("value", value, "function-parameter");
    cc11001100_hook("fn", fn, "function-parameter");
    if (value == s_session.userSkinName) {
      fn && fn();
    } else {
      s_session.userSkinName = cc11001100_hook("s_session.userSkinName", value, "assign");
      fn && fn();
    }
  }
  function imgLoad(img, callback) {
    cc11001100_hook("img", img, "function-parameter");
    cc11001100_hook("callback", callback, "function-parameter");
    img.complete || img.readyState == "loading" || img.readyState == "complete" ? callback() : img.onload = cc11001100_hook("img.onload", callback, "assign");
  }
  exports.removeBg = cc11001100_hook("exports.removeBg", _removeBg, "assign");
  exports.setBg = cc11001100_hook("exports.setBg", _addBg, "assign");
  exports.imgDomain = cc11001100_hook("exports.imgDomain", imgDomain, "assign");
  exports.setLogo = cc11001100_hook("exports.setLogo", _setLogoImg, "assign");
  exports.imgLoad = cc11001100_hook("exports.imgLoad", imgLoad, "assign");
});
F.module("superman:mngr/top_layer", function (require, exports, ctx) {
  var _layerSwitch = cc11001100_hook("_layerSwitch", {
    skin: cc11001100_hook("skin", false, "object-key-init")
  }, "var-init");
  var _changeLayerSwitch = function (val) {
    for (var i in _layerSwitch) {
      _layerSwitch[i] = cc11001100_hook("_layerSwitch[i]", false, "assign");
    }
    _layerSwitch[val] = cc11001100_hook("_layerSwitch[val]", true, "assign");
  };
  var _changeLayerWithSwitch = function () {
    for (var i in _layerSwitch) {
      if (!_layerSwitch[i]) _closeModLayer(i);
    }
  };
  var _closeModLayer = function (val) {
    switch (val) {
      case "skin":
        if ($("#s_skin_layer").get(0)) {
          F.call("superman:skin/skin_control", "hide", true);
        }
        break;
    }
  };
  exports.changeLayer = cc11001100_hook("exports.changeLayer", function (layer) {
    _changeLayerSwitch(layer);
    _changeLayerWithSwitch();
  }, "assign");
});
F.module("superman:mngr/menu_user", function (require, exports, ctx) {
  var popup = cc11001100_hook("popup", null, "var-init");
  var quitDialog = cc11001100_hook("quitDialog", require("superman:mngr/quit_dialog"), "var-init");
  function changeAccount() {
    ctx.fire("userQuitClick", {
      userQuit: cc11001100_hook("userQuit", "changeaccount", "object-key-init")
    });
    var loginurl = cc11001100_hook("loginurl", location.protocol + "//passport.baidu.com/passApi/js/uni_login_wrapper.js?cdnversion=" + new Date().getTime(), "var-init");
    $("#head").css("min-height", "");
    if (popup) {
      popup.show();
    } else {
      $.getScript(loginurl, function () {
        var config = cc11001100_hook("config", {
          loginVersion: cc11001100_hook("loginVersion", "v5", "object-key-init"),
          composeTemplate: cc11001100_hook("composeTemplate", 1, "object-key-init"),
          authsiteCfg: {
            act: cc11001100_hook("act", "implicit", "object-key-init"),
            display: cc11001100_hook("display", "popup", "object-key-init"),
            jumpUrl: cc11001100_hook("jumpUrl", location.protocol + "//www.baidu.com/cache/user/html/xd.html", "object-key-init"),
            onBindSuccess: function (url, obj) {
              var user = cc11001100_hook("user", decodeURIComponent(obj.passport_uname || obj.displayname), "var-init");
              bds.se.login.success(user);
              return false;
            }
          },
          apiOpt: {
            staticPage: cc11001100_hook("staticPage", window.location.protocol + "//" + window.location.host + "/home/xman/show/worldcupv3jump", "object-key-init"),
            loginType: cc11001100_hook("loginType", 1, "object-key-init"),
            product: cc11001100_hook("product", "mn", "object-key-init"),
            u: cc11001100_hook("u", window.document.location.href, "object-key-init"),
            safeFlag: cc11001100_hook("safeFlag", 0, "object-key-init"),
            memberPass: cc11001100_hook("memberPass", true, "object-key-init"),
            sms: cc11001100_hook("sms", 5, "object-key-init")
          },
          cache: cc11001100_hook("cache", true, "object-key-init"),
          forgetLink: cc11001100_hook("forgetLink", "https://passport.baidu.com/?getpass_index&tpl=mn&u=" + encodeURIComponent(window.location.href), "object-key-init"),
          registerLink: cc11001100_hook("registerLink", "https://passport.baidu.com/v2/?reg&regType=1&tpl=mn&u=" + encodeURIComponent(window.location.href), "object-key-init"),
          authsite: cc11001100_hook("authsite", ["tsina", "weixin", "qzone"], "object-key-init"),
          tangram: cc11001100_hook("tangram", !window.baidu || !window.baidu.version || baidu.version.indexOf("2.") !== 0, "object-key-init"),
          onLoginSuccess: function (args) {}
        }, "var-init");
        popup = cc11001100_hook("popup", passport.pop.init(config), "assign");
        popup.show();
      });
    }
  }
  var menuTimer = cc11001100_hook("menuTimer", null, "var-init");
  function showMenu(menu, target) {
    cc11001100_hook("menu", menu, "function-parameter");
    cc11001100_hook("target", target, "function-parameter");
    clearTimeout(menuTimer);
    var pos = cc11001100_hook("pos", $(document.body).width() - target.offset().left - menu.width() / 2 - target.width() / 2, "var-init");
    menu.css({
      display: cc11001100_hook("display", "block", "object-key-init"),
      right: cc11001100_hook("right", pos, "object-key-init")
    });
  }
  function hideMenu(menu) {
    cc11001100_hook("menu", menu, "function-parameter");
    menuTimer = cc11001100_hook("menuTimer", setTimeout(function () {
      menu.hide();
    }, 200), "assign");
  }
  function bindEvent() {
    var userMenu = cc11001100_hook("userMenu", $("#s-user-name-menu"), "var-init");
    var settingMenu = cc11001100_hook("settingMenu", $("#s-user-setting-menu"), "var-init");
    userMenu.find(".s-switch-accunt").on("click", function (e) {
      e.preventDefault();
      changeAccount();
    });
    userMenu.find(".quit").on("click", function (e) {
      e.preventDefault();
      ctx.fire("categoryClick", {
        category: cc11001100_hook("category", "tjlogout", "object-key-init")
      });
      quitDialog.init();
    });
    $("#s-top-username").on("mouseenter", function (e) {
      showMenu(userMenu, $(this));
      settingMenu.hide();
    }).on("mouseleave", function () {
      hideMenu(userMenu);
    });
    userMenu.on("mouseenter", function (e) {
      clearTimeout(menuTimer);
    }).on("mouseleave", function () {
      hideMenu(userMenu);
    });
    userMenu.find(".s-msg").on("mousedown", function () {
      ctx.fire("categoryClick", {
        category: cc11001100_hook("category", "msg", "object-key-init"),
        hasNews: cc11001100_hook("hasNews", userMenu.find(".s-msg-count").text() === "" ? 0 : 1, "object-key-init")
      });
    });
  }
  function init() {
    bindEvent();
  }
  exports.init = cc11001100_hook("exports.init", init, "assign");
});
F.module("superman:mngr/menu_common", function (require, exports, ctx) {
  var opt = cc11001100_hook("opt", {}, "var-init");
  opt.baseParams = cc11001100_hook("opt.baseParams", {
    ct: cc11001100_hook("ct", 2, "object-key-init"),
    qid: cc11001100_hook("qid", s_session.seqId, "object-key-init"),
    sid: cc11001100_hook("sid", s_session.sid, "object-key-init"),
    ssid: cc11001100_hook("ssid", s_session.logPortrait, "object-key-init"),
    logid: cc11001100_hook("logid", s_session.logId || "0", "object-key-init"),
    _r: cc11001100_hook("_r", Math.random(), "object-key-init")
  }, "assign");
  var thunder = cc11001100_hook("thunder", window.Thunder.get(opt), "var-init");
  var thunderlogClick = cc11001100_hook("thunderlogClick", {
    tid: cc11001100_hook("tid", 11546, "object-key-init"),
    logFrom: cc11001100_hook("logFrom", "feed_index", "object-key-init"),
    logInfo: cc11001100_hook("logInfo", "tts_click", "object-key-init"),
    logExtra: {
      type: cc11001100_hook("type", "tts_switch_click", "object-key-init"),
      value: cc11001100_hook("value", "", "object-key-init")
    }
  }, "var-init");
  var urlSid = cc11001100_hook("urlSid", s_session.sid, "var-init");
  function showHomepageTtsStatus() {
    var top = cc11001100_hook("top", this, "var-init");
    var _ctx = cc11001100_hook("_ctx", this, "var-init");
    if ($.isIE6) {
      top = cc11001100_hook("top", $(window).height() / 2 + $(window).scrollTop(), "assign");
    } else {
      top = cc11001100_hook("top", "50%", "assign");
    }
    if (_ctx.TtsPannel) {
      _ctx.TtsPannel.hide();
    }
    var text = cc11001100_hook("text", "已为您关闭播报", "var-init");
    F.use("superman:superuijs/component/dialog", function (Dialog) {
      _ctx.TtsPannel = cc11001100_hook("_ctx.TtsPannel", new Dialog({
        identity: cc11001100_hook("identity", "homepageCloseTts", "object-key-init"),
        content: cc11001100_hook("content", '<span class="homepage-tts-pannel-text">' + text + "</span>", "object-key-init"),
        theme: cc11001100_hook("theme", "homepage-tts-pannel", "object-key-init"),
        hasClose: cc11001100_hook("hasClose", false, "object-key-init"),
        hasMask: cc11001100_hook("hasMask", false, "object-key-init"),
        width: cc11001100_hook("width", 113, "object-key-init"),
        height: cc11001100_hook("height", 34, "object-key-init"),
        top: cc11001100_hook("top", top, "object-key-init")
      }), "assign");
      $("#sui-dialog-mask").on("click", function () {
        _ctx.TtsPannel.hide();
      });
    });
    setTimeout(function () {
      _ctx.TtsPannel.hide();
    }, 1500);
  }
  function bindHideFeedEvent() {
    var $ttsBtn = cc11001100_hook("$ttsBtn", $("#s-user-setting-menu .s-set-homepage-tts"), "var-init");
    $("#s-user-setting-menu .hide-feed").click(function () {
      $ttsBtn.css({
        display: cc11001100_hook("display", "none", "object-key-init")
      });
      ctx.fire("hideMain");
      ctx.fire("categoryClick", {
        category: cc11001100_hook("category", "tjhidefeed", "object-key-init")
      });
    });
    $("#s-user-setting-menu .show-feed").click(function () {
      var bsToken = cc11001100_hook("bsToken", $("#bsToken") && $("#bsToken").val() || "", "var-init");
      var hrefUrl = cc11001100_hook("hrefUrl", location.protocol + "//" + location.host + "/home/data/liteon?bsToken=" + bsToken, "var-init");
      window.location.href = cc11001100_hook("window.location.href", hrefUrl, "assign");
      ctx.fire("categoryClick", {
        category: cc11001100_hook("category", "tjshowfeed", "object-key-init")
      });
    });
    $("#s-user-setting-menu .set-close-homepage-tts").click(function () {
      showHomepageTtsStatus();
      UPS.set("homepageTTS", "0");
      UPS.save(function () {
        if ($(".s-manhattan-index").hasClass("open-homepage-tts")) {
          $(".s-manhattan-index").removeClass("open-homepage-tts");
        }
      });
      $(".set-close-homepage-tts").css({
        display: cc11001100_hook("display", "none", "object-key-init")
      });
      $(".set-open-homepage-tts").css({
        display: cc11001100_hook("display", "inline-block", "object-key-init")
      });
      var thunderlog = cc11001100_hook("thunderlog", $.extend(true, {}, thunderlogClick), "var-init");
      thunderlog.logExtra.value = cc11001100_hook("thunderlog.logExtra.value", "off", "assign");
      thunderlog.logExtra = cc11001100_hook("thunderlog.logExtra", $.stringify(thunderlog.logExtra), "assign");
      thunder.send(thunderlog);
    });
    $("#s-user-setting-menu .set-open-homepage-tts").click(function () {
      UPS.set("homepageTTS", "1");
      UPS.save(function () {
        if (!$(".s-manhattan-index").hasClass("open-homepage-tts")) {
          $(".s-manhattan-index").addClass("open-homepage-tts");
        }
      });
      $(".set-close-homepage-tts").css({
        display: cc11001100_hook("display", "inline-block", "object-key-init")
      });
      $(".set-open-homepage-tts").css({
        display: cc11001100_hook("display", "none", "object-key-init")
      });
      var thunderlog = cc11001100_hook("thunderlog", $.extend(true, {}, thunderlogClick), "var-init");
      thunderlog.logExtra.value = cc11001100_hook("thunderlog.logExtra.value", "on", "assign");
      thunderlog.logExtra = cc11001100_hook("thunderlog.logExtra", $.stringify(thunderlog.logExtra), "assign");
      thunder.send(thunderlog);
    });
  }
  function bindSetSkinEvent() {
    var hideRedpoint = cc11001100_hook("hideRedpoint", "0", "var-init");
    try {
      hideRedpoint = cc11001100_hook("hideRedpoint", window.localStorage.getItem("hide_redpoint_skin_new"), "assign");
    } catch (e) {}
    if (hideRedpoint !== "1") {
      $("#s-user-setting-menu .s-set-skin").addClass("red-point");
    }
    $("#s-user-setting-menu .s-set-skin").on("click", function () {
      ctx.use("skin/skin_init_new", function (si) {
        si.init();
      });
      try {
        window.localStorage.setItem("hide_redpoint_skin_new", "1");
        $("#s-user-setting-menu .s-set-skin").removeClass("red-point");
      } catch (e) {}
      ctx.fire("categoryClick", {
        category: cc11001100_hook("category", "skin", "object-key-init")
      });
    });
  }
  function init() {
    bindHideFeedEvent();
    bindSetSkinEvent();
  }
  exports.init = cc11001100_hook("exports.init", init, "assign");
});
F.module("superman:mngr/quit_dialog", function (require, exports, ctx) {
  var quitDialog = cc11001100_hook("quitDialog", null, "var-init");
  var PlaceHolder = cc11001100_hook("PlaceHolder", require("superman:superuijs/component/placeholder"), "var-init");
  var setinter = cc11001100_hook("setinter", null, "var-init");
  function setStore(tpl, key, value, cb) {
    cc11001100_hook("tpl", tpl, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("value", value, "function-parameter");
    cc11001100_hook("cb", cb, "function-parameter");
    var obj = cc11001100_hook("obj", {}, "var-init"),
      submitUrl = cc11001100_hook("submitUrl", "/home/xman/submit/", "var-init");
    obj[tpl] = cc11001100_hook("obj[tpl]", obj[tpl] || {}, "assign");
    if (typeof value != "string") {
      value = cc11001100_hook("value", $.stringify(value), "assign");
    }
    $.ajaxpost(submitUrl + "xcardstore", {
      tpl: cc11001100_hook("tpl", tpl, "object-key-init"),
      key: cc11001100_hook("key", key, "object-key-init"),
      value: cc11001100_hook("value", value, "object-key-init"),
      cmd: cc11001100_hook("cmd", "set", "object-key-init")
    }, function (data) {
      obj[tpl].key = cc11001100_hook("obj[tpl].key", value, "assign");
      cb && cb(data.errNo);
    });
  }
  function placeHolder() {
    if ("placeholder" in document.createElement("input")) {
      return;
    }
    new PlaceHolder({
      componentWrap: cc11001100_hook("componentWrap", $("#s_feedback_home .dialog-text-wrap"), "object-key-init"),
      top: cc11001100_hook("top", 7, "object-key-init"),
      left: cc11001100_hook("left", 0, "object-key-init"),
      identity: cc11001100_hook("identity", "superplus", "object-key-init"),
      target: cc11001100_hook("target", $("#suggest_con"), "object-key-init"),
      holderText: cc11001100_hook("holderText", "留下您宝贵的意见，我们会努力改进", "object-key-init"),
      width: cc11001100_hook("width", 250, "object-key-init"),
      height: cc11001100_hook("height", 24, "object-key-init"),
      lineheight: cc11001100_hook("lineheight", 24, "object-key-init"),
      font: cc11001100_hook("font", 13, "object-key-init")
    });
    new PlaceHolder({
      componentWrap: cc11001100_hook("componentWrap", $("#s_feedback_home .dialog-input-wrap"), "object-key-init"),
      top: cc11001100_hook("top", 4, "object-key-init"),
      left: cc11001100_hook("left", 0, "object-key-init"),
      identity: cc11001100_hook("identity", "superplus", "object-key-init"),
      target: cc11001100_hook("target", $("#s_user_contact"), "object-key-init"),
      holderText: cc11001100_hook("holderText", "留下您的联系方式，方便我们及时回复您", "object-key-init"),
      width: cc11001100_hook("width", 250, "object-key-init"),
      height: cc11001100_hook("height", 24, "object-key-init"),
      lineheight: cc11001100_hook("lineheight", 24, "object-key-init"),
      font: cc11001100_hook("font", 13, "object-key-init")
    });
  }
  function checkboxHtml(customClass) {
    cc11001100_hook("customClass", customClass, "function-parameter");
    return ['<span class="c-checkbox ' + customClass + '">', '<span class="c-checkbox-inner">', '<span class="c-icon c-checkbox-inner-bg">&#xe611;</span>', '<span class="c-icon c-checkbox-inner-i">&#xe61a;</span>', "</span>", "</span>"].join("");
  }
  function getDialogHtml(data) {
    cc11001100_hook("data", data, "function-parameter");
    var tipcon = cc11001100_hook("tipcon", ['<div class="dialog-con-wrap c-font-normal c-color-t" id="dialog_con_wrap">', '<i class="c-icon dialog-close">&#xe610;</i>', '<p class="c-font-large dialog-title">您确定要退出吗？</p>', '<iframe style="display:none;" name="s_homelogout_frame"></iframe>', '<div class="c-color-gray">退出后 “我的导航” 、 “我的股票” 、 “音乐” 及 “换肤” 功能将无法使用</div>', "#{detail}", '<div class="dialog-foot c-gap-top-large">', '<div class="dialog-foot-right">', '<span class="dialog-btn-ok c-btn c-gap-right-large">退出</span>', '<span class="dialog-btn-cancel c-btn c-btn-primary">保持登录</span>', "</div>", '<div class="dialog-feedback-btn">', checkboxHtml("dialog-feedback-checkbox"), '<span class="c-gap-left-small dialog-feedback-text">意见反馈</span>', "</div>", "</div>", "</div>"].join(""), "var-init");
    var detailcon = cc11001100_hook("detailcon", ['<div class="dialog-detailcon">', '<form id= "s_feedback_home" target="s_homelogout_frame" action="#{actionurl}" method="post">', '<div class="dialog-con-title1 c-color-text c-gap-bottom">反馈类型：</div>', '<div class="dialog-con-option">', "#{spancon}", "</div>", '<div class="dialog-con-title2 c-color-text c-gap-bottom">其他建议：<span class="dialog-textarea-tip c-color-red c-gap-left-small">不能超过300个字哦，小度记不住啦!</span></div>', '<div class="dialog-text-wrap">', '<textarea class="dialog-textarea c-textarea" id="suggest_con" placeholder="留下您宝贵的意见，我们会努力改进" name="issuedesc" value style="resize:none;"></textarea>', "</div>", '<div class="dialog-con-title c-color-text c-gap-bottom">联系方式: <span class="dialog-input-tip c-color-red c-gap-left-small">不能超过100个字哦，小度记不住啦!</span></div>', '<div class="dialog-input-wrap">', '<input type="text" autocomplete="off" class="dialog-user-contact c-input" id="s_user_contact" placeholder="留下您的联系方式，方便我们及时回复您"  name="contactinfo" value style="resize:none;">', "</div>", '<input type="hidden" id="s_quit_necdata" name="necData">', "</form>", "</div>"].join(""), "var-init");
    var sCon = cc11001100_hook("sCon", "", "var-init");
    var actionSrc = cc11001100_hook("actionSrc", $.url.escapeSSL("http://f3.baidu.com/index.php/feedback/zx/getData"), "var-init");
    var opts = cc11001100_hook("opts", data.opts, "var-init");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < opts.length; i++) {
      sCon += cc11001100_hook("sCon", ['<span class="dialog-check-item" data-id = "' + opts[i].id + '">', checkboxHtml("c-gap-right-small"), '<span class="text">' + opts[i].title + "</span>", "</span>"].join(""), "assign");
    }
    var detailContent = cc11001100_hook("detailContent", $.formatString(detailcon, {
      spancon: cc11001100_hook("spancon", sCon, "object-key-init"),
      actionurl: cc11001100_hook("actionurl", actionSrc, "object-key-init")
    }), "var-init");
    var content = cc11001100_hook("content", $.formatString(tipcon, {
      detail: cc11001100_hook("detail", detailContent, "object-key-init")
    }), "var-init");
    return content;
  }
  function quitEvent() {
    var suggestcon = cc11001100_hook("suggestcon", "", "var-init");
    var feedbackbtn = cc11001100_hook("feedbackbtn", $("#dialog_con_wrap .dialog-feedback-btn"), "var-init");
    feedbackbtn.on("click", function () {
      var that = cc11001100_hook("that", $(this), "var-init");
      var spanchild = cc11001100_hook("spanchild", that.children(".dialog-feedback-checkbox"), "var-init");
      var clickok = cc11001100_hook("clickok", spanchild.hasClass("c-checkbox-checked"), "var-init");
      if (clickok) {
        ctx.fire("userQuitClick", {
          userQuit: cc11001100_hook("userQuit", "suggestbtncancel", "object-key-init")
        });
        $("#dialog_con_wrap .dialog-input-tip").hide();
        $("#dialog_con_wrap .dialog-textarea-tip").hide();
        $("#dialog_con_wrap .dialog-detailcon").hide();
        spanchild.removeClass("c-checkbox-checked");
      } else {
        ctx.fire("userQuitClick", {
          userQuit: cc11001100_hook("userQuit", "suggestbtnok", "object-key-init")
        });
        spanchild.addClass("c-checkbox-checked");
        if ($.browser.ie == 7) {
          setTimeout(function () {
            $("#dialog_con_wrap .dialog-detailcon").show();
          }, 50);
        } else {
          $("#dialog_con_wrap .dialog-detailcon").show();
        }
      }
      setTimeout(function () {
        quitDialog.window.css({
          "margin-top": cc11001100_hook("margin-top", -1 * quitDialog.window.height() / 2 + "px", "object-key-init")
        });
      }, 200);
    });
    $("#dialog_con_wrap .dialog-con-option").delegate(".dialog-check-item", "click", function () {
      var that = cc11001100_hook("that", $(this), "var-init");
      var selectedid = cc11001100_hook("selectedid", that.attr("data-id"), "var-init");
      if (that.hasClass("c-checkbox-checked")) {
        ctx.fire("userQuitClick", {
          userQuit: cc11001100_hook("userQuit", "quitreasoncancel" + selectedid, "object-key-init")
        });
        that.removeClass("c-checkbox-checked");
      } else {
        ctx.fire("userQuitClick", {
          userQuit: cc11001100_hook("userQuit", "quitreason" + selectedid, "object-key-init")
        });
        that.addClass("c-checkbox-checked");
      }
    });
    $("#dialog_con_wrap .dialog-close").on("click", function (e) {
      ctx.fire("userQuitClick", {
        userQuit: cc11001100_hook("userQuit", "quitclose", "object-key-init")
      });
      quitDialog.hide();
    });
    $("#dialog_con_wrap .dialog-btn-cancel").on("click", function () {
      ctx.fire("userQuitClick", {
        userQuit: cc11001100_hook("userQuit", "quitbtncancel", "object-key-init")
      });
      quitDialog.hide();
    });
    $("#dialog_con_wrap .dialog-btn-ok").on("click", function () {
      var that = cc11001100_hook("that", $(this), "var-init"),
        mydata = cc11001100_hook("mydata", "", "var-init"),
        numitem = cc11001100_hook("numitem", "", "var-init"),
        getSpan = cc11001100_hook("getSpan", $("#dialog_con_wrap .dialog-check-item"), "var-init"),
        spanlen = cc11001100_hook("spanlen", getSpan.length, "var-init"),
        contactuser = cc11001100_hook("contactuser", "", "var-init"),
        _contactuser = cc11001100_hook("_contactuser", "", "var-init"),
        contactlen = cc11001100_hook("contactlen", "", "var-init"),
        other = cc11001100_hook("other", "", "var-init"),
        len = cc11001100_hook("len", 1, "var-init");
      var conshow = cc11001100_hook("conshow", $("#dialog_con_wrap .dialog-feedback-checkbox").hasClass("c-checkbox-checked"), "var-init");
      if (!conshow) {
        ctx.fire("userQuitClick", {
          userQuit: cc11001100_hook("userQuit", "quitbtnok", "object-key-init")
        });
        quitAction();
        return;
      }
      getSpan.each(function (idx, item) {
        var _this = cc11001100_hook("_this", $(this), "var-init"),
          attrid = cc11001100_hook("attrid", "", "var-init");
        if (_this.hasClass("c-checkbox-checked")) {
          attrid = cc11001100_hook("attrid", _this.attr("data-id"), "assign");
          numitem += cc11001100_hook("numitem", attrid, "assign");
          if (idx != spanlen - 1) {
            numitem += cc11001100_hook("numitem", ",", "assign");
          }
        }
      });
      suggestcon = cc11001100_hook("suggestcon", $("#suggest_con").val(), "assign");
      contactuser = cc11001100_hook("contactuser", $("#s_user_contact").val(), "assign");
      other = cc11001100_hook("other", suggestcon.replace(/(^(\u3000|\s|\t|\u00A0)*)|((\u3000|\s|\t|\u00A0)*$)/g, ""), "assign");
      _contactuser = cc11001100_hook("_contactuser", contactuser.replace(/(^(\u3000|\s|\t|\u00A0)*)|((\u3000|\s|\t|\u00A0)*$)/g, ""), "assign");
      len = cc11001100_hook("len", other.length, "assign");
      contactlen = cc11001100_hook("contactlen", _contactuser.length, "assign");
      if (len > 300 || contactlen > 100) {
        if (len > 300) {
          $("#dialog_con_wrap .dialog-textarea-tip").show();
        } else {
          $("#dialog_con_wrap .dialog-input-tip").show();
        }
      } else {
        ctx.fire("userQuitClick", {
          userQuit: cc11001100_hook("userQuit", "quitbtnok", "object-key-init")
        });
        mydata = cc11001100_hook("mydata", {
          opts: cc11001100_hook("opts", numitem, "object-key-init")
        }, "assign");
        $("#s_quit_necdata").val($.stringify({
          product_id: cc11001100_hook("product_id", 107, "object-key-init"),
          userAgent: cc11001100_hook("userAgent", navigator.userAgent, "object-key-init"),
          issuedesc: cc11001100_hook("issuedesc", other, "object-key-init"),
          documentcookie: cc11001100_hook("documentcookie", document.cookie, "object-key-init"),
          email: cc11001100_hook("email", _contactuser, "object-key-init"),
          url: cc11001100_hook("url", window.location.href, "object-key-init")
        }));
        if (other != "") {
          $("#s_feedback_home").submit();
        }
        setStore("quitreason", "quitcon", mydata, function () {
          quitAction();
        });
      }
    });
  }
  function quitAction() {
    setTimeout(function () {
      window.location.href = cc11001100_hook("window.location.href", "https://passport.baidu.com/?logout&u=https://www.baidu.com", "assign");
    }, 200);
  }
  function renderDialog(data) {
    cc11001100_hook("data", data, "function-parameter");
    var content = cc11001100_hook("content", getDialogHtml(data), "var-init");
    F.use("superman:superuijs/component/dialog", function (Dialog) {
      quitDialog = cc11001100_hook("quitDialog", new Dialog({
        identity: cc11001100_hook("identity", "quit", "object-key-init"),
        content: cc11001100_hook("content", content, "object-key-init"),
        width: cc11001100_hook("width", 416, "object-key-init"),
        autoShow: cc11001100_hook("autoShow", true, "object-key-init"),
        theme: cc11001100_hook("theme", "quite", "object-key-init"),
        hasClose: cc11001100_hook("hasClose", false, "object-key-init"),
        dialogClassName: cc11001100_hook("dialogClassName", "s-quit-dialog", "object-key-init"),
        position: function () {
          return {
            top: cc11001100_hook("top", $.isIE === 6 ? $(window).height() / 2 : "50%", "object-key-init"),
            left: cc11001100_hook("left", "50%", "object-key-init"),
            "margin-left": cc11001100_hook("margin-left", -246, "object-key-init"),
            "margin-top": cc11001100_hook("margin-top", -75, "object-key-init")
          };
        }
      }), "assign");
      placeHolder();
      quitEvent();
    });
  }
  function quitRequest() {
    $.ajaxget("/home/xman/data/exitfankui", function (data) {
      if (data.errNo != 0) {
        location.href = cc11001100_hook("location.href", "https://passport.baidu.com/?logout&u=https://www.baidu.com", "assign");
        return;
      }
      var getData = cc11001100_hook("getData", data.bsData, "var-init");
      renderDialog(getData);
    }, true);
  }
  function quitDialogShow() {
    $("#dialog_con_wrap .dialog-input-tip").hide();
    $("#dialog_con_wrap .dialog-textarea-tip").hide();
    $("#dialog_con_wrap .dialog-detailcon").hide();
    $("#dialog_con_wrap .dialog-feedback-checkbox").removeClass("c-checkbox-checked");
    $("#dialog_con_wrap #suggest_con").val("");
    $("#dialog_con_wrap #s_user_contact").val("");
    clearTimeout(setinter);
    $("#dialog_con_wrap .dialog-check-item").removeClass("c-checkbox-checked");
    placeHolder();
    quitDialog.show();
  }
  function init() {
    if (quitDialog) {
      quitDialogShow();
    } else {
      quitRequest();
    }
  }
  exports.init = cc11001100_hook("exports.init", init, "assign");
});
F.addLog("superman:mngr/top_menunav_new", {
  tipsClose: cc11001100_hook("tipsClose", "2300100001", "object-key-init")
});
F.module("superman:mngr/top_menunav_new", function (require, exports, ctx) {
  var pslog = cc11001100_hook("pslog", require("superman:ps/log"), "var-init");
  var keyMap = cc11001100_hook("keyMap", pslog.keyMap, "var-init");
  keyMap = cc11001100_hook("keyMap", $.extend(keyMap, {
    "百度营销": cc11001100_hook("百度营销", "tjyingxiao", "object-key-init"),
    "风云榜": cc11001100_hook("风云榜", "tjbang", "object-key-init")
  }), "assign");
  function log(that) {
    cc11001100_hook("that", that, "function-parameter");
    var key = cc11001100_hook("key", that.text().replace(/[\s\t\xa0\u3000]/g, ""), "var-init");
    if (keyMap[key]) {
      pslog.fireLog(keyMap[key], {
        url: cc11001100_hook("url", that.attr("href"), "object-key-init")
      });
    }
  }
  function initLog() {
    $("#s-top-more").on("mousedown", ".s-top-more-content a", function () {
      log($(this));
    });
  }
  exports.init = cc11001100_hook("exports.init", function () {
    initLog();
  }, "assign");
});
F.module("superman:common/guide_tip", function (require, exports, ctx) {
  require("guide.css");
  var tpl = cc11001100_hook("tpl", {
    guide: cc11001100_hook("guide", '<span #{id} class="s-guide-tip#{yahei}" #{guideStyle}><span class="#{innerClass}" #{innerStyle}>#{content}</span></span>', "object-key-init"),
    arrow: cc11001100_hook("arrow", '<span class="#{arrowClass}" #{arrowStyle}></span>', "object-key-init"),
    content: cc11001100_hook("content", '<span class="#{contentClass}" #{contentStyle}><span class="tip-content-msg" #{msgStyle}>#{content}</span>#{close}</span>', "object-key-init"),
    close: cc11001100_hook("close", '<a class="guide-tip-close" #{closeStyle} href="#" onclick="return false;" hidefocus="true"></a>', "object-key-init")
  }, "var-init");
  exports.render = cc11001100_hook("exports.render", function (cfg) {
    var arrowHtml = cc11001100_hook("arrowHtml", "", "var-init");
    if (cfg.arrowType) {
      arrowHtml = cc11001100_hook("arrowHtml", $.formatString(tpl.arrow, {
        arrowClass: cc11001100_hook("arrowClass", "guide-tip-arrow-" + cfg.arrowType, "object-key-init"),
        arrowStyle: cc11001100_hook("arrowStyle", 'style="left:' + cfg.arrowPosLeft + 'px;"', "object-key-init")
      }), "assign");
    }
    var msgStyle = cc11001100_hook("msgStyle", cfg.textAlign ? "text-align:" + cfg.textAlign + ";" : "", "var-init");
    msgStyle += cc11001100_hook("msgStyle", cfg.width ? "width: " + (cfg.hasClose ? cfg.width - 11 : cfg.width) + "px;" : "", "assign");
    var closeStyle = cc11001100_hook("closeStyle", cfg.type == "insert" ? 'style="position:relative;"' : "", "var-init");
    var contentHtml = cc11001100_hook("contentHtml", $.formatString(tpl.content, {
      content: cc11001100_hook("content", cfg.content, "object-key-init"),
      contentClass: cc11001100_hook("contentClass", cfg.arrowType ? "guide-tip-content-" + cfg.arrowType : "guide-tip-content", "object-key-init"),
      contentStyle: cc11001100_hook("contentStyle", cfg.width ? 'style="width:' + cfg.width + 'px;"' : "", "object-key-init"),
      msgStyle: cc11001100_hook("msgStyle", 'style="' + msgStyle + '"', "object-key-init"),
      close: cc11001100_hook("close", cfg.hasClose ? $.formatString(tpl.close, {
        closeStyle: cc11001100_hook("closeStyle", closeStyle, "object-key-init")
      }) : "", "object-key-init")
    }), "var-init");
    var guideStyle = cc11001100_hook("guideStyle", cfg.width ? "width:" + cfg.width + "px;" : "", "var-init");
    guideStyle += cc11001100_hook("guideStyle", cfg.pos && cfg.pos.left ? "left: " + cfg.pos.left + "px;" : "", "assign");
    guideStyle += cc11001100_hook("guideStyle", cfg.pos && cfg.pos.top ? "top: " + cfg.pos.top + "px;" : "", "assign");
    guideStyle += cc11001100_hook("guideStyle", !cfg.type ? "position:absolute; z-index: 1999;" : "", "assign");
    var innerStyle = cc11001100_hook("innerStyle", "", "var-init");
    if (cfg.arrowType == "up") {
      innerStyle = cc11001100_hook("innerStyle", "margin-top: 10px;", "assign");
    } else if (cfg.arrowType == "down") {
      innerStyle = cc11001100_hook("innerStyle", "margin-bottom:12px;", "assign");
    }
    if ($.isIE6 && cfg.arrowType == "down") {
      innerStyle += cc11001100_hook("innerStyle", "padding: 6px 10px;", "assign");
    }
    var html = cc11001100_hook("html", $.formatString(tpl.guide, {
      id: cc11001100_hook("id", cfg.id ? 'id="' + cfg.id + '"' : "", "object-key-init"),
      yahei: cc11001100_hook("yahei", cfg.withoutYahei ? "" : " yahei", "object-key-init"),
      innerClass: cc11001100_hook("innerClass", cfg.noShadow ? "guide-tip-inner guide-tip-shadow" : "guide-tip-inner", "object-key-init"),
      innerStyle: cc11001100_hook("innerStyle", 'style="' + innerStyle + '"', "object-key-init"),
      guideStyle: cc11001100_hook("guideStyle", 'style="' + guideStyle + '"', "object-key-init"),
      content: cc11001100_hook("content", cfg.arrowType == "up" ? arrowHtml + contentHtml : contentHtml + arrowHtml, "object-key-init")
    }), "var-init");
    return html;
  }, "assign");
});
F.addLog("superman:page", {
  ieHomePage: cc11001100_hook("ieHomePage", "9000100000", "object-key-init"),
  viewRange: cc11001100_hook("viewRange", "9000300000", "object-key-init")
});
F.module("superman:page/page_exp", function (require, exports, ctx) {
  var ieHomePageEXP = function () {
    if (!$.browser.ie) {
      return;
    }
    var _check = function () {
      try {
        $("body").append('<div id="s_homepage_href" style="display:none;behavior:url(\'#default#homePage\')"></div>');
        var hpFlag = cc11001100_hook("hpFlag", document.getElementById("s_homepage_href").isHomePage("http://www.baidu.com/") ? 1 : 0, "var-init");
        ctx.fire("ieHomePage", {
          opType: cc11001100_hook("opType", hpFlag, "object-key-init")
        });
      } catch (e) {}
    };
    _check();
  };
  var viewHeightEXP = function () {
    var vh = cc11001100_hook("vh", $(window).height(), "var-init"),
      bh = cc11001100_hook("bh", $("body").height(), "var-init");
    var viewrange = cc11001100_hook("viewrange", 10, "var-init");
    var viewover = cc11001100_hook("viewover", vh < bh ? 1 : 0, "var-init");
    viewrange = cc11001100_hook("viewrange", Math.ceil(vh / 50), "assign");
    if (viewrange < 10) {
      viewrange = cc11001100_hook("viewrange", 10, "assign");
    } else if (viewrange > 30) {
      viewrange = cc11001100_hook("viewrange", 30, "assign");
    }
    ctx.fire("viewRange", {
      isover: cc11001100_hook("isover", viewover, "object-key-init"),
      range: cc11001100_hook("range", viewrange, "object-key-init"),
      vh: cc11001100_hook("vh", vh, "object-key-init"),
      bh: cc11001100_hook("bh", bh, "object-key-init")
    });
  };
  var initExp = function (st, en, pvrate, fn) {
    st = cc11001100_hook("st", st || 0, "assign");
    en = cc11001100_hook("en", en || 0, "assign");
    pvrate = cc11001100_hook("pvrate", pvrate || 0, "assign");
    if (sysTime > st && sysTime < en && Math.random() * 100 < pvrate) {
      fn && fn();
    }
  };
  exports.init = cc11001100_hook("exports.init", function () {
    if ($.browser.ie && +new Date() % 100 < 1) {
      ieHomePageEXP();
    }
    initExp(0, +new Date(2015, 0, 1, 0, 0, 0) / 1e3, 1, function () {
      viewHeightEXP();
    });
  }, "assign");
});