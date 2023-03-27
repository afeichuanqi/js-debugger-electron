define("superman-san/app/news/result_87e40d5", ["san", "tslib", "@searchfe/inject-js"], function (e, i, s) {
  return c = cc11001100_hook("c", {
    0: function (t, a) {
      t.exports = cc11001100_hook("t.exports", e, "assign");
    },
    1: function (t, a) {
      t.exports = cc11001100_hook("t.exports", i, "assign");
    },
    10: function (t, a) {
      t.exports = cc11001100_hook("t.exports", ' <div class="from c-font-normal {{footData.layout === \'s-news-special-item-tpl-2\' ? \'from-tpl2\' : \'\'}}"> <span s-if="footData.tag" class="hot-point c-color-red c-gap-right">{{ footData.tag }}</span><a s-if="footData.source" class="c-gap-right c-color-gray" href="{{footData.src_link ? footData.src_link : footData.link_url}}" target="_blank" data-src="1" data-click="LOG_LINK">{{ footData.source }}</a><span s-if="footData.src_time" class="src-time c-color-gray2 c-gap-right">{{ footData.src_time }} </span><span s-if="isAd" class="ad-icon c-color-gray2">广告</span><div s-if="showFeedback" class="{{isAd ? \'nativead-dustbin\' : \'dustbin\'}}" data-click="LOG_BTN_DUSTBIN"> <i class="c-icon">&#xe610;</i> </div> <div s-if="showTts" class="homepage-feed-tts"> <span class="play-tts" data-nid="{{nid}}"> <i class="c-icon">&#xe680;</i> <p class="tts-button-text">播报</p> </span> <span class="pause-tts" data-nid="{{nid}}"> <i class="c-icon">&#xe67d;</i> <p class="tts-button-text">暂停</p> </span> </div> </div> ', "assign");
    },
    109: function (t, a) {
      t.exports = cc11001100_hook("t.exports", ' <div class="s-news-special s-news-item {{picTextData.layout}} s-opacity-blank8 clearfix {{picTextData.istts === \'1\' ? \'has-tts\' : \'\'}}" data-url="{{picTextData.link_url}}" data-rid="{{picTextData.id}}" data-nid="news_{{picTextData.id}}" data-log="stype:{{picTextData.stype}};picNum:{{picTextData.pic_num}};title:{{picTextData.title}};pos:{{pos}};st:news;" data-extra="{{picTextData.gr_ext}}"> <template s-if="picTextData.layout === \'s-news-special-item-tpl-1\'"> <c-title title-data="{{picTextData}}" type="news" tts-type="news" clamp-num="{{2}}"></c-title> <c-picture pic-data="{{picTextData}}"></c-picture> <c-footer foot-data="{{picTextData}}" is-ad="{{false}}" show-feedback="{{picTextData.tag !== \'置顶\'}}" show-tts="{{picTextData.istts === \'1\'}}" nid="{{\'news_\' + picTextData.id}}"></c-footer> </template> <template s-elif="picTextData.layout === \'s-news-special-item-tpl-2\'"> <c-picture pic-data="{{picTextData}}"></c-picture> <div class="s-block-container c-span8 c-span-last"> <div class="s-text-content"> <c-title title-data="{{picTextData}}" tts-type="news" clamp-num="{{3}}"></c-title> </div> <c-footer foot-data="{{picTextData}}" is-ad="{{false}}" show-feedback="{{picTextData.tag !== \'置顶\'}}" show-tts="{{picTextData.istts === \'1\'}}" nid="{{\'news_\' + picTextData.id}}" type="news"></c-footer> </div> </template> <template s-elif="picTextData.layout === \'s-news-special-item-tpl-3\'"> <c-title title-data="{{picTextData}}" tts-type="news" clamp-num="{{2}}"></c-title> <c-footer foot-data="{{picTextData}}" is-ad="{{false}}" show-feedback="{{picTextData.tag !== \'置顶\'}}" show-tts="{{picTextData.istts === \'1\'}}" nid="{{\'news_\' + picTextData.id}}" type="news"></c-footer> </template> </div> ', "assign");
    },
    11: function (t, a, e) {
      "use strict";

      Object.defineProperty(a, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var i,
        s = cc11001100_hook("s", e(1), "var-init"),
        e = cc11001100_hook("e", e(0), "var-init"),
        s = cc11001100_hook("s", (i = cc11001100_hook("i", e.Component, "assign"), (0, s.__extends)(n, i), n.prototype.initData = cc11001100_hook("n.prototype.initData", function () {
          return {
            footData: {},
            isAd: cc11001100_hook("isAd", !1, "object-key-init"),
            showFeedback: cc11001100_hook("showFeedback", !1, "object-key-init"),
            showTts: cc11001100_hook("showTts", !1, "object-key-init"),
            nid: cc11001100_hook("nid", "", "object-key-init"),
            ttsType: cc11001100_hook("ttsType", "", "object-key-init")
          };
        }, "assign"), n), "var-init");
      function n() {
        return null !== i && i.apply(this, arguments) || this;
      }
      a["default"] = cc11001100_hook("a[\"default\"]", s, "assign");
    },
    110: function (t, a, e) {
      "use strict";

      Object.defineProperty(a, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var i,
        s = cc11001100_hook("s", e(1), "var-init"),
        n = cc11001100_hook("n", e(0), "var-init"),
        c = cc11001100_hook("c", (0, s.__importDefault)(e(15)), "var-init"),
        l = cc11001100_hook("l", (0, s.__importDefault)(e(17)), "var-init"),
        o = cc11001100_hook("o", (0, s.__importDefault)(e(19)), "var-init"),
        e = cc11001100_hook("e", e(5), "var-init"),
        e = cc11001100_hook("e", (i = cc11001100_hook("i", n.Component, "assign"), (0, s.__extends)(p, i), p.prototype.initData = cc11001100_hook("p.prototype.initData", function () {
          return {
            picTextData: {},
            pos: cc11001100_hook("pos", 0, "object-key-init")
          };
        }, "assign"), p.components = cc11001100_hook("p.components", {
          "c-title": cc11001100_hook("c-title", c["default"], "object-key-init"),
          "c-picture": cc11001100_hook("c-picture", l["default"], "object-key-init"),
          "c-footer": cc11001100_hook("c-footer", o["default"], "object-key-init")
        }, "assign"), (0, s.__decorate)([e.injectable], p)), "var-init");
      function p(t) {
        cc11001100_hook("t", t, "function-parameter");
        t = cc11001100_hook("t", i.call(this, t) || this, "assign");
        return t.trimwhitespace = cc11001100_hook("t.trimwhitespace", "all", "assign"), t;
      }
      a["default"] = cc11001100_hook("a[\"default\"]", e, "assign");
    },
    15: function (t, a, e) {
      var i = cc11001100_hook("i", e(2), "var-init");
      e(16);
      var s = cc11001100_hook("s", e(6), "var-init"),
        n = cc11001100_hook("n", e(7)["default"], "var-init");
      t.exports = cc11001100_hook("t.exports", e(7), "assign"), t.exports["default"] = cc11001100_hook("t.exports[\"default\"]", i(n, s, []), "assign");
    },
    16: function (t, a, e) {
      "use strict";

      e.r(a);
    },
    17: function (t, a, e) {
      var i = cc11001100_hook("i", e(2), "var-init");
      e(18);
      var s = cc11001100_hook("s", e(8), "var-init"),
        n = cc11001100_hook("n", e(9)["default"], "var-init");
      t.exports = cc11001100_hook("t.exports", e(9), "assign"), t.exports["default"] = cc11001100_hook("t.exports[\"default\"]", i(n, s, []), "assign");
    },
    18: function (t, a, e) {
      "use strict";

      e.r(a);
    },
    19: function (t, a, e) {
      var i = cc11001100_hook("i", e(2), "var-init");
      e(20);
      var s = cc11001100_hook("s", e(10), "var-init"),
        n = cc11001100_hook("n", e(11)["default"], "var-init");
      t.exports = cc11001100_hook("t.exports", e(11), "assign"), t.exports["default"] = cc11001100_hook("t.exports[\"default\"]", i(n, s, []), "assign");
    },
    2: function (t, a, e) {
      a = cc11001100_hook("a", function () {
        "use strict";

        function n(t) {
          cc11001100_hook("t", t, "function-parameter");
          return (n = cc11001100_hook("n", "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function n(t) {
            return typeof t;
          } : function n(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
          }, "assign"))(t);
        }
        var c = cc11001100_hook("c", e(0).defineComponent, "var-init");
        function l(t) {
          cc11001100_hook("t", t, "function-parameter");
          if (null === t || t === undefined) throw new TypeError("Cannot convert undefined or null to object");
          for (var a = cc11001100_hook("a", Object(t), "var-init"), e = cc11001100_hook("e", 1, "var-init"); e < arguments.length; e++) {
            var i = cc11001100_hook("i", arguments[e], "var-init");
            if (null !== i && i !== undefined) for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (a[s] = cc11001100_hook("a[s]", i[s], "assign"));
          }
          return a;
        }
        t.exports = cc11001100_hook("t.exports", function (t, a, e) {
          for (var i = cc11001100_hook("i", function (t) {
              var a = cc11001100_hook("a", [t], "var-init");
              "function" == typeof t && (a.push(t.prototype), t.prototype.constructor && a.push(t.prototype.constructor.prototype));
              return a;
            }(t), "var-init"), s = cc11001100_hook("s", 0, "var-init"); s < i.length; s++) a && ("string" == typeof a ? i[s].template = cc11001100_hook("i[s].template", a, "assign") : a instanceof Array ? i[s].aPack = cc11001100_hook("i[s].aPack", a, "assign") : i[s].aNode = cc11001100_hook("i[s].aNode", a, "assign")), e.length && function (t, a) {
            for (var e = cc11001100_hook("e", {}, "var-init"), i = cc11001100_hook("i", 0, "var-init"); i < a.length; i++) l(e, a[i]);
            var s = cc11001100_hook("s", t.initData, "var-init");
            t.initData = cc11001100_hook("t.initData", s ? function () {
              return l({}, s.call(this), {
                $style: cc11001100_hook("$style", e, "object-key-init")
              });
            } : function () {
              return {
                $style: cc11001100_hook("$style", e, "object-key-init")
              };
            }, "assign");
          }(i[s], e);
          return "object" === n(t) ? c(t) : t;
        }, "assign");
      }.apply(a, []), "assign");
      a === undefined || (t.exports = cc11001100_hook("t.exports", a, "assign"));
    },
    20: function (t, a, e) {
      "use strict";

      e.r(a);
    },
    244: function (t, a, e) {
      t.exports = cc11001100_hook("t.exports", e(245), "assign");
    },
    245: function (t, a, e) {
      var i = cc11001100_hook("i", e(2), "var-init");
      e(246);
      var s = cc11001100_hook("s", e(109), "var-init"),
        n = cc11001100_hook("n", e(110)["default"], "var-init");
      t.exports = cc11001100_hook("t.exports", e(110), "assign"), t.exports["default"] = cc11001100_hook("t.exports[\"default\"]", i(n, s, []), "assign");
    },
    246: function (t, a, e) {
      "use strict";

      e.r(a);
    },
    5: function (t, a) {
      t.exports = cc11001100_hook("t.exports", s, "assign");
    },
    6: function (t, a) {
      t.exports = cc11001100_hook("t.exports", ' <a class="s-news-item-title c-link c-font-big {{needMargin ? \'c-gap-bottom-small\' : \'\'}} title-clamp-{{clampNum}} {{titleData.layout === \'s-news-special-item-tpl-3\' ? \'s-news-item-title-tpl3\' : \'\'}} {{titleData.istts === \'1\' ? \'has-tts\' : \'\'}}" href="{{titleData.imgJumpUrl ? titleData.imgJumpUrl : titleData.link_url}}" title="{{titleData.title}}" data-title="{{titleData.title}}" data-link="{{titleData.link_url}}" data-click="LOG_LINK" target="_blank" data-type="{{ttsType}}" data-subject="{{ttsSubject}}" data-nid="{{\'news_\' + titleData.id}}"><span s-if="!!titleLabel" class="title-topic-label">{{ titleLabel }}</span>{{ titleData.title }} </a> ', "assign");
    },
    7: function (t, a, e) {
      "use strict";

      Object.defineProperty(a, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var i,
        s = cc11001100_hook("s", e(1), "var-init"),
        e = cc11001100_hook("e", e(0), "var-init"),
        s = cc11001100_hook("s", (i = cc11001100_hook("i", e.Component, "assign"), (0, s.__extends)(n, i), n.prototype.initData = cc11001100_hook("n.prototype.initData", function () {
          return {
            titleData: {},
            ttsSubject: cc11001100_hook("ttsSubject", "", "object-key-init"),
            ttsType: cc11001100_hook("ttsType", "", "object-key-init"),
            clampNum: cc11001100_hook("clampNum", 2, "object-key-init")
          };
        }, "assign"), n.computed = cc11001100_hook("n.computed", {
          needMargin: function () {
            var t = cc11001100_hook("t", this.data.get("titleData").layout, "var-init");
            return "s-news-special-item-tpl-1" !== t && "s-news-special-item-tpl-4" !== t;
          },
          needClamp: function () {
            return "s-news-special-item-tpl-2" !== this.data.get("titleData").layout;
          },
          titleLabel: function () {
            return (this.data.get("titleData").title_prefix_rich || {}).content || "";
          }
        }, "assign"), n), "var-init");
      function n() {
        return null !== i && i.apply(this, arguments) || this;
      }
      a["default"] = cc11001100_hook("a[\"default\"]", s, "assign");
    },
    8: function (t, a) {
      t.exports = cc11001100_hook("t.exports", ' <div class="s-pic-content {{needMargin ? \'c-gap-top-large c-gap-bottom\' : \'\'}} {{picData.layout === \'s-news-special-item-tpl-2\' ? \'s-pic-content-tpl2\' : picData.layout === \'s-news-special-item-tpl-1\' ? \'s-pic-content-tpl1\' : \'\'}}"> <div s-if="picData.layout === \'s-news-special-item-tpl-2\'" class="s-pic-content-own"> <ul class="s-news-content-imgs clearfix"> <li s-for="item, index in picData.image" class="item-img-wrap {{picWidthClass}} {{index === picData.image.length - 1 ? \'c-span-last\' : \'\'}}"> <a class="c-img c-img-radius-large" href="{{picData.imgJumpUrl ? picData.imgJumpUrl : picData.link_url}}" target="_blank" data-click="LOG_LINK" title="{{picData.title}}" data-title="{{picData.title}}"> <img class="s-news-img" src="{{item}}"> <div class="s-img-mask c-img-radius-large"></div> <template s-if="picData.duration"> <img src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/mantpl/img/news/video_play-dad4325811.png" class="s-video-playicon"> <div class="s-video-duration">{{ picData.duration }}</div> </template> </a> </li> </ul> </div> <ul s-else class="s-news-content-imgs clearfix"> <li s-for="item, index in picData.image" class="item-img-wrap {{picWidthClass}} {{index === picData.image.length - 1 ? \'c-span-last\' : \'\'}}"> <a class="c-img {{computedImgClass(index)}}" href="{{picData.imgJumpUrl ? picData.imgJumpUrl : picData.link_url}}" target="_blank" data-click="LOG_LINK" title="{{picData.title}}" data-title="{{picData.title}}"> <img class="s-news-img {{picData.layout === \'s-news-special-item-tpl-4\' ? \'s-news-img-tpl4\' : \'\'}}" src="{{item}}"> <div class="s-img-mask {{computedImgClass(index)}}"></div> <template s-if="picData.duration"> <img src="https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/mantpl/img/news/video_play-dad4325811.png" class="s-video-playicon"> <div class="s-video-duration">{{ picData.duration }}</div> </template> </a> </li> </ul> </div> ', "assign");
    },
    9: function (t, a, e) {
      "use strict";

      Object.defineProperty(a, "__esModule", {
        value: cc11001100_hook("value", !0, "object-key-init")
      });
      var i,
        s = cc11001100_hook("s", e(1), "var-init"),
        e = cc11001100_hook("e", e(0), "var-init"),
        s = cc11001100_hook("s", (i = cc11001100_hook("i", e.Component, "assign"), (0, s.__extends)(n, i), n.prototype.initData = cc11001100_hook("n.prototype.initData", function () {
          return {
            picData: {}
          };
        }, "assign"), n.prototype.computedImgClass = cc11001100_hook("n.prototype.computedImgClass", function (t) {
          return t === (this.data.get("picData").image && this.data.get("picData").image.length) - 1 ? "c-img-radius-right-l c-img-radius-left-s" : 0 === t ? "c-img-radius-left-l c-img-radius-right-s" : "c-img-radius-s";
        }, "assign"), n.computed = cc11001100_hook("n.computed", {
          needMargin: function () {
            var t = cc11001100_hook("t", this.data.get("picData").layout, "var-init");
            return "s-news-special-item-tpl-1" === t || "s-news-special-item-tpl-4" === t;
          },
          picWidthClass: function () {
            return "s-news-special-item-tpl-4" === this.data.get("picData").layout ? "c-span8" : "c-span4";
          }
        }, "assign"), n), "var-init");
      function n() {
        return null !== i && i.apply(this, arguments) || this;
      }
      a["default"] = cc11001100_hook("a[\"default\"]", s, "assign");
    }
  }, "assign"), l = cc11001100_hook("l", {}, "assign"), n.m = cc11001100_hook("n.m", c, "assign"), n.c = cc11001100_hook("n.c", l, "assign"), n.d = cc11001100_hook("n.d", function (t, a, e) {
    n.o(t, a) || Object.defineProperty(t, a, {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      get: cc11001100_hook("get", e, "object-key-init")
    });
  }, "assign"), n.r = cc11001100_hook("n.r", function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: cc11001100_hook("value", "Module", "object-key-init")
    }), Object.defineProperty(t, "__esModule", {
      value: cc11001100_hook("value", !0, "object-key-init")
    });
  }, "assign"), n.t = cc11001100_hook("n.t", function (a, t) {
    if (1 & t && (a = cc11001100_hook("a", n(a), "assign")), 8 & t) return a;
    if (4 & t && "object" == typeof a && a && a.__esModule) return a;
    var e = cc11001100_hook("e", Object.create(null), "var-init");
    if (n.r(e), Object.defineProperty(e, "default", {
      enumerable: cc11001100_hook("enumerable", !0, "object-key-init"),
      value: cc11001100_hook("value", a, "object-key-init")
    }), 2 & t && "string" != typeof a) for (var i in a) n.d(e, i, function (t) {
      return a[t];
    }.bind(null, i));
    return e;
  }, "assign"), n.n = cc11001100_hook("n.n", function (t) {
    var a = cc11001100_hook("a", t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    }, "var-init");
    return n.d(a, "a", a), a;
  }, "assign"), n.o = cc11001100_hook("n.o", function (t, a) {
    return Object.prototype.hasOwnProperty.call(t, a);
  }, "assign"), n.p = cc11001100_hook("n.p", "https://mss0.bdstatic.com/se/cache", "assign"), n(n.s = cc11001100_hook("n.s", 244, "assign"));
  function n(t) {
    cc11001100_hook("t", t, "function-parameter");
    if (l[t]) return l[t].exports;
    var a = cc11001100_hook("a", l[t] = cc11001100_hook("l[t]", {
      i: cc11001100_hook("i", t, "object-key-init"),
      l: cc11001100_hook("l", !1, "object-key-init"),
      exports: {}
    }, "assign"), "var-init");
    return c[t].call(a.exports, a, a.exports, n), a.l = cc11001100_hook("a.l", !0, "assign"), a.exports;
  }
  var c, l;
});