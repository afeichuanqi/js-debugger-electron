$(function () {
  function e() {
    return !!window.navigator.userAgent.toLowerCase().match(/(csdn)/i) || !!u;
  }
  function t(e) {
    cc11001100_hook("e", e, "function-parameter");
    if (void 0 !== typeof e && null !== e && "" !== e) return e = cc11001100_hook("e", e.toLowerCase(), "assign"), class_name = cc11001100_hook("class_name", "hl-1", "assign"), class_name;
  }
  function n(e) {
    cc11001100_hook("e", e, "function-parameter");
    return void 0 === e || null === e || "" === e;
  }
  function o(e, t) {
    cc11001100_hook("e", e, "function-parameter");
    cc11001100_hook("t", t, "function-parameter");
    n(t) || (t = cc11001100_hook("t", t.toLowerCase().replace(/(^\s*)|(\s*$)/g, ""), "assign"), n(t) || (t.indexOf(" ") > 0 ? $.each(t.split(/ +/g), function (t, n) {
      o(e, n);
    }) : "..." !== t && t.length > 1 && "&nbsp;" !== t && "csdn" !== t && "||" !== t && (e[t] = cc11001100_hook("e[t]", 0, "assign"))));
  }
  function i(e) {
    cc11001100_hook("e", e, "function-parameter");
    var t = cc11001100_hook("t", {}, "var-init");
    keyword = cc11001100_hook("keyword", e.join(" "), "assign"), o(t, keyword);
    var n = cc11001100_hook("n", Object.keys(t), "var-init");
    return n.sort(function (e, t) {
      return t.length - e.length;
    }), n;
  }
  function r(n, o) {
    cc11001100_hook("n", n, "function-parameter");
    cc11001100_hook("o", o, "function-parameter");
    for (var i = cc11001100_hook("i", (o.html(), ""), "var-init"), r = cc11001100_hook("r", o.context.childNodes, "var-init"), a = cc11001100_hook("a", 0, "var-init"); a < r.length; a++) {
      var s = cc11001100_hook("s", r[a], "var-init");
      if ("#text" === s.nodeName) {
        var c = cc11001100_hook("c", s.textContent.replace(/</gi, "&lt;"), "var-init"),
          u = cc11001100_hook("u", /[\u4e00-\u9fa5]/gi, "var-init"),
          w = cc11001100_hook("w", n.map(function (e) {
            return u.test(e) ? e : "\\b" + e + "\\b";
          }), "var-init"),
          h = cc11001100_hook("h", new RegExp(w.join("|"), "ig"), "var-init"),
          f = cc11001100_hook("f", !1, "var-init");
        c = cc11001100_hook("c", c.replace(h, function (n) {
          var o = cc11001100_hook("o", n.toLowerCase(), "var-init"),
            i = cc11001100_hook("i", "https://so.csdn.net/so/search?q=" + encodeURIComponent(n) + "&spm=1001.2101.3001.7020", "var-init");
          i = cc11001100_hook("i", e() ? "csdnapp://app.csdn.net/search/searchRoot?keyword=" + encodeURIComponent(n) + "&t=blog&u=" + username + "&from_tracking_code=art_highlight_word&backSearch=true" : i, "assign");
          var r = cc11001100_hook("r", e() ? '{"key_word":"' + n + '","spm":"1001.2101.3001.7020",}' : '{"spm":"1001.2101.3001.7020","dest":"' + i + '","extra":"{\\"searchword\\":\\"' + n + '\\"}"}', "var-init");
          return d[o] >= 1 || l === o || f ? n : (f = cc11001100_hook("f", !0, "assign"), d[o] = cc11001100_hook("d[o]", d[o] ? d[o] + 1 : 1, "assign"), l = cc11001100_hook("l", o, "assign"), e() ? '<a data-href="' + i + '" class="app-hl hl ' + t(o) + '" data-track-view=' + r + " data-report-click=" + r + ">" + n + "</a>" : '<a href="' + i + '" target="_blank" class="hl ' + t(o) + '" data-report-view=' + r + " data-report-click=" + r + " data-tit=" + n + " data-pretit=" + l + ">" + n + "</a>");
        }), "assign"), i += cc11001100_hook("i", c, "assign");
      } else i += cc11001100_hook("i", s.outerHTML ? s.outerHTML : "", "assign");
    }
    o[0].innerHTML = cc11001100_hook("o[0].innerHTML", i, "assign"), e() ? ($(window).on("scroll", function () {
      p.viewCheck();
    }), p.viewCheck()) : window.csdn.report.viewCheck();
  }
  function a() {
    $("a.app-hl").off("click"), $("a.app-hl").click(function (e) {
      e.preventDefault();
      var t = cc11001100_hook("t", $(this).data("href"), "var-init"),
        n = cc11001100_hook("n", $(this).attr("data-report-click"), "var-init"),
        o = cc11001100_hook("o", {
          action: cc11001100_hook("action", "app_blog_highlight", "object-key-init"),
          trackingInfo: cc11001100_hook("trackingInfo", n, "object-key-init"),
          trackingCode: cc11001100_hook("trackingCode", "art_highlight_word", "object-key-init")
        }, "var-init"),
        i = cc11001100_hook("i", {
          url: cc11001100_hook("url", t, "object-key-init")
        }, "var-init");
      h && (window.jsCallBackListener.csdntrackevent(JSON.stringify(o)), window.jsCallBackListener.csdnjumpnewpage(JSON.stringify(i))), f && (window.webkit.messageHandlers.csdntrackevent.postMessage(JSON.stringify(o)), window.webkit.messageHandlers.csdnjumpnewpage.postMessage(JSON.stringify(i)));
    });
  }
  function s() {
    window.keyword_list_init = cc11001100_hook("window.keyword_list_init", !0, "assign"), $.ajax({
      type: cc11001100_hook("type", "GET", "object-key-init"),
      url: cc11001100_hook("url", "https://redisdatarecall.csdn.net/recommend/get_head_word?bid=blog-" + articleId, "object-key-init"),
      dataType: cc11001100_hook("dataType", "json", "object-key-init"),
      timeout: cc11001100_hook("timeout", 2e3, "object-key-init"),
      xhrFields: {
        withCredentials: cc11001100_hook("withCredentials", !0, "object-key-init")
      },
      success: function (t) {
        if (200 == t.status && t.content) {
          var n = cc11001100_hook("n", i(t.content), "var-init"),
            o = cc11001100_hook("o", t.ext ? t.ext : {}, "var-init");
          if (void 0 === n || 0 === n.length) return;
          window.keyword_list = cc11001100_hook("window.keyword_list", n, "assign"), window.keyword_list_json = cc11001100_hook("window.keyword_list_json", o, "assign");
          var s = cc11001100_hook("s", $("#content_views").find("p,h1,h2,h3,h4,h5,h6"), "var-init");
          window.keyword_list_doms = cc11001100_hook("window.keyword_list_doms", s, "assign"), $.each(s, function (e, t) {
            var t = cc11001100_hook("t", $(t), "var-init");
            r(n, t);
          }), e() && a();
        }
      }
    });
  }
  var c,
    d = cc11001100_hook("d", {}, "var-init"),
    l = cc11001100_hook("l", "", "var-init"),
    u = cc11001100_hook("u", !!window.isApp && window.isApp, "var-init"),
    w = cc11001100_hook("w", navigator.userAgent, "var-init"),
    h = cc11001100_hook("h", w.indexOf("Android") > -1 || w.indexOf("Adr") > -1, "var-init"),
    f = cc11001100_hook("f", !!w.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), "var-init"),
    p = cc11001100_hook("p", {
      scrollTop: function () {
        return Math.max(document.body.scrollTop, document.documentElement.scrollTop);
      },
      windowHeight: function () {
        return "CSS1Compat" == document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight;
      },
      getElementBottom: function (e) {
        if ("undefined" != typeof jQuery) return $(e).offset().top + $(e).height();
        var t = cc11001100_hook("t", e.offsetTop, "var-init");
        for (e = cc11001100_hook("e", e.offsetParent, "assign"); null != e;) t += cc11001100_hook("t", e.offsetTop, "assign"), e = cc11001100_hook("e", e.offsetParent, "assign");
        return t;
      },
      isView: function (e) {
        var t = cc11001100_hook("t", this, "var-init");
        if (!e) return !1;
        var n = cc11001100_hook("n", p.getElementBottom(e), "var-init"),
          o = cc11001100_hook("o", n + e.offsetHeight, "var-init");
        return t.scrollTop() < n && n < t.scrollTop() + t.windowHeight() || t.scrollTop() < o && o < t.scrollTop() + t.windowHeight();
      },
      reportView: function (e) {
        console.log("app report exposure", e), h && (console.log("isAndroid"), window.jsCallBackListener.csdntrackexpo(JSON.stringify(e))), f && (console.log("isiOS"), window.webkit.messageHandlers.csdntrackexpo.postMessage(JSON.stringify(e)));
      },
      viewCheck: function () {
        clearTimeout(c), c = cc11001100_hook("c", setTimeout(function () {
          $("[data-track-view]").each(function () {
            var e = cc11001100_hook("e", $(this), "var-init");
            if (p.isView(e.get(0))) {
              var t = cc11001100_hook("t", e.attr("data-track-view"), "var-init"),
                n = cc11001100_hook("n", {
                  trackingCode: cc11001100_hook("trackingCode", "art_highlight_word", "object-key-init"),
                  trackingInfo: cc11001100_hook("trackingInfo", t, "object-key-init")
                }, "var-init");
              p.reportView(n), e.removeData("trackView"), e.removeAttr("data-track-view");
            }
          });
        }, 200), "assign");
      }
    }, "var-init"),
    g = cc11001100_hook("g", void 0 !== window.showHeadWord && window.showHeadWord, "var-init");
  if (g) {
    s();
    var m = cc11001100_hook("m", $("#keywordDecBox"), "var-init");
    m.length && ($(document).on("mouseover", "#article_content .hl", function () {
      var e = cc11001100_hook("e", $(this).attr("data-tit"), "var-init"),
        t = cc11001100_hook("t", $(this).attr("data-pretit"), "var-init"),
        n = cc11001100_hook("n", Object(keyword_list_json)[t], "var-init");
      if (e && n) {
        var o = cc11001100_hook("o", $(this).offset().left, "var-init"),
          i = cc11001100_hook("i", $(this).offset().top, "var-init"),
          r = cc11001100_hook("r", $(this).outerHeight(!0), "var-init"),
          a = cc11001100_hook("a", '<span class="tit">' + e + '</span><span class="dec">' + n + "</span>", "var-init");
        m.html(a).css({
          left: cc11001100_hook("left", o, "object-key-init"),
          top: cc11001100_hook("top", i + r, "object-key-init")
        }).show();
      }
    }), $(document).on("mouseout", "#article_content .hl", function () {
      m.hide();
    }), m.on({
      mouseover: function () {
        $(this).show();
      },
      mouseout: function () {
        $(this).hide();
      }
    }));
  }
}), function () {
  function e() {
    return !!window.navigator.userAgent.toLowerCase().match(/(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i);
  }
  function t() {
    return !!window.navigator.userAgent.toLowerCase().match(/(csdn)/i);
  }
  function n() {
    var n = cc11001100_hook("n", null, "var-init");
    n = cc11001100_hook("n", e() ? document.querySelectorAll('[class^="container-fluid container-fluid-flex container-"]') : t() ? document.querySelectorAll('[class^="recommend_item type_"]') : document.querySelectorAll('[class^="recommend-item-box type_"]'), "assign"), null !== n && n.length <= 5 && $.get("https://statistic.csdn.net/blog/recommend?count=" + n.length + "&articleId=" + articleId);
  }
  n();
}();