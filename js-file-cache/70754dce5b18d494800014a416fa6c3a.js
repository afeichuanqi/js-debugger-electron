define("superman/components/content-info", ["require", "exports"], function (require, _exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: cc11001100_hook("value", true, "object-key-init")
  });
  _exports.ContentInfo = cc11001100_hook("_exports.ContentInfo", void 0, "assign");
  function _classCallCheck(instance, Constructor) {
    cc11001100_hook("instance", instance, "function-parameter");
    cc11001100_hook("Constructor", Constructor, "function-parameter");
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    cc11001100_hook("target", target, "function-parameter");
    cc11001100_hook("props", props, "function-parameter");
    for (var i = cc11001100_hook("i", 0, "var-init"); i < props.length; i++) {
      var descriptor = cc11001100_hook("descriptor", props[i], "var-init");
      descriptor.enumerable = cc11001100_hook("descriptor.enumerable", descriptor.enumerable || false, "assign");
      descriptor.configurable = cc11001100_hook("descriptor.configurable", true, "assign");
      if ("value" in descriptor) descriptor.writable = cc11001100_hook("descriptor.writable", true, "assign");
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    cc11001100_hook("Constructor", Constructor, "function-parameter");
    cc11001100_hook("protoProps", protoProps, "function-parameter");
    cc11001100_hook("staticProps", staticProps, "function-parameter");
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    cc11001100_hook("obj", obj, "function-parameter");
    cc11001100_hook("key", key, "function-parameter");
    cc11001100_hook("value", value, "function-parameter");
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: cc11001100_hook("value", value, "object-key-init"),
        enumerable: cc11001100_hook("enumerable", true, "object-key-init"),
        configurable: cc11001100_hook("configurable", true, "object-key-init"),
        writable: cc11001100_hook("writable", true, "object-key-init")
      });
    } else {
      obj[key] = cc11001100_hook("obj[key]", value, "assign");
    }
    return obj;
  }
  var ContentInfo = cc11001100_hook("ContentInfo", function () {
    function ContentInfo() {
      _classCallCheck(this, ContentInfo);
      _defineProperty(this, "originList", void 0);
      _defineProperty(this, "originWidthList", void 0);
      _defineProperty(this, "cloneInfoList", void 0);
      _defineProperty(this, "index", void 0);
      _defineProperty(this, "hasTip", void 0);
      _defineProperty(this, "showTip", void 0);
      _defineProperty(this, "bottomLayer", void 0);
      _defineProperty(this, "debounceUse", void 0);
      _defineProperty(this, "reRenderView", void 0);
      _defineProperty(this, "isSafari", void 0);
      this.bottomLayer = cc11001100_hook("this.bottomLayer", $("#bottom_layer"), "assign");
      this.hasTip = cc11001100_hook("this.hasTip", false, "assign");
      this.showTip = cc11001100_hook("this.showTip", false, "assign");
      this.originList = cc11001100_hook("this.originList", [], "assign");
      this.cloneInfoList = cc11001100_hook("this.cloneInfoList", [], "assign");
      this.originWidthList = cc11001100_hook("this.originWidthList", [], "assign");
      this.index = cc11001100_hook("this.index", 0, "assign");
      this.getOriginList();
      var userAgent = cc11001100_hook("userAgent", navigator.userAgent.toLowerCase(), "var-init");
      this.isSafari = cc11001100_hook("this.isSafari", userAgent.indexOf("safari") > -1, "assign");
    }
    _createClass(ContentInfo, [{
      key: cc11001100_hook("key", "getScreenWidth", "object-key-init"),
      value: function getScreenWidth() {
        var screenWidth = cc11001100_hook("screenWidth", window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, "var-init");
        return screenWidth;
      }
    }, {
      key: cc11001100_hook("key", "divideList", "object-key-init"),
      value: function divideList() {
        var originWidthList = cc11001100_hook("originWidthList", this.originWidthList, "var-init");
        var screenWidth = cc11001100_hook("screenWidth", this.getScreenWidth() - 120, "var-init");
        var totalWidth = cc11001100_hook("totalWidth", 0, "var-init");
        for (var i = cc11001100_hook("i", 0, "var-init"); i < originWidthList.length; i++) {
          var outerWidth = cc11001100_hook("outerWidth", originWidthList[i].outerWidth || 0, "var-init");
          totalWidth += cc11001100_hook("totalWidth", outerWidth, "assign");
          if (totalWidth > screenWidth) {
            this.index = cc11001100_hook("this.index", i, "assign");
            this.showTip = cc11001100_hook("this.showTip", true, "assign");
            break;
          } else {
            this.index = cc11001100_hook("this.index", 100, "assign");
            this.showTip = cc11001100_hook("this.showTip", false, "assign");
          }
        }
      }
    }, {
      key: cc11001100_hook("key", "renderOriginList", "object-key-init"),
      value: function renderOriginList() {
        var divideIndex = cc11001100_hook("divideIndex", this.index, "var-init");
        var originList = cc11001100_hook("originList", this.originList, "var-init");
        originList.each(function (index, element) {
          if (index >= divideIndex) {
            $(element).hide();
          } else {
            $(element).show();
          }
        });
      }
    }, {
      key: cc11001100_hook("key", "renderRestList", "object-key-init"),
      value: function renderRestList() {
        var divideIndex = cc11001100_hook("divideIndex", this.index, "var-init");
        var cloneInfoList = cc11001100_hook("cloneInfoList", this.cloneInfoList, "var-init");
        var infoTip = cc11001100_hook("infoTip", $(".tip-hover-panel"), "var-init");
        cloneInfoList.each(function (index, element) {
          if (index < divideIndex) {
            $(element).hide();
          } else {
            $(element).show();
          }
        });
        var infoTipHeight = cc11001100_hook("infoTipHeight", infoTip.outerHeight() || 0, "var-init");
        infoTip.css({
          top: cc11001100_hook("top", "".concat(-infoTipHeight + 18, "px"), "object-key-init"),
          right: cc11001100_hook("right", "-12px", "object-key-init")
        });
      }
    }, {
      key: cc11001100_hook("key", "getOriginList", "object-key-init"),
      value: function getOriginList() {
        var bottomLayer = cc11001100_hook("bottomLayer", this.bottomLayer, "var-init");
        var infoList = cc11001100_hook("infoList", bottomLayer.find(".lh"), "var-init");
        var cloneInfoList = cc11001100_hook("cloneInfoList", infoList.clone(), "var-init");
        this.cloneInfoList = cc11001100_hook("this.cloneInfoList", cloneInfoList, "assign");
        this.originList = cc11001100_hook("this.originList", infoList, "assign");
        var widthList = cc11001100_hook("widthList", [], "var-init");
        infoList.each(function (_, element) {
          var $element = cc11001100_hook("$element", $(element), "var-init");
          var widthItem = cc11001100_hook("widthItem", {
            innerWidth: cc11001100_hook("innerWidth", $element.width() || 0, "object-key-init"),
            outerWidth: cc11001100_hook("outerWidth", $element.outerWidth(true) || 0, "object-key-init")
          }, "var-init");
          widthList.push(widthItem);
        });
        this.originWidthList = cc11001100_hook("this.originWidthList", widthList, "assign");
      }
    }, {
      key: cc11001100_hook("key", "createdTip", "object-key-init"),
      value: function createdTip() {
        this.hasTip = cc11001100_hook("this.hasTip", true, "assign");
        var cloneInfoList = cc11001100_hook("cloneInfoList", this.cloneInfoList, "var-init");
        var widthList = cc11001100_hook("widthList", this.originWidthList, "var-init");
        var accessibilityIcon = cc11001100_hook("accessibilityIcon", $('<div class="accessibility-icon"><span class="c-icon">&#xe695;</span></div>'), "var-init");
        var openTriggle = cc11001100_hook("openTriggle", $('<div class="open-content-info"><span class="c-icon c-color-gray2">&#xe60c;</span></div>'), "var-init");
        var tipContainer = cc11001100_hook("tipContainer", $('<div class="rest_info_tip"></div>'), "var-init");
        var totalWidth = cc11001100_hook("totalWidth", 0, "var-init");
        var i = cc11001100_hook("i", widthList.length - 1 || 0, "var-init");
        var tmpTipList = cc11001100_hook("tmpTipList", [], "var-init");
        while (i >= 0) {
          var widthItem = cc11001100_hook("widthItem", widthList[i].outerWidth, "var-init");
          if (widthItem <= 400) {
            totalWidth += cc11001100_hook("totalWidth", widthItem, "assign");
            if (totalWidth > 470 || i === 0) {
              (function () {
                totalWidth = cc11001100_hook("totalWidth", 0, "assign");
                var tipWrapper = cc11001100_hook("tipWrapper", $('<div class="tip-wrapper"></div>'), "var-init");
                tmpTipList.forEach(function (element) {
                  tipWrapper.prepend(element);
                });
                tipContainer.prepend(tipWrapper);
                tmpTipList = cc11001100_hook("tmpTipList", [], "assign");
                i === 0 && i--;
              })();
            } else {
              var tipItem = cc11001100_hook("tipItem", cloneInfoList[i], "var-init");
              $(tipItem).addClass("tip-item");
              tmpTipList.push(tipItem);
              i--;
            }
          } else {
            if (totalWidth !== 0) {
              (function () {
                totalWidth = cc11001100_hook("totalWidth", 0, "assign");
                var tipWrapper = cc11001100_hook("tipWrapper", $('<div class="tip-wrapper"></div>'), "var-init");
                tmpTipList.forEach(function (element) {
                  tipWrapper.prepend(element);
                });
                tipContainer.prepend(tipWrapper);
                tmpTipList = cc11001100_hook("tmpTipList", [], "assign");
              })();
            }
            var tipWrapper = cc11001100_hook("tipWrapper", $('<div class="tip-wrapper"></div>'), "var-init");
            var _tipItem = cc11001100_hook("_tipItem", cloneInfoList[i], "var-init");
            $(_tipItem).addClass("tip-item");
            tipWrapper.prepend(_tipItem);
            tipContainer.prepend(tipWrapper);
            i--;
          }
        }
        var hoverPanel = cc11001100_hook("hoverPanel", $('<div class="tip-hover-panel"></div>'), "var-init");
        hoverPanel.append(tipContainer);
        openTriggle.append(hoverPanel);
        openTriggle.on("mouseover", function () {
          hoverPanel.show();
        });
        openTriggle.on("mouseleave", function () {
          hoverPanel.hide();
        });
        var bottomLayerBar = cc11001100_hook("bottomLayerBar", this.bottomLayer.find(".s-bottom-layer-content"), "var-init");
        if (bottomLayerBar) {
          bottomLayerBar.append(accessibilityIcon);
          bottomLayerBar.append(openTriggle);
        }
        this.renderRestList();
      }
    }, {
      key: cc11001100_hook("key", "render", "object-key-init"),
      value: function render(firstPaint) {
        this.divideList();
        this.renderOriginList();
        var showTip = cc11001100_hook("showTip", this.showTip, "var-init");
        if (firstPaint) {
          showTip && this.createdTip();
          this.bottomLayer.css({
            visibility: cc11001100_hook("visibility", "visible", "object-key-init"),
            width: cc11001100_hook("width", "100%", "object-key-init")
          });
        } else {
          var hasTip = cc11001100_hook("hasTip", this.hasTip, "var-init");
          var contentInfoTip = cc11001100_hook("contentInfoTip", $(".open-content-info"), "var-init");
          !hasTip && this.createdTip();
          if (showTip) {
            contentInfoTip.show();
            this.renderRestList();
          } else {
            contentInfoTip.hide();
          }
        }
      }
    }, {
      key: cc11001100_hook("key", "safariFix", "object-key-init"),
      value: function safariFix() {
        var _this = cc11001100_hook("_this", this, "var-init");
        var width = cc11001100_hook("width", window.screen.width, "var-init");
        setTimeout(function () {
          var windowWidth = cc11001100_hook("windowWidth", _this.getScreenWidth(), "var-init");
          var boxWidth = cc11001100_hook("boxWidth", _this.bottomLayer.width(), "var-init");
          var res = cc11001100_hook("res", width <= 960 && boxWidth && windowWidth - boxWidth >= 10, "var-init");
          if (res) {
            _this.bottomLayer.css({
              width: cc11001100_hook("width", windowWidth + "px", "object-key-init")
            });
          } else {
            _this.bottomLayer.css({
              width: cc11001100_hook("width", "100%", "object-key-init")
            });
          }
        }, 800);
      }
    }, {
      key: cc11001100_hook("key", "reRender", "object-key-init"),
      value: function reRender() {
        if (this.isSafari) {
          this.safariFix();
        }
        this.debounceUse();
      }
    }, {
      key: cc11001100_hook("key", "destroy", "object-key-init"),
      value: function destroy() {
        var _this2 = cc11001100_hook("_this2", this, "var-init");
        window.removeEventListener("resize", function () {
          return _this2.reRenderView();
        });
      }
    }, {
      key: cc11001100_hook("key", "init", "object-key-init"),
      value: function init() {
        var _this3 = cc11001100_hook("_this3", this, "var-init");
        this.render(true);
        if (this.isSafari) {
          this.safariFix();
        }
        this.reRenderView = cc11001100_hook("this.reRenderView", this.reRender.bind(this), "assign");
        F.use("superman:lib/utils", function (util) {
          _this3.debounceUse = cc11001100_hook("_this3.debounceUse", util.debounce(_this3.render, 600), "assign");
          window.addEventListener("resize", function () {
            return _this3.reRenderView();
          });
        });
      }
    }]);
    return ContentInfo;
  }(), "var-init");
  _exports.ContentInfo = cc11001100_hook("_exports.ContentInfo", ContentInfo, "assign");
});