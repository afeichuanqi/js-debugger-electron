; /*!static/indexatom/personalcenter/asidebar-bottom/main.atom*/
define("indexatom/personalcenter/asidebar-bottom/main", ["require", "exports", "module"], function (require, exports, module) {
  var a = cc11001100_hook("a", {
    exports: {}
  }, "var-init");
  !function (module) {
    module.exports = cc11001100_hook("module.exports", {
      render: function () {
        var a = cc11001100_hook("a", this, "var-init"),
          c = cc11001100_hook("c", a.$createElement, "var-init"),
          h = cc11001100_hook("h", a._self._c || c, "var-init");
        return h("div", {
          staticClass: cc11001100_hook("staticClass", "aside-footer", "object-key-init")
        }, [h("div", {
          staticClass: cc11001100_hook("staticClass", "setter-and-locationinfo", "object-key-init")
        }, [h("div", {
          staticClass: cc11001100_hook("staticClass", "setter", "object-key-init"),
          on: {
            click: cc11001100_hook("click", a.gosetter, "object-key-init")
          }
        }, [h("span", {
          staticClass: cc11001100_hook("staticClass", "setter-icon", "object-key-init")
        }), h("span", {
          staticClass: cc11001100_hook("staticClass", "setter-text", "object-key-init")
        }, [a._v("设置")])]), a.hasWeather ? h("div", {
          staticClass: cc11001100_hook("staticClass", "location-info", "object-key-init"),
          on: {
            click: cc11001100_hook("click", a.goWeather, "object-key-init")
          }
        }, [h("span", {
          staticClass: cc11001100_hook("staticClass", "heat", "object-key-init")
        }, [a._v(a._s(a.weatherObj.nowweather ? a.weatherObj.nowweather.temp : ""))]), h("span", {
          staticClass: cc11001100_hook("staticClass", "setter-text", "object-key-init")
        }, [a._v(a._s(a.weatherObj.city))])]) : a._e()]), h("div", {
          staticClass: cc11001100_hook("staticClass", "readme", "object-key-init"),
          on: {
            click: cc11001100_hook("click", a.readmeImportant, "object-key-init")
          }
        }, [a._v("©" + a._s(a.year) + " Baidu 使用百度前必读")])]);
      },
      staticRenderFns: cc11001100_hook("staticRenderFns", [], "object-key-init")
    }, "assign");
  }(a, a.exports);
  var c = cc11001100_hook("c", {
    exports: {}
  }, "var-init");
  !function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    }), exports.default = cc11001100_hook("exports.default", {
      mounted: function () {
        if (this.ishome) for (var a in this.weatherObj) this.weatherObj[a] && (this.hasWeather = cc11001100_hook("this.hasWeather", !0, "assign"));
        this.year = cc11001100_hook("this.year", new Date().getFullYear(), "assign");
      },
      methods: {
        gosetter: function () {
          this.sendLog("gosetter_wisenew");
          var a = cc11001100_hook("a", encodeURIComponent(window.location.href), "var-init");
          window.location.href = cc11001100_hook("window.location.href", "https://m.baidu.com/usrprofile?action=config&u=" + a, "assign");
        },
        readmeImportant: function () {
          this.sendLog("readmeImportant_wisenew"), window.location.href = cc11001100_hook("window.location.href", "https://m.baidu.com/sf?pd=sd_privacy_terms&ms=1&ms=1&word=%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E&title=%E5%85%8D%E8%B4%A3%E5%A3%B0%E6%98%8E&openapi=1&from_sf=1&resource_id=37483&dsp=iphone&tn=wisexmlnew&ext=%7B%22pid%22%3A%22mianze-shengming%22%7D&lid=&referlid=9238571407366095574&frsrcid=37483&frorder=1", "assign");
        },
        goWeather: function () {
          this.sendLog("goWeather_wisenew"), window.location.href = cc11001100_hook("window.location.href", this.weatherObj.href, "assign");
        },
        sendLog: function (a) {
          page.log.send({
            ct: cc11001100_hook("ct", 10, "object-key-init"),
            cst: cc11001100_hook("cst", 1, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", a + (this.ishome ? "_home" : "_result"), "object-key-init")
          });
        }
      }
    }, "assign");
  }(c, c.exports);
  var h = cc11001100_hook("h", c.exports.default || c.exports, "var-init");
  h.render = cc11001100_hook("h.render", h.render || a.exports.render, "assign"), h.staticRenderFns = cc11001100_hook("h.staticRenderFns", a.exports.staticRenderFns, "assign"), h.data = cc11001100_hook("h.data", function () {
    return {
      weatherObj: cc11001100_hook("weatherObj", this.weather, "object-key-init"),
      hasWeather: cc11001100_hook("hasWeather", !1, "object-key-init"),
      year: cc11001100_hook("year", 2019, "object-key-init")
    };
  }, "assign"), h.props = cc11001100_hook("h.props", {
    weather: {
      type: cc11001100_hook("type", Object, "object-key-init"),
      "default": function () {
        return {};
      }
    },
    ishome: {
      type: cc11001100_hook("type", Boolean, "object-key-init"),
      "default": cc11001100_hook("default", "", "object-key-init")
    }
  }, "assign"), h.components = cc11001100_hook("h.components", {}, "assign");
  var w = cc11001100_hook("w", h.created, "var-init");
  h.created = cc11001100_hook("h.created", function () {
    var c = cc11001100_hook("c", this, "var-init");
    c.$super = cc11001100_hook("c.$super", {
      render: function () {
        return a.exports.render.apply(c, arguments);
      }
    }, "assign"), w && w.call(c);
  }, "assign"), h._scopeId = cc11001100_hook("h._scopeId", "data-a-1163fdae", "assign"), module.exports = cc11001100_hook("module.exports", h, "assign");
});
; /*!static/indexatom/personalcenter/assets/js/wrapperControl.js*/
define("indexatom/personalcenter/assets/js/wrapperControl", ["require"], function () {
  function a() {
    $("body").append("<style>.stopMove {height: 100 %;overflow: hidden;}</style>"), $("html").addClass("stopMove"), $("body").addClass("stopMove");
    var a = cc11001100_hook("a", window.innerHeight || document.body.clientHeight || document.documentElement.clientHeight, "var-init");
    $("#personal-center").css({
      width: cc11001100_hook("width", "100%", "object-key-init"),
      height: cc11001100_hook("height", a, "object-key-init")
    }), $(window).scrollTop(0);
  }
  function h() {
    $("html").removeClass("stopMove"), $("body").removeClass("stopMove"), $("#personal-center").height(0);
  }
  return {
    showWrapper: cc11001100_hook("showWrapper", a, "object-key-init"),
    hideWrapper: cc11001100_hook("hideWrapper", h, "object-key-init")
  };
});
; /*!static/indexatom/personalcenter/asidebar/main.atom*/
define("indexatom/personalcenter/asidebar/main", ["require", "exports", "module", "indexatom/personalcenter/assets/js/wrapperControl", "indexatom/personalcenter/asidebar-bottom/main"], function (require, exports, module) {
  var a = cc11001100_hook("a", {
    exports: {}
  }, "var-init");
  !function (module) {
    module.exports = cc11001100_hook("module.exports", {
      render: function () {
        var a = cc11001100_hook("a", this, "var-init"),
          c = cc11001100_hook("c", a.$createElement, "var-init"),
          h = cc11001100_hook("h", a._self._c || c, "var-init");
        return h("div", {
          staticClass: cc11001100_hook("staticClass", "dlg-window", "object-key-init"),
          on: {
            click: cc11001100_hook("click", a.hideAside, "object-key-init"),
            touchmove: function (c) {
              a.stopAll(c);
            }
          }
        }, [h("div", {
          "class": cc11001100_hook("class", ["dlg-bg", "dlg-animate", a.showornot ? "slideInLeft" : "slideOutLeft"], "object-key-init"),
          on: {
            touchstart: function (c) {
              a.remember(c);
            },
            touchmove: function (c) {
              a.move(c);
            },
            click: function (c) {
              a.prevent(c);
            }
          }
        }, [h("div", {
          staticClass: cc11001100_hook("staticClass", "aside-header-and-paddingbottom", "object-key-init")
        }, [h("div", {
          staticClass: cc11001100_hook("staticClass", "menu-btn-padding", "object-key-init"),
          on: {
            click: cc11001100_hook("click", a.hideAside, "object-key-init")
          }
        }), h("div", {
          staticClass: cc11001100_hook("staticClass", "asideheader", "object-key-init")
        }, [h("div", {
          staticClass: cc11001100_hook("staticClass", "user-info", "object-key-init"),
          on: {
            click: cc11001100_hook("click", a.goLogin, "object-key-init")
          }
        }, [h("img", {
          staticClass: cc11001100_hook("staticClass", "head-icon", "object-key-init"),
          attrs: {
            src: cc11001100_hook("src", "https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/indexatom/personalcenter/assets/img/default_icon_02f13d8.png", "object-key-init"),
            alt: cc11001100_hook("alt", "head_icon", "object-key-init")
          }
        }), h("span", {
          staticClass: cc11001100_hook("staticClass", "login", "object-key-init")
        }, [a._v(a._s(a.username))])])])]), h("div", {
          staticClass: cc11001100_hook("staticClass", "asidecontent", "object-key-init")
        }, [h("ul", a._l(a.lists, function (c) {
          return (a.ishome ? 1 !== c.showhere && c.showhere : 2 !== c.showhere && c.showhere) ? a._e() : h("li", {
            key: cc11001100_hook("key", c.index, "object-key-init"),
            staticClass: cc11001100_hook("staticClass", "menu-item", "object-key-init")
          }, [h("a", {
            "class": cc11001100_hook("class", c.featuresName, "object-key-init"),
            attrs: {
              href: cc11001100_hook("href", c.href, "object-key-init")
            },
            on: {
              click: function (h) {
                a.sendLog(c.href, c.className, h);
              }
            }
          }, [h("span", {
            staticClass: cc11001100_hook("staticClass", "menu-icon", "object-key-init"),
            "class": cc11001100_hook("class", c.className, "object-key-init")
          }), h("span", {
            staticClass: cc11001100_hook("staticClass", "menu-desc", "object-key-init")
          }, [a._v(a._s(c.name))])])]);
        }))]), h("asidebar-bottom", {
          attrs: {
            weather: cc11001100_hook("weather", a.weatherObj, "object-key-init"),
            ishome: cc11001100_hook("ishome", a.ishome, "object-key-init")
          }
        })], 1)]);
      },
      staticRenderFns: cc11001100_hook("staticRenderFns", [], "object-key-init")
    }, "assign");
  }(a, a.exports);
  var c = cc11001100_hook("c", {
    exports: {}
  }, "var-init");
  !function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
    var a = cc11001100_hook("a", require("indexatom/personalcenter/assets/js/wrapperControl"), "var-init");
    exports.default = cc11001100_hook("exports.default", {
      methods: {
        goLogin: function () {
          page.log.send({
            ct: cc11001100_hook("ct", 10, "object-key-init"),
            cst: cc11001100_hook("cst", 1, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", "gologin_wisenew" + (this.ishome ? "_home" : "_result"), "object-key-init")
          }), window.location.href = cc11001100_hook("window.location.href", "" === this.useravatar ? this.ishome ? "https://wappass.baidu.com/passport/?login&tpl=wise&sms=1&regtype=1&u=" + encodeURIComponent(window.location.href) + "&extrajson=%7b%22src%22%3a%22se_000000%22%7d" : "https://wappass.baidu.com/passport/?login&tpl=wise&sms=1&regtype=1&u=" + encodeURIComponent(window.location.href) + "&extrajson=%7b%22src%22%3a%22se_000000%22%7d" : "https://m.baidu.com/usrprofile", "assign");
        },
        hideAside: function () {
          page.log.send({
            ct: cc11001100_hook("ct", 10, "object-key-init"),
            cst: cc11001100_hook("cst", 1, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", "close_wisecenter_wisenew" + (this.ishome ? "_home" : "_result"), "object-key-init")
          }), this.$emit("hideWrapper"), a.hideWrapper();
        },
        prevent: function (a) {
          a.stopPropagation();
        },
        remember: function (a) {
          this.startY = cc11001100_hook("this.startY", a.targetTouches[0].pageY, "assign");
        },
        stopAll: function (a) {
          a.stopPropagation(), a.preventDefault();
        },
        move: function (a) {
          var c = cc11001100_hook("c", a.targetTouches[0].pageY, "var-init"),
            h = cc11001100_hook("h", $(".dlg-bg").height(), "var-init"),
            g = cc11001100_hook("g", $(".dlg-bg")[0].scrollHeight, "var-init"),
            b = cc11001100_hook("b", $(".dlg-bg").scrollTop(), "var-init");
          h >= g || (0 === b && this.startY < c || b === g - h && this.startY > c ? a.preventDefault() : a.stopPropagation());
        },
        sendLog: function (a, c) {
          a || this.hideAside(), page.log.send({
            ct: cc11001100_hook("ct", 10, "object-key-init"),
            cst: cc11001100_hook("cst", 1, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", c + (this.ishome ? "_home" : "_result"), "object-key-init")
          });
        }
      },
      mounted: function () {
        var a = cc11001100_hook("a", this, "var-init");
        if ("" !== this.useravatar) {
          var c = cc11001100_hook("c", this.$el.querySelector(".head-icon"), "var-init");
          B && B.https && B.https.domain && (B.https.domain.set("himg.bdimg.com", "https://ss1.bdstatic.com/7Ls0a8Sm1A5BphGlnYG"), this.useravatar = cc11001100_hook("this.useravatar", B.https.domain.get(this.useravatar), "assign")), c.setAttribute("src", this.useravatar);
        } else this.lists.forEach(function (c) {
          c.needLogin && (c.href = cc11001100_hook("c.href", a.configsrc + encodeURIComponent(c.href), "assign"));
        });
        this.ishome || (require(["modules/feedback/feedback_init"], function (a) {
          a.init();
        }), require(["modules/advanced_filter/advanced_filter"], function (a) {
          a.init();
        }));
      }
    }, "assign");
  }(c, c.exports);
  var h = cc11001100_hook("h", c.exports.default || c.exports, "var-init");
  h.render = cc11001100_hook("h.render", h.render || a.exports.render, "assign"), h.staticRenderFns = cc11001100_hook("h.staticRenderFns", a.exports.staticRenderFns, "assign"), h.data = cc11001100_hook("h.data", function () {
    return {
      lists: cc11001100_hook("lists", [{
        className: cc11001100_hook("className", "menulist_guanzhu", "object-key-init"),
        name: cc11001100_hook("name", "我的关注", "object-key-init"),
        needLogin: cc11001100_hook("needLogin", !0, "object-key-init"),
        href: cc11001100_hook("href", "https://mbd.baidu.com/webpage?action=icard&type=subscribe&channel=wise_home", "object-key-init")
      }, {
        className: cc11001100_hook("className", "menulist_shoucang", "object-key-init"),
        name: cc11001100_hook("name", "我的收藏", "object-key-init"),
        needLogin: cc11001100_hook("needLogin", !0, "object-key-init"),
        href: cc11001100_hook("href", "http://mysearch.pae.baidu.com/page/fav?action=r", "object-key-init")
      }, {
        className: cc11001100_hook("className", "menulist_pifu", "object-key-init"),
        name: cc11001100_hook("name", "皮肤中心", "object-key-init"),
        needLogin: cc11001100_hook("needLogin", !0, "object-key-init"),
        href: cc11001100_hook("href", "https://m.baidu.com/?#iview=skin", "object-key-init"),
        showhere: cc11001100_hook("showhere", 1, "object-key-init")
      }, {
        className: cc11001100_hook("className", "menulist_fankui", "object-key-init"),
        name: cc11001100_hook("name", "用户反馈", "object-key-init"),
        showhere: cc11001100_hook("showhere", 1, "object-key-init"),
        href: cc11001100_hook("href", "http://ufosdk.baidu.com/?m=Client&a=commonsubmit&appid=517&activityId=1&needEmail=false&bw=4E4670D693EBB4F4A983124C6D8D5207&kw=&tn=iphone&pageid=6", "object-key-init")
      }, {
        className: cc11001100_hook("className", "menulist_shaixuan", "object-key-init"),
        featuresName: cc11001100_hook("featuresName", "advanced-filter", "object-key-init"),
        name: cc11001100_hook("name", "高级筛选", "object-key-init"),
        showhere: cc11001100_hook("showhere", 2, "object-key-init")
      }, {
        className: cc11001100_hook("className", "menulist_fankui", "object-key-init"),
        featuresName: cc11001100_hook("featuresName", "feedback", "object-key-init"),
        name: cc11001100_hook("name", "用户反馈", "object-key-init"),
        showhere: cc11001100_hook("showhere", 2, "object-key-init")
      }], "object-key-init"),
      weatherObj: cc11001100_hook("weatherObj", this.weather, "object-key-init"),
      configsrc: cc11001100_hook("configsrc", "https://wappass.baidu.com/passport/?login&tpl=wise&subpro=wise&sms=1&regtype=1&u=", "object-key-init"),
      moveStatus: cc11001100_hook("moveStatus", 0, "object-key-init"),
      startY: cc11001100_hook("startY", 0, "object-key-init")
    };
  }, "assign"), h.props = cc11001100_hook("h.props", {
    showornot: {
      type: cc11001100_hook("type", Boolean, "object-key-init"),
      "default": cc11001100_hook("default", !1, "object-key-init")
    },
    useravatar: {
      type: cc11001100_hook("type", String, "object-key-init"),
      "default": cc11001100_hook("default", "", "object-key-init")
    },
    username: {
      type: cc11001100_hook("type", String, "object-key-init"),
      "default": cc11001100_hook("default", "", "object-key-init")
    },
    weather: {
      type: cc11001100_hook("type", Object, "object-key-init"),
      "default": function () {
        return {};
      }
    },
    ishome: {
      type: cc11001100_hook("type", Boolean, "object-key-init"),
      "default": cc11001100_hook("default", "", "object-key-init")
    }
  }, "assign"), h.components = cc11001100_hook("h.components", {
    asidebarBottom: cc11001100_hook("asidebarBottom", require("indexatom/personalcenter/asidebar-bottom/main"), "object-key-init")
  }, "assign");
  var g = cc11001100_hook("g", h.created, "var-init");
  h.created = cc11001100_hook("h.created", function () {
    var c = cc11001100_hook("c", this, "var-init");
    c.$super = cc11001100_hook("c.$super", {
      render: function () {
        return a.exports.render.apply(c, arguments);
      }
    }, "assign"), g && g.call(c);
  }, "assign"), h._scopeId = cc11001100_hook("h._scopeId", "data-a-d9196288", "assign"), module.exports = cc11001100_hook("module.exports", h, "assign");
});
; /*!static/indexatom/personalcenter/main.atom*/
define("indexatom/personalcenter/main", ["require", "exports", "module", "indexatom/personalcenter/assets/js/wrapperControl", "indexatom/personalcenter/asidebar/main"], function (require, exports, module) {
  var a = cc11001100_hook("a", {
    exports: {}
  }, "var-init");
  !function (module) {
    module.exports = cc11001100_hook("module.exports", {
      render: function () {
        var a = cc11001100_hook("a", this, "var-init"),
          c = cc11001100_hook("c", a.$createElement, "var-init"),
          h = cc11001100_hook("h", a._self._c || c, "var-init");
        return h("div", {
          "class": cc11001100_hook("class", ["menu-icon-layout", {
            top: cc11001100_hook("top", a.ishome, "object-key-init")
          }], "object-key-init")
        }, [h("div", {
          staticClass: cc11001100_hook("staticClass", "menu-area menu-newsearch-v2", "object-key-init"),
          "class": cc11001100_hook("class", [{
            "has-background": cc11001100_hook("has-background", a.useSkin, "object-key-init")
          }], "object-key-init"),
          on: {
            click: cc11001100_hook("click", a.showAside, "object-key-init")
          }
        }, [a.useravatar ? h("img", {
          attrs: {
            src: cc11001100_hook("src", a.useravatar, "object-key-init")
          }
        }) : h("div", {
          staticClass: cc11001100_hook("staticClass", "menu-avator-login", "object-key-init")
        })]), h("asidebar", {
          attrs: {
            showornot: cc11001100_hook("showornot", a.isShow, "object-key-init"),
            useravatar: cc11001100_hook("useravatar", a.avatar, "object-key-init"),
            username: cc11001100_hook("username", a.name, "object-key-init"),
            weather: cc11001100_hook("weather", a.weatherObj, "object-key-init"),
            ishome: cc11001100_hook("ishome", a.ishome, "object-key-init")
          },
          on: {
            hideWrapper: cc11001100_hook("hideWrapper", a.hideWrapper, "object-key-init")
          }
        })], 1);
      },
      staticRenderFns: cc11001100_hook("staticRenderFns", [], "object-key-init")
    }, "assign");
  }(a, a.exports);
  var c = cc11001100_hook("c", {
    exports: {}
  }, "var-init");
  !function (module, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
    var a = cc11001100_hook("a", require("indexatom/personalcenter/assets/js/wrapperControl"), "var-init");
    exports.default = cc11001100_hook("exports.default", {
      methods: {
        showAside: function () {
          this.isShow = cc11001100_hook("this.isShow", !0, "assign"), a.showWrapper(), this.sendLog();
        },
        hideWrapper: function () {
          this.isShow = cc11001100_hook("this.isShow", !1, "assign");
        },
        sendLog: function () {
          page.log.send({
            ct: cc11001100_hook("ct", 10, "object-key-init"),
            cst: cc11001100_hook("cst", 1, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", "index_menu_btn" + (this.ishome ? "_home" : "_result"), "object-key-init")
          });
        }
      },
      mounted: function () {
        this.avatar = cc11001100_hook("this.avatar", this.useravatar, "assign"), this.name = cc11001100_hook("this.name", this.username, "assign");
      }
    }, "assign");
  }(c, c.exports);
  var h = cc11001100_hook("h", c.exports.default || c.exports, "var-init");
  h.render = cc11001100_hook("h.render", h.render || a.exports.render, "assign"), h.staticRenderFns = cc11001100_hook("h.staticRenderFns", a.exports.staticRenderFns, "assign"), h.data = cc11001100_hook("h.data", function () {
    return {
      isShow: cc11001100_hook("isShow", !1, "object-key-init"),
      avatar: cc11001100_hook("avatar", this.useravatar, "object-key-init"),
      name: cc11001100_hook("name", this.username, "object-key-init"),
      weatherObj: cc11001100_hook("weatherObj", this.weather, "object-key-init"),
      loadAside: cc11001100_hook("loadAside", !1, "object-key-init")
    };
  }, "assign"), h.props = cc11001100_hook("h.props", {
    useravatar: {
      type: cc11001100_hook("type", String, "object-key-init"),
      "default": cc11001100_hook("default", "", "object-key-init")
    },
    username: {
      type: cc11001100_hook("type", String, "object-key-init"),
      "default": cc11001100_hook("default", "登录", "object-key-init")
    },
    weather: {
      type: cc11001100_hook("type", Object, "object-key-init"),
      "default": function () {
        return {};
      }
    },
    ishome: {
      type: cc11001100_hook("type", Boolean, "object-key-init"),
      "default": cc11001100_hook("default", !0, "object-key-init")
    },
    useSkin: {
      type: cc11001100_hook("type", Boolean, "object-key-init"),
      "default": cc11001100_hook("default", !1, "object-key-init")
    }
  }, "assign"), h.components = cc11001100_hook("h.components", {
    asidebar: cc11001100_hook("asidebar", require("indexatom/personalcenter/asidebar/main"), "object-key-init")
  }, "assign");
  var v = cc11001100_hook("v", h.created, "var-init");
  h.created = cc11001100_hook("h.created", function () {
    var c = cc11001100_hook("c", this, "var-init");
    c.$super = cc11001100_hook("c.$super", {
      render: function () {
        return a.exports.render.apply(c, arguments);
      }
    }, "assign"), v && v.call(c);
  }, "assign"), h._scopeId = cc11001100_hook("h._scopeId", "data-a-f781dc42", "assign"), module.exports = cc11001100_hook("module.exports", h, "assign");
});