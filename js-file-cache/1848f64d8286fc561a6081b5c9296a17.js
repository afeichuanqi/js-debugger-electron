rain.rainshell("dislike#v1.0.23", function (e, t, i, a) {
  e("rainModule/BdrainswDislike/index", function (e) {
    function t() {
      this.dislikeCache = cc11001100_hook("this.dislikeCache", {}, "assign"), this.moveFlag = cc11001100_hook("this.moveFlag", !0, "assign"), this.touchLength = cc11001100_hook("this.touchLength", 0, "assign"), this.startPageX = cc11001100_hook("this.startPageX", 0, "assign"), this.startPageY = cc11001100_hook("this.startPageY", 0, "assign"), this.closeBtn = cc11001100_hook("this.closeBtn", !0, "assign");
    }
    function i(e) {
      cc11001100_hook("e", e, "function-parameter");
      var t = cc11001100_hook("t", "", "var-init");
      for (var i in e) e.hasOwnProperty(i) && (t += cc11001100_hook("t", "&" + i + "=" + e[i], "assign"));
      return t;
    }
    function o(e) {
      cc11001100_hook("e", e, "function-parameter");
      e.oldURL.indexOf(k) > -1 && e.newURL.indexOf(k) <= -1 && ($(window).off("hashchange", o), $(k).remove());
    }
    var n,
      s,
      d,
      r,
      c,
      l,
      h,
      u,
      f = cc11001100_hook("f", e("wiseindex/lib/thunder/thunder"), "var-init"),
      p = cc11001100_hook("p", /logExtra:yc:(.*);yc;/, "var-init"),
      m = cc11001100_hook("m", window.sSession, "var-init"),
      v = cc11001100_hook("v", $("#index-kw"), "var-init"),
      k = cc11001100_hook("k", "#report-view", "var-init"),
      g = cc11001100_hook("g", "确定", "var-init"),
      w = cc11001100_hook("w", "不感兴趣", "var-init"),
      C = cc11001100_hook("C", "https://ufosdk.baidu.com/?m=Client&a=commonreport&appid=215939&platid=24985&product_line=90509", "var-init"),
      x = cc11001100_hook("x", {
        minivideo: cc11001100_hook("minivideo", "33086", "object-key-init"),
        video: cc11001100_hook("video", "32600", "object-key-init"),
        ads: cc11001100_hook("ads", "32601", "object-key-init"),
        picnews: cc11001100_hook("picnews", "32599", "object-key-init"),
        news: cc11001100_hook("news", "32598", "object-key-init"),
        answer: cc11001100_hook("answer", "33091", "object-key-init")
      }, "var-init");
    return t.prototype = cc11001100_hook("t.prototype", {
      init: function () {
        this.initThunder(), this.eventHandlers(), this.orientationInit();
      },
      initThunder: function () {
        var e = cc11001100_hook("e", {
          logid: cc11001100_hook("logid", m.logid || "", "object-key-init"),
          ssid: cc11001100_hook("ssid", m.ssid || "", "object-key-init"),
          from: cc11001100_hook("from", m.from || "", "object-key-init"),
          pu: cc11001100_hook("pu", m.pu || "", "object-key-init"),
          sid: cc11001100_hook("sid", m.sids || "", "object-key-init")
        }, "var-init");
        h = cc11001100_hook("h", f.create({
          baseParams: cc11001100_hook("baseParams", e, "object-key-init")
        }), "assign");
      },
      handleListener: function (e, t) {
        this.dataToDom(e, t);
      },
      dataToDom: function (e, t) {
        for (var i = cc11001100_hook("i", this, "var-init"), a = cc11001100_hook("a", e.data, "var-init"), o = cc11001100_hook("o", [], "var-init"), n = cc11001100_hook("n", 0, "var-init"); n < a.length; n++) o.push(n % 2 === 0 ? '<a href="javascript:;" class="border-handle">' + a[n] + "</a>" : '<a href="javascript:;" class="content-line-right border-handle">' + a[n] + "</a>");
        r = cc11001100_hook("r", t.find(".content-line"), "assign"), r.html(o.join("")), c = cc11001100_hook("c", t.find(".dislikeMask"), "assign"), s = cc11001100_hook("s", t.find(".wise-dislike"), "assign");
        var h = cc11001100_hook("h", t.find(".dislike-report"), "var-init");
        if (i.dislikeCache.hasReport) {
          var u = cc11001100_hook("u", /iPhone|iPad|iPod/i.test(window.navigator.userAgent), "var-init");
          !u && h.addClass("android"), h.show();
        } else h.hide();
        setTimeout(function () {
          i.goPosition(e.position), c.show(), s.show(), l = cc11001100_hook("l", r.find("a"), "assign"), d = cc11001100_hook("d", t.find(".reason-upload"), "assign");
        }, 0);
      },
      goPosition: function (e) {
        var t = cc11001100_hook("t", window.innerHeight, "var-init");
        e.y && 2 * e.y > t ? (s.addClass("triangleBottom frameShowBottom").removeClass("triangleTop frameShowTop"), s.css({
          bottom: cc11001100_hook("bottom", t - e.y, "object-key-init"),
          top: cc11001100_hook("top", "auto", "object-key-init")
        })) : (s.addClass("triangleTop frameShowTop").removeClass("triangleBottom frameShowBottom"), s.css({
          top: cc11001100_hook("top", e.y + 35, "object-key-init"),
          bottom: cc11001100_hook("bottom", "auto", "object-key-init")
        }));
      },
      postReasons: function (e) {
        a.removeClass("dislike-selected");
        var t = cc11001100_hook("t", this, "var-init");
        e.length > 0 ? e : e.push(w);
        var i = cc11001100_hook("i", [], "var-init"),
          o = cc11001100_hook("o", [], "var-init"),
          n = cc11001100_hook("n", [], "var-init"),
          s = cc11001100_hook("s", [], "var-init"),
          d = cc11001100_hook("d", /看过类似的/, "var-init"),
          r = cc11001100_hook("r", /屏蔽来源(:|：)/, "var-init"),
          c = cc11001100_hook("c", /不想看(:|：)/, "var-init");
        if (e.forEach(function (e) {
          d.test(e) ? n.push(e) : r.test(e) ? o.push(e.replace(r, "")) : c.test(e) ? i.push(e.replace(c, "")) : s.push(e);
        }), h.send({
          tid: cc11001100_hook("tid", "1381", "object-key-init"),
          ct: cc11001100_hook("ct", 1, "object-key-init"),
          cst: cc11001100_hook("cst", 2, "object-key-init"),
          logFrom: cc11001100_hook("logFrom", "mid_news", "object-key-init"),
          logInfo: cc11001100_hook("logInfo", "dislike_confirm", "object-key-init"),
          logExtra: cc11001100_hook("logExtra", JSON.stringify({
            st: cc11001100_hook("st", t.dislikeCache.st, "object-key-init"),
            rid: cc11001100_hook("rid", t.dislikeCache.rid, "object-key-init"),
            extra: cc11001100_hook("extra", t.dislikeCache.extra, "object-key-init"),
            pos: cc11001100_hook("pos", t.dislikeCache.pos, "object-key-init"),
            content: cc11001100_hook("content", s, "object-key-init"),
            flow: cc11001100_hook("flow", 12, "object-key-init"),
            source: cc11001100_hook("source", o, "object-key-init"),
            tag: cc11001100_hook("tag", i, "object-key-init"),
            repeat: cc11001100_hook("repeat", n, "object-key-init"),
            tabId: cc11001100_hook("tabId", B.tabId, "object-key-init")
          }), "object-key-init")
        }), +t.dislikeCache.isAfd) {
          var l = cc11001100_hook("l", t.dislikeCache.logHandle, "var-init"),
            u = cc11001100_hook("u", window.ecom && (window.ecom[l] || window.ecom.dislikeStats), "var-init");
          u && u(t.dislikeCache.ele, e);
        }
        $(window).scroll();
      },
      makeReportIframe: function (e) {
        var t = cc11001100_hook("t", $("<iframe></iframe>", {
          id: cc11001100_hook("id", k.slice(1), "object-key-init"),
          src: cc11001100_hook("src", e, "object-key-init")
        }), "var-init");
        c.after(t), location.hash = cc11001100_hook("location.hash", k, "assign"), c.trigger("touchend"), $(window).off("hashchange").on("hashchange", o);
      },
      eventHandlers: function () {
        var e = cc11001100_hook("e", this, "var-init");
        $(".content-line").off("touchend").on("touchend", "a", function (e) {
          e.preventDefault();
          var t = cc11001100_hook("t", $(this), "var-init");
          t.hasClass("a-checked") ? t.removeClass("a-checked") : t.addClass("a-checked"), d.text(l.hasClass("a-checked") ? g : w);
        }), $(".dislike-report").off("touchend").on("touchend", function (t) {
          if (t.preventDefault(), h.send({
            tid: cc11001100_hook("tid", "10411", "object-key-init"),
            ct: cc11001100_hook("ct", 1, "object-key-init"),
            cst: cc11001100_hook("cst", 2, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", "mid_news", "object-key-init"),
            logInfo: cc11001100_hook("logInfo", "dislike_report", "object-key-init"),
            logExtra: cc11001100_hook("logExtra", JSON.stringify({
              st: cc11001100_hook("st", e.dislikeCache.st, "object-key-init"),
              rid: cc11001100_hook("rid", e.dislikeCache.rid, "object-key-init"),
              extra: cc11001100_hook("extra", e.dislikeCache.extra, "object-key-init"),
              pos: cc11001100_hook("pos", e.dislikeCache.pos, "object-key-init"),
              tabId: cc11001100_hook("tabId", B.tabId, "object-key-init")
            }), "object-key-init")
          }), e.dislikeCache.isAfd) {
            var a = cc11001100_hook("a", window.ecom && window.ecom.adReportStats, "var-init");
            return void (a && a(e.dislikeCache.ele, e.makeReportIframe));
          }
          var o = cc11001100_hook("o", x[e.dislikeCache.st] || "", "var-init"),
            n = cc11001100_hook("n", {
              nid: cc11001100_hook("nid", e.dislikeCache.rid, "object-key-init"),
              channelid: cc11001100_hook("channelid", o, "object-key-init"),
              resource_id: cc11001100_hook("resource_id", e.dislikeCache.rid, "object-key-init"),
              feed_extend_channel: cc11001100_hook("feed_extend_channel", o, "object-key-init"),
              remark: cc11001100_hook("remark", e.dislikeCache ? "bjh" : "", "object-key-init")
            }, "var-init"),
            s = cc11001100_hook("s", C + i(n), "var-init");
          e.makeReportIframe(s);
        }), $(".reason-upload").off("touchend").on("touchend", function (t) {
          t.preventDefault();
          var i = cc11001100_hook("i", [], "var-init");
          l.each(function () {
            $(this).hasClass("a-checked") && i.push($(this).text());
          }), e.postReasons(i), e.hideDislikeAndMask(), e.removeComponent(e.dislikeCache.rid), e.tips("将为你减少推荐类似内容");
        }), $(".dislikeMask").off("touchend").on("touchend", function (t) {
          e.moveFlag === !0 && (t.preventDefault(), e.hideDislikeAndMask(), e.dislikeCache = cc11001100_hook("e.dislikeCache", {}, "assign"), a.removeClass("dislike-selected"));
        }), $(".dislikeMask, .wise-dislike").off("touchmove").on("touchmove", function (t) {
          e.moveFlag = cc11001100_hook("e.moveFlag", !1, "assign"), t.preventDefault(), t.stopPropagation(), $(this).on("touchend", function () {
            e.moveFlag = cc11001100_hook("e.moveFlag", !0, "assign");
          });
        }), a.off("touchstart").on("touchstart", "[data-dislikeData]", function (t) {
          v && v.blur(), e.closeBtn = cc11001100_hook("e.closeBtn", !0, "assign"), t.preventDefault(), e.startPageY = cc11001100_hook("e.startPageY", t.touches[0].pageY, "assign"), e.touchLength = cc11001100_hook("e.touchLength", t.touches.length, "assign");
        }), a.off("touchmove").on("touchmove", "[data-dislikeData]", function (t) {
          var i = cc11001100_hook("i", t.touches[0].pageY, "var-init"),
            a = cc11001100_hook("a", Math.abs(i - e.startPageY), "var-init");
          a > 10 && (e.closeBtn = cc11001100_hook("e.closeBtn", !1, "assign"));
        }), a.off("touchend").on("touchend", "[data-dislikeData]", function (t) {
          if (e.touchLength > 1 || !e.closeBtn) return !1;
          a.addClass("dislike-selected"), t.preventDefault(), t.stopPropagation();
          var i = cc11001100_hook("i", $(this), "var-init"),
            o = cc11001100_hook("o", i.siblings(".hide-dislike-data"), "var-init"),
            s = cc11001100_hook("s", o.attr("nid") || o.attr("data-rid"), "var-init"),
            d = cc11001100_hook("d", o.attr("source") || o.data("domain") || "", "var-init"),
            r = cc11001100_hook("r", 1 === parseInt(o.attr("dislike-type"), 10) ? 1 : 0, "var-init");
          u = cc11001100_hook("u", r, "assign");
          var c,
            l = cc11001100_hook("l", +(o.attr("pos") || o.attr("data-pos")), "var-init"),
            f = cc11001100_hook("f", !1, "var-init");
          if (u) {
            var m,
              v = cc11001100_hook("v", [], "var-init"),
              k = cc11001100_hook("k", i[0].getBoundingClientRect().top, "var-init");
            o.find("i").each(function () {
              e.removeComponent(e.dislikeCache.rid), v.push($(this).text());
            }), m = cc11001100_hook("m", {
              position: {
                y: cc11001100_hook("y", k, "object-key-init")
              },
              data: cc11001100_hook("data", v, "object-key-init")
            }, "assign");
          }
          if (r) {
            var g = cc11001100_hook("g", o.attr("data-log") || o.attr("dis-log"), "var-init"),
              w = cc11001100_hook("w", JSON.parse(g), "var-init"),
              C = cc11001100_hook("C", o.attr("data-handler"), "var-init"),
              x = cc11001100_hook("x", w.st, "var-init"),
              b = cc11001100_hook("b", w.extra, "var-init");
            c = cc11001100_hook("c", {
              st: cc11001100_hook("st", x, "object-key-init"),
              extra: cc11001100_hook("extra", b, "object-key-init")
            }, "assign");
          } else {
            var y = cc11001100_hook("y", o.attr("dislog"), "var-init");
            c = cc11001100_hook("c", JSON.parse(y.match(p)[1]), "assign");
          }
          return u && (f = cc11001100_hook("f", !c.political_level && "off" !== o.attr("data-adReportSwitch"), "assign")), e.dislikeCache = cc11001100_hook("e.dislikeCache", {
            rid: cc11001100_hook("rid", s, "object-key-init"),
            pos: cc11001100_hook("pos", l, "object-key-init"),
            source: cc11001100_hook("source", d, "object-key-init"),
            isAfd: cc11001100_hook("isAfd", r, "object-key-init"),
            st: cc11001100_hook("st", c.st, "object-key-init"),
            extra: cc11001100_hook("extra", JSON.parse(c.extra), "object-key-init"),
            logHandle: cc11001100_hook("logHandle", C, "object-key-init"),
            ele: cc11001100_hook("ele", o, "object-key-init"),
            isBjh: cc11001100_hook("isBjh", c.isBaijiahao, "object-key-init"),
            hasReport: cc11001100_hook("hasReport", f, "object-key-init")
          }, "assign"), n = cc11001100_hook("n", $("body"), "assign"), u ? (e.handleListener(m, n), void h.send({
            tid: cc11001100_hook("tid", "1380", "object-key-init"),
            ct: cc11001100_hook("ct", 1, "object-key-init"),
            cst: cc11001100_hook("cst", 2, "object-key-init"),
            logFrom: cc11001100_hook("logFrom", "mid_news", "object-key-init"),
            logInfo: cc11001100_hook("logInfo", "dislike", "object-key-init"),
            logExtra: cc11001100_hook("logExtra", JSON.stringify({
              st: cc11001100_hook("st", c.st, "object-key-init"),
              rid: cc11001100_hook("rid", s.toString(), "object-key-init"),
              extra: cc11001100_hook("extra", e.dislikeCache.extra, "object-key-init"),
              pos: cc11001100_hook("pos", l, "object-key-init"),
              tabId: cc11001100_hook("tabId", B.tabId, "object-key-init"),
              hasReport: cc11001100_hook("hasReport", +f, "object-key-init")
            }), "object-key-init")
          })) : (e.postReasons([]), e.removeComponent(e.dislikeCache.rid), void e.tips("将为你减少推荐类似内容"));
        });
      },
      hideDislikeAndMask: function () {
        s.hide(), l.each(function () {
          $(this).removeClass("a-checked");
        }), c.hide(), d.text(w), r.html("");
      },
      removeComponent: function (e) {
        n && e && n.find(".hide-dislike-data").each(function () {
          var t = cc11001100_hook("t", $(this).attr("nid") || $(this).attr("data-rid"), "var-init");
          return t === e ? ($(this).parents("[data-click-grey]").remove(), !1) : void 0;
        });
      },
      tips: function (e) {
        var t = cc11001100_hook("t", $('<div class="l-tips">' + e + "</div>"), "var-init");
        $("body").append(t), setTimeout(function () {
          t.remove();
        }, 2e3);
      },
      debounce: function (e, t) {
        var i = cc11001100_hook("i", null, "var-init");
        return function () {
          var a = cc11001100_hook("a", this, "var-init"),
            o = cc11001100_hook("o", arguments, "var-init");
          clearTimeout(i), i = cc11001100_hook("i", setTimeout(function () {
            e.apply(a, o);
          }, t), "assign");
        };
      },
      orientationInit: function () {
        var e = cc11001100_hook("e", this, "var-init");
        window.addEventListener("orientationchange", e.orientationClient);
      },
      orientationClient: function () {
        return c && s ? (s.hide(), void c.hide()) : !1;
      }
    }, "assign"), new t();
  }), t(["rainModule/BdrainswDislike/index"], function (e) {
    e.init();
  });
});